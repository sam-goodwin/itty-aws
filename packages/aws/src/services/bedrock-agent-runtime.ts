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
const AgenticRetrieveMessageContent = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<AgenticRetrieveMessageContent>;
export type ConversationRole = "user" | "assistant" | (string & {});
const ConversationRole = S.String;

export interface AgenticRetrieveMessage {
  content: AgenticRetrieveMessageContent;
  role: ConversationRole;
}
const AgenticRetrieveMessage = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<AgenticRetrieveMessage>;
export type AgenticRetrieveMessages = AgenticRetrieveMessage[];
const AgenticRetrieveMessages = /*@__PURE__*/ __L.at(__c0, 2);
export type KnowledgeBaseId = string;
export type FilterKey = string;
export type FilterValue = unknown;
export interface FilterAttribute {
  key: string;
  value: any;
}
const FilterAttribute = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<FilterAttribute>;
export type RetrievalFilterList = RetrievalFilter[];
const RetrievalFilterList = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<RetrievalFilterList>;
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
const RetrievalFilter = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<RetrievalFilter>;
export interface RetrievalOverrides {
  filter?: RetrievalFilter;
  maxNumberOfResults?: number;
}
const RetrievalOverrides = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<RetrievalOverrides>;
export interface KnowledgeBaseRetrieverConfiguration {
  knowledgeBaseId: string;
  retrievalOverrides?: RetrievalOverrides;
}
const KnowledgeBaseRetrieverConfiguration = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<KnowledgeBaseRetrieverConfiguration>;
export type RetrieverConfiguration = { knowledgeBase: KnowledgeBaseRetrieverConfiguration };
const RetrieverConfiguration = /*@__PURE__*/ __L.at(__c1, 0);
export interface AgenticRetriever {
  description?: string;
  configuration: RetrieverConfiguration;
}
const AgenticRetriever = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<AgenticRetriever>;
export type AgenticRetrievers = AgenticRetriever[];
const AgenticRetrievers = /*@__PURE__*/ __L.at(__c1, 2);
export type FoundationModelType = "CUSTOM" | "MANAGED" | (string & {});
const FoundationModelType = S.String;

export type FoundationModelConfigurationType =
  | "BEDROCK_FOUNDATION_MODEL"
  | "MANTLE_FOUNDATION_MODEL"
  | (string & {});
const FoundationModelConfigurationType = S.String;

export type BedrockModelArn = string;
export interface BedrockFoundationModelModelConfiguration {
  modelArn: string;
}
const BedrockFoundationModelModelConfiguration = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<BedrockFoundationModelModelConfiguration>;
export interface BedrockFoundationModelConfiguration {
  modelConfiguration: BedrockFoundationModelModelConfiguration;
}
const BedrockFoundationModelConfiguration = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<BedrockFoundationModelConfiguration>;
export type MantleProjectId = string;
export interface MantleFoundationModelModelConfiguration {
  modelArn: string;
  projectId?: string;
}
const MantleFoundationModelModelConfiguration = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<MantleFoundationModelModelConfiguration>;
export interface MantleFoundationModelConfiguration {
  modelConfiguration: MantleFoundationModelModelConfiguration;
}
const MantleFoundationModelConfiguration = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<MantleFoundationModelConfiguration>;
export interface FoundationModelConfiguration {
  type: FoundationModelConfigurationType;
  bedrockFoundationModelConfiguration?: BedrockFoundationModelConfiguration;
  mantleFoundationModelConfiguration?: MantleFoundationModelConfiguration;
}
const FoundationModelConfiguration = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<FoundationModelConfiguration>;
export type AgenticRetrieveRerankingModelType = "CUSTOM" | "MANAGED" | "NONE" | (string & {});
const AgenticRetrieveRerankingModelType = S.String;

export type AgenticRetrieveRerankingConfigurationType = "BEDROCK_RERANKING_MODEL" | (string & {});
const AgenticRetrieveRerankingConfigurationType = S.String;

export interface AgenticRetrieveBedrockRerankingModelConfiguration {
  modelArn: string;
}
export interface AgenticRetrieveBedrockRerankingConfiguration {
  modelConfiguration: AgenticRetrieveBedrockRerankingModelConfiguration;
}
const AgenticRetrieveBedrockRerankingConfiguration =
  BedrockFoundationModelConfiguration as any as S.Schema<AgenticRetrieveBedrockRerankingConfiguration>;
export interface AgenticRetrieveRerankingConfiguration {
  type: AgenticRetrieveRerankingConfigurationType;
  bedrockRerankingConfiguration?: AgenticRetrieveBedrockRerankingConfiguration;
}
const AgenticRetrieveRerankingConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<AgenticRetrieveRerankingConfiguration>;
export interface AgenticRetrieveConfiguration {
  foundationModelType?: FoundationModelType;
  foundationModelConfiguration?: FoundationModelConfiguration;
  rerankingModelType?: AgenticRetrieveRerankingModelType;
  rerankingConfiguration?: AgenticRetrieveRerankingConfiguration;
  maxAgentIteration?: number;
}
const AgenticRetrieveConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<AgenticRetrieveConfiguration>;
export interface AgenticRetrieveBedrockGuardrailConfiguration {
  guardrailId: string;
  guardrailVersion: string;
}
const AgenticRetrieveBedrockGuardrailConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<AgenticRetrieveBedrockGuardrailConfiguration>;
export interface AgenticRetrievePolicyConfiguration {
  bedrockGuardrailConfiguration?: AgenticRetrieveBedrockGuardrailConfiguration;
}
const AgenticRetrievePolicyConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<AgenticRetrievePolicyConfiguration>;
export type NextToken = string;
export interface UserContext {
  userId: string;
}
const UserContext = /*@__PURE__*/ __L.at(__c2, 4) as any as S.Schema<UserContext>;
export type AgentCoreMemoryId = string;
export type AgentCoreMemoryActorId = string;
export type AgentCoreMemorySessionId = string;
export interface AgenticRetrieveMemorySessionBinding {
  actorId: string;
  sessionId: string;
}
const AgenticRetrieveMemorySessionBinding = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<AgenticRetrieveMemorySessionBinding>;
export type MemoryNamespace = string;
export type MemoryStrategyId = string;
export type AgenticRetrieveMemoryMetadataKey = string;
export type AgenticRetrieveMemoryMetadataFilterLeft = { metadataKey: string };
const AgenticRetrieveMemoryMetadataFilterLeft = /*@__PURE__*/ __L.at(__c2, 6);
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
const AgenticRetrieveMemoryMetadataFilterOperator = S.String;

export type AgenticRetrieveMemoryMetadataStringValue = string;
export type AgenticRetrieveMemoryMetadataStringListItem = string;
export type AgenticRetrieveMemoryMetadataStringList = string[];
const AgenticRetrieveMemoryMetadataStringList = /*@__PURE__*/ __L.at(__c2, 7);
export type AgenticRetrieveMemoryMetadataValue =
  | { stringValue: string; numberValue?: never; stringListValue?: never; dateTimeValue?: never }
  | { stringValue?: never; numberValue: number; stringListValue?: never; dateTimeValue?: never }
  | { stringValue?: never; numberValue?: never; stringListValue: string[]; dateTimeValue?: never }
  | { stringValue?: never; numberValue?: never; stringListValue?: never; dateTimeValue: Date };
const AgenticRetrieveMemoryMetadataValue = /*@__PURE__*/ __L.at(__c3, 0);
export type AgenticRetrieveMemoryMetadataFilterRight = {
  metadataValue: AgenticRetrieveMemoryMetadataValue;
};
const AgenticRetrieveMemoryMetadataFilterRight = /*@__PURE__*/ __L.at(__c3, 1);
export interface AgenticRetrieveMemoryMetadataFilter {
  left: AgenticRetrieveMemoryMetadataFilterLeft;
  operator: AgenticRetrieveMemoryMetadataFilterOperator;
  right?: AgenticRetrieveMemoryMetadataFilterRight;
}
const AgenticRetrieveMemoryMetadataFilter = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<AgenticRetrieveMemoryMetadataFilter>;
export type AgenticRetrieveMemoryMetadataFilterList = AgenticRetrieveMemoryMetadataFilter[];
const AgenticRetrieveMemoryMetadataFilterList = /*@__PURE__*/ __L.at(__c3, 3);
export interface AgenticRetrieveMemoryRetrievalConfig {
  namespace?: string;
  namespacePath?: string;
  strategyId?: string;
  metadataFilters?: AgenticRetrieveMemoryMetadataFilter[];
}
const AgenticRetrieveMemoryRetrievalConfig = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<AgenticRetrieveMemoryRetrievalConfig>;
export type AgenticRetrieveMemoryRetrievalConfigList = AgenticRetrieveMemoryRetrievalConfig[];
const AgenticRetrieveMemoryRetrievalConfigList = /*@__PURE__*/ __L.at(__c3, 5);
export type AgenticRetrieveMemoryPersistenceMode = "DEFAULT" | "NONE" | (string & {});
const AgenticRetrieveMemoryPersistenceMode = S.String;

export interface AgenticRetrieveMemoryConfiguration {
  memoryId: string;
  sessionBinding?: AgenticRetrieveMemorySessionBinding;
  retrievalConfigs?: AgenticRetrieveMemoryRetrievalConfig[];
  persistenceMode?: AgenticRetrieveMemoryPersistenceMode;
}
const AgenticRetrieveMemoryConfiguration = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<AgenticRetrieveMemoryConfiguration>;
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
const AgenticRetrieveStreamRequest = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<AgenticRetrieveStreamRequest>;
export type MimeType = string;
export interface RetrievalContent {
  byteContent?: Uint8Array;
  text?: string;
  mimeType: string;
}
const RetrievalContent = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<RetrievalContent>;
export type AgenticRetrieveMetadata = { [key: string]: any | undefined };
const AgenticRetrieveMetadata = /*@__PURE__*/ __L.at(__c4, 1);
export interface AgenticRetrieveSourceRetriever {
  identifier: string;
}
const AgenticRetrieveSourceRetriever = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<AgenticRetrieveSourceRetriever>;
export interface AgenticRetrieveResultItem {
  content: RetrievalContent;
  metadata?: { [key: string]: any | undefined };
  sourceRetriever: AgenticRetrieveSourceRetriever;
}
const AgenticRetrieveResultItem = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<AgenticRetrieveResultItem>;
export type AgenticRetrieveResults = AgenticRetrieveResultItem[];
const AgenticRetrieveResults = /*@__PURE__*/ __L.at(__c4, 4);
export interface AgenticRetrieveCitationReference {
  resultIndex: number;
}
const AgenticRetrieveCitationReference = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<AgenticRetrieveCitationReference>;
export type AgenticRetrieveCitationReferenceList = AgenticRetrieveCitationReference[];
const AgenticRetrieveCitationReferenceList = /*@__PURE__*/ __L.at(__c4, 6);
export interface AgenticRetrieveCitation {
  startIndex: number;
  endIndex: number;
  references: AgenticRetrieveCitationReference[];
}
const AgenticRetrieveCitation = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<AgenticRetrieveCitation>;
export type AgenticRetrieveCitationList = AgenticRetrieveCitation[];
const AgenticRetrieveCitationList = /*@__PURE__*/ __L.at(__c5, 0);
export interface AgenticRetrieveGeneratedResponse {
  answer: string;
  citations?: AgenticRetrieveCitation[];
}
const AgenticRetrieveGeneratedResponse = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<AgenticRetrieveGeneratedResponse>;
export interface AgenticRetrieveResultEvent {
  results: AgenticRetrieveResultItem[];
  generatedResponse?: AgenticRetrieveGeneratedResponse;
  nextToken?: string;
}
const AgenticRetrieveResultEvent = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<AgenticRetrieveResultEvent>;
export type AgenticRetrieveStep =
  | "Planning"
  | "Retrieval"
  | "SpeculativeRetrieval"
  | "FullDocumentExpansion"
  | "SessionHistoryLoad"
  | (string & {});
const AgenticRetrieveStep = S.String;

export type AgenticRetrieveStatus = "IN_PROGRESS" | "SUCCEEDED" | "FAILED" | (string & {});
const AgenticRetrieveStatus = S.String;

export type AgenticRetrieveSourceRetrieverList = AgenticRetrieveSourceRetriever[];
const AgenticRetrieveSourceRetrieverList = /*@__PURE__*/ __L.at(__c5, 3);
export interface AgenticRetrieveActionDetails {
  inputQuery: AgenticRetrieveMessageContent;
  sourceRetrievers: AgenticRetrieveSourceRetriever[];
}
const AgenticRetrieveActionDetails = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<AgenticRetrieveActionDetails>;
export interface AgenticRetrieveFullDocExpansionDetails {
  documentId?: string;
  sourceRetriever?: AgenticRetrieveSourceRetriever;
}
const AgenticRetrieveFullDocExpansionDetails = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<AgenticRetrieveFullDocExpansionDetails>;
export interface AgenticRetrieveMemoryRetrieveDetails {
  inputQuery: AgenticRetrieveMessageContent;
  memoryId: string;
  namespace?: string;
  namespacePath?: string;
  strategyId?: string;
}
const AgenticRetrieveMemoryRetrieveDetails = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<AgenticRetrieveMemoryRetrieveDetails>;
export interface AgenticRetrieveAction {
  retrieve?: AgenticRetrieveActionDetails;
  fullDocumentExpansion?: AgenticRetrieveFullDocExpansionDetails;
  memoryRetrieve?: AgenticRetrieveMemoryRetrieveDetails;
}
const AgenticRetrieveAction = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<AgenticRetrieveAction>;
export type AgenticRetrieveActions = AgenticRetrieveAction[];
const AgenticRetrieveActions = /*@__PURE__*/ __L.at(__c6, 0);
export interface AgenticRetrieveWarningMessage {
  message: string;
}
const AgenticRetrieveWarningMessage = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<AgenticRetrieveWarningMessage>;
export type GuardrailAction = "INTERVENED" | "NONE" | (string & {});
const GuardrailAction = S.String;

export interface AgenticRetrieveGuardrailWarning {
  id: string;
  version: string;
  action: GuardrailAction;
  message?: string;
}
const AgenticRetrieveGuardrailWarning = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<AgenticRetrieveGuardrailWarning>;
export type AgenticRetrieveWarning =
  | { message: AgenticRetrieveWarningMessage; guardrail?: never }
  | { message?: never; guardrail: AgenticRetrieveGuardrailWarning };
const AgenticRetrieveWarning = /*@__PURE__*/ __L.at(__c6, 3);
export type AgenticRetrieveWarnings = AgenticRetrieveWarning[];
const AgenticRetrieveWarnings = /*@__PURE__*/ __L.at(__c6, 4);
export interface AgenticRetrieveFailure {
  message: string;
}
const AgenticRetrieveFailure = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<AgenticRetrieveFailure>;
export type AgenticRetrieveFailures = AgenticRetrieveFailure[];
const AgenticRetrieveFailures = /*@__PURE__*/ __L.at(__c6, 6);
export type AgenticRetrieveType = "BedrockKnowledgeBase" | "BedrockAgentCoreMemory" | (string & {});
const AgenticRetrieveType = S.String;

export interface AgenticRetrieveSourceMetadata {
  identifier?: string;
  retrievalType?: AgenticRetrieveType;
}
const AgenticRetrieveSourceMetadata = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<AgenticRetrieveSourceMetadata>;
export type AgenticRetrieveSourceMetadataList = AgenticRetrieveSourceMetadata[];
const AgenticRetrieveSourceMetadataList = /*@__PURE__*/ __L.at(__c7, 0);
export interface AgenticRetrieveTraceResultItem {
  content?: RetrievalContent;
  metadata?: { [key: string]: any | undefined };
  sourceRetriever?: AgenticRetrieveSourceRetriever;
}
const AgenticRetrieveTraceResultItem = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<AgenticRetrieveTraceResultItem>;
export type AgenticRetrieveTraceResults = AgenticRetrieveTraceResultItem[];
const AgenticRetrieveTraceResults = /*@__PURE__*/ __L.at(__c7, 2);
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
const AgenticRetrieveTraceEventAttributes = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<AgenticRetrieveTraceEventAttributes>;
export interface AgenticRetrieveTraceEvent {
  id: string;
  timestamp: number;
  attributes: AgenticRetrieveTraceEventAttributes;
}
const AgenticRetrieveTraceEvent = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<AgenticRetrieveTraceEvent>;
export interface AgenticRetrieveResponseEvent {
  text: string;
}
const AgenticRetrieveResponseEvent = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<AgenticRetrieveResponseEvent>;
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
const AgenticRetrieveStreamResponseOutput = /*@__PURE__*/ __L.at(__c7, 6) as any as S.Schema<
  stream.Stream<AgenticRetrieveStreamResponseOutput, Error, never>
>;
export interface AgenticRetrieveStreamResponse {
  stream: stream.Stream<AgenticRetrieveStreamResponseOutput, Error, never>;
}
const AgenticRetrieveStreamResponse = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<AgenticRetrieveStreamResponse>;
export type KnowledgeBaseIdentifier = string;
export type DataSourceId = string;
export type DocumentId = string;
export interface CheckIngestedDocumentAclRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
  documentId: string;
  userContext: UserContext;
}
const CheckIngestedDocumentAclRequest = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<CheckIngestedDocumentAclRequest>;
export interface CheckIngestedDocumentAclResponse {
  hasAccess: boolean;
}
const CheckIngestedDocumentAclResponse = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<CheckIngestedDocumentAclResponse>;
export type Uuid = string;
export type InvocationDescription = string;
export type SessionIdentifier = string;
export interface CreateInvocationRequest {
  invocationId?: string;
  description?: string;
  sessionIdentifier: string;
}
const CreateInvocationRequest = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<CreateInvocationRequest>;
export interface CreateInvocationResponse {
  sessionId: string;
  invocationId: string;
  createdAt: Date;
}
const CreateInvocationResponse = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<CreateInvocationResponse>;
export type SessionMetadataKey = string;
export type SessionMetadataValue = string;
export type SessionMetadataMap = { [key: string]: string | undefined };
const SessionMetadataMap = /*@__PURE__*/ __L.at(__c8, 4);
export type KmsKeyArn = string;
export type TagKey = string;
export type TagValue = string;
export type TagsMap = { [key: string]: string | undefined };
const TagsMap = /*@__PURE__*/ __L.at(__c8, 5);
export interface CreateSessionRequest {
  sessionMetadata?: { [key: string]: string | undefined };
  encryptionKeyArn?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateSessionRequest = /*@__PURE__*/ __L.at(__c8, 6) as any as S.Schema<CreateSessionRequest>;
export type SessionArn = string;
export type SessionStatus = "ACTIVE" | "EXPIRED" | "ENDED" | (string & {});
const SessionStatus = S.String;

export interface CreateSessionResponse {
  sessionId: string;
  sessionArn: string;
  sessionStatus: SessionStatus;
  createdAt: Date;
}
const CreateSessionResponse = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<CreateSessionResponse>;
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
const DeleteAgentMemoryRequest = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<DeleteAgentMemoryRequest>;
export interface DeleteAgentMemoryResponse {}
const DeleteAgentMemoryResponse = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<DeleteAgentMemoryResponse>;
export interface DeleteSessionRequest {
  sessionIdentifier: string;
}
const DeleteSessionRequest = /*@__PURE__*/ __L.at(__c9, 2) as any as S.Schema<DeleteSessionRequest>;
export interface DeleteSessionResponse {}
const DeleteSessionResponse = DeleteAgentMemoryResponse as any as S.Schema<DeleteSessionResponse>;
export interface EndSessionRequest {
  sessionIdentifier: string;
}
const EndSessionRequest = /*@__PURE__*/ __L.at(__c9, 3) as any as S.Schema<EndSessionRequest>;
export interface EndSessionResponse {
  sessionId: string;
  sessionArn: string;
  sessionStatus: SessionStatus;
}
const EndSessionResponse = /*@__PURE__*/ __L.at(__c9, 4) as any as S.Schema<EndSessionResponse>;
export type InputQueryType = "TEXT" | (string & {});
const InputQueryType = S.String;

export interface QueryGenerationInput {
  type: InputQueryType;
  text: string;
}
const QueryGenerationInput = /*@__PURE__*/ __L.at(__c9, 5) as any as S.Schema<QueryGenerationInput>;
export type QueryTransformationMode = "TEXT_TO_SQL" | (string & {});
const QueryTransformationMode = S.String;

export type TextToSqlConfigurationType = "KNOWLEDGE_BASE" | (string & {});
const TextToSqlConfigurationType = S.String;

export type KnowledgeBaseArn = string;
export interface TextToSqlKnowledgeBaseConfiguration {
  knowledgeBaseArn: string;
}
const TextToSqlKnowledgeBaseConfiguration = /*@__PURE__*/ __L.at(
  __c9,
  6,
) as any as S.Schema<TextToSqlKnowledgeBaseConfiguration>;
export interface TextToSqlConfiguration {
  type: TextToSqlConfigurationType;
  knowledgeBaseConfiguration?: TextToSqlKnowledgeBaseConfiguration;
}
const TextToSqlConfiguration = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<TextToSqlConfiguration>;
export interface TransformationConfiguration {
  mode: QueryTransformationMode;
  textToSqlConfiguration?: TextToSqlConfiguration;
}
const TransformationConfiguration = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<TransformationConfiguration>;
export interface GenerateQueryRequest {
  queryGenerationInput: QueryGenerationInput;
  transformationConfiguration: TransformationConfiguration;
}
const GenerateQueryRequest = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<GenerateQueryRequest>;
export type GeneratedQueryType = "REDSHIFT_SQL" | (string & {});
const GeneratedQueryType = S.String;

export interface GeneratedQuery {
  type?: GeneratedQueryType;
  sql?: string;
}
const GeneratedQuery = /*@__PURE__*/ __L.at(__c10, 2) as any as S.Schema<GeneratedQuery>;
export type GeneratedQueries = GeneratedQuery[];
const GeneratedQueries = /*@__PURE__*/ __L.at(__c10, 3);
export interface GenerateQueryResponse {
  queries?: GeneratedQuery[];
}
const GenerateQueryResponse = /*@__PURE__*/ __L.at(
  __c10,
  4,
) as any as S.Schema<GenerateQueryResponse>;
export type MaxResults = number;
export type MemoryType = "SESSION_SUMMARY" | (string & {});
const MemoryType = S.String;

export interface GetAgentMemoryRequest {
  nextToken?: string;
  maxItems?: number;
  agentId: string;
  agentAliasId: string;
  memoryType: MemoryType;
  memoryId: string;
}
const GetAgentMemoryRequest = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<GetAgentMemoryRequest>;
export type SummaryText = string;
export interface MemorySessionSummary {
  memoryId?: string;
  sessionId?: string;
  sessionStartTime?: Date;
  sessionExpiryTime?: Date;
  summaryText?: string;
}
const MemorySessionSummary = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<MemorySessionSummary>;
export type Memory = { sessionSummary: MemorySessionSummary };
const Memory = /*@__PURE__*/ __L.at(__c10, 7);
export type Memories = Memory[];
const Memories = /*@__PURE__*/ __L.at(__c11, 0);
export interface GetAgentMemoryResponse {
  nextToken?: string;
  memoryContents?: Memory[];
}
const GetAgentMemoryResponse = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<GetAgentMemoryResponse>;
export type DocumentOutputFormat = "RAW" | "EXTRACTED" | (string & {});
const DocumentOutputFormat = S.String;

export interface GetDocumentContentRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
  documentId: string;
  outputFormat?: DocumentOutputFormat;
  userContext?: UserContext;
}
const GetDocumentContentRequest = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<GetDocumentContentRequest>;
export type PresignedUrl = string | redacted.Redacted<string>;
export interface GetDocumentContentResponse {
  mimeType: string;
  presignedUrl: string | redacted.Redacted<string>;
  documentContentLength?: number;
}
const GetDocumentContentResponse = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<GetDocumentContentResponse>;
export type FlowIdentifier = string;
export type FlowAliasIdentifier = string;
export type FlowExecutionIdentifier = string;
export interface GetExecutionFlowSnapshotRequest {
  flowIdentifier: string;
  flowAliasIdentifier: string;
  executionIdentifier: string;
}
const GetExecutionFlowSnapshotRequest = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<GetExecutionFlowSnapshotRequest>;
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
const GetExecutionFlowSnapshotResponse = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<GetExecutionFlowSnapshotResponse>;
export interface GetFlowExecutionRequest {
  flowIdentifier: string;
  flowAliasIdentifier: string;
  executionIdentifier: string;
}
const GetFlowExecutionRequest = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<GetFlowExecutionRequest>;
export type FlowExecutionStatus =
  | "Running"
  | "Succeeded"
  | "Failed"
  | "TimedOut"
  | "Aborted"
  | (string & {});
