import * as API from "@distilled.cloud/core/api";
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
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "QConnect", serviceShapeName: "WisdomService" });
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "wisdom" });
const ver = /*@__PURE__*/ T.ServiceVersion("2020-10-19");
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
              `https://wisdom-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://wisdom-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://wisdom.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://wisdom.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
export class DependencyFailedException
  extends /*@__PURE__*/ S.TaggedError<DependencyFailedException>()(
    "DependencyFailedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(424),
  ) {}
export class PreconditionFailedException
  extends /*@__PURE__*/ S.TaggedError<PreconditionFailedException>()(
    "PreconditionFailedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(412),
  ) {}
export class RequestTimeoutException
  extends /*@__PURE__*/ S.TaggedError<RequestTimeoutException>()(
    "RequestTimeoutException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(408), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withTimeoutError, C.withRetryableError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceName: /*@__PURE__*/ S.optional(S.String),
    },
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
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(400), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withBadRequestError, C.withRetryableError) {}
export class TooManyTagsException
  extends /*@__PURE__*/ S.TaggedError<TooManyTagsException>()(
    "TooManyTagsException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceName: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class UnauthorizedException
  extends /*@__PURE__*/ S.TaggedError<UnauthorizedException>()(
    "UnauthorizedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(401),
  ).pipe(C.withAuthError) {}
export class UnprocessableContentException
  extends /*@__PURE__*/ S.TaggedError<UnprocessableContentException>()(
    "UnprocessableContentException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(422),
  ).pipe(C.withBadRequestError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type UuidOrArn = string;
export type UuidOrArnOrEitherWithQualifier = string;
export type Version = number;
export interface ActivateMessageTemplateRequest {
  knowledgeBaseId: string;
  messageTemplateId: string;
  versionNumber: number;
}
const ActivateMessageTemplateRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
    messageTemplateId: S.String.pipe(T.HttpLabel("messageTemplateId")),
    versionNumber: S.Number,
  }).pipe(
    T.all(
      T.Http({
        method: "POST",
        uri: "/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/activate",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ActivateMessageTemplateRequest",
}) as any as S.Schema<ActivateMessageTemplateRequest>;
export type ArnWithQualifier = string;
export type Uuid = string;
export interface ActivateMessageTemplateResponse {
  messageTemplateArn: string;
  messageTemplateId: string;
  versionNumber: number;
}
const ActivateMessageTemplateResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ messageTemplateArn: S.String, messageTemplateId: S.String, versionNumber: S.Number }),
).annotate({
  identifier: "ActivateMessageTemplateResponse",
}) as any as S.Schema<ActivateMessageTemplateResponse>;
export type ClientToken = string;
export type Name = string;
export type AIAgentType = string;
export type UuidWithQualifier = string;
export type AIAgentAssociationConfigurationType = string;
export type TagKey = string;
export type TagValue = string;
export interface TagCondition {
  key: string;
  value?: string;
}
const TagCondition = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ key: S.String, value: S.optional(S.String) }),
).annotate({ identifier: "TagCondition" }) as any as S.Schema<TagCondition>;
export type AndConditions = TagCondition[];
const AndConditions = /*@__PURE__*/ S.Array(TagCondition);
export type OrCondition =
  | { andConditions: TagCondition[]; tagCondition?: never }
  | { andConditions?: never; tagCondition: TagCondition };
const OrCondition = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ andConditions: AndConditions }),
  /*@__PURE__*/ S.Struct({ tagCondition: TagCondition }),
]);
export type OrConditions = OrCondition[];
const OrConditions = /*@__PURE__*/ S.Array(OrCondition);
export type TagFilter =
  | { tagCondition: TagCondition; andConditions?: never; orConditions?: never }
  | { tagCondition?: never; andConditions: TagCondition[]; orConditions?: never }
  | { tagCondition?: never; andConditions?: never; orConditions: OrCondition[] };
const TagFilter = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ tagCondition: TagCondition }),
  /*@__PURE__*/ S.Struct({ andConditions: AndConditions }),
  /*@__PURE__*/ S.Struct({ orConditions: OrConditions }),
]);
export type MaxResults = number;
export type KnowledgeBaseSearchType = string;
export interface KnowledgeBaseAssociationConfigurationData {
  contentTagFilter?: TagFilter;
  maxResults?: number;
  overrideKnowledgeBaseSearchType?: string;
}
const KnowledgeBaseAssociationConfigurationData = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    contentTagFilter: S.optional(TagFilter),
    maxResults: S.optional(S.Number),
    overrideKnowledgeBaseSearchType: S.optional(S.String),
  }),
).annotate({
  identifier: "KnowledgeBaseAssociationConfigurationData",
}) as any as S.Schema<KnowledgeBaseAssociationConfigurationData>;
export type AssociationConfigurationData = {
  knowledgeBaseAssociationConfigurationData: KnowledgeBaseAssociationConfigurationData;
};
const AssociationConfigurationData = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({
    knowledgeBaseAssociationConfigurationData: KnowledgeBaseAssociationConfigurationData,
  }),
]);
export interface AssociationConfiguration {
  associationId?: string;
  associationType?: string;
  associationConfigurationData?: AssociationConfigurationData;
}
const AssociationConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    associationId: S.optional(S.String),
    associationType: S.optional(S.String),
    associationConfigurationData: S.optional(AssociationConfigurationData),
  }),
).annotate({ identifier: "AssociationConfiguration" }) as any as S.Schema<AssociationConfiguration>;
export type AssociationConfigurationList = AssociationConfiguration[];
const AssociationConfigurationList = /*@__PURE__*/ S.Array(AssociationConfiguration);
export type NonEmptyString = string;
export interface ManualSearchAIAgentConfiguration {
  answerGenerationAIPromptId?: string;
  answerGenerationAIGuardrailId?: string;
  associationConfigurations?: AssociationConfiguration[];
  locale?: string;
}
const ManualSearchAIAgentConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    answerGenerationAIPromptId: S.optional(S.String),
    answerGenerationAIGuardrailId: S.optional(S.String),
    associationConfigurations: S.optional(AssociationConfigurationList),
    locale: S.optional(S.String),
  }),
).annotate({
  identifier: "ManualSearchAIAgentConfiguration",
}) as any as S.Schema<ManualSearchAIAgentConfiguration>;
export type NonEmptySensitiveString = string | redacted.Redacted<string>;
export type SuggestedMessagesList = (string | redacted.Redacted<string>)[];
const SuggestedMessagesList = /*@__PURE__*/ S.Array(SensitiveString);
export interface AnswerRecommendationAIAgentConfiguration {
  intentLabelingGenerationAIPromptId?: string;
  queryReformulationAIPromptId?: string;
  answerGenerationAIPromptId?: string;
  answerGenerationAIGuardrailId?: string;
  associationConfigurations?: AssociationConfiguration[];
  locale?: string;
  suggestedMessages?: (string | redacted.Redacted<string>)[];
}
const AnswerRecommendationAIAgentConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    intentLabelingGenerationAIPromptId: S.optional(S.String),
    queryReformulationAIPromptId: S.optional(S.String),
    answerGenerationAIPromptId: S.optional(S.String),
    answerGenerationAIGuardrailId: S.optional(S.String),
    associationConfigurations: S.optional(AssociationConfigurationList),
    locale: S.optional(S.String),
    suggestedMessages: S.optional(SuggestedMessagesList),
  }),
).annotate({
  identifier: "AnswerRecommendationAIAgentConfiguration",
}) as any as S.Schema<AnswerRecommendationAIAgentConfiguration>;
export interface SelfServiceAIAgentConfiguration {
  selfServicePreProcessingAIPromptId?: string;
  selfServiceAnswerGenerationAIPromptId?: string;
  selfServiceAIGuardrailId?: string;
  associationConfigurations?: AssociationConfiguration[];
}
const SelfServiceAIAgentConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    selfServicePreProcessingAIPromptId: S.optional(S.String),
    selfServiceAnswerGenerationAIPromptId: S.optional(S.String),
    selfServiceAIGuardrailId: S.optional(S.String),
    associationConfigurations: S.optional(AssociationConfigurationList),
  }),
).annotate({
  identifier: "SelfServiceAIAgentConfiguration",
}) as any as S.Schema<SelfServiceAIAgentConfiguration>;
export interface EmailResponseAIAgentConfiguration {
  emailResponseAIPromptId?: string;
  emailQueryReformulationAIPromptId?: string;
  locale?: string;
  associationConfigurations?: AssociationConfiguration[];
}
const EmailResponseAIAgentConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    emailResponseAIPromptId: S.optional(S.String),
    emailQueryReformulationAIPromptId: S.optional(S.String),
    locale: S.optional(S.String),
    associationConfigurations: S.optional(AssociationConfigurationList),
  }),
).annotate({
  identifier: "EmailResponseAIAgentConfiguration",
}) as any as S.Schema<EmailResponseAIAgentConfiguration>;
export interface EmailOverviewAIAgentConfiguration {
  emailOverviewAIPromptId?: string;
  locale?: string;
}
const EmailOverviewAIAgentConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ emailOverviewAIPromptId: S.optional(S.String), locale: S.optional(S.String) }),
).annotate({
  identifier: "EmailOverviewAIAgentConfiguration",
}) as any as S.Schema<EmailOverviewAIAgentConfiguration>;
export interface EmailGenerativeAnswerAIAgentConfiguration {
  emailGenerativeAnswerAIPromptId?: string;
  emailQueryReformulationAIPromptId?: string;
  locale?: string;
  associationConfigurations?: AssociationConfiguration[];
}
const EmailGenerativeAnswerAIAgentConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    emailGenerativeAnswerAIPromptId: S.optional(S.String),
    emailQueryReformulationAIPromptId: S.optional(S.String),
    locale: S.optional(S.String),
    associationConfigurations: S.optional(AssociationConfigurationList),
  }),
).annotate({
  identifier: "EmailGenerativeAnswerAIAgentConfiguration",
}) as any as S.Schema<EmailGenerativeAnswerAIAgentConfiguration>;
export type ToolType = string;
export type ToolExampleList = string[];
const ToolExampleList = /*@__PURE__*/ S.Array(S.String);
export interface ToolInstruction {
  instruction?: string;
  examples?: string[];
}
const ToolInstruction = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ instruction: S.optional(S.String), examples: S.optional(ToolExampleList) }),
).annotate({ identifier: "ToolInstruction" }) as any as S.Schema<ToolInstruction>;
export type ToolOverrideInputValueType = string;
export interface ToolOverrideConstantInputValue {
  type: string;
  value: string | redacted.Redacted<string>;
}
const ToolOverrideConstantInputValue = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ type: S.String, value: SensitiveString }),
).annotate({
  identifier: "ToolOverrideConstantInputValue",
}) as any as S.Schema<ToolOverrideConstantInputValue>;
export type ToolOverrideInputValueConfiguration = { constant: ToolOverrideConstantInputValue };
const ToolOverrideInputValueConfiguration = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ constant: ToolOverrideConstantInputValue }),
]);
export interface ToolOverrideInputValue {
  jsonPath: string;
  value: ToolOverrideInputValueConfiguration;
}
const ToolOverrideInputValue = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ jsonPath: S.String, value: ToolOverrideInputValueConfiguration }),
).annotate({ identifier: "ToolOverrideInputValue" }) as any as S.Schema<ToolOverrideInputValue>;
export type ToolOverrideInputValueList = ToolOverrideInputValue[];
const ToolOverrideInputValueList = /*@__PURE__*/ S.Array(ToolOverrideInputValue);
export interface ToolOutputConfiguration {
  outputVariableNameOverride?: string;
  sessionDataNamespace?: string;
}
const ToolOutputConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    outputVariableNameOverride: S.optional(S.String),
    sessionDataNamespace: S.optional(S.String),
  }),
).annotate({ identifier: "ToolOutputConfiguration" }) as any as S.Schema<ToolOutputConfiguration>;
export interface ToolOutputFilter {
  jsonPath: string;
  outputConfiguration?: ToolOutputConfiguration;
}
const ToolOutputFilter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ jsonPath: S.String, outputConfiguration: S.optional(ToolOutputConfiguration) }),
).annotate({ identifier: "ToolOutputFilter" }) as any as S.Schema<ToolOutputFilter>;
export type ToolOutputFilterList = ToolOutputFilter[];
const ToolOutputFilterList = /*@__PURE__*/ S.Array(ToolOutputFilter);
export type JSONDocument = unknown;
export interface Annotation {
  title?: string;
  destructiveHint?: boolean;
}
const Annotation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ title: S.optional(S.String), destructiveHint: S.optional(S.Boolean) }),
).annotate({ identifier: "Annotation" }) as any as S.Schema<Annotation>;
export interface UserInteractionConfiguration {
  isUserConfirmationRequired?: boolean;
}
const UserInteractionConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ isUserConfirmationRequired: S.optional(S.Boolean) }),
).annotate({
  identifier: "UserInteractionConfiguration",
}) as any as S.Schema<UserInteractionConfiguration>;
export interface ToolConfiguration {
  toolName: string;
  toolType: string;
  title?: string | redacted.Redacted<string>;
  toolId?: string;
  description?: string | redacted.Redacted<string>;
  instruction?: ToolInstruction;
  overrideInputValues?: ToolOverrideInputValue[];
  outputFilters?: ToolOutputFilter[];
  inputSchema?: any;
  outputSchema?: any;
  annotations?: Annotation;
  userInteractionConfiguration?: UserInteractionConfiguration;
}
const ToolConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    toolName: S.String,
    toolType: S.String,
    title: S.optional(SensitiveString),
    toolId: S.optional(S.String),
    description: S.optional(SensitiveString),
    instruction: S.optional(ToolInstruction),
    overrideInputValues: S.optional(ToolOverrideInputValueList),
    outputFilters: S.optional(ToolOutputFilterList),
    inputSchema: S.optional(S.Any),
    outputSchema: S.optional(S.Any),
    annotations: S.optional(Annotation),
    userInteractionConfiguration: S.optional(UserInteractionConfiguration),
  }),
).annotate({ identifier: "ToolConfiguration" }) as any as S.Schema<ToolConfiguration>;
export type ToolConfigurationList = ToolConfiguration[];
const ToolConfigurationList = /*@__PURE__*/ S.Array(ToolConfiguration);
export type AgentTarget =
  | { aiAgentId: string; applicationId?: never }
  | { aiAgentId?: never; applicationId: string };
const AgentTarget = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ aiAgentId: S.String }),
  /*@__PURE__*/ S.Struct({ applicationId: S.String }),
]);
export type MultiAgentExampleList = string[];
export interface MultiAgentInstruction {
  instruction?: string;
  examples?: string[];
}
const MultiAgentInstruction = ToolInstruction as any as S.Schema<MultiAgentInstruction>;
export interface DelegateAgentConfiguration {
  agentTarget: AgentTarget;
  instruction?: MultiAgentInstruction;
}
const DelegateAgentConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ agentTarget: AgentTarget, instruction: S.optional(MultiAgentInstruction) }),
).annotate({
  identifier: "DelegateAgentConfiguration",
}) as any as S.Schema<DelegateAgentConfiguration>;
export interface HandoffAgentConfiguration {
  agentTarget: AgentTarget;
  instruction?: MultiAgentInstruction;
  audioStreamingEnabled?: boolean;
  immediateHandoff?: boolean;
}
const HandoffAgentConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    agentTarget: AgentTarget,
    instruction: S.optional(MultiAgentInstruction),
    audioStreamingEnabled: S.optional(S.Boolean),
    immediateHandoff: S.optional(S.Boolean),
  }),
).annotate({
  identifier: "HandoffAgentConfiguration",
}) as any as S.Schema<HandoffAgentConfiguration>;
export type MultiAgentConfiguration =
  | { delegateAgentConfiguration: DelegateAgentConfiguration; handoffAgentConfiguration?: never }
  | { delegateAgentConfiguration?: never; handoffAgentConfiguration: HandoffAgentConfiguration };
const MultiAgentConfiguration = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ delegateAgentConfiguration: DelegateAgentConfiguration }),
  /*@__PURE__*/ S.Struct({ handoffAgentConfiguration: HandoffAgentConfiguration }),
]);
export type MultiAgentConfigurationList = MultiAgentConfiguration[];
const MultiAgentConfigurationList = /*@__PURE__*/ S.Array(MultiAgentConfiguration);
export type GenericArn = string;
export type JSONDocumentList = any[];
const JSONDocumentList = /*@__PURE__*/ S.Array(S.Any);
export interface OrchestrationAIAgentConfiguration {
  orchestrationAIPromptId?: string;
  orchestrationAIGuardrailId?: string;
  toolConfigurations?: ToolConfiguration[];
  multiAgentConfigurations?: MultiAgentConfiguration[];
  connectInstanceArn?: string;
  locale?: string;
  inputSchemas?: any[];
  outputSchemas?: any[];
}
const OrchestrationAIAgentConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    orchestrationAIPromptId: S.optional(S.String),
    orchestrationAIGuardrailId: S.optional(S.String),
    toolConfigurations: S.optional(ToolConfigurationList),
    multiAgentConfigurations: S.optional(MultiAgentConfigurationList),
    connectInstanceArn: S.optional(S.String),
    locale: S.optional(S.String),
    inputSchemas: S.optional(JSONDocumentList),
    outputSchemas: S.optional(JSONDocumentList),
  }),
).annotate({
  identifier: "OrchestrationAIAgentConfiguration",
}) as any as S.Schema<OrchestrationAIAgentConfiguration>;
export interface NoteTakingAIAgentConfiguration {
  noteTakingAIPromptId?: string;
  noteTakingAIGuardrailId?: string;
  locale?: string;
}
const NoteTakingAIAgentConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    noteTakingAIPromptId: S.optional(S.String),
    noteTakingAIGuardrailId: S.optional(S.String),
    locale: S.optional(S.String),
  }),
).annotate({
  identifier: "NoteTakingAIAgentConfiguration",
}) as any as S.Schema<NoteTakingAIAgentConfiguration>;
export interface CaseSummarizationAIAgentConfiguration {
  caseSummarizationAIPromptId?: string;
  caseSummarizationAIGuardrailId?: string;
  locale?: string;
}
const CaseSummarizationAIAgentConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    caseSummarizationAIPromptId: S.optional(S.String),
    caseSummarizationAIGuardrailId: S.optional(S.String),
    locale: S.optional(S.String),
  }),
).annotate({
  identifier: "CaseSummarizationAIAgentConfiguration",
}) as any as S.Schema<CaseSummarizationAIAgentConfiguration>;
export type AIAgentConfiguration =
  | {
      manualSearchAIAgentConfiguration: ManualSearchAIAgentConfiguration;
      answerRecommendationAIAgentConfiguration?: never;
      selfServiceAIAgentConfiguration?: never;
      emailResponseAIAgentConfiguration?: never;
      emailOverviewAIAgentConfiguration?: never;
      emailGenerativeAnswerAIAgentConfiguration?: never;
      orchestrationAIAgentConfiguration?: never;
      noteTakingAIAgentConfiguration?: never;
      caseSummarizationAIAgentConfiguration?: never;
    }
  | {
      manualSearchAIAgentConfiguration?: never;
      answerRecommendationAIAgentConfiguration: AnswerRecommendationAIAgentConfiguration;
      selfServiceAIAgentConfiguration?: never;
      emailResponseAIAgentConfiguration?: never;
      emailOverviewAIAgentConfiguration?: never;
      emailGenerativeAnswerAIAgentConfiguration?: never;
      orchestrationAIAgentConfiguration?: never;
      noteTakingAIAgentConfiguration?: never;
      caseSummarizationAIAgentConfiguration?: never;
    }
  | {
      manualSearchAIAgentConfiguration?: never;
      answerRecommendationAIAgentConfiguration?: never;
      selfServiceAIAgentConfiguration: SelfServiceAIAgentConfiguration;
      emailResponseAIAgentConfiguration?: never;
      emailOverviewAIAgentConfiguration?: never;
      emailGenerativeAnswerAIAgentConfiguration?: never;
      orchestrationAIAgentConfiguration?: never;
      noteTakingAIAgentConfiguration?: never;
      caseSummarizationAIAgentConfiguration?: never;
    }
  | {
      manualSearchAIAgentConfiguration?: never;
      answerRecommendationAIAgentConfiguration?: never;
      selfServiceAIAgentConfiguration?: never;
      emailResponseAIAgentConfiguration: EmailResponseAIAgentConfiguration;
      emailOverviewAIAgentConfiguration?: never;
      emailGenerativeAnswerAIAgentConfiguration?: never;
      orchestrationAIAgentConfiguration?: never;
      noteTakingAIAgentConfiguration?: never;
      caseSummarizationAIAgentConfiguration?: never;
    }
  | {
      manualSearchAIAgentConfiguration?: never;
      answerRecommendationAIAgentConfiguration?: never;
      selfServiceAIAgentConfiguration?: never;
      emailResponseAIAgentConfiguration?: never;
      emailOverviewAIAgentConfiguration: EmailOverviewAIAgentConfiguration;
      emailGenerativeAnswerAIAgentConfiguration?: never;
      orchestrationAIAgentConfiguration?: never;
      noteTakingAIAgentConfiguration?: never;
      caseSummarizationAIAgentConfiguration?: never;
    }
  | {
      manualSearchAIAgentConfiguration?: never;
      answerRecommendationAIAgentConfiguration?: never;
      selfServiceAIAgentConfiguration?: never;
      emailResponseAIAgentConfiguration?: never;
      emailOverviewAIAgentConfiguration?: never;
      emailGenerativeAnswerAIAgentConfiguration: EmailGenerativeAnswerAIAgentConfiguration;
      orchestrationAIAgentConfiguration?: never;
      noteTakingAIAgentConfiguration?: never;
      caseSummarizationAIAgentConfiguration?: never;
    }
  | {
      manualSearchAIAgentConfiguration?: never;
      answerRecommendationAIAgentConfiguration?: never;
      selfServiceAIAgentConfiguration?: never;
      emailResponseAIAgentConfiguration?: never;
      emailOverviewAIAgentConfiguration?: never;
      emailGenerativeAnswerAIAgentConfiguration?: never;
      orchestrationAIAgentConfiguration: OrchestrationAIAgentConfiguration;
      noteTakingAIAgentConfiguration?: never;
      caseSummarizationAIAgentConfiguration?: never;
    }
  | {
      manualSearchAIAgentConfiguration?: never;
      answerRecommendationAIAgentConfiguration?: never;
      selfServiceAIAgentConfiguration?: never;
      emailResponseAIAgentConfiguration?: never;
      emailOverviewAIAgentConfiguration?: never;
      emailGenerativeAnswerAIAgentConfiguration?: never;
      orchestrationAIAgentConfiguration?: never;
      noteTakingAIAgentConfiguration: NoteTakingAIAgentConfiguration;
      caseSummarizationAIAgentConfiguration?: never;
    }
  | {
      manualSearchAIAgentConfiguration?: never;
      answerRecommendationAIAgentConfiguration?: never;
      selfServiceAIAgentConfiguration?: never;
      emailResponseAIAgentConfiguration?: never;
      emailOverviewAIAgentConfiguration?: never;
      emailGenerativeAnswerAIAgentConfiguration?: never;
      orchestrationAIAgentConfiguration?: never;
      noteTakingAIAgentConfiguration?: never;
      caseSummarizationAIAgentConfiguration: CaseSummarizationAIAgentConfiguration;
    };
const AIAgentConfiguration = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ manualSearchAIAgentConfiguration: ManualSearchAIAgentConfiguration }),
  /*@__PURE__*/ S.Struct({
    answerRecommendationAIAgentConfiguration: AnswerRecommendationAIAgentConfiguration,
  }),
  /*@__PURE__*/ S.Struct({ selfServiceAIAgentConfiguration: SelfServiceAIAgentConfiguration }),
  /*@__PURE__*/ S.Struct({ emailResponseAIAgentConfiguration: EmailResponseAIAgentConfiguration }),
  /*@__PURE__*/ S.Struct({ emailOverviewAIAgentConfiguration: EmailOverviewAIAgentConfiguration }),
  /*@__PURE__*/ S.Struct({
    emailGenerativeAnswerAIAgentConfiguration: EmailGenerativeAnswerAIAgentConfiguration,
  }),
  /*@__PURE__*/ S.Struct({ orchestrationAIAgentConfiguration: OrchestrationAIAgentConfiguration }),
  /*@__PURE__*/ S.Struct({ noteTakingAIAgentConfiguration: NoteTakingAIAgentConfiguration }),
  /*@__PURE__*/ S.Struct({
    caseSummarizationAIAgentConfiguration: CaseSummarizationAIAgentConfiguration,
  }),
]);
export type VisibilityStatus = string;
export type Tags = { [key: string]: string | undefined };
const Tags = /*@__PURE__*/ S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
export type Description = string;
export interface CreateAIAgentRequest {
  clientToken?: string;
  assistantId: string;
  name: string;
  type: string;
  configuration: AIAgentConfiguration;
  visibilityStatus: string;
  tags?: { [key: string]: string | undefined };
  description?: string;
}
const CreateAIAgentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    name: S.String,
    type: S.String,
    configuration: AIAgentConfiguration,
    visibilityStatus: S.String,
    tags: S.optional(Tags),
    description: S.optional(S.String),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/assistants/{assistantId}/aiagents" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "CreateAIAgentRequest" }) as any as S.Schema<CreateAIAgentRequest>;
export type Arn = string;
export type Origin = string;
export type Status = string;
export interface AIAgentData {
  assistantId: string;
  assistantArn: string;
  aiAgentId: string;
  aiAgentArn: string;
  name: string;
  type: string;
  configuration: AIAgentConfiguration;
  modifiedTime?: Date;
  description?: string;
  visibilityStatus: string;
  tags?: { [key: string]: string | undefined };
  origin?: string;
  status?: string;
}
const AIAgentData = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String,
    assistantArn: S.String,
    aiAgentId: S.String,
    aiAgentArn: S.String,
    name: S.String,
    type: S.String,
    configuration: AIAgentConfiguration,
    modifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    description: S.optional(S.String),
    visibilityStatus: S.String,
    tags: S.optional(Tags),
    origin: S.optional(S.String),
    status: S.optional(S.String),
  }),
).annotate({ identifier: "AIAgentData" }) as any as S.Schema<AIAgentData>;
export interface CreateAIAgentResponse {
  aiAgent?: AIAgentData;
}
const CreateAIAgentResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ aiAgent: S.optional(AIAgentData) }),
).annotate({ identifier: "CreateAIAgentResponse" }) as any as S.Schema<CreateAIAgentResponse>;
export interface CreateAIAgentVersionRequest {
  assistantId: string;
  aiAgentId: string;
  modifiedTime?: Date;
  clientToken?: string;
}
const CreateAIAgentVersionRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    aiAgentId: S.String.pipe(T.HttpLabel("aiAgentId")),
    modifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/assistants/{assistantId}/aiagents/{aiAgentId}/versions" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "CreateAIAgentVersionRequest",
}) as any as S.Schema<CreateAIAgentVersionRequest>;
export interface CreateAIAgentVersionResponse {
  aiAgent?: AIAgentData;
  versionNumber?: number;
}
const CreateAIAgentVersionResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ aiAgent: S.optional(AIAgentData), versionNumber: S.optional(S.Number) }),
).annotate({
  identifier: "CreateAIAgentVersionResponse",
}) as any as S.Schema<CreateAIAgentVersionResponse>;
export type AIGuardrailBlockedMessaging = string | redacted.Redacted<string>;
export type AIGuardrailDescription = string | redacted.Redacted<string>;
export type GuardrailTopicName = string | redacted.Redacted<string>;
export type GuardrailTopicDefinition = string | redacted.Redacted<string>;
export type GuardrailTopicExample = string | redacted.Redacted<string>;
export type GuardrailTopicExamples = (string | redacted.Redacted<string>)[];
const GuardrailTopicExamples = SuggestedMessagesList as any as S.Schema<GuardrailTopicExamples>;
export type GuardrailTopicType = string | redacted.Redacted<string>;
export interface GuardrailTopicConfig {
  name: string | redacted.Redacted<string>;
  definition: string | redacted.Redacted<string>;
  examples?: (string | redacted.Redacted<string>)[];
  type: string | redacted.Redacted<string>;
}
const GuardrailTopicConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    name: SensitiveString,
    definition: SensitiveString,
    examples: S.optional(GuardrailTopicExamples),
    type: SensitiveString,
  }),
).annotate({ identifier: "GuardrailTopicConfig" }) as any as S.Schema<GuardrailTopicConfig>;
export type GuardrailTopicsConfig = GuardrailTopicConfig[];
const GuardrailTopicsConfig = /*@__PURE__*/ S.Array(GuardrailTopicConfig);
export interface AIGuardrailTopicPolicyConfig {
  topicsConfig: GuardrailTopicConfig[];
}
const AIGuardrailTopicPolicyConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ topicsConfig: GuardrailTopicsConfig }),
).annotate({
  identifier: "AIGuardrailTopicPolicyConfig",
}) as any as S.Schema<AIGuardrailTopicPolicyConfig>;
export type GuardrailContentFilterType = string | redacted.Redacted<string>;
export type GuardrailFilterStrength = string | redacted.Redacted<string>;
export interface GuardrailContentFilterConfig {
  type: string | redacted.Redacted<string>;
  inputStrength: string | redacted.Redacted<string>;
  outputStrength: string | redacted.Redacted<string>;
}
const GuardrailContentFilterConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    type: SensitiveString,
    inputStrength: SensitiveString,
    outputStrength: SensitiveString,
  }),
).annotate({
  identifier: "GuardrailContentFilterConfig",
}) as any as S.Schema<GuardrailContentFilterConfig>;
export type GuardrailContentFiltersConfig = GuardrailContentFilterConfig[];
const GuardrailContentFiltersConfig = /*@__PURE__*/ S.Array(GuardrailContentFilterConfig);
export interface AIGuardrailContentPolicyConfig {
  filtersConfig: GuardrailContentFilterConfig[];
}
const AIGuardrailContentPolicyConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ filtersConfig: GuardrailContentFiltersConfig }),
).annotate({
  identifier: "AIGuardrailContentPolicyConfig",
}) as any as S.Schema<AIGuardrailContentPolicyConfig>;
export type GuardrailWordText = string | redacted.Redacted<string>;
export interface GuardrailWordConfig {
  text: string | redacted.Redacted<string>;
}
const GuardrailWordConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ text: SensitiveString }),
).annotate({ identifier: "GuardrailWordConfig" }) as any as S.Schema<GuardrailWordConfig>;
export type GuardrailWordsConfig = GuardrailWordConfig[];
const GuardrailWordsConfig = /*@__PURE__*/ S.Array(GuardrailWordConfig);
export type GuardrailManagedWordsType = string | redacted.Redacted<string>;
export interface GuardrailManagedWordsConfig {
  type: string | redacted.Redacted<string>;
}
const GuardrailManagedWordsConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ type: SensitiveString }),
).annotate({
  identifier: "GuardrailManagedWordsConfig",
}) as any as S.Schema<GuardrailManagedWordsConfig>;
export type GuardrailManagedWordListsConfig = GuardrailManagedWordsConfig[];
const GuardrailManagedWordListsConfig = /*@__PURE__*/ S.Array(GuardrailManagedWordsConfig);
export interface AIGuardrailWordPolicyConfig {
  wordsConfig?: GuardrailWordConfig[];
  managedWordListsConfig?: GuardrailManagedWordsConfig[];
}
const AIGuardrailWordPolicyConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    wordsConfig: S.optional(GuardrailWordsConfig),
    managedWordListsConfig: S.optional(GuardrailManagedWordListsConfig),
  }),
).annotate({
  identifier: "AIGuardrailWordPolicyConfig",
}) as any as S.Schema<AIGuardrailWordPolicyConfig>;
export type GuardrailPiiEntityType = string | redacted.Redacted<string>;
export type GuardrailSensitiveInformationAction = string | redacted.Redacted<string>;
export interface GuardrailPiiEntityConfig {
  type: string | redacted.Redacted<string>;
  action: string | redacted.Redacted<string>;
}
const GuardrailPiiEntityConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ type: SensitiveString, action: SensitiveString }),
).annotate({ identifier: "GuardrailPiiEntityConfig" }) as any as S.Schema<GuardrailPiiEntityConfig>;
export type GuardrailPiiEntitiesConfig = GuardrailPiiEntityConfig[];
const GuardrailPiiEntitiesConfig = /*@__PURE__*/ S.Array(GuardrailPiiEntityConfig);
export type GuardrailRegexName = string | redacted.Redacted<string>;
export type GuardrailRegexDescription = string | redacted.Redacted<string>;
export type GuardrailRegexPattern = string | redacted.Redacted<string>;
export interface GuardrailRegexConfig {
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  pattern: string | redacted.Redacted<string>;
  action: string | redacted.Redacted<string>;
}
const GuardrailRegexConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    name: SensitiveString,
    description: S.optional(SensitiveString),
    pattern: SensitiveString,
    action: SensitiveString,
  }),
).annotate({ identifier: "GuardrailRegexConfig" }) as any as S.Schema<GuardrailRegexConfig>;
export type GuardrailRegexesConfig = GuardrailRegexConfig[];
const GuardrailRegexesConfig = /*@__PURE__*/ S.Array(GuardrailRegexConfig);
export interface AIGuardrailSensitiveInformationPolicyConfig {
  piiEntitiesConfig?: GuardrailPiiEntityConfig[];
  regexesConfig?: GuardrailRegexConfig[];
}
const AIGuardrailSensitiveInformationPolicyConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    piiEntitiesConfig: S.optional(GuardrailPiiEntitiesConfig),
    regexesConfig: S.optional(GuardrailRegexesConfig),
  }),
).annotate({
  identifier: "AIGuardrailSensitiveInformationPolicyConfig",
}) as any as S.Schema<AIGuardrailSensitiveInformationPolicyConfig>;
export type GuardrailContextualGroundingFilterType = string | redacted.Redacted<string>;
export type GuardrailContextualGroundingFilterThreshold = number;
export interface GuardrailContextualGroundingFilterConfig {
  type: string | redacted.Redacted<string>;
  threshold: number;
}
const GuardrailContextualGroundingFilterConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ type: SensitiveString, threshold: S.Number }),
).annotate({
  identifier: "GuardrailContextualGroundingFilterConfig",
}) as any as S.Schema<GuardrailContextualGroundingFilterConfig>;
export type GuardrailContextualGroundingFiltersConfig = GuardrailContextualGroundingFilterConfig[];
const GuardrailContextualGroundingFiltersConfig = /*@__PURE__*/ S.Array(
  GuardrailContextualGroundingFilterConfig,
);
export interface AIGuardrailContextualGroundingPolicyConfig {
  filtersConfig: GuardrailContextualGroundingFilterConfig[];
}
const AIGuardrailContextualGroundingPolicyConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ filtersConfig: GuardrailContextualGroundingFiltersConfig }),
).annotate({
  identifier: "AIGuardrailContextualGroundingPolicyConfig",
}) as any as S.Schema<AIGuardrailContextualGroundingPolicyConfig>;
export interface CreateAIGuardrailRequest {
  clientToken?: string;
  assistantId: string;
  name: string;
  blockedInputMessaging: string | redacted.Redacted<string>;
  blockedOutputsMessaging: string | redacted.Redacted<string>;
  visibilityStatus: string;
  description?: string | redacted.Redacted<string>;
  topicPolicyConfig?: AIGuardrailTopicPolicyConfig;
  contentPolicyConfig?: AIGuardrailContentPolicyConfig;
  wordPolicyConfig?: AIGuardrailWordPolicyConfig;
  sensitiveInformationPolicyConfig?: AIGuardrailSensitiveInformationPolicyConfig;
  contextualGroundingPolicyConfig?: AIGuardrailContextualGroundingPolicyConfig;
  tags?: { [key: string]: string | undefined };
}
const CreateAIGuardrailRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    name: S.String,
    blockedInputMessaging: SensitiveString,
    blockedOutputsMessaging: SensitiveString,
    visibilityStatus: S.String,
    description: S.optional(SensitiveString),
    topicPolicyConfig: S.optional(AIGuardrailTopicPolicyConfig),
    contentPolicyConfig: S.optional(AIGuardrailContentPolicyConfig),
    wordPolicyConfig: S.optional(AIGuardrailWordPolicyConfig),
    sensitiveInformationPolicyConfig: S.optional(AIGuardrailSensitiveInformationPolicyConfig),
    contextualGroundingPolicyConfig: S.optional(AIGuardrailContextualGroundingPolicyConfig),
    tags: S.optional(Tags),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/assistants/{assistantId}/aiguardrails" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "CreateAIGuardrailRequest" }) as any as S.Schema<CreateAIGuardrailRequest>;
export interface AIGuardrailData {
  assistantId: string;
  assistantArn: string;
  aiGuardrailArn: string;
  aiGuardrailId: string;
  name: string;
  visibilityStatus: string;
  blockedInputMessaging: string | redacted.Redacted<string>;
  blockedOutputsMessaging: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  topicPolicyConfig?: AIGuardrailTopicPolicyConfig;
  contentPolicyConfig?: AIGuardrailContentPolicyConfig;
  wordPolicyConfig?: AIGuardrailWordPolicyConfig;
  sensitiveInformationPolicyConfig?: AIGuardrailSensitiveInformationPolicyConfig;
  contextualGroundingPolicyConfig?: AIGuardrailContextualGroundingPolicyConfig;
  tags?: { [key: string]: string | undefined };
  status?: string;
  modifiedTime?: Date;
}
const AIGuardrailData = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String,
    assistantArn: S.String,
    aiGuardrailArn: S.String,
    aiGuardrailId: S.String,
    name: S.String,
    visibilityStatus: S.String,
    blockedInputMessaging: SensitiveString,
    blockedOutputsMessaging: SensitiveString,
    description: S.optional(SensitiveString),
    topicPolicyConfig: S.optional(AIGuardrailTopicPolicyConfig),
    contentPolicyConfig: S.optional(AIGuardrailContentPolicyConfig),
    wordPolicyConfig: S.optional(AIGuardrailWordPolicyConfig),
    sensitiveInformationPolicyConfig: S.optional(AIGuardrailSensitiveInformationPolicyConfig),
    contextualGroundingPolicyConfig: S.optional(AIGuardrailContextualGroundingPolicyConfig),
    tags: S.optional(Tags),
    status: S.optional(S.String),
    modifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
  }),
).annotate({ identifier: "AIGuardrailData" }) as any as S.Schema<AIGuardrailData>;
export interface CreateAIGuardrailResponse {
  aiGuardrail?: AIGuardrailData;
}
const CreateAIGuardrailResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ aiGuardrail: S.optional(AIGuardrailData) }),
).annotate({
  identifier: "CreateAIGuardrailResponse",
}) as any as S.Schema<CreateAIGuardrailResponse>;
export interface CreateAIGuardrailVersionRequest {
  assistantId: string;
  aiGuardrailId: string;
  modifiedTime?: Date;
  clientToken?: string;
}
const CreateAIGuardrailVersionRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    aiGuardrailId: S.String.pipe(T.HttpLabel("aiGuardrailId")),
    modifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(
    T.all(
      T.Http({
        method: "POST",
        uri: "/assistants/{assistantId}/aiguardrails/{aiGuardrailId}/versions",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "CreateAIGuardrailVersionRequest",
}) as any as S.Schema<CreateAIGuardrailVersionRequest>;
export interface CreateAIGuardrailVersionResponse {
  aiGuardrail?: AIGuardrailData;
  versionNumber?: number;
}
const CreateAIGuardrailVersionResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ aiGuardrail: S.optional(AIGuardrailData), versionNumber: S.optional(S.Number) }),
).annotate({
  identifier: "CreateAIGuardrailVersionResponse",
}) as any as S.Schema<CreateAIGuardrailVersionResponse>;
export type AIPromptType = string;
export type TextAIPrompt = string | redacted.Redacted<string>;
export interface TextFullAIPromptEditTemplateConfiguration {
  text: string | redacted.Redacted<string>;
}
const TextFullAIPromptEditTemplateConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ text: SensitiveString }),
).annotate({
  identifier: "TextFullAIPromptEditTemplateConfiguration",
}) as any as S.Schema<TextFullAIPromptEditTemplateConfiguration>;
export type AIPromptTemplateConfiguration = {
  textFullAIPromptEditTemplateConfiguration: TextFullAIPromptEditTemplateConfiguration;
};
const AIPromptTemplateConfiguration = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({
    textFullAIPromptEditTemplateConfiguration: TextFullAIPromptEditTemplateConfiguration,
  }),
]);
export type AIPromptTemplateType = string;
export type AIPromptModelIdentifier = string;
export type AIPromptAPIFormat = string;
export type Probability = number;
export type TopK = number;
export type MaxTokensToSample = number;
export interface AIPromptInferenceConfiguration {
  temperature?: number;
  topP?: number;
  topK?: number;
  maxTokensToSample?: number;
}
const AIPromptInferenceConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    temperature: S.optional(S.Number),
    topP: S.optional(S.Number),
    topK: S.optional(S.Number),
    maxTokensToSample: S.optional(S.Number),
  }),
).annotate({
  identifier: "AIPromptInferenceConfiguration",
}) as any as S.Schema<AIPromptInferenceConfiguration>;
export interface CreateAIPromptRequest {
  clientToken?: string;
  assistantId: string;
  name: string;
  type: string;
  templateConfiguration: AIPromptTemplateConfiguration;
  visibilityStatus: string;
  templateType: string;
  modelId: string;
  apiFormat: string;
  tags?: { [key: string]: string | undefined };
  description?: string;
  inferenceConfiguration?: AIPromptInferenceConfiguration;
}
const CreateAIPromptRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    name: S.String,
    type: S.String,
    templateConfiguration: AIPromptTemplateConfiguration,
    visibilityStatus: S.String,
    templateType: S.String,
    modelId: S.String,
    apiFormat: S.String,
    tags: S.optional(Tags),
    description: S.optional(S.String),
    inferenceConfiguration: S.optional(AIPromptInferenceConfiguration),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/assistants/{assistantId}/aiprompts" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "CreateAIPromptRequest" }) as any as S.Schema<CreateAIPromptRequest>;
export interface AIPromptData {
  assistantId: string;
  assistantArn: string;
  aiPromptId: string;
  aiPromptArn: string;
  name: string;
  type: string;
  templateType: string;
  modelId: string;
  apiFormat: string;
  templateConfiguration: AIPromptTemplateConfiguration;
  inferenceConfiguration?: AIPromptInferenceConfiguration;
  modifiedTime?: Date;
  description?: string;
  visibilityStatus: string;
  tags?: { [key: string]: string | undefined };
  origin?: string;
  status?: string;
}
const AIPromptData = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String,
    assistantArn: S.String,
    aiPromptId: S.String,
    aiPromptArn: S.String,
    name: S.String,
    type: S.String,
    templateType: S.String,
    modelId: S.String,
    apiFormat: S.String,
    templateConfiguration: AIPromptTemplateConfiguration,
    inferenceConfiguration: S.optional(AIPromptInferenceConfiguration),
    modifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    description: S.optional(S.String),
    visibilityStatus: S.String,
    tags: S.optional(Tags),
    origin: S.optional(S.String),
    status: S.optional(S.String),
  }),
).annotate({ identifier: "AIPromptData" }) as any as S.Schema<AIPromptData>;
export interface CreateAIPromptResponse {
  aiPrompt?: AIPromptData;
}
const CreateAIPromptResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ aiPrompt: S.optional(AIPromptData) }),
).annotate({ identifier: "CreateAIPromptResponse" }) as any as S.Schema<CreateAIPromptResponse>;
export interface CreateAIPromptVersionRequest {
  assistantId: string;
  aiPromptId: string;
  modifiedTime?: Date;
  clientToken?: string;
}
const CreateAIPromptVersionRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    aiPromptId: S.String.pipe(T.HttpLabel("aiPromptId")),
    modifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/assistants/{assistantId}/aiprompts/{aiPromptId}/versions" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "CreateAIPromptVersionRequest",
}) as any as S.Schema<CreateAIPromptVersionRequest>;
export interface CreateAIPromptVersionResponse {
  aiPrompt?: AIPromptData;
  versionNumber?: number;
}
const CreateAIPromptVersionResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ aiPrompt: S.optional(AIPromptData), versionNumber: S.optional(S.Number) }),
).annotate({
  identifier: "CreateAIPromptVersionResponse",
}) as any as S.Schema<CreateAIPromptVersionResponse>;
export type AssistantType = string;
export interface ServerSideEncryptionConfiguration {
  kmsKeyId?: string;
}
const ServerSideEncryptionConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ kmsKeyId: S.optional(S.String) }),
).annotate({
  identifier: "ServerSideEncryptionConfiguration",
}) as any as S.Schema<ServerSideEncryptionConfiguration>;
export interface CreateAssistantRequest {
  clientToken?: string;
  name: string;
  type: string;
  description?: string;
  tags?: { [key: string]: string | undefined };
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
}
const CreateAssistantRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    name: S.String,
    type: S.String,
    description: S.optional(S.String),
    tags: S.optional(Tags),
    serverSideEncryptionConfiguration: S.optional(ServerSideEncryptionConfiguration),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/assistants" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "CreateAssistantRequest" }) as any as S.Schema<CreateAssistantRequest>;
export type AssistantStatus = string;
export interface AssistantIntegrationConfiguration {
  topicIntegrationArn?: string;
}
const AssistantIntegrationConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ topicIntegrationArn: S.optional(S.String) }),
).annotate({
  identifier: "AssistantIntegrationConfiguration",
}) as any as S.Schema<AssistantIntegrationConfiguration>;
export type AssistantCapabilityType = string;
export interface AssistantCapabilityConfiguration {
  type?: string;
}
const AssistantCapabilityConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ type: S.optional(S.String) }),
).annotate({
  identifier: "AssistantCapabilityConfiguration",
}) as any as S.Schema<AssistantCapabilityConfiguration>;
export interface AIAgentConfigurationData {
  aiAgentId: string;
  enabled?: boolean;
}
const AIAgentConfigurationData = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ aiAgentId: S.String, enabled: S.optional(S.Boolean) }),
).annotate({ identifier: "AIAgentConfigurationData" }) as any as S.Schema<AIAgentConfigurationData>;
export type AIAgentConfigurationMap = { [key: string]: AIAgentConfigurationData | undefined };
const AIAgentConfigurationMap = /*@__PURE__*/ S.Record(
  S.String,
  /*@__PURE__*/ AIAgentConfigurationData.pipe(S.optional),
);
export interface OrchestratorConfigurationEntry {
  aiAgentId?: string;
  orchestratorUseCase: string;
}
const OrchestratorConfigurationEntry = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ aiAgentId: S.optional(S.String), orchestratorUseCase: S.String }),
).annotate({
  identifier: "OrchestratorConfigurationEntry",
}) as any as S.Schema<OrchestratorConfigurationEntry>;
export type OrchestratorConfigurationList = OrchestratorConfigurationEntry[];
const OrchestratorConfigurationList = /*@__PURE__*/ S.Array(OrchestratorConfigurationEntry);
export interface AssistantData {
  assistantId: string;
  assistantArn: string;
  name: string;
  type: string;
  status: string;
  description?: string;
  tags?: { [key: string]: string | undefined };
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  integrationConfiguration?: AssistantIntegrationConfiguration;
  capabilityConfiguration?: AssistantCapabilityConfiguration;
  aiAgentConfiguration?: { [key: string]: AIAgentConfigurationData | undefined };
  orchestratorConfigurationList?: OrchestratorConfigurationEntry[];
}
const AssistantData = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String,
    assistantArn: S.String,
    name: S.String,
    type: S.String,
    status: S.String,
    description: S.optional(S.String),
    tags: S.optional(Tags),
    serverSideEncryptionConfiguration: S.optional(ServerSideEncryptionConfiguration),
    integrationConfiguration: S.optional(AssistantIntegrationConfiguration),
    capabilityConfiguration: S.optional(AssistantCapabilityConfiguration),
    aiAgentConfiguration: S.optional(AIAgentConfigurationMap),
    orchestratorConfigurationList: S.optional(OrchestratorConfigurationList),
  }),
).annotate({ identifier: "AssistantData" }) as any as S.Schema<AssistantData>;
export interface CreateAssistantResponse {
  assistant?: AssistantData;
}
const CreateAssistantResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ assistant: S.optional(AssistantData) }),
).annotate({ identifier: "CreateAssistantResponse" }) as any as S.Schema<CreateAssistantResponse>;
export type AssociationType = string;
export type BedrockKnowledgeBaseArn = string;
export type AccessRoleArn = string;
export interface ExternalBedrockKnowledgeBaseConfig {
  bedrockKnowledgeBaseArn: string;
  accessRoleArn: string;
}
const ExternalBedrockKnowledgeBaseConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ bedrockKnowledgeBaseArn: S.String, accessRoleArn: S.String }),
).annotate({
  identifier: "ExternalBedrockKnowledgeBaseConfig",
}) as any as S.Schema<ExternalBedrockKnowledgeBaseConfig>;
export type AssistantAssociationInputData =
  | { knowledgeBaseId: string; externalBedrockKnowledgeBaseConfig?: never }
  | {
      knowledgeBaseId?: never;
      externalBedrockKnowledgeBaseConfig: ExternalBedrockKnowledgeBaseConfig;
    };
const AssistantAssociationInputData = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ knowledgeBaseId: S.String }),
  /*@__PURE__*/ S.Struct({
    externalBedrockKnowledgeBaseConfig: ExternalBedrockKnowledgeBaseConfig,
  }),
]);
export interface CreateAssistantAssociationRequest {
  assistantId: string;
  associationType: string;
  association: AssistantAssociationInputData;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateAssistantAssociationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    associationType: S.String,
    association: AssistantAssociationInputData,
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    tags: S.optional(Tags),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/assistants/{assistantId}/associations" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "CreateAssistantAssociationRequest",
}) as any as S.Schema<CreateAssistantAssociationRequest>;
export interface KnowledgeBaseAssociationData {
  knowledgeBaseId?: string;
  knowledgeBaseArn?: string;
}
const KnowledgeBaseAssociationData = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ knowledgeBaseId: S.optional(S.String), knowledgeBaseArn: S.optional(S.String) }),
).annotate({
  identifier: "KnowledgeBaseAssociationData",
}) as any as S.Schema<KnowledgeBaseAssociationData>;
export type AssistantAssociationOutputData =
  | {
      knowledgeBaseAssociation: KnowledgeBaseAssociationData;
      externalBedrockKnowledgeBaseConfig?: never;
    }
  | {
      knowledgeBaseAssociation?: never;
      externalBedrockKnowledgeBaseConfig: ExternalBedrockKnowledgeBaseConfig;
    };
const AssistantAssociationOutputData = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ knowledgeBaseAssociation: KnowledgeBaseAssociationData }),
  /*@__PURE__*/ S.Struct({
    externalBedrockKnowledgeBaseConfig: ExternalBedrockKnowledgeBaseConfig,
  }),
]);
export interface AssistantAssociationData {
  assistantAssociationId: string;
  assistantAssociationArn: string;
  assistantId: string;
  assistantArn: string;
  associationType: string;
  associationData: AssistantAssociationOutputData;
  tags?: { [key: string]: string | undefined };
}
const AssistantAssociationData = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantAssociationId: S.String,
    assistantAssociationArn: S.String,
    assistantId: S.String,
    assistantArn: S.String,
    associationType: S.String,
    associationData: AssistantAssociationOutputData,
    tags: S.optional(Tags),
  }),
).annotate({ identifier: "AssistantAssociationData" }) as any as S.Schema<AssistantAssociationData>;
export interface CreateAssistantAssociationResponse {
  assistantAssociation?: AssistantAssociationData;
}
const CreateAssistantAssociationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ assistantAssociation: S.optional(AssistantAssociationData) }),
).annotate({
  identifier: "CreateAssistantAssociationResponse",
}) as any as S.Schema<CreateAssistantAssociationResponse>;
export type ContentTitle = string;
export type Uri = string;
export type ContentMetadata = { [key: string]: string | undefined };
const ContentMetadata = /*@__PURE__*/ S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
export type UploadId = string;
export interface CreateContentRequest {
  knowledgeBaseId: string;
  name: string;
  title?: string;
  overrideLinkOutUri?: string;
  metadata?: { [key: string]: string | undefined };
  uploadId: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateContentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
    name: S.String,
    title: S.optional(S.String),
    overrideLinkOutUri: S.optional(S.String),
    metadata: S.optional(ContentMetadata),
    uploadId: S.String,
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    tags: S.optional(Tags),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/knowledgeBases/{knowledgeBaseId}/contents" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "CreateContentRequest" }) as any as S.Schema<CreateContentRequest>;
export type ContentType = string;
export type ContentStatus = string;
export type Url = string | redacted.Redacted<string>;
export interface ContentData {
  contentArn: string;
  contentId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  revisionId: string;
  title: string;
  contentType: string;
  status: string;
  metadata: { [key: string]: string | undefined };
  tags?: { [key: string]: string | undefined };
  linkOutUri?: string;
  url: string | redacted.Redacted<string>;
  urlExpiry: Date;
}
const ContentData = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    contentArn: S.String,
    contentId: S.String,
    knowledgeBaseArn: S.String,
    knowledgeBaseId: S.String,
    name: S.String,
    revisionId: S.String,
    title: S.String,
    contentType: S.String,
    status: S.String,
    metadata: ContentMetadata,
    tags: S.optional(Tags),
    linkOutUri: S.optional(S.String),
    url: SensitiveString,
    urlExpiry: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
  }),
).annotate({ identifier: "ContentData" }) as any as S.Schema<ContentData>;
export interface CreateContentResponse {
  content?: ContentData;
}
const CreateContentResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ content: S.optional(ContentData) }),
).annotate({ identifier: "CreateContentResponse" }) as any as S.Schema<CreateContentResponse>;
export type ContentAssociationType = string;
export interface AmazonConnectGuideAssociationData {
  flowId?: string;
}
const AmazonConnectGuideAssociationData = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ flowId: S.optional(S.String) }),
).annotate({
  identifier: "AmazonConnectGuideAssociationData",
}) as any as S.Schema<AmazonConnectGuideAssociationData>;
export type ContentAssociationContents = {
  amazonConnectGuideAssociation: AmazonConnectGuideAssociationData;
};
const ContentAssociationContents = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ amazonConnectGuideAssociation: AmazonConnectGuideAssociationData }),
]);
export interface CreateContentAssociationRequest {
  clientToken?: string;
  knowledgeBaseId: string;
  contentId: string;
  associationType: string;
  association: ContentAssociationContents;
  tags?: { [key: string]: string | undefined };
}
const CreateContentAssociationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
    contentId: S.String.pipe(T.HttpLabel("contentId")),
    associationType: S.String,
    association: ContentAssociationContents,
    tags: S.optional(Tags),
  }).pipe(
    T.all(
      T.Http({
        method: "POST",
        uri: "/knowledgeBases/{knowledgeBaseId}/contents/{contentId}/associations",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "CreateContentAssociationRequest",
}) as any as S.Schema<CreateContentAssociationRequest>;
export interface ContentAssociationData {
  knowledgeBaseId: string;
  knowledgeBaseArn: string;
  contentId: string;
  contentArn: string;
  contentAssociationId: string;
  contentAssociationArn: string;
  associationType: string;
  associationData: ContentAssociationContents;
  tags?: { [key: string]: string | undefined };
}
const ContentAssociationData = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    knowledgeBaseId: S.String,
    knowledgeBaseArn: S.String,
    contentId: S.String,
    contentArn: S.String,
    contentAssociationId: S.String,
    contentAssociationArn: S.String,
    associationType: S.String,
    associationData: ContentAssociationContents,
    tags: S.optional(Tags),
  }),
).annotate({ identifier: "ContentAssociationData" }) as any as S.Schema<ContentAssociationData>;
export interface CreateContentAssociationResponse {
  contentAssociation?: ContentAssociationData;
}
const CreateContentAssociationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ contentAssociation: S.optional(ContentAssociationData) }),
).annotate({
  identifier: "CreateContentAssociationResponse",
}) as any as S.Schema<CreateContentAssociationResponse>;
export type KnowledgeBaseType = string;
export type ObjectFieldsList = string[];
const ObjectFieldsList = ToolExampleList as any as S.Schema<ObjectFieldsList>;
export interface AppIntegrationsConfiguration {
  appIntegrationArn: string;
  objectFields?: string[];
}
const AppIntegrationsConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ appIntegrationArn: S.String, objectFields: S.optional(ObjectFieldsList) }),
).annotate({
  identifier: "AppIntegrationsConfiguration",
}) as any as S.Schema<AppIntegrationsConfiguration>;
export type WebUrl = string;
export interface SeedUrl {
  url?: string;
}
const SeedUrl = /*@__PURE__*/ S.suspend(() => S.Struct({ url: S.optional(S.String) })).annotate({
  identifier: "SeedUrl",
}) as any as S.Schema<SeedUrl>;
export type SeedUrls = SeedUrl[];
const SeedUrls = /*@__PURE__*/ S.Array(SeedUrl);
export interface UrlConfiguration {
  seedUrls?: SeedUrl[];
}
const UrlConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ seedUrls: S.optional(SeedUrls) }),
).annotate({ identifier: "UrlConfiguration" }) as any as S.Schema<UrlConfiguration>;
export interface WebCrawlerLimits {
  rateLimit?: number;
}
const WebCrawlerLimits = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ rateLimit: S.optional(S.Number) }),
).annotate({ identifier: "WebCrawlerLimits" }) as any as S.Schema<WebCrawlerLimits>;
export type UrlFilterPattern = string | redacted.Redacted<string>;
export type UrlFilterList = (string | redacted.Redacted<string>)[];
const UrlFilterList = SuggestedMessagesList as any as S.Schema<UrlFilterList>;
export type WebScopeType = string;
export interface WebCrawlerConfiguration {
  urlConfiguration: UrlConfiguration;
  crawlerLimits?: WebCrawlerLimits;
  inclusionFilters?: (string | redacted.Redacted<string>)[];
  exclusionFilters?: (string | redacted.Redacted<string>)[];
  scope?: string;
}
const WebCrawlerConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    urlConfiguration: UrlConfiguration,
    crawlerLimits: S.optional(WebCrawlerLimits),
    inclusionFilters: S.optional(UrlFilterList),
    exclusionFilters: S.optional(UrlFilterList),
    scope: S.optional(S.String),
  }),
).annotate({ identifier: "WebCrawlerConfiguration" }) as any as S.Schema<WebCrawlerConfiguration>;
export type ManagedSourceConfiguration = { webCrawlerConfiguration: WebCrawlerConfiguration };
const ManagedSourceConfiguration = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ webCrawlerConfiguration: WebCrawlerConfiguration }),
]);
export type SourceConfiguration =
  | { appIntegrations: AppIntegrationsConfiguration; managedSourceConfiguration?: never }
  | { appIntegrations?: never; managedSourceConfiguration: ManagedSourceConfiguration };
const SourceConfiguration = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ appIntegrations: AppIntegrationsConfiguration }),
  /*@__PURE__*/ S.Struct({ managedSourceConfiguration: ManagedSourceConfiguration }),
]);
export interface RenderingConfiguration {
  templateUri?: string;
}
const RenderingConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ templateUri: S.optional(S.String) }),
).annotate({ identifier: "RenderingConfiguration" }) as any as S.Schema<RenderingConfiguration>;
export type ChunkingStrategy = string;
export interface FixedSizeChunkingConfiguration {
  maxTokens: number;
  overlapPercentage: number;
}
const FixedSizeChunkingConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ maxTokens: S.Number, overlapPercentage: S.Number }),
).annotate({
  identifier: "FixedSizeChunkingConfiguration",
}) as any as S.Schema<FixedSizeChunkingConfiguration>;
export interface HierarchicalChunkingLevelConfiguration {
  maxTokens: number;
}
const HierarchicalChunkingLevelConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ maxTokens: S.Number }),
).annotate({
  identifier: "HierarchicalChunkingLevelConfiguration",
}) as any as S.Schema<HierarchicalChunkingLevelConfiguration>;
export type HierarchicalChunkingLevelConfigurations = HierarchicalChunkingLevelConfiguration[];
const HierarchicalChunkingLevelConfigurations = /*@__PURE__*/ S.Array(
  HierarchicalChunkingLevelConfiguration,
);
export interface HierarchicalChunkingConfiguration {
  levelConfigurations: HierarchicalChunkingLevelConfiguration[];
  overlapTokens: number;
}
const HierarchicalChunkingConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    levelConfigurations: HierarchicalChunkingLevelConfigurations,
    overlapTokens: S.Number,
  }),
).annotate({
  identifier: "HierarchicalChunkingConfiguration",
}) as any as S.Schema<HierarchicalChunkingConfiguration>;
export interface SemanticChunkingConfiguration {
  maxTokens: number;
  bufferSize: number;
  breakpointPercentileThreshold: number;
}
const SemanticChunkingConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ maxTokens: S.Number, bufferSize: S.Number, breakpointPercentileThreshold: S.Number }),
).annotate({
  identifier: "SemanticChunkingConfiguration",
}) as any as S.Schema<SemanticChunkingConfiguration>;
export interface ChunkingConfiguration {
  chunkingStrategy: string;
  fixedSizeChunkingConfiguration?: FixedSizeChunkingConfiguration;
  hierarchicalChunkingConfiguration?: HierarchicalChunkingConfiguration;
  semanticChunkingConfiguration?: SemanticChunkingConfiguration;
}
const ChunkingConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    chunkingStrategy: S.String,
    fixedSizeChunkingConfiguration: S.optional(FixedSizeChunkingConfiguration),
    hierarchicalChunkingConfiguration: S.optional(HierarchicalChunkingConfiguration),
    semanticChunkingConfiguration: S.optional(SemanticChunkingConfiguration),
  }),
).annotate({ identifier: "ChunkingConfiguration" }) as any as S.Schema<ChunkingConfiguration>;
export type ParsingStrategy = string;
export type BedrockModelArnForParsing = string;
export type ParsingPromptText = string;
export interface ParsingPrompt {
  parsingPromptText: string;
}
const ParsingPrompt = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ parsingPromptText: S.String }),
).annotate({ identifier: "ParsingPrompt" }) as any as S.Schema<ParsingPrompt>;
export interface BedrockFoundationModelConfigurationForParsing {
  modelArn: string;
  parsingPrompt?: ParsingPrompt;
}
const BedrockFoundationModelConfigurationForParsing = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ modelArn: S.String, parsingPrompt: S.optional(ParsingPrompt) }),
).annotate({
  identifier: "BedrockFoundationModelConfigurationForParsing",
}) as any as S.Schema<BedrockFoundationModelConfigurationForParsing>;
export interface ParsingConfiguration {
  parsingStrategy: string;
  bedrockFoundationModelConfiguration?: BedrockFoundationModelConfigurationForParsing;
}
const ParsingConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    parsingStrategy: S.String,
    bedrockFoundationModelConfiguration: S.optional(BedrockFoundationModelConfigurationForParsing),
  }),
).annotate({ identifier: "ParsingConfiguration" }) as any as S.Schema<ParsingConfiguration>;
export interface VectorIngestionConfiguration {
  chunkingConfiguration?: ChunkingConfiguration;
  parsingConfiguration?: ParsingConfiguration;
}
const VectorIngestionConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    chunkingConfiguration: S.optional(ChunkingConfiguration),
    parsingConfiguration: S.optional(ParsingConfiguration),
  }),
).annotate({
  identifier: "VectorIngestionConfiguration",
}) as any as S.Schema<VectorIngestionConfiguration>;
export interface CreateKnowledgeBaseRequest {
  clientToken?: string;
  name: string;
  knowledgeBaseType: string;
  sourceConfiguration?: SourceConfiguration;
  renderingConfiguration?: RenderingConfiguration;
  vectorIngestionConfiguration?: VectorIngestionConfiguration;
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  description?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateKnowledgeBaseRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    name: S.String,
    knowledgeBaseType: S.String,
    sourceConfiguration: S.optional(SourceConfiguration),
    renderingConfiguration: S.optional(RenderingConfiguration),
    vectorIngestionConfiguration: S.optional(VectorIngestionConfiguration),
    serverSideEncryptionConfiguration: S.optional(ServerSideEncryptionConfiguration),
    description: S.optional(S.String),
    tags: S.optional(Tags),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/knowledgeBases" }), svc, auth, proto, ver, rules)),
).annotate({
  identifier: "CreateKnowledgeBaseRequest",
}) as any as S.Schema<CreateKnowledgeBaseRequest>;
export type KnowledgeBaseStatus = string;
export type SyncStatus = string;
export type FailureReason = string[];
const FailureReason = ToolExampleList as any as S.Schema<FailureReason>;
export interface KnowledgeBaseData {
  knowledgeBaseId: string;
  knowledgeBaseArn: string;
  name: string;
  knowledgeBaseType: string;
  status: string;
  lastContentModificationTime?: Date;
  vectorIngestionConfiguration?: VectorIngestionConfiguration;
  sourceConfiguration?: SourceConfiguration;
  renderingConfiguration?: RenderingConfiguration;
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  description?: string;
  tags?: { [key: string]: string | undefined };
  ingestionStatus?: string;
  ingestionFailureReasons?: string[];
}
const KnowledgeBaseData = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    knowledgeBaseId: S.String,
    knowledgeBaseArn: S.String,
    name: S.String,
    knowledgeBaseType: S.String,
    status: S.String,
    lastContentModificationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    vectorIngestionConfiguration: S.optional(VectorIngestionConfiguration),
    sourceConfiguration: S.optional(SourceConfiguration),
    renderingConfiguration: S.optional(RenderingConfiguration),
    serverSideEncryptionConfiguration: S.optional(ServerSideEncryptionConfiguration),
    description: S.optional(S.String),
    tags: S.optional(Tags),
    ingestionStatus: S.optional(S.String),
    ingestionFailureReasons: S.optional(FailureReason),
  }),
).annotate({ identifier: "KnowledgeBaseData" }) as any as S.Schema<KnowledgeBaseData>;
export interface CreateKnowledgeBaseResponse {
  knowledgeBase?: KnowledgeBaseData;
}
const CreateKnowledgeBaseResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ knowledgeBase: S.optional(KnowledgeBaseData) }),
).annotate({
  identifier: "CreateKnowledgeBaseResponse",
}) as any as S.Schema<CreateKnowledgeBaseResponse>;
export type NonEmptyUnlimitedString = string | redacted.Redacted<string>;
export type MessageTemplateBodyContentProvider = { content: string | redacted.Redacted<string> };
const MessageTemplateBodyContentProvider = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ content: SensitiveString }),
]);
export interface EmailMessageTemplateContentBody {
  plainText?: MessageTemplateBodyContentProvider;
  html?: MessageTemplateBodyContentProvider;
}
const EmailMessageTemplateContentBody = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    plainText: S.optional(MessageTemplateBodyContentProvider),
    html: S.optional(MessageTemplateBodyContentProvider),
  }),
).annotate({
  identifier: "EmailMessageTemplateContentBody",
}) as any as S.Schema<EmailMessageTemplateContentBody>;
export type EmailHeaderKey = string;
export type EmailHeaderValue = string | redacted.Redacted<string>;
export interface EmailHeader {
  name?: string;
  value?: string | redacted.Redacted<string>;
}
const EmailHeader = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ name: S.optional(S.String), value: S.optional(SensitiveString) }),
).annotate({ identifier: "EmailHeader" }) as any as S.Schema<EmailHeader>;
export type EmailHeaders = EmailHeader[];
const EmailHeaders = /*@__PURE__*/ S.Array(EmailHeader);
export interface EmailMessageTemplateContent {
  subject?: string | redacted.Redacted<string>;
  body?: EmailMessageTemplateContentBody;
  headers?: EmailHeader[];
}
const EmailMessageTemplateContent = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    subject: S.optional(SensitiveString),
    body: S.optional(EmailMessageTemplateContentBody),
    headers: S.optional(EmailHeaders),
  }),
).annotate({
  identifier: "EmailMessageTemplateContent",
}) as any as S.Schema<EmailMessageTemplateContent>;
export interface SMSMessageTemplateContentBody {
  plainText?: MessageTemplateBodyContentProvider;
}
const SMSMessageTemplateContentBody = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ plainText: S.optional(MessageTemplateBodyContentProvider) }),
).annotate({
  identifier: "SMSMessageTemplateContentBody",
}) as any as S.Schema<SMSMessageTemplateContentBody>;
export interface SMSMessageTemplateContent {
  body?: SMSMessageTemplateContentBody;
}
const SMSMessageTemplateContent = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ body: S.optional(SMSMessageTemplateContentBody) }),
).annotate({
  identifier: "SMSMessageTemplateContent",
}) as any as S.Schema<SMSMessageTemplateContent>;
export type WhatsAppMessageTemplateContentData = string;
export interface WhatsAppMessageTemplateContent {
  data?: string;
}
const WhatsAppMessageTemplateContent = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ data: S.optional(S.String) }),
).annotate({
  identifier: "WhatsAppMessageTemplateContent",
}) as any as S.Schema<WhatsAppMessageTemplateContent>;
export type PushMessageAction = string;
export interface PushADMMessageTemplateContent {
  title?: string | redacted.Redacted<string>;
  body?: MessageTemplateBodyContentProvider;
  action?: string;
  sound?: string | redacted.Redacted<string>;
  url?: string | redacted.Redacted<string>;
  imageUrl?: string | redacted.Redacted<string>;
  imageIconUrl?: string | redacted.Redacted<string>;
  smallImageIconUrl?: string | redacted.Redacted<string>;
  rawContent?: MessageTemplateBodyContentProvider;
}
const PushADMMessageTemplateContent = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    title: S.optional(SensitiveString),
    body: S.optional(MessageTemplateBodyContentProvider),
    action: S.optional(S.String),
    sound: S.optional(SensitiveString),
    url: S.optional(SensitiveString),
    imageUrl: S.optional(SensitiveString),
    imageIconUrl: S.optional(SensitiveString),
    smallImageIconUrl: S.optional(SensitiveString),
    rawContent: S.optional(MessageTemplateBodyContentProvider),
  }),
).annotate({
  identifier: "PushADMMessageTemplateContent",
}) as any as S.Schema<PushADMMessageTemplateContent>;
export interface PushAPNSMessageTemplateContent {
  title?: string | redacted.Redacted<string>;
  body?: MessageTemplateBodyContentProvider;
  action?: string;
  sound?: string | redacted.Redacted<string>;
  url?: string | redacted.Redacted<string>;
  mediaUrl?: string | redacted.Redacted<string>;
  rawContent?: MessageTemplateBodyContentProvider;
}
const PushAPNSMessageTemplateContent = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    title: S.optional(SensitiveString),
    body: S.optional(MessageTemplateBodyContentProvider),
    action: S.optional(S.String),
    sound: S.optional(SensitiveString),
    url: S.optional(SensitiveString),
    mediaUrl: S.optional(SensitiveString),
    rawContent: S.optional(MessageTemplateBodyContentProvider),
  }),
).annotate({
  identifier: "PushAPNSMessageTemplateContent",
}) as any as S.Schema<PushAPNSMessageTemplateContent>;
export interface PushFCMMessageTemplateContent {
  title?: string | redacted.Redacted<string>;
  body?: MessageTemplateBodyContentProvider;
  action?: string;
  sound?: string | redacted.Redacted<string>;
  url?: string | redacted.Redacted<string>;
  imageUrl?: string | redacted.Redacted<string>;
  imageIconUrl?: string | redacted.Redacted<string>;
  smallImageIconUrl?: string | redacted.Redacted<string>;
  rawContent?: MessageTemplateBodyContentProvider;
}
const PushFCMMessageTemplateContent =
  PushADMMessageTemplateContent as any as S.Schema<PushFCMMessageTemplateContent>;
export interface PushBaiduMessageTemplateContent {
  title?: string | redacted.Redacted<string>;
  body?: MessageTemplateBodyContentProvider;
  action?: string;
  sound?: string | redacted.Redacted<string>;
  url?: string | redacted.Redacted<string>;
  imageUrl?: string | redacted.Redacted<string>;
  imageIconUrl?: string | redacted.Redacted<string>;
  smallImageIconUrl?: string | redacted.Redacted<string>;
  rawContent?: MessageTemplateBodyContentProvider;
}
const PushBaiduMessageTemplateContent =
  PushADMMessageTemplateContent as any as S.Schema<PushBaiduMessageTemplateContent>;
export interface PushMessageTemplateContent {
  adm?: PushADMMessageTemplateContent;
  apns?: PushAPNSMessageTemplateContent;
  fcm?: PushFCMMessageTemplateContent;
  baidu?: PushBaiduMessageTemplateContent;
}
const PushMessageTemplateContent = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    adm: S.optional(PushADMMessageTemplateContent),
    apns: S.optional(PushAPNSMessageTemplateContent),
    fcm: S.optional(PushFCMMessageTemplateContent),
    baidu: S.optional(PushBaiduMessageTemplateContent),
  }),
).annotate({
  identifier: "PushMessageTemplateContent",
}) as any as S.Schema<PushMessageTemplateContent>;
export type MessageTemplateContentProvider =
  | { email: EmailMessageTemplateContent; sms?: never; whatsApp?: never; push?: never }
  | { email?: never; sms: SMSMessageTemplateContent; whatsApp?: never; push?: never }
  | { email?: never; sms?: never; whatsApp: WhatsAppMessageTemplateContent; push?: never }
  | { email?: never; sms?: never; whatsApp?: never; push: PushMessageTemplateContent };
const MessageTemplateContentProvider = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ email: EmailMessageTemplateContent }),
  /*@__PURE__*/ S.Struct({ sms: SMSMessageTemplateContent }),
  /*@__PURE__*/ S.Struct({ whatsApp: WhatsAppMessageTemplateContent }),
  /*@__PURE__*/ S.Struct({ push: PushMessageTemplateContent }),
]);
export type ChannelSubtype = string;
export type LanguageCode = string;
export type WhatsAppBusinessAccountId = string;
export type WhatsAppMessageTemplateId = string;
export type WhatsAppMessageTemplateComponent = string;
export type WhatsAppMessageTemplateComponents = string[];
const WhatsAppMessageTemplateComponents =
  ToolExampleList as any as S.Schema<WhatsAppMessageTemplateComponents>;
export interface WhatsAppMessageTemplateSourceConfiguration {
  businessAccountId: string;
  templateId: string;
  components?: string[];
}
const WhatsAppMessageTemplateSourceConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    businessAccountId: S.String,
    templateId: S.String,
    components: S.optional(WhatsAppMessageTemplateComponents),
  }),
).annotate({
  identifier: "WhatsAppMessageTemplateSourceConfiguration",
}) as any as S.Schema<WhatsAppMessageTemplateSourceConfiguration>;
export type MessageTemplateSourceConfiguration = {
  whatsApp: WhatsAppMessageTemplateSourceConfiguration;
};
const MessageTemplateSourceConfiguration = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ whatsApp: WhatsAppMessageTemplateSourceConfiguration }),
]);
export type MessageTemplateAttributeValue = string | redacted.Redacted<string>;
export interface SystemEndpointAttributes {
  address?: string | redacted.Redacted<string>;
}
const SystemEndpointAttributes = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ address: S.optional(SensitiveString) }),
).annotate({ identifier: "SystemEndpointAttributes" }) as any as S.Schema<SystemEndpointAttributes>;
export interface SystemAttributes {
  name?: string | redacted.Redacted<string>;
  customerEndpoint?: SystemEndpointAttributes;
  systemEndpoint?: SystemEndpointAttributes;
}
const SystemAttributes = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.optional(SensitiveString),
    customerEndpoint: S.optional(SystemEndpointAttributes),
    systemEndpoint: S.optional(SystemEndpointAttributes),
  }),
).annotate({ identifier: "SystemAttributes" }) as any as S.Schema<SystemAttributes>;
export interface AgentAttributes {
  firstName?: string | redacted.Redacted<string>;
  lastName?: string | redacted.Redacted<string>;
}
const AgentAttributes = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ firstName: S.optional(SensitiveString), lastName: S.optional(SensitiveString) }),
).annotate({ identifier: "AgentAttributes" }) as any as S.Schema<AgentAttributes>;
export type MessageTemplateAttributeKey = string;
export type CustomAttributes = { [key: string]: string | redacted.Redacted<string> | undefined };
const CustomAttributes = /*@__PURE__*/ S.Record(
  S.String,
  /*@__PURE__*/ SensitiveString.pipe(S.optional),
);
export interface CustomerProfileAttributes {
  profileId?: string | redacted.Redacted<string>;
  profileARN?: string | redacted.Redacted<string>;
  firstName?: string | redacted.Redacted<string>;
  middleName?: string | redacted.Redacted<string>;
  lastName?: string | redacted.Redacted<string>;
  accountNumber?: string | redacted.Redacted<string>;
  emailAddress?: string | redacted.Redacted<string>;
  phoneNumber?: string | redacted.Redacted<string>;
  additionalInformation?: string | redacted.Redacted<string>;
  partyType?: string | redacted.Redacted<string>;
  businessName?: string | redacted.Redacted<string>;
  birthDate?: string | redacted.Redacted<string>;
  gender?: string | redacted.Redacted<string>;
  mobilePhoneNumber?: string | redacted.Redacted<string>;
  homePhoneNumber?: string | redacted.Redacted<string>;
  businessPhoneNumber?: string | redacted.Redacted<string>;
  businessEmailAddress?: string | redacted.Redacted<string>;
  address1?: string | redacted.Redacted<string>;
  address2?: string | redacted.Redacted<string>;
  address3?: string | redacted.Redacted<string>;
  address4?: string | redacted.Redacted<string>;
  city?: string | redacted.Redacted<string>;
  county?: string | redacted.Redacted<string>;
  country?: string | redacted.Redacted<string>;
  postalCode?: string | redacted.Redacted<string>;
  province?: string | redacted.Redacted<string>;
  state?: string | redacted.Redacted<string>;
  shippingAddress1?: string | redacted.Redacted<string>;
  shippingAddress2?: string | redacted.Redacted<string>;
  shippingAddress3?: string | redacted.Redacted<string>;
  shippingAddress4?: string | redacted.Redacted<string>;
  shippingCity?: string | redacted.Redacted<string>;
  shippingCounty?: string | redacted.Redacted<string>;
  shippingCountry?: string | redacted.Redacted<string>;
  shippingPostalCode?: string | redacted.Redacted<string>;
  shippingProvince?: string | redacted.Redacted<string>;
  shippingState?: string | redacted.Redacted<string>;
  mailingAddress1?: string | redacted.Redacted<string>;
  mailingAddress2?: string | redacted.Redacted<string>;
  mailingAddress3?: string | redacted.Redacted<string>;
  mailingAddress4?: string | redacted.Redacted<string>;
  mailingCity?: string | redacted.Redacted<string>;
  mailingCounty?: string | redacted.Redacted<string>;
  mailingCountry?: string | redacted.Redacted<string>;
  mailingPostalCode?: string | redacted.Redacted<string>;
  mailingProvince?: string | redacted.Redacted<string>;
  mailingState?: string | redacted.Redacted<string>;
  billingAddress1?: string | redacted.Redacted<string>;
  billingAddress2?: string | redacted.Redacted<string>;
  billingAddress3?: string | redacted.Redacted<string>;
  billingAddress4?: string | redacted.Redacted<string>;
  billingCity?: string | redacted.Redacted<string>;
  billingCounty?: string | redacted.Redacted<string>;
  billingCountry?: string | redacted.Redacted<string>;
  billingPostalCode?: string | redacted.Redacted<string>;
  billingProvince?: string | redacted.Redacted<string>;
  billingState?: string | redacted.Redacted<string>;
  custom?: { [key: string]: string | redacted.Redacted<string> | undefined };
}
const CustomerProfileAttributes = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    profileId: S.optional(SensitiveString),
    profileARN: S.optional(SensitiveString),
    firstName: S.optional(SensitiveString),
    middleName: S.optional(SensitiveString),
    lastName: S.optional(SensitiveString),
    accountNumber: S.optional(SensitiveString),
    emailAddress: S.optional(SensitiveString),
    phoneNumber: S.optional(SensitiveString),
    additionalInformation: S.optional(SensitiveString),
    partyType: S.optional(SensitiveString),
    businessName: S.optional(SensitiveString),
    birthDate: S.optional(SensitiveString),
    gender: S.optional(SensitiveString),
    mobilePhoneNumber: S.optional(SensitiveString),
    homePhoneNumber: S.optional(SensitiveString),
    businessPhoneNumber: S.optional(SensitiveString),
    businessEmailAddress: S.optional(SensitiveString),
    address1: S.optional(SensitiveString),
    address2: S.optional(SensitiveString),
    address3: S.optional(SensitiveString),
    address4: S.optional(SensitiveString),
    city: S.optional(SensitiveString),
    county: S.optional(SensitiveString),
    country: S.optional(SensitiveString),
    postalCode: S.optional(SensitiveString),
    province: S.optional(SensitiveString),
    state: S.optional(SensitiveString),
    shippingAddress1: S.optional(SensitiveString),
    shippingAddress2: S.optional(SensitiveString),
    shippingAddress3: S.optional(SensitiveString),
    shippingAddress4: S.optional(SensitiveString),
    shippingCity: S.optional(SensitiveString),
    shippingCounty: S.optional(SensitiveString),
    shippingCountry: S.optional(SensitiveString),
    shippingPostalCode: S.optional(SensitiveString),
    shippingProvince: S.optional(SensitiveString),
    shippingState: S.optional(SensitiveString),
    mailingAddress1: S.optional(SensitiveString),
    mailingAddress2: S.optional(SensitiveString),
    mailingAddress3: S.optional(SensitiveString),
    mailingAddress4: S.optional(SensitiveString),
    mailingCity: S.optional(SensitiveString),
    mailingCounty: S.optional(SensitiveString),
    mailingCountry: S.optional(SensitiveString),
    mailingPostalCode: S.optional(SensitiveString),
    mailingProvince: S.optional(SensitiveString),
    mailingState: S.optional(SensitiveString),
    billingAddress1: S.optional(SensitiveString),
    billingAddress2: S.optional(SensitiveString),
    billingAddress3: S.optional(SensitiveString),
    billingAddress4: S.optional(SensitiveString),
    billingCity: S.optional(SensitiveString),
    billingCounty: S.optional(SensitiveString),
    billingCountry: S.optional(SensitiveString),
    billingPostalCode: S.optional(SensitiveString),
    billingProvince: S.optional(SensitiveString),
    billingState: S.optional(SensitiveString),
    custom: S.optional(CustomAttributes),
  }),
).annotate({
  identifier: "CustomerProfileAttributes",
}) as any as S.Schema<CustomerProfileAttributes>;
export interface MessageTemplateAttributes {
  systemAttributes?: SystemAttributes;
  agentAttributes?: AgentAttributes;
  customerProfileAttributes?: CustomerProfileAttributes;
  customAttributes?: { [key: string]: string | redacted.Redacted<string> | undefined };
}
const MessageTemplateAttributes = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    systemAttributes: S.optional(SystemAttributes),
    agentAttributes: S.optional(AgentAttributes),
    customerProfileAttributes: S.optional(CustomerProfileAttributes),
    customAttributes: S.optional(CustomAttributes),
  }),
).annotate({
  identifier: "MessageTemplateAttributes",
}) as any as S.Schema<MessageTemplateAttributes>;
export type GroupingCriteria = string | redacted.Redacted<string>;
export type GroupingValue = string | redacted.Redacted<string>;
export type GroupingValues = (string | redacted.Redacted<string>)[];
const GroupingValues = SuggestedMessagesList as any as S.Schema<GroupingValues>;
export interface GroupingConfiguration {
  criteria?: string | redacted.Redacted<string>;
  values?: (string | redacted.Redacted<string>)[];
}
const GroupingConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ criteria: S.optional(SensitiveString), values: S.optional(GroupingValues) }),
).annotate({ identifier: "GroupingConfiguration" }) as any as S.Schema<GroupingConfiguration>;
export interface CreateMessageTemplateRequest {
  knowledgeBaseId: string;
  name?: string;
  content?: MessageTemplateContentProvider;
  description?: string;
  channelSubtype: string;
  language?: string;
  sourceConfiguration?: MessageTemplateSourceConfiguration;
  defaultAttributes?: MessageTemplateAttributes;
  groupingConfiguration?: GroupingConfiguration;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateMessageTemplateRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
    name: S.optional(S.String),
    content: S.optional(MessageTemplateContentProvider),
    description: S.optional(S.String),
    channelSubtype: S.String,
    language: S.optional(S.String),
    sourceConfiguration: S.optional(MessageTemplateSourceConfiguration),
    defaultAttributes: S.optional(MessageTemplateAttributes),
    groupingConfiguration: S.optional(GroupingConfiguration),
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    tags: S.optional(Tags),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/knowledgeBases/{knowledgeBaseId}/messageTemplates" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "CreateMessageTemplateRequest",
}) as any as S.Schema<CreateMessageTemplateRequest>;
export type Channel = string | redacted.Redacted<string>;
export type WhatsAppMessageTemplateName = string;
export type WhatsAppMessageTemplateLanguage = string;
export type WhatsAppSourceConfigurationStatus = string;
export interface WhatsAppMessageTemplateSourceConfigurationSummary {
  businessAccountId: string;
  templateId: string;
  name?: string;
  language?: string;
  components?: string[];
  status?: string;
  statusReason?: string | redacted.Redacted<string>;
}
const WhatsAppMessageTemplateSourceConfigurationSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    businessAccountId: S.String,
    templateId: S.String,
    name: S.optional(S.String),
    language: S.optional(S.String),
    components: S.optional(WhatsAppMessageTemplateComponents),
    status: S.optional(S.String),
    statusReason: S.optional(SensitiveString),
  }),
).annotate({
  identifier: "WhatsAppMessageTemplateSourceConfigurationSummary",
}) as any as S.Schema<WhatsAppMessageTemplateSourceConfigurationSummary>;
export type MessageTemplateSourceConfigurationSummary = {
  whatsApp: WhatsAppMessageTemplateSourceConfigurationSummary;
};
const MessageTemplateSourceConfigurationSummary = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ whatsApp: WhatsAppMessageTemplateSourceConfigurationSummary }),
]);
export type MessageTemplateAttributeType = string;
export type MessageTemplateAttributeTypeList = string[];
const MessageTemplateAttributeTypeList =
  ToolExampleList as any as S.Schema<MessageTemplateAttributeTypeList>;
export type MessageTemplateContentSha256 = string;
export interface MessageTemplateData {
  messageTemplateArn: string;
  messageTemplateId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  channel?: string | redacted.Redacted<string>;
  channelSubtype: string;
  createdTime: Date;
  lastModifiedTime: Date;
  lastModifiedBy: string;
  content?: MessageTemplateContentProvider;
  description?: string;
  language?: string;
  sourceConfigurationSummary?: MessageTemplateSourceConfigurationSummary;
  groupingConfiguration?: GroupingConfiguration;
  defaultAttributes?: MessageTemplateAttributes;
  attributeTypes?: string[];
  messageTemplateContentSha256: string;
  tags?: { [key: string]: string | undefined };
}
const MessageTemplateData = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    messageTemplateArn: S.String,
    messageTemplateId: S.String,
    knowledgeBaseArn: S.String,
    knowledgeBaseId: S.String,
    name: S.String,
    channel: S.optional(SensitiveString),
    channelSubtype: S.String,
    createdTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    lastModifiedTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    lastModifiedBy: S.String,
    content: S.optional(MessageTemplateContentProvider),
    description: S.optional(S.String),
    language: S.optional(S.String),
    sourceConfigurationSummary: S.optional(MessageTemplateSourceConfigurationSummary),
    groupingConfiguration: S.optional(GroupingConfiguration),
    defaultAttributes: S.optional(MessageTemplateAttributes),
    attributeTypes: S.optional(MessageTemplateAttributeTypeList),
    messageTemplateContentSha256: S.String,
    tags: S.optional(Tags),
  }),
).annotate({ identifier: "MessageTemplateData" }) as any as S.Schema<MessageTemplateData>;
export interface CreateMessageTemplateResponse {
  messageTemplate?: MessageTemplateData;
}
const CreateMessageTemplateResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ messageTemplate: S.optional(MessageTemplateData) }),
).annotate({
  identifier: "CreateMessageTemplateResponse",
}) as any as S.Schema<CreateMessageTemplateResponse>;
export type ContentDisposition = string;
export type AttachmentFileName = string | redacted.Redacted<string>;
export interface CreateMessageTemplateAttachmentRequest {
  knowledgeBaseId: string;
  messageTemplateId: string;
  contentDisposition: string;
  name: string | redacted.Redacted<string>;
  body: string | redacted.Redacted<string>;
  clientToken?: string;
}
const CreateMessageTemplateAttachmentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
    messageTemplateId: S.String.pipe(T.HttpLabel("messageTemplateId")),
    contentDisposition: S.String,
    name: SensitiveString,
    body: SensitiveString,
    clientToken: S.optional(S.String),
  }).pipe(
    T.all(
      T.Http({
        method: "POST",
        uri: "/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/attachments",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "CreateMessageTemplateAttachmentRequest",
}) as any as S.Schema<CreateMessageTemplateAttachmentRequest>;
export interface MessageTemplateAttachment {
  contentDisposition: string;
  name: string | redacted.Redacted<string>;
  uploadedTime: Date;
  url: string | redacted.Redacted<string>;
  urlExpiry: Date;
  attachmentId: string;
}
const MessageTemplateAttachment = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    contentDisposition: S.String,
    name: SensitiveString,
    uploadedTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    url: SensitiveString,
    urlExpiry: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    attachmentId: S.String,
  }),
).annotate({
  identifier: "MessageTemplateAttachment",
}) as any as S.Schema<MessageTemplateAttachment>;
export interface CreateMessageTemplateAttachmentResponse {
  attachment?: MessageTemplateAttachment;
}
const CreateMessageTemplateAttachmentResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ attachment: S.optional(MessageTemplateAttachment) }),
).annotate({
  identifier: "CreateMessageTemplateAttachmentResponse",
}) as any as S.Schema<CreateMessageTemplateAttachmentResponse>;
export interface CreateMessageTemplateVersionRequest {
  knowledgeBaseId: string;
  messageTemplateId: string;
  messageTemplateContentSha256?: string;
}
const CreateMessageTemplateVersionRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
    messageTemplateId: S.String.pipe(T.HttpLabel("messageTemplateId")),
    messageTemplateContentSha256: S.optional(S.String),
  }).pipe(
    T.all(
      T.Http({
        method: "POST",
        uri: "/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/versions",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "CreateMessageTemplateVersionRequest",
}) as any as S.Schema<CreateMessageTemplateVersionRequest>;
export type MessageTemplateAttachmentList = MessageTemplateAttachment[];
const MessageTemplateAttachmentList = /*@__PURE__*/ S.Array(MessageTemplateAttachment);
export interface ExtendedMessageTemplateData {
  messageTemplateArn: string;
  messageTemplateId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  channel?: string | redacted.Redacted<string>;
  channelSubtype: string;
  createdTime: Date;
  lastModifiedTime: Date;
  lastModifiedBy: string;
  content?: MessageTemplateContentProvider;
  description?: string;
  language?: string;
  sourceConfigurationSummary?: MessageTemplateSourceConfigurationSummary;
  groupingConfiguration?: GroupingConfiguration;
  defaultAttributes?: MessageTemplateAttributes;
  attributeTypes?: string[];
  attachments?: MessageTemplateAttachment[];
  isActive?: boolean;
  versionNumber?: number;
  messageTemplateContentSha256: string;
  tags?: { [key: string]: string | undefined };
}
const ExtendedMessageTemplateData = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    messageTemplateArn: S.String,
    messageTemplateId: S.String,
    knowledgeBaseArn: S.String,
    knowledgeBaseId: S.String,
    name: S.String,
    channel: S.optional(SensitiveString),
    channelSubtype: S.String,
    createdTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    lastModifiedTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    lastModifiedBy: S.String,
    content: S.optional(MessageTemplateContentProvider),
    description: S.optional(S.String),
    language: S.optional(S.String),
    sourceConfigurationSummary: S.optional(MessageTemplateSourceConfigurationSummary),
    groupingConfiguration: S.optional(GroupingConfiguration),
    defaultAttributes: S.optional(MessageTemplateAttributes),
    attributeTypes: S.optional(MessageTemplateAttributeTypeList),
    attachments: S.optional(MessageTemplateAttachmentList),
    isActive: S.optional(S.Boolean),
    versionNumber: S.optional(S.Number),
    messageTemplateContentSha256: S.String,
    tags: S.optional(Tags),
  }),
).annotate({
  identifier: "ExtendedMessageTemplateData",
}) as any as S.Schema<ExtendedMessageTemplateData>;
export interface CreateMessageTemplateVersionResponse {
  messageTemplate?: ExtendedMessageTemplateData;
}
const CreateMessageTemplateVersionResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ messageTemplate: S.optional(ExtendedMessageTemplateData) }),
).annotate({
  identifier: "CreateMessageTemplateVersionResponse",
}) as any as S.Schema<CreateMessageTemplateVersionResponse>;
export type QuickResponseName = string;
export type QuickResponseContent = string | redacted.Redacted<string>;
export type QuickResponseDataProvider = { content: string | redacted.Redacted<string> };
const QuickResponseDataProvider =
  MessageTemplateBodyContentProvider as any as S.Schema<QuickResponseDataProvider>;
export type QuickResponseType = string;
export type QuickResponseDescription = string;
export type ShortCutKey = string;
export type Channels = (string | redacted.Redacted<string>)[];
const Channels = SuggestedMessagesList as any as S.Schema<Channels>;
export interface CreateQuickResponseRequest {
  knowledgeBaseId: string;
  name: string;
  content: QuickResponseDataProvider;
  contentType?: string;
  groupingConfiguration?: GroupingConfiguration;
  description?: string;
  shortcutKey?: string;
  isActive?: boolean;
  channels?: (string | redacted.Redacted<string>)[];
  language?: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateQuickResponseRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
    name: S.String,
    content: QuickResponseDataProvider,
    contentType: S.optional(S.String),
    groupingConfiguration: S.optional(GroupingConfiguration),
    description: S.optional(S.String),
    shortcutKey: S.optional(S.String),
    isActive: S.optional(S.Boolean),
    channels: S.optional(Channels),
    language: S.optional(S.String),
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    tags: S.optional(Tags),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/knowledgeBases/{knowledgeBaseId}/quickResponses" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "CreateQuickResponseRequest",
}) as any as S.Schema<CreateQuickResponseRequest>;
export type QuickResponseStatus = string;
export type QuickResponseContentProvider = { content: string | redacted.Redacted<string> };
const QuickResponseContentProvider =
  MessageTemplateBodyContentProvider as any as S.Schema<QuickResponseContentProvider>;
export interface QuickResponseContents {
  plainText?: QuickResponseContentProvider;
  markdown?: QuickResponseContentProvider;
}
const QuickResponseContents = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    plainText: S.optional(QuickResponseContentProvider),
    markdown: S.optional(QuickResponseContentProvider),
  }),
).annotate({ identifier: "QuickResponseContents" }) as any as S.Schema<QuickResponseContents>;
export interface QuickResponseData {
  quickResponseArn: string;
  quickResponseId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  contentType: string;
  status: string;
  createdTime: Date;
  lastModifiedTime: Date;
  contents?: QuickResponseContents;
  description?: string;
  groupingConfiguration?: GroupingConfiguration;
  shortcutKey?: string;
  lastModifiedBy?: string;
  isActive?: boolean;
  channels?: (string | redacted.Redacted<string>)[];
  language?: string;
  tags?: { [key: string]: string | undefined };
}
const QuickResponseData = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    quickResponseArn: S.String,
    quickResponseId: S.String,
    knowledgeBaseArn: S.String,
    knowledgeBaseId: S.String,
    name: S.String,
    contentType: S.String,
    status: S.String,
    createdTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    lastModifiedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    contents: S.optional(QuickResponseContents),
    description: S.optional(S.String),
    groupingConfiguration: S.optional(GroupingConfiguration),
    shortcutKey: S.optional(S.String),
    lastModifiedBy: S.optional(S.String),
    isActive: S.optional(S.Boolean),
    channels: S.optional(Channels),
    language: S.optional(S.String),
    tags: S.optional(Tags),
  }),
).annotate({ identifier: "QuickResponseData" }) as any as S.Schema<QuickResponseData>;
export interface CreateQuickResponseResponse {
  quickResponse?: QuickResponseData;
}
const CreateQuickResponseResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ quickResponse: S.optional(QuickResponseData) }),
).annotate({
  identifier: "CreateQuickResponseResponse",
}) as any as S.Schema<CreateQuickResponseResponse>;
export interface CreateSessionRequest {
  clientToken?: string;
  assistantId: string;
  name: string;
  description?: string;
  tags?: { [key: string]: string | undefined };
  tagFilter?: TagFilter;
  aiAgentConfiguration?: { [key: string]: AIAgentConfigurationData | undefined };
  contactArn?: string;
  orchestratorConfigurationList?: OrchestratorConfigurationEntry[];
  removeOrchestratorConfigurationList?: boolean;
}
const CreateSessionRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    name: S.String,
    description: S.optional(S.String),
    tags: S.optional(Tags),
    tagFilter: S.optional(TagFilter),
    aiAgentConfiguration: S.optional(AIAgentConfigurationMap),
    contactArn: S.optional(S.String),
    orchestratorConfigurationList: S.optional(OrchestratorConfigurationList),
    removeOrchestratorConfigurationList: S.optional(S.Boolean),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/assistants/{assistantId}/sessions" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "CreateSessionRequest" }) as any as S.Schema<CreateSessionRequest>;
export interface SessionIntegrationConfiguration {
  topicIntegrationArn?: string;
}
const SessionIntegrationConfiguration =
  AssistantIntegrationConfiguration as any as S.Schema<SessionIntegrationConfiguration>;
export interface SessionData {
  sessionArn: string;
  sessionId: string;
  name: string;
  description?: string;
  tags?: { [key: string]: string | undefined };
  integrationConfiguration?: SessionIntegrationConfiguration;
  tagFilter?: TagFilter;
  aiAgentConfiguration?: { [key: string]: AIAgentConfigurationData | undefined };
  origin?: string;
  orchestratorConfigurationList?: OrchestratorConfigurationEntry[];
}
const SessionData = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    sessionArn: S.String,
    sessionId: S.String,
    name: S.String,
    description: S.optional(S.String),
    tags: S.optional(Tags),
    integrationConfiguration: S.optional(SessionIntegrationConfiguration),
    tagFilter: S.optional(TagFilter),
    aiAgentConfiguration: S.optional(AIAgentConfigurationMap),
    origin: S.optional(S.String),
    orchestratorConfigurationList: S.optional(OrchestratorConfigurationList),
  }),
).annotate({ identifier: "SessionData" }) as any as S.Schema<SessionData>;
export interface CreateSessionResponse {
  session?: SessionData;
}
const CreateSessionResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ session: S.optional(SessionData) }),
).annotate({ identifier: "CreateSessionResponse" }) as any as S.Schema<CreateSessionResponse>;
export interface DeactivateMessageTemplateRequest {
  knowledgeBaseId: string;
  messageTemplateId: string;
  versionNumber: number;
}
const DeactivateMessageTemplateRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
    messageTemplateId: S.String.pipe(T.HttpLabel("messageTemplateId")),
    versionNumber: S.Number,
  }).pipe(
    T.all(
      T.Http({
        method: "POST",
        uri: "/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/deactivate",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeactivateMessageTemplateRequest",
}) as any as S.Schema<DeactivateMessageTemplateRequest>;
export interface DeactivateMessageTemplateResponse {
  messageTemplateArn: string;
  messageTemplateId: string;
  versionNumber: number;
}
const DeactivateMessageTemplateResponse =
  ActivateMessageTemplateResponse as any as S.Schema<DeactivateMessageTemplateResponse>;
export interface DeleteAIAgentRequest {
  assistantId: string;
  aiAgentId: string;
}
const DeleteAIAgentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    aiAgentId: S.String.pipe(T.HttpLabel("aiAgentId")),
  }).pipe(
    T.all(
      T.Http({ method: "DELETE", uri: "/assistants/{assistantId}/aiagents/{aiAgentId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "DeleteAIAgentRequest" }) as any as S.Schema<DeleteAIAgentRequest>;
export interface DeleteAIAgentResponse {}
const DeleteAIAgentResponse = /*@__PURE__*/ S.suspend(() => S.Struct({})).annotate({
  identifier: "DeleteAIAgentResponse",
}) as any as S.Schema<DeleteAIAgentResponse>;
export interface DeleteAIAgentVersionRequest {
  assistantId: string;
  aiAgentId: string;
  versionNumber: number;
}
const DeleteAIAgentVersionRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    aiAgentId: S.String.pipe(T.HttpLabel("aiAgentId")),
    versionNumber: S.Number.pipe(T.HttpLabel("versionNumber")),
  }).pipe(
    T.all(
      T.Http({
        method: "DELETE",
        uri: "/assistants/{assistantId}/aiagents/{aiAgentId}/versions/{versionNumber}",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeleteAIAgentVersionRequest",
}) as any as S.Schema<DeleteAIAgentVersionRequest>;
export interface DeleteAIAgentVersionResponse {}
const DeleteAIAgentVersionResponse =
  DeleteAIAgentResponse as any as S.Schema<DeleteAIAgentVersionResponse>;
export interface DeleteAIGuardrailRequest {
  assistantId: string;
  aiGuardrailId: string;
}
const DeleteAIGuardrailRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    aiGuardrailId: S.String.pipe(T.HttpLabel("aiGuardrailId")),
  }).pipe(
    T.all(
      T.Http({ method: "DELETE", uri: "/assistants/{assistantId}/aiguardrails/{aiGuardrailId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "DeleteAIGuardrailRequest" }) as any as S.Schema<DeleteAIGuardrailRequest>;
export interface DeleteAIGuardrailResponse {}
const DeleteAIGuardrailResponse =
  DeleteAIAgentResponse as any as S.Schema<DeleteAIGuardrailResponse>;
export interface DeleteAIGuardrailVersionRequest {
  assistantId: string;
  aiGuardrailId: string;
  versionNumber: number;
}
const DeleteAIGuardrailVersionRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    aiGuardrailId: S.String.pipe(T.HttpLabel("aiGuardrailId")),
    versionNumber: S.Number.pipe(T.HttpLabel("versionNumber")),
  }).pipe(
    T.all(
      T.Http({
        method: "DELETE",
        uri: "/assistants/{assistantId}/aiguardrails/{aiGuardrailId}/versions/{versionNumber}",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeleteAIGuardrailVersionRequest",
}) as any as S.Schema<DeleteAIGuardrailVersionRequest>;
export interface DeleteAIGuardrailVersionResponse {}
const DeleteAIGuardrailVersionResponse = /*@__PURE__*/ S.suspend(() => S.Struct({})).annotate({
  identifier: "DeleteAIGuardrailVersionResponse",
}) as any as S.Schema<DeleteAIGuardrailVersionResponse>;
export interface DeleteAIPromptRequest {
  assistantId: string;
  aiPromptId: string;
}
const DeleteAIPromptRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    aiPromptId: S.String.pipe(T.HttpLabel("aiPromptId")),
  }).pipe(
    T.all(
      T.Http({ method: "DELETE", uri: "/assistants/{assistantId}/aiprompts/{aiPromptId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "DeleteAIPromptRequest" }) as any as S.Schema<DeleteAIPromptRequest>;
export interface DeleteAIPromptResponse {}
const DeleteAIPromptResponse = DeleteAIAgentResponse as any as S.Schema<DeleteAIPromptResponse>;
export interface DeleteAIPromptVersionRequest {
  assistantId: string;
  aiPromptId: string;
  versionNumber: number;
}
const DeleteAIPromptVersionRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    aiPromptId: S.String.pipe(T.HttpLabel("aiPromptId")),
    versionNumber: S.Number.pipe(T.HttpLabel("versionNumber")),
  }).pipe(
    T.all(
      T.Http({
        method: "DELETE",
        uri: "/assistants/{assistantId}/aiprompts/{aiPromptId}/versions/{versionNumber}",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeleteAIPromptVersionRequest",
}) as any as S.Schema<DeleteAIPromptVersionRequest>;
export interface DeleteAIPromptVersionResponse {}
const DeleteAIPromptVersionResponse =
  DeleteAIAgentResponse as any as S.Schema<DeleteAIPromptVersionResponse>;
export interface DeleteAssistantRequest {
  assistantId: string;
}
const DeleteAssistantRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ assistantId: S.String.pipe(T.HttpLabel("assistantId")) }).pipe(
    T.all(
      T.Http({ method: "DELETE", uri: "/assistants/{assistantId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "DeleteAssistantRequest" }) as any as S.Schema<DeleteAssistantRequest>;
export interface DeleteAssistantResponse {}
const DeleteAssistantResponse = DeleteAIAgentResponse as any as S.Schema<DeleteAssistantResponse>;
export interface DeleteAssistantAssociationRequest {
  assistantAssociationId: string;
  assistantId: string;
}
const DeleteAssistantAssociationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantAssociationId: S.String.pipe(T.HttpLabel("assistantAssociationId")),
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
  }).pipe(
    T.all(
      T.Http({
        method: "DELETE",
        uri: "/assistants/{assistantId}/associations/{assistantAssociationId}",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeleteAssistantAssociationRequest",
}) as any as S.Schema<DeleteAssistantAssociationRequest>;
export interface DeleteAssistantAssociationResponse {}
const DeleteAssistantAssociationResponse =
  DeleteAIGuardrailVersionResponse as any as S.Schema<DeleteAssistantAssociationResponse>;
export interface DeleteContentRequest {
  knowledgeBaseId: string;
  contentId: string;
}
const DeleteContentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
    contentId: S.String.pipe(T.HttpLabel("contentId")),
  }).pipe(
    T.all(
      T.Http({ method: "DELETE", uri: "/knowledgeBases/{knowledgeBaseId}/contents/{contentId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "DeleteContentRequest" }) as any as S.Schema<DeleteContentRequest>;
export interface DeleteContentResponse {}
const DeleteContentResponse = DeleteAIAgentResponse as any as S.Schema<DeleteContentResponse>;
export interface DeleteContentAssociationRequest {
  knowledgeBaseId: string;
  contentId: string;
  contentAssociationId: string;
}
const DeleteContentAssociationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
    contentId: S.String.pipe(T.HttpLabel("contentId")),
    contentAssociationId: S.String.pipe(T.HttpLabel("contentAssociationId")),
  }).pipe(
    T.all(
      T.Http({
        method: "DELETE",
        uri: "/knowledgeBases/{knowledgeBaseId}/contents/{contentId}/associations/{contentAssociationId}",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeleteContentAssociationRequest",
}) as any as S.Schema<DeleteContentAssociationRequest>;
export interface DeleteContentAssociationResponse {}
const DeleteContentAssociationResponse =
  DeleteAIGuardrailVersionResponse as any as S.Schema<DeleteContentAssociationResponse>;
export interface DeleteImportJobRequest {
  knowledgeBaseId: string;
  importJobId: string;
}
const DeleteImportJobRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
    importJobId: S.String.pipe(T.HttpLabel("importJobId")),
  }).pipe(
    T.all(
      T.Http({
        method: "DELETE",
        uri: "/knowledgeBases/{knowledgeBaseId}/importJobs/{importJobId}",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "DeleteImportJobRequest" }) as any as S.Schema<DeleteImportJobRequest>;
export interface DeleteImportJobResponse {}
const DeleteImportJobResponse = DeleteAIAgentResponse as any as S.Schema<DeleteImportJobResponse>;
export interface DeleteKnowledgeBaseRequest {
  knowledgeBaseId: string;
}
const DeleteKnowledgeBaseRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")) }).pipe(
    T.all(
      T.Http({ method: "DELETE", uri: "/knowledgeBases/{knowledgeBaseId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeleteKnowledgeBaseRequest",
}) as any as S.Schema<DeleteKnowledgeBaseRequest>;
export interface DeleteKnowledgeBaseResponse {}
const DeleteKnowledgeBaseResponse =
  DeleteAIAgentResponse as any as S.Schema<DeleteKnowledgeBaseResponse>;
export interface DeleteMessageTemplateRequest {
  knowledgeBaseId: string;
  messageTemplateId: string;
}
const DeleteMessageTemplateRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
    messageTemplateId: S.String.pipe(T.HttpLabel("messageTemplateId")),
  }).pipe(
    T.all(
      T.Http({
        method: "DELETE",
        uri: "/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeleteMessageTemplateRequest",
}) as any as S.Schema<DeleteMessageTemplateRequest>;
export interface DeleteMessageTemplateResponse {}
const DeleteMessageTemplateResponse =
  DeleteAIAgentResponse as any as S.Schema<DeleteMessageTemplateResponse>;
export interface DeleteMessageTemplateAttachmentRequest {
  knowledgeBaseId: string;
  messageTemplateId: string;
  attachmentId: string;
}
const DeleteMessageTemplateAttachmentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
    messageTemplateId: S.String.pipe(T.HttpLabel("messageTemplateId")),
    attachmentId: S.String.pipe(T.HttpLabel("attachmentId")),
  }).pipe(
    T.all(
      T.Http({
        method: "DELETE",
        uri: "/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/attachments/{attachmentId}",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeleteMessageTemplateAttachmentRequest",
}) as any as S.Schema<DeleteMessageTemplateAttachmentRequest>;
export interface DeleteMessageTemplateAttachmentResponse {}
const DeleteMessageTemplateAttachmentResponse =
  DeleteAIGuardrailVersionResponse as any as S.Schema<DeleteMessageTemplateAttachmentResponse>;
export interface DeleteQuickResponseRequest {
  knowledgeBaseId: string;
  quickResponseId: string;
}
const DeleteQuickResponseRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
    quickResponseId: S.String.pipe(T.HttpLabel("quickResponseId")),
  }).pipe(
    T.all(
      T.Http({
        method: "DELETE",
        uri: "/knowledgeBases/{knowledgeBaseId}/quickResponses/{quickResponseId}",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeleteQuickResponseRequest",
}) as any as S.Schema<DeleteQuickResponseRequest>;
export interface DeleteQuickResponseResponse {}
const DeleteQuickResponseResponse =
  DeleteAIAgentResponse as any as S.Schema<DeleteQuickResponseResponse>;
export interface GetAIAgentRequest {
  assistantId: string;
  aiAgentId: string;
}
const GetAIAgentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    aiAgentId: S.String.pipe(T.HttpLabel("aiAgentId")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/assistants/{assistantId}/aiagents/{aiAgentId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "GetAIAgentRequest" }) as any as S.Schema<GetAIAgentRequest>;
export interface GetAIAgentResponse {
  aiAgent?: AIAgentData;
  versionNumber?: number;
}
const GetAIAgentResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ aiAgent: S.optional(AIAgentData), versionNumber: S.optional(S.Number) }),
).annotate({ identifier: "GetAIAgentResponse" }) as any as S.Schema<GetAIAgentResponse>;
export interface GetAIGuardrailRequest {
  assistantId: string;
  aiGuardrailId: string;
}
const GetAIGuardrailRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    aiGuardrailId: S.String.pipe(T.HttpLabel("aiGuardrailId")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/assistants/{assistantId}/aiguardrails/{aiGuardrailId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "GetAIGuardrailRequest" }) as any as S.Schema<GetAIGuardrailRequest>;
export interface GetAIGuardrailResponse {
  aiGuardrail?: AIGuardrailData;
  versionNumber?: number;
}
const GetAIGuardrailResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ aiGuardrail: S.optional(AIGuardrailData), versionNumber: S.optional(S.Number) }),
).annotate({ identifier: "GetAIGuardrailResponse" }) as any as S.Schema<GetAIGuardrailResponse>;
export interface GetAIPromptRequest {
  assistantId: string;
  aiPromptId: string;
}
const GetAIPromptRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    aiPromptId: S.String.pipe(T.HttpLabel("aiPromptId")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/assistants/{assistantId}/aiprompts/{aiPromptId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "GetAIPromptRequest" }) as any as S.Schema<GetAIPromptRequest>;
export interface GetAIPromptResponse {
  aiPrompt?: AIPromptData;
  versionNumber?: number;
}
const GetAIPromptResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ aiPrompt: S.optional(AIPromptData), versionNumber: S.optional(S.Number) }),
).annotate({ identifier: "GetAIPromptResponse" }) as any as S.Schema<GetAIPromptResponse>;
export interface GetAssistantRequest {
  assistantId: string;
}
const GetAssistantRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ assistantId: S.String.pipe(T.HttpLabel("assistantId")) }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/assistants/{assistantId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "GetAssistantRequest" }) as any as S.Schema<GetAssistantRequest>;
export interface GetAssistantResponse {
  assistant?: AssistantData;
}
const GetAssistantResponse = CreateAssistantResponse as any as S.Schema<GetAssistantResponse>;
export interface GetAssistantAssociationRequest {
  assistantAssociationId: string;
  assistantId: string;
}
const GetAssistantAssociationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantAssociationId: S.String.pipe(T.HttpLabel("assistantAssociationId")),
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
  }).pipe(
    T.all(
      T.Http({
        method: "GET",
        uri: "/assistants/{assistantId}/associations/{assistantAssociationId}",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetAssistantAssociationRequest",
}) as any as S.Schema<GetAssistantAssociationRequest>;
export interface GetAssistantAssociationResponse {
  assistantAssociation?: AssistantAssociationData;
}
const GetAssistantAssociationResponse =
  CreateAssistantAssociationResponse as any as S.Schema<GetAssistantAssociationResponse>;
export interface GetContentRequest {
  contentId: string;
  knowledgeBaseId: string;
}
const GetContentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    contentId: S.String.pipe(T.HttpLabel("contentId")),
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/knowledgeBases/{knowledgeBaseId}/contents/{contentId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "GetContentRequest" }) as any as S.Schema<GetContentRequest>;
export interface GetContentResponse {
  content?: ContentData;
}
const GetContentResponse = CreateContentResponse as any as S.Schema<GetContentResponse>;
export interface GetContentAssociationRequest {
  knowledgeBaseId: string;
  contentId: string;
  contentAssociationId: string;
}
const GetContentAssociationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
    contentId: S.String.pipe(T.HttpLabel("contentId")),
    contentAssociationId: S.String.pipe(T.HttpLabel("contentAssociationId")),
  }).pipe(
    T.all(
      T.Http({
        method: "GET",
        uri: "/knowledgeBases/{knowledgeBaseId}/contents/{contentId}/associations/{contentAssociationId}",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetContentAssociationRequest",
}) as any as S.Schema<GetContentAssociationRequest>;
export interface GetContentAssociationResponse {
  contentAssociation?: ContentAssociationData;
}
const GetContentAssociationResponse =
  CreateContentAssociationResponse as any as S.Schema<GetContentAssociationResponse>;
export interface GetContentSummaryRequest {
  contentId: string;
  knowledgeBaseId: string;
}
const GetContentSummaryRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    contentId: S.String.pipe(T.HttpLabel("contentId")),
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
  }).pipe(
    T.all(
      T.Http({
        method: "GET",
        uri: "/knowledgeBases/{knowledgeBaseId}/contents/{contentId}/summary",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "GetContentSummaryRequest" }) as any as S.Schema<GetContentSummaryRequest>;
export interface ContentSummary {
  contentArn: string;
  contentId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  revisionId: string;
  title: string;
  contentType: string;
  status: string;
  metadata: { [key: string]: string | undefined };
  tags?: { [key: string]: string | undefined };
}
const ContentSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    contentArn: S.String,
    contentId: S.String,
    knowledgeBaseArn: S.String,
    knowledgeBaseId: S.String,
    name: S.String,
    revisionId: S.String,
    title: S.String,
    contentType: S.String,
    status: S.String,
    metadata: ContentMetadata,
    tags: S.optional(Tags),
  }),
).annotate({ identifier: "ContentSummary" }) as any as S.Schema<ContentSummary>;
export interface GetContentSummaryResponse {
  contentSummary?: ContentSummary;
}
const GetContentSummaryResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ contentSummary: S.optional(ContentSummary) }),
).annotate({
  identifier: "GetContentSummaryResponse",
}) as any as S.Schema<GetContentSummaryResponse>;
export interface GetImportJobRequest {
  importJobId: string;
  knowledgeBaseId: string;
}
const GetImportJobRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    importJobId: S.String.pipe(T.HttpLabel("importJobId")),
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/knowledgeBases/{knowledgeBaseId}/importJobs/{importJobId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "GetImportJobRequest" }) as any as S.Schema<GetImportJobRequest>;
export type ImportJobType = string;
export type ImportJobStatus = string;
export type ExternalSource = string;
export interface ConnectConfiguration {
  instanceId?: string;
}
const ConnectConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ instanceId: S.optional(S.String) }),
).annotate({ identifier: "ConnectConfiguration" }) as any as S.Schema<ConnectConfiguration>;
export type Configuration = { connectConfiguration: ConnectConfiguration };
const Configuration = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ connectConfiguration: ConnectConfiguration }),
]);
export interface ExternalSourceConfiguration {
  source: string;
  configuration: Configuration;
}
const ExternalSourceConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ source: S.String, configuration: Configuration }),
).annotate({
  identifier: "ExternalSourceConfiguration",
}) as any as S.Schema<ExternalSourceConfiguration>;
export interface ImportJobData {
  importJobId: string;
  knowledgeBaseId: string;
  uploadId: string;
  knowledgeBaseArn: string;
  importJobType: string;
  status: string;
  url: string | redacted.Redacted<string>;
  failedRecordReport?: string | redacted.Redacted<string>;
  urlExpiry: Date;
  createdTime: Date;
  lastModifiedTime: Date;
  metadata?: { [key: string]: string | undefined };
  externalSourceConfiguration?: ExternalSourceConfiguration;
}
const ImportJobData = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    importJobId: S.String,
    knowledgeBaseId: S.String,
    uploadId: S.String,
    knowledgeBaseArn: S.String,
    importJobType: S.String,
    status: S.String,
    url: SensitiveString,
    failedRecordReport: S.optional(SensitiveString),
    urlExpiry: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    createdTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    lastModifiedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    metadata: S.optional(ContentMetadata),
    externalSourceConfiguration: S.optional(ExternalSourceConfiguration),
  }),
).annotate({ identifier: "ImportJobData" }) as any as S.Schema<ImportJobData>;
export interface GetImportJobResponse {
  importJob?: ImportJobData;
}
const GetImportJobResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ importJob: S.optional(ImportJobData) }),
).annotate({ identifier: "GetImportJobResponse" }) as any as S.Schema<GetImportJobResponse>;
export interface GetKnowledgeBaseRequest {
  knowledgeBaseId: string;
}
const GetKnowledgeBaseRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")) }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/knowledgeBases/{knowledgeBaseId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "GetKnowledgeBaseRequest" }) as any as S.Schema<GetKnowledgeBaseRequest>;
export interface GetKnowledgeBaseResponse {
  knowledgeBase?: KnowledgeBaseData;
}
const GetKnowledgeBaseResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ knowledgeBase: S.optional(KnowledgeBaseData) }),
).annotate({ identifier: "GetKnowledgeBaseResponse" }) as any as S.Schema<GetKnowledgeBaseResponse>;
export interface GetMessageTemplateRequest {
  messageTemplateId: string;
  knowledgeBaseId: string;
}
const GetMessageTemplateRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    messageTemplateId: S.String.pipe(T.HttpLabel("messageTemplateId")),
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
  }).pipe(
    T.all(
      T.Http({
        method: "GET",
        uri: "/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetMessageTemplateRequest",
}) as any as S.Schema<GetMessageTemplateRequest>;
export interface GetMessageTemplateResponse {
  messageTemplate?: ExtendedMessageTemplateData;
}
const GetMessageTemplateResponse =
  CreateMessageTemplateVersionResponse as any as S.Schema<GetMessageTemplateResponse>;
export type NextToken = string;
export interface GetNextMessageRequest {
  assistantId: string;
  sessionId: string;
  nextMessageToken: string;
}
const GetNextMessageRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    sessionId: S.String.pipe(T.HttpLabel("sessionId")),
    nextMessageToken: S.String.pipe(T.HttpQuery("nextMessageToken")),
  }).pipe(
    T.all(
      T.Http({
        method: "GET",
        uri: "/assistants/{assistantId}/sessions/{sessionId}/messages/next",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "GetNextMessageRequest" }) as any as S.Schema<GetNextMessageRequest>;
export type MessageType = string;
export type SensitiveString = string | redacted.Redacted<string>;
export type CitationSpanOffset = number;
export interface CitationSpan {
  beginOffsetInclusive?: number;
  endOffsetExclusive?: number;
}
const CitationSpan = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    beginOffsetInclusive: S.optional(S.Number),
    endOffsetExclusive: S.optional(S.Number),
  }),
).annotate({ identifier: "CitationSpan" }) as any as S.Schema<CitationSpan>;
export type ReferenceType = string;
export interface Citation {
  contentId?: string;
  title?: string | redacted.Redacted<string>;
  knowledgeBaseId?: string;
  citationSpan: CitationSpan;
  sourceURL?: string | redacted.Redacted<string>;
  referenceType: string;
}
const Citation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    contentId: S.optional(S.String),
    title: S.optional(SensitiveString),
    knowledgeBaseId: S.optional(S.String),
    citationSpan: CitationSpan,
    sourceURL: S.optional(SensitiveString),
    referenceType: S.String,
  }),
).annotate({ identifier: "Citation" }) as any as S.Schema<Citation>;
export type Citations = Citation[];
const Citations = /*@__PURE__*/ S.Array(Citation);
export interface AIGuardrailAssessment {
  blocked: boolean;
}
const AIGuardrailAssessment = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ blocked: S.Boolean }),
).annotate({ identifier: "AIGuardrailAssessment" }) as any as S.Schema<AIGuardrailAssessment>;
export interface TextMessage {
  value?: string | redacted.Redacted<string>;
  citations?: Citation[];
  aiGuardrailAssessment?: AIGuardrailAssessment;
}
const TextMessage = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    value: S.optional(SensitiveString),
    citations: S.optional(Citations),
    aiGuardrailAssessment: S.optional(AIGuardrailAssessment),
  }),
).annotate({ identifier: "TextMessage" }) as any as S.Schema<TextMessage>;
export interface ToolUseResultData {
  toolUseId: string;
  toolName: string;
  toolResult: any;
  inputSchema?: any;
}
const ToolUseResultData = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    toolUseId: S.String,
    toolName: S.String,
    toolResult: S.Any,
    inputSchema: S.optional(S.Any),
  }),
).annotate({ identifier: "ToolUseResultData" }) as any as S.Schema<ToolUseResultData>;
export type MessageData =
  | { text: TextMessage; toolUseResult?: never; data?: never }
  | { text?: never; toolUseResult: ToolUseResultData; data?: never }
  | { text?: never; toolUseResult?: never; data: any };
const MessageData = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ text: TextMessage }),
  /*@__PURE__*/ S.Struct({ toolUseResult: ToolUseResultData }),
  /*@__PURE__*/ S.Struct({ data: S.Any }),
]);
export type Participant = string;
export interface MessageOutput {
  value: MessageData;
  messageId: string;
  participant: string;
  timestamp: Date;
}
const MessageOutput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    value: MessageData,
    messageId: S.String,
    participant: S.String,
    timestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
  }),
).annotate({ identifier: "MessageOutput" }) as any as S.Schema<MessageOutput>;
export type ConversationStatus = string;
export type ConversationStatusReason = string;
export interface ConversationState {
  status: string;
  reason?: string;
}
const ConversationState = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ status: S.String, reason: S.optional(S.String) }),
).annotate({ identifier: "ConversationState" }) as any as S.Schema<ConversationState>;
export type RuntimeSessionDataValue = { stringValue: string | redacted.Redacted<string> };
const RuntimeSessionDataValue = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ stringValue: SensitiveString }),
]);
export interface RuntimeSessionData {
  key: string | redacted.Redacted<string>;
  value: RuntimeSessionDataValue;
}
const RuntimeSessionData = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ key: SensitiveString, value: RuntimeSessionDataValue }),
).annotate({ identifier: "RuntimeSessionData" }) as any as S.Schema<RuntimeSessionData>;
export type RuntimeSessionDataList = RuntimeSessionData[];
const RuntimeSessionDataList = /*@__PURE__*/ S.Array(RuntimeSessionData);
export interface GetNextMessageResponse {
  type: string;
  response: MessageOutput;
  requestMessageId: string;
  conversationState: ConversationState;
  nextMessageToken?: string;
  conversationSessionData?: RuntimeSessionData[];
  chunkedResponseTerminated?: boolean;
}
const GetNextMessageResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    type: S.String,
    response: MessageOutput,
    requestMessageId: S.String,
    conversationState: ConversationState,
    nextMessageToken: S.optional(S.String),
    conversationSessionData: S.optional(RuntimeSessionDataList),
    chunkedResponseTerminated: S.optional(S.Boolean),
  }),
).annotate({ identifier: "GetNextMessageResponse" }) as any as S.Schema<GetNextMessageResponse>;
export interface GetQuickResponseRequest {
  quickResponseId: string;
  knowledgeBaseId: string;
}
const GetQuickResponseRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    quickResponseId: S.String.pipe(T.HttpLabel("quickResponseId")),
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
  }).pipe(
    T.all(
      T.Http({
        method: "GET",
        uri: "/knowledgeBases/{knowledgeBaseId}/quickResponses/{quickResponseId}",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "GetQuickResponseRequest" }) as any as S.Schema<GetQuickResponseRequest>;
export interface GetQuickResponseResponse {
  quickResponse?: QuickResponseData;
}
const GetQuickResponseResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ quickResponse: S.optional(QuickResponseData) }),
).annotate({ identifier: "GetQuickResponseResponse" }) as any as S.Schema<GetQuickResponseResponse>;
export type WaitTimeSeconds = number;
export type RecommendationType = string;
export interface GetRecommendationsRequest {
  assistantId: string;
  sessionId: string;
  maxResults?: number;
  waitTimeSeconds?: number;
  nextChunkToken?: string;
  recommendationType?: string;
}
const GetRecommendationsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    sessionId: S.String.pipe(T.HttpLabel("sessionId")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    waitTimeSeconds: S.optional(S.Number).pipe(T.HttpQuery("waitTimeSeconds")),
    nextChunkToken: S.optional(S.String).pipe(T.HttpQuery("nextChunkToken")),
    recommendationType: S.optional(S.String).pipe(T.HttpQuery("recommendationType")),
  }).pipe(
    T.all(
      T.Http({
        method: "GET",
        uri: "/assistants/{assistantId}/sessions/{sessionId}/recommendations",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetRecommendationsRequest",
}) as any as S.Schema<GetRecommendationsRequest>;
export type RecommendationId = string;
export interface ContentReference {
  knowledgeBaseArn?: string;
  knowledgeBaseId?: string;
  contentArn?: string;
  contentId?: string;
  sourceURL?: string;
  referenceType?: string;
}
const ContentReference = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    knowledgeBaseArn: S.optional(S.String),
    knowledgeBaseId: S.optional(S.String),
    contentArn: S.optional(S.String),
    contentId: S.optional(S.String),
    sourceURL: S.optional(S.String),
    referenceType: S.optional(S.String),
  }),
).annotate({ identifier: "ContentReference" }) as any as S.Schema<ContentReference>;
export type HighlightOffset = number;
export interface Highlight {
  beginOffsetInclusive?: number;
  endOffsetExclusive?: number;
}
const Highlight = CitationSpan as any as S.Schema<Highlight>;
export type Highlights = Highlight[];
const Highlights = /*@__PURE__*/ S.Array(Highlight);
export interface DocumentText {
  text?: string | redacted.Redacted<string>;
  highlights?: Highlight[];
}
const DocumentText = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ text: S.optional(SensitiveString), highlights: S.optional(Highlights) }),
).annotate({ identifier: "DocumentText" }) as any as S.Schema<DocumentText>;
export interface Document {
  contentReference: ContentReference;
  title?: DocumentText;
  excerpt?: DocumentText;
}
const Document = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    contentReference: ContentReference,
    title: S.optional(DocumentText),
    excerpt: S.optional(DocumentText),
  }),
).annotate({ identifier: "Document" }) as any as S.Schema<Document>;
export type RelevanceScore = number;
export type RelevanceLevel = string;
export type LlmModelId = string;
export interface GenerativeReference {
  modelId?: string;
  generationId?: string;
}
const GenerativeReference = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ modelId: S.optional(S.String), generationId: S.optional(S.String) }),
).annotate({ identifier: "GenerativeReference" }) as any as S.Schema<GenerativeReference>;
export interface SuggestedMessageReference {
  aiAgentId: string;
  aiAgentArn: string;
}
const SuggestedMessageReference = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ aiAgentId: S.String, aiAgentArn: S.String }),
).annotate({
  identifier: "SuggestedMessageReference",
}) as any as S.Schema<SuggestedMessageReference>;
export type DataReference =
  | {
      contentReference: ContentReference;
      generativeReference?: never;
      suggestedMessageReference?: never;
    }
  | {
      contentReference?: never;
      generativeReference: GenerativeReference;
      suggestedMessageReference?: never;
    }
  | {
      contentReference?: never;
      generativeReference?: never;
      suggestedMessageReference: SuggestedMessageReference;
    };
const DataReference = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ contentReference: ContentReference }),
  /*@__PURE__*/ S.Struct({ generativeReference: GenerativeReference }),
  /*@__PURE__*/ S.Struct({ suggestedMessageReference: SuggestedMessageReference }),
]);
export interface TextData {
  title?: DocumentText;
  excerpt?: DocumentText;
}
const TextData = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ title: S.optional(DocumentText), excerpt: S.optional(DocumentText) }),
).annotate({ identifier: "TextData" }) as any as S.Schema<TextData>;
export interface RankingData {
  relevanceScore?: number;
  relevanceLevel?: string;
}
const RankingData = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ relevanceScore: S.optional(S.Number), relevanceLevel: S.optional(S.String) }),
).annotate({ identifier: "RankingData" }) as any as S.Schema<RankingData>;
export interface ContentDataDetails {
  textData: TextData;
  rankingData: RankingData;
}
const ContentDataDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ textData: TextData, rankingData: RankingData }),
).annotate({ identifier: "ContentDataDetails" }) as any as S.Schema<ContentDataDetails>;
export type DataSummaryList = DataSummary[];
const DataSummaryList = /*@__PURE__*/ S.Array(
  /*@__PURE__*/ S.suspend((): S.Schema<DataSummary> => DataSummary).annotate({
    identifier: "DataSummary",
  }),
) as any as S.Schema<DataSummaryList>;
export interface GenerativeDataDetails {
  completion: string | redacted.Redacted<string>;
  references: DataSummary[];
  rankingData: RankingData;
}
const GenerativeDataDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    completion: SensitiveString,
    references: S.suspend(() => DataSummaryList).annotate({ identifier: "DataSummaryList" }),
    rankingData: RankingData,
  }),
).annotate({ identifier: "GenerativeDataDetails" }) as any as S.Schema<GenerativeDataDetails>;
export interface IntentDetectedDataDetails {
  intent: string | redacted.Redacted<string>;
  intentId: string;
  relevanceLevel?: string;
}
const IntentDetectedDataDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ intent: SensitiveString, intentId: S.String, relevanceLevel: S.optional(S.String) }),
).annotate({
  identifier: "IntentDetectedDataDetails",
}) as any as S.Schema<IntentDetectedDataDetails>;
export type SourceContentType = string;
export interface SourceContentDataDetails {
  id: string;
  type: string;
  textData: TextData;
  rankingData: RankingData;
  citationSpan?: CitationSpan;
}
const SourceContentDataDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.String,
    type: S.String,
    textData: TextData,
    rankingData: RankingData,
    citationSpan: S.optional(CitationSpan),
  }),
).annotate({ identifier: "SourceContentDataDetails" }) as any as S.Schema<SourceContentDataDetails>;
export interface GenerativeChunkDataDetails {
  completion?: string | redacted.Redacted<string>;
  references?: DataSummary[];
  nextChunkToken?: string;
}
const GenerativeChunkDataDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    completion: S.optional(SensitiveString),
    references: S.optional(
      S.suspend(() => DataSummaryList).annotate({ identifier: "DataSummaryList" }),
    ),
    nextChunkToken: S.optional(S.String),
  }),
).annotate({
  identifier: "GenerativeChunkDataDetails",
}) as any as S.Schema<GenerativeChunkDataDetails>;
export interface EmailResponseChunkDataDetails {
  completion?: string | redacted.Redacted<string>;
  nextChunkToken?: string;
}
const EmailResponseChunkDataDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ completion: S.optional(SensitiveString), nextChunkToken: S.optional(S.String) }),
).annotate({
  identifier: "EmailResponseChunkDataDetails",
}) as any as S.Schema<EmailResponseChunkDataDetails>;
export interface EmailOverviewChunkDataDetails {
  completion?: string | redacted.Redacted<string>;
  nextChunkToken?: string;
}
const EmailOverviewChunkDataDetails =
  EmailResponseChunkDataDetails as any as S.Schema<EmailOverviewChunkDataDetails>;
export interface EmailGenerativeAnswerChunkDataDetails {
  completion?: string | redacted.Redacted<string>;
  references?: DataSummary[];
  nextChunkToken?: string;
}
const EmailGenerativeAnswerChunkDataDetails =
  GenerativeChunkDataDetails as any as S.Schema<EmailGenerativeAnswerChunkDataDetails>;
export interface CaseSummarizationChunkDataDetails {
  completion?: string | redacted.Redacted<string>;
  nextChunkToken?: string;
}
const CaseSummarizationChunkDataDetails =
  EmailResponseChunkDataDetails as any as S.Schema<CaseSummarizationChunkDataDetails>;
export interface SuggestedMessageDataDetails {
  messageText: string | redacted.Redacted<string>;
}
const SuggestedMessageDataDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ messageText: SensitiveString }),
).annotate({
  identifier: "SuggestedMessageDataDetails",
}) as any as S.Schema<SuggestedMessageDataDetails>;
export interface NotesDataDetails {
  completion?: string | redacted.Redacted<string>;
}
const NotesDataDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ completion: S.optional(SensitiveString) }),
).annotate({ identifier: "NotesDataDetails" }) as any as S.Schema<NotesDataDetails>;
export interface NotesChunkDataDetails {
  completion?: string | redacted.Redacted<string>;
  nextChunkToken?: string;
}
const NotesChunkDataDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ completion: S.optional(SensitiveString), nextChunkToken: S.optional(S.String) }),
).annotate({ identifier: "NotesChunkDataDetails" }) as any as S.Schema<NotesChunkDataDetails>;
export interface ProactiveRecommendationDataDetails {
  nextMessageToken: string;
}
const ProactiveRecommendationDataDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ nextMessageToken: S.String }),
).annotate({
  identifier: "ProactiveRecommendationDataDetails",
}) as any as S.Schema<ProactiveRecommendationDataDetails>;
export type DataDetails =
  | {
      contentData: ContentDataDetails;
      generativeData?: never;
      intentDetectedData?: never;
      sourceContentData?: never;
      generativeChunkData?: never;
      emailResponseChunkData?: never;
      emailOverviewChunkData?: never;
      emailGenerativeAnswerChunkData?: never;
      caseSummarizationChunkData?: never;
      suggestedMessageData?: never;
      notesData?: never;
      notesChunkData?: never;
      proactiveRecommendationData?: never;
    }
  | {
      contentData?: never;
      generativeData: GenerativeDataDetails;
      intentDetectedData?: never;
      sourceContentData?: never;
      generativeChunkData?: never;
      emailResponseChunkData?: never;
      emailOverviewChunkData?: never;
      emailGenerativeAnswerChunkData?: never;
      caseSummarizationChunkData?: never;
      suggestedMessageData?: never;
      notesData?: never;
      notesChunkData?: never;
      proactiveRecommendationData?: never;
    }
  | {
      contentData?: never;
      generativeData?: never;
      intentDetectedData: IntentDetectedDataDetails;
      sourceContentData?: never;
      generativeChunkData?: never;
      emailResponseChunkData?: never;
      emailOverviewChunkData?: never;
      emailGenerativeAnswerChunkData?: never;
      caseSummarizationChunkData?: never;
      suggestedMessageData?: never;
      notesData?: never;
      notesChunkData?: never;
      proactiveRecommendationData?: never;
    }
  | {
      contentData?: never;
      generativeData?: never;
      intentDetectedData?: never;
      sourceContentData: SourceContentDataDetails;
      generativeChunkData?: never;
      emailResponseChunkData?: never;
      emailOverviewChunkData?: never;
      emailGenerativeAnswerChunkData?: never;
      caseSummarizationChunkData?: never;
      suggestedMessageData?: never;
      notesData?: never;
      notesChunkData?: never;
      proactiveRecommendationData?: never;
    }
  | {
      contentData?: never;
      generativeData?: never;
      intentDetectedData?: never;
      sourceContentData?: never;
      generativeChunkData: GenerativeChunkDataDetails;
      emailResponseChunkData?: never;
      emailOverviewChunkData?: never;
      emailGenerativeAnswerChunkData?: never;
      caseSummarizationChunkData?: never;
      suggestedMessageData?: never;
      notesData?: never;
      notesChunkData?: never;
      proactiveRecommendationData?: never;
    }
  | {
      contentData?: never;
      generativeData?: never;
      intentDetectedData?: never;
      sourceContentData?: never;
      generativeChunkData?: never;
      emailResponseChunkData: EmailResponseChunkDataDetails;
      emailOverviewChunkData?: never;
      emailGenerativeAnswerChunkData?: never;
      caseSummarizationChunkData?: never;
      suggestedMessageData?: never;
      notesData?: never;
      notesChunkData?: never;
      proactiveRecommendationData?: never;
    }
  | {
      contentData?: never;
      generativeData?: never;
      intentDetectedData?: never;
      sourceContentData?: never;
      generativeChunkData?: never;
      emailResponseChunkData?: never;
      emailOverviewChunkData: EmailOverviewChunkDataDetails;
      emailGenerativeAnswerChunkData?: never;
      caseSummarizationChunkData?: never;
      suggestedMessageData?: never;
      notesData?: never;
      notesChunkData?: never;
      proactiveRecommendationData?: never;
    }
  | {
      contentData?: never;
      generativeData?: never;
      intentDetectedData?: never;
      sourceContentData?: never;
      generativeChunkData?: never;
      emailResponseChunkData?: never;
      emailOverviewChunkData?: never;
      emailGenerativeAnswerChunkData: EmailGenerativeAnswerChunkDataDetails;
      caseSummarizationChunkData?: never;
      suggestedMessageData?: never;
      notesData?: never;
      notesChunkData?: never;
      proactiveRecommendationData?: never;
    }
  | {
      contentData?: never;
      generativeData?: never;
      intentDetectedData?: never;
      sourceContentData?: never;
      generativeChunkData?: never;
      emailResponseChunkData?: never;
      emailOverviewChunkData?: never;
      emailGenerativeAnswerChunkData?: never;
      caseSummarizationChunkData: CaseSummarizationChunkDataDetails;
      suggestedMessageData?: never;
      notesData?: never;
      notesChunkData?: never;
      proactiveRecommendationData?: never;
    }
  | {
      contentData?: never;
      generativeData?: never;
      intentDetectedData?: never;
      sourceContentData?: never;
      generativeChunkData?: never;
      emailResponseChunkData?: never;
      emailOverviewChunkData?: never;
      emailGenerativeAnswerChunkData?: never;
      caseSummarizationChunkData?: never;
      suggestedMessageData: SuggestedMessageDataDetails;
      notesData?: never;
      notesChunkData?: never;
      proactiveRecommendationData?: never;
    }
  | {
      contentData?: never;
      generativeData?: never;
      intentDetectedData?: never;
      sourceContentData?: never;
      generativeChunkData?: never;
      emailResponseChunkData?: never;
      emailOverviewChunkData?: never;
      emailGenerativeAnswerChunkData?: never;
      caseSummarizationChunkData?: never;
      suggestedMessageData?: never;
      notesData: NotesDataDetails;
      notesChunkData?: never;
      proactiveRecommendationData?: never;
    }
  | {
      contentData?: never;
      generativeData?: never;
      intentDetectedData?: never;
      sourceContentData?: never;
      generativeChunkData?: never;
      emailResponseChunkData?: never;
      emailOverviewChunkData?: never;
      emailGenerativeAnswerChunkData?: never;
      caseSummarizationChunkData?: never;
      suggestedMessageData?: never;
      notesData?: never;
      notesChunkData: NotesChunkDataDetails;
      proactiveRecommendationData?: never;
    }
  | {
      contentData?: never;
      generativeData?: never;
      intentDetectedData?: never;
      sourceContentData?: never;
      generativeChunkData?: never;
      emailResponseChunkData?: never;
      emailOverviewChunkData?: never;
      emailGenerativeAnswerChunkData?: never;
      caseSummarizationChunkData?: never;
      suggestedMessageData?: never;
      notesData?: never;
      notesChunkData?: never;
      proactiveRecommendationData: ProactiveRecommendationDataDetails;
    };
const DataDetails = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ contentData: ContentDataDetails }),
  /*@__PURE__*/ S.Struct({
    generativeData: /*@__PURE__*/ S.suspend(
      (): S.Schema<GenerativeDataDetails> => GenerativeDataDetails,
    ).annotate({ identifier: "GenerativeDataDetails" }),
  }),
  /*@__PURE__*/ S.Struct({ intentDetectedData: IntentDetectedDataDetails }),
  /*@__PURE__*/ S.Struct({ sourceContentData: SourceContentDataDetails }),
  /*@__PURE__*/ S.Struct({
    generativeChunkData: /*@__PURE__*/ S.suspend(
      (): S.Schema<GenerativeChunkDataDetails> => GenerativeChunkDataDetails,
    ).annotate({ identifier: "GenerativeChunkDataDetails" }),
  }),
  /*@__PURE__*/ S.Struct({ emailResponseChunkData: EmailResponseChunkDataDetails }),
  /*@__PURE__*/ S.Struct({ emailOverviewChunkData: EmailOverviewChunkDataDetails }),
  /*@__PURE__*/ S.Struct({
    emailGenerativeAnswerChunkData: /*@__PURE__*/ S.suspend(
      (): S.Schema<EmailGenerativeAnswerChunkDataDetails> => EmailGenerativeAnswerChunkDataDetails,
    ).annotate({ identifier: "EmailGenerativeAnswerChunkDataDetails" }),
  }),
  /*@__PURE__*/ S.Struct({ caseSummarizationChunkData: CaseSummarizationChunkDataDetails }),
  /*@__PURE__*/ S.Struct({ suggestedMessageData: SuggestedMessageDataDetails }),
  /*@__PURE__*/ S.Struct({ notesData: NotesDataDetails }),
  /*@__PURE__*/ S.Struct({ notesChunkData: NotesChunkDataDetails }),
  /*@__PURE__*/ S.Struct({ proactiveRecommendationData: ProactiveRecommendationDataDetails }),
]) as any as S.Schema<DataDetails>;
export interface DataSummary {
  reference: DataReference;
  details: DataDetails;
}
const DataSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    reference: DataReference,
    details: S.suspend(() => DataDetails).annotate({ identifier: "DataDetails" }),
  }),
).annotate({ identifier: "DataSummary" }) as any as S.Schema<DataSummary>;
export interface RecommendationData {
  recommendationId: string;
  document?: Document;
  relevanceScore?: number;
  relevanceLevel?: string;
  type?: string;
  data?: DataSummary;
}
const RecommendationData = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    recommendationId: S.String,
    document: S.optional(Document),
    relevanceScore: S.optional(S.Number),
    relevanceLevel: S.optional(S.String),
    type: S.optional(S.String),
    data: S.optional(DataSummary),
  }),
).annotate({ identifier: "RecommendationData" }) as any as S.Schema<RecommendationData>;
export type RecommendationList = RecommendationData[];
const RecommendationList = /*@__PURE__*/ S.Array(RecommendationData);
export type RecommendationTriggerType = string;
export type RecommendationSourceType = string;
export type QueryText = string | redacted.Redacted<string>;
export interface QueryRecommendationTriggerData {
  text?: string | redacted.Redacted<string>;
}
const QueryRecommendationTriggerData = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ text: S.optional(SensitiveString) }),
).annotate({
  identifier: "QueryRecommendationTriggerData",
}) as any as S.Schema<QueryRecommendationTriggerData>;
export type RecommendationTriggerData = { query: QueryRecommendationTriggerData };
const RecommendationTriggerData = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ query: QueryRecommendationTriggerData }),
]);
export type RecommendationIdList = string[];
const RecommendationIdList = ToolExampleList as any as S.Schema<RecommendationIdList>;
export interface RecommendationTrigger {
  id: string;
  type: string;
  source: string;
  data: RecommendationTriggerData;
  recommendationIds: string[];
}
const RecommendationTrigger = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.String,
    type: S.String,
    source: S.String,
    data: RecommendationTriggerData,
    recommendationIds: RecommendationIdList,
  }),
).annotate({ identifier: "RecommendationTrigger" }) as any as S.Schema<RecommendationTrigger>;
export type RecommendationTriggerList = RecommendationTrigger[];
const RecommendationTriggerList = /*@__PURE__*/ S.Array(RecommendationTrigger);
export interface GetRecommendationsResponse {
  recommendations: RecommendationData[];
  triggers?: RecommendationTrigger[];
}
const GetRecommendationsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    recommendations: RecommendationList,
    triggers: S.optional(RecommendationTriggerList),
  }),
).annotate({
  identifier: "GetRecommendationsResponse",
}) as any as S.Schema<GetRecommendationsResponse>;
export interface GetSessionRequest {
  assistantId: string;
  sessionId: string;
}
const GetSessionRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    sessionId: S.String.pipe(T.HttpLabel("sessionId")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/assistants/{assistantId}/sessions/{sessionId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "GetSessionRequest" }) as any as S.Schema<GetSessionRequest>;
export interface GetSessionResponse {
  session?: SessionData;
}
const GetSessionResponse = CreateSessionResponse as any as S.Schema<GetSessionResponse>;
export interface ListAIAgentsRequest {
  assistantId: string;
  nextToken?: string;
  maxResults?: number;
  origin?: string;
}
const ListAIAgentsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    origin: S.optional(S.String).pipe(T.HttpQuery("origin")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/assistants/{assistantId}/aiagents" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "ListAIAgentsRequest" }) as any as S.Schema<ListAIAgentsRequest>;
export interface AIAgentSummary {
  name: string;
  assistantId: string;
  assistantArn: string;
  aiAgentId: string;
  type: string;
  aiAgentArn: string;
  modifiedTime?: Date;
  visibilityStatus: string;
  configuration?: AIAgentConfiguration;
  origin?: string;
  description?: string;
  status?: string;
  tags?: { [key: string]: string | undefined };
}
const AIAgentSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.String,
    assistantId: S.String,
    assistantArn: S.String,
    aiAgentId: S.String,
    type: S.String,
    aiAgentArn: S.String,
    modifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    visibilityStatus: S.String,
    configuration: S.optional(AIAgentConfiguration),
    origin: S.optional(S.String),
    description: S.optional(S.String),
    status: S.optional(S.String),
    tags: S.optional(Tags),
  }),
).annotate({ identifier: "AIAgentSummary" }) as any as S.Schema<AIAgentSummary>;
export type AIAgentSummaryList = AIAgentSummary[];
const AIAgentSummaryList = /*@__PURE__*/ S.Array(AIAgentSummary);
export interface ListAIAgentsResponse {
  aiAgentSummaries: AIAgentSummary[];
  nextToken?: string;
}
const ListAIAgentsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ aiAgentSummaries: AIAgentSummaryList, nextToken: S.optional(S.String) }),
).annotate({ identifier: "ListAIAgentsResponse" }) as any as S.Schema<ListAIAgentsResponse>;
export interface ListAIAgentVersionsRequest {
  assistantId: string;
  aiAgentId: string;
  nextToken?: string;
  maxResults?: number;
  origin?: string;
}
const ListAIAgentVersionsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    aiAgentId: S.String.pipe(T.HttpLabel("aiAgentId")),
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    origin: S.optional(S.String).pipe(T.HttpQuery("origin")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/assistants/{assistantId}/aiagents/{aiAgentId}/versions" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListAIAgentVersionsRequest",
}) as any as S.Schema<ListAIAgentVersionsRequest>;
export interface AIAgentVersionSummary {
  aiAgentSummary?: AIAgentSummary;
  versionNumber?: number;
}
const AIAgentVersionSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ aiAgentSummary: S.optional(AIAgentSummary), versionNumber: S.optional(S.Number) }),
).annotate({ identifier: "AIAgentVersionSummary" }) as any as S.Schema<AIAgentVersionSummary>;
export type AIAgentVersionSummariesList = AIAgentVersionSummary[];
const AIAgentVersionSummariesList = /*@__PURE__*/ S.Array(AIAgentVersionSummary);
export interface ListAIAgentVersionsResponse {
  aiAgentVersionSummaries: AIAgentVersionSummary[];
  nextToken?: string;
}
const ListAIAgentVersionsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    aiAgentVersionSummaries: AIAgentVersionSummariesList,
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListAIAgentVersionsResponse",
}) as any as S.Schema<ListAIAgentVersionsResponse>;
export interface ListAIGuardrailsRequest {
  assistantId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListAIGuardrailsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/assistants/{assistantId}/aiguardrails" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "ListAIGuardrailsRequest" }) as any as S.Schema<ListAIGuardrailsRequest>;
export interface AIGuardrailSummary {
  name: string;
  assistantId: string;
  assistantArn: string;
  aiGuardrailId: string;
  aiGuardrailArn: string;
  modifiedTime?: Date;
  visibilityStatus: string;
  description?: string | redacted.Redacted<string>;
  status?: string;
  tags?: { [key: string]: string | undefined };
}
const AIGuardrailSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.String,
    assistantId: S.String,
    assistantArn: S.String,
    aiGuardrailId: S.String,
    aiGuardrailArn: S.String,
    modifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    visibilityStatus: S.String,
    description: S.optional(SensitiveString),
    status: S.optional(S.String),
    tags: S.optional(Tags),
  }),
).annotate({ identifier: "AIGuardrailSummary" }) as any as S.Schema<AIGuardrailSummary>;
export type AIGuardrailSummariesList = AIGuardrailSummary[];
const AIGuardrailSummariesList = /*@__PURE__*/ S.Array(AIGuardrailSummary);
export interface ListAIGuardrailsResponse {
  aiGuardrailSummaries: AIGuardrailSummary[];
  nextToken?: string;
}
const ListAIGuardrailsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ aiGuardrailSummaries: AIGuardrailSummariesList, nextToken: S.optional(S.String) }),
).annotate({ identifier: "ListAIGuardrailsResponse" }) as any as S.Schema<ListAIGuardrailsResponse>;
export interface ListAIGuardrailVersionsRequest {
  assistantId: string;
  aiGuardrailId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListAIGuardrailVersionsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    aiGuardrailId: S.String.pipe(T.HttpLabel("aiGuardrailId")),
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.all(
      T.Http({
        method: "GET",
        uri: "/assistants/{assistantId}/aiguardrails/{aiGuardrailId}/versions",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListAIGuardrailVersionsRequest",
}) as any as S.Schema<ListAIGuardrailVersionsRequest>;
export interface AIGuardrailVersionSummary {
  aiGuardrailSummary?: AIGuardrailSummary;
  versionNumber?: number;
}
const AIGuardrailVersionSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    aiGuardrailSummary: S.optional(AIGuardrailSummary),
    versionNumber: S.optional(S.Number),
  }),
).annotate({
  identifier: "AIGuardrailVersionSummary",
}) as any as S.Schema<AIGuardrailVersionSummary>;
export type AIGuardrailVersionSummariesList = AIGuardrailVersionSummary[];
const AIGuardrailVersionSummariesList = /*@__PURE__*/ S.Array(AIGuardrailVersionSummary);
export interface ListAIGuardrailVersionsResponse {
  aiGuardrailVersionSummaries: AIGuardrailVersionSummary[];
  nextToken?: string;
}
const ListAIGuardrailVersionsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    aiGuardrailVersionSummaries: AIGuardrailVersionSummariesList,
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListAIGuardrailVersionsResponse",
}) as any as S.Schema<ListAIGuardrailVersionsResponse>;
export interface ListAIPromptsRequest {
  assistantId: string;
  nextToken?: string;
  maxResults?: number;
  origin?: string;
}
const ListAIPromptsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    origin: S.optional(S.String).pipe(T.HttpQuery("origin")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/assistants/{assistantId}/aiprompts" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "ListAIPromptsRequest" }) as any as S.Schema<ListAIPromptsRequest>;
export interface AIPromptSummary {
  name: string;
  assistantId: string;
  assistantArn: string;
  aiPromptId: string;
  type: string;
  aiPromptArn: string;
  modifiedTime?: Date;
  templateType: string;
  modelId: string;
  apiFormat: string;
  visibilityStatus: string;
  origin?: string;
  description?: string;
  status?: string;
  tags?: { [key: string]: string | undefined };
}
const AIPromptSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.String,
    assistantId: S.String,
    assistantArn: S.String,
    aiPromptId: S.String,
    type: S.String,
    aiPromptArn: S.String,
    modifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    templateType: S.String,
    modelId: S.String,
    apiFormat: S.String,
    visibilityStatus: S.String,
    origin: S.optional(S.String),
    description: S.optional(S.String),
    status: S.optional(S.String),
    tags: S.optional(Tags),
  }),
).annotate({ identifier: "AIPromptSummary" }) as any as S.Schema<AIPromptSummary>;
export type AIPromptSummaryList = AIPromptSummary[];
const AIPromptSummaryList = /*@__PURE__*/ S.Array(AIPromptSummary);
export interface ListAIPromptsResponse {
  aiPromptSummaries: AIPromptSummary[];
  nextToken?: string;
}
const ListAIPromptsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ aiPromptSummaries: AIPromptSummaryList, nextToken: S.optional(S.String) }),
).annotate({ identifier: "ListAIPromptsResponse" }) as any as S.Schema<ListAIPromptsResponse>;
export interface ListAIPromptVersionsRequest {
  assistantId: string;
  aiPromptId: string;
  nextToken?: string;
  maxResults?: number;
  origin?: string;
}
const ListAIPromptVersionsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    aiPromptId: S.String.pipe(T.HttpLabel("aiPromptId")),
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    origin: S.optional(S.String).pipe(T.HttpQuery("origin")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/assistants/{assistantId}/aiprompts/{aiPromptId}/versions" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListAIPromptVersionsRequest",
}) as any as S.Schema<ListAIPromptVersionsRequest>;
export interface AIPromptVersionSummary {
  aiPromptSummary?: AIPromptSummary;
  versionNumber?: number;
}
const AIPromptVersionSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ aiPromptSummary: S.optional(AIPromptSummary), versionNumber: S.optional(S.Number) }),
).annotate({ identifier: "AIPromptVersionSummary" }) as any as S.Schema<AIPromptVersionSummary>;
export type AIPromptVersionSummariesList = AIPromptVersionSummary[];
const AIPromptVersionSummariesList = /*@__PURE__*/ S.Array(AIPromptVersionSummary);
export interface ListAIPromptVersionsResponse {
  aiPromptVersionSummaries: AIPromptVersionSummary[];
  nextToken?: string;
}
const ListAIPromptVersionsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    aiPromptVersionSummaries: AIPromptVersionSummariesList,
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListAIPromptVersionsResponse",
}) as any as S.Schema<ListAIPromptVersionsResponse>;
export interface ListAssistantAssociationsRequest {
  nextToken?: string;
  maxResults?: number;
  assistantId: string;
}
const ListAssistantAssociationsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/assistants/{assistantId}/associations" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListAssistantAssociationsRequest",
}) as any as S.Schema<ListAssistantAssociationsRequest>;
export interface AssistantAssociationSummary {
  assistantAssociationId: string;
  assistantAssociationArn: string;
  assistantId: string;
  assistantArn: string;
  associationType: string;
  associationData: AssistantAssociationOutputData;
  tags?: { [key: string]: string | undefined };
}
const AssistantAssociationSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantAssociationId: S.String,
    assistantAssociationArn: S.String,
    assistantId: S.String,
    assistantArn: S.String,
    associationType: S.String,
    associationData: AssistantAssociationOutputData,
    tags: S.optional(Tags),
  }),
).annotate({
  identifier: "AssistantAssociationSummary",
}) as any as S.Schema<AssistantAssociationSummary>;
export type AssistantAssociationSummaryList = AssistantAssociationSummary[];
const AssistantAssociationSummaryList = /*@__PURE__*/ S.Array(AssistantAssociationSummary);
export interface ListAssistantAssociationsResponse {
  assistantAssociationSummaries: AssistantAssociationSummary[];
  nextToken?: string;
}
const ListAssistantAssociationsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantAssociationSummaries: AssistantAssociationSummaryList,
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListAssistantAssociationsResponse",
}) as any as S.Schema<ListAssistantAssociationsResponse>;
export interface ListAssistantsRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListAssistantsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(T.all(T.Http({ method: "GET", uri: "/assistants" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "ListAssistantsRequest" }) as any as S.Schema<ListAssistantsRequest>;
export interface AssistantSummary {
  assistantId: string;
  assistantArn: string;
  name: string;
  type: string;
  status: string;
  description?: string;
  tags?: { [key: string]: string | undefined };
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  integrationConfiguration?: AssistantIntegrationConfiguration;
  capabilityConfiguration?: AssistantCapabilityConfiguration;
  aiAgentConfiguration?: { [key: string]: AIAgentConfigurationData | undefined };
  orchestratorConfigurationList?: OrchestratorConfigurationEntry[];
}
const AssistantSummary = AssistantData as any as S.Schema<AssistantSummary>;
export type AssistantList = AssistantSummary[];
const AssistantList = /*@__PURE__*/ S.Array(AssistantSummary);
export interface ListAssistantsResponse {
  assistantSummaries: AssistantSummary[];
  nextToken?: string;
}
const ListAssistantsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ assistantSummaries: AssistantList, nextToken: S.optional(S.String) }),
).annotate({ identifier: "ListAssistantsResponse" }) as any as S.Schema<ListAssistantsResponse>;
export interface ListContentAssociationsRequest {
  nextToken?: string;
  maxResults?: number;
  knowledgeBaseId: string;
  contentId: string;
}
const ListContentAssociationsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
    contentId: S.String.pipe(T.HttpLabel("contentId")),
  }).pipe(
    T.all(
      T.Http({
        method: "GET",
        uri: "/knowledgeBases/{knowledgeBaseId}/contents/{contentId}/associations",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListContentAssociationsRequest",
}) as any as S.Schema<ListContentAssociationsRequest>;
export interface ContentAssociationSummary {
  knowledgeBaseId: string;
  knowledgeBaseArn: string;
  contentId: string;
  contentArn: string;
  contentAssociationId: string;
  contentAssociationArn: string;
  associationType: string;
  associationData: ContentAssociationContents;
  tags?: { [key: string]: string | undefined };
}
const ContentAssociationSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    knowledgeBaseId: S.String,
    knowledgeBaseArn: S.String,
    contentId: S.String,
    contentArn: S.String,
    contentAssociationId: S.String,
    contentAssociationArn: S.String,
    associationType: S.String,
    associationData: ContentAssociationContents,
    tags: S.optional(Tags),
  }),
).annotate({
  identifier: "ContentAssociationSummary",
}) as any as S.Schema<ContentAssociationSummary>;
export type ContentAssociationSummaryList = ContentAssociationSummary[];
const ContentAssociationSummaryList = /*@__PURE__*/ S.Array(ContentAssociationSummary);
export interface ListContentAssociationsResponse {
  contentAssociationSummaries: ContentAssociationSummary[];
  nextToken?: string;
}
const ListContentAssociationsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    contentAssociationSummaries: ContentAssociationSummaryList,
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListContentAssociationsResponse",
}) as any as S.Schema<ListContentAssociationsResponse>;
export interface ListContentsRequest {
  nextToken?: string;
  maxResults?: number;
  knowledgeBaseId: string;
}
const ListContentsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/knowledgeBases/{knowledgeBaseId}/contents" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "ListContentsRequest" }) as any as S.Schema<ListContentsRequest>;
export type ContentSummaryList = ContentSummary[];
const ContentSummaryList = /*@__PURE__*/ S.Array(ContentSummary);
export interface ListContentsResponse {
  contentSummaries: ContentSummary[];
  nextToken?: string;
}
const ListContentsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ contentSummaries: ContentSummaryList, nextToken: S.optional(S.String) }),
).annotate({ identifier: "ListContentsResponse" }) as any as S.Schema<ListContentsResponse>;
export interface ListImportJobsRequest {
  nextToken?: string;
  maxResults?: number;
  knowledgeBaseId: string;
}
const ListImportJobsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/knowledgeBases/{knowledgeBaseId}/importJobs" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "ListImportJobsRequest" }) as any as S.Schema<ListImportJobsRequest>;
export interface ImportJobSummary {
  importJobId: string;
  knowledgeBaseId: string;
  uploadId: string;
  knowledgeBaseArn: string;
  importJobType: string;
  status: string;
  createdTime: Date;
  lastModifiedTime: Date;
  metadata?: { [key: string]: string | undefined };
  externalSourceConfiguration?: ExternalSourceConfiguration;
}
const ImportJobSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    importJobId: S.String,
    knowledgeBaseId: S.String,
    uploadId: S.String,
    knowledgeBaseArn: S.String,
    importJobType: S.String,
    status: S.String,
    createdTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    lastModifiedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    metadata: S.optional(ContentMetadata),
    externalSourceConfiguration: S.optional(ExternalSourceConfiguration),
  }),
).annotate({ identifier: "ImportJobSummary" }) as any as S.Schema<ImportJobSummary>;
export type ImportJobList = ImportJobSummary[];
const ImportJobList = /*@__PURE__*/ S.Array(ImportJobSummary);
export interface ListImportJobsResponse {
  importJobSummaries: ImportJobSummary[];
  nextToken?: string;
}
const ListImportJobsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ importJobSummaries: ImportJobList, nextToken: S.optional(S.String) }),
).annotate({ identifier: "ListImportJobsResponse" }) as any as S.Schema<ListImportJobsResponse>;
export interface ListKnowledgeBasesRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListKnowledgeBasesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(T.all(T.Http({ method: "GET", uri: "/knowledgeBases" }), svc, auth, proto, ver, rules)),
).annotate({
  identifier: "ListKnowledgeBasesRequest",
}) as any as S.Schema<ListKnowledgeBasesRequest>;
export interface KnowledgeBaseSummary {
  knowledgeBaseId: string;
  knowledgeBaseArn: string;
  name: string;
  knowledgeBaseType: string;
  status: string;
  sourceConfiguration?: SourceConfiguration;
  vectorIngestionConfiguration?: VectorIngestionConfiguration;
  renderingConfiguration?: RenderingConfiguration;
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  description?: string;
  tags?: { [key: string]: string | undefined };
}
const KnowledgeBaseSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    knowledgeBaseId: S.String,
    knowledgeBaseArn: S.String,
    name: S.String,
    knowledgeBaseType: S.String,
    status: S.String,
    sourceConfiguration: S.optional(SourceConfiguration),
    vectorIngestionConfiguration: S.optional(VectorIngestionConfiguration),
    renderingConfiguration: S.optional(RenderingConfiguration),
    serverSideEncryptionConfiguration: S.optional(ServerSideEncryptionConfiguration),
    description: S.optional(S.String),
    tags: S.optional(Tags),
  }),
).annotate({ identifier: "KnowledgeBaseSummary" }) as any as S.Schema<KnowledgeBaseSummary>;
export type KnowledgeBaseList = KnowledgeBaseSummary[];
const KnowledgeBaseList = /*@__PURE__*/ S.Array(KnowledgeBaseSummary);
export interface ListKnowledgeBasesResponse {
  knowledgeBaseSummaries: KnowledgeBaseSummary[];
  nextToken?: string;
}
const ListKnowledgeBasesResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ knowledgeBaseSummaries: KnowledgeBaseList, nextToken: S.optional(S.String) }),
).annotate({
  identifier: "ListKnowledgeBasesResponse",
}) as any as S.Schema<ListKnowledgeBasesResponse>;
export type MessageFilterType = string;
export interface ListMessagesRequest {
  assistantId: string;
  sessionId: string;
  nextToken?: string;
  maxResults?: number;
  filter?: string;
}
const ListMessagesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    sessionId: S.String.pipe(T.HttpLabel("sessionId")),
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    filter: S.optional(S.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/assistants/{assistantId}/sessions/{sessionId}/messages" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "ListMessagesRequest" }) as any as S.Schema<ListMessagesRequest>;
export type MessageList = MessageOutput[];
const MessageList = /*@__PURE__*/ S.Array(MessageOutput);
export interface ListMessagesResponse {
  messages: MessageOutput[];
  nextToken?: string;
}
const ListMessagesResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ messages: MessageList, nextToken: S.optional(S.String) }),
).annotate({ identifier: "ListMessagesResponse" }) as any as S.Schema<ListMessagesResponse>;
export interface ListMessageTemplatesRequest {
  nextToken?: string;
  maxResults?: number;
  knowledgeBaseId: string;
}
const ListMessageTemplatesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/knowledgeBases/{knowledgeBaseId}/messageTemplates" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListMessageTemplatesRequest",
}) as any as S.Schema<ListMessageTemplatesRequest>;
export interface MessageTemplateSummary {
  messageTemplateArn: string;
  messageTemplateId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  channel?: string | redacted.Redacted<string>;
  channelSubtype: string;
  createdTime: Date;
  lastModifiedTime: Date;
  lastModifiedBy: string;
  sourceConfiguration?: MessageTemplateSourceConfiguration;
  activeVersionNumber?: number;
  description?: string;
  tags?: { [key: string]: string | undefined };
}
const MessageTemplateSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    messageTemplateArn: S.String,
    messageTemplateId: S.String,
    knowledgeBaseArn: S.String,
    knowledgeBaseId: S.String,
    name: S.String,
    channel: S.optional(SensitiveString),
    channelSubtype: S.String,
    createdTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    lastModifiedTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    lastModifiedBy: S.String,
    sourceConfiguration: S.optional(MessageTemplateSourceConfiguration),
    activeVersionNumber: S.optional(S.Number),
    description: S.optional(S.String),
    tags: S.optional(Tags),
  }),
).annotate({ identifier: "MessageTemplateSummary" }) as any as S.Schema<MessageTemplateSummary>;
export type MessageTemplateSummaryList = MessageTemplateSummary[];
const MessageTemplateSummaryList = /*@__PURE__*/ S.Array(MessageTemplateSummary);
export interface ListMessageTemplatesResponse {
  messageTemplateSummaries: MessageTemplateSummary[];
  nextToken?: string;
}
const ListMessageTemplatesResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    messageTemplateSummaries: MessageTemplateSummaryList,
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListMessageTemplatesResponse",
}) as any as S.Schema<ListMessageTemplatesResponse>;
export interface ListMessageTemplateVersionsRequest {
  knowledgeBaseId: string;
  messageTemplateId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListMessageTemplateVersionsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
    messageTemplateId: S.String.pipe(T.HttpLabel("messageTemplateId")),
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.all(
      T.Http({
        method: "GET",
        uri: "/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/versions",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListMessageTemplateVersionsRequest",
}) as any as S.Schema<ListMessageTemplateVersionsRequest>;
export interface MessageTemplateVersionSummary {
  messageTemplateArn: string;
  messageTemplateId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  channel?: string | redacted.Redacted<string>;
  channelSubtype: string;
  isActive: boolean;
  versionNumber: number;
}
const MessageTemplateVersionSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    messageTemplateArn: S.String,
    messageTemplateId: S.String,
    knowledgeBaseArn: S.String,
    knowledgeBaseId: S.String,
    name: S.String,
    channel: S.optional(SensitiveString),
    channelSubtype: S.String,
    isActive: S.Boolean,
    versionNumber: S.Number,
  }),
).annotate({
  identifier: "MessageTemplateVersionSummary",
}) as any as S.Schema<MessageTemplateVersionSummary>;
export type MessageTemplateVersionSummaryList = MessageTemplateVersionSummary[];
const MessageTemplateVersionSummaryList = /*@__PURE__*/ S.Array(MessageTemplateVersionSummary);
export interface ListMessageTemplateVersionsResponse {
  messageTemplateVersionSummaries: MessageTemplateVersionSummary[];
  nextToken?: string;
}
const ListMessageTemplateVersionsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    messageTemplateVersionSummaries: MessageTemplateVersionSummaryList,
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListMessageTemplateVersionsResponse",
}) as any as S.Schema<ListMessageTemplateVersionsResponse>;
export type ModelLifecycle = string;
export interface ListModelsRequest {
  assistantId: string;
  aiPromptType?: string;
  modelLifecycle?: string;
  nextToken?: string;
  maxResults?: number;
}
const ListModelsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    aiPromptType: S.optional(S.String).pipe(T.HttpQuery("aiPromptType")),
    modelLifecycle: S.optional(S.String).pipe(T.HttpQuery("modelLifecycle")),
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/assistants/{assistantId}/models" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "ListModelsRequest" }) as any as S.Schema<ListModelsRequest>;
export type ModelId = string;
export type ModelDisplayName = string;
export type CrossRegionStatus = string;
export type AIPromptTypeList = string[];
const AIPromptTypeList = ToolExampleList as any as S.Schema<AIPromptTypeList>;
export interface ModelSummary {
  modelId: string;
  displayName: string;
  crossRegionStatus?: string;
  supportsPromptCaching?: boolean;
  supportedAIPromptTypes?: string[];
  modelLifecycle?: string;
  legacyTimestamp?: Date;
  endOfLifeTimestamp?: Date;
}
const ModelSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    modelId: S.String,
    displayName: S.String,
    crossRegionStatus: S.optional(S.String),
    supportsPromptCaching: S.optional(S.Boolean),
    supportedAIPromptTypes: S.optional(AIPromptTypeList),
    modelLifecycle: S.optional(S.String),
    legacyTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    endOfLifeTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
  }),
).annotate({ identifier: "ModelSummary" }) as any as S.Schema<ModelSummary>;
export type ModelSummaryList = ModelSummary[];
const ModelSummaryList = /*@__PURE__*/ S.Array(ModelSummary);
export interface ListModelsResponse {
  modelSummaries: ModelSummary[];
  nextToken?: string;
}
const ListModelsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ modelSummaries: ModelSummaryList, nextToken: S.optional(S.String) }),
).annotate({ identifier: "ListModelsResponse" }) as any as S.Schema<ListModelsResponse>;
export interface ListQuickResponsesRequest {
  nextToken?: string;
  maxResults?: number;
  knowledgeBaseId: string;
}
const ListQuickResponsesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/knowledgeBases/{knowledgeBaseId}/quickResponses" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListQuickResponsesRequest",
}) as any as S.Schema<ListQuickResponsesRequest>;
export interface QuickResponseSummary {
  quickResponseArn: string;
  quickResponseId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  contentType: string;
  status: string;
  createdTime: Date;
  lastModifiedTime: Date;
  description?: string;
  lastModifiedBy?: string;
  isActive?: boolean;
  channels?: (string | redacted.Redacted<string>)[];
  tags?: { [key: string]: string | undefined };
}
const QuickResponseSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    quickResponseArn: S.String,
    quickResponseId: S.String,
    knowledgeBaseArn: S.String,
    knowledgeBaseId: S.String,
    name: S.String,
    contentType: S.String,
    status: S.String,
    createdTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    lastModifiedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    description: S.optional(S.String),
    lastModifiedBy: S.optional(S.String),
    isActive: S.optional(S.Boolean),
    channels: S.optional(Channels),
    tags: S.optional(Tags),
  }),
).annotate({ identifier: "QuickResponseSummary" }) as any as S.Schema<QuickResponseSummary>;
export type QuickResponseSummaryList = QuickResponseSummary[];
const QuickResponseSummaryList = /*@__PURE__*/ S.Array(QuickResponseSummary);
export interface ListQuickResponsesResponse {
  quickResponseSummaries: QuickResponseSummary[];
  nextToken?: string;
}
const ListQuickResponsesResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ quickResponseSummaries: QuickResponseSummaryList, nextToken: S.optional(S.String) }),
).annotate({
  identifier: "ListQuickResponsesResponse",
}) as any as S.Schema<ListQuickResponsesResponse>;
export interface ListSpansRequest {
  assistantId: string;
  sessionId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListSpansRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    sessionId: S.String.pipe(T.HttpLabel("sessionId")),
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/assistants/{assistantId}/sessions/{sessionId}/spans" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "ListSpansRequest" }) as any as S.Schema<ListSpansRequest>;
export type SpanType = string;
export type SpanStatus = string;
export type InteractionMode = string;
export type ReturnReason = string;
export type SpanFinishReasonList = string[];
const SpanFinishReasonList = ToolExampleList as any as S.Schema<SpanFinishReasonList>;
export interface SpanCitation {
  contentId?: string;
  title?: string | redacted.Redacted<string>;
  knowledgeBaseId?: string;
  knowledgeBaseArn?: string;
}
const SpanCitation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    contentId: S.optional(S.String),
    title: S.optional(SensitiveString),
    knowledgeBaseId: S.optional(S.String),
    knowledgeBaseArn: S.optional(S.String),
  }),
).annotate({ identifier: "SpanCitation" }) as any as S.Schema<SpanCitation>;
export type SpanCitationList = SpanCitation[];
const SpanCitationList = /*@__PURE__*/ S.Array(SpanCitation);
export interface SpanTextValue {
  value: string | redacted.Redacted<string>;
  citations?: SpanCitation[];
  aiGuardrailAssessment?: AIGuardrailAssessment;
}
const SpanTextValue = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    value: SensitiveString,
    citations: S.optional(SpanCitationList),
    aiGuardrailAssessment: S.optional(AIGuardrailAssessment),
  }),
).annotate({ identifier: "SpanTextValue" }) as any as S.Schema<SpanTextValue>;
export interface SpanToolUseValue {
  toolUseId: string;
  name: string;
  arguments: any;
}
const SpanToolUseValue = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ toolUseId: S.String, name: S.String, arguments: S.Any }),
).annotate({ identifier: "SpanToolUseValue" }) as any as S.Schema<SpanToolUseValue>;
export interface SpanToolResultValue {
  toolUseId: string;
  values: SpanMessageValue[];
  error?: string;
}
const SpanToolResultValue = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    toolUseId: S.String,
    values: S.suspend(() => SpanMessageValueList).annotate({ identifier: "SpanMessageValueList" }),
    error: S.optional(S.String),
  }),
).annotate({ identifier: "SpanToolResultValue" }) as any as S.Schema<SpanToolResultValue>;
export interface SpanReasoningValue {
  value: string | redacted.Redacted<string>;
}
const SpanReasoningValue = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ value: SensitiveString }),
).annotate({ identifier: "SpanReasoningValue" }) as any as S.Schema<SpanReasoningValue>;
export type SpanMessageValue =
  | { text: SpanTextValue; toolUse?: never; toolResult?: never; reasoning?: never }
  | { text?: never; toolUse: SpanToolUseValue; toolResult?: never; reasoning?: never }
  | { text?: never; toolUse?: never; toolResult: SpanToolResultValue; reasoning?: never }
  | { text?: never; toolUse?: never; toolResult?: never; reasoning: SpanReasoningValue };
const SpanMessageValue = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ text: SpanTextValue }),
  /*@__PURE__*/ S.Struct({ toolUse: SpanToolUseValue }),
  /*@__PURE__*/ S.Struct({
    toolResult: /*@__PURE__*/ S.suspend(
      (): S.Schema<SpanToolResultValue> => SpanToolResultValue,
    ).annotate({
      identifier: "SpanToolResultValue",
    }),
  }),
  /*@__PURE__*/ S.Struct({ reasoning: SpanReasoningValue }),
]) as any as S.Schema<SpanMessageValue>;
export type SpanMessageValueList = SpanMessageValue[];
const SpanMessageValueList = /*@__PURE__*/ S.Array(
  /*@__PURE__*/ S.suspend(() => SpanMessageValue).annotate({ identifier: "SpanMessageValue" }),
) as any as S.Schema<SpanMessageValueList>;
export interface SpanMessage {
  messageId: string;
  participant: string;
  timestamp: Date;
  values: SpanMessageValue[];
}
const SpanMessage = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    messageId: S.String,
    participant: S.String,
    timestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    values: SpanMessageValueList,
  }),
).annotate({ identifier: "SpanMessage" }) as any as S.Schema<SpanMessage>;
export type SpanMessageList = SpanMessage[];
const SpanMessageList = /*@__PURE__*/ S.Array(SpanMessage);
export type GuardrailSource = string;
export type GuardrailAction = string;
export type GuardrailPolicyType = string;
export interface GuardrailPolicyResult {
  policyType: string;
  action: string;
  details?: string;
}
const GuardrailPolicyResult = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ policyType: S.String, action: S.String, details: S.optional(S.String) }),
).annotate({ identifier: "GuardrailPolicyResult" }) as any as S.Schema<GuardrailPolicyResult>;
export type GuardrailPolicyResultList = GuardrailPolicyResult[];
const GuardrailPolicyResultList = /*@__PURE__*/ S.Array(GuardrailPolicyResult);
export interface SpanGuardrailAssessment {
  guardrailId: string;
  guardrailName: string;
  source: string;
  action: string;
  policies?: GuardrailPolicyResult[];
}
const SpanGuardrailAssessment = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    guardrailId: S.String,
    guardrailName: S.String,
    source: S.String,
    action: S.String,
    policies: S.optional(GuardrailPolicyResultList),
  }),
).annotate({ identifier: "SpanGuardrailAssessment" }) as any as S.Schema<SpanGuardrailAssessment>;
export type SpanGuardrailAssessmentList = SpanGuardrailAssessment[];
const SpanGuardrailAssessmentList = /*@__PURE__*/ S.Array(SpanGuardrailAssessment);
export interface SpanAttributes {
  operationName?: string;
  providerName?: string;
  errorType?: string;
  agentId?: string;
  instanceArn?: string;
  contactId?: string;
  initialContactId?: string;
  sessionName?: string;
  aiAgentArn?: string;
  aiAgentType?: string;
  aiAgentName?: string;
  aiAgentId?: string;
  aiAgentVersion?: number;
  aiAgentInvoker?: string;
  aiAgentOrchestratorUseCase?: string;
  interactionMode?: string;
  targetAgentId?: string;
  returnReason?: string;
  requestModel?: string;
  requestMaxTokens?: number;
  temperature?: number;
  topP?: number;
  responseModel?: string;
  responseFinishReasons?: string[];
  usageInputTokens?: number;
  usageOutputTokens?: number;
  usageTotalTokens?: number;
  cacheReadInputTokens?: number;
  cacheWriteInputTokens?: number;
  inputMessages?: SpanMessage[];
  outputMessages?: SpanMessage[];
  systemInstructions?: SpanMessageValue[];
  promptArn?: string;
  promptId?: string;
  promptType?: string;
  promptName?: string;
  promptVersion?: number;
  timeToFirstTokenMs?: number;
  guardrailAssessments?: SpanGuardrailAssessment[];
}
const SpanAttributes = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    operationName: S.optional(S.String),
    providerName: S.optional(S.String),
    errorType: S.optional(S.String),
    agentId: S.optional(S.String),
    instanceArn: S.optional(S.String),
    contactId: S.optional(S.String),
    initialContactId: S.optional(S.String),
    sessionName: S.optional(S.String),
    aiAgentArn: S.optional(S.String),
    aiAgentType: S.optional(S.String),
    aiAgentName: S.optional(S.String),
    aiAgentId: S.optional(S.String),
    aiAgentVersion: S.optional(S.Number),
    aiAgentInvoker: S.optional(S.String),
    aiAgentOrchestratorUseCase: S.optional(S.String),
    interactionMode: S.optional(S.String),
    targetAgentId: S.optional(S.String),
    returnReason: S.optional(S.String),
    requestModel: S.optional(S.String),
    requestMaxTokens: S.optional(S.Number),
    temperature: S.optional(S.Number),
    topP: S.optional(S.Number),
    responseModel: S.optional(S.String),
    responseFinishReasons: S.optional(SpanFinishReasonList),
    usageInputTokens: S.optional(S.Number),
    usageOutputTokens: S.optional(S.Number),
    usageTotalTokens: S.optional(S.Number),
    cacheReadInputTokens: S.optional(S.Number),
    cacheWriteInputTokens: S.optional(S.Number),
    inputMessages: S.optional(SpanMessageList),
    outputMessages: S.optional(SpanMessageList),
    systemInstructions: S.optional(SpanMessageValueList),
    promptArn: S.optional(S.String),
    promptId: S.optional(S.String),
    promptType: S.optional(S.String),
    promptName: S.optional(S.String),
    promptVersion: S.optional(S.Number),
    timeToFirstTokenMs: S.optional(S.Number),
    guardrailAssessments: S.optional(SpanGuardrailAssessmentList),
  }),
).annotate({ identifier: "SpanAttributes" }) as any as S.Schema<SpanAttributes>;
export interface Span {
  spanId: string;
  assistantId: string;
  sessionId: string;
  parentSpanId?: string;
  spanName: string;
  spanType: string;
  startTimestamp: Date;
  endTimestamp: Date;
  status: string;
  statusDescription?: string;
  requestId: string;
  originRequestId?: string;
  attributes: SpanAttributes;
}
const Span = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    spanId: S.String,
    assistantId: S.String,
    sessionId: S.String,
    parentSpanId: S.optional(S.String),
    spanName: S.String,
    spanType: S.String,
    startTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    endTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    status: S.String,
    statusDescription: S.optional(S.String),
    requestId: S.String,
    originRequestId: S.optional(S.String),
    attributes: SpanAttributes,
  }),
).annotate({ identifier: "Span" }) as any as S.Schema<Span>;
export type SpanList = Span[];
const SpanList = /*@__PURE__*/ S.Array(Span);
export interface ListSpansResponse {
  spans: Span[];
  nextToken?: string;
}
const ListSpansResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ spans: SpanList, nextToken: S.optional(S.String) }),
).annotate({ identifier: "ListSpansResponse" }) as any as S.Schema<ListSpansResponse>;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
    T.all(T.Http({ method: "GET", uri: "/tags/{resourceArn}" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "ListTagsForResourceRequest",
}) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ tags: S.optional(Tags) }),
).annotate({
  identifier: "ListTagsForResourceResponse",
}) as any as S.Schema<ListTagsForResourceResponse>;
export interface NotifyRecommendationsReceivedRequest {
  assistantId: string;
  sessionId: string;
  recommendationIds: string[];
}
const NotifyRecommendationsReceivedRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    sessionId: S.String.pipe(T.HttpLabel("sessionId")),
    recommendationIds: RecommendationIdList,
  }).pipe(
    T.all(
      T.Http({
        method: "POST",
        uri: "/assistants/{assistantId}/sessions/{sessionId}/recommendations/notify",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "NotifyRecommendationsReceivedRequest",
}) as any as S.Schema<NotifyRecommendationsReceivedRequest>;
export type NotifyRecommendationsReceivedErrorMessage = string;
export interface NotifyRecommendationsReceivedError_ {
  recommendationId?: string;
  message?: string;
}
const NotifyRecommendationsReceivedError_ = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ recommendationId: S.optional(S.String), message: S.optional(S.String) }),
).annotate({
  identifier: "NotifyRecommendationsReceivedError",
}) as any as S.Schema<NotifyRecommendationsReceivedError_>;
export type NotifyRecommendationsReceivedErrorList = NotifyRecommendationsReceivedError_[];
const NotifyRecommendationsReceivedErrorList = /*@__PURE__*/ S.Array(
  NotifyRecommendationsReceivedError_,
);
export interface NotifyRecommendationsReceivedResponse {
  recommendationIds?: string[];
  errors?: NotifyRecommendationsReceivedError_[];
}
const NotifyRecommendationsReceivedResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    recommendationIds: S.optional(RecommendationIdList),
    errors: S.optional(NotifyRecommendationsReceivedErrorList),
  }),
).annotate({
  identifier: "NotifyRecommendationsReceivedResponse",
}) as any as S.Schema<NotifyRecommendationsReceivedResponse>;
export type TargetType = string;
export type Relevance = string;
export interface GenerativeContentFeedbackData {
  relevance: string;
}
const GenerativeContentFeedbackData = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ relevance: S.String }),
).annotate({
  identifier: "GenerativeContentFeedbackData",
}) as any as S.Schema<GenerativeContentFeedbackData>;
export type ContentFeedbackData = { generativeContentFeedbackData: GenerativeContentFeedbackData };
const ContentFeedbackData = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ generativeContentFeedbackData: GenerativeContentFeedbackData }),
]);
export interface PutFeedbackRequest {
  assistantId: string;
  targetId: string;
  targetType: string;
  contentFeedback: ContentFeedbackData;
}
const PutFeedbackRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    targetId: S.String,
    targetType: S.String,
    contentFeedback: ContentFeedbackData,
  }).pipe(
    T.all(
      T.Http({ method: "PUT", uri: "/assistants/{assistantId}/feedback" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "PutFeedbackRequest" }) as any as S.Schema<PutFeedbackRequest>;
export interface PutFeedbackResponse {
  assistantId: string;
  assistantArn: string;
  targetId: string;
  targetType: string;
  contentFeedback: ContentFeedbackData;
}
const PutFeedbackResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String,
    assistantArn: S.String,
    targetId: S.String,
    targetType: S.String,
    contentFeedback: ContentFeedbackData,
  }),
).annotate({ identifier: "PutFeedbackResponse" }) as any as S.Schema<PutFeedbackResponse>;
export type QueryConditionFieldName = string;
export type QueryConditionComparisonOperator = string;
export interface QueryConditionItem {
  field: string;
  comparator: string;
  value: string;
}
const QueryConditionItem = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ field: S.String, comparator: S.String, value: S.String }),
).annotate({ identifier: "QueryConditionItem" }) as any as S.Schema<QueryConditionItem>;
export type QueryCondition = { single: QueryConditionItem };
const QueryCondition = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ single: QueryConditionItem }),
]);
export type QueryConditionExpression = QueryCondition[];
const QueryConditionExpression = /*@__PURE__*/ S.Array(QueryCondition);
export interface QueryTextInputData {
  text: string | redacted.Redacted<string>;
}
const QueryTextInputData = GuardrailWordConfig as any as S.Schema<QueryTextInputData>;
export interface IntentInputData {
  intentId: string;
}
const IntentInputData = /*@__PURE__*/ S.suspend(() => S.Struct({ intentId: S.String })).annotate({
  identifier: "IntentInputData",
}) as any as S.Schema<IntentInputData>;
export type CaseArn = string;
export interface CaseSummarizationInputData {
  caseArn: string;
}
const CaseSummarizationInputData = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ caseArn: S.String }),
).annotate({
  identifier: "CaseSummarizationInputData",
}) as any as S.Schema<CaseSummarizationInputData>;
export type QueryInputData =
  | {
      queryTextInputData: QueryTextInputData;
      intentInputData?: never;
      caseSummarizationInputData?: never;
    }
  | {
      queryTextInputData?: never;
      intentInputData: IntentInputData;
      caseSummarizationInputData?: never;
    }
  | {
      queryTextInputData?: never;
      intentInputData?: never;
      caseSummarizationInputData: CaseSummarizationInputData;
    };
const QueryInputData = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ queryTextInputData: QueryTextInputData }),
  /*@__PURE__*/ S.Struct({ intentInputData: IntentInputData }),
  /*@__PURE__*/ S.Struct({ caseSummarizationInputData: CaseSummarizationInputData }),
]);
export interface QueryAssistantRequest {
  assistantId: string;
  queryText?: string | redacted.Redacted<string>;
  nextToken?: string;
  maxResults?: number;
  sessionId?: string;
  queryCondition?: QueryCondition[];
  queryInputData?: QueryInputData;
  overrideKnowledgeBaseSearchType?: string;
}
const QueryAssistantRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    queryText: S.optional(SensitiveString),
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
    sessionId: S.optional(S.String),
    queryCondition: S.optional(QueryConditionExpression),
    queryInputData: S.optional(QueryInputData),
    overrideKnowledgeBaseSearchType: S.optional(S.String),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/assistants/{assistantId}/query" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "QueryAssistantRequest" }) as any as S.Schema<QueryAssistantRequest>;
export type QueryResultType = string;
export interface ResultData {
  resultId: string;
  document?: Document;
  relevanceScore?: number;
  data?: DataSummary;
  type?: string;
}
const ResultData = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    resultId: S.String,
    document: S.optional(Document),
    relevanceScore: S.optional(S.Number),
    data: S.optional(DataSummary),
    type: S.optional(S.String),
  }),
).annotate({ identifier: "ResultData" }) as any as S.Schema<ResultData>;
export type QueryResultsList = ResultData[];
const QueryResultsList = /*@__PURE__*/ S.Array(ResultData);
export interface QueryAssistantResponse {
  results: ResultData[];
  nextToken?: string;
}
const QueryAssistantResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ results: QueryResultsList, nextToken: S.optional(S.String) }),
).annotate({ identifier: "QueryAssistantResponse" }) as any as S.Schema<QueryAssistantResponse>;
export interface RemoveAssistantAIAgentRequest {
  assistantId: string;
  aiAgentType: string;
  orchestratorUseCase?: string;
}
const RemoveAssistantAIAgentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    aiAgentType: S.String.pipe(T.HttpQuery("aiAgentType")),
    orchestratorUseCase: S.optional(S.String).pipe(T.HttpQuery("orchestratorUseCase")),
  }).pipe(
    T.all(
      T.Http({ method: "DELETE", uri: "/assistants/{assistantId}/aiagentConfiguration" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "RemoveAssistantAIAgentRequest",
}) as any as S.Schema<RemoveAssistantAIAgentRequest>;
export interface RemoveAssistantAIAgentResponse {}
const RemoveAssistantAIAgentResponse =
  DeleteAIAgentResponse as any as S.Schema<RemoveAssistantAIAgentResponse>;
export interface RemoveKnowledgeBaseTemplateUriRequest {
  knowledgeBaseId: string;
}
const RemoveKnowledgeBaseTemplateUriRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")) }).pipe(
    T.all(
      T.Http({ method: "DELETE", uri: "/knowledgeBases/{knowledgeBaseId}/templateUri" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "RemoveKnowledgeBaseTemplateUriRequest",
}) as any as S.Schema<RemoveKnowledgeBaseTemplateUriRequest>;
export interface RemoveKnowledgeBaseTemplateUriResponse {}
const RemoveKnowledgeBaseTemplateUriResponse =
  DeleteAIGuardrailVersionResponse as any as S.Schema<RemoveKnowledgeBaseTemplateUriResponse>;
export interface RenderMessageTemplateRequest {
  knowledgeBaseId: string;
  messageTemplateId: string;
  attributes: MessageTemplateAttributes;
}
const RenderMessageTemplateRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
    messageTemplateId: S.String.pipe(T.HttpLabel("messageTemplateId")),
    attributes: MessageTemplateAttributes,
  }).pipe(
    T.all(
      T.Http({
        method: "POST",
        uri: "/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/render",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "RenderMessageTemplateRequest",
}) as any as S.Schema<RenderMessageTemplateRequest>;
export type MessageTemplateAttributeKeyList = string[];
const MessageTemplateAttributeKeyList =
  ToolExampleList as any as S.Schema<MessageTemplateAttributeKeyList>;
export interface RenderMessageTemplateResponse {
  content?: MessageTemplateContentProvider;
  sourceConfigurationSummary?: MessageTemplateSourceConfigurationSummary;
  attributesNotInterpolated?: string[];
  attachments?: MessageTemplateAttachment[];
}
const RenderMessageTemplateResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    content: S.optional(MessageTemplateContentProvider),
    sourceConfigurationSummary: S.optional(MessageTemplateSourceConfigurationSummary),
    attributesNotInterpolated: S.optional(MessageTemplateAttributeKeyList),
    attachments: S.optional(MessageTemplateAttachmentList),
  }),
).annotate({
  identifier: "RenderMessageTemplateResponse",
}) as any as S.Schema<RenderMessageTemplateResponse>;
export type AssistantAssociationIdList = string[];
const AssistantAssociationIdList = ToolExampleList as any as S.Schema<AssistantAssociationIdList>;
export type KnowledgeSource = { assistantAssociationIds: string[] };
const KnowledgeSource = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ assistantAssociationIds: AssistantAssociationIdList }),
]);
export type RetrievalFilterList = RetrievalFilterConfiguration[];
const RetrievalFilterList = /*@__PURE__*/ S.Array(
  /*@__PURE__*/ S.suspend(() => RetrievalFilterConfiguration).annotate({
    identifier: "RetrievalFilterConfiguration",
  }),
) as any as S.Schema<RetrievalFilterList>;
export type FilterAttributeKey = string;
export interface FilterAttribute {
  key: string;
  value: any;
}
const FilterAttribute = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ key: S.String, value: S.Any }),
).annotate({ identifier: "FilterAttribute" }) as any as S.Schema<FilterAttribute>;
export type RetrievalFilterConfiguration =
  | {
      andAll: RetrievalFilterConfiguration[];
      equals?: never;
      greaterThan?: never;
      greaterThanOrEquals?: never;
      in?: never;
      lessThan?: never;
      lessThanOrEquals?: never;
      listContains?: never;
      notEquals?: never;
      notIn?: never;
      orAll?: never;
      startsWith?: never;
      stringContains?: never;
    }
  | {
      andAll?: never;
      equals: FilterAttribute;
      greaterThan?: never;
      greaterThanOrEquals?: never;
      in?: never;
      lessThan?: never;
      lessThanOrEquals?: never;
      listContains?: never;
      notEquals?: never;
      notIn?: never;
      orAll?: never;
      startsWith?: never;
      stringContains?: never;
    }
  | {
      andAll?: never;
      equals?: never;
      greaterThan: FilterAttribute;
      greaterThanOrEquals?: never;
      in?: never;
      lessThan?: never;
      lessThanOrEquals?: never;
      listContains?: never;
      notEquals?: never;
      notIn?: never;
      orAll?: never;
      startsWith?: never;
      stringContains?: never;
    }
  | {
      andAll?: never;
      equals?: never;
      greaterThan?: never;
      greaterThanOrEquals: FilterAttribute;
      in?: never;
      lessThan?: never;
      lessThanOrEquals?: never;
      listContains?: never;
      notEquals?: never;
      notIn?: never;
      orAll?: never;
      startsWith?: never;
      stringContains?: never;
    }
  | {
      andAll?: never;
      equals?: never;
      greaterThan?: never;
      greaterThanOrEquals?: never;
      in: FilterAttribute;
      lessThan?: never;
      lessThanOrEquals?: never;
      listContains?: never;
      notEquals?: never;
      notIn?: never;
      orAll?: never;
      startsWith?: never;
      stringContains?: never;
    }
  | {
      andAll?: never;
      equals?: never;
      greaterThan?: never;
      greaterThanOrEquals?: never;
      in?: never;
      lessThan: FilterAttribute;
      lessThanOrEquals?: never;
      listContains?: never;
      notEquals?: never;
      notIn?: never;
      orAll?: never;
      startsWith?: never;
      stringContains?: never;
    }
  | {
      andAll?: never;
      equals?: never;
      greaterThan?: never;
      greaterThanOrEquals?: never;
      in?: never;
      lessThan?: never;
      lessThanOrEquals: FilterAttribute;
      listContains?: never;
      notEquals?: never;
      notIn?: never;
      orAll?: never;
      startsWith?: never;
      stringContains?: never;
    }
  | {
      andAll?: never;
      equals?: never;
      greaterThan?: never;
      greaterThanOrEquals?: never;
      in?: never;
      lessThan?: never;
      lessThanOrEquals?: never;
      listContains: FilterAttribute;
      notEquals?: never;
      notIn?: never;
      orAll?: never;
      startsWith?: never;
      stringContains?: never;
    }
  | {
      andAll?: never;
      equals?: never;
      greaterThan?: never;
      greaterThanOrEquals?: never;
      in?: never;
      lessThan?: never;
      lessThanOrEquals?: never;
      listContains?: never;
      notEquals: FilterAttribute;
      notIn?: never;
      orAll?: never;
      startsWith?: never;
      stringContains?: never;
    }
  | {
      andAll?: never;
      equals?: never;
      greaterThan?: never;
      greaterThanOrEquals?: never;
      in?: never;
      lessThan?: never;
      lessThanOrEquals?: never;
      listContains?: never;
      notEquals?: never;
      notIn: FilterAttribute;
      orAll?: never;
      startsWith?: never;
      stringContains?: never;
    }
  | {
      andAll?: never;
      equals?: never;
      greaterThan?: never;
      greaterThanOrEquals?: never;
      in?: never;
      lessThan?: never;
      lessThanOrEquals?: never;
      listContains?: never;
      notEquals?: never;
      notIn?: never;
      orAll: RetrievalFilterConfiguration[];
      startsWith?: never;
      stringContains?: never;
    }
  | {
      andAll?: never;
      equals?: never;
      greaterThan?: never;
      greaterThanOrEquals?: never;
      in?: never;
      lessThan?: never;
      lessThanOrEquals?: never;
      listContains?: never;
      notEquals?: never;
      notIn?: never;
      orAll?: never;
      startsWith: FilterAttribute;
      stringContains?: never;
    }
  | {
      andAll?: never;
      equals?: never;
      greaterThan?: never;
      greaterThanOrEquals?: never;
      in?: never;
      lessThan?: never;
      lessThanOrEquals?: never;
      listContains?: never;
      notEquals?: never;
      notIn?: never;
      orAll?: never;
      startsWith?: never;
      stringContains: FilterAttribute;
    };
const RetrievalFilterConfiguration = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({
    andAll: /*@__PURE__*/ S.suspend(() => RetrievalFilterList).annotate({
      identifier: "RetrievalFilterList",
    }),
  }),
  /*@__PURE__*/ S.Struct({ equals: FilterAttribute }),
  /*@__PURE__*/ S.Struct({ greaterThan: FilterAttribute }),
  /*@__PURE__*/ S.Struct({ greaterThanOrEquals: FilterAttribute }),
  /*@__PURE__*/ S.Struct({ in: FilterAttribute }),
  /*@__PURE__*/ S.Struct({ lessThan: FilterAttribute }),
  /*@__PURE__*/ S.Struct({ lessThanOrEquals: FilterAttribute }),
  /*@__PURE__*/ S.Struct({ listContains: FilterAttribute }),
  /*@__PURE__*/ S.Struct({ notEquals: FilterAttribute }),
  /*@__PURE__*/ S.Struct({ notIn: FilterAttribute }),
  /*@__PURE__*/ S.Struct({
    orAll: /*@__PURE__*/ S.suspend(() => RetrievalFilterList).annotate({
      identifier: "RetrievalFilterList",
    }),
  }),
  /*@__PURE__*/ S.Struct({ startsWith: FilterAttribute }),
  /*@__PURE__*/ S.Struct({ stringContains: FilterAttribute }),
]) as any as S.Schema<RetrievalFilterConfiguration>;
export interface RetrievalConfiguration {
  knowledgeSource: KnowledgeSource;
  filter?: RetrievalFilterConfiguration;
  numberOfResults?: number;
  overrideKnowledgeBaseSearchType?: string;
}
const RetrievalConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    knowledgeSource: KnowledgeSource,
    filter: S.optional(RetrievalFilterConfiguration),
    numberOfResults: S.optional(S.Number),
    overrideKnowledgeBaseSearchType: S.optional(S.String),
  }),
).annotate({ identifier: "RetrievalConfiguration" }) as any as S.Schema<RetrievalConfiguration>;
export interface RetrieveRequest {
  assistantId: string;
  retrievalConfiguration: RetrievalConfiguration;
  retrievalQuery: string | redacted.Redacted<string>;
}
const RetrieveRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    retrievalConfiguration: RetrievalConfiguration,
    retrievalQuery: SensitiveString,
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/assistants/{assistantId}/retrieve" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "RetrieveRequest" }) as any as S.Schema<RetrieveRequest>;
export interface RetrieveResult {
  associationId: string;
  sourceId: string | redacted.Redacted<string>;
  referenceType: string;
  contentText: string | redacted.Redacted<string>;
}
const RetrieveResult = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    associationId: S.String,
    sourceId: SensitiveString,
    referenceType: S.String,
    contentText: SensitiveString,
  }),
).annotate({ identifier: "RetrieveResult" }) as any as S.Schema<RetrieveResult>;
export type RetrieveResultList = RetrieveResult[];
const RetrieveResultList = /*@__PURE__*/ S.Array(RetrieveResult);
export type RetrieveErrorCode = string;
export interface RetrieveError_ {
  associationId: string;
  code: string;
  message: string;
}
const RetrieveError_ = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ associationId: S.String, code: S.String, message: S.String }),
).annotate({ identifier: "RetrieveError" }) as any as S.Schema<RetrieveError_>;
export type RetrieveErrorList = RetrieveError_[];
const RetrieveErrorList = /*@__PURE__*/ S.Array(RetrieveError_);
export interface RetrieveResponse {
  results: RetrieveResult[];
  errors?: RetrieveError_[];
}
const RetrieveResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ results: RetrieveResultList, errors: S.optional(RetrieveErrorList) }),
).annotate({ identifier: "RetrieveResponse" }) as any as S.Schema<RetrieveResponse>;
export type FilterField = string;
export type FilterOperator = string;
export interface Filter {
  field: string;
  operator: string;
  value: string;
}
const Filter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ field: S.String, operator: S.String, value: S.String }),
).annotate({ identifier: "Filter" }) as any as S.Schema<Filter>;
export type FilterList = Filter[];
const FilterList = /*@__PURE__*/ S.Array(Filter);
export interface SearchExpression {
  filters: Filter[];
}
const SearchExpression = /*@__PURE__*/ S.suspend(() => S.Struct({ filters: FilterList })).annotate({
  identifier: "SearchExpression",
}) as any as S.Schema<SearchExpression>;
export interface SearchContentRequest {
  nextToken?: string;
  maxResults?: number;
  knowledgeBaseId: string;
  searchExpression: SearchExpression;
}
const SearchContentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
    searchExpression: SearchExpression,
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/knowledgeBases/{knowledgeBaseId}/search" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "SearchContentRequest" }) as any as S.Schema<SearchContentRequest>;
export interface SearchContentResponse {
  contentSummaries: ContentSummary[];
  nextToken?: string;
}
const SearchContentResponse = ListContentsResponse as any as S.Schema<SearchContentResponse>;
export type MessageTemplateQueryValue = string;
export type MessageTemplateQueryValueList = string[];
const MessageTemplateQueryValueList =
  ToolExampleList as any as S.Schema<MessageTemplateQueryValueList>;
export type MessageTemplateQueryOperator = string;
export type Priority = string;
export interface MessageTemplateQueryField {
  name: string;
  values: string[];
  operator: string;
  allowFuzziness?: boolean;
  priority?: string;
}
const MessageTemplateQueryField = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.String,
    values: MessageTemplateQueryValueList,
    operator: S.String,
    allowFuzziness: S.optional(S.Boolean),
    priority: S.optional(S.String),
  }),
).annotate({
  identifier: "MessageTemplateQueryField",
}) as any as S.Schema<MessageTemplateQueryField>;
export type MessageTemplateQueryFieldList = MessageTemplateQueryField[];
const MessageTemplateQueryFieldList = /*@__PURE__*/ S.Array(MessageTemplateQueryField);
export type MessageTemplateFilterValue = string;
export type MessageTemplateFilterValueList = string[];
const MessageTemplateFilterValueList =
  ToolExampleList as any as S.Schema<MessageTemplateFilterValueList>;
export type MessageTemplateFilterOperator = string;
export interface MessageTemplateFilterField {
  name: string;
  values?: string[];
  operator: string;
  includeNoExistence?: boolean;
}
const MessageTemplateFilterField = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.String,
    values: S.optional(MessageTemplateFilterValueList),
    operator: S.String,
    includeNoExistence: S.optional(S.Boolean),
  }),
).annotate({
  identifier: "MessageTemplateFilterField",
}) as any as S.Schema<MessageTemplateFilterField>;
export type MessageTemplateFilterFieldList = MessageTemplateFilterField[];
const MessageTemplateFilterFieldList = /*@__PURE__*/ S.Array(MessageTemplateFilterField);
export type Order = string;
export interface MessageTemplateOrderField {
  name: string;
  order?: string;
}
const MessageTemplateOrderField = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ name: S.String, order: S.optional(S.String) }),
).annotate({
  identifier: "MessageTemplateOrderField",
}) as any as S.Schema<MessageTemplateOrderField>;
export interface MessageTemplateSearchExpression {
  queries?: MessageTemplateQueryField[];
  filters?: MessageTemplateFilterField[];
  orderOnField?: MessageTemplateOrderField;
}
const MessageTemplateSearchExpression = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    queries: S.optional(MessageTemplateQueryFieldList),
    filters: S.optional(MessageTemplateFilterFieldList),
    orderOnField: S.optional(MessageTemplateOrderField),
  }),
).annotate({
  identifier: "MessageTemplateSearchExpression",
}) as any as S.Schema<MessageTemplateSearchExpression>;
export interface SearchMessageTemplatesRequest {
  knowledgeBaseId: string;
  searchExpression: MessageTemplateSearchExpression;
  nextToken?: string;
  maxResults?: number;
}
const SearchMessageTemplatesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
    searchExpression: MessageTemplateSearchExpression,
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/knowledgeBases/{knowledgeBaseId}/search/messageTemplates" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "SearchMessageTemplatesRequest",
}) as any as S.Schema<SearchMessageTemplatesRequest>;
export interface MessageTemplateSearchResultData {
  messageTemplateArn: string;
  messageTemplateId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  channel?: string | redacted.Redacted<string>;
  channelSubtype: string;
  createdTime: Date;
  lastModifiedTime: Date;
  lastModifiedBy: string;
  isActive?: boolean;
  versionNumber?: number;
  description?: string;
  sourceConfigurationSummary?: MessageTemplateSourceConfigurationSummary;
  groupingConfiguration?: GroupingConfiguration;
  language?: string;
  tags?: { [key: string]: string | undefined };
}
const MessageTemplateSearchResultData = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    messageTemplateArn: S.String,
    messageTemplateId: S.String,
    knowledgeBaseArn: S.String,
    knowledgeBaseId: S.String,
    name: S.String,
    channel: S.optional(SensitiveString),
    channelSubtype: S.String,
    createdTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    lastModifiedTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    lastModifiedBy: S.String,
    isActive: S.optional(S.Boolean),
    versionNumber: S.optional(S.Number),
    description: S.optional(S.String),
    sourceConfigurationSummary: S.optional(MessageTemplateSourceConfigurationSummary),
    groupingConfiguration: S.optional(GroupingConfiguration),
    language: S.optional(S.String),
    tags: S.optional(Tags),
  }),
).annotate({
  identifier: "MessageTemplateSearchResultData",
}) as any as S.Schema<MessageTemplateSearchResultData>;
export type MessageTemplateSearchResultsList = MessageTemplateSearchResultData[];
const MessageTemplateSearchResultsList = /*@__PURE__*/ S.Array(MessageTemplateSearchResultData);
export interface SearchMessageTemplatesResponse {
  results: MessageTemplateSearchResultData[];
  nextToken?: string;
}
const SearchMessageTemplatesResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ results: MessageTemplateSearchResultsList, nextToken: S.optional(S.String) }),
).annotate({
  identifier: "SearchMessageTemplatesResponse",
}) as any as S.Schema<SearchMessageTemplatesResponse>;
export type QuickResponseQueryValue = string;
export type QuickResponseQueryValueList = string[];
const QuickResponseQueryValueList = ToolExampleList as any as S.Schema<QuickResponseQueryValueList>;
export type QuickResponseQueryOperator = string;
export interface QuickResponseQueryField {
  name: string;
  values: string[];
  operator: string;
  allowFuzziness?: boolean;
  priority?: string;
}
const QuickResponseQueryField = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.String,
    values: QuickResponseQueryValueList,
    operator: S.String,
    allowFuzziness: S.optional(S.Boolean),
    priority: S.optional(S.String),
  }),
).annotate({ identifier: "QuickResponseQueryField" }) as any as S.Schema<QuickResponseQueryField>;
export type QuickResponseQueryFieldList = QuickResponseQueryField[];
const QuickResponseQueryFieldList = /*@__PURE__*/ S.Array(QuickResponseQueryField);
export type QuickResponseFilterValue = string;
export type QuickResponseFilterValueList = string[];
const QuickResponseFilterValueList =
  ToolExampleList as any as S.Schema<QuickResponseFilterValueList>;
export type QuickResponseFilterOperator = string;
export interface QuickResponseFilterField {
  name: string;
  values?: string[];
  operator: string;
  includeNoExistence?: boolean;
}
const QuickResponseFilterField = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.String,
    values: S.optional(QuickResponseFilterValueList),
    operator: S.String,
    includeNoExistence: S.optional(S.Boolean),
  }),
).annotate({ identifier: "QuickResponseFilterField" }) as any as S.Schema<QuickResponseFilterField>;
export type QuickResponseFilterFieldList = QuickResponseFilterField[];
const QuickResponseFilterFieldList = /*@__PURE__*/ S.Array(QuickResponseFilterField);
export interface QuickResponseOrderField {
  name: string;
  order?: string;
}
const QuickResponseOrderField = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ name: S.String, order: S.optional(S.String) }),
).annotate({ identifier: "QuickResponseOrderField" }) as any as S.Schema<QuickResponseOrderField>;
export interface QuickResponseSearchExpression {
  queries?: QuickResponseQueryField[];
  filters?: QuickResponseFilterField[];
  orderOnField?: QuickResponseOrderField;
}
const QuickResponseSearchExpression = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    queries: S.optional(QuickResponseQueryFieldList),
    filters: S.optional(QuickResponseFilterFieldList),
    orderOnField: S.optional(QuickResponseOrderField),
  }),
).annotate({
  identifier: "QuickResponseSearchExpression",
}) as any as S.Schema<QuickResponseSearchExpression>;
export type ContactAttributeKey = string;
export type ContactAttributeValue = string;
export type ContactAttributes = { [key: string]: string | undefined };
const ContactAttributes = ContentMetadata as any as S.Schema<ContactAttributes>;
export interface SearchQuickResponsesRequest {
  knowledgeBaseId: string;
  searchExpression: QuickResponseSearchExpression;
  nextToken?: string;
  maxResults?: number;
  attributes?: { [key: string]: string | undefined };
}
const SearchQuickResponsesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
    searchExpression: QuickResponseSearchExpression,
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    attributes: S.optional(ContactAttributes),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/knowledgeBases/{knowledgeBaseId}/search/quickResponses" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "SearchQuickResponsesRequest",
}) as any as S.Schema<SearchQuickResponsesRequest>;
export type ContactAttributeKeys = string[];
const ContactAttributeKeys = ToolExampleList as any as S.Schema<ContactAttributeKeys>;
export interface QuickResponseSearchResultData {
  quickResponseArn: string;
  quickResponseId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  contentType: string;
  status: string;
  contents: QuickResponseContents;
  createdTime: Date;
  lastModifiedTime: Date;
  isActive: boolean;
  description?: string;
  groupingConfiguration?: GroupingConfiguration;
  shortcutKey?: string;
  lastModifiedBy?: string;
  channels?: (string | redacted.Redacted<string>)[];
  language?: string;
  attributesNotInterpolated?: string[];
  attributesInterpolated?: string[];
  tags?: { [key: string]: string | undefined };
}
const QuickResponseSearchResultData = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    quickResponseArn: S.String,
    quickResponseId: S.String,
    knowledgeBaseArn: S.String,
    knowledgeBaseId: S.String,
    name: S.String,
    contentType: S.String,
    status: S.String,
    contents: QuickResponseContents,
    createdTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    lastModifiedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    isActive: S.Boolean,
    description: S.optional(S.String),
    groupingConfiguration: S.optional(GroupingConfiguration),
    shortcutKey: S.optional(S.String),
    lastModifiedBy: S.optional(S.String),
    channels: S.optional(Channels),
    language: S.optional(S.String),
    attributesNotInterpolated: S.optional(ContactAttributeKeys),
    attributesInterpolated: S.optional(ContactAttributeKeys),
    tags: S.optional(Tags),
  }),
).annotate({
  identifier: "QuickResponseSearchResultData",
}) as any as S.Schema<QuickResponseSearchResultData>;
export type QuickResponseSearchResultsList = QuickResponseSearchResultData[];
const QuickResponseSearchResultsList = /*@__PURE__*/ S.Array(QuickResponseSearchResultData);
export interface SearchQuickResponsesResponse {
  results: QuickResponseSearchResultData[];
  nextToken?: string;
}
const SearchQuickResponsesResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ results: QuickResponseSearchResultsList, nextToken: S.optional(S.String) }),
).annotate({
  identifier: "SearchQuickResponsesResponse",
}) as any as S.Schema<SearchQuickResponsesResponse>;
export interface SearchSessionsRequest {
  nextToken?: string;
  maxResults?: number;
  assistantId: string;
  searchExpression: SearchExpression;
}
const SearchSessionsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    searchExpression: SearchExpression,
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/assistants/{assistantId}/searchSessions" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "SearchSessionsRequest" }) as any as S.Schema<SearchSessionsRequest>;
export interface SessionSummary {
  sessionId: string;
  sessionArn: string;
  assistantId: string;
  assistantArn: string;
}
const SessionSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    sessionId: S.String,
    sessionArn: S.String,
    assistantId: S.String,
    assistantArn: S.String,
  }),
).annotate({ identifier: "SessionSummary" }) as any as S.Schema<SessionSummary>;
export type SessionSummaries = SessionSummary[];
const SessionSummaries = /*@__PURE__*/ S.Array(SessionSummary);
export interface SearchSessionsResponse {
  sessionSummaries: SessionSummary[];
  nextToken?: string;
}
const SearchSessionsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ sessionSummaries: SessionSummaries, nextToken: S.optional(S.String) }),
).annotate({ identifier: "SearchSessionsResponse" }) as any as S.Schema<SearchSessionsResponse>;
export interface MessageInput {
  value: MessageData;
}
const MessageInput = /*@__PURE__*/ S.suspend(() => S.Struct({ value: MessageData })).annotate({
  identifier: "MessageInput",
}) as any as S.Schema<MessageInput>;
export interface SelfServiceConversationHistory {
  turnNumber?: number;
  inputTranscript?: string | redacted.Redacted<string>;
  botResponse?: string | redacted.Redacted<string>;
  timestamp?: Date;
}
const SelfServiceConversationHistory = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    turnNumber: S.optional(S.Number),
    inputTranscript: S.optional(SensitiveString),
    botResponse: S.optional(SensitiveString),
    timestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
  }),
).annotate({
  identifier: "SelfServiceConversationHistory",
}) as any as S.Schema<SelfServiceConversationHistory>;
export type SelfServiceConversationHistoryList = SelfServiceConversationHistory[];
const SelfServiceConversationHistoryList = /*@__PURE__*/ S.Array(SelfServiceConversationHistory);
export interface ConversationContext {
  selfServiceConversationHistory: SelfServiceConversationHistory[];
}
const ConversationContext = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ selfServiceConversationHistory: SelfServiceConversationHistoryList }),
).annotate({ identifier: "ConversationContext" }) as any as S.Schema<ConversationContext>;
export interface MessageConfiguration {
  generateFillerMessage?: boolean;
  generateChunkedMessage?: boolean;
}
const MessageConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    generateFillerMessage: S.optional(S.Boolean),
    generateChunkedMessage: S.optional(S.Boolean),
  }),
).annotate({ identifier: "MessageConfiguration" }) as any as S.Schema<MessageConfiguration>;
export type MessageMetadata = { [key: string]: string | undefined };
const MessageMetadata = ContentMetadata as any as S.Schema<MessageMetadata>;
export interface SendMessageRequest {
  assistantId: string;
  sessionId: string;
  type: string;
  message: MessageInput;
  aiAgentId?: string;
  conversationContext?: ConversationContext;
  configuration?: MessageConfiguration;
  clientToken?: string;
  orchestratorUseCase?: string;
  metadata?: { [key: string]: string | undefined };
  originRequestId?: string;
}
const SendMessageRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    sessionId: S.String.pipe(T.HttpLabel("sessionId")),
    type: S.String,
    message: MessageInput,
    aiAgentId: S.optional(S.String),
    conversationContext: S.optional(ConversationContext),
    configuration: S.optional(MessageConfiguration),
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    orchestratorUseCase: S.optional(S.String),
    metadata: S.optional(MessageMetadata),
    originRequestId: S.optional(S.String),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/assistants/{assistantId}/sessions/{sessionId}/message" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "SendMessageRequest" }) as any as S.Schema<SendMessageRequest>;
export interface SendMessageResponse {
  requestMessageId: string;
  configuration?: MessageConfiguration;
  nextMessageToken: string;
}
const SendMessageResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    requestMessageId: S.String,
    configuration: S.optional(MessageConfiguration),
    nextMessageToken: S.String,
  }),
).annotate({ identifier: "SendMessageResponse" }) as any as S.Schema<SendMessageResponse>;
export type TimeToLive = number;
export interface StartContentUploadRequest {
  knowledgeBaseId: string;
  contentType: string;
  presignedUrlTimeToLive?: number;
}
const StartContentUploadRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
    contentType: S.String,
    presignedUrlTimeToLive: S.optional(S.Number),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/knowledgeBases/{knowledgeBaseId}/upload" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "StartContentUploadRequest",
}) as any as S.Schema<StartContentUploadRequest>;
export type Headers = { [key: string]: string | undefined };
const Headers = Tags as any as S.Schema<Headers>;
export interface StartContentUploadResponse {
  uploadId: string;
  url: string | redacted.Redacted<string>;
  urlExpiry: Date;
  headersToInclude: { [key: string]: string | undefined };
}
const StartContentUploadResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    uploadId: S.String,
    url: SensitiveString,
    urlExpiry: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    headersToInclude: Headers,
  }),
).annotate({
  identifier: "StartContentUploadResponse",
}) as any as S.Schema<StartContentUploadResponse>;
export interface StartImportJobRequest {
  knowledgeBaseId: string;
  importJobType: string;
  uploadId: string;
  clientToken?: string;
  metadata?: { [key: string]: string | undefined };
  externalSourceConfiguration?: ExternalSourceConfiguration;
}
const StartImportJobRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
    importJobType: S.String,
    uploadId: S.String,
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    metadata: S.optional(ContentMetadata),
    externalSourceConfiguration: S.optional(ExternalSourceConfiguration),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/knowledgeBases/{knowledgeBaseId}/importJobs" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "StartImportJobRequest" }) as any as S.Schema<StartImportJobRequest>;
export interface StartImportJobResponse {
  importJob?: ImportJobData;
}
const StartImportJobResponse = GetImportJobResponse as any as S.Schema<StartImportJobResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: Tags }).pipe(
    T.all(T.Http({ method: "POST", uri: "/tags/{resourceArn}" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "TagResourceRequest" }) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DeleteAIAgentResponse as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = ToolExampleList as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
    tagKeys: TagKeyList.pipe(T.HttpQuery("tagKeys")),
  }).pipe(
    T.all(T.Http({ method: "DELETE", uri: "/tags/{resourceArn}" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "UntagResourceRequest" }) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = DeleteAIAgentResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateAIAgentRequest {
  clientToken?: string;
  assistantId: string;
  aiAgentId: string;
  visibilityStatus: string;
  configuration?: AIAgentConfiguration;
  description?: string;
}
const UpdateAIAgentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    aiAgentId: S.String.pipe(T.HttpLabel("aiAgentId")),
    visibilityStatus: S.String,
    configuration: S.optional(AIAgentConfiguration),
    description: S.optional(S.String),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/assistants/{assistantId}/aiagents/{aiAgentId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "UpdateAIAgentRequest" }) as any as S.Schema<UpdateAIAgentRequest>;
export interface UpdateAIAgentResponse {
  aiAgent?: AIAgentData;
}
const UpdateAIAgentResponse = CreateAIAgentResponse as any as S.Schema<UpdateAIAgentResponse>;
export interface UpdateAIGuardrailRequest {
  clientToken?: string;
  assistantId: string;
  aiGuardrailId: string;
  visibilityStatus: string;
  blockedInputMessaging: string | redacted.Redacted<string>;
  blockedOutputsMessaging: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  topicPolicyConfig?: AIGuardrailTopicPolicyConfig;
  contentPolicyConfig?: AIGuardrailContentPolicyConfig;
  wordPolicyConfig?: AIGuardrailWordPolicyConfig;
  sensitiveInformationPolicyConfig?: AIGuardrailSensitiveInformationPolicyConfig;
  contextualGroundingPolicyConfig?: AIGuardrailContextualGroundingPolicyConfig;
}
const UpdateAIGuardrailRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    aiGuardrailId: S.String.pipe(T.HttpLabel("aiGuardrailId")),
    visibilityStatus: S.String,
    blockedInputMessaging: SensitiveString,
    blockedOutputsMessaging: SensitiveString,
    description: S.optional(SensitiveString),
    topicPolicyConfig: S.optional(AIGuardrailTopicPolicyConfig),
    contentPolicyConfig: S.optional(AIGuardrailContentPolicyConfig),
    wordPolicyConfig: S.optional(AIGuardrailWordPolicyConfig),
    sensitiveInformationPolicyConfig: S.optional(AIGuardrailSensitiveInformationPolicyConfig),
    contextualGroundingPolicyConfig: S.optional(AIGuardrailContextualGroundingPolicyConfig),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/assistants/{assistantId}/aiguardrails/{aiGuardrailId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "UpdateAIGuardrailRequest" }) as any as S.Schema<UpdateAIGuardrailRequest>;
export interface UpdateAIGuardrailResponse {
  aiGuardrail?: AIGuardrailData;
}
const UpdateAIGuardrailResponse =
  CreateAIGuardrailResponse as any as S.Schema<UpdateAIGuardrailResponse>;
export interface UpdateAIPromptRequest {
  clientToken?: string;
  assistantId: string;
  aiPromptId: string;
  visibilityStatus: string;
  templateConfiguration?: AIPromptTemplateConfiguration;
  description?: string;
  modelId?: string;
  inferenceConfiguration?: AIPromptInferenceConfiguration;
}
const UpdateAIPromptRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    aiPromptId: S.String.pipe(T.HttpLabel("aiPromptId")),
    visibilityStatus: S.String,
    templateConfiguration: S.optional(AIPromptTemplateConfiguration),
    description: S.optional(S.String),
    modelId: S.optional(S.String),
    inferenceConfiguration: S.optional(AIPromptInferenceConfiguration),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/assistants/{assistantId}/aiprompts/{aiPromptId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "UpdateAIPromptRequest" }) as any as S.Schema<UpdateAIPromptRequest>;
export interface UpdateAIPromptResponse {
  aiPrompt?: AIPromptData;
}
const UpdateAIPromptResponse = CreateAIPromptResponse as any as S.Schema<UpdateAIPromptResponse>;
export interface UpdateAssistantAIAgentRequest {
  assistantId: string;
  aiAgentType: string;
  configuration: AIAgentConfigurationData;
  orchestratorUseCase?: string;
}
const UpdateAssistantAIAgentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    aiAgentType: S.String,
    configuration: AIAgentConfigurationData,
    orchestratorUseCase: S.optional(S.String),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/assistants/{assistantId}/aiagentConfiguration" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdateAssistantAIAgentRequest",
}) as any as S.Schema<UpdateAssistantAIAgentRequest>;
export interface UpdateAssistantAIAgentResponse {
  assistant?: AssistantData;
}
const UpdateAssistantAIAgentResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ assistant: S.optional(AssistantData) }),
).annotate({
  identifier: "UpdateAssistantAIAgentResponse",
}) as any as S.Schema<UpdateAssistantAIAgentResponse>;
export interface UpdateContentRequest {
  knowledgeBaseId: string;
  contentId: string;
  revisionId?: string;
  title?: string;
  overrideLinkOutUri?: string;
  removeOverrideLinkOutUri?: boolean;
  metadata?: { [key: string]: string | undefined };
  uploadId?: string;
}
const UpdateContentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
    contentId: S.String.pipe(T.HttpLabel("contentId")),
    revisionId: S.optional(S.String),
    title: S.optional(S.String),
    overrideLinkOutUri: S.optional(S.String),
    removeOverrideLinkOutUri: S.optional(S.Boolean),
    metadata: S.optional(ContentMetadata),
    uploadId: S.optional(S.String),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/knowledgeBases/{knowledgeBaseId}/contents/{contentId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "UpdateContentRequest" }) as any as S.Schema<UpdateContentRequest>;
export interface UpdateContentResponse {
  content?: ContentData;
}
const UpdateContentResponse = CreateContentResponse as any as S.Schema<UpdateContentResponse>;
export interface UpdateKnowledgeBaseTemplateUriRequest {
  knowledgeBaseId: string;
  templateUri: string;
}
const UpdateKnowledgeBaseTemplateUriRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
    templateUri: S.String,
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/knowledgeBases/{knowledgeBaseId}/templateUri" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdateKnowledgeBaseTemplateUriRequest",
}) as any as S.Schema<UpdateKnowledgeBaseTemplateUriRequest>;
export interface UpdateKnowledgeBaseTemplateUriResponse {
  knowledgeBase?: KnowledgeBaseData;
}
const UpdateKnowledgeBaseTemplateUriResponse =
  CreateKnowledgeBaseResponse as any as S.Schema<UpdateKnowledgeBaseTemplateUriResponse>;
export interface UpdateMessageTemplateRequest {
  knowledgeBaseId: string;
  messageTemplateId: string;
  content?: MessageTemplateContentProvider;
  language?: string;
  sourceConfiguration?: MessageTemplateSourceConfiguration;
  defaultAttributes?: MessageTemplateAttributes;
}
const UpdateMessageTemplateRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
    messageTemplateId: S.String.pipe(T.HttpLabel("messageTemplateId")),
    content: S.optional(MessageTemplateContentProvider),
    language: S.optional(S.String),
    sourceConfiguration: S.optional(MessageTemplateSourceConfiguration),
    defaultAttributes: S.optional(MessageTemplateAttributes),
  }).pipe(
    T.all(
      T.Http({
        method: "POST",
        uri: "/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdateMessageTemplateRequest",
}) as any as S.Schema<UpdateMessageTemplateRequest>;
export interface UpdateMessageTemplateResponse {
  messageTemplate?: MessageTemplateData;
}
const UpdateMessageTemplateResponse =
  CreateMessageTemplateResponse as any as S.Schema<UpdateMessageTemplateResponse>;
export interface UpdateMessageTemplateMetadataRequest {
  knowledgeBaseId: string;
  messageTemplateId: string;
  name?: string;
  description?: string;
  groupingConfiguration?: GroupingConfiguration;
}
const UpdateMessageTemplateMetadataRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
    messageTemplateId: S.String.pipe(T.HttpLabel("messageTemplateId")),
    name: S.optional(S.String),
    description: S.optional(S.String),
    groupingConfiguration: S.optional(GroupingConfiguration),
  }).pipe(
    T.all(
      T.Http({
        method: "POST",
        uri: "/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/metadata",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdateMessageTemplateMetadataRequest",
}) as any as S.Schema<UpdateMessageTemplateMetadataRequest>;
export interface UpdateMessageTemplateMetadataResponse {
  messageTemplate?: MessageTemplateData;
}
const UpdateMessageTemplateMetadataResponse =
  CreateMessageTemplateResponse as any as S.Schema<UpdateMessageTemplateMetadataResponse>;
export interface UpdateQuickResponseRequest {
  knowledgeBaseId: string;
  quickResponseId: string;
  name?: string;
  content?: QuickResponseDataProvider;
  contentType?: string;
  groupingConfiguration?: GroupingConfiguration;
  removeGroupingConfiguration?: boolean;
  description?: string;
  removeDescription?: boolean;
  shortcutKey?: string;
  removeShortcutKey?: boolean;
  isActive?: boolean;
  channels?: (string | redacted.Redacted<string>)[];
  language?: string;
}
const UpdateQuickResponseRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    knowledgeBaseId: S.String.pipe(T.HttpLabel("knowledgeBaseId")),
    quickResponseId: S.String.pipe(T.HttpLabel("quickResponseId")),
    name: S.optional(S.String),
    content: S.optional(QuickResponseDataProvider),
    contentType: S.optional(S.String),
    groupingConfiguration: S.optional(GroupingConfiguration),
    removeGroupingConfiguration: S.optional(S.Boolean),
    description: S.optional(S.String),
    removeDescription: S.optional(S.Boolean),
    shortcutKey: S.optional(S.String),
    removeShortcutKey: S.optional(S.Boolean),
    isActive: S.optional(S.Boolean),
    channels: S.optional(Channels),
    language: S.optional(S.String),
  }).pipe(
    T.all(
      T.Http({
        method: "POST",
        uri: "/knowledgeBases/{knowledgeBaseId}/quickResponses/{quickResponseId}",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdateQuickResponseRequest",
}) as any as S.Schema<UpdateQuickResponseRequest>;
export interface UpdateQuickResponseResponse {
  quickResponse?: QuickResponseData;
}
const UpdateQuickResponseResponse =
  CreateQuickResponseResponse as any as S.Schema<UpdateQuickResponseResponse>;
export interface UpdateSessionRequest {
  assistantId: string;
  sessionId: string;
  description?: string;
  tagFilter?: TagFilter;
  aiAgentConfiguration?: { [key: string]: AIAgentConfigurationData | undefined };
  orchestratorConfigurationList?: OrchestratorConfigurationEntry[];
  removeOrchestratorConfigurationList?: boolean;
}
const UpdateSessionRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    sessionId: S.String.pipe(T.HttpLabel("sessionId")),
    description: S.optional(S.String),
    tagFilter: S.optional(TagFilter),
    aiAgentConfiguration: S.optional(AIAgentConfigurationMap),
    orchestratorConfigurationList: S.optional(OrchestratorConfigurationList),
    removeOrchestratorConfigurationList: S.optional(S.Boolean),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/assistants/{assistantId}/sessions/{sessionId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "UpdateSessionRequest" }) as any as S.Schema<UpdateSessionRequest>;
export interface UpdateSessionResponse {
  session?: SessionData;
}
const UpdateSessionResponse = CreateSessionResponse as any as S.Schema<UpdateSessionResponse>;
export type SessionDataNamespace = string;
export interface UpdateSessionDataRequest {
  assistantId: string;
  sessionId: string;
  namespace?: string;
  data: RuntimeSessionData[];
}
const UpdateSessionDataRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assistantId: S.String.pipe(T.HttpLabel("assistantId")),
    sessionId: S.String.pipe(T.HttpLabel("sessionId")),
    namespace: S.optional(S.String),
    data: RuntimeSessionDataList,
  }).pipe(
    T.all(
      T.Http({ method: "PATCH", uri: "/assistants/{assistantId}/sessions/{sessionId}/data" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "UpdateSessionDataRequest" }) as any as S.Schema<UpdateSessionDataRequest>;
export interface UpdateSessionDataResponse {
  sessionArn: string;
  sessionId: string;
  namespace: string;
  data: RuntimeSessionData[];
}
const UpdateSessionDataResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    sessionArn: S.String,
    sessionId: S.String,
    namespace: S.String,
    data: RuntimeSessionDataList,
  }),
).annotate({
  identifier: "UpdateSessionDataResponse",
}) as any as S.Schema<UpdateSessionDataResponse>;
export type ActivateMessageTemplateError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Activates a specific version of the Amazon Q in Connect message template. After the version is activated, the previous active version will be deactivated automatically. You can use the `$ACTIVE_VERSION` qualifier later to reference the version that is in active status.
 */
export const activateMessageTemplate: API.OperationMethod<
  ActivateMessageTemplateRequest,
  ActivateMessageTemplateResponse,
  ActivateMessageTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ActivateMessageTemplateRequest,
  output: ActivateMessageTemplateResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ActivateMessageTemplate",
}));

export type CreateAIAgentError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Amazon Q in Connect AI Agent.
 */
export const createAIAgent: API.OperationMethod<
  CreateAIAgentRequest,
  CreateAIAgentResponse,
  CreateAIAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAIAgentRequest,
  output: CreateAIAgentResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAIAgent",
}));

export type CreateAIAgentVersionError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Creates and Amazon Q in Connect AI Agent version.
 */
export const createAIAgentVersion: API.OperationMethod<
  CreateAIAgentVersionRequest,
  CreateAIAgentVersionResponse,
  CreateAIAgentVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAIAgentVersionRequest,
  output: CreateAIAgentVersionResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAIAgentVersion",
}));

export type CreateAIGuardrailError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Amazon Q in Connect AI Guardrail.
 */
export const createAIGuardrail: API.OperationMethod<
  CreateAIGuardrailRequest,
  CreateAIGuardrailResponse,
  CreateAIGuardrailError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAIGuardrailRequest,
  output: CreateAIGuardrailResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAIGuardrail",
}));

export type CreateAIGuardrailVersionError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Amazon Q in Connect AI Guardrail version.
 */
export const createAIGuardrailVersion: API.OperationMethod<
  CreateAIGuardrailVersionRequest,
  CreateAIGuardrailVersionResponse,
  CreateAIGuardrailVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAIGuardrailVersionRequest,
  output: CreateAIGuardrailVersionResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAIGuardrailVersion",
}));

export type CreateAIPromptError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Amazon Q in Connect AI Prompt.
 */
export const createAIPrompt: API.OperationMethod<
  CreateAIPromptRequest,
  CreateAIPromptResponse,
  CreateAIPromptError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAIPromptRequest,
  output: CreateAIPromptResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAIPrompt",
}));

export type CreateAIPromptVersionError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Amazon Q in Connect AI Prompt version.
 */
export const createAIPromptVersion: API.OperationMethod<
  CreateAIPromptVersionRequest,
  CreateAIPromptVersionResponse,
  CreateAIPromptVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAIPromptVersionRequest,
  output: CreateAIPromptVersionResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAIPromptVersion",
}));

export type CreateAssistantError =
  | AccessDeniedException
  | ConflictException
  | ServiceQuotaExceededException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Amazon Q in Connect assistant.
 */
export const createAssistant: API.OperationMethod<
  CreateAssistantRequest,
  CreateAssistantResponse,
  CreateAssistantError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAssistantRequest,
  output: CreateAssistantResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ServiceQuotaExceededException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAssistant",
}));

export type CreateAssistantAssociationError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates an association between an Amazon Q in Connect assistant and another resource. Currently, the only supported association is with a knowledge base. An assistant can have only a single association.
 */
export const createAssistantAssociation: API.OperationMethod<
  CreateAssistantAssociationRequest,
  CreateAssistantAssociationResponse,
  CreateAssistantAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAssistantAssociationRequest,
  output: CreateAssistantAssociationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAssistantAssociation",
}));

export type CreateContentError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Creates Amazon Q in Connect content. Before to calling this API, use StartContentUpload to upload an asset.
 */
export const createContent: API.OperationMethod<
  CreateContentRequest,
  CreateContentResponse,
  CreateContentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateContentRequest,
  output: CreateContentResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateContent",
}));

export type CreateContentAssociationError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Creates an association between a content resource in a knowledge base and step-by-step guides. Step-by-step guides offer instructions to agents for resolving common customer issues. You create a content association to integrate Amazon Q in Connect and step-by-step guides.
 *
 * After you integrate Amazon Q and step-by-step guides, when Amazon Q provides a recommendation to an agent based on the intent that it's detected, it also provides them with the option to start the step-by-step guide that you have associated with the content.
 *
 * Note the following limitations:
 *
 * - You can create only one content association for each content resource in a knowledge base.
 *
 * - You can associate a step-by-step guide with multiple content resources.
 *
 * For more information, see Integrate Amazon Q in Connect with step-by-step guides in the *Connect Customer Administrator Guide*.
 */
export const createContentAssociation: API.OperationMethod<
  CreateContentAssociationRequest,
  CreateContentAssociationResponse,
  CreateContentAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateContentAssociationRequest,
  output: CreateContentAssociationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateContentAssociation",
}));

export type CreateKnowledgeBaseError =
  | AccessDeniedException
  | ConflictException
  | ServiceQuotaExceededException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Creates a knowledge base.
 *
 * When using this API, you cannot reuse Amazon AppIntegrations DataIntegrations with external knowledge bases such as Salesforce and ServiceNow. If you do, you'll get an `InvalidRequestException` error.
 *
 * For example, you're programmatically managing your external knowledge base, and you want to add or remove one of the fields that is being ingested from Salesforce. Do the following:
 *
 * - Call DeleteKnowledgeBase.
 *
 * - Call DeleteDataIntegration.
 *
 * - Call CreateDataIntegration to recreate the DataIntegration or a create different one.
 *
 * - Call CreateKnowledgeBase.
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
    ServiceQuotaExceededException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateKnowledgeBase",
}));

export type CreateMessageTemplateError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Amazon Q in Connect message template. The name of the message template has to be unique for each knowledge base. The channel subtype of the message template is immutable and cannot be modified after creation. After the message template is created, you can use the `$LATEST` qualifier to reference the created message template.
 */
export const createMessageTemplate: API.OperationMethod<
  CreateMessageTemplateRequest,
  CreateMessageTemplateResponse,
  CreateMessageTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateMessageTemplateRequest,
  output: CreateMessageTemplateResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMessageTemplate",
}));

export type CreateMessageTemplateAttachmentError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Uploads an attachment file to the specified Amazon Q in Connect message template. The name of the message template attachment has to be unique for each message template referenced by the `$LATEST` qualifier. The body of the attachment file should be encoded using base64 encoding. After the file is uploaded, you can use the pre-signed Amazon S3 URL returned in response to download the uploaded file.
 */
export const createMessageTemplateAttachment: API.OperationMethod<
  CreateMessageTemplateAttachmentRequest,
  CreateMessageTemplateAttachmentResponse,
  CreateMessageTemplateAttachmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateMessageTemplateAttachmentRequest,
  output: CreateMessageTemplateAttachmentResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMessageTemplateAttachment",
}));

export type CreateMessageTemplateVersionError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new Amazon Q in Connect message template version from the current content and configuration of a message template. Versions are immutable and monotonically increasing. Once a version is created, you can reference a specific version of the message template by passing in `<message-template-id>:<versionNumber>` as the message template identifier. An error is displayed if the supplied `messageTemplateContentSha256` is different from the `messageTemplateContentSha256` of the message template with `$LATEST` qualifier. If multiple `CreateMessageTemplateVersion` requests are made while the message template remains the same, only the first invocation creates a new version and the succeeding requests will return the same response as the first invocation.
 */
export const createMessageTemplateVersion: API.OperationMethod<
  CreateMessageTemplateVersionRequest,
  CreateMessageTemplateVersionResponse,
  CreateMessageTemplateVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateMessageTemplateVersionRequest,
  output: CreateMessageTemplateVersionResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMessageTemplateVersion",
}));

export type CreateQuickResponseError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Amazon Q in Connect quick response.
 */
export const createQuickResponse: API.OperationMethod<
  CreateQuickResponseRequest,
  CreateQuickResponseResponse,
  CreateQuickResponseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateQuickResponseRequest,
  output: CreateQuickResponseResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateQuickResponse",
}));

export type CreateSessionError =
  | AccessDeniedException
  | ConflictException
  | DependencyFailedException
  | ResourceNotFoundException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Creates a session. A session is a contextual container used for generating recommendations. Connect Customer creates a new Amazon Q in Connect session for each contact on which Amazon Q in Connect is enabled.
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
    DependencyFailedException,
    ResourceNotFoundException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSession",
}));

export type DeactivateMessageTemplateError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deactivates a specific version of the Amazon Q in Connect message template . After the version is deactivated, you can no longer use the `$ACTIVE_VERSION` qualifier to reference the version in active status.
 */
export const deactivateMessageTemplate: API.OperationMethod<
  DeactivateMessageTemplateRequest,
  DeactivateMessageTemplateResponse,
  DeactivateMessageTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeactivateMessageTemplateRequest,
  output: DeactivateMessageTemplateResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeactivateMessageTemplate",
}));

export type DeleteAIAgentError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an Amazon Q in Connect AI Agent.
 */
export const deleteAIAgent: API.OperationMethod<
  DeleteAIAgentRequest,
  DeleteAIAgentResponse,
  DeleteAIAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAIAgentRequest,
  output: DeleteAIAgentResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAIAgent",
}));

export type DeleteAIAgentVersionError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an Amazon Q in Connect AI Agent Version.
 */
export const deleteAIAgentVersion: API.OperationMethod<
  DeleteAIAgentVersionRequest,
  DeleteAIAgentVersionResponse,
  DeleteAIAgentVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAIAgentVersionRequest,
  output: DeleteAIAgentVersionResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAIAgentVersion",
}));

export type DeleteAIGuardrailError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an Amazon Q in Connect AI Guardrail.
 */
export const deleteAIGuardrail: API.OperationMethod<
  DeleteAIGuardrailRequest,
  DeleteAIGuardrailResponse,
  DeleteAIGuardrailError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAIGuardrailRequest,
  output: DeleteAIGuardrailResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAIGuardrail",
}));

export type DeleteAIGuardrailVersionError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Delete and Amazon Q in Connect AI Guardrail version.
 */
export const deleteAIGuardrailVersion: API.OperationMethod<
  DeleteAIGuardrailVersionRequest,
  DeleteAIGuardrailVersionResponse,
  DeleteAIGuardrailVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAIGuardrailVersionRequest,
  output: DeleteAIGuardrailVersionResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAIGuardrailVersion",
}));

export type DeleteAIPromptError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an Amazon Q in Connect AI Prompt.
 */
export const deleteAIPrompt: API.OperationMethod<
  DeleteAIPromptRequest,
  DeleteAIPromptResponse,
  DeleteAIPromptError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAIPromptRequest,
  output: DeleteAIPromptResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAIPrompt",
}));

export type DeleteAIPromptVersionError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Delete and Amazon Q in Connect AI Prompt version.
 */
export const deleteAIPromptVersion: API.OperationMethod<
  DeleteAIPromptVersionRequest,
  DeleteAIPromptVersionResponse,
  DeleteAIPromptVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAIPromptVersionRequest,
  output: DeleteAIPromptVersionResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAIPromptVersion",
}));

export type DeleteAssistantError =
  | AccessDeniedException
  | ResourceNotFoundException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an assistant.
 */
export const deleteAssistant: API.OperationMethod<
  DeleteAssistantRequest,
  DeleteAssistantResponse,
  DeleteAssistantError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAssistantRequest,
  output: DeleteAssistantResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAssistant",
}));

export type DeleteAssistantAssociationError =
  | AccessDeniedException
  | ResourceNotFoundException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an assistant association.
 */
export const deleteAssistantAssociation: API.OperationMethod<
  DeleteAssistantAssociationRequest,
  DeleteAssistantAssociationResponse,
  DeleteAssistantAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAssistantAssociationRequest,
  output: DeleteAssistantAssociationResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAssistantAssociation",
}));

export type DeleteContentError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the content.
 */
export const deleteContent: API.OperationMethod<
  DeleteContentRequest,
  DeleteContentResponse,
  DeleteContentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteContentRequest,
  output: DeleteContentResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteContent",
}));

export type DeleteContentAssociationError =
  | AccessDeniedException
  | ResourceNotFoundException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the content association.
 *
 * For more information about content associations--what they are and when they are used--see Integrate Amazon Q in Connect with step-by-step guides in the *Connect Customer Administrator Guide*.
 */
export const deleteContentAssociation: API.OperationMethod<
  DeleteContentAssociationRequest,
  DeleteContentAssociationResponse,
  DeleteContentAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteContentAssociationRequest,
  output: DeleteContentAssociationResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteContentAssociation",
}));

export type DeleteImportJobError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the quick response import job.
 */
export const deleteImportJob: API.OperationMethod<
  DeleteImportJobRequest,
  DeleteImportJobResponse,
  DeleteImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteImportJobRequest,
  output: DeleteImportJobResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteImportJob",
}));

export type DeleteKnowledgeBaseError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the knowledge base.
 *
 * When you use this API to delete an external knowledge base such as Salesforce or ServiceNow, you must also delete the Amazon AppIntegrations DataIntegration. This is because you can't reuse the DataIntegration after it's been associated with an external knowledge base. However, you can delete and recreate it. See DeleteDataIntegration and CreateDataIntegration in the *Amazon AppIntegrations API Reference*.
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
    ResourceNotFoundException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteKnowledgeBase",
}));

export type DeleteMessageTemplateError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an Amazon Q in Connect message template entirely or a specific version of the message template if version is supplied in the request. You can provide the message template identifier as `<message-template-id>:<versionNumber>` to delete a specific version of the message template. If it is not supplied, the message template and all available versions will be deleted.
 */
export const deleteMessageTemplate: API.OperationMethod<
  DeleteMessageTemplateRequest,
  DeleteMessageTemplateResponse,
  DeleteMessageTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteMessageTemplateRequest,
  output: DeleteMessageTemplateResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteMessageTemplate",
}));

export type DeleteMessageTemplateAttachmentError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the attachment file from the Amazon Q in Connect message template that is referenced by `$LATEST` qualifier. Attachments on available message template versions will remain unchanged.
 */
export const deleteMessageTemplateAttachment: API.OperationMethod<
  DeleteMessageTemplateAttachmentRequest,
  DeleteMessageTemplateAttachmentResponse,
  DeleteMessageTemplateAttachmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteMessageTemplateAttachmentRequest,
  output: DeleteMessageTemplateAttachmentResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteMessageTemplateAttachment",
}));

export type DeleteQuickResponseError =
  | AccessDeniedException
  | ResourceNotFoundException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a quick response.
 */
export const deleteQuickResponse: API.OperationMethod<
  DeleteQuickResponseRequest,
  DeleteQuickResponseResponse,
  DeleteQuickResponseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteQuickResponseRequest,
  output: DeleteQuickResponseResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteQuickResponse",
}));

export type GetAIAgentError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Gets an Amazon Q in Connect AI Agent.
 */
export const getAIAgent: API.OperationMethod<
  GetAIAgentRequest,
  GetAIAgentResponse,
  GetAIAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAIAgentRequest,
  output: GetAIAgentResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAIAgent",
}));

export type GetAIGuardrailError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Gets the Amazon Q in Connect AI Guardrail.
 */
export const getAIGuardrail: API.OperationMethod<
  GetAIGuardrailRequest,
  GetAIGuardrailResponse,
  GetAIGuardrailError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAIGuardrailRequest,
  output: GetAIGuardrailResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAIGuardrail",
}));

export type GetAIPromptError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Gets and Amazon Q in Connect AI Prompt.
 */
export const getAIPrompt: API.OperationMethod<
  GetAIPromptRequest,
  GetAIPromptResponse,
  GetAIPromptError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAIPromptRequest,
  output: GetAIPromptResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAIPrompt",
}));

export type GetAssistantError =
  | AccessDeniedException
  | ResourceNotFoundException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about an assistant.
 */
export const getAssistant: API.OperationMethod<
  GetAssistantRequest,
  GetAssistantResponse,
  GetAssistantError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAssistantRequest,
  output: GetAssistantResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAssistant",
}));

export type GetAssistantAssociationError =
  | AccessDeniedException
  | ResourceNotFoundException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about an assistant association.
 */
export const getAssistantAssociation: API.OperationMethod<
  GetAssistantAssociationRequest,
  GetAssistantAssociationResponse,
  GetAssistantAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAssistantAssociationRequest,
  output: GetAssistantAssociationResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAssistantAssociation",
}));

export type GetContentError =
  | AccessDeniedException
  | ResourceNotFoundException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves content, including a pre-signed URL to download the content.
 */
export const getContent: API.OperationMethod<
  GetContentRequest,
  GetContentResponse,
  GetContentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetContentRequest,
  output: GetContentResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetContent",
}));

export type GetContentAssociationError =
  | AccessDeniedException
  | ResourceNotFoundException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Returns the content association.
 *
 * For more information about content associations--what they are and when they are used--see Integrate Amazon Q in Connect with step-by-step guides in the *Connect Customer Administrator Guide*.
 */
export const getContentAssociation: API.OperationMethod<
  GetContentAssociationRequest,
  GetContentAssociationResponse,
  GetContentAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetContentAssociationRequest,
  output: GetContentAssociationResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetContentAssociation",
}));

export type GetContentSummaryError =
  | AccessDeniedException
  | ResourceNotFoundException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves summary information about the content.
 */
export const getContentSummary: API.OperationMethod<
  GetContentSummaryRequest,
  GetContentSummaryResponse,
  GetContentSummaryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetContentSummaryRequest,
  output: GetContentSummaryResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetContentSummary",
}));

export type GetImportJobError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the started import job.
 */
export const getImportJob: API.OperationMethod<
  GetImportJobRequest,
  GetImportJobResponse,
  GetImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetImportJobRequest,
  output: GetImportJobResponse,
  errors: [AccessDeniedException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetImportJob",
}));

export type GetKnowledgeBaseError =
  | AccessDeniedException
  | ResourceNotFoundException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about the knowledge base.
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
    ResourceNotFoundException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetKnowledgeBase",
}));

export type GetMessageTemplateError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the Amazon Q in Connect message template. The message template identifier can contain an optional qualifier, for example, `<message-template-id>:<qualifier>`, which is either an actual version number or an Amazon Q Connect managed qualifier `$ACTIVE_VERSION` | `$LATEST`. If it is not supplied, then `$LATEST` is assumed implicitly.
 */
export const getMessageTemplate: API.OperationMethod<
  GetMessageTemplateRequest,
  GetMessageTemplateResponse,
  GetMessageTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMessageTemplateRequest,
  output: GetMessageTemplateResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMessageTemplate",
}));

export type GetNextMessageError =
  | AccessDeniedException
  | ResourceNotFoundException
  | UnprocessableContentException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves next message on an Amazon Q in Connect session.
 */
export const getNextMessage: API.OperationMethod<
  GetNextMessageRequest,
  GetNextMessageResponse,
  GetNextMessageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetNextMessageRequest,
  output: GetNextMessageResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    UnprocessableContentException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetNextMessage",
}));

export type GetQuickResponseError =
  | AccessDeniedException
  | ResourceNotFoundException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the quick response.
 */
export const getQuickResponse: API.OperationMethod<
  GetQuickResponseRequest,
  GetQuickResponseResponse,
  GetQuickResponseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetQuickResponseRequest,
  output: GetQuickResponseResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetQuickResponse",
}));

export type GetRecommendationsError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * This API will be discontinued starting June 1, 2024. To receive generative responses after March 1, 2024, you will need to create a new Assistant in the Connect Customer console and integrate the Amazon Q in Connect JavaScript library (amazon-q-connectjs) into your applications.
 *
 * Retrieves recommendations for the specified session. To avoid retrieving the same recommendations in subsequent calls, use NotifyRecommendationsReceived. This API supports long-polling behavior with the `waitTimeSeconds` parameter. Short poll is the default behavior and only returns recommendations already available. To perform a manual query against an assistant, use QueryAssistant.
 */
export const getRecommendations: API.OperationMethod<
  GetRecommendationsRequest,
  GetRecommendationsResponse,
  GetRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetRecommendationsRequest,
  output: GetRecommendationsResponse,
  errors: [AccessDeniedException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRecommendations",
}));

export type GetSessionError =
  | AccessDeniedException
  | ResourceNotFoundException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information for a specified session.
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
    ResourceNotFoundException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSession",
}));

export type ListAIAgentsError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Lists AI Agents.
 */
export const listAIAgents: API.PaginatedOperationMethod<
  ListAIAgentsRequest,
  ListAIAgentsResponse,
  ListAIAgentsError,
  Credentials | HttpClient.HttpClient,
  AIAgentSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAIAgentsRequest,
  output: ListAIAgentsResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAIAgents",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "aiAgentSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAIAgentVersionsError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * List AI Agent versions.
 */
export const listAIAgentVersions: API.PaginatedOperationMethod<
  ListAIAgentVersionsRequest,
  ListAIAgentVersionsResponse,
  ListAIAgentVersionsError,
  Credentials | HttpClient.HttpClient,
  AIAgentVersionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAIAgentVersionsRequest,
  output: ListAIAgentVersionsResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAIAgentVersions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "aiAgentVersionSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAIGuardrailsError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Lists the AI Guardrails available on the Amazon Q in Connect assistant.
 */
export const listAIGuardrails: API.PaginatedOperationMethod<
  ListAIGuardrailsRequest,
  ListAIGuardrailsResponse,
  ListAIGuardrailsError,
  Credentials | HttpClient.HttpClient,
  AIGuardrailSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAIGuardrailsRequest,
  output: ListAIGuardrailsResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAIGuardrails",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "aiGuardrailSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAIGuardrailVersionsError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Lists AI Guardrail versions.
 */
export const listAIGuardrailVersions: API.PaginatedOperationMethod<
  ListAIGuardrailVersionsRequest,
  ListAIGuardrailVersionsResponse,
  ListAIGuardrailVersionsError,
  Credentials | HttpClient.HttpClient,
  AIGuardrailVersionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAIGuardrailVersionsRequest,
  output: ListAIGuardrailVersionsResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAIGuardrailVersions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "aiGuardrailVersionSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAIPromptsError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Lists the AI Prompts available on the Amazon Q in Connect assistant.
 */
export const listAIPrompts: API.PaginatedOperationMethod<
  ListAIPromptsRequest,
  ListAIPromptsResponse,
  ListAIPromptsError,
  Credentials | HttpClient.HttpClient,
  AIPromptSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAIPromptsRequest,
  output: ListAIPromptsResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAIPrompts",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "aiPromptSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAIPromptVersionsError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Lists AI Prompt versions.
 */
export const listAIPromptVersions: API.PaginatedOperationMethod<
  ListAIPromptVersionsRequest,
  ListAIPromptVersionsResponse,
  ListAIPromptVersionsError,
  Credentials | HttpClient.HttpClient,
  AIPromptVersionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAIPromptVersionsRequest,
  output: ListAIPromptVersionsResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAIPromptVersions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "aiPromptVersionSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAssistantAssociationsError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists information about assistant associations.
 */
export const listAssistantAssociations: API.PaginatedOperationMethod<
  ListAssistantAssociationsRequest,
  ListAssistantAssociationsResponse,
  ListAssistantAssociationsError,
  Credentials | HttpClient.HttpClient,
  AssistantAssociationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAssistantAssociationsRequest,
  output: ListAssistantAssociationsResponse,
  errors: [AccessDeniedException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAssistantAssociations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "assistantAssociationSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAssistantsError =
  | AccessDeniedException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Lists information about assistants.
 */
export const listAssistants: API.PaginatedOperationMethod<
  ListAssistantsRequest,
  ListAssistantsResponse,
  ListAssistantsError,
  Credentials | HttpClient.HttpClient,
  AssistantSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAssistantsRequest,
  output: ListAssistantsResponse,
  errors: [AccessDeniedException, UnauthorizedException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAssistants",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "assistantSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListContentAssociationsError =
  | AccessDeniedException
  | ResourceNotFoundException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Lists the content associations.
 *
 * For more information about content associations--what they are and when they are used--see Integrate Amazon Q in Connect with step-by-step guides in the *Connect Customer Administrator Guide*.
 */
export const listContentAssociations: API.PaginatedOperationMethod<
  ListContentAssociationsRequest,
  ListContentAssociationsResponse,
  ListContentAssociationsError,
  Credentials | HttpClient.HttpClient,
  ContentAssociationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListContentAssociationsRequest,
  output: ListContentAssociationsResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListContentAssociations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "contentAssociationSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListContentsError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the content.
 */
export const listContents: API.PaginatedOperationMethod<
  ListContentsRequest,
  ListContentsResponse,
  ListContentsError,
  Credentials | HttpClient.HttpClient,
  ContentSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListContentsRequest,
  output: ListContentsResponse,
  errors: [AccessDeniedException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListContents",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "contentSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListImportJobsError = AccessDeniedException | ValidationException | CommonErrors;
/**
 * Lists information about import jobs.
 */
export const listImportJobs: API.PaginatedOperationMethod<
  ListImportJobsRequest,
  ListImportJobsResponse,
  ListImportJobsError,
  Credentials | HttpClient.HttpClient,
  ImportJobSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListImportJobsRequest,
  output: ListImportJobsResponse,
  errors: [AccessDeniedException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListImportJobs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "importJobSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListKnowledgeBasesError = AccessDeniedException | ValidationException | CommonErrors;
/**
 * Lists the knowledge bases.
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
  errors: [AccessDeniedException, ValidationException],
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

export type ListMessagesError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists messages on an Amazon Q in Connect session.
 */
export const listMessages: API.PaginatedOperationMethod<
  ListMessagesRequest,
  ListMessagesResponse,
  ListMessagesError,
  Credentials | HttpClient.HttpClient,
  MessageOutput
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListMessagesRequest,
  output: ListMessagesResponse,
  errors: [AccessDeniedException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMessages",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "messages",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListMessageTemplatesError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all the available Amazon Q in Connect message templates for the specified knowledge base.
 */
export const listMessageTemplates: API.PaginatedOperationMethod<
  ListMessageTemplatesRequest,
  ListMessageTemplatesResponse,
  ListMessageTemplatesError,
  Credentials | HttpClient.HttpClient,
  MessageTemplateSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListMessageTemplatesRequest,
  output: ListMessageTemplatesResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMessageTemplates",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "messageTemplateSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListMessageTemplateVersionsError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all the available versions for the specified Amazon Q in Connect message template.
 */
export const listMessageTemplateVersions: API.PaginatedOperationMethod<
  ListMessageTemplateVersionsRequest,
  ListMessageTemplateVersionsResponse,
  ListMessageTemplateVersionsError,
  Credentials | HttpClient.HttpClient,
  MessageTemplateVersionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListMessageTemplateVersionsRequest,
  output: ListMessageTemplateVersionsResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMessageTemplateVersions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "messageTemplateVersionSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListModelsError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Lists the models available to an Amazon Q in Connect assistant in the assistant's Amazon Web Services Region. The available models are determined by the region of the specified assistant.
 */
export const listModels: API.PaginatedOperationMethod<
  ListModelsRequest,
  ListModelsResponse,
  ListModelsError,
  Credentials | HttpClient.HttpClient,
  ModelSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListModelsRequest,
  output: ListModelsResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListModels",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "modelSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListQuickResponsesError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists information about quick response.
 */
export const listQuickResponses: API.PaginatedOperationMethod<
  ListQuickResponsesRequest,
  ListQuickResponsesResponse,
  ListQuickResponsesError,
  Credentials | HttpClient.HttpClient,
  QuickResponseSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListQuickResponsesRequest,
  output: ListQuickResponsesResponse,
  errors: [AccessDeniedException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListQuickResponses",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "quickResponseSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSpansError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves AI agent execution traces for a session, providing granular visibility into agent orchestration flows, LLM interactions, and tool invocations.
 */
export const listSpans: API.PaginatedOperationMethod<
  ListSpansRequest,
  ListSpansResponse,
  ListSpansError,
  Credentials | HttpClient.HttpClient,
  Span
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSpansRequest,
  output: ListSpansResponse,
  errors: [AccessDeniedException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSpans",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "spans",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError = ResourceNotFoundException | CommonErrors;
/**
 * Lists the tags for the specified resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type NotifyRecommendationsReceivedError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Removes the specified recommendations from the specified assistant's queue of newly available recommendations. You can use this API in conjunction with GetRecommendations and a `waitTimeSeconds` input for long-polling behavior and avoiding duplicate recommendations.
 */
export const notifyRecommendationsReceived: API.OperationMethod<
  NotifyRecommendationsReceivedRequest,
  NotifyRecommendationsReceivedResponse,
  NotifyRecommendationsReceivedError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: NotifyRecommendationsReceivedRequest,
  output: NotifyRecommendationsReceivedResponse,
  errors: [AccessDeniedException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "NotifyRecommendationsReceived",
}));

export type PutFeedbackError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Provides feedback against the specified assistant for the specified target. This API only supports generative targets.
 */
export const putFeedback: API.OperationMethod<
  PutFeedbackRequest,
  PutFeedbackResponse,
  PutFeedbackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutFeedbackRequest,
  output: PutFeedbackResponse,
  errors: [AccessDeniedException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutFeedback",
}));

export type QueryAssistantError =
  | AccessDeniedException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * This API will be discontinued starting June 1, 2024. To receive generative responses after March 1, 2024, you will need to create a new Assistant in the Connect Customer console and integrate the Amazon Q in Connect JavaScript library (amazon-q-connectjs) into your applications.
 *
 * Performs a manual search against the specified assistant. To retrieve recommendations for an assistant, use GetRecommendations.
 */
export const queryAssistant: API.PaginatedOperationMethod<
  QueryAssistantRequest,
  QueryAssistantResponse,
  QueryAssistantError,
  Credentials | HttpClient.HttpClient,
  ResultData
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: QueryAssistantRequest,
  output: QueryAssistantResponse,
  errors: [
    AccessDeniedException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "QueryAssistant",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "results",
    pageSize: "maxResults",
  } as const,
})) as any;

export type RemoveAssistantAIAgentError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes the AI Agent that is set for use by default on an Amazon Q in Connect Assistant.
 */
export const removeAssistantAIAgent: API.OperationMethod<
  RemoveAssistantAIAgentRequest,
  RemoveAssistantAIAgentResponse,
  RemoveAssistantAIAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RemoveAssistantAIAgentRequest,
  output: RemoveAssistantAIAgentResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveAssistantAIAgent",
}));

export type RemoveKnowledgeBaseTemplateUriError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Removes a URI template from a knowledge base.
 */
export const removeKnowledgeBaseTemplateUri: API.OperationMethod<
  RemoveKnowledgeBaseTemplateUriRequest,
  RemoveKnowledgeBaseTemplateUriResponse,
  RemoveKnowledgeBaseTemplateUriError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RemoveKnowledgeBaseTemplateUriRequest,
  output: RemoveKnowledgeBaseTemplateUriResponse,
  errors: [AccessDeniedException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveKnowledgeBaseTemplateUri",
}));

export type RenderMessageTemplateError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Renders the Amazon Q in Connect message template based on the attribute values provided and generates the message content. For any variable present in the message template, if the attribute value is neither provided in the attribute request parameter nor the default attribute of the message template, the rendered message content will keep the variable placeholder as it is and return the attribute keys that are missing.
 */
export const renderMessageTemplate: API.OperationMethod<
  RenderMessageTemplateRequest,
  RenderMessageTemplateResponse,
  RenderMessageTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RenderMessageTemplateRequest,
  output: RenderMessageTemplateResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RenderMessageTemplate",
}));

export type RetrieveError =
  | AccessDeniedException
  | ConflictException
  | DependencyFailedException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves content from knowledge sources based on a query.
 */
export const retrieve: API.OperationMethod<
  RetrieveRequest,
  RetrieveResponse,
  RetrieveError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RetrieveRequest,
  output: RetrieveResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    DependencyFailedException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "Retrieve",
}));

export type SearchContentError =
  | AccessDeniedException
  | ResourceNotFoundException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Searches for content in a specified knowledge base. Can be used to get a specific content resource by its name.
 */
export const searchContent: API.PaginatedOperationMethod<
  SearchContentRequest,
  SearchContentResponse,
  SearchContentError,
  Credentials | HttpClient.HttpClient,
  ContentSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: SearchContentRequest,
  output: SearchContentResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchContent",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "contentSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type SearchMessageTemplatesError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Searches for Amazon Q in Connect message templates in the specified knowledge base.
 */
export const searchMessageTemplates: API.PaginatedOperationMethod<
  SearchMessageTemplatesRequest,
  SearchMessageTemplatesResponse,
  SearchMessageTemplatesError,
  Credentials | HttpClient.HttpClient,
  MessageTemplateSearchResultData
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: SearchMessageTemplatesRequest,
  output: SearchMessageTemplatesResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchMessageTemplates",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "results",
    pageSize: "maxResults",
  } as const,
})) as any;

export type SearchQuickResponsesError =
  | AccessDeniedException
  | RequestTimeoutException
  | ResourceNotFoundException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Searches existing Amazon Q in Connect quick responses in an Amazon Q in Connect knowledge base.
 */
export const searchQuickResponses: API.PaginatedOperationMethod<
  SearchQuickResponsesRequest,
  SearchQuickResponsesResponse,
  SearchQuickResponsesError,
  Credentials | HttpClient.HttpClient,
  QuickResponseSearchResultData
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: SearchQuickResponsesRequest,
  output: SearchQuickResponsesResponse,
  errors: [
    AccessDeniedException,
    RequestTimeoutException,
    ResourceNotFoundException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchQuickResponses",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "results",
    pageSize: "maxResults",
  } as const,
})) as any;

export type SearchSessionsError =
  | AccessDeniedException
  | ResourceNotFoundException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Searches for sessions.
 */
export const searchSessions: API.PaginatedOperationMethod<
  SearchSessionsRequest,
  SearchSessionsResponse,
  SearchSessionsError,
  Credentials | HttpClient.HttpClient,
  SessionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: SearchSessionsRequest,
  output: SearchSessionsResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchSessions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "sessionSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type SendMessageError =
  | AccessDeniedException
  | ConflictException
  | DependencyFailedException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Submits a message to the Amazon Q in Connect session.
 */
export const sendMessage: API.OperationMethod<
  SendMessageRequest,
  SendMessageResponse,
  SendMessageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SendMessageRequest,
  output: SendMessageResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    DependencyFailedException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SendMessage",
}));

export type StartContentUploadError =
  | AccessDeniedException
  | ResourceNotFoundException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Get a URL to upload content to a knowledge base. To upload content, first make a PUT request to the returned URL with your file, making sure to include the required headers. Then use CreateContent to finalize the content creation process or UpdateContent to modify an existing resource. You can only upload content to a knowledge base of type CUSTOM.
 */
export const startContentUpload: API.OperationMethod<
  StartContentUploadRequest,
  StartContentUploadResponse,
  StartContentUploadError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartContentUploadRequest,
  output: StartContentUploadResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartContentUpload",
}));

export type StartImportJobError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Start an asynchronous job to import Amazon Q in Connect resources from an uploaded source file. Before calling this API, use StartContentUpload to upload an asset that contains the resource data.
 *
 * - For importing Amazon Q in Connect quick responses, you need to upload a csv file including the quick responses. For information about how to format the csv file for importing quick responses, see Import quick responses.
 */
export const startImportJob: API.OperationMethod<
  StartImportJobRequest,
  StartImportJobResponse,
  StartImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartImportJobRequest,
  output: StartImportJobResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartImportJob",
}));

export type TagResourceError = ResourceNotFoundException | TooManyTagsException | CommonErrors;
/**
 * Adds the specified tags to the specified resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceRequest,
  output: TagResourceResponse,
  errors: [ResourceNotFoundException, TooManyTagsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError = ResourceNotFoundException | CommonErrors;
/**
 * Removes the specified tags from the specified resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResponse,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAIAgentError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Updates an AI Agent.
 */
export const updateAIAgent: API.OperationMethod<
  UpdateAIAgentRequest,
  UpdateAIAgentResponse,
  UpdateAIAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAIAgentRequest,
  output: UpdateAIAgentResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAIAgent",
}));

export type UpdateAIGuardrailError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Updates an AI Guardrail.
 */
export const updateAIGuardrail: API.OperationMethod<
  UpdateAIGuardrailRequest,
  UpdateAIGuardrailResponse,
  UpdateAIGuardrailError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAIGuardrailRequest,
  output: UpdateAIGuardrailResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAIGuardrail",
}));

export type UpdateAIPromptError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Updates an AI Prompt.
 */
export const updateAIPrompt: API.OperationMethod<
  UpdateAIPromptRequest,
  UpdateAIPromptResponse,
  UpdateAIPromptError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAIPromptRequest,
  output: UpdateAIPromptResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAIPrompt",
}));

export type UpdateAssistantAIAgentError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the AI Agent that is set for use by default on an Amazon Q in Connect Assistant.
 */
export const updateAssistantAIAgent: API.OperationMethod<
  UpdateAssistantAIAgentRequest,
  UpdateAssistantAIAgentResponse,
  UpdateAssistantAIAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAssistantAIAgentRequest,
  output: UpdateAssistantAIAgentResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAssistantAIAgent",
}));

export type UpdateContentError =
  | AccessDeniedException
  | PreconditionFailedException
  | ResourceNotFoundException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Updates information about the content.
 */
export const updateContent: API.OperationMethod<
  UpdateContentRequest,
  UpdateContentResponse,
  UpdateContentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateContentRequest,
  output: UpdateContentResponse,
  errors: [
    AccessDeniedException,
    PreconditionFailedException,
    ResourceNotFoundException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateContent",
}));

export type UpdateKnowledgeBaseTemplateUriError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates the template URI of a knowledge base. This is only supported for knowledge bases of type EXTERNAL. Include a single variable in `${variable}` format; this interpolated by Amazon Q in Connect using ingested content. For example, if you ingest a Salesforce article, it has an `Id` value, and you can set the template URI to `https://myInstanceName.lightning.force.com/lightning/r/Knowledge__kav/*${Id}*\/view`.
 */
