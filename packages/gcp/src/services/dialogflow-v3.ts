// ==========================================================================
// Dialogflow API (dialogflow v3)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "@distilled.cloud/core/schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "dialogflow",
  version: "v3",
  rootUrl: "https://dialogflow.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuerySearchContext {
  key?: string;
  value?: string;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuerySearchContext: Schema.Codec<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuerySearchContext> =
  /*@__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuerySearchContext",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuery {
  queryText?: string;
  searchContexts?: ReadonlyArray<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuerySearchContext>;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuery: Schema.Codec<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuery> =
  /*@__PURE__*/ Schema.Struct({
    queryText: Schema.optional(Schema.String),
    searchContexts: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuerySearchContext,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuery",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerAdditionalSuggestedQueryResult {
  answerRecord?: string;
  suggestedQuery?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuery;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerAdditionalSuggestedQueryResult: Schema.Codec<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerAdditionalSuggestedQueryResult> =
  /*@__PURE__*/ Schema.Struct({
    answerRecord: Schema.optional(Schema.String),
    suggestedQuery: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuery,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerAdditionalSuggestedQueryResult",
  });

export interface GoogleCloudDialogflowCxV3DataStoreConnectionSignalsAnswerPart {
  text?: string;
  supportingIndices?: ReadonlyArray<number>;
}

export const GoogleCloudDialogflowCxV3DataStoreConnectionSignalsAnswerPart: Schema.Codec<GoogleCloudDialogflowCxV3DataStoreConnectionSignalsAnswerPart> =
  /*@__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    supportingIndices: Schema.optional(Schema.Array(Schema.Number)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3DataStoreConnectionSignalsAnswerPart",
  });

export interface GoogleCloudDialogflowCxV3DataStoreConnectionSignalsSafetySignals {
  bannedPhraseMatch?:
    | "BANNED_PHRASE_MATCH_UNSPECIFIED"
    | "BANNED_PHRASE_MATCH_NONE"
    | "BANNED_PHRASE_MATCH_QUERY"
    | "BANNED_PHRASE_MATCH_RESPONSE"
    | (string & {});
  decision?:
    | "SAFETY_DECISION_UNSPECIFIED"
    | "ACCEPTED_BY_SAFETY_CHECK"
    | "REJECTED_BY_SAFETY_CHECK"
    | (string & {});
  matchedBannedPhrase?: string;
}

export const GoogleCloudDialogflowCxV3DataStoreConnectionSignalsSafetySignals: Schema.Codec<GoogleCloudDialogflowCxV3DataStoreConnectionSignalsSafetySignals> =
  /*@__PURE__*/ Schema.Struct({
    bannedPhraseMatch: Schema.optional(Schema.String),
    decision: Schema.optional(Schema.String),
    matchedBannedPhrase: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3DataStoreConnectionSignalsSafetySignals",
  });

export interface GoogleCloudDialogflowCxV3DataStoreConnectionSignalsGroundingSignals {
  decision?:
    | "GROUNDING_DECISION_UNSPECIFIED"
    | "ACCEPTED_BY_GROUNDING"
    | "REJECTED_BY_GROUNDING"
    | (string & {});
  score?:
    | "GROUNDING_SCORE_BUCKET_UNSPECIFIED"
    | "VERY_LOW"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "VERY_HIGH"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3DataStoreConnectionSignalsGroundingSignals: Schema.Codec<GoogleCloudDialogflowCxV3DataStoreConnectionSignalsGroundingSignals> =
  /*@__PURE__*/ Schema.Struct({
    decision: Schema.optional(Schema.String),
    score: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3DataStoreConnectionSignalsGroundingSignals",
  });

export interface GoogleCloudDialogflowCxV3DataStoreConnectionSignalsAnswerGenerationModelCallSignals {
  modelOutput?: string;
  renderedPrompt?: string;
  model?: string;
}

export const GoogleCloudDialogflowCxV3DataStoreConnectionSignalsAnswerGenerationModelCallSignals: Schema.Codec<GoogleCloudDialogflowCxV3DataStoreConnectionSignalsAnswerGenerationModelCallSignals> =
  /*@__PURE__*/ Schema.Struct({
    modelOutput: Schema.optional(Schema.String),
    renderedPrompt: Schema.optional(Schema.String),
    model: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3DataStoreConnectionSignalsAnswerGenerationModelCallSignals",
  });

export interface GoogleCloudDialogflowCxV3DataStoreConnectionSignalsSearchSnippet {
  documentTitle?: string;
  documentUri?: string;
  text?: string;
  metadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3DataStoreConnectionSignalsSearchSnippet: Schema.Codec<GoogleCloudDialogflowCxV3DataStoreConnectionSignalsSearchSnippet> =
  /*@__PURE__*/ Schema.Struct({
    documentTitle: Schema.optional(Schema.String),
    documentUri: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3DataStoreConnectionSignalsSearchSnippet",
  });

export interface GoogleCloudDialogflowCxV3DataStoreConnectionSignalsCitedSnippet {
  searchSnippet?: GoogleCloudDialogflowCxV3DataStoreConnectionSignalsSearchSnippet;
  snippetIndex?: number;
}

export const GoogleCloudDialogflowCxV3DataStoreConnectionSignalsCitedSnippet: Schema.Codec<GoogleCloudDialogflowCxV3DataStoreConnectionSignalsCitedSnippet> =
  /*@__PURE__*/ Schema.Struct({
    searchSnippet: Schema.optional(
      GoogleCloudDialogflowCxV3DataStoreConnectionSignalsSearchSnippet,
    ),
    snippetIndex: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3DataStoreConnectionSignalsCitedSnippet",
  });

export interface GoogleCloudDialogflowCxV3DataStoreConnectionSignalsRewriterModelCallSignals {
  model?: string;
  renderedPrompt?: string;
  modelOutput?: string;
}

export const GoogleCloudDialogflowCxV3DataStoreConnectionSignalsRewriterModelCallSignals: Schema.Codec<GoogleCloudDialogflowCxV3DataStoreConnectionSignalsRewriterModelCallSignals> =
  /*@__PURE__*/ Schema.Struct({
    model: Schema.optional(Schema.String),
    renderedPrompt: Schema.optional(Schema.String),
    modelOutput: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3DataStoreConnectionSignalsRewriterModelCallSignals",
  });

export interface GoogleCloudDialogflowCxV3DataStoreConnectionSignals {
  rewrittenQuery?: string;
  answerParts?: ReadonlyArray<GoogleCloudDialogflowCxV3DataStoreConnectionSignalsAnswerPart>;
  safetySignals?: GoogleCloudDialogflowCxV3DataStoreConnectionSignalsSafetySignals;
  groundingSignals?: GoogleCloudDialogflowCxV3DataStoreConnectionSignalsGroundingSignals;
  answerGenerationModelCallSignals?: GoogleCloudDialogflowCxV3DataStoreConnectionSignalsAnswerGenerationModelCallSignals;
  answer?: string;
  searchSnippets?: ReadonlyArray<GoogleCloudDialogflowCxV3DataStoreConnectionSignalsSearchSnippet>;
  citedSnippets?: ReadonlyArray<GoogleCloudDialogflowCxV3DataStoreConnectionSignalsCitedSnippet>;
  rewriterModelCallSignals?: GoogleCloudDialogflowCxV3DataStoreConnectionSignalsRewriterModelCallSignals;
}

export const GoogleCloudDialogflowCxV3DataStoreConnectionSignals: Schema.Codec<GoogleCloudDialogflowCxV3DataStoreConnectionSignals> =
  /*@__PURE__*/ Schema.Struct({
    rewrittenQuery: Schema.optional(Schema.String),
    answerParts: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowCxV3DataStoreConnectionSignalsAnswerPart,
      ),
    ),
    safetySignals: Schema.optional(
      GoogleCloudDialogflowCxV3DataStoreConnectionSignalsSafetySignals,
    ),
    groundingSignals: Schema.optional(
      GoogleCloudDialogflowCxV3DataStoreConnectionSignalsGroundingSignals,
    ),
    answerGenerationModelCallSignals: Schema.optional(
      GoogleCloudDialogflowCxV3DataStoreConnectionSignalsAnswerGenerationModelCallSignals,
    ),
    answer: Schema.optional(Schema.String),
    searchSnippets: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowCxV3DataStoreConnectionSignalsSearchSnippet,
      ),
    ),
    citedSnippets: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowCxV3DataStoreConnectionSignalsCitedSnippet,
      ),
    ),
    rewriterModelCallSignals: Schema.optional(
      GoogleCloudDialogflowCxV3DataStoreConnectionSignalsRewriterModelCallSignals,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3DataStoreConnectionSignals",
  });

export interface GoogleCloudDialogflowCxV3InlineDestination {
  content?: string;
}

export const GoogleCloudDialogflowCxV3InlineDestination: Schema.Codec<GoogleCloudDialogflowCxV3InlineDestination> =
  /*@__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3InlineDestination" });

export interface GoogleCloudDialogflowCxV3BoostSpecConditionBoostSpecBoostControlSpecControlPoint {
  attributeValue?: string;
  boostAmount?: number;
}

export const GoogleCloudDialogflowCxV3BoostSpecConditionBoostSpecBoostControlSpecControlPoint: Schema.Codec<GoogleCloudDialogflowCxV3BoostSpecConditionBoostSpecBoostControlSpecControlPoint> =
  /*@__PURE__*/ Schema.Struct({
    attributeValue: Schema.optional(Schema.String),
    boostAmount: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3BoostSpecConditionBoostSpecBoostControlSpecControlPoint",
  });

export interface GoogleCloudDialogflowCxV3BoostSpecConditionBoostSpecBoostControlSpec {
  controlPoints?: ReadonlyArray<GoogleCloudDialogflowCxV3BoostSpecConditionBoostSpecBoostControlSpecControlPoint>;
  fieldName?: string;
  attributeType?:
    | "ATTRIBUTE_TYPE_UNSPECIFIED"
    | "NUMERICAL"
    | "FRESHNESS"
    | (string & {});
  interpolationType?:
    | "INTERPOLATION_TYPE_UNSPECIFIED"
    | "LINEAR"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3BoostSpecConditionBoostSpecBoostControlSpec: Schema.Codec<GoogleCloudDialogflowCxV3BoostSpecConditionBoostSpecBoostControlSpec> =
  /*@__PURE__*/ Schema.Struct({
    controlPoints: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowCxV3BoostSpecConditionBoostSpecBoostControlSpecControlPoint,
      ),
    ),
    fieldName: Schema.optional(Schema.String),
    attributeType: Schema.optional(Schema.String),
    interpolationType: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3BoostSpecConditionBoostSpecBoostControlSpec",
  });

export interface GoogleCloudDialogflowCxV3BoostSpecConditionBoostSpec {
  condition?: string;
  boost?: number;
  boostControlSpec?: GoogleCloudDialogflowCxV3BoostSpecConditionBoostSpecBoostControlSpec;
}

export const GoogleCloudDialogflowCxV3BoostSpecConditionBoostSpec: Schema.Codec<GoogleCloudDialogflowCxV3BoostSpecConditionBoostSpec> =
  /*@__PURE__*/ Schema.Struct({
    condition: Schema.optional(Schema.String),
    boost: Schema.optional(Schema.Number),
    boostControlSpec: Schema.optional(
      GoogleCloudDialogflowCxV3BoostSpecConditionBoostSpecBoostControlSpec,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3BoostSpecConditionBoostSpec",
  });

export interface GoogleCloudDialogflowCxV3BoostSpec {
  conditionBoostSpecs?: ReadonlyArray<GoogleCloudDialogflowCxV3BoostSpecConditionBoostSpec>;
}

export const GoogleCloudDialogflowCxV3BoostSpec: Schema.Codec<GoogleCloudDialogflowCxV3BoostSpec> =
  /*@__PURE__*/ Schema.Struct({
    conditionBoostSpecs: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3BoostSpecConditionBoostSpec),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3BoostSpec" });

export interface GoogleCloudDialogflowV2beta1IntentParameter {
  name?: string;
  displayName?: string;
  value?: string;
  entityTypeDisplayName?: string;
  isList?: boolean;
  prompts?: ReadonlyArray<string>;
  defaultValue?: string;
  mandatory?: boolean;
}

export const GoogleCloudDialogflowV2beta1IntentParameter: Schema.Codec<GoogleCloudDialogflowV2beta1IntentParameter> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    entityTypeDisplayName: Schema.optional(Schema.String),
    isList: Schema.optional(Schema.Boolean),
    prompts: Schema.optional(Schema.Array(Schema.String)),
    defaultValue: Schema.optional(Schema.String),
    mandatory: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentParameter" });

export interface GoogleCloudDialogflowCxV3ToolAuthenticationServiceAgentAuthConfig {
  serviceAgentAuth?:
    | "SERVICE_AGENT_AUTH_UNSPECIFIED"
    | "ID_TOKEN"
    | "ACCESS_TOKEN"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3ToolAuthenticationServiceAgentAuthConfig: Schema.Codec<GoogleCloudDialogflowCxV3ToolAuthenticationServiceAgentAuthConfig> =
  /*@__PURE__*/ Schema.Struct({
    serviceAgentAuth: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3ToolAuthenticationServiceAgentAuthConfig",
  });

export interface GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall {
  phoneNumber?: string;
}

export const GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall: Schema.Codec<GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall> =
  /*@__PURE__*/ Schema.Struct({
    phoneNumber: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall",
  });

export interface GoogleCloudDialogflowCxV3ResponseMessagePlayAudio {
  audioUri?: string;
  allowPlaybackInterruption?: boolean;
}

export const GoogleCloudDialogflowCxV3ResponseMessagePlayAudio: Schema.Codec<GoogleCloudDialogflowCxV3ResponseMessagePlayAudio> =
  /*@__PURE__*/ Schema.Struct({
    audioUri: Schema.optional(Schema.String),
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessagePlayAudio",
  });

export interface GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff {
  metadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff: Schema.Codec<GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff> =
  /*@__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff",
  });

export interface GoogleCloudDialogflowCxV3ResponseMessageText {
  text?: ReadonlyArray<string>;
  allowPlaybackInterruption?: boolean;
}

export const GoogleCloudDialogflowCxV3ResponseMessageText: Schema.Codec<GoogleCloudDialogflowCxV3ResponseMessageText> =
  /*@__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.Array(Schema.String)),
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ResponseMessageText" });

export interface GoogleCloudDialogflowCxV3ResponseMessageEndInteraction {}

export const GoogleCloudDialogflowCxV3ResponseMessageEndInteraction: Schema.Codec<GoogleCloudDialogflowCxV3ResponseMessageEndInteraction> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessageEndInteraction",
  });

export interface GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText {
  text?: string;
  ssml?: string;
  allowPlaybackInterruption?: boolean;
}

export const GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText: Schema.Codec<GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText> =
  /*@__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    ssml: Schema.optional(Schema.String),
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText",
  });

export interface GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess {
  metadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess: Schema.Codec<GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess> =
  /*@__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess",
  });

export interface GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard {}

export const GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard: Schema.Codec<GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard",
  });

export interface GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment {
  audio?: string;
  uri?: string;
  allowPlaybackInterruption?: boolean;
}

export const GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment: Schema.Codec<GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment> =
  /*@__PURE__*/ Schema.Struct({
    audio: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment",
  });

export interface GoogleCloudDialogflowCxV3ResponseMessageMixedAudio {
  segments?: ReadonlyArray<GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment>;
}

export const GoogleCloudDialogflowCxV3ResponseMessageMixedAudio: Schema.Codec<GoogleCloudDialogflowCxV3ResponseMessageMixedAudio> =
  /*@__PURE__*/ Schema.Struct({
    segments: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessageMixedAudio",
  });

export interface GoogleCloudDialogflowCxV3ToolCall {
  action?: string;
  tool?: string;
  inputParameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3ToolCall: Schema.Codec<GoogleCloudDialogflowCxV3ToolCall> =
  /*@__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    tool: Schema.optional(Schema.String),
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ToolCall" });

export interface GoogleCloudDialogflowCxV3ResponseMessage {
  telephonyTransferCall?: GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall;
  playAudio?: GoogleCloudDialogflowCxV3ResponseMessagePlayAudio;
  payload?: Record<string, unknown>;
  liveAgentHandoff?: GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff;
  channel?: string;
  text?: GoogleCloudDialogflowCxV3ResponseMessageText;
  endInteraction?: GoogleCloudDialogflowCxV3ResponseMessageEndInteraction;
  outputAudioText?: GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText;
  conversationSuccess?: GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess;
  knowledgeInfoCard?: GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard;
  mixedAudio?: GoogleCloudDialogflowCxV3ResponseMessageMixedAudio;
  toolCall?: GoogleCloudDialogflowCxV3ToolCall;
  responseType?:
    | "RESPONSE_TYPE_UNSPECIFIED"
    | "ENTRY_PROMPT"
    | "PARAMETER_PROMPT"
    | "HANDLER_PROMPT"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3ResponseMessage: Schema.Codec<GoogleCloudDialogflowCxV3ResponseMessage> =
  /*@__PURE__*/ Schema.Struct({
    telephonyTransferCall: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall,
    ),
    playAudio: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessagePlayAudio,
    ),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    liveAgentHandoff: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff,
    ),
    channel: Schema.optional(Schema.String),
    text: Schema.optional(GoogleCloudDialogflowCxV3ResponseMessageText),
    endInteraction: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageEndInteraction,
    ),
    outputAudioText: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText,
    ),
    conversationSuccess: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess,
    ),
    knowledgeInfoCard: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard,
    ),
    mixedAudio: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageMixedAudio,
    ),
    toolCall: Schema.optional(GoogleCloudDialogflowCxV3ToolCall),
    responseType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ResponseMessage" });

export interface GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase {
  condition?: string;
  caseContent?: ReadonlyArray<GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent>;
}

export const GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase: Schema.Codec<GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      condition: Schema.optional(Schema.String),
      caseContent: Schema.optional(
        Schema.Array(
          GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent,
        ),
      ),
    }),
  ).annotate({
    identifier: "GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase",
  }) as any as Schema.Codec<GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase>;

export interface GoogleCloudDialogflowCxV3FulfillmentConditionalCases {
  cases?: ReadonlyArray<GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase>;
}

export const GoogleCloudDialogflowCxV3FulfillmentConditionalCases: Schema.Codec<GoogleCloudDialogflowCxV3FulfillmentConditionalCases> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      cases: Schema.optional(
        Schema.Array(GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase),
      ),
    }),
  ).annotate({
    identifier: "GoogleCloudDialogflowCxV3FulfillmentConditionalCases",
  }) as any as Schema.Codec<GoogleCloudDialogflowCxV3FulfillmentConditionalCases>;

export interface GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent {
  message?: GoogleCloudDialogflowCxV3ResponseMessage;
  additionalCases?: GoogleCloudDialogflowCxV3FulfillmentConditionalCases;
}

export const GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent: Schema.Codec<GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      message: Schema.optional(GoogleCloudDialogflowCxV3ResponseMessage),
      additionalCases: Schema.optional(
        GoogleCloudDialogflowCxV3FulfillmentConditionalCases,
      ),
    }),
  ).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent",
  }) as any as Schema.Codec<GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent>;

export interface GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings {
  enableStackdriverLogging?: boolean;
  enableInteractionLogging?: boolean;
  enableConsentBasedRedaction?: boolean;
}

export const GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings: Schema.Codec<GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings> =
  /*@__PURE__*/ Schema.Struct({
    enableStackdriverLogging: Schema.optional(Schema.Boolean),
    enableInteractionLogging: Schema.optional(Schema.Boolean),
    enableConsentBasedRedaction: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings",
  });

export interface GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettings {
  audioExportPattern?: string;
  audioFormat?:
    | "AUDIO_FORMAT_UNSPECIFIED"
    | "MULAW"
    | "MP3"
    | "OGG"
    | (string & {});
  storeTtsAudio?: boolean;
  gcsBucket?: string;
  enableAudioRedaction?: boolean;
}

export const GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettings: Schema.Codec<GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettings> =
  /*@__PURE__*/ Schema.Struct({
    audioExportPattern: Schema.optional(Schema.String),
    audioFormat: Schema.optional(Schema.String),
    storeTtsAudio: Schema.optional(Schema.Boolean),
    gcsBucket: Schema.optional(Schema.String),
    enableAudioRedaction: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettings",
  });

export interface GoogleCloudDialogflowCxV3SecuritySettingsInsightsExportSettings {
  enableInsightsExport?: boolean;
}

export const GoogleCloudDialogflowCxV3SecuritySettingsInsightsExportSettings: Schema.Codec<GoogleCloudDialogflowCxV3SecuritySettingsInsightsExportSettings> =
  /*@__PURE__*/ Schema.Struct({
    enableInsightsExport: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3SecuritySettingsInsightsExportSettings",
  });

export interface GoogleCloudDialogflowCxV3SecuritySettings {
  retentionWindowDays?: number;
  deidentifyTemplate?: string;
  purgeDataTypes?: ReadonlyArray<
    "PURGE_DATA_TYPE_UNSPECIFIED" | "DIALOGFLOW_HISTORY" | (string & {})
  >;
  inspectTemplate?: string;
  audioExportSettings?: GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettings;
  retentionStrategy?:
    | "RETENTION_STRATEGY_UNSPECIFIED"
    | "REMOVE_AFTER_CONVERSATION"
    | (string & {});
  redactionScope?:
    | "REDACTION_SCOPE_UNSPECIFIED"
    | "REDACT_DISK_STORAGE"
    | (string & {});
  name?: string;
  insightsExportSettings?: GoogleCloudDialogflowCxV3SecuritySettingsInsightsExportSettings;
  displayName?: string;
  redactionStrategy?:
    | "REDACTION_STRATEGY_UNSPECIFIED"
    | "REDACT_WITH_SERVICE"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3SecuritySettings: Schema.Codec<GoogleCloudDialogflowCxV3SecuritySettings> =
  /*@__PURE__*/ Schema.Struct({
    retentionWindowDays: Schema.optional(Schema.Number),
    deidentifyTemplate: Schema.optional(Schema.String),
    purgeDataTypes: Schema.optional(Schema.Array(Schema.String)),
    inspectTemplate: Schema.optional(Schema.String),
    audioExportSettings: Schema.optional(
      GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettings,
    ),
    retentionStrategy: Schema.optional(Schema.String),
    redactionScope: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    insightsExportSettings: Schema.optional(
      GoogleCloudDialogflowCxV3SecuritySettingsInsightsExportSettings,
    ),
    displayName: Schema.optional(Schema.String),
    redactionStrategy: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3SecuritySettings" });

export interface GoogleCloudDialogflowCxV3ListSecuritySettingsResponse {
  securitySettings?: ReadonlyArray<GoogleCloudDialogflowCxV3SecuritySettings>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3ListSecuritySettingsResponse: Schema.Codec<GoogleCloudDialogflowCxV3ListSecuritySettingsResponse> =
  /*@__PURE__*/ Schema.Struct({
    securitySettings: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3SecuritySettings),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ListSecuritySettingsResponse",
  });

export interface GoogleCloudDialogflowV2DeleteConversationDatasetOperationMetadata {}

export const GoogleCloudDialogflowV2DeleteConversationDatasetOperationMetadata: Schema.Codec<GoogleCloudDialogflowV2DeleteConversationDatasetOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleCloudDialogflowV2DeleteConversationDatasetOperationMetadata",
  });

export interface GoogleCloudDialogflowV2beta1GcsDestination {
  uri?: string;
}

export const GoogleCloudDialogflowV2beta1GcsDestination: Schema.Codec<GoogleCloudDialogflowV2beta1GcsDestination> =
  /*@__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1GcsDestination" });

export interface GoogleCloudDialogflowCxV3ImportIntentsMetadata {}

export const GoogleCloudDialogflowCxV3ImportIntentsMetadata: Schema.Codec<GoogleCloudDialogflowCxV3ImportIntentsMetadata> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ImportIntentsMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1BargeInConfig {
  noBargeInDuration?: string;
  totalDuration?: string;
}

export const GoogleCloudDialogflowCxV3beta1BargeInConfig: Schema.Codec<GoogleCloudDialogflowCxV3beta1BargeInConfig> =
  /*@__PURE__*/ Schema.Struct({
    noBargeInDuration: Schema.optional(Schema.String),
    totalDuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1BargeInConfig" });

export interface GoogleCloudDialogflowCxV3beta1InputAudioConfig {
  sampleRateHertz?: number;
  phraseHints?: ReadonlyArray<string>;
  optOutConformerModelMigration?: boolean;
  bargeInConfig?: GoogleCloudDialogflowCxV3beta1BargeInConfig;
  model?: string;
  singleUtterance?: boolean;
  modelVariant?:
    | "SPEECH_MODEL_VARIANT_UNSPECIFIED"
    | "USE_BEST_AVAILABLE"
    | "USE_STANDARD"
    | "USE_ENHANCED"
    | (string & {});
  audioEncoding?:
    | "AUDIO_ENCODING_UNSPECIFIED"
    | "AUDIO_ENCODING_LINEAR_16"
    | "AUDIO_ENCODING_FLAC"
    | "AUDIO_ENCODING_MULAW"
    | "AUDIO_ENCODING_AMR"
    | "AUDIO_ENCODING_AMR_WB"
    | "AUDIO_ENCODING_OGG_OPUS"
    | "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"
    | "AUDIO_ENCODING_ALAW"
    | (string & {});
  enableWordInfo?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1InputAudioConfig: Schema.Codec<GoogleCloudDialogflowCxV3beta1InputAudioConfig> =
  /*@__PURE__*/ Schema.Struct({
    sampleRateHertz: Schema.optional(Schema.Number),
    phraseHints: Schema.optional(Schema.Array(Schema.String)),
    optOutConformerModelMigration: Schema.optional(Schema.Boolean),
    bargeInConfig: Schema.optional(GoogleCloudDialogflowCxV3beta1BargeInConfig),
    model: Schema.optional(Schema.String),
    singleUtterance: Schema.optional(Schema.Boolean),
    modelVariant: Schema.optional(Schema.String),
    audioEncoding: Schema.optional(Schema.String),
    enableWordInfo: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1InputAudioConfig" });

export interface GoogleCloudDialogflowCxV3beta1AudioInput {
  audio?: string;
  config?: GoogleCloudDialogflowCxV3beta1InputAudioConfig;
}

export const GoogleCloudDialogflowCxV3beta1AudioInput: Schema.Codec<GoogleCloudDialogflowCxV3beta1AudioInput> =
  /*@__PURE__*/ Schema.Struct({
    audio: Schema.optional(Schema.String),
    config: Schema.optional(GoogleCloudDialogflowCxV3beta1InputAudioConfig),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1AudioInput" });

export interface GoogleCloudDialogflowCxV3beta1DtmfInput {
  digits?: string;
  finishDigit?: string;
}

export const GoogleCloudDialogflowCxV3beta1DtmfInput: Schema.Codec<GoogleCloudDialogflowCxV3beta1DtmfInput> =
  /*@__PURE__*/ Schema.Struct({
    digits: Schema.optional(Schema.String),
    finishDigit: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1DtmfInput" });

export interface GoogleCloudDialogflowCxV3beta1TextInput {
  text?: string;
}

export const GoogleCloudDialogflowCxV3beta1TextInput: Schema.Codec<GoogleCloudDialogflowCxV3beta1TextInput> =
  /*@__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TextInput" });

export interface GoogleCloudDialogflowCxV3beta1ToolCallResultError {
  message?: string;
}

export const GoogleCloudDialogflowCxV3beta1ToolCallResultError: Schema.Codec<GoogleCloudDialogflowCxV3beta1ToolCallResultError> =
  /*@__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ToolCallResultError",
  });

export interface GoogleCloudDialogflowCxV3beta1ToolCallResult {
  action?: string;
  error?: GoogleCloudDialogflowCxV3beta1ToolCallResultError;
  tool?: string;
  outputParameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3beta1ToolCallResult: Schema.Codec<GoogleCloudDialogflowCxV3beta1ToolCallResult> =
  /*@__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    error: Schema.optional(GoogleCloudDialogflowCxV3beta1ToolCallResultError),
    tool: Schema.optional(Schema.String),
    outputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ToolCallResult" });

export interface GoogleCloudDialogflowCxV3beta1EventInput {
  event?: string;
}

export const GoogleCloudDialogflowCxV3beta1EventInput: Schema.Codec<GoogleCloudDialogflowCxV3beta1EventInput> =
  /*@__PURE__*/ Schema.Struct({
    event: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1EventInput" });

export interface GoogleCloudDialogflowCxV3beta1IntentInput {
  intent?: string;
}

export const GoogleCloudDialogflowCxV3beta1IntentInput: Schema.Codec<GoogleCloudDialogflowCxV3beta1IntentInput> =
  /*@__PURE__*/ Schema.Struct({
    intent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1IntentInput" });

export interface GoogleCloudDialogflowCxV3beta1QueryInput {
  languageCode?: string;
  audio?: GoogleCloudDialogflowCxV3beta1AudioInput;
  dtmf?: GoogleCloudDialogflowCxV3beta1DtmfInput;
  text?: GoogleCloudDialogflowCxV3beta1TextInput;
  toolCallResult?: GoogleCloudDialogflowCxV3beta1ToolCallResult;
  event?: GoogleCloudDialogflowCxV3beta1EventInput;
  intent?: GoogleCloudDialogflowCxV3beta1IntentInput;
}

export const GoogleCloudDialogflowCxV3beta1QueryInput: Schema.Codec<GoogleCloudDialogflowCxV3beta1QueryInput> =
  /*@__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    audio: Schema.optional(GoogleCloudDialogflowCxV3beta1AudioInput),
    dtmf: Schema.optional(GoogleCloudDialogflowCxV3beta1DtmfInput),
    text: Schema.optional(GoogleCloudDialogflowCxV3beta1TextInput),
    toolCallResult: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolCallResult,
    ),
    event: Schema.optional(GoogleCloudDialogflowCxV3beta1EventInput),
    intent: Schema.optional(GoogleCloudDialogflowCxV3beta1IntentInput),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1QueryInput" });

export interface GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput {
  input?: GoogleCloudDialogflowCxV3beta1QueryInput;
  enableSentimentAnalysis?: boolean;
  isWebhookEnabled?: boolean;
  injectedParameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput: Schema.Codec<GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput> =
  /*@__PURE__*/ Schema.Struct({
    input: Schema.optional(GoogleCloudDialogflowCxV3beta1QueryInput),
    enableSentimentAnalysis: Schema.optional(Schema.Boolean),
    isWebhookEnabled: Schema.optional(Schema.Boolean),
    injectedParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput",
  });

export interface GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart {
  text?: string;
  parameterId?: string;
}

export const GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart: Schema.Codec<GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart> =
  /*@__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    parameterId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart",
  });

export interface GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase {
  parts?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart>;
  id?: string;
  repeatCount?: number;
}

export const GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase: Schema.Codec<GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase> =
  /*@__PURE__*/ Schema.Struct({
    parts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart),
    ),
    id: Schema.optional(Schema.String),
    repeatCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase",
  });

export interface GoogleCloudDialogflowCxV3beta1IntentParameter {
  isList?: boolean;
  redact?: boolean;
  entityType?: string;
  id?: string;
}

export const GoogleCloudDialogflowCxV3beta1IntentParameter: Schema.Codec<GoogleCloudDialogflowCxV3beta1IntentParameter> =
  /*@__PURE__*/ Schema.Struct({
    isList: Schema.optional(Schema.Boolean),
    redact: Schema.optional(Schema.Boolean),
    entityType: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1IntentParameter" });

export interface GoogleCloudDialogflowCxV3beta1Intent {
  priority?: number;
  name?: string;
  displayName?: string;
  labels?: Record<string, string>;
  description?: string;
  trainingPhrases?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase>;
  parameters?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1IntentParameter>;
  isFallback?: boolean;
  dtmfPattern?: string;
}

export const GoogleCloudDialogflowCxV3beta1Intent: Schema.Codec<GoogleCloudDialogflowCxV3beta1Intent> =
  /*@__PURE__*/ Schema.Struct({
    priority: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    description: Schema.optional(Schema.String),
    trainingPhrases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase),
    ),
    parameters: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1IntentParameter),
    ),
    isFallback: Schema.optional(Schema.Boolean),
    dtmfPattern: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Intent" });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment {
  audio?: string;
  uri?: string;
  allowPlaybackInterruption?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment: Schema.Codec<GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment> =
  /*@__PURE__*/ Schema.Struct({
    audio: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment",
  });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio {
  segments?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment>;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio: Schema.Codec<GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio> =
  /*@__PURE__*/ Schema.Struct({
    segments: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio",
  });

export interface GoogleCloudDialogflowCxV3beta1ToolCall {
  inputParameters?: Record<string, unknown>;
  tool?: string;
  action?: string;
}

export const GoogleCloudDialogflowCxV3beta1ToolCall: Schema.Codec<GoogleCloudDialogflowCxV3beta1ToolCall> =
  /*@__PURE__*/ Schema.Struct({
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    tool: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ToolCall" });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction {}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction: Schema.Codec<GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction",
  });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageText {
  text?: ReadonlyArray<string>;
  allowPlaybackInterruption?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageText: Schema.Codec<GoogleCloudDialogflowCxV3beta1ResponseMessageText> =
  /*@__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.Array(Schema.String)),
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ResponseMessageText",
  });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess {
  metadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess: Schema.Codec<GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess> =
  /*@__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess",
  });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio {
  audioUri?: string;
  allowPlaybackInterruption?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio: Schema.Codec<GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio> =
  /*@__PURE__*/ Schema.Struct({
    audioUri: Schema.optional(Schema.String),
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio",
  });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff {
  metadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff: Schema.Codec<GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff> =
  /*@__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff",
  });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard {}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard: Schema.Codec<GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard",
  });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText {
  text?: string;
  ssml?: string;
  allowPlaybackInterruption?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText: Schema.Codec<GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText> =
  /*@__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    ssml: Schema.optional(Schema.String),
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText",
  });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall {
  phoneNumber?: string;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall: Schema.Codec<GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall> =
  /*@__PURE__*/ Schema.Struct({
    phoneNumber: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall",
  });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessage {
  mixedAudio?: GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio;
  toolCall?: GoogleCloudDialogflowCxV3beta1ToolCall;
  endInteraction?: GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction;
  text?: GoogleCloudDialogflowCxV3beta1ResponseMessageText;
  channel?: string;
  conversationSuccess?: GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess;
  playAudio?: GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio;
  liveAgentHandoff?: GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff;
  knowledgeInfoCard?: GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard;
  payload?: Record<string, unknown>;
  outputAudioText?: GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText;
  telephonyTransferCall?: GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessage: Schema.Codec<GoogleCloudDialogflowCxV3beta1ResponseMessage> =
  /*@__PURE__*/ Schema.Struct({
    mixedAudio: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio,
    ),
    toolCall: Schema.optional(GoogleCloudDialogflowCxV3beta1ToolCall),
    endInteraction: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction,
    ),
    text: Schema.optional(GoogleCloudDialogflowCxV3beta1ResponseMessageText),
    channel: Schema.optional(Schema.String),
    conversationSuccess: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess,
    ),
    playAudio: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio,
    ),
    liveAgentHandoff: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff,
    ),
    knowledgeInfoCard: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard,
    ),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    outputAudioText: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText,
    ),
    telephonyTransferCall: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ResponseMessage" });

export interface GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings {
  models?: Record<string, string>;
  noSpeechTimeout?: string;
  endpointerSensitivity?: number;
  useTimeoutBasedEndpointing?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings: Schema.Codec<GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings> =
  /*@__PURE__*/ Schema.Struct({
    models: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    noSpeechTimeout: Schema.optional(Schema.String),
    endpointerSensitivity: Schema.optional(Schema.Number),
    useTimeoutBasedEndpointing: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1GcsDestination {
  uri?: string;
}

export const GoogleCloudDialogflowCxV3beta1GcsDestination: Schema.Codec<GoogleCloudDialogflowCxV3beta1GcsDestination> =
  /*@__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1GcsDestination" });

export interface GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings {
  enabled?: boolean;
  endpointingTimeoutDuration?: string;
  finishDigit?: string;
  interdigitTimeoutDuration?: string;
  maxDigits?: number;
}

export const GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings: Schema.Codec<GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings> =
  /*@__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    endpointingTimeoutDuration: Schema.optional(Schema.String),
    finishDigit: Schema.optional(Schema.String),
    interdigitTimeoutDuration: Schema.optional(Schema.String),
    maxDigits: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings {
  enableStackdriverLogging?: boolean;
  enableInteractionLogging?: boolean;
  enableConsentBasedRedaction?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings: Schema.Codec<GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings> =
  /*@__PURE__*/ Schema.Struct({
    enableStackdriverLogging: Schema.optional(Schema.Boolean),
    enableInteractionLogging: Schema.optional(Schema.Boolean),
    enableConsentBasedRedaction: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1AdvancedSettings {
  speechSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings;
  audioExportGcsDestination?: GoogleCloudDialogflowCxV3beta1GcsDestination;
  dtmfSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings;
  loggingSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings;
}

export const GoogleCloudDialogflowCxV3beta1AdvancedSettings: Schema.Codec<GoogleCloudDialogflowCxV3beta1AdvancedSettings> =
  /*@__PURE__*/ Schema.Struct({
    speechSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings,
    ),
    audioExportGcsDestination: Schema.optional(
      GoogleCloudDialogflowCxV3beta1GcsDestination,
    ),
    dtmfSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings,
    ),
    loggingSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1AdvancedSettings" });

export interface GoogleCloudDialogflowCxV3beta1FulfillmentGeneratorSettings {
  inputParameters?: Record<string, string>;
  outputParameter?: string;
  generator?: string;
}

export const GoogleCloudDialogflowCxV3beta1FulfillmentGeneratorSettings: Schema.Codec<GoogleCloudDialogflowCxV3beta1FulfillmentGeneratorSettings> =
  /*@__PURE__*/ Schema.Struct({
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    outputParameter: Schema.optional(Schema.String),
    generator: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1FulfillmentGeneratorSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction {
  value?: unknown;
  parameter?: string;
}

export const GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction: Schema.Codec<GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction> =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Unknown),
    parameter: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction",
  });

export interface GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent {
  additionalCases?: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases;
  message?: GoogleCloudDialogflowCxV3beta1ResponseMessage;
}

export const GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent: Schema.Codec<GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      additionalCases: Schema.optional(
        GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases,
      ),
      message: Schema.optional(GoogleCloudDialogflowCxV3beta1ResponseMessage),
    }),
  ).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent",
  }) as any as Schema.Codec<GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent>;

export interface GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase {
  condition?: string;
  caseContent?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent>;
}

export const GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase: Schema.Codec<GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      condition: Schema.optional(Schema.String),
      caseContent: Schema.optional(
        Schema.Array(
          GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent,
        ),
      ),
    }),
  ).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase",
  }) as any as Schema.Codec<GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase>;

export interface GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases {
  cases?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase>;
}

export const GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases: Schema.Codec<GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      cases: Schema.optional(
        Schema.Array(
          GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase,
        ),
      ),
    }),
  ).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases",
  }) as any as Schema.Codec<GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases>;

export interface GoogleCloudDialogflowCxV3beta1Fulfillment {
  messages?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ResponseMessage>;
  advancedSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettings;
  generators?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1FulfillmentGeneratorSettings>;
  webhook?: string;
  setParameterActions?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction>;
  returnPartialResponses?: boolean;
  enableGenerativeFallback?: boolean;
  conditionalCases?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases>;
  tag?: string;
}

export const GoogleCloudDialogflowCxV3beta1Fulfillment: Schema.Codec<GoogleCloudDialogflowCxV3beta1Fulfillment> =
  /*@__PURE__*/ Schema.Struct({
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ResponseMessage),
    ),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettings,
    ),
    generators: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1FulfillmentGeneratorSettings),
    ),
    webhook: Schema.optional(Schema.String),
    setParameterActions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction),
    ),
    returnPartialResponses: Schema.optional(Schema.Boolean),
    enableGenerativeFallback: Schema.optional(Schema.Boolean),
    conditionalCases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases),
    ),
    tag: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Fulfillment" });

export interface GoogleCloudDialogflowCxV3beta1EventHandler {
  targetFlow?: string;
  targetPlaybook?: string;
  event?: string;
  targetPage?: string;
  name?: string;
  triggerFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
}

export const GoogleCloudDialogflowCxV3beta1EventHandler: Schema.Codec<GoogleCloudDialogflowCxV3beta1EventHandler> =
  /*@__PURE__*/ Schema.Struct({
    targetFlow: Schema.optional(Schema.String),
    targetPlaybook: Schema.optional(Schema.String),
    event: Schema.optional(Schema.String),
    targetPage: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    triggerFulfillment: Schema.optional(
      GoogleCloudDialogflowCxV3beta1Fulfillment,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1EventHandler" });

export interface GoogleCloudDialogflowCxV3beta1DataStoreConnection {
  dataStore?: string;
  documentProcessingMode?:
    | "DOCUMENT_PROCESSING_MODE_UNSPECIFIED"
    | "DOCUMENTS"
    | "CHUNKS"
    | (string & {});
  dataStoreType?:
    | "DATA_STORE_TYPE_UNSPECIFIED"
    | "PUBLIC_WEB"
    | "UNSTRUCTURED"
    | "STRUCTURED"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1DataStoreConnection: Schema.Codec<GoogleCloudDialogflowCxV3beta1DataStoreConnection> =
  /*@__PURE__*/ Schema.Struct({
    dataStore: Schema.optional(Schema.String),
    documentProcessingMode: Schema.optional(Schema.String),
    dataStoreType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1DataStoreConnection",
  });

export interface GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings {
  targetFlow?: string;
  targetPage?: string;
  enabled?: boolean;
  triggerFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
  dataStoreConnections?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1DataStoreConnection>;
}

export const GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings: Schema.Codec<GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings> =
  /*@__PURE__*/ Schema.Struct({
    targetFlow: Schema.optional(Schema.String),
    targetPage: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    triggerFulfillment: Schema.optional(
      GoogleCloudDialogflowCxV3beta1Fulfillment,
    ),
    dataStoreConnections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1DataStoreConnection),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior {
  initialPromptFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
  repromptEventHandlers?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1EventHandler>;
}

export const GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior: Schema.Codec<GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior> =
  /*@__PURE__*/ Schema.Struct({
    initialPromptFulfillment: Schema.optional(
      GoogleCloudDialogflowCxV3beta1Fulfillment,
    ),
    repromptEventHandlers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1EventHandler),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior",
  });

export interface GoogleCloudDialogflowCxV3beta1FormParameter {
  fillBehavior?: GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior;
  displayName?: string;
  required?: boolean;
  entityType?: string;
  redact?: boolean;
  advancedSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettings;
  isList?: boolean;
  defaultValue?: unknown;
}

export const GoogleCloudDialogflowCxV3beta1FormParameter: Schema.Codec<GoogleCloudDialogflowCxV3beta1FormParameter> =
  /*@__PURE__*/ Schema.Struct({
    fillBehavior: Schema.optional(
      GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior,
    ),
    displayName: Schema.optional(Schema.String),
    required: Schema.optional(Schema.Boolean),
    entityType: Schema.optional(Schema.String),
    redact: Schema.optional(Schema.Boolean),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettings,
    ),
    isList: Schema.optional(Schema.Boolean),
    defaultValue: Schema.optional(Schema.Unknown),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1FormParameter" });

export interface GoogleCloudDialogflowCxV3beta1Form {
  parameters?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1FormParameter>;
}

export const GoogleCloudDialogflowCxV3beta1Form: Schema.Codec<GoogleCloudDialogflowCxV3beta1Form> =
  /*@__PURE__*/ Schema.Struct({
    parameters: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1FormParameter),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Form" });

export interface GoogleCloudDialogflowCxV3beta1TransitionRoute {
  name?: string;
  description?: string;
  triggerFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
  targetPage?: string;
  intent?: string;
  condition?: string;
  targetFlow?: string;
}

export const GoogleCloudDialogflowCxV3beta1TransitionRoute: Schema.Codec<GoogleCloudDialogflowCxV3beta1TransitionRoute> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    triggerFulfillment: Schema.optional(
      GoogleCloudDialogflowCxV3beta1Fulfillment,
    ),
    targetPage: Schema.optional(Schema.String),
    intent: Schema.optional(Schema.String),
    condition: Schema.optional(Schema.String),
    targetFlow: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TransitionRoute" });

export interface GoogleCloudDialogflowCxV3beta1Page {
  displayName?: string;
  name?: string;
  entryFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
  transitionRouteGroups?: ReadonlyArray<string>;
  advancedSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettings;
  description?: string;
  eventHandlers?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1EventHandler>;
  knowledgeConnectorSettings?: GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings;
  form?: GoogleCloudDialogflowCxV3beta1Form;
  transitionRoutes?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TransitionRoute>;
}

export const GoogleCloudDialogflowCxV3beta1Page: Schema.Codec<GoogleCloudDialogflowCxV3beta1Page> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    entryFulfillment: Schema.optional(
      GoogleCloudDialogflowCxV3beta1Fulfillment,
    ),
    transitionRouteGroups: Schema.optional(Schema.Array(Schema.String)),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettings,
    ),
    description: Schema.optional(Schema.String),
    eventHandlers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1EventHandler),
    ),
    knowledgeConnectorSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings,
    ),
    form: Schema.optional(GoogleCloudDialogflowCxV3beta1Form),
    transitionRoutes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TransitionRoute),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Page" });

export interface GoogleRpcStatus {
  message?: string;
  code?: number;
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const GoogleRpcStatus: Schema.Codec<GoogleRpcStatus> =
  /*@__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "GoogleRpcStatus" });

export interface GoogleCloudDialogflowCxV3beta1TestRunDifference {
  description?: string;
  type?:
    | "DIFF_TYPE_UNSPECIFIED"
    | "INTENT"
    | "PAGE"
    | "PARAMETERS"
    | "UTTERANCE"
    | "FLOW"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1TestRunDifference: Schema.Codec<GoogleCloudDialogflowCxV3beta1TestRunDifference> =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1TestRunDifference",
  });

export interface GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput {
  sessionParameters?: Record<string, unknown>;
  triggeredIntent?: GoogleCloudDialogflowCxV3beta1Intent;
  diagnosticInfo?: Record<string, unknown>;
  currentPage?: GoogleCloudDialogflowCxV3beta1Page;
  status?: GoogleRpcStatus;
  differences?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TestRunDifference>;
  textResponses?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ResponseMessageText>;
}

export const GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput: Schema.Codec<GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput> =
  /*@__PURE__*/ Schema.Struct({
    sessionParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    triggeredIntent: Schema.optional(GoogleCloudDialogflowCxV3beta1Intent),
    diagnosticInfo: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    currentPage: Schema.optional(GoogleCloudDialogflowCxV3beta1Page),
    status: Schema.optional(GoogleRpcStatus),
    differences: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TestRunDifference),
    ),
    textResponses: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ResponseMessageText),
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput",
  });

export interface GoogleCloudDialogflowCxV3beta1ConversationTurn {
  userInput?: GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput;
  virtualAgentOutput?: GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput;
}

export const GoogleCloudDialogflowCxV3beta1ConversationTurn: Schema.Codec<GoogleCloudDialogflowCxV3beta1ConversationTurn> =
  /*@__PURE__*/ Schema.Struct({
    userInput: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput,
    ),
    virtualAgentOutput: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ConversationTurn" });

export interface GoogleCloudDialogflowCxV3beta1TestCaseResult {
  conversationTurns?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ConversationTurn>;
  environment?: string;
  name?: string;
  testResult?: "TEST_RESULT_UNSPECIFIED" | "PASSED" | "FAILED" | (string & {});
  testTime?: string;
}

export const GoogleCloudDialogflowCxV3beta1TestCaseResult: Schema.Codec<GoogleCloudDialogflowCxV3beta1TestCaseResult> =
  /*@__PURE__*/ Schema.Struct({
    conversationTurns: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ConversationTurn),
    ),
    environment: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    testResult: Schema.optional(Schema.String),
    testTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TestCaseResult" });

export interface GoogleCloudDialogflowV2IntentMessageSuggestion {
  title?: string;
}

export const GoogleCloudDialogflowV2IntentMessageSuggestion: Schema.Codec<GoogleCloudDialogflowV2IntentMessageSuggestion> =
  /*@__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageSuggestion" });

export interface GoogleCloudDialogflowV2beta1FreeFormSuggestion {
  response?: string;
}

export const GoogleCloudDialogflowV2beta1FreeFormSuggestion: Schema.Codec<GoogleCloudDialogflowV2beta1FreeFormSuggestion> =
  /*@__PURE__*/ Schema.Struct({
    response: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1FreeFormSuggestion" });

export interface GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSources {
  instructionIndexes?: ReadonlyArray<number>;
}

export const GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSources: Schema.Codec<GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSources> =
  /*@__PURE__*/ Schema.Struct({
    instructionIndexes: Schema.optional(Schema.Array(Schema.Number)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSources",
  });

export interface GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion {
  answerRecord?: string;
  sources?: GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSources;
  suggestionIndex?: number;
  similarityScore?: number;
}

export const GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion: Schema.Codec<GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion> =
  /*@__PURE__*/ Schema.Struct({
    answerRecord: Schema.optional(Schema.String),
    sources: Schema.optional(
      GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSources,
    ),
    suggestionIndex: Schema.optional(Schema.Number),
    similarityScore: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion",
  });

export interface GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResult {
  duplicateSuggestions?: ReadonlyArray<GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion>;
}

export const GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResult: Schema.Codec<GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResult> =
  /*@__PURE__*/ Schema.Struct({
    duplicateSuggestions: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResult",
  });

export interface GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSampleResponse {
  sources?: GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSources;
  duplicateCheckResult?: GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResult;
  responseText?: string;
}

export const GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSampleResponse: Schema.Codec<GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSampleResponse> =
  /*@__PURE__*/ Schema.Struct({
    sources: Schema.optional(
      GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSources,
    ),
    duplicateCheckResult: Schema.optional(
      GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResult,
    ),
    responseText: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSampleResponse",
  });

export interface GoogleCloudDialogflowV2beta1AgentCoachingSuggestionAgentActionSuggestion {
  agentAction?: string;
  sources?: GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSources;
  duplicateCheckResult?: GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResult;
}

export const GoogleCloudDialogflowV2beta1AgentCoachingSuggestionAgentActionSuggestion: Schema.Codec<GoogleCloudDialogflowV2beta1AgentCoachingSuggestionAgentActionSuggestion> =
  /*@__PURE__*/ Schema.Struct({
    agentAction: Schema.optional(Schema.String),
    sources: Schema.optional(
      GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSources,
    ),
    duplicateCheckResult: Schema.optional(
      GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResult,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1AgentCoachingSuggestionAgentActionSuggestion",
  });

export interface GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion {
  similarityScore?: number;
  answerRecord?: string;
  suggestionIndex?: number;
}

export const GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion: Schema.Codec<GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion> =
  /*@__PURE__*/ Schema.Struct({
    similarityScore: Schema.optional(Schema.Number),
    answerRecord: Schema.optional(Schema.String),
    suggestionIndex: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion",
  });

export interface GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResult {
  duplicateSuggestions?: ReadonlyArray<GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion>;
}

export const GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResult: Schema.Codec<GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResult> =
  /*@__PURE__*/ Schema.Struct({
    duplicateSuggestions: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResult",
  });

export interface GoogleCloudDialogflowV2beta1AgentCoachingInstruction {
  triggeringEvent?:
    | "TRIGGER_EVENT_UNSPECIFIED"
    | "END_OF_UTTERANCE"
    | "MANUAL_CALL"
    | "CUSTOMER_MESSAGE"
    | "AGENT_MESSAGE"
    | "TOOL_CALL_COMPLETION"
    | (string & {});
  displayName?: string;
  duplicateCheckResult?: GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResult;
  agentAction?: string;
  systemAction?: string;
  displayDetails?: string;
  condition?: string;
}

export const GoogleCloudDialogflowV2beta1AgentCoachingInstruction: Schema.Codec<GoogleCloudDialogflowV2beta1AgentCoachingInstruction> =
  /*@__PURE__*/ Schema.Struct({
    triggeringEvent: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    duplicateCheckResult: Schema.optional(
      GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResult,
    ),
    agentAction: Schema.optional(Schema.String),
    systemAction: Schema.optional(Schema.String),
    displayDetails: Schema.optional(Schema.String),
    condition: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1AgentCoachingInstruction",
  });

export interface GoogleCloudDialogflowV2beta1AgentCoachingSuggestion {
  sampleResponses?: ReadonlyArray<GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSampleResponse>;
  agentActionSuggestions?: ReadonlyArray<GoogleCloudDialogflowV2beta1AgentCoachingSuggestionAgentActionSuggestion>;
  applicableInstructions?: ReadonlyArray<GoogleCloudDialogflowV2beta1AgentCoachingInstruction>;
}

export const GoogleCloudDialogflowV2beta1AgentCoachingSuggestion: Schema.Codec<GoogleCloudDialogflowV2beta1AgentCoachingSuggestion> =
  /*@__PURE__*/ Schema.Struct({
    sampleResponses: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSampleResponse,
      ),
    ),
    agentActionSuggestions: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1AgentCoachingSuggestionAgentActionSuggestion,
      ),
    ),
    applicableInstructions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1AgentCoachingInstruction),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1AgentCoachingSuggestion",
  });

export interface GoogleCloudDialogflowV2beta1SummarySuggestionSummarySection {
  section?: string;
  summary?: string;
}

export const GoogleCloudDialogflowV2beta1SummarySuggestionSummarySection: Schema.Codec<GoogleCloudDialogflowV2beta1SummarySuggestionSummarySection> =
  /*@__PURE__*/ Schema.Struct({
    section: Schema.optional(Schema.String),
    summary: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SummarySuggestionSummarySection",
  });

export interface GoogleCloudDialogflowV2beta1SummarySuggestion {
  summarySections?: ReadonlyArray<GoogleCloudDialogflowV2beta1SummarySuggestionSummarySection>;
}

export const GoogleCloudDialogflowV2beta1SummarySuggestion: Schema.Codec<GoogleCloudDialogflowV2beta1SummarySuggestion> =
  /*@__PURE__*/ Schema.Struct({
    summarySections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SummarySuggestionSummarySection),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1SummarySuggestion" });

export interface GoogleCloudDialogflowV2beta1ToolCall {
  cesApp?: string;
  cesToolset?: string;
  state?:
    | "STATE_UNSPECIFIED"
    | "TRIGGERED"
    | "NEEDS_CONFIRMATION"
    | (string & {});
  inputParameters?: Record<string, unknown>;
  createTime?: string;
  answerRecord?: string;
  tool?: string;
  toolDisplayName?: string;
  toolDisplayDetails?: string;
  action?: string;
  cesTool?: string;
}

export const GoogleCloudDialogflowV2beta1ToolCall: Schema.Codec<GoogleCloudDialogflowV2beta1ToolCall> =
  /*@__PURE__*/ Schema.Struct({
    cesApp: Schema.optional(Schema.String),
    cesToolset: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    createTime: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    tool: Schema.optional(Schema.String),
    toolDisplayName: Schema.optional(Schema.String),
    toolDisplayDetails: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    cesTool: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ToolCall" });

export interface GoogleCloudDialogflowV2beta1ToolCallResultError {
  message?: string;
}

export const GoogleCloudDialogflowV2beta1ToolCallResultError: Schema.Codec<GoogleCloudDialogflowV2beta1ToolCallResultError> =
  /*@__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ToolCallResultError",
  });

export interface GoogleCloudDialogflowV2beta1ToolCallResult {
  cesApp?: string;
  cesToolset?: string;
  content?: string;
  error?: GoogleCloudDialogflowV2beta1ToolCallResultError;
  rawContent?: string;
  action?: string;
  cesTool?: string;
  createTime?: string;
  answerRecord?: string;
  tool?: string;
}

export const GoogleCloudDialogflowV2beta1ToolCallResult: Schema.Codec<GoogleCloudDialogflowV2beta1ToolCallResult> =
  /*@__PURE__*/ Schema.Struct({
    cesApp: Schema.optional(Schema.String),
    cesToolset: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    error: Schema.optional(GoogleCloudDialogflowV2beta1ToolCallResultError),
    rawContent: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    cesTool: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    tool: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ToolCallResult" });

export interface GoogleCloudDialogflowV2beta1GeneratorSuggestionToolCallInfo {
  toolCall?: GoogleCloudDialogflowV2beta1ToolCall;
  toolCallResult?: GoogleCloudDialogflowV2beta1ToolCallResult;
}

export const GoogleCloudDialogflowV2beta1GeneratorSuggestionToolCallInfo: Schema.Codec<GoogleCloudDialogflowV2beta1GeneratorSuggestionToolCallInfo> =
  /*@__PURE__*/ Schema.Struct({
    toolCall: Schema.optional(GoogleCloudDialogflowV2beta1ToolCall),
    toolCallResult: Schema.optional(GoogleCloudDialogflowV2beta1ToolCallResult),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1GeneratorSuggestionToolCallInfo",
  });

export interface GoogleCloudDialogflowV2beta1GeneratorSuggestion {
  freeFormSuggestion?: GoogleCloudDialogflowV2beta1FreeFormSuggestion;
  agentCoachingSuggestion?: GoogleCloudDialogflowV2beta1AgentCoachingSuggestion;
  summarySuggestion?: GoogleCloudDialogflowV2beta1SummarySuggestion;
  toolCallInfo?: ReadonlyArray<GoogleCloudDialogflowV2beta1GeneratorSuggestionToolCallInfo>;
}

export const GoogleCloudDialogflowV2beta1GeneratorSuggestion: Schema.Codec<GoogleCloudDialogflowV2beta1GeneratorSuggestion> =
  /*@__PURE__*/ Schema.Struct({
    freeFormSuggestion: Schema.optional(
      GoogleCloudDialogflowV2beta1FreeFormSuggestion,
    ),
    agentCoachingSuggestion: Schema.optional(
      GoogleCloudDialogflowV2beta1AgentCoachingSuggestion,
    ),
    summarySuggestion: Schema.optional(
      GoogleCloudDialogflowV2beta1SummarySuggestion,
    ),
    toolCallInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1GeneratorSuggestionToolCallInfo),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1GeneratorSuggestion",
  });

export interface GoogleCloudDialogflowV2beta1GenerateSuggestionsResponseGeneratorSuggestionAnswer {
  sourceGenerator?: string;
  answerRecord?: string;
  generatorSuggestion?: GoogleCloudDialogflowV2beta1GeneratorSuggestion;
}

export const GoogleCloudDialogflowV2beta1GenerateSuggestionsResponseGeneratorSuggestionAnswer: Schema.Codec<GoogleCloudDialogflowV2beta1GenerateSuggestionsResponseGeneratorSuggestionAnswer> =
  /*@__PURE__*/ Schema.Struct({
    sourceGenerator: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    generatorSuggestion: Schema.optional(
      GoogleCloudDialogflowV2beta1GeneratorSuggestion,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1GenerateSuggestionsResponseGeneratorSuggestionAnswer",
  });

export interface GoogleCloudDialogflowV2beta1GenerateSuggestionsResponse {
  generatorSuggestionAnswers?: ReadonlyArray<GoogleCloudDialogflowV2beta1GenerateSuggestionsResponseGeneratorSuggestionAnswer>;
  latestMessage?: string;
}

export const GoogleCloudDialogflowV2beta1GenerateSuggestionsResponse: Schema.Codec<GoogleCloudDialogflowV2beta1GenerateSuggestionsResponse> =
  /*@__PURE__*/ Schema.Struct({
    generatorSuggestionAnswers: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1GenerateSuggestionsResponseGeneratorSuggestionAnswer,
      ),
    ),
    latestMessage: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1GenerateSuggestionsResponse",
  });

export interface GoogleCloudDialogflowCxV3VersionVariantsVariant {
  version?: string;
  trafficAllocation?: number;
  isControlGroup?: boolean;
}

export const GoogleCloudDialogflowCxV3VersionVariantsVariant: Schema.Codec<GoogleCloudDialogflowCxV3VersionVariantsVariant> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    trafficAllocation: Schema.optional(Schema.Number),
    isControlGroup: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3VersionVariantsVariant",
  });

export interface GoogleCloudDialogflowCxV3VersionVariants {
  variants?: ReadonlyArray<GoogleCloudDialogflowCxV3VersionVariantsVariant>;
}

export const GoogleCloudDialogflowCxV3VersionVariants: Schema.Codec<GoogleCloudDialogflowCxV3VersionVariants> =
  /*@__PURE__*/ Schema.Struct({
    variants: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3VersionVariantsVariant),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3VersionVariants" });

export interface GoogleCloudDialogflowV2ImportConversationDataOperationResponse {
  importCount?: number;
  conversationDataset?: string;
}

export const GoogleCloudDialogflowV2ImportConversationDataOperationResponse: Schema.Codec<GoogleCloudDialogflowV2ImportConversationDataOperationResponse> =
  /*@__PURE__*/ Schema.Struct({
    importCount: Schema.optional(Schema.Number),
    conversationDataset: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2ImportConversationDataOperationResponse",
  });

export interface GoogleCloudDialogflowV2CreateConversationModelOperationMetadata {
  createTime?: string;
  conversationModel?: string;
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "SUCCEEDED"
    | "FAILED"
    | "CANCELLED"
    | "CANCELLING"
    | "TRAINING"
    | (string & {});
  doneTime?: string;
}

export const GoogleCloudDialogflowV2CreateConversationModelOperationMetadata: Schema.Codec<GoogleCloudDialogflowV2CreateConversationModelOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    conversationModel: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    doneTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2CreateConversationModelOperationMetadata",
  });

export interface GoogleCloudDialogflowCxV3DeploymentResult {
  deploymentTestResults?: ReadonlyArray<string>;
  experiment?: string;
}

export const GoogleCloudDialogflowCxV3DeploymentResult: Schema.Codec<GoogleCloudDialogflowCxV3DeploymentResult> =
  /*@__PURE__*/ Schema.Struct({
    deploymentTestResults: Schema.optional(Schema.Array(Schema.String)),
    experiment: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3DeploymentResult" });

export interface GoogleCloudDialogflowV2IntentMessageSelectItemInfo {
  key?: string;
  synonyms?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2IntentMessageSelectItemInfo: Schema.Codec<GoogleCloudDialogflowV2IntentMessageSelectItemInfo> =
  /*@__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    synonyms: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageSelectItemInfo",
  });

export interface GoogleCloudDialogflowV2IntentMessageImage {
  imageUri?: string;
  accessibilityText?: string;
}

export const GoogleCloudDialogflowV2IntentMessageImage: Schema.Codec<GoogleCloudDialogflowV2IntentMessageImage> =
  /*@__PURE__*/ Schema.Struct({
    imageUri: Schema.optional(Schema.String),
    accessibilityText: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageImage" });

export interface GoogleCloudDialogflowV2IntentMessageCarouselSelectItem {
  info?: GoogleCloudDialogflowV2IntentMessageSelectItemInfo;
  title?: string;
  description?: string;
  image?: GoogleCloudDialogflowV2IntentMessageImage;
}

export const GoogleCloudDialogflowV2IntentMessageCarouselSelectItem: Schema.Codec<GoogleCloudDialogflowV2IntentMessageCarouselSelectItem> =
  /*@__PURE__*/ Schema.Struct({
    info: Schema.optional(GoogleCloudDialogflowV2IntentMessageSelectItemInfo),
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageCarouselSelectItem",
  });

export interface GoogleCloudDialogflowCxV3beta1TestError {
  testCase?: string;
  status?: GoogleRpcStatus;
  testTime?: string;
}

export const GoogleCloudDialogflowCxV3beta1TestError: Schema.Codec<GoogleCloudDialogflowCxV3beta1TestError> =
  /*@__PURE__*/ Schema.Struct({
    testCase: Schema.optional(Schema.String),
    status: Schema.optional(GoogleRpcStatus),
    testTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TestError" });

export interface GoogleCloudDialogflowCxV3AnswerFeedbackRatingReason {
  reasonLabels?: ReadonlyArray<string>;
  feedback?: string;
}

export const GoogleCloudDialogflowCxV3AnswerFeedbackRatingReason: Schema.Codec<GoogleCloudDialogflowCxV3AnswerFeedbackRatingReason> =
  /*@__PURE__*/ Schema.Struct({
    reasonLabels: Schema.optional(Schema.Array(Schema.String)),
    feedback: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3AnswerFeedbackRatingReason",
  });

export interface GoogleCloudDialogflowCxV3EventInput {
  event?: string;
}

export const GoogleCloudDialogflowCxV3EventInput: Schema.Codec<GoogleCloudDialogflowCxV3EventInput> =
  /*@__PURE__*/ Schema.Struct({
    event: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3EventInput" });

export interface GoogleCloudDialogflowCxV3IntentInput {
  intent?: string;
}

export const GoogleCloudDialogflowCxV3IntentInput: Schema.Codec<GoogleCloudDialogflowCxV3IntentInput> =
  /*@__PURE__*/ Schema.Struct({
    intent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3IntentInput" });

export interface GoogleCloudDialogflowCxV3TextInput {
  text?: string;
}

export const GoogleCloudDialogflowCxV3TextInput: Schema.Codec<GoogleCloudDialogflowCxV3TextInput> =
  /*@__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TextInput" });

export interface GoogleCloudDialogflowCxV3ToolCallResultError {
  message?: string;
}

export const GoogleCloudDialogflowCxV3ToolCallResultError: Schema.Codec<GoogleCloudDialogflowCxV3ToolCallResultError> =
  /*@__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ToolCallResultError" });

export interface GoogleCloudDialogflowCxV3ToolCallResult {
  action?: string;
  error?: GoogleCloudDialogflowCxV3ToolCallResultError;
  tool?: string;
  outputParameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3ToolCallResult: Schema.Codec<GoogleCloudDialogflowCxV3ToolCallResult> =
  /*@__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    error: Schema.optional(GoogleCloudDialogflowCxV3ToolCallResultError),
    tool: Schema.optional(Schema.String),
    outputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ToolCallResult" });

export interface GoogleCloudDialogflowCxV3BargeInConfig {
  noBargeInDuration?: string;
  totalDuration?: string;
}

export const GoogleCloudDialogflowCxV3BargeInConfig: Schema.Codec<GoogleCloudDialogflowCxV3BargeInConfig> =
  /*@__PURE__*/ Schema.Struct({
    noBargeInDuration: Schema.optional(Schema.String),
    totalDuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3BargeInConfig" });

export interface GoogleCloudDialogflowCxV3InputAudioConfig {
  optOutConformerModelMigration?: boolean;
  bargeInConfig?: GoogleCloudDialogflowCxV3BargeInConfig;
  model?: string;
  singleUtterance?: boolean;
  modelVariant?:
    | "SPEECH_MODEL_VARIANT_UNSPECIFIED"
    | "USE_BEST_AVAILABLE"
    | "USE_STANDARD"
    | "USE_ENHANCED"
    | (string & {});
  audioEncoding?:
    | "AUDIO_ENCODING_UNSPECIFIED"
    | "AUDIO_ENCODING_LINEAR_16"
    | "AUDIO_ENCODING_FLAC"
    | "AUDIO_ENCODING_MULAW"
    | "AUDIO_ENCODING_AMR"
    | "AUDIO_ENCODING_AMR_WB"
    | "AUDIO_ENCODING_OGG_OPUS"
    | "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"
    | "AUDIO_ENCODING_ALAW"
    | (string & {});
  enableWordInfo?: boolean;
  sampleRateHertz?: number;
  phraseHints?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3InputAudioConfig: Schema.Codec<GoogleCloudDialogflowCxV3InputAudioConfig> =
  /*@__PURE__*/ Schema.Struct({
    optOutConformerModelMigration: Schema.optional(Schema.Boolean),
    bargeInConfig: Schema.optional(GoogleCloudDialogflowCxV3BargeInConfig),
    model: Schema.optional(Schema.String),
    singleUtterance: Schema.optional(Schema.Boolean),
    modelVariant: Schema.optional(Schema.String),
    audioEncoding: Schema.optional(Schema.String),
    enableWordInfo: Schema.optional(Schema.Boolean),
    sampleRateHertz: Schema.optional(Schema.Number),
    phraseHints: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3InputAudioConfig" });

export interface GoogleCloudDialogflowCxV3AudioInput {
  config?: GoogleCloudDialogflowCxV3InputAudioConfig;
  audio?: string;
}

export const GoogleCloudDialogflowCxV3AudioInput: Schema.Codec<GoogleCloudDialogflowCxV3AudioInput> =
  /*@__PURE__*/ Schema.Struct({
    config: Schema.optional(GoogleCloudDialogflowCxV3InputAudioConfig),
    audio: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3AudioInput" });

export interface GoogleCloudDialogflowCxV3DtmfInput {
  digits?: string;
  finishDigit?: string;
}

export const GoogleCloudDialogflowCxV3DtmfInput: Schema.Codec<GoogleCloudDialogflowCxV3DtmfInput> =
  /*@__PURE__*/ Schema.Struct({
    digits: Schema.optional(Schema.String),
    finishDigit: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3DtmfInput" });

export interface GoogleCloudDialogflowCxV3QueryInput {
  event?: GoogleCloudDialogflowCxV3EventInput;
  intent?: GoogleCloudDialogflowCxV3IntentInput;
  text?: GoogleCloudDialogflowCxV3TextInput;
  toolCallResult?: GoogleCloudDialogflowCxV3ToolCallResult;
  audio?: GoogleCloudDialogflowCxV3AudioInput;
  dtmf?: GoogleCloudDialogflowCxV3DtmfInput;
  languageCode?: string;
}

export const GoogleCloudDialogflowCxV3QueryInput: Schema.Codec<GoogleCloudDialogflowCxV3QueryInput> =
  /*@__PURE__*/ Schema.Struct({
    event: Schema.optional(GoogleCloudDialogflowCxV3EventInput),
    intent: Schema.optional(GoogleCloudDialogflowCxV3IntentInput),
    text: Schema.optional(GoogleCloudDialogflowCxV3TextInput),
    toolCallResult: Schema.optional(GoogleCloudDialogflowCxV3ToolCallResult),
    audio: Schema.optional(GoogleCloudDialogflowCxV3AudioInput),
    dtmf: Schema.optional(GoogleCloudDialogflowCxV3DtmfInput),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3QueryInput" });

export interface GoogleCloudDialogflowV3alpha1TurnSignals {
  sentimentScore?: number;
  noUserInput?: boolean;
  reachedEndPage?: boolean;
  dtmfUsed?: boolean;
  agentEscalated?: boolean;
  userEscalated?: boolean;
  webhookStatuses?: ReadonlyArray<string>;
  failureReasons?: ReadonlyArray<
    | "FAILURE_REASON_UNSPECIFIED"
    | "FAILED_INTENT"
    | "FAILED_WEBHOOK"
    | (string & {})
  >;
  sentimentMagnitude?: number;
  noMatch?: boolean;
  triggeredAbandonmentEvent?: boolean;
}

export const GoogleCloudDialogflowV3alpha1TurnSignals: Schema.Codec<GoogleCloudDialogflowV3alpha1TurnSignals> =
  /*@__PURE__*/ Schema.Struct({
    sentimentScore: Schema.optional(Schema.Number),
    noUserInput: Schema.optional(Schema.Boolean),
    reachedEndPage: Schema.optional(Schema.Boolean),
    dtmfUsed: Schema.optional(Schema.Boolean),
    agentEscalated: Schema.optional(Schema.Boolean),
    userEscalated: Schema.optional(Schema.Boolean),
    webhookStatuses: Schema.optional(Schema.Array(Schema.String)),
    failureReasons: Schema.optional(Schema.Array(Schema.String)),
    sentimentMagnitude: Schema.optional(Schema.Number),
    noMatch: Schema.optional(Schema.Boolean),
    triggeredAbandonmentEvent: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV3alpha1TurnSignals" });

export interface GoogleCloudDialogflowCxV3PlaybookInput {
  precedingConversationSummary?: string;
}

export const GoogleCloudDialogflowCxV3PlaybookInput: Schema.Codec<GoogleCloudDialogflowCxV3PlaybookInput> =
  /*@__PURE__*/ Schema.Struct({
    precedingConversationSummary: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3PlaybookInput" });

export interface GoogleCloudDialogflowCxV3ImportEntityTypesMetadata {}

export const GoogleCloudDialogflowCxV3ImportEntityTypesMetadata: Schema.Codec<GoogleCloudDialogflowCxV3ImportEntityTypesMetadata> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ImportEntityTypesMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportIntentsMetadata {}

export const GoogleCloudDialogflowCxV3beta1ExportIntentsMetadata: Schema.Codec<GoogleCloudDialogflowCxV3beta1ExportIntentsMetadata> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportIntentsMetadata",
  });

export interface GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig {
  tokenEndpoint?: string;
  clientId?: string;
  clientSecret?: string;
  secretVersionForClientSecret?: string;
  scopes?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig: Schema.Codec<GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig> =
  /*@__PURE__*/ Schema.Struct({
    tokenEndpoint: Schema.optional(Schema.String),
    clientId: Schema.optional(Schema.String),
    clientSecret: Schema.optional(Schema.String),
    secretVersionForClientSecret: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig",
  });

export interface GoogleCloudDialogflowCxV3WebhookGenericWebServiceServiceAccountAuthConfig {
  serviceAccount?: string;
}

export const GoogleCloudDialogflowCxV3WebhookGenericWebServiceServiceAccountAuthConfig: Schema.Codec<GoogleCloudDialogflowCxV3WebhookGenericWebServiceServiceAccountAuthConfig> =
  /*@__PURE__*/ Schema.Struct({
    serviceAccount: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3WebhookGenericWebServiceServiceAccountAuthConfig",
  });

export interface GoogleCloudDialogflowCxV3WebhookGenericWebServiceSecretVersionHeaderValue {
  secretVersion?: string;
}

export const GoogleCloudDialogflowCxV3WebhookGenericWebServiceSecretVersionHeaderValue: Schema.Codec<GoogleCloudDialogflowCxV3WebhookGenericWebServiceSecretVersionHeaderValue> =
  /*@__PURE__*/ Schema.Struct({
    secretVersion: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3WebhookGenericWebServiceSecretVersionHeaderValue",
  });

export interface GoogleCloudDialogflowCxV3WebhookGenericWebService {
  webhookType?:
    | "WEBHOOK_TYPE_UNSPECIFIED"
    | "STANDARD"
    | "FLEXIBLE"
    | (string & {});
  httpMethod?:
    | "HTTP_METHOD_UNSPECIFIED"
    | "POST"
    | "GET"
    | "HEAD"
    | "PUT"
    | "DELETE"
    | "PATCH"
    | "OPTIONS"
    | (string & {});
  oauthConfig?: GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig;
  uri?: string;
  allowedCaCerts?: ReadonlyArray<string>;
  requestHeaders?: Record<string, string>;
  serviceAgentAuth?:
    | "SERVICE_AGENT_AUTH_UNSPECIFIED"
    | "NONE"
    | "ID_TOKEN"
    | "ACCESS_TOKEN"
    | (string & {});
  serviceAccountAuthConfig?: GoogleCloudDialogflowCxV3WebhookGenericWebServiceServiceAccountAuthConfig;
  requestBody?: string;
  secretVersionsForRequestHeaders?: Record<
    string,
    GoogleCloudDialogflowCxV3WebhookGenericWebServiceSecretVersionHeaderValue
  >;
  secretVersionForUsernamePassword?: string;
  username?: string;
  password?: string;
  parameterMapping?: Record<string, string>;
}

export const GoogleCloudDialogflowCxV3WebhookGenericWebService: Schema.Codec<GoogleCloudDialogflowCxV3WebhookGenericWebService> =
  /*@__PURE__*/ Schema.Struct({
    webhookType: Schema.optional(Schema.String),
    httpMethod: Schema.optional(Schema.String),
    oauthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig,
    ),
    uri: Schema.optional(Schema.String),
    allowedCaCerts: Schema.optional(Schema.Array(Schema.String)),
    requestHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    serviceAgentAuth: Schema.optional(Schema.String),
    serviceAccountAuthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookGenericWebServiceServiceAccountAuthConfig,
    ),
    requestBody: Schema.optional(Schema.String),
    secretVersionsForRequestHeaders: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowCxV3WebhookGenericWebServiceSecretVersionHeaderValue,
      ),
    ),
    secretVersionForUsernamePassword: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    parameterMapping: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3WebhookGenericWebService",
  });

export interface GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig {
  genericWebService?: GoogleCloudDialogflowCxV3WebhookGenericWebService;
  service?: string;
}

export const GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig: Schema.Codec<GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig> =
  /*@__PURE__*/ Schema.Struct({
    genericWebService: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookGenericWebService,
    ),
    service: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig",
  });

export interface GoogleCloudDialogflowCxV3Webhook {
  displayName?: string;
  name?: string;
  disabled?: boolean;
  serviceDirectory?: GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig;
  genericWebService?: GoogleCloudDialogflowCxV3WebhookGenericWebService;
  timeout?: string;
}

export const GoogleCloudDialogflowCxV3Webhook: Schema.Codec<GoogleCloudDialogflowCxV3Webhook> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    disabled: Schema.optional(Schema.Boolean),
    serviceDirectory: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig,
    ),
    genericWebService: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookGenericWebService,
    ),
    timeout: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Webhook" });

export interface GoogleCloudDialogflowCxV3ListWebhooksResponse {
  webhooks?: ReadonlyArray<GoogleCloudDialogflowCxV3Webhook>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3ListWebhooksResponse: Schema.Codec<GoogleCloudDialogflowCxV3ListWebhooksResponse> =
  /*@__PURE__*/ Schema.Struct({
    webhooks: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3Webhook)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ListWebhooksResponse" });

export interface GoogleCloudDialogflowCxV3ContinuousTestResult {
  result?:
    | "AGGREGATED_TEST_RESULT_UNSPECIFIED"
    | "PASSED"
    | "FAILED"
    | (string & {});
  name?: string;
  testCaseResults?: ReadonlyArray<string>;
  runTime?: string;
}

export const GoogleCloudDialogflowCxV3ContinuousTestResult: Schema.Codec<GoogleCloudDialogflowCxV3ContinuousTestResult> =
  /*@__PURE__*/ Schema.Struct({
    result: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    testCaseResults: Schema.optional(Schema.Array(Schema.String)),
    runTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ContinuousTestResult" });

export interface GoogleCloudDialogflowCxV3ListContinuousTestResultsResponse {
  continuousTestResults?: ReadonlyArray<GoogleCloudDialogflowCxV3ContinuousTestResult>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3ListContinuousTestResultsResponse: Schema.Codec<GoogleCloudDialogflowCxV3ListContinuousTestResultsResponse> =
  /*@__PURE__*/ Schema.Struct({
    continuousTestResults: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ContinuousTestResult),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ListContinuousTestResultsResponse",
  });

export interface GoogleCloudDialogflowV2InputDataset {
  dataset?: string;
}

export const GoogleCloudDialogflowV2InputDataset: Schema.Codec<GoogleCloudDialogflowV2InputDataset> =
  /*@__PURE__*/ Schema.Struct({
    dataset: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2InputDataset" });

export interface GoogleCloudDialogflowV2beta1ArticleAnswer {
  uri?: string;
  metadata?: Record<string, string>;
  answerRecord?: string;
  snippets?: ReadonlyArray<string>;
  title?: string;
}

export const GoogleCloudDialogflowV2beta1ArticleAnswer: Schema.Codec<GoogleCloudDialogflowV2beta1ArticleAnswer> =
  /*@__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    answerRecord: Schema.optional(Schema.String),
    snippets: Schema.optional(Schema.Array(Schema.String)),
    title: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ArticleAnswer" });

export interface GoogleCloudDialogflowCxV3GcsDestination {
  uri?: string;
}

export const GoogleCloudDialogflowCxV3GcsDestination: Schema.Codec<GoogleCloudDialogflowCxV3GcsDestination> =
  /*@__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3GcsDestination" });

export interface GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings {
  maxDigits?: number;
  finishDigit?: string;
  interdigitTimeoutDuration?: string;
  enabled?: boolean;
  endpointingTimeoutDuration?: string;
}

export const GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings: Schema.Codec<GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings> =
  /*@__PURE__*/ Schema.Struct({
    maxDigits: Schema.optional(Schema.Number),
    finishDigit: Schema.optional(Schema.String),
    interdigitTimeoutDuration: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    endpointingTimeoutDuration: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings",
  });

export interface GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings {
  models?: Record<string, string>;
  endpointerSensitivity?: number;
  useTimeoutBasedEndpointing?: boolean;
  noSpeechTimeout?: string;
}

export const GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings: Schema.Codec<GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings> =
  /*@__PURE__*/ Schema.Struct({
    models: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    endpointerSensitivity: Schema.optional(Schema.Number),
    useTimeoutBasedEndpointing: Schema.optional(Schema.Boolean),
    noSpeechTimeout: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings",
  });

export interface GoogleCloudDialogflowCxV3AdvancedSettings {
  audioExportGcsDestination?: GoogleCloudDialogflowCxV3GcsDestination;
  dtmfSettings?: GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings;
  loggingSettings?: GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings;
  speechSettings?: GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings;
}

export const GoogleCloudDialogflowCxV3AdvancedSettings: Schema.Codec<GoogleCloudDialogflowCxV3AdvancedSettings> =
  /*@__PURE__*/ Schema.Struct({
    audioExportGcsDestination: Schema.optional(
      GoogleCloudDialogflowCxV3GcsDestination,
    ),
    dtmfSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings,
    ),
    loggingSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings,
    ),
    speechSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3AdvancedSettings" });

export interface GoogleCloudDialogflowCxV3FulfillmentGeneratorSettings {
  inputParameters?: Record<string, string>;
  outputParameter?: string;
  generator?: string;
}

export const GoogleCloudDialogflowCxV3FulfillmentGeneratorSettings: Schema.Codec<GoogleCloudDialogflowCxV3FulfillmentGeneratorSettings> =
  /*@__PURE__*/ Schema.Struct({
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    outputParameter: Schema.optional(Schema.String),
    generator: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3FulfillmentGeneratorSettings",
  });

export interface GoogleCloudDialogflowCxV3FulfillmentSetParameterAction {
  parameter?: string;
  value?: unknown;
}

export const GoogleCloudDialogflowCxV3FulfillmentSetParameterAction: Schema.Codec<GoogleCloudDialogflowCxV3FulfillmentSetParameterAction> =
  /*@__PURE__*/ Schema.Struct({
    parameter: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Unknown),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3FulfillmentSetParameterAction",
  });

export interface GoogleCloudDialogflowCxV3Fulfillment {
  conditionalCases?: ReadonlyArray<GoogleCloudDialogflowCxV3FulfillmentConditionalCases>;
  tag?: string;
  returnPartialResponses?: boolean;
  enableGenerativeFallback?: boolean;
  messages?: ReadonlyArray<GoogleCloudDialogflowCxV3ResponseMessage>;
  advancedSettings?: GoogleCloudDialogflowCxV3AdvancedSettings;
  generators?: ReadonlyArray<GoogleCloudDialogflowCxV3FulfillmentGeneratorSettings>;
  webhook?: string;
  setParameterActions?: ReadonlyArray<GoogleCloudDialogflowCxV3FulfillmentSetParameterAction>;
}

export const GoogleCloudDialogflowCxV3Fulfillment: Schema.Codec<GoogleCloudDialogflowCxV3Fulfillment> =
  /*@__PURE__*/ Schema.Struct({
    conditionalCases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3FulfillmentConditionalCases),
    ),
    tag: Schema.optional(Schema.String),
    returnPartialResponses: Schema.optional(Schema.Boolean),
    enableGenerativeFallback: Schema.optional(Schema.Boolean),
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ResponseMessage),
    ),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettings,
    ),
    generators: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3FulfillmentGeneratorSettings),
    ),
    webhook: Schema.optional(Schema.String),
    setParameterActions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3FulfillmentSetParameterAction),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Fulfillment" });

export interface GoogleCloudDialogflowCxV3EventHandler {
  triggerFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
  name?: string;
  event?: string;
  targetFlow?: string;
  targetPlaybook?: string;
  targetPage?: string;
}

export const GoogleCloudDialogflowCxV3EventHandler: Schema.Codec<GoogleCloudDialogflowCxV3EventHandler> =
  /*@__PURE__*/ Schema.Struct({
    triggerFulfillment: Schema.optional(GoogleCloudDialogflowCxV3Fulfillment),
    name: Schema.optional(Schema.String),
    event: Schema.optional(Schema.String),
    targetFlow: Schema.optional(Schema.String),
    targetPlaybook: Schema.optional(Schema.String),
    targetPage: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3EventHandler" });

export interface GoogleCloudDialogflowCxV3FormParameterFillBehavior {
  repromptEventHandlers?: ReadonlyArray<GoogleCloudDialogflowCxV3EventHandler>;
  initialPromptFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
}

export const GoogleCloudDialogflowCxV3FormParameterFillBehavior: Schema.Codec<GoogleCloudDialogflowCxV3FormParameterFillBehavior> =
  /*@__PURE__*/ Schema.Struct({
    repromptEventHandlers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3EventHandler),
    ),
    initialPromptFulfillment: Schema.optional(
      GoogleCloudDialogflowCxV3Fulfillment,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3FormParameterFillBehavior",
  });

export interface GoogleCloudDialogflowCxV3FormParameter {
  displayName?: string;
  required?: boolean;
  entityType?: string;
  fillBehavior?: GoogleCloudDialogflowCxV3FormParameterFillBehavior;
  isList?: boolean;
  redact?: boolean;
  advancedSettings?: GoogleCloudDialogflowCxV3AdvancedSettings;
  defaultValue?: unknown;
}

export const GoogleCloudDialogflowCxV3FormParameter: Schema.Codec<GoogleCloudDialogflowCxV3FormParameter> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    required: Schema.optional(Schema.Boolean),
    entityType: Schema.optional(Schema.String),
    fillBehavior: Schema.optional(
      GoogleCloudDialogflowCxV3FormParameterFillBehavior,
    ),
    isList: Schema.optional(Schema.Boolean),
    redact: Schema.optional(Schema.Boolean),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettings,
    ),
    defaultValue: Schema.optional(Schema.Unknown),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3FormParameter" });

export interface GoogleCloudDialogflowCxV3Form {
  parameters?: ReadonlyArray<GoogleCloudDialogflowCxV3FormParameter>;
}

export const GoogleCloudDialogflowCxV3Form: Schema.Codec<GoogleCloudDialogflowCxV3Form> =
  /*@__PURE__*/ Schema.Struct({
    parameters: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3FormParameter),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Form" });

export interface GoogleCloudDialogflowV2EntityTypeEntity {
  value?: string;
  synonyms?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2EntityTypeEntity: Schema.Codec<GoogleCloudDialogflowV2EntityTypeEntity> =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    synonyms: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2EntityTypeEntity" });

export interface GoogleCloudDialogflowV2EntityType {
  entities?: ReadonlyArray<GoogleCloudDialogflowV2EntityTypeEntity>;
  enableFuzzyExtraction?: boolean;
  kind?:
    | "KIND_UNSPECIFIED"
    | "KIND_MAP"
    | "KIND_LIST"
    | "KIND_REGEXP"
    | (string & {});
  name?: string;
  autoExpansionMode?:
    | "AUTO_EXPANSION_MODE_UNSPECIFIED"
    | "AUTO_EXPANSION_MODE_DEFAULT"
    | (string & {});
  displayName?: string;
}

export const GoogleCloudDialogflowV2EntityType: Schema.Codec<GoogleCloudDialogflowV2EntityType> =
  /*@__PURE__*/ Schema.Struct({
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2EntityTypeEntity),
    ),
    enableFuzzyExtraction: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    autoExpansionMode: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2EntityType" });

export interface GoogleCloudDialogflowCxV3LlmModelSettings {
  model?: string;
  promptText?: string;
}

export const GoogleCloudDialogflowCxV3LlmModelSettings: Schema.Codec<GoogleCloudDialogflowCxV3LlmModelSettings> =
  /*@__PURE__*/ Schema.Struct({
    model: Schema.optional(Schema.String),
    promptText: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3LlmModelSettings" });

export interface GoogleCloudDialogflowCxV3Phrase {
  text?: string;
}

export const GoogleCloudDialogflowCxV3Phrase: Schema.Codec<GoogleCloudDialogflowCxV3Phrase> =
  /*@__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Phrase" });

export interface GoogleCloudDialogflowCxV3GeneratorModelParameter {
  temperature?: number;
  maxDecodeSteps?: number;
  topK?: number;
  topP?: number;
}

export const GoogleCloudDialogflowCxV3GeneratorModelParameter: Schema.Codec<GoogleCloudDialogflowCxV3GeneratorModelParameter> =
  /*@__PURE__*/ Schema.Struct({
    temperature: Schema.optional(Schema.Number),
    maxDecodeSteps: Schema.optional(Schema.Number),
    topK: Schema.optional(Schema.Number),
    topP: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3GeneratorModelParameter",
  });

export interface GoogleCloudDialogflowCxV3GeneratorPlaceholder {
  id?: string;
  name?: string;
}

export const GoogleCloudDialogflowCxV3GeneratorPlaceholder: Schema.Codec<GoogleCloudDialogflowCxV3GeneratorPlaceholder> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3GeneratorPlaceholder" });

export interface GoogleCloudDialogflowCxV3Generator {
  llmModelSettings?: GoogleCloudDialogflowCxV3LlmModelSettings;
  displayName?: string;
  name?: string;
  promptText?: GoogleCloudDialogflowCxV3Phrase;
  modelParameter?: GoogleCloudDialogflowCxV3GeneratorModelParameter;
  placeholders?: ReadonlyArray<GoogleCloudDialogflowCxV3GeneratorPlaceholder>;
}

export const GoogleCloudDialogflowCxV3Generator: Schema.Codec<GoogleCloudDialogflowCxV3Generator> =
  /*@__PURE__*/ Schema.Struct({
    llmModelSettings: Schema.optional(
      GoogleCloudDialogflowCxV3LlmModelSettings,
    ),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    promptText: Schema.optional(GoogleCloudDialogflowCxV3Phrase),
    modelParameter: Schema.optional(
      GoogleCloudDialogflowCxV3GeneratorModelParameter,
    ),
    placeholders: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3GeneratorPlaceholder),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Generator" });

export interface GoogleCloudDialogflowCxV3beta1RunContinuousTestMetadata {
  errors?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TestError>;
}

export const GoogleCloudDialogflowCxV3beta1RunContinuousTestMetadata: Schema.Codec<GoogleCloudDialogflowCxV3beta1RunContinuousTestMetadata> =
  /*@__PURE__*/ Schema.Struct({
    errors: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TestError),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RunContinuousTestMetadata",
  });

export interface GoogleCloudDialogflowCxV3ToolDataStoreToolFallbackPrompt {}

export const GoogleCloudDialogflowCxV3ToolDataStoreToolFallbackPrompt: Schema.Codec<GoogleCloudDialogflowCxV3ToolDataStoreToolFallbackPrompt> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ToolDataStoreToolFallbackPrompt",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageCardButton {
  postback?: string;
  text?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageCardButton: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageCardButton> =
  /*@__PURE__*/ Schema.Struct({
    postback: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageCardButton",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageCard {
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageCardButton>;
  title?: string;
  imageUri?: string;
  subtitle?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageCard: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageCard> =
  /*@__PURE__*/ Schema.Struct({
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageCardButton),
    ),
    title: Schema.optional(Schema.String),
    imageUri: Schema.optional(Schema.String),
    subtitle: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentMessageCard" });

export interface GoogleCloudDialogflowV2beta1IntentMessageImage {
  imageUri?: string;
  accessibilityText?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageImage: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageImage> =
  /*@__PURE__*/ Schema.Struct({
    imageUri: Schema.optional(Schema.String),
    accessibilityText: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentMessageImage" });

export interface GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction {
  url?: string;
  urlTypeHint?:
    | "URL_TYPE_HINT_UNSPECIFIED"
    | "AMP_ACTION"
    | "AMP_CONTENT"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction> =
  /*@__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    urlTypeHint: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem {
  description?: string;
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  footer?: string;
  title?: string;
  openUriAction?: GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;
}

export const GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem> =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
    footer: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    openUriAction: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard {
  items?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem>;
  imageDisplayOptions?:
    | "IMAGE_DISPLAY_OPTIONS_UNSPECIFIED"
    | "GRAY"
    | "WHITE"
    | "CROPPED"
    | "BLURRED_BACKGROUND"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard> =
  /*@__PURE__*/ Schema.Struct({
    items: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem,
      ),
    ),
    imageDisplayOptions: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech {
  text?: string;
  ssml?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech> =
  /*@__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    ssml: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply {
  postbackData?: string;
  text?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply> =
  /*@__PURE__*/ Schema.Struct({
    postbackData: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation {}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial {
  phoneNumber?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial> =
  /*@__PURE__*/ Schema.Struct({
    phoneNumber: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri {
  uri?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri> =
  /*@__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction {
  shareLocation?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation;
  postbackData?: string;
  dial?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial;
  text?: string;
  openUrl?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction> =
  /*@__PURE__*/ Schema.Struct({
    shareLocation: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation,
    ),
    postbackData: Schema.optional(Schema.String),
    dial: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial,
    ),
    text: Schema.optional(Schema.String),
    openUrl: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion {
  reply?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply;
  action?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion> =
  /*@__PURE__*/ Schema.Struct({
    reply: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply,
    ),
    action: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia {
  fileUri?: string;
  thumbnailUri?: string;
  height?: "HEIGHT_UNSPECIFIED" | "SHORT" | "MEDIUM" | "TALL" | (string & {});
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia> =
  /*@__PURE__*/ Schema.Struct({
    fileUri: Schema.optional(Schema.String),
    thumbnailUri: Schema.optional(Schema.String),
    height: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent {
  title?: string;
  description?: string;
  suggestions?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion>;
  media?: GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent> =
  /*@__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    suggestions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion),
    ),
    media: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard {
  cardContent?: GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent;
  cardOrientation?:
    | "CARD_ORIENTATION_UNSPECIFIED"
    | "HORIZONTAL"
    | "VERTICAL"
    | (string & {});
  thumbnailImageAlignment?:
    | "THUMBNAIL_IMAGE_ALIGNMENT_UNSPECIFIED"
    | "LEFT"
    | "RIGHT"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard> =
  /*@__PURE__*/ Schema.Struct({
    cardContent: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent,
    ),
    cardOrientation: Schema.optional(Schema.String),
    thumbnailImageAlignment: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageQuickReplies {
  title?: string;
  quickReplies?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageQuickReplies: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageQuickReplies> =
  /*@__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    quickReplies: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageQuickReplies",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction {
  uri?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction> =
  /*@__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton {
  title?: string;
  openUriAction?: GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction;
}

export const GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton> =
  /*@__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    openUriAction: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageBasicCard {
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton>;
  subtitle?: string;
  title?: string;
  formattedText?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageBasicCard: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageBasicCard> =
  /*@__PURE__*/ Schema.Struct({
    image: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton),
    ),
    subtitle: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    formattedText: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageBasicCard",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio {
  audioUri?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio> =
  /*@__PURE__*/ Schema.Struct({
    audioUri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageSuggestion {
  title?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageSuggestion: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageSuggestion> =
  /*@__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageSuggestion",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageSuggestions {
  suggestions?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageSuggestion>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageSuggestions: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageSuggestions> =
  /*@__PURE__*/ Schema.Struct({
    suggestions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageSuggestion),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageSuggestions",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject {
  description?: string;
  name?: string;
  icon?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  contentUrl?: string;
  largeImage?: GoogleCloudDialogflowV2beta1IntentMessageImage;
}

export const GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject> =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    icon: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
    contentUrl: Schema.optional(Schema.String),
    largeImage: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageMediaContent {
  mediaType?: "RESPONSE_MEDIA_TYPE_UNSPECIFIED" | "AUDIO" | (string & {});
  mediaObjects?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageMediaContent: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageMediaContent> =
  /*@__PURE__*/ Schema.Struct({
    mediaType: Schema.optional(Schema.String),
    mediaObjects: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageMediaContent",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall {
  phoneNumber?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall> =
  /*@__PURE__*/ Schema.Struct({
    phoneNumber: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageTableCardCell {
  text?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageTableCardCell: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageTableCardCell> =
  /*@__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageTableCardCell",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageTableCardRow {
  cells?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageTableCardCell>;
  dividerAfter?: boolean;
}

export const GoogleCloudDialogflowV2beta1IntentMessageTableCardRow: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageTableCardRow> =
  /*@__PURE__*/ Schema.Struct({
    cells: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageTableCardCell),
    ),
    dividerAfter: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageTableCardRow",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageColumnProperties {
  header?: string;
  horizontalAlignment?:
    | "HORIZONTAL_ALIGNMENT_UNSPECIFIED"
    | "LEADING"
    | "CENTER"
    | "TRAILING"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1IntentMessageColumnProperties: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageColumnProperties> =
  /*@__PURE__*/ Schema.Struct({
    header: Schema.optional(Schema.String),
    horizontalAlignment: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageColumnProperties",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageTableCard {
  subtitle?: string;
  title?: string;
  rows?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageTableCardRow>;
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton>;
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  columnProperties?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageColumnProperties>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageTableCard: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageTableCard> =
  /*@__PURE__*/ Schema.Struct({
    subtitle: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    rows: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageTableCardRow),
    ),
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton),
    ),
    image: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
    columnProperties: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageColumnProperties),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageTableCard",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo {
  key?: string;
  synonyms?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo> =
  /*@__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    synonyms: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem {
  title?: string;
  description?: string;
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  info?: GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo;
}

export const GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem> =
  /*@__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
    info: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect {
  items?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect> =
  /*@__PURE__*/ Schema.Struct({
    items: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageListSelectItem {
  info?: GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo;
  title?: string;
  description?: string;
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
}

export const GoogleCloudDialogflowV2beta1IntentMessageListSelectItem: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageListSelectItem> =
  /*@__PURE__*/ Schema.Struct({
    info: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo,
    ),
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageListSelectItem",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageListSelect {
  items?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageListSelectItem>;
  title?: string;
  subtitle?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageListSelect: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageListSelect> =
  /*@__PURE__*/ Schema.Struct({
    items: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageListSelectItem),
    ),
    title: Schema.optional(Schema.String),
    subtitle: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageListSelect",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion {
  destinationName?: string;
  uri?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion> =
  /*@__PURE__*/ Schema.Struct({
    destinationName: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmText {
  rbmSuggestion?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion>;
  text?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmText: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageRbmText> =
  /*@__PURE__*/ Schema.Struct({
    rbmSuggestion: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion),
    ),
    text: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageRbmText",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageText {
  text?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageText: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageText> =
  /*@__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentMessageText" });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard {
  cardContents?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent>;
  cardWidth?: "CARD_WIDTH_UNSPECIFIED" | "SMALL" | "MEDIUM" | (string & {});
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard> =
  /*@__PURE__*/ Schema.Struct({
    cardContents: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent),
    ),
    cardWidth: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse {
  textToSpeech?: string;
  displayText?: string;
  ssml?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse> =
  /*@__PURE__*/ Schema.Struct({
    textToSpeech: Schema.optional(Schema.String),
    displayText: Schema.optional(Schema.String),
    ssml: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses {
  simpleResponses?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses> =
  /*@__PURE__*/ Schema.Struct({
    simpleResponses: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessage {
  card?: GoogleCloudDialogflowV2beta1IntentMessageCard;
  platform?:
    | "PLATFORM_UNSPECIFIED"
    | "FACEBOOK"
    | "SLACK"
    | "TELEGRAM"
    | "KIK"
    | "SKYPE"
    | "LINE"
    | "VIBER"
    | "ACTIONS_ON_GOOGLE"
    | "TELEPHONY"
    | "GOOGLE_HANGOUTS"
    | (string & {});
  browseCarouselCard?: GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard;
  telephonySynthesizeSpeech?: GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech;
  rbmStandaloneRichCard?: GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard;
  quickReplies?: GoogleCloudDialogflowV2beta1IntentMessageQuickReplies;
  basicCard?: GoogleCloudDialogflowV2beta1IntentMessageBasicCard;
  telephonyPlayAudio?: GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio;
  suggestions?: GoogleCloudDialogflowV2beta1IntentMessageSuggestions;
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  mediaContent?: GoogleCloudDialogflowV2beta1IntentMessageMediaContent;
  telephonyTransferCall?: GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall;
  tableCard?: GoogleCloudDialogflowV2beta1IntentMessageTableCard;
  carouselSelect?: GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect;
  payload?: Record<string, unknown>;
  listSelect?: GoogleCloudDialogflowV2beta1IntentMessageListSelect;
  linkOutSuggestion?: GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion;
  rbmText?: GoogleCloudDialogflowV2beta1IntentMessageRbmText;
  text?: GoogleCloudDialogflowV2beta1IntentMessageText;
  rbmCarouselRichCard?: GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard;
  simpleResponses?: GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses;
}

export const GoogleCloudDialogflowV2beta1IntentMessage: Schema.Codec<GoogleCloudDialogflowV2beta1IntentMessage> =
  /*@__PURE__*/ Schema.Struct({
    card: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageCard),
    platform: Schema.optional(Schema.String),
    browseCarouselCard: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard,
    ),
    telephonySynthesizeSpeech: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech,
    ),
    rbmStandaloneRichCard: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard,
    ),
    quickReplies: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageQuickReplies,
    ),
    basicCard: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageBasicCard,
    ),
    telephonyPlayAudio: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio,
    ),
    suggestions: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageSuggestions,
    ),
    image: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
    mediaContent: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageMediaContent,
    ),
    telephonyTransferCall: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall,
    ),
    tableCard: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageTableCard,
    ),
    carouselSelect: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect,
    ),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    listSelect: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageListSelect,
    ),
    linkOutSuggestion: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion,
    ),
    rbmText: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageRbmText),
    text: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageText),
    rbmCarouselRichCard: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard,
    ),
    simpleResponses: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentMessage" });

export interface GoogleCloudDialogflowV2beta1EventInput {
  name?: string;
  languageCode?: string;
  parameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2beta1EventInput: Schema.Codec<GoogleCloudDialogflowV2beta1EventInput> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1EventInput" });

export interface GoogleCloudDialogflowV2beta1EntityTypeEntity {
  value?: string;
  synonyms?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1EntityTypeEntity: Schema.Codec<GoogleCloudDialogflowV2beta1EntityTypeEntity> =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    synonyms: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1EntityTypeEntity" });

export interface GoogleCloudDialogflowV2beta1SessionEntityType {
  entityOverrideMode?:
    | "ENTITY_OVERRIDE_MODE_UNSPECIFIED"
    | "ENTITY_OVERRIDE_MODE_OVERRIDE"
    | "ENTITY_OVERRIDE_MODE_SUPPLEMENT"
    | (string & {});
  entities?: ReadonlyArray<GoogleCloudDialogflowV2beta1EntityTypeEntity>;
  name?: string;
}

export const GoogleCloudDialogflowV2beta1SessionEntityType: Schema.Codec<GoogleCloudDialogflowV2beta1SessionEntityType> =
  /*@__PURE__*/ Schema.Struct({
    entityOverrideMode: Schema.optional(Schema.String),
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1EntityTypeEntity),
    ),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1SessionEntityType" });

export interface GoogleCloudDialogflowV2beta1Context {
  name?: string;
  lifespanCount?: number;
  parameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2beta1Context: Schema.Codec<GoogleCloudDialogflowV2beta1Context> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    lifespanCount: Schema.optional(Schema.Number),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1Context" });

export interface GoogleCloudDialogflowV2beta1WebhookResponse {
  endInteraction?: boolean;
  fulfillmentMessages?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessage>;
  payload?: Record<string, unknown>;
  liveAgentHandoff?: boolean;
  followupEventInput?: GoogleCloudDialogflowV2beta1EventInput;
  sessionEntityTypes?: ReadonlyArray<GoogleCloudDialogflowV2beta1SessionEntityType>;
  source?: string;
  fulfillmentText?: string;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2beta1Context>;
}

export const GoogleCloudDialogflowV2beta1WebhookResponse: Schema.Codec<GoogleCloudDialogflowV2beta1WebhookResponse> =
  /*@__PURE__*/ Schema.Struct({
    endInteraction: Schema.optional(Schema.Boolean),
    fulfillmentMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessage),
    ),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    liveAgentHandoff: Schema.optional(Schema.Boolean),
    followupEventInput: Schema.optional(GoogleCloudDialogflowV2beta1EventInput),
    sessionEntityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SessionEntityType),
    ),
    source: Schema.optional(Schema.String),
    fulfillmentText: Schema.optional(Schema.String),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1Context),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1WebhookResponse" });

export interface GoogleCloudDialogflowV2EncryptionSpec {
  kmsKey?: string;
  name?: string;
}

export const GoogleCloudDialogflowV2EncryptionSpec: Schema.Codec<GoogleCloudDialogflowV2EncryptionSpec> =
  /*@__PURE__*/ Schema.Struct({
    kmsKey: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2EncryptionSpec" });

export interface GoogleCloudDialogflowV2InitializeEncryptionSpecRequest {
  encryptionSpec?: GoogleCloudDialogflowV2EncryptionSpec;
}

export const GoogleCloudDialogflowV2InitializeEncryptionSpecRequest: Schema.Codec<GoogleCloudDialogflowV2InitializeEncryptionSpecRequest> =
  /*@__PURE__*/ Schema.Struct({
    encryptionSpec: Schema.optional(GoogleCloudDialogflowV2EncryptionSpec),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2InitializeEncryptionSpecRequest",
  });

export interface GoogleCloudDialogflowV2ServiceLatencyInternalServiceLatency {
  startTime?: string;
  step?: string;
  completeTime?: string;
  latencyMs?: number;
}

export const GoogleCloudDialogflowV2ServiceLatencyInternalServiceLatency: Schema.Codec<GoogleCloudDialogflowV2ServiceLatencyInternalServiceLatency> =
  /*@__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    step: Schema.optional(Schema.String),
    completeTime: Schema.optional(Schema.String),
    latencyMs: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ServiceLatencyInternalServiceLatency",
  });

export interface GoogleCloudDialogflowV2ServiceLatency {
  internalServiceLatencies?: ReadonlyArray<GoogleCloudDialogflowV2ServiceLatencyInternalServiceLatency>;
}

export const GoogleCloudDialogflowV2ServiceLatency: Schema.Codec<GoogleCloudDialogflowV2ServiceLatency> =
  /*@__PURE__*/ Schema.Struct({
    internalServiceLatencies: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2ServiceLatencyInternalServiceLatency),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ServiceLatency" });

export interface GoogleCloudDialogflowCxV3ToolFunctionTool {
  inputSchema?: Record<string, unknown>;
  outputSchema?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3ToolFunctionTool: Schema.Codec<GoogleCloudDialogflowCxV3ToolFunctionTool> =
  /*@__PURE__*/ Schema.Struct({
    inputSchema: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    outputSchema: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ToolFunctionTool" });

export interface GoogleCloudDialogflowCxV3TrainFlowRequest {}

export const GoogleCloudDialogflowCxV3TrainFlowRequest: Schema.Codec<GoogleCloudDialogflowCxV3TrainFlowRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3TrainFlowRequest",
  });

export interface GoogleCloudDialogflowCxV3ToolTLSConfigCACert {
  cert?: string;
  displayName?: string;
}

export const GoogleCloudDialogflowCxV3ToolTLSConfigCACert: Schema.Codec<GoogleCloudDialogflowCxV3ToolTLSConfigCACert> =
  /*@__PURE__*/ Schema.Struct({
    cert: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ToolTLSConfigCACert" });

export interface GoogleCloudDialogflowCxV3ToolTLSConfig {
  caCerts?: ReadonlyArray<GoogleCloudDialogflowCxV3ToolTLSConfigCACert>;
}

export const GoogleCloudDialogflowCxV3ToolTLSConfig: Schema.Codec<GoogleCloudDialogflowCxV3ToolTLSConfig> =
  /*@__PURE__*/ Schema.Struct({
    caCerts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ToolTLSConfigCACert),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ToolTLSConfig" });

export interface GoogleCloudDialogflowCxV3ToolServiceDirectoryConfig {
  service?: string;
}

export const GoogleCloudDialogflowCxV3ToolServiceDirectoryConfig: Schema.Codec<GoogleCloudDialogflowCxV3ToolServiceDirectoryConfig> =
  /*@__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ToolServiceDirectoryConfig",
  });

export interface GoogleCloudDialogflowCxV3ToolAuthenticationOAuthConfig {
  scopes?: ReadonlyArray<string>;
  oauthGrantType?:
    | "OAUTH_GRANT_TYPE_UNSPECIFIED"
    | "CLIENT_CREDENTIAL"
    | (string & {});
  secretVersionForClientSecret?: string;
  clientId?: string;
  tokenEndpoint?: string;
  clientSecret?: string;
}

export const GoogleCloudDialogflowCxV3ToolAuthenticationOAuthConfig: Schema.Codec<GoogleCloudDialogflowCxV3ToolAuthenticationOAuthConfig> =
  /*@__PURE__*/ Schema.Struct({
    scopes: Schema.optional(Schema.Array(Schema.String)),
    oauthGrantType: Schema.optional(Schema.String),
    secretVersionForClientSecret: Schema.optional(Schema.String),
    clientId: Schema.optional(Schema.String),
    tokenEndpoint: Schema.optional(Schema.String),
    clientSecret: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ToolAuthenticationOAuthConfig",
  });

export interface GoogleCloudDialogflowCxV3ToolAuthenticationBearerTokenConfig {
  token?: string;
  secretVersionForToken?: string;
}

export const GoogleCloudDialogflowCxV3ToolAuthenticationBearerTokenConfig: Schema.Codec<GoogleCloudDialogflowCxV3ToolAuthenticationBearerTokenConfig> =
  /*@__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String),
    secretVersionForToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ToolAuthenticationBearerTokenConfig",
  });

export interface GoogleCloudDialogflowCxV3ToolAuthenticationServiceAccountAuthConfig {
  serviceAccount?: string;
}

export const GoogleCloudDialogflowCxV3ToolAuthenticationServiceAccountAuthConfig: Schema.Codec<GoogleCloudDialogflowCxV3ToolAuthenticationServiceAccountAuthConfig> =
  /*@__PURE__*/ Schema.Struct({
    serviceAccount: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3ToolAuthenticationServiceAccountAuthConfig",
  });

export interface GoogleCloudDialogflowCxV3ToolAuthenticationApiKeyConfig {
  keyName?: string;
  apiKey?: string;
  secretVersionForApiKey?: string;
  requestLocation?:
    | "REQUEST_LOCATION_UNSPECIFIED"
    | "HEADER"
    | "QUERY_STRING"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3ToolAuthenticationApiKeyConfig: Schema.Codec<GoogleCloudDialogflowCxV3ToolAuthenticationApiKeyConfig> =
  /*@__PURE__*/ Schema.Struct({
    keyName: Schema.optional(Schema.String),
    apiKey: Schema.optional(Schema.String),
    secretVersionForApiKey: Schema.optional(Schema.String),
    requestLocation: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ToolAuthenticationApiKeyConfig",
  });

export interface GoogleCloudDialogflowCxV3ToolAuthentication {
  oauthConfig?: GoogleCloudDialogflowCxV3ToolAuthenticationOAuthConfig;
  serviceAgentAuthConfig?: GoogleCloudDialogflowCxV3ToolAuthenticationServiceAgentAuthConfig;
  bearerTokenConfig?: GoogleCloudDialogflowCxV3ToolAuthenticationBearerTokenConfig;
  serviceAccountAuthConfig?: GoogleCloudDialogflowCxV3ToolAuthenticationServiceAccountAuthConfig;
  apiKeyConfig?: GoogleCloudDialogflowCxV3ToolAuthenticationApiKeyConfig;
}

export const GoogleCloudDialogflowCxV3ToolAuthentication: Schema.Codec<GoogleCloudDialogflowCxV3ToolAuthentication> =
  /*@__PURE__*/ Schema.Struct({
    oauthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3ToolAuthenticationOAuthConfig,
    ),
    serviceAgentAuthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3ToolAuthenticationServiceAgentAuthConfig,
    ),
    bearerTokenConfig: Schema.optional(
      GoogleCloudDialogflowCxV3ToolAuthenticationBearerTokenConfig,
    ),
    serviceAccountAuthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3ToolAuthenticationServiceAccountAuthConfig,
    ),
    apiKeyConfig: Schema.optional(
      GoogleCloudDialogflowCxV3ToolAuthenticationApiKeyConfig,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ToolAuthentication" });

export interface GoogleCloudDialogflowCxV3ToolOpenApiTool {
  textSchema?: string;
  tlsConfig?: GoogleCloudDialogflowCxV3ToolTLSConfig;
  serviceDirectoryConfig?: GoogleCloudDialogflowCxV3ToolServiceDirectoryConfig;
  authentication?: GoogleCloudDialogflowCxV3ToolAuthentication;
}

export const GoogleCloudDialogflowCxV3ToolOpenApiTool: Schema.Codec<GoogleCloudDialogflowCxV3ToolOpenApiTool> =
  /*@__PURE__*/ Schema.Struct({
    textSchema: Schema.optional(Schema.String),
    tlsConfig: Schema.optional(GoogleCloudDialogflowCxV3ToolTLSConfig),
    serviceDirectoryConfig: Schema.optional(
      GoogleCloudDialogflowCxV3ToolServiceDirectoryConfig,
    ),
    authentication: Schema.optional(
      GoogleCloudDialogflowCxV3ToolAuthentication,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ToolOpenApiTool" });

export interface GoogleCloudDialogflowCxV3DataStoreConnection {
  dataStoreType?:
    | "DATA_STORE_TYPE_UNSPECIFIED"
    | "PUBLIC_WEB"
    | "UNSTRUCTURED"
    | "STRUCTURED"
    | (string & {});
  dataStore?: string;
  documentProcessingMode?:
    | "DOCUMENT_PROCESSING_MODE_UNSPECIFIED"
    | "DOCUMENTS"
    | "CHUNKS"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3DataStoreConnection: Schema.Codec<GoogleCloudDialogflowCxV3DataStoreConnection> =
  /*@__PURE__*/ Schema.Struct({
    dataStoreType: Schema.optional(Schema.String),
    dataStore: Schema.optional(Schema.String),
    documentProcessingMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3DataStoreConnection" });

export interface GoogleCloudDialogflowCxV3ToolDataStoreTool {
  fallbackPrompt?: GoogleCloudDialogflowCxV3ToolDataStoreToolFallbackPrompt;
  dataStoreConnections?: ReadonlyArray<GoogleCloudDialogflowCxV3DataStoreConnection>;
}

export const GoogleCloudDialogflowCxV3ToolDataStoreTool: Schema.Codec<GoogleCloudDialogflowCxV3ToolDataStoreTool> =
  /*@__PURE__*/ Schema.Struct({
    fallbackPrompt: Schema.optional(
      GoogleCloudDialogflowCxV3ToolDataStoreToolFallbackPrompt,
    ),
    dataStoreConnections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3DataStoreConnection),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ToolDataStoreTool" });

export interface GoogleCloudDialogflowCxV3Tool {
  name?: string;
  openApiSpec?: GoogleCloudDialogflowCxV3ToolOpenApiTool;
  displayName?: string;
  description?: string;
  functionSpec?: GoogleCloudDialogflowCxV3ToolFunctionTool;
  dataStoreSpec?: GoogleCloudDialogflowCxV3ToolDataStoreTool;
  toolType?:
    | "TOOL_TYPE_UNSPECIFIED"
    | "CUSTOMIZED_TOOL"
    | "BUILTIN_TOOL"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3Tool: Schema.Codec<GoogleCloudDialogflowCxV3Tool> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    openApiSpec: Schema.optional(GoogleCloudDialogflowCxV3ToolOpenApiTool),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    functionSpec: Schema.optional(GoogleCloudDialogflowCxV3ToolFunctionTool),
    dataStoreSpec: Schema.optional(GoogleCloudDialogflowCxV3ToolDataStoreTool),
    toolType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Tool" });

export interface GoogleCloudDialogflowCxV3ToolVersion {
  updateTime?: string;
  name?: string;
  displayName?: string;
  createTime?: string;
  tool?: GoogleCloudDialogflowCxV3Tool;
}

export const GoogleCloudDialogflowCxV3ToolVersion: Schema.Codec<GoogleCloudDialogflowCxV3ToolVersion> =
  /*@__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    tool: Schema.optional(GoogleCloudDialogflowCxV3Tool),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ToolVersion" });

export interface GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfoIngestedParameterDebugInfo {
  parameter?: string;
  ingestionStatus?:
    | "INGESTION_STATUS_UNSPECIFIED"
    | "INGESTION_STATUS_SUCCEEDED"
    | "INGESTION_STATUS_CONTEXT_NOT_AVAILABLE"
    | "INGESTION_STATUS_PARSE_FAILED"
    | "INGESTION_STATUS_INVALID_ENTRY"
    | "INGESTION_STATUS_INVALID_FORMAT"
    | "INGESTION_STATUS_LANGUAGE_MISMATCH"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfoIngestedParameterDebugInfo: Schema.Codec<GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfoIngestedParameterDebugInfo> =
  /*@__PURE__*/ Schema.Struct({
    parameter: Schema.optional(Schema.String),
    ingestionStatus: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfoIngestedParameterDebugInfo",
  });

export interface GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfo {
  projectNotAllowlisted?: boolean;
  contextReferenceRetrieved?: boolean;
  ingestedParametersDebugInfo?: ReadonlyArray<GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfoIngestedParameterDebugInfo>;
}

export const GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfo: Schema.Codec<GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfo> =
  /*@__PURE__*/ Schema.Struct({
    projectNotAllowlisted: Schema.optional(Schema.Boolean),
    contextReferenceRetrieved: Schema.optional(Schema.Boolean),
    ingestedParametersDebugInfo: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfoIngestedParameterDebugInfo,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfo",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior {
  previousQueriesIncluded?: boolean;
  invalidItemsQuerySuggestionSkipped?: boolean;
  returnQueryOnly?: boolean;
  queryGenerationAgentLanguageMismatch?: boolean;
  primaryQueryRedactedAndReplaced?: boolean;
  disableSyncDelivery?: boolean;
  useCustomSafetyFilterLevel?: boolean;
  queryGenerationEndUserLanguageMismatch?: boolean;
  endUserMetadataIncluded?: boolean;
  thirdPartyConnectorAllowed?: boolean;
  answerGenerationRewriterOn?: boolean;
  usePubsubDelivery?: boolean;
  appendedSearchContextCount?: number;
  conversationTranscriptHasMixedLanguages?: boolean;
  multipleQueriesGenerated?: boolean;
  queryContainedSearchContext?: boolean;
  useTranslatedMessage?: boolean;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior: Schema.Codec<GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior> =
  /*@__PURE__*/ Schema.Struct({
    previousQueriesIncluded: Schema.optional(Schema.Boolean),
    invalidItemsQuerySuggestionSkipped: Schema.optional(Schema.Boolean),
    returnQueryOnly: Schema.optional(Schema.Boolean),
    queryGenerationAgentLanguageMismatch: Schema.optional(Schema.Boolean),
    primaryQueryRedactedAndReplaced: Schema.optional(Schema.Boolean),
    disableSyncDelivery: Schema.optional(Schema.Boolean),
    useCustomSafetyFilterLevel: Schema.optional(Schema.Boolean),
    queryGenerationEndUserLanguageMismatch: Schema.optional(Schema.Boolean),
    endUserMetadataIncluded: Schema.optional(Schema.Boolean),
    thirdPartyConnectorAllowed: Schema.optional(Schema.Boolean),
    answerGenerationRewriterOn: Schema.optional(Schema.Boolean),
    usePubsubDelivery: Schema.optional(Schema.Boolean),
    appendedSearchContextCount: Schema.optional(Schema.Number),
    conversationTranscriptHasMixedLanguages: Schema.optional(Schema.Boolean),
    multipleQueriesGenerated: Schema.optional(Schema.Boolean),
    queryContainedSearchContext: Schema.optional(Schema.Boolean),
    useTranslatedMessage: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior",
  });

export interface GoogleCloudDialogflowV2beta1ServiceLatencyInternalServiceLatency {
  step?: string;
  completeTime?: string;
  startTime?: string;
  latencyMs?: number;
}

export const GoogleCloudDialogflowV2beta1ServiceLatencyInternalServiceLatency: Schema.Codec<GoogleCloudDialogflowV2beta1ServiceLatencyInternalServiceLatency> =
  /*@__PURE__*/ Schema.Struct({
    step: Schema.optional(Schema.String),
    completeTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    latencyMs: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1ServiceLatencyInternalServiceLatency",
  });

export interface GoogleCloudDialogflowV2beta1ServiceLatency {
  internalServiceLatencies?: ReadonlyArray<GoogleCloudDialogflowV2beta1ServiceLatencyInternalServiceLatency>;
}

export const GoogleCloudDialogflowV2beta1ServiceLatency: Schema.Codec<GoogleCloudDialogflowV2beta1ServiceLatency> =
  /*@__PURE__*/ Schema.Struct({
    internalServiceLatencies: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1ServiceLatencyInternalServiceLatency,
      ),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ServiceLatency" });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoQueryGenerationDebugInfo {
  promptTokenCount?: number;
  candidatesTokenCount?: number;
  totalTokenCount?: number;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoQueryGenerationDebugInfo: Schema.Codec<GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoQueryGenerationDebugInfo> =
  /*@__PURE__*/ Schema.Struct({
    promptTokenCount: Schema.optional(Schema.Number),
    candidatesTokenCount: Schema.optional(Schema.Number),
    totalTokenCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoQueryGenerationDebugInfo",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfo {
  cesDebugInfo?: Record<string, unknown>;
  queryCategorizationFailureReason?:
    | "QUERY_CATEGORIZATION_FAILURE_REASON_UNSPECIFIED"
    | "QUERY_CATEGORIZATION_INVALID_CONFIG"
    | "QUERY_CATEGORIZATION_RESULT_NOT_FOUND"
    | "QUERY_CATEGORIZATION_FAILED"
    | (string & {});
  datastoreResponseReason?:
    | "DATASTORE_RESPONSE_REASON_UNSPECIFIED"
    | "NONE"
    | "SEARCH_OUT_OF_QUOTA"
    | "SEARCH_EMPTY_RESULTS"
    | "ANSWER_GENERATION_GEN_AI_DISABLED"
    | "ANSWER_GENERATION_OUT_OF_QUOTA"
    | "ANSWER_GENERATION_ERROR"
    | "ANSWER_GENERATION_NOT_ENOUGH_INFO"
    | "ANSWER_GENERATION_RAI_FAILED"
    | "ANSWER_GENERATION_NOT_GROUNDED"
    | (string & {});
  ingestedContextReferenceDebugInfo?: GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfo;
  knowledgeAssistBehavior?: GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior;
  serviceLatency?: GoogleCloudDialogflowV2beta1ServiceLatency;
  queryGenerationFailureReason?:
    | "QUERY_GENERATION_FAILURE_REASON_UNSPECIFIED"
    | "QUERY_GENERATION_OUT_OF_QUOTA"
    | "QUERY_GENERATION_FAILED"
    | "QUERY_GENERATION_NO_QUERY_GENERATED"
    | "QUERY_GENERATION_RAI_FAILED"
    | "NOT_IN_ALLOWLIST"
    | "QUERY_GENERATION_QUERY_REDACTED"
    | "QUERY_GENERATION_LLM_RESPONSE_PARSE_FAILED"
    | "QUERY_GENERATION_EMPTY_CONVERSATION"
    | "QUERY_GENERATION_EMPTY_LAST_MESSAGE"
    | "QUERY_GENERATION_TRIGGERING_EVENT_CONDITION_NOT_MET"
    | (string & {});
  queryGenerationDebugInfo?: GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoQueryGenerationDebugInfo;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfo: Schema.Codec<GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfo> =
  /*@__PURE__*/ Schema.Struct({
    cesDebugInfo: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    queryCategorizationFailureReason: Schema.optional(Schema.String),
    datastoreResponseReason: Schema.optional(Schema.String),
    ingestedContextReferenceDebugInfo: Schema.optional(
      GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfo,
    ),
    knowledgeAssistBehavior: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior,
    ),
    serviceLatency: Schema.optional(GoogleCloudDialogflowV2beta1ServiceLatency),
    queryGenerationFailureReason: Schema.optional(Schema.String),
    queryGenerationDebugInfo: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoQueryGenerationDebugInfo,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfo",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet {
  uri?: string;
  text?: string;
  title?: string;
  metadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet: Schema.Codec<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet> =
  /*@__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource {
  snippets?: ReadonlyArray<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet>;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource: Schema.Codec<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource> =
  /*@__PURE__*/ Schema.Struct({
    snippets: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerFaqSource {
  question?: string;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerFaqSource: Schema.Codec<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerFaqSource> =
  /*@__PURE__*/ Schema.Struct({
    question: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerFaqSource",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerEventSource {
  event?: string;
  snippets?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerEventSource: Schema.Codec<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerEventSource> =
  /*@__PURE__*/ Schema.Struct({
    event: Schema.optional(Schema.String),
    snippets: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerEventSource",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswer {
  playbookSource?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource;
  answerText?: string;
  generativeSource?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource;
  faqSource?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerFaqSource;
  eventSource?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerEventSource;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswer: Schema.Codec<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswer> =
  /*@__PURE__*/ Schema.Struct({
    playbookSource: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource,
    ),
    answerText: Schema.optional(Schema.String),
    generativeSource: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource,
    ),
    faqSource: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerFaqSource,
    ),
    eventSource: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerEventSource,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswer",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistAnswer {
  answerRecord?: string;
  knowledgeAssistDebugInfo?: GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfo;
  suggestedQuery?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuery;
  suggestedQueryAnswer?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswer;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswer: Schema.Codec<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswer> =
  /*@__PURE__*/ Schema.Struct({
    answerRecord: Schema.optional(Schema.String),
    knowledgeAssistDebugInfo: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfo,
    ),
    suggestedQuery: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuery,
    ),
    suggestedQueryAnswer: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswer,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1KnowledgeAssistAnswer",
  });

export interface GoogleCloudDialogflowCxV3TransitionRoute {
  intent?: string;
  condition?: string;
  targetFlow?: string;
  targetPage?: string;
  name?: string;
  description?: string;
  triggerFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
}

export const GoogleCloudDialogflowCxV3TransitionRoute: Schema.Codec<GoogleCloudDialogflowCxV3TransitionRoute> =
  /*@__PURE__*/ Schema.Struct({
    intent: Schema.optional(Schema.String),
    condition: Schema.optional(Schema.String),
    targetFlow: Schema.optional(Schema.String),
    targetPage: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    triggerFulfillment: Schema.optional(GoogleCloudDialogflowCxV3Fulfillment),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TransitionRoute" });

export interface GoogleCloudDialogflowCxV3KnowledgeConnectorSettings {
  targetFlow?: string;
  targetPage?: string;
  enabled?: boolean;
  triggerFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
  dataStoreConnections?: ReadonlyArray<GoogleCloudDialogflowCxV3DataStoreConnection>;
}

export const GoogleCloudDialogflowCxV3KnowledgeConnectorSettings: Schema.Codec<GoogleCloudDialogflowCxV3KnowledgeConnectorSettings> =
  /*@__PURE__*/ Schema.Struct({
    targetFlow: Schema.optional(Schema.String),
    targetPage: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    triggerFulfillment: Schema.optional(GoogleCloudDialogflowCxV3Fulfillment),
    dataStoreConnections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3DataStoreConnection),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3KnowledgeConnectorSettings",
  });

export interface GoogleCloudDialogflowCxV3Page {
  name?: string;
  displayName?: string;
  entryFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
  transitionRouteGroups?: ReadonlyArray<string>;
  advancedSettings?: GoogleCloudDialogflowCxV3AdvancedSettings;
  description?: string;
  eventHandlers?: ReadonlyArray<GoogleCloudDialogflowCxV3EventHandler>;
  form?: GoogleCloudDialogflowCxV3Form;
  transitionRoutes?: ReadonlyArray<GoogleCloudDialogflowCxV3TransitionRoute>;
  knowledgeConnectorSettings?: GoogleCloudDialogflowCxV3KnowledgeConnectorSettings;
}

export const GoogleCloudDialogflowCxV3Page: Schema.Codec<GoogleCloudDialogflowCxV3Page> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    entryFulfillment: Schema.optional(GoogleCloudDialogflowCxV3Fulfillment),
    transitionRouteGroups: Schema.optional(Schema.Array(Schema.String)),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettings,
    ),
    description: Schema.optional(Schema.String),
    eventHandlers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3EventHandler),
    ),
    form: Schema.optional(GoogleCloudDialogflowCxV3Form),
    transitionRoutes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3TransitionRoute),
    ),
    knowledgeConnectorSettings: Schema.optional(
      GoogleCloudDialogflowCxV3KnowledgeConnectorSettings,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Page" });

export interface GoogleCloudDialogflowCxV3FlowMultiLanguageSettings {
  enableMultiLanguageDetection?: boolean;
  supportedResponseLanguageCodes?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3FlowMultiLanguageSettings: Schema.Codec<GoogleCloudDialogflowCxV3FlowMultiLanguageSettings> =
  /*@__PURE__*/ Schema.Struct({
    enableMultiLanguageDetection: Schema.optional(Schema.Boolean),
    supportedResponseLanguageCodes: Schema.optional(
      Schema.Array(Schema.String),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3FlowMultiLanguageSettings",
  });

export interface GoogleCloudDialogflowCxV3NluSettings {
  classificationThreshold?: number;
  modelTrainingMode?:
    | "MODEL_TRAINING_MODE_UNSPECIFIED"
    | "MODEL_TRAINING_MODE_AUTOMATIC"
    | "MODEL_TRAINING_MODE_MANUAL"
    | (string & {});
  modelType?:
    | "MODEL_TYPE_UNSPECIFIED"
    | "MODEL_TYPE_STANDARD"
    | "MODEL_TYPE_ADVANCED"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3NluSettings: Schema.Codec<GoogleCloudDialogflowCxV3NluSettings> =
  /*@__PURE__*/ Schema.Struct({
    classificationThreshold: Schema.optional(Schema.Number),
    modelTrainingMode: Schema.optional(Schema.String),
    modelType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3NluSettings" });

export interface GoogleCloudDialogflowCxV3InlineSchema {
  type?:
    | "DATA_TYPE_UNSPECIFIED"
    | "STRING"
    | "NUMBER"
    | "BOOLEAN"
    | "ARRAY"
    | (string & {});
  items?: GoogleCloudDialogflowCxV3TypeSchema;
}

export const GoogleCloudDialogflowCxV3InlineSchema: Schema.Codec<GoogleCloudDialogflowCxV3InlineSchema> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      type: Schema.optional(Schema.String),
      items: Schema.optional(GoogleCloudDialogflowCxV3TypeSchema),
    }),
  ).annotate({
    identifier: "GoogleCloudDialogflowCxV3InlineSchema",
  }) as any as Schema.Codec<GoogleCloudDialogflowCxV3InlineSchema>;

export interface GoogleCloudDialogflowCxV3TypeSchemaSchemaReference {
  tool?: string;
  schema?: string;
}

export const GoogleCloudDialogflowCxV3TypeSchemaSchemaReference: Schema.Codec<GoogleCloudDialogflowCxV3TypeSchemaSchemaReference> =
  /*@__PURE__*/ Schema.Struct({
    tool: Schema.optional(Schema.String),
    schema: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3TypeSchemaSchemaReference",
  });

export interface GoogleCloudDialogflowCxV3TypeSchema {
  inlineSchema?: GoogleCloudDialogflowCxV3InlineSchema;
  schemaReference?: GoogleCloudDialogflowCxV3TypeSchemaSchemaReference;
}

export const GoogleCloudDialogflowCxV3TypeSchema: Schema.Codec<GoogleCloudDialogflowCxV3TypeSchema> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      inlineSchema: Schema.optional(GoogleCloudDialogflowCxV3InlineSchema),
      schemaReference: Schema.optional(
        GoogleCloudDialogflowCxV3TypeSchemaSchemaReference,
      ),
    }),
  ).annotate({
    identifier: "GoogleCloudDialogflowCxV3TypeSchema",
  }) as any as Schema.Codec<GoogleCloudDialogflowCxV3TypeSchema>;

export interface GoogleCloudDialogflowCxV3ParameterDefinition {
  type?:
    | "PARAMETER_TYPE_UNSPECIFIED"
    | "STRING"
    | "NUMBER"
    | "BOOLEAN"
    | "NULL"
    | "OBJECT"
    | "LIST"
    | (string & {});
  typeSchema?: GoogleCloudDialogflowCxV3TypeSchema;
  name?: string;
  description?: string;
}

export const GoogleCloudDialogflowCxV3ParameterDefinition: Schema.Codec<GoogleCloudDialogflowCxV3ParameterDefinition> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    typeSchema: Schema.optional(GoogleCloudDialogflowCxV3TypeSchema),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ParameterDefinition" });

export interface GoogleCloudDialogflowCxV3Flow {
  multiLanguageSettings?: GoogleCloudDialogflowCxV3FlowMultiLanguageSettings;
  name?: string;
  eventHandlers?: ReadonlyArray<GoogleCloudDialogflowCxV3EventHandler>;
  advancedSettings?: GoogleCloudDialogflowCxV3AdvancedSettings;
  description?: string;
  nluSettings?: GoogleCloudDialogflowCxV3NluSettings;
  outputParameterDefinitions?: ReadonlyArray<GoogleCloudDialogflowCxV3ParameterDefinition>;
  displayName?: string;
  knowledgeConnectorSettings?: GoogleCloudDialogflowCxV3KnowledgeConnectorSettings;
  transitionRoutes?: ReadonlyArray<GoogleCloudDialogflowCxV3TransitionRoute>;
  locked?: boolean;
  inputParameterDefinitions?: ReadonlyArray<GoogleCloudDialogflowCxV3ParameterDefinition>;
  transitionRouteGroups?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3Flow: Schema.Codec<GoogleCloudDialogflowCxV3Flow> =
  /*@__PURE__*/ Schema.Struct({
    multiLanguageSettings: Schema.optional(
      GoogleCloudDialogflowCxV3FlowMultiLanguageSettings,
    ),
    name: Schema.optional(Schema.String),
    eventHandlers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3EventHandler),
    ),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettings,
    ),
    description: Schema.optional(Schema.String),
    nluSettings: Schema.optional(GoogleCloudDialogflowCxV3NluSettings),
    outputParameterDefinitions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ParameterDefinition),
    ),
    displayName: Schema.optional(Schema.String),
    knowledgeConnectorSettings: Schema.optional(
      GoogleCloudDialogflowCxV3KnowledgeConnectorSettings,
    ),
    transitionRoutes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3TransitionRoute),
    ),
    locked: Schema.optional(Schema.Boolean),
    inputParameterDefinitions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ParameterDefinition),
    ),
    transitionRouteGroups: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Flow" });

export interface GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode {
  page?: GoogleCloudDialogflowCxV3Page;
  flow?: GoogleCloudDialogflowCxV3Flow;
}

export const GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode: Schema.Codec<GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode> =
  /*@__PURE__*/ Schema.Struct({
    page: Schema.optional(GoogleCloudDialogflowCxV3Page),
    flow: Schema.optional(GoogleCloudDialogflowCxV3Flow),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode",
  });

export interface GoogleCloudDialogflowCxV3TransitionCoverageTransition {
  transitionRoute?: GoogleCloudDialogflowCxV3TransitionRoute;
  target?: GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode;
  eventHandler?: GoogleCloudDialogflowCxV3EventHandler;
  index?: number;
  source?: GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode;
  covered?: boolean;
}

export const GoogleCloudDialogflowCxV3TransitionCoverageTransition: Schema.Codec<GoogleCloudDialogflowCxV3TransitionCoverageTransition> =
  /*@__PURE__*/ Schema.Struct({
    transitionRoute: Schema.optional(GoogleCloudDialogflowCxV3TransitionRoute),
    target: Schema.optional(
      GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode,
    ),
    eventHandler: Schema.optional(GoogleCloudDialogflowCxV3EventHandler),
    index: Schema.optional(Schema.Number),
    source: Schema.optional(
      GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode,
    ),
    covered: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3TransitionCoverageTransition",
  });

export interface GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment {
  audio?: string;
  uri?: string;
  allowPlaybackInterruption?: boolean;
}

export const GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment: Schema.Codec<GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment> =
  /*@__PURE__*/ Schema.Struct({
    audio: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment",
  });

export interface GoogleCloudDialogflowV2SessionEntityType {
  entityOverrideMode?:
    | "ENTITY_OVERRIDE_MODE_UNSPECIFIED"
    | "ENTITY_OVERRIDE_MODE_OVERRIDE"
    | "ENTITY_OVERRIDE_MODE_SUPPLEMENT"
    | (string & {});
  name?: string;
  entities?: ReadonlyArray<GoogleCloudDialogflowV2EntityTypeEntity>;
}

export const GoogleCloudDialogflowV2SessionEntityType: Schema.Codec<GoogleCloudDialogflowV2SessionEntityType> =
  /*@__PURE__*/ Schema.Struct({
    entityOverrideMode: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2EntityTypeEntity),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SessionEntityType" });

export interface GoogleCloudDialogflowV2beta1ResponseMessageText {
  text?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1ResponseMessageText: Schema.Codec<GoogleCloudDialogflowV2beta1ResponseMessageText> =
  /*@__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ResponseMessageText",
  });

export interface GoogleCloudDialogflowCxV3IntentCoverageIntent {
  intent?: string;
  covered?: boolean;
}

export const GoogleCloudDialogflowCxV3IntentCoverageIntent: Schema.Codec<GoogleCloudDialogflowCxV3IntentCoverageIntent> =
  /*@__PURE__*/ Schema.Struct({
    intent: Schema.optional(Schema.String),
    covered: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3IntentCoverageIntent" });

export interface GoogleCloudDialogflowCxV3IntentCoverage {
  coverageScore?: number;
  intents?: ReadonlyArray<GoogleCloudDialogflowCxV3IntentCoverageIntent>;
}

export const GoogleCloudDialogflowCxV3IntentCoverage: Schema.Codec<GoogleCloudDialogflowCxV3IntentCoverage> =
  /*@__PURE__*/ Schema.Struct({
    coverageScore: Schema.optional(Schema.Number),
    intents: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3IntentCoverageIntent),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3IntentCoverage" });

export interface GoogleCloudDialogflowCxV3TransitionCoverage {
  coverageScore?: number;
  transitions?: ReadonlyArray<GoogleCloudDialogflowCxV3TransitionCoverageTransition>;
}

export const GoogleCloudDialogflowCxV3TransitionCoverage: Schema.Codec<GoogleCloudDialogflowCxV3TransitionCoverage> =
  /*@__PURE__*/ Schema.Struct({
    coverageScore: Schema.optional(Schema.Number),
    transitions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3TransitionCoverageTransition),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TransitionCoverage" });

export interface GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition {
  covered?: boolean;
  transitionRoute?: GoogleCloudDialogflowCxV3TransitionRoute;
}

export const GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition: Schema.Codec<GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition> =
  /*@__PURE__*/ Schema.Struct({
    covered: Schema.optional(Schema.Boolean),
    transitionRoute: Schema.optional(GoogleCloudDialogflowCxV3TransitionRoute),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition",
  });

export interface GoogleCloudDialogflowCxV3TransitionRouteGroup {
  displayName?: string;
  name?: string;
  transitionRoutes?: ReadonlyArray<GoogleCloudDialogflowCxV3TransitionRoute>;
}

export const GoogleCloudDialogflowCxV3TransitionRouteGroup: Schema.Codec<GoogleCloudDialogflowCxV3TransitionRouteGroup> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    transitionRoutes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3TransitionRoute),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TransitionRouteGroup" });

export interface GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverage {
  transitions?: ReadonlyArray<GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition>;
  routeGroup?: GoogleCloudDialogflowCxV3TransitionRouteGroup;
  coverageScore?: number;
}

export const GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverage: Schema.Codec<GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverage> =
  /*@__PURE__*/ Schema.Struct({
    transitions: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition,
      ),
    ),
    routeGroup: Schema.optional(GoogleCloudDialogflowCxV3TransitionRouteGroup),
    coverageScore: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverage",
  });

export interface GoogleCloudDialogflowCxV3TransitionRouteGroupCoverage {
  coverages?: ReadonlyArray<GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverage>;
  coverageScore?: number;
}

export const GoogleCloudDialogflowCxV3TransitionRouteGroupCoverage: Schema.Codec<GoogleCloudDialogflowCxV3TransitionRouteGroupCoverage> =
  /*@__PURE__*/ Schema.Struct({
    coverages: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverage,
      ),
    ),
    coverageScore: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3TransitionRouteGroupCoverage",
  });

export interface GoogleCloudDialogflowCxV3CalculateCoverageResponse {
  intentCoverage?: GoogleCloudDialogflowCxV3IntentCoverage;
  transitionCoverage?: GoogleCloudDialogflowCxV3TransitionCoverage;
  agent?: string;
  routeGroupCoverage?: GoogleCloudDialogflowCxV3TransitionRouteGroupCoverage;
}

export const GoogleCloudDialogflowCxV3CalculateCoverageResponse: Schema.Codec<GoogleCloudDialogflowCxV3CalculateCoverageResponse> =
  /*@__PURE__*/ Schema.Struct({
    intentCoverage: Schema.optional(GoogleCloudDialogflowCxV3IntentCoverage),
    transitionCoverage: Schema.optional(
      GoogleCloudDialogflowCxV3TransitionCoverage,
    ),
    agent: Schema.optional(Schema.String),
    routeGroupCoverage: Schema.optional(
      GoogleCloudDialogflowCxV3TransitionRouteGroupCoverage,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3CalculateCoverageResponse",
  });

export interface GoogleCloudDialogflowCxV3VoiceSelectionParams {
  ssmlGender?:
    | "SSML_VOICE_GENDER_UNSPECIFIED"
    | "SSML_VOICE_GENDER_MALE"
    | "SSML_VOICE_GENDER_FEMALE"
    | "SSML_VOICE_GENDER_NEUTRAL"
    | (string & {});
  name?: string;
}

export const GoogleCloudDialogflowCxV3VoiceSelectionParams: Schema.Codec<GoogleCloudDialogflowCxV3VoiceSelectionParams> =
  /*@__PURE__*/ Schema.Struct({
    ssmlGender: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3VoiceSelectionParams" });

export interface GoogleCloudDialogflowCxV3SynthesizeSpeechConfig {
  pitch?: number;
  effectsProfileId?: ReadonlyArray<string>;
  speakingRate?: number;
  volumeGainDb?: number;
  voice?: GoogleCloudDialogflowCxV3VoiceSelectionParams;
}

export const GoogleCloudDialogflowCxV3SynthesizeSpeechConfig: Schema.Codec<GoogleCloudDialogflowCxV3SynthesizeSpeechConfig> =
  /*@__PURE__*/ Schema.Struct({
    pitch: Schema.optional(Schema.Number),
    effectsProfileId: Schema.optional(Schema.Array(Schema.String)),
    speakingRate: Schema.optional(Schema.Number),
    volumeGainDb: Schema.optional(Schema.Number),
    voice: Schema.optional(GoogleCloudDialogflowCxV3VoiceSelectionParams),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3SynthesizeSpeechConfig",
  });

export interface GoogleCloudDialogflowCxV3OutputAudioConfig {
  sampleRateHertz?: number;
  synthesizeSpeechConfig?: GoogleCloudDialogflowCxV3SynthesizeSpeechConfig;
  audioEncoding?:
    | "OUTPUT_AUDIO_ENCODING_UNSPECIFIED"
    | "OUTPUT_AUDIO_ENCODING_LINEAR_16"
    | "OUTPUT_AUDIO_ENCODING_MP3"
    | "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS"
    | "OUTPUT_AUDIO_ENCODING_OGG_OPUS"
    | "OUTPUT_AUDIO_ENCODING_MULAW"
    | "OUTPUT_AUDIO_ENCODING_ALAW"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3OutputAudioConfig: Schema.Codec<GoogleCloudDialogflowCxV3OutputAudioConfig> =
  /*@__PURE__*/ Schema.Struct({
    sampleRateHertz: Schema.optional(Schema.Number),
    synthesizeSpeechConfig: Schema.optional(
      GoogleCloudDialogflowCxV3SynthesizeSpeechConfig,
    ),
    audioEncoding: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3OutputAudioConfig" });

export interface GoogleCloudDialogflowCxV3beta1RunTestCaseMetadata {}

export const GoogleCloudDialogflowCxV3beta1RunTestCaseMetadata: Schema.Codec<GoogleCloudDialogflowCxV3beta1RunTestCaseMetadata> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RunTestCaseMetadata",
  });

export interface GoogleCloudDialogflowCxV3IntentParameter {
  id?: string;
  entityType?: string;
  redact?: boolean;
  isList?: boolean;
}

export const GoogleCloudDialogflowCxV3IntentParameter: Schema.Codec<GoogleCloudDialogflowCxV3IntentParameter> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    entityType: Schema.optional(Schema.String),
    redact: Schema.optional(Schema.Boolean),
    isList: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3IntentParameter" });

export interface GoogleCloudDialogflowCxV3ResourceName {
  displayName?: string;
  name?: string;
}

export const GoogleCloudDialogflowCxV3ResourceName: Schema.Codec<GoogleCloudDialogflowCxV3ResourceName> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ResourceName" });

export interface GoogleCloudDialogflowCxV3ValidationMessage {
  resources?: ReadonlyArray<string>;
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "INFO"
    | "WARNING"
    | "ERROR"
    | (string & {});
  detail?: string;
  resourceType?:
    | "RESOURCE_TYPE_UNSPECIFIED"
    | "AGENT"
    | "INTENT"
    | "INTENT_TRAINING_PHRASE"
    | "INTENT_PARAMETER"
    | "INTENTS"
    | "INTENT_TRAINING_PHRASES"
    | "ENTITY_TYPE"
    | "ENTITY_TYPES"
    | "WEBHOOK"
    | "FLOW"
    | "PAGE"
    | "PAGES"
    | "TRANSITION_ROUTE_GROUP"
    | "AGENT_TRANSITION_ROUTE_GROUP"
    | (string & {});
  resourceNames?: ReadonlyArray<GoogleCloudDialogflowCxV3ResourceName>;
}

export const GoogleCloudDialogflowCxV3ValidationMessage: Schema.Codec<GoogleCloudDialogflowCxV3ValidationMessage> =
  /*@__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(Schema.String)),
    severity: Schema.optional(Schema.String),
    detail: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
    resourceNames: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ResourceName),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ValidationMessage" });

export interface GoogleCloudDialogflowCxV3FlowValidationResult {
  name?: string;
  validationMessages?: ReadonlyArray<GoogleCloudDialogflowCxV3ValidationMessage>;
  updateTime?: string;
}

export const GoogleCloudDialogflowCxV3FlowValidationResult: Schema.Codec<GoogleCloudDialogflowCxV3FlowValidationResult> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    validationMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ValidationMessage),
    ),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3FlowValidationResult" });

export interface GoogleCloudDialogflowCxV3AgentValidationResult {
  flowValidationResults?: ReadonlyArray<GoogleCloudDialogflowCxV3FlowValidationResult>;
  name?: string;
}

export const GoogleCloudDialogflowCxV3AgentValidationResult: Schema.Codec<GoogleCloudDialogflowCxV3AgentValidationResult> =
  /*@__PURE__*/ Schema.Struct({
    flowValidationResults: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3FlowValidationResult),
    ),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3AgentValidationResult" });

export interface GoogleCloudDialogflowCxV3PlaybookOutput {
  executionSummary?: string;
}

export const GoogleCloudDialogflowCxV3PlaybookOutput: Schema.Codec<GoogleCloudDialogflowCxV3PlaybookOutput> =
  /*@__PURE__*/ Schema.Struct({
    executionSummary: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3PlaybookOutput" });

export interface GoogleCloudDialogflowV2ArticleAnswer {
  confidence?: number;
  snippets?: ReadonlyArray<string>;
  title?: string;
  uri?: string;
  metadata?: Record<string, string>;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2ArticleAnswer: Schema.Codec<GoogleCloudDialogflowV2ArticleAnswer> =
  /*@__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
    snippets: Schema.optional(Schema.Array(Schema.String)),
    title: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ArticleAnswer" });

export interface GoogleCloudDialogflowV2ToolCall {
  cesToolset?: string;
  state?:
    | "STATE_UNSPECIFIED"
    | "TRIGGERED"
    | "NEEDS_CONFIRMATION"
    | (string & {});
  cesApp?: string;
  toolDisplayDetails?: string;
  action?: string;
  cesTool?: string;
  toolDisplayName?: string;
  tool?: string;
  inputParameters?: Record<string, unknown>;
  createTime?: string;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2ToolCall: Schema.Codec<GoogleCloudDialogflowV2ToolCall> =
  /*@__PURE__*/ Schema.Struct({
    cesToolset: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    cesApp: Schema.optional(Schema.String),
    toolDisplayDetails: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    cesTool: Schema.optional(Schema.String),
    toolDisplayName: Schema.optional(Schema.String),
    tool: Schema.optional(Schema.String),
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    createTime: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolCall" });

export interface GoogleCloudDialogflowCxV3TestRunDifference {
  type?:
    | "DIFF_TYPE_UNSPECIFIED"
    | "INTENT"
    | "PAGE"
    | "PARAMETERS"
    | "UTTERANCE"
    | "FLOW"
    | (string & {});
  description?: string;
}

export const GoogleCloudDialogflowCxV3TestRunDifference: Schema.Codec<GoogleCloudDialogflowCxV3TestRunDifference> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TestRunDifference" });

export interface GoogleCloudDialogflowCxV3IntentTrainingPhrasePart {
  parameterId?: string;
  text?: string;
}

export const GoogleCloudDialogflowCxV3IntentTrainingPhrasePart: Schema.Codec<GoogleCloudDialogflowCxV3IntentTrainingPhrasePart> =
  /*@__PURE__*/ Schema.Struct({
    parameterId: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3IntentTrainingPhrasePart",
  });

export interface GoogleCloudDialogflowCxV3IntentTrainingPhrase {
  parts?: ReadonlyArray<GoogleCloudDialogflowCxV3IntentTrainingPhrasePart>;
  id?: string;
  repeatCount?: number;
}

export const GoogleCloudDialogflowCxV3IntentTrainingPhrase: Schema.Codec<GoogleCloudDialogflowCxV3IntentTrainingPhrase> =
  /*@__PURE__*/ Schema.Struct({
    parts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3IntentTrainingPhrasePart),
    ),
    id: Schema.optional(Schema.String),
    repeatCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3IntentTrainingPhrase" });

export interface GoogleCloudDialogflowCxV3Intent {
  priority?: number;
  name?: string;
  displayName?: string;
  labels?: Record<string, string>;
  trainingPhrases?: ReadonlyArray<GoogleCloudDialogflowCxV3IntentTrainingPhrase>;
  parameters?: ReadonlyArray<GoogleCloudDialogflowCxV3IntentParameter>;
  isFallback?: boolean;
  dtmfPattern?: string;
  description?: string;
}

export const GoogleCloudDialogflowCxV3Intent: Schema.Codec<GoogleCloudDialogflowCxV3Intent> =
  /*@__PURE__*/ Schema.Struct({
    priority: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    trainingPhrases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3IntentTrainingPhrase),
    ),
    parameters: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3IntentParameter),
    ),
    isFallback: Schema.optional(Schema.Boolean),
    dtmfPattern: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Intent" });

export interface GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput {
  differences?: ReadonlyArray<GoogleCloudDialogflowCxV3TestRunDifference>;
  textResponses?: ReadonlyArray<GoogleCloudDialogflowCxV3ResponseMessageText>;
  currentPage?: GoogleCloudDialogflowCxV3Page;
  status?: GoogleRpcStatus;
  diagnosticInfo?: Record<string, unknown>;
  triggeredIntent?: GoogleCloudDialogflowCxV3Intent;
  sessionParameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput: Schema.Codec<GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput> =
  /*@__PURE__*/ Schema.Struct({
    differences: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3TestRunDifference),
    ),
    textResponses: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ResponseMessageText),
    ),
    currentPage: Schema.optional(GoogleCloudDialogflowCxV3Page),
    status: Schema.optional(GoogleRpcStatus),
    diagnosticInfo: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    triggeredIntent: Schema.optional(GoogleCloudDialogflowCxV3Intent),
    sessionParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput",
  });

export interface GoogleCloudDialogflowCxV3ConversationTurnUserInput {
  injectedParameters?: Record<string, unknown>;
  isWebhookEnabled?: boolean;
  enableSentimentAnalysis?: boolean;
  input?: GoogleCloudDialogflowCxV3QueryInput;
}

export const GoogleCloudDialogflowCxV3ConversationTurnUserInput: Schema.Codec<GoogleCloudDialogflowCxV3ConversationTurnUserInput> =
  /*@__PURE__*/ Schema.Struct({
    injectedParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    isWebhookEnabled: Schema.optional(Schema.Boolean),
    enableSentimentAnalysis: Schema.optional(Schema.Boolean),
    input: Schema.optional(GoogleCloudDialogflowCxV3QueryInput),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ConversationTurnUserInput",
  });

export interface GoogleCloudDialogflowCxV3ConversationTurn {
  virtualAgentOutput?: GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput;
  userInput?: GoogleCloudDialogflowCxV3ConversationTurnUserInput;
}

export const GoogleCloudDialogflowCxV3ConversationTurn: Schema.Codec<GoogleCloudDialogflowCxV3ConversationTurn> =
  /*@__PURE__*/ Schema.Struct({
    virtualAgentOutput: Schema.optional(
      GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput,
    ),
    userInput: Schema.optional(
      GoogleCloudDialogflowCxV3ConversationTurnUserInput,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ConversationTurn" });

export interface GoogleCloudDialogflowCxV3TestCaseResult {
  testResult?: "TEST_RESULT_UNSPECIFIED" | "PASSED" | "FAILED" | (string & {});
  testTime?: string;
  name?: string;
  environment?: string;
  conversationTurns?: ReadonlyArray<GoogleCloudDialogflowCxV3ConversationTurn>;
}

export const GoogleCloudDialogflowCxV3TestCaseResult: Schema.Codec<GoogleCloudDialogflowCxV3TestCaseResult> =
  /*@__PURE__*/ Schema.Struct({
    testResult: Schema.optional(Schema.String),
    testTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    environment: Schema.optional(Schema.String),
    conversationTurns: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ConversationTurn),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TestCaseResult" });

export interface GoogleCloudDialogflowCxV3PlaybookStep {
  text?: string;
  steps?: ReadonlyArray<GoogleCloudDialogflowCxV3PlaybookStep>;
}

export const GoogleCloudDialogflowCxV3PlaybookStep: Schema.Codec<GoogleCloudDialogflowCxV3PlaybookStep> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      text: Schema.optional(Schema.String),
      steps: Schema.optional(
        Schema.Array(GoogleCloudDialogflowCxV3PlaybookStep),
      ),
    }),
  ).annotate({
    identifier: "GoogleCloudDialogflowCxV3PlaybookStep",
  }) as any as Schema.Codec<GoogleCloudDialogflowCxV3PlaybookStep>;

export interface GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue {
  originalValue?: string;
  resolvedValue?: unknown;
}

export const GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue: Schema.Codec<GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue> =
  /*@__PURE__*/ Schema.Struct({
    originalValue: Schema.optional(Schema.String),
    resolvedValue: Schema.optional(Schema.Unknown),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue",
  });

export interface GoogleCloudDialogflowCxV3BoostSpecs {
  dataStores?: ReadonlyArray<string>;
  spec?: ReadonlyArray<GoogleCloudDialogflowCxV3BoostSpec>;
}

export const GoogleCloudDialogflowCxV3BoostSpecs: Schema.Codec<GoogleCloudDialogflowCxV3BoostSpecs> =
  /*@__PURE__*/ Schema.Struct({
    dataStores: Schema.optional(Schema.Array(Schema.String)),
    spec: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3BoostSpec)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3BoostSpecs" });

export interface GoogleCloudDialogflowCxV3FilterSpecs {
  dataStores?: ReadonlyArray<string>;
  filter?: string;
}

export const GoogleCloudDialogflowCxV3FilterSpecs: Schema.Codec<GoogleCloudDialogflowCxV3FilterSpecs> =
  /*@__PURE__*/ Schema.Struct({
    dataStores: Schema.optional(Schema.Array(Schema.String)),
    filter: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3FilterSpecs" });

export interface GoogleCloudDialogflowCxV3SearchConfig {
  boostSpecs?: ReadonlyArray<GoogleCloudDialogflowCxV3BoostSpecs>;
  filterSpecs?: ReadonlyArray<GoogleCloudDialogflowCxV3FilterSpecs>;
}

export const GoogleCloudDialogflowCxV3SearchConfig: Schema.Codec<GoogleCloudDialogflowCxV3SearchConfig> =
  /*@__PURE__*/ Schema.Struct({
    boostSpecs: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3BoostSpecs),
    ),
    filterSpecs: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3FilterSpecs),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3SearchConfig" });

export interface GoogleCloudDialogflowCxV3EntityTypeEntity {
  value?: string;
  synonyms?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3EntityTypeEntity: Schema.Codec<GoogleCloudDialogflowCxV3EntityTypeEntity> =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    synonyms: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3EntityTypeEntity" });

export interface GoogleCloudDialogflowCxV3SessionEntityType {
  entities?: ReadonlyArray<GoogleCloudDialogflowCxV3EntityTypeEntity>;
  name?: string;
  entityOverrideMode?:
    | "ENTITY_OVERRIDE_MODE_UNSPECIFIED"
    | "ENTITY_OVERRIDE_MODE_OVERRIDE"
    | "ENTITY_OVERRIDE_MODE_SUPPLEMENT"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3SessionEntityType: Schema.Codec<GoogleCloudDialogflowCxV3SessionEntityType> =
  /*@__PURE__*/ Schema.Struct({
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3EntityTypeEntity),
    ),
    name: Schema.optional(Schema.String),
    entityOverrideMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3SessionEntityType" });

export interface GoogleTypeLatLng {
  longitude?: number;
  latitude?: number;
}

export const GoogleTypeLatLng: Schema.Codec<GoogleTypeLatLng> =
  /*@__PURE__*/ Schema.Struct({
    longitude: Schema.optional(Schema.Number),
    latitude: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleTypeLatLng" });

export interface GoogleCloudDialogflowCxV3QueryParameters {
  channel?: string;
  llmModelSettings?: GoogleCloudDialogflowCxV3LlmModelSettings;
  parameters?: Record<string, unknown>;
  disableWebhook?: boolean;
  analyzeQueryTextSentiment?: boolean;
  searchConfig?: GoogleCloudDialogflowCxV3SearchConfig;
  sessionEntityTypes?: ReadonlyArray<GoogleCloudDialogflowCxV3SessionEntityType>;
  timeZone?: string;
  populateDataStoreConnectionSignals?: boolean;
  payload?: Record<string, unknown>;
  currentPage?: string;
  sessionTtl?: string;
  parameterScope?: string;
  currentPlaybook?: string;
  webhookHeaders?: Record<string, string>;
  endUserMetadata?: Record<string, unknown>;
  geoLocation?: GoogleTypeLatLng;
  flowVersions?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3QueryParameters: Schema.Codec<GoogleCloudDialogflowCxV3QueryParameters> =
  /*@__PURE__*/ Schema.Struct({
    channel: Schema.optional(Schema.String),
    llmModelSettings: Schema.optional(
      GoogleCloudDialogflowCxV3LlmModelSettings,
    ),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    disableWebhook: Schema.optional(Schema.Boolean),
    analyzeQueryTextSentiment: Schema.optional(Schema.Boolean),
    searchConfig: Schema.optional(GoogleCloudDialogflowCxV3SearchConfig),
    sessionEntityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3SessionEntityType),
    ),
    timeZone: Schema.optional(Schema.String),
    populateDataStoreConnectionSignals: Schema.optional(Schema.Boolean),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    currentPage: Schema.optional(Schema.String),
    sessionTtl: Schema.optional(Schema.String),
    parameterScope: Schema.optional(Schema.String),
    currentPlaybook: Schema.optional(Schema.String),
    webhookHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    endUserMetadata: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    geoLocation: Schema.optional(GoogleTypeLatLng),
    flowVersions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3QueryParameters" });

export interface GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig {
  version?: string;
}

export const GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig: Schema.Codec<GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceServiceAccountAuthConfig {
  serviceAccount?: string;
}

export const GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceServiceAccountAuthConfig: Schema.Codec<GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceServiceAccountAuthConfig> =
  /*@__PURE__*/ Schema.Struct({
    serviceAccount: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceServiceAccountAuthConfig",
  });

export interface GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo {
  displayName?: string;
  required?: boolean;
  value?: unknown;
  justCollected?: boolean;
  state?:
    | "PARAMETER_STATE_UNSPECIFIED"
    | "EMPTY"
    | "INVALID"
    | "FILLED"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo: Schema.Codec<GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    required: Schema.optional(Schema.Boolean),
    value: Schema.optional(Schema.Unknown),
    justCollected: Schema.optional(Schema.Boolean),
    state: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo",
  });

export interface GoogleCloudDialogflowV2IntentMessageCardButton {
  postback?: string;
  text?: string;
}

export const GoogleCloudDialogflowV2IntentMessageCardButton: Schema.Codec<GoogleCloudDialogflowV2IntentMessageCardButton> =
  /*@__PURE__*/ Schema.Struct({
    postback: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageCardButton" });

export interface GoogleCloudDialogflowV2IntentMessageCard {
  title?: string;
  imageUri?: string;
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageCardButton>;
  subtitle?: string;
}

export const GoogleCloudDialogflowV2IntentMessageCard: Schema.Codec<GoogleCloudDialogflowV2IntentMessageCard> =
  /*@__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    imageUri: Schema.optional(Schema.String),
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageCardButton),
    ),
    subtitle: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageCard" });

export interface GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuerySearchContext {
  key?: string;
  value?: string;
}

export const GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuerySearchContext: Schema.Codec<GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuerySearchContext> =
  /*@__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuerySearchContext",
  });

export interface GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery {
  queryText?: string;
  searchContexts?: ReadonlyArray<GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuerySearchContext>;
}

export const GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery: Schema.Codec<GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery> =
  /*@__PURE__*/ Schema.Struct({
    queryText: Schema.optional(Schema.String),
    searchContexts: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuerySearchContext,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery",
  });

export interface GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet {
  uri?: string;
  text?: string;
  title?: string;
  metadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet: Schema.Codec<GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet> =
  /*@__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet",
  });

export interface GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource {
  snippets?: ReadonlyArray<GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet>;
}

export const GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource: Schema.Codec<GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource> =
  /*@__PURE__*/ Schema.Struct({
    snippets: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource",
  });

export interface GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerFaqSource {
  question?: string;
}

export const GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerFaqSource: Schema.Codec<GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerFaqSource> =
  /*@__PURE__*/ Schema.Struct({
    question: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerFaqSource",
  });

export interface GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerEventSource {
  event?: string;
  snippets?: GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource;
}

export const GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerEventSource: Schema.Codec<GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerEventSource> =
  /*@__PURE__*/ Schema.Struct({
    event: Schema.optional(Schema.String),
    snippets: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerEventSource",
  });

export interface GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswer {
  playbookSource?: GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource;
  answerText?: string;
  generativeSource?: GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource;
  faqSource?: GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerFaqSource;
  eventSource?: GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerEventSource;
}

export const GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswer: Schema.Codec<GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswer> =
  /*@__PURE__*/ Schema.Struct({
    playbookSource: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource,
    ),
    answerText: Schema.optional(Schema.String),
    generativeSource: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource,
    ),
    faqSource: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerFaqSource,
    ),
    eventSource: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerEventSource,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswer",
  });

export interface GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior {
  previousQueriesIncluded?: boolean;
  invalidItemsQuerySuggestionSkipped?: boolean;
  returnQueryOnly?: boolean;
  queryGenerationAgentLanguageMismatch?: boolean;
  primaryQueryRedactedAndReplaced?: boolean;
  disableSyncDelivery?: boolean;
  useCustomSafetyFilterLevel?: boolean;
  queryGenerationEndUserLanguageMismatch?: boolean;
  endUserMetadataIncluded?: boolean;
  answerGenerationRewriterOn?: boolean;
  thirdPartyConnectorAllowed?: boolean;
  appendedSearchContextCount?: number;
  usePubsubDelivery?: boolean;
  conversationTranscriptHasMixedLanguages?: boolean;
  multipleQueriesGenerated?: boolean;
  queryContainedSearchContext?: boolean;
  useTranslatedMessage?: boolean;
}

export const GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior: Schema.Codec<GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior> =
  /*@__PURE__*/ Schema.Struct({
    previousQueriesIncluded: Schema.optional(Schema.Boolean),
    invalidItemsQuerySuggestionSkipped: Schema.optional(Schema.Boolean),
    returnQueryOnly: Schema.optional(Schema.Boolean),
    queryGenerationAgentLanguageMismatch: Schema.optional(Schema.Boolean),
    primaryQueryRedactedAndReplaced: Schema.optional(Schema.Boolean),
    disableSyncDelivery: Schema.optional(Schema.Boolean),
    useCustomSafetyFilterLevel: Schema.optional(Schema.Boolean),
    queryGenerationEndUserLanguageMismatch: Schema.optional(Schema.Boolean),
    endUserMetadataIncluded: Schema.optional(Schema.Boolean),
    answerGenerationRewriterOn: Schema.optional(Schema.Boolean),
    thirdPartyConnectorAllowed: Schema.optional(Schema.Boolean),
    appendedSearchContextCount: Schema.optional(Schema.Number),
    usePubsubDelivery: Schema.optional(Schema.Boolean),
    conversationTranscriptHasMixedLanguages: Schema.optional(Schema.Boolean),
    multipleQueriesGenerated: Schema.optional(Schema.Boolean),
    queryContainedSearchContext: Schema.optional(Schema.Boolean),
    useTranslatedMessage: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior",
  });

export interface GoogleCloudDialogflowV2KnowledgeAssistDebugInfoQueryGenerationDebugInfo {
  totalTokenCount?: number;
  promptTokenCount?: number;
  candidatesTokenCount?: number;
}

export const GoogleCloudDialogflowV2KnowledgeAssistDebugInfoQueryGenerationDebugInfo: Schema.Codec<GoogleCloudDialogflowV2KnowledgeAssistDebugInfoQueryGenerationDebugInfo> =
  /*@__PURE__*/ Schema.Struct({
    totalTokenCount: Schema.optional(Schema.Number),
    promptTokenCount: Schema.optional(Schema.Number),
    candidatesTokenCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2KnowledgeAssistDebugInfoQueryGenerationDebugInfo",
  });

export interface GoogleCloudDialogflowV2IngestedContextReferenceDebugInfoIngestedParameterDebugInfo {
  parameter?: string;
  ingestionStatus?:
    | "INGESTION_STATUS_UNSPECIFIED"
    | "INGESTION_STATUS_SUCCEEDED"
    | "INGESTION_STATUS_CONTEXT_NOT_AVAILABLE"
    | "INGESTION_STATUS_PARSE_FAILED"
    | "INGESTION_STATUS_INVALID_ENTRY"
    | "INGESTION_STATUS_INVALID_FORMAT"
    | "INGESTION_STATUS_LANGUAGE_MISMATCH"
    | (string & {});
}

export const GoogleCloudDialogflowV2IngestedContextReferenceDebugInfoIngestedParameterDebugInfo: Schema.Codec<GoogleCloudDialogflowV2IngestedContextReferenceDebugInfoIngestedParameterDebugInfo> =
  /*@__PURE__*/ Schema.Struct({
    parameter: Schema.optional(Schema.String),
    ingestionStatus: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2IngestedContextReferenceDebugInfoIngestedParameterDebugInfo",
  });

export interface GoogleCloudDialogflowV2IngestedContextReferenceDebugInfo {
  contextReferenceRetrieved?: boolean;
  ingestedParametersDebugInfo?: ReadonlyArray<GoogleCloudDialogflowV2IngestedContextReferenceDebugInfoIngestedParameterDebugInfo>;
  projectNotAllowlisted?: boolean;
}

export const GoogleCloudDialogflowV2IngestedContextReferenceDebugInfo: Schema.Codec<GoogleCloudDialogflowV2IngestedContextReferenceDebugInfo> =
  /*@__PURE__*/ Schema.Struct({
    contextReferenceRetrieved: Schema.optional(Schema.Boolean),
    ingestedParametersDebugInfo: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2IngestedContextReferenceDebugInfoIngestedParameterDebugInfo,
      ),
    ),
    projectNotAllowlisted: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IngestedContextReferenceDebugInfo",
  });

export interface GoogleCloudDialogflowV2KnowledgeAssistDebugInfo {
  knowledgeAssistBehavior?: GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior;
  serviceLatency?: GoogleCloudDialogflowV2ServiceLatency;
  queryGenerationFailureReason?:
    | "QUERY_GENERATION_FAILURE_REASON_UNSPECIFIED"
    | "QUERY_GENERATION_OUT_OF_QUOTA"
    | "QUERY_GENERATION_FAILED"
    | "QUERY_GENERATION_NO_QUERY_GENERATED"
    | "QUERY_GENERATION_RAI_FAILED"
    | "NOT_IN_ALLOWLIST"
    | "QUERY_GENERATION_QUERY_REDACTED"
    | "QUERY_GENERATION_LLM_RESPONSE_PARSE_FAILED"
    | "QUERY_GENERATION_EMPTY_CONVERSATION"
    | "QUERY_GENERATION_EMPTY_LAST_MESSAGE"
    | "QUERY_GENERATION_TRIGGERING_EVENT_CONDITION_NOT_MET"
    | (string & {});
  queryGenerationDebugInfo?: GoogleCloudDialogflowV2KnowledgeAssistDebugInfoQueryGenerationDebugInfo;
  datastoreResponseReason?:
    | "DATASTORE_RESPONSE_REASON_UNSPECIFIED"
    | "NONE"
    | "SEARCH_OUT_OF_QUOTA"
    | "SEARCH_EMPTY_RESULTS"
    | "ANSWER_GENERATION_GEN_AI_DISABLED"
    | "ANSWER_GENERATION_OUT_OF_QUOTA"
    | "ANSWER_GENERATION_ERROR"
    | "ANSWER_GENERATION_NOT_ENOUGH_INFO"
    | "ANSWER_GENERATION_RAI_FAILED"
    | "ANSWER_GENERATION_NOT_GROUNDED"
    | (string & {});
  ingestedContextReferenceDebugInfo?: GoogleCloudDialogflowV2IngestedContextReferenceDebugInfo;
  queryCategorizationFailureReason?:
    | "QUERY_CATEGORIZATION_FAILURE_REASON_UNSPECIFIED"
    | "QUERY_CATEGORIZATION_INVALID_CONFIG"
    | "QUERY_CATEGORIZATION_RESULT_NOT_FOUND"
    | "QUERY_CATEGORIZATION_FAILED"
    | (string & {});
  cesDebugInfo?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2KnowledgeAssistDebugInfo: Schema.Codec<GoogleCloudDialogflowV2KnowledgeAssistDebugInfo> =
  /*@__PURE__*/ Schema.Struct({
    knowledgeAssistBehavior: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior,
    ),
    serviceLatency: Schema.optional(GoogleCloudDialogflowV2ServiceLatency),
    queryGenerationFailureReason: Schema.optional(Schema.String),
    queryGenerationDebugInfo: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistDebugInfoQueryGenerationDebugInfo,
    ),
    datastoreResponseReason: Schema.optional(Schema.String),
    ingestedContextReferenceDebugInfo: Schema.optional(
      GoogleCloudDialogflowV2IngestedContextReferenceDebugInfo,
    ),
    queryCategorizationFailureReason: Schema.optional(Schema.String),
    cesDebugInfo: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2KnowledgeAssistDebugInfo",
  });

export interface GoogleCloudDialogflowV2KnowledgeAssistAnswer {
  suggestedQuery?: GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery;
  suggestedQueryAnswer?: GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswer;
  answerRecord?: string;
  knowledgeAssistDebugInfo?: GoogleCloudDialogflowV2KnowledgeAssistDebugInfo;
}

export const GoogleCloudDialogflowV2KnowledgeAssistAnswer: Schema.Codec<GoogleCloudDialogflowV2KnowledgeAssistAnswer> =
  /*@__PURE__*/ Schema.Struct({
    suggestedQuery: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery,
    ),
    suggestedQueryAnswer: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswer,
    ),
    answerRecord: Schema.optional(Schema.String),
    knowledgeAssistDebugInfo: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistDebugInfo,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2KnowledgeAssistAnswer" });

export interface GoogleCloudDialogflowCxV3UserUtterance {
  text?: string;
}

export const GoogleCloudDialogflowCxV3UserUtterance: Schema.Codec<GoogleCloudDialogflowCxV3UserUtterance> =
  /*@__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3UserUtterance" });

export interface GoogleCloudDialogflowV2SpeechWordInfo {
  word?: string;
  startOffset?: string;
  endOffset?: string;
  confidence?: number;
}

export const GoogleCloudDialogflowV2SpeechWordInfo: Schema.Codec<GoogleCloudDialogflowV2SpeechWordInfo> =
  /*@__PURE__*/ Schema.Struct({
    word: Schema.optional(Schema.String),
    startOffset: Schema.optional(Schema.String),
    endOffset: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SpeechWordInfo" });

export interface GoogleCloudDialogflowV2StreamingRecognitionResult {
  isFinal?: boolean;
  transcript?: string;
  languageCode?: string;
  messageType?:
    | "MESSAGE_TYPE_UNSPECIFIED"
    | "TRANSCRIPT"
    | "END_OF_SINGLE_UTTERANCE"
    | (string & {});
  speechWordInfo?: ReadonlyArray<GoogleCloudDialogflowV2SpeechWordInfo>;
  confidence?: number;
  speechEndOffset?: string;
}

export const GoogleCloudDialogflowV2StreamingRecognitionResult: Schema.Codec<GoogleCloudDialogflowV2StreamingRecognitionResult> =
  /*@__PURE__*/ Schema.Struct({
    isFinal: Schema.optional(Schema.Boolean),
    transcript: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    messageType: Schema.optional(Schema.String),
    speechWordInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SpeechWordInfo),
    ),
    confidence: Schema.optional(Schema.Number),
    speechEndOffset: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2StreamingRecognitionResult",
  });

export interface GoogleCloudDialogflowV2Sentiment {
  magnitude?: number;
  score?: number;
}

export const GoogleCloudDialogflowV2Sentiment: Schema.Codec<GoogleCloudDialogflowV2Sentiment> =
  /*@__PURE__*/ Schema.Struct({
    magnitude: Schema.optional(Schema.Number),
    score: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Sentiment" });

export interface GoogleCloudDialogflowV2SentimentAnalysisResult {
  queryTextSentiment?: GoogleCloudDialogflowV2Sentiment;
}

export const GoogleCloudDialogflowV2SentimentAnalysisResult: Schema.Codec<GoogleCloudDialogflowV2SentimentAnalysisResult> =
  /*@__PURE__*/ Schema.Struct({
    queryTextSentiment: Schema.optional(GoogleCloudDialogflowV2Sentiment),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SentimentAnalysisResult" });

export interface GoogleCloudDialogflowV2AnnotatedMessagePart {
  text?: string;
  formattedValue?: unknown;
  entityType?: string;
}

export const GoogleCloudDialogflowV2AnnotatedMessagePart: Schema.Codec<GoogleCloudDialogflowV2AnnotatedMessagePart> =
  /*@__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    formattedValue: Schema.optional(Schema.Unknown),
    entityType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2AnnotatedMessagePart" });

export interface GoogleCloudDialogflowV2MessageAnnotation {
  parts?: ReadonlyArray<GoogleCloudDialogflowV2AnnotatedMessagePart>;
  containEntities?: boolean;
}

export const GoogleCloudDialogflowV2MessageAnnotation: Schema.Codec<GoogleCloudDialogflowV2MessageAnnotation> =
  /*@__PURE__*/ Schema.Struct({
    parts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2AnnotatedMessagePart),
    ),
    containEntities: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2MessageAnnotation" });

export interface GoogleCloudDialogflowV2Message {
  content?: string;
  languageCode?: string;
  participant?: string;
  sentimentAnalysis?: GoogleCloudDialogflowV2SentimentAnalysisResult;
  createTime?: string;
  name?: string;
  messageAnnotation?: GoogleCloudDialogflowV2MessageAnnotation;
  participantRole?:
    | "ROLE_UNSPECIFIED"
    | "HUMAN_AGENT"
    | "AUTOMATED_AGENT"
    | "END_USER"
    | (string & {});
  sendTime?: string;
}

export const GoogleCloudDialogflowV2Message: Schema.Codec<GoogleCloudDialogflowV2Message> =
  /*@__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    participant: Schema.optional(Schema.String),
    sentimentAnalysis: Schema.optional(
      GoogleCloudDialogflowV2SentimentAnalysisResult,
    ),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    messageAnnotation: Schema.optional(
      GoogleCloudDialogflowV2MessageAnnotation,
    ),
    participantRole: Schema.optional(Schema.String),
    sendTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Message" });

export interface GoogleCloudDialogflowV2ConversationEvent {
  newRecognitionResultPayload?: GoogleCloudDialogflowV2StreamingRecognitionResult;
  newMessagePayload?: GoogleCloudDialogflowV2Message;
  errorStatus?: GoogleRpcStatus;
  conversation?: string;
  type?:
    | "TYPE_UNSPECIFIED"
    | "CONVERSATION_STARTED"
    | "CONVERSATION_FINISHED"
    | "HUMAN_INTERVENTION_NEEDED"
    | "NEW_MESSAGE"
    | "NEW_RECOGNITION_RESULT"
    | "UNRECOVERABLE_ERROR"
    | (string & {});
}

export const GoogleCloudDialogflowV2ConversationEvent: Schema.Codec<GoogleCloudDialogflowV2ConversationEvent> =
  /*@__PURE__*/ Schema.Struct({
    newRecognitionResultPayload: Schema.optional(
      GoogleCloudDialogflowV2StreamingRecognitionResult,
    ),
    newMessagePayload: Schema.optional(GoogleCloudDialogflowV2Message),
    errorStatus: Schema.optional(GoogleRpcStatus),
    conversation: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ConversationEvent" });

export interface GoogleCloudDialogflowCxV3GenerativeSettingsFallbackSettingsPromptTemplate {
  promptText?: string;
  frozen?: boolean;
  displayName?: string;
}

export const GoogleCloudDialogflowCxV3GenerativeSettingsFallbackSettingsPromptTemplate: Schema.Codec<GoogleCloudDialogflowCxV3GenerativeSettingsFallbackSettingsPromptTemplate> =
  /*@__PURE__*/ Schema.Struct({
    promptText: Schema.optional(Schema.String),
    frozen: Schema.optional(Schema.Boolean),
    displayName: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3GenerativeSettingsFallbackSettingsPromptTemplate",
  });

export interface GoogleCloudDialogflowCxV3GenerativeSettingsFallbackSettings {
  selectedPrompt?: string;
  promptTemplates?: ReadonlyArray<GoogleCloudDialogflowCxV3GenerativeSettingsFallbackSettingsPromptTemplate>;
}

export const GoogleCloudDialogflowCxV3GenerativeSettingsFallbackSettings: Schema.Codec<GoogleCloudDialogflowCxV3GenerativeSettingsFallbackSettings> =
  /*@__PURE__*/ Schema.Struct({
    selectedPrompt: Schema.optional(Schema.String),
    promptTemplates: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowCxV3GenerativeSettingsFallbackSettingsPromptTemplate,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3GenerativeSettingsFallbackSettings",
  });

export interface GoogleCloudDialogflowCxV3EnvironmentWebhookConfig {
  webhookOverrides?: ReadonlyArray<GoogleCloudDialogflowCxV3Webhook>;
}

export const GoogleCloudDialogflowCxV3EnvironmentWebhookConfig: Schema.Codec<GoogleCloudDialogflowCxV3EnvironmentWebhookConfig> =
  /*@__PURE__*/ Schema.Struct({
    webhookOverrides: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3Webhook),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3EnvironmentWebhookConfig",
  });

export interface GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig {
  testCases?: ReadonlyArray<string>;
  enablePredeploymentRun?: boolean;
  enableContinuousRun?: boolean;
}

export const GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig: Schema.Codec<GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig> =
  /*@__PURE__*/ Schema.Struct({
    testCases: Schema.optional(Schema.Array(Schema.String)),
    enablePredeploymentRun: Schema.optional(Schema.Boolean),
    enableContinuousRun: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig",
  });

export interface GoogleCloudDialogflowCxV3EnvironmentVersionConfig {
  version?: string;
}

export const GoogleCloudDialogflowCxV3EnvironmentVersionConfig: Schema.Codec<GoogleCloudDialogflowCxV3EnvironmentVersionConfig> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3EnvironmentVersionConfig",
  });

export interface GoogleCloudDialogflowCxV3Environment {
  updateTime?: string;
  webhookConfig?: GoogleCloudDialogflowCxV3EnvironmentWebhookConfig;
  testCasesConfig?: GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig;
  name?: string;
  versionConfigs?: ReadonlyArray<GoogleCloudDialogflowCxV3EnvironmentVersionConfig>;
  displayName?: string;
  description?: string;
}

export const GoogleCloudDialogflowCxV3Environment: Schema.Codec<GoogleCloudDialogflowCxV3Environment> =
  /*@__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    webhookConfig: Schema.optional(
      GoogleCloudDialogflowCxV3EnvironmentWebhookConfig,
    ),
    testCasesConfig: Schema.optional(
      GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig,
    ),
    name: Schema.optional(Schema.String),
    versionConfigs: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3EnvironmentVersionConfig),
    ),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Environment" });

export interface GoogleCloudDialogflowCxV3DeployFlowResponse {
  deployment?: string;
  environment?: GoogleCloudDialogflowCxV3Environment;
}

export const GoogleCloudDialogflowCxV3DeployFlowResponse: Schema.Codec<GoogleCloudDialogflowCxV3DeployFlowResponse> =
  /*@__PURE__*/ Schema.Struct({
    deployment: Schema.optional(Schema.String),
    environment: Schema.optional(GoogleCloudDialogflowCxV3Environment),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3DeployFlowResponse" });

export interface GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction {
  url?: string;
  urlTypeHint?:
    | "URL_TYPE_HINT_UNSPECIFIED"
    | "AMP_ACTION"
    | "AMP_CONTENT"
    | (string & {});
}

export const GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction: Schema.Codec<GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction> =
  /*@__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    urlTypeHint: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction",
  });

export interface GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem {
  description?: string;
  image?: GoogleCloudDialogflowV2IntentMessageImage;
  footer?: string;
  openUriAction?: GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;
  title?: string;
}

export const GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem: Schema.Codec<GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem> =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
    footer: Schema.optional(Schema.String),
    openUriAction: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction,
    ),
    title: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem",
  });

export interface GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard {
  imageDisplayOptions?:
    | "IMAGE_DISPLAY_OPTIONS_UNSPECIFIED"
    | "GRAY"
    | "WHITE"
    | "CROPPED"
    | "BLURRED_BACKGROUND"
    | (string & {});
  items?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem>;
}

export const GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard: Schema.Codec<GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard> =
  /*@__PURE__*/ Schema.Struct({
    imageDisplayOptions: Schema.optional(Schema.String),
    items: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard",
  });

export interface GoogleCloudDialogflowCxV3InlineSource {
  content?: string;
}

export const GoogleCloudDialogflowCxV3InlineSource: Schema.Codec<GoogleCloudDialogflowCxV3InlineSource> =
  /*@__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3InlineSource" });

export interface GoogleCloudDialogflowCxV3TestConfig {
  flow?: string;
  trackingParameters?: ReadonlyArray<string>;
  page?: string;
}

export const GoogleCloudDialogflowCxV3TestConfig: Schema.Codec<GoogleCloudDialogflowCxV3TestConfig> =
  /*@__PURE__*/ Schema.Struct({
    flow: Schema.optional(Schema.String),
    trackingParameters: Schema.optional(Schema.Array(Schema.String)),
    page: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TestConfig" });

export interface GoogleCloudDialogflowCxV3TestCase {
  testConfig?: GoogleCloudDialogflowCxV3TestConfig;
  tags?: ReadonlyArray<string>;
  testCaseConversationTurns?: ReadonlyArray<GoogleCloudDialogflowCxV3ConversationTurn>;
  displayName?: string;
  notes?: string;
  lastTestResult?: GoogleCloudDialogflowCxV3TestCaseResult;
  name?: string;
  creationTime?: string;
}

export const GoogleCloudDialogflowCxV3TestCase: Schema.Codec<GoogleCloudDialogflowCxV3TestCase> =
  /*@__PURE__*/ Schema.Struct({
    testConfig: Schema.optional(GoogleCloudDialogflowCxV3TestConfig),
    tags: Schema.optional(Schema.Array(Schema.String)),
    testCaseConversationTurns: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ConversationTurn),
    ),
    displayName: Schema.optional(Schema.String),
    notes: Schema.optional(Schema.String),
    lastTestResult: Schema.optional(GoogleCloudDialogflowCxV3TestCaseResult),
    name: Schema.optional(Schema.String),
    creationTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TestCase" });

export interface GoogleCloudDialogflowCxV3TestCaseError {
  status?: GoogleRpcStatus;
  testCase?: GoogleCloudDialogflowCxV3TestCase;
}

export const GoogleCloudDialogflowCxV3TestCaseError: Schema.Codec<GoogleCloudDialogflowCxV3TestCaseError> =
  /*@__PURE__*/ Schema.Struct({
    status: Schema.optional(GoogleRpcStatus),
    testCase: Schema.optional(GoogleCloudDialogflowCxV3TestCase),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TestCaseError" });

export interface GoogleCloudDialogflowCxV3ImportTestCasesMetadata {
  errors?: ReadonlyArray<GoogleCloudDialogflowCxV3TestCaseError>;
}

export const GoogleCloudDialogflowCxV3ImportTestCasesMetadata: Schema.Codec<GoogleCloudDialogflowCxV3ImportTestCasesMetadata> =
  /*@__PURE__*/ Schema.Struct({
    errors: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3TestCaseError),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ImportTestCasesMetadata",
  });

export interface GoogleCloudDialogflowCxV3FlowTransition {
  displayName?: string;
  flow?: string;
}

export const GoogleCloudDialogflowCxV3FlowTransition: Schema.Codec<GoogleCloudDialogflowCxV3FlowTransition> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    flow: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3FlowTransition" });

export interface GoogleCloudDialogflowCxV3beta1ExportTestCasesMetadata {}

export const GoogleCloudDialogflowCxV3beta1ExportTestCasesMetadata: Schema.Codec<GoogleCloudDialogflowCxV3beta1ExportTestCasesMetadata> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportTestCasesMetadata",
  });

export interface GoogleCloudDialogflowCxV3ExportIntentsMetadata {}

export const GoogleCloudDialogflowCxV3ExportIntentsMetadata: Schema.Codec<GoogleCloudDialogflowCxV3ExportIntentsMetadata> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ExportIntentsMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1ImportEntityTypesResponseConflictingResources {
  entityTypeDisplayNames?: ReadonlyArray<string>;
  entityDisplayNames?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1ImportEntityTypesResponseConflictingResources: Schema.Codec<GoogleCloudDialogflowCxV3beta1ImportEntityTypesResponseConflictingResources> =
  /*@__PURE__*/ Schema.Struct({
    entityTypeDisplayNames: Schema.optional(Schema.Array(Schema.String)),
    entityDisplayNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ImportEntityTypesResponseConflictingResources",
  });

export interface GoogleCloudDialogflowCxV3beta1ImportEntityTypesResponse {
  conflictingResources?: GoogleCloudDialogflowCxV3beta1ImportEntityTypesResponseConflictingResources;
  entityTypes?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1ImportEntityTypesResponse: Schema.Codec<GoogleCloudDialogflowCxV3beta1ImportEntityTypesResponse> =
  /*@__PURE__*/ Schema.Struct({
    conflictingResources: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ImportEntityTypesResponseConflictingResources,
    ),
    entityTypes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportEntityTypesResponse",
  });

export interface GoogleCloudDialogflowCxV3FlowImportStrategy {
  globalImportStrategy?:
    | "IMPORT_STRATEGY_UNSPECIFIED"
    | "IMPORT_STRATEGY_CREATE_NEW"
    | "IMPORT_STRATEGY_REPLACE"
    | "IMPORT_STRATEGY_KEEP"
    | "IMPORT_STRATEGY_MERGE"
    | "IMPORT_STRATEGY_THROW_ERROR"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3FlowImportStrategy: Schema.Codec<GoogleCloudDialogflowCxV3FlowImportStrategy> =
  /*@__PURE__*/ Schema.Struct({
    globalImportStrategy: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3FlowImportStrategy" });

export interface GoogleCloudDialogflowCxV3ImportFlowRequest {
  importOption?:
    | "IMPORT_OPTION_UNSPECIFIED"
    | "KEEP"
    | "FALLBACK"
    | (string & {});
  flowImportStrategy?: GoogleCloudDialogflowCxV3FlowImportStrategy;
  flowUri?: string;
  flowContent?: string;
}

export const GoogleCloudDialogflowCxV3ImportFlowRequest: Schema.Codec<GoogleCloudDialogflowCxV3ImportFlowRequest> =
  /*@__PURE__*/ Schema.Struct({
    importOption: Schema.optional(Schema.String),
    flowImportStrategy: Schema.optional(
      GoogleCloudDialogflowCxV3FlowImportStrategy,
    ),
    flowUri: Schema.optional(Schema.String),
    flowContent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ImportFlowRequest" });

export interface GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo {
  state?:
    | "PARAMETER_STATE_UNSPECIFIED"
    | "EMPTY"
    | "INVALID"
    | "FILLED"
    | (string & {});
  displayName?: string;
  required?: boolean;
  justCollected?: boolean;
  value?: unknown;
}

export const GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo: Schema.Codec<GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    required: Schema.optional(Schema.Boolean),
    justCollected: Schema.optional(Schema.Boolean),
    value: Schema.optional(Schema.Unknown),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo",
  });

export interface GoogleCloudDialogflowCxV3PageInfoFormInfo {
  parameterInfo?: ReadonlyArray<GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo>;
}

export const GoogleCloudDialogflowCxV3PageInfoFormInfo: Schema.Codec<GoogleCloudDialogflowCxV3PageInfoFormInfo> =
  /*@__PURE__*/ Schema.Struct({
    parameterInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3PageInfoFormInfo" });

export interface GoogleCloudDialogflowCxV3ImportTestCasesRequest {
  gcsUri?: string;
  content?: string;
}

export const GoogleCloudDialogflowCxV3ImportTestCasesRequest: Schema.Codec<GoogleCloudDialogflowCxV3ImportTestCasesRequest> =
  /*@__PURE__*/ Schema.Struct({
    gcsUri: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ImportTestCasesRequest",
  });

export interface GoogleCloudDialogflowCxV3AgentClientCertificateSettings {
  privateKey?: string;
  passphrase?: string;
  sslCertificate?: string;
}

export const GoogleCloudDialogflowCxV3AgentClientCertificateSettings: Schema.Codec<GoogleCloudDialogflowCxV3AgentClientCertificateSettings> =
  /*@__PURE__*/ Schema.Struct({
    privateKey: Schema.optional(Schema.String),
    passphrase: Schema.optional(Schema.String),
    sslCertificate: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3AgentClientCertificateSettings",
  });

export interface GoogleCloudDialogflowCxV3AnswerFeedback {
  customRating?: string;
  rating?: "RATING_UNSPECIFIED" | "THUMBS_UP" | "THUMBS_DOWN" | (string & {});
  ratingReason?: GoogleCloudDialogflowCxV3AnswerFeedbackRatingReason;
}

export const GoogleCloudDialogflowCxV3AnswerFeedback: Schema.Codec<GoogleCloudDialogflowCxV3AnswerFeedback> =
  /*@__PURE__*/ Schema.Struct({
    customRating: Schema.optional(Schema.String),
    rating: Schema.optional(Schema.String),
    ratingReason: Schema.optional(
      GoogleCloudDialogflowCxV3AnswerFeedbackRatingReason,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3AnswerFeedback" });

export interface GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion {
  similarityScore?: number;
  answerRecord?: string;
  suggestionIndex?: number;
}

export const GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion: Schema.Codec<GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion> =
  /*@__PURE__*/ Schema.Struct({
    similarityScore: Schema.optional(Schema.Number),
    answerRecord: Schema.optional(Schema.String),
    suggestionIndex: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion",
  });

export interface GoogleCloudDialogflowCxV3PlaybookInvocation {
  playbook?: string;
  displayName?: string;
  playbookState?:
    | "OUTPUT_STATE_UNSPECIFIED"
    | "OUTPUT_STATE_OK"
    | "OUTPUT_STATE_CANCELLED"
    | "OUTPUT_STATE_FAILED"
    | "OUTPUT_STATE_ESCALATED"
    | "OUTPUT_STATE_PENDING"
    | (string & {});
  playbookInput?: GoogleCloudDialogflowCxV3PlaybookInput;
  playbookOutput?: GoogleCloudDialogflowCxV3PlaybookOutput;
}

export const GoogleCloudDialogflowCxV3PlaybookInvocation: Schema.Codec<GoogleCloudDialogflowCxV3PlaybookInvocation> =
  /*@__PURE__*/ Schema.Struct({
    playbook: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    playbookState: Schema.optional(Schema.String),
    playbookInput: Schema.optional(GoogleCloudDialogflowCxV3PlaybookInput),
    playbookOutput: Schema.optional(GoogleCloudDialogflowCxV3PlaybookOutput),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3PlaybookInvocation" });

export interface GoogleCloudDialogflowCxV3PlaybookInstruction {
  guidelines?: string;
  steps?: ReadonlyArray<GoogleCloudDialogflowCxV3PlaybookStep>;
}

export const GoogleCloudDialogflowCxV3PlaybookInstruction: Schema.Codec<GoogleCloudDialogflowCxV3PlaybookInstruction> =
  /*@__PURE__*/ Schema.Struct({
    guidelines: Schema.optional(Schema.String),
    steps: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3PlaybookStep)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3PlaybookInstruction" });

export interface GoogleCloudDialogflowCxV3BatchRunTestCasesRequest {
  environment?: string;
  testCases?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3BatchRunTestCasesRequest: Schema.Codec<GoogleCloudDialogflowCxV3BatchRunTestCasesRequest> =
  /*@__PURE__*/ Schema.Struct({
    environment: Schema.optional(Schema.String),
    testCases: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3BatchRunTestCasesRequest",
  });

export interface GoogleCloudDialogflowV2beta1SuggestArticlesResponse {
  articleAnswers?: ReadonlyArray<GoogleCloudDialogflowV2beta1ArticleAnswer>;
  latestMessage?: string;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2beta1SuggestArticlesResponse: Schema.Codec<GoogleCloudDialogflowV2beta1SuggestArticlesResponse> =
  /*@__PURE__*/ Schema.Struct({
    articleAnswers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1ArticleAnswer),
    ),
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestArticlesResponse",
  });

export interface GoogleCloudDialogflowCxV3Match {
  intent?: GoogleCloudDialogflowCxV3Intent;
  event?: string;
  parameters?: Record<string, unknown>;
  confidence?: number;
  resolvedInput?: string;
  matchType?:
    | "MATCH_TYPE_UNSPECIFIED"
    | "INTENT"
    | "DIRECT_INTENT"
    | "PARAMETER_FILLING"
    | "NO_MATCH"
    | "NO_INPUT"
    | "EVENT"
    | "KNOWLEDGE_CONNECTOR"
    | "PLAYBOOK"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3Match: Schema.Codec<GoogleCloudDialogflowCxV3Match> =
  /*@__PURE__*/ Schema.Struct({
    intent: Schema.optional(GoogleCloudDialogflowCxV3Intent),
    event: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    confidence: Schema.optional(Schema.Number),
    resolvedInput: Schema.optional(Schema.String),
    matchType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Match" });

export interface GoogleCloudDialogflowCxV3SentimentAnalysisResult {
  magnitude?: number;
  score?: number;
}

export const GoogleCloudDialogflowCxV3SentimentAnalysisResult: Schema.Codec<GoogleCloudDialogflowCxV3SentimentAnalysisResult> =
  /*@__PURE__*/ Schema.Struct({
    magnitude: Schema.optional(Schema.Number),
    score: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3SentimentAnalysisResult",
  });

export interface GoogleCloudDialogflowCxV3FlowTraceMetadata {
  flow?: string;
  displayName?: string;
}

export const GoogleCloudDialogflowCxV3FlowTraceMetadata: Schema.Codec<GoogleCloudDialogflowCxV3FlowTraceMetadata> =
  /*@__PURE__*/ Schema.Struct({
    flow: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3FlowTraceMetadata" });

export interface GoogleCloudDialogflowCxV3ToolUse {
  tool?: string;
  inputActionParameters?: Record<string, unknown>;
  outputActionParameters?: Record<string, unknown>;
  displayName?: string;
  action?: string;
}

export const GoogleCloudDialogflowCxV3ToolUse: Schema.Codec<GoogleCloudDialogflowCxV3ToolUse> =
  /*@__PURE__*/ Schema.Struct({
    tool: Schema.optional(Schema.String),
    inputActionParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    outputActionParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    displayName: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ToolUse" });

export interface GoogleCloudDialogflowCxV3FlowInvocation {
  displayName?: string;
  flowState?:
    | "OUTPUT_STATE_UNSPECIFIED"
    | "OUTPUT_STATE_OK"
    | "OUTPUT_STATE_CANCELLED"
    | "OUTPUT_STATE_FAILED"
    | "OUTPUT_STATE_ESCALATED"
    | "OUTPUT_STATE_PENDING"
    | (string & {});
  flow?: string;
}

export const GoogleCloudDialogflowCxV3FlowInvocation: Schema.Codec<GoogleCloudDialogflowCxV3FlowInvocation> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    flowState: Schema.optional(Schema.String),
    flow: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3FlowInvocation" });

export interface GoogleCloudDialogflowCxV3PlaybookTransition {
  playbook?: string;
  displayName?: string;
}

export const GoogleCloudDialogflowCxV3PlaybookTransition: Schema.Codec<GoogleCloudDialogflowCxV3PlaybookTransition> =
  /*@__PURE__*/ Schema.Struct({
    playbook: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3PlaybookTransition" });

export interface GoogleCloudDialogflowCxV3AgentUtterance {
  text?: string;
}

export const GoogleCloudDialogflowCxV3AgentUtterance: Schema.Codec<GoogleCloudDialogflowCxV3AgentUtterance> =
  /*@__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3AgentUtterance" });

export interface GoogleCloudDialogflowCxV3Action {
  toolUse?: GoogleCloudDialogflowCxV3ToolUse;
  flowInvocation?: GoogleCloudDialogflowCxV3FlowInvocation;
  playbookInvocation?: GoogleCloudDialogflowCxV3PlaybookInvocation;
  playbookTransition?: GoogleCloudDialogflowCxV3PlaybookTransition;
  userUtterance?: GoogleCloudDialogflowCxV3UserUtterance;
  agentUtterance?: GoogleCloudDialogflowCxV3AgentUtterance;
  flowTransition?: GoogleCloudDialogflowCxV3FlowTransition;
}

export const GoogleCloudDialogflowCxV3Action: Schema.Codec<GoogleCloudDialogflowCxV3Action> =
  /*@__PURE__*/ Schema.Struct({
    toolUse: Schema.optional(GoogleCloudDialogflowCxV3ToolUse),
    flowInvocation: Schema.optional(GoogleCloudDialogflowCxV3FlowInvocation),
    playbookInvocation: Schema.optional(
      GoogleCloudDialogflowCxV3PlaybookInvocation,
    ),
    playbookTransition: Schema.optional(
      GoogleCloudDialogflowCxV3PlaybookTransition,
    ),
    userUtterance: Schema.optional(GoogleCloudDialogflowCxV3UserUtterance),
    agentUtterance: Schema.optional(GoogleCloudDialogflowCxV3AgentUtterance),
    flowTransition: Schema.optional(GoogleCloudDialogflowCxV3FlowTransition),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Action" });

export interface GoogleCloudDialogflowCxV3PlaybookTraceMetadata {
  displayName?: string;
  playbook?: string;
}

export const GoogleCloudDialogflowCxV3PlaybookTraceMetadata: Schema.Codec<GoogleCloudDialogflowCxV3PlaybookTraceMetadata> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    playbook: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3PlaybookTraceMetadata" });

export interface GoogleCloudDialogflowCxV3SpeechProcessingMetadata {
  displayName?: string;
}

export const GoogleCloudDialogflowCxV3SpeechProcessingMetadata: Schema.Codec<GoogleCloudDialogflowCxV3SpeechProcessingMetadata> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3SpeechProcessingMetadata",
  });

export interface GoogleCloudDialogflowCxV3TraceBlock {
  flowTraceMetadata?: GoogleCloudDialogflowCxV3FlowTraceMetadata;
  actions?: ReadonlyArray<GoogleCloudDialogflowCxV3Action>;
  endState?:
    | "OUTPUT_STATE_UNSPECIFIED"
    | "OUTPUT_STATE_OK"
    | "OUTPUT_STATE_CANCELLED"
    | "OUTPUT_STATE_FAILED"
    | "OUTPUT_STATE_ESCALATED"
    | "OUTPUT_STATE_PENDING"
    | (string & {});
  playbookTraceMetadata?: GoogleCloudDialogflowCxV3PlaybookTraceMetadata;
  speechProcessingMetadata?: GoogleCloudDialogflowCxV3SpeechProcessingMetadata;
  completeTime?: string;
  outputParameters?: Record<string, unknown>;
  startTime?: string;
  inputParameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3TraceBlock: Schema.Codec<GoogleCloudDialogflowCxV3TraceBlock> =
  /*@__PURE__*/ Schema.Struct({
    flowTraceMetadata: Schema.optional(
      GoogleCloudDialogflowCxV3FlowTraceMetadata,
    ),
    actions: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3Action)),
    endState: Schema.optional(Schema.String),
    playbookTraceMetadata: Schema.optional(
      GoogleCloudDialogflowCxV3PlaybookTraceMetadata,
    ),
    speechProcessingMetadata: Schema.optional(
      GoogleCloudDialogflowCxV3SpeechProcessingMetadata,
    ),
    completeTime: Schema.optional(Schema.String),
    outputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    startTime: Schema.optional(Schema.String),
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TraceBlock" });

export interface GoogleCloudDialogflowCxV3QueryResult {
  triggerIntent?: string;
  languageCode?: string;
  dataStoreConnectionSignals?: GoogleCloudDialogflowCxV3DataStoreConnectionSignals;
  webhookStatuses?: ReadonlyArray<GoogleRpcStatus>;
  responseMessages?: ReadonlyArray<GoogleCloudDialogflowCxV3ResponseMessage>;
  triggerEvent?: string;
  intent?: GoogleCloudDialogflowCxV3Intent;
  webhookPayloads?: ReadonlyArray<Record<string, unknown>>;
  text?: string;
  parameters?: Record<string, unknown>;
  advancedSettings?: GoogleCloudDialogflowCxV3AdvancedSettings;
  currentFlow?: GoogleCloudDialogflowCxV3Flow;
  match?: GoogleCloudDialogflowCxV3Match;
  currentPage?: GoogleCloudDialogflowCxV3Page;
  intentDetectionConfidence?: number;
  sentimentAnalysisResult?: GoogleCloudDialogflowCxV3SentimentAnalysisResult;
  allowAnswerFeedback?: boolean;
  diagnosticInfo?: Record<string, unknown>;
  transcript?: string;
  traceBlocks?: ReadonlyArray<GoogleCloudDialogflowCxV3TraceBlock>;
  dtmf?: GoogleCloudDialogflowCxV3DtmfInput;
}

export const GoogleCloudDialogflowCxV3QueryResult: Schema.Codec<GoogleCloudDialogflowCxV3QueryResult> =
  /*@__PURE__*/ Schema.Struct({
    triggerIntent: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    dataStoreConnectionSignals: Schema.optional(
      GoogleCloudDialogflowCxV3DataStoreConnectionSignals,
    ),
    webhookStatuses: Schema.optional(Schema.Array(GoogleRpcStatus)),
    responseMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ResponseMessage),
    ),
    triggerEvent: Schema.optional(Schema.String),
    intent: Schema.optional(GoogleCloudDialogflowCxV3Intent),
    webhookPayloads: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    text: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettings,
    ),
    currentFlow: Schema.optional(GoogleCloudDialogflowCxV3Flow),
    match: Schema.optional(GoogleCloudDialogflowCxV3Match),
    currentPage: Schema.optional(GoogleCloudDialogflowCxV3Page),
    intentDetectionConfidence: Schema.optional(Schema.Number),
    sentimentAnalysisResult: Schema.optional(
      GoogleCloudDialogflowCxV3SentimentAnalysisResult,
    ),
    allowAnswerFeedback: Schema.optional(Schema.Boolean),
    diagnosticInfo: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    transcript: Schema.optional(Schema.String),
    traceBlocks: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3TraceBlock),
    ),
    dtmf: Schema.optional(GoogleCloudDialogflowCxV3DtmfInput),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3QueryResult" });

export interface GoogleCloudDialogflowCxV3FulfillIntentResponse {
  responseId?: string;
  outputAudioConfig?: GoogleCloudDialogflowCxV3OutputAudioConfig;
  outputAudio?: string;
  queryResult?: GoogleCloudDialogflowCxV3QueryResult;
}

export const GoogleCloudDialogflowCxV3FulfillIntentResponse: Schema.Codec<GoogleCloudDialogflowCxV3FulfillIntentResponse> =
  /*@__PURE__*/ Schema.Struct({
    responseId: Schema.optional(Schema.String),
    outputAudioConfig: Schema.optional(
      GoogleCloudDialogflowCxV3OutputAudioConfig,
    ),
    outputAudio: Schema.optional(Schema.String),
    queryResult: Schema.optional(GoogleCloudDialogflowCxV3QueryResult),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3FulfillIntentResponse" });

export interface GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue {
  originalValue?: string;
  resolvedValue?: unknown;
}

export const GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue: Schema.Codec<GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue> =
  /*@__PURE__*/ Schema.Struct({
    originalValue: Schema.optional(Schema.String),
    resolvedValue: Schema.optional(Schema.Unknown),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue",
  });

export interface GoogleCloudDialogflowCxV3beta1PageInfoFormInfo {
  parameterInfo?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo>;
}

export const GoogleCloudDialogflowCxV3beta1PageInfoFormInfo: Schema.Codec<GoogleCloudDialogflowCxV3beta1PageInfoFormInfo> =
  /*@__PURE__*/ Schema.Struct({
    parameterInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1PageInfoFormInfo" });

export interface GoogleCloudDialogflowCxV3beta1PageInfo {
  displayName?: string;
  currentPage?: string;
  formInfo?: GoogleCloudDialogflowCxV3beta1PageInfoFormInfo;
}

export const GoogleCloudDialogflowCxV3beta1PageInfo: Schema.Codec<GoogleCloudDialogflowCxV3beta1PageInfo> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    currentPage: Schema.optional(Schema.String),
    formInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1PageInfoFormInfo),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1PageInfo" });

export interface GoogleCloudDialogflowV2Context {
  lifespanCount?: number;
  name?: string;
  parameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2Context: Schema.Codec<GoogleCloudDialogflowV2Context> =
  /*@__PURE__*/ Schema.Struct({
    lifespanCount: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Context" });

export interface GoogleCloudDialogflowV2IntentTrainingPhrasePart {
  alias?: string;
  text?: string;
  entityType?: string;
  userDefined?: boolean;
}

export const GoogleCloudDialogflowV2IntentTrainingPhrasePart: Schema.Codec<GoogleCloudDialogflowV2IntentTrainingPhrasePart> =
  /*@__PURE__*/ Schema.Struct({
    alias: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
    entityType: Schema.optional(Schema.String),
    userDefined: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentTrainingPhrasePart",
  });

export interface GoogleCloudDialogflowV2IntentTrainingPhrase {
  timesAddedCount?: number;
  type?: "TYPE_UNSPECIFIED" | "EXAMPLE" | "TEMPLATE" | (string & {});
  parts?: ReadonlyArray<GoogleCloudDialogflowV2IntentTrainingPhrasePart>;
  name?: string;
}

export const GoogleCloudDialogflowV2IntentTrainingPhrase: Schema.Codec<GoogleCloudDialogflowV2IntentTrainingPhrase> =
  /*@__PURE__*/ Schema.Struct({
    timesAddedCount: Schema.optional(Schema.Number),
    type: Schema.optional(Schema.String),
    parts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentTrainingPhrasePart),
    ),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentTrainingPhrase" });

export interface GoogleCloudDialogflowV2IntentParameter {
  defaultValue?: string;
  prompts?: ReadonlyArray<string>;
  mandatory?: boolean;
  displayName?: string;
  name?: string;
  isList?: boolean;
  value?: string;
  entityTypeDisplayName?: string;
}

export const GoogleCloudDialogflowV2IntentParameter: Schema.Codec<GoogleCloudDialogflowV2IntentParameter> =
  /*@__PURE__*/ Schema.Struct({
    defaultValue: Schema.optional(Schema.String),
    prompts: Schema.optional(Schema.Array(Schema.String)),
    mandatory: Schema.optional(Schema.Boolean),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    isList: Schema.optional(Schema.Boolean),
    value: Schema.optional(Schema.String),
    entityTypeDisplayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentParameter" });

export interface GoogleCloudDialogflowV2IntentFollowupIntentInfo {
  followupIntentName?: string;
  parentFollowupIntentName?: string;
}

export const GoogleCloudDialogflowV2IntentFollowupIntentInfo: Schema.Codec<GoogleCloudDialogflowV2IntentFollowupIntentInfo> =
  /*@__PURE__*/ Schema.Struct({
    followupIntentName: Schema.optional(Schema.String),
    parentFollowupIntentName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentFollowupIntentInfo",
  });

export interface GoogleCloudDialogflowV2IntentMessageQuickReplies {
  quickReplies?: ReadonlyArray<string>;
  title?: string;
}

export const GoogleCloudDialogflowV2IntentMessageQuickReplies: Schema.Codec<GoogleCloudDialogflowV2IntentMessageQuickReplies> =
  /*@__PURE__*/ Schema.Struct({
    quickReplies: Schema.optional(Schema.Array(Schema.String)),
    title: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageQuickReplies",
  });

export interface GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction {
  uri?: string;
}

export const GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction: Schema.Codec<GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction> =
  /*@__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction",
  });

export interface GoogleCloudDialogflowV2IntentMessageBasicCardButton {
  title?: string;
  openUriAction?: GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction;
}

export const GoogleCloudDialogflowV2IntentMessageBasicCardButton: Schema.Codec<GoogleCloudDialogflowV2IntentMessageBasicCardButton> =
  /*@__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    openUriAction: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageBasicCardButton",
  });

export interface GoogleCloudDialogflowV2IntentMessageBasicCard {
  formattedText?: string;
  title?: string;
  subtitle?: string;
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageBasicCardButton>;
  image?: GoogleCloudDialogflowV2IntentMessageImage;
}

export const GoogleCloudDialogflowV2IntentMessageBasicCard: Schema.Codec<GoogleCloudDialogflowV2IntentMessageBasicCard> =
  /*@__PURE__*/ Schema.Struct({
    formattedText: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    subtitle: Schema.optional(Schema.String),
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageBasicCardButton),
    ),
    image: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageBasicCard" });

export interface GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject {
  largeImage?: GoogleCloudDialogflowV2IntentMessageImage;
  name?: string;
  description?: string;
  icon?: GoogleCloudDialogflowV2IntentMessageImage;
  contentUrl?: string;
}

export const GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject: Schema.Codec<GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject> =
  /*@__PURE__*/ Schema.Struct({
    largeImage: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    icon: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
    contentUrl: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject",
  });

export interface GoogleCloudDialogflowV2IntentMessageMediaContent {
  mediaType?: "RESPONSE_MEDIA_TYPE_UNSPECIFIED" | "AUDIO" | (string & {});
  mediaObjects?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject>;
}

export const GoogleCloudDialogflowV2IntentMessageMediaContent: Schema.Codec<GoogleCloudDialogflowV2IntentMessageMediaContent> =
  /*@__PURE__*/ Schema.Struct({
    mediaType: Schema.optional(Schema.String),
    mediaObjects: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageMediaContent",
  });

export interface GoogleCloudDialogflowV2IntentMessageSuggestions {
  suggestions?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageSuggestion>;
}

export const GoogleCloudDialogflowV2IntentMessageSuggestions: Schema.Codec<GoogleCloudDialogflowV2IntentMessageSuggestions> =
  /*@__PURE__*/ Schema.Struct({
    suggestions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageSuggestion),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageSuggestions",
  });

export interface GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion {
  destinationName?: string;
  uri?: string;
}

export const GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion: Schema.Codec<GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion> =
  /*@__PURE__*/ Schema.Struct({
    destinationName: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion",
  });

export interface GoogleCloudDialogflowV2IntentMessageText {
  text?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2IntentMessageText: Schema.Codec<GoogleCloudDialogflowV2IntentMessageText> =
  /*@__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageText" });

export interface GoogleCloudDialogflowV2IntentMessageSimpleResponse {
  displayText?: string;
  textToSpeech?: string;
  ssml?: string;
}

export const GoogleCloudDialogflowV2IntentMessageSimpleResponse: Schema.Codec<GoogleCloudDialogflowV2IntentMessageSimpleResponse> =
  /*@__PURE__*/ Schema.Struct({
    displayText: Schema.optional(Schema.String),
    textToSpeech: Schema.optional(Schema.String),
    ssml: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageSimpleResponse",
  });

export interface GoogleCloudDialogflowV2IntentMessageSimpleResponses {
  simpleResponses?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageSimpleResponse>;
}

export const GoogleCloudDialogflowV2IntentMessageSimpleResponses: Schema.Codec<GoogleCloudDialogflowV2IntentMessageSimpleResponses> =
  /*@__PURE__*/ Schema.Struct({
    simpleResponses: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageSimpleResponse),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageSimpleResponses",
  });

export interface GoogleCloudDialogflowV2IntentMessageColumnProperties {
  header?: string;
  horizontalAlignment?:
    | "HORIZONTAL_ALIGNMENT_UNSPECIFIED"
    | "LEADING"
    | "CENTER"
    | "TRAILING"
    | (string & {});
}

export const GoogleCloudDialogflowV2IntentMessageColumnProperties: Schema.Codec<GoogleCloudDialogflowV2IntentMessageColumnProperties> =
  /*@__PURE__*/ Schema.Struct({
    header: Schema.optional(Schema.String),
    horizontalAlignment: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageColumnProperties",
  });

export interface GoogleCloudDialogflowV2IntentMessageTableCardCell {
  text?: string;
}

export const GoogleCloudDialogflowV2IntentMessageTableCardCell: Schema.Codec<GoogleCloudDialogflowV2IntentMessageTableCardCell> =
  /*@__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageTableCardCell",
  });

export interface GoogleCloudDialogflowV2IntentMessageTableCardRow {
  dividerAfter?: boolean;
  cells?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageTableCardCell>;
}

export const GoogleCloudDialogflowV2IntentMessageTableCardRow: Schema.Codec<GoogleCloudDialogflowV2IntentMessageTableCardRow> =
  /*@__PURE__*/ Schema.Struct({
    dividerAfter: Schema.optional(Schema.Boolean),
    cells: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageTableCardCell),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageTableCardRow",
  });

export interface GoogleCloudDialogflowV2IntentMessageTableCard {
  image?: GoogleCloudDialogflowV2IntentMessageImage;
  columnProperties?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageColumnProperties>;
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageBasicCardButton>;
  rows?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageTableCardRow>;
  title?: string;
  subtitle?: string;
}

export const GoogleCloudDialogflowV2IntentMessageTableCard: Schema.Codec<GoogleCloudDialogflowV2IntentMessageTableCard> =
  /*@__PURE__*/ Schema.Struct({
    image: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
    columnProperties: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageColumnProperties),
    ),
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageBasicCardButton),
    ),
    rows: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageTableCardRow),
    ),
    title: Schema.optional(Schema.String),
    subtitle: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageTableCard" });

export interface GoogleCloudDialogflowV2IntentMessageCarouselSelect {
  items?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageCarouselSelectItem>;
}

export const GoogleCloudDialogflowV2IntentMessageCarouselSelect: Schema.Codec<GoogleCloudDialogflowV2IntentMessageCarouselSelect> =
  /*@__PURE__*/ Schema.Struct({
    items: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageCarouselSelectItem),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageCarouselSelect",
  });

export interface GoogleCloudDialogflowV2IntentMessageListSelectItem {
  title?: string;
  description?: string;
  image?: GoogleCloudDialogflowV2IntentMessageImage;
  info?: GoogleCloudDialogflowV2IntentMessageSelectItemInfo;
}

export const GoogleCloudDialogflowV2IntentMessageListSelectItem: Schema.Codec<GoogleCloudDialogflowV2IntentMessageListSelectItem> =
  /*@__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
    info: Schema.optional(GoogleCloudDialogflowV2IntentMessageSelectItemInfo),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageListSelectItem",
  });

export interface GoogleCloudDialogflowV2IntentMessageListSelect {
  title?: string;
  items?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageListSelectItem>;
  subtitle?: string;
}

export const GoogleCloudDialogflowV2IntentMessageListSelect: Schema.Codec<GoogleCloudDialogflowV2IntentMessageListSelect> =
  /*@__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    items: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageListSelectItem),
    ),
    subtitle: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageListSelect" });

export interface GoogleCloudDialogflowV2IntentMessage {
  quickReplies?: GoogleCloudDialogflowV2IntentMessageQuickReplies;
  basicCard?: GoogleCloudDialogflowV2IntentMessageBasicCard;
  image?: GoogleCloudDialogflowV2IntentMessageImage;
  mediaContent?: GoogleCloudDialogflowV2IntentMessageMediaContent;
  suggestions?: GoogleCloudDialogflowV2IntentMessageSuggestions;
  card?: GoogleCloudDialogflowV2IntentMessageCard;
  platform?:
    | "PLATFORM_UNSPECIFIED"
    | "FACEBOOK"
    | "SLACK"
    | "TELEGRAM"
    | "KIK"
    | "SKYPE"
    | "LINE"
    | "VIBER"
    | "ACTIONS_ON_GOOGLE"
    | "GOOGLE_HANGOUTS"
    | (string & {});
  browseCarouselCard?: GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard;
  linkOutSuggestion?: GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion;
  text?: GoogleCloudDialogflowV2IntentMessageText;
  simpleResponses?: GoogleCloudDialogflowV2IntentMessageSimpleResponses;
  tableCard?: GoogleCloudDialogflowV2IntentMessageTableCard;
  carouselSelect?: GoogleCloudDialogflowV2IntentMessageCarouselSelect;
  payload?: Record<string, unknown>;
  listSelect?: GoogleCloudDialogflowV2IntentMessageListSelect;
}

export const GoogleCloudDialogflowV2IntentMessage: Schema.Codec<GoogleCloudDialogflowV2IntentMessage> =
  /*@__PURE__*/ Schema.Struct({
    quickReplies: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageQuickReplies,
    ),
    basicCard: Schema.optional(GoogleCloudDialogflowV2IntentMessageBasicCard),
    image: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
    mediaContent: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageMediaContent,
    ),
    suggestions: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageSuggestions,
    ),
    card: Schema.optional(GoogleCloudDialogflowV2IntentMessageCard),
    platform: Schema.optional(Schema.String),
    browseCarouselCard: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard,
    ),
    linkOutSuggestion: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion,
    ),
    text: Schema.optional(GoogleCloudDialogflowV2IntentMessageText),
    simpleResponses: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageSimpleResponses,
    ),
    tableCard: Schema.optional(GoogleCloudDialogflowV2IntentMessageTableCard),
    carouselSelect: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageCarouselSelect,
    ),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    listSelect: Schema.optional(GoogleCloudDialogflowV2IntentMessageListSelect),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessage" });

export interface GoogleCloudDialogflowV2Intent {
  resetContexts?: boolean;
  isFallback?: boolean;
  inputContextNames?: ReadonlyArray<string>;
  action?: string;
  displayName?: string;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2Context>;
  defaultResponsePlatforms?: ReadonlyArray<
    | "PLATFORM_UNSPECIFIED"
    | "FACEBOOK"
    | "SLACK"
    | "TELEGRAM"
    | "KIK"
    | "SKYPE"
    | "LINE"
    | "VIBER"
    | "ACTIONS_ON_GOOGLE"
    | "GOOGLE_HANGOUTS"
    | (string & {})
  >;
  webhookState?:
    | "WEBHOOK_STATE_UNSPECIFIED"
    | "WEBHOOK_STATE_ENABLED"
    | "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"
    | (string & {});
  parentFollowupIntentName?: string;
  endInteraction?: boolean;
  trainingPhrases?: ReadonlyArray<GoogleCloudDialogflowV2IntentTrainingPhrase>;
  parameters?: ReadonlyArray<GoogleCloudDialogflowV2IntentParameter>;
  rootFollowupIntentName?: string;
  mlDisabled?: boolean;
  followupIntentInfo?: ReadonlyArray<GoogleCloudDialogflowV2IntentFollowupIntentInfo>;
  messages?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessage>;
  liveAgentHandoff?: boolean;
  priority?: number;
  name?: string;
  events?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2Intent: Schema.Codec<GoogleCloudDialogflowV2Intent> =
  /*@__PURE__*/ Schema.Struct({
    resetContexts: Schema.optional(Schema.Boolean),
    isFallback: Schema.optional(Schema.Boolean),
    inputContextNames: Schema.optional(Schema.Array(Schema.String)),
    action: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2Context),
    ),
    defaultResponsePlatforms: Schema.optional(Schema.Array(Schema.String)),
    webhookState: Schema.optional(Schema.String),
    parentFollowupIntentName: Schema.optional(Schema.String),
    endInteraction: Schema.optional(Schema.Boolean),
    trainingPhrases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentTrainingPhrase),
    ),
    parameters: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentParameter),
    ),
    rootFollowupIntentName: Schema.optional(Schema.String),
    mlDisabled: Schema.optional(Schema.Boolean),
    followupIntentInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentFollowupIntentInfo),
    ),
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessage),
    ),
    liveAgentHandoff: Schema.optional(Schema.Boolean),
    priority: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    events: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Intent" });

export interface GoogleCloudDialogflowV2BatchUpdateIntentsResponse {
  intents?: ReadonlyArray<GoogleCloudDialogflowV2Intent>;
}

export const GoogleCloudDialogflowV2BatchUpdateIntentsResponse: Schema.Codec<GoogleCloudDialogflowV2BatchUpdateIntentsResponse> =
  /*@__PURE__*/ Schema.Struct({
    intents: Schema.optional(Schema.Array(GoogleCloudDialogflowV2Intent)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2BatchUpdateIntentsResponse",
  });

export interface GoogleCloudDialogflowV2beta1ExportOperationMetadata {
  exportedGcsDestination?: GoogleCloudDialogflowV2beta1GcsDestination;
}

export const GoogleCloudDialogflowV2beta1ExportOperationMetadata: Schema.Codec<GoogleCloudDialogflowV2beta1ExportOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    exportedGcsDestination: Schema.optional(
      GoogleCloudDialogflowV2beta1GcsDestination,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ExportOperationMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1LanguageInfo {
  confidenceScore?: number;
  resolvedLanguageCode?: string;
  inputLanguageCode?: string;
}

export const GoogleCloudDialogflowCxV3beta1LanguageInfo: Schema.Codec<GoogleCloudDialogflowCxV3beta1LanguageInfo> =
  /*@__PURE__*/ Schema.Struct({
    confidenceScore: Schema.optional(Schema.Number),
    resolvedLanguageCode: Schema.optional(Schema.String),
    inputLanguageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1LanguageInfo" });

export interface GoogleCloudDialogflowCxV3Example {
  playbookInput?: GoogleCloudDialogflowCxV3PlaybookInput;
  playbookOutput?: GoogleCloudDialogflowCxV3PlaybookOutput;
  actions?: ReadonlyArray<GoogleCloudDialogflowCxV3Action>;
  tokenCount?: string;
  languageCode?: string;
  description?: string;
  updateTime?: string;
  conversationState?:
    | "OUTPUT_STATE_UNSPECIFIED"
    | "OUTPUT_STATE_OK"
    | "OUTPUT_STATE_CANCELLED"
    | "OUTPUT_STATE_FAILED"
    | "OUTPUT_STATE_ESCALATED"
    | "OUTPUT_STATE_PENDING"
    | (string & {});
  name?: string;
  displayName?: string;
  createTime?: string;
}

export const GoogleCloudDialogflowCxV3Example: Schema.Codec<GoogleCloudDialogflowCxV3Example> =
  /*@__PURE__*/ Schema.Struct({
    playbookInput: Schema.optional(GoogleCloudDialogflowCxV3PlaybookInput),
    playbookOutput: Schema.optional(GoogleCloudDialogflowCxV3PlaybookOutput),
    actions: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3Action)),
    tokenCount: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    conversationState: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Example" });

export interface GoogleCloudDialogflowCxV3CodeBlock {
  code?: string;
}

export const GoogleCloudDialogflowCxV3CodeBlock: Schema.Codec<GoogleCloudDialogflowCxV3CodeBlock> =
  /*@__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3CodeBlock" });

export interface GoogleCloudDialogflowCxV3HandlerEventHandler {
  fulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
  event?: string;
  condition?: string;
}

export const GoogleCloudDialogflowCxV3HandlerEventHandler: Schema.Codec<GoogleCloudDialogflowCxV3HandlerEventHandler> =
  /*@__PURE__*/ Schema.Struct({
    fulfillment: Schema.optional(GoogleCloudDialogflowCxV3Fulfillment),
    event: Schema.optional(Schema.String),
    condition: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3HandlerEventHandler" });

export interface GoogleCloudDialogflowCxV3HandlerLifecycleHandler {
  condition?: string;
  lifecycleStage?: string;
  fulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
}

export const GoogleCloudDialogflowCxV3HandlerLifecycleHandler: Schema.Codec<GoogleCloudDialogflowCxV3HandlerLifecycleHandler> =
  /*@__PURE__*/ Schema.Struct({
    condition: Schema.optional(Schema.String),
    lifecycleStage: Schema.optional(Schema.String),
    fulfillment: Schema.optional(GoogleCloudDialogflowCxV3Fulfillment),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3HandlerLifecycleHandler",
  });

export interface GoogleCloudDialogflowCxV3Handler {
  eventHandler?: GoogleCloudDialogflowCxV3HandlerEventHandler;
  lifecycleHandler?: GoogleCloudDialogflowCxV3HandlerLifecycleHandler;
}

export const GoogleCloudDialogflowCxV3Handler: Schema.Codec<GoogleCloudDialogflowCxV3Handler> =
  /*@__PURE__*/ Schema.Struct({
    eventHandler: Schema.optional(GoogleCloudDialogflowCxV3HandlerEventHandler),
    lifecycleHandler: Schema.optional(
      GoogleCloudDialogflowCxV3HandlerLifecycleHandler,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Handler" });

export interface GoogleCloudDialogflowCxV3Playbook {
  llmModelSettings?: GoogleCloudDialogflowCxV3LlmModelSettings;
  tokenCount?: string;
  referencedPlaybooks?: ReadonlyArray<string>;
  name?: string;
  instruction?: GoogleCloudDialogflowCxV3PlaybookInstruction;
  codeBlock?: GoogleCloudDialogflowCxV3CodeBlock;
  handlers?: ReadonlyArray<GoogleCloudDialogflowCxV3Handler>;
  updateTime?: string;
  referencedFlows?: ReadonlyArray<string>;
  referencedTools?: ReadonlyArray<string>;
  playbookType?:
    | "PLAYBOOK_TYPE_UNSPECIFIED"
    | "TASK"
    | "ROUTINE"
    | (string & {});
  inputParameterDefinitions?: ReadonlyArray<GoogleCloudDialogflowCxV3ParameterDefinition>;
  displayName?: string;
  createTime?: string;
  inlineActions?: ReadonlyArray<string>;
  outputParameterDefinitions?: ReadonlyArray<GoogleCloudDialogflowCxV3ParameterDefinition>;
  goal?: string;
}

export const GoogleCloudDialogflowCxV3Playbook: Schema.Codec<GoogleCloudDialogflowCxV3Playbook> =
  /*@__PURE__*/ Schema.Struct({
    llmModelSettings: Schema.optional(
      GoogleCloudDialogflowCxV3LlmModelSettings,
    ),
    tokenCount: Schema.optional(Schema.String),
    referencedPlaybooks: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    instruction: Schema.optional(GoogleCloudDialogflowCxV3PlaybookInstruction),
    codeBlock: Schema.optional(GoogleCloudDialogflowCxV3CodeBlock),
    handlers: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3Handler)),
    updateTime: Schema.optional(Schema.String),
    referencedFlows: Schema.optional(Schema.Array(Schema.String)),
    referencedTools: Schema.optional(Schema.Array(Schema.String)),
    playbookType: Schema.optional(Schema.String),
    inputParameterDefinitions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ParameterDefinition),
    ),
    displayName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    inlineActions: Schema.optional(Schema.Array(Schema.String)),
    outputParameterDefinitions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ParameterDefinition),
    ),
    goal: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Playbook" });

export interface GoogleCloudDialogflowCxV3PlaybookVersion {
  updateTime?: string;
  examples?: ReadonlyArray<GoogleCloudDialogflowCxV3Example>;
  description?: string;
  name?: string;
  playbook?: GoogleCloudDialogflowCxV3Playbook;
}

export const GoogleCloudDialogflowCxV3PlaybookVersion: Schema.Codec<GoogleCloudDialogflowCxV3PlaybookVersion> =
  /*@__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    examples: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3Example)),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    playbook: Schema.optional(GoogleCloudDialogflowCxV3Playbook),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3PlaybookVersion" });

export interface GoogleCloudDialogflowCxV3ListPlaybookVersionsResponse {
  playbookVersions?: ReadonlyArray<GoogleCloudDialogflowCxV3PlaybookVersion>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3ListPlaybookVersionsResponse: Schema.Codec<GoogleCloudDialogflowCxV3ListPlaybookVersionsResponse> =
  /*@__PURE__*/ Schema.Struct({
    playbookVersions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3PlaybookVersion),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ListPlaybookVersionsResponse",
  });

export interface GoogleCloudDialogflowV2GcsDestination {
  uri?: string;
}

export const GoogleCloudDialogflowV2GcsDestination: Schema.Codec<GoogleCloudDialogflowV2GcsDestination> =
  /*@__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2GcsDestination" });

export interface GoogleCloudDialogflowV2beta1Sentiment {
  score?: number;
  magnitude?: number;
}

export const GoogleCloudDialogflowV2beta1Sentiment: Schema.Codec<GoogleCloudDialogflowV2beta1Sentiment> =
  /*@__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.Number),
    magnitude: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1Sentiment" });

export interface GoogleCloudDialogflowV2beta1SentimentAnalysisResult {
  queryTextSentiment?: GoogleCloudDialogflowV2beta1Sentiment;
}

export const GoogleCloudDialogflowV2beta1SentimentAnalysisResult: Schema.Codec<GoogleCloudDialogflowV2beta1SentimentAnalysisResult> =
  /*@__PURE__*/ Schema.Struct({
    queryTextSentiment: Schema.optional(GoogleCloudDialogflowV2beta1Sentiment),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SentimentAnalysisResult",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer {
  source?: string;
  answer?: string;
  faqQuestion?: string;
  matchConfidence?: number;
  matchConfidenceLevel?:
    | "MATCH_CONFIDENCE_LEVEL_UNSPECIFIED"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer: Schema.Codec<GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer> =
  /*@__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
    answer: Schema.optional(Schema.String),
    faqQuestion: Schema.optional(Schema.String),
    matchConfidence: Schema.optional(Schema.Number),
    matchConfidenceLevel: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAnswers {
  answers?: ReadonlyArray<GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer>;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAnswers: Schema.Codec<GoogleCloudDialogflowV2beta1KnowledgeAnswers> =
  /*@__PURE__*/ Schema.Struct({
    answers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1KnowledgeAnswers" });

export interface GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart {
  alias?: string;
  text?: string;
  entityType?: string;
  userDefined?: boolean;
}

export const GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart: Schema.Codec<GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart> =
  /*@__PURE__*/ Schema.Struct({
    alias: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
    entityType: Schema.optional(Schema.String),
    userDefined: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart",
  });

export interface GoogleCloudDialogflowV2beta1IntentTrainingPhrase {
  timesAddedCount?: number;
  type?: "TYPE_UNSPECIFIED" | "EXAMPLE" | "TEMPLATE" | (string & {});
  parts?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart>;
  name?: string;
}

export const GoogleCloudDialogflowV2beta1IntentTrainingPhrase: Schema.Codec<GoogleCloudDialogflowV2beta1IntentTrainingPhrase> =
  /*@__PURE__*/ Schema.Struct({
    timesAddedCount: Schema.optional(Schema.Number),
    type: Schema.optional(Schema.String),
    parts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart),
    ),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentTrainingPhrase",
  });

export interface GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo {
  followupIntentName?: string;
  parentFollowupIntentName?: string;
}

export const GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo: Schema.Codec<GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo> =
  /*@__PURE__*/ Schema.Struct({
    followupIntentName: Schema.optional(Schema.String),
    parentFollowupIntentName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo",
  });

export interface GoogleCloudDialogflowV2beta1Intent {
  action?: string;
  webhookState?:
    | "WEBHOOK_STATE_UNSPECIFIED"
    | "WEBHOOK_STATE_ENABLED"
    | "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"
    | (string & {});
  parentFollowupIntentName?: string;
  displayName?: string;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2beta1Context>;
  defaultResponsePlatforms?: ReadonlyArray<
    | "PLATFORM_UNSPECIFIED"
    | "FACEBOOK"
    | "SLACK"
    | "TELEGRAM"
    | "KIK"
    | "SKYPE"
    | "LINE"
    | "VIBER"
    | "ACTIONS_ON_GOOGLE"
    | "TELEPHONY"
    | "GOOGLE_HANGOUTS"
    | (string & {})
  >;
  resetContexts?: boolean;
  isFallback?: boolean;
  inputContextNames?: ReadonlyArray<string>;
  liveAgentHandoff?: boolean;
  mlEnabled?: boolean;
  priority?: number;
  name?: string;
  events?: ReadonlyArray<string>;
  trainingPhrases?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentTrainingPhrase>;
  parameters?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentParameter>;
  endInteraction?: boolean;
  mlDisabled?: boolean;
  followupIntentInfo?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo>;
  rootFollowupIntentName?: string;
  messages?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessage>;
}

export const GoogleCloudDialogflowV2beta1Intent: Schema.Codec<GoogleCloudDialogflowV2beta1Intent> =
  /*@__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    webhookState: Schema.optional(Schema.String),
    parentFollowupIntentName: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1Context),
    ),
    defaultResponsePlatforms: Schema.optional(Schema.Array(Schema.String)),
    resetContexts: Schema.optional(Schema.Boolean),
    isFallback: Schema.optional(Schema.Boolean),
    inputContextNames: Schema.optional(Schema.Array(Schema.String)),
    liveAgentHandoff: Schema.optional(Schema.Boolean),
    mlEnabled: Schema.optional(Schema.Boolean),
    priority: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    events: Schema.optional(Schema.Array(Schema.String)),
    trainingPhrases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentTrainingPhrase),
    ),
    parameters: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentParameter),
    ),
    endInteraction: Schema.optional(Schema.Boolean),
    mlDisabled: Schema.optional(Schema.Boolean),
    followupIntentInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo),
    ),
    rootFollowupIntentName: Schema.optional(Schema.String),
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessage),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1Intent" });

export interface GoogleCloudDialogflowV2beta1QueryResult {
  parameters?: Record<string, unknown>;
  allRequiredParamsPresent?: boolean;
  sentimentAnalysisResult?: GoogleCloudDialogflowV2beta1SentimentAnalysisResult;
  intentDetectionConfidence?: number;
  knowledgeAnswers?: GoogleCloudDialogflowV2beta1KnowledgeAnswers;
  speechRecognitionConfidence?: number;
  diagnosticInfo?: Record<string, unknown>;
  cancelsSlotFilling?: boolean;
  languageCode?: string;
  webhookSource?: string;
  fulfillmentMessages?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessage>;
  action?: string;
  intent?: GoogleCloudDialogflowV2beta1Intent;
  queryText?: string;
  webhookPayload?: Record<string, unknown>;
  fulfillmentText?: string;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2beta1Context>;
}

export const GoogleCloudDialogflowV2beta1QueryResult: Schema.Codec<GoogleCloudDialogflowV2beta1QueryResult> =
  /*@__PURE__*/ Schema.Struct({
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    allRequiredParamsPresent: Schema.optional(Schema.Boolean),
    sentimentAnalysisResult: Schema.optional(
      GoogleCloudDialogflowV2beta1SentimentAnalysisResult,
    ),
    intentDetectionConfidence: Schema.optional(Schema.Number),
    knowledgeAnswers: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAnswers,
    ),
    speechRecognitionConfidence: Schema.optional(Schema.Number),
    diagnosticInfo: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    cancelsSlotFilling: Schema.optional(Schema.Boolean),
    languageCode: Schema.optional(Schema.String),
    webhookSource: Schema.optional(Schema.String),
    fulfillmentMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessage),
    ),
    action: Schema.optional(Schema.String),
    intent: Schema.optional(GoogleCloudDialogflowV2beta1Intent),
    queryText: Schema.optional(Schema.String),
    webhookPayload: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    fulfillmentText: Schema.optional(Schema.String),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1Context),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1QueryResult" });

export interface GoogleCloudDialogflowV2beta1IntentSuggestion {
  intentV2?: string;
  displayName?: string;
  description?: string;
}

export const GoogleCloudDialogflowV2beta1IntentSuggestion: Schema.Codec<GoogleCloudDialogflowV2beta1IntentSuggestion> =
  /*@__PURE__*/ Schema.Struct({
    intentV2: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentSuggestion" });

export interface GoogleCloudDialogflowV2beta1DialogflowAssistAnswer {
  queryResult?: GoogleCloudDialogflowV2beta1QueryResult;
  intentSuggestion?: GoogleCloudDialogflowV2beta1IntentSuggestion;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2beta1DialogflowAssistAnswer: Schema.Codec<GoogleCloudDialogflowV2beta1DialogflowAssistAnswer> =
  /*@__PURE__*/ Schema.Struct({
    queryResult: Schema.optional(GoogleCloudDialogflowV2beta1QueryResult),
    intentSuggestion: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentSuggestion,
    ),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1DialogflowAssistAnswer",
  });

export interface GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse {
  dialogflowAssistAnswers?: ReadonlyArray<GoogleCloudDialogflowV2beta1DialogflowAssistAnswer>;
  latestMessage?: string;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse: Schema.Codec<GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse> =
  /*@__PURE__*/ Schema.Struct({
    dialogflowAssistAnswers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1DialogflowAssistAnswer),
    ),
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse",
  });

export interface GoogleCloudDialogflowV2beta1SmartReplyAnswer {
  reply?: string;
  answerRecord?: string;
  confidence?: number;
}

export const GoogleCloudDialogflowV2beta1SmartReplyAnswer: Schema.Codec<GoogleCloudDialogflowV2beta1SmartReplyAnswer> =
  /*@__PURE__*/ Schema.Struct({
    reply: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1SmartReplyAnswer" });

export interface GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse {
  smartReplyAnswers?: ReadonlyArray<GoogleCloudDialogflowV2beta1SmartReplyAnswer>;
  latestMessage?: string;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse: Schema.Codec<GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse> =
  /*@__PURE__*/ Schema.Struct({
    smartReplyAnswers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SmartReplyAnswer),
    ),
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse",
  });

export interface GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse {
  knowledgeAssistAnswer?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswer;
  latestMessage?: string;
  contextSize?: number;
  additionalSuggestedQueryResults?: ReadonlyArray<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerAdditionalSuggestedQueryResult>;
}

export const GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse: Schema.Codec<GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse> =
  /*@__PURE__*/ Schema.Struct({
    knowledgeAssistAnswer: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswer,
    ),
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
    additionalSuggestedQueryResults: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerAdditionalSuggestedQueryResult,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse",
  });

export interface GoogleCloudDialogflowV2beta1FaqAnswer {
  confidence?: number;
  metadata?: Record<string, string>;
  answerRecord?: string;
  source?: string;
  answer?: string;
  question?: string;
}

export const GoogleCloudDialogflowV2beta1FaqAnswer: Schema.Codec<GoogleCloudDialogflowV2beta1FaqAnswer> =
  /*@__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    answerRecord: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    answer: Schema.optional(Schema.String),
    question: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1FaqAnswer" });

export interface GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse {
  faqAnswers?: ReadonlyArray<GoogleCloudDialogflowV2beta1FaqAnswer>;
  latestMessage?: string;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse: Schema.Codec<GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse> =
  /*@__PURE__*/ Schema.Struct({
    faqAnswers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1FaqAnswer),
    ),
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse",
  });

export interface GoogleCloudDialogflowV2beta1SuggestionResult {
  suggestEntityExtractionResponse?: GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse;
  generateSuggestionsResponse?: GoogleCloudDialogflowV2beta1GenerateSuggestionsResponse;
  suggestArticlesResponse?: GoogleCloudDialogflowV2beta1SuggestArticlesResponse;
  error?: GoogleRpcStatus;
  suggestSmartRepliesResponse?: GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse;
  suggestDialogflowAssistsResponse?: GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse;
  suggestKnowledgeAssistResponse?: GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse;
  suggestFaqAnswersResponse?: GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse;
}

export const GoogleCloudDialogflowV2beta1SuggestionResult: Schema.Codec<GoogleCloudDialogflowV2beta1SuggestionResult> =
  /*@__PURE__*/ Schema.Struct({
    suggestEntityExtractionResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse,
    ),
    generateSuggestionsResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1GenerateSuggestionsResponse,
    ),
    suggestArticlesResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestArticlesResponse,
    ),
    error: Schema.optional(GoogleRpcStatus),
    suggestSmartRepliesResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse,
    ),
    suggestDialogflowAssistsResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse,
    ),
    suggestKnowledgeAssistResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse,
    ),
    suggestFaqAnswersResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1SuggestionResult" });

export interface GoogleCloudDialogflowV2beta1HumanAgentAssistantEvent {
  conversation?: string;
  participant?: string;
  suggestionResults?: ReadonlyArray<GoogleCloudDialogflowV2beta1SuggestionResult>;
}

export const GoogleCloudDialogflowV2beta1HumanAgentAssistantEvent: Schema.Codec<GoogleCloudDialogflowV2beta1HumanAgentAssistantEvent> =
  /*@__PURE__*/ Schema.Struct({
    conversation: Schema.optional(Schema.String),
    participant: Schema.optional(Schema.String),
    suggestionResults: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SuggestionResult),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1HumanAgentAssistantEvent",
  });

export interface GoogleCloudDialogflowCxV3ValidateAgentRequest {
  languageCode?: string;
}

export const GoogleCloudDialogflowCxV3ValidateAgentRequest: Schema.Codec<GoogleCloudDialogflowCxV3ValidateAgentRequest> =
  /*@__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ValidateAgentRequest" });

export interface GoogleCloudDialogflowCxV3beta1SessionInfo {
  session?: string;
  parameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3beta1SessionInfo: Schema.Codec<GoogleCloudDialogflowCxV3beta1SessionInfo> =
  /*@__PURE__*/ Schema.Struct({
    session: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1SessionInfo" });

export interface GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo {
  tag?: string;
}

export const GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo: Schema.Codec<GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo> =
  /*@__PURE__*/ Schema.Struct({
    tag: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo {
  lastMatchedIntent?: string;
  parameters?: Record<
    string,
    GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue
  >;
  confidence?: number;
  displayName?: string;
}

export const GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo: Schema.Codec<GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo> =
  /*@__PURE__*/ Schema.Struct({
    lastMatchedIntent: Schema.optional(Schema.String),
    parameters: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue,
      ),
    ),
    confidence: Schema.optional(Schema.Number),
    displayName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult {
  magnitude?: number;
  score?: number;
}

export const GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult: Schema.Codec<GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult> =
  /*@__PURE__*/ Schema.Struct({
    magnitude: Schema.optional(Schema.Number),
    score: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookRequest {
  dtmfDigits?: string;
  triggerEvent?: string;
  languageCode?: string;
  triggerIntent?: string;
  transcript?: string;
  sessionInfo?: GoogleCloudDialogflowCxV3beta1SessionInfo;
  pageInfo?: GoogleCloudDialogflowCxV3beta1PageInfo;
  fulfillmentInfo?: GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo;
  intentInfo?: GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo;
  sentimentAnalysisResult?: GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult;
  payload?: Record<string, unknown>;
  detectIntentResponseId?: string;
  messages?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ResponseMessage>;
  languageInfo?: GoogleCloudDialogflowCxV3beta1LanguageInfo;
  text?: string;
}

export const GoogleCloudDialogflowCxV3beta1WebhookRequest: Schema.Codec<GoogleCloudDialogflowCxV3beta1WebhookRequest> =
  /*@__PURE__*/ Schema.Struct({
    dtmfDigits: Schema.optional(Schema.String),
    triggerEvent: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    triggerIntent: Schema.optional(Schema.String),
    transcript: Schema.optional(Schema.String),
    sessionInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1SessionInfo),
    pageInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1PageInfo),
    fulfillmentInfo: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo,
    ),
    intentInfo: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo,
    ),
    sentimentAnalysisResult: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult,
    ),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    detectIntentResponseId: Schema.optional(Schema.String),
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ResponseMessage),
    ),
    languageInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1LanguageInfo),
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1WebhookRequest" });

export interface GoogleCloudDialogflowV2EventInput {
  name?: string;
  languageCode?: string;
  parameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2EventInput: Schema.Codec<GoogleCloudDialogflowV2EventInput> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2EventInput" });

export interface GoogleCloudDialogflowV2WebhookResponse {
  payload?: Record<string, unknown>;
  fulfillmentText?: string;
  fulfillmentMessages?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessage>;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2Context>;
  source?: string;
  sessionEntityTypes?: ReadonlyArray<GoogleCloudDialogflowV2SessionEntityType>;
  followupEventInput?: GoogleCloudDialogflowV2EventInput;
}

export const GoogleCloudDialogflowV2WebhookResponse: Schema.Codec<GoogleCloudDialogflowV2WebhookResponse> =
  /*@__PURE__*/ Schema.Struct({
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    fulfillmentText: Schema.optional(Schema.String),
    fulfillmentMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessage),
    ),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2Context),
    ),
    source: Schema.optional(Schema.String),
    sessionEntityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SessionEntityType),
    ),
    followupEventInput: Schema.optional(GoogleCloudDialogflowV2EventInput),
  }).annotate({ identifier: "GoogleCloudDialogflowV2WebhookResponse" });

export interface GoogleCloudDialogflowCxV3AgentAnswerFeedbackSettings {
  enableAnswerFeedback?: boolean;
}

export const GoogleCloudDialogflowCxV3AgentAnswerFeedbackSettings: Schema.Codec<GoogleCloudDialogflowCxV3AgentAnswerFeedbackSettings> =
  /*@__PURE__*/ Schema.Struct({
    enableAnswerFeedback: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3AgentAnswerFeedbackSettings",
  });

export interface GoogleCloudDialogflowCxV3PageInfo {
  displayName?: string;
  currentPage?: string;
  formInfo?: GoogleCloudDialogflowCxV3PageInfoFormInfo;
}

export const GoogleCloudDialogflowCxV3PageInfo: Schema.Codec<GoogleCloudDialogflowCxV3PageInfo> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    currentPage: Schema.optional(Schema.String),
    formInfo: Schema.optional(GoogleCloudDialogflowCxV3PageInfoFormInfo),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3PageInfo" });

export interface GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponse {
  mergeBehavior?:
    | "MERGE_BEHAVIOR_UNSPECIFIED"
    | "APPEND"
    | "REPLACE"
    | (string & {});
  messages?: ReadonlyArray<GoogleCloudDialogflowCxV3ResponseMessage>;
}

export const GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponse: Schema.Codec<GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponse> =
  /*@__PURE__*/ Schema.Struct({
    mergeBehavior: Schema.optional(Schema.String),
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ResponseMessage),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponse",
  });

export interface GoogleCloudDialogflowCxV3SessionInfo {
  parameters?: Record<string, unknown>;
  session?: string;
}

export const GoogleCloudDialogflowCxV3SessionInfo: Schema.Codec<GoogleCloudDialogflowCxV3SessionInfo> =
  /*@__PURE__*/ Schema.Struct({
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    session: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3SessionInfo" });

export interface GoogleCloudDialogflowCxV3WebhookResponse {
  pageInfo?: GoogleCloudDialogflowCxV3PageInfo;
  targetFlow?: string;
  payload?: Record<string, unknown>;
  targetPage?: string;
  fulfillmentResponse?: GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponse;
  sessionInfo?: GoogleCloudDialogflowCxV3SessionInfo;
}

export const GoogleCloudDialogflowCxV3WebhookResponse: Schema.Codec<GoogleCloudDialogflowCxV3WebhookResponse> =
  /*@__PURE__*/ Schema.Struct({
    pageInfo: Schema.optional(GoogleCloudDialogflowCxV3PageInfo),
    targetFlow: Schema.optional(Schema.String),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    targetPage: Schema.optional(Schema.String),
    fulfillmentResponse: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponse,
    ),
    sessionInfo: Schema.optional(GoogleCloudDialogflowCxV3SessionInfo),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3WebhookResponse" });

export interface GoogleCloudDialogflowV2beta1AnnotatedMessagePart {
  formattedValue?: unknown;
  text?: string;
  entityType?: string;
}

export const GoogleCloudDialogflowV2beta1AnnotatedMessagePart: Schema.Codec<GoogleCloudDialogflowV2beta1AnnotatedMessagePart> =
  /*@__PURE__*/ Schema.Struct({
    formattedValue: Schema.optional(Schema.Unknown),
    text: Schema.optional(Schema.String),
    entityType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1AnnotatedMessagePart",
  });

export interface GoogleCloudDialogflowCxV3RestoreAgentRequestGitSource {
  trackingBranch?: string;
}

export const GoogleCloudDialogflowCxV3RestoreAgentRequestGitSource: Schema.Codec<GoogleCloudDialogflowCxV3RestoreAgentRequestGitSource> =
  /*@__PURE__*/ Schema.Struct({
    trackingBranch: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3RestoreAgentRequestGitSource",
  });

export interface GoogleCloudDialogflowCxV3RestoreAgentRequest {
  agentContent?: string;
  restoreOption?:
    | "RESTORE_OPTION_UNSPECIFIED"
    | "KEEP"
    | "FALLBACK"
    | (string & {});
  agentUri?: string;
  gitSource?: GoogleCloudDialogflowCxV3RestoreAgentRequestGitSource;
}

export const GoogleCloudDialogflowCxV3RestoreAgentRequest: Schema.Codec<GoogleCloudDialogflowCxV3RestoreAgentRequest> =
  /*@__PURE__*/ Schema.Struct({
    agentContent: Schema.optional(Schema.String),
    restoreOption: Schema.optional(Schema.String),
    agentUri: Schema.optional(Schema.String),
    gitSource: Schema.optional(
      GoogleCloudDialogflowCxV3RestoreAgentRequestGitSource,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3RestoreAgentRequest" });

export interface GoogleCloudDialogflowV2ExportOperationMetadata {
  exportedGcsDestination?: GoogleCloudDialogflowV2GcsDestination;
}

export const GoogleCloudDialogflowV2ExportOperationMetadata: Schema.Codec<GoogleCloudDialogflowV2ExportOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    exportedGcsDestination: Schema.optional(
      GoogleCloudDialogflowV2GcsDestination,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ExportOperationMetadata" });

export interface GoogleCloudDialogflowV2KnowledgeOperationMetadata {
  knowledgeBase?: string;
  exportOperationMetadata?: GoogleCloudDialogflowV2ExportOperationMetadata;
  state?: "STATE_UNSPECIFIED" | "PENDING" | "RUNNING" | "DONE" | (string & {});
  doneTime?: string;
}

export const GoogleCloudDialogflowV2KnowledgeOperationMetadata: Schema.Codec<GoogleCloudDialogflowV2KnowledgeOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    knowledgeBase: Schema.optional(Schema.String),
    exportOperationMetadata: Schema.optional(
      GoogleCloudDialogflowV2ExportOperationMetadata,
    ),
    state: Schema.optional(Schema.String),
    doneTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2KnowledgeOperationMetadata",
  });

export interface GoogleCloudDialogflowCxV3ListToolVersionsResponse {
  toolVersions?: ReadonlyArray<GoogleCloudDialogflowCxV3ToolVersion>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3ListToolVersionsResponse: Schema.Codec<GoogleCloudDialogflowCxV3ListToolVersionsResponse> =
  /*@__PURE__*/ Schema.Struct({
    toolVersions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ToolVersion),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ListToolVersionsResponse",
  });

export interface GoogleCloudDialogflowCxV3AgentPersonalizationSettings {
  defaultEndUserMetadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3AgentPersonalizationSettings: Schema.Codec<GoogleCloudDialogflowCxV3AgentPersonalizationSettings> =
  /*@__PURE__*/ Schema.Struct({
    defaultEndUserMetadata: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3AgentPersonalizationSettings",
  });

export interface GoogleCloudDialogflowCxV3ExportIntentsRequest {
  intentsUri?: string;
  intents?: ReadonlyArray<string>;
  intentsContentInline?: boolean;
  dataFormat?:
    | "DATA_FORMAT_UNSPECIFIED"
    | "BLOB"
    | "JSON"
    | "CSV"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3ExportIntentsRequest: Schema.Codec<GoogleCloudDialogflowCxV3ExportIntentsRequest> =
  /*@__PURE__*/ Schema.Struct({
    intentsUri: Schema.optional(Schema.String),
    intents: Schema.optional(Schema.Array(Schema.String)),
    intentsContentInline: Schema.optional(Schema.Boolean),
    dataFormat: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ExportIntentsRequest" });

export interface GoogleCloudDialogflowCxV3ExportTestCasesResponse {
  gcsUri?: string;
  content?: string;
}

export const GoogleCloudDialogflowCxV3ExportTestCasesResponse: Schema.Codec<GoogleCloudDialogflowCxV3ExportTestCasesResponse> =
  /*@__PURE__*/ Schema.Struct({
    gcsUri: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ExportTestCasesResponse",
  });

export interface GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadata {
  participantRole?:
    | "ROLE_UNSPECIFIED"
    | "HUMAN_AGENT"
    | "AUTOMATED_AGENT"
    | "END_USER"
    | (string & {});
  suggestionFeatureType?:
    | "TYPE_UNSPECIFIED"
    | "ARTICLE_SUGGESTION"
    | "FAQ"
    | "SMART_REPLY"
    | "DIALOGFLOW_ASSIST"
    | "CONVERSATION_SUMMARIZATION"
    | "KNOWLEDGE_SEARCH"
    | "KNOWLEDGE_ASSIST"
    | (string & {});
  createTime?: string;
  conversationProfile?: string;
}

export const GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadata: Schema.Codec<GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    participantRole: Schema.optional(Schema.String),
    suggestionFeatureType: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    conversationProfile: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1InlineDestination {
  content?: string;
}

export const GoogleCloudDialogflowCxV3beta1InlineDestination: Schema.Codec<GoogleCloudDialogflowCxV3beta1InlineDestination> =
  /*@__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1InlineDestination",
  });

export interface GoogleCloudDialogflowCxV3AgentGitIntegrationSettingsGithubSettings {
  accessToken?: string;
  trackingBranch?: string;
  branches?: ReadonlyArray<string>;
  repositoryUri?: string;
  displayName?: string;
}

export const GoogleCloudDialogflowCxV3AgentGitIntegrationSettingsGithubSettings: Schema.Codec<GoogleCloudDialogflowCxV3AgentGitIntegrationSettingsGithubSettings> =
  /*@__PURE__*/ Schema.Struct({
    accessToken: Schema.optional(Schema.String),
    trackingBranch: Schema.optional(Schema.String),
    branches: Schema.optional(Schema.Array(Schema.String)),
    repositoryUri: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3AgentGitIntegrationSettingsGithubSettings",
  });

export interface GoogleCloudDialogflowV2beta1MessageAnnotation {
  parts?: ReadonlyArray<GoogleCloudDialogflowV2beta1AnnotatedMessagePart>;
  containEntities?: boolean;
}

export const GoogleCloudDialogflowV2beta1MessageAnnotation: Schema.Codec<GoogleCloudDialogflowV2beta1MessageAnnotation> =
  /*@__PURE__*/ Schema.Struct({
    parts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1AnnotatedMessagePart),
    ),
    containEntities: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1MessageAnnotation" });

export interface GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio {
  segments?: ReadonlyArray<GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment>;
}

export const GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio: Schema.Codec<GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio> =
  /*@__PURE__*/ Schema.Struct({
    segments: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio",
  });

export interface GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff {
  metadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff: Schema.Codec<GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff> =
  /*@__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff",
  });

export interface GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction {}

export const GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction: Schema.Codec<GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction",
  });

export interface GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall {
  phoneNumber?: string;
  sipUri?: string;
}

export const GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall: Schema.Codec<GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall> =
  /*@__PURE__*/ Schema.Struct({
    phoneNumber: Schema.optional(Schema.String),
    sipUri: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall",
  });

export interface GoogleCloudDialogflowV2beta1ResponseMessage {
  mixedAudio?: GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio;
  text?: GoogleCloudDialogflowV2beta1ResponseMessageText;
  payload?: Record<string, unknown>;
  liveAgentHandoff?: GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff;
  endInteraction?: GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction;
  telephonyTransferCall?: GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall;
}

export const GoogleCloudDialogflowV2beta1ResponseMessage: Schema.Codec<GoogleCloudDialogflowV2beta1ResponseMessage> =
  /*@__PURE__*/ Schema.Struct({
    mixedAudio: Schema.optional(
      GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio,
    ),
    text: Schema.optional(GoogleCloudDialogflowV2beta1ResponseMessageText),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    liveAgentHandoff: Schema.optional(
      GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff,
    ),
    endInteraction: Schema.optional(
      GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction,
    ),
    telephonyTransferCall: Schema.optional(
      GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ResponseMessage" });

export interface GoogleCloudDialogflowV2beta1Message {
  sendTime?: string;
  participantRole?:
    | "ROLE_UNSPECIFIED"
    | "HUMAN_AGENT"
    | "AUTOMATED_AGENT"
    | "END_USER"
    | (string & {});
  name?: string;
  createTime?: string;
  messageAnnotation?: GoogleCloudDialogflowV2beta1MessageAnnotation;
  participant?: string;
  sentimentAnalysis?: GoogleCloudDialogflowV2beta1SentimentAnalysisResult;
  content?: string;
  responseMessages?: ReadonlyArray<GoogleCloudDialogflowV2beta1ResponseMessage>;
  languageCode?: string;
}

export const GoogleCloudDialogflowV2beta1Message: Schema.Codec<GoogleCloudDialogflowV2beta1Message> =
  /*@__PURE__*/ Schema.Struct({
    sendTime: Schema.optional(Schema.String),
    participantRole: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    messageAnnotation: Schema.optional(
      GoogleCloudDialogflowV2beta1MessageAnnotation,
    ),
    participant: Schema.optional(Schema.String),
    sentimentAnalysis: Schema.optional(
      GoogleCloudDialogflowV2beta1SentimentAnalysisResult,
    ),
    content: Schema.optional(Schema.String),
    responseMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1ResponseMessage),
    ),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1Message" });

export interface GoogleCloudDialogflowV2beta1SpeechWordInfo {
  word?: string;
  startOffset?: string;
  endOffset?: string;
  confidence?: number;
}

export const GoogleCloudDialogflowV2beta1SpeechWordInfo: Schema.Codec<GoogleCloudDialogflowV2beta1SpeechWordInfo> =
  /*@__PURE__*/ Schema.Struct({
    word: Schema.optional(Schema.String),
    startOffset: Schema.optional(Schema.String),
    endOffset: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1SpeechWordInfo" });

export interface GoogleCloudDialogflowV2beta1TelephonyDtmfEvents {
  dtmfEvents?: ReadonlyArray<
    | "TELEPHONY_DTMF_UNSPECIFIED"
    | "DTMF_ONE"
    | "DTMF_TWO"
    | "DTMF_THREE"
    | "DTMF_FOUR"
    | "DTMF_FIVE"
    | "DTMF_SIX"
    | "DTMF_SEVEN"
    | "DTMF_EIGHT"
    | "DTMF_NINE"
    | "DTMF_ZERO"
    | "DTMF_A"
    | "DTMF_B"
    | "DTMF_C"
    | "DTMF_D"
    | "DTMF_STAR"
    | "DTMF_POUND"
    | (string & {})
  >;
}

export const GoogleCloudDialogflowV2beta1TelephonyDtmfEvents: Schema.Codec<GoogleCloudDialogflowV2beta1TelephonyDtmfEvents> =
  /*@__PURE__*/ Schema.Struct({
    dtmfEvents: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1TelephonyDtmfEvents",
  });

export interface GoogleCloudDialogflowV2beta1StreamingRecognitionResult {
  speechEndOffset?: string;
  stability?: number;
  speechWordInfo?: ReadonlyArray<GoogleCloudDialogflowV2beta1SpeechWordInfo>;
  transcript?: string;
  dtmfDigits?: GoogleCloudDialogflowV2beta1TelephonyDtmfEvents;
  isFinal?: boolean;
  confidence?: number;
  messageType?:
    | "MESSAGE_TYPE_UNSPECIFIED"
    | "TRANSCRIPT"
    | "END_OF_SINGLE_UTTERANCE"
    | "DTMF_DIGITS"
    | "PARTIAL_DTMF_DIGITS"
    | (string & {});
  languageCode?: string;
}

export const GoogleCloudDialogflowV2beta1StreamingRecognitionResult: Schema.Codec<GoogleCloudDialogflowV2beta1StreamingRecognitionResult> =
  /*@__PURE__*/ Schema.Struct({
    speechEndOffset: Schema.optional(Schema.String),
    stability: Schema.optional(Schema.Number),
    speechWordInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SpeechWordInfo),
    ),
    transcript: Schema.optional(Schema.String),
    dtmfDigits: Schema.optional(
      GoogleCloudDialogflowV2beta1TelephonyDtmfEvents,
    ),
    isFinal: Schema.optional(Schema.Boolean),
    confidence: Schema.optional(Schema.Number),
    messageType: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1StreamingRecognitionResult",
  });

export interface GoogleCloudDialogflowV2beta1ConversationEvent {
  newMessagePayload?: GoogleCloudDialogflowV2beta1Message;
  newRecognitionResultPayload?: GoogleCloudDialogflowV2beta1StreamingRecognitionResult;
  conversation?: string;
  type?:
    | "TYPE_UNSPECIFIED"
    | "CONVERSATION_STARTED"
    | "CONVERSATION_FINISHED"
    | "HUMAN_INTERVENTION_NEEDED"
    | "NEW_MESSAGE"
    | "NEW_RECOGNITION_RESULT"
    | "UNRECOVERABLE_ERROR"
    | (string & {});
  errorStatus?: GoogleRpcStatus;
}

export const GoogleCloudDialogflowV2beta1ConversationEvent: Schema.Codec<GoogleCloudDialogflowV2beta1ConversationEvent> =
  /*@__PURE__*/ Schema.Struct({
    newMessagePayload: Schema.optional(GoogleCloudDialogflowV2beta1Message),
    newRecognitionResultPayload: Schema.optional(
      GoogleCloudDialogflowV2beta1StreamingRecognitionResult,
    ),
    conversation: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    errorStatus: Schema.optional(GoogleRpcStatus),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ConversationEvent" });

export interface GoogleCloudDialogflowCxV3RolloutConfigRolloutStep {
  trafficPercent?: number;
  displayName?: string;
  minDuration?: string;
}

export const GoogleCloudDialogflowCxV3RolloutConfigRolloutStep: Schema.Codec<GoogleCloudDialogflowCxV3RolloutConfigRolloutStep> =
  /*@__PURE__*/ Schema.Struct({
    trafficPercent: Schema.optional(Schema.Number),
    displayName: Schema.optional(Schema.String),
    minDuration: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3RolloutConfigRolloutStep",
  });

export interface GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResources {
  entityDisplayNames?: ReadonlyArray<string>;
  intentDisplayNames?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResources: Schema.Codec<GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResources> =
  /*@__PURE__*/ Schema.Struct({
    entityDisplayNames: Schema.optional(Schema.Array(Schema.String)),
    intentDisplayNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResources",
  });

export interface GoogleCloudDialogflowV2AgentCoachingSuggestionSources {
  instructionIndexes?: ReadonlyArray<number>;
}

export const GoogleCloudDialogflowV2AgentCoachingSuggestionSources: Schema.Codec<GoogleCloudDialogflowV2AgentCoachingSuggestionSources> =
  /*@__PURE__*/ Schema.Struct({
    instructionIndexes: Schema.optional(Schema.Array(Schema.Number)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2AgentCoachingSuggestionSources",
  });

export interface GoogleCloudDialogflowV2SummarySuggestionSummarySection {
  section?: string;
  summary?: string;
}

export const GoogleCloudDialogflowV2SummarySuggestionSummarySection: Schema.Codec<GoogleCloudDialogflowV2SummarySuggestionSummarySection> =
  /*@__PURE__*/ Schema.Struct({
    section: Schema.optional(Schema.String),
    summary: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SummarySuggestionSummarySection",
  });

export interface GoogleCloudDialogflowV2SummarySuggestion {
  summarySections?: ReadonlyArray<GoogleCloudDialogflowV2SummarySuggestionSummarySection>;
}

export const GoogleCloudDialogflowV2SummarySuggestion: Schema.Codec<GoogleCloudDialogflowV2SummarySuggestion> =
  /*@__PURE__*/ Schema.Struct({
    summarySections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SummarySuggestionSummarySection),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SummarySuggestion" });

export interface GoogleCloudDialogflowV2ToolCallResultError {
  message?: string;
}

export const GoogleCloudDialogflowV2ToolCallResultError: Schema.Codec<GoogleCloudDialogflowV2ToolCallResultError> =
  /*@__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolCallResultError" });

export interface GoogleCloudDialogflowV2ToolCallResult {
  rawContent?: string;
  cesTool?: string;
  action?: string;
  createTime?: string;
  answerRecord?: string;
  tool?: string;
  cesApp?: string;
  cesToolset?: string;
  content?: string;
  error?: GoogleCloudDialogflowV2ToolCallResultError;
}

export const GoogleCloudDialogflowV2ToolCallResult: Schema.Codec<GoogleCloudDialogflowV2ToolCallResult> =
  /*@__PURE__*/ Schema.Struct({
    rawContent: Schema.optional(Schema.String),
    cesTool: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    tool: Schema.optional(Schema.String),
    cesApp: Schema.optional(Schema.String),
    cesToolset: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    error: Schema.optional(GoogleCloudDialogflowV2ToolCallResultError),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolCallResult" });

export interface GoogleCloudDialogflowV2GeneratorSuggestionToolCallInfo {
  toolCall?: GoogleCloudDialogflowV2ToolCall;
  toolCallResult?: GoogleCloudDialogflowV2ToolCallResult;
}

export const GoogleCloudDialogflowV2GeneratorSuggestionToolCallInfo: Schema.Codec<GoogleCloudDialogflowV2GeneratorSuggestionToolCallInfo> =
  /*@__PURE__*/ Schema.Struct({
    toolCall: Schema.optional(GoogleCloudDialogflowV2ToolCall),
    toolCallResult: Schema.optional(GoogleCloudDialogflowV2ToolCallResult),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2GeneratorSuggestionToolCallInfo",
  });

export interface GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion {
  answerRecord?: string;
  sources?: GoogleCloudDialogflowV2AgentCoachingSuggestionSources;
  suggestionIndex?: number;
  similarityScore?: number;
}

export const GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion: Schema.Codec<GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion> =
  /*@__PURE__*/ Schema.Struct({
    answerRecord: Schema.optional(Schema.String),
    sources: Schema.optional(
      GoogleCloudDialogflowV2AgentCoachingSuggestionSources,
    ),
    suggestionIndex: Schema.optional(Schema.Number),
    similarityScore: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion",
  });

export interface GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResult {
  duplicateSuggestions?: ReadonlyArray<GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion>;
}

export const GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResult: Schema.Codec<GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResult> =
  /*@__PURE__*/ Schema.Struct({
    duplicateSuggestions: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResult",
  });

export interface GoogleCloudDialogflowV2AgentCoachingSuggestionAgentActionSuggestion {
  sources?: GoogleCloudDialogflowV2AgentCoachingSuggestionSources;
  duplicateCheckResult?: GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResult;
  agentAction?: string;
}

export const GoogleCloudDialogflowV2AgentCoachingSuggestionAgentActionSuggestion: Schema.Codec<GoogleCloudDialogflowV2AgentCoachingSuggestionAgentActionSuggestion> =
  /*@__PURE__*/ Schema.Struct({
    sources: Schema.optional(
      GoogleCloudDialogflowV2AgentCoachingSuggestionSources,
    ),
    duplicateCheckResult: Schema.optional(
      GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResult,
    ),
    agentAction: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2AgentCoachingSuggestionAgentActionSuggestion",
  });

export interface GoogleCloudDialogflowV2AgentCoachingSuggestionSampleResponse {
  responseText?: string;
  sources?: GoogleCloudDialogflowV2AgentCoachingSuggestionSources;
  duplicateCheckResult?: GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResult;
}

export const GoogleCloudDialogflowV2AgentCoachingSuggestionSampleResponse: Schema.Codec<GoogleCloudDialogflowV2AgentCoachingSuggestionSampleResponse> =
  /*@__PURE__*/ Schema.Struct({
    responseText: Schema.optional(Schema.String),
    sources: Schema.optional(
      GoogleCloudDialogflowV2AgentCoachingSuggestionSources,
    ),
    duplicateCheckResult: Schema.optional(
      GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResult,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2AgentCoachingSuggestionSampleResponse",
  });

export interface GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResult {
  duplicateSuggestions?: ReadonlyArray<GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion>;
}

export const GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResult: Schema.Codec<GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResult> =
  /*@__PURE__*/ Schema.Struct({
    duplicateSuggestions: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResult",
  });

export interface GoogleCloudDialogflowV2AgentCoachingInstruction {
  displayName?: string;
  duplicateCheckResult?: GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResult;
  agentAction?: string;
  triggeringEvent?:
    | "TRIGGER_EVENT_UNSPECIFIED"
    | "END_OF_UTTERANCE"
    | "MANUAL_CALL"
    | "CUSTOMER_MESSAGE"
    | "AGENT_MESSAGE"
    | "TOOL_CALL_COMPLETION"
    | (string & {});
  displayDetails?: string;
  condition?: string;
  systemAction?: string;
}

export const GoogleCloudDialogflowV2AgentCoachingInstruction: Schema.Codec<GoogleCloudDialogflowV2AgentCoachingInstruction> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    duplicateCheckResult: Schema.optional(
      GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResult,
    ),
    agentAction: Schema.optional(Schema.String),
    triggeringEvent: Schema.optional(Schema.String),
    displayDetails: Schema.optional(Schema.String),
    condition: Schema.optional(Schema.String),
    systemAction: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2AgentCoachingInstruction",
  });

export interface GoogleCloudDialogflowV2AgentCoachingSuggestion {
  agentActionSuggestions?: ReadonlyArray<GoogleCloudDialogflowV2AgentCoachingSuggestionAgentActionSuggestion>;
  sampleResponses?: ReadonlyArray<GoogleCloudDialogflowV2AgentCoachingSuggestionSampleResponse>;
  applicableInstructions?: ReadonlyArray<GoogleCloudDialogflowV2AgentCoachingInstruction>;
}

export const GoogleCloudDialogflowV2AgentCoachingSuggestion: Schema.Codec<GoogleCloudDialogflowV2AgentCoachingSuggestion> =
  /*@__PURE__*/ Schema.Struct({
    agentActionSuggestions: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2AgentCoachingSuggestionAgentActionSuggestion,
      ),
    ),
    sampleResponses: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2AgentCoachingSuggestionSampleResponse,
      ),
    ),
    applicableInstructions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2AgentCoachingInstruction),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2AgentCoachingSuggestion" });

export interface GoogleCloudDialogflowV2FreeFormSuggestion {
  response?: string;
}

export const GoogleCloudDialogflowV2FreeFormSuggestion: Schema.Codec<GoogleCloudDialogflowV2FreeFormSuggestion> =
  /*@__PURE__*/ Schema.Struct({
    response: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2FreeFormSuggestion" });

export interface GoogleCloudDialogflowV2GeneratorSuggestion {
  summarySuggestion?: GoogleCloudDialogflowV2SummarySuggestion;
  toolCallInfo?: ReadonlyArray<GoogleCloudDialogflowV2GeneratorSuggestionToolCallInfo>;
  agentCoachingSuggestion?: GoogleCloudDialogflowV2AgentCoachingSuggestion;
  freeFormSuggestion?: GoogleCloudDialogflowV2FreeFormSuggestion;
}

export const GoogleCloudDialogflowV2GeneratorSuggestion: Schema.Codec<GoogleCloudDialogflowV2GeneratorSuggestion> =
  /*@__PURE__*/ Schema.Struct({
    summarySuggestion: Schema.optional(
      GoogleCloudDialogflowV2SummarySuggestion,
    ),
    toolCallInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2GeneratorSuggestionToolCallInfo),
    ),
    agentCoachingSuggestion: Schema.optional(
      GoogleCloudDialogflowV2AgentCoachingSuggestion,
    ),
    freeFormSuggestion: Schema.optional(
      GoogleCloudDialogflowV2FreeFormSuggestion,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2GeneratorSuggestion" });

export interface GoogleCloudDialogflowCxV3ExportAgentResponse {
  agentUri?: string;
  agentContent?: string;
  commitSha?: string;
}

export const GoogleCloudDialogflowCxV3ExportAgentResponse: Schema.Codec<GoogleCloudDialogflowCxV3ExportAgentResponse> =
  /*@__PURE__*/ Schema.Struct({
    agentUri: Schema.optional(Schema.String),
    agentContent: Schema.optional(Schema.String),
    commitSha: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ExportAgentResponse" });

export interface GoogleCloudDialogflowCxV3beta1ContinuousTestResult {
  result?:
    | "AGGREGATED_TEST_RESULT_UNSPECIFIED"
    | "PASSED"
    | "FAILED"
    | (string & {});
  name?: string;
  testCaseResults?: ReadonlyArray<string>;
  runTime?: string;
}

export const GoogleCloudDialogflowCxV3beta1ContinuousTestResult: Schema.Codec<GoogleCloudDialogflowCxV3beta1ContinuousTestResult> =
  /*@__PURE__*/ Schema.Struct({
    result: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    testCaseResults: Schema.optional(Schema.Array(Schema.String)),
    runTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ContinuousTestResult",
  });

export interface GoogleCloudDialogflowCxV3beta1RunContinuousTestResponse {
  continuousTestResult?: GoogleCloudDialogflowCxV3beta1ContinuousTestResult;
}

export const GoogleCloudDialogflowCxV3beta1RunContinuousTestResponse: Schema.Codec<GoogleCloudDialogflowCxV3beta1RunContinuousTestResponse> =
  /*@__PURE__*/ Schema.Struct({
    continuousTestResult: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ContinuousTestResult,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RunContinuousTestResponse",
  });

export interface GoogleCloudDialogflowCxV3LanguageInfo {
  resolvedLanguageCode?: string;
  confidenceScore?: number;
  inputLanguageCode?: string;
}

export const GoogleCloudDialogflowCxV3LanguageInfo: Schema.Codec<GoogleCloudDialogflowCxV3LanguageInfo> =
  /*@__PURE__*/ Schema.Struct({
    resolvedLanguageCode: Schema.optional(Schema.String),
    confidenceScore: Schema.optional(Schema.Number),
    inputLanguageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3LanguageInfo" });

export interface GoogleCloudDialogflowCxV3TestError {
  status?: GoogleRpcStatus;
  testTime?: string;
  testCase?: string;
}

export const GoogleCloudDialogflowCxV3TestError: Schema.Codec<GoogleCloudDialogflowCxV3TestError> =
  /*@__PURE__*/ Schema.Struct({
    status: Schema.optional(GoogleRpcStatus),
    testTime: Schema.optional(Schema.String),
    testCase: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TestError" });

export interface GoogleCloudDialogflowCxV3RunContinuousTestMetadata {
  errors?: ReadonlyArray<GoogleCloudDialogflowCxV3TestError>;
}

export const GoogleCloudDialogflowCxV3RunContinuousTestMetadata: Schema.Codec<GoogleCloudDialogflowCxV3RunContinuousTestMetadata> =
  /*@__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3TestError)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3RunContinuousTestMetadata",
  });

export interface GoogleCloudDialogflowCxV3SafetySettingsPhrase {
  text?: string;
  languageCode?: string;
}

export const GoogleCloudDialogflowCxV3SafetySettingsPhrase: Schema.Codec<GoogleCloudDialogflowCxV3SafetySettingsPhrase> =
  /*@__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3SafetySettingsPhrase" });

export interface GoogleCloudDialogflowCxV3SafetySettingsRaiSettingsCategoryFilter {
  filterLevel?:
    | "SAFETY_FILTER_LEVEL_UNSPECIFIED"
    | "BLOCK_NONE"
    | "BLOCK_FEW"
    | "BLOCK_SOME"
    | "BLOCK_MOST"
    | (string & {});
  category?:
    | "SAFETY_CATEGORY_UNSPECIFIED"
    | "DANGEROUS_CONTENT"
    | "HATE_SPEECH"
    | "HARASSMENT"
    | "SEXUALLY_EXPLICIT_CONTENT"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3SafetySettingsRaiSettingsCategoryFilter: Schema.Codec<GoogleCloudDialogflowCxV3SafetySettingsRaiSettingsCategoryFilter> =
  /*@__PURE__*/ Schema.Struct({
    filterLevel: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3SafetySettingsRaiSettingsCategoryFilter",
  });

export interface GoogleCloudDialogflowCxV3SafetySettingsRaiSettings {
  categoryFilters?: ReadonlyArray<GoogleCloudDialogflowCxV3SafetySettingsRaiSettingsCategoryFilter>;
}

export const GoogleCloudDialogflowCxV3SafetySettingsRaiSettings: Schema.Codec<GoogleCloudDialogflowCxV3SafetySettingsRaiSettings> =
  /*@__PURE__*/ Schema.Struct({
    categoryFilters: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowCxV3SafetySettingsRaiSettingsCategoryFilter,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3SafetySettingsRaiSettings",
  });

export interface GoogleCloudDialogflowCxV3SafetySettingsPromptSecuritySettings {
  enablePromptSecurity?: boolean;
}

export const GoogleCloudDialogflowCxV3SafetySettingsPromptSecuritySettings: Schema.Codec<GoogleCloudDialogflowCxV3SafetySettingsPromptSecuritySettings> =
  /*@__PURE__*/ Schema.Struct({
    enablePromptSecurity: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3SafetySettingsPromptSecuritySettings",
  });

export interface GoogleCloudDialogflowCxV3SafetySettings {
  bannedPhrases?: ReadonlyArray<GoogleCloudDialogflowCxV3SafetySettingsPhrase>;
  defaultRaiSettings?: GoogleCloudDialogflowCxV3SafetySettingsRaiSettings;
  raiSettings?: GoogleCloudDialogflowCxV3SafetySettingsRaiSettings;
  promptSecuritySettings?: GoogleCloudDialogflowCxV3SafetySettingsPromptSecuritySettings;
  defaultBannedPhraseMatchStrategy?:
    | "PHRASE_MATCH_STRATEGY_UNSPECIFIED"
    | "PARTIAL_MATCH"
    | "WORD_MATCH"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3SafetySettings: Schema.Codec<GoogleCloudDialogflowCxV3SafetySettings> =
  /*@__PURE__*/ Schema.Struct({
    bannedPhrases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3SafetySettingsPhrase),
    ),
    defaultRaiSettings: Schema.optional(
      GoogleCloudDialogflowCxV3SafetySettingsRaiSettings,
    ),
    raiSettings: Schema.optional(
      GoogleCloudDialogflowCxV3SafetySettingsRaiSettings,
    ),
    promptSecuritySettings: Schema.optional(
      GoogleCloudDialogflowCxV3SafetySettingsPromptSecuritySettings,
    ),
    defaultBannedPhraseMatchStrategy: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3SafetySettings" });

export interface GoogleCloudDialogflowCxV3VariantsHistory {
  updateTime?: string;
  versionVariants?: GoogleCloudDialogflowCxV3VersionVariants;
}

export const GoogleCloudDialogflowCxV3VariantsHistory: Schema.Codec<GoogleCloudDialogflowCxV3VariantsHistory> =
  /*@__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    versionVariants: Schema.optional(GoogleCloudDialogflowCxV3VersionVariants),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3VariantsHistory" });

export interface GoogleCloudDialogflowCxV3ImportEntityTypesRequest {
  entityTypesUri?: string;
  entityTypesContent?: GoogleCloudDialogflowCxV3InlineSource;
  mergeOption?:
    | "MERGE_OPTION_UNSPECIFIED"
    | "REPLACE"
    | "MERGE"
    | "RENAME"
    | "REPORT_CONFLICT"
    | "KEEP"
    | (string & {});
  targetEntityType?: string;
}

export const GoogleCloudDialogflowCxV3ImportEntityTypesRequest: Schema.Codec<GoogleCloudDialogflowCxV3ImportEntityTypesRequest> =
  /*@__PURE__*/ Schema.Struct({
    entityTypesUri: Schema.optional(Schema.String),
    entityTypesContent: Schema.optional(GoogleCloudDialogflowCxV3InlineSource),
    mergeOption: Schema.optional(Schema.String),
    targetEntityType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ImportEntityTypesRequest",
  });

export interface GoogleCloudDialogflowCxV3SubmitAnswerFeedbackRequest {
  updateMask?: string;
  responseId?: string;
  answerFeedback?: GoogleCloudDialogflowCxV3AnswerFeedback;
}

export const GoogleCloudDialogflowCxV3SubmitAnswerFeedbackRequest: Schema.Codec<GoogleCloudDialogflowCxV3SubmitAnswerFeedbackRequest> =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String),
    responseId: Schema.optional(Schema.String),
    answerFeedback: Schema.optional(GoogleCloudDialogflowCxV3AnswerFeedback),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3SubmitAnswerFeedbackRequest",
  });

export interface GoogleCloudDialogflowV2FaqAnswer {
  answer?: string;
  question?: string;
  source?: string;
  metadata?: Record<string, string>;
  answerRecord?: string;
  confidence?: number;
}

export const GoogleCloudDialogflowV2FaqAnswer: Schema.Codec<GoogleCloudDialogflowV2FaqAnswer> =
  /*@__PURE__*/ Schema.Struct({
    answer: Schema.optional(Schema.String),
    question: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    answerRecord: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2FaqAnswer" });

export interface GoogleCloudDialogflowCxV3ExperimentResultConfidenceInterval {
  lowerBound?: number;
  upperBound?: number;
  confidenceLevel?: number;
  ratio?: number;
}

export const GoogleCloudDialogflowCxV3ExperimentResultConfidenceInterval: Schema.Codec<GoogleCloudDialogflowCxV3ExperimentResultConfidenceInterval> =
  /*@__PURE__*/ Schema.Struct({
    lowerBound: Schema.optional(Schema.Number),
    upperBound: Schema.optional(Schema.Number),
    confidenceLevel: Schema.optional(Schema.Number),
    ratio: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ExperimentResultConfidenceInterval",
  });

export interface GoogleCloudDialogflowCxV3ExperimentResultMetric {
  type?:
    | "METRIC_UNSPECIFIED"
    | "CONTAINED_SESSION_NO_CALLBACK_RATE"
    | "LIVE_AGENT_HANDOFF_RATE"
    | "CALLBACK_SESSION_RATE"
    | "ABANDONED_SESSION_RATE"
    | "SESSION_END_RATE"
    | (string & {});
  count?: number;
  countType?:
    | "COUNT_TYPE_UNSPECIFIED"
    | "TOTAL_NO_MATCH_COUNT"
    | "TOTAL_TURN_COUNT"
    | "AVERAGE_TURN_COUNT"
    | (string & {});
  ratio?: number;
  confidenceInterval?: GoogleCloudDialogflowCxV3ExperimentResultConfidenceInterval;
}

export const GoogleCloudDialogflowCxV3ExperimentResultMetric: Schema.Codec<GoogleCloudDialogflowCxV3ExperimentResultMetric> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    count: Schema.optional(Schema.Number),
    countType: Schema.optional(Schema.String),
    ratio: Schema.optional(Schema.Number),
    confidenceInterval: Schema.optional(
      GoogleCloudDialogflowCxV3ExperimentResultConfidenceInterval,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ExperimentResultMetric",
  });

export interface GoogleCloudDialogflowCxV3ExperimentResultVersionMetrics {
  version?: string;
  metrics?: ReadonlyArray<GoogleCloudDialogflowCxV3ExperimentResultMetric>;
  sessionCount?: number;
}

export const GoogleCloudDialogflowCxV3ExperimentResultVersionMetrics: Schema.Codec<GoogleCloudDialogflowCxV3ExperimentResultVersionMetrics> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    metrics: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ExperimentResultMetric),
    ),
    sessionCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ExperimentResultVersionMetrics",
  });

export interface GoogleCloudDialogflowCxV3ExperimentResult {
  versionMetrics?: ReadonlyArray<GoogleCloudDialogflowCxV3ExperimentResultVersionMetrics>;
  lastUpdateTime?: string;
}

export const GoogleCloudDialogflowCxV3ExperimentResult: Schema.Codec<GoogleCloudDialogflowCxV3ExperimentResult> =
  /*@__PURE__*/ Schema.Struct({
    versionMetrics: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ExperimentResultVersionMetrics),
    ),
    lastUpdateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ExperimentResult" });

export interface GoogleCloudDialogflowCxV3RunTestCaseRequest {
  environment?: string;
}

export const GoogleCloudDialogflowCxV3RunTestCaseRequest: Schema.Codec<GoogleCloudDialogflowCxV3RunTestCaseRequest> =
  /*@__PURE__*/ Schema.Struct({
    environment: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3RunTestCaseRequest" });

export interface GoogleCloudDialogflowV2ArticleSuggestionModelMetadata {
  trainingModelType?:
    | "MODEL_TYPE_UNSPECIFIED"
    | "SMART_REPLY_DUAL_ENCODER_MODEL"
    | "SMART_REPLY_BERT_MODEL"
    | (string & {});
}

export const GoogleCloudDialogflowV2ArticleSuggestionModelMetadata: Schema.Codec<GoogleCloudDialogflowV2ArticleSuggestionModelMetadata> =
  /*@__PURE__*/ Schema.Struct({
    trainingModelType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ArticleSuggestionModelMetadata",
  });

export interface GoogleCloudDialogflowCxV3EntityTypeExcludedPhrase {
  value?: string;
}

export const GoogleCloudDialogflowCxV3EntityTypeExcludedPhrase: Schema.Codec<GoogleCloudDialogflowCxV3EntityTypeExcludedPhrase> =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3EntityTypeExcludedPhrase",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceSecretVersionHeaderValue {
  secretVersion?: string;
}

export const GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceSecretVersionHeaderValue: Schema.Codec<GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceSecretVersionHeaderValue> =
  /*@__PURE__*/ Schema.Struct({
    secretVersion: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceSecretVersionHeaderValue",
  });

export interface GoogleCloudDialogflowCxV3GenerativeSettingsKnowledgeConnectorSettings {
  agent?: string;
  disableDataStoreFallback?: boolean;
  business?: string;
  agentScope?: string;
  agentIdentity?: string;
  businessDescription?: string;
}

export const GoogleCloudDialogflowCxV3GenerativeSettingsKnowledgeConnectorSettings: Schema.Codec<GoogleCloudDialogflowCxV3GenerativeSettingsKnowledgeConnectorSettings> =
  /*@__PURE__*/ Schema.Struct({
    agent: Schema.optional(Schema.String),
    disableDataStoreFallback: Schema.optional(Schema.Boolean),
    business: Schema.optional(Schema.String),
    agentScope: Schema.optional(Schema.String),
    agentIdentity: Schema.optional(Schema.String),
    businessDescription: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3GenerativeSettingsKnowledgeConnectorSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1TestConfig {
  trackingParameters?: ReadonlyArray<string>;
  page?: string;
  flow?: string;
}

export const GoogleCloudDialogflowCxV3beta1TestConfig: Schema.Codec<GoogleCloudDialogflowCxV3beta1TestConfig> =
  /*@__PURE__*/ Schema.Struct({
    trackingParameters: Schema.optional(Schema.Array(Schema.String)),
    page: Schema.optional(Schema.String),
    flow: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TestConfig" });

export interface GoogleCloudDialogflowCxV3beta1TestCase {
  testConfig?: GoogleCloudDialogflowCxV3beta1TestConfig;
  displayName?: string;
  notes?: string;
  lastTestResult?: GoogleCloudDialogflowCxV3beta1TestCaseResult;
  name?: string;
  creationTime?: string;
  tags?: ReadonlyArray<string>;
  testCaseConversationTurns?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ConversationTurn>;
}

export const GoogleCloudDialogflowCxV3beta1TestCase: Schema.Codec<GoogleCloudDialogflowCxV3beta1TestCase> =
  /*@__PURE__*/ Schema.Struct({
    testConfig: Schema.optional(GoogleCloudDialogflowCxV3beta1TestConfig),
    displayName: Schema.optional(Schema.String),
    notes: Schema.optional(Schema.String),
    lastTestResult: Schema.optional(
      GoogleCloudDialogflowCxV3beta1TestCaseResult,
    ),
    name: Schema.optional(Schema.String),
    creationTime: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.String)),
    testCaseConversationTurns: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ConversationTurn),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TestCase" });

export interface GoogleCloudDialogflowCxV3beta1TestCaseError {
  testCase?: GoogleCloudDialogflowCxV3beta1TestCase;
  status?: GoogleRpcStatus;
}

export const GoogleCloudDialogflowCxV3beta1TestCaseError: Schema.Codec<GoogleCloudDialogflowCxV3beta1TestCaseError> =
  /*@__PURE__*/ Schema.Struct({
    testCase: Schema.optional(GoogleCloudDialogflowCxV3beta1TestCase),
    status: Schema.optional(GoogleRpcStatus),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TestCaseError" });

export interface GoogleCloudDialogflowCxV3beta1ImportTestCasesMetadata {
  errors?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TestCaseError>;
}

export const GoogleCloudDialogflowCxV3beta1ImportTestCasesMetadata: Schema.Codec<GoogleCloudDialogflowCxV3beta1ImportTestCasesMetadata> =
  /*@__PURE__*/ Schema.Struct({
    errors: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TestCaseError),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportTestCasesMetadata",
  });

export interface GoogleCloudDialogflowV2BatchUpdateEntityTypesResponse {
  entityTypes?: ReadonlyArray<GoogleCloudDialogflowV2EntityType>;
}

export const GoogleCloudDialogflowV2BatchUpdateEntityTypesResponse: Schema.Codec<GoogleCloudDialogflowV2BatchUpdateEntityTypesResponse> =
  /*@__PURE__*/ Schema.Struct({
    entityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2EntityType),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2BatchUpdateEntityTypesResponse",
  });

export interface GoogleCloudDialogflowCxV3RolloutConfig {
  rolloutCondition?: string;
  failureCondition?: string;
  rolloutSteps?: ReadonlyArray<GoogleCloudDialogflowCxV3RolloutConfigRolloutStep>;
}

export const GoogleCloudDialogflowCxV3RolloutConfig: Schema.Codec<GoogleCloudDialogflowCxV3RolloutConfig> =
  /*@__PURE__*/ Schema.Struct({
    rolloutCondition: Schema.optional(Schema.String),
    failureCondition: Schema.optional(Schema.String),
    rolloutSteps: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3RolloutConfigRolloutStep),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3RolloutConfig" });

export interface GoogleCloudDialogflowV2SmartReplyAnswer {
  confidence?: number;
  reply?: string;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2SmartReplyAnswer: Schema.Codec<GoogleCloudDialogflowV2SmartReplyAnswer> =
  /*@__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
    reply: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SmartReplyAnswer" });

export interface GoogleCloudDialogflowV2SuggestSmartRepliesResponse {
  smartReplyAnswers?: ReadonlyArray<GoogleCloudDialogflowV2SmartReplyAnswer>;
  latestMessage?: string;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2SuggestSmartRepliesResponse: Schema.Codec<GoogleCloudDialogflowV2SuggestSmartRepliesResponse> =
  /*@__PURE__*/ Schema.Struct({
    smartReplyAnswers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SmartReplyAnswer),
    ),
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SuggestSmartRepliesResponse",
  });

export interface GoogleCloudDialogflowCxV3EntityType {
  redact?: boolean;
  name?: string;
  autoExpansionMode?:
    | "AUTO_EXPANSION_MODE_UNSPECIFIED"
    | "AUTO_EXPANSION_MODE_DEFAULT"
    | (string & {});
  displayName?: string;
  kind?:
    | "KIND_UNSPECIFIED"
    | "KIND_MAP"
    | "KIND_LIST"
    | "KIND_REGEXP"
    | (string & {});
  entities?: ReadonlyArray<GoogleCloudDialogflowCxV3EntityTypeEntity>;
  excludedPhrases?: ReadonlyArray<GoogleCloudDialogflowCxV3EntityTypeExcludedPhrase>;
  enableFuzzyExtraction?: boolean;
}

export const GoogleCloudDialogflowCxV3EntityType: Schema.Codec<GoogleCloudDialogflowCxV3EntityType> =
  /*@__PURE__*/ Schema.Struct({
    redact: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    autoExpansionMode: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3EntityTypeEntity),
    ),
    excludedPhrases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3EntityTypeExcludedPhrase),
    ),
    enableFuzzyExtraction: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3EntityType" });

export interface GoogleCloudDialogflowCxV3ImportIntentsResponseConflictingResources {
  entityDisplayNames?: ReadonlyArray<string>;
  intentDisplayNames?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3ImportIntentsResponseConflictingResources: Schema.Codec<GoogleCloudDialogflowCxV3ImportIntentsResponseConflictingResources> =
  /*@__PURE__*/ Schema.Struct({
    entityDisplayNames: Schema.optional(Schema.Array(Schema.String)),
    intentDisplayNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3ImportIntentsResponseConflictingResources",
  });

export interface GoogleCloudDialogflowCxV3ImportIntentsResponse {
  intents?: ReadonlyArray<string>;
  conflictingResources?: GoogleCloudDialogflowCxV3ImportIntentsResponseConflictingResources;
}

export const GoogleCloudDialogflowCxV3ImportIntentsResponse: Schema.Codec<GoogleCloudDialogflowCxV3ImportIntentsResponse> =
  /*@__PURE__*/ Schema.Struct({
    intents: Schema.optional(Schema.Array(Schema.String)),
    conflictingResources: Schema.optional(
      GoogleCloudDialogflowCxV3ImportIntentsResponseConflictingResources,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ImportIntentsResponse" });

export interface GoogleCloudLocationLocation {
  locationId?: string;
  name?: string;
  displayName?: string;
  labels?: Record<string, string>;
  metadata?: Record<string, unknown>;
}

export const GoogleCloudLocationLocation: Schema.Codec<GoogleCloudLocationLocation> =
  /*@__PURE__*/ Schema.Struct({
    locationId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudLocationLocation" });

export interface GoogleCloudLocationListLocationsResponse {
  nextPageToken?: string;
  locations?: ReadonlyArray<GoogleCloudLocationLocation>;
}

export const GoogleCloudLocationListLocationsResponse: Schema.Codec<GoogleCloudLocationListLocationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(GoogleCloudLocationLocation)),
  }).annotate({ identifier: "GoogleCloudLocationListLocationsResponse" });

export interface GoogleCloudDialogflowCxV3DetectIntentRequest {
  queryParams?: GoogleCloudDialogflowCxV3QueryParameters;
  responseView?:
    | "DETECT_INTENT_RESPONSE_VIEW_UNSPECIFIED"
    | "DETECT_INTENT_RESPONSE_VIEW_FULL"
    | "DETECT_INTENT_RESPONSE_VIEW_BASIC"
    | "DETECT_INTENT_RESPONSE_VIEW_DEFAULT"
    | (string & {});
  queryInput?: GoogleCloudDialogflowCxV3QueryInput;
  outputAudioConfig?: GoogleCloudDialogflowCxV3OutputAudioConfig;
}

export const GoogleCloudDialogflowCxV3DetectIntentRequest: Schema.Codec<GoogleCloudDialogflowCxV3DetectIntentRequest> =
  /*@__PURE__*/ Schema.Struct({
    queryParams: Schema.optional(GoogleCloudDialogflowCxV3QueryParameters),
    responseView: Schema.optional(Schema.String),
    queryInput: Schema.optional(GoogleCloudDialogflowCxV3QueryInput),
    outputAudioConfig: Schema.optional(
      GoogleCloudDialogflowCxV3OutputAudioConfig,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3DetectIntentRequest" });

export interface GoogleCloudDialogflowCxV3ListPagesResponse {
  pages?: ReadonlyArray<GoogleCloudDialogflowCxV3Page>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3ListPagesResponse: Schema.Codec<GoogleCloudDialogflowCxV3ListPagesResponse> =
  /*@__PURE__*/ Schema.Struct({
    pages: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3Page)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ListPagesResponse" });

export interface GoogleCloudDialogflowV2QueryResult {
  fulfillmentMessages?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessage>;
  languageCode?: string;
  webhookSource?: string;
  fulfillmentText?: string;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2Context>;
  queryText?: string;
  webhookPayload?: Record<string, unknown>;
  intent?: GoogleCloudDialogflowV2Intent;
  action?: string;
  parameters?: Record<string, unknown>;
  cancelsSlotFilling?: boolean;
  speechRecognitionConfidence?: number;
  diagnosticInfo?: Record<string, unknown>;
  allRequiredParamsPresent?: boolean;
  sentimentAnalysisResult?: GoogleCloudDialogflowV2SentimentAnalysisResult;
  intentDetectionConfidence?: number;
}

export const GoogleCloudDialogflowV2QueryResult: Schema.Codec<GoogleCloudDialogflowV2QueryResult> =
  /*@__PURE__*/ Schema.Struct({
    fulfillmentMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessage),
    ),
    languageCode: Schema.optional(Schema.String),
    webhookSource: Schema.optional(Schema.String),
    fulfillmentText: Schema.optional(Schema.String),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2Context),
    ),
    queryText: Schema.optional(Schema.String),
    webhookPayload: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    intent: Schema.optional(GoogleCloudDialogflowV2Intent),
    action: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    cancelsSlotFilling: Schema.optional(Schema.Boolean),
    speechRecognitionConfidence: Schema.optional(Schema.Number),
    diagnosticInfo: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    allRequiredParamsPresent: Schema.optional(Schema.Boolean),
    sentimentAnalysisResult: Schema.optional(
      GoogleCloudDialogflowV2SentimentAnalysisResult,
    ),
    intentDetectionConfidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2QueryResult" });

export interface GoogleCloudDialogflowV2OriginalDetectIntentRequest {
  version?: string;
  payload?: Record<string, unknown>;
  source?: string;
}

export const GoogleCloudDialogflowV2OriginalDetectIntentRequest: Schema.Codec<GoogleCloudDialogflowV2OriginalDetectIntentRequest> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    source: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2OriginalDetectIntentRequest",
  });

export interface GoogleCloudDialogflowV2WebhookRequest {
  queryResult?: GoogleCloudDialogflowV2QueryResult;
  originalDetectIntentRequest?: GoogleCloudDialogflowV2OriginalDetectIntentRequest;
  session?: string;
  responseId?: string;
}

export const GoogleCloudDialogflowV2WebhookRequest: Schema.Codec<GoogleCloudDialogflowV2WebhookRequest> =
  /*@__PURE__*/ Schema.Struct({
    queryResult: Schema.optional(GoogleCloudDialogflowV2QueryResult),
    originalDetectIntentRequest: Schema.optional(
      GoogleCloudDialogflowV2OriginalDetectIntentRequest,
    ),
    session: Schema.optional(Schema.String),
    responseId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2WebhookRequest" });

export interface GoogleCloudDialogflowCxV3PlaybookImportStrategy {
  mainPlaybookImportStrategy?:
    | "IMPORT_STRATEGY_UNSPECIFIED"
    | "IMPORT_STRATEGY_CREATE_NEW"
    | "IMPORT_STRATEGY_REPLACE"
    | "IMPORT_STRATEGY_KEEP"
    | "IMPORT_STRATEGY_MERGE"
    | "IMPORT_STRATEGY_THROW_ERROR"
    | (string & {});
  nestedResourceImportStrategy?:
    | "IMPORT_STRATEGY_UNSPECIFIED"
    | "IMPORT_STRATEGY_CREATE_NEW"
    | "IMPORT_STRATEGY_REPLACE"
    | "IMPORT_STRATEGY_KEEP"
    | "IMPORT_STRATEGY_MERGE"
    | "IMPORT_STRATEGY_THROW_ERROR"
    | (string & {});
  toolImportStrategy?:
    | "IMPORT_STRATEGY_UNSPECIFIED"
    | "IMPORT_STRATEGY_CREATE_NEW"
    | "IMPORT_STRATEGY_REPLACE"
    | "IMPORT_STRATEGY_KEEP"
    | "IMPORT_STRATEGY_MERGE"
    | "IMPORT_STRATEGY_THROW_ERROR"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3PlaybookImportStrategy: Schema.Codec<GoogleCloudDialogflowCxV3PlaybookImportStrategy> =
  /*@__PURE__*/ Schema.Struct({
    mainPlaybookImportStrategy: Schema.optional(Schema.String),
    nestedResourceImportStrategy: Schema.optional(Schema.String),
    toolImportStrategy: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3PlaybookImportStrategy",
  });

export interface GoogleCloudDialogflowCxV3ImportPlaybookRequest {
  playbookUri?: string;
  playbookContent?: string;
  importStrategy?: GoogleCloudDialogflowCxV3PlaybookImportStrategy;
}

export const GoogleCloudDialogflowCxV3ImportPlaybookRequest: Schema.Codec<GoogleCloudDialogflowCxV3ImportPlaybookRequest> =
  /*@__PURE__*/ Schema.Struct({
    playbookUri: Schema.optional(Schema.String),
    playbookContent: Schema.optional(Schema.String),
    importStrategy: Schema.optional(
      GoogleCloudDialogflowCxV3PlaybookImportStrategy,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ImportPlaybookRequest" });

export interface GoogleCloudDialogflowCxV3beta1TurnSignals {
  dtmfUsed?: boolean;
  agentEscalated?: boolean;
  userEscalated?: boolean;
  sentimentScore?: number;
  noUserInput?: boolean;
  reachedEndPage?: boolean;
  webhookStatuses?: ReadonlyArray<string>;
  failureReasons?: ReadonlyArray<
    | "FAILURE_REASON_UNSPECIFIED"
    | "FAILED_INTENT"
    | "FAILED_WEBHOOK"
    | (string & {})
  >;
  sentimentMagnitude?: number;
  noMatch?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1TurnSignals: Schema.Codec<GoogleCloudDialogflowCxV3beta1TurnSignals> =
  /*@__PURE__*/ Schema.Struct({
    dtmfUsed: Schema.optional(Schema.Boolean),
    agentEscalated: Schema.optional(Schema.Boolean),
    userEscalated: Schema.optional(Schema.Boolean),
    sentimentScore: Schema.optional(Schema.Number),
    noUserInput: Schema.optional(Schema.Boolean),
    reachedEndPage: Schema.optional(Schema.Boolean),
    webhookStatuses: Schema.optional(Schema.Array(Schema.String)),
    failureReasons: Schema.optional(Schema.Array(Schema.String)),
    sentimentMagnitude: Schema.optional(Schema.Number),
    noMatch: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TurnSignals" });

export interface GoogleCloudDialogflowCxV3beta1ConversationSignals {
  turnSignals?: GoogleCloudDialogflowCxV3beta1TurnSignals;
}

export const GoogleCloudDialogflowCxV3beta1ConversationSignals: Schema.Codec<GoogleCloudDialogflowCxV3beta1ConversationSignals> =
  /*@__PURE__*/ Schema.Struct({
    turnSignals: Schema.optional(GoogleCloudDialogflowCxV3beta1TurnSignals),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ConversationSignals",
  });

export interface GoogleCloudDialogflowCxV3ListEnvironmentsResponse {
  environments?: ReadonlyArray<GoogleCloudDialogflowCxV3Environment>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3ListEnvironmentsResponse: Schema.Codec<GoogleCloudDialogflowCxV3ListEnvironmentsResponse> =
  /*@__PURE__*/ Schema.Struct({
    environments: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3Environment),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ListEnvironmentsResponse",
  });

export interface GoogleCloudDialogflowCxV3RunTestCaseResponse {
  result?: GoogleCloudDialogflowCxV3TestCaseResult;
}

export const GoogleCloudDialogflowCxV3RunTestCaseResponse: Schema.Codec<GoogleCloudDialogflowCxV3RunTestCaseResponse> =
  /*@__PURE__*/ Schema.Struct({
    result: Schema.optional(GoogleCloudDialogflowCxV3TestCaseResult),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3RunTestCaseResponse" });

export interface GoogleCloudDialogflowCxV3beta1BatchRunTestCasesMetadata {
  errors?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TestError>;
}

export const GoogleCloudDialogflowCxV3beta1BatchRunTestCasesMetadata: Schema.Codec<GoogleCloudDialogflowCxV3beta1BatchRunTestCasesMetadata> =
  /*@__PURE__*/ Schema.Struct({
    errors: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TestError),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1BatchRunTestCasesMetadata",
  });

export interface GoogleCloudDialogflowCxV3ExportFlowResponse {
  flowUri?: string;
  flowContent?: string;
}

export const GoogleCloudDialogflowCxV3ExportFlowResponse: Schema.Codec<GoogleCloudDialogflowCxV3ExportFlowResponse> =
  /*@__PURE__*/ Schema.Struct({
    flowUri: Schema.optional(Schema.String),
    flowContent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ExportFlowResponse" });

export interface GoogleCloudDialogflowCxV3ExportIntentsResponse {
  intentsContent?: GoogleCloudDialogflowCxV3InlineDestination;
  intentsUri?: string;
}

export const GoogleCloudDialogflowCxV3ExportIntentsResponse: Schema.Codec<GoogleCloudDialogflowCxV3ExportIntentsResponse> =
  /*@__PURE__*/ Schema.Struct({
    intentsContent: Schema.optional(GoogleCloudDialogflowCxV3InlineDestination),
    intentsUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ExportIntentsResponse" });

export interface GoogleCloudDialogflowV2DeployConversationModelOperationMetadata {
  createTime?: string;
  conversationModel?: string;
  doneTime?: string;
}

export const GoogleCloudDialogflowV2DeployConversationModelOperationMetadata: Schema.Codec<GoogleCloudDialogflowV2DeployConversationModelOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    conversationModel: Schema.optional(Schema.String),
    doneTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2DeployConversationModelOperationMetadata",
  });

export interface GoogleCloudDialogflowCxV3AgentGitIntegrationSettings {
  githubSettings?: GoogleCloudDialogflowCxV3AgentGitIntegrationSettingsGithubSettings;
}

export const GoogleCloudDialogflowCxV3AgentGitIntegrationSettings: Schema.Codec<GoogleCloudDialogflowCxV3AgentGitIntegrationSettings> =
  /*@__PURE__*/ Schema.Struct({
    githubSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AgentGitIntegrationSettingsGithubSettings,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3AgentGitIntegrationSettings",
  });

export interface GoogleCloudDialogflowCxV3SpeechToTextSettings {
  enableSpeechAdaptation?: boolean;
}

export const GoogleCloudDialogflowCxV3SpeechToTextSettings: Schema.Codec<GoogleCloudDialogflowCxV3SpeechToTextSettings> =
  /*@__PURE__*/ Schema.Struct({
    enableSpeechAdaptation: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3SpeechToTextSettings" });

export interface GoogleCloudDialogflowCxV3TextToSpeechSettings {
  synthesizeSpeechConfigs?: Record<
    string,
    GoogleCloudDialogflowCxV3SynthesizeSpeechConfig
  >;
}

export const GoogleCloudDialogflowCxV3TextToSpeechSettings: Schema.Codec<GoogleCloudDialogflowCxV3TextToSpeechSettings> =
  /*@__PURE__*/ Schema.Struct({
    synthesizeSpeechConfigs: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowCxV3SynthesizeSpeechConfig,
      ),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TextToSpeechSettings" });

export interface GoogleCloudDialogflowCxV3AgentGenAppBuilderSettings {
  engine?: string;
}

export const GoogleCloudDialogflowCxV3AgentGenAppBuilderSettings: Schema.Codec<GoogleCloudDialogflowCxV3AgentGenAppBuilderSettings> =
  /*@__PURE__*/ Schema.Struct({
    engine: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3AgentGenAppBuilderSettings",
  });

export interface GoogleCloudDialogflowCxV3Agent {
  gitIntegrationSettings?: GoogleCloudDialogflowCxV3AgentGitIntegrationSettings;
  speechToTextSettings?: GoogleCloudDialogflowCxV3SpeechToTextSettings;
  locked?: boolean;
  enableSpellCorrection?: boolean;
  supportedLanguageCodes?: ReadonlyArray<string>;
  enableMultiLanguageTraining?: boolean;
  startFlow?: string;
  enableStackdriverLogging?: boolean;
  displayName?: string;
  textToSpeechSettings?: GoogleCloudDialogflowCxV3TextToSpeechSettings;
  clientCertificateSettings?: GoogleCloudDialogflowCxV3AgentClientCertificateSettings;
  satisfiesPzi?: boolean;
  satisfiesPzs?: boolean;
  avatarUri?: string;
  genAppBuilderSettings?: GoogleCloudDialogflowCxV3AgentGenAppBuilderSettings;
  advancedSettings?: GoogleCloudDialogflowCxV3AdvancedSettings;
  defaultLanguageCode?: string;
  description?: string;
  securitySettings?: string;
  timeZone?: string;
  answerFeedbackSettings?: GoogleCloudDialogflowCxV3AgentAnswerFeedbackSettings;
  personalizationSettings?: GoogleCloudDialogflowCxV3AgentPersonalizationSettings;
  name?: string;
  startPlaybook?: string;
}

export const GoogleCloudDialogflowCxV3Agent: Schema.Codec<GoogleCloudDialogflowCxV3Agent> =
  /*@__PURE__*/ Schema.Struct({
    gitIntegrationSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AgentGitIntegrationSettings,
    ),
    speechToTextSettings: Schema.optional(
      GoogleCloudDialogflowCxV3SpeechToTextSettings,
    ),
    locked: Schema.optional(Schema.Boolean),
    enableSpellCorrection: Schema.optional(Schema.Boolean),
    supportedLanguageCodes: Schema.optional(Schema.Array(Schema.String)),
    enableMultiLanguageTraining: Schema.optional(Schema.Boolean),
    startFlow: Schema.optional(Schema.String),
    enableStackdriverLogging: Schema.optional(Schema.Boolean),
    displayName: Schema.optional(Schema.String),
    textToSpeechSettings: Schema.optional(
      GoogleCloudDialogflowCxV3TextToSpeechSettings,
    ),
    clientCertificateSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AgentClientCertificateSettings,
    ),
    satisfiesPzi: Schema.optional(Schema.Boolean),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    avatarUri: Schema.optional(Schema.String),
    genAppBuilderSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AgentGenAppBuilderSettings,
    ),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettings,
    ),
    defaultLanguageCode: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    securitySettings: Schema.optional(Schema.String),
    timeZone: Schema.optional(Schema.String),
    answerFeedbackSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AgentAnswerFeedbackSettings,
    ),
    personalizationSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AgentPersonalizationSettings,
    ),
    name: Schema.optional(Schema.String),
    startPlaybook: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Agent" });

export interface GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig {
  clientSecret?: string;
  clientId?: string;
  tokenEndpoint?: string;
  scopes?: ReadonlyArray<string>;
  secretVersionForClientSecret?: string;
}

export const GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig: Schema.Codec<GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig> =
  /*@__PURE__*/ Schema.Struct({
    clientSecret: Schema.optional(Schema.String),
    clientId: Schema.optional(Schema.String),
    tokenEndpoint: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Schema.String)),
    secretVersionForClientSecret: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookGenericWebService {
  requestHeaders?: Record<string, string>;
  serviceAgentAuth?:
    | "SERVICE_AGENT_AUTH_UNSPECIFIED"
    | "NONE"
    | "ID_TOKEN"
    | "ACCESS_TOKEN"
    | (string & {});
  serviceAccountAuthConfig?: GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceServiceAccountAuthConfig;
  requestBody?: string;
  webhookType?:
    | "WEBHOOK_TYPE_UNSPECIFIED"
    | "STANDARD"
    | "FLEXIBLE"
    | (string & {});
  httpMethod?:
    | "HTTP_METHOD_UNSPECIFIED"
    | "POST"
    | "GET"
    | "HEAD"
    | "PUT"
    | "DELETE"
    | "PATCH"
    | "OPTIONS"
    | (string & {});
  oauthConfig?: GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig;
  uri?: string;
  allowedCaCerts?: ReadonlyArray<string>;
  secretVersionForUsernamePassword?: string;
  username?: string;
  password?: string;
  parameterMapping?: Record<string, string>;
  secretVersionsForRequestHeaders?: Record<
    string,
    GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceSecretVersionHeaderValue
  >;
}

export const GoogleCloudDialogflowCxV3beta1WebhookGenericWebService: Schema.Codec<GoogleCloudDialogflowCxV3beta1WebhookGenericWebService> =
  /*@__PURE__*/ Schema.Struct({
    requestHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    serviceAgentAuth: Schema.optional(Schema.String),
    serviceAccountAuthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceServiceAccountAuthConfig,
    ),
    requestBody: Schema.optional(Schema.String),
    webhookType: Schema.optional(Schema.String),
    httpMethod: Schema.optional(Schema.String),
    oauthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig,
    ),
    uri: Schema.optional(Schema.String),
    allowedCaCerts: Schema.optional(Schema.Array(Schema.String)),
    secretVersionForUsernamePassword: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    parameterMapping: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    secretVersionsForRequestHeaders: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceSecretVersionHeaderValue,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1WebhookGenericWebService",
  });

export interface GoogleCloudDialogflowCxV3ListAgentsResponse {
  agents?: ReadonlyArray<GoogleCloudDialogflowCxV3Agent>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3ListAgentsResponse: Schema.Codec<GoogleCloudDialogflowCxV3ListAgentsResponse> =
  /*@__PURE__*/ Schema.Struct({
    agents: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3Agent)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ListAgentsResponse" });

export interface GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig {
  service?: string;
  genericWebService?: GoogleCloudDialogflowCxV3beta1WebhookGenericWebService;
}

export const GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig: Schema.Codec<GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig> =
  /*@__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
    genericWebService: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookGenericWebService,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig",
  });

export interface GoogleCloudDialogflowCxV3MatchIntentRequest {
  queryParams?: GoogleCloudDialogflowCxV3QueryParameters;
  persistParameterChanges?: boolean;
  queryInput?: GoogleCloudDialogflowCxV3QueryInput;
}

export const GoogleCloudDialogflowCxV3MatchIntentRequest: Schema.Codec<GoogleCloudDialogflowCxV3MatchIntentRequest> =
  /*@__PURE__*/ Schema.Struct({
    queryParams: Schema.optional(GoogleCloudDialogflowCxV3QueryParameters),
    persistParameterChanges: Schema.optional(Schema.Boolean),
    queryInput: Schema.optional(GoogleCloudDialogflowCxV3QueryInput),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3MatchIntentRequest" });

export interface GoogleCloudDialogflowCxV3ExportTestCasesMetadata {}

export const GoogleCloudDialogflowCxV3ExportTestCasesMetadata: Schema.Codec<GoogleCloudDialogflowCxV3ExportTestCasesMetadata> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ExportTestCasesMetadata",
  });

export interface GoogleCloudDialogflowCxV3ListIntentsResponse {
  nextPageToken?: string;
  intents?: ReadonlyArray<GoogleCloudDialogflowCxV3Intent>;
}

export const GoogleCloudDialogflowCxV3ListIntentsResponse: Schema.Codec<GoogleCloudDialogflowCxV3ListIntentsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    intents: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3Intent)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ListIntentsResponse" });

export interface GoogleCloudDialogflowCxV3CompareVersionsResponse {
  targetVersionContentJson?: string;
  baseVersionContentJson?: string;
  compareTime?: string;
}

export const GoogleCloudDialogflowCxV3CompareVersionsResponse: Schema.Codec<GoogleCloudDialogflowCxV3CompareVersionsResponse> =
  /*@__PURE__*/ Schema.Struct({
    targetVersionContentJson: Schema.optional(Schema.String),
    baseVersionContentJson: Schema.optional(Schema.String),
    compareTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3CompareVersionsResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1Webhook {
  genericWebService?: GoogleCloudDialogflowCxV3beta1WebhookGenericWebService;
  timeout?: string;
  serviceDirectory?: GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig;
  displayName?: string;
  name?: string;
  disabled?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1Webhook: Schema.Codec<GoogleCloudDialogflowCxV3beta1Webhook> =
  /*@__PURE__*/ Schema.Struct({
    genericWebService: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookGenericWebService,
    ),
    timeout: Schema.optional(Schema.String),
    serviceDirectory: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig,
    ),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    disabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Webhook" });

export interface GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig {
  webhookOverrides?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Webhook>;
}

export const GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig: Schema.Codec<GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig> =
  /*@__PURE__*/ Schema.Struct({
    webhookOverrides: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1Webhook),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig",
  });

export interface GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig {
  enablePredeploymentRun?: boolean;
  testCases?: ReadonlyArray<string>;
  enableContinuousRun?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig: Schema.Codec<GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig> =
  /*@__PURE__*/ Schema.Struct({
    enablePredeploymentRun: Schema.optional(Schema.Boolean),
    testCases: Schema.optional(Schema.Array(Schema.String)),
    enableContinuousRun: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig",
  });

export interface GoogleCloudDialogflowCxV3beta1Environment {
  updateTime?: string;
  webhookConfig?: GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig;
  testCasesConfig?: GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig;
  displayName?: string;
  description?: string;
  name?: string;
  versionConfigs?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig>;
}

export const GoogleCloudDialogflowCxV3beta1Environment: Schema.Codec<GoogleCloudDialogflowCxV3beta1Environment> =
  /*@__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    webhookConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig,
    ),
    testCasesConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig,
    ),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    versionConfigs: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Environment" });

export interface GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigOperationMetadata {
  conversationProfile?: string;
  participantRole?:
    | "ROLE_UNSPECIFIED"
    | "HUMAN_AGENT"
    | "AUTOMATED_AGENT"
    | "END_USER"
    | (string & {});
  suggestionFeatureType?:
    | "TYPE_UNSPECIFIED"
    | "ARTICLE_SUGGESTION"
    | "FAQ"
    | "SMART_REPLY"
    | "DIALOGFLOW_ASSIST"
    | "CONVERSATION_SUMMARIZATION"
    | "KNOWLEDGE_SEARCH"
    | "KNOWLEDGE_ASSIST"
    | (string & {});
  createTime?: string;
}

export const GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigOperationMetadata: Schema.Codec<GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    conversationProfile: Schema.optional(Schema.String),
    participantRole: Schema.optional(Schema.String),
    suggestionFeatureType: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigOperationMetadata",
  });

export interface GoogleCloudDialogflowV2beta1BatchUpdateIntentsResponse {
  intents?: ReadonlyArray<GoogleCloudDialogflowV2beta1Intent>;
}

export const GoogleCloudDialogflowV2beta1BatchUpdateIntentsResponse: Schema.Codec<GoogleCloudDialogflowV2beta1BatchUpdateIntentsResponse> =
  /*@__PURE__*/ Schema.Struct({
    intents: Schema.optional(Schema.Array(GoogleCloudDialogflowV2beta1Intent)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1BatchUpdateIntentsResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1ImportFlowResponse {
  flow?: string;
}

export const GoogleCloudDialogflowCxV3beta1ImportFlowResponse: Schema.Codec<GoogleCloudDialogflowCxV3beta1ImportFlowResponse> =
  /*@__PURE__*/ Schema.Struct({
    flow: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportFlowResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1RunTestCaseResponse {
  result?: GoogleCloudDialogflowCxV3beta1TestCaseResult;
}

export const GoogleCloudDialogflowCxV3beta1RunTestCaseResponse: Schema.Codec<GoogleCloudDialogflowCxV3beta1RunTestCaseResponse> =
  /*@__PURE__*/ Schema.Struct({
    result: Schema.optional(GoogleCloudDialogflowCxV3beta1TestCaseResult),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RunTestCaseResponse",
  });

export interface GoogleCloudDialogflowV2beta1EntityType {
  kind?:
    | "KIND_UNSPECIFIED"
    | "KIND_MAP"
    | "KIND_LIST"
    | "KIND_REGEXP"
    | (string & {});
  entities?: ReadonlyArray<GoogleCloudDialogflowV2beta1EntityTypeEntity>;
  enableFuzzyExtraction?: boolean;
  name?: string;
  autoExpansionMode?:
    | "AUTO_EXPANSION_MODE_UNSPECIFIED"
    | "AUTO_EXPANSION_MODE_DEFAULT"
    | (string & {});
  displayName?: string;
}

export const GoogleCloudDialogflowV2beta1EntityType: Schema.Codec<GoogleCloudDialogflowV2beta1EntityType> =
  /*@__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1EntityTypeEntity),
    ),
    enableFuzzyExtraction: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    autoExpansionMode: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1EntityType" });

export interface GoogleCloudDialogflowCxV3RestorePlaybookVersionResponse {
  playbook?: GoogleCloudDialogflowCxV3Playbook;
}

export const GoogleCloudDialogflowCxV3RestorePlaybookVersionResponse: Schema.Codec<GoogleCloudDialogflowCxV3RestorePlaybookVersionResponse> =
  /*@__PURE__*/ Schema.Struct({
    playbook: Schema.optional(GoogleCloudDialogflowCxV3Playbook),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3RestorePlaybookVersionResponse",
  });

export interface GoogleProtobufEmpty {}

export const GoogleProtobufEmpty: Schema.Codec<GoogleProtobufEmpty> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleProtobufEmpty",
  });

export interface GoogleCloudDialogflowV2DeleteConversationModelOperationMetadata {
  createTime?: string;
  conversationModel?: string;
  doneTime?: string;
}

export const GoogleCloudDialogflowV2DeleteConversationModelOperationMetadata: Schema.Codec<GoogleCloudDialogflowV2DeleteConversationModelOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    conversationModel: Schema.optional(Schema.String),
    doneTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2DeleteConversationModelOperationMetadata",
  });

export interface GoogleCloudDialogflowV2ImportDocumentsResponse {
  warnings?: ReadonlyArray<GoogleRpcStatus>;
}

export const GoogleCloudDialogflowV2ImportDocumentsResponse: Schema.Codec<GoogleCloudDialogflowV2ImportDocumentsResponse> =
  /*@__PURE__*/ Schema.Struct({
    warnings: Schema.optional(Schema.Array(GoogleRpcStatus)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ImportDocumentsResponse" });

export interface GoogleCloudDialogflowCxV3FulfillIntentRequest {
  outputAudioConfig?: GoogleCloudDialogflowCxV3OutputAudioConfig;
  matchIntentRequest?: GoogleCloudDialogflowCxV3MatchIntentRequest;
  match?: GoogleCloudDialogflowCxV3Match;
}

export const GoogleCloudDialogflowCxV3FulfillIntentRequest: Schema.Codec<GoogleCloudDialogflowCxV3FulfillIntentRequest> =
  /*@__PURE__*/ Schema.Struct({
    outputAudioConfig: Schema.optional(
      GoogleCloudDialogflowCxV3OutputAudioConfig,
    ),
    matchIntentRequest: Schema.optional(
      GoogleCloudDialogflowCxV3MatchIntentRequest,
    ),
    match: Schema.optional(GoogleCloudDialogflowCxV3Match),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3FulfillIntentRequest" });

export interface GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse {
  messages?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ResponseMessage>;
  mergeBehavior?:
    | "MERGE_BEHAVIOR_UNSPECIFIED"
    | "APPEND"
    | "REPLACE"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse: Schema.Codec<GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse> =
  /*@__PURE__*/ Schema.Struct({
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ResponseMessage),
    ),
    mergeBehavior: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookResponse {
  payload?: Record<string, unknown>;
  targetPage?: string;
  pageInfo?: GoogleCloudDialogflowCxV3beta1PageInfo;
  targetFlow?: string;
  sessionInfo?: GoogleCloudDialogflowCxV3beta1SessionInfo;
  fulfillmentResponse?: GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse;
}

export const GoogleCloudDialogflowCxV3beta1WebhookResponse: Schema.Codec<GoogleCloudDialogflowCxV3beta1WebhookResponse> =
  /*@__PURE__*/ Schema.Struct({
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    targetPage: Schema.optional(Schema.String),
    pageInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1PageInfo),
    targetFlow: Schema.optional(Schema.String),
    sessionInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1SessionInfo),
    fulfillmentResponse: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1WebhookResponse" });

export interface GoogleCloudDialogflowCxV3ListSessionEntityTypesResponse {
  sessionEntityTypes?: ReadonlyArray<GoogleCloudDialogflowCxV3SessionEntityType>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3ListSessionEntityTypesResponse: Schema.Codec<GoogleCloudDialogflowCxV3ListSessionEntityTypesResponse> =
  /*@__PURE__*/ Schema.Struct({
    sessionEntityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3SessionEntityType),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ListSessionEntityTypesResponse",
  });

export interface GoogleCloudDialogflowCxV3ValidateFlowRequest {
  languageCode?: string;
}

export const GoogleCloudDialogflowCxV3ValidateFlowRequest: Schema.Codec<GoogleCloudDialogflowCxV3ValidateFlowRequest> =
  /*@__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ValidateFlowRequest" });

export interface GoogleCloudDialogflowCxV3CreateVersionOperationMetadata {
  version?: string;
}

export const GoogleCloudDialogflowCxV3CreateVersionOperationMetadata: Schema.Codec<GoogleCloudDialogflowCxV3CreateVersionOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3CreateVersionOperationMetadata",
  });

export interface GoogleCloudDialogflowV3alpha1ConversationSignals {
  turnSignals?: GoogleCloudDialogflowV3alpha1TurnSignals;
}

export const GoogleCloudDialogflowV3alpha1ConversationSignals: Schema.Codec<GoogleCloudDialogflowV3alpha1ConversationSignals> =
  /*@__PURE__*/ Schema.Struct({
    turnSignals: Schema.optional(GoogleCloudDialogflowV3alpha1TurnSignals),
  }).annotate({
    identifier: "GoogleCloudDialogflowV3alpha1ConversationSignals",
  });

export interface GoogleCloudDialogflowCxV3BatchRunTestCasesMetadata {
  errors?: ReadonlyArray<GoogleCloudDialogflowCxV3TestError>;
}

export const GoogleCloudDialogflowCxV3BatchRunTestCasesMetadata: Schema.Codec<GoogleCloudDialogflowCxV3BatchRunTestCasesMetadata> =
  /*@__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3TestError)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3BatchRunTestCasesMetadata",
  });

export interface GoogleCloudDialogflowCxV3RunTestCaseMetadata {}

export const GoogleCloudDialogflowCxV3RunTestCaseMetadata: Schema.Codec<GoogleCloudDialogflowCxV3RunTestCaseMetadata> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3RunTestCaseMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1ImportIntentsResponse {
  intents?: ReadonlyArray<string>;
  conflictingResources?: GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResources;
}

export const GoogleCloudDialogflowCxV3beta1ImportIntentsResponse: Schema.Codec<GoogleCloudDialogflowCxV3beta1ImportIntentsResponse> =
  /*@__PURE__*/ Schema.Struct({
    intents: Schema.optional(Schema.Array(Schema.String)),
    conflictingResources: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResources,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportIntentsResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1DeployFlowMetadata {
  testErrors?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TestError>;
}

export const GoogleCloudDialogflowCxV3beta1DeployFlowMetadata: Schema.Codec<GoogleCloudDialogflowCxV3beta1DeployFlowMetadata> =
  /*@__PURE__*/ Schema.Struct({
    testErrors: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TestError),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1DeployFlowMetadata",
  });

export interface GoogleCloudDialogflowCxV3TurnSignals {
  noUserInput?: boolean;
  reachedEndPage?: boolean;
  sentimentScore?: number;
  userEscalated?: boolean;
  dtmfUsed?: boolean;
  agentEscalated?: boolean;
  noMatch?: boolean;
  webhookStatuses?: ReadonlyArray<string>;
  failureReasons?: ReadonlyArray<
    | "FAILURE_REASON_UNSPECIFIED"
    | "FAILED_INTENT"
    | "FAILED_WEBHOOK"
    | (string & {})
  >;
  sentimentMagnitude?: number;
}

export const GoogleCloudDialogflowCxV3TurnSignals: Schema.Codec<GoogleCloudDialogflowCxV3TurnSignals> =
  /*@__PURE__*/ Schema.Struct({
    noUserInput: Schema.optional(Schema.Boolean),
    reachedEndPage: Schema.optional(Schema.Boolean),
    sentimentScore: Schema.optional(Schema.Number),
    userEscalated: Schema.optional(Schema.Boolean),
    dtmfUsed: Schema.optional(Schema.Boolean),
    agentEscalated: Schema.optional(Schema.Boolean),
    noMatch: Schema.optional(Schema.Boolean),
    webhookStatuses: Schema.optional(Schema.Array(Schema.String)),
    failureReasons: Schema.optional(Schema.Array(Schema.String)),
    sentimentMagnitude: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TurnSignals" });

export interface GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadata {
  participantRole?:
    | "ROLE_UNSPECIFIED"
    | "HUMAN_AGENT"
    | "AUTOMATED_AGENT"
    | "END_USER"
    | (string & {});
  suggestionFeatureType?:
    | "TYPE_UNSPECIFIED"
    | "ARTICLE_SUGGESTION"
    | "FAQ"
    | "SMART_REPLY"
    | "CONVERSATION_SUMMARIZATION"
    | "KNOWLEDGE_SEARCH"
    | "KNOWLEDGE_ASSIST"
    | (string & {});
  createTime?: string;
  conversationProfile?: string;
}

export const GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadata: Schema.Codec<GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    participantRole: Schema.optional(Schema.String),
    suggestionFeatureType: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    conversationProfile: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadata",
  });

export interface GoogleCloudDialogflowCxV3DetectIntentResponse {
  queryResult?: GoogleCloudDialogflowCxV3QueryResult;
  responseId?: string;
  responseType?:
    | "RESPONSE_TYPE_UNSPECIFIED"
    | "PARTIAL"
    | "FINAL"
    | (string & {});
  outputAudio?: string;
  allowCancellation?: boolean;
  outputAudioConfig?: GoogleCloudDialogflowCxV3OutputAudioConfig;
}

export const GoogleCloudDialogflowCxV3DetectIntentResponse: Schema.Codec<GoogleCloudDialogflowCxV3DetectIntentResponse> =
  /*@__PURE__*/ Schema.Struct({
    queryResult: Schema.optional(GoogleCloudDialogflowCxV3QueryResult),
    responseId: Schema.optional(Schema.String),
    responseType: Schema.optional(Schema.String),
    outputAudio: Schema.optional(Schema.String),
    allowCancellation: Schema.optional(Schema.Boolean),
    outputAudioConfig: Schema.optional(
      GoogleCloudDialogflowCxV3OutputAudioConfig,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3DetectIntentResponse" });

export interface GoogleCloudDialogflowCxV3Changelog {
  userEmail?: string;
  displayName?: string;
  createTime?: string;
  name?: string;
  languageCode?: string;
  type?: string;
  resource?: string;
  action?: string;
}

export const GoogleCloudDialogflowCxV3Changelog: Schema.Codec<GoogleCloudDialogflowCxV3Changelog> =
  /*@__PURE__*/ Schema.Struct({
    userEmail: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Changelog" });

export interface GoogleCloudDialogflowCxV3ListChangelogsResponse {
  changelogs?: ReadonlyArray<GoogleCloudDialogflowCxV3Changelog>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3ListChangelogsResponse: Schema.Codec<GoogleCloudDialogflowCxV3ListChangelogsResponse> =
  /*@__PURE__*/ Schema.Struct({
    changelogs: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3Changelog),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ListChangelogsResponse",
  });

export interface GoogleCloudDialogflowV2SetSuggestionFeatureConfigOperationMetadata {
  conversationProfile?: string;
  participantRole?:
    | "ROLE_UNSPECIFIED"
    | "HUMAN_AGENT"
    | "AUTOMATED_AGENT"
    | "END_USER"
    | (string & {});
  suggestionFeatureType?:
    | "TYPE_UNSPECIFIED"
    | "ARTICLE_SUGGESTION"
    | "FAQ"
    | "SMART_REPLY"
    | "CONVERSATION_SUMMARIZATION"
    | "KNOWLEDGE_SEARCH"
    | "KNOWLEDGE_ASSIST"
    | (string & {});
  createTime?: string;
}

export const GoogleCloudDialogflowV2SetSuggestionFeatureConfigOperationMetadata: Schema.Codec<GoogleCloudDialogflowV2SetSuggestionFeatureConfigOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    conversationProfile: Schema.optional(Schema.String),
    participantRole: Schema.optional(Schema.String),
    suggestionFeatureType: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SetSuggestionFeatureConfigOperationMetadata",
  });

export interface GoogleCloudDialogflowCxV3ImportEntityTypesResponseConflictingResources {
  entityTypeDisplayNames?: ReadonlyArray<string>;
  entityDisplayNames?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3ImportEntityTypesResponseConflictingResources: Schema.Codec<GoogleCloudDialogflowCxV3ImportEntityTypesResponseConflictingResources> =
  /*@__PURE__*/ Schema.Struct({
    entityTypeDisplayNames: Schema.optional(Schema.Array(Schema.String)),
    entityDisplayNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3ImportEntityTypesResponseConflictingResources",
  });

export interface GoogleCloudDialogflowCxV3ImportEntityTypesResponse {
  conflictingResources?: GoogleCloudDialogflowCxV3ImportEntityTypesResponseConflictingResources;
  entityTypes?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3ImportEntityTypesResponse: Schema.Codec<GoogleCloudDialogflowCxV3ImportEntityTypesResponse> =
  /*@__PURE__*/ Schema.Struct({
    conflictingResources: Schema.optional(
      GoogleCloudDialogflowCxV3ImportEntityTypesResponseConflictingResources,
    ),
    entityTypes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ImportEntityTypesResponse",
  });

export interface GoogleCloudDialogflowCxV3RestoreToolVersionResponse {
  tool?: GoogleCloudDialogflowCxV3Tool;
}

export const GoogleCloudDialogflowCxV3RestoreToolVersionResponse: Schema.Codec<GoogleCloudDialogflowCxV3RestoreToolVersionResponse> =
  /*@__PURE__*/ Schema.Struct({
    tool: Schema.optional(GoogleCloudDialogflowCxV3Tool),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3RestoreToolVersionResponse",
  });

export interface GoogleCloudDialogflowCxV3Version {
  state?:
    | "STATE_UNSPECIFIED"
    | "RUNNING"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
  name?: string;
  displayName?: string;
  description?: string;
  nluSettings?: GoogleCloudDialogflowCxV3NluSettings;
  createTime?: string;
}

export const GoogleCloudDialogflowCxV3Version: Schema.Codec<GoogleCloudDialogflowCxV3Version> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    nluSettings: Schema.optional(GoogleCloudDialogflowCxV3NluSettings),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Version" });

export interface GoogleCloudDialogflowCxV3ListTestCaseResultsResponse {
  testCaseResults?: ReadonlyArray<GoogleCloudDialogflowCxV3TestCaseResult>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3ListTestCaseResultsResponse: Schema.Codec<GoogleCloudDialogflowCxV3ListTestCaseResultsResponse> =
  /*@__PURE__*/ Schema.Struct({
    testCaseResults: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3TestCaseResult),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ListTestCaseResultsResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata {
  version?: string;
}

export const GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata: Schema.Codec<GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata",
  });

export interface GoogleCloudDialogflowV2InitializeEncryptionSpecMetadata {
  request?: GoogleCloudDialogflowV2InitializeEncryptionSpecRequest;
}

export const GoogleCloudDialogflowV2InitializeEncryptionSpecMetadata: Schema.Codec<GoogleCloudDialogflowV2InitializeEncryptionSpecMetadata> =
  /*@__PURE__*/ Schema.Struct({
    request: Schema.optional(
      GoogleCloudDialogflowV2InitializeEncryptionSpecRequest,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2InitializeEncryptionSpecMetadata",
  });

export interface GoogleLongrunningOperation {
  name?: string;
  done?: boolean;
  response?: Record<string, unknown>;
  metadata?: Record<string, unknown>;
  error?: GoogleRpcStatus;
}

export const GoogleLongrunningOperation: Schema.Codec<GoogleLongrunningOperation> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    done: Schema.optional(Schema.Boolean),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(GoogleRpcStatus),
  }).annotate({ identifier: "GoogleLongrunningOperation" });

export interface GoogleCloudDialogflowCxV3RolloutState {
  startTime?: string;
  step?: string;
  stepIndex?: number;
}

export const GoogleCloudDialogflowCxV3RolloutState: Schema.Codec<GoogleCloudDialogflowCxV3RolloutState> =
  /*@__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    step: Schema.optional(Schema.String),
    stepIndex: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3RolloutState" });

export interface GoogleCloudDialogflowCxV3ExperimentDefinition {
  versionVariants?: GoogleCloudDialogflowCxV3VersionVariants;
  condition?: string;
}

export const GoogleCloudDialogflowCxV3ExperimentDefinition: Schema.Codec<GoogleCloudDialogflowCxV3ExperimentDefinition> =
  /*@__PURE__*/ Schema.Struct({
    versionVariants: Schema.optional(GoogleCloudDialogflowCxV3VersionVariants),
    condition: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ExperimentDefinition" });

export interface GoogleCloudDialogflowCxV3Experiment {
  name?: string;
  rolloutState?: GoogleCloudDialogflowCxV3RolloutState;
  rolloutFailureReason?: string;
  result?: GoogleCloudDialogflowCxV3ExperimentResult;
  startTime?: string;
  experimentLength?: string;
  lastUpdateTime?: string;
  definition?: GoogleCloudDialogflowCxV3ExperimentDefinition;
  description?: string;
  variantsHistory?: ReadonlyArray<GoogleCloudDialogflowCxV3VariantsHistory>;
  displayName?: string;
  createTime?: string;
  endTime?: string;
  rolloutConfig?: GoogleCloudDialogflowCxV3RolloutConfig;
  state?:
    | "STATE_UNSPECIFIED"
    | "DRAFT"
    | "RUNNING"
    | "DONE"
    | "ROLLOUT_FAILED"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3Experiment: Schema.Codec<GoogleCloudDialogflowCxV3Experiment> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    rolloutState: Schema.optional(GoogleCloudDialogflowCxV3RolloutState),
    rolloutFailureReason: Schema.optional(Schema.String),
    result: Schema.optional(GoogleCloudDialogflowCxV3ExperimentResult),
    startTime: Schema.optional(Schema.String),
    experimentLength: Schema.optional(Schema.String),
    lastUpdateTime: Schema.optional(Schema.String),
    definition: Schema.optional(GoogleCloudDialogflowCxV3ExperimentDefinition),
    description: Schema.optional(Schema.String),
    variantsHistory: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3VariantsHistory),
    ),
    displayName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    rolloutConfig: Schema.optional(GoogleCloudDialogflowCxV3RolloutConfig),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Experiment" });

export interface GoogleCloudDialogflowV2CreateConversationDatasetOperationMetadata {
  conversationDataset?: string;
}

export const GoogleCloudDialogflowV2CreateConversationDatasetOperationMetadata: Schema.Codec<GoogleCloudDialogflowV2CreateConversationDatasetOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    conversationDataset: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2CreateConversationDatasetOperationMetadata",
  });

export interface GoogleCloudDialogflowCxV3RestorePlaybookVersionRequest {}

export const GoogleCloudDialogflowCxV3RestorePlaybookVersionRequest: Schema.Codec<GoogleCloudDialogflowCxV3RestorePlaybookVersionRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3RestorePlaybookVersionRequest",
  });

export interface GoogleCloudDialogflowV2beta1EncryptionSpec {
  kmsKey?: string;
  name?: string;
}

export const GoogleCloudDialogflowV2beta1EncryptionSpec: Schema.Codec<GoogleCloudDialogflowV2beta1EncryptionSpec> =
  /*@__PURE__*/ Schema.Struct({
    kmsKey: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1EncryptionSpec" });

export interface GoogleCloudDialogflowV2beta1InitializeEncryptionSpecRequest {
  encryptionSpec?: GoogleCloudDialogflowV2beta1EncryptionSpec;
}

export const GoogleCloudDialogflowV2beta1InitializeEncryptionSpecRequest: Schema.Codec<GoogleCloudDialogflowV2beta1InitializeEncryptionSpecRequest> =
  /*@__PURE__*/ Schema.Struct({
    encryptionSpec: Schema.optional(GoogleCloudDialogflowV2beta1EncryptionSpec),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1InitializeEncryptionSpecRequest",
  });

export interface GoogleCloudDialogflowV2beta1InitializeEncryptionSpecMetadata {
  request?: GoogleCloudDialogflowV2beta1InitializeEncryptionSpecRequest;
}

export const GoogleCloudDialogflowV2beta1InitializeEncryptionSpecMetadata: Schema.Codec<GoogleCloudDialogflowV2beta1InitializeEncryptionSpecMetadata> =
  /*@__PURE__*/ Schema.Struct({
    request: Schema.optional(
      GoogleCloudDialogflowV2beta1InitializeEncryptionSpecRequest,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1InitializeEncryptionSpecMetadata",
  });

export interface GoogleCloudDialogflowCxV3GenerativeSettings {
  name?: string;
  generativeSafetySettings?: GoogleCloudDialogflowCxV3SafetySettings;
  languageCode?: string;
  fallbackSettings?: GoogleCloudDialogflowCxV3GenerativeSettingsFallbackSettings;
  llmModelSettings?: GoogleCloudDialogflowCxV3LlmModelSettings;
  knowledgeConnectorSettings?: GoogleCloudDialogflowCxV3GenerativeSettingsKnowledgeConnectorSettings;
}

export const GoogleCloudDialogflowCxV3GenerativeSettings: Schema.Codec<GoogleCloudDialogflowCxV3GenerativeSettings> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    generativeSafetySettings: Schema.optional(
      GoogleCloudDialogflowCxV3SafetySettings,
    ),
    languageCode: Schema.optional(Schema.String),
    fallbackSettings: Schema.optional(
      GoogleCloudDialogflowCxV3GenerativeSettingsFallbackSettings,
    ),
    llmModelSettings: Schema.optional(
      GoogleCloudDialogflowCxV3LlmModelSettings,
    ),
    knowledgeConnectorSettings: Schema.optional(
      GoogleCloudDialogflowCxV3GenerativeSettingsKnowledgeConnectorSettings,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3GenerativeSettings" });

export interface GoogleCloudDialogflowV2SmartReplyModelMetadata {
  trainingModelType?:
    | "MODEL_TYPE_UNSPECIFIED"
    | "SMART_REPLY_DUAL_ENCODER_MODEL"
    | "SMART_REPLY_BERT_MODEL"
    | (string & {});
}

export const GoogleCloudDialogflowV2SmartReplyModelMetadata: Schema.Codec<GoogleCloudDialogflowV2SmartReplyModelMetadata> =
  /*@__PURE__*/ Schema.Struct({
    trainingModelType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SmartReplyModelMetadata" });

export interface GoogleCloudDialogflowCxV3ConversationSignals {
  turnSignals?: GoogleCloudDialogflowCxV3TurnSignals;
}

export const GoogleCloudDialogflowCxV3ConversationSignals: Schema.Codec<GoogleCloudDialogflowCxV3ConversationSignals> =
  /*@__PURE__*/ Schema.Struct({
    turnSignals: Schema.optional(GoogleCloudDialogflowCxV3TurnSignals),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ConversationSignals" });

export interface GoogleCloudDialogflowCxV3beta1ImportIntentsMetadata {}

export const GoogleCloudDialogflowCxV3beta1ImportIntentsMetadata: Schema.Codec<GoogleCloudDialogflowCxV3beta1ImportIntentsMetadata> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportIntentsMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportTestCasesResponse {
  gcsUri?: string;
  content?: string;
}

export const GoogleCloudDialogflowCxV3beta1ExportTestCasesResponse: Schema.Codec<GoogleCloudDialogflowCxV3beta1ExportTestCasesResponse> =
  /*@__PURE__*/ Schema.Struct({
    gcsUri: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportTestCasesResponse",
  });

export interface GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest {
  version?: string;
  payload?: Record<string, unknown>;
  source?: string;
}

export const GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest: Schema.Codec<GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    source: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest",
  });

export interface GoogleCloudDialogflowV2GenerateSuggestionsResponseGeneratorSuggestionAnswer {
  sourceGenerator?: string;
  generatorSuggestion?: GoogleCloudDialogflowV2GeneratorSuggestion;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2GenerateSuggestionsResponseGeneratorSuggestionAnswer: Schema.Codec<GoogleCloudDialogflowV2GenerateSuggestionsResponseGeneratorSuggestionAnswer> =
  /*@__PURE__*/ Schema.Struct({
    sourceGenerator: Schema.optional(Schema.String),
    generatorSuggestion: Schema.optional(
      GoogleCloudDialogflowV2GeneratorSuggestion,
    ),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2GenerateSuggestionsResponseGeneratorSuggestionAnswer",
  });

export interface GoogleCloudDialogflowV2GenerateSuggestionsResponse {
  generatorSuggestionAnswers?: ReadonlyArray<GoogleCloudDialogflowV2GenerateSuggestionsResponseGeneratorSuggestionAnswer>;
  latestMessage?: string;
}

export const GoogleCloudDialogflowV2GenerateSuggestionsResponse: Schema.Codec<GoogleCloudDialogflowV2GenerateSuggestionsResponse> =
  /*@__PURE__*/ Schema.Struct({
    generatorSuggestionAnswers: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2GenerateSuggestionsResponseGeneratorSuggestionAnswer,
      ),
    ),
    latestMessage: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2GenerateSuggestionsResponse",
  });

export interface GoogleCloudDialogflowCxV3DeployFlowRequest {
  flowVersion?: string;
}

export const GoogleCloudDialogflowCxV3DeployFlowRequest: Schema.Codec<GoogleCloudDialogflowCxV3DeployFlowRequest> =
  /*@__PURE__*/ Schema.Struct({
    flowVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3DeployFlowRequest" });

export interface GoogleCloudDialogflowCxV3Deployment {
  flowVersion?: string;
  state?:
    | "STATE_UNSPECIFIED"
    | "RUNNING"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
  result?: GoogleCloudDialogflowCxV3DeploymentResult;
  name?: string;
  startTime?: string;
  endTime?: string;
}

export const GoogleCloudDialogflowCxV3Deployment: Schema.Codec<GoogleCloudDialogflowCxV3Deployment> =
  /*@__PURE__*/ Schema.Struct({
    flowVersion: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    result: Schema.optional(GoogleCloudDialogflowCxV3DeploymentResult),
    name: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Deployment" });

export interface GoogleCloudDialogflowCxV3ListDeploymentsResponse {
  nextPageToken?: string;
  deployments?: ReadonlyArray<GoogleCloudDialogflowCxV3Deployment>;
}

export const GoogleCloudDialogflowCxV3ListDeploymentsResponse: Schema.Codec<GoogleCloudDialogflowCxV3ListDeploymentsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    deployments: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3Deployment),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ListDeploymentsResponse",
  });

export interface GoogleCloudDialogflowV2SuggestArticlesResponse {
  articleAnswers?: ReadonlyArray<GoogleCloudDialogflowV2ArticleAnswer>;
  latestMessage?: string;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2SuggestArticlesResponse: Schema.Codec<GoogleCloudDialogflowV2SuggestArticlesResponse> =
  /*@__PURE__*/ Schema.Struct({
    articleAnswers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2ArticleAnswer),
    ),
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SuggestArticlesResponse" });

export interface GoogleCloudDialogflowV2KnowledgeAssistAnswerAdditionalSuggestedQueryResult {
  suggestedQuery?: GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2KnowledgeAssistAnswerAdditionalSuggestedQueryResult: Schema.Codec<GoogleCloudDialogflowV2KnowledgeAssistAnswerAdditionalSuggestedQueryResult> =
  /*@__PURE__*/ Schema.Struct({
    suggestedQuery: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery,
    ),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2KnowledgeAssistAnswerAdditionalSuggestedQueryResult",
  });

export interface GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse {
  knowledgeAssistAnswer?: GoogleCloudDialogflowV2KnowledgeAssistAnswer;
  latestMessage?: string;
  contextSize?: number;
  additionalSuggestedQueryResults?: ReadonlyArray<GoogleCloudDialogflowV2KnowledgeAssistAnswerAdditionalSuggestedQueryResult>;
}

export const GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse: Schema.Codec<GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse> =
  /*@__PURE__*/ Schema.Struct({
    knowledgeAssistAnswer: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswer,
    ),
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
    additionalSuggestedQueryResults: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2KnowledgeAssistAnswerAdditionalSuggestedQueryResult,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse",
  });

export interface GoogleCloudDialogflowV2SuggestFaqAnswersResponse {
  faqAnswers?: ReadonlyArray<GoogleCloudDialogflowV2FaqAnswer>;
  latestMessage?: string;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2SuggestFaqAnswersResponse: Schema.Codec<GoogleCloudDialogflowV2SuggestFaqAnswersResponse> =
  /*@__PURE__*/ Schema.Struct({
    faqAnswers: Schema.optional(Schema.Array(GoogleCloudDialogflowV2FaqAnswer)),
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SuggestFaqAnswersResponse",
  });

export interface GoogleCloudDialogflowV2SuggestionResult {
  suggestArticlesResponse?: GoogleCloudDialogflowV2SuggestArticlesResponse;
  generateSuggestionsResponse?: GoogleCloudDialogflowV2GenerateSuggestionsResponse;
  suggestSmartRepliesResponse?: GoogleCloudDialogflowV2SuggestSmartRepliesResponse;
  error?: GoogleRpcStatus;
  suggestKnowledgeAssistResponse?: GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse;
  suggestFaqAnswersResponse?: GoogleCloudDialogflowV2SuggestFaqAnswersResponse;
}

export const GoogleCloudDialogflowV2SuggestionResult: Schema.Codec<GoogleCloudDialogflowV2SuggestionResult> =
  /*@__PURE__*/ Schema.Struct({
    suggestArticlesResponse: Schema.optional(
      GoogleCloudDialogflowV2SuggestArticlesResponse,
    ),
    generateSuggestionsResponse: Schema.optional(
      GoogleCloudDialogflowV2GenerateSuggestionsResponse,
    ),
    suggestSmartRepliesResponse: Schema.optional(
      GoogleCloudDialogflowV2SuggestSmartRepliesResponse,
    ),
    error: Schema.optional(GoogleRpcStatus),
    suggestKnowledgeAssistResponse: Schema.optional(
      GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse,
    ),
    suggestFaqAnswersResponse: Schema.optional(
      GoogleCloudDialogflowV2SuggestFaqAnswersResponse,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SuggestionResult" });

export interface GoogleCloudDialogflowCxV3WebhookRequestIntentInfo {
  lastMatchedIntent?: string;
  parameters?: Record<
    string,
    GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue
  >;
  confidence?: number;
  displayName?: string;
}

export const GoogleCloudDialogflowCxV3WebhookRequestIntentInfo: Schema.Codec<GoogleCloudDialogflowCxV3WebhookRequestIntentInfo> =
  /*@__PURE__*/ Schema.Struct({
    lastMatchedIntent: Schema.optional(Schema.String),
    parameters: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue,
      ),
    ),
    confidence: Schema.optional(Schema.Number),
    displayName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3WebhookRequestIntentInfo",
  });

export interface GoogleCloudDialogflowV2ConversationModel {
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "UNDEPLOYED"
    | "DEPLOYING"
    | "DEPLOYED"
    | "UNDEPLOYING"
    | "DELETING"
    | "FAILED"
    | "PENDING"
    | (string & {});
  satisfiesPzi?: boolean;
  smartReplyModelMetadata?: GoogleCloudDialogflowV2SmartReplyModelMetadata;
  satisfiesPzs?: boolean;
  datasets?: ReadonlyArray<GoogleCloudDialogflowV2InputDataset>;
  languageCode?: string;
  displayName?: string;
  createTime?: string;
  name?: string;
  articleSuggestionModelMetadata?: GoogleCloudDialogflowV2ArticleSuggestionModelMetadata;
}

export const GoogleCloudDialogflowV2ConversationModel: Schema.Codec<GoogleCloudDialogflowV2ConversationModel> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    satisfiesPzi: Schema.optional(Schema.Boolean),
    smartReplyModelMetadata: Schema.optional(
      GoogleCloudDialogflowV2SmartReplyModelMetadata,
    ),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    datasets: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2InputDataset),
    ),
    languageCode: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    articleSuggestionModelMetadata: Schema.optional(
      GoogleCloudDialogflowV2ArticleSuggestionModelMetadata,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ConversationModel" });

export interface GoogleCloudDialogflowCxV3beta1ExportEntityTypesResponse {
  entityTypesUri?: string;
  entityTypesContent?: GoogleCloudDialogflowCxV3beta1InlineDestination;
}

export const GoogleCloudDialogflowCxV3beta1ExportEntityTypesResponse: Schema.Codec<GoogleCloudDialogflowCxV3beta1ExportEntityTypesResponse> =
  /*@__PURE__*/ Schema.Struct({
    entityTypesUri: Schema.optional(Schema.String),
    entityTypesContent: Schema.optional(
      GoogleCloudDialogflowCxV3beta1InlineDestination,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportEntityTypesResponse",
  });

export interface GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesResponse {
  entityTypes?: ReadonlyArray<GoogleCloudDialogflowV2beta1EntityType>;
}

export const GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesResponse: Schema.Codec<GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesResponse> =
  /*@__PURE__*/ Schema.Struct({
    entityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1EntityType),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesResponse",
  });

export interface GoogleCloudDialogflowCxV3ListEntityTypesResponse {
  entityTypes?: ReadonlyArray<GoogleCloudDialogflowCxV3EntityType>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3ListEntityTypesResponse: Schema.Codec<GoogleCloudDialogflowCxV3ListEntityTypesResponse> =
  /*@__PURE__*/ Schema.Struct({
    entityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3EntityType),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ListEntityTypesResponse",
  });

export interface GoogleCloudDialogflowCxV3ExportAgentRequestGitDestination {
  commitMessage?: string;
  trackingBranch?: string;
}

export const GoogleCloudDialogflowCxV3ExportAgentRequestGitDestination: Schema.Codec<GoogleCloudDialogflowCxV3ExportAgentRequestGitDestination> =
  /*@__PURE__*/ Schema.Struct({
    commitMessage: Schema.optional(Schema.String),
    trackingBranch: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ExportAgentRequestGitDestination",
  });

export interface GoogleCloudDialogflowCxV3ImportFlowResponse {
  flow?: string;
}

export const GoogleCloudDialogflowCxV3ImportFlowResponse: Schema.Codec<GoogleCloudDialogflowCxV3ImportFlowResponse> =
  /*@__PURE__*/ Schema.Struct({
    flow: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ImportFlowResponse" });

export interface GoogleCloudDialogflowV2beta1ExportAgentResponse {
  agentUri?: string;
  agentContent?: string;
}

export const GoogleCloudDialogflowV2beta1ExportAgentResponse: Schema.Codec<GoogleCloudDialogflowV2beta1ExportAgentResponse> =
  /*@__PURE__*/ Schema.Struct({
    agentUri: Schema.optional(Schema.String),
    agentContent: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ExportAgentResponse",
  });

export interface GoogleCloudDialogflowCxV3ListFlowsResponse {
  flows?: ReadonlyArray<GoogleCloudDialogflowCxV3Flow>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3ListFlowsResponse: Schema.Codec<GoogleCloudDialogflowCxV3ListFlowsResponse> =
  /*@__PURE__*/ Schema.Struct({
    flows: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3Flow)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ListFlowsResponse" });

export interface GoogleCloudDialogflowCxV3ListVersionsResponse {
  versions?: ReadonlyArray<GoogleCloudDialogflowCxV3Version>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3ListVersionsResponse: Schema.Codec<GoogleCloudDialogflowCxV3ListVersionsResponse> =
  /*@__PURE__*/ Schema.Struct({
    versions: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3Version)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ListVersionsResponse" });

export interface GoogleCloudDialogflowCxV3ExportFlowRequest {
  flowUri?: string;
  includeReferencedFlows?: boolean;
}

export const GoogleCloudDialogflowCxV3ExportFlowRequest: Schema.Codec<GoogleCloudDialogflowCxV3ExportFlowRequest> =
  /*@__PURE__*/ Schema.Struct({
    flowUri: Schema.optional(Schema.String),
    includeReferencedFlows: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ExportFlowRequest" });

export interface GoogleCloudDialogflowCxV3RunContinuousTestRequest {}

export const GoogleCloudDialogflowCxV3RunContinuousTestRequest: Schema.Codec<GoogleCloudDialogflowCxV3RunContinuousTestRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3RunContinuousTestRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportAgentResponse {
  agentUri?: string;
  agentContent?: string;
  commitSha?: string;
}

export const GoogleCloudDialogflowCxV3beta1ExportAgentResponse: Schema.Codec<GoogleCloudDialogflowCxV3beta1ExportAgentResponse> =
  /*@__PURE__*/ Schema.Struct({
    agentUri: Schema.optional(Schema.String),
    agentContent: Schema.optional(Schema.String),
    commitSha: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportAgentResponse",
  });

export interface GoogleCloudDialogflowCxV3CompareVersionsRequest {
  targetVersion?: string;
  languageCode?: string;
}

export const GoogleCloudDialogflowCxV3CompareVersionsRequest: Schema.Codec<GoogleCloudDialogflowCxV3CompareVersionsRequest> =
  /*@__PURE__*/ Schema.Struct({
    targetVersion: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3CompareVersionsRequest",
  });

export interface GoogleCloudDialogflowV2beta1ImportDocumentsResponse {
  warnings?: ReadonlyArray<GoogleRpcStatus>;
}

export const GoogleCloudDialogflowV2beta1ImportDocumentsResponse: Schema.Codec<GoogleCloudDialogflowV2beta1ImportDocumentsResponse> =
  /*@__PURE__*/ Schema.Struct({
    warnings: Schema.optional(Schema.Array(GoogleRpcStatus)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ImportDocumentsResponse",
  });

export interface GoogleCloudDialogflowCxV3LookupEnvironmentHistoryResponse {
  environments?: ReadonlyArray<GoogleCloudDialogflowCxV3Environment>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3LookupEnvironmentHistoryResponse: Schema.Codec<GoogleCloudDialogflowCxV3LookupEnvironmentHistoryResponse> =
  /*@__PURE__*/ Schema.Struct({
    environments: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3Environment),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3LookupEnvironmentHistoryResponse",
  });

export interface GoogleCloudDialogflowCxV3StartExperimentRequest {}

export const GoogleCloudDialogflowCxV3StartExperimentRequest: Schema.Codec<GoogleCloudDialogflowCxV3StartExperimentRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3StartExperimentRequest",
  });

export interface GoogleCloudDialogflowCxV3ExportEntityTypesRequest {
  entityTypesUri?: string;
  languageCode?: string;
  entityTypesContentInline?: boolean;
  entityTypes?: ReadonlyArray<string>;
  dataFormat?:
    | "DATA_FORMAT_UNSPECIFIED"
    | "BLOB"
    | "JSON_PACKAGE"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3ExportEntityTypesRequest: Schema.Codec<GoogleCloudDialogflowCxV3ExportEntityTypesRequest> =
  /*@__PURE__*/ Schema.Struct({
    entityTypesUri: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    entityTypesContentInline: Schema.optional(Schema.Boolean),
    entityTypes: Schema.optional(Schema.Array(Schema.String)),
    dataFormat: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ExportEntityTypesRequest",
  });

export interface GoogleCloudDialogflowCxV3ListExamplesResponse {
  examples?: ReadonlyArray<GoogleCloudDialogflowCxV3Example>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3ListExamplesResponse: Schema.Codec<GoogleCloudDialogflowCxV3ListExamplesResponse> =
  /*@__PURE__*/ Schema.Struct({
    examples: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3Example)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ListExamplesResponse" });

export interface GoogleCloudDialogflowCxV3ListExperimentsResponse {
  experiments?: ReadonlyArray<GoogleCloudDialogflowCxV3Experiment>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3ListExperimentsResponse: Schema.Codec<GoogleCloudDialogflowCxV3ListExperimentsResponse> =
  /*@__PURE__*/ Schema.Struct({
    experiments: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3Experiment),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ListExperimentsResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportEntityTypesMetadata {}

export const GoogleCloudDialogflowCxV3beta1ExportEntityTypesMetadata: Schema.Codec<GoogleCloudDialogflowCxV3beta1ExportEntityTypesMetadata> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportEntityTypesMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1BatchRunTestCasesResponse {
  results?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TestCaseResult>;
}

export const GoogleCloudDialogflowCxV3beta1BatchRunTestCasesResponse: Schema.Codec<GoogleCloudDialogflowCxV3beta1BatchRunTestCasesResponse> =
  /*@__PURE__*/ Schema.Struct({
    results: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TestCaseResult),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1BatchRunTestCasesResponse",
  });

export interface GoogleCloudDialogflowCxV3DeployFlowMetadata {
  testErrors?: ReadonlyArray<GoogleCloudDialogflowCxV3TestError>;
}

export const GoogleCloudDialogflowCxV3DeployFlowMetadata: Schema.Codec<GoogleCloudDialogflowCxV3DeployFlowMetadata> =
  /*@__PURE__*/ Schema.Struct({
    testErrors: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3TestError),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3DeployFlowMetadata" });

export interface GoogleCloudDialogflowV2UndeployConversationModelOperationMetadata {
  createTime?: string;
  conversationModel?: string;
  doneTime?: string;
}

export const GoogleCloudDialogflowV2UndeployConversationModelOperationMetadata: Schema.Codec<GoogleCloudDialogflowV2UndeployConversationModelOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    conversationModel: Schema.optional(Schema.String),
    doneTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2UndeployConversationModelOperationMetadata",
  });

export interface GoogleLongrunningListOperationsResponse {
  operations?: ReadonlyArray<GoogleLongrunningOperation>;
  unreachable?: ReadonlyArray<string>;
  nextPageToken?: string;
}

export const GoogleLongrunningListOperationsResponse: Schema.Codec<GoogleLongrunningListOperationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(GoogleLongrunningOperation)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleLongrunningListOperationsResponse" });

export interface GoogleCloudDialogflowCxV3StopExperimentRequest {}

export const GoogleCloudDialogflowCxV3StopExperimentRequest: Schema.Codec<GoogleCloudDialogflowCxV3StopExperimentRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3StopExperimentRequest",
  });

export interface GoogleCloudDialogflowCxV3ExportTestCasesRequest {
  gcsUri?: string;
  dataFormat?: "DATA_FORMAT_UNSPECIFIED" | "BLOB" | "JSON" | (string & {});
  filter?: string;
}

export const GoogleCloudDialogflowCxV3ExportTestCasesRequest: Schema.Codec<GoogleCloudDialogflowCxV3ExportTestCasesRequest> =
  /*@__PURE__*/ Schema.Struct({
    gcsUri: Schema.optional(Schema.String),
    dataFormat: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ExportTestCasesRequest",
  });

export interface GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult {
  score?: number;
  magnitude?: number;
}

export const GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult: Schema.Codec<GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult> =
  /*@__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.Number),
    magnitude: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult",
  });

export interface GoogleCloudDialogflowCxV3MatchIntentResponse {
  matches?: ReadonlyArray<GoogleCloudDialogflowCxV3Match>;
  transcript?: string;
  triggerIntent?: string;
  triggerEvent?: string;
  text?: string;
  currentPage?: GoogleCloudDialogflowCxV3Page;
}

export const GoogleCloudDialogflowCxV3MatchIntentResponse: Schema.Codec<GoogleCloudDialogflowCxV3MatchIntentResponse> =
  /*@__PURE__*/ Schema.Struct({
    matches: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3Match)),
    transcript: Schema.optional(Schema.String),
    triggerIntent: Schema.optional(Schema.String),
    triggerEvent: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
    currentPage: Schema.optional(GoogleCloudDialogflowCxV3Page),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3MatchIntentResponse" });

export interface GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo {
  tag?: string;
}

export const GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo: Schema.Codec<GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo> =
  /*@__PURE__*/ Schema.Struct({
    tag: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo",
  });

export interface GoogleCloudDialogflowCxV3WebhookRequest {
  messages?: ReadonlyArray<GoogleCloudDialogflowCxV3ResponseMessage>;
  detectIntentResponseId?: string;
  languageInfo?: GoogleCloudDialogflowCxV3LanguageInfo;
  text?: string;
  transcript?: string;
  sessionInfo?: GoogleCloudDialogflowCxV3SessionInfo;
  fulfillmentInfo?: GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo;
  intentInfo?: GoogleCloudDialogflowCxV3WebhookRequestIntentInfo;
  pageInfo?: GoogleCloudDialogflowCxV3PageInfo;
  payload?: Record<string, unknown>;
  sentimentAnalysisResult?: GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult;
  languageCode?: string;
  triggerIntent?: string;
  dtmfDigits?: string;
  triggerEvent?: string;
}

export const GoogleCloudDialogflowCxV3WebhookRequest: Schema.Codec<GoogleCloudDialogflowCxV3WebhookRequest> =
  /*@__PURE__*/ Schema.Struct({
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ResponseMessage),
    ),
    detectIntentResponseId: Schema.optional(Schema.String),
    languageInfo: Schema.optional(GoogleCloudDialogflowCxV3LanguageInfo),
    text: Schema.optional(Schema.String),
    transcript: Schema.optional(Schema.String),
    sessionInfo: Schema.optional(GoogleCloudDialogflowCxV3SessionInfo),
    fulfillmentInfo: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo,
    ),
    intentInfo: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookRequestIntentInfo,
    ),
    pageInfo: Schema.optional(GoogleCloudDialogflowCxV3PageInfo),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    sentimentAnalysisResult: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult,
    ),
    languageCode: Schema.optional(Schema.String),
    triggerIntent: Schema.optional(Schema.String),
    dtmfDigits: Schema.optional(Schema.String),
    triggerEvent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3WebhookRequest" });

export interface GoogleCloudDialogflowV2beta1WebhookRequest {
  originalDetectIntentRequest?: GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest;
  alternativeQueryResults?: ReadonlyArray<GoogleCloudDialogflowV2beta1QueryResult>;
  queryResult?: GoogleCloudDialogflowV2beta1QueryResult;
  session?: string;
  responseId?: string;
}

export const GoogleCloudDialogflowV2beta1WebhookRequest: Schema.Codec<GoogleCloudDialogflowV2beta1WebhookRequest> =
  /*@__PURE__*/ Schema.Struct({
    originalDetectIntentRequest: Schema.optional(
      GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest,
    ),
    alternativeQueryResults: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1QueryResult),
    ),
    queryResult: Schema.optional(GoogleCloudDialogflowV2beta1QueryResult),
    session: Schema.optional(Schema.String),
    responseId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1WebhookRequest" });

export interface GoogleCloudDialogflowCxV3RunContinuousTestResponse {
  continuousTestResult?: GoogleCloudDialogflowCxV3ContinuousTestResult;
}

export const GoogleCloudDialogflowCxV3RunContinuousTestResponse: Schema.Codec<GoogleCloudDialogflowCxV3RunContinuousTestResponse> =
  /*@__PURE__*/ Schema.Struct({
    continuousTestResult: Schema.optional(
      GoogleCloudDialogflowCxV3ContinuousTestResult,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3RunContinuousTestResponse",
  });

export interface GoogleCloudDialogflowCxV3BatchDeleteTestCasesRequest {
  names?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3BatchDeleteTestCasesRequest: Schema.Codec<GoogleCloudDialogflowCxV3BatchDeleteTestCasesRequest> =
  /*@__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3BatchDeleteTestCasesRequest",
  });

export interface GoogleCloudDialogflowCxV3ListPlaybooksResponse {
  nextPageToken?: string;
  playbooks?: ReadonlyArray<GoogleCloudDialogflowCxV3Playbook>;
}

export const GoogleCloudDialogflowCxV3ListPlaybooksResponse: Schema.Codec<GoogleCloudDialogflowCxV3ListPlaybooksResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    playbooks: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3Playbook)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ListPlaybooksResponse" });

export interface GoogleCloudDialogflowCxV3ListToolsResponse {
  tools?: ReadonlyArray<GoogleCloudDialogflowCxV3Tool>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3ListToolsResponse: Schema.Codec<GoogleCloudDialogflowCxV3ListToolsResponse> =
  /*@__PURE__*/ Schema.Struct({
    tools: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3Tool)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ListToolsResponse" });

export interface GoogleCloudDialogflowCxV3beta1ExportFlowResponse {
  flowUri?: string;
  flowContent?: string;
}

export const GoogleCloudDialogflowCxV3beta1ExportFlowResponse: Schema.Codec<GoogleCloudDialogflowCxV3beta1ExportFlowResponse> =
  /*@__PURE__*/ Schema.Struct({
    flowUri: Schema.optional(Schema.String),
    flowContent: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportFlowResponse",
  });

export interface GoogleCloudDialogflowCxV3LoadVersionRequest {
  allowOverrideAgentResources?: boolean;
}

export const GoogleCloudDialogflowCxV3LoadVersionRequest: Schema.Codec<GoogleCloudDialogflowCxV3LoadVersionRequest> =
  /*@__PURE__*/ Schema.Struct({
    allowOverrideAgentResources: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3LoadVersionRequest" });

export interface GoogleCloudDialogflowCxV3ImportTestCasesResponse {
  names?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3ImportTestCasesResponse: Schema.Codec<GoogleCloudDialogflowCxV3ImportTestCasesResponse> =
  /*@__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ImportTestCasesResponse",
  });

export interface GoogleCloudDialogflowCxV3ExportAgentRequest {
  gitDestination?: GoogleCloudDialogflowCxV3ExportAgentRequestGitDestination;
  agentUri?: string;
  environment?: string;
  includeBigqueryExportSettings?: boolean;
  dataFormat?:
    | "DATA_FORMAT_UNSPECIFIED"
    | "BLOB"
    | "JSON_PACKAGE"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3ExportAgentRequest: Schema.Codec<GoogleCloudDialogflowCxV3ExportAgentRequest> =
  /*@__PURE__*/ Schema.Struct({
    gitDestination: Schema.optional(
      GoogleCloudDialogflowCxV3ExportAgentRequestGitDestination,
    ),
    agentUri: Schema.optional(Schema.String),
    environment: Schema.optional(Schema.String),
    includeBigqueryExportSettings: Schema.optional(Schema.Boolean),
    dataFormat: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ExportAgentRequest" });

export interface GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata {
  knowledgeBase?: string;
  state?: "STATE_UNSPECIFIED" | "PENDING" | "RUNNING" | "DONE" | (string & {});
  doneTime?: string;
  exportOperationMetadata?: GoogleCloudDialogflowV2beta1ExportOperationMetadata;
}

export const GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata: Schema.Codec<GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    knowledgeBase: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    doneTime: Schema.optional(Schema.String),
    exportOperationMetadata: Schema.optional(
      GoogleCloudDialogflowV2beta1ExportOperationMetadata,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata",
  });

export interface GoogleCloudDialogflowV2ImportConversationDataOperationMetadata {
  conversationDataset?: string;
  createTime?: string;
  partialFailures?: ReadonlyArray<GoogleRpcStatus>;
}

export const GoogleCloudDialogflowV2ImportConversationDataOperationMetadata: Schema.Codec<GoogleCloudDialogflowV2ImportConversationDataOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    conversationDataset: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    partialFailures: Schema.optional(Schema.Array(GoogleRpcStatus)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2ImportConversationDataOperationMetadata",
  });

export interface GoogleCloudDialogflowCxV3ExportPlaybookRequest {
  playbookUri?: string;
  dataFormat?: "DATA_FORMAT_UNSPECIFIED" | "BLOB" | "JSON" | (string & {});
}

export const GoogleCloudDialogflowCxV3ExportPlaybookRequest: Schema.Codec<GoogleCloudDialogflowCxV3ExportPlaybookRequest> =
  /*@__PURE__*/ Schema.Struct({
    playbookUri: Schema.optional(Schema.String),
    dataFormat: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ExportPlaybookRequest" });

export interface GoogleCloudDialogflowCxV3ListGeneratorsResponse {
  generators?: ReadonlyArray<GoogleCloudDialogflowCxV3Generator>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3ListGeneratorsResponse: Schema.Codec<GoogleCloudDialogflowCxV3ListGeneratorsResponse> =
  /*@__PURE__*/ Schema.Struct({
    generators: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3Generator),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ListGeneratorsResponse",
  });

export interface GoogleCloudDialogflowCxV3ListTestCasesResponse {
  testCases?: ReadonlyArray<GoogleCloudDialogflowCxV3TestCase>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3ListTestCasesResponse: Schema.Codec<GoogleCloudDialogflowCxV3ListTestCasesResponse> =
  /*@__PURE__*/ Schema.Struct({
    testCases: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3TestCase)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ListTestCasesResponse" });

export interface GoogleCloudDialogflowCxV3ExportEntityTypesMetadata {}

export const GoogleCloudDialogflowCxV3ExportEntityTypesMetadata: Schema.Codec<GoogleCloudDialogflowCxV3ExportEntityTypesMetadata> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ExportEntityTypesMetadata",
  });

export interface GoogleCloudDialogflowCxV3ExportEntityTypesResponse {
  entityTypesUri?: string;
  entityTypesContent?: GoogleCloudDialogflowCxV3InlineDestination;
}

export const GoogleCloudDialogflowCxV3ExportEntityTypesResponse: Schema.Codec<GoogleCloudDialogflowCxV3ExportEntityTypesResponse> =
  /*@__PURE__*/ Schema.Struct({
    entityTypesUri: Schema.optional(Schema.String),
    entityTypesContent: Schema.optional(
      GoogleCloudDialogflowCxV3InlineDestination,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ExportEntityTypesResponse",
  });

export interface GoogleCloudDialogflowCxV3ListTransitionRouteGroupsResponse {
  transitionRouteGroups?: ReadonlyArray<GoogleCloudDialogflowCxV3TransitionRouteGroup>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3ListTransitionRouteGroupsResponse: Schema.Codec<GoogleCloudDialogflowCxV3ListTransitionRouteGroupsResponse> =
  /*@__PURE__*/ Schema.Struct({
    transitionRouteGroups: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3TransitionRouteGroup),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ListTransitionRouteGroupsResponse",
  });

export interface GoogleCloudDialogflowV2HumanAgentAssistantEvent {
  participant?: string;
  conversation?: string;
  suggestionResults?: ReadonlyArray<GoogleCloudDialogflowV2SuggestionResult>;
}

export const GoogleCloudDialogflowV2HumanAgentAssistantEvent: Schema.Codec<GoogleCloudDialogflowV2HumanAgentAssistantEvent> =
  /*@__PURE__*/ Schema.Struct({
    participant: Schema.optional(Schema.String),
    conversation: Schema.optional(Schema.String),
    suggestionResults: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SuggestionResult),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2HumanAgentAssistantEvent",
  });

export interface GoogleCloudDialogflowCxV3ImportIntentsRequest {
  intentsContent?: GoogleCloudDialogflowCxV3InlineSource;
  intentsUri?: string;
  mergeOption?:
    | "MERGE_OPTION_UNSPECIFIED"
    | "REJECT"
    | "REPLACE"
    | "MERGE"
    | "RENAME"
    | "REPORT_CONFLICT"
    | "KEEP"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3ImportIntentsRequest: Schema.Codec<GoogleCloudDialogflowCxV3ImportIntentsRequest> =
  /*@__PURE__*/ Schema.Struct({
    intentsContent: Schema.optional(GoogleCloudDialogflowCxV3InlineSource),
    intentsUri: Schema.optional(Schema.String),
    mergeOption: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ImportIntentsRequest" });

export interface GoogleCloudDialogflowCxV3beta1DeployFlowResponse {
  environment?: GoogleCloudDialogflowCxV3beta1Environment;
  deployment?: string;
}

export const GoogleCloudDialogflowCxV3beta1DeployFlowResponse: Schema.Codec<GoogleCloudDialogflowCxV3beta1DeployFlowResponse> =
  /*@__PURE__*/ Schema.Struct({
    environment: Schema.optional(GoogleCloudDialogflowCxV3beta1Environment),
    deployment: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1DeployFlowResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportIntentsResponse {
  intentsContent?: GoogleCloudDialogflowCxV3beta1InlineDestination;
  intentsUri?: string;
}

export const GoogleCloudDialogflowCxV3beta1ExportIntentsResponse: Schema.Codec<GoogleCloudDialogflowCxV3beta1ExportIntentsResponse> =
  /*@__PURE__*/ Schema.Struct({
    intentsContent: Schema.optional(
      GoogleCloudDialogflowCxV3beta1InlineDestination,
    ),
    intentsUri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportIntentsResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1ImportEntityTypesMetadata {}

export const GoogleCloudDialogflowCxV3beta1ImportEntityTypesMetadata: Schema.Codec<GoogleCloudDialogflowCxV3beta1ImportEntityTypesMetadata> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportEntityTypesMetadata",
  });

export interface GoogleCloudDialogflowCxV3BatchRunTestCasesResponse {
  results?: ReadonlyArray<GoogleCloudDialogflowCxV3TestCaseResult>;
}

export const GoogleCloudDialogflowCxV3BatchRunTestCasesResponse: Schema.Codec<GoogleCloudDialogflowCxV3BatchRunTestCasesResponse> =
  /*@__PURE__*/ Schema.Struct({
    results: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3TestCaseResult),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3BatchRunTestCasesResponse",
  });

export interface GoogleCloudDialogflowCxV3RestoreToolVersionRequest {}

export const GoogleCloudDialogflowCxV3RestoreToolVersionRequest: Schema.Codec<GoogleCloudDialogflowCxV3RestoreToolVersionRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3RestoreToolVersionRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1ImportTestCasesResponse {
  names?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1ImportTestCasesResponse: Schema.Codec<GoogleCloudDialogflowCxV3beta1ImportTestCasesResponse> =
  /*@__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportTestCasesResponse",
  });

export interface GoogleCloudDialogflowV2ExportAgentResponse {
  agentUri?: string;
  agentContent?: string;
}

export const GoogleCloudDialogflowV2ExportAgentResponse: Schema.Codec<GoogleCloudDialogflowV2ExportAgentResponse> =
  /*@__PURE__*/ Schema.Struct({
    agentUri: Schema.optional(Schema.String),
    agentContent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ExportAgentResponse" });

export interface GoogleCloudDialogflowV2CreateConversationModelEvaluationOperationMetadata {
  conversationModelEvaluation?: string;
  createTime?: string;
  conversationModel?: string;
  state?:
    | "STATE_UNSPECIFIED"
    | "INITIALIZING"
    | "RUNNING"
    | "CANCELLED"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
}

export const GoogleCloudDialogflowV2CreateConversationModelEvaluationOperationMetadata: Schema.Codec<GoogleCloudDialogflowV2CreateConversationModelEvaluationOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    conversationModelEvaluation: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    conversationModel: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2CreateConversationModelEvaluationOperationMetadata",
  });

// ==========================================================================
// Errors
// ==========================================================================

export class NotFound extends Schema.TaggedErrorClass<NotFound>()("NotFound", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(NotFound, [{ httpStatus: 404 }]);

export class Forbidden extends Schema.TaggedErrorClass<Forbidden>()(
  "Forbidden",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(Forbidden, [{ httpStatus: 403 }]);

export class BadRequest extends Schema.TaggedErrorClass<BadRequest>()(
  "BadRequest",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(BadRequest, [{ httpStatus: 400 }]);

export class Conflict extends Schema.TaggedErrorClass<Conflict>()("Conflict", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(Conflict, [{ httpStatus: 409 }]);

// ==========================================================================
// Operations
// ==========================================================================

export interface ListProjectsLocationsRequest {
  filter?: string;
  extraLocationTypes?: string[];
  name: string;
  pageToken?: string;
  pageSize?: number;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse =
  GoogleCloudLocationListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ GoogleCloudLocationListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

export const listProjectsLocations: API.PaginatedOperationMethod<
  ListProjectsLocationsRequest,
  ListProjectsLocationsResponse,
  ListProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRequest,
  output: ListProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsRequest {
  name: string;
}

export const GetProjectsLocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsRequest>;

export type GetProjectsLocationsResponse = GoogleCloudLocationLocation;
export const GetProjectsLocationsResponse =
  /*@__PURE__*/ GoogleCloudLocationLocation;

export type GetProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

export const getProjectsLocations: API.OperationMethod<
  GetProjectsLocationsRequest,
  GetProjectsLocationsResponse,
  GetProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRequest,
  output: GetProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsSecuritySettingsRequest {
  name: string;
}

export const GetProjectsLocationsSecuritySettingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsSecuritySettingsRequest>;

export type GetProjectsLocationsSecuritySettingsResponse =
  GoogleCloudDialogflowCxV3SecuritySettings;
export const GetProjectsLocationsSecuritySettingsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3SecuritySettings;

export type GetProjectsLocationsSecuritySettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsSecuritySettings: API.OperationMethod<
  GetProjectsLocationsSecuritySettingsRequest,
  GetProjectsLocationsSecuritySettingsResponse,
  GetProjectsLocationsSecuritySettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSecuritySettingsRequest,
  output: GetProjectsLocationsSecuritySettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsSecuritySettingsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3SecuritySettings;
}

export const PatchProjectsLocationsSecuritySettingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowCxV3SecuritySettings).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsSecuritySettingsRequest>;

export type PatchProjectsLocationsSecuritySettingsResponse =
  GoogleCloudDialogflowCxV3SecuritySettings;
export const PatchProjectsLocationsSecuritySettingsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3SecuritySettings;

export type PatchProjectsLocationsSecuritySettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsSecuritySettings: API.OperationMethod<
  PatchProjectsLocationsSecuritySettingsRequest,
  PatchProjectsLocationsSecuritySettingsResponse,
  PatchProjectsLocationsSecuritySettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsSecuritySettingsRequest,
  output: PatchProjectsLocationsSecuritySettingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsSecuritySettingsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsSecuritySettingsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/securitySettings" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsSecuritySettingsRequest>;

export type ListProjectsLocationsSecuritySettingsResponse =
  GoogleCloudDialogflowCxV3ListSecuritySettingsResponse;
export const ListProjectsLocationsSecuritySettingsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3ListSecuritySettingsResponse;

export type ListProjectsLocationsSecuritySettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsSecuritySettings: API.PaginatedOperationMethod<
  ListProjectsLocationsSecuritySettingsRequest,
  ListProjectsLocationsSecuritySettingsResponse,
  ListProjectsLocationsSecuritySettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSecuritySettingsRequest,
  output: ListProjectsLocationsSecuritySettingsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsSecuritySettingsRequest {
  name: string;
}

export const DeleteProjectsLocationsSecuritySettingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsSecuritySettingsRequest>;

export type DeleteProjectsLocationsSecuritySettingsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsSecuritySettingsResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsSecuritySettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsSecuritySettings: API.OperationMethod<
  DeleteProjectsLocationsSecuritySettingsRequest,
  DeleteProjectsLocationsSecuritySettingsResponse,
  DeleteProjectsLocationsSecuritySettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSecuritySettingsRequest,
  output: DeleteProjectsLocationsSecuritySettingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsSecuritySettingsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3SecuritySettings;
}

export const CreateProjectsLocationsSecuritySettingsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3SecuritySettings).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+parent}/securitySettings",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsSecuritySettingsRequest>;

export type CreateProjectsLocationsSecuritySettingsResponse =
  GoogleCloudDialogflowCxV3SecuritySettings;
export const CreateProjectsLocationsSecuritySettingsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3SecuritySettings;

export type CreateProjectsLocationsSecuritySettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsSecuritySettings: API.OperationMethod<
  CreateProjectsLocationsSecuritySettingsRequest,
  CreateProjectsLocationsSecuritySettingsResponse,
  CreateProjectsLocationsSecuritySettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsSecuritySettingsRequest,
  output: CreateProjectsLocationsSecuritySettingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ValidateProjectsLocationsAgentsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3ValidateAgentRequest;
}

export const ValidateProjectsLocationsAgentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowCxV3ValidateAgentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+name}:validate", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<ValidateProjectsLocationsAgentsRequest>;

export type ValidateProjectsLocationsAgentsResponse =
  GoogleCloudDialogflowCxV3AgentValidationResult;
export const ValidateProjectsLocationsAgentsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3AgentValidationResult;

export type ValidateProjectsLocationsAgentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const validateProjectsLocationsAgents: API.OperationMethod<
  ValidateProjectsLocationsAgentsRequest,
  ValidateProjectsLocationsAgentsResponse,
  ValidateProjectsLocationsAgentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ValidateProjectsLocationsAgentsRequest,
  output: ValidateProjectsLocationsAgentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAgentsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3Agent;
}

export const CreateProjectsLocationsAgentsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3Agent).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+parent}/agents", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAgentsRequest>;

export type CreateProjectsLocationsAgentsResponse =
  GoogleCloudDialogflowCxV3Agent;
export const CreateProjectsLocationsAgentsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Agent;

export type CreateProjectsLocationsAgentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsAgents: API.OperationMethod<
  CreateProjectsLocationsAgentsRequest,
  CreateProjectsLocationsAgentsResponse,
  CreateProjectsLocationsAgentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsRequest,
  output: CreateProjectsLocationsAgentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetValidationResultProjectsLocationsAgentsRequest {
  languageCode?: string;
  name: string;
}

export const GetValidationResultProjectsLocationsAgentsRequest =
  /*@__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetValidationResultProjectsLocationsAgentsRequest>;

export type GetValidationResultProjectsLocationsAgentsResponse =
  GoogleCloudDialogflowCxV3AgentValidationResult;
export const GetValidationResultProjectsLocationsAgentsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3AgentValidationResult;

export type GetValidationResultProjectsLocationsAgentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getValidationResultProjectsLocationsAgents: API.OperationMethod<
  GetValidationResultProjectsLocationsAgentsRequest,
  GetValidationResultProjectsLocationsAgentsResponse,
  GetValidationResultProjectsLocationsAgentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetValidationResultProjectsLocationsAgentsRequest,
  output: GetValidationResultProjectsLocationsAgentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsAgentsRequest {
  name: string;
}

export const GetProjectsLocationsAgentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAgentsRequest>;

export type GetProjectsLocationsAgentsResponse = GoogleCloudDialogflowCxV3Agent;
export const GetProjectsLocationsAgentsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Agent;

export type GetProjectsLocationsAgentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgents: API.OperationMethod<
  GetProjectsLocationsAgentsRequest,
  GetProjectsLocationsAgentsResponse,
  GetProjectsLocationsAgentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsRequest,
  output: GetProjectsLocationsAgentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface RestoreProjectsLocationsAgentsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3RestoreAgentRequest;
}

export const RestoreProjectsLocationsAgentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowCxV3RestoreAgentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+name}:restore", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<RestoreProjectsLocationsAgentsRequest>;

export type RestoreProjectsLocationsAgentsResponse = GoogleLongrunningOperation;
export const RestoreProjectsLocationsAgentsResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type RestoreProjectsLocationsAgentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const restoreProjectsLocationsAgents: API.OperationMethod<
  RestoreProjectsLocationsAgentsRequest,
  RestoreProjectsLocationsAgentsResponse,
  RestoreProjectsLocationsAgentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RestoreProjectsLocationsAgentsRequest,
  output: RestoreProjectsLocationsAgentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsRequest {
  pageToken?: string;
  parent: string;
  pageSize?: number;
}

export const ListProjectsLocationsAgentsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/agents" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAgentsRequest>;

export type ListProjectsLocationsAgentsResponse =
  GoogleCloudDialogflowCxV3ListAgentsResponse;
export const ListProjectsLocationsAgentsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3ListAgentsResponse;

export type ListProjectsLocationsAgentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgents: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsRequest,
  ListProjectsLocationsAgentsResponse,
  ListProjectsLocationsAgentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsRequest,
  output: ListProjectsLocationsAgentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsAgentsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3Agent;
}

export const PatchProjectsLocationsAgentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowCxV3Agent).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsAgentsRequest>;

export type PatchProjectsLocationsAgentsResponse =
  GoogleCloudDialogflowCxV3Agent;
export const PatchProjectsLocationsAgentsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Agent;

export type PatchProjectsLocationsAgentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsAgents: API.OperationMethod<
  PatchProjectsLocationsAgentsRequest,
  PatchProjectsLocationsAgentsResponse,
  PatchProjectsLocationsAgentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsRequest,
  output: PatchProjectsLocationsAgentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAgentsRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAgentsRequest>;

export type DeleteProjectsLocationsAgentsResponse = GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsAgents: API.OperationMethod<
  DeleteProjectsLocationsAgentsRequest,
  DeleteProjectsLocationsAgentsResponse,
  DeleteProjectsLocationsAgentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsRequest,
  output: DeleteProjectsLocationsAgentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateGenerativeSettingsProjectsLocationsAgentsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3GenerativeSettings;
}

export const UpdateGenerativeSettingsProjectsLocationsAgentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowCxV3GenerativeSettings).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateGenerativeSettingsProjectsLocationsAgentsRequest>;

export type UpdateGenerativeSettingsProjectsLocationsAgentsResponse =
  GoogleCloudDialogflowCxV3GenerativeSettings;
export const UpdateGenerativeSettingsProjectsLocationsAgentsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3GenerativeSettings;

export type UpdateGenerativeSettingsProjectsLocationsAgentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const updateGenerativeSettingsProjectsLocationsAgents: API.OperationMethod<
  UpdateGenerativeSettingsProjectsLocationsAgentsRequest,
  UpdateGenerativeSettingsProjectsLocationsAgentsResponse,
  UpdateGenerativeSettingsProjectsLocationsAgentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateGenerativeSettingsProjectsLocationsAgentsRequest,
  output: UpdateGenerativeSettingsProjectsLocationsAgentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExportProjectsLocationsAgentsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3ExportAgentRequest;
}

export const ExportProjectsLocationsAgentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowCxV3ExportAgentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+name}:export", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<ExportProjectsLocationsAgentsRequest>;

export type ExportProjectsLocationsAgentsResponse = GoogleLongrunningOperation;
export const ExportProjectsLocationsAgentsResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type ExportProjectsLocationsAgentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const exportProjectsLocationsAgents: API.OperationMethod<
  ExportProjectsLocationsAgentsRequest,
  ExportProjectsLocationsAgentsResponse,
  ExportProjectsLocationsAgentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ExportProjectsLocationsAgentsRequest,
  output: ExportProjectsLocationsAgentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetGenerativeSettingsProjectsLocationsAgentsRequest {
  languageCode?: string;
  name: string;
}

export const GetGenerativeSettingsProjectsLocationsAgentsRequest =
  /*@__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetGenerativeSettingsProjectsLocationsAgentsRequest>;

export type GetGenerativeSettingsProjectsLocationsAgentsResponse =
  GoogleCloudDialogflowCxV3GenerativeSettings;
export const GetGenerativeSettingsProjectsLocationsAgentsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3GenerativeSettings;

export type GetGenerativeSettingsProjectsLocationsAgentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getGenerativeSettingsProjectsLocationsAgents: API.OperationMethod<
  GetGenerativeSettingsProjectsLocationsAgentsRequest,
  GetGenerativeSettingsProjectsLocationsAgentsResponse,
  GetGenerativeSettingsProjectsLocationsAgentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetGenerativeSettingsProjectsLocationsAgentsRequest,
  output: GetGenerativeSettingsProjectsLocationsAgentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ServerStreamingDetectIntentProjectsLocationsAgentsSessionsRequest {
  session: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3DetectIntentRequest;
}

export const ServerStreamingDetectIntentProjectsLocationsAgentsSessionsRequest =
  /*@__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.HttpPath("session")),
    body: Schema.optional(GoogleCloudDialogflowCxV3DetectIntentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+session}:serverStreamingDetectIntent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ServerStreamingDetectIntentProjectsLocationsAgentsSessionsRequest>;

export type ServerStreamingDetectIntentProjectsLocationsAgentsSessionsResponse =
  GoogleCloudDialogflowCxV3DetectIntentResponse;
export const ServerStreamingDetectIntentProjectsLocationsAgentsSessionsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3DetectIntentResponse;

export type ServerStreamingDetectIntentProjectsLocationsAgentsSessionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const serverStreamingDetectIntentProjectsLocationsAgentsSessions: API.OperationMethod<
  ServerStreamingDetectIntentProjectsLocationsAgentsSessionsRequest,
  ServerStreamingDetectIntentProjectsLocationsAgentsSessionsResponse,
  ServerStreamingDetectIntentProjectsLocationsAgentsSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ServerStreamingDetectIntentProjectsLocationsAgentsSessionsRequest,
  output: ServerStreamingDetectIntentProjectsLocationsAgentsSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DetectIntentProjectsLocationsAgentsSessionsRequest {
  session: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3DetectIntentRequest;
}

export const DetectIntentProjectsLocationsAgentsSessionsRequest =
  /*@__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.HttpPath("session")),
    body: Schema.optional(GoogleCloudDialogflowCxV3DetectIntentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+session}:detectIntent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<DetectIntentProjectsLocationsAgentsSessionsRequest>;

export type DetectIntentProjectsLocationsAgentsSessionsResponse =
  GoogleCloudDialogflowCxV3DetectIntentResponse;
export const DetectIntentProjectsLocationsAgentsSessionsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3DetectIntentResponse;

export type DetectIntentProjectsLocationsAgentsSessionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const detectIntentProjectsLocationsAgentsSessions: API.OperationMethod<
  DetectIntentProjectsLocationsAgentsSessionsRequest,
  DetectIntentProjectsLocationsAgentsSessionsResponse,
  DetectIntentProjectsLocationsAgentsSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DetectIntentProjectsLocationsAgentsSessionsRequest,
  output: DetectIntentProjectsLocationsAgentsSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FulfillIntentProjectsLocationsAgentsSessionsRequest {
  session: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3FulfillIntentRequest;
}

export const FulfillIntentProjectsLocationsAgentsSessionsRequest =
  /*@__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.HttpPath("session")),
    body: Schema.optional(GoogleCloudDialogflowCxV3FulfillIntentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+session}:fulfillIntent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<FulfillIntentProjectsLocationsAgentsSessionsRequest>;

export type FulfillIntentProjectsLocationsAgentsSessionsResponse =
  GoogleCloudDialogflowCxV3FulfillIntentResponse;
export const FulfillIntentProjectsLocationsAgentsSessionsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3FulfillIntentResponse;

export type FulfillIntentProjectsLocationsAgentsSessionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const fulfillIntentProjectsLocationsAgentsSessions: API.OperationMethod<
  FulfillIntentProjectsLocationsAgentsSessionsRequest,
  FulfillIntentProjectsLocationsAgentsSessionsResponse,
  FulfillIntentProjectsLocationsAgentsSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: FulfillIntentProjectsLocationsAgentsSessionsRequest,
  output: FulfillIntentProjectsLocationsAgentsSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SubmitAnswerFeedbackProjectsLocationsAgentsSessionsRequest {
  session: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3SubmitAnswerFeedbackRequest;
}

export const SubmitAnswerFeedbackProjectsLocationsAgentsSessionsRequest =
  /*@__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.HttpPath("session")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3SubmitAnswerFeedbackRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+session}:submitAnswerFeedback",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SubmitAnswerFeedbackProjectsLocationsAgentsSessionsRequest>;

export type SubmitAnswerFeedbackProjectsLocationsAgentsSessionsResponse =
  GoogleCloudDialogflowCxV3AnswerFeedback;
export const SubmitAnswerFeedbackProjectsLocationsAgentsSessionsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3AnswerFeedback;

export type SubmitAnswerFeedbackProjectsLocationsAgentsSessionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const submitAnswerFeedbackProjectsLocationsAgentsSessions: API.OperationMethod<
  SubmitAnswerFeedbackProjectsLocationsAgentsSessionsRequest,
  SubmitAnswerFeedbackProjectsLocationsAgentsSessionsResponse,
  SubmitAnswerFeedbackProjectsLocationsAgentsSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SubmitAnswerFeedbackProjectsLocationsAgentsSessionsRequest,
  output: SubmitAnswerFeedbackProjectsLocationsAgentsSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MatchIntentProjectsLocationsAgentsSessionsRequest {
  session: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3MatchIntentRequest;
}

export const MatchIntentProjectsLocationsAgentsSessionsRequest =
  /*@__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.HttpPath("session")),
    body: Schema.optional(GoogleCloudDialogflowCxV3MatchIntentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+session}:matchIntent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<MatchIntentProjectsLocationsAgentsSessionsRequest>;

export type MatchIntentProjectsLocationsAgentsSessionsResponse =
  GoogleCloudDialogflowCxV3MatchIntentResponse;
export const MatchIntentProjectsLocationsAgentsSessionsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3MatchIntentResponse;

export type MatchIntentProjectsLocationsAgentsSessionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const matchIntentProjectsLocationsAgentsSessions: API.OperationMethod<
  MatchIntentProjectsLocationsAgentsSessionsRequest,
  MatchIntentProjectsLocationsAgentsSessionsResponse,
  MatchIntentProjectsLocationsAgentsSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: MatchIntentProjectsLocationsAgentsSessionsRequest,
  output: MatchIntentProjectsLocationsAgentsSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsSessionsEntityTypesRequest {
  name: string;
}

export const GetProjectsLocationsAgentsSessionsEntityTypesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAgentsSessionsEntityTypesRequest>;

export type GetProjectsLocationsAgentsSessionsEntityTypesResponse =
  GoogleCloudDialogflowCxV3SessionEntityType;
export const GetProjectsLocationsAgentsSessionsEntityTypesResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3SessionEntityType;

export type GetProjectsLocationsAgentsSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsSessionsEntityTypes: API.OperationMethod<
  GetProjectsLocationsAgentsSessionsEntityTypesRequest,
  GetProjectsLocationsAgentsSessionsEntityTypesResponse,
  GetProjectsLocationsAgentsSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsSessionsEntityTypesRequest,
  output: GetProjectsLocationsAgentsSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsAgentsSessionsEntityTypesRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsAgentsSessionsEntityTypesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/entityTypes" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAgentsSessionsEntityTypesRequest>;

export type ListProjectsLocationsAgentsSessionsEntityTypesResponse =
  GoogleCloudDialogflowCxV3ListSessionEntityTypesResponse;
export const ListProjectsLocationsAgentsSessionsEntityTypesResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3ListSessionEntityTypesResponse;

export type ListProjectsLocationsAgentsSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsSessionsEntityTypes: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsSessionsEntityTypesRequest,
  ListProjectsLocationsAgentsSessionsEntityTypesResponse,
  ListProjectsLocationsAgentsSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsSessionsEntityTypesRequest,
  output: ListProjectsLocationsAgentsSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsAgentsSessionsEntityTypesRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3SessionEntityType;
}

export const PatchProjectsLocationsAgentsSessionsEntityTypesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowCxV3SessionEntityType).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsAgentsSessionsEntityTypesRequest>;

export type PatchProjectsLocationsAgentsSessionsEntityTypesResponse =
  GoogleCloudDialogflowCxV3SessionEntityType;
export const PatchProjectsLocationsAgentsSessionsEntityTypesResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3SessionEntityType;

export type PatchProjectsLocationsAgentsSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsAgentsSessionsEntityTypes: API.OperationMethod<
  PatchProjectsLocationsAgentsSessionsEntityTypesRequest,
  PatchProjectsLocationsAgentsSessionsEntityTypesResponse,
  PatchProjectsLocationsAgentsSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsSessionsEntityTypesRequest,
  output: PatchProjectsLocationsAgentsSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAgentsSessionsEntityTypesRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentsSessionsEntityTypesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAgentsSessionsEntityTypesRequest>;

export type DeleteProjectsLocationsAgentsSessionsEntityTypesResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsSessionsEntityTypesResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentsSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsAgentsSessionsEntityTypes: API.OperationMethod<
  DeleteProjectsLocationsAgentsSessionsEntityTypesRequest,
  DeleteProjectsLocationsAgentsSessionsEntityTypesResponse,
  DeleteProjectsLocationsAgentsSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsSessionsEntityTypesRequest,
  output: DeleteProjectsLocationsAgentsSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAgentsSessionsEntityTypesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3SessionEntityType;
}

export const CreateProjectsLocationsAgentsSessionsEntityTypesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3SessionEntityType).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+parent}/entityTypes", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAgentsSessionsEntityTypesRequest>;

export type CreateProjectsLocationsAgentsSessionsEntityTypesResponse =
  GoogleCloudDialogflowCxV3SessionEntityType;
export const CreateProjectsLocationsAgentsSessionsEntityTypesResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3SessionEntityType;

export type CreateProjectsLocationsAgentsSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsAgentsSessionsEntityTypes: API.OperationMethod<
  CreateProjectsLocationsAgentsSessionsEntityTypesRequest,
  CreateProjectsLocationsAgentsSessionsEntityTypesResponse,
  CreateProjectsLocationsAgentsSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsSessionsEntityTypesRequest,
  output: CreateProjectsLocationsAgentsSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsToolsRequest {
  pageToken?: string;
  parent: string;
  pageSize?: number;
}

export const ListProjectsLocationsAgentsToolsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/tools" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAgentsToolsRequest>;

export type ListProjectsLocationsAgentsToolsResponse =
  GoogleCloudDialogflowCxV3ListToolsResponse;
export const ListProjectsLocationsAgentsToolsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3ListToolsResponse;

export type ListProjectsLocationsAgentsToolsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsTools: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsToolsRequest,
  ListProjectsLocationsAgentsToolsResponse,
  ListProjectsLocationsAgentsToolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsToolsRequest,
  output: ListProjectsLocationsAgentsToolsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsAgentsToolsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3Tool;
}

export const PatchProjectsLocationsAgentsToolsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowCxV3Tool).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsAgentsToolsRequest>;

export type PatchProjectsLocationsAgentsToolsResponse =
  GoogleCloudDialogflowCxV3Tool;
export const PatchProjectsLocationsAgentsToolsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Tool;

export type PatchProjectsLocationsAgentsToolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsAgentsTools: API.OperationMethod<
  PatchProjectsLocationsAgentsToolsRequest,
  PatchProjectsLocationsAgentsToolsResponse,
  PatchProjectsLocationsAgentsToolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsToolsRequest,
  output: PatchProjectsLocationsAgentsToolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAgentsToolsRequest {
  force?: boolean;
  name: string;
}

export const DeleteProjectsLocationsAgentsToolsRequest =
  /*@__PURE__*/ Schema.Struct({
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAgentsToolsRequest>;

export type DeleteProjectsLocationsAgentsToolsResponse = GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsToolsResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentsToolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsAgentsTools: API.OperationMethod<
  DeleteProjectsLocationsAgentsToolsRequest,
  DeleteProjectsLocationsAgentsToolsResponse,
  DeleteProjectsLocationsAgentsToolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsToolsRequest,
  output: DeleteProjectsLocationsAgentsToolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAgentsToolsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3Tool;
}

export const CreateProjectsLocationsAgentsToolsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3Tool).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+parent}/tools", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAgentsToolsRequest>;

export type CreateProjectsLocationsAgentsToolsResponse =
  GoogleCloudDialogflowCxV3Tool;
export const CreateProjectsLocationsAgentsToolsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Tool;

export type CreateProjectsLocationsAgentsToolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsAgentsTools: API.OperationMethod<
  CreateProjectsLocationsAgentsToolsRequest,
  CreateProjectsLocationsAgentsToolsResponse,
  CreateProjectsLocationsAgentsToolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsToolsRequest,
  output: CreateProjectsLocationsAgentsToolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsToolsRequest {
  name: string;
}

export const GetProjectsLocationsAgentsToolsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAgentsToolsRequest>;

export type GetProjectsLocationsAgentsToolsResponse =
  GoogleCloudDialogflowCxV3Tool;
export const GetProjectsLocationsAgentsToolsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Tool;

export type GetProjectsLocationsAgentsToolsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsTools: API.OperationMethod<
  GetProjectsLocationsAgentsToolsRequest,
  GetProjectsLocationsAgentsToolsResponse,
  GetProjectsLocationsAgentsToolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsToolsRequest,
  output: GetProjectsLocationsAgentsToolsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsAgentsToolsVersionsRequest {
  name: string;
}

export const GetProjectsLocationsAgentsToolsVersionsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAgentsToolsVersionsRequest>;

export type GetProjectsLocationsAgentsToolsVersionsResponse =
  GoogleCloudDialogflowCxV3ToolVersion;
export const GetProjectsLocationsAgentsToolsVersionsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3ToolVersion;

export type GetProjectsLocationsAgentsToolsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsToolsVersions: API.OperationMethod<
  GetProjectsLocationsAgentsToolsVersionsRequest,
  GetProjectsLocationsAgentsToolsVersionsResponse,
  GetProjectsLocationsAgentsToolsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsToolsVersionsRequest,
  output: GetProjectsLocationsAgentsToolsVersionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface RestoreProjectsLocationsAgentsToolsVersionsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3RestoreToolVersionRequest;
}

export const RestoreProjectsLocationsAgentsToolsVersionsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3RestoreToolVersionRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+name}:restore", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<RestoreProjectsLocationsAgentsToolsVersionsRequest>;

export type RestoreProjectsLocationsAgentsToolsVersionsResponse =
  GoogleCloudDialogflowCxV3RestoreToolVersionResponse;
export const RestoreProjectsLocationsAgentsToolsVersionsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3RestoreToolVersionResponse;

export type RestoreProjectsLocationsAgentsToolsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const restoreProjectsLocationsAgentsToolsVersions: API.OperationMethod<
  RestoreProjectsLocationsAgentsToolsVersionsRequest,
  RestoreProjectsLocationsAgentsToolsVersionsResponse,
  RestoreProjectsLocationsAgentsToolsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RestoreProjectsLocationsAgentsToolsVersionsRequest,
  output: RestoreProjectsLocationsAgentsToolsVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAgentsToolsVersionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3ToolVersion;
}

export const CreateProjectsLocationsAgentsToolsVersionsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3ToolVersion).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+parent}/versions", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAgentsToolsVersionsRequest>;

export type CreateProjectsLocationsAgentsToolsVersionsResponse =
  GoogleCloudDialogflowCxV3ToolVersion;
export const CreateProjectsLocationsAgentsToolsVersionsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3ToolVersion;

export type CreateProjectsLocationsAgentsToolsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsAgentsToolsVersions: API.OperationMethod<
  CreateProjectsLocationsAgentsToolsVersionsRequest,
  CreateProjectsLocationsAgentsToolsVersionsResponse,
  CreateProjectsLocationsAgentsToolsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsToolsVersionsRequest,
  output: CreateProjectsLocationsAgentsToolsVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsToolsVersionsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsAgentsToolsVersionsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/versions" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAgentsToolsVersionsRequest>;

export type ListProjectsLocationsAgentsToolsVersionsResponse =
  GoogleCloudDialogflowCxV3ListToolVersionsResponse;
export const ListProjectsLocationsAgentsToolsVersionsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3ListToolVersionsResponse;

export type ListProjectsLocationsAgentsToolsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsToolsVersions: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsToolsVersionsRequest,
  ListProjectsLocationsAgentsToolsVersionsResponse,
  ListProjectsLocationsAgentsToolsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsToolsVersionsRequest,
  output: ListProjectsLocationsAgentsToolsVersionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsAgentsToolsVersionsRequest {
  force?: boolean;
  name: string;
}

export const DeleteProjectsLocationsAgentsToolsVersionsRequest =
  /*@__PURE__*/ Schema.Struct({
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAgentsToolsVersionsRequest>;

export type DeleteProjectsLocationsAgentsToolsVersionsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsToolsVersionsResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentsToolsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsAgentsToolsVersions: API.OperationMethod<
  DeleteProjectsLocationsAgentsToolsVersionsRequest,
  DeleteProjectsLocationsAgentsToolsVersionsResponse,
  DeleteProjectsLocationsAgentsToolsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsToolsVersionsRequest,
  output: DeleteProjectsLocationsAgentsToolsVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsGeneratorsRequest {
  name: string;
  languageCode?: string;
}

export const GetProjectsLocationsAgentsGeneratorsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAgentsGeneratorsRequest>;

export type GetProjectsLocationsAgentsGeneratorsResponse =
  GoogleCloudDialogflowCxV3Generator;
export const GetProjectsLocationsAgentsGeneratorsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Generator;

export type GetProjectsLocationsAgentsGeneratorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsGenerators: API.OperationMethod<
  GetProjectsLocationsAgentsGeneratorsRequest,
  GetProjectsLocationsAgentsGeneratorsResponse,
  GetProjectsLocationsAgentsGeneratorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsGeneratorsRequest,
  output: GetProjectsLocationsAgentsGeneratorsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsAgentsGeneratorsRequest {
  languageCode?: string;
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3Generator;
}

export const CreateProjectsLocationsAgentsGeneratorsRequest =
  /*@__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3Generator).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+parent}/generators", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAgentsGeneratorsRequest>;

export type CreateProjectsLocationsAgentsGeneratorsResponse =
  GoogleCloudDialogflowCxV3Generator;
export const CreateProjectsLocationsAgentsGeneratorsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Generator;

export type CreateProjectsLocationsAgentsGeneratorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsAgentsGenerators: API.OperationMethod<
  CreateProjectsLocationsAgentsGeneratorsRequest,
  CreateProjectsLocationsAgentsGeneratorsResponse,
  CreateProjectsLocationsAgentsGeneratorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsGeneratorsRequest,
  output: CreateProjectsLocationsAgentsGeneratorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsGeneratorsRequest {
  parent: string;
  pageSize?: number;
  languageCode?: string;
  pageToken?: string;
}

export const ListProjectsLocationsAgentsGeneratorsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/generators" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAgentsGeneratorsRequest>;

export type ListProjectsLocationsAgentsGeneratorsResponse =
  GoogleCloudDialogflowCxV3ListGeneratorsResponse;
export const ListProjectsLocationsAgentsGeneratorsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3ListGeneratorsResponse;

export type ListProjectsLocationsAgentsGeneratorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsGenerators: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsGeneratorsRequest,
  ListProjectsLocationsAgentsGeneratorsResponse,
  ListProjectsLocationsAgentsGeneratorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsGeneratorsRequest,
  output: ListProjectsLocationsAgentsGeneratorsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsAgentsGeneratorsRequest {
  languageCode?: string;
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3Generator;
}

export const PatchProjectsLocationsAgentsGeneratorsRequest =
  /*@__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowCxV3Generator).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsAgentsGeneratorsRequest>;

export type PatchProjectsLocationsAgentsGeneratorsResponse =
  GoogleCloudDialogflowCxV3Generator;
export const PatchProjectsLocationsAgentsGeneratorsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Generator;

export type PatchProjectsLocationsAgentsGeneratorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsAgentsGenerators: API.OperationMethod<
  PatchProjectsLocationsAgentsGeneratorsRequest,
  PatchProjectsLocationsAgentsGeneratorsResponse,
  PatchProjectsLocationsAgentsGeneratorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsGeneratorsRequest,
  output: PatchProjectsLocationsAgentsGeneratorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAgentsGeneratorsRequest {
  force?: boolean;
  name: string;
}

export const DeleteProjectsLocationsAgentsGeneratorsRequest =
  /*@__PURE__*/ Schema.Struct({
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAgentsGeneratorsRequest>;

export type DeleteProjectsLocationsAgentsGeneratorsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsGeneratorsResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentsGeneratorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsAgentsGenerators: API.OperationMethod<
  DeleteProjectsLocationsAgentsGeneratorsRequest,
  DeleteProjectsLocationsAgentsGeneratorsResponse,
  DeleteProjectsLocationsAgentsGeneratorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsGeneratorsRequest,
  output: DeleteProjectsLocationsAgentsGeneratorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAgentsTransitionRouteGroupsRequest {
  parent: string;
  languageCode?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3TransitionRouteGroup;
}

export const CreateProjectsLocationsAgentsTransitionRouteGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    body: Schema.optional(GoogleCloudDialogflowCxV3TransitionRouteGroup).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+parent}/transitionRouteGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAgentsTransitionRouteGroupsRequest>;

export type CreateProjectsLocationsAgentsTransitionRouteGroupsResponse =
  GoogleCloudDialogflowCxV3TransitionRouteGroup;
export const CreateProjectsLocationsAgentsTransitionRouteGroupsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3TransitionRouteGroup;

export type CreateProjectsLocationsAgentsTransitionRouteGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsAgentsTransitionRouteGroups: API.OperationMethod<
  CreateProjectsLocationsAgentsTransitionRouteGroupsRequest,
  CreateProjectsLocationsAgentsTransitionRouteGroupsResponse,
  CreateProjectsLocationsAgentsTransitionRouteGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsTransitionRouteGroupsRequest,
  output: CreateProjectsLocationsAgentsTransitionRouteGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsTransitionRouteGroupsRequest {
  pageToken?: string;
  languageCode?: string;
  parent: string;
  pageSize?: number;
}

export const ListProjectsLocationsAgentsTransitionRouteGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/transitionRouteGroups" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAgentsTransitionRouteGroupsRequest>;

export type ListProjectsLocationsAgentsTransitionRouteGroupsResponse =
  GoogleCloudDialogflowCxV3ListTransitionRouteGroupsResponse;
export const ListProjectsLocationsAgentsTransitionRouteGroupsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3ListTransitionRouteGroupsResponse;

export type ListProjectsLocationsAgentsTransitionRouteGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsTransitionRouteGroups: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsTransitionRouteGroupsRequest,
  ListProjectsLocationsAgentsTransitionRouteGroupsResponse,
  ListProjectsLocationsAgentsTransitionRouteGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsTransitionRouteGroupsRequest,
  output: ListProjectsLocationsAgentsTransitionRouteGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsAgentsTransitionRouteGroupsRequest {
  name: string;
  updateMask?: string;
  languageCode?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3TransitionRouteGroup;
}

export const PatchProjectsLocationsAgentsTransitionRouteGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    body: Schema.optional(GoogleCloudDialogflowCxV3TransitionRouteGroup).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsAgentsTransitionRouteGroupsRequest>;

export type PatchProjectsLocationsAgentsTransitionRouteGroupsResponse =
  GoogleCloudDialogflowCxV3TransitionRouteGroup;
export const PatchProjectsLocationsAgentsTransitionRouteGroupsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3TransitionRouteGroup;

export type PatchProjectsLocationsAgentsTransitionRouteGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsAgentsTransitionRouteGroups: API.OperationMethod<
  PatchProjectsLocationsAgentsTransitionRouteGroupsRequest,
  PatchProjectsLocationsAgentsTransitionRouteGroupsResponse,
  PatchProjectsLocationsAgentsTransitionRouteGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsTransitionRouteGroupsRequest,
  output: PatchProjectsLocationsAgentsTransitionRouteGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAgentsTransitionRouteGroupsRequest {
  name: string;
  force?: boolean;
}

export const DeleteProjectsLocationsAgentsTransitionRouteGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAgentsTransitionRouteGroupsRequest>;

export type DeleteProjectsLocationsAgentsTransitionRouteGroupsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsTransitionRouteGroupsResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentsTransitionRouteGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsAgentsTransitionRouteGroups: API.OperationMethod<
  DeleteProjectsLocationsAgentsTransitionRouteGroupsRequest,
  DeleteProjectsLocationsAgentsTransitionRouteGroupsResponse,
  DeleteProjectsLocationsAgentsTransitionRouteGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsTransitionRouteGroupsRequest,
  output: DeleteProjectsLocationsAgentsTransitionRouteGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsTransitionRouteGroupsRequest {
  name: string;
  languageCode?: string;
}

export const GetProjectsLocationsAgentsTransitionRouteGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAgentsTransitionRouteGroupsRequest>;

export type GetProjectsLocationsAgentsTransitionRouteGroupsResponse =
  GoogleCloudDialogflowCxV3TransitionRouteGroup;
export const GetProjectsLocationsAgentsTransitionRouteGroupsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3TransitionRouteGroup;

export type GetProjectsLocationsAgentsTransitionRouteGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsTransitionRouteGroups: API.OperationMethod<
  GetProjectsLocationsAgentsTransitionRouteGroupsRequest,
  GetProjectsLocationsAgentsTransitionRouteGroupsResponse,
  GetProjectsLocationsAgentsTransitionRouteGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsTransitionRouteGroupsRequest,
  output: GetProjectsLocationsAgentsTransitionRouteGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsAgentsEnvironmentsRequest {
  name: string;
}

export const GetProjectsLocationsAgentsEnvironmentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAgentsEnvironmentsRequest>;

export type GetProjectsLocationsAgentsEnvironmentsResponse =
  GoogleCloudDialogflowCxV3Environment;
export const GetProjectsLocationsAgentsEnvironmentsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Environment;

export type GetProjectsLocationsAgentsEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsEnvironments: API.OperationMethod<
  GetProjectsLocationsAgentsEnvironmentsRequest,
  GetProjectsLocationsAgentsEnvironmentsResponse,
  GetProjectsLocationsAgentsEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsEnvironmentsRequest,
  output: GetProjectsLocationsAgentsEnvironmentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface LookupEnvironmentHistoryProjectsLocationsAgentsEnvironmentsRequest {
  pageToken?: string;
  name: string;
  pageSize?: number;
}

export const LookupEnvironmentHistoryProjectsLocationsAgentsEnvironmentsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}:lookupEnvironmentHistory" }),
    svc,
  ) as unknown as Schema.Codec<LookupEnvironmentHistoryProjectsLocationsAgentsEnvironmentsRequest>;

export type LookupEnvironmentHistoryProjectsLocationsAgentsEnvironmentsResponse =
  GoogleCloudDialogflowCxV3LookupEnvironmentHistoryResponse;
export const LookupEnvironmentHistoryProjectsLocationsAgentsEnvironmentsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3LookupEnvironmentHistoryResponse;

export type LookupEnvironmentHistoryProjectsLocationsAgentsEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const lookupEnvironmentHistoryProjectsLocationsAgentsEnvironments: API.PaginatedOperationMethod<
  LookupEnvironmentHistoryProjectsLocationsAgentsEnvironmentsRequest,
  LookupEnvironmentHistoryProjectsLocationsAgentsEnvironmentsResponse,
  LookupEnvironmentHistoryProjectsLocationsAgentsEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: LookupEnvironmentHistoryProjectsLocationsAgentsEnvironmentsRequest,
  output: LookupEnvironmentHistoryProjectsLocationsAgentsEnvironmentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface RunContinuousTestProjectsLocationsAgentsEnvironmentsRequest {
  environment: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3RunContinuousTestRequest;
}

export const RunContinuousTestProjectsLocationsAgentsEnvironmentsRequest =
  /*@__PURE__*/ Schema.Struct({
    environment: Schema.String.pipe(T.HttpPath("environment")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3RunContinuousTestRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+environment}:runContinuousTest",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<RunContinuousTestProjectsLocationsAgentsEnvironmentsRequest>;

export type RunContinuousTestProjectsLocationsAgentsEnvironmentsResponse =
  GoogleLongrunningOperation;
export const RunContinuousTestProjectsLocationsAgentsEnvironmentsResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type RunContinuousTestProjectsLocationsAgentsEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const runContinuousTestProjectsLocationsAgentsEnvironments: API.OperationMethod<
  RunContinuousTestProjectsLocationsAgentsEnvironmentsRequest,
  RunContinuousTestProjectsLocationsAgentsEnvironmentsResponse,
  RunContinuousTestProjectsLocationsAgentsEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RunContinuousTestProjectsLocationsAgentsEnvironmentsRequest,
  output: RunContinuousTestProjectsLocationsAgentsEnvironmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAgentsEnvironmentsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3Environment;
}

export const CreateProjectsLocationsAgentsEnvironmentsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3Environment).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+parent}/environments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAgentsEnvironmentsRequest>;

export type CreateProjectsLocationsAgentsEnvironmentsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsAgentsEnvironmentsResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsAgentsEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsAgentsEnvironments: API.OperationMethod<
  CreateProjectsLocationsAgentsEnvironmentsRequest,
  CreateProjectsLocationsAgentsEnvironmentsResponse,
  CreateProjectsLocationsAgentsEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsEnvironmentsRequest,
  output: CreateProjectsLocationsAgentsEnvironmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeployFlowProjectsLocationsAgentsEnvironmentsRequest {
  environment: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3DeployFlowRequest;
}

export const DeployFlowProjectsLocationsAgentsEnvironmentsRequest =
  /*@__PURE__*/ Schema.Struct({
    environment: Schema.String.pipe(T.HttpPath("environment")),
    body: Schema.optional(GoogleCloudDialogflowCxV3DeployFlowRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+environment}:deployFlow",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<DeployFlowProjectsLocationsAgentsEnvironmentsRequest>;

export type DeployFlowProjectsLocationsAgentsEnvironmentsResponse =
  GoogleLongrunningOperation;
export const DeployFlowProjectsLocationsAgentsEnvironmentsResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type DeployFlowProjectsLocationsAgentsEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deployFlowProjectsLocationsAgentsEnvironments: API.OperationMethod<
  DeployFlowProjectsLocationsAgentsEnvironmentsRequest,
  DeployFlowProjectsLocationsAgentsEnvironmentsResponse,
  DeployFlowProjectsLocationsAgentsEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeployFlowProjectsLocationsAgentsEnvironmentsRequest,
  output: DeployFlowProjectsLocationsAgentsEnvironmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsEnvironmentsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsAgentsEnvironmentsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/environments" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAgentsEnvironmentsRequest>;

export type ListProjectsLocationsAgentsEnvironmentsResponse =
  GoogleCloudDialogflowCxV3ListEnvironmentsResponse;
export const ListProjectsLocationsAgentsEnvironmentsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3ListEnvironmentsResponse;

export type ListProjectsLocationsAgentsEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsEnvironments: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsEnvironmentsRequest,
  ListProjectsLocationsAgentsEnvironmentsResponse,
  ListProjectsLocationsAgentsEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsEnvironmentsRequest,
  output: ListProjectsLocationsAgentsEnvironmentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsAgentsEnvironmentsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3Environment;
}

export const PatchProjectsLocationsAgentsEnvironmentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowCxV3Environment).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsAgentsEnvironmentsRequest>;

export type PatchProjectsLocationsAgentsEnvironmentsResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsAgentsEnvironmentsResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsAgentsEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsAgentsEnvironments: API.OperationMethod<
  PatchProjectsLocationsAgentsEnvironmentsRequest,
  PatchProjectsLocationsAgentsEnvironmentsResponse,
  PatchProjectsLocationsAgentsEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsEnvironmentsRequest,
  output: PatchProjectsLocationsAgentsEnvironmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAgentsEnvironmentsRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentsEnvironmentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAgentsEnvironmentsRequest>;

export type DeleteProjectsLocationsAgentsEnvironmentsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsEnvironmentsResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentsEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsAgentsEnvironments: API.OperationMethod<
  DeleteProjectsLocationsAgentsEnvironmentsRequest,
  DeleteProjectsLocationsAgentsEnvironmentsResponse,
  DeleteProjectsLocationsAgentsEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsEnvironmentsRequest,
  output: DeleteProjectsLocationsAgentsEnvironmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsEnvironmentsDeploymentsRequest {
  name: string;
}

export const GetProjectsLocationsAgentsEnvironmentsDeploymentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAgentsEnvironmentsDeploymentsRequest>;

export type GetProjectsLocationsAgentsEnvironmentsDeploymentsResponse =
  GoogleCloudDialogflowCxV3Deployment;
export const GetProjectsLocationsAgentsEnvironmentsDeploymentsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Deployment;

export type GetProjectsLocationsAgentsEnvironmentsDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsEnvironmentsDeployments: API.OperationMethod<
  GetProjectsLocationsAgentsEnvironmentsDeploymentsRequest,
  GetProjectsLocationsAgentsEnvironmentsDeploymentsResponse,
  GetProjectsLocationsAgentsEnvironmentsDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsEnvironmentsDeploymentsRequest,
  output: GetProjectsLocationsAgentsEnvironmentsDeploymentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsAgentsEnvironmentsDeploymentsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsAgentsEnvironmentsDeploymentsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/deployments" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAgentsEnvironmentsDeploymentsRequest>;

export type ListProjectsLocationsAgentsEnvironmentsDeploymentsResponse =
  GoogleCloudDialogflowCxV3ListDeploymentsResponse;
export const ListProjectsLocationsAgentsEnvironmentsDeploymentsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3ListDeploymentsResponse;

export type ListProjectsLocationsAgentsEnvironmentsDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsEnvironmentsDeployments: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsEnvironmentsDeploymentsRequest,
  ListProjectsLocationsAgentsEnvironmentsDeploymentsResponse,
  ListProjectsLocationsAgentsEnvironmentsDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsEnvironmentsDeploymentsRequest,
  output: ListProjectsLocationsAgentsEnvironmentsDeploymentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsAgentsEnvironmentsContinuousTestResultsRequest {
  pageToken?: string;
  parent: string;
  pageSize?: number;
}

export const ListProjectsLocationsAgentsEnvironmentsContinuousTestResultsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/continuousTestResults" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAgentsEnvironmentsContinuousTestResultsRequest>;

export type ListProjectsLocationsAgentsEnvironmentsContinuousTestResultsResponse =
  GoogleCloudDialogflowCxV3ListContinuousTestResultsResponse;
export const ListProjectsLocationsAgentsEnvironmentsContinuousTestResultsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3ListContinuousTestResultsResponse;

export type ListProjectsLocationsAgentsEnvironmentsContinuousTestResultsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsEnvironmentsContinuousTestResults: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsEnvironmentsContinuousTestResultsRequest,
  ListProjectsLocationsAgentsEnvironmentsContinuousTestResultsResponse,
  ListProjectsLocationsAgentsEnvironmentsContinuousTestResultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsEnvironmentsContinuousTestResultsRequest,
  output: ListProjectsLocationsAgentsEnvironmentsContinuousTestResultsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DetectIntentProjectsLocationsAgentsEnvironmentsSessionsRequest {
  session: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3DetectIntentRequest;
}

export const DetectIntentProjectsLocationsAgentsEnvironmentsSessionsRequest =
  /*@__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.HttpPath("session")),
    body: Schema.optional(GoogleCloudDialogflowCxV3DetectIntentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+session}:detectIntent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<DetectIntentProjectsLocationsAgentsEnvironmentsSessionsRequest>;

export type DetectIntentProjectsLocationsAgentsEnvironmentsSessionsResponse =
  GoogleCloudDialogflowCxV3DetectIntentResponse;
export const DetectIntentProjectsLocationsAgentsEnvironmentsSessionsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3DetectIntentResponse;

export type DetectIntentProjectsLocationsAgentsEnvironmentsSessionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const detectIntentProjectsLocationsAgentsEnvironmentsSessions: API.OperationMethod<
  DetectIntentProjectsLocationsAgentsEnvironmentsSessionsRequest,
  DetectIntentProjectsLocationsAgentsEnvironmentsSessionsResponse,
  DetectIntentProjectsLocationsAgentsEnvironmentsSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DetectIntentProjectsLocationsAgentsEnvironmentsSessionsRequest,
  output: DetectIntentProjectsLocationsAgentsEnvironmentsSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ServerStreamingDetectIntentProjectsLocationsAgentsEnvironmentsSessionsRequest {
  session: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3DetectIntentRequest;
}

export const ServerStreamingDetectIntentProjectsLocationsAgentsEnvironmentsSessionsRequest =
  /*@__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.HttpPath("session")),
    body: Schema.optional(GoogleCloudDialogflowCxV3DetectIntentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+session}:serverStreamingDetectIntent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ServerStreamingDetectIntentProjectsLocationsAgentsEnvironmentsSessionsRequest>;

export type ServerStreamingDetectIntentProjectsLocationsAgentsEnvironmentsSessionsResponse =
  GoogleCloudDialogflowCxV3DetectIntentResponse;
export const ServerStreamingDetectIntentProjectsLocationsAgentsEnvironmentsSessionsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3DetectIntentResponse;

export type ServerStreamingDetectIntentProjectsLocationsAgentsEnvironmentsSessionsError =
  DefaultErrors | NotFound | Forbidden | BadRequest | Conflict;

export const serverStreamingDetectIntentProjectsLocationsAgentsEnvironmentsSessions: API.OperationMethod<
  ServerStreamingDetectIntentProjectsLocationsAgentsEnvironmentsSessionsRequest,
  ServerStreamingDetectIntentProjectsLocationsAgentsEnvironmentsSessionsResponse,
  ServerStreamingDetectIntentProjectsLocationsAgentsEnvironmentsSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input:
    ServerStreamingDetectIntentProjectsLocationsAgentsEnvironmentsSessionsRequest,
  output:
    ServerStreamingDetectIntentProjectsLocationsAgentsEnvironmentsSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FulfillIntentProjectsLocationsAgentsEnvironmentsSessionsRequest {
  session: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3FulfillIntentRequest;
}

export const FulfillIntentProjectsLocationsAgentsEnvironmentsSessionsRequest =
  /*@__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.HttpPath("session")),
    body: Schema.optional(GoogleCloudDialogflowCxV3FulfillIntentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+session}:fulfillIntent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<FulfillIntentProjectsLocationsAgentsEnvironmentsSessionsRequest>;

export type FulfillIntentProjectsLocationsAgentsEnvironmentsSessionsResponse =
  GoogleCloudDialogflowCxV3FulfillIntentResponse;
export const FulfillIntentProjectsLocationsAgentsEnvironmentsSessionsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3FulfillIntentResponse;

export type FulfillIntentProjectsLocationsAgentsEnvironmentsSessionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const fulfillIntentProjectsLocationsAgentsEnvironmentsSessions: API.OperationMethod<
  FulfillIntentProjectsLocationsAgentsEnvironmentsSessionsRequest,
  FulfillIntentProjectsLocationsAgentsEnvironmentsSessionsResponse,
  FulfillIntentProjectsLocationsAgentsEnvironmentsSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: FulfillIntentProjectsLocationsAgentsEnvironmentsSessionsRequest,
  output: FulfillIntentProjectsLocationsAgentsEnvironmentsSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MatchIntentProjectsLocationsAgentsEnvironmentsSessionsRequest {
  session: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3MatchIntentRequest;
}

export const MatchIntentProjectsLocationsAgentsEnvironmentsSessionsRequest =
  /*@__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.HttpPath("session")),
    body: Schema.optional(GoogleCloudDialogflowCxV3MatchIntentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+session}:matchIntent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<MatchIntentProjectsLocationsAgentsEnvironmentsSessionsRequest>;

export type MatchIntentProjectsLocationsAgentsEnvironmentsSessionsResponse =
  GoogleCloudDialogflowCxV3MatchIntentResponse;
export const MatchIntentProjectsLocationsAgentsEnvironmentsSessionsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3MatchIntentResponse;

export type MatchIntentProjectsLocationsAgentsEnvironmentsSessionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const matchIntentProjectsLocationsAgentsEnvironmentsSessions: API.OperationMethod<
  MatchIntentProjectsLocationsAgentsEnvironmentsSessionsRequest,
  MatchIntentProjectsLocationsAgentsEnvironmentsSessionsResponse,
  MatchIntentProjectsLocationsAgentsEnvironmentsSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: MatchIntentProjectsLocationsAgentsEnvironmentsSessionsRequest,
  output: MatchIntentProjectsLocationsAgentsEnvironmentsSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest {
  pageToken?: string;
  parent: string;
  pageSize?: number;
}

export const ListProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/entityTypes" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest>;

export type ListProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse =
  GoogleCloudDialogflowCxV3ListSessionEntityTypesResponse;
export const ListProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3ListSessionEntityTypesResponse;

export type ListProjectsLocationsAgentsEnvironmentsSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsEnvironmentsSessionsEntityTypes: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest,
  ListProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse,
  ListProjectsLocationsAgentsEnvironmentsSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest,
  output: ListProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3SessionEntityType;
}

export const PatchProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowCxV3SessionEntityType).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest>;

export type PatchProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse =
  GoogleCloudDialogflowCxV3SessionEntityType;
export const PatchProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3SessionEntityType;

export type PatchProjectsLocationsAgentsEnvironmentsSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsAgentsEnvironmentsSessionsEntityTypes: API.OperationMethod<
  PatchProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest,
  PatchProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse,
  PatchProjectsLocationsAgentsEnvironmentsSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest,
  output: PatchProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest>;

export type DeleteProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentsEnvironmentsSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsAgentsEnvironmentsSessionsEntityTypes: API.OperationMethod<
  DeleteProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest,
  DeleteProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse,
  DeleteProjectsLocationsAgentsEnvironmentsSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest,
  output: DeleteProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3SessionEntityType;
}

export const CreateProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3SessionEntityType).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+parent}/entityTypes", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest>;

export type CreateProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse =
  GoogleCloudDialogflowCxV3SessionEntityType;
export const CreateProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3SessionEntityType;

export type CreateProjectsLocationsAgentsEnvironmentsSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsAgentsEnvironmentsSessionsEntityTypes: API.OperationMethod<
  CreateProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest,
  CreateProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse,
  CreateProjectsLocationsAgentsEnvironmentsSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest,
  output: CreateProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest {
  name: string;
}

export const GetProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest>;

export type GetProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse =
  GoogleCloudDialogflowCxV3SessionEntityType;
export const GetProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3SessionEntityType;

export type GetProjectsLocationsAgentsEnvironmentsSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsEnvironmentsSessionsEntityTypes: API.OperationMethod<
  GetProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest,
  GetProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse,
  GetProjectsLocationsAgentsEnvironmentsSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest,
  output: GetProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface StartProjectsLocationsAgentsEnvironmentsExperimentsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3StartExperimentRequest;
}

export const StartProjectsLocationsAgentsEnvironmentsExperimentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowCxV3StartExperimentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+name}:start", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<StartProjectsLocationsAgentsEnvironmentsExperimentsRequest>;

export type StartProjectsLocationsAgentsEnvironmentsExperimentsResponse =
  GoogleCloudDialogflowCxV3Experiment;
export const StartProjectsLocationsAgentsEnvironmentsExperimentsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Experiment;

export type StartProjectsLocationsAgentsEnvironmentsExperimentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const startProjectsLocationsAgentsEnvironmentsExperiments: API.OperationMethod<
  StartProjectsLocationsAgentsEnvironmentsExperimentsRequest,
  StartProjectsLocationsAgentsEnvironmentsExperimentsResponse,
  StartProjectsLocationsAgentsEnvironmentsExperimentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartProjectsLocationsAgentsEnvironmentsExperimentsRequest,
  output: StartProjectsLocationsAgentsEnvironmentsExperimentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StopProjectsLocationsAgentsEnvironmentsExperimentsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3StopExperimentRequest;
}

export const StopProjectsLocationsAgentsEnvironmentsExperimentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowCxV3StopExperimentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+name}:stop", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<StopProjectsLocationsAgentsEnvironmentsExperimentsRequest>;

export type StopProjectsLocationsAgentsEnvironmentsExperimentsResponse =
  GoogleCloudDialogflowCxV3Experiment;
export const StopProjectsLocationsAgentsEnvironmentsExperimentsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Experiment;

export type StopProjectsLocationsAgentsEnvironmentsExperimentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const stopProjectsLocationsAgentsEnvironmentsExperiments: API.OperationMethod<
  StopProjectsLocationsAgentsEnvironmentsExperimentsRequest,
  StopProjectsLocationsAgentsEnvironmentsExperimentsResponse,
  StopProjectsLocationsAgentsEnvironmentsExperimentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StopProjectsLocationsAgentsEnvironmentsExperimentsRequest,
  output: StopProjectsLocationsAgentsEnvironmentsExperimentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsEnvironmentsExperimentsRequest {
  name: string;
}

export const GetProjectsLocationsAgentsEnvironmentsExperimentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAgentsEnvironmentsExperimentsRequest>;

export type GetProjectsLocationsAgentsEnvironmentsExperimentsResponse =
  GoogleCloudDialogflowCxV3Experiment;
export const GetProjectsLocationsAgentsEnvironmentsExperimentsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Experiment;

export type GetProjectsLocationsAgentsEnvironmentsExperimentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsEnvironmentsExperiments: API.OperationMethod<
  GetProjectsLocationsAgentsEnvironmentsExperimentsRequest,
  GetProjectsLocationsAgentsEnvironmentsExperimentsResponse,
  GetProjectsLocationsAgentsEnvironmentsExperimentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsEnvironmentsExperimentsRequest,
  output: GetProjectsLocationsAgentsEnvironmentsExperimentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsAgentsEnvironmentsExperimentsRequest {
  pageToken?: string;
  parent: string;
  pageSize?: number;
}

export const ListProjectsLocationsAgentsEnvironmentsExperimentsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/experiments" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAgentsEnvironmentsExperimentsRequest>;

export type ListProjectsLocationsAgentsEnvironmentsExperimentsResponse =
  GoogleCloudDialogflowCxV3ListExperimentsResponse;
export const ListProjectsLocationsAgentsEnvironmentsExperimentsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3ListExperimentsResponse;

export type ListProjectsLocationsAgentsEnvironmentsExperimentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsEnvironmentsExperiments: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsEnvironmentsExperimentsRequest,
  ListProjectsLocationsAgentsEnvironmentsExperimentsResponse,
  ListProjectsLocationsAgentsEnvironmentsExperimentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsEnvironmentsExperimentsRequest,
  output: ListProjectsLocationsAgentsEnvironmentsExperimentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsAgentsEnvironmentsExperimentsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3Experiment;
}

export const PatchProjectsLocationsAgentsEnvironmentsExperimentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowCxV3Experiment).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsAgentsEnvironmentsExperimentsRequest>;

export type PatchProjectsLocationsAgentsEnvironmentsExperimentsResponse =
  GoogleCloudDialogflowCxV3Experiment;
export const PatchProjectsLocationsAgentsEnvironmentsExperimentsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Experiment;

export type PatchProjectsLocationsAgentsEnvironmentsExperimentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsAgentsEnvironmentsExperiments: API.OperationMethod<
  PatchProjectsLocationsAgentsEnvironmentsExperimentsRequest,
  PatchProjectsLocationsAgentsEnvironmentsExperimentsResponse,
  PatchProjectsLocationsAgentsEnvironmentsExperimentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsEnvironmentsExperimentsRequest,
  output: PatchProjectsLocationsAgentsEnvironmentsExperimentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAgentsEnvironmentsExperimentsRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentsEnvironmentsExperimentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAgentsEnvironmentsExperimentsRequest>;

export type DeleteProjectsLocationsAgentsEnvironmentsExperimentsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsEnvironmentsExperimentsResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentsEnvironmentsExperimentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsAgentsEnvironmentsExperiments: API.OperationMethod<
  DeleteProjectsLocationsAgentsEnvironmentsExperimentsRequest,
  DeleteProjectsLocationsAgentsEnvironmentsExperimentsResponse,
  DeleteProjectsLocationsAgentsEnvironmentsExperimentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsEnvironmentsExperimentsRequest,
  output: DeleteProjectsLocationsAgentsEnvironmentsExperimentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAgentsEnvironmentsExperimentsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3Experiment;
}

export const CreateProjectsLocationsAgentsEnvironmentsExperimentsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3Experiment).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+parent}/experiments", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAgentsEnvironmentsExperimentsRequest>;

export type CreateProjectsLocationsAgentsEnvironmentsExperimentsResponse =
  GoogleCloudDialogflowCxV3Experiment;
export const CreateProjectsLocationsAgentsEnvironmentsExperimentsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Experiment;

export type CreateProjectsLocationsAgentsEnvironmentsExperimentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsAgentsEnvironmentsExperiments: API.OperationMethod<
  CreateProjectsLocationsAgentsEnvironmentsExperimentsRequest,
  CreateProjectsLocationsAgentsEnvironmentsExperimentsResponse,
  CreateProjectsLocationsAgentsEnvironmentsExperimentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsEnvironmentsExperimentsRequest,
  output: CreateProjectsLocationsAgentsEnvironmentsExperimentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAgentsEntityTypesRequest {
  languageCode?: string;
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3EntityType;
}

export const PatchProjectsLocationsAgentsEntityTypesRequest =
  /*@__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowCxV3EntityType).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsAgentsEntityTypesRequest>;

export type PatchProjectsLocationsAgentsEntityTypesResponse =
  GoogleCloudDialogflowCxV3EntityType;
export const PatchProjectsLocationsAgentsEntityTypesResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3EntityType;

export type PatchProjectsLocationsAgentsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsAgentsEntityTypes: API.OperationMethod<
  PatchProjectsLocationsAgentsEntityTypesRequest,
  PatchProjectsLocationsAgentsEntityTypesResponse,
  PatchProjectsLocationsAgentsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsEntityTypesRequest,
  output: PatchProjectsLocationsAgentsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAgentsEntityTypesRequest {
  force?: boolean;
  name: string;
}

export const DeleteProjectsLocationsAgentsEntityTypesRequest =
  /*@__PURE__*/ Schema.Struct({
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAgentsEntityTypesRequest>;

export type DeleteProjectsLocationsAgentsEntityTypesResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsEntityTypesResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsAgentsEntityTypes: API.OperationMethod<
  DeleteProjectsLocationsAgentsEntityTypesRequest,
  DeleteProjectsLocationsAgentsEntityTypesResponse,
  DeleteProjectsLocationsAgentsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsEntityTypesRequest,
  output: DeleteProjectsLocationsAgentsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsEntityTypesRequest {
  parent: string;
  pageSize?: number;
  languageCode?: string;
  pageToken?: string;
}

export const ListProjectsLocationsAgentsEntityTypesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/entityTypes" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAgentsEntityTypesRequest>;

export type ListProjectsLocationsAgentsEntityTypesResponse =
  GoogleCloudDialogflowCxV3ListEntityTypesResponse;
export const ListProjectsLocationsAgentsEntityTypesResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3ListEntityTypesResponse;

export type ListProjectsLocationsAgentsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsEntityTypes: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsEntityTypesRequest,
  ListProjectsLocationsAgentsEntityTypesResponse,
  ListProjectsLocationsAgentsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsEntityTypesRequest,
  output: ListProjectsLocationsAgentsEntityTypesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsAgentsEntityTypesRequest {
  languageCode?: string;
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3EntityType;
}

export const CreateProjectsLocationsAgentsEntityTypesRequest =
  /*@__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3EntityType).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+parent}/entityTypes", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAgentsEntityTypesRequest>;

export type CreateProjectsLocationsAgentsEntityTypesResponse =
  GoogleCloudDialogflowCxV3EntityType;
export const CreateProjectsLocationsAgentsEntityTypesResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3EntityType;

export type CreateProjectsLocationsAgentsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsAgentsEntityTypes: API.OperationMethod<
  CreateProjectsLocationsAgentsEntityTypesRequest,
  CreateProjectsLocationsAgentsEntityTypesResponse,
  CreateProjectsLocationsAgentsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsEntityTypesRequest,
  output: CreateProjectsLocationsAgentsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ImportProjectsLocationsAgentsEntityTypesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3ImportEntityTypesRequest;
}

export const ImportProjectsLocationsAgentsEntityTypesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3ImportEntityTypesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+parent}/entityTypes:import",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ImportProjectsLocationsAgentsEntityTypesRequest>;

export type ImportProjectsLocationsAgentsEntityTypesResponse =
  GoogleLongrunningOperation;
export const ImportProjectsLocationsAgentsEntityTypesResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type ImportProjectsLocationsAgentsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const importProjectsLocationsAgentsEntityTypes: API.OperationMethod<
  ImportProjectsLocationsAgentsEntityTypesRequest,
  ImportProjectsLocationsAgentsEntityTypesResponse,
  ImportProjectsLocationsAgentsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ImportProjectsLocationsAgentsEntityTypesRequest,
  output: ImportProjectsLocationsAgentsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExportProjectsLocationsAgentsEntityTypesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3ExportEntityTypesRequest;
}

export const ExportProjectsLocationsAgentsEntityTypesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3ExportEntityTypesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+parent}/entityTypes:export",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ExportProjectsLocationsAgentsEntityTypesRequest>;

export type ExportProjectsLocationsAgentsEntityTypesResponse =
  GoogleLongrunningOperation;
export const ExportProjectsLocationsAgentsEntityTypesResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type ExportProjectsLocationsAgentsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const exportProjectsLocationsAgentsEntityTypes: API.OperationMethod<
  ExportProjectsLocationsAgentsEntityTypesRequest,
  ExportProjectsLocationsAgentsEntityTypesResponse,
  ExportProjectsLocationsAgentsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ExportProjectsLocationsAgentsEntityTypesRequest,
  output: ExportProjectsLocationsAgentsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsEntityTypesRequest {
  name: string;
  languageCode?: string;
}

export const GetProjectsLocationsAgentsEntityTypesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAgentsEntityTypesRequest>;

export type GetProjectsLocationsAgentsEntityTypesResponse =
  GoogleCloudDialogflowCxV3EntityType;
export const GetProjectsLocationsAgentsEntityTypesResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3EntityType;

export type GetProjectsLocationsAgentsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsEntityTypes: API.OperationMethod<
  GetProjectsLocationsAgentsEntityTypesRequest,
  GetProjectsLocationsAgentsEntityTypesResponse,
  GetProjectsLocationsAgentsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsEntityTypesRequest,
  output: GetProjectsLocationsAgentsEntityTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsAgentsTestCasesRequest {
  name: string;
}

export const GetProjectsLocationsAgentsTestCasesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAgentsTestCasesRequest>;

export type GetProjectsLocationsAgentsTestCasesResponse =
  GoogleCloudDialogflowCxV3TestCase;
export const GetProjectsLocationsAgentsTestCasesResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3TestCase;

export type GetProjectsLocationsAgentsTestCasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsTestCases: API.OperationMethod<
  GetProjectsLocationsAgentsTestCasesRequest,
  GetProjectsLocationsAgentsTestCasesResponse,
  GetProjectsLocationsAgentsTestCasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsTestCasesRequest,
  output: GetProjectsLocationsAgentsTestCasesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateCoverageProjectsLocationsAgentsTestCasesRequest {
  agent: string;
  type?:
    | "COVERAGE_TYPE_UNSPECIFIED"
    | "INTENT"
    | "PAGE_TRANSITION"
    | "TRANSITION_ROUTE_GROUP"
    | (string & {});
}

export const CalculateCoverageProjectsLocationsAgentsTestCasesRequest =
  /*@__PURE__*/ Schema.Struct({
    agent: Schema.String.pipe(T.HttpPath("agent")),
    type: Schema.optional(Schema.String).pipe(T.HttpQuery("type")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+agent}/testCases:calculateCoverage" }),
    svc,
  ) as unknown as Schema.Codec<CalculateCoverageProjectsLocationsAgentsTestCasesRequest>;

export type CalculateCoverageProjectsLocationsAgentsTestCasesResponse =
  GoogleCloudDialogflowCxV3CalculateCoverageResponse;
export const CalculateCoverageProjectsLocationsAgentsTestCasesResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3CalculateCoverageResponse;

export type CalculateCoverageProjectsLocationsAgentsTestCasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const calculateCoverageProjectsLocationsAgentsTestCases: API.OperationMethod<
  CalculateCoverageProjectsLocationsAgentsTestCasesRequest,
  CalculateCoverageProjectsLocationsAgentsTestCasesResponse,
  CalculateCoverageProjectsLocationsAgentsTestCasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CalculateCoverageProjectsLocationsAgentsTestCasesRequest,
  output: CalculateCoverageProjectsLocationsAgentsTestCasesResponse,
  errors: [NotFound, Forbidden],
}));

export interface RunProjectsLocationsAgentsTestCasesRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3RunTestCaseRequest;
}

export const RunProjectsLocationsAgentsTestCasesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowCxV3RunTestCaseRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+name}:run", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<RunProjectsLocationsAgentsTestCasesRequest>;

export type RunProjectsLocationsAgentsTestCasesResponse =
  GoogleLongrunningOperation;
export const RunProjectsLocationsAgentsTestCasesResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type RunProjectsLocationsAgentsTestCasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const runProjectsLocationsAgentsTestCases: API.OperationMethod<
  RunProjectsLocationsAgentsTestCasesRequest,
  RunProjectsLocationsAgentsTestCasesResponse,
  RunProjectsLocationsAgentsTestCasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RunProjectsLocationsAgentsTestCasesRequest,
  output: RunProjectsLocationsAgentsTestCasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAgentsTestCasesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3TestCase;
}

export const CreateProjectsLocationsAgentsTestCasesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3TestCase).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+parent}/testCases", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAgentsTestCasesRequest>;

export type CreateProjectsLocationsAgentsTestCasesResponse =
  GoogleCloudDialogflowCxV3TestCase;
export const CreateProjectsLocationsAgentsTestCasesResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3TestCase;

export type CreateProjectsLocationsAgentsTestCasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsAgentsTestCases: API.OperationMethod<
  CreateProjectsLocationsAgentsTestCasesRequest,
  CreateProjectsLocationsAgentsTestCasesResponse,
  CreateProjectsLocationsAgentsTestCasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsTestCasesRequest,
  output: CreateProjectsLocationsAgentsTestCasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ImportProjectsLocationsAgentsTestCasesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3ImportTestCasesRequest;
}

export const ImportProjectsLocationsAgentsTestCasesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3ImportTestCasesRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+parent}/testCases:import",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ImportProjectsLocationsAgentsTestCasesRequest>;

export type ImportProjectsLocationsAgentsTestCasesResponse =
  GoogleLongrunningOperation;
export const ImportProjectsLocationsAgentsTestCasesResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type ImportProjectsLocationsAgentsTestCasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const importProjectsLocationsAgentsTestCases: API.OperationMethod<
  ImportProjectsLocationsAgentsTestCasesRequest,
  ImportProjectsLocationsAgentsTestCasesResponse,
  ImportProjectsLocationsAgentsTestCasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ImportProjectsLocationsAgentsTestCasesRequest,
  output: ImportProjectsLocationsAgentsTestCasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchDeleteProjectsLocationsAgentsTestCasesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3BatchDeleteTestCasesRequest;
}

export const BatchDeleteProjectsLocationsAgentsTestCasesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3BatchDeleteTestCasesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+parent}/testCases:batchDelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<BatchDeleteProjectsLocationsAgentsTestCasesRequest>;

export type BatchDeleteProjectsLocationsAgentsTestCasesResponse =
  GoogleProtobufEmpty;
export const BatchDeleteProjectsLocationsAgentsTestCasesResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type BatchDeleteProjectsLocationsAgentsTestCasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const batchDeleteProjectsLocationsAgentsTestCases: API.OperationMethod<
  BatchDeleteProjectsLocationsAgentsTestCasesRequest,
  BatchDeleteProjectsLocationsAgentsTestCasesResponse,
  BatchDeleteProjectsLocationsAgentsTestCasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchDeleteProjectsLocationsAgentsTestCasesRequest,
  output: BatchDeleteProjectsLocationsAgentsTestCasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExportProjectsLocationsAgentsTestCasesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3ExportTestCasesRequest;
}

export const ExportProjectsLocationsAgentsTestCasesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3ExportTestCasesRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+parent}/testCases:export",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ExportProjectsLocationsAgentsTestCasesRequest>;

export type ExportProjectsLocationsAgentsTestCasesResponse =
  GoogleLongrunningOperation;
export const ExportProjectsLocationsAgentsTestCasesResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type ExportProjectsLocationsAgentsTestCasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const exportProjectsLocationsAgentsTestCases: API.OperationMethod<
  ExportProjectsLocationsAgentsTestCasesRequest,
  ExportProjectsLocationsAgentsTestCasesResponse,
  ExportProjectsLocationsAgentsTestCasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ExportProjectsLocationsAgentsTestCasesRequest,
  output: ExportProjectsLocationsAgentsTestCasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsTestCasesRequest {
  pageToken?: string;
  view?: "TEST_CASE_VIEW_UNSPECIFIED" | "BASIC" | "FULL" | (string & {});
  parent: string;
  pageSize?: number;
}

export const ListProjectsLocationsAgentsTestCasesRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/testCases" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAgentsTestCasesRequest>;

export type ListProjectsLocationsAgentsTestCasesResponse =
  GoogleCloudDialogflowCxV3ListTestCasesResponse;
export const ListProjectsLocationsAgentsTestCasesResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3ListTestCasesResponse;

export type ListProjectsLocationsAgentsTestCasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsTestCases: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsTestCasesRequest,
  ListProjectsLocationsAgentsTestCasesResponse,
  ListProjectsLocationsAgentsTestCasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsTestCasesRequest,
  output: ListProjectsLocationsAgentsTestCasesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsAgentsTestCasesRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3TestCase;
}

export const PatchProjectsLocationsAgentsTestCasesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowCxV3TestCase).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsAgentsTestCasesRequest>;

export type PatchProjectsLocationsAgentsTestCasesResponse =
  GoogleCloudDialogflowCxV3TestCase;
export const PatchProjectsLocationsAgentsTestCasesResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3TestCase;

export type PatchProjectsLocationsAgentsTestCasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsAgentsTestCases: API.OperationMethod<
  PatchProjectsLocationsAgentsTestCasesRequest,
  PatchProjectsLocationsAgentsTestCasesResponse,
  PatchProjectsLocationsAgentsTestCasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsTestCasesRequest,
  output: PatchProjectsLocationsAgentsTestCasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchRunProjectsLocationsAgentsTestCasesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3BatchRunTestCasesRequest;
}

export const BatchRunProjectsLocationsAgentsTestCasesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3BatchRunTestCasesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+parent}/testCases:batchRun",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<BatchRunProjectsLocationsAgentsTestCasesRequest>;

export type BatchRunProjectsLocationsAgentsTestCasesResponse =
  GoogleLongrunningOperation;
export const BatchRunProjectsLocationsAgentsTestCasesResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type BatchRunProjectsLocationsAgentsTestCasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const batchRunProjectsLocationsAgentsTestCases: API.OperationMethod<
  BatchRunProjectsLocationsAgentsTestCasesRequest,
  BatchRunProjectsLocationsAgentsTestCasesResponse,
  BatchRunProjectsLocationsAgentsTestCasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchRunProjectsLocationsAgentsTestCasesRequest,
  output: BatchRunProjectsLocationsAgentsTestCasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsTestCasesResultsRequest {
  name: string;
}

export const GetProjectsLocationsAgentsTestCasesResultsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAgentsTestCasesResultsRequest>;

export type GetProjectsLocationsAgentsTestCasesResultsResponse =
  GoogleCloudDialogflowCxV3TestCaseResult;
export const GetProjectsLocationsAgentsTestCasesResultsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3TestCaseResult;

export type GetProjectsLocationsAgentsTestCasesResultsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsTestCasesResults: API.OperationMethod<
  GetProjectsLocationsAgentsTestCasesResultsRequest,
  GetProjectsLocationsAgentsTestCasesResultsResponse,
  GetProjectsLocationsAgentsTestCasesResultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsTestCasesResultsRequest,
  output: GetProjectsLocationsAgentsTestCasesResultsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsAgentsTestCasesResultsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
  filter?: string;
}

export const ListProjectsLocationsAgentsTestCasesResultsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/results" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAgentsTestCasesResultsRequest>;

export type ListProjectsLocationsAgentsTestCasesResultsResponse =
  GoogleCloudDialogflowCxV3ListTestCaseResultsResponse;
export const ListProjectsLocationsAgentsTestCasesResultsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3ListTestCaseResultsResponse;

export type ListProjectsLocationsAgentsTestCasesResultsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsTestCasesResults: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsTestCasesResultsRequest,
  ListProjectsLocationsAgentsTestCasesResultsResponse,
  ListProjectsLocationsAgentsTestCasesResultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsTestCasesResultsRequest,
  output: ListProjectsLocationsAgentsTestCasesResultsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ExportProjectsLocationsAgentsIntentsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3ExportIntentsRequest;
}

export const ExportProjectsLocationsAgentsIntentsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3ExportIntentsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+parent}/intents:export",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ExportProjectsLocationsAgentsIntentsRequest>;

export type ExportProjectsLocationsAgentsIntentsResponse =
  GoogleLongrunningOperation;
export const ExportProjectsLocationsAgentsIntentsResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type ExportProjectsLocationsAgentsIntentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const exportProjectsLocationsAgentsIntents: API.OperationMethod<
  ExportProjectsLocationsAgentsIntentsRequest,
  ExportProjectsLocationsAgentsIntentsResponse,
  ExportProjectsLocationsAgentsIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ExportProjectsLocationsAgentsIntentsRequest,
  output: ExportProjectsLocationsAgentsIntentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsIntentsRequest {
  name: string;
  languageCode?: string;
}

export const GetProjectsLocationsAgentsIntentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAgentsIntentsRequest>;

export type GetProjectsLocationsAgentsIntentsResponse =
  GoogleCloudDialogflowCxV3Intent;
export const GetProjectsLocationsAgentsIntentsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Intent;

export type GetProjectsLocationsAgentsIntentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsIntents: API.OperationMethod<
  GetProjectsLocationsAgentsIntentsRequest,
  GetProjectsLocationsAgentsIntentsResponse,
  GetProjectsLocationsAgentsIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsIntentsRequest,
  output: GetProjectsLocationsAgentsIntentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsAgentsIntentsRequest {
  parent: string;
  intentView?:
    | "INTENT_VIEW_UNSPECIFIED"
    | "INTENT_VIEW_PARTIAL"
    | "INTENT_VIEW_FULL"
    | (string & {});
  languageCode?: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsAgentsIntentsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    intentView: Schema.optional(Schema.String).pipe(T.HttpQuery("intentView")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/intents" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAgentsIntentsRequest>;

export type ListProjectsLocationsAgentsIntentsResponse =
  GoogleCloudDialogflowCxV3ListIntentsResponse;
export const ListProjectsLocationsAgentsIntentsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3ListIntentsResponse;

export type ListProjectsLocationsAgentsIntentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsIntents: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsIntentsRequest,
  ListProjectsLocationsAgentsIntentsResponse,
  ListProjectsLocationsAgentsIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsIntentsRequest,
  output: ListProjectsLocationsAgentsIntentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsAgentsIntentsRequest {
  name: string;
  updateMask?: string;
  languageCode?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3Intent;
}

export const PatchProjectsLocationsAgentsIntentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    body: Schema.optional(GoogleCloudDialogflowCxV3Intent).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsAgentsIntentsRequest>;

export type PatchProjectsLocationsAgentsIntentsResponse =
  GoogleCloudDialogflowCxV3Intent;
export const PatchProjectsLocationsAgentsIntentsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Intent;

export type PatchProjectsLocationsAgentsIntentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsAgentsIntents: API.OperationMethod<
  PatchProjectsLocationsAgentsIntentsRequest,
  PatchProjectsLocationsAgentsIntentsResponse,
  PatchProjectsLocationsAgentsIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsIntentsRequest,
  output: PatchProjectsLocationsAgentsIntentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAgentsIntentsRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentsIntentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAgentsIntentsRequest>;

export type DeleteProjectsLocationsAgentsIntentsResponse = GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsIntentsResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentsIntentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsAgentsIntents: API.OperationMethod<
  DeleteProjectsLocationsAgentsIntentsRequest,
  DeleteProjectsLocationsAgentsIntentsResponse,
  DeleteProjectsLocationsAgentsIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsIntentsRequest,
  output: DeleteProjectsLocationsAgentsIntentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAgentsIntentsRequest {
  languageCode?: string;
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3Intent;
}

export const CreateProjectsLocationsAgentsIntentsRequest =
  /*@__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3Intent).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+parent}/intents", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAgentsIntentsRequest>;

export type CreateProjectsLocationsAgentsIntentsResponse =
  GoogleCloudDialogflowCxV3Intent;
export const CreateProjectsLocationsAgentsIntentsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Intent;

export type CreateProjectsLocationsAgentsIntentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsAgentsIntents: API.OperationMethod<
  CreateProjectsLocationsAgentsIntentsRequest,
  CreateProjectsLocationsAgentsIntentsResponse,
  CreateProjectsLocationsAgentsIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsIntentsRequest,
  output: CreateProjectsLocationsAgentsIntentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ImportProjectsLocationsAgentsIntentsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3ImportIntentsRequest;
}

export const ImportProjectsLocationsAgentsIntentsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3ImportIntentsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+parent}/intents:import",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ImportProjectsLocationsAgentsIntentsRequest>;

export type ImportProjectsLocationsAgentsIntentsResponse =
  GoogleLongrunningOperation;
export const ImportProjectsLocationsAgentsIntentsResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type ImportProjectsLocationsAgentsIntentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const importProjectsLocationsAgentsIntents: API.OperationMethod<
  ImportProjectsLocationsAgentsIntentsRequest,
  ImportProjectsLocationsAgentsIntentsResponse,
  ImportProjectsLocationsAgentsIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ImportProjectsLocationsAgentsIntentsRequest,
  output: ImportProjectsLocationsAgentsIntentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAgentsWebhooksRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3Webhook;
}

export const CreateProjectsLocationsAgentsWebhooksRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3Webhook).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+parent}/webhooks", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAgentsWebhooksRequest>;

export type CreateProjectsLocationsAgentsWebhooksResponse =
  GoogleCloudDialogflowCxV3Webhook;
export const CreateProjectsLocationsAgentsWebhooksResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Webhook;

export type CreateProjectsLocationsAgentsWebhooksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsAgentsWebhooks: API.OperationMethod<
  CreateProjectsLocationsAgentsWebhooksRequest,
  CreateProjectsLocationsAgentsWebhooksResponse,
  CreateProjectsLocationsAgentsWebhooksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsWebhooksRequest,
  output: CreateProjectsLocationsAgentsWebhooksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsWebhooksRequest {
  pageToken?: string;
  parent: string;
  pageSize?: number;
}

export const ListProjectsLocationsAgentsWebhooksRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/webhooks" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAgentsWebhooksRequest>;

export type ListProjectsLocationsAgentsWebhooksResponse =
  GoogleCloudDialogflowCxV3ListWebhooksResponse;
export const ListProjectsLocationsAgentsWebhooksResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3ListWebhooksResponse;

export type ListProjectsLocationsAgentsWebhooksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsWebhooks: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsWebhooksRequest,
  ListProjectsLocationsAgentsWebhooksResponse,
  ListProjectsLocationsAgentsWebhooksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsWebhooksRequest,
  output: ListProjectsLocationsAgentsWebhooksResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsAgentsWebhooksRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3Webhook;
}

export const PatchProjectsLocationsAgentsWebhooksRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowCxV3Webhook).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsAgentsWebhooksRequest>;

export type PatchProjectsLocationsAgentsWebhooksResponse =
  GoogleCloudDialogflowCxV3Webhook;
export const PatchProjectsLocationsAgentsWebhooksResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Webhook;

export type PatchProjectsLocationsAgentsWebhooksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsAgentsWebhooks: API.OperationMethod<
  PatchProjectsLocationsAgentsWebhooksRequest,
  PatchProjectsLocationsAgentsWebhooksResponse,
  PatchProjectsLocationsAgentsWebhooksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsWebhooksRequest,
  output: PatchProjectsLocationsAgentsWebhooksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAgentsWebhooksRequest {
  name: string;
  force?: boolean;
}

export const DeleteProjectsLocationsAgentsWebhooksRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAgentsWebhooksRequest>;

export type DeleteProjectsLocationsAgentsWebhooksResponse = GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsWebhooksResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentsWebhooksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsAgentsWebhooks: API.OperationMethod<
  DeleteProjectsLocationsAgentsWebhooksRequest,
  DeleteProjectsLocationsAgentsWebhooksResponse,
  DeleteProjectsLocationsAgentsWebhooksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsWebhooksRequest,
  output: DeleteProjectsLocationsAgentsWebhooksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsWebhooksRequest {
  name: string;
}

export const GetProjectsLocationsAgentsWebhooksRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAgentsWebhooksRequest>;

export type GetProjectsLocationsAgentsWebhooksResponse =
  GoogleCloudDialogflowCxV3Webhook;
export const GetProjectsLocationsAgentsWebhooksResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Webhook;

export type GetProjectsLocationsAgentsWebhooksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsWebhooks: API.OperationMethod<
  GetProjectsLocationsAgentsWebhooksRequest,
  GetProjectsLocationsAgentsWebhooksResponse,
  GetProjectsLocationsAgentsWebhooksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsWebhooksRequest,
  output: GetProjectsLocationsAgentsWebhooksResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsAgentsChangelogsRequest {
  name: string;
}

export const GetProjectsLocationsAgentsChangelogsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAgentsChangelogsRequest>;

export type GetProjectsLocationsAgentsChangelogsResponse =
  GoogleCloudDialogflowCxV3Changelog;
export const GetProjectsLocationsAgentsChangelogsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Changelog;

export type GetProjectsLocationsAgentsChangelogsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsChangelogs: API.OperationMethod<
  GetProjectsLocationsAgentsChangelogsRequest,
  GetProjectsLocationsAgentsChangelogsResponse,
  GetProjectsLocationsAgentsChangelogsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsChangelogsRequest,
  output: GetProjectsLocationsAgentsChangelogsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsAgentsChangelogsRequest {
  parent: string;
  pageSize?: number;
  filter?: string;
  pageToken?: string;
}

export const ListProjectsLocationsAgentsChangelogsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/changelogs" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAgentsChangelogsRequest>;

export type ListProjectsLocationsAgentsChangelogsResponse =
  GoogleCloudDialogflowCxV3ListChangelogsResponse;
export const ListProjectsLocationsAgentsChangelogsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3ListChangelogsResponse;

export type ListProjectsLocationsAgentsChangelogsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsChangelogs: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsChangelogsRequest,
  ListProjectsLocationsAgentsChangelogsResponse,
  ListProjectsLocationsAgentsChangelogsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsChangelogsRequest,
  output: ListProjectsLocationsAgentsChangelogsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsAgentsFlowsRequest {
  force?: boolean;
  name: string;
}

export const DeleteProjectsLocationsAgentsFlowsRequest =
  /*@__PURE__*/ Schema.Struct({
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAgentsFlowsRequest>;

export type DeleteProjectsLocationsAgentsFlowsResponse = GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsFlowsResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentsFlowsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsAgentsFlows: API.OperationMethod<
  DeleteProjectsLocationsAgentsFlowsRequest,
  DeleteProjectsLocationsAgentsFlowsResponse,
  DeleteProjectsLocationsAgentsFlowsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsFlowsRequest,
  output: DeleteProjectsLocationsAgentsFlowsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsFlowsRequest {
  parent: string;
  pageSize?: number;
  languageCode?: string;
  pageToken?: string;
}

export const ListProjectsLocationsAgentsFlowsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/flows" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAgentsFlowsRequest>;

export type ListProjectsLocationsAgentsFlowsResponse =
  GoogleCloudDialogflowCxV3ListFlowsResponse;
export const ListProjectsLocationsAgentsFlowsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3ListFlowsResponse;

export type ListProjectsLocationsAgentsFlowsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsFlows: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsFlowsRequest,
  ListProjectsLocationsAgentsFlowsResponse,
  ListProjectsLocationsAgentsFlowsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsFlowsRequest,
  output: ListProjectsLocationsAgentsFlowsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsAgentsFlowsRequest {
  name: string;
  updateMask?: string;
  languageCode?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3Flow;
}

export const PatchProjectsLocationsAgentsFlowsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    body: Schema.optional(GoogleCloudDialogflowCxV3Flow).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsAgentsFlowsRequest>;

export type PatchProjectsLocationsAgentsFlowsResponse =
  GoogleCloudDialogflowCxV3Flow;
export const PatchProjectsLocationsAgentsFlowsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Flow;

export type PatchProjectsLocationsAgentsFlowsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsAgentsFlows: API.OperationMethod<
  PatchProjectsLocationsAgentsFlowsRequest,
  PatchProjectsLocationsAgentsFlowsResponse,
  PatchProjectsLocationsAgentsFlowsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsFlowsRequest,
  output: PatchProjectsLocationsAgentsFlowsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExportProjectsLocationsAgentsFlowsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3ExportFlowRequest;
}

export const ExportProjectsLocationsAgentsFlowsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowCxV3ExportFlowRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+name}:export", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<ExportProjectsLocationsAgentsFlowsRequest>;

export type ExportProjectsLocationsAgentsFlowsResponse =
  GoogleLongrunningOperation;
export const ExportProjectsLocationsAgentsFlowsResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type ExportProjectsLocationsAgentsFlowsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const exportProjectsLocationsAgentsFlows: API.OperationMethod<
  ExportProjectsLocationsAgentsFlowsRequest,
  ExportProjectsLocationsAgentsFlowsResponse,
  ExportProjectsLocationsAgentsFlowsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ExportProjectsLocationsAgentsFlowsRequest,
  output: ExportProjectsLocationsAgentsFlowsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TrainProjectsLocationsAgentsFlowsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3TrainFlowRequest;
}

export const TrainProjectsLocationsAgentsFlowsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowCxV3TrainFlowRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+name}:train", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<TrainProjectsLocationsAgentsFlowsRequest>;

export type TrainProjectsLocationsAgentsFlowsResponse =
  GoogleLongrunningOperation;
export const TrainProjectsLocationsAgentsFlowsResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type TrainProjectsLocationsAgentsFlowsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const trainProjectsLocationsAgentsFlows: API.OperationMethod<
  TrainProjectsLocationsAgentsFlowsRequest,
  TrainProjectsLocationsAgentsFlowsResponse,
  TrainProjectsLocationsAgentsFlowsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TrainProjectsLocationsAgentsFlowsRequest,
  output: TrainProjectsLocationsAgentsFlowsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ValidateProjectsLocationsAgentsFlowsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3ValidateFlowRequest;
}

export const ValidateProjectsLocationsAgentsFlowsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowCxV3ValidateFlowRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+name}:validate", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<ValidateProjectsLocationsAgentsFlowsRequest>;

export type ValidateProjectsLocationsAgentsFlowsResponse =
  GoogleCloudDialogflowCxV3FlowValidationResult;
export const ValidateProjectsLocationsAgentsFlowsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3FlowValidationResult;

export type ValidateProjectsLocationsAgentsFlowsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const validateProjectsLocationsAgentsFlows: API.OperationMethod<
  ValidateProjectsLocationsAgentsFlowsRequest,
  ValidateProjectsLocationsAgentsFlowsResponse,
  ValidateProjectsLocationsAgentsFlowsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ValidateProjectsLocationsAgentsFlowsRequest,
  output: ValidateProjectsLocationsAgentsFlowsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAgentsFlowsRequest {
  languageCode?: string;
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3Flow;
}

export const CreateProjectsLocationsAgentsFlowsRequest =
  /*@__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3Flow).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+parent}/flows", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAgentsFlowsRequest>;

export type CreateProjectsLocationsAgentsFlowsResponse =
  GoogleCloudDialogflowCxV3Flow;
export const CreateProjectsLocationsAgentsFlowsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Flow;

export type CreateProjectsLocationsAgentsFlowsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsAgentsFlows: API.OperationMethod<
  CreateProjectsLocationsAgentsFlowsRequest,
  CreateProjectsLocationsAgentsFlowsResponse,
  CreateProjectsLocationsAgentsFlowsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsFlowsRequest,
  output: CreateProjectsLocationsAgentsFlowsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ImportProjectsLocationsAgentsFlowsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3ImportFlowRequest;
}

export const ImportProjectsLocationsAgentsFlowsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3ImportFlowRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+parent}/flows:import",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ImportProjectsLocationsAgentsFlowsRequest>;

export type ImportProjectsLocationsAgentsFlowsResponse =
  GoogleLongrunningOperation;
export const ImportProjectsLocationsAgentsFlowsResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type ImportProjectsLocationsAgentsFlowsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const importProjectsLocationsAgentsFlows: API.OperationMethod<
  ImportProjectsLocationsAgentsFlowsRequest,
  ImportProjectsLocationsAgentsFlowsResponse,
  ImportProjectsLocationsAgentsFlowsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ImportProjectsLocationsAgentsFlowsRequest,
  output: ImportProjectsLocationsAgentsFlowsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetValidationResultProjectsLocationsAgentsFlowsRequest {
  languageCode?: string;
  name: string;
}

export const GetValidationResultProjectsLocationsAgentsFlowsRequest =
  /*@__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetValidationResultProjectsLocationsAgentsFlowsRequest>;

export type GetValidationResultProjectsLocationsAgentsFlowsResponse =
  GoogleCloudDialogflowCxV3FlowValidationResult;
export const GetValidationResultProjectsLocationsAgentsFlowsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3FlowValidationResult;

export type GetValidationResultProjectsLocationsAgentsFlowsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getValidationResultProjectsLocationsAgentsFlows: API.OperationMethod<
  GetValidationResultProjectsLocationsAgentsFlowsRequest,
  GetValidationResultProjectsLocationsAgentsFlowsResponse,
  GetValidationResultProjectsLocationsAgentsFlowsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetValidationResultProjectsLocationsAgentsFlowsRequest,
  output: GetValidationResultProjectsLocationsAgentsFlowsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsAgentsFlowsRequest {
  languageCode?: string;
  name: string;
}

export const GetProjectsLocationsAgentsFlowsRequest =
  /*@__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAgentsFlowsRequest>;

export type GetProjectsLocationsAgentsFlowsResponse =
  GoogleCloudDialogflowCxV3Flow;
export const GetProjectsLocationsAgentsFlowsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Flow;

export type GetProjectsLocationsAgentsFlowsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsFlows: API.OperationMethod<
  GetProjectsLocationsAgentsFlowsRequest,
  GetProjectsLocationsAgentsFlowsResponse,
  GetProjectsLocationsAgentsFlowsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsFlowsRequest,
  output: GetProjectsLocationsAgentsFlowsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest {
  parent: string;
  pageSize?: number;
  languageCode?: string;
  pageToken?: string;
}

export const ListProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/transitionRouteGroups" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest>;

export type ListProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse =
  GoogleCloudDialogflowCxV3ListTransitionRouteGroupsResponse;
export const ListProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3ListTransitionRouteGroupsResponse;

export type ListProjectsLocationsAgentsFlowsTransitionRouteGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsFlowsTransitionRouteGroups: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest,
  ListProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse,
  ListProjectsLocationsAgentsFlowsTransitionRouteGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest,
  output: ListProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest {
  name: string;
  updateMask?: string;
  languageCode?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3TransitionRouteGroup;
}

export const PatchProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    body: Schema.optional(GoogleCloudDialogflowCxV3TransitionRouteGroup).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest>;

export type PatchProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse =
  GoogleCloudDialogflowCxV3TransitionRouteGroup;
export const PatchProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3TransitionRouteGroup;

export type PatchProjectsLocationsAgentsFlowsTransitionRouteGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsAgentsFlowsTransitionRouteGroups: API.OperationMethod<
  PatchProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest,
  PatchProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse,
  PatchProjectsLocationsAgentsFlowsTransitionRouteGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest,
  output: PatchProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest {
  name: string;
  force?: boolean;
}

export const DeleteProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest>;

export type DeleteProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentsFlowsTransitionRouteGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsAgentsFlowsTransitionRouteGroups: API.OperationMethod<
  DeleteProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest,
  DeleteProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse,
  DeleteProjectsLocationsAgentsFlowsTransitionRouteGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest,
  output: DeleteProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest {
  languageCode?: string;
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3TransitionRouteGroup;
}

export const CreateProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3TransitionRouteGroup).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+parent}/transitionRouteGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest>;

export type CreateProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse =
  GoogleCloudDialogflowCxV3TransitionRouteGroup;
export const CreateProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3TransitionRouteGroup;

export type CreateProjectsLocationsAgentsFlowsTransitionRouteGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsAgentsFlowsTransitionRouteGroups: API.OperationMethod<
  CreateProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest,
  CreateProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse,
  CreateProjectsLocationsAgentsFlowsTransitionRouteGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest,
  output: CreateProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest {
  languageCode?: string;
  name: string;
}

export const GetProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest>;

export type GetProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse =
  GoogleCloudDialogflowCxV3TransitionRouteGroup;
export const GetProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3TransitionRouteGroup;

export type GetProjectsLocationsAgentsFlowsTransitionRouteGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsFlowsTransitionRouteGroups: API.OperationMethod<
  GetProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest,
  GetProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse,
  GetProjectsLocationsAgentsFlowsTransitionRouteGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest,
  output: GetProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsAgentsFlowsPagesRequest {
  languageCode?: string;
  name: string;
}

export const GetProjectsLocationsAgentsFlowsPagesRequest =
  /*@__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAgentsFlowsPagesRequest>;

export type GetProjectsLocationsAgentsFlowsPagesResponse =
  GoogleCloudDialogflowCxV3Page;
export const GetProjectsLocationsAgentsFlowsPagesResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Page;

export type GetProjectsLocationsAgentsFlowsPagesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsFlowsPages: API.OperationMethod<
  GetProjectsLocationsAgentsFlowsPagesRequest,
  GetProjectsLocationsAgentsFlowsPagesResponse,
  GetProjectsLocationsAgentsFlowsPagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsFlowsPagesRequest,
  output: GetProjectsLocationsAgentsFlowsPagesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsAgentsFlowsPagesRequest {
  parent: string;
  languageCode?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3Page;
}

export const CreateProjectsLocationsAgentsFlowsPagesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    body: Schema.optional(GoogleCloudDialogflowCxV3Page).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+parent}/pages", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAgentsFlowsPagesRequest>;

export type CreateProjectsLocationsAgentsFlowsPagesResponse =
  GoogleCloudDialogflowCxV3Page;
export const CreateProjectsLocationsAgentsFlowsPagesResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Page;

export type CreateProjectsLocationsAgentsFlowsPagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsAgentsFlowsPages: API.OperationMethod<
  CreateProjectsLocationsAgentsFlowsPagesRequest,
  CreateProjectsLocationsAgentsFlowsPagesResponse,
  CreateProjectsLocationsAgentsFlowsPagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsFlowsPagesRequest,
  output: CreateProjectsLocationsAgentsFlowsPagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsFlowsPagesRequest {
  languageCode?: string;
  pageToken?: string;
  parent: string;
  pageSize?: number;
}

export const ListProjectsLocationsAgentsFlowsPagesRequest =
  /*@__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/pages" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAgentsFlowsPagesRequest>;

export type ListProjectsLocationsAgentsFlowsPagesResponse =
  GoogleCloudDialogflowCxV3ListPagesResponse;
export const ListProjectsLocationsAgentsFlowsPagesResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3ListPagesResponse;

export type ListProjectsLocationsAgentsFlowsPagesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsFlowsPages: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsFlowsPagesRequest,
  ListProjectsLocationsAgentsFlowsPagesResponse,
  ListProjectsLocationsAgentsFlowsPagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsFlowsPagesRequest,
  output: ListProjectsLocationsAgentsFlowsPagesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsAgentsFlowsPagesRequest {
  languageCode?: string;
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3Page;
}

export const PatchProjectsLocationsAgentsFlowsPagesRequest =
  /*@__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowCxV3Page).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsAgentsFlowsPagesRequest>;

export type PatchProjectsLocationsAgentsFlowsPagesResponse =
  GoogleCloudDialogflowCxV3Page;
export const PatchProjectsLocationsAgentsFlowsPagesResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Page;

export type PatchProjectsLocationsAgentsFlowsPagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsAgentsFlowsPages: API.OperationMethod<
  PatchProjectsLocationsAgentsFlowsPagesRequest,
  PatchProjectsLocationsAgentsFlowsPagesResponse,
  PatchProjectsLocationsAgentsFlowsPagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsFlowsPagesRequest,
  output: PatchProjectsLocationsAgentsFlowsPagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAgentsFlowsPagesRequest {
  name: string;
  force?: boolean;
}

export const DeleteProjectsLocationsAgentsFlowsPagesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAgentsFlowsPagesRequest>;

export type DeleteProjectsLocationsAgentsFlowsPagesResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsFlowsPagesResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentsFlowsPagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsAgentsFlowsPages: API.OperationMethod<
  DeleteProjectsLocationsAgentsFlowsPagesRequest,
  DeleteProjectsLocationsAgentsFlowsPagesResponse,
  DeleteProjectsLocationsAgentsFlowsPagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsFlowsPagesRequest,
  output: DeleteProjectsLocationsAgentsFlowsPagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface LoadProjectsLocationsAgentsFlowsVersionsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3LoadVersionRequest;
}

export const LoadProjectsLocationsAgentsFlowsVersionsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowCxV3LoadVersionRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+name}:load", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<LoadProjectsLocationsAgentsFlowsVersionsRequest>;

export type LoadProjectsLocationsAgentsFlowsVersionsResponse =
  GoogleLongrunningOperation;
export const LoadProjectsLocationsAgentsFlowsVersionsResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type LoadProjectsLocationsAgentsFlowsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const loadProjectsLocationsAgentsFlowsVersions: API.OperationMethod<
  LoadProjectsLocationsAgentsFlowsVersionsRequest,
  LoadProjectsLocationsAgentsFlowsVersionsResponse,
  LoadProjectsLocationsAgentsFlowsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: LoadProjectsLocationsAgentsFlowsVersionsRequest,
  output: LoadProjectsLocationsAgentsFlowsVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsFlowsVersionsRequest {
  name: string;
}

export const GetProjectsLocationsAgentsFlowsVersionsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAgentsFlowsVersionsRequest>;

export type GetProjectsLocationsAgentsFlowsVersionsResponse =
  GoogleCloudDialogflowCxV3Version;
export const GetProjectsLocationsAgentsFlowsVersionsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Version;

export type GetProjectsLocationsAgentsFlowsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsFlowsVersions: API.OperationMethod<
  GetProjectsLocationsAgentsFlowsVersionsRequest,
  GetProjectsLocationsAgentsFlowsVersionsResponse,
  GetProjectsLocationsAgentsFlowsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsFlowsVersionsRequest,
  output: GetProjectsLocationsAgentsFlowsVersionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsAgentsFlowsVersionsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsAgentsFlowsVersionsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/versions" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAgentsFlowsVersionsRequest>;

export type ListProjectsLocationsAgentsFlowsVersionsResponse =
  GoogleCloudDialogflowCxV3ListVersionsResponse;
export const ListProjectsLocationsAgentsFlowsVersionsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3ListVersionsResponse;

export type ListProjectsLocationsAgentsFlowsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsFlowsVersions: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsFlowsVersionsRequest,
  ListProjectsLocationsAgentsFlowsVersionsResponse,
  ListProjectsLocationsAgentsFlowsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsFlowsVersionsRequest,
  output: ListProjectsLocationsAgentsFlowsVersionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsAgentsFlowsVersionsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3Version;
}

export const PatchProjectsLocationsAgentsFlowsVersionsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowCxV3Version).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsAgentsFlowsVersionsRequest>;

export type PatchProjectsLocationsAgentsFlowsVersionsResponse =
  GoogleCloudDialogflowCxV3Version;
export const PatchProjectsLocationsAgentsFlowsVersionsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Version;

export type PatchProjectsLocationsAgentsFlowsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsAgentsFlowsVersions: API.OperationMethod<
  PatchProjectsLocationsAgentsFlowsVersionsRequest,
  PatchProjectsLocationsAgentsFlowsVersionsResponse,
  PatchProjectsLocationsAgentsFlowsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsFlowsVersionsRequest,
  output: PatchProjectsLocationsAgentsFlowsVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAgentsFlowsVersionsRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentsFlowsVersionsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAgentsFlowsVersionsRequest>;

export type DeleteProjectsLocationsAgentsFlowsVersionsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsFlowsVersionsResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentsFlowsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsAgentsFlowsVersions: API.OperationMethod<
  DeleteProjectsLocationsAgentsFlowsVersionsRequest,
  DeleteProjectsLocationsAgentsFlowsVersionsResponse,
  DeleteProjectsLocationsAgentsFlowsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsFlowsVersionsRequest,
  output: DeleteProjectsLocationsAgentsFlowsVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAgentsFlowsVersionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3Version;
}

export const CreateProjectsLocationsAgentsFlowsVersionsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3Version).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+parent}/versions", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAgentsFlowsVersionsRequest>;

export type CreateProjectsLocationsAgentsFlowsVersionsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsAgentsFlowsVersionsResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsAgentsFlowsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsAgentsFlowsVersions: API.OperationMethod<
  CreateProjectsLocationsAgentsFlowsVersionsRequest,
  CreateProjectsLocationsAgentsFlowsVersionsResponse,
  CreateProjectsLocationsAgentsFlowsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsFlowsVersionsRequest,
  output: CreateProjectsLocationsAgentsFlowsVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CompareVersionsProjectsLocationsAgentsFlowsVersionsRequest {
  baseVersion: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3CompareVersionsRequest;
}

export const CompareVersionsProjectsLocationsAgentsFlowsVersionsRequest =
  /*@__PURE__*/ Schema.Struct({
    baseVersion: Schema.String.pipe(T.HttpPath("baseVersion")),
    body: Schema.optional(GoogleCloudDialogflowCxV3CompareVersionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+baseVersion}:compareVersions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CompareVersionsProjectsLocationsAgentsFlowsVersionsRequest>;

export type CompareVersionsProjectsLocationsAgentsFlowsVersionsResponse =
  GoogleCloudDialogflowCxV3CompareVersionsResponse;
export const CompareVersionsProjectsLocationsAgentsFlowsVersionsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3CompareVersionsResponse;

export type CompareVersionsProjectsLocationsAgentsFlowsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const compareVersionsProjectsLocationsAgentsFlowsVersions: API.OperationMethod<
  CompareVersionsProjectsLocationsAgentsFlowsVersionsRequest,
  CompareVersionsProjectsLocationsAgentsFlowsVersionsResponse,
  CompareVersionsProjectsLocationsAgentsFlowsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CompareVersionsProjectsLocationsAgentsFlowsVersionsRequest,
  output: CompareVersionsProjectsLocationsAgentsFlowsVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExportProjectsLocationsAgentsPlaybooksRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3ExportPlaybookRequest;
}

export const ExportProjectsLocationsAgentsPlaybooksRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowCxV3ExportPlaybookRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+name}:export", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<ExportProjectsLocationsAgentsPlaybooksRequest>;

export type ExportProjectsLocationsAgentsPlaybooksResponse =
  GoogleLongrunningOperation;
export const ExportProjectsLocationsAgentsPlaybooksResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type ExportProjectsLocationsAgentsPlaybooksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const exportProjectsLocationsAgentsPlaybooks: API.OperationMethod<
  ExportProjectsLocationsAgentsPlaybooksRequest,
  ExportProjectsLocationsAgentsPlaybooksResponse,
  ExportProjectsLocationsAgentsPlaybooksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ExportProjectsLocationsAgentsPlaybooksRequest,
  output: ExportProjectsLocationsAgentsPlaybooksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsPlaybooksRequest {
  name: string;
}

export const GetProjectsLocationsAgentsPlaybooksRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAgentsPlaybooksRequest>;

export type GetProjectsLocationsAgentsPlaybooksResponse =
  GoogleCloudDialogflowCxV3Playbook;
export const GetProjectsLocationsAgentsPlaybooksResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Playbook;

export type GetProjectsLocationsAgentsPlaybooksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsPlaybooks: API.OperationMethod<
  GetProjectsLocationsAgentsPlaybooksRequest,
  GetProjectsLocationsAgentsPlaybooksResponse,
  GetProjectsLocationsAgentsPlaybooksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsPlaybooksRequest,
  output: GetProjectsLocationsAgentsPlaybooksResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsAgentsPlaybooksRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentsPlaybooksRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAgentsPlaybooksRequest>;

export type DeleteProjectsLocationsAgentsPlaybooksResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsPlaybooksResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentsPlaybooksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsAgentsPlaybooks: API.OperationMethod<
  DeleteProjectsLocationsAgentsPlaybooksRequest,
  DeleteProjectsLocationsAgentsPlaybooksResponse,
  DeleteProjectsLocationsAgentsPlaybooksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsPlaybooksRequest,
  output: DeleteProjectsLocationsAgentsPlaybooksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsPlaybooksRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsAgentsPlaybooksRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/playbooks" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAgentsPlaybooksRequest>;

export type ListProjectsLocationsAgentsPlaybooksResponse =
  GoogleCloudDialogflowCxV3ListPlaybooksResponse;
export const ListProjectsLocationsAgentsPlaybooksResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3ListPlaybooksResponse;

export type ListProjectsLocationsAgentsPlaybooksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsPlaybooks: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsPlaybooksRequest,
  ListProjectsLocationsAgentsPlaybooksResponse,
  ListProjectsLocationsAgentsPlaybooksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsPlaybooksRequest,
  output: ListProjectsLocationsAgentsPlaybooksResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsAgentsPlaybooksRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3Playbook;
}

export const PatchProjectsLocationsAgentsPlaybooksRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowCxV3Playbook).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsAgentsPlaybooksRequest>;

export type PatchProjectsLocationsAgentsPlaybooksResponse =
  GoogleCloudDialogflowCxV3Playbook;
export const PatchProjectsLocationsAgentsPlaybooksResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Playbook;

export type PatchProjectsLocationsAgentsPlaybooksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsAgentsPlaybooks: API.OperationMethod<
  PatchProjectsLocationsAgentsPlaybooksRequest,
  PatchProjectsLocationsAgentsPlaybooksResponse,
  PatchProjectsLocationsAgentsPlaybooksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsPlaybooksRequest,
  output: PatchProjectsLocationsAgentsPlaybooksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAgentsPlaybooksRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3Playbook;
}

export const CreateProjectsLocationsAgentsPlaybooksRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3Playbook).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+parent}/playbooks", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAgentsPlaybooksRequest>;

export type CreateProjectsLocationsAgentsPlaybooksResponse =
  GoogleCloudDialogflowCxV3Playbook;
export const CreateProjectsLocationsAgentsPlaybooksResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Playbook;

export type CreateProjectsLocationsAgentsPlaybooksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsAgentsPlaybooks: API.OperationMethod<
  CreateProjectsLocationsAgentsPlaybooksRequest,
  CreateProjectsLocationsAgentsPlaybooksResponse,
  CreateProjectsLocationsAgentsPlaybooksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsPlaybooksRequest,
  output: CreateProjectsLocationsAgentsPlaybooksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ImportProjectsLocationsAgentsPlaybooksRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3ImportPlaybookRequest;
}

export const ImportProjectsLocationsAgentsPlaybooksRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3ImportPlaybookRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+parent}/playbooks:import",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ImportProjectsLocationsAgentsPlaybooksRequest>;

export type ImportProjectsLocationsAgentsPlaybooksResponse =
  GoogleLongrunningOperation;
export const ImportProjectsLocationsAgentsPlaybooksResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type ImportProjectsLocationsAgentsPlaybooksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const importProjectsLocationsAgentsPlaybooks: API.OperationMethod<
  ImportProjectsLocationsAgentsPlaybooksRequest,
  ImportProjectsLocationsAgentsPlaybooksResponse,
  ImportProjectsLocationsAgentsPlaybooksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ImportProjectsLocationsAgentsPlaybooksRequest,
  output: ImportProjectsLocationsAgentsPlaybooksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsPlaybooksVersionsRequest {
  name: string;
}

export const GetProjectsLocationsAgentsPlaybooksVersionsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAgentsPlaybooksVersionsRequest>;

export type GetProjectsLocationsAgentsPlaybooksVersionsResponse =
  GoogleCloudDialogflowCxV3PlaybookVersion;
export const GetProjectsLocationsAgentsPlaybooksVersionsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3PlaybookVersion;

export type GetProjectsLocationsAgentsPlaybooksVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsPlaybooksVersions: API.OperationMethod<
  GetProjectsLocationsAgentsPlaybooksVersionsRequest,
  GetProjectsLocationsAgentsPlaybooksVersionsResponse,
  GetProjectsLocationsAgentsPlaybooksVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsPlaybooksVersionsRequest,
  output: GetProjectsLocationsAgentsPlaybooksVersionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface RestoreProjectsLocationsAgentsPlaybooksVersionsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3RestorePlaybookVersionRequest;
}

export const RestoreProjectsLocationsAgentsPlaybooksVersionsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3RestorePlaybookVersionRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+name}:restore", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<RestoreProjectsLocationsAgentsPlaybooksVersionsRequest>;

export type RestoreProjectsLocationsAgentsPlaybooksVersionsResponse =
  GoogleCloudDialogflowCxV3RestorePlaybookVersionResponse;
export const RestoreProjectsLocationsAgentsPlaybooksVersionsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3RestorePlaybookVersionResponse;

export type RestoreProjectsLocationsAgentsPlaybooksVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const restoreProjectsLocationsAgentsPlaybooksVersions: API.OperationMethod<
  RestoreProjectsLocationsAgentsPlaybooksVersionsRequest,
  RestoreProjectsLocationsAgentsPlaybooksVersionsResponse,
  RestoreProjectsLocationsAgentsPlaybooksVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RestoreProjectsLocationsAgentsPlaybooksVersionsRequest,
  output: RestoreProjectsLocationsAgentsPlaybooksVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsPlaybooksVersionsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsAgentsPlaybooksVersionsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/versions" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAgentsPlaybooksVersionsRequest>;

export type ListProjectsLocationsAgentsPlaybooksVersionsResponse =
  GoogleCloudDialogflowCxV3ListPlaybookVersionsResponse;
export const ListProjectsLocationsAgentsPlaybooksVersionsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3ListPlaybookVersionsResponse;

export type ListProjectsLocationsAgentsPlaybooksVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsPlaybooksVersions: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsPlaybooksVersionsRequest,
  ListProjectsLocationsAgentsPlaybooksVersionsResponse,
  ListProjectsLocationsAgentsPlaybooksVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsPlaybooksVersionsRequest,
  output: ListProjectsLocationsAgentsPlaybooksVersionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsAgentsPlaybooksVersionsRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentsPlaybooksVersionsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAgentsPlaybooksVersionsRequest>;

export type DeleteProjectsLocationsAgentsPlaybooksVersionsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsPlaybooksVersionsResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentsPlaybooksVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsAgentsPlaybooksVersions: API.OperationMethod<
  DeleteProjectsLocationsAgentsPlaybooksVersionsRequest,
  DeleteProjectsLocationsAgentsPlaybooksVersionsResponse,
  DeleteProjectsLocationsAgentsPlaybooksVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsPlaybooksVersionsRequest,
  output: DeleteProjectsLocationsAgentsPlaybooksVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAgentsPlaybooksVersionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3PlaybookVersion;
}

export const CreateProjectsLocationsAgentsPlaybooksVersionsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3PlaybookVersion).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+parent}/versions", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAgentsPlaybooksVersionsRequest>;

export type CreateProjectsLocationsAgentsPlaybooksVersionsResponse =
  GoogleCloudDialogflowCxV3PlaybookVersion;
export const CreateProjectsLocationsAgentsPlaybooksVersionsResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3PlaybookVersion;

export type CreateProjectsLocationsAgentsPlaybooksVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsAgentsPlaybooksVersions: API.OperationMethod<
  CreateProjectsLocationsAgentsPlaybooksVersionsRequest,
  CreateProjectsLocationsAgentsPlaybooksVersionsResponse,
  CreateProjectsLocationsAgentsPlaybooksVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsPlaybooksVersionsRequest,
  output: CreateProjectsLocationsAgentsPlaybooksVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsPlaybooksExamplesRequest {
  name: string;
}

export const GetProjectsLocationsAgentsPlaybooksExamplesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAgentsPlaybooksExamplesRequest>;

export type GetProjectsLocationsAgentsPlaybooksExamplesResponse =
  GoogleCloudDialogflowCxV3Example;
export const GetProjectsLocationsAgentsPlaybooksExamplesResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Example;

export type GetProjectsLocationsAgentsPlaybooksExamplesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsPlaybooksExamples: API.OperationMethod<
  GetProjectsLocationsAgentsPlaybooksExamplesRequest,
  GetProjectsLocationsAgentsPlaybooksExamplesResponse,
  GetProjectsLocationsAgentsPlaybooksExamplesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsPlaybooksExamplesRequest,
  output: GetProjectsLocationsAgentsPlaybooksExamplesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsAgentsPlaybooksExamplesRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentsPlaybooksExamplesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAgentsPlaybooksExamplesRequest>;

export type DeleteProjectsLocationsAgentsPlaybooksExamplesResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsPlaybooksExamplesResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentsPlaybooksExamplesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsAgentsPlaybooksExamples: API.OperationMethod<
  DeleteProjectsLocationsAgentsPlaybooksExamplesRequest,
  DeleteProjectsLocationsAgentsPlaybooksExamplesResponse,
  DeleteProjectsLocationsAgentsPlaybooksExamplesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsPlaybooksExamplesRequest,
  output: DeleteProjectsLocationsAgentsPlaybooksExamplesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsPlaybooksExamplesRequest {
  pageToken?: string;
  languageCode?: string;
  parent: string;
  pageSize?: number;
}

export const ListProjectsLocationsAgentsPlaybooksExamplesRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/examples" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAgentsPlaybooksExamplesRequest>;

export type ListProjectsLocationsAgentsPlaybooksExamplesResponse =
  GoogleCloudDialogflowCxV3ListExamplesResponse;
export const ListProjectsLocationsAgentsPlaybooksExamplesResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3ListExamplesResponse;

export type ListProjectsLocationsAgentsPlaybooksExamplesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsPlaybooksExamples: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsPlaybooksExamplesRequest,
  ListProjectsLocationsAgentsPlaybooksExamplesResponse,
  ListProjectsLocationsAgentsPlaybooksExamplesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsPlaybooksExamplesRequest,
  output: ListProjectsLocationsAgentsPlaybooksExamplesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsAgentsPlaybooksExamplesRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3Example;
}

export const PatchProjectsLocationsAgentsPlaybooksExamplesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowCxV3Example).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsAgentsPlaybooksExamplesRequest>;

export type PatchProjectsLocationsAgentsPlaybooksExamplesResponse =
  GoogleCloudDialogflowCxV3Example;
export const PatchProjectsLocationsAgentsPlaybooksExamplesResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Example;

export type PatchProjectsLocationsAgentsPlaybooksExamplesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsAgentsPlaybooksExamples: API.OperationMethod<
  PatchProjectsLocationsAgentsPlaybooksExamplesRequest,
  PatchProjectsLocationsAgentsPlaybooksExamplesResponse,
  PatchProjectsLocationsAgentsPlaybooksExamplesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsPlaybooksExamplesRequest,
  output: PatchProjectsLocationsAgentsPlaybooksExamplesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAgentsPlaybooksExamplesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3Example;
}

export const CreateProjectsLocationsAgentsPlaybooksExamplesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3Example).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+parent}/examples", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAgentsPlaybooksExamplesRequest>;

export type CreateProjectsLocationsAgentsPlaybooksExamplesResponse =
  GoogleCloudDialogflowCxV3Example;
export const CreateProjectsLocationsAgentsPlaybooksExamplesResponse =
  /*@__PURE__*/ GoogleCloudDialogflowCxV3Example;

export type CreateProjectsLocationsAgentsPlaybooksExamplesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsAgentsPlaybooksExamples: API.OperationMethod<
  CreateProjectsLocationsAgentsPlaybooksExamplesRequest,
  CreateProjectsLocationsAgentsPlaybooksExamplesResponse,
  CreateProjectsLocationsAgentsPlaybooksExamplesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsPlaybooksExamplesRequest,
  output: CreateProjectsLocationsAgentsPlaybooksExamplesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsOperationsRequest {
  pageSize?: number;
  returnPartialSuccess?: boolean;
  pageToken?: string;
  name: string;
  filter?: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse =
  GoogleLongrunningListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ GoogleLongrunningListOperationsResponse;

export type ListProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsOperationsRequest,
  ListProjectsLocationsOperationsResponse,
  ListProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOperationsRequest,
  output: ListProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CancelProjectsLocationsOperationsRequest {
  name: string;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CancelProjectsLocationsOperationsRequest>;

export type CancelProjectsLocationsOperationsResponse = GoogleProtobufEmpty;
export const CancelProjectsLocationsOperationsResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type CancelProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const cancelProjectsLocationsOperations: API.OperationMethod<
  CancelProjectsLocationsOperationsRequest,
  CancelProjectsLocationsOperationsResponse,
  CancelProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsOperationsRequest,
  output: CancelProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsOperationsRequest {
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsOperationsRequest>;

export type GetProjectsLocationsOperationsResponse = GoogleLongrunningOperation;
export const GetProjectsLocationsOperationsResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type GetProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsOperations: API.OperationMethod<
  GetProjectsLocationsOperationsRequest,
  GetProjectsLocationsOperationsResponse,
  GetProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOperationsRequest,
  output: GetProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsOperationsRequest {
  pageToken?: string;
  returnPartialSuccess?: boolean;
  pageSize?: number;
  filter?: string;
  name: string;
}

export const ListProjectsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsOperationsRequest>;

export type ListProjectsOperationsResponse =
  GoogleLongrunningListOperationsResponse;
export const ListProjectsOperationsResponse =
  /*@__PURE__*/ GoogleLongrunningListOperationsResponse;

export type ListProjectsOperationsError = DefaultErrors | NotFound | Forbidden;

export const listProjectsOperations: API.PaginatedOperationMethod<
  ListProjectsOperationsRequest,
  ListProjectsOperationsResponse,
  ListProjectsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsOperationsRequest,
  output: ListProjectsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CancelProjectsOperationsRequest {
  name: string;
}

export const CancelProjectsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CancelProjectsOperationsRequest>;

export type CancelProjectsOperationsResponse = GoogleProtobufEmpty;
export const CancelProjectsOperationsResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type CancelProjectsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const cancelProjectsOperations: API.OperationMethod<
  CancelProjectsOperationsRequest,
  CancelProjectsOperationsResponse,
  CancelProjectsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelProjectsOperationsRequest,
  output: CancelProjectsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsOperationsRequest {
  name: string;
}

export const GetProjectsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsOperationsRequest>;

export type GetProjectsOperationsResponse = GoogleLongrunningOperation;
export const GetProjectsOperationsResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type GetProjectsOperationsError = DefaultErrors | NotFound | Forbidden;

export const getProjectsOperations: API.OperationMethod<
  GetProjectsOperationsRequest,
  GetProjectsOperationsResponse,
  GetProjectsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsOperationsRequest,
  output: GetProjectsOperationsResponse,
  errors: [NotFound, Forbidden],
}));