const FlowExecutionStatus = S.String;

export type NodeName = string;
export type FlowExecutionErrorType = "ExecutionTimedOut" | (string & {});
const FlowExecutionErrorType = S.String;

export interface FlowExecutionError {
  nodeName?: string;
  error?: FlowExecutionErrorType;
  message?: string;
}
const FlowExecutionError = /*@__PURE__*/ __L.at(__c11, 7) as any as S.Schema<FlowExecutionError>;
export type FlowExecutionErrors = FlowExecutionError[];
const FlowExecutionErrors = /*@__PURE__*/ __L.at(__c12, 0);
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
const GetFlowExecutionResponse = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<GetFlowExecutionResponse>;
export interface GetIngestedDocumentAclRequest {
  knowledgeBaseId: string;
  dataSourceId: string;
  documentId: string;
}
const GetIngestedDocumentAclRequest = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<GetIngestedDocumentAclRequest>;
export type DocumentAclMemberRelation = "AND" | "OR" | (string & {});
const DocumentAclMemberRelation = S.String;

export type DocumentAclMembershipType = "KNOWLEDGE_BASE" | "DATA_SOURCE" | (string & {});
const DocumentAclMembershipType = S.String;

export interface DocumentAclUser {
  id: string;
  type: DocumentAclMembershipType;
}
const DocumentAclUser = /*@__PURE__*/ __L.at(__c12, 3) as any as S.Schema<DocumentAclUser>;
export type DocumentAclUserList = DocumentAclUser[];
const DocumentAclUserList = /*@__PURE__*/ __L.at(__c12, 4);
export interface DocumentAclGroup {
  id: string;
  type: DocumentAclMembershipType;
}
export type DocumentAclGroupList = DocumentAclGroup[];
const DocumentAclGroupList = DocumentAclUserList as any as S.Schema<DocumentAclGroupList>;
export interface DocumentAclCondition {
  conditionOperator?: DocumentAclMemberRelation;
  users?: DocumentAclUser[];
  groups?: DocumentAclGroup[];
}
const DocumentAclCondition = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<DocumentAclCondition>;
export type DocumentAclConditionList = DocumentAclCondition[];
const DocumentAclConditionList = /*@__PURE__*/ __L.at(__c12, 6);
export interface DocumentAclMembership {
  memberRelation?: DocumentAclMemberRelation;
  conditions?: DocumentAclCondition[];
}
const DocumentAclMembership = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<DocumentAclMembership>;
export interface DocumentAcl {
  allowList?: DocumentAclMembership;
  denyList?: DocumentAclMembership;
}
const DocumentAcl = /*@__PURE__*/ __L.at(__c13, 0) as any as S.Schema<DocumentAcl>;
export interface GetIngestedDocumentAclResponse {
  documentAcl: DocumentAcl;
}
const GetIngestedDocumentAclResponse = /*@__PURE__*/ __L.at(
  __c13,
  1,
) as any as S.Schema<GetIngestedDocumentAclResponse>;
export type InvocationIdentifier = string;
export interface GetInvocationStepRequest {
  invocationIdentifier: string;
  invocationStepId: string;
  sessionIdentifier: string;
}
const GetInvocationStepRequest = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<GetInvocationStepRequest>;
export type ImageFormat = "png" | "jpeg" | "gif" | "webp" | (string & {});
const ImageFormat = S.String;

export type S3Uri = string;
export interface S3Location {
  uri: string;
}
const S3Location = /*@__PURE__*/ __L.at(__c13, 3) as any as S.Schema<S3Location>;
export type ImageSource =
  | { bytes: Uint8Array; s3Location?: never }
  | { bytes?: never; s3Location: S3Location };
const ImageSource = /*@__PURE__*/ __L.at(__c13, 4);
export interface ImageBlock {
  format: ImageFormat;
  source: ImageSource;
}
const ImageBlock = /*@__PURE__*/ __L.at(__c13, 5) as any as S.Schema<ImageBlock>;
export type BedrockSessionContentBlock =
  | { text: string; image?: never }
  | { text?: never; image: ImageBlock };
const BedrockSessionContentBlock = /*@__PURE__*/ __L.at(__c13, 6);
export type BedrockSessionContentBlocks = BedrockSessionContentBlock[];
const BedrockSessionContentBlocks = /*@__PURE__*/ __L.at(__c13, 7);
export type InvocationStepPayload = { contentBlocks: BedrockSessionContentBlock[] };
const InvocationStepPayload = /*@__PURE__*/ __L.at(__c14, 0);
export interface InvocationStep {
  sessionId: string;
  invocationId: string;
  invocationStepId: string;
  invocationStepTime: Date;
  payload: InvocationStepPayload;
}
const InvocationStep = /*@__PURE__*/ __L.at(__c14, 1) as any as S.Schema<InvocationStep>;
export interface GetInvocationStepResponse {
  invocationStep: InvocationStep;
}
const GetInvocationStepResponse = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<GetInvocationStepResponse>;
export interface GetSessionRequest {
  sessionIdentifier: string;
}
const GetSessionRequest = /*@__PURE__*/ __L.at(__c14, 3) as any as S.Schema<GetSessionRequest>;
export interface GetSessionResponse {
  sessionId: string;
  sessionArn: string;
  sessionStatus: SessionStatus;
  createdAt: Date;
  lastUpdatedAt: Date;
  sessionMetadata?: { [key: string]: string | undefined };
  encryptionKeyArn?: string;
}
const GetSessionResponse = /*@__PURE__*/ __L.at(__c14, 4) as any as S.Schema<GetSessionResponse>;
export type SessionAttributesMap = { [key: string]: string | undefined };
const SessionAttributesMap = SessionMetadataMap as any as S.Schema<SessionAttributesMap>;
export type PromptSessionAttributesMap = { [key: string]: string | undefined };
const PromptSessionAttributesMap =
  SessionMetadataMap as any as S.Schema<PromptSessionAttributesMap>;
export type ApiPath = string | redacted.Redacted<string>;
export type ConfirmationState = "CONFIRM" | "DENY" | (string & {});
const ConfirmationState = S.String;

export type ResponseState = "FAILURE" | "REPROMPT" | (string & {});
const ResponseState = S.String;

export type ImageInputFormat = "png" | "jpeg" | "gif" | "webp" | (string & {});
const ImageInputFormat = S.String;

export type ImageInputSource = { bytes: Uint8Array };
const ImageInputSource = /*@__PURE__*/ __L.at(__c14, 5);
export interface ImageInput {
  format: ImageInputFormat;
  source: ImageInputSource;
}
const ImageInput = /*@__PURE__*/ __L.at(__c14, 6) as any as S.Schema<ImageInput>;
export type ImageInputs = ImageInput[];
const ImageInputs = /*@__PURE__*/ __L.at(__c14, 7);
export interface ContentBody {
  body?: string;
  images?: ImageInput[];
}
const ContentBody = /*@__PURE__*/ __L.at(__c15, 0) as any as S.Schema<ContentBody>;
export type ResponseBody = { [key: string]: ContentBody | undefined };
const ResponseBody = /*@__PURE__*/ __L.at(__c15, 1);
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
const ApiResult = /*@__PURE__*/ __L.at(__c15, 2) as any as S.Schema<ApiResult>;
export interface FunctionResult {
  actionGroup: string;
  confirmationState?: ConfirmationState;
  function?: string;
  responseBody?: { [key: string]: ContentBody | undefined };
  responseState?: ResponseState;
  agentId?: string;
}
const FunctionResult = /*@__PURE__*/ __L.at(__c15, 3) as any as S.Schema<FunctionResult>;
export type InvocationResultMember =
  | { apiResult: ApiResult; functionResult?: never }
  | { apiResult?: never; functionResult: FunctionResult };
const InvocationResultMember = /*@__PURE__*/ __L.at(__c15, 4);
export type ReturnControlInvocationResults = InvocationResultMember[];
const ReturnControlInvocationResults = /*@__PURE__*/ __L.at(__c15, 5);
export type FileSourceType = "S3" | "BYTE_CONTENT" | (string & {});
const FileSourceType = S.String;

export interface S3ObjectFile {
  uri: string;
}
const S3ObjectFile = S3Location as any as S.Schema<S3ObjectFile>;
export type ByteContentBlob = Uint8Array | redacted.Redacted<Uint8Array>;
export interface ByteContentFile {
  mediaType: string;
  data: Uint8Array | redacted.Redacted<Uint8Array>;
}
const ByteContentFile = /*@__PURE__*/ __L.at(__c15, 6) as any as S.Schema<ByteContentFile>;
export interface FileSource {
  sourceType: FileSourceType;
  s3Location?: S3ObjectFile;
  byteContent?: ByteContentFile;
}
const FileSource = /*@__PURE__*/ __L.at(__c15, 7) as any as S.Schema<FileSource>;
export type FileUseCase = "CODE_INTERPRETER" | "CHAT" | (string & {});
const FileUseCase = S.String;

export interface InputFile {
  name: string;
  source: FileSource;
  useCase: FileUseCase;
}
const InputFile = /*@__PURE__*/ __L.at(__c16, 0) as any as S.Schema<InputFile>;
export type InputFiles = InputFile[];
const InputFiles = /*@__PURE__*/ __L.at(__c16, 1);
export type SearchType = "HYBRID" | "SEMANTIC" | (string & {});
const SearchType = S.String;

export type VectorSearchRerankingConfigurationType = "BEDROCK_RERANKING_MODEL" | (string & {});
const VectorSearchRerankingConfigurationType = S.String;

export type BedrockRerankingModelArn = string;
export type AdditionalModelRequestFieldsKey = string;
export type AdditionalModelRequestFieldsValue = unknown;
export type AdditionalModelRequestFields = { [key: string]: any | undefined };
const AdditionalModelRequestFields =
  AgenticRetrieveMetadata as any as S.Schema<AdditionalModelRequestFields>;
export interface VectorSearchBedrockRerankingModelConfiguration {
  modelArn: string;
  additionalModelRequestFields?: { [key: string]: any | undefined };
}
const VectorSearchBedrockRerankingModelConfiguration = /*@__PURE__*/ __L.at(
  __c16,
  2,
) as any as S.Schema<VectorSearchBedrockRerankingModelConfiguration>;
export type RerankingMetadataSelectionMode = "SELECTIVE" | "ALL" | (string & {});
const RerankingMetadataSelectionMode = S.String;

export interface FieldForReranking {
  fieldName: string;
}
const FieldForReranking = /*@__PURE__*/ __L.at(__c16, 3) as any as S.Schema<FieldForReranking>;
export type FieldsForReranking = FieldForReranking[];
const FieldsForReranking = /*@__PURE__*/ __L.at(__c16, 4);
export type RerankingMetadataSelectiveModeConfiguration =
  | { fieldsToInclude: FieldForReranking[]; fieldsToExclude?: never }
  | { fieldsToInclude?: never; fieldsToExclude: FieldForReranking[] };
const RerankingMetadataSelectiveModeConfiguration = /*@__PURE__*/ __L.at(__c16, 5);
export interface MetadataConfigurationForReranking {
  selectionMode: RerankingMetadataSelectionMode;
  selectiveModeConfiguration?: RerankingMetadataSelectiveModeConfiguration;
}
const MetadataConfigurationForReranking = /*@__PURE__*/ __L.at(
  __c16,
  6,
) as any as S.Schema<MetadataConfigurationForReranking>;
export interface VectorSearchBedrockRerankingConfiguration {
  modelConfiguration: VectorSearchBedrockRerankingModelConfiguration;
  numberOfRerankedResults?: number;
  metadataConfiguration?: MetadataConfigurationForReranking;
}
const VectorSearchBedrockRerankingConfiguration = /*@__PURE__*/ __L.at(
  __c16,
  7,
) as any as S.Schema<VectorSearchBedrockRerankingConfiguration>;
export interface VectorSearchRerankingConfiguration {
  type: VectorSearchRerankingConfigurationType;
  bedrockRerankingConfiguration?: VectorSearchBedrockRerankingConfiguration;
}
const VectorSearchRerankingConfiguration = /*@__PURE__*/ __L.at(
  __c17,
  0,
) as any as S.Schema<VectorSearchRerankingConfiguration>;
export type AttributeType = "STRING" | "NUMBER" | "BOOLEAN" | "STRING_LIST" | (string & {});
const AttributeType = S.String;

export interface MetadataAttributeSchema {
  key: string;
  type: AttributeType;
  description: string;
}
const MetadataAttributeSchema = /*@__PURE__*/ __L.at(
  __c17,
  1,
) as any as S.Schema<MetadataAttributeSchema>;
export type MetadataAttributeSchemaList = MetadataAttributeSchema[];
const MetadataAttributeSchemaList = /*@__PURE__*/ __L.at(__c17, 2);
export interface ImplicitFilterConfiguration {
  metadataAttributes: MetadataAttributeSchema[];
  modelArn: string;
}
const ImplicitFilterConfiguration = /*@__PURE__*/ __L.at(
  __c17,
  3,
) as any as S.Schema<ImplicitFilterConfiguration>;
export interface KnowledgeBaseVectorSearchConfiguration {
  numberOfResults?: number;
  overrideSearchType?: SearchType;
  filter?: RetrievalFilter;
  rerankingConfiguration?: VectorSearchRerankingConfiguration;
  implicitFilterConfiguration?: ImplicitFilterConfiguration;
}
const KnowledgeBaseVectorSearchConfiguration = /*@__PURE__*/ __L.at(
  __c17,
  4,
) as any as S.Schema<KnowledgeBaseVectorSearchConfiguration>;
export type RerankingModelType = "CUSTOM" | "MANAGED" | "NONE" | (string & {});
const RerankingModelType = S.String;

export type ManagedSearchRerankingConfigurationType = "BEDROCK_RERANKING_MODEL" | (string & {});
const ManagedSearchRerankingConfigurationType = S.String;

export interface ManagedSearchBedrockRerankingModelConfiguration {
  modelArn: string;
  additionalModelRequestFields?: { [key: string]: any | undefined };
}
export interface ManagedSearchBedrockRerankingConfiguration {
  modelConfiguration: ManagedSearchBedrockRerankingModelConfiguration;
  numberOfRerankedResults?: number;
  metadataConfiguration?: MetadataConfigurationForReranking;
}
const ManagedSearchBedrockRerankingConfiguration =
  VectorSearchBedrockRerankingConfiguration as any as S.Schema<ManagedSearchBedrockRerankingConfiguration>;
export interface ManagedSearchRerankingConfiguration {
  type: ManagedSearchRerankingConfigurationType;
  bedrockRerankingConfiguration?: ManagedSearchBedrockRerankingConfiguration;
}
const ManagedSearchRerankingConfiguration = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<ManagedSearchRerankingConfiguration>;
export interface ManagedSearchConfiguration {
  numberOfResults?: number;
  filter?: RetrievalFilter;
  rerankingModelType?: RerankingModelType;
  rerankingConfiguration?: ManagedSearchRerankingConfiguration;
}
const ManagedSearchConfiguration = /*@__PURE__*/ __L.at(
  __c17,
  6,
) as any as S.Schema<ManagedSearchConfiguration>;
export interface KnowledgeBaseRetrievalConfiguration {
  vectorSearchConfiguration?: KnowledgeBaseVectorSearchConfiguration;
  managedSearchConfiguration?: ManagedSearchConfiguration;
}
const KnowledgeBaseRetrievalConfiguration = /*@__PURE__*/ __L.at(
  __c17,
  7,
) as any as S.Schema<KnowledgeBaseRetrievalConfiguration>;
export interface KnowledgeBaseConfiguration {
  knowledgeBaseId: string;
  retrievalConfiguration: KnowledgeBaseRetrievalConfiguration;
}
const KnowledgeBaseConfiguration = /*@__PURE__*/ __L.at(
  __c18,
  0,
) as any as S.Schema<KnowledgeBaseConfiguration>;
export type KnowledgeBaseConfigurations = KnowledgeBaseConfiguration[];
const KnowledgeBaseConfigurations = /*@__PURE__*/ __L.at(__c18, 1);
export type ContentBlock = { text: string };
const ContentBlock = /*@__PURE__*/ __L.at(__c18, 2);
export type ContentBlocks = ContentBlock[];
const ContentBlocks = /*@__PURE__*/ __L.at(__c18, 3);
export interface Message {
  role: ConversationRole;
  content: ContentBlock[];
}
const Message = /*@__PURE__*/ __L.at(__c18, 4) as any as S.Schema<Message>;
export type Messages = Message[];
const Messages = /*@__PURE__*/ __L.at(__c18, 5);
export interface ConversationHistory {
  messages?: Message[];
}
const ConversationHistory = /*@__PURE__*/ __L.at(__c18, 6) as any as S.Schema<ConversationHistory>;
export interface SessionState {
  sessionAttributes?: { [key: string]: string | undefined };
  promptSessionAttributes?: { [key: string]: string | undefined };
  returnControlInvocationResults?: InvocationResultMember[];
  invocationId?: string;
  files?: InputFile[];
  knowledgeBaseConfigurations?: KnowledgeBaseConfiguration[];
  conversationHistory?: ConversationHistory;
}
const SessionState = /*@__PURE__*/ __L.at(__c18, 7) as any as S.Schema<SessionState>;
export type InputText = string | redacted.Redacted<string>;
export type PerformanceConfigLatency = "standard" | "optimized" | (string & {});
const PerformanceConfigLatency = S.String;

export interface PerformanceConfiguration {
  latency?: PerformanceConfigLatency;
}
const PerformanceConfiguration = /*@__PURE__*/ __L.at(
  __c19,
  0,
) as any as S.Schema<PerformanceConfiguration>;
export interface BedrockModelConfigurations {
  performanceConfig?: PerformanceConfiguration;
}
const BedrockModelConfigurations = /*@__PURE__*/ __L.at(
  __c19,
  1,
) as any as S.Schema<BedrockModelConfigurations>;
export interface StreamingConfigurations {
  streamFinalResponse?: boolean;
  applyGuardrailInterval?: number;
}
const StreamingConfigurations = /*@__PURE__*/ __L.at(
  __c19,
  2,
) as any as S.Schema<StreamingConfigurations>;
export interface PromptCreationConfigurations {
  previousConversationTurnsToInclude?: number;
  excludePreviousThinkingSteps?: boolean;
}
const PromptCreationConfigurations = /*@__PURE__*/ __L.at(
  __c19,
  3,
) as any as S.Schema<PromptCreationConfigurations>;
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
const InvokeAgentRequest = /*@__PURE__*/ __L.at(__c19, 4) as any as S.Schema<InvokeAgentRequest>;
export type PartBody = Uint8Array | redacted.Redacted<Uint8Array>;
export interface Span {
  start?: number;
  end?: number;
}
const Span = /*@__PURE__*/ __L.at(__c19, 5) as any as S.Schema<Span>;
export interface TextResponsePart {
  text?: string;
  span?: Span;
}
const TextResponsePart = /*@__PURE__*/ __L.at(__c19, 6) as any as S.Schema<TextResponsePart>;
export interface GeneratedResponsePart {
  textResponsePart?: TextResponsePart;
}
const GeneratedResponsePart = /*@__PURE__*/ __L.at(
  __c19,
  7,
) as any as S.Schema<GeneratedResponsePart>;
export type RetrievalResultContentType =
  | "TEXT"
  | "IMAGE"
  | "ROW"
  | "AUDIO"
  | "VIDEO"
  | (string & {});
const RetrievalResultContentType = S.String;

export interface VideoSegment {
  s3Uri: string;
  summary?: string;
}
const VideoSegment = /*@__PURE__*/ __L.at(__c20, 0) as any as S.Schema<VideoSegment>;
export interface AudioSegment {
  s3Uri: string;
  transcription?: string;
}
const AudioSegment = /*@__PURE__*/ __L.at(__c20, 1) as any as S.Schema<AudioSegment>;
export type RetrievalResultContentColumnType =
  | "BLOB"
  | "BOOLEAN"
  | "DOUBLE"
  | "NULL"
  | "LONG"
  | "STRING"
  | (string & {});
const RetrievalResultContentColumnType = S.String;

export interface RetrievalResultContentColumn {
  columnName?: string;
  columnValue?: string;
  type?: RetrievalResultContentColumnType;
}
const RetrievalResultContentColumn = /*@__PURE__*/ __L.at(
  __c20,
  2,
) as any as S.Schema<RetrievalResultContentColumn>;
export type RetrievalResultContentRow = RetrievalResultContentColumn[];
const RetrievalResultContentRow = /*@__PURE__*/ __L.at(__c20, 3);
export interface RetrievalResultContent {
  type?: RetrievalResultContentType;
  text?: string;
  byteContent?: string;
  video?: VideoSegment;
  audio?: AudioSegment;
  row?: RetrievalResultContentColumn[];
}
const RetrievalResultContent = /*@__PURE__*/ __L.at(
  __c20,
  4,
) as any as S.Schema<RetrievalResultContent>;
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
const RetrievalResultLocationType = S.String;

