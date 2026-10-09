import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as stream from "effect/Stream";
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
  sdkId: "Bedrock Agent Runtime",
  serviceShapeName: "AmazonBedrockAgentRunTimeService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "bedrock" });
const ver = /*@__PURE__*/ T.ServiceVersion("2023-07-26");
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
              `https://bedrock-agent-runtime-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://bedrock-agent-runtime-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://bedrock-agent-runtime.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(
          `https://bedrock-agent-runtime.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
        );
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
export class BadGatewayException
  extends /*@__PURE__*/ S.TaggedError<BadGatewayException>()(
    "BadGatewayException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceName: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(502),
  ).pipe(C.withServerError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class DependencyFailedException
  extends /*@__PURE__*/ S.TaggedError<DependencyFailedException>()(
    "DependencyFailedException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceName: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(424),
  ) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ModelNotReadyException
  extends /*@__PURE__*/ S.TaggedError<ModelNotReadyException>()(
    "ModelNotReadyException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(424),
  ) {}
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
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export interface AgenticRetrieveMessageContent {
  text?: string;
}
export type ConversationRole = "user" | "assistant" | (string & {});
export interface AgenticRetrieveMessage {
  content: AgenticRetrieveMessageContent;
  role: ConversationRole;
}
export type AgenticRetrieveMessages = AgenticRetrieveMessage[];
export type KnowledgeBaseId = string;
export type FilterKey = string;
export type FilterValue = unknown;
export interface FilterAttribute {
  key: string;
  value: any;
}
export type RetrievalFilterList = RetrievalFilter[];
export type RetrievalFilter =
  | {
      equals: FilterAttribute;
      notEquals?: never;
      greaterThan?: never;
      greaterThanOrEquals?: never;
      lessThan?: never;
      lessThanOrEquals?: never;
      in?: never;
      notIn?: never;
      startsWith?: never;
      listContains?: never;
      stringContains?: never;
      andAll?: never;
      orAll?: never;
    }
  | {
      equals?: never;
      notEquals: FilterAttribute;
      greaterThan?: never;
      greaterThanOrEquals?: never;
      lessThan?: never;
      lessThanOrEquals?: never;
      in?: never;
      notIn?: never;
      startsWith?: never;
      listContains?: never;
      stringContains?: never;
      andAll?: never;
      orAll?: never;
    }
  | {
      equals?: never;
      notEquals?: never;
      greaterThan: FilterAttribute;
      greaterThanOrEquals?: never;
      lessThan?: never;
      lessThanOrEquals?: never;
      in?: never;
      notIn?: never;
      startsWith?: never;
      listContains?: never;
      stringContains?: never;
      andAll?: never;
      orAll?: never;
    }
  | {
      equals?: never;
      notEquals?: never;
      greaterThan?: never;
      greaterThanOrEquals: FilterAttribute;
      lessThan?: never;
      lessThanOrEquals?: never;
      in?: never;
      notIn?: never;
      startsWith?: never;
      listContains?: never;
      stringContains?: never;
      andAll?: never;
      orAll?: never;
    }
  | {
      equals?: never;
      notEquals?: never;
      greaterThan?: never;
      greaterThanOrEquals?: never;
      lessThan: FilterAttribute;
      lessThanOrEquals?: never;
      in?: never;
      notIn?: never;
      startsWith?: never;
      listContains?: never;
      stringContains?: never;
      andAll?: never;
      orAll?: never;
    }
  | {
      equals?: never;
      notEquals?: never;
      greaterThan?: never;
      greaterThanOrEquals?: never;
      lessThan?: never;
      lessThanOrEquals: FilterAttribute;
      in?: never;
      notIn?: never;
      startsWith?: never;
      listContains?: never;
      stringContains?: never;
      andAll?: never;
      orAll?: never;
    }
  | {
      equals?: never;
      notEquals?: never;
      greaterThan?: never;
      greaterThanOrEquals?: never;
      lessThan?: never;
      lessThanOrEquals?: never;
      in: FilterAttribute;
      notIn?: never;
      startsWith?: never;
      listContains?: never;
      stringContains?: never;
      andAll?: never;
      orAll?: never;
    }
  | {
      equals?: never;
      notEquals?: never;
      greaterThan?: never;
      greaterThanOrEquals?: never;
      lessThan?: never;
      lessThanOrEquals?: never;
      in?: never;
      notIn: FilterAttribute;
      startsWith?: never;
      listContains?: never;
      stringContains?: never;
      andAll?: never;
      orAll?: never;
    }
  | {
      equals?: never;
      notEquals?: never;
      greaterThan?: never;
      greaterThanOrEquals?: never;
      lessThan?: never;
      lessThanOrEquals?: never;
      in?: never;
      notIn?: never;
      startsWith: FilterAttribute;
      listContains?: never;
      stringContains?: never;
      andAll?: never;
      orAll?: never;
    }
  | {
      equals?: never;
      notEquals?: never;
      greaterThan?: never;
      greaterThanOrEquals?: never;
      lessThan?: never;
      lessThanOrEquals?: never;
      in?: never;
      notIn?: never;
      startsWith?: never;
      listContains: FilterAttribute;
      stringContains?: never;
      andAll?: never;
      orAll?: never;
    }
  | {
      equals?: never;
      notEquals?: never;
      greaterThan?: never;
      greaterThanOrEquals?: never;
      lessThan?: never;
      lessThanOrEquals?: never;
      in?: never;
      notIn?: never;
      startsWith?: never;
      listContains?: never;
      stringContains: FilterAttribute;
      andAll?: never;
      orAll?: never;
    }
  | {
      equals?: never;
      notEquals?: never;
      greaterThan?: never;
      greaterThanOrEquals?: never;
      lessThan?: never;
      lessThanOrEquals?: never;
      in?: never;
      notIn?: never;
      startsWith?: never;
      listContains?: never;
      stringContains?: never;
      andAll: RetrievalFilter[];
      orAll?: never;
    }
  | {
      equals?: never;
      notEquals?: never;
      greaterThan?: never;
      greaterThanOrEquals?: never;
      lessThan?: never;
      lessThanOrEquals?: never;
      in?: never;
      notIn?: never;
      startsWith?: never;
      listContains?: never;
      stringContains?: never;
      andAll?: never;
      orAll: RetrievalFilter[];
    };
export interface RetrievalOverrides {
  filter?: RetrievalFilter;
  maxNumberOfResults?: number;
}
export interface KnowledgeBaseRetrieverConfiguration {
  knowledgeBaseId: string;
  retrievalOverrides?: RetrievalOverrides;
}
export type RetrieverConfiguration = { knowledgeBase: KnowledgeBaseRetrieverConfiguration };
export interface AgenticRetriever {
  description?: string;
  configuration: RetrieverConfiguration;
}
export type AgenticRetrievers = AgenticRetriever[];
export type FoundationModelType = "CUSTOM" | "MANAGED" | (string & {});
export type FoundationModelConfigurationType =
  | "BEDROCK_FOUNDATION_MODEL"
  | "MANTLE_FOUNDATION_MODEL"
  | (string & {});
export type BedrockModelArn = string;
export interface BedrockFoundationModelModelConfiguration {
  modelArn: string;
}
export interface BedrockFoundationModelConfiguration {
  modelConfiguration: BedrockFoundationModelModelConfiguration;
}
export type MantleProjectId = string;
export interface MantleFoundationModelModelConfiguration {
  modelArn: string;
  projectId?: string;
}
export interface MantleFoundationModelConfiguration {
  modelConfiguration: MantleFoundationModelModelConfiguration;
}
export interface FoundationModelConfiguration {
  type: FoundationModelConfigurationType;
  bedrockFoundationModelConfiguration?: BedrockFoundationModelConfiguration;
  mantleFoundationModelConfiguration?: MantleFoundationModelConfiguration;
}
export type AgenticRetrieveRerankingModelType = "CUSTOM" | "MANAGED" | "NONE" | (string & {});
export type AgenticRetrieveRerankingConfigurationType = "BEDROCK_RERANKING_MODEL" | (string & {});
export interface AgenticRetrieveBedrockRerankingModelConfiguration {
  modelArn: string;
}
export interface AgenticRetrieveBedrockRerankingConfiguration {
  modelConfiguration: AgenticRetrieveBedrockRerankingModelConfiguration;
}
export interface AgenticRetrieveRerankingConfiguration {
  type: AgenticRetrieveRerankingConfigurationType;
  bedrockRerankingConfiguration?: AgenticRetrieveBedrockRerankingConfiguration;
}
export interface AgenticRetrieveConfiguration {
  foundationModelType?: FoundationModelType;
  foundationModelConfiguration?: FoundationModelConfiguration;
  rerankingModelType?: AgenticRetrieveRerankingModelType;
  rerankingConfiguration?: AgenticRetrieveRerankingConfiguration;
  maxAgentIteration?: number;
}
export interface AgenticRetrieveBedrockGuardrailConfiguration {
  guardrailId: string;
  guardrailVersion: string;
}
export interface AgenticRetrievePolicyConfiguration {
  bedrockGuardrailConfiguration?: AgenticRetrieveBedrockGuardrailConfiguration;
}
export type NextToken = string;
export interface UserContext {
  userId: string;
}
export type AgentCoreMemoryId = string;
export type AgentCoreMemoryActorId = string;
export type AgentCoreMemorySessionId = string;
export interface AgenticRetrieveMemorySessionBinding {
  actorId: string;
  sessionId: string;
}
export type MemoryNamespace = string;
export type MemoryStrategyId = string;
export type AgenticRetrieveMemoryMetadataKey = string;
export type AgenticRetrieveMemoryMetadataFilterLeft = { metadataKey: string };
export type AgenticRetrieveMemoryMetadataFilterOperator =
  | "EQUALS_TO"
  | "EXISTS"
  | "NOT_EXISTS"
  | "BEFORE"
  | "AFTER"
  | "CONTAINS"
  | "GREATER_THAN"
  | "GREATER_THAN_OR_EQUALS"
  | "LESS_THAN"
  | "LESS_THAN_OR_EQUALS"
  | (string & {});
export type AgenticRetrieveMemoryMetadataStringValue = string;
export type AgenticRetrieveMemoryMetadataStringListItem = string;
export type AgenticRetrieveMemoryMetadataStringList = string[];
export type AgenticRetrieveMemoryMetadataValue =
  | { stringValue: string; numberValue?: never; stringListValue?: never; dateTimeValue?: never }
  | { stringValue?: never; numberValue: number; stringListValue?: never; dateTimeValue?: never }
  | { stringValue?: never; numberValue?: never; stringListValue: string[]; dateTimeValue?: never }
  | { stringValue?: never; numberValue?: never; stringListValue?: never; dateTimeValue: Date };
export type AgenticRetrieveMemoryMetadataFilterRight = {
  metadataValue: AgenticRetrieveMemoryMetadataValue;
};
export interface AgenticRetrieveMemoryMetadataFilter {
  left: AgenticRetrieveMemoryMetadataFilterLeft;
  operator: AgenticRetrieveMemoryMetadataFilterOperator;
  right?: AgenticRetrieveMemoryMetadataFilterRight;
}
export type AgenticRetrieveMemoryMetadataFilterList = AgenticRetrieveMemoryMetadataFilter[];
export interface AgenticRetrieveMemoryRetrievalConfig {
  namespace?: string;
  namespacePath?: string;
  strategyId?: string;
  metadataFilters?: AgenticRetrieveMemoryMetadataFilter[];
}
export type AgenticRetrieveMemoryRetrievalConfigList = AgenticRetrieveMemoryRetrievalConfig[];
export type AgenticRetrieveMemoryPersistenceMode = "DEFAULT" | "NONE" | (string & {});
export interface AgenticRetrieveMemoryConfiguration {
  memoryId: string;
  sessionBinding?: AgenticRetrieveMemorySessionBinding;
  retrievalConfigs?: AgenticRetrieveMemoryRetrievalConfig[];
  persistenceMode?: AgenticRetrieveMemoryPersistenceMode;
}
export interface AgenticRetrieveStreamRequest {
  messages: AgenticRetrieveMessage[];
  retrievers: AgenticRetriever[];
  agenticRetrieveConfiguration: AgenticRetrieveConfiguration;
  policyConfiguration?: AgenticRetrievePolicyConfiguration;
  nextToken?: string;
  userContext?: UserContext;
  memoryConfiguration?: AgenticRetrieveMemoryConfiguration;
  generateResponse?: boolean;
}
export type MimeType = string;
export interface RetrievalContent {
  byteContent?: Uint8Array;
  text?: string;
  mimeType: string;
}
export type AgenticRetrieveMetadata = { [key: string]: any | undefined };
export interface AgenticRetrieveSourceRetriever {
  identifier: string;
}
export interface AgenticRetrieveResultItem {
  content: RetrievalContent;
  metadata?: { [key: string]: any | undefined };
  sourceRetriever: AgenticRetrieveSourceRetriever;
}
export type AgenticRetrieveResults = AgenticRetrieveResultItem[];
export interface AgenticRetrieveCitationReference {
  resultIndex: number;
}
export type AgenticRetrieveCitationReferenceList = AgenticRetrieveCitationReference[];
export interface AgenticRetrieveCitation {
  startIndex: number;
  endIndex: number;
  references: AgenticRetrieveCitationReference[];
}
export type AgenticRetrieveCitationList = AgenticRetrieveCitation[];
export interface AgenticRetrieveGeneratedResponse {
  answer: string;
  citations?: AgenticRetrieveCitation[];
}
export interface AgenticRetrieveResultEvent {
  results: AgenticRetrieveResultItem[];
  generatedResponse?: AgenticRetrieveGeneratedResponse;
  nextToken?: string;
}
export type AgenticRetrieveStep =
  | "Planning"
  | "Retrieval"
  | "SpeculativeRetrieval"
  | "FullDocumentExpansion"
  | "SessionHistoryLoad"
  | (string & {});
export type AgenticRetrieveStatus = "IN_PROGRESS" | "SUCCEEDED" | "FAILED" | (string & {});
export type AgenticRetrieveSourceRetrieverList = AgenticRetrieveSourceRetriever[];
export interface AgenticRetrieveActionDetails {
  inputQuery: AgenticRetrieveMessageContent;
  sourceRetrievers: AgenticRetrieveSourceRetriever[];
}
export interface AgenticRetrieveFullDocExpansionDetails {
  documentId?: string;
  sourceRetriever?: AgenticRetrieveSourceRetriever;
}
export interface AgenticRetrieveMemoryRetrieveDetails {
  inputQuery: AgenticRetrieveMessageContent;
  memoryId: string;
  namespace?: string;
  namespacePath?: string;
  strategyId?: string;
}
export interface AgenticRetrieveAction {
  retrieve?: AgenticRetrieveActionDetails;
  fullDocumentExpansion?: AgenticRetrieveFullDocExpansionDetails;
  memoryRetrieve?: AgenticRetrieveMemoryRetrieveDetails;
}
export type AgenticRetrieveActions = AgenticRetrieveAction[];
export interface AgenticRetrieveWarningMessage {
  message: string;
}
export type GuardrailAction = "INTERVENED" | "NONE" | (string & {});
export interface AgenticRetrieveGuardrailWarning {
  id: string;
  version: string;
  action: GuardrailAction;
  message?: string;
}
export type AgenticRetrieveWarning =
  | { message: AgenticRetrieveWarningMessage; guardrail?: never }
  | { message?: never; guardrail: AgenticRetrieveGuardrailWarning };
export type AgenticRetrieveWarnings = AgenticRetrieveWarning[];
export interface AgenticRetrieveFailure {
  message: string;
}
export type AgenticRetrieveFailures = AgenticRetrieveFailure[];
export type AgenticRetrieveType = "BedrockKnowledgeBase" | "BedrockAgentCoreMemory" | (string & {});
export interface AgenticRetrieveSourceMetadata {
  identifier?: string;
  retrievalType?: AgenticRetrieveType;
}
export type AgenticRetrieveSourceMetadataList = AgenticRetrieveSourceMetadata[];
export interface AgenticRetrieveTraceResultItem {
  content?: RetrievalContent;
  metadata?: { [key: string]: any | undefined };
  sourceRetriever?: AgenticRetrieveSourceRetriever;
}
export type AgenticRetrieveTraceResults = AgenticRetrieveTraceResultItem[];
export interface AgenticRetrieveTraceEventAttributes {
  step: AgenticRetrieveStep;
  status: AgenticRetrieveStatus;
  message: string;
  actions?: AgenticRetrieveAction[];
  warnings?: AgenticRetrieveWarning[];
  failures?: AgenticRetrieveFailure[];
  retrievalMetadata?: AgenticRetrieveSourceMetadata[];
  retrievalResponse?: AgenticRetrieveTraceResultItem[];
}
export interface AgenticRetrieveTraceEvent {
  id: string;
  timestamp: number;
  attributes: AgenticRetrieveTraceEventAttributes;
}
export interface AgenticRetrieveResponseEvent {
  text: string;
}
export type NonBlankString = string;
export type AgenticRetrieveStreamResponseOutput =
  | {
      result: AgenticRetrieveResultEvent;
      traceEvent?: never;
      responseEvent?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
    }
  | {
      result?: never;
      traceEvent: AgenticRetrieveTraceEvent;
      responseEvent?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
    }
  | {
      result?: never;
      traceEvent?: never;
      responseEvent: AgenticRetrieveResponseEvent;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
    }
  | {
      result?: never;
      traceEvent?: never;
      responseEvent?: never;
      internalServerException: InternalServerException;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
    }
  | {
      result?: never;
      traceEvent?: never;
      responseEvent?: never;
      internalServerException?: never;
      validationException: ValidationException;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
    }
  | {
      result?: never;
      traceEvent?: never;
      responseEvent?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException: ResourceNotFoundException;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
    }
  | {
      result?: never;
      traceEvent?: never;
      responseEvent?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException: ServiceQuotaExceededException;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
    }
  | {
      result?: never;
      traceEvent?: never;
      responseEvent?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException: ThrottlingException;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
    }
  | {
      result?: never;
      traceEvent?: never;
      responseEvent?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException: AccessDeniedException;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
    }
  | {
      result?: never;
      traceEvent?: never;
      responseEvent?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException: ConflictException;
      dependencyFailedException?: never;
      badGatewayException?: never;
    }
  | {
      result?: never;
      traceEvent?: never;
      responseEvent?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException: DependencyFailedException;
      badGatewayException?: never;
    }
  | {
      result?: never;
      traceEvent?: never;
      responseEvent?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException: BadGatewayException;
    };
export interface AgenticRetrieveStreamResponse {
  stream: stream.Stream<AgenticRetrieveStreamResponseOutput, Error, never>;
}
export type KnowledgeBaseIdentifier = string;
export type DataSourceId = string;
export type DocumentId = string;
export interface CheckIngestedDocumentAclRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
  documentId: string;
  userContext: UserContext;
}
export interface CheckIngestedDocumentAclResponse {
  hasAccess: boolean;
}
export type Uuid = string;
export type InvocationDescription = string;
export type SessionIdentifier = string;
export interface CreateInvocationRequest {
  invocationId?: string;
  description?: string;
  sessionIdentifier: string;
}
export interface CreateInvocationResponse {
  sessionId: string;
  invocationId: string;
  createdAt: Date;
}
export type SessionMetadataKey = string;
export type SessionMetadataValue = string;
export type SessionMetadataMap = { [key: string]: string | undefined };
export type KmsKeyArn = string;
export type TagKey = string;
export type TagValue = string;
export type TagsMap = { [key: string]: string | undefined };
export interface CreateSessionRequest {
  sessionMetadata?: { [key: string]: string | undefined };
  encryptionKeyArn?: string;
  tags?: { [key: string]: string | undefined };
}
export type SessionArn = string;
export type SessionStatus = "ACTIVE" | "EXPIRED" | "ENDED" | (string & {});
export interface CreateSessionResponse {
  sessionId: string;
  sessionArn: string;
  sessionStatus: SessionStatus;
  createdAt: Date;
}
export type AgentId = string;
export type AgentAliasId = string;
export type MemoryId = string;
export type SessionId = string;
export interface DeleteAgentMemoryRequest {
  agentId: string;
  agentAliasId: string;
  memoryId?: string;
  sessionId?: string;
}
export interface DeleteAgentMemoryResponse {}
export interface DeleteSessionRequest {
  sessionIdentifier: string;
}
export interface DeleteSessionResponse {}
export interface EndSessionRequest {
  sessionIdentifier: string;
}
export interface EndSessionResponse {
  sessionId: string;
  sessionArn: string;
  sessionStatus: SessionStatus;
}
export type InputQueryType = "TEXT" | (string & {});
export interface QueryGenerationInput {
  type: InputQueryType;
  text: string;
}
export type QueryTransformationMode = "TEXT_TO_SQL" | (string & {});
export type TextToSqlConfigurationType = "KNOWLEDGE_BASE" | (string & {});
export type KnowledgeBaseArn = string;
export interface TextToSqlKnowledgeBaseConfiguration {
  knowledgeBaseArn: string;
}
export interface TextToSqlConfiguration {
  type: TextToSqlConfigurationType;
  knowledgeBaseConfiguration?: TextToSqlKnowledgeBaseConfiguration;
}
export interface TransformationConfiguration {
  mode: QueryTransformationMode;
  textToSqlConfiguration?: TextToSqlConfiguration;
}
export interface GenerateQueryRequest {
  queryGenerationInput: QueryGenerationInput;
  transformationConfiguration: TransformationConfiguration;
}
export type GeneratedQueryType = "REDSHIFT_SQL" | (string & {});
export interface GeneratedQuery {
  type?: GeneratedQueryType;
  sql?: string;
}
export type GeneratedQueries = GeneratedQuery[];
export interface GenerateQueryResponse {
  queries?: GeneratedQuery[];
}
export type MaxResults = number;
export type MemoryType = "SESSION_SUMMARY" | (string & {});
export interface GetAgentMemoryRequest {
  nextToken?: string;
  maxItems?: number;
  agentId: string;
  agentAliasId: string;
  memoryType: MemoryType;
  memoryId: string;
}
export type SummaryText = string;
export interface MemorySessionSummary {
  memoryId?: string;
  sessionId?: string;
  sessionStartTime?: Date;
  sessionExpiryTime?: Date;
  summaryText?: string;
}
export type Memory = { sessionSummary: MemorySessionSummary };
export type Memories = Memory[];
export interface GetAgentMemoryResponse {
  nextToken?: string;
  memoryContents?: Memory[];
}
export type DocumentOutputFormat = "RAW" | "EXTRACTED" | (string & {});
export interface GetDocumentContentRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
  documentId: string;
  outputFormat?: DocumentOutputFormat;
  userContext?: UserContext;
}
export type PresignedUrl = string | redacted.Redacted<string>;
export interface GetDocumentContentResponse {
  mimeType: string;
  presignedUrl: string | redacted.Redacted<string>;
  documentContentLength?: number;
}
export type FlowIdentifier = string;
export type FlowAliasIdentifier = string;
export type FlowExecutionIdentifier = string;
export interface GetExecutionFlowSnapshotRequest {
  flowIdentifier: string;
  flowAliasIdentifier: string;
  executionIdentifier: string;
}
export type Version = string;
export type FlowExecutionRoleArn = string;
export interface GetExecutionFlowSnapshotResponse {
  flowIdentifier: string;
  flowAliasIdentifier: string;
  flowVersion: string;
  executionRoleArn: string;
  definition: string;
  customerEncryptionKeyArn?: string;
}
export interface GetFlowExecutionRequest {
  flowIdentifier: string;
  flowAliasIdentifier: string;
  executionIdentifier: string;
}
export type FlowExecutionStatus =
  | "Running"
  | "Succeeded"
  | "Failed"
  | "TimedOut"
  | "Aborted"
  | (string & {});
