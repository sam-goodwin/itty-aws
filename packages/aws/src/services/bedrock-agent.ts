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
import { SensitiveString, SensitiveBlob } from "../sensitive.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Bedrock Agent",
  serviceShapeName: "AmazonBedrockAgentBuildTimeLambda",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "bedrock" });
const ver = /*@__PURE__*/ T.ServiceVersion("2023-06-05");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
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
              `https://bedrock-agent-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://bedrock-agent-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://bedrock-agent.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://bedrock-agent.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
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
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      fieldList: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(402, __c50, 2)).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type Id = string;
export type DraftVersion = string;
export type AgentAliasArn = string;
export interface AgentDescriptor {
  aliasArn?: string;
}
export type Name = string;
export type CollaborationInstruction = string | redacted.Redacted<string>;
export type RelayConversationHistory = "TO_COLLABORATOR" | "DISABLED" | (string & {});
export type ClientToken = string;
export interface AssociateAgentCollaboratorRequest {
  agentId: string;
  agentVersion: string;
  agentDescriptor: AgentDescriptor;
  collaboratorName: string;
  collaborationInstruction: string | redacted.Redacted<string>;
  relayConversationHistory?: RelayConversationHistory;
  clientToken?: string;
}
export type Version = string;
export interface AgentCollaborator {
  agentId: string;
  agentVersion: string;
  agentDescriptor: AgentDescriptor;
  collaboratorId: string;
  collaborationInstruction: string | redacted.Redacted<string>;
  collaboratorName: string;
  createdAt: Date;
  lastUpdatedAt: Date;
  relayConversationHistory?: RelayConversationHistory;
  clientToken?: string;
}
export interface AssociateAgentCollaboratorResponse {
  agentCollaborator: AgentCollaborator;
}
export type Description = string;
export type KnowledgeBaseState = "ENABLED" | "DISABLED" | (string & {});
export interface AssociateAgentKnowledgeBaseRequest {
  agentId: string;
  agentVersion: string;
  knowledgeBaseId: string;
  description: string;
  knowledgeBaseState?: KnowledgeBaseState;
}
export interface AgentKnowledgeBase {
  agentId: string;
  agentVersion: string;
  knowledgeBaseId: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  knowledgeBaseState: KnowledgeBaseState;
}
export interface AssociateAgentKnowledgeBaseResponse {
  agentKnowledgeBase: AgentKnowledgeBase;
}
export type Instruction = string | redacted.Redacted<string>;
export type ModelIdentifier = string;
export type OrchestrationType = "DEFAULT" | "CUSTOM_ORCHESTRATION" | (string & {});
export type LambdaArn = string;
export type OrchestrationExecutor = { lambda: string };
export interface CustomOrchestration {
  executor?: OrchestrationExecutor;
}
export type SessionTTL = number;
export type AgentRoleArn = string;
export type KmsKeyArn = string;
export type TagKey = string;
export type TagValue = string;
export type TagsMap = { [key: string]: string | undefined };
export type PromptType =
  | "PRE_PROCESSING"
  | "ORCHESTRATION"
  | "POST_PROCESSING"
  | "KNOWLEDGE_BASE_RESPONSE_GENERATION"
  | "MEMORY_SUMMARIZATION"
  | (string & {});
export type CreationMode = "DEFAULT" | "OVERRIDDEN" | (string & {});
export type PromptState = "ENABLED" | "DISABLED" | (string & {});
export type BasePromptTemplate = string | redacted.Redacted<string>;
export type Temperature = number;
export type TopP = number;
export type TopK = number;
export type MaximumLength = number;
export type StopSequences = string[];
export interface InferenceConfiguration {
  temperature?: number;
  topP?: number;
  topK?: number;
  maximumLength?: number;
  stopSequences?: string[];
}
export interface PromptConfiguration {
  promptType?: PromptType;
  promptCreationMode?: CreationMode;
  promptState?: PromptState;
  basePromptTemplate?: string | redacted.Redacted<string>;
  inferenceConfiguration?: InferenceConfiguration;
  parserMode?: CreationMode;
  foundationModel?: string;
  additionalModelRequestFields?: any;
}
export type PromptConfigurations = PromptConfiguration[];
export interface PromptOverrideConfiguration {
  promptConfigurations: PromptConfiguration[];
  overrideLambda?: string;
}
export type GuardrailIdentifier = string;
export type GuardrailVersion = string;
export interface GuardrailConfiguration {
  guardrailIdentifier?: string;
  guardrailVersion?: string;
}
export type MemoryType = "SESSION_SUMMARY" | (string & {});
export type EnabledMemoryTypes = MemoryType[];
export type StorageDays = number;
export type MaxRecentSessions = number;
export interface SessionSummaryConfiguration {
  maxRecentSessions?: number;
}
export interface MemoryConfiguration {
  enabledMemoryTypes: MemoryType[];
  storageDays?: number;
  sessionSummaryConfiguration?: SessionSummaryConfiguration;
}
export type AgentCollaboration = "SUPERVISOR" | "SUPERVISOR_ROUTER" | "DISABLED" | (string & {});
export interface CreateAgentRequest {
  agentName: string;
  clientToken?: string;
  instruction?: string | redacted.Redacted<string>;
  foundationModel?: string;
  description?: string;
  orchestrationType?: OrchestrationType;
  customOrchestration?: CustomOrchestration;
  idleSessionTTLInSeconds?: number;
  agentResourceRoleArn?: string;
  customerEncryptionKeyArn?: string;
  tags?: { [key: string]: string | undefined };
  promptOverrideConfiguration?: PromptOverrideConfiguration;
  guardrailConfiguration?: GuardrailConfiguration;
  memoryConfiguration?: MemoryConfiguration;
  agentCollaboration?: AgentCollaboration;
}
export type AgentArn = string;
export type AgentStatus =
  | "CREATING"
  | "PREPARING"
  | "PREPARED"
  | "NOT_PREPARED"
  | "DELETING"
  | "FAILED"
  | "VERSIONING"
  | "UPDATING"
  | (string & {});
export type FailureReason = string;
export type FailureReasons = string[];
export type RecommendedAction = string;
export type RecommendedActions = string[];
export interface Agent {
  agentId: string;
  agentName: string;
  agentArn: string;
  agentVersion?: string;
  clientToken?: string;
  instruction?: string | redacted.Redacted<string>;
  agentStatus: AgentStatus;
  foundationModel?: string;
  description?: string;
  orchestrationType?: OrchestrationType;
  customOrchestration?: CustomOrchestration;
  idleSessionTTLInSeconds: number;
  agentResourceRoleArn: string;
  customerEncryptionKeyArn?: string;
  createdAt: Date;
  updatedAt: Date;
  preparedAt?: Date;
  failureReasons?: string[];
  recommendedActions?: string[];
  promptOverrideConfiguration?: PromptOverrideConfiguration;
  guardrailConfiguration?: GuardrailConfiguration;
  memoryConfiguration?: MemoryConfiguration;
  agentCollaboration?: AgentCollaboration;
}
export interface CreateAgentResponse {
  agent: Agent;
}
export type ActionGroupSignature =
  | "AMAZON.UserInput"
  | "AMAZON.CodeInterpreter"
  | "ANTHROPIC.Computer"
  | "ANTHROPIC.Bash"
  | "ANTHROPIC.TextEditor"
  | (string & {});
export type ActionGroupSignatureParams = { [key: string]: string | undefined };
export type CustomControlMethod = "RETURN_CONTROL" | (string & {});
export type ActionGroupExecutor =
  | { lambda: string; customControl?: never }
  | { lambda?: never; customControl: CustomControlMethod };
export type S3BucketName = string;
export type S3ObjectKey = string;
export interface S3Identifier {
  s3BucketName?: string;
  s3ObjectKey?: string;
}
export type Payload = string | redacted.Redacted<string>;
export type APISchema =
  | { s3: S3Identifier; payload?: never }
  | { s3?: never; payload: string | redacted.Redacted<string> };
export type ActionGroupState = "ENABLED" | "DISABLED" | (string & {});
export type FunctionDescription = string;
export type ParameterDescription = string;
export type Type = "string" | "number" | "integer" | "boolean" | "array" | (string & {});
export interface ParameterDetail {
  description?: string;
  type: Type;
  required?: boolean;
}
export type ParameterMap = { [key: string]: ParameterDetail | undefined };
export type RequireConfirmation = "ENABLED" | "DISABLED" | (string & {});
export interface Function {
  name: string;
  description?: string;
  parameters?: { [key: string]: ParameterDetail | undefined };
  requireConfirmation?: RequireConfirmation;
}
export type Functions = Function[];
export type FunctionSchema = { functions: Function[] };
export interface CreateAgentActionGroupRequest {
  agentId: string;
  agentVersion: string;
  actionGroupName: string;
  clientToken?: string;
  description?: string;
  parentActionGroupSignature?: ActionGroupSignature;
  parentActionGroupSignatureParams?: { [key: string]: string | undefined };
  actionGroupExecutor?: ActionGroupExecutor;
  apiSchema?: APISchema;
  actionGroupState?: ActionGroupState;
  functionSchema?: FunctionSchema;
}
export interface AgentActionGroup {
  agentId: string;
  agentVersion: string;
  actionGroupId: string;
  actionGroupName: string;
  clientToken?: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  parentActionSignature?: ActionGroupSignature;
  parentActionGroupSignatureParams?: { [key: string]: string | undefined };
  actionGroupExecutor?: ActionGroupExecutor;
  apiSchema?: APISchema;
  functionSchema?: FunctionSchema;
  actionGroupState: ActionGroupState;
}
export interface CreateAgentActionGroupResponse {
  agentActionGroup: AgentActionGroup;
}
export type ProvisionedModelIdentifier = string;
export interface AgentAliasRoutingConfigurationListItem {
  agentVersion?: string;
  provisionedThroughput?: string;
}
export type AgentAliasRoutingConfiguration = AgentAliasRoutingConfigurationListItem[];
export interface CreateAgentAliasRequest {
  agentId: string;
  agentAliasName: string;
  clientToken?: string;
  description?: string;
  routingConfiguration?: AgentAliasRoutingConfigurationListItem[];
  tags?: { [key: string]: string | undefined };
}
export type AgentAliasId = string;
export interface AgentAliasHistoryEvent {
  routingConfiguration?: AgentAliasRoutingConfigurationListItem[];
  endDate?: Date;
  startDate?: Date;
}
export type AgentAliasHistoryEvents = AgentAliasHistoryEvent[];
export type AgentAliasStatus =
  | "CREATING"
  | "PREPARED"
  | "FAILED"
  | "UPDATING"
  | "DELETING"
  | "DISSOCIATED"
  | (string & {});
export type AliasInvocationState = "ACCEPT_INVOCATIONS" | "REJECT_INVOCATIONS" | (string & {});
export interface AgentAlias {
  agentId: string;
  agentAliasId: string;
  agentAliasName: string;
  agentAliasArn: string;
  clientToken?: string;
  description?: string;
  routingConfiguration: AgentAliasRoutingConfigurationListItem[];
  createdAt: Date;
  updatedAt: Date;
  agentAliasHistoryEvents?: AgentAliasHistoryEvent[];
  agentAliasStatus: AgentAliasStatus;
  failureReasons?: string[];
  aliasInvocationState?: AliasInvocationState;
}
export interface CreateAgentAliasResponse {
  agentAlias: AgentAlias;
}
export type DataSourceType =
  | "S3"
  | "WEB"
  | "CONFLUENCE"
  | "SALESFORCE"
  | "SHAREPOINT"
  | "CUSTOM"
  | "REDSHIFT_METADATA"
  | "MANAGED_KNOWLEDGE_BASE_CONNECTOR"
  | (string & {});
export type EnabledOrDisabledState = "ENABLED" | "DISABLED" | (string & {});
export interface DeletionProtectionConfiguration {
  deletionProtectionStatus: EnabledOrDisabledState;
  deletionProtectionThreshold?: number;
}
export interface ImageExtractionConfiguration {
  imageExtractionStatus: EnabledOrDisabledState;
}
export interface AudioExtractionConfiguration {
  audioExtractionStatus: EnabledOrDisabledState;
}
export interface VideoExtractionConfiguration {
  videoExtractionStatus: EnabledOrDisabledState;
}
export interface MediaExtractionConfiguration {
  imageExtractionConfiguration?: ImageExtractionConfiguration;
  audioExtractionConfiguration?: AudioExtractionConfiguration;
  videoExtractionConfiguration?: VideoExtractionConfiguration;
}
export interface DailySchedule {}
export type DayOfWeek =
  | "SUNDAY"
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | (string & {});
export interface WeeklySchedule {
  dayOfWeek: DayOfWeek;
}
export type DayOfMonthNumber = number;
export interface LastDayOfMonth {}
export type DayOfMonth =
  | { dayNumber: number; lastDayOfMonth?: never }
  | { dayNumber?: never; lastDayOfMonth: LastDayOfMonth };
export interface MonthlySchedule {
  dayOfMonth: DayOfMonth;
}
export type SyncSchedule =
  | { daily: DailySchedule; weekly?: never; monthly?: never }
  | { daily?: never; weekly: WeeklySchedule; monthly?: never }
  | { daily?: never; weekly?: never; monthly: MonthlySchedule };
export interface ManagedKnowledgeBaseConnectorConfiguration {
  deletionProtectionConfiguration?: DeletionProtectionConfiguration;
  mediaExtractionConfiguration?: MediaExtractionConfiguration;
  connectorParameters?: any;
  syncSchedule?: SyncSchedule;
}
export type S3BucketArn = string;
export type S3Prefix = string | redacted.Redacted<string>;
export type S3Prefixes = (string | redacted.Redacted<string>)[];
export type BucketOwnerAccountId = string;
export interface S3DataSourceConfiguration {
  bucketArn: string;
  inclusionPrefixes?: (string | redacted.Redacted<string>)[];
  bucketOwnerAccountId?: string;
}
export type Url = string;
export interface SeedUrl {
  url?: string;
}
export type SeedUrls = SeedUrl[];
export interface UrlConfiguration {
  seedUrls?: SeedUrl[];
}
export interface WebSourceConfiguration {
  urlConfiguration: UrlConfiguration;
}
export interface WebCrawlerLimits {
  rateLimit?: number;
  maxPages?: number;
}
export type FilterPattern = string | redacted.Redacted<string>;
export type FilterList = (string | redacted.Redacted<string>)[];
export type WebScopeType = "HOST_ONLY" | "SUBDOMAINS" | (string & {});
export type UserAgent = string | redacted.Redacted<string>;
export type UserAgentHeader = string | redacted.Redacted<string>;
export interface WebCrawlerConfiguration {
  crawlerLimits?: WebCrawlerLimits;
  inclusionFilters?: (string | redacted.Redacted<string>)[];
  exclusionFilters?: (string | redacted.Redacted<string>)[];
  scope?: WebScopeType;
  userAgent?: string | redacted.Redacted<string>;
  userAgentHeader?: string | redacted.Redacted<string>;
}
export interface WebDataSourceConfiguration {
  sourceConfiguration: WebSourceConfiguration;
  crawlerConfiguration?: WebCrawlerConfiguration;
}
export type HttpsUrl = string;
export type ConfluenceHostType = "SAAS" | (string & {});
export type ConfluenceAuthType = "BASIC" | "OAUTH2_CLIENT_CREDENTIALS" | (string & {});
export type SecretArn = string;
export interface ConfluenceSourceConfiguration {
  hostUrl: string;
  hostType: ConfluenceHostType;
  authType: ConfluenceAuthType;
  credentialsSecretArn: string;
}
export type CrawlFilterConfigurationType = "PATTERN" | (string & {});
export type FilteredObjectType = string | redacted.Redacted<string>;
export interface PatternObjectFilter {
  objectType: string | redacted.Redacted<string>;
  inclusionFilters?: (string | redacted.Redacted<string>)[];
  exclusionFilters?: (string | redacted.Redacted<string>)[];
}
export type PatternObjectFilterList = PatternObjectFilter[];
export interface PatternObjectFilterConfiguration {
  filters: PatternObjectFilter[];
}
export interface CrawlFilterConfiguration {
  type: CrawlFilterConfigurationType;
  patternObjectFilter?: PatternObjectFilterConfiguration;
}
export interface ConfluenceCrawlerConfiguration {
  filterConfiguration?: CrawlFilterConfiguration;
}
export interface ConfluenceDataSourceConfiguration {
  sourceConfiguration: ConfluenceSourceConfiguration;
  crawlerConfiguration?: ConfluenceCrawlerConfiguration;
}
export type SalesforceAuthType = "OAUTH2_CLIENT_CREDENTIALS" | (string & {});
export interface SalesforceSourceConfiguration {
  hostUrl: string;
  authType: SalesforceAuthType;
  credentialsSecretArn: string;
}
export interface SalesforceCrawlerConfiguration {
  filterConfiguration?: CrawlFilterConfiguration;
}
export interface SalesforceDataSourceConfiguration {
  sourceConfiguration: SalesforceSourceConfiguration;
  crawlerConfiguration?: SalesforceCrawlerConfiguration;
}
export type Microsoft365TenantId = string;
export type SharePointDomain = string;
export type SharePointSiteUrls = string[];
export type SharePointHostType = "ONLINE" | (string & {});
export type SharePointAuthType =
  | "OAUTH2_CLIENT_CREDENTIALS"
  | "OAUTH2_SHAREPOINT_APP_ONLY_CLIENT_CREDENTIALS"
  | (string & {});
export interface SharePointSourceConfiguration {
  tenantId?: string;
  domain: string;
  siteUrls: string[];
  hostType: SharePointHostType;
  authType: SharePointAuthType;
  credentialsSecretArn: string;
}
export interface SharePointCrawlerConfiguration {
  filterConfiguration?: CrawlFilterConfiguration;
}
export interface SharePointDataSourceConfiguration {
  sourceConfiguration: SharePointSourceConfiguration;
  crawlerConfiguration?: SharePointCrawlerConfiguration;
}
export interface DataSourceConfiguration {
  type: DataSourceType;
  managedKnowledgeBaseConnectorConfiguration?: ManagedKnowledgeBaseConnectorConfiguration;
  s3Configuration?: S3DataSourceConfiguration;
  webConfiguration?: WebDataSourceConfiguration;
  confluenceConfiguration?: ConfluenceDataSourceConfiguration;
  salesforceConfiguration?: SalesforceDataSourceConfiguration;
  sharePointConfiguration?: SharePointDataSourceConfiguration;
}
export type DataDeletionPolicy = "RETAIN" | "DELETE" | (string & {});
export interface ServerSideEncryptionConfiguration {
  kmsKeyArn?: string;
}
export type ChunkingStrategy = "FIXED_SIZE" | "NONE" | "HIERARCHICAL" | "SEMANTIC" | (string & {});
export interface FixedSizeChunkingConfiguration {
  maxTokens: number;
  overlapPercentage: number;
}
export interface HierarchicalChunkingLevelConfiguration {
  maxTokens: number;
}
export type HierarchicalChunkingLevelConfigurations = HierarchicalChunkingLevelConfiguration[];
export interface HierarchicalChunkingConfiguration {
  levelConfigurations: HierarchicalChunkingLevelConfiguration[];
  overlapTokens: number;
}
export interface SemanticChunkingConfiguration {
  maxTokens: number;
  bufferSize: number;
  breakpointPercentileThreshold: number;
}
export interface ChunkingConfiguration {
  chunkingStrategy: ChunkingStrategy;
  fixedSizeChunkingConfiguration?: FixedSizeChunkingConfiguration;
  hierarchicalChunkingConfiguration?: HierarchicalChunkingConfiguration;
  semanticChunkingConfiguration?: SemanticChunkingConfiguration;
}
export type S3BucketUri = string;
export interface S3Location {
  uri: string;
}
export interface IntermediateStorage {
  s3Location: S3Location;
}
export interface TransformationLambdaConfiguration {
  lambdaArn: string;
}
export interface TransformationFunction {
  transformationLambdaConfiguration: TransformationLambdaConfiguration;
}
export type StepType = "POST_CHUNKING" | (string & {});
export interface Transformation {
  transformationFunction: TransformationFunction;
  stepToApply: StepType;
}
export type Transformations = Transformation[];
export interface CustomTransformationConfiguration {
  intermediateStorage: IntermediateStorage;
  transformations: Transformation[];
}
export type ParsingStrategy =
  | "BEDROCK_FOUNDATION_MODEL"
  | "BEDROCK_DATA_AUTOMATION"
  | "SMART_PARSING"
  | "MULTI_MODAL_EMBEDDINGS"
  | (string & {});
export type BedrockModelArn = string;
export type ParsingPromptText = string;
export interface ParsingPrompt {
  parsingPromptText: string;
}
export type ParsingModality = "MULTIMODAL" | (string & {});
export interface BedrockFoundationModelConfiguration {
  modelArn: string;
  parsingPrompt?: ParsingPrompt;
  parsingModality?: ParsingModality;
}
export interface BedrockDataAutomationConfiguration {
  parsingModality?: ParsingModality;
}
export interface ParsingConfiguration {
  parsingStrategy: ParsingStrategy;
  bedrockFoundationModelConfiguration?: BedrockFoundationModelConfiguration;
  bedrockDataAutomationConfiguration?: BedrockDataAutomationConfiguration;
}
export type ContextEnrichmentType = "BEDROCK_FOUNDATION_MODEL" | (string & {});
export type EnrichmentStrategyMethod = "CHUNK_ENTITY_EXTRACTION" | (string & {});
export interface EnrichmentStrategyConfiguration {
  method: EnrichmentStrategyMethod;
}
export interface BedrockFoundationModelContextEnrichmentConfiguration {
  enrichmentStrategyConfiguration: EnrichmentStrategyConfiguration;
  modelArn: string;
}
export interface ContextEnrichmentConfiguration {
  type: ContextEnrichmentType;
  bedrockFoundationModelConfiguration?: BedrockFoundationModelContextEnrichmentConfiguration;
}
export interface VectorIngestionConfiguration {
  chunkingConfiguration?: ChunkingConfiguration;
  customTransformationConfiguration?: CustomTransformationConfiguration;
  parsingConfiguration?: ParsingConfiguration;
  contextEnrichmentConfiguration?: ContextEnrichmentConfiguration;
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
export type DataSourceStatus =
  | "AVAILABLE"
  | "DELETING"
  | "DELETE_UNSUCCESSFUL"
  | "CREATING"
  | "UPDATING"
  | "FAILED"
  | (string & {});
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
  createdAt: Date;
  updatedAt: Date;
  failureReasons?: string[];
}
export interface CreateDataSourceResponse {
  dataSource: DataSource;
}
export type FlowName = string;
export type FlowDescription = string;
export type FlowExecutionRoleArn = string;
export type FlowNodeName = string;
export type FlowNodeType =
  | "Input"
  | "Output"
  | "KnowledgeBase"
  | "Condition"
  | "Lex"
  | "Prompt"
  | "LambdaFunction"
  | "Storage"
  | "Agent"
  | "Retrieval"
  | "Iterator"
  | "Collector"
  | "InlineCode"
  | "Loop"
  | "LoopInput"
  | "LoopController"
  | (string & {});
export interface InputFlowNodeConfiguration {}
export interface OutputFlowNodeConfiguration {}
export type FlowKnowledgeBaseId = string;
export type KnowledgeBaseModelIdentifier = string;
export type KnowledgeBaseTextPrompt = string | redacted.Redacted<string>;
export interface KnowledgeBasePromptTemplate {
  textPromptTemplate?: string | redacted.Redacted<string>;
}
export interface PromptModelInferenceConfiguration {
  temperature?: number;
  topP?: number;
  maxTokens?: number;
  stopSequences?: string[];
}
export type PromptInferenceConfiguration = { text: PromptModelInferenceConfiguration };
export type VectorSearchRerankingConfigurationType = "BEDROCK_RERANKING_MODEL" | (string & {});
export type BedrockRerankingModelArn = string;
export type AdditionalModelRequestFieldsKey = string;
export type AdditionalModelRequestFieldsValue = unknown;
export type AdditionalModelRequestFields = { [key: string]: any | undefined };
export interface VectorSearchBedrockRerankingModelConfiguration {
  modelArn: string;
  additionalModelRequestFields?: { [key: string]: any | undefined };
}
export type RerankingMetadataSelectionMode = "SELECTIVE" | "ALL" | (string & {});
export interface FieldForReranking {
  fieldName: string;
}
export type FieldsForReranking = FieldForReranking[];
export type RerankingMetadataSelectiveModeConfiguration =
  | { fieldsToInclude: FieldForReranking[]; fieldsToExclude?: never }
  | { fieldsToInclude?: never; fieldsToExclude: FieldForReranking[] };
export interface MetadataConfigurationForReranking {
  selectionMode: RerankingMetadataSelectionMode;
  selectiveModeConfiguration?: RerankingMetadataSelectiveModeConfiguration;
}
export interface VectorSearchBedrockRerankingConfiguration {
  modelConfiguration: VectorSearchBedrockRerankingModelConfiguration;
  numberOfRerankedResults?: number;
  metadataConfiguration?: MetadataConfigurationForReranking;
}
export interface VectorSearchRerankingConfiguration {
  type: VectorSearchRerankingConfigurationType;
  bedrockRerankingConfiguration?: VectorSearchBedrockRerankingConfiguration;
}
export type PerformanceConfigLatency = "standard" | "optimized" | (string & {});
export interface PerformanceConfiguration {
  latency?: PerformanceConfigLatency;
}
export interface KnowledgeBaseOrchestrationConfiguration {
  promptTemplate?: KnowledgeBasePromptTemplate;
  inferenceConfig?: PromptInferenceConfiguration;
  additionalModelRequestFields?: { [key: string]: any | undefined };
  performanceConfig?: PerformanceConfiguration;
}
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
export type FlowConditionName = string;
export type FlowConditionExpression = string | redacted.Redacted<string>;
export interface FlowCondition {
  name: string;
  expression?: string | redacted.Redacted<string>;
}
export type FlowConditions = FlowCondition[];
export interface ConditionFlowNodeConfiguration {
  conditions: FlowCondition[];
}
export type FlowLexBotAliasArn = string;
export type FlowLexBotLocaleId = string;
export interface LexFlowNodeConfiguration {
  botAliasArn: string;
  localeId: string;
}
export type FlowPromptArn = string;
export interface PromptFlowNodeResourceConfiguration {
  promptArn: string;
}
export type PromptTemplateType = "TEXT" | "CHAT" | (string & {});
export type TextPrompt = string | redacted.Redacted<string>;
export type CachePointType = "default" | (string & {});
export interface CachePointBlock {
  type: CachePointType;
}
export type PromptInputVariableName = string;
export interface PromptInputVariable {
  name?: string;
}
export type PromptInputVariablesList = PromptInputVariable[];
export interface TextPromptTemplateConfiguration {
  text: string | redacted.Redacted<string>;
  cachePoint?: CachePointBlock;
  inputVariables?: PromptInputVariable[];
}
export type ConversationRole = "user" | "assistant" | (string & {});
export type ContentBlock =
  | { text: string; cachePoint?: never }
  | { text?: never; cachePoint: CachePointBlock };
export type ContentBlocks = ContentBlock[];
export interface Message {
  role: ConversationRole;
  content: ContentBlock[];
}
export type Messages = Message[];
export type NonEmptyString = string;
export type SystemContentBlock =
  | { text: string; cachePoint?: never }
  | { text?: never; cachePoint: CachePointBlock };
export type SystemContentBlocks = SystemContentBlock[];
export type ToolName = string;
export type ToolInputSchema = { json: any };
export interface ToolSpecification {
  name: string;
  description?: string;
  inputSchema: ToolInputSchema;
  strict?: boolean;
}
export type Tool =
  | { toolSpec: ToolSpecification; cachePoint?: never }
  | { toolSpec?: never; cachePoint: CachePointBlock };
export type Tools = Tool[];
export interface AutoToolChoice {}
export interface AnyToolChoice {}
export interface SpecificToolChoice {
  name: string;
}
export type ToolChoice =
  | { auto: AutoToolChoice; any?: never; tool?: never }
  | { auto?: never; any: AnyToolChoice; tool?: never }
  | { auto?: never; any?: never; tool: SpecificToolChoice };
export interface ToolConfiguration {
  tools: Tool[];
  toolChoice?: ToolChoice;
}
export interface ChatPromptTemplateConfiguration {
  messages: Message[];
  system?: SystemContentBlock[];
  inputVariables?: PromptInputVariable[];
  toolConfiguration?: ToolConfiguration;
}
export type PromptTemplateConfiguration =
  | { text: TextPromptTemplateConfiguration; chat?: never }
  | { text?: never; chat: ChatPromptTemplateConfiguration };
export type FlowPromptModelIdentifier = string;
export interface PromptFlowNodeInlineConfiguration {
  templateType: PromptTemplateType;
  templateConfiguration: PromptTemplateConfiguration;
  modelId: string;
  inferenceConfiguration?: PromptInferenceConfiguration;
  additionalModelRequestFields?: any;
}
export type PromptFlowNodeSourceConfiguration =
  | { resource: PromptFlowNodeResourceConfiguration; inline?: never }
  | { resource?: never; inline: PromptFlowNodeInlineConfiguration };
export interface PromptFlowNodeConfiguration {
  sourceConfiguration: PromptFlowNodeSourceConfiguration;
  guardrailConfiguration?: GuardrailConfiguration;
}
export type FlowLambdaArn = string;
export interface LambdaFunctionFlowNodeConfiguration {
  lambdaArn: string;
}
export type FlowS3BucketName = string;
export interface StorageFlowNodeS3Configuration {
  bucketName: string;
}
export type StorageFlowNodeServiceConfiguration = { s3: StorageFlowNodeS3Configuration };
export interface StorageFlowNodeConfiguration {
  serviceConfiguration: StorageFlowNodeServiceConfiguration;
}
export type FlowAgentAliasArn = string;
export interface AgentFlowNodeConfiguration {
  agentAliasArn: string;
}
export interface RetrievalFlowNodeS3Configuration {
  bucketName: string;
}
export type RetrievalFlowNodeServiceConfiguration = { s3: RetrievalFlowNodeS3Configuration };
export interface RetrievalFlowNodeConfiguration {
  serviceConfiguration: RetrievalFlowNodeServiceConfiguration;
}
export interface IteratorFlowNodeConfiguration {}
export interface CollectorFlowNodeConfiguration {}
export type InlineCode = string | redacted.Redacted<string>;
export type SupportedLanguages = "Python_3" | (string & {});
export interface InlineCodeFlowNodeConfiguration {
  code: string | redacted.Redacted<string>;
  language: SupportedLanguages;
}
export interface LoopFlowNodeConfiguration {
  definition: FlowDefinition;
}
export interface LoopInputFlowNodeConfiguration {}
export interface LoopControllerFlowNodeConfiguration {
  continueCondition: FlowCondition;
  maxIterations?: number;
}
export type FlowNodeConfiguration =
  | {
      input: InputFlowNodeConfiguration;
      output?: never;
      knowledgeBase?: never;
      condition?: never;
      lex?: never;
      prompt?: never;
      lambdaFunction?: never;
      storage?: never;
      agent?: never;
      retrieval?: never;
      iterator?: never;
      collector?: never;
      inlineCode?: never;
      loop?: never;
      loopInput?: never;
      loopController?: never;
    }
  | {
      input?: never;
      output: OutputFlowNodeConfiguration;
      knowledgeBase?: never;
      condition?: never;
      lex?: never;
      prompt?: never;
      lambdaFunction?: never;
      storage?: never;
      agent?: never;
      retrieval?: never;
      iterator?: never;
      collector?: never;
      inlineCode?: never;
      loop?: never;
      loopInput?: never;
      loopController?: never;
    }
  | {
      input?: never;
      output?: never;
      knowledgeBase: KnowledgeBaseFlowNodeConfiguration;
      condition?: never;
      lex?: never;
      prompt?: never;
      lambdaFunction?: never;
      storage?: never;
      agent?: never;
      retrieval?: never;
      iterator?: never;
      collector?: never;
      inlineCode?: never;
      loop?: never;
      loopInput?: never;
      loopController?: never;
    }
  | {
      input?: never;
      output?: never;
      knowledgeBase?: never;
      condition: ConditionFlowNodeConfiguration;
      lex?: never;
      prompt?: never;
      lambdaFunction?: never;
      storage?: never;
      agent?: never;
      retrieval?: never;
      iterator?: never;
      collector?: never;
      inlineCode?: never;
      loop?: never;
      loopInput?: never;
      loopController?: never;
    }
  | {
      input?: never;
      output?: never;
      knowledgeBase?: never;
      condition?: never;
      lex: LexFlowNodeConfiguration;
      prompt?: never;
      lambdaFunction?: never;
      storage?: never;
      agent?: never;
      retrieval?: never;
      iterator?: never;
      collector?: never;
      inlineCode?: never;
      loop?: never;
      loopInput?: never;
      loopController?: never;
    }
  | {
      input?: never;
      output?: never;
      knowledgeBase?: never;
      condition?: never;
      lex?: never;
      prompt: PromptFlowNodeConfiguration;
      lambdaFunction?: never;
      storage?: never;
      agent?: never;
      retrieval?: never;
      iterator?: never;
      collector?: never;
      inlineCode?: never;
      loop?: never;
      loopInput?: never;
      loopController?: never;
    }
  | {
      input?: never;
      output?: never;
      knowledgeBase?: never;
      condition?: never;
      lex?: never;
      prompt?: never;
      lambdaFunction: LambdaFunctionFlowNodeConfiguration;
      storage?: never;
      agent?: never;
      retrieval?: never;
      iterator?: never;
      collector?: never;
      inlineCode?: never;
      loop?: never;
      loopInput?: never;
      loopController?: never;
    }
  | {
      input?: never;
      output?: never;
      knowledgeBase?: never;
      condition?: never;
      lex?: never;
      prompt?: never;
      lambdaFunction?: never;
      storage: StorageFlowNodeConfiguration;
      agent?: never;
      retrieval?: never;
      iterator?: never;
      collector?: never;
      inlineCode?: never;
      loop?: never;
      loopInput?: never;
      loopController?: never;
    }
  | {
      input?: never;
      output?: never;
      knowledgeBase?: never;
      condition?: never;
      lex?: never;
      prompt?: never;
      lambdaFunction?: never;
      storage?: never;
      agent: AgentFlowNodeConfiguration;
      retrieval?: never;
      iterator?: never;
      collector?: never;
      inlineCode?: never;
      loop?: never;
      loopInput?: never;
      loopController?: never;
    }
  | {
      input?: never;
      output?: never;
      knowledgeBase?: never;
      condition?: never;
      lex?: never;
      prompt?: never;
      lambdaFunction?: never;
      storage?: never;
      agent?: never;
      retrieval: RetrievalFlowNodeConfiguration;
      iterator?: never;
      collector?: never;
      inlineCode?: never;
      loop?: never;
      loopInput?: never;
      loopController?: never;
    }
  | {
      input?: never;
      output?: never;
      knowledgeBase?: never;
      condition?: never;
      lex?: never;
      prompt?: never;
      lambdaFunction?: never;
      storage?: never;
      agent?: never;
      retrieval?: never;
      iterator: IteratorFlowNodeConfiguration;
      collector?: never;
      inlineCode?: never;
      loop?: never;
      loopInput?: never;
      loopController?: never;
    }
  | {
      input?: never;
      output?: never;
      knowledgeBase?: never;
      condition?: never;
      lex?: never;
      prompt?: never;
      lambdaFunction?: never;
      storage?: never;
      agent?: never;
      retrieval?: never;
      iterator?: never;
      collector: CollectorFlowNodeConfiguration;
      inlineCode?: never;
      loop?: never;
      loopInput?: never;
      loopController?: never;
    }
  | {
      input?: never;
      output?: never;
      knowledgeBase?: never;
      condition?: never;
      lex?: never;
      prompt?: never;
      lambdaFunction?: never;
      storage?: never;
      agent?: never;
      retrieval?: never;
      iterator?: never;
      collector?: never;
      inlineCode: InlineCodeFlowNodeConfiguration;
      loop?: never;
      loopInput?: never;
      loopController?: never;
    }
  | {
      input?: never;
      output?: never;
      knowledgeBase?: never;
      condition?: never;
      lex?: never;
      prompt?: never;
      lambdaFunction?: never;
      storage?: never;
      agent?: never;
      retrieval?: never;
      iterator?: never;
      collector?: never;
      inlineCode?: never;
      loop: LoopFlowNodeConfiguration;
      loopInput?: never;
      loopController?: never;
    }
  | {
      input?: never;
      output?: never;
      knowledgeBase?: never;
      condition?: never;
      lex?: never;
      prompt?: never;
      lambdaFunction?: never;
      storage?: never;
      agent?: never;
      retrieval?: never;
      iterator?: never;
      collector?: never;
      inlineCode?: never;
      loop?: never;
      loopInput: LoopInputFlowNodeConfiguration;
      loopController?: never;
    }
  | {
      input?: never;
      output?: never;
      knowledgeBase?: never;
      condition?: never;
      lex?: never;
      prompt?: never;
      lambdaFunction?: never;
      storage?: never;
      agent?: never;
      retrieval?: never;
      iterator?: never;
      collector?: never;
      inlineCode?: never;
      loop?: never;
      loopInput?: never;
      loopController: LoopControllerFlowNodeConfiguration;
    };
export type FlowNodeInputName = string;
export type FlowNodeIODataType =
  | "String"
  | "Number"
  | "Boolean"
  | "Object"
  | "Array"
  | (string & {});
export type FlowNodeInputExpression = string | redacted.Redacted<string>;
export type FlowNodeInputCategory =
  | "LoopCondition"
  | "ReturnValueToLoopStart"
  | "ExitLoop"
  | (string & {});
export interface FlowNodeInput {
  name: string;
  type: FlowNodeIODataType;
  expression: string | redacted.Redacted<string>;
  category?: FlowNodeInputCategory;
}
export type FlowNodeInputs = FlowNodeInput[];
export type FlowNodeOutputName = string;
export interface FlowNodeOutput {
  name: string;
  type: FlowNodeIODataType;
}
export type FlowNodeOutputs = FlowNodeOutput[];
export interface FlowNode {
  name: string;
  type: FlowNodeType;
  configuration?: FlowNodeConfiguration;
  inputs?: FlowNodeInput[];
  outputs?: FlowNodeOutput[];
}
export type FlowNodes = FlowNode[];
export type FlowConnectionType = "Data" | "Conditional" | (string & {});
export type FlowConnectionName = string;
export interface FlowDataConnectionConfiguration {
  sourceOutput: string;
  targetInput: string;
}
export interface FlowConditionalConnectionConfiguration {
  condition: string;
}
export type FlowConnectionConfiguration =
  | { data: FlowDataConnectionConfiguration; conditional?: never }
  | { data?: never; conditional: FlowConditionalConnectionConfiguration };
export interface FlowConnection {
  type: FlowConnectionType;
  name: string;
  source: string;
  target: string;
  configuration?: FlowConnectionConfiguration;
}
export type FlowConnections = FlowConnection[];
export interface FlowDefinition {
  nodes?: FlowNode[];
  connections?: FlowConnection[];
}
export interface CreateFlowRequest {
  name: string;
  description?: string;
  executionRoleArn: string;
  customerEncryptionKeyArn?: string;
  definition?: FlowDefinition;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
export type FlowId = string;
export type FlowArn = string;
export type FlowStatus = "Failed" | "Prepared" | "Preparing" | "NotPrepared" | (string & {});
export interface CreateFlowResponse {
  name: string;
  description?: string;
  executionRoleArn: string;
  customerEncryptionKeyArn?: string;
  id: string;
  arn: string;
  status: FlowStatus;
  createdAt: Date;
  updatedAt: Date;
  version: string;
  definition?: FlowDefinition;
}
export interface FlowAliasRoutingConfigurationListItem {
  flowVersion?: string;
}
export type FlowAliasRoutingConfiguration = FlowAliasRoutingConfigurationListItem[];
export type ConcurrencyType = "Automatic" | "Manual" | (string & {});
export interface FlowAliasConcurrencyConfiguration {
  type: ConcurrencyType;
  maxConcurrency?: number;
}
export type FlowIdentifier = string;
export interface CreateFlowAliasRequest {
  name: string;
  description?: string;
  routingConfiguration: FlowAliasRoutingConfigurationListItem[];
  concurrencyConfiguration?: FlowAliasConcurrencyConfiguration;
  flowIdentifier: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
export type FlowAliasId = string;
export type FlowAliasArn = string;
export interface CreateFlowAliasResponse {
  name: string;
  description?: string;
  routingConfiguration: FlowAliasRoutingConfigurationListItem[];
  concurrencyConfiguration?: FlowAliasConcurrencyConfiguration;
  flowId: string;
  id: string;
  arn: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface CreateFlowVersionRequest {
  flowIdentifier: string;
  description?: string;
  clientToken?: string;
}
export type NumericalVersion = string;
export interface CreateFlowVersionResponse {
  name: string;
  description?: string;
  executionRoleArn: string;
  customerEncryptionKeyArn?: string;
  id: string;
  arn: string;
  status: FlowStatus;
  createdAt: Date;
  version: string;
  definition?: FlowDefinition;
}
export type KnowledgeBaseRoleArn = string;
export type KnowledgeBaseType = "VECTOR" | "KENDRA" | "SQL" | "MANAGED" | (string & {});
export type BedrockEmbeddingModelArn = string;
export type Dimensions = number;
export type EmbeddingDataType = "FLOAT32" | "BINARY" | (string & {});
export interface AudioSegmentationConfiguration {
  fixedLengthDuration: number;
}
export interface AudioConfiguration {
  segmentationConfiguration: AudioSegmentationConfiguration;
}
export type AudioConfigurations = AudioConfiguration[];
export interface VideoSegmentationConfiguration {
  fixedLengthDuration: number;
}
export interface VideoConfiguration {
  segmentationConfiguration: VideoSegmentationConfiguration;
}
export type VideoConfigurations = VideoConfiguration[];
export interface BedrockEmbeddingModelConfiguration {
  dimensions?: number;
  embeddingDataType?: EmbeddingDataType;
  audio?: AudioConfiguration[];
  video?: VideoConfiguration[];
  modelConfiguration?: any;
}
export interface EmbeddingModelConfiguration {
  bedrockEmbeddingModelConfiguration?: BedrockEmbeddingModelConfiguration;
}
export type SupplementalDataStorageLocationType = "S3" | (string & {});
export interface SupplementalDataStorageLocation {
  type: SupplementalDataStorageLocationType;
  s3Location?: S3Location;
}
export type SupplementalDataStorageLocations = SupplementalDataStorageLocation[];
export interface SupplementalDataStorageConfiguration {
  storageLocations: SupplementalDataStorageLocation[];
}
export interface VectorKnowledgeBaseConfiguration {
  embeddingModelArn: string;
  embeddingModelConfiguration?: EmbeddingModelConfiguration;
  supplementalDataStorageConfiguration?: SupplementalDataStorageConfiguration;
}
export type EmbeddingModelType = "CUSTOM" | "MANAGED" | (string & {});
export interface ManagedKnowledgeBaseConfiguration {
  embeddingModelType?: EmbeddingModelType;
  embeddingModelArn?: string;
  embeddingModelConfiguration?: EmbeddingModelConfiguration;
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  supplementalDataStorageConfiguration?: SupplementalDataStorageConfiguration;
}
export type KendraIndexArn = string;
export interface KendraKnowledgeBaseConfiguration {
  kendraIndexArn: string;
}
export type QueryEngineType = "REDSHIFT" | (string & {});
export type RedshiftQueryEngineStorageType = "REDSHIFT" | "AWS_DATA_CATALOG" | (string & {});
export type AwsDataCatalogTableName = string;
export type AwsDataCatalogTableNames = string[];
export interface RedshiftQueryEngineAwsDataCatalogStorageConfiguration {
  tableNames: string[];
}
export type RedshiftDatabase = string;
export interface RedshiftQueryEngineRedshiftStorageConfiguration {
  databaseName: string;
}
export interface RedshiftQueryEngineStorageConfiguration {
  type: RedshiftQueryEngineStorageType;
  awsDataCatalogConfiguration?: RedshiftQueryEngineAwsDataCatalogStorageConfiguration;
  redshiftConfiguration?: RedshiftQueryEngineRedshiftStorageConfiguration;
}
export type RedshiftQueryEngineStorageConfigurations = RedshiftQueryEngineStorageConfiguration[];
export type RedshiftQueryEngineType = "SERVERLESS" | "PROVISIONED" | (string & {});
export type WorkgroupArn = string;
export type RedshiftServerlessAuthType = "IAM" | "USERNAME_PASSWORD" | (string & {});
export interface RedshiftServerlessAuthConfiguration {
  type: RedshiftServerlessAuthType;
  usernamePasswordSecretArn?: string;
}
export interface RedshiftServerlessConfiguration {
  workgroupArn: string;
  authConfiguration: RedshiftServerlessAuthConfiguration;
}
export type RedshiftClusterIdentifier = string;
export type RedshiftProvisionedAuthType = "IAM" | "USERNAME_PASSWORD" | "USERNAME" | (string & {});
export interface RedshiftProvisionedAuthConfiguration {
  type: RedshiftProvisionedAuthType;
  databaseUser?: string;
  usernamePasswordSecretArn?: string;
}
export interface RedshiftProvisionedConfiguration {
  clusterIdentifier: string;
  authConfiguration: RedshiftProvisionedAuthConfiguration;
}
export interface RedshiftQueryEngineConfiguration {
  type: RedshiftQueryEngineType;
  serverlessConfiguration?: RedshiftServerlessConfiguration;
  provisionedConfiguration?: RedshiftProvisionedConfiguration;
}
export type QueryExecutionTimeoutSeconds = number;
export type QueryGenerationTableName = string;
export type DescriptionString = string;
export type IncludeExclude = "INCLUDE" | "EXCLUDE" | (string & {});
export type QueryGenerationColumnName = string;
export interface QueryGenerationColumn {
  name?: string;
  description?: string;
  inclusion?: IncludeExclude;
}
export type QueryGenerationColumns = QueryGenerationColumn[];
export interface QueryGenerationTable {
  name: string;
  description?: string;
  inclusion?: IncludeExclude;
  columns?: QueryGenerationColumn[];
}
export type QueryGenerationTables = QueryGenerationTable[];
export type NaturalLanguageString = string;
export type SqlString = string;
export interface CuratedQuery {
  naturalLanguage: string;
  sql: string;
}
export type CuratedQueries = CuratedQuery[];
export interface QueryGenerationContext {
  tables?: QueryGenerationTable[];
  curatedQueries?: CuratedQuery[];
}
export interface QueryGenerationConfiguration {
  executionTimeoutSeconds?: number;
  generationContext?: QueryGenerationContext;
}
export interface RedshiftConfiguration {
  storageConfigurations: RedshiftQueryEngineStorageConfiguration[];
  queryEngineConfiguration: RedshiftQueryEngineConfiguration;
  queryGenerationConfiguration?: QueryGenerationConfiguration;
}
export interface SqlKnowledgeBaseConfiguration {
  type: QueryEngineType;
  redshiftConfiguration?: RedshiftConfiguration;
}
export interface KnowledgeBaseConfiguration {
  type: KnowledgeBaseType;
  vectorKnowledgeBaseConfiguration?: VectorKnowledgeBaseConfiguration;
  managedKnowledgeBaseConfiguration?: ManagedKnowledgeBaseConfiguration;
  kendraKnowledgeBaseConfiguration?: KendraKnowledgeBaseConfiguration;
  sqlKnowledgeBaseConfiguration?: SqlKnowledgeBaseConfiguration;
}
export type KnowledgeBaseStorageType =
  | "OPENSEARCH_SERVERLESS"
  | "PINECONE"
  | "REDIS_ENTERPRISE_CLOUD"
  | "RDS"
  | "MONGO_DB_ATLAS"
  | "NEPTUNE_ANALYTICS"
  | "OPENSEARCH_MANAGED_CLUSTER"
  | "S3_VECTORS"
  | (string & {});
export type OpenSearchServerlessCollectionArn = string;
export type OpenSearchServerlessIndexName = string;
export type FieldName = string;
export interface OpenSearchServerlessFieldMapping {
  vectorField: string;
  textField: string;
  metadataField: string;
}
export interface OpenSearchServerlessConfiguration {
  collectionArn: string;
  vectorIndexName: string;
  fieldMapping: OpenSearchServerlessFieldMapping;
}
export type OpenSearchManagedClusterDomainEndpoint = string;
export type OpenSearchManagedClusterDomainArn = string;
export type OpenSearchManagedClusterIndexName = string | redacted.Redacted<string>;
export interface OpenSearchManagedClusterFieldMapping {
  vectorField: string;
  textField: string;
  metadataField: string;
}
export interface OpenSearchManagedClusterConfiguration {
  domainEndpoint: string;
  domainArn: string;
  vectorIndexName: string | redacted.Redacted<string>;
  fieldMapping: OpenSearchManagedClusterFieldMapping;
}
export type PineconeConnectionString = string;
export type PineconeNamespace = string;
export interface PineconeFieldMapping {
  textField: string;
  metadataField: string;
}
export interface PineconeConfiguration {
  connectionString: string;
  credentialsSecretArn: string;
  namespace?: string;
  fieldMapping: PineconeFieldMapping;
}
export type RedisEnterpriseCloudEndpoint = string;
export type RedisEnterpriseCloudIndexName = string;
export interface RedisEnterpriseCloudFieldMapping {
  vectorField: string;
  textField: string;
  metadataField: string;
}
export interface RedisEnterpriseCloudConfiguration {
  endpoint: string;
  vectorIndexName: string;
  credentialsSecretArn: string;
  fieldMapping: RedisEnterpriseCloudFieldMapping;
}
export type RdsArn = string;
export type RdsDatabaseName = string;
export type RdsTableName = string;
export type ColumnName = string;
export interface RdsFieldMapping {
  primaryKeyField: string;
  vectorField: string;
  textField: string;
  metadataField: string;
  customMetadataField?: string;
}
export interface RdsConfiguration {
  resourceArn: string;
  credentialsSecretArn: string;
  databaseName: string;
  tableName: string;
  fieldMapping: RdsFieldMapping;
}
export type MongoDbAtlasEndpoint = string;
export type MongoDbAtlasDatabaseName = string;
export type MongoDbAtlasCollectionName = string;
export type MongoDbAtlasIndexName = string;
export interface MongoDbAtlasFieldMapping {
  vectorField: string;
  textField: string;
  metadataField: string;
}
export type MongoDbAtlasEndpointServiceName = string;
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
export type GraphArn = string | redacted.Redacted<string>;
export interface NeptuneAnalyticsFieldMapping {
  textField: string;
  metadataField: string;
}
export interface NeptuneAnalyticsConfiguration {
  graphArn: string | redacted.Redacted<string>;
  fieldMapping: NeptuneAnalyticsFieldMapping;
}
export type VectorBucketArn = string | redacted.Redacted<string>;
export type IndexArn = string | redacted.Redacted<string>;
export type IndexName = string | redacted.Redacted<string>;
export interface S3VectorsConfiguration {
  vectorBucketArn?: string | redacted.Redacted<string>;
  indexArn?: string | redacted.Redacted<string>;
  indexName?: string | redacted.Redacted<string>;
}
export interface StorageConfiguration {
  type: KnowledgeBaseStorageType;
  opensearchServerlessConfiguration?: OpenSearchServerlessConfiguration;
  opensearchManagedClusterConfiguration?: OpenSearchManagedClusterConfiguration;
  pineconeConfiguration?: PineconeConfiguration;
  redisEnterpriseCloudConfiguration?: RedisEnterpriseCloudConfiguration;
  rdsConfiguration?: RdsConfiguration;
  mongoDbAtlasConfiguration?: MongoDbAtlasConfiguration;
  neptuneAnalyticsConfiguration?: NeptuneAnalyticsConfiguration;
  s3VectorsConfiguration?: S3VectorsConfiguration;
}
export interface CreateKnowledgeBaseRequest {
  clientToken?: string;
  name: string;
  description?: string;
  roleArn: string;
  knowledgeBaseConfiguration: KnowledgeBaseConfiguration;
  storageConfiguration?: StorageConfiguration;
  tags?: { [key: string]: string | undefined };
}
export type KnowledgeBaseArn = string;
export type KnowledgeBaseStatus =
  | "CREATING"
  | "ACTIVE"
  | "DELETING"
  | "UPDATING"
  | "FAILED"
  | "DELETE_UNSUCCESSFUL"
  | "UPDATE_UNSUCCESSFUL"
  | (string & {});
export interface KnowledgeBase {
  knowledgeBaseId: string;
  name: string;
  knowledgeBaseArn: string;
  description?: string;
  roleArn: string;
  knowledgeBaseConfiguration: KnowledgeBaseConfiguration;
  storageConfiguration?: StorageConfiguration;
  status: KnowledgeBaseStatus;
  createdAt: Date;
  updatedAt: Date;
  failureReasons?: string[];
}
export interface CreateKnowledgeBaseResponse {
  knowledgeBase: KnowledgeBase;
}
export type PromptName = string;
export type PromptDescription = string;
export type PromptVariantName = string;
export type PromptModelIdentifier = string;
export type PromptMetadataKey = string | redacted.Redacted<string>;
export type PromptMetadataValue = string | redacted.Redacted<string>;
export interface PromptMetadataEntry {
  key: string | redacted.Redacted<string>;
  value: string | redacted.Redacted<string>;
}
export type PromptMetadataList = PromptMetadataEntry[];
export interface PromptAgentResource {
  agentIdentifier: string;
}
export type PromptGenAiResource = { agent: PromptAgentResource };
export interface PromptVariant {
  name: string;
  templateType: PromptTemplateType;
  templateConfiguration: PromptTemplateConfiguration;
  modelId?: string;
  inferenceConfiguration?: PromptInferenceConfiguration;
  metadata?: PromptMetadataEntry[];
  additionalModelRequestFields?: any;
  genAiResource?: PromptGenAiResource;
}
export type PromptVariantList = PromptVariant[];
export interface CreatePromptRequest {
  name: string;
  description?: string;
  customerEncryptionKeyArn?: string;
  defaultVariant?: string;
  variants?: PromptVariant[];
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
export type PromptId = string;
export type PromptArn = string;
export interface CreatePromptResponse {
  name: string;
  description?: string;
  customerEncryptionKeyArn?: string;
  defaultVariant?: string;
  variants?: PromptVariant[];
  id: string;
  arn: string;
  version: string;
  createdAt: Date;
  updatedAt: Date;
}
export type PromptIdentifier = string;
export interface CreatePromptVersionRequest {
  promptIdentifier: string;
  description?: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
export interface CreatePromptVersionResponse {
  name: string;
  description?: string;
  customerEncryptionKeyArn?: string;
  defaultVariant?: string;
  variants?: PromptVariant[];
  id: string;
  arn: string;
  version: string;
  createdAt: Date;
  updatedAt: Date;
}
export type VpcId = string;
export type SubnetId = string;
export type SubnetIdList = string[];
export type ResourceTarget = string;
export type Port = number;
export type VpcProtocol = "HTTP" | "HTTPS" | (string & {});
export type VpcResolutionMode = "PUBLIC" | "IN_VPC" | (string & {});
export type HostHeader = string;
export type TlsServerName = string;
export type VpcConfigurationName = string;
export type VpcConfigurationDescription = string;
export interface CreateVpcConfigurationRequest {
  knowledgeBaseId: string;
  clientToken?: string;
  vpcId: string;
  subnetIds: string[];
  resourceTarget: string;
  port: number;
  protocol: VpcProtocol;
  resolutionMode: VpcResolutionMode;
  hostHeader?: string;
  tlsServerName?: string;
  name?: string;
  description?: string;
}
export type VpcConfigurationId = string;
export type VpcConfigurationStatus =
  | "CREATING"
  | "CREATED"
  | "DELETING"
  | "CREATE_FAILED"
  | "DELETE_FAILED"
  | (string & {});
export interface CreateVpcConfigurationResponse {
  vpcConfigurationId: string;
  status: VpcConfigurationStatus;
}
export interface DeleteAgentRequest {
  agentId: string;
  skipResourceInUseCheck?: boolean;
}
export interface DeleteAgentResponse {
  agentId: string;
  agentStatus: AgentStatus;
}
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
export interface DeleteFlowRequest {
  flowIdentifier: string;
  skipResourceInUseCheck?: boolean;
}
export interface DeleteFlowResponse {
  id: string;
}
export type FlowAliasIdentifier = string;
export interface DeleteFlowAliasRequest {
  flowIdentifier: string;
  aliasIdentifier: string;
}
export interface DeleteFlowAliasResponse {
  flowId: string;
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
export interface DeleteKnowledgeBaseRequest {
  knowledgeBaseId: string;
}
export interface DeleteKnowledgeBaseResponse {
  knowledgeBaseId: string;
  status: KnowledgeBaseStatus;
}
export type ContentDataSourceType = "CUSTOM" | "S3" | (string & {});
export interface CustomDocumentIdentifier {
  id: string;
}
export interface DocumentIdentifier {
  dataSourceType: ContentDataSourceType;
  s3?: S3Location;
  custom?: CustomDocumentIdentifier;
}
export type DocumentIdentifiers = DocumentIdentifier[];
export interface DeleteKnowledgeBaseDocumentsRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
  clientToken?: string;
  documentIdentifiers: DocumentIdentifier[];
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
  | "DELETE_IN_PROGRESS"
  | (string & {});
export interface KnowledgeBaseDocumentDetail {
  knowledgeBaseId: string;
  dataSourceId: string;
  status: DocumentStatus;
  identifier: DocumentIdentifier;
  statusReason?: string;
  updatedAt?: Date;
}
export type KnowledgeBaseDocumentDetails = KnowledgeBaseDocumentDetail[];
export interface DeleteKnowledgeBaseDocumentsResponse {
  documentDetails?: KnowledgeBaseDocumentDetail[];
}
export interface DeletePromptRequest {
  promptIdentifier: string;
  promptVersion?: string;
}
export interface DeletePromptResponse {
  id: string;
  version?: string;
}
export type ResourceArn = string;
export type RevisionId = string;
export interface DeleteResourcePolicyRequest {
  resourceArn: string;
  expectedRevisionId?: string;
}
export interface DeleteResourcePolicyResponse {
  resourceArn: string;
  revisionId?: string;
}
export interface DeleteVpcConfigurationRequest {
  knowledgeBaseId: string;
  vpcConfigurationId: string;
}
export interface DeleteVpcConfigurationResponse {
  vpcConfigurationId: string;
  status: VpcConfigurationStatus;
}
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
export interface GetAgentRequest {
  agentId: string;
}
export interface GetAgentResponse {
  agent: Agent;
}
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
export interface GetAgentVersionRequest {
  agentId: string;
  agentVersion: string;
}
export interface AgentVersion {
  agentId: string;
  agentName: string;
  agentArn: string;
  version: string;
  instruction?: string | redacted.Redacted<string>;
  agentStatus: AgentStatus;
  foundationModel?: string;
  description?: string;
  idleSessionTTLInSeconds: number;
  agentResourceRoleArn: string;
  customerEncryptionKeyArn?: string;
  createdAt: Date;
  updatedAt: Date;
  failureReasons?: string[];
  recommendedActions?: string[];
  promptOverrideConfiguration?: PromptOverrideConfiguration;
  guardrailConfiguration?: GuardrailConfiguration;
  memoryConfiguration?: MemoryConfiguration;
  agentCollaboration?: AgentCollaboration;
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
export type IncludedData = "ALL_DATA" | "METADATA_ONLY" | (string & {});
export interface GetFlowRequest {
  flowIdentifier: string;
  includedData?: IncludedData;
}
export type NonBlankString = string;
export type FlowValidationSeverity = "Warning" | "Error" | (string & {});
export interface CyclicConnectionFlowValidationDetails {
  connection: string;
}
export interface DuplicateConnectionsFlowValidationDetails {
  source: string;
  target: string;
}
export interface DuplicateConditionExpressionFlowValidationDetails {
  node: string;
  expression: string | redacted.Redacted<string>;
}
export interface UnreachableNodeFlowValidationDetails {
  node: string;
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
export interface UnknownConnectionConditionFlowValidationDetails {
  connection: string;
}
export type ErrorMessage = string;
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
export interface IncompatibleConnectionDataTypeFlowValidationDetails {
  connection: string;
}
export interface MissingConnectionConfigurationFlowValidationDetails {
  connection: string;
}
export interface MissingDefaultConditionFlowValidationDetails {
  node: string;
}
export interface MissingEndingNodesFlowValidationDetails {}
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
export interface MultipleNodeInputConnectionsFlowValidationDetails {
  node: string;
  input: string;
}
export interface UnfulfilledNodeInputFlowValidationDetails {
  node: string;
  input: string;
}
export interface UnsatisfiedConnectionConditionsFlowValidationDetails {
  connection: string;
}
export interface UnspecifiedFlowValidationDetails {}
export interface UnknownNodeInputFlowValidationDetails {
  node: string;
  input: string;
}
export interface UnknownNodeOutputFlowValidationDetails {
  node: string;
  output: string;
}
export interface MissingLoopInputNodeFlowValidationDetails {
  loopNode: string;
}
export interface MissingLoopControllerNodeFlowValidationDetails {
  loopNode: string;
}
export interface MultipleLoopInputNodesFlowValidationDetails {
  loopNode: string;
}
export interface MultipleLoopControllerNodesFlowValidationDetails {
  loopNode: string;
}
export type IncompatibleLoopNodeType =
  | "Input"
  | "Condition"
  | "Iterator"
  | "Collector"
  | (string & {});
export interface LoopIncompatibleNodeTypeFlowValidationDetails {
  node: string;
  incompatibleNodeType: IncompatibleLoopNodeType;
  incompatibleNodeName: string;
}
export interface InvalidLoopBoundaryFlowValidationDetails {
  connection: string;
  source: string;
  target: string;
}
export type FlowValidationDetails =
  | {
      cyclicConnection: CyclicConnectionFlowValidationDetails;
      duplicateConnections?: never;
      duplicateConditionExpression?: never;
      unreachableNode?: never;
      unknownConnectionSource?: never;
      unknownConnectionSourceOutput?: never;
      unknownConnectionTarget?: never;
      unknownConnectionTargetInput?: never;
      unknownConnectionCondition?: never;
      malformedConditionExpression?: never;
      malformedNodeInputExpression?: never;
      mismatchedNodeInputType?: never;
      mismatchedNodeOutputType?: never;
      incompatibleConnectionDataType?: never;
      missingConnectionConfiguration?: never;
      missingDefaultCondition?: never;
      missingEndingNodes?: never;
      missingNodeConfiguration?: never;
      missingNodeInput?: never;
      missingNodeOutput?: never;
      missingStartingNodes?: never;
      multipleNodeInputConnections?: never;
      unfulfilledNodeInput?: never;
      unsatisfiedConnectionConditions?: never;
      unspecified?: never;
      unknownNodeInput?: never;
      unknownNodeOutput?: never;
      missingLoopInputNode?: never;
      missingLoopControllerNode?: never;
      multipleLoopInputNodes?: never;
      multipleLoopControllerNodes?: never;
      loopIncompatibleNodeType?: never;
      invalidLoopBoundary?: never;
    }
  | {
      cyclicConnection?: never;
      duplicateConnections: DuplicateConnectionsFlowValidationDetails;
      duplicateConditionExpression?: never;
      unreachableNode?: never;
      unknownConnectionSource?: never;
      unknownConnectionSourceOutput?: never;
      unknownConnectionTarget?: never;
      unknownConnectionTargetInput?: never;
      unknownConnectionCondition?: never;
      malformedConditionExpression?: never;
      malformedNodeInputExpression?: never;
      mismatchedNodeInputType?: never;
      mismatchedNodeOutputType?: never;
      incompatibleConnectionDataType?: never;
      missingConnectionConfiguration?: never;
      missingDefaultCondition?: never;
      missingEndingNodes?: never;
      missingNodeConfiguration?: never;
      missingNodeInput?: never;
      missingNodeOutput?: never;
      missingStartingNodes?: never;
      multipleNodeInputConnections?: never;
      unfulfilledNodeInput?: never;
      unsatisfiedConnectionConditions?: never;
      unspecified?: never;
      unknownNodeInput?: never;
      unknownNodeOutput?: never;
      missingLoopInputNode?: never;
      missingLoopControllerNode?: never;
      multipleLoopInputNodes?: never;
      multipleLoopControllerNodes?: never;
      loopIncompatibleNodeType?: never;
      invalidLoopBoundary?: never;
    }
  | {
      cyclicConnection?: never;
      duplicateConnections?: never;
      duplicateConditionExpression: DuplicateConditionExpressionFlowValidationDetails;
      unreachableNode?: never;
      unknownConnectionSource?: never;
      unknownConnectionSourceOutput?: never;
      unknownConnectionTarget?: never;
      unknownConnectionTargetInput?: never;
      unknownConnectionCondition?: never;
      malformedConditionExpression?: never;
      malformedNodeInputExpression?: never;
      mismatchedNodeInputType?: never;
      mismatchedNodeOutputType?: never;
      incompatibleConnectionDataType?: never;
      missingConnectionConfiguration?: never;
      missingDefaultCondition?: never;
      missingEndingNodes?: never;
      missingNodeConfiguration?: never;
      missingNodeInput?: never;
      missingNodeOutput?: never;
      missingStartingNodes?: never;
      multipleNodeInputConnections?: never;
      unfulfilledNodeInput?: never;
      unsatisfiedConnectionConditions?: never;
      unspecified?: never;
      unknownNodeInput?: never;
      unknownNodeOutput?: never;
      missingLoopInputNode?: never;
      missingLoopControllerNode?: never;
      multipleLoopInputNodes?: never;
      multipleLoopControllerNodes?: never;
      loopIncompatibleNodeType?: never;
      invalidLoopBoundary?: never;
    }
  | {
      cyclicConnection?: never;
      duplicateConnections?: never;
      duplicateConditionExpression?: never;
      unreachableNode: UnreachableNodeFlowValidationDetails;
      unknownConnectionSource?: never;
      unknownConnectionSourceOutput?: never;
      unknownConnectionTarget?: never;
      unknownConnectionTargetInput?: never;
      unknownConnectionCondition?: never;
      malformedConditionExpression?: never;
      malformedNodeInputExpression?: never;
      mismatchedNodeInputType?: never;
      mismatchedNodeOutputType?: never;
      incompatibleConnectionDataType?: never;
      missingConnectionConfiguration?: never;
      missingDefaultCondition?: never;
      missingEndingNodes?: never;
      missingNodeConfiguration?: never;
      missingNodeInput?: never;
      missingNodeOutput?: never;
      missingStartingNodes?: never;
      multipleNodeInputConnections?: never;
      unfulfilledNodeInput?: never;
      unsatisfiedConnectionConditions?: never;
      unspecified?: never;
      unknownNodeInput?: never;
      unknownNodeOutput?: never;
      missingLoopInputNode?: never;
      missingLoopControllerNode?: never;
      multipleLoopInputNodes?: never;
      multipleLoopControllerNodes?: never;
      loopIncompatibleNodeType?: never;
      invalidLoopBoundary?: never;
    }
  | {
      cyclicConnection?: never;
      duplicateConnections?: never;
      duplicateConditionExpression?: never;
      unreachableNode?: never;
      unknownConnectionSource: UnknownConnectionSourceFlowValidationDetails;
      unknownConnectionSourceOutput?: never;
      unknownConnectionTarget?: never;
      unknownConnectionTargetInput?: never;
      unknownConnectionCondition?: never;
      malformedConditionExpression?: never;
      malformedNodeInputExpression?: never;
      mismatchedNodeInputType?: never;
      mismatchedNodeOutputType?: never;
      incompatibleConnectionDataType?: never;
      missingConnectionConfiguration?: never;
      missingDefaultCondition?: never;
      missingEndingNodes?: never;
      missingNodeConfiguration?: never;
      missingNodeInput?: never;
      missingNodeOutput?: never;
      missingStartingNodes?: never;
      multipleNodeInputConnections?: never;
      unfulfilledNodeInput?: never;
      unsatisfiedConnectionConditions?: never;
      unspecified?: never;
      unknownNodeInput?: never;
      unknownNodeOutput?: never;
      missingLoopInputNode?: never;
      missingLoopControllerNode?: never;
      multipleLoopInputNodes?: never;
      multipleLoopControllerNodes?: never;
      loopIncompatibleNodeType?: never;
      invalidLoopBoundary?: never;
    }
  | {
      cyclicConnection?: never;
      duplicateConnections?: never;
      duplicateConditionExpression?: never;
      unreachableNode?: never;
      unknownConnectionSource?: never;
      unknownConnectionSourceOutput: UnknownConnectionSourceOutputFlowValidationDetails;
      unknownConnectionTarget?: never;
      unknownConnectionTargetInput?: never;
      unknownConnectionCondition?: never;
      malformedConditionExpression?: never;
      malformedNodeInputExpression?: never;
      mismatchedNodeInputType?: never;
      mismatchedNodeOutputType?: never;
      incompatibleConnectionDataType?: never;
      missingConnectionConfiguration?: never;
      missingDefaultCondition?: never;
      missingEndingNodes?: never;
      missingNodeConfiguration?: never;
      missingNodeInput?: never;
      missingNodeOutput?: never;
      missingStartingNodes?: never;
      multipleNodeInputConnections?: never;
      unfulfilledNodeInput?: never;
      unsatisfiedConnectionConditions?: never;
      unspecified?: never;
      unknownNodeInput?: never;
      unknownNodeOutput?: never;
      missingLoopInputNode?: never;
      missingLoopControllerNode?: never;
      multipleLoopInputNodes?: never;
      multipleLoopControllerNodes?: never;
      loopIncompatibleNodeType?: never;
      invalidLoopBoundary?: never;
    }
  | {
      cyclicConnection?: never;
      duplicateConnections?: never;
      duplicateConditionExpression?: never;
      unreachableNode?: never;
      unknownConnectionSource?: never;
      unknownConnectionSourceOutput?: never;
      unknownConnectionTarget: UnknownConnectionTargetFlowValidationDetails;
      unknownConnectionTargetInput?: never;
      unknownConnectionCondition?: never;
      malformedConditionExpression?: never;
      malformedNodeInputExpression?: never;
      mismatchedNodeInputType?: never;
      mismatchedNodeOutputType?: never;
      incompatibleConnectionDataType?: never;
      missingConnectionConfiguration?: never;
      missingDefaultCondition?: never;
      missingEndingNodes?: never;
      missingNodeConfiguration?: never;
      missingNodeInput?: never;
      missingNodeOutput?: never;
      missingStartingNodes?: never;
      multipleNodeInputConnections?: never;
      unfulfilledNodeInput?: never;
      unsatisfiedConnectionConditions?: never;
      unspecified?: never;
      unknownNodeInput?: never;
      unknownNodeOutput?: never;
      missingLoopInputNode?: never;
      missingLoopControllerNode?: never;
      multipleLoopInputNodes?: never;
      multipleLoopControllerNodes?: never;
      loopIncompatibleNodeType?: never;
      invalidLoopBoundary?: never;
    }
  | {
      cyclicConnection?: never;
      duplicateConnections?: never;
      duplicateConditionExpression?: never;
      unreachableNode?: never;
      unknownConnectionSource?: never;
      unknownConnectionSourceOutput?: never;
      unknownConnectionTarget?: never;
      unknownConnectionTargetInput: UnknownConnectionTargetInputFlowValidationDetails;
      unknownConnectionCondition?: never;
      malformedConditionExpression?: never;
      malformedNodeInputExpression?: never;
      mismatchedNodeInputType?: never;
      mismatchedNodeOutputType?: never;
      incompatibleConnectionDataType?: never;
      missingConnectionConfiguration?: never;
      missingDefaultCondition?: never;
      missingEndingNodes?: never;
      missingNodeConfiguration?: never;
      missingNodeInput?: never;
      missingNodeOutput?: never;
      missingStartingNodes?: never;
      multipleNodeInputConnections?: never;
      unfulfilledNodeInput?: never;
      unsatisfiedConnectionConditions?: never;
      unspecified?: never;
      unknownNodeInput?: never;
      unknownNodeOutput?: never;
      missingLoopInputNode?: never;
      missingLoopControllerNode?: never;
      multipleLoopInputNodes?: never;
      multipleLoopControllerNodes?: never;
      loopIncompatibleNodeType?: never;
      invalidLoopBoundary?: never;
    }
  | {
      cyclicConnection?: never;
      duplicateConnections?: never;
      duplicateConditionExpression?: never;
      unreachableNode?: never;
      unknownConnectionSource?: never;
      unknownConnectionSourceOutput?: never;
      unknownConnectionTarget?: never;
      unknownConnectionTargetInput?: never;
      unknownConnectionCondition: UnknownConnectionConditionFlowValidationDetails;
      malformedConditionExpression?: never;
      malformedNodeInputExpression?: never;
      mismatchedNodeInputType?: never;
      mismatchedNodeOutputType?: never;
      incompatibleConnectionDataType?: never;
      missingConnectionConfiguration?: never;
      missingDefaultCondition?: never;
      missingEndingNodes?: never;
      missingNodeConfiguration?: never;
      missingNodeInput?: never;
      missingNodeOutput?: never;
      missingStartingNodes?: never;
      multipleNodeInputConnections?: never;
      unfulfilledNodeInput?: never;
      unsatisfiedConnectionConditions?: never;
      unspecified?: never;
      unknownNodeInput?: never;
      unknownNodeOutput?: never;
      missingLoopInputNode?: never;
      missingLoopControllerNode?: never;
      multipleLoopInputNodes?: never;
      multipleLoopControllerNodes?: never;
      loopIncompatibleNodeType?: never;
      invalidLoopBoundary?: never;
    }
  | {
      cyclicConnection?: never;
      duplicateConnections?: never;
      duplicateConditionExpression?: never;
      unreachableNode?: never;
      unknownConnectionSource?: never;
      unknownConnectionSourceOutput?: never;
      unknownConnectionTarget?: never;
      unknownConnectionTargetInput?: never;
      unknownConnectionCondition?: never;
      malformedConditionExpression: MalformedConditionExpressionFlowValidationDetails;
      malformedNodeInputExpression?: never;
      mismatchedNodeInputType?: never;
      mismatchedNodeOutputType?: never;
      incompatibleConnectionDataType?: never;
      missingConnectionConfiguration?: never;
      missingDefaultCondition?: never;
      missingEndingNodes?: never;
      missingNodeConfiguration?: never;
      missingNodeInput?: never;
      missingNodeOutput?: never;
      missingStartingNodes?: never;
      multipleNodeInputConnections?: never;
      unfulfilledNodeInput?: never;
      unsatisfiedConnectionConditions?: never;
      unspecified?: never;
      unknownNodeInput?: never;
      unknownNodeOutput?: never;
      missingLoopInputNode?: never;
      missingLoopControllerNode?: never;
      multipleLoopInputNodes?: never;
      multipleLoopControllerNodes?: never;
      loopIncompatibleNodeType?: never;
      invalidLoopBoundary?: never;
    }
  | {
      cyclicConnection?: never;
      duplicateConnections?: never;
      duplicateConditionExpression?: never;
      unreachableNode?: never;
      unknownConnectionSource?: never;
      unknownConnectionSourceOutput?: never;
      unknownConnectionTarget?: never;
      unknownConnectionTargetInput?: never;
      unknownConnectionCondition?: never;
      malformedConditionExpression?: never;
      malformedNodeInputExpression: MalformedNodeInputExpressionFlowValidationDetails;
      mismatchedNodeInputType?: never;
      mismatchedNodeOutputType?: never;
      incompatibleConnectionDataType?: never;
      missingConnectionConfiguration?: never;
      missingDefaultCondition?: never;
      missingEndingNodes?: never;
      missingNodeConfiguration?: never;
      missingNodeInput?: never;
      missingNodeOutput?: never;
      missingStartingNodes?: never;
      multipleNodeInputConnections?: never;
      unfulfilledNodeInput?: never;
      unsatisfiedConnectionConditions?: never;
      unspecified?: never;
      unknownNodeInput?: never;
      unknownNodeOutput?: never;
      missingLoopInputNode?: never;
      missingLoopControllerNode?: never;
      multipleLoopInputNodes?: never;
      multipleLoopControllerNodes?: never;
      loopIncompatibleNodeType?: never;
      invalidLoopBoundary?: never;
    }
  | {
      cyclicConnection?: never;
      duplicateConnections?: never;
      duplicateConditionExpression?: never;
      unreachableNode?: never;
      unknownConnectionSource?: never;
      unknownConnectionSourceOutput?: never;
      unknownConnectionTarget?: never;
      unknownConnectionTargetInput?: never;
      unknownConnectionCondition?: never;
      malformedConditionExpression?: never;
      malformedNodeInputExpression?: never;
      mismatchedNodeInputType: MismatchedNodeInputTypeFlowValidationDetails;
      mismatchedNodeOutputType?: never;
      incompatibleConnectionDataType?: never;
      missingConnectionConfiguration?: never;
      missingDefaultCondition?: never;
      missingEndingNodes?: never;
      missingNodeConfiguration?: never;
      missingNodeInput?: never;
      missingNodeOutput?: never;
      missingStartingNodes?: never;
      multipleNodeInputConnections?: never;
      unfulfilledNodeInput?: never;
      unsatisfiedConnectionConditions?: never;
      unspecified?: never;
      unknownNodeInput?: never;
      unknownNodeOutput?: never;
      missingLoopInputNode?: never;
      missingLoopControllerNode?: never;
      multipleLoopInputNodes?: never;
      multipleLoopControllerNodes?: never;
      loopIncompatibleNodeType?: never;
      invalidLoopBoundary?: never;
    }
  | {
      cyclicConnection?: never;
      duplicateConnections?: never;
      duplicateConditionExpression?: never;
      unreachableNode?: never;
      unknownConnectionSource?: never;
      unknownConnectionSourceOutput?: never;
      unknownConnectionTarget?: never;
      unknownConnectionTargetInput?: never;
      unknownConnectionCondition?: never;
      malformedConditionExpression?: never;
      malformedNodeInputExpression?: never;
      mismatchedNodeInputType?: never;
      mismatchedNodeOutputType: MismatchedNodeOutputTypeFlowValidationDetails;
      incompatibleConnectionDataType?: never;
      missingConnectionConfiguration?: never;
      missingDefaultCondition?: never;
      missingEndingNodes?: never;
      missingNodeConfiguration?: never;
      missingNodeInput?: never;
      missingNodeOutput?: never;
      missingStartingNodes?: never;
      multipleNodeInputConnections?: never;
      unfulfilledNodeInput?: never;
      unsatisfiedConnectionConditions?: never;
      unspecified?: never;
      unknownNodeInput?: never;
      unknownNodeOutput?: never;
      missingLoopInputNode?: never;
      missingLoopControllerNode?: never;
      multipleLoopInputNodes?: never;
      multipleLoopControllerNodes?: never;
      loopIncompatibleNodeType?: never;
      invalidLoopBoundary?: never;
    }
  | {
      cyclicConnection?: never;
      duplicateConnections?: never;
      duplicateConditionExpression?: never;
      unreachableNode?: never;
      unknownConnectionSource?: never;
      unknownConnectionSourceOutput?: never;
      unknownConnectionTarget?: never;
      unknownConnectionTargetInput?: never;
      unknownConnectionCondition?: never;
      malformedConditionExpression?: never;
      malformedNodeInputExpression?: never;
      mismatchedNodeInputType?: never;
      mismatchedNodeOutputType?: never;
      incompatibleConnectionDataType: IncompatibleConnectionDataTypeFlowValidationDetails;
      missingConnectionConfiguration?: never;
      missingDefaultCondition?: never;
      missingEndingNodes?: never;
      missingNodeConfiguration?: never;
      missingNodeInput?: never;
      missingNodeOutput?: never;
      missingStartingNodes?: never;
      multipleNodeInputConnections?: never;
      unfulfilledNodeInput?: never;
      unsatisfiedConnectionConditions?: never;
      unspecified?: never;
      unknownNodeInput?: never;
      unknownNodeOutput?: never;
      missingLoopInputNode?: never;
      missingLoopControllerNode?: never;
      multipleLoopInputNodes?: never;
      multipleLoopControllerNodes?: never;
      loopIncompatibleNodeType?: never;
      invalidLoopBoundary?: never;
    }
  | {
      cyclicConnection?: never;
      duplicateConnections?: never;
      duplicateConditionExpression?: never;
      unreachableNode?: never;
      unknownConnectionSource?: never;
      unknownConnectionSourceOutput?: never;
      unknownConnectionTarget?: never;
      unknownConnectionTargetInput?: never;
      unknownConnectionCondition?: never;
      malformedConditionExpression?: never;
      malformedNodeInputExpression?: never;
      mismatchedNodeInputType?: never;
      mismatchedNodeOutputType?: never;
      incompatibleConnectionDataType?: never;
      missingConnectionConfiguration: MissingConnectionConfigurationFlowValidationDetails;
      missingDefaultCondition?: never;
      missingEndingNodes?: never;
      missingNodeConfiguration?: never;
      missingNodeInput?: never;
      missingNodeOutput?: never;
      missingStartingNodes?: never;
      multipleNodeInputConnections?: never;
      unfulfilledNodeInput?: never;
      unsatisfiedConnectionConditions?: never;
      unspecified?: never;
      unknownNodeInput?: never;
      unknownNodeOutput?: never;
      missingLoopInputNode?: never;
      missingLoopControllerNode?: never;
      multipleLoopInputNodes?: never;
      multipleLoopControllerNodes?: never;
      loopIncompatibleNodeType?: never;
      invalidLoopBoundary?: never;
    }
  | {
      cyclicConnection?: never;
      duplicateConnections?: never;
      duplicateConditionExpression?: never;
      unreachableNode?: never;
      unknownConnectionSource?: never;
      unknownConnectionSourceOutput?: never;
      unknownConnectionTarget?: never;
      unknownConnectionTargetInput?: never;
      unknownConnectionCondition?: never;
      malformedConditionExpression?: never;
      malformedNodeInputExpression?: never;
      mismatchedNodeInputType?: never;
      mismatchedNodeOutputType?: never;
      incompatibleConnectionDataType?: never;
      missingConnectionConfiguration?: never;
      missingDefaultCondition: MissingDefaultConditionFlowValidationDetails;
      missingEndingNodes?: never;
      missingNodeConfiguration?: never;
      missingNodeInput?: never;
      missingNodeOutput?: never;
      missingStartingNodes?: never;
      multipleNodeInputConnections?: never;
      unfulfilledNodeInput?: never;
      unsatisfiedConnectionConditions?: never;
      unspecified?: never;
      unknownNodeInput?: never;
      unknownNodeOutput?: never;
      missingLoopInputNode?: never;
      missingLoopControllerNode?: never;
      multipleLoopInputNodes?: never;
      multipleLoopControllerNodes?: never;
      loopIncompatibleNodeType?: never;
      invalidLoopBoundary?: never;
    }
  | {
      cyclicConnection?: never;
      duplicateConnections?: never;
      duplicateConditionExpression?: never;
      unreachableNode?: never;
      unknownConnectionSource?: never;
      unknownConnectionSourceOutput?: never;
      unknownConnectionTarget?: never;
      unknownConnectionTargetInput?: never;
      unknownConnectionCondition?: never;
      malformedConditionExpression?: never;
      malformedNodeInputExpression?: never;
      mismatchedNodeInputType?: never;
      mismatchedNodeOutputType?: never;
      incompatibleConnectionDataType?: never;
      missingConnectionConfiguration?: never;
      missingDefaultCondition?: never;
      missingEndingNodes: MissingEndingNodesFlowValidationDetails;
      missingNodeConfiguration?: never;
      missingNodeInput?: never;
      missingNodeOutput?: never;
      missingStartingNodes?: never;
      multipleNodeInputConnections?: never;
      unfulfilledNodeInput?: never;
      unsatisfiedConnectionConditions?: never;
      unspecified?: never;
      unknownNodeInput?: never;
      unknownNodeOutput?: never;
      missingLoopInputNode?: never;
      missingLoopControllerNode?: never;
      multipleLoopInputNodes?: never;
      multipleLoopControllerNodes?: never;
      loopIncompatibleNodeType?: never;
      invalidLoopBoundary?: never;
    }
  | {
      cyclicConnection?: never;
      duplicateConnections?: never;
      duplicateConditionExpression?: never;
      unreachableNode?: never;
      unknownConnectionSource?: never;
      unknownConnectionSourceOutput?: never;
      unknownConnectionTarget?: never;
      unknownConnectionTargetInput?: never;
      unknownConnectionCondition?: never;
      malformedConditionExpression?: never;
      malformedNodeInputExpression?: never;
      mismatchedNodeInputType?: never;
      mismatchedNodeOutputType?: never;
      incompatibleConnectionDataType?: never;
      missingConnectionConfiguration?: never;
      missingDefaultCondition?: never;
      missingEndingNodes?: never;
      missingNodeConfiguration: MissingNodeConfigurationFlowValidationDetails;
      missingNodeInput?: never;
      missingNodeOutput?: never;
      missingStartingNodes?: never;
      multipleNodeInputConnections?: never;
      unfulfilledNodeInput?: never;
      unsatisfiedConnectionConditions?: never;
      unspecified?: never;
      unknownNodeInput?: never;
      unknownNodeOutput?: never;
      missingLoopInputNode?: never;
      missingLoopControllerNode?: never;
      multipleLoopInputNodes?: never;
      multipleLoopControllerNodes?: never;
      loopIncompatibleNodeType?: never;
      invalidLoopBoundary?: never;
    }
  | {
      cyclicConnection?: never;
      duplicateConnections?: never;
      duplicateConditionExpression?: never;
      unreachableNode?: never;
      unknownConnectionSource?: never;
      unknownConnectionSourceOutput?: never;
      unknownConnectionTarget?: never;
      unknownConnectionTargetInput?: never;
      unknownConnectionCondition?: never;
      malformedConditionExpression?: never;
      malformedNodeInputExpression?: never;
      mismatchedNodeInputType?: never;
      mismatchedNodeOutputType?: never;
      incompatibleConnectionDataType?: never;
      missingConnectionConfiguration?: never;
      missingDefaultCondition?: never;
      missingEndingNodes?: never;
      missingNodeConfiguration?: never;
      missingNodeInput: MissingNodeInputFlowValidationDetails;
      missingNodeOutput?: never;
      missingStartingNodes?: never;
      multipleNodeInputConnections?: never;
      unfulfilledNodeInput?: never;
      unsatisfiedConnectionConditions?: never;
      unspecified?: never;
      unknownNodeInput?: never;
      unknownNodeOutput?: never;
      missingLoopInputNode?: never;
      missingLoopControllerNode?: never;
      multipleLoopInputNodes?: never;
      multipleLoopControllerNodes?: never;
      loopIncompatibleNodeType?: never;
      invalidLoopBoundary?: never;
    }
  | {
      cyclicConnection?: never;
      duplicateConnections?: never;
      duplicateConditionExpression?: never;
      unreachableNode?: never;
      unknownConnectionSource?: never;
      unknownConnectionSourceOutput?: never;
      unknownConnectionTarget?: never;
      unknownConnectionTargetInput?: never;
      unknownConnectionCondition?: never;
      malformedConditionExpression?: never;
      malformedNodeInputExpression?: never;
      mismatchedNodeInputType?: never;
      mismatchedNodeOutputType?: never;
      incompatibleConnectionDataType?: never;
      missingConnectionConfiguration?: never;
      missingDefaultCondition?: never;
      missingEndingNodes?: never;
      missingNodeConfiguration?: never;
      missingNodeInput?: never;
      missingNodeOutput: MissingNodeOutputFlowValidationDetails;
      missingStartingNodes?: never;
      multipleNodeInputConnections?: never;
      unfulfilledNodeInput?: never;
      unsatisfiedConnectionConditions?: never;
      unspecified?: never;
      unknownNodeInput?: never;
      unknownNodeOutput?: never;
      missingLoopInputNode?: never;
      missingLoopControllerNode?: never;
      multipleLoopInputNodes?: never;
      multipleLoopControllerNodes?: never;
      loopIncompatibleNodeType?: never;
      invalidLoopBoundary?: never;
    }
  | {
      cyclicConnection?: never;
      duplicateConnections?: never;
      duplicateConditionExpression?: never;
      unreachableNode?: never;
      unknownConnectionSource?: never;
      unknownConnectionSourceOutput?: never;
      unknownConnectionTarget?: never;
      unknownConnectionTargetInput?: never;
      unknownConnectionCondition?: never;
      malformedConditionExpression?: never;
      malformedNodeInputExpression?: never;
      mismatchedNodeInputType?: never;
      mismatchedNodeOutputType?: never;
      incompatibleConnectionDataType?: never;
      missingConnectionConfiguration?: never;
      missingDefaultCondition?: never;
      missingEndingNodes?: never;
      missingNodeConfiguration?: never;
      missingNodeInput?: never;
      missingNodeOutput?: never;
      missingStartingNodes: MissingStartingNodesFlowValidationDetails;
      multipleNodeInputConnections?: never;
      unfulfilledNodeInput?: never;
      unsatisfiedConnectionConditions?: never;
      unspecified?: never;
      unknownNodeInput?: never;
      unknownNodeOutput?: never;
      missingLoopInputNode?: never;
      missingLoopControllerNode?: never;
      multipleLoopInputNodes?: never;
      multipleLoopControllerNodes?: never;
      loopIncompatibleNodeType?: never;
      invalidLoopBoundary?: never;
    }
  | {
      cyclicConnection?: never;
      duplicateConnections?: never;
      duplicateConditionExpression?: never;
      unreachableNode?: never;
      unknownConnectionSource?: never;
      unknownConnectionSourceOutput?: never;
      unknownConnectionTarget?: never;
      unknownConnectionTargetInput?: never;
      unknownConnectionCondition?: never;
      malformedConditionExpression?: never;
      malformedNodeInputExpression?: never;
      mismatchedNodeInputType?: never;
      mismatchedNodeOutputType?: never;
      incompatibleConnectionDataType?: never;
      missingConnectionConfiguration?: never;
      missingDefaultCondition?: never;
      missingEndingNodes?: never;
      missingNodeConfiguration?: never;
      missingNodeInput?: never;
      missingNodeOutput?: never;
      missingStartingNodes?: never;
      multipleNodeInputConnections: MultipleNodeInputConnectionsFlowValidationDetails;
      unfulfilledNodeInput?: never;
      unsatisfiedConnectionConditions?: never;
      unspecified?: never;
      unknownNodeInput?: never;
      unknownNodeOutput?: never;
      missingLoopInputNode?: never;
      missingLoopControllerNode?: never;
      multipleLoopInputNodes?: never;
      multipleLoopControllerNodes?: never;
      loopIncompatibleNodeType?: never;
      invalidLoopBoundary?: never;
    }
  | {
      cyclicConnection?: never;
      duplicateConnections?: never;
      duplicateConditionExpression?: never;
      unreachableNode?: never;
      unknownConnectionSource?: never;
      unknownConnectionSourceOutput?: never;
      unknownConnectionTarget?: never;
      unknownConnectionTargetInput?: never;
      unknownConnectionCondition?: never;
      malformedConditionExpression?: never;
      malformedNodeInputExpression?: never;
      mismatchedNodeInputType?: never;
      mismatchedNodeOutputType?: never;
      incompatibleConnectionDataType?: never;
      missingConnectionConfiguration?: never;
      missingDefaultCondition?: never;
      missingEndingNodes?: never;
      missingNodeConfiguration?: never;
      missingNodeInput?: never;
      missingNodeOutput?: never;
      missingStartingNodes?: never;
      multipleNodeInputConnections?: never;
      unfulfilledNodeInput: UnfulfilledNodeInputFlowValidationDetails;
      unsatisfiedConnectionConditions?: never;
      unspecified?: never;
      unknownNodeInput?: never;
      unknownNodeOutput?: never;
      missingLoopInputNode?: never;
      missingLoopControllerNode?: never;
      multipleLoopInputNodes?: never;
      multipleLoopControllerNodes?: never;
      loopIncompatibleNodeType?: never;
      invalidLoopBoundary?: never;
    }
  | {
      cyclicConnection?: never;
      duplicateConnections?: never;
      duplicateConditionExpression?: never;
      unreachableNode?: never;
      unknownConnectionSource?: never;
      unknownConnectionSourceOutput?: never;
      unknownConnectionTarget?: never;
      unknownConnectionTargetInput?: never;
      unknownConnectionCondition?: never;
      malformedConditionExpression?: never;
      malformedNodeInputExpression?: never;
      mismatchedNodeInputType?: never;
      mismatchedNodeOutputType?: never;
      incompatibleConnectionDataType?: never;
      missingConnectionConfiguration?: never;
      missingDefaultCondition?: never;
      missingEndingNodes?: never;
      missingNodeConfiguration?: never;
      missingNodeInput?: never;
      missingNodeOutput?: never;
      missingStartingNodes?: never;
      multipleNodeInputConnections?: never;
      unfulfilledNodeInput?: never;
      unsatisfiedConnectionConditions: UnsatisfiedConnectionConditionsFlowValidationDetails;
      unspecified?: never;
      unknownNodeInput?: never;
      unknownNodeOutput?: never;
      missingLoopInputNode?: never;
      missingLoopControllerNode?: never;
      multipleLoopInputNodes?: never;
      multipleLoopControllerNodes?: never;
      loopIncompatibleNodeType?: never;
      invalidLoopBoundary?: never;
    }
  | {
      cyclicConnection?: never;
      duplicateConnections?: never;
      duplicateConditionExpression?: never;
      unreachableNode?: never;
      unknownConnectionSource?: never;
      unknownConnectionSourceOutput?: never;
      unknownConnectionTarget?: never;
      unknownConnectionTargetInput?: never;
      unknownConnectionCondition?: never;
      malformedConditionExpression?: never;
      malformedNodeInputExpression?: never;
      mismatchedNodeInputType?: never;
      mismatchedNodeOutputType?: never;
      incompatibleConnectionDataType?: never;
      missingConnectionConfiguration?: never;
      missingDefaultCondition?: never;
      missingEndingNodes?: never;
      missingNodeConfiguration?: never;
      missingNodeInput?: never;
      missingNodeOutput?: never;
      missingStartingNodes?: never;
      multipleNodeInputConnections?: never;
      unfulfilledNodeInput?: never;
      unsatisfiedConnectionConditions?: never;
      unspecified: UnspecifiedFlowValidationDetails;
      unknownNodeInput?: never;
      unknownNodeOutput?: never;
      missingLoopInputNode?: never;
      missingLoopControllerNode?: never;
      multipleLoopInputNodes?: never;
      multipleLoopControllerNodes?: never;
      loopIncompatibleNodeType?: never;
      invalidLoopBoundary?: never;
    }
  | {
      cyclicConnection?: never;
      duplicateConnections?: never;
      duplicateConditionExpression?: never;
      unreachableNode?: never;
      unknownConnectionSource?: never;
      unknownConnectionSourceOutput?: never;
      unknownConnectionTarget?: never;
      unknownConnectionTargetInput?: never;
      unknownConnectionCondition?: never;
      malformedConditionExpression?: never;
      malformedNodeInputExpression?: never;
      mismatchedNodeInputType?: never;
      mismatchedNodeOutputType?: never;
      incompatibleConnectionDataType?: never;
      missingConnectionConfiguration?: never;
      missingDefaultCondition?: never;
      missingEndingNodes?: never;
      missingNodeConfiguration?: never;
      missingNodeInput?: never;
      missingNodeOutput?: never;
      missingStartingNodes?: never;
      multipleNodeInputConnections?: never;
      unfulfilledNodeInput?: never;
      unsatisfiedConnectionConditions?: never;
      unspecified?: never;
      unknownNodeInput: UnknownNodeInputFlowValidationDetails;
      unknownNodeOutput?: never;
      missingLoopInputNode?: never;
      missingLoopControllerNode?: never;
      multipleLoopInputNodes?: never;
      multipleLoopControllerNodes?: never;
      loopIncompatibleNodeType?: never;
      invalidLoopBoundary?: never;
    }
  | {
      cyclicConnection?: never;
      duplicateConnections?: never;
      duplicateConditionExpression?: never;
      unreachableNode?: never;
      unknownConnectionSource?: never;
      unknownConnectionSourceOutput?: never;
      unknownConnectionTarget?: never;
      unknownConnectionTargetInput?: never;
      unknownConnectionCondition?: never;
      malformedConditionExpression?: never;
      malformedNodeInputExpression?: never;
      mismatchedNodeInputType?: never;
      mismatchedNodeOutputType?: never;
      incompatibleConnectionDataType?: never;
      missingConnectionConfiguration?: never;
      missingDefaultCondition?: never;
      missingEndingNodes?: never;
      missingNodeConfiguration?: never;
      missingNodeInput?: never;
      missingNodeOutput?: never;
      missingStartingNodes?: never;
      multipleNodeInputConnections?: never;
      unfulfilledNodeInput?: never;
      unsatisfiedConnectionConditions?: never;
      unspecified?: never;
      unknownNodeInput?: never;
      unknownNodeOutput: UnknownNodeOutputFlowValidationDetails;
      missingLoopInputNode?: never;
      missingLoopControllerNode?: never;
      multipleLoopInputNodes?: never;
      multipleLoopControllerNodes?: never;
      loopIncompatibleNodeType?: never;
      invalidLoopBoundary?: never;
    }
  | {
      cyclicConnection?: never;
      duplicateConnections?: never;
      duplicateConditionExpression?: never;
      unreachableNode?: never;
      unknownConnectionSource?: never;
      unknownConnectionSourceOutput?: never;
      unknownConnectionTarget?: never;
      unknownConnectionTargetInput?: never;
      unknownConnectionCondition?: never;
      malformedConditionExpression?: never;
      malformedNodeInputExpression?: never;
      mismatchedNodeInputType?: never;
      mismatchedNodeOutputType?: never;
      incompatibleConnectionDataType?: never;
      missingConnectionConfiguration?: never;
      missingDefaultCondition?: never;
      missingEndingNodes?: never;
      missingNodeConfiguration?: never;
      missingNodeInput?: never;
      missingNodeOutput?: never;
      missingStartingNodes?: never;
      multipleNodeInputConnections?: never;
      unfulfilledNodeInput?: never;
      unsatisfiedConnectionConditions?: never;
      unspecified?: never;
      unknownNodeInput?: never;
      unknownNodeOutput?: never;
      missingLoopInputNode: MissingLoopInputNodeFlowValidationDetails;
      missingLoopControllerNode?: never;
      multipleLoopInputNodes?: never;
      multipleLoopControllerNodes?: never;
      loopIncompatibleNodeType?: never;
      invalidLoopBoundary?: never;
    }
  | {
      cyclicConnection?: never;
      duplicateConnections?: never;
      duplicateConditionExpression?: never;
      unreachableNode?: never;
      unknownConnectionSource?: never;
      unknownConnectionSourceOutput?: never;
      unknownConnectionTarget?: never;
      unknownConnectionTargetInput?: never;
      unknownConnectionCondition?: never;
      malformedConditionExpression?: never;
      malformedNodeInputExpression?: never;
      mismatchedNodeInputType?: never;
      mismatchedNodeOutputType?: never;
      incompatibleConnectionDataType?: never;
      missingConnectionConfiguration?: never;
      missingDefaultCondition?: never;
      missingEndingNodes?: never;
      missingNodeConfiguration?: never;
      missingNodeInput?: never;
      missingNodeOutput?: never;
      missingStartingNodes?: never;
      multipleNodeInputConnections?: never;
      unfulfilledNodeInput?: never;
      unsatisfiedConnectionConditions?: never;
      unspecified?: never;
      unknownNodeInput?: never;
      unknownNodeOutput?: never;
      missingLoopInputNode?: never;
      missingLoopControllerNode: MissingLoopControllerNodeFlowValidationDetails;
      multipleLoopInputNodes?: never;
      multipleLoopControllerNodes?: never;
      loopIncompatibleNodeType?: never;
      invalidLoopBoundary?: never;
    }
  | {
      cyclicConnection?: never;
      duplicateConnections?: never;
      duplicateConditionExpression?: never;
      unreachableNode?: never;
      unknownConnectionSource?: never;
      unknownConnectionSourceOutput?: never;
      unknownConnectionTarget?: never;
      unknownConnectionTargetInput?: never;
      unknownConnectionCondition?: never;
      malformedConditionExpression?: never;
      malformedNodeInputExpression?: never;
      mismatchedNodeInputType?: never;
      mismatchedNodeOutputType?: never;
      incompatibleConnectionDataType?: never;
      missingConnectionConfiguration?: never;
      missingDefaultCondition?: never;
      missingEndingNodes?: never;
      missingNodeConfiguration?: never;
      missingNodeInput?: never;
      missingNodeOutput?: never;
      missingStartingNodes?: never;
      multipleNodeInputConnections?: never;
      unfulfilledNodeInput?: never;
      unsatisfiedConnectionConditions?: never;
      unspecified?: never;
      unknownNodeInput?: never;
      unknownNodeOutput?: never;
      missingLoopInputNode?: never;
      missingLoopControllerNode?: never;
      multipleLoopInputNodes: MultipleLoopInputNodesFlowValidationDetails;
      multipleLoopControllerNodes?: never;
      loopIncompatibleNodeType?: never;
      invalidLoopBoundary?: never;
    }
  | {
      cyclicConnection?: never;
      duplicateConnections?: never;
      duplicateConditionExpression?: never;
      unreachableNode?: never;
      unknownConnectionSource?: never;
      unknownConnectionSourceOutput?: never;
      unknownConnectionTarget?: never;
      unknownConnectionTargetInput?: never;
      unknownConnectionCondition?: never;
      malformedConditionExpression?: never;
      malformedNodeInputExpression?: never;
      mismatchedNodeInputType?: never;
      mismatchedNodeOutputType?: never;
      incompatibleConnectionDataType?: never;
      missingConnectionConfiguration?: never;
      missingDefaultCondition?: never;
      missingEndingNodes?: never;
      missingNodeConfiguration?: never;
      missingNodeInput?: never;
      missingNodeOutput?: never;
      missingStartingNodes?: never;
      multipleNodeInputConnections?: never;
      unfulfilledNodeInput?: never;
      unsatisfiedConnectionConditions?: never;
      unspecified?: never;
      unknownNodeInput?: never;
      unknownNodeOutput?: never;
      missingLoopInputNode?: never;
      missingLoopControllerNode?: never;
      multipleLoopInputNodes?: never;
      multipleLoopControllerNodes: MultipleLoopControllerNodesFlowValidationDetails;
      loopIncompatibleNodeType?: never;
      invalidLoopBoundary?: never;
    }
  | {
      cyclicConnection?: never;
      duplicateConnections?: never;
      duplicateConditionExpression?: never;
      unreachableNode?: never;
      unknownConnectionSource?: never;
      unknownConnectionSourceOutput?: never;
      unknownConnectionTarget?: never;
      unknownConnectionTargetInput?: never;
      unknownConnectionCondition?: never;
      malformedConditionExpression?: never;
      malformedNodeInputExpression?: never;
      mismatchedNodeInputType?: never;
      mismatchedNodeOutputType?: never;
      incompatibleConnectionDataType?: never;
      missingConnectionConfiguration?: never;
      missingDefaultCondition?: never;
      missingEndingNodes?: never;
      missingNodeConfiguration?: never;
      missingNodeInput?: never;
      missingNodeOutput?: never;
      missingStartingNodes?: never;
      multipleNodeInputConnections?: never;
      unfulfilledNodeInput?: never;
      unsatisfiedConnectionConditions?: never;
      unspecified?: never;
      unknownNodeInput?: never;
      unknownNodeOutput?: never;
      missingLoopInputNode?: never;
      missingLoopControllerNode?: never;
      multipleLoopInputNodes?: never;
      multipleLoopControllerNodes?: never;
      loopIncompatibleNodeType: LoopIncompatibleNodeTypeFlowValidationDetails;
      invalidLoopBoundary?: never;
    }
  | {
      cyclicConnection?: never;
      duplicateConnections?: never;
      duplicateConditionExpression?: never;
      unreachableNode?: never;
      unknownConnectionSource?: never;
      unknownConnectionSourceOutput?: never;
      unknownConnectionTarget?: never;
      unknownConnectionTargetInput?: never;
      unknownConnectionCondition?: never;
      malformedConditionExpression?: never;
      malformedNodeInputExpression?: never;
      mismatchedNodeInputType?: never;
      mismatchedNodeOutputType?: never;
      incompatibleConnectionDataType?: never;
      missingConnectionConfiguration?: never;
      missingDefaultCondition?: never;
      missingEndingNodes?: never;
      missingNodeConfiguration?: never;
      missingNodeInput?: never;
      missingNodeOutput?: never;
      missingStartingNodes?: never;
      multipleNodeInputConnections?: never;
      unfulfilledNodeInput?: never;
      unsatisfiedConnectionConditions?: never;
      unspecified?: never;
      unknownNodeInput?: never;
      unknownNodeOutput?: never;
      missingLoopInputNode?: never;
      missingLoopControllerNode?: never;
      multipleLoopInputNodes?: never;
      multipleLoopControllerNodes?: never;
      loopIncompatibleNodeType?: never;
      invalidLoopBoundary: InvalidLoopBoundaryFlowValidationDetails;
    };
export type FlowValidationType =
  | "CyclicConnection"
  | "DuplicateConnections"
  | "DuplicateConditionExpression"
  | "UnreachableNode"
  | "UnknownConnectionSource"
  | "UnknownConnectionSourceOutput"
  | "UnknownConnectionTarget"
  | "UnknownConnectionTargetInput"
  | "UnknownConnectionCondition"
  | "MalformedConditionExpression"
  | "MalformedNodeInputExpression"
  | "MismatchedNodeInputType"
  | "MismatchedNodeOutputType"
  | "IncompatibleConnectionDataType"
  | "MissingConnectionConfiguration"
  | "MissingDefaultCondition"
  | "MissingEndingNodes"
  | "MissingNodeConfiguration"
  | "MissingNodeInput"
  | "MissingNodeOutput"
  | "MissingStartingNodes"
  | "MultipleNodeInputConnections"
  | "UnfulfilledNodeInput"
  | "UnsatisfiedConnectionConditions"
  | "Unspecified"
  | "UnknownNodeInput"
  | "UnknownNodeOutput"
  | "MissingLoopInputNode"
  | "MissingLoopControllerNode"
  | "MultipleLoopInputNodes"
  | "MultipleLoopControllerNodes"
  | "LoopIncompatibleNodeType"
  | "InvalidLoopBoundary"
  | (string & {});
export interface FlowValidation {
  message: string;
  severity: FlowValidationSeverity;
  details?: FlowValidationDetails;
  type?: FlowValidationType;
}
export type FlowValidations = FlowValidation[];
export interface GetFlowResponse {
  name: string;
  description?: string;
  executionRoleArn: string;
  customerEncryptionKeyArn?: string;
  id: string;
  arn: string;
  status: FlowStatus;
  createdAt: Date;
  updatedAt: Date;
  version: string;
  definition?: FlowDefinition;
  validations?: FlowValidation[];
}
export interface GetFlowAliasRequest {
  flowIdentifier: string;
  aliasIdentifier: string;
}
export interface GetFlowAliasResponse {
  name: string;
  description?: string;
  routingConfiguration: FlowAliasRoutingConfigurationListItem[];
  concurrencyConfiguration?: FlowAliasConcurrencyConfiguration;
  flowId: string;
  id: string;
  arn: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface GetFlowVersionRequest {
  flowIdentifier: string;
  flowVersion: string;
  includedData?: IncludedData;
}
export interface GetFlowVersionResponse {
  name: string;
  description?: string;
  executionRoleArn: string;
  customerEncryptionKeyArn?: string;
  id: string;
  arn: string;
  status: FlowStatus;
  createdAt: Date;
  version: string;
  definition?: FlowDefinition;
}
export interface GetIngestionJobRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
  ingestionJobId: string;
}
export type IngestionJobStatus =
  | "STARTING"
  | "IN_PROGRESS"
  | "COMPLETE"
  | "FAILED"
  | "STOPPING"
  | "STOPPED"
  | (string & {});
export interface IngestionJobStatistics {
  numberOfDocumentsScanned?: number;
  numberOfMetadataDocumentsScanned?: number;
  numberOfNewDocumentsIndexed?: number;
  numberOfModifiedDocumentsIndexed?: number;
  numberOfMetadataDocumentsModified?: number;
  numberOfDocumentsDeleted?: number;
  numberOfDocumentsFailed?: number;
  numberOfDocumentsSkipped?: number;
}
export interface IngestionJob {
  knowledgeBaseId: string;
  dataSourceId: string;
  ingestionJobId: string;
  description?: string;
  status: IngestionJobStatus;
  statistics?: IngestionJobStatistics;
  failureReasons?: string[];
  startedAt: Date;
  updatedAt: Date;
  textReadyAt?: Date;
}
export interface GetIngestionJobResponse {
  ingestionJob: IngestionJob;
}
export interface GetKnowledgeBaseRequest {
  knowledgeBaseId: string;
}
export interface GetKnowledgeBaseResponse {
  knowledgeBase: KnowledgeBase;
}
export interface GetKnowledgeBaseDocumentsRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
  documentIdentifiers: DocumentIdentifier[];
}
export interface GetKnowledgeBaseDocumentsResponse {
  documentDetails?: KnowledgeBaseDocumentDetail[];
}
export interface GetPromptRequest {
  promptIdentifier: string;
  promptVersion?: string;
  includedData?: IncludedData;
}
export interface GetPromptResponse {
  name: string;
  description?: string;
  customerEncryptionKeyArn?: string;
  defaultVariant?: string;
  variants?: PromptVariant[];
  id: string;
  arn: string;
  version: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface GetResourcePolicyRequest {
  resourceArn: string;
}
export type ResourcePolicy = string;
export interface GetResourcePolicyResponse {
  resourceArn: string;
  policy: string;
  revisionId: string;
}
export interface GetVpcConfigurationRequest {
  knowledgeBaseId: string;
  vpcConfigurationId: string;
}
export type VpcConfigurationStatusMessage = string;
export interface VpcConfiguration {
  vpcConfigurationId: string;
  status: VpcConfigurationStatus;
  statusMessage?: string;
  vpcId: string;
  subnetIds: string[];
  resourceTarget: string;
  port: number;
  protocol: VpcProtocol;
  resolutionMode: VpcResolutionMode;
  hostHeader?: string;
  tlsServerName?: string;
  name?: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface GetVpcConfigurationResponse {
  vpcConfiguration: VpcConfiguration;
}
export type MetadataSourceType = "IN_LINE_ATTRIBUTE" | "S3_LOCATION" | (string & {});
export type Key = string | redacted.Redacted<string>;
export type MetadataValueType = "BOOLEAN" | "NUMBER" | "STRING" | "STRING_LIST" | (string & {});
export type NumberValue = number;
export type StringValue = string | redacted.Redacted<string>;
export type StringListValue = (string | redacted.Redacted<string>)[];
export interface MetadataAttributeValue {
  type: MetadataValueType;
  numberValue?: number;
  booleanValue?: boolean;
  stringValue?: string | redacted.Redacted<string>;
  stringListValue?: (string | redacted.Redacted<string>)[];
}
export interface MetadataAttribute {
  key: string | redacted.Redacted<string>;
  value: MetadataAttributeValue;
}
export type MetadataAttributes = MetadataAttribute[];
export type S3ObjectUri = string;
export interface CustomS3Location {
  uri: string;
  bucketOwnerAccountId?: string;
}
export type AccessControlPrincipalType = "USER" | (string & {});
export type AccessControlAccess = "ALLOW" | "DENY" | (string & {});
export interface DocumentAccessControlEntry {
  name: string;
  type: AccessControlPrincipalType;
  access: AccessControlAccess;
}
export type DocumentAccessControlList = DocumentAccessControlEntry[];
export interface DocumentMetadata {
  type: MetadataSourceType;
  inlineAttributes?: MetadataAttribute[];
  s3Location?: CustomS3Location;
  accessControlList?: DocumentAccessControlEntry[];
}
export type CustomSourceType = "IN_LINE" | "S3_LOCATION" | (string & {});
export type InlineContentType = "BYTE" | "TEXT" | (string & {});
export type ByteContentBlob = Uint8Array | redacted.Redacted<Uint8Array>;
export interface ByteContentDoc {
  mimeType: string;
  data: Uint8Array | redacted.Redacted<Uint8Array>;
}
export type Data = string | redacted.Redacted<string>;
export interface TextContentDoc {
  data: string | redacted.Redacted<string>;
}
export interface InlineContent {
  type: InlineContentType;
  byteContent?: ByteContentDoc;
  textContent?: TextContentDoc;
}
export interface CustomContent {
  customDocumentIdentifier: CustomDocumentIdentifier;
  sourceType: CustomSourceType;
  s3Location?: CustomS3Location;
  inlineContent?: InlineContent;
}
export interface S3Content {
  s3Location: S3Location;
}
export interface DocumentContent {
  dataSourceType: ContentDataSourceType;
  custom?: CustomContent;
  s3?: S3Content;
}
export interface KnowledgeBaseDocument {
  metadata?: DocumentMetadata;
  content: DocumentContent;
}
export type KnowledgeBaseDocuments = KnowledgeBaseDocument[];
export interface IngestKnowledgeBaseDocumentsRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
  clientToken?: string;
  documents: KnowledgeBaseDocument[];
}
export interface IngestKnowledgeBaseDocumentsResponse {
  documentDetails?: KnowledgeBaseDocumentDetail[];
}
export type MaxResults = number;
export type NextToken = string;
export interface ListAgentActionGroupsRequest {
  agentId: string;
  agentVersion: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ActionGroupSummary {
  actionGroupId: string;
  actionGroupName: string;
  actionGroupState: ActionGroupState;
  description?: string;
  updatedAt: Date;
}
export type ActionGroupSummaries = ActionGroupSummary[];
export interface ListAgentActionGroupsResponse {
  actionGroupSummaries: ActionGroupSummary[];
  nextToken?: string;
}
export interface ListAgentAliasesRequest {
  agentId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface AgentAliasSummary {
  agentAliasId: string;
  agentAliasName: string;
  description?: string;
  routingConfiguration?: AgentAliasRoutingConfigurationListItem[];
  agentAliasStatus: AgentAliasStatus;
  createdAt: Date;
  updatedAt: Date;
  aliasInvocationState?: AliasInvocationState;
}
export type AgentAliasSummaries = AgentAliasSummary[];
export interface ListAgentAliasesResponse {
  agentAliasSummaries: AgentAliasSummary[];
  nextToken?: string;
}
export interface ListAgentCollaboratorsRequest {
  agentId: string;
  agentVersion: string;
  maxResults?: number;
  nextToken?: string;
}
export interface AgentCollaboratorSummary {
  agentId: string;
  agentVersion: string;
  collaboratorId: string;
  agentDescriptor: AgentDescriptor;
  collaborationInstruction: string | redacted.Redacted<string>;
  relayConversationHistory: RelayConversationHistory;
  collaboratorName: string;
  createdAt: Date;
  lastUpdatedAt: Date;
}
export type AgentCollaboratorSummaries = AgentCollaboratorSummary[];
export interface ListAgentCollaboratorsResponse {
  agentCollaboratorSummaries: AgentCollaboratorSummary[];
  nextToken?: string;
}
export interface ListAgentKnowledgeBasesRequest {
  agentId: string;
  agentVersion: string;
  maxResults?: number;
  nextToken?: string;
}
export interface AgentKnowledgeBaseSummary {
  knowledgeBaseId: string;
  description?: string;
  knowledgeBaseState: KnowledgeBaseState;
  updatedAt: Date;
}
export type AgentKnowledgeBaseSummaries = AgentKnowledgeBaseSummary[];
export interface ListAgentKnowledgeBasesResponse {
  agentKnowledgeBaseSummaries: AgentKnowledgeBaseSummary[];
  nextToken?: string;
}
export interface ListAgentsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface AgentSummary {
  agentId: string;
  agentName: string;
  agentStatus: AgentStatus;
  description?: string;
  updatedAt: Date;
  latestAgentVersion?: string;
  guardrailConfiguration?: GuardrailConfiguration;
}
export type AgentSummaries = AgentSummary[];
export interface ListAgentsResponse {
  agentSummaries: AgentSummary[];
  nextToken?: string;
}
export interface ListAgentVersionsRequest {
  agentId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface AgentVersionSummary {
  agentName: string;
  agentStatus: AgentStatus;
  agentVersion: string;
  createdAt: Date;
  updatedAt: Date;
  description?: string;
  guardrailConfiguration?: GuardrailConfiguration;
}
export type AgentVersionSummaries = AgentVersionSummary[];
export interface ListAgentVersionsResponse {
  agentVersionSummaries: AgentVersionSummary[];
  nextToken?: string;
}
export interface ListDataSourcesRequest {
  knowledgeBaseId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface DataSourceSummary {
  knowledgeBaseId: string;
  dataSourceId: string;
  name: string;
  status: DataSourceStatus;
  description?: string;
  updatedAt: Date;
}
export type DataSourceSummaries = DataSourceSummary[];
export interface ListDataSourcesResponse {
  dataSourceSummaries: DataSourceSummary[];
  nextToken?: string;
}
export interface ListFlowAliasesRequest {
  flowIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
export interface FlowAliasSummary {
  name: string;
  description?: string;
  routingConfiguration: FlowAliasRoutingConfigurationListItem[];
  concurrencyConfiguration?: FlowAliasConcurrencyConfiguration;
  flowId: string;
  id: string;
  arn: string;
  createdAt: Date;
  updatedAt: Date;
}
export type FlowAliasSummaries = FlowAliasSummary[];
export interface ListFlowAliasesResponse {
  flowAliasSummaries: FlowAliasSummary[];
  nextToken?: string;
}
export interface ListFlowsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface FlowSummary {
  name: string;
  description?: string;
  id: string;
  arn: string;
  status: FlowStatus;
  createdAt: Date;
  updatedAt: Date;
  version: string;
}
export type FlowSummaries = FlowSummary[];
export interface ListFlowsResponse {
  flowSummaries: FlowSummary[];
  nextToken?: string;
}
export interface ListFlowVersionsRequest {
  flowIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
export interface FlowVersionSummary {
  id: string;
  arn: string;
  status: FlowStatus;
  createdAt: Date;
  version: string;
}
export type FlowVersionSummaries = FlowVersionSummary[];
export interface ListFlowVersionsResponse {
  flowVersionSummaries: FlowVersionSummary[];
  nextToken?: string;
}
export type IngestionJobFilterAttribute = "STATUS" | (string & {});
export type IngestionJobFilterOperator = "EQ" | (string & {});
export type IngestionJobFilterValue = string;
export type IngestionJobFilterValues = string[];
export interface IngestionJobFilter {
  attribute: IngestionJobFilterAttribute;
  operator: IngestionJobFilterOperator;
  values: string[];
}
export type IngestionJobFilters = IngestionJobFilter[];
export type IngestionJobSortByAttribute = "STATUS" | "STARTED_AT" | (string & {});
export type SortOrder = "ASCENDING" | "DESCENDING" | (string & {});
export interface IngestionJobSortBy {
  attribute: IngestionJobSortByAttribute;
  order: SortOrder;
}
export interface ListIngestionJobsRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
  filters?: IngestionJobFilter[];
  sortBy?: IngestionJobSortBy;
  maxResults?: number;
  nextToken?: string;
}
export interface IngestionJobSummary {
  knowledgeBaseId: string;
  dataSourceId: string;
  ingestionJobId: string;
  description?: string;
  status: IngestionJobStatus;
  startedAt: Date;
  updatedAt: Date;
  textReadyAt?: Date;
  statistics?: IngestionJobStatistics;
}
export type IngestionJobSummaries = IngestionJobSummary[];
export interface ListIngestionJobsResponse {
  ingestionJobSummaries: IngestionJobSummary[];
  nextToken?: string;
}
export interface ListKnowledgeBaseDocumentsRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListKnowledgeBaseDocumentsResponse {
  documentDetails: KnowledgeBaseDocumentDetail[];
  nextToken?: string;
}
export interface ListKnowledgeBasesRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface KnowledgeBaseSummary {
  knowledgeBaseId: string;
  name: string;
  description?: string;
  status: KnowledgeBaseStatus;
  updatedAt: Date;
}
export type KnowledgeBaseSummaries = KnowledgeBaseSummary[];
export interface ListKnowledgeBasesResponse {
  knowledgeBaseSummaries: KnowledgeBaseSummary[];
  nextToken?: string;
}
export interface ListPromptsRequest {
  promptIdentifier?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface PromptSummary {
  name: string;
  description?: string;
  id: string;
  arn: string;
  version: string;
  createdAt: Date;
  updatedAt: Date;
}
export type PromptSummaries = PromptSummary[];
export interface ListPromptsResponse {
  promptSummaries: PromptSummary[];
  nextToken?: string;
}
export type TaggableResourcesArn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
export interface ListVpcConfigurationsRequest {
  knowledgeBaseId: string;
  statusFilter?: VpcConfigurationStatus;
  maxResults?: number;
  nextToken?: string;
}
export interface VpcConfigurationSummary {
  vpcConfigurationId: string;
  status: VpcConfigurationStatus;
  statusMessage?: string;
  vpcId: string;
  resourceTarget: string;
  port: number;
  protocol: VpcProtocol;
  resolutionMode: VpcResolutionMode;
  hostHeader?: string;
  tlsServerName?: string;
  name?: string;
  description?: string;
  createdAt: Date;
}
export type VpcConfigurationSummaryList = VpcConfigurationSummary[];
export interface ListVpcConfigurationsResponse {
  items: VpcConfigurationSummary[];
  nextToken?: string;
}
export interface PrepareAgentRequest {
  agentId: string;
}
export interface PrepareAgentResponse {
  agentId: string;
  agentStatus: AgentStatus;
  agentVersion: string;
  preparedAt: Date;
}
export interface PrepareFlowRequest {
  flowIdentifier: string;
}
export interface PrepareFlowResponse {
  id: string;
  status: FlowStatus;
}
export interface PutResourcePolicyRequest {
  resourceArn: string;
  policy: string;
  expectedRevisionId?: string;
}
export interface PutResourcePolicyResponse {
  resourceArn: string;
  revisionId: string;
}
export interface StartIngestionJobRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
  clientToken?: string;
  description?: string;
}
export interface StartIngestionJobResponse {
  ingestionJob: IngestionJob;
}
export interface StopIngestionJobRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
  ingestionJobId: string;
}
export interface StopIngestionJobResponse {
  ingestionJob: IngestionJob;
}
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateAgentRequest {
  agentId: string;
  agentName: string;
  instruction?: string | redacted.Redacted<string>;
  foundationModel?: string;
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
export interface UpdateAgentActionGroupRequest {
  agentId: string;
  agentVersion: string;
  actionGroupId: string;
  actionGroupName: string;
  description?: string;
  parentActionGroupSignature?: ActionGroupSignature;
  parentActionGroupSignatureParams?: { [key: string]: string | undefined };
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
  routingConfiguration?: AgentAliasRoutingConfigurationListItem[];
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
  collaborationInstruction: string | redacted.Redacted<string>;
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
  createdAt: Date;
  updatedAt: Date;
  version: string;
  definition?: FlowDefinition;
}
export interface UpdateFlowAliasRequest {
  name: string;
  description?: string;
  routingConfiguration: FlowAliasRoutingConfigurationListItem[];
  concurrencyConfiguration?: FlowAliasConcurrencyConfiguration;
  flowIdentifier: string;
  aliasIdentifier: string;
}
export interface UpdateFlowAliasResponse {
  name: string;
  description?: string;
  routingConfiguration: FlowAliasRoutingConfigurationListItem[];
  concurrencyConfiguration?: FlowAliasConcurrencyConfiguration;
  flowId: string;
  id: string;
  arn: string;
  createdAt: Date;
  updatedAt: Date;
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
  variants?: PromptVariant[];
  promptIdentifier: string;
}
export interface UpdatePromptResponse {
  name: string;
  description?: string;
  customerEncryptionKeyArn?: string;
  defaultVariant?: string;
  variants?: PromptVariant[];
  id: string;
  arn: string;
  version: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface ValidateFlowDefinitionRequest {
  definition: FlowDefinition;
}
export interface ValidateFlowDefinitionResponse {
  validations: FlowValidation[];
}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = ValidationExceptionField[];
export type AssociateAgentCollaboratorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Makes an agent a collaborator for another agent.
 */
export const associateAgentCollaborator: API.OperationMethod<
  AssociateAgentCollaboratorRequest,
  AssociateAgentCollaboratorResponse,
  AssociateAgentCollaboratorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1, __c0, 1) as any as S.Schema<AssociateAgentCollaboratorRequest>,
  output: __S(3, __c0, 3) as any as S.Schema<AssociateAgentCollaboratorResponse>,
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
  operationName: "AssociateAgentCollaborator",
}));

export type AssociateAgentKnowledgeBaseError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates a knowledge base with an agent. If a knowledge base is associated and its `indexState` is set to `Enabled`, the agent queries the knowledge base for information to augment its response to the user.
 */
export const associateAgentKnowledgeBase: API.OperationMethod<
  AssociateAgentKnowledgeBaseRequest,
  AssociateAgentKnowledgeBaseResponse,
  AssociateAgentKnowledgeBaseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(4, __c0, 4) as any as S.Schema<AssociateAgentKnowledgeBaseRequest>,
  output: __S(6, __c0, 6) as any as S.Schema<AssociateAgentKnowledgeBaseResponse>,
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
  operationName: "AssociateAgentKnowledgeBase",
}));

export type CreateAgentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Amazon Bedrock Agents (now Amazon Bedrock Agents Classic) is no longer open to new customers. For capabilities similar to Bedrock Agents Classic, explore Amazon Bedrock AgentCore. Existing customers can continue to use the service as normal. For more information, see Amazon Bedrock Agents Classic availability change.
 *
 * Creates an agent that orchestrates interactions between foundation models, data sources, software applications, user conversations, and APIs to carry out tasks to help customers.
 *
 * - Specify the following fields for security purposes.
 *
 * - `agentResourceRoleArn` - The Amazon Resource Name (ARN) of the role with permissions to invoke API operations on an agent.
 *
 * - (Optional) `customerEncryptionKeyArn` - The Amazon Resource Name (ARN) of a KMS key to encrypt the creation of the agent.
 *
 * - (Optional) `idleSessionTTLinSeconds` - Specify the number of seconds for which the agent should maintain session information. After this time expires, the subsequent `InvokeAgent` request begins a new session.
 *
 * - To enable your agent to retain conversational context across multiple sessions, include a `memoryConfiguration` object. For more information, see Configure memory.
 *
 * - To override the default prompt behavior for agent orchestration and to use advanced prompts, include a `promptOverrideConfiguration` object. For more information, see Advanced prompts.
 *
 * - If your agent fails to be created, the response returns a list of `failureReasons` alongside a list of `recommendedActions` for you to troubleshoot.
 *
 * - The agent instructions will not be honored if your agent has only one knowledge base, uses default prompts, has no action group, and user input is disabled.
 */
export const createAgent: API.OperationMethod<
  CreateAgentRequest,
  CreateAgentResponse,
  CreateAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(19, __c2, 3) as any as S.Schema<CreateAgentRequest>,
  output: __S(21, __c2, 5) as any as S.Schema<CreateAgentResponse>,
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
  operationName: "CreateAgent",
}));

export type CreateAgentActionGroupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an action group for an agent. An action group represents the actions that an agent can carry out for the customer by defining the APIs that an agent can call and the logic for calling them.
 *
 * To allow your agent to request the user for additional information when trying to complete a task, add an action group with the `parentActionGroupSignature` field set to `AMAZON.UserInput`.
 *
 * To allow your agent to generate, run, and troubleshoot code when trying to complete a task, add an action group with the `parentActionGroupSignature` field set to `AMAZON.CodeInterpreter`.
 *
 * You must leave the `description`, `apiSchema`, and `actionGroupExecutor` fields blank for this action group. During orchestration, if your agent determines that it needs to invoke an API in an action group, but doesn't have enough information to complete the API request, it will invoke this action group instead and return an Observation reprompting the user for more information.
 */
export const createAgentActionGroup: API.OperationMethod<
  CreateAgentActionGroupRequest,
  CreateAgentActionGroupResponse,
  CreateAgentActionGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(31, __c3, 7) as any as S.Schema<CreateAgentActionGroupRequest>,
  output: __S(33, __c4, 1) as any as S.Schema<CreateAgentActionGroupResponse>,
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
  operationName: "CreateAgentActionGroup",
}));

export type CreateAgentAliasError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an alias of an agent that can be used to deploy the agent.
 */
export const createAgentAlias: API.OperationMethod<
  CreateAgentAliasRequest,
  CreateAgentAliasResponse,
  CreateAgentAliasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(36, __c4, 4) as any as S.Schema<CreateAgentAliasRequest>,
  output: __S(40, __c5, 0) as any as S.Schema<CreateAgentAliasResponse>,
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
  operationName: "CreateAgentAlias",
}));

export type CreateDataSourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Connects a knowledge base to a data source. You specify the configuration for the specific data source service in the `dataSourceConfiguration` field.
 *
 * You can't change the `chunkingConfiguration` after you create the data source connector.
 */
export const createDataSource: API.OperationMethod<
  CreateDataSourceRequest,
  CreateDataSourceResponse,
  CreateDataSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(95, __c11, 7) as any as S.Schema<CreateDataSourceRequest>,
  output: __S(97, __c12, 1) as any as S.Schema<CreateDataSourceResponse>,
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
  operationName: "CreateDataSource",
}));

export type CreateFlowError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a prompt flow that you can use to send an input through various steps to yield an output. Configure nodes, each of which corresponds to a step of the flow, and create connections between the nodes to create paths to different outputs. For more information, see How it works and Create a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
 */
export const createFlow: API.OperationMethod<
  CreateFlowRequest,
  CreateFlowResponse,
  CreateFlowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(157, __c19, 5) as any as S.Schema<CreateFlowRequest>,
  output: __S(158, __c19, 6) as any as S.Schema<CreateFlowResponse>,
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
  operationName: "CreateFlow",
}));

export type CreateFlowAliasError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an alias of a flow for deployment. For more information, see Deploy a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
 */
export const createFlowAlias: API.OperationMethod<
  CreateFlowAliasRequest,
  CreateFlowAliasResponse,
  CreateFlowAliasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(162, __c20, 2) as any as S.Schema<CreateFlowAliasRequest>,
  output: __S(163, __c20, 3) as any as S.Schema<CreateFlowAliasResponse>,
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
  operationName: "CreateFlowAlias",
}));

export type CreateFlowVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a version of the flow that you can deploy. For more information, see Deploy a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
 */
export const createFlowVersion: API.OperationMethod<
  CreateFlowVersionRequest,
  CreateFlowVersionResponse,
  CreateFlowVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(164, __c20, 4) as any as S.Schema<CreateFlowVersionRequest>,
  output: __S(165, __c20, 5) as any as S.Schema<CreateFlowVersionResponse>,
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
  operationName: "CreateFlowVersion",
}));

export type CreateKnowledgeBaseError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a knowledge base. A knowledge base contains your data sources so that Large Language Models (LLMs) can use your data. To create a knowledge base, you must first set up your data sources and configure a supported vector store. For more information, see Set up a knowledge base.
 *
 * To create a managed knowledge base, provide a `managedKnowledgeBaseConfiguration` during creation. For more information, see Build a managed knowledge base.
 *
 * - Provide the `name` and an optional `description`.
 *
 * - Provide the Amazon Resource Name (ARN) with permissions to create a knowledge base in the `roleArn` field.
 *
 * - For managed knowledge bases, set `embeddingModelType` to `MANAGED` to use the service-managed embedding model, or `CUSTOM` with an `embeddingModelArn` to use your own. To use your own KMS key for encryption, provide the ARN in `serverSideEncryptionConfiguration`. No vector store configuration is required for managed knowledge bases.
 *
 * - For self-managed knowledge bases, provide the embedding model to use in the `embeddingModelArn` field in the `knowledgeBaseConfiguration` object.
 *
 * - For self-managed knowledge bases, provide the configuration for your vector store in the `storageConfiguration` object.
 *
 * - For an Amazon OpenSearch Service database, use the `opensearchServerlessConfiguration` object. For more information, see Create a vector store in Amazon OpenSearch Service.
 *
 * - For an Amazon Aurora database, use the `RdsConfiguration` object. For more information, see Create a vector store in Amazon Aurora.
 *
 * - For a Pinecone database, use the `pineconeConfiguration` object. For more information, see Create a vector store in Pinecone.
 *
 * - For a Redis Enterprise Cloud database, use the `redisEnterpriseCloudConfiguration` object. For more information, see Create a vector store in Redis Enterprise Cloud.
 */
export const createKnowledgeBase: API.OperationMethod<
  CreateKnowledgeBaseRequest,
  CreateKnowledgeBaseResponse,
  CreateKnowledgeBaseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(211, __c26, 3) as any as S.Schema<CreateKnowledgeBaseRequest>,
  output: __S(213, __c26, 5) as any as S.Schema<CreateKnowledgeBaseResponse>,
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
  operationName: "CreateKnowledgeBase",
}));

export type CreatePromptError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a prompt in your prompt library that you can add to a flow. For more information, see Prompt management in Amazon Bedrock, Create a prompt using Prompt management and Prompt flows in Amazon Bedrock in the Amazon Bedrock User Guide.
 */
export const createPrompt: API.OperationMethod<
  CreatePromptRequest,
  CreatePromptResponse,
  CreatePromptError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(220, __c27, 4) as any as S.Schema<CreatePromptRequest>,
  output: __S(221, __c27, 5) as any as S.Schema<CreatePromptResponse>,
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
  operationName: "CreatePrompt",
}));

export type CreatePromptVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a static snapshot of your prompt that can be deployed to production. For more information, see Deploy prompts using Prompt management by creating versions in the Amazon Bedrock User Guide.
 */
export const createPromptVersion: API.OperationMethod<
  CreatePromptVersionRequest,
  CreatePromptVersionResponse,
  CreatePromptVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(222, __c27, 6) as any as S.Schema<CreatePromptVersionRequest>,
  output: __S(223, __c27, 7) as any as S.Schema<CreatePromptVersionResponse>,
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
  operationName: "CreatePromptVersion",
}));

export type CreateVpcConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a VPC configuration that lets a knowledge base connect to a resource in your private VPC. This operation is asynchronous: it returns a `vpcConfigurationId` with status `CREATING`. Poll `GetVpcConfiguration` until the status becomes `CREATED` or `CREATE_FAILED`.
 */
export const createVpcConfiguration: API.OperationMethod<
  CreateVpcConfigurationRequest,
  CreateVpcConfigurationResponse,
  CreateVpcConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(224, __c28, 0) as any as S.Schema<CreateVpcConfigurationRequest>,
  output: __S(225, __c28, 1) as any as S.Schema<CreateVpcConfigurationResponse>,
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
  operationName: "CreateVpcConfiguration",
}));

export type DeleteAgentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an agent.
 */
export const deleteAgent: API.OperationMethod<
  DeleteAgentRequest,
  DeleteAgentResponse,
  DeleteAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(226, __c28, 2) as any as S.Schema<DeleteAgentRequest>,
  output: __S(227, __c28, 3) as any as S.Schema<DeleteAgentResponse>,
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
  operationName: "DeleteAgent",
}));

export type DeleteAgentActionGroupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an action group in an agent.
 */
export const deleteAgentActionGroup: API.OperationMethod<
  DeleteAgentActionGroupRequest,
  DeleteAgentActionGroupResponse,
  DeleteAgentActionGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(228, __c28, 4) as any as S.Schema<DeleteAgentActionGroupRequest>,
  output: __S(46, __c5, 6) as any as S.Schema<DeleteAgentActionGroupResponse>,
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
  operationName: "DeleteAgentActionGroup",
}));

export type DeleteAgentAliasError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an alias of an agent.
 */
export const deleteAgentAlias: API.OperationMethod<
  DeleteAgentAliasRequest,
  DeleteAgentAliasResponse,
  DeleteAgentAliasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(229, __c28, 5) as any as S.Schema<DeleteAgentAliasRequest>,
  output: __S(230, __c28, 6) as any as S.Schema<DeleteAgentAliasResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAgentAlias",
}));

export type DeleteAgentVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a version of an agent.
 */
export const deleteAgentVersion: API.OperationMethod<
  DeleteAgentVersionRequest,
  DeleteAgentVersionResponse,
  DeleteAgentVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(231, __c28, 7) as any as S.Schema<DeleteAgentVersionRequest>,
  output: __S(232, __c29, 0) as any as S.Schema<DeleteAgentVersionResponse>,
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
  operationName: "DeleteAgentVersion",
}));

export type DeleteDataSourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a data source from a knowledge base.
 */
export const deleteDataSource: API.OperationMethod<
  DeleteDataSourceRequest,
  DeleteDataSourceResponse,
  DeleteDataSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(233, __c29, 1) as any as S.Schema<DeleteDataSourceRequest>,
  output: __S(234, __c29, 2) as any as S.Schema<DeleteDataSourceResponse>,
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
  operationName: "DeleteDataSource",
}));

export type DeleteFlowError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a flow.
 */
export const deleteFlow: API.OperationMethod<
  DeleteFlowRequest,
  DeleteFlowResponse,
  DeleteFlowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(235, __c29, 3) as any as S.Schema<DeleteFlowRequest>,
  output: __S(236, __c29, 4) as any as S.Schema<DeleteFlowResponse>,
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
  operationName: "DeleteFlow",
}));

export type DeleteFlowAliasError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an alias of a flow.
 */
export const deleteFlowAlias: API.OperationMethod<
  DeleteFlowAliasRequest,
  DeleteFlowAliasResponse,
  DeleteFlowAliasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(237, __c29, 5) as any as S.Schema<DeleteFlowAliasRequest>,
  output: __S(238, __c29, 6) as any as S.Schema<DeleteFlowAliasResponse>,
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
  operationName: "DeleteFlowAlias",
}));

export type DeleteFlowVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a version of a flow.
 */
export const deleteFlowVersion: API.OperationMethod<
  DeleteFlowVersionRequest,
  DeleteFlowVersionResponse,
  DeleteFlowVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(239, __c29, 7) as any as S.Schema<DeleteFlowVersionRequest>,
  output: __S(240, __c30, 0) as any as S.Schema<DeleteFlowVersionResponse>,
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
  operationName: "DeleteFlowVersion",
}));

export type DeleteKnowledgeBaseError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a knowledge base. Before deleting a knowledge base, you should disassociate the knowledge base from any agents that it is associated with by making a DisassociateAgentKnowledgeBase request.
 */
export const deleteKnowledgeBase: API.OperationMethod<
  DeleteKnowledgeBaseRequest,
  DeleteKnowledgeBaseResponse,
  DeleteKnowledgeBaseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(241, __c30, 1) as any as S.Schema<DeleteKnowledgeBaseRequest>,
  output: __S(242, __c30, 2) as any as S.Schema<DeleteKnowledgeBaseResponse>,
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
  operationName: "DeleteKnowledgeBase",
}));

export type DeleteKnowledgeBaseDocumentsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes documents from a data source and syncs the changes to the knowledge base that is connected to it. For more information, see Ingest changes directly into a knowledge base in the Amazon Bedrock User Guide.
 */
export const deleteKnowledgeBaseDocuments: API.OperationMethod<
  DeleteKnowledgeBaseDocumentsRequest,
  DeleteKnowledgeBaseDocumentsResponse,
  DeleteKnowledgeBaseDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(245, __c30, 5) as any as S.Schema<DeleteKnowledgeBaseDocumentsRequest>,
  output: __S(248, __c31, 0) as any as S.Schema<DeleteKnowledgeBaseDocumentsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteKnowledgeBaseDocuments",
}));

export type DeletePromptError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a prompt or a version of it, depending on whether you include the `promptVersion` field or not. For more information, see Delete prompts from the Prompt management tool and Delete a version of a prompt from the Prompt management tool in the Amazon Bedrock User Guide.
 */
export const deletePrompt: API.OperationMethod<
  DeletePromptRequest,
  DeletePromptResponse,
  DeletePromptError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(249, __c31, 1) as any as S.Schema<DeletePromptRequest>,
  output: __S(250, __c31, 2) as any as S.Schema<DeletePromptResponse>,
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
  operationName: "DeletePrompt",
}));

export type DeleteResourcePolicyError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes the resource policy associated with a knowledge base. After deletion, other AWS accounts can no longer access the knowledge base using cross-account permissions.
 */
export const deleteResourcePolicy: API.OperationMethod<
  DeleteResourcePolicyRequest,
  DeleteResourcePolicyResponse,
  DeleteResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(251, __c31, 3) as any as S.Schema<DeleteResourcePolicyRequest>,
  output: __S(252, __c31, 4) as any as S.Schema<DeleteResourcePolicyResponse>,
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
  operationName: "DeleteResourcePolicy",
}));

export type DeleteVpcConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a VPC configuration. This operation is asynchronous: it returns status `DELETING`. Poll `GetVpcConfiguration` until it returns a `ResourceNotFoundException`, indicating the configuration is deleted. Delete requests are idempotent and safe to retry.
 */
export const deleteVpcConfiguration: API.OperationMethod<
  DeleteVpcConfigurationRequest,
  DeleteVpcConfigurationResponse,
  DeleteVpcConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(253, __c31, 5) as any as S.Schema<DeleteVpcConfigurationRequest>,
  output: __S(225, __c28, 1) as any as S.Schema<DeleteVpcConfigurationResponse>,
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
  operationName: "DeleteVpcConfiguration",
}));

export type DisassociateAgentCollaboratorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates an agent collaborator.
 */
export const disassociateAgentCollaborator: API.OperationMethod<
  DisassociateAgentCollaboratorRequest,
  DisassociateAgentCollaboratorResponse,
  DisassociateAgentCollaboratorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(254, __c31, 6) as any as S.Schema<DisassociateAgentCollaboratorRequest>,
  output: __S(255, __c31, 7) as any as S.Schema<DisassociateAgentCollaboratorResponse>,
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
  operationName: "DisassociateAgentCollaborator",
}));

export type DisassociateAgentKnowledgeBaseError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates a knowledge base from an agent.
 */
export const disassociateAgentKnowledgeBase: API.OperationMethod<
  DisassociateAgentKnowledgeBaseRequest,
  DisassociateAgentKnowledgeBaseResponse,
  DisassociateAgentKnowledgeBaseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(256, __c32, 0) as any as S.Schema<DisassociateAgentKnowledgeBaseRequest>,
  output: __S(255, __c31, 7) as any as S.Schema<DisassociateAgentKnowledgeBaseResponse>,
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
  operationName: "DisassociateAgentKnowledgeBase",
}));

export type GetAgentError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about an agent.
 */
export const getAgent: API.OperationMethod<
  GetAgentRequest,
  GetAgentResponse,
  GetAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(257, __c32, 1) as any as S.Schema<GetAgentRequest>,
  output: __S(258, __c32, 2) as any as S.Schema<GetAgentResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAgent",
}));

export type GetAgentActionGroupError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about an action group for an agent.
 */
export const getAgentActionGroup: API.OperationMethod<
  GetAgentActionGroupRequest,
  GetAgentActionGroupResponse,
  GetAgentActionGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(259, __c32, 3) as any as S.Schema<GetAgentActionGroupRequest>,
  output: __S(33, __c4, 1) as any as S.Schema<GetAgentActionGroupResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAgentActionGroup",
}));

export type GetAgentAliasError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about an alias of an agent.
 */
export const getAgentAlias: API.OperationMethod<
  GetAgentAliasRequest,
  GetAgentAliasResponse,
  GetAgentAliasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(260, __c32, 4) as any as S.Schema<GetAgentAliasRequest>,
  output: __S(40, __c5, 0) as any as S.Schema<GetAgentAliasResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAgentAlias",
}));

export type GetAgentCollaboratorError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about an agent's collaborator.
 */
export const getAgentCollaborator: API.OperationMethod<
  GetAgentCollaboratorRequest,
  GetAgentCollaboratorResponse,
  GetAgentCollaboratorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(261, __c32, 5) as any as S.Schema<GetAgentCollaboratorRequest>,
  output: __S(3, __c0, 3) as any as S.Schema<GetAgentCollaboratorResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAgentCollaborator",
}));

export type GetAgentKnowledgeBaseError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a knowledge base associated with an agent.
 */
export const getAgentKnowledgeBase: API.OperationMethod<
  GetAgentKnowledgeBaseRequest,
  GetAgentKnowledgeBaseResponse,
  GetAgentKnowledgeBaseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(262, __c32, 6) as any as S.Schema<GetAgentKnowledgeBaseRequest>,
  output: __S(6, __c0, 6) as any as S.Schema<GetAgentKnowledgeBaseResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAgentKnowledgeBase",
}));

export type GetAgentVersionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets details about a version of an agent.
 */
export const getAgentVersion: API.OperationMethod<
  GetAgentVersionRequest,
  GetAgentVersionResponse,
  GetAgentVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(263, __c32, 7) as any as S.Schema<GetAgentVersionRequest>,
  output: __S(265, __c33, 1) as any as S.Schema<GetAgentVersionResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAgentVersion",
}));

export type GetDataSourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a data source.
 */
export const getDataSource: API.OperationMethod<
  GetDataSourceRequest,
  GetDataSourceResponse,
  GetDataSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(266, __c33, 2) as any as S.Schema<GetDataSourceRequest>,
  output: __S(97, __c12, 1) as any as S.Schema<GetDataSourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDataSource",
}));

export type GetFlowError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a flow. For more information, see Manage a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
 */
export const getFlow: API.OperationMethod<
  GetFlowRequest,
  GetFlowResponse,
  GetFlowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(267, __c33, 3) as any as S.Schema<GetFlowRequest>,
  output: __S(284, __c35, 4) as any as S.Schema<GetFlowResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFlow",
}));

export type GetFlowAliasError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a flow. For more information, see Deploy a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
 */
export const getFlowAlias: API.OperationMethod<
  GetFlowAliasRequest,
  GetFlowAliasResponse,
  GetFlowAliasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(285, __c35, 5) as any as S.Schema<GetFlowAliasRequest>,
  output: __S(163, __c20, 3) as any as S.Schema<GetFlowAliasResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFlowAlias",
}));

export type GetFlowVersionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a version of a flow. For more information, see Deploy a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
 */
export const getFlowVersion: API.OperationMethod<
  GetFlowVersionRequest,
  GetFlowVersionResponse,
  GetFlowVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(286, __c35, 6) as any as S.Schema<GetFlowVersionRequest>,
  output: __S(287, __c35, 7) as any as S.Schema<GetFlowVersionResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFlowVersion",
}));

export type GetIngestionJobError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a data ingestion job. Data sources are ingested into your knowledge base so that Large Language Models (LLMs) can use your data.
 */
export const getIngestionJob: API.OperationMethod<
  GetIngestionJobRequest,
  GetIngestionJobResponse,
  GetIngestionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(288, __c36, 0) as any as S.Schema<GetIngestionJobRequest>,
  output: __S(291, __c36, 3) as any as S.Schema<GetIngestionJobResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIngestionJob",
}));

export type GetKnowledgeBaseError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a knowledge base.
 */
export const getKnowledgeBase: API.OperationMethod<
  GetKnowledgeBaseRequest,
  GetKnowledgeBaseResponse,
  GetKnowledgeBaseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(292, __c36, 4) as any as S.Schema<GetKnowledgeBaseRequest>,
  output: __S(293, __c36, 5) as any as S.Schema<GetKnowledgeBaseResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetKnowledgeBase",
}));

export type GetKnowledgeBaseDocumentsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves specific documents from a data source that is connected to a knowledge base. For more information, see Ingest changes directly into a knowledge base in the Amazon Bedrock User Guide.
 */
export const getKnowledgeBaseDocuments: API.OperationMethod<
  GetKnowledgeBaseDocumentsRequest,
  GetKnowledgeBaseDocumentsResponse,
  GetKnowledgeBaseDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(294, __c36, 6) as any as S.Schema<GetKnowledgeBaseDocumentsRequest>,
  output: __S(248, __c31, 0) as any as S.Schema<GetKnowledgeBaseDocumentsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetKnowledgeBaseDocuments",
}));

export type GetPromptError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about the working draft (`DRAFT` version) of a prompt or a version of it, depending on whether you include the `promptVersion` field or not. For more information, see View information about prompts using Prompt management and View information about a version of your prompt in the Amazon Bedrock User Guide.
 */
export const getPrompt: API.OperationMethod<
  GetPromptRequest,
  GetPromptResponse,
  GetPromptError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(295, __c36, 7) as any as S.Schema<GetPromptRequest>,
  output: __S(221, __c27, 5) as any as S.Schema<GetPromptResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPrompt",
}));

export type GetResourcePolicyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the resource policy associated with a knowledge base.
 */
export const getResourcePolicy: API.OperationMethod<
  GetResourcePolicyRequest,
  GetResourcePolicyResponse,
  GetResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(296, __c37, 0) as any as S.Schema<GetResourcePolicyRequest>,
  output: __S(297, __c37, 1) as any as S.Schema<GetResourcePolicyResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourcePolicy",
}));

export type GetVpcConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the details and current status of a single VPC configuration. Use this operation to poll for the outcome of an asynchronous create or delete.
 */
export const getVpcConfiguration: API.OperationMethod<
  GetVpcConfigurationRequest,
  GetVpcConfigurationResponse,
  GetVpcConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(298, __c37, 2) as any as S.Schema<GetVpcConfigurationRequest>,
  output: __S(300, __c37, 4) as any as S.Schema<GetVpcConfigurationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetVpcConfiguration",
}));

export type IngestKnowledgeBaseDocumentsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Ingests documents directly into the knowledge base that is connected to the data source. The `dataSourceType` specified in the content for each document must match the type of the data source that you specify in the header. For more information, see Ingest changes directly into a knowledge base in the Amazon Bedrock User Guide.
 */
export const ingestKnowledgeBaseDocuments: API.OperationMethod<
  IngestKnowledgeBaseDocumentsRequest,
  IngestKnowledgeBaseDocumentsResponse,
  IngestKnowledgeBaseDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(315, __c39, 3) as any as S.Schema<IngestKnowledgeBaseDocumentsRequest>,
  output: __S(248, __c31, 0) as any as S.Schema<IngestKnowledgeBaseDocumentsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "IngestKnowledgeBaseDocuments",
}));

export type ListAgentActionGroupsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the action groups for an agent and information about each one.
 */
export const listAgentActionGroups: API.PaginatedOperationMethod<
  ListAgentActionGroupsRequest,
  ListAgentActionGroupsResponse,
  ListAgentActionGroupsError,
  Credentials | HttpClient.HttpClient,
  ActionGroupSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(316, __c39, 4) as any as S.Schema<ListAgentActionGroupsRequest>,
  output: __S(319, __c39, 7) as any as S.Schema<ListAgentActionGroupsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAgentActionGroups",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "actionGroupSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAgentAliasesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the aliases of an agent and information about each one.
 */
export const listAgentAliases: API.PaginatedOperationMethod<
  ListAgentAliasesRequest,
  ListAgentAliasesResponse,
  ListAgentAliasesError,
  Credentials | HttpClient.HttpClient,
  AgentAliasSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(320, __c40, 0) as any as S.Schema<ListAgentAliasesRequest>,
  output: __S(323, __c40, 3) as any as S.Schema<ListAgentAliasesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAgentAliases",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "agentAliasSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAgentCollaboratorsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieve a list of an agent's collaborators.
 */
export const listAgentCollaborators: API.PaginatedOperationMethod<
  ListAgentCollaboratorsRequest,
  ListAgentCollaboratorsResponse,
  ListAgentCollaboratorsError,
  Credentials | HttpClient.HttpClient,
  AgentCollaboratorSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(324, __c40, 4) as any as S.Schema<ListAgentCollaboratorsRequest>,
  output: __S(327, __c40, 7) as any as S.Schema<ListAgentCollaboratorsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAgentCollaborators",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "agentCollaboratorSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAgentKnowledgeBasesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists knowledge bases associated with an agent and information about each one.
 */
export const listAgentKnowledgeBases: API.PaginatedOperationMethod<
  ListAgentKnowledgeBasesRequest,
  ListAgentKnowledgeBasesResponse,
  ListAgentKnowledgeBasesError,
  Credentials | HttpClient.HttpClient,
  AgentKnowledgeBaseSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(328, __c41, 0) as any as S.Schema<ListAgentKnowledgeBasesRequest>,
  output: __S(331, __c41, 3) as any as S.Schema<ListAgentKnowledgeBasesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAgentKnowledgeBases",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "agentKnowledgeBaseSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAgentsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the agents belonging to an account and information about each agent.
 */
export const listAgents: API.PaginatedOperationMethod<
  ListAgentsRequest,
  ListAgentsResponse,
  ListAgentsError,
  Credentials | HttpClient.HttpClient,
  AgentSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(332, __c41, 4) as any as S.Schema<ListAgentsRequest>,
  output: __S(335, __c41, 7) as any as S.Schema<ListAgentsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAgents",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "agentSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAgentVersionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the versions of an agent and information about each version.
 */
export const listAgentVersions: API.PaginatedOperationMethod<
  ListAgentVersionsRequest,
  ListAgentVersionsResponse,
  ListAgentVersionsError,
  Credentials | HttpClient.HttpClient,
  AgentVersionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(336, __c42, 0) as any as S.Schema<ListAgentVersionsRequest>,
  output: __S(339, __c42, 3) as any as S.Schema<ListAgentVersionsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAgentVersions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "agentVersionSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDataSourcesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the data sources in a knowledge base and information about each one.
 */
export const listDataSources: API.PaginatedOperationMethod<
  ListDataSourcesRequest,
  ListDataSourcesResponse,
  ListDataSourcesError,
  Credentials | HttpClient.HttpClient,
  DataSourceSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(340, __c42, 4) as any as S.Schema<ListDataSourcesRequest>,
  output: __S(343, __c42, 7) as any as S.Schema<ListDataSourcesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDataSources",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "dataSourceSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListFlowAliasesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of aliases for a flow.
 */
export const listFlowAliases: API.PaginatedOperationMethod<
  ListFlowAliasesRequest,
  ListFlowAliasesResponse,
  ListFlowAliasesError,
  Credentials | HttpClient.HttpClient,
  FlowAliasSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(344, __c43, 0) as any as S.Schema<ListFlowAliasesRequest>,
  output: __S(346, __c43, 2) as any as S.Schema<ListFlowAliasesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFlowAliases",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "flowAliasSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListFlowsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of flows and information about each flow. For more information, see Manage a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
 */
export const listFlows: API.PaginatedOperationMethod<
  ListFlowsRequest,
  ListFlowsResponse,
  ListFlowsError,
  Credentials | HttpClient.HttpClient,
  FlowSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(347, __c43, 3) as any as S.Schema<ListFlowsRequest>,
  output: __S(350, __c43, 6) as any as S.Schema<ListFlowsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFlows",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "flowSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListFlowVersionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of information about each flow. For more information, see Deploy a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
 */
export const listFlowVersions: API.PaginatedOperationMethod<
  ListFlowVersionsRequest,
  ListFlowVersionsResponse,
  ListFlowVersionsError,
  Credentials | HttpClient.HttpClient,
  FlowVersionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(351, __c43, 7) as any as S.Schema<ListFlowVersionsRequest>,
  output: __S(354, __c44, 2) as any as S.Schema<ListFlowVersionsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFlowVersions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "flowVersionSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListIngestionJobsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the data ingestion jobs for a data source. The list also includes information about each job.
 */
export const listIngestionJobs: API.PaginatedOperationMethod<
  ListIngestionJobsRequest,
  ListIngestionJobsResponse,
  ListIngestionJobsError,
  Credentials | HttpClient.HttpClient,
  IngestionJobSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(358, __c44, 6) as any as S.Schema<ListIngestionJobsRequest>,
  output: __S(361, __c45, 1) as any as S.Schema<ListIngestionJobsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIngestionJobs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "ingestionJobSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListKnowledgeBaseDocumentsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves all the documents contained in a data source that is connected to a knowledge base. For more information, see Ingest changes directly into a knowledge base in the Amazon Bedrock User Guide.
 */
export const listKnowledgeBaseDocuments: API.PaginatedOperationMethod<
  ListKnowledgeBaseDocumentsRequest,
  ListKnowledgeBaseDocumentsResponse,
  ListKnowledgeBaseDocumentsError,
  Credentials | HttpClient.HttpClient,
  KnowledgeBaseDocumentDetail
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(362, __c45, 2) as any as S.Schema<ListKnowledgeBaseDocumentsRequest>,
  output: __S(363, __c45, 3) as any as S.Schema<ListKnowledgeBaseDocumentsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListKnowledgeBaseDocuments",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "documentDetails",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListKnowledgeBasesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the knowledge bases in an account. The list also includesinformation about each knowledge base.
 */
export const listKnowledgeBases: API.PaginatedOperationMethod<
  ListKnowledgeBasesRequest,
  ListKnowledgeBasesResponse,
  ListKnowledgeBasesError,
  Credentials | HttpClient.HttpClient,
  KnowledgeBaseSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(364, __c45, 4) as any as S.Schema<ListKnowledgeBasesRequest>,
  output: __S(367, __c45, 7) as any as S.Schema<ListKnowledgeBasesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListKnowledgeBases",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "knowledgeBaseSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPromptsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns either information about the working draft (`DRAFT` version) of each prompt in an account, or information about of all versions of a prompt, depending on whether you include the `promptIdentifier` field or not. For more information, see View information about prompts using Prompt management in the Amazon Bedrock User Guide.
 */
export const listPrompts: API.PaginatedOperationMethod<
  ListPromptsRequest,
  ListPromptsResponse,
  ListPromptsError,
  Credentials | HttpClient.HttpClient,
  PromptSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(368, __c46, 0) as any as S.Schema<ListPromptsRequest>,
  output: __S(371, __c46, 3) as any as S.Schema<ListPromptsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPrompts",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "promptSummaries",
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
 * List all the tags for the resource you specify.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(372, __c46, 4) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(373, __c46, 5) as any as S.Schema<ListTagsForResourceResponse>,
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

export type ListVpcConfigurationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a paginated list of the VPC configurations for a knowledge base. You can optionally filter by status. Use the `nextToken` parameter to retrieve additional results.
 */
export const listVpcConfigurations: API.PaginatedOperationMethod<
  ListVpcConfigurationsRequest,
  ListVpcConfigurationsResponse,
  ListVpcConfigurationsError,
  Credentials | HttpClient.HttpClient,
  VpcConfigurationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(374, __c46, 6) as any as S.Schema<ListVpcConfigurationsRequest>,
  output: __S(377, __c47, 1) as any as S.Schema<ListVpcConfigurationsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListVpcConfigurations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type PrepareAgentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a `DRAFT` version of the agent that can be used for internal testing.
 */
export const prepareAgent: API.OperationMethod<
  PrepareAgentRequest,
  PrepareAgentResponse,
  PrepareAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(378, __c47, 2) as any as S.Schema<PrepareAgentRequest>,
  output: __S(379, __c47, 3) as any as S.Schema<PrepareAgentResponse>,
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
  operationName: "PrepareAgent",
}));

export type PrepareFlowError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Prepares the `DRAFT` version of a flow so that it can be invoked. For more information, see Test a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
 */
export const prepareFlow: API.OperationMethod<
  PrepareFlowRequest,
  PrepareFlowResponse,
  PrepareFlowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(380, __c47, 4) as any as S.Schema<PrepareFlowRequest>,
  output: __S(381, __c47, 5) as any as S.Schema<PrepareFlowResponse>,
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
  operationName: "PrepareFlow",
}));

export type PutResourcePolicyError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates a resource policy with a knowledge base. A resource policy allows other AWS accounts to access the knowledge base. For more information, see Cross-account access for knowledge bases.
 */
export const putResourcePolicy: API.OperationMethod<
  PutResourcePolicyRequest,
  PutResourcePolicyResponse,
  PutResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(382, __c47, 6) as any as S.Schema<PutResourcePolicyRequest>,
  output: __S(383, __c47, 7) as any as S.Schema<PutResourcePolicyResponse>,
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
  operationName: "PutResourcePolicy",
}));

export type StartIngestionJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Begins a data ingestion job. Data sources are ingested into your knowledge base so that Large Language Models (LLMs) can use your data.
 */
export const startIngestionJob: API.OperationMethod<
  StartIngestionJobRequest,
  StartIngestionJobResponse,
  StartIngestionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(384, __c48, 0) as any as S.Schema<StartIngestionJobRequest>,
  output: __S(385, __c48, 1) as any as S.Schema<StartIngestionJobResponse>,
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
  operationName: "StartIngestionJob",
}));

export type StopIngestionJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Stops a currently running data ingestion job. You can send a `StartIngestionJob` request again to ingest the rest of your data when you are ready.
 */
export const stopIngestionJob: API.OperationMethod<
  StopIngestionJobRequest,
  StopIngestionJobResponse,
  StopIngestionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(386, __c48, 2) as any as S.Schema<StopIngestionJobRequest>,
  output: __S(291, __c36, 3) as any as S.Schema<StopIngestionJobResponse>,
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
  operationName: "StopIngestionJob",
}));

export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associate tags with a resource. For more information, see Tagging resources in the Amazon Bedrock User Guide.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(387, __c48, 3) as any as S.Schema<TagResourceRequest>,
  output: __S(46, __c5, 6) as any as S.Schema<TagResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
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
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Remove tags from a resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(388, __c48, 4) as any as S.Schema<UntagResourceRequest>,
  output: __S(46, __c5, 6) as any as S.Schema<UntagResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAgentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the configuration of an agent.
 */
export const updateAgent: API.OperationMethod<
  UpdateAgentRequest,
  UpdateAgentResponse,
  UpdateAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(389, __c48, 5) as any as S.Schema<UpdateAgentRequest>,
  output: __S(21, __c2, 5) as any as S.Schema<UpdateAgentResponse>,
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
  operationName: "UpdateAgent",
}));

export type UpdateAgentActionGroupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the configuration for an action group for an agent.
 */
export const updateAgentActionGroup: API.OperationMethod<
  UpdateAgentActionGroupRequest,
  UpdateAgentActionGroupResponse,
  UpdateAgentActionGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(390, __c48, 6) as any as S.Schema<UpdateAgentActionGroupRequest>,
  output: __S(33, __c4, 1) as any as S.Schema<UpdateAgentActionGroupResponse>,
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
  operationName: "UpdateAgentActionGroup",
}));

export type UpdateAgentAliasError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates configurations for an alias of an agent.
 */
export const updateAgentAlias: API.OperationMethod<
  UpdateAgentAliasRequest,
  UpdateAgentAliasResponse,
  UpdateAgentAliasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(391, __c48, 7) as any as S.Schema<UpdateAgentAliasRequest>,
  output: __S(40, __c5, 0) as any as S.Schema<UpdateAgentAliasResponse>,
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
  operationName: "UpdateAgentAlias",
}));

export type UpdateAgentCollaboratorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an agent's collaborator.
 */
export const updateAgentCollaborator: API.OperationMethod<
  UpdateAgentCollaboratorRequest,
  UpdateAgentCollaboratorResponse,
  UpdateAgentCollaboratorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(392, __c49, 0) as any as S.Schema<UpdateAgentCollaboratorRequest>,
  output: __S(3, __c0, 3) as any as S.Schema<UpdateAgentCollaboratorResponse>,
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
  operationName: "UpdateAgentCollaborator",
}));

export type UpdateAgentKnowledgeBaseError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the configuration for a knowledge base that has been associated with an agent.
 */
export const updateAgentKnowledgeBase: API.OperationMethod<
  UpdateAgentKnowledgeBaseRequest,
  UpdateAgentKnowledgeBaseResponse,
  UpdateAgentKnowledgeBaseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(393, __c49, 1) as any as S.Schema<UpdateAgentKnowledgeBaseRequest>,
  output: __S(6, __c0, 6) as any as S.Schema<UpdateAgentKnowledgeBaseResponse>,
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
  operationName: "UpdateAgentKnowledgeBase",
}));

export type UpdateDataSourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the configurations for a data source connector.
 *
 * You can't change the `chunkingConfiguration` after you create the data source connector. Specify the existing `chunkingConfiguration`.
 */
export const updateDataSource: API.OperationMethod<
  UpdateDataSourceRequest,
  UpdateDataSourceResponse,
  UpdateDataSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(394, __c49, 2) as any as S.Schema<UpdateDataSourceRequest>,
  output: __S(97, __c12, 1) as any as S.Schema<UpdateDataSourceResponse>,
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
  operationName: "UpdateDataSource",
}));

export type UpdateFlowError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Modifies a flow. Include both fields that you want to keep and fields that you want to change. For more information, see How it works and Create a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
 */
export const updateFlow: API.OperationMethod<
  UpdateFlowRequest,
  UpdateFlowResponse,
  UpdateFlowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(395, __c49, 3) as any as S.Schema<UpdateFlowRequest>,
  output: __S(158, __c19, 6) as any as S.Schema<UpdateFlowResponse>,
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
  operationName: "UpdateFlow",
}));

export type UpdateFlowAliasError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Modifies the alias of a flow. Include both fields that you want to keep and ones that you want to change. For more information, see Deploy a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
 */
export const updateFlowAlias: API.OperationMethod<
  UpdateFlowAliasRequest,
  UpdateFlowAliasResponse,
  UpdateFlowAliasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(396, __c49, 4) as any as S.Schema<UpdateFlowAliasRequest>,
  output: __S(163, __c20, 3) as any as S.Schema<UpdateFlowAliasResponse>,
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
  operationName: "UpdateFlowAlias",
}));

export type UpdateKnowledgeBaseError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the configuration of a knowledge base with the fields that you specify. Because all fields will be overwritten, you must include the same values for fields that you want to keep the same.
 *
 * You can change the following fields:
 *
 * - `name`
 *
 * - `description`
 *
 * - `roleArn`
 *
 * You can't change the `knowledgeBaseConfiguration` or `storageConfiguration` fields, so you must specify the same configurations as when you created the knowledge base. You can send a GetKnowledgeBase request and copy the same configurations.
 */
export const updateKnowledgeBase: API.OperationMethod<
  UpdateKnowledgeBaseRequest,
  UpdateKnowledgeBaseResponse,
  UpdateKnowledgeBaseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(397, __c49, 5) as any as S.Schema<UpdateKnowledgeBaseRequest>,
  output: __S(213, __c26, 5) as any as S.Schema<UpdateKnowledgeBaseResponse>,
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
  operationName: "UpdateKnowledgeBase",
}));

export type UpdatePromptError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Modifies a prompt in your prompt library. Include both fields that you want to keep and fields that you want to replace. For more information, see Prompt management in Amazon Bedrock and Edit prompts in your prompt library in the Amazon Bedrock User Guide.
 */
export const updatePrompt: API.OperationMethod<
  UpdatePromptRequest,
  UpdatePromptResponse,
  UpdatePromptError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(398, __c49, 6) as any as S.Schema<UpdatePromptRequest>,
  output: __S(221, __c27, 5) as any as S.Schema<UpdatePromptResponse>,
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
  operationName: "UpdatePrompt",
}));

export type ValidateFlowDefinitionError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Validates the definition of a flow.
 */
export const validateFlowDefinition: API.OperationMethod<
  ValidateFlowDefinitionRequest,
  ValidateFlowDefinitionResponse,
  ValidateFlowDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(399, __c49, 7) as any as S.Schema<ValidateFlowDefinitionRequest>,
  output: __S(400, __c50, 0) as any as S.Schema<ValidateFlowDefinitionResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ValidateFlowDefinition",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ aliasArn: S.optional(S.String) })).annotate({
        identifier: "AgentDescriptor",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          agentVersion: S.String.pipe(T.HttpLabel("agentVersion")),
          agentDescriptor: __S(0, __c0, 0),
          collaboratorName: S.String,
          collaborationInstruction: SensitiveString,
          relayConversationHistory: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/agents/{agentId}/agentversions/{agentVersion}/agentcollaborators/",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateAgentCollaboratorRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String,
          agentVersion: S.String,
          agentDescriptor: __S(0, __c0, 0),
          collaboratorId: S.String,
          collaborationInstruction: SensitiveString,
          collaboratorName: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          relayConversationHistory: S.optional(S.String),
          clientToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "AgentCollaborator" });
    case 3:
      return S.suspend(() => S.Struct({ agentCollaborator: __S(2, __c0, 2) })).annotate({
        identifier: "AssociateAgentCollaboratorResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          agentVersion: S.String.pipe(T.HttpLabel("agentVersion")),
          knowledgeBaseId: S.String,
          description: S.String,
          knowledgeBaseState: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/agents/{agentId}/agentversions/{agentVersion}/knowledgebases/",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateAgentKnowledgeBaseRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String,
          agentVersion: S.String,
          knowledgeBaseId: S.String,
          description: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          knowledgeBaseState: S.String,
        }),
      ).annotate({ identifier: "AgentKnowledgeBase" });
    case 6:
      return S.suspend(() => S.Struct({ agentKnowledgeBase: __S(5, __c0, 5) })).annotate({
        identifier: "AssociateAgentKnowledgeBaseResponse",
      });
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ lambda: S.String })]);
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ executor: S.optional(__S(7, __c0, 7)) })).annotate({
        identifier: "CustomOrchestration",
      });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({
          temperature: S.optional(S.Number),
          topP: S.optional(S.Number),
          topK: S.optional(S.Number),
          maximumLength: S.optional(S.Number),
          stopSequences: S.optional(__S(10, __c1, 2)),
        }),
      ).annotate({ identifier: "InferenceConfiguration" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          promptType: S.optional(S.String),
          promptCreationMode: S.optional(S.String),
          promptState: S.optional(S.String),
          basePromptTemplate: S.optional(SensitiveString),
          inferenceConfiguration: S.optional(__S(11, __c1, 3)),
          parserMode: S.optional(S.String),
          foundationModel: S.optional(S.String),
          additionalModelRequestFields: S.optional(S.Any),
        }),
      ).annotate({ identifier: "PromptConfiguration" });
    case 5:
      return S.Array(__S(12, __c1, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          promptConfigurations: __S(13, __c1, 5),
          overrideLambda: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PromptOverrideConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          guardrailIdentifier: S.optional(S.String),
          guardrailVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "GuardrailConfiguration" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() => S.Struct({ maxRecentSessions: S.optional(S.Number) })).annotate({
        identifier: "SessionSummaryConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          enabledMemoryTypes: __S(16, __c2, 0),
          storageDays: S.optional(S.Number),
          sessionSummaryConfiguration: S.optional(__S(17, __c2, 1)),
        }),
      ).annotate({ identifier: "MemoryConfiguration" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          agentName: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          instruction: S.optional(SensitiveString),
          foundationModel: S.optional(S.String),
          description: S.optional(S.String),
          orchestrationType: S.optional(S.String),
          customOrchestration: S.optional(__S(8, __c1, 0)),
          idleSessionTTLInSeconds: S.optional(S.Number),
          agentResourceRoleArn: S.optional(S.String),
          customerEncryptionKeyArn: S.optional(S.String),
          tags: S.optional(__S(9, __c1, 1)),
          promptOverrideConfiguration: S.optional(__S(14, __c1, 6)),
          guardrailConfiguration: S.optional(__S(15, __c1, 7)),
          memoryConfiguration: S.optional(__S(18, __c2, 2)),
          agentCollaboration: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "PUT", uri: "/agents/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateAgentRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String,
          agentName: S.String,
          agentArn: S.String,
          agentVersion: S.optional(S.String),
          clientToken: S.optional(S.String),
          instruction: S.optional(SensitiveString),
          agentStatus: S.String,
          foundationModel: S.optional(S.String),
          description: S.optional(S.String),
          orchestrationType: S.optional(S.String),
          customOrchestration: S.optional(__S(8, __c1, 0)),
          idleSessionTTLInSeconds: S.Number,
          agentResourceRoleArn: S.String,
          customerEncryptionKeyArn: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          preparedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          failureReasons: S.optional(__S(10, __c1, 2)),
          recommendedActions: S.optional(__S(10, __c1, 2)),
          promptOverrideConfiguration: S.optional(__S(14, __c1, 6)),
          guardrailConfiguration: S.optional(__S(15, __c1, 7)),
          memoryConfiguration: S.optional(__S(18, __c2, 2)),
          agentCollaboration: S.optional(S.String),
        }),
      ).annotate({ identifier: "Agent" });
    case 5:
      return S.suspend(() => S.Struct({ agent: __S(20, __c2, 4) })).annotate({
        identifier: "CreateAgentResponse",
      });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ lambda: S.String }),
        /*@__PURE__*/ S.Struct({ customControl: S.String }),
      ]);
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ s3BucketName: S.optional(S.String), s3ObjectKey: S.optional(S.String) }),
      ).annotate({ identifier: "S3Identifier" });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ s3: __S(24, __c3, 0) }),
        /*@__PURE__*/ S.Struct({ payload: SensitiveString }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          description: S.optional(S.String),
          type: S.String,
          required: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ParameterDetail" });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ __S(26, __c3, 2).pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          parameters: S.optional(__S(27, __c3, 3)),
          requireConfirmation: S.optional(S.String),
        }),
      ).annotate({ identifier: "Function" });
    case 5:
      return S.Array(__S(28, __c3, 4));
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ functions: __S(29, __c3, 5) })]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          agentVersion: S.String.pipe(T.HttpLabel("agentVersion")),
          actionGroupName: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          description: S.optional(S.String),
          parentActionGroupSignature: S.optional(S.String),
          parentActionGroupSignatureParams: S.optional(__S(22, __c2, 6)),
          actionGroupExecutor: S.optional(__S(23, __c2, 7)),
          apiSchema: S.optional(__S(25, __c3, 1)),
          actionGroupState: S.optional(S.String),
          functionSchema: S.optional(__S(30, __c3, 6)),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/agents/{agentId}/agentversions/{agentVersion}/actiongroups/",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateAgentActionGroupRequest",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String,
          agentVersion: S.String,
          actionGroupId: S.String,
          actionGroupName: S.String,
          clientToken: S.optional(S.String),
          description: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          parentActionSignature: S.optional(S.String),
          parentActionGroupSignatureParams: S.optional(__S(22, __c2, 6)),
          actionGroupExecutor: S.optional(__S(23, __c2, 7)),
          apiSchema: S.optional(__S(25, __c3, 1)),
          functionSchema: S.optional(__S(30, __c3, 6)),
          actionGroupState: S.String,
        }),
      ).annotate({ identifier: "AgentActionGroup" });
    case 1:
      return S.suspend(() => S.Struct({ agentActionGroup: __S(32, __c4, 0) })).annotate({
        identifier: "CreateAgentActionGroupResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          agentVersion: S.optional(S.String),
          provisionedThroughput: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AgentAliasRoutingConfigurationListItem",
      });
    case 3:
      return S.Array(__S(34, __c4, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          agentAliasName: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          description: S.optional(S.String),
          routingConfiguration: S.optional(__S(35, __c4, 3)),
          tags: S.optional(__S(9, __c1, 1)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/agents/{agentId}/agentaliases/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateAgentAliasRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          routingConfiguration: S.optional(__S(35, __c4, 3)),
          endDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          startDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "AgentAliasHistoryEvent" });
    case 6:
      return S.Array(__S(37, __c4, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String,
          agentAliasId: S.String,
          agentAliasName: S.String,
          agentAliasArn: S.String,
          clientToken: S.optional(S.String),
          description: S.optional(S.String),
          routingConfiguration: __S(35, __c4, 3),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          agentAliasHistoryEvents: S.optional(__S(38, __c4, 6)),
          agentAliasStatus: S.String,
          failureReasons: S.optional(__S(10, __c1, 2)),
          aliasInvocationState: S.optional(S.String),
        }),
      ).annotate({ identifier: "AgentAlias" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ agentAlias: __S(39, __c4, 7) })).annotate({
        identifier: "CreateAgentAliasResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          deletionProtectionStatus: S.String,
          deletionProtectionThreshold: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "DeletionProtectionConfiguration",
      });
    case 2:
      return S.suspend(() => S.Struct({ imageExtractionStatus: S.String })).annotate({
        identifier: "ImageExtractionConfiguration",
      });
    case 3:
      return S.suspend(() => S.Struct({ audioExtractionStatus: S.String })).annotate({
        identifier: "AudioExtractionConfiguration",
      });
    case 4:
      return S.suspend(() => S.Struct({ videoExtractionStatus: S.String })).annotate({
        identifier: "VideoExtractionConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          imageExtractionConfiguration: S.optional(__S(42, __c5, 2)),
          audioExtractionConfiguration: S.optional(__S(43, __c5, 3)),
          videoExtractionConfiguration: S.optional(__S(44, __c5, 4)),
        }),
      ).annotate({
        identifier: "MediaExtractionConfiguration",
      });
    case 6:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DailySchedule",
      });
    case 7:
      return S.suspend(() => S.Struct({ dayOfWeek: S.String })).annotate({
        identifier: "WeeklySchedule",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ dayNumber: S.Number }),
        /*@__PURE__*/ S.Struct({ lastDayOfMonth: __S(46, __c5, 6) }),
      ]);
    case 1:
      return S.suspend(() => S.Struct({ dayOfMonth: __S(48, __c6, 0) })).annotate({
        identifier: "MonthlySchedule",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ daily: __S(46, __c5, 6) }),
        /*@__PURE__*/ S.Struct({ weekly: __S(47, __c5, 7) }),
        /*@__PURE__*/ S.Struct({ monthly: __S(49, __c6, 1) }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          deletionProtectionConfiguration: S.optional(__S(41, __c5, 1)),
          mediaExtractionConfiguration: S.optional(__S(45, __c5, 5)),
          connectorParameters: S.optional(S.Any),
          syncSchedule: S.optional(__S(50, __c6, 2)),
        }),
      ).annotate({
        identifier: "ManagedKnowledgeBaseConnectorConfiguration",
      });
    case 4:
      return S.Array(SensitiveString);
    case 5:
      return S.suspend(() =>
        S.Struct({
          bucketArn: S.String,
          inclusionPrefixes: S.optional(__S(52, __c6, 4)),
          bucketOwnerAccountId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "S3DataSourceConfiguration",
      });
    case 6:
      return S.suspend(() => S.Struct({ url: S.optional(S.String) })).annotate({
        identifier: "SeedUrl",
      });
    case 7:
      return S.Array(__S(54, __c6, 6));
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ seedUrls: S.optional(__S(55, __c6, 7)) })).annotate({
        identifier: "UrlConfiguration",
      });
    case 1:
      return S.suspend(() => S.Struct({ urlConfiguration: __S(56, __c7, 0) })).annotate({
        identifier: "WebSourceConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ rateLimit: S.optional(S.Number), maxPages: S.optional(S.Number) }),
      ).annotate({ identifier: "WebCrawlerLimits" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          crawlerLimits: S.optional(__S(58, __c7, 2)),
          inclusionFilters: S.optional(__S(52, __c6, 4)),
          exclusionFilters: S.optional(__S(52, __c6, 4)),
          scope: S.optional(S.String),
          userAgent: S.optional(SensitiveString),
          userAgentHeader: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "WebCrawlerConfiguration" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          sourceConfiguration: __S(57, __c7, 1),
          crawlerConfiguration: S.optional(__S(59, __c7, 3)),
        }),
      ).annotate({
        identifier: "WebDataSourceConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          hostUrl: S.String,
          hostType: S.String,
          authType: S.String,
          credentialsSecretArn: S.String,
        }),
      ).annotate({
        identifier: "ConfluenceSourceConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          objectType: SensitiveString,
          inclusionFilters: S.optional(__S(52, __c6, 4)),
          exclusionFilters: S.optional(__S(52, __c6, 4)),
        }),
      ).annotate({ identifier: "PatternObjectFilter" });
    case 7:
      return S.Array(__S(62, __c7, 6));
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ filters: __S(63, __c7, 7) })).annotate({
        identifier: "PatternObjectFilterConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          patternObjectFilter: S.optional(__S(64, __c8, 0)),
        }),
      ).annotate({ identifier: "CrawlFilterConfiguration" });
    case 2:
      return S.suspend(() =>
        S.Struct({ filterConfiguration: S.optional(__S(65, __c8, 1)) }),
      ).annotate({
        identifier: "ConfluenceCrawlerConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          sourceConfiguration: __S(61, __c7, 5),
          crawlerConfiguration: S.optional(__S(66, __c8, 2)),
        }),
      ).annotate({
        identifier: "ConfluenceDataSourceConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          hostUrl: S.String,
          authType: S.String,
          credentialsSecretArn: S.String,
        }),
      ).annotate({
        identifier: "SalesforceSourceConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          sourceConfiguration: __S(68, __c8, 4),
          crawlerConfiguration: S.optional(__S(66, __c8, 2)),
        }),
      ).annotate({
        identifier: "SalesforceDataSourceConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          tenantId: S.optional(S.String),
          domain: S.String,
          siteUrls: __S(10, __c1, 2),
          hostType: S.String,
          authType: S.String,
          credentialsSecretArn: S.String,
        }),
      ).annotate({
        identifier: "SharePointSourceConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          sourceConfiguration: __S(70, __c8, 6),
          crawlerConfiguration: S.optional(__S(66, __c8, 2)),
        }),
      ).annotate({
        identifier: "SharePointDataSourceConfiguration",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          managedKnowledgeBaseConnectorConfiguration: S.optional(__S(51, __c6, 3)),
          s3Configuration: S.optional(__S(53, __c6, 5)),
          webConfiguration: S.optional(__S(60, __c7, 4)),
          confluenceConfiguration: S.optional(__S(67, __c8, 3)),
          salesforceConfiguration: S.optional(__S(69, __c8, 5)),
          sharePointConfiguration: S.optional(__S(71, __c8, 7)),
        }),
      ).annotate({ identifier: "DataSourceConfiguration" });
    case 1:
      return S.suspend(() => S.Struct({ kmsKeyArn: S.optional(S.String) })).annotate({
        identifier: "ServerSideEncryptionConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ maxTokens: S.Number, overlapPercentage: S.Number }),
      ).annotate({
        identifier: "FixedSizeChunkingConfiguration",
      });
    case 3:
      return S.suspend(() => S.Struct({ maxTokens: S.Number })).annotate({
        identifier: "HierarchicalChunkingLevelConfiguration",
      });
    case 4:
      return S.Array(__S(75, __c9, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          levelConfigurations: __S(76, __c9, 4),
          overlapTokens: S.Number,
        }),
      ).annotate({
        identifier: "HierarchicalChunkingConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          maxTokens: S.Number,
          bufferSize: S.Number,
          breakpointPercentileThreshold: S.Number,
        }),
      ).annotate({
        identifier: "SemanticChunkingConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          chunkingStrategy: S.String,
          fixedSizeChunkingConfiguration: S.optional(__S(74, __c9, 2)),
          hierarchicalChunkingConfiguration: S.optional(__S(77, __c9, 5)),
          semanticChunkingConfiguration: S.optional(__S(78, __c9, 6)),
        }),
      ).annotate({ identifier: "ChunkingConfiguration" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ uri: S.String })).annotate({
        identifier: "S3Location",
      });
    case 1:
      return S.suspend(() => S.Struct({ s3Location: __S(80, __c10, 0) })).annotate({
        identifier: "IntermediateStorage",
      });
    case 2:
      return S.suspend(() => S.Struct({ lambdaArn: S.String })).annotate({
        identifier: "TransformationLambdaConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ transformationLambdaConfiguration: __S(82, __c10, 2) }),
      ).annotate({ identifier: "TransformationFunction" });
    case 4:
      return S.suspend(() =>
        S.Struct({ transformationFunction: __S(83, __c10, 3), stepToApply: S.String }),
      ).annotate({ identifier: "Transformation" });
    case 5:
      return S.Array(__S(84, __c10, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ intermediateStorage: __S(81, __c10, 1), transformations: __S(85, __c10, 5) }),
      ).annotate({
        identifier: "CustomTransformationConfiguration",
      });
    case 7:
      return S.suspend(() => S.Struct({ parsingPromptText: S.String })).annotate({
        identifier: "ParsingPrompt",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          modelArn: S.String,
          parsingPrompt: S.optional(__S(87, __c10, 7)),
          parsingModality: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BedrockFoundationModelConfiguration",
      });
    case 1:
      return S.suspend(() => S.Struct({ parsingModality: S.optional(S.String) })).annotate({
        identifier: "BedrockDataAutomationConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          parsingStrategy: S.String,
          bedrockFoundationModelConfiguration: S.optional(__S(88, __c11, 0)),
          bedrockDataAutomationConfiguration: S.optional(__S(89, __c11, 1)),
        }),
      ).annotate({ identifier: "ParsingConfiguration" });
    case 3:
      return S.suspend(() => S.Struct({ method: S.String })).annotate({
        identifier: "EnrichmentStrategyConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          enrichmentStrategyConfiguration: __S(91, __c11, 3),
          modelArn: S.String,
        }),
      ).annotate({
        identifier: "BedrockFoundationModelContextEnrichmentConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          bedrockFoundationModelConfiguration: S.optional(__S(92, __c11, 4)),
        }),
      ).annotate({
        identifier: "ContextEnrichmentConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          chunkingConfiguration: S.optional(__S(79, __c9, 7)),
          customTransformationConfiguration: S.optional(__S(86, __c10, 6)),
          parsingConfiguration: S.optional(__S(90, __c11, 2)),
          contextEnrichmentConfiguration: S.optional(__S(93, __c11, 5)),
        }),
      ).annotate({
        identifier: "VectorIngestionConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          name: S.String,
          description: S.optional(S.String),
          dataSourceConfiguration: __S(72, __c9, 0),
          dataDeletionPolicy: S.optional(S.String),
          serverSideEncryptionConfiguration: S.optional(__S(73, __c9, 1)),
          vectorIngestionConfiguration: S.optional(__S(94, __c11, 6)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/knowledgebases/{knowledgeBaseId}/datasources/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateDataSourceRequest" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String,
          dataSourceId: S.String,
          name: S.String,
          status: S.String,
          description: S.optional(S.String),
          dataSourceConfiguration: __S(72, __c9, 0),
          serverSideEncryptionConfiguration: S.optional(__S(73, __c9, 1)),
          vectorIngestionConfiguration: S.optional(__S(94, __c11, 6)),
          dataDeletionPolicy: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          failureReasons: S.optional(__S(10, __c1, 2)),
        }),
      ).annotate({ identifier: "DataSource" });
    case 1:
      return S.suspend(() => S.Struct({ dataSource: __S(96, __c12, 0) })).annotate({
        identifier: "CreateDataSourceResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ textPromptTemplate: S.optional(SensitiveString) }),
      ).annotate({
        identifier: "KnowledgeBasePromptTemplate",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          temperature: S.optional(S.Number),
          topP: S.optional(S.Number),
          maxTokens: S.optional(S.Number),
          stopSequences: S.optional(__S(10, __c1, 2)),
        }),
      ).annotate({
        identifier: "PromptModelInferenceConfiguration",
      });
    case 4:
      return S.Union([/*@__PURE__*/ S.Struct({ text: __S(99, __c12, 3) })]);
    case 5:
      return S.Record(S.String, /*@__PURE__*/ S.Any.pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          modelArn: S.String,
          additionalModelRequestFields: S.optional(__S(101, __c12, 5)),
        }),
      ).annotate({
        identifier: "VectorSearchBedrockRerankingModelConfiguration",
      });
    case 7:
      return S.suspend(() => S.Struct({ fieldName: S.String })).annotate({
        identifier: "FieldForReranking",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(103, __c12, 7));
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ fieldsToInclude: __S(104, __c13, 0) }),
        /*@__PURE__*/ S.Struct({ fieldsToExclude: __S(104, __c13, 0) }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          selectionMode: S.String,
          selectiveModeConfiguration: S.optional(__S(105, __c13, 1)),
        }),
      ).annotate({
        identifier: "MetadataConfigurationForReranking",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          modelConfiguration: __S(102, __c12, 6),
          numberOfRerankedResults: S.optional(S.Number),
          metadataConfiguration: S.optional(__S(106, __c13, 2)),
        }),
      ).annotate({
        identifier: "VectorSearchBedrockRerankingConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          bedrockRerankingConfiguration: S.optional(__S(107, __c13, 3)),
        }),
      ).annotate({
        identifier: "VectorSearchRerankingConfiguration",
      });
    case 5:
      return S.suspend(() => S.Struct({ latency: S.optional(S.String) })).annotate({
        identifier: "PerformanceConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          promptTemplate: S.optional(__S(98, __c12, 2)),
          inferenceConfig: S.optional(__S(100, __c12, 4)),
          additionalModelRequestFields: S.optional(__S(101, __c12, 5)),
          performanceConfig: S.optional(__S(109, __c13, 5)),
        }),
      ).annotate({
        identifier: "KnowledgeBaseOrchestrationConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String,
          modelId: S.optional(S.String),
          guardrailConfiguration: S.optional(__S(15, __c1, 7)),
          numberOfResults: S.optional(S.Number),
          promptTemplate: S.optional(__S(98, __c12, 2)),
          inferenceConfiguration: S.optional(__S(100, __c12, 4)),
          rerankingConfiguration: S.optional(__S(108, __c13, 4)),
          orchestrationConfiguration: S.optional(__S(110, __c13, 6)),
        }),
      ).annotate({
        identifier: "KnowledgeBaseFlowNodeConfiguration",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ name: S.String, expression: S.optional(SensitiveString) }),
      ).annotate({ identifier: "FlowCondition" });
    case 1:
      return S.Array(__S(112, __c14, 0));
    case 2:
      return S.suspend(() => S.Struct({ conditions: __S(113, __c14, 1) })).annotate({
        identifier: "ConditionFlowNodeConfiguration",
      });
    case 3:
      return S.suspend(() => S.Struct({ botAliasArn: S.String, localeId: S.String })).annotate({
        identifier: "LexFlowNodeConfiguration",
      });
    case 4:
      return S.suspend(() => S.Struct({ promptArn: S.String })).annotate({
        identifier: "PromptFlowNodeResourceConfiguration",
      });
    case 5:
      return S.suspend(() => S.Struct({ type: S.String })).annotate({
        identifier: "CachePointBlock",
      });
    case 6:
      return S.suspend(() => S.Struct({ name: S.optional(S.String) })).annotate({
        identifier: "PromptInputVariable",
      });
    case 7:
      return S.Array(__S(118, __c14, 6));
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          text: SensitiveString,
          cachePoint: S.optional(__S(117, __c14, 5)),
          inputVariables: S.optional(__S(119, __c14, 7)),
        }),
      ).annotate({
        identifier: "TextPromptTemplateConfiguration",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ text: S.String }),
        /*@__PURE__*/ S.Struct({ cachePoint: __S(117, __c14, 5) }),
      ]);
    case 2:
      return S.Array(__S(121, __c15, 1));
    case 3:
      return S.suspend(() => S.Struct({ role: S.String, content: __S(122, __c15, 2) })).annotate({
        identifier: "Message",
      });
    case 4:
      return S.Array(__S(123, __c15, 3));
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ json: S.Any })]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          inputSchema: __S(125, __c15, 5),
          strict: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ToolSpecification" });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ toolSpec: __S(126, __c15, 6) }),
        /*@__PURE__*/ S.Struct({ cachePoint: __S(117, __c14, 5) }),
      ]);
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(127, __c15, 7));
    case 1:
      return S.suspend(() => S.Struct({ name: S.String })).annotate({
        identifier: "SpecificToolChoice",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ auto: __S(46, __c5, 6) }),
        /*@__PURE__*/ S.Struct({ any: __S(46, __c5, 6) }),
        /*@__PURE__*/ S.Struct({ tool: __S(129, __c16, 1) }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({ tools: __S(128, __c16, 0), toolChoice: S.optional(__S(130, __c16, 2)) }),
      ).annotate({ identifier: "ToolConfiguration" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          messages: __S(124, __c15, 4),
          system: S.optional(__S(122, __c15, 2)),
          inputVariables: S.optional(__S(119, __c14, 7)),
          toolConfiguration: S.optional(__S(131, __c16, 3)),
        }),
      ).annotate({
        identifier: "ChatPromptTemplateConfiguration",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ text: __S(120, __c15, 0) }),
        /*@__PURE__*/ S.Struct({ chat: __S(132, __c16, 4) }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          templateType: S.String,
          templateConfiguration: __S(133, __c16, 5),
          modelId: S.String,
          inferenceConfiguration: S.optional(__S(100, __c12, 4)),
          additionalModelRequestFields: S.optional(S.Any),
        }),
      ).annotate({
        identifier: "PromptFlowNodeInlineConfiguration",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ resource: __S(116, __c14, 4) }),
        /*@__PURE__*/ S.Struct({ inline: __S(134, __c16, 6) }),
      ]);
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          sourceConfiguration: __S(135, __c16, 7),
          guardrailConfiguration: S.optional(__S(15, __c1, 7)),
        }),
      ).annotate({
        identifier: "PromptFlowNodeConfiguration",
      });
    case 1:
      return S.suspend(() => S.Struct({ bucketName: S.String })).annotate({
        identifier: "StorageFlowNodeS3Configuration",
      });
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ s3: __S(137, __c17, 1) })]);
    case 3:
      return S.suspend(() => S.Struct({ serviceConfiguration: __S(138, __c17, 2) })).annotate({
        identifier: "StorageFlowNodeConfiguration",
      });
    case 4:
      return S.suspend(() => S.Struct({ agentAliasArn: S.String })).annotate({
        identifier: "AgentFlowNodeConfiguration",
      });
    case 5:
      return S.suspend(() => S.Struct({ code: SensitiveString, language: S.String })).annotate({
        identifier: "InlineCodeFlowNodeConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          definition: S.suspend((): S.Schema<FlowDefinition> => __S(156, __c19, 4)).annotate({
            identifier: "FlowDefinition",
          }),
        }),
      ).annotate({
        identifier: "LoopFlowNodeConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ continueCondition: __S(112, __c14, 0), maxIterations: S.optional(S.Number) }),
      ).annotate({
        identifier: "LoopControllerFlowNodeConfiguration",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          input: __S(46, __c5, 6) as any as S.Schema<InputFlowNodeConfiguration>,
        }),
        /*@__PURE__*/ S.Struct({
          output: __S(46, __c5, 6) as any as S.Schema<OutputFlowNodeConfiguration>,
        }),
        /*@__PURE__*/ S.Struct({ knowledgeBase: __S(111, __c13, 7) }),
        /*@__PURE__*/ S.Struct({ condition: __S(114, __c14, 2) }),
        /*@__PURE__*/ S.Struct({ lex: __S(115, __c14, 3) }),
        /*@__PURE__*/ S.Struct({ prompt: __S(136, __c17, 0) }),
        /*@__PURE__*/ S.Struct({ lambdaFunction: __S(82, __c10, 2) }),
        /*@__PURE__*/ S.Struct({ storage: __S(139, __c17, 3) }),
        /*@__PURE__*/ S.Struct({ agent: __S(140, __c17, 4) }),
        /*@__PURE__*/ S.Struct({ retrieval: __S(139, __c17, 3) }),
        /*@__PURE__*/ S.Struct({ iterator: __S(46, __c5, 6) }),
        /*@__PURE__*/ S.Struct({ collector: __S(46, __c5, 6) }),
        /*@__PURE__*/ S.Struct({ inlineCode: __S(141, __c17, 5) }),
        /*@__PURE__*/ S.Struct({
          loop: /*@__PURE__*/ S.suspend((): S.Schema<LoopFlowNodeConfiguration> =>
            __S(142, __c17, 6),
          ).annotate({
            identifier: "LoopFlowNodeConfiguration",
          }),
        }),
        /*@__PURE__*/ S.Struct({ loopInput: __S(46, __c5, 6) }),
        /*@__PURE__*/ S.Struct({ loopController: __S(143, __c17, 7) }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          type: S.String,
          expression: SensitiveString,
          category: S.optional(S.String),
        }),
      ).annotate({ identifier: "FlowNodeInput" });
    case 2:
      return S.Array(__S(145, __c18, 1));
    case 3:
      return S.suspend(() => S.Struct({ name: S.String, type: S.String })).annotate({
        identifier: "FlowNodeOutput",
      });
    case 4:
      return S.Array(__S(147, __c18, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          type: S.String,
          configuration: S.optional(
            S.suspend(() => __S(144, __c18, 0)).annotate({
              identifier: "FlowNodeConfiguration",
            }),
          ),
          inputs: S.optional(__S(146, __c18, 2)),
          outputs: S.optional(__S(148, __c18, 4)),
        }),
      ).annotate({ identifier: "FlowNode" });
    case 6:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<FlowNode> => __S(149, __c18, 5)).annotate({
          identifier: "FlowNode",
        }),
      );
    case 7:
      return S.suspend(() => S.Struct({ sourceOutput: S.String, targetInput: S.String })).annotate({
        identifier: "FlowDataConnectionConfiguration",
      });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ condition: S.String })).annotate({
        identifier: "FlowConditionalConnectionConfiguration",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ data: __S(151, __c18, 7) }),
        /*@__PURE__*/ S.Struct({ conditional: __S(152, __c19, 0) }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          name: S.String,
          source: S.String,
          target: S.String,
          configuration: S.optional(__S(153, __c19, 1)),
        }),
      ).annotate({ identifier: "FlowConnection" });
    case 3:
      return S.Array(__S(154, __c19, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          nodes: S.optional(
            S.suspend(() => __S(150, __c18, 6)).annotate({ identifier: "FlowNodes" }),
          ),
          connections: S.optional(__S(155, __c19, 3)),
        }),
      ).annotate({ identifier: "FlowDefinition" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          executionRoleArn: S.String,
          customerEncryptionKeyArn: S.optional(S.String),
          definition: S.optional(__S(156, __c19, 4)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(9, __c1, 1)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/flows/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateFlowRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          executionRoleArn: S.String,
          customerEncryptionKeyArn: S.optional(S.String),
          id: S.String,
          arn: S.String,
          status: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          version: S.String,
          definition: S.optional(__S(156, __c19, 4)),
        }),
      ).annotate({ identifier: "CreateFlowResponse" });
    case 7:
      return S.suspend(() => S.Struct({ flowVersion: S.optional(S.String) })).annotate({
        identifier: "FlowAliasRoutingConfigurationListItem",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(159, __c19, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ type: S.String, maxConcurrency: S.optional(S.Number) }),
      ).annotate({
        identifier: "FlowAliasConcurrencyConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          routingConfiguration: __S(160, __c20, 0),
          concurrencyConfiguration: S.optional(__S(161, __c20, 1)),
          flowIdentifier: S.String.pipe(T.HttpLabel("flowIdentifier")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(9, __c1, 1)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/flows/{flowIdentifier}/aliases" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateFlowAliasRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          routingConfiguration: __S(160, __c20, 0),
          concurrencyConfiguration: S.optional(__S(161, __c20, 1)),
          flowId: S.String,
          id: S.String,
          arn: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "CreateFlowAliasResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          flowIdentifier: S.String.pipe(T.HttpLabel("flowIdentifier")),
          description: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/flows/{flowIdentifier}/versions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateFlowVersionRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          executionRoleArn: S.String,
          customerEncryptionKeyArn: S.optional(S.String),
          id: S.String,
          arn: S.String,
          status: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          version: S.String,
          definition: S.optional(__S(156, __c19, 4)),
        }),
      ).annotate({
        identifier: "CreateFlowVersionResponse",
      });
    case 6:
      return S.suspend(() => S.Struct({ fixedLengthDuration: S.Number })).annotate({
        identifier: "AudioSegmentationConfiguration",
      });
    case 7:
      return S.suspend(() => S.Struct({ segmentationConfiguration: __S(166, __c20, 6) })).annotate({
        identifier: "AudioConfiguration",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(167, __c20, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          dimensions: S.optional(S.Number),
          embeddingDataType: S.optional(S.String),
          audio: S.optional(__S(168, __c21, 0)),
          video: S.optional(__S(168, __c21, 0)),
          modelConfiguration: S.optional(S.Any),
        }),
      ).annotate({
        identifier: "BedrockEmbeddingModelConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          bedrockEmbeddingModelConfiguration: S.optional(__S(169, __c21, 1)),
        }),
      ).annotate({
        identifier: "EmbeddingModelConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ type: S.String, s3Location: S.optional(__S(80, __c10, 0)) }),
      ).annotate({
        identifier: "SupplementalDataStorageLocation",
      });
    case 4:
      return S.Array(__S(171, __c21, 3));
    case 5:
      return S.suspend(() => S.Struct({ storageLocations: __S(172, __c21, 4) })).annotate({
        identifier: "SupplementalDataStorageConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          embeddingModelArn: S.String,
          embeddingModelConfiguration: S.optional(__S(170, __c21, 2)),
          supplementalDataStorageConfiguration: S.optional(__S(173, __c21, 5)),
        }),
      ).annotate({
        identifier: "VectorKnowledgeBaseConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          embeddingModelType: S.optional(S.String),
          embeddingModelArn: S.optional(S.String),
          embeddingModelConfiguration: S.optional(__S(170, __c21, 2)),
          serverSideEncryptionConfiguration: S.optional(__S(73, __c9, 1)),
          supplementalDataStorageConfiguration: S.optional(__S(173, __c21, 5)),
        }),
      ).annotate({
        identifier: "ManagedKnowledgeBaseConfiguration",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ kendraIndexArn: S.String })).annotate({
        identifier: "KendraKnowledgeBaseConfiguration",
      });
    case 1:
      return S.suspend(() => S.Struct({ tableNames: __S(10, __c1, 2) })).annotate({
        identifier: "RedshiftQueryEngineAwsDataCatalogStorageConfiguration",
      });
    case 2:
      return S.suspend(() => S.Struct({ databaseName: S.String })).annotate({
        identifier: "RedshiftQueryEngineRedshiftStorageConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          awsDataCatalogConfiguration: S.optional(__S(177, __c22, 1)),
          redshiftConfiguration: S.optional(__S(178, __c22, 2)),
        }),
      ).annotate({
        identifier: "RedshiftQueryEngineStorageConfiguration",
      });
    case 4:
      return S.Array(__S(179, __c22, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          usernamePasswordSecretArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RedshiftServerlessAuthConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          workgroupArn: S.String,
          authConfiguration: __S(181, __c22, 5),
        }),
      ).annotate({
        identifier: "RedshiftServerlessConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          databaseUser: S.optional(S.String),
          usernamePasswordSecretArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RedshiftProvisionedAuthConfiguration",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          clusterIdentifier: S.String,
          authConfiguration: __S(183, __c22, 7),
        }),
      ).annotate({
        identifier: "RedshiftProvisionedConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          serverlessConfiguration: S.optional(__S(182, __c22, 6)),
          provisionedConfiguration: S.optional(__S(184, __c23, 0)),
        }),
      ).annotate({
        identifier: "RedshiftQueryEngineConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          description: S.optional(S.String),
          inclusion: S.optional(S.String),
        }),
      ).annotate({ identifier: "QueryGenerationColumn" });
    case 3:
      return S.Array(__S(186, __c23, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          inclusion: S.optional(S.String),
          columns: S.optional(__S(187, __c23, 3)),
        }),
      ).annotate({ identifier: "QueryGenerationTable" });
    case 5:
      return S.Array(__S(188, __c23, 4));
    case 6:
      return S.suspend(() => S.Struct({ naturalLanguage: S.String, sql: S.String })).annotate({
        identifier: "CuratedQuery",
      });
    case 7:
      return S.Array(__S(190, __c23, 6));
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          tables: S.optional(__S(189, __c23, 5)),
          curatedQueries: S.optional(__S(191, __c23, 7)),
        }),
      ).annotate({ identifier: "QueryGenerationContext" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          executionTimeoutSeconds: S.optional(S.Number),
          generationContext: S.optional(__S(192, __c24, 0)),
        }),
      ).annotate({
        identifier: "QueryGenerationConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          storageConfigurations: __S(180, __c22, 4),
          queryEngineConfiguration: __S(185, __c23, 1),
          queryGenerationConfiguration: S.optional(__S(193, __c24, 1)),
        }),
      ).annotate({ identifier: "RedshiftConfiguration" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          redshiftConfiguration: S.optional(__S(194, __c24, 2)),
        }),
      ).annotate({
        identifier: "SqlKnowledgeBaseConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          vectorKnowledgeBaseConfiguration: S.optional(__S(174, __c21, 6)),
          managedKnowledgeBaseConfiguration: S.optional(__S(175, __c21, 7)),
          kendraKnowledgeBaseConfiguration: S.optional(__S(176, __c22, 0)),
          sqlKnowledgeBaseConfiguration: S.optional(__S(195, __c24, 3)),
        }),
      ).annotate({
        identifier: "KnowledgeBaseConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ vectorField: S.String, textField: S.String, metadataField: S.String }),
      ).annotate({
        identifier: "OpenSearchServerlessFieldMapping",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          collectionArn: S.String,
          vectorIndexName: S.String,
          fieldMapping: __S(197, __c24, 5),
        }),
      ).annotate({
        identifier: "OpenSearchServerlessConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          domainEndpoint: S.String,
          domainArn: S.String,
          vectorIndexName: SensitiveString,
          fieldMapping: __S(197, __c24, 5),
        }),
      ).annotate({
        identifier: "OpenSearchManagedClusterConfiguration",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ textField: S.String, metadataField: S.String })).annotate({
        identifier: "PineconeFieldMapping",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          connectionString: S.String,
          credentialsSecretArn: S.String,
          namespace: S.optional(S.String),
          fieldMapping: __S(200, __c25, 0),
        }),
      ).annotate({ identifier: "PineconeConfiguration" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          endpoint: S.String,
          vectorIndexName: S.String,
          credentialsSecretArn: S.String,
          fieldMapping: __S(197, __c24, 5),
        }),
      ).annotate({
        identifier: "RedisEnterpriseCloudConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          primaryKeyField: S.String,
          vectorField: S.String,
          textField: S.String,
          metadataField: S.String,
          customMetadataField: S.optional(S.String),
        }),
      ).annotate({ identifier: "RdsFieldMapping" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String,
          credentialsSecretArn: S.String,
          databaseName: S.String,
          tableName: S.String,
          fieldMapping: __S(203, __c25, 3),
        }),
      ).annotate({ identifier: "RdsConfiguration" });
    case 5:
      return S.suspend(() =>
        S.Struct({ vectorField: S.String, textField: S.String, metadataField: S.String }),
      ).annotate({ identifier: "MongoDbAtlasFieldMapping" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          endpoint: S.String,
          databaseName: S.String,
          collectionName: S.String,
          vectorIndexName: S.String,
          credentialsSecretArn: S.String,
          fieldMapping: __S(205, __c25, 5),
          endpointServiceName: S.optional(S.String),
          textIndexName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "MongoDbAtlasConfiguration",
      });
    case 7:
      return S.suspend(() => S.Struct({ textField: S.String, metadataField: S.String })).annotate({
        identifier: "NeptuneAnalyticsFieldMapping",
      });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ graphArn: SensitiveString, fieldMapping: __S(207, __c25, 7) }),
      ).annotate({
        identifier: "NeptuneAnalyticsConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          vectorBucketArn: S.optional(SensitiveString),
          indexArn: S.optional(SensitiveString),
          indexName: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "S3VectorsConfiguration" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          opensearchServerlessConfiguration: S.optional(__S(198, __c24, 6)),
          opensearchManagedClusterConfiguration: S.optional(__S(199, __c24, 7)),
          pineconeConfiguration: S.optional(__S(201, __c25, 1)),
          redisEnterpriseCloudConfiguration: S.optional(__S(202, __c25, 2)),
          rdsConfiguration: S.optional(__S(204, __c25, 4)),
          mongoDbAtlasConfiguration: S.optional(__S(206, __c25, 6)),
          neptuneAnalyticsConfiguration: S.optional(__S(208, __c26, 0)),
          s3VectorsConfiguration: S.optional(__S(209, __c26, 1)),
        }),
      ).annotate({ identifier: "StorageConfiguration" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          name: S.String,
          description: S.optional(S.String),
          roleArn: S.String,
          knowledgeBaseConfiguration: __S(196, __c24, 4),
          storageConfiguration: S.optional(__S(210, __c26, 2)),
          tags: S.optional(__S(9, __c1, 1)),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/knowledgebases/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateKnowledgeBaseRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String,
          name: S.String,
          knowledgeBaseArn: S.String,
          description: S.optional(S.String),
          roleArn: S.String,
          knowledgeBaseConfiguration: __S(196, __c24, 4),
          storageConfiguration: S.optional(__S(210, __c26, 2)),
          status: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          failureReasons: S.optional(__S(10, __c1, 2)),
        }),
      ).annotate({ identifier: "KnowledgeBase" });
    case 5:
      return S.suspend(() => S.Struct({ knowledgeBase: __S(212, __c26, 4) })).annotate({
        identifier: "CreateKnowledgeBaseResponse",
      });
    case 6:
      return S.suspend(() => S.Struct({ key: SensitiveString, value: SensitiveString })).annotate({
        identifier: "PromptMetadataEntry",
      });
    case 7:
      return S.Array(__S(214, __c26, 6));
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ agentIdentifier: S.String })).annotate({
        identifier: "PromptAgentResource",
      });
    case 1:
      return S.Union([/*@__PURE__*/ S.Struct({ agent: __S(216, __c27, 0) })]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          templateType: S.String,
          templateConfiguration: __S(133, __c16, 5),
          modelId: S.optional(S.String),
          inferenceConfiguration: S.optional(__S(100, __c12, 4)),
          metadata: S.optional(__S(215, __c26, 7)),
          additionalModelRequestFields: S.optional(S.Any),
          genAiResource: S.optional(__S(217, __c27, 1)),
        }),
      ).annotate({ identifier: "PromptVariant" });
    case 3:
      return S.Array(__S(218, __c27, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          customerEncryptionKeyArn: S.optional(S.String),
          defaultVariant: S.optional(S.String),
          variants: S.optional(__S(219, __c27, 3)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(9, __c1, 1)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/prompts/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreatePromptRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          customerEncryptionKeyArn: S.optional(S.String),
          defaultVariant: S.optional(S.String),
          variants: S.optional(__S(219, __c27, 3)),
          id: S.String,
          arn: S.String,
          version: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "CreatePromptResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          promptIdentifier: S.String.pipe(T.HttpLabel("promptIdentifier")),
          description: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(9, __c1, 1)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/prompts/{promptIdentifier}/versions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreatePromptVersionRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          customerEncryptionKeyArn: S.optional(S.String),
          defaultVariant: S.optional(S.String),
          variants: S.optional(__S(219, __c27, 3)),
          id: S.String,
          arn: S.String,
          version: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "CreatePromptVersionResponse",
      });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          vpcId: S.String,
          subnetIds: __S(10, __c1, 2),
          resourceTarget: S.String,
          port: S.Number,
          protocol: S.String,
          resolutionMode: S.String,
          hostHeader: S.optional(S.String),
          tlsServerName: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/knowledgebases/{knowledgeBaseId}/vpcconfigurations/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateVpcConfigurationRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ vpcConfigurationId: S.String, status: S.String })).annotate(
        {
          identifier: "CreateVpcConfigurationResponse",
        },
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          skipResourceInUseCheck: S.optional(S.Boolean).pipe(T.HttpQuery("skipResourceInUseCheck")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/agents/{agentId}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteAgentRequest" });
    case 3:
      return S.suspend(() => S.Struct({ agentId: S.String, agentStatus: S.String })).annotate({
        identifier: "DeleteAgentResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          agentVersion: S.String.pipe(T.HttpLabel("agentVersion")),
          actionGroupId: S.String.pipe(T.HttpLabel("actionGroupId")),
          skipResourceInUseCheck: S.optional(S.Boolean).pipe(T.HttpQuery("skipResourceInUseCheck")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/agents/{agentId}/agentversions/{agentVersion}/actiongroups/{actionGroupId}/",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAgentActionGroupRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          agentAliasId: S.String.pipe(T.HttpLabel("agentAliasId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/agents/{agentId}/agentaliases/{agentAliasId}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteAgentAliasRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ agentId: S.String, agentAliasId: S.String, agentAliasStatus: S.String }),
      ).annotate({ identifier: "DeleteAgentAliasResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          agentVersion: S.String.pipe(T.HttpLabel("agentVersion")),
          skipResourceInUseCheck: S.optional(S.Boolean).pipe(T.HttpQuery("skipResourceInUseCheck")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/agents/{agentId}/agentversions/{agentVersion}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAgentVersionRequest",
      });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ agentId: S.String, agentVersion: S.String, agentStatus: S.String }),
      ).annotate({
        identifier: "DeleteAgentVersionResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
          dataSourceId: S.String.pipe(T.HttpLabel("dataSourceId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteDataSourceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ knowledgeBaseId: S.String, dataSourceId: S.String, status: S.String }),
      ).annotate({ identifier: "DeleteDataSourceResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          flowIdentifier: S.String.pipe(T.HttpLabel("flowIdentifier")),
          skipResourceInUseCheck: S.optional(S.Boolean).pipe(T.HttpQuery("skipResourceInUseCheck")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/flows/{flowIdentifier}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteFlowRequest" });
    case 4:
      return S.suspend(() => S.Struct({ id: S.String })).annotate({
        identifier: "DeleteFlowResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          flowIdentifier: S.String.pipe(T.HttpLabel("flowIdentifier")),
          aliasIdentifier: S.String.pipe(T.HttpLabel("aliasIdentifier")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/flows/{flowIdentifier}/aliases/{aliasIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteFlowAliasRequest" });
    case 6:
      return S.suspend(() => S.Struct({ flowId: S.String, id: S.String })).annotate({
        identifier: "DeleteFlowAliasResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          flowIdentifier: S.String.pipe(T.HttpLabel("flowIdentifier")),
          flowVersion: S.String.pipe(T.HttpLabel("flowVersion")),
          skipResourceInUseCheck: S.optional(S.Boolean).pipe(T.HttpQuery("skipResourceInUseCheck")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/flows/{flowIdentifier}/versions/{flowVersion}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteFlowVersionRequest" });
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ id: S.String, version: S.String })).annotate({
        identifier: "DeleteFlowVersionResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/knowledgebases/{knowledgeBaseId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteKnowledgeBaseRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ knowledgeBaseId: S.String, status: S.String })).annotate({
        identifier: "DeleteKnowledgeBaseResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          dataSourceType: S.String,
          s3: S.optional(__S(80, __c10, 0)),
          custom: S.optional(__S(236, __c29, 4)),
        }),
      ).annotate({ identifier: "DocumentIdentifier" });
    case 4:
      return S.Array(__S(243, __c30, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
          dataSourceId: S.String.pipe(T.HttpLabel("dataSourceId")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          documentIdentifiers: __S(244, __c30, 4),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/documents/deleteDocuments",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteKnowledgeBaseDocumentsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String,
          dataSourceId: S.String,
          status: S.String,
          identifier: __S(243, __c30, 3),
          statusReason: S.optional(S.String),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "KnowledgeBaseDocumentDetail",
      });
    case 7:
      return S.Array(__S(246, __c30, 6));
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ documentDetails: S.optional(__S(247, __c30, 7)) }),
      ).annotate({
        identifier: "DeleteKnowledgeBaseDocumentsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          promptIdentifier: S.String.pipe(T.HttpLabel("promptIdentifier")),
          promptVersion: S.optional(S.String).pipe(T.HttpQuery("promptVersion")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/prompts/{promptIdentifier}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeletePromptRequest" });
    case 2:
      return S.suspend(() => S.Struct({ id: S.String, version: S.optional(S.String) })).annotate({
        identifier: "DeletePromptResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          expectedRevisionId: S.optional(S.String).pipe(T.HttpQuery("expectedRevisionId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/resourcepolicy/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteResourcePolicyRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, revisionId: S.optional(S.String) }),
      ).annotate({
        identifier: "DeleteResourcePolicyResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
          vpcConfigurationId: S.String.pipe(T.HttpLabel("vpcConfigurationId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/knowledgebases/{knowledgeBaseId}/vpcconfigurations/{vpcConfigurationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteVpcConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          agentVersion: S.String.pipe(T.HttpLabel("agentVersion")),
          collaboratorId: S.String.pipe(T.HttpLabel("collaboratorId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/agents/{agentId}/agentversions/{agentVersion}/agentcollaborators/{collaboratorId}/",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateAgentCollaboratorRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DisassociateAgentCollaboratorResponse",
      });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          agentVersion: S.String.pipe(T.HttpLabel("agentVersion")),
          knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/agents/{agentId}/agentversions/{agentVersion}/knowledgebases/{knowledgeBaseId}/",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateAgentKnowledgeBaseRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ agentId: S.String.pipe(T.HttpLabel("agentId")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/agents/{agentId}/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetAgentRequest" });
    case 2:
      return S.suspend(() => S.Struct({ agent: __S(20, __c2, 4) })).annotate({
        identifier: "GetAgentResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          agentVersion: S.String.pipe(T.HttpLabel("agentVersion")),
          actionGroupId: S.String.pipe(T.HttpLabel("actionGroupId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/agents/{agentId}/agentversions/{agentVersion}/actiongroups/{actionGroupId}/",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetAgentActionGroupRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          agentAliasId: S.String.pipe(T.HttpLabel("agentAliasId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/agents/{agentId}/agentaliases/{agentAliasId}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetAgentAliasRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          agentVersion: S.String.pipe(T.HttpLabel("agentVersion")),
          collaboratorId: S.String.pipe(T.HttpLabel("collaboratorId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/agents/{agentId}/agentversions/{agentVersion}/agentcollaborators/{collaboratorId}/",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetAgentCollaboratorRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          agentVersion: S.String.pipe(T.HttpLabel("agentVersion")),
          knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/agents/{agentId}/agentversions/{agentVersion}/knowledgebases/{knowledgeBaseId}/",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetAgentKnowledgeBaseRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          agentVersion: S.String.pipe(T.HttpLabel("agentVersion")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/agents/{agentId}/agentversions/{agentVersion}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetAgentVersionRequest" });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String,
          agentName: S.String,
          agentArn: S.String,
          version: S.String,
          instruction: S.optional(SensitiveString),
          agentStatus: S.String,
          foundationModel: S.optional(S.String),
          description: S.optional(S.String),
          idleSessionTTLInSeconds: S.Number,
          agentResourceRoleArn: S.String,
          customerEncryptionKeyArn: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          failureReasons: S.optional(__S(10, __c1, 2)),
          recommendedActions: S.optional(__S(10, __c1, 2)),
          promptOverrideConfiguration: S.optional(__S(14, __c1, 6)),
          guardrailConfiguration: S.optional(__S(15, __c1, 7)),
          memoryConfiguration: S.optional(__S(18, __c2, 2)),
          agentCollaboration: S.optional(S.String),
        }),
      ).annotate({ identifier: "AgentVersion" });
    case 1:
      return S.suspend(() => S.Struct({ agentVersion: __S(264, __c33, 0) })).annotate({
        identifier: "GetAgentVersionResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
          dataSourceId: S.String.pipe(T.HttpLabel("dataSourceId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetDataSourceRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          flowIdentifier: S.String.pipe(T.HttpLabel("flowIdentifier")),
          includedData: S.optional(S.String).pipe(T.HttpQuery("includedData")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/flows/{flowIdentifier}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetFlowRequest" });
    case 4:
      return S.suspend(() => S.Struct({ connection: S.String })).annotate({
        identifier: "CyclicConnectionFlowValidationDetails",
      });
    case 5:
      return S.suspend(() => S.Struct({ source: S.String, target: S.String })).annotate({
        identifier: "DuplicateConnectionsFlowValidationDetails",
      });
    case 6:
      return S.suspend(() => S.Struct({ node: S.String, expression: SensitiveString })).annotate({
        identifier: "DuplicateConditionExpressionFlowValidationDetails",
      });
    case 7:
      return S.suspend(() => S.Struct({ node: S.String })).annotate({
        identifier: "UnreachableNodeFlowValidationDetails",
      });
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ node: S.String, condition: S.String, cause: S.String }),
      ).annotate({
        identifier: "MalformedConditionExpressionFlowValidationDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ node: S.String, input: S.String, cause: S.String }),
      ).annotate({
        identifier: "MalformedNodeInputExpressionFlowValidationDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ node: S.String, input: S.String, expectedType: S.String }),
      ).annotate({
        identifier: "MismatchedNodeInputTypeFlowValidationDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ node: S.String, output: S.String, expectedType: S.String }),
      ).annotate({
        identifier: "MismatchedNodeOutputTypeFlowValidationDetails",
      });
    case 4:
      return S.suspend(() => S.Struct({ node: S.String, input: S.String })).annotate({
        identifier: "MissingNodeInputFlowValidationDetails",
      });
    case 5:
      return S.suspend(() => S.Struct({ node: S.String, output: S.String })).annotate({
        identifier: "MissingNodeOutputFlowValidationDetails",
      });
    case 6:
      return S.suspend(() => S.Struct({ loopNode: S.String })).annotate({
        identifier: "MissingLoopInputNodeFlowValidationDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          node: S.String,
          incompatibleNodeType: S.String,
          incompatibleNodeName: S.String,
        }),
      ).annotate({
        identifier: "LoopIncompatibleNodeTypeFlowValidationDetails",
      });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ connection: S.String, source: S.String, target: S.String }),
      ).annotate({
        identifier: "InvalidLoopBoundaryFlowValidationDetails",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ cyclicConnection: __S(268, __c33, 4) }),
        /*@__PURE__*/ S.Struct({ duplicateConnections: __S(269, __c33, 5) }),
        /*@__PURE__*/ S.Struct({
          duplicateConditionExpression: __S(270, __c33, 6),
        }),
        /*@__PURE__*/ S.Struct({ unreachableNode: __S(271, __c33, 7) }),
        /*@__PURE__*/ S.Struct({
          unknownConnectionSource: __S(268, __c33, 4),
        }),
        /*@__PURE__*/ S.Struct({
          unknownConnectionSourceOutput: __S(268, __c33, 4),
        }),
        /*@__PURE__*/ S.Struct({
          unknownConnectionTarget: __S(268, __c33, 4),
        }),
        /*@__PURE__*/ S.Struct({
          unknownConnectionTargetInput: __S(268, __c33, 4),
        }),
        /*@__PURE__*/ S.Struct({
          unknownConnectionCondition: __S(268, __c33, 4),
        }),
        /*@__PURE__*/ S.Struct({
          malformedConditionExpression: __S(272, __c34, 0),
        }),
        /*@__PURE__*/ S.Struct({
          malformedNodeInputExpression: __S(273, __c34, 1),
        }),
        /*@__PURE__*/ S.Struct({
          mismatchedNodeInputType: __S(274, __c34, 2),
        }),
        /*@__PURE__*/ S.Struct({
          mismatchedNodeOutputType: __S(275, __c34, 3),
        }),
        /*@__PURE__*/ S.Struct({
          incompatibleConnectionDataType: __S(268, __c33, 4),
        }),
        /*@__PURE__*/ S.Struct({
          missingConnectionConfiguration: __S(268, __c33, 4),
        }),
        /*@__PURE__*/ S.Struct({
          missingDefaultCondition: __S(271, __c33, 7),
        }),
        /*@__PURE__*/ S.Struct({ missingEndingNodes: __S(255, __c31, 7) }),
        /*@__PURE__*/ S.Struct({
          missingNodeConfiguration: __S(271, __c33, 7),
        }),
        /*@__PURE__*/ S.Struct({ missingNodeInput: __S(276, __c34, 4) }),
        /*@__PURE__*/ S.Struct({ missingNodeOutput: __S(277, __c34, 5) }),
        /*@__PURE__*/ S.Struct({ missingStartingNodes: __S(255, __c31, 7) }),
        /*@__PURE__*/ S.Struct({
          multipleNodeInputConnections: __S(276, __c34, 4),
        }),
        /*@__PURE__*/ S.Struct({ unfulfilledNodeInput: __S(276, __c34, 4) }),
        /*@__PURE__*/ S.Struct({
          unsatisfiedConnectionConditions: __S(268, __c33, 4),
        }),
        /*@__PURE__*/ S.Struct({ unspecified: __S(255, __c31, 7) }),
        /*@__PURE__*/ S.Struct({ unknownNodeInput: __S(276, __c34, 4) }),
        /*@__PURE__*/ S.Struct({ unknownNodeOutput: __S(277, __c34, 5) }),
        /*@__PURE__*/ S.Struct({ missingLoopInputNode: __S(278, __c34, 6) }),
        /*@__PURE__*/ S.Struct({
          missingLoopControllerNode: __S(278, __c34, 6),
        }),
        /*@__PURE__*/ S.Struct({
          multipleLoopInputNodes: __S(278, __c34, 6),
        }),
        /*@__PURE__*/ S.Struct({
          multipleLoopControllerNodes: __S(278, __c34, 6),
        }),
        /*@__PURE__*/ S.Struct({
          loopIncompatibleNodeType: __S(279, __c34, 7),
        }),
        /*@__PURE__*/ S.Struct({ invalidLoopBoundary: __S(280, __c35, 0) }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          message: S.String,
          severity: S.String,
          details: S.optional(__S(281, __c35, 1)),
          type: S.optional(S.String),
        }),
      ).annotate({ identifier: "FlowValidation" });
    case 3:
      return S.Array(__S(282, __c35, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          executionRoleArn: S.String,
          customerEncryptionKeyArn: S.optional(S.String),
          id: S.String,
          arn: S.String,
          status: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          version: S.String,
          definition: S.optional(__S(156, __c19, 4)),
          validations: S.optional(__S(283, __c35, 3)),
        }),
      ).annotate({ identifier: "GetFlowResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          flowIdentifier: S.String.pipe(T.HttpLabel("flowIdentifier")),
          aliasIdentifier: S.String.pipe(T.HttpLabel("aliasIdentifier")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/flows/{flowIdentifier}/aliases/{aliasIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetFlowAliasRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          flowIdentifier: S.String.pipe(T.HttpLabel("flowIdentifier")),
          flowVersion: S.String.pipe(T.HttpLabel("flowVersion")),
          includedData: S.optional(S.String).pipe(T.HttpQuery("includedData")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/flows/{flowIdentifier}/versions/{flowVersion}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetFlowVersionRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          executionRoleArn: S.String,
          customerEncryptionKeyArn: S.optional(S.String),
          id: S.String,
          arn: S.String,
          status: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          version: S.String,
          definition: S.optional(__S(156, __c19, 4)),
        }),
      ).annotate({ identifier: "GetFlowVersionResponse" });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
          dataSourceId: S.String.pipe(T.HttpLabel("dataSourceId")),
          ingestionJobId: S.String.pipe(T.HttpLabel("ingestionJobId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/ingestionjobs/{ingestionJobId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetIngestionJobRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          numberOfDocumentsScanned: S.optional(S.Number),
          numberOfMetadataDocumentsScanned: S.optional(S.Number),
          numberOfNewDocumentsIndexed: S.optional(S.Number),
          numberOfModifiedDocumentsIndexed: S.optional(S.Number),
          numberOfMetadataDocumentsModified: S.optional(S.Number),
          numberOfDocumentsDeleted: S.optional(S.Number),
          numberOfDocumentsFailed: S.optional(S.Number),
          numberOfDocumentsSkipped: S.optional(S.Number),
        }),
      ).annotate({ identifier: "IngestionJobStatistics" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String,
          dataSourceId: S.String,
          ingestionJobId: S.String,
          description: S.optional(S.String),
          status: S.String,
          statistics: S.optional(__S(289, __c36, 1)),
          failureReasons: S.optional(__S(10, __c1, 2)),
          startedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          textReadyAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "IngestionJob" });
    case 3:
      return S.suspend(() => S.Struct({ ingestionJob: __S(290, __c36, 2) })).annotate({
        identifier: "GetIngestionJobResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/knowledgebases/{knowledgeBaseId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetKnowledgeBaseRequest" });
    case 5:
      return S.suspend(() => S.Struct({ knowledgeBase: __S(212, __c26, 4) })).annotate({
        identifier: "GetKnowledgeBaseResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
          dataSourceId: S.String.pipe(T.HttpLabel("dataSourceId")),
          documentIdentifiers: __S(244, __c30, 4),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/documents/getDocuments",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetKnowledgeBaseDocumentsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          promptIdentifier: S.String.pipe(T.HttpLabel("promptIdentifier")),
          promptVersion: S.optional(S.String).pipe(T.HttpQuery("promptVersion")),
          includedData: S.optional(S.String).pipe(T.HttpQuery("includedData")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/prompts/{promptIdentifier}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetPromptRequest" });
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/resourcepolicy/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetResourcePolicyRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, policy: S.String, revisionId: S.String }),
      ).annotate({
        identifier: "GetResourcePolicyResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
          vpcConfigurationId: S.String.pipe(T.HttpLabel("vpcConfigurationId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/knowledgebases/{knowledgeBaseId}/vpcconfigurations/{vpcConfigurationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetVpcConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          vpcConfigurationId: S.String,
          status: S.String,
          statusMessage: S.optional(S.String),
          vpcId: S.String,
          subnetIds: __S(10, __c1, 2),
          resourceTarget: S.String,
          port: S.Number,
          protocol: S.String,
          resolutionMode: S.String,
          hostHeader: S.optional(S.String),
          tlsServerName: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "VpcConfiguration" });
    case 4:
      return S.suspend(() => S.Struct({ vpcConfiguration: __S(299, __c37, 3) })).annotate({
        identifier: "GetVpcConfigurationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          numberValue: S.optional(S.Number),
          booleanValue: S.optional(S.Boolean),
          stringValue: S.optional(SensitiveString),
          stringListValue: S.optional(__S(52, __c6, 4)),
        }),
      ).annotate({ identifier: "MetadataAttributeValue" });
    case 6:
      return S.suspend(() =>
        S.Struct({ key: SensitiveString, value: __S(301, __c37, 5) }),
      ).annotate({ identifier: "MetadataAttribute" });
    case 7:
      return S.Array(__S(302, __c37, 6));
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ uri: S.String, bucketOwnerAccountId: S.optional(S.String) }),
      ).annotate({ identifier: "CustomS3Location" });
    case 1:
      return S.suspend(() =>
        S.Struct({ name: S.String, type: S.String, access: S.String }),
      ).annotate({
        identifier: "DocumentAccessControlEntry",
      });
    case 2:
      return S.Array(__S(305, __c38, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          inlineAttributes: S.optional(__S(303, __c37, 7)),
          s3Location: S.optional(__S(304, __c38, 0)),
          accessControlList: S.optional(__S(306, __c38, 2)),
        }),
      ).annotate({ identifier: "DocumentMetadata" });
    case 4:
      return S.suspend(() => S.Struct({ mimeType: S.String, data: SensitiveBlob })).annotate({
        identifier: "ByteContentDoc",
      });
    case 5:
      return S.suspend(() => S.Struct({ data: SensitiveString })).annotate({
        identifier: "TextContentDoc",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          byteContent: S.optional(__S(308, __c38, 4)),
          textContent: S.optional(__S(309, __c38, 5)),
        }),
      ).annotate({ identifier: "InlineContent" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          customDocumentIdentifier: __S(236, __c29, 4),
          sourceType: S.String,
          s3Location: S.optional(__S(304, __c38, 0)),
          inlineContent: S.optional(__S(310, __c38, 6)),
        }),
      ).annotate({ identifier: "CustomContent" });
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          dataSourceType: S.String,
          custom: S.optional(__S(311, __c38, 7)),
          s3: S.optional(__S(81, __c10, 1)),
        }),
      ).annotate({ identifier: "DocumentContent" });
    case 1:
      return S.suspend(() =>
        S.Struct({ metadata: S.optional(__S(307, __c38, 3)), content: __S(312, __c39, 0) }),
      ).annotate({ identifier: "KnowledgeBaseDocument" });
    case 2:
      return S.Array(__S(313, __c39, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
          dataSourceId: S.String.pipe(T.HttpLabel("dataSourceId")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          documents: __S(314, __c39, 2),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/documents",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "IngestKnowledgeBaseDocumentsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          agentVersion: S.String.pipe(T.HttpLabel("agentVersion")),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/agents/{agentId}/agentversions/{agentVersion}/actiongroups/",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAgentActionGroupsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          actionGroupId: S.String,
          actionGroupName: S.String,
          actionGroupState: S.String,
          description: S.optional(S.String),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "ActionGroupSummary" });
    case 6:
      return S.Array(__S(317, __c39, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ actionGroupSummaries: __S(318, __c39, 6), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAgentActionGroupsResponse",
      });
  }
}
function __c40(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/agents/{agentId}/agentaliases/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListAgentAliasesRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          agentAliasId: S.String,
          agentAliasName: S.String,
          description: S.optional(S.String),
          routingConfiguration: S.optional(__S(35, __c4, 3)),
          agentAliasStatus: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          aliasInvocationState: S.optional(S.String),
        }),
      ).annotate({ identifier: "AgentAliasSummary" });
    case 2:
      return S.Array(__S(321, __c40, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ agentAliasSummaries: __S(322, __c40, 2), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListAgentAliasesResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          agentVersion: S.String.pipe(T.HttpLabel("agentVersion")),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/agents/{agentId}/agentversions/{agentVersion}/agentcollaborators/",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAgentCollaboratorsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String,
          agentVersion: S.String,
          collaboratorId: S.String,
          agentDescriptor: __S(0, __c0, 0),
          collaborationInstruction: SensitiveString,
          relayConversationHistory: S.String,
          collaboratorName: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "AgentCollaboratorSummary" });
    case 6:
      return S.Array(__S(325, __c40, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          agentCollaboratorSummaries: __S(326, __c40, 6),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAgentCollaboratorsResponse",
      });
  }
}
function __c41(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          agentVersion: S.String.pipe(T.HttpLabel("agentVersion")),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/agents/{agentId}/agentversions/{agentVersion}/knowledgebases/",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAgentKnowledgeBasesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String,
          description: S.optional(S.String),
          knowledgeBaseState: S.String,
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "AgentKnowledgeBaseSummary",
      });
    case 2:
      return S.Array(__S(329, __c41, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          agentKnowledgeBaseSummaries: __S(330, __c41, 2),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAgentKnowledgeBasesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ maxResults: S.optional(S.Number), nextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/agents/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListAgentsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String,
          agentName: S.String,
          agentStatus: S.String,
          description: S.optional(S.String),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          latestAgentVersion: S.optional(S.String),
          guardrailConfiguration: S.optional(__S(15, __c1, 7)),
        }),
      ).annotate({ identifier: "AgentSummary" });
    case 6:
      return S.Array(__S(333, __c41, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ agentSummaries: __S(334, __c41, 6), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListAgentsResponse" });
  }
}
function __c42(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/agents/{agentId}/agentversions/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListAgentVersionsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          agentName: S.String,
          agentStatus: S.String,
          agentVersion: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          description: S.optional(S.String),
          guardrailConfiguration: S.optional(__S(15, __c1, 7)),
        }),
      ).annotate({ identifier: "AgentVersionSummary" });
    case 2:
      return S.Array(__S(337, __c42, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ agentVersionSummaries: __S(338, __c42, 2), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAgentVersionsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/knowledgebases/{knowledgeBaseId}/datasources/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListDataSourcesRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String,
          dataSourceId: S.String,
          name: S.String,
          status: S.String,
          description: S.optional(S.String),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "DataSourceSummary" });
    case 6:
      return S.Array(__S(341, __c42, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ dataSourceSummaries: __S(342, __c42, 6), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListDataSourcesResponse" });
  }
}
function __c43(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          flowIdentifier: S.String.pipe(T.HttpLabel("flowIdentifier")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/flows/{flowIdentifier}/aliases" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListFlowAliasesRequest" });
    case 1:
      return S.Array(__S(163, __c20, 3));
    case 2:
      return S.suspend(() =>
        S.Struct({ flowAliasSummaries: __S(345, __c43, 1), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListFlowAliasesResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/flows/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListFlowsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          id: S.String,
          arn: S.String,
          status: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          version: S.String,
        }),
      ).annotate({ identifier: "FlowSummary" });
    case 5:
      return S.Array(__S(348, __c43, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ flowSummaries: __S(349, __c43, 5), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListFlowsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          flowIdentifier: S.String.pipe(T.HttpLabel("flowIdentifier")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/flows/{flowIdentifier}/versions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListFlowVersionsRequest" });
  }
}
function __c44(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          status: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          version: S.String,
        }),
      ).annotate({ identifier: "FlowVersionSummary" });
    case 1:
      return S.Array(__S(352, __c44, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ flowVersionSummaries: __S(353, __c44, 1), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListFlowVersionsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          attribute: S.String,
          operator: S.String,
          values: __S(10, __c1, 2),
        }),
      ).annotate({ identifier: "IngestionJobFilter" });
    case 4:
      return S.Array(__S(355, __c44, 3));
    case 5:
      return S.suspend(() => S.Struct({ attribute: S.String, order: S.String })).annotate({
        identifier: "IngestionJobSortBy",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
          dataSourceId: S.String.pipe(T.HttpLabel("dataSourceId")),
          filters: S.optional(__S(356, __c44, 4)),
          sortBy: S.optional(__S(357, __c44, 5)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/ingestionjobs/",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListIngestionJobsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String,
          dataSourceId: S.String,
          ingestionJobId: S.String,
          description: S.optional(S.String),
          status: S.String,
          startedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          textReadyAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          statistics: S.optional(__S(289, __c36, 1)),
        }),
      ).annotate({ identifier: "IngestionJobSummary" });
  }
}
function __c45(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(359, __c44, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ ingestionJobSummaries: __S(360, __c45, 0), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListIngestionJobsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
          dataSourceId: S.String.pipe(T.HttpLabel("dataSourceId")),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/documents",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListKnowledgeBaseDocumentsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          documentDetails: __S(247, __c30, 7),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListKnowledgeBaseDocumentsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ maxResults: S.optional(S.Number), nextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/knowledgebases/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListKnowledgeBasesRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String,
          name: S.String,
          description: S.optional(S.String),
          status: S.String,
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "KnowledgeBaseSummary" });
    case 6:
      return S.Array(__S(365, __c45, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseSummaries: __S(366, __c45, 6),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListKnowledgeBasesResponse",
      });
  }
}
function __c46(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          promptIdentifier: S.optional(S.String).pipe(T.HttpQuery("promptIdentifier")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/prompts/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListPromptsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          id: S.String,
          arn: S.String,
          version: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "PromptSummary" });
    case 2:
      return S.Array(__S(369, __c46, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ promptSummaries: __S(370, __c46, 2), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListPromptsResponse" });
    case 4:
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
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(9, __c1, 1)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
          statusFilter: S.optional(S.String).pipe(T.HttpQuery("status")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/knowledgebases/{knowledgeBaseId}/vpcconfigurations/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListVpcConfigurationsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          vpcConfigurationId: S.String,
          status: S.String,
          statusMessage: S.optional(S.String),
          vpcId: S.String,
          resourceTarget: S.String,
          port: S.Number,
          protocol: S.String,
          resolutionMode: S.String,
          hostHeader: S.optional(S.String),
          tlsServerName: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "VpcConfigurationSummary" });
  }
}
function __c47(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(375, __c46, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ items: __S(376, __c47, 0), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListVpcConfigurationsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ agentId: S.String.pipe(T.HttpLabel("agentId")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/agents/{agentId}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PrepareAgentRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String,
          agentStatus: S.String,
          agentVersion: S.String,
          preparedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "PrepareAgentResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ flowIdentifier: S.String.pipe(T.HttpLabel("flowIdentifier")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/flows/{flowIdentifier}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PrepareFlowRequest" });
    case 5:
      return S.suspend(() => S.Struct({ id: S.String, status: S.String })).annotate({
        identifier: "PrepareFlowResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          policy: S.String,
          expectedRevisionId: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/resourcepolicy/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PutResourcePolicyRequest" });
    case 7:
      return S.suspend(() => S.Struct({ resourceArn: S.String, revisionId: S.String })).annotate({
        identifier: "PutResourcePolicyResponse",
      });
  }
}
function __c48(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
          dataSourceId: S.String.pipe(T.HttpLabel("dataSourceId")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/ingestionjobs/",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartIngestionJobRequest" });
    case 1:
      return S.suspend(() => S.Struct({ ingestionJob: __S(290, __c36, 2) })).annotate({
        identifier: "StartIngestionJobResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
          dataSourceId: S.String.pipe(T.HttpLabel("dataSourceId")),
          ingestionJobId: S.String.pipe(T.HttpLabel("ingestionJobId")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/ingestionjobs/{ingestionJobId}/stop",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StopIngestionJobRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tags: __S(9, __c1, 1),
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
      ).annotate({ identifier: "TagResourceRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: __S(10, __c1, 2).pipe(T.HttpQuery("tagKeys")),
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
      ).annotate({ identifier: "UntagResourceRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          agentName: S.String,
          instruction: S.optional(SensitiveString),
          foundationModel: S.optional(S.String),
          description: S.optional(S.String),
          orchestrationType: S.optional(S.String),
          customOrchestration: S.optional(__S(8, __c1, 0)),
          idleSessionTTLInSeconds: S.optional(S.Number),
          agentResourceRoleArn: S.String,
          customerEncryptionKeyArn: S.optional(S.String),
          promptOverrideConfiguration: S.optional(__S(14, __c1, 6)),
          guardrailConfiguration: S.optional(__S(15, __c1, 7)),
          memoryConfiguration: S.optional(__S(18, __c2, 2)),
          agentCollaboration: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/agents/{agentId}/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateAgentRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          agentVersion: S.String.pipe(T.HttpLabel("agentVersion")),
          actionGroupId: S.String.pipe(T.HttpLabel("actionGroupId")),
          actionGroupName: S.String,
          description: S.optional(S.String),
          parentActionGroupSignature: S.optional(S.String),
          parentActionGroupSignatureParams: S.optional(__S(22, __c2, 6)),
          actionGroupExecutor: S.optional(__S(23, __c2, 7)),
          actionGroupState: S.optional(S.String),
          apiSchema: S.optional(__S(25, __c3, 1)),
          functionSchema: S.optional(__S(30, __c3, 6)),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/agents/{agentId}/agentversions/{agentVersion}/actiongroups/{actionGroupId}/",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAgentActionGroupRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          agentAliasId: S.String.pipe(T.HttpLabel("agentAliasId")),
          agentAliasName: S.String,
          description: S.optional(S.String),
          routingConfiguration: S.optional(__S(35, __c4, 3)),
          aliasInvocationState: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/agents/{agentId}/agentaliases/{agentAliasId}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateAgentAliasRequest" });
  }
}
function __c49(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          agentVersion: S.String.pipe(T.HttpLabel("agentVersion")),
          collaboratorId: S.String.pipe(T.HttpLabel("collaboratorId")),
          agentDescriptor: __S(0, __c0, 0),
          collaboratorName: S.String,
          collaborationInstruction: SensitiveString,
          relayConversationHistory: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/agents/{agentId}/agentversions/{agentVersion}/agentcollaborators/{collaboratorId}/",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAgentCollaboratorRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          agentVersion: S.String.pipe(T.HttpLabel("agentVersion")),
          knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
          description: S.optional(S.String),
          knowledgeBaseState: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/agents/{agentId}/agentversions/{agentVersion}/knowledgebases/{knowledgeBaseId}/",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAgentKnowledgeBaseRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
          dataSourceId: S.String.pipe(T.HttpLabel("dataSourceId")),
          name: S.String,
          description: S.optional(S.String),
          dataSourceConfiguration: __S(72, __c9, 0),
          dataDeletionPolicy: S.optional(S.String),
          serverSideEncryptionConfiguration: S.optional(__S(73, __c9, 1)),
          vectorIngestionConfiguration: S.optional(__S(94, __c11, 6)),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateDataSourceRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          executionRoleArn: S.String,
          customerEncryptionKeyArn: S.optional(S.String),
          definition: S.optional(__S(156, __c19, 4)),
          flowIdentifier: S.String.pipe(T.HttpLabel("flowIdentifier")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/flows/{flowIdentifier}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateFlowRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          routingConfiguration: __S(160, __c20, 0),
          concurrencyConfiguration: S.optional(__S(161, __c20, 1)),
          flowIdentifier: S.String.pipe(T.HttpLabel("flowIdentifier")),
          aliasIdentifier: S.String.pipe(T.HttpLabel("aliasIdentifier")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/flows/{flowIdentifier}/aliases/{aliasIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateFlowAliasRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
          name: S.String,
          description: S.optional(S.String),
          roleArn: S.String,
          knowledgeBaseConfiguration: __S(196, __c24, 4),
          storageConfiguration: S.optional(__S(210, __c26, 2)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/knowledgebases/{knowledgeBaseId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateKnowledgeBaseRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          customerEncryptionKeyArn: S.optional(S.String),
          defaultVariant: S.optional(S.String),
          variants: S.optional(__S(219, __c27, 3)),
          promptIdentifier: S.String.pipe(T.HttpLabel("promptIdentifier")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/prompts/{promptIdentifier}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdatePromptRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ definition: __S(156, __c19, 4) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/flows/validate-definition" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ValidateFlowDefinitionRequest",
      });
  }
}
function __c50(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ validations: __S(283, __c35, 3) })).annotate({
        identifier: "ValidateFlowDefinitionResponse",
      });
    case 1:
      return S.suspend(() => S.Struct({ name: S.String, message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 2:
      return S.Array(__S(401, __c50, 1));
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