export interface RetrievalResultS3Location {
  uri?: string;
}
const RetrievalResultS3Location = /*@__PURE__*/ __L.at(
  __c20,
  5,
) as any as S.Schema<RetrievalResultS3Location>;
export interface RetrievalResultWebLocation {
  url?: string;
}
const RetrievalResultWebLocation = /*@__PURE__*/ __L.at(
  __c20,
  6,
) as any as S.Schema<RetrievalResultWebLocation>;
export interface RetrievalResultConfluenceLocation {
  url?: string;
}
const RetrievalResultConfluenceLocation =
  RetrievalResultWebLocation as any as S.Schema<RetrievalResultConfluenceLocation>;
export interface RetrievalResultSalesforceLocation {
  url?: string;
}
const RetrievalResultSalesforceLocation =
  RetrievalResultWebLocation as any as S.Schema<RetrievalResultSalesforceLocation>;
export interface RetrievalResultSharePointLocation {
  url?: string;
}
const RetrievalResultSharePointLocation =
  RetrievalResultWebLocation as any as S.Schema<RetrievalResultSharePointLocation>;
export interface RetrievalResultCustomDocumentLocation {
  id?: string;
}
const RetrievalResultCustomDocumentLocation = /*@__PURE__*/ __L.at(
  __c20,
  7,
) as any as S.Schema<RetrievalResultCustomDocumentLocation>;
export interface RetrievalResultKendraDocumentLocation {
  uri?: string;
}
const RetrievalResultKendraDocumentLocation =
  RetrievalResultS3Location as any as S.Schema<RetrievalResultKendraDocumentLocation>;
export interface RetrievalResultSqlLocation {
  query?: string;
}
const RetrievalResultSqlLocation = /*@__PURE__*/ __L.at(
  __c21,
  0,
) as any as S.Schema<RetrievalResultSqlLocation>;
export interface RetrievalResultOneDriveLocation {
  url?: string;
}
const RetrievalResultOneDriveLocation =
  RetrievalResultWebLocation as any as S.Schema<RetrievalResultOneDriveLocation>;
export interface RetrievalResultGoogleDriveLocation {
  url?: string;
}
const RetrievalResultGoogleDriveLocation =
  RetrievalResultWebLocation as any as S.Schema<RetrievalResultGoogleDriveLocation>;
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
const RetrievalResultLocation = /*@__PURE__*/ __L.at(
  __c21,
  1,
) as any as S.Schema<RetrievalResultLocation>;
export type RetrievalResultMetadataKey = string;
export type RetrievalResultMetadataValue = unknown;
export type RetrievalResultMetadata = { [key: string]: any | undefined };
const RetrievalResultMetadata = AgenticRetrieveMetadata as any as S.Schema<RetrievalResultMetadata>;
export interface RetrievedReference {
  content?: RetrievalResultContent;
  location?: RetrievalResultLocation;
  metadata?: { [key: string]: any | undefined };
}
const RetrievedReference = /*@__PURE__*/ __L.at(__c21, 2) as any as S.Schema<RetrievedReference>;
export type RetrievedReferences = RetrievedReference[];
const RetrievedReferences = /*@__PURE__*/ __L.at(__c21, 3);
export interface Citation {
  generatedResponsePart?: GeneratedResponsePart;
  retrievedReferences?: RetrievedReference[];
}
const Citation = /*@__PURE__*/ __L.at(__c21, 4) as any as S.Schema<Citation>;
export type Citations = Citation[];
const Citations = /*@__PURE__*/ __L.at(__c21, 5);
export interface Attribution {
  citations?: Citation[];
}
const Attribution = /*@__PURE__*/ __L.at(__c21, 6) as any as S.Schema<Attribution>;
export interface PayloadPart {
  bytes?: Uint8Array | redacted.Redacted<Uint8Array>;
  attribution?: Attribution;
}
const PayloadPart = /*@__PURE__*/ __L.at(__c21, 7) as any as S.Schema<PayloadPart>;
export type TraceId = string;
export type GuardrailTopicType = "DENY" | (string & {});
const GuardrailTopicType = S.String;

export type GuardrailTopicPolicyAction = "BLOCKED" | (string & {});
const GuardrailTopicPolicyAction = S.String;

export interface GuardrailTopic {
  name?: string;
  type?: GuardrailTopicType;
  action?: GuardrailTopicPolicyAction;
}
const GuardrailTopic = /*@__PURE__*/ __L.at(__c22, 0) as any as S.Schema<GuardrailTopic>;
export type GuardrailTopicList = GuardrailTopic[];
const GuardrailTopicList = /*@__PURE__*/ __L.at(__c22, 1);
export interface GuardrailTopicPolicyAssessment {
  topics?: GuardrailTopic[];
}
const GuardrailTopicPolicyAssessment = /*@__PURE__*/ __L.at(
  __c22,
  2,
) as any as S.Schema<GuardrailTopicPolicyAssessment>;
export type GuardrailContentFilterType =
  | "INSULTS"
  | "HATE"
  | "SEXUAL"
  | "VIOLENCE"
  | "MISCONDUCT"
  | "PROMPT_ATTACK"
  | (string & {});
const GuardrailContentFilterType = S.String;

export type GuardrailContentFilterConfidence = "NONE" | "LOW" | "MEDIUM" | "HIGH" | (string & {});
const GuardrailContentFilterConfidence = S.String;

export type GuardrailContentPolicyAction = "BLOCKED" | (string & {});
const GuardrailContentPolicyAction = S.String;

export interface GuardrailContentFilter {
  type?: GuardrailContentFilterType;
  confidence?: GuardrailContentFilterConfidence;
  action?: GuardrailContentPolicyAction;
}
const GuardrailContentFilter = /*@__PURE__*/ __L.at(
  __c22,
  3,
) as any as S.Schema<GuardrailContentFilter>;
export type GuardrailContentFilterList = GuardrailContentFilter[];
const GuardrailContentFilterList = /*@__PURE__*/ __L.at(__c22, 4);
export interface GuardrailContentPolicyAssessment {
  filters?: GuardrailContentFilter[];
}
const GuardrailContentPolicyAssessment = /*@__PURE__*/ __L.at(
  __c22,
  5,
) as any as S.Schema<GuardrailContentPolicyAssessment>;
export type GuardrailWordPolicyAction = "BLOCKED" | (string & {});
const GuardrailWordPolicyAction = S.String;

export interface GuardrailCustomWord {
  match?: string;
  action?: GuardrailWordPolicyAction;
}
const GuardrailCustomWord = /*@__PURE__*/ __L.at(__c22, 6) as any as S.Schema<GuardrailCustomWord>;
export type GuardrailCustomWordList = GuardrailCustomWord[];
const GuardrailCustomWordList = /*@__PURE__*/ __L.at(__c22, 7);
export type GuardrailManagedWordType = "PROFANITY" | (string & {});
const GuardrailManagedWordType = S.String;

export interface GuardrailManagedWord {
  match?: string;
  type?: GuardrailManagedWordType;
  action?: GuardrailWordPolicyAction;
}
const GuardrailManagedWord = /*@__PURE__*/ __L.at(
  __c23,
  0,
) as any as S.Schema<GuardrailManagedWord>;
export type GuardrailManagedWordList = GuardrailManagedWord[];
const GuardrailManagedWordList = /*@__PURE__*/ __L.at(__c23, 1);
export interface GuardrailWordPolicyAssessment {
  customWords?: GuardrailCustomWord[];
  managedWordLists?: GuardrailManagedWord[];
}
const GuardrailWordPolicyAssessment = /*@__PURE__*/ __L.at(
  __c23,
  2,
) as any as S.Schema<GuardrailWordPolicyAssessment>;
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
const GuardrailPiiEntityType = S.String;

export type GuardrailSensitiveInformationPolicyAction = "BLOCKED" | "ANONYMIZED" | (string & {});
const GuardrailSensitiveInformationPolicyAction = S.String;

export interface GuardrailPiiEntityFilter {
  type?: GuardrailPiiEntityType;
  match?: string;
  action?: GuardrailSensitiveInformationPolicyAction;
}
const GuardrailPiiEntityFilter = /*@__PURE__*/ __L.at(
  __c23,
  3,
) as any as S.Schema<GuardrailPiiEntityFilter>;
export type GuardrailPiiEntityFilterList = GuardrailPiiEntityFilter[];
const GuardrailPiiEntityFilterList = /*@__PURE__*/ __L.at(__c23, 4);
export interface GuardrailRegexFilter {
  name?: string;
  regex?: string;
  match?: string;
  action?: GuardrailSensitiveInformationPolicyAction;
}
const GuardrailRegexFilter = /*@__PURE__*/ __L.at(
  __c23,
  5,
) as any as S.Schema<GuardrailRegexFilter>;
export type GuardrailRegexFilterList = GuardrailRegexFilter[];
const GuardrailRegexFilterList = /*@__PURE__*/ __L.at(__c23, 6);
export interface GuardrailSensitiveInformationPolicyAssessment {
  piiEntities?: GuardrailPiiEntityFilter[];
  regexes?: GuardrailRegexFilter[];
}
const GuardrailSensitiveInformationPolicyAssessment = /*@__PURE__*/ __L.at(
  __c23,
  7,
) as any as S.Schema<GuardrailSensitiveInformationPolicyAssessment>;
export interface GuardrailAssessment {
  topicPolicy?: GuardrailTopicPolicyAssessment;
  contentPolicy?: GuardrailContentPolicyAssessment;
  wordPolicy?: GuardrailWordPolicyAssessment;
  sensitiveInformationPolicy?: GuardrailSensitiveInformationPolicyAssessment;
}
const GuardrailAssessment = /*@__PURE__*/ __L.at(__c24, 0) as any as S.Schema<GuardrailAssessment>;
export type GuardrailAssessmentList = GuardrailAssessment[];
const GuardrailAssessmentList = /*@__PURE__*/ __L.at(__c24, 1);
export interface Usage {
  inputTokens?: number;
  outputTokens?: number;
}
const Usage = /*@__PURE__*/ __L.at(__c24, 2) as any as S.Schema<Usage>;
export interface Metadata {
  startTime?: Date;
  endTime?: Date;
  totalTimeMs?: number;
  operationTotalTimeMs?: number;
  clientRequestId?: string;
  usage?: Usage;
}
const Metadata = /*@__PURE__*/ __L.at(__c24, 3) as any as S.Schema<Metadata>;
export interface GuardrailTrace {
  action?: GuardrailAction;
  traceId?: string;
  inputAssessments?: GuardrailAssessment[];
  outputAssessments?: GuardrailAssessment[];
  metadata?: Metadata;
}
const GuardrailTrace = /*@__PURE__*/ __L.at(__c24, 4) as any as S.Schema<GuardrailTrace>;
export type PromptText = string | redacted.Redacted<string>;
export type PromptType =
  | "PRE_PROCESSING"
  | "ORCHESTRATION"
  | "KNOWLEDGE_BASE_RESPONSE_GENERATION"
  | "POST_PROCESSING"
  | "ROUTING_CLASSIFIER"
  | (string & {});
const PromptType = S.String;

export type LambdaArn = string;
export type CreationMode = "DEFAULT" | "OVERRIDDEN" | (string & {});
const CreationMode = S.String;

export type Temperature = number;
export type TopP = number;
export type TopK = number;
export type MaximumLength = number;
export type StopSequences = string[];
const StopSequences = AgenticRetrieveMemoryMetadataStringList as any as S.Schema<StopSequences>;
export interface InferenceConfiguration {
  temperature?: number;
  topP?: number;
  topK?: number;
  maximumLength?: number;
  stopSequences?: string[];
}
const InferenceConfiguration = /*@__PURE__*/ __L.at(
  __c24,
  5,
) as any as S.Schema<InferenceConfiguration>;
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
const ModelInvocationInput = /*@__PURE__*/ __L.at(
  __c24,
  6,
) as any as S.Schema<ModelInvocationInput>;
export type RationaleString = string | redacted.Redacted<string>;
export interface PreProcessingParsedResponse {
  rationale?: string | redacted.Redacted<string>;
  isValid?: boolean;
}
const PreProcessingParsedResponse = /*@__PURE__*/ __L.at(
  __c24,
  7,
) as any as S.Schema<PreProcessingParsedResponse>;
export interface RawResponse {
  content?: string;
}
const RawResponse = /*@__PURE__*/ __L.at(__c25, 0) as any as S.Schema<RawResponse>;
export interface ReasoningTextBlock {
  text: string;
  signature?: string;
}
const ReasoningTextBlock = /*@__PURE__*/ __L.at(__c25, 1) as any as S.Schema<ReasoningTextBlock>;
export type ReasoningContentBlock =
  | { reasoningText: ReasoningTextBlock; redactedContent?: never }
  | { reasoningText?: never; redactedContent: Uint8Array };
const ReasoningContentBlock = /*@__PURE__*/ __L.at(__c25, 2);
export interface PreProcessingModelInvocationOutput {
  traceId?: string;
  parsedResponse?: PreProcessingParsedResponse;
  rawResponse?: RawResponse;
  metadata?: Metadata;
  reasoningContent?: ReasoningContentBlock;
}
const PreProcessingModelInvocationOutput = /*@__PURE__*/ __L.at(
  __c25,
  3,
) as any as S.Schema<PreProcessingModelInvocationOutput>;
export type PreProcessingTrace =
  | { modelInvocationInput: ModelInvocationInput; modelInvocationOutput?: never }
  | { modelInvocationInput?: never; modelInvocationOutput: PreProcessingModelInvocationOutput };
const PreProcessingTrace = /*@__PURE__*/ __L.at(__c25, 4);
export interface Rationale {
  traceId?: string;
  text?: string | redacted.Redacted<string>;
}
const Rationale = /*@__PURE__*/ __L.at(__c25, 5) as any as S.Schema<Rationale>;
export type InvocationType =
  | "ACTION_GROUP"
  | "KNOWLEDGE_BASE"
  | "FINISH"
  | "ACTION_GROUP_CODE_INTERPRETER"
  | "AGENT_COLLABORATOR"
  | (string & {});
const InvocationType = S.String;

export type ActionGroupName = string | redacted.Redacted<string>;
export type Verb = string | redacted.Redacted<string>;
export interface Parameter {
  name?: string;
  type?: string;
  value?: string;
}
const Parameter = /*@__PURE__*/ __L.at(__c25, 6) as any as S.Schema<Parameter>;
export type Parameters = Parameter[];
const Parameters = /*@__PURE__*/ __L.at(__c25, 7);
export type ContentMap = { [key: string]: Parameter[] | undefined };
const ContentMap = /*@__PURE__*/ __L.at(__c26, 0);
export interface RequestBody {
  content?: { [key: string]: Parameter[] | undefined };
}
const RequestBody = /*@__PURE__*/ __L.at(__c26, 1) as any as S.Schema<RequestBody>;
export type ExecutionType = "LAMBDA" | "RETURN_CONTROL" | (string & {});
const ExecutionType = S.String;

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
const ActionGroupInvocationInput = /*@__PURE__*/ __L.at(
  __c26,
  2,
) as any as S.Schema<ActionGroupInvocationInput>;
export type KnowledgeBaseLookupInputString = string | redacted.Redacted<string>;
export type TraceKnowledgeBaseId = string | redacted.Redacted<string>;
export interface KnowledgeBaseLookupInput {
  text?: string | redacted.Redacted<string>;
  knowledgeBaseId?: string | redacted.Redacted<string>;
}
const KnowledgeBaseLookupInput = /*@__PURE__*/ __L.at(
  __c26,
  3,
) as any as S.Schema<KnowledgeBaseLookupInput>;
export type Files = string[];
const Files = AgenticRetrieveMemoryMetadataStringList as any as S.Schema<Files>;
export interface CodeInterpreterInvocationInput {
  code?: string;
  files?: string[];
}
const CodeInterpreterInvocationInput = /*@__PURE__*/ __L.at(
  __c26,
  4,
) as any as S.Schema<CodeInterpreterInvocationInput>;
export type AgentAliasArn = string;
export type PayloadType = "TEXT" | "RETURN_CONTROL" | (string & {});
const PayloadType = S.String;

export type AgentCollaboratorPayloadString = string | redacted.Redacted<string>;
export interface ReturnControlResults {
  invocationId?: string;
  returnControlInvocationResults?: InvocationResultMember[];
}
const ReturnControlResults = /*@__PURE__*/ __L.at(
  __c26,
  5,
) as any as S.Schema<ReturnControlResults>;
export interface AgentCollaboratorInputPayload {
  type?: PayloadType;
  text?: string | redacted.Redacted<string>;
  returnControlResults?: ReturnControlResults;
}
const AgentCollaboratorInputPayload = /*@__PURE__*/ __L.at(
  __c26,
  6,
) as any as S.Schema<AgentCollaboratorInputPayload>;
export interface AgentCollaboratorInvocationInput {
  agentCollaboratorName?: string;
  agentCollaboratorAliasArn?: string;
  input?: AgentCollaboratorInputPayload;
}
const AgentCollaboratorInvocationInput = /*@__PURE__*/ __L.at(
  __c26,
  7,
) as any as S.Schema<AgentCollaboratorInvocationInput>;
export interface InvocationInput {
  traceId?: string;
  invocationType?: InvocationType;
  actionGroupInvocationInput?: ActionGroupInvocationInput;
  knowledgeBaseLookupInput?: KnowledgeBaseLookupInput;
  codeInterpreterInvocationInput?: CodeInterpreterInvocationInput;
  agentCollaboratorInvocationInput?: AgentCollaboratorInvocationInput;
}
const InvocationInput = /*@__PURE__*/ __L.at(__c27, 0) as any as S.Schema<InvocationInput>;
export type Type =
  | "ACTION_GROUP"
  | "AGENT_COLLABORATOR"
  | "KNOWLEDGE_BASE"
  | "FINISH"
  | "ASK_USER"
  | "REPROMPT"
  | (string & {});
const Type = S.String;

export type ActionGroupOutputString = string | redacted.Redacted<string>;
export interface ActionGroupInvocationOutput {
  text?: string | redacted.Redacted<string>;
  metadata?: Metadata;
}
const ActionGroupInvocationOutput = /*@__PURE__*/ __L.at(
  __c27,
  1,
) as any as S.Schema<ActionGroupInvocationOutput>;
export interface ApiParameter {
  name?: string;
  type?: string;
  value?: string;
}
export type ApiParameters = ApiParameter[];
const ApiParameters = Parameters as any as S.Schema<ApiParameters>;
export type ParameterList = Parameter[];
const ParameterList = Parameters as any as S.Schema<ParameterList>;
export interface PropertyParameters {
  properties?: Parameter[];
}
const PropertyParameters = /*@__PURE__*/ __L.at(__c27, 2) as any as S.Schema<PropertyParameters>;
export type ApiContentMap = { [key: string]: PropertyParameters | undefined };
const ApiContentMap = /*@__PURE__*/ __L.at(__c27, 3);
export interface ApiRequestBody {
  content?: { [key: string]: PropertyParameters | undefined };
}
const ApiRequestBody = /*@__PURE__*/ __L.at(__c27, 4) as any as S.Schema<ApiRequestBody>;
export type ActionInvocationType =
  | "RESULT"
  | "USER_CONFIRMATION"
  | "USER_CONFIRMATION_AND_RESULT"
  | (string & {});
const ActionInvocationType = S.String;

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
const ApiInvocationInput = /*@__PURE__*/ __L.at(__c27, 5) as any as S.Schema<ApiInvocationInput>;
export interface FunctionParameter {
  name?: string;
  type?: string;
  value?: string;
}
export type FunctionParameters = FunctionParameter[];
const FunctionParameters = Parameters as any as S.Schema<FunctionParameters>;
export interface FunctionInvocationInput {
  actionGroup: string;
  parameters?: FunctionParameter[];
  function?: string;
  actionInvocationType?: ActionInvocationType;
  agentId?: string;
  collaboratorName?: string | redacted.Redacted<string>;
}
const FunctionInvocationInput = /*@__PURE__*/ __L.at(
  __c27,
  6,
) as any as S.Schema<FunctionInvocationInput>;
export type InvocationInputMember =
  | { apiInvocationInput: ApiInvocationInput; functionInvocationInput?: never }
  | { apiInvocationInput?: never; functionInvocationInput: FunctionInvocationInput };
const InvocationInputMember = /*@__PURE__*/ __L.at(__c27, 7);
export type InvocationInputs = InvocationInputMember[];
const InvocationInputs = /*@__PURE__*/ __L.at(__c28, 0);
export interface ReturnControlPayload {
  invocationInputs?: InvocationInputMember[];
  invocationId?: string;
}
const ReturnControlPayload = /*@__PURE__*/ __L.at(
  __c28,
  1,
) as any as S.Schema<ReturnControlPayload>;
export interface AgentCollaboratorOutputPayload {
  type?: PayloadType;
  text?: string | redacted.Redacted<string>;
  returnControlPayload?: ReturnControlPayload;
}
const AgentCollaboratorOutputPayload = /*@__PURE__*/ __L.at(
  __c28,
  2,
) as any as S.Schema<AgentCollaboratorOutputPayload>;
export interface AgentCollaboratorInvocationOutput {
  agentCollaboratorName?: string;
  agentCollaboratorAliasArn?: string;
  output?: AgentCollaboratorOutputPayload;
  metadata?: Metadata;
}
const AgentCollaboratorInvocationOutput = /*@__PURE__*/ __L.at(
  __c28,
  3,
) as any as S.Schema<AgentCollaboratorInvocationOutput>;
export interface KnowledgeBaseLookupOutput {
  retrievedReferences?: RetrievedReference[];
  metadata?: Metadata;
}
const KnowledgeBaseLookupOutput = /*@__PURE__*/ __L.at(
  __c28,
  4,
) as any as S.Schema<KnowledgeBaseLookupOutput>;
export type FinalResponseString = string | redacted.Redacted<string>;
export interface FinalResponse {
  text?: string | redacted.Redacted<string>;
  metadata?: Metadata;
}
const FinalResponse = /*@__PURE__*/ __L.at(__c28, 5) as any as S.Schema<FinalResponse>;
export type Source = "ACTION_GROUP" | "KNOWLEDGE_BASE" | "PARSER" | (string & {});
const Source = S.String;