export type NodeName = string;
export type FlowExecutionErrorType = "ExecutionTimedOut" | (string & {});
export interface FlowExecutionError {
  nodeName?: string;
  error?: FlowExecutionErrorType;
  message?: string;
}
export type FlowExecutionErrors = FlowExecutionError[];
export interface GetFlowExecutionResponse {
  executionArn: string;
  status: FlowExecutionStatus;
  startedAt: Date;
  endedAt?: Date;
  errors?: FlowExecutionError[];
  flowAliasIdentifier: string;
  flowIdentifier: string;
  flowVersion: string;
}
export interface GetIngestedDocumentAclRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
  documentId: string;
}
export type DocumentAclMemberRelation = "AND" | "OR" | (string & {});
export type DocumentAclMembershipType = "KNOWLEDGE_BASE" | "DATA_SOURCE" | (string & {});
export interface DocumentAclUser {
  id: string;
  type: DocumentAclMembershipType;
}
export type DocumentAclUserList = DocumentAclUser[];
export interface DocumentAclGroup {
  id: string;
  type: DocumentAclMembershipType;
}
export type DocumentAclGroupList = DocumentAclGroup[];
export interface DocumentAclCondition {
  conditionOperator?: DocumentAclMemberRelation;
  users?: DocumentAclUser[];
  groups?: DocumentAclGroup[];
}
export type DocumentAclConditionList = DocumentAclCondition[];
export interface DocumentAclMembership {
  memberRelation?: DocumentAclMemberRelation;
  conditions?: DocumentAclCondition[];
}
export interface DocumentAcl {
  allowList?: DocumentAclMembership;
  denyList?: DocumentAclMembership;
}
export interface GetIngestedDocumentAclResponse {
  documentAcl: DocumentAcl;
}
export type InvocationIdentifier = string;
export interface GetInvocationStepRequest {
  invocationIdentifier: string;
  invocationStepId: string;
  sessionIdentifier: string;
}
export type ImageFormat = "png" | "jpeg" | "gif" | "webp" | (string & {});
export type S3Uri = string;
export interface S3Location {
  uri: string;
}
export type ImageSource =
  | { bytes: Uint8Array; s3Location?: never }
  | { bytes?: never; s3Location: S3Location };
export interface ImageBlock {
  format: ImageFormat;
  source: ImageSource;
}
export type BedrockSessionContentBlock =
  | { text: string; image?: never }
  | { text?: never; image: ImageBlock };
export type BedrockSessionContentBlocks = BedrockSessionContentBlock[];
export type InvocationStepPayload = { contentBlocks: BedrockSessionContentBlock[] };
export interface InvocationStep {
  sessionId: string;
  invocationId: string;
  invocationStepId: string;
  invocationStepTime: Date;
  payload: InvocationStepPayload;
}
export interface GetInvocationStepResponse {
  invocationStep: InvocationStep;
}
export interface GetSessionRequest {
  sessionIdentifier: string;
}
export interface GetSessionResponse {
  sessionId: string;
  sessionArn: string;
  sessionStatus: SessionStatus;
  createdAt: Date;
  lastUpdatedAt: Date;
  sessionMetadata?: { [key: string]: string | undefined };
  encryptionKeyArn?: string;
}
export type SessionAttributesMap = { [key: string]: string | undefined };
export type PromptSessionAttributesMap = { [key: string]: string | undefined };
export type ApiPath = string | redacted.Redacted<string>;
export type ConfirmationState = "CONFIRM" | "DENY" | (string & {});
export type ResponseState = "FAILURE" | "REPROMPT" | (string & {});
export type ImageInputFormat = "png" | "jpeg" | "gif" | "webp" | (string & {});
export type ImageInputSource = { bytes: Uint8Array };
export interface ImageInput {
  format: ImageInputFormat;
  source: ImageInputSource;
}
export type ImageInputs = ImageInput[];
export interface ContentBody {
  body?: string;
  images?: ImageInput[];
}
export type ResponseBody = { [key: string]: ContentBody | undefined };
export interface ApiResult {
  actionGroup: string;
  httpMethod?: string;
  apiPath?: string | redacted.Redacted<string>;
  confirmationState?: ConfirmationState;
  responseState?: ResponseState;
  httpStatusCode?: number;
  responseBody?: { [key: string]: ContentBody | undefined };
  agentId?: string;
}
export interface FunctionResult {
  actionGroup: string;
  confirmationState?: ConfirmationState;
  function?: string;
  responseBody?: { [key: string]: ContentBody | undefined };
  responseState?: ResponseState;
  agentId?: string;
}
export type InvocationResultMember =
  | { apiResult: ApiResult; functionResult?: never }
  | { apiResult?: never; functionResult: FunctionResult };
export type ReturnControlInvocationResults = InvocationResultMember[];
export type FileSourceType = "S3" | "BYTE_CONTENT" | (string & {});
export interface S3ObjectFile {
  uri: string;
}
export type ByteContentBlob = Uint8Array | redacted.Redacted<Uint8Array>;
export interface ByteContentFile {
  mediaType: string;
  data: Uint8Array | redacted.Redacted<Uint8Array>;
}
export interface FileSource {
  sourceType: FileSourceType;
  s3Location?: S3ObjectFile;
  byteContent?: ByteContentFile;
}
export type FileUseCase = "CODE_INTERPRETER" | "CHAT" | (string & {});
export interface InputFile {
  name: string;
  source: FileSource;
  useCase: FileUseCase;
}
export type InputFiles = InputFile[];
export type SearchType = "HYBRID" | "SEMANTIC" | (string & {});
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
export type AttributeType = "STRING" | "NUMBER" | "BOOLEAN" | "STRING_LIST" | (string & {});
export interface MetadataAttributeSchema {
  key: string;
  type: AttributeType;
  description: string;
}
export type MetadataAttributeSchemaList = MetadataAttributeSchema[];
export interface ImplicitFilterConfiguration {
  metadataAttributes: MetadataAttributeSchema[];
  modelArn: string;
}
export interface KnowledgeBaseVectorSearchConfiguration {
  numberOfResults?: number;
  overrideSearchType?: SearchType;
  filter?: RetrievalFilter;
  rerankingConfiguration?: VectorSearchRerankingConfiguration;
  implicitFilterConfiguration?: ImplicitFilterConfiguration;
}
export type RerankingModelType = "CUSTOM" | "MANAGED" | "NONE" | (string & {});
export type ManagedSearchRerankingConfigurationType = "BEDROCK_RERANKING_MODEL" | (string & {});
export interface ManagedSearchBedrockRerankingModelConfiguration {
  modelArn: string;
  additionalModelRequestFields?: { [key: string]: any | undefined };
}
export interface ManagedSearchBedrockRerankingConfiguration {
  modelConfiguration: ManagedSearchBedrockRerankingModelConfiguration;
  numberOfRerankedResults?: number;
  metadataConfiguration?: MetadataConfigurationForReranking;
}
export interface ManagedSearchRerankingConfiguration {
  type: ManagedSearchRerankingConfigurationType;
  bedrockRerankingConfiguration?: ManagedSearchBedrockRerankingConfiguration;
}
export interface ManagedSearchConfiguration {
  numberOfResults?: number;
  filter?: RetrievalFilter;
  rerankingModelType?: RerankingModelType;
  rerankingConfiguration?: ManagedSearchRerankingConfiguration;
}
export interface KnowledgeBaseRetrievalConfiguration {
  vectorSearchConfiguration?: KnowledgeBaseVectorSearchConfiguration;
  managedSearchConfiguration?: ManagedSearchConfiguration;
}
export interface KnowledgeBaseConfiguration {
  knowledgeBaseId: string;
  retrievalConfiguration: KnowledgeBaseRetrievalConfiguration;
}
export type KnowledgeBaseConfigurations = KnowledgeBaseConfiguration[];
export type ContentBlock = { text: string };
export type ContentBlocks = ContentBlock[];
export interface Message {
  role: ConversationRole;
  content: ContentBlock[];
}
export type Messages = Message[];
export interface ConversationHistory {
  messages?: Message[];
}
export interface SessionState {
  sessionAttributes?: { [key: string]: string | undefined };
  promptSessionAttributes?: { [key: string]: string | undefined };
  returnControlInvocationResults?: InvocationResultMember[];
  invocationId?: string;
  files?: InputFile[];
  knowledgeBaseConfigurations?: KnowledgeBaseConfiguration[];
  conversationHistory?: ConversationHistory;
}
export type InputText = string | redacted.Redacted<string>;
export type PerformanceConfigLatency = "standard" | "optimized" | (string & {});
export interface PerformanceConfiguration {
  latency?: PerformanceConfigLatency;
}
export interface BedrockModelConfigurations {
  performanceConfig?: PerformanceConfiguration;
}
export interface StreamingConfigurations {
  streamFinalResponse?: boolean;
  applyGuardrailInterval?: number;
}
export interface PromptCreationConfigurations {
  previousConversationTurnsToInclude?: number;
  excludePreviousThinkingSteps?: boolean;
}
export type AWSResourceARN = string;
export interface InvokeAgentRequest {
  sessionState?: SessionState;
  agentId: string;
  agentAliasId: string;
  sessionId: string;
  endSession?: boolean;
  enableTrace?: boolean;
  inputText?: string | redacted.Redacted<string>;
  memoryId?: string;
  bedrockModelConfigurations?: BedrockModelConfigurations;
  streamingConfigurations?: StreamingConfigurations;
  promptCreationConfigurations?: PromptCreationConfigurations;
  sourceArn?: string;
}
export type PartBody = Uint8Array | redacted.Redacted<Uint8Array>;
export interface Span {
  start?: number;
  end?: number;
}
export interface TextResponsePart {
  text?: string;
  span?: Span;
}
export interface GeneratedResponsePart {
  textResponsePart?: TextResponsePart;
}
export type RetrievalResultContentType =
  | "TEXT"
  | "IMAGE"
  | "ROW"
  | "AUDIO"
  | "VIDEO"
  | (string & {});
export interface VideoSegment {
  s3Uri: string;
  summary?: string;
}
export interface AudioSegment {
  s3Uri: string;
  transcription?: string;
}
export type RetrievalResultContentColumnType =
  | "BLOB"
  | "BOOLEAN"
  | "DOUBLE"
  | "NULL"
  | "LONG"
  | "STRING"
  | (string & {});
export interface RetrievalResultContentColumn {
  columnName?: string;
  columnValue?: string;
  type?: RetrievalResultContentColumnType;
}
export type RetrievalResultContentRow = RetrievalResultContentColumn[];
export interface RetrievalResultContent {
  type?: RetrievalResultContentType;
  text?: string;
  byteContent?: string;
  video?: VideoSegment;
  audio?: AudioSegment;
  row?: RetrievalResultContentColumn[];
}
export type RetrievalResultLocationType =
  | "S3"
  | "WEB"
  | "CONFLUENCE"
  | "SALESFORCE"
  | "SHAREPOINT"
  | "CUSTOM"
  | "KENDRA"
  | "SQL"
  | "ONEDRIVE"
  | "GOOGLEDRIVE"
  | (string & {});
export interface RetrievalResultS3Location {
  uri?: string;
}
export interface RetrievalResultWebLocation {
  url?: string;
}
export interface RetrievalResultConfluenceLocation {
  url?: string;
}
export interface RetrievalResultSalesforceLocation {
  url?: string;
}
export interface RetrievalResultSharePointLocation {
  url?: string;
}
export interface RetrievalResultCustomDocumentLocation {
  id?: string;
}
export interface RetrievalResultKendraDocumentLocation {
  uri?: string;
}
export interface RetrievalResultSqlLocation {
  query?: string;
}
export interface RetrievalResultOneDriveLocation {
  url?: string;
}
export interface RetrievalResultGoogleDriveLocation {
  url?: string;
}
export interface RetrievalResultLocation {
  type: RetrievalResultLocationType;
  s3Location?: RetrievalResultS3Location;
  webLocation?: RetrievalResultWebLocation;
  confluenceLocation?: RetrievalResultConfluenceLocation;
  salesforceLocation?: RetrievalResultSalesforceLocation;
  sharePointLocation?: RetrievalResultSharePointLocation;
  customDocumentLocation?: RetrievalResultCustomDocumentLocation;
  kendraDocumentLocation?: RetrievalResultKendraDocumentLocation;
  sqlLocation?: RetrievalResultSqlLocation;
  oneDriveLocation?: RetrievalResultOneDriveLocation;
  googleDriveLocation?: RetrievalResultGoogleDriveLocation;
}
export type RetrievalResultMetadataKey = string;
export type RetrievalResultMetadataValue = unknown;
export type RetrievalResultMetadata = { [key: string]: any | undefined };
export interface RetrievedReference {
  content?: RetrievalResultContent;
  location?: RetrievalResultLocation;
  metadata?: { [key: string]: any | undefined };
}
export type RetrievedReferences = RetrievedReference[];
export interface Citation {
  generatedResponsePart?: GeneratedResponsePart;
  retrievedReferences?: RetrievedReference[];
}
export type Citations = Citation[];
export interface Attribution {
  citations?: Citation[];
}
export interface PayloadPart {
  bytes?: Uint8Array | redacted.Redacted<Uint8Array>;
  attribution?: Attribution;
}
export type TraceId = string;
export type GuardrailTopicType = "DENY" | (string & {});
export type GuardrailTopicPolicyAction = "BLOCKED" | (string & {});
export interface GuardrailTopic {
  name?: string;
  type?: GuardrailTopicType;
  action?: GuardrailTopicPolicyAction;
}
export type GuardrailTopicList = GuardrailTopic[];
export interface GuardrailTopicPolicyAssessment {
  topics?: GuardrailTopic[];
}
export type GuardrailContentFilterType =
  | "INSULTS"
  | "HATE"
  | "SEXUAL"
  | "VIOLENCE"
  | "MISCONDUCT"
  | "PROMPT_ATTACK"
  | (string & {});
export type GuardrailContentFilterConfidence = "NONE" | "LOW" | "MEDIUM" | "HIGH" | (string & {});
export type GuardrailContentPolicyAction = "BLOCKED" | (string & {});
export interface GuardrailContentFilter {
  type?: GuardrailContentFilterType;
  confidence?: GuardrailContentFilterConfidence;
  action?: GuardrailContentPolicyAction;
}
export type GuardrailContentFilterList = GuardrailContentFilter[];
export interface GuardrailContentPolicyAssessment {
  filters?: GuardrailContentFilter[];
}
export type GuardrailWordPolicyAction = "BLOCKED" | (string & {});
export interface GuardrailCustomWord {
  match?: string;
  action?: GuardrailWordPolicyAction;
}
export type GuardrailCustomWordList = GuardrailCustomWord[];
export type GuardrailManagedWordType = "PROFANITY" | (string & {});
export interface GuardrailManagedWord {
  match?: string;
  type?: GuardrailManagedWordType;
  action?: GuardrailWordPolicyAction;
}
export type GuardrailManagedWordList = GuardrailManagedWord[];
export interface GuardrailWordPolicyAssessment {
  customWords?: GuardrailCustomWord[];
  managedWordLists?: GuardrailManagedWord[];
}
export type GuardrailPiiEntityType =
  | "ADDRESS"
  | "AGE"
  | "AWS_ACCESS_KEY"
  | "AWS_SECRET_KEY"
  | "CA_HEALTH_NUMBER"
  | "CA_SOCIAL_INSURANCE_NUMBER"
  | "CREDIT_DEBIT_CARD_CVV"
  | "CREDIT_DEBIT_CARD_EXPIRY"
  | "CREDIT_DEBIT_CARD_NUMBER"
  | "DRIVER_ID"
  | "EMAIL"
  | "INTERNATIONAL_BANK_ACCOUNT_NUMBER"
  | "IP_ADDRESS"
  | "LICENSE_PLATE"
  | "MAC_ADDRESS"
  | "NAME"
  | "PASSWORD"
  | "PHONE"
  | "PIN"
  | "SWIFT_CODE"
  | "UK_NATIONAL_HEALTH_SERVICE_NUMBER"
  | "UK_NATIONAL_INSURANCE_NUMBER"
  | "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER"
  | "URL"
  | "USERNAME"
  | "US_BANK_ACCOUNT_NUMBER"
  | "US_BANK_ROUTING_NUMBER"
  | "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER"
  | "US_PASSPORT_NUMBER"
  | "US_SOCIAL_SECURITY_NUMBER"
  | "VEHICLE_IDENTIFICATION_NUMBER"
  | (string & {});
export type GuardrailSensitiveInformationPolicyAction = "BLOCKED" | "ANONYMIZED" | (string & {});
export interface GuardrailPiiEntityFilter {
  type?: GuardrailPiiEntityType;
  match?: string;
  action?: GuardrailSensitiveInformationPolicyAction;
}
export type GuardrailPiiEntityFilterList = GuardrailPiiEntityFilter[];
export interface GuardrailRegexFilter {
  name?: string;
  regex?: string;
  match?: string;
  action?: GuardrailSensitiveInformationPolicyAction;
}
export type GuardrailRegexFilterList = GuardrailRegexFilter[];
export interface GuardrailSensitiveInformationPolicyAssessment {
  piiEntities?: GuardrailPiiEntityFilter[];
  regexes?: GuardrailRegexFilter[];
}
export interface GuardrailAssessment {
  topicPolicy?: GuardrailTopicPolicyAssessment;
  contentPolicy?: GuardrailContentPolicyAssessment;
  wordPolicy?: GuardrailWordPolicyAssessment;
  sensitiveInformationPolicy?: GuardrailSensitiveInformationPolicyAssessment;
}
export type GuardrailAssessmentList = GuardrailAssessment[];
export interface Usage {
  inputTokens?: number;
  outputTokens?: number;
}
export interface Metadata {
  startTime?: Date;
  endTime?: Date;
  totalTimeMs?: number;
  operationTotalTimeMs?: number;
  clientRequestId?: string;
  usage?: Usage;
}
export interface GuardrailTrace {
  action?: GuardrailAction;
  traceId?: string;
  inputAssessments?: GuardrailAssessment[];
  outputAssessments?: GuardrailAssessment[];
  metadata?: Metadata;
}
export type PromptText = string | redacted.Redacted<string>;
export type PromptType =
  | "PRE_PROCESSING"
  | "ORCHESTRATION"
  | "KNOWLEDGE_BASE_RESPONSE_GENERATION"
  | "POST_PROCESSING"
  | "ROUTING_CLASSIFIER"
  | (string & {});
export type LambdaArn = string;
export type CreationMode = "DEFAULT" | "OVERRIDDEN" | (string & {});
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
export type ModelIdentifier = string;
export interface ModelInvocationInput {
  traceId?: string;
  text?: string | redacted.Redacted<string>;
  type?: PromptType;
  overrideLambda?: string;
  promptCreationMode?: CreationMode;
  inferenceConfiguration?: InferenceConfiguration;
  parserMode?: CreationMode;
  foundationModel?: string;
}
export type RationaleString = string | redacted.Redacted<string>;
export interface PreProcessingParsedResponse {
  rationale?: string | redacted.Redacted<string>;
  isValid?: boolean;
}
export interface RawResponse {
  content?: string;
}
export interface ReasoningTextBlock {
  text: string;
  signature?: string;
}
export type ReasoningContentBlock =
  | { reasoningText: ReasoningTextBlock; redactedContent?: never }
  | { reasoningText?: never; redactedContent: Uint8Array };
export interface PreProcessingModelInvocationOutput {
  traceId?: string;
  parsedResponse?: PreProcessingParsedResponse;
  rawResponse?: RawResponse;
  metadata?: Metadata;
  reasoningContent?: ReasoningContentBlock;
}
export type PreProcessingTrace =
  | { modelInvocationInput: ModelInvocationInput; modelInvocationOutput?: never }
  | { modelInvocationInput?: never; modelInvocationOutput: PreProcessingModelInvocationOutput };
export interface Rationale {
  traceId?: string;
  text?: string | redacted.Redacted<string>;
}
export type InvocationType =
  | "ACTION_GROUP"
  | "KNOWLEDGE_BASE"
  | "FINISH"
  | "ACTION_GROUP_CODE_INTERPRETER"
  | "AGENT_COLLABORATOR"
  | (string & {});
export type ActionGroupName = string | redacted.Redacted<string>;
export type Verb = string | redacted.Redacted<string>;
export interface Parameter {
  name?: string;
  type?: string;
  value?: string;
}
export type Parameters = Parameter[];
export type ContentMap = { [key: string]: Parameter[] | undefined };
export interface RequestBody {
  content?: { [key: string]: Parameter[] | undefined };
}
export type ExecutionType = "LAMBDA" | "RETURN_CONTROL" | (string & {});
export interface ActionGroupInvocationInput {
  actionGroupName?: string | redacted.Redacted<string>;
  verb?: string | redacted.Redacted<string>;
  apiPath?: string | redacted.Redacted<string>;
  parameters?: Parameter[];
  requestBody?: RequestBody;
  function?: string | redacted.Redacted<string>;
  executionType?: ExecutionType;
  invocationId?: string;
}
export type KnowledgeBaseLookupInputString = string | redacted.Redacted<string>;
export type TraceKnowledgeBaseId = string | redacted.Redacted<string>;
export interface KnowledgeBaseLookupInput {
  text?: string | redacted.Redacted<string>;
  knowledgeBaseId?: string | redacted.Redacted<string>;
}
export type Files = string[];
export interface CodeInterpreterInvocationInput {
  code?: string;
  files?: string[];
}
export type AgentAliasArn = string;
export type PayloadType = "TEXT" | "RETURN_CONTROL" | (string & {});
export type AgentCollaboratorPayloadString = string | redacted.Redacted<string>;
export interface ReturnControlResults {
  invocationId?: string;
  returnControlInvocationResults?: InvocationResultMember[];
}
export interface AgentCollaboratorInputPayload {
  type?: PayloadType;
  text?: string | redacted.Redacted<string>;
  returnControlResults?: ReturnControlResults;
}
export interface AgentCollaboratorInvocationInput {
  agentCollaboratorName?: string;
  agentCollaboratorAliasArn?: string;
  input?: AgentCollaboratorInputPayload;
}
export interface InvocationInput {
  traceId?: string;
  invocationType?: InvocationType;
  actionGroupInvocationInput?: ActionGroupInvocationInput;
  knowledgeBaseLookupInput?: KnowledgeBaseLookupInput;
  codeInterpreterInvocationInput?: CodeInterpreterInvocationInput;
  agentCollaboratorInvocationInput?: AgentCollaboratorInvocationInput;
}
export type Type =
  | "ACTION_GROUP"
  | "AGENT_COLLABORATOR"
  | "KNOWLEDGE_BASE"
  | "FINISH"
  | "ASK_USER"
  | "REPROMPT"
  | (string & {});
export type ActionGroupOutputString = string | redacted.Redacted<string>;
export interface ActionGroupInvocationOutput {
  text?: string | redacted.Redacted<string>;
  metadata?: Metadata;
}
export interface ApiParameter {
  name?: string;
  type?: string;
  value?: string;
}
export type ApiParameters = ApiParameter[];
export type ParameterList = Parameter[];
export interface PropertyParameters {
  properties?: Parameter[];
}
export type ApiContentMap = { [key: string]: PropertyParameters | undefined };
export interface ApiRequestBody {
  content?: { [key: string]: PropertyParameters | undefined };
}
export type ActionInvocationType =
  | "RESULT"
  | "USER_CONFIRMATION"
  | "USER_CONFIRMATION_AND_RESULT"
  | (string & {});
export type Name = string | redacted.Redacted<string>;
export interface ApiInvocationInput {
  actionGroup: string;
  httpMethod?: string;
  apiPath?: string | redacted.Redacted<string>;
  parameters?: ApiParameter[];
  requestBody?: ApiRequestBody;
  actionInvocationType?: ActionInvocationType;
  agentId?: string;
  collaboratorName?: string | redacted.Redacted<string>;
}
export interface FunctionParameter {
  name?: string;
  type?: string;
  value?: string;
}
export type FunctionParameters = FunctionParameter[];
export interface FunctionInvocationInput {
  actionGroup: string;
  parameters?: FunctionParameter[];
  function?: string;
  actionInvocationType?: ActionInvocationType;
  agentId?: string;
  collaboratorName?: string | redacted.Redacted<string>;
}
export type InvocationInputMember =
  | { apiInvocationInput: ApiInvocationInput; functionInvocationInput?: never }
  | { apiInvocationInput?: never; functionInvocationInput: FunctionInvocationInput };
export type InvocationInputs = InvocationInputMember[];
export interface ReturnControlPayload {
  invocationInputs?: InvocationInputMember[];
  invocationId?: string;
}
export interface AgentCollaboratorOutputPayload {
  type?: PayloadType;
  text?: string | redacted.Redacted<string>;
  returnControlPayload?: ReturnControlPayload;
}
export interface AgentCollaboratorInvocationOutput {
  agentCollaboratorName?: string;
  agentCollaboratorAliasArn?: string;
  output?: AgentCollaboratorOutputPayload;
  metadata?: Metadata;
}
export interface KnowledgeBaseLookupOutput {
  retrievedReferences?: RetrievedReference[];
  metadata?: Metadata;
}
export type FinalResponseString = string | redacted.Redacted<string>;
export interface FinalResponse {
  text?: string | redacted.Redacted<string>;
  metadata?: Metadata;
}
export type Source = "ACTION_GROUP" | "KNOWLEDGE_BASE" | "PARSER" | (string & {});
export interface RepromptResponse {
  text?: string;
  source?: Source;
}
export interface CodeInterpreterInvocationOutput {
  executionOutput?: string;
  executionError?: string;
  files?: string[];
  executionTimeout?: boolean;
  metadata?: Metadata;
}
export interface Observation {
  traceId?: string;
  type?: Type;
  actionGroupInvocationOutput?: ActionGroupInvocationOutput;
  agentCollaboratorInvocationOutput?: AgentCollaboratorInvocationOutput;
  knowledgeBaseLookupOutput?: KnowledgeBaseLookupOutput;
  finalResponse?: FinalResponse;
  repromptResponse?: RepromptResponse;
  codeInterpreterInvocationOutput?: CodeInterpreterInvocationOutput;
}
export interface OrchestrationModelInvocationOutput {
  traceId?: string;
  rawResponse?: RawResponse;
  metadata?: Metadata;
  reasoningContent?: ReasoningContentBlock;
}
export type OrchestrationTrace =
  | {
      rationale: Rationale;
      invocationInput?: never;
      observation?: never;
      modelInvocationInput?: never;
      modelInvocationOutput?: never;
    }
  | {
      rationale?: never;
      invocationInput: InvocationInput;
      observation?: never;
      modelInvocationInput?: never;
      modelInvocationOutput?: never;
    }
  | {
      rationale?: never;
      invocationInput?: never;
      observation: Observation;
      modelInvocationInput?: never;
      modelInvocationOutput?: never;
    }
  | {
      rationale?: never;
      invocationInput?: never;
      observation?: never;
      modelInvocationInput: ModelInvocationInput;
      modelInvocationOutput?: never;
    }
  | {
      rationale?: never;
      invocationInput?: never;
      observation?: never;
      modelInvocationInput?: never;
      modelInvocationOutput: OrchestrationModelInvocationOutput;
    };
