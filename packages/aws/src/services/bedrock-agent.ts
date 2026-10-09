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
        /*@__PURE__*/ S.suspend(() => ValidationExceptionFieldList).annotate({
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
const AgentDescriptor = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<AgentDescriptor>;
export type Name = string;
export type CollaborationInstruction = string | redacted.Redacted<string>;
export type RelayConversationHistory = "TO_COLLABORATOR" | "DISABLED" | (string & {});
const RelayConversationHistory = S.String;

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
const AssociateAgentCollaboratorRequest = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<AssociateAgentCollaboratorRequest>;
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
const AgentCollaborator = /*@__PURE__*/ __L.at(__c0, 2) as any as S.Schema<AgentCollaborator>;
export interface AssociateAgentCollaboratorResponse {
  agentCollaborator: AgentCollaborator;
}
const AssociateAgentCollaboratorResponse = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<AssociateAgentCollaboratorResponse>;
export type Description = string;
export type KnowledgeBaseState = "ENABLED" | "DISABLED" | (string & {});
const KnowledgeBaseState = S.String;

export interface AssociateAgentKnowledgeBaseRequest {
  agentId: string;
  agentVersion: string;
  knowledgeBaseId: string;
  description: string;
  knowledgeBaseState?: KnowledgeBaseState;
}
const AssociateAgentKnowledgeBaseRequest = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<AssociateAgentKnowledgeBaseRequest>;
export interface AgentKnowledgeBase {
  agentId: string;
  agentVersion: string;
  knowledgeBaseId: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  knowledgeBaseState: KnowledgeBaseState;
}
const AgentKnowledgeBase = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<AgentKnowledgeBase>;
export interface AssociateAgentKnowledgeBaseResponse {
  agentKnowledgeBase: AgentKnowledgeBase;
}
const AssociateAgentKnowledgeBaseResponse = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<AssociateAgentKnowledgeBaseResponse>;
export type Instruction = string | redacted.Redacted<string>;
export type ModelIdentifier = string;
export type OrchestrationType = "DEFAULT" | "CUSTOM_ORCHESTRATION" | (string & {});
const OrchestrationType = S.String;

export type LambdaArn = string;
export type OrchestrationExecutor = { lambda: string };
const OrchestrationExecutor = /*@__PURE__*/ __L.at(__c0, 7);
export interface CustomOrchestration {
  executor?: OrchestrationExecutor;
}
const CustomOrchestration = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<CustomOrchestration>;
export type SessionTTL = number;
export type AgentRoleArn = string;
export type KmsKeyArn = string;
export type TagKey = string;
export type TagValue = string;
export type TagsMap = { [key: string]: string | undefined };
const TagsMap = /*@__PURE__*/ __L.at(__c1, 1);
export type PromptType =
  | "PRE_PROCESSING"
  | "ORCHESTRATION"
  | "POST_PROCESSING"
  | "KNOWLEDGE_BASE_RESPONSE_GENERATION"
  | "MEMORY_SUMMARIZATION"
  | (string & {});
const PromptType = S.String;

export type CreationMode = "DEFAULT" | "OVERRIDDEN" | (string & {});
const CreationMode = S.String;

export type PromptState = "ENABLED" | "DISABLED" | (string & {});
const PromptState = S.String;

export type BasePromptTemplate = string | redacted.Redacted<string>;
export type Temperature = number;
export type TopP = number;
export type TopK = number;
export type MaximumLength = number;
export type StopSequences = string[];
const StopSequences = /*@__PURE__*/ __L.at(__c1, 2);
export interface InferenceConfiguration {
  temperature?: number;
  topP?: number;
  topK?: number;
  maximumLength?: number;
  stopSequences?: string[];
}
const InferenceConfiguration = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<InferenceConfiguration>;
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
const PromptConfiguration = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<PromptConfiguration>;
export type PromptConfigurations = PromptConfiguration[];
const PromptConfigurations = /*@__PURE__*/ __L.at(__c1, 5);
export interface PromptOverrideConfiguration {
  promptConfigurations: PromptConfiguration[];
  overrideLambda?: string;
}
const PromptOverrideConfiguration = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<PromptOverrideConfiguration>;
export type GuardrailIdentifier = string;
export type GuardrailVersion = string;
export interface GuardrailConfiguration {
  guardrailIdentifier?: string;
  guardrailVersion?: string;
}
const GuardrailConfiguration = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<GuardrailConfiguration>;
export type MemoryType = "SESSION_SUMMARY" | (string & {});
const MemoryType = S.String;

export type EnabledMemoryTypes = MemoryType[];
const EnabledMemoryTypes = /*@__PURE__*/ __L.at(__c2, 0);
export type StorageDays = number;
export type MaxRecentSessions = number;
export interface SessionSummaryConfiguration {
  maxRecentSessions?: number;
}
const SessionSummaryConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<SessionSummaryConfiguration>;
export interface MemoryConfiguration {
  enabledMemoryTypes: MemoryType[];
  storageDays?: number;
  sessionSummaryConfiguration?: SessionSummaryConfiguration;
}
const MemoryConfiguration = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<MemoryConfiguration>;
export type AgentCollaboration = "SUPERVISOR" | "SUPERVISOR_ROUTER" | "DISABLED" | (string & {});
const AgentCollaboration = S.String;

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
const CreateAgentRequest = /*@__PURE__*/ __L.at(__c2, 3) as any as S.Schema<CreateAgentRequest>;
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
const AgentStatus = S.String;

export type FailureReason = string;
export type FailureReasons = string[];
const FailureReasons = StopSequences as any as S.Schema<FailureReasons>;
export type RecommendedAction = string;
export type RecommendedActions = string[];
const RecommendedActions = StopSequences as any as S.Schema<RecommendedActions>;
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
const Agent = /*@__PURE__*/ __L.at(__c2, 4) as any as S.Schema<Agent>;
export interface CreateAgentResponse {
  agent: Agent;
}
const CreateAgentResponse = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<CreateAgentResponse>;
export type ActionGroupSignature =
  | "AMAZON.UserInput"
  | "AMAZON.CodeInterpreter"
  | "ANTHROPIC.Computer"
  | "ANTHROPIC.Bash"
  | "ANTHROPIC.TextEditor"
  | (string & {});
const ActionGroupSignature = S.String;

export type ActionGroupSignatureParams = { [key: string]: string | undefined };
const ActionGroupSignatureParams = /*@__PURE__*/ __L.at(__c2, 6);
export type CustomControlMethod = "RETURN_CONTROL" | (string & {});
const CustomControlMethod = S.String;

export type ActionGroupExecutor =
  | { lambda: string; customControl?: never }
  | { lambda?: never; customControl: CustomControlMethod };
const ActionGroupExecutor = /*@__PURE__*/ __L.at(__c2, 7);
export type S3BucketName = string;
export type S3ObjectKey = string;
export interface S3Identifier {
  s3BucketName?: string;
  s3ObjectKey?: string;
}
const S3Identifier = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<S3Identifier>;
export type Payload = string | redacted.Redacted<string>;
export type APISchema =
  | { s3: S3Identifier; payload?: never }
  | { s3?: never; payload: string | redacted.Redacted<string> };
const APISchema = /*@__PURE__*/ __L.at(__c3, 1);
export type ActionGroupState = "ENABLED" | "DISABLED" | (string & {});
const ActionGroupState = S.String;

export type FunctionDescription = string;
export type ParameterDescription = string;
export type Type = "string" | "number" | "integer" | "boolean" | "array" | (string & {});
const Type = S.String;

export interface ParameterDetail {
  description?: string;
  type: Type;
  required?: boolean;
}
const ParameterDetail = /*@__PURE__*/ __L.at(__c3, 2) as any as S.Schema<ParameterDetail>;
export type ParameterMap = { [key: string]: ParameterDetail | undefined };
const ParameterMap = /*@__PURE__*/ __L.at(__c3, 3);
export type RequireConfirmation = "ENABLED" | "DISABLED" | (string & {});
const RequireConfirmation = S.String;

export interface Function {
  name: string;
  description?: string;
  parameters?: { [key: string]: ParameterDetail | undefined };
  requireConfirmation?: RequireConfirmation;
}
const Function = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<Function>;
export type Functions = Function[];
const Functions = /*@__PURE__*/ __L.at(__c3, 5);
export type FunctionSchema = { functions: Function[] };
const FunctionSchema = /*@__PURE__*/ __L.at(__c3, 6);
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
const CreateAgentActionGroupRequest = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<CreateAgentActionGroupRequest>;
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
const AgentActionGroup = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<AgentActionGroup>;
export interface CreateAgentActionGroupResponse {
  agentActionGroup: AgentActionGroup;
}
const CreateAgentActionGroupResponse = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<CreateAgentActionGroupResponse>;
export type ProvisionedModelIdentifier = string;
export interface AgentAliasRoutingConfigurationListItem {
  agentVersion?: string;
  provisionedThroughput?: string;
}
const AgentAliasRoutingConfigurationListItem = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<AgentAliasRoutingConfigurationListItem>;
export type AgentAliasRoutingConfiguration = AgentAliasRoutingConfigurationListItem[];
const AgentAliasRoutingConfiguration = /*@__PURE__*/ __L.at(__c4, 3);
export interface CreateAgentAliasRequest {
  agentId: string;
  agentAliasName: string;
  clientToken?: string;
  description?: string;
  routingConfiguration?: AgentAliasRoutingConfigurationListItem[];
  tags?: { [key: string]: string | undefined };
}
const CreateAgentAliasRequest = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<CreateAgentAliasRequest>;
export type AgentAliasId = string;
export interface AgentAliasHistoryEvent {
  routingConfiguration?: AgentAliasRoutingConfigurationListItem[];
  endDate?: Date;
  startDate?: Date;
}
const AgentAliasHistoryEvent = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<AgentAliasHistoryEvent>;
export type AgentAliasHistoryEvents = AgentAliasHistoryEvent[];
const AgentAliasHistoryEvents = /*@__PURE__*/ __L.at(__c4, 6);
export type AgentAliasStatus =
  | "CREATING"
  | "PREPARED"
  | "FAILED"
  | "UPDATING"
  | "DELETING"
  | "DISSOCIATED"
  | (string & {});
const AgentAliasStatus = S.String;

export type AliasInvocationState = "ACCEPT_INVOCATIONS" | "REJECT_INVOCATIONS" | (string & {});
const AliasInvocationState = S.String;

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
const AgentAlias = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<AgentAlias>;
export interface CreateAgentAliasResponse {
  agentAlias: AgentAlias;
}
const CreateAgentAliasResponse = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<CreateAgentAliasResponse>;
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
const DataSourceType = S.String;

export type EnabledOrDisabledState = "ENABLED" | "DISABLED" | (string & {});
const EnabledOrDisabledState = S.String;

export interface DeletionProtectionConfiguration {
  deletionProtectionStatus: EnabledOrDisabledState;
  deletionProtectionThreshold?: number;
}
const DeletionProtectionConfiguration = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<DeletionProtectionConfiguration>;
export interface ImageExtractionConfiguration {
  imageExtractionStatus: EnabledOrDisabledState;
}
const ImageExtractionConfiguration = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<ImageExtractionConfiguration>;
export interface AudioExtractionConfiguration {
  audioExtractionStatus: EnabledOrDisabledState;
}
const AudioExtractionConfiguration = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<AudioExtractionConfiguration>;
export interface VideoExtractionConfiguration {
  videoExtractionStatus: EnabledOrDisabledState;
}
const VideoExtractionConfiguration = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<VideoExtractionConfiguration>;
export interface MediaExtractionConfiguration {
  imageExtractionConfiguration?: ImageExtractionConfiguration;
  audioExtractionConfiguration?: AudioExtractionConfiguration;
  videoExtractionConfiguration?: VideoExtractionConfiguration;
}
const MediaExtractionConfiguration = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<MediaExtractionConfiguration>;
export interface DailySchedule {}
const DailySchedule = /*@__PURE__*/ __L.at(__c5, 6) as any as S.Schema<DailySchedule>;
export type DayOfWeek =
  | "SUNDAY"
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | (string & {});
const DayOfWeek = S.String;

export interface WeeklySchedule {
  dayOfWeek: DayOfWeek;
}
const WeeklySchedule = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<WeeklySchedule>;
export type DayOfMonthNumber = number;
export interface LastDayOfMonth {}
const LastDayOfMonth = DailySchedule as any as S.Schema<LastDayOfMonth>;
export type DayOfMonth =
  | { dayNumber: number; lastDayOfMonth?: never }
  | { dayNumber?: never; lastDayOfMonth: LastDayOfMonth };
const DayOfMonth = /*@__PURE__*/ __L.at(__c6, 0);
export interface MonthlySchedule {
  dayOfMonth: DayOfMonth;
}
const MonthlySchedule = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<MonthlySchedule>;
export type SyncSchedule =
  | { daily: DailySchedule; weekly?: never; monthly?: never }
  | { daily?: never; weekly: WeeklySchedule; monthly?: never }
  | { daily?: never; weekly?: never; monthly: MonthlySchedule };
const SyncSchedule = /*@__PURE__*/ __L.at(__c6, 2);
export interface ManagedKnowledgeBaseConnectorConfiguration {
  deletionProtectionConfiguration?: DeletionProtectionConfiguration;
  mediaExtractionConfiguration?: MediaExtractionConfiguration;
  connectorParameters?: any;
  syncSchedule?: SyncSchedule;
}
const ManagedKnowledgeBaseConnectorConfiguration = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<ManagedKnowledgeBaseConnectorConfiguration>;
export type S3BucketArn = string;
export type S3Prefix = string | redacted.Redacted<string>;
export type S3Prefixes = (string | redacted.Redacted<string>)[];
const S3Prefixes = /*@__PURE__*/ __L.at(__c6, 4);
export type BucketOwnerAccountId = string;
export interface S3DataSourceConfiguration {
  bucketArn: string;
  inclusionPrefixes?: (string | redacted.Redacted<string>)[];
  bucketOwnerAccountId?: string;
}
const S3DataSourceConfiguration = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<S3DataSourceConfiguration>;
export type Url = string;
export interface SeedUrl {
  url?: string;
}
const SeedUrl = /*@__PURE__*/ __L.at(__c6, 6) as any as S.Schema<SeedUrl>;
export type SeedUrls = SeedUrl[];
const SeedUrls = /*@__PURE__*/ __L.at(__c6, 7);
export interface UrlConfiguration {
  seedUrls?: SeedUrl[];
}
const UrlConfiguration = /*@__PURE__*/ __L.at(__c7, 0) as any as S.Schema<UrlConfiguration>;
export interface WebSourceConfiguration {
  urlConfiguration: UrlConfiguration;
}
const WebSourceConfiguration = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<WebSourceConfiguration>;
export interface WebCrawlerLimits {
  rateLimit?: number;
  maxPages?: number;
}
const WebCrawlerLimits = /*@__PURE__*/ __L.at(__c7, 2) as any as S.Schema<WebCrawlerLimits>;
export type FilterPattern = string | redacted.Redacted<string>;
export type FilterList = (string | redacted.Redacted<string>)[];
const FilterList = S3Prefixes as any as S.Schema<FilterList>;
export type WebScopeType = "HOST_ONLY" | "SUBDOMAINS" | (string & {});
const WebScopeType = S.String;

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
const WebCrawlerConfiguration = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<WebCrawlerConfiguration>;
export interface WebDataSourceConfiguration {
  sourceConfiguration: WebSourceConfiguration;
  crawlerConfiguration?: WebCrawlerConfiguration;
}
const WebDataSourceConfiguration = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<WebDataSourceConfiguration>;
export type HttpsUrl = string;
export type ConfluenceHostType = "SAAS" | (string & {});
const ConfluenceHostType = S.String;

export type ConfluenceAuthType = "BASIC" | "OAUTH2_CLIENT_CREDENTIALS" | (string & {});
const ConfluenceAuthType = S.String;

export type SecretArn = string;
export interface ConfluenceSourceConfiguration {
  hostUrl: string;
  hostType: ConfluenceHostType;
  authType: ConfluenceAuthType;
  credentialsSecretArn: string;
}
const ConfluenceSourceConfiguration = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<ConfluenceSourceConfiguration>;
export type CrawlFilterConfigurationType = "PATTERN" | (string & {});
const CrawlFilterConfigurationType = S.String;

export type FilteredObjectType = string | redacted.Redacted<string>;
export interface PatternObjectFilter {
  objectType: string | redacted.Redacted<string>;
  inclusionFilters?: (string | redacted.Redacted<string>)[];
  exclusionFilters?: (string | redacted.Redacted<string>)[];
}
const PatternObjectFilter = /*@__PURE__*/ __L.at(__c7, 6) as any as S.Schema<PatternObjectFilter>;
export type PatternObjectFilterList = PatternObjectFilter[];
const PatternObjectFilterList = /*@__PURE__*/ __L.at(__c7, 7);
export interface PatternObjectFilterConfiguration {
  filters: PatternObjectFilter[];
}
const PatternObjectFilterConfiguration = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<PatternObjectFilterConfiguration>;
export interface CrawlFilterConfiguration {
  type: CrawlFilterConfigurationType;
  patternObjectFilter?: PatternObjectFilterConfiguration;
}
const CrawlFilterConfiguration = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<CrawlFilterConfiguration>;
export interface ConfluenceCrawlerConfiguration {
  filterConfiguration?: CrawlFilterConfiguration;
}
const ConfluenceCrawlerConfiguration = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<ConfluenceCrawlerConfiguration>;
export interface ConfluenceDataSourceConfiguration {
  sourceConfiguration: ConfluenceSourceConfiguration;
  crawlerConfiguration?: ConfluenceCrawlerConfiguration;
}
const ConfluenceDataSourceConfiguration = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<ConfluenceDataSourceConfiguration>;
export type SalesforceAuthType = "OAUTH2_CLIENT_CREDENTIALS" | (string & {});
const SalesforceAuthType = S.String;

export interface SalesforceSourceConfiguration {
  hostUrl: string;
  authType: SalesforceAuthType;
  credentialsSecretArn: string;
}
const SalesforceSourceConfiguration = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<SalesforceSourceConfiguration>;
export interface SalesforceCrawlerConfiguration {
  filterConfiguration?: CrawlFilterConfiguration;
}
const SalesforceCrawlerConfiguration =
  ConfluenceCrawlerConfiguration as any as S.Schema<SalesforceCrawlerConfiguration>;
export interface SalesforceDataSourceConfiguration {
  sourceConfiguration: SalesforceSourceConfiguration;
  crawlerConfiguration?: SalesforceCrawlerConfiguration;
}
const SalesforceDataSourceConfiguration = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<SalesforceDataSourceConfiguration>;
export type Microsoft365TenantId = string;
export type SharePointDomain = string;
export type SharePointSiteUrls = string[];
const SharePointSiteUrls = StopSequences as any as S.Schema<SharePointSiteUrls>;
export type SharePointHostType = "ONLINE" | (string & {});
const SharePointHostType = S.String;

export type SharePointAuthType =
  | "OAUTH2_CLIENT_CREDENTIALS"
  | "OAUTH2_SHAREPOINT_APP_ONLY_CLIENT_CREDENTIALS"
  | (string & {});
const SharePointAuthType = S.String;

export interface SharePointSourceConfiguration {
  tenantId?: string;
  domain: string;
  siteUrls: string[];
  hostType: SharePointHostType;
  authType: SharePointAuthType;
  credentialsSecretArn: string;
}
const SharePointSourceConfiguration = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<SharePointSourceConfiguration>;
export interface SharePointCrawlerConfiguration {
  filterConfiguration?: CrawlFilterConfiguration;
}
const SharePointCrawlerConfiguration =
  ConfluenceCrawlerConfiguration as any as S.Schema<SharePointCrawlerConfiguration>;
export interface SharePointDataSourceConfiguration {
  sourceConfiguration: SharePointSourceConfiguration;
  crawlerConfiguration?: SharePointCrawlerConfiguration;
}
const SharePointDataSourceConfiguration = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<SharePointDataSourceConfiguration>;
export interface DataSourceConfiguration {
  type: DataSourceType;
  managedKnowledgeBaseConnectorConfiguration?: ManagedKnowledgeBaseConnectorConfiguration;
  s3Configuration?: S3DataSourceConfiguration;
  webConfiguration?: WebDataSourceConfiguration;
  confluenceConfiguration?: ConfluenceDataSourceConfiguration;
  salesforceConfiguration?: SalesforceDataSourceConfiguration;
  sharePointConfiguration?: SharePointDataSourceConfiguration;
}
const DataSourceConfiguration = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<DataSourceConfiguration>;
export type DataDeletionPolicy = "RETAIN" | "DELETE" | (string & {});
const DataDeletionPolicy = S.String;

export interface ServerSideEncryptionConfiguration {
  kmsKeyArn?: string;
}
const ServerSideEncryptionConfiguration = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<ServerSideEncryptionConfiguration>;
export type ChunkingStrategy = "FIXED_SIZE" | "NONE" | "HIERARCHICAL" | "SEMANTIC" | (string & {});
const ChunkingStrategy = S.String;

export interface FixedSizeChunkingConfiguration {
  maxTokens: number;
  overlapPercentage: number;
}
const FixedSizeChunkingConfiguration = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<FixedSizeChunkingConfiguration>;
export interface HierarchicalChunkingLevelConfiguration {
  maxTokens: number;
}
const HierarchicalChunkingLevelConfiguration = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<HierarchicalChunkingLevelConfiguration>;
export type HierarchicalChunkingLevelConfigurations = HierarchicalChunkingLevelConfiguration[];
const HierarchicalChunkingLevelConfigurations = /*@__PURE__*/ __L.at(__c9, 4);
export interface HierarchicalChunkingConfiguration {
  levelConfigurations: HierarchicalChunkingLevelConfiguration[];
  overlapTokens: number;
}
const HierarchicalChunkingConfiguration = /*@__PURE__*/ __L.at(
  __c9,
  5,
) as any as S.Schema<HierarchicalChunkingConfiguration>;
export interface SemanticChunkingConfiguration {
  maxTokens: number;
  bufferSize: number;
  breakpointPercentileThreshold: number;
}
const SemanticChunkingConfiguration = /*@__PURE__*/ __L.at(
  __c9,
  6,
) as any as S.Schema<SemanticChunkingConfiguration>;
export interface ChunkingConfiguration {
  chunkingStrategy: ChunkingStrategy;
  fixedSizeChunkingConfiguration?: FixedSizeChunkingConfiguration;
  hierarchicalChunkingConfiguration?: HierarchicalChunkingConfiguration;
  semanticChunkingConfiguration?: SemanticChunkingConfiguration;
}
const ChunkingConfiguration = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<ChunkingConfiguration>;
export type S3BucketUri = string;
export interface S3Location {
  uri: string;
}
const S3Location = /*@__PURE__*/ __L.at(__c10, 0) as any as S.Schema<S3Location>;
export interface IntermediateStorage {
  s3Location: S3Location;
}
const IntermediateStorage = /*@__PURE__*/ __L.at(__c10, 1) as any as S.Schema<IntermediateStorage>;
export interface TransformationLambdaConfiguration {
  lambdaArn: string;
}
const TransformationLambdaConfiguration = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<TransformationLambdaConfiguration>;
export interface TransformationFunction {
  transformationLambdaConfiguration: TransformationLambdaConfiguration;
}
const TransformationFunction = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<TransformationFunction>;
export type StepType = "POST_CHUNKING" | (string & {});
const StepType = S.String;

export interface Transformation {
  transformationFunction: TransformationFunction;
  stepToApply: StepType;
}
const Transformation = /*@__PURE__*/ __L.at(__c10, 4) as any as S.Schema<Transformation>;
export type Transformations = Transformation[];
const Transformations = /*@__PURE__*/ __L.at(__c10, 5);
export interface CustomTransformationConfiguration {
  intermediateStorage: IntermediateStorage;
  transformations: Transformation[];
}
const CustomTransformationConfiguration = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<CustomTransformationConfiguration>;
export type ParsingStrategy =
  | "BEDROCK_FOUNDATION_MODEL"
  | "BEDROCK_DATA_AUTOMATION"
  | "SMART_PARSING"
  | "MULTI_MODAL_EMBEDDINGS"
  | (string & {});
const ParsingStrategy = S.String;

export type BedrockModelArn = string;
export type ParsingPromptText = string;
export interface ParsingPrompt {
  parsingPromptText: string;
}
const ParsingPrompt = /*@__PURE__*/ __L.at(__c10, 7) as any as S.Schema<ParsingPrompt>;
export type ParsingModality = "MULTIMODAL" | (string & {});
const ParsingModality = S.String;

export interface BedrockFoundationModelConfiguration {
  modelArn: string;
  parsingPrompt?: ParsingPrompt;
  parsingModality?: ParsingModality;
}
const BedrockFoundationModelConfiguration = /*@__PURE__*/ __L.at(
  __c11,
  0,
) as any as S.Schema<BedrockFoundationModelConfiguration>;
export interface BedrockDataAutomationConfiguration {
  parsingModality?: ParsingModality;
}
const BedrockDataAutomationConfiguration = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<BedrockDataAutomationConfiguration>;
export interface ParsingConfiguration {
  parsingStrategy: ParsingStrategy;
  bedrockFoundationModelConfiguration?: BedrockFoundationModelConfiguration;
  bedrockDataAutomationConfiguration?: BedrockDataAutomationConfiguration;
}
const ParsingConfiguration = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<ParsingConfiguration>;
export type ContextEnrichmentType = "BEDROCK_FOUNDATION_MODEL" | (string & {});
const ContextEnrichmentType = S.String;

export type EnrichmentStrategyMethod = "CHUNK_ENTITY_EXTRACTION" | (string & {});
const EnrichmentStrategyMethod = S.String;

export interface EnrichmentStrategyConfiguration {
  method: EnrichmentStrategyMethod;
}
const EnrichmentStrategyConfiguration = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<EnrichmentStrategyConfiguration>;
export interface BedrockFoundationModelContextEnrichmentConfiguration {
  enrichmentStrategyConfiguration: EnrichmentStrategyConfiguration;
  modelArn: string;
}
const BedrockFoundationModelContextEnrichmentConfiguration = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<BedrockFoundationModelContextEnrichmentConfiguration>;
export interface ContextEnrichmentConfiguration {
  type: ContextEnrichmentType;
  bedrockFoundationModelConfiguration?: BedrockFoundationModelContextEnrichmentConfiguration;
}
const ContextEnrichmentConfiguration = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<ContextEnrichmentConfiguration>;
export interface VectorIngestionConfiguration {
  chunkingConfiguration?: ChunkingConfiguration;
  customTransformationConfiguration?: CustomTransformationConfiguration;
  parsingConfiguration?: ParsingConfiguration;
  contextEnrichmentConfiguration?: ContextEnrichmentConfiguration;
}
const VectorIngestionConfiguration = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<VectorIngestionConfiguration>;
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
const CreateDataSourceRequest = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<CreateDataSourceRequest>;
export type DataSourceStatus =
  | "AVAILABLE"
  | "DELETING"
  | "DELETE_UNSUCCESSFUL"
  | "CREATING"
  | "UPDATING"
  | "FAILED"
  | (string & {});
const DataSourceStatus = S.String;

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
const DataSource = /*@__PURE__*/ __L.at(__c12, 0) as any as S.Schema<DataSource>;
export interface CreateDataSourceResponse {
  dataSource: DataSource;
}
const CreateDataSourceResponse = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<CreateDataSourceResponse>;
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
const FlowNodeType = S.String;

export interface InputFlowNodeConfiguration {}
const InputFlowNodeConfiguration = DailySchedule as any as S.Schema<InputFlowNodeConfiguration>;
export interface OutputFlowNodeConfiguration {}
const OutputFlowNodeConfiguration = DailySchedule as any as S.Schema<OutputFlowNodeConfiguration>;
export type FlowKnowledgeBaseId = string;
export type KnowledgeBaseModelIdentifier = string;
export type KnowledgeBaseTextPrompt = string | redacted.Redacted<string>;
export interface KnowledgeBasePromptTemplate {
  textPromptTemplate?: string | redacted.Redacted<string>;
}
const KnowledgeBasePromptTemplate = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<KnowledgeBasePromptTemplate>;
export interface PromptModelInferenceConfiguration {
  temperature?: number;
  topP?: number;
  maxTokens?: number;
  stopSequences?: string[];
}
const PromptModelInferenceConfiguration = /*@__PURE__*/ __L.at(
  __c12,
  3,
) as any as S.Schema<PromptModelInferenceConfiguration>;
export type PromptInferenceConfiguration = { text: PromptModelInferenceConfiguration };
const PromptInferenceConfiguration = /*@__PURE__*/ __L.at(__c12, 4);
export type VectorSearchRerankingConfigurationType = "BEDROCK_RERANKING_MODEL" | (string & {});
const VectorSearchRerankingConfigurationType = S.String;

export type BedrockRerankingModelArn = string;
export type AdditionalModelRequestFieldsKey = string;
export type AdditionalModelRequestFieldsValue = unknown;
export type AdditionalModelRequestFields = { [key: string]: any | undefined };
const AdditionalModelRequestFields = /*@__PURE__*/ __L.at(__c12, 5);
export interface VectorSearchBedrockRerankingModelConfiguration {
  modelArn: string;
  additionalModelRequestFields?: { [key: string]: any | undefined };
}
const VectorSearchBedrockRerankingModelConfiguration = /*@__PURE__*/ __L.at(
  __c12,
  6,
) as any as S.Schema<VectorSearchBedrockRerankingModelConfiguration>;
export type RerankingMetadataSelectionMode = "SELECTIVE" | "ALL" | (string & {});
const RerankingMetadataSelectionMode = S.String;

export interface FieldForReranking {
  fieldName: string;
}
const FieldForReranking = /*@__PURE__*/ __L.at(__c12, 7) as any as S.Schema<FieldForReranking>;
export type FieldsForReranking = FieldForReranking[];
const FieldsForReranking = /*@__PURE__*/ __L.at(__c13, 0);
export type RerankingMetadataSelectiveModeConfiguration =
  | { fieldsToInclude: FieldForReranking[]; fieldsToExclude?: never }
  | { fieldsToInclude?: never; fieldsToExclude: FieldForReranking[] };
const RerankingMetadataSelectiveModeConfiguration = /*@__PURE__*/ __L.at(__c13, 1);
export interface MetadataConfigurationForReranking {
  selectionMode: RerankingMetadataSelectionMode;
  selectiveModeConfiguration?: RerankingMetadataSelectiveModeConfiguration;
}
const MetadataConfigurationForReranking = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<MetadataConfigurationForReranking>;
export interface VectorSearchBedrockRerankingConfiguration {
  modelConfiguration: VectorSearchBedrockRerankingModelConfiguration;
  numberOfRerankedResults?: number;
  metadataConfiguration?: MetadataConfigurationForReranking;
}
const VectorSearchBedrockRerankingConfiguration = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<VectorSearchBedrockRerankingConfiguration>;
export interface VectorSearchRerankingConfiguration {
  type: VectorSearchRerankingConfigurationType;
  bedrockRerankingConfiguration?: VectorSearchBedrockRerankingConfiguration;
}
const VectorSearchRerankingConfiguration = /*@__PURE__*/ __L.at(
  __c13,
  4,
) as any as S.Schema<VectorSearchRerankingConfiguration>;
export type PerformanceConfigLatency = "standard" | "optimized" | (string & {});
const PerformanceConfigLatency = S.String;

export interface PerformanceConfiguration {
  latency?: PerformanceConfigLatency;
}
const PerformanceConfiguration = /*@__PURE__*/ __L.at(
  __c13,
  5,
) as any as S.Schema<PerformanceConfiguration>;
export interface KnowledgeBaseOrchestrationConfiguration {
  promptTemplate?: KnowledgeBasePromptTemplate;
  inferenceConfig?: PromptInferenceConfiguration;
  additionalModelRequestFields?: { [key: string]: any | undefined };
  performanceConfig?: PerformanceConfiguration;
}
const KnowledgeBaseOrchestrationConfiguration = /*@__PURE__*/ __L.at(
  __c13,
  6,
) as any as S.Schema<KnowledgeBaseOrchestrationConfiguration>;
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
const KnowledgeBaseFlowNodeConfiguration = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<KnowledgeBaseFlowNodeConfiguration>;
export type FlowConditionName = string;
export type FlowConditionExpression = string | redacted.Redacted<string>;
export interface FlowCondition {
  name: string;
  expression?: string | redacted.Redacted<string>;
}
const FlowCondition = /*@__PURE__*/ __L.at(__c14, 0) as any as S.Schema<FlowCondition>;
export type FlowConditions = FlowCondition[];
const FlowConditions = /*@__PURE__*/ __L.at(__c14, 1);
export interface ConditionFlowNodeConfiguration {
  conditions: FlowCondition[];
}
const ConditionFlowNodeConfiguration = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<ConditionFlowNodeConfiguration>;
export type FlowLexBotAliasArn = string;
export type FlowLexBotLocaleId = string;
export interface LexFlowNodeConfiguration {
  botAliasArn: string;
  localeId: string;
}
const LexFlowNodeConfiguration = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<LexFlowNodeConfiguration>;
export type FlowPromptArn = string;
export interface PromptFlowNodeResourceConfiguration {
  promptArn: string;
}
const PromptFlowNodeResourceConfiguration = /*@__PURE__*/ __L.at(
  __c14,
  4,
) as any as S.Schema<PromptFlowNodeResourceConfiguration>;
export type PromptTemplateType = "TEXT" | "CHAT" | (string & {});
const PromptTemplateType = S.String;

export type TextPrompt = string | redacted.Redacted<string>;
export type CachePointType = "default" | (string & {});
const CachePointType = S.String;

export interface CachePointBlock {
  type: CachePointType;
}
const CachePointBlock = /*@__PURE__*/ __L.at(__c14, 5) as any as S.Schema<CachePointBlock>;
export type PromptInputVariableName = string;
export interface PromptInputVariable {
  name?: string;
}
const PromptInputVariable = /*@__PURE__*/ __L.at(__c14, 6) as any as S.Schema<PromptInputVariable>;
export type PromptInputVariablesList = PromptInputVariable[];
const PromptInputVariablesList = /*@__PURE__*/ __L.at(__c14, 7);
export interface TextPromptTemplateConfiguration {
  text: string | redacted.Redacted<string>;
  cachePoint?: CachePointBlock;
  inputVariables?: PromptInputVariable[];
}
const TextPromptTemplateConfiguration = /*@__PURE__*/ __L.at(
  __c15,
  0,
) as any as S.Schema<TextPromptTemplateConfiguration>;
export type ConversationRole = "user" | "assistant" | (string & {});
const ConversationRole = S.String;

export type ContentBlock =
  | { text: string; cachePoint?: never }
  | { text?: never; cachePoint: CachePointBlock };
const ContentBlock = /*@__PURE__*/ __L.at(__c15, 1);
export type ContentBlocks = ContentBlock[];
const ContentBlocks = /*@__PURE__*/ __L.at(__c15, 2);
export interface Message {
  role: ConversationRole;
  content: ContentBlock[];
}
const Message = /*@__PURE__*/ __L.at(__c15, 3) as any as S.Schema<Message>;
export type Messages = Message[];
const Messages = /*@__PURE__*/ __L.at(__c15, 4);
export type NonEmptyString = string;
export type SystemContentBlock =
  | { text: string; cachePoint?: never }
  | { text?: never; cachePoint: CachePointBlock };
export type SystemContentBlocks = SystemContentBlock[];
const SystemContentBlocks = ContentBlocks as any as S.Schema<SystemContentBlocks>;
export type ToolName = string;
export type ToolInputSchema = { json: any };
const ToolInputSchema = /*@__PURE__*/ __L.at(__c15, 5);
export interface ToolSpecification {
  name: string;
  description?: string;
  inputSchema: ToolInputSchema;
  strict?: boolean;
}
const ToolSpecification = /*@__PURE__*/ __L.at(__c15, 6) as any as S.Schema<ToolSpecification>;
export type Tool =
  | { toolSpec: ToolSpecification; cachePoint?: never }
  | { toolSpec?: never; cachePoint: CachePointBlock };
const Tool = /*@__PURE__*/ __L.at(__c15, 7);
export type Tools = Tool[];
const Tools = /*@__PURE__*/ __L.at(__c16, 0);
export interface AutoToolChoice {}
const AutoToolChoice = DailySchedule as any as S.Schema<AutoToolChoice>;
export interface AnyToolChoice {}
const AnyToolChoice = DailySchedule as any as S.Schema<AnyToolChoice>;
export interface SpecificToolChoice {
  name: string;
}
const SpecificToolChoice = /*@__PURE__*/ __L.at(__c16, 1) as any as S.Schema<SpecificToolChoice>;
export type ToolChoice =
  | { auto: AutoToolChoice; any?: never; tool?: never }
  | { auto?: never; any: AnyToolChoice; tool?: never }
  | { auto?: never; any?: never; tool: SpecificToolChoice };
const ToolChoice = /*@__PURE__*/ __L.at(__c16, 2);
export interface ToolConfiguration {
  tools: Tool[];
  toolChoice?: ToolChoice;
}
const ToolConfiguration = /*@__PURE__*/ __L.at(__c16, 3) as any as S.Schema<ToolConfiguration>;
export interface ChatPromptTemplateConfiguration {
  messages: Message[];
  system?: SystemContentBlock[];
  inputVariables?: PromptInputVariable[];
  toolConfiguration?: ToolConfiguration;
}
const ChatPromptTemplateConfiguration = /*@__PURE__*/ __L.at(
  __c16,
  4,
) as any as S.Schema<ChatPromptTemplateConfiguration>;
export type PromptTemplateConfiguration =
  | { text: TextPromptTemplateConfiguration; chat?: never }
  | { text?: never; chat: ChatPromptTemplateConfiguration };
const PromptTemplateConfiguration = /*@__PURE__*/ __L.at(__c16, 5);
export type FlowPromptModelIdentifier = string;
export interface PromptFlowNodeInlineConfiguration {
  templateType: PromptTemplateType;
  templateConfiguration: PromptTemplateConfiguration;
  modelId: string;
  inferenceConfiguration?: PromptInferenceConfiguration;
  additionalModelRequestFields?: any;
}
const PromptFlowNodeInlineConfiguration = /*@__PURE__*/ __L.at(
  __c16,
  6,
) as any as S.Schema<PromptFlowNodeInlineConfiguration>;
export type PromptFlowNodeSourceConfiguration =
  | { resource: PromptFlowNodeResourceConfiguration; inline?: never }
  | { resource?: never; inline: PromptFlowNodeInlineConfiguration };
const PromptFlowNodeSourceConfiguration = /*@__PURE__*/ __L.at(__c16, 7);
export interface PromptFlowNodeConfiguration {
  sourceConfiguration: PromptFlowNodeSourceConfiguration;
  guardrailConfiguration?: GuardrailConfiguration;
}
const PromptFlowNodeConfiguration = /*@__PURE__*/ __L.at(
  __c17,
  0,
) as any as S.Schema<PromptFlowNodeConfiguration>;
export type FlowLambdaArn = string;
export interface LambdaFunctionFlowNodeConfiguration {
  lambdaArn: string;
}
const LambdaFunctionFlowNodeConfiguration =
  TransformationLambdaConfiguration as any as S.Schema<LambdaFunctionFlowNodeConfiguration>;
export type FlowS3BucketName = string;
export interface StorageFlowNodeS3Configuration {
  bucketName: string;
}
const StorageFlowNodeS3Configuration = /*@__PURE__*/ __L.at(
  __c17,
  1,
) as any as S.Schema<StorageFlowNodeS3Configuration>;
export type StorageFlowNodeServiceConfiguration = { s3: StorageFlowNodeS3Configuration };
const StorageFlowNodeServiceConfiguration = /*@__PURE__*/ __L.at(__c17, 2);
export interface StorageFlowNodeConfiguration {
  serviceConfiguration: StorageFlowNodeServiceConfiguration;
}
const StorageFlowNodeConfiguration = /*@__PURE__*/ __L.at(
  __c17,
  3,
) as any as S.Schema<StorageFlowNodeConfiguration>;
export type FlowAgentAliasArn = string;
export interface AgentFlowNodeConfiguration {
  agentAliasArn: string;
}
const AgentFlowNodeConfiguration = /*@__PURE__*/ __L.at(
  __c17,
  4,
) as any as S.Schema<AgentFlowNodeConfiguration>;
export interface RetrievalFlowNodeS3Configuration {
  bucketName: string;
}
export type RetrievalFlowNodeServiceConfiguration = { s3: RetrievalFlowNodeS3Configuration };
export interface RetrievalFlowNodeConfiguration {
  serviceConfiguration: RetrievalFlowNodeServiceConfiguration;
}
const RetrievalFlowNodeConfiguration =
  StorageFlowNodeConfiguration as any as S.Schema<RetrievalFlowNodeConfiguration>;
export interface IteratorFlowNodeConfiguration {}
const IteratorFlowNodeConfiguration =
  DailySchedule as any as S.Schema<IteratorFlowNodeConfiguration>;
export interface CollectorFlowNodeConfiguration {}
const CollectorFlowNodeConfiguration =
  DailySchedule as any as S.Schema<CollectorFlowNodeConfiguration>;
export type InlineCode = string | redacted.Redacted<string>;
export type SupportedLanguages = "Python_3" | (string & {});
const SupportedLanguages = S.String;

export interface InlineCodeFlowNodeConfiguration {
  code: string | redacted.Redacted<string>;
  language: SupportedLanguages;
}
const InlineCodeFlowNodeConfiguration = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<InlineCodeFlowNodeConfiguration>;
export interface LoopFlowNodeConfiguration {
  definition: FlowDefinition;
}
const LoopFlowNodeConfiguration = /*@__PURE__*/ __L.at(
  __c17,
  6,
) as any as S.Schema<LoopFlowNodeConfiguration>;
export interface LoopInputFlowNodeConfiguration {}
const LoopInputFlowNodeConfiguration =
  DailySchedule as any as S.Schema<LoopInputFlowNodeConfiguration>;
export interface LoopControllerFlowNodeConfiguration {
  continueCondition: FlowCondition;
  maxIterations?: number;
}
const LoopControllerFlowNodeConfiguration = /*@__PURE__*/ __L.at(
  __c17,
  7,
) as any as S.Schema<LoopControllerFlowNodeConfiguration>;
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
const FlowNodeConfiguration = /*@__PURE__*/ __L.at(
  __c18,
  0,
) as any as S.Schema<FlowNodeConfiguration>;
export type FlowNodeInputName = string;
export type FlowNodeIODataType =
  | "String"
  | "Number"
  | "Boolean"
  | "Object"
  | "Array"
  | (string & {});
const FlowNodeIODataType = S.String;

export type FlowNodeInputExpression = string | redacted.Redacted<string>;
export type FlowNodeInputCategory =
  | "LoopCondition"
  | "ReturnValueToLoopStart"
  | "ExitLoop"
  | (string & {});
const FlowNodeInputCategory = S.String;

export interface FlowNodeInput {
  name: string;
  type: FlowNodeIODataType;
  expression: string | redacted.Redacted<string>;
  category?: FlowNodeInputCategory;
}
const FlowNodeInput = /*@__PURE__*/ __L.at(__c18, 1) as any as S.Schema<FlowNodeInput>;
export type FlowNodeInputs = FlowNodeInput[];
const FlowNodeInputs = /*@__PURE__*/ __L.at(__c18, 2);
export type FlowNodeOutputName = string;
export interface FlowNodeOutput {
  name: string;
  type: FlowNodeIODataType;
}
const FlowNodeOutput = /*@__PURE__*/ __L.at(__c18, 3) as any as S.Schema<FlowNodeOutput>;
export type FlowNodeOutputs = FlowNodeOutput[];
const FlowNodeOutputs = /*@__PURE__*/ __L.at(__c18, 4);
export interface FlowNode {
  name: string;
  type: FlowNodeType;
  configuration?: FlowNodeConfiguration;
  inputs?: FlowNodeInput[];
  outputs?: FlowNodeOutput[];
}
const FlowNode = /*@__PURE__*/ __L.at(__c18, 5) as any as S.Schema<FlowNode>;
export type FlowNodes = FlowNode[];
const FlowNodes = /*@__PURE__*/ __L.at(__c18, 6) as any as S.Schema<FlowNodes>;
export type FlowConnectionType = "Data" | "Conditional" | (string & {});
const FlowConnectionType = S.String;

export type FlowConnectionName = string;
export interface FlowDataConnectionConfiguration {
  sourceOutput: string;
  targetInput: string;
}
const FlowDataConnectionConfiguration = /*@__PURE__*/ __L.at(
  __c18,
  7,
) as any as S.Schema<FlowDataConnectionConfiguration>;
export interface FlowConditionalConnectionConfiguration {
  condition: string;
}
const FlowConditionalConnectionConfiguration = /*@__PURE__*/ __L.at(
  __c19,
  0,
) as any as S.Schema<FlowConditionalConnectionConfiguration>;
export type FlowConnectionConfiguration =
  | { data: FlowDataConnectionConfiguration; conditional?: never }
  | { data?: never; conditional: FlowConditionalConnectionConfiguration };
const FlowConnectionConfiguration = /*@__PURE__*/ __L.at(__c19, 1);
export interface FlowConnection {
  type: FlowConnectionType;
  name: string;
  source: string;
  target: string;
  configuration?: FlowConnectionConfiguration;
}
const FlowConnection = /*@__PURE__*/ __L.at(__c19, 2) as any as S.Schema<FlowConnection>;
export type FlowConnections = FlowConnection[];
const FlowConnections = /*@__PURE__*/ __L.at(__c19, 3);
export interface FlowDefinition {
  nodes?: FlowNode[];
  connections?: FlowConnection[];
}
const FlowDefinition = /*@__PURE__*/ __L.at(__c19, 4) as any as S.Schema<FlowDefinition>;
export interface CreateFlowRequest {
  name: string;
  description?: string;
  executionRoleArn: string;
  customerEncryptionKeyArn?: string;
  definition?: FlowDefinition;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateFlowRequest = /*@__PURE__*/ __L.at(__c19, 5) as any as S.Schema<CreateFlowRequest>;
export type FlowId = string;
export type FlowArn = string;
export type FlowStatus = "Failed" | "Prepared" | "Preparing" | "NotPrepared" | (string & {});
const FlowStatus = S.String;

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
const CreateFlowResponse = /*@__PURE__*/ __L.at(__c19, 6) as any as S.Schema<CreateFlowResponse>;
export interface FlowAliasRoutingConfigurationListItem {
  flowVersion?: string;
}
const FlowAliasRoutingConfigurationListItem = /*@__PURE__*/ __L.at(
  __c19,
  7,
) as any as S.Schema<FlowAliasRoutingConfigurationListItem>;
export type FlowAliasRoutingConfiguration = FlowAliasRoutingConfigurationListItem[];
const FlowAliasRoutingConfiguration = /*@__PURE__*/ __L.at(__c20, 0);
export type ConcurrencyType = "Automatic" | "Manual" | (string & {});
const ConcurrencyType = S.String;

export interface FlowAliasConcurrencyConfiguration {
  type: ConcurrencyType;
  maxConcurrency?: number;
}
const FlowAliasConcurrencyConfiguration = /*@__PURE__*/ __L.at(
  __c20,
  1,
) as any as S.Schema<FlowAliasConcurrencyConfiguration>;
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
const CreateFlowAliasRequest = /*@__PURE__*/ __L.at(
  __c20,
  2,
) as any as S.Schema<CreateFlowAliasRequest>;
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
const CreateFlowAliasResponse = /*@__PURE__*/ __L.at(
  __c20,
  3,
) as any as S.Schema<CreateFlowAliasResponse>;
export interface CreateFlowVersionRequest {
  flowIdentifier: string;
  description?: string;
  clientToken?: string;
}
const CreateFlowVersionRequest = /*@__PURE__*/ __L.at(
  __c20,
  4,
) as any as S.Schema<CreateFlowVersionRequest>;
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
const CreateFlowVersionResponse = /*@__PURE__*/ __L.at(
  __c20,
  5,
) as any as S.Schema<CreateFlowVersionResponse>;
export type KnowledgeBaseRoleArn = string;
export type KnowledgeBaseType = "VECTOR" | "KENDRA" | "SQL" | "MANAGED" | (string & {});
const KnowledgeBaseType = S.String;

export type BedrockEmbeddingModelArn = string;
export type Dimensions = number;
export type EmbeddingDataType = "FLOAT32" | "BINARY" | (string & {});
const EmbeddingDataType = S.String;

export interface AudioSegmentationConfiguration {
  fixedLengthDuration: number;
}
const AudioSegmentationConfiguration = /*@__PURE__*/ __L.at(
  __c20,
  6,
) as any as S.Schema<AudioSegmentationConfiguration>;
export interface AudioConfiguration {
  segmentationConfiguration: AudioSegmentationConfiguration;
}
const AudioConfiguration = /*@__PURE__*/ __L.at(__c20, 7) as any as S.Schema<AudioConfiguration>;
export type AudioConfigurations = AudioConfiguration[];
const AudioConfigurations = /*@__PURE__*/ __L.at(__c21, 0);
export interface VideoSegmentationConfiguration {
  fixedLengthDuration: number;
}
export interface VideoConfiguration {
  segmentationConfiguration: VideoSegmentationConfiguration;
}
export type VideoConfigurations = VideoConfiguration[];
const VideoConfigurations = AudioConfigurations as any as S.Schema<VideoConfigurations>;
export interface BedrockEmbeddingModelConfiguration {
  dimensions?: number;
  embeddingDataType?: EmbeddingDataType;
  audio?: AudioConfiguration[];
  video?: VideoConfiguration[];
  modelConfiguration?: any;
}
const BedrockEmbeddingModelConfiguration = /*@__PURE__*/ __L.at(
  __c21,
  1,
) as any as S.Schema<BedrockEmbeddingModelConfiguration>;
export interface EmbeddingModelConfiguration {
  bedrockEmbeddingModelConfiguration?: BedrockEmbeddingModelConfiguration;
}
const EmbeddingModelConfiguration = /*@__PURE__*/ __L.at(
  __c21,
  2,
) as any as S.Schema<EmbeddingModelConfiguration>;
export type SupplementalDataStorageLocationType = "S3" | (string & {});
const SupplementalDataStorageLocationType = S.String;

export interface SupplementalDataStorageLocation {
  type: SupplementalDataStorageLocationType;
  s3Location?: S3Location;
}
const SupplementalDataStorageLocation = /*@__PURE__*/ __L.at(
  __c21,
  3,
) as any as S.Schema<SupplementalDataStorageLocation>;
export type SupplementalDataStorageLocations = SupplementalDataStorageLocation[];
const SupplementalDataStorageLocations = /*@__PURE__*/ __L.at(__c21, 4);
export interface SupplementalDataStorageConfiguration {
  storageLocations: SupplementalDataStorageLocation[];
}
const SupplementalDataStorageConfiguration = /*@__PURE__*/ __L.at(
  __c21,
  5,
) as any as S.Schema<SupplementalDataStorageConfiguration>;
export interface VectorKnowledgeBaseConfiguration {
  embeddingModelArn: string;
  embeddingModelConfiguration?: EmbeddingModelConfiguration;
  supplementalDataStorageConfiguration?: SupplementalDataStorageConfiguration;
}
const VectorKnowledgeBaseConfiguration = /*@__PURE__*/ __L.at(
  __c21,
  6,
) as any as S.Schema<VectorKnowledgeBaseConfiguration>;
export type EmbeddingModelType = "CUSTOM" | "MANAGED" | (string & {});
const EmbeddingModelType = S.String;

export interface ManagedKnowledgeBaseConfiguration {
  embeddingModelType?: EmbeddingModelType;
  embeddingModelArn?: string;
  embeddingModelConfiguration?: EmbeddingModelConfiguration;
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  supplementalDataStorageConfiguration?: SupplementalDataStorageConfiguration;
}
const ManagedKnowledgeBaseConfiguration = /*@__PURE__*/ __L.at(
  __c21,
  7,
) as any as S.Schema<ManagedKnowledgeBaseConfiguration>;
export type KendraIndexArn = string;
export interface KendraKnowledgeBaseConfiguration {
  kendraIndexArn: string;
}
const KendraKnowledgeBaseConfiguration = /*@__PURE__*/ __L.at(
  __c22,
  0,
) as any as S.Schema<KendraKnowledgeBaseConfiguration>;
export type QueryEngineType = "REDSHIFT" | (string & {});
const QueryEngineType = S.String;

export type RedshiftQueryEngineStorageType = "REDSHIFT" | "AWS_DATA_CATALOG" | (string & {});
const RedshiftQueryEngineStorageType = S.String;

export type AwsDataCatalogTableName = string;
export type AwsDataCatalogTableNames = string[];
const AwsDataCatalogTableNames = StopSequences as any as S.Schema<AwsDataCatalogTableNames>;
export interface RedshiftQueryEngineAwsDataCatalogStorageConfiguration {
  tableNames: string[];
}
const RedshiftQueryEngineAwsDataCatalogStorageConfiguration = /*@__PURE__*/ __L.at(
  __c22,
  1,
) as any as S.Schema<RedshiftQueryEngineAwsDataCatalogStorageConfiguration>;
export type RedshiftDatabase = string;
export interface RedshiftQueryEngineRedshiftStorageConfiguration {
  databaseName: string;
}
const RedshiftQueryEngineRedshiftStorageConfiguration = /*@__PURE__*/ __L.at(
  __c22,
  2,
) as any as S.Schema<RedshiftQueryEngineRedshiftStorageConfiguration>;
export interface RedshiftQueryEngineStorageConfiguration {
  type: RedshiftQueryEngineStorageType;
  awsDataCatalogConfiguration?: RedshiftQueryEngineAwsDataCatalogStorageConfiguration;
  redshiftConfiguration?: RedshiftQueryEngineRedshiftStorageConfiguration;
}
const RedshiftQueryEngineStorageConfiguration = /*@__PURE__*/ __L.at(
  __c22,
  3,
) as any as S.Schema<RedshiftQueryEngineStorageConfiguration>;
export type RedshiftQueryEngineStorageConfigurations = RedshiftQueryEngineStorageConfiguration[];
const RedshiftQueryEngineStorageConfigurations = /*@__PURE__*/ __L.at(__c22, 4);
export type RedshiftQueryEngineType = "SERVERLESS" | "PROVISIONED" | (string & {});
const RedshiftQueryEngineType = S.String;

export type WorkgroupArn = string;
export type RedshiftServerlessAuthType = "IAM" | "USERNAME_PASSWORD" | (string & {});
const RedshiftServerlessAuthType = S.String;

export interface RedshiftServerlessAuthConfiguration {
  type: RedshiftServerlessAuthType;
  usernamePasswordSecretArn?: string;
}
const RedshiftServerlessAuthConfiguration = /*@__PURE__*/ __L.at(
  __c22,
  5,
) as any as S.Schema<RedshiftServerlessAuthConfiguration>;
export interface RedshiftServerlessConfiguration {
  workgroupArn: string;
  authConfiguration: RedshiftServerlessAuthConfiguration;
}
const RedshiftServerlessConfiguration = /*@__PURE__*/ __L.at(
  __c22,
  6,
) as any as S.Schema<RedshiftServerlessConfiguration>;
export type RedshiftClusterIdentifier = string;
export type RedshiftProvisionedAuthType = "IAM" | "USERNAME_PASSWORD" | "USERNAME" | (string & {});
const RedshiftProvisionedAuthType = S.String;

export interface RedshiftProvisionedAuthConfiguration {
  type: RedshiftProvisionedAuthType;
  databaseUser?: string;
  usernamePasswordSecretArn?: string;
}
const RedshiftProvisionedAuthConfiguration = /*@__PURE__*/ __L.at(
  __c22,
  7,
) as any as S.Schema<RedshiftProvisionedAuthConfiguration>;
export interface RedshiftProvisionedConfiguration {
  clusterIdentifier: string;
  authConfiguration: RedshiftProvisionedAuthConfiguration;
}
const RedshiftProvisionedConfiguration = /*@__PURE__*/ __L.at(
  __c23,
  0,
) as any as S.Schema<RedshiftProvisionedConfiguration>;
export interface RedshiftQueryEngineConfiguration {
  type: RedshiftQueryEngineType;
  serverlessConfiguration?: RedshiftServerlessConfiguration;
  provisionedConfiguration?: RedshiftProvisionedConfiguration;
}
const RedshiftQueryEngineConfiguration = /*@__PURE__*/ __L.at(
  __c23,
  1,
) as any as S.Schema<RedshiftQueryEngineConfiguration>;
export type QueryExecutionTimeoutSeconds = number;
export type QueryGenerationTableName = string;
export type DescriptionString = string;
export type IncludeExclude = "INCLUDE" | "EXCLUDE" | (string & {});
const IncludeExclude = S.String;

export type QueryGenerationColumnName = string;
export interface QueryGenerationColumn {
  name?: string;
  description?: string;
  inclusion?: IncludeExclude;
}
const QueryGenerationColumn = /*@__PURE__*/ __L.at(
  __c23,
  2,
) as any as S.Schema<QueryGenerationColumn>;
export type QueryGenerationColumns = QueryGenerationColumn[];
const QueryGenerationColumns = /*@__PURE__*/ __L.at(__c23, 3);
export interface QueryGenerationTable {
  name: string;
  description?: string;
  inclusion?: IncludeExclude;
  columns?: QueryGenerationColumn[];
}
const QueryGenerationTable = /*@__PURE__*/ __L.at(
  __c23,
  4,
) as any as S.Schema<QueryGenerationTable>;
export type QueryGenerationTables = QueryGenerationTable[];
const QueryGenerationTables = /*@__PURE__*/ __L.at(__c23, 5);
export type NaturalLanguageString = string;
export type SqlString = string;
export interface CuratedQuery {
  naturalLanguage: string;
  sql: string;
}
const CuratedQuery = /*@__PURE__*/ __L.at(__c23, 6) as any as S.Schema<CuratedQuery>;
export type CuratedQueries = CuratedQuery[];
const CuratedQueries = /*@__PURE__*/ __L.at(__c23, 7);
export interface QueryGenerationContext {
  tables?: QueryGenerationTable[];
  curatedQueries?: CuratedQuery[];
}
const QueryGenerationContext = /*@__PURE__*/ __L.at(
  __c24,
  0,
) as any as S.Schema<QueryGenerationContext>;
export interface QueryGenerationConfiguration {
  executionTimeoutSeconds?: number;
  generationContext?: QueryGenerationContext;
}
const QueryGenerationConfiguration = /*@__PURE__*/ __L.at(
  __c24,
  1,
) as any as S.Schema<QueryGenerationConfiguration>;
export interface RedshiftConfiguration {
  storageConfigurations: RedshiftQueryEngineStorageConfiguration[];
  queryEngineConfiguration: RedshiftQueryEngineConfiguration;
  queryGenerationConfiguration?: QueryGenerationConfiguration;
}
const RedshiftConfiguration = /*@__PURE__*/ __L.at(
  __c24,
  2,
) as any as S.Schema<RedshiftConfiguration>;
export interface SqlKnowledgeBaseConfiguration {
  type: QueryEngineType;
  redshiftConfiguration?: RedshiftConfiguration;
}
const SqlKnowledgeBaseConfiguration = /*@__PURE__*/ __L.at(
  __c24,
  3,
) as any as S.Schema<SqlKnowledgeBaseConfiguration>;
export interface KnowledgeBaseConfiguration {
  type: KnowledgeBaseType;
  vectorKnowledgeBaseConfiguration?: VectorKnowledgeBaseConfiguration;
  managedKnowledgeBaseConfiguration?: ManagedKnowledgeBaseConfiguration;
  kendraKnowledgeBaseConfiguration?: KendraKnowledgeBaseConfiguration;
  sqlKnowledgeBaseConfiguration?: SqlKnowledgeBaseConfiguration;
}
const KnowledgeBaseConfiguration = /*@__PURE__*/ __L.at(
  __c24,
  4,
) as any as S.Schema<KnowledgeBaseConfiguration>;
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
const KnowledgeBaseStorageType = S.String;

export type OpenSearchServerlessCollectionArn = string;
export type OpenSearchServerlessIndexName = string;
export type FieldName = string;
export interface OpenSearchServerlessFieldMapping {
  vectorField: string;
  textField: string;
  metadataField: string;
}
const OpenSearchServerlessFieldMapping = /*@__PURE__*/ __L.at(
  __c24,
  5,
) as any as S.Schema<OpenSearchServerlessFieldMapping>;
export interface OpenSearchServerlessConfiguration {
  collectionArn: string;
  vectorIndexName: string;
  fieldMapping: OpenSearchServerlessFieldMapping;
}
const OpenSearchServerlessConfiguration = /*@__PURE__*/ __L.at(
  __c24,
  6,
) as any as S.Schema<OpenSearchServerlessConfiguration>;
export type OpenSearchManagedClusterDomainEndpoint = string;
export type OpenSearchManagedClusterDomainArn = string;
export type OpenSearchManagedClusterIndexName = string | redacted.Redacted<string>;
export interface OpenSearchManagedClusterFieldMapping {
  vectorField: string;
  textField: string;
  metadataField: string;
}
const OpenSearchManagedClusterFieldMapping =
  OpenSearchServerlessFieldMapping as any as S.Schema<OpenSearchManagedClusterFieldMapping>;
export interface OpenSearchManagedClusterConfiguration {
  domainEndpoint: string;
  domainArn: string;
  vectorIndexName: string | redacted.Redacted<string>;
  fieldMapping: OpenSearchManagedClusterFieldMapping;
}
const OpenSearchManagedClusterConfiguration = /*@__PURE__*/ __L.at(
  __c24,
  7,
) as any as S.Schema<OpenSearchManagedClusterConfiguration>;
export type PineconeConnectionString = string;
export type PineconeNamespace = string;
export interface PineconeFieldMapping {
  textField: string;
  metadataField: string;
}
const PineconeFieldMapping = /*@__PURE__*/ __L.at(
  __c25,
  0,
) as any as S.Schema<PineconeFieldMapping>;
export interface PineconeConfiguration {
  connectionString: string;
  credentialsSecretArn: string;
  namespace?: string;
  fieldMapping: PineconeFieldMapping;
}
const PineconeConfiguration = /*@__PURE__*/ __L.at(
  __c25,
  1,
) as any as S.Schema<PineconeConfiguration>;
export type RedisEnterpriseCloudEndpoint = string;
export type RedisEnterpriseCloudIndexName = string;
export interface RedisEnterpriseCloudFieldMapping {
  vectorField: string;
  textField: string;
  metadataField: string;
}
const RedisEnterpriseCloudFieldMapping =
  OpenSearchServerlessFieldMapping as any as S.Schema<RedisEnterpriseCloudFieldMapping>;
export interface RedisEnterpriseCloudConfiguration {
  endpoint: string;
  vectorIndexName: string;
  credentialsSecretArn: string;
  fieldMapping: RedisEnterpriseCloudFieldMapping;
}
const RedisEnterpriseCloudConfiguration = /*@__PURE__*/ __L.at(
  __c25,
  2,
) as any as S.Schema<RedisEnterpriseCloudConfiguration>;
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
const RdsFieldMapping = /*@__PURE__*/ __L.at(__c25, 3) as any as S.Schema<RdsFieldMapping>;
export interface RdsConfiguration {
  resourceArn: string;
  credentialsSecretArn: string;
  databaseName: string;
  tableName: string;
  fieldMapping: RdsFieldMapping;
}
const RdsConfiguration = /*@__PURE__*/ __L.at(__c25, 4) as any as S.Schema<RdsConfiguration>;
export type MongoDbAtlasEndpoint = string;
export type MongoDbAtlasDatabaseName = string;
export type MongoDbAtlasCollectionName = string;
export type MongoDbAtlasIndexName = string;
export interface MongoDbAtlasFieldMapping {
  vectorField: string;
  textField: string;
  metadataField: string;
}
const MongoDbAtlasFieldMapping = /*@__PURE__*/ __L.at(
  __c25,
  5,
) as any as S.Schema<MongoDbAtlasFieldMapping>;
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
const MongoDbAtlasConfiguration = /*@__PURE__*/ __L.at(
  __c25,
  6,
) as any as S.Schema<MongoDbAtlasConfiguration>;
export type GraphArn = string | redacted.Redacted<string>;
export interface NeptuneAnalyticsFieldMapping {
  textField: string;
  metadataField: string;
}
const NeptuneAnalyticsFieldMapping = /*@__PURE__*/ __L.at(
  __c25,
  7,
) as any as S.Schema<NeptuneAnalyticsFieldMapping>;
export interface NeptuneAnalyticsConfiguration {
  graphArn: string | redacted.Redacted<string>;
  fieldMapping: NeptuneAnalyticsFieldMapping;
}
const NeptuneAnalyticsConfiguration = /*@__PURE__*/ __L.at(
  __c26,
  0,
) as any as S.Schema<NeptuneAnalyticsConfiguration>;
export type VectorBucketArn = string | redacted.Redacted<string>;
export type IndexArn = string | redacted.Redacted<string>;
export type IndexName = string | redacted.Redacted<string>;
export interface S3VectorsConfiguration {
  vectorBucketArn?: string | redacted.Redacted<string>;
  indexArn?: string | redacted.Redacted<string>;
  indexName?: string | redacted.Redacted<string>;
}
const S3VectorsConfiguration = /*@__PURE__*/ __L.at(
  __c26,
  1,
) as any as S.Schema<S3VectorsConfiguration>;
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
const StorageConfiguration = /*@__PURE__*/ __L.at(
  __c26,
  2,
) as any as S.Schema<StorageConfiguration>;
export interface CreateKnowledgeBaseRequest {
  clientToken?: string;
  name: string;
  description?: string;
  roleArn: string;
  knowledgeBaseConfiguration: KnowledgeBaseConfiguration;
  storageConfiguration?: StorageConfiguration;
  tags?: { [key: string]: string | undefined };
}
const CreateKnowledgeBaseRequest = /*@__PURE__*/ __L.at(
  __c26,
  3,
) as any as S.Schema<CreateKnowledgeBaseRequest>;
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
const KnowledgeBaseStatus = S.String;

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
const KnowledgeBase = /*@__PURE__*/ __L.at(__c26, 4) as any as S.Schema<KnowledgeBase>;
export interface CreateKnowledgeBaseResponse {
  knowledgeBase: KnowledgeBase;
}
const CreateKnowledgeBaseResponse = /*@__PURE__*/ __L.at(
  __c26,
  5,
) as any as S.Schema<CreateKnowledgeBaseResponse>;
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
const PromptMetadataEntry = /*@__PURE__*/ __L.at(__c26, 6) as any as S.Schema<PromptMetadataEntry>;
export type PromptMetadataList = PromptMetadataEntry[];
const PromptMetadataList = /*@__PURE__*/ __L.at(__c26, 7);
export interface PromptAgentResource {
  agentIdentifier: string;
}
const PromptAgentResource = /*@__PURE__*/ __L.at(__c27, 0) as any as S.Schema<PromptAgentResource>;
export type PromptGenAiResource = { agent: PromptAgentResource };
const PromptGenAiResource = /*@__PURE__*/ __L.at(__c27, 1);
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
const PromptVariant = /*@__PURE__*/ __L.at(__c27, 2) as any as S.Schema<PromptVariant>;
export type PromptVariantList = PromptVariant[];
const PromptVariantList = /*@__PURE__*/ __L.at(__c27, 3);
export interface CreatePromptRequest {
  name: string;
  description?: string;
  customerEncryptionKeyArn?: string;
  defaultVariant?: string;
  variants?: PromptVariant[];
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
const CreatePromptRequest = /*@__PURE__*/ __L.at(__c27, 4) as any as S.Schema<CreatePromptRequest>;
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
const CreatePromptResponse = /*@__PURE__*/ __L.at(
  __c27,
  5,
) as any as S.Schema<CreatePromptResponse>;
export type PromptIdentifier = string;
export interface CreatePromptVersionRequest {
  promptIdentifier: string;
  description?: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
const CreatePromptVersionRequest = /*@__PURE__*/ __L.at(
  __c27,
  6,
) as any as S.Schema<CreatePromptVersionRequest>;
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
const CreatePromptVersionResponse = /*@__PURE__*/ __L.at(
  __c27,
  7,
) as any as S.Schema<CreatePromptVersionResponse>;
export type VpcId = string;
export type SubnetId = string;
export type SubnetIdList = string[];
const SubnetIdList = StopSequences as any as S.Schema<SubnetIdList>;
export type ResourceTarget = string;
export type Port = number;
export type VpcProtocol = "HTTP" | "HTTPS" | (string & {});
const VpcProtocol = S.String;

export type VpcResolutionMode = "PUBLIC" | "IN_VPC" | (string & {});
const VpcResolutionMode = S.String;

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
const CreateVpcConfigurationRequest = /*@__PURE__*/ __L.at(
  __c28,
  0,
) as any as S.Schema<CreateVpcConfigurationRequest>;
export type VpcConfigurationId = string;
export type VpcConfigurationStatus =
  | "CREATING"
  | "CREATED"
  | "DELETING"
  | "CREATE_FAILED"
  | "DELETE_FAILED"
  | (string & {});
const VpcConfigurationStatus = S.String;

export interface CreateVpcConfigurationResponse {
  vpcConfigurationId: string;
  status: VpcConfigurationStatus;
}
const CreateVpcConfigurationResponse = /*@__PURE__*/ __L.at(
  __c28,
  1,
) as any as S.Schema<CreateVpcConfigurationResponse>;
export interface DeleteAgentRequest {
  agentId: string;
  skipResourceInUseCheck?: boolean;
}
const DeleteAgentRequest = /*@__PURE__*/ __L.at(__c28, 2) as any as S.Schema<DeleteAgentRequest>;
export interface DeleteAgentResponse {
  agentId: string;
  agentStatus: AgentStatus;
}
const DeleteAgentResponse = /*@__PURE__*/ __L.at(__c28, 3) as any as S.Schema<DeleteAgentResponse>;
export interface DeleteAgentActionGroupRequest {
  agentId: string;
  agentVersion: string;
  actionGroupId: string;
  skipResourceInUseCheck?: boolean;
}
const DeleteAgentActionGroupRequest = /*@__PURE__*/ __L.at(
  __c28,
  4,
) as any as S.Schema<DeleteAgentActionGroupRequest>;
export interface DeleteAgentActionGroupResponse {}
const DeleteAgentActionGroupResponse =
  DailySchedule as any as S.Schema<DeleteAgentActionGroupResponse>;
export interface DeleteAgentAliasRequest {
  agentId: string;
  agentAliasId: string;
}
const DeleteAgentAliasRequest = /*@__PURE__*/ __L.at(
  __c28,
  5,
) as any as S.Schema<DeleteAgentAliasRequest>;
export interface DeleteAgentAliasResponse {
  agentId: string;
  agentAliasId: string;
  agentAliasStatus: AgentAliasStatus;
}
const DeleteAgentAliasResponse = /*@__PURE__*/ __L.at(
  __c28,
  6,
) as any as S.Schema<DeleteAgentAliasResponse>;
export interface DeleteAgentVersionRequest {
  agentId: string;
  agentVersion: string;
  skipResourceInUseCheck?: boolean;
}
const DeleteAgentVersionRequest = /*@__PURE__*/ __L.at(
  __c28,
  7,
) as any as S.Schema<DeleteAgentVersionRequest>;
export interface DeleteAgentVersionResponse {
  agentId: string;
  agentVersion: string;
  agentStatus: AgentStatus;
}
const DeleteAgentVersionResponse = /*@__PURE__*/ __L.at(
  __c29,
  0,
) as any as S.Schema<DeleteAgentVersionResponse>;
export interface DeleteDataSourceRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
}
const DeleteDataSourceRequest = /*@__PURE__*/ __L.at(
  __c29,
  1,
) as any as S.Schema<DeleteDataSourceRequest>;
export interface DeleteDataSourceResponse {
  knowledgeBaseId: string;
  dataSourceId: string;
  status: DataSourceStatus;
}
const DeleteDataSourceResponse = /*@__PURE__*/ __L.at(
  __c29,
  2,
) as any as S.Schema<DeleteDataSourceResponse>;
export interface DeleteFlowRequest {
  flowIdentifier: string;
  skipResourceInUseCheck?: boolean;
}
const DeleteFlowRequest = /*@__PURE__*/ __L.at(__c29, 3) as any as S.Schema<DeleteFlowRequest>;
export interface DeleteFlowResponse {
  id: string;
}
const DeleteFlowResponse = /*@__PURE__*/ __L.at(__c29, 4) as any as S.Schema<DeleteFlowResponse>;
export type FlowAliasIdentifier = string;
export interface DeleteFlowAliasRequest {
  flowIdentifier: string;
  aliasIdentifier: string;
}
const DeleteFlowAliasRequest = /*@__PURE__*/ __L.at(
  __c29,
  5,
) as any as S.Schema<DeleteFlowAliasRequest>;
export interface DeleteFlowAliasResponse {
  flowId: string;
  id: string;
}
const DeleteFlowAliasResponse = /*@__PURE__*/ __L.at(
  __c29,
  6,
) as any as S.Schema<DeleteFlowAliasResponse>;
export interface DeleteFlowVersionRequest {
  flowIdentifier: string;
  flowVersion: string;
  skipResourceInUseCheck?: boolean;
}
const DeleteFlowVersionRequest = /*@__PURE__*/ __L.at(
  __c29,
  7,
) as any as S.Schema<DeleteFlowVersionRequest>;
export interface DeleteFlowVersionResponse {
  id: string;
  version: string;
}
const DeleteFlowVersionResponse = /*@__PURE__*/ __L.at(
  __c30,
  0,
) as any as S.Schema<DeleteFlowVersionResponse>;
export interface DeleteKnowledgeBaseRequest {
  knowledgeBaseId: string;
}
const DeleteKnowledgeBaseRequest = /*@__PURE__*/ __L.at(
  __c30,
  1,
) as any as S.Schema<DeleteKnowledgeBaseRequest>;
export interface DeleteKnowledgeBaseResponse {
  knowledgeBaseId: string;
  status: KnowledgeBaseStatus;
}
const DeleteKnowledgeBaseResponse = /*@__PURE__*/ __L.at(
  __c30,
  2,
) as any as S.Schema<DeleteKnowledgeBaseResponse>;
export type ContentDataSourceType = "CUSTOM" | "S3" | (string & {});
const ContentDataSourceType = S.String;

export interface CustomDocumentIdentifier {
  id: string;
}
const CustomDocumentIdentifier = DeleteFlowResponse as any as S.Schema<CustomDocumentIdentifier>;
export interface DocumentIdentifier {
  dataSourceType: ContentDataSourceType;
  s3?: S3Location;
  custom?: CustomDocumentIdentifier;
}
const DocumentIdentifier = /*@__PURE__*/ __L.at(__c30, 3) as any as S.Schema<DocumentIdentifier>;
export type DocumentIdentifiers = DocumentIdentifier[];
const DocumentIdentifiers = /*@__PURE__*/ __L.at(__c30, 4);
export interface DeleteKnowledgeBaseDocumentsRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
  clientToken?: string;
  documentIdentifiers: DocumentIdentifier[];
}
const DeleteKnowledgeBaseDocumentsRequest = /*@__PURE__*/ __L.at(
  __c30,
  5,
) as any as S.Schema<DeleteKnowledgeBaseDocumentsRequest>;
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
const DocumentStatus = S.String;

export interface KnowledgeBaseDocumentDetail {
  knowledgeBaseId: string;
  dataSourceId: string;
  status: DocumentStatus;
  identifier: DocumentIdentifier;
  statusReason?: string;
  updatedAt?: Date;
}
const KnowledgeBaseDocumentDetail = /*@__PURE__*/ __L.at(
  __c30,
  6,
) as any as S.Schema<KnowledgeBaseDocumentDetail>;
export type KnowledgeBaseDocumentDetails = KnowledgeBaseDocumentDetail[];
const KnowledgeBaseDocumentDetails = /*@__PURE__*/ __L.at(__c30, 7);
export interface DeleteKnowledgeBaseDocumentsResponse {
  documentDetails?: KnowledgeBaseDocumentDetail[];
}
const DeleteKnowledgeBaseDocumentsResponse = /*@__PURE__*/ __L.at(
  __c31,
  0,
) as any as S.Schema<DeleteKnowledgeBaseDocumentsResponse>;
export interface DeletePromptRequest {
  promptIdentifier: string;
  promptVersion?: string;
}
const DeletePromptRequest = /*@__PURE__*/ __L.at(__c31, 1) as any as S.Schema<DeletePromptRequest>;
export interface DeletePromptResponse {
  id: string;
  version?: string;
}
const DeletePromptResponse = /*@__PURE__*/ __L.at(
  __c31,
  2,
) as any as S.Schema<DeletePromptResponse>;
export type ResourceArn = string;
export type RevisionId = string;
export interface DeleteResourcePolicyRequest {
  resourceArn: string;
  expectedRevisionId?: string;
}
const DeleteResourcePolicyRequest = /*@__PURE__*/ __L.at(
  __c31,
  3,
) as any as S.Schema<DeleteResourcePolicyRequest>;
export interface DeleteResourcePolicyResponse {
  resourceArn: string;
  revisionId?: string;
}
const DeleteResourcePolicyResponse = /*@__PURE__*/ __L.at(
  __c31,
  4,
) as any as S.Schema<DeleteResourcePolicyResponse>;
export interface DeleteVpcConfigurationRequest {
  knowledgeBaseId: string;
  vpcConfigurationId: string;
}
const DeleteVpcConfigurationRequest = /*@__PURE__*/ __L.at(
  __c31,
  5,
) as any as S.Schema<DeleteVpcConfigurationRequest>;
export interface DeleteVpcConfigurationResponse {
  vpcConfigurationId: string;
  status: VpcConfigurationStatus;
}
const DeleteVpcConfigurationResponse =
  CreateVpcConfigurationResponse as any as S.Schema<DeleteVpcConfigurationResponse>;
export interface DisassociateAgentCollaboratorRequest {
  agentId: string;
  agentVersion: string;
  collaboratorId: string;
}
const DisassociateAgentCollaboratorRequest = /*@__PURE__*/ __L.at(
  __c31,
  6,
) as any as S.Schema<DisassociateAgentCollaboratorRequest>;
export interface DisassociateAgentCollaboratorResponse {}
const DisassociateAgentCollaboratorResponse = /*@__PURE__*/ __L.at(
  __c31,
  7,
) as any as S.Schema<DisassociateAgentCollaboratorResponse>;
export interface DisassociateAgentKnowledgeBaseRequest {
  agentId: string;
  agentVersion: string;
  knowledgeBaseId: string;
}
const DisassociateAgentKnowledgeBaseRequest = /*@__PURE__*/ __L.at(
  __c32,
  0,
) as any as S.Schema<DisassociateAgentKnowledgeBaseRequest>;
export interface DisassociateAgentKnowledgeBaseResponse {}
const DisassociateAgentKnowledgeBaseResponse =
  DisassociateAgentCollaboratorResponse as any as S.Schema<DisassociateAgentKnowledgeBaseResponse>;
export interface GetAgentRequest {
  agentId: string;
}
const GetAgentRequest = /*@__PURE__*/ __L.at(__c32, 1) as any as S.Schema<GetAgentRequest>;
export interface GetAgentResponse {
  agent: Agent;
}
const GetAgentResponse = /*@__PURE__*/ __L.at(__c32, 2) as any as S.Schema<GetAgentResponse>;
export interface GetAgentActionGroupRequest {
  agentId: string;
  agentVersion: string;
  actionGroupId: string;
}
const GetAgentActionGroupRequest = /*@__PURE__*/ __L.at(
  __c32,
  3,
) as any as S.Schema<GetAgentActionGroupRequest>;
export interface GetAgentActionGroupResponse {
  agentActionGroup: AgentActionGroup;
}
const GetAgentActionGroupResponse =
  CreateAgentActionGroupResponse as any as S.Schema<GetAgentActionGroupResponse>;
export interface GetAgentAliasRequest {
  agentId: string;
  agentAliasId: string;
}
const GetAgentAliasRequest = /*@__PURE__*/ __L.at(
  __c32,
  4,
) as any as S.Schema<GetAgentAliasRequest>;
export interface GetAgentAliasResponse {
  agentAlias: AgentAlias;
}
const GetAgentAliasResponse = CreateAgentAliasResponse as any as S.Schema<GetAgentAliasResponse>;
export interface GetAgentCollaboratorRequest {
  agentId: string;
  agentVersion: string;
  collaboratorId: string;
}
const GetAgentCollaboratorRequest = /*@__PURE__*/ __L.at(
  __c32,
  5,
) as any as S.Schema<GetAgentCollaboratorRequest>;
export interface GetAgentCollaboratorResponse {
  agentCollaborator: AgentCollaborator;
}
const GetAgentCollaboratorResponse =
  AssociateAgentCollaboratorResponse as any as S.Schema<GetAgentCollaboratorResponse>;
export interface GetAgentKnowledgeBaseRequest {
  agentId: string;
  agentVersion: string;
  knowledgeBaseId: string;
}
const GetAgentKnowledgeBaseRequest = /*@__PURE__*/ __L.at(
  __c32,
  6,
) as any as S.Schema<GetAgentKnowledgeBaseRequest>;
export interface GetAgentKnowledgeBaseResponse {
  agentKnowledgeBase: AgentKnowledgeBase;
}
const GetAgentKnowledgeBaseResponse =
  AssociateAgentKnowledgeBaseResponse as any as S.Schema<GetAgentKnowledgeBaseResponse>;
export interface GetAgentVersionRequest {
  agentId: string;
  agentVersion: string;
}
const GetAgentVersionRequest = /*@__PURE__*/ __L.at(
  __c32,
  7,
) as any as S.Schema<GetAgentVersionRequest>;
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
const AgentVersion = /*@__PURE__*/ __L.at(__c33, 0) as any as S.Schema<AgentVersion>;
export interface GetAgentVersionResponse {
  agentVersion: AgentVersion;
}
const GetAgentVersionResponse = /*@__PURE__*/ __L.at(
  __c33,
  1,
) as any as S.Schema<GetAgentVersionResponse>;
export interface GetDataSourceRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
}
const GetDataSourceRequest = /*@__PURE__*/ __L.at(
  __c33,
  2,
) as any as S.Schema<GetDataSourceRequest>;
export interface GetDataSourceResponse {
  dataSource: DataSource;
}
const GetDataSourceResponse = CreateDataSourceResponse as any as S.Schema<GetDataSourceResponse>;
export type IncludedData = "ALL_DATA" | "METADATA_ONLY" | (string & {});
const IncludedData = S.String;

export interface GetFlowRequest {
  flowIdentifier: string;
  includedData?: IncludedData;
}
const GetFlowRequest = /*@__PURE__*/ __L.at(__c33, 3) as any as S.Schema<GetFlowRequest>;
export type NonBlankString = string;
export type FlowValidationSeverity = "Warning" | "Error" | (string & {});
const FlowValidationSeverity = S.String;

export interface CyclicConnectionFlowValidationDetails {
  connection: string;
}
const CyclicConnectionFlowValidationDetails = /*@__PURE__*/ __L.at(
  __c33,
  4,
) as any as S.Schema<CyclicConnectionFlowValidationDetails>;
export interface DuplicateConnectionsFlowValidationDetails {
  source: string;
  target: string;
}
const DuplicateConnectionsFlowValidationDetails = /*@__PURE__*/ __L.at(
  __c33,
  5,
) as any as S.Schema<DuplicateConnectionsFlowValidationDetails>;
export interface DuplicateConditionExpressionFlowValidationDetails {
  node: string;
  expression: string | redacted.Redacted<string>;
}
const DuplicateConditionExpressionFlowValidationDetails = /*@__PURE__*/ __L.at(
  __c33,
  6,
) as any as S.Schema<DuplicateConditionExpressionFlowValidationDetails>;
export interface UnreachableNodeFlowValidationDetails {
  node: string;
}
const UnreachableNodeFlowValidationDetails = /*@__PURE__*/ __L.at(
  __c33,
  7,
) as any as S.Schema<UnreachableNodeFlowValidationDetails>;
export interface UnknownConnectionSourceFlowValidationDetails {
  connection: string;
}
const UnknownConnectionSourceFlowValidationDetails =
  CyclicConnectionFlowValidationDetails as any as S.Schema<UnknownConnectionSourceFlowValidationDetails>;
export interface UnknownConnectionSourceOutputFlowValidationDetails {
  connection: string;
}
const UnknownConnectionSourceOutputFlowValidationDetails =
  CyclicConnectionFlowValidationDetails as any as S.Schema<UnknownConnectionSourceOutputFlowValidationDetails>;
export interface UnknownConnectionTargetFlowValidationDetails {
  connection: string;
}
const UnknownConnectionTargetFlowValidationDetails =
  CyclicConnectionFlowValidationDetails as any as S.Schema<UnknownConnectionTargetFlowValidationDetails>;
export interface UnknownConnectionTargetInputFlowValidationDetails {
  connection: string;
}
const UnknownConnectionTargetInputFlowValidationDetails =
  CyclicConnectionFlowValidationDetails as any as S.Schema<UnknownConnectionTargetInputFlowValidationDetails>;
export interface UnknownConnectionConditionFlowValidationDetails {
  connection: string;
}
const UnknownConnectionConditionFlowValidationDetails =
  CyclicConnectionFlowValidationDetails as any as S.Schema<UnknownConnectionConditionFlowValidationDetails>;
export type ErrorMessage = string;
export interface MalformedConditionExpressionFlowValidationDetails {
  node: string;
  condition: string;
  cause: string;
}
const MalformedConditionExpressionFlowValidationDetails = /*@__PURE__*/ __L.at(
  __c34,
  0,
) as any as S.Schema<MalformedConditionExpressionFlowValidationDetails>;
export interface MalformedNodeInputExpressionFlowValidationDetails {
  node: string;
  input: string;
  cause: string;
}
const MalformedNodeInputExpressionFlowValidationDetails = /*@__PURE__*/ __L.at(
  __c34,
  1,
) as any as S.Schema<MalformedNodeInputExpressionFlowValidationDetails>;
export interface MismatchedNodeInputTypeFlowValidationDetails {
  node: string;
  input: string;
  expectedType: FlowNodeIODataType;
}
const MismatchedNodeInputTypeFlowValidationDetails = /*@__PURE__*/ __L.at(
  __c34,
  2,
) as any as S.Schema<MismatchedNodeInputTypeFlowValidationDetails>;
export interface MismatchedNodeOutputTypeFlowValidationDetails {
  node: string;
  output: string;
  expectedType: FlowNodeIODataType;
}
const MismatchedNodeOutputTypeFlowValidationDetails = /*@__PURE__*/ __L.at(
  __c34,
  3,
) as any as S.Schema<MismatchedNodeOutputTypeFlowValidationDetails>;
export interface IncompatibleConnectionDataTypeFlowValidationDetails {
  connection: string;
}
const IncompatibleConnectionDataTypeFlowValidationDetails =
  CyclicConnectionFlowValidationDetails as any as S.Schema<IncompatibleConnectionDataTypeFlowValidationDetails>;
export interface MissingConnectionConfigurationFlowValidationDetails {
  connection: string;
}
const MissingConnectionConfigurationFlowValidationDetails =
  CyclicConnectionFlowValidationDetails as any as S.Schema<MissingConnectionConfigurationFlowValidationDetails>;
export interface MissingDefaultConditionFlowValidationDetails {
  node: string;
}
const MissingDefaultConditionFlowValidationDetails =
  UnreachableNodeFlowValidationDetails as any as S.Schema<MissingDefaultConditionFlowValidationDetails>;
export interface MissingEndingNodesFlowValidationDetails {}
const MissingEndingNodesFlowValidationDetails =
  DisassociateAgentCollaboratorResponse as any as S.Schema<MissingEndingNodesFlowValidationDetails>;
export interface MissingNodeConfigurationFlowValidationDetails {
  node: string;
}
const MissingNodeConfigurationFlowValidationDetails =
  UnreachableNodeFlowValidationDetails as any as S.Schema<MissingNodeConfigurationFlowValidationDetails>;
export interface MissingNodeInputFlowValidationDetails {
  node: string;
  input: string;
}
const MissingNodeInputFlowValidationDetails = /*@__PURE__*/ __L.at(
  __c34,
  4,
) as any as S.Schema<MissingNodeInputFlowValidationDetails>;
export interface MissingNodeOutputFlowValidationDetails {
  node: string;
  output: string;
}
const MissingNodeOutputFlowValidationDetails = /*@__PURE__*/ __L.at(
  __c34,
  5,
) as any as S.Schema<MissingNodeOutputFlowValidationDetails>;
export interface MissingStartingNodesFlowValidationDetails {}
const MissingStartingNodesFlowValidationDetails =
  DisassociateAgentCollaboratorResponse as any as S.Schema<MissingStartingNodesFlowValidationDetails>;
export interface MultipleNodeInputConnectionsFlowValidationDetails {
  node: string;
  input: string;
}
const MultipleNodeInputConnectionsFlowValidationDetails =
  MissingNodeInputFlowValidationDetails as any as S.Schema<MultipleNodeInputConnectionsFlowValidationDetails>;
export interface UnfulfilledNodeInputFlowValidationDetails {
  node: string;
  input: string;
}
const UnfulfilledNodeInputFlowValidationDetails =
  MissingNodeInputFlowValidationDetails as any as S.Schema<UnfulfilledNodeInputFlowValidationDetails>;
export interface UnsatisfiedConnectionConditionsFlowValidationDetails {
  connection: string;
}
const UnsatisfiedConnectionConditionsFlowValidationDetails =
  CyclicConnectionFlowValidationDetails as any as S.Schema<UnsatisfiedConnectionConditionsFlowValidationDetails>;
export interface UnspecifiedFlowValidationDetails {}
const UnspecifiedFlowValidationDetails =
  DisassociateAgentCollaboratorResponse as any as S.Schema<UnspecifiedFlowValidationDetails>;
export interface UnknownNodeInputFlowValidationDetails {
  node: string;
  input: string;
}
const UnknownNodeInputFlowValidationDetails =
  MissingNodeInputFlowValidationDetails as any as S.Schema<UnknownNodeInputFlowValidationDetails>;
export interface UnknownNodeOutputFlowValidationDetails {
  node: string;
  output: string;
}
const UnknownNodeOutputFlowValidationDetails =
  MissingNodeOutputFlowValidationDetails as any as S.Schema<UnknownNodeOutputFlowValidationDetails>;
export interface MissingLoopInputNodeFlowValidationDetails {
  loopNode: string;
}
const MissingLoopInputNodeFlowValidationDetails = /*@__PURE__*/ __L.at(
  __c34,
  6,
) as any as S.Schema<MissingLoopInputNodeFlowValidationDetails>;
export interface MissingLoopControllerNodeFlowValidationDetails {
  loopNode: string;
}
const MissingLoopControllerNodeFlowValidationDetails =
  MissingLoopInputNodeFlowValidationDetails as any as S.Schema<MissingLoopControllerNodeFlowValidationDetails>;
export interface MultipleLoopInputNodesFlowValidationDetails {
  loopNode: string;
}
const MultipleLoopInputNodesFlowValidationDetails =
  MissingLoopInputNodeFlowValidationDetails as any as S.Schema<MultipleLoopInputNodesFlowValidationDetails>;
export interface MultipleLoopControllerNodesFlowValidationDetails {
  loopNode: string;
}
const MultipleLoopControllerNodesFlowValidationDetails =
  MissingLoopInputNodeFlowValidationDetails as any as S.Schema<MultipleLoopControllerNodesFlowValidationDetails>;
export type IncompatibleLoopNodeType =
  | "Input"
  | "Condition"
  | "Iterator"
  | "Collector"
  | (string & {});
const IncompatibleLoopNodeType = S.String;

export interface LoopIncompatibleNodeTypeFlowValidationDetails {
  node: string;
  incompatibleNodeType: IncompatibleLoopNodeType;
  incompatibleNodeName: string;
}
const LoopIncompatibleNodeTypeFlowValidationDetails = /*@__PURE__*/ __L.at(
  __c34,
  7,
) as any as S.Schema<LoopIncompatibleNodeTypeFlowValidationDetails>;
export interface InvalidLoopBoundaryFlowValidationDetails {
  connection: string;
  source: string;
  target: string;
}
const InvalidLoopBoundaryFlowValidationDetails = /*@__PURE__*/ __L.at(
  __c35,
  0,
) as any as S.Schema<InvalidLoopBoundaryFlowValidationDetails>;
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
const FlowValidationDetails = /*@__PURE__*/ __L.at(__c35, 1);
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
const FlowValidationType = S.String;

export interface FlowValidation {
  message: string;
  severity: FlowValidationSeverity;
  details?: FlowValidationDetails;
  type?: FlowValidationType;
}
const FlowValidation = /*@__PURE__*/ __L.at(__c35, 2) as any as S.Schema<FlowValidation>;
export type FlowValidations = FlowValidation[];
const FlowValidations = /*@__PURE__*/ __L.at(__c35, 3);
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
const GetFlowResponse = /*@__PURE__*/ __L.at(__c35, 4) as any as S.Schema<GetFlowResponse>;
export interface GetFlowAliasRequest {
  flowIdentifier: string;
  aliasIdentifier: string;
}
const GetFlowAliasRequest = /*@__PURE__*/ __L.at(__c35, 5) as any as S.Schema<GetFlowAliasRequest>;
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
const GetFlowAliasResponse = CreateFlowAliasResponse as any as S.Schema<GetFlowAliasResponse>;
export interface GetFlowVersionRequest {
  flowIdentifier: string;
  flowVersion: string;
  includedData?: IncludedData;
}
const GetFlowVersionRequest = /*@__PURE__*/ __L.at(
  __c35,
  6,
) as any as S.Schema<GetFlowVersionRequest>;
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
const GetFlowVersionResponse = /*@__PURE__*/ __L.at(
  __c35,
  7,
) as any as S.Schema<GetFlowVersionResponse>;
export interface GetIngestionJobRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
  ingestionJobId: string;
}
const GetIngestionJobRequest = /*@__PURE__*/ __L.at(
  __c36,
  0,
) as any as S.Schema<GetIngestionJobRequest>;
export type IngestionJobStatus =
  | "STARTING"
  | "IN_PROGRESS"
  | "COMPLETE"
  | "FAILED"
  | "STOPPING"
  | "STOPPED"
  | (string & {});
const IngestionJobStatus = S.String;

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
const IngestionJobStatistics = /*@__PURE__*/ __L.at(
  __c36,
  1,
) as any as S.Schema<IngestionJobStatistics>;
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
const IngestionJob = /*@__PURE__*/ __L.at(__c36, 2) as any as S.Schema<IngestionJob>;
export interface GetIngestionJobResponse {
  ingestionJob: IngestionJob;
}
const GetIngestionJobResponse = /*@__PURE__*/ __L.at(
  __c36,
  3,
) as any as S.Schema<GetIngestionJobResponse>;
export interface GetKnowledgeBaseRequest {
  knowledgeBaseId: string;
}
const GetKnowledgeBaseRequest = /*@__PURE__*/ __L.at(
  __c36,
  4,
) as any as S.Schema<GetKnowledgeBaseRequest>;
export interface GetKnowledgeBaseResponse {
  knowledgeBase: KnowledgeBase;
}
const GetKnowledgeBaseResponse = /*@__PURE__*/ __L.at(
  __c36,
  5,
) as any as S.Schema<GetKnowledgeBaseResponse>;
export interface GetKnowledgeBaseDocumentsRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
  documentIdentifiers: DocumentIdentifier[];
}
const GetKnowledgeBaseDocumentsRequest = /*@__PURE__*/ __L.at(
  __c36,
  6,
) as any as S.Schema<GetKnowledgeBaseDocumentsRequest>;
export interface GetKnowledgeBaseDocumentsResponse {
  documentDetails?: KnowledgeBaseDocumentDetail[];
}
const GetKnowledgeBaseDocumentsResponse =
  DeleteKnowledgeBaseDocumentsResponse as any as S.Schema<GetKnowledgeBaseDocumentsResponse>;