export const updateKnowledgeBaseTemplateUri: API.OperationMethod<
  UpdateKnowledgeBaseTemplateUriRequest,
  UpdateKnowledgeBaseTemplateUriResponse,
  UpdateKnowledgeBaseTemplateUriError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateKnowledgeBaseTemplateUriRequest,
  output: UpdateKnowledgeBaseTemplateUriResponse,
  errors: [AccessDeniedException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateKnowledgeBaseTemplateUri",
}));

export type UpdateMessageTemplateError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the Amazon Q in Connect message template. Partial update is supported. If any field is not supplied, it will remain unchanged for the message template that is referenced by the `$LATEST` qualifier. Any modification will only apply to the message template that is referenced by the `$LATEST` qualifier. The fields for all available versions will remain unchanged.
 */
export const updateMessageTemplate: API.OperationMethod<
  UpdateMessageTemplateRequest,
  UpdateMessageTemplateResponse,
  UpdateMessageTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateMessageTemplateRequest,
  output: UpdateMessageTemplateResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateMessageTemplate",
}));

export type UpdateMessageTemplateMetadataError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the Amazon Q in Connect message template metadata. Note that any modification to the message template's name, description and grouping configuration will applied to the message template pointed by the `$LATEST` qualifier and all available versions. Partial update is supported. If any field is not supplied, it will remain unchanged for the message template.
 */