export type OutputString = string | redacted.Redacted<string>;
export interface PostProcessingParsedResponse {
  text?: string | redacted.Redacted<string>;
}
export interface PostProcessingModelInvocationOutput {
  traceId?: string;
  parsedResponse?: PostProcessingParsedResponse;
  rawResponse?: RawResponse;
  metadata?: Metadata;
  reasoningContent?: ReasoningContentBlock;
}
export type PostProcessingTrace =
  | { modelInvocationInput: ModelInvocationInput; modelInvocationOutput?: never }
  | { modelInvocationInput?: never; modelInvocationOutput: PostProcessingModelInvocationOutput };
export interface RoutingClassifierModelInvocationOutput {
  traceId?: string;
  rawResponse?: RawResponse;
  metadata?: Metadata;
}
export type RoutingClassifierTrace =
  | {
      invocationInput: InvocationInput;
      observation?: never;
      modelInvocationInput?: never;
      modelInvocationOutput?: never;
    }
  | {
      invocationInput?: never;
      observation: Observation;
      modelInvocationInput?: never;
      modelInvocationOutput?: never;
    }
  | {
      invocationInput?: never;
      observation?: never;
      modelInvocationInput: ModelInvocationInput;
      modelInvocationOutput?: never;
    }
  | {
      invocationInput?: never;
      observation?: never;
      modelInvocationInput?: never;
      modelInvocationOutput: RoutingClassifierModelInvocationOutput;
    };
export type FailureReasonString = string | redacted.Redacted<string>;
export interface FailureTrace {
  traceId?: string;
  failureReason?: string | redacted.Redacted<string>;
  failureCode?: number;
  metadata?: Metadata;
}
export interface CustomOrchestrationTraceEvent {
  text?: string;
}
export interface CustomOrchestrationTrace {
  traceId?: string;
  event?: CustomOrchestrationTraceEvent;
}
export type Trace =
  | {
      guardrailTrace: GuardrailTrace;
      preProcessingTrace?: never;
      orchestrationTrace?: never;
      postProcessingTrace?: never;
      routingClassifierTrace?: never;
      failureTrace?: never;
      customOrchestrationTrace?: never;
    }
  | {
      guardrailTrace?: never;
      preProcessingTrace: PreProcessingTrace;
      orchestrationTrace?: never;
      postProcessingTrace?: never;
      routingClassifierTrace?: never;
      failureTrace?: never;
      customOrchestrationTrace?: never;
    }
  | {
      guardrailTrace?: never;
      preProcessingTrace?: never;
      orchestrationTrace: OrchestrationTrace;
      postProcessingTrace?: never;
      routingClassifierTrace?: never;
      failureTrace?: never;
      customOrchestrationTrace?: never;
    }
  | {
      guardrailTrace?: never;
      preProcessingTrace?: never;
      orchestrationTrace?: never;
      postProcessingTrace: PostProcessingTrace;
      routingClassifierTrace?: never;
      failureTrace?: never;
      customOrchestrationTrace?: never;
    }
  | {
      guardrailTrace?: never;
      preProcessingTrace?: never;
      orchestrationTrace?: never;
      postProcessingTrace?: never;
      routingClassifierTrace: RoutingClassifierTrace;
      failureTrace?: never;
      customOrchestrationTrace?: never;
    }
  | {
      guardrailTrace?: never;
      preProcessingTrace?: never;
      orchestrationTrace?: never;
      postProcessingTrace?: never;
      routingClassifierTrace?: never;
      failureTrace: FailureTrace;
      customOrchestrationTrace?: never;
    }
  | {
      guardrailTrace?: never;
      preProcessingTrace?: never;
      orchestrationTrace?: never;
      postProcessingTrace?: never;
      routingClassifierTrace?: never;
      failureTrace?: never;
      customOrchestrationTrace: CustomOrchestrationTrace;
    };
export type Caller = { agentAliasArn: string };
export type CallerChain = Caller[];
export type AgentVersion = string;
export interface TracePart {
  sessionId?: string;
  trace?: Trace;
  callerChain?: Caller[];
  eventTime?: Date;
  collaboratorName?: string | redacted.Redacted<string>;
  agentId?: string;
  agentAliasId?: string;
  agentVersion?: string;
}
export type FileBody = Uint8Array | redacted.Redacted<Uint8Array>;
export interface OutputFile {
  name?: string;
  type?: string;
  bytes?: Uint8Array | redacted.Redacted<Uint8Array>;
}
export type OutputFiles = OutputFile[];
export interface FilePart {
  files?: OutputFile[];
}
export type ResponseStream =
  | {
      chunk: PayloadPart;
      trace?: never;
      returnControl?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
      modelNotReadyException?: never;
      files?: never;
    }
  | {
      chunk?: never;
      trace: TracePart;
      returnControl?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
      modelNotReadyException?: never;
      files?: never;
    }
  | {
      chunk?: never;
      trace?: never;
      returnControl: ReturnControlPayload;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
      modelNotReadyException?: never;
      files?: never;
    }
  | {
      chunk?: never;
      trace?: never;
      returnControl?: never;
      internalServerException: InternalServerException;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
      modelNotReadyException?: never;
      files?: never;
    }
  | {
      chunk?: never;
      trace?: never;
      returnControl?: never;
      internalServerException?: never;
      validationException: ValidationException;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
      modelNotReadyException?: never;
      files?: never;
    }
  | {
      chunk?: never;
      trace?: never;
      returnControl?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException: ResourceNotFoundException;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
      modelNotReadyException?: never;
      files?: never;
    }
  | {
      chunk?: never;
      trace?: never;
      returnControl?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException: ServiceQuotaExceededException;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
      modelNotReadyException?: never;
      files?: never;
    }
  | {
      chunk?: never;
      trace?: never;
      returnControl?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException: ThrottlingException;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
      modelNotReadyException?: never;
      files?: never;
    }
  | {
      chunk?: never;
      trace?: never;
      returnControl?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException: AccessDeniedException;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
      modelNotReadyException?: never;
      files?: never;
    }
  | {
      chunk?: never;
      trace?: never;
      returnControl?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException: ConflictException;
      dependencyFailedException?: never;
      badGatewayException?: never;
      modelNotReadyException?: never;
      files?: never;
    }
  | {
      chunk?: never;
      trace?: never;
      returnControl?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException: DependencyFailedException;
      badGatewayException?: never;
      modelNotReadyException?: never;
      files?: never;
    }
  | {
      chunk?: never;
      trace?: never;
      returnControl?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException: BadGatewayException;
      modelNotReadyException?: never;
      files?: never;
    }
  | {
      chunk?: never;
      trace?: never;
      returnControl?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
      modelNotReadyException: ModelNotReadyException;
      files?: never;
    }
  | {
      chunk?: never;
      trace?: never;
      returnControl?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
      modelNotReadyException?: never;
      files: FilePart;
    };
export interface InvokeAgentResponse {
  completion: stream.Stream<ResponseStream, Error, never>;
  contentType: string;
  sessionId: string;
  memoryId?: string;
}
export type NodeOutputName = string;
export type FlowInputContent = { document: any };
export type NodeInputName = string;
export interface FlowInput {
  nodeName: string;
  nodeOutputName?: string;
  content: FlowInputContent;
  nodeInputName?: string;
}
export type FlowInputs = FlowInput[];
export interface ModelPerformanceConfiguration {
  performanceConfig?: PerformanceConfiguration;
}
export type FlowExecutionId = string;
export interface InvokeFlowRequest {
  flowIdentifier: string;
  flowAliasIdentifier: string;
  inputs: FlowInput[];
  enableTrace?: boolean;
  modelPerformanceConfiguration?: ModelPerformanceConfiguration;
  executionId?: string;
}
export type NodeType =
  | "FlowInputNode"
  | "FlowOutputNode"
  | "LambdaFunctionNode"
  | "KnowledgeBaseNode"
  | "PromptNode"
  | "ConditionNode"
  | "LexNode"
  | (string & {});
export type FlowOutputContent = { document: any };
export interface FlowOutputEvent {
  nodeName: string;
  nodeType: NodeType;
  content: FlowOutputContent;
}
export type FlowCompletionReason = "SUCCESS" | "INPUT_REQUIRED" | (string & {});
export interface FlowCompletionEvent {
  completionReason: FlowCompletionReason;
}
export type FlowTraceNodeInputContent = { document: any };
export type FlowNodeOutputName = string;
export type FlowNodeInputExpression = string | redacted.Redacted<string>;
export interface FlowTraceNodeInputSource {
  nodeName: string;
  outputFieldName: string;
  expression: string | redacted.Redacted<string>;
}
export type FlowNodeIODataType =
  | "String"
  | "Number"
  | "Boolean"
  | "Object"
  | "Array"
  | (string & {});
export type FlowNodeInputCategory =
  | "LoopCondition"
  | "ReturnValueToLoopStart"
  | "ExitLoop"
  | (string & {});
export type FlowControlNodeType = "Iterator" | "Loop" | (string & {});
export interface FlowTraceNodeInputExecutionChainItem {
  nodeName: string;
  index?: number;
  type: FlowControlNodeType;
}
export type FlowTraceNodeInputExecutionChain = FlowTraceNodeInputExecutionChainItem[];
export interface FlowTraceNodeInputField {
  nodeInputName: string;
  content: FlowTraceNodeInputContent;
  source?: FlowTraceNodeInputSource;
  type?: FlowNodeIODataType;
  category?: FlowNodeInputCategory;
  executionChain?: FlowTraceNodeInputExecutionChainItem[];
}
export type FlowTraceNodeInputFields = FlowTraceNodeInputField[];
export interface FlowTraceNodeInputEvent {
  nodeName: string;
  timestamp: Date;
  fields: FlowTraceNodeInputField[];
}
export type FlowTraceNodeOutputContent = { document: any };
export type FlowNodeInputName = string;
export interface FlowTraceNodeOutputNext {
  nodeName: string;
  inputFieldName: string;
}
export type FlowTraceNodeOutputNextList = FlowTraceNodeOutputNext[];
export interface FlowTraceNodeOutputField {
  nodeOutputName: string;
  content: FlowTraceNodeOutputContent;
  next?: FlowTraceNodeOutputNext[];
  type?: FlowNodeIODataType;
}
export type FlowTraceNodeOutputFields = FlowTraceNodeOutputField[];
export interface FlowTraceNodeOutputEvent {
  nodeName: string;
  timestamp: Date;
  fields: FlowTraceNodeOutputField[];
}
export interface FlowTraceCondition {
  conditionName: string;
}
export type FlowTraceConditions = FlowTraceCondition[];
export interface FlowTraceConditionNodeResultEvent {
  nodeName: string;
  timestamp: Date;
  satisfiedConditions: FlowTraceCondition[];
}
export interface FlowTraceNodeActionEvent {
  nodeName: string;
  timestamp: Date;
  requestId: string;
  serviceName: string;
  operationName: string;
  operationRequest?: any;
  operationResponse?: any;
}
export type AgentTraces = TracePart[];
export type TraceElements = { agentTraces: TracePart[] };
export interface FlowTraceDependencyEvent {
  nodeName: string;
  timestamp: Date;
  traceElements: TraceElements;
}
export type FlowTrace =
  | {
      nodeInputTrace: FlowTraceNodeInputEvent;
      nodeOutputTrace?: never;
      conditionNodeResultTrace?: never;
      nodeActionTrace?: never;
      nodeDependencyTrace?: never;
    }
  | {
      nodeInputTrace?: never;
      nodeOutputTrace: FlowTraceNodeOutputEvent;
      conditionNodeResultTrace?: never;
      nodeActionTrace?: never;
      nodeDependencyTrace?: never;
    }
  | {
      nodeInputTrace?: never;
      nodeOutputTrace?: never;
      conditionNodeResultTrace: FlowTraceConditionNodeResultEvent;
      nodeActionTrace?: never;
      nodeDependencyTrace?: never;
    }
  | {
      nodeInputTrace?: never;
      nodeOutputTrace?: never;
      conditionNodeResultTrace?: never;
      nodeActionTrace: FlowTraceNodeActionEvent;
      nodeDependencyTrace?: never;
    }
  | {
      nodeInputTrace?: never;
      nodeOutputTrace?: never;
      conditionNodeResultTrace?: never;
      nodeActionTrace?: never;
      nodeDependencyTrace: FlowTraceDependencyEvent;
    };
export interface FlowTraceEvent {
  trace: FlowTrace;
}
export type FlowMultiTurnInputContent = { document: any };
export interface FlowMultiTurnInputRequestEvent {
  nodeName: string;
  nodeType: NodeType;
  content: FlowMultiTurnInputContent;
}
export type FlowResponseStream =
  | {
      flowOutputEvent: FlowOutputEvent;
      flowCompletionEvent?: never;
      flowTraceEvent?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
      flowMultiTurnInputRequestEvent?: never;
    }
  | {
      flowOutputEvent?: never;
      flowCompletionEvent: FlowCompletionEvent;
      flowTraceEvent?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
      flowMultiTurnInputRequestEvent?: never;
    }
  | {
      flowOutputEvent?: never;
      flowCompletionEvent?: never;
      flowTraceEvent: FlowTraceEvent;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
      flowMultiTurnInputRequestEvent?: never;
    }
  | {
      flowOutputEvent?: never;
      flowCompletionEvent?: never;
      flowTraceEvent?: never;
      internalServerException: InternalServerException;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
      flowMultiTurnInputRequestEvent?: never;
    }
  | {
      flowOutputEvent?: never;
      flowCompletionEvent?: never;
      flowTraceEvent?: never;
      internalServerException?: never;
      validationException: ValidationException;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
      flowMultiTurnInputRequestEvent?: never;
    }
  | {
      flowOutputEvent?: never;
      flowCompletionEvent?: never;
      flowTraceEvent?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException: ResourceNotFoundException;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
      flowMultiTurnInputRequestEvent?: never;
    }
  | {
      flowOutputEvent?: never;
      flowCompletionEvent?: never;
      flowTraceEvent?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException: ServiceQuotaExceededException;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
      flowMultiTurnInputRequestEvent?: never;
    }
  | {
      flowOutputEvent?: never;
      flowCompletionEvent?: never;
      flowTraceEvent?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException: ThrottlingException;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
      flowMultiTurnInputRequestEvent?: never;
    }
  | {
      flowOutputEvent?: never;
      flowCompletionEvent?: never;
      flowTraceEvent?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException: AccessDeniedException;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
      flowMultiTurnInputRequestEvent?: never;
    }
  | {
      flowOutputEvent?: never;
      flowCompletionEvent?: never;
      flowTraceEvent?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException: ConflictException;
      dependencyFailedException?: never;
      badGatewayException?: never;
      flowMultiTurnInputRequestEvent?: never;
    }
  | {
      flowOutputEvent?: never;
      flowCompletionEvent?: never;
      flowTraceEvent?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException: DependencyFailedException;
      badGatewayException?: never;
      flowMultiTurnInputRequestEvent?: never;
    }
  | {
      flowOutputEvent?: never;
      flowCompletionEvent?: never;
      flowTraceEvent?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException: BadGatewayException;
      flowMultiTurnInputRequestEvent?: never;
    }
  | {
      flowOutputEvent?: never;
      flowCompletionEvent?: never;
      flowTraceEvent?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
      flowMultiTurnInputRequestEvent: FlowMultiTurnInputRequestEvent;
    };
export interface InvokeFlowResponse {
  responseStream: stream.Stream<FlowResponseStream, Error, never>;
  executionId?: string;
}
export type Instruction = string | redacted.Redacted<string>;
export type SessionTTL = number;
export type ResourceName = string | redacted.Redacted<string>;
export type ResourceDescription = string | redacted.Redacted<string>;
export type ActionGroupSignature =
  | "AMAZON.UserInput"
  | "AMAZON.CodeInterpreter"
  | "ANTHROPIC.Computer"
  | "ANTHROPIC.Bash"
  | "ANTHROPIC.TextEditor"
  | (string & {});
export type LambdaResourceArn = string;
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
export type FunctionDescription = string;
export type ParameterName = string;
export type ParameterDescription = string;
export type ParameterType = "string" | "number" | "integer" | "boolean" | "array" | (string & {});
export interface ParameterDetail {
  description?: string;
  type: ParameterType;
  required?: boolean;
}
export type ParameterMap = { [key: string]: ParameterDetail | undefined };
export type RequireConfirmation = "ENABLED" | "DISABLED" | (string & {});
export interface FunctionDefinition {
  name: string | redacted.Redacted<string>;
  description?: string;
  parameters?: { [key: string]: ParameterDetail | undefined };
  requireConfirmation?: RequireConfirmation;
}
export type Functions = FunctionDefinition[];
export type FunctionSchema = { functions: FunctionDefinition[] };
export type ActionGroupSignatureParams = { [key: string]: string | undefined };
export interface AgentActionGroup {
  actionGroupName: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  parentActionGroupSignature?: ActionGroupSignature;
  actionGroupExecutor?: ActionGroupExecutor;
  apiSchema?: APISchema;
  functionSchema?: FunctionSchema;
  parentActionGroupSignatureParams?: { [key: string]: string | undefined };
}
export type AgentActionGroups = AgentActionGroup[];
export interface KnowledgeBase {
  knowledgeBaseId: string;
  description: string | redacted.Redacted<string>;
  retrievalConfiguration?: KnowledgeBaseRetrievalConfiguration;
}
export type KnowledgeBases = KnowledgeBase[];
export type GuardrailIdentifierWithArn = string;
export type GuardrailVersion = string;
export interface GuardrailConfigurationWithArn {
  guardrailIdentifier: string;
  guardrailVersion: string;
}
export type PromptState = "ENABLED" | "DISABLED" | (string & {});
export type BasePromptTemplate = string | redacted.Redacted<string>;
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
export type AgentCollaboration = "SUPERVISOR" | "SUPERVISOR_ROUTER" | "DISABLED" | (string & {});
export type CollaborationInstruction = string | redacted.Redacted<string>;
export type RelayConversationHistory = "TO_COLLABORATOR" | "DISABLED" | (string & {});
export interface CollaboratorConfiguration {
  collaboratorName: string | redacted.Redacted<string>;
  collaboratorInstruction: string | redacted.Redacted<string>;
  agentAliasArn?: string;
  relayConversationHistory?: RelayConversationHistory;
}
export type CollaboratorConfigurations = CollaboratorConfiguration[];
export interface InlineSessionState {
  sessionAttributes?: { [key: string]: string | undefined };
  promptSessionAttributes?: { [key: string]: string | undefined };
  returnControlInvocationResults?: InvocationResultMember[];
  invocationId?: string;
  files?: InputFile[];
  conversationHistory?: ConversationHistory;
}
export interface Collaborator {
  customerEncryptionKeyArn?: string;
  foundationModel: string;
  instruction: string | redacted.Redacted<string>;
  idleSessionTTLInSeconds?: number;
  actionGroups?: AgentActionGroup[];
  knowledgeBases?: KnowledgeBase[];
  guardrailConfiguration?: GuardrailConfigurationWithArn;
  promptOverrideConfiguration?: PromptOverrideConfiguration;
  agentCollaboration?: AgentCollaboration;
  collaboratorConfigurations?: CollaboratorConfiguration[];
  agentName?: string | redacted.Redacted<string>;
}
export type Collaborators = Collaborator[];
export interface InlineBedrockModelConfigurations {
  performanceConfig?: PerformanceConfiguration;
}
export type OrchestrationType = "DEFAULT" | "CUSTOM_ORCHESTRATION" | (string & {});
export type OrchestrationExecutor = { lambda: string };
export interface CustomOrchestration {
  executor?: OrchestrationExecutor;
}
export interface InvokeInlineAgentRequest {
  customerEncryptionKeyArn?: string;
  foundationModel: string;
  instruction: string | redacted.Redacted<string>;
  idleSessionTTLInSeconds?: number;
  actionGroups?: AgentActionGroup[];
  knowledgeBases?: KnowledgeBase[];
  guardrailConfiguration?: GuardrailConfigurationWithArn;
  promptOverrideConfiguration?: PromptOverrideConfiguration;
  agentCollaboration?: AgentCollaboration;
  collaboratorConfigurations?: CollaboratorConfiguration[];
  agentName?: string | redacted.Redacted<string>;
  sessionId: string;
  endSession?: boolean;
  enableTrace?: boolean;
  inputText?: string | redacted.Redacted<string>;
  streamingConfigurations?: StreamingConfigurations;
  promptCreationConfigurations?: PromptCreationConfigurations;
  inlineSessionState?: InlineSessionState;
  collaborators?: Collaborator[];
  bedrockModelConfigurations?: InlineBedrockModelConfigurations;
  orchestrationType?: OrchestrationType;
  customOrchestration?: CustomOrchestration;
}
export interface InlineAgentPayloadPart {
  bytes?: Uint8Array | redacted.Redacted<Uint8Array>;
  attribution?: Attribution;
}
export interface InlineAgentTracePart {
  sessionId?: string;
  trace?: Trace;
  callerChain?: Caller[];
  eventTime?: Date;
  collaboratorName?: string | redacted.Redacted<string>;
}
export interface InlineAgentReturnControlPayload {
  invocationInputs?: InvocationInputMember[];
  invocationId?: string;
}
export interface InlineAgentFilePart {
  files?: OutputFile[];
}
export type InlineAgentResponseStream =
  | {
      chunk: InlineAgentPayloadPart;
      trace?: never;
      returnControl?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
      files?: never;
    }
  | {
      chunk?: never;
      trace: InlineAgentTracePart;
      returnControl?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
      files?: never;
    }
  | {
      chunk?: never;
      trace?: never;
      returnControl: InlineAgentReturnControlPayload;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
      files?: never;
    }
  | {
      chunk?: never;
      trace?: never;
      returnControl?: never;
      internalServerException: InternalServerException;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
      files?: never;
    }
  | {
      chunk?: never;
      trace?: never;
      returnControl?: never;
      internalServerException?: never;
      validationException: ValidationException;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
      files?: never;
    }
  | {
      chunk?: never;
      trace?: never;
      returnControl?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException: ResourceNotFoundException;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
      files?: never;
    }
  | {
      chunk?: never;
      trace?: never;
      returnControl?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException: ServiceQuotaExceededException;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
      files?: never;
    }
  | {
      chunk?: never;
      trace?: never;
      returnControl?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException: ThrottlingException;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
      files?: never;
    }
  | {
      chunk?: never;
      trace?: never;
      returnControl?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException: AccessDeniedException;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
      files?: never;
    }
  | {
      chunk?: never;
      trace?: never;
      returnControl?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException: ConflictException;
      dependencyFailedException?: never;
      badGatewayException?: never;
      files?: never;
    }
  | {
      chunk?: never;
      trace?: never;
      returnControl?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException: DependencyFailedException;
      badGatewayException?: never;
      files?: never;
    }
  | {
      chunk?: never;
      trace?: never;
      returnControl?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException: BadGatewayException;
      files?: never;
    }
  | {
      chunk?: never;
      trace?: never;
      returnControl?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
      files: InlineAgentFilePart;
    };
