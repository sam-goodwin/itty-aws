import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AmazonBedrockAgentBuildTimeLambda {
  validateFlowDefinition(
    input: ValidateFlowDefinitionRequest,
  ): Effect.Effect<
    ValidateFlowDefinitionResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export type BedrockAgent = AmazonBedrockAgentBuildTimeLambda;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
interface _ActionGroupExecutor {
  lambda?: string;
  customControl?: CustomControlMethod;
}

export type ActionGroupExecutor =
  | (_ActionGroupExecutor & { lambda: string })
  | (_ActionGroupExecutor & { customControl: CustomControlMethod });
export type ActionGroupSignature =
  | "AMAZON_USERINPUT"
  | "AMAZON_CODEINTERPRETER"
  | "ANTHROPIC_COMPUTER"
  | "ANTHROPIC_BASH"
  | "ANTHROPIC_TEXTEDITOR";
export type ActionGroupSignatureParams = Record<string, string>;
export type ActionGroupState = "ENABLED" | "DISABLED";
export type ActionGroupSummaries = Array<ActionGroupSummary>;
export interface ActionGroupSummary {
  actionGroupId: string;
  actionGroupName: string;
  actionGroupState: ActionGroupState;
  description?: string;
  updatedAt: Date | string;
}
export type AdditionalModelRequestFields = Record<string, unknown>;
export type AdditionalModelRequestFieldsKey = string;

export type AdditionalModelRequestFieldsValue = unknown;

export interface Agent {
  agentId: string;
  agentName: string;
  agentArn: string;
  agentVersion: string;
  clientToken?: string;
  instruction?: string;
  agentStatus: AgentStatus;
  foundationModel?: string;
  description?: string;
  orchestrationType?: OrchestrationType;
  customOrchestration?: CustomOrchestration;
  idleSessionTTLInSeconds: number;
  agentResourceRoleArn: string;
  customerEncryptionKeyArn?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  preparedAt?: Date | string;
  failureReasons?: Array<string>;
  recommendedActions?: Array<string>;
  promptOverrideConfiguration?: PromptOverrideConfiguration;
  guardrailConfiguration?: GuardrailConfiguration;
  memoryConfiguration?: MemoryConfiguration;
  agentCollaboration?: AgentCollaboration;
}
export interface AgentActionGroup {
  agentId: string;
  agentVersion: string;
  actionGroupId: string;
  actionGroupName: string;
  clientToken?: string;
  description?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  parentActionSignature?: ActionGroupSignature;
  parentActionGroupSignatureParams?: Record<string, string>;
  actionGroupExecutor?: ActionGroupExecutor;
  apiSchema?: APISchema;
  functionSchema?: FunctionSchema;
  actionGroupState: ActionGroupState;
}
export interface AgentAlias {
  agentId: string;
  agentAliasId: string;
  agentAliasName: string;
  agentAliasArn: string;
  clientToken?: string;
  description?: string;
  routingConfiguration: Array<AgentAliasRoutingConfigurationListItem>;
  createdAt: Date | string;
  updatedAt: Date | string;
  agentAliasHistoryEvents?: Array<AgentAliasHistoryEvent>;
  agentAliasStatus: AgentAliasStatus;
  failureReasons?: Array<string>;
  aliasInvocationState?: AliasInvocationState;
}
export type AgentAliasArn = string;

export interface AgentAliasHistoryEvent {
  routingConfiguration?: Array<AgentAliasRoutingConfigurationListItem>;
  endDate?: Date | string;
  startDate?: Date | string;
}
export type AgentAliasHistoryEvents = Array<AgentAliasHistoryEvent>;
export type AgentAliasId = string;

export type AgentAliasRoutingConfiguration =
  Array<AgentAliasRoutingConfigurationListItem>;
export interface AgentAliasRoutingConfigurationListItem {
  agentVersion?: string;
  provisionedThroughput?: string;
}
export type AgentAliasStatus =
  | "CREATING"
  | "PREPARED"
  | "FAILED"
  | "UPDATING"
  | "DELETING"
  | "DISSOCIATED";
export type AgentAliasSummaries = Array<AgentAliasSummary>;
export interface AgentAliasSummary {
  agentAliasId: string;
  agentAliasName: string;
  description?: string;
  routingConfiguration?: Array<AgentAliasRoutingConfigurationListItem>;
  agentAliasStatus: AgentAliasStatus;
  createdAt: Date | string;
  updatedAt: Date | string;
  aliasInvocationState?: AliasInvocationState;
}
export type AgentArn = string;

export type AgentCollaboration =
  | "SUPERVISOR"
  | "SUPERVISOR_ROUTER"
  | "DISABLED";
export interface AgentCollaborator {
  agentId: string;
  agentVersion: string;
  agentDescriptor: AgentDescriptor;
  collaboratorId: string;
  collaborationInstruction: string;
  collaboratorName: string;
  createdAt: Date | string;
  lastUpdatedAt: Date | string;
  relayConversationHistory?: RelayConversationHistory;
  clientToken?: string;
}
export type AgentCollaboratorSummaries = Array<AgentCollaboratorSummary>;
export interface AgentCollaboratorSummary {
  agentId: string;
  agentVersion: string;
  collaboratorId: string;
  agentDescriptor: AgentDescriptor;
  collaborationInstruction: string;
  relayConversationHistory: RelayConversationHistory;
  collaboratorName: string;
  createdAt: Date | string;
  lastUpdatedAt: Date | string;
}
export interface AgentDescriptor {
  aliasArn?: string;
}
export interface AgentFlowNodeConfiguration {
  agentAliasArn: string;
}
export interface AgentKnowledgeBase {
  agentId: string;
  agentVersion: string;
  knowledgeBaseId: string;
  description: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  knowledgeBaseState: KnowledgeBaseState;
}
export type AgentKnowledgeBaseSummaries = Array<AgentKnowledgeBaseSummary>;
export interface AgentKnowledgeBaseSummary {
  knowledgeBaseId: string;
  description?: string;
  knowledgeBaseState: KnowledgeBaseState;
  updatedAt: Date | string;
}
export type AgentRoleArn = string;

export type AgentStatus =
  | "CREATING"
  | "PREPARING"
  | "PREPARED"
  | "NOT_PREPARED"
  | "DELETING"
  | "FAILED"
  | "VERSIONING"
  | "UPDATING";
export type AgentSummaries = Array<AgentSummary>;
export interface AgentSummary {
  agentId: string;
  agentName: string;
  agentStatus: AgentStatus;
  description?: string;
  updatedAt: Date | string;
  latestAgentVersion?: string;
  guardrailConfiguration?: GuardrailConfiguration;
}
export interface AgentVersion {
  agentId: string;
  agentName: string;
  agentArn: string;
  version: string;
  instruction?: string;
  agentStatus: AgentStatus;
  foundationModel?: string;
  description?: string;
  idleSessionTTLInSeconds: number;
  agentResourceRoleArn: string;
  customerEncryptionKeyArn?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  failureReasons?: Array<string>;
  recommendedActions?: Array<string>;
  promptOverrideConfiguration?: PromptOverrideConfiguration;
  guardrailConfiguration?: GuardrailConfiguration;
  memoryConfiguration?: MemoryConfiguration;
  agentCollaboration?: AgentCollaboration;
}
export type AgentVersionSummaries = Array<AgentVersionSummary>;
export interface AgentVersionSummary {
  agentName: string;
  agentStatus: AgentStatus;
  agentVersion: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  description?: string;
  guardrailConfiguration?: GuardrailConfiguration;
}
export type AliasInvocationState = "ACCEPT_INVOCATIONS" | "REJECT_INVOCATIONS";
export interface AnyToolChoice {}
interface _APISchema {
  s3?: S3Identifier;
  payload?: string;
}

export type APISchema =
  | (_APISchema & { s3: S3Identifier })
  | (_APISchema & { payload: string });
export interface AssociateAgentCollaboratorRequest {
  agentId: string;
  agentVersion: string;
  agentDescriptor: AgentDescriptor;
  collaboratorName: string;
  collaborationInstruction: string;
  relayConversationHistory?: RelayConversationHistory;
  clientToken?: string;
}
export interface AssociateAgentCollaboratorResponse {
  agentCollaborator: AgentCollaborator;
}
export interface AssociateAgentKnowledgeBaseRequest {
  agentId: string;
  agentVersion: string;
  knowledgeBaseId: string;
  description: string;
  knowledgeBaseState?: KnowledgeBaseState;
}
export interface AssociateAgentKnowledgeBaseResponse {
  agentKnowledgeBase: AgentKnowledgeBase;
}
export interface AutoToolChoice {}
export type AwsDataCatalogTableName = string;

export type AwsDataCatalogTableNames = Array<string>;
export type BasePromptTemplate = string;

export interface BedrockDataAutomationConfiguration {
  parsingModality?: ParsingModality;
}
export type BedrockEmbeddingModelArn = string;

export interface BedrockEmbeddingModelConfiguration {
  dimensions?: number;
  embeddingDataType?: EmbeddingDataType;
}
export interface BedrockFoundationModelConfiguration {
  modelArn: string;
  parsingPrompt?: ParsingPrompt;
  parsingModality?: ParsingModality;
}
export interface BedrockFoundationModelContextEnrichmentConfiguration {
  enrichmentStrategyConfiguration: EnrichmentStrategyConfiguration;
  modelArn: string;
}
export type BedrockModelArn = string;

export type BedrockRerankingModelArn = string;

export type BucketOwnerAccountId = string;

export type ByteContentBlob = Uint8Array | string;

export interface ByteContentDoc {
  mimeType: string;
  data: Uint8Array | string;
}
export interface CachePointBlock {
  type: CachePointType;
}
export type CachePointType = "DEFAULT";
export interface ChatPromptTemplateConfiguration {
  messages: Array<Message>;
  system?: Array<SystemContentBlock>;
  inputVariables?: Array<PromptInputVariable>;
  toolConfiguration?: ToolConfiguration;
}
export interface ChunkingConfiguration {
  chunkingStrategy: ChunkingStrategy;
  fixedSizeChunkingConfiguration?: FixedSizeChunkingConfiguration;
  hierarchicalChunkingConfiguration?: HierarchicalChunkingConfiguration;
  semanticChunkingConfiguration?: SemanticChunkingConfiguration;
}
export type ChunkingStrategy =
  | "FIXED_SIZE"
  | "NONE"
  | "HIERARCHICAL"
  | "SEMANTIC";
export type ClientToken = string;

export type CollaborationInstruction = string;

export interface CollectorFlowNodeConfiguration {}
export type ColumnName = string;

export type ConcurrencyType = "AUTOMATIC" | "MANUAL";
export interface ConditionFlowNodeConfiguration {
  conditions: Array<FlowCondition>;
}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export type ConfluenceAuthType = "BASIC" | "OAUTH2_CLIENT_CREDENTIALS";
export interface ConfluenceCrawlerConfiguration {
  filterConfiguration?: CrawlFilterConfiguration;
}
export interface ConfluenceDataSourceConfiguration {
  sourceConfiguration: ConfluenceSourceConfiguration;
  crawlerConfiguration?: ConfluenceCrawlerConfiguration;
}
export type ConfluenceHostType = "SAAS";
export interface ConfluenceSourceConfiguration {
  hostUrl: string;
  hostType: ConfluenceHostType;
  authType: ConfluenceAuthType;
  credentialsSecretArn: string;
}
interface _ContentBlock {
  text?: string;
  cachePoint?: CachePointBlock;
}

export type ContentBlock =
  | (_ContentBlock & { text: string })
  | (_ContentBlock & { cachePoint: CachePointBlock });
export type ContentBlocks = Array<ContentBlock>;
export type ContentDataSourceType = "CUSTOM" | "S3";
export interface ContextEnrichmentConfiguration {
  type: ContextEnrichmentType;
  bedrockFoundationModelConfiguration?: BedrockFoundationModelContextEnrichmentConfiguration;
}
export type ContextEnrichmentType = "BEDROCK_FOUNDATION_MODEL";
export type ConversationRole = "USER" | "ASSISTANT";
export interface CrawlFilterConfiguration {
  type: CrawlFilterConfigurationType;
  patternObjectFilter?: PatternObjectFilterConfiguration;
}
export type CrawlFilterConfigurationType = "PATTERN";
export interface CreateAgentActionGroupRequest {
  agentId: string;
  agentVersion: string;
  actionGroupName: string;
  clientToken?: string;
  description?: string;
  parentActionGroupSignature?: ActionGroupSignature;
  parentActionGroupSignatureParams?: Record<string, string>;
  actionGroupExecutor?: ActionGroupExecutor;
  apiSchema?: APISchema;
  actionGroupState?: ActionGroupState;
  functionSchema?: FunctionSchema;
}
export interface CreateAgentActionGroupResponse {
  agentActionGroup: AgentActionGroup;
}
export interface CreateAgentAliasRequest {
  agentId: string;
  agentAliasName: string;
  clientToken?: string;
  description?: string;
  routingConfiguration?: Array<AgentAliasRoutingConfigurationListItem>;
  tags?: Record<string, string>;
}
export interface CreateAgentAliasResponse {
  agentAlias: AgentAlias;
}
export interface CreateAgentRequest {
  agentName: string;
  clientToken?: string;
  instruction?: string;
  foundationModel?: string;
  description?: string;
  orchestrationType?: OrchestrationType;
  customOrchestration?: CustomOrchestration;
  idleSessionTTLInSeconds?: number;
  agentResourceRoleArn?: string;
  customerEncryptionKeyArn?: string;
  tags?: Record<string, string>;
  promptOverrideConfiguration?: PromptOverrideConfiguration;
  guardrailConfiguration?: GuardrailConfiguration;
  memoryConfiguration?: MemoryConfiguration;
  agentCollaboration?: AgentCollaboration;
}
export interface CreateAgentResponse {
  agent: Agent;
}
export interface CreateDataSourceRequest {
  knowledgeBaseId: string;
  clientToken?: string;
  name: string;
  description?: string;
  dataSourceConfiguration: DataSourceConfiguration;
  dataDeletionPolicy?: DataDeletionPolicy;
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  vectorIngestionConfiguration?: VectorIngestionConfiguration;
}
export interface CreateDataSourceResponse {
  dataSource: DataSource;
}
export interface CreateFlowAliasRequest {
  name: string;
  description?: string;
  routingConfiguration: Array<FlowAliasRoutingConfigurationListItem>;
  concurrencyConfiguration?: FlowAliasConcurrencyConfiguration;
  flowIdentifier: string;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateFlowAliasResponse {
  name: string;
  description?: string;
  routingConfiguration: Array<FlowAliasRoutingConfigurationListItem>;
  concurrencyConfiguration?: FlowAliasConcurrencyConfiguration;
  flowId: string;
  id: string;
  arn: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}
export interface CreateFlowRequest {
  name: string;
  description?: string;
  executionRoleArn: string;
  customerEncryptionKeyArn?: string;
  definition?: FlowDefinition;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateFlowResponse {
  name: string;
  description?: string;
  executionRoleArn: string;
  customerEncryptionKeyArn?: string;
  id: string;
  arn: string;
  status: FlowStatus;
  createdAt: Date | string;
  updatedAt: Date | string;
  version: string;
  definition?: FlowDefinition;
}
export interface CreateFlowVersionRequest {
  flowIdentifier: string;
  description?: string;
  clientToken?: string;
}
export interface CreateFlowVersionResponse {
  name: string;
  description?: string;
  executionRoleArn: string;
  customerEncryptionKeyArn?: string;
  id: string;
  arn: string;
  status: FlowStatus;
  createdAt: Date | string;
  version: string;
  definition?: FlowDefinition;
}
export interface CreateKnowledgeBaseRequest {
  clientToken?: string;
  name: string;
  description?: string;
  roleArn: string;
  knowledgeBaseConfiguration: KnowledgeBaseConfiguration;
  storageConfiguration?: StorageConfiguration;
  tags?: Record<string, string>;
}
export interface CreateKnowledgeBaseResponse {
  knowledgeBase: KnowledgeBase;
}
export interface CreatePromptRequest {
  name: string;
  description?: string;
  customerEncryptionKeyArn?: string;
  defaultVariant?: string;
  variants?: Array<PromptVariant>;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreatePromptResponse {
  name: string;
  description?: string;
  customerEncryptionKeyArn?: string;
  defaultVariant?: string;
  variants?: Array<PromptVariant>;
  id: string;
  arn: string;
  version: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}
export interface CreatePromptVersionRequest {
  promptIdentifier: string;
  description?: string;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreatePromptVersionResponse {
  name: string;
  description?: string;
  customerEncryptionKeyArn?: string;
  defaultVariant?: string;
  variants?: Array<PromptVariant>;
  id: string;
  arn: string;
  version: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}
export type CreationMode = "DEFAULT" | "OVERRIDDEN";
export type CuratedQueries = Array<CuratedQuery>;
export interface CuratedQuery {
  naturalLanguage: string;
  sql: string;
}
export interface CustomContent {
  customDocumentIdentifier: CustomDocumentIdentifier;
  sourceType: CustomSourceType;
  s3Location?: CustomS3Location;
  inlineContent?: InlineContent;
}
export type CustomControlMethod = "RETURN_CONTROL";
export interface CustomDocumentIdentifier {
  id: string;
}
export interface CustomOrchestration {
  executor?: OrchestrationExecutor;
}
export interface CustomS3Location {
  uri: string;
  bucketOwnerAccountId?: string;
}
export type CustomSourceType = "IN_LINE" | "S3_LOCATION";
export interface CustomTransformationConfiguration {
  intermediateStorage: IntermediateStorage;
  transformations: Array<Transformation>;
}
export interface CyclicConnectionFlowValidationDetails {
  connection: string;
}
export type Data = string;

export type DataDeletionPolicy = "RETAIN" | "DELETE";
export interface DataSource {
  knowledgeBaseId: string;
  dataSourceId: string;
  name: string;
  status: DataSourceStatus;
  description?: string;
  dataSourceConfiguration: DataSourceConfiguration;
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  vectorIngestionConfiguration?: VectorIngestionConfiguration;
  dataDeletionPolicy?: DataDeletionPolicy;
  createdAt: Date | string;
  updatedAt: Date | string;
  failureReasons?: Array<string>;
}
export interface DataSourceConfiguration {
  type: DataSourceType;
  s3Configuration?: S3DataSourceConfiguration;
  webConfiguration?: WebDataSourceConfiguration;
  confluenceConfiguration?: ConfluenceDataSourceConfiguration;
  salesforceConfiguration?: SalesforceDataSourceConfiguration;
  sharePointConfiguration?: SharePointDataSourceConfiguration;
}
export type DataSourceStatus = "AVAILABLE" | "DELETING" | "DELETE_UNSUCCESSFUL";
export type DataSourceSummaries = Array<DataSourceSummary>;
export interface DataSourceSummary {
  knowledgeBaseId: string;
  dataSourceId: string;
  name: string;
  status: DataSourceStatus;
  description?: string;
  updatedAt: Date | string;
}
export type DataSourceType =
  | "S3"
  | "WEB"
  | "CONFLUENCE"
  | "SALESFORCE"
  | "SHAREPOINT"
  | "CUSTOM"
  | "REDSHIFT_METADATA";
export type DateTimestamp = Date | string;

export interface DeleteAgentActionGroupRequest {
  agentId: string;
  agentVersion: string;
  actionGroupId: string;
  skipResourceInUseCheck?: boolean;
}
export interface DeleteAgentActionGroupResponse {}
export interface DeleteAgentAliasRequest {
  agentId: string;
  agentAliasId: string;
}
export interface DeleteAgentAliasResponse {
  agentId: string;
  agentAliasId: string;
  agentAliasStatus: AgentAliasStatus;
}
export interface DeleteAgentRequest {
  agentId: string;
  skipResourceInUseCheck?: boolean;
}
export interface DeleteAgentResponse {
  agentId: string;
  agentStatus: AgentStatus;
}
export interface DeleteAgentVersionRequest {
  agentId: string;
  agentVersion: string;
  skipResourceInUseCheck?: boolean;
}
export interface DeleteAgentVersionResponse {
  agentId: string;
  agentVersion: string;
  agentStatus: AgentStatus;
}
export interface DeleteDataSourceRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
}
export interface DeleteDataSourceResponse {
  knowledgeBaseId: string;
  dataSourceId: string;
  status: DataSourceStatus;
}
export interface DeleteFlowAliasRequest {
  flowIdentifier: string;
  aliasIdentifier: string;
}
export interface DeleteFlowAliasResponse {
  flowId: string;
  id: string;
}
export interface DeleteFlowRequest {
  flowIdentifier: string;
  skipResourceInUseCheck?: boolean;
}
export interface DeleteFlowResponse {
  id: string;
}
export interface DeleteFlowVersionRequest {
  flowIdentifier: string;
  flowVersion: string;
  skipResourceInUseCheck?: boolean;
}
export interface DeleteFlowVersionResponse {
  id: string;
  version: string;
}
export interface DeleteKnowledgeBaseDocumentsRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
  clientToken?: string;
  documentIdentifiers: Array<DocumentIdentifier>;
}
export interface DeleteKnowledgeBaseDocumentsResponse {
  documentDetails?: Array<KnowledgeBaseDocumentDetail>;
}
export interface DeleteKnowledgeBaseRequest {
  knowledgeBaseId: string;
}
export interface DeleteKnowledgeBaseResponse {
  knowledgeBaseId: string;
  status: KnowledgeBaseStatus;
}
export interface DeletePromptRequest {
  promptIdentifier: string;
  promptVersion?: string;
}
export interface DeletePromptResponse {
  id: string;
  version?: string;
}
export type Description = string;

export type DescriptionString = string;

export type Dimensions = number;

export interface DisassociateAgentCollaboratorRequest {
  agentId: string;
  agentVersion: string;
  collaboratorId: string;
}
export interface DisassociateAgentCollaboratorResponse {}
export interface DisassociateAgentKnowledgeBaseRequest {
  agentId: string;
  agentVersion: string;
  knowledgeBaseId: string;
}
export interface DisassociateAgentKnowledgeBaseResponse {}
export interface DocumentContent {
  dataSourceType: ContentDataSourceType;
  custom?: CustomContent;
  s3?: S3Content;
}
export interface DocumentIdentifier {
  dataSourceType: ContentDataSourceType;
  s3?: S3Location;
  custom?: CustomDocumentIdentifier;
}
export type DocumentIdentifiers = Array<DocumentIdentifier>;
export interface DocumentMetadata {
  type: MetadataSourceType;
  inlineAttributes?: Array<MetadataAttribute>;
  s3Location?: CustomS3Location;
}
export type DocumentStatus =
  | "INDEXED"
  | "PARTIALLY_INDEXED"
  | "PENDING"
  | "FAILED"
  | "METADATA_PARTIALLY_INDEXED"
  | "METADATA_UPDATE_FAILED"
  | "IGNORED"
  | "NOT_FOUND"
  | "STARTING"
  | "IN_PROGRESS"
  | "DELETING"
  | "DELETE_IN_PROGRESS";
export type DraftVersion = string;

export interface DuplicateConditionExpressionFlowValidationDetails {
  node: string;
  expression: string;
}
export interface DuplicateConnectionsFlowValidationDetails {
  source: string;
  target: string;
}
export type EmbeddingDataType = "FLOAT32" | "BINARY";
export interface EmbeddingModelConfiguration {
  bedrockEmbeddingModelConfiguration?: BedrockEmbeddingModelConfiguration;
}
export type EnabledMemoryTypes = Array<MemoryType>;
export interface EnrichmentStrategyConfiguration {
  method: EnrichmentStrategyMethod;
}
export type EnrichmentStrategyMethod = "CHUNK_ENTITY_EXTRACTION";
export type ErrorMessage = string;

export type FailureReason = string;

export type FailureReasons = Array<string>;
export interface FieldForReranking {
  fieldName: string;
}
export type FieldName = string;

export type FieldsForReranking = Array<FieldForReranking>;
export type FilteredObjectType = string;

export type FilterList = Array<string>;
export type FilterPattern = string;

export interface FixedSizeChunkingConfiguration {
  maxTokens: number;
  overlapPercentage: number;
}
export type FlowAliasArn = string;

export interface FlowAliasConcurrencyConfiguration {
  type: ConcurrencyType;
  maxConcurrency?: number;
}
export type FlowAliasId = string;

export type FlowAliasIdentifier = string;

export type FlowAliasRoutingConfiguration =
  Array<FlowAliasRoutingConfigurationListItem>;
export interface FlowAliasRoutingConfigurationListItem {
  flowVersion?: string;
}
export type FlowAliasSummaries = Array<FlowAliasSummary>;
export interface FlowAliasSummary {
  name: string;
  description?: string;
  routingConfiguration: Array<FlowAliasRoutingConfigurationListItem>;
  concurrencyConfiguration?: FlowAliasConcurrencyConfiguration;
  flowId: string;
  id: string;
  arn: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}
export type FlowArn = string;

export interface FlowCondition {
  name: string;
  expression?: string;
}
export interface FlowConditionalConnectionConfiguration {
  condition: string;
}
export type FlowConditionExpression = string;

export type FlowConditionName = string;

export type FlowConditions = Array<FlowCondition>;
export interface FlowConnection {
  type: FlowConnectionType;
  name: string;
  source: string;
  target: string;
  configuration?: FlowConnectionConfiguration;
}
interface _FlowConnectionConfiguration {
  data?: FlowDataConnectionConfiguration;
  conditional?: FlowConditionalConnectionConfiguration;
}

export type FlowConnectionConfiguration =
  | (_FlowConnectionConfiguration & { data: FlowDataConnectionConfiguration })
  | (_FlowConnectionConfiguration & {
      conditional: FlowConditionalConnectionConfiguration;
    });
export type FlowConnectionName = string;

export type FlowConnections = Array<FlowConnection>;
export type FlowConnectionType = "DATA" | "CONDITIONAL";
export interface FlowDataConnectionConfiguration {
  sourceOutput: string;
  targetInput: string;
}
export interface FlowDefinition {
  nodes?: Array<FlowNode>;
  connections?: Array<FlowConnection>;
}
export type FlowDescription = string;

export type FlowExecutionRoleArn = string;

export type FlowId = string;

export type FlowIdentifier = string;

export type FlowName = string;

export interface FlowNode {
  name: string;
  type: FlowNodeType;
  configuration?: FlowNodeConfiguration;
  inputs?: Array<FlowNodeInput>;
  outputs?: Array<FlowNodeOutput>;
}
interface _FlowNodeConfiguration {
  input?: InputFlowNodeConfiguration;
  output?: OutputFlowNodeConfiguration;
  knowledgeBase?: KnowledgeBaseFlowNodeConfiguration;
  condition?: ConditionFlowNodeConfiguration;
  lex?: LexFlowNodeConfiguration;
  prompt?: PromptFlowNodeConfiguration;
  lambdaFunction?: LambdaFunctionFlowNodeConfiguration;
  storage?: StorageFlowNodeConfiguration;
  agent?: AgentFlowNodeConfiguration;
  retrieval?: RetrievalFlowNodeConfiguration;
  iterator?: IteratorFlowNodeConfiguration;
  collector?: CollectorFlowNodeConfiguration;
  inlineCode?: InlineCodeFlowNodeConfiguration;
  loop?: LoopFlowNodeConfiguration;
  loopInput?: LoopInputFlowNodeConfiguration;
  loopController?: LoopControllerFlowNodeConfiguration;
}

export type FlowNodeConfiguration =
  | (_FlowNodeConfiguration & { input: InputFlowNodeConfiguration })
  | (_FlowNodeConfiguration & { output: OutputFlowNodeConfiguration })
  | (_FlowNodeConfiguration & {
      knowledgeBase: KnowledgeBaseFlowNodeConfiguration;
    })
  | (_FlowNodeConfiguration & { condition: ConditionFlowNodeConfiguration })
  | (_FlowNodeConfiguration & { lex: LexFlowNodeConfiguration })
  | (_FlowNodeConfiguration & { prompt: PromptFlowNodeConfiguration })
  | (_FlowNodeConfiguration & {
      lambdaFunction: LambdaFunctionFlowNodeConfiguration;
    })
  | (_FlowNodeConfiguration & { storage: StorageFlowNodeConfiguration })
  | (_FlowNodeConfiguration & { agent: AgentFlowNodeConfiguration })
  | (_FlowNodeConfiguration & { retrieval: RetrievalFlowNodeConfiguration })
  | (_FlowNodeConfiguration & { iterator: IteratorFlowNodeConfiguration })
  | (_FlowNodeConfiguration & { collector: CollectorFlowNodeConfiguration })
  | (_FlowNodeConfiguration & { inlineCode: InlineCodeFlowNodeConfiguration })
  | (_FlowNodeConfiguration & { loop: LoopFlowNodeConfiguration })
  | (_FlowNodeConfiguration & { loopInput: LoopInputFlowNodeConfiguration })
  | (_FlowNodeConfiguration & {
      loopController: LoopControllerFlowNodeConfiguration;
    });
export interface FlowNodeInput {
  name: string;
  type: FlowNodeIODataType;
  expression: string;
  category?: FlowNodeInputCategory;
}
export type FlowNodeInputCategory =
  | "LOOP_CONDITION"
  | "RETURN_VALUE_TO_LOOP_START"
  | "EXIT_LOOP";
export type FlowNodeInputExpression = string;

export type FlowNodeInputName = string;

export type FlowNodeInputs = Array<FlowNodeInput>;
export type FlowNodeIODataType =
  | "STRING"
  | "NUMBER"
  | "BOOLEAN"
  | "OBJECT"
  | "ARRAY";
export type FlowNodeName = string;

export interface FlowNodeOutput {
  name: string;
  type: FlowNodeIODataType;
}
export type FlowNodeOutputName = string;

export type FlowNodeOutputs = Array<FlowNodeOutput>;
export type FlowNodes = Array<FlowNode>;
export type FlowNodeType =
  | "INPUT"
  | "OUTPUT"
  | "KNOWLEDGE_BASE"
  | "CONDITION"
  | "LEX"
  | "PROMPT"
  | "LAMBDA_FUNCTION"
  | "STORAGE"
  | "AGENT"
  | "RETRIEVAL"
  | "ITERATOR"
  | "COLLECTOR"
  | "INLINE_CODE"
  | "LOOP"
  | "LOOP_INPUT"
  | "LOOP_CONTROLLER";
export type FlowStatus = "FAILED" | "PREPARED" | "PREPARING" | "NOT_PREPARED";
export type FlowSummaries = Array<FlowSummary>;
export interface FlowSummary {
  name: string;
  description?: string;
  id: string;
  arn: string;
  status: FlowStatus;
  createdAt: Date | string;
  updatedAt: Date | string;
  version: string;
}
export interface FlowValidation {
  message: string;
  severity: FlowValidationSeverity;
  details?: FlowValidationDetails;
  type?: FlowValidationType;
}
interface _FlowValidationDetails {
  cyclicConnection?: CyclicConnectionFlowValidationDetails;
  duplicateConnections?: DuplicateConnectionsFlowValidationDetails;
  duplicateConditionExpression?: DuplicateConditionExpressionFlowValidationDetails;
  unreachableNode?: UnreachableNodeFlowValidationDetails;
  unknownConnectionSource?: UnknownConnectionSourceFlowValidationDetails;
  unknownConnectionSourceOutput?: UnknownConnectionSourceOutputFlowValidationDetails;
  unknownConnectionTarget?: UnknownConnectionTargetFlowValidationDetails;
  unknownConnectionTargetInput?: UnknownConnectionTargetInputFlowValidationDetails;
  unknownConnectionCondition?: UnknownConnectionConditionFlowValidationDetails;
  malformedConditionExpression?: MalformedConditionExpressionFlowValidationDetails;
  malformedNodeInputExpression?: MalformedNodeInputExpressionFlowValidationDetails;
  mismatchedNodeInputType?: MismatchedNodeInputTypeFlowValidationDetails;
  mismatchedNodeOutputType?: MismatchedNodeOutputTypeFlowValidationDetails;
  incompatibleConnectionDataType?: IncompatibleConnectionDataTypeFlowValidationDetails;
  missingConnectionConfiguration?: MissingConnectionConfigurationFlowValidationDetails;
  missingDefaultCondition?: MissingDefaultConditionFlowValidationDetails;
  missingEndingNodes?: MissingEndingNodesFlowValidationDetails;
  missingNodeConfiguration?: MissingNodeConfigurationFlowValidationDetails;
  missingNodeInput?: MissingNodeInputFlowValidationDetails;
  missingNodeOutput?: MissingNodeOutputFlowValidationDetails;
  missingStartingNodes?: MissingStartingNodesFlowValidationDetails;
  multipleNodeInputConnections?: MultipleNodeInputConnectionsFlowValidationDetails;
  unfulfilledNodeInput?: UnfulfilledNodeInputFlowValidationDetails;
  unsatisfiedConnectionConditions?: UnsatisfiedConnectionConditionsFlowValidationDetails;
  unspecified?: UnspecifiedFlowValidationDetails;
  unknownNodeInput?: UnknownNodeInputFlowValidationDetails;
  unknownNodeOutput?: UnknownNodeOutputFlowValidationDetails;
  missingLoopInputNode?: MissingLoopInputNodeFlowValidationDetails;
  missingLoopControllerNode?: MissingLoopControllerNodeFlowValidationDetails;
  multipleLoopInputNodes?: MultipleLoopInputNodesFlowValidationDetails;
  multipleLoopControllerNodes?: MultipleLoopControllerNodesFlowValidationDetails;
  loopIncompatibleNodeType?: LoopIncompatibleNodeTypeFlowValidationDetails;
  invalidLoopBoundary?: InvalidLoopBoundaryFlowValidationDetails;
}

export type FlowValidationDetails =
  | (_FlowValidationDetails & {
      cyclicConnection: CyclicConnectionFlowValidationDetails;
    })
  | (_FlowValidationDetails & {
      duplicateConnections: DuplicateConnectionsFlowValidationDetails;
    })
  | (_FlowValidationDetails & {
      duplicateConditionExpression: DuplicateConditionExpressionFlowValidationDetails;
    })
  | (_FlowValidationDetails & {
      unreachableNode: UnreachableNodeFlowValidationDetails;
    })
  | (_FlowValidationDetails & {
      unknownConnectionSource: UnknownConnectionSourceFlowValidationDetails;
    })
  | (_FlowValidationDetails & {
      unknownConnectionSourceOutput: UnknownConnectionSourceOutputFlowValidationDetails;
    })
  | (_FlowValidationDetails & {
      unknownConnectionTarget: UnknownConnectionTargetFlowValidationDetails;
    })
  | (_FlowValidationDetails & {
      unknownConnectionTargetInput: UnknownConnectionTargetInputFlowValidationDetails;
    })
  | (_FlowValidationDetails & {
      unknownConnectionCondition: UnknownConnectionConditionFlowValidationDetails;
    })
  | (_FlowValidationDetails & {
      malformedConditionExpression: MalformedConditionExpressionFlowValidationDetails;
    })
  | (_FlowValidationDetails & {
      malformedNodeInputExpression: MalformedNodeInputExpressionFlowValidationDetails;
    })
  | (_FlowValidationDetails & {
      mismatchedNodeInputType: MismatchedNodeInputTypeFlowValidationDetails;
    })
  | (_FlowValidationDetails & {
      mismatchedNodeOutputType: MismatchedNodeOutputTypeFlowValidationDetails;
    })
  | (_FlowValidationDetails & {
      incompatibleConnectionDataType: IncompatibleConnectionDataTypeFlowValidationDetails;
    })
  | (_FlowValidationDetails & {
      missingConnectionConfiguration: MissingConnectionConfigurationFlowValidationDetails;
    })
  | (_FlowValidationDetails & {
      missingDefaultCondition: MissingDefaultConditionFlowValidationDetails;
    })
  | (_FlowValidationDetails & {
      missingEndingNodes: MissingEndingNodesFlowValidationDetails;
    })
  | (_FlowValidationDetails & {
      missingNodeConfiguration: MissingNodeConfigurationFlowValidationDetails;
    })
  | (_FlowValidationDetails & {
      missingNodeInput: MissingNodeInputFlowValidationDetails;
    })
  | (_FlowValidationDetails & {
      missingNodeOutput: MissingNodeOutputFlowValidationDetails;
    })
  | (_FlowValidationDetails & {
      missingStartingNodes: MissingStartingNodesFlowValidationDetails;
    })
  | (_FlowValidationDetails & {
      multipleNodeInputConnections: MultipleNodeInputConnectionsFlowValidationDetails;
    })
  | (_FlowValidationDetails & {
      unfulfilledNodeInput: UnfulfilledNodeInputFlowValidationDetails;
    })
  | (_FlowValidationDetails & {
      unsatisfiedConnectionConditions: UnsatisfiedConnectionConditionsFlowValidationDetails;
    })
  | (_FlowValidationDetails & { unspecified: UnspecifiedFlowValidationDetails })
  | (_FlowValidationDetails & {
      unknownNodeInput: UnknownNodeInputFlowValidationDetails;
    })
  | (_FlowValidationDetails & {
      unknownNodeOutput: UnknownNodeOutputFlowValidationDetails;
    })
  | (_FlowValidationDetails & {
      missingLoopInputNode: MissingLoopInputNodeFlowValidationDetails;
    })
  | (_FlowValidationDetails & {
      missingLoopControllerNode: MissingLoopControllerNodeFlowValidationDetails;
    })
  | (_FlowValidationDetails & {
      multipleLoopInputNodes: MultipleLoopInputNodesFlowValidationDetails;
    })
  | (_FlowValidationDetails & {
      multipleLoopControllerNodes: MultipleLoopControllerNodesFlowValidationDetails;
    })
  | (_FlowValidationDetails & {
      loopIncompatibleNodeType: LoopIncompatibleNodeTypeFlowValidationDetails;
    })
  | (_FlowValidationDetails & {
      invalidLoopBoundary: InvalidLoopBoundaryFlowValidationDetails;
    });
export type FlowValidations = Array<FlowValidation>;
export type FlowValidationSeverity = "WARNING" | "ERROR";
export type FlowValidationType =
  | "CYCLIC_CONNECTION"
  | "DUPLICATE_CONNECTIONS"
  | "DUPLICATE_CONDITION_EXPRESSION"
  | "UNREACHABLE_NODE"
  | "UNKNOWN_CONNECTION_SOURCE"
  | "UNKNOWN_CONNECTION_SOURCE_OUTPUT"
  | "UNKNOWN_CONNECTION_TARGET"
  | "UNKNOWN_CONNECTION_TARGET_INPUT"
  | "UNKNOWN_CONNECTION_CONDITION"
  | "MALFORMED_CONDITION_EXPRESSION"
  | "MALFORMED_NODE_INPUT_EXPRESSION"
  | "MISMATCHED_NODE_INPUT_TYPE"
  | "MISMATCHED_NODE_OUTPUT_TYPE"
  | "INCOMPATIBLE_CONNECTION_DATA_TYPE"
  | "MISSING_CONNECTION_CONFIGURATION"
  | "MISSING_DEFAULT_CONDITION"
  | "MISSING_ENDING_NODES"
  | "MISSING_NODE_CONFIGURATION"
  | "MISSING_NODE_INPUT"
  | "MISSING_NODE_OUTPUT"
  | "MISSING_STARTING_NODES"
  | "MULTIPLE_NODE_INPUT_CONNECTIONS"
  | "UNFULFILLED_NODE_INPUT"
  | "UNSATISFIED_CONNECTION_CONDITIONS"
  | "UNSPECIFIED"
  | "UNKNOWN_NODE_INPUT"
  | "UNKNOWN_NODE_OUTPUT"
  | "MISSING_LOOP_INPUT_NODE"
  | "MISSING_LOOP_CONTROLLER_NODE"
  | "MULTIPLE_LOOP_INPUT_NODES"
  | "MULTIPLE_LOOP_CONTROLLER_NODES"
  | "LOOP_INCOMPATIBLE_NODE_TYPE"
  | "INVALID_LOOP_BOUNDARY";
export type FlowVersionSummaries = Array<FlowVersionSummary>;
export interface FlowVersionSummary {
  id: string;
  arn: string;
  status: FlowStatus;
  createdAt: Date | string;
  version: string;
}
export interface BedrockAgentFunction {
  name: string;
  description?: string;
  parameters?: Record<string, ParameterDetail>;
  requireConfirmation?: RequireConfirmation;
}
export type FunctionDescription = string;

export type Functions = Array<BedrockAgentFunction>;
interface _FunctionSchema {
  functions?: Array<BedrockAgentFunction>;
}

export type FunctionSchema = _FunctionSchema & {
  functions: Array<BedrockAgentFunction>;
};
export interface GetAgentActionGroupRequest {
  agentId: string;
  agentVersion: string;
  actionGroupId: string;
}
export interface GetAgentActionGroupResponse {
  agentActionGroup: AgentActionGroup;
}
export interface GetAgentAliasRequest {
  agentId: string;
  agentAliasId: string;
}
export interface GetAgentAliasResponse {
  agentAlias: AgentAlias;
}
export interface GetAgentCollaboratorRequest {
  agentId: string;
  agentVersion: string;
  collaboratorId: string;
}
export interface GetAgentCollaboratorResponse {
  agentCollaborator: AgentCollaborator;
}
export interface GetAgentKnowledgeBaseRequest {
  agentId: string;
  agentVersion: string;
  knowledgeBaseId: string;
}
export interface GetAgentKnowledgeBaseResponse {
  agentKnowledgeBase: AgentKnowledgeBase;
}
export interface GetAgentRequest {
  agentId: string;
}
export interface GetAgentResponse {
  agent: Agent;
}
export interface GetAgentVersionRequest {
  agentId: string;
  agentVersion: string;
}
export interface GetAgentVersionResponse {
  agentVersion: AgentVersion;
}
export interface GetDataSourceRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
}
export interface GetDataSourceResponse {
  dataSource: DataSource;
}
export interface GetFlowAliasRequest {
  flowIdentifier: string;
  aliasIdentifier: string;
}
export interface GetFlowAliasResponse {
  name: string;
  description?: string;
  routingConfiguration: Array<FlowAliasRoutingConfigurationListItem>;
  concurrencyConfiguration?: FlowAliasConcurrencyConfiguration;
  flowId: string;
  id: string;
  arn: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}
export interface GetFlowRequest {
  flowIdentifier: string;
}
export interface GetFlowResponse {
  name: string;
  description?: string;
  executionRoleArn: string;
  customerEncryptionKeyArn?: string;
  id: string;
  arn: string;
  status: FlowStatus;
  createdAt: Date | string;
  updatedAt: Date | string;
  version: string;
  definition?: FlowDefinition;
  validations?: Array<FlowValidation>;
}
export interface GetFlowVersionRequest {
  flowIdentifier: string;
  flowVersion: string;
}
export interface GetFlowVersionResponse {
  name: string;
  description?: string;
  executionRoleArn: string;
  customerEncryptionKeyArn?: string;
  id: string;
  arn: string;
  status: FlowStatus;
  createdAt: Date | string;
  version: string;
  definition?: FlowDefinition;
}
export interface GetIngestionJobRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
  ingestionJobId: string;
}
export interface GetIngestionJobResponse {
  ingestionJob: IngestionJob;
}
export interface GetKnowledgeBaseDocumentsRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
  documentIdentifiers: Array<DocumentIdentifier>;
}
export interface GetKnowledgeBaseDocumentsResponse {
  documentDetails?: Array<KnowledgeBaseDocumentDetail>;
}
export interface GetKnowledgeBaseRequest {
  knowledgeBaseId: string;
}
export interface GetKnowledgeBaseResponse {
  knowledgeBase: KnowledgeBase;
}
export interface GetPromptRequest {
  promptIdentifier: string;
  promptVersion?: string;
}
export interface GetPromptResponse {
  name: string;
  description?: string;
  customerEncryptionKeyArn?: string;
  defaultVariant?: string;
  variants?: Array<PromptVariant>;
  id: string;
  arn: string;
  version: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}