export interface GetPromptRequest {
  promptIdentifier: string;
  promptVersion?: string;
  includedData?: IncludedData;
}
const GetPromptRequest = /*@__PURE__*/ __L.at(__c36, 7) as any as S.Schema<GetPromptRequest>;
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
const GetPromptResponse = CreatePromptResponse as any as S.Schema<GetPromptResponse>;
export interface GetResourcePolicyRequest {
  resourceArn: string;
}
const GetResourcePolicyRequest = /*@__PURE__*/ __L.at(
  __c37,
  0,
) as any as S.Schema<GetResourcePolicyRequest>;
export type ResourcePolicy = string;
export interface GetResourcePolicyResponse {
  resourceArn: string;
  policy: string;
  revisionId: string;
}
const GetResourcePolicyResponse = /*@__PURE__*/ __L.at(
  __c37,
  1,
) as any as S.Schema<GetResourcePolicyResponse>;
export interface GetVpcConfigurationRequest {
  knowledgeBaseId: string;
  vpcConfigurationId: string;
}
const GetVpcConfigurationRequest = /*@__PURE__*/ __L.at(
  __c37,
  2,
) as any as S.Schema<GetVpcConfigurationRequest>;
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
const VpcConfiguration = /*@__PURE__*/ __L.at(__c37, 3) as any as S.Schema<VpcConfiguration>;
export interface GetVpcConfigurationResponse {
  vpcConfiguration: VpcConfiguration;
}
const GetVpcConfigurationResponse = /*@__PURE__*/ __L.at(
  __c37,
  4,
) as any as S.Schema<GetVpcConfigurationResponse>;
export type MetadataSourceType = "IN_LINE_ATTRIBUTE" | "S3_LOCATION" | (string & {});
const MetadataSourceType = S.String;