export interface InvokeInlineAgentResponse {
  completion: stream.Stream<InlineAgentResponseStream, Error, never>;
  contentType: string;
  sessionId: string;
}
export type FlowExecutionEventType = "Node" | "Flow" | (string & {});
export interface ListFlowExecutionEventsRequest {
  flowIdentifier: string;
  flowAliasIdentifier: string;
  executionIdentifier: string;
  maxResults?: number;
  nextToken?: string;
  eventType: FlowExecutionEventType;
}
export type FlowExecutionContent = { document: any };
export interface FlowInputField {
  name: string;
  content: FlowExecutionContent;
}
export type FlowInputFields = FlowInputField[];
export interface FlowExecutionInputEvent {
  nodeName: string;
  timestamp: Date;
  fields: FlowInputField[];
}
export interface FlowOutputField {
  name: string;
  content: FlowExecutionContent;
}
export type FlowOutputFields = FlowOutputField[];
export interface FlowExecutionOutputEvent {
  nodeName: string;
  timestamp: Date;
  fields: FlowOutputField[];
}
export type NodeExecutionContent = { document: any };
export interface NodeInputSource {
  nodeName: string;
  outputFieldName: string;
  expression: string | redacted.Redacted<string>;
}
export interface NodeInputExecutionChainItem {
  nodeName: string;
  index?: number;
  type: FlowControlNodeType;
}
export type NodeInputExecutionChain = NodeInputExecutionChainItem[];
export interface NodeInputField {
  name: string;
  content: NodeExecutionContent;
  source?: NodeInputSource;
  type?: FlowNodeIODataType;
  category?: FlowNodeInputCategory;
  executionChain?: NodeInputExecutionChainItem[];
}
export type NodeInputFields = NodeInputField[];
export interface NodeInputEvent {
  nodeName: string;
  timestamp: Date;
  fields: NodeInputField[];
}
export interface NodeOutputNext {
  nodeName: string;
  inputFieldName: string;
}
export type NodeOutputNextList = NodeOutputNext[];
export interface NodeOutputField {
  name: string;
  content: NodeExecutionContent;
  next?: NodeOutputNext[];
  type?: FlowNodeIODataType;
}
export type NodeOutputFields = NodeOutputField[];
export interface NodeOutputEvent {
  nodeName: string;
  timestamp: Date;
  fields: NodeOutputField[];
}
export interface SatisfiedCondition {
  conditionName: string;
}
export type SatisfiedConditions = SatisfiedCondition[];
export interface ConditionResultEvent {
  nodeName: string;
  timestamp: Date;
  satisfiedConditions: SatisfiedCondition[];
}
export type NodeErrorCode =
  | "VALIDATION"
  | "DEPENDENCY_FAILED"
  | "BAD_GATEWAY"
  | "INTERNAL_SERVER"
  | (string & {});
export interface NodeFailureEvent {
  nodeName: string;
  timestamp: Date;
  errorCode: NodeErrorCode;
  errorMessage: string;
}
export type FlowErrorCode =
  | "VALIDATION"
  | "INTERNAL_SERVER"
  | "NODE_EXECUTION_FAILED"
  | (string & {});
export interface FlowFailureEvent {
  timestamp: Date;
  errorCode: FlowErrorCode;
  errorMessage: string;
}
export interface NodeActionEvent {
  nodeName: string;
  timestamp: Date;
  requestId: string;
  serviceName: string;
  operationName: string;
  operationRequest?: any;
  operationResponse?: any;
}
export type NodeTraceElements = { agentTraces: TracePart[] };
export interface NodeDependencyEvent {
  nodeName: string;
  timestamp: Date;
  traceElements: NodeTraceElements;
}
export type FlowExecutionEvent =
  | {
      flowInputEvent: FlowExecutionInputEvent;
      flowOutputEvent?: never;
      nodeInputEvent?: never;
      nodeOutputEvent?: never;
      conditionResultEvent?: never;
      nodeFailureEvent?: never;
      flowFailureEvent?: never;
      nodeActionEvent?: never;
      nodeDependencyEvent?: never;
    }
  | {
      flowInputEvent?: never;
      flowOutputEvent: FlowExecutionOutputEvent;
      nodeInputEvent?: never;
      nodeOutputEvent?: never;
      conditionResultEvent?: never;
      nodeFailureEvent?: never;
      flowFailureEvent?: never;
      nodeActionEvent?: never;
      nodeDependencyEvent?: never;
    }
  | {
      flowInputEvent?: never;
      flowOutputEvent?: never;
      nodeInputEvent: NodeInputEvent;
      nodeOutputEvent?: never;
      conditionResultEvent?: never;
      nodeFailureEvent?: never;
      flowFailureEvent?: never;
      nodeActionEvent?: never;
      nodeDependencyEvent?: never;
    }
  | {
      flowInputEvent?: never;
      flowOutputEvent?: never;
      nodeInputEvent?: never;
      nodeOutputEvent: NodeOutputEvent;
      conditionResultEvent?: never;
      nodeFailureEvent?: never;
      flowFailureEvent?: never;
      nodeActionEvent?: never;
      nodeDependencyEvent?: never;
    }
  | {
      flowInputEvent?: never;
      flowOutputEvent?: never;
      nodeInputEvent?: never;
      nodeOutputEvent?: never;
      conditionResultEvent: ConditionResultEvent;
      nodeFailureEvent?: never;
      flowFailureEvent?: never;
      nodeActionEvent?: never;
      nodeDependencyEvent?: never;
    }
  | {
      flowInputEvent?: never;
      flowOutputEvent?: never;
      nodeInputEvent?: never;
      nodeOutputEvent?: never;
      conditionResultEvent?: never;
      nodeFailureEvent: NodeFailureEvent;
      flowFailureEvent?: never;
      nodeActionEvent?: never;
      nodeDependencyEvent?: never;
    }
  | {
      flowInputEvent?: never;
      flowOutputEvent?: never;
      nodeInputEvent?: never;
      nodeOutputEvent?: never;
      conditionResultEvent?: never;
      nodeFailureEvent?: never;
      flowFailureEvent: FlowFailureEvent;
      nodeActionEvent?: never;
      nodeDependencyEvent?: never;
    }
  | {
      flowInputEvent?: never;
      flowOutputEvent?: never;
      nodeInputEvent?: never;
      nodeOutputEvent?: never;
      conditionResultEvent?: never;
      nodeFailureEvent?: never;
      flowFailureEvent?: never;
      nodeActionEvent: NodeActionEvent;
      nodeDependencyEvent?: never;
    }
  | {
      flowInputEvent?: never;
      flowOutputEvent?: never;
      nodeInputEvent?: never;
      nodeOutputEvent?: never;
      conditionResultEvent?: never;
      nodeFailureEvent?: never;
      flowFailureEvent?: never;
      nodeActionEvent?: never;
      nodeDependencyEvent: NodeDependencyEvent;
    };
export type FlowExecutionEvents = FlowExecutionEvent[];
export interface ListFlowExecutionEventsResponse {
  flowExecutionEvents: FlowExecutionEvent[];
  nextToken?: string;
}
export interface ListFlowExecutionsRequest {
  flowIdentifier: string;
  flowAliasIdentifier?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface FlowExecutionSummary {
  executionArn: string;
  flowAliasIdentifier: string;
  flowIdentifier: string;
  flowVersion: string;
  status: FlowExecutionStatus;
  createdAt: Date;
  endedAt?: Date;
}
export type FlowExecutionSummaries = FlowExecutionSummary[];
export interface ListFlowExecutionsResponse {
  flowExecutionSummaries: FlowExecutionSummary[];
  nextToken?: string;
}
export interface ListInvocationsRequest {
  nextToken?: string;
  maxResults?: number;
  sessionIdentifier: string;
}
export interface InvocationSummary {
  sessionId: string;
  invocationId: string;
  createdAt: Date;
}
export type InvocationSummaries = InvocationSummary[];
export interface ListInvocationsResponse {
  invocationSummaries: InvocationSummary[];
  nextToken?: string;
}
export interface ListInvocationStepsRequest {
  invocationIdentifier?: string;
  nextToken?: string;
  maxResults?: number;
  sessionIdentifier: string;
}
export interface InvocationStepSummary {
  sessionId: string;
  invocationId: string;
  invocationStepId: string;
  invocationStepTime: Date;
}
export type InvocationStepSummaries = InvocationStepSummary[];
export interface ListInvocationStepsResponse {
  invocationStepSummaries: InvocationStepSummary[];
  nextToken?: string;
}
export interface ListSessionsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface SessionSummary {
  sessionId: string;
  sessionArn: string;
  sessionStatus: SessionStatus;
  createdAt: Date;
  lastUpdatedAt: Date;
}
export type SessionSummaries = SessionSummary[];
export interface ListSessionsResponse {
  sessionSummaries: SessionSummary[];
  nextToken?: string;
}
export type TaggableResourcesArn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
export interface TextPrompt {
  text: string;
}
export type InputPrompt = { textPrompt: TextPrompt };
export interface OptimizePromptRequest {
  input: InputPrompt;
  targetModelId: string;
}
export type OptimizedPrompt = { textPrompt: TextPrompt };
export interface OptimizedPromptEvent {
  optimizedPrompt?: OptimizedPrompt;
}
export interface AnalyzePromptEvent {
  message?: string;
}
export type OptimizedPromptStream =
  | {
      optimizedPromptEvent: OptimizedPromptEvent;
      analyzePromptEvent?: never;
      internalServerException?: never;
      throttlingException?: never;
      validationException?: never;
      dependencyFailedException?: never;
      accessDeniedException?: never;
      badGatewayException?: never;
    }
  | {
      optimizedPromptEvent?: never;
      analyzePromptEvent: AnalyzePromptEvent;
      internalServerException?: never;
      throttlingException?: never;
      validationException?: never;
      dependencyFailedException?: never;
      accessDeniedException?: never;
      badGatewayException?: never;
    }
  | {
      optimizedPromptEvent?: never;
      analyzePromptEvent?: never;
      internalServerException: InternalServerException;
      throttlingException?: never;
      validationException?: never;
      dependencyFailedException?: never;
      accessDeniedException?: never;
      badGatewayException?: never;
    }
  | {
      optimizedPromptEvent?: never;
      analyzePromptEvent?: never;
      internalServerException?: never;
      throttlingException: ThrottlingException;
      validationException?: never;
      dependencyFailedException?: never;
      accessDeniedException?: never;
      badGatewayException?: never;
    }
  | {
      optimizedPromptEvent?: never;
      analyzePromptEvent?: never;
      internalServerException?: never;
      throttlingException?: never;
      validationException: ValidationException;
      dependencyFailedException?: never;
      accessDeniedException?: never;
      badGatewayException?: never;
    }
  | {
      optimizedPromptEvent?: never;
      analyzePromptEvent?: never;
      internalServerException?: never;
      throttlingException?: never;
      validationException?: never;
      dependencyFailedException: DependencyFailedException;
      accessDeniedException?: never;
      badGatewayException?: never;
    }
  | {
      optimizedPromptEvent?: never;
      analyzePromptEvent?: never;
      internalServerException?: never;
      throttlingException?: never;
      validationException?: never;
      dependencyFailedException?: never;
      accessDeniedException: AccessDeniedException;
      badGatewayException?: never;
    }
  | {
      optimizedPromptEvent?: never;
      analyzePromptEvent?: never;
      internalServerException?: never;
      throttlingException?: never;
      validationException?: never;
      dependencyFailedException?: never;
      accessDeniedException?: never;
      badGatewayException: BadGatewayException;
    };
export interface OptimizePromptResponse {
  optimizedPrompt: stream.Stream<OptimizedPromptStream, Error, never>;
}
export interface PutInvocationStepRequest {
  sessionIdentifier: string;
  invocationIdentifier: string;
  invocationStepTime: Date;
  payload: InvocationStepPayload;
  invocationStepId?: string;
}
export interface PutInvocationStepResponse {
  invocationStepId: string;
}
export type RerankQueryContentType = "TEXT" | (string & {});
export interface RerankTextDocument {
  text?: string;
}
export interface RerankQuery {
  type: RerankQueryContentType;
  textQuery: RerankTextDocument;
}
export type RerankQueriesList = RerankQuery[];
export type RerankSourceType = "INLINE" | (string & {});
export type RerankDocumentType = "TEXT" | "JSON" | (string & {});
export interface RerankDocument {
  type: RerankDocumentType;
  textDocument?: RerankTextDocument;
  jsonDocument?: any;
}
export interface RerankSource {
  type: RerankSourceType;
  inlineDocumentSource: RerankDocument;
}
export type RerankSourcesList = RerankSource[];
export type RerankingConfigurationType = "BEDROCK_RERANKING_MODEL" | (string & {});
export interface BedrockRerankingModelConfiguration {
  modelArn: string;
  additionalModelRequestFields?: { [key: string]: any | undefined };
}
export interface BedrockRerankingConfiguration {
  numberOfResults?: number;
  modelConfiguration: BedrockRerankingModelConfiguration;
}
export interface RerankingConfiguration {
  type: RerankingConfigurationType;
  bedrockRerankingConfiguration: BedrockRerankingConfiguration;
}
export interface RerankRequest {
  queries: RerankQuery[];
  sources: RerankSource[];
  rerankingConfiguration: RerankingConfiguration;
  nextToken?: string;
}
export interface RerankResult {
  index: number;
  relevanceScore: number;
  document?: RerankDocument;
}
export type RerankResultsList = RerankResult[];
export interface RerankResponse {
  results: RerankResult[];
  nextToken?: string;
}
export type KnowledgeBaseQueryType = "TEXT" | "IMAGE" | (string & {});
export type InputImageFormat = "png" | "jpeg" | "gif" | "webp" | (string & {});
export interface InputImage {
  format: InputImageFormat;
  inlineContent: Uint8Array | redacted.Redacted<Uint8Array>;
}
export interface KnowledgeBaseQuery {
  type?: KnowledgeBaseQueryType;
  text?: string;
  image?: InputImage;
}
export interface GuardrailConfiguration {
  guardrailId: string;
  guardrailVersion: string;
}
export interface RetrieveRequest {
  knowledgeBaseId: string;
  retrievalQuery: KnowledgeBaseQuery;
  retrievalConfiguration?: KnowledgeBaseRetrievalConfiguration;
  guardrailConfiguration?: GuardrailConfiguration;
  nextToken?: string;
  userContext?: UserContext;
}
export interface KnowledgeBaseRetrievalResult {
  content: RetrievalResultContent;
  location?: RetrievalResultLocation;
  score?: number;
  metadata?: { [key: string]: any | undefined };
  documentId?: string;
}
export type KnowledgeBaseRetrievalResults = KnowledgeBaseRetrievalResult[];
export type GuadrailAction = "INTERVENED" | "NONE" | (string & {});
export interface RetrieveResponse {
  retrievalResults: KnowledgeBaseRetrievalResult[];
  guardrailAction?: GuadrailAction;
  nextToken?: string;
}
export interface RetrieveAndGenerateInput {
  text: string;
}
export type RetrieveAndGenerateType = "KNOWLEDGE_BASE" | "EXTERNAL_SOURCES" | (string & {});
export type TextPromptTemplate = string | redacted.Redacted<string>;
export interface PromptTemplate {
  textPromptTemplate?: string | redacted.Redacted<string>;
}
export type MaxTokens = number;
export type RAGStopSequences = string[];
export interface TextInferenceConfig {
  temperature?: number;
  topP?: number;
  maxTokens?: number;
  stopSequences?: string[];
}
export interface InferenceConfig {
  textInferenceConfig?: TextInferenceConfig;
}
export interface GenerationConfiguration {
  promptTemplate?: PromptTemplate;
  guardrailConfiguration?: GuardrailConfiguration;
  inferenceConfig?: InferenceConfig;
  additionalModelRequestFields?: { [key: string]: any | undefined };
  performanceConfig?: PerformanceConfiguration;
}
export type QueryTransformationType = "QUERY_DECOMPOSITION" | (string & {});
export interface QueryTransformationConfiguration {
  type: QueryTransformationType;
}
export interface OrchestrationConfiguration {
  promptTemplate?: PromptTemplate;
  inferenceConfig?: InferenceConfig;
  additionalModelRequestFields?: { [key: string]: any | undefined };
  queryTransformationConfiguration?: QueryTransformationConfiguration;
  performanceConfig?: PerformanceConfiguration;
}
export interface KnowledgeBaseRetrieveAndGenerateConfiguration {
  knowledgeBaseId: string;
  modelArn: string;
  retrievalConfiguration?: KnowledgeBaseRetrievalConfiguration;
  generationConfiguration?: GenerationConfiguration;
  orchestrationConfiguration?: OrchestrationConfiguration;
}
export type ExternalSourceType = "S3" | "BYTE_CONTENT" | (string & {});
export interface S3ObjectDoc {
  uri: string;
}
export type Identifier = string | redacted.Redacted<string>;
export type ContentType = string;
export interface ByteContentDoc {
  identifier: string | redacted.Redacted<string>;
  contentType: string;
  data: Uint8Array | redacted.Redacted<Uint8Array>;
}
export interface ExternalSource {
  sourceType: ExternalSourceType;
  s3Location?: S3ObjectDoc;
  byteContent?: ByteContentDoc;
}
export type ExternalSources = ExternalSource[];
export interface ExternalSourcesGenerationConfiguration {
  promptTemplate?: PromptTemplate;
  guardrailConfiguration?: GuardrailConfiguration;
  inferenceConfig?: InferenceConfig;
  additionalModelRequestFields?: { [key: string]: any | undefined };
  performanceConfig?: PerformanceConfiguration;
}
export interface ExternalSourcesRetrieveAndGenerateConfiguration {
  modelArn: string;
  sources: ExternalSource[];
  generationConfiguration?: ExternalSourcesGenerationConfiguration;
}
export interface RetrieveAndGenerateConfiguration {
  type: RetrieveAndGenerateType;
  knowledgeBaseConfiguration?: KnowledgeBaseRetrieveAndGenerateConfiguration;
  externalSourcesConfiguration?: ExternalSourcesRetrieveAndGenerateConfiguration;
}
export interface RetrieveAndGenerateSessionConfiguration {
  kmsKeyArn: string;
}
export interface RetrieveAndGenerateRequest {
  sessionId?: string;
  input: RetrieveAndGenerateInput;
  retrieveAndGenerateConfiguration?: RetrieveAndGenerateConfiguration;
  sessionConfiguration?: RetrieveAndGenerateSessionConfiguration;
  userContext?: UserContext;
}
export interface RetrieveAndGenerateOutput {
  text: string;
}
export interface RetrieveAndGenerateResponse {
  sessionId: string;
  output: RetrieveAndGenerateOutput;
  citations?: Citation[];
  guardrailAction?: GuadrailAction;
}
export interface RetrieveAndGenerateStreamRequest {
  sessionId?: string;
  input: RetrieveAndGenerateInput;
  retrieveAndGenerateConfiguration?: RetrieveAndGenerateConfiguration;
  sessionConfiguration?: RetrieveAndGenerateSessionConfiguration;
  userContext?: UserContext;
}
export interface RetrieveAndGenerateOutputEvent {
  text: string;
}
export interface CitationEvent {
  citation?: Citation;
  generatedResponsePart?: GeneratedResponsePart;
  retrievedReferences?: RetrievedReference[];
}
export interface GuardrailEvent {
  action?: GuadrailAction;
}
export type RetrieveAndGenerateStreamResponseOutput =
  | {
      output: RetrieveAndGenerateOutputEvent;
      citation?: never;
      guardrail?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
    }
  | {
      output?: never;
      citation: CitationEvent;
      guardrail?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
    }
  | {
      output?: never;
      citation?: never;
      guardrail: GuardrailEvent;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
    }
  | {
      output?: never;
      citation?: never;
      guardrail?: never;
      internalServerException: InternalServerException;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
    }
  | {
      output?: never;
      citation?: never;
      guardrail?: never;
      internalServerException?: never;
      validationException: ValidationException;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
    }
  | {
      output?: never;
      citation?: never;
      guardrail?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException: ResourceNotFoundException;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
    }
  | {
      output?: never;
      citation?: never;
      guardrail?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException: ServiceQuotaExceededException;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
    }
  | {
      output?: never;
      citation?: never;
      guardrail?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException: ThrottlingException;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
    }
  | {
      output?: never;
      citation?: never;
      guardrail?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException: AccessDeniedException;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException?: never;
    }
  | {
      output?: never;
      citation?: never;
      guardrail?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException: ConflictException;
      dependencyFailedException?: never;
      badGatewayException?: never;
    }
  | {
      output?: never;
      citation?: never;
      guardrail?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException: DependencyFailedException;
      badGatewayException?: never;
    }
  | {
      output?: never;
      citation?: never;
      guardrail?: never;
      internalServerException?: never;
      validationException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      accessDeniedException?: never;
      conflictException?: never;
      dependencyFailedException?: never;
      badGatewayException: BadGatewayException;
    };
export interface RetrieveAndGenerateStreamResponse {
  stream: stream.Stream<RetrieveAndGenerateStreamResponseOutput, Error, never>;
  sessionId: string;
}
export type FlowExecutionName = string;
export interface StartFlowExecutionRequest {
  flowIdentifier: string;
  flowAliasIdentifier: string;
  flowExecutionName?: string;
  inputs: FlowInput[];
  modelPerformanceConfiguration?: ModelPerformanceConfiguration;
}
export interface StartFlowExecutionResponse {
  executionArn?: string;
}
export interface StopFlowExecutionRequest {
  flowIdentifier: string;
  flowAliasIdentifier: string;
  executionIdentifier: string;
}
export interface StopFlowExecutionResponse {
  executionArn?: string;
  status: FlowExecutionStatus;
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
export interface UpdateSessionRequest {
  sessionMetadata?: { [key: string]: string | undefined };
  sessionIdentifier: string;
}
export interface UpdateSessionResponse {
  sessionId: string;
  sessionArn: string;
  sessionStatus: SessionStatus;
  createdAt: Date;
  lastUpdatedAt: Date;
}
export type AgenticRetrieveStreamError =
  | AccessDeniedException
  | BadGatewayException
  | ConflictException
  | DependencyFailedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information from one or more knowledge bases using an agentic approach. Agentic retrieval uses a foundation model to intelligently decompose complex queries into sub-queries and iteratively retrieve relevant information from your knowledge bases. This approach improves retrieval accuracy for complex, multi-step questions that a single retrieval pass might not fully address.
 *
 * The operation returns results through a stream that includes retrieval results, trace events for visibility into the process, and a generated response synthesized from the results by default, which can be turned off.
 */
export const agenticRetrieveStream: API.OperationMethod<
  AgenticRetrieveStreamRequest,
  AgenticRetrieveStreamResponse,
  AgenticRetrieveStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(31) as any as S.Schema<AgenticRetrieveStreamRequest>,
  output: __S(63) as any as S.Schema<AgenticRetrieveStreamResponse>,
  errors: [
    AccessDeniedException,
    BadGatewayException,
    ConflictException,
    DependencyFailedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AgenticRetrieveStream",
}));

export type CheckIngestedDocumentAclError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Checks whether a user has access to a specific document by verifying against the ingested access control list (ACL) in a knowledge base. Use this operation to validate that document-level access control is working as expected after ingestion. To use this operation, you must have the `bedrock:CheckIngestedDocumentAcl` permission.
 */
export const checkIngestedDocumentAcl: API.OperationMethod<
  CheckIngestedDocumentAclRequest,
  CheckIngestedDocumentAclResponse,
  CheckIngestedDocumentAclError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(64) as any as S.Schema<CheckIngestedDocumentAclRequest>,
  output: __S(65) as any as S.Schema<CheckIngestedDocumentAclResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CheckIngestedDocumentAcl",
}));

export type CreateInvocationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new invocation within a session. An invocation groups the related invocation steps that store the content from a conversation. For more information about sessions, see Store and retrieve conversation history and context with Amazon Bedrock sessions.
 *
 * Related APIs
 *
 * - ListInvocations
 *
 * - ListSessions
 *
 * - GetSession
 */
export const createInvocation: API.OperationMethod<
  CreateInvocationRequest,
  CreateInvocationResponse,
  CreateInvocationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(66) as any as S.Schema<CreateInvocationRequest>,
  output: __S(67) as any as S.Schema<CreateInvocationResponse>,
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
  operationName: "CreateInvocation",
}));

export type CreateSessionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a session to temporarily store conversations for generative AI (GenAI) applications built with open-source frameworks such as LangGraph and LlamaIndex. Sessions enable you to save the state of conversations at checkpoints, with the added security and infrastructure of Amazon Web Services. For more information, see Store and retrieve conversation history and context with Amazon Bedrock sessions.
 *
 * By default, Amazon Bedrock uses Amazon Web Services-managed keys for session encryption, including session metadata, or you can use your own KMS key. For more information, see Amazon Bedrock session encryption.
 *
 * You use a session to store state and conversation history for generative AI applications built with open-source frameworks. For Amazon Bedrock Agents, the service automatically manages conversation context and associates them with the agent-specific sessionId you specify in the InvokeAgent API operation.
 *
 * Related APIs:
 *
 * - ListSessions
 *
 * - GetSession
 *
 * - EndSession
 *
 * - DeleteSession
 */