export type GraphArn = string;

export interface GuardrailConfiguration {
  guardrailIdentifier?: string;
  guardrailVersion?: string;
}
export type GuardrailIdentifier = string;

export type GuardrailVersion = string;

export interface HierarchicalChunkingConfiguration {
  levelConfigurations: Array<HierarchicalChunkingLevelConfiguration>;
  overlapTokens: number;
}
export interface HierarchicalChunkingLevelConfiguration {
  maxTokens: number;
}
export type HierarchicalChunkingLevelConfigurations =
  Array<HierarchicalChunkingLevelConfiguration>;
export type HttpsUrl = string;

export type Id = string;

export type IncludeExclude = "INCLUDE" | "EXCLUDE";
export interface IncompatibleConnectionDataTypeFlowValidationDetails {
  connection: string;
}
export type IncompatibleLoopNodeType =
  | "INPUT"
  | "CONDITION"
  | "ITERATOR"
  | "COLLECTOR";
export interface InferenceConfiguration {
  temperature?: number;
  topP?: number;
  topK?: number;
  maximumLength?: number;
  stopSequences?: Array<string>;
}
export interface IngestionJob {
  knowledgeBaseId: string;
  dataSourceId: string;
  ingestionJobId: string;
  description?: string;
  status: IngestionJobStatus;
  statistics?: IngestionJobStatistics;
  failureReasons?: Array<string>;
  startedAt: Date | string;
  updatedAt: Date | string;
}
export interface IngestionJobFilter {
  attribute: IngestionJobFilterAttribute;
  operator: IngestionJobFilterOperator;
  values: Array<string>;
}
export type IngestionJobFilterAttribute = "STATUS";
export type IngestionJobFilterOperator = "EQ";
export type IngestionJobFilters = Array<IngestionJobFilter>;
export type IngestionJobFilterValue = string;

