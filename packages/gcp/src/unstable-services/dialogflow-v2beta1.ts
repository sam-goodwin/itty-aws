// ==========================================================================
// Dialogflow API (dialogflow v2beta1)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "dialogflow",
  version: "v2beta1",
  rootUrl: "https://dialogflow.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleCloudDialogflowV2beta1Participant {
  obfuscatedExternalUserId?: string;
  role?:
    | "ROLE_UNSPECIFIED"
    | "HUMAN_AGENT"
    | "AUTOMATED_AGENT"
    | "END_USER"
    | (string & {});
  documentsMetadataFilters?: Record<string, string>;
  agentDesktopSource?:
    | "AGENT_DESKTOP_SOURCE_UNSPECIFIED"
    | "LIVE_PERSON"
    | "GENESYS_CLOUD"
    | "TWILIO"
    | "SALESFORCE"
    | "OTHER"
    | (string & {});
  name?: string;
}

export const GoogleCloudDialogflowV2beta1Participant: Schema.Schema<GoogleCloudDialogflowV2beta1Participant> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    obfuscatedExternalUserId: Schema.optional(Schema.String),
    role: Schema.optional(Schema.String),
    documentsMetadataFilters: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    agentDesktopSource: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1Participant" });

export interface GoogleCloudDialogflowV2beta1FreeFormSuggestion {
  response?: string;
}

export const GoogleCloudDialogflowV2beta1FreeFormSuggestion: Schema.Schema<GoogleCloudDialogflowV2beta1FreeFormSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    response: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1FreeFormSuggestion" });

export interface GoogleCloudDialogflowV2beta1SummarySuggestionSummarySection {
  section?: string;
  summary?: string;
}

export const GoogleCloudDialogflowV2beta1SummarySuggestionSummarySection: Schema.Schema<GoogleCloudDialogflowV2beta1SummarySuggestionSummarySection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    section: Schema.optional(Schema.String),
    summary: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SummarySuggestionSummarySection",
  });

export interface GoogleCloudDialogflowV2beta1SummarySuggestion {
  summarySections?: ReadonlyArray<GoogleCloudDialogflowV2beta1SummarySuggestionSummarySection>;
}

export const GoogleCloudDialogflowV2beta1SummarySuggestion: Schema.Schema<GoogleCloudDialogflowV2beta1SummarySuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    summarySections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SummarySuggestionSummarySection),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1SummarySuggestion" });

export interface GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSources {
  instructionIndexes?: ReadonlyArray<number>;
}

export const GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSources: Schema.Schema<GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSources> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion: Schema.Schema<GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResult: Schema.Schema<GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    duplicateSuggestions: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResult",
  });

export interface GoogleCloudDialogflowV2beta1AgentCoachingSuggestionAgentActionSuggestion {
  sources?: GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSources;
  duplicateCheckResult?: GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResult;
  agentAction?: string;
}

export const GoogleCloudDialogflowV2beta1AgentCoachingSuggestionAgentActionSuggestion: Schema.Schema<GoogleCloudDialogflowV2beta1AgentCoachingSuggestionAgentActionSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sources: Schema.optional(
      GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSources,
    ),
    duplicateCheckResult: Schema.optional(
      GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResult,
    ),
    agentAction: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1AgentCoachingSuggestionAgentActionSuggestion",
  });

export interface GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSampleResponse {
  sources?: GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSources;
  duplicateCheckResult?: GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResult;
  responseText?: string;
}

export const GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSampleResponse: Schema.Schema<GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSampleResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export interface GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion {
  answerRecord?: string;
  suggestionIndex?: number;
  similarityScore?: number;
}

export const GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion: Schema.Schema<GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answerRecord: Schema.optional(Schema.String),
    suggestionIndex: Schema.optional(Schema.Number),
    similarityScore: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion",
  });

export interface GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResult {
  duplicateSuggestions?: ReadonlyArray<GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion>;
}

export const GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResult: Schema.Schema<GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  duplicateCheckResult?: GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResult;
  condition?: string;
  displayName?: string;
  systemAction?: string;
  displayDetails?: string;
  triggeringEvent?:
    | "TRIGGER_EVENT_UNSPECIFIED"
    | "END_OF_UTTERANCE"
    | "MANUAL_CALL"
    | "CUSTOMER_MESSAGE"
    | "AGENT_MESSAGE"
    | "TOOL_CALL_COMPLETION"
    | (string & {});
  agentAction?: string;
}

export const GoogleCloudDialogflowV2beta1AgentCoachingInstruction: Schema.Schema<GoogleCloudDialogflowV2beta1AgentCoachingInstruction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    duplicateCheckResult: Schema.optional(
      GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResult,
    ),
    condition: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    systemAction: Schema.optional(Schema.String),
    displayDetails: Schema.optional(Schema.String),
    triggeringEvent: Schema.optional(Schema.String),
    agentAction: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1AgentCoachingInstruction",
  });

export interface GoogleCloudDialogflowV2beta1AgentCoachingSuggestion {
  agentActionSuggestions?: ReadonlyArray<GoogleCloudDialogflowV2beta1AgentCoachingSuggestionAgentActionSuggestion>;
  sampleResponses?: ReadonlyArray<GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSampleResponse>;
  applicableInstructions?: ReadonlyArray<GoogleCloudDialogflowV2beta1AgentCoachingInstruction>;
}

export const GoogleCloudDialogflowV2beta1AgentCoachingSuggestion: Schema.Schema<GoogleCloudDialogflowV2beta1AgentCoachingSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentActionSuggestions: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1AgentCoachingSuggestionAgentActionSuggestion,
      ),
    ),
    sampleResponses: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSampleResponse,
      ),
    ),
    applicableInstructions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1AgentCoachingInstruction),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1AgentCoachingSuggestion",
  });

export interface GoogleCloudDialogflowV2beta1ToolCall {
  toolDisplayName?: string;
  cesToolset?: string;
  createTime?: string;
  state?:
    | "STATE_UNSPECIFIED"
    | "TRIGGERED"
    | "NEEDS_CONFIRMATION"
    | (string & {});
  action?: string;
  cesApp?: string;
  toolDisplayDetails?: string;
  cesTool?: string;
  inputParameters?: Record<string, unknown>;
  answerRecord?: string;
  tool?: string;
}

export const GoogleCloudDialogflowV2beta1ToolCall: Schema.Schema<GoogleCloudDialogflowV2beta1ToolCall> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolDisplayName: Schema.optional(Schema.String),
    cesToolset: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    cesApp: Schema.optional(Schema.String),
    toolDisplayDetails: Schema.optional(Schema.String),
    cesTool: Schema.optional(Schema.String),
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    answerRecord: Schema.optional(Schema.String),
    tool: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ToolCall" });

export interface GoogleCloudDialogflowV2beta1ToolCallResultError {
  message?: string;
}

export const GoogleCloudDialogflowV2beta1ToolCallResultError: Schema.Schema<GoogleCloudDialogflowV2beta1ToolCallResultError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ToolCallResultError",
  });

export interface GoogleCloudDialogflowV2beta1ToolCallResult {
  cesToolset?: string;
  content?: string;
  createTime?: string;
  cesApp?: string;
  action?: string;
  cesTool?: string;
  rawContent?: string;
  tool?: string;
  error?: GoogleCloudDialogflowV2beta1ToolCallResultError;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2beta1ToolCallResult: Schema.Schema<GoogleCloudDialogflowV2beta1ToolCallResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cesToolset: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    cesApp: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    cesTool: Schema.optional(Schema.String),
    rawContent: Schema.optional(Schema.String),
    tool: Schema.optional(Schema.String),
    error: Schema.optional(GoogleCloudDialogflowV2beta1ToolCallResultError),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ToolCallResult" });

export interface GoogleCloudDialogflowV2beta1GeneratorSuggestionToolCallInfo {
  toolCall?: GoogleCloudDialogflowV2beta1ToolCall;
  toolCallResult?: GoogleCloudDialogflowV2beta1ToolCallResult;
}

export const GoogleCloudDialogflowV2beta1GeneratorSuggestionToolCallInfo: Schema.Schema<GoogleCloudDialogflowV2beta1GeneratorSuggestionToolCallInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolCall: Schema.optional(GoogleCloudDialogflowV2beta1ToolCall),
    toolCallResult: Schema.optional(GoogleCloudDialogflowV2beta1ToolCallResult),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1GeneratorSuggestionToolCallInfo",
  });

export interface GoogleCloudDialogflowV2beta1GeneratorSuggestion {
  freeFormSuggestion?: GoogleCloudDialogflowV2beta1FreeFormSuggestion;
  summarySuggestion?: GoogleCloudDialogflowV2beta1SummarySuggestion;
  agentCoachingSuggestion?: GoogleCloudDialogflowV2beta1AgentCoachingSuggestion;
  toolCallInfo?: ReadonlyArray<GoogleCloudDialogflowV2beta1GeneratorSuggestionToolCallInfo>;
}

export const GoogleCloudDialogflowV2beta1GeneratorSuggestion: Schema.Schema<GoogleCloudDialogflowV2beta1GeneratorSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    freeFormSuggestion: Schema.optional(
      GoogleCloudDialogflowV2beta1FreeFormSuggestion,
    ),
    summarySuggestion: Schema.optional(
      GoogleCloudDialogflowV2beta1SummarySuggestion,
    ),
    agentCoachingSuggestion: Schema.optional(
      GoogleCloudDialogflowV2beta1AgentCoachingSuggestion,
    ),
    toolCallInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1GeneratorSuggestionToolCallInfo),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1GeneratorSuggestion",
  });

export interface GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig {
  recentSentencesCount?: number;
}

export const GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig: Schema.Schema<GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    recentSentencesCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig",
  });

export interface GoogleCloudDialogflowV2ToolCallResultError {
  message?: string;
}

export const GoogleCloudDialogflowV2ToolCallResultError: Schema.Schema<GoogleCloudDialogflowV2ToolCallResultError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolCallResultError" });

export interface GoogleCloudDialogflowV2ToolCallResult {
  cesToolset?: string;
  content?: string;
  createTime?: string;
  action?: string;
  cesApp?: string;
  rawContent?: string;
  cesTool?: string;
  answerRecord?: string;
  error?: GoogleCloudDialogflowV2ToolCallResultError;
  tool?: string;
}

export const GoogleCloudDialogflowV2ToolCallResult: Schema.Schema<GoogleCloudDialogflowV2ToolCallResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cesToolset: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    cesApp: Schema.optional(Schema.String),
    rawContent: Schema.optional(Schema.String),
    cesTool: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    error: Schema.optional(GoogleCloudDialogflowV2ToolCallResultError),
    tool: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolCallResult" });

export interface GoogleCloudDialogflowV2beta1Sentiment {
  magnitude?: number;
  score?: number;
}

export const GoogleCloudDialogflowV2beta1Sentiment: Schema.Schema<GoogleCloudDialogflowV2beta1Sentiment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    magnitude: Schema.optional(Schema.Number),
    score: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1Sentiment" });

export interface GoogleCloudDialogflowV2beta1SentimentAnalysisResult {
  queryTextSentiment?: GoogleCloudDialogflowV2beta1Sentiment;
}

export const GoogleCloudDialogflowV2beta1SentimentAnalysisResult: Schema.Schema<GoogleCloudDialogflowV2beta1SentimentAnalysisResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryTextSentiment: Schema.optional(GoogleCloudDialogflowV2beta1Sentiment),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SentimentAnalysisResult",
  });

export interface GoogleCloudDialogflowV2beta1Context {
  parameters?: Record<string, unknown>;
  name?: string;
  lifespanCount?: number;
}

export const GoogleCloudDialogflowV2beta1Context: Schema.Schema<GoogleCloudDialogflowV2beta1Context> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    lifespanCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1Context" });

export interface GoogleCloudDialogflowV2beta1IntentMessageQuickReplies {
  title?: string;
  quickReplies?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageQuickReplies: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageQuickReplies> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    quickReplies: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageQuickReplies",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio {
  audioUri?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audioUri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo {
  key?: string;
  synonyms?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    synonyms: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageImage {
  imageUri?: string;
  accessibilityText?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageImage: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageImage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageUri: Schema.optional(Schema.String),
    accessibilityText: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentMessageImage" });

export interface GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem {
  info?: GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo;
  title?: string;
  description?: string;
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
}

export const GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    info: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo,
    ),
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect {
  items?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply {
  text?: string;
  postbackData?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    postbackData: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation {}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri {
  uri?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial {
  phoneNumber?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    phoneNumber: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction {
  postbackData?: string;
  shareLocation?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation;
  text?: string;
  openUrl?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri;
  dial?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    postbackData: Schema.optional(Schema.String),
    shareLocation: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation,
    ),
    text: Schema.optional(Schema.String),
    openUrl: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri,
    ),
    dial: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion {
  reply?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply;
  action?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  height?: "HEIGHT_UNSPECIFIED" | "SHORT" | "MEDIUM" | "TALL" | (string & {});
  fileUri?: string;
  thumbnailUri?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    height: Schema.optional(Schema.String),
    fileUri: Schema.optional(Schema.String),
    thumbnailUri: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent {
  suggestions?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion>;
  media?: GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia;
  title?: string;
  description?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suggestions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion),
    ),
    media: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia,
    ),
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard {
  cardContents?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent>;
  cardWidth?: "CARD_WIDTH_UNSPECIFIED" | "SMALL" | "MEDIUM" | (string & {});
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cardContents: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent),
    ),
    cardWidth: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion {
  destinationName?: string;
  uri?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destinationName: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech {
  ssml?: string;
  text?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ssml: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction {
  uri?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton {
  title?: string;
  openUriAction?: GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction;
}

export const GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    openUriAction: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageBasicCard {
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton>;
  formattedText?: string;
  title?: string;
  subtitle?: string;
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
}

export const GoogleCloudDialogflowV2beta1IntentMessageBasicCard: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageBasicCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton),
    ),
    formattedText: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    subtitle: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageBasicCard",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction {
  urlTypeHint?:
    | "URL_TYPE_HINT_UNSPECIFIED"
    | "AMP_ACTION"
    | "AMP_CONTENT"
    | (string & {});
  url?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    urlTypeHint: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem {
  footer?: string;
  title?: string;
  description?: string;
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  openUriAction?: GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;
}

export const GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    footer: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
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

export const GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem,
      ),
    ),
    imageDisplayOptions: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageText {
  text?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageText: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageText> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentMessageText" });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmText {
  text?: string;
  rbmSuggestion?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmText: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageRbmText> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    rbmSuggestion: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageRbmText",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject {
  icon?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  contentUrl?: string;
  name?: string;
  largeImage?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  description?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    icon: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
    contentUrl: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    largeImage: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
    description: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageMediaContent {
  mediaType?: "RESPONSE_MEDIA_TYPE_UNSPECIFIED" | "AUDIO" | (string & {});
  mediaObjects?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageMediaContent: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageMediaContent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mediaType: Schema.optional(Schema.String),
    mediaObjects: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageMediaContent",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageSuggestion {
  title?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageSuggestion: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageSuggestion",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageSuggestions {
  suggestions?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageSuggestion>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageSuggestions: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageSuggestions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suggestions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageSuggestion),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageSuggestions",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse {
  textToSpeech?: string;
  ssml?: string;
  displayText?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    textToSpeech: Schema.optional(Schema.String),
    ssml: Schema.optional(Schema.String),
    displayText: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses {
  simpleResponses?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    simpleResponses: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageListSelectItem {
  title?: string;
  description?: string;
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  info?: GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo;
}

export const GoogleCloudDialogflowV2beta1IntentMessageListSelectItem: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageListSelectItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
    info: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageListSelectItem",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageListSelect {
  title?: string;
  items?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageListSelectItem>;
  subtitle?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageListSelect: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageListSelect> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    items: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageListSelectItem),
    ),
    subtitle: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageListSelect",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageCardButton {
  text?: string;
  postback?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageCardButton: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageCardButton> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    postback: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageCardButton",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageCard {
  title?: string;
  subtitle?: string;
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageCardButton>;
  imageUri?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageCard: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    subtitle: Schema.optional(Schema.String),
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageCardButton),
    ),
    imageUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentMessageCard" });

export interface GoogleCloudDialogflowV2beta1IntentMessageColumnProperties {
  header?: string;
  horizontalAlignment?:
    | "HORIZONTAL_ALIGNMENT_UNSPECIFIED"
    | "LEADING"
    | "CENTER"
    | "TRAILING"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1IntentMessageColumnProperties: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageColumnProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    header: Schema.optional(Schema.String),
    horizontalAlignment: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageColumnProperties",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageTableCardCell {
  text?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageTableCardCell: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageTableCardCell> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageTableCardCell",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageTableCardRow {
  cells?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageTableCardCell>;
  dividerAfter?: boolean;
}

export const GoogleCloudDialogflowV2beta1IntentMessageTableCardRow: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageTableCardRow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cells: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageTableCardCell),
    ),
    dividerAfter: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageTableCardRow",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageTableCard {
  title?: string;
  subtitle?: string;
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  columnProperties?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageColumnProperties>;
  rows?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageTableCardRow>;
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageTableCard: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageTableCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    subtitle: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
    columnProperties: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageColumnProperties),
    ),
    rows: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageTableCardRow),
    ),
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageTableCard",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall {
  phoneNumber?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    phoneNumber: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard {
  thumbnailImageAlignment?:
    | "THUMBNAIL_IMAGE_ALIGNMENT_UNSPECIFIED"
    | "LEFT"
    | "RIGHT"
    | (string & {});
  cardOrientation?:
    | "CARD_ORIENTATION_UNSPECIFIED"
    | "HORIZONTAL"
    | "VERTICAL"
    | (string & {});
  cardContent?: GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    thumbnailImageAlignment: Schema.optional(Schema.String),
    cardOrientation: Schema.optional(Schema.String),
    cardContent: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessage {
  quickReplies?: GoogleCloudDialogflowV2beta1IntentMessageQuickReplies;
  telephonyPlayAudio?: GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio;
  carouselSelect?: GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect;
  rbmCarouselRichCard?: GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard;
  linkOutSuggestion?: GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion;
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
  telephonySynthesizeSpeech?: GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech;
  basicCard?: GoogleCloudDialogflowV2beta1IntentMessageBasicCard;
  browseCarouselCard?: GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard;
  text?: GoogleCloudDialogflowV2beta1IntentMessageText;
  payload?: Record<string, unknown>;
  rbmText?: GoogleCloudDialogflowV2beta1IntentMessageRbmText;
  mediaContent?: GoogleCloudDialogflowV2beta1IntentMessageMediaContent;
  suggestions?: GoogleCloudDialogflowV2beta1IntentMessageSuggestions;
  simpleResponses?: GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses;
  listSelect?: GoogleCloudDialogflowV2beta1IntentMessageListSelect;
  card?: GoogleCloudDialogflowV2beta1IntentMessageCard;
  tableCard?: GoogleCloudDialogflowV2beta1IntentMessageTableCard;
  telephonyTransferCall?: GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall;
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  rbmStandaloneRichCard?: GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard;
}

export const GoogleCloudDialogflowV2beta1IntentMessage: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    quickReplies: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageQuickReplies,
    ),
    telephonyPlayAudio: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio,
    ),
    carouselSelect: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect,
    ),
    rbmCarouselRichCard: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard,
    ),
    linkOutSuggestion: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion,
    ),
    platform: Schema.optional(Schema.String),
    telephonySynthesizeSpeech: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech,
    ),
    basicCard: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageBasicCard,
    ),
    browseCarouselCard: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard,
    ),
    text: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageText),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    rbmText: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageRbmText),
    mediaContent: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageMediaContent,
    ),
    suggestions: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageSuggestions,
    ),
    simpleResponses: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses,
    ),
    listSelect: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageListSelect,
    ),
    card: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageCard),
    tableCard: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageTableCard,
    ),
    telephonyTransferCall: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall,
    ),
    image: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
    rbmStandaloneRichCard: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentMessage" });

export interface GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer {
  source?: string;
  answer?: string;
  matchConfidence?: number;
  faqQuestion?: string;
  matchConfidenceLevel?:
    | "MATCH_CONFIDENCE_LEVEL_UNSPECIFIED"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
    answer: Schema.optional(Schema.String),
    matchConfidence: Schema.optional(Schema.Number),
    faqQuestion: Schema.optional(Schema.String),
    matchConfidenceLevel: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAnswers {
  answers?: ReadonlyArray<GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer>;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAnswers: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAnswers> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1KnowledgeAnswers" });

export interface GoogleCloudDialogflowV2beta1IntentParameter {
  prompts?: ReadonlyArray<string>;
  displayName?: string;
  value?: string;
  name?: string;
  defaultValue?: string;
  entityTypeDisplayName?: string;
  mandatory?: boolean;
  isList?: boolean;
}

export const GoogleCloudDialogflowV2beta1IntentParameter: Schema.Schema<GoogleCloudDialogflowV2beta1IntentParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    prompts: Schema.optional(Schema.Array(Schema.String)),
    displayName: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    defaultValue: Schema.optional(Schema.String),
    entityTypeDisplayName: Schema.optional(Schema.String),
    mandatory: Schema.optional(Schema.Boolean),
    isList: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentParameter" });

export interface GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo {
  followupIntentName?: string;
  parentFollowupIntentName?: string;
}

export const GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo: Schema.Schema<GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    followupIntentName: Schema.optional(Schema.String),
    parentFollowupIntentName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo",
  });

export interface GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart {
  entityType?: string;
  alias?: string;
  userDefined?: boolean;
  text?: string;
}

export const GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart: Schema.Schema<GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityType: Schema.optional(Schema.String),
    alias: Schema.optional(Schema.String),
    userDefined: Schema.optional(Schema.Boolean),
    text: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart",
  });

export interface GoogleCloudDialogflowV2beta1IntentTrainingPhrase {
  name?: string;
  type?: "TYPE_UNSPECIFIED" | "EXAMPLE" | "TEMPLATE" | (string & {});
  timesAddedCount?: number;
  parts?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart>;
}

export const GoogleCloudDialogflowV2beta1IntentTrainingPhrase: Schema.Schema<GoogleCloudDialogflowV2beta1IntentTrainingPhrase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    timesAddedCount: Schema.optional(Schema.Number),
    parts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentTrainingPhrase",
  });

export interface GoogleCloudDialogflowV2beta1Intent {
  messages?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessage>;
  mlEnabled?: boolean;
  mlDisabled?: boolean;
  events?: ReadonlyArray<string>;
  parameters?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentParameter>;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2beta1Context>;
  displayName?: string;
  name?: string;
  isFallback?: boolean;
  endInteraction?: boolean;
  parentFollowupIntentName?: string;
  webhookState?:
    | "WEBHOOK_STATE_UNSPECIFIED"
    | "WEBHOOK_STATE_ENABLED"
    | "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"
    | (string & {});
  followupIntentInfo?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo>;
  resetContexts?: boolean;
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
  liveAgentHandoff?: boolean;
  rootFollowupIntentName?: string;
  trainingPhrases?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentTrainingPhrase>;
  priority?: number;
  action?: string;
  inputContextNames?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1Intent: Schema.Schema<GoogleCloudDialogflowV2beta1Intent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessage),
    ),
    mlEnabled: Schema.optional(Schema.Boolean),
    mlDisabled: Schema.optional(Schema.Boolean),
    events: Schema.optional(Schema.Array(Schema.String)),
    parameters: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentParameter),
    ),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1Context),
    ),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    isFallback: Schema.optional(Schema.Boolean),
    endInteraction: Schema.optional(Schema.Boolean),
    parentFollowupIntentName: Schema.optional(Schema.String),
    webhookState: Schema.optional(Schema.String),
    followupIntentInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo),
    ),
    resetContexts: Schema.optional(Schema.Boolean),
    defaultResponsePlatforms: Schema.optional(Schema.Array(Schema.String)),
    liveAgentHandoff: Schema.optional(Schema.Boolean),
    rootFollowupIntentName: Schema.optional(Schema.String),
    trainingPhrases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentTrainingPhrase),
    ),
    priority: Schema.optional(Schema.Number),
    action: Schema.optional(Schema.String),
    inputContextNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1Intent" });

export interface GoogleCloudDialogflowV2beta1QueryResult {
  webhookPayload?: Record<string, unknown>;
  sentimentAnalysisResult?: GoogleCloudDialogflowV2beta1SentimentAnalysisResult;
  fulfillmentText?: string;
  parameters?: Record<string, unknown>;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2beta1Context>;
  diagnosticInfo?: Record<string, unknown>;
  webhookSource?: string;
  allRequiredParamsPresent?: boolean;
  speechRecognitionConfidence?: number;
  queryText?: string;
  fulfillmentMessages?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessage>;
  intentDetectionConfidence?: number;
  knowledgeAnswers?: GoogleCloudDialogflowV2beta1KnowledgeAnswers;
  action?: string;
  cancelsSlotFilling?: boolean;
  intent?: GoogleCloudDialogflowV2beta1Intent;
  languageCode?: string;
}

export const GoogleCloudDialogflowV2beta1QueryResult: Schema.Schema<GoogleCloudDialogflowV2beta1QueryResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webhookPayload: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    sentimentAnalysisResult: Schema.optional(
      GoogleCloudDialogflowV2beta1SentimentAnalysisResult,
    ),
    fulfillmentText: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1Context),
    ),
    diagnosticInfo: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    webhookSource: Schema.optional(Schema.String),
    allRequiredParamsPresent: Schema.optional(Schema.Boolean),
    speechRecognitionConfidence: Schema.optional(Schema.Number),
    queryText: Schema.optional(Schema.String),
    fulfillmentMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessage),
    ),
    intentDetectionConfidence: Schema.optional(Schema.Number),
    knowledgeAnswers: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAnswers,
    ),
    action: Schema.optional(Schema.String),
    cancelsSlotFilling: Schema.optional(Schema.Boolean),
    intent: Schema.optional(GoogleCloudDialogflowV2beta1Intent),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1QueryResult" });

export interface GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest {
  source?: string;
  version?: string;
  payload?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest: Schema.Schema<GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest",
  });

export interface GoogleCloudDialogflowV2beta1WebhookRequest {
  responseId?: string;
  alternativeQueryResults?: ReadonlyArray<GoogleCloudDialogflowV2beta1QueryResult>;
  queryResult?: GoogleCloudDialogflowV2beta1QueryResult;
  originalDetectIntentRequest?: GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest;
  session?: string;
}

export const GoogleCloudDialogflowV2beta1WebhookRequest: Schema.Schema<GoogleCloudDialogflowV2beta1WebhookRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responseId: Schema.optional(Schema.String),
    alternativeQueryResults: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1QueryResult),
    ),
    queryResult: Schema.optional(GoogleCloudDialogflowV2beta1QueryResult),
    originalDetectIntentRequest: Schema.optional(
      GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest,
    ),
    session: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1WebhookRequest" });

export interface GoogleCloudDialogflowV2beta1SuggestionFaqAnswer {
  source?: string;
  confidence?: number;
  question?: string;
  answer?: string;
  metadata?: Record<string, string>;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2beta1SuggestionFaqAnswer: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestionFaqAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
    question: Schema.optional(Schema.String),
    answer: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestionFaqAnswer",
  });

export interface GoogleCloudDialogflowV2beta1AgentAssistantFeedbackSummarizationFeedback {
  summaryText?: string;
  textSections?: Record<string, string>;
  startTimestamp?: string;
  submitTimestamp?: string;
}

export const GoogleCloudDialogflowV2beta1AgentAssistantFeedbackSummarizationFeedback: Schema.Schema<GoogleCloudDialogflowV2beta1AgentAssistantFeedbackSummarizationFeedback> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    summaryText: Schema.optional(Schema.String),
    textSections: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    startTimestamp: Schema.optional(Schema.String),
    submitTimestamp: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1AgentAssistantFeedbackSummarizationFeedback",
  });

export interface GoogleCloudDialogflowV2beta1AgentAssistantFeedbackKnowledgeSearchFeedback {
  answerCopied?: boolean;
  clickedUris?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1AgentAssistantFeedbackKnowledgeSearchFeedback: Schema.Schema<GoogleCloudDialogflowV2beta1AgentAssistantFeedbackKnowledgeSearchFeedback> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answerCopied: Schema.optional(Schema.Boolean),
    clickedUris: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1AgentAssistantFeedbackKnowledgeSearchFeedback",
  });

export interface GoogleCloudDialogflowV2beta1AgentAssistantFeedbackKnowledgeAssistFeedback {
  answerCopied?: boolean;
  clickedUris?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1AgentAssistantFeedbackKnowledgeAssistFeedback: Schema.Schema<GoogleCloudDialogflowV2beta1AgentAssistantFeedbackKnowledgeAssistFeedback> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answerCopied: Schema.optional(Schema.Boolean),
    clickedUris: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1AgentAssistantFeedbackKnowledgeAssistFeedback",
  });

export interface GoogleCloudDialogflowV2beta1AgentAssistantFeedback {
  summarizationFeedback?: GoogleCloudDialogflowV2beta1AgentAssistantFeedbackSummarizationFeedback;
  knowledgeSearchFeedback?: GoogleCloudDialogflowV2beta1AgentAssistantFeedbackKnowledgeSearchFeedback;
  documentEfficiency?:
    | "DOCUMENT_EFFICIENCY_UNSPECIFIED"
    | "INEFFICIENT"
    | "EFFICIENT"
    | (string & {});
  documentCorrectness?:
    | "DOCUMENT_CORRECTNESS_UNSPECIFIED"
    | "INCORRECT"
    | "CORRECT"
    | (string & {});
  knowledgeAssistFeedback?: GoogleCloudDialogflowV2beta1AgentAssistantFeedbackKnowledgeAssistFeedback;
  answerRelevance?:
    | "ANSWER_RELEVANCE_UNSPECIFIED"
    | "IRRELEVANT"
    | "RELEVANT"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1AgentAssistantFeedback: Schema.Schema<GoogleCloudDialogflowV2beta1AgentAssistantFeedback> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    summarizationFeedback: Schema.optional(
      GoogleCloudDialogflowV2beta1AgentAssistantFeedbackSummarizationFeedback,
    ),
    knowledgeSearchFeedback: Schema.optional(
      GoogleCloudDialogflowV2beta1AgentAssistantFeedbackKnowledgeSearchFeedback,
    ),
    documentEfficiency: Schema.optional(Schema.String),
    documentCorrectness: Schema.optional(Schema.String),
    knowledgeAssistFeedback: Schema.optional(
      GoogleCloudDialogflowV2beta1AgentAssistantFeedbackKnowledgeAssistFeedback,
    ),
    answerRelevance: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1AgentAssistantFeedback",
  });

export interface GoogleCloudDialogflowV2EntityTypeEntity {
  synonyms?: ReadonlyArray<string>;
  value?: string;
}

export const GoogleCloudDialogflowV2EntityTypeEntity: Schema.Schema<GoogleCloudDialogflowV2EntityTypeEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    synonyms: Schema.optional(Schema.Array(Schema.String)),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2EntityTypeEntity" });

export interface GoogleCloudDialogflowV2EntityType {
  entities?: ReadonlyArray<GoogleCloudDialogflowV2EntityTypeEntity>;
  kind?:
    | "KIND_UNSPECIFIED"
    | "KIND_MAP"
    | "KIND_LIST"
    | "KIND_REGEXP"
    | (string & {});
  name?: string;
  enableFuzzyExtraction?: boolean;
  displayName?: string;
  autoExpansionMode?:
    | "AUTO_EXPANSION_MODE_UNSPECIFIED"
    | "AUTO_EXPANSION_MODE_DEFAULT"
    | (string & {});
}

export const GoogleCloudDialogflowV2EntityType: Schema.Schema<GoogleCloudDialogflowV2EntityType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2EntityTypeEntity),
    ),
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    enableFuzzyExtraction: Schema.optional(Schema.Boolean),
    displayName: Schema.optional(Schema.String),
    autoExpansionMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2EntityType" });

export interface GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet {
  uri?: string;
  text?: string;
  title?: string;
  metadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet: Schema.Schema<GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet",
  });

export interface GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySourceHumanAgentSideConfig {
  agent?: string;
}

export const GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySourceHumanAgentSideConfig: Schema.Schema<GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySourceHumanAgentSideConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agent: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySourceHumanAgentSideConfig",
  });

export interface GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource {
  agent?: string;
  humanAgentSideConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySourceHumanAgentSideConfig;
}

export const GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource: Schema.Schema<GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agent: Schema.optional(Schema.String),
    humanAgentSideConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySourceHumanAgentSideConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource",
  });

export interface GoogleCloudDialogflowCxV3BargeInConfig {
  noBargeInDuration?: string;
  totalDuration?: string;
}

export const GoogleCloudDialogflowCxV3BargeInConfig: Schema.Schema<GoogleCloudDialogflowCxV3BargeInConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    noBargeInDuration: Schema.optional(Schema.String),
    totalDuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3BargeInConfig" });

export interface GoogleCloudDialogflowCxV3InputAudioConfig {
  optOutConformerModelMigration?: boolean;
  sampleRateHertz?: number;
  model?: string;
  modelVariant?:
    | "SPEECH_MODEL_VARIANT_UNSPECIFIED"
    | "USE_BEST_AVAILABLE"
    | "USE_STANDARD"
    | "USE_ENHANCED"
    | (string & {});
  singleUtterance?: boolean;
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
  phraseHints?: ReadonlyArray<string>;
  enableWordInfo?: boolean;
  bargeInConfig?: GoogleCloudDialogflowCxV3BargeInConfig;
}

export const GoogleCloudDialogflowCxV3InputAudioConfig: Schema.Schema<GoogleCloudDialogflowCxV3InputAudioConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    optOutConformerModelMigration: Schema.optional(Schema.Boolean),
    sampleRateHertz: Schema.optional(Schema.Number),
    model: Schema.optional(Schema.String),
    modelVariant: Schema.optional(Schema.String),
    singleUtterance: Schema.optional(Schema.Boolean),
    audioEncoding: Schema.optional(Schema.String),
    phraseHints: Schema.optional(Schema.Array(Schema.String)),
    enableWordInfo: Schema.optional(Schema.Boolean),
    bargeInConfig: Schema.optional(GoogleCloudDialogflowCxV3BargeInConfig),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3InputAudioConfig" });

export interface GoogleCloudDialogflowCxV3AudioInput {
  audio?: string;
  config?: GoogleCloudDialogflowCxV3InputAudioConfig;
}

export const GoogleCloudDialogflowCxV3AudioInput: Schema.Schema<GoogleCloudDialogflowCxV3AudioInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audio: Schema.optional(Schema.String),
    config: Schema.optional(GoogleCloudDialogflowCxV3InputAudioConfig),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3AudioInput" });

export interface GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings {
  endpointerSensitivity?: number;
  models?: Record<string, string>;
  noSpeechTimeout?: string;
  useTimeoutBasedEndpointing?: boolean;
}

export const GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings: Schema.Schema<GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpointerSensitivity: Schema.optional(Schema.Number),
    models: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    noSpeechTimeout: Schema.optional(Schema.String),
    useTimeoutBasedEndpointing: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings",
  });

export interface GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings {
  enableInteractionLogging?: boolean;
  enableConsentBasedRedaction?: boolean;
  enableStackdriverLogging?: boolean;
}

export const GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings: Schema.Schema<GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableInteractionLogging: Schema.optional(Schema.Boolean),
    enableConsentBasedRedaction: Schema.optional(Schema.Boolean),
    enableStackdriverLogging: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings",
  });

export interface GoogleCloudDialogflowCxV3GcsDestination {
  uri?: string;
}

export const GoogleCloudDialogflowCxV3GcsDestination: Schema.Schema<GoogleCloudDialogflowCxV3GcsDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3GcsDestination" });

export interface GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings {
  enabled?: boolean;
  maxDigits?: number;
  finishDigit?: string;
  endpointingTimeoutDuration?: string;
  interdigitTimeoutDuration?: string;
}

export const GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings: Schema.Schema<GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    maxDigits: Schema.optional(Schema.Number),
    finishDigit: Schema.optional(Schema.String),
    endpointingTimeoutDuration: Schema.optional(Schema.String),
    interdigitTimeoutDuration: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings",
  });

export interface GoogleCloudDialogflowCxV3AdvancedSettings {
  speechSettings?: GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings;
  loggingSettings?: GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings;
  audioExportGcsDestination?: GoogleCloudDialogflowCxV3GcsDestination;
  dtmfSettings?: GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings;
}

export const GoogleCloudDialogflowCxV3AdvancedSettings: Schema.Schema<GoogleCloudDialogflowCxV3AdvancedSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    speechSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings,
    ),
    loggingSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings,
    ),
    audioExportGcsDestination: Schema.optional(
      GoogleCloudDialogflowCxV3GcsDestination,
    ),
    dtmfSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3AdvancedSettings" });

export interface GoogleCloudDialogflowCxV3FulfillmentGeneratorSettings {
  outputParameter?: string;
  generator?: string;
  inputParameters?: Record<string, string>;
}

export const GoogleCloudDialogflowCxV3FulfillmentGeneratorSettings: Schema.Schema<GoogleCloudDialogflowCxV3FulfillmentGeneratorSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputParameter: Schema.optional(Schema.String),
    generator: Schema.optional(Schema.String),
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3FulfillmentGeneratorSettings",
  });

export interface GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText {
  ssml?: string;
  text?: string;
  allowPlaybackInterruption?: boolean;
}

export const GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText: Schema.Schema<GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ssml: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText",
  });

export interface GoogleCloudDialogflowCxV3ResponseMessageEndInteraction {}

export const GoogleCloudDialogflowCxV3ResponseMessageEndInteraction: Schema.Schema<GoogleCloudDialogflowCxV3ResponseMessageEndInteraction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessageEndInteraction",
  });

export interface GoogleCloudDialogflowCxV3ToolCall {
  tool?: string;
  inputParameters?: Record<string, unknown>;
  action?: string;
}

export const GoogleCloudDialogflowCxV3ToolCall: Schema.Schema<GoogleCloudDialogflowCxV3ToolCall> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tool: Schema.optional(Schema.String),
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    action: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ToolCall" });

export interface GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess {
  metadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess: Schema.Schema<GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess",
  });

export interface GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff {
  metadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff: Schema.Schema<GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff",
  });

export interface GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard {}

export const GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard: Schema.Schema<GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard",
  });

export interface GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall {
  phoneNumber?: string;
}

export const GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall: Schema.Schema<GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    phoneNumber: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall",
  });

export interface GoogleCloudDialogflowCxV3ResponseMessagePlayAudio {
  audioUri?: string;
  allowPlaybackInterruption?: boolean;
}

export const GoogleCloudDialogflowCxV3ResponseMessagePlayAudio: Schema.Schema<GoogleCloudDialogflowCxV3ResponseMessagePlayAudio> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audioUri: Schema.optional(Schema.String),
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessagePlayAudio",
  });

export interface GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment {
  audio?: string;
  uri?: string;
  allowPlaybackInterruption?: boolean;
}

export const GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment: Schema.Schema<GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audio: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment",
  });

export interface GoogleCloudDialogflowCxV3ResponseMessageMixedAudio {
  segments?: ReadonlyArray<GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment>;
}

export const GoogleCloudDialogflowCxV3ResponseMessageMixedAudio: Schema.Schema<GoogleCloudDialogflowCxV3ResponseMessageMixedAudio> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    segments: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessageMixedAudio",
  });

export interface GoogleCloudDialogflowCxV3ResponseMessageText {
  text?: ReadonlyArray<string>;
  allowPlaybackInterruption?: boolean;
}

export const GoogleCloudDialogflowCxV3ResponseMessageText: Schema.Schema<GoogleCloudDialogflowCxV3ResponseMessageText> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.Array(Schema.String)),
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ResponseMessageText" });

export interface GoogleCloudDialogflowCxV3ResponseMessage {
  outputAudioText?: GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText;
  endInteraction?: GoogleCloudDialogflowCxV3ResponseMessageEndInteraction;
  toolCall?: GoogleCloudDialogflowCxV3ToolCall;
  conversationSuccess?: GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess;
  responseType?:
    | "RESPONSE_TYPE_UNSPECIFIED"
    | "ENTRY_PROMPT"
    | "PARAMETER_PROMPT"
    | "HANDLER_PROMPT"
    | (string & {});
  payload?: Record<string, unknown>;
  liveAgentHandoff?: GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff;
  knowledgeInfoCard?: GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard;
  telephonyTransferCall?: GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall;
  channel?: string;
  playAudio?: GoogleCloudDialogflowCxV3ResponseMessagePlayAudio;
  mixedAudio?: GoogleCloudDialogflowCxV3ResponseMessageMixedAudio;
  text?: GoogleCloudDialogflowCxV3ResponseMessageText;
}

export const GoogleCloudDialogflowCxV3ResponseMessage: Schema.Schema<GoogleCloudDialogflowCxV3ResponseMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputAudioText: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText,
    ),
    endInteraction: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageEndInteraction,
    ),
    toolCall: Schema.optional(GoogleCloudDialogflowCxV3ToolCall),
    conversationSuccess: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess,
    ),
    responseType: Schema.optional(Schema.String),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    liveAgentHandoff: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff,
    ),
    knowledgeInfoCard: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard,
    ),
    telephonyTransferCall: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall,
    ),
    channel: Schema.optional(Schema.String),
    playAudio: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessagePlayAudio,
    ),
    mixedAudio: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageMixedAudio,
    ),
    text: Schema.optional(GoogleCloudDialogflowCxV3ResponseMessageText),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ResponseMessage" });

export interface GoogleCloudDialogflowCxV3FulfillmentSetParameterAction {
  parameter?: string;
  value?: unknown;
}

export const GoogleCloudDialogflowCxV3FulfillmentSetParameterAction: Schema.Schema<GoogleCloudDialogflowCxV3FulfillmentSetParameterAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameter: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Unknown),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3FulfillmentSetParameterAction",
  });

export interface GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent {
  message?: GoogleCloudDialogflowCxV3ResponseMessage;
  additionalCases?: GoogleCloudDialogflowCxV3FulfillmentConditionalCases;
}

export const GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent: Schema.Schema<GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      message: Schema.optional(GoogleCloudDialogflowCxV3ResponseMessage),
      additionalCases: Schema.optional(
        GoogleCloudDialogflowCxV3FulfillmentConditionalCases,
      ),
    }),
  ).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent",
  }) as any as Schema.Schema<GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent>;

export interface GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase {
  caseContent?: ReadonlyArray<GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent>;
  condition?: string;
}

export const GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase: Schema.Schema<GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      caseContent: Schema.optional(
        Schema.Array(
          GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent,
        ),
      ),
      condition: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase",
  }) as any as Schema.Schema<GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase>;

export interface GoogleCloudDialogflowCxV3FulfillmentConditionalCases {
  cases?: ReadonlyArray<GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase>;
}

export const GoogleCloudDialogflowCxV3FulfillmentConditionalCases: Schema.Schema<GoogleCloudDialogflowCxV3FulfillmentConditionalCases> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      cases: Schema.optional(
        Schema.Array(GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase),
      ),
    }),
  ).annotate({
    identifier: "GoogleCloudDialogflowCxV3FulfillmentConditionalCases",
  }) as any as Schema.Schema<GoogleCloudDialogflowCxV3FulfillmentConditionalCases>;

export interface GoogleCloudDialogflowCxV3Fulfillment {
  returnPartialResponses?: boolean;
  advancedSettings?: GoogleCloudDialogflowCxV3AdvancedSettings;
  tag?: string;
  enableGenerativeFallback?: boolean;
  generators?: ReadonlyArray<GoogleCloudDialogflowCxV3FulfillmentGeneratorSettings>;
  messages?: ReadonlyArray<GoogleCloudDialogflowCxV3ResponseMessage>;
  webhook?: string;
  setParameterActions?: ReadonlyArray<GoogleCloudDialogflowCxV3FulfillmentSetParameterAction>;
  conditionalCases?: ReadonlyArray<GoogleCloudDialogflowCxV3FulfillmentConditionalCases>;
}

export const GoogleCloudDialogflowCxV3Fulfillment: Schema.Schema<GoogleCloudDialogflowCxV3Fulfillment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    returnPartialResponses: Schema.optional(Schema.Boolean),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettings,
    ),
    tag: Schema.optional(Schema.String),
    enableGenerativeFallback: Schema.optional(Schema.Boolean),
    generators: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3FulfillmentGeneratorSettings),
    ),
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ResponseMessage),
    ),
    webhook: Schema.optional(Schema.String),
    setParameterActions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3FulfillmentSetParameterAction),
    ),
    conditionalCases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3FulfillmentConditionalCases),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Fulfillment" });

export interface GoogleCloudDialogflowCxV3TransitionRoute {
  description?: string;
  triggerFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
  targetPage?: string;
  name?: string;
  condition?: string;
  intent?: string;
  targetFlow?: string;
}

export const GoogleCloudDialogflowCxV3TransitionRoute: Schema.Schema<GoogleCloudDialogflowCxV3TransitionRoute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    triggerFulfillment: Schema.optional(GoogleCloudDialogflowCxV3Fulfillment),
    targetPage: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    condition: Schema.optional(Schema.String),
    intent: Schema.optional(Schema.String),
    targetFlow: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TransitionRoute" });

export interface GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsAdherenceDecomposition {
  point?: string;
  isAdherent?: boolean;
  adherenceReasoning?: string;
}

export const GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsAdherenceDecomposition: Schema.Schema<GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsAdherenceDecomposition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    point: Schema.optional(Schema.String),
    isAdherent: Schema.optional(Schema.Boolean),
    adherenceReasoning: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsAdherenceDecomposition",
  });

export interface GoogleCloudDialogflowV2IntentMessageImage {
  imageUri?: string;
  accessibilityText?: string;
}

export const GoogleCloudDialogflowV2IntentMessageImage: Schema.Schema<GoogleCloudDialogflowV2IntentMessageImage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageUri: Schema.optional(Schema.String),
    accessibilityText: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageImage" });

export interface GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject {
  description?: string;
  icon?: GoogleCloudDialogflowV2IntentMessageImage;
  contentUrl?: string;
  name?: string;
  largeImage?: GoogleCloudDialogflowV2IntentMessageImage;
}

export const GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject: Schema.Schema<GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    icon: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
    contentUrl: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    largeImage: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject",
  });

export interface GoogleCloudDialogflowCxV3ImportEntityTypesResponseConflictingResources {
  entityTypeDisplayNames?: ReadonlyArray<string>;
  entityDisplayNames?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3ImportEntityTypesResponseConflictingResources: Schema.Schema<GoogleCloudDialogflowCxV3ImportEntityTypesResponseConflictingResources> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypeDisplayNames: Schema.optional(Schema.Array(Schema.String)),
    entityDisplayNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3ImportEntityTypesResponseConflictingResources",
  });

export interface GoogleCloudDialogflowCxV3ImportEntityTypesResponse {
  entityTypes?: ReadonlyArray<string>;
  conflictingResources?: GoogleCloudDialogflowCxV3ImportEntityTypesResponseConflictingResources;
}

export const GoogleCloudDialogflowCxV3ImportEntityTypesResponse: Schema.Schema<GoogleCloudDialogflowCxV3ImportEntityTypesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypes: Schema.optional(Schema.Array(Schema.String)),
    conflictingResources: Schema.optional(
      GoogleCloudDialogflowCxV3ImportEntityTypesResponseConflictingResources,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ImportEntityTypesResponse",
  });

export interface GoogleCloudDialogflowV2beta1SearchKnowledgeAnswerAnswerSource {
  title?: string;
  snippet?: string;
  metadata?: Record<string, unknown>;
  uri?: string;
}

export const GoogleCloudDialogflowV2beta1SearchKnowledgeAnswerAnswerSource: Schema.Schema<GoogleCloudDialogflowV2beta1SearchKnowledgeAnswerAnswerSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    snippet: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    uri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SearchKnowledgeAnswerAnswerSource",
  });

export interface GoogleCloudLocationLocation {
  labels?: Record<string, string>;
  name?: string;
  locationId?: string;
  displayName?: string;
  metadata?: Record<string, unknown>;
}

export const GoogleCloudLocationLocation: Schema.Schema<GoogleCloudLocationLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudLocationLocation" });

export interface GoogleCloudDialogflowV2beta1GcsSources {
  uris?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1GcsSources: Schema.Schema<GoogleCloudDialogflowV2beta1GcsSources> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uris: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1GcsSources" });

export interface GoogleCloudDialogflowV2IntentMessageSelectItemInfo {
  key?: string;
  synonyms?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2IntentMessageSelectItemInfo: Schema.Schema<GoogleCloudDialogflowV2IntentMessageSelectItemInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    synonyms: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageSelectItemInfo",
  });

export interface GoogleCloudDialogflowV2IntentMessageCarouselSelectItem {
  info?: GoogleCloudDialogflowV2IntentMessageSelectItemInfo;
  title?: string;
  description?: string;
  image?: GoogleCloudDialogflowV2IntentMessageImage;
}

export const GoogleCloudDialogflowV2IntentMessageCarouselSelectItem: Schema.Schema<GoogleCloudDialogflowV2IntentMessageCarouselSelectItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    info: Schema.optional(GoogleCloudDialogflowV2IntentMessageSelectItemInfo),
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageCarouselSelectItem",
  });

export interface GoogleCloudDialogflowV2IntentMessageCarouselSelect {
  items?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageCarouselSelectItem>;
}

export const GoogleCloudDialogflowV2IntentMessageCarouselSelect: Schema.Schema<GoogleCloudDialogflowV2IntentMessageCarouselSelect> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageCarouselSelectItem),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageCarouselSelect",
  });

export interface GoogleCloudDialogflowV2beta1ConversationGeneratorContext {
  generatorType?:
    | "GENERATOR_TYPE_UNSPECIFIED"
    | "FREE_FORM"
    | "AGENT_COACHING"
    | "SUMMARIZATION"
    | "TRANSLATION"
    | "AGENT_FEEDBACK"
    | "CUSTOMER_MESSAGE_GENERATION"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1ConversationGeneratorContext: Schema.Schema<GoogleCloudDialogflowV2beta1ConversationGeneratorContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generatorType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ConversationGeneratorContext",
  });

export interface GoogleCloudDialogflowV2beta1SearchKnowledgeDebugInfoSearchKnowledgeBehavior {
  answerGenerationRewriterOn?: boolean;
  endUserMetadataIncluded?: boolean;
  thirdPartyConnectorAllowed?: boolean;
}

export const GoogleCloudDialogflowV2beta1SearchKnowledgeDebugInfoSearchKnowledgeBehavior: Schema.Schema<GoogleCloudDialogflowV2beta1SearchKnowledgeDebugInfoSearchKnowledgeBehavior> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answerGenerationRewriterOn: Schema.optional(Schema.Boolean),
    endUserMetadataIncluded: Schema.optional(Schema.Boolean),
    thirdPartyConnectorAllowed: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1SearchKnowledgeDebugInfoSearchKnowledgeBehavior",
  });

export interface GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfoIngestedParameterDebugInfo {
  ingestionStatus?:
    | "INGESTION_STATUS_UNSPECIFIED"
    | "INGESTION_STATUS_SUCCEEDED"
    | "INGESTION_STATUS_CONTEXT_NOT_AVAILABLE"
    | "INGESTION_STATUS_PARSE_FAILED"
    | "INGESTION_STATUS_INVALID_ENTRY"
    | "INGESTION_STATUS_INVALID_FORMAT"
    | "INGESTION_STATUS_LANGUAGE_MISMATCH"
    | (string & {});
  parameter?: string;
}

export const GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfoIngestedParameterDebugInfo: Schema.Schema<GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfoIngestedParameterDebugInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ingestionStatus: Schema.optional(Schema.String),
    parameter: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfoIngestedParameterDebugInfo",
  });

export interface GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfo {
  projectNotAllowlisted?: boolean;
  contextReferenceRetrieved?: boolean;
  ingestedParametersDebugInfo?: ReadonlyArray<GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfoIngestedParameterDebugInfo>;
}

export const GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfo: Schema.Schema<GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export interface GoogleCloudDialogflowV2beta1ServiceLatencyInternalServiceLatency {
  completeTime?: string;
  step?: string;
  latencyMs?: number;
  startTime?: string;
}

export const GoogleCloudDialogflowV2beta1ServiceLatencyInternalServiceLatency: Schema.Schema<GoogleCloudDialogflowV2beta1ServiceLatencyInternalServiceLatency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    completeTime: Schema.optional(Schema.String),
    step: Schema.optional(Schema.String),
    latencyMs: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1ServiceLatencyInternalServiceLatency",
  });

export interface GoogleCloudDialogflowV2beta1ServiceLatency {
  internalServiceLatencies?: ReadonlyArray<GoogleCloudDialogflowV2beta1ServiceLatencyInternalServiceLatency>;
}

export const GoogleCloudDialogflowV2beta1ServiceLatency: Schema.Schema<GoogleCloudDialogflowV2beta1ServiceLatency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    internalServiceLatencies: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1ServiceLatencyInternalServiceLatency,
      ),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ServiceLatency" });

export interface GoogleCloudDialogflowV2beta1SearchKnowledgeDebugInfo {
  searchKnowledgeBehavior?: GoogleCloudDialogflowV2beta1SearchKnowledgeDebugInfoSearchKnowledgeBehavior;
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
  serviceLatency?: GoogleCloudDialogflowV2beta1ServiceLatency;
}

export const GoogleCloudDialogflowV2beta1SearchKnowledgeDebugInfo: Schema.Schema<GoogleCloudDialogflowV2beta1SearchKnowledgeDebugInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    searchKnowledgeBehavior: Schema.optional(
      GoogleCloudDialogflowV2beta1SearchKnowledgeDebugInfoSearchKnowledgeBehavior,
    ),
    datastoreResponseReason: Schema.optional(Schema.String),
    ingestedContextReferenceDebugInfo: Schema.optional(
      GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfo,
    ),
    serviceLatency: Schema.optional(GoogleCloudDialogflowV2beta1ServiceLatency),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SearchKnowledgeDebugInfo",
  });

export interface GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsCompletenessRubric {
  question?: string;
  isAddressed?: boolean;
}

export const GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsCompletenessRubric: Schema.Schema<GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsCompletenessRubric> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    question: Schema.optional(Schema.String),
    isAddressed: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsCompletenessRubric",
  });

export interface GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsAccuracyDecomposition {
  accuracyReasoning?: string;
  isAccurate?: boolean;
  point?: string;
}

export const GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsAccuracyDecomposition: Schema.Schema<GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsAccuracyDecomposition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accuracyReasoning: Schema.optional(Schema.String),
    isAccurate: Schema.optional(Schema.Boolean),
    point: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsAccuracyDecomposition",
  });

export interface GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsAdherenceRubric {
  question?: string;
  isAddressed?: boolean;
  reasoning?: string;
}

export const GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsAdherenceRubric: Schema.Schema<GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsAdherenceRubric> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    question: Schema.optional(Schema.String),
    isAddressed: Schema.optional(Schema.Boolean),
    reasoning: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsAdherenceRubric",
  });

export interface GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsEvaluationResult {
  completenessRubric?: GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsCompletenessRubric;
  accuracyDecomposition?: GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsAccuracyDecomposition;
  adherenceRubric?: GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsAdherenceRubric;
}

export const GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsEvaluationResult: Schema.Schema<GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsEvaluationResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    completenessRubric: Schema.optional(
      GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsCompletenessRubric,
    ),
    accuracyDecomposition: Schema.optional(
      GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsAccuracyDecomposition,
    ),
    adherenceRubric: Schema.optional(
      GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsAdherenceRubric,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsEvaluationResult",
  });

export interface GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsConversationDetailMetricDetailSectionDetail {
  section?: string;
  score?: number;
  sectionSummary?: string;
  evaluationResults?: ReadonlyArray<GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsEvaluationResult>;
}

export const GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsConversationDetailMetricDetailSectionDetail: Schema.Schema<GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsConversationDetailMetricDetailSectionDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    section: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    sectionSummary: Schema.optional(Schema.String),
    evaluationResults: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsEvaluationResult,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsConversationDetailMetricDetailSectionDetail",
  });

export interface GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsConversationDetailMetricDetail {
  score?: number;
  metric?: string;
  sectionDetails?: ReadonlyArray<GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsConversationDetailMetricDetailSectionDetail>;
}

export const GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsConversationDetailMetricDetail: Schema.Schema<GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsConversationDetailMetricDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.Number),
    metric: Schema.optional(Schema.String),
    sectionDetails: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsConversationDetailMetricDetailSectionDetail,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsConversationDetailMetricDetail",
  });

export interface GoogleCloudDialogflowCxV3TestRunDifference {
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

export const GoogleCloudDialogflowCxV3TestRunDifference: Schema.Schema<GoogleCloudDialogflowCxV3TestRunDifference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TestRunDifference" });

export interface GoogleCloudDialogflowV2beta1FaqAnswer {
  answer?: string;
  metadata?: Record<string, string>;
  confidence?: number;
  question?: string;
  answerRecord?: string;
  source?: string;
}

export const GoogleCloudDialogflowV2beta1FaqAnswer: Schema.Schema<GoogleCloudDialogflowV2beta1FaqAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answer: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    confidence: Schema.optional(Schema.Number),
    question: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1FaqAnswer" });

export interface GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse {
  faqAnswers?: ReadonlyArray<GoogleCloudDialogflowV2beta1FaqAnswer>;
  latestMessage?: string;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    faqAnswers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1FaqAnswer),
    ),
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard {}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard: Schema.Schema<GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard",
  });

export interface GoogleCloudDialogflowV2beta1ConversationContextReferenceContextContent {
  answerRecord?: string;
  contentFormat?:
    | "CONTENT_FORMAT_UNSPECIFIED"
    | "JSON"
    | "PLAIN_TEXT"
    | (string & {});
  ingestionTime?: string;
  content?: string;
}

export const GoogleCloudDialogflowV2beta1ConversationContextReferenceContextContent: Schema.Schema<GoogleCloudDialogflowV2beta1ConversationContextReferenceContextContent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answerRecord: Schema.optional(Schema.String),
    contentFormat: Schema.optional(Schema.String),
    ingestionTime: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1ConversationContextReferenceContextContent",
  });

export interface GoogleCloudDialogflowV2beta1ConversationContextReference {
  updateMode?:
    | "UPDATE_MODE_UNSPECIFIED"
    | "APPEND"
    | "OVERWRITE"
    | (string & {});
  languageCode?: string;
  contextContents?: ReadonlyArray<GoogleCloudDialogflowV2beta1ConversationContextReferenceContextContent>;
  createTime?: string;
}

export const GoogleCloudDialogflowV2beta1ConversationContextReference: Schema.Schema<GoogleCloudDialogflowV2beta1ConversationContextReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMode: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    contextContents: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1ConversationContextReferenceContextContent,
      ),
    ),
    createTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ConversationContextReference",
  });

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

export const GoogleCloudDialogflowCxV3DataStoreConnection: Schema.Schema<GoogleCloudDialogflowCxV3DataStoreConnection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataStoreType: Schema.optional(Schema.String),
    dataStore: Schema.optional(Schema.String),
    documentProcessingMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3DataStoreConnection" });

export interface GoogleCloudDialogflowV2SpeechWordInfo {
  word?: string;
  startOffset?: string;
  endOffset?: string;
  confidence?: number;
}

export const GoogleCloudDialogflowV2SpeechWordInfo: Schema.Schema<GoogleCloudDialogflowV2SpeechWordInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    word: Schema.optional(Schema.String),
    startOffset: Schema.optional(Schema.String),
    endOffset: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SpeechWordInfo" });

export interface GoogleCloudDialogflowV2StreamingRecognitionResult {
  speechWordInfo?: ReadonlyArray<GoogleCloudDialogflowV2SpeechWordInfo>;
  speechEndOffset?: string;
  transcript?: string;
  languageCode?: string;
  messageType?:
    | "MESSAGE_TYPE_UNSPECIFIED"
    | "TRANSCRIPT"
    | "END_OF_SINGLE_UTTERANCE"
    | (string & {});
  isFinal?: boolean;
  confidence?: number;
}

export const GoogleCloudDialogflowV2StreamingRecognitionResult: Schema.Schema<GoogleCloudDialogflowV2StreamingRecognitionResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    speechWordInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SpeechWordInfo),
    ),
    speechEndOffset: Schema.optional(Schema.String),
    transcript: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    messageType: Schema.optional(Schema.String),
    isFinal: Schema.optional(Schema.Boolean),
    confidence: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2StreamingRecognitionResult",
  });

export interface GoogleRpcStatus {
  code?: number;
  message?: string;
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const GoogleRpcStatus: Schema.Schema<GoogleRpcStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "GoogleRpcStatus" });

export interface GoogleCloudDialogflowV2Sentiment {
  magnitude?: number;
  score?: number;
}

export const GoogleCloudDialogflowV2Sentiment: Schema.Schema<GoogleCloudDialogflowV2Sentiment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    magnitude: Schema.optional(Schema.Number),
    score: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Sentiment" });

export interface GoogleCloudDialogflowV2SentimentAnalysisResult {
  queryTextSentiment?: GoogleCloudDialogflowV2Sentiment;
}

export const GoogleCloudDialogflowV2SentimentAnalysisResult: Schema.Schema<GoogleCloudDialogflowV2SentimentAnalysisResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryTextSentiment: Schema.optional(GoogleCloudDialogflowV2Sentiment),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SentimentAnalysisResult" });

export interface GoogleCloudDialogflowV2AnnotatedMessagePart {
  entityType?: string;
  text?: string;
  formattedValue?: unknown;
}

export const GoogleCloudDialogflowV2AnnotatedMessagePart: Schema.Schema<GoogleCloudDialogflowV2AnnotatedMessagePart> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityType: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
    formattedValue: Schema.optional(Schema.Unknown),
  }).annotate({ identifier: "GoogleCloudDialogflowV2AnnotatedMessagePart" });

export interface GoogleCloudDialogflowV2MessageAnnotation {
  parts?: ReadonlyArray<GoogleCloudDialogflowV2AnnotatedMessagePart>;
  containEntities?: boolean;
}

export const GoogleCloudDialogflowV2MessageAnnotation: Schema.Schema<GoogleCloudDialogflowV2MessageAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2AnnotatedMessagePart),
    ),
    containEntities: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2MessageAnnotation" });

export interface GoogleCloudDialogflowV2Message {
  name?: string;
  languageCode?: string;
  sendTime?: string;
  sentimentAnalysis?: GoogleCloudDialogflowV2SentimentAnalysisResult;
  participantRole?:
    | "ROLE_UNSPECIFIED"
    | "HUMAN_AGENT"
    | "AUTOMATED_AGENT"
    | "END_USER"
    | (string & {});
  content?: string;
  createTime?: string;
  participant?: string;
  messageAnnotation?: GoogleCloudDialogflowV2MessageAnnotation;
}

export const GoogleCloudDialogflowV2Message: Schema.Schema<GoogleCloudDialogflowV2Message> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    sendTime: Schema.optional(Schema.String),
    sentimentAnalysis: Schema.optional(
      GoogleCloudDialogflowV2SentimentAnalysisResult,
    ),
    participantRole: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    participant: Schema.optional(Schema.String),
    messageAnnotation: Schema.optional(
      GoogleCloudDialogflowV2MessageAnnotation,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Message" });

export interface GoogleCloudDialogflowV2ConversationEvent {
  type?:
    | "TYPE_UNSPECIFIED"
    | "CONVERSATION_STARTED"
    | "CONVERSATION_FINISHED"
    | "HUMAN_INTERVENTION_NEEDED"
    | "NEW_MESSAGE"
    | "NEW_RECOGNITION_RESULT"
    | "UNRECOVERABLE_ERROR"
    | (string & {});
  conversation?: string;
  newRecognitionResultPayload?: GoogleCloudDialogflowV2StreamingRecognitionResult;
  errorStatus?: GoogleRpcStatus;
  newMessagePayload?: GoogleCloudDialogflowV2Message;
}

export const GoogleCloudDialogflowV2ConversationEvent: Schema.Schema<GoogleCloudDialogflowV2ConversationEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    conversation: Schema.optional(Schema.String),
    newRecognitionResultPayload: Schema.optional(
      GoogleCloudDialogflowV2StreamingRecognitionResult,
    ),
    errorStatus: Schema.optional(GoogleRpcStatus),
    newMessagePayload: Schema.optional(GoogleCloudDialogflowV2Message),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ConversationEvent" });

export interface GoogleCloudDialogflowCxV3beta1InlineDestination {
  content?: string;
}

export const GoogleCloudDialogflowCxV3beta1InlineDestination: Schema.Schema<GoogleCloudDialogflowCxV3beta1InlineDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1InlineDestination",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportIntentsResponse {
  intentsContent?: GoogleCloudDialogflowCxV3beta1InlineDestination;
  intentsUri?: string;
}

export const GoogleCloudDialogflowCxV3beta1ExportIntentsResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportIntentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intentsContent: Schema.optional(
      GoogleCloudDialogflowCxV3beta1InlineDestination,
    ),
    intentsUri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportIntentsResponse",
  });

export interface GoogleCloudDialogflowV2beta1GenerateSuggestionsResponseGeneratorSuggestionAnswer {
  generatorSuggestion?: GoogleCloudDialogflowV2beta1GeneratorSuggestion;
  sourceGenerator?: string;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2beta1GenerateSuggestionsResponseGeneratorSuggestionAnswer: Schema.Schema<GoogleCloudDialogflowV2beta1GenerateSuggestionsResponseGeneratorSuggestionAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generatorSuggestion: Schema.optional(
      GoogleCloudDialogflowV2beta1GeneratorSuggestion,
    ),
    sourceGenerator: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1GenerateSuggestionsResponseGeneratorSuggestionAnswer",
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

export const GoogleCloudDialogflowV2IngestedContextReferenceDebugInfoIngestedParameterDebugInfo: Schema.Schema<GoogleCloudDialogflowV2IngestedContextReferenceDebugInfoIngestedParameterDebugInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameter: Schema.optional(Schema.String),
    ingestionStatus: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2IngestedContextReferenceDebugInfoIngestedParameterDebugInfo",
  });

export interface GoogleCloudDialogflowV2IngestedContextReferenceDebugInfo {
  ingestedParametersDebugInfo?: ReadonlyArray<GoogleCloudDialogflowV2IngestedContextReferenceDebugInfoIngestedParameterDebugInfo>;
  projectNotAllowlisted?: boolean;
  contextReferenceRetrieved?: boolean;
}

export const GoogleCloudDialogflowV2IngestedContextReferenceDebugInfo: Schema.Schema<GoogleCloudDialogflowV2IngestedContextReferenceDebugInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ingestedParametersDebugInfo: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2IngestedContextReferenceDebugInfoIngestedParameterDebugInfo,
      ),
    ),
    projectNotAllowlisted: Schema.optional(Schema.Boolean),
    contextReferenceRetrieved: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IngestedContextReferenceDebugInfo",
  });

export interface GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadata {
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

export const GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationProfile: Schema.optional(Schema.String),
    participantRole: Schema.optional(Schema.String),
    suggestionFeatureType: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadata",
  });

export interface GoogleCloudDialogflowV2EncryptionSpec {
  name?: string;
  kmsKey?: string;
}

export const GoogleCloudDialogflowV2EncryptionSpec: Schema.Schema<GoogleCloudDialogflowV2EncryptionSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    kmsKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2EncryptionSpec" });

export interface GoogleCloudDialogflowV2beta1BargeInConfig {
  noBargeInDuration?: string;
  totalDuration?: string;
}

export const GoogleCloudDialogflowV2beta1BargeInConfig: Schema.Schema<GoogleCloudDialogflowV2beta1BargeInConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    noBargeInDuration: Schema.optional(Schema.String),
    totalDuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1BargeInConfig" });

export interface GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistRequest {
  previousSuggestedQuery?: string;
  latestMessage?: string;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistRequest: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    previousSuggestedQuery: Schema.optional(Schema.String),
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportIntentsMetadata {}

export const GoogleCloudDialogflowCxV3beta1ExportIntentsMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportIntentsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportIntentsMetadata",
  });

export interface GoogleCloudDialogflowV2beta1SuggestionFeature {
  type?:
    | "TYPE_UNSPECIFIED"
    | "ARTICLE_SUGGESTION"
    | "FAQ"
    | "SMART_REPLY"
    | "DIALOGFLOW_ASSIST"
    | "CONVERSATION_SUMMARIZATION"
    | "KNOWLEDGE_SEARCH"
    | "KNOWLEDGE_ASSIST"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1SuggestionFeature: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestionFeature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1SuggestionFeature" });

export interface GoogleCloudDialogflowCxV3KnowledgeConnectorSettings {
  dataStoreConnections?: ReadonlyArray<GoogleCloudDialogflowCxV3DataStoreConnection>;
  triggerFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
  targetPage?: string;
  targetFlow?: string;
  enabled?: boolean;
}

export const GoogleCloudDialogflowCxV3KnowledgeConnectorSettings: Schema.Schema<GoogleCloudDialogflowCxV3KnowledgeConnectorSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataStoreConnections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3DataStoreConnection),
    ),
    triggerFulfillment: Schema.optional(GoogleCloudDialogflowCxV3Fulfillment),
    targetPage: Schema.optional(Schema.String),
    targetFlow: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3KnowledgeConnectorSettings",
  });

export interface GoogleCloudDialogflowCxV3EventHandler {
  triggerFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
  targetPage?: string;
  targetPlaybook?: string;
  targetFlow?: string;
  name?: string;
  event?: string;
}

export const GoogleCloudDialogflowCxV3EventHandler: Schema.Schema<GoogleCloudDialogflowCxV3EventHandler> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    triggerFulfillment: Schema.optional(GoogleCloudDialogflowCxV3Fulfillment),
    targetPage: Schema.optional(Schema.String),
    targetPlaybook: Schema.optional(Schema.String),
    targetFlow: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    event: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3EventHandler" });

export interface GoogleCloudDialogflowCxV3FormParameterFillBehavior {
  repromptEventHandlers?: ReadonlyArray<GoogleCloudDialogflowCxV3EventHandler>;
  initialPromptFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
}

export const GoogleCloudDialogflowCxV3FormParameterFillBehavior: Schema.Schema<GoogleCloudDialogflowCxV3FormParameterFillBehavior> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  advancedSettings?: GoogleCloudDialogflowCxV3AdvancedSettings;
  redact?: boolean;
  required?: boolean;
  displayName?: string;
  fillBehavior?: GoogleCloudDialogflowCxV3FormParameterFillBehavior;
  entityType?: string;
  isList?: boolean;
  defaultValue?: unknown;
}

export const GoogleCloudDialogflowCxV3FormParameter: Schema.Schema<GoogleCloudDialogflowCxV3FormParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettings,
    ),
    redact: Schema.optional(Schema.Boolean),
    required: Schema.optional(Schema.Boolean),
    displayName: Schema.optional(Schema.String),
    fillBehavior: Schema.optional(
      GoogleCloudDialogflowCxV3FormParameterFillBehavior,
    ),
    entityType: Schema.optional(Schema.String),
    isList: Schema.optional(Schema.Boolean),
    defaultValue: Schema.optional(Schema.Unknown),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3FormParameter" });

export interface GoogleCloudDialogflowCxV3Form {
  parameters?: ReadonlyArray<GoogleCloudDialogflowCxV3FormParameter>;
}

export const GoogleCloudDialogflowCxV3Form: Schema.Schema<GoogleCloudDialogflowCxV3Form> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameters: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3FormParameter),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Form" });

export interface GoogleCloudDialogflowCxV3Page {
  entryFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
  knowledgeConnectorSettings?: GoogleCloudDialogflowCxV3KnowledgeConnectorSettings;
  displayName?: string;
  form?: GoogleCloudDialogflowCxV3Form;
  eventHandlers?: ReadonlyArray<GoogleCloudDialogflowCxV3EventHandler>;
  name?: string;
  transitionRouteGroups?: ReadonlyArray<string>;
  advancedSettings?: GoogleCloudDialogflowCxV3AdvancedSettings;
  description?: string;
  transitionRoutes?: ReadonlyArray<GoogleCloudDialogflowCxV3TransitionRoute>;
}

export const GoogleCloudDialogflowCxV3Page: Schema.Schema<GoogleCloudDialogflowCxV3Page> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entryFulfillment: Schema.optional(GoogleCloudDialogflowCxV3Fulfillment),
    knowledgeConnectorSettings: Schema.optional(
      GoogleCloudDialogflowCxV3KnowledgeConnectorSettings,
    ),
    displayName: Schema.optional(Schema.String),
    form: Schema.optional(GoogleCloudDialogflowCxV3Form),
    eventHandlers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3EventHandler),
    ),
    name: Schema.optional(Schema.String),
    transitionRouteGroups: Schema.optional(Schema.Array(Schema.String)),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettings,
    ),
    description: Schema.optional(Schema.String),
    transitionRoutes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3TransitionRoute),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Page" });

export interface GoogleCloudDialogflowCxV3IntentTrainingPhrasePart {
  parameterId?: string;
  text?: string;
}

export const GoogleCloudDialogflowCxV3IntentTrainingPhrasePart: Schema.Schema<GoogleCloudDialogflowCxV3IntentTrainingPhrasePart> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameterId: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3IntentTrainingPhrasePart",
  });

export interface GoogleCloudDialogflowCxV3IntentTrainingPhrase {
  id?: string;
  parts?: ReadonlyArray<GoogleCloudDialogflowCxV3IntentTrainingPhrasePart>;
  repeatCount?: number;
}

export const GoogleCloudDialogflowCxV3IntentTrainingPhrase: Schema.Schema<GoogleCloudDialogflowCxV3IntentTrainingPhrase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    parts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3IntentTrainingPhrasePart),
    ),
    repeatCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3IntentTrainingPhrase" });

export interface GoogleCloudDialogflowCxV3IntentParameter {
  id?: string;
  entityType?: string;
  isList?: boolean;
  redact?: boolean;
}

export const GoogleCloudDialogflowCxV3IntentParameter: Schema.Schema<GoogleCloudDialogflowCxV3IntentParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    entityType: Schema.optional(Schema.String),
    isList: Schema.optional(Schema.Boolean),
    redact: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3IntentParameter" });

export interface GoogleCloudDialogflowCxV3Intent {
  description?: string;
  trainingPhrases?: ReadonlyArray<GoogleCloudDialogflowCxV3IntentTrainingPhrase>;
  parameters?: ReadonlyArray<GoogleCloudDialogflowCxV3IntentParameter>;
  dtmfPattern?: string;
  displayName?: string;
  name?: string;
  isFallback?: boolean;
  priority?: number;
  labels?: Record<string, string>;
}

export const GoogleCloudDialogflowCxV3Intent: Schema.Schema<GoogleCloudDialogflowCxV3Intent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    trainingPhrases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3IntentTrainingPhrase),
    ),
    parameters: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3IntentParameter),
    ),
    dtmfPattern: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    isFallback: Schema.optional(Schema.Boolean),
    priority: Schema.optional(Schema.Number),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Intent" });

export interface GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput {
  currentPage?: GoogleCloudDialogflowCxV3Page;
  textResponses?: ReadonlyArray<GoogleCloudDialogflowCxV3ResponseMessageText>;
  differences?: ReadonlyArray<GoogleCloudDialogflowCxV3TestRunDifference>;
  sessionParameters?: Record<string, unknown>;
  diagnosticInfo?: Record<string, unknown>;
  triggeredIntent?: GoogleCloudDialogflowCxV3Intent;
  status?: GoogleRpcStatus;
}

export const GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput: Schema.Schema<GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currentPage: Schema.optional(GoogleCloudDialogflowCxV3Page),
    textResponses: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ResponseMessageText),
    ),
    differences: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3TestRunDifference),
    ),
    sessionParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    diagnosticInfo: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    triggeredIntent: Schema.optional(GoogleCloudDialogflowCxV3Intent),
    status: Schema.optional(GoogleRpcStatus),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput",
  });

export interface GoogleCloudDialogflowCxV3EventInput {
  event?: string;
}

export const GoogleCloudDialogflowCxV3EventInput: Schema.Schema<GoogleCloudDialogflowCxV3EventInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    event: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3EventInput" });

export interface GoogleCloudDialogflowCxV3IntentInput {
  intent?: string;
}

export const GoogleCloudDialogflowCxV3IntentInput: Schema.Schema<GoogleCloudDialogflowCxV3IntentInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3IntentInput" });

export interface GoogleCloudDialogflowCxV3DtmfInput {
  digits?: string;
  finishDigit?: string;
}

export const GoogleCloudDialogflowCxV3DtmfInput: Schema.Schema<GoogleCloudDialogflowCxV3DtmfInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    digits: Schema.optional(Schema.String),
    finishDigit: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3DtmfInput" });

export interface GoogleCloudDialogflowCxV3TextInput {
  text?: string;
}

export const GoogleCloudDialogflowCxV3TextInput: Schema.Schema<GoogleCloudDialogflowCxV3TextInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TextInput" });

export interface GoogleCloudDialogflowCxV3ToolCallResultError {
  message?: string;
}

export const GoogleCloudDialogflowCxV3ToolCallResultError: Schema.Schema<GoogleCloudDialogflowCxV3ToolCallResultError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ToolCallResultError" });

export interface GoogleCloudDialogflowCxV3ToolCallResult {
  error?: GoogleCloudDialogflowCxV3ToolCallResultError;
  tool?: string;
  outputParameters?: Record<string, unknown>;
  action?: string;
}

export const GoogleCloudDialogflowCxV3ToolCallResult: Schema.Schema<GoogleCloudDialogflowCxV3ToolCallResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    error: Schema.optional(GoogleCloudDialogflowCxV3ToolCallResultError),
    tool: Schema.optional(Schema.String),
    outputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    action: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ToolCallResult" });

export interface GoogleCloudDialogflowCxV3QueryInput {
  event?: GoogleCloudDialogflowCxV3EventInput;
  languageCode?: string;
  intent?: GoogleCloudDialogflowCxV3IntentInput;
  dtmf?: GoogleCloudDialogflowCxV3DtmfInput;
  text?: GoogleCloudDialogflowCxV3TextInput;
  audio?: GoogleCloudDialogflowCxV3AudioInput;
  toolCallResult?: GoogleCloudDialogflowCxV3ToolCallResult;
}

export const GoogleCloudDialogflowCxV3QueryInput: Schema.Schema<GoogleCloudDialogflowCxV3QueryInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    event: Schema.optional(GoogleCloudDialogflowCxV3EventInput),
    languageCode: Schema.optional(Schema.String),
    intent: Schema.optional(GoogleCloudDialogflowCxV3IntentInput),
    dtmf: Schema.optional(GoogleCloudDialogflowCxV3DtmfInput),
    text: Schema.optional(GoogleCloudDialogflowCxV3TextInput),
    audio: Schema.optional(GoogleCloudDialogflowCxV3AudioInput),
    toolCallResult: Schema.optional(GoogleCloudDialogflowCxV3ToolCallResult),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3QueryInput" });

export interface GoogleCloudDialogflowCxV3ConversationTurnUserInput {
  input?: GoogleCloudDialogflowCxV3QueryInput;
  injectedParameters?: Record<string, unknown>;
  enableSentimentAnalysis?: boolean;
  isWebhookEnabled?: boolean;
}

export const GoogleCloudDialogflowCxV3ConversationTurnUserInput: Schema.Schema<GoogleCloudDialogflowCxV3ConversationTurnUserInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    input: Schema.optional(GoogleCloudDialogflowCxV3QueryInput),
    injectedParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    enableSentimentAnalysis: Schema.optional(Schema.Boolean),
    isWebhookEnabled: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ConversationTurnUserInput",
  });

export interface GoogleCloudDialogflowCxV3ConversationTurn {
  virtualAgentOutput?: GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput;
  userInput?: GoogleCloudDialogflowCxV3ConversationTurnUserInput;
}

export const GoogleCloudDialogflowCxV3ConversationTurn: Schema.Schema<GoogleCloudDialogflowCxV3ConversationTurn> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const GoogleCloudDialogflowCxV3TestCaseResult: Schema.Schema<GoogleCloudDialogflowCxV3TestCaseResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testResult: Schema.optional(Schema.String),
    testTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    environment: Schema.optional(Schema.String),
    conversationTurns: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ConversationTurn),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TestCaseResult" });

export interface GoogleCloudDialogflowCxV3BatchRunTestCasesResponse {
  results?: ReadonlyArray<GoogleCloudDialogflowCxV3TestCaseResult>;
}

export const GoogleCloudDialogflowCxV3BatchRunTestCasesResponse: Schema.Schema<GoogleCloudDialogflowCxV3BatchRunTestCasesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3TestCaseResult),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3BatchRunTestCasesResponse",
  });

export interface GoogleCloudDialogflowV2ServiceLatencyInternalServiceLatency {
  startTime?: string;
  step?: string;
  latencyMs?: number;
  completeTime?: string;
}

export const GoogleCloudDialogflowV2ServiceLatencyInternalServiceLatency: Schema.Schema<GoogleCloudDialogflowV2ServiceLatencyInternalServiceLatency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    step: Schema.optional(Schema.String),
    latencyMs: Schema.optional(Schema.Number),
    completeTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ServiceLatencyInternalServiceLatency",
  });

export interface GoogleCloudDialogflowV2ServiceLatency {
  internalServiceLatencies?: ReadonlyArray<GoogleCloudDialogflowV2ServiceLatencyInternalServiceLatency>;
}

export const GoogleCloudDialogflowV2ServiceLatency: Schema.Schema<GoogleCloudDialogflowV2ServiceLatency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    internalServiceLatencies: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2ServiceLatencyInternalServiceLatency),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ServiceLatency" });

export interface GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction {
  uri?: string;
}

export const GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction: Schema.Schema<GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportFlowResponse {
  flowUri?: string;
  flowContent?: string;
}

export const GoogleCloudDialogflowCxV3beta1ExportFlowResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportFlowResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flowUri: Schema.optional(Schema.String),
    flowContent: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportFlowResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceServiceAccountAuthConfig {
  serviceAccount?: string;
}

export const GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceServiceAccountAuthConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceServiceAccountAuthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAccount: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceServiceAccountAuthConfig",
  });

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

export const GoogleCloudDialogflowCxV3beta1TestRunDifference: Schema.Schema<GoogleCloudDialogflowCxV3beta1TestRunDifference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1TestRunDifference",
  });

export interface GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings {
  noSpeechTimeout?: string;
  useTimeoutBasedEndpointing?: boolean;
  endpointerSensitivity?: number;
  models?: Record<string, string>;
}

export const GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    noSpeechTimeout: Schema.optional(Schema.String),
    useTimeoutBasedEndpointing: Schema.optional(Schema.Boolean),
    endpointerSensitivity: Schema.optional(Schema.Number),
    models: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings {
  enableInteractionLogging?: boolean;
  enableConsentBasedRedaction?: boolean;
  enableStackdriverLogging?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableInteractionLogging: Schema.optional(Schema.Boolean),
    enableConsentBasedRedaction: Schema.optional(Schema.Boolean),
    enableStackdriverLogging: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1GcsDestination {
  uri?: string;
}

export const GoogleCloudDialogflowCxV3beta1GcsDestination: Schema.Schema<GoogleCloudDialogflowCxV3beta1GcsDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1GcsDestination" });

export interface GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings {
  interdigitTimeoutDuration?: string;
  maxDigits?: number;
  finishDigit?: string;
  enabled?: boolean;
  endpointingTimeoutDuration?: string;
}

export const GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    interdigitTimeoutDuration: Schema.optional(Schema.String),
    maxDigits: Schema.optional(Schema.Number),
    finishDigit: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    endpointingTimeoutDuration: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1AdvancedSettings {
  speechSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings;
  loggingSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings;
  audioExportGcsDestination?: GoogleCloudDialogflowCxV3beta1GcsDestination;
  dtmfSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings;
}

export const GoogleCloudDialogflowCxV3beta1AdvancedSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1AdvancedSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    speechSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings,
    ),
    loggingSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings,
    ),
    audioExportGcsDestination: Schema.optional(
      GoogleCloudDialogflowCxV3beta1GcsDestination,
    ),
    dtmfSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1AdvancedSettings" });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff {
  metadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff: Schema.Schema<GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff",
  });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment {
  uri?: string;
  allowPlaybackInterruption?: boolean;
  audio?: string;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment: Schema.Schema<GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
    audio: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment",
  });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio {
  segments?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment>;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio: Schema.Schema<GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    segments: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio",
  });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageText {
  text?: ReadonlyArray<string>;
  allowPlaybackInterruption?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageText: Schema.Schema<GoogleCloudDialogflowCxV3beta1ResponseMessageText> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.Array(Schema.String)),
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ResponseMessageText",
  });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall {
  phoneNumber?: string;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall: Schema.Schema<GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    phoneNumber: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall",
  });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess {
  metadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess: Schema.Schema<GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess",
  });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio {
  audioUri?: string;
  allowPlaybackInterruption?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio: Schema.Schema<GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audioUri: Schema.optional(Schema.String),
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio",
  });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText {
  text?: string;
  allowPlaybackInterruption?: boolean;
  ssml?: string;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText: Schema.Schema<GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
    ssml: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText",
  });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction {}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction: Schema.Schema<GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction",
  });

export interface GoogleCloudDialogflowCxV3beta1ToolCall {
  action?: string;
  inputParameters?: Record<string, unknown>;
  tool?: string;
}

export const GoogleCloudDialogflowCxV3beta1ToolCall: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolCall> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    tool: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ToolCall" });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessage {
  liveAgentHandoff?: GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff;
  mixedAudio?: GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio;
  knowledgeInfoCard?: GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard;
  text?: GoogleCloudDialogflowCxV3beta1ResponseMessageText;
  telephonyTransferCall?: GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall;
  conversationSuccess?: GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess;
  playAudio?: GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio;
  payload?: Record<string, unknown>;
  outputAudioText?: GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText;
  endInteraction?: GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction;
  toolCall?: GoogleCloudDialogflowCxV3beta1ToolCall;
  channel?: string;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessage: Schema.Schema<GoogleCloudDialogflowCxV3beta1ResponseMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    liveAgentHandoff: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff,
    ),
    mixedAudio: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio,
    ),
    knowledgeInfoCard: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard,
    ),
    text: Schema.optional(GoogleCloudDialogflowCxV3beta1ResponseMessageText),
    telephonyTransferCall: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall,
    ),
    conversationSuccess: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess,
    ),
    playAudio: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio,
    ),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    outputAudioText: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText,
    ),
    endInteraction: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction,
    ),
    toolCall: Schema.optional(GoogleCloudDialogflowCxV3beta1ToolCall),
    channel: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ResponseMessage" });

export interface GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent {
  message?: GoogleCloudDialogflowCxV3beta1ResponseMessage;
  additionalCases?: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases;
}

export const GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent: Schema.Schema<GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      message: Schema.optional(GoogleCloudDialogflowCxV3beta1ResponseMessage),
      additionalCases: Schema.optional(
        GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases,
      ),
    }),
  ).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent",
  }) as any as Schema.Schema<GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent>;

export interface GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase {
  caseContent?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent>;
  condition?: string;
}

export const GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase: Schema.Schema<GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      caseContent: Schema.optional(
        Schema.Array(
          GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent,
        ),
      ),
      condition: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase",
  }) as any as Schema.Schema<GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase>;

export interface GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases {
  cases?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase>;
}

export const GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases: Schema.Schema<GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      cases: Schema.optional(
        Schema.Array(
          GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase,
        ),
      ),
    }),
  ).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases",
  }) as any as Schema.Schema<GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases>;

export interface GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction {
  parameter?: string;
  value?: unknown;
}

export const GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction: Schema.Schema<GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameter: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Unknown),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction",
  });

export interface GoogleCloudDialogflowCxV3beta1FulfillmentGeneratorSettings {
  outputParameter?: string;
  generator?: string;
  inputParameters?: Record<string, string>;
}

export const GoogleCloudDialogflowCxV3beta1FulfillmentGeneratorSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1FulfillmentGeneratorSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputParameter: Schema.optional(Schema.String),
    generator: Schema.optional(Schema.String),
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1FulfillmentGeneratorSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1Fulfillment {
  enableGenerativeFallback?: boolean;
  tag?: string;
  advancedSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettings;
  returnPartialResponses?: boolean;
  conditionalCases?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases>;
  messages?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ResponseMessage>;
  webhook?: string;
  setParameterActions?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction>;
  generators?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1FulfillmentGeneratorSettings>;
}

export const GoogleCloudDialogflowCxV3beta1Fulfillment: Schema.Schema<GoogleCloudDialogflowCxV3beta1Fulfillment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableGenerativeFallback: Schema.optional(Schema.Boolean),
    tag: Schema.optional(Schema.String),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettings,
    ),
    returnPartialResponses: Schema.optional(Schema.Boolean),
    conditionalCases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases),
    ),
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ResponseMessage),
    ),
    webhook: Schema.optional(Schema.String),
    setParameterActions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction),
    ),
    generators: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1FulfillmentGeneratorSettings),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Fulfillment" });

export interface GoogleCloudDialogflowCxV3beta1DataStoreConnection {
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

export const GoogleCloudDialogflowCxV3beta1DataStoreConnection: Schema.Schema<GoogleCloudDialogflowCxV3beta1DataStoreConnection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataStoreType: Schema.optional(Schema.String),
    dataStore: Schema.optional(Schema.String),
    documentProcessingMode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1DataStoreConnection",
  });

export interface GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings {
  dataStoreConnections?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1DataStoreConnection>;
  triggerFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
  targetPage?: string;
  targetFlow?: string;
  enabled?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataStoreConnections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1DataStoreConnection),
    ),
    triggerFulfillment: Schema.optional(
      GoogleCloudDialogflowCxV3beta1Fulfillment,
    ),
    targetPage: Schema.optional(Schema.String),
    targetFlow: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1EventHandler {
  targetFlow?: string;
  name?: string;
  event?: string;
  triggerFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
  targetPage?: string;
  targetPlaybook?: string;
}

export const GoogleCloudDialogflowCxV3beta1EventHandler: Schema.Schema<GoogleCloudDialogflowCxV3beta1EventHandler> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetFlow: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    event: Schema.optional(Schema.String),
    triggerFulfillment: Schema.optional(
      GoogleCloudDialogflowCxV3beta1Fulfillment,
    ),
    targetPage: Schema.optional(Schema.String),
    targetPlaybook: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1EventHandler" });

export interface GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior {
  initialPromptFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
  repromptEventHandlers?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1EventHandler>;
}

export const GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior: Schema.Schema<GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  isList?: boolean;
  defaultValue?: unknown;
  displayName?: string;
  fillBehavior?: GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior;
  entityType?: string;
  redact?: boolean;
  required?: boolean;
  advancedSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettings;
}

export const GoogleCloudDialogflowCxV3beta1FormParameter: Schema.Schema<GoogleCloudDialogflowCxV3beta1FormParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isList: Schema.optional(Schema.Boolean),
    defaultValue: Schema.optional(Schema.Unknown),
    displayName: Schema.optional(Schema.String),
    fillBehavior: Schema.optional(
      GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior,
    ),
    entityType: Schema.optional(Schema.String),
    redact: Schema.optional(Schema.Boolean),
    required: Schema.optional(Schema.Boolean),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettings,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1FormParameter" });

export interface GoogleCloudDialogflowCxV3beta1Form {
  parameters?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1FormParameter>;
}

export const GoogleCloudDialogflowCxV3beta1Form: Schema.Schema<GoogleCloudDialogflowCxV3beta1Form> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameters: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1FormParameter),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Form" });

export interface GoogleCloudDialogflowCxV3beta1TransitionRoute {
  name?: string;
  condition?: string;
  intent?: string;
  targetFlow?: string;
  description?: string;
  triggerFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
  targetPage?: string;
}

export const GoogleCloudDialogflowCxV3beta1TransitionRoute: Schema.Schema<GoogleCloudDialogflowCxV3beta1TransitionRoute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    condition: Schema.optional(Schema.String),
    intent: Schema.optional(Schema.String),
    targetFlow: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    triggerFulfillment: Schema.optional(
      GoogleCloudDialogflowCxV3beta1Fulfillment,
    ),
    targetPage: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TransitionRoute" });

export interface GoogleCloudDialogflowCxV3beta1Page {
  entryFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
  knowledgeConnectorSettings?: GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings;
  displayName?: string;
  form?: GoogleCloudDialogflowCxV3beta1Form;
  eventHandlers?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1EventHandler>;
  name?: string;
  transitionRouteGroups?: ReadonlyArray<string>;
  advancedSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettings;
  description?: string;
  transitionRoutes?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TransitionRoute>;
}

export const GoogleCloudDialogflowCxV3beta1Page: Schema.Schema<GoogleCloudDialogflowCxV3beta1Page> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entryFulfillment: Schema.optional(
      GoogleCloudDialogflowCxV3beta1Fulfillment,
    ),
    knowledgeConnectorSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings,
    ),
    displayName: Schema.optional(Schema.String),
    form: Schema.optional(GoogleCloudDialogflowCxV3beta1Form),
    eventHandlers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1EventHandler),
    ),
    name: Schema.optional(Schema.String),
    transitionRouteGroups: Schema.optional(Schema.Array(Schema.String)),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettings,
    ),
    description: Schema.optional(Schema.String),
    transitionRoutes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TransitionRoute),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Page" });

export interface GoogleCloudDialogflowCxV3beta1IntentParameter {
  id?: string;
  entityType?: string;
  isList?: boolean;
  redact?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1IntentParameter: Schema.Schema<GoogleCloudDialogflowCxV3beta1IntentParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    entityType: Schema.optional(Schema.String),
    isList: Schema.optional(Schema.Boolean),
    redact: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1IntentParameter" });

export interface GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart {
  parameterId?: string;
  text?: string;
}

export const GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart: Schema.Schema<GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameterId: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart",
  });

export interface GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase {
  id?: string;
  parts?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart>;
  repeatCount?: number;
}

export const GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase: Schema.Schema<GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    parts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart),
    ),
    repeatCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase",
  });

export interface GoogleCloudDialogflowCxV3beta1Intent {
  description?: string;
  parameters?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1IntentParameter>;
  trainingPhrases?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase>;
  displayName?: string;
  dtmfPattern?: string;
  priority?: number;
  name?: string;
  isFallback?: boolean;
  labels?: Record<string, string>;
}

export const GoogleCloudDialogflowCxV3beta1Intent: Schema.Schema<GoogleCloudDialogflowCxV3beta1Intent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    parameters: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1IntentParameter),
    ),
    trainingPhrases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase),
    ),
    displayName: Schema.optional(Schema.String),
    dtmfPattern: Schema.optional(Schema.String),
    priority: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    isFallback: Schema.optional(Schema.Boolean),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Intent" });

export interface GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput {
  differences?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TestRunDifference>;
  currentPage?: GoogleCloudDialogflowCxV3beta1Page;
  textResponses?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ResponseMessageText>;
  diagnosticInfo?: Record<string, unknown>;
  sessionParameters?: Record<string, unknown>;
  triggeredIntent?: GoogleCloudDialogflowCxV3beta1Intent;
  status?: GoogleRpcStatus;
}

export const GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput: Schema.Schema<GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    differences: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TestRunDifference),
    ),
    currentPage: Schema.optional(GoogleCloudDialogflowCxV3beta1Page),
    textResponses: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ResponseMessageText),
    ),
    diagnosticInfo: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    sessionParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    triggeredIntent: Schema.optional(GoogleCloudDialogflowCxV3beta1Intent),
    status: Schema.optional(GoogleRpcStatus),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput",
  });

export interface GoogleCloudDialogflowV2beta1ResponseMessageText {
  text?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1ResponseMessageText: Schema.Schema<GoogleCloudDialogflowV2beta1ResponseMessageText> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ResponseMessageText",
  });

export interface GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall {
  phoneNumber?: string;
  sipUri?: string;
}

export const GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall: Schema.Schema<GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    phoneNumber: Schema.optional(Schema.String),
    sipUri: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall",
  });

export interface GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff {
  metadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff: Schema.Schema<GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff",
  });

export interface GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction {}

export const GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction: Schema.Schema<GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction",
  });

export interface GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment {
  uri?: string;
  allowPlaybackInterruption?: boolean;
  audio?: string;
}

export const GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment: Schema.Schema<GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
    audio: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment",
  });

export interface GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio {
  segments?: ReadonlyArray<GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment>;
}

export const GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio: Schema.Schema<GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    segments: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio",
  });

export interface GoogleCloudDialogflowV2beta1ResponseMessage {
  text?: GoogleCloudDialogflowV2beta1ResponseMessageText;
  telephonyTransferCall?: GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall;
  liveAgentHandoff?: GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff;
  endInteraction?: GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction;
  mixedAudio?: GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio;
  payload?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2beta1ResponseMessage: Schema.Schema<GoogleCloudDialogflowV2beta1ResponseMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(GoogleCloudDialogflowV2beta1ResponseMessageText),
    telephonyTransferCall: Schema.optional(
      GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall,
    ),
    liveAgentHandoff: Schema.optional(
      GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff,
    ),
    endInteraction: Schema.optional(
      GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction,
    ),
    mixedAudio: Schema.optional(
      GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio,
    ),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ResponseMessage" });

export interface GoogleCloudDialogflowV2beta1IngestContextReferencesRequest {
  contextReferences?: Record<
    string,
    GoogleCloudDialogflowV2beta1ConversationContextReference
  >;
}

export const GoogleCloudDialogflowV2beta1IngestContextReferencesRequest: Schema.Schema<GoogleCloudDialogflowV2beta1IngestContextReferencesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contextReferences: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowV2beta1ConversationContextReference,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IngestContextReferencesRequest",
  });

export interface GoogleCloudDialogflowV2beta1AnnotatedMessagePart {
  entityType?: string;
  text?: string;
  formattedValue?: unknown;
}

export const GoogleCloudDialogflowV2beta1AnnotatedMessagePart: Schema.Schema<GoogleCloudDialogflowV2beta1AnnotatedMessagePart> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityType: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
    formattedValue: Schema.optional(Schema.Unknown),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1AnnotatedMessagePart",
  });

export interface GoogleCloudDialogflowV2beta1MessageAnnotation {
  parts?: ReadonlyArray<GoogleCloudDialogflowV2beta1AnnotatedMessagePart>;
  containEntities?: boolean;
}

export const GoogleCloudDialogflowV2beta1MessageAnnotation: Schema.Schema<GoogleCloudDialogflowV2beta1MessageAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1AnnotatedMessagePart),
    ),
    containEntities: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1MessageAnnotation" });

export interface GoogleCloudDialogflowV2beta1Message {
  participantRole?:
    | "ROLE_UNSPECIFIED"
    | "HUMAN_AGENT"
    | "AUTOMATED_AGENT"
    | "END_USER"
    | (string & {});
  content?: string;
  createTime?: string;
  name?: string;
  languageCode?: string;
  sentimentAnalysis?: GoogleCloudDialogflowV2beta1SentimentAnalysisResult;
  sendTime?: string;
  messageAnnotation?: GoogleCloudDialogflowV2beta1MessageAnnotation;
  responseMessages?: ReadonlyArray<GoogleCloudDialogflowV2beta1ResponseMessage>;
  participant?: string;
}

export const GoogleCloudDialogflowV2beta1Message: Schema.Schema<GoogleCloudDialogflowV2beta1Message> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    participantRole: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    sentimentAnalysis: Schema.optional(
      GoogleCloudDialogflowV2beta1SentimentAnalysisResult,
    ),
    sendTime: Schema.optional(Schema.String),
    messageAnnotation: Schema.optional(
      GoogleCloudDialogflowV2beta1MessageAnnotation,
    ),
    responseMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1ResponseMessage),
    ),
    participant: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1Message" });

export interface GoogleCloudDialogflowV2beta1MessageEntry {
  role?:
    | "ROLE_UNSPECIFIED"
    | "HUMAN_AGENT"
    | "AUTOMATED_AGENT"
    | "END_USER"
    | (string & {});
  text?: string;
  languageCode?: string;
  createTime?: string;
}

export const GoogleCloudDialogflowV2beta1MessageEntry: Schema.Schema<GoogleCloudDialogflowV2beta1MessageEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1MessageEntry" });

export interface GoogleCloudDialogflowV2beta1ConversationContext {
  messageEntries?: ReadonlyArray<GoogleCloudDialogflowV2beta1MessageEntry>;
}

export const GoogleCloudDialogflowV2beta1ConversationContext: Schema.Schema<GoogleCloudDialogflowV2beta1ConversationContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messageEntries: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1MessageEntry),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ConversationContext",
  });

export interface GoogleCloudDialogflowV2beta1SummarizationSection {
  key?: string;
  definition?: string;
  type?:
    | "TYPE_UNSPECIFIED"
    | "SITUATION"
    | "ACTION"
    | "RESOLUTION"
    | "REASON_FOR_CANCELLATION"
    | "CUSTOMER_SATISFACTION"
    | "ENTITIES"
    | "CUSTOMER_DEFINED"
    | "SITUATION_CONCISE"
    | "ACTION_CONCISE"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1SummarizationSection: Schema.Schema<GoogleCloudDialogflowV2beta1SummarizationSection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    definition: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SummarizationSection",
  });

export interface GoogleCloudDialogflowV2beta1SummarizationSectionList {
  summarizationSections?: ReadonlyArray<GoogleCloudDialogflowV2beta1SummarizationSection>;
}

export const GoogleCloudDialogflowV2beta1SummarizationSectionList: Schema.Schema<GoogleCloudDialogflowV2beta1SummarizationSectionList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    summarizationSections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SummarizationSection),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SummarizationSectionList",
  });

export interface GoogleCloudDialogflowV2beta1FewShotExample {
  conversationContext?: GoogleCloudDialogflowV2beta1ConversationContext;
  extraInfo?: Record<string, string>;
  summarizationSectionList?: GoogleCloudDialogflowV2beta1SummarizationSectionList;
  output?: GoogleCloudDialogflowV2beta1GeneratorSuggestion;
}

export const GoogleCloudDialogflowV2beta1FewShotExample: Schema.Schema<GoogleCloudDialogflowV2beta1FewShotExample> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationContext: Schema.optional(
      GoogleCloudDialogflowV2beta1ConversationContext,
    ),
    extraInfo: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    summarizationSectionList: Schema.optional(
      GoogleCloudDialogflowV2beta1SummarizationSectionList,
    ),
    output: Schema.optional(GoogleCloudDialogflowV2beta1GeneratorSuggestion),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1FewShotExample" });

export interface GoogleCloudDialogflowV2beta1SummarizationContext {
  fewShotExamples?: ReadonlyArray<GoogleCloudDialogflowV2beta1FewShotExample>;
  summarizationSections?: ReadonlyArray<GoogleCloudDialogflowV2beta1SummarizationSection>;
  version?: string;
  outputLanguageCode?: string;
}

export const GoogleCloudDialogflowV2beta1SummarizationContext: Schema.Schema<GoogleCloudDialogflowV2beta1SummarizationContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fewShotExamples: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1FewShotExample),
    ),
    summarizationSections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SummarizationSection),
    ),
    version: Schema.optional(Schema.String),
    outputLanguageCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SummarizationContext",
  });

export interface GoogleCloudDialogflowV2beta1SuggestionDedupingConfig {
  similarityThreshold?: number;
  enableDeduping?: boolean;
}

export const GoogleCloudDialogflowV2beta1SuggestionDedupingConfig: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestionDedupingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    similarityThreshold: Schema.optional(Schema.Number),
    enableDeduping: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestionDedupingConfig",
  });

export interface GoogleCloudDialogflowV2beta1CesAppSpec {
  cesApp?: string;
  confirmationRequirement?:
    | "CONFIRMATION_REQUIREMENT_UNSPECIFIED"
    | "REQUIRED"
    | "NOT_REQUIRED"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1CesAppSpec: Schema.Schema<GoogleCloudDialogflowV2beta1CesAppSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cesApp: Schema.optional(Schema.String),
    confirmationRequirement: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1CesAppSpec" });

export interface GoogleCloudDialogflowV2beta1InferenceParameter {
  maxOutputTokens?: number;
  temperature?: number;
  topP?: number;
  topK?: number;
}

export const GoogleCloudDialogflowV2beta1InferenceParameter: Schema.Schema<GoogleCloudDialogflowV2beta1InferenceParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxOutputTokens: Schema.optional(Schema.Number),
    temperature: Schema.optional(Schema.Number),
    topP: Schema.optional(Schema.Number),
    topK: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1InferenceParameter" });

export interface GoogleCloudDialogflowV2beta1AgentCoachingContext {
  overarchingGuidance?: string;
  instructions?: ReadonlyArray<GoogleCloudDialogflowV2beta1AgentCoachingInstruction>;
  version?: string;
  outputLanguageCode?: string;
}

export const GoogleCloudDialogflowV2beta1AgentCoachingContext: Schema.Schema<GoogleCloudDialogflowV2beta1AgentCoachingContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    overarchingGuidance: Schema.optional(Schema.String),
    instructions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1AgentCoachingInstruction),
    ),
    version: Schema.optional(Schema.String),
    outputLanguageCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1AgentCoachingContext",
  });

export interface GoogleCloudDialogflowV2beta1CesToolSpec {
  confirmationRequirement?:
    | "CONFIRMATION_REQUIREMENT_UNSPECIFIED"
    | "REQUIRED"
    | "NOT_REQUIRED"
    | (string & {});
  cesTool?: string;
}

export const GoogleCloudDialogflowV2beta1CesToolSpec: Schema.Schema<GoogleCloudDialogflowV2beta1CesToolSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confirmationRequirement: Schema.optional(Schema.String),
    cesTool: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1CesToolSpec" });

export interface GoogleCloudDialogflowV2beta1FreeFormContext {
  text?: string;
}

export const GoogleCloudDialogflowV2beta1FreeFormContext: Schema.Schema<GoogleCloudDialogflowV2beta1FreeFormContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1FreeFormContext" });

export interface GoogleCloudDialogflowV2beta1ToolsetTool {
  operationId?: string;
  confirmationRequirement?:
    | "CONFIRMATION_REQUIREMENT_UNSPECIFIED"
    | "REQUIRED"
    | "NOT_REQUIRED"
    | (string & {});
  toolset?: string;
}

export const GoogleCloudDialogflowV2beta1ToolsetTool: Schema.Schema<GoogleCloudDialogflowV2beta1ToolsetTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operationId: Schema.optional(Schema.String),
    confirmationRequirement: Schema.optional(Schema.String),
    toolset: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ToolsetTool" });

export interface GoogleCloudDialogflowV2beta1Generator {
  summarizationContext?: GoogleCloudDialogflowV2beta1SummarizationContext;
  suggestionDedupingConfig?: GoogleCloudDialogflowV2beta1SuggestionDedupingConfig;
  name?: string;
  cesAppSpecs?: ReadonlyArray<GoogleCloudDialogflowV2beta1CesAppSpec>;
  updateTime?: string;
  inferenceParameter?: GoogleCloudDialogflowV2beta1InferenceParameter;
  agentCoachingContext?: GoogleCloudDialogflowV2beta1AgentCoachingContext;
  cesToolSpecs?: ReadonlyArray<GoogleCloudDialogflowV2beta1CesToolSpec>;
  createTime?: string;
  description?: string;
  freeFormContext?: GoogleCloudDialogflowV2beta1FreeFormContext;
  toolsetTools?: ReadonlyArray<GoogleCloudDialogflowV2beta1ToolsetTool>;
  publishedModel?: string;
  tools?: ReadonlyArray<string>;
  triggerEvent?:
    | "TRIGGER_EVENT_UNSPECIFIED"
    | "END_OF_UTTERANCE"
    | "MANUAL_CALL"
    | "CUSTOMER_MESSAGE"
    | "AGENT_MESSAGE"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1Generator: Schema.Schema<GoogleCloudDialogflowV2beta1Generator> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    summarizationContext: Schema.optional(
      GoogleCloudDialogflowV2beta1SummarizationContext,
    ),
    suggestionDedupingConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestionDedupingConfig,
    ),
    name: Schema.optional(Schema.String),
    cesAppSpecs: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1CesAppSpec),
    ),
    updateTime: Schema.optional(Schema.String),
    inferenceParameter: Schema.optional(
      GoogleCloudDialogflowV2beta1InferenceParameter,
    ),
    agentCoachingContext: Schema.optional(
      GoogleCloudDialogflowV2beta1AgentCoachingContext,
    ),
    cesToolSpecs: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1CesToolSpec),
    ),
    createTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    freeFormContext: Schema.optional(
      GoogleCloudDialogflowV2beta1FreeFormContext,
    ),
    toolsetTools: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1ToolsetTool),
    ),
    publishedModel: Schema.optional(Schema.String),
    tools: Schema.optional(Schema.Array(Schema.String)),
    triggerEvent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1Generator" });

export interface GoogleCloudDialogflowV2beta1GenerateStatelessSuggestionRequest {
  triggerEvents?: ReadonlyArray<
    | "TRIGGER_EVENT_UNSPECIFIED"
    | "END_OF_UTTERANCE"
    | "MANUAL_CALL"
    | "CUSTOMER_MESSAGE"
    | "AGENT_MESSAGE"
    | (string & {})
  >;
  securitySettings?: string;
  conversationContext?: GoogleCloudDialogflowV2beta1ConversationContext;
  generator?: GoogleCloudDialogflowV2beta1Generator;
  contextReferences?: Record<
    string,
    GoogleCloudDialogflowV2beta1ConversationContextReference
  >;
  generatorName?: string;
}

export const GoogleCloudDialogflowV2beta1GenerateStatelessSuggestionRequest: Schema.Schema<GoogleCloudDialogflowV2beta1GenerateStatelessSuggestionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    triggerEvents: Schema.optional(Schema.Array(Schema.String)),
    securitySettings: Schema.optional(Schema.String),
    conversationContext: Schema.optional(
      GoogleCloudDialogflowV2beta1ConversationContext,
    ),
    generator: Schema.optional(GoogleCloudDialogflowV2beta1Generator),
    contextReferences: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowV2beta1ConversationContextReference,
      ),
    ),
    generatorName: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1GenerateStatelessSuggestionRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1BargeInConfig {
  noBargeInDuration?: string;
  totalDuration?: string;
}

export const GoogleCloudDialogflowCxV3beta1BargeInConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1BargeInConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    noBargeInDuration: Schema.optional(Schema.String),
    totalDuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1BargeInConfig" });

export interface GoogleCloudDialogflowCxV3beta1InputAudioConfig {
  phraseHints?: ReadonlyArray<string>;
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
  bargeInConfig?: GoogleCloudDialogflowCxV3beta1BargeInConfig;
  optOutConformerModelMigration?: boolean;
  sampleRateHertz?: number;
  model?: string;
  singleUtterance?: boolean;
  modelVariant?:
    | "SPEECH_MODEL_VARIANT_UNSPECIFIED"
    | "USE_BEST_AVAILABLE"
    | "USE_STANDARD"
    | "USE_ENHANCED"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1InputAudioConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1InputAudioConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    phraseHints: Schema.optional(Schema.Array(Schema.String)),
    audioEncoding: Schema.optional(Schema.String),
    enableWordInfo: Schema.optional(Schema.Boolean),
    bargeInConfig: Schema.optional(GoogleCloudDialogflowCxV3beta1BargeInConfig),
    optOutConformerModelMigration: Schema.optional(Schema.Boolean),
    sampleRateHertz: Schema.optional(Schema.Number),
    model: Schema.optional(Schema.String),
    singleUtterance: Schema.optional(Schema.Boolean),
    modelVariant: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1InputAudioConfig" });

export interface GoogleCloudDialogflowV2beta1ExportAgentResponse {
  agentUri?: string;
  agentContent?: string;
}

export const GoogleCloudDialogflowV2beta1ExportAgentResponse: Schema.Schema<GoogleCloudDialogflowV2beta1ExportAgentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentUri: Schema.optional(Schema.String),
    agentContent: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ExportAgentResponse",
  });

export interface GoogleCloudDialogflowV2beta1GcsDestination {
  uri?: string;
}

export const GoogleCloudDialogflowV2beta1GcsDestination: Schema.Schema<GoogleCloudDialogflowV2beta1GcsDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1GcsDestination" });

export interface GoogleCloudDialogflowV2beta1ExportOperationMetadata {
  exportedGcsDestination?: GoogleCloudDialogflowV2beta1GcsDestination;
}

export const GoogleCloudDialogflowV2beta1ExportOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2beta1ExportOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exportedGcsDestination: Schema.optional(
      GoogleCloudDialogflowV2beta1GcsDestination,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ExportOperationMetadata",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata {
  state?: "STATE_UNSPECIFIED" | "PENDING" | "RUNNING" | "DONE" | (string & {});
  knowledgeBase?: string;
  exportOperationMetadata?: GoogleCloudDialogflowV2beta1ExportOperationMetadata;
  doneTime?: string;
}

export const GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    knowledgeBase: Schema.optional(Schema.String),
    exportOperationMetadata: Schema.optional(
      GoogleCloudDialogflowV2beta1ExportOperationMetadata,
    ),
    doneTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet {
  title?: string;
  metadata?: Record<string, unknown>;
  uri?: string;
  text?: string;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    uri: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource {
  snippets?: ReadonlyArray<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet>;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerFaqSource: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerFaqSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    question: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerFaqSource",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerEventSource {
  event?: string;
  snippets?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerEventSource: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerEventSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    event: Schema.optional(Schema.String),
    snippets: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerEventSource",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswer {
  generativeSource?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource;
  playbookSource?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource;
  faqSource?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerFaqSource;
  eventSource?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerEventSource;
  answerText?: string;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswer: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generativeSource: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource,
    ),
    playbookSource: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource,
    ),
    faqSource: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerFaqSource,
    ),
    eventSource: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerEventSource,
    ),
    answerText: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswer",
  });

export interface GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsOverallScoresByMetric {
  metric?: string;
}

export const GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsOverallScoresByMetric: Schema.Schema<GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsOverallScoresByMetric> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metric: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsOverallScoresByMetric",
  });

export interface GoogleCloudDialogflowCxV3InlineDestination {
  content?: string;
}

export const GoogleCloudDialogflowCxV3InlineDestination: Schema.Schema<GoogleCloudDialogflowCxV3InlineDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3InlineDestination" });

export interface GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource {
  snippets?: ReadonlyArray<GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet>;
}

export const GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource: Schema.Schema<GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerFaqSource: Schema.Schema<GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerFaqSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    question: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerFaqSource",
  });

export interface GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerEventSource {
  event?: string;
  snippets?: GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource;
}

export const GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerEventSource: Schema.Schema<GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerEventSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    event: Schema.optional(Schema.String),
    snippets: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerEventSource",
  });

export interface GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswer {
  generativeSource?: GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource;
  faqSource?: GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerFaqSource;
  eventSource?: GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerEventSource;
  playbookSource?: GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource;
  answerText?: string;
}

export const GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswer: Schema.Schema<GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generativeSource: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource,
    ),
    faqSource: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerFaqSource,
    ),
    eventSource: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerEventSource,
    ),
    playbookSource: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource,
    ),
    answerText: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswer",
  });

export interface GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior {
  returnQueryOnly?: boolean;
  disableSyncDelivery?: boolean;
  queryContainedSearchContext?: boolean;
  queryGenerationAgentLanguageMismatch?: boolean;
  invalidItemsQuerySuggestionSkipped?: boolean;
  useCustomSafetyFilterLevel?: boolean;
  appendedSearchContextCount?: number;
  endUserMetadataIncluded?: boolean;
  multipleQueriesGenerated?: boolean;
  answerGenerationRewriterOn?: boolean;
  conversationTranscriptHasMixedLanguages?: boolean;
  thirdPartyConnectorAllowed?: boolean;
  previousQueriesIncluded?: boolean;
  usePubsubDelivery?: boolean;
  useTranslatedMessage?: boolean;
  primaryQueryRedactedAndReplaced?: boolean;
  queryGenerationEndUserLanguageMismatch?: boolean;
}

export const GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior: Schema.Schema<GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    returnQueryOnly: Schema.optional(Schema.Boolean),
    disableSyncDelivery: Schema.optional(Schema.Boolean),
    queryContainedSearchContext: Schema.optional(Schema.Boolean),
    queryGenerationAgentLanguageMismatch: Schema.optional(Schema.Boolean),
    invalidItemsQuerySuggestionSkipped: Schema.optional(Schema.Boolean),
    useCustomSafetyFilterLevel: Schema.optional(Schema.Boolean),
    appendedSearchContextCount: Schema.optional(Schema.Number),
    endUserMetadataIncluded: Schema.optional(Schema.Boolean),
    multipleQueriesGenerated: Schema.optional(Schema.Boolean),
    answerGenerationRewriterOn: Schema.optional(Schema.Boolean),
    conversationTranscriptHasMixedLanguages: Schema.optional(Schema.Boolean),
    thirdPartyConnectorAllowed: Schema.optional(Schema.Boolean),
    previousQueriesIncluded: Schema.optional(Schema.Boolean),
    usePubsubDelivery: Schema.optional(Schema.Boolean),
    useTranslatedMessage: Schema.optional(Schema.Boolean),
    primaryQueryRedactedAndReplaced: Schema.optional(Schema.Boolean),
    queryGenerationEndUserLanguageMismatch: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior",
  });

export interface GoogleCloudDialogflowV2KnowledgeAssistDebugInfo {
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
  knowledgeAssistBehavior?: GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior;
  queryCategorizationFailureReason?:
    | "QUERY_CATEGORIZATION_FAILURE_REASON_UNSPECIFIED"
    | "QUERY_CATEGORIZATION_INVALID_CONFIG"
    | "QUERY_CATEGORIZATION_RESULT_NOT_FOUND"
    | "QUERY_CATEGORIZATION_FAILED"
    | (string & {});
}

export const GoogleCloudDialogflowV2KnowledgeAssistDebugInfo: Schema.Schema<GoogleCloudDialogflowV2KnowledgeAssistDebugInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceLatency: Schema.optional(GoogleCloudDialogflowV2ServiceLatency),
    queryGenerationFailureReason: Schema.optional(Schema.String),
    datastoreResponseReason: Schema.optional(Schema.String),
    ingestedContextReferenceDebugInfo: Schema.optional(
      GoogleCloudDialogflowV2IngestedContextReferenceDebugInfo,
    ),
    knowledgeAssistBehavior: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior,
    ),
    queryCategorizationFailureReason: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2KnowledgeAssistDebugInfo",
  });

export interface GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery {
  queryText?: string;
}

export const GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery: Schema.Schema<GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryText: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery",
  });

export interface GoogleCloudDialogflowV2KnowledgeAssistAnswer {
  suggestedQueryAnswer?: GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswer;
  knowledgeAssistDebugInfo?: GoogleCloudDialogflowV2KnowledgeAssistDebugInfo;
  suggestedQuery?: GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2KnowledgeAssistAnswer: Schema.Schema<GoogleCloudDialogflowV2KnowledgeAssistAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suggestedQueryAnswer: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswer,
    ),
    knowledgeAssistDebugInfo: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistDebugInfo,
    ),
    suggestedQuery: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery,
    ),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2KnowledgeAssistAnswer" });

export interface GoogleCloudDialogflowV2beta1ToolConnectorToolActionEntityOperation {
  entityId?: string;
  operation?:
    | "OPERATION_TYPE_UNSPECIFIED"
    | "LIST"
    | "GET"
    | "CREATE"
    | "UPDATE"
    | "DELETE"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1ToolConnectorToolActionEntityOperation: Schema.Schema<GoogleCloudDialogflowV2beta1ToolConnectorToolActionEntityOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityId: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1ToolConnectorToolActionEntityOperation",
  });

export interface GoogleCloudDialogflowV2beta1CreateMessageRequest {
  parent?: string;
  message?: GoogleCloudDialogflowV2beta1Message;
}

export const GoogleCloudDialogflowV2beta1CreateMessageRequest: Schema.Schema<GoogleCloudDialogflowV2beta1CreateMessageRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.optional(Schema.String),
    message: Schema.optional(GoogleCloudDialogflowV2beta1Message),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1CreateMessageRequest",
  });

export interface GoogleCloudDialogflowV2beta1BatchCreateMessagesRequest {
  requests?: ReadonlyArray<GoogleCloudDialogflowV2beta1CreateMessageRequest>;
}

export const GoogleCloudDialogflowV2beta1BatchCreateMessagesRequest: Schema.Schema<GoogleCloudDialogflowV2beta1BatchCreateMessagesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requests: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1CreateMessageRequest),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1BatchCreateMessagesRequest",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior {
  useCustomSafetyFilterLevel?: boolean;
  queryGenerationAgentLanguageMismatch?: boolean;
  invalidItemsQuerySuggestionSkipped?: boolean;
  appendedSearchContextCount?: number;
  returnQueryOnly?: boolean;
  disableSyncDelivery?: boolean;
  queryContainedSearchContext?: boolean;
  endUserMetadataIncluded?: boolean;
  multipleQueriesGenerated?: boolean;
  previousQueriesIncluded?: boolean;
  answerGenerationRewriterOn?: boolean;
  conversationTranscriptHasMixedLanguages?: boolean;
  thirdPartyConnectorAllowed?: boolean;
  queryGenerationEndUserLanguageMismatch?: boolean;
  usePubsubDelivery?: boolean;
  useTranslatedMessage?: boolean;
  primaryQueryRedactedAndReplaced?: boolean;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    useCustomSafetyFilterLevel: Schema.optional(Schema.Boolean),
    queryGenerationAgentLanguageMismatch: Schema.optional(Schema.Boolean),
    invalidItemsQuerySuggestionSkipped: Schema.optional(Schema.Boolean),
    appendedSearchContextCount: Schema.optional(Schema.Number),
    returnQueryOnly: Schema.optional(Schema.Boolean),
    disableSyncDelivery: Schema.optional(Schema.Boolean),
    queryContainedSearchContext: Schema.optional(Schema.Boolean),
    endUserMetadataIncluded: Schema.optional(Schema.Boolean),
    multipleQueriesGenerated: Schema.optional(Schema.Boolean),
    previousQueriesIncluded: Schema.optional(Schema.Boolean),
    answerGenerationRewriterOn: Schema.optional(Schema.Boolean),
    conversationTranscriptHasMixedLanguages: Schema.optional(Schema.Boolean),
    thirdPartyConnectorAllowed: Schema.optional(Schema.Boolean),
    queryGenerationEndUserLanguageMismatch: Schema.optional(Schema.Boolean),
    usePubsubDelivery: Schema.optional(Schema.Boolean),
    useTranslatedMessage: Schema.optional(Schema.Boolean),
    primaryQueryRedactedAndReplaced: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfo {
  serviceLatency?: GoogleCloudDialogflowV2beta1ServiceLatency;
  queryCategorizationFailureReason?:
    | "QUERY_CATEGORIZATION_FAILURE_REASON_UNSPECIFIED"
    | "QUERY_CATEGORIZATION_INVALID_CONFIG"
    | "QUERY_CATEGORIZATION_RESULT_NOT_FOUND"
    | "QUERY_CATEGORIZATION_FAILED"
    | (string & {});
  knowledgeAssistBehavior?: GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior;
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
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfo: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceLatency: Schema.optional(GoogleCloudDialogflowV2beta1ServiceLatency),
    queryCategorizationFailureReason: Schema.optional(Schema.String),
    knowledgeAssistBehavior: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior,
    ),
    queryGenerationFailureReason: Schema.optional(Schema.String),
    datastoreResponseReason: Schema.optional(Schema.String),
    ingestedContextReferenceDebugInfo: Schema.optional(
      GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfo,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfo",
  });

export interface GoogleCloudDialogflowV2beta1GcsSource {
  uri?: string;
}

export const GoogleCloudDialogflowV2beta1GcsSource: Schema.Schema<GoogleCloudDialogflowV2beta1GcsSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1GcsSource" });

export interface GoogleCloudDialogflowV2beta1ReloadDocumentRequest {
  gcsSource?: GoogleCloudDialogflowV2beta1GcsSource;
  importGcsCustomMetadata?: boolean;
}

export const GoogleCloudDialogflowV2beta1ReloadDocumentRequest: Schema.Schema<GoogleCloudDialogflowV2beta1ReloadDocumentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsSource: Schema.optional(GoogleCloudDialogflowV2beta1GcsSource),
    importGcsCustomMetadata: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ReloadDocumentRequest",
  });

export interface GoogleCloudDialogflowCxV3EnvironmentVersionConfig {
  version?: string;
}

export const GoogleCloudDialogflowCxV3EnvironmentVersionConfig: Schema.Schema<GoogleCloudDialogflowCxV3EnvironmentVersionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3EnvironmentVersionConfig",
  });

export interface GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig {
  testCases?: ReadonlyArray<string>;
  enableContinuousRun?: boolean;
  enablePredeploymentRun?: boolean;
}

export const GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig: Schema.Schema<GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testCases: Schema.optional(Schema.Array(Schema.String)),
    enableContinuousRun: Schema.optional(Schema.Boolean),
    enablePredeploymentRun: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig",
  });

export interface GoogleCloudDialogflowCxV3WebhookGenericWebServiceServiceAccountAuthConfig {
  serviceAccount?: string;
}

export const GoogleCloudDialogflowCxV3WebhookGenericWebServiceServiceAccountAuthConfig: Schema.Schema<GoogleCloudDialogflowCxV3WebhookGenericWebServiceServiceAccountAuthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAccount: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3WebhookGenericWebServiceServiceAccountAuthConfig",
  });

export interface GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig {
  tokenEndpoint?: string;
  clientId?: string;
  secretVersionForClientSecret?: string;
  clientSecret?: string;
  scopes?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig: Schema.Schema<GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tokenEndpoint: Schema.optional(Schema.String),
    clientId: Schema.optional(Schema.String),
    secretVersionForClientSecret: Schema.optional(Schema.String),
    clientSecret: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig",
  });

export interface GoogleCloudDialogflowCxV3WebhookGenericWebServiceSecretVersionHeaderValue {
  secretVersion?: string;
}

export const GoogleCloudDialogflowCxV3WebhookGenericWebServiceSecretVersionHeaderValue: Schema.Schema<GoogleCloudDialogflowCxV3WebhookGenericWebServiceSecretVersionHeaderValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    secretVersion: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3WebhookGenericWebServiceSecretVersionHeaderValue",
  });

export interface GoogleCloudDialogflowCxV3WebhookGenericWebService {
  serviceAgentAuth?:
    | "SERVICE_AGENT_AUTH_UNSPECIFIED"
    | "NONE"
    | "ID_TOKEN"
    | "ACCESS_TOKEN"
    | (string & {});
  requestHeaders?: Record<string, string>;
  allowedCaCerts?: ReadonlyArray<string>;
  serviceAccountAuthConfig?: GoogleCloudDialogflowCxV3WebhookGenericWebServiceServiceAccountAuthConfig;
  webhookType?:
    | "WEBHOOK_TYPE_UNSPECIFIED"
    | "STANDARD"
    | "FLEXIBLE"
    | (string & {});
  oauthConfig?: GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig;
  secretVersionForUsernamePassword?: string;
  password?: string;
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
  uri?: string;
  username?: string;
  secretVersionsForRequestHeaders?: Record<
    string,
    GoogleCloudDialogflowCxV3WebhookGenericWebServiceSecretVersionHeaderValue
  >;
  parameterMapping?: Record<string, string>;
  requestBody?: string;
}

export const GoogleCloudDialogflowCxV3WebhookGenericWebService: Schema.Schema<GoogleCloudDialogflowCxV3WebhookGenericWebService> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAgentAuth: Schema.optional(Schema.String),
    requestHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    allowedCaCerts: Schema.optional(Schema.Array(Schema.String)),
    serviceAccountAuthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookGenericWebServiceServiceAccountAuthConfig,
    ),
    webhookType: Schema.optional(Schema.String),
    oauthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig,
    ),
    secretVersionForUsernamePassword: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    httpMethod: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    secretVersionsForRequestHeaders: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowCxV3WebhookGenericWebServiceSecretVersionHeaderValue,
      ),
    ),
    parameterMapping: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    requestBody: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3WebhookGenericWebService",
  });

export interface GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig {
  service?: string;
  genericWebService?: GoogleCloudDialogflowCxV3WebhookGenericWebService;
}

export const GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig: Schema.Schema<GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
    genericWebService: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookGenericWebService,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig",
  });

export interface GoogleCloudDialogflowCxV3Webhook {
  name?: string;
  genericWebService?: GoogleCloudDialogflowCxV3WebhookGenericWebService;
  disabled?: boolean;
  displayName?: string;
  timeout?: string;
  serviceDirectory?: GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig;
}

export const GoogleCloudDialogflowCxV3Webhook: Schema.Schema<GoogleCloudDialogflowCxV3Webhook> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    genericWebService: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookGenericWebService,
    ),
    disabled: Schema.optional(Schema.Boolean),
    displayName: Schema.optional(Schema.String),
    timeout: Schema.optional(Schema.String),
    serviceDirectory: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Webhook" });

export interface GoogleCloudDialogflowCxV3EnvironmentWebhookConfig {
  webhookOverrides?: ReadonlyArray<GoogleCloudDialogflowCxV3Webhook>;
}

export const GoogleCloudDialogflowCxV3EnvironmentWebhookConfig: Schema.Schema<GoogleCloudDialogflowCxV3EnvironmentWebhookConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webhookOverrides: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3Webhook),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3EnvironmentWebhookConfig",
  });

export interface GoogleCloudDialogflowCxV3Environment {
  versionConfigs?: ReadonlyArray<GoogleCloudDialogflowCxV3EnvironmentVersionConfig>;
  name?: string;
  displayName?: string;
  testCasesConfig?: GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig;
  webhookConfig?: GoogleCloudDialogflowCxV3EnvironmentWebhookConfig;
  description?: string;
  updateTime?: string;
}

export const GoogleCloudDialogflowCxV3Environment: Schema.Schema<GoogleCloudDialogflowCxV3Environment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versionConfigs: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3EnvironmentVersionConfig),
    ),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    testCasesConfig: Schema.optional(
      GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig,
    ),
    webhookConfig: Schema.optional(
      GoogleCloudDialogflowCxV3EnvironmentWebhookConfig,
    ),
    description: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Environment" });

export interface GoogleCloudDialogflowCxV3DeployFlowResponse {
  environment?: GoogleCloudDialogflowCxV3Environment;
  deployment?: string;
}

export const GoogleCloudDialogflowCxV3DeployFlowResponse: Schema.Schema<GoogleCloudDialogflowCxV3DeployFlowResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    environment: Schema.optional(GoogleCloudDialogflowCxV3Environment),
    deployment: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3DeployFlowResponse" });

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

export const GoogleCloudDialogflowV2beta1TelephonyDtmfEvents: Schema.Schema<GoogleCloudDialogflowV2beta1TelephonyDtmfEvents> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dtmfEvents: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1TelephonyDtmfEvents",
  });

export interface GoogleCloudDialogflowV2beta1RaiSettingsRaiCategoryConfig {
  sensitivityLevel?:
    | "SENSITIVITY_LEVEL_UNSPECIFIED"
    | "BLOCK_MOST"
    | "BLOCK_SOME"
    | "BLOCK_FEW"
    | "BLOCK_NONE"
    | (string & {});
  category?:
    | "RAI_CATEGORY_UNSPECIFIED"
    | "DANGEROUS_CONTENT"
    | "SEXUALLY_EXPLICIT"
    | "HARASSMENT"
    | "HATE_SPEECH"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1RaiSettingsRaiCategoryConfig: Schema.Schema<GoogleCloudDialogflowV2beta1RaiSettingsRaiCategoryConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sensitivityLevel: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1RaiSettingsRaiCategoryConfig",
  });

export interface GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadata {
  createTime?: string;
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
}

export const GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    conversationProfile: Schema.optional(Schema.String),
    participantRole: Schema.optional(Schema.String),
    suggestionFeatureType: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadata",
  });

export interface GoogleCloudDialogflowV2beta1ImportAgentRequest {
  agentUri?: string;
  agentContent?: string;
}

export const GoogleCloudDialogflowV2beta1ImportAgentRequest: Schema.Schema<GoogleCloudDialogflowV2beta1ImportAgentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentUri: Schema.optional(Schema.String),
    agentContent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ImportAgentRequest" });

export interface GoogleCloudDialogflowV2beta1SmartReplyAnswer {
  reply?: string;
  confidence?: number;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2beta1SmartReplyAnswer: Schema.Schema<GoogleCloudDialogflowV2beta1SmartReplyAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reply: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1SmartReplyAnswer" });

export interface GoogleCloudDialogflowV2InitializeEncryptionSpecRequest {
  encryptionSpec?: GoogleCloudDialogflowV2EncryptionSpec;
}

export const GoogleCloudDialogflowV2InitializeEncryptionSpecRequest: Schema.Schema<GoogleCloudDialogflowV2InitializeEncryptionSpecRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    encryptionSpec: Schema.optional(GoogleCloudDialogflowV2EncryptionSpec),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2InitializeEncryptionSpecRequest",
  });

export interface GoogleCloudDialogflowV2InitializeEncryptionSpecMetadata {
  request?: GoogleCloudDialogflowV2InitializeEncryptionSpecRequest;
}

export const GoogleCloudDialogflowV2InitializeEncryptionSpecMetadata: Schema.Schema<GoogleCloudDialogflowV2InitializeEncryptionSpecMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    request: Schema.optional(
      GoogleCloudDialogflowV2InitializeEncryptionSpecRequest,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2InitializeEncryptionSpecMetadata",
  });

export interface GoogleCloudDialogflowV2beta1ToolExtensionTool {
  name?: string;
}

export const GoogleCloudDialogflowV2beta1ToolExtensionTool: Schema.Schema<GoogleCloudDialogflowV2beta1ToolExtensionTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ToolExtensionTool" });

export interface GoogleCloudDialogflowV2beta1ToolServiceDirectoryConfig {
  service?: string;
}

export const GoogleCloudDialogflowV2beta1ToolServiceDirectoryConfig: Schema.Schema<GoogleCloudDialogflowV2beta1ToolServiceDirectoryConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ToolServiceDirectoryConfig",
  });

export interface GoogleCloudDialogflowV2beta1ToolTLSConfigCACert {
  displayName?: string;
  cert?: string;
}

export const GoogleCloudDialogflowV2beta1ToolTLSConfigCACert: Schema.Schema<GoogleCloudDialogflowV2beta1ToolTLSConfigCACert> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    cert: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ToolTLSConfigCACert",
  });

export interface GoogleCloudDialogflowV2beta1ToolTLSConfig {
  caCerts?: ReadonlyArray<GoogleCloudDialogflowV2beta1ToolTLSConfigCACert>;
}

export const GoogleCloudDialogflowV2beta1ToolTLSConfig: Schema.Schema<GoogleCloudDialogflowV2beta1ToolTLSConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    caCerts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1ToolTLSConfigCACert),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ToolTLSConfig" });

export interface GoogleCloudDialogflowV2beta1ToolAuthenticationApiKeyConfig {
  requestLocation?:
    | "REQUEST_LOCATION_UNSPECIFIED"
    | "HEADER"
    | "QUERY_STRING"
    | (string & {});
  keyName?: string;
  secretVersionForApiKey?: string;
  apiKey?: string;
}

export const GoogleCloudDialogflowV2beta1ToolAuthenticationApiKeyConfig: Schema.Schema<GoogleCloudDialogflowV2beta1ToolAuthenticationApiKeyConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestLocation: Schema.optional(Schema.String),
    keyName: Schema.optional(Schema.String),
    secretVersionForApiKey: Schema.optional(Schema.String),
    apiKey: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ToolAuthenticationApiKeyConfig",
  });

export interface GoogleCloudDialogflowV2beta1ToolAuthenticationOAuthConfig {
  clientId?: string;
  secretVersionForClientSecret?: string;
  tokenEndpoint?: string;
  clientSecret?: string;
  scopes?: ReadonlyArray<string>;
  oauthGrantType?:
    | "OAUTH_GRANT_TYPE_UNSPECIFIED"
    | "CLIENT_CREDENTIAL"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1ToolAuthenticationOAuthConfig: Schema.Schema<GoogleCloudDialogflowV2beta1ToolAuthenticationOAuthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientId: Schema.optional(Schema.String),
    secretVersionForClientSecret: Schema.optional(Schema.String),
    tokenEndpoint: Schema.optional(Schema.String),
    clientSecret: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Schema.String)),
    oauthGrantType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ToolAuthenticationOAuthConfig",
  });

export interface GoogleCloudDialogflowV2beta1ToolAuthenticationServiceAgentAuthConfig {
  serviceAgentAuth?:
    | "SERVICE_AGENT_AUTH_UNSPECIFIED"
    | "ID_TOKEN"
    | "ACCESS_TOKEN"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1ToolAuthenticationServiceAgentAuthConfig: Schema.Schema<GoogleCloudDialogflowV2beta1ToolAuthenticationServiceAgentAuthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAgentAuth: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1ToolAuthenticationServiceAgentAuthConfig",
  });

export interface GoogleCloudDialogflowV2beta1ToolAuthenticationBearerTokenConfig {
  token?: string;
  secretVersionForToken?: string;
}

export const GoogleCloudDialogflowV2beta1ToolAuthenticationBearerTokenConfig: Schema.Schema<GoogleCloudDialogflowV2beta1ToolAuthenticationBearerTokenConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String),
    secretVersionForToken: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1ToolAuthenticationBearerTokenConfig",
  });

export interface GoogleCloudDialogflowV2beta1ToolAuthentication {
  apiKeyConfig?: GoogleCloudDialogflowV2beta1ToolAuthenticationApiKeyConfig;
  oauthConfig?: GoogleCloudDialogflowV2beta1ToolAuthenticationOAuthConfig;
  serviceAgentAuthConfig?: GoogleCloudDialogflowV2beta1ToolAuthenticationServiceAgentAuthConfig;
  bearerTokenConfig?: GoogleCloudDialogflowV2beta1ToolAuthenticationBearerTokenConfig;
}

export const GoogleCloudDialogflowV2beta1ToolAuthentication: Schema.Schema<GoogleCloudDialogflowV2beta1ToolAuthentication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiKeyConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1ToolAuthenticationApiKeyConfig,
    ),
    oauthConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1ToolAuthenticationOAuthConfig,
    ),
    serviceAgentAuthConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1ToolAuthenticationServiceAgentAuthConfig,
    ),
    bearerTokenConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1ToolAuthenticationBearerTokenConfig,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ToolAuthentication" });

export interface GoogleCloudDialogflowV2beta1ToolOpenApiTool {
  serviceDirectoryConfig?: GoogleCloudDialogflowV2beta1ToolServiceDirectoryConfig;
  tlsConfig?: GoogleCloudDialogflowV2beta1ToolTLSConfig;
  authentication?: GoogleCloudDialogflowV2beta1ToolAuthentication;
  textSchema?: string;
}

export const GoogleCloudDialogflowV2beta1ToolOpenApiTool: Schema.Schema<GoogleCloudDialogflowV2beta1ToolOpenApiTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceDirectoryConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1ToolServiceDirectoryConfig,
    ),
    tlsConfig: Schema.optional(GoogleCloudDialogflowV2beta1ToolTLSConfig),
    authentication: Schema.optional(
      GoogleCloudDialogflowV2beta1ToolAuthentication,
    ),
    textSchema: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ToolOpenApiTool" });

export interface GoogleCloudDialogflowV2beta1ToolFunctionTool {
  methodType?:
    | "METHOD_TYPE_UNSPECIFIED"
    | "GET"
    | "POST"
    | "PUT"
    | "DELETE"
    | "PATCH"
    | (string & {});
  inputSchema?: Record<string, unknown>;
  outputSchema?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2beta1ToolFunctionTool: Schema.Schema<GoogleCloudDialogflowV2beta1ToolFunctionTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    methodType: Schema.optional(Schema.String),
    inputSchema: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    outputSchema: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ToolFunctionTool" });

export interface GoogleCloudDialogflowV2beta1ToolConnectorToolAction {
  inputFields?: ReadonlyArray<string>;
  outputFields?: ReadonlyArray<string>;
  connectionActionId?: string;
  entityOperation?: GoogleCloudDialogflowV2beta1ToolConnectorToolActionEntityOperation;
}

export const GoogleCloudDialogflowV2beta1ToolConnectorToolAction: Schema.Schema<GoogleCloudDialogflowV2beta1ToolConnectorToolAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputFields: Schema.optional(Schema.Array(Schema.String)),
    outputFields: Schema.optional(Schema.Array(Schema.String)),
    connectionActionId: Schema.optional(Schema.String),
    entityOperation: Schema.optional(
      GoogleCloudDialogflowV2beta1ToolConnectorToolActionEntityOperation,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ToolConnectorToolAction",
  });

export interface GoogleCloudDialogflowV2beta1ToolConnectorTool {
  name?: string;
  actions?: ReadonlyArray<GoogleCloudDialogflowV2beta1ToolConnectorToolAction>;
}

export const GoogleCloudDialogflowV2beta1ToolConnectorTool: Schema.Schema<GoogleCloudDialogflowV2beta1ToolConnectorTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    actions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1ToolConnectorToolAction),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ToolConnectorTool" });

export interface GoogleCloudDialogflowV2beta1Tool {
  extensionSpec?: GoogleCloudDialogflowV2beta1ToolExtensionTool;
  openApiSpec?: GoogleCloudDialogflowV2beta1ToolOpenApiTool;
  description?: string;
  createTime?: string;
  actionConfirmationRequirement?: Record<
    string,
    | "CONFIRMATION_REQUIREMENT_UNSPECIFIED"
    | "REQUIRED"
    | "NOT_REQUIRED"
    | (string & {})
  >;
  functionSpec?: GoogleCloudDialogflowV2beta1ToolFunctionTool;
  toolKey?: string;
  satisfiesPzs?: boolean;
  connectorSpec?: GoogleCloudDialogflowV2beta1ToolConnectorTool;
  name?: string;
  displayName?: string;
  satisfiesPzi?: boolean;
  updateTime?: string;
}

export const GoogleCloudDialogflowV2beta1Tool: Schema.Schema<GoogleCloudDialogflowV2beta1Tool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    extensionSpec: Schema.optional(
      GoogleCloudDialogflowV2beta1ToolExtensionTool,
    ),
    openApiSpec: Schema.optional(GoogleCloudDialogflowV2beta1ToolOpenApiTool),
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    actionConfirmationRequirement: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    functionSpec: Schema.optional(GoogleCloudDialogflowV2beta1ToolFunctionTool),
    toolKey: Schema.optional(Schema.String),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    connectorSpec: Schema.optional(
      GoogleCloudDialogflowV2beta1ToolConnectorTool,
    ),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    satisfiesPzi: Schema.optional(Schema.Boolean),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1Tool" });

export interface GoogleCloudDialogflowV2beta1ListToolsResponse {
  tools?: ReadonlyArray<GoogleCloudDialogflowV2beta1Tool>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2beta1ListToolsResponse: Schema.Schema<GoogleCloudDialogflowV2beta1ListToolsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tools: Schema.optional(Schema.Array(GoogleCloudDialogflowV2beta1Tool)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ListToolsResponse" });

export interface GoogleCloudDialogflowCxV3beta1ImportEntityTypesResponseConflictingResources {
  entityTypeDisplayNames?: ReadonlyArray<string>;
  entityDisplayNames?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1ImportEntityTypesResponseConflictingResources: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportEntityTypesResponseConflictingResources> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypeDisplayNames: Schema.optional(Schema.Array(Schema.String)),
    entityDisplayNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ImportEntityTypesResponseConflictingResources",
  });

export interface GoogleCloudDialogflowV2beta1VoiceSelectionParams {
  name?: string;
  ssmlGender?:
    | "SSML_VOICE_GENDER_UNSPECIFIED"
    | "SSML_VOICE_GENDER_MALE"
    | "SSML_VOICE_GENDER_FEMALE"
    | "SSML_VOICE_GENDER_NEUTRAL"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1VoiceSelectionParams: Schema.Schema<GoogleCloudDialogflowV2beta1VoiceSelectionParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    ssmlGender: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1VoiceSelectionParams",
  });

export interface GoogleCloudDialogflowV2beta1CustomPronunciationParams {
  phrase?: string;
  phoneticEncoding?:
    | "PHONETIC_ENCODING_UNSPECIFIED"
    | "PHONETIC_ENCODING_IPA"
    | "PHONETIC_ENCODING_X_SAMPA"
    | (string & {});
  pronunciation?: string;
}

export const GoogleCloudDialogflowV2beta1CustomPronunciationParams: Schema.Schema<GoogleCloudDialogflowV2beta1CustomPronunciationParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    phrase: Schema.optional(Schema.String),
    phoneticEncoding: Schema.optional(Schema.String),
    pronunciation: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1CustomPronunciationParams",
  });

export interface GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig {
  pitch?: number;
  voice?: GoogleCloudDialogflowV2beta1VoiceSelectionParams;
  effectsProfileId?: ReadonlyArray<string>;
  volumeGainDb?: number;
  speakingRate?: number;
  pronunciations?: ReadonlyArray<GoogleCloudDialogflowV2beta1CustomPronunciationParams>;
}

export const GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig: Schema.Schema<GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pitch: Schema.optional(Schema.Number),
    voice: Schema.optional(GoogleCloudDialogflowV2beta1VoiceSelectionParams),
    effectsProfileId: Schema.optional(Schema.Array(Schema.String)),
    volumeGainDb: Schema.optional(Schema.Number),
    speakingRate: Schema.optional(Schema.Number),
    pronunciations: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1CustomPronunciationParams),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig",
  });

export interface GoogleCloudDialogflowV2beta1OutputAudioConfig {
  sampleRateHertz?: number;
  synthesizeSpeechConfig?: GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig;
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

export const GoogleCloudDialogflowV2beta1OutputAudioConfig: Schema.Schema<GoogleCloudDialogflowV2beta1OutputAudioConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sampleRateHertz: Schema.optional(Schema.Number),
    synthesizeSpeechConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig,
    ),
    audioEncoding: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1OutputAudioConfig" });

export interface GoogleCloudDialogflowV2beta1SpeechContext {
  phrases?: ReadonlyArray<string>;
  boost?: number;
}

export const GoogleCloudDialogflowV2beta1SpeechContext: Schema.Schema<GoogleCloudDialogflowV2beta1SpeechContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    phrases: Schema.optional(Schema.Array(Schema.String)),
    boost: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1SpeechContext" });

export interface GoogleCloudDialogflowV2beta1InputAudioConfig {
  modelVariant?:
    | "SPEECH_MODEL_VARIANT_UNSPECIFIED"
    | "USE_BEST_AVAILABLE"
    | "USE_STANDARD"
    | "USE_ENHANCED"
    | (string & {});
  disableNoSpeechRecognizedEvent?: boolean;
  sampleRateHertz?: number;
  bargeInConfig?: GoogleCloudDialogflowV2beta1BargeInConfig;
  phraseHints?: ReadonlyArray<string>;
  languageCode?: string;
  model?: string;
  enableAutomaticPunctuation?: boolean;
  speechContexts?: ReadonlyArray<GoogleCloudDialogflowV2beta1SpeechContext>;
  singleUtterance?: boolean;
  optOutConformerModelMigration?: boolean;
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
  defaultNoSpeechTimeout?: string;
  phraseSets?: ReadonlyArray<string>;
  enableWordInfo?: boolean;
}

export const GoogleCloudDialogflowV2beta1InputAudioConfig: Schema.Schema<GoogleCloudDialogflowV2beta1InputAudioConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    modelVariant: Schema.optional(Schema.String),
    disableNoSpeechRecognizedEvent: Schema.optional(Schema.Boolean),
    sampleRateHertz: Schema.optional(Schema.Number),
    bargeInConfig: Schema.optional(GoogleCloudDialogflowV2beta1BargeInConfig),
    phraseHints: Schema.optional(Schema.Array(Schema.String)),
    languageCode: Schema.optional(Schema.String),
    model: Schema.optional(Schema.String),
    enableAutomaticPunctuation: Schema.optional(Schema.Boolean),
    speechContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SpeechContext),
    ),
    singleUtterance: Schema.optional(Schema.Boolean),
    optOutConformerModelMigration: Schema.optional(Schema.Boolean),
    audioEncoding: Schema.optional(Schema.String),
    defaultNoSpeechTimeout: Schema.optional(Schema.String),
    phraseSets: Schema.optional(Schema.Array(Schema.String)),
    enableWordInfo: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1InputAudioConfig" });

export interface GoogleCloudDialogflowV2beta1TextInput {
  text?: string;
  languageCode?: string;
}

export const GoogleCloudDialogflowV2beta1TextInput: Schema.Schema<GoogleCloudDialogflowV2beta1TextInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1TextInput" });

export interface GoogleCloudDialogflowV2beta1EventInput {
  parameters?: Record<string, unknown>;
  name?: string;
  languageCode?: string;
}

export const GoogleCloudDialogflowV2beta1EventInput: Schema.Schema<GoogleCloudDialogflowV2beta1EventInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1EventInput" });

export interface GoogleCloudDialogflowV2beta1QueryInput {
  audioConfig?: GoogleCloudDialogflowV2beta1InputAudioConfig;
  dtmf?: GoogleCloudDialogflowV2beta1TelephonyDtmfEvents;
  text?: GoogleCloudDialogflowV2beta1TextInput;
  event?: GoogleCloudDialogflowV2beta1EventInput;
}

export const GoogleCloudDialogflowV2beta1QueryInput: Schema.Schema<GoogleCloudDialogflowV2beta1QueryInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audioConfig: Schema.optional(GoogleCloudDialogflowV2beta1InputAudioConfig),
    dtmf: Schema.optional(GoogleCloudDialogflowV2beta1TelephonyDtmfEvents),
    text: Schema.optional(GoogleCloudDialogflowV2beta1TextInput),
    event: Schema.optional(GoogleCloudDialogflowV2beta1EventInput),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1QueryInput" });

export interface GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig {
  analyzeQueryTextSentiment?: boolean;
}

export const GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig: Schema.Schema<GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    analyzeQueryTextSentiment: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig",
  });

export interface GoogleCloudDialogflowV2beta1SubAgent {
  project?: string;
  environment?: string;
}

export const GoogleCloudDialogflowV2beta1SubAgent: Schema.Schema<GoogleCloudDialogflowV2beta1SubAgent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.optional(Schema.String),
    environment: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1SubAgent" });

export interface GoogleTypeLatLng {
  latitude?: number;
  longitude?: number;
}

export const GoogleTypeLatLng: Schema.Schema<GoogleTypeLatLng> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latitude: Schema.optional(Schema.Number),
    longitude: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleTypeLatLng" });

export interface GoogleCloudDialogflowV2beta1EntityTypeEntity {
  synonyms?: ReadonlyArray<string>;
  value?: string;
}

export const GoogleCloudDialogflowV2beta1EntityTypeEntity: Schema.Schema<GoogleCloudDialogflowV2beta1EntityTypeEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    synonyms: Schema.optional(Schema.Array(Schema.String)),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1EntityTypeEntity" });

export interface GoogleCloudDialogflowV2beta1SessionEntityType {
  entities?: ReadonlyArray<GoogleCloudDialogflowV2beta1EntityTypeEntity>;
  name?: string;
  entityOverrideMode?:
    | "ENTITY_OVERRIDE_MODE_UNSPECIFIED"
    | "ENTITY_OVERRIDE_MODE_OVERRIDE"
    | "ENTITY_OVERRIDE_MODE_SUPPLEMENT"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1SessionEntityType: Schema.Schema<GoogleCloudDialogflowV2beta1SessionEntityType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1EntityTypeEntity),
    ),
    name: Schema.optional(Schema.String),
    entityOverrideMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1SessionEntityType" });

export interface GoogleCloudDialogflowV2beta1QueryParameters {
  timeZone?: string;
  sentimentAnalysisRequestConfig?: GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig;
  contexts?: ReadonlyArray<GoogleCloudDialogflowV2beta1Context>;
  knowledgeBaseNames?: ReadonlyArray<string>;
  subAgents?: ReadonlyArray<GoogleCloudDialogflowV2beta1SubAgent>;
  platform?: string;
  resetContexts?: boolean;
  payload?: Record<string, unknown>;
  geoLocation?: GoogleTypeLatLng;
  sessionEntityTypes?: ReadonlyArray<GoogleCloudDialogflowV2beta1SessionEntityType>;
  webhookHeaders?: Record<string, string>;
}

export const GoogleCloudDialogflowV2beta1QueryParameters: Schema.Schema<GoogleCloudDialogflowV2beta1QueryParameters> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timeZone: Schema.optional(Schema.String),
    sentimentAnalysisRequestConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig,
    ),
    contexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1Context),
    ),
    knowledgeBaseNames: Schema.optional(Schema.Array(Schema.String)),
    subAgents: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SubAgent),
    ),
    platform: Schema.optional(Schema.String),
    resetContexts: Schema.optional(Schema.Boolean),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    geoLocation: Schema.optional(GoogleTypeLatLng),
    sessionEntityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SessionEntityType),
    ),
    webhookHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1QueryParameters" });

export interface GoogleCloudDialogflowV2beta1DetectIntentRequest {
  inputAudio?: string;
  outputAudioConfig?: GoogleCloudDialogflowV2beta1OutputAudioConfig;
  queryInput?: GoogleCloudDialogflowV2beta1QueryInput;
  outputAudioConfigMask?: string;
  queryParams?: GoogleCloudDialogflowV2beta1QueryParameters;
}

export const GoogleCloudDialogflowV2beta1DetectIntentRequest: Schema.Schema<GoogleCloudDialogflowV2beta1DetectIntentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputAudio: Schema.optional(Schema.String),
    outputAudioConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1OutputAudioConfig,
    ),
    queryInput: Schema.optional(GoogleCloudDialogflowV2beta1QueryInput),
    outputAudioConfigMask: Schema.optional(Schema.String),
    queryParams: Schema.optional(GoogleCloudDialogflowV2beta1QueryParameters),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1DetectIntentRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1ContinuousTestResult {
  runTime?: string;
  name?: string;
  result?:
    | "AGGREGATED_TEST_RESULT_UNSPECIFIED"
    | "PASSED"
    | "FAILED"
    | (string & {});
  testCaseResults?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1ContinuousTestResult: Schema.Schema<GoogleCloudDialogflowCxV3beta1ContinuousTestResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    runTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    result: Schema.optional(Schema.String),
    testCaseResults: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ContinuousTestResult",
  });

export interface GoogleCloudDialogflowCxV3beta1RunContinuousTestResponse {
  continuousTestResult?: GoogleCloudDialogflowCxV3beta1ContinuousTestResult;
}

export const GoogleCloudDialogflowCxV3beta1RunContinuousTestResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1RunContinuousTestResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    continuousTestResult: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ContinuousTestResult,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RunContinuousTestResponse",
  });

export interface GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpecControlPoint {
  boostAmount?: number;
  attributeValue?: string;
}

export const GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpecControlPoint: Schema.Schema<GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpecControlPoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boostAmount: Schema.optional(Schema.Number),
    attributeValue: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpecControlPoint",
  });

export interface GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpec {
  attributeType?:
    | "ATTRIBUTE_TYPE_UNSPECIFIED"
    | "NUMERICAL"
    | "FRESHNESS"
    | (string & {});
  interpolationType?:
    | "INTERPOLATION_TYPE_UNSPECIFIED"
    | "LINEAR"
    | (string & {});
  controlPoints?: ReadonlyArray<GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpecControlPoint>;
  fieldName?: string;
}

export const GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpec: Schema.Schema<GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attributeType: Schema.optional(Schema.String),
    interpolationType: Schema.optional(Schema.String),
    controlPoints: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpecControlPoint,
      ),
    ),
    fieldName: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpec",
  });

export interface GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpec {
  boost?: number;
  boostControlSpec?: GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpec;
  condition?: string;
}

export const GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpec: Schema.Schema<GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boost: Schema.optional(Schema.Number),
    boostControlSpec: Schema.optional(
      GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpec,
    ),
    condition: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpec",
  });

export interface GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpec {
  conditionBoostSpecs?: ReadonlyArray<GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpec>;
}

export const GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpec: Schema.Schema<GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditionBoostSpecs: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpec,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpec",
  });

export interface GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigBoostSpecs {
  dataStores?: ReadonlyArray<string>;
  spec?: ReadonlyArray<GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpec>;
}

export const GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigBoostSpecs: Schema.Schema<GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigBoostSpecs> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataStores: Schema.optional(Schema.Array(Schema.String)),
    spec: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpec,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigBoostSpecs",
  });

export interface GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigFilterSpecs {
  dataStores?: ReadonlyArray<string>;
  filter?: string;
}

export const GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigFilterSpecs: Schema.Schema<GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigFilterSpecs> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataStores: Schema.optional(Schema.Array(Schema.String)),
    filter: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigFilterSpecs",
  });

export interface GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfig {
  boostSpecs?: ReadonlyArray<GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigBoostSpecs>;
  filterSpecs?: ReadonlyArray<GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigFilterSpecs>;
}

export const GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfig: Schema.Schema<GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boostSpecs: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigBoostSpecs,
      ),
    ),
    filterSpecs: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfigFilterSpecs,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfig",
  });

export interface GoogleCloudDialogflowV2beta1ConnectionErrorDetails {
  certificateState?:
    | "CERTIFICATE_STATE_UNSPECIFIED"
    | "CERTIFICATE_VALID"
    | "CERTIFICATE_INVALID"
    | "CERTIFICATE_EXPIRED"
    | "CERTIFICATE_HOSTNAME_NOT_FOUND"
    | "CERTIFICATE_UNAUTHENTICATED"
    | "CERTIFICATE_TRUST_STORE_NOT_FOUND"
    | "CERTIFICATE_HOSTNAME_INVALID_FORMAT"
    | "CERTIFICATE_QUOTA_EXCEEDED"
    | (string & {});
  errorMessage?: string;
}

export const GoogleCloudDialogflowV2beta1ConnectionErrorDetails: Schema.Schema<GoogleCloudDialogflowV2beta1ConnectionErrorDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificateState: Schema.optional(Schema.String),
    errorMessage: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ConnectionErrorDetails",
  });

export interface GoogleCloudDialogflowV2beta1Connection {
  connectionId?: string;
  updateTime?: string;
  errorDetails?: GoogleCloudDialogflowV2beta1ConnectionErrorDetails;
  state?:
    | "STATE_UNSPECIFIED"
    | "CONNECTED"
    | "DISCONNECTED"
    | "AUTHENTICATION_FAILED"
    | "KEEPALIVE"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1Connection: Schema.Schema<GoogleCloudDialogflowV2beta1Connection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connectionId: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    errorDetails: Schema.optional(
      GoogleCloudDialogflowV2beta1ConnectionErrorDetails,
    ),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1Connection" });

export interface GoogleCloudDialogflowV2beta1SipTrunk {
  expectedHostname?: ReadonlyArray<string>;
  name?: string;
  displayName?: string;
  connections?: ReadonlyArray<GoogleCloudDialogflowV2beta1Connection>;
}

export const GoogleCloudDialogflowV2beta1SipTrunk: Schema.Schema<GoogleCloudDialogflowV2beta1SipTrunk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expectedHostname: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    connections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1Connection),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1SipTrunk" });

export interface GoogleCloudDialogflowV2beta1ListSipTrunksResponse {
  sipTrunks?: ReadonlyArray<GoogleCloudDialogflowV2beta1SipTrunk>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2beta1ListSipTrunksResponse: Schema.Schema<GoogleCloudDialogflowV2beta1ListSipTrunksResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sipTrunks: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SipTrunk),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ListSipTrunksResponse",
  });

export interface GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo {
  justCollected?: boolean;
  state?:
    | "PARAMETER_STATE_UNSPECIFIED"
    | "EMPTY"
    | "INVALID"
    | "FILLED"
    | (string & {});
  displayName?: string;
  value?: unknown;
  required?: boolean;
}

export const GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo: Schema.Schema<GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    justCollected: Schema.optional(Schema.Boolean),
    state: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Unknown),
    required: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo",
  });

export interface GoogleCloudDialogflowV2beta1IntentBatch {
  intents?: ReadonlyArray<GoogleCloudDialogflowV2beta1Intent>;
}

export const GoogleCloudDialogflowV2beta1IntentBatch: Schema.Schema<GoogleCloudDialogflowV2beta1IntentBatch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intents: Schema.optional(Schema.Array(GoogleCloudDialogflowV2beta1Intent)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentBatch" });

export interface GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequest {
  updateMask?: string;
  intentBatchUri?: string;
  intentBatchInline?: GoogleCloudDialogflowV2beta1IntentBatch;
  languageCode?: string;
  intentView?: "INTENT_VIEW_UNSPECIFIED" | "INTENT_VIEW_FULL" | (string & {});
}

export const GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequest: Schema.Schema<GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String),
    intentBatchUri: Schema.optional(Schema.String),
    intentBatchInline: Schema.optional(GoogleCloudDialogflowV2beta1IntentBatch),
    languageCode: Schema.optional(Schema.String),
    intentView: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequest",
  });

export interface GoogleCloudDialogflowV2beta1BatchUpdateIntentsResponse {
  intents?: ReadonlyArray<GoogleCloudDialogflowV2beta1Intent>;
}

export const GoogleCloudDialogflowV2beta1BatchUpdateIntentsResponse: Schema.Schema<GoogleCloudDialogflowV2beta1BatchUpdateIntentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intents: Schema.optional(Schema.Array(GoogleCloudDialogflowV2beta1Intent)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1BatchUpdateIntentsResponse",
  });

export interface GoogleCloudDialogflowV2beta1NotificationConfig {
  topic?: string;
  messageFormat?:
    | "MESSAGE_FORMAT_UNSPECIFIED"
    | "PROTO"
    | "JSON"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1NotificationConfig: Schema.Schema<GoogleCloudDialogflowV2beta1NotificationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    topic: Schema.optional(Schema.String),
    messageFormat: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1NotificationConfig" });

export interface GoogleCloudDialogflowV2IntentMessageSimpleResponse {
  ssml?: string;
  displayText?: string;
  textToSpeech?: string;
}

export const GoogleCloudDialogflowV2IntentMessageSimpleResponse: Schema.Schema<GoogleCloudDialogflowV2IntentMessageSimpleResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ssml: Schema.optional(Schema.String),
    displayText: Schema.optional(Schema.String),
    textToSpeech: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageSimpleResponse",
  });

export interface GoogleCloudDialogflowV2IntentMessageSimpleResponses {
  simpleResponses?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageSimpleResponse>;
}

export const GoogleCloudDialogflowV2IntentMessageSimpleResponses: Schema.Schema<GoogleCloudDialogflowV2IntentMessageSimpleResponses> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    simpleResponses: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageSimpleResponse),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageSimpleResponses",
  });

export interface GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest {
  entityTypeNames?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest: Schema.Schema<GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypeNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest",
  });

export interface GoogleCloudDialogflowV2beta1IngestContextReferencesResponse {
  ingestedContextReferences?: Record<
    string,
    GoogleCloudDialogflowV2beta1ConversationContextReference
  >;
}

export const GoogleCloudDialogflowV2beta1IngestContextReferencesResponse: Schema.Schema<GoogleCloudDialogflowV2beta1IngestContextReferencesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ingestedContextReferences: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowV2beta1ConversationContextReference,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IngestContextReferencesResponse",
  });

export interface GoogleCloudDialogflowV2beta1FulfillmentFeature {
  type?: "TYPE_UNSPECIFIED" | "SMALLTALK" | (string & {});
}

export const GoogleCloudDialogflowV2beta1FulfillmentFeature: Schema.Schema<GoogleCloudDialogflowV2beta1FulfillmentFeature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1FulfillmentFeature" });

export interface GoogleCloudDialogflowCxV3beta1IntentInput {
  intent?: string;
}

export const GoogleCloudDialogflowCxV3beta1IntentInput: Schema.Schema<GoogleCloudDialogflowCxV3beta1IntentInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1IntentInput" });

export interface GoogleCloudDialogflowCxV3beta1DtmfInput {
  finishDigit?: string;
  digits?: string;
}

export const GoogleCloudDialogflowCxV3beta1DtmfInput: Schema.Schema<GoogleCloudDialogflowCxV3beta1DtmfInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    finishDigit: Schema.optional(Schema.String),
    digits: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1DtmfInput" });

export interface GoogleCloudDialogflowCxV3beta1EventInput {
  event?: string;
}

export const GoogleCloudDialogflowCxV3beta1EventInput: Schema.Schema<GoogleCloudDialogflowCxV3beta1EventInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    event: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1EventInput" });

export interface GoogleCloudDialogflowCxV3beta1AudioInput {
  config?: GoogleCloudDialogflowCxV3beta1InputAudioConfig;
  audio?: string;
}

export const GoogleCloudDialogflowCxV3beta1AudioInput: Schema.Schema<GoogleCloudDialogflowCxV3beta1AudioInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    config: Schema.optional(GoogleCloudDialogflowCxV3beta1InputAudioConfig),
    audio: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1AudioInput" });

export interface GoogleCloudDialogflowCxV3beta1ToolCallResultError {
  message?: string;
}

export const GoogleCloudDialogflowCxV3beta1ToolCallResultError: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolCallResultError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ToolCallResultError",
  });

export interface GoogleCloudDialogflowCxV3beta1ToolCallResult {
  action?: string;
  tool?: string;
  outputParameters?: Record<string, unknown>;
  error?: GoogleCloudDialogflowCxV3beta1ToolCallResultError;
}

export const GoogleCloudDialogflowCxV3beta1ToolCallResult: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolCallResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    tool: Schema.optional(Schema.String),
    outputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    error: Schema.optional(GoogleCloudDialogflowCxV3beta1ToolCallResultError),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ToolCallResult" });

export interface GoogleCloudDialogflowCxV3beta1TextInput {
  text?: string;
}

export const GoogleCloudDialogflowCxV3beta1TextInput: Schema.Schema<GoogleCloudDialogflowCxV3beta1TextInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TextInput" });

export interface GoogleCloudDialogflowCxV3beta1QueryInput {
  intent?: GoogleCloudDialogflowCxV3beta1IntentInput;
  dtmf?: GoogleCloudDialogflowCxV3beta1DtmfInput;
  event?: GoogleCloudDialogflowCxV3beta1EventInput;
  languageCode?: string;
  audio?: GoogleCloudDialogflowCxV3beta1AudioInput;
  toolCallResult?: GoogleCloudDialogflowCxV3beta1ToolCallResult;
  text?: GoogleCloudDialogflowCxV3beta1TextInput;
}

export const GoogleCloudDialogflowCxV3beta1QueryInput: Schema.Schema<GoogleCloudDialogflowCxV3beta1QueryInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intent: Schema.optional(GoogleCloudDialogflowCxV3beta1IntentInput),
    dtmf: Schema.optional(GoogleCloudDialogflowCxV3beta1DtmfInput),
    event: Schema.optional(GoogleCloudDialogflowCxV3beta1EventInput),
    languageCode: Schema.optional(Schema.String),
    audio: Schema.optional(GoogleCloudDialogflowCxV3beta1AudioInput),
    toolCallResult: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolCallResult,
    ),
    text: Schema.optional(GoogleCloudDialogflowCxV3beta1TextInput),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1QueryInput" });

export interface GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput {
  isWebhookEnabled?: boolean;
  input?: GoogleCloudDialogflowCxV3beta1QueryInput;
  injectedParameters?: Record<string, unknown>;
  enableSentimentAnalysis?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput: Schema.Schema<GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isWebhookEnabled: Schema.optional(Schema.Boolean),
    input: Schema.optional(GoogleCloudDialogflowCxV3beta1QueryInput),
    injectedParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    enableSentimentAnalysis: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput",
  });

export interface GoogleCloudDialogflowCxV3beta1ConversationTurn {
  userInput?: GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput;
  virtualAgentOutput?: GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput;
}

export const GoogleCloudDialogflowCxV3beta1ConversationTurn: Schema.Schema<GoogleCloudDialogflowCxV3beta1ConversationTurn> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userInput: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput,
    ),
    virtualAgentOutput: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ConversationTurn" });

export interface GoogleCloudDialogflowCxV3beta1TestCaseResult {
  name?: string;
  environment?: string;
  conversationTurns?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ConversationTurn>;
  testTime?: string;
  testResult?: "TEST_RESULT_UNSPECIFIED" | "PASSED" | "FAILED" | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1TestCaseResult: Schema.Schema<GoogleCloudDialogflowCxV3beta1TestCaseResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    environment: Schema.optional(Schema.String),
    conversationTurns: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ConversationTurn),
    ),
    testTime: Schema.optional(Schema.String),
    testResult: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TestCaseResult" });

export interface GoogleCloudDialogflowCxV3beta1TestConfig {
  page?: string;
  flow?: string;
  trackingParameters?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1TestConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1TestConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    page: Schema.optional(Schema.String),
    flow: Schema.optional(Schema.String),
    trackingParameters: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TestConfig" });

export interface GoogleCloudDialogflowCxV3beta1TestCase {
  displayName?: string;
  name?: string;
  notes?: string;
  lastTestResult?: GoogleCloudDialogflowCxV3beta1TestCaseResult;
  testConfig?: GoogleCloudDialogflowCxV3beta1TestConfig;
  tags?: ReadonlyArray<string>;
  testCaseConversationTurns?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ConversationTurn>;
  creationTime?: string;
}

export const GoogleCloudDialogflowCxV3beta1TestCase: Schema.Schema<GoogleCloudDialogflowCxV3beta1TestCase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    notes: Schema.optional(Schema.String),
    lastTestResult: Schema.optional(
      GoogleCloudDialogflowCxV3beta1TestCaseResult,
    ),
    testConfig: Schema.optional(GoogleCloudDialogflowCxV3beta1TestConfig),
    tags: Schema.optional(Schema.Array(Schema.String)),
    testCaseConversationTurns: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ConversationTurn),
    ),
    creationTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TestCase" });

export interface GoogleCloudDialogflowCxV3beta1TestCaseError {
  testCase?: GoogleCloudDialogflowCxV3beta1TestCase;
  status?: GoogleRpcStatus;
}

export const GoogleCloudDialogflowCxV3beta1TestCaseError: Schema.Schema<GoogleCloudDialogflowCxV3beta1TestCaseError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testCase: Schema.optional(GoogleCloudDialogflowCxV3beta1TestCase),
    status: Schema.optional(GoogleRpcStatus),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TestCaseError" });

export interface GoogleCloudDialogflowCxV3beta1ImportTestCasesMetadata {
  errors?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TestCaseError>;
}

export const GoogleCloudDialogflowCxV3beta1ImportTestCasesMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportTestCasesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TestCaseError),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportTestCasesMetadata",
  });

export interface GoogleCloudDialogflowCxV3TestConfig {
  flow?: string;
  page?: string;
  trackingParameters?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3TestConfig: Schema.Schema<GoogleCloudDialogflowCxV3TestConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flow: Schema.optional(Schema.String),
    page: Schema.optional(Schema.String),
    trackingParameters: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TestConfig" });

export interface GoogleCloudDialogflowCxV3TestCase {
  tags?: ReadonlyArray<string>;
  testCaseConversationTurns?: ReadonlyArray<GoogleCloudDialogflowCxV3ConversationTurn>;
  creationTime?: string;
  displayName?: string;
  name?: string;
  notes?: string;
  lastTestResult?: GoogleCloudDialogflowCxV3TestCaseResult;
  testConfig?: GoogleCloudDialogflowCxV3TestConfig;
}

export const GoogleCloudDialogflowCxV3TestCase: Schema.Schema<GoogleCloudDialogflowCxV3TestCase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tags: Schema.optional(Schema.Array(Schema.String)),
    testCaseConversationTurns: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ConversationTurn),
    ),
    creationTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    notes: Schema.optional(Schema.String),
    lastTestResult: Schema.optional(GoogleCloudDialogflowCxV3TestCaseResult),
    testConfig: Schema.optional(GoogleCloudDialogflowCxV3TestConfig),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TestCase" });

export interface GoogleCloudDialogflowV2beta1TextToSpeechSettings {
  synthesizeSpeechConfigs?: Record<
    string,
    GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig
  >;
  enableTextToSpeech?: boolean;
  outputAudioEncoding?:
    | "OUTPUT_AUDIO_ENCODING_UNSPECIFIED"
    | "OUTPUT_AUDIO_ENCODING_LINEAR_16"
    | "OUTPUT_AUDIO_ENCODING_MP3"
    | "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS"
    | "OUTPUT_AUDIO_ENCODING_OGG_OPUS"
    | "OUTPUT_AUDIO_ENCODING_MULAW"
    | "OUTPUT_AUDIO_ENCODING_ALAW"
    | (string & {});
  sampleRateHertz?: number;
}

export const GoogleCloudDialogflowV2beta1TextToSpeechSettings: Schema.Schema<GoogleCloudDialogflowV2beta1TextToSpeechSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    synthesizeSpeechConfigs: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig,
      ),
    ),
    enableTextToSpeech: Schema.optional(Schema.Boolean),
    outputAudioEncoding: Schema.optional(Schema.String),
    sampleRateHertz: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1TextToSpeechSettings",
  });

export interface GoogleCloudDialogflowV2beta1EntityType {
  entities?: ReadonlyArray<GoogleCloudDialogflowV2beta1EntityTypeEntity>;
  kind?:
    | "KIND_UNSPECIFIED"
    | "KIND_MAP"
    | "KIND_LIST"
    | "KIND_REGEXP"
    | (string & {});
  enableFuzzyExtraction?: boolean;
  name?: string;
  displayName?: string;
  autoExpansionMode?:
    | "AUTO_EXPANSION_MODE_UNSPECIFIED"
    | "AUTO_EXPANSION_MODE_DEFAULT"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1EntityType: Schema.Schema<GoogleCloudDialogflowV2beta1EntityType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1EntityTypeEntity),
    ),
    kind: Schema.optional(Schema.String),
    enableFuzzyExtraction: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    autoExpansionMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1EntityType" });

export interface GoogleCloudDialogflowV2beta1ListEntityTypesResponse {
  entityTypes?: ReadonlyArray<GoogleCloudDialogflowV2beta1EntityType>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2beta1ListEntityTypesResponse: Schema.Schema<GoogleCloudDialogflowV2beta1ListEntityTypesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1EntityType),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ListEntityTypesResponse",
  });

export interface GoogleCloudDialogflowV2beta1DetectIntentResponse {
  responseId?: string;
  alternativeQueryResults?: ReadonlyArray<GoogleCloudDialogflowV2beta1QueryResult>;
  queryResult?: GoogleCloudDialogflowV2beta1QueryResult;
  webhookStatus?: GoogleRpcStatus;
  outputAudio?: string;
  outputAudioConfig?: GoogleCloudDialogflowV2beta1OutputAudioConfig;
}

export const GoogleCloudDialogflowV2beta1DetectIntentResponse: Schema.Schema<GoogleCloudDialogflowV2beta1DetectIntentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responseId: Schema.optional(Schema.String),
    alternativeQueryResults: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1QueryResult),
    ),
    queryResult: Schema.optional(GoogleCloudDialogflowV2beta1QueryResult),
    webhookStatus: Schema.optional(GoogleRpcStatus),
    outputAudio: Schema.optional(Schema.String),
    outputAudioConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1OutputAudioConfig,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1DetectIntentResponse",
  });

export interface GoogleCloudDialogflowV2beta1AutomatedAgentReply {
  detectIntentResponse?: GoogleCloudDialogflowV2beta1DetectIntentResponse;
  event?: string;
  allowCancellation?: boolean;
  cxCurrentPage?: string;
  intent?: string;
  automatedAgentReplyType?:
    | "AUTOMATED_AGENT_REPLY_TYPE_UNSPECIFIED"
    | "PARTIAL"
    | "FINAL"
    | (string & {});
  cxSessionParameters?: Record<string, unknown>;
  parameters?: Record<string, unknown>;
  matchConfidence?: number;
  responseMessages?: ReadonlyArray<GoogleCloudDialogflowV2beta1ResponseMessage>;
  callCompanionAuthCode?: string;
}

export const GoogleCloudDialogflowV2beta1AutomatedAgentReply: Schema.Schema<GoogleCloudDialogflowV2beta1AutomatedAgentReply> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detectIntentResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1DetectIntentResponse,
    ),
    event: Schema.optional(Schema.String),
    allowCancellation: Schema.optional(Schema.Boolean),
    cxCurrentPage: Schema.optional(Schema.String),
    intent: Schema.optional(Schema.String),
    automatedAgentReplyType: Schema.optional(Schema.String),
    cxSessionParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    matchConfidence: Schema.optional(Schema.Number),
    responseMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1ResponseMessage),
    ),
    callCompanionAuthCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1AutomatedAgentReply",
  });

export interface GoogleCloudDialogflowV2beta1SearchKnowledgeAnswer {
  answerRecord?: string;
  answerType?:
    | "ANSWER_TYPE_UNSPECIFIED"
    | "FAQ"
    | "GENERATIVE"
    | "INTENT"
    | "PLAYBOOK"
    | "EVENT"
    | (string & {});
  answerSources?: ReadonlyArray<GoogleCloudDialogflowV2beta1SearchKnowledgeAnswerAnswerSource>;
  answer?: string;
}

export const GoogleCloudDialogflowV2beta1SearchKnowledgeAnswer: Schema.Schema<GoogleCloudDialogflowV2beta1SearchKnowledgeAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answerRecord: Schema.optional(Schema.String),
    answerType: Schema.optional(Schema.String),
    answerSources: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1SearchKnowledgeAnswerAnswerSource,
      ),
    ),
    answer: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SearchKnowledgeAnswer",
  });

export interface GoogleCloudDialogflowV2beta1SearchKnowledgeResponse {
  answers?: ReadonlyArray<GoogleCloudDialogflowV2beta1SearchKnowledgeAnswer>;
  rewrittenQuery?: string;
  searchKnowledgeDebugInfo?: GoogleCloudDialogflowV2beta1SearchKnowledgeDebugInfo;
}

export const GoogleCloudDialogflowV2beta1SearchKnowledgeResponse: Schema.Schema<GoogleCloudDialogflowV2beta1SearchKnowledgeResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SearchKnowledgeAnswer),
    ),
    rewrittenQuery: Schema.optional(Schema.String),
    searchKnowledgeDebugInfo: Schema.optional(
      GoogleCloudDialogflowV2beta1SearchKnowledgeDebugInfo,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SearchKnowledgeResponse",
  });

export interface GoogleCloudDialogflowV2SmartReplyAnswer {
  reply?: string;
  confidence?: number;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2SmartReplyAnswer: Schema.Schema<GoogleCloudDialogflowV2SmartReplyAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reply: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SmartReplyAnswer" });

export interface GoogleCloudDialogflowV2SuggestSmartRepliesResponse {
  smartReplyAnswers?: ReadonlyArray<GoogleCloudDialogflowV2SmartReplyAnswer>;
  latestMessage?: string;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2SuggestSmartRepliesResponse: Schema.Schema<GoogleCloudDialogflowV2SuggestSmartRepliesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    smartReplyAnswers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SmartReplyAnswer),
    ),
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SuggestSmartRepliesResponse",
  });

export interface GoogleCloudDialogflowV2beta1SuggestionArticle {
  title?: string;
  metadata?: Record<string, string>;
  uri?: string;
  answerRecord?: string;
  snippets?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1SuggestionArticle: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestionArticle> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    uri: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    snippets: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1SuggestionArticle" });

export interface GoogleCloudDialogflowV2beta1Suggestion {
  faqAnswers?: ReadonlyArray<GoogleCloudDialogflowV2beta1SuggestionFaqAnswer>;
  latestMessage?: string;
  createTime?: string;
  name?: string;
  articles?: ReadonlyArray<GoogleCloudDialogflowV2beta1SuggestionArticle>;
}

export const GoogleCloudDialogflowV2beta1Suggestion: Schema.Schema<GoogleCloudDialogflowV2beta1Suggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    faqAnswers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SuggestionFaqAnswer),
    ),
    latestMessage: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    articles: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SuggestionArticle),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1Suggestion" });

export interface GoogleCloudDialogflowV2beta1ListSuggestionsResponse {
  nextPageToken?: string;
  suggestions?: ReadonlyArray<GoogleCloudDialogflowV2beta1Suggestion>;
}

export const GoogleCloudDialogflowV2beta1ListSuggestionsResponse: Schema.Schema<GoogleCloudDialogflowV2beta1ListSuggestionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    suggestions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1Suggestion),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ListSuggestionsResponse",
  });

export interface GoogleCloudDialogflowV2IntentTrainingPhrasePart {
  entityType?: string;
  alias?: string;
  userDefined?: boolean;
  text?: string;
}

export const GoogleCloudDialogflowV2IntentTrainingPhrasePart: Schema.Schema<GoogleCloudDialogflowV2IntentTrainingPhrasePart> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityType: Schema.optional(Schema.String),
    alias: Schema.optional(Schema.String),
    userDefined: Schema.optional(Schema.Boolean),
    text: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentTrainingPhrasePart",
  });

export interface GoogleCloudDialogflowCxV3beta1ImportTestCasesResponse {
  names?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1ImportTestCasesResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportTestCasesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportTestCasesResponse",
  });

export interface GoogleCloudDialogflowV2IntentMessageBasicCardButton {
  title?: string;
  openUriAction?: GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction;
}

export const GoogleCloudDialogflowV2IntentMessageBasicCardButton: Schema.Schema<GoogleCloudDialogflowV2IntentMessageBasicCardButton> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    openUriAction: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageBasicCardButton",
  });

export interface GoogleCloudDialogflowV2IntentMessageBasicCard {
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageBasicCardButton>;
  formattedText?: string;
  title?: string;
  subtitle?: string;
  image?: GoogleCloudDialogflowV2IntentMessageImage;
}

export const GoogleCloudDialogflowV2IntentMessageBasicCard: Schema.Schema<GoogleCloudDialogflowV2IntentMessageBasicCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageBasicCardButton),
    ),
    formattedText: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    subtitle: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageBasicCard" });

export interface GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult {
  magnitude?: number;
  score?: number;
}

export const GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult: Schema.Schema<GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    magnitude: Schema.optional(Schema.Number),
    score: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult",
  });

export interface GoogleCloudDialogflowV2beta1ValidationError {
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "INFO"
    | "WARNING"
    | "ERROR"
    | "CRITICAL"
    | (string & {});
  entries?: ReadonlyArray<string>;
  errorMessage?: string;
}

export const GoogleCloudDialogflowV2beta1ValidationError: Schema.Schema<GoogleCloudDialogflowV2beta1ValidationError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    severity: Schema.optional(Schema.String),
    entries: Schema.optional(Schema.Array(Schema.String)),
    errorMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ValidationError" });

export interface GoogleCloudDialogflowV2beta1ValidationResult {
  validationErrors?: ReadonlyArray<GoogleCloudDialogflowV2beta1ValidationError>;
}

export const GoogleCloudDialogflowV2beta1ValidationResult: Schema.Schema<GoogleCloudDialogflowV2beta1ValidationResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validationErrors: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1ValidationError),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ValidationResult" });

export interface GoogleCloudDialogflowV2beta1IntentSuggestion {
  displayName?: string;
  intentV2?: string;
  description?: string;
}

export const GoogleCloudDialogflowV2beta1IntentSuggestion: Schema.Schema<GoogleCloudDialogflowV2beta1IntentSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    intentV2: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentSuggestion" });

export interface GoogleCloudDialogflowV2beta1DialogflowAssistAnswer {
  queryResult?: GoogleCloudDialogflowV2beta1QueryResult;
  intentSuggestion?: GoogleCloudDialogflowV2beta1IntentSuggestion;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2beta1DialogflowAssistAnswer: Schema.Schema<GoogleCloudDialogflowV2beta1DialogflowAssistAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryResult: Schema.optional(GoogleCloudDialogflowV2beta1QueryResult),
    intentSuggestion: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentSuggestion,
    ),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1DialogflowAssistAnswer",
  });

export interface GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue {
  originalValue?: string;
  resolvedValue?: unknown;
}

export const GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue: Schema.Schema<GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    originalValue: Schema.optional(Schema.String),
    resolvedValue: Schema.optional(Schema.Unknown),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue",
  });

export interface GoogleCloudDialogflowV2UndeployConversationModelOperationMetadata {
  conversationModel?: string;
  createTime?: string;
  doneTime?: string;
}

export const GoogleCloudDialogflowV2UndeployConversationModelOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2UndeployConversationModelOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationModel: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    doneTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2UndeployConversationModelOperationMetadata",
  });

export interface GoogleCloudDialogflowV2IntentMessageTableCardCell {
  text?: string;
}

export const GoogleCloudDialogflowV2IntentMessageTableCardCell: Schema.Schema<GoogleCloudDialogflowV2IntentMessageTableCardCell> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageTableCardCell",
  });

export interface GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource {
  documents?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource: Schema.Schema<GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    documents: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource",
  });

export interface GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings {
  dropIvrMessages?: boolean;
  dropHandoffMessages?: boolean;
  dropVirtualAgentMessages?: boolean;
}

export const GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings: Schema.Schema<GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dropIvrMessages: Schema.optional(Schema.Boolean),
    dropHandoffMessages: Schema.optional(Schema.Boolean),
    dropVirtualAgentMessages: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings",
  });

export interface GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigSections {
  sectionTypes?: ReadonlyArray<
    | "SECTION_TYPE_UNSPECIFIED"
    | "SITUATION"
    | "ACTION"
    | "RESOLUTION"
    | "REASON_FOR_CANCELLATION"
    | "CUSTOMER_SATISFACTION"
    | "ENTITIES"
    | (string & {})
  >;
}

export const GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigSections: Schema.Schema<GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigSections> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sectionTypes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigSections",
  });

export interface GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource {
  knowledgeBases?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource: Schema.Schema<GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    knowledgeBases: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource",
  });

export interface GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig {
  documentQuerySource?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource;
  maxResults?: number;
  contextFilterSettings?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings;
  dialogflowQuerySource?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource;
  contextSize?: number;
  sections?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigSections;
  knowledgeBaseQuerySource?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource;
  confidenceThreshold?: number;
}

export const GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig: Schema.Schema<GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    documentQuerySource: Schema.optional(
      GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource,
    ),
    maxResults: Schema.optional(Schema.Number),
    contextFilterSettings: Schema.optional(
      GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings,
    ),
    dialogflowQuerySource: Schema.optional(
      GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource,
    ),
    contextSize: Schema.optional(Schema.Number),
    sections: Schema.optional(
      GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigSections,
    ),
    knowledgeBaseQuerySource: Schema.optional(
      GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource,
    ),
    confidenceThreshold: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig",
  });

export interface GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig {
  baselineModelVersion?: string;
  model?: string;
}

export const GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig: Schema.Schema<GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    baselineModelVersion: Schema.optional(Schema.String),
    model: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig",
  });

export interface GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings {
  noSmallTalk?: boolean;
  onlyEndUser?: boolean;
}

export const GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings: Schema.Schema<GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    noSmallTalk: Schema.optional(Schema.Boolean),
    onlyEndUser: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings",
  });

export interface GoogleCloudDialogflowV2beta1RaiSettings {
  raiCategoryConfigs?: ReadonlyArray<GoogleCloudDialogflowV2beta1RaiSettingsRaiCategoryConfig>;
}

export const GoogleCloudDialogflowV2beta1RaiSettings: Schema.Schema<GoogleCloudDialogflowV2beta1RaiSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    raiCategoryConfigs: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1RaiSettingsRaiCategoryConfig),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1RaiSettings" });

export interface GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig {
  enableQuerySuggestionWhenNoAnswer?: boolean;
  queryConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig;
  conversationModelConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig;
  enableResponseDebugInfo?: boolean;
  disableAgentQueryLogging?: boolean;
  suggestionTriggerSettings?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings;
  enableConversationAugmentedQuery?: boolean;
  enableQuerySuggestionOnly?: boolean;
  suggestionFeature?: GoogleCloudDialogflowV2beta1SuggestionFeature;
  conversationProcessConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig;
  raiSettings?: GoogleCloudDialogflowV2beta1RaiSettings;
  enableEventBasedSuggestion?: boolean;
}

export const GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig: Schema.Schema<GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableQuerySuggestionWhenNoAnswer: Schema.optional(Schema.Boolean),
    queryConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig,
    ),
    conversationModelConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig,
    ),
    enableResponseDebugInfo: Schema.optional(Schema.Boolean),
    disableAgentQueryLogging: Schema.optional(Schema.Boolean),
    suggestionTriggerSettings: Schema.optional(
      GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings,
    ),
    enableConversationAugmentedQuery: Schema.optional(Schema.Boolean),
    enableQuerySuggestionOnly: Schema.optional(Schema.Boolean),
    suggestionFeature: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestionFeature,
    ),
    conversationProcessConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig,
    ),
    raiSettings: Schema.optional(GoogleCloudDialogflowV2beta1RaiSettings),
    enableEventBasedSuggestion: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig",
  });

export interface GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig {
  featureConfigs?: ReadonlyArray<GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig>;
  disableHighLatencyFeaturesSyncDelivery?: boolean;
  generators?: ReadonlyArray<string>;
  skipEmptyEventBasedSuggestion?: boolean;
  useUnredactedConversationData?: boolean;
  enableAsyncToolCall?: boolean;
  groupSuggestionResponses?: boolean;
}

export const GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig: Schema.Schema<GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    featureConfigs: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig,
      ),
    ),
    disableHighLatencyFeaturesSyncDelivery: Schema.optional(Schema.Boolean),
    generators: Schema.optional(Schema.Array(Schema.String)),
    skipEmptyEventBasedSuggestion: Schema.optional(Schema.Boolean),
    useUnredactedConversationData: Schema.optional(Schema.Boolean),
    enableAsyncToolCall: Schema.optional(Schema.Boolean),
    groupSuggestionResponses: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuery {
  queryText?: string;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuery: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryText: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuery",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistAnswer {
  suggestedQuery?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuery;
  answerRecord?: string;
  suggestedQueryAnswer?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswer;
  knowledgeAssistDebugInfo?: GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfo;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswer: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suggestedQuery: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuery,
    ),
    answerRecord: Schema.optional(Schema.String),
    suggestedQueryAnswer: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswer,
    ),
    knowledgeAssistDebugInfo: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfo,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1KnowledgeAssistAnswer",
  });

export interface GoogleCloudDialogflowV2beta1PhoneNumberAllowedSipTrunks {
  sipTrunks?: ReadonlyArray<string>;
  carrierIds?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1PhoneNumberAllowedSipTrunks: Schema.Schema<GoogleCloudDialogflowV2beta1PhoneNumberAllowedSipTrunks> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sipTrunks: Schema.optional(Schema.Array(Schema.String)),
    carrierIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1PhoneNumberAllowedSipTrunks",
  });

export interface GoogleCloudDialogflowV2beta1PhoneNumber {
  phoneNumber?: string;
  purgeTime?: string;
  conversationProfile?: string;
  allowedSipTrunks?: GoogleCloudDialogflowV2beta1PhoneNumberAllowedSipTrunks;
  name?: string;
  lifecycleState?:
    | "LIFECYCLE_STATE_UNSPECIFIED"
    | "ACTIVE"
    | "DELETE_REQUESTED"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1PhoneNumber: Schema.Schema<GoogleCloudDialogflowV2beta1PhoneNumber> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    phoneNumber: Schema.optional(Schema.String),
    purgeTime: Schema.optional(Schema.String),
    conversationProfile: Schema.optional(Schema.String),
    allowedSipTrunks: Schema.optional(
      GoogleCloudDialogflowV2beta1PhoneNumberAllowedSipTrunks,
    ),
    name: Schema.optional(Schema.String),
    lifecycleState: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1PhoneNumber" });

export interface GoogleCloudDialogflowV2beta1ListPhoneNumbersResponse {
  phoneNumbers?: ReadonlyArray<GoogleCloudDialogflowV2beta1PhoneNumber>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2beta1ListPhoneNumbersResponse: Schema.Schema<GoogleCloudDialogflowV2beta1ListPhoneNumbersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    phoneNumbers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1PhoneNumber),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ListPhoneNumbersResponse",
  });

export interface GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponse {
  messages?: ReadonlyArray<GoogleCloudDialogflowCxV3ResponseMessage>;
  mergeBehavior?:
    | "MERGE_BEHAVIOR_UNSPECIFIED"
    | "APPEND"
    | "REPLACE"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponse: Schema.Schema<GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ResponseMessage),
    ),
    mergeBehavior: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponse",
  });

export interface GoogleCloudDialogflowV2beta1DtmfParameters {
  acceptsDtmfInput?: boolean;
}

export const GoogleCloudDialogflowV2beta1DtmfParameters: Schema.Schema<GoogleCloudDialogflowV2beta1DtmfParameters> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acceptsDtmfInput: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1DtmfParameters" });

export interface GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse {
  dialogflowAssistAnswers?: ReadonlyArray<GoogleCloudDialogflowV2beta1DialogflowAssistAnswer>;
  latestMessage?: string;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dialogflowAssistAnswers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1DialogflowAssistAnswer),
    ),
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse",
  });

export interface GoogleCloudDialogflowCxV3ImportFlowResponse {
  flow?: string;
}

export const GoogleCloudDialogflowCxV3ImportFlowResponse: Schema.Schema<GoogleCloudDialogflowCxV3ImportFlowResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flow: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ImportFlowResponse" });

export interface GoogleCloudDialogflowV2ImportConversationDataOperationResponse {
  conversationDataset?: string;
  importCount?: number;
}

export const GoogleCloudDialogflowV2ImportConversationDataOperationResponse: Schema.Schema<GoogleCloudDialogflowV2ImportConversationDataOperationResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationDataset: Schema.optional(Schema.String),
    importCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2ImportConversationDataOperationResponse",
  });

export interface GoogleCloudDialogflowV2AgentCoachingSuggestionSources {
  instructionIndexes?: ReadonlyArray<number>;
}

export const GoogleCloudDialogflowV2AgentCoachingSuggestionSources: Schema.Schema<GoogleCloudDialogflowV2AgentCoachingSuggestionSources> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instructionIndexes: Schema.optional(Schema.Array(Schema.Number)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2AgentCoachingSuggestionSources",
  });

export interface GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion {
  answerRecord?: string;
  sources?: GoogleCloudDialogflowV2AgentCoachingSuggestionSources;
  suggestionIndex?: number;
  similarityScore?: number;
}

export const GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion: Schema.Schema<GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResult: Schema.Schema<GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    duplicateSuggestions: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResult",
  });

export interface GoogleCloudDialogflowV2AgentCoachingSuggestionSampleResponse {
  sources?: GoogleCloudDialogflowV2AgentCoachingSuggestionSources;
  duplicateCheckResult?: GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResult;
  responseText?: string;
}

export const GoogleCloudDialogflowV2AgentCoachingSuggestionSampleResponse: Schema.Schema<GoogleCloudDialogflowV2AgentCoachingSuggestionSampleResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sources: Schema.optional(
      GoogleCloudDialogflowV2AgentCoachingSuggestionSources,
    ),
    duplicateCheckResult: Schema.optional(
      GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResult,
    ),
    responseText: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2AgentCoachingSuggestionSampleResponse",
  });

export interface GoogleCloudDialogflowV2IntentFollowupIntentInfo {
  followupIntentName?: string;
  parentFollowupIntentName?: string;
}

export const GoogleCloudDialogflowV2IntentFollowupIntentInfo: Schema.Schema<GoogleCloudDialogflowV2IntentFollowupIntentInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    followupIntentName: Schema.optional(Schema.String),
    parentFollowupIntentName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentFollowupIntentInfo",
  });

export interface GoogleCloudDialogflowV2IntentTrainingPhrase {
  parts?: ReadonlyArray<GoogleCloudDialogflowV2IntentTrainingPhrasePart>;
  type?: "TYPE_UNSPECIFIED" | "EXAMPLE" | "TEMPLATE" | (string & {});
  timesAddedCount?: number;
  name?: string;
}

export const GoogleCloudDialogflowV2IntentTrainingPhrase: Schema.Schema<GoogleCloudDialogflowV2IntentTrainingPhrase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentTrainingPhrasePart),
    ),
    type: Schema.optional(Schema.String),
    timesAddedCount: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentTrainingPhrase" });

export interface GoogleCloudDialogflowV2IntentMessageCardButton {
  postback?: string;
  text?: string;
}

export const GoogleCloudDialogflowV2IntentMessageCardButton: Schema.Schema<GoogleCloudDialogflowV2IntentMessageCardButton> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    postback: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageCardButton" });

export interface GoogleCloudDialogflowV2IntentMessageCard {
  imageUri?: string;
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageCardButton>;
  title?: string;
  subtitle?: string;
}

export const GoogleCloudDialogflowV2IntentMessageCard: Schema.Schema<GoogleCloudDialogflowV2IntentMessageCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageUri: Schema.optional(Schema.String),
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageCardButton),
    ),
    title: Schema.optional(Schema.String),
    subtitle: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageCard" });

export interface GoogleCloudDialogflowV2IntentMessageTableCardRow {
  cells?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageTableCardCell>;
  dividerAfter?: boolean;
}

export const GoogleCloudDialogflowV2IntentMessageTableCardRow: Schema.Schema<GoogleCloudDialogflowV2IntentMessageTableCardRow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cells: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageTableCardCell),
    ),
    dividerAfter: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageTableCardRow",
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

export const GoogleCloudDialogflowV2IntentMessageColumnProperties: Schema.Schema<GoogleCloudDialogflowV2IntentMessageColumnProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    header: Schema.optional(Schema.String),
    horizontalAlignment: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageColumnProperties",
  });

export interface GoogleCloudDialogflowV2IntentMessageTableCard {
  rows?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageTableCardRow>;
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageBasicCardButton>;
  columnProperties?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageColumnProperties>;
  title?: string;
  subtitle?: string;
  image?: GoogleCloudDialogflowV2IntentMessageImage;
}

export const GoogleCloudDialogflowV2IntentMessageTableCard: Schema.Schema<GoogleCloudDialogflowV2IntentMessageTableCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rows: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageTableCardRow),
    ),
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageBasicCardButton),
    ),
    columnProperties: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageColumnProperties),
    ),
    title: Schema.optional(Schema.String),
    subtitle: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageTableCard" });

export interface GoogleCloudDialogflowV2IntentMessageListSelectItem {
  title?: string;
  description?: string;
  image?: GoogleCloudDialogflowV2IntentMessageImage;
  info?: GoogleCloudDialogflowV2IntentMessageSelectItemInfo;
}

export const GoogleCloudDialogflowV2IntentMessageListSelectItem: Schema.Schema<GoogleCloudDialogflowV2IntentMessageListSelectItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const GoogleCloudDialogflowV2IntentMessageListSelect: Schema.Schema<GoogleCloudDialogflowV2IntentMessageListSelect> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    items: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageListSelectItem),
    ),
    subtitle: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageListSelect" });

export interface GoogleCloudDialogflowV2IntentMessageMediaContent {
  mediaType?: "RESPONSE_MEDIA_TYPE_UNSPECIFIED" | "AUDIO" | (string & {});
  mediaObjects?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject>;
}

export const GoogleCloudDialogflowV2IntentMessageMediaContent: Schema.Schema<GoogleCloudDialogflowV2IntentMessageMediaContent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mediaType: Schema.optional(Schema.String),
    mediaObjects: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageMediaContent",
  });

export interface GoogleCloudDialogflowV2IntentMessageSuggestion {
  title?: string;
}

export const GoogleCloudDialogflowV2IntentMessageSuggestion: Schema.Schema<GoogleCloudDialogflowV2IntentMessageSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageSuggestion" });

export interface GoogleCloudDialogflowV2IntentMessageSuggestions {
  suggestions?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageSuggestion>;
}

export const GoogleCloudDialogflowV2IntentMessageSuggestions: Schema.Schema<GoogleCloudDialogflowV2IntentMessageSuggestions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suggestions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageSuggestion),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageSuggestions",
  });

export interface GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction {
  url?: string;
  urlTypeHint?:
    | "URL_TYPE_HINT_UNSPECIFIED"
    | "AMP_ACTION"
    | "AMP_CONTENT"
    | (string & {});
}

export const GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction: Schema.Schema<GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    urlTypeHint: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction",
  });

export interface GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem {
  openUriAction?: GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;
  footer?: string;
  title?: string;
  description?: string;
  image?: GoogleCloudDialogflowV2IntentMessageImage;
}

export const GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem: Schema.Schema<GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    openUriAction: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction,
    ),
    footer: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem",
  });

export interface GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard {
  items?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem>;
  imageDisplayOptions?:
    | "IMAGE_DISPLAY_OPTIONS_UNSPECIFIED"
    | "GRAY"
    | "WHITE"
    | "CROPPED"
    | "BLURRED_BACKGROUND"
    | (string & {});
}

export const GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard: Schema.Schema<GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem,
      ),
    ),
    imageDisplayOptions: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard",
  });

export interface GoogleCloudDialogflowV2IntentMessageText {
  text?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2IntentMessageText: Schema.Schema<GoogleCloudDialogflowV2IntentMessageText> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageText" });

export interface GoogleCloudDialogflowV2IntentMessageQuickReplies {
  quickReplies?: ReadonlyArray<string>;
  title?: string;
}

export const GoogleCloudDialogflowV2IntentMessageQuickReplies: Schema.Schema<GoogleCloudDialogflowV2IntentMessageQuickReplies> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    quickReplies: Schema.optional(Schema.Array(Schema.String)),
    title: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageQuickReplies",
  });

export interface GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion {
  destinationName?: string;
  uri?: string;
}

export const GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion: Schema.Schema<GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destinationName: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion",
  });

export interface GoogleCloudDialogflowV2IntentMessage {
  simpleResponses?: GoogleCloudDialogflowV2IntentMessageSimpleResponses;
  card?: GoogleCloudDialogflowV2IntentMessageCard;
  tableCard?: GoogleCloudDialogflowV2IntentMessageTableCard;
  listSelect?: GoogleCloudDialogflowV2IntentMessageListSelect;
  image?: GoogleCloudDialogflowV2IntentMessageImage;
  payload?: Record<string, unknown>;
  mediaContent?: GoogleCloudDialogflowV2IntentMessageMediaContent;
  suggestions?: GoogleCloudDialogflowV2IntentMessageSuggestions;
  basicCard?: GoogleCloudDialogflowV2IntentMessageBasicCard;
  browseCarouselCard?: GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard;
  text?: GoogleCloudDialogflowV2IntentMessageText;
  quickReplies?: GoogleCloudDialogflowV2IntentMessageQuickReplies;
  carouselSelect?: GoogleCloudDialogflowV2IntentMessageCarouselSelect;
  linkOutSuggestion?: GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion;
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
}

export const GoogleCloudDialogflowV2IntentMessage: Schema.Schema<GoogleCloudDialogflowV2IntentMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    simpleResponses: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageSimpleResponses,
    ),
    card: Schema.optional(GoogleCloudDialogflowV2IntentMessageCard),
    tableCard: Schema.optional(GoogleCloudDialogflowV2IntentMessageTableCard),
    listSelect: Schema.optional(GoogleCloudDialogflowV2IntentMessageListSelect),
    image: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    mediaContent: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageMediaContent,
    ),
    suggestions: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageSuggestions,
    ),
    basicCard: Schema.optional(GoogleCloudDialogflowV2IntentMessageBasicCard),
    browseCarouselCard: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard,
    ),
    text: Schema.optional(GoogleCloudDialogflowV2IntentMessageText),
    quickReplies: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageQuickReplies,
    ),
    carouselSelect: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageCarouselSelect,
    ),
    linkOutSuggestion: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion,
    ),
    platform: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessage" });

export interface GoogleCloudDialogflowV2IntentParameter {
  prompts?: ReadonlyArray<string>;
  displayName?: string;
  value?: string;
  defaultValue?: string;
  entityTypeDisplayName?: string;
  mandatory?: boolean;
  isList?: boolean;
  name?: string;
}

export const GoogleCloudDialogflowV2IntentParameter: Schema.Schema<GoogleCloudDialogflowV2IntentParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    prompts: Schema.optional(Schema.Array(Schema.String)),
    displayName: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    defaultValue: Schema.optional(Schema.String),
    entityTypeDisplayName: Schema.optional(Schema.String),
    mandatory: Schema.optional(Schema.Boolean),
    isList: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentParameter" });

export interface GoogleCloudDialogflowV2Context {
  name?: string;
  parameters?: Record<string, unknown>;
  lifespanCount?: number;
}

export const GoogleCloudDialogflowV2Context: Schema.Schema<GoogleCloudDialogflowV2Context> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    lifespanCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Context" });

export interface GoogleCloudDialogflowV2Intent {
  endInteraction?: boolean;
  parentFollowupIntentName?: string;
  webhookState?:
    | "WEBHOOK_STATE_UNSPECIFIED"
    | "WEBHOOK_STATE_ENABLED"
    | "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"
    | (string & {});
  followupIntentInfo?: ReadonlyArray<GoogleCloudDialogflowV2IntentFollowupIntentInfo>;
  resetContexts?: boolean;
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
  liveAgentHandoff?: boolean;
  rootFollowupIntentName?: string;
  trainingPhrases?: ReadonlyArray<GoogleCloudDialogflowV2IntentTrainingPhrase>;
  priority?: number;
  action?: string;
  inputContextNames?: ReadonlyArray<string>;
  messages?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessage>;
  mlDisabled?: boolean;
  events?: ReadonlyArray<string>;
  parameters?: ReadonlyArray<GoogleCloudDialogflowV2IntentParameter>;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2Context>;
  displayName?: string;
  name?: string;
  isFallback?: boolean;
}

export const GoogleCloudDialogflowV2Intent: Schema.Schema<GoogleCloudDialogflowV2Intent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endInteraction: Schema.optional(Schema.Boolean),
    parentFollowupIntentName: Schema.optional(Schema.String),
    webhookState: Schema.optional(Schema.String),
    followupIntentInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentFollowupIntentInfo),
    ),
    resetContexts: Schema.optional(Schema.Boolean),
    defaultResponsePlatforms: Schema.optional(Schema.Array(Schema.String)),
    liveAgentHandoff: Schema.optional(Schema.Boolean),
    rootFollowupIntentName: Schema.optional(Schema.String),
    trainingPhrases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentTrainingPhrase),
    ),
    priority: Schema.optional(Schema.Number),
    action: Schema.optional(Schema.String),
    inputContextNames: Schema.optional(Schema.Array(Schema.String)),
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessage),
    ),
    mlDisabled: Schema.optional(Schema.Boolean),
    events: Schema.optional(Schema.Array(Schema.String)),
    parameters: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentParameter),
    ),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2Context),
    ),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    isFallback: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Intent" });

export interface GoogleCloudDialogflowV2QueryResult {
  queryText?: string;
  speechRecognitionConfidence?: number;
  allRequiredParamsPresent?: boolean;
  languageCode?: string;
  action?: string;
  cancelsSlotFilling?: boolean;
  intent?: GoogleCloudDialogflowV2Intent;
  intentDetectionConfidence?: number;
  fulfillmentMessages?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessage>;
  fulfillmentText?: string;
  webhookPayload?: Record<string, unknown>;
  sentimentAnalysisResult?: GoogleCloudDialogflowV2SentimentAnalysisResult;
  webhookSource?: string;
  diagnosticInfo?: Record<string, unknown>;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2Context>;
  parameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2QueryResult: Schema.Schema<GoogleCloudDialogflowV2QueryResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryText: Schema.optional(Schema.String),
    speechRecognitionConfidence: Schema.optional(Schema.Number),
    allRequiredParamsPresent: Schema.optional(Schema.Boolean),
    languageCode: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    cancelsSlotFilling: Schema.optional(Schema.Boolean),
    intent: Schema.optional(GoogleCloudDialogflowV2Intent),
    intentDetectionConfidence: Schema.optional(Schema.Number),
    fulfillmentMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessage),
    ),
    fulfillmentText: Schema.optional(Schema.String),
    webhookPayload: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    sentimentAnalysisResult: Schema.optional(
      GoogleCloudDialogflowV2SentimentAnalysisResult,
    ),
    webhookSource: Schema.optional(Schema.String),
    diagnosticInfo: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2Context),
    ),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2QueryResult" });

export interface GoogleCloudDialogflowV2beta1SpeechToTextConfig {
  model?: string;
  speechModelVariant?:
    | "SPEECH_MODEL_VARIANT_UNSPECIFIED"
    | "USE_BEST_AVAILABLE"
    | "USE_STANDARD"
    | "USE_ENHANCED"
    | (string & {});
  phraseSets?: ReadonlyArray<string>;
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
  languageCode?: string;
  enableWordInfo?: boolean;
  useTimeoutBasedEndpointing?: boolean;
  sampleRateHertz?: number;
}

export const GoogleCloudDialogflowV2beta1SpeechToTextConfig: Schema.Schema<GoogleCloudDialogflowV2beta1SpeechToTextConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    model: Schema.optional(Schema.String),
    speechModelVariant: Schema.optional(Schema.String),
    phraseSets: Schema.optional(Schema.Array(Schema.String)),
    audioEncoding: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    enableWordInfo: Schema.optional(Schema.Boolean),
    useTimeoutBasedEndpointing: Schema.optional(Schema.Boolean),
    sampleRateHertz: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1SpeechToTextConfig" });

export interface GoogleCloudDialogflowCxV3beta1BatchRunTestCasesResponse {
  results?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TestCaseResult>;
}

export const GoogleCloudDialogflowCxV3beta1BatchRunTestCasesResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1BatchRunTestCasesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TestCaseResult),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1BatchRunTestCasesResponse",
  });

export interface GoogleCloudDialogflowV2OriginalDetectIntentRequest {
  source?: string;
  version?: string;
  payload?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2OriginalDetectIntentRequest: Schema.Schema<GoogleCloudDialogflowV2OriginalDetectIntentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2OriginalDetectIntentRequest",
  });

export interface GoogleCloudDialogflowV2beta1AssistQueryParameters {
  documentsMetadataFilters?: Record<string, string>;
}

export const GoogleCloudDialogflowV2beta1AssistQueryParameters: Schema.Schema<GoogleCloudDialogflowV2beta1AssistQueryParameters> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    documentsMetadataFilters: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1AssistQueryParameters",
  });

export interface GoogleCloudDialogflowV2beta1SuggestConversationSummaryRequest {
  latestMessage?: string;
  contextSize?: number;
  assistQueryParams?: GoogleCloudDialogflowV2beta1AssistQueryParameters;
}

export const GoogleCloudDialogflowV2beta1SuggestConversationSummaryRequest: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestConversationSummaryRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
    assistQueryParams: Schema.optional(
      GoogleCloudDialogflowV2beta1AssistQueryParameters,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestConversationSummaryRequest",
  });

export interface GoogleCloudDialogflowV2beta1SuggestSmartRepliesRequest {
  latestMessage?: string;
  contextSize?: number;
  currentTextInput?: GoogleCloudDialogflowV2beta1TextInput;
}

export const GoogleCloudDialogflowV2beta1SuggestSmartRepliesRequest: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestSmartRepliesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
    currentTextInput: Schema.optional(GoogleCloudDialogflowV2beta1TextInput),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestSmartRepliesRequest",
  });

export interface GoogleCloudLocationListLocationsResponse {
  nextPageToken?: string;
  locations?: ReadonlyArray<GoogleCloudLocationLocation>;
}

export const GoogleCloudLocationListLocationsResponse: Schema.Schema<GoogleCloudLocationListLocationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(GoogleCloudLocationLocation)),
  }).annotate({ identifier: "GoogleCloudLocationListLocationsResponse" });

export interface GoogleCloudDialogflowCxV3CreateVersionOperationMetadata {
  version?: string;
}

export const GoogleCloudDialogflowCxV3CreateVersionOperationMetadata: Schema.Schema<GoogleCloudDialogflowCxV3CreateVersionOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3CreateVersionOperationMetadata",
  });

export interface GoogleCloudDialogflowV2beta1IntentInput {
  languageCode?: string;
  intent?: string;
}

export const GoogleCloudDialogflowV2beta1IntentInput: Schema.Schema<GoogleCloudDialogflowV2beta1IntentInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    intent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentInput" });

export interface GoogleCloudDialogflowV2beta1SuggestionInput {
  intentInput?: GoogleCloudDialogflowV2beta1IntentInput;
  parameters?: Record<string, unknown>;
  textOverride?: GoogleCloudDialogflowV2beta1TextInput;
  sendTime?: string;
  answerRecord?: string;
  action?:
    | "ACTION_UNSPECIFIED"
    | "CANCEL"
    | "REVISE"
    | "CONFIRM"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1SuggestionInput: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestionInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intentInput: Schema.optional(GoogleCloudDialogflowV2beta1IntentInput),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    textOverride: Schema.optional(GoogleCloudDialogflowV2beta1TextInput),
    sendTime: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1SuggestionInput" });

export interface GoogleCloudDialogflowV2beta1LoggingConfig {
  enableStackdriverLogging?: boolean;
}

export const GoogleCloudDialogflowV2beta1LoggingConfig: Schema.Schema<GoogleCloudDialogflowV2beta1LoggingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableStackdriverLogging: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1LoggingConfig" });

export interface GoogleCloudDialogflowV2beta1AutomatedAgentConfig {
  sessionTtl?: string;
  agent?: string;
}

export const GoogleCloudDialogflowV2beta1AutomatedAgentConfig: Schema.Schema<GoogleCloudDialogflowV2beta1AutomatedAgentConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionTtl: Schema.optional(Schema.String),
    agent: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1AutomatedAgentConfig",
  });

export interface GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigMessageAnalysisConfig {
  enableSentimentAnalysis?: boolean;
  enableEntityExtraction?: boolean;
  enableSentimentAnalysisV3?: boolean;
}

export const GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigMessageAnalysisConfig: Schema.Schema<GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigMessageAnalysisConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableSentimentAnalysis: Schema.optional(Schema.Boolean),
    enableEntityExtraction: Schema.optional(Schema.Boolean),
    enableSentimentAnalysisV3: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigMessageAnalysisConfig",
  });

export interface GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig {
  messageAnalysisConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigMessageAnalysisConfig;
  notificationConfig?: GoogleCloudDialogflowV2beta1NotificationConfig;
  humanAgentSuggestionConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig;
  endUserSuggestionConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig;
}

export const GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig: Schema.Schema<GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messageAnalysisConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigMessageAnalysisConfig,
    ),
    notificationConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1NotificationConfig,
    ),
    humanAgentSuggestionConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig,
    ),
    endUserSuggestionConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig",
  });

export interface GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigLivePersonConfig {
  accountNumber?: string;
}

export const GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigLivePersonConfig: Schema.Schema<GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigLivePersonConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountNumber: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigLivePersonConfig",
  });

export interface GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigSalesforceLiveAgentConfig {
  organizationId?: string;
  endpointDomain?: string;
  deploymentId?: string;
  buttonId?: string;
}

export const GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigSalesforceLiveAgentConfig: Schema.Schema<GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigSalesforceLiveAgentConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.optional(Schema.String),
    endpointDomain: Schema.optional(Schema.String),
    deploymentId: Schema.optional(Schema.String),
    buttonId: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigSalesforceLiveAgentConfig",
  });

export interface GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig {
  livePersonConfig?: GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigLivePersonConfig;
  salesforceLiveAgentConfig?: GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigSalesforceLiveAgentConfig;
}

export const GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig: Schema.Schema<GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    livePersonConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigLivePersonConfig,
    ),
    salesforceLiveAgentConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigSalesforceLiveAgentConfig,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig",
  });

export interface GoogleCloudDialogflowV2beta1ConversationProfile {
  useBidiStreaming?: boolean;
  newRecognitionResultNotificationConfig?: GoogleCloudDialogflowV2beta1NotificationConfig;
  ttsConfig?: GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig;
  loggingConfig?: GoogleCloudDialogflowV2beta1LoggingConfig;
  updateTime?: string;
  name?: string;
  automatedAgentConfig?: GoogleCloudDialogflowV2beta1AutomatedAgentConfig;
  displayName?: string;
  notificationConfig?: GoogleCloudDialogflowV2beta1NotificationConfig;
  newMessageEventNotificationConfig?: GoogleCloudDialogflowV2beta1NotificationConfig;
  sttConfig?: GoogleCloudDialogflowV2beta1SpeechToTextConfig;
  languageCode?: string;
  securitySettings?: string;
  humanAgentAssistantConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig;
  timeZone?: string;
  createTime?: string;
  humanAgentHandoffConfig?: GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig;
}

export const GoogleCloudDialogflowV2beta1ConversationProfile: Schema.Schema<GoogleCloudDialogflowV2beta1ConversationProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    useBidiStreaming: Schema.optional(Schema.Boolean),
    newRecognitionResultNotificationConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1NotificationConfig,
    ),
    ttsConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig,
    ),
    loggingConfig: Schema.optional(GoogleCloudDialogflowV2beta1LoggingConfig),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    automatedAgentConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1AutomatedAgentConfig,
    ),
    displayName: Schema.optional(Schema.String),
    notificationConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1NotificationConfig,
    ),
    newMessageEventNotificationConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1NotificationConfig,
    ),
    sttConfig: Schema.optional(GoogleCloudDialogflowV2beta1SpeechToTextConfig),
    languageCode: Schema.optional(Schema.String),
    securitySettings: Schema.optional(Schema.String),
    humanAgentAssistantConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig,
    ),
    timeZone: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    humanAgentHandoffConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ConversationProfile",
  });

export interface GoogleCloudDialogflowV2beta1GenerateStatelessSummaryRequestMinimalConversation {
  messages?: ReadonlyArray<GoogleCloudDialogflowV2beta1Message>;
}

export const GoogleCloudDialogflowV2beta1GenerateStatelessSummaryRequestMinimalConversation: Schema.Schema<GoogleCloudDialogflowV2beta1GenerateStatelessSummaryRequestMinimalConversation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1Message),
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1GenerateStatelessSummaryRequestMinimalConversation",
  });

export interface GoogleCloudDialogflowV2beta1GenerateStatelessSummaryRequest {
  conversationProfile?: GoogleCloudDialogflowV2beta1ConversationProfile;
  latestMessage?: string;
  maxContextSize?: number;
  statelessConversation?: GoogleCloudDialogflowV2beta1GenerateStatelessSummaryRequestMinimalConversation;
}

export const GoogleCloudDialogflowV2beta1GenerateStatelessSummaryRequest: Schema.Schema<GoogleCloudDialogflowV2beta1GenerateStatelessSummaryRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationProfile: Schema.optional(
      GoogleCloudDialogflowV2beta1ConversationProfile,
    ),
    latestMessage: Schema.optional(Schema.String),
    maxContextSize: Schema.optional(Schema.Number),
    statelessConversation: Schema.optional(
      GoogleCloudDialogflowV2beta1GenerateStatelessSummaryRequestMinimalConversation,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1GenerateStatelessSummaryRequest",
  });

export interface GoogleCloudDialogflowV2ArticleAnswer {
  confidence?: number;
  metadata?: Record<string, string>;
  snippets?: ReadonlyArray<string>;
  uri?: string;
  answerRecord?: string;
  title?: string;
}

export const GoogleCloudDialogflowV2ArticleAnswer: Schema.Schema<GoogleCloudDialogflowV2ArticleAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    snippets: Schema.optional(Schema.Array(Schema.String)),
    uri: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ArticleAnswer" });

export interface GoogleCloudDialogflowV2beta1AudioInput {
  audio?: string;
  config?: GoogleCloudDialogflowV2beta1InputAudioConfig;
}

export const GoogleCloudDialogflowV2beta1AudioInput: Schema.Schema<GoogleCloudDialogflowV2beta1AudioInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audio: Schema.optional(Schema.String),
    config: Schema.optional(GoogleCloudDialogflowV2beta1InputAudioConfig),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1AudioInput" });

export interface GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig {
  enablePredeploymentRun?: boolean;
  testCases?: ReadonlyArray<string>;
  enableContinuousRun?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enablePredeploymentRun: Schema.optional(Schema.Boolean),
    testCases: Schema.optional(Schema.Array(Schema.String)),
    enableContinuousRun: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig",
  });

export interface GoogleCloudDialogflowV2beta1ListContextsResponse {
  contexts?: ReadonlyArray<GoogleCloudDialogflowV2beta1Context>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2beta1ListContextsResponse: Schema.Schema<GoogleCloudDialogflowV2beta1ListContextsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1Context),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ListContextsResponse",
  });

export interface GoogleCloudDialogflowV2beta1ConversationTelephonyConnectionInfoSipHeader {
  value?: string;
  name?: string;
}

export const GoogleCloudDialogflowV2beta1ConversationTelephonyConnectionInfoSipHeader: Schema.Schema<GoogleCloudDialogflowV2beta1ConversationTelephonyConnectionInfoSipHeader> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1ConversationTelephonyConnectionInfoSipHeader",
  });

export interface GoogleCloudDialogflowV2beta1ConversationTelephonyConnectionInfoMimeContent {
  mimeType?: string;
  content?: string;
}

export const GoogleCloudDialogflowV2beta1ConversationTelephonyConnectionInfoMimeContent: Schema.Schema<GoogleCloudDialogflowV2beta1ConversationTelephonyConnectionInfoMimeContent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mimeType: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1ConversationTelephonyConnectionInfoMimeContent",
  });

export interface GoogleCloudDialogflowV2beta1ConversationTelephonyConnectionInfo {
  dialedNumber?: string;
  sdp?: string;
  sipHeaders?: ReadonlyArray<GoogleCloudDialogflowV2beta1ConversationTelephonyConnectionInfoSipHeader>;
  extraMimeContents?: ReadonlyArray<GoogleCloudDialogflowV2beta1ConversationTelephonyConnectionInfoMimeContent>;
}

export const GoogleCloudDialogflowV2beta1ConversationTelephonyConnectionInfo: Schema.Schema<GoogleCloudDialogflowV2beta1ConversationTelephonyConnectionInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dialedNumber: Schema.optional(Schema.String),
    sdp: Schema.optional(Schema.String),
    sipHeaders: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1ConversationTelephonyConnectionInfoSipHeader,
      ),
    ),
    extraMimeContents: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1ConversationTelephonyConnectionInfoMimeContent,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1ConversationTelephonyConnectionInfo",
  });

export interface GoogleCloudDialogflowV2ToolCall {
  tool?: string;
  inputParameters?: Record<string, unknown>;
  answerRecord?: string;
  cesTool?: string;
  toolDisplayDetails?: string;
  cesApp?: string;
  action?: string;
  state?:
    | "STATE_UNSPECIFIED"
    | "TRIGGERED"
    | "NEEDS_CONFIRMATION"
    | (string & {});
  cesToolset?: string;
  createTime?: string;
  toolDisplayName?: string;
}

export const GoogleCloudDialogflowV2ToolCall: Schema.Schema<GoogleCloudDialogflowV2ToolCall> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tool: Schema.optional(Schema.String),
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    answerRecord: Schema.optional(Schema.String),
    cesTool: Schema.optional(Schema.String),
    toolDisplayDetails: Schema.optional(Schema.String),
    cesApp: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    cesToolset: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    toolDisplayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolCall" });

export interface GoogleCloudDialogflowV2GeneratorSuggestionToolCallInfo {
  toolCall?: GoogleCloudDialogflowV2ToolCall;
  toolCallResult?: GoogleCloudDialogflowV2ToolCallResult;
}

export const GoogleCloudDialogflowV2GeneratorSuggestionToolCallInfo: Schema.Schema<GoogleCloudDialogflowV2GeneratorSuggestionToolCallInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolCall: Schema.optional(GoogleCloudDialogflowV2ToolCall),
    toolCallResult: Schema.optional(GoogleCloudDialogflowV2ToolCallResult),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2GeneratorSuggestionToolCallInfo",
  });

export interface GoogleCloudDialogflowV2GcsDestination {
  uri?: string;
}

export const GoogleCloudDialogflowV2GcsDestination: Schema.Schema<GoogleCloudDialogflowV2GcsDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2GcsDestination" });

export interface GoogleCloudDialogflowV2beta1BatchUpdateEntitiesRequest {
  languageCode?: string;
  entities?: ReadonlyArray<GoogleCloudDialogflowV2beta1EntityTypeEntity>;
  updateMask?: string;
}

export const GoogleCloudDialogflowV2beta1BatchUpdateEntitiesRequest: Schema.Schema<GoogleCloudDialogflowV2beta1BatchUpdateEntitiesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1EntityTypeEntity),
    ),
    updateMask: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1BatchUpdateEntitiesRequest",
  });

export interface GoogleCloudDialogflowV2beta1ImportDocumentsResponse {
  warnings?: ReadonlyArray<GoogleRpcStatus>;
}

export const GoogleCloudDialogflowV2beta1ImportDocumentsResponse: Schema.Schema<GoogleCloudDialogflowV2beta1ImportDocumentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    warnings: Schema.optional(Schema.Array(GoogleRpcStatus)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ImportDocumentsResponse",
  });

export interface GoogleCloudDialogflowV2beta1ExportAgentRequest {
  agentUri?: string;
}

export const GoogleCloudDialogflowV2beta1ExportAgentRequest: Schema.Schema<GoogleCloudDialogflowV2beta1ExportAgentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ExportAgentRequest" });

export interface GoogleCloudDialogflowCxV3LanguageInfo {
  inputLanguageCode?: string;
  confidenceScore?: number;
  resolvedLanguageCode?: string;
}

export const GoogleCloudDialogflowCxV3LanguageInfo: Schema.Schema<GoogleCloudDialogflowCxV3LanguageInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputLanguageCode: Schema.optional(Schema.String),
    confidenceScore: Schema.optional(Schema.Number),
    resolvedLanguageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3LanguageInfo" });

export interface GoogleCloudDialogflowV2beta1WebhookResponse {
  fulfillmentText?: string;
  endInteraction?: boolean;
  payload?: Record<string, unknown>;
  sessionEntityTypes?: ReadonlyArray<GoogleCloudDialogflowV2beta1SessionEntityType>;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2beta1Context>;
  followupEventInput?: GoogleCloudDialogflowV2beta1EventInput;
  source?: string;
  fulfillmentMessages?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessage>;
  liveAgentHandoff?: boolean;
}

export const GoogleCloudDialogflowV2beta1WebhookResponse: Schema.Schema<GoogleCloudDialogflowV2beta1WebhookResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fulfillmentText: Schema.optional(Schema.String),
    endInteraction: Schema.optional(Schema.Boolean),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    sessionEntityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SessionEntityType),
    ),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1Context),
    ),
    followupEventInput: Schema.optional(GoogleCloudDialogflowV2beta1EventInput),
    source: Schema.optional(Schema.String),
    fulfillmentMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessage),
    ),
    liveAgentHandoff: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1WebhookResponse" });

export interface GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest {
  suggestionFeatureConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig;
  participantRole?:
    | "ROLE_UNSPECIFIED"
    | "HUMAN_AGENT"
    | "AUTOMATED_AGENT"
    | "END_USER"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest: Schema.Schema<GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suggestionFeatureConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig,
    ),
    participantRole: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest",
  });

export interface GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponseSummarySummarySection {
  summary?: string;
  section?: string;
}

export const GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponseSummarySummarySection: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponseSummarySummarySection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    summary: Schema.optional(Schema.String),
    section: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponseSummarySummarySection",
  });

export interface GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponseSummary {
  sortedTextSections?: ReadonlyArray<GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponseSummarySummarySection>;
  answerRecord?: string;
  text?: string;
  textSections?: Record<string, string>;
  baselineModelVersion?: string;
}

export const GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponseSummary: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponseSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sortedTextSections: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponseSummarySummarySection,
      ),
    ),
    answerRecord: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
    textSections: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    baselineModelVersion: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponseSummary",
  });

export interface GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponse {
  summary?: GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponseSummary;
  latestMessage?: string;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponse: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    summary: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponseSummary,
    ),
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportEntityTypesMetadata {}

export const GoogleCloudDialogflowCxV3beta1ExportEntityTypesMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportEntityTypesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportEntityTypesMetadata",
  });

export interface GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsDecomposition {
  accuracyDecomposition?: GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsAccuracyDecomposition;
  adherenceDecomposition?: GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsAdherenceDecomposition;
}

export const GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsDecomposition: Schema.Schema<GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsDecomposition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accuracyDecomposition: Schema.optional(
      GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsAccuracyDecomposition,
    ),
    adherenceDecomposition: Schema.optional(
      GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsAdherenceDecomposition,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsDecomposition",
  });

export interface GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsSummarizationEvaluationResult {
  score?: number;
  sectionSummary?: string;
  evaluationResults?: ReadonlyArray<GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsEvaluationResult>;
  sessionId?: string;
  decompositions?: ReadonlyArray<GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsDecomposition>;
  metric?: string;
  section?: string;
}

export const GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsSummarizationEvaluationResult: Schema.Schema<GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsSummarizationEvaluationResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.Number),
    sectionSummary: Schema.optional(Schema.String),
    evaluationResults: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsEvaluationResult,
      ),
    ),
    sessionId: Schema.optional(Schema.String),
    decompositions: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsDecomposition,
      ),
    ),
    metric: Schema.optional(Schema.String),
    section: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsSummarizationEvaluationResult",
  });

export interface GoogleCloudDialogflowV2beta1CompileSuggestionResponse {
  latestMessage?: string;
  contextSize?: number;
  suggestion?: GoogleCloudDialogflowV2beta1Suggestion;
}

export const GoogleCloudDialogflowV2beta1CompileSuggestionResponse: Schema.Schema<GoogleCloudDialogflowV2beta1CompileSuggestionResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
    suggestion: Schema.optional(GoogleCloudDialogflowV2beta1Suggestion),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1CompileSuggestionResponse",
  });

export interface GoogleCloudDialogflowV2beta1ListMessagesResponse {
  messages?: ReadonlyArray<GoogleCloudDialogflowV2beta1Message>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2beta1ListMessagesResponse: Schema.Schema<GoogleCloudDialogflowV2beta1ListMessagesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1Message),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ListMessagesResponse",
  });

export interface GoogleCloudDialogflowCxV3TestError {
  testTime?: string;
  testCase?: string;
  status?: GoogleRpcStatus;
}

export const GoogleCloudDialogflowCxV3TestError: Schema.Schema<GoogleCloudDialogflowCxV3TestError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testTime: Schema.optional(Schema.String),
    testCase: Schema.optional(Schema.String),
    status: Schema.optional(GoogleRpcStatus),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TestError" });

export interface GoogleCloudDialogflowCxV3RunContinuousTestMetadata {
  errors?: ReadonlyArray<GoogleCloudDialogflowCxV3TestError>;
}

export const GoogleCloudDialogflowCxV3RunContinuousTestMetadata: Schema.Schema<GoogleCloudDialogflowCxV3RunContinuousTestMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3TestError)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3RunContinuousTestMetadata",
  });

export interface GoogleCloudDialogflowCxV3PageInfoFormInfo {
  parameterInfo?: ReadonlyArray<GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo>;
}

export const GoogleCloudDialogflowCxV3PageInfoFormInfo: Schema.Schema<GoogleCloudDialogflowCxV3PageInfoFormInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameterInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3PageInfoFormInfo" });

export interface GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo {
  displayName?: string;
  value?: unknown;
  state?:
    | "PARAMETER_STATE_UNSPECIFIED"
    | "EMPTY"
    | "INVALID"
    | "FILLED"
    | (string & {});
  justCollected?: boolean;
  required?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo: Schema.Schema<GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Unknown),
    state: Schema.optional(Schema.String),
    justCollected: Schema.optional(Schema.Boolean),
    required: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo",
  });

export interface GoogleCloudDialogflowCxV3beta1PageInfoFormInfo {
  parameterInfo?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo>;
}

export const GoogleCloudDialogflowCxV3beta1PageInfoFormInfo: Schema.Schema<GoogleCloudDialogflowCxV3beta1PageInfoFormInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameterInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1PageInfoFormInfo" });

export interface GoogleCloudDialogflowCxV3beta1PageInfo {
  displayName?: string;
  formInfo?: GoogleCloudDialogflowCxV3beta1PageInfoFormInfo;
  currentPage?: string;
}

export const GoogleCloudDialogflowCxV3beta1PageInfo: Schema.Schema<GoogleCloudDialogflowCxV3beta1PageInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    formInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1PageInfoFormInfo),
    currentPage: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1PageInfo" });

export interface GoogleCloudDialogflowV2beta1GenerateSuggestionsResponse {
  generatorSuggestionAnswers?: ReadonlyArray<GoogleCloudDialogflowV2beta1GenerateSuggestionsResponseGeneratorSuggestionAnswer>;
  latestMessage?: string;
}

export const GoogleCloudDialogflowV2beta1GenerateSuggestionsResponse: Schema.Schema<GoogleCloudDialogflowV2beta1GenerateSuggestionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generatorSuggestionAnswers: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1GenerateSuggestionsResponseGeneratorSuggestionAnswer,
      ),
    ),
    latestMessage: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1GenerateSuggestionsResponse",
  });

export interface GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsSectionToken {
  section?: string;
  tokenCount?: string;
}

export const GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsSectionToken: Schema.Schema<GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsSectionToken> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    section: Schema.optional(Schema.String),
    tokenCount: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsSectionToken",
  });

export interface GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsConversationDetail {
  metricDetails?: ReadonlyArray<GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsConversationDetailMetricDetail>;
  messageEntries?: ReadonlyArray<GoogleCloudDialogflowV2beta1MessageEntry>;
  sectionTokens?: ReadonlyArray<GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsSectionToken>;
  summarySections?: ReadonlyArray<GoogleCloudDialogflowV2beta1SummarySuggestionSummarySection>;
}

export const GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsConversationDetail: Schema.Schema<GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsConversationDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metricDetails: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsConversationDetailMetricDetail,
      ),
    ),
    messageEntries: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1MessageEntry),
    ),
    sectionTokens: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsSectionToken,
      ),
    ),
    summarySections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SummarySuggestionSummarySection),
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsConversationDetail",
  });

export interface GoogleCloudDialogflowV2beta1SummarizationEvaluationMetrics {
  summarizationEvaluationMergedResultsUri?: string;
  overallMetrics?: ReadonlyArray<GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsOverallScoresByMetric>;
  overallSectionTokens?: ReadonlyArray<GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsSectionToken>;
  summarizationEvaluationResults?: ReadonlyArray<GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsSummarizationEvaluationResult>;
  conversationDetails?: ReadonlyArray<GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsConversationDetail>;
}

export const GoogleCloudDialogflowV2beta1SummarizationEvaluationMetrics: Schema.Schema<GoogleCloudDialogflowV2beta1SummarizationEvaluationMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    summarizationEvaluationMergedResultsUri: Schema.optional(Schema.String),
    overallMetrics: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsOverallScoresByMetric,
      ),
    ),
    overallSectionTokens: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsSectionToken,
      ),
    ),
    summarizationEvaluationResults: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsSummarizationEvaluationResult,
      ),
    ),
    conversationDetails: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1SummarizationEvaluationMetricsConversationDetail,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SummarizationEvaluationMetrics",
  });

export interface GoogleCloudDialogflowCxV3ContinuousTestResult {
  testCaseResults?: ReadonlyArray<string>;
  runTime?: string;
  name?: string;
  result?:
    | "AGGREGATED_TEST_RESULT_UNSPECIFIED"
    | "PASSED"
    | "FAILED"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3ContinuousTestResult: Schema.Schema<GoogleCloudDialogflowCxV3ContinuousTestResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testCaseResults: Schema.optional(Schema.Array(Schema.String)),
    runTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    result: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ContinuousTestResult" });

export interface GoogleCloudDialogflowV2ImportConversationDataOperationMetadata {
  conversationDataset?: string;
  createTime?: string;
  partialFailures?: ReadonlyArray<GoogleRpcStatus>;
}

export const GoogleCloudDialogflowV2ImportConversationDataOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2ImportConversationDataOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationDataset: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    partialFailures: Schema.optional(Schema.Array(GoogleRpcStatus)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2ImportConversationDataOperationMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue {
  originalValue?: string;
  resolvedValue?: unknown;
}

export const GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue: Schema.Schema<GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    originalValue: Schema.optional(Schema.String),
    resolvedValue: Schema.optional(Schema.Unknown),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue",
  });

export interface GoogleCloudDialogflowV2beta1EvaluationStatus {
  done?: boolean;
  pipelineStatus?: GoogleRpcStatus;
}

export const GoogleCloudDialogflowV2beta1EvaluationStatus: Schema.Schema<GoogleCloudDialogflowV2beta1EvaluationStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    done: Schema.optional(Schema.Boolean),
    pipelineStatus: Schema.optional(GoogleRpcStatus),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1EvaluationStatus" });

export interface GoogleCloudDialogflowV2beta1GeneratorEvaluationConfigAgentAssistInputDataConfig {
  startTime?: string;
  endTime?: string;
}

export const GoogleCloudDialogflowV2beta1GeneratorEvaluationConfigAgentAssistInputDataConfig: Schema.Schema<GoogleCloudDialogflowV2beta1GeneratorEvaluationConfigAgentAssistInputDataConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1GeneratorEvaluationConfigAgentAssistInputDataConfig",
  });

export interface GoogleCloudDialogflowV2beta1GeneratorEvaluationConfigDatasetInputDataConfig {
  dataset?: string;
}

export const GoogleCloudDialogflowV2beta1GeneratorEvaluationConfigDatasetInputDataConfig: Schema.Schema<GoogleCloudDialogflowV2beta1GeneratorEvaluationConfigDatasetInputDataConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataset: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1GeneratorEvaluationConfigDatasetInputDataConfig",
  });

export interface GoogleCloudDialogflowV2beta1GeneratorEvaluationConfigInputDataConfig {
  agentAssistInputDataConfig?: GoogleCloudDialogflowV2beta1GeneratorEvaluationConfigAgentAssistInputDataConfig;
  isSummaryGenerationAllowed?: boolean;
  inputDataSourceType?:
    | "INPUT_DATA_SOURCE_TYPE_UNSPECIFIED"
    | "AGENT_ASSIST_CONVERSATIONS"
    | "INSIGHTS_CONVERSATIONS"
    | (string & {});
  endTime?: string;
  datasetInputDataConfig?: GoogleCloudDialogflowV2beta1GeneratorEvaluationConfigDatasetInputDataConfig;
  startTime?: string;
  sampleSize?: number;
  summaryGenerationOption?:
    | "SUMMARY_GENERATION_OPTION_UNSPECIFIED"
    | "ALWAYS_GENERATE"
    | "GENERATE_IF_MISSING"
    | "DO_NOT_GENERATE"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1GeneratorEvaluationConfigInputDataConfig: Schema.Schema<GoogleCloudDialogflowV2beta1GeneratorEvaluationConfigInputDataConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentAssistInputDataConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1GeneratorEvaluationConfigAgentAssistInputDataConfig,
    ),
    isSummaryGenerationAllowed: Schema.optional(Schema.Boolean),
    inputDataSourceType: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    datasetInputDataConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1GeneratorEvaluationConfigDatasetInputDataConfig,
    ),
    startTime: Schema.optional(Schema.String),
    sampleSize: Schema.optional(Schema.Number),
    summaryGenerationOption: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1GeneratorEvaluationConfigInputDataConfig",
  });

export interface GoogleCloudDialogflowV2beta1GeneratorEvaluationConfigSummarizationConfig {
  accuracyEvaluationVersion?: string;
  completenessEvaluationVersion?: string;
  enableCompletenessEvaluation?: boolean;
  evaluatorVersion?: string;
  enableAccuracyEvaluation?: boolean;
}

export const GoogleCloudDialogflowV2beta1GeneratorEvaluationConfigSummarizationConfig: Schema.Schema<GoogleCloudDialogflowV2beta1GeneratorEvaluationConfigSummarizationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accuracyEvaluationVersion: Schema.optional(Schema.String),
    completenessEvaluationVersion: Schema.optional(Schema.String),
    enableCompletenessEvaluation: Schema.optional(Schema.Boolean),
    evaluatorVersion: Schema.optional(Schema.String),
    enableAccuracyEvaluation: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1GeneratorEvaluationConfigSummarizationConfig",
  });

export interface GoogleCloudDialogflowV2beta1GeneratorEvaluationConfig {
  outputGcsBucketPath?: string;
  inputDataConfig?: GoogleCloudDialogflowV2beta1GeneratorEvaluationConfigInputDataConfig;
  summarizationConfig?: GoogleCloudDialogflowV2beta1GeneratorEvaluationConfigSummarizationConfig;
}

export const GoogleCloudDialogflowV2beta1GeneratorEvaluationConfig: Schema.Schema<GoogleCloudDialogflowV2beta1GeneratorEvaluationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputGcsBucketPath: Schema.optional(Schema.String),
    inputDataConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1GeneratorEvaluationConfigInputDataConfig,
    ),
    summarizationConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1GeneratorEvaluationConfigSummarizationConfig,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1GeneratorEvaluationConfig",
  });

export interface GoogleCloudDialogflowV2beta1GeneratorEvaluation {
  displayName?: string;
  initialGenerator?: GoogleCloudDialogflowV2beta1Generator;
  evaluationStatus?: GoogleCloudDialogflowV2beta1EvaluationStatus;
  name?: string;
  summarizationMetrics?: GoogleCloudDialogflowV2beta1SummarizationEvaluationMetrics;
  createTime?: string;
  generatorEvaluationConfig?: GoogleCloudDialogflowV2beta1GeneratorEvaluationConfig;
  satisfiesPzs?: boolean;
  completeTime?: string;
  satisfiesPzi?: boolean;
}

export const GoogleCloudDialogflowV2beta1GeneratorEvaluation: Schema.Schema<GoogleCloudDialogflowV2beta1GeneratorEvaluation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    initialGenerator: Schema.optional(GoogleCloudDialogflowV2beta1Generator),
    evaluationStatus: Schema.optional(
      GoogleCloudDialogflowV2beta1EvaluationStatus,
    ),
    name: Schema.optional(Schema.String),
    summarizationMetrics: Schema.optional(
      GoogleCloudDialogflowV2beta1SummarizationEvaluationMetrics,
    ),
    createTime: Schema.optional(Schema.String),
    generatorEvaluationConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1GeneratorEvaluationConfig,
    ),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    completeTime: Schema.optional(Schema.String),
    satisfiesPzi: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1GeneratorEvaluation",
  });

export interface GoogleCloudDialogflowV2SessionEntityType {
  name?: string;
  entities?: ReadonlyArray<GoogleCloudDialogflowV2EntityTypeEntity>;
  entityOverrideMode?:
    | "ENTITY_OVERRIDE_MODE_UNSPECIFIED"
    | "ENTITY_OVERRIDE_MODE_OVERRIDE"
    | "ENTITY_OVERRIDE_MODE_SUPPLEMENT"
    | (string & {});
}

export const GoogleCloudDialogflowV2SessionEntityType: Schema.Schema<GoogleCloudDialogflowV2SessionEntityType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2EntityTypeEntity),
    ),
    entityOverrideMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SessionEntityType" });

export interface GoogleCloudDialogflowV2EventInput {
  parameters?: Record<string, unknown>;
  name?: string;
  languageCode?: string;
}

export const GoogleCloudDialogflowV2EventInput: Schema.Schema<GoogleCloudDialogflowV2EventInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2EventInput" });

export interface GoogleCloudDialogflowV2WebhookResponse {
  sessionEntityTypes?: ReadonlyArray<GoogleCloudDialogflowV2SessionEntityType>;
  payload?: Record<string, unknown>;
  fulfillmentMessages?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessage>;
  source?: string;
  followupEventInput?: GoogleCloudDialogflowV2EventInput;
  fulfillmentText?: string;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2Context>;
}

export const GoogleCloudDialogflowV2WebhookResponse: Schema.Schema<GoogleCloudDialogflowV2WebhookResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionEntityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SessionEntityType),
    ),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    fulfillmentMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessage),
    ),
    source: Schema.optional(Schema.String),
    followupEventInput: Schema.optional(GoogleCloudDialogflowV2EventInput),
    fulfillmentText: Schema.optional(Schema.String),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2Context),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2WebhookResponse" });

export interface GoogleCloudDialogflowCxV3ExportTestCasesMetadata {}

export const GoogleCloudDialogflowCxV3ExportTestCasesMetadata: Schema.Schema<GoogleCloudDialogflowCxV3ExportTestCasesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ExportTestCasesMetadata",
  });

export interface GoogleCloudDialogflowCxV3TestCaseError {
  testCase?: GoogleCloudDialogflowCxV3TestCase;
  status?: GoogleRpcStatus;
}

export const GoogleCloudDialogflowCxV3TestCaseError: Schema.Schema<GoogleCloudDialogflowCxV3TestCaseError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testCase: Schema.optional(GoogleCloudDialogflowCxV3TestCase),
    status: Schema.optional(GoogleRpcStatus),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TestCaseError" });

export interface GoogleCloudDialogflowCxV3ImportTestCasesMetadata {
  errors?: ReadonlyArray<GoogleCloudDialogflowCxV3TestCaseError>;
}

export const GoogleCloudDialogflowCxV3ImportTestCasesMetadata: Schema.Schema<GoogleCloudDialogflowCxV3ImportTestCasesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3TestCaseError),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ImportTestCasesMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceSecretVersionHeaderValue {
  secretVersion?: string;
}

export const GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceSecretVersionHeaderValue: Schema.Schema<GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceSecretVersionHeaderValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    secretVersion: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceSecretVersionHeaderValue",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig {
  clientSecret?: string;
  scopes?: ReadonlyArray<string>;
  clientId?: string;
  secretVersionForClientSecret?: string;
  tokenEndpoint?: string;
}

export const GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientSecret: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Schema.String)),
    clientId: Schema.optional(Schema.String),
    secretVersionForClientSecret: Schema.optional(Schema.String),
    tokenEndpoint: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookGenericWebService {
  requestBody?: string;
  parameterMapping?: Record<string, string>;
  secretVersionsForRequestHeaders?: Record<
    string,
    GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceSecretVersionHeaderValue
  >;
  username?: string;
  uri?: string;
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
  password?: string;
  secretVersionForUsernamePassword?: string;
  oauthConfig?: GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig;
  serviceAccountAuthConfig?: GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceServiceAccountAuthConfig;
  webhookType?:
    | "WEBHOOK_TYPE_UNSPECIFIED"
    | "STANDARD"
    | "FLEXIBLE"
    | (string & {});
  requestHeaders?: Record<string, string>;
  allowedCaCerts?: ReadonlyArray<string>;
  serviceAgentAuth?:
    | "SERVICE_AGENT_AUTH_UNSPECIFIED"
    | "NONE"
    | "ID_TOKEN"
    | "ACCESS_TOKEN"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1WebhookGenericWebService: Schema.Schema<GoogleCloudDialogflowCxV3beta1WebhookGenericWebService> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestBody: Schema.optional(Schema.String),
    parameterMapping: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    secretVersionsForRequestHeaders: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceSecretVersionHeaderValue,
      ),
    ),
    username: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    httpMethod: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    secretVersionForUsernamePassword: Schema.optional(Schema.String),
    oauthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig,
    ),
    serviceAccountAuthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceServiceAccountAuthConfig,
    ),
    webhookType: Schema.optional(Schema.String),
    requestHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    allowedCaCerts: Schema.optional(Schema.Array(Schema.String)),
    serviceAgentAuth: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1WebhookGenericWebService",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig {
  service?: string;
  genericWebService?: GoogleCloudDialogflowCxV3beta1WebhookGenericWebService;
}

export const GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
    genericWebService: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookGenericWebService,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig",
  });

export interface GoogleCloudDialogflowCxV3beta1Webhook {
  serviceDirectory?: GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig;
  timeout?: string;
  displayName?: string;
  name?: string;
  genericWebService?: GoogleCloudDialogflowCxV3beta1WebhookGenericWebService;
  disabled?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1Webhook: Schema.Schema<GoogleCloudDialogflowCxV3beta1Webhook> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceDirectory: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig,
    ),
    timeout: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    genericWebService: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookGenericWebService,
    ),
    disabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Webhook" });

export interface GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse {
  knowledgeAssistAnswer?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswer;
  latestMessage?: string;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    knowledgeAssistAnswer: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswer,
    ),
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse",
  });

export interface GoogleCloudDialogflowV2beta1EncryptionSpec {
  kmsKey?: string;
  name?: string;
}

export const GoogleCloudDialogflowV2beta1EncryptionSpec: Schema.Schema<GoogleCloudDialogflowV2beta1EncryptionSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kmsKey: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1EncryptionSpec" });

export interface GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResources {
  entityDisplayNames?: ReadonlyArray<string>;
  intentDisplayNames?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResources: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResources> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityDisplayNames: Schema.optional(Schema.Array(Schema.String)),
    intentDisplayNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResources",
  });

export interface GoogleCloudDialogflowCxV3beta1ImportIntentsResponse {
  intents?: ReadonlyArray<string>;
  conflictingResources?: GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResources;
}

export const GoogleCloudDialogflowCxV3beta1ImportIntentsResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportIntentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intents: Schema.optional(Schema.Array(Schema.String)),
    conflictingResources: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResources,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportIntentsResponse",
  });

export interface GoogleCloudDialogflowV2beta1GenerateSuggestionsRequest {
  latestMessage?: string;
  triggerEvents?: ReadonlyArray<
    | "TRIGGER_EVENT_UNSPECIFIED"
    | "END_OF_UTTERANCE"
    | "MANUAL_CALL"
    | "CUSTOMER_MESSAGE"
    | "AGENT_MESSAGE"
    | (string & {})
  >;
}

export const GoogleCloudDialogflowV2beta1GenerateSuggestionsRequest: Schema.Schema<GoogleCloudDialogflowV2beta1GenerateSuggestionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestMessage: Schema.optional(Schema.String),
    triggerEvents: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1GenerateSuggestionsRequest",
  });

export interface GoogleCloudDialogflowV2ImportDocumentsResponse {
  warnings?: ReadonlyArray<GoogleRpcStatus>;
}

export const GoogleCloudDialogflowV2ImportDocumentsResponse: Schema.Schema<GoogleCloudDialogflowV2ImportDocumentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    warnings: Schema.optional(Schema.Array(GoogleRpcStatus)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ImportDocumentsResponse" });

export interface GoogleCloudDialogflowCxV3RunTestCaseMetadata {}

export const GoogleCloudDialogflowCxV3RunTestCaseMetadata: Schema.Schema<GoogleCloudDialogflowCxV3RunTestCaseMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3RunTestCaseMetadata",
  });

export interface GoogleCloudDialogflowV2CreateConversationModelOperationMetadata {
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
  createTime?: string;
  doneTime?: string;
}

export const GoogleCloudDialogflowV2CreateConversationModelOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2CreateConversationModelOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationModel: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    doneTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2CreateConversationModelOperationMetadata",
  });

export interface GoogleCloudDialogflowCxV3TurnSignals {
  noMatch?: boolean;
  agentEscalated?: boolean;
  reachedEndPage?: boolean;
  failureReasons?: ReadonlyArray<
    | "FAILURE_REASON_UNSPECIFIED"
    | "FAILED_INTENT"
    | "FAILED_WEBHOOK"
    | (string & {})
  >;
  noUserInput?: boolean;
  sentimentScore?: number;
  userEscalated?: boolean;
  webhookStatuses?: ReadonlyArray<string>;
  dtmfUsed?: boolean;
  sentimentMagnitude?: number;
}

export const GoogleCloudDialogflowCxV3TurnSignals: Schema.Schema<GoogleCloudDialogflowCxV3TurnSignals> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    noMatch: Schema.optional(Schema.Boolean),
    agentEscalated: Schema.optional(Schema.Boolean),
    reachedEndPage: Schema.optional(Schema.Boolean),
    failureReasons: Schema.optional(Schema.Array(Schema.String)),
    noUserInput: Schema.optional(Schema.Boolean),
    sentimentScore: Schema.optional(Schema.Number),
    userEscalated: Schema.optional(Schema.Boolean),
    webhookStatuses: Schema.optional(Schema.Array(Schema.String)),
    dtmfUsed: Schema.optional(Schema.Boolean),
    sentimentMagnitude: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TurnSignals" });

export interface GoogleCloudDialogflowCxV3ConversationSignals {
  turnSignals?: GoogleCloudDialogflowCxV3TurnSignals;
}

export const GoogleCloudDialogflowCxV3ConversationSignals: Schema.Schema<GoogleCloudDialogflowCxV3ConversationSignals> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    turnSignals: Schema.optional(GoogleCloudDialogflowCxV3TurnSignals),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ConversationSignals" });

export interface GoogleCloudDialogflowCxV3beta1ImportFlowResponse {
  flow?: string;
}

export const GoogleCloudDialogflowCxV3beta1ImportFlowResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportFlowResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flow: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportFlowResponse",
  });

export interface GoogleCloudDialogflowV2beta1InitializeEncryptionSpecRequest {
  encryptionSpec?: GoogleCloudDialogflowV2beta1EncryptionSpec;
}

export const GoogleCloudDialogflowV2beta1InitializeEncryptionSpecRequest: Schema.Schema<GoogleCloudDialogflowV2beta1InitializeEncryptionSpecRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    encryptionSpec: Schema.optional(GoogleCloudDialogflowV2beta1EncryptionSpec),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1InitializeEncryptionSpecRequest",
  });

export interface GoogleCloudDialogflowV2beta1InitializeEncryptionSpecMetadata {
  request?: GoogleCloudDialogflowV2beta1InitializeEncryptionSpecRequest;
}

export const GoogleCloudDialogflowV2beta1InitializeEncryptionSpecMetadata: Schema.Schema<GoogleCloudDialogflowV2beta1InitializeEncryptionSpecMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    request: Schema.optional(
      GoogleCloudDialogflowV2beta1InitializeEncryptionSpecRequest,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1InitializeEncryptionSpecMetadata",
  });

export interface GoogleCloudDialogflowV2beta1ListGeneratorsResponse {
  generators?: ReadonlyArray<GoogleCloudDialogflowV2beta1Generator>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2beta1ListGeneratorsResponse: Schema.Schema<GoogleCloudDialogflowV2beta1ListGeneratorsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generators: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1Generator),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ListGeneratorsResponse",
  });

export interface GoogleCloudDialogflowV2ExportOperationMetadata {
  exportedGcsDestination?: GoogleCloudDialogflowV2GcsDestination;
}

export const GoogleCloudDialogflowV2ExportOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2ExportOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exportedGcsDestination: Schema.optional(
      GoogleCloudDialogflowV2GcsDestination,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ExportOperationMetadata" });

export interface GoogleCloudDialogflowV2KnowledgeOperationMetadata {
  state?: "STATE_UNSPECIFIED" | "PENDING" | "RUNNING" | "DONE" | (string & {});
  knowledgeBase?: string;
  exportOperationMetadata?: GoogleCloudDialogflowV2ExportOperationMetadata;
  doneTime?: string;
}

export const GoogleCloudDialogflowV2KnowledgeOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2KnowledgeOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    knowledgeBase: Schema.optional(Schema.String),
    exportOperationMetadata: Schema.optional(
      GoogleCloudDialogflowV2ExportOperationMetadata,
    ),
    doneTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2KnowledgeOperationMetadata",
  });

export interface GoogleCloudDialogflowV2ArticleSuggestionModelMetadata {
  trainingModelType?:
    | "MODEL_TYPE_UNSPECIFIED"
    | "SMART_REPLY_DUAL_ENCODER_MODEL"
    | "SMART_REPLY_BERT_MODEL"
    | (string & {});
}

export const GoogleCloudDialogflowV2ArticleSuggestionModelMetadata: Schema.Schema<GoogleCloudDialogflowV2ArticleSuggestionModelMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trainingModelType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ArticleSuggestionModelMetadata",
  });

export interface GoogleCloudDialogflowV2beta1SuggestFaqAnswersRequest {
  latestMessage?: string;
  contextSize?: number;
  assistQueryParams?: GoogleCloudDialogflowV2beta1AssistQueryParameters;
}

export const GoogleCloudDialogflowV2beta1SuggestFaqAnswersRequest: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestFaqAnswersRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
    assistQueryParams: Schema.optional(
      GoogleCloudDialogflowV2beta1AssistQueryParameters,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestFaqAnswersRequest",
  });

export interface GoogleCloudDialogflowV2SummarySuggestionSummarySection {
  summary?: string;
  section?: string;
}

export const GoogleCloudDialogflowV2SummarySuggestionSummarySection: Schema.Schema<GoogleCloudDialogflowV2SummarySuggestionSummarySection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    summary: Schema.optional(Schema.String),
    section: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SummarySuggestionSummarySection",
  });

export interface GoogleCloudDialogflowV2SummarySuggestion {
  summarySections?: ReadonlyArray<GoogleCloudDialogflowV2SummarySuggestionSummarySection>;
}

export const GoogleCloudDialogflowV2SummarySuggestion: Schema.Schema<GoogleCloudDialogflowV2SummarySuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    summarySections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SummarySuggestionSummarySection),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SummarySuggestion" });

export interface GoogleCloudDialogflowCxV3beta1TestError {
  testCase?: string;
  status?: GoogleRpcStatus;
  testTime?: string;
}

export const GoogleCloudDialogflowCxV3beta1TestError: Schema.Schema<GoogleCloudDialogflowCxV3beta1TestError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testCase: Schema.optional(Schema.String),
    status: Schema.optional(GoogleRpcStatus),
    testTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TestError" });

export interface GoogleCloudDialogflowV2beta1OutputAudio {
  config?: GoogleCloudDialogflowV2beta1OutputAudioConfig;
  audio?: string;
}

export const GoogleCloudDialogflowV2beta1OutputAudio: Schema.Schema<GoogleCloudDialogflowV2beta1OutputAudio> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    config: Schema.optional(GoogleCloudDialogflowV2beta1OutputAudioConfig),
    audio: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1OutputAudio" });

export interface GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse {
  smartReplyAnswers?: ReadonlyArray<GoogleCloudDialogflowV2beta1SmartReplyAnswer>;
  latestMessage?: string;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    smartReplyAnswers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SmartReplyAnswer),
    ),
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse",
  });

export interface GoogleCloudDialogflowV2beta1ArticleAnswer {
  metadata?: Record<string, string>;
  uri?: string;
  answerRecord?: string;
  snippets?: ReadonlyArray<string>;
  title?: string;
}

export const GoogleCloudDialogflowV2beta1ArticleAnswer: Schema.Schema<GoogleCloudDialogflowV2beta1ArticleAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    uri: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    snippets: Schema.optional(Schema.Array(Schema.String)),
    title: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ArticleAnswer" });

export interface GoogleCloudDialogflowV2beta1SuggestArticlesResponse {
  latestMessage?: string;
  contextSize?: number;
  articleAnswers?: ReadonlyArray<GoogleCloudDialogflowV2beta1ArticleAnswer>;
}

export const GoogleCloudDialogflowV2beta1SuggestArticlesResponse: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestArticlesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
    articleAnswers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1ArticleAnswer),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestArticlesResponse",
  });

export interface GoogleCloudDialogflowV2beta1SuggestionResult {
  suggestSmartRepliesResponse?: GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse;
  generateSuggestionsResponse?: GoogleCloudDialogflowV2beta1GenerateSuggestionsResponse;
  suggestArticlesResponse?: GoogleCloudDialogflowV2beta1SuggestArticlesResponse;
  suggestEntityExtractionResponse?: GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse;
  suggestDialogflowAssistsResponse?: GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse;
  error?: GoogleRpcStatus;
  suggestKnowledgeAssistResponse?: GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse;
  suggestFaqAnswersResponse?: GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse;
}

export const GoogleCloudDialogflowV2beta1SuggestionResult: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestionResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suggestSmartRepliesResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse,
    ),
    generateSuggestionsResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1GenerateSuggestionsResponse,
    ),
    suggestArticlesResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestArticlesResponse,
    ),
    suggestEntityExtractionResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse,
    ),
    suggestDialogflowAssistsResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse,
    ),
    error: Schema.optional(GoogleRpcStatus),
    suggestKnowledgeAssistResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse,
    ),
    suggestFaqAnswersResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1SuggestionResult" });

export interface GoogleCloudDialogflowV2beta1AnalyzeContentResponse {
  replyAudio?: GoogleCloudDialogflowV2beta1OutputAudio;
  message?: GoogleCloudDialogflowV2beta1Message;
  dtmfParameters?: GoogleCloudDialogflowV2beta1DtmfParameters;
  automatedAgentReply?: GoogleCloudDialogflowV2beta1AutomatedAgentReply;
  endUserSuggestionResults?: ReadonlyArray<GoogleCloudDialogflowV2beta1SuggestionResult>;
  replyText?: string;
  humanAgentSuggestionResults?: ReadonlyArray<GoogleCloudDialogflowV2beta1SuggestionResult>;
}

export const GoogleCloudDialogflowV2beta1AnalyzeContentResponse: Schema.Schema<GoogleCloudDialogflowV2beta1AnalyzeContentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    replyAudio: Schema.optional(GoogleCloudDialogflowV2beta1OutputAudio),
    message: Schema.optional(GoogleCloudDialogflowV2beta1Message),
    dtmfParameters: Schema.optional(GoogleCloudDialogflowV2beta1DtmfParameters),
    automatedAgentReply: Schema.optional(
      GoogleCloudDialogflowV2beta1AutomatedAgentReply,
    ),
    endUserSuggestionResults: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SuggestionResult),
    ),
    replyText: Schema.optional(Schema.String),
    humanAgentSuggestionResults: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SuggestionResult),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1AnalyzeContentResponse",
  });

export interface GoogleCloudDialogflowV2beta1GenerateStatelessSummaryResponseSummary {
  text?: string;
  textSections?: Record<string, string>;
  baselineModelVersion?: string;
}

export const GoogleCloudDialogflowV2beta1GenerateStatelessSummaryResponseSummary: Schema.Schema<GoogleCloudDialogflowV2beta1GenerateStatelessSummaryResponseSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    textSections: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    baselineModelVersion: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1GenerateStatelessSummaryResponseSummary",
  });

export interface GoogleCloudDialogflowV2beta1GenerateStatelessSummaryResponse {
  latestMessage?: string;
  contextSize?: number;
  summary?: GoogleCloudDialogflowV2beta1GenerateStatelessSummaryResponseSummary;
}

export const GoogleCloudDialogflowV2beta1GenerateStatelessSummaryResponse: Schema.Schema<GoogleCloudDialogflowV2beta1GenerateStatelessSummaryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
    summary: Schema.optional(
      GoogleCloudDialogflowV2beta1GenerateStatelessSummaryResponseSummary,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1GenerateStatelessSummaryResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1ImportIntentsMetadata {}

export const GoogleCloudDialogflowCxV3beta1ImportIntentsMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportIntentsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportIntentsMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo {
  tag?: string;
}

export const GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo: Schema.Schema<GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tag: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo",
  });

export interface GoogleCloudDialogflowV2AgentCoachingSuggestionAgentActionSuggestion {
  sources?: GoogleCloudDialogflowV2AgentCoachingSuggestionSources;
  duplicateCheckResult?: GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResult;
  agentAction?: string;
}

export const GoogleCloudDialogflowV2AgentCoachingSuggestionAgentActionSuggestion: Schema.Schema<GoogleCloudDialogflowV2AgentCoachingSuggestionAgentActionSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export interface GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion {
  suggestionIndex?: number;
  similarityScore?: number;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion: Schema.Schema<GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suggestionIndex: Schema.optional(Schema.Number),
    similarityScore: Schema.optional(Schema.Number),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion",
  });

export interface GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResult {
  duplicateSuggestions?: ReadonlyArray<GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion>;
}

export const GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResult: Schema.Schema<GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  systemAction?: string;
  condition?: string;
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
}

export const GoogleCloudDialogflowV2AgentCoachingInstruction: Schema.Schema<GoogleCloudDialogflowV2AgentCoachingInstruction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    systemAction: Schema.optional(Schema.String),
    condition: Schema.optional(Schema.String),
    duplicateCheckResult: Schema.optional(
      GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResult,
    ),
    agentAction: Schema.optional(Schema.String),
    triggeringEvent: Schema.optional(Schema.String),
    displayDetails: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2AgentCoachingInstruction",
  });

export interface GoogleCloudDialogflowV2AgentCoachingSuggestion {
  agentActionSuggestions?: ReadonlyArray<GoogleCloudDialogflowV2AgentCoachingSuggestionAgentActionSuggestion>;
  applicableInstructions?: ReadonlyArray<GoogleCloudDialogflowV2AgentCoachingInstruction>;
  sampleResponses?: ReadonlyArray<GoogleCloudDialogflowV2AgentCoachingSuggestionSampleResponse>;
}

export const GoogleCloudDialogflowV2AgentCoachingSuggestion: Schema.Schema<GoogleCloudDialogflowV2AgentCoachingSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentActionSuggestions: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2AgentCoachingSuggestionAgentActionSuggestion,
      ),
    ),
    applicableInstructions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2AgentCoachingInstruction),
    ),
    sampleResponses: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2AgentCoachingSuggestionSampleResponse,
      ),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2AgentCoachingSuggestion" });

export interface GoogleCloudDialogflowV2beta1SpeechWordInfo {
  word?: string;
  startOffset?: string;
  endOffset?: string;
  confidence?: number;
}

export const GoogleCloudDialogflowV2beta1SpeechWordInfo: Schema.Schema<GoogleCloudDialogflowV2beta1SpeechWordInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    word: Schema.optional(Schema.String),
    startOffset: Schema.optional(Schema.String),
    endOffset: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1SpeechWordInfo" });

export interface GoogleLongrunningOperation {
  done?: boolean;
  name?: string;
  error?: GoogleRpcStatus;
  metadata?: Record<string, unknown>;
  response?: Record<string, unknown>;
}

export const GoogleLongrunningOperation: Schema.Schema<GoogleLongrunningOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    done: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    error: Schema.optional(GoogleRpcStatus),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleLongrunningOperation" });

export interface GoogleLongrunningListOperationsResponse {
  operations?: ReadonlyArray<GoogleLongrunningOperation>;
  unreachable?: ReadonlyArray<string>;
  nextPageToken?: string;
}

export const GoogleLongrunningListOperationsResponse: Schema.Schema<GoogleLongrunningListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(GoogleLongrunningOperation)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleLongrunningListOperationsResponse" });

export interface GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry {
  description?: string;
  agentVersion?: string;
  createTime?: string;
}

export const GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry: Schema.Schema<GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    agentVersion: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry",
  });

export interface GoogleCloudDialogflowV2beta1EnvironmentHistory {
  entries?: ReadonlyArray<GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry>;
  parent?: string;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2beta1EnvironmentHistory: Schema.Schema<GoogleCloudDialogflowV2beta1EnvironmentHistory> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry),
    ),
    parent: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1EnvironmentHistory" });

export interface GoogleCloudDialogflowV2beta1ConversationPhoneNumber {
  phoneNumber?: string;
  countryCode?: number;
}

export const GoogleCloudDialogflowV2beta1ConversationPhoneNumber: Schema.Schema<GoogleCloudDialogflowV2beta1ConversationPhoneNumber> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    phoneNumber: Schema.optional(Schema.String),
    countryCode: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ConversationPhoneNumber",
  });

export interface GoogleCloudDialogflowV2beta1Conversation {
  endTime?: string;
  conversationStage?:
    | "CONVERSATION_STAGE_UNSPECIFIED"
    | "VIRTUAL_AGENT_STAGE"
    | "HUMAN_ASSIST_STAGE"
    | (string & {});
  telephonyConnectionInfo?: GoogleCloudDialogflowV2beta1ConversationTelephonyConnectionInfo;
  initialGeneratorContexts?: Record<
    string,
    GoogleCloudDialogflowV2beta1ConversationGeneratorContext
  >;
  conversationProfile?: string;
  phoneNumber?: GoogleCloudDialogflowV2beta1ConversationPhoneNumber;
  lifecycleState?:
    | "LIFECYCLE_STATE_UNSPECIFIED"
    | "IN_PROGRESS"
    | "COMPLETED"
    | (string & {});
  ingestedContextReferences?: Record<
    string,
    GoogleCloudDialogflowV2beta1ConversationContextReference
  >;
  name?: string;
  startTime?: string;
  initialConversationProfile?: GoogleCloudDialogflowV2beta1ConversationProfile;
}

export const GoogleCloudDialogflowV2beta1Conversation: Schema.Schema<GoogleCloudDialogflowV2beta1Conversation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    conversationStage: Schema.optional(Schema.String),
    telephonyConnectionInfo: Schema.optional(
      GoogleCloudDialogflowV2beta1ConversationTelephonyConnectionInfo,
    ),
    initialGeneratorContexts: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowV2beta1ConversationGeneratorContext,
      ),
    ),
    conversationProfile: Schema.optional(Schema.String),
    phoneNumber: Schema.optional(
      GoogleCloudDialogflowV2beta1ConversationPhoneNumber,
    ),
    lifecycleState: Schema.optional(Schema.String),
    ingestedContextReferences: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowV2beta1ConversationContextReference,
      ),
    ),
    name: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    initialConversationProfile: Schema.optional(
      GoogleCloudDialogflowV2beta1ConversationProfile,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1Conversation" });

export interface GoogleCloudDialogflowV2beta1ListConversationsResponse {
  conversations?: ReadonlyArray<GoogleCloudDialogflowV2beta1Conversation>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2beta1ListConversationsResponse: Schema.Schema<GoogleCloudDialogflowV2beta1ListConversationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversations: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1Conversation),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ListConversationsResponse",
  });

export interface GoogleCloudDialogflowV2SmartReplyModelMetadata {
  trainingModelType?:
    | "MODEL_TYPE_UNSPECIFIED"
    | "SMART_REPLY_DUAL_ENCODER_MODEL"
    | "SMART_REPLY_BERT_MODEL"
    | (string & {});
}

export const GoogleCloudDialogflowV2SmartReplyModelMetadata: Schema.Schema<GoogleCloudDialogflowV2SmartReplyModelMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trainingModelType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SmartReplyModelMetadata" });

export interface GoogleCloudDialogflowV2InputDataset {
  dataset?: string;
}

export const GoogleCloudDialogflowV2InputDataset: Schema.Schema<GoogleCloudDialogflowV2InputDataset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataset: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2InputDataset" });

export interface GoogleCloudDialogflowV2ConversationModel {
  name?: string;
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
  languageCode?: string;
  displayName?: string;
  smartReplyModelMetadata?: GoogleCloudDialogflowV2SmartReplyModelMetadata;
  datasets?: ReadonlyArray<GoogleCloudDialogflowV2InputDataset>;
  articleSuggestionModelMetadata?: GoogleCloudDialogflowV2ArticleSuggestionModelMetadata;
  createTime?: string;
  satisfiesPzs?: boolean;
  satisfiesPzi?: boolean;
}

export const GoogleCloudDialogflowV2ConversationModel: Schema.Schema<GoogleCloudDialogflowV2ConversationModel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    smartReplyModelMetadata: Schema.optional(
      GoogleCloudDialogflowV2SmartReplyModelMetadata,
    ),
    datasets: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2InputDataset),
    ),
    articleSuggestionModelMetadata: Schema.optional(
      GoogleCloudDialogflowV2ArticleSuggestionModelMetadata,
    ),
    createTime: Schema.optional(Schema.String),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    satisfiesPzi: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ConversationModel" });

export interface GoogleCloudDialogflowCxV3ExportEntityTypesMetadata {}

export const GoogleCloudDialogflowCxV3ExportEntityTypesMetadata: Schema.Schema<GoogleCloudDialogflowCxV3ExportEntityTypesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ExportEntityTypesMetadata",
  });

export interface GoogleCloudDialogflowV2beta1RestoreAgentRequest {
  agentUri?: string;
  agentContent?: string;
}

export const GoogleCloudDialogflowV2beta1RestoreAgentRequest: Schema.Schema<GoogleCloudDialogflowV2beta1RestoreAgentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentUri: Schema.optional(Schema.String),
    agentContent: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1RestoreAgentRequest",
  });

export interface GoogleCloudDialogflowV2SuggestArticlesResponse {
  articleAnswers?: ReadonlyArray<GoogleCloudDialogflowV2ArticleAnswer>;
  latestMessage?: string;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2SuggestArticlesResponse: Schema.Schema<GoogleCloudDialogflowV2SuggestArticlesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    articleAnswers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2ArticleAnswer),
    ),
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SuggestArticlesResponse" });

export interface GoogleCloudDialogflowV2FreeFormSuggestion {
  response?: string;
}

export const GoogleCloudDialogflowV2FreeFormSuggestion: Schema.Schema<GoogleCloudDialogflowV2FreeFormSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    response: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2FreeFormSuggestion" });

export interface GoogleCloudDialogflowV2GeneratorSuggestion {
  agentCoachingSuggestion?: GoogleCloudDialogflowV2AgentCoachingSuggestion;
  toolCallInfo?: ReadonlyArray<GoogleCloudDialogflowV2GeneratorSuggestionToolCallInfo>;
  freeFormSuggestion?: GoogleCloudDialogflowV2FreeFormSuggestion;
  summarySuggestion?: GoogleCloudDialogflowV2SummarySuggestion;
}

export const GoogleCloudDialogflowV2GeneratorSuggestion: Schema.Schema<GoogleCloudDialogflowV2GeneratorSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentCoachingSuggestion: Schema.optional(
      GoogleCloudDialogflowV2AgentCoachingSuggestion,
    ),
    toolCallInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2GeneratorSuggestionToolCallInfo),
    ),
    freeFormSuggestion: Schema.optional(
      GoogleCloudDialogflowV2FreeFormSuggestion,
    ),
    summarySuggestion: Schema.optional(
      GoogleCloudDialogflowV2SummarySuggestion,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2GeneratorSuggestion" });

export interface GoogleCloudDialogflowV2GenerateSuggestionsResponseGeneratorSuggestionAnswer {
  generatorSuggestion?: GoogleCloudDialogflowV2GeneratorSuggestion;
  sourceGenerator?: string;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2GenerateSuggestionsResponseGeneratorSuggestionAnswer: Schema.Schema<GoogleCloudDialogflowV2GenerateSuggestionsResponseGeneratorSuggestionAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generatorSuggestion: Schema.optional(
      GoogleCloudDialogflowV2GeneratorSuggestion,
    ),
    sourceGenerator: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2GenerateSuggestionsResponseGeneratorSuggestionAnswer",
  });

export interface GoogleCloudDialogflowV2GenerateSuggestionsResponse {
  generatorSuggestionAnswers?: ReadonlyArray<GoogleCloudDialogflowV2GenerateSuggestionsResponseGeneratorSuggestionAnswer>;
  latestMessage?: string;
}

export const GoogleCloudDialogflowV2GenerateSuggestionsResponse: Schema.Schema<GoogleCloudDialogflowV2GenerateSuggestionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generatorSuggestionAnswers: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2GenerateSuggestionsResponseGeneratorSuggestionAnswer,
      ),
    ),
    latestMessage: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2GenerateSuggestionsResponse",
  });

export interface GoogleCloudDialogflowV2FaqAnswer {
  answer?: string;
  metadata?: Record<string, string>;
  confidence?: number;
  question?: string;
  answerRecord?: string;
  source?: string;
}

export const GoogleCloudDialogflowV2FaqAnswer: Schema.Schema<GoogleCloudDialogflowV2FaqAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answer: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    confidence: Schema.optional(Schema.Number),
    question: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2FaqAnswer" });

export interface GoogleCloudDialogflowV2SuggestFaqAnswersResponse {
  faqAnswers?: ReadonlyArray<GoogleCloudDialogflowV2FaqAnswer>;
  latestMessage?: string;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2SuggestFaqAnswersResponse: Schema.Schema<GoogleCloudDialogflowV2SuggestFaqAnswersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    faqAnswers: Schema.optional(Schema.Array(GoogleCloudDialogflowV2FaqAnswer)),
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SuggestFaqAnswersResponse",
  });

export interface GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse {
  knowledgeAssistAnswer?: GoogleCloudDialogflowV2KnowledgeAssistAnswer;
  latestMessage?: string;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse: Schema.Schema<GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    knowledgeAssistAnswer: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswer,
    ),
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse",
  });

export interface GoogleCloudDialogflowV2SuggestionResult {
  suggestSmartRepliesResponse?: GoogleCloudDialogflowV2SuggestSmartRepliesResponse;
  suggestArticlesResponse?: GoogleCloudDialogflowV2SuggestArticlesResponse;
  generateSuggestionsResponse?: GoogleCloudDialogflowV2GenerateSuggestionsResponse;
  suggestFaqAnswersResponse?: GoogleCloudDialogflowV2SuggestFaqAnswersResponse;
  error?: GoogleRpcStatus;
  suggestKnowledgeAssistResponse?: GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse;
}

export const GoogleCloudDialogflowV2SuggestionResult: Schema.Schema<GoogleCloudDialogflowV2SuggestionResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suggestSmartRepliesResponse: Schema.optional(
      GoogleCloudDialogflowV2SuggestSmartRepliesResponse,
    ),
    suggestArticlesResponse: Schema.optional(
      GoogleCloudDialogflowV2SuggestArticlesResponse,
    ),
    generateSuggestionsResponse: Schema.optional(
      GoogleCloudDialogflowV2GenerateSuggestionsResponse,
    ),
    suggestFaqAnswersResponse: Schema.optional(
      GoogleCloudDialogflowV2SuggestFaqAnswersResponse,
    ),
    error: Schema.optional(GoogleRpcStatus),
    suggestKnowledgeAssistResponse: Schema.optional(
      GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SuggestionResult" });

export interface GoogleCloudDialogflowV2HumanAgentAssistantEvent {
  conversation?: string;
  suggestionResults?: ReadonlyArray<GoogleCloudDialogflowV2SuggestionResult>;
  participant?: string;
}

export const GoogleCloudDialogflowV2HumanAgentAssistantEvent: Schema.Schema<GoogleCloudDialogflowV2HumanAgentAssistantEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversation: Schema.optional(Schema.String),
    suggestionResults: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SuggestionResult),
    ),
    participant: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2HumanAgentAssistantEvent",
  });

export interface GoogleCloudDialogflowV2beta1ListParticipantsResponse {
  nextPageToken?: string;
  participants?: ReadonlyArray<GoogleCloudDialogflowV2beta1Participant>;
}

export const GoogleCloudDialogflowV2beta1ListParticipantsResponse: Schema.Schema<GoogleCloudDialogflowV2beta1ListParticipantsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    participants: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1Participant),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ListParticipantsResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig {
  webhookOverrides?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Webhook>;
}

export const GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webhookOverrides: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1Webhook),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig",
  });

export interface GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig {
  version?: string;
}

export const GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig",
  });

export interface GoogleCloudDialogflowCxV3beta1Environment {
  description?: string;
  updateTime?: string;
  webhookConfig?: GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig;
  displayName?: string;
  testCasesConfig?: GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig;
  name?: string;
  versionConfigs?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig>;
}

export const GoogleCloudDialogflowCxV3beta1Environment: Schema.Schema<GoogleCloudDialogflowCxV3beta1Environment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    webhookConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig,
    ),
    displayName: Schema.optional(Schema.String),
    testCasesConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig,
    ),
    name: Schema.optional(Schema.String),
    versionConfigs: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Environment" });

export interface GoogleCloudDialogflowCxV3beta1DeployFlowResponse {
  environment?: GoogleCloudDialogflowCxV3beta1Environment;
  deployment?: string;
}

export const GoogleCloudDialogflowCxV3beta1DeployFlowResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1DeployFlowResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    environment: Schema.optional(GoogleCloudDialogflowCxV3beta1Environment),
    deployment: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1DeployFlowResponse",
  });

export interface GoogleCloudDialogflowV2beta1GenerateStatelessSuggestionResponse {
  generatorSuggestion?: GoogleCloudDialogflowV2beta1GeneratorSuggestion;
}

export const GoogleCloudDialogflowV2beta1GenerateStatelessSuggestionResponse: Schema.Schema<GoogleCloudDialogflowV2beta1GenerateStatelessSuggestionResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generatorSuggestion: Schema.optional(
      GoogleCloudDialogflowV2beta1GeneratorSuggestion,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1GenerateStatelessSuggestionResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1SessionInfo {
  session?: string;
  parameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3beta1SessionInfo: Schema.Schema<GoogleCloudDialogflowCxV3beta1SessionInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1SessionInfo" });

export interface GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse {
  messages?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ResponseMessage>;
  mergeBehavior?:
    | "MERGE_BEHAVIOR_UNSPECIFIED"
    | "APPEND"
    | "REPLACE"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ResponseMessage),
    ),
    mergeBehavior: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse",
  });

export interface GoogleCloudDialogflowV2DeployConversationModelOperationMetadata {
  conversationModel?: string;
  createTime?: string;
  doneTime?: string;
}

export const GoogleCloudDialogflowV2DeployConversationModelOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2DeployConversationModelOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationModel: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    doneTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2DeployConversationModelOperationMetadata",
  });

export interface GoogleCloudDialogflowV2beta1FulfillmentGenericWebService {
  username?: string;
  uri?: string;
  password?: string;
  isCloudFunction?: boolean;
  requestHeaders?: Record<string, string>;
}

export const GoogleCloudDialogflowV2beta1FulfillmentGenericWebService: Schema.Schema<GoogleCloudDialogflowV2beta1FulfillmentGenericWebService> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    isCloudFunction: Schema.optional(Schema.Boolean),
    requestHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1FulfillmentGenericWebService",
  });

export interface GoogleCloudDialogflowV2beta1Fulfillment {
  enabled?: boolean;
  name?: string;
  genericWebService?: GoogleCloudDialogflowV2beta1FulfillmentGenericWebService;
  displayName?: string;
  features?: ReadonlyArray<GoogleCloudDialogflowV2beta1FulfillmentFeature>;
}

export const GoogleCloudDialogflowV2beta1Fulfillment: Schema.Schema<GoogleCloudDialogflowV2beta1Fulfillment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    genericWebService: Schema.optional(
      GoogleCloudDialogflowV2beta1FulfillmentGenericWebService,
    ),
    displayName: Schema.optional(Schema.String),
    features: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1FulfillmentFeature),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1Fulfillment" });

export interface GoogleCloudDialogflowV2beta1Environment {
  description?: string;
  updateTime?: string;
  fulfillment?: GoogleCloudDialogflowV2beta1Fulfillment;
  name?: string;
  state?:
    | "STATE_UNSPECIFIED"
    | "STOPPED"
    | "LOADING"
    | "RUNNING"
    | (string & {});
  textToSpeechSettings?: GoogleCloudDialogflowV2beta1TextToSpeechSettings;
  agentVersion?: string;
}

export const GoogleCloudDialogflowV2beta1Environment: Schema.Schema<GoogleCloudDialogflowV2beta1Environment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    fulfillment: Schema.optional(GoogleCloudDialogflowV2beta1Fulfillment),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    textToSpeechSettings: Schema.optional(
      GoogleCloudDialogflowV2beta1TextToSpeechSettings,
    ),
    agentVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1Environment" });

export interface GoogleCloudDialogflowV2beta1CompileSuggestionRequest {
  latestMessage?: string;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2beta1CompileSuggestionRequest: Schema.Schema<GoogleCloudDialogflowV2beta1CompileSuggestionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1CompileSuggestionRequest",
  });

export interface GoogleCloudDialogflowCxV3ExportTestCasesResponse {
  content?: string;
  gcsUri?: string;
}

export const GoogleCloudDialogflowCxV3ExportTestCasesResponse: Schema.Schema<GoogleCloudDialogflowCxV3ExportTestCasesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
    gcsUri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ExportTestCasesResponse",
  });

export interface GoogleCloudDialogflowV2beta1TrainAgentRequest {}

export const GoogleCloudDialogflowV2beta1TrainAgentRequest: Schema.Schema<GoogleCloudDialogflowV2beta1TrainAgentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowV2beta1TrainAgentRequest",
  });

export interface GoogleCloudDialogflowV2beta1AnswerFeedback {
  correctnessLevel?:
    | "CORRECTNESS_LEVEL_UNSPECIFIED"
    | "NOT_CORRECT"
    | "PARTIALLY_CORRECT"
    | "FULLY_CORRECT"
    | (string & {});
  agentAssistantDetailFeedback?: GoogleCloudDialogflowV2beta1AgentAssistantFeedback;
  clicked?: boolean;
  displayed?: boolean;
  displayTime?: string;
  clickTime?: string;
}

export const GoogleCloudDialogflowV2beta1AnswerFeedback: Schema.Schema<GoogleCloudDialogflowV2beta1AnswerFeedback> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    correctnessLevel: Schema.optional(Schema.String),
    agentAssistantDetailFeedback: Schema.optional(
      GoogleCloudDialogflowV2beta1AgentAssistantFeedback,
    ),
    clicked: Schema.optional(Schema.Boolean),
    displayed: Schema.optional(Schema.Boolean),
    displayTime: Schema.optional(Schema.String),
    clickTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1AnswerFeedback" });

export interface GoogleCloudDialogflowV2beta1AgentAssistantRecord {
  dialogflowAssistAnswer?: GoogleCloudDialogflowV2beta1DialogflowAssistAnswer;
  articleSuggestionAnswer?: GoogleCloudDialogflowV2beta1ArticleAnswer;
  faqAnswer?: GoogleCloudDialogflowV2beta1FaqAnswer;
  generatorSuggestion?: GoogleCloudDialogflowV2beta1GeneratorSuggestion;
}

export const GoogleCloudDialogflowV2beta1AgentAssistantRecord: Schema.Schema<GoogleCloudDialogflowV2beta1AgentAssistantRecord> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dialogflowAssistAnswer: Schema.optional(
      GoogleCloudDialogflowV2beta1DialogflowAssistAnswer,
    ),
    articleSuggestionAnswer: Schema.optional(
      GoogleCloudDialogflowV2beta1ArticleAnswer,
    ),
    faqAnswer: Schema.optional(GoogleCloudDialogflowV2beta1FaqAnswer),
    generatorSuggestion: Schema.optional(
      GoogleCloudDialogflowV2beta1GeneratorSuggestion,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1AgentAssistantRecord",
  });

export interface GoogleCloudDialogflowV2beta1AnswerRecord {
  name?: string;
  answerFeedback?: GoogleCloudDialogflowV2beta1AnswerFeedback;
  agentAssistantRecord?: GoogleCloudDialogflowV2beta1AgentAssistantRecord;
}

export const GoogleCloudDialogflowV2beta1AnswerRecord: Schema.Schema<GoogleCloudDialogflowV2beta1AnswerRecord> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    answerFeedback: Schema.optional(GoogleCloudDialogflowV2beta1AnswerFeedback),
    agentAssistantRecord: Schema.optional(
      GoogleCloudDialogflowV2beta1AgentAssistantRecord,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1AnswerRecord" });

export interface GoogleCloudDialogflowV2beta1ImportDocumentTemplate {
  metadata?: Record<string, string>;
  mimeType?: string;
  knowledgeTypes?: ReadonlyArray<
    | "KNOWLEDGE_TYPE_UNSPECIFIED"
    | "FAQ"
    | "EXTRACTIVE_QA"
    | "ARTICLE_SUGGESTION"
    | "AGENT_FACING_SMART_REPLY"
    | "SMART_REPLY"
    | (string & {})
  >;
}

export const GoogleCloudDialogflowV2beta1ImportDocumentTemplate: Schema.Schema<GoogleCloudDialogflowV2beta1ImportDocumentTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    mimeType: Schema.optional(Schema.String),
    knowledgeTypes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ImportDocumentTemplate",
  });

export interface GoogleCloudDialogflowV2beta1ImportDocumentsRequest {
  documentTemplate?: GoogleCloudDialogflowV2beta1ImportDocumentTemplate;
  gcsSource?: GoogleCloudDialogflowV2beta1GcsSources;
  importGcsCustomMetadata?: boolean;
}

export const GoogleCloudDialogflowV2beta1ImportDocumentsRequest: Schema.Schema<GoogleCloudDialogflowV2beta1ImportDocumentsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    documentTemplate: Schema.optional(
      GoogleCloudDialogflowV2beta1ImportDocumentTemplate,
    ),
    gcsSource: Schema.optional(GoogleCloudDialogflowV2beta1GcsSources),
    importGcsCustomMetadata: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ImportDocumentsRequest",
  });

export interface GoogleCloudDialogflowV2beta1BatchCreateMessagesResponse {
  messages?: ReadonlyArray<GoogleCloudDialogflowV2beta1Message>;
}

export const GoogleCloudDialogflowV2beta1BatchCreateMessagesResponse: Schema.Schema<GoogleCloudDialogflowV2beta1BatchCreateMessagesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1Message),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1BatchCreateMessagesResponse",
  });

export interface GoogleCloudDialogflowCxV3PageInfo {
  currentPage?: string;
  displayName?: string;
  formInfo?: GoogleCloudDialogflowCxV3PageInfoFormInfo;
}

export const GoogleCloudDialogflowCxV3PageInfo: Schema.Schema<GoogleCloudDialogflowCxV3PageInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currentPage: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    formInfo: Schema.optional(GoogleCloudDialogflowCxV3PageInfoFormInfo),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3PageInfo" });

export interface GoogleCloudDialogflowCxV3SessionInfo {
  session?: string;
  parameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3SessionInfo: Schema.Schema<GoogleCloudDialogflowCxV3SessionInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3SessionInfo" });

export interface GoogleCloudDialogflowCxV3WebhookResponse {
  pageInfo?: GoogleCloudDialogflowCxV3PageInfo;
  targetPage?: string;
  fulfillmentResponse?: GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponse;
  targetFlow?: string;
  sessionInfo?: GoogleCloudDialogflowCxV3SessionInfo;
  payload?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3WebhookResponse: Schema.Schema<GoogleCloudDialogflowCxV3WebhookResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageInfo: Schema.optional(GoogleCloudDialogflowCxV3PageInfo),
    targetPage: Schema.optional(Schema.String),
    fulfillmentResponse: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponse,
    ),
    targetFlow: Schema.optional(Schema.String),
    sessionInfo: Schema.optional(GoogleCloudDialogflowCxV3SessionInfo),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3WebhookResponse" });

export interface GoogleCloudDialogflowV2CreateConversationModelEvaluationOperationMetadata {
  conversationModelEvaluation?: string;
  conversationModel?: string;
  state?:
    | "STATE_UNSPECIFIED"
    | "INITIALIZING"
    | "RUNNING"
    | "CANCELLED"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
  createTime?: string;
}

export const GoogleCloudDialogflowV2CreateConversationModelEvaluationOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2CreateConversationModelEvaluationOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationModelEvaluation: Schema.optional(Schema.String),
    conversationModel: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2CreateConversationModelEvaluationOperationMetadata",
  });

export interface GoogleCloudDialogflowV3alpha1TurnSignals {
  noUserInput?: boolean;
  sentimentScore?: number;
  userEscalated?: boolean;
  triggeredAbandonmentEvent?: boolean;
  webhookStatuses?: ReadonlyArray<string>;
  sentimentMagnitude?: number;
  dtmfUsed?: boolean;
  noMatch?: boolean;
  reachedEndPage?: boolean;
  agentEscalated?: boolean;
  failureReasons?: ReadonlyArray<
    | "FAILURE_REASON_UNSPECIFIED"
    | "FAILED_INTENT"
    | "FAILED_WEBHOOK"
    | (string & {})
  >;
}

export const GoogleCloudDialogflowV3alpha1TurnSignals: Schema.Schema<GoogleCloudDialogflowV3alpha1TurnSignals> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    noUserInput: Schema.optional(Schema.Boolean),
    sentimentScore: Schema.optional(Schema.Number),
    userEscalated: Schema.optional(Schema.Boolean),
    triggeredAbandonmentEvent: Schema.optional(Schema.Boolean),
    webhookStatuses: Schema.optional(Schema.Array(Schema.String)),
    sentimentMagnitude: Schema.optional(Schema.Number),
    dtmfUsed: Schema.optional(Schema.Boolean),
    noMatch: Schema.optional(Schema.Boolean),
    reachedEndPage: Schema.optional(Schema.Boolean),
    agentEscalated: Schema.optional(Schema.Boolean),
    failureReasons: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV3alpha1TurnSignals" });

export interface GoogleCloudDialogflowV3alpha1ConversationSignals {
  turnSignals?: GoogleCloudDialogflowV3alpha1TurnSignals;
}

export const GoogleCloudDialogflowV3alpha1ConversationSignals: Schema.Schema<GoogleCloudDialogflowV3alpha1ConversationSignals> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    turnSignals: Schema.optional(GoogleCloudDialogflowV3alpha1TurnSignals),
  }).annotate({
    identifier: "GoogleCloudDialogflowV3alpha1ConversationSignals",
  });

export interface GoogleCloudDialogflowV2beta1ListEnvironmentsResponse {
  nextPageToken?: string;
  environments?: ReadonlyArray<GoogleCloudDialogflowV2beta1Environment>;
}

export const GoogleCloudDialogflowV2beta1ListEnvironmentsResponse: Schema.Schema<GoogleCloudDialogflowV2beta1ListEnvironmentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    environments: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1Environment),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ListEnvironmentsResponse",
  });

export interface GoogleCloudDialogflowV2beta1DocumentReloadStatus {
  status?: GoogleRpcStatus;
  time?: string;
}

export const GoogleCloudDialogflowV2beta1DocumentReloadStatus: Schema.Schema<GoogleCloudDialogflowV2beta1DocumentReloadStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(GoogleRpcStatus),
    time: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1DocumentReloadStatus",
  });

export interface GoogleCloudDialogflowV2beta1BatchDeleteEntitiesRequest {
  languageCode?: string;
  entityValues?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1BatchDeleteEntitiesRequest: Schema.Schema<GoogleCloudDialogflowV2beta1BatchDeleteEntitiesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    entityValues: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1BatchDeleteEntitiesRequest",
  });

export interface GoogleProtobufEmpty {}

export const GoogleProtobufEmpty: Schema.Schema<GoogleProtobufEmpty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleProtobufEmpty",
  });

export interface GoogleCloudDialogflowV2beta1SearchKnowledgeRequest {
  parent?: string;
  searchConfig?: GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfig;
  endUserMetadata?: Record<string, unknown>;
  conversation?: string;
  latestMessage?: string;
  sessionId?: string;
  exactSearch?: boolean;
  query?: GoogleCloudDialogflowV2beta1TextInput;
  conversationProfile?: string;
  querySource?:
    | "QUERY_SOURCE_UNSPECIFIED"
    | "AGENT_QUERY"
    | "SUGGESTED_QUERY"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1SearchKnowledgeRequest: Schema.Schema<GoogleCloudDialogflowV2beta1SearchKnowledgeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.optional(Schema.String),
    searchConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1SearchKnowledgeRequestSearchConfig,
    ),
    endUserMetadata: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    conversation: Schema.optional(Schema.String),
    latestMessage: Schema.optional(Schema.String),
    sessionId: Schema.optional(Schema.String),
    exactSearch: Schema.optional(Schema.Boolean),
    query: Schema.optional(GoogleCloudDialogflowV2beta1TextInput),
    conversationProfile: Schema.optional(Schema.String),
    querySource: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SearchKnowledgeRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo {
  parameters?: Record<
    string,
    GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue
  >;
  lastMatchedIntent?: string;
  displayName?: string;
  confidence?: number;
}

export const GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo: Schema.Schema<GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameters: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue,
      ),
    ),
    lastMatchedIntent: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo",
  });

export interface GoogleCloudDialogflowV2beta1UndeletePhoneNumberRequest {}

export const GoogleCloudDialogflowV2beta1UndeletePhoneNumberRequest: Schema.Schema<GoogleCloudDialogflowV2beta1UndeletePhoneNumberRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowV2beta1UndeletePhoneNumberRequest",
  });

export interface GoogleCloudDialogflowCxV3ExportIntentsMetadata {}

export const GoogleCloudDialogflowCxV3ExportIntentsMetadata: Schema.Schema<GoogleCloudDialogflowCxV3ExportIntentsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ExportIntentsMetadata",
  });

export interface GoogleCloudDialogflowV2CreateConversationDatasetOperationMetadata {
  conversationDataset?: string;
}

export const GoogleCloudDialogflowV2CreateConversationDatasetOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2CreateConversationDatasetOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationDataset: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2CreateConversationDatasetOperationMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportEntityTypesResponse {
  entityTypesUri?: string;
  entityTypesContent?: GoogleCloudDialogflowCxV3beta1InlineDestination;
}

export const GoogleCloudDialogflowCxV3beta1ExportEntityTypesResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportEntityTypesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypesUri: Schema.optional(Schema.String),
    entityTypesContent: Schema.optional(
      GoogleCloudDialogflowCxV3beta1InlineDestination,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportEntityTypesResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult {
  score?: number;
  magnitude?: number;
}

export const GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult: Schema.Schema<GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.Number),
    magnitude: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportTestCasesMetadata {}

export const GoogleCloudDialogflowCxV3beta1ExportTestCasesMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportTestCasesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportTestCasesMetadata",
  });

export interface GoogleCloudDialogflowV2beta1ListAnswerRecordsResponse {
  nextPageToken?: string;
  answerRecords?: ReadonlyArray<GoogleCloudDialogflowV2beta1AnswerRecord>;
}

export const GoogleCloudDialogflowV2beta1ListAnswerRecordsResponse: Schema.Schema<GoogleCloudDialogflowV2beta1ListAnswerRecordsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    answerRecords: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1AnswerRecord),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ListAnswerRecordsResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1ImportEntityTypesMetadata {}

export const GoogleCloudDialogflowCxV3beta1ImportEntityTypesMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportEntityTypesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportEntityTypesMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportAgentResponse {
  agentContent?: string;
  agentUri?: string;
  commitSha?: string;
}

export const GoogleCloudDialogflowCxV3beta1ExportAgentResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportAgentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentContent: Schema.optional(Schema.String),
    agentUri: Schema.optional(Schema.String),
    commitSha: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportAgentResponse",
  });

export interface GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesResponse {
  entityTypes?: ReadonlyArray<GoogleCloudDialogflowV2beta1EntityType>;
}

export const GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesResponse: Schema.Schema<GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1EntityType),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesResponse",
  });

export interface GoogleCloudDialogflowCxV3ExportAgentResponse {
  agentContent?: string;
  agentUri?: string;
  commitSha?: string;
}

export const GoogleCloudDialogflowCxV3ExportAgentResponse: Schema.Schema<GoogleCloudDialogflowCxV3ExportAgentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentContent: Schema.optional(Schema.String),
    agentUri: Schema.optional(Schema.String),
    commitSha: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ExportAgentResponse" });

export interface GoogleCloudDialogflowCxV3ExportIntentsResponse {
  intentsUri?: string;
  intentsContent?: GoogleCloudDialogflowCxV3InlineDestination;
}

export const GoogleCloudDialogflowCxV3ExportIntentsResponse: Schema.Schema<GoogleCloudDialogflowCxV3ExportIntentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intentsUri: Schema.optional(Schema.String),
    intentsContent: Schema.optional(GoogleCloudDialogflowCxV3InlineDestination),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ExportIntentsResponse" });

export interface GoogleCloudDialogflowCxV3beta1ExportTestCasesResponse {
  content?: string;
  gcsUri?: string;
}

export const GoogleCloudDialogflowCxV3beta1ExportTestCasesResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportTestCasesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
    gcsUri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportTestCasesResponse",
  });

export interface GoogleCloudDialogflowCxV3ImportIntentsResponseConflictingResources {
  entityDisplayNames?: ReadonlyArray<string>;
  intentDisplayNames?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3ImportIntentsResponseConflictingResources: Schema.Schema<GoogleCloudDialogflowCxV3ImportIntentsResponseConflictingResources> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityDisplayNames: Schema.optional(Schema.Array(Schema.String)),
    intentDisplayNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3ImportIntentsResponseConflictingResources",
  });

export interface GoogleCloudDialogflowV2beta1AnalyzeContentRequest {
  audioInput?: GoogleCloudDialogflowV2beta1AudioInput;
  requestId?: string;
  textInput?: GoogleCloudDialogflowV2beta1TextInput;
  suggestionInput?: GoogleCloudDialogflowV2beta1SuggestionInput;
  assistQueryParams?: GoogleCloudDialogflowV2beta1AssistQueryParameters;
  cxParameters?: Record<string, unknown>;
  cxCurrentPage?: string;
  queryParams?: GoogleCloudDialogflowV2beta1QueryParameters;
  eventInput?: GoogleCloudDialogflowV2beta1EventInput;
  intentInput?: GoogleCloudDialogflowV2beta1IntentInput;
  replyAudioConfig?: GoogleCloudDialogflowV2beta1OutputAudioConfig;
  messageSendTime?: string;
}

export const GoogleCloudDialogflowV2beta1AnalyzeContentRequest: Schema.Schema<GoogleCloudDialogflowV2beta1AnalyzeContentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audioInput: Schema.optional(GoogleCloudDialogflowV2beta1AudioInput),
    requestId: Schema.optional(Schema.String),
    textInput: Schema.optional(GoogleCloudDialogflowV2beta1TextInput),
    suggestionInput: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestionInput,
    ),
    assistQueryParams: Schema.optional(
      GoogleCloudDialogflowV2beta1AssistQueryParameters,
    ),
    cxParameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    cxCurrentPage: Schema.optional(Schema.String),
    queryParams: Schema.optional(GoogleCloudDialogflowV2beta1QueryParameters),
    eventInput: Schema.optional(GoogleCloudDialogflowV2beta1EventInput),
    intentInput: Schema.optional(GoogleCloudDialogflowV2beta1IntentInput),
    replyAudioConfig: Schema.optional(
      GoogleCloudDialogflowV2beta1OutputAudioConfig,
    ),
    messageSendTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1AnalyzeContentRequest",
  });

export interface GoogleCloudDialogflowCxV3WebhookRequestIntentInfo {
  displayName?: string;
  confidence?: number;
  lastMatchedIntent?: string;
  parameters?: Record<
    string,
    GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue
  >;
}

export const GoogleCloudDialogflowCxV3WebhookRequestIntentInfo: Schema.Schema<GoogleCloudDialogflowCxV3WebhookRequestIntentInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
    lastMatchedIntent: Schema.optional(Schema.String),
    parameters: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3WebhookRequestIntentInfo",
  });

export interface GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo {
  tag?: string;
}

export const GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo: Schema.Schema<GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tag: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo",
  });

export interface GoogleCloudDialogflowCxV3WebhookRequest {
  triggerEvent?: string;
  intentInfo?: GoogleCloudDialogflowCxV3WebhookRequestIntentInfo;
  sessionInfo?: GoogleCloudDialogflowCxV3SessionInfo;
  payload?: Record<string, unknown>;
  transcript?: string;
  languageCode?: string;
  fulfillmentInfo?: GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo;
  languageInfo?: GoogleCloudDialogflowCxV3LanguageInfo;
  dtmfDigits?: string;
  triggerIntent?: string;
  pageInfo?: GoogleCloudDialogflowCxV3PageInfo;
  messages?: ReadonlyArray<GoogleCloudDialogflowCxV3ResponseMessage>;
  sentimentAnalysisResult?: GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult;
  text?: string;
  detectIntentResponseId?: string;
}

export const GoogleCloudDialogflowCxV3WebhookRequest: Schema.Schema<GoogleCloudDialogflowCxV3WebhookRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    triggerEvent: Schema.optional(Schema.String),
    intentInfo: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookRequestIntentInfo,
    ),
    sessionInfo: Schema.optional(GoogleCloudDialogflowCxV3SessionInfo),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    transcript: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    fulfillmentInfo: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo,
    ),
    languageInfo: Schema.optional(GoogleCloudDialogflowCxV3LanguageInfo),
    dtmfDigits: Schema.optional(Schema.String),
    triggerIntent: Schema.optional(Schema.String),
    pageInfo: Schema.optional(GoogleCloudDialogflowCxV3PageInfo),
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ResponseMessage),
    ),
    sentimentAnalysisResult: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult,
    ),
    text: Schema.optional(Schema.String),
    detectIntentResponseId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3WebhookRequest" });

export interface GoogleCloudDialogflowV2beta1Agent {
  defaultLanguageCode?: string;
  apiVersion?:
    | "API_VERSION_UNSPECIFIED"
    | "API_VERSION_V1"
    | "API_VERSION_V2"
    | "API_VERSION_V2_BETA_1"
    | (string & {});
  avatarUri?: string;
  classificationThreshold?: number;
  enableLogging?: boolean;
  description?: string;
  parent?: string;
  timeZone?: string;
  matchMode?:
    | "MATCH_MODE_UNSPECIFIED"
    | "MATCH_MODE_HYBRID"
    | "MATCH_MODE_ML_ONLY"
    | (string & {});
  tier?:
    | "TIER_UNSPECIFIED"
    | "TIER_STANDARD"
    | "TIER_ENTERPRISE"
    | "TIER_ENTERPRISE_PLUS"
    | (string & {});
  displayName?: string;
  supportedLanguageCodes?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1Agent: Schema.Schema<GoogleCloudDialogflowV2beta1Agent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultLanguageCode: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    avatarUri: Schema.optional(Schema.String),
    classificationThreshold: Schema.optional(Schema.Number),
    enableLogging: Schema.optional(Schema.Boolean),
    description: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    timeZone: Schema.optional(Schema.String),
    matchMode: Schema.optional(Schema.String),
    tier: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    supportedLanguageCodes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1Agent" });

export interface GoogleCloudDialogflowV2beta1SearchAgentsResponse {
  agents?: ReadonlyArray<GoogleCloudDialogflowV2beta1Agent>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2beta1SearchAgentsResponse: Schema.Schema<GoogleCloudDialogflowV2beta1SearchAgentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agents: Schema.optional(Schema.Array(GoogleCloudDialogflowV2beta1Agent)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SearchAgentsResponse",
  });

export interface GoogleCloudDialogflowV2beta1HumanAgentAssistantEvent {
  conversation?: string;
  suggestionResults?: ReadonlyArray<GoogleCloudDialogflowV2beta1SuggestionResult>;
  participant?: string;
}

export const GoogleCloudDialogflowV2beta1HumanAgentAssistantEvent: Schema.Schema<GoogleCloudDialogflowV2beta1HumanAgentAssistantEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversation: Schema.optional(Schema.String),
    suggestionResults: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SuggestionResult),
    ),
    participant: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1HumanAgentAssistantEvent",
  });

export interface GoogleCloudDialogflowV2beta1BatchDeleteIntentsRequest {
  intents?: ReadonlyArray<GoogleCloudDialogflowV2beta1Intent>;
}

export const GoogleCloudDialogflowV2beta1BatchDeleteIntentsRequest: Schema.Schema<GoogleCloudDialogflowV2beta1BatchDeleteIntentsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intents: Schema.optional(Schema.Array(GoogleCloudDialogflowV2beta1Intent)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1BatchDeleteIntentsRequest",
  });

export interface GoogleCloudDialogflowV2beta1EntityTypeBatch {
  entityTypes?: ReadonlyArray<GoogleCloudDialogflowV2beta1EntityType>;
}

export const GoogleCloudDialogflowV2beta1EntityTypeBatch: Schema.Schema<GoogleCloudDialogflowV2beta1EntityTypeBatch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1EntityType),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1EntityTypeBatch" });

export interface GoogleCloudDialogflowCxV3ImportIntentsMetadata {}

export const GoogleCloudDialogflowCxV3ImportIntentsMetadata: Schema.Schema<GoogleCloudDialogflowCxV3ImportIntentsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ImportIntentsMetadata",
  });

export interface GoogleCloudDialogflowCxV3RunTestCaseResponse {
  result?: GoogleCloudDialogflowCxV3TestCaseResult;
}

export const GoogleCloudDialogflowCxV3RunTestCaseResponse: Schema.Schema<GoogleCloudDialogflowCxV3RunTestCaseResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.optional(GoogleCloudDialogflowCxV3TestCaseResult),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3RunTestCaseResponse" });

export interface GoogleCloudDialogflowV2beta1StreamingRecognitionResult {
  speechWordInfo?: ReadonlyArray<GoogleCloudDialogflowV2beta1SpeechWordInfo>;
  speechEndOffset?: string;
  confidence?: number;
  isFinal?: boolean;
  dtmfDigits?: GoogleCloudDialogflowV2beta1TelephonyDtmfEvents;
  stability?: number;
  messageType?:
    | "MESSAGE_TYPE_UNSPECIFIED"
    | "TRANSCRIPT"
    | "END_OF_SINGLE_UTTERANCE"
    | "DTMF_DIGITS"
    | "PARTIAL_DTMF_DIGITS"
    | (string & {});
  transcript?: string;
  languageCode?: string;
}

export const GoogleCloudDialogflowV2beta1StreamingRecognitionResult: Schema.Schema<GoogleCloudDialogflowV2beta1StreamingRecognitionResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    speechWordInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SpeechWordInfo),
    ),
    speechEndOffset: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
    isFinal: Schema.optional(Schema.Boolean),
    dtmfDigits: Schema.optional(
      GoogleCloudDialogflowV2beta1TelephonyDtmfEvents,
    ),
    stability: Schema.optional(Schema.Number),
    messageType: Schema.optional(Schema.String),
    transcript: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1StreamingRecognitionResult",
  });

export interface GoogleCloudDialogflowCxV3ExportFlowResponse {
  flowUri?: string;
  flowContent?: string;
}

export const GoogleCloudDialogflowCxV3ExportFlowResponse: Schema.Schema<GoogleCloudDialogflowCxV3ExportFlowResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flowUri: Schema.optional(Schema.String),
    flowContent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ExportFlowResponse" });

export interface GoogleCloudDialogflowCxV3ImportIntentsResponse {
  conflictingResources?: GoogleCloudDialogflowCxV3ImportIntentsResponseConflictingResources;
  intents?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3ImportIntentsResponse: Schema.Schema<GoogleCloudDialogflowCxV3ImportIntentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conflictingResources: Schema.optional(
      GoogleCloudDialogflowCxV3ImportIntentsResponseConflictingResources,
    ),
    intents: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ImportIntentsResponse" });

export interface GoogleCloudDialogflowCxV3DeployFlowMetadata {
  testErrors?: ReadonlyArray<GoogleCloudDialogflowCxV3TestError>;
}

export const GoogleCloudDialogflowCxV3DeployFlowMetadata: Schema.Schema<GoogleCloudDialogflowCxV3DeployFlowMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testErrors: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3TestError),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3DeployFlowMetadata" });

export interface GoogleCloudDialogflowV2beta1BatchCreateEntitiesRequest {
  languageCode?: string;
  entities?: ReadonlyArray<GoogleCloudDialogflowV2beta1EntityTypeEntity>;
}

export const GoogleCloudDialogflowV2beta1BatchCreateEntitiesRequest: Schema.Schema<GoogleCloudDialogflowV2beta1BatchCreateEntitiesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1EntityTypeEntity),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1BatchCreateEntitiesRequest",
  });

export interface GoogleCloudDialogflowV2beta1Version {
  createTime?: string;
  status?:
    | "VERSION_STATUS_UNSPECIFIED"
    | "IN_PROGRESS"
    | "READY"
    | "FAILED"
    | (string & {});
  description?: string;
  name?: string;
  versionNumber?: number;
}

export const GoogleCloudDialogflowV2beta1Version: Schema.Schema<GoogleCloudDialogflowV2beta1Version> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    versionNumber: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1Version" });

export interface GoogleCloudDialogflowV2beta1ListVersionsResponse {
  nextPageToken?: string;
  versions?: ReadonlyArray<GoogleCloudDialogflowV2beta1Version>;
}

export const GoogleCloudDialogflowV2beta1ListVersionsResponse: Schema.Schema<GoogleCloudDialogflowV2beta1ListVersionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    versions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1Version),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ListVersionsResponse",
  });

export interface GoogleCloudDialogflowCxV3ExportEntityTypesResponse {
  entityTypesContent?: GoogleCloudDialogflowCxV3InlineDestination;
  entityTypesUri?: string;
}

export const GoogleCloudDialogflowCxV3ExportEntityTypesResponse: Schema.Schema<GoogleCloudDialogflowCxV3ExportEntityTypesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypesContent: Schema.optional(
      GoogleCloudDialogflowCxV3InlineDestination,
    ),
    entityTypesUri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ExportEntityTypesResponse",
  });

export interface GoogleCloudDialogflowV2SetSuggestionFeatureConfigOperationMetadata {
  createTime?: string;
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
}

export const GoogleCloudDialogflowV2SetSuggestionFeatureConfigOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2SetSuggestionFeatureConfigOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    conversationProfile: Schema.optional(Schema.String),
    participantRole: Schema.optional(Schema.String),
    suggestionFeatureType: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SetSuggestionFeatureConfigOperationMetadata",
  });

export interface GoogleCloudDialogflowV2beta1ConversationEvent {
  conversation?: string;
  newRecognitionResultPayload?: GoogleCloudDialogflowV2beta1StreamingRecognitionResult;
  type?:
    | "TYPE_UNSPECIFIED"
    | "CONVERSATION_STARTED"
    | "CONVERSATION_FINISHED"
    | "HUMAN_INTERVENTION_NEEDED"
    | "NEW_MESSAGE"
    | "NEW_RECOGNITION_RESULT"
    | "UNRECOVERABLE_ERROR"
    | (string & {});
  newMessagePayload?: GoogleCloudDialogflowV2beta1Message;
  errorStatus?: GoogleRpcStatus;
}

export const GoogleCloudDialogflowV2beta1ConversationEvent: Schema.Schema<GoogleCloudDialogflowV2beta1ConversationEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversation: Schema.optional(Schema.String),
    newRecognitionResultPayload: Schema.optional(
      GoogleCloudDialogflowV2beta1StreamingRecognitionResult,
    ),
    type: Schema.optional(Schema.String),
    newMessagePayload: Schema.optional(GoogleCloudDialogflowV2beta1Message),
    errorStatus: Schema.optional(GoogleRpcStatus),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ConversationEvent" });

export interface GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata {
  version?: string;
}

export const GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata",
  });

export interface GoogleCloudDialogflowV2DeleteConversationDatasetOperationMetadata {}

export const GoogleCloudDialogflowV2DeleteConversationDatasetOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2DeleteConversationDatasetOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleCloudDialogflowV2DeleteConversationDatasetOperationMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1TurnSignals {
  reachedEndPage?: boolean;
  agentEscalated?: boolean;
  failureReasons?: ReadonlyArray<
    | "FAILURE_REASON_UNSPECIFIED"
    | "FAILED_INTENT"
    | "FAILED_WEBHOOK"
    | (string & {})
  >;
  noMatch?: boolean;
  webhookStatuses?: ReadonlyArray<string>;
  sentimentMagnitude?: number;
  dtmfUsed?: boolean;
  noUserInput?: boolean;
  sentimentScore?: number;
  userEscalated?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1TurnSignals: Schema.Schema<GoogleCloudDialogflowCxV3beta1TurnSignals> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reachedEndPage: Schema.optional(Schema.Boolean),
    agentEscalated: Schema.optional(Schema.Boolean),
    failureReasons: Schema.optional(Schema.Array(Schema.String)),
    noMatch: Schema.optional(Schema.Boolean),
    webhookStatuses: Schema.optional(Schema.Array(Schema.String)),
    sentimentMagnitude: Schema.optional(Schema.Number),
    dtmfUsed: Schema.optional(Schema.Boolean),
    noUserInput: Schema.optional(Schema.Boolean),
    sentimentScore: Schema.optional(Schema.Number),
    userEscalated: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TurnSignals" });

export interface GoogleCloudDialogflowV2beta1ListGeneratorEvaluationsResponse {
  nextPageToken?: string;
  generatorEvaluations?: ReadonlyArray<GoogleCloudDialogflowV2beta1GeneratorEvaluation>;
}

export const GoogleCloudDialogflowV2beta1ListGeneratorEvaluationsResponse: Schema.Schema<GoogleCloudDialogflowV2beta1ListGeneratorEvaluationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    generatorEvaluations: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1GeneratorEvaluation),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ListGeneratorEvaluationsResponse",
  });

export interface GoogleCloudDialogflowV2beta1Document {
  content?: string;
  enableAutoReload?: boolean;
  name?: string;
  mimeType?: string;
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "UPDATING"
    | "RELOADING"
    | "DELETING"
    | (string & {});
  knowledgeTypes?: ReadonlyArray<
    | "KNOWLEDGE_TYPE_UNSPECIFIED"
    | "FAQ"
    | "EXTRACTIVE_QA"
    | "ARTICLE_SUGGESTION"
    | "AGENT_FACING_SMART_REPLY"
    | "SMART_REPLY"
    | (string & {})
  >;
  metadata?: Record<string, string>;
  displayName?: string;
  rawContent?: string;
  contentUri?: string;
  latestReloadStatus?: GoogleCloudDialogflowV2beta1DocumentReloadStatus;
}

export const GoogleCloudDialogflowV2beta1Document: Schema.Schema<GoogleCloudDialogflowV2beta1Document> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
    enableAutoReload: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    mimeType: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    knowledgeTypes: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    displayName: Schema.optional(Schema.String),
    rawContent: Schema.optional(Schema.String),
    contentUri: Schema.optional(Schema.String),
    latestReloadStatus: Schema.optional(
      GoogleCloudDialogflowV2beta1DocumentReloadStatus,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1Document" });

export interface GoogleCloudDialogflowCxV3BatchRunTestCasesMetadata {
  errors?: ReadonlyArray<GoogleCloudDialogflowCxV3TestError>;
}

export const GoogleCloudDialogflowCxV3BatchRunTestCasesMetadata: Schema.Schema<GoogleCloudDialogflowCxV3BatchRunTestCasesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3TestError)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3BatchRunTestCasesMetadata",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeBase {
  displayName?: string;
  name?: string;
  languageCode?: string;
}

export const GoogleCloudDialogflowV2beta1KnowledgeBase: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeBase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1KnowledgeBase" });

export interface GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse {
  knowledgeBases?: ReadonlyArray<GoogleCloudDialogflowV2beta1KnowledgeBase>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse: Schema.Schema<GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    knowledgeBases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1KnowledgeBase),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse",
  });

export interface GoogleCloudDialogflowV2beta1CompleteConversationRequest {}

export const GoogleCloudDialogflowV2beta1CompleteConversationRequest: Schema.Schema<GoogleCloudDialogflowV2beta1CompleteConversationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowV2beta1CompleteConversationRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1RunContinuousTestMetadata {
  errors?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TestError>;
}

export const GoogleCloudDialogflowCxV3beta1RunContinuousTestMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1RunContinuousTestMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TestError),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RunContinuousTestMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookResponse {
  fulfillmentResponse?: GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse;
  pageInfo?: GoogleCloudDialogflowCxV3beta1PageInfo;
  targetPage?: string;
  sessionInfo?: GoogleCloudDialogflowCxV3beta1SessionInfo;
  payload?: Record<string, unknown>;
  targetFlow?: string;
}

export const GoogleCloudDialogflowCxV3beta1WebhookResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1WebhookResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fulfillmentResponse: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse,
    ),
    pageInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1PageInfo),
    targetPage: Schema.optional(Schema.String),
    sessionInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1SessionInfo),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    targetFlow: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1WebhookResponse" });

export interface GoogleCloudDialogflowV2beta1ListConversationProfilesResponse {
  conversationProfiles?: ReadonlyArray<GoogleCloudDialogflowV2beta1ConversationProfile>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2beta1ListConversationProfilesResponse: Schema.Schema<GoogleCloudDialogflowV2beta1ListConversationProfilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationProfiles: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1ConversationProfile),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ListConversationProfilesResponse",
  });

export interface GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequest {
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
}

export const GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequest: Schema.Schema<GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    participantRole: Schema.optional(Schema.String),
    suggestionFeatureType: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequest",
  });

export interface GoogleCloudDialogflowV2beta1SuggestArticlesRequest {
  latestMessage?: string;
  contextSize?: number;
  assistQueryParams?: GoogleCloudDialogflowV2beta1AssistQueryParameters;
}

export const GoogleCloudDialogflowV2beta1SuggestArticlesRequest: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestArticlesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
    assistQueryParams: Schema.optional(
      GoogleCloudDialogflowV2beta1AssistQueryParameters,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestArticlesRequest",
  });

export interface GoogleCloudDialogflowCxV3RunContinuousTestResponse {
  continuousTestResult?: GoogleCloudDialogflowCxV3ContinuousTestResult;
}

export const GoogleCloudDialogflowCxV3RunContinuousTestResponse: Schema.Schema<GoogleCloudDialogflowCxV3RunContinuousTestResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    continuousTestResult: Schema.optional(
      GoogleCloudDialogflowCxV3ContinuousTestResult,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3RunContinuousTestResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1ImportEntityTypesResponse {
  entityTypes?: ReadonlyArray<string>;
  conflictingResources?: GoogleCloudDialogflowCxV3beta1ImportEntityTypesResponseConflictingResources;
}

export const GoogleCloudDialogflowCxV3beta1ImportEntityTypesResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportEntityTypesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypes: Schema.optional(Schema.Array(Schema.String)),
    conflictingResources: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ImportEntityTypesResponseConflictingResources,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportEntityTypesResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1LanguageInfo {
  resolvedLanguageCode?: string;
  inputLanguageCode?: string;
  confidenceScore?: number;
}

export const GoogleCloudDialogflowCxV3beta1LanguageInfo: Schema.Schema<GoogleCloudDialogflowCxV3beta1LanguageInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resolvedLanguageCode: Schema.optional(Schema.String),
    inputLanguageCode: Schema.optional(Schema.String),
    confidenceScore: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1LanguageInfo" });

export interface GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest {
  updateMask?: string;
  entityTypeBatchUri?: string;
  entityTypeBatchInline?: GoogleCloudDialogflowV2beta1EntityTypeBatch;
  languageCode?: string;
}

export const GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest: Schema.Schema<GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String),
    entityTypeBatchUri: Schema.optional(Schema.String),
    entityTypeBatchInline: Schema.optional(
      GoogleCloudDialogflowV2beta1EntityTypeBatch,
    ),
    languageCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1BatchRunTestCasesMetadata {
  errors?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TestError>;
}

export const GoogleCloudDialogflowCxV3beta1BatchRunTestCasesMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1BatchRunTestCasesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TestError),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1BatchRunTestCasesMetadata",
  });

export interface GoogleCloudDialogflowV2DeleteConversationModelOperationMetadata {
  createTime?: string;
  doneTime?: string;
  conversationModel?: string;
}

export const GoogleCloudDialogflowV2DeleteConversationModelOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2DeleteConversationModelOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    doneTime: Schema.optional(Schema.String),
    conversationModel: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2DeleteConversationModelOperationMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1DeployFlowMetadata {
  testErrors?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TestError>;
}

export const GoogleCloudDialogflowCxV3beta1DeployFlowMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1DeployFlowMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testErrors: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TestError),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1DeployFlowMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1ConversationSignals {
  turnSignals?: GoogleCloudDialogflowCxV3beta1TurnSignals;
}

export const GoogleCloudDialogflowCxV3beta1ConversationSignals: Schema.Schema<GoogleCloudDialogflowCxV3beta1ConversationSignals> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    turnSignals: Schema.optional(GoogleCloudDialogflowCxV3beta1TurnSignals),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ConversationSignals",
  });

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

export const GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationProfile: Schema.optional(Schema.String),
    participantRole: Schema.optional(Schema.String),
    suggestionFeatureType: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigOperationMetadata",
  });

export interface GoogleCloudDialogflowV2ExportAgentResponse {
  agentUri?: string;
  agentContent?: string;
}

export const GoogleCloudDialogflowV2ExportAgentResponse: Schema.Schema<GoogleCloudDialogflowV2ExportAgentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentUri: Schema.optional(Schema.String),
    agentContent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ExportAgentResponse" });

export interface GoogleCloudDialogflowCxV3beta1RunTestCaseResponse {
  result?: GoogleCloudDialogflowCxV3beta1TestCaseResult;
}

export const GoogleCloudDialogflowCxV3beta1RunTestCaseResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1RunTestCaseResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.optional(GoogleCloudDialogflowCxV3beta1TestCaseResult),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RunTestCaseResponse",
  });

export interface GoogleCloudDialogflowV2beta1ListDocumentsResponse {
  documents?: ReadonlyArray<GoogleCloudDialogflowV2beta1Document>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2beta1ListDocumentsResponse: Schema.Schema<GoogleCloudDialogflowV2beta1ListDocumentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    documents: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1Document),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ListDocumentsResponse",
  });

export interface GoogleCloudDialogflowV2beta1ListIntentsResponse {
  intents?: ReadonlyArray<GoogleCloudDialogflowV2beta1Intent>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2beta1ListIntentsResponse: Schema.Schema<GoogleCloudDialogflowV2beta1ListIntentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intents: Schema.optional(Schema.Array(GoogleCloudDialogflowV2beta1Intent)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ListIntentsResponse",
  });

export interface GoogleCloudDialogflowV2WebhookRequest {
  responseId?: string;
  session?: string;
  queryResult?: GoogleCloudDialogflowV2QueryResult;
  originalDetectIntentRequest?: GoogleCloudDialogflowV2OriginalDetectIntentRequest;
}

export const GoogleCloudDialogflowV2WebhookRequest: Schema.Schema<GoogleCloudDialogflowV2WebhookRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responseId: Schema.optional(Schema.String),
    session: Schema.optional(Schema.String),
    queryResult: Schema.optional(GoogleCloudDialogflowV2QueryResult),
    originalDetectIntentRequest: Schema.optional(
      GoogleCloudDialogflowV2OriginalDetectIntentRequest,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2WebhookRequest" });

export interface GoogleCloudDialogflowCxV3ImportEntityTypesMetadata {}

export const GoogleCloudDialogflowCxV3ImportEntityTypesMetadata: Schema.Schema<GoogleCloudDialogflowCxV3ImportEntityTypesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ImportEntityTypesMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookRequest {
  fulfillmentInfo?: GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo;
  transcript?: string;
  languageCode?: string;
  intentInfo?: GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo;
  sessionInfo?: GoogleCloudDialogflowCxV3beta1SessionInfo;
  payload?: Record<string, unknown>;
  triggerEvent?: string;
  detectIntentResponseId?: string;
  text?: string;
  pageInfo?: GoogleCloudDialogflowCxV3beta1PageInfo;
  messages?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ResponseMessage>;
  sentimentAnalysisResult?: GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult;
  triggerIntent?: string;
  dtmfDigits?: string;
  languageInfo?: GoogleCloudDialogflowCxV3beta1LanguageInfo;
}

export const GoogleCloudDialogflowCxV3beta1WebhookRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1WebhookRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fulfillmentInfo: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo,
    ),
    transcript: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    intentInfo: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo,
    ),
    sessionInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1SessionInfo),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    triggerEvent: Schema.optional(Schema.String),
    detectIntentResponseId: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
    pageInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1PageInfo),
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ResponseMessage),
    ),
    sentimentAnalysisResult: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult,
    ),
    triggerIntent: Schema.optional(Schema.String),
    dtmfDigits: Schema.optional(Schema.String),
    languageInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1LanguageInfo),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1WebhookRequest" });

export interface GoogleCloudDialogflowCxV3beta1RunTestCaseMetadata {}

export const GoogleCloudDialogflowCxV3beta1RunTestCaseMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1RunTestCaseMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RunTestCaseMetadata",
  });

export interface GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse {
  sessionEntityTypes?: ReadonlyArray<GoogleCloudDialogflowV2beta1SessionEntityType>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse: Schema.Schema<GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionEntityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SessionEntityType),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse",
  });

export interface GoogleCloudDialogflowV2BatchUpdateEntityTypesResponse {
  entityTypes?: ReadonlyArray<GoogleCloudDialogflowV2EntityType>;
}

export const GoogleCloudDialogflowV2BatchUpdateEntityTypesResponse: Schema.Schema<GoogleCloudDialogflowV2BatchUpdateEntityTypesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2EntityType),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2BatchUpdateEntityTypesResponse",
  });

export interface GoogleCloudDialogflowCxV3ImportTestCasesResponse {
  names?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3ImportTestCasesResponse: Schema.Schema<GoogleCloudDialogflowCxV3ImportTestCasesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ImportTestCasesResponse",
  });

export interface GoogleCloudDialogflowV2BatchUpdateIntentsResponse {
  intents?: ReadonlyArray<GoogleCloudDialogflowV2Intent>;
}

export const GoogleCloudDialogflowV2BatchUpdateIntentsResponse: Schema.Schema<GoogleCloudDialogflowV2BatchUpdateIntentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intents: Schema.optional(Schema.Array(GoogleCloudDialogflowV2Intent)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2BatchUpdateIntentsResponse",
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

export interface GetAgentProjectsRequest {
  parent: string;
}

export const GetAgentProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/agent" }),
    svc,
  ) as unknown as Schema.Schema<GetAgentProjectsRequest>;

export type GetAgentProjectsResponse = GoogleCloudDialogflowV2beta1Agent;
export const GetAgentProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Agent;

export type GetAgentProjectsError = DefaultErrors | NotFound | Forbidden;

export const getAgentProjects: API.OperationMethod<
  GetAgentProjectsRequest,
  GetAgentProjectsResponse,
  GetAgentProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAgentProjectsRequest,
  output: GetAgentProjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteAgentProjectsRequest {
  parent: string;
}

export const DeleteAgentProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+parent}/agent" }),
    svc,
  ) as unknown as Schema.Schema<DeleteAgentProjectsRequest>;

export type DeleteAgentProjectsResponse = GoogleProtobufEmpty;
export const DeleteAgentProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteAgentProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteAgentProjects: API.OperationMethod<
  DeleteAgentProjectsRequest,
  DeleteAgentProjectsResponse,
  DeleteAgentProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAgentProjectsRequest,
  output: DeleteAgentProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetAgentProjectsRequest {
  parent: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Agent;
}

export const SetAgentProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Agent).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2beta1/{+parent}/agent", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SetAgentProjectsRequest>;

export type SetAgentProjectsResponse = GoogleCloudDialogflowV2beta1Agent;
export const SetAgentProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Agent;

export type SetAgentProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const setAgentProjects: API.OperationMethod<
  SetAgentProjectsRequest,
  SetAgentProjectsResponse,
  SetAgentProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetAgentProjectsRequest,
  output: SetAgentProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsConversationsRequest {
  parent: string;
  conversationId?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Conversation;
}

export const CreateProjectsConversationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    conversationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("conversationId"),
    ),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Conversation).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/conversations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsConversationsRequest>;

export type CreateProjectsConversationsResponse =
  GoogleCloudDialogflowV2beta1Conversation;
export const CreateProjectsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Conversation;

export type CreateProjectsConversationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsConversations: API.OperationMethod<
  CreateProjectsConversationsRequest,
  CreateProjectsConversationsResponse,
  CreateProjectsConversationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsConversationsRequest,
  output: CreateProjectsConversationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsConversationsRequest {
  filter?: string;
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsConversationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/conversations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsConversationsRequest>;

export type ListProjectsConversationsResponse =
  GoogleCloudDialogflowV2beta1ListConversationsResponse;
export const ListProjectsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListConversationsResponse;

export type ListProjectsConversationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsConversations: API.PaginatedOperationMethod<
  ListProjectsConversationsRequest,
  ListProjectsConversationsResponse,
  ListProjectsConversationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsConversationsRequest,
  output: ListProjectsConversationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsConversationsRequest {
  name: string;
}

export const GetProjectsConversationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsConversationsRequest>;

export type GetProjectsConversationsResponse =
  GoogleCloudDialogflowV2beta1Conversation;
export const GetProjectsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Conversation;

export type GetProjectsConversationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsConversations: API.OperationMethod<
  GetProjectsConversationsRequest,
  GetProjectsConversationsResponse,
  GetProjectsConversationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsConversationsRequest,
  output: GetProjectsConversationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CompleteProjectsConversationsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1CompleteConversationRequest;
}

export const CompleteProjectsConversationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1CompleteConversationRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2beta1/{+name}:complete", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CompleteProjectsConversationsRequest>;

export type CompleteProjectsConversationsResponse =
  GoogleCloudDialogflowV2beta1Conversation;
export const CompleteProjectsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Conversation;

export type CompleteProjectsConversationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const completeProjectsConversations: API.OperationMethod<
  CompleteProjectsConversationsRequest,
  CompleteProjectsConversationsResponse,
  CompleteProjectsConversationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CompleteProjectsConversationsRequest,
  output: CompleteProjectsConversationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsConversationsParticipantsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Participant;
}

export const CreateProjectsConversationsParticipantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Participant).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/participants",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsConversationsParticipantsRequest>;

export type CreateProjectsConversationsParticipantsResponse =
  GoogleCloudDialogflowV2beta1Participant;
export const CreateProjectsConversationsParticipantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Participant;

export type CreateProjectsConversationsParticipantsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsConversationsParticipants: API.OperationMethod<
  CreateProjectsConversationsParticipantsRequest,
  CreateProjectsConversationsParticipantsResponse,
  CreateProjectsConversationsParticipantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsConversationsParticipantsRequest,
  output: CreateProjectsConversationsParticipantsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsConversationsParticipantsRequest {
  name: string;
}

export const GetProjectsConversationsParticipantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsConversationsParticipantsRequest>;

export type GetProjectsConversationsParticipantsResponse =
  GoogleCloudDialogflowV2beta1Participant;
export const GetProjectsConversationsParticipantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Participant;

export type GetProjectsConversationsParticipantsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsConversationsParticipants: API.OperationMethod<
  GetProjectsConversationsParticipantsRequest,
  GetProjectsConversationsParticipantsResponse,
  GetProjectsConversationsParticipantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsConversationsParticipantsRequest,
  output: GetProjectsConversationsParticipantsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsConversationsParticipantsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Participant;
}

export const PatchProjectsConversationsParticipantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Participant).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsConversationsParticipantsRequest>;

export type PatchProjectsConversationsParticipantsResponse =
  GoogleCloudDialogflowV2beta1Participant;
export const PatchProjectsConversationsParticipantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Participant;

export type PatchProjectsConversationsParticipantsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsConversationsParticipants: API.OperationMethod<
  PatchProjectsConversationsParticipantsRequest,
  PatchProjectsConversationsParticipantsResponse,
  PatchProjectsConversationsParticipantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsConversationsParticipantsRequest,
  output: PatchProjectsConversationsParticipantsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsConversationsParticipantsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsConversationsParticipantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/participants" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsConversationsParticipantsRequest>;

export type ListProjectsConversationsParticipantsResponse =
  GoogleCloudDialogflowV2beta1ListParticipantsResponse;
export const ListProjectsConversationsParticipantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListParticipantsResponse;

export type ListProjectsConversationsParticipantsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsConversationsParticipants: API.PaginatedOperationMethod<
  ListProjectsConversationsParticipantsRequest,
  ListProjectsConversationsParticipantsResponse,
  ListProjectsConversationsParticipantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsConversationsParticipantsRequest,
  output: ListProjectsConversationsParticipantsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface AnalyzeContentProjectsConversationsParticipantsRequest {
  participant: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1AnalyzeContentRequest;
}

export const AnalyzeContentProjectsConversationsParticipantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    participant: Schema.String.pipe(T.HttpPath("participant")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1AnalyzeContentRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+participant}:analyzeContent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AnalyzeContentProjectsConversationsParticipantsRequest>;

export type AnalyzeContentProjectsConversationsParticipantsResponse =
  GoogleCloudDialogflowV2beta1AnalyzeContentResponse;
export const AnalyzeContentProjectsConversationsParticipantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1AnalyzeContentResponse;

export type AnalyzeContentProjectsConversationsParticipantsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const analyzeContentProjectsConversationsParticipants: API.OperationMethod<
  AnalyzeContentProjectsConversationsParticipantsRequest,
  AnalyzeContentProjectsConversationsParticipantsResponse,
  AnalyzeContentProjectsConversationsParticipantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AnalyzeContentProjectsConversationsParticipantsRequest,
  output: AnalyzeContentProjectsConversationsParticipantsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SuggestKnowledgeAssistProjectsConversationsParticipantsSuggestionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistRequest;
}

export const SuggestKnowledgeAssistProjectsConversationsParticipantsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/suggestions:suggestKnowledgeAssist",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SuggestKnowledgeAssistProjectsConversationsParticipantsSuggestionsRequest>;

export type SuggestKnowledgeAssistProjectsConversationsParticipantsSuggestionsResponse =
  GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse;
export const SuggestKnowledgeAssistProjectsConversationsParticipantsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse;

export type SuggestKnowledgeAssistProjectsConversationsParticipantsSuggestionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const suggestKnowledgeAssistProjectsConversationsParticipantsSuggestions: API.OperationMethod<
  SuggestKnowledgeAssistProjectsConversationsParticipantsSuggestionsRequest,
  SuggestKnowledgeAssistProjectsConversationsParticipantsSuggestionsResponse,
  SuggestKnowledgeAssistProjectsConversationsParticipantsSuggestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    SuggestKnowledgeAssistProjectsConversationsParticipantsSuggestionsRequest,
  output:
    SuggestKnowledgeAssistProjectsConversationsParticipantsSuggestionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CompileProjectsConversationsParticipantsSuggestionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1CompileSuggestionRequest;
}

export const CompileProjectsConversationsParticipantsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1CompileSuggestionRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/suggestions:compile",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CompileProjectsConversationsParticipantsSuggestionsRequest>;

export type CompileProjectsConversationsParticipantsSuggestionsResponse =
  GoogleCloudDialogflowV2beta1CompileSuggestionResponse;
export const CompileProjectsConversationsParticipantsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1CompileSuggestionResponse;

export type CompileProjectsConversationsParticipantsSuggestionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const compileProjectsConversationsParticipantsSuggestions: API.OperationMethod<
  CompileProjectsConversationsParticipantsSuggestionsRequest,
  CompileProjectsConversationsParticipantsSuggestionsResponse,
  CompileProjectsConversationsParticipantsSuggestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CompileProjectsConversationsParticipantsSuggestionsRequest,
  output: CompileProjectsConversationsParticipantsSuggestionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SuggestArticlesProjectsConversationsParticipantsSuggestionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1SuggestArticlesRequest;
}

export const SuggestArticlesProjectsConversationsParticipantsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestArticlesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/suggestions:suggestArticles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SuggestArticlesProjectsConversationsParticipantsSuggestionsRequest>;

export type SuggestArticlesProjectsConversationsParticipantsSuggestionsResponse =
  GoogleCloudDialogflowV2beta1SuggestArticlesResponse;
export const SuggestArticlesProjectsConversationsParticipantsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1SuggestArticlesResponse;

export type SuggestArticlesProjectsConversationsParticipantsSuggestionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const suggestArticlesProjectsConversationsParticipantsSuggestions: API.OperationMethod<
  SuggestArticlesProjectsConversationsParticipantsSuggestionsRequest,
  SuggestArticlesProjectsConversationsParticipantsSuggestionsResponse,
  SuggestArticlesProjectsConversationsParticipantsSuggestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SuggestArticlesProjectsConversationsParticipantsSuggestionsRequest,
  output: SuggestArticlesProjectsConversationsParticipantsSuggestionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SuggestFaqAnswersProjectsConversationsParticipantsSuggestionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1SuggestFaqAnswersRequest;
}

export const SuggestFaqAnswersProjectsConversationsParticipantsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestFaqAnswersRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/suggestions:suggestFaqAnswers",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SuggestFaqAnswersProjectsConversationsParticipantsSuggestionsRequest>;

export type SuggestFaqAnswersProjectsConversationsParticipantsSuggestionsResponse =
  GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse;
export const SuggestFaqAnswersProjectsConversationsParticipantsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse;

export type SuggestFaqAnswersProjectsConversationsParticipantsSuggestionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const suggestFaqAnswersProjectsConversationsParticipantsSuggestions: API.OperationMethod<
  SuggestFaqAnswersProjectsConversationsParticipantsSuggestionsRequest,
  SuggestFaqAnswersProjectsConversationsParticipantsSuggestionsResponse,
  SuggestFaqAnswersProjectsConversationsParticipantsSuggestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SuggestFaqAnswersProjectsConversationsParticipantsSuggestionsRequest,
  output: SuggestFaqAnswersProjectsConversationsParticipantsSuggestionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SuggestSmartRepliesProjectsConversationsParticipantsSuggestionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1SuggestSmartRepliesRequest;
}

export const SuggestSmartRepliesProjectsConversationsParticipantsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestSmartRepliesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/suggestions:suggestSmartReplies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SuggestSmartRepliesProjectsConversationsParticipantsSuggestionsRequest>;

export type SuggestSmartRepliesProjectsConversationsParticipantsSuggestionsResponse =
  GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse;
export const SuggestSmartRepliesProjectsConversationsParticipantsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse;

export type SuggestSmartRepliesProjectsConversationsParticipantsSuggestionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const suggestSmartRepliesProjectsConversationsParticipantsSuggestions: API.OperationMethod<
  SuggestSmartRepliesProjectsConversationsParticipantsSuggestionsRequest,
  SuggestSmartRepliesProjectsConversationsParticipantsSuggestionsResponse,
  SuggestSmartRepliesProjectsConversationsParticipantsSuggestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SuggestSmartRepliesProjectsConversationsParticipantsSuggestionsRequest,
  output:
    SuggestSmartRepliesProjectsConversationsParticipantsSuggestionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsConversationsParticipantsSuggestionsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
  filter?: string;
}

export const ListProjectsConversationsParticipantsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/suggestions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsConversationsParticipantsSuggestionsRequest>;

export type ListProjectsConversationsParticipantsSuggestionsResponse =
  GoogleCloudDialogflowV2beta1ListSuggestionsResponse;
export const ListProjectsConversationsParticipantsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListSuggestionsResponse;

export type ListProjectsConversationsParticipantsSuggestionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsConversationsParticipantsSuggestions: API.PaginatedOperationMethod<
  ListProjectsConversationsParticipantsSuggestionsRequest,
  ListProjectsConversationsParticipantsSuggestionsResponse,
  ListProjectsConversationsParticipantsSuggestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsConversationsParticipantsSuggestionsRequest,
  output: ListProjectsConversationsParticipantsSuggestionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface BatchCreateProjectsConversationsMessagesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1BatchCreateMessagesRequest;
}

export const BatchCreateProjectsConversationsMessagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1BatchCreateMessagesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/messages:batchCreate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchCreateProjectsConversationsMessagesRequest>;

export type BatchCreateProjectsConversationsMessagesResponse =
  GoogleCloudDialogflowV2beta1BatchCreateMessagesResponse;
export const BatchCreateProjectsConversationsMessagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1BatchCreateMessagesResponse;

export type BatchCreateProjectsConversationsMessagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const batchCreateProjectsConversationsMessages: API.OperationMethod<
  BatchCreateProjectsConversationsMessagesRequest,
  BatchCreateProjectsConversationsMessagesResponse,
  BatchCreateProjectsConversationsMessagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchCreateProjectsConversationsMessagesRequest,
  output: BatchCreateProjectsConversationsMessagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsConversationsMessagesRequest {
  filter?: string;
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsConversationsMessagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/messages" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsConversationsMessagesRequest>;

export type ListProjectsConversationsMessagesResponse =
  GoogleCloudDialogflowV2beta1ListMessagesResponse;
export const ListProjectsConversationsMessagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListMessagesResponse;

export type ListProjectsConversationsMessagesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsConversationsMessages: API.PaginatedOperationMethod<
  ListProjectsConversationsMessagesRequest,
  ListProjectsConversationsMessagesResponse,
  ListProjectsConversationsMessagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsConversationsMessagesRequest,
  output: ListProjectsConversationsMessagesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SearchKnowledgeProjectsConversationsSuggestionsRequest {
  conversation: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1SearchKnowledgeRequest;
}

export const SearchKnowledgeProjectsConversationsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversation: Schema.String.pipe(T.HttpPath("conversation")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1SearchKnowledgeRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+conversation}/suggestions:searchKnowledge",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SearchKnowledgeProjectsConversationsSuggestionsRequest>;

export type SearchKnowledgeProjectsConversationsSuggestionsResponse =
  GoogleCloudDialogflowV2beta1SearchKnowledgeResponse;
export const SearchKnowledgeProjectsConversationsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1SearchKnowledgeResponse;

export type SearchKnowledgeProjectsConversationsSuggestionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const searchKnowledgeProjectsConversationsSuggestions: API.OperationMethod<
  SearchKnowledgeProjectsConversationsSuggestionsRequest,
  SearchKnowledgeProjectsConversationsSuggestionsResponse,
  SearchKnowledgeProjectsConversationsSuggestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchKnowledgeProjectsConversationsSuggestionsRequest,
  output: SearchKnowledgeProjectsConversationsSuggestionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SuggestConversationSummaryProjectsConversationsSuggestionsRequest {
  conversation: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1SuggestConversationSummaryRequest;
}

export const SuggestConversationSummaryProjectsConversationsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversation: Schema.String.pipe(T.HttpPath("conversation")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestConversationSummaryRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+conversation}/suggestions:suggestConversationSummary",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SuggestConversationSummaryProjectsConversationsSuggestionsRequest>;

export type SuggestConversationSummaryProjectsConversationsSuggestionsResponse =
  GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponse;
export const SuggestConversationSummaryProjectsConversationsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponse;

export type SuggestConversationSummaryProjectsConversationsSuggestionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const suggestConversationSummaryProjectsConversationsSuggestions: API.OperationMethod<
  SuggestConversationSummaryProjectsConversationsSuggestionsRequest,
  SuggestConversationSummaryProjectsConversationsSuggestionsResponse,
  SuggestConversationSummaryProjectsConversationsSuggestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SuggestConversationSummaryProjectsConversationsSuggestionsRequest,
  output: SuggestConversationSummaryProjectsConversationsSuggestionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GenerateProjectsConversationsSuggestionsRequest {
  conversation: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1GenerateSuggestionsRequest;
}

export const GenerateProjectsConversationsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversation: Schema.String.pipe(T.HttpPath("conversation")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1GenerateSuggestionsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+conversation}/suggestions:generate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateProjectsConversationsSuggestionsRequest>;

export type GenerateProjectsConversationsSuggestionsResponse =
  GoogleCloudDialogflowV2beta1GenerateSuggestionsResponse;
export const GenerateProjectsConversationsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1GenerateSuggestionsResponse;

export type GenerateProjectsConversationsSuggestionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const generateProjectsConversationsSuggestions: API.OperationMethod<
  GenerateProjectsConversationsSuggestionsRequest,
  GenerateProjectsConversationsSuggestionsResponse,
  GenerateProjectsConversationsSuggestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateProjectsConversationsSuggestionsRequest,
  output: GenerateProjectsConversationsSuggestionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetEncryptionSpecProjectsLocationsRequest {
  name: string;
}

export const GetEncryptionSpecProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetEncryptionSpecProjectsLocationsRequest>;

export type GetEncryptionSpecProjectsLocationsResponse =
  GoogleCloudDialogflowV2beta1EncryptionSpec;
export const GetEncryptionSpecProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1EncryptionSpec;

export type GetEncryptionSpecProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getEncryptionSpecProjectsLocations: API.OperationMethod<
  GetEncryptionSpecProjectsLocationsRequest,
  GetEncryptionSpecProjectsLocationsResponse,
  GetEncryptionSpecProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetEncryptionSpecProjectsLocationsRequest,
  output: GetEncryptionSpecProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteAgentProjectsLocationsRequest {
  parent: string;
}

export const DeleteAgentProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+parent}/agent" }),
    svc,
  ) as unknown as Schema.Schema<DeleteAgentProjectsLocationsRequest>;

export type DeleteAgentProjectsLocationsResponse = GoogleProtobufEmpty;
export const DeleteAgentProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteAgentProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteAgentProjectsLocations: API.OperationMethod<
  DeleteAgentProjectsLocationsRequest,
  DeleteAgentProjectsLocationsResponse,
  DeleteAgentProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAgentProjectsLocationsRequest,
  output: DeleteAgentProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsRequest {
  name: string;
  filter?: string;
  extraLocationTypes?: string[];
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse =
  GoogleCloudLocationListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudLocationListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

export const listProjectsLocations: API.PaginatedOperationMethod<
  ListProjectsLocationsRequest,
  ListProjectsLocationsResponse,
  ListProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRequest,
  output: ListProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetAgentProjectsLocationsRequest {
  parent: string;
}

export const GetAgentProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/agent" }),
    svc,
  ) as unknown as Schema.Schema<GetAgentProjectsLocationsRequest>;

export type GetAgentProjectsLocationsResponse =
  GoogleCloudDialogflowV2beta1Agent;
export const GetAgentProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Agent;

export type GetAgentProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getAgentProjectsLocations: API.OperationMethod<
  GetAgentProjectsLocationsRequest,
  GetAgentProjectsLocationsResponse,
  GetAgentProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAgentProjectsLocationsRequest,
  output: GetAgentProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsRequest {
  name: string;
}

export const GetProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRequest>;

export type GetProjectsLocationsResponse = GoogleCloudLocationLocation;
export const GetProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudLocationLocation;

export type GetProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

export const getProjectsLocations: API.OperationMethod<
  GetProjectsLocationsRequest,
  GetProjectsLocationsResponse,
  GetProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRequest,
  output: GetProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetAgentProjectsLocationsRequest {
  parent: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Agent;
}

export const SetAgentProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Agent).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2beta1/{+parent}/agent", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SetAgentProjectsLocationsRequest>;

export type SetAgentProjectsLocationsResponse =
  GoogleCloudDialogflowV2beta1Agent;
export const SetAgentProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Agent;

export type SetAgentProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const setAgentProjectsLocations: API.OperationMethod<
  SetAgentProjectsLocationsRequest,
  SetAgentProjectsLocationsResponse,
  SetAgentProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetAgentProjectsLocationsRequest,
  output: SetAgentProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GenerateProjectsLocationsStatelessSuggestionRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1GenerateStatelessSuggestionRequest;
}

export const GenerateProjectsLocationsStatelessSuggestionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1GenerateStatelessSuggestionRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/statelessSuggestion:generate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateProjectsLocationsStatelessSuggestionRequest>;

export type GenerateProjectsLocationsStatelessSuggestionResponse =
  GoogleCloudDialogflowV2beta1GenerateStatelessSuggestionResponse;
export const GenerateProjectsLocationsStatelessSuggestionResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1GenerateStatelessSuggestionResponse;

export type GenerateProjectsLocationsStatelessSuggestionError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const generateProjectsLocationsStatelessSuggestion: API.OperationMethod<
  GenerateProjectsLocationsStatelessSuggestionRequest,
  GenerateProjectsLocationsStatelessSuggestionResponse,
  GenerateProjectsLocationsStatelessSuggestionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateProjectsLocationsStatelessSuggestionRequest,
  output: GenerateProjectsLocationsStatelessSuggestionResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsToolsRequest {
  parent: string;
  toolId?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Tool;
}

export const CreateProjectsLocationsToolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    toolId: Schema.optional(Schema.String).pipe(T.HttpQuery("toolId")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Tool).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2beta1/{+parent}/tools", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsToolsRequest>;

export type CreateProjectsLocationsToolsResponse =
  GoogleCloudDialogflowV2beta1Tool;
export const CreateProjectsLocationsToolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Tool;

export type CreateProjectsLocationsToolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsTools: API.OperationMethod<
  CreateProjectsLocationsToolsRequest,
  CreateProjectsLocationsToolsResponse,
  CreateProjectsLocationsToolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsToolsRequest,
  output: CreateProjectsLocationsToolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsToolsRequest {
  name: string;
}

export const GetProjectsLocationsToolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsToolsRequest>;

export type GetProjectsLocationsToolsResponse =
  GoogleCloudDialogflowV2beta1Tool;
export const GetProjectsLocationsToolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Tool;

export type GetProjectsLocationsToolsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsTools: API.OperationMethod<
  GetProjectsLocationsToolsRequest,
  GetProjectsLocationsToolsResponse,
  GetProjectsLocationsToolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsToolsRequest,
  output: GetProjectsLocationsToolsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsToolsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Tool;
}

export const PatchProjectsLocationsToolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Tool).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsToolsRequest>;

export type PatchProjectsLocationsToolsResponse =
  GoogleCloudDialogflowV2beta1Tool;
export const PatchProjectsLocationsToolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Tool;

export type PatchProjectsLocationsToolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsTools: API.OperationMethod<
  PatchProjectsLocationsToolsRequest,
  PatchProjectsLocationsToolsResponse,
  PatchProjectsLocationsToolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsToolsRequest,
  output: PatchProjectsLocationsToolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsToolsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsToolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/tools" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsToolsRequest>;

export type ListProjectsLocationsToolsResponse =
  GoogleCloudDialogflowV2beta1ListToolsResponse;
export const ListProjectsLocationsToolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListToolsResponse;

export type ListProjectsLocationsToolsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsTools: API.PaginatedOperationMethod<
  ListProjectsLocationsToolsRequest,
  ListProjectsLocationsToolsResponse,
  ListProjectsLocationsToolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsToolsRequest,
  output: ListProjectsLocationsToolsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsToolsRequest {
  name: string;
}

export const DeleteProjectsLocationsToolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsToolsRequest>;

export type DeleteProjectsLocationsToolsResponse = GoogleProtobufEmpty;
export const DeleteProjectsLocationsToolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsToolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsTools: API.OperationMethod<
  DeleteProjectsLocationsToolsRequest,
  DeleteProjectsLocationsToolsResponse,
  DeleteProjectsLocationsToolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsToolsRequest,
  output: DeleteProjectsLocationsToolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsConversationsRequest {
  parent: string;
  conversationId?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Conversation;
}

export const CreateProjectsLocationsConversationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    conversationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("conversationId"),
    ),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Conversation).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/conversations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConversationsRequest>;

export type CreateProjectsLocationsConversationsResponse =
  GoogleCloudDialogflowV2beta1Conversation;
export const CreateProjectsLocationsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Conversation;

export type CreateProjectsLocationsConversationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsConversations: API.OperationMethod<
  CreateProjectsLocationsConversationsRequest,
  CreateProjectsLocationsConversationsResponse,
  CreateProjectsLocationsConversationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsConversationsRequest,
  output: CreateProjectsLocationsConversationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsConversationsRequest {
  name: string;
}

export const GetProjectsLocationsConversationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConversationsRequest>;

export type GetProjectsLocationsConversationsResponse =
  GoogleCloudDialogflowV2beta1Conversation;
export const GetProjectsLocationsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Conversation;

export type GetProjectsLocationsConversationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsConversations: API.OperationMethod<
  GetProjectsLocationsConversationsRequest,
  GetProjectsLocationsConversationsResponse,
  GetProjectsLocationsConversationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConversationsRequest,
  output: GetProjectsLocationsConversationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CompleteProjectsLocationsConversationsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1CompleteConversationRequest;
}

export const CompleteProjectsLocationsConversationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1CompleteConversationRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2beta1/{+name}:complete", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CompleteProjectsLocationsConversationsRequest>;

export type CompleteProjectsLocationsConversationsResponse =
  GoogleCloudDialogflowV2beta1Conversation;
export const CompleteProjectsLocationsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Conversation;

export type CompleteProjectsLocationsConversationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const completeProjectsLocationsConversations: API.OperationMethod<
  CompleteProjectsLocationsConversationsRequest,
  CompleteProjectsLocationsConversationsResponse,
  CompleteProjectsLocationsConversationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CompleteProjectsLocationsConversationsRequest,
  output: CompleteProjectsLocationsConversationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsConversationsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
  filter?: string;
}

export const ListProjectsLocationsConversationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/conversations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConversationsRequest>;

export type ListProjectsLocationsConversationsResponse =
  GoogleCloudDialogflowV2beta1ListConversationsResponse;
export const ListProjectsLocationsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListConversationsResponse;

export type ListProjectsLocationsConversationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsConversations: API.PaginatedOperationMethod<
  ListProjectsLocationsConversationsRequest,
  ListProjectsLocationsConversationsResponse,
  ListProjectsLocationsConversationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConversationsRequest,
  output: ListProjectsLocationsConversationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface IngestContextReferencesProjectsLocationsConversationsRequest {
  conversation: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1IngestContextReferencesRequest;
}

export const IngestContextReferencesProjectsLocationsConversationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversation: Schema.String.pipe(T.HttpPath("conversation")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1IngestContextReferencesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+conversation}:ingestContextReferences",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<IngestContextReferencesProjectsLocationsConversationsRequest>;

export type IngestContextReferencesProjectsLocationsConversationsResponse =
  GoogleCloudDialogflowV2beta1IngestContextReferencesResponse;
export const IngestContextReferencesProjectsLocationsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1IngestContextReferencesResponse;

export type IngestContextReferencesProjectsLocationsConversationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const ingestContextReferencesProjectsLocationsConversations: API.OperationMethod<
  IngestContextReferencesProjectsLocationsConversationsRequest,
  IngestContextReferencesProjectsLocationsConversationsResponse,
  IngestContextReferencesProjectsLocationsConversationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: IngestContextReferencesProjectsLocationsConversationsRequest,
  output: IngestContextReferencesProjectsLocationsConversationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsConversationsParticipantsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Participant;
}

export const CreateProjectsLocationsConversationsParticipantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Participant).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/participants",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConversationsParticipantsRequest>;

export type CreateProjectsLocationsConversationsParticipantsResponse =
  GoogleCloudDialogflowV2beta1Participant;
export const CreateProjectsLocationsConversationsParticipantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Participant;

export type CreateProjectsLocationsConversationsParticipantsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsConversationsParticipants: API.OperationMethod<
  CreateProjectsLocationsConversationsParticipantsRequest,
  CreateProjectsLocationsConversationsParticipantsResponse,
  CreateProjectsLocationsConversationsParticipantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsConversationsParticipantsRequest,
  output: CreateProjectsLocationsConversationsParticipantsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsConversationsParticipantsRequest {
  name: string;
}

export const GetProjectsLocationsConversationsParticipantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConversationsParticipantsRequest>;

export type GetProjectsLocationsConversationsParticipantsResponse =
  GoogleCloudDialogflowV2beta1Participant;
export const GetProjectsLocationsConversationsParticipantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Participant;

export type GetProjectsLocationsConversationsParticipantsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsConversationsParticipants: API.OperationMethod<
  GetProjectsLocationsConversationsParticipantsRequest,
  GetProjectsLocationsConversationsParticipantsResponse,
  GetProjectsLocationsConversationsParticipantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConversationsParticipantsRequest,
  output: GetProjectsLocationsConversationsParticipantsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsConversationsParticipantsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Participant;
}

export const PatchProjectsLocationsConversationsParticipantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Participant).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsConversationsParticipantsRequest>;

export type PatchProjectsLocationsConversationsParticipantsResponse =
  GoogleCloudDialogflowV2beta1Participant;
export const PatchProjectsLocationsConversationsParticipantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Participant;

export type PatchProjectsLocationsConversationsParticipantsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsConversationsParticipants: API.OperationMethod<
  PatchProjectsLocationsConversationsParticipantsRequest,
  PatchProjectsLocationsConversationsParticipantsResponse,
  PatchProjectsLocationsConversationsParticipantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsConversationsParticipantsRequest,
  output: PatchProjectsLocationsConversationsParticipantsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsConversationsParticipantsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsConversationsParticipantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/participants" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConversationsParticipantsRequest>;

export type ListProjectsLocationsConversationsParticipantsResponse =
  GoogleCloudDialogflowV2beta1ListParticipantsResponse;
export const ListProjectsLocationsConversationsParticipantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListParticipantsResponse;

export type ListProjectsLocationsConversationsParticipantsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsConversationsParticipants: API.PaginatedOperationMethod<
  ListProjectsLocationsConversationsParticipantsRequest,
  ListProjectsLocationsConversationsParticipantsResponse,
  ListProjectsLocationsConversationsParticipantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConversationsParticipantsRequest,
  output: ListProjectsLocationsConversationsParticipantsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface AnalyzeContentProjectsLocationsConversationsParticipantsRequest {
  participant: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1AnalyzeContentRequest;
}

export const AnalyzeContentProjectsLocationsConversationsParticipantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    participant: Schema.String.pipe(T.HttpPath("participant")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1AnalyzeContentRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+participant}:analyzeContent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AnalyzeContentProjectsLocationsConversationsParticipantsRequest>;

export type AnalyzeContentProjectsLocationsConversationsParticipantsResponse =
  GoogleCloudDialogflowV2beta1AnalyzeContentResponse;
export const AnalyzeContentProjectsLocationsConversationsParticipantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1AnalyzeContentResponse;

export type AnalyzeContentProjectsLocationsConversationsParticipantsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const analyzeContentProjectsLocationsConversationsParticipants: API.OperationMethod<
  AnalyzeContentProjectsLocationsConversationsParticipantsRequest,
  AnalyzeContentProjectsLocationsConversationsParticipantsResponse,
  AnalyzeContentProjectsLocationsConversationsParticipantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AnalyzeContentProjectsLocationsConversationsParticipantsRequest,
  output: AnalyzeContentProjectsLocationsConversationsParticipantsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SuggestSmartRepliesProjectsLocationsConversationsParticipantsSuggestionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1SuggestSmartRepliesRequest;
}

export const SuggestSmartRepliesProjectsLocationsConversationsParticipantsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestSmartRepliesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/suggestions:suggestSmartReplies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SuggestSmartRepliesProjectsLocationsConversationsParticipantsSuggestionsRequest>;

export type SuggestSmartRepliesProjectsLocationsConversationsParticipantsSuggestionsResponse =
  GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse;
export const SuggestSmartRepliesProjectsLocationsConversationsParticipantsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse;

export type SuggestSmartRepliesProjectsLocationsConversationsParticipantsSuggestionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const suggestSmartRepliesProjectsLocationsConversationsParticipantsSuggestions: API.OperationMethod<
  SuggestSmartRepliesProjectsLocationsConversationsParticipantsSuggestionsRequest,
  SuggestSmartRepliesProjectsLocationsConversationsParticipantsSuggestionsResponse,
  SuggestSmartRepliesProjectsLocationsConversationsParticipantsSuggestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    SuggestSmartRepliesProjectsLocationsConversationsParticipantsSuggestionsRequest,
  output:
    SuggestSmartRepliesProjectsLocationsConversationsParticipantsSuggestionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SuggestArticlesProjectsLocationsConversationsParticipantsSuggestionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1SuggestArticlesRequest;
}

export const SuggestArticlesProjectsLocationsConversationsParticipantsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestArticlesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/suggestions:suggestArticles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SuggestArticlesProjectsLocationsConversationsParticipantsSuggestionsRequest>;

export type SuggestArticlesProjectsLocationsConversationsParticipantsSuggestionsResponse =
  GoogleCloudDialogflowV2beta1SuggestArticlesResponse;
export const SuggestArticlesProjectsLocationsConversationsParticipantsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1SuggestArticlesResponse;

export type SuggestArticlesProjectsLocationsConversationsParticipantsSuggestionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const suggestArticlesProjectsLocationsConversationsParticipantsSuggestions: API.OperationMethod<
  SuggestArticlesProjectsLocationsConversationsParticipantsSuggestionsRequest,
  SuggestArticlesProjectsLocationsConversationsParticipantsSuggestionsResponse,
  SuggestArticlesProjectsLocationsConversationsParticipantsSuggestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    SuggestArticlesProjectsLocationsConversationsParticipantsSuggestionsRequest,
  output:
    SuggestArticlesProjectsLocationsConversationsParticipantsSuggestionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SuggestFaqAnswersProjectsLocationsConversationsParticipantsSuggestionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1SuggestFaqAnswersRequest;
}

export const SuggestFaqAnswersProjectsLocationsConversationsParticipantsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestFaqAnswersRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/suggestions:suggestFaqAnswers",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SuggestFaqAnswersProjectsLocationsConversationsParticipantsSuggestionsRequest>;

export type SuggestFaqAnswersProjectsLocationsConversationsParticipantsSuggestionsResponse =
  GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse;
export const SuggestFaqAnswersProjectsLocationsConversationsParticipantsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse;

export type SuggestFaqAnswersProjectsLocationsConversationsParticipantsSuggestionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const suggestFaqAnswersProjectsLocationsConversationsParticipantsSuggestions: API.OperationMethod<
  SuggestFaqAnswersProjectsLocationsConversationsParticipantsSuggestionsRequest,
  SuggestFaqAnswersProjectsLocationsConversationsParticipantsSuggestionsResponse,
  SuggestFaqAnswersProjectsLocationsConversationsParticipantsSuggestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    SuggestFaqAnswersProjectsLocationsConversationsParticipantsSuggestionsRequest,
  output:
    SuggestFaqAnswersProjectsLocationsConversationsParticipantsSuggestionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SuggestKnowledgeAssistProjectsLocationsConversationsParticipantsSuggestionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistRequest;
}

export const SuggestKnowledgeAssistProjectsLocationsConversationsParticipantsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/suggestions:suggestKnowledgeAssist",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SuggestKnowledgeAssistProjectsLocationsConversationsParticipantsSuggestionsRequest>;

export type SuggestKnowledgeAssistProjectsLocationsConversationsParticipantsSuggestionsResponse =
  GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse;
export const SuggestKnowledgeAssistProjectsLocationsConversationsParticipantsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse;

export type SuggestKnowledgeAssistProjectsLocationsConversationsParticipantsSuggestionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const suggestKnowledgeAssistProjectsLocationsConversationsParticipantsSuggestions: API.OperationMethod<
  SuggestKnowledgeAssistProjectsLocationsConversationsParticipantsSuggestionsRequest,
  SuggestKnowledgeAssistProjectsLocationsConversationsParticipantsSuggestionsResponse,
  SuggestKnowledgeAssistProjectsLocationsConversationsParticipantsSuggestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    SuggestKnowledgeAssistProjectsLocationsConversationsParticipantsSuggestionsRequest,
  output:
    SuggestKnowledgeAssistProjectsLocationsConversationsParticipantsSuggestionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchCreateProjectsLocationsConversationsMessagesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1BatchCreateMessagesRequest;
}

export const BatchCreateProjectsLocationsConversationsMessagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1BatchCreateMessagesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/messages:batchCreate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchCreateProjectsLocationsConversationsMessagesRequest>;

export type BatchCreateProjectsLocationsConversationsMessagesResponse =
  GoogleCloudDialogflowV2beta1BatchCreateMessagesResponse;
export const BatchCreateProjectsLocationsConversationsMessagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1BatchCreateMessagesResponse;

export type BatchCreateProjectsLocationsConversationsMessagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const batchCreateProjectsLocationsConversationsMessages: API.OperationMethod<
  BatchCreateProjectsLocationsConversationsMessagesRequest,
  BatchCreateProjectsLocationsConversationsMessagesResponse,
  BatchCreateProjectsLocationsConversationsMessagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchCreateProjectsLocationsConversationsMessagesRequest,
  output: BatchCreateProjectsLocationsConversationsMessagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsConversationsMessagesRequest {
  filter?: string;
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsConversationsMessagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/messages" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConversationsMessagesRequest>;

export type ListProjectsLocationsConversationsMessagesResponse =
  GoogleCloudDialogflowV2beta1ListMessagesResponse;
export const ListProjectsLocationsConversationsMessagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListMessagesResponse;

export type ListProjectsLocationsConversationsMessagesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsConversationsMessages: API.PaginatedOperationMethod<
  ListProjectsLocationsConversationsMessagesRequest,
  ListProjectsLocationsConversationsMessagesResponse,
  ListProjectsLocationsConversationsMessagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConversationsMessagesRequest,
  output: ListProjectsLocationsConversationsMessagesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SuggestConversationSummaryProjectsLocationsConversationsSuggestionsRequest {
  conversation: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1SuggestConversationSummaryRequest;
}

export const SuggestConversationSummaryProjectsLocationsConversationsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversation: Schema.String.pipe(T.HttpPath("conversation")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestConversationSummaryRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+conversation}/suggestions:suggestConversationSummary",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SuggestConversationSummaryProjectsLocationsConversationsSuggestionsRequest>;

export type SuggestConversationSummaryProjectsLocationsConversationsSuggestionsResponse =
  GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponse;
export const SuggestConversationSummaryProjectsLocationsConversationsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponse;

export type SuggestConversationSummaryProjectsLocationsConversationsSuggestionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const suggestConversationSummaryProjectsLocationsConversationsSuggestions: API.OperationMethod<
  SuggestConversationSummaryProjectsLocationsConversationsSuggestionsRequest,
  SuggestConversationSummaryProjectsLocationsConversationsSuggestionsResponse,
  SuggestConversationSummaryProjectsLocationsConversationsSuggestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    SuggestConversationSummaryProjectsLocationsConversationsSuggestionsRequest,
  output:
    SuggestConversationSummaryProjectsLocationsConversationsSuggestionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GenerateProjectsLocationsConversationsSuggestionsRequest {
  conversation: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1GenerateSuggestionsRequest;
}

export const GenerateProjectsLocationsConversationsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversation: Schema.String.pipe(T.HttpPath("conversation")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1GenerateSuggestionsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+conversation}/suggestions:generate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateProjectsLocationsConversationsSuggestionsRequest>;

export type GenerateProjectsLocationsConversationsSuggestionsResponse =
  GoogleCloudDialogflowV2beta1GenerateSuggestionsResponse;
export const GenerateProjectsLocationsConversationsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1GenerateSuggestionsResponse;

export type GenerateProjectsLocationsConversationsSuggestionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const generateProjectsLocationsConversationsSuggestions: API.OperationMethod<
  GenerateProjectsLocationsConversationsSuggestionsRequest,
  GenerateProjectsLocationsConversationsSuggestionsResponse,
  GenerateProjectsLocationsConversationsSuggestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateProjectsLocationsConversationsSuggestionsRequest,
  output: GenerateProjectsLocationsConversationsSuggestionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SearchKnowledgeProjectsLocationsConversationsSuggestionsRequest {
  conversation: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1SearchKnowledgeRequest;
}

export const SearchKnowledgeProjectsLocationsConversationsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversation: Schema.String.pipe(T.HttpPath("conversation")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1SearchKnowledgeRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+conversation}/suggestions:searchKnowledge",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SearchKnowledgeProjectsLocationsConversationsSuggestionsRequest>;

export type SearchKnowledgeProjectsLocationsConversationsSuggestionsResponse =
  GoogleCloudDialogflowV2beta1SearchKnowledgeResponse;
export const SearchKnowledgeProjectsLocationsConversationsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1SearchKnowledgeResponse;

export type SearchKnowledgeProjectsLocationsConversationsSuggestionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const searchKnowledgeProjectsLocationsConversationsSuggestions: API.OperationMethod<
  SearchKnowledgeProjectsLocationsConversationsSuggestionsRequest,
  SearchKnowledgeProjectsLocationsConversationsSuggestionsResponse,
  SearchKnowledgeProjectsLocationsConversationsSuggestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchKnowledgeProjectsLocationsConversationsSuggestionsRequest,
  output: SearchKnowledgeProjectsLocationsConversationsSuggestionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsGeneratorsRequest {
  parent: string;
  generatorId?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Generator;
}

export const CreateProjectsLocationsGeneratorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    generatorId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("generatorId"),
    ),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Generator).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/generators",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsGeneratorsRequest>;

export type CreateProjectsLocationsGeneratorsResponse =
  GoogleCloudDialogflowV2beta1Generator;
export const CreateProjectsLocationsGeneratorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Generator;

export type CreateProjectsLocationsGeneratorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsGenerators: API.OperationMethod<
  CreateProjectsLocationsGeneratorsRequest,
  CreateProjectsLocationsGeneratorsResponse,
  CreateProjectsLocationsGeneratorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsGeneratorsRequest,
  output: CreateProjectsLocationsGeneratorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsGeneratorsRequest {
  name: string;
}

export const GetProjectsLocationsGeneratorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsGeneratorsRequest>;

export type GetProjectsLocationsGeneratorsResponse =
  GoogleCloudDialogflowV2beta1Generator;
export const GetProjectsLocationsGeneratorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Generator;

export type GetProjectsLocationsGeneratorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsGenerators: API.OperationMethod<
  GetProjectsLocationsGeneratorsRequest,
  GetProjectsLocationsGeneratorsResponse,
  GetProjectsLocationsGeneratorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGeneratorsRequest,
  output: GetProjectsLocationsGeneratorsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsGeneratorsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Generator;
}

export const PatchProjectsLocationsGeneratorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Generator).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsGeneratorsRequest>;

export type PatchProjectsLocationsGeneratorsResponse =
  GoogleCloudDialogflowV2beta1Generator;
export const PatchProjectsLocationsGeneratorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Generator;

export type PatchProjectsLocationsGeneratorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsGenerators: API.OperationMethod<
  PatchProjectsLocationsGeneratorsRequest,
  PatchProjectsLocationsGeneratorsResponse,
  PatchProjectsLocationsGeneratorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsGeneratorsRequest,
  output: PatchProjectsLocationsGeneratorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsGeneratorsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsGeneratorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/generators" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsGeneratorsRequest>;

export type ListProjectsLocationsGeneratorsResponse =
  GoogleCloudDialogflowV2beta1ListGeneratorsResponse;
export const ListProjectsLocationsGeneratorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListGeneratorsResponse;

export type ListProjectsLocationsGeneratorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsGenerators: API.PaginatedOperationMethod<
  ListProjectsLocationsGeneratorsRequest,
  ListProjectsLocationsGeneratorsResponse,
  ListProjectsLocationsGeneratorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGeneratorsRequest,
  output: ListProjectsLocationsGeneratorsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsGeneratorsRequest {
  name: string;
}

export const DeleteProjectsLocationsGeneratorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsGeneratorsRequest>;

export type DeleteProjectsLocationsGeneratorsResponse = GoogleProtobufEmpty;
export const DeleteProjectsLocationsGeneratorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsGeneratorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsGenerators: API.OperationMethod<
  DeleteProjectsLocationsGeneratorsRequest,
  DeleteProjectsLocationsGeneratorsResponse,
  DeleteProjectsLocationsGeneratorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsGeneratorsRequest,
  output: DeleteProjectsLocationsGeneratorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsGeneratorsEvaluationsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1GeneratorEvaluation;
}

export const CreateProjectsLocationsGeneratorsEvaluationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1GeneratorEvaluation).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/evaluations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsGeneratorsEvaluationsRequest>;

export type CreateProjectsLocationsGeneratorsEvaluationsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsGeneratorsEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsGeneratorsEvaluationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsGeneratorsEvaluations: API.OperationMethod<
  CreateProjectsLocationsGeneratorsEvaluationsRequest,
  CreateProjectsLocationsGeneratorsEvaluationsResponse,
  CreateProjectsLocationsGeneratorsEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsGeneratorsEvaluationsRequest,
  output: CreateProjectsLocationsGeneratorsEvaluationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsGeneratorsEvaluationsRequest {
  name: string;
}

export const GetProjectsLocationsGeneratorsEvaluationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsGeneratorsEvaluationsRequest>;

export type GetProjectsLocationsGeneratorsEvaluationsResponse =
  GoogleCloudDialogflowV2beta1GeneratorEvaluation;
export const GetProjectsLocationsGeneratorsEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1GeneratorEvaluation;

export type GetProjectsLocationsGeneratorsEvaluationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsGeneratorsEvaluations: API.OperationMethod<
  GetProjectsLocationsGeneratorsEvaluationsRequest,
  GetProjectsLocationsGeneratorsEvaluationsResponse,
  GetProjectsLocationsGeneratorsEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGeneratorsEvaluationsRequest,
  output: GetProjectsLocationsGeneratorsEvaluationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsGeneratorsEvaluationsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsGeneratorsEvaluationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/evaluations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsGeneratorsEvaluationsRequest>;

export type ListProjectsLocationsGeneratorsEvaluationsResponse =
  GoogleCloudDialogflowV2beta1ListGeneratorEvaluationsResponse;
export const ListProjectsLocationsGeneratorsEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListGeneratorEvaluationsResponse;

export type ListProjectsLocationsGeneratorsEvaluationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsGeneratorsEvaluations: API.PaginatedOperationMethod<
  ListProjectsLocationsGeneratorsEvaluationsRequest,
  ListProjectsLocationsGeneratorsEvaluationsResponse,
  ListProjectsLocationsGeneratorsEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGeneratorsEvaluationsRequest,
  output: ListProjectsLocationsGeneratorsEvaluationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsGeneratorsEvaluationsRequest {
  name: string;
}

export const DeleteProjectsLocationsGeneratorsEvaluationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsGeneratorsEvaluationsRequest>;

export type DeleteProjectsLocationsGeneratorsEvaluationsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsGeneratorsEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsGeneratorsEvaluationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsGeneratorsEvaluations: API.OperationMethod<
  DeleteProjectsLocationsGeneratorsEvaluationsRequest,
  DeleteProjectsLocationsGeneratorsEvaluationsResponse,
  DeleteProjectsLocationsGeneratorsEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsGeneratorsEvaluationsRequest,
  output: DeleteProjectsLocationsGeneratorsEvaluationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAnswerRecordsRequest {
  name: string;
}

export const GetProjectsLocationsAnswerRecordsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAnswerRecordsRequest>;

export type GetProjectsLocationsAnswerRecordsResponse =
  GoogleCloudDialogflowV2beta1AnswerRecord;
export const GetProjectsLocationsAnswerRecordsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1AnswerRecord;

export type GetProjectsLocationsAnswerRecordsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAnswerRecords: API.OperationMethod<
  GetProjectsLocationsAnswerRecordsRequest,
  GetProjectsLocationsAnswerRecordsResponse,
  GetProjectsLocationsAnswerRecordsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAnswerRecordsRequest,
  output: GetProjectsLocationsAnswerRecordsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsAnswerRecordsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
  filter?: string;
}

export const ListProjectsLocationsAnswerRecordsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/answerRecords" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAnswerRecordsRequest>;

export type ListProjectsLocationsAnswerRecordsResponse =
  GoogleCloudDialogflowV2beta1ListAnswerRecordsResponse;
export const ListProjectsLocationsAnswerRecordsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListAnswerRecordsResponse;

export type ListProjectsLocationsAnswerRecordsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAnswerRecords: API.PaginatedOperationMethod<
  ListProjectsLocationsAnswerRecordsRequest,
  ListProjectsLocationsAnswerRecordsResponse,
  ListProjectsLocationsAnswerRecordsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAnswerRecordsRequest,
  output: ListProjectsLocationsAnswerRecordsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsAnswerRecordsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1AnswerRecord;
}

export const PatchProjectsLocationsAnswerRecordsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1AnswerRecord).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAnswerRecordsRequest>;

export type PatchProjectsLocationsAnswerRecordsResponse =
  GoogleCloudDialogflowV2beta1AnswerRecord;
export const PatchProjectsLocationsAnswerRecordsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1AnswerRecord;

export type PatchProjectsLocationsAnswerRecordsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsAnswerRecords: API.OperationMethod<
  PatchProjectsLocationsAnswerRecordsRequest,
  PatchProjectsLocationsAnswerRecordsResponse,
  PatchProjectsLocationsAnswerRecordsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAnswerRecordsRequest,
  output: PatchProjectsLocationsAnswerRecordsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GenerateStatelessSummaryProjectsLocationsSuggestionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1GenerateStatelessSummaryRequest;
}

export const GenerateStatelessSummaryProjectsLocationsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1GenerateStatelessSummaryRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/suggestions:generateStatelessSummary",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateStatelessSummaryProjectsLocationsSuggestionsRequest>;

export type GenerateStatelessSummaryProjectsLocationsSuggestionsResponse =
  GoogleCloudDialogflowV2beta1GenerateStatelessSummaryResponse;
export const GenerateStatelessSummaryProjectsLocationsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1GenerateStatelessSummaryResponse;

export type GenerateStatelessSummaryProjectsLocationsSuggestionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const generateStatelessSummaryProjectsLocationsSuggestions: API.OperationMethod<
  GenerateStatelessSummaryProjectsLocationsSuggestionsRequest,
  GenerateStatelessSummaryProjectsLocationsSuggestionsResponse,
  GenerateStatelessSummaryProjectsLocationsSuggestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateStatelessSummaryProjectsLocationsSuggestionsRequest,
  output: GenerateStatelessSummaryProjectsLocationsSuggestionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SearchKnowledgeProjectsLocationsSuggestionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1SearchKnowledgeRequest;
}

export const SearchKnowledgeProjectsLocationsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1SearchKnowledgeRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/suggestions:searchKnowledge",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SearchKnowledgeProjectsLocationsSuggestionsRequest>;

export type SearchKnowledgeProjectsLocationsSuggestionsResponse =
  GoogleCloudDialogflowV2beta1SearchKnowledgeResponse;
export const SearchKnowledgeProjectsLocationsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1SearchKnowledgeResponse;

export type SearchKnowledgeProjectsLocationsSuggestionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const searchKnowledgeProjectsLocationsSuggestions: API.OperationMethod<
  SearchKnowledgeProjectsLocationsSuggestionsRequest,
  SearchKnowledgeProjectsLocationsSuggestionsResponse,
  SearchKnowledgeProjectsLocationsSuggestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchKnowledgeProjectsLocationsSuggestionsRequest,
  output: SearchKnowledgeProjectsLocationsSuggestionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsKnowledgeBasesRequest {
  filter?: string;
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsKnowledgeBasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/knowledgeBases" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsKnowledgeBasesRequest>;

export type ListProjectsLocationsKnowledgeBasesResponse =
  GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse;
export const ListProjectsLocationsKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse;

export type ListProjectsLocationsKnowledgeBasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsKnowledgeBases: API.PaginatedOperationMethod<
  ListProjectsLocationsKnowledgeBasesRequest,
  ListProjectsLocationsKnowledgeBasesResponse,
  ListProjectsLocationsKnowledgeBasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsKnowledgeBasesRequest,
  output: ListProjectsLocationsKnowledgeBasesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsKnowledgeBasesRequest {
  name: string;
  force?: boolean;
}

export const DeleteProjectsLocationsKnowledgeBasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsKnowledgeBasesRequest>;

export type DeleteProjectsLocationsKnowledgeBasesResponse = GoogleProtobufEmpty;
export const DeleteProjectsLocationsKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsKnowledgeBasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsKnowledgeBases: API.OperationMethod<
  DeleteProjectsLocationsKnowledgeBasesRequest,
  DeleteProjectsLocationsKnowledgeBasesResponse,
  DeleteProjectsLocationsKnowledgeBasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsKnowledgeBasesRequest,
  output: DeleteProjectsLocationsKnowledgeBasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsKnowledgeBasesRequest {
  name: string;
}

export const GetProjectsLocationsKnowledgeBasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsKnowledgeBasesRequest>;

export type GetProjectsLocationsKnowledgeBasesResponse =
  GoogleCloudDialogflowV2beta1KnowledgeBase;
export const GetProjectsLocationsKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1KnowledgeBase;

export type GetProjectsLocationsKnowledgeBasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsKnowledgeBases: API.OperationMethod<
  GetProjectsLocationsKnowledgeBasesRequest,
  GetProjectsLocationsKnowledgeBasesResponse,
  GetProjectsLocationsKnowledgeBasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsKnowledgeBasesRequest,
  output: GetProjectsLocationsKnowledgeBasesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsKnowledgeBasesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1KnowledgeBase;
}

export const CreateProjectsLocationsKnowledgeBasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1KnowledgeBase).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/knowledgeBases",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsKnowledgeBasesRequest>;

export type CreateProjectsLocationsKnowledgeBasesResponse =
  GoogleCloudDialogflowV2beta1KnowledgeBase;
export const CreateProjectsLocationsKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1KnowledgeBase;

export type CreateProjectsLocationsKnowledgeBasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsKnowledgeBases: API.OperationMethod<
  CreateProjectsLocationsKnowledgeBasesRequest,
  CreateProjectsLocationsKnowledgeBasesResponse,
  CreateProjectsLocationsKnowledgeBasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsKnowledgeBasesRequest,
  output: CreateProjectsLocationsKnowledgeBasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsKnowledgeBasesRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1KnowledgeBase;
}

export const PatchProjectsLocationsKnowledgeBasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1KnowledgeBase).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsKnowledgeBasesRequest>;

export type PatchProjectsLocationsKnowledgeBasesResponse =
  GoogleCloudDialogflowV2beta1KnowledgeBase;
export const PatchProjectsLocationsKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1KnowledgeBase;

export type PatchProjectsLocationsKnowledgeBasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsKnowledgeBases: API.OperationMethod<
  PatchProjectsLocationsKnowledgeBasesRequest,
  PatchProjectsLocationsKnowledgeBasesResponse,
  PatchProjectsLocationsKnowledgeBasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsKnowledgeBasesRequest,
  output: PatchProjectsLocationsKnowledgeBasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ReloadProjectsLocationsKnowledgeBasesDocumentsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1ReloadDocumentRequest;
}

export const ReloadProjectsLocationsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1ReloadDocumentRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2beta1/{+name}:reload", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ReloadProjectsLocationsKnowledgeBasesDocumentsRequest>;

export type ReloadProjectsLocationsKnowledgeBasesDocumentsResponse =
  GoogleLongrunningOperation;
export const ReloadProjectsLocationsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ReloadProjectsLocationsKnowledgeBasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const reloadProjectsLocationsKnowledgeBasesDocuments: API.OperationMethod<
  ReloadProjectsLocationsKnowledgeBasesDocumentsRequest,
  ReloadProjectsLocationsKnowledgeBasesDocumentsResponse,
  ReloadProjectsLocationsKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReloadProjectsLocationsKnowledgeBasesDocumentsRequest,
  output: ReloadProjectsLocationsKnowledgeBasesDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsKnowledgeBasesDocumentsRequest {
  filter?: string;
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/documents" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsKnowledgeBasesDocumentsRequest>;

export type ListProjectsLocationsKnowledgeBasesDocumentsResponse =
  GoogleCloudDialogflowV2beta1ListDocumentsResponse;
export const ListProjectsLocationsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListDocumentsResponse;

export type ListProjectsLocationsKnowledgeBasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsKnowledgeBasesDocuments: API.PaginatedOperationMethod<
  ListProjectsLocationsKnowledgeBasesDocumentsRequest,
  ListProjectsLocationsKnowledgeBasesDocumentsResponse,
  ListProjectsLocationsKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsKnowledgeBasesDocumentsRequest,
  output: ListProjectsLocationsKnowledgeBasesDocumentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsKnowledgeBasesDocumentsRequest {
  name: string;
}

export const DeleteProjectsLocationsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsKnowledgeBasesDocumentsRequest>;

export type DeleteProjectsLocationsKnowledgeBasesDocumentsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsKnowledgeBasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsKnowledgeBasesDocuments: API.OperationMethod<
  DeleteProjectsLocationsKnowledgeBasesDocumentsRequest,
  DeleteProjectsLocationsKnowledgeBasesDocumentsResponse,
  DeleteProjectsLocationsKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsKnowledgeBasesDocumentsRequest,
  output: DeleteProjectsLocationsKnowledgeBasesDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ImportProjectsLocationsKnowledgeBasesDocumentsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1ImportDocumentsRequest;
}

export const ImportProjectsLocationsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1ImportDocumentsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/documents:import",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ImportProjectsLocationsKnowledgeBasesDocumentsRequest>;

export type ImportProjectsLocationsKnowledgeBasesDocumentsResponse =
  GoogleLongrunningOperation;
export const ImportProjectsLocationsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ImportProjectsLocationsKnowledgeBasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const importProjectsLocationsKnowledgeBasesDocuments: API.OperationMethod<
  ImportProjectsLocationsKnowledgeBasesDocumentsRequest,
  ImportProjectsLocationsKnowledgeBasesDocumentsResponse,
  ImportProjectsLocationsKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportProjectsLocationsKnowledgeBasesDocumentsRequest,
  output: ImportProjectsLocationsKnowledgeBasesDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsKnowledgeBasesDocumentsRequest {
  name: string;
}

export const GetProjectsLocationsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsKnowledgeBasesDocumentsRequest>;

export type GetProjectsLocationsKnowledgeBasesDocumentsResponse =
  GoogleCloudDialogflowV2beta1Document;
export const GetProjectsLocationsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Document;

export type GetProjectsLocationsKnowledgeBasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsKnowledgeBasesDocuments: API.OperationMethod<
  GetProjectsLocationsKnowledgeBasesDocumentsRequest,
  GetProjectsLocationsKnowledgeBasesDocumentsResponse,
  GetProjectsLocationsKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsKnowledgeBasesDocumentsRequest,
  output: GetProjectsLocationsKnowledgeBasesDocumentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsKnowledgeBasesDocumentsRequest {
  parent: string;
  importGcsCustomMetadata?: boolean;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Document;
}

export const CreateProjectsLocationsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    importGcsCustomMetadata: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("importGcsCustomMetadata"),
    ),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Document).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/documents",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsKnowledgeBasesDocumentsRequest>;

export type CreateProjectsLocationsKnowledgeBasesDocumentsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsKnowledgeBasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsKnowledgeBasesDocuments: API.OperationMethod<
  CreateProjectsLocationsKnowledgeBasesDocumentsRequest,
  CreateProjectsLocationsKnowledgeBasesDocumentsResponse,
  CreateProjectsLocationsKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsKnowledgeBasesDocumentsRequest,
  output: CreateProjectsLocationsKnowledgeBasesDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsKnowledgeBasesDocumentsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Document;
}

export const PatchProjectsLocationsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Document).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsKnowledgeBasesDocumentsRequest>;

export type PatchProjectsLocationsKnowledgeBasesDocumentsResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsKnowledgeBasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsKnowledgeBasesDocuments: API.OperationMethod<
  PatchProjectsLocationsKnowledgeBasesDocumentsRequest,
  PatchProjectsLocationsKnowledgeBasesDocumentsResponse,
  PatchProjectsLocationsKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsKnowledgeBasesDocumentsRequest,
  output: PatchProjectsLocationsKnowledgeBasesDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsOperationsRequest {
  pageSize?: number;
  name: string;
  filter?: string;
  pageToken?: string;
  returnPartialSuccess?: boolean;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse =
  GoogleLongrunningListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningListOperationsResponse;

export type ListProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsOperationsRequest,
  ListProjectsLocationsOperationsResponse,
  ListProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOperationsRequest,
  output: ListProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsOperationsRequest {
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsOperationsRequest>;

export type GetProjectsLocationsOperationsResponse = GoogleLongrunningOperation;
export const GetProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type GetProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsOperations: API.OperationMethod<
  GetProjectsLocationsOperationsRequest,
  GetProjectsLocationsOperationsResponse,
  GetProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOperationsRequest,
  output: GetProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CancelProjectsLocationsOperationsRequest {
  name: string;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "POST", path: "v2beta1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsOperationsRequest>;

export type CancelProjectsLocationsOperationsResponse = GoogleProtobufEmpty;
export const CancelProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsOperationsRequest,
  output: CancelProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsPhoneNumbersRequest {
  showDeleted?: boolean;
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsPhoneNumbersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    showDeleted: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showDeleted"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/phoneNumbers" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsPhoneNumbersRequest>;

export type ListProjectsLocationsPhoneNumbersResponse =
  GoogleCloudDialogflowV2beta1ListPhoneNumbersResponse;
export const ListProjectsLocationsPhoneNumbersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListPhoneNumbersResponse;

export type ListProjectsLocationsPhoneNumbersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsPhoneNumbers: API.PaginatedOperationMethod<
  ListProjectsLocationsPhoneNumbersRequest,
  ListProjectsLocationsPhoneNumbersResponse,
  ListProjectsLocationsPhoneNumbersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsPhoneNumbersRequest,
  output: ListProjectsLocationsPhoneNumbersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsPhoneNumbersRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1PhoneNumber;
}

export const PatchProjectsLocationsPhoneNumbersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1PhoneNumber).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsPhoneNumbersRequest>;

export type PatchProjectsLocationsPhoneNumbersResponse =
  GoogleCloudDialogflowV2beta1PhoneNumber;
export const PatchProjectsLocationsPhoneNumbersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1PhoneNumber;

export type PatchProjectsLocationsPhoneNumbersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsPhoneNumbers: API.OperationMethod<
  PatchProjectsLocationsPhoneNumbersRequest,
  PatchProjectsLocationsPhoneNumbersResponse,
  PatchProjectsLocationsPhoneNumbersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsPhoneNumbersRequest,
  output: PatchProjectsLocationsPhoneNumbersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsPhoneNumbersRequest {
  name: string;
}

export const DeleteProjectsLocationsPhoneNumbersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsPhoneNumbersRequest>;

export type DeleteProjectsLocationsPhoneNumbersResponse =
  GoogleCloudDialogflowV2beta1PhoneNumber;
export const DeleteProjectsLocationsPhoneNumbersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1PhoneNumber;

export type DeleteProjectsLocationsPhoneNumbersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsPhoneNumbers: API.OperationMethod<
  DeleteProjectsLocationsPhoneNumbersRequest,
  DeleteProjectsLocationsPhoneNumbersResponse,
  DeleteProjectsLocationsPhoneNumbersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsPhoneNumbersRequest,
  output: DeleteProjectsLocationsPhoneNumbersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UndeleteProjectsLocationsPhoneNumbersRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1UndeletePhoneNumberRequest;
}

export const UndeleteProjectsLocationsPhoneNumbersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1UndeletePhoneNumberRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2beta1/{+name}:undelete", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UndeleteProjectsLocationsPhoneNumbersRequest>;

export type UndeleteProjectsLocationsPhoneNumbersResponse =
  GoogleCloudDialogflowV2beta1PhoneNumber;
export const UndeleteProjectsLocationsPhoneNumbersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1PhoneNumber;

export type UndeleteProjectsLocationsPhoneNumbersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const undeleteProjectsLocationsPhoneNumbers: API.OperationMethod<
  UndeleteProjectsLocationsPhoneNumbersRequest,
  UndeleteProjectsLocationsPhoneNumbersResponse,
  UndeleteProjectsLocationsPhoneNumbersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UndeleteProjectsLocationsPhoneNumbersRequest,
  output: UndeleteProjectsLocationsPhoneNumbersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsSipTrunksRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1SipTrunk;
}

export const CreateProjectsLocationsSipTrunksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1SipTrunk).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/sipTrunks",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsSipTrunksRequest>;

export type CreateProjectsLocationsSipTrunksResponse =
  GoogleCloudDialogflowV2beta1SipTrunk;
export const CreateProjectsLocationsSipTrunksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1SipTrunk;

export type CreateProjectsLocationsSipTrunksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsSipTrunks: API.OperationMethod<
  CreateProjectsLocationsSipTrunksRequest,
  CreateProjectsLocationsSipTrunksResponse,
  CreateProjectsLocationsSipTrunksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsSipTrunksRequest,
  output: CreateProjectsLocationsSipTrunksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsSipTrunksRequest {
  name: string;
}

export const GetProjectsLocationsSipTrunksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSipTrunksRequest>;

export type GetProjectsLocationsSipTrunksResponse =
  GoogleCloudDialogflowV2beta1SipTrunk;
export const GetProjectsLocationsSipTrunksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1SipTrunk;

export type GetProjectsLocationsSipTrunksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsSipTrunks: API.OperationMethod<
  GetProjectsLocationsSipTrunksRequest,
  GetProjectsLocationsSipTrunksResponse,
  GetProjectsLocationsSipTrunksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSipTrunksRequest,
  output: GetProjectsLocationsSipTrunksResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsSipTrunksRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1SipTrunk;
}

export const PatchProjectsLocationsSipTrunksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1SipTrunk).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsSipTrunksRequest>;

export type PatchProjectsLocationsSipTrunksResponse =
  GoogleCloudDialogflowV2beta1SipTrunk;
export const PatchProjectsLocationsSipTrunksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1SipTrunk;

export type PatchProjectsLocationsSipTrunksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsSipTrunks: API.OperationMethod<
  PatchProjectsLocationsSipTrunksRequest,
  PatchProjectsLocationsSipTrunksResponse,
  PatchProjectsLocationsSipTrunksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsSipTrunksRequest,
  output: PatchProjectsLocationsSipTrunksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsSipTrunksRequest {
  name: string;
}

export const DeleteProjectsLocationsSipTrunksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsSipTrunksRequest>;

export type DeleteProjectsLocationsSipTrunksResponse = GoogleProtobufEmpty;
export const DeleteProjectsLocationsSipTrunksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsSipTrunksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsSipTrunks: API.OperationMethod<
  DeleteProjectsLocationsSipTrunksRequest,
  DeleteProjectsLocationsSipTrunksResponse,
  DeleteProjectsLocationsSipTrunksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSipTrunksRequest,
  output: DeleteProjectsLocationsSipTrunksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsSipTrunksRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsSipTrunksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/sipTrunks" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSipTrunksRequest>;

export type ListProjectsLocationsSipTrunksResponse =
  GoogleCloudDialogflowV2beta1ListSipTrunksResponse;
export const ListProjectsLocationsSipTrunksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListSipTrunksResponse;

export type ListProjectsLocationsSipTrunksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsSipTrunks: API.PaginatedOperationMethod<
  ListProjectsLocationsSipTrunksRequest,
  ListProjectsLocationsSipTrunksResponse,
  ListProjectsLocationsSipTrunksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSipTrunksRequest,
  output: ListProjectsLocationsSipTrunksResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsConversationProfilesRequest {
  name: string;
}

export const GetProjectsLocationsConversationProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConversationProfilesRequest>;

export type GetProjectsLocationsConversationProfilesResponse =
  GoogleCloudDialogflowV2beta1ConversationProfile;
export const GetProjectsLocationsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ConversationProfile;

export type GetProjectsLocationsConversationProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsConversationProfiles: API.OperationMethod<
  GetProjectsLocationsConversationProfilesRequest,
  GetProjectsLocationsConversationProfilesResponse,
  GetProjectsLocationsConversationProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConversationProfilesRequest,
  output: GetProjectsLocationsConversationProfilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsConversationProfilesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1ConversationProfile;
}

export const CreateProjectsLocationsConversationProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1ConversationProfile).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/conversationProfiles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConversationProfilesRequest>;

export type CreateProjectsLocationsConversationProfilesResponse =
  GoogleCloudDialogflowV2beta1ConversationProfile;
export const CreateProjectsLocationsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ConversationProfile;

export type CreateProjectsLocationsConversationProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsConversationProfiles: API.OperationMethod<
  CreateProjectsLocationsConversationProfilesRequest,
  CreateProjectsLocationsConversationProfilesResponse,
  CreateProjectsLocationsConversationProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsConversationProfilesRequest,
  output: CreateProjectsLocationsConversationProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsConversationProfilesRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1ConversationProfile;
}

export const PatchProjectsLocationsConversationProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1ConversationProfile).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsConversationProfilesRequest>;

export type PatchProjectsLocationsConversationProfilesResponse =
  GoogleCloudDialogflowV2beta1ConversationProfile;
export const PatchProjectsLocationsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ConversationProfile;

export type PatchProjectsLocationsConversationProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsConversationProfiles: API.OperationMethod<
  PatchProjectsLocationsConversationProfilesRequest,
  PatchProjectsLocationsConversationProfilesResponse,
  PatchProjectsLocationsConversationProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsConversationProfilesRequest,
  output: PatchProjectsLocationsConversationProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ClearSuggestionFeatureConfigProjectsLocationsConversationProfilesRequest {
  conversationProfile: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequest;
}

export const ClearSuggestionFeatureConfigProjectsLocationsConversationProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationProfile: Schema.String.pipe(T.HttpPath("conversationProfile")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+conversationProfile}:clearSuggestionFeatureConfig",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ClearSuggestionFeatureConfigProjectsLocationsConversationProfilesRequest>;

export type ClearSuggestionFeatureConfigProjectsLocationsConversationProfilesResponse =
  GoogleLongrunningOperation;
export const ClearSuggestionFeatureConfigProjectsLocationsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ClearSuggestionFeatureConfigProjectsLocationsConversationProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const clearSuggestionFeatureConfigProjectsLocationsConversationProfiles: API.OperationMethod<
  ClearSuggestionFeatureConfigProjectsLocationsConversationProfilesRequest,
  ClearSuggestionFeatureConfigProjectsLocationsConversationProfilesResponse,
  ClearSuggestionFeatureConfigProjectsLocationsConversationProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    ClearSuggestionFeatureConfigProjectsLocationsConversationProfilesRequest,
  output:
    ClearSuggestionFeatureConfigProjectsLocationsConversationProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetSuggestionFeatureConfigProjectsLocationsConversationProfilesRequest {
  conversationProfile: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest;
}

export const SetSuggestionFeatureConfigProjectsLocationsConversationProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationProfile: Schema.String.pipe(T.HttpPath("conversationProfile")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+conversationProfile}:setSuggestionFeatureConfig",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetSuggestionFeatureConfigProjectsLocationsConversationProfilesRequest>;

export type SetSuggestionFeatureConfigProjectsLocationsConversationProfilesResponse =
  GoogleLongrunningOperation;
export const SetSuggestionFeatureConfigProjectsLocationsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type SetSuggestionFeatureConfigProjectsLocationsConversationProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const setSuggestionFeatureConfigProjectsLocationsConversationProfiles: API.OperationMethod<
  SetSuggestionFeatureConfigProjectsLocationsConversationProfilesRequest,
  SetSuggestionFeatureConfigProjectsLocationsConversationProfilesResponse,
  SetSuggestionFeatureConfigProjectsLocationsConversationProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetSuggestionFeatureConfigProjectsLocationsConversationProfilesRequest,
  output:
    SetSuggestionFeatureConfigProjectsLocationsConversationProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsConversationProfilesRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsConversationProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/conversationProfiles" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConversationProfilesRequest>;

export type ListProjectsLocationsConversationProfilesResponse =
  GoogleCloudDialogflowV2beta1ListConversationProfilesResponse;
export const ListProjectsLocationsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListConversationProfilesResponse;

export type ListProjectsLocationsConversationProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsConversationProfiles: API.PaginatedOperationMethod<
  ListProjectsLocationsConversationProfilesRequest,
  ListProjectsLocationsConversationProfilesResponse,
  ListProjectsLocationsConversationProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConversationProfilesRequest,
  output: ListProjectsLocationsConversationProfilesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsConversationProfilesRequest {
  name: string;
}

export const DeleteProjectsLocationsConversationProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsConversationProfilesRequest>;

export type DeleteProjectsLocationsConversationProfilesResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsConversationProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsConversationProfiles: API.OperationMethod<
  DeleteProjectsLocationsConversationProfilesRequest,
  DeleteProjectsLocationsConversationProfilesResponse,
  DeleteProjectsLocationsConversationProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsConversationProfilesRequest,
  output: DeleteProjectsLocationsConversationProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SearchProjectsLocationsAgentRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const SearchProjectsLocationsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/agent:search" }),
    svc,
  ) as unknown as Schema.Schema<SearchProjectsLocationsAgentRequest>;

export type SearchProjectsLocationsAgentResponse =
  GoogleCloudDialogflowV2beta1SearchAgentsResponse;
export const SearchProjectsLocationsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1SearchAgentsResponse;

export type SearchProjectsLocationsAgentError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const searchProjectsLocationsAgent: API.PaginatedOperationMethod<
  SearchProjectsLocationsAgentRequest,
  SearchProjectsLocationsAgentResponse,
  SearchProjectsLocationsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchProjectsLocationsAgentRequest,
  output: SearchProjectsLocationsAgentResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UpdateFulfillmentProjectsLocationsAgentRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Fulfillment;
}

export const UpdateFulfillmentProjectsLocationsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Fulfillment).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateFulfillmentProjectsLocationsAgentRequest>;

export type UpdateFulfillmentProjectsLocationsAgentResponse =
  GoogleCloudDialogflowV2beta1Fulfillment;
export const UpdateFulfillmentProjectsLocationsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Fulfillment;

export type UpdateFulfillmentProjectsLocationsAgentError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const updateFulfillmentProjectsLocationsAgent: API.OperationMethod<
  UpdateFulfillmentProjectsLocationsAgentRequest,
  UpdateFulfillmentProjectsLocationsAgentResponse,
  UpdateFulfillmentProjectsLocationsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateFulfillmentProjectsLocationsAgentRequest,
  output: UpdateFulfillmentProjectsLocationsAgentResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetFulfillmentProjectsLocationsAgentRequest {
  name: string;
}

export const GetFulfillmentProjectsLocationsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetFulfillmentProjectsLocationsAgentRequest>;

export type GetFulfillmentProjectsLocationsAgentResponse =
  GoogleCloudDialogflowV2beta1Fulfillment;
export const GetFulfillmentProjectsLocationsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Fulfillment;

export type GetFulfillmentProjectsLocationsAgentError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getFulfillmentProjectsLocationsAgent: API.OperationMethod<
  GetFulfillmentProjectsLocationsAgentRequest,
  GetFulfillmentProjectsLocationsAgentResponse,
  GetFulfillmentProjectsLocationsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFulfillmentProjectsLocationsAgentRequest,
  output: GetFulfillmentProjectsLocationsAgentResponse,
  errors: [NotFound, Forbidden],
}));

export interface ImportProjectsLocationsAgentRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1ImportAgentRequest;
}

export const ImportProjectsLocationsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1ImportAgentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/agent:import",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ImportProjectsLocationsAgentRequest>;

export type ImportProjectsLocationsAgentResponse = GoogleLongrunningOperation;
export const ImportProjectsLocationsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ImportProjectsLocationsAgentError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const importProjectsLocationsAgent: API.OperationMethod<
  ImportProjectsLocationsAgentRequest,
  ImportProjectsLocationsAgentResponse,
  ImportProjectsLocationsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportProjectsLocationsAgentRequest,
  output: ImportProjectsLocationsAgentResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExportProjectsLocationsAgentRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1ExportAgentRequest;
}

export const ExportProjectsLocationsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1ExportAgentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/agent:export",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExportProjectsLocationsAgentRequest>;

export type ExportProjectsLocationsAgentResponse = GoogleLongrunningOperation;
export const ExportProjectsLocationsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ExportProjectsLocationsAgentError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const exportProjectsLocationsAgent: API.OperationMethod<
  ExportProjectsLocationsAgentRequest,
  ExportProjectsLocationsAgentResponse,
  ExportProjectsLocationsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportProjectsLocationsAgentRequest,
  output: ExportProjectsLocationsAgentResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RestoreProjectsLocationsAgentRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1RestoreAgentRequest;
}

export const RestoreProjectsLocationsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1RestoreAgentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/agent:restore",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RestoreProjectsLocationsAgentRequest>;

export type RestoreProjectsLocationsAgentResponse = GoogleLongrunningOperation;
export const RestoreProjectsLocationsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type RestoreProjectsLocationsAgentError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const restoreProjectsLocationsAgent: API.OperationMethod<
  RestoreProjectsLocationsAgentRequest,
  RestoreProjectsLocationsAgentResponse,
  RestoreProjectsLocationsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RestoreProjectsLocationsAgentRequest,
  output: RestoreProjectsLocationsAgentResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TrainProjectsLocationsAgentRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1TrainAgentRequest;
}

export const TrainProjectsLocationsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1TrainAgentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/agent:train",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TrainProjectsLocationsAgentRequest>;

export type TrainProjectsLocationsAgentResponse = GoogleLongrunningOperation;
export const TrainProjectsLocationsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type TrainProjectsLocationsAgentError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const trainProjectsLocationsAgent: API.OperationMethod<
  TrainProjectsLocationsAgentRequest,
  TrainProjectsLocationsAgentResponse,
  TrainProjectsLocationsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TrainProjectsLocationsAgentRequest,
  output: TrainProjectsLocationsAgentResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetValidationResultProjectsLocationsAgentRequest {
  languageCode?: string;
  parent: string;
}

export const GetValidationResultProjectsLocationsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/agent/validationResult" }),
    svc,
  ) as unknown as Schema.Schema<GetValidationResultProjectsLocationsAgentRequest>;

export type GetValidationResultProjectsLocationsAgentResponse =
  GoogleCloudDialogflowV2beta1ValidationResult;
export const GetValidationResultProjectsLocationsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ValidationResult;

export type GetValidationResultProjectsLocationsAgentError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getValidationResultProjectsLocationsAgent: API.OperationMethod<
  GetValidationResultProjectsLocationsAgentRequest,
  GetValidationResultProjectsLocationsAgentResponse,
  GetValidationResultProjectsLocationsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetValidationResultProjectsLocationsAgentRequest,
  output: GetValidationResultProjectsLocationsAgentResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsAgentIntentsRequest {
  parent: string;
  pageToken?: string;
  pageSize?: number;
  intentView?: "INTENT_VIEW_UNSPECIFIED" | "INTENT_VIEW_FULL" | (string & {});
  languageCode?: string;
}

export const ListProjectsLocationsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    intentView: Schema.optional(Schema.String).pipe(T.HttpQuery("intentView")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/intents" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentIntentsRequest>;

export type ListProjectsLocationsAgentIntentsResponse =
  GoogleCloudDialogflowV2beta1ListIntentsResponse;
export const ListProjectsLocationsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListIntentsResponse;

export type ListProjectsLocationsAgentIntentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentIntents: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentIntentsRequest,
  ListProjectsLocationsAgentIntentsResponse,
  ListProjectsLocationsAgentIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentIntentsRequest,
  output: ListProjectsLocationsAgentIntentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsAgentIntentsRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentIntentsRequest>;

export type DeleteProjectsLocationsAgentIntentsResponse = GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentIntentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsAgentIntents: API.OperationMethod<
  DeleteProjectsLocationsAgentIntentsRequest,
  DeleteProjectsLocationsAgentIntentsResponse,
  DeleteProjectsLocationsAgentIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentIntentsRequest,
  output: DeleteProjectsLocationsAgentIntentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchUpdateProjectsLocationsAgentIntentsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequest;
}

export const BatchUpdateProjectsLocationsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/intents:batchUpdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchUpdateProjectsLocationsAgentIntentsRequest>;

export type BatchUpdateProjectsLocationsAgentIntentsResponse =
  GoogleLongrunningOperation;
export const BatchUpdateProjectsLocationsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type BatchUpdateProjectsLocationsAgentIntentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const batchUpdateProjectsLocationsAgentIntents: API.OperationMethod<
  BatchUpdateProjectsLocationsAgentIntentsRequest,
  BatchUpdateProjectsLocationsAgentIntentsResponse,
  BatchUpdateProjectsLocationsAgentIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchUpdateProjectsLocationsAgentIntentsRequest,
  output: BatchUpdateProjectsLocationsAgentIntentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchDeleteProjectsLocationsAgentIntentsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1BatchDeleteIntentsRequest;
}

export const BatchDeleteProjectsLocationsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1BatchDeleteIntentsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/intents:batchDelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchDeleteProjectsLocationsAgentIntentsRequest>;

export type BatchDeleteProjectsLocationsAgentIntentsResponse =
  GoogleLongrunningOperation;
export const BatchDeleteProjectsLocationsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type BatchDeleteProjectsLocationsAgentIntentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const batchDeleteProjectsLocationsAgentIntents: API.OperationMethod<
  BatchDeleteProjectsLocationsAgentIntentsRequest,
  BatchDeleteProjectsLocationsAgentIntentsResponse,
  BatchDeleteProjectsLocationsAgentIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchDeleteProjectsLocationsAgentIntentsRequest,
  output: BatchDeleteProjectsLocationsAgentIntentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentIntentsRequest {
  name: string;
  languageCode?: string;
  intentView?: "INTENT_VIEW_UNSPECIFIED" | "INTENT_VIEW_FULL" | (string & {});
}

export const GetProjectsLocationsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    intentView: Schema.optional(Schema.String).pipe(T.HttpQuery("intentView")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentIntentsRequest>;

export type GetProjectsLocationsAgentIntentsResponse =
  GoogleCloudDialogflowV2beta1Intent;
export const GetProjectsLocationsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Intent;

export type GetProjectsLocationsAgentIntentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentIntents: API.OperationMethod<
  GetProjectsLocationsAgentIntentsRequest,
  GetProjectsLocationsAgentIntentsResponse,
  GetProjectsLocationsAgentIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentIntentsRequest,
  output: GetProjectsLocationsAgentIntentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsAgentIntentsRequest {
  languageCode?: string;
  parent: string;
  intentView?: "INTENT_VIEW_UNSPECIFIED" | "INTENT_VIEW_FULL" | (string & {});
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Intent;
}

export const CreateProjectsLocationsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    intentView: Schema.optional(Schema.String).pipe(T.HttpQuery("intentView")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Intent).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/intents",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentIntentsRequest>;

export type CreateProjectsLocationsAgentIntentsResponse =
  GoogleCloudDialogflowV2beta1Intent;
export const CreateProjectsLocationsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Intent;

export type CreateProjectsLocationsAgentIntentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsAgentIntents: API.OperationMethod<
  CreateProjectsLocationsAgentIntentsRequest,
  CreateProjectsLocationsAgentIntentsResponse,
  CreateProjectsLocationsAgentIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentIntentsRequest,
  output: CreateProjectsLocationsAgentIntentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAgentIntentsRequest {
  updateMask?: string;
  intentView?: "INTENT_VIEW_UNSPECIFIED" | "INTENT_VIEW_FULL" | (string & {});
  name: string;
  languageCode?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Intent;
}

export const PatchProjectsLocationsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    intentView: Schema.optional(Schema.String).pipe(T.HttpQuery("intentView")),
    name: Schema.String.pipe(T.HttpPath("name")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Intent).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentIntentsRequest>;

export type PatchProjectsLocationsAgentIntentsResponse =
  GoogleCloudDialogflowV2beta1Intent;
export const PatchProjectsLocationsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Intent;

export type PatchProjectsLocationsAgentIntentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsAgentIntents: API.OperationMethod<
  PatchProjectsLocationsAgentIntentsRequest,
  PatchProjectsLocationsAgentIntentsResponse,
  PatchProjectsLocationsAgentIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentIntentsRequest,
  output: PatchProjectsLocationsAgentIntentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteContextsProjectsLocationsAgentSessionsRequest {
  parent: string;
}

export const DeleteContextsProjectsLocationsAgentSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+parent}/contexts" }),
    svc,
  ) as unknown as Schema.Schema<DeleteContextsProjectsLocationsAgentSessionsRequest>;

export type DeleteContextsProjectsLocationsAgentSessionsResponse =
  GoogleProtobufEmpty;
export const DeleteContextsProjectsLocationsAgentSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteContextsProjectsLocationsAgentSessionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteContextsProjectsLocationsAgentSessions: API.OperationMethod<
  DeleteContextsProjectsLocationsAgentSessionsRequest,
  DeleteContextsProjectsLocationsAgentSessionsResponse,
  DeleteContextsProjectsLocationsAgentSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteContextsProjectsLocationsAgentSessionsRequest,
  output: DeleteContextsProjectsLocationsAgentSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DetectIntentProjectsLocationsAgentSessionsRequest {
  session: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1DetectIntentRequest;
}

export const DetectIntentProjectsLocationsAgentSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.HttpPath("session")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1DetectIntentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+session}:detectIntent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DetectIntentProjectsLocationsAgentSessionsRequest>;

export type DetectIntentProjectsLocationsAgentSessionsResponse =
  GoogleCloudDialogflowV2beta1DetectIntentResponse;
export const DetectIntentProjectsLocationsAgentSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1DetectIntentResponse;

export type DetectIntentProjectsLocationsAgentSessionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const detectIntentProjectsLocationsAgentSessions: API.OperationMethod<
  DetectIntentProjectsLocationsAgentSessionsRequest,
  DetectIntentProjectsLocationsAgentSessionsResponse,
  DetectIntentProjectsLocationsAgentSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DetectIntentProjectsLocationsAgentSessionsRequest,
  output: DetectIntentProjectsLocationsAgentSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentSessionsContextsRequest {
  name: string;
}

export const GetProjectsLocationsAgentSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentSessionsContextsRequest>;

export type GetProjectsLocationsAgentSessionsContextsResponse =
  GoogleCloudDialogflowV2beta1Context;
export const GetProjectsLocationsAgentSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Context;

export type GetProjectsLocationsAgentSessionsContextsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentSessionsContexts: API.OperationMethod<
  GetProjectsLocationsAgentSessionsContextsRequest,
  GetProjectsLocationsAgentSessionsContextsResponse,
  GetProjectsLocationsAgentSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentSessionsContextsRequest,
  output: GetProjectsLocationsAgentSessionsContextsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsAgentSessionsContextsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Context;
}

export const CreateProjectsLocationsAgentSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Context).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/contexts",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentSessionsContextsRequest>;

export type CreateProjectsLocationsAgentSessionsContextsResponse =
  GoogleCloudDialogflowV2beta1Context;
export const CreateProjectsLocationsAgentSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Context;

export type CreateProjectsLocationsAgentSessionsContextsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsAgentSessionsContexts: API.OperationMethod<
  CreateProjectsLocationsAgentSessionsContextsRequest,
  CreateProjectsLocationsAgentSessionsContextsResponse,
  CreateProjectsLocationsAgentSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentSessionsContextsRequest,
  output: CreateProjectsLocationsAgentSessionsContextsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAgentSessionsContextsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Context;
}

export const PatchProjectsLocationsAgentSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Context).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentSessionsContextsRequest>;

export type PatchProjectsLocationsAgentSessionsContextsResponse =
  GoogleCloudDialogflowV2beta1Context;
export const PatchProjectsLocationsAgentSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Context;

export type PatchProjectsLocationsAgentSessionsContextsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsAgentSessionsContexts: API.OperationMethod<
  PatchProjectsLocationsAgentSessionsContextsRequest,
  PatchProjectsLocationsAgentSessionsContextsResponse,
  PatchProjectsLocationsAgentSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentSessionsContextsRequest,
  output: PatchProjectsLocationsAgentSessionsContextsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentSessionsContextsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsAgentSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/contexts" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentSessionsContextsRequest>;

export type ListProjectsLocationsAgentSessionsContextsResponse =
  GoogleCloudDialogflowV2beta1ListContextsResponse;
export const ListProjectsLocationsAgentSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListContextsResponse;

export type ListProjectsLocationsAgentSessionsContextsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentSessionsContexts: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentSessionsContextsRequest,
  ListProjectsLocationsAgentSessionsContextsResponse,
  ListProjectsLocationsAgentSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentSessionsContextsRequest,
  output: ListProjectsLocationsAgentSessionsContextsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsAgentSessionsContextsRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentSessionsContextsRequest>;

export type DeleteProjectsLocationsAgentSessionsContextsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentSessionsContextsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsAgentSessionsContexts: API.OperationMethod<
  DeleteProjectsLocationsAgentSessionsContextsRequest,
  DeleteProjectsLocationsAgentSessionsContextsResponse,
  DeleteProjectsLocationsAgentSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentSessionsContextsRequest,
  output: DeleteProjectsLocationsAgentSessionsContextsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentSessionsEntityTypesRequest {
  name: string;
}

export const GetProjectsLocationsAgentSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentSessionsEntityTypesRequest>;

export type GetProjectsLocationsAgentSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2beta1SessionEntityType;
export const GetProjectsLocationsAgentSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1SessionEntityType;

export type GetProjectsLocationsAgentSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentSessionsEntityTypes: API.OperationMethod<
  GetProjectsLocationsAgentSessionsEntityTypesRequest,
  GetProjectsLocationsAgentSessionsEntityTypesResponse,
  GetProjectsLocationsAgentSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentSessionsEntityTypesRequest,
  output: GetProjectsLocationsAgentSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsAgentSessionsEntityTypesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1SessionEntityType;
}

export const CreateProjectsLocationsAgentSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1SessionEntityType).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/entityTypes",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentSessionsEntityTypesRequest>;

export type CreateProjectsLocationsAgentSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2beta1SessionEntityType;
export const CreateProjectsLocationsAgentSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1SessionEntityType;

export type CreateProjectsLocationsAgentSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsAgentSessionsEntityTypes: API.OperationMethod<
  CreateProjectsLocationsAgentSessionsEntityTypesRequest,
  CreateProjectsLocationsAgentSessionsEntityTypesResponse,
  CreateProjectsLocationsAgentSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentSessionsEntityTypesRequest,
  output: CreateProjectsLocationsAgentSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAgentSessionsEntityTypesRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1SessionEntityType;
}

export const PatchProjectsLocationsAgentSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1SessionEntityType).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentSessionsEntityTypesRequest>;

export type PatchProjectsLocationsAgentSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2beta1SessionEntityType;
export const PatchProjectsLocationsAgentSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1SessionEntityType;

export type PatchProjectsLocationsAgentSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsAgentSessionsEntityTypes: API.OperationMethod<
  PatchProjectsLocationsAgentSessionsEntityTypesRequest,
  PatchProjectsLocationsAgentSessionsEntityTypesResponse,
  PatchProjectsLocationsAgentSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentSessionsEntityTypesRequest,
  output: PatchProjectsLocationsAgentSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentSessionsEntityTypesRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsAgentSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/entityTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentSessionsEntityTypesRequest>;

export type ListProjectsLocationsAgentSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse;
export const ListProjectsLocationsAgentSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse;

export type ListProjectsLocationsAgentSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentSessionsEntityTypes: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentSessionsEntityTypesRequest,
  ListProjectsLocationsAgentSessionsEntityTypesResponse,
  ListProjectsLocationsAgentSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentSessionsEntityTypesRequest,
  output: ListProjectsLocationsAgentSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsAgentSessionsEntityTypesRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentSessionsEntityTypesRequest>;

export type DeleteProjectsLocationsAgentSessionsEntityTypesResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsAgentSessionsEntityTypes: API.OperationMethod<
  DeleteProjectsLocationsAgentSessionsEntityTypesRequest,
  DeleteProjectsLocationsAgentSessionsEntityTypesResponse,
  DeleteProjectsLocationsAgentSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentSessionsEntityTypesRequest,
  output: DeleteProjectsLocationsAgentSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentEntityTypesRequest {
  name: string;
  languageCode?: string;
}

export const GetProjectsLocationsAgentEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentEntityTypesRequest>;

export type GetProjectsLocationsAgentEntityTypesResponse =
  GoogleCloudDialogflowV2beta1EntityType;
export const GetProjectsLocationsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1EntityType;

export type GetProjectsLocationsAgentEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentEntityTypes: API.OperationMethod<
  GetProjectsLocationsAgentEntityTypesRequest,
  GetProjectsLocationsAgentEntityTypesResponse,
  GetProjectsLocationsAgentEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentEntityTypesRequest,
  output: GetProjectsLocationsAgentEntityTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsAgentEntityTypesRequest {
  languageCode?: string;
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1EntityType;
}

export const CreateProjectsLocationsAgentEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1EntityType).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/entityTypes",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentEntityTypesRequest>;

export type CreateProjectsLocationsAgentEntityTypesResponse =
  GoogleCloudDialogflowV2beta1EntityType;
export const CreateProjectsLocationsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1EntityType;

export type CreateProjectsLocationsAgentEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsAgentEntityTypes: API.OperationMethod<
  CreateProjectsLocationsAgentEntityTypesRequest,
  CreateProjectsLocationsAgentEntityTypesResponse,
  CreateProjectsLocationsAgentEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentEntityTypesRequest,
  output: CreateProjectsLocationsAgentEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAgentEntityTypesRequest {
  name: string;
  languageCode?: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1EntityType;
}

export const PatchProjectsLocationsAgentEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1EntityType).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentEntityTypesRequest>;

export type PatchProjectsLocationsAgentEntityTypesResponse =
  GoogleCloudDialogflowV2beta1EntityType;
export const PatchProjectsLocationsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1EntityType;

export type PatchProjectsLocationsAgentEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsAgentEntityTypes: API.OperationMethod<
  PatchProjectsLocationsAgentEntityTypesRequest,
  PatchProjectsLocationsAgentEntityTypesResponse,
  PatchProjectsLocationsAgentEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentEntityTypesRequest,
  output: PatchProjectsLocationsAgentEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentEntityTypesRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
  languageCode?: string;
}

export const ListProjectsLocationsAgentEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/entityTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentEntityTypesRequest>;

export type ListProjectsLocationsAgentEntityTypesResponse =
  GoogleCloudDialogflowV2beta1ListEntityTypesResponse;
export const ListProjectsLocationsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListEntityTypesResponse;

export type ListProjectsLocationsAgentEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentEntityTypes: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentEntityTypesRequest,
  ListProjectsLocationsAgentEntityTypesResponse,
  ListProjectsLocationsAgentEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentEntityTypesRequest,
  output: ListProjectsLocationsAgentEntityTypesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsAgentEntityTypesRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentEntityTypesRequest>;

export type DeleteProjectsLocationsAgentEntityTypesResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsAgentEntityTypes: API.OperationMethod<
  DeleteProjectsLocationsAgentEntityTypesRequest,
  DeleteProjectsLocationsAgentEntityTypesResponse,
  DeleteProjectsLocationsAgentEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentEntityTypesRequest,
  output: DeleteProjectsLocationsAgentEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchUpdateProjectsLocationsAgentEntityTypesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest;
}

export const BatchUpdateProjectsLocationsAgentEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/entityTypes:batchUpdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchUpdateProjectsLocationsAgentEntityTypesRequest>;

export type BatchUpdateProjectsLocationsAgentEntityTypesResponse =
  GoogleLongrunningOperation;
export const BatchUpdateProjectsLocationsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type BatchUpdateProjectsLocationsAgentEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const batchUpdateProjectsLocationsAgentEntityTypes: API.OperationMethod<
  BatchUpdateProjectsLocationsAgentEntityTypesRequest,
  BatchUpdateProjectsLocationsAgentEntityTypesResponse,
  BatchUpdateProjectsLocationsAgentEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchUpdateProjectsLocationsAgentEntityTypesRequest,
  output: BatchUpdateProjectsLocationsAgentEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchDeleteProjectsLocationsAgentEntityTypesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest;
}

export const BatchDeleteProjectsLocationsAgentEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/entityTypes:batchDelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchDeleteProjectsLocationsAgentEntityTypesRequest>;

export type BatchDeleteProjectsLocationsAgentEntityTypesResponse =
  GoogleLongrunningOperation;
export const BatchDeleteProjectsLocationsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type BatchDeleteProjectsLocationsAgentEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const batchDeleteProjectsLocationsAgentEntityTypes: API.OperationMethod<
  BatchDeleteProjectsLocationsAgentEntityTypesRequest,
  BatchDeleteProjectsLocationsAgentEntityTypesResponse,
  BatchDeleteProjectsLocationsAgentEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchDeleteProjectsLocationsAgentEntityTypesRequest,
  output: BatchDeleteProjectsLocationsAgentEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchCreateProjectsLocationsAgentEntityTypesEntitiesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1BatchCreateEntitiesRequest;
}

export const BatchCreateProjectsLocationsAgentEntityTypesEntitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1BatchCreateEntitiesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/entities:batchCreate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchCreateProjectsLocationsAgentEntityTypesEntitiesRequest>;

export type BatchCreateProjectsLocationsAgentEntityTypesEntitiesResponse =
  GoogleLongrunningOperation;
export const BatchCreateProjectsLocationsAgentEntityTypesEntitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type BatchCreateProjectsLocationsAgentEntityTypesEntitiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const batchCreateProjectsLocationsAgentEntityTypesEntities: API.OperationMethod<
  BatchCreateProjectsLocationsAgentEntityTypesEntitiesRequest,
  BatchCreateProjectsLocationsAgentEntityTypesEntitiesResponse,
  BatchCreateProjectsLocationsAgentEntityTypesEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchCreateProjectsLocationsAgentEntityTypesEntitiesRequest,
  output: BatchCreateProjectsLocationsAgentEntityTypesEntitiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchUpdateProjectsLocationsAgentEntityTypesEntitiesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1BatchUpdateEntitiesRequest;
}

export const BatchUpdateProjectsLocationsAgentEntityTypesEntitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1BatchUpdateEntitiesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/entities:batchUpdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchUpdateProjectsLocationsAgentEntityTypesEntitiesRequest>;

export type BatchUpdateProjectsLocationsAgentEntityTypesEntitiesResponse =
  GoogleLongrunningOperation;
export const BatchUpdateProjectsLocationsAgentEntityTypesEntitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type BatchUpdateProjectsLocationsAgentEntityTypesEntitiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const batchUpdateProjectsLocationsAgentEntityTypesEntities: API.OperationMethod<
  BatchUpdateProjectsLocationsAgentEntityTypesEntitiesRequest,
  BatchUpdateProjectsLocationsAgentEntityTypesEntitiesResponse,
  BatchUpdateProjectsLocationsAgentEntityTypesEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchUpdateProjectsLocationsAgentEntityTypesEntitiesRequest,
  output: BatchUpdateProjectsLocationsAgentEntityTypesEntitiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchDeleteProjectsLocationsAgentEntityTypesEntitiesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1BatchDeleteEntitiesRequest;
}

export const BatchDeleteProjectsLocationsAgentEntityTypesEntitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1BatchDeleteEntitiesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/entities:batchDelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchDeleteProjectsLocationsAgentEntityTypesEntitiesRequest>;

export type BatchDeleteProjectsLocationsAgentEntityTypesEntitiesResponse =
  GoogleLongrunningOperation;
export const BatchDeleteProjectsLocationsAgentEntityTypesEntitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type BatchDeleteProjectsLocationsAgentEntityTypesEntitiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const batchDeleteProjectsLocationsAgentEntityTypesEntities: API.OperationMethod<
  BatchDeleteProjectsLocationsAgentEntityTypesEntitiesRequest,
  BatchDeleteProjectsLocationsAgentEntityTypesEntitiesResponse,
  BatchDeleteProjectsLocationsAgentEntityTypesEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchDeleteProjectsLocationsAgentEntityTypesEntitiesRequest,
  output: BatchDeleteProjectsLocationsAgentEntityTypesEntitiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentEnvironmentsRequest {
  name: string;
}

export const GetProjectsLocationsAgentEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentEnvironmentsRequest>;

export type GetProjectsLocationsAgentEnvironmentsResponse =
  GoogleCloudDialogflowV2beta1Environment;
export const GetProjectsLocationsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Environment;

export type GetProjectsLocationsAgentEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentEnvironments: API.OperationMethod<
  GetProjectsLocationsAgentEnvironmentsRequest,
  GetProjectsLocationsAgentEnvironmentsResponse,
  GetProjectsLocationsAgentEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentEnvironmentsRequest,
  output: GetProjectsLocationsAgentEnvironmentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsAgentEnvironmentsRequest {
  parent: string;
  environmentId?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Environment;
}

export const CreateProjectsLocationsAgentEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    environmentId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("environmentId"),
    ),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Environment).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/environments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentEnvironmentsRequest>;

export type CreateProjectsLocationsAgentEnvironmentsResponse =
  GoogleCloudDialogflowV2beta1Environment;
export const CreateProjectsLocationsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Environment;

export type CreateProjectsLocationsAgentEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsAgentEnvironments: API.OperationMethod<
  CreateProjectsLocationsAgentEnvironmentsRequest,
  CreateProjectsLocationsAgentEnvironmentsResponse,
  CreateProjectsLocationsAgentEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentEnvironmentsRequest,
  output: CreateProjectsLocationsAgentEnvironmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAgentEnvironmentsRequest {
  name: string;
  updateMask?: string;
  allowLoadToDraftAndDiscardChanges?: boolean;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Environment;
}

export const PatchProjectsLocationsAgentEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    allowLoadToDraftAndDiscardChanges: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowLoadToDraftAndDiscardChanges"),
    ),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Environment).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentEnvironmentsRequest>;

export type PatchProjectsLocationsAgentEnvironmentsResponse =
  GoogleCloudDialogflowV2beta1Environment;
export const PatchProjectsLocationsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Environment;

export type PatchProjectsLocationsAgentEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsAgentEnvironments: API.OperationMethod<
  PatchProjectsLocationsAgentEnvironmentsRequest,
  PatchProjectsLocationsAgentEnvironmentsResponse,
  PatchProjectsLocationsAgentEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentEnvironmentsRequest,
  output: PatchProjectsLocationsAgentEnvironmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetHistoryProjectsLocationsAgentEnvironmentsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const GetHistoryProjectsLocationsAgentEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/history" }),
    svc,
  ) as unknown as Schema.Schema<GetHistoryProjectsLocationsAgentEnvironmentsRequest>;

export type GetHistoryProjectsLocationsAgentEnvironmentsResponse =
  GoogleCloudDialogflowV2beta1EnvironmentHistory;
export const GetHistoryProjectsLocationsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1EnvironmentHistory;

export type GetHistoryProjectsLocationsAgentEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getHistoryProjectsLocationsAgentEnvironments: API.PaginatedOperationMethod<
  GetHistoryProjectsLocationsAgentEnvironmentsRequest,
  GetHistoryProjectsLocationsAgentEnvironmentsResponse,
  GetHistoryProjectsLocationsAgentEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: GetHistoryProjectsLocationsAgentEnvironmentsRequest,
  output: GetHistoryProjectsLocationsAgentEnvironmentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsAgentEnvironmentsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsAgentEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/environments" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentEnvironmentsRequest>;

export type ListProjectsLocationsAgentEnvironmentsResponse =
  GoogleCloudDialogflowV2beta1ListEnvironmentsResponse;
export const ListProjectsLocationsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListEnvironmentsResponse;

export type ListProjectsLocationsAgentEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentEnvironments: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentEnvironmentsRequest,
  ListProjectsLocationsAgentEnvironmentsResponse,
  ListProjectsLocationsAgentEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentEnvironmentsRequest,
  output: ListProjectsLocationsAgentEnvironmentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsAgentEnvironmentsRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentEnvironmentsRequest>;

export type DeleteProjectsLocationsAgentEnvironmentsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsAgentEnvironments: API.OperationMethod<
  DeleteProjectsLocationsAgentEnvironmentsRequest,
  DeleteProjectsLocationsAgentEnvironmentsResponse,
  DeleteProjectsLocationsAgentEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentEnvironmentsRequest,
  output: DeleteProjectsLocationsAgentEnvironmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteContextsProjectsLocationsAgentEnvironmentsUsersSessionsRequest {
  parent: string;
}

export const DeleteContextsProjectsLocationsAgentEnvironmentsUsersSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+parent}/contexts" }),
    svc,
  ) as unknown as Schema.Schema<DeleteContextsProjectsLocationsAgentEnvironmentsUsersSessionsRequest>;

export type DeleteContextsProjectsLocationsAgentEnvironmentsUsersSessionsResponse =
  GoogleProtobufEmpty;
export const DeleteContextsProjectsLocationsAgentEnvironmentsUsersSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteContextsProjectsLocationsAgentEnvironmentsUsersSessionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteContextsProjectsLocationsAgentEnvironmentsUsersSessions: API.OperationMethod<
  DeleteContextsProjectsLocationsAgentEnvironmentsUsersSessionsRequest,
  DeleteContextsProjectsLocationsAgentEnvironmentsUsersSessionsResponse,
  DeleteContextsProjectsLocationsAgentEnvironmentsUsersSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteContextsProjectsLocationsAgentEnvironmentsUsersSessionsRequest,
  output: DeleteContextsProjectsLocationsAgentEnvironmentsUsersSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DetectIntentProjectsLocationsAgentEnvironmentsUsersSessionsRequest {
  session: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1DetectIntentRequest;
}

export const DetectIntentProjectsLocationsAgentEnvironmentsUsersSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.HttpPath("session")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1DetectIntentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+session}:detectIntent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DetectIntentProjectsLocationsAgentEnvironmentsUsersSessionsRequest>;

export type DetectIntentProjectsLocationsAgentEnvironmentsUsersSessionsResponse =
  GoogleCloudDialogflowV2beta1DetectIntentResponse;
export const DetectIntentProjectsLocationsAgentEnvironmentsUsersSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1DetectIntentResponse;

export type DetectIntentProjectsLocationsAgentEnvironmentsUsersSessionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const detectIntentProjectsLocationsAgentEnvironmentsUsersSessions: API.OperationMethod<
  DetectIntentProjectsLocationsAgentEnvironmentsUsersSessionsRequest,
  DetectIntentProjectsLocationsAgentEnvironmentsUsersSessionsResponse,
  DetectIntentProjectsLocationsAgentEnvironmentsUsersSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DetectIntentProjectsLocationsAgentEnvironmentsUsersSessionsRequest,
  output: DetectIntentProjectsLocationsAgentEnvironmentsUsersSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest {
  name: string;
}

export const GetProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest>;

export type GetProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse =
  GoogleCloudDialogflowV2beta1Context;
export const GetProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Context;

export type GetProjectsLocationsAgentEnvironmentsUsersSessionsContextsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentEnvironmentsUsersSessionsContexts: API.OperationMethod<
  GetProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest,
  GetProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse,
  GetProjectsLocationsAgentEnvironmentsUsersSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest,
  output: GetProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Context;
}

export const CreateProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Context).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/contexts",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest>;

export type CreateProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse =
  GoogleCloudDialogflowV2beta1Context;
export const CreateProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Context;

export type CreateProjectsLocationsAgentEnvironmentsUsersSessionsContextsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsAgentEnvironmentsUsersSessionsContexts: API.OperationMethod<
  CreateProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest,
  CreateProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse,
  CreateProjectsLocationsAgentEnvironmentsUsersSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest,
  output: CreateProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Context;
}

export const PatchProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Context).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest>;

export type PatchProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse =
  GoogleCloudDialogflowV2beta1Context;
export const PatchProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Context;

export type PatchProjectsLocationsAgentEnvironmentsUsersSessionsContextsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsAgentEnvironmentsUsersSessionsContexts: API.OperationMethod<
  PatchProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest,
  PatchProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse,
  PatchProjectsLocationsAgentEnvironmentsUsersSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest,
  output: PatchProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/contexts" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest>;

export type ListProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse =
  GoogleCloudDialogflowV2beta1ListContextsResponse;
export const ListProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListContextsResponse;

export type ListProjectsLocationsAgentEnvironmentsUsersSessionsContextsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentEnvironmentsUsersSessionsContexts: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest,
  ListProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse,
  ListProjectsLocationsAgentEnvironmentsUsersSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest,
  output: ListProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest>;

export type DeleteProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentEnvironmentsUsersSessionsContextsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsAgentEnvironmentsUsersSessionsContexts: API.OperationMethod<
  DeleteProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest,
  DeleteProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse,
  DeleteProjectsLocationsAgentEnvironmentsUsersSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest,
  output: DeleteProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest {
  name: string;
}

export const GetProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest>;

export type GetProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2beta1SessionEntityType;
export const GetProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1SessionEntityType;

export type GetProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypes: API.OperationMethod<
  GetProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  GetProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  GetProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  output: GetProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1SessionEntityType;
}

export const CreateProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1SessionEntityType).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/entityTypes",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest>;

export type CreateProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2beta1SessionEntityType;
export const CreateProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1SessionEntityType;

export type CreateProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypes: API.OperationMethod<
  CreateProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  CreateProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  CreateProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    CreateProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  output:
    CreateProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1SessionEntityType;
}

export const PatchProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1SessionEntityType).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest>;

export type PatchProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2beta1SessionEntityType;
export const PatchProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1SessionEntityType;

export type PatchProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypes: API.OperationMethod<
  PatchProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  PatchProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  PatchProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  output:
    PatchProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/entityTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest>;

export type ListProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse;
export const ListProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse;

export type ListProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypes: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  ListProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  ListProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  output:
    ListProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest>;

export type DeleteProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypes: API.OperationMethod<
  DeleteProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  DeleteProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  DeleteProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    DeleteProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  output:
    DeleteProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentEnvironmentsIntentsRequest {
  languageCode?: string;
  intentView?: "INTENT_VIEW_UNSPECIFIED" | "INTENT_VIEW_FULL" | (string & {});
  pageSize?: number;
  parent: string;
  pageToken?: string;
}

export const ListProjectsLocationsAgentEnvironmentsIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    intentView: Schema.optional(Schema.String).pipe(T.HttpQuery("intentView")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/intents" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentEnvironmentsIntentsRequest>;

export type ListProjectsLocationsAgentEnvironmentsIntentsResponse =
  GoogleCloudDialogflowV2beta1ListIntentsResponse;
export const ListProjectsLocationsAgentEnvironmentsIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListIntentsResponse;

export type ListProjectsLocationsAgentEnvironmentsIntentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentEnvironmentsIntents: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentEnvironmentsIntentsRequest,
  ListProjectsLocationsAgentEnvironmentsIntentsResponse,
  ListProjectsLocationsAgentEnvironmentsIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentEnvironmentsIntentsRequest,
  output: ListProjectsLocationsAgentEnvironmentsIntentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsAgentVersionsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsAgentVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/versions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentVersionsRequest>;

export type ListProjectsLocationsAgentVersionsResponse =
  GoogleCloudDialogflowV2beta1ListVersionsResponse;
export const ListProjectsLocationsAgentVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListVersionsResponse;

export type ListProjectsLocationsAgentVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentVersions: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentVersionsRequest,
  ListProjectsLocationsAgentVersionsResponse,
  ListProjectsLocationsAgentVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentVersionsRequest,
  output: ListProjectsLocationsAgentVersionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsAgentVersionsRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentVersionsRequest>;

export type DeleteProjectsLocationsAgentVersionsResponse = GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsAgentVersions: API.OperationMethod<
  DeleteProjectsLocationsAgentVersionsRequest,
  DeleteProjectsLocationsAgentVersionsResponse,
  DeleteProjectsLocationsAgentVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentVersionsRequest,
  output: DeleteProjectsLocationsAgentVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentVersionsRequest {
  name: string;
}

export const GetProjectsLocationsAgentVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentVersionsRequest>;

export type GetProjectsLocationsAgentVersionsResponse =
  GoogleCloudDialogflowV2beta1Version;
export const GetProjectsLocationsAgentVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Version;

export type GetProjectsLocationsAgentVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentVersions: API.OperationMethod<
  GetProjectsLocationsAgentVersionsRequest,
  GetProjectsLocationsAgentVersionsResponse,
  GetProjectsLocationsAgentVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentVersionsRequest,
  output: GetProjectsLocationsAgentVersionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsAgentVersionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Version;
}

export const CreateProjectsLocationsAgentVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Version).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/versions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentVersionsRequest>;

export type CreateProjectsLocationsAgentVersionsResponse =
  GoogleCloudDialogflowV2beta1Version;
export const CreateProjectsLocationsAgentVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Version;

export type CreateProjectsLocationsAgentVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsAgentVersions: API.OperationMethod<
  CreateProjectsLocationsAgentVersionsRequest,
  CreateProjectsLocationsAgentVersionsResponse,
  CreateProjectsLocationsAgentVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentVersionsRequest,
  output: CreateProjectsLocationsAgentVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAgentVersionsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Version;
}

export const PatchProjectsLocationsAgentVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Version).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentVersionsRequest>;

export type PatchProjectsLocationsAgentVersionsResponse =
  GoogleCloudDialogflowV2beta1Version;
export const PatchProjectsLocationsAgentVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Version;

export type PatchProjectsLocationsAgentVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsAgentVersions: API.OperationMethod<
  PatchProjectsLocationsAgentVersionsRequest,
  PatchProjectsLocationsAgentVersionsResponse,
  PatchProjectsLocationsAgentVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentVersionsRequest,
  output: PatchProjectsLocationsAgentVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InitializeProjectsLocationsEncryptionSpecRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1InitializeEncryptionSpecRequest;
}

export const InitializeProjectsLocationsEncryptionSpecRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1InitializeEncryptionSpecRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+name}:initialize",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InitializeProjectsLocationsEncryptionSpecRequest>;

export type InitializeProjectsLocationsEncryptionSpecResponse =
  GoogleLongrunningOperation;
export const InitializeProjectsLocationsEncryptionSpecResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type InitializeProjectsLocationsEncryptionSpecError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const initializeProjectsLocationsEncryptionSpec: API.OperationMethod<
  InitializeProjectsLocationsEncryptionSpecRequest,
  InitializeProjectsLocationsEncryptionSpecResponse,
  InitializeProjectsLocationsEncryptionSpecError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InitializeProjectsLocationsEncryptionSpecRequest,
  output: InitializeProjectsLocationsEncryptionSpecResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsGeneratorsRequest {
  parent: string;
  generatorId?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Generator;
}

export const CreateProjectsGeneratorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    generatorId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("generatorId"),
    ),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Generator).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/generators",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsGeneratorsRequest>;

export type CreateProjectsGeneratorsResponse =
  GoogleCloudDialogflowV2beta1Generator;
export const CreateProjectsGeneratorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Generator;

export type CreateProjectsGeneratorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsGenerators: API.OperationMethod<
  CreateProjectsGeneratorsRequest,
  CreateProjectsGeneratorsResponse,
  CreateProjectsGeneratorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsGeneratorsRequest,
  output: CreateProjectsGeneratorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsGeneratorsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsGeneratorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/generators" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsGeneratorsRequest>;

export type ListProjectsGeneratorsResponse =
  GoogleCloudDialogflowV2beta1ListGeneratorsResponse;
export const ListProjectsGeneratorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListGeneratorsResponse;

export type ListProjectsGeneratorsError = DefaultErrors | NotFound | Forbidden;

export const listProjectsGenerators: API.PaginatedOperationMethod<
  ListProjectsGeneratorsRequest,
  ListProjectsGeneratorsResponse,
  ListProjectsGeneratorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsGeneratorsRequest,
  output: ListProjectsGeneratorsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsAnswerRecordsRequest {
  name: string;
}

export const GetProjectsAnswerRecordsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAnswerRecordsRequest>;

export type GetProjectsAnswerRecordsResponse =
  GoogleCloudDialogflowV2beta1AnswerRecord;
export const GetProjectsAnswerRecordsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1AnswerRecord;

export type GetProjectsAnswerRecordsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsAnswerRecords: API.OperationMethod<
  GetProjectsAnswerRecordsRequest,
  GetProjectsAnswerRecordsResponse,
  GetProjectsAnswerRecordsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAnswerRecordsRequest,
  output: GetProjectsAnswerRecordsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsAnswerRecordsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
  filter?: string;
}

export const ListProjectsAnswerRecordsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/answerRecords" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAnswerRecordsRequest>;

export type ListProjectsAnswerRecordsResponse =
  GoogleCloudDialogflowV2beta1ListAnswerRecordsResponse;
export const ListProjectsAnswerRecordsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListAnswerRecordsResponse;

export type ListProjectsAnswerRecordsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsAnswerRecords: API.PaginatedOperationMethod<
  ListProjectsAnswerRecordsRequest,
  ListProjectsAnswerRecordsResponse,
  ListProjectsAnswerRecordsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAnswerRecordsRequest,
  output: ListProjectsAnswerRecordsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsAnswerRecordsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1AnswerRecord;
}

export const PatchProjectsAnswerRecordsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1AnswerRecord).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAnswerRecordsRequest>;

export type PatchProjectsAnswerRecordsResponse =
  GoogleCloudDialogflowV2beta1AnswerRecord;
export const PatchProjectsAnswerRecordsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1AnswerRecord;

export type PatchProjectsAnswerRecordsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsAnswerRecords: API.OperationMethod<
  PatchProjectsAnswerRecordsRequest,
  PatchProjectsAnswerRecordsResponse,
  PatchProjectsAnswerRecordsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsAnswerRecordsRequest,
  output: PatchProjectsAnswerRecordsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GenerateStatelessSummaryProjectsSuggestionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1GenerateStatelessSummaryRequest;
}

export const GenerateStatelessSummaryProjectsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1GenerateStatelessSummaryRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/suggestions:generateStatelessSummary",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateStatelessSummaryProjectsSuggestionsRequest>;

export type GenerateStatelessSummaryProjectsSuggestionsResponse =
  GoogleCloudDialogflowV2beta1GenerateStatelessSummaryResponse;
export const GenerateStatelessSummaryProjectsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1GenerateStatelessSummaryResponse;

export type GenerateStatelessSummaryProjectsSuggestionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const generateStatelessSummaryProjectsSuggestions: API.OperationMethod<
  GenerateStatelessSummaryProjectsSuggestionsRequest,
  GenerateStatelessSummaryProjectsSuggestionsResponse,
  GenerateStatelessSummaryProjectsSuggestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateStatelessSummaryProjectsSuggestionsRequest,
  output: GenerateStatelessSummaryProjectsSuggestionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SearchKnowledgeProjectsSuggestionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1SearchKnowledgeRequest;
}

export const SearchKnowledgeProjectsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1SearchKnowledgeRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/suggestions:searchKnowledge",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SearchKnowledgeProjectsSuggestionsRequest>;

export type SearchKnowledgeProjectsSuggestionsResponse =
  GoogleCloudDialogflowV2beta1SearchKnowledgeResponse;
export const SearchKnowledgeProjectsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1SearchKnowledgeResponse;

export type SearchKnowledgeProjectsSuggestionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const searchKnowledgeProjectsSuggestions: API.OperationMethod<
  SearchKnowledgeProjectsSuggestionsRequest,
  SearchKnowledgeProjectsSuggestionsResponse,
  SearchKnowledgeProjectsSuggestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchKnowledgeProjectsSuggestionsRequest,
  output: SearchKnowledgeProjectsSuggestionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsPhoneNumbersRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
  showDeleted?: boolean;
}

export const ListProjectsPhoneNumbersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    showDeleted: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showDeleted"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/phoneNumbers" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsPhoneNumbersRequest>;

export type ListProjectsPhoneNumbersResponse =
  GoogleCloudDialogflowV2beta1ListPhoneNumbersResponse;
export const ListProjectsPhoneNumbersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListPhoneNumbersResponse;

export type ListProjectsPhoneNumbersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsPhoneNumbers: API.PaginatedOperationMethod<
  ListProjectsPhoneNumbersRequest,
  ListProjectsPhoneNumbersResponse,
  ListProjectsPhoneNumbersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsPhoneNumbersRequest,
  output: ListProjectsPhoneNumbersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsPhoneNumbersRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1PhoneNumber;
}

export const PatchProjectsPhoneNumbersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1PhoneNumber).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsPhoneNumbersRequest>;

export type PatchProjectsPhoneNumbersResponse =
  GoogleCloudDialogflowV2beta1PhoneNumber;
export const PatchProjectsPhoneNumbersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1PhoneNumber;

export type PatchProjectsPhoneNumbersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsPhoneNumbers: API.OperationMethod<
  PatchProjectsPhoneNumbersRequest,
  PatchProjectsPhoneNumbersResponse,
  PatchProjectsPhoneNumbersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsPhoneNumbersRequest,
  output: PatchProjectsPhoneNumbersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsPhoneNumbersRequest {
  name: string;
}

export const DeleteProjectsPhoneNumbersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsPhoneNumbersRequest>;

export type DeleteProjectsPhoneNumbersResponse =
  GoogleCloudDialogflowV2beta1PhoneNumber;
export const DeleteProjectsPhoneNumbersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1PhoneNumber;

export type DeleteProjectsPhoneNumbersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsPhoneNumbers: API.OperationMethod<
  DeleteProjectsPhoneNumbersRequest,
  DeleteProjectsPhoneNumbersResponse,
  DeleteProjectsPhoneNumbersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsPhoneNumbersRequest,
  output: DeleteProjectsPhoneNumbersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UndeleteProjectsPhoneNumbersRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1UndeletePhoneNumberRequest;
}

export const UndeleteProjectsPhoneNumbersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1UndeletePhoneNumberRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2beta1/{+name}:undelete", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UndeleteProjectsPhoneNumbersRequest>;

export type UndeleteProjectsPhoneNumbersResponse =
  GoogleCloudDialogflowV2beta1PhoneNumber;
export const UndeleteProjectsPhoneNumbersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1PhoneNumber;

export type UndeleteProjectsPhoneNumbersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const undeleteProjectsPhoneNumbers: API.OperationMethod<
  UndeleteProjectsPhoneNumbersRequest,
  UndeleteProjectsPhoneNumbersResponse,
  UndeleteProjectsPhoneNumbersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UndeleteProjectsPhoneNumbersRequest,
  output: UndeleteProjectsPhoneNumbersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsConversationProfilesRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsConversationProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/conversationProfiles" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsConversationProfilesRequest>;

export type ListProjectsConversationProfilesResponse =
  GoogleCloudDialogflowV2beta1ListConversationProfilesResponse;
export const ListProjectsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListConversationProfilesResponse;

export type ListProjectsConversationProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsConversationProfiles: API.PaginatedOperationMethod<
  ListProjectsConversationProfilesRequest,
  ListProjectsConversationProfilesResponse,
  ListProjectsConversationProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsConversationProfilesRequest,
  output: ListProjectsConversationProfilesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsConversationProfilesRequest {
  name: string;
}

export const DeleteProjectsConversationProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsConversationProfilesRequest>;

export type DeleteProjectsConversationProfilesResponse = GoogleProtobufEmpty;
export const DeleteProjectsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsConversationProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsConversationProfiles: API.OperationMethod<
  DeleteProjectsConversationProfilesRequest,
  DeleteProjectsConversationProfilesResponse,
  DeleteProjectsConversationProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsConversationProfilesRequest,
  output: DeleteProjectsConversationProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsConversationProfilesRequest {
  name: string;
}

export const GetProjectsConversationProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsConversationProfilesRequest>;

export type GetProjectsConversationProfilesResponse =
  GoogleCloudDialogflowV2beta1ConversationProfile;
export const GetProjectsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ConversationProfile;

export type GetProjectsConversationProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsConversationProfiles: API.OperationMethod<
  GetProjectsConversationProfilesRequest,
  GetProjectsConversationProfilesResponse,
  GetProjectsConversationProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsConversationProfilesRequest,
  output: GetProjectsConversationProfilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsConversationProfilesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1ConversationProfile;
}

export const CreateProjectsConversationProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1ConversationProfile).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/conversationProfiles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsConversationProfilesRequest>;

export type CreateProjectsConversationProfilesResponse =
  GoogleCloudDialogflowV2beta1ConversationProfile;
export const CreateProjectsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ConversationProfile;

export type CreateProjectsConversationProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsConversationProfiles: API.OperationMethod<
  CreateProjectsConversationProfilesRequest,
  CreateProjectsConversationProfilesResponse,
  CreateProjectsConversationProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsConversationProfilesRequest,
  output: CreateProjectsConversationProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsConversationProfilesRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1ConversationProfile;
}

export const PatchProjectsConversationProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1ConversationProfile).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsConversationProfilesRequest>;

export type PatchProjectsConversationProfilesResponse =
  GoogleCloudDialogflowV2beta1ConversationProfile;
export const PatchProjectsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ConversationProfile;

export type PatchProjectsConversationProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsConversationProfiles: API.OperationMethod<
  PatchProjectsConversationProfilesRequest,
  PatchProjectsConversationProfilesResponse,
  PatchProjectsConversationProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsConversationProfilesRequest,
  output: PatchProjectsConversationProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ClearSuggestionFeatureConfigProjectsConversationProfilesRequest {
  conversationProfile: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequest;
}

export const ClearSuggestionFeatureConfigProjectsConversationProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationProfile: Schema.String.pipe(T.HttpPath("conversationProfile")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+conversationProfile}:clearSuggestionFeatureConfig",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ClearSuggestionFeatureConfigProjectsConversationProfilesRequest>;

export type ClearSuggestionFeatureConfigProjectsConversationProfilesResponse =
  GoogleLongrunningOperation;
export const ClearSuggestionFeatureConfigProjectsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ClearSuggestionFeatureConfigProjectsConversationProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const clearSuggestionFeatureConfigProjectsConversationProfiles: API.OperationMethod<
  ClearSuggestionFeatureConfigProjectsConversationProfilesRequest,
  ClearSuggestionFeatureConfigProjectsConversationProfilesResponse,
  ClearSuggestionFeatureConfigProjectsConversationProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ClearSuggestionFeatureConfigProjectsConversationProfilesRequest,
  output: ClearSuggestionFeatureConfigProjectsConversationProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetSuggestionFeatureConfigProjectsConversationProfilesRequest {
  conversationProfile: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest;
}

export const SetSuggestionFeatureConfigProjectsConversationProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationProfile: Schema.String.pipe(T.HttpPath("conversationProfile")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+conversationProfile}:setSuggestionFeatureConfig",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetSuggestionFeatureConfigProjectsConversationProfilesRequest>;

export type SetSuggestionFeatureConfigProjectsConversationProfilesResponse =
  GoogleLongrunningOperation;
export const SetSuggestionFeatureConfigProjectsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type SetSuggestionFeatureConfigProjectsConversationProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const setSuggestionFeatureConfigProjectsConversationProfiles: API.OperationMethod<
  SetSuggestionFeatureConfigProjectsConversationProfilesRequest,
  SetSuggestionFeatureConfigProjectsConversationProfilesResponse,
  SetSuggestionFeatureConfigProjectsConversationProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetSuggestionFeatureConfigProjectsConversationProfilesRequest,
  output: SetSuggestionFeatureConfigProjectsConversationProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExportProjectsAgentRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1ExportAgentRequest;
}

export const ExportProjectsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1ExportAgentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/agent:export",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExportProjectsAgentRequest>;

export type ExportProjectsAgentResponse = GoogleLongrunningOperation;
export const ExportProjectsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ExportProjectsAgentError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const exportProjectsAgent: API.OperationMethod<
  ExportProjectsAgentRequest,
  ExportProjectsAgentResponse,
  ExportProjectsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportProjectsAgentRequest,
  output: ExportProjectsAgentResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetFulfillmentProjectsAgentRequest {
  name: string;
}

export const GetFulfillmentProjectsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetFulfillmentProjectsAgentRequest>;

export type GetFulfillmentProjectsAgentResponse =
  GoogleCloudDialogflowV2beta1Fulfillment;
export const GetFulfillmentProjectsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Fulfillment;

export type GetFulfillmentProjectsAgentError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getFulfillmentProjectsAgent: API.OperationMethod<
  GetFulfillmentProjectsAgentRequest,
  GetFulfillmentProjectsAgentResponse,
  GetFulfillmentProjectsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFulfillmentProjectsAgentRequest,
  output: GetFulfillmentProjectsAgentResponse,
  errors: [NotFound, Forbidden],
}));

export interface ImportProjectsAgentRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1ImportAgentRequest;
}

export const ImportProjectsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1ImportAgentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/agent:import",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ImportProjectsAgentRequest>;

export type ImportProjectsAgentResponse = GoogleLongrunningOperation;
export const ImportProjectsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ImportProjectsAgentError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const importProjectsAgent: API.OperationMethod<
  ImportProjectsAgentRequest,
  ImportProjectsAgentResponse,
  ImportProjectsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportProjectsAgentRequest,
  output: ImportProjectsAgentResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TrainProjectsAgentRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1TrainAgentRequest;
}

export const TrainProjectsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1TrainAgentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/agent:train",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TrainProjectsAgentRequest>;

export type TrainProjectsAgentResponse = GoogleLongrunningOperation;
export const TrainProjectsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type TrainProjectsAgentError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const trainProjectsAgent: API.OperationMethod<
  TrainProjectsAgentRequest,
  TrainProjectsAgentResponse,
  TrainProjectsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TrainProjectsAgentRequest,
  output: TrainProjectsAgentResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetValidationResultProjectsAgentRequest {
  languageCode?: string;
  parent: string;
}

export const GetValidationResultProjectsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/agent/validationResult" }),
    svc,
  ) as unknown as Schema.Schema<GetValidationResultProjectsAgentRequest>;

export type GetValidationResultProjectsAgentResponse =
  GoogleCloudDialogflowV2beta1ValidationResult;
export const GetValidationResultProjectsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ValidationResult;

export type GetValidationResultProjectsAgentError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getValidationResultProjectsAgent: API.OperationMethod<
  GetValidationResultProjectsAgentRequest,
  GetValidationResultProjectsAgentResponse,
  GetValidationResultProjectsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetValidationResultProjectsAgentRequest,
  output: GetValidationResultProjectsAgentResponse,
  errors: [NotFound, Forbidden],
}));

export interface RestoreProjectsAgentRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1RestoreAgentRequest;
}

export const RestoreProjectsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1RestoreAgentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/agent:restore",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RestoreProjectsAgentRequest>;

export type RestoreProjectsAgentResponse = GoogleLongrunningOperation;
export const RestoreProjectsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type RestoreProjectsAgentError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const restoreProjectsAgent: API.OperationMethod<
  RestoreProjectsAgentRequest,
  RestoreProjectsAgentResponse,
  RestoreProjectsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RestoreProjectsAgentRequest,
  output: RestoreProjectsAgentResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SearchProjectsAgentRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const SearchProjectsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/agent:search" }),
    svc,
  ) as unknown as Schema.Schema<SearchProjectsAgentRequest>;

export type SearchProjectsAgentResponse =
  GoogleCloudDialogflowV2beta1SearchAgentsResponse;
export const SearchProjectsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1SearchAgentsResponse;

export type SearchProjectsAgentError = DefaultErrors | NotFound | Forbidden;

export const searchProjectsAgent: API.PaginatedOperationMethod<
  SearchProjectsAgentRequest,
  SearchProjectsAgentResponse,
  SearchProjectsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchProjectsAgentRequest,
  output: SearchProjectsAgentResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UpdateFulfillmentProjectsAgentRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Fulfillment;
}

export const UpdateFulfillmentProjectsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Fulfillment).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateFulfillmentProjectsAgentRequest>;

export type UpdateFulfillmentProjectsAgentResponse =
  GoogleCloudDialogflowV2beta1Fulfillment;
export const UpdateFulfillmentProjectsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Fulfillment;

export type UpdateFulfillmentProjectsAgentError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const updateFulfillmentProjectsAgent: API.OperationMethod<
  UpdateFulfillmentProjectsAgentRequest,
  UpdateFulfillmentProjectsAgentResponse,
  UpdateFulfillmentProjectsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateFulfillmentProjectsAgentRequest,
  output: UpdateFulfillmentProjectsAgentResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteContextsProjectsAgentSessionsRequest {
  parent: string;
}

export const DeleteContextsProjectsAgentSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+parent}/contexts" }),
    svc,
  ) as unknown as Schema.Schema<DeleteContextsProjectsAgentSessionsRequest>;

export type DeleteContextsProjectsAgentSessionsResponse = GoogleProtobufEmpty;
export const DeleteContextsProjectsAgentSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteContextsProjectsAgentSessionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteContextsProjectsAgentSessions: API.OperationMethod<
  DeleteContextsProjectsAgentSessionsRequest,
  DeleteContextsProjectsAgentSessionsResponse,
  DeleteContextsProjectsAgentSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteContextsProjectsAgentSessionsRequest,
  output: DeleteContextsProjectsAgentSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DetectIntentProjectsAgentSessionsRequest {
  session: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1DetectIntentRequest;
}

export const DetectIntentProjectsAgentSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.HttpPath("session")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1DetectIntentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+session}:detectIntent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DetectIntentProjectsAgentSessionsRequest>;

export type DetectIntentProjectsAgentSessionsResponse =
  GoogleCloudDialogflowV2beta1DetectIntentResponse;
export const DetectIntentProjectsAgentSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1DetectIntentResponse;

export type DetectIntentProjectsAgentSessionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const detectIntentProjectsAgentSessions: API.OperationMethod<
  DetectIntentProjectsAgentSessionsRequest,
  DetectIntentProjectsAgentSessionsResponse,
  DetectIntentProjectsAgentSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DetectIntentProjectsAgentSessionsRequest,
  output: DetectIntentProjectsAgentSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsAgentSessionsEntityTypesRequest {
  name: string;
}

export const GetProjectsAgentSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAgentSessionsEntityTypesRequest>;

export type GetProjectsAgentSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2beta1SessionEntityType;
export const GetProjectsAgentSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1SessionEntityType;

export type GetProjectsAgentSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsAgentSessionsEntityTypes: API.OperationMethod<
  GetProjectsAgentSessionsEntityTypesRequest,
  GetProjectsAgentSessionsEntityTypesResponse,
  GetProjectsAgentSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAgentSessionsEntityTypesRequest,
  output: GetProjectsAgentSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsAgentSessionsEntityTypesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1SessionEntityType;
}

export const CreateProjectsAgentSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1SessionEntityType).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/entityTypes",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAgentSessionsEntityTypesRequest>;

export type CreateProjectsAgentSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2beta1SessionEntityType;
export const CreateProjectsAgentSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1SessionEntityType;

export type CreateProjectsAgentSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsAgentSessionsEntityTypes: API.OperationMethod<
  CreateProjectsAgentSessionsEntityTypesRequest,
  CreateProjectsAgentSessionsEntityTypesResponse,
  CreateProjectsAgentSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsAgentSessionsEntityTypesRequest,
  output: CreateProjectsAgentSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsAgentSessionsEntityTypesRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1SessionEntityType;
}

export const PatchProjectsAgentSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1SessionEntityType).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAgentSessionsEntityTypesRequest>;

export type PatchProjectsAgentSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2beta1SessionEntityType;
export const PatchProjectsAgentSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1SessionEntityType;

export type PatchProjectsAgentSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsAgentSessionsEntityTypes: API.OperationMethod<
  PatchProjectsAgentSessionsEntityTypesRequest,
  PatchProjectsAgentSessionsEntityTypesResponse,
  PatchProjectsAgentSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsAgentSessionsEntityTypesRequest,
  output: PatchProjectsAgentSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsAgentSessionsEntityTypesRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsAgentSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/entityTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentSessionsEntityTypesRequest>;

export type ListProjectsAgentSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse;
export const ListProjectsAgentSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse;

export type ListProjectsAgentSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsAgentSessionsEntityTypes: API.PaginatedOperationMethod<
  ListProjectsAgentSessionsEntityTypesRequest,
  ListProjectsAgentSessionsEntityTypesResponse,
  ListProjectsAgentSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAgentSessionsEntityTypesRequest,
  output: ListProjectsAgentSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsAgentSessionsEntityTypesRequest {
  name: string;
}

export const DeleteProjectsAgentSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsAgentSessionsEntityTypesRequest>;

export type DeleteProjectsAgentSessionsEntityTypesResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsAgentSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsAgentSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsAgentSessionsEntityTypes: API.OperationMethod<
  DeleteProjectsAgentSessionsEntityTypesRequest,
  DeleteProjectsAgentSessionsEntityTypesResponse,
  DeleteProjectsAgentSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsAgentSessionsEntityTypesRequest,
  output: DeleteProjectsAgentSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsAgentSessionsContextsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsAgentSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/contexts" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentSessionsContextsRequest>;

export type ListProjectsAgentSessionsContextsResponse =
  GoogleCloudDialogflowV2beta1ListContextsResponse;
export const ListProjectsAgentSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListContextsResponse;

export type ListProjectsAgentSessionsContextsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsAgentSessionsContexts: API.PaginatedOperationMethod<
  ListProjectsAgentSessionsContextsRequest,
  ListProjectsAgentSessionsContextsResponse,
  ListProjectsAgentSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAgentSessionsContextsRequest,
  output: ListProjectsAgentSessionsContextsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsAgentSessionsContextsRequest {
  name: string;
}

export const DeleteProjectsAgentSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsAgentSessionsContextsRequest>;

export type DeleteProjectsAgentSessionsContextsResponse = GoogleProtobufEmpty;
export const DeleteProjectsAgentSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsAgentSessionsContextsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsAgentSessionsContexts: API.OperationMethod<
  DeleteProjectsAgentSessionsContextsRequest,
  DeleteProjectsAgentSessionsContextsResponse,
  DeleteProjectsAgentSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsAgentSessionsContextsRequest,
  output: DeleteProjectsAgentSessionsContextsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsAgentSessionsContextsRequest {
  name: string;
}

export const GetProjectsAgentSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAgentSessionsContextsRequest>;

export type GetProjectsAgentSessionsContextsResponse =
  GoogleCloudDialogflowV2beta1Context;
export const GetProjectsAgentSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Context;

export type GetProjectsAgentSessionsContextsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsAgentSessionsContexts: API.OperationMethod<
  GetProjectsAgentSessionsContextsRequest,
  GetProjectsAgentSessionsContextsResponse,
  GetProjectsAgentSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAgentSessionsContextsRequest,
  output: GetProjectsAgentSessionsContextsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsAgentSessionsContextsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Context;
}

export const CreateProjectsAgentSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Context).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/contexts",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAgentSessionsContextsRequest>;

export type CreateProjectsAgentSessionsContextsResponse =
  GoogleCloudDialogflowV2beta1Context;
export const CreateProjectsAgentSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Context;

export type CreateProjectsAgentSessionsContextsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsAgentSessionsContexts: API.OperationMethod<
  CreateProjectsAgentSessionsContextsRequest,
  CreateProjectsAgentSessionsContextsResponse,
  CreateProjectsAgentSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsAgentSessionsContextsRequest,
  output: CreateProjectsAgentSessionsContextsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsAgentSessionsContextsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Context;
}

export const PatchProjectsAgentSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Context).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAgentSessionsContextsRequest>;

export type PatchProjectsAgentSessionsContextsResponse =
  GoogleCloudDialogflowV2beta1Context;
export const PatchProjectsAgentSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Context;

export type PatchProjectsAgentSessionsContextsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsAgentSessionsContexts: API.OperationMethod<
  PatchProjectsAgentSessionsContextsRequest,
  PatchProjectsAgentSessionsContextsResponse,
  PatchProjectsAgentSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsAgentSessionsContextsRequest,
  output: PatchProjectsAgentSessionsContextsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsAgentEntityTypesRequest {
  name: string;
  languageCode?: string;
}

export const GetProjectsAgentEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAgentEntityTypesRequest>;

export type GetProjectsAgentEntityTypesResponse =
  GoogleCloudDialogflowV2beta1EntityType;
export const GetProjectsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1EntityType;

export type GetProjectsAgentEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsAgentEntityTypes: API.OperationMethod<
  GetProjectsAgentEntityTypesRequest,
  GetProjectsAgentEntityTypesResponse,
  GetProjectsAgentEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAgentEntityTypesRequest,
  output: GetProjectsAgentEntityTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsAgentEntityTypesRequest {
  languageCode?: string;
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1EntityType;
}

export const CreateProjectsAgentEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1EntityType).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/entityTypes",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAgentEntityTypesRequest>;

export type CreateProjectsAgentEntityTypesResponse =
  GoogleCloudDialogflowV2beta1EntityType;
export const CreateProjectsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1EntityType;

export type CreateProjectsAgentEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsAgentEntityTypes: API.OperationMethod<
  CreateProjectsAgentEntityTypesRequest,
  CreateProjectsAgentEntityTypesResponse,
  CreateProjectsAgentEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsAgentEntityTypesRequest,
  output: CreateProjectsAgentEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsAgentEntityTypesRequest {
  name: string;
  languageCode?: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1EntityType;
}

export const PatchProjectsAgentEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1EntityType).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAgentEntityTypesRequest>;

export type PatchProjectsAgentEntityTypesResponse =
  GoogleCloudDialogflowV2beta1EntityType;
export const PatchProjectsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1EntityType;

export type PatchProjectsAgentEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsAgentEntityTypes: API.OperationMethod<
  PatchProjectsAgentEntityTypesRequest,
  PatchProjectsAgentEntityTypesResponse,
  PatchProjectsAgentEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsAgentEntityTypesRequest,
  output: PatchProjectsAgentEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsAgentEntityTypesRequest {
  languageCode?: string;
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsAgentEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/entityTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentEntityTypesRequest>;

export type ListProjectsAgentEntityTypesResponse =
  GoogleCloudDialogflowV2beta1ListEntityTypesResponse;
export const ListProjectsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListEntityTypesResponse;

export type ListProjectsAgentEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsAgentEntityTypes: API.PaginatedOperationMethod<
  ListProjectsAgentEntityTypesRequest,
  ListProjectsAgentEntityTypesResponse,
  ListProjectsAgentEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAgentEntityTypesRequest,
  output: ListProjectsAgentEntityTypesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsAgentEntityTypesRequest {
  name: string;
}

export const DeleteProjectsAgentEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsAgentEntityTypesRequest>;

export type DeleteProjectsAgentEntityTypesResponse = GoogleProtobufEmpty;
export const DeleteProjectsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsAgentEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsAgentEntityTypes: API.OperationMethod<
  DeleteProjectsAgentEntityTypesRequest,
  DeleteProjectsAgentEntityTypesResponse,
  DeleteProjectsAgentEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsAgentEntityTypesRequest,
  output: DeleteProjectsAgentEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchUpdateProjectsAgentEntityTypesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest;
}

export const BatchUpdateProjectsAgentEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/entityTypes:batchUpdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchUpdateProjectsAgentEntityTypesRequest>;

export type BatchUpdateProjectsAgentEntityTypesResponse =
  GoogleLongrunningOperation;
export const BatchUpdateProjectsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type BatchUpdateProjectsAgentEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const batchUpdateProjectsAgentEntityTypes: API.OperationMethod<
  BatchUpdateProjectsAgentEntityTypesRequest,
  BatchUpdateProjectsAgentEntityTypesResponse,
  BatchUpdateProjectsAgentEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchUpdateProjectsAgentEntityTypesRequest,
  output: BatchUpdateProjectsAgentEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchDeleteProjectsAgentEntityTypesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest;
}

export const BatchDeleteProjectsAgentEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/entityTypes:batchDelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchDeleteProjectsAgentEntityTypesRequest>;

export type BatchDeleteProjectsAgentEntityTypesResponse =
  GoogleLongrunningOperation;
export const BatchDeleteProjectsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type BatchDeleteProjectsAgentEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const batchDeleteProjectsAgentEntityTypes: API.OperationMethod<
  BatchDeleteProjectsAgentEntityTypesRequest,
  BatchDeleteProjectsAgentEntityTypesResponse,
  BatchDeleteProjectsAgentEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchDeleteProjectsAgentEntityTypesRequest,
  output: BatchDeleteProjectsAgentEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchUpdateProjectsAgentEntityTypesEntitiesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1BatchUpdateEntitiesRequest;
}

export const BatchUpdateProjectsAgentEntityTypesEntitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1BatchUpdateEntitiesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/entities:batchUpdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchUpdateProjectsAgentEntityTypesEntitiesRequest>;

export type BatchUpdateProjectsAgentEntityTypesEntitiesResponse =
  GoogleLongrunningOperation;
export const BatchUpdateProjectsAgentEntityTypesEntitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type BatchUpdateProjectsAgentEntityTypesEntitiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const batchUpdateProjectsAgentEntityTypesEntities: API.OperationMethod<
  BatchUpdateProjectsAgentEntityTypesEntitiesRequest,
  BatchUpdateProjectsAgentEntityTypesEntitiesResponse,
  BatchUpdateProjectsAgentEntityTypesEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchUpdateProjectsAgentEntityTypesEntitiesRequest,
  output: BatchUpdateProjectsAgentEntityTypesEntitiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchDeleteProjectsAgentEntityTypesEntitiesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1BatchDeleteEntitiesRequest;
}

export const BatchDeleteProjectsAgentEntityTypesEntitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1BatchDeleteEntitiesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/entities:batchDelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchDeleteProjectsAgentEntityTypesEntitiesRequest>;

export type BatchDeleteProjectsAgentEntityTypesEntitiesResponse =
  GoogleLongrunningOperation;
export const BatchDeleteProjectsAgentEntityTypesEntitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type BatchDeleteProjectsAgentEntityTypesEntitiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const batchDeleteProjectsAgentEntityTypesEntities: API.OperationMethod<
  BatchDeleteProjectsAgentEntityTypesEntitiesRequest,
  BatchDeleteProjectsAgentEntityTypesEntitiesResponse,
  BatchDeleteProjectsAgentEntityTypesEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchDeleteProjectsAgentEntityTypesEntitiesRequest,
  output: BatchDeleteProjectsAgentEntityTypesEntitiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchCreateProjectsAgentEntityTypesEntitiesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1BatchCreateEntitiesRequest;
}

export const BatchCreateProjectsAgentEntityTypesEntitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1BatchCreateEntitiesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/entities:batchCreate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchCreateProjectsAgentEntityTypesEntitiesRequest>;

export type BatchCreateProjectsAgentEntityTypesEntitiesResponse =
  GoogleLongrunningOperation;
export const BatchCreateProjectsAgentEntityTypesEntitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type BatchCreateProjectsAgentEntityTypesEntitiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const batchCreateProjectsAgentEntityTypesEntities: API.OperationMethod<
  BatchCreateProjectsAgentEntityTypesEntitiesRequest,
  BatchCreateProjectsAgentEntityTypesEntitiesResponse,
  BatchCreateProjectsAgentEntityTypesEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchCreateProjectsAgentEntityTypesEntitiesRequest,
  output: BatchCreateProjectsAgentEntityTypesEntitiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsAgentIntentsRequest {
  name: string;
  languageCode?: string;
  intentView?: "INTENT_VIEW_UNSPECIFIED" | "INTENT_VIEW_FULL" | (string & {});
}

export const GetProjectsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    intentView: Schema.optional(Schema.String).pipe(T.HttpQuery("intentView")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAgentIntentsRequest>;

export type GetProjectsAgentIntentsResponse =
  GoogleCloudDialogflowV2beta1Intent;
export const GetProjectsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Intent;

export type GetProjectsAgentIntentsError = DefaultErrors | NotFound | Forbidden;

export const getProjectsAgentIntents: API.OperationMethod<
  GetProjectsAgentIntentsRequest,
  GetProjectsAgentIntentsResponse,
  GetProjectsAgentIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAgentIntentsRequest,
  output: GetProjectsAgentIntentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsAgentIntentsRequest {
  languageCode?: string;
  parent: string;
  intentView?: "INTENT_VIEW_UNSPECIFIED" | "INTENT_VIEW_FULL" | (string & {});
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Intent;
}

export const CreateProjectsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    intentView: Schema.optional(Schema.String).pipe(T.HttpQuery("intentView")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Intent).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/intents",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAgentIntentsRequest>;

export type CreateProjectsAgentIntentsResponse =
  GoogleCloudDialogflowV2beta1Intent;
export const CreateProjectsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Intent;

export type CreateProjectsAgentIntentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsAgentIntents: API.OperationMethod<
  CreateProjectsAgentIntentsRequest,
  CreateProjectsAgentIntentsResponse,
  CreateProjectsAgentIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsAgentIntentsRequest,
  output: CreateProjectsAgentIntentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsAgentIntentsRequest {
  name: string;
  languageCode?: string;
  intentView?: "INTENT_VIEW_UNSPECIFIED" | "INTENT_VIEW_FULL" | (string & {});
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Intent;
}

export const PatchProjectsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    intentView: Schema.optional(Schema.String).pipe(T.HttpQuery("intentView")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Intent).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAgentIntentsRequest>;

export type PatchProjectsAgentIntentsResponse =
  GoogleCloudDialogflowV2beta1Intent;
export const PatchProjectsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Intent;

export type PatchProjectsAgentIntentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsAgentIntents: API.OperationMethod<
  PatchProjectsAgentIntentsRequest,
  PatchProjectsAgentIntentsResponse,
  PatchProjectsAgentIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsAgentIntentsRequest,
  output: PatchProjectsAgentIntentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsAgentIntentsRequest {
  parent: string;
  pageToken?: string;
  languageCode?: string;
  intentView?: "INTENT_VIEW_UNSPECIFIED" | "INTENT_VIEW_FULL" | (string & {});
  pageSize?: number;
}

export const ListProjectsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    intentView: Schema.optional(Schema.String).pipe(T.HttpQuery("intentView")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/intents" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentIntentsRequest>;

export type ListProjectsAgentIntentsResponse =
  GoogleCloudDialogflowV2beta1ListIntentsResponse;
export const ListProjectsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListIntentsResponse;

export type ListProjectsAgentIntentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsAgentIntents: API.PaginatedOperationMethod<
  ListProjectsAgentIntentsRequest,
  ListProjectsAgentIntentsResponse,
  ListProjectsAgentIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAgentIntentsRequest,
  output: ListProjectsAgentIntentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsAgentIntentsRequest {
  name: string;
}

export const DeleteProjectsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsAgentIntentsRequest>;

export type DeleteProjectsAgentIntentsResponse = GoogleProtobufEmpty;
export const DeleteProjectsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsAgentIntentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsAgentIntents: API.OperationMethod<
  DeleteProjectsAgentIntentsRequest,
  DeleteProjectsAgentIntentsResponse,
  DeleteProjectsAgentIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsAgentIntentsRequest,
  output: DeleteProjectsAgentIntentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchUpdateProjectsAgentIntentsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequest;
}

export const BatchUpdateProjectsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/intents:batchUpdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchUpdateProjectsAgentIntentsRequest>;

export type BatchUpdateProjectsAgentIntentsResponse =
  GoogleLongrunningOperation;
export const BatchUpdateProjectsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type BatchUpdateProjectsAgentIntentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const batchUpdateProjectsAgentIntents: API.OperationMethod<
  BatchUpdateProjectsAgentIntentsRequest,
  BatchUpdateProjectsAgentIntentsResponse,
  BatchUpdateProjectsAgentIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchUpdateProjectsAgentIntentsRequest,
  output: BatchUpdateProjectsAgentIntentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchDeleteProjectsAgentIntentsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1BatchDeleteIntentsRequest;
}

export const BatchDeleteProjectsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1BatchDeleteIntentsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/intents:batchDelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchDeleteProjectsAgentIntentsRequest>;

export type BatchDeleteProjectsAgentIntentsResponse =
  GoogleLongrunningOperation;
export const BatchDeleteProjectsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type BatchDeleteProjectsAgentIntentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const batchDeleteProjectsAgentIntents: API.OperationMethod<
  BatchDeleteProjectsAgentIntentsRequest,
  BatchDeleteProjectsAgentIntentsResponse,
  BatchDeleteProjectsAgentIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchDeleteProjectsAgentIntentsRequest,
  output: BatchDeleteProjectsAgentIntentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsAgentEnvironmentsRequest {
  name: string;
}

export const GetProjectsAgentEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAgentEnvironmentsRequest>;

export type GetProjectsAgentEnvironmentsResponse =
  GoogleCloudDialogflowV2beta1Environment;
export const GetProjectsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Environment;

export type GetProjectsAgentEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsAgentEnvironments: API.OperationMethod<
  GetProjectsAgentEnvironmentsRequest,
  GetProjectsAgentEnvironmentsResponse,
  GetProjectsAgentEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAgentEnvironmentsRequest,
  output: GetProjectsAgentEnvironmentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsAgentEnvironmentsRequest {
  parent: string;
  environmentId?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Environment;
}

export const CreateProjectsAgentEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    environmentId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("environmentId"),
    ),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Environment).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/environments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAgentEnvironmentsRequest>;

export type CreateProjectsAgentEnvironmentsResponse =
  GoogleCloudDialogflowV2beta1Environment;
export const CreateProjectsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Environment;

export type CreateProjectsAgentEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsAgentEnvironments: API.OperationMethod<
  CreateProjectsAgentEnvironmentsRequest,
  CreateProjectsAgentEnvironmentsResponse,
  CreateProjectsAgentEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsAgentEnvironmentsRequest,
  output: CreateProjectsAgentEnvironmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsAgentEnvironmentsRequest {
  name: string;
  updateMask?: string;
  allowLoadToDraftAndDiscardChanges?: boolean;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Environment;
}

export const PatchProjectsAgentEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    allowLoadToDraftAndDiscardChanges: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowLoadToDraftAndDiscardChanges"),
    ),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Environment).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAgentEnvironmentsRequest>;

export type PatchProjectsAgentEnvironmentsResponse =
  GoogleCloudDialogflowV2beta1Environment;
export const PatchProjectsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Environment;

export type PatchProjectsAgentEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsAgentEnvironments: API.OperationMethod<
  PatchProjectsAgentEnvironmentsRequest,
  PatchProjectsAgentEnvironmentsResponse,
  PatchProjectsAgentEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsAgentEnvironmentsRequest,
  output: PatchProjectsAgentEnvironmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetHistoryProjectsAgentEnvironmentsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const GetHistoryProjectsAgentEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/history" }),
    svc,
  ) as unknown as Schema.Schema<GetHistoryProjectsAgentEnvironmentsRequest>;

export type GetHistoryProjectsAgentEnvironmentsResponse =
  GoogleCloudDialogflowV2beta1EnvironmentHistory;
export const GetHistoryProjectsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1EnvironmentHistory;

export type GetHistoryProjectsAgentEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getHistoryProjectsAgentEnvironments: API.PaginatedOperationMethod<
  GetHistoryProjectsAgentEnvironmentsRequest,
  GetHistoryProjectsAgentEnvironmentsResponse,
  GetHistoryProjectsAgentEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: GetHistoryProjectsAgentEnvironmentsRequest,
  output: GetHistoryProjectsAgentEnvironmentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsAgentEnvironmentsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsAgentEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/environments" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentEnvironmentsRequest>;

export type ListProjectsAgentEnvironmentsResponse =
  GoogleCloudDialogflowV2beta1ListEnvironmentsResponse;
export const ListProjectsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListEnvironmentsResponse;

export type ListProjectsAgentEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsAgentEnvironments: API.PaginatedOperationMethod<
  ListProjectsAgentEnvironmentsRequest,
  ListProjectsAgentEnvironmentsResponse,
  ListProjectsAgentEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAgentEnvironmentsRequest,
  output: ListProjectsAgentEnvironmentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsAgentEnvironmentsRequest {
  name: string;
}

export const DeleteProjectsAgentEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsAgentEnvironmentsRequest>;

export type DeleteProjectsAgentEnvironmentsResponse = GoogleProtobufEmpty;
export const DeleteProjectsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsAgentEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsAgentEnvironments: API.OperationMethod<
  DeleteProjectsAgentEnvironmentsRequest,
  DeleteProjectsAgentEnvironmentsResponse,
  DeleteProjectsAgentEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsAgentEnvironmentsRequest,
  output: DeleteProjectsAgentEnvironmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteContextsProjectsAgentEnvironmentsUsersSessionsRequest {
  parent: string;
}

export const DeleteContextsProjectsAgentEnvironmentsUsersSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+parent}/contexts" }),
    svc,
  ) as unknown as Schema.Schema<DeleteContextsProjectsAgentEnvironmentsUsersSessionsRequest>;

export type DeleteContextsProjectsAgentEnvironmentsUsersSessionsResponse =
  GoogleProtobufEmpty;
export const DeleteContextsProjectsAgentEnvironmentsUsersSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteContextsProjectsAgentEnvironmentsUsersSessionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteContextsProjectsAgentEnvironmentsUsersSessions: API.OperationMethod<
  DeleteContextsProjectsAgentEnvironmentsUsersSessionsRequest,
  DeleteContextsProjectsAgentEnvironmentsUsersSessionsResponse,
  DeleteContextsProjectsAgentEnvironmentsUsersSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteContextsProjectsAgentEnvironmentsUsersSessionsRequest,
  output: DeleteContextsProjectsAgentEnvironmentsUsersSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DetectIntentProjectsAgentEnvironmentsUsersSessionsRequest {
  session: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1DetectIntentRequest;
}

export const DetectIntentProjectsAgentEnvironmentsUsersSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.HttpPath("session")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1DetectIntentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+session}:detectIntent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DetectIntentProjectsAgentEnvironmentsUsersSessionsRequest>;

export type DetectIntentProjectsAgentEnvironmentsUsersSessionsResponse =
  GoogleCloudDialogflowV2beta1DetectIntentResponse;
export const DetectIntentProjectsAgentEnvironmentsUsersSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1DetectIntentResponse;

export type DetectIntentProjectsAgentEnvironmentsUsersSessionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const detectIntentProjectsAgentEnvironmentsUsersSessions: API.OperationMethod<
  DetectIntentProjectsAgentEnvironmentsUsersSessionsRequest,
  DetectIntentProjectsAgentEnvironmentsUsersSessionsResponse,
  DetectIntentProjectsAgentEnvironmentsUsersSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DetectIntentProjectsAgentEnvironmentsUsersSessionsRequest,
  output: DetectIntentProjectsAgentEnvironmentsUsersSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest {
  name: string;
}

export const GetProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest>;

export type GetProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2beta1SessionEntityType;
export const GetProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1SessionEntityType;

export type GetProjectsAgentEnvironmentsUsersSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsAgentEnvironmentsUsersSessionsEntityTypes: API.OperationMethod<
  GetProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  GetProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  GetProjectsAgentEnvironmentsUsersSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  output: GetProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1SessionEntityType;
}

export const CreateProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1SessionEntityType).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/entityTypes",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest>;

export type CreateProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2beta1SessionEntityType;
export const CreateProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1SessionEntityType;

export type CreateProjectsAgentEnvironmentsUsersSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsAgentEnvironmentsUsersSessionsEntityTypes: API.OperationMethod<
  CreateProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  CreateProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  CreateProjectsAgentEnvironmentsUsersSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  output: CreateProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1SessionEntityType;
}

export const PatchProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1SessionEntityType).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest>;

export type PatchProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2beta1SessionEntityType;
export const PatchProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1SessionEntityType;

export type PatchProjectsAgentEnvironmentsUsersSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsAgentEnvironmentsUsersSessionsEntityTypes: API.OperationMethod<
  PatchProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  PatchProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  PatchProjectsAgentEnvironmentsUsersSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  output: PatchProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/entityTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest>;

export type ListProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse;
export const ListProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse;

export type ListProjectsAgentEnvironmentsUsersSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsAgentEnvironmentsUsersSessionsEntityTypes: API.PaginatedOperationMethod<
  ListProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  ListProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  ListProjectsAgentEnvironmentsUsersSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  output: ListProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest {
  name: string;
}

export const DeleteProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest>;

export type DeleteProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsAgentEnvironmentsUsersSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsAgentEnvironmentsUsersSessionsEntityTypes: API.OperationMethod<
  DeleteProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  DeleteProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  DeleteProjectsAgentEnvironmentsUsersSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  output: DeleteProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsAgentEnvironmentsUsersSessionsContextsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsAgentEnvironmentsUsersSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/contexts" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentEnvironmentsUsersSessionsContextsRequest>;

export type ListProjectsAgentEnvironmentsUsersSessionsContextsResponse =
  GoogleCloudDialogflowV2beta1ListContextsResponse;
export const ListProjectsAgentEnvironmentsUsersSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListContextsResponse;

export type ListProjectsAgentEnvironmentsUsersSessionsContextsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsAgentEnvironmentsUsersSessionsContexts: API.PaginatedOperationMethod<
  ListProjectsAgentEnvironmentsUsersSessionsContextsRequest,
  ListProjectsAgentEnvironmentsUsersSessionsContextsResponse,
  ListProjectsAgentEnvironmentsUsersSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAgentEnvironmentsUsersSessionsContextsRequest,
  output: ListProjectsAgentEnvironmentsUsersSessionsContextsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsAgentEnvironmentsUsersSessionsContextsRequest {
  name: string;
}

export const DeleteProjectsAgentEnvironmentsUsersSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsAgentEnvironmentsUsersSessionsContextsRequest>;

export type DeleteProjectsAgentEnvironmentsUsersSessionsContextsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsAgentEnvironmentsUsersSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsAgentEnvironmentsUsersSessionsContextsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsAgentEnvironmentsUsersSessionsContexts: API.OperationMethod<
  DeleteProjectsAgentEnvironmentsUsersSessionsContextsRequest,
  DeleteProjectsAgentEnvironmentsUsersSessionsContextsResponse,
  DeleteProjectsAgentEnvironmentsUsersSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsAgentEnvironmentsUsersSessionsContextsRequest,
  output: DeleteProjectsAgentEnvironmentsUsersSessionsContextsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsAgentEnvironmentsUsersSessionsContextsRequest {
  name: string;
}

export const GetProjectsAgentEnvironmentsUsersSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAgentEnvironmentsUsersSessionsContextsRequest>;

export type GetProjectsAgentEnvironmentsUsersSessionsContextsResponse =
  GoogleCloudDialogflowV2beta1Context;
export const GetProjectsAgentEnvironmentsUsersSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Context;

export type GetProjectsAgentEnvironmentsUsersSessionsContextsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsAgentEnvironmentsUsersSessionsContexts: API.OperationMethod<
  GetProjectsAgentEnvironmentsUsersSessionsContextsRequest,
  GetProjectsAgentEnvironmentsUsersSessionsContextsResponse,
  GetProjectsAgentEnvironmentsUsersSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAgentEnvironmentsUsersSessionsContextsRequest,
  output: GetProjectsAgentEnvironmentsUsersSessionsContextsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsAgentEnvironmentsUsersSessionsContextsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Context;
}

export const CreateProjectsAgentEnvironmentsUsersSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Context).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/contexts",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAgentEnvironmentsUsersSessionsContextsRequest>;

export type CreateProjectsAgentEnvironmentsUsersSessionsContextsResponse =
  GoogleCloudDialogflowV2beta1Context;
export const CreateProjectsAgentEnvironmentsUsersSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Context;

export type CreateProjectsAgentEnvironmentsUsersSessionsContextsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsAgentEnvironmentsUsersSessionsContexts: API.OperationMethod<
  CreateProjectsAgentEnvironmentsUsersSessionsContextsRequest,
  CreateProjectsAgentEnvironmentsUsersSessionsContextsResponse,
  CreateProjectsAgentEnvironmentsUsersSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsAgentEnvironmentsUsersSessionsContextsRequest,
  output: CreateProjectsAgentEnvironmentsUsersSessionsContextsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsAgentEnvironmentsUsersSessionsContextsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Context;
}

export const PatchProjectsAgentEnvironmentsUsersSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Context).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAgentEnvironmentsUsersSessionsContextsRequest>;

export type PatchProjectsAgentEnvironmentsUsersSessionsContextsResponse =
  GoogleCloudDialogflowV2beta1Context;
export const PatchProjectsAgentEnvironmentsUsersSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Context;

export type PatchProjectsAgentEnvironmentsUsersSessionsContextsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsAgentEnvironmentsUsersSessionsContexts: API.OperationMethod<
  PatchProjectsAgentEnvironmentsUsersSessionsContextsRequest,
  PatchProjectsAgentEnvironmentsUsersSessionsContextsResponse,
  PatchProjectsAgentEnvironmentsUsersSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsAgentEnvironmentsUsersSessionsContextsRequest,
  output: PatchProjectsAgentEnvironmentsUsersSessionsContextsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsAgentEnvironmentsIntentsRequest {
  languageCode?: string;
  pageSize?: number;
  intentView?: "INTENT_VIEW_UNSPECIFIED" | "INTENT_VIEW_FULL" | (string & {});
  parent: string;
  pageToken?: string;
}

export const ListProjectsAgentEnvironmentsIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    intentView: Schema.optional(Schema.String).pipe(T.HttpQuery("intentView")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/intents" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentEnvironmentsIntentsRequest>;

export type ListProjectsAgentEnvironmentsIntentsResponse =
  GoogleCloudDialogflowV2beta1ListIntentsResponse;
export const ListProjectsAgentEnvironmentsIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListIntentsResponse;

export type ListProjectsAgentEnvironmentsIntentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsAgentEnvironmentsIntents: API.PaginatedOperationMethod<
  ListProjectsAgentEnvironmentsIntentsRequest,
  ListProjectsAgentEnvironmentsIntentsResponse,
  ListProjectsAgentEnvironmentsIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAgentEnvironmentsIntentsRequest,
  output: ListProjectsAgentEnvironmentsIntentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsAgentKnowledgeBasesRequest {
  name: string;
}

export const GetProjectsAgentKnowledgeBasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAgentKnowledgeBasesRequest>;

export type GetProjectsAgentKnowledgeBasesResponse =
  GoogleCloudDialogflowV2beta1KnowledgeBase;
export const GetProjectsAgentKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1KnowledgeBase;

export type GetProjectsAgentKnowledgeBasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsAgentKnowledgeBases: API.OperationMethod<
  GetProjectsAgentKnowledgeBasesRequest,
  GetProjectsAgentKnowledgeBasesResponse,
  GetProjectsAgentKnowledgeBasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAgentKnowledgeBasesRequest,
  output: GetProjectsAgentKnowledgeBasesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsAgentKnowledgeBasesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1KnowledgeBase;
}

export const CreateProjectsAgentKnowledgeBasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1KnowledgeBase).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/knowledgeBases",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAgentKnowledgeBasesRequest>;

export type CreateProjectsAgentKnowledgeBasesResponse =
  GoogleCloudDialogflowV2beta1KnowledgeBase;
export const CreateProjectsAgentKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1KnowledgeBase;

export type CreateProjectsAgentKnowledgeBasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsAgentKnowledgeBases: API.OperationMethod<
  CreateProjectsAgentKnowledgeBasesRequest,
  CreateProjectsAgentKnowledgeBasesResponse,
  CreateProjectsAgentKnowledgeBasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsAgentKnowledgeBasesRequest,
  output: CreateProjectsAgentKnowledgeBasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsAgentKnowledgeBasesRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1KnowledgeBase;
}

export const PatchProjectsAgentKnowledgeBasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1KnowledgeBase).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAgentKnowledgeBasesRequest>;

export type PatchProjectsAgentKnowledgeBasesResponse =
  GoogleCloudDialogflowV2beta1KnowledgeBase;
export const PatchProjectsAgentKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1KnowledgeBase;

export type PatchProjectsAgentKnowledgeBasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsAgentKnowledgeBases: API.OperationMethod<
  PatchProjectsAgentKnowledgeBasesRequest,
  PatchProjectsAgentKnowledgeBasesResponse,
  PatchProjectsAgentKnowledgeBasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsAgentKnowledgeBasesRequest,
  output: PatchProjectsAgentKnowledgeBasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsAgentKnowledgeBasesRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
  filter?: string;
}

export const ListProjectsAgentKnowledgeBasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/knowledgeBases" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentKnowledgeBasesRequest>;

export type ListProjectsAgentKnowledgeBasesResponse =
  GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse;
export const ListProjectsAgentKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse;

export type ListProjectsAgentKnowledgeBasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsAgentKnowledgeBases: API.PaginatedOperationMethod<
  ListProjectsAgentKnowledgeBasesRequest,
  ListProjectsAgentKnowledgeBasesResponse,
  ListProjectsAgentKnowledgeBasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAgentKnowledgeBasesRequest,
  output: ListProjectsAgentKnowledgeBasesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsAgentKnowledgeBasesRequest {
  name: string;
  force?: boolean;
}

export const DeleteProjectsAgentKnowledgeBasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsAgentKnowledgeBasesRequest>;

export type DeleteProjectsAgentKnowledgeBasesResponse = GoogleProtobufEmpty;
export const DeleteProjectsAgentKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsAgentKnowledgeBasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsAgentKnowledgeBases: API.OperationMethod<
  DeleteProjectsAgentKnowledgeBasesRequest,
  DeleteProjectsAgentKnowledgeBasesResponse,
  DeleteProjectsAgentKnowledgeBasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsAgentKnowledgeBasesRequest,
  output: DeleteProjectsAgentKnowledgeBasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsAgentKnowledgeBasesDocumentsRequest {
  name: string;
}

export const GetProjectsAgentKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAgentKnowledgeBasesDocumentsRequest>;

export type GetProjectsAgentKnowledgeBasesDocumentsResponse =
  GoogleCloudDialogflowV2beta1Document;
export const GetProjectsAgentKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Document;

export type GetProjectsAgentKnowledgeBasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsAgentKnowledgeBasesDocuments: API.OperationMethod<
  GetProjectsAgentKnowledgeBasesDocumentsRequest,
  GetProjectsAgentKnowledgeBasesDocumentsResponse,
  GetProjectsAgentKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAgentKnowledgeBasesDocumentsRequest,
  output: GetProjectsAgentKnowledgeBasesDocumentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsAgentKnowledgeBasesDocumentsRequest {
  parent: string;
  importGcsCustomMetadata?: boolean;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Document;
}

export const CreateProjectsAgentKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    importGcsCustomMetadata: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("importGcsCustomMetadata"),
    ),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Document).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/documents",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAgentKnowledgeBasesDocumentsRequest>;

export type CreateProjectsAgentKnowledgeBasesDocumentsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsAgentKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsAgentKnowledgeBasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsAgentKnowledgeBasesDocuments: API.OperationMethod<
  CreateProjectsAgentKnowledgeBasesDocumentsRequest,
  CreateProjectsAgentKnowledgeBasesDocumentsResponse,
  CreateProjectsAgentKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsAgentKnowledgeBasesDocumentsRequest,
  output: CreateProjectsAgentKnowledgeBasesDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsAgentKnowledgeBasesDocumentsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Document;
}

export const PatchProjectsAgentKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Document).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAgentKnowledgeBasesDocumentsRequest>;

export type PatchProjectsAgentKnowledgeBasesDocumentsResponse =
  GoogleLongrunningOperation;
export const PatchProjectsAgentKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsAgentKnowledgeBasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsAgentKnowledgeBasesDocuments: API.OperationMethod<
  PatchProjectsAgentKnowledgeBasesDocumentsRequest,
  PatchProjectsAgentKnowledgeBasesDocumentsResponse,
  PatchProjectsAgentKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsAgentKnowledgeBasesDocumentsRequest,
  output: PatchProjectsAgentKnowledgeBasesDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsAgentKnowledgeBasesDocumentsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
  filter?: string;
}

export const ListProjectsAgentKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/documents" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentKnowledgeBasesDocumentsRequest>;

export type ListProjectsAgentKnowledgeBasesDocumentsResponse =
  GoogleCloudDialogflowV2beta1ListDocumentsResponse;
export const ListProjectsAgentKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListDocumentsResponse;

export type ListProjectsAgentKnowledgeBasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsAgentKnowledgeBasesDocuments: API.PaginatedOperationMethod<
  ListProjectsAgentKnowledgeBasesDocumentsRequest,
  ListProjectsAgentKnowledgeBasesDocumentsResponse,
  ListProjectsAgentKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAgentKnowledgeBasesDocumentsRequest,
  output: ListProjectsAgentKnowledgeBasesDocumentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsAgentKnowledgeBasesDocumentsRequest {
  name: string;
}

export const DeleteProjectsAgentKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsAgentKnowledgeBasesDocumentsRequest>;

export type DeleteProjectsAgentKnowledgeBasesDocumentsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsAgentKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsAgentKnowledgeBasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsAgentKnowledgeBasesDocuments: API.OperationMethod<
  DeleteProjectsAgentKnowledgeBasesDocumentsRequest,
  DeleteProjectsAgentKnowledgeBasesDocumentsResponse,
  DeleteProjectsAgentKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsAgentKnowledgeBasesDocumentsRequest,
  output: DeleteProjectsAgentKnowledgeBasesDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ReloadProjectsAgentKnowledgeBasesDocumentsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1ReloadDocumentRequest;
}

export const ReloadProjectsAgentKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1ReloadDocumentRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2beta1/{+name}:reload", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ReloadProjectsAgentKnowledgeBasesDocumentsRequest>;

export type ReloadProjectsAgentKnowledgeBasesDocumentsResponse =
  GoogleLongrunningOperation;
export const ReloadProjectsAgentKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ReloadProjectsAgentKnowledgeBasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const reloadProjectsAgentKnowledgeBasesDocuments: API.OperationMethod<
  ReloadProjectsAgentKnowledgeBasesDocumentsRequest,
  ReloadProjectsAgentKnowledgeBasesDocumentsResponse,
  ReloadProjectsAgentKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReloadProjectsAgentKnowledgeBasesDocumentsRequest,
  output: ReloadProjectsAgentKnowledgeBasesDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsAgentVersionsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsAgentVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/versions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentVersionsRequest>;

export type ListProjectsAgentVersionsResponse =
  GoogleCloudDialogflowV2beta1ListVersionsResponse;
export const ListProjectsAgentVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListVersionsResponse;

export type ListProjectsAgentVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsAgentVersions: API.PaginatedOperationMethod<
  ListProjectsAgentVersionsRequest,
  ListProjectsAgentVersionsResponse,
  ListProjectsAgentVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAgentVersionsRequest,
  output: ListProjectsAgentVersionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsAgentVersionsRequest {
  name: string;
}

export const DeleteProjectsAgentVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsAgentVersionsRequest>;

export type DeleteProjectsAgentVersionsResponse = GoogleProtobufEmpty;
export const DeleteProjectsAgentVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsAgentVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsAgentVersions: API.OperationMethod<
  DeleteProjectsAgentVersionsRequest,
  DeleteProjectsAgentVersionsResponse,
  DeleteProjectsAgentVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsAgentVersionsRequest,
  output: DeleteProjectsAgentVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsAgentVersionsRequest {
  name: string;
}

export const GetProjectsAgentVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAgentVersionsRequest>;

export type GetProjectsAgentVersionsResponse =
  GoogleCloudDialogflowV2beta1Version;
export const GetProjectsAgentVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Version;

export type GetProjectsAgentVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsAgentVersions: API.OperationMethod<
  GetProjectsAgentVersionsRequest,
  GetProjectsAgentVersionsResponse,
  GetProjectsAgentVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAgentVersionsRequest,
  output: GetProjectsAgentVersionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsAgentVersionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Version;
}

export const CreateProjectsAgentVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Version).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/versions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAgentVersionsRequest>;

export type CreateProjectsAgentVersionsResponse =
  GoogleCloudDialogflowV2beta1Version;
export const CreateProjectsAgentVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Version;

export type CreateProjectsAgentVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsAgentVersions: API.OperationMethod<
  CreateProjectsAgentVersionsRequest,
  CreateProjectsAgentVersionsResponse,
  CreateProjectsAgentVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsAgentVersionsRequest,
  output: CreateProjectsAgentVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsAgentVersionsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Version;
}

export const PatchProjectsAgentVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Version).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAgentVersionsRequest>;

export type PatchProjectsAgentVersionsResponse =
  GoogleCloudDialogflowV2beta1Version;
export const PatchProjectsAgentVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Version;

export type PatchProjectsAgentVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsAgentVersions: API.OperationMethod<
  PatchProjectsAgentVersionsRequest,
  PatchProjectsAgentVersionsResponse,
  PatchProjectsAgentVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsAgentVersionsRequest,
  output: PatchProjectsAgentVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsKnowledgeBasesRequest {
  name: string;
}

export const GetProjectsKnowledgeBasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsKnowledgeBasesRequest>;

export type GetProjectsKnowledgeBasesResponse =
  GoogleCloudDialogflowV2beta1KnowledgeBase;
export const GetProjectsKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1KnowledgeBase;

export type GetProjectsKnowledgeBasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsKnowledgeBases: API.OperationMethod<
  GetProjectsKnowledgeBasesRequest,
  GetProjectsKnowledgeBasesResponse,
  GetProjectsKnowledgeBasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsKnowledgeBasesRequest,
  output: GetProjectsKnowledgeBasesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsKnowledgeBasesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1KnowledgeBase;
}

export const CreateProjectsKnowledgeBasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1KnowledgeBase).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/knowledgeBases",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsKnowledgeBasesRequest>;

export type CreateProjectsKnowledgeBasesResponse =
  GoogleCloudDialogflowV2beta1KnowledgeBase;
export const CreateProjectsKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1KnowledgeBase;

export type CreateProjectsKnowledgeBasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsKnowledgeBases: API.OperationMethod<
  CreateProjectsKnowledgeBasesRequest,
  CreateProjectsKnowledgeBasesResponse,
  CreateProjectsKnowledgeBasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsKnowledgeBasesRequest,
  output: CreateProjectsKnowledgeBasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsKnowledgeBasesRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1KnowledgeBase;
}

export const PatchProjectsKnowledgeBasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1KnowledgeBase).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsKnowledgeBasesRequest>;

export type PatchProjectsKnowledgeBasesResponse =
  GoogleCloudDialogflowV2beta1KnowledgeBase;
export const PatchProjectsKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1KnowledgeBase;

export type PatchProjectsKnowledgeBasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsKnowledgeBases: API.OperationMethod<
  PatchProjectsKnowledgeBasesRequest,
  PatchProjectsKnowledgeBasesResponse,
  PatchProjectsKnowledgeBasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsKnowledgeBasesRequest,
  output: PatchProjectsKnowledgeBasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsKnowledgeBasesRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
  filter?: string;
}

export const ListProjectsKnowledgeBasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/knowledgeBases" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsKnowledgeBasesRequest>;

export type ListProjectsKnowledgeBasesResponse =
  GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse;
export const ListProjectsKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse;

export type ListProjectsKnowledgeBasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsKnowledgeBases: API.PaginatedOperationMethod<
  ListProjectsKnowledgeBasesRequest,
  ListProjectsKnowledgeBasesResponse,
  ListProjectsKnowledgeBasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsKnowledgeBasesRequest,
  output: ListProjectsKnowledgeBasesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsKnowledgeBasesRequest {
  name: string;
  force?: boolean;
}

export const DeleteProjectsKnowledgeBasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsKnowledgeBasesRequest>;

export type DeleteProjectsKnowledgeBasesResponse = GoogleProtobufEmpty;
export const DeleteProjectsKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsKnowledgeBasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsKnowledgeBases: API.OperationMethod<
  DeleteProjectsKnowledgeBasesRequest,
  DeleteProjectsKnowledgeBasesResponse,
  DeleteProjectsKnowledgeBasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsKnowledgeBasesRequest,
  output: DeleteProjectsKnowledgeBasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ReloadProjectsKnowledgeBasesDocumentsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1ReloadDocumentRequest;
}

export const ReloadProjectsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1ReloadDocumentRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2beta1/{+name}:reload", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ReloadProjectsKnowledgeBasesDocumentsRequest>;

export type ReloadProjectsKnowledgeBasesDocumentsResponse =
  GoogleLongrunningOperation;
export const ReloadProjectsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ReloadProjectsKnowledgeBasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const reloadProjectsKnowledgeBasesDocuments: API.OperationMethod<
  ReloadProjectsKnowledgeBasesDocumentsRequest,
  ReloadProjectsKnowledgeBasesDocumentsResponse,
  ReloadProjectsKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReloadProjectsKnowledgeBasesDocumentsRequest,
  output: ReloadProjectsKnowledgeBasesDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsKnowledgeBasesDocumentsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
  filter?: string;
}

export const ListProjectsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+parent}/documents" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsKnowledgeBasesDocumentsRequest>;

export type ListProjectsKnowledgeBasesDocumentsResponse =
  GoogleCloudDialogflowV2beta1ListDocumentsResponse;
export const ListProjectsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1ListDocumentsResponse;

export type ListProjectsKnowledgeBasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsKnowledgeBasesDocuments: API.PaginatedOperationMethod<
  ListProjectsKnowledgeBasesDocumentsRequest,
  ListProjectsKnowledgeBasesDocumentsResponse,
  ListProjectsKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsKnowledgeBasesDocumentsRequest,
  output: ListProjectsKnowledgeBasesDocumentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsKnowledgeBasesDocumentsRequest {
  name: string;
}

export const DeleteProjectsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsKnowledgeBasesDocumentsRequest>;

export type DeleteProjectsKnowledgeBasesDocumentsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsKnowledgeBasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsKnowledgeBasesDocuments: API.OperationMethod<
  DeleteProjectsKnowledgeBasesDocumentsRequest,
  DeleteProjectsKnowledgeBasesDocumentsResponse,
  DeleteProjectsKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsKnowledgeBasesDocumentsRequest,
  output: DeleteProjectsKnowledgeBasesDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ImportProjectsKnowledgeBasesDocumentsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1ImportDocumentsRequest;
}

export const ImportProjectsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2beta1ImportDocumentsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/documents:import",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ImportProjectsKnowledgeBasesDocumentsRequest>;

export type ImportProjectsKnowledgeBasesDocumentsResponse =
  GoogleLongrunningOperation;
export const ImportProjectsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ImportProjectsKnowledgeBasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const importProjectsKnowledgeBasesDocuments: API.OperationMethod<
  ImportProjectsKnowledgeBasesDocumentsRequest,
  ImportProjectsKnowledgeBasesDocumentsResponse,
  ImportProjectsKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportProjectsKnowledgeBasesDocumentsRequest,
  output: ImportProjectsKnowledgeBasesDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsKnowledgeBasesDocumentsRequest {
  name: string;
}

export const GetProjectsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsKnowledgeBasesDocumentsRequest>;

export type GetProjectsKnowledgeBasesDocumentsResponse =
  GoogleCloudDialogflowV2beta1Document;
export const GetProjectsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2beta1Document;

export type GetProjectsKnowledgeBasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsKnowledgeBasesDocuments: API.OperationMethod<
  GetProjectsKnowledgeBasesDocumentsRequest,
  GetProjectsKnowledgeBasesDocumentsResponse,
  GetProjectsKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsKnowledgeBasesDocumentsRequest,
  output: GetProjectsKnowledgeBasesDocumentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsKnowledgeBasesDocumentsRequest {
  parent: string;
  importGcsCustomMetadata?: boolean;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Document;
}

export const CreateProjectsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    importGcsCustomMetadata: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("importGcsCustomMetadata"),
    ),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Document).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta1/{+parent}/documents",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsKnowledgeBasesDocumentsRequest>;

export type CreateProjectsKnowledgeBasesDocumentsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsKnowledgeBasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsKnowledgeBasesDocuments: API.OperationMethod<
  CreateProjectsKnowledgeBasesDocumentsRequest,
  CreateProjectsKnowledgeBasesDocumentsResponse,
  CreateProjectsKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsKnowledgeBasesDocumentsRequest,
  output: CreateProjectsKnowledgeBasesDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsKnowledgeBasesDocumentsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2beta1Document;
}

export const PatchProjectsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2beta1Document).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsKnowledgeBasesDocumentsRequest>;

export type PatchProjectsKnowledgeBasesDocumentsResponse =
  GoogleLongrunningOperation;
export const PatchProjectsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsKnowledgeBasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsKnowledgeBasesDocuments: API.OperationMethod<
  PatchProjectsKnowledgeBasesDocumentsRequest,
  PatchProjectsKnowledgeBasesDocumentsResponse,
  PatchProjectsKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsKnowledgeBasesDocumentsRequest,
  output: PatchProjectsKnowledgeBasesDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsOperationsRequest {
  pageSize?: number;
  name: string;
  filter?: string;
  pageToken?: string;
  returnPartialSuccess?: boolean;
}

export const ListProjectsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsOperationsRequest>;

export type ListProjectsOperationsResponse =
  GoogleLongrunningListOperationsResponse;
export const ListProjectsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningListOperationsResponse;

export type ListProjectsOperationsError = DefaultErrors | NotFound | Forbidden;

export const listProjectsOperations: API.PaginatedOperationMethod<
  ListProjectsOperationsRequest,
  ListProjectsOperationsResponse,
  ListProjectsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsOperationsRequest,
  output: ListProjectsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsOperationsRequest {
  name: string;
}

export const GetProjectsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsOperationsRequest>;

export type GetProjectsOperationsResponse = GoogleLongrunningOperation;
export const GetProjectsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type GetProjectsOperationsError = DefaultErrors | NotFound | Forbidden;

export const getProjectsOperations: API.OperationMethod<
  GetProjectsOperationsRequest,
  GetProjectsOperationsResponse,
  GetProjectsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsOperationsRequest,
  output: GetProjectsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CancelProjectsOperationsRequest {
  name: string;
}

export const CancelProjectsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "POST", path: "v2beta1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsOperationsRequest>;

export type CancelProjectsOperationsResponse = GoogleProtobufEmpty;
export const CancelProjectsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsOperationsRequest,
  output: CancelProjectsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