export interface RepromptResponse {
  text?: string;
  source?: Source;
}
const RepromptResponse = /*@__PURE__*/ __L.at(__c28, 6) as any as S.Schema<RepromptResponse>;
export interface CodeInterpreterInvocationOutput {
  executionOutput?: string;
  executionError?: string;
  files?: string[];
  executionTimeout?: boolean;
  metadata?: Metadata;
}
const CodeInterpreterInvocationOutput = /*@__PURE__*/ __L.at(
  __c28,
  7,
) as any as S.Schema<CodeInterpreterInvocationOutput>;
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
const Observation = /*@__PURE__*/ __L.at(__c29, 0) as any as S.Schema<Observation>;
export interface OrchestrationModelInvocationOutput {
  traceId?: string;
  rawResponse?: RawResponse;
  metadata?: Metadata;
  reasoningContent?: ReasoningContentBlock;
}
const OrchestrationModelInvocationOutput = /*@__PURE__*/ __L.at(
  __c29,
  1,
) as any as S.Schema<OrchestrationModelInvocationOutput>;
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
const OrchestrationTrace = /*@__PURE__*/ __L.at(__c29, 2);
export type OutputString = string | redacted.Redacted<string>;
export interface PostProcessingParsedResponse {
  text?: string | redacted.Redacted<string>;
}
const PostProcessingParsedResponse = /*@__PURE__*/ __L.at(
  __c29,
  3,
) as any as S.Schema<PostProcessingParsedResponse>;
export interface PostProcessingModelInvocationOutput {
  traceId?: string;
  parsedResponse?: PostProcessingParsedResponse;
  rawResponse?: RawResponse;
  metadata?: Metadata;
  reasoningContent?: ReasoningContentBlock;
}
const PostProcessingModelInvocationOutput = /*@__PURE__*/ __L.at(
  __c29,
  4,
) as any as S.Schema<PostProcessingModelInvocationOutput>;
export type PostProcessingTrace =
  | { modelInvocationInput: ModelInvocationInput; modelInvocationOutput?: never }
  | { modelInvocationInput?: never; modelInvocationOutput: PostProcessingModelInvocationOutput };
const PostProcessingTrace = /*@__PURE__*/ __L.at(__c29, 5);
export interface RoutingClassifierModelInvocationOutput {
  traceId?: string;
  rawResponse?: RawResponse;
  metadata?: Metadata;
}
const RoutingClassifierModelInvocationOutput = /*@__PURE__*/ __L.at(
  __c29,
  6,
) as any as S.Schema<RoutingClassifierModelInvocationOutput>;
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
const RoutingClassifierTrace = /*@__PURE__*/ __L.at(__c29, 7);
export type FailureReasonString = string | redacted.Redacted<string>;
export interface FailureTrace {
  traceId?: string;
  failureReason?: string | redacted.Redacted<string>;
  failureCode?: number;
  metadata?: Metadata;
}
const FailureTrace = /*@__PURE__*/ __L.at(__c30, 0) as any as S.Schema<FailureTrace>;
export interface CustomOrchestrationTraceEvent {
  text?: string;
}
const CustomOrchestrationTraceEvent =
  AgenticRetrieveMessageContent as any as S.Schema<CustomOrchestrationTraceEvent>;
export interface CustomOrchestrationTrace {
  traceId?: string;
  event?: CustomOrchestrationTraceEvent;
}
const CustomOrchestrationTrace = /*@__PURE__*/ __L.at(
  __c30,
  1,
) as any as S.Schema<CustomOrchestrationTrace>;
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
const Trace = /*@__PURE__*/ __L.at(__c30, 2);
export type Caller = { agentAliasArn: string };
const Caller = /*@__PURE__*/ __L.at(__c30, 3);
export type CallerChain = Caller[];
const CallerChain = /*@__PURE__*/ __L.at(__c30, 4);
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
const TracePart = /*@__PURE__*/ __L.at(__c30, 5) as any as S.Schema<TracePart>;
export type FileBody = Uint8Array | redacted.Redacted<Uint8Array>;
export interface OutputFile {
  name?: string;
  type?: string;
  bytes?: Uint8Array | redacted.Redacted<Uint8Array>;
}
const OutputFile = /*@__PURE__*/ __L.at(__c30, 6) as any as S.Schema<OutputFile>;
export type OutputFiles = OutputFile[];
const OutputFiles = /*@__PURE__*/ __L.at(__c30, 7);
export interface FilePart {
  files?: OutputFile[];
}
const FilePart = /*@__PURE__*/ __L.at(__c31, 0) as any as S.Schema<FilePart>;
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
const ResponseStream = /*@__PURE__*/ __L.at(__c31, 1) as any as S.Schema<
  stream.Stream<ResponseStream, Error, never>
>;
export interface InvokeAgentResponse {
  completion: stream.Stream<ResponseStream, Error, never>;
  contentType: string;
  sessionId: string;
  memoryId?: string;
}
const InvokeAgentResponse = /*@__PURE__*/ __L.at(__c31, 2) as any as S.Schema<InvokeAgentResponse>;
export type NodeOutputName = string;
export type FlowInputContent = { document: any };
const FlowInputContent = /*@__PURE__*/ __L.at(__c31, 3);
export type NodeInputName = string;
export interface FlowInput {
  nodeName: string;
  nodeOutputName?: string;
  content: FlowInputContent;
  nodeInputName?: string;
}
const FlowInput = /*@__PURE__*/ __L.at(__c31, 4) as any as S.Schema<FlowInput>;
export type FlowInputs = FlowInput[];
const FlowInputs = /*@__PURE__*/ __L.at(__c31, 5);
export interface ModelPerformanceConfiguration {
  performanceConfig?: PerformanceConfiguration;
}
const ModelPerformanceConfiguration =
  BedrockModelConfigurations as any as S.Schema<ModelPerformanceConfiguration>;
export type FlowExecutionId = string;
export interface InvokeFlowRequest {
  flowIdentifier: string;
  flowAliasIdentifier: string;
  inputs: FlowInput[];
  enableTrace?: boolean;
  modelPerformanceConfiguration?: ModelPerformanceConfiguration;
  executionId?: string;
}
const InvokeFlowRequest = /*@__PURE__*/ __L.at(__c31, 6) as any as S.Schema<InvokeFlowRequest>;
export type NodeType =
  | "FlowInputNode"
  | "FlowOutputNode"
  | "LambdaFunctionNode"
  | "KnowledgeBaseNode"
  | "PromptNode"
  | "ConditionNode"
  | "LexNode"
  | (string & {});
const NodeType = S.String;

export type FlowOutputContent = { document: any };
const FlowOutputContent = FlowInputContent as any as S.Schema<FlowOutputContent>;
export interface FlowOutputEvent {
  nodeName: string;
  nodeType: NodeType;
  content: FlowOutputContent;
}
const FlowOutputEvent = /*@__PURE__*/ __L.at(__c31, 7) as any as S.Schema<FlowOutputEvent>;
export type FlowCompletionReason = "SUCCESS" | "INPUT_REQUIRED" | (string & {});
const FlowCompletionReason = S.String;

export interface FlowCompletionEvent {
  completionReason: FlowCompletionReason;
}
const FlowCompletionEvent = /*@__PURE__*/ __L.at(__c32, 0) as any as S.Schema<FlowCompletionEvent>;
export type FlowTraceNodeInputContent = { document: any };
const FlowTraceNodeInputContent = FlowInputContent as any as S.Schema<FlowTraceNodeInputContent>;
export type FlowNodeOutputName = string;
export type FlowNodeInputExpression = string | redacted.Redacted<string>;
export interface FlowTraceNodeInputSource {
  nodeName: string;
  outputFieldName: string;
  expression: string | redacted.Redacted<string>;
}
const FlowTraceNodeInputSource = /*@__PURE__*/ __L.at(
  __c32,
  1,
) as any as S.Schema<FlowTraceNodeInputSource>;
export type FlowNodeIODataType =
  | "String"
  | "Number"
  | "Boolean"
  | "Object"
  | "Array"
  | (string & {});
const FlowNodeIODataType = S.String;

export type FlowNodeInputCategory =
  | "LoopCondition"
  | "ReturnValueToLoopStart"
  | "ExitLoop"
  | (string & {});
const FlowNodeInputCategory = S.String;

export type FlowControlNodeType = "Iterator" | "Loop" | (string & {});
const FlowControlNodeType = S.String;

export interface FlowTraceNodeInputExecutionChainItem {
  nodeName: string;
  index?: number;
  type: FlowControlNodeType;
}
const FlowTraceNodeInputExecutionChainItem = /*@__PURE__*/ __L.at(
  __c32,
  2,
) as any as S.Schema<FlowTraceNodeInputExecutionChainItem>;
export type FlowTraceNodeInputExecutionChain = FlowTraceNodeInputExecutionChainItem[];
const FlowTraceNodeInputExecutionChain = /*@__PURE__*/ __L.at(__c32, 3);
export interface FlowTraceNodeInputField {
  nodeInputName: string;
  content: FlowTraceNodeInputContent;
  source?: FlowTraceNodeInputSource;
  type?: FlowNodeIODataType;
  category?: FlowNodeInputCategory;
  executionChain?: FlowTraceNodeInputExecutionChainItem[];
}
const FlowTraceNodeInputField = /*@__PURE__*/ __L.at(
  __c32,
  4,
) as any as S.Schema<FlowTraceNodeInputField>;
export type FlowTraceNodeInputFields = FlowTraceNodeInputField[];
const FlowTraceNodeInputFields = /*@__PURE__*/ __L.at(__c32, 5);
export interface FlowTraceNodeInputEvent {
  nodeName: string;
  timestamp: Date;
  fields: FlowTraceNodeInputField[];
}
const FlowTraceNodeInputEvent = /*@__PURE__*/ __L.at(
  __c32,
  6,
) as any as S.Schema<FlowTraceNodeInputEvent>;
export type FlowTraceNodeOutputContent = { document: any };
const FlowTraceNodeOutputContent = FlowInputContent as any as S.Schema<FlowTraceNodeOutputContent>;
export type FlowNodeInputName = string;
export interface FlowTraceNodeOutputNext {
  nodeName: string;
  inputFieldName: string;
}
const FlowTraceNodeOutputNext = /*@__PURE__*/ __L.at(
  __c32,
  7,
) as any as S.Schema<FlowTraceNodeOutputNext>;
export type FlowTraceNodeOutputNextList = FlowTraceNodeOutputNext[];
const FlowTraceNodeOutputNextList = /*@__PURE__*/ __L.at(__c33, 0);
export interface FlowTraceNodeOutputField {
  nodeOutputName: string;
  content: FlowTraceNodeOutputContent;
  next?: FlowTraceNodeOutputNext[];
  type?: FlowNodeIODataType;
}
const FlowTraceNodeOutputField = /*@__PURE__*/ __L.at(
  __c33,
  1,
) as any as S.Schema<FlowTraceNodeOutputField>;
export type FlowTraceNodeOutputFields = FlowTraceNodeOutputField[];
const FlowTraceNodeOutputFields = /*@__PURE__*/ __L.at(__c33, 2);
export interface FlowTraceNodeOutputEvent {
  nodeName: string;
  timestamp: Date;
  fields: FlowTraceNodeOutputField[];
}
const FlowTraceNodeOutputEvent = /*@__PURE__*/ __L.at(
  __c33,
  3,
) as any as S.Schema<FlowTraceNodeOutputEvent>;
export interface FlowTraceCondition {
  conditionName: string;
}
const FlowTraceCondition = /*@__PURE__*/ __L.at(__c33, 4) as any as S.Schema<FlowTraceCondition>;
export type FlowTraceConditions = FlowTraceCondition[];
const FlowTraceConditions = /*@__PURE__*/ __L.at(__c33, 5);
export interface FlowTraceConditionNodeResultEvent {
  nodeName: string;
  timestamp: Date;
  satisfiedConditions: FlowTraceCondition[];
}
const FlowTraceConditionNodeResultEvent = /*@__PURE__*/ __L.at(
  __c33,
  6,
) as any as S.Schema<FlowTraceConditionNodeResultEvent>;
export interface FlowTraceNodeActionEvent {
  nodeName: string;
  timestamp: Date;
  requestId: string;
  serviceName: string;
  operationName: string;
  operationRequest?: any;
  operationResponse?: any;
}
const FlowTraceNodeActionEvent = /*@__PURE__*/ __L.at(
  __c33,
  7,
) as any as S.Schema<FlowTraceNodeActionEvent>;
export type AgentTraces = TracePart[];
const AgentTraces = /*@__PURE__*/ __L.at(__c34, 0);
export type TraceElements = { agentTraces: TracePart[] };
const TraceElements = /*@__PURE__*/ __L.at(__c34, 1);
export interface FlowTraceDependencyEvent {
  nodeName: string;
  timestamp: Date;
  traceElements: TraceElements;
}
const FlowTraceDependencyEvent = /*@__PURE__*/ __L.at(
  __c34,
  2,
) as any as S.Schema<FlowTraceDependencyEvent>;
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
const FlowTrace = /*@__PURE__*/ __L.at(__c34, 3);
export interface FlowTraceEvent {
  trace: FlowTrace;
}
const FlowTraceEvent = /*@__PURE__*/ __L.at(__c34, 4) as any as S.Schema<FlowTraceEvent>;
export type FlowMultiTurnInputContent = { document: any };
const FlowMultiTurnInputContent = FlowInputContent as any as S.Schema<FlowMultiTurnInputContent>;
export interface FlowMultiTurnInputRequestEvent {
  nodeName: string;
  nodeType: NodeType;
  content: FlowMultiTurnInputContent;
}
const FlowMultiTurnInputRequestEvent = /*@__PURE__*/ __L.at(
  __c34,
  5,
) as any as S.Schema<FlowMultiTurnInputRequestEvent>;
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
const FlowResponseStream = /*@__PURE__*/ __L.at(__c34, 6) as any as S.Schema<
  stream.Stream<FlowResponseStream, Error, never>
>;
export interface InvokeFlowResponse {
  responseStream: stream.Stream<FlowResponseStream, Error, never>;
  executionId?: string;
}
const InvokeFlowResponse = /*@__PURE__*/ __L.at(__c34, 7) as any as S.Schema<InvokeFlowResponse>;
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
const ActionGroupSignature = S.String;

export type LambdaResourceArn = string;
export type CustomControlMethod = "RETURN_CONTROL" | (string & {});
const CustomControlMethod = S.String;

export type ActionGroupExecutor =
  | { lambda: string; customControl?: never }
  | { lambda?: never; customControl: CustomControlMethod };
const ActionGroupExecutor = /*@__PURE__*/ __L.at(__c35, 0);
export type S3BucketName = string;
export type S3ObjectKey = string;
export interface S3Identifier {
  s3BucketName?: string;
  s3ObjectKey?: string;
}
const S3Identifier = /*@__PURE__*/ __L.at(__c35, 1) as any as S.Schema<S3Identifier>;
export type Payload = string | redacted.Redacted<string>;
export type APISchema =
  | { s3: S3Identifier; payload?: never }
  | { s3?: never; payload: string | redacted.Redacted<string> };
const APISchema = /*@__PURE__*/ __L.at(__c35, 2);
export type FunctionDescription = string;
export type ParameterName = string;
export type ParameterDescription = string;
export type ParameterType = "string" | "number" | "integer" | "boolean" | "array" | (string & {});
const ParameterType = S.String;

export interface ParameterDetail {
  description?: string;
  type: ParameterType;
  required?: boolean;
}
const ParameterDetail = /*@__PURE__*/ __L.at(__c35, 3) as any as S.Schema<ParameterDetail>;
export type ParameterMap = { [key: string]: ParameterDetail | undefined };
const ParameterMap = /*@__PURE__*/ __L.at(__c35, 4);
export type RequireConfirmation = "ENABLED" | "DISABLED" | (string & {});
const RequireConfirmation = S.String;

export interface FunctionDefinition {
  name: string | redacted.Redacted<string>;
  description?: string;
  parameters?: { [key: string]: ParameterDetail | undefined };
  requireConfirmation?: RequireConfirmation;
}
const FunctionDefinition = /*@__PURE__*/ __L.at(__c35, 5) as any as S.Schema<FunctionDefinition>;
export type Functions = FunctionDefinition[];
const Functions = /*@__PURE__*/ __L.at(__c35, 6);
export type FunctionSchema = { functions: FunctionDefinition[] };
const FunctionSchema = /*@__PURE__*/ __L.at(__c35, 7);
export type ActionGroupSignatureParams = { [key: string]: string | undefined };
const ActionGroupSignatureParams =
  SessionMetadataMap as any as S.Schema<ActionGroupSignatureParams>;
export interface AgentActionGroup {
  actionGroupName: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  parentActionGroupSignature?: ActionGroupSignature;
  actionGroupExecutor?: ActionGroupExecutor;
  apiSchema?: APISchema;
  functionSchema?: FunctionSchema;
  parentActionGroupSignatureParams?: { [key: string]: string | undefined };
}
const AgentActionGroup = /*@__PURE__*/ __L.at(__c36, 0) as any as S.Schema<AgentActionGroup>;
export type AgentActionGroups = AgentActionGroup[];
const AgentActionGroups = /*@__PURE__*/ __L.at(__c36, 1);
export interface KnowledgeBase {
  knowledgeBaseId: string;
  description: string | redacted.Redacted<string>;
  retrievalConfiguration?: KnowledgeBaseRetrievalConfiguration;
}
const KnowledgeBase = /*@__PURE__*/ __L.at(__c36, 2) as any as S.Schema<KnowledgeBase>;
export type KnowledgeBases = KnowledgeBase[];
const KnowledgeBases = /*@__PURE__*/ __L.at(__c36, 3);
export type GuardrailIdentifierWithArn = string;
export type GuardrailVersion = string;
export interface GuardrailConfigurationWithArn {
  guardrailIdentifier: string;
  guardrailVersion: string;
}
const GuardrailConfigurationWithArn = /*@__PURE__*/ __L.at(
  __c36,
  4,
) as any as S.Schema<GuardrailConfigurationWithArn>;
export type PromptState = "ENABLED" | "DISABLED" | (string & {});
const PromptState = S.String;

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
const PromptConfiguration = /*@__PURE__*/ __L.at(__c36, 5) as any as S.Schema<PromptConfiguration>;
export type PromptConfigurations = PromptConfiguration[];
const PromptConfigurations = /*@__PURE__*/ __L.at(__c36, 6);
export interface PromptOverrideConfiguration {
  promptConfigurations: PromptConfiguration[];
  overrideLambda?: string;
}
const PromptOverrideConfiguration = /*@__PURE__*/ __L.at(
  __c36,
  7,
) as any as S.Schema<PromptOverrideConfiguration>;
export type AgentCollaboration = "SUPERVISOR" | "SUPERVISOR_ROUTER" | "DISABLED" | (string & {});
const AgentCollaboration = S.String;

export type CollaborationInstruction = string | redacted.Redacted<string>;
export type RelayConversationHistory = "TO_COLLABORATOR" | "DISABLED" | (string & {});
const RelayConversationHistory = S.String;

export interface CollaboratorConfiguration {
  collaboratorName: string | redacted.Redacted<string>;
  collaboratorInstruction: string | redacted.Redacted<string>;
  agentAliasArn?: string;
  relayConversationHistory?: RelayConversationHistory;
}
const CollaboratorConfiguration = /*@__PURE__*/ __L.at(
  __c37,
  0,
) as any as S.Schema<CollaboratorConfiguration>;
export type CollaboratorConfigurations = CollaboratorConfiguration[];
const CollaboratorConfigurations = /*@__PURE__*/ __L.at(__c37, 1);
export interface InlineSessionState {
  sessionAttributes?: { [key: string]: string | undefined };
  promptSessionAttributes?: { [key: string]: string | undefined };
  returnControlInvocationResults?: InvocationResultMember[];
  invocationId?: string;
  files?: InputFile[];
  conversationHistory?: ConversationHistory;
}
const InlineSessionState = /*@__PURE__*/ __L.at(__c37, 2) as any as S.Schema<InlineSessionState>;
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
const Collaborator = /*@__PURE__*/ __L.at(__c37, 3) as any as S.Schema<Collaborator>;
export type Collaborators = Collaborator[];
const Collaborators = /*@__PURE__*/ __L.at(__c37, 4);
export interface InlineBedrockModelConfigurations {
  performanceConfig?: PerformanceConfiguration;
}
const InlineBedrockModelConfigurations =
  BedrockModelConfigurations as any as S.Schema<InlineBedrockModelConfigurations>;
export type OrchestrationType = "DEFAULT" | "CUSTOM_ORCHESTRATION" | (string & {});
const OrchestrationType = S.String;

export type OrchestrationExecutor = { lambda: string };
const OrchestrationExecutor = /*@__PURE__*/ __L.at(__c37, 5);
export interface CustomOrchestration {
  executor?: OrchestrationExecutor;
}
const CustomOrchestration = /*@__PURE__*/ __L.at(__c37, 6) as any as S.Schema<CustomOrchestration>;
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
const InvokeInlineAgentRequest = /*@__PURE__*/ __L.at(
  __c37,
  7,
) as any as S.Schema<InvokeInlineAgentRequest>;
export interface InlineAgentPayloadPart {
  bytes?: Uint8Array | redacted.Redacted<Uint8Array>;
  attribution?: Attribution;
}
const InlineAgentPayloadPart = PayloadPart as any as S.Schema<InlineAgentPayloadPart>;
export interface InlineAgentTracePart {
  sessionId?: string;
  trace?: Trace;
  callerChain?: Caller[];
  eventTime?: Date;
  collaboratorName?: string | redacted.Redacted<string>;
}
const InlineAgentTracePart = /*@__PURE__*/ __L.at(
  __c38,
  0,
) as any as S.Schema<InlineAgentTracePart>;
export interface InlineAgentReturnControlPayload {
  invocationInputs?: InvocationInputMember[];
  invocationId?: string;
}
const InlineAgentReturnControlPayload = /*@__PURE__*/ __L.at(
  __c38,
  1,
) as any as S.Schema<InlineAgentReturnControlPayload>;
export interface InlineAgentFilePart {
  files?: OutputFile[];
}
const InlineAgentFilePart = FilePart as any as S.Schema<InlineAgentFilePart>;
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
const InlineAgentResponseStream = /*@__PURE__*/ __L.at(__c38, 2) as any as S.Schema<
  stream.Stream<InlineAgentResponseStream, Error, never>
>;
export interface InvokeInlineAgentResponse {
  completion: stream.Stream<InlineAgentResponseStream, Error, never>;
  contentType: string;
  sessionId: string;
}
const InvokeInlineAgentResponse = /*@__PURE__*/ __L.at(
  __c38,
  3,
) as any as S.Schema<InvokeInlineAgentResponse>;
export type FlowExecutionEventType = "Node" | "Flow" | (string & {});
const FlowExecutionEventType = S.String;