export const createSession: API.OperationMethod<
  CreateSessionRequest,
  CreateSessionResponse,
  CreateSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(70) as any as S.Schema<CreateSessionRequest>,
  output: __S(71) as any as S.Schema<CreateSessionResponse>,
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
  operationName: "CreateSession",
}));

export type DeleteAgentMemoryError =
  | AccessDeniedException
  | BadGatewayException
  | ConflictException
  | DependencyFailedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes memory from the specified memory identifier.
 */
export const deleteAgentMemory: API.OperationMethod<
  DeleteAgentMemoryRequest,
  DeleteAgentMemoryResponse,
  DeleteAgentMemoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(72) as any as S.Schema<DeleteAgentMemoryRequest>,
  output: __S(73) as any as S.Schema<DeleteAgentMemoryResponse>,
  errors: [
    AccessDeniedException,
    BadGatewayException,
    ConflictException,
    DependencyFailedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAgentMemory",
}));

export type DeleteSessionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a session that you ended. You can't delete a session with an `ACTIVE` status. To delete an active session, you must first end it with the EndSession API operation. For more information about sessions, see Store and retrieve conversation history and context with Amazon Bedrock sessions.
 */
export const deleteSession: API.OperationMethod<
  DeleteSessionRequest,
  DeleteSessionResponse,
  DeleteSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(74) as any as S.Schema<DeleteSessionRequest>,
  output: __S(73) as any as S.Schema<DeleteSessionResponse>,
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
  operationName: "DeleteSession",
}));

export type EndSessionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Ends the session. After you end a session, you can still access its content but you can't add to it. To delete the session and it's content, you use the DeleteSession API operation. For more information about sessions, see Store and retrieve conversation history and context with Amazon Bedrock sessions.
 */
export const endSession: API.OperationMethod<
  EndSessionRequest,
  EndSessionResponse,
  EndSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(75) as any as S.Schema<EndSessionRequest>,
  output: __S(76) as any as S.Schema<EndSessionResponse>,
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
  operationName: "EndSession",
}));

export type GenerateQueryError =
  | AccessDeniedException
  | BadGatewayException
  | ConflictException
  | DependencyFailedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Generates an SQL query from a natural language query. For more information, see Generate a query for structured data in the Amazon Bedrock User Guide.
 */
export const generateQuery: API.OperationMethod<
  GenerateQueryRequest,
  GenerateQueryResponse,
  GenerateQueryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(81) as any as S.Schema<GenerateQueryRequest>,
  output: __S(84) as any as S.Schema<GenerateQueryResponse>,
  errors: [
    AccessDeniedException,
    BadGatewayException,
    ConflictException,
    DependencyFailedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GenerateQuery",
}));

export type GetAgentMemoryError =
  | AccessDeniedException
  | BadGatewayException
  | ConflictException
  | DependencyFailedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the sessions stored in the memory of the agent.
 */
export const getAgentMemory: API.PaginatedOperationMethod<
  GetAgentMemoryRequest,
  GetAgentMemoryResponse,
  GetAgentMemoryError,
  Credentials | HttpClient.HttpClient,
  Memory
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(85) as any as S.Schema<GetAgentMemoryRequest>,
  output: __S(89) as any as S.Schema<GetAgentMemoryResponse>,
  errors: [
    AccessDeniedException,
    BadGatewayException,
    ConflictException,
    DependencyFailedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAgentMemory",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "memoryContents",
    pageSize: "maxItems",
  } as const,
})) as any;

export type GetDocumentContentError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the content of an ingested document from a knowledge base. Returns a pre-signed URL for secure document access.
 */
export const getDocumentContent: API.OperationMethod<
  GetDocumentContentRequest,
  GetDocumentContentResponse,
  GetDocumentContentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(90) as any as S.Schema<GetDocumentContentRequest>,
  output: __S(91) as any as S.Schema<GetDocumentContentResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDocumentContent",
}));

export type GetExecutionFlowSnapshotError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the flow definition snapshot used for a flow execution. The snapshot represents the flow metadata and definition as it existed at the time the execution was started. Note that even if the flow is edited after an execution starts, the snapshot connected to the execution remains unchanged.
 *
 * Flow executions is in preview release for Amazon Bedrock and is subject to change.
 */
export const getExecutionFlowSnapshot: API.OperationMethod<
  GetExecutionFlowSnapshotRequest,
  GetExecutionFlowSnapshotResponse,
  GetExecutionFlowSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(92) as any as S.Schema<GetExecutionFlowSnapshotRequest>,
  output: __S(93) as any as S.Schema<GetExecutionFlowSnapshotResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetExecutionFlowSnapshot",
}));

export type GetFlowExecutionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves details about a specific flow execution, including its status, start and end times, and any errors that occurred during execution.
 */
export const getFlowExecution: API.OperationMethod<
  GetFlowExecutionRequest,
  GetFlowExecutionResponse,
  GetFlowExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(94) as any as S.Schema<GetFlowExecutionRequest>,
  output: __S(97) as any as S.Schema<GetFlowExecutionResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFlowExecution",
}));

export type GetIngestedDocumentAclError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the ingested access control list (ACL) for a specific document in a knowledge base. Use this operation to inspect the allow and deny lists that were ingested for a document to troubleshoot access control issues. To use this operation, you must have the `bedrock:GetIngestedDocumentAcl` permission.
 */
export const getIngestedDocumentAcl: API.OperationMethod<
  GetIngestedDocumentAclRequest,
  GetIngestedDocumentAclResponse,
  GetIngestedDocumentAclError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(98) as any as S.Schema<GetIngestedDocumentAclRequest>,
  output: __S(105) as any as S.Schema<GetIngestedDocumentAclResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIngestedDocumentAcl",
}));

export type GetInvocationStepError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the details of a specific invocation step within an invocation in a session. For more information about sessions, see Store and retrieve conversation history and context with Amazon Bedrock sessions.
 */
export const getInvocationStep: API.OperationMethod<
  GetInvocationStepRequest,
  GetInvocationStepResponse,
  GetInvocationStepError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(106) as any as S.Schema<GetInvocationStepRequest>,
  output: __S(114) as any as S.Schema<GetInvocationStepResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetInvocationStep",
}));

export type GetSessionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves details about a specific session. For more information about sessions, see Store and retrieve conversation history and context with Amazon Bedrock sessions.
 */
export const getSession: API.OperationMethod<
  GetSessionRequest,
  GetSessionResponse,
  GetSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(115) as any as S.Schema<GetSessionRequest>,
  output: __S(116) as any as S.Schema<GetSessionResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSession",
}));

export type InvokeAgentError =
  | AccessDeniedException
  | BadGatewayException
  | ConflictException
  | DependencyFailedException
  | InternalServerException
  | ModelNotReadyException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Amazon Bedrock Agents (now Amazon Bedrock Agents Classic) is no longer open to new customers. For capabilities similar to Bedrock Agents Classic, explore Amazon Bedrock AgentCore. Existing customers can continue to use the service as normal. For more information, see Amazon Bedrock Agents Classic availability change.
 *
 * Sends a prompt for the agent to process and respond to. Note the following fields for the request:
 *
 * - To continue the same conversation with an agent, use the same `sessionId` value in the request.
 *
 * - To activate trace enablement, turn `enableTrace` to `true`. Trace enablement helps you follow the agent's reasoning process that led it to the information it processed, the actions it took, and the final result it yielded. For more information, see Trace enablement.
 *
 * - End a conversation by setting `endSession` to `true`.
 *
 * - In the `sessionState` object, you can include attributes for the session or prompt or, if you configured an action group to return control, results from invocation of the action group.
 *
 * The response contains both **chunk** and **trace** attributes.
 *
 * The final response is returned in the `bytes` field of the `chunk` object. The `InvokeAgent` returns one chunk for the entire interaction.
 *
 * - The `attribution` object contains citations for parts of the response.
 *
 * - If you set `enableTrace` to `true` in the request, you can trace the agent's steps and reasoning process that led it to the response.
 *
 * - If the action predicted was configured to return control, the response returns parameters for the action, elicited from the user, in the `returnControl` field.
 *
 * - Errors are also surfaced in the response.
 */
export const invokeAgent: API.OperationMethod<
  InvokeAgentRequest,
  InvokeAgentResponse,
  InvokeAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(156) as any as S.Schema<InvokeAgentRequest>,
  output: __S(250) as any as S.Schema<InvokeAgentResponse>,
  errors: [
    AccessDeniedException,
    BadGatewayException,
    ConflictException,
    DependencyFailedException,
    InternalServerException,
    ModelNotReadyException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "InvokeAgent",
}));

export type InvokeFlowError =
  | AccessDeniedException
  | BadGatewayException
  | ConflictException
  | DependencyFailedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Invokes an alias of a flow to run the inputs that you specify and return the output of each node as a stream. If there's an error, the error is returned. For more information, see Test a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
 *
 * The CLI doesn't support streaming operations in Amazon Bedrock, including `InvokeFlow`.
 */
export const invokeFlow: API.OperationMethod<
  InvokeFlowRequest,
  InvokeFlowResponse,
  InvokeFlowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(254) as any as S.Schema<InvokeFlowRequest>,
  output: __S(279) as any as S.Schema<InvokeFlowResponse>,
  errors: [
    AccessDeniedException,
    BadGatewayException,
    ConflictException,
    DependencyFailedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "InvokeFlow",
}));

export type InvokeInlineAgentError =
  | AccessDeniedException
  | BadGatewayException
  | ConflictException
  | DependencyFailedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Invokes an inline Amazon Bedrock agent using the configurations you provide with the request.
 *
 * - Specify the following fields for security purposes.
 *
 * - (Optional) `customerEncryptionKeyArn` - The Amazon Resource Name (ARN) of a KMS key to encrypt the creation of the agent.
 *
 * - (Optional) `idleSessionTTLinSeconds` - Specify the number of seconds for which the agent should maintain session information. After this time expires, the subsequent `InvokeInlineAgent` request begins a new session.
 *
 * - To override the default prompt behavior for agent orchestration and to use advanced prompts, include a `promptOverrideConfiguration` object. For more information, see Advanced prompts.
 *
 * - The agent instructions will not be honored if your agent has only one knowledge base, uses default prompts, has no action group, and user input is disabled.
 */
export const invokeInlineAgent: API.OperationMethod<
  InvokeInlineAgentRequest,
  InvokeInlineAgentResponse,
  InvokeInlineAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(303) as any as S.Schema<InvokeInlineAgentRequest>,
  output: __S(307) as any as S.Schema<InvokeInlineAgentResponse>,
  errors: [
    AccessDeniedException,
    BadGatewayException,
    ConflictException,
    DependencyFailedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "InvokeInlineAgent",
}));

export type ListFlowExecutionEventsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists events that occurred during a flow execution. Events provide detailed information about the execution progress, including node inputs and outputs, flow inputs and outputs, condition results, and failure events.
 *
 * Flow executions is in preview release for Amazon Bedrock and is subject to change.
 */
export const listFlowExecutionEvents: API.PaginatedOperationMethod<
  ListFlowExecutionEventsRequest,
  ListFlowExecutionEventsResponse,
  ListFlowExecutionEventsError,
  Credentials | HttpClient.HttpClient,
  FlowExecutionEvent
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(308) as any as S.Schema<ListFlowExecutionEventsRequest>,
  output: __S(324) as any as S.Schema<ListFlowExecutionEventsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFlowExecutionEvents",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "flowExecutionEvents",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListFlowExecutionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all executions of a flow. Results can be paginated and include summary information about each execution, such as status, start and end times, and the execution's Amazon Resource Name (ARN).
 *
 * Flow executions is in preview release for Amazon Bedrock and is subject to change.
 */
export const listFlowExecutions: API.PaginatedOperationMethod<
  ListFlowExecutionsRequest,
  ListFlowExecutionsResponse,
  ListFlowExecutionsError,
  Credentials | HttpClient.HttpClient,
  FlowExecutionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(325) as any as S.Schema<ListFlowExecutionsRequest>,
  output: __S(328) as any as S.Schema<ListFlowExecutionsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFlowExecutions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "flowExecutionSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListInvocationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all invocations associated with a specific session. For more information about sessions, see Store and retrieve conversation history and context with Amazon Bedrock sessions.
 */
export const listInvocations: API.PaginatedOperationMethod<
  ListInvocationsRequest,
  ListInvocationsResponse,
  ListInvocationsError,
  Credentials | HttpClient.HttpClient,
  InvocationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(329) as any as S.Schema<ListInvocationsRequest>,
  output: __S(331) as any as S.Schema<ListInvocationsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListInvocations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "invocationSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListInvocationStepsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all invocation steps associated with a session and optionally, an invocation within the session. For more information about sessions, see Store and retrieve conversation history and context with Amazon Bedrock sessions.
 */
export const listInvocationSteps: API.PaginatedOperationMethod<
  ListInvocationStepsRequest,
  ListInvocationStepsResponse,
  ListInvocationStepsError,
  Credentials | HttpClient.HttpClient,
  InvocationStepSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(332) as any as S.Schema<ListInvocationStepsRequest>,
  output: __S(335) as any as S.Schema<ListInvocationStepsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListInvocationSteps",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "invocationStepSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSessionsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all sessions in your Amazon Web Services account. For more information about sessions, see Store and retrieve conversation history and context with Amazon Bedrock sessions.
 */
export const listSessions: API.PaginatedOperationMethod<
  ListSessionsRequest,
  ListSessionsResponse,
  ListSessionsError,
  Credentials | HttpClient.HttpClient,
  SessionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(336) as any as S.Schema<ListSessionsRequest>,
  output: __S(339) as any as S.Schema<ListSessionsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSessions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "sessionSummaries",
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
  input: __S(340) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(341) as any as S.Schema<ListTagsForResourceResponse>,
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

export type OptimizePromptError =
  | AccessDeniedException
  | BadGatewayException
  | DependencyFailedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Optimizes a prompt for the task that you specify. For more information, see Optimize a prompt in the Amazon Bedrock User Guide.
 */
export const optimizePrompt: API.OperationMethod<
  OptimizePromptRequest,
  OptimizePromptResponse,
  OptimizePromptError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(344) as any as S.Schema<OptimizePromptRequest>,
  output: __S(348) as any as S.Schema<OptimizePromptResponse>,
  errors: [
    AccessDeniedException,
    BadGatewayException,
    DependencyFailedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "OptimizePrompt",
}));

export type PutInvocationStepError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Add an invocation step to an invocation in a session. An invocation step stores fine-grained state checkpoints, including text and images, for each interaction. For more information about sessions, see Store and retrieve conversation history and context with Amazon Bedrock sessions.
 *
 * Related APIs:
 *
 * - GetInvocationStep
 *
 * - ListInvocationSteps
 *
 * - ListInvocations
 *
 * - ListSessions
 */
export const putInvocationStep: API.OperationMethod<
  PutInvocationStepRequest,
  PutInvocationStepResponse,
  PutInvocationStepError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(349) as any as S.Schema<PutInvocationStepRequest>,
  output: __S(350) as any as S.Schema<PutInvocationStepResponse>,
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
  operationName: "PutInvocationStep",
}));

export type RerankError =
  | AccessDeniedException
  | BadGatewayException
  | ConflictException
  | DependencyFailedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Reranks the relevance of sources based on queries. For more information, see Improve the relevance of query responses with a reranker model.
 */
export const rerank: API.PaginatedOperationMethod<
  RerankRequest,
  RerankResponse,
  RerankError,
  Credentials | HttpClient.HttpClient,
  RerankResult
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(359) as any as S.Schema<RerankRequest>,
  output: __S(362) as any as S.Schema<RerankResponse>,
  errors: [
    AccessDeniedException,
    BadGatewayException,
    ConflictException,
    DependencyFailedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "Rerank",
  pagination: { inputToken: "nextToken", outputToken: "nextToken", items: "results" } as const,
})) as any;

export type RetrieveError =
  | AccessDeniedException
  | BadGatewayException
  | ConflictException
  | DependencyFailedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Queries a knowledge base and retrieves information from it.
 */
export const retrieve: API.PaginatedOperationMethod<
  RetrieveRequest,
  RetrieveResponse,
  RetrieveError,
  Credentials | HttpClient.HttpClient,
  KnowledgeBaseRetrievalResult
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(366) as any as S.Schema<RetrieveRequest>,
  output: __S(369) as any as S.Schema<RetrieveResponse>,
  errors: [
    AccessDeniedException,
    BadGatewayException,
    ConflictException,
    DependencyFailedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "Retrieve",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "retrievalResults",
  } as const,
})) as any;

export type RetrieveAndGenerateError =
  | AccessDeniedException
  | BadGatewayException
  | ConflictException
  | DependencyFailedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Queries a knowledge base and generates responses based on the retrieved results and using the specified foundation model or inference profile. The response only cites sources that are relevant to the query.
 *
 * This API cannot be used with managed knowledge bases. Use AgenticRetrieveStream or Retrieve with managed knowledge bases.
 */
export const retrieveAndGenerate: API.OperationMethod<
  RetrieveAndGenerateRequest,
  RetrieveAndGenerateResponse,
  RetrieveAndGenerateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(385) as any as S.Schema<RetrieveAndGenerateRequest>,
  output: __S(386) as any as S.Schema<RetrieveAndGenerateResponse>,
  errors: [
    AccessDeniedException,
    BadGatewayException,
    ConflictException,
    DependencyFailedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RetrieveAndGenerate",
}));

export type RetrieveAndGenerateStreamError =
  | AccessDeniedException
  | BadGatewayException
  | ConflictException
  | DependencyFailedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Queries a knowledge base and generates responses based on the retrieved results, with output in streaming format.
 *
 * This API cannot be used with managed knowledge bases. Use AgenticRetrieveStream or Retrieve with managed knowledge bases.
 *
 * The CLI doesn't support streaming operations in Amazon Bedrock, including `InvokeModelWithResponseStream`.
 *
 * This operation requires permission for the ` bedrock:RetrieveAndGenerate` action.
 */
export const retrieveAndGenerateStream: API.OperationMethod<
  RetrieveAndGenerateStreamRequest,
  RetrieveAndGenerateStreamResponse,
  RetrieveAndGenerateStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(387) as any as S.Schema<RetrieveAndGenerateStreamRequest>,
  output: __S(391) as any as S.Schema<RetrieveAndGenerateStreamResponse>,
  errors: [
    AccessDeniedException,
    BadGatewayException,
    ConflictException,
    DependencyFailedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RetrieveAndGenerateStream",
}));

export type StartFlowExecutionError =
  | AccessDeniedException
  | BadGatewayException
  | ConflictException
  | DependencyFailedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts an execution of an Amazon Bedrock flow. Unlike flows that run until completion or time out after five minutes, flow executions let you run flows asynchronously for longer durations. Flow executions also yield control so that your application can perform other tasks.
 *
 * This operation returns an Amazon Resource Name (ARN) that you can use to track and manage your flow execution.
 *
 * Flow executions is in preview release for Amazon Bedrock and is subject to change.
 */
export const startFlowExecution: API.OperationMethod<
  StartFlowExecutionRequest,
  StartFlowExecutionResponse,
  StartFlowExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(392) as any as S.Schema<StartFlowExecutionRequest>,
  output: __S(393) as any as S.Schema<StartFlowExecutionResponse>,
  errors: [
    AccessDeniedException,
    BadGatewayException,
    ConflictException,
    DependencyFailedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartFlowExecution",
}));

export type StopFlowExecutionError =
  | AccessDeniedException
  | BadGatewayException
  | ConflictException
  | DependencyFailedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Stops an Amazon Bedrock flow's execution. This operation prevents further processing of the flow and changes the execution status to `Aborted`.
 */