export type Key = string | redacted.Redacted<string>;
export type MetadataValueType = "BOOLEAN" | "NUMBER" | "STRING" | "STRING_LIST" | (string & {});
const MetadataValueType = S.String;

export type NumberValue = number;
export type StringValue = string | redacted.Redacted<string>;
export type StringListValue = (string | redacted.Redacted<string>)[];
const StringListValue = S3Prefixes as any as S.Schema<StringListValue>;
export interface MetadataAttributeValue {
  type: MetadataValueType;
  numberValue?: number;
  booleanValue?: boolean;
  stringValue?: string | redacted.Redacted<string>;
  stringListValue?: (string | redacted.Redacted<string>)[];
}
const MetadataAttributeValue = /*@__PURE__*/ __L.at(
  __c37,
  5,
) as any as S.Schema<MetadataAttributeValue>;
export interface MetadataAttribute {
  key: string | redacted.Redacted<string>;
  value: MetadataAttributeValue;
}
const MetadataAttribute = /*@__PURE__*/ __L.at(__c37, 6) as any as S.Schema<MetadataAttribute>;
export type MetadataAttributes = MetadataAttribute[];
const MetadataAttributes = /*@__PURE__*/ __L.at(__c37, 7);
export type S3ObjectUri = string;
export interface CustomS3Location {
  uri: string;
  bucketOwnerAccountId?: string;
}
const CustomS3Location = /*@__PURE__*/ __L.at(__c38, 0) as any as S.Schema<CustomS3Location>;
export type AccessControlPrincipalType = "USER" | (string & {});
const AccessControlPrincipalType = S.String;