export type IngestionJobFilterValues = Array<string>;
export interface IngestionJobSortBy {
  attribute: IngestionJobSortByAttribute;
  order: SortOrder;
}
export type IngestionJobSortByAttribute = "STATUS" | "STARTED_AT";
export interface IngestionJobStatistics {
  numberOfDocumentsScanned?: number;
  numberOfMetadataDocumentsScanned?: number;
  numberOfNewDocumentsIndexed?: number;
  numberOfModifiedDocumentsIndexed?: number;
  numberOfMetadataDocumentsModified?: number;
  numberOfDocumentsDeleted?: number;
  numberOfDocumentsFailed?: number;
}
export type IngestionJobStatus =
  | "STARTING"
  | "IN_PROGRESS"
  | "COMPLETE"
  | "FAILED"
  | "STOPPING"
  | "STOPPED";
export type IngestionJobSummaries = Array<IngestionJobSummary>;
export interface IngestionJobSummary {
  knowledgeBaseId: string;
  dataSourceId: string;
  ingestionJobId: string;
  description?: string;
  status: IngestionJobStatus;
  startedAt: Date | string;
  updatedAt: Date | string;
  statistics?: IngestionJobStatistics;
}
export interface IngestKnowledgeBaseDocumentsRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
  clientToken?: string;
  documents: Array<KnowledgeBaseDocument>;
}
export interface IngestKnowledgeBaseDocumentsResponse {
  documentDetails?: Array<KnowledgeBaseDocumentDetail>;
}
export type InlineCode = string;