export const updateMessageTemplateMetadata: API.OperationMethod<
  UpdateMessageTemplateMetadataRequest,
  UpdateMessageTemplateMetadataResponse,
  UpdateMessageTemplateMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateMessageTemplateMetadataRequest,
  output: UpdateMessageTemplateMetadataResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateMessageTemplateMetadata",
}));

export type UpdateQuickResponseError =
  | AccessDeniedException
  | ConflictException
  | PreconditionFailedException
  | ResourceNotFoundException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing Amazon Q in Connect quick response.
 */
export const updateQuickResponse: API.OperationMethod<
  UpdateQuickResponseRequest,
  UpdateQuickResponseResponse,
  UpdateQuickResponseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateQuickResponseRequest,
  output: UpdateQuickResponseResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    PreconditionFailedException,
    ResourceNotFoundException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateQuickResponse",
}));

export type UpdateSessionError =
  | AccessDeniedException
  | ResourceNotFoundException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Updates a session. A session is a contextual container used for generating recommendations. Connect Customer updates the existing Amazon Q in Connect session for each contact on which Amazon Q in Connect is enabled.
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
    ResourceNotFoundException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSession",
}));

export type UpdateSessionDataError =
  | AccessDeniedException
  | ResourceNotFoundException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Updates the data stored on an Amazon Q in Connect Session.
 */
export const updateSessionData: API.OperationMethod<
  UpdateSessionDataRequest,
  UpdateSessionDataResponse,
  UpdateSessionDataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSessionDataRequest,
  output: UpdateSessionDataResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSessionData",
}));