export interface ListFlowExecutionEventsRequest {
  flowIdentifier: string;
  flowAliasIdentifier: string;
  executionIdentifier: string;
  maxResults?: number;
  nextToken?: string;
  eventType: FlowExecutionEventType;
}
const ListFlowExecutionEventsRequest = /*@__PURE__*/ __L.at(
  __c38,
  4,
) as any as S.Schema<ListFlowExecutionEventsRequest>;
export type FlowExecutionContent = { document: any };
const FlowExecutionContent = FlowInputContent as any as S.Schema<FlowExecutionContent>;
export interface FlowInputField {
  name: string;
  content: FlowExecutionContent;
}
const FlowInputField = /*@__PURE__*/ __L.at(__c38, 5) as any as S.Schema<FlowInputField>;
export type FlowInputFields = FlowInputField[];
const FlowInputFields = /*@__PURE__*/ __L.at(__c38, 6);
export interface FlowExecutionInputEvent {
  nodeName: string;
  timestamp: Date;
  fields: FlowInputField[];
}
const FlowExecutionInputEvent = /*@__PURE__*/ __L.at(
  __c38,
  7,
) as any as S.Schema<FlowExecutionInputEvent>;
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
const FlowExecutionOutputEvent =
  FlowExecutionInputEvent as any as S.Schema<FlowExecutionOutputEvent>;
export type NodeExecutionContent = { document: any };
const NodeExecutionContent = FlowInputContent as any as S.Schema<NodeExecutionContent>;
export interface NodeInputSource {
  nodeName: string;
  outputFieldName: string;
  expression: string | redacted.Redacted<string>;
}
const NodeInputSource = FlowTraceNodeInputSource as any as S.Schema<NodeInputSource>;
export interface NodeInputExecutionChainItem {
  nodeName: string;
  index?: number;
  type: FlowControlNodeType;
}
const NodeInputExecutionChainItem =
  FlowTraceNodeInputExecutionChainItem as any as S.Schema<NodeInputExecutionChainItem>;
export type NodeInputExecutionChain = NodeInputExecutionChainItem[];
const NodeInputExecutionChain = /*@__PURE__*/ __L.at(__c39, 0);
export interface NodeInputField {
  name: string;
  content: NodeExecutionContent;
  source?: NodeInputSource;
  type?: FlowNodeIODataType;
  category?: FlowNodeInputCategory;
  executionChain?: NodeInputExecutionChainItem[];
}
const NodeInputField = /*@__PURE__*/ __L.at(__c39, 1) as any as S.Schema<NodeInputField>;
export type NodeInputFields = NodeInputField[];
const NodeInputFields = /*@__PURE__*/ __L.at(__c39, 2);
export interface NodeInputEvent {
  nodeName: string;
  timestamp: Date;
  fields: NodeInputField[];
}
const NodeInputEvent = /*@__PURE__*/ __L.at(__c39, 3) as any as S.Schema<NodeInputEvent>;
export interface NodeOutputNext {
  nodeName: string;
  inputFieldName: string;
}
export type NodeOutputNextList = NodeOutputNext[];
const NodeOutputNextList = FlowTraceNodeOutputNextList as any as S.Schema<NodeOutputNextList>;
export interface NodeOutputField {
  name: string;
  content: NodeExecutionContent;
  next?: NodeOutputNext[];
  type?: FlowNodeIODataType;
}
const NodeOutputField = /*@__PURE__*/ __L.at(__c39, 4) as any as S.Schema<NodeOutputField>;
export type NodeOutputFields = NodeOutputField[];
const NodeOutputFields = /*@__PURE__*/ __L.at(__c39, 5);
export interface NodeOutputEvent {
  nodeName: string;
  timestamp: Date;
  fields: NodeOutputField[];
}
const NodeOutputEvent = /*@__PURE__*/ __L.at(__c39, 6) as any as S.Schema<NodeOutputEvent>;
export interface SatisfiedCondition {
  conditionName: string;
}
export type SatisfiedConditions = SatisfiedCondition[];
const SatisfiedConditions = FlowTraceConditions as any as S.Schema<SatisfiedConditions>;
export interface ConditionResultEvent {
  nodeName: string;
  timestamp: Date;
  satisfiedConditions: SatisfiedCondition[];
}
const ConditionResultEvent = /*@__PURE__*/ __L.at(
  __c39,
  7,
) as any as S.Schema<ConditionResultEvent>;
export type NodeErrorCode =
  | "VALIDATION"
  | "DEPENDENCY_FAILED"
  | "BAD_GATEWAY"
  | "INTERNAL_SERVER"
  | (string & {});
const NodeErrorCode = S.String;

export interface NodeFailureEvent {
  nodeName: string;
  timestamp: Date;
  errorCode: NodeErrorCode;
  errorMessage: string;
}
const NodeFailureEvent = /*@__PURE__*/ __L.at(__c40, 0) as any as S.Schema<NodeFailureEvent>;
export type FlowErrorCode =
  | "VALIDATION"
  | "INTERNAL_SERVER"
  | "NODE_EXECUTION_FAILED"
  | (string & {});
const FlowErrorCode = S.String;

export interface FlowFailureEvent {
  timestamp: Date;
  errorCode: FlowErrorCode;
  errorMessage: string;
}
const FlowFailureEvent = /*@__PURE__*/ __L.at(__c40, 1) as any as S.Schema<FlowFailureEvent>;
export interface NodeActionEvent {
  nodeName: string;
  timestamp: Date;
  requestId: string;
  serviceName: string;
  operationName: string;
  operationRequest?: any;
  operationResponse?: any;
}
const NodeActionEvent = FlowTraceNodeActionEvent as any as S.Schema<NodeActionEvent>;
export type NodeTraceElements = { agentTraces: TracePart[] };
export interface NodeDependencyEvent {
  nodeName: string;
  timestamp: Date;
  traceElements: NodeTraceElements;
}
const NodeDependencyEvent = FlowTraceDependencyEvent as any as S.Schema<NodeDependencyEvent>;
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
const FlowExecutionEvent = /*@__PURE__*/ __L.at(__c40, 2);
export type FlowExecutionEvents = FlowExecutionEvent[];
const FlowExecutionEvents = /*@__PURE__*/ __L.at(__c40, 3);
export interface ListFlowExecutionEventsResponse {
  flowExecutionEvents: FlowExecutionEvent[];
  nextToken?: string;
}
const ListFlowExecutionEventsResponse = /*@__PURE__*/ __L.at(
  __c40,
  4,
) as any as S.Schema<ListFlowExecutionEventsResponse>;
export interface ListFlowExecutionsRequest {
  flowIdentifier: string;
  flowAliasIdentifier?: string;
  maxResults?: number;
  nextToken?: string;
}
const ListFlowExecutionsRequest = /*@__PURE__*/ __L.at(
  __c40,
  5,
) as any as S.Schema<ListFlowExecutionsRequest>;
export interface FlowExecutionSummary {
  executionArn: string;
  flowAliasIdentifier: string;
  flowIdentifier: string;
  flowVersion: string;
  status: FlowExecutionStatus;
  createdAt: Date;
  endedAt?: Date;
}
const FlowExecutionSummary = /*@__PURE__*/ __L.at(
  __c40,
  6,
) as any as S.Schema<FlowExecutionSummary>;
export type FlowExecutionSummaries = FlowExecutionSummary[];
const FlowExecutionSummaries = /*@__PURE__*/ __L.at(__c40, 7);
export interface ListFlowExecutionsResponse {
  flowExecutionSummaries: FlowExecutionSummary[];
  nextToken?: string;
}
const ListFlowExecutionsResponse = /*@__PURE__*/ __L.at(
  __c41,
  0,
) as any as S.Schema<ListFlowExecutionsResponse>;
export interface ListInvocationsRequest {
  nextToken?: string;
  maxResults?: number;
  sessionIdentifier: string;
}
const ListInvocationsRequest = /*@__PURE__*/ __L.at(
  __c41,
  1,
) as any as S.Schema<ListInvocationsRequest>;
export interface InvocationSummary {
  sessionId: string;
  invocationId: string;
  createdAt: Date;
}
const InvocationSummary = CreateInvocationResponse as any as S.Schema<InvocationSummary>;
export type InvocationSummaries = InvocationSummary[];
const InvocationSummaries = /*@__PURE__*/ __L.at(__c41, 2);
export interface ListInvocationsResponse {
  invocationSummaries: InvocationSummary[];
  nextToken?: string;
}
const ListInvocationsResponse = /*@__PURE__*/ __L.at(
  __c41,
  3,
) as any as S.Schema<ListInvocationsResponse>;
export interface ListInvocationStepsRequest {
  invocationIdentifier?: string;
  nextToken?: string;
  maxResults?: number;
  sessionIdentifier: string;
}
const ListInvocationStepsRequest = /*@__PURE__*/ __L.at(
  __c41,
  4,
) as any as S.Schema<ListInvocationStepsRequest>;
export interface InvocationStepSummary {
  sessionId: string;
  invocationId: string;
  invocationStepId: string;
  invocationStepTime: Date;
}
const InvocationStepSummary = /*@__PURE__*/ __L.at(
  __c41,
  5,
) as any as S.Schema<InvocationStepSummary>;
export type InvocationStepSummaries = InvocationStepSummary[];
const InvocationStepSummaries = /*@__PURE__*/ __L.at(__c41, 6);
export interface ListInvocationStepsResponse {
  invocationStepSummaries: InvocationStepSummary[];
  nextToken?: string;
}
const ListInvocationStepsResponse = /*@__PURE__*/ __L.at(
  __c41,
  7,
) as any as S.Schema<ListInvocationStepsResponse>;
export interface ListSessionsRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListSessionsRequest = /*@__PURE__*/ __L.at(__c42, 0) as any as S.Schema<ListSessionsRequest>;
export interface SessionSummary {
  sessionId: string;
  sessionArn: string;
  sessionStatus: SessionStatus;
  createdAt: Date;
  lastUpdatedAt: Date;
}
const SessionSummary = /*@__PURE__*/ __L.at(__c42, 1) as any as S.Schema<SessionSummary>;
export type SessionSummaries = SessionSummary[];
const SessionSummaries = /*@__PURE__*/ __L.at(__c42, 2);
export interface ListSessionsResponse {
  sessionSummaries: SessionSummary[];
  nextToken?: string;
}
const ListSessionsResponse = /*@__PURE__*/ __L.at(
  __c42,
  3,
) as any as S.Schema<ListSessionsResponse>;
export type TaggableResourcesArn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c42,
  4,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c42,
  5,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface TextPrompt {
  text: string;
}
const TextPrompt = /*@__PURE__*/ __L.at(__c42, 6) as any as S.Schema<TextPrompt>;
export type InputPrompt = { textPrompt: TextPrompt };
const InputPrompt = /*@__PURE__*/ __L.at(__c42, 7);
export interface OptimizePromptRequest {
  input: InputPrompt;
  targetModelId: string;
}
const OptimizePromptRequest = /*@__PURE__*/ __L.at(
  __c43,
  0,
) as any as S.Schema<OptimizePromptRequest>;
export type OptimizedPrompt = { textPrompt: TextPrompt };
const OptimizedPrompt = InputPrompt as any as S.Schema<OptimizedPrompt>;
export interface OptimizedPromptEvent {
  optimizedPrompt?: OptimizedPrompt;
}
const OptimizedPromptEvent = /*@__PURE__*/ __L.at(
  __c43,
  1,
) as any as S.Schema<OptimizedPromptEvent>;
export interface AnalyzePromptEvent {
  message?: string;
}
const AnalyzePromptEvent = /*@__PURE__*/ __L.at(__c43, 2) as any as S.Schema<AnalyzePromptEvent>;
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
const OptimizedPromptStream = /*@__PURE__*/ __L.at(__c43, 3) as any as S.Schema<
  stream.Stream<OptimizedPromptStream, Error, never>
>;
export interface OptimizePromptResponse {
  optimizedPrompt: stream.Stream<OptimizedPromptStream, Error, never>;
}
const OptimizePromptResponse = /*@__PURE__*/ __L.at(
  __c43,
  4,
) as any as S.Schema<OptimizePromptResponse>;
export interface PutInvocationStepRequest {
  sessionIdentifier: string;
  invocationIdentifier: string;
  invocationStepTime: Date;
  payload: InvocationStepPayload;
  invocationStepId?: string;
}
const PutInvocationStepRequest = /*@__PURE__*/ __L.at(
  __c43,
  5,
) as any as S.Schema<PutInvocationStepRequest>;
export interface PutInvocationStepResponse {
  invocationStepId: string;
}
const PutInvocationStepResponse = /*@__PURE__*/ __L.at(
  __c43,
  6,
) as any as S.Schema<PutInvocationStepResponse>;
export type RerankQueryContentType = "TEXT" | (string & {});
const RerankQueryContentType = S.String;

export interface RerankTextDocument {
  text?: string;
}
const RerankTextDocument = /*@__PURE__*/ __L.at(__c43, 7) as any as S.Schema<RerankTextDocument>;
export interface RerankQuery {
  type: RerankQueryContentType;
  textQuery: RerankTextDocument;
}
const RerankQuery = /*@__PURE__*/ __L.at(__c44, 0) as any as S.Schema<RerankQuery>;
export type RerankQueriesList = RerankQuery[];
const RerankQueriesList = /*@__PURE__*/ __L.at(__c44, 1);
export type RerankSourceType = "INLINE" | (string & {});
const RerankSourceType = S.String;

export type RerankDocumentType = "TEXT" | "JSON" | (string & {});
const RerankDocumentType = S.String;

export interface RerankDocument {
  type: RerankDocumentType;
  textDocument?: RerankTextDocument;
  jsonDocument?: any;
}
const RerankDocument = /*@__PURE__*/ __L.at(__c44, 2) as any as S.Schema<RerankDocument>;
export interface RerankSource {
  type: RerankSourceType;
  inlineDocumentSource: RerankDocument;
}
const RerankSource = /*@__PURE__*/ __L.at(__c44, 3) as any as S.Schema<RerankSource>;
export type RerankSourcesList = RerankSource[];
const RerankSourcesList = /*@__PURE__*/ __L.at(__c44, 4);
export type RerankingConfigurationType = "BEDROCK_RERANKING_MODEL" | (string & {});
const RerankingConfigurationType = S.String;

export interface BedrockRerankingModelConfiguration {
  modelArn: string;
  additionalModelRequestFields?: { [key: string]: any | undefined };
}
const BedrockRerankingModelConfiguration =
  VectorSearchBedrockRerankingModelConfiguration as any as S.Schema<BedrockRerankingModelConfiguration>;
export interface BedrockRerankingConfiguration {
  numberOfResults?: number;
  modelConfiguration: BedrockRerankingModelConfiguration;
}
const BedrockRerankingConfiguration = /*@__PURE__*/ __L.at(
  __c44,
  5,
) as any as S.Schema<BedrockRerankingConfiguration>;
export interface RerankingConfiguration {
  type: RerankingConfigurationType;
  bedrockRerankingConfiguration: BedrockRerankingConfiguration;
}
const RerankingConfiguration = /*@__PURE__*/ __L.at(
  __c44,
  6,
) as any as S.Schema<RerankingConfiguration>;
export interface RerankRequest {
  queries: RerankQuery[];
  sources: RerankSource[];
  rerankingConfiguration: RerankingConfiguration;
  nextToken?: string;
}
const RerankRequest = /*@__PURE__*/ __L.at(__c44, 7) as any as S.Schema<RerankRequest>;
export interface RerankResult {
  index: number;
  relevanceScore: number;
  document?: RerankDocument;
}
const RerankResult = /*@__PURE__*/ __L.at(__c45, 0) as any as S.Schema<RerankResult>;
export type RerankResultsList = RerankResult[];
const RerankResultsList = /*@__PURE__*/ __L.at(__c45, 1);
export interface RerankResponse {
  results: RerankResult[];
  nextToken?: string;
}
const RerankResponse = /*@__PURE__*/ __L.at(__c45, 2) as any as S.Schema<RerankResponse>;
export type KnowledgeBaseQueryType = "TEXT" | "IMAGE" | (string & {});
const KnowledgeBaseQueryType = S.String;

export type InputImageFormat = "png" | "jpeg" | "gif" | "webp" | (string & {});
const InputImageFormat = S.String;

export interface InputImage {
  format: InputImageFormat;
  inlineContent: Uint8Array | redacted.Redacted<Uint8Array>;
}
const InputImage = /*@__PURE__*/ __L.at(__c45, 3) as any as S.Schema<InputImage>;
export interface KnowledgeBaseQuery {
  type?: KnowledgeBaseQueryType;
  text?: string;
  image?: InputImage;
}
const KnowledgeBaseQuery = /*@__PURE__*/ __L.at(__c45, 4) as any as S.Schema<KnowledgeBaseQuery>;
export interface GuardrailConfiguration {
  guardrailId: string;
  guardrailVersion: string;
}
const GuardrailConfiguration = /*@__PURE__*/ __L.at(
  __c45,
  5,
) as any as S.Schema<GuardrailConfiguration>;
export interface RetrieveRequest {
  knowledgeBaseId: string;
  retrievalQuery: KnowledgeBaseQuery;
  retrievalConfiguration?: KnowledgeBaseRetrievalConfiguration;
  guardrailConfiguration?: GuardrailConfiguration;
  nextToken?: string;
  userContext?: UserContext;
}
const RetrieveRequest = /*@__PURE__*/ __L.at(__c45, 6) as any as S.Schema<RetrieveRequest>;
export interface KnowledgeBaseRetrievalResult {
  content: RetrievalResultContent;
  location?: RetrievalResultLocation;
  score?: number;
  metadata?: { [key: string]: any | undefined };
  documentId?: string;
}
const KnowledgeBaseRetrievalResult = /*@__PURE__*/ __L.at(
  __c45,
  7,
) as any as S.Schema<KnowledgeBaseRetrievalResult>;
export type KnowledgeBaseRetrievalResults = KnowledgeBaseRetrievalResult[];
const KnowledgeBaseRetrievalResults = /*@__PURE__*/ __L.at(__c46, 0);
export type GuadrailAction = "INTERVENED" | "NONE" | (string & {});
const GuadrailAction = S.String;

export interface RetrieveResponse {
  retrievalResults: KnowledgeBaseRetrievalResult[];
  guardrailAction?: GuadrailAction;
  nextToken?: string;
}
const RetrieveResponse = /*@__PURE__*/ __L.at(__c46, 1) as any as S.Schema<RetrieveResponse>;
export interface RetrieveAndGenerateInput {
  text: string;
}
const RetrieveAndGenerateInput = /*@__PURE__*/ __L.at(
  __c46,
  2,
) as any as S.Schema<RetrieveAndGenerateInput>;
export type RetrieveAndGenerateType = "KNOWLEDGE_BASE" | "EXTERNAL_SOURCES" | (string & {});
const RetrieveAndGenerateType = S.String;

export type TextPromptTemplate = string | redacted.Redacted<string>;
export interface PromptTemplate {
  textPromptTemplate?: string | redacted.Redacted<string>;
}
const PromptTemplate = /*@__PURE__*/ __L.at(__c46, 3) as any as S.Schema<PromptTemplate>;
export type MaxTokens = number;
export type RAGStopSequences = string[];
const RAGStopSequences =
  AgenticRetrieveMemoryMetadataStringList as any as S.Schema<RAGStopSequences>;
export interface TextInferenceConfig {
  temperature?: number;
  topP?: number;
  maxTokens?: number;
  stopSequences?: string[];
}
const TextInferenceConfig = /*@__PURE__*/ __L.at(__c46, 4) as any as S.Schema<TextInferenceConfig>;
export interface InferenceConfig {
  textInferenceConfig?: TextInferenceConfig;
}
const InferenceConfig = /*@__PURE__*/ __L.at(__c46, 5) as any as S.Schema<InferenceConfig>;
export interface GenerationConfiguration {
  promptTemplate?: PromptTemplate;
  guardrailConfiguration?: GuardrailConfiguration;
  inferenceConfig?: InferenceConfig;
  additionalModelRequestFields?: { [key: string]: any | undefined };
  performanceConfig?: PerformanceConfiguration;
}
const GenerationConfiguration = /*@__PURE__*/ __L.at(
  __c46,
  6,
) as any as S.Schema<GenerationConfiguration>;
export type QueryTransformationType = "QUERY_DECOMPOSITION" | (string & {});
const QueryTransformationType = S.String;

export interface QueryTransformationConfiguration {
  type: QueryTransformationType;
}
const QueryTransformationConfiguration = /*@__PURE__*/ __L.at(
  __c46,
  7,
) as any as S.Schema<QueryTransformationConfiguration>;
export interface OrchestrationConfiguration {
  promptTemplate?: PromptTemplate;
  inferenceConfig?: InferenceConfig;
  additionalModelRequestFields?: { [key: string]: any | undefined };
  queryTransformationConfiguration?: QueryTransformationConfiguration;
  performanceConfig?: PerformanceConfiguration;
}
const OrchestrationConfiguration = /*@__PURE__*/ __L.at(
  __c47,
  0,
) as any as S.Schema<OrchestrationConfiguration>;
export interface KnowledgeBaseRetrieveAndGenerateConfiguration {
  knowledgeBaseId: string;
  modelArn: string;
  retrievalConfiguration?: KnowledgeBaseRetrievalConfiguration;
  generationConfiguration?: GenerationConfiguration;
  orchestrationConfiguration?: OrchestrationConfiguration;
}
const KnowledgeBaseRetrieveAndGenerateConfiguration = /*@__PURE__*/ __L.at(
  __c47,
  1,
) as any as S.Schema<KnowledgeBaseRetrieveAndGenerateConfiguration>;
export type ExternalSourceType = "S3" | "BYTE_CONTENT" | (string & {});
const ExternalSourceType = S.String;