export type AccessControlAccess = "ALLOW" | "DENY" | (string & {});
const AccessControlAccess = S.String;

export interface DocumentAccessControlEntry {
  name: string;
  type: AccessControlPrincipalType;
  access: AccessControlAccess;
}
const DocumentAccessControlEntry = /*@__PURE__*/ __L.at(
  __c38,
  1,
) as any as S.Schema<DocumentAccessControlEntry>;
export type DocumentAccessControlList = DocumentAccessControlEntry[];
const DocumentAccessControlList = /*@__PURE__*/ __L.at(__c38, 2);
export interface DocumentMetadata {
  type: MetadataSourceType;
  inlineAttributes?: MetadataAttribute[];
  s3Location?: CustomS3Location;
  accessControlList?: DocumentAccessControlEntry[];
}
const DocumentMetadata = /*@__PURE__*/ __L.at(__c38, 3) as any as S.Schema<DocumentMetadata>;
export type CustomSourceType = "IN_LINE" | "S3_LOCATION" | (string & {});
const CustomSourceType = S.String;

export type InlineContentType = "BYTE" | "TEXT" | (string & {});
const InlineContentType = S.String;

export type ByteContentBlob = Uint8Array | redacted.Redacted<Uint8Array>;
export interface ByteContentDoc {
  mimeType: string;
  data: Uint8Array | redacted.Redacted<Uint8Array>;
}
const ByteContentDoc = /*@__PURE__*/ __L.at(__c38, 4) as any as S.Schema<ByteContentDoc>;
export type Data = string | redacted.Redacted<string>;
export interface TextContentDoc {
  data: string | redacted.Redacted<string>;
}
const TextContentDoc = /*@__PURE__*/ __L.at(__c38, 5) as any as S.Schema<TextContentDoc>;
export interface InlineContent {
  type: InlineContentType;
  byteContent?: ByteContentDoc;
  textContent?: TextContentDoc;
}
const InlineContent = /*@__PURE__*/ __L.at(__c38, 6) as any as S.Schema<InlineContent>;
export interface CustomContent {
  customDocumentIdentifier: CustomDocumentIdentifier;
  sourceType: CustomSourceType;
  s3Location?: CustomS3Location;
  inlineContent?: InlineContent;
}
const CustomContent = /*@__PURE__*/ __L.at(__c38, 7) as any as S.Schema<CustomContent>;
export interface S3Content {
  s3Location: S3Location;
}
const S3Content = IntermediateStorage as any as S.Schema<S3Content>;
export interface DocumentContent {
  dataSourceType: ContentDataSourceType;
  custom?: CustomContent;
  s3?: S3Content;
}
const DocumentContent = /*@__PURE__*/ __L.at(__c39, 0) as any as S.Schema<DocumentContent>;
export interface KnowledgeBaseDocument {
  metadata?: DocumentMetadata;
  content: DocumentContent;
}
const KnowledgeBaseDocument = /*@__PURE__*/ __L.at(
  __c39,
  1,
) as any as S.Schema<KnowledgeBaseDocument>;
export type KnowledgeBaseDocuments = KnowledgeBaseDocument[];
const KnowledgeBaseDocuments = /*@__PURE__*/ __L.at(__c39, 2);
export interface IngestKnowledgeBaseDocumentsRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
  clientToken?: string;
  documents: KnowledgeBaseDocument[];
}
const IngestKnowledgeBaseDocumentsRequest = /*@__PURE__*/ __L.at(
  __c39,
  3,
) as any as S.Schema<IngestKnowledgeBaseDocumentsRequest>;
export interface IngestKnowledgeBaseDocumentsResponse {
  documentDetails?: KnowledgeBaseDocumentDetail[];
}
const IngestKnowledgeBaseDocumentsResponse =
  DeleteKnowledgeBaseDocumentsResponse as any as S.Schema<IngestKnowledgeBaseDocumentsResponse>;