export interface InlineCodeFlowNodeConfiguration {
  code: string;
  language: SupportedLanguages;
}
export interface InlineContent {
  type: InlineContentType;
  byteContent?: ByteContentDoc;
  textContent?: TextContentDoc;
}
export type InlineContentType = "BYTE" | "TEXT";
export interface InputFlowNodeConfiguration {}
export type Instruction = string;

export interface IntermediateStorage {
  s3Location: S3Location;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export interface InvalidLoopBoundaryFlowValidationDetails {
  connection: string;
  source: string;
  target: string;
}
export interface IteratorFlowNodeConfiguration {}
export type KendraIndexArn = string;

export interface KendraKnowledgeBaseConfiguration {
  kendraIndexArn: string;
}
export type Key = string;

export type KmsKeyArn = string;

export interface KnowledgeBase {
  knowledgeBaseId: string;
  name: string;
  knowledgeBaseArn: string;
  description?: string;
  roleArn: string;
  knowledgeBaseConfiguration: KnowledgeBaseConfiguration;
  storageConfiguration?: StorageConfiguration;
  status: KnowledgeBaseStatus;
  createdAt: Date | string;
  updatedAt: Date | string;
  failureReasons?: Array<string>;
}
export type KnowledgeBaseArn = string;

export interface KnowledgeBaseConfiguration {
  type: KnowledgeBaseType;
  vectorKnowledgeBaseConfiguration?: VectorKnowledgeBaseConfiguration;
  kendraKnowledgeBaseConfiguration?: KendraKnowledgeBaseConfiguration;
  sqlKnowledgeBaseConfiguration?: SqlKnowledgeBaseConfiguration;
}
export interface KnowledgeBaseDocument {
  metadata?: DocumentMetadata;
  content: DocumentContent;
}
export interface KnowledgeBaseDocumentDetail {
  knowledgeBaseId: string;
  dataSourceId: string;
  status: DocumentStatus;
  identifier: DocumentIdentifier;
  statusReason?: string;
  updatedAt?: Date | string;
}
export type KnowledgeBaseDocumentDetails = Array<KnowledgeBaseDocumentDetail>;
export type KnowledgeBaseDocuments = Array<KnowledgeBaseDocument>;
export interface KnowledgeBaseFlowNodeConfiguration {
  knowledgeBaseId: string;
  modelId?: string;
  guardrailConfiguration?: GuardrailConfiguration;
  numberOfResults?: number;
  promptTemplate?: KnowledgeBasePromptTemplate;
  inferenceConfiguration?: PromptInferenceConfiguration;
  rerankingConfiguration?: VectorSearchRerankingConfiguration;
  orchestrationConfiguration?: KnowledgeBaseOrchestrationConfiguration;
}
export type KnowledgeBaseId = string;

export type KnowledgeBaseModelIdentifier = string;

export interface KnowledgeBaseOrchestrationConfiguration {
  promptTemplate?: KnowledgeBasePromptTemplate;
  inferenceConfig?: PromptInferenceConfiguration;
  additionalModelRequestFields?: Record<string, unknown>;
  performanceConfig?: PerformanceConfiguration;
}
export interface KnowledgeBasePromptTemplate {
  textPromptTemplate?: string;
}
export type KnowledgeBaseRoleArn = string;

export type KnowledgeBaseState = "ENABLED" | "DISABLED";
export type KnowledgeBaseStatus =
  | "CREATING"
  | "ACTIVE"
  | "DELETING"
  | "UPDATING"
  | "FAILED"
  | "DELETE_UNSUCCESSFUL";
export type KnowledgeBaseStorageType =
  | "OPENSEARCH_SERVERLESS"
  | "PINECONE"
  | "REDIS_ENTERPRISE_CLOUD"
  | "RDS"
  | "MONGO_DB_ATLAS"
  | "NEPTUNE_ANALYTICS"
  | "OPENSEARCH_MANAGED_CLUSTER";
export type KnowledgeBaseSummaries = Array<KnowledgeBaseSummary>;
export interface KnowledgeBaseSummary {
  knowledgeBaseId: string;
  name: string;
  description?: string;
  status: KnowledgeBaseStatus;
  updatedAt: Date | string;
}
export type KnowledgeBaseTextPrompt = string;

export type KnowledgeBaseType = "VECTOR" | "KENDRA" | "SQL";
export type LambdaArn = string;

export interface LambdaFunctionFlowNodeConfiguration {
  lambdaArn: string;
}
export type LexBotAliasArn = string;

export type LexBotLocaleId = string;

export interface LexFlowNodeConfiguration {
  botAliasArn: string;
  localeId: string;
}
export interface ListAgentActionGroupsRequest {
  agentId: string;
  agentVersion: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListAgentActionGroupsResponse {
  actionGroupSummaries: Array<ActionGroupSummary>;
  nextToken?: string;
}
export interface ListAgentAliasesRequest {
  agentId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListAgentAliasesResponse {
  agentAliasSummaries: Array<AgentAliasSummary>;
  nextToken?: string;
}
export interface ListAgentCollaboratorsRequest {
  agentId: string;
  agentVersion: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListAgentCollaboratorsResponse {
  agentCollaboratorSummaries: Array<AgentCollaboratorSummary>;
  nextToken?: string;
}
export interface ListAgentKnowledgeBasesRequest {
  agentId: string;
  agentVersion: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListAgentKnowledgeBasesResponse {
  agentKnowledgeBaseSummaries: Array<AgentKnowledgeBaseSummary>;
  nextToken?: string;
}
export interface ListAgentsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListAgentsResponse {
  agentSummaries: Array<AgentSummary>;
  nextToken?: string;
}
export interface ListAgentVersionsRequest {
  agentId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListAgentVersionsResponse {
  agentVersionSummaries: Array<AgentVersionSummary>;
  nextToken?: string;
}
export interface ListDataSourcesRequest {
  knowledgeBaseId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListDataSourcesResponse {
  dataSourceSummaries: Array<DataSourceSummary>;
  nextToken?: string;
}
export interface ListFlowAliasesRequest {
  flowIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListFlowAliasesResponse {
  flowAliasSummaries: Array<FlowAliasSummary>;
  nextToken?: string;
}
export interface ListFlowsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListFlowsResponse {
  flowSummaries: Array<FlowSummary>;
  nextToken?: string;
}
export interface ListFlowVersionsRequest {
  flowIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListFlowVersionsResponse {
  flowVersionSummaries: Array<FlowVersionSummary>;
  nextToken?: string;
}
export interface ListIngestionJobsRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
  filters?: Array<IngestionJobFilter>;
  sortBy?: IngestionJobSortBy;
  maxResults?: number;
  nextToken?: string;
}
export interface ListIngestionJobsResponse {
  ingestionJobSummaries: Array<IngestionJobSummary>;
  nextToken?: string;
}
export interface ListKnowledgeBaseDocumentsRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListKnowledgeBaseDocumentsResponse {
  documentDetails: Array<KnowledgeBaseDocumentDetail>;
  nextToken?: string;
}
export interface ListKnowledgeBasesRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListKnowledgeBasesResponse {
  knowledgeBaseSummaries: Array<KnowledgeBaseSummary>;
  nextToken?: string;
}
export interface ListPromptsRequest {
  promptIdentifier?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListPromptsResponse {
  promptSummaries: Array<PromptSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export interface LoopControllerFlowNodeConfiguration {
  continueCondition: FlowCondition;
  maxIterations?: number;
}
export interface LoopFlowNodeConfiguration {
  definition: FlowDefinition;
}
export interface LoopIncompatibleNodeTypeFlowValidationDetails {
  node: string;
  incompatibleNodeType: IncompatibleLoopNodeType;
  incompatibleNodeName: string;
}
export interface LoopInputFlowNodeConfiguration {}
export interface MalformedConditionExpressionFlowValidationDetails {
  node: string;
  condition: string;
  cause: string;
}
export interface MalformedNodeInputExpressionFlowValidationDetails {
  node: string;
  input: string;
  cause: string;
}
export type MaximumLength = number;

export type MaxRecentSessions = number;

export type MaxResults = number;

export interface MemoryConfiguration {
  enabledMemoryTypes: Array<MemoryType>;
  storageDays?: number;
  sessionSummaryConfiguration?: SessionSummaryConfiguration;
}
export type MemoryType = "SESSION_SUMMARY";
export interface Message {
  role: ConversationRole;
  content: Array<ContentBlock>;
}
export type Messages = Array<Message>;
export interface MetadataAttribute {
  key: string;
  value: MetadataAttributeValue;
}
export type MetadataAttributes = Array<MetadataAttribute>;
export interface MetadataAttributeValue {
  type: MetadataValueType;
  numberValue?: number;
  booleanValue?: boolean;
  stringValue?: string;
  stringListValue?: Array<string>;
}
export interface MetadataConfigurationForReranking {
  selectionMode: RerankingMetadataSelectionMode;
  selectiveModeConfiguration?: RerankingMetadataSelectiveModeConfiguration;
}
export type MetadataSourceType = "IN_LINE_ATTRIBUTE" | "S3_LOCATION";
export type MetadataValueType = "BOOLEAN" | "NUMBER" | "STRING" | "STRING_LIST";
export type Microsoft365TenantId = string;

export interface MismatchedNodeInputTypeFlowValidationDetails {
  node: string;
  input: string;
  expectedType: FlowNodeIODataType;
}
export interface MismatchedNodeOutputTypeFlowValidationDetails {
  node: string;
  output: string;
  expectedType: FlowNodeIODataType;
}
export interface MissingConnectionConfigurationFlowValidationDetails {
  connection: string;
}
export interface MissingDefaultConditionFlowValidationDetails {
  node: string;
}
export interface MissingEndingNodesFlowValidationDetails {}
export interface MissingLoopControllerNodeFlowValidationDetails {
  loopNode: string;
}
export interface MissingLoopInputNodeFlowValidationDetails {
  loopNode: string;
}
export interface MissingNodeConfigurationFlowValidationDetails {
  node: string;
}
export interface MissingNodeInputFlowValidationDetails {
  node: string;
  input: string;
}
export interface MissingNodeOutputFlowValidationDetails {
  node: string;
  output: string;
}
export interface MissingStartingNodesFlowValidationDetails {}
export type ModelIdentifier = string;

export type MongoDbAtlasCollectionName = string;

export interface MongoDbAtlasConfiguration {
  endpoint: string;
  databaseName: string;
  collectionName: string;
  vectorIndexName: string;
  credentialsSecretArn: string;
  fieldMapping: MongoDbAtlasFieldMapping;
  endpointServiceName?: string;
  textIndexName?: string;
}
export type MongoDbAtlasDatabaseName = string;

export type MongoDbAtlasEndpoint = string;

export type MongoDbAtlasEndpointServiceName = string;

export interface MongoDbAtlasFieldMapping {
  vectorField: string;
  textField: string;
  metadataField: string;
}
export type MongoDbAtlasIndexName = string;

export interface MultipleLoopControllerNodesFlowValidationDetails {
  loopNode: string;
}
export interface MultipleLoopInputNodesFlowValidationDetails {
  loopNode: string;
}
export interface MultipleNodeInputConnectionsFlowValidationDetails {
  node: string;
  input: string;
}
export type Name = string;

export type NaturalLanguageString = string;

export interface NeptuneAnalyticsConfiguration {
  graphArn: string;
  fieldMapping: NeptuneAnalyticsFieldMapping;
}
export interface NeptuneAnalyticsFieldMapping {
  textField: string;
  metadataField: string;
}
export type NextToken = string;

export type NonBlankString = string;

export type NonEmptyString = string;

export type NumberValue = number;

export type NumericalVersion = string;

export interface OpenSearchManagedClusterConfiguration {
  domainEndpoint: string;
  domainArn: string;
  vectorIndexName: string;
  fieldMapping: OpenSearchManagedClusterFieldMapping;
}
export type OpenSearchManagedClusterDomainArn = string;

export type OpenSearchManagedClusterDomainEndpoint = string;

export interface OpenSearchManagedClusterFieldMapping {
  vectorField: string;
  textField: string;
  metadataField: string;
}
export type OpenSearchManagedClusterIndexName = string;

export type OpenSearchServerlessCollectionArn = string;

export interface OpenSearchServerlessConfiguration {
  collectionArn: string;
  vectorIndexName: string;
  fieldMapping: OpenSearchServerlessFieldMapping;
}
export interface OpenSearchServerlessFieldMapping {
  vectorField: string;
  textField: string;
  metadataField: string;
}
export type OpenSearchServerlessIndexName = string;

interface _OrchestrationExecutor {
  lambda?: string;
}

export type OrchestrationExecutor = _OrchestrationExecutor & { lambda: string };
export type OrchestrationType = "DEFAULT" | "CUSTOM_ORCHESTRATION";
export interface OutputFlowNodeConfiguration {}
export type ParameterDescription = string;

export interface ParameterDetail {
  description?: string;
  type: Type;
  required?: boolean;
}
export type ParameterMap = Record<string, ParameterDetail>;
export interface ParsingConfiguration {
  parsingStrategy: ParsingStrategy;
  bedrockFoundationModelConfiguration?: BedrockFoundationModelConfiguration;
  bedrockDataAutomationConfiguration?: BedrockDataAutomationConfiguration;
}
export type ParsingModality = "MULTIMODAL";
export interface ParsingPrompt {
  parsingPromptText: string;
}
export type ParsingPromptText = string;

export type ParsingStrategy =
  | "BEDROCK_FOUNDATION_MODEL"
  | "BEDROCK_DATA_AUTOMATION";
export interface PatternObjectFilter {
  objectType: string;
  inclusionFilters?: Array<string>;
  exclusionFilters?: Array<string>;
}
export interface PatternObjectFilterConfiguration {
  filters: Array<PatternObjectFilter>;
}
export type PatternObjectFilterList = Array<PatternObjectFilter>;
export type Payload = string;

export type PerformanceConfigLatency = "STANDARD" | "OPTIMIZED";
export interface PerformanceConfiguration {
  latency?: PerformanceConfigLatency;
}
export interface PineconeConfiguration {
  connectionString: string;
  credentialsSecretArn: string;
  namespace?: string;
  fieldMapping: PineconeFieldMapping;
}
export type PineconeConnectionString = string;

export interface PineconeFieldMapping {
  textField: string;
  metadataField: string;
}
export type PineconeNamespace = string;

export interface PrepareAgentRequest {
  agentId: string;
}
export interface PrepareAgentResponse {
  agentId: string;
  agentStatus: AgentStatus;
  agentVersion: string;
  preparedAt: Date | string;
}
export interface PrepareFlowRequest {
  flowIdentifier: string;
}
export interface PrepareFlowResponse {
  id: string;
  status: FlowStatus;
}
export interface PromptAgentResource {
  agentIdentifier: string;
}
export type PromptArn = string;

export interface PromptConfiguration {
  promptType?: PromptType;
  promptCreationMode?: CreationMode;
  promptState?: PromptState;
  basePromptTemplate?: string;
  inferenceConfiguration?: InferenceConfiguration;
  parserMode?: CreationMode;
  foundationModel?: string;
  additionalModelRequestFields?: unknown;
}
export type PromptConfigurations = Array<PromptConfiguration>;
export type PromptDescription = string;

export interface PromptFlowNodeConfiguration {
  sourceConfiguration: PromptFlowNodeSourceConfiguration;
  guardrailConfiguration?: GuardrailConfiguration;
}
export interface PromptFlowNodeInlineConfiguration {
  templateType: PromptTemplateType;
  templateConfiguration: PromptTemplateConfiguration;
  modelId: string;
  inferenceConfiguration?: PromptInferenceConfiguration;
  additionalModelRequestFields?: unknown;
}
export interface PromptFlowNodeResourceConfiguration {
  promptArn: string;
}
interface _PromptFlowNodeSourceConfiguration {
  resource?: PromptFlowNodeResourceConfiguration;
  inline?: PromptFlowNodeInlineConfiguration;
}

export type PromptFlowNodeSourceConfiguration =
  | (_PromptFlowNodeSourceConfiguration & {
      resource: PromptFlowNodeResourceConfiguration;
    })
  | (_PromptFlowNodeSourceConfiguration & {
      inline: PromptFlowNodeInlineConfiguration;
    });
interface _PromptGenAiResource {
  agent?: PromptAgentResource;
}

export type PromptGenAiResource = _PromptGenAiResource & {
  agent: PromptAgentResource;
};
export type PromptId = string;

export type PromptIdentifier = string;

interface _PromptInferenceConfiguration {
  text?: PromptModelInferenceConfiguration;
}

export type PromptInferenceConfiguration = _PromptInferenceConfiguration & {
  text: PromptModelInferenceConfiguration;
};
export interface PromptInputVariable {
  name?: string;
}
export type PromptInputVariableName = string;

export type PromptInputVariablesList = Array<PromptInputVariable>;
export interface PromptMetadataEntry {
  key: string;
  value: string;
}
export type PromptMetadataKey = string;

export type PromptMetadataList = Array<PromptMetadataEntry>;
export type PromptMetadataValue = string;

export type PromptModelIdentifier = string;

export interface PromptModelInferenceConfiguration {
  temperature?: number;
  topP?: number;
  maxTokens?: number;
  stopSequences?: Array<string>;
}
export type PromptName = string;

export interface PromptOverrideConfiguration {
  promptConfigurations: Array<PromptConfiguration>;
  overrideLambda?: string;
}
export type PromptState = "ENABLED" | "DISABLED";
export type PromptSummaries = Array<PromptSummary>;
export interface PromptSummary {
  name: string;
  description?: string;
  id: string;
  arn: string;
  version: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}
interface _PromptTemplateConfiguration {
  text?: TextPromptTemplateConfiguration;
  chat?: ChatPromptTemplateConfiguration;
}

export type PromptTemplateConfiguration =
  | (_PromptTemplateConfiguration & { text: TextPromptTemplateConfiguration })
  | (_PromptTemplateConfiguration & { chat: ChatPromptTemplateConfiguration });
export type PromptTemplateType = "TEXT" | "CHAT";
export type PromptType =
  | "PRE_PROCESSING"
  | "ORCHESTRATION"
  | "POST_PROCESSING"
  | "KNOWLEDGE_BASE_RESPONSE_GENERATION"
  | "MEMORY_SUMMARIZATION";
export interface PromptVariant {
  name: string;
  templateType: PromptTemplateType;
  templateConfiguration: PromptTemplateConfiguration;
  modelId?: string;
  inferenceConfiguration?: PromptInferenceConfiguration;
  metadata?: Array<PromptMetadataEntry>;
  additionalModelRequestFields?: unknown;
  genAiResource?: PromptGenAiResource;
}
export type PromptVariantList = Array<PromptVariant>;
export type PromptVariantName = string;

export type ProvisionedModelIdentifier = string;

export type QueryEngineType = "REDSHIFT";
export type QueryExecutionTimeoutSeconds = number;

export interface QueryGenerationColumn {
  name?: string;
  description?: string;
  inclusion?: IncludeExclude;
}
export type QueryGenerationColumnName = string;

export type QueryGenerationColumns = Array<QueryGenerationColumn>;
export interface QueryGenerationConfiguration {
  executionTimeoutSeconds?: number;
  generationContext?: QueryGenerationContext;
}
export interface QueryGenerationContext {
  tables?: Array<QueryGenerationTable>;
  curatedQueries?: Array<CuratedQuery>;
}
export interface QueryGenerationTable {
  name: string;
  description?: string;
  inclusion?: IncludeExclude;
  columns?: Array<QueryGenerationColumn>;
}
export type QueryGenerationTableName = string;

export type QueryGenerationTables = Array<QueryGenerationTable>;
export type RdsArn = string;

export interface RdsConfiguration {
  resourceArn: string;
  credentialsSecretArn: string;
  databaseName: string;
  tableName: string;
  fieldMapping: RdsFieldMapping;
}
export type RdsDatabaseName = string;

export interface RdsFieldMapping {
  primaryKeyField: string;
  vectorField: string;
  textField: string;
  metadataField: string;
  customMetadataField?: string;
}
export type RdsTableName = string;

export type RecommendedAction = string;

export type RecommendedActions = Array<string>;
export interface RedisEnterpriseCloudConfiguration {
  endpoint: string;
  vectorIndexName: string;
  credentialsSecretArn: string;
  fieldMapping: RedisEnterpriseCloudFieldMapping;
}
export type RedisEnterpriseCloudEndpoint = string;

export interface RedisEnterpriseCloudFieldMapping {
  vectorField: string;
  textField: string;
  metadataField: string;
}
export type RedisEnterpriseCloudIndexName = string;

export type RedshiftClusterIdentifier = string;

export interface RedshiftConfiguration {
  storageConfigurations: Array<RedshiftQueryEngineStorageConfiguration>;
  queryEngineConfiguration: RedshiftQueryEngineConfiguration;
  queryGenerationConfiguration?: QueryGenerationConfiguration;
}
export type RedshiftDatabase = string;

export interface RedshiftProvisionedAuthConfiguration {
  type: RedshiftProvisionedAuthType;
  databaseUser?: string;
  usernamePasswordSecretArn?: string;
}
export type RedshiftProvisionedAuthType =
  | "IAM"
  | "USERNAME_PASSWORD"
  | "USERNAME";
export interface RedshiftProvisionedConfiguration {
  clusterIdentifier: string;
  authConfiguration: RedshiftProvisionedAuthConfiguration;
}
export interface RedshiftQueryEngineAwsDataCatalogStorageConfiguration {
  tableNames: Array<string>;
}
export interface RedshiftQueryEngineConfiguration {
  type: RedshiftQueryEngineType;
  serverlessConfiguration?: RedshiftServerlessConfiguration;
  provisionedConfiguration?: RedshiftProvisionedConfiguration;
}
export interface RedshiftQueryEngineRedshiftStorageConfiguration {
  databaseName: string;
}
export interface RedshiftQueryEngineStorageConfiguration {
  type: RedshiftQueryEngineStorageType;
  awsDataCatalogConfiguration?: RedshiftQueryEngineAwsDataCatalogStorageConfiguration;
  redshiftConfiguration?: RedshiftQueryEngineRedshiftStorageConfiguration;
}
export type RedshiftQueryEngineStorageConfigurations =
  Array<RedshiftQueryEngineStorageConfiguration>;
export type RedshiftQueryEngineStorageType = "REDSHIFT" | "AWS_DATA_CATALOG";
export type RedshiftQueryEngineType = "SERVERLESS" | "PROVISIONED";
export interface RedshiftServerlessAuthConfiguration {
  type: RedshiftServerlessAuthType;
  usernamePasswordSecretArn?: string;
}
export type RedshiftServerlessAuthType = "IAM" | "USERNAME_PASSWORD";
export interface RedshiftServerlessConfiguration {
  workgroupArn: string;
  authConfiguration: RedshiftServerlessAuthConfiguration;
}
export type RelayConversationHistory = "TO_COLLABORATOR" | "DISABLED";
export type RequireConfirmation = "ENABLED" | "DISABLED";
export type RerankingMetadataSelectionMode = "SELECTIVE" | "ALL";
interface _RerankingMetadataSelectiveModeConfiguration {
  fieldsToInclude?: Array<FieldForReranking>;
  fieldsToExclude?: Array<FieldForReranking>;
}

export type RerankingMetadataSelectiveModeConfiguration =
  | (_RerankingMetadataSelectiveModeConfiguration & {
      fieldsToInclude: Array<FieldForReranking>;
    })
  | (_RerankingMetadataSelectiveModeConfiguration & {
      fieldsToExclude: Array<FieldForReranking>;
    });
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export interface RetrievalFlowNodeConfiguration {
  serviceConfiguration: RetrievalFlowNodeServiceConfiguration;
}
export interface RetrievalFlowNodeS3Configuration {
  bucketName: string;
}
interface _RetrievalFlowNodeServiceConfiguration {
  s3?: RetrievalFlowNodeS3Configuration;
}

export type RetrievalFlowNodeServiceConfiguration =
  _RetrievalFlowNodeServiceConfiguration & {
    s3: RetrievalFlowNodeS3Configuration;
  };
export type S3BucketArn = string;

export type S3BucketName = string;

export type S3BucketUri = string;

export interface S3Content {
  s3Location: S3Location;
}
export interface S3DataSourceConfiguration {
  bucketArn: string;
  inclusionPrefixes?: Array<string>;
  bucketOwnerAccountId?: string;
}
export interface S3Identifier {
  s3BucketName?: string;
  s3ObjectKey?: string;
}
export interface S3Location {
  uri: string;
}
export type S3ObjectKey = string;

export type S3ObjectUri = string;

export type S3Prefix = string;

export type S3Prefixes = Array<string>;
export type SalesforceAuthType = "OAUTH2_CLIENT_CREDENTIALS";
export interface SalesforceCrawlerConfiguration {
  filterConfiguration?: CrawlFilterConfiguration;
}
export interface SalesforceDataSourceConfiguration {
  sourceConfiguration: SalesforceSourceConfiguration;
  crawlerConfiguration?: SalesforceCrawlerConfiguration;
}
export interface SalesforceSourceConfiguration {
  hostUrl: string;
  authType: SalesforceAuthType;
  credentialsSecretArn: string;
}
export type SecretArn = string;

export interface SeedUrl {
  url?: string;
}
export type SeedUrls = Array<SeedUrl>;
export interface SemanticChunkingConfiguration {
  maxTokens: number;
  bufferSize: number;
  breakpointPercentileThreshold: number;
}
export interface ServerSideEncryptionConfiguration {
  kmsKeyArn?: string;
}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export interface SessionSummaryConfiguration {
  maxRecentSessions?: number;
}
export type SessionTTL = number;

export type SharePointAuthType =
  | "OAUTH2_CLIENT_CREDENTIALS"
  | "OAUTH2_SHAREPOINT_APP_ONLY_CLIENT_CREDENTIALS";
export interface SharePointCrawlerConfiguration {
  filterConfiguration?: CrawlFilterConfiguration;
}
export interface SharePointDataSourceConfiguration {
  sourceConfiguration: SharePointSourceConfiguration;
  crawlerConfiguration?: SharePointCrawlerConfiguration;
}
export type SharePointDomain = string;

export type SharePointHostType = "ONLINE";
export type SharePointSiteUrls = Array<string>;
export interface SharePointSourceConfiguration {
  tenantId?: string;
  domain: string;
  siteUrls: Array<string>;
  hostType: SharePointHostType;
  authType: SharePointAuthType;
  credentialsSecretArn: string;
}
export type SortOrder = "ASCENDING" | "DESCENDING";
export interface SpecificToolChoice {
  name: string;
}
export interface SqlKnowledgeBaseConfiguration {
  type: QueryEngineType;
  redshiftConfiguration?: RedshiftConfiguration;
}
export type SqlString = string;

export interface StartIngestionJobRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
  clientToken?: string;
  description?: string;
}
export interface StartIngestionJobResponse {
  ingestionJob: IngestionJob;
}
export type StepType = "POST_CHUNKING";
export interface StopIngestionJobRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
  ingestionJobId: string;
}
export interface StopIngestionJobResponse {
  ingestionJob: IngestionJob;
}
export type StopSequences = Array<string>;
export interface StorageConfiguration {
  type: KnowledgeBaseStorageType;
  opensearchServerlessConfiguration?: OpenSearchServerlessConfiguration;
  opensearchManagedClusterConfiguration?: OpenSearchManagedClusterConfiguration;
  pineconeConfiguration?: PineconeConfiguration;
  redisEnterpriseCloudConfiguration?: RedisEnterpriseCloudConfiguration;
  rdsConfiguration?: RdsConfiguration;
  mongoDbAtlasConfiguration?: MongoDbAtlasConfiguration;
  neptuneAnalyticsConfiguration?: NeptuneAnalyticsConfiguration;
}
export type StorageDays = number;

export interface StorageFlowNodeConfiguration {
  serviceConfiguration: StorageFlowNodeServiceConfiguration;
}
export interface StorageFlowNodeS3Configuration {
  bucketName: string;
}
interface _StorageFlowNodeServiceConfiguration {
  s3?: StorageFlowNodeS3Configuration;
}

export type StorageFlowNodeServiceConfiguration =
  _StorageFlowNodeServiceConfiguration & { s3: StorageFlowNodeS3Configuration };
export type StringListValue = Array<string>;
export type StringValue = string;

export interface SupplementalDataStorageConfiguration {
  storageLocations: Array<SupplementalDataStorageLocation>;
}
export interface SupplementalDataStorageLocation {
  type: SupplementalDataStorageLocationType;
  s3Location?: S3Location;
}
export type SupplementalDataStorageLocations =
  Array<SupplementalDataStorageLocation>;
export type SupplementalDataStorageLocationType = "S3";
export type SupportedLanguages = "PYTHON_3";
interface _SystemContentBlock {
  text?: string;
  cachePoint?: CachePointBlock;
}

export type SystemContentBlock =
  | (_SystemContentBlock & { text: string })
  | (_SystemContentBlock & { cachePoint: CachePointBlock });
export type SystemContentBlocks = Array<SystemContentBlock>;
export type TaggableResourcesArn = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagsMap = Record<string, string>;
export type TagValue = string;

export type Temperature = number;

export interface TextContentDoc {
  data: string;
}
export type TextPrompt = string;

export interface TextPromptTemplateConfiguration {
  text: string;
  cachePoint?: CachePointBlock;
  inputVariables?: Array<PromptInputVariable>;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
interface _Tool {
  toolSpec?: ToolSpecification;
  cachePoint?: CachePointBlock;
}

export type Tool =
  | (_Tool & { toolSpec: ToolSpecification })
  | (_Tool & { cachePoint: CachePointBlock });
interface _ToolChoice {
  auto?: AutoToolChoice;
  any?: AnyToolChoice;
  tool?: SpecificToolChoice;
}

export type ToolChoice =
  | (_ToolChoice & { auto: AutoToolChoice })
  | (_ToolChoice & { any: AnyToolChoice })
  | (_ToolChoice & { tool: SpecificToolChoice });
export interface ToolConfiguration {
  tools: Array<Tool>;
  toolChoice?: ToolChoice;
}
interface _ToolInputSchema {
  json?: unknown;
}

export type ToolInputSchema = _ToolInputSchema & { json: unknown };
export type ToolName = string;

export type Tools = Array<Tool>;
export interface ToolSpecification {
  name: string;
  description?: string;
  inputSchema: ToolInputSchema;
}
export type TopK = number;

export type TopP = number;

export interface Transformation {
  transformationFunction: TransformationFunction;
  stepToApply: StepType;
}
export interface TransformationFunction {
  transformationLambdaConfiguration: TransformationLambdaConfiguration;
}
export interface TransformationLambdaConfiguration {
  lambdaArn: string;
}
export type Transformations = Array<Transformation>;
export type Type = "STRING" | "NUMBER" | "INTEGER" | "BOOLEAN" | "ARRAY";
export interface UnfulfilledNodeInputFlowValidationDetails {
  node: string;
  input: string;
}
export interface UnknownConnectionConditionFlowValidationDetails {
  connection: string;
}
export interface UnknownConnectionSourceFlowValidationDetails {
  connection: string;
}
export interface UnknownConnectionSourceOutputFlowValidationDetails {
  connection: string;
}
export interface UnknownConnectionTargetFlowValidationDetails {
  connection: string;
}
export interface UnknownConnectionTargetInputFlowValidationDetails {
  connection: string;
}
export interface UnknownNodeInputFlowValidationDetails {
  node: string;
  input: string;
}
export interface UnknownNodeOutputFlowValidationDetails {
  node: string;
  output: string;
}
export interface UnreachableNodeFlowValidationDetails {
  node: string;
}
export interface UnsatisfiedConnectionConditionsFlowValidationDetails {
  connection: string;
}
export interface UnspecifiedFlowValidationDetails {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateAgentActionGroupRequest {
  agentId: string;
  agentVersion: string;
  actionGroupId: string;
  actionGroupName: string;
  description?: string;
  parentActionGroupSignature?: ActionGroupSignature;
  parentActionGroupSignatureParams?: Record<string, string>;
  actionGroupExecutor?: ActionGroupExecutor;
  actionGroupState?: ActionGroupState;
  apiSchema?: APISchema;
  functionSchema?: FunctionSchema;
}
export interface UpdateAgentActionGroupResponse {
  agentActionGroup: AgentActionGroup;
}
export interface UpdateAgentAliasRequest {
  agentId: string;
  agentAliasId: string;
  agentAliasName: string;
  description?: string;
  routingConfiguration?: Array<AgentAliasRoutingConfigurationListItem>;
  aliasInvocationState?: AliasInvocationState;
}
export interface UpdateAgentAliasResponse {
  agentAlias: AgentAlias;
}
export interface UpdateAgentCollaboratorRequest {
  agentId: string;
  agentVersion: string;
  collaboratorId: string;
  agentDescriptor: AgentDescriptor;
  collaboratorName: string;
  collaborationInstruction: string;
  relayConversationHistory?: RelayConversationHistory;
}
export interface UpdateAgentCollaboratorResponse {
  agentCollaborator: AgentCollaborator;
}
export interface UpdateAgentKnowledgeBaseRequest {
  agentId: string;
  agentVersion: string;
  knowledgeBaseId: string;
  description?: string;
  knowledgeBaseState?: KnowledgeBaseState;
}
export interface UpdateAgentKnowledgeBaseResponse {
  agentKnowledgeBase: AgentKnowledgeBase;
}
export interface UpdateAgentRequest {
  agentId: string;
  agentName: string;
  instruction?: string;
  foundationModel: string;
  description?: string;
  orchestrationType?: OrchestrationType;
  customOrchestration?: CustomOrchestration;
  idleSessionTTLInSeconds?: number;
  agentResourceRoleArn: string;
  customerEncryptionKeyArn?: string;
  promptOverrideConfiguration?: PromptOverrideConfiguration;
  guardrailConfiguration?: GuardrailConfiguration;
  memoryConfiguration?: MemoryConfiguration;
  agentCollaboration?: AgentCollaboration;
}
export interface UpdateAgentResponse {
  agent: Agent;
}
export interface UpdateDataSourceRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
  name: string;
  description?: string;
  dataSourceConfiguration: DataSourceConfiguration;
  dataDeletionPolicy?: DataDeletionPolicy;
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  vectorIngestionConfiguration?: VectorIngestionConfiguration;
}
export interface UpdateDataSourceResponse {
  dataSource: DataSource;
}
export interface UpdateFlowAliasRequest {
  name: string;
  description?: string;
  routingConfiguration: Array<FlowAliasRoutingConfigurationListItem>;
  concurrencyConfiguration?: FlowAliasConcurrencyConfiguration;
  flowIdentifier: string;
  aliasIdentifier: string;
}
export interface UpdateFlowAliasResponse {
  name: string;
  description?: string;
  routingConfiguration: Array<FlowAliasRoutingConfigurationListItem>;
  concurrencyConfiguration?: FlowAliasConcurrencyConfiguration;
  flowId: string;
  id: string;
  arn: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}
export interface UpdateFlowRequest {
  name: string;
  description?: string;
  executionRoleArn: string;
  customerEncryptionKeyArn?: string;
  definition?: FlowDefinition;
  flowIdentifier: string;
}
export interface UpdateFlowResponse {
  name: string;
  description?: string;
  executionRoleArn: string;
  customerEncryptionKeyArn?: string;
  id: string;
  arn: string;
  status: FlowStatus;
  createdAt: Date | string;
  updatedAt: Date | string;
  version: string;
  definition?: FlowDefinition;
}
export interface UpdateKnowledgeBaseRequest {
  knowledgeBaseId: string;
  name: string;
  description?: string;
  roleArn: string;
  knowledgeBaseConfiguration: KnowledgeBaseConfiguration;
  storageConfiguration?: StorageConfiguration;
}
export interface UpdateKnowledgeBaseResponse {
  knowledgeBase: KnowledgeBase;
}
export interface UpdatePromptRequest {
  name: string;
  description?: string;
  customerEncryptionKeyArn?: string;
  defaultVariant?: string;
  variants?: Array<PromptVariant>;
  promptIdentifier: string;
}
export interface UpdatePromptResponse {
  name: string;
  description?: string;
  customerEncryptionKeyArn?: string;
  defaultVariant?: string;
  variants?: Array<PromptVariant>;
  id: string;
  arn: string;
  version: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}
export type Url = string;

export interface UrlConfiguration {
  seedUrls?: Array<SeedUrl>;
}
export type UserAgent = string;

export type UserAgentHeader = string;

export interface ValidateFlowDefinitionRequest {
  definition: FlowDefinition;
}
export interface ValidateFlowDefinitionResponse {
  validations: Array<FlowValidation>;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export interface VectorIngestionConfiguration {
  chunkingConfiguration?: ChunkingConfiguration;
  customTransformationConfiguration?: CustomTransformationConfiguration;
  parsingConfiguration?: ParsingConfiguration;
  contextEnrichmentConfiguration?: ContextEnrichmentConfiguration;
}
export interface VectorKnowledgeBaseConfiguration {
  embeddingModelArn: string;
  embeddingModelConfiguration?: EmbeddingModelConfiguration;
  supplementalDataStorageConfiguration?: SupplementalDataStorageConfiguration;
}
export interface VectorSearchBedrockRerankingConfiguration {
  modelConfiguration: VectorSearchBedrockRerankingModelConfiguration;
  numberOfRerankedResults?: number;
  metadataConfiguration?: MetadataConfigurationForReranking;
}
export interface VectorSearchBedrockRerankingModelConfiguration {
  modelArn: string;
  additionalModelRequestFields?: Record<string, unknown>;
}
export interface VectorSearchRerankingConfiguration {
  type: VectorSearchRerankingConfigurationType;
  bedrockRerankingConfiguration?: VectorSearchBedrockRerankingConfiguration;
}
export type VectorSearchRerankingConfigurationType = "BEDROCK_RERANKING_MODEL";
export type Version = string;

export interface WebCrawlerConfiguration {
  crawlerLimits?: WebCrawlerLimits;
  inclusionFilters?: Array<string>;
  exclusionFilters?: Array<string>;
  scope?: WebScopeType;
  userAgent?: string;
  userAgentHeader?: string;
}
export interface WebCrawlerLimits {
  rateLimit?: number;
  maxPages?: number;
}
export interface WebDataSourceConfiguration {
  sourceConfiguration: WebSourceConfiguration;
  crawlerConfiguration?: WebCrawlerConfiguration;
}
export type WebScopeType = "HOST_ONLY" | "SUBDOMAINS";
export interface WebSourceConfiguration {
  urlConfiguration: UrlConfiguration;
}
export type WorkgroupArn = string;

export declare namespace ValidateFlowDefinition {
  export type Input = ValidateFlowDefinitionRequest;
  export type Output = ValidateFlowDefinitionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