export interface S3ObjectDoc {
  uri: string;
}
const S3ObjectDoc = S3Location as any as S.Schema<S3ObjectDoc>;
export type Identifier = string | redacted.Redacted<string>;
export type ContentType = string;
export interface ByteContentDoc {
  identifier: string | redacted.Redacted<string>;
  contentType: string;
  data: Uint8Array | redacted.Redacted<Uint8Array>;
}
const ByteContentDoc = /*@__PURE__*/ __L.at(__c47, 2) as any as S.Schema<ByteContentDoc>;
export interface ExternalSource {
  sourceType: ExternalSourceType;
  s3Location?: S3ObjectDoc;
  byteContent?: ByteContentDoc;
}
const ExternalSource = /*@__PURE__*/ __L.at(__c47, 3) as any as S.Schema<ExternalSource>;
export type ExternalSources = ExternalSource[];
const ExternalSources = /*@__PURE__*/ __L.at(__c47, 4);
export interface ExternalSourcesGenerationConfiguration {
  promptTemplate?: PromptTemplate;
  guardrailConfiguration?: GuardrailConfiguration;
  inferenceConfig?: InferenceConfig;
  additionalModelRequestFields?: { [key: string]: any | undefined };
  performanceConfig?: PerformanceConfiguration;
}
const ExternalSourcesGenerationConfiguration = /*@__PURE__*/ __L.at(
  __c47,
  5,
) as any as S.Schema<ExternalSourcesGenerationConfiguration>;
export interface ExternalSourcesRetrieveAndGenerateConfiguration {
  modelArn: string;
  sources: ExternalSource[];
  generationConfiguration?: ExternalSourcesGenerationConfiguration;
}
const ExternalSourcesRetrieveAndGenerateConfiguration = /*@__PURE__*/ __L.at(
  __c47,
  6,
) as any as S.Schema<ExternalSourcesRetrieveAndGenerateConfiguration>;
export interface RetrieveAndGenerateConfiguration {
  type: RetrieveAndGenerateType;
  knowledgeBaseConfiguration?: KnowledgeBaseRetrieveAndGenerateConfiguration;
  externalSourcesConfiguration?: ExternalSourcesRetrieveAndGenerateConfiguration;
}
const RetrieveAndGenerateConfiguration = /*@__PURE__*/ __L.at(
  __c47,
  7,
) as any as S.Schema<RetrieveAndGenerateConfiguration>;
export interface RetrieveAndGenerateSessionConfiguration {
  kmsKeyArn: string;
}
const RetrieveAndGenerateSessionConfiguration = /*@__PURE__*/ __L.at(
  __c48,
  0,
) as any as S.Schema<RetrieveAndGenerateSessionConfiguration>;
export interface RetrieveAndGenerateRequest {
  sessionId?: string;
  input: RetrieveAndGenerateInput;
  retrieveAndGenerateConfiguration?: RetrieveAndGenerateConfiguration;
  sessionConfiguration?: RetrieveAndGenerateSessionConfiguration;
  userContext?: UserContext;
}
const RetrieveAndGenerateRequest = /*@__PURE__*/ __L.at(
  __c48,
  1,
) as any as S.Schema<RetrieveAndGenerateRequest>;
export interface RetrieveAndGenerateOutput {
  text: string;
}
const RetrieveAndGenerateOutput =
  AgenticRetrieveResponseEvent as any as S.Schema<RetrieveAndGenerateOutput>;
export interface RetrieveAndGenerateResponse {
  sessionId: string;
  output: RetrieveAndGenerateOutput;
  citations?: Citation[];
  guardrailAction?: GuadrailAction;
}
const RetrieveAndGenerateResponse = /*@__PURE__*/ __L.at(
  __c48,
  2,
) as any as S.Schema<RetrieveAndGenerateResponse>;
export interface RetrieveAndGenerateStreamRequest {
  sessionId?: string;
  input: RetrieveAndGenerateInput;
  retrieveAndGenerateConfiguration?: RetrieveAndGenerateConfiguration;
  sessionConfiguration?: RetrieveAndGenerateSessionConfiguration;
  userContext?: UserContext;
}
const RetrieveAndGenerateStreamRequest = /*@__PURE__*/ __L.at(
  __c48,
  3,
) as any as S.Schema<RetrieveAndGenerateStreamRequest>;
export interface RetrieveAndGenerateOutputEvent {
  text: string;
}
const RetrieveAndGenerateOutputEvent =
  AgenticRetrieveResponseEvent as any as S.Schema<RetrieveAndGenerateOutputEvent>;
export interface CitationEvent {
  citation?: Citation;
  generatedResponsePart?: GeneratedResponsePart;
  retrievedReferences?: RetrievedReference[];
}
const CitationEvent = /*@__PURE__*/ __L.at(__c48, 4) as any as S.Schema<CitationEvent>;
export interface GuardrailEvent {
  action?: GuadrailAction;
}
const GuardrailEvent = /*@__PURE__*/ __L.at(__c48, 5) as any as S.Schema<GuardrailEvent>;
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
const RetrieveAndGenerateStreamResponseOutput = /*@__PURE__*/ __L.at(__c48, 6) as any as S.Schema<
  stream.Stream<RetrieveAndGenerateStreamResponseOutput, Error, never>