export type MaxResults = number;
export type NextToken = string;
export interface ListAgentActionGroupsRequest {
  agentId: string;
  agentVersion: string;
  maxResults?: number;
  nextToken?: string;
}
const ListAgentActionGroupsRequest = /*@__PURE__*/ __L.at(
  __c39,
  4,
) as any as S.Schema<ListAgentActionGroupsRequest>;
export interface ActionGroupSummary {
  actionGroupId: string;
  actionGroupName: string;
  actionGroupState: ActionGroupState;
  description?: string;
  updatedAt: Date;
}
const ActionGroupSummary = /*@__PURE__*/ __L.at(__c39, 5) as any as S.Schema<ActionGroupSummary>;
export type ActionGroupSummaries = ActionGroupSummary[];
const ActionGroupSummaries = /*@__PURE__*/ __L.at(__c39, 6);
export interface ListAgentActionGroupsResponse {
  actionGroupSummaries: ActionGroupSummary[];
  nextToken?: string;
}
const ListAgentActionGroupsResponse = /*@__PURE__*/ __L.at(
  __c39,
  7,
) as any as S.Schema<ListAgentActionGroupsResponse>;
export interface ListAgentAliasesRequest {
  agentId: string;
  maxResults?: number;
  nextToken?: string;
}
const ListAgentAliasesRequest = /*@__PURE__*/ __L.at(
  __c40,
  0,
) as any as S.Schema<ListAgentAliasesRequest>;
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
const AgentAliasSummary = /*@__PURE__*/ __L.at(__c40, 1) as any as S.Schema<AgentAliasSummary>;
export type AgentAliasSummaries = AgentAliasSummary[];
const AgentAliasSummaries = /*@__PURE__*/ __L.at(__c40, 2);
export interface ListAgentAliasesResponse {
  agentAliasSummaries: AgentAliasSummary[];
  nextToken?: string;
}
const ListAgentAliasesResponse = /*@__PURE__*/ __L.at(
  __c40,
  3,
) as any as S.Schema<ListAgentAliasesResponse>;
export interface ListAgentCollaboratorsRequest {
  agentId: string;
  agentVersion: string;
  maxResults?: number;
  nextToken?: string;
}
const ListAgentCollaboratorsRequest = /*@__PURE__*/ __L.at(
  __c40,
  4,
) as any as S.Schema<ListAgentCollaboratorsRequest>;
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
const AgentCollaboratorSummary = /*@__PURE__*/ __L.at(
  __c40,
  5,
) as any as S.Schema<AgentCollaboratorSummary>;
export type AgentCollaboratorSummaries = AgentCollaboratorSummary[];
const AgentCollaboratorSummaries = /*@__PURE__*/ __L.at(__c40, 6);
export interface ListAgentCollaboratorsResponse {
  agentCollaboratorSummaries: AgentCollaboratorSummary[];
  nextToken?: string;
}
const ListAgentCollaboratorsResponse = /*@__PURE__*/ __L.at(
  __c40,
  7,
) as any as S.Schema<ListAgentCollaboratorsResponse>;
export interface ListAgentKnowledgeBasesRequest {
  agentId: string;
  agentVersion: string;
  maxResults?: number;
  nextToken?: string;
}
const ListAgentKnowledgeBasesRequest = /*@__PURE__*/ __L.at(
  __c41,
  0,
) as any as S.Schema<ListAgentKnowledgeBasesRequest>;
export interface AgentKnowledgeBaseSummary {
  knowledgeBaseId: string;
  description?: string;
  knowledgeBaseState: KnowledgeBaseState;
  updatedAt: Date;
}
const AgentKnowledgeBaseSummary = /*@__PURE__*/ __L.at(
  __c41,
  1,
) as any as S.Schema<AgentKnowledgeBaseSummary>;
export type AgentKnowledgeBaseSummaries = AgentKnowledgeBaseSummary[];
const AgentKnowledgeBaseSummaries = /*@__PURE__*/ __L.at(__c41, 2);
export interface ListAgentKnowledgeBasesResponse {
  agentKnowledgeBaseSummaries: AgentKnowledgeBaseSummary[];
  nextToken?: string;
}
const ListAgentKnowledgeBasesResponse = /*@__PURE__*/ __L.at(
  __c41,
  3,
) as any as S.Schema<ListAgentKnowledgeBasesResponse>;
export interface ListAgentsRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListAgentsRequest = /*@__PURE__*/ __L.at(__c41, 4) as any as S.Schema<ListAgentsRequest>;
export interface AgentSummary {
  agentId: string;
  agentName: string;
  agentStatus: AgentStatus;
  description?: string;
  updatedAt: Date;
  latestAgentVersion?: string;
  guardrailConfiguration?: GuardrailConfiguration;
}
const AgentSummary = /*@__PURE__*/ __L.at(__c41, 5) as any as S.Schema<AgentSummary>;
export type AgentSummaries = AgentSummary[];
const AgentSummaries = /*@__PURE__*/ __L.at(__c41, 6);
export interface ListAgentsResponse {
  agentSummaries: AgentSummary[];
  nextToken?: string;
}
const ListAgentsResponse = /*@__PURE__*/ __L.at(__c41, 7) as any as S.Schema<ListAgentsResponse>;
export interface ListAgentVersionsRequest {
  agentId: string;
  maxResults?: number;
  nextToken?: string;
}
const ListAgentVersionsRequest = /*@__PURE__*/ __L.at(
  __c42,
  0,
) as any as S.Schema<ListAgentVersionsRequest>;
export interface AgentVersionSummary {
  agentName: string;
  agentStatus: AgentStatus;
  agentVersion: string;
  createdAt: Date;
  updatedAt: Date;
  description?: string;
  guardrailConfiguration?: GuardrailConfiguration;
}
const AgentVersionSummary = /*@__PURE__*/ __L.at(__c42, 1) as any as S.Schema<AgentVersionSummary>;
export type AgentVersionSummaries = AgentVersionSummary[];
const AgentVersionSummaries = /*@__PURE__*/ __L.at(__c42, 2);
export interface ListAgentVersionsResponse {
  agentVersionSummaries: AgentVersionSummary[];
  nextToken?: string;
}
const ListAgentVersionsResponse = /*@__PURE__*/ __L.at(
  __c42,
  3,
) as any as S.Schema<ListAgentVersionsResponse>;
export interface ListDataSourcesRequest {
  knowledgeBaseId: string;
  maxResults?: number;
  nextToken?: string;
}
const ListDataSourcesRequest = /*@__PURE__*/ __L.at(
  __c42,
  4,
) as any as S.Schema<ListDataSourcesRequest>;
export interface DataSourceSummary {
  knowledgeBaseId: string;
  dataSourceId: string;
  name: string;
  status: DataSourceStatus;
  description?: string;
  updatedAt: Date;
}
const DataSourceSummary = /*@__PURE__*/ __L.at(__c42, 5) as any as S.Schema<DataSourceSummary>;
export type DataSourceSummaries = DataSourceSummary[];
const DataSourceSummaries = /*@__PURE__*/ __L.at(__c42, 6);
export interface ListDataSourcesResponse {
  dataSourceSummaries: DataSourceSummary[];
  nextToken?: string;
}
const ListDataSourcesResponse = /*@__PURE__*/ __L.at(
  __c42,
  7,
) as any as S.Schema<ListDataSourcesResponse>;
export interface ListFlowAliasesRequest {
  flowIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
const ListFlowAliasesRequest = /*@__PURE__*/ __L.at(
  __c43,
  0,
) as any as S.Schema<ListFlowAliasesRequest>;
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
const FlowAliasSummary = CreateFlowAliasResponse as any as S.Schema<FlowAliasSummary>;
export type FlowAliasSummaries = FlowAliasSummary[];
const FlowAliasSummaries = /*@__PURE__*/ __L.at(__c43, 1);
export interface ListFlowAliasesResponse {
  flowAliasSummaries: FlowAliasSummary[];
  nextToken?: string;
}
const ListFlowAliasesResponse = /*@__PURE__*/ __L.at(
  __c43,
  2,
) as any as S.Schema<ListFlowAliasesResponse>;
export interface ListFlowsRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListFlowsRequest = /*@__PURE__*/ __L.at(__c43, 3) as any as S.Schema<ListFlowsRequest>;
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
const FlowSummary = /*@__PURE__*/ __L.at(__c43, 4) as any as S.Schema<FlowSummary>;
export type FlowSummaries = FlowSummary[];
const FlowSummaries = /*@__PURE__*/ __L.at(__c43, 5);
export interface ListFlowsResponse {
  flowSummaries: FlowSummary[];
  nextToken?: string;
}
const ListFlowsResponse = /*@__PURE__*/ __L.at(__c43, 6) as any as S.Schema<ListFlowsResponse>;
export interface ListFlowVersionsRequest {
  flowIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
const ListFlowVersionsRequest = /*@__PURE__*/ __L.at(
  __c43,
  7,
) as any as S.Schema<ListFlowVersionsRequest>;
export interface FlowVersionSummary {
  id: string;
  arn: string;
  status: FlowStatus;
  createdAt: Date;
  version: string;
}
const FlowVersionSummary = /*@__PURE__*/ __L.at(__c44, 0) as any as S.Schema<FlowVersionSummary>;
export type FlowVersionSummaries = FlowVersionSummary[];
const FlowVersionSummaries = /*@__PURE__*/ __L.at(__c44, 1);
export interface ListFlowVersionsResponse {
  flowVersionSummaries: FlowVersionSummary[];
  nextToken?: string;
}
const ListFlowVersionsResponse = /*@__PURE__*/ __L.at(
  __c44,
  2,
) as any as S.Schema<ListFlowVersionsResponse>;
export type IngestionJobFilterAttribute = "STATUS" | (string & {});
const IngestionJobFilterAttribute = S.String;

export type IngestionJobFilterOperator = "EQ" | (string & {});
const IngestionJobFilterOperator = S.String;

export type IngestionJobFilterValue = string;
export type IngestionJobFilterValues = string[];
const IngestionJobFilterValues = StopSequences as any as S.Schema<IngestionJobFilterValues>;
export interface IngestionJobFilter {
  attribute: IngestionJobFilterAttribute;
  operator: IngestionJobFilterOperator;
  values: string[];
}
const IngestionJobFilter = /*@__PURE__*/ __L.at(__c44, 3) as any as S.Schema<IngestionJobFilter>;
export type IngestionJobFilters = IngestionJobFilter[];
const IngestionJobFilters = /*@__PURE__*/ __L.at(__c44, 4);
export type IngestionJobSortByAttribute = "STATUS" | "STARTED_AT" | (string & {});
const IngestionJobSortByAttribute = S.String;

export type SortOrder = "ASCENDING" | "DESCENDING" | (string & {});
const SortOrder = S.String;

export interface IngestionJobSortBy {
  attribute: IngestionJobSortByAttribute;
  order: SortOrder;
}
const IngestionJobSortBy = /*@__PURE__*/ __L.at(__c44, 5) as any as S.Schema<IngestionJobSortBy>;
export interface ListIngestionJobsRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
  filters?: IngestionJobFilter[];
  sortBy?: IngestionJobSortBy;
  maxResults?: number;
  nextToken?: string;
}
const ListIngestionJobsRequest = /*@__PURE__*/ __L.at(
  __c44,
  6,
) as any as S.Schema<ListIngestionJobsRequest>;
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
const IngestionJobSummary = /*@__PURE__*/ __L.at(__c44, 7) as any as S.Schema<IngestionJobSummary>;
export type IngestionJobSummaries = IngestionJobSummary[];
const IngestionJobSummaries = /*@__PURE__*/ __L.at(__c45, 0);
export interface ListIngestionJobsResponse {
  ingestionJobSummaries: IngestionJobSummary[];
  nextToken?: string;
}
const ListIngestionJobsResponse = /*@__PURE__*/ __L.at(
  __c45,
  1,
) as any as S.Schema<ListIngestionJobsResponse>;
export interface ListKnowledgeBaseDocumentsRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
  maxResults?: number;
  nextToken?: string;
}
const ListKnowledgeBaseDocumentsRequest = /*@__PURE__*/ __L.at(
  __c45,
  2,
) as any as S.Schema<ListKnowledgeBaseDocumentsRequest>;
export interface ListKnowledgeBaseDocumentsResponse {
  documentDetails: KnowledgeBaseDocumentDetail[];
  nextToken?: string;
}
const ListKnowledgeBaseDocumentsResponse = /*@__PURE__*/ __L.at(
  __c45,
  3,
) as any as S.Schema<ListKnowledgeBaseDocumentsResponse>;
export interface ListKnowledgeBasesRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListKnowledgeBasesRequest = /*@__PURE__*/ __L.at(
  __c45,
  4,
) as any as S.Schema<ListKnowledgeBasesRequest>;
export interface KnowledgeBaseSummary {
  knowledgeBaseId: string;
  name: string;
  description?: string;
  status: KnowledgeBaseStatus;
  updatedAt: Date;
}
const KnowledgeBaseSummary = /*@__PURE__*/ __L.at(
  __c45,
  5,
) as any as S.Schema<KnowledgeBaseSummary>;
export type KnowledgeBaseSummaries = KnowledgeBaseSummary[];
const KnowledgeBaseSummaries = /*@__PURE__*/ __L.at(__c45, 6);
export interface ListKnowledgeBasesResponse {
  knowledgeBaseSummaries: KnowledgeBaseSummary[];
  nextToken?: string;
}
const ListKnowledgeBasesResponse = /*@__PURE__*/ __L.at(
  __c45,
  7,
) as any as S.Schema<ListKnowledgeBasesResponse>;
export interface ListPromptsRequest {
  promptIdentifier?: string;
  maxResults?: number;
  nextToken?: string;
}
const ListPromptsRequest = /*@__PURE__*/ __L.at(__c46, 0) as any as S.Schema<ListPromptsRequest>;
export interface PromptSummary {
  name: string;
  description?: string;
  id: string;
  arn: string;
  version: string;
  createdAt: Date;
  updatedAt: Date;
}
const PromptSummary = /*@__PURE__*/ __L.at(__c46, 1) as any as S.Schema<PromptSummary>;
export type PromptSummaries = PromptSummary[];
const PromptSummaries = /*@__PURE__*/ __L.at(__c46, 2);
export interface ListPromptsResponse {
  promptSummaries: PromptSummary[];
  nextToken?: string;
}
const ListPromptsResponse = /*@__PURE__*/ __L.at(__c46, 3) as any as S.Schema<ListPromptsResponse>;
export type TaggableResourcesArn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c46,
  4,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c46,
  5,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface ListVpcConfigurationsRequest {
  knowledgeBaseId: string;
  statusFilter?: VpcConfigurationStatus;
  maxResults?: number;
  nextToken?: string;
}
const ListVpcConfigurationsRequest = /*@__PURE__*/ __L.at(
  __c46,
  6,
) as any as S.Schema<ListVpcConfigurationsRequest>;
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
const VpcConfigurationSummary = /*@__PURE__*/ __L.at(
  __c46,
  7,
) as any as S.Schema<VpcConfigurationSummary>;
export type VpcConfigurationSummaryList = VpcConfigurationSummary[];
const VpcConfigurationSummaryList = /*@__PURE__*/ __L.at(__c47, 0);
export interface ListVpcConfigurationsResponse {
  items: VpcConfigurationSummary[];
  nextToken?: string;
}
const ListVpcConfigurationsResponse = /*@__PURE__*/ __L.at(
  __c47,
  1,
) as any as S.Schema<ListVpcConfigurationsResponse>;
export interface PrepareAgentRequest {
  agentId: string;
}
const PrepareAgentRequest = /*@__PURE__*/ __L.at(__c47, 2) as any as S.Schema<PrepareAgentRequest>;
export interface PrepareAgentResponse {
  agentId: string;
  agentStatus: AgentStatus;
  agentVersion: string;
  preparedAt: Date;
}
const PrepareAgentResponse = /*@__PURE__*/ __L.at(
  __c47,
  3,
) as any as S.Schema<PrepareAgentResponse>;
export interface PrepareFlowRequest {
  flowIdentifier: string;
}
const PrepareFlowRequest = /*@__PURE__*/ __L.at(__c47, 4) as any as S.Schema<PrepareFlowRequest>;
export interface PrepareFlowResponse {
  id: string;
  status: FlowStatus;
}
const PrepareFlowResponse = /*@__PURE__*/ __L.at(__c47, 5) as any as S.Schema<PrepareFlowResponse>;
export interface PutResourcePolicyRequest {
  resourceArn: string;
  policy: string;
  expectedRevisionId?: string;
}
const PutResourcePolicyRequest = /*@__PURE__*/ __L.at(
  __c47,
  6,
) as any as S.Schema<PutResourcePolicyRequest>;
export interface PutResourcePolicyResponse {
  resourceArn: string;
  revisionId: string;
}
const PutResourcePolicyResponse = /*@__PURE__*/ __L.at(
  __c47,
  7,
) as any as S.Schema<PutResourcePolicyResponse>;
export interface StartIngestionJobRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
  clientToken?: string;
  description?: string;
}
const StartIngestionJobRequest = /*@__PURE__*/ __L.at(
  __c48,
  0,
) as any as S.Schema<StartIngestionJobRequest>;
export interface StartIngestionJobResponse {
  ingestionJob: IngestionJob;
}
const StartIngestionJobResponse = /*@__PURE__*/ __L.at(
  __c48,
  1,
) as any as S.Schema<StartIngestionJobResponse>;
export interface StopIngestionJobRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
  ingestionJobId: string;
}
const StopIngestionJobRequest = /*@__PURE__*/ __L.at(
  __c48,
  2,
) as any as S.Schema<StopIngestionJobRequest>;
export interface StopIngestionJobResponse {
  ingestionJob: IngestionJob;
}
const StopIngestionJobResponse =
  GetIngestionJobResponse as any as S.Schema<StopIngestionJobResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c48, 3) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DailySchedule as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = StopSequences as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c48,
  4,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = DailySchedule as any as S.Schema<UntagResourceResponse>;
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
const UpdateAgentRequest = /*@__PURE__*/ __L.at(__c48, 5) as any as S.Schema<UpdateAgentRequest>;
export interface UpdateAgentResponse {
  agent: Agent;
}
const UpdateAgentResponse = CreateAgentResponse as any as S.Schema<UpdateAgentResponse>;
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
const UpdateAgentActionGroupRequest = /*@__PURE__*/ __L.at(
  __c48,
  6,
) as any as S.Schema<UpdateAgentActionGroupRequest>;
export interface UpdateAgentActionGroupResponse {
  agentActionGroup: AgentActionGroup;
}
const UpdateAgentActionGroupResponse =
  CreateAgentActionGroupResponse as any as S.Schema<UpdateAgentActionGroupResponse>;