export const stopFlowExecution: API.OperationMethod<
  StopFlowExecutionRequest,
  StopFlowExecutionResponse,
  StopFlowExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(394) as any as S.Schema<StopFlowExecutionRequest>,
  output: __S(395) as any as S.Schema<StopFlowExecutionResponse>,
  errors: [
    AccessDeniedException,
    BadGatewayException,
    ConflictException,
    DependencyFailedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopFlowExecution",
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
  input: __S(396) as any as S.Schema<TagResourceRequest>,
  output: __S(73) as any as S.Schema<TagResourceResponse>,
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
  input: __S(397) as any as S.Schema<UntagResourceRequest>,
  output: __S(73) as any as S.Schema<UntagResourceResponse>,
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

export type UpdateSessionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the metadata or encryption settings of a session. For more information about sessions, see Store and retrieve conversation history and context with Amazon Bedrock sessions.
 */
export const updateSession: API.OperationMethod<
  UpdateSessionRequest,
  UpdateSessionResponse,
  UpdateSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(398) as any as S.Schema<UpdateSessionRequest>,
  output: __S(337) as any as S.Schema<UpdateSessionResponse>,
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
  operationName: "UpdateSession",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ text: S.optional(S.String) })).annotate({
        identifier: "AgenticRetrieveMessageContent",
      });
    case 1:
      return S.suspend(() => S.Struct({ content: __S(0), role: S.String })).annotate({
        identifier: "AgenticRetrieveMessage",
      });
    case 2:
      return S.Array(__S(1));
    case 3:
      return S.suspend(() => S.Struct({ key: S.String, value: S.Any })).annotate({
        identifier: "FilterAttribute",
      });
    case 4:
      return S.Array(
        /*@__PURE__*/ S.suspend(() => __S(5)).annotate({ identifier: "RetrievalFilter" }),
      );
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ equals: __S(3) }),
        /*@__PURE__*/ S.Struct({ notEquals: __S(3) }),
        /*@__PURE__*/ S.Struct({ greaterThan: __S(3) }),
        /*@__PURE__*/ S.Struct({ greaterThanOrEquals: __S(3) }),
        /*@__PURE__*/ S.Struct({ lessThan: __S(3) }),
        /*@__PURE__*/ S.Struct({ lessThanOrEquals: __S(3) }),
        /*@__PURE__*/ S.Struct({ in: __S(3) }),
        /*@__PURE__*/ S.Struct({ notIn: __S(3) }),
        /*@__PURE__*/ S.Struct({ startsWith: __S(3) }),
        /*@__PURE__*/ S.Struct({ listContains: __S(3) }),
        /*@__PURE__*/ S.Struct({ stringContains: __S(3) }),
        /*@__PURE__*/ S.Struct({
          andAll: /*@__PURE__*/ S.suspend(() => __S(4)).annotate({
            identifier: "RetrievalFilterList",
          }),
        }),
        /*@__PURE__*/ S.Struct({
          orAll: /*@__PURE__*/ S.suspend(() => __S(4)).annotate({
            identifier: "RetrievalFilterList",
          }),
        }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({ filter: S.optional(__S(5)), maxNumberOfResults: S.optional(S.Number) }),
      ).annotate({ identifier: "RetrievalOverrides" });
    case 7:
      return S.suspend(() =>
        S.Struct({ knowledgeBaseId: S.String, retrievalOverrides: S.optional(__S(6)) }),
      ).annotate({
        identifier: "KnowledgeBaseRetrieverConfiguration",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ knowledgeBase: __S(7) })]);
    case 1:
      return S.suspend(() =>
        S.Struct({ description: S.optional(S.String), configuration: __S(8) }),
      ).annotate({ identifier: "AgenticRetriever" });
    case 2:
      return S.Array(__S(9));
    case 3:
      return S.suspend(() => S.Struct({ modelArn: S.String })).annotate({
        identifier: "BedrockFoundationModelModelConfiguration",
      });
    case 4:
      return S.suspend(() => S.Struct({ modelConfiguration: __S(11) })).annotate({
        identifier: "BedrockFoundationModelConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ modelArn: S.String, projectId: S.optional(S.String) }),
      ).annotate({
        identifier: "MantleFoundationModelModelConfiguration",
      });
    case 6:
      return S.suspend(() => S.Struct({ modelConfiguration: __S(13) })).annotate({
        identifier: "MantleFoundationModelConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          bedrockFoundationModelConfiguration: S.optional(__S(12)),
          mantleFoundationModelConfiguration: S.optional(__S(14)),
        }),
      ).annotate({
        identifier: "FoundationModelConfiguration",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          bedrockRerankingConfiguration: S.optional(__S(12)),
        }),
      ).annotate({
        identifier: "AgenticRetrieveRerankingConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          foundationModelType: S.optional(S.String),
          foundationModelConfiguration: S.optional(__S(15)),
          rerankingModelType: S.optional(S.String),
          rerankingConfiguration: S.optional(__S(16)),
          maxAgentIteration: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AgenticRetrieveConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ guardrailId: S.String, guardrailVersion: S.String }),
      ).annotate({
        identifier: "AgenticRetrieveBedrockGuardrailConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          bedrockGuardrailConfiguration: S.optional(__S(18)),
        }),
      ).annotate({
        identifier: "AgenticRetrievePolicyConfiguration",
      });
    case 4:
      return S.suspend(() => S.Struct({ userId: S.String })).annotate({
        identifier: "UserContext",
      });
    case 5:
      return S.suspend(() => S.Struct({ actorId: S.String, sessionId: S.String })).annotate({
        identifier: "AgenticRetrieveMemorySessionBinding",
      });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ metadataKey: S.String })]);
    case 7:
      return S.Array(S.String);
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ stringValue: S.String }),
        /*@__PURE__*/ S.Struct({ numberValue: S.Number }),
        /*@__PURE__*/ S.Struct({ stringListValue: __S(23) }),
        /*@__PURE__*/ S.Struct({
          dateTimeValue: /*@__PURE__*/ S.Date.pipe(
            /*@__PURE__*/ T.TimestampFormat("epoch-seconds"),
          ),
        }),
      ]);
    case 1:
      return S.Union([/*@__PURE__*/ S.Struct({ metadataValue: __S(24) })]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          left: __S(22),
          operator: S.String,
          right: S.optional(__S(25)),
        }),
      ).annotate({
        identifier: "AgenticRetrieveMemoryMetadataFilter",
      });
    case 3:
      return S.Array(__S(26));
    case 4:
      return S.suspend(() =>
        S.Struct({
          namespace: S.optional(S.String),
          namespacePath: S.optional(S.String),
          strategyId: S.optional(S.String),
          metadataFilters: S.optional(__S(27)),
        }),
      ).annotate({
        identifier: "AgenticRetrieveMemoryRetrievalConfig",
      });
    case 5:
      return S.Array(__S(28));
    case 6:
      return S.suspend(() =>
        S.Struct({
          memoryId: S.String,
          sessionBinding: S.optional(__S(21)),
          retrievalConfigs: S.optional(__S(29)),
          persistenceMode: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AgenticRetrieveMemoryConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          messages: __S(2),
          retrievers: __S(10),
          agenticRetrieveConfiguration: __S(17),
          policyConfiguration: S.optional(__S(19)),
          nextToken: S.optional(S.String),
          userContext: S.optional(__S(20)),
          memoryConfiguration: S.optional(__S(30)),
          generateResponse: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/agenticRetrieveStream" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AgenticRetrieveStreamRequest",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          byteContent: S.optional(T.Blob),
          text: S.optional(S.String),
          mimeType: S.String,
        }),
      ).annotate({ identifier: "RetrievalContent" });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.Any.pipe(S.optional));
    case 2:
      return S.suspend(() => S.Struct({ identifier: S.String })).annotate({
        identifier: "AgenticRetrieveSourceRetriever",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          content: __S(32),
          metadata: S.optional(__S(33)),
          sourceRetriever: __S(34),
        }),
      ).annotate({
        identifier: "AgenticRetrieveResultItem",
      });
    case 4:
      return S.Array(__S(35));
    case 5:
      return S.suspend(() => S.Struct({ resultIndex: S.Number })).annotate({
        identifier: "AgenticRetrieveCitationReference",
      });
    case 6:
      return S.Array(__S(37));
    case 7:
      return S.suspend(() =>
        S.Struct({
          startIndex: S.Number,
          endIndex: S.Number,
          references: __S(38),
        }),
      ).annotate({ identifier: "AgenticRetrieveCitation" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(39));
    case 1:
      return S.suspend(() =>
        S.Struct({ answer: S.String, citations: S.optional(__S(40)) }),
      ).annotate({
        identifier: "AgenticRetrieveGeneratedResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          results: __S(36),
          generatedResponse: S.optional(__S(41)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AgenticRetrieveResultEvent",
      });
    case 3:
      return S.Array(__S(34));
    case 4:
      return S.suspend(() =>
        S.Struct({
          inputQuery: __S(0),
          sourceRetrievers: __S(43),
        }),
      ).annotate({
        identifier: "AgenticRetrieveActionDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          documentId: S.optional(S.String),
          sourceRetriever: S.optional(__S(34)),
        }),
      ).annotate({
        identifier: "AgenticRetrieveFullDocExpansionDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          inputQuery: __S(0),
          memoryId: S.String,
          namespace: S.optional(S.String),
          namespacePath: S.optional(S.String),
          strategyId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AgenticRetrieveMemoryRetrieveDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          retrieve: S.optional(__S(44)),
          fullDocumentExpansion: S.optional(__S(45)),
          memoryRetrieve: S.optional(__S(46)),
        }),
      ).annotate({ identifier: "AgenticRetrieveAction" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(47));
    case 1:
      return S.suspend(() => S.Struct({ message: S.String })).annotate({
        identifier: "AgenticRetrieveWarningMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          version: S.String,
          action: S.String,
          message: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AgenticRetrieveGuardrailWarning",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ message: __S(49) }),
        /*@__PURE__*/ S.Struct({ guardrail: __S(50) }),
      ]);
    case 4:
      return S.Array(__S(51));
    case 5:
      return S.suspend(() => S.Struct({ message: S.String })).annotate({
        identifier: "AgenticRetrieveFailure",
      });
    case 6:
      return S.Array(__S(53));
    case 7:
      return S.suspend(() =>
        S.Struct({
          identifier: S.optional(S.String),
          retrievalType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AgenticRetrieveSourceMetadata",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(55));
    case 1:
      return S.suspend(() =>
        S.Struct({
          content: S.optional(__S(32)),
          metadata: S.optional(__S(33)),
          sourceRetriever: S.optional(__S(34)),
        }),
      ).annotate({
        identifier: "AgenticRetrieveTraceResultItem",
      });
    case 2:
      return S.Array(__S(57));
    case 3:
      return S.suspend(() =>
        S.Struct({
          step: S.String,
          status: S.String,
          message: S.String,
          actions: S.optional(__S(48)),
          warnings: S.optional(__S(52)),
          failures: S.optional(__S(54)),
          retrievalMetadata: S.optional(__S(56)),
          retrievalResponse: S.optional(__S(58)),
        }),
      ).annotate({
        identifier: "AgenticRetrieveTraceEventAttributes",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          timestamp: S.Number,
          attributes: __S(59),
        }),
      ).annotate({
        identifier: "AgenticRetrieveTraceEvent",
      });
    case 5:
      return S.suspend(() => S.Struct({ text: S.String })).annotate({
        identifier: "AgenticRetrieveResponseEvent",
      });
    case 6:
      return T.EventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ result: __S(42) }),
          /*@__PURE__*/ S.Struct({ traceEvent: __S(60) }),
          /*@__PURE__*/ S.Struct({ responseEvent: __S(61) }),
          /*@__PURE__*/ S.Struct({
            internalServerException: /*@__PURE__*/ S.suspend(
              () => InternalServerException,
            ).annotate({
              identifier: "InternalServerException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            validationException: /*@__PURE__*/ S.suspend(() => ValidationException).annotate({
              identifier: "ValidationException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            resourceNotFoundException: /*@__PURE__*/ S.suspend(
              () => ResourceNotFoundException,
            ).annotate({
              identifier: "ResourceNotFoundException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            serviceQuotaExceededException: /*@__PURE__*/ S.suspend(
              () => ServiceQuotaExceededException,
            ).annotate({
              identifier: "ServiceQuotaExceededException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            throttlingException: /*@__PURE__*/ S.suspend(() => ThrottlingException).annotate({
              identifier: "ThrottlingException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            accessDeniedException: /*@__PURE__*/ S.suspend(() => AccessDeniedException).annotate({
              identifier: "AccessDeniedException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            conflictException: /*@__PURE__*/ S.suspend(() => ConflictException).annotate({
              identifier: "ConflictException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            dependencyFailedException: /*@__PURE__*/ S.suspend(
              () => DependencyFailedException,
            ).annotate({
              identifier: "DependencyFailedException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            badGatewayException: /*@__PURE__*/ S.suspend(() => BadGatewayException).annotate({
              identifier: "BadGatewayException",
            }),
          }),
        ]),
      );
    case 7:
      return S.suspend(() => S.Struct({ stream: __S(62).pipe(T.HttpPayload()) })).annotate({
        identifier: "AgenticRetrieveStreamResponse",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
          dataSourceId: S.String.pipe(T.HttpLabel("dataSourceId")),
          documentId: S.String,
          userContext: __S(20),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/check-ingested-document-acl",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CheckIngestedDocumentAclRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ hasAccess: S.Boolean })).annotate({
        identifier: "CheckIngestedDocumentAclResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          invocationId: S.optional(S.String),
          description: S.optional(S.String),
          sessionIdentifier: S.String.pipe(T.HttpLabel("sessionIdentifier")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/sessions/{sessionIdentifier}/invocations/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateInvocationRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.String,
          invocationId: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "CreateInvocationResponse" });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 5:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          sessionMetadata: S.optional(__S(68)),
          encryptionKeyArn: S.optional(S.String),
          tags: S.optional(__S(69)),
        }).pipe(T.all(T.Http({ method: "PUT", uri: "/sessions/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateSessionRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.String,
          sessionArn: S.String,
          sessionStatus: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "CreateSessionResponse" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          agentAliasId: S.String.pipe(T.HttpLabel("agentAliasId")),
          memoryId: S.optional(S.String).pipe(T.HttpQuery("memoryId")),
          sessionId: S.optional(S.String).pipe(T.HttpQuery("sessionId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/agents/{agentId}/agentAliases/{agentAliasId}/memories",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteAgentMemoryRequest" });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteAgentMemoryResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ sessionIdentifier: S.String.pipe(T.HttpLabel("sessionIdentifier")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/sessions/{sessionIdentifier}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteSessionRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ sessionIdentifier: S.String.pipe(T.HttpLabel("sessionIdentifier")) }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/sessions/{sessionIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "EndSessionRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ sessionId: S.String, sessionArn: S.String, sessionStatus: S.String }),
      ).annotate({ identifier: "EndSessionResponse" });
    case 5:
      return S.suspend(() => S.Struct({ type: S.String, text: S.String })).annotate({
        identifier: "QueryGenerationInput",
      });
    case 6:
      return S.suspend(() => S.Struct({ knowledgeBaseArn: S.String })).annotate({
        identifier: "TextToSqlKnowledgeBaseConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          knowledgeBaseConfiguration: S.optional(__S(78)),
        }),
      ).annotate({ identifier: "TextToSqlConfiguration" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          mode: S.String,
          textToSqlConfiguration: S.optional(__S(79)),
        }),
      ).annotate({
        identifier: "TransformationConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          queryGenerationInput: __S(77),
          transformationConfiguration: __S(80),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/generateQuery" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GenerateQueryRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ type: S.optional(S.String), sql: S.optional(S.String) }),
      ).annotate({ identifier: "GeneratedQuery" });
    case 3:
      return S.Array(__S(82));
    case 4:
      return S.suspend(() => S.Struct({ queries: S.optional(__S(83)) })).annotate({
        identifier: "GenerateQueryResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxItems: S.optional(S.Number).pipe(T.HttpQuery("maxItems")),
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          agentAliasId: S.String.pipe(T.HttpLabel("agentAliasId")),
          memoryType: S.String.pipe(T.HttpQuery("memoryType")),
          memoryId: S.String.pipe(T.HttpQuery("memoryId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/agents/{agentId}/agentAliases/{agentAliasId}/memories",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetAgentMemoryRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          memoryId: S.optional(S.String),
          sessionId: S.optional(S.String),
          sessionStartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          sessionExpiryTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          summaryText: S.optional(S.String),
        }),
      ).annotate({ identifier: "MemorySessionSummary" });
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ sessionSummary: __S(86) })]);
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(87));
    case 1:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), memoryContents: S.optional(__S(88)) }),
      ).annotate({ identifier: "GetAgentMemoryResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
          dataSourceId: S.String.pipe(T.HttpLabel("dataSourceId")),
          documentId: S.String.pipe(T.HttpLabel("documentId")),
          outputFormat: S.optional(S.String),
          userContext: S.optional(__S(20)),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/documents/{documentId}/content",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDocumentContentRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          mimeType: S.String,
          presignedUrl: SensitiveString,
          documentContentLength: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "GetDocumentContentResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          flowIdentifier: S.String.pipe(T.HttpLabel("flowIdentifier")),
          flowAliasIdentifier: S.String.pipe(T.HttpLabel("flowAliasIdentifier")),
          executionIdentifier: S.String.pipe(T.HttpLabel("executionIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/flows/{flowIdentifier}/aliases/{flowAliasIdentifier}/executions/{executionIdentifier}/flowsnapshot",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetExecutionFlowSnapshotRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          flowIdentifier: S.String,
          flowAliasIdentifier: S.String,
          flowVersion: S.String,
          executionRoleArn: S.String,
          definition: S.String,
          customerEncryptionKeyArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetExecutionFlowSnapshotResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          flowIdentifier: S.String.pipe(T.HttpLabel("flowIdentifier")),
          flowAliasIdentifier: S.String.pipe(T.HttpLabel("flowAliasIdentifier")),
          executionIdentifier: S.String.pipe(T.HttpLabel("executionIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/flows/{flowIdentifier}/aliases/{flowAliasIdentifier}/executions/{executionIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetFlowExecutionRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          nodeName: S.optional(S.String),
          error: S.optional(S.String),
          message: S.optional(S.String),
        }),
      ).annotate({ identifier: "FlowExecutionError" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(95));
    case 1:
      return S.suspend(() =>
        S.Struct({
          executionArn: S.String,
          status: S.String,
          startedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          endedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          errors: S.optional(__S(96)),
          flowAliasIdentifier: S.String,
          flowIdentifier: S.String,
          flowVersion: S.String,
        }),
      ).annotate({ identifier: "GetFlowExecutionResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
          dataSourceId: S.String.pipe(T.HttpLabel("dataSourceId")),
          documentId: S.String,
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/get-ingested-document-acl",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetIngestedDocumentAclRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ id: S.String, type: S.String })).annotate({
        identifier: "DocumentAclUser",
      });
    case 4:
      return S.Array(__S(99));
    case 5:
      return S.suspend(() =>
        S.Struct({
          conditionOperator: S.optional(S.String),
          users: S.optional(__S(100)),
          groups: S.optional(__S(100)),
        }),
      ).annotate({ identifier: "DocumentAclCondition" });
    case 6:
      return S.Array(__S(101));
    case 7:
      return S.suspend(() =>
        S.Struct({
          memberRelation: S.optional(S.String),
          conditions: S.optional(__S(102)),
        }),
      ).annotate({ identifier: "DocumentAclMembership" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          allowList: S.optional(__S(103)),
          denyList: S.optional(__S(103)),
        }),
      ).annotate({ identifier: "DocumentAcl" });
    case 1:
      return S.suspend(() => S.Struct({ documentAcl: __S(104) })).annotate({
        identifier: "GetIngestedDocumentAclResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          invocationIdentifier: S.String,
          invocationStepId: S.String.pipe(T.HttpLabel("invocationStepId")),
          sessionIdentifier: S.String.pipe(T.HttpLabel("sessionIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/sessions/{sessionIdentifier}/invocationSteps/{invocationStepId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetInvocationStepRequest" });
    case 3:
      return S.suspend(() => S.Struct({ uri: S.String })).annotate({
        identifier: "S3Location",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ bytes: T.Blob }),
        /*@__PURE__*/ S.Struct({ s3Location: __S(107) }),
      ]);
    case 5:
      return S.suspend(() => S.Struct({ format: S.String, source: __S(108) })).annotate({
        identifier: "ImageBlock",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ text: S.String }),
        /*@__PURE__*/ S.Struct({ image: __S(109) }),
      ]);
    case 7:
      return S.Array(__S(110));
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ contentBlocks: __S(111) })]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.String,
          invocationId: S.String,
          invocationStepId: S.String,
          invocationStepTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          payload: __S(112),
        }),
      ).annotate({ identifier: "InvocationStep" });
    case 2:
      return S.suspend(() => S.Struct({ invocationStep: __S(113) })).annotate({
        identifier: "GetInvocationStepResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ sessionIdentifier: S.String.pipe(T.HttpLabel("sessionIdentifier")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/sessions/{sessionIdentifier}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetSessionRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.String,
          sessionArn: S.String,
          sessionStatus: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          sessionMetadata: S.optional(__S(68)),
          encryptionKeyArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetSessionResponse" });
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ bytes: T.Blob })]);
    case 6:
      return S.suspend(() => S.Struct({ format: S.String, source: __S(117) })).annotate({
        identifier: "ImageInput",
      });
    case 7:
      return S.Array(__S(118));
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ body: S.optional(S.String), images: S.optional(__S(119)) }),
      ).annotate({ identifier: "ContentBody" });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ __S(120).pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          actionGroup: S.String,
          httpMethod: S.optional(S.String),
          apiPath: S.optional(SensitiveString),
          confirmationState: S.optional(S.String),
          responseState: S.optional(S.String),
          httpStatusCode: S.optional(S.Number),
          responseBody: S.optional(__S(121)),
          agentId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ApiResult" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          actionGroup: S.String,
          confirmationState: S.optional(S.String),
          function: S.optional(S.String),
          responseBody: S.optional(__S(121)),
          responseState: S.optional(S.String),
          agentId: S.optional(S.String),
        }),
      ).annotate({ identifier: "FunctionResult" });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ apiResult: __S(122) }),
        /*@__PURE__*/ S.Struct({ functionResult: __S(123) }),
      ]);
    case 5:
      return S.Array(__S(124));
    case 6:
      return S.suspend(() => S.Struct({ mediaType: S.String, data: SensitiveBlob })).annotate({
        identifier: "ByteContentFile",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          sourceType: S.String,
          s3Location: S.optional(__S(107)),
          byteContent: S.optional(__S(126)),
        }),
      ).annotate({ identifier: "FileSource" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ name: S.String, source: __S(127), useCase: S.String }),
      ).annotate({ identifier: "InputFile" });
    case 1:
      return S.Array(__S(128));
    case 2:
      return S.suspend(() =>
        S.Struct({
          modelArn: S.String,
          additionalModelRequestFields: S.optional(__S(33)),
        }),
      ).annotate({
        identifier: "VectorSearchBedrockRerankingModelConfiguration",
      });
    case 3:
      return S.suspend(() => S.Struct({ fieldName: S.String })).annotate({
        identifier: "FieldForReranking",
      });
    case 4:
      return S.Array(__S(131));
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ fieldsToInclude: __S(132) }),
        /*@__PURE__*/ S.Struct({ fieldsToExclude: __S(132) }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          selectionMode: S.String,
          selectiveModeConfiguration: S.optional(__S(133)),
        }),
      ).annotate({
        identifier: "MetadataConfigurationForReranking",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          modelConfiguration: __S(130),
          numberOfRerankedResults: S.optional(S.Number),
          metadataConfiguration: S.optional(__S(134)),
        }),
      ).annotate({
        identifier: "VectorSearchBedrockRerankingConfiguration",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          bedrockRerankingConfiguration: S.optional(__S(135)),
        }),
      ).annotate({
        identifier: "VectorSearchRerankingConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ key: S.String, type: S.String, description: S.String }),
      ).annotate({ identifier: "MetadataAttributeSchema" });
    case 2:
      return S.Array(__S(137));
    case 3:
      return S.suspend(() =>
        S.Struct({ metadataAttributes: __S(138), modelArn: S.String }),
      ).annotate({
        identifier: "ImplicitFilterConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          numberOfResults: S.optional(S.Number),
          overrideSearchType: S.optional(S.String),
          filter: S.optional(__S(5)),
          rerankingConfiguration: S.optional(__S(136)),
          implicitFilterConfiguration: S.optional(__S(139)),
        }),
      ).annotate({
        identifier: "KnowledgeBaseVectorSearchConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          bedrockRerankingConfiguration: S.optional(__S(135)),
        }),
      ).annotate({
        identifier: "ManagedSearchRerankingConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          numberOfResults: S.optional(S.Number),
          filter: S.optional(__S(5)),
          rerankingModelType: S.optional(S.String),
          rerankingConfiguration: S.optional(__S(141)),
        }),
      ).annotate({
        identifier: "ManagedSearchConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          vectorSearchConfiguration: S.optional(__S(140)),
          managedSearchConfiguration: S.optional(__S(142)),
        }),
      ).annotate({
        identifier: "KnowledgeBaseRetrievalConfiguration",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String,
          retrievalConfiguration: __S(143),
        }),
      ).annotate({
        identifier: "KnowledgeBaseConfiguration",
      });
    case 1:
      return S.Array(__S(144));
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ text: S.String })]);
    case 3:
      return S.Array(__S(146));
    case 4:
      return S.suspend(() => S.Struct({ role: S.String, content: __S(147) })).annotate({
        identifier: "Message",
      });
    case 5:
      return S.Array(__S(148));
    case 6:
      return S.suspend(() => S.Struct({ messages: S.optional(__S(149)) })).annotate({
        identifier: "ConversationHistory",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          sessionAttributes: S.optional(__S(68)),
          promptSessionAttributes: S.optional(__S(68)),
          returnControlInvocationResults: S.optional(__S(125)),
          invocationId: S.optional(S.String),
          files: S.optional(__S(129)),
          knowledgeBaseConfigurations: S.optional(__S(145)),
          conversationHistory: S.optional(__S(150)),
        }),
      ).annotate({ identifier: "SessionState" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ latency: S.optional(S.String) })).annotate({
        identifier: "PerformanceConfiguration",
      });
    case 1:
      return S.suspend(() => S.Struct({ performanceConfig: S.optional(__S(152)) })).annotate({
        identifier: "BedrockModelConfigurations",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          streamFinalResponse: S.optional(S.Boolean),
          applyGuardrailInterval: S.optional(S.Number),
        }),
      ).annotate({ identifier: "StreamingConfigurations" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          previousConversationTurnsToInclude: S.optional(S.Number),
          excludePreviousThinkingSteps: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "PromptCreationConfigurations",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          sessionState: S.optional(__S(151)),
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          agentAliasId: S.String.pipe(T.HttpLabel("agentAliasId")),
          sessionId: S.String.pipe(T.HttpLabel("sessionId")),
          endSession: S.optional(S.Boolean),
          enableTrace: S.optional(S.Boolean),
          inputText: S.optional(SensitiveString),
          memoryId: S.optional(S.String),
          bedrockModelConfigurations: S.optional(__S(153)),
          streamingConfigurations: S.optional(__S(154)),
          promptCreationConfigurations: S.optional(__S(155)),
          sourceArn: S.optional(S.String).pipe(T.HttpHeader("x-amz-source-arn")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/agents/{agentId}/agentAliases/{agentAliasId}/sessions/{sessionId}/text",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "InvokeAgentRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ start: S.optional(S.Number), end: S.optional(S.Number) }),
      ).annotate({ identifier: "Span" });
    case 6:
      return S.suspend(() =>
        S.Struct({ text: S.optional(S.String), span: S.optional(__S(157)) }),
      ).annotate({ identifier: "TextResponsePart" });
    case 7:
      return S.suspend(() => S.Struct({ textResponsePart: S.optional(__S(158)) })).annotate({
        identifier: "GeneratedResponsePart",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ s3Uri: S.String, summary: S.optional(S.String) })).annotate(
        { identifier: "VideoSegment" },
      );
    case 1:
      return S.suspend(() =>
        S.Struct({ s3Uri: S.String, transcription: S.optional(S.String) }),
      ).annotate({ identifier: "AudioSegment" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          columnName: S.optional(S.String),
          columnValue: S.optional(S.String),
          type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RetrievalResultContentColumn",
      });
    case 3:
      return S.Array(__S(162));
    case 4:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          text: S.optional(S.String),
          byteContent: S.optional(S.String),
          video: S.optional(__S(160)),
          audio: S.optional(__S(161)),
          row: S.optional(__S(163)),
        }),
      ).annotate({ identifier: "RetrievalResultContent" });
    case 5:
      return S.suspend(() => S.Struct({ uri: S.optional(S.String) })).annotate({
        identifier: "RetrievalResultS3Location",
      });
    case 6:
      return S.suspend(() => S.Struct({ url: S.optional(S.String) })).annotate({
        identifier: "RetrievalResultWebLocation",
      });
    case 7:
      return S.suspend(() => S.Struct({ id: S.optional(S.String) })).annotate({
        identifier: "RetrievalResultCustomDocumentLocation",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ query: S.optional(S.String) })).annotate({
        identifier: "RetrievalResultSqlLocation",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          s3Location: S.optional(__S(165)),
          webLocation: S.optional(__S(166)),
          confluenceLocation: S.optional(__S(166)),
          salesforceLocation: S.optional(__S(166)),
          sharePointLocation: S.optional(__S(166)),
          customDocumentLocation: S.optional(__S(167)),
          kendraDocumentLocation: S.optional(__S(165)),
          sqlLocation: S.optional(__S(168)),
          oneDriveLocation: S.optional(__S(166)),
          googleDriveLocation: S.optional(__S(166)),
        }),
      ).annotate({ identifier: "RetrievalResultLocation" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          content: S.optional(__S(164)),
          location: S.optional(__S(169)),
          metadata: S.optional(__S(33)),
        }),
      ).annotate({ identifier: "RetrievedReference" });
    case 3:
      return S.Array(__S(170));
    case 4:
      return S.suspend(() =>
        S.Struct({
          generatedResponsePart: S.optional(__S(159)),
          retrievedReferences: S.optional(__S(171)),
        }),
      ).annotate({ identifier: "Citation" });
    case 5:
      return S.Array(__S(172));
    case 6:
      return S.suspend(() => S.Struct({ citations: S.optional(__S(173)) })).annotate({
        identifier: "Attribution",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ bytes: S.optional(SensitiveBlob), attribution: S.optional(__S(174)) }),
      ).annotate({ identifier: "PayloadPart" });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          type: S.optional(S.String),
          action: S.optional(S.String),
        }),
      ).annotate({ identifier: "GuardrailTopic" });
    case 1:
      return S.Array(__S(176));
    case 2:
      return S.suspend(() => S.Struct({ topics: S.optional(__S(177)) })).annotate({
        identifier: "GuardrailTopicPolicyAssessment",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          confidence: S.optional(S.String),
          action: S.optional(S.String),
        }),
      ).annotate({ identifier: "GuardrailContentFilter" });
    case 4:
      return S.Array(__S(179));
    case 5:
      return S.suspend(() => S.Struct({ filters: S.optional(__S(180)) })).annotate({
        identifier: "GuardrailContentPolicyAssessment",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ match: S.optional(S.String), action: S.optional(S.String) }),
      ).annotate({ identifier: "GuardrailCustomWord" });
    case 7:
      return S.Array(__S(182));
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          match: S.optional(S.String),
          type: S.optional(S.String),
          action: S.optional(S.String),
        }),
      ).annotate({ identifier: "GuardrailManagedWord" });
    case 1:
      return S.Array(__S(184));
    case 2:
      return S.suspend(() =>
        S.Struct({
          customWords: S.optional(__S(183)),
          managedWordLists: S.optional(__S(185)),
        }),
      ).annotate({
        identifier: "GuardrailWordPolicyAssessment",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          match: S.optional(S.String),
          action: S.optional(S.String),
        }),
      ).annotate({ identifier: "GuardrailPiiEntityFilter" });
    case 4:
      return S.Array(__S(187));
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          regex: S.optional(S.String),
          match: S.optional(S.String),
          action: S.optional(S.String),
        }),
      ).annotate({ identifier: "GuardrailRegexFilter" });
    case 6:
      return S.Array(__S(189));
    case 7:
      return S.suspend(() =>
        S.Struct({
          piiEntities: S.optional(__S(188)),
          regexes: S.optional(__S(190)),
        }),
      ).annotate({
        identifier: "GuardrailSensitiveInformationPolicyAssessment",
      });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          topicPolicy: S.optional(__S(178)),
          contentPolicy: S.optional(__S(181)),
          wordPolicy: S.optional(__S(186)),
          sensitiveInformationPolicy: S.optional(__S(191)),
        }),
      ).annotate({ identifier: "GuardrailAssessment" });
    case 1:
      return S.Array(__S(192));
    case 2:
      return S.suspend(() =>
        S.Struct({ inputTokens: S.optional(S.Number), outputTokens: S.optional(S.Number) }),
      ).annotate({ identifier: "Usage" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          startTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          totalTimeMs: S.optional(S.Number),
          operationTotalTimeMs: S.optional(S.Number),
          clientRequestId: S.optional(S.String),
          usage: S.optional(__S(194)),
        }),
      ).annotate({ identifier: "Metadata" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          action: S.optional(S.String),
          traceId: S.optional(S.String),
          inputAssessments: S.optional(__S(193)),
          outputAssessments: S.optional(__S(193)),
          metadata: S.optional(__S(195)),
        }),
      ).annotate({ identifier: "GuardrailTrace" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          temperature: S.optional(S.Number),
          topP: S.optional(S.Number),
          topK: S.optional(S.Number),
          maximumLength: S.optional(S.Number),
          stopSequences: S.optional(__S(23)),
        }),
      ).annotate({ identifier: "InferenceConfiguration" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          traceId: S.optional(S.String),
          text: S.optional(SensitiveString),
          type: S.optional(S.String),
          overrideLambda: S.optional(S.String),
          promptCreationMode: S.optional(S.String),
          inferenceConfiguration: S.optional(__S(197)),
          parserMode: S.optional(S.String),
          foundationModel: S.optional(S.String),
        }),
      ).annotate({ identifier: "ModelInvocationInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({ rationale: S.optional(SensitiveString), isValid: S.optional(S.Boolean) }),
      ).annotate({
        identifier: "PreProcessingParsedResponse",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ content: S.optional(S.String) })).annotate({
        identifier: "RawResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ text: S.String, signature: S.optional(S.String) }),
      ).annotate({ identifier: "ReasoningTextBlock" });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ reasoningText: __S(201) }),
        /*@__PURE__*/ S.Struct({ redactedContent: T.Blob }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          traceId: S.optional(S.String),
          parsedResponse: S.optional(__S(199)),
          rawResponse: S.optional(__S(200)),
          metadata: S.optional(__S(195)),
          reasoningContent: S.optional(__S(202)),
        }),
      ).annotate({
        identifier: "PreProcessingModelInvocationOutput",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ modelInvocationInput: __S(198) }),
        /*@__PURE__*/ S.Struct({ modelInvocationOutput: __S(203) }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({ traceId: S.optional(S.String), text: S.optional(SensitiveString) }),
      ).annotate({ identifier: "Rationale" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          type: S.optional(S.String),
          value: S.optional(S.String),
        }),
      ).annotate({ identifier: "Parameter" });
    case 7:
      return S.Array(__S(206));
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ __S(207).pipe(S.optional));
    case 1:
      return S.suspend(() => S.Struct({ content: S.optional(__S(208)) })).annotate({
        identifier: "RequestBody",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          actionGroupName: S.optional(SensitiveString),
          verb: S.optional(SensitiveString),
          apiPath: S.optional(SensitiveString),
          parameters: S.optional(__S(207)),
          requestBody: S.optional(__S(209)),
          function: S.optional(SensitiveString),
          executionType: S.optional(S.String),
          invocationId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ActionGroupInvocationInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          text: S.optional(SensitiveString),
          knowledgeBaseId: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "KnowledgeBaseLookupInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({ code: S.optional(S.String), files: S.optional(__S(23)) }),
      ).annotate({
        identifier: "CodeInterpreterInvocationInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          invocationId: S.optional(S.String),
          returnControlInvocationResults: S.optional(__S(125)),
        }),
      ).annotate({ identifier: "ReturnControlResults" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          text: S.optional(SensitiveString),
          returnControlResults: S.optional(__S(213)),
        }),
      ).annotate({
        identifier: "AgentCollaboratorInputPayload",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          agentCollaboratorName: S.optional(S.String),
          agentCollaboratorAliasArn: S.optional(S.String),
          input: S.optional(__S(214)),
        }),
      ).annotate({
        identifier: "AgentCollaboratorInvocationInput",
      });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          traceId: S.optional(S.String),
          invocationType: S.optional(S.String),
          actionGroupInvocationInput: S.optional(__S(210)),
          knowledgeBaseLookupInput: S.optional(__S(211)),
          codeInterpreterInvocationInput: S.optional(__S(212)),
          agentCollaboratorInvocationInput: S.optional(__S(215)),
        }),
      ).annotate({ identifier: "InvocationInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ text: S.optional(SensitiveString), metadata: S.optional(__S(195)) }),
      ).annotate({
        identifier: "ActionGroupInvocationOutput",
      });
    case 2:
      return S.suspend(() => S.Struct({ properties: S.optional(__S(207)) })).annotate({
        identifier: "PropertyParameters",
      });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ __S(218).pipe(S.optional));
    case 4:
      return S.suspend(() => S.Struct({ content: S.optional(__S(219)) })).annotate({
        identifier: "ApiRequestBody",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          actionGroup: S.String,
          httpMethod: S.optional(S.String),
          apiPath: S.optional(SensitiveString),
          parameters: S.optional(__S(207)),
          requestBody: S.optional(__S(220)),
          actionInvocationType: S.optional(S.String),
          agentId: S.optional(S.String),
          collaboratorName: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "ApiInvocationInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          actionGroup: S.String,
          parameters: S.optional(__S(207)),
          function: S.optional(S.String),
          actionInvocationType: S.optional(S.String),
          agentId: S.optional(S.String),
          collaboratorName: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "FunctionInvocationInput" });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ apiInvocationInput: __S(221) }),
        /*@__PURE__*/ S.Struct({ functionInvocationInput: __S(222) }),
      ]);
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(223));
    case 1:
      return S.suspend(() =>
        S.Struct({
          invocationInputs: S.optional(__S(224)),
          invocationId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ReturnControlPayload" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          text: S.optional(SensitiveString),
          returnControlPayload: S.optional(__S(225)),
        }),
      ).annotate({
        identifier: "AgentCollaboratorOutputPayload",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          agentCollaboratorName: S.optional(S.String),
          agentCollaboratorAliasArn: S.optional(S.String),
          output: S.optional(__S(226)),
          metadata: S.optional(__S(195)),
        }),
      ).annotate({
        identifier: "AgentCollaboratorInvocationOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          retrievedReferences: S.optional(__S(171)),
          metadata: S.optional(__S(195)),
        }),
      ).annotate({
        identifier: "KnowledgeBaseLookupOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ text: S.optional(SensitiveString), metadata: S.optional(__S(195)) }),
      ).annotate({ identifier: "FinalResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ text: S.optional(S.String), source: S.optional(S.String) }),
      ).annotate({ identifier: "RepromptResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          executionOutput: S.optional(S.String),
          executionError: S.optional(S.String),
          files: S.optional(__S(23)),
          executionTimeout: S.optional(S.Boolean),
          metadata: S.optional(__S(195)),
        }),
      ).annotate({
        identifier: "CodeInterpreterInvocationOutput",
      });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          traceId: S.optional(S.String),
          type: S.optional(S.String),
          actionGroupInvocationOutput: S.optional(__S(217)),
          agentCollaboratorInvocationOutput: S.optional(__S(227)),
          knowledgeBaseLookupOutput: S.optional(__S(228)),
          finalResponse: S.optional(__S(229)),
          repromptResponse: S.optional(__S(230)),
          codeInterpreterInvocationOutput: S.optional(__S(231)),
        }),
      ).annotate({ identifier: "Observation" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          traceId: S.optional(S.String),
          rawResponse: S.optional(__S(200)),
          metadata: S.optional(__S(195)),
          reasoningContent: S.optional(__S(202)),
        }),
      ).annotate({
        identifier: "OrchestrationModelInvocationOutput",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ rationale: __S(205) }),
        /*@__PURE__*/ S.Struct({ invocationInput: __S(216) }),
        /*@__PURE__*/ S.Struct({ observation: __S(232) }),
        /*@__PURE__*/ S.Struct({ modelInvocationInput: __S(198) }),
        /*@__PURE__*/ S.Struct({ modelInvocationOutput: __S(233) }),
      ]);
    case 3:
      return S.suspend(() => S.Struct({ text: S.optional(SensitiveString) })).annotate({
        identifier: "PostProcessingParsedResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          traceId: S.optional(S.String),
          parsedResponse: S.optional(__S(235)),
          rawResponse: S.optional(__S(200)),
          metadata: S.optional(__S(195)),
          reasoningContent: S.optional(__S(202)),
        }),
      ).annotate({
        identifier: "PostProcessingModelInvocationOutput",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ modelInvocationInput: __S(198) }),
        /*@__PURE__*/ S.Struct({ modelInvocationOutput: __S(236) }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          traceId: S.optional(S.String),
          rawResponse: S.optional(__S(200)),
          metadata: S.optional(__S(195)),
        }),
      ).annotate({
        identifier: "RoutingClassifierModelInvocationOutput",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ invocationInput: __S(216) }),
        /*@__PURE__*/ S.Struct({ observation: __S(232) }),
        /*@__PURE__*/ S.Struct({ modelInvocationInput: __S(198) }),
        /*@__PURE__*/ S.Struct({ modelInvocationOutput: __S(238) }),
      ]);
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          traceId: S.optional(S.String),
          failureReason: S.optional(SensitiveString),
          failureCode: S.optional(S.Number),
          metadata: S.optional(__S(195)),
        }),
      ).annotate({ identifier: "FailureTrace" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          traceId: S.optional(S.String),
          event: S.optional(__S(0)),
        }),
      ).annotate({ identifier: "CustomOrchestrationTrace" });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ guardrailTrace: __S(196) }),
        /*@__PURE__*/ S.Struct({ preProcessingTrace: __S(204) }),
        /*@__PURE__*/ S.Struct({ orchestrationTrace: __S(234) }),
        /*@__PURE__*/ S.Struct({ postProcessingTrace: __S(237) }),
        /*@__PURE__*/ S.Struct({ routingClassifierTrace: __S(239) }),
        /*@__PURE__*/ S.Struct({ failureTrace: __S(240) }),
        /*@__PURE__*/ S.Struct({ customOrchestrationTrace: __S(241) }),
      ]);
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ agentAliasArn: S.String })]);
    case 4:
      return S.Array(__S(243));
    case 5:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.optional(S.String),
          trace: S.optional(__S(242)),
          callerChain: S.optional(__S(244)),
          eventTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          collaboratorName: S.optional(SensitiveString),
          agentId: S.optional(S.String),
          agentAliasId: S.optional(S.String),
          agentVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "TracePart" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          type: S.optional(S.String),
          bytes: S.optional(SensitiveBlob),
        }),
      ).annotate({ identifier: "OutputFile" });
    case 7:
      return S.Array(__S(246));
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ files: S.optional(__S(247)) })).annotate({
        identifier: "FilePart",
      });
    case 1:
      return T.EventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ chunk: __S(175) }),
          /*@__PURE__*/ S.Struct({ trace: __S(245) }),
          /*@__PURE__*/ S.Struct({ returnControl: __S(225) }),
          /*@__PURE__*/ S.Struct({
            internalServerException: /*@__PURE__*/ S.suspend(
              () => InternalServerException,
            ).annotate({
              identifier: "InternalServerException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            validationException: /*@__PURE__*/ S.suspend(() => ValidationException).annotate({
              identifier: "ValidationException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            resourceNotFoundException: /*@__PURE__*/ S.suspend(
              () => ResourceNotFoundException,
            ).annotate({
              identifier: "ResourceNotFoundException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            serviceQuotaExceededException: /*@__PURE__*/ S.suspend(
              () => ServiceQuotaExceededException,
            ).annotate({
              identifier: "ServiceQuotaExceededException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            throttlingException: /*@__PURE__*/ S.suspend(() => ThrottlingException).annotate({
              identifier: "ThrottlingException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            accessDeniedException: /*@__PURE__*/ S.suspend(() => AccessDeniedException).annotate({
              identifier: "AccessDeniedException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            conflictException: /*@__PURE__*/ S.suspend(() => ConflictException).annotate({
              identifier: "ConflictException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            dependencyFailedException: /*@__PURE__*/ S.suspend(
              () => DependencyFailedException,
            ).annotate({
              identifier: "DependencyFailedException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            badGatewayException: /*@__PURE__*/ S.suspend(() => BadGatewayException).annotate({
              identifier: "BadGatewayException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            modelNotReadyException: /*@__PURE__*/ S.suspend(() => ModelNotReadyException).annotate({
              identifier: "ModelNotReadyException",
            }),
          }),
          /*@__PURE__*/ S.Struct({ files: __S(248) }),
        ]),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          completion: __S(249).pipe(T.HttpPayload()),
          contentType: S.String.pipe(T.HttpHeader("x-amzn-bedrock-agent-content-type")),
          sessionId: S.String.pipe(T.HttpHeader("x-amz-bedrock-agent-session-id")),
          memoryId: S.optional(S.String).pipe(T.HttpHeader("x-amz-bedrock-agent-memory-id")),
        }),
      ).annotate({ identifier: "InvokeAgentResponse" });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ document: S.Any })]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          nodeName: S.String,
          nodeOutputName: S.optional(S.String),
          content: __S(251),
          nodeInputName: S.optional(S.String),
        }),
      ).annotate({ identifier: "FlowInput" });
    case 5:
      return S.Array(__S(252));
    case 6:
      return S.suspend(() =>
        S.Struct({
          flowIdentifier: S.String.pipe(T.HttpLabel("flowIdentifier")),
          flowAliasIdentifier: S.String.pipe(T.HttpLabel("flowAliasIdentifier")),
          inputs: __S(253),
          enableTrace: S.optional(S.Boolean),
          modelPerformanceConfiguration: S.optional(__S(153)),
          executionId: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/flows/{flowIdentifier}/aliases/{flowAliasIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "InvokeFlowRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ nodeName: S.String, nodeType: S.String, content: __S(251) }),
      ).annotate({ identifier: "FlowOutputEvent" });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ completionReason: S.String })).annotate({
        identifier: "FlowCompletionEvent",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ nodeName: S.String, outputFieldName: S.String, expression: SensitiveString }),
      ).annotate({ identifier: "FlowTraceNodeInputSource" });
    case 2:
      return S.suspend(() =>
        S.Struct({ nodeName: S.String, index: S.optional(S.Number), type: S.String }),
      ).annotate({
        identifier: "FlowTraceNodeInputExecutionChainItem",
      });
    case 3:
      return S.Array(__S(258));
    case 4:
      return S.suspend(() =>
        S.Struct({
          nodeInputName: S.String,
          content: __S(251),
          source: S.optional(__S(257)),
          type: S.optional(S.String),
          category: S.optional(S.String),
          executionChain: S.optional(__S(259)),
        }),
      ).annotate({ identifier: "FlowTraceNodeInputField" });
    case 5:
      return S.Array(__S(260));
    case 6:
      return S.suspend(() =>
        S.Struct({
          nodeName: S.String,
          timestamp: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          fields: __S(261),
        }),
      ).annotate({ identifier: "FlowTraceNodeInputEvent" });
    case 7:
      return S.suspend(() => S.Struct({ nodeName: S.String, inputFieldName: S.String })).annotate({
        identifier: "FlowTraceNodeOutputNext",
      });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(263));
    case 1:
      return S.suspend(() =>
        S.Struct({
          nodeOutputName: S.String,
          content: __S(251),
          next: S.optional(__S(264)),
          type: S.optional(S.String),
        }),
      ).annotate({ identifier: "FlowTraceNodeOutputField" });
    case 2:
      return S.Array(__S(265));
    case 3:
      return S.suspend(() =>
        S.Struct({
          nodeName: S.String,
          timestamp: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          fields: __S(266),
        }),
      ).annotate({ identifier: "FlowTraceNodeOutputEvent" });
    case 4:
      return S.suspend(() => S.Struct({ conditionName: S.String })).annotate({
        identifier: "FlowTraceCondition",
      });
    case 5:
      return S.Array(__S(268));
    case 6:
      return S.suspend(() =>
        S.Struct({
          nodeName: S.String,
          timestamp: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          satisfiedConditions: __S(269),
        }),
      ).annotate({
        identifier: "FlowTraceConditionNodeResultEvent",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          nodeName: S.String,
          timestamp: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          requestId: S.String,
          serviceName: S.String,
          operationName: S.String,
          operationRequest: S.optional(S.Any),
          operationResponse: S.optional(S.Any),
        }),
      ).annotate({ identifier: "FlowTraceNodeActionEvent" });
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(245));
    case 1:
      return S.Union([/*@__PURE__*/ S.Struct({ agentTraces: __S(272) })]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          nodeName: S.String,
          timestamp: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          traceElements: __S(273),
        }),
      ).annotate({ identifier: "FlowTraceDependencyEvent" });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ nodeInputTrace: __S(262) }),
        /*@__PURE__*/ S.Struct({ nodeOutputTrace: __S(267) }),
        /*@__PURE__*/ S.Struct({ conditionNodeResultTrace: __S(270) }),
        /*@__PURE__*/ S.Struct({ nodeActionTrace: __S(271) }),
        /*@__PURE__*/ S.Struct({ nodeDependencyTrace: __S(274) }),
      ]);
    case 4:
      return S.suspend(() => S.Struct({ trace: __S(275) })).annotate({
        identifier: "FlowTraceEvent",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ nodeName: S.String, nodeType: S.String, content: __S(251) }),
      ).annotate({
        identifier: "FlowMultiTurnInputRequestEvent",
      });
    case 6:
      return T.EventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ flowOutputEvent: __S(255) }),
          /*@__PURE__*/ S.Struct({ flowCompletionEvent: __S(256) }),
          /*@__PURE__*/ S.Struct({ flowTraceEvent: __S(276) }),
          /*@__PURE__*/ S.Struct({
            internalServerException: /*@__PURE__*/ S.suspend(
              () => InternalServerException,
            ).annotate({
              identifier: "InternalServerException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            validationException: /*@__PURE__*/ S.suspend(() => ValidationException).annotate({
              identifier: "ValidationException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            resourceNotFoundException: /*@__PURE__*/ S.suspend(
              () => ResourceNotFoundException,
            ).annotate({
              identifier: "ResourceNotFoundException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            serviceQuotaExceededException: /*@__PURE__*/ S.suspend(
              () => ServiceQuotaExceededException,
            ).annotate({
              identifier: "ServiceQuotaExceededException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            throttlingException: /*@__PURE__*/ S.suspend(() => ThrottlingException).annotate({
              identifier: "ThrottlingException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            accessDeniedException: /*@__PURE__*/ S.suspend(() => AccessDeniedException).annotate({
              identifier: "AccessDeniedException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            conflictException: /*@__PURE__*/ S.suspend(() => ConflictException).annotate({
              identifier: "ConflictException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            dependencyFailedException: /*@__PURE__*/ S.suspend(
              () => DependencyFailedException,
            ).annotate({
              identifier: "DependencyFailedException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            badGatewayException: /*@__PURE__*/ S.suspend(() => BadGatewayException).annotate({
              identifier: "BadGatewayException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            flowMultiTurnInputRequestEvent: __S(277),
          }),
        ]),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          responseStream: __S(278).pipe(T.HttpPayload()),
          executionId: S.optional(S.String).pipe(T.HttpHeader("x-amz-bedrock-flow-execution-id")),
        }),
      ).annotate({ identifier: "InvokeFlowResponse" });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ lambda: S.String }),
        /*@__PURE__*/ S.Struct({ customControl: S.String }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({ s3BucketName: S.optional(S.String), s3ObjectKey: S.optional(S.String) }),
      ).annotate({ identifier: "S3Identifier" });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ s3: __S(281) }),
        /*@__PURE__*/ S.Struct({ payload: SensitiveString }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          description: S.optional(S.String),
          type: S.String,
          required: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ParameterDetail" });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ __S(283).pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: SensitiveString,
          description: S.optional(S.String),
          parameters: S.optional(__S(284)),
          requireConfirmation: S.optional(S.String),
        }),
      ).annotate({ identifier: "FunctionDefinition" });
    case 6:
      return S.Array(__S(285));
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ functions: __S(286) })]);
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          actionGroupName: SensitiveString,
          description: S.optional(SensitiveString),
          parentActionGroupSignature: S.optional(S.String),
          actionGroupExecutor: S.optional(__S(280)),
          apiSchema: S.optional(__S(282)),
          functionSchema: S.optional(__S(287)),
          parentActionGroupSignatureParams: S.optional(__S(68)),
        }),
      ).annotate({ identifier: "AgentActionGroup" });
    case 1:
      return S.Array(__S(288));
    case 2:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String,
          description: SensitiveString,
          retrievalConfiguration: S.optional(__S(143)),
        }),
      ).annotate({ identifier: "KnowledgeBase" });
    case 3:
      return S.Array(__S(290));
    case 4:
      return S.suspend(() =>
        S.Struct({ guardrailIdentifier: S.String, guardrailVersion: S.String }),
      ).annotate({
        identifier: "GuardrailConfigurationWithArn",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          promptType: S.optional(S.String),
          promptCreationMode: S.optional(S.String),
          promptState: S.optional(S.String),
          basePromptTemplate: S.optional(SensitiveString),
          inferenceConfiguration: S.optional(__S(197)),
          parserMode: S.optional(S.String),
          foundationModel: S.optional(S.String),
          additionalModelRequestFields: S.optional(S.Any),
        }),
      ).annotate({ identifier: "PromptConfiguration" });
    case 6:
      return S.Array(__S(293));
    case 7:
      return S.suspend(() =>
        S.Struct({
          promptConfigurations: __S(294),
          overrideLambda: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PromptOverrideConfiguration",
      });
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          collaboratorName: SensitiveString,
          collaboratorInstruction: SensitiveString,
          agentAliasArn: S.optional(S.String),
          relayConversationHistory: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CollaboratorConfiguration",
      });
    case 1:
      return S.Array(__S(296));
    case 2:
      return S.suspend(() =>
        S.Struct({
          sessionAttributes: S.optional(__S(68)),
          promptSessionAttributes: S.optional(__S(68)),
          returnControlInvocationResults: S.optional(__S(125)),
          invocationId: S.optional(S.String),
          files: S.optional(__S(129)),
          conversationHistory: S.optional(__S(150)),
        }),
      ).annotate({ identifier: "InlineSessionState" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          customerEncryptionKeyArn: S.optional(S.String),
          foundationModel: S.String,
          instruction: SensitiveString,
          idleSessionTTLInSeconds: S.optional(S.Number),
          actionGroups: S.optional(__S(289)),
          knowledgeBases: S.optional(__S(291)),
          guardrailConfiguration: S.optional(__S(292)),
          promptOverrideConfiguration: S.optional(__S(295)),
          agentCollaboration: S.optional(S.String),
          collaboratorConfigurations: S.optional(__S(297)),
          agentName: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "Collaborator" });
    case 4:
      return S.Array(__S(299));
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ lambda: S.String })]);
    case 6:
      return S.suspend(() => S.Struct({ executor: S.optional(__S(301)) })).annotate({
        identifier: "CustomOrchestration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          customerEncryptionKeyArn: S.optional(S.String),
          foundationModel: S.String,
          instruction: SensitiveString,
          idleSessionTTLInSeconds: S.optional(S.Number),
          actionGroups: S.optional(__S(289)),
          knowledgeBases: S.optional(__S(291)),
          guardrailConfiguration: S.optional(__S(292)),
          promptOverrideConfiguration: S.optional(__S(295)),
          agentCollaboration: S.optional(S.String),
          collaboratorConfigurations: S.optional(__S(297)),
          agentName: S.optional(SensitiveString),
          sessionId: S.String.pipe(T.HttpLabel("sessionId")),
          endSession: S.optional(S.Boolean),
          enableTrace: S.optional(S.Boolean),
          inputText: S.optional(SensitiveString),
          streamingConfigurations: S.optional(__S(154)),
          promptCreationConfigurations: S.optional(__S(155)),
          inlineSessionState: S.optional(__S(298)),
          collaborators: S.optional(__S(300)),
          bedrockModelConfigurations: S.optional(__S(153)),
          orchestrationType: S.optional(S.String),
          customOrchestration: S.optional(__S(302)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/agents/{sessionId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "InvokeInlineAgentRequest" });
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.optional(S.String),
          trace: S.optional(__S(242)),
          callerChain: S.optional(__S(244)),
          eventTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          collaboratorName: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "InlineAgentTracePart" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          invocationInputs: S.optional(__S(224)),
          invocationId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "InlineAgentReturnControlPayload",
      });
    case 2:
      return T.EventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ chunk: __S(175) }),
          /*@__PURE__*/ S.Struct({ trace: __S(304) }),
          /*@__PURE__*/ S.Struct({ returnControl: __S(305) }),
          /*@__PURE__*/ S.Struct({
            internalServerException: /*@__PURE__*/ S.suspend(
              () => InternalServerException,
            ).annotate({
              identifier: "InternalServerException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            validationException: /*@__PURE__*/ S.suspend(() => ValidationException).annotate({
              identifier: "ValidationException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            resourceNotFoundException: /*@__PURE__*/ S.suspend(
              () => ResourceNotFoundException,
            ).annotate({
              identifier: "ResourceNotFoundException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            serviceQuotaExceededException: /*@__PURE__*/ S.suspend(
              () => ServiceQuotaExceededException,
            ).annotate({
              identifier: "ServiceQuotaExceededException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            throttlingException: /*@__PURE__*/ S.suspend(() => ThrottlingException).annotate({
              identifier: "ThrottlingException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            accessDeniedException: /*@__PURE__*/ S.suspend(() => AccessDeniedException).annotate({
              identifier: "AccessDeniedException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            conflictException: /*@__PURE__*/ S.suspend(() => ConflictException).annotate({
              identifier: "ConflictException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            dependencyFailedException: /*@__PURE__*/ S.suspend(
              () => DependencyFailedException,
            ).annotate({
              identifier: "DependencyFailedException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            badGatewayException: /*@__PURE__*/ S.suspend(() => BadGatewayException).annotate({
              identifier: "BadGatewayException",
            }),
          }),
          /*@__PURE__*/ S.Struct({ files: __S(248) }),
        ]),
      );
    case 3:
      return S.suspend(() =>
        S.Struct({
          completion: __S(306).pipe(T.HttpPayload()),
          contentType: S.String.pipe(T.HttpHeader("x-amzn-bedrock-agent-content-type")),
          sessionId: S.String.pipe(T.HttpHeader("x-amz-bedrock-agent-session-id")),
        }),
      ).annotate({
        identifier: "InvokeInlineAgentResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          flowIdentifier: S.String.pipe(T.HttpLabel("flowIdentifier")),
          flowAliasIdentifier: S.String.pipe(T.HttpLabel("flowAliasIdentifier")),
          executionIdentifier: S.String.pipe(T.HttpLabel("executionIdentifier")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          eventType: S.String.pipe(T.HttpQuery("eventType")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/flows/{flowIdentifier}/aliases/{flowAliasIdentifier}/executions/{executionIdentifier}/events",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListFlowExecutionEventsRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ name: S.String, content: __S(251) })).annotate({
        identifier: "FlowInputField",
      });
    case 6:
      return S.Array(__S(309));
    case 7:
      return S.suspend(() =>
        S.Struct({
          nodeName: S.String,
          timestamp: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          fields: __S(310),
        }),
      ).annotate({ identifier: "FlowExecutionInputEvent" });
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(258));
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          content: __S(251),
          source: S.optional(__S(257)),
          type: S.optional(S.String),
          category: S.optional(S.String),
          executionChain: S.optional(__S(312)),
        }),
      ).annotate({ identifier: "NodeInputField" });
    case 2:
      return S.Array(__S(313));
    case 3:
      return S.suspend(() =>
        S.Struct({
          nodeName: S.String,
          timestamp: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          fields: __S(314),
        }),
      ).annotate({ identifier: "NodeInputEvent" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          content: __S(251),
          next: S.optional(__S(264)),
          type: S.optional(S.String),
        }),
      ).annotate({ identifier: "NodeOutputField" });
    case 5:
      return S.Array(__S(316));
    case 6:
      return S.suspend(() =>
        S.Struct({
          nodeName: S.String,
          timestamp: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          fields: __S(317),
        }),
      ).annotate({ identifier: "NodeOutputEvent" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          nodeName: S.String,
          timestamp: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          satisfiedConditions: __S(269),
        }),
      ).annotate({ identifier: "ConditionResultEvent" });
  }
}
function __c40(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nodeName: S.String,
          timestamp: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          errorCode: S.String,
          errorMessage: S.String,
        }),
      ).annotate({ identifier: "NodeFailureEvent" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          timestamp: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          errorCode: S.String,
          errorMessage: S.String,
        }),
      ).annotate({ identifier: "FlowFailureEvent" });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ flowInputEvent: __S(311) }),
        /*@__PURE__*/ S.Struct({ flowOutputEvent: __S(311) }),
        /*@__PURE__*/ S.Struct({ nodeInputEvent: __S(315) }),
        /*@__PURE__*/ S.Struct({ nodeOutputEvent: __S(318) }),
        /*@__PURE__*/ S.Struct({ conditionResultEvent: __S(319) }),
        /*@__PURE__*/ S.Struct({ nodeFailureEvent: __S(320) }),
        /*@__PURE__*/ S.Struct({ flowFailureEvent: __S(321) }),
        /*@__PURE__*/ S.Struct({ nodeActionEvent: __S(271) }),
        /*@__PURE__*/ S.Struct({ nodeDependencyEvent: __S(274) }),
      ]);
    case 3:
      return S.Array(__S(322));
    case 4:
      return S.suspend(() =>
        S.Struct({ flowExecutionEvents: __S(323), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListFlowExecutionEventsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          flowIdentifier: S.String.pipe(T.HttpLabel("flowIdentifier")),
          flowAliasIdentifier: S.optional(S.String).pipe(T.HttpQuery("flowAliasIdentifier")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/flows/{flowIdentifier}/executions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListFlowExecutionsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          executionArn: S.String,
          flowAliasIdentifier: S.String,
          flowIdentifier: S.String,
          flowVersion: S.String,
          status: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          endedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "FlowExecutionSummary" });
    case 7:
      return S.Array(__S(326));
  }
}
function __c41(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          flowExecutionSummaries: __S(327),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListFlowExecutionsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          sessionIdentifier: S.String.pipe(T.HttpLabel("sessionIdentifier")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/sessions/{sessionIdentifier}/invocations/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListInvocationsRequest" });
    case 2:
      return S.Array(__S(67));
    case 3:
      return S.suspend(() =>
        S.Struct({ invocationSummaries: __S(330), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListInvocationsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          invocationIdentifier: S.optional(S.String),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          sessionIdentifier: S.String.pipe(T.HttpLabel("sessionIdentifier")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/sessions/{sessionIdentifier}/invocationSteps/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListInvocationStepsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.String,
          invocationId: S.String,
          invocationStepId: S.String,
          invocationStepTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "InvocationStepSummary" });
    case 6:
      return S.Array(__S(333));
    case 7:
      return S.suspend(() =>
        S.Struct({
          invocationStepSummaries: __S(334),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListInvocationStepsResponse",
      });
  }
}
function __c42(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/sessions/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListSessionsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.String,
          sessionArn: S.String,
          sessionStatus: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "SessionSummary" });
    case 2:
      return S.Array(__S(337));
    case 3:
      return S.suspend(() =>
        S.Struct({ sessionSummaries: __S(338), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListSessionsResponse" });
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
      return S.suspend(() => S.Struct({ tags: S.optional(__S(69)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 6:
      return S.suspend(() => S.Struct({ text: S.String })).annotate({
        identifier: "TextPrompt",
      });
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ textPrompt: __S(342) })]);
  }
}
function __c43(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ input: __S(343), targetModelId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/optimize-prompt" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "OptimizePromptRequest" });
    case 1:
      return S.suspend(() => S.Struct({ optimizedPrompt: S.optional(__S(343)) })).annotate({
        identifier: "OptimizedPromptEvent",
      });
    case 2:
      return S.suspend(() => S.Struct({ message: S.optional(S.String) })).annotate({
        identifier: "AnalyzePromptEvent",
      });
    case 3:
      return T.EventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ optimizedPromptEvent: __S(345) }),
          /*@__PURE__*/ S.Struct({ analyzePromptEvent: __S(346) }),
          /*@__PURE__*/ S.Struct({
            internalServerException: /*@__PURE__*/ S.suspend(
              () => InternalServerException,
            ).annotate({
              identifier: "InternalServerException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            throttlingException: /*@__PURE__*/ S.suspend(() => ThrottlingException).annotate({
              identifier: "ThrottlingException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            validationException: /*@__PURE__*/ S.suspend(() => ValidationException).annotate({
              identifier: "ValidationException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            dependencyFailedException: /*@__PURE__*/ S.suspend(
              () => DependencyFailedException,
            ).annotate({
              identifier: "DependencyFailedException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            accessDeniedException: /*@__PURE__*/ S.suspend(() => AccessDeniedException).annotate({
              identifier: "AccessDeniedException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            badGatewayException: /*@__PURE__*/ S.suspend(() => BadGatewayException).annotate({
              identifier: "BadGatewayException",
            }),
          }),
        ]),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({ optimizedPrompt: __S(347).pipe(T.HttpPayload()) }),
      ).annotate({ identifier: "OptimizePromptResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          sessionIdentifier: S.String.pipe(T.HttpLabel("sessionIdentifier")),
          invocationIdentifier: S.String,
          invocationStepTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          payload: __S(112),
          invocationStepId: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/sessions/{sessionIdentifier}/invocationSteps/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PutInvocationStepRequest" });
    case 6:
      return S.suspend(() => S.Struct({ invocationStepId: S.String })).annotate({
        identifier: "PutInvocationStepResponse",
      });
    case 7:
      return S.suspend(() => S.Struct({ text: S.optional(S.String) })).annotate({
        identifier: "RerankTextDocument",
      });
  }
}
function __c44(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ type: S.String, textQuery: __S(351) })).annotate({
        identifier: "RerankQuery",
      });
    case 1:
      return S.Array(__S(352));
    case 2:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          textDocument: S.optional(__S(351)),
          jsonDocument: S.optional(S.Any),
        }),
      ).annotate({ identifier: "RerankDocument" });
    case 3:
      return S.suspend(() => S.Struct({ type: S.String, inlineDocumentSource: __S(354) })).annotate(
        { identifier: "RerankSource" },
      );
    case 4:
      return S.Array(__S(355));
    case 5:
      return S.suspend(() =>
        S.Struct({
          numberOfResults: S.optional(S.Number),
          modelConfiguration: __S(130),
        }),
      ).annotate({
        identifier: "BedrockRerankingConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          bedrockRerankingConfiguration: __S(357),
        }),
      ).annotate({ identifier: "RerankingConfiguration" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          queries: __S(353),
          sources: __S(356),
          rerankingConfiguration: __S(358),
          nextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/rerank" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "RerankRequest" });
  }
}
function __c45(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          index: S.Number,
          relevanceScore: S.Number,
          document: S.optional(__S(354)),
        }),
      ).annotate({ identifier: "RerankResult" });
    case 1:
      return S.Array(__S(360));
    case 2:
      return S.suspend(() =>
        S.Struct({ results: __S(361), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "RerankResponse" });
    case 3:
      return S.suspend(() => S.Struct({ format: S.String, inlineContent: SensitiveBlob })).annotate(
        { identifier: "InputImage" },
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          text: S.optional(S.String),
          image: S.optional(__S(363)),
        }),
      ).annotate({ identifier: "KnowledgeBaseQuery" });
    case 5:
      return S.suspend(() =>
        S.Struct({ guardrailId: S.String, guardrailVersion: S.String }),
      ).annotate({ identifier: "GuardrailConfiguration" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
          retrievalQuery: __S(364),
          retrievalConfiguration: S.optional(__S(143)),
          guardrailConfiguration: S.optional(__S(365)),
          nextToken: S.optional(S.String),
          userContext: S.optional(__S(20)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/knowledgebases/{knowledgeBaseId}/retrieve" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "RetrieveRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          content: __S(164),
          location: S.optional(__S(169)),
          score: S.optional(S.Number),
          metadata: S.optional(__S(33)),
          documentId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "KnowledgeBaseRetrievalResult",
      });
  }
}
function __c46(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(367));
    case 1:
      return S.suspend(() =>
        S.Struct({
          retrievalResults: __S(368),
          guardrailAction: S.optional(S.String),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "RetrieveResponse" });
    case 2:
      return S.suspend(() => S.Struct({ text: S.String })).annotate({
        identifier: "RetrieveAndGenerateInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ textPromptTemplate: S.optional(SensitiveString) }),
      ).annotate({ identifier: "PromptTemplate" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          temperature: S.optional(S.Number),
          topP: S.optional(S.Number),
          maxTokens: S.optional(S.Number),
          stopSequences: S.optional(__S(23)),
        }),
      ).annotate({ identifier: "TextInferenceConfig" });
    case 5:
      return S.suspend(() => S.Struct({ textInferenceConfig: S.optional(__S(372)) })).annotate({
        identifier: "InferenceConfig",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          promptTemplate: S.optional(__S(371)),
          guardrailConfiguration: S.optional(__S(365)),
          inferenceConfig: S.optional(__S(373)),
          additionalModelRequestFields: S.optional(__S(33)),
          performanceConfig: S.optional(__S(152)),
        }),
      ).annotate({ identifier: "GenerationConfiguration" });
    case 7:
      return S.suspend(() => S.Struct({ type: S.String })).annotate({
        identifier: "QueryTransformationConfiguration",
      });
  }
}
function __c47(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          promptTemplate: S.optional(__S(371)),
          inferenceConfig: S.optional(__S(373)),
          additionalModelRequestFields: S.optional(__S(33)),
          queryTransformationConfiguration: S.optional(__S(375)),
          performanceConfig: S.optional(__S(152)),
        }),
      ).annotate({
        identifier: "OrchestrationConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String,
          modelArn: S.String,
          retrievalConfiguration: S.optional(__S(143)),
          generationConfiguration: S.optional(__S(374)),
          orchestrationConfiguration: S.optional(__S(376)),
        }),
      ).annotate({
        identifier: "KnowledgeBaseRetrieveAndGenerateConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ identifier: SensitiveString, contentType: S.String, data: SensitiveBlob }),
      ).annotate({ identifier: "ByteContentDoc" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          sourceType: S.String,
          s3Location: S.optional(__S(107)),
          byteContent: S.optional(__S(378)),
        }),
      ).annotate({ identifier: "ExternalSource" });
    case 4:
      return S.Array(__S(379));
    case 5:
      return S.suspend(() =>
        S.Struct({
          promptTemplate: S.optional(__S(371)),
          guardrailConfiguration: S.optional(__S(365)),
          inferenceConfig: S.optional(__S(373)),
          additionalModelRequestFields: S.optional(__S(33)),
          performanceConfig: S.optional(__S(152)),
        }),
      ).annotate({
        identifier: "ExternalSourcesGenerationConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          modelArn: S.String,
          sources: __S(380),
          generationConfiguration: S.optional(__S(381)),
        }),
      ).annotate({
        identifier: "ExternalSourcesRetrieveAndGenerateConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          knowledgeBaseConfiguration: S.optional(__S(377)),
          externalSourcesConfiguration: S.optional(__S(382)),
        }),
      ).annotate({
        identifier: "RetrieveAndGenerateConfiguration",
      });
  }
}
function __c48(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ kmsKeyArn: S.String })).annotate({
        identifier: "RetrieveAndGenerateSessionConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.optional(S.String),
          input: __S(370) as any as S.Schema<RetrieveAndGenerateInput>,
          retrieveAndGenerateConfiguration: S.optional(__S(383)),
          sessionConfiguration: S.optional(__S(384)),
          userContext: S.optional(__S(20)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/retrieveAndGenerate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RetrieveAndGenerateRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.String,
          output: __S(61) as any as S.Schema<RetrieveAndGenerateOutput>,
          citations: S.optional(__S(173)),
          guardrailAction: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RetrieveAndGenerateResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.optional(S.String),
          input: __S(370) as any as S.Schema<RetrieveAndGenerateInput>,
          retrieveAndGenerateConfiguration: S.optional(__S(383)),
          sessionConfiguration: S.optional(__S(384)),
          userContext: S.optional(__S(20)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/retrieveAndGenerateStream" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RetrieveAndGenerateStreamRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          citation: S.optional(__S(172)),
          generatedResponsePart: S.optional(__S(159)),
          retrievedReferences: S.optional(__S(171)),
        }),
      ).annotate({ identifier: "CitationEvent" });
    case 5:
      return S.suspend(() => S.Struct({ action: S.optional(S.String) })).annotate({
        identifier: "GuardrailEvent",
      });
    case 6:
      return T.EventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({
            output: __S(61) as any as S.Schema<RetrieveAndGenerateOutputEvent>,
          }),
          /*@__PURE__*/ S.Struct({ citation: __S(388) }),
          /*@__PURE__*/ S.Struct({ guardrail: __S(389) }),
          /*@__PURE__*/ S.Struct({
            internalServerException: /*@__PURE__*/ S.suspend(
              () => InternalServerException,
            ).annotate({
              identifier: "InternalServerException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            validationException: /*@__PURE__*/ S.suspend(() => ValidationException).annotate({
              identifier: "ValidationException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            resourceNotFoundException: /*@__PURE__*/ S.suspend(
              () => ResourceNotFoundException,
            ).annotate({
              identifier: "ResourceNotFoundException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            serviceQuotaExceededException: /*@__PURE__*/ S.suspend(
              () => ServiceQuotaExceededException,
            ).annotate({
              identifier: "ServiceQuotaExceededException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            throttlingException: /*@__PURE__*/ S.suspend(() => ThrottlingException).annotate({
              identifier: "ThrottlingException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            accessDeniedException: /*@__PURE__*/ S.suspend(() => AccessDeniedException).annotate({
              identifier: "AccessDeniedException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            conflictException: /*@__PURE__*/ S.suspend(() => ConflictException).annotate({
              identifier: "ConflictException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            dependencyFailedException: /*@__PURE__*/ S.suspend(
              () => DependencyFailedException,
            ).annotate({
              identifier: "DependencyFailedException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            badGatewayException: /*@__PURE__*/ S.suspend(() => BadGatewayException).annotate({
              identifier: "BadGatewayException",
            }),
          }),
        ]),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          stream: __S(390).pipe(T.HttpPayload()),
          sessionId: S.String.pipe(T.HttpHeader("x-amzn-bedrock-knowledge-base-session-id")),
        }),
      ).annotate({
        identifier: "RetrieveAndGenerateStreamResponse",
      });
  }
}
function __c49(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          flowIdentifier: S.String.pipe(T.HttpLabel("flowIdentifier")),
          flowAliasIdentifier: S.String.pipe(T.HttpLabel("flowAliasIdentifier")),
          flowExecutionName: S.optional(S.String),
          inputs: __S(253),
          modelPerformanceConfiguration: S.optional(__S(153)),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/flows/{flowIdentifier}/aliases/{flowAliasIdentifier}/executions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartFlowExecutionRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ executionArn: S.optional(S.String) })).annotate({
        identifier: "StartFlowExecutionResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          flowIdentifier: S.String.pipe(T.HttpLabel("flowIdentifier")),
          flowAliasIdentifier: S.String.pipe(T.HttpLabel("flowAliasIdentifier")),
          executionIdentifier: S.String.pipe(T.HttpLabel("executionIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/flows/{flowIdentifier}/aliases/{flowAliasIdentifier}/executions/{executionIdentifier}/stop",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StopFlowExecutionRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ executionArn: S.optional(S.String), status: S.String }),
      ).annotate({
        identifier: "StopFlowExecutionResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: __S(69) }).pipe(
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
    case 5:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: __S(23).pipe(T.HttpQuery("tagKeys")),
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
    case 6:
      return S.suspend(() =>
        S.Struct({
          sessionMetadata: S.optional(__S(68)),
          sessionIdentifier: S.String.pipe(T.HttpLabel("sessionIdentifier")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/sessions/{sessionIdentifier}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateSessionRequest" });
  }
}

// Schema table: entry i is built from builder (i >> shift), case (i & mask), on first reach.
function __S(i: number): any {
  return (__s[i] ??= __L.at(__b, i));
}
function __b(i: number): any {
  switch (i >> 3) {
    case 0:
      return __c0(i & 7);
    case 1:
      return __c1(i & 7);
    case 2:
      return __c2(i & 7);
    case 3:
      return __c3(i & 7);
    case 4:
      return __c4(i & 7);
    case 5:
      return __c5(i & 7);
    case 6:
      return __c6(i & 7);
    case 7:
      return __c7(i & 7);
    case 8:
      return __c8(i & 7);
    case 9:
      return __c9(i & 7);
    case 10:
      return __c10(i & 7);
    case 11:
      return __c11(i & 7);
    case 12:
      return __c12(i & 7);
    case 13:
      return __c13(i & 7);
    case 14:
      return __c14(i & 7);
    case 15:
      return __c15(i & 7);
    case 16:
      return __c16(i & 7);
    case 17:
      return __c17(i & 7);
    case 18:
      return __c18(i & 7);
    case 19:
      return __c19(i & 7);
    case 20:
      return __c20(i & 7);
    case 21:
      return __c21(i & 7);
    case 22:
      return __c22(i & 7);
    case 23:
      return __c23(i & 7);
    case 24:
      return __c24(i & 7);
    case 25:
      return __c25(i & 7);
    case 26:
      return __c26(i & 7);
    case 27:
      return __c27(i & 7);
    case 28:
      return __c28(i & 7);
    case 29:
      return __c29(i & 7);
    case 30:
      return __c30(i & 7);
    case 31:
      return __c31(i & 7);
    case 32:
      return __c32(i & 7);
    case 33:
      return __c33(i & 7);
    case 34:
      return __c34(i & 7);
    case 35:
      return __c35(i & 7);
    case 36:
      return __c36(i & 7);
    case 37:
      return __c37(i & 7);
    case 38:
      return __c38(i & 7);
    case 39:
      return __c39(i & 7);
    case 40:
      return __c40(i & 7);
    case 41:
      return __c41(i & 7);
    case 42:
      return __c42(i & 7);
    case 43:
      return __c43(i & 7);
    case 44:
      return __c44(i & 7);
    case 45:
      return __c45(i & 7);
    case 46:
      return __c46(i & 7);
    case 47:
      return __c47(i & 7);
    case 48:
      return __c48(i & 7);
    case 49:
      return __c49(i & 7);
  }
}