>;
export interface RetrieveAndGenerateStreamResponse {
  stream: stream.Stream<RetrieveAndGenerateStreamResponseOutput, Error, never>;
  sessionId: string;
}
const RetrieveAndGenerateStreamResponse = /*@__PURE__*/ __L.at(
  __c48,
  7,
) as any as S.Schema<RetrieveAndGenerateStreamResponse>;
export type FlowExecutionName = string;
export interface StartFlowExecutionRequest {
  flowIdentifier: string;
  flowAliasIdentifier: string;
  flowExecutionName?: string;
  inputs: FlowInput[];
  modelPerformanceConfiguration?: ModelPerformanceConfiguration;
}
const StartFlowExecutionRequest = /*@__PURE__*/ __L.at(
  __c49,
  0,
) as any as S.Schema<StartFlowExecutionRequest>;
export interface StartFlowExecutionResponse {
  executionArn?: string;
}
const StartFlowExecutionResponse = /*@__PURE__*/ __L.at(
  __c49,
  1,
) as any as S.Schema<StartFlowExecutionResponse>;
export interface StopFlowExecutionRequest {
  flowIdentifier: string;
  flowAliasIdentifier: string;
  executionIdentifier: string;
}
const StopFlowExecutionRequest = /*@__PURE__*/ __L.at(
  __c49,
  2,
) as any as S.Schema<StopFlowExecutionRequest>;
export interface StopFlowExecutionResponse {
  executionArn?: string;
  status: FlowExecutionStatus;
}
const StopFlowExecutionResponse = /*@__PURE__*/ __L.at(
  __c49,
  3,
) as any as S.Schema<StopFlowExecutionResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c49, 4) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DeleteAgentMemoryResponse as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = AgenticRetrieveMemoryMetadataStringList as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c49,
  5,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = DeleteAgentMemoryResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateSessionRequest {
  sessionMetadata?: { [key: string]: string | undefined };
  sessionIdentifier: string;
}
const UpdateSessionRequest = /*@__PURE__*/ __L.at(
  __c49,
  6,
) as any as S.Schema<UpdateSessionRequest>;
export interface UpdateSessionResponse {
  sessionId: string;
  sessionArn: string;
  sessionStatus: SessionStatus;
  createdAt: Date;
  lastUpdatedAt: Date;
}
const UpdateSessionResponse = SessionSummary as any as S.Schema<UpdateSessionResponse>;
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
  input: AgenticRetrieveStreamRequest,
  output: AgenticRetrieveStreamResponse,
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
  input: CheckIngestedDocumentAclRequest,
  output: CheckIngestedDocumentAclResponse,
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
  input: CreateInvocationRequest,
  output: CreateInvocationResponse,
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
  input: CreateSessionRequest,
  output: CreateSessionResponse,
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
  input: DeleteAgentMemoryRequest,
  output: DeleteAgentMemoryResponse,
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
  input: DeleteSessionRequest,
  output: DeleteSessionResponse,
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
  input: EndSessionRequest,
  output: EndSessionResponse,
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
  input: GenerateQueryRequest,
  output: GenerateQueryResponse,
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
  input: GetAgentMemoryRequest,
  output: GetAgentMemoryResponse,
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
  input: GetDocumentContentRequest,
  output: GetDocumentContentResponse,
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
  input: GetExecutionFlowSnapshotRequest,
  output: GetExecutionFlowSnapshotResponse,
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
  input: GetFlowExecutionRequest,
  output: GetFlowExecutionResponse,
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
  input: GetIngestedDocumentAclRequest,
  output: GetIngestedDocumentAclResponse,
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
  input: GetInvocationStepRequest,
  output: GetInvocationStepResponse,
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
  input: GetSessionRequest,
  output: GetSessionResponse,
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
  input: InvokeAgentRequest,
  output: InvokeAgentResponse,
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
  input: InvokeFlowRequest,
  output: InvokeFlowResponse,
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
  input: InvokeInlineAgentRequest,
  output: InvokeInlineAgentResponse,
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
  input: ListFlowExecutionEventsRequest,
  output: ListFlowExecutionEventsResponse,
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
  input: ListFlowExecutionsRequest,
  output: ListFlowExecutionsResponse,
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
  input: ListInvocationsRequest,
  output: ListInvocationsResponse,
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
  input: ListInvocationStepsRequest,
  output: ListInvocationStepsResponse,
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
  input: ListSessionsRequest,
  output: ListSessionsResponse,
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
  input: OptimizePromptRequest,
  output: OptimizePromptResponse,
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
  input: PutInvocationStepRequest,
  output: PutInvocationStepResponse,
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
  input: RerankRequest,
  output: RerankResponse,
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
  input: RetrieveRequest,
  output: RetrieveResponse,
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
  input: RetrieveAndGenerateRequest,
  output: RetrieveAndGenerateResponse,
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
  input: RetrieveAndGenerateStreamRequest,
  output: RetrieveAndGenerateStreamResponse,
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
  input: StartFlowExecutionRequest,
  output: StartFlowExecutionResponse,
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
  input: StopFlowExecutionRequest,
  output: StopFlowExecutionResponse,
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
  input: UpdateSessionRequest,
  output: UpdateSessionResponse,
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
      return S.suspend(() =>
        S.Struct({ content: AgenticRetrieveMessageContent, role: ConversationRole }),
      ).annotate({ identifier: "AgenticRetrieveMessage" });
    case 2:
      return S.Array(AgenticRetrieveMessage);
    case 3:
      return S.suspend(() => S.Struct({ key: S.String, value: S.Any })).annotate({
        identifier: "FilterAttribute",
      });
    case 4:
      return S.Array(
        /*@__PURE__*/ S.suspend(() => RetrievalFilter).annotate({ identifier: "RetrievalFilter" }),
      );
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ equals: FilterAttribute }),
        /*@__PURE__*/ S.Struct({ notEquals: FilterAttribute }),
        /*@__PURE__*/ S.Struct({ greaterThan: FilterAttribute }),
        /*@__PURE__*/ S.Struct({ greaterThanOrEquals: FilterAttribute }),
        /*@__PURE__*/ S.Struct({ lessThan: FilterAttribute }),
        /*@__PURE__*/ S.Struct({ lessThanOrEquals: FilterAttribute }),
        /*@__PURE__*/ S.Struct({ in: FilterAttribute }),
        /*@__PURE__*/ S.Struct({ notIn: FilterAttribute }),
        /*@__PURE__*/ S.Struct({ startsWith: FilterAttribute }),
        /*@__PURE__*/ S.Struct({ listContains: FilterAttribute }),
        /*@__PURE__*/ S.Struct({ stringContains: FilterAttribute }),
        /*@__PURE__*/ S.Struct({
          andAll: /*@__PURE__*/ S.suspend(() => RetrievalFilterList).annotate({
            identifier: "RetrievalFilterList",
          }),
        }),
        /*@__PURE__*/ S.Struct({
          orAll: /*@__PURE__*/ S.suspend(() => RetrievalFilterList).annotate({
            identifier: "RetrievalFilterList",
          }),
        }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({ filter: S.optional(RetrievalFilter), maxNumberOfResults: S.optional(S.Number) }),
      ).annotate({ identifier: "RetrievalOverrides" });
    case 7:
      return S.suspend(() =>
        S.Struct({ knowledgeBaseId: S.String, retrievalOverrides: S.optional(RetrievalOverrides) }),
      ).annotate({
        identifier: "KnowledgeBaseRetrieverConfiguration",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ knowledgeBase: KnowledgeBaseRetrieverConfiguration }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({ description: S.optional(S.String), configuration: RetrieverConfiguration }),
      ).annotate({ identifier: "AgenticRetriever" });
    case 2:
      return S.Array(AgenticRetriever);
    case 3:
      return S.suspend(() => S.Struct({ modelArn: S.String })).annotate({
        identifier: "BedrockFoundationModelModelConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ modelConfiguration: BedrockFoundationModelModelConfiguration }),
      ).annotate({
        identifier: "BedrockFoundationModelConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ modelArn: S.String, projectId: S.optional(S.String) }),
      ).annotate({
        identifier: "MantleFoundationModelModelConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ modelConfiguration: MantleFoundationModelModelConfiguration }),
      ).annotate({
        identifier: "MantleFoundationModelConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          type: FoundationModelConfigurationType,
          bedrockFoundationModelConfiguration: S.optional(BedrockFoundationModelConfiguration),
          mantleFoundationModelConfiguration: S.optional(MantleFoundationModelConfiguration),
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
          type: AgenticRetrieveRerankingConfigurationType,
          bedrockRerankingConfiguration: S.optional(AgenticRetrieveBedrockRerankingConfiguration),
        }),
      ).annotate({
        identifier: "AgenticRetrieveRerankingConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          foundationModelType: S.optional(FoundationModelType),
          foundationModelConfiguration: S.optional(FoundationModelConfiguration),
          rerankingModelType: S.optional(AgenticRetrieveRerankingModelType),
          rerankingConfiguration: S.optional(AgenticRetrieveRerankingConfiguration),
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
          bedrockGuardrailConfiguration: S.optional(AgenticRetrieveBedrockGuardrailConfiguration),
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
        /*@__PURE__*/ S.Struct({ stringListValue: AgenticRetrieveMemoryMetadataStringList }),
        /*@__PURE__*/ S.Struct({
          dateTimeValue: /*@__PURE__*/ S.Date.pipe(
            /*@__PURE__*/ T.TimestampFormat("epoch-seconds"),
          ),
        }),
      ]);
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ metadataValue: AgenticRetrieveMemoryMetadataValue }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          left: AgenticRetrieveMemoryMetadataFilterLeft,
          operator: AgenticRetrieveMemoryMetadataFilterOperator,
          right: S.optional(AgenticRetrieveMemoryMetadataFilterRight),
        }),
      ).annotate({
        identifier: "AgenticRetrieveMemoryMetadataFilter",
      });
    case 3:
      return S.Array(AgenticRetrieveMemoryMetadataFilter);
    case 4:
      return S.suspend(() =>
        S.Struct({
          namespace: S.optional(S.String),
          namespacePath: S.optional(S.String),
          strategyId: S.optional(S.String),
          metadataFilters: S.optional(AgenticRetrieveMemoryMetadataFilterList),
        }),
      ).annotate({
        identifier: "AgenticRetrieveMemoryRetrievalConfig",
      });
    case 5:
      return S.Array(AgenticRetrieveMemoryRetrievalConfig);
    case 6:
      return S.suspend(() =>
        S.Struct({
          memoryId: S.String,
          sessionBinding: S.optional(AgenticRetrieveMemorySessionBinding),
          retrievalConfigs: S.optional(AgenticRetrieveMemoryRetrievalConfigList),
          persistenceMode: S.optional(AgenticRetrieveMemoryPersistenceMode),
        }),
      ).annotate({
        identifier: "AgenticRetrieveMemoryConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          messages: AgenticRetrieveMessages,
          retrievers: AgenticRetrievers,
          agenticRetrieveConfiguration: AgenticRetrieveConfiguration,
          policyConfiguration: S.optional(AgenticRetrievePolicyConfiguration),
          nextToken: S.optional(S.String),
          userContext: S.optional(UserContext),
          memoryConfiguration: S.optional(AgenticRetrieveMemoryConfiguration),
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
          content: RetrievalContent,
          metadata: S.optional(AgenticRetrieveMetadata),
          sourceRetriever: AgenticRetrieveSourceRetriever,
        }),
      ).annotate({
        identifier: "AgenticRetrieveResultItem",
      });
    case 4:
      return S.Array(AgenticRetrieveResultItem);
    case 5:
      return S.suspend(() => S.Struct({ resultIndex: S.Number })).annotate({
        identifier: "AgenticRetrieveCitationReference",
      });
    case 6:
      return S.Array(AgenticRetrieveCitationReference);
    case 7:
      return S.suspend(() =>
        S.Struct({
          startIndex: S.Number,
          endIndex: S.Number,
          references: AgenticRetrieveCitationReferenceList,
        }),
      ).annotate({ identifier: "AgenticRetrieveCitation" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AgenticRetrieveCitation);
    case 1:
      return S.suspend(() =>
        S.Struct({ answer: S.String, citations: S.optional(AgenticRetrieveCitationList) }),
      ).annotate({
        identifier: "AgenticRetrieveGeneratedResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          results: AgenticRetrieveResults,
          generatedResponse: S.optional(AgenticRetrieveGeneratedResponse),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AgenticRetrieveResultEvent",
      });
    case 3:
      return S.Array(AgenticRetrieveSourceRetriever);
    case 4:
      return S.suspend(() =>
        S.Struct({
          inputQuery: AgenticRetrieveMessageContent,
          sourceRetrievers: AgenticRetrieveSourceRetrieverList,
        }),
      ).annotate({
        identifier: "AgenticRetrieveActionDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          documentId: S.optional(S.String),
          sourceRetriever: S.optional(AgenticRetrieveSourceRetriever),
        }),
      ).annotate({
        identifier: "AgenticRetrieveFullDocExpansionDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          inputQuery: AgenticRetrieveMessageContent,
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
          retrieve: S.optional(AgenticRetrieveActionDetails),
          fullDocumentExpansion: S.optional(AgenticRetrieveFullDocExpansionDetails),
          memoryRetrieve: S.optional(AgenticRetrieveMemoryRetrieveDetails),
        }),
      ).annotate({ identifier: "AgenticRetrieveAction" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AgenticRetrieveAction);
    case 1:
      return S.suspend(() => S.Struct({ message: S.String })).annotate({
        identifier: "AgenticRetrieveWarningMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          version: S.String,
          action: GuardrailAction,
          message: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AgenticRetrieveGuardrailWarning",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ message: AgenticRetrieveWarningMessage }),
        /*@__PURE__*/ S.Struct({ guardrail: AgenticRetrieveGuardrailWarning }),
      ]);
    case 4:
      return S.Array(AgenticRetrieveWarning);
    case 5:
      return S.suspend(() => S.Struct({ message: S.String })).annotate({
        identifier: "AgenticRetrieveFailure",
      });
    case 6:
      return S.Array(AgenticRetrieveFailure);
    case 7:
      return S.suspend(() =>
        S.Struct({
          identifier: S.optional(S.String),
          retrievalType: S.optional(AgenticRetrieveType),
        }),
      ).annotate({
        identifier: "AgenticRetrieveSourceMetadata",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AgenticRetrieveSourceMetadata);
    case 1:
      return S.suspend(() =>
        S.Struct({
          content: S.optional(RetrievalContent),
          metadata: S.optional(AgenticRetrieveMetadata),
          sourceRetriever: S.optional(AgenticRetrieveSourceRetriever),
        }),
      ).annotate({
        identifier: "AgenticRetrieveTraceResultItem",
      });
    case 2:
      return S.Array(AgenticRetrieveTraceResultItem);
    case 3:
      return S.suspend(() =>
        S.Struct({
          step: AgenticRetrieveStep,
          status: AgenticRetrieveStatus,
          message: S.String,
          actions: S.optional(AgenticRetrieveActions),
          warnings: S.optional(AgenticRetrieveWarnings),
          failures: S.optional(AgenticRetrieveFailures),
          retrievalMetadata: S.optional(AgenticRetrieveSourceMetadataList),
          retrievalResponse: S.optional(AgenticRetrieveTraceResults),
        }),
      ).annotate({
        identifier: "AgenticRetrieveTraceEventAttributes",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          timestamp: S.Number,
          attributes: AgenticRetrieveTraceEventAttributes,
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
          /*@__PURE__*/ S.Struct({ result: AgenticRetrieveResultEvent }),
          /*@__PURE__*/ S.Struct({ traceEvent: AgenticRetrieveTraceEvent }),
          /*@__PURE__*/ S.Struct({ responseEvent: AgenticRetrieveResponseEvent }),
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
        S.Struct({ stream: AgenticRetrieveStreamResponseOutput.pipe(T.HttpPayload()) }),
      ).annotate({
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
          userContext: UserContext,
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
          sessionMetadata: S.optional(SessionMetadataMap),
          encryptionKeyArn: S.optional(S.String),
          tags: S.optional(TagsMap),
        }).pipe(T.all(T.Http({ method: "PUT", uri: "/sessions/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateSessionRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.String,
          sessionArn: S.String,
          sessionStatus: SessionStatus,
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
        S.Struct({ sessionId: S.String, sessionArn: S.String, sessionStatus: SessionStatus }),
      ).annotate({ identifier: "EndSessionResponse" });
    case 5:
      return S.suspend(() => S.Struct({ type: InputQueryType, text: S.String })).annotate({
        identifier: "QueryGenerationInput",
      });
    case 6:
      return S.suspend(() => S.Struct({ knowledgeBaseArn: S.String })).annotate({
        identifier: "TextToSqlKnowledgeBaseConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          type: TextToSqlConfigurationType,
          knowledgeBaseConfiguration: S.optional(TextToSqlKnowledgeBaseConfiguration),
        }),
      ).annotate({ identifier: "TextToSqlConfiguration" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          mode: QueryTransformationMode,
          textToSqlConfiguration: S.optional(TextToSqlConfiguration),
        }),
      ).annotate({
        identifier: "TransformationConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          queryGenerationInput: QueryGenerationInput,
          transformationConfiguration: TransformationConfiguration,
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/generateQuery" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GenerateQueryRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ type: S.optional(GeneratedQueryType), sql: S.optional(S.String) }),
      ).annotate({ identifier: "GeneratedQuery" });
    case 3:
      return S.Array(GeneratedQuery);
    case 4:
      return S.suspend(() => S.Struct({ queries: S.optional(GeneratedQueries) })).annotate({
        identifier: "GenerateQueryResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxItems: S.optional(S.Number).pipe(T.HttpQuery("maxItems")),
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          agentAliasId: S.String.pipe(T.HttpLabel("agentAliasId")),
          memoryType: MemoryType.pipe(T.HttpQuery("memoryType")),
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
      return S.Union([/*@__PURE__*/ S.Struct({ sessionSummary: MemorySessionSummary })]);
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(Memory);
    case 1:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), memoryContents: S.optional(Memories) }),
      ).annotate({ identifier: "GetAgentMemoryResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
          dataSourceId: S.String.pipe(T.HttpLabel("dataSourceId")),
          documentId: S.String.pipe(T.HttpLabel("documentId")),
          outputFormat: S.optional(DocumentOutputFormat),
          userContext: S.optional(UserContext),
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
          error: S.optional(FlowExecutionErrorType),
          message: S.optional(S.String),
        }),
      ).annotate({ identifier: "FlowExecutionError" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Array(FlowExecutionError);
    case 1:
      return S.suspend(() =>
        S.Struct({
          executionArn: S.String,
          status: FlowExecutionStatus,
          startedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          endedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          errors: S.optional(FlowExecutionErrors),
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
      return S.suspend(() => S.Struct({ id: S.String, type: DocumentAclMembershipType })).annotate({
        identifier: "DocumentAclUser",
      });
    case 4:
      return S.Array(DocumentAclUser);
    case 5:
      return S.suspend(() =>
        S.Struct({
          conditionOperator: S.optional(DocumentAclMemberRelation),
          users: S.optional(DocumentAclUserList),
          groups: S.optional(DocumentAclGroupList),
        }),
      ).annotate({ identifier: "DocumentAclCondition" });
    case 6:
      return S.Array(DocumentAclCondition);
    case 7:
      return S.suspend(() =>
        S.Struct({
          memberRelation: S.optional(DocumentAclMemberRelation),
          conditions: S.optional(DocumentAclConditionList),
        }),
      ).annotate({ identifier: "DocumentAclMembership" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          allowList: S.optional(DocumentAclMembership),
          denyList: S.optional(DocumentAclMembership),
        }),
      ).annotate({ identifier: "DocumentAcl" });
    case 1:
      return S.suspend(() => S.Struct({ documentAcl: DocumentAcl })).annotate({
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
        /*@__PURE__*/ S.Struct({ s3Location: S3Location }),
      ]);
    case 5:
      return S.suspend(() => S.Struct({ format: ImageFormat, source: ImageSource })).annotate({
        identifier: "ImageBlock",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ text: S.String }),
        /*@__PURE__*/ S.Struct({ image: ImageBlock }),
      ]);
    case 7:
      return S.Array(BedrockSessionContentBlock);
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ contentBlocks: BedrockSessionContentBlocks })]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.String,
          invocationId: S.String,
          invocationStepId: S.String,
          invocationStepTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          payload: InvocationStepPayload,
        }),
      ).annotate({ identifier: "InvocationStep" });
    case 2:
      return S.suspend(() => S.Struct({ invocationStep: InvocationStep })).annotate({
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
          sessionStatus: SessionStatus,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          sessionMetadata: S.optional(SessionMetadataMap),
          encryptionKeyArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetSessionResponse" });
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ bytes: T.Blob })]);
    case 6:
      return S.suspend(() =>
        S.Struct({ format: ImageInputFormat, source: ImageInputSource }),
      ).annotate({ identifier: "ImageInput" });
    case 7:
      return S.Array(ImageInput);
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ body: S.optional(S.String), images: S.optional(ImageInputs) }),
      ).annotate({ identifier: "ContentBody" });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ ContentBody.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          actionGroup: S.String,
          httpMethod: S.optional(S.String),
          apiPath: S.optional(SensitiveString),
          confirmationState: S.optional(ConfirmationState),
          responseState: S.optional(ResponseState),
          httpStatusCode: S.optional(S.Number),
          responseBody: S.optional(ResponseBody),
          agentId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ApiResult" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          actionGroup: S.String,
          confirmationState: S.optional(ConfirmationState),
          function: S.optional(S.String),
          responseBody: S.optional(ResponseBody),
          responseState: S.optional(ResponseState),
          agentId: S.optional(S.String),
        }),
      ).annotate({ identifier: "FunctionResult" });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ apiResult: ApiResult }),
        /*@__PURE__*/ S.Struct({ functionResult: FunctionResult }),
      ]);
    case 5:
      return S.Array(InvocationResultMember);
    case 6:
      return S.suspend(() => S.Struct({ mediaType: S.String, data: SensitiveBlob })).annotate({
        identifier: "ByteContentFile",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          sourceType: FileSourceType,
          s3Location: S.optional(S3ObjectFile),
          byteContent: S.optional(ByteContentFile),
        }),
      ).annotate({ identifier: "FileSource" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ name: S.String, source: FileSource, useCase: FileUseCase }),
      ).annotate({ identifier: "InputFile" });
    case 1:
      return S.Array(InputFile);
    case 2:
      return S.suspend(() =>
        S.Struct({
          modelArn: S.String,
          additionalModelRequestFields: S.optional(AdditionalModelRequestFields),
        }),
      ).annotate({
        identifier: "VectorSearchBedrockRerankingModelConfiguration",
      });
    case 3:
      return S.suspend(() => S.Struct({ fieldName: S.String })).annotate({
        identifier: "FieldForReranking",
      });
    case 4:
      return S.Array(FieldForReranking);
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ fieldsToInclude: FieldsForReranking }),
        /*@__PURE__*/ S.Struct({ fieldsToExclude: FieldsForReranking }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          selectionMode: RerankingMetadataSelectionMode,
          selectiveModeConfiguration: S.optional(RerankingMetadataSelectiveModeConfiguration),
        }),
      ).annotate({
        identifier: "MetadataConfigurationForReranking",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          modelConfiguration: VectorSearchBedrockRerankingModelConfiguration,
          numberOfRerankedResults: S.optional(S.Number),
          metadataConfiguration: S.optional(MetadataConfigurationForReranking),
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
          type: VectorSearchRerankingConfigurationType,
          bedrockRerankingConfiguration: S.optional(VectorSearchBedrockRerankingConfiguration),
        }),
      ).annotate({
        identifier: "VectorSearchRerankingConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ key: S.String, type: AttributeType, description: S.String }),
      ).annotate({ identifier: "MetadataAttributeSchema" });
    case 2:
      return S.Array(MetadataAttributeSchema);
    case 3:
      return S.suspend(() =>
        S.Struct({ metadataAttributes: MetadataAttributeSchemaList, modelArn: S.String }),
      ).annotate({
        identifier: "ImplicitFilterConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          numberOfResults: S.optional(S.Number),
          overrideSearchType: S.optional(SearchType),
          filter: S.optional(RetrievalFilter),
          rerankingConfiguration: S.optional(VectorSearchRerankingConfiguration),
          implicitFilterConfiguration: S.optional(ImplicitFilterConfiguration),
        }),
      ).annotate({
        identifier: "KnowledgeBaseVectorSearchConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          type: ManagedSearchRerankingConfigurationType,
          bedrockRerankingConfiguration: S.optional(ManagedSearchBedrockRerankingConfiguration),
        }),
      ).annotate({
        identifier: "ManagedSearchRerankingConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          numberOfResults: S.optional(S.Number),
          filter: S.optional(RetrievalFilter),
          rerankingModelType: S.optional(RerankingModelType),
          rerankingConfiguration: S.optional(ManagedSearchRerankingConfiguration),
        }),
      ).annotate({
        identifier: "ManagedSearchConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          vectorSearchConfiguration: S.optional(KnowledgeBaseVectorSearchConfiguration),
          managedSearchConfiguration: S.optional(ManagedSearchConfiguration),
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
          retrievalConfiguration: KnowledgeBaseRetrievalConfiguration,
        }),
      ).annotate({
        identifier: "KnowledgeBaseConfiguration",
      });
    case 1:
      return S.Array(KnowledgeBaseConfiguration);
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ text: S.String })]);
    case 3:
      return S.Array(ContentBlock);
    case 4:
      return S.suspend(() => S.Struct({ role: ConversationRole, content: ContentBlocks })).annotate(
        { identifier: "Message" },
      );
    case 5:
      return S.Array(Message);
    case 6:
      return S.suspend(() => S.Struct({ messages: S.optional(Messages) })).annotate({
        identifier: "ConversationHistory",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          sessionAttributes: S.optional(SessionAttributesMap),
          promptSessionAttributes: S.optional(PromptSessionAttributesMap),
          returnControlInvocationResults: S.optional(ReturnControlInvocationResults),
          invocationId: S.optional(S.String),
          files: S.optional(InputFiles),
          knowledgeBaseConfigurations: S.optional(KnowledgeBaseConfigurations),
          conversationHistory: S.optional(ConversationHistory),
        }),
      ).annotate({ identifier: "SessionState" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ latency: S.optional(PerformanceConfigLatency) })).annotate({
        identifier: "PerformanceConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ performanceConfig: S.optional(PerformanceConfiguration) }),
      ).annotate({
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
          sessionState: S.optional(SessionState),
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          agentAliasId: S.String.pipe(T.HttpLabel("agentAliasId")),
          sessionId: S.String.pipe(T.HttpLabel("sessionId")),
          endSession: S.optional(S.Boolean),
          enableTrace: S.optional(S.Boolean),
          inputText: S.optional(SensitiveString),
          memoryId: S.optional(S.String),
          bedrockModelConfigurations: S.optional(BedrockModelConfigurations),
          streamingConfigurations: S.optional(StreamingConfigurations),
          promptCreationConfigurations: S.optional(PromptCreationConfigurations),
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
        S.Struct({ text: S.optional(S.String), span: S.optional(Span) }),
      ).annotate({ identifier: "TextResponsePart" });
    case 7:
      return S.suspend(() => S.Struct({ textResponsePart: S.optional(TextResponsePart) })).annotate(
        { identifier: "GeneratedResponsePart" },
      );
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
          type: S.optional(RetrievalResultContentColumnType),
        }),
      ).annotate({
        identifier: "RetrievalResultContentColumn",
      });
    case 3:
      return S.Array(RetrievalResultContentColumn);
    case 4:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(RetrievalResultContentType),
          text: S.optional(S.String),
          byteContent: S.optional(S.String),
          video: S.optional(VideoSegment),
          audio: S.optional(AudioSegment),
          row: S.optional(RetrievalResultContentRow),
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
          type: RetrievalResultLocationType,
          s3Location: S.optional(RetrievalResultS3Location),
          webLocation: S.optional(RetrievalResultWebLocation),
          confluenceLocation: S.optional(RetrievalResultConfluenceLocation),
          salesforceLocation: S.optional(RetrievalResultSalesforceLocation),
          sharePointLocation: S.optional(RetrievalResultSharePointLocation),
          customDocumentLocation: S.optional(RetrievalResultCustomDocumentLocation),
          kendraDocumentLocation: S.optional(RetrievalResultKendraDocumentLocation),
          sqlLocation: S.optional(RetrievalResultSqlLocation),
          oneDriveLocation: S.optional(RetrievalResultOneDriveLocation),
          googleDriveLocation: S.optional(RetrievalResultGoogleDriveLocation),
        }),
      ).annotate({ identifier: "RetrievalResultLocation" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          content: S.optional(RetrievalResultContent),
          location: S.optional(RetrievalResultLocation),
          metadata: S.optional(RetrievalResultMetadata),
        }),
      ).annotate({ identifier: "RetrievedReference" });
    case 3:
      return S.Array(RetrievedReference);
    case 4:
      return S.suspend(() =>
        S.Struct({
          generatedResponsePart: S.optional(GeneratedResponsePart),
          retrievedReferences: S.optional(RetrievedReferences),
        }),
      ).annotate({ identifier: "Citation" });
    case 5:
      return S.Array(Citation);
    case 6:
      return S.suspend(() => S.Struct({ citations: S.optional(Citations) })).annotate({
        identifier: "Attribution",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ bytes: S.optional(SensitiveBlob), attribution: S.optional(Attribution) }),
      ).annotate({ identifier: "PayloadPart" });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          type: S.optional(GuardrailTopicType),
          action: S.optional(GuardrailTopicPolicyAction),
        }),
      ).annotate({ identifier: "GuardrailTopic" });
    case 1:
      return S.Array(GuardrailTopic);
    case 2:
      return S.suspend(() => S.Struct({ topics: S.optional(GuardrailTopicList) })).annotate({
        identifier: "GuardrailTopicPolicyAssessment",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(GuardrailContentFilterType),
          confidence: S.optional(GuardrailContentFilterConfidence),
          action: S.optional(GuardrailContentPolicyAction),
        }),
      ).annotate({ identifier: "GuardrailContentFilter" });
    case 4:
      return S.Array(GuardrailContentFilter);
    case 5:
      return S.suspend(() =>
        S.Struct({ filters: S.optional(GuardrailContentFilterList) }),
      ).annotate({
        identifier: "GuardrailContentPolicyAssessment",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ match: S.optional(S.String), action: S.optional(GuardrailWordPolicyAction) }),
      ).annotate({ identifier: "GuardrailCustomWord" });
    case 7:
      return S.Array(GuardrailCustomWord);
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          match: S.optional(S.String),
          type: S.optional(GuardrailManagedWordType),
          action: S.optional(GuardrailWordPolicyAction),
        }),
      ).annotate({ identifier: "GuardrailManagedWord" });
    case 1:
      return S.Array(GuardrailManagedWord);
    case 2:
      return S.suspend(() =>
        S.Struct({
          customWords: S.optional(GuardrailCustomWordList),
          managedWordLists: S.optional(GuardrailManagedWordList),
        }),
      ).annotate({
        identifier: "GuardrailWordPolicyAssessment",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(GuardrailPiiEntityType),
          match: S.optional(S.String),
          action: S.optional(GuardrailSensitiveInformationPolicyAction),
        }),
      ).annotate({ identifier: "GuardrailPiiEntityFilter" });
    case 4:
      return S.Array(GuardrailPiiEntityFilter);
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          regex: S.optional(S.String),
          match: S.optional(S.String),
          action: S.optional(GuardrailSensitiveInformationPolicyAction),
        }),
      ).annotate({ identifier: "GuardrailRegexFilter" });
    case 6:
      return S.Array(GuardrailRegexFilter);
    case 7:
      return S.suspend(() =>
        S.Struct({
          piiEntities: S.optional(GuardrailPiiEntityFilterList),
          regexes: S.optional(GuardrailRegexFilterList),
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
          topicPolicy: S.optional(GuardrailTopicPolicyAssessment),
          contentPolicy: S.optional(GuardrailContentPolicyAssessment),
          wordPolicy: S.optional(GuardrailWordPolicyAssessment),
          sensitiveInformationPolicy: S.optional(GuardrailSensitiveInformationPolicyAssessment),
        }),
      ).annotate({ identifier: "GuardrailAssessment" });
    case 1:
      return S.Array(GuardrailAssessment);
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
          usage: S.optional(Usage),
        }),
      ).annotate({ identifier: "Metadata" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          action: S.optional(GuardrailAction),
          traceId: S.optional(S.String),
          inputAssessments: S.optional(GuardrailAssessmentList),
          outputAssessments: S.optional(GuardrailAssessmentList),
          metadata: S.optional(Metadata),
        }),
      ).annotate({ identifier: "GuardrailTrace" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          temperature: S.optional(S.Number),
          topP: S.optional(S.Number),
          topK: S.optional(S.Number),
          maximumLength: S.optional(S.Number),
          stopSequences: S.optional(StopSequences),
        }),
      ).annotate({ identifier: "InferenceConfiguration" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          traceId: S.optional(S.String),
          text: S.optional(SensitiveString),
          type: S.optional(PromptType),
          overrideLambda: S.optional(S.String),
          promptCreationMode: S.optional(CreationMode),
          inferenceConfiguration: S.optional(InferenceConfiguration),
          parserMode: S.optional(CreationMode),
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
        /*@__PURE__*/ S.Struct({ reasoningText: ReasoningTextBlock }),
        /*@__PURE__*/ S.Struct({ redactedContent: T.Blob }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          traceId: S.optional(S.String),
          parsedResponse: S.optional(PreProcessingParsedResponse),
          rawResponse: S.optional(RawResponse),
          metadata: S.optional(Metadata),
          reasoningContent: S.optional(ReasoningContentBlock),
        }),
      ).annotate({
        identifier: "PreProcessingModelInvocationOutput",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ modelInvocationInput: ModelInvocationInput }),
        /*@__PURE__*/ S.Struct({ modelInvocationOutput: PreProcessingModelInvocationOutput }),
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
      return S.Array(Parameter);
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ Parameters.pipe(S.optional));
    case 1:
      return S.suspend(() => S.Struct({ content: S.optional(ContentMap) })).annotate({
        identifier: "RequestBody",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          actionGroupName: S.optional(SensitiveString),
          verb: S.optional(SensitiveString),
          apiPath: S.optional(SensitiveString),
          parameters: S.optional(Parameters),
          requestBody: S.optional(RequestBody),
          function: S.optional(SensitiveString),
          executionType: S.optional(ExecutionType),
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
        S.Struct({ code: S.optional(S.String), files: S.optional(Files) }),
      ).annotate({
        identifier: "CodeInterpreterInvocationInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          invocationId: S.optional(S.String),
          returnControlInvocationResults: S.optional(ReturnControlInvocationResults),
        }),
      ).annotate({ identifier: "ReturnControlResults" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(PayloadType),
          text: S.optional(SensitiveString),
          returnControlResults: S.optional(ReturnControlResults),
        }),
      ).annotate({
        identifier: "AgentCollaboratorInputPayload",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          agentCollaboratorName: S.optional(S.String),
          agentCollaboratorAliasArn: S.optional(S.String),
          input: S.optional(AgentCollaboratorInputPayload),
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
          invocationType: S.optional(InvocationType),
          actionGroupInvocationInput: S.optional(ActionGroupInvocationInput),
          knowledgeBaseLookupInput: S.optional(KnowledgeBaseLookupInput),
          codeInterpreterInvocationInput: S.optional(CodeInterpreterInvocationInput),
          agentCollaboratorInvocationInput: S.optional(AgentCollaboratorInvocationInput),
        }),
      ).annotate({ identifier: "InvocationInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ text: S.optional(SensitiveString), metadata: S.optional(Metadata) }),
      ).annotate({
        identifier: "ActionGroupInvocationOutput",
      });
    case 2:
      return S.suspend(() => S.Struct({ properties: S.optional(ParameterList) })).annotate({
        identifier: "PropertyParameters",
      });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ PropertyParameters.pipe(S.optional));
    case 4:
      return S.suspend(() => S.Struct({ content: S.optional(ApiContentMap) })).annotate({
        identifier: "ApiRequestBody",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          actionGroup: S.String,
          httpMethod: S.optional(S.String),
          apiPath: S.optional(SensitiveString),
          parameters: S.optional(ApiParameters),
          requestBody: S.optional(ApiRequestBody),
          actionInvocationType: S.optional(ActionInvocationType),
          agentId: S.optional(S.String),
          collaboratorName: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "ApiInvocationInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          actionGroup: S.String,
          parameters: S.optional(FunctionParameters),
          function: S.optional(S.String),
          actionInvocationType: S.optional(ActionInvocationType),
          agentId: S.optional(S.String),
          collaboratorName: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "FunctionInvocationInput" });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ apiInvocationInput: ApiInvocationInput }),
        /*@__PURE__*/ S.Struct({ functionInvocationInput: FunctionInvocationInput }),
      ]);
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.Array(InvocationInputMember);
    case 1:
      return S.suspend(() =>
        S.Struct({
          invocationInputs: S.optional(InvocationInputs),
          invocationId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ReturnControlPayload" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(PayloadType),
          text: S.optional(SensitiveString),
          returnControlPayload: S.optional(ReturnControlPayload),
        }),
      ).annotate({
        identifier: "AgentCollaboratorOutputPayload",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          agentCollaboratorName: S.optional(S.String),
          agentCollaboratorAliasArn: S.optional(S.String),
          output: S.optional(AgentCollaboratorOutputPayload),
          metadata: S.optional(Metadata),
        }),
      ).annotate({
        identifier: "AgentCollaboratorInvocationOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          retrievedReferences: S.optional(RetrievedReferences),
          metadata: S.optional(Metadata),
        }),
      ).annotate({
        identifier: "KnowledgeBaseLookupOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ text: S.optional(SensitiveString), metadata: S.optional(Metadata) }),
      ).annotate({ identifier: "FinalResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ text: S.optional(S.String), source: S.optional(Source) }),
      ).annotate({ identifier: "RepromptResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          executionOutput: S.optional(S.String),
          executionError: S.optional(S.String),
          files: S.optional(Files),
          executionTimeout: S.optional(S.Boolean),
          metadata: S.optional(Metadata),
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
          type: S.optional(Type),
          actionGroupInvocationOutput: S.optional(ActionGroupInvocationOutput),
          agentCollaboratorInvocationOutput: S.optional(AgentCollaboratorInvocationOutput),
          knowledgeBaseLookupOutput: S.optional(KnowledgeBaseLookupOutput),
          finalResponse: S.optional(FinalResponse),
          repromptResponse: S.optional(RepromptResponse),
          codeInterpreterInvocationOutput: S.optional(CodeInterpreterInvocationOutput),
        }),
      ).annotate({ identifier: "Observation" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          traceId: S.optional(S.String),
          rawResponse: S.optional(RawResponse),
          metadata: S.optional(Metadata),
          reasoningContent: S.optional(ReasoningContentBlock),
        }),
      ).annotate({
        identifier: "OrchestrationModelInvocationOutput",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ rationale: Rationale }),
        /*@__PURE__*/ S.Struct({ invocationInput: InvocationInput }),
        /*@__PURE__*/ S.Struct({ observation: Observation }),
        /*@__PURE__*/ S.Struct({ modelInvocationInput: ModelInvocationInput }),
        /*@__PURE__*/ S.Struct({ modelInvocationOutput: OrchestrationModelInvocationOutput }),
      ]);
    case 3:
      return S.suspend(() => S.Struct({ text: S.optional(SensitiveString) })).annotate({
        identifier: "PostProcessingParsedResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          traceId: S.optional(S.String),
          parsedResponse: S.optional(PostProcessingParsedResponse),
          rawResponse: S.optional(RawResponse),
          metadata: S.optional(Metadata),
          reasoningContent: S.optional(ReasoningContentBlock),
        }),
      ).annotate({
        identifier: "PostProcessingModelInvocationOutput",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ modelInvocationInput: ModelInvocationInput }),
        /*@__PURE__*/ S.Struct({ modelInvocationOutput: PostProcessingModelInvocationOutput }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          traceId: S.optional(S.String),
          rawResponse: S.optional(RawResponse),
          metadata: S.optional(Metadata),
        }),
      ).annotate({
        identifier: "RoutingClassifierModelInvocationOutput",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ invocationInput: InvocationInput }),
        /*@__PURE__*/ S.Struct({ observation: Observation }),
        /*@__PURE__*/ S.Struct({ modelInvocationInput: ModelInvocationInput }),
        /*@__PURE__*/ S.Struct({ modelInvocationOutput: RoutingClassifierModelInvocationOutput }),
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
          metadata: S.optional(Metadata),
        }),
      ).annotate({ identifier: "FailureTrace" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          traceId: S.optional(S.String),
          event: S.optional(CustomOrchestrationTraceEvent),
        }),
      ).annotate({ identifier: "CustomOrchestrationTrace" });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ guardrailTrace: GuardrailTrace }),
        /*@__PURE__*/ S.Struct({ preProcessingTrace: PreProcessingTrace }),
        /*@__PURE__*/ S.Struct({ orchestrationTrace: OrchestrationTrace }),
        /*@__PURE__*/ S.Struct({ postProcessingTrace: PostProcessingTrace }),
        /*@__PURE__*/ S.Struct({ routingClassifierTrace: RoutingClassifierTrace }),
        /*@__PURE__*/ S.Struct({ failureTrace: FailureTrace }),
        /*@__PURE__*/ S.Struct({ customOrchestrationTrace: CustomOrchestrationTrace }),
      ]);
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ agentAliasArn: S.String })]);
    case 4:
      return S.Array(Caller);
    case 5:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.optional(S.String),
          trace: S.optional(Trace),
          callerChain: S.optional(CallerChain),
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
      return S.Array(OutputFile);
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ files: S.optional(OutputFiles) })).annotate({
        identifier: "FilePart",
      });
    case 1:
      return T.EventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ chunk: PayloadPart }),
          /*@__PURE__*/ S.Struct({ trace: TracePart }),
          /*@__PURE__*/ S.Struct({ returnControl: ReturnControlPayload }),
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
          /*@__PURE__*/ S.Struct({ files: FilePart }),
        ]),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          completion: ResponseStream.pipe(T.HttpPayload()),
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
          content: FlowInputContent,
          nodeInputName: S.optional(S.String),
        }),
      ).annotate({ identifier: "FlowInput" });
    case 5:
      return S.Array(FlowInput);
    case 6:
      return S.suspend(() =>
        S.Struct({
          flowIdentifier: S.String.pipe(T.HttpLabel("flowIdentifier")),
          flowAliasIdentifier: S.String.pipe(T.HttpLabel("flowAliasIdentifier")),
          inputs: FlowInputs,
          enableTrace: S.optional(S.Boolean),
          modelPerformanceConfiguration: S.optional(ModelPerformanceConfiguration),
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
        S.Struct({ nodeName: S.String, nodeType: NodeType, content: FlowOutputContent }),
      ).annotate({ identifier: "FlowOutputEvent" });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ completionReason: FlowCompletionReason })).annotate({
        identifier: "FlowCompletionEvent",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ nodeName: S.String, outputFieldName: S.String, expression: SensitiveString }),
      ).annotate({ identifier: "FlowTraceNodeInputSource" });
    case 2:
      return S.suspend(() =>
        S.Struct({ nodeName: S.String, index: S.optional(S.Number), type: FlowControlNodeType }),
      ).annotate({
        identifier: "FlowTraceNodeInputExecutionChainItem",
      });
    case 3:
      return S.Array(FlowTraceNodeInputExecutionChainItem);
    case 4:
      return S.suspend(() =>
        S.Struct({
          nodeInputName: S.String,
          content: FlowTraceNodeInputContent,
          source: S.optional(FlowTraceNodeInputSource),
          type: S.optional(FlowNodeIODataType),
          category: S.optional(FlowNodeInputCategory),
          executionChain: S.optional(FlowTraceNodeInputExecutionChain),
        }),
      ).annotate({ identifier: "FlowTraceNodeInputField" });
    case 5:
      return S.Array(FlowTraceNodeInputField);
    case 6:
      return S.suspend(() =>
        S.Struct({
          nodeName: S.String,
          timestamp: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          fields: FlowTraceNodeInputFields,
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
      return S.Array(FlowTraceNodeOutputNext);
    case 1:
      return S.suspend(() =>
        S.Struct({
          nodeOutputName: S.String,
          content: FlowTraceNodeOutputContent,
          next: S.optional(FlowTraceNodeOutputNextList),
          type: S.optional(FlowNodeIODataType),
        }),
      ).annotate({ identifier: "FlowTraceNodeOutputField" });
    case 2:
      return S.Array(FlowTraceNodeOutputField);
    case 3:
      return S.suspend(() =>
        S.Struct({
          nodeName: S.String,
          timestamp: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          fields: FlowTraceNodeOutputFields,
        }),
      ).annotate({ identifier: "FlowTraceNodeOutputEvent" });
    case 4:
      return S.suspend(() => S.Struct({ conditionName: S.String })).annotate({
        identifier: "FlowTraceCondition",
      });
    case 5:
      return S.Array(FlowTraceCondition);
    case 6:
      return S.suspend(() =>
        S.Struct({
          nodeName: S.String,
          timestamp: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          satisfiedConditions: FlowTraceConditions,
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
      return S.Array(TracePart);
    case 1:
      return S.Union([/*@__PURE__*/ S.Struct({ agentTraces: AgentTraces })]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          nodeName: S.String,
          timestamp: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          traceElements: TraceElements,
        }),
      ).annotate({ identifier: "FlowTraceDependencyEvent" });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ nodeInputTrace: FlowTraceNodeInputEvent }),
        /*@__PURE__*/ S.Struct({ nodeOutputTrace: FlowTraceNodeOutputEvent }),
        /*@__PURE__*/ S.Struct({ conditionNodeResultTrace: FlowTraceConditionNodeResultEvent }),
        /*@__PURE__*/ S.Struct({ nodeActionTrace: FlowTraceNodeActionEvent }),
        /*@__PURE__*/ S.Struct({ nodeDependencyTrace: FlowTraceDependencyEvent }),
      ]);
    case 4:
      return S.suspend(() => S.Struct({ trace: FlowTrace })).annotate({
        identifier: "FlowTraceEvent",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ nodeName: S.String, nodeType: NodeType, content: FlowMultiTurnInputContent }),
      ).annotate({
        identifier: "FlowMultiTurnInputRequestEvent",
      });
    case 6:
      return T.EventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ flowOutputEvent: FlowOutputEvent }),
          /*@__PURE__*/ S.Struct({ flowCompletionEvent: FlowCompletionEvent }),
          /*@__PURE__*/ S.Struct({ flowTraceEvent: FlowTraceEvent }),
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
            flowMultiTurnInputRequestEvent: FlowMultiTurnInputRequestEvent,
          }),
        ]),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          responseStream: FlowResponseStream.pipe(T.HttpPayload()),
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
        /*@__PURE__*/ S.Struct({ customControl: CustomControlMethod }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({ s3BucketName: S.optional(S.String), s3ObjectKey: S.optional(S.String) }),
      ).annotate({ identifier: "S3Identifier" });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ s3: S3Identifier }),
        /*@__PURE__*/ S.Struct({ payload: SensitiveString }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          description: S.optional(S.String),
          type: ParameterType,
          required: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ParameterDetail" });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ ParameterDetail.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: SensitiveString,
          description: S.optional(S.String),
          parameters: S.optional(ParameterMap),
          requireConfirmation: S.optional(RequireConfirmation),
        }),
      ).annotate({ identifier: "FunctionDefinition" });
    case 6:
      return S.Array(FunctionDefinition);
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ functions: Functions })]);
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          actionGroupName: SensitiveString,
          description: S.optional(SensitiveString),
          parentActionGroupSignature: S.optional(ActionGroupSignature),
          actionGroupExecutor: S.optional(ActionGroupExecutor),
          apiSchema: S.optional(APISchema),
          functionSchema: S.optional(FunctionSchema),
          parentActionGroupSignatureParams: S.optional(ActionGroupSignatureParams),
        }),
      ).annotate({ identifier: "AgentActionGroup" });
    case 1:
      return S.Array(AgentActionGroup);
    case 2:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String,
          description: SensitiveString,
          retrievalConfiguration: S.optional(KnowledgeBaseRetrievalConfiguration),
        }),
      ).annotate({ identifier: "KnowledgeBase" });
    case 3:
      return S.Array(KnowledgeBase);
    case 4:
      return S.suspend(() =>
        S.Struct({ guardrailIdentifier: S.String, guardrailVersion: S.String }),
      ).annotate({
        identifier: "GuardrailConfigurationWithArn",
      });
    case 5:
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
    case 6:
      return S.Array(PromptConfiguration);
    case 7:
      return S.suspend(() =>
        S.Struct({
          promptConfigurations: PromptConfigurations,
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
          relayConversationHistory: S.optional(RelayConversationHistory),
        }),
      ).annotate({
        identifier: "CollaboratorConfiguration",
      });
    case 1:
      return S.Array(CollaboratorConfiguration);
    case 2:
      return S.suspend(() =>
        S.Struct({
          sessionAttributes: S.optional(SessionAttributesMap),
          promptSessionAttributes: S.optional(PromptSessionAttributesMap),
          returnControlInvocationResults: S.optional(ReturnControlInvocationResults),
          invocationId: S.optional(S.String),
          files: S.optional(InputFiles),
          conversationHistory: S.optional(ConversationHistory),
        }),
      ).annotate({ identifier: "InlineSessionState" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          customerEncryptionKeyArn: S.optional(S.String),
          foundationModel: S.String,
          instruction: SensitiveString,
          idleSessionTTLInSeconds: S.optional(S.Number),
          actionGroups: S.optional(AgentActionGroups),
          knowledgeBases: S.optional(KnowledgeBases),
          guardrailConfiguration: S.optional(GuardrailConfigurationWithArn),
          promptOverrideConfiguration: S.optional(PromptOverrideConfiguration),
          agentCollaboration: S.optional(AgentCollaboration),
          collaboratorConfigurations: S.optional(CollaboratorConfigurations),
          agentName: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "Collaborator" });
    case 4:
      return S.Array(Collaborator);
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ lambda: S.String })]);
    case 6:
      return S.suspend(() => S.Struct({ executor: S.optional(OrchestrationExecutor) })).annotate({
        identifier: "CustomOrchestration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          customerEncryptionKeyArn: S.optional(S.String),
          foundationModel: S.String,
          instruction: SensitiveString,
          idleSessionTTLInSeconds: S.optional(S.Number),
          actionGroups: S.optional(AgentActionGroups),
          knowledgeBases: S.optional(KnowledgeBases),
          guardrailConfiguration: S.optional(GuardrailConfigurationWithArn),
          promptOverrideConfiguration: S.optional(PromptOverrideConfiguration),
          agentCollaboration: S.optional(AgentCollaboration),
          collaboratorConfigurations: S.optional(CollaboratorConfigurations),
          agentName: S.optional(SensitiveString),
          sessionId: S.String.pipe(T.HttpLabel("sessionId")),
          endSession: S.optional(S.Boolean),
          enableTrace: S.optional(S.Boolean),
          inputText: S.optional(SensitiveString),
          streamingConfigurations: S.optional(StreamingConfigurations),
          promptCreationConfigurations: S.optional(PromptCreationConfigurations),
          inlineSessionState: S.optional(InlineSessionState),
          collaborators: S.optional(Collaborators),
          bedrockModelConfigurations: S.optional(InlineBedrockModelConfigurations),
          orchestrationType: S.optional(OrchestrationType),
          customOrchestration: S.optional(CustomOrchestration),
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
          trace: S.optional(Trace),
          callerChain: S.optional(CallerChain),
          eventTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          collaboratorName: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "InlineAgentTracePart" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          invocationInputs: S.optional(InvocationInputs),
          invocationId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "InlineAgentReturnControlPayload",
      });
    case 2:
      return T.EventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ chunk: InlineAgentPayloadPart }),
          /*@__PURE__*/ S.Struct({ trace: InlineAgentTracePart }),
          /*@__PURE__*/ S.Struct({ returnControl: InlineAgentReturnControlPayload }),
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
          /*@__PURE__*/ S.Struct({ files: InlineAgentFilePart }),
        ]),
      );
    case 3:
      return S.suspend(() =>
        S.Struct({
          completion: InlineAgentResponseStream.pipe(T.HttpPayload()),
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
          eventType: FlowExecutionEventType.pipe(T.HttpQuery("eventType")),
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
      return S.suspend(() => S.Struct({ name: S.String, content: FlowExecutionContent })).annotate({
        identifier: "FlowInputField",
      });
    case 6:
      return S.Array(FlowInputField);
    case 7:
      return S.suspend(() =>
        S.Struct({
          nodeName: S.String,
          timestamp: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          fields: FlowInputFields,
        }),
      ).annotate({ identifier: "FlowExecutionInputEvent" });
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.Array(NodeInputExecutionChainItem);
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          content: NodeExecutionContent,
          source: S.optional(NodeInputSource),
          type: S.optional(FlowNodeIODataType),
          category: S.optional(FlowNodeInputCategory),
          executionChain: S.optional(NodeInputExecutionChain),
        }),
      ).annotate({ identifier: "NodeInputField" });
    case 2:
      return S.Array(NodeInputField);
    case 3:
      return S.suspend(() =>
        S.Struct({
          nodeName: S.String,
          timestamp: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          fields: NodeInputFields,
        }),
      ).annotate({ identifier: "NodeInputEvent" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          content: NodeExecutionContent,
          next: S.optional(NodeOutputNextList),
          type: S.optional(FlowNodeIODataType),
        }),
      ).annotate({ identifier: "NodeOutputField" });
    case 5:
      return S.Array(NodeOutputField);
    case 6:
      return S.suspend(() =>
        S.Struct({
          nodeName: S.String,
          timestamp: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          fields: NodeOutputFields,
        }),
      ).annotate({ identifier: "NodeOutputEvent" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          nodeName: S.String,
          timestamp: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          satisfiedConditions: SatisfiedConditions,
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
          errorCode: NodeErrorCode,
          errorMessage: S.String,
        }),
      ).annotate({ identifier: "NodeFailureEvent" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          timestamp: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          errorCode: FlowErrorCode,
          errorMessage: S.String,
        }),
      ).annotate({ identifier: "FlowFailureEvent" });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ flowInputEvent: FlowExecutionInputEvent }),
        /*@__PURE__*/ S.Struct({ flowOutputEvent: FlowExecutionOutputEvent }),
        /*@__PURE__*/ S.Struct({ nodeInputEvent: NodeInputEvent }),
        /*@__PURE__*/ S.Struct({ nodeOutputEvent: NodeOutputEvent }),
        /*@__PURE__*/ S.Struct({ conditionResultEvent: ConditionResultEvent }),
        /*@__PURE__*/ S.Struct({ nodeFailureEvent: NodeFailureEvent }),
        /*@__PURE__*/ S.Struct({ flowFailureEvent: FlowFailureEvent }),
        /*@__PURE__*/ S.Struct({ nodeActionEvent: NodeActionEvent }),
        /*@__PURE__*/ S.Struct({ nodeDependencyEvent: NodeDependencyEvent }),
      ]);
    case 3:
      return S.Array(FlowExecutionEvent);
    case 4:
      return S.suspend(() =>
        S.Struct({ flowExecutionEvents: FlowExecutionEvents, nextToken: S.optional(S.String) }),
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
          status: FlowExecutionStatus,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          endedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "FlowExecutionSummary" });
    case 7:
      return S.Array(FlowExecutionSummary);
  }
}
function __c41(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          flowExecutionSummaries: FlowExecutionSummaries,
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
      return S.Array(InvocationSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({ invocationSummaries: InvocationSummaries, nextToken: S.optional(S.String) }),
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
      return S.Array(InvocationStepSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({
          invocationStepSummaries: InvocationStepSummaries,
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
          sessionStatus: SessionStatus,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "SessionSummary" });
    case 2:
      return S.Array(SessionSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({ sessionSummaries: SessionSummaries, nextToken: S.optional(S.String) }),
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
      return S.suspend(() => S.Struct({ tags: S.optional(TagsMap) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 6:
      return S.suspend(() => S.Struct({ text: S.String })).annotate({
        identifier: "TextPrompt",
      });
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ textPrompt: TextPrompt })]);
  }
}
function __c43(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ input: InputPrompt, targetModelId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/optimize-prompt" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "OptimizePromptRequest" });
    case 1:
      return S.suspend(() => S.Struct({ optimizedPrompt: S.optional(OptimizedPrompt) })).annotate({
        identifier: "OptimizedPromptEvent",
      });
    case 2:
      return S.suspend(() => S.Struct({ message: S.optional(S.String) })).annotate({
        identifier: "AnalyzePromptEvent",
      });
    case 3:
      return T.EventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ optimizedPromptEvent: OptimizedPromptEvent }),
          /*@__PURE__*/ S.Struct({ analyzePromptEvent: AnalyzePromptEvent }),
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
        S.Struct({ optimizedPrompt: OptimizedPromptStream.pipe(T.HttpPayload()) }),
      ).annotate({ identifier: "OptimizePromptResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          sessionIdentifier: S.String.pipe(T.HttpLabel("sessionIdentifier")),
          invocationIdentifier: S.String,
          invocationStepTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          payload: InvocationStepPayload,
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
      return S.suspend(() =>
        S.Struct({ type: RerankQueryContentType, textQuery: RerankTextDocument }),
      ).annotate({ identifier: "RerankQuery" });
    case 1:
      return S.Array(RerankQuery);
    case 2:
      return S.suspend(() =>
        S.Struct({
          type: RerankDocumentType,
          textDocument: S.optional(RerankTextDocument),
          jsonDocument: S.optional(S.Any),
        }),
      ).annotate({ identifier: "RerankDocument" });
    case 3:
      return S.suspend(() =>
        S.Struct({ type: RerankSourceType, inlineDocumentSource: RerankDocument }),
      ).annotate({ identifier: "RerankSource" });
    case 4:
      return S.Array(RerankSource);
    case 5:
      return S.suspend(() =>
        S.Struct({
          numberOfResults: S.optional(S.Number),
          modelConfiguration: BedrockRerankingModelConfiguration,
        }),
      ).annotate({
        identifier: "BedrockRerankingConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          type: RerankingConfigurationType,
          bedrockRerankingConfiguration: BedrockRerankingConfiguration,
        }),
      ).annotate({ identifier: "RerankingConfiguration" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          queries: RerankQueriesList,
          sources: RerankSourcesList,
          rerankingConfiguration: RerankingConfiguration,
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
          document: S.optional(RerankDocument),
        }),
      ).annotate({ identifier: "RerankResult" });
    case 1:
      return S.Array(RerankResult);
    case 2:
      return S.suspend(() =>
        S.Struct({ results: RerankResultsList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "RerankResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ format: InputImageFormat, inlineContent: SensitiveBlob }),
      ).annotate({ identifier: "InputImage" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(KnowledgeBaseQueryType),
          text: S.optional(S.String),
          image: S.optional(InputImage),
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
          retrievalQuery: KnowledgeBaseQuery,
          retrievalConfiguration: S.optional(KnowledgeBaseRetrievalConfiguration),
          guardrailConfiguration: S.optional(GuardrailConfiguration),
          nextToken: S.optional(S.String),
          userContext: S.optional(UserContext),
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
          content: RetrievalResultContent,
          location: S.optional(RetrievalResultLocation),
          score: S.optional(S.Number),
          metadata: S.optional(RetrievalResultMetadata),
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
      return S.Array(KnowledgeBaseRetrievalResult);
    case 1:
      return S.suspend(() =>
        S.Struct({
          retrievalResults: KnowledgeBaseRetrievalResults,
          guardrailAction: S.optional(GuadrailAction),
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
          stopSequences: S.optional(RAGStopSequences),
        }),
      ).annotate({ identifier: "TextInferenceConfig" });
    case 5:
      return S.suspend(() =>
        S.Struct({ textInferenceConfig: S.optional(TextInferenceConfig) }),
      ).annotate({ identifier: "InferenceConfig" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          promptTemplate: S.optional(PromptTemplate),
          guardrailConfiguration: S.optional(GuardrailConfiguration),
          inferenceConfig: S.optional(InferenceConfig),
          additionalModelRequestFields: S.optional(AdditionalModelRequestFields),
          performanceConfig: S.optional(PerformanceConfiguration),
        }),
      ).annotate({ identifier: "GenerationConfiguration" });
    case 7:
      return S.suspend(() => S.Struct({ type: QueryTransformationType })).annotate({
        identifier: "QueryTransformationConfiguration",
      });
  }
}
function __c47(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          promptTemplate: S.optional(PromptTemplate),
          inferenceConfig: S.optional(InferenceConfig),
          additionalModelRequestFields: S.optional(AdditionalModelRequestFields),
          queryTransformationConfiguration: S.optional(QueryTransformationConfiguration),
          performanceConfig: S.optional(PerformanceConfiguration),
        }),
      ).annotate({
        identifier: "OrchestrationConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          knowledgeBaseId: S.String,
          modelArn: S.String,
          retrievalConfiguration: S.optional(KnowledgeBaseRetrievalConfiguration),
          generationConfiguration: S.optional(GenerationConfiguration),
          orchestrationConfiguration: S.optional(OrchestrationConfiguration),
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
          sourceType: ExternalSourceType,
          s3Location: S.optional(S3ObjectDoc),
          byteContent: S.optional(ByteContentDoc),
        }),
      ).annotate({ identifier: "ExternalSource" });
    case 4:
      return S.Array(ExternalSource);
    case 5:
      return S.suspend(() =>
        S.Struct({
          promptTemplate: S.optional(PromptTemplate),
          guardrailConfiguration: S.optional(GuardrailConfiguration),
          inferenceConfig: S.optional(InferenceConfig),
          additionalModelRequestFields: S.optional(AdditionalModelRequestFields),
          performanceConfig: S.optional(PerformanceConfiguration),
        }),
      ).annotate({
        identifier: "ExternalSourcesGenerationConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          modelArn: S.String,
          sources: ExternalSources,
          generationConfiguration: S.optional(ExternalSourcesGenerationConfiguration),
        }),
      ).annotate({
        identifier: "ExternalSourcesRetrieveAndGenerateConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          type: RetrieveAndGenerateType,
          knowledgeBaseConfiguration: S.optional(KnowledgeBaseRetrieveAndGenerateConfiguration),
          externalSourcesConfiguration: S.optional(ExternalSourcesRetrieveAndGenerateConfiguration),
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
          input: RetrieveAndGenerateInput,
          retrieveAndGenerateConfiguration: S.optional(RetrieveAndGenerateConfiguration),
          sessionConfiguration: S.optional(RetrieveAndGenerateSessionConfiguration),
          userContext: S.optional(UserContext),
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
          output: RetrieveAndGenerateOutput,
          citations: S.optional(Citations),
          guardrailAction: S.optional(GuadrailAction),
        }),
      ).annotate({
        identifier: "RetrieveAndGenerateResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.optional(S.String),
          input: RetrieveAndGenerateInput,
          retrieveAndGenerateConfiguration: S.optional(RetrieveAndGenerateConfiguration),
          sessionConfiguration: S.optional(RetrieveAndGenerateSessionConfiguration),
          userContext: S.optional(UserContext),
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
          citation: S.optional(Citation),
          generatedResponsePart: S.optional(GeneratedResponsePart),
          retrievedReferences: S.optional(RetrievedReferences),
        }),
      ).annotate({ identifier: "CitationEvent" });
    case 5:
      return S.suspend(() => S.Struct({ action: S.optional(GuadrailAction) })).annotate({
        identifier: "GuardrailEvent",
      });
    case 6:
      return T.EventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ output: RetrieveAndGenerateOutputEvent }),
          /*@__PURE__*/ S.Struct({ citation: CitationEvent }),
          /*@__PURE__*/ S.Struct({ guardrail: GuardrailEvent }),
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
          stream: RetrieveAndGenerateStreamResponseOutput.pipe(T.HttpPayload()),
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
          inputs: FlowInputs,
          modelPerformanceConfiguration: S.optional(ModelPerformanceConfiguration),
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
        S.Struct({ executionArn: S.optional(S.String), status: FlowExecutionStatus }),
      ).annotate({
        identifier: "StopFlowExecutionResponse",
      });
    case 4:
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
      ).annotate({ identifier: "UntagResourceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          sessionMetadata: S.optional(SessionMetadataMap),
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
