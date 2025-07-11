import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AmazonBedrockAgentBuildTimeLambda {
  associateAgentCollaborator(
    input: AssociateAgentCollaboratorRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  associateAgentKnowledgeBase(
    input: AssociateAgentKnowledgeBaseRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createAgent(
    input: CreateAgentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createAgentActionGroup(
    input: CreateAgentActionGroupRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createAgentAlias(
    input: CreateAgentAliasRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createDataSource(
    input: CreateDataSourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createFlow(
    input: CreateFlowRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createFlowAlias(
    input: CreateFlowAliasRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createFlowVersion(
    input: CreateFlowVersionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createKnowledgeBase(
    input: CreateKnowledgeBaseRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createPrompt(
    input: CreatePromptRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createPromptVersion(
    input: CreatePromptVersionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteAgent(
    input: DeleteAgentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteAgentActionGroup(
    input: DeleteAgentActionGroupRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteAgentAlias(
    input: DeleteAgentAliasRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteAgentVersion(
    input: DeleteAgentVersionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteDataSource(
    input: DeleteDataSourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteFlow(
    input: DeleteFlowRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteFlowAlias(
    input: DeleteFlowAliasRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteFlowVersion(
    input: DeleteFlowVersionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteKnowledgeBase(
    input: DeleteKnowledgeBaseRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteKnowledgeBaseDocuments(
    input: DeleteKnowledgeBaseDocumentsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deletePrompt(
    input: DeletePromptRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  disassociateAgentCollaborator(
    input: DisassociateAgentCollaboratorRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  disassociateAgentKnowledgeBase(
    input: DisassociateAgentKnowledgeBaseRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getAgent(
    input: GetAgentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getAgentActionGroup(
    input: GetAgentActionGroupRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getAgentAlias(
    input: GetAgentAliasRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getAgentCollaborator(
    input: GetAgentCollaboratorRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getAgentKnowledgeBase(
    input: GetAgentKnowledgeBaseRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getAgentVersion(
    input: GetAgentVersionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getDataSource(
    input: GetDataSourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getFlow(
    input: GetFlowRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getFlowAlias(
    input: GetFlowAliasRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getFlowVersion(
    input: GetFlowVersionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getIngestionJob(
    input: GetIngestionJobRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getKnowledgeBase(
    input: GetKnowledgeBaseRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getKnowledgeBaseDocuments(
    input: GetKnowledgeBaseDocumentsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getPrompt(
    input: GetPromptRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  ingestKnowledgeBaseDocuments(
    input: IngestKnowledgeBaseDocumentsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listAgentActionGroups(
    input: ListAgentActionGroupsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listAgentAliases(
    input: ListAgentAliasesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listAgentCollaborators(
    input: ListAgentCollaboratorsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listAgentKnowledgeBases(
    input: ListAgentKnowledgeBasesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listAgentVersions(
    input: ListAgentVersionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listAgents(
    input: ListAgentsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listDataSources(
    input: ListDataSourcesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listFlowAliases(
    input: ListFlowAliasesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listFlowVersions(
    input: ListFlowVersionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listFlows(
    input: ListFlowsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listIngestionJobs(
    input: ListIngestionJobsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listKnowledgeBaseDocuments(
    input: ListKnowledgeBaseDocumentsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listKnowledgeBases(
    input: ListKnowledgeBasesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listPrompts(
    input: ListPromptsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  prepareAgent(
    input: PrepareAgentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  prepareFlow(
    input: PrepareFlowRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startIngestionJob(
    input: StartIngestionJobRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  stopIngestionJob(
    input: StopIngestionJobRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateAgent(
    input: UpdateAgentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateAgentActionGroup(
    input: UpdateAgentActionGroupRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateAgentAlias(
    input: UpdateAgentAliasRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateAgentCollaborator(
    input: UpdateAgentCollaboratorRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateAgentKnowledgeBase(
    input: UpdateAgentKnowledgeBaseRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateDataSource(
    input: UpdateDataSourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateFlow(
    input: UpdateFlowRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateFlowAlias(
    input: UpdateFlowAliasRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateKnowledgeBase(
    input: UpdateKnowledgeBaseRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updatePrompt(
    input: UpdatePromptRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  validateFlowDefinition(
    input: ValidateFlowDefinitionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
}

export type BedrockAgent = AmazonBedrockAgentBuildTimeLambda;

export interface AccessDeniedException {
}
export type ActionGroupExecutor = never;
export type ActionGroupSignature = never;
export type ActionGroupSignatureParams = Record<string, unknown>;
export type ActionGroupState = never;
export type ActionGroupSummaries = Array<unknown>;
export interface ActionGroupSummary {
}
export type AdditionalModelRequestFields = Record<string, unknown>;
export type AdditionalModelRequestFieldsKey = string;

export interface Agent {
}
export interface AgentActionGroup {
}
export interface AgentAlias {
}
export type AgentAliasArn = string;

export interface AgentAliasHistoryEvent {
}
export type AgentAliasHistoryEvents = Array<unknown>;
export type AgentAliasId = string;

export type AgentAliasRoutingConfiguration = Array<unknown>;
export interface AgentAliasRoutingConfigurationListItem {
}
export type AgentAliasStatus = never;
export type AgentAliasSummaries = Array<unknown>;
export interface AgentAliasSummary {
}
export type AgentArn = string;

export type AgentCollaboration = never;
export interface AgentCollaborator {
}
export type AgentCollaboratorSummaries = Array<unknown>;
export interface AgentCollaboratorSummary {
}
export interface AgentDescriptor {
}
export interface AgentFlowNodeConfiguration {
}
export interface AgentKnowledgeBase {
}
export type AgentKnowledgeBaseSummaries = Array<unknown>;
export interface AgentKnowledgeBaseSummary {
}
export type AgentRoleArn = string;

export type AgentStatus = never;
export type AgentSummaries = Array<unknown>;
export interface AgentSummary {
}
export interface AgentVersion {
}
export type AgentVersionSummaries = Array<unknown>;
export interface AgentVersionSummary {
}
export type AliasInvocationState = never;
export interface AnyToolChoice {
}
export type APISchema = never;
export interface AssociateAgentCollaboratorRequest {
}
export interface AssociateAgentCollaboratorResponse {
}
export interface AssociateAgentKnowledgeBaseRequest {
}
export interface AssociateAgentKnowledgeBaseResponse {
}
export interface AutoToolChoice {
}
export type AwsDataCatalogTableName = string;

export type AwsDataCatalogTableNames = Array<unknown>;
export type BasePromptTemplate = string;

export interface BedrockDataAutomationConfiguration {
}
export type BedrockEmbeddingModelArn = string;

export interface BedrockEmbeddingModelConfiguration {
}
export interface BedrockFoundationModelConfiguration {
}
export interface BedrockFoundationModelContextEnrichmentConfiguration {
}
export type BedrockModelArn = string;

export type BedrockRerankingModelArn = string;

export type BucketOwnerAccountId = string;

export type ByteContentBlob = Uint8Array | string;

export interface ByteContentDoc {
}
export interface CachePointBlock {
}
export type CachePointType = never;
export interface ChatPromptTemplateConfiguration {
}
export interface ChunkingConfiguration {
}
export type ChunkingStrategy = never;
export type ClientToken = string;

export type CollaborationInstruction = string;

export interface CollectorFlowNodeConfiguration {
}
export type ColumnName = string;

export type ConcurrencyType = never;
export interface ConditionFlowNodeConfiguration {
}
export interface ConflictException {
}
export type ConfluenceAuthType = never;
export interface ConfluenceCrawlerConfiguration {
}
export interface ConfluenceDataSourceConfiguration {
}
export type ConfluenceHostType = never;
export interface ConfluenceSourceConfiguration {
}
export type ContentBlock = never;
export type ContentBlocks = Array<unknown>;
export type ContentDataSourceType = never;
export interface ContextEnrichmentConfiguration {
}
export type ContextEnrichmentType = never;
export type ConversationRole = never;
export interface CrawlFilterConfiguration {
}
export type CrawlFilterConfigurationType = never;
export interface CreateAgentActionGroupRequest {
}
export interface CreateAgentActionGroupResponse {
}
export interface CreateAgentAliasRequest {
}
export interface CreateAgentAliasResponse {
}
export interface CreateAgentRequest {
}
export interface CreateAgentResponse {
}
export interface CreateDataSourceRequest {
}
export interface CreateDataSourceResponse {
}
export interface CreateFlowAliasRequest {
}
export interface CreateFlowAliasResponse {
}
export interface CreateFlowRequest {
}
export interface CreateFlowResponse {
}
export interface CreateFlowVersionRequest {
}
export interface CreateFlowVersionResponse {
}
export interface CreateKnowledgeBaseRequest {
}
export interface CreateKnowledgeBaseResponse {
}
export interface CreatePromptRequest {
}
export interface CreatePromptResponse {
}
export interface CreatePromptVersionRequest {
}
export interface CreatePromptVersionResponse {
}
export type CreationMode = never;
export type CuratedQueries = Array<unknown>;
export interface CuratedQuery {
}
export interface CustomContent {
}
export type CustomControlMethod = never;
export interface CustomDocumentIdentifier {
}
export interface CustomOrchestration {
}
export interface CustomS3Location {
}
export type CustomSourceType = never;
export interface CustomTransformationConfiguration {
}
export interface CyclicConnectionFlowValidationDetails {
}
export type Data = string;

export type DataDeletionPolicy = never;
export interface DataSource {
}
export interface DataSourceConfiguration {
}
export type DataSourceStatus = never;
export type DataSourceSummaries = Array<unknown>;
export interface DataSourceSummary {
}
export type DataSourceType = never;
export type DateTimestamp = Date | string;

export interface DeleteAgentActionGroupRequest {
}
export interface DeleteAgentActionGroupResponse {
}
export interface DeleteAgentAliasRequest {
}
export interface DeleteAgentAliasResponse {
}
export interface DeleteAgentRequest {
}
export interface DeleteAgentResponse {
}
export interface DeleteAgentVersionRequest {
}
export interface DeleteAgentVersionResponse {
}
export interface DeleteDataSourceRequest {
}
export interface DeleteDataSourceResponse {
}
export interface DeleteFlowAliasRequest {
}
export interface DeleteFlowAliasResponse {
}
export interface DeleteFlowRequest {
}
export interface DeleteFlowResponse {
}
export interface DeleteFlowVersionRequest {
}
export interface DeleteFlowVersionResponse {
}
export interface DeleteKnowledgeBaseDocumentsRequest {
}
export interface DeleteKnowledgeBaseDocumentsResponse {
}
export interface DeleteKnowledgeBaseRequest {
}
export interface DeleteKnowledgeBaseResponse {
}
export interface DeletePromptRequest {
}
export interface DeletePromptResponse {
}
export type Description = string;

export type DescriptionString = string;

export type Dimensions = number;

export interface DisassociateAgentCollaboratorRequest {
}
export interface DisassociateAgentCollaboratorResponse {
}
export interface DisassociateAgentKnowledgeBaseRequest {
}
export interface DisassociateAgentKnowledgeBaseResponse {
}
export interface DocumentContent {
}
export interface DocumentIdentifier {
}
export type DocumentIdentifiers = Array<unknown>;
export interface DocumentMetadata {
}
export type DocumentStatus = never;
export type DraftVersion = string;

export interface DuplicateConditionExpressionFlowValidationDetails {
}
export interface DuplicateConnectionsFlowValidationDetails {
}
export type EmbeddingDataType = never;
export interface EmbeddingModelConfiguration {
}
export type EnabledMemoryTypes = Array<unknown>;
export interface EnrichmentStrategyConfiguration {
}
export type EnrichmentStrategyMethod = never;
export type ErrorMessage = string;

export type FailureReason = string;

export type FailureReasons = Array<unknown>;
export interface FieldForReranking {
}
export type FieldName = string;

export type FieldsForReranking = Array<unknown>;
export type FilteredObjectType = string;

export type FilterList = Array<unknown>;
export type FilterPattern = string;

export interface FixedSizeChunkingConfiguration {
}
export type FlowAliasArn = string;

export interface FlowAliasConcurrencyConfiguration {
}
export type FlowAliasId = string;

export type FlowAliasIdentifier = string;

export type FlowAliasRoutingConfiguration = Array<unknown>;
export interface FlowAliasRoutingConfigurationListItem {
}
export type FlowAliasSummaries = Array<unknown>;
export interface FlowAliasSummary {
}
export type FlowArn = string;

export interface FlowCondition {
}
export interface FlowConditionalConnectionConfiguration {
}
export type FlowConditionExpression = string;

export type FlowConditionName = string;

export type FlowConditions = Array<unknown>;
export interface FlowConnection {
}
export type FlowConnectionConfiguration = never;
export type FlowConnectionName = string;

export type FlowConnections = Array<unknown>;
export type FlowConnectionType = never;
export interface FlowDataConnectionConfiguration {
}
export interface FlowDefinition {
}
export type FlowDescription = string;

export type FlowExecutionRoleArn = string;

export type FlowId = string;

export type FlowIdentifier = string;

export type FlowName = string;

export interface FlowNode {
}
export type FlowNodeConfiguration = never;
export interface FlowNodeInput {
}
export type FlowNodeInputCategory = never;
export type FlowNodeInputExpression = string;

export type FlowNodeInputName = string;

export type FlowNodeInputs = Array<unknown>;
export type FlowNodeIODataType = never;
export type FlowNodeName = string;

export interface FlowNodeOutput {
}
export type FlowNodeOutputName = string;

export type FlowNodeOutputs = Array<unknown>;
export type FlowNodes = Array<unknown>;
export type FlowNodeType = never;
export type FlowStatus = never;
export type FlowSummaries = Array<unknown>;
export interface FlowSummary {
}
export interface FlowValidation {
}
export type FlowValidationDetails = never;
export type FlowValidations = Array<unknown>;
export type FlowValidationSeverity = never;
export type FlowValidationType = never;
export type FlowVersionSummaries = Array<unknown>;
export interface FlowVersionSummary {
}
export interface Function {
}
export type FunctionDescription = string;

export type Functions = Array<unknown>;
export type FunctionSchema = never;
export interface GetAgentActionGroupRequest {
}
export interface GetAgentActionGroupResponse {
}
export interface GetAgentAliasRequest {
}
export interface GetAgentAliasResponse {
}
export interface GetAgentCollaboratorRequest {
}
export interface GetAgentCollaboratorResponse {
}
export interface GetAgentKnowledgeBaseRequest {
}
export interface GetAgentKnowledgeBaseResponse {
}
export interface GetAgentRequest {
}
export interface GetAgentResponse {
}
export interface GetAgentVersionRequest {
}
export interface GetAgentVersionResponse {
}
export interface GetDataSourceRequest {
}
export interface GetDataSourceResponse {
}
export interface GetFlowAliasRequest {
}
export interface GetFlowAliasResponse {
}
export interface GetFlowRequest {
}
export interface GetFlowResponse {
}
export interface GetFlowVersionRequest {
}
export interface GetFlowVersionResponse {
}
export interface GetIngestionJobRequest {
}
export interface GetIngestionJobResponse {
}
export interface GetKnowledgeBaseDocumentsRequest {
}
export interface GetKnowledgeBaseDocumentsResponse {
}
export interface GetKnowledgeBaseRequest {
}
export interface GetKnowledgeBaseResponse {
}
export interface GetPromptRequest {
}
export interface GetPromptResponse {
}
export type GraphArn = string;

export interface GuardrailConfiguration {
}
export type GuardrailIdentifier = string;

export type GuardrailVersion = string;

export interface HierarchicalChunkingConfiguration {
}
export interface HierarchicalChunkingLevelConfiguration {
}
export type HierarchicalChunkingLevelConfigurations = Array<unknown>;
export type HttpsUrl = string;

export type Id = string;

export type IncludeExclude = never;
export interface IncompatibleConnectionDataTypeFlowValidationDetails {
}
export type IncompatibleLoopNodeType = never;
export interface InferenceConfiguration {
}
export interface IngestionJob {
}
export interface IngestionJobFilter {
}
export type IngestionJobFilterAttribute = never;
export type IngestionJobFilterOperator = never;
export type IngestionJobFilters = Array<unknown>;
export type IngestionJobFilterValue = string;

export type IngestionJobFilterValues = Array<unknown>;
export interface IngestionJobSortBy {
}
export type IngestionJobSortByAttribute = never;
export interface IngestionJobStatistics {
}
export type IngestionJobStatus = never;
export type IngestionJobSummaries = Array<unknown>;
export interface IngestionJobSummary {
}
export interface IngestKnowledgeBaseDocumentsRequest {
}
export interface IngestKnowledgeBaseDocumentsResponse {
}
export type InlineCode = string;

export interface InlineCodeFlowNodeConfiguration {
}
export interface InlineContent {
}
export type InlineContentType = never;
export interface InputFlowNodeConfiguration {
}
export type Instruction = string;

export interface IntermediateStorage {
}
export interface InternalServerException {
}
export interface InvalidLoopBoundaryFlowValidationDetails {
}
export interface IteratorFlowNodeConfiguration {
}
export type KendraIndexArn = string;

export interface KendraKnowledgeBaseConfiguration {
}
export type Key = string;

export type KmsKeyArn = string;

export interface KnowledgeBase {
}
export type KnowledgeBaseArn = string;

export interface KnowledgeBaseConfiguration {
}
export interface KnowledgeBaseDocument {
}
export interface KnowledgeBaseDocumentDetail {
}
export type KnowledgeBaseDocumentDetails = Array<unknown>;
export type KnowledgeBaseDocuments = Array<unknown>;
export interface KnowledgeBaseFlowNodeConfiguration {
}
export type KnowledgeBaseId = string;

export type KnowledgeBaseModelIdentifier = string;

export interface KnowledgeBaseOrchestrationConfiguration {
}
export interface KnowledgeBasePromptTemplate {
}
export type KnowledgeBaseRoleArn = string;

export type KnowledgeBaseState = never;
export type KnowledgeBaseStatus = never;
export type KnowledgeBaseStorageType = never;
export type KnowledgeBaseSummaries = Array<unknown>;
export interface KnowledgeBaseSummary {
}
export type KnowledgeBaseTextPrompt = string;

export type KnowledgeBaseType = never;
export type LambdaArn = string;

export interface LambdaFunctionFlowNodeConfiguration {
}
export type LexBotAliasArn = string;

export type LexBotLocaleId = string;

export interface LexFlowNodeConfiguration {
}
export interface ListAgentActionGroupsRequest {
}
export interface ListAgentActionGroupsResponse {
}
export interface ListAgentAliasesRequest {
}
export interface ListAgentAliasesResponse {
}
export interface ListAgentCollaboratorsRequest {
}
export interface ListAgentCollaboratorsResponse {
}
export interface ListAgentKnowledgeBasesRequest {
}
export interface ListAgentKnowledgeBasesResponse {
}
export interface ListAgentsRequest {
}
export interface ListAgentsResponse {
}
export interface ListAgentVersionsRequest {
}
export interface ListAgentVersionsResponse {
}
export interface ListDataSourcesRequest {
}
export interface ListDataSourcesResponse {
}
export interface ListFlowAliasesRequest {
}
export interface ListFlowAliasesResponse {
}
export interface ListFlowsRequest {
}
export interface ListFlowsResponse {
}
export interface ListFlowVersionsRequest {
}
export interface ListFlowVersionsResponse {
}
export interface ListIngestionJobsRequest {
}
export interface ListIngestionJobsResponse {
}
export interface ListKnowledgeBaseDocumentsRequest {
}
export interface ListKnowledgeBaseDocumentsResponse {
}
export interface ListKnowledgeBasesRequest {
}
export interface ListKnowledgeBasesResponse {
}
export interface ListPromptsRequest {
}
export interface ListPromptsResponse {
}
export interface ListTagsForResourceRequest {
}
export interface ListTagsForResourceResponse {
}
export interface LoopControllerFlowNodeConfiguration {
}
export interface LoopFlowNodeConfiguration {
}
export interface LoopIncompatibleNodeTypeFlowValidationDetails {
}
export interface LoopInputFlowNodeConfiguration {
}
export interface MalformedConditionExpressionFlowValidationDetails {
}
export interface MalformedNodeInputExpressionFlowValidationDetails {
}
export type MaximumLength = number;

export type MaxRecentSessions = number;

export type MaxResults = number;

export interface MemoryConfiguration {
}
export type MemoryType = never;
export interface Message {
}
export type Messages = Array<unknown>;
export interface MetadataAttribute {
}
export type MetadataAttributes = Array<unknown>;
export interface MetadataAttributeValue {
}
export interface MetadataConfigurationForReranking {
}
export type MetadataSourceType = never;
export type MetadataValueType = never;
export type Microsoft365TenantId = string;

export interface MismatchedNodeInputTypeFlowValidationDetails {
}
export interface MismatchedNodeOutputTypeFlowValidationDetails {
}
export interface MissingConnectionConfigurationFlowValidationDetails {
}
export interface MissingDefaultConditionFlowValidationDetails {
}
export interface MissingEndingNodesFlowValidationDetails {
}
export interface MissingLoopControllerNodeFlowValidationDetails {
}
export interface MissingLoopInputNodeFlowValidationDetails {
}
export interface MissingNodeConfigurationFlowValidationDetails {
}
export interface MissingNodeInputFlowValidationDetails {
}
export interface MissingNodeOutputFlowValidationDetails {
}
export interface MissingStartingNodesFlowValidationDetails {
}
export type ModelIdentifier = string;

export type MongoDbAtlasCollectionName = string;

export interface MongoDbAtlasConfiguration {
}
export type MongoDbAtlasDatabaseName = string;

export type MongoDbAtlasEndpoint = string;

export type MongoDbAtlasEndpointServiceName = string;

export interface MongoDbAtlasFieldMapping {
}
export type MongoDbAtlasIndexName = string;

export interface MultipleLoopControllerNodesFlowValidationDetails {
}
export interface MultipleLoopInputNodesFlowValidationDetails {
}
export interface MultipleNodeInputConnectionsFlowValidationDetails {
}
export type Name = string;

export type NaturalLanguageString = string;

export interface NeptuneAnalyticsConfiguration {
}
export interface NeptuneAnalyticsFieldMapping {
}
export type NextToken = string;

export type NonBlankString = string;

export type NonEmptyString = string;

export type NumberValue = number;

export type NumericalVersion = string;

export interface OpenSearchManagedClusterConfiguration {
}
export type OpenSearchManagedClusterDomainArn = string;

export type OpenSearchManagedClusterDomainEndpoint = string;

export interface OpenSearchManagedClusterFieldMapping {
}
export type OpenSearchManagedClusterIndexName = string;

export type OpenSearchServerlessCollectionArn = string;

export interface OpenSearchServerlessConfiguration {
}
export interface OpenSearchServerlessFieldMapping {
}
export type OpenSearchServerlessIndexName = string;

export type OrchestrationExecutor = never;
export type OrchestrationType = never;
export interface OutputFlowNodeConfiguration {
}
export type ParameterDescription = string;

export interface ParameterDetail {
}
export type ParameterMap = Record<string, unknown>;
export interface ParsingConfiguration {
}
export type ParsingModality = never;
export interface ParsingPrompt {
}
export type ParsingPromptText = string;

export type ParsingStrategy = never;
export interface PatternObjectFilter {
}
export interface PatternObjectFilterConfiguration {
}
export type PatternObjectFilterList = Array<unknown>;
export type Payload = string;

export type PerformanceConfigLatency = never;
export interface PerformanceConfiguration {
}
export interface PineconeConfiguration {
}
export type PineconeConnectionString = string;

export interface PineconeFieldMapping {
}
export type PineconeNamespace = string;

export interface PrepareAgentRequest {
}
export interface PrepareAgentResponse {
}
export interface PrepareFlowRequest {
}
export interface PrepareFlowResponse {
}
export interface PromptAgentResource {
}
export type PromptArn = string;

export interface PromptConfiguration {
}
export type PromptConfigurations = Array<unknown>;
export type PromptDescription = string;

export interface PromptFlowNodeConfiguration {
}
export interface PromptFlowNodeInlineConfiguration {
}
export interface PromptFlowNodeResourceConfiguration {
}
export type PromptFlowNodeSourceConfiguration = never;
export type PromptGenAiResource = never;
export type PromptId = string;

export type PromptIdentifier = string;

export type PromptInferenceConfiguration = never;
export interface PromptInputVariable {
}
export type PromptInputVariableName = string;

export type PromptInputVariablesList = Array<unknown>;
export interface PromptMetadataEntry {
}
export type PromptMetadataKey = string;

export type PromptMetadataList = Array<unknown>;
export type PromptMetadataValue = string;

export type PromptModelIdentifier = string;

export interface PromptModelInferenceConfiguration {
}
export type PromptName = string;

export interface PromptOverrideConfiguration {
}
export type PromptState = never;
export type PromptSummaries = Array<unknown>;
export interface PromptSummary {
}
export type PromptTemplateConfiguration = never;
export type PromptTemplateType = never;
export type PromptType = never;
export interface PromptVariant {
}
export type PromptVariantList = Array<unknown>;
export type PromptVariantName = string;

export type ProvisionedModelIdentifier = string;

export type QueryEngineType = never;
export type QueryExecutionTimeoutSeconds = number;

export interface QueryGenerationColumn {
}
export type QueryGenerationColumnName = string;

export type QueryGenerationColumns = Array<unknown>;
export interface QueryGenerationConfiguration {
}
export interface QueryGenerationContext {
}
export interface QueryGenerationTable {
}
export type QueryGenerationTableName = string;

export type QueryGenerationTables = Array<unknown>;
export type RdsArn = string;

export interface RdsConfiguration {
}
export type RdsDatabaseName = string;

export interface RdsFieldMapping {
}
export type RdsTableName = string;

export type RecommendedAction = string;

export type RecommendedActions = Array<unknown>;
export interface RedisEnterpriseCloudConfiguration {
}
export type RedisEnterpriseCloudEndpoint = string;

export interface RedisEnterpriseCloudFieldMapping {
}
export type RedisEnterpriseCloudIndexName = string;

export type RedshiftClusterIdentifier = string;

export interface RedshiftConfiguration {
}
export type RedshiftDatabase = string;

export interface RedshiftProvisionedAuthConfiguration {
}
export type RedshiftProvisionedAuthType = never;
export interface RedshiftProvisionedConfiguration {
}
export interface RedshiftQueryEngineAwsDataCatalogStorageConfiguration {
}
export interface RedshiftQueryEngineConfiguration {
}
export interface RedshiftQueryEngineRedshiftStorageConfiguration {
}
export interface RedshiftQueryEngineStorageConfiguration {
}
export type RedshiftQueryEngineStorageConfigurations = Array<unknown>;
export type RedshiftQueryEngineStorageType = never;
export type RedshiftQueryEngineType = never;
export interface RedshiftServerlessAuthConfiguration {
}
export type RedshiftServerlessAuthType = never;
export interface RedshiftServerlessConfiguration {
}
export type RelayConversationHistory = never;
export type RequireConfirmation = never;
export type RerankingMetadataSelectionMode = never;
export type RerankingMetadataSelectiveModeConfiguration = never;
export interface ResourceNotFoundException {
}
export interface RetrievalFlowNodeConfiguration {
}
export interface RetrievalFlowNodeS3Configuration {
}
export type RetrievalFlowNodeServiceConfiguration = never;
export type S3BucketArn = string;

export type S3BucketName = string;

export type S3BucketUri = string;

export interface S3Content {
}
export interface S3DataSourceConfiguration {
}
export interface S3Identifier {
}
export interface S3Location {
}
export type S3ObjectKey = string;

export type S3ObjectUri = string;

export type S3Prefix = string;

export type S3Prefixes = Array<unknown>;
export type SalesforceAuthType = never;
export interface SalesforceCrawlerConfiguration {
}
export interface SalesforceDataSourceConfiguration {
}
export interface SalesforceSourceConfiguration {
}
export type SecretArn = string;

export interface SeedUrl {
}
export type SeedUrls = Array<unknown>;
export interface SemanticChunkingConfiguration {
}
export interface ServerSideEncryptionConfiguration {
}
export interface ServiceQuotaExceededException {
}
export interface SessionSummaryConfiguration {
}
export type SessionTTL = number;

export type SharePointAuthType = never;
export interface SharePointCrawlerConfiguration {
}
export interface SharePointDataSourceConfiguration {
}
export type SharePointDomain = string;

export type SharePointHostType = never;
export type SharePointSiteUrls = Array<unknown>;
export interface SharePointSourceConfiguration {
}
export type SortOrder = never;
export interface SpecificToolChoice {
}
export interface SqlKnowledgeBaseConfiguration {
}
export type SqlString = string;

export interface StartIngestionJobRequest {
}
export interface StartIngestionJobResponse {
}
export type StepType = never;
export interface StopIngestionJobRequest {
}
export interface StopIngestionJobResponse {
}
export type StopSequences = Array<unknown>;
export interface StorageConfiguration {
}
export type StorageDays = number;

export interface StorageFlowNodeConfiguration {
}
export interface StorageFlowNodeS3Configuration {
}
export type StorageFlowNodeServiceConfiguration = never;
export type StringListValue = Array<unknown>;
export type StringValue = string;

export interface SupplementalDataStorageConfiguration {
}
export interface SupplementalDataStorageLocation {
}
export type SupplementalDataStorageLocations = Array<unknown>;
export type SupplementalDataStorageLocationType = never;
export type SupportedLanguages = never;
export type SystemContentBlock = never;
export type SystemContentBlocks = Array<unknown>;
export type TaggableResourcesArn = string;

export type TagKey = string;

export type TagKeyList = Array<unknown>;
export interface TagResourceRequest {
}
export interface TagResourceResponse {
}
export type TagsMap = Record<string, unknown>;
export type TagValue = string;

export type Temperature = number;

export interface TextContentDoc {
}
export type TextPrompt = string;

export interface TextPromptTemplateConfiguration {
}
export interface ThrottlingException {
}
export type Tool = never;
export type ToolChoice = never;
export interface ToolConfiguration {
}
export type ToolInputSchema = never;
export type ToolName = string;

export type Tools = Array<unknown>;
export interface ToolSpecification {
}
export type TopK = number;

export type TopP = number;

export interface Transformation {
}
export interface TransformationFunction {
}
export interface TransformationLambdaConfiguration {
}
export type Transformations = Array<unknown>;
export type Type = never;
export interface UnfulfilledNodeInputFlowValidationDetails {
}
export interface UnknownConnectionConditionFlowValidationDetails {
}
export interface UnknownConnectionSourceFlowValidationDetails {
}
export interface UnknownConnectionSourceOutputFlowValidationDetails {
}
export interface UnknownConnectionTargetFlowValidationDetails {
}
export interface UnknownConnectionTargetInputFlowValidationDetails {
}
export interface UnknownNodeInputFlowValidationDetails {
}
export interface UnknownNodeOutputFlowValidationDetails {
}
export interface UnreachableNodeFlowValidationDetails {
}
export interface UnsatisfiedConnectionConditionsFlowValidationDetails {
}
export interface UnspecifiedFlowValidationDetails {
}
export interface UntagResourceRequest {
}
export interface UntagResourceResponse {
}
export interface UpdateAgentActionGroupRequest {
}
export interface UpdateAgentActionGroupResponse {
}
export interface UpdateAgentAliasRequest {
}
export interface UpdateAgentAliasResponse {
}
export interface UpdateAgentCollaboratorRequest {
}
export interface UpdateAgentCollaboratorResponse {
}
export interface UpdateAgentKnowledgeBaseRequest {
}
export interface UpdateAgentKnowledgeBaseResponse {
}
export interface UpdateAgentRequest {
}
export interface UpdateAgentResponse {
}
export interface UpdateDataSourceRequest {
}
export interface UpdateDataSourceResponse {
}
export interface UpdateFlowAliasRequest {
}
export interface UpdateFlowAliasResponse {
}
export interface UpdateFlowRequest {
}
export interface UpdateFlowResponse {
}
export interface UpdateKnowledgeBaseRequest {
}
export interface UpdateKnowledgeBaseResponse {
}
export interface UpdatePromptRequest {
}
export interface UpdatePromptResponse {
}
export type Url = string;

export interface UrlConfiguration {
}
export type UserAgent = string;

export type UserAgentHeader = string;

export interface ValidateFlowDefinitionRequest {
}
export interface ValidateFlowDefinitionResponse {
}
export interface ValidationException {
}
export interface ValidationExceptionField {
}
export type ValidationExceptionFieldList = Array<unknown>;
export interface VectorIngestionConfiguration {
}
export interface VectorKnowledgeBaseConfiguration {
}
export interface VectorSearchBedrockRerankingConfiguration {
}
export interface VectorSearchBedrockRerankingModelConfiguration {
}
export interface VectorSearchRerankingConfiguration {
}
export type VectorSearchRerankingConfigurationType = never;
export type Version = string;

export interface WebCrawlerConfiguration {
}
export interface WebCrawlerLimits {
}
export interface WebDataSourceConfiguration {
}
export type WebScopeType = never;
export interface WebSourceConfiguration {
}
export type WorkgroupArn = string;

export declare namespace AssociateAgentCollaborator {
  export type Input = AssociateAgentCollaboratorRequest;
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

export declare namespace AssociateAgentKnowledgeBase {
  export type Input = AssociateAgentKnowledgeBaseRequest;
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

export declare namespace CreateAgent {
  export type Input = CreateAgentRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateAgentActionGroup {
  export type Input = CreateAgentActionGroupRequest;
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

export declare namespace CreateAgentAlias {
  export type Input = CreateAgentAliasRequest;
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

export declare namespace CreateDataSource {
  export type Input = CreateDataSourceRequest;
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

export declare namespace CreateFlow {
  export type Input = CreateFlowRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateFlowAlias {
  export type Input = CreateFlowAliasRequest;
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

export declare namespace CreateFlowVersion {
  export type Input = CreateFlowVersionRequest;
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

export declare namespace CreateKnowledgeBase {
  export type Input = CreateKnowledgeBaseRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreatePrompt {
  export type Input = CreatePromptRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreatePromptVersion {
  export type Input = CreatePromptVersionRequest;
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

export declare namespace DeleteAgent {
  export type Input = DeleteAgentRequest;
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

export declare namespace DeleteAgentActionGroup {
  export type Input = DeleteAgentActionGroupRequest;
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

export declare namespace DeleteAgentAlias {
  export type Input = DeleteAgentAliasRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAgentVersion {
  export type Input = DeleteAgentVersionRequest;
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

export declare namespace DeleteDataSource {
  export type Input = DeleteDataSourceRequest;
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

export declare namespace DeleteFlow {
  export type Input = DeleteFlowRequest;
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

export declare namespace DeleteFlowAlias {
  export type Input = DeleteFlowAliasRequest;
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

export declare namespace DeleteFlowVersion {
  export type Input = DeleteFlowVersionRequest;
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

export declare namespace DeleteKnowledgeBase {
  export type Input = DeleteKnowledgeBaseRequest;
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

export declare namespace DeleteKnowledgeBaseDocuments {
  export type Input = DeleteKnowledgeBaseDocumentsRequest;
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

export declare namespace DeletePrompt {
  export type Input = DeletePromptRequest;
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

export declare namespace DisassociateAgentCollaborator {
  export type Input = DisassociateAgentCollaboratorRequest;
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

export declare namespace DisassociateAgentKnowledgeBase {
  export type Input = DisassociateAgentKnowledgeBaseRequest;
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

export declare namespace GetAgent {
  export type Input = GetAgentRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAgentActionGroup {
  export type Input = GetAgentActionGroupRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAgentAlias {
  export type Input = GetAgentAliasRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAgentCollaborator {
  export type Input = GetAgentCollaboratorRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAgentKnowledgeBase {
  export type Input = GetAgentKnowledgeBaseRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAgentVersion {
  export type Input = GetAgentVersionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDataSource {
  export type Input = GetDataSourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetFlow {
  export type Input = GetFlowRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetFlowAlias {
  export type Input = GetFlowAliasRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetFlowVersion {
  export type Input = GetFlowVersionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetIngestionJob {
  export type Input = GetIngestionJobRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetKnowledgeBase {
  export type Input = GetKnowledgeBaseRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetKnowledgeBaseDocuments {
  export type Input = GetKnowledgeBaseDocumentsRequest;
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

export declare namespace GetPrompt {
  export type Input = GetPromptRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace IngestKnowledgeBaseDocuments {
  export type Input = IngestKnowledgeBaseDocumentsRequest;
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

export declare namespace ListAgentActionGroups {
  export type Input = ListAgentActionGroupsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAgentAliases {
  export type Input = ListAgentAliasesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAgentCollaborators {
  export type Input = ListAgentCollaboratorsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAgentKnowledgeBases {
  export type Input = ListAgentKnowledgeBasesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAgentVersions {
  export type Input = ListAgentVersionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAgents {
  export type Input = ListAgentsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDataSources {
  export type Input = ListDataSourcesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFlowAliases {
  export type Input = ListFlowAliasesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFlowVersions {
  export type Input = ListFlowVersionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFlows {
  export type Input = ListFlowsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListIngestionJobs {
  export type Input = ListIngestionJobsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListKnowledgeBaseDocuments {
  export type Input = ListKnowledgeBaseDocumentsRequest;
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

export declare namespace ListKnowledgeBases {
  export type Input = ListKnowledgeBasesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPrompts {
  export type Input = ListPromptsRequest;
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
  export type Input = ListTagsForResourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PrepareAgent {
  export type Input = PrepareAgentRequest;
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

export declare namespace PrepareFlow {
  export type Input = PrepareFlowRequest;
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

export declare namespace StartIngestionJob {
  export type Input = StartIngestionJobRequest;
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

export declare namespace StopIngestionJob {
  export type Input = StopIngestionJobRequest;
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

export declare namespace TagResource {
  export type Input = TagResourceRequest;
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

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateAgent {
  export type Input = UpdateAgentRequest;
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

export declare namespace UpdateAgentActionGroup {
  export type Input = UpdateAgentActionGroupRequest;
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

export declare namespace UpdateAgentAlias {
  export type Input = UpdateAgentAliasRequest;
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

export declare namespace UpdateAgentCollaborator {
  export type Input = UpdateAgentCollaboratorRequest;
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

export declare namespace UpdateAgentKnowledgeBase {
  export type Input = UpdateAgentKnowledgeBaseRequest;
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

export declare namespace UpdateDataSource {
  export type Input = UpdateDataSourceRequest;
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

export declare namespace UpdateFlow {
  export type Input = UpdateFlowRequest;
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

export declare namespace UpdateFlowAlias {
  export type Input = UpdateFlowAliasRequest;
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

export declare namespace UpdateKnowledgeBase {
  export type Input = UpdateKnowledgeBaseRequest;
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

export declare namespace UpdatePrompt {
  export type Input = UpdatePromptRequest;
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

export declare namespace ValidateFlowDefinition {
  export type Input = ValidateFlowDefinitionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