export interface UpdateAgentAliasRequest {
  agentId: string;
  agentAliasId: string;
  agentAliasName: string;
  description?: string;
  routingConfiguration?: AgentAliasRoutingConfigurationListItem[];
  aliasInvocationState?: AliasInvocationState;
}
const UpdateAgentAliasRequest = /*@__PURE__*/ __L.at(
  __c48,
  7,
) as any as S.Schema<UpdateAgentAliasRequest>;
export interface UpdateAgentAliasResponse {
  agentAlias: AgentAlias;
}
const UpdateAgentAliasResponse =
  CreateAgentAliasResponse as any as S.Schema<UpdateAgentAliasResponse>;
export interface UpdateAgentCollaboratorRequest {
  agentId: string;
  agentVersion: string;
  collaboratorId: string;
  agentDescriptor: AgentDescriptor;
  collaboratorName: string;
  collaborationInstruction: string | redacted.Redacted<string>;
  relayConversationHistory?: RelayConversationHistory;
}
const UpdateAgentCollaboratorRequest = /*@__PURE__*/ __L.at(
  __c49,
  0,
) as any as S.Schema<UpdateAgentCollaboratorRequest>;
export interface UpdateAgentCollaboratorResponse {
  agentCollaborator: AgentCollaborator;
}
const UpdateAgentCollaboratorResponse =
  AssociateAgentCollaboratorResponse as any as S.Schema<UpdateAgentCollaboratorResponse>;
export interface UpdateAgentKnowledgeBaseRequest {
  agentId: string;
  agentVersion: string;
  knowledgeBaseId: string;
  description?: string;
  knowledgeBaseState?: KnowledgeBaseState;
}
const UpdateAgentKnowledgeBaseRequest = /*@__PURE__*/ __L.at(
  __c49,
  1,
) as any as S.Schema<UpdateAgentKnowledgeBaseRequest>;
export interface UpdateAgentKnowledgeBaseResponse {
  agentKnowledgeBase: AgentKnowledgeBase;
}
const UpdateAgentKnowledgeBaseResponse =
  AssociateAgentKnowledgeBaseResponse as any as S.Schema<UpdateAgentKnowledgeBaseResponse>;
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
const UpdateDataSourceRequest = /*@__PURE__*/ __L.at(
  __c49,
  2,
) as any as S.Schema<UpdateDataSourceRequest>;
export interface UpdateDataSourceResponse {
  dataSource: DataSource;
}
const UpdateDataSourceResponse =
  CreateDataSourceResponse as any as S.Schema<UpdateDataSourceResponse>;
export interface UpdateFlowRequest {
  name: string;
  description?: string;
  executionRoleArn: string;
  customerEncryptionKeyArn?: string;
  definition?: FlowDefinition;
  flowIdentifier: string;
}
const UpdateFlowRequest = /*@__PURE__*/ __L.at(__c49, 3) as any as S.Schema<UpdateFlowRequest>;
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
const UpdateFlowResponse = CreateFlowResponse as any as S.Schema<UpdateFlowResponse>;
export interface UpdateFlowAliasRequest {
  name: string;
  description?: string;
  routingConfiguration: FlowAliasRoutingConfigurationListItem[];
  concurrencyConfiguration?: FlowAliasConcurrencyConfiguration;
  flowIdentifier: string;
  aliasIdentifier: string;
}
const UpdateFlowAliasRequest = /*@__PURE__*/ __L.at(
  __c49,
  4,
) as any as S.Schema<UpdateFlowAliasRequest>;
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
const UpdateFlowAliasResponse = CreateFlowAliasResponse as any as S.Schema<UpdateFlowAliasResponse>;
export interface UpdateKnowledgeBaseRequest {
  knowledgeBaseId: string;
  name: string;
  description?: string;
  roleArn: string;
  knowledgeBaseConfiguration: KnowledgeBaseConfiguration;
  storageConfiguration?: StorageConfiguration;
}
const UpdateKnowledgeBaseRequest = /*@__PURE__*/ __L.at(
  __c49,
  5,
) as any as S.Schema<UpdateKnowledgeBaseRequest>;
export interface UpdateKnowledgeBaseResponse {
  knowledgeBase: KnowledgeBase;
}
const UpdateKnowledgeBaseResponse =
  CreateKnowledgeBaseResponse as any as S.Schema<UpdateKnowledgeBaseResponse>;
export interface UpdatePromptRequest {
  name: string;
  description?: string;
  customerEncryptionKeyArn?: string;
  defaultVariant?: string;
  variants?: PromptVariant[];
  promptIdentifier: string;
}
const UpdatePromptRequest = /*@__PURE__*/ __L.at(__c49, 6) as any as S.Schema<UpdatePromptRequest>;
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
const UpdatePromptResponse = CreatePromptResponse as any as S.Schema<UpdatePromptResponse>;
export interface ValidateFlowDefinitionRequest {
  definition: FlowDefinition;
}
const ValidateFlowDefinitionRequest = /*@__PURE__*/ __L.at(
  __c49,
  7,
) as any as S.Schema<ValidateFlowDefinitionRequest>;
export interface ValidateFlowDefinitionResponse {
  validations: FlowValidation[];
}
const ValidateFlowDefinitionResponse = /*@__PURE__*/ __L.at(
  __c50,
  0,
) as any as S.Schema<ValidateFlowDefinitionResponse>;
export interface ValidationExceptionField {
  name: string;
  message: string;
}
const ValidationExceptionField = /*@__PURE__*/ __L.at(
  __c50,
  1,
) as any as S.Schema<ValidationExceptionField>;
export type ValidationExceptionFieldList = ValidationExceptionField[];
const ValidationExceptionFieldList = /*@__PURE__*/ __L.at(__c50, 2);
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
  input: AssociateAgentCollaboratorRequest,
  output: AssociateAgentCollaboratorResponse,
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
  input: AssociateAgentKnowledgeBaseRequest,
  output: AssociateAgentKnowledgeBaseResponse,
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
  input: CreateAgentRequest,
  output: CreateAgentResponse,
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
  input: CreateAgentActionGroupRequest,
  output: CreateAgentActionGroupResponse,
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
  input: CreateAgentAliasRequest,
  output: CreateAgentAliasResponse,
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
  input: CreateDataSourceRequest,
  output: CreateDataSourceResponse,
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
  input: CreateFlowRequest,
  output: CreateFlowResponse,
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
  input: CreateFlowAliasRequest,
  output: CreateFlowAliasResponse,
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
  input: CreateFlowVersionRequest,
  output: CreateFlowVersionResponse,
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
  input: CreateKnowledgeBaseRequest,
  output: CreateKnowledgeBaseResponse,
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
  input: CreatePromptRequest,
  output: CreatePromptResponse,
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
  input: CreatePromptVersionRequest,
  output: CreatePromptVersionResponse,
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
  input: CreateVpcConfigurationRequest,
  output: CreateVpcConfigurationResponse,
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
  input: DeleteAgentRequest,
  output: DeleteAgentResponse,
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
  input: DeleteAgentActionGroupRequest,
  output: DeleteAgentActionGroupResponse,
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
  input: DeleteAgentAliasRequest,
  output: DeleteAgentAliasResponse,
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
  input: DeleteAgentVersionRequest,
  output: DeleteAgentVersionResponse,
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
  input: DeleteDataSourceRequest,
  output: DeleteDataSourceResponse,
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
  input: DeleteFlowRequest,
  output: DeleteFlowResponse,
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
  input: DeleteFlowAliasRequest,
  output: DeleteFlowAliasResponse,
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
  input: DeleteFlowVersionRequest,
  output: DeleteFlowVersionResponse,
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
  input: DeleteKnowledgeBaseRequest,
  output: DeleteKnowledgeBaseResponse,
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
  input: DeleteKnowledgeBaseDocumentsRequest,
  output: DeleteKnowledgeBaseDocumentsResponse,
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
  input: DeletePromptRequest,
  output: DeletePromptResponse,
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
  input: DeleteResourcePolicyRequest,
  output: DeleteResourcePolicyResponse,
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
  input: DeleteVpcConfigurationRequest,
  output: DeleteVpcConfigurationResponse,
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
  input: DisassociateAgentCollaboratorRequest,
  output: DisassociateAgentCollaboratorResponse,
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
  input: DisassociateAgentKnowledgeBaseRequest,
  output: DisassociateAgentKnowledgeBaseResponse,
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
  input: GetAgentRequest,
  output: GetAgentResponse,
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
  input: GetAgentActionGroupRequest,
  output: GetAgentActionGroupResponse,
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
  input: GetAgentAliasRequest,
  output: GetAgentAliasResponse,
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
  input: GetAgentCollaboratorRequest,
  output: GetAgentCollaboratorResponse,
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
  input: GetAgentKnowledgeBaseRequest,
  output: GetAgentKnowledgeBaseResponse,
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
  input: GetAgentVersionRequest,
  output: GetAgentVersionResponse,
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
  input: GetDataSourceRequest,
  output: GetDataSourceResponse,
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
  input: GetFlowRequest,
  output: GetFlowResponse,
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
  input: GetFlowAliasRequest,
  output: GetFlowAliasResponse,
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
  input: GetFlowVersionRequest,
  output: GetFlowVersionResponse,
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
  input: GetIngestionJobRequest,
  output: GetIngestionJobResponse,
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
  input: GetKnowledgeBaseRequest,
  output: GetKnowledgeBaseResponse,
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
  input: GetKnowledgeBaseDocumentsRequest,
  output: GetKnowledgeBaseDocumentsResponse,
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
  input: GetPromptRequest,
  output: GetPromptResponse,
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
  input: GetResourcePolicyRequest,
  output: GetResourcePolicyResponse,
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
  input: GetVpcConfigurationRequest,
  output: GetVpcConfigurationResponse,
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
  input: IngestKnowledgeBaseDocumentsRequest,
  output: IngestKnowledgeBaseDocumentsResponse,
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
  input: ListAgentActionGroupsRequest,
  output: ListAgentActionGroupsResponse,
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
  input: ListAgentAliasesRequest,
  output: ListAgentAliasesResponse,
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
  input: ListAgentCollaboratorsRequest,
  output: ListAgentCollaboratorsResponse,
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
  input: ListAgentKnowledgeBasesRequest,
  output: ListAgentKnowledgeBasesResponse,
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
  input: ListAgentsRequest,
  output: ListAgentsResponse,
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
  input: ListAgentVersionsRequest,
  output: ListAgentVersionsResponse,
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
  input: ListDataSourcesRequest,
  output: ListDataSourcesResponse,
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
  input: ListFlowAliasesRequest,
  output: ListFlowAliasesResponse,
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
  input: ListFlowsRequest,
  output: ListFlowsResponse,
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
  input: ListFlowVersionsRequest,
  output: ListFlowVersionsResponse,
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
  input: ListIngestionJobsRequest,
  output: ListIngestionJobsResponse,
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
  input: ListKnowledgeBaseDocumentsRequest,
  output: ListKnowledgeBaseDocumentsResponse,
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
  input: ListKnowledgeBasesRequest,
  output: ListKnowledgeBasesResponse,
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
  input: ListPromptsRequest,
  output: ListPromptsResponse,
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
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
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
  input: ListVpcConfigurationsRequest,
  output: ListVpcConfigurationsResponse,
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
  input: PrepareAgentRequest,
  output: PrepareAgentResponse,
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
  input: PrepareFlowRequest,
  output: PrepareFlowResponse,
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
  input: PutResourcePolicyRequest,
  output: PutResourcePolicyResponse,
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
  input: StartIngestionJobRequest,
  output: StartIngestionJobResponse,
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
  input: StopIngestionJobRequest,
  output: StopIngestionJobResponse,
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
  input: TagResourceRequest,
  output: TagResourceResponse,
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
  input: UntagResourceRequest,
  output: UntagResourceResponse,
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
  input: UpdateAgentRequest,
  output: UpdateAgentResponse,
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
  input: UpdateAgentActionGroupRequest,
  output: UpdateAgentActionGroupResponse,
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
  input: UpdateAgentAliasRequest,
  output: UpdateAgentAliasResponse,
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
  input: UpdateAgentCollaboratorRequest,
  output: UpdateAgentCollaboratorResponse,
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
  input: UpdateAgentKnowledgeBaseRequest,
  output: UpdateAgentKnowledgeBaseResponse,
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
  input: UpdateDataSourceRequest,
  output: UpdateDataSourceResponse,
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
  input: UpdateFlowRequest,
  output: UpdateFlowResponse,
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
  input: UpdateFlowAliasRequest,
  output: UpdateFlowAliasResponse,
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
  input: UpdateKnowledgeBaseRequest,
  output: UpdateKnowledgeBaseResponse,
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
  input: UpdatePromptRequest,
  output: UpdatePromptResponse,
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
  input: ValidateFlowDefinitionRequest,
  output: ValidateFlowDefinitionResponse,
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
          agentDescriptor: AgentDescriptor,
          collaboratorName: S.String,
          collaborationInstruction: SensitiveString,
          relayConversationHistory: S.optional(RelayConversationHistory),
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
          agentDescriptor: AgentDescriptor,
          collaboratorId: S.String,
          collaborationInstruction: SensitiveString,
          collaboratorName: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          relayConversationHistory: S.optional(RelayConversationHistory),
          clientToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "AgentCollaborator" });
    case 3:
      return S.suspend(() => S.Struct({ agentCollaborator: AgentCollaborator })).annotate({
        identifier: "AssociateAgentCollaboratorResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          agentVersion: S.String.pipe(T.HttpLabel("agentVersion")),
          knowledgeBaseId: S.String,
          description: S.String,
          knowledgeBaseState: S.optional(KnowledgeBaseState),
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
          knowledgeBaseState: KnowledgeBaseState,
        }),
      ).annotate({ identifier: "AgentKnowledgeBase" });
    case 6:
      return S.suspend(() => S.Struct({ agentKnowledgeBase: AgentKnowledgeBase })).annotate({
        identifier: "AssociateAgentKnowledgeBaseResponse",
      });
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ lambda: S.String })]);
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ executor: S.optional(OrchestrationExecutor) })).annotate({
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
          stopSequences: S.optional(StopSequences),
        }),
      ).annotate({ identifier: "InferenceConfiguration" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          promptType: S.optional(PromptType),
          promptCreationMode: S.optional(CreationMode),
          promptState: S.optional(PromptState),
          basePromptTemplate: S.optional(SensitiveString),
          inferenceConfiguration: S.optional(InferenceConfiguration),
          parserMode: S.optional(CreationMode),
          foundationModel: S.optional(S.String),
          additionalModelRequestFields: S.optional(S.Any),
        }),
      ).annotate({ identifier: "PromptConfiguration" });
    case 5:
      return S.Array(PromptConfiguration);
    case 6:
      return S.suspend(() =>
        S.Struct({
          promptConfigurations: PromptConfigurations,
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
      return S.Array(MemoryType);
    case 1:
      return S.suspend(() => S.Struct({ maxRecentSessions: S.optional(S.Number) })).annotate({
        identifier: "SessionSummaryConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          enabledMemoryTypes: EnabledMemoryTypes,
          storageDays: S.optional(S.Number),
          sessionSummaryConfiguration: S.optional(SessionSummaryConfiguration),
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
          orchestrationType: S.optional(OrchestrationType),
          customOrchestration: S.optional(CustomOrchestration),
          idleSessionTTLInSeconds: S.optional(S.Number),
          agentResourceRoleArn: S.optional(S.String),
          customerEncryptionKeyArn: S.optional(S.String),
          tags: S.optional(TagsMap),
          promptOverrideConfiguration: S.optional(PromptOverrideConfiguration),
          guardrailConfiguration: S.optional(GuardrailConfiguration),
          memoryConfiguration: S.optional(MemoryConfiguration),
          agentCollaboration: S.optional(AgentCollaboration),
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
          agentStatus: AgentStatus,
          foundationModel: S.optional(S.String),
          description: S.optional(S.String),
          orchestrationType: S.optional(OrchestrationType),
          customOrchestration: S.optional(CustomOrchestration),
          idleSessionTTLInSeconds: S.Number,
          agentResourceRoleArn: S.String,
          customerEncryptionKeyArn: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          preparedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          failureReasons: S.optional(FailureReasons),
          recommendedActions: S.optional(RecommendedActions),
          promptOverrideConfiguration: S.optional(PromptOverrideConfiguration),
          guardrailConfiguration: S.optional(GuardrailConfiguration),
          memoryConfiguration: S.optional(MemoryConfiguration),
          agentCollaboration: S.optional(AgentCollaboration),
        }),
      ).annotate({ identifier: "Agent" });
    case 5:
      return S.suspend(() => S.Struct({ agent: Agent })).annotate({
        identifier: "CreateAgentResponse",
      });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ lambda: S.String }),
        /*@__PURE__*/ S.Struct({ customControl: CustomControlMethod }),
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
        /*@__PURE__*/ S.Struct({ s3: S3Identifier }),
        /*@__PURE__*/ S.Struct({ payload: SensitiveString }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          description: S.optional(S.String),
          type: Type,
          required: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ParameterDetail" });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ ParameterDetail.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          parameters: S.optional(ParameterMap),
          requireConfirmation: S.optional(RequireConfirmation),
        }),
      ).annotate({ identifier: "Function" });
    case 5:
      return S.Array(Function);
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ functions: Functions })]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          agentVersion: S.String.pipe(T.HttpLabel("agentVersion")),
          actionGroupName: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          description: S.optional(S.String),
          parentActionGroupSignature: S.optional(ActionGroupSignature),
          parentActionGroupSignatureParams: S.optional(ActionGroupSignatureParams),
          actionGroupExecutor: S.optional(ActionGroupExecutor),
          apiSchema: S.optional(APISchema),
          actionGroupState: S.optional(ActionGroupState),
          functionSchema: S.optional(FunctionSchema),
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
          parentActionSignature: S.optional(ActionGroupSignature),
          parentActionGroupSignatureParams: S.optional(ActionGroupSignatureParams),
          actionGroupExecutor: S.optional(ActionGroupExecutor),
          apiSchema: S.optional(APISchema),
          functionSchema: S.optional(FunctionSchema),
          actionGroupState: ActionGroupState,
        }),
      ).annotate({ identifier: "AgentActionGroup" });
    case 1:
      return S.suspend(() => S.Struct({ agentActionGroup: AgentActionGroup })).annotate({
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
      return S.Array(AgentAliasRoutingConfigurationListItem);
    case 4:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          agentAliasName: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          description: S.optional(S.String),
          routingConfiguration: S.optional(AgentAliasRoutingConfiguration),
          tags: S.optional(TagsMap),
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
          routingConfiguration: S.optional(AgentAliasRoutingConfiguration),
          endDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          startDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "AgentAliasHistoryEvent" });
    case 6:
      return S.Array(AgentAliasHistoryEvent);
    case 7:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String,
          agentAliasId: S.String,
          agentAliasName: S.String,
          agentAliasArn: S.String,
          clientToken: S.optional(S.String),
          description: S.optional(S.String),
          routingConfiguration: AgentAliasRoutingConfiguration,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          agentAliasHistoryEvents: S.optional(AgentAliasHistoryEvents),
          agentAliasStatus: AgentAliasStatus,
          failureReasons: S.optional(FailureReasons),
          aliasInvocationState: S.optional(AliasInvocationState),
        }),
      ).annotate({ identifier: "AgentAlias" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ agentAlias: AgentAlias })).annotate({
        identifier: "CreateAgentAliasResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          deletionProtectionStatus: EnabledOrDisabledState,
          deletionProtectionThreshold: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "DeletionProtectionConfiguration",
      });
    case 2:
      return S.suspend(() => S.Struct({ imageExtractionStatus: EnabledOrDisabledState })).annotate({
        identifier: "ImageExtractionConfiguration",
      });
    case 3:
      return S.suspend(() => S.Struct({ audioExtractionStatus: EnabledOrDisabledState })).annotate({
        identifier: "AudioExtractionConfiguration",
      });
    case 4:
      return S.suspend(() => S.Struct({ videoExtractionStatus: EnabledOrDisabledState })).annotate({
        identifier: "VideoExtractionConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          imageExtractionConfiguration: S.optional(ImageExtractionConfiguration),
          audioExtractionConfiguration: S.optional(AudioExtractionConfiguration),
          videoExtractionConfiguration: S.optional(VideoExtractionConfiguration),
        }),
      ).annotate({
        identifier: "MediaExtractionConfiguration",
      });
    case 6:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DailySchedule",
      });
    case 7:
      return S.suspend(() => S.Struct({ dayOfWeek: DayOfWeek })).annotate({
        identifier: "WeeklySchedule",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ dayNumber: S.Number }),
        /*@__PURE__*/ S.Struct({ lastDayOfMonth: LastDayOfMonth }),
      ]);
    case 1:
      return S.suspend(() => S.Struct({ dayOfMonth: DayOfMonth })).annotate({
        identifier: "MonthlySchedule",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ daily: DailySchedule }),
        /*@__PURE__*/ S.Struct({ weekly: WeeklySchedule }),
        /*@__PURE__*/ S.Struct({ monthly: MonthlySchedule }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          deletionProtectionConfiguration: S.optional(DeletionProtectionConfiguration),
          mediaExtractionConfiguration: S.optional(MediaExtractionConfiguration),
          connectorParameters: S.optional(S.Any),
          syncSchedule: S.optional(SyncSchedule),
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
          inclusionPrefixes: S.optional(S3Prefixes),
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
      return S.Array(SeedUrl);
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ seedUrls: S.optional(SeedUrls) })).annotate({
        identifier: "UrlConfiguration",
      });
    case 1:
      return S.suspend(() => S.Struct({ urlConfiguration: UrlConfiguration })).annotate({
        identifier: "WebSourceConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ rateLimit: S.optional(S.Number), maxPages: S.optional(S.Number) }),
      ).annotate({ identifier: "WebCrawlerLimits" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          crawlerLimits: S.optional(WebCrawlerLimits),
          inclusionFilters: S.optional(FilterList),
          exclusionFilters: S.optional(FilterList),
          scope: S.optional(WebScopeType),
          userAgent: S.optional(SensitiveString),
          userAgentHeader: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "WebCrawlerConfiguration" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          sourceConfiguration: WebSourceConfiguration,
          crawlerConfiguration: S.optional(WebCrawlerConfiguration),
        }),
      ).annotate({
        identifier: "WebDataSourceConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          hostUrl: S.String,
          hostType: ConfluenceHostType,
          authType: ConfluenceAuthType,
          credentialsSecretArn: S.String,
        }),
      ).annotate({
        identifier: "ConfluenceSourceConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          objectType: SensitiveString,
          inclusionFilters: S.optional(FilterList),
          exclusionFilters: S.optional(FilterList),
        }),
      ).annotate({ identifier: "PatternObjectFilter" });
    case 7:
      return S.Array(PatternObjectFilter);
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ filters: PatternObjectFilterList })).annotate({
        identifier: "PatternObjectFilterConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          type: CrawlFilterConfigurationType,
          patternObjectFilter: S.optional(PatternObjectFilterConfiguration),
        }),
      ).annotate({ identifier: "CrawlFilterConfiguration" });
    case 2:
      return S.suspend(() =>
        S.Struct({ filterConfiguration: S.optional(CrawlFilterConfiguration) }),
      ).annotate({
        identifier: "ConfluenceCrawlerConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          sourceConfiguration: ConfluenceSourceConfiguration,
          crawlerConfiguration: S.optional(ConfluenceCrawlerConfiguration),
        }),
      ).annotate({
        identifier: "ConfluenceDataSourceConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          hostUrl: S.String,
          authType: SalesforceAuthType,
          credentialsSecretArn: S.String,
        }),
      ).annotate({
        identifier: "SalesforceSourceConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          sourceConfiguration: SalesforceSourceConfiguration,
          crawlerConfiguration: S.optional(SalesforceCrawlerConfiguration),
        }),
      ).annotate({
        identifier: "SalesforceDataSourceConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          tenantId: S.optional(S.String),
          domain: S.String,
          siteUrls: SharePointSiteUrls,
          hostType: SharePointHostType,
          authType: SharePointAuthType,
          credentialsSecretArn: S.String,
        }),
      ).annotate({
        identifier: "SharePointSourceConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          sourceConfiguration: SharePointSourceConfiguration,
          crawlerConfiguration: S.optional(SharePointCrawlerConfiguration),
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
          type: DataSourceType,
          managedKnowledgeBaseConnectorConfiguration: S.optional(
            ManagedKnowledgeBaseConnectorConfiguration,
          ),
          s3Configuration: S.optional(S3DataSourceConfiguration),
          webConfiguration: S.optional(WebDataSourceConfiguration),
          confluenceConfiguration: S.optional(ConfluenceDataSourceConfiguration),
          salesforceConfiguration: S.optional(SalesforceDataSourceConfiguration),
          sharePointConfiguration: S.optional(SharePointDataSourceConfiguration),
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
      return S.Array(HierarchicalChunkingLevelConfiguration);
    case 5:
      return S.suspend(() =>
        S.Struct({
          levelConfigurations: HierarchicalChunkingLevelConfigurations,
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
          chunkingStrategy: ChunkingStrategy,
          fixedSizeChunkingConfiguration: S.optional(FixedSizeChunkingConfiguration),
          hierarchicalChunkingConfiguration: S.optional(HierarchicalChunkingConfiguration),
          semanticChunkingConfiguration: S.optional(SemanticChunkingConfiguration),
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
      return S.suspend(() => S.Struct({ s3Location: S3Location })).annotate({
        identifier: "IntermediateStorage",
      });
    case 2:
      return S.suspend(() => S.Struct({ lambdaArn: S.String })).annotate({
        identifier: "TransformationLambdaConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ transformationLambdaConfiguration: TransformationLambdaConfiguration }),
      ).annotate({ identifier: "TransformationFunction" });
    case 4:
      return S.suspend(() =>
        S.Struct({ transformationFunction: TransformationFunction, stepToApply: StepType }),
      ).annotate({ identifier: "Transformation" });
    case 5:
      return S.Array(Transformation);
    case 6:
      return S.suspend(() =>
        S.Struct({ intermediateStorage: IntermediateStorage, transformations: Transformations }),
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
          parsingPrompt: S.optional(ParsingPrompt),
          parsingModality: S.optional(ParsingModality),
        }),
      ).annotate({
        identifier: "BedrockFoundationModelConfiguration",
      });
    case 1:
      return S.suspend(() => S.Struct({ parsingModality: S.optional(ParsingModality) })).annotate({
        identifier: "BedrockDataAutomationConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          parsingStrategy: ParsingStrategy,
          bedrockFoundationModelConfiguration: S.optional(BedrockFoundationModelConfiguration),
          bedrockDataAutomationConfiguration: S.optional(BedrockDataAutomationConfiguration),
        }),
      ).annotate({ identifier: "ParsingConfiguration" });
    case 3:
      return S.suspend(() => S.Struct({ method: EnrichmentStrategyMethod })).annotate({
        identifier: "EnrichmentStrategyConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          enrichmentStrategyConfiguration: EnrichmentStrategyConfiguration,
          modelArn: S.String,
        }),
      ).annotate({
        identifier: "BedrockFoundationModelContextEnrichmentConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          type: ContextEnrichmentType,
          bedrockFoundationModelConfiguration: S.optional(
            BedrockFoundationModelContextEnrichmentConfiguration,
          ),
        }),
      ).annotate({
        identifier: "ContextEnrichmentConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          chunkingConfiguration: S.optional(ChunkingConfiguration),
          customTransformationConfiguration: S.optional(CustomTransformationConfiguration),
          parsingConfiguration: S.optional(ParsingConfiguration),
          contextEnrichmentConfiguration: S.optional(ContextEnrichmentConfiguration),
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
          dataSourceConfiguration: DataSourceConfiguration,
          dataDeletionPolicy: S.optional(DataDeletionPolicy),
          serverSideEncryptionConfiguration: S.optional(ServerSideEncryptionConfiguration),
          vectorIngestionConfiguration: S.optional(VectorIngestionConfiguration),
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
          status: DataSourceStatus,
          description: S.optional(S.String),
          dataSourceConfiguration: DataSourceConfiguration,
          serverSideEncryptionConfiguration: S.optional(ServerSideEncryptionConfiguration),
          vectorIngestionConfiguration: S.optional(VectorIngestionConfiguration),
          dataDeletionPolicy: S.optional(DataDeletionPolicy),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          failureReasons: S.optional(FailureReasons),
        }),
      ).annotate({ identifier: "DataSource" });
    case 1:
      return S.suspend(() => S.Struct({ dataSource: DataSource })).annotate({
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
          stopSequences: S.optional(StopSequences),
        }),
      ).annotate({
        identifier: "PromptModelInferenceConfiguration",
      });
    case 4:
      return S.Union([/*@__PURE__*/ S.Struct({ text: PromptModelInferenceConfiguration })]);
    case 5:
      return S.Record(S.String, /*@__PURE__*/ S.Any.pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          modelArn: S.String,
          additionalModelRequestFields: S.optional(AdditionalModelRequestFields),
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
      return S.Array(FieldForReranking);
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ fieldsToInclude: FieldsForReranking }),
        /*@__PURE__*/ S.Struct({ fieldsToExclude: FieldsForReranking }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          selectionMode: RerankingMetadataSelectionMode,
          selectiveModeConfiguration: S.optional(RerankingMetadataSelectiveModeConfiguration),
        }),
      ).annotate({
        identifier: "MetadataConfigurationForReranking",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          modelConfiguration: VectorSearchBedrockRerankingModelConfiguration,
          numberOfRerankedResults: S.optional(S.Number),
          metadataConfiguration: S.optional(MetadataConfigurationForReranking),
        }),
      ).annotate({
        identifier: "VectorSearchBedrockRerankingConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          type: VectorSearchRerankingConfigurationType,
          bedrockRerankingConfiguration: S.optional(VectorSearchBedrockRerankingConfiguration),
        }),
      ).annotate({
        identifier: "VectorSearchRerankingConfiguration",
      });
    case 5:
      return S.suspend(() => S.Struct({ latency: S.optional(PerformanceConfigLatency) })).annotate({
        identifier: "PerformanceConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          promptTemplate: S.optional(KnowledgeBasePromptTemplate),
          inferenceConfig: S.optional(PromptInferenceConfiguration),
          additionalModelRequestFields: S.optional(AdditionalModelRequestFields),
          performanceConfig: S.optional(PerformanceConfiguration),
        }),
      ).annotate({
        identifier: "KnowledgeBaseOrchestrationConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String,
          modelId: S.optional(S.String),
          guardrailConfiguration: S.optional(GuardrailConfiguration),
          numberOfResults: S.optional(S.Number),
          promptTemplate: S.optional(KnowledgeBasePromptTemplate),
          inferenceConfiguration: S.optional(PromptInferenceConfiguration),
          rerankingConfiguration: S.optional(VectorSearchRerankingConfiguration),
          orchestrationConfiguration: S.optional(KnowledgeBaseOrchestrationConfiguration),
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
      return S.Array(FlowCondition);
    case 2:
      return S.suspend(() => S.Struct({ conditions: FlowConditions })).annotate({
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
      return S.suspend(() => S.Struct({ type: CachePointType })).annotate({
        identifier: "CachePointBlock",
      });
    case 6:
      return S.suspend(() => S.Struct({ name: S.optional(S.String) })).annotate({
        identifier: "PromptInputVariable",
      });
    case 7:
      return S.Array(PromptInputVariable);
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          text: SensitiveString,
          cachePoint: S.optional(CachePointBlock),
          inputVariables: S.optional(PromptInputVariablesList),
        }),
      ).annotate({
        identifier: "TextPromptTemplateConfiguration",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ text: S.String }),
        /*@__PURE__*/ S.Struct({ cachePoint: CachePointBlock }),
      ]);
    case 2:
      return S.Array(ContentBlock);
    case 3:
      return S.suspend(() => S.Struct({ role: ConversationRole, content: ContentBlocks })).annotate(
        { identifier: "Message" },
      );
    case 4:
      return S.Array(Message);
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ json: S.Any })]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          inputSchema: ToolInputSchema,
          strict: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ToolSpecification" });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ toolSpec: ToolSpecification }),
        /*@__PURE__*/ S.Struct({ cachePoint: CachePointBlock }),
      ]);
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.Array(Tool);
    case 1:
      return S.suspend(() => S.Struct({ name: S.String })).annotate({
        identifier: "SpecificToolChoice",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ auto: AutoToolChoice }),
        /*@__PURE__*/ S.Struct({ any: AnyToolChoice }),
        /*@__PURE__*/ S.Struct({ tool: SpecificToolChoice }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({ tools: Tools, toolChoice: S.optional(ToolChoice) }),
      ).annotate({ identifier: "ToolConfiguration" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          messages: Messages,
          system: S.optional(SystemContentBlocks),
          inputVariables: S.optional(PromptInputVariablesList),
          toolConfiguration: S.optional(ToolConfiguration),
        }),
      ).annotate({
        identifier: "ChatPromptTemplateConfiguration",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ text: TextPromptTemplateConfiguration }),
        /*@__PURE__*/ S.Struct({ chat: ChatPromptTemplateConfiguration }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          templateType: PromptTemplateType,
          templateConfiguration: PromptTemplateConfiguration,
          modelId: S.String,
          inferenceConfiguration: S.optional(PromptInferenceConfiguration),
          additionalModelRequestFields: S.optional(S.Any),
        }),
      ).annotate({
        identifier: "PromptFlowNodeInlineConfiguration",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ resource: PromptFlowNodeResourceConfiguration }),
        /*@__PURE__*/ S.Struct({ inline: PromptFlowNodeInlineConfiguration }),
      ]);
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          sourceConfiguration: PromptFlowNodeSourceConfiguration,
          guardrailConfiguration: S.optional(GuardrailConfiguration),
        }),
      ).annotate({
        identifier: "PromptFlowNodeConfiguration",
      });
    case 1:
      return S.suspend(() => S.Struct({ bucketName: S.String })).annotate({
        identifier: "StorageFlowNodeS3Configuration",
      });
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ s3: StorageFlowNodeS3Configuration })]);
    case 3:
      return S.suspend(() =>
        S.Struct({ serviceConfiguration: StorageFlowNodeServiceConfiguration }),
      ).annotate({
        identifier: "StorageFlowNodeConfiguration",
      });
    case 4:
      return S.suspend(() => S.Struct({ agentAliasArn: S.String })).annotate({
        identifier: "AgentFlowNodeConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ code: SensitiveString, language: SupportedLanguages }),
      ).annotate({
        identifier: "InlineCodeFlowNodeConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          definition: S.suspend((): S.Schema<FlowDefinition> => FlowDefinition).annotate({
            identifier: "FlowDefinition",
          }),
        }),
      ).annotate({
        identifier: "LoopFlowNodeConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ continueCondition: FlowCondition, maxIterations: S.optional(S.Number) }),
      ).annotate({
        identifier: "LoopControllerFlowNodeConfiguration",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ input: InputFlowNodeConfiguration }),
        /*@__PURE__*/ S.Struct({ output: OutputFlowNodeConfiguration }),
        /*@__PURE__*/ S.Struct({ knowledgeBase: KnowledgeBaseFlowNodeConfiguration }),
        /*@__PURE__*/ S.Struct({ condition: ConditionFlowNodeConfiguration }),
        /*@__PURE__*/ S.Struct({ lex: LexFlowNodeConfiguration }),
        /*@__PURE__*/ S.Struct({ prompt: PromptFlowNodeConfiguration }),
        /*@__PURE__*/ S.Struct({ lambdaFunction: LambdaFunctionFlowNodeConfiguration }),
        /*@__PURE__*/ S.Struct({ storage: StorageFlowNodeConfiguration }),
        /*@__PURE__*/ S.Struct({ agent: AgentFlowNodeConfiguration }),
        /*@__PURE__*/ S.Struct({ retrieval: RetrievalFlowNodeConfiguration }),
        /*@__PURE__*/ S.Struct({ iterator: IteratorFlowNodeConfiguration }),
        /*@__PURE__*/ S.Struct({ collector: CollectorFlowNodeConfiguration }),
        /*@__PURE__*/ S.Struct({ inlineCode: InlineCodeFlowNodeConfiguration }),
        /*@__PURE__*/ S.Struct({
          loop: /*@__PURE__*/ S.suspend(
            (): S.Schema<LoopFlowNodeConfiguration> => LoopFlowNodeConfiguration,
          ).annotate({
            identifier: "LoopFlowNodeConfiguration",
          }),
        }),
        /*@__PURE__*/ S.Struct({ loopInput: LoopInputFlowNodeConfiguration }),
        /*@__PURE__*/ S.Struct({ loopController: LoopControllerFlowNodeConfiguration }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          type: FlowNodeIODataType,
          expression: SensitiveString,
          category: S.optional(FlowNodeInputCategory),
        }),
      ).annotate({ identifier: "FlowNodeInput" });
    case 2:
      return S.Array(FlowNodeInput);
    case 3:
      return S.suspend(() => S.Struct({ name: S.String, type: FlowNodeIODataType })).annotate({
        identifier: "FlowNodeOutput",
      });
    case 4:
      return S.Array(FlowNodeOutput);
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          type: FlowNodeType,
          configuration: S.optional(
            S.suspend(() => FlowNodeConfiguration).annotate({
              identifier: "FlowNodeConfiguration",
            }),
          ),
          inputs: S.optional(FlowNodeInputs),
          outputs: S.optional(FlowNodeOutputs),
        }),
      ).annotate({ identifier: "FlowNode" });
    case 6:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<FlowNode> => FlowNode).annotate({
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
        /*@__PURE__*/ S.Struct({ data: FlowDataConnectionConfiguration }),
        /*@__PURE__*/ S.Struct({ conditional: FlowConditionalConnectionConfiguration }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          type: FlowConnectionType,
          name: S.String,
          source: S.String,
          target: S.String,
          configuration: S.optional(FlowConnectionConfiguration),
        }),
      ).annotate({ identifier: "FlowConnection" });
    case 3:
      return S.Array(FlowConnection);
    case 4:
      return S.suspend(() =>
        S.Struct({
          nodes: S.optional(S.suspend(() => FlowNodes).annotate({ identifier: "FlowNodes" })),
          connections: S.optional(FlowConnections),
        }),
      ).annotate({ identifier: "FlowDefinition" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          executionRoleArn: S.String,
          customerEncryptionKeyArn: S.optional(S.String),
          definition: S.optional(FlowDefinition),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(TagsMap),
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
          status: FlowStatus,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          version: S.String,
          definition: S.optional(FlowDefinition),
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
      return S.Array(FlowAliasRoutingConfigurationListItem);
    case 1:
      return S.suspend(() =>
        S.Struct({ type: ConcurrencyType, maxConcurrency: S.optional(S.Number) }),
      ).annotate({
        identifier: "FlowAliasConcurrencyConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          routingConfiguration: FlowAliasRoutingConfiguration,
          concurrencyConfiguration: S.optional(FlowAliasConcurrencyConfiguration),
          flowIdentifier: S.String.pipe(T.HttpLabel("flowIdentifier")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(TagsMap),
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
          routingConfiguration: FlowAliasRoutingConfiguration,
          concurrencyConfiguration: S.optional(FlowAliasConcurrencyConfiguration),
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
          status: FlowStatus,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          version: S.String,
          definition: S.optional(FlowDefinition),
        }),
      ).annotate({
        identifier: "CreateFlowVersionResponse",
      });
    case 6:
      return S.suspend(() => S.Struct({ fixedLengthDuration: S.Number })).annotate({
        identifier: "AudioSegmentationConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ segmentationConfiguration: AudioSegmentationConfiguration }),
      ).annotate({ identifier: "AudioConfiguration" });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AudioConfiguration);
    case 1:
      return S.suspend(() =>
        S.Struct({
          dimensions: S.optional(S.Number),
          embeddingDataType: S.optional(EmbeddingDataType),
          audio: S.optional(AudioConfigurations),
          video: S.optional(VideoConfigurations),
          modelConfiguration: S.optional(S.Any),
        }),
      ).annotate({
        identifier: "BedrockEmbeddingModelConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          bedrockEmbeddingModelConfiguration: S.optional(BedrockEmbeddingModelConfiguration),
        }),
      ).annotate({
        identifier: "EmbeddingModelConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ type: SupplementalDataStorageLocationType, s3Location: S.optional(S3Location) }),
      ).annotate({
        identifier: "SupplementalDataStorageLocation",
      });
    case 4:
      return S.Array(SupplementalDataStorageLocation);
    case 5:
      return S.suspend(() =>
        S.Struct({ storageLocations: SupplementalDataStorageLocations }),
      ).annotate({
        identifier: "SupplementalDataStorageConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          embeddingModelArn: S.String,
          embeddingModelConfiguration: S.optional(EmbeddingModelConfiguration),
          supplementalDataStorageConfiguration: S.optional(SupplementalDataStorageConfiguration),
        }),
      ).annotate({
        identifier: "VectorKnowledgeBaseConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          embeddingModelType: S.optional(EmbeddingModelType),
          embeddingModelArn: S.optional(S.String),
          embeddingModelConfiguration: S.optional(EmbeddingModelConfiguration),
          serverSideEncryptionConfiguration: S.optional(ServerSideEncryptionConfiguration),
          supplementalDataStorageConfiguration: S.optional(SupplementalDataStorageConfiguration),
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
      return S.suspend(() => S.Struct({ tableNames: AwsDataCatalogTableNames })).annotate({
        identifier: "RedshiftQueryEngineAwsDataCatalogStorageConfiguration",
      });
    case 2:
      return S.suspend(() => S.Struct({ databaseName: S.String })).annotate({
        identifier: "RedshiftQueryEngineRedshiftStorageConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          type: RedshiftQueryEngineStorageType,
          awsDataCatalogConfiguration: S.optional(
            RedshiftQueryEngineAwsDataCatalogStorageConfiguration,
          ),
          redshiftConfiguration: S.optional(RedshiftQueryEngineRedshiftStorageConfiguration),
        }),
      ).annotate({
        identifier: "RedshiftQueryEngineStorageConfiguration",
      });
    case 4:
      return S.Array(RedshiftQueryEngineStorageConfiguration);
    case 5:
      return S.suspend(() =>
        S.Struct({
          type: RedshiftServerlessAuthType,
          usernamePasswordSecretArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RedshiftServerlessAuthConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          workgroupArn: S.String,
          authConfiguration: RedshiftServerlessAuthConfiguration,
        }),
      ).annotate({
        identifier: "RedshiftServerlessConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          type: RedshiftProvisionedAuthType,
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
          authConfiguration: RedshiftProvisionedAuthConfiguration,
        }),
      ).annotate({
        identifier: "RedshiftProvisionedConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          type: RedshiftQueryEngineType,
          serverlessConfiguration: S.optional(RedshiftServerlessConfiguration),
          provisionedConfiguration: S.optional(RedshiftProvisionedConfiguration),
        }),
      ).annotate({
        identifier: "RedshiftQueryEngineConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          description: S.optional(S.String),
          inclusion: S.optional(IncludeExclude),
        }),
      ).annotate({ identifier: "QueryGenerationColumn" });
    case 3:
      return S.Array(QueryGenerationColumn);
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          inclusion: S.optional(IncludeExclude),
          columns: S.optional(QueryGenerationColumns),
        }),
      ).annotate({ identifier: "QueryGenerationTable" });
    case 5:
      return S.Array(QueryGenerationTable);
    case 6:
      return S.suspend(() => S.Struct({ naturalLanguage: S.String, sql: S.String })).annotate({
        identifier: "CuratedQuery",
      });
    case 7:
      return S.Array(CuratedQuery);
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          tables: S.optional(QueryGenerationTables),
          curatedQueries: S.optional(CuratedQueries),
        }),
      ).annotate({ identifier: "QueryGenerationContext" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          executionTimeoutSeconds: S.optional(S.Number),
          generationContext: S.optional(QueryGenerationContext),
        }),
      ).annotate({
        identifier: "QueryGenerationConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          storageConfigurations: RedshiftQueryEngineStorageConfigurations,
          queryEngineConfiguration: RedshiftQueryEngineConfiguration,
          queryGenerationConfiguration: S.optional(QueryGenerationConfiguration),
        }),
      ).annotate({ identifier: "RedshiftConfiguration" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          type: QueryEngineType,
          redshiftConfiguration: S.optional(RedshiftConfiguration),
        }),
      ).annotate({
        identifier: "SqlKnowledgeBaseConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          type: KnowledgeBaseType,
          vectorKnowledgeBaseConfiguration: S.optional(VectorKnowledgeBaseConfiguration),
          managedKnowledgeBaseConfiguration: S.optional(ManagedKnowledgeBaseConfiguration),
          kendraKnowledgeBaseConfiguration: S.optional(KendraKnowledgeBaseConfiguration),
          sqlKnowledgeBaseConfiguration: S.optional(SqlKnowledgeBaseConfiguration),
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
          fieldMapping: OpenSearchServerlessFieldMapping,
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
          fieldMapping: OpenSearchManagedClusterFieldMapping,
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
          fieldMapping: PineconeFieldMapping,
        }),
      ).annotate({ identifier: "PineconeConfiguration" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          endpoint: S.String,
          vectorIndexName: S.String,
          credentialsSecretArn: S.String,
          fieldMapping: RedisEnterpriseCloudFieldMapping,
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
          fieldMapping: RdsFieldMapping,
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
          fieldMapping: MongoDbAtlasFieldMapping,
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
        S.Struct({ graphArn: SensitiveString, fieldMapping: NeptuneAnalyticsFieldMapping }),
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
          type: KnowledgeBaseStorageType,
          opensearchServerlessConfiguration: S.optional(OpenSearchServerlessConfiguration),
          opensearchManagedClusterConfiguration: S.optional(OpenSearchManagedClusterConfiguration),
          pineconeConfiguration: S.optional(PineconeConfiguration),
          redisEnterpriseCloudConfiguration: S.optional(RedisEnterpriseCloudConfiguration),
          rdsConfiguration: S.optional(RdsConfiguration),
          mongoDbAtlasConfiguration: S.optional(MongoDbAtlasConfiguration),
          neptuneAnalyticsConfiguration: S.optional(NeptuneAnalyticsConfiguration),
          s3VectorsConfiguration: S.optional(S3VectorsConfiguration),
        }),
      ).annotate({ identifier: "StorageConfiguration" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          name: S.String,
          description: S.optional(S.String),
          roleArn: S.String,
          knowledgeBaseConfiguration: KnowledgeBaseConfiguration,
          storageConfiguration: S.optional(StorageConfiguration),
          tags: S.optional(TagsMap),
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
          knowledgeBaseConfiguration: KnowledgeBaseConfiguration,
          storageConfiguration: S.optional(StorageConfiguration),
          status: KnowledgeBaseStatus,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          failureReasons: S.optional(FailureReasons),
        }),
      ).annotate({ identifier: "KnowledgeBase" });
    case 5:
      return S.suspend(() => S.Struct({ knowledgeBase: KnowledgeBase })).annotate({
        identifier: "CreateKnowledgeBaseResponse",
      });
    case 6:
      return S.suspend(() => S.Struct({ key: SensitiveString, value: SensitiveString })).annotate({
        identifier: "PromptMetadataEntry",
      });
    case 7:
      return S.Array(PromptMetadataEntry);
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ agentIdentifier: S.String })).annotate({
        identifier: "PromptAgentResource",
      });
    case 1:
      return S.Union([/*@__PURE__*/ S.Struct({ agent: PromptAgentResource })]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          templateType: PromptTemplateType,
          templateConfiguration: PromptTemplateConfiguration,
          modelId: S.optional(S.String),
          inferenceConfiguration: S.optional(PromptInferenceConfiguration),
          metadata: S.optional(PromptMetadataList),
          additionalModelRequestFields: S.optional(S.Any),
          genAiResource: S.optional(PromptGenAiResource),
        }),
      ).annotate({ identifier: "PromptVariant" });
    case 3:
      return S.Array(PromptVariant);
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          customerEncryptionKeyArn: S.optional(S.String),
          defaultVariant: S.optional(S.String),
          variants: S.optional(PromptVariantList),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(TagsMap),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/prompts/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreatePromptRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          customerEncryptionKeyArn: S.optional(S.String),
          defaultVariant: S.optional(S.String),
          variants: S.optional(PromptVariantList),
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
          tags: S.optional(TagsMap),
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
          variants: S.optional(PromptVariantList),
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
          subnetIds: SubnetIdList,
          resourceTarget: S.String,
          port: S.Number,
          protocol: VpcProtocol,
          resolutionMode: VpcResolutionMode,
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
      return S.suspend(() =>
        S.Struct({ vpcConfigurationId: S.String, status: VpcConfigurationStatus }),
      ).annotate({
        identifier: "CreateVpcConfigurationResponse",
      });
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
      return S.suspend(() => S.Struct({ agentId: S.String, agentStatus: AgentStatus })).annotate({
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
        S.Struct({ agentId: S.String, agentAliasId: S.String, agentAliasStatus: AgentAliasStatus }),
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
        S.Struct({ agentId: S.String, agentVersion: S.String, agentStatus: AgentStatus }),
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
        S.Struct({ knowledgeBaseId: S.String, dataSourceId: S.String, status: DataSourceStatus }),
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
      return S.suspend(() =>
        S.Struct({ knowledgeBaseId: S.String, status: KnowledgeBaseStatus }),
      ).annotate({
        identifier: "DeleteKnowledgeBaseResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          dataSourceType: ContentDataSourceType,
          s3: S.optional(S3Location),
          custom: S.optional(CustomDocumentIdentifier),
        }),
      ).annotate({ identifier: "DocumentIdentifier" });
    case 4:
      return S.Array(DocumentIdentifier);
    case 5:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
          dataSourceId: S.String.pipe(T.HttpLabel("dataSourceId")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          documentIdentifiers: DocumentIdentifiers,
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
          status: DocumentStatus,
          identifier: DocumentIdentifier,
          statusReason: S.optional(S.String),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "KnowledgeBaseDocumentDetail",
      });
    case 7:
      return S.Array(KnowledgeBaseDocumentDetail);
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ documentDetails: S.optional(KnowledgeBaseDocumentDetails) }),
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
      return S.suspend(() => S.Struct({ agent: Agent })).annotate({
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
          agentStatus: AgentStatus,
          foundationModel: S.optional(S.String),
          description: S.optional(S.String),
          idleSessionTTLInSeconds: S.Number,
          agentResourceRoleArn: S.String,
          customerEncryptionKeyArn: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          failureReasons: S.optional(FailureReasons),
          recommendedActions: S.optional(RecommendedActions),
          promptOverrideConfiguration: S.optional(PromptOverrideConfiguration),
          guardrailConfiguration: S.optional(GuardrailConfiguration),
          memoryConfiguration: S.optional(MemoryConfiguration),
          agentCollaboration: S.optional(AgentCollaboration),
        }),
      ).annotate({ identifier: "AgentVersion" });
    case 1:
      return S.suspend(() => S.Struct({ agentVersion: AgentVersion })).annotate({
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
          includedData: S.optional(IncludedData).pipe(T.HttpQuery("includedData")),
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
        S.Struct({ node: S.String, input: S.String, expectedType: FlowNodeIODataType }),
      ).annotate({
        identifier: "MismatchedNodeInputTypeFlowValidationDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ node: S.String, output: S.String, expectedType: FlowNodeIODataType }),
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
          incompatibleNodeType: IncompatibleLoopNodeType,
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
        /*@__PURE__*/ S.Struct({ cyclicConnection: CyclicConnectionFlowValidationDetails }),
        /*@__PURE__*/ S.Struct({ duplicateConnections: DuplicateConnectionsFlowValidationDetails }),
        /*@__PURE__*/ S.Struct({
          duplicateConditionExpression: DuplicateConditionExpressionFlowValidationDetails,
        }),
        /*@__PURE__*/ S.Struct({ unreachableNode: UnreachableNodeFlowValidationDetails }),
        /*@__PURE__*/ S.Struct({
          unknownConnectionSource: UnknownConnectionSourceFlowValidationDetails,
        }),
        /*@__PURE__*/ S.Struct({
          unknownConnectionSourceOutput: UnknownConnectionSourceOutputFlowValidationDetails,
        }),
        /*@__PURE__*/ S.Struct({
          unknownConnectionTarget: UnknownConnectionTargetFlowValidationDetails,
        }),
        /*@__PURE__*/ S.Struct({
          unknownConnectionTargetInput: UnknownConnectionTargetInputFlowValidationDetails,
        }),
        /*@__PURE__*/ S.Struct({
          unknownConnectionCondition: UnknownConnectionConditionFlowValidationDetails,
        }),
        /*@__PURE__*/ S.Struct({
          malformedConditionExpression: MalformedConditionExpressionFlowValidationDetails,
        }),
        /*@__PURE__*/ S.Struct({
          malformedNodeInputExpression: MalformedNodeInputExpressionFlowValidationDetails,
        }),
        /*@__PURE__*/ S.Struct({
          mismatchedNodeInputType: MismatchedNodeInputTypeFlowValidationDetails,
        }),
        /*@__PURE__*/ S.Struct({
          mismatchedNodeOutputType: MismatchedNodeOutputTypeFlowValidationDetails,
        }),
        /*@__PURE__*/ S.Struct({
          incompatibleConnectionDataType: IncompatibleConnectionDataTypeFlowValidationDetails,
        }),
        /*@__PURE__*/ S.Struct({
          missingConnectionConfiguration: MissingConnectionConfigurationFlowValidationDetails,
        }),
        /*@__PURE__*/ S.Struct({
          missingDefaultCondition: MissingDefaultConditionFlowValidationDetails,
        }),
        /*@__PURE__*/ S.Struct({ missingEndingNodes: MissingEndingNodesFlowValidationDetails }),
        /*@__PURE__*/ S.Struct({
          missingNodeConfiguration: MissingNodeConfigurationFlowValidationDetails,
        }),
        /*@__PURE__*/ S.Struct({ missingNodeInput: MissingNodeInputFlowValidationDetails }),
        /*@__PURE__*/ S.Struct({ missingNodeOutput: MissingNodeOutputFlowValidationDetails }),
        /*@__PURE__*/ S.Struct({ missingStartingNodes: MissingStartingNodesFlowValidationDetails }),
        /*@__PURE__*/ S.Struct({
          multipleNodeInputConnections: MultipleNodeInputConnectionsFlowValidationDetails,
        }),
        /*@__PURE__*/ S.Struct({ unfulfilledNodeInput: UnfulfilledNodeInputFlowValidationDetails }),
        /*@__PURE__*/ S.Struct({
          unsatisfiedConnectionConditions: UnsatisfiedConnectionConditionsFlowValidationDetails,
        }),
        /*@__PURE__*/ S.Struct({ unspecified: UnspecifiedFlowValidationDetails }),
        /*@__PURE__*/ S.Struct({ unknownNodeInput: UnknownNodeInputFlowValidationDetails }),
        /*@__PURE__*/ S.Struct({ unknownNodeOutput: UnknownNodeOutputFlowValidationDetails }),
        /*@__PURE__*/ S.Struct({ missingLoopInputNode: MissingLoopInputNodeFlowValidationDetails }),
        /*@__PURE__*/ S.Struct({
          missingLoopControllerNode: MissingLoopControllerNodeFlowValidationDetails,
        }),
        /*@__PURE__*/ S.Struct({
          multipleLoopInputNodes: MultipleLoopInputNodesFlowValidationDetails,
        }),
        /*@__PURE__*/ S.Struct({
          multipleLoopControllerNodes: MultipleLoopControllerNodesFlowValidationDetails,
        }),
        /*@__PURE__*/ S.Struct({
          loopIncompatibleNodeType: LoopIncompatibleNodeTypeFlowValidationDetails,
        }),
        /*@__PURE__*/ S.Struct({ invalidLoopBoundary: InvalidLoopBoundaryFlowValidationDetails }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          message: S.String,
          severity: FlowValidationSeverity,
          details: S.optional(FlowValidationDetails),
          type: S.optional(FlowValidationType),
        }),
      ).annotate({ identifier: "FlowValidation" });
    case 3:
      return S.Array(FlowValidation);
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          executionRoleArn: S.String,
          customerEncryptionKeyArn: S.optional(S.String),
          id: S.String,
          arn: S.String,
          status: FlowStatus,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          version: S.String,
          definition: S.optional(FlowDefinition),
          validations: S.optional(FlowValidations),
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
          includedData: S.optional(IncludedData).pipe(T.HttpQuery("includedData")),
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
          status: FlowStatus,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          version: S.String,
          definition: S.optional(FlowDefinition),
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
          status: IngestionJobStatus,
          statistics: S.optional(IngestionJobStatistics),
          failureReasons: S.optional(FailureReasons),
          startedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          textReadyAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "IngestionJob" });
    case 3:
      return S.suspend(() => S.Struct({ ingestionJob: IngestionJob })).annotate({
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
      return S.suspend(() => S.Struct({ knowledgeBase: KnowledgeBase })).annotate({
        identifier: "GetKnowledgeBaseResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
          dataSourceId: S.String.pipe(T.HttpLabel("dataSourceId")),
          documentIdentifiers: DocumentIdentifiers,
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
          includedData: S.optional(IncludedData).pipe(T.HttpQuery("includedData")),
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
          status: VpcConfigurationStatus,
          statusMessage: S.optional(S.String),
          vpcId: S.String,
          subnetIds: SubnetIdList,
          resourceTarget: S.String,
          port: S.Number,
          protocol: VpcProtocol,
          resolutionMode: VpcResolutionMode,
          hostHeader: S.optional(S.String),
          tlsServerName: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "VpcConfiguration" });
    case 4:
      return S.suspend(() => S.Struct({ vpcConfiguration: VpcConfiguration })).annotate({
        identifier: "GetVpcConfigurationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          type: MetadataValueType,
          numberValue: S.optional(S.Number),
          booleanValue: S.optional(S.Boolean),
          stringValue: S.optional(SensitiveString),
          stringListValue: S.optional(StringListValue),
        }),
      ).annotate({ identifier: "MetadataAttributeValue" });
    case 6:
      return S.suspend(() =>
        S.Struct({ key: SensitiveString, value: MetadataAttributeValue }),
      ).annotate({ identifier: "MetadataAttribute" });
    case 7:
      return S.Array(MetadataAttribute);
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
        S.Struct({ name: S.String, type: AccessControlPrincipalType, access: AccessControlAccess }),
      ).annotate({
        identifier: "DocumentAccessControlEntry",
      });
    case 2:
      return S.Array(DocumentAccessControlEntry);
    case 3:
      return S.suspend(() =>
        S.Struct({
          type: MetadataSourceType,
          inlineAttributes: S.optional(MetadataAttributes),
          s3Location: S.optional(CustomS3Location),
          accessControlList: S.optional(DocumentAccessControlList),
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
          type: InlineContentType,
          byteContent: S.optional(ByteContentDoc),
          textContent: S.optional(TextContentDoc),
        }),
      ).annotate({ identifier: "InlineContent" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          customDocumentIdentifier: CustomDocumentIdentifier,
          sourceType: CustomSourceType,
          s3Location: S.optional(CustomS3Location),
          inlineContent: S.optional(InlineContent),
        }),
      ).annotate({ identifier: "CustomContent" });
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          dataSourceType: ContentDataSourceType,
          custom: S.optional(CustomContent),
          s3: S.optional(S3Content),
        }),
      ).annotate({ identifier: "DocumentContent" });
    case 1:
      return S.suspend(() =>
        S.Struct({ metadata: S.optional(DocumentMetadata), content: DocumentContent }),
      ).annotate({ identifier: "KnowledgeBaseDocument" });
    case 2:
      return S.Array(KnowledgeBaseDocument);
    case 3:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
          dataSourceId: S.String.pipe(T.HttpLabel("dataSourceId")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          documents: KnowledgeBaseDocuments,
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
          actionGroupState: ActionGroupState,
          description: S.optional(S.String),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "ActionGroupSummary" });
    case 6:
      return S.Array(ActionGroupSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({ actionGroupSummaries: ActionGroupSummaries, nextToken: S.optional(S.String) }),
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
          routingConfiguration: S.optional(AgentAliasRoutingConfiguration),
          agentAliasStatus: AgentAliasStatus,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          aliasInvocationState: S.optional(AliasInvocationState),
        }),
      ).annotate({ identifier: "AgentAliasSummary" });
    case 2:
      return S.Array(AgentAliasSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({ agentAliasSummaries: AgentAliasSummaries, nextToken: S.optional(S.String) }),
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
          agentDescriptor: AgentDescriptor,
          collaborationInstruction: SensitiveString,
          relayConversationHistory: RelayConversationHistory,
          collaboratorName: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "AgentCollaboratorSummary" });
    case 6:
      return S.Array(AgentCollaboratorSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({
          agentCollaboratorSummaries: AgentCollaboratorSummaries,
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
          knowledgeBaseState: KnowledgeBaseState,
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "AgentKnowledgeBaseSummary",
      });
    case 2:
      return S.Array(AgentKnowledgeBaseSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({
          agentKnowledgeBaseSummaries: AgentKnowledgeBaseSummaries,
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
          agentStatus: AgentStatus,
          description: S.optional(S.String),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          latestAgentVersion: S.optional(S.String),
          guardrailConfiguration: S.optional(GuardrailConfiguration),
        }),
      ).annotate({ identifier: "AgentSummary" });
    case 6:
      return S.Array(AgentSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({ agentSummaries: AgentSummaries, nextToken: S.optional(S.String) }),
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
          agentStatus: AgentStatus,
          agentVersion: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          description: S.optional(S.String),
          guardrailConfiguration: S.optional(GuardrailConfiguration),
        }),
      ).annotate({ identifier: "AgentVersionSummary" });
    case 2:
      return S.Array(AgentVersionSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({ agentVersionSummaries: AgentVersionSummaries, nextToken: S.optional(S.String) }),
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
          status: DataSourceStatus,
          description: S.optional(S.String),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "DataSourceSummary" });
    case 6:
      return S.Array(DataSourceSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({ dataSourceSummaries: DataSourceSummaries, nextToken: S.optional(S.String) }),
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
      return S.Array(FlowAliasSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({ flowAliasSummaries: FlowAliasSummaries, nextToken: S.optional(S.String) }),
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
          status: FlowStatus,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          version: S.String,
        }),
      ).annotate({ identifier: "FlowSummary" });
    case 5:
      return S.Array(FlowSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({ flowSummaries: FlowSummaries, nextToken: S.optional(S.String) }),
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
          status: FlowStatus,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          version: S.String,
        }),
      ).annotate({ identifier: "FlowVersionSummary" });
    case 1:
      return S.Array(FlowVersionSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({ flowVersionSummaries: FlowVersionSummaries, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListFlowVersionsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          attribute: IngestionJobFilterAttribute,
          operator: IngestionJobFilterOperator,
          values: IngestionJobFilterValues,
        }),
      ).annotate({ identifier: "IngestionJobFilter" });
    case 4:
      return S.Array(IngestionJobFilter);
    case 5:
      return S.suspend(() =>
        S.Struct({ attribute: IngestionJobSortByAttribute, order: SortOrder }),
      ).annotate({ identifier: "IngestionJobSortBy" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
          dataSourceId: S.String.pipe(T.HttpLabel("dataSourceId")),
          filters: S.optional(IngestionJobFilters),
          sortBy: S.optional(IngestionJobSortBy),
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
          status: IngestionJobStatus,
          startedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          textReadyAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          statistics: S.optional(IngestionJobStatistics),
        }),
      ).annotate({ identifier: "IngestionJobSummary" });
  }
}
function __c45(j: number): any {
  switch (j) {
    case 0:
      return S.Array(IngestionJobSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({ ingestionJobSummaries: IngestionJobSummaries, nextToken: S.optional(S.String) }),
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
          documentDetails: KnowledgeBaseDocumentDetails,
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
          status: KnowledgeBaseStatus,
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "KnowledgeBaseSummary" });
    case 6:
      return S.Array(KnowledgeBaseSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseSummaries: KnowledgeBaseSummaries,
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
      return S.Array(PromptSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({ promptSummaries: PromptSummaries, nextToken: S.optional(S.String) }),
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
      return S.suspend(() => S.Struct({ tags: S.optional(TagsMap) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
          statusFilter: S.optional(VpcConfigurationStatus).pipe(T.HttpQuery("status")),
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
          status: VpcConfigurationStatus,
          statusMessage: S.optional(S.String),
          vpcId: S.String,
          resourceTarget: S.String,
          port: S.Number,
          protocol: VpcProtocol,
          resolutionMode: VpcResolutionMode,
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
      return S.Array(VpcConfigurationSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({ items: VpcConfigurationSummaryList, nextToken: S.optional(S.String) }),
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
          agentStatus: AgentStatus,
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
      return S.suspend(() => S.Struct({ id: S.String, status: FlowStatus })).annotate({
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
      return S.suspend(() => S.Struct({ ingestionJob: IngestionJob })).annotate({
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
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: TagsMap }).pipe(
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
      ).annotate({ identifier: "UntagResourceRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          agentName: S.String,
          instruction: S.optional(SensitiveString),
          foundationModel: S.optional(S.String),
          description: S.optional(S.String),
          orchestrationType: S.optional(OrchestrationType),
          customOrchestration: S.optional(CustomOrchestration),
          idleSessionTTLInSeconds: S.optional(S.Number),
          agentResourceRoleArn: S.String,
          customerEncryptionKeyArn: S.optional(S.String),
          promptOverrideConfiguration: S.optional(PromptOverrideConfiguration),
          guardrailConfiguration: S.optional(GuardrailConfiguration),
          memoryConfiguration: S.optional(MemoryConfiguration),
          agentCollaboration: S.optional(AgentCollaboration),
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
          parentActionGroupSignature: S.optional(ActionGroupSignature),
          parentActionGroupSignatureParams: S.optional(ActionGroupSignatureParams),
          actionGroupExecutor: S.optional(ActionGroupExecutor),
          actionGroupState: S.optional(ActionGroupState),
          apiSchema: S.optional(APISchema),
          functionSchema: S.optional(FunctionSchema),
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
          routingConfiguration: S.optional(AgentAliasRoutingConfiguration),
          aliasInvocationState: S.optional(AliasInvocationState),
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
          agentDescriptor: AgentDescriptor,
          collaboratorName: S.String,
          collaborationInstruction: SensitiveString,
          relayConversationHistory: S.optional(RelayConversationHistory),
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
          knowledgeBaseState: S.optional(KnowledgeBaseState),
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
          dataSourceConfiguration: DataSourceConfiguration,
          dataDeletionPolicy: S.optional(DataDeletionPolicy),
          serverSideEncryptionConfiguration: S.optional(ServerSideEncryptionConfiguration),
          vectorIngestionConfiguration: S.optional(VectorIngestionConfiguration),
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
          definition: S.optional(FlowDefinition),
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
          routingConfiguration: FlowAliasRoutingConfiguration,
          concurrencyConfiguration: S.optional(FlowAliasConcurrencyConfiguration),
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
          knowledgeBaseConfiguration: KnowledgeBaseConfiguration,
          storageConfiguration: S.optional(StorageConfiguration),
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
          variants: S.optional(PromptVariantList),
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
        S.Struct({ definition: FlowDefinition }).pipe(
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
      return S.suspend(() => S.Struct({ validations: FlowValidations })).annotate({
        identifier: "ValidateFlowDefinitionResponse",
      });
    case 1:
      return S.suspend(() => S.Struct({ name: S.String, message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 2:
      return S.Array(ValidationExceptionField);
  }
}
