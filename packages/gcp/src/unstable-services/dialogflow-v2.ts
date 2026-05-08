// ==========================================================================
// Dialogflow API (dialogflow v2)
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
  version: "v2",
  rootUrl: "https://dialogflow.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleCloudDialogflowV2ToolFunctionTool {
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

export const GoogleCloudDialogflowV2ToolFunctionTool: Schema.Schema<GoogleCloudDialogflowV2ToolFunctionTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    methodType: Schema.optional(Schema.String),
    inputSchema: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    outputSchema: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolFunctionTool" });

export interface GoogleCloudDialogflowV2beta1IntentMessageText {
  text?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageText: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageText> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentMessageText" });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia {
  thumbnailUri?: string;
  height?: "HEIGHT_UNSPECIFIED" | "SHORT" | "MEDIUM" | "TALL" | (string & {});
  fileUri?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    thumbnailUri: Schema.optional(Schema.String),
    height: Schema.optional(Schema.String),
    fileUri: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia",
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

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction {
  shareLocation?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation;
  text?: string;
  dial?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial;
  openUrl?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri;
  postbackData?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    shareLocation: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation,
    ),
    text: Schema.optional(Schema.String),
    dial: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial,
    ),
    openUrl: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri,
    ),
    postbackData: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent {
  title?: string;
  description?: string;
  media?: GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia;
  suggestions?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    media: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia,
    ),
    suggestions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent",
  });

export interface GoogleCloudDialogflowV2EnvironmentHistoryEntry {
  createTime?: string;
  agentVersion?: string;
  description?: string;
}

export const GoogleCloudDialogflowV2EnvironmentHistoryEntry: Schema.Schema<GoogleCloudDialogflowV2EnvironmentHistoryEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    agentVersion: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2EnvironmentHistoryEntry" });

export interface GoogleCloudDialogflowV2EnvironmentHistory {
  parent?: string;
  entries?: ReadonlyArray<GoogleCloudDialogflowV2EnvironmentHistoryEntry>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2EnvironmentHistory: Schema.Schema<GoogleCloudDialogflowV2EnvironmentHistory> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.optional(Schema.String),
    entries: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2EnvironmentHistoryEntry),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2EnvironmentHistory" });

export interface GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo {
  required?: boolean;
  state?:
    | "PARAMETER_STATE_UNSPECIFIED"
    | "EMPTY"
    | "INVALID"
    | "FILLED"
    | (string & {});
  displayName?: string;
  value?: unknown;
  justCollected?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo: Schema.Schema<GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    required: Schema.optional(Schema.Boolean),
    state: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Unknown),
    justCollected: Schema.optional(Schema.Boolean),
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
  formInfo?: GoogleCloudDialogflowCxV3beta1PageInfoFormInfo;
  currentPage?: string;
  displayName?: string;
}

export const GoogleCloudDialogflowCxV3beta1PageInfo: Schema.Schema<GoogleCloudDialogflowCxV3beta1PageInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    formInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1PageInfoFormInfo),
    currentPage: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1PageInfo" });

export interface GoogleCloudDialogflowV2SummarySuggestionSummarySection {
  section?: string;
  summary?: string;
}

export const GoogleCloudDialogflowV2SummarySuggestionSummarySection: Schema.Schema<GoogleCloudDialogflowV2SummarySuggestionSummarySection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    section: Schema.optional(Schema.String),
    summary: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SummarySuggestionSummarySection",
  });

export interface GoogleCloudDialogflowV2CesToolSpec {
  confirmationRequirement?:
    | "CONFIRMATION_REQUIREMENT_UNSPECIFIED"
    | "REQUIRED"
    | "NOT_REQUIRED"
    | (string & {});
  cesTool?: string;
}

export const GoogleCloudDialogflowV2CesToolSpec: Schema.Schema<GoogleCloudDialogflowV2CesToolSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confirmationRequirement: Schema.optional(Schema.String),
    cesTool: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2CesToolSpec" });

export interface GoogleCloudDialogflowCxV3beta1IntentInput {
  intent?: string;
}

export const GoogleCloudDialogflowCxV3beta1IntentInput: Schema.Schema<GoogleCloudDialogflowCxV3beta1IntentInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1IntentInput" });

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
  autoExpansionMode?:
    | "AUTO_EXPANSION_MODE_UNSPECIFIED"
    | "AUTO_EXPANSION_MODE_DEFAULT"
    | (string & {});
  entities?: ReadonlyArray<GoogleCloudDialogflowV2EntityTypeEntity>;
  name?: string;
  kind?:
    | "KIND_UNSPECIFIED"
    | "KIND_MAP"
    | "KIND_LIST"
    | "KIND_REGEXP"
    | (string & {});
  displayName?: string;
  enableFuzzyExtraction?: boolean;
}

export const GoogleCloudDialogflowV2EntityType: Schema.Schema<GoogleCloudDialogflowV2EntityType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    autoExpansionMode: Schema.optional(Schema.String),
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2EntityTypeEntity),
    ),
    name: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    enableFuzzyExtraction: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2EntityType" });

export interface GoogleCloudDialogflowV2ImportDocumentTemplate {
  metadata?: Record<string, string>;
  knowledgeTypes?: ReadonlyArray<
    | "KNOWLEDGE_TYPE_UNSPECIFIED"
    | "FAQ"
    | "EXTRACTIVE_QA"
    | "ARTICLE_SUGGESTION"
    | "AGENT_FACING_SMART_REPLY"
    | (string & {})
  >;
  mimeType?: string;
}

export const GoogleCloudDialogflowV2ImportDocumentTemplate: Schema.Schema<GoogleCloudDialogflowV2ImportDocumentTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    knowledgeTypes: Schema.optional(Schema.Array(Schema.String)),
    mimeType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ImportDocumentTemplate" });

export interface GoogleCloudDialogflowV2GcsSources {
  uris?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2GcsSources: Schema.Schema<GoogleCloudDialogflowV2GcsSources> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uris: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2GcsSources" });

export interface GoogleCloudDialogflowV2ImportDocumentsRequest {
  documentTemplate?: GoogleCloudDialogflowV2ImportDocumentTemplate;
  importGcsCustomMetadata?: boolean;
  gcsSource?: GoogleCloudDialogflowV2GcsSources;
}

export const GoogleCloudDialogflowV2ImportDocumentsRequest: Schema.Schema<GoogleCloudDialogflowV2ImportDocumentsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    documentTemplate: Schema.optional(
      GoogleCloudDialogflowV2ImportDocumentTemplate,
    ),
    importGcsCustomMetadata: Schema.optional(Schema.Boolean),
    gcsSource: Schema.optional(GoogleCloudDialogflowV2GcsSources),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ImportDocumentsRequest" });

export interface GoogleCloudDialogflowV2SummarizationEvaluationMetricsAdherenceRubric {
  reasoning?: string;
  question?: string;
  isAddressed?: boolean;
}

export const GoogleCloudDialogflowV2SummarizationEvaluationMetricsAdherenceRubric: Schema.Schema<GoogleCloudDialogflowV2SummarizationEvaluationMetricsAdherenceRubric> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reasoning: Schema.optional(Schema.String),
    question: Schema.optional(Schema.String),
    isAddressed: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SummarizationEvaluationMetricsAdherenceRubric",
  });

export interface GoogleCloudDialogflowV2SummarizationEvaluationMetricsCompletenessRubric {
  question?: string;
  isAddressed?: boolean;
}

export const GoogleCloudDialogflowV2SummarizationEvaluationMetricsCompletenessRubric: Schema.Schema<GoogleCloudDialogflowV2SummarizationEvaluationMetricsCompletenessRubric> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    question: Schema.optional(Schema.String),
    isAddressed: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SummarizationEvaluationMetricsCompletenessRubric",
  });

export interface GoogleCloudDialogflowV2SummarizationEvaluationMetricsAccuracyDecomposition {
  accuracyReasoning?: string;
  point?: string;
  isAccurate?: boolean;
}

export const GoogleCloudDialogflowV2SummarizationEvaluationMetricsAccuracyDecomposition: Schema.Schema<GoogleCloudDialogflowV2SummarizationEvaluationMetricsAccuracyDecomposition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accuracyReasoning: Schema.optional(Schema.String),
    point: Schema.optional(Schema.String),
    isAccurate: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SummarizationEvaluationMetricsAccuracyDecomposition",
  });

export interface GoogleCloudDialogflowV2SummarizationEvaluationMetricsEvaluationResult {
  adherenceRubric?: GoogleCloudDialogflowV2SummarizationEvaluationMetricsAdherenceRubric;
  completenessRubric?: GoogleCloudDialogflowV2SummarizationEvaluationMetricsCompletenessRubric;
  accuracyDecomposition?: GoogleCloudDialogflowV2SummarizationEvaluationMetricsAccuracyDecomposition;
}

export const GoogleCloudDialogflowV2SummarizationEvaluationMetricsEvaluationResult: Schema.Schema<GoogleCloudDialogflowV2SummarizationEvaluationMetricsEvaluationResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adherenceRubric: Schema.optional(
      GoogleCloudDialogflowV2SummarizationEvaluationMetricsAdherenceRubric,
    ),
    completenessRubric: Schema.optional(
      GoogleCloudDialogflowV2SummarizationEvaluationMetricsCompletenessRubric,
    ),
    accuracyDecomposition: Schema.optional(
      GoogleCloudDialogflowV2SummarizationEvaluationMetricsAccuracyDecomposition,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SummarizationEvaluationMetricsEvaluationResult",
  });

export interface GoogleCloudDialogflowV2SummarizationEvaluationMetricsConversationDetailMetricDetailSectionDetail {
  sectionSummary?: string;
  section?: string;
  score?: number;
  evaluationResults?: ReadonlyArray<GoogleCloudDialogflowV2SummarizationEvaluationMetricsEvaluationResult>;
}

export const GoogleCloudDialogflowV2SummarizationEvaluationMetricsConversationDetailMetricDetailSectionDetail: Schema.Schema<GoogleCloudDialogflowV2SummarizationEvaluationMetricsConversationDetailMetricDetailSectionDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sectionSummary: Schema.optional(Schema.String),
    section: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    evaluationResults: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2SummarizationEvaluationMetricsEvaluationResult,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SummarizationEvaluationMetricsConversationDetailMetricDetailSectionDetail",
  });

export interface GoogleCloudDialogflowV2SummarizationEvaluationMetricsConversationDetailMetricDetail {
  metric?: string;
  score?: number;
  sectionDetails?: ReadonlyArray<GoogleCloudDialogflowV2SummarizationEvaluationMetricsConversationDetailMetricDetailSectionDetail>;
}

export const GoogleCloudDialogflowV2SummarizationEvaluationMetricsConversationDetailMetricDetail: Schema.Schema<GoogleCloudDialogflowV2SummarizationEvaluationMetricsConversationDetailMetricDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metric: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    sectionDetails: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2SummarizationEvaluationMetricsConversationDetailMetricDetailSectionDetail,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SummarizationEvaluationMetricsConversationDetailMetricDetail",
  });

export interface GoogleCloudDialogflowV2SummarizationEvaluationMetricsSectionToken {
  section?: string;
  tokenCount?: string;
}

export const GoogleCloudDialogflowV2SummarizationEvaluationMetricsSectionToken: Schema.Schema<GoogleCloudDialogflowV2SummarizationEvaluationMetricsSectionToken> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    section: Schema.optional(Schema.String),
    tokenCount: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SummarizationEvaluationMetricsSectionToken",
  });

export interface GoogleCloudDialogflowV2MessageEntry {
  languageCode?: string;
  text?: string;
  createTime?: string;
  role?:
    | "ROLE_UNSPECIFIED"
    | "HUMAN_AGENT"
    | "AUTOMATED_AGENT"
    | "END_USER"
    | (string & {});
}

export const GoogleCloudDialogflowV2MessageEntry: Schema.Schema<GoogleCloudDialogflowV2MessageEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    role: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2MessageEntry" });

export interface GoogleCloudDialogflowV2SummarizationEvaluationMetricsConversationDetail {
  metricDetails?: ReadonlyArray<GoogleCloudDialogflowV2SummarizationEvaluationMetricsConversationDetailMetricDetail>;
  sectionTokens?: ReadonlyArray<GoogleCloudDialogflowV2SummarizationEvaluationMetricsSectionToken>;
  messageEntries?: ReadonlyArray<GoogleCloudDialogflowV2MessageEntry>;
  summarySections?: ReadonlyArray<GoogleCloudDialogflowV2SummarySuggestionSummarySection>;
}

export const GoogleCloudDialogflowV2SummarizationEvaluationMetricsConversationDetail: Schema.Schema<GoogleCloudDialogflowV2SummarizationEvaluationMetricsConversationDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metricDetails: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2SummarizationEvaluationMetricsConversationDetailMetricDetail,
      ),
    ),
    sectionTokens: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2SummarizationEvaluationMetricsSectionToken,
      ),
    ),
    messageEntries: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2MessageEntry),
    ),
    summarySections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SummarySuggestionSummarySection),
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SummarizationEvaluationMetricsConversationDetail",
  });

export interface GoogleCloudDialogflowCxV3ToolCallResultError {
  message?: string;
}

export const GoogleCloudDialogflowCxV3ToolCallResultError: Schema.Schema<GoogleCloudDialogflowCxV3ToolCallResultError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ToolCallResultError" });

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
  sources?: GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSources;
  suggestionIndex?: number;
  similarityScore?: number;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion: Schema.Schema<GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sources: Schema.optional(
      GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSources,
    ),
    suggestionIndex: Schema.optional(Schema.Number),
    similarityScore: Schema.optional(Schema.Number),
    answerRecord: Schema.optional(Schema.String),
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
  agentAction?: string;
  duplicateCheckResult?: GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResult;
  sources?: GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSources;
}

export const GoogleCloudDialogflowV2beta1AgentCoachingSuggestionAgentActionSuggestion: Schema.Schema<GoogleCloudDialogflowV2beta1AgentCoachingSuggestionAgentActionSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentAction: Schema.optional(Schema.String),
    duplicateCheckResult: Schema.optional(
      GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResult,
    ),
    sources: Schema.optional(
      GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSources,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1AgentCoachingSuggestionAgentActionSuggestion",
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
  sampleRateHertz?: number;
  enableWordInfo?: boolean;
  model?: string;
  modelVariant?:
    | "SPEECH_MODEL_VARIANT_UNSPECIFIED"
    | "USE_BEST_AVAILABLE"
    | "USE_STANDARD"
    | "USE_ENHANCED"
    | (string & {});
  phraseHints?: ReadonlyArray<string>;
  optOutConformerModelMigration?: boolean;
  bargeInConfig?: GoogleCloudDialogflowCxV3beta1BargeInConfig;
}

export const GoogleCloudDialogflowCxV3beta1InputAudioConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1InputAudioConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    singleUtterance: Schema.optional(Schema.Boolean),
    audioEncoding: Schema.optional(Schema.String),
    sampleRateHertz: Schema.optional(Schema.Number),
    enableWordInfo: Schema.optional(Schema.Boolean),
    model: Schema.optional(Schema.String),
    modelVariant: Schema.optional(Schema.String),
    phraseHints: Schema.optional(Schema.Array(Schema.String)),
    optOutConformerModelMigration: Schema.optional(Schema.Boolean),
    bargeInConfig: Schema.optional(GoogleCloudDialogflowCxV3beta1BargeInConfig),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1InputAudioConfig" });

export interface GoogleCloudDialogflowCxV3beta1AudioInput {
  config?: GoogleCloudDialogflowCxV3beta1InputAudioConfig;
  audio?: string;
}

export const GoogleCloudDialogflowCxV3beta1AudioInput: Schema.Schema<GoogleCloudDialogflowCxV3beta1AudioInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    config: Schema.optional(GoogleCloudDialogflowCxV3beta1InputAudioConfig),
    audio: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1AudioInput" });

export interface GoogleCloudDialogflowCxV3beta1TextInput {
  text?: string;
}

export const GoogleCloudDialogflowCxV3beta1TextInput: Schema.Schema<GoogleCloudDialogflowCxV3beta1TextInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TextInput" });

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
  tool?: string;
  error?: GoogleCloudDialogflowCxV3beta1ToolCallResultError;
  outputParameters?: Record<string, unknown>;
  action?: string;
}

export const GoogleCloudDialogflowCxV3beta1ToolCallResult: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolCallResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tool: Schema.optional(Schema.String),
    error: Schema.optional(GoogleCloudDialogflowCxV3beta1ToolCallResultError),
    outputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    action: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ToolCallResult" });

export interface GoogleCloudDialogflowCxV3beta1EventInput {
  event?: string;
}

export const GoogleCloudDialogflowCxV3beta1EventInput: Schema.Schema<GoogleCloudDialogflowCxV3beta1EventInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    event: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1EventInput" });

export interface GoogleCloudDialogflowCxV3beta1DtmfInput {
  digits?: string;
  finishDigit?: string;
}

export const GoogleCloudDialogflowCxV3beta1DtmfInput: Schema.Schema<GoogleCloudDialogflowCxV3beta1DtmfInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    digits: Schema.optional(Schema.String),
    finishDigit: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1DtmfInput" });

export interface GoogleCloudDialogflowCxV3beta1QueryInput {
  audio?: GoogleCloudDialogflowCxV3beta1AudioInput;
  text?: GoogleCloudDialogflowCxV3beta1TextInput;
  intent?: GoogleCloudDialogflowCxV3beta1IntentInput;
  toolCallResult?: GoogleCloudDialogflowCxV3beta1ToolCallResult;
  languageCode?: string;
  event?: GoogleCloudDialogflowCxV3beta1EventInput;
  dtmf?: GoogleCloudDialogflowCxV3beta1DtmfInput;
}

export const GoogleCloudDialogflowCxV3beta1QueryInput: Schema.Schema<GoogleCloudDialogflowCxV3beta1QueryInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audio: Schema.optional(GoogleCloudDialogflowCxV3beta1AudioInput),
    text: Schema.optional(GoogleCloudDialogflowCxV3beta1TextInput),
    intent: Schema.optional(GoogleCloudDialogflowCxV3beta1IntentInput),
    toolCallResult: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolCallResult,
    ),
    languageCode: Schema.optional(Schema.String),
    event: Schema.optional(GoogleCloudDialogflowCxV3beta1EventInput),
    dtmf: Schema.optional(GoogleCloudDialogflowCxV3beta1DtmfInput),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1QueryInput" });

export interface GoogleCloudDialogflowV2ConversationTelephonyConnectionInfoSipHeader {
  name?: string;
  value?: string;
}

export const GoogleCloudDialogflowV2ConversationTelephonyConnectionInfoSipHeader: Schema.Schema<GoogleCloudDialogflowV2ConversationTelephonyConnectionInfoSipHeader> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2ConversationTelephonyConnectionInfoSipHeader",
  });

export interface GoogleCloudDialogflowV2ConversationTelephonyConnectionInfoMimeContent {
  mimeType?: string;
  content?: string;
}

export const GoogleCloudDialogflowV2ConversationTelephonyConnectionInfoMimeContent: Schema.Schema<GoogleCloudDialogflowV2ConversationTelephonyConnectionInfoMimeContent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mimeType: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2ConversationTelephonyConnectionInfoMimeContent",
  });

export interface GoogleCloudDialogflowV2ConversationTelephonyConnectionInfo {
  sipHeaders?: ReadonlyArray<GoogleCloudDialogflowV2ConversationTelephonyConnectionInfoSipHeader>;
  extraMimeContents?: ReadonlyArray<GoogleCloudDialogflowV2ConversationTelephonyConnectionInfoMimeContent>;
  dialedNumber?: string;
  sdp?: string;
}

export const GoogleCloudDialogflowV2ConversationTelephonyConnectionInfo: Schema.Schema<GoogleCloudDialogflowV2ConversationTelephonyConnectionInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sipHeaders: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2ConversationTelephonyConnectionInfoSipHeader,
      ),
    ),
    extraMimeContents: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2ConversationTelephonyConnectionInfoMimeContent,
      ),
    ),
    dialedNumber: Schema.optional(Schema.String),
    sdp: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ConversationTelephonyConnectionInfo",
  });

export interface GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo {
  justCollected?: boolean;
  required?: boolean;
  state?:
    | "PARAMETER_STATE_UNSPECIFIED"
    | "EMPTY"
    | "INVALID"
    | "FILLED"
    | (string & {});
  displayName?: string;
  value?: unknown;
}

export const GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo: Schema.Schema<GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    justCollected: Schema.optional(Schema.Boolean),
    required: Schema.optional(Schema.Boolean),
    state: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Unknown),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo",
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

export interface GoogleCloudDialogflowCxV3beta1ExportAgentResponse {
  commitSha?: string;
  agentUri?: string;
  agentContent?: string;
}

export const GoogleCloudDialogflowCxV3beta1ExportAgentResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportAgentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    commitSha: Schema.optional(Schema.String),
    agentUri: Schema.optional(Schema.String),
    agentContent: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportAgentResponse",
  });

export interface GoogleCloudDialogflowV2beta1EntityTypeEntity {
  value?: string;
  synonyms?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1EntityTypeEntity: Schema.Schema<GoogleCloudDialogflowV2beta1EntityTypeEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    synonyms: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1EntityTypeEntity" });

export interface GoogleCloudDialogflowV2beta1SessionEntityType {
  name?: string;
  entityOverrideMode?:
    | "ENTITY_OVERRIDE_MODE_UNSPECIFIED"
    | "ENTITY_OVERRIDE_MODE_OVERRIDE"
    | "ENTITY_OVERRIDE_MODE_SUPPLEMENT"
    | (string & {});
  entities?: ReadonlyArray<GoogleCloudDialogflowV2beta1EntityTypeEntity>;
}

export const GoogleCloudDialogflowV2beta1SessionEntityType: Schema.Schema<GoogleCloudDialogflowV2beta1SessionEntityType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    entityOverrideMode: Schema.optional(Schema.String),
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1EntityTypeEntity),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1SessionEntityType" });

export interface GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess {
  metadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess: Schema.Schema<GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess",
  });

export interface GoogleCloudDialogflowV2RestoreAgentRequest {
  agentUri?: string;
  agentContent?: string;
}

export const GoogleCloudDialogflowV2RestoreAgentRequest: Schema.Schema<GoogleCloudDialogflowV2RestoreAgentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentUri: Schema.optional(Schema.String),
    agentContent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2RestoreAgentRequest" });

export interface GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySourceHumanAgentSideConfig {
  agent?: string;
}

export const GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySourceHumanAgentSideConfig: Schema.Schema<GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySourceHumanAgentSideConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agent: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySourceHumanAgentSideConfig",
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

export interface GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig {
  clientId?: string;
  secretVersionForClientSecret?: string;
  clientSecret?: string;
  scopes?: ReadonlyArray<string>;
  tokenEndpoint?: string;
}

export const GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientId: Schema.optional(Schema.String),
    secretVersionForClientSecret: Schema.optional(Schema.String),
    clientSecret: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Schema.String)),
    tokenEndpoint: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookGenericWebService {
  username?: string;
  webhookType?:
    | "WEBHOOK_TYPE_UNSPECIFIED"
    | "STANDARD"
    | "FLEXIBLE"
    | (string & {});
  secretVersionsForRequestHeaders?: Record<
    string,
    GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceSecretVersionHeaderValue
  >;
  allowedCaCerts?: ReadonlyArray<string>;
  serviceAccountAuthConfig?: GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceServiceAccountAuthConfig;
  password?: string;
  secretVersionForUsernamePassword?: string;
  uri?: string;
  oauthConfig?: GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig;
  parameterMapping?: Record<string, string>;
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
  requestBody?: string;
  requestHeaders?: Record<string, string>;
  serviceAgentAuth?:
    | "SERVICE_AGENT_AUTH_UNSPECIFIED"
    | "NONE"
    | "ID_TOKEN"
    | "ACCESS_TOKEN"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1WebhookGenericWebService: Schema.Schema<GoogleCloudDialogflowCxV3beta1WebhookGenericWebService> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.optional(Schema.String),
    webhookType: Schema.optional(Schema.String),
    secretVersionsForRequestHeaders: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceSecretVersionHeaderValue,
      ),
    ),
    allowedCaCerts: Schema.optional(Schema.Array(Schema.String)),
    serviceAccountAuthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceServiceAccountAuthConfig,
    ),
    password: Schema.optional(Schema.String),
    secretVersionForUsernamePassword: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    oauthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig,
    ),
    parameterMapping: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    httpMethod: Schema.optional(Schema.String),
    requestBody: Schema.optional(Schema.String),
    requestHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    serviceAgentAuth: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1WebhookGenericWebService",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig {
  genericWebService?: GoogleCloudDialogflowCxV3beta1WebhookGenericWebService;
  service?: string;
}

export const GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    genericWebService: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookGenericWebService,
    ),
    service: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig",
  });

export interface GoogleCloudDialogflowCxV3beta1Webhook {
  serviceDirectory?: GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig;
  disabled?: boolean;
  timeout?: string;
  name?: string;
  genericWebService?: GoogleCloudDialogflowCxV3beta1WebhookGenericWebService;
  displayName?: string;
}

export const GoogleCloudDialogflowCxV3beta1Webhook: Schema.Schema<GoogleCloudDialogflowCxV3beta1Webhook> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceDirectory: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig,
    ),
    disabled: Schema.optional(Schema.Boolean),
    timeout: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    genericWebService: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookGenericWebService,
    ),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Webhook" });

export interface GoogleCloudDialogflowV2GenerateStatelessSummaryResponseSummary {
  text?: string;
  textSections?: Record<string, string>;
  baselineModelVersion?: string;
}

export const GoogleCloudDialogflowV2GenerateStatelessSummaryResponseSummary: Schema.Schema<GoogleCloudDialogflowV2GenerateStatelessSummaryResponseSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    textSections: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    baselineModelVersion: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2GenerateStatelessSummaryResponseSummary",
  });

export interface GoogleCloudDialogflowV2GenerateStatelessSummaryResponse {
  latestMessage?: string;
  summary?: GoogleCloudDialogflowV2GenerateStatelessSummaryResponseSummary;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2GenerateStatelessSummaryResponse: Schema.Schema<GoogleCloudDialogflowV2GenerateStatelessSummaryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestMessage: Schema.optional(Schema.String),
    summary: Schema.optional(
      GoogleCloudDialogflowV2GenerateStatelessSummaryResponseSummary,
    ),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2GenerateStatelessSummaryResponse",
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

export const GoogleCloudDialogflowCxV3TestRunDifference: Schema.Schema<GoogleCloudDialogflowCxV3TestRunDifference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TestRunDifference" });

export interface GoogleCloudDialogflowV2RaiSettingsRaiCategoryConfig {
  category?:
    | "RAI_CATEGORY_UNSPECIFIED"
    | "DANGEROUS_CONTENT"
    | "SEXUALLY_EXPLICIT"
    | "HARASSMENT"
    | "HATE_SPEECH"
    | (string & {});
  sensitivityLevel?:
    | "SENSITIVITY_LEVEL_UNSPECIFIED"
    | "BLOCK_MOST"
    | "BLOCK_SOME"
    | "BLOCK_FEW"
    | "BLOCK_NONE"
    | (string & {});
}

export const GoogleCloudDialogflowV2RaiSettingsRaiCategoryConfig: Schema.Schema<GoogleCloudDialogflowV2RaiSettingsRaiCategoryConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    category: Schema.optional(Schema.String),
    sensitivityLevel: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2RaiSettingsRaiCategoryConfig",
  });

export interface GoogleCloudDialogflowV2RaiSettings {
  raiCategoryConfigs?: ReadonlyArray<GoogleCloudDialogflowV2RaiSettingsRaiCategoryConfig>;
}

export const GoogleCloudDialogflowV2RaiSettings: Schema.Schema<GoogleCloudDialogflowV2RaiSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    raiCategoryConfigs: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2RaiSettingsRaiCategoryConfig),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2RaiSettings" });

export interface GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig {
  recentSentencesCount?: number;
}

export const GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig: Schema.Schema<GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    recentSentencesCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig",
  });

export interface GoogleCloudDialogflowV2SuggestionFeature {
  type?:
    | "TYPE_UNSPECIFIED"
    | "ARTICLE_SUGGESTION"
    | "FAQ"
    | "SMART_REPLY"
    | "CONVERSATION_SUMMARIZATION"
    | "KNOWLEDGE_SEARCH"
    | "KNOWLEDGE_ASSIST"
    | (string & {});
}

export const GoogleCloudDialogflowV2SuggestionFeature: Schema.Schema<GoogleCloudDialogflowV2SuggestionFeature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SuggestionFeature" });

export interface GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource {
  documents?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource: Schema.Schema<GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    documents: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource",
  });

export interface GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings {
  dropIvrMessages?: boolean;
  dropHandoffMessages?: boolean;
  dropVirtualAgentMessages?: boolean;
}

export const GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings: Schema.Schema<GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dropIvrMessages: Schema.optional(Schema.Boolean),
    dropHandoffMessages: Schema.optional(Schema.Boolean),
    dropVirtualAgentMessages: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings",
  });

export interface GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigSections {
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

export const GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigSections: Schema.Schema<GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigSections> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sectionTypes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigSections",
  });

export interface GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource {
  knowledgeBases?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource: Schema.Schema<GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    knowledgeBases: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource",
  });

export interface GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource {
  agent?: string;
  humanAgentSideConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySourceHumanAgentSideConfig;
}

export const GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource: Schema.Schema<GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agent: Schema.optional(Schema.String),
    humanAgentSideConfig: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySourceHumanAgentSideConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource",
  });

export interface GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig {
  documentQuerySource?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource;
  contextFilterSettings?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings;
  sections?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigSections;
  knowledgeBaseQuerySource?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource;
  dialogflowQuerySource?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource;
  contextSize?: number;
  confidenceThreshold?: number;
  maxResults?: number;
}

export const GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig: Schema.Schema<GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    documentQuerySource: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource,
    ),
    contextFilterSettings: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings,
    ),
    sections: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigSections,
    ),
    knowledgeBaseQuerySource: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource,
    ),
    dialogflowQuerySource: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource,
    ),
    contextSize: Schema.optional(Schema.Number),
    confidenceThreshold: Schema.optional(Schema.Number),
    maxResults: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig",
  });

export interface GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings {
  noSmalltalk?: boolean;
  onlyEndUser?: boolean;
}

export const GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings: Schema.Schema<GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    noSmalltalk: Schema.optional(Schema.Boolean),
    onlyEndUser: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings",
  });

export interface GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig {
  model?: string;
  baselineModelVersion?: string;
}

export const GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig: Schema.Schema<GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    model: Schema.optional(Schema.String),
    baselineModelVersion: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig",
  });

export interface GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig {
  raiSettings?: GoogleCloudDialogflowV2RaiSettings;
  conversationProcessConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig;
  enableResponseDebugInfo?: boolean;
  suggestionFeature?: GoogleCloudDialogflowV2SuggestionFeature;
  queryConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig;
  suggestionTriggerSettings?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings;
  enableQuerySuggestionOnly?: boolean;
  disableAgentQueryLogging?: boolean;
  enableEventBasedSuggestion?: boolean;
  enableQuerySuggestionWhenNoAnswer?: boolean;
  enableConversationAugmentedQuery?: boolean;
  conversationModelConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig;
}

export const GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig: Schema.Schema<GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    raiSettings: Schema.optional(GoogleCloudDialogflowV2RaiSettings),
    conversationProcessConfig: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig,
    ),
    enableResponseDebugInfo: Schema.optional(Schema.Boolean),
    suggestionFeature: Schema.optional(
      GoogleCloudDialogflowV2SuggestionFeature,
    ),
    queryConfig: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig,
    ),
    suggestionTriggerSettings: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings,
    ),
    enableQuerySuggestionOnly: Schema.optional(Schema.Boolean),
    disableAgentQueryLogging: Schema.optional(Schema.Boolean),
    enableEventBasedSuggestion: Schema.optional(Schema.Boolean),
    enableQuerySuggestionWhenNoAnswer: Schema.optional(Schema.Boolean),
    enableConversationAugmentedQuery: Schema.optional(Schema.Boolean),
    conversationModelConfig: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig",
  });

export interface GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequest {
  participantRole?:
    | "ROLE_UNSPECIFIED"
    | "HUMAN_AGENT"
    | "AUTOMATED_AGENT"
    | "END_USER"
    | (string & {});
  suggestionFeatureConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig;
}

export const GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequest: Schema.Schema<GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    participantRole: Schema.optional(Schema.String),
    suggestionFeatureConfig: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequest",
  });

export interface GoogleRpcStatus {
  message?: string;
  code?: number;
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const GoogleRpcStatus: Schema.Schema<GoogleRpcStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "GoogleRpcStatus" });

export interface GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion {
  similarityScore?: number;
  answerRecord?: string;
  suggestionIndex?: number;
}

export const GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion: Schema.Schema<GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    similarityScore: Schema.optional(Schema.Number),
    answerRecord: Schema.optional(Schema.String),
    suggestionIndex: Schema.optional(Schema.Number),
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

export interface GoogleCloudDialogflowV2IntentSuggestion {
  description?: string;
  intentV2?: string;
  displayName?: string;
}

export const GoogleCloudDialogflowV2IntentSuggestion: Schema.Schema<GoogleCloudDialogflowV2IntentSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    intentV2: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentSuggestion" });

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

export interface GoogleCloudDialogflowV2IntentMessageImage {
  accessibilityText?: string;
  imageUri?: string;
}

export const GoogleCloudDialogflowV2IntentMessageImage: Schema.Schema<GoogleCloudDialogflowV2IntentMessageImage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accessibilityText: Schema.optional(Schema.String),
    imageUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageImage" });

export interface GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject {
  largeImage?: GoogleCloudDialogflowV2IntentMessageImage;
  icon?: GoogleCloudDialogflowV2IntentMessageImage;
  name?: string;
  contentUrl?: string;
  description?: string;
}

export const GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject: Schema.Schema<GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    largeImage: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
    icon: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
    name: Schema.optional(Schema.String),
    contentUrl: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject",
  });

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

export interface GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion {
  uri?: string;
  destinationName?: string;
}

export const GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion: Schema.Schema<GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    destinationName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion",
  });

export interface GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction {
  urlTypeHint?:
    | "URL_TYPE_HINT_UNSPECIFIED"
    | "AMP_ACTION"
    | "AMP_CONTENT"
    | (string & {});
  url?: string;
}

export const GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction: Schema.Schema<GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    urlTypeHint: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction",
  });

export interface GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem {
  openUriAction?: GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;
  title?: string;
  image?: GoogleCloudDialogflowV2IntentMessageImage;
  footer?: string;
  description?: string;
}

export const GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem: Schema.Schema<GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    openUriAction: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction,
    ),
    title: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
    footer: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
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
  formattedText?: string;
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageBasicCardButton>;
  title?: string;
  image?: GoogleCloudDialogflowV2IntentMessageImage;
  subtitle?: string;
}

export const GoogleCloudDialogflowV2IntentMessageBasicCard: Schema.Schema<GoogleCloudDialogflowV2IntentMessageBasicCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    formattedText: Schema.optional(Schema.String),
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageBasicCardButton),
    ),
    title: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
    subtitle: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageBasicCard" });

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
  description?: string;
  info?: GoogleCloudDialogflowV2IntentMessageSelectItemInfo;
  title?: string;
  image?: GoogleCloudDialogflowV2IntentMessageImage;
}

export const GoogleCloudDialogflowV2IntentMessageCarouselSelectItem: Schema.Schema<GoogleCloudDialogflowV2IntentMessageCarouselSelectItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    info: Schema.optional(GoogleCloudDialogflowV2IntentMessageSelectItemInfo),
    title: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowV2IntentMessageCardButton {
  text?: string;
  postback?: string;
}

export const GoogleCloudDialogflowV2IntentMessageCardButton: Schema.Schema<GoogleCloudDialogflowV2IntentMessageCardButton> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    postback: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageCardButton" });

export interface GoogleCloudDialogflowV2IntentMessageCard {
  subtitle?: string;
  imageUri?: string;
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageCardButton>;
  title?: string;
}

export const GoogleCloudDialogflowV2IntentMessageCard: Schema.Schema<GoogleCloudDialogflowV2IntentMessageCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subtitle: Schema.optional(Schema.String),
    imageUri: Schema.optional(Schema.String),
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageCardButton),
    ),
    title: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageCard" });

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

export interface GoogleCloudDialogflowV2IntentMessageTableCardCell {
  text?: string;
}

export const GoogleCloudDialogflowV2IntentMessageTableCardCell: Schema.Schema<GoogleCloudDialogflowV2IntentMessageTableCardCell> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageTableCardCell",
  });

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

export interface GoogleCloudDialogflowV2IntentMessageTableCard {
  columnProperties?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageColumnProperties>;
  rows?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageTableCardRow>;
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageBasicCardButton>;
  title?: string;
  subtitle?: string;
  image?: GoogleCloudDialogflowV2IntentMessageImage;
}

export const GoogleCloudDialogflowV2IntentMessageTableCard: Schema.Schema<GoogleCloudDialogflowV2IntentMessageTableCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    columnProperties: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageColumnProperties),
    ),
    rows: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageTableCardRow),
    ),
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageBasicCardButton),
    ),
    title: Schema.optional(Schema.String),
    subtitle: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageTableCard" });

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

export interface GoogleCloudDialogflowV2IntentMessageQuickReplies {
  title?: string;
  quickReplies?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2IntentMessageQuickReplies: Schema.Schema<GoogleCloudDialogflowV2IntentMessageQuickReplies> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    quickReplies: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageQuickReplies",
  });

export interface GoogleCloudDialogflowV2IntentMessageText {
  text?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2IntentMessageText: Schema.Schema<GoogleCloudDialogflowV2IntentMessageText> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageText" });

export interface GoogleCloudDialogflowV2IntentMessageListSelectItem {
  image?: GoogleCloudDialogflowV2IntentMessageImage;
  info?: GoogleCloudDialogflowV2IntentMessageSelectItemInfo;
  title?: string;
  description?: string;
}

export const GoogleCloudDialogflowV2IntentMessageListSelectItem: Schema.Schema<GoogleCloudDialogflowV2IntentMessageListSelectItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    image: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
    info: Schema.optional(GoogleCloudDialogflowV2IntentMessageSelectItemInfo),
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowV2IntentMessageSimpleResponse {
  displayText?: string;
  textToSpeech?: string;
  ssml?: string;
}

export const GoogleCloudDialogflowV2IntentMessageSimpleResponse: Schema.Schema<GoogleCloudDialogflowV2IntentMessageSimpleResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayText: Schema.optional(Schema.String),
    textToSpeech: Schema.optional(Schema.String),
    ssml: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowV2IntentMessage {
  mediaContent?: GoogleCloudDialogflowV2IntentMessageMediaContent;
  linkOutSuggestion?: GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion;
  browseCarouselCard?: GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard;
  basicCard?: GoogleCloudDialogflowV2IntentMessageBasicCard;
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
  carouselSelect?: GoogleCloudDialogflowV2IntentMessageCarouselSelect;
  card?: GoogleCloudDialogflowV2IntentMessageCard;
  tableCard?: GoogleCloudDialogflowV2IntentMessageTableCard;
  payload?: Record<string, unknown>;
  suggestions?: GoogleCloudDialogflowV2IntentMessageSuggestions;
  quickReplies?: GoogleCloudDialogflowV2IntentMessageQuickReplies;
  image?: GoogleCloudDialogflowV2IntentMessageImage;
  text?: GoogleCloudDialogflowV2IntentMessageText;
  listSelect?: GoogleCloudDialogflowV2IntentMessageListSelect;
  simpleResponses?: GoogleCloudDialogflowV2IntentMessageSimpleResponses;
}

export const GoogleCloudDialogflowV2IntentMessage: Schema.Schema<GoogleCloudDialogflowV2IntentMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mediaContent: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageMediaContent,
    ),
    linkOutSuggestion: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion,
    ),
    browseCarouselCard: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard,
    ),
    basicCard: Schema.optional(GoogleCloudDialogflowV2IntentMessageBasicCard),
    platform: Schema.optional(Schema.String),
    carouselSelect: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageCarouselSelect,
    ),
    card: Schema.optional(GoogleCloudDialogflowV2IntentMessageCard),
    tableCard: Schema.optional(GoogleCloudDialogflowV2IntentMessageTableCard),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    suggestions: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageSuggestions,
    ),
    quickReplies: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageQuickReplies,
    ),
    image: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
    text: Schema.optional(GoogleCloudDialogflowV2IntentMessageText),
    listSelect: Schema.optional(GoogleCloudDialogflowV2IntentMessageListSelect),
    simpleResponses: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageSimpleResponses,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessage" });

export interface GoogleCloudDialogflowV2EventInput {
  name?: string;
  parameters?: Record<string, unknown>;
  languageCode?: string;
}

export const GoogleCloudDialogflowV2EventInput: Schema.Schema<GoogleCloudDialogflowV2EventInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2EventInput" });

export interface GoogleCloudDialogflowV2SessionEntityType {
  entityOverrideMode?:
    | "ENTITY_OVERRIDE_MODE_UNSPECIFIED"
    | "ENTITY_OVERRIDE_MODE_OVERRIDE"
    | "ENTITY_OVERRIDE_MODE_SUPPLEMENT"
    | (string & {});
  entities?: ReadonlyArray<GoogleCloudDialogflowV2EntityTypeEntity>;
  name?: string;
}

export const GoogleCloudDialogflowV2SessionEntityType: Schema.Schema<GoogleCloudDialogflowV2SessionEntityType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityOverrideMode: Schema.optional(Schema.String),
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2EntityTypeEntity),
    ),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SessionEntityType" });

export interface GoogleCloudDialogflowV2WebhookResponse {
  fulfillmentText?: string;
  payload?: Record<string, unknown>;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2Context>;
  fulfillmentMessages?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessage>;
  followupEventInput?: GoogleCloudDialogflowV2EventInput;
  source?: string;
  sessionEntityTypes?: ReadonlyArray<GoogleCloudDialogflowV2SessionEntityType>;
}

export const GoogleCloudDialogflowV2WebhookResponse: Schema.Schema<GoogleCloudDialogflowV2WebhookResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fulfillmentText: Schema.optional(Schema.String),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2Context),
    ),
    fulfillmentMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessage),
    ),
    followupEventInput: Schema.optional(GoogleCloudDialogflowV2EventInput),
    source: Schema.optional(Schema.String),
    sessionEntityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SessionEntityType),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2WebhookResponse" });

export interface GoogleCloudDialogflowV2AutomatedAgentConfig {
  agent?: string;
  sessionTtl?: string;
}

export const GoogleCloudDialogflowV2AutomatedAgentConfig: Schema.Schema<GoogleCloudDialogflowV2AutomatedAgentConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agent: Schema.optional(Schema.String),
    sessionTtl: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2AutomatedAgentConfig" });

export interface GoogleCloudDialogflowV2VoiceSelectionParams {
  name?: string;
  ssmlGender?:
    | "SSML_VOICE_GENDER_UNSPECIFIED"
    | "SSML_VOICE_GENDER_MALE"
    | "SSML_VOICE_GENDER_FEMALE"
    | "SSML_VOICE_GENDER_NEUTRAL"
    | (string & {});
}

export const GoogleCloudDialogflowV2VoiceSelectionParams: Schema.Schema<GoogleCloudDialogflowV2VoiceSelectionParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    ssmlGender: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2VoiceSelectionParams" });

export interface GoogleCloudDialogflowV2CustomPronunciationParams {
  phrase?: string;
  pronunciation?: string;
  phoneticEncoding?:
    | "PHONETIC_ENCODING_UNSPECIFIED"
    | "PHONETIC_ENCODING_IPA"
    | "PHONETIC_ENCODING_X_SAMPA"
    | (string & {});
}

export const GoogleCloudDialogflowV2CustomPronunciationParams: Schema.Schema<GoogleCloudDialogflowV2CustomPronunciationParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    phrase: Schema.optional(Schema.String),
    pronunciation: Schema.optional(Schema.String),
    phoneticEncoding: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2CustomPronunciationParams",
  });

export interface GoogleCloudDialogflowV2SynthesizeSpeechConfig {
  speakingRate?: number;
  pitch?: number;
  volumeGainDb?: number;
  effectsProfileId?: ReadonlyArray<string>;
  voice?: GoogleCloudDialogflowV2VoiceSelectionParams;
  pronunciations?: ReadonlyArray<GoogleCloudDialogflowV2CustomPronunciationParams>;
}

export const GoogleCloudDialogflowV2SynthesizeSpeechConfig: Schema.Schema<GoogleCloudDialogflowV2SynthesizeSpeechConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    speakingRate: Schema.optional(Schema.Number),
    pitch: Schema.optional(Schema.Number),
    volumeGainDb: Schema.optional(Schema.Number),
    effectsProfileId: Schema.optional(Schema.Array(Schema.String)),
    voice: Schema.optional(GoogleCloudDialogflowV2VoiceSelectionParams),
    pronunciations: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2CustomPronunciationParams),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SynthesizeSpeechConfig" });

export interface GoogleCloudDialogflowV2OutputAudioConfig {
  audioEncoding?:
    | "OUTPUT_AUDIO_ENCODING_UNSPECIFIED"
    | "OUTPUT_AUDIO_ENCODING_LINEAR_16"
    | "OUTPUT_AUDIO_ENCODING_MP3"
    | "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS"
    | "OUTPUT_AUDIO_ENCODING_OGG_OPUS"
    | "OUTPUT_AUDIO_ENCODING_MULAW"
    | "OUTPUT_AUDIO_ENCODING_ALAW"
    | (string & {});
  synthesizeSpeechConfig?: GoogleCloudDialogflowV2SynthesizeSpeechConfig;
  sampleRateHertz?: number;
}

export const GoogleCloudDialogflowV2OutputAudioConfig: Schema.Schema<GoogleCloudDialogflowV2OutputAudioConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audioEncoding: Schema.optional(Schema.String),
    synthesizeSpeechConfig: Schema.optional(
      GoogleCloudDialogflowV2SynthesizeSpeechConfig,
    ),
    sampleRateHertz: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2OutputAudioConfig" });

export interface GoogleCloudDialogflowV2OutputAudio {
  config?: GoogleCloudDialogflowV2OutputAudioConfig;
  audio?: string;
}

export const GoogleCloudDialogflowV2OutputAudio: Schema.Schema<GoogleCloudDialogflowV2OutputAudio> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    config: Schema.optional(GoogleCloudDialogflowV2OutputAudioConfig),
    audio: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2OutputAudio" });

export interface GoogleCloudDialogflowV2AssistQueryParameters {
  documentsMetadataFilters?: Record<string, string>;
}

export const GoogleCloudDialogflowV2AssistQueryParameters: Schema.Schema<GoogleCloudDialogflowV2AssistQueryParameters> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    documentsMetadataFilters: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2AssistQueryParameters" });

export interface GoogleCloudDialogflowV2SuggestFaqAnswersRequest {
  latestMessage?: string;
  assistQueryParams?: GoogleCloudDialogflowV2AssistQueryParameters;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2SuggestFaqAnswersRequest: Schema.Schema<GoogleCloudDialogflowV2SuggestFaqAnswersRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestMessage: Schema.optional(Schema.String),
    assistQueryParams: Schema.optional(
      GoogleCloudDialogflowV2AssistQueryParameters,
    ),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SuggestFaqAnswersRequest",
  });

export interface GoogleCloudDialogflowV2NotificationConfig {
  topic?: string;
  messageFormat?:
    | "MESSAGE_FORMAT_UNSPECIFIED"
    | "PROTO"
    | "JSON"
    | (string & {});
}

export const GoogleCloudDialogflowV2NotificationConfig: Schema.Schema<GoogleCloudDialogflowV2NotificationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    topic: Schema.optional(Schema.String),
    messageFormat: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2NotificationConfig" });

export interface GoogleCloudDialogflowCxV3PageInfo {
  formInfo?: GoogleCloudDialogflowCxV3PageInfoFormInfo;
  currentPage?: string;
  displayName?: string;
}

export const GoogleCloudDialogflowCxV3PageInfo: Schema.Schema<GoogleCloudDialogflowCxV3PageInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    formInfo: Schema.optional(GoogleCloudDialogflowCxV3PageInfoFormInfo),
    currentPage: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowCxV3LanguageInfo {
  inputLanguageCode?: string;
  resolvedLanguageCode?: string;
  confidenceScore?: number;
}

export const GoogleCloudDialogflowCxV3LanguageInfo: Schema.Schema<GoogleCloudDialogflowCxV3LanguageInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputLanguageCode: Schema.optional(Schema.String),
    resolvedLanguageCode: Schema.optional(Schema.String),
    confidenceScore: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3LanguageInfo" });

export interface GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo {
  tag?: string;
}

export const GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo: Schema.Schema<GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tag: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo",
  });

export interface GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue {
  resolvedValue?: unknown;
  originalValue?: string;
}

export const GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue: Schema.Schema<GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resolvedValue: Schema.optional(Schema.Unknown),
    originalValue: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue",
  });

export interface GoogleCloudDialogflowCxV3WebhookRequestIntentInfo {
  parameters?: Record<
    string,
    GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue
  >;
  lastMatchedIntent?: string;
  displayName?: string;
  confidence?: number;
}

export const GoogleCloudDialogflowCxV3WebhookRequestIntentInfo: Schema.Schema<GoogleCloudDialogflowCxV3WebhookRequestIntentInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameters: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue,
      ),
    ),
    lastMatchedIntent: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3WebhookRequestIntentInfo",
  });

export interface GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult {
  score?: number;
  magnitude?: number;
}

export const GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult: Schema.Schema<GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.Number),
    magnitude: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult",
  });

export interface GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard {}

export const GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard: Schema.Schema<GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard",
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

export interface GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText {
  text?: string;
  allowPlaybackInterruption?: boolean;
  ssml?: string;
}

export const GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText: Schema.Schema<GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
    ssml: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText",
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

export interface GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff {
  metadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff: Schema.Schema<GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff",
  });

export interface GoogleCloudDialogflowCxV3ResponseMessageEndInteraction {}

export const GoogleCloudDialogflowCxV3ResponseMessageEndInteraction: Schema.Schema<GoogleCloudDialogflowCxV3ResponseMessageEndInteraction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessageEndInteraction",
  });

export interface GoogleCloudDialogflowCxV3ToolCall {
  action?: string;
  inputParameters?: Record<string, unknown>;
  tool?: string;
}

export const GoogleCloudDialogflowCxV3ToolCall: Schema.Schema<GoogleCloudDialogflowCxV3ToolCall> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    tool: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ToolCall" });

export interface GoogleCloudDialogflowCxV3ResponseMessage {
  knowledgeInfoCard?: GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard;
  playAudio?: GoogleCloudDialogflowCxV3ResponseMessagePlayAudio;
  mixedAudio?: GoogleCloudDialogflowCxV3ResponseMessageMixedAudio;
  text?: GoogleCloudDialogflowCxV3ResponseMessageText;
  payload?: Record<string, unknown>;
  outputAudioText?: GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText;
  conversationSuccess?: GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess;
  telephonyTransferCall?: GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall;
  channel?: string;
  responseType?:
    | "RESPONSE_TYPE_UNSPECIFIED"
    | "ENTRY_PROMPT"
    | "PARAMETER_PROMPT"
    | "HANDLER_PROMPT"
    | (string & {});
  liveAgentHandoff?: GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff;
  endInteraction?: GoogleCloudDialogflowCxV3ResponseMessageEndInteraction;
  toolCall?: GoogleCloudDialogflowCxV3ToolCall;
}

export const GoogleCloudDialogflowCxV3ResponseMessage: Schema.Schema<GoogleCloudDialogflowCxV3ResponseMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    knowledgeInfoCard: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard,
    ),
    playAudio: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessagePlayAudio,
    ),
    mixedAudio: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageMixedAudio,
    ),
    text: Schema.optional(GoogleCloudDialogflowCxV3ResponseMessageText),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    outputAudioText: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText,
    ),
    conversationSuccess: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess,
    ),
    telephonyTransferCall: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall,
    ),
    channel: Schema.optional(Schema.String),
    responseType: Schema.optional(Schema.String),
    liveAgentHandoff: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff,
    ),
    endInteraction: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageEndInteraction,
    ),
    toolCall: Schema.optional(GoogleCloudDialogflowCxV3ToolCall),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ResponseMessage" });

export interface GoogleCloudDialogflowCxV3WebhookRequest {
  pageInfo?: GoogleCloudDialogflowCxV3PageInfo;
  triggerIntent?: string;
  transcript?: string;
  triggerEvent?: string;
  sessionInfo?: GoogleCloudDialogflowCxV3SessionInfo;
  languageInfo?: GoogleCloudDialogflowCxV3LanguageInfo;
  text?: string;
  fulfillmentInfo?: GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo;
  detectIntentResponseId?: string;
  intentInfo?: GoogleCloudDialogflowCxV3WebhookRequestIntentInfo;
  dtmfDigits?: string;
  sentimentAnalysisResult?: GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult;
  messages?: ReadonlyArray<GoogleCloudDialogflowCxV3ResponseMessage>;
  languageCode?: string;
  payload?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3WebhookRequest: Schema.Schema<GoogleCloudDialogflowCxV3WebhookRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageInfo: Schema.optional(GoogleCloudDialogflowCxV3PageInfo),
    triggerIntent: Schema.optional(Schema.String),
    transcript: Schema.optional(Schema.String),
    triggerEvent: Schema.optional(Schema.String),
    sessionInfo: Schema.optional(GoogleCloudDialogflowCxV3SessionInfo),
    languageInfo: Schema.optional(GoogleCloudDialogflowCxV3LanguageInfo),
    text: Schema.optional(Schema.String),
    fulfillmentInfo: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo,
    ),
    detectIntentResponseId: Schema.optional(Schema.String),
    intentInfo: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookRequestIntentInfo,
    ),
    dtmfDigits: Schema.optional(Schema.String),
    sentimentAnalysisResult: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult,
    ),
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ResponseMessage),
    ),
    languageCode: Schema.optional(Schema.String),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3WebhookRequest" });

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

export interface GoogleCloudDialogflowV2DeployConversationModelRequest {}

export const GoogleCloudDialogflowV2DeployConversationModelRequest: Schema.Schema<GoogleCloudDialogflowV2DeployConversationModelRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowV2DeployConversationModelRequest",
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

export interface GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer {
  faqQuestion?: string;
  source?: string;
  matchConfidence?: number;
  answer?: string;
  matchConfidenceLevel?:
    | "MATCH_CONFIDENCE_LEVEL_UNSPECIFIED"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    faqQuestion: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    matchConfidence: Schema.optional(Schema.Number),
    answer: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowV2SentimentAnalysisRequestConfig {
  analyzeQueryTextSentiment?: boolean;
}

export const GoogleCloudDialogflowV2SentimentAnalysisRequestConfig: Schema.Schema<GoogleCloudDialogflowV2SentimentAnalysisRequestConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    analyzeQueryTextSentiment: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SentimentAnalysisRequestConfig",
  });

export interface GoogleTypeLatLng {
  longitude?: number;
  latitude?: number;
}

export const GoogleTypeLatLng: Schema.Schema<GoogleTypeLatLng> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    longitude: Schema.optional(Schema.Number),
    latitude: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleTypeLatLng" });

export interface GoogleCloudDialogflowV2QueryParameters {
  timeZone?: string;
  sentimentAnalysisRequestConfig?: GoogleCloudDialogflowV2SentimentAnalysisRequestConfig;
  webhookHeaders?: Record<string, string>;
  payload?: Record<string, unknown>;
  contexts?: ReadonlyArray<GoogleCloudDialogflowV2Context>;
  resetContexts?: boolean;
  sessionEntityTypes?: ReadonlyArray<GoogleCloudDialogflowV2SessionEntityType>;
  geoLocation?: GoogleTypeLatLng;
  platform?: string;
}

export const GoogleCloudDialogflowV2QueryParameters: Schema.Schema<GoogleCloudDialogflowV2QueryParameters> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timeZone: Schema.optional(Schema.String),
    sentimentAnalysisRequestConfig: Schema.optional(
      GoogleCloudDialogflowV2SentimentAnalysisRequestConfig,
    ),
    webhookHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    contexts: Schema.optional(Schema.Array(GoogleCloudDialogflowV2Context)),
    resetContexts: Schema.optional(Schema.Boolean),
    sessionEntityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SessionEntityType),
    ),
    geoLocation: Schema.optional(GoogleTypeLatLng),
    platform: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2QueryParameters" });

export interface GoogleCloudDialogflowV2TextInput {
  languageCode?: string;
  text?: string;
}

export const GoogleCloudDialogflowV2TextInput: Schema.Schema<GoogleCloudDialogflowV2TextInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2TextInput" });

export interface GoogleCloudDialogflowV2SpeechContext {
  phrases?: ReadonlyArray<string>;
  boost?: number;
}

export const GoogleCloudDialogflowV2SpeechContext: Schema.Schema<GoogleCloudDialogflowV2SpeechContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    phrases: Schema.optional(Schema.Array(Schema.String)),
    boost: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SpeechContext" });

export interface GoogleCloudDialogflowV2InputAudioConfig {
  enableWordInfo?: boolean;
  sampleRateHertz?: number;
  phraseSets?: ReadonlyArray<string>;
  enableAutomaticPunctuation?: boolean;
  phraseHints?: ReadonlyArray<string>;
  optOutConformerModelMigration?: boolean;
  languageCode?: string;
  model?: string;
  modelVariant?:
    | "SPEECH_MODEL_VARIANT_UNSPECIFIED"
    | "USE_BEST_AVAILABLE"
    | "USE_STANDARD"
    | "USE_ENHANCED"
    | (string & {});
  singleUtterance?: boolean;
  disableNoSpeechRecognizedEvent?: boolean;
  speechContexts?: ReadonlyArray<GoogleCloudDialogflowV2SpeechContext>;
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
}

export const GoogleCloudDialogflowV2InputAudioConfig: Schema.Schema<GoogleCloudDialogflowV2InputAudioConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableWordInfo: Schema.optional(Schema.Boolean),
    sampleRateHertz: Schema.optional(Schema.Number),
    phraseSets: Schema.optional(Schema.Array(Schema.String)),
    enableAutomaticPunctuation: Schema.optional(Schema.Boolean),
    phraseHints: Schema.optional(Schema.Array(Schema.String)),
    optOutConformerModelMigration: Schema.optional(Schema.Boolean),
    languageCode: Schema.optional(Schema.String),
    model: Schema.optional(Schema.String),
    modelVariant: Schema.optional(Schema.String),
    singleUtterance: Schema.optional(Schema.Boolean),
    disableNoSpeechRecognizedEvent: Schema.optional(Schema.Boolean),
    speechContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SpeechContext),
    ),
    audioEncoding: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2InputAudioConfig" });

export interface GoogleCloudDialogflowV2QueryInput {
  text?: GoogleCloudDialogflowV2TextInput;
  event?: GoogleCloudDialogflowV2EventInput;
  audioConfig?: GoogleCloudDialogflowV2InputAudioConfig;
}

export const GoogleCloudDialogflowV2QueryInput: Schema.Schema<GoogleCloudDialogflowV2QueryInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(GoogleCloudDialogflowV2TextInput),
    event: Schema.optional(GoogleCloudDialogflowV2EventInput),
    audioConfig: Schema.optional(GoogleCloudDialogflowV2InputAudioConfig),
  }).annotate({ identifier: "GoogleCloudDialogflowV2QueryInput" });

export interface GoogleCloudDialogflowV2DetectIntentRequest {
  outputAudioConfig?: GoogleCloudDialogflowV2OutputAudioConfig;
  queryParams?: GoogleCloudDialogflowV2QueryParameters;
  inputAudio?: string;
  queryInput?: GoogleCloudDialogflowV2QueryInput;
  outputAudioConfigMask?: string;
}

export const GoogleCloudDialogflowV2DetectIntentRequest: Schema.Schema<GoogleCloudDialogflowV2DetectIntentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputAudioConfig: Schema.optional(
      GoogleCloudDialogflowV2OutputAudioConfig,
    ),
    queryParams: Schema.optional(GoogleCloudDialogflowV2QueryParameters),
    inputAudio: Schema.optional(Schema.String),
    queryInput: Schema.optional(GoogleCloudDialogflowV2QueryInput),
    outputAudioConfigMask: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2DetectIntentRequest" });

export interface GoogleCloudDialogflowV2SearchKnowledgeAnswerAnswerSource {
  uri?: string;
  title?: string;
  snippet?: string;
  metadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2SearchKnowledgeAnswerAnswerSource: Schema.Schema<GoogleCloudDialogflowV2SearchKnowledgeAnswerAnswerSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    snippet: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SearchKnowledgeAnswerAnswerSource",
  });

export interface GoogleCloudDialogflowV2SearchKnowledgeAnswer {
  answer?: string;
  answerType?:
    | "ANSWER_TYPE_UNSPECIFIED"
    | "FAQ"
    | "GENERATIVE"
    | "INTENT"
    | "PLAYBOOK"
    | "EVENT"
    | (string & {});
  answerSources?: ReadonlyArray<GoogleCloudDialogflowV2SearchKnowledgeAnswerAnswerSource>;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2SearchKnowledgeAnswer: Schema.Schema<GoogleCloudDialogflowV2SearchKnowledgeAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answer: Schema.optional(Schema.String),
    answerType: Schema.optional(Schema.String),
    answerSources: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SearchKnowledgeAnswerAnswerSource),
    ),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SearchKnowledgeAnswer" });

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

export interface GoogleCloudDialogflowV2TrainAgentRequest {}

export const GoogleCloudDialogflowV2TrainAgentRequest: Schema.Schema<GoogleCloudDialogflowV2TrainAgentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowV2TrainAgentRequest",
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

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff {
  metadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff: Schema.Schema<GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff",
  });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard {}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard: Schema.Schema<GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard",
  });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio {
  allowPlaybackInterruption?: boolean;
  audioUri?: string;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio: Schema.Schema<GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
    audioUri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio",
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

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText {
  allowPlaybackInterruption?: boolean;
  ssml?: string;
  text?: string;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText: Schema.Schema<GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
    ssml: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText",
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

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction {}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction: Schema.Schema<GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction",
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

export interface GoogleCloudDialogflowCxV3beta1ResponseMessage {
  text?: GoogleCloudDialogflowCxV3beta1ResponseMessageText;
  liveAgentHandoff?: GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff;
  knowledgeInfoCard?: GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard;
  playAudio?: GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio;
  mixedAudio?: GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio;
  toolCall?: GoogleCloudDialogflowCxV3beta1ToolCall;
  channel?: string;
  outputAudioText?: GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText;
  payload?: Record<string, unknown>;
  conversationSuccess?: GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess;
  endInteraction?: GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction;
  telephonyTransferCall?: GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessage: Schema.Schema<GoogleCloudDialogflowCxV3beta1ResponseMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(GoogleCloudDialogflowCxV3beta1ResponseMessageText),
    liveAgentHandoff: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff,
    ),
    knowledgeInfoCard: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard,
    ),
    playAudio: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio,
    ),
    mixedAudio: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio,
    ),
    toolCall: Schema.optional(GoogleCloudDialogflowCxV3beta1ToolCall),
    channel: Schema.optional(Schema.String),
    outputAudioText: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText,
    ),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    conversationSuccess: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess,
    ),
    endInteraction: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction,
    ),
    telephonyTransferCall: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall,
    ),
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

export interface GoogleCloudDialogflowCxV3beta1FulfillmentGeneratorSettings {
  generator?: string;
  inputParameters?: Record<string, string>;
  outputParameter?: string;
}

export const GoogleCloudDialogflowCxV3beta1FulfillmentGeneratorSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1FulfillmentGeneratorSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generator: Schema.optional(Schema.String),
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    outputParameter: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1FulfillmentGeneratorSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings {
  endpointerSensitivity?: number;
  models?: Record<string, string>;
  noSpeechTimeout?: string;
  useTimeoutBasedEndpointing?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpointerSensitivity: Schema.optional(Schema.Number),
    models: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    noSpeechTimeout: Schema.optional(Schema.String),
    useTimeoutBasedEndpointing: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1GcsDestination {
  uri?: string;
}

export const GoogleCloudDialogflowCxV3beta1GcsDestination: Schema.Schema<GoogleCloudDialogflowCxV3beta1GcsDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1GcsDestination" });

export interface GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings {
  endpointingTimeoutDuration?: string;
  enabled?: boolean;
  finishDigit?: string;
  maxDigits?: number;
  interdigitTimeoutDuration?: string;
}

export const GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpointingTimeoutDuration: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    finishDigit: Schema.optional(Schema.String),
    maxDigits: Schema.optional(Schema.Number),
    interdigitTimeoutDuration: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings {
  enableStackdriverLogging?: boolean;
  enableConsentBasedRedaction?: boolean;
  enableInteractionLogging?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableStackdriverLogging: Schema.optional(Schema.Boolean),
    enableConsentBasedRedaction: Schema.optional(Schema.Boolean),
    enableInteractionLogging: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1AdvancedSettings {
  speechSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings;
  audioExportGcsDestination?: GoogleCloudDialogflowCxV3beta1GcsDestination;
  dtmfSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings;
  loggingSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings;
}

export const GoogleCloudDialogflowCxV3beta1AdvancedSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1AdvancedSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export interface GoogleCloudDialogflowCxV3beta1Fulfillment {
  conditionalCases?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases>;
  messages?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ResponseMessage>;
  returnPartialResponses?: boolean;
  enableGenerativeFallback?: boolean;
  generators?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1FulfillmentGeneratorSettings>;
  tag?: string;
  advancedSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettings;
  webhook?: string;
  setParameterActions?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction>;
}

export const GoogleCloudDialogflowCxV3beta1Fulfillment: Schema.Schema<GoogleCloudDialogflowCxV3beta1Fulfillment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditionalCases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases),
    ),
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ResponseMessage),
    ),
    returnPartialResponses: Schema.optional(Schema.Boolean),
    enableGenerativeFallback: Schema.optional(Schema.Boolean),
    generators: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1FulfillmentGeneratorSettings),
    ),
    tag: Schema.optional(Schema.String),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettings,
    ),
    webhook: Schema.optional(Schema.String),
    setParameterActions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Fulfillment" });

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

export const GoogleCloudDialogflowCxV3beta1DataStoreConnection: Schema.Schema<GoogleCloudDialogflowCxV3beta1DataStoreConnection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataStore: Schema.optional(Schema.String),
    documentProcessingMode: Schema.optional(Schema.String),
    dataStoreType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1DataStoreConnection",
  });

export interface GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings {
  triggerFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
  targetFlow?: string;
  enabled?: boolean;
  targetPage?: string;
  dataStoreConnections?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1DataStoreConnection>;
}

export const GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    triggerFulfillment: Schema.optional(
      GoogleCloudDialogflowCxV3beta1Fulfillment,
    ),
    targetFlow: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    targetPage: Schema.optional(Schema.String),
    dataStoreConnections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1DataStoreConnection),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings",
  });

export interface GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics {
  recall?: number;
  n?: number;
}

export const GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics: Schema.Schema<GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    recall: Schema.optional(Schema.Number),
    n: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics",
  });

export interface GoogleCloudDialogflowV2SmartReplyMetrics {
  topNMetrics?: ReadonlyArray<GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics>;
  conversationCount?: string;
  allowlistCoverage?: number;
}

export const GoogleCloudDialogflowV2SmartReplyMetrics: Schema.Schema<GoogleCloudDialogflowV2SmartReplyMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    topNMetrics: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics),
    ),
    conversationCount: Schema.optional(Schema.String),
    allowlistCoverage: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SmartReplyMetrics" });

export interface GoogleCloudDialogflowV2InputDataset {
  dataset?: string;
}

export const GoogleCloudDialogflowV2InputDataset: Schema.Schema<GoogleCloudDialogflowV2InputDataset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataset: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2InputDataset" });

export interface GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig {
  allowlistDocument?: string;
  maxResultCount?: number;
}

export const GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig: Schema.Schema<GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowlistDocument: Schema.optional(Schema.String),
    maxResultCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig",
  });

export interface GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig {
  allowlistDocument?: string;
  maxResultCount?: number;
}

export const GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig: Schema.Schema<GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowlistDocument: Schema.optional(Schema.String),
    maxResultCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig",
  });

export interface GoogleCloudDialogflowV2EvaluationConfig {
  datasets?: ReadonlyArray<GoogleCloudDialogflowV2InputDataset>;
  smartComposeConfig?: GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig;
  smartReplyConfig?: GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig;
}

export const GoogleCloudDialogflowV2EvaluationConfig: Schema.Schema<GoogleCloudDialogflowV2EvaluationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datasets: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2InputDataset),
    ),
    smartComposeConfig: Schema.optional(
      GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig,
    ),
    smartReplyConfig: Schema.optional(
      GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2EvaluationConfig" });

export interface GoogleCloudDialogflowV2ConversationModelEvaluation {
  displayName?: string;
  smartReplyMetrics?: GoogleCloudDialogflowV2SmartReplyMetrics;
  rawHumanEvalTemplateCsv?: string;
  name?: string;
  evaluationConfig?: GoogleCloudDialogflowV2EvaluationConfig;
  createTime?: string;
}

export const GoogleCloudDialogflowV2ConversationModelEvaluation: Schema.Schema<GoogleCloudDialogflowV2ConversationModelEvaluation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    smartReplyMetrics: Schema.optional(
      GoogleCloudDialogflowV2SmartReplyMetrics,
    ),
    rawHumanEvalTemplateCsv: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    evaluationConfig: Schema.optional(GoogleCloudDialogflowV2EvaluationConfig),
    createTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ConversationModelEvaluation",
  });

export interface GoogleCloudDialogflowV2ToolConnectorToolActionEntityOperation {
  operation?:
    | "OPERATION_TYPE_UNSPECIFIED"
    | "LIST"
    | "GET"
    | "CREATE"
    | "UPDATE"
    | "DELETE"
    | (string & {});
  entityId?: string;
}

export const GoogleCloudDialogflowV2ToolConnectorToolActionEntityOperation: Schema.Schema<GoogleCloudDialogflowV2ToolConnectorToolActionEntityOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operation: Schema.optional(Schema.String),
    entityId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ToolConnectorToolActionEntityOperation",
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

export interface GoogleCloudDialogflowV2AgentAssistantFeedbackSummarizationFeedback {
  textSections?: Record<string, string>;
  startTime?: string;
  summaryText?: string;
  submitTime?: string;
}

export const GoogleCloudDialogflowV2AgentAssistantFeedbackSummarizationFeedback: Schema.Schema<GoogleCloudDialogflowV2AgentAssistantFeedbackSummarizationFeedback> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    textSections: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    startTime: Schema.optional(Schema.String),
    summaryText: Schema.optional(Schema.String),
    submitTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2AgentAssistantFeedbackSummarizationFeedback",
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

export interface GoogleCloudDialogflowV2AudioInput {
  audio?: string;
  config?: GoogleCloudDialogflowV2InputAudioConfig;
}

export const GoogleCloudDialogflowV2AudioInput: Schema.Schema<GoogleCloudDialogflowV2AudioInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audio: Schema.optional(Schema.String),
    config: Schema.optional(GoogleCloudDialogflowV2InputAudioConfig),
  }).annotate({ identifier: "GoogleCloudDialogflowV2AudioInput" });

export interface GoogleCloudDialogflowV2ConversationContext {
  messageEntries?: ReadonlyArray<GoogleCloudDialogflowV2MessageEntry>;
}

export const GoogleCloudDialogflowV2ConversationContext: Schema.Schema<GoogleCloudDialogflowV2ConversationContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messageEntries: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2MessageEntry),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ConversationContext" });

export interface GoogleCloudDialogflowV2AnnotatedMessagePart {
  text?: string;
  entityType?: string;
  formattedValue?: unknown;
}

export const GoogleCloudDialogflowV2AnnotatedMessagePart: Schema.Schema<GoogleCloudDialogflowV2AnnotatedMessagePart> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    entityType: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowV2Sentiment {
  score?: number;
  magnitude?: number;
}

export const GoogleCloudDialogflowV2Sentiment: Schema.Schema<GoogleCloudDialogflowV2Sentiment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.Number),
    magnitude: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Sentiment" });

export interface GoogleCloudDialogflowV2SentimentAnalysisResult {
  queryTextSentiment?: GoogleCloudDialogflowV2Sentiment;
}

export const GoogleCloudDialogflowV2SentimentAnalysisResult: Schema.Schema<GoogleCloudDialogflowV2SentimentAnalysisResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryTextSentiment: Schema.optional(GoogleCloudDialogflowV2Sentiment),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SentimentAnalysisResult" });

export interface GoogleCloudDialogflowV2Message {
  content?: string;
  createTime?: string;
  languageCode?: string;
  participant?: string;
  participantRole?:
    | "ROLE_UNSPECIFIED"
    | "HUMAN_AGENT"
    | "AUTOMATED_AGENT"
    | "END_USER"
    | (string & {});
  name?: string;
  sendTime?: string;
  messageAnnotation?: GoogleCloudDialogflowV2MessageAnnotation;
  sentimentAnalysis?: GoogleCloudDialogflowV2SentimentAnalysisResult;
}

export const GoogleCloudDialogflowV2Message: Schema.Schema<GoogleCloudDialogflowV2Message> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    participant: Schema.optional(Schema.String),
    participantRole: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    sendTime: Schema.optional(Schema.String),
    messageAnnotation: Schema.optional(
      GoogleCloudDialogflowV2MessageAnnotation,
    ),
    sentimentAnalysis: Schema.optional(
      GoogleCloudDialogflowV2SentimentAnalysisResult,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Message" });

export interface GoogleCloudDialogflowV2GenerateStatelessSummaryRequestMinimalConversation {
  messages?: ReadonlyArray<GoogleCloudDialogflowV2Message>;
}

export const GoogleCloudDialogflowV2GenerateStatelessSummaryRequestMinimalConversation: Schema.Schema<GoogleCloudDialogflowV2GenerateStatelessSummaryRequestMinimalConversation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messages: Schema.optional(Schema.Array(GoogleCloudDialogflowV2Message)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2GenerateStatelessSummaryRequestMinimalConversation",
  });

export interface GoogleCloudDialogflowV2LoggingConfig {
  enableStackdriverLogging?: boolean;
}

export const GoogleCloudDialogflowV2LoggingConfig: Schema.Schema<GoogleCloudDialogflowV2LoggingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableStackdriverLogging: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2LoggingConfig" });

export interface GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig {
  accountNumber?: string;
}

export const GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig: Schema.Schema<GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountNumber: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig",
  });

export interface GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig {
  organizationId?: string;
  deploymentId?: string;
  endpointDomain?: string;
  buttonId?: string;
}

export const GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig: Schema.Schema<GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.optional(Schema.String),
    deploymentId: Schema.optional(Schema.String),
    endpointDomain: Schema.optional(Schema.String),
    buttonId: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig",
  });

export interface GoogleCloudDialogflowV2HumanAgentHandoffConfig {
  livePersonConfig?: GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig;
  salesforceLiveAgentConfig?: GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig;
}

export const GoogleCloudDialogflowV2HumanAgentHandoffConfig: Schema.Schema<GoogleCloudDialogflowV2HumanAgentHandoffConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    livePersonConfig: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig,
    ),
    salesforceLiveAgentConfig: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2HumanAgentHandoffConfig" });

export interface GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig {
  groupSuggestionResponses?: boolean;
  enableAsyncToolCall?: boolean;
  generators?: ReadonlyArray<string>;
  disableHighLatencyFeaturesSyncDelivery?: boolean;
  skipEmptyEventBasedSuggestion?: boolean;
  featureConfigs?: ReadonlyArray<GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig>;
  useUnredactedConversationData?: boolean;
}

export const GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig: Schema.Schema<GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupSuggestionResponses: Schema.optional(Schema.Boolean),
    enableAsyncToolCall: Schema.optional(Schema.Boolean),
    generators: Schema.optional(Schema.Array(Schema.String)),
    disableHighLatencyFeaturesSyncDelivery: Schema.optional(Schema.Boolean),
    skipEmptyEventBasedSuggestion: Schema.optional(Schema.Boolean),
    featureConfigs: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig,
      ),
    ),
    useUnredactedConversationData: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig",
  });

export interface GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig {
  enableSentimentAnalysis?: boolean;
  enableSentimentAnalysisV3?: boolean;
  enableEntityExtraction?: boolean;
}

export const GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig: Schema.Schema<GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableSentimentAnalysis: Schema.optional(Schema.Boolean),
    enableSentimentAnalysisV3: Schema.optional(Schema.Boolean),
    enableEntityExtraction: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig",
  });

export interface GoogleCloudDialogflowV2HumanAgentAssistantConfig {
  humanAgentSuggestionConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig;
  endUserSuggestionConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig;
  notificationConfig?: GoogleCloudDialogflowV2NotificationConfig;
  messageAnalysisConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig;
}

export const GoogleCloudDialogflowV2HumanAgentAssistantConfig: Schema.Schema<GoogleCloudDialogflowV2HumanAgentAssistantConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    humanAgentSuggestionConfig: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig,
    ),
    endUserSuggestionConfig: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig,
    ),
    notificationConfig: Schema.optional(
      GoogleCloudDialogflowV2NotificationConfig,
    ),
    messageAnalysisConfig: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2HumanAgentAssistantConfig",
  });

export interface GoogleCloudDialogflowV2SpeechToTextConfig {
  sampleRateHertz?: number;
  enableWordInfo?: boolean;
  model?: string;
  phraseSets?: ReadonlyArray<string>;
  languageCode?: string;
  useTimeoutBasedEndpointing?: boolean;
  speechModelVariant?:
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
}

export const GoogleCloudDialogflowV2SpeechToTextConfig: Schema.Schema<GoogleCloudDialogflowV2SpeechToTextConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sampleRateHertz: Schema.optional(Schema.Number),
    enableWordInfo: Schema.optional(Schema.Boolean),
    model: Schema.optional(Schema.String),
    phraseSets: Schema.optional(Schema.Array(Schema.String)),
    languageCode: Schema.optional(Schema.String),
    useTimeoutBasedEndpointing: Schema.optional(Schema.Boolean),
    speechModelVariant: Schema.optional(Schema.String),
    audioEncoding: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SpeechToTextConfig" });

export interface GoogleCloudDialogflowV2ConversationProfile {
  loggingConfig?: GoogleCloudDialogflowV2LoggingConfig;
  languageCode?: string;
  automatedAgentConfig?: GoogleCloudDialogflowV2AutomatedAgentConfig;
  humanAgentHandoffConfig?: GoogleCloudDialogflowV2HumanAgentHandoffConfig;
  createTime?: string;
  humanAgentAssistantConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfig;
  notificationConfig?: GoogleCloudDialogflowV2NotificationConfig;
  newRecognitionResultNotificationConfig?: GoogleCloudDialogflowV2NotificationConfig;
  newMessageEventNotificationConfig?: GoogleCloudDialogflowV2NotificationConfig;
  securitySettings?: string;
  displayName?: string;
  timeZone?: string;
  ttsConfig?: GoogleCloudDialogflowV2SynthesizeSpeechConfig;
  name?: string;
  updateTime?: string;
  sttConfig?: GoogleCloudDialogflowV2SpeechToTextConfig;
}

export const GoogleCloudDialogflowV2ConversationProfile: Schema.Schema<GoogleCloudDialogflowV2ConversationProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loggingConfig: Schema.optional(GoogleCloudDialogflowV2LoggingConfig),
    languageCode: Schema.optional(Schema.String),
    automatedAgentConfig: Schema.optional(
      GoogleCloudDialogflowV2AutomatedAgentConfig,
    ),
    humanAgentHandoffConfig: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentHandoffConfig,
    ),
    createTime: Schema.optional(Schema.String),
    humanAgentAssistantConfig: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentAssistantConfig,
    ),
    notificationConfig: Schema.optional(
      GoogleCloudDialogflowV2NotificationConfig,
    ),
    newRecognitionResultNotificationConfig: Schema.optional(
      GoogleCloudDialogflowV2NotificationConfig,
    ),
    newMessageEventNotificationConfig: Schema.optional(
      GoogleCloudDialogflowV2NotificationConfig,
    ),
    securitySettings: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    timeZone: Schema.optional(Schema.String),
    ttsConfig: Schema.optional(GoogleCloudDialogflowV2SynthesizeSpeechConfig),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    sttConfig: Schema.optional(GoogleCloudDialogflowV2SpeechToTextConfig),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ConversationProfile" });

export interface GoogleCloudDialogflowV2GenerateStatelessSummaryRequest {
  statelessConversation?: GoogleCloudDialogflowV2GenerateStatelessSummaryRequestMinimalConversation;
  conversationProfile?: GoogleCloudDialogflowV2ConversationProfile;
  latestMessage?: string;
  maxContextSize?: number;
}

export const GoogleCloudDialogflowV2GenerateStatelessSummaryRequest: Schema.Schema<GoogleCloudDialogflowV2GenerateStatelessSummaryRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    statelessConversation: Schema.optional(
      GoogleCloudDialogflowV2GenerateStatelessSummaryRequestMinimalConversation,
    ),
    conversationProfile: Schema.optional(
      GoogleCloudDialogflowV2ConversationProfile,
    ),
    latestMessage: Schema.optional(Schema.String),
    maxContextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2GenerateStatelessSummaryRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput {
  injectedParameters?: Record<string, unknown>;
  isWebhookEnabled?: boolean;
  input?: GoogleCloudDialogflowCxV3beta1QueryInput;
  enableSentimentAnalysis?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput: Schema.Schema<GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    injectedParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    isWebhookEnabled: Schema.optional(Schema.Boolean),
    input: Schema.optional(GoogleCloudDialogflowCxV3beta1QueryInput),
    enableSentimentAnalysis: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput",
  });

export interface GoogleCloudDialogflowCxV3beta1TestRunDifference {
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

export const GoogleCloudDialogflowCxV3beta1TestRunDifference: Schema.Schema<GoogleCloudDialogflowCxV3beta1TestRunDifference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1TestRunDifference",
  });

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
  text?: string;
  parameterId?: string;
}

export const GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart: Schema.Schema<GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    parameterId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart",
  });

export interface GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase {
  repeatCount?: number;
  id?: string;
  parts?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart>;
}

export const GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase: Schema.Schema<GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repeatCount: Schema.optional(Schema.Number),
    id: Schema.optional(Schema.String),
    parts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase",
  });

export interface GoogleCloudDialogflowCxV3beta1Intent {
  priority?: number;
  isFallback?: boolean;
  dtmfPattern?: string;
  parameters?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1IntentParameter>;
  labels?: Record<string, string>;
  name?: string;
  trainingPhrases?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase>;
  description?: string;
  displayName?: string;
}

export const GoogleCloudDialogflowCxV3beta1Intent: Schema.Schema<GoogleCloudDialogflowCxV3beta1Intent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    priority: Schema.optional(Schema.Number),
    isFallback: Schema.optional(Schema.Boolean),
    dtmfPattern: Schema.optional(Schema.String),
    parameters: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1IntentParameter),
    ),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    trainingPhrases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase),
    ),
    description: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Intent" });

export interface GoogleCloudDialogflowCxV3beta1TransitionRoute {
  description?: string;
  targetPage?: string;
  condition?: string;
  intent?: string;
  triggerFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
  targetFlow?: string;
  name?: string;
}

export const GoogleCloudDialogflowCxV3beta1TransitionRoute: Schema.Schema<GoogleCloudDialogflowCxV3beta1TransitionRoute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    targetPage: Schema.optional(Schema.String),
    condition: Schema.optional(Schema.String),
    intent: Schema.optional(Schema.String),
    triggerFulfillment: Schema.optional(
      GoogleCloudDialogflowCxV3beta1Fulfillment,
    ),
    targetFlow: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TransitionRoute" });

export interface GoogleCloudDialogflowCxV3beta1EventHandler {
  event?: string;
  targetPlaybook?: string;
  targetPage?: string;
  name?: string;
  triggerFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
  targetFlow?: string;
}

export const GoogleCloudDialogflowCxV3beta1EventHandler: Schema.Schema<GoogleCloudDialogflowCxV3beta1EventHandler> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    event: Schema.optional(Schema.String),
    targetPlaybook: Schema.optional(Schema.String),
    targetPage: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    triggerFulfillment: Schema.optional(
      GoogleCloudDialogflowCxV3beta1Fulfillment,
    ),
    targetFlow: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1EventHandler" });

export interface GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior {
  repromptEventHandlers?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1EventHandler>;
  initialPromptFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
}

export const GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior: Schema.Schema<GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repromptEventHandlers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1EventHandler),
    ),
    initialPromptFulfillment: Schema.optional(
      GoogleCloudDialogflowCxV3beta1Fulfillment,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior",
  });

export interface GoogleCloudDialogflowCxV3beta1FormParameter {
  entityType?: string;
  isList?: boolean;
  redact?: boolean;
  advancedSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettings;
  defaultValue?: unknown;
  required?: boolean;
  displayName?: string;
  fillBehavior?: GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior;
}

export const GoogleCloudDialogflowCxV3beta1FormParameter: Schema.Schema<GoogleCloudDialogflowCxV3beta1FormParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityType: Schema.optional(Schema.String),
    isList: Schema.optional(Schema.Boolean),
    redact: Schema.optional(Schema.Boolean),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettings,
    ),
    defaultValue: Schema.optional(Schema.Unknown),
    required: Schema.optional(Schema.Boolean),
    displayName: Schema.optional(Schema.String),
    fillBehavior: Schema.optional(
      GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior,
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

export interface GoogleCloudDialogflowCxV3beta1Page {
  entryFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
  advancedSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettings;
  transitionRoutes?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TransitionRoute>;
  name?: string;
  eventHandlers?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1EventHandler>;
  transitionRouteGroups?: ReadonlyArray<string>;
  knowledgeConnectorSettings?: GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings;
  description?: string;
  displayName?: string;
  form?: GoogleCloudDialogflowCxV3beta1Form;
}

export const GoogleCloudDialogflowCxV3beta1Page: Schema.Schema<GoogleCloudDialogflowCxV3beta1Page> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entryFulfillment: Schema.optional(
      GoogleCloudDialogflowCxV3beta1Fulfillment,
    ),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettings,
    ),
    transitionRoutes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TransitionRoute),
    ),
    name: Schema.optional(Schema.String),
    eventHandlers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1EventHandler),
    ),
    transitionRouteGroups: Schema.optional(Schema.Array(Schema.String)),
    knowledgeConnectorSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings,
    ),
    description: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    form: Schema.optional(GoogleCloudDialogflowCxV3beta1Form),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Page" });

export interface GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput {
  differences?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TestRunDifference>;
  triggeredIntent?: GoogleCloudDialogflowCxV3beta1Intent;
  diagnosticInfo?: Record<string, unknown>;
  currentPage?: GoogleCloudDialogflowCxV3beta1Page;
  sessionParameters?: Record<string, unknown>;
  textResponses?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ResponseMessageText>;
  status?: GoogleRpcStatus;
}

export const GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput: Schema.Schema<GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    differences: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TestRunDifference),
    ),
    triggeredIntent: Schema.optional(GoogleCloudDialogflowCxV3beta1Intent),
    diagnosticInfo: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    currentPage: Schema.optional(GoogleCloudDialogflowCxV3beta1Page),
    sessionParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    textResponses: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ResponseMessageText),
    ),
    status: Schema.optional(GoogleRpcStatus),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput",
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

export interface GoogleCloudDialogflowV2SummarizationSection {
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

export const GoogleCloudDialogflowV2SummarizationSection: Schema.Schema<GoogleCloudDialogflowV2SummarizationSection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    definition: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SummarizationSection" });

export interface GoogleCloudDialogflowV2InputConfig {
  gcsSource?: GoogleCloudDialogflowV2GcsSources;
}

export const GoogleCloudDialogflowV2InputConfig: Schema.Schema<GoogleCloudDialogflowV2InputConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsSource: Schema.optional(GoogleCloudDialogflowV2GcsSources),
  }).annotate({ identifier: "GoogleCloudDialogflowV2InputConfig" });

export interface GoogleCloudDialogflowV2CesAppSpec {
  cesApp?: string;
  confirmationRequirement?:
    | "CONFIRMATION_REQUIREMENT_UNSPECIFIED"
    | "REQUIRED"
    | "NOT_REQUIRED"
    | (string & {});
}

export const GoogleCloudDialogflowV2CesAppSpec: Schema.Schema<GoogleCloudDialogflowV2CesAppSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cesApp: Schema.optional(Schema.String),
    confirmationRequirement: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2CesAppSpec" });

export interface GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpecControlPoint {
  boostAmount?: number;
  attributeValue?: string;
}

export const GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpecControlPoint: Schema.Schema<GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpecControlPoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boostAmount: Schema.optional(Schema.Number),
    attributeValue: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpecControlPoint",
  });

export interface GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpec {
  controlPoints?: ReadonlyArray<GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpecControlPoint>;
  fieldName?: string;
  interpolationType?:
    | "INTERPOLATION_TYPE_UNSPECIFIED"
    | "LINEAR"
    | (string & {});
  attributeType?:
    | "ATTRIBUTE_TYPE_UNSPECIFIED"
    | "NUMERICAL"
    | "FRESHNESS"
    | (string & {});
}

export const GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpec: Schema.Schema<GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    controlPoints: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpecControlPoint,
      ),
    ),
    fieldName: Schema.optional(Schema.String),
    interpolationType: Schema.optional(Schema.String),
    attributeType: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpec",
  });

export interface GoogleCloudDialogflowCxV3IntentParameter {
  entityType?: string;
  isList?: boolean;
  redact?: boolean;
  id?: string;
}

export const GoogleCloudDialogflowCxV3IntentParameter: Schema.Schema<GoogleCloudDialogflowCxV3IntentParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityType: Schema.optional(Schema.String),
    isList: Schema.optional(Schema.Boolean),
    redact: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3IntentParameter" });

export interface GoogleCloudDialogflowCxV3IntentTrainingPhrasePart {
  text?: string;
  parameterId?: string;
}

export const GoogleCloudDialogflowCxV3IntentTrainingPhrasePart: Schema.Schema<GoogleCloudDialogflowCxV3IntentTrainingPhrasePart> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    parameterId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3IntentTrainingPhrasePart",
  });

export interface GoogleCloudDialogflowCxV3IntentTrainingPhrase {
  repeatCount?: number;
  id?: string;
  parts?: ReadonlyArray<GoogleCloudDialogflowCxV3IntentTrainingPhrasePart>;
}

export const GoogleCloudDialogflowCxV3IntentTrainingPhrase: Schema.Schema<GoogleCloudDialogflowCxV3IntentTrainingPhrase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repeatCount: Schema.optional(Schema.Number),
    id: Schema.optional(Schema.String),
    parts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3IntentTrainingPhrasePart),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3IntentTrainingPhrase" });

export interface GoogleCloudDialogflowCxV3Intent {
  parameters?: ReadonlyArray<GoogleCloudDialogflowCxV3IntentParameter>;
  labels?: Record<string, string>;
  priority?: number;
  isFallback?: boolean;
  dtmfPattern?: string;
  trainingPhrases?: ReadonlyArray<GoogleCloudDialogflowCxV3IntentTrainingPhrase>;
  name?: string;
  description?: string;
  displayName?: string;
}

export const GoogleCloudDialogflowCxV3Intent: Schema.Schema<GoogleCloudDialogflowCxV3Intent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameters: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3IntentParameter),
    ),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    priority: Schema.optional(Schema.Number),
    isFallback: Schema.optional(Schema.Boolean),
    dtmfPattern: Schema.optional(Schema.String),
    trainingPhrases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3IntentTrainingPhrase),
    ),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Intent" });

export interface GoogleCloudDialogflowV2beta1Context {
  name?: string;
  lifespanCount?: number;
  parameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2beta1Context: Schema.Schema<GoogleCloudDialogflowV2beta1Context> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    lifespanCount: Schema.optional(Schema.Number),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1Context" });

export interface GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo {
  parentFollowupIntentName?: string;
  followupIntentName?: string;
}

export const GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo: Schema.Schema<GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parentFollowupIntentName: Schema.optional(Schema.String),
    followupIntentName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo",
  });

export interface GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart {
  alias?: string;
  text?: string;
  userDefined?: boolean;
  entityType?: string;
}

export const GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart: Schema.Schema<GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    alias: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
    userDefined: Schema.optional(Schema.Boolean),
    entityType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart",
  });

export interface GoogleCloudDialogflowV2beta1IntentTrainingPhrase {
  name?: string;
  parts?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart>;
  type?: "TYPE_UNSPECIFIED" | "EXAMPLE" | "TEMPLATE" | (string & {});
  timesAddedCount?: number;
}

export const GoogleCloudDialogflowV2beta1IntentTrainingPhrase: Schema.Schema<GoogleCloudDialogflowV2beta1IntentTrainingPhrase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    parts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart),
    ),
    type: Schema.optional(Schema.String),
    timesAddedCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentTrainingPhrase",
  });

export interface GoogleCloudDialogflowV2beta1IntentParameter {
  defaultValue?: string;
  entityTypeDisplayName?: string;
  isList?: boolean;
  displayName?: string;
  value?: string;
  prompts?: ReadonlyArray<string>;
  name?: string;
  mandatory?: boolean;
}

export const GoogleCloudDialogflowV2beta1IntentParameter: Schema.Schema<GoogleCloudDialogflowV2beta1IntentParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultValue: Schema.optional(Schema.String),
    entityTypeDisplayName: Schema.optional(Schema.String),
    isList: Schema.optional(Schema.Boolean),
    displayName: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    prompts: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    mandatory: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentParameter" });

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
  subtitle?: string;
  imageUri?: string;
  title?: string;
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageCardButton>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageCard: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subtitle: Schema.optional(Schema.String),
    imageUri: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageCardButton),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentMessageCard" });

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

export interface GoogleCloudDialogflowV2beta1IntentMessageImage {
  imageUri?: string;
  accessibilityText?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageImage: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageImage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageUri: Schema.optional(Schema.String),
    accessibilityText: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentMessageImage" });

export interface GoogleCloudDialogflowV2beta1IntentMessageTableCard {
  columnProperties?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageColumnProperties>;
  rows?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageTableCardRow>;
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton>;
  title?: string;
  subtitle?: string;
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
}

export const GoogleCloudDialogflowV2beta1IntentMessageTableCard: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageTableCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    columnProperties: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageColumnProperties),
    ),
    rows: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageTableCardRow),
    ),
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton),
    ),
    title: Schema.optional(Schema.String),
    subtitle: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageTableCard",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech {
  text?: string;
  ssml?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    ssml: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard {
  thumbnailImageAlignment?:
    | "THUMBNAIL_IMAGE_ALIGNMENT_UNSPECIFIED"
    | "LEFT"
    | "RIGHT"
    | (string & {});
  cardContent?: GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent;
  cardOrientation?:
    | "CARD_ORIENTATION_UNSPECIFIED"
    | "HORIZONTAL"
    | "VERTICAL"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    thumbnailImageAlignment: Schema.optional(Schema.String),
    cardContent: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent,
    ),
    cardOrientation: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard",
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

export interface GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem {
  description?: string;
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  info?: GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo;
  title?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
    info: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo,
    ),
    title: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowV2beta1IntentMessageBasicCard {
  subtitle?: string;
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  title?: string;
  formattedText?: string;
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageBasicCard: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageBasicCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subtitle: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
    title: Schema.optional(Schema.String),
    formattedText: Schema.optional(Schema.String),
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton),
    ),
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
  openUriAction?: GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;
  title?: string;
  footer?: string;
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  description?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    openUriAction: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction,
    ),
    title: Schema.optional(Schema.String),
    footer: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
    description: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmText {
  rbmSuggestion?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion>;
  text?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmText: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageRbmText> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rbmSuggestion: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion),
    ),
    text: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageRbmText",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject {
  name?: string;
  contentUrl?: string;
  largeImage?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  icon?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  description?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    contentUrl: Schema.optional(Schema.String),
    largeImage: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
    icon: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
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

export interface GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse {
  ssml?: string;
  displayText?: string;
  textToSpeech?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ssml: Schema.optional(Schema.String),
    displayText: Schema.optional(Schema.String),
    textToSpeech: Schema.optional(Schema.String),
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
  description?: string;
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  info?: GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo;
  title?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageListSelectItem: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageListSelectItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
    info: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo,
    ),
    title: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageListSelectItem",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageListSelect {
  subtitle?: string;
  title?: string;
  items?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageListSelectItem>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageListSelect: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageListSelect> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subtitle: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    items: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageListSelectItem),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageListSelect",
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

export interface GoogleCloudDialogflowV2beta1IntentMessage {
  card?: GoogleCloudDialogflowV2beta1IntentMessageCard;
  tableCard?: GoogleCloudDialogflowV2beta1IntentMessageTableCard;
  telephonySynthesizeSpeech?: GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech;
  rbmStandaloneRichCard?: GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard;
  carouselSelect?: GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect;
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
  rbmCarouselRichCard?: GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard;
  basicCard?: GoogleCloudDialogflowV2beta1IntentMessageBasicCard;
  browseCarouselCard?: GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard;
  linkOutSuggestion?: GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion;
  rbmText?: GoogleCloudDialogflowV2beta1IntentMessageRbmText;
  mediaContent?: GoogleCloudDialogflowV2beta1IntentMessageMediaContent;
  simpleResponses?: GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses;
  text?: GoogleCloudDialogflowV2beta1IntentMessageText;
  listSelect?: GoogleCloudDialogflowV2beta1IntentMessageListSelect;
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  telephonyPlayAudio?: GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio;
  quickReplies?: GoogleCloudDialogflowV2beta1IntentMessageQuickReplies;
  suggestions?: GoogleCloudDialogflowV2beta1IntentMessageSuggestions;
  telephonyTransferCall?: GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall;
  payload?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2beta1IntentMessage: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    card: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageCard),
    tableCard: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageTableCard,
    ),
    telephonySynthesizeSpeech: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech,
    ),
    rbmStandaloneRichCard: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard,
    ),
    carouselSelect: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect,
    ),
    platform: Schema.optional(Schema.String),
    rbmCarouselRichCard: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard,
    ),
    basicCard: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageBasicCard,
    ),
    browseCarouselCard: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard,
    ),
    linkOutSuggestion: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion,
    ),
    rbmText: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageRbmText),
    mediaContent: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageMediaContent,
    ),
    simpleResponses: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses,
    ),
    text: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageText),
    listSelect: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageListSelect,
    ),
    image: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
    telephonyPlayAudio: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio,
    ),
    quickReplies: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageQuickReplies,
    ),
    suggestions: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageSuggestions,
    ),
    telephonyTransferCall: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall,
    ),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentMessage" });

export interface GoogleCloudDialogflowV2beta1Intent {
  displayName?: string;
  mlDisabled?: boolean;
  inputContextNames?: ReadonlyArray<string>;
  parentFollowupIntentName?: string;
  endInteraction?: boolean;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2beta1Context>;
  name?: string;
  followupIntentInfo?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo>;
  liveAgentHandoff?: boolean;
  resetContexts?: boolean;
  trainingPhrases?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentTrainingPhrase>;
  isFallback?: boolean;
  rootFollowupIntentName?: string;
  parameters?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentParameter>;
  mlEnabled?: boolean;
  events?: ReadonlyArray<string>;
  action?: string;
  webhookState?:
    | "WEBHOOK_STATE_UNSPECIFIED"
    | "WEBHOOK_STATE_ENABLED"
    | "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"
    | (string & {});
  messages?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessage>;
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
  priority?: number;
}

export const GoogleCloudDialogflowV2beta1Intent: Schema.Schema<GoogleCloudDialogflowV2beta1Intent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    mlDisabled: Schema.optional(Schema.Boolean),
    inputContextNames: Schema.optional(Schema.Array(Schema.String)),
    parentFollowupIntentName: Schema.optional(Schema.String),
    endInteraction: Schema.optional(Schema.Boolean),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1Context),
    ),
    name: Schema.optional(Schema.String),
    followupIntentInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo),
    ),
    liveAgentHandoff: Schema.optional(Schema.Boolean),
    resetContexts: Schema.optional(Schema.Boolean),
    trainingPhrases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentTrainingPhrase),
    ),
    isFallback: Schema.optional(Schema.Boolean),
    rootFollowupIntentName: Schema.optional(Schema.String),
    parameters: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentParameter),
    ),
    mlEnabled: Schema.optional(Schema.Boolean),
    events: Schema.optional(Schema.Array(Schema.String)),
    action: Schema.optional(Schema.String),
    webhookState: Schema.optional(Schema.String),
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessage),
    ),
    defaultResponsePlatforms: Schema.optional(Schema.Array(Schema.String)),
    priority: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1Intent" });

export interface GoogleCloudDialogflowV2SummarizationEvaluationMetricsAdherenceDecomposition {
  isAdherent?: boolean;
  point?: string;
  adherenceReasoning?: string;
}

export const GoogleCloudDialogflowV2SummarizationEvaluationMetricsAdherenceDecomposition: Schema.Schema<GoogleCloudDialogflowV2SummarizationEvaluationMetricsAdherenceDecomposition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isAdherent: Schema.optional(Schema.Boolean),
    point: Schema.optional(Schema.String),
    adherenceReasoning: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SummarizationEvaluationMetricsAdherenceDecomposition",
  });

export interface GoogleCloudDialogflowV2SummarizationEvaluationMetricsDecomposition {
  accuracyDecomposition?: GoogleCloudDialogflowV2SummarizationEvaluationMetricsAccuracyDecomposition;
  adherenceDecomposition?: GoogleCloudDialogflowV2SummarizationEvaluationMetricsAdherenceDecomposition;
}

export const GoogleCloudDialogflowV2SummarizationEvaluationMetricsDecomposition: Schema.Schema<GoogleCloudDialogflowV2SummarizationEvaluationMetricsDecomposition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accuracyDecomposition: Schema.optional(
      GoogleCloudDialogflowV2SummarizationEvaluationMetricsAccuracyDecomposition,
    ),
    adherenceDecomposition: Schema.optional(
      GoogleCloudDialogflowV2SummarizationEvaluationMetricsAdherenceDecomposition,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SummarizationEvaluationMetricsDecomposition",
  });

export interface GoogleCloudDialogflowV2SummarizationEvaluationMetricsSummarizationEvaluationResult {
  evaluationResults?: ReadonlyArray<GoogleCloudDialogflowV2SummarizationEvaluationMetricsEvaluationResult>;
  sectionSummary?: string;
  sessionId?: string;
  section?: string;
  metric?: string;
  score?: number;
  decompositions?: ReadonlyArray<GoogleCloudDialogflowV2SummarizationEvaluationMetricsDecomposition>;
}

export const GoogleCloudDialogflowV2SummarizationEvaluationMetricsSummarizationEvaluationResult: Schema.Schema<GoogleCloudDialogflowV2SummarizationEvaluationMetricsSummarizationEvaluationResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    evaluationResults: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2SummarizationEvaluationMetricsEvaluationResult,
      ),
    ),
    sectionSummary: Schema.optional(Schema.String),
    sessionId: Schema.optional(Schema.String),
    section: Schema.optional(Schema.String),
    metric: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    decompositions: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2SummarizationEvaluationMetricsDecomposition,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SummarizationEvaluationMetricsSummarizationEvaluationResult",
  });

export interface GoogleCloudDialogflowCxV3beta1RunTestCaseMetadata {}

export const GoogleCloudDialogflowCxV3beta1RunTestCaseMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1RunTestCaseMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RunTestCaseMetadata",
  });

export interface GoogleCloudDialogflowV2FaqAnswer {
  question?: string;
  source?: string;
  answerRecord?: string;
  answer?: string;
  confidence?: number;
  metadata?: Record<string, string>;
}

export const GoogleCloudDialogflowV2FaqAnswer: Schema.Schema<GoogleCloudDialogflowV2FaqAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    question: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    answer: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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

export interface GoogleCloudDialogflowCxV3EnvironmentVersionConfig {
  version?: string;
}

export const GoogleCloudDialogflowCxV3EnvironmentVersionConfig: Schema.Schema<GoogleCloudDialogflowCxV3EnvironmentVersionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3EnvironmentVersionConfig",
  });

export interface GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig {
  clientId?: string;
  tokenEndpoint?: string;
  clientSecret?: string;
  scopes?: ReadonlyArray<string>;
  secretVersionForClientSecret?: string;
}

export const GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig: Schema.Schema<GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientId: Schema.optional(Schema.String),
    tokenEndpoint: Schema.optional(Schema.String),
    clientSecret: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Schema.String)),
    secretVersionForClientSecret: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig",
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
  requestHeaders?: Record<string, string>;
  serviceAgentAuth?:
    | "SERVICE_AGENT_AUTH_UNSPECIFIED"
    | "NONE"
    | "ID_TOKEN"
    | "ACCESS_TOKEN"
    | (string & {});
  requestBody?: string;
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
  parameterMapping?: Record<string, string>;
  uri?: string;
  serviceAccountAuthConfig?: GoogleCloudDialogflowCxV3WebhookGenericWebServiceServiceAccountAuthConfig;
  secretVersionsForRequestHeaders?: Record<
    string,
    GoogleCloudDialogflowCxV3WebhookGenericWebServiceSecretVersionHeaderValue
  >;
  allowedCaCerts?: ReadonlyArray<string>;
  password?: string;
  secretVersionForUsernamePassword?: string;
  webhookType?:
    | "WEBHOOK_TYPE_UNSPECIFIED"
    | "STANDARD"
    | "FLEXIBLE"
    | (string & {});
  username?: string;
}

export const GoogleCloudDialogflowCxV3WebhookGenericWebService: Schema.Schema<GoogleCloudDialogflowCxV3WebhookGenericWebService> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    serviceAgentAuth: Schema.optional(Schema.String),
    requestBody: Schema.optional(Schema.String),
    httpMethod: Schema.optional(Schema.String),
    oauthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig,
    ),
    parameterMapping: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    uri: Schema.optional(Schema.String),
    serviceAccountAuthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookGenericWebServiceServiceAccountAuthConfig,
    ),
    secretVersionsForRequestHeaders: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowCxV3WebhookGenericWebServiceSecretVersionHeaderValue,
      ),
    ),
    allowedCaCerts: Schema.optional(Schema.Array(Schema.String)),
    password: Schema.optional(Schema.String),
    secretVersionForUsernamePassword: Schema.optional(Schema.String),
    webhookType: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3WebhookGenericWebService",
  });

export interface GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig {
  genericWebService?: GoogleCloudDialogflowCxV3WebhookGenericWebService;
  service?: string;
}

export const GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig: Schema.Schema<GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    genericWebService: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookGenericWebService,
    ),
    service: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig",
  });

export interface GoogleCloudDialogflowCxV3Webhook {
  name?: string;
  genericWebService?: GoogleCloudDialogflowCxV3WebhookGenericWebService;
  displayName?: string;
  timeout?: string;
  serviceDirectory?: GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig;
  disabled?: boolean;
}

export const GoogleCloudDialogflowCxV3Webhook: Schema.Schema<GoogleCloudDialogflowCxV3Webhook> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    genericWebService: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookGenericWebService,
    ),
    displayName: Schema.optional(Schema.String),
    timeout: Schema.optional(Schema.String),
    serviceDirectory: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig,
    ),
    disabled: Schema.optional(Schema.Boolean),
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

export interface GoogleCloudDialogflowCxV3Environment {
  versionConfigs?: ReadonlyArray<GoogleCloudDialogflowCxV3EnvironmentVersionConfig>;
  displayName?: string;
  name?: string;
  webhookConfig?: GoogleCloudDialogflowCxV3EnvironmentWebhookConfig;
  description?: string;
  updateTime?: string;
  testCasesConfig?: GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig;
}

export const GoogleCloudDialogflowCxV3Environment: Schema.Schema<GoogleCloudDialogflowCxV3Environment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versionConfigs: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3EnvironmentVersionConfig),
    ),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    webhookConfig: Schema.optional(
      GoogleCloudDialogflowCxV3EnvironmentWebhookConfig,
    ),
    description: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    testCasesConfig: Schema.optional(
      GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig,
    ),
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

export interface GoogleCloudDialogflowV2SpeechWordInfo {
  startOffset?: string;
  word?: string;
  confidence?: number;
  endOffset?: string;
}

export const GoogleCloudDialogflowV2SpeechWordInfo: Schema.Schema<GoogleCloudDialogflowV2SpeechWordInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startOffset: Schema.optional(Schema.String),
    word: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
    endOffset: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SpeechWordInfo" });

export interface GoogleCloudDialogflowV2StreamingRecognitionResult {
  speechEndOffset?: string;
  isFinal?: boolean;
  speechWordInfo?: ReadonlyArray<GoogleCloudDialogflowV2SpeechWordInfo>;
  transcript?: string;
  messageType?:
    | "MESSAGE_TYPE_UNSPECIFIED"
    | "TRANSCRIPT"
    | "END_OF_SINGLE_UTTERANCE"
    | (string & {});
  languageCode?: string;
  confidence?: number;
}

export const GoogleCloudDialogflowV2StreamingRecognitionResult: Schema.Schema<GoogleCloudDialogflowV2StreamingRecognitionResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    speechEndOffset: Schema.optional(Schema.String),
    isFinal: Schema.optional(Schema.Boolean),
    speechWordInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SpeechWordInfo),
    ),
    transcript: Schema.optional(Schema.String),
    messageType: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2StreamingRecognitionResult",
  });

export interface GoogleCloudDialogflowV2ConversationEvent {
  conversation?: string;
  errorStatus?: GoogleRpcStatus;
  type?:
    | "TYPE_UNSPECIFIED"
    | "CONVERSATION_STARTED"
    | "CONVERSATION_FINISHED"
    | "HUMAN_INTERVENTION_NEEDED"
    | "NEW_MESSAGE"
    | "NEW_RECOGNITION_RESULT"
    | "UNRECOVERABLE_ERROR"
    | (string & {});
  newRecognitionResultPayload?: GoogleCloudDialogflowV2StreamingRecognitionResult;
  newMessagePayload?: GoogleCloudDialogflowV2Message;
}

export const GoogleCloudDialogflowV2ConversationEvent: Schema.Schema<GoogleCloudDialogflowV2ConversationEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversation: Schema.optional(Schema.String),
    errorStatus: Schema.optional(GoogleRpcStatus),
    type: Schema.optional(Schema.String),
    newRecognitionResultPayload: Schema.optional(
      GoogleCloudDialogflowV2StreamingRecognitionResult,
    ),
    newMessagePayload: Schema.optional(GoogleCloudDialogflowV2Message),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ConversationEvent" });

export interface GoogleCloudDialogflowV2ConversationGeneratorContext {
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

export const GoogleCloudDialogflowV2ConversationGeneratorContext: Schema.Schema<GoogleCloudDialogflowV2ConversationGeneratorContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generatorType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ConversationGeneratorContext",
  });

export interface GoogleCloudDialogflowV2ConversationContextReferenceContextContent {
  content?: string;
  contentFormat?:
    | "CONTENT_FORMAT_UNSPECIFIED"
    | "JSON"
    | "PLAIN_TEXT"
    | (string & {});
  ingestionTime?: string;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2ConversationContextReferenceContextContent: Schema.Schema<GoogleCloudDialogflowV2ConversationContextReferenceContextContent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
    contentFormat: Schema.optional(Schema.String),
    ingestionTime: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2ConversationContextReferenceContextContent",
  });

export interface GoogleCloudDialogflowV2ConversationContextReference {
  updateMode?:
    | "UPDATE_MODE_UNSPECIFIED"
    | "APPEND"
    | "OVERWRITE"
    | (string & {});
  contextContents?: ReadonlyArray<GoogleCloudDialogflowV2ConversationContextReferenceContextContent>;
  languageCode?: string;
  createTime?: string;
}

export const GoogleCloudDialogflowV2ConversationContextReference: Schema.Schema<GoogleCloudDialogflowV2ConversationContextReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMode: Schema.optional(Schema.String),
    contextContents: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2ConversationContextReferenceContextContent,
      ),
    ),
    languageCode: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ConversationContextReference",
  });

export interface GoogleCloudDialogflowV2ConversationPhoneNumber {
  countryCode?: number;
  phoneNumber?: string;
}

export const GoogleCloudDialogflowV2ConversationPhoneNumber: Schema.Schema<GoogleCloudDialogflowV2ConversationPhoneNumber> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    countryCode: Schema.optional(Schema.Number),
    phoneNumber: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ConversationPhoneNumber" });

export interface GoogleCloudDialogflowV2Conversation {
  startTime?: string;
  initialGeneratorContexts?: Record<
    string,
    GoogleCloudDialogflowV2ConversationGeneratorContext
  >;
  initialConversationProfile?: GoogleCloudDialogflowV2ConversationProfile;
  lifecycleState?:
    | "LIFECYCLE_STATE_UNSPECIFIED"
    | "IN_PROGRESS"
    | "COMPLETED"
    | (string & {});
  endTime?: string;
  conversationProfile?: string;
  conversationStage?:
    | "CONVERSATION_STAGE_UNSPECIFIED"
    | "VIRTUAL_AGENT_STAGE"
    | "HUMAN_ASSIST_STAGE"
    | (string & {});
  telephonyConnectionInfo?: GoogleCloudDialogflowV2ConversationTelephonyConnectionInfo;
  name?: string;
  ingestedContextReferences?: Record<
    string,
    GoogleCloudDialogflowV2ConversationContextReference
  >;
  phoneNumber?: GoogleCloudDialogflowV2ConversationPhoneNumber;
}

export const GoogleCloudDialogflowV2Conversation: Schema.Schema<GoogleCloudDialogflowV2Conversation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    initialGeneratorContexts: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowV2ConversationGeneratorContext,
      ),
    ),
    initialConversationProfile: Schema.optional(
      GoogleCloudDialogflowV2ConversationProfile,
    ),
    lifecycleState: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    conversationProfile: Schema.optional(Schema.String),
    conversationStage: Schema.optional(Schema.String),
    telephonyConnectionInfo: Schema.optional(
      GoogleCloudDialogflowV2ConversationTelephonyConnectionInfo,
    ),
    name: Schema.optional(Schema.String),
    ingestedContextReferences: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowV2ConversationContextReference,
      ),
    ),
    phoneNumber: Schema.optional(
      GoogleCloudDialogflowV2ConversationPhoneNumber,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Conversation" });

export interface GoogleCloudDialogflowV2ListConversationsResponse {
  conversations?: ReadonlyArray<GoogleCloudDialogflowV2Conversation>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListConversationsResponse: Schema.Schema<GoogleCloudDialogflowV2ListConversationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversations: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2Conversation),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ListConversationsResponse",
  });

export interface GoogleCloudDialogflowCxV3ImportIntentsResponseConflictingResources {
  intentDisplayNames?: ReadonlyArray<string>;
  entityDisplayNames?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3ImportIntentsResponseConflictingResources: Schema.Schema<GoogleCloudDialogflowCxV3ImportIntentsResponseConflictingResources> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intentDisplayNames: Schema.optional(Schema.Array(Schema.String)),
    entityDisplayNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3ImportIntentsResponseConflictingResources",
  });

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

export interface GoogleCloudDialogflowV2FulfillmentFeature {
  type?: "TYPE_UNSPECIFIED" | "SMALLTALK" | (string & {});
}

export const GoogleCloudDialogflowV2FulfillmentFeature: Schema.Schema<GoogleCloudDialogflowV2FulfillmentFeature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2FulfillmentFeature" });

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

export interface GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff {
  metadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff: Schema.Schema<GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff",
  });

export interface GoogleCloudDialogflowV2beta1EncryptionSpec {
  name?: string;
  kmsKey?: string;
}

export const GoogleCloudDialogflowV2beta1EncryptionSpec: Schema.Schema<GoogleCloudDialogflowV2beta1EncryptionSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    kmsKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1EncryptionSpec" });

export interface GoogleCloudDialogflowV2beta1InitializeEncryptionSpecRequest {
  encryptionSpec?: GoogleCloudDialogflowV2beta1EncryptionSpec;
}

export const GoogleCloudDialogflowV2beta1InitializeEncryptionSpecRequest: Schema.Schema<GoogleCloudDialogflowV2beta1InitializeEncryptionSpecRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    encryptionSpec: Schema.optional(GoogleCloudDialogflowV2beta1EncryptionSpec),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1InitializeEncryptionSpecRequest",
  });

export interface GoogleCloudDialogflowV2beta1FaqAnswer {
  answer?: string;
  confidence?: number;
  metadata?: Record<string, string>;
  answerRecord?: string;
  question?: string;
  source?: string;
}

export const GoogleCloudDialogflowV2beta1FaqAnswer: Schema.Schema<GoogleCloudDialogflowV2beta1FaqAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answer: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    answerRecord: Schema.optional(Schema.String),
    question: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1FaqAnswer" });

export interface GoogleCloudDialogflowV2ReloadDocumentRequest {
  importGcsCustomMetadata?: boolean;
  smartMessagingPartialUpdate?: boolean;
  contentUri?: string;
}

export const GoogleCloudDialogflowV2ReloadDocumentRequest: Schema.Schema<GoogleCloudDialogflowV2ReloadDocumentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    importGcsCustomMetadata: Schema.optional(Schema.Boolean),
    smartMessagingPartialUpdate: Schema.optional(Schema.Boolean),
    contentUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ReloadDocumentRequest" });

export interface GoogleCloudDialogflowV2IntentTrainingPhrasePart {
  text?: string;
  userDefined?: boolean;
  entityType?: string;
  alias?: string;
}

export const GoogleCloudDialogflowV2IntentTrainingPhrasePart: Schema.Schema<GoogleCloudDialogflowV2IntentTrainingPhrasePart> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    userDefined: Schema.optional(Schema.Boolean),
    entityType: Schema.optional(Schema.String),
    alias: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentTrainingPhrasePart",
  });

export interface GoogleCloudDialogflowV2IntentTrainingPhrase {
  name?: string;
  parts?: ReadonlyArray<GoogleCloudDialogflowV2IntentTrainingPhrasePart>;
  type?: "TYPE_UNSPECIFIED" | "EXAMPLE" | "TEMPLATE" | (string & {});
  timesAddedCount?: number;
}

export const GoogleCloudDialogflowV2IntentTrainingPhrase: Schema.Schema<GoogleCloudDialogflowV2IntentTrainingPhrase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    parts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentTrainingPhrasePart),
    ),
    type: Schema.optional(Schema.String),
    timesAddedCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentTrainingPhrase" });

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
  similarityScore?: number;
  sources?: GoogleCloudDialogflowV2AgentCoachingSuggestionSources;
  suggestionIndex?: number;
}

export const GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion: Schema.Schema<GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answerRecord: Schema.optional(Schema.String),
    similarityScore: Schema.optional(Schema.Number),
    sources: Schema.optional(
      GoogleCloudDialogflowV2AgentCoachingSuggestionSources,
    ),
    suggestionIndex: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion",
  });

export interface GoogleCloudDialogflowV2Participant {
  sipRecordingMediaLabel?: string;
  obfuscatedExternalUserId?: string;
  documentsMetadataFilters?: Record<string, string>;
  name?: string;
  agentDesktopSource?:
    | "AGENT_DESKTOP_SOURCE_UNSPECIFIED"
    | "LIVE_PERSON"
    | "GENESYS_CLOUD"
    | "TWILIO"
    | "SALESFORCE"
    | "OTHER"
    | (string & {});
  role?:
    | "ROLE_UNSPECIFIED"
    | "HUMAN_AGENT"
    | "AUTOMATED_AGENT"
    | "END_USER"
    | (string & {});
}

export const GoogleCloudDialogflowV2Participant: Schema.Schema<GoogleCloudDialogflowV2Participant> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sipRecordingMediaLabel: Schema.optional(Schema.String),
    obfuscatedExternalUserId: Schema.optional(Schema.String),
    documentsMetadataFilters: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    name: Schema.optional(Schema.String),
    agentDesktopSource: Schema.optional(Schema.String),
    role: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Participant" });

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

export interface GoogleCloudDialogflowV2IntentParameter {
  mandatory?: boolean;
  name?: string;
  displayName?: string;
  value?: string;
  prompts?: ReadonlyArray<string>;
  isList?: boolean;
  entityTypeDisplayName?: string;
  defaultValue?: string;
}

export const GoogleCloudDialogflowV2IntentParameter: Schema.Schema<GoogleCloudDialogflowV2IntentParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mandatory: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    prompts: Schema.optional(Schema.Array(Schema.String)),
    isList: Schema.optional(Schema.Boolean),
    entityTypeDisplayName: Schema.optional(Schema.String),
    defaultValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentParameter" });

export interface GoogleCloudDialogflowV2Intent {
  name?: string;
  followupIntentInfo?: ReadonlyArray<GoogleCloudDialogflowV2IntentFollowupIntentInfo>;
  liveAgentHandoff?: boolean;
  resetContexts?: boolean;
  trainingPhrases?: ReadonlyArray<GoogleCloudDialogflowV2IntentTrainingPhrase>;
  isFallback?: boolean;
  rootFollowupIntentName?: string;
  parameters?: ReadonlyArray<GoogleCloudDialogflowV2IntentParameter>;
  displayName?: string;
  mlDisabled?: boolean;
  inputContextNames?: ReadonlyArray<string>;
  parentFollowupIntentName?: string;
  endInteraction?: boolean;
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
  priority?: number;
  events?: ReadonlyArray<string>;
  action?: string;
  webhookState?:
    | "WEBHOOK_STATE_UNSPECIFIED"
    | "WEBHOOK_STATE_ENABLED"
    | "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"
    | (string & {});
  messages?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessage>;
}

export const GoogleCloudDialogflowV2Intent: Schema.Schema<GoogleCloudDialogflowV2Intent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    followupIntentInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentFollowupIntentInfo),
    ),
    liveAgentHandoff: Schema.optional(Schema.Boolean),
    resetContexts: Schema.optional(Schema.Boolean),
    trainingPhrases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentTrainingPhrase),
    ),
    isFallback: Schema.optional(Schema.Boolean),
    rootFollowupIntentName: Schema.optional(Schema.String),
    parameters: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentParameter),
    ),
    displayName: Schema.optional(Schema.String),
    mlDisabled: Schema.optional(Schema.Boolean),
    inputContextNames: Schema.optional(Schema.Array(Schema.String)),
    parentFollowupIntentName: Schema.optional(Schema.String),
    endInteraction: Schema.optional(Schema.Boolean),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2Context),
    ),
    defaultResponsePlatforms: Schema.optional(Schema.Array(Schema.String)),
    priority: Schema.optional(Schema.Number),
    events: Schema.optional(Schema.Array(Schema.String)),
    action: Schema.optional(Schema.String),
    webhookState: Schema.optional(Schema.String),
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessage),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Intent" });

export interface GoogleCloudDialogflowV2IntentBatch {
  intents?: ReadonlyArray<GoogleCloudDialogflowV2Intent>;
}

export const GoogleCloudDialogflowV2IntentBatch: Schema.Schema<GoogleCloudDialogflowV2IntentBatch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intents: Schema.optional(Schema.Array(GoogleCloudDialogflowV2Intent)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentBatch" });

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

export interface GoogleCloudDialogflowV2SummarizationEvaluationMetricsOverallScoresByMetric {
  metric?: string;
}

export const GoogleCloudDialogflowV2SummarizationEvaluationMetricsOverallScoresByMetric: Schema.Schema<GoogleCloudDialogflowV2SummarizationEvaluationMetricsOverallScoresByMetric> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metric: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SummarizationEvaluationMetricsOverallScoresByMetric",
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

export interface GoogleCloudDialogflowV2ArticleAnswer {
  title?: string;
  answerRecord?: string;
  confidence?: number;
  metadata?: Record<string, string>;
  uri?: string;
  snippets?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2ArticleAnswer: Schema.Schema<GoogleCloudDialogflowV2ArticleAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    uri: Schema.optional(Schema.String),
    snippets: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ArticleAnswer" });

export interface GoogleCloudDialogflowV2SuggestArticlesResponse {
  latestMessage?: string;
  contextSize?: number;
  articleAnswers?: ReadonlyArray<GoogleCloudDialogflowV2ArticleAnswer>;
}

export const GoogleCloudDialogflowV2SuggestArticlesResponse: Schema.Schema<GoogleCloudDialogflowV2SuggestArticlesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
    articleAnswers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2ArticleAnswer),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SuggestArticlesResponse" });

export interface GoogleCloudDialogflowV2FreeFormSuggestion {
  response?: string;
}

export const GoogleCloudDialogflowV2FreeFormSuggestion: Schema.Schema<GoogleCloudDialogflowV2FreeFormSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    response: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2FreeFormSuggestion" });

export interface GoogleCloudDialogflowV2SummarySuggestion {
  summarySections?: ReadonlyArray<GoogleCloudDialogflowV2SummarySuggestionSummarySection>;
}

export const GoogleCloudDialogflowV2SummarySuggestion: Schema.Schema<GoogleCloudDialogflowV2SummarySuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    summarySections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SummarySuggestionSummarySection),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SummarySuggestion" });

export interface GoogleCloudDialogflowV2AgentCoachingInstruction {
  systemAction?: string;
  condition?: string;
  duplicateCheckResult?: GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResult;
  displayDetails?: string;
  displayName?: string;
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

export const GoogleCloudDialogflowV2AgentCoachingInstruction: Schema.Schema<GoogleCloudDialogflowV2AgentCoachingInstruction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    systemAction: Schema.optional(Schema.String),
    condition: Schema.optional(Schema.String),
    duplicateCheckResult: Schema.optional(
      GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResult,
    ),
    displayDetails: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    triggeringEvent: Schema.optional(Schema.String),
    agentAction: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2AgentCoachingInstruction",
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

export interface GoogleCloudDialogflowV2AgentCoachingSuggestionAgentActionSuggestion {
  agentAction?: string;
  duplicateCheckResult?: GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResult;
  sources?: GoogleCloudDialogflowV2AgentCoachingSuggestionSources;
}

export const GoogleCloudDialogflowV2AgentCoachingSuggestionAgentActionSuggestion: Schema.Schema<GoogleCloudDialogflowV2AgentCoachingSuggestionAgentActionSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentAction: Schema.optional(Schema.String),
    duplicateCheckResult: Schema.optional(
      GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResult,
    ),
    sources: Schema.optional(
      GoogleCloudDialogflowV2AgentCoachingSuggestionSources,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2AgentCoachingSuggestionAgentActionSuggestion",
  });

export interface GoogleCloudDialogflowV2AgentCoachingSuggestionSampleResponse {
  responseText?: string;
  duplicateCheckResult?: GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResult;
  sources?: GoogleCloudDialogflowV2AgentCoachingSuggestionSources;
}

export const GoogleCloudDialogflowV2AgentCoachingSuggestionSampleResponse: Schema.Schema<GoogleCloudDialogflowV2AgentCoachingSuggestionSampleResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responseText: Schema.optional(Schema.String),
    duplicateCheckResult: Schema.optional(
      GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResult,
    ),
    sources: Schema.optional(
      GoogleCloudDialogflowV2AgentCoachingSuggestionSources,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2AgentCoachingSuggestionSampleResponse",
  });

export interface GoogleCloudDialogflowV2AgentCoachingSuggestion {
  applicableInstructions?: ReadonlyArray<GoogleCloudDialogflowV2AgentCoachingInstruction>;
  agentActionSuggestions?: ReadonlyArray<GoogleCloudDialogflowV2AgentCoachingSuggestionAgentActionSuggestion>;
  sampleResponses?: ReadonlyArray<GoogleCloudDialogflowV2AgentCoachingSuggestionSampleResponse>;
}

export const GoogleCloudDialogflowV2AgentCoachingSuggestion: Schema.Schema<GoogleCloudDialogflowV2AgentCoachingSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicableInstructions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2AgentCoachingInstruction),
    ),
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
  }).annotate({ identifier: "GoogleCloudDialogflowV2AgentCoachingSuggestion" });

export interface GoogleCloudDialogflowV2ToolCall {
  state?:
    | "STATE_UNSPECIFIED"
    | "TRIGGERED"
    | "NEEDS_CONFIRMATION"
    | (string & {});
  cesApp?: string;
  toolDisplayName?: string;
  inputParameters?: Record<string, unknown>;
  cesToolset?: string;
  action?: string;
  answerRecord?: string;
  toolDisplayDetails?: string;
  cesTool?: string;
  tool?: string;
  createTime?: string;
}

export const GoogleCloudDialogflowV2ToolCall: Schema.Schema<GoogleCloudDialogflowV2ToolCall> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    cesApp: Schema.optional(Schema.String),
    toolDisplayName: Schema.optional(Schema.String),
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    cesToolset: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    toolDisplayDetails: Schema.optional(Schema.String),
    cesTool: Schema.optional(Schema.String),
    tool: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolCall" });

export interface GoogleCloudDialogflowV2ToolCallResultError {
  message?: string;
}

export const GoogleCloudDialogflowV2ToolCallResultError: Schema.Schema<GoogleCloudDialogflowV2ToolCallResultError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolCallResultError" });

export interface GoogleCloudDialogflowV2ToolCallResult {
  rawContent?: string;
  cesApp?: string;
  error?: GoogleCloudDialogflowV2ToolCallResultError;
  cesToolset?: string;
  action?: string;
  answerRecord?: string;
  tool?: string;
  content?: string;
  createTime?: string;
  cesTool?: string;
}

export const GoogleCloudDialogflowV2ToolCallResult: Schema.Schema<GoogleCloudDialogflowV2ToolCallResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rawContent: Schema.optional(Schema.String),
    cesApp: Schema.optional(Schema.String),
    error: Schema.optional(GoogleCloudDialogflowV2ToolCallResultError),
    cesToolset: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    tool: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    cesTool: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolCallResult" });

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

export interface GoogleCloudDialogflowV2GeneratorSuggestion {
  freeFormSuggestion?: GoogleCloudDialogflowV2FreeFormSuggestion;
  summarySuggestion?: GoogleCloudDialogflowV2SummarySuggestion;
  agentCoachingSuggestion?: GoogleCloudDialogflowV2AgentCoachingSuggestion;
  toolCallInfo?: ReadonlyArray<GoogleCloudDialogflowV2GeneratorSuggestionToolCallInfo>;
}

export const GoogleCloudDialogflowV2GeneratorSuggestion: Schema.Schema<GoogleCloudDialogflowV2GeneratorSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    freeFormSuggestion: Schema.optional(
      GoogleCloudDialogflowV2FreeFormSuggestion,
    ),
    summarySuggestion: Schema.optional(
      GoogleCloudDialogflowV2SummarySuggestion,
    ),
    agentCoachingSuggestion: Schema.optional(
      GoogleCloudDialogflowV2AgentCoachingSuggestion,
    ),
    toolCallInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2GeneratorSuggestionToolCallInfo),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2GeneratorSuggestion" });

export interface GoogleCloudDialogflowV2GenerateSuggestionsResponseGeneratorSuggestionAnswer {
  generatorSuggestion?: GoogleCloudDialogflowV2GeneratorSuggestion;
  answerRecord?: string;
  sourceGenerator?: string;
}

export const GoogleCloudDialogflowV2GenerateSuggestionsResponseGeneratorSuggestionAnswer: Schema.Schema<GoogleCloudDialogflowV2GenerateSuggestionsResponseGeneratorSuggestionAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generatorSuggestion: Schema.optional(
      GoogleCloudDialogflowV2GeneratorSuggestion,
    ),
    answerRecord: Schema.optional(Schema.String),
    sourceGenerator: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior {
  endUserMetadataIncluded?: boolean;
  returnQueryOnly?: boolean;
  disableSyncDelivery?: boolean;
  answerGenerationRewriterOn?: boolean;
  previousQueriesIncluded?: boolean;
  conversationTranscriptHasMixedLanguages?: boolean;
  primaryQueryRedactedAndReplaced?: boolean;
  invalidItemsQuerySuggestionSkipped?: boolean;
  useCustomSafetyFilterLevel?: boolean;
  queryGenerationAgentLanguageMismatch?: boolean;
  thirdPartyConnectorAllowed?: boolean;
  useTranslatedMessage?: boolean;
  appendedSearchContextCount?: number;
  usePubsubDelivery?: boolean;
  multipleQueriesGenerated?: boolean;
  queryContainedSearchContext?: boolean;
  queryGenerationEndUserLanguageMismatch?: boolean;
}

export const GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior: Schema.Schema<GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endUserMetadataIncluded: Schema.optional(Schema.Boolean),
    returnQueryOnly: Schema.optional(Schema.Boolean),
    disableSyncDelivery: Schema.optional(Schema.Boolean),
    answerGenerationRewriterOn: Schema.optional(Schema.Boolean),
    previousQueriesIncluded: Schema.optional(Schema.Boolean),
    conversationTranscriptHasMixedLanguages: Schema.optional(Schema.Boolean),
    primaryQueryRedactedAndReplaced: Schema.optional(Schema.Boolean),
    invalidItemsQuerySuggestionSkipped: Schema.optional(Schema.Boolean),
    useCustomSafetyFilterLevel: Schema.optional(Schema.Boolean),
    queryGenerationAgentLanguageMismatch: Schema.optional(Schema.Boolean),
    thirdPartyConnectorAllowed: Schema.optional(Schema.Boolean),
    useTranslatedMessage: Schema.optional(Schema.Boolean),
    appendedSearchContextCount: Schema.optional(Schema.Number),
    usePubsubDelivery: Schema.optional(Schema.Boolean),
    multipleQueriesGenerated: Schema.optional(Schema.Boolean),
    queryContainedSearchContext: Schema.optional(Schema.Boolean),
    queryGenerationEndUserLanguageMismatch: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior",
  });

export interface GoogleCloudDialogflowV2IngestedContextReferenceDebugInfoIngestedParameterDebugInfo {
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

export const GoogleCloudDialogflowV2IngestedContextReferenceDebugInfoIngestedParameterDebugInfo: Schema.Schema<GoogleCloudDialogflowV2IngestedContextReferenceDebugInfoIngestedParameterDebugInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ingestionStatus: Schema.optional(Schema.String),
    parameter: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2IngestedContextReferenceDebugInfoIngestedParameterDebugInfo",
  });

export interface GoogleCloudDialogflowV2IngestedContextReferenceDebugInfo {
  contextReferenceRetrieved?: boolean;
  projectNotAllowlisted?: boolean;
  ingestedParametersDebugInfo?: ReadonlyArray<GoogleCloudDialogflowV2IngestedContextReferenceDebugInfoIngestedParameterDebugInfo>;
}

export const GoogleCloudDialogflowV2IngestedContextReferenceDebugInfo: Schema.Schema<GoogleCloudDialogflowV2IngestedContextReferenceDebugInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contextReferenceRetrieved: Schema.optional(Schema.Boolean),
    projectNotAllowlisted: Schema.optional(Schema.Boolean),
    ingestedParametersDebugInfo: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2IngestedContextReferenceDebugInfoIngestedParameterDebugInfo,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IngestedContextReferenceDebugInfo",
  });

export interface GoogleCloudDialogflowV2ServiceLatencyInternalServiceLatency {
  step?: string;
  completeTime?: string;
  startTime?: string;
  latencyMs?: number;
}

export const GoogleCloudDialogflowV2ServiceLatencyInternalServiceLatency: Schema.Schema<GoogleCloudDialogflowV2ServiceLatencyInternalServiceLatency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    step: Schema.optional(Schema.String),
    completeTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    latencyMs: Schema.optional(Schema.Number),
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

export interface GoogleCloudDialogflowV2KnowledgeAssistDebugInfo {
  knowledgeAssistBehavior?: GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior;
  ingestedContextReferenceDebugInfo?: GoogleCloudDialogflowV2IngestedContextReferenceDebugInfo;
  queryCategorizationFailureReason?:
    | "QUERY_CATEGORIZATION_FAILURE_REASON_UNSPECIFIED"
    | "QUERY_CATEGORIZATION_INVALID_CONFIG"
    | "QUERY_CATEGORIZATION_RESULT_NOT_FOUND"
    | "QUERY_CATEGORIZATION_FAILED"
    | (string & {});
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
  serviceLatency?: GoogleCloudDialogflowV2ServiceLatency;
}

export const GoogleCloudDialogflowV2KnowledgeAssistDebugInfo: Schema.Schema<GoogleCloudDialogflowV2KnowledgeAssistDebugInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    knowledgeAssistBehavior: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior,
    ),
    ingestedContextReferenceDebugInfo: Schema.optional(
      GoogleCloudDialogflowV2IngestedContextReferenceDebugInfo,
    ),
    queryCategorizationFailureReason: Schema.optional(Schema.String),
    queryGenerationFailureReason: Schema.optional(Schema.String),
    datastoreResponseReason: Schema.optional(Schema.String),
    serviceLatency: Schema.optional(GoogleCloudDialogflowV2ServiceLatency),
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

export interface GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet {
  text?: string;
  uri?: string;
  title?: string;
  metadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet: Schema.Schema<GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet",
  });

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

export interface GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswer {
  playbookSource?: GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource;
  eventSource?: GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerEventSource;
  answerText?: string;
  faqSource?: GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerFaqSource;
  generativeSource?: GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource;
}

export const GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswer: Schema.Schema<GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    playbookSource: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource,
    ),
    eventSource: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerEventSource,
    ),
    answerText: Schema.optional(Schema.String),
    faqSource: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerFaqSource,
    ),
    generativeSource: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswer",
  });

export interface GoogleCloudDialogflowV2KnowledgeAssistAnswer {
  knowledgeAssistDebugInfo?: GoogleCloudDialogflowV2KnowledgeAssistDebugInfo;
  suggestedQuery?: GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery;
  suggestedQueryAnswer?: GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswer;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2KnowledgeAssistAnswer: Schema.Schema<GoogleCloudDialogflowV2KnowledgeAssistAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    knowledgeAssistDebugInfo: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistDebugInfo,
    ),
    suggestedQuery: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery,
    ),
    suggestedQueryAnswer: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswer,
    ),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2KnowledgeAssistAnswer" });

export interface GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse {
  contextSize?: number;
  knowledgeAssistAnswer?: GoogleCloudDialogflowV2KnowledgeAssistAnswer;
  latestMessage?: string;
}

export const GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse: Schema.Schema<GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contextSize: Schema.optional(Schema.Number),
    knowledgeAssistAnswer: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswer,
    ),
    latestMessage: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse",
  });

export interface GoogleCloudDialogflowV2SuggestionResult {
  suggestArticlesResponse?: GoogleCloudDialogflowV2SuggestArticlesResponse;
  generateSuggestionsResponse?: GoogleCloudDialogflowV2GenerateSuggestionsResponse;
  suggestSmartRepliesResponse?: GoogleCloudDialogflowV2SuggestSmartRepliesResponse;
  suggestFaqAnswersResponse?: GoogleCloudDialogflowV2SuggestFaqAnswersResponse;
  error?: GoogleRpcStatus;
  suggestKnowledgeAssistResponse?: GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse;
}

export const GoogleCloudDialogflowV2SuggestionResult: Schema.Schema<GoogleCloudDialogflowV2SuggestionResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suggestArticlesResponse: Schema.optional(
      GoogleCloudDialogflowV2SuggestArticlesResponse,
    ),
    generateSuggestionsResponse: Schema.optional(
      GoogleCloudDialogflowV2GenerateSuggestionsResponse,
    ),
    suggestSmartRepliesResponse: Schema.optional(
      GoogleCloudDialogflowV2SuggestSmartRepliesResponse,
    ),
    suggestFaqAnswersResponse: Schema.optional(
      GoogleCloudDialogflowV2SuggestFaqAnswersResponse,
    ),
    error: Schema.optional(GoogleRpcStatus),
    suggestKnowledgeAssistResponse: Schema.optional(
      GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SuggestionResult" });

export interface GoogleCloudDialogflowV2QueryResult {
  allRequiredParamsPresent?: boolean;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2Context>;
  fulfillmentMessages?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessage>;
  intentDetectionConfidence?: number;
  parameters?: Record<string, unknown>;
  fulfillmentText?: string;
  webhookSource?: string;
  speechRecognitionConfidence?: number;
  cancelsSlotFilling?: boolean;
  action?: string;
  queryText?: string;
  sentimentAnalysisResult?: GoogleCloudDialogflowV2SentimentAnalysisResult;
  languageCode?: string;
  diagnosticInfo?: Record<string, unknown>;
  webhookPayload?: Record<string, unknown>;
  intent?: GoogleCloudDialogflowV2Intent;
}

export const GoogleCloudDialogflowV2QueryResult: Schema.Schema<GoogleCloudDialogflowV2QueryResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allRequiredParamsPresent: Schema.optional(Schema.Boolean),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2Context),
    ),
    fulfillmentMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessage),
    ),
    intentDetectionConfidence: Schema.optional(Schema.Number),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    fulfillmentText: Schema.optional(Schema.String),
    webhookSource: Schema.optional(Schema.String),
    speechRecognitionConfidence: Schema.optional(Schema.Number),
    cancelsSlotFilling: Schema.optional(Schema.Boolean),
    action: Schema.optional(Schema.String),
    queryText: Schema.optional(Schema.String),
    sentimentAnalysisResult: Schema.optional(
      GoogleCloudDialogflowV2SentimentAnalysisResult,
    ),
    languageCode: Schema.optional(Schema.String),
    diagnosticInfo: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    webhookPayload: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    intent: Schema.optional(GoogleCloudDialogflowV2Intent),
  }).annotate({ identifier: "GoogleCloudDialogflowV2QueryResult" });

export interface GoogleCloudDialogflowV2DetectIntentResponse {
  outputAudioConfig?: GoogleCloudDialogflowV2OutputAudioConfig;
  outputAudio?: string;
  queryResult?: GoogleCloudDialogflowV2QueryResult;
  webhookStatus?: GoogleRpcStatus;
  responseId?: string;
}

export const GoogleCloudDialogflowV2DetectIntentResponse: Schema.Schema<GoogleCloudDialogflowV2DetectIntentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputAudioConfig: Schema.optional(
      GoogleCloudDialogflowV2OutputAudioConfig,
    ),
    outputAudio: Schema.optional(Schema.String),
    queryResult: Schema.optional(GoogleCloudDialogflowV2QueryResult),
    webhookStatus: Schema.optional(GoogleRpcStatus),
    responseId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2DetectIntentResponse" });

export interface GoogleCloudDialogflowV2AutomatedAgentReply {
  cxCurrentPage?: string;
  detectIntentResponse?: GoogleCloudDialogflowV2DetectIntentResponse;
  allowCancellation?: boolean;
  automatedAgentReplyType?:
    | "AUTOMATED_AGENT_REPLY_TYPE_UNSPECIFIED"
    | "PARTIAL"
    | "FINAL"
    | (string & {});
}

export const GoogleCloudDialogflowV2AutomatedAgentReply: Schema.Schema<GoogleCloudDialogflowV2AutomatedAgentReply> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cxCurrentPage: Schema.optional(Schema.String),
    detectIntentResponse: Schema.optional(
      GoogleCloudDialogflowV2DetectIntentResponse,
    ),
    allowCancellation: Schema.optional(Schema.Boolean),
    automatedAgentReplyType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2AutomatedAgentReply" });

export interface GoogleCloudDialogflowV2DtmfParameters {
  acceptsDtmfInput?: boolean;
}

export const GoogleCloudDialogflowV2DtmfParameters: Schema.Schema<GoogleCloudDialogflowV2DtmfParameters> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acceptsDtmfInput: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2DtmfParameters" });

export interface GoogleCloudDialogflowV2AnalyzeContentResponse {
  replyAudio?: GoogleCloudDialogflowV2OutputAudio;
  replyText?: string;
  humanAgentSuggestionResults?: ReadonlyArray<GoogleCloudDialogflowV2SuggestionResult>;
  automatedAgentReply?: GoogleCloudDialogflowV2AutomatedAgentReply;
  dtmfParameters?: GoogleCloudDialogflowV2DtmfParameters;
  message?: GoogleCloudDialogflowV2Message;
  endUserSuggestionResults?: ReadonlyArray<GoogleCloudDialogflowV2SuggestionResult>;
}

export const GoogleCloudDialogflowV2AnalyzeContentResponse: Schema.Schema<GoogleCloudDialogflowV2AnalyzeContentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    replyAudio: Schema.optional(GoogleCloudDialogflowV2OutputAudio),
    replyText: Schema.optional(Schema.String),
    humanAgentSuggestionResults: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SuggestionResult),
    ),
    automatedAgentReply: Schema.optional(
      GoogleCloudDialogflowV2AutomatedAgentReply,
    ),
    dtmfParameters: Schema.optional(GoogleCloudDialogflowV2DtmfParameters),
    message: Schema.optional(GoogleCloudDialogflowV2Message),
    endUserSuggestionResults: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SuggestionResult),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2AnalyzeContentResponse" });

export interface GoogleCloudDialogflowV2GeneratorEvaluationConfigDatasetInputDataConfig {
  dataset?: string;
}

export const GoogleCloudDialogflowV2GeneratorEvaluationConfigDatasetInputDataConfig: Schema.Schema<GoogleCloudDialogflowV2GeneratorEvaluationConfigDatasetInputDataConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataset: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2GeneratorEvaluationConfigDatasetInputDataConfig",
  });

export interface GoogleCloudDialogflowV2GeneratorEvaluationConfigAgentAssistInputDataConfig {
  endTime?: string;
  startTime?: string;
}

export const GoogleCloudDialogflowV2GeneratorEvaluationConfigAgentAssistInputDataConfig: Schema.Schema<GoogleCloudDialogflowV2GeneratorEvaluationConfigAgentAssistInputDataConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2GeneratorEvaluationConfigAgentAssistInputDataConfig",
  });

export interface GoogleCloudDialogflowV2GeneratorEvaluationConfigInputDataConfig {
  datasetInputDataConfig?: GoogleCloudDialogflowV2GeneratorEvaluationConfigDatasetInputDataConfig;
  endTime?: string;
  sampleSize?: number;
  agentAssistInputDataConfig?: GoogleCloudDialogflowV2GeneratorEvaluationConfigAgentAssistInputDataConfig;
  inputDataSourceType?:
    | "INPUT_DATA_SOURCE_TYPE_UNSPECIFIED"
    | "AGENT_ASSIST_CONVERSATIONS"
    | "INSIGHTS_CONVERSATIONS"
    | (string & {});
  startTime?: string;
  isSummaryGenerationAllowed?: boolean;
  summaryGenerationOption?:
    | "SUMMARY_GENERATION_OPTION_UNSPECIFIED"
    | "ALWAYS_GENERATE"
    | "GENERATE_IF_MISSING"
    | "DO_NOT_GENERATE"
    | (string & {});
}

export const GoogleCloudDialogflowV2GeneratorEvaluationConfigInputDataConfig: Schema.Schema<GoogleCloudDialogflowV2GeneratorEvaluationConfigInputDataConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datasetInputDataConfig: Schema.optional(
      GoogleCloudDialogflowV2GeneratorEvaluationConfigDatasetInputDataConfig,
    ),
    endTime: Schema.optional(Schema.String),
    sampleSize: Schema.optional(Schema.Number),
    agentAssistInputDataConfig: Schema.optional(
      GoogleCloudDialogflowV2GeneratorEvaluationConfigAgentAssistInputDataConfig,
    ),
    inputDataSourceType: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    isSummaryGenerationAllowed: Schema.optional(Schema.Boolean),
    summaryGenerationOption: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2GeneratorEvaluationConfigInputDataConfig",
  });

export interface GoogleCloudDialogflowV2GeneratorEvaluationConfigSummarizationConfig {
  enableAccuracyEvaluation?: boolean;
  evaluatorVersion?: string;
  completenessEvaluationVersion?: string;
  accuracyEvaluationVersion?: string;
  enableCompletenessEvaluation?: boolean;
}

export const GoogleCloudDialogflowV2GeneratorEvaluationConfigSummarizationConfig: Schema.Schema<GoogleCloudDialogflowV2GeneratorEvaluationConfigSummarizationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableAccuracyEvaluation: Schema.optional(Schema.Boolean),
    evaluatorVersion: Schema.optional(Schema.String),
    completenessEvaluationVersion: Schema.optional(Schema.String),
    accuracyEvaluationVersion: Schema.optional(Schema.String),
    enableCompletenessEvaluation: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2GeneratorEvaluationConfigSummarizationConfig",
  });

export interface GoogleCloudDialogflowV2GeneratorEvaluationConfig {
  inputDataConfig?: GoogleCloudDialogflowV2GeneratorEvaluationConfigInputDataConfig;
  outputGcsBucketPath?: string;
  summarizationConfig?: GoogleCloudDialogflowV2GeneratorEvaluationConfigSummarizationConfig;
}

export const GoogleCloudDialogflowV2GeneratorEvaluationConfig: Schema.Schema<GoogleCloudDialogflowV2GeneratorEvaluationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputDataConfig: Schema.optional(
      GoogleCloudDialogflowV2GeneratorEvaluationConfigInputDataConfig,
    ),
    outputGcsBucketPath: Schema.optional(Schema.String),
    summarizationConfig: Schema.optional(
      GoogleCloudDialogflowV2GeneratorEvaluationConfigSummarizationConfig,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2GeneratorEvaluationConfig",
  });

export interface GoogleCloudDialogflowV2ToolConnectorToolAction {
  connectionActionId?: string;
  inputFields?: ReadonlyArray<string>;
  entityOperation?: GoogleCloudDialogflowV2ToolConnectorToolActionEntityOperation;
  outputFields?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2ToolConnectorToolAction: Schema.Schema<GoogleCloudDialogflowV2ToolConnectorToolAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connectionActionId: Schema.optional(Schema.String),
    inputFields: Schema.optional(Schema.Array(Schema.String)),
    entityOperation: Schema.optional(
      GoogleCloudDialogflowV2ToolConnectorToolActionEntityOperation,
    ),
    outputFields: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolConnectorToolAction" });

export interface GoogleCloudDialogflowV2AgentAssistantFeedbackKnowledgeSearchFeedback {
  answerCopied?: boolean;
  clickedUris?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2AgentAssistantFeedbackKnowledgeSearchFeedback: Schema.Schema<GoogleCloudDialogflowV2AgentAssistantFeedbackKnowledgeSearchFeedback> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answerCopied: Schema.optional(Schema.Boolean),
    clickedUris: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2AgentAssistantFeedbackKnowledgeSearchFeedback",
  });

export interface GoogleCloudDialogflowV2AgentAssistantFeedbackKnowledgeAssistFeedback {
  answerCopied?: boolean;
  clickedUris?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2AgentAssistantFeedbackKnowledgeAssistFeedback: Schema.Schema<GoogleCloudDialogflowV2AgentAssistantFeedbackKnowledgeAssistFeedback> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answerCopied: Schema.optional(Schema.Boolean),
    clickedUris: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2AgentAssistantFeedbackKnowledgeAssistFeedback",
  });

export interface GoogleCloudDialogflowV2AgentAssistantFeedback {
  knowledgeSearchFeedback?: GoogleCloudDialogflowV2AgentAssistantFeedbackKnowledgeSearchFeedback;
  answerRelevance?:
    | "ANSWER_RELEVANCE_UNSPECIFIED"
    | "IRRELEVANT"
    | "RELEVANT"
    | (string & {});
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
  knowledgeAssistFeedback?: GoogleCloudDialogflowV2AgentAssistantFeedbackKnowledgeAssistFeedback;
  summarizationFeedback?: GoogleCloudDialogflowV2AgentAssistantFeedbackSummarizationFeedback;
}

export const GoogleCloudDialogflowV2AgentAssistantFeedback: Schema.Schema<GoogleCloudDialogflowV2AgentAssistantFeedback> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    knowledgeSearchFeedback: Schema.optional(
      GoogleCloudDialogflowV2AgentAssistantFeedbackKnowledgeSearchFeedback,
    ),
    answerRelevance: Schema.optional(Schema.String),
    documentEfficiency: Schema.optional(Schema.String),
    documentCorrectness: Schema.optional(Schema.String),
    knowledgeAssistFeedback: Schema.optional(
      GoogleCloudDialogflowV2AgentAssistantFeedbackKnowledgeAssistFeedback,
    ),
    summarizationFeedback: Schema.optional(
      GoogleCloudDialogflowV2AgentAssistantFeedbackSummarizationFeedback,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2AgentAssistantFeedback" });

export interface GoogleCloudDialogflowCxV3ContinuousTestResult {
  name?: string;
  result?:
    | "AGGREGATED_TEST_RESULT_UNSPECIFIED"
    | "PASSED"
    | "FAILED"
    | (string & {});
  testCaseResults?: ReadonlyArray<string>;
  runTime?: string;
}

export const GoogleCloudDialogflowCxV3ContinuousTestResult: Schema.Schema<GoogleCloudDialogflowCxV3ContinuousTestResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    result: Schema.optional(Schema.String),
    testCaseResults: Schema.optional(Schema.Array(Schema.String)),
    runTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ContinuousTestResult" });

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

export interface GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpec {
  condition?: string;
  boost?: number;
  boostControlSpec?: GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpec;
}

export const GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpec: Schema.Schema<GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    condition: Schema.optional(Schema.String),
    boost: Schema.optional(Schema.Number),
    boostControlSpec: Schema.optional(
      GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpec,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpec",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportEntityTypesMetadata {}

export const GoogleCloudDialogflowCxV3beta1ExportEntityTypesMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportEntityTypesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportEntityTypesMetadata",
  });

export interface GoogleCloudDialogflowV2beta1IntentSuggestion {
  intentV2?: string;
  description?: string;
  displayName?: string;
}

export const GoogleCloudDialogflowV2beta1IntentSuggestion: Schema.Schema<GoogleCloudDialogflowV2beta1IntentSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intentV2: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentSuggestion" });

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

export interface GoogleCloudDialogflowCxV3FulfillmentGeneratorSettings {
  generator?: string;
  inputParameters?: Record<string, string>;
  outputParameter?: string;
}

export const GoogleCloudDialogflowCxV3FulfillmentGeneratorSettings: Schema.Schema<GoogleCloudDialogflowCxV3FulfillmentGeneratorSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generator: Schema.optional(Schema.String),
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    outputParameter: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3FulfillmentGeneratorSettings",
  });

export interface GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings {
  useTimeoutBasedEndpointing?: boolean;
  endpointerSensitivity?: number;
  models?: Record<string, string>;
  noSpeechTimeout?: string;
}

export const GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings: Schema.Schema<GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    useTimeoutBasedEndpointing: Schema.optional(Schema.Boolean),
    endpointerSensitivity: Schema.optional(Schema.Number),
    models: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    noSpeechTimeout: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings",
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
  endpointingTimeoutDuration?: string;
  finishDigit?: string;
  maxDigits?: number;
  interdigitTimeoutDuration?: string;
}

export const GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings: Schema.Schema<GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    endpointingTimeoutDuration: Schema.optional(Schema.String),
    finishDigit: Schema.optional(Schema.String),
    maxDigits: Schema.optional(Schema.Number),
    interdigitTimeoutDuration: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings",
  });

export interface GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings {
  enableInteractionLogging?: boolean;
  enableStackdriverLogging?: boolean;
  enableConsentBasedRedaction?: boolean;
}

export const GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings: Schema.Schema<GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableInteractionLogging: Schema.optional(Schema.Boolean),
    enableStackdriverLogging: Schema.optional(Schema.Boolean),
    enableConsentBasedRedaction: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings",
  });

export interface GoogleCloudDialogflowCxV3AdvancedSettings {
  speechSettings?: GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings;
  audioExportGcsDestination?: GoogleCloudDialogflowCxV3GcsDestination;
  dtmfSettings?: GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings;
  loggingSettings?: GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings;
}

export const GoogleCloudDialogflowCxV3AdvancedSettings: Schema.Schema<GoogleCloudDialogflowCxV3AdvancedSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    speechSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings,
    ),
    audioExportGcsDestination: Schema.optional(
      GoogleCloudDialogflowCxV3GcsDestination,
    ),
    dtmfSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings,
    ),
    loggingSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3AdvancedSettings" });

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

export interface GoogleCloudDialogflowCxV3Fulfillment {
  messages?: ReadonlyArray<GoogleCloudDialogflowCxV3ResponseMessage>;
  returnPartialResponses?: boolean;
  enableGenerativeFallback?: boolean;
  conditionalCases?: ReadonlyArray<GoogleCloudDialogflowCxV3FulfillmentConditionalCases>;
  generators?: ReadonlyArray<GoogleCloudDialogflowCxV3FulfillmentGeneratorSettings>;
  advancedSettings?: GoogleCloudDialogflowCxV3AdvancedSettings;
  tag?: string;
  webhook?: string;
  setParameterActions?: ReadonlyArray<GoogleCloudDialogflowCxV3FulfillmentSetParameterAction>;
}

export const GoogleCloudDialogflowCxV3Fulfillment: Schema.Schema<GoogleCloudDialogflowCxV3Fulfillment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ResponseMessage),
    ),
    returnPartialResponses: Schema.optional(Schema.Boolean),
    enableGenerativeFallback: Schema.optional(Schema.Boolean),
    conditionalCases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3FulfillmentConditionalCases),
    ),
    generators: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3FulfillmentGeneratorSettings),
    ),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettings,
    ),
    tag: Schema.optional(Schema.String),
    webhook: Schema.optional(Schema.String),
    setParameterActions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3FulfillmentSetParameterAction),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Fulfillment" });

export interface GoogleCloudDialogflowV2ConnectionErrorDetails {
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

export const GoogleCloudDialogflowV2ConnectionErrorDetails: Schema.Schema<GoogleCloudDialogflowV2ConnectionErrorDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificateState: Schema.optional(Schema.String),
    errorMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ConnectionErrorDetails" });

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

export interface GoogleLongrunningOperation {
  metadata?: Record<string, unknown>;
  done?: boolean;
  response?: Record<string, unknown>;
  name?: string;
  error?: GoogleRpcStatus;
}

export const GoogleLongrunningOperation: Schema.Schema<GoogleLongrunningOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    error: Schema.optional(GoogleRpcStatus),
  }).annotate({ identifier: "GoogleLongrunningOperation" });

export interface GoogleCloudDialogflowV2IngestContextReferencesRequest {
  contextReferences?: Record<
    string,
    GoogleCloudDialogflowV2ConversationContextReference
  >;
}

export const GoogleCloudDialogflowV2IngestContextReferencesRequest: Schema.Schema<GoogleCloudDialogflowV2IngestContextReferencesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contextReferences: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowV2ConversationContextReference,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IngestContextReferencesRequest",
  });

export interface GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse {
  contextSize?: number;
  smartReplyAnswers?: ReadonlyArray<GoogleCloudDialogflowV2beta1SmartReplyAnswer>;
  latestMessage?: string;
}

export const GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contextSize: Schema.optional(Schema.Number),
    smartReplyAnswers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SmartReplyAnswer),
    ),
    latestMessage: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse",
  });

export interface GoogleCloudDialogflowV2beta1Sentiment {
  score?: number;
  magnitude?: number;
}

export const GoogleCloudDialogflowV2beta1Sentiment: Schema.Schema<GoogleCloudDialogflowV2beta1Sentiment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.Number),
    magnitude: Schema.optional(Schema.Number),
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

export interface GoogleCloudDialogflowV2beta1QueryResult {
  languageCode?: string;
  queryText?: string;
  sentimentAnalysisResult?: GoogleCloudDialogflowV2beta1SentimentAnalysisResult;
  action?: string;
  intent?: GoogleCloudDialogflowV2beta1Intent;
  diagnosticInfo?: Record<string, unknown>;
  webhookPayload?: Record<string, unknown>;
  allRequiredParamsPresent?: boolean;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2beta1Context>;
  fulfillmentText?: string;
  webhookSource?: string;
  speechRecognitionConfidence?: number;
  cancelsSlotFilling?: boolean;
  knowledgeAnswers?: GoogleCloudDialogflowV2beta1KnowledgeAnswers;
  intentDetectionConfidence?: number;
  parameters?: Record<string, unknown>;
  fulfillmentMessages?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessage>;
}

export const GoogleCloudDialogflowV2beta1QueryResult: Schema.Schema<GoogleCloudDialogflowV2beta1QueryResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    queryText: Schema.optional(Schema.String),
    sentimentAnalysisResult: Schema.optional(
      GoogleCloudDialogflowV2beta1SentimentAnalysisResult,
    ),
    action: Schema.optional(Schema.String),
    intent: Schema.optional(GoogleCloudDialogflowV2beta1Intent),
    diagnosticInfo: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    webhookPayload: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    allRequiredParamsPresent: Schema.optional(Schema.Boolean),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1Context),
    ),
    fulfillmentText: Schema.optional(Schema.String),
    webhookSource: Schema.optional(Schema.String),
    speechRecognitionConfidence: Schema.optional(Schema.Number),
    cancelsSlotFilling: Schema.optional(Schema.Boolean),
    knowledgeAnswers: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAnswers,
    ),
    intentDetectionConfidence: Schema.optional(Schema.Number),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    fulfillmentMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessage),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1QueryResult" });

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

export interface GoogleCloudDialogflowV2beta1ToolCall {
  toolDisplayDetails?: string;
  action?: string;
  answerRecord?: string;
  cesToolset?: string;
  tool?: string;
  createTime?: string;
  cesTool?: string;
  toolDisplayName?: string;
  cesApp?: string;
  state?:
    | "STATE_UNSPECIFIED"
    | "TRIGGERED"
    | "NEEDS_CONFIRMATION"
    | (string & {});
  inputParameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2beta1ToolCall: Schema.Schema<GoogleCloudDialogflowV2beta1ToolCall> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolDisplayDetails: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    cesToolset: Schema.optional(Schema.String),
    tool: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    cesTool: Schema.optional(Schema.String),
    toolDisplayName: Schema.optional(Schema.String),
    cesApp: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
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
  cesTool?: string;
  tool?: string;
  content?: string;
  createTime?: string;
  action?: string;
  answerRecord?: string;
  cesToolset?: string;
  error?: GoogleCloudDialogflowV2beta1ToolCallResultError;
  cesApp?: string;
  rawContent?: string;
}

export const GoogleCloudDialogflowV2beta1ToolCallResult: Schema.Schema<GoogleCloudDialogflowV2beta1ToolCallResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cesTool: Schema.optional(Schema.String),
    tool: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    cesToolset: Schema.optional(Schema.String),
    error: Schema.optional(GoogleCloudDialogflowV2beta1ToolCallResultError),
    cesApp: Schema.optional(Schema.String),
    rawContent: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion {
  similarityScore?: number;
  answerRecord?: string;
  suggestionIndex?: number;
}

export const GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion: Schema.Schema<GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  agentAction?: string;
  displayDetails?: string;
  displayName?: string;
  triggeringEvent?:
    | "TRIGGER_EVENT_UNSPECIFIED"
    | "END_OF_UTTERANCE"
    | "MANUAL_CALL"
    | "CUSTOMER_MESSAGE"
    | "AGENT_MESSAGE"
    | "TOOL_CALL_COMPLETION"
    | (string & {});
  condition?: string;
  duplicateCheckResult?: GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResult;
  systemAction?: string;
}

export const GoogleCloudDialogflowV2beta1AgentCoachingInstruction: Schema.Schema<GoogleCloudDialogflowV2beta1AgentCoachingInstruction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentAction: Schema.optional(Schema.String),
    displayDetails: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    triggeringEvent: Schema.optional(Schema.String),
    condition: Schema.optional(Schema.String),
    duplicateCheckResult: Schema.optional(
      GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResult,
    ),
    systemAction: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1AgentCoachingInstruction",
  });

export interface GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSampleResponse {
  responseText?: string;
  duplicateCheckResult?: GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResult;
  sources?: GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSources;
}

export const GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSampleResponse: Schema.Schema<GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSampleResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responseText: Schema.optional(Schema.String),
    duplicateCheckResult: Schema.optional(
      GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResult,
    ),
    sources: Schema.optional(
      GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSources,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSampleResponse",
  });

export interface GoogleCloudDialogflowV2beta1AgentCoachingSuggestion {
  applicableInstructions?: ReadonlyArray<GoogleCloudDialogflowV2beta1AgentCoachingInstruction>;
  agentActionSuggestions?: ReadonlyArray<GoogleCloudDialogflowV2beta1AgentCoachingSuggestionAgentActionSuggestion>;
  sampleResponses?: ReadonlyArray<GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSampleResponse>;
}

export const GoogleCloudDialogflowV2beta1AgentCoachingSuggestion: Schema.Schema<GoogleCloudDialogflowV2beta1AgentCoachingSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicableInstructions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1AgentCoachingInstruction),
    ),
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
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1AgentCoachingSuggestion",
  });

export interface GoogleCloudDialogflowV2beta1FreeFormSuggestion {
  response?: string;
}

export const GoogleCloudDialogflowV2beta1FreeFormSuggestion: Schema.Schema<GoogleCloudDialogflowV2beta1FreeFormSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    response: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1FreeFormSuggestion" });

export interface GoogleCloudDialogflowV2beta1GeneratorSuggestion {
  toolCallInfo?: ReadonlyArray<GoogleCloudDialogflowV2beta1GeneratorSuggestionToolCallInfo>;
  summarySuggestion?: GoogleCloudDialogflowV2beta1SummarySuggestion;
  agentCoachingSuggestion?: GoogleCloudDialogflowV2beta1AgentCoachingSuggestion;
  freeFormSuggestion?: GoogleCloudDialogflowV2beta1FreeFormSuggestion;
}

export const GoogleCloudDialogflowV2beta1GeneratorSuggestion: Schema.Schema<GoogleCloudDialogflowV2beta1GeneratorSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolCallInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1GeneratorSuggestionToolCallInfo),
    ),
    summarySuggestion: Schema.optional(
      GoogleCloudDialogflowV2beta1SummarySuggestion,
    ),
    agentCoachingSuggestion: Schema.optional(
      GoogleCloudDialogflowV2beta1AgentCoachingSuggestion,
    ),
    freeFormSuggestion: Schema.optional(
      GoogleCloudDialogflowV2beta1FreeFormSuggestion,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1GeneratorSuggestion",
  });

export interface GoogleCloudDialogflowV2beta1GenerateSuggestionsResponseGeneratorSuggestionAnswer {
  sourceGenerator?: string;
  generatorSuggestion?: GoogleCloudDialogflowV2beta1GeneratorSuggestion;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2beta1GenerateSuggestionsResponseGeneratorSuggestionAnswer: Schema.Schema<GoogleCloudDialogflowV2beta1GenerateSuggestionsResponseGeneratorSuggestionAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceGenerator: Schema.optional(Schema.String),
    generatorSuggestion: Schema.optional(
      GoogleCloudDialogflowV2beta1GeneratorSuggestion,
    ),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1GenerateSuggestionsResponseGeneratorSuggestionAnswer",
  });

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

export interface GoogleCloudDialogflowV2beta1ArticleAnswer {
  title?: string;
  answerRecord?: string;
  metadata?: Record<string, string>;
  uri?: string;
  snippets?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1ArticleAnswer: Schema.Schema<GoogleCloudDialogflowV2beta1ArticleAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    uri: Schema.optional(Schema.String),
    snippets: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ArticleAnswer" });

export interface GoogleCloudDialogflowV2beta1SuggestArticlesResponse {
  contextSize?: number;
  articleAnswers?: ReadonlyArray<GoogleCloudDialogflowV2beta1ArticleAnswer>;
  latestMessage?: string;
}

export const GoogleCloudDialogflowV2beta1SuggestArticlesResponse: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestArticlesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contextSize: Schema.optional(Schema.Number),
    articleAnswers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1ArticleAnswer),
    ),
    latestMessage: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestArticlesResponse",
  });

export interface GoogleCloudDialogflowV2beta1ServiceLatencyInternalServiceLatency {
  startTime?: string;
  step?: string;
  completeTime?: string;
  latencyMs?: number;
}

export const GoogleCloudDialogflowV2beta1ServiceLatencyInternalServiceLatency: Schema.Schema<GoogleCloudDialogflowV2beta1ServiceLatencyInternalServiceLatency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    step: Schema.optional(Schema.String),
    completeTime: Schema.optional(Schema.String),
    latencyMs: Schema.optional(Schema.Number),
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

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior {
  useCustomSafetyFilterLevel?: boolean;
  invalidItemsQuerySuggestionSkipped?: boolean;
  primaryQueryRedactedAndReplaced?: boolean;
  answerGenerationRewriterOn?: boolean;
  previousQueriesIncluded?: boolean;
  conversationTranscriptHasMixedLanguages?: boolean;
  endUserMetadataIncluded?: boolean;
  returnQueryOnly?: boolean;
  disableSyncDelivery?: boolean;
  queryGenerationEndUserLanguageMismatch?: boolean;
  queryContainedSearchContext?: boolean;
  multipleQueriesGenerated?: boolean;
  usePubsubDelivery?: boolean;
  useTranslatedMessage?: boolean;
  appendedSearchContextCount?: number;
  thirdPartyConnectorAllowed?: boolean;
  queryGenerationAgentLanguageMismatch?: boolean;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    useCustomSafetyFilterLevel: Schema.optional(Schema.Boolean),
    invalidItemsQuerySuggestionSkipped: Schema.optional(Schema.Boolean),
    primaryQueryRedactedAndReplaced: Schema.optional(Schema.Boolean),
    answerGenerationRewriterOn: Schema.optional(Schema.Boolean),
    previousQueriesIncluded: Schema.optional(Schema.Boolean),
    conversationTranscriptHasMixedLanguages: Schema.optional(Schema.Boolean),
    endUserMetadataIncluded: Schema.optional(Schema.Boolean),
    returnQueryOnly: Schema.optional(Schema.Boolean),
    disableSyncDelivery: Schema.optional(Schema.Boolean),
    queryGenerationEndUserLanguageMismatch: Schema.optional(Schema.Boolean),
    queryContainedSearchContext: Schema.optional(Schema.Boolean),
    multipleQueriesGenerated: Schema.optional(Schema.Boolean),
    usePubsubDelivery: Schema.optional(Schema.Boolean),
    useTranslatedMessage: Schema.optional(Schema.Boolean),
    appendedSearchContextCount: Schema.optional(Schema.Number),
    thirdPartyConnectorAllowed: Schema.optional(Schema.Boolean),
    queryGenerationAgentLanguageMismatch: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior",
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
  ingestedParametersDebugInfo?: ReadonlyArray<GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfoIngestedParameterDebugInfo>;
  contextReferenceRetrieved?: boolean;
}

export const GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfo: Schema.Schema<GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectNotAllowlisted: Schema.optional(Schema.Boolean),
    ingestedParametersDebugInfo: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfoIngestedParameterDebugInfo,
      ),
    ),
    contextReferenceRetrieved: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfo",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfo {
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
  serviceLatency?: GoogleCloudDialogflowV2beta1ServiceLatency;
  queryCategorizationFailureReason?:
    | "QUERY_CATEGORIZATION_FAILURE_REASON_UNSPECIFIED"
    | "QUERY_CATEGORIZATION_INVALID_CONFIG"
    | "QUERY_CATEGORIZATION_RESULT_NOT_FOUND"
    | "QUERY_CATEGORIZATION_FAILED"
    | (string & {});
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
  knowledgeAssistBehavior?: GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior;
  ingestedContextReferenceDebugInfo?: GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfo;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfo: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datastoreResponseReason: Schema.optional(Schema.String),
    serviceLatency: Schema.optional(GoogleCloudDialogflowV2beta1ServiceLatency),
    queryCategorizationFailureReason: Schema.optional(Schema.String),
    queryGenerationFailureReason: Schema.optional(Schema.String),
    knowledgeAssistBehavior: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior,
    ),
    ingestedContextReferenceDebugInfo: Schema.optional(
      GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfo,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfo",
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

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet {
  uri?: string;
  title?: string;
  metadata?: Record<string, unknown>;
  text?: string;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
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
  answerText?: string;
  faqSource?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerFaqSource;
  generativeSource?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource;
  playbookSource?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource;
  eventSource?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerEventSource;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswer: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answerText: Schema.optional(Schema.String),
    faqSource: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerFaqSource,
    ),
    generativeSource: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource,
    ),
    playbookSource: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource,
    ),
    eventSource: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerEventSource,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswer",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistAnswer {
  knowledgeAssistDebugInfo?: GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfo;
  suggestedQuery?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuery;
  suggestedQueryAnswer?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswer;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswer: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    knowledgeAssistDebugInfo: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfo,
    ),
    suggestedQuery: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuery,
    ),
    suggestedQueryAnswer: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswer,
    ),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1KnowledgeAssistAnswer",
  });

export interface GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse {
  contextSize?: number;
  latestMessage?: string;
  knowledgeAssistAnswer?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswer;
}

export const GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contextSize: Schema.optional(Schema.Number),
    latestMessage: Schema.optional(Schema.String),
    knowledgeAssistAnswer: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswer,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse",
  });

export interface GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse {
  contextSize?: number;
  latestMessage?: string;
  faqAnswers?: ReadonlyArray<GoogleCloudDialogflowV2beta1FaqAnswer>;
}

export const GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contextSize: Schema.optional(Schema.Number),
    latestMessage: Schema.optional(Schema.String),
    faqAnswers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1FaqAnswer),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse",
  });

export interface GoogleCloudDialogflowV2beta1SuggestionResult {
  suggestSmartRepliesResponse?: GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse;
  suggestDialogflowAssistsResponse?: GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse;
  suggestEntityExtractionResponse?: GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse;
  generateSuggestionsResponse?: GoogleCloudDialogflowV2beta1GenerateSuggestionsResponse;
  suggestArticlesResponse?: GoogleCloudDialogflowV2beta1SuggestArticlesResponse;
  suggestKnowledgeAssistResponse?: GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse;
  error?: GoogleRpcStatus;
  suggestFaqAnswersResponse?: GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse;
}

export const GoogleCloudDialogflowV2beta1SuggestionResult: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestionResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suggestSmartRepliesResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse,
    ),
    suggestDialogflowAssistsResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse,
    ),
    suggestEntityExtractionResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse,
    ),
    generateSuggestionsResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1GenerateSuggestionsResponse,
    ),
    suggestArticlesResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestArticlesResponse,
    ),
    suggestKnowledgeAssistResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse,
    ),
    error: Schema.optional(GoogleRpcStatus),
    suggestFaqAnswersResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1SuggestionResult" });

export interface GoogleCloudDialogflowV2beta1HumanAgentAssistantEvent {
  conversation?: string;
  participant?: string;
  suggestionResults?: ReadonlyArray<GoogleCloudDialogflowV2beta1SuggestionResult>;
}

export const GoogleCloudDialogflowV2beta1HumanAgentAssistantEvent: Schema.Schema<GoogleCloudDialogflowV2beta1HumanAgentAssistantEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversation: Schema.optional(Schema.String),
    participant: Schema.optional(Schema.String),
    suggestionResults: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SuggestionResult),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1HumanAgentAssistantEvent",
  });

export interface GoogleCloudDialogflowV2Agent {
  apiVersion?:
    | "API_VERSION_UNSPECIFIED"
    | "API_VERSION_V1"
    | "API_VERSION_V2"
    | "API_VERSION_V2_BETA_1"
    | (string & {});
  tier?:
    | "TIER_UNSPECIFIED"
    | "TIER_STANDARD"
    | "TIER_ENTERPRISE"
    | "TIER_ENTERPRISE_PLUS"
    | (string & {});
  avatarUri?: string;
  parent?: string;
  matchMode?:
    | "MATCH_MODE_UNSPECIFIED"
    | "MATCH_MODE_HYBRID"
    | "MATCH_MODE_ML_ONLY"
    | (string & {});
  enableLogging?: boolean;
  description?: string;
  displayName?: string;
  timeZone?: string;
  classificationThreshold?: number;
  supportedLanguageCodes?: ReadonlyArray<string>;
  defaultLanguageCode?: string;
}

export const GoogleCloudDialogflowV2Agent: Schema.Schema<GoogleCloudDialogflowV2Agent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    tier: Schema.optional(Schema.String),
    avatarUri: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    matchMode: Schema.optional(Schema.String),
    enableLogging: Schema.optional(Schema.Boolean),
    description: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    timeZone: Schema.optional(Schema.String),
    classificationThreshold: Schema.optional(Schema.Number),
    supportedLanguageCodes: Schema.optional(Schema.Array(Schema.String)),
    defaultLanguageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Agent" });

export interface GoogleCloudDialogflowV2SearchAgentsResponse {
  nextPageToken?: string;
  agents?: ReadonlyArray<GoogleCloudDialogflowV2Agent>;
}

export const GoogleCloudDialogflowV2SearchAgentsResponse: Schema.Schema<GoogleCloudDialogflowV2SearchAgentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    agents: Schema.optional(Schema.Array(GoogleCloudDialogflowV2Agent)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SearchAgentsResponse" });

export interface GoogleCloudDialogflowV2AgentCoachingContext {
  version?: string;
  instructions?: ReadonlyArray<GoogleCloudDialogflowV2AgentCoachingInstruction>;
  overarchingGuidance?: string;
  outputLanguageCode?: string;
}

export const GoogleCloudDialogflowV2AgentCoachingContext: Schema.Schema<GoogleCloudDialogflowV2AgentCoachingContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    instructions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2AgentCoachingInstruction),
    ),
    overarchingGuidance: Schema.optional(Schema.String),
    outputLanguageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2AgentCoachingContext" });

export interface GoogleCloudDialogflowV2ConversationInfo {
  languageCode?: string;
}

export const GoogleCloudDialogflowV2ConversationInfo: Schema.Schema<GoogleCloudDialogflowV2ConversationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ConversationInfo" });

export interface GoogleCloudDialogflowV2SummarizationEvaluationMetrics {
  summarizationEvaluationResults?: ReadonlyArray<GoogleCloudDialogflowV2SummarizationEvaluationMetricsSummarizationEvaluationResult>;
  summarizationEvaluationMergedResultsUri?: string;
  overallMetrics?: ReadonlyArray<GoogleCloudDialogflowV2SummarizationEvaluationMetricsOverallScoresByMetric>;
  overallSectionTokens?: ReadonlyArray<GoogleCloudDialogflowV2SummarizationEvaluationMetricsSectionToken>;
  conversationDetails?: ReadonlyArray<GoogleCloudDialogflowV2SummarizationEvaluationMetricsConversationDetail>;
}

export const GoogleCloudDialogflowV2SummarizationEvaluationMetrics: Schema.Schema<GoogleCloudDialogflowV2SummarizationEvaluationMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    summarizationEvaluationResults: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2SummarizationEvaluationMetricsSummarizationEvaluationResult,
      ),
    ),
    summarizationEvaluationMergedResultsUri: Schema.optional(Schema.String),
    overallMetrics: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2SummarizationEvaluationMetricsOverallScoresByMetric,
      ),
    ),
    overallSectionTokens: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2SummarizationEvaluationMetricsSectionToken,
      ),
    ),
    conversationDetails: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2SummarizationEvaluationMetricsConversationDetail,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SummarizationEvaluationMetrics",
  });

export interface GoogleCloudDialogflowV2ToolsetTool {
  confirmationRequirement?:
    | "CONFIRMATION_REQUIREMENT_UNSPECIFIED"
    | "REQUIRED"
    | "NOT_REQUIRED"
    | (string & {});
  toolset?: string;
  operationId?: string;
}

export const GoogleCloudDialogflowV2ToolsetTool: Schema.Schema<GoogleCloudDialogflowV2ToolsetTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confirmationRequirement: Schema.optional(Schema.String),
    toolset: Schema.optional(Schema.String),
    operationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolsetTool" });

export interface GoogleCloudDialogflowV2SuggestionDedupingConfig {
  similarityThreshold?: number;
  enableDeduping?: boolean;
}

export const GoogleCloudDialogflowV2SuggestionDedupingConfig: Schema.Schema<GoogleCloudDialogflowV2SuggestionDedupingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    similarityThreshold: Schema.optional(Schema.Number),
    enableDeduping: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SuggestionDedupingConfig",
  });

export interface GoogleCloudDialogflowV2InferenceParameter {
  topP?: number;
  temperature?: number;
  maxOutputTokens?: number;
  topK?: number;
}

export const GoogleCloudDialogflowV2InferenceParameter: Schema.Schema<GoogleCloudDialogflowV2InferenceParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    topP: Schema.optional(Schema.Number),
    temperature: Schema.optional(Schema.Number),
    maxOutputTokens: Schema.optional(Schema.Number),
    topK: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2InferenceParameter" });

export interface GoogleCloudDialogflowV2SummarizationSectionList {
  summarizationSections?: ReadonlyArray<GoogleCloudDialogflowV2SummarizationSection>;
}

export const GoogleCloudDialogflowV2SummarizationSectionList: Schema.Schema<GoogleCloudDialogflowV2SummarizationSectionList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    summarizationSections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SummarizationSection),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SummarizationSectionList",
  });

export interface GoogleCloudDialogflowV2FewShotExample {
  summarizationSectionList?: GoogleCloudDialogflowV2SummarizationSectionList;
  output?: GoogleCloudDialogflowV2GeneratorSuggestion;
  conversationContext?: GoogleCloudDialogflowV2ConversationContext;
  extraInfo?: Record<string, string>;
}

export const GoogleCloudDialogflowV2FewShotExample: Schema.Schema<GoogleCloudDialogflowV2FewShotExample> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    summarizationSectionList: Schema.optional(
      GoogleCloudDialogflowV2SummarizationSectionList,
    ),
    output: Schema.optional(GoogleCloudDialogflowV2GeneratorSuggestion),
    conversationContext: Schema.optional(
      GoogleCloudDialogflowV2ConversationContext,
    ),
    extraInfo: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2FewShotExample" });

export interface GoogleCloudDialogflowV2SummarizationContext {
  version?: string;
  summarizationSections?: ReadonlyArray<GoogleCloudDialogflowV2SummarizationSection>;
  fewShotExamples?: ReadonlyArray<GoogleCloudDialogflowV2FewShotExample>;
  outputLanguageCode?: string;
}

export const GoogleCloudDialogflowV2SummarizationContext: Schema.Schema<GoogleCloudDialogflowV2SummarizationContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    summarizationSections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SummarizationSection),
    ),
    fewShotExamples: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2FewShotExample),
    ),
    outputLanguageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SummarizationContext" });

export interface GoogleCloudDialogflowV2FreeFormContext {
  text?: string;
}

export const GoogleCloudDialogflowV2FreeFormContext: Schema.Schema<GoogleCloudDialogflowV2FreeFormContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2FreeFormContext" });

export interface GoogleCloudDialogflowV2Generator {
  name?: string;
  updateTime?: string;
  toolsetTools?: ReadonlyArray<GoogleCloudDialogflowV2ToolsetTool>;
  triggerEvent?:
    | "TRIGGER_EVENT_UNSPECIFIED"
    | "END_OF_UTTERANCE"
    | "MANUAL_CALL"
    | "CUSTOMER_MESSAGE"
    | "AGENT_MESSAGE"
    | (string & {});
  suggestionDedupingConfig?: GoogleCloudDialogflowV2SuggestionDedupingConfig;
  publishedModel?: string;
  description?: string;
  inferenceParameter?: GoogleCloudDialogflowV2InferenceParameter;
  summarizationContext?: GoogleCloudDialogflowV2SummarizationContext;
  agentCoachingContext?: GoogleCloudDialogflowV2AgentCoachingContext;
  tools?: ReadonlyArray<string>;
  cesToolSpecs?: ReadonlyArray<GoogleCloudDialogflowV2CesToolSpec>;
  cesAppSpecs?: ReadonlyArray<GoogleCloudDialogflowV2CesAppSpec>;
  createTime?: string;
  freeFormContext?: GoogleCloudDialogflowV2FreeFormContext;
}

export const GoogleCloudDialogflowV2Generator: Schema.Schema<GoogleCloudDialogflowV2Generator> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    toolsetTools: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2ToolsetTool),
    ),
    triggerEvent: Schema.optional(Schema.String),
    suggestionDedupingConfig: Schema.optional(
      GoogleCloudDialogflowV2SuggestionDedupingConfig,
    ),
    publishedModel: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    inferenceParameter: Schema.optional(
      GoogleCloudDialogflowV2InferenceParameter,
    ),
    summarizationContext: Schema.optional(
      GoogleCloudDialogflowV2SummarizationContext,
    ),
    agentCoachingContext: Schema.optional(
      GoogleCloudDialogflowV2AgentCoachingContext,
    ),
    tools: Schema.optional(Schema.Array(Schema.String)),
    cesToolSpecs: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2CesToolSpec),
    ),
    cesAppSpecs: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2CesAppSpec),
    ),
    createTime: Schema.optional(Schema.String),
    freeFormContext: Schema.optional(GoogleCloudDialogflowV2FreeFormContext),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Generator" });

export interface GoogleCloudDialogflowV2EvaluationStatus {
  pipelineStatus?: GoogleRpcStatus;
  done?: boolean;
}

export const GoogleCloudDialogflowV2EvaluationStatus: Schema.Schema<GoogleCloudDialogflowV2EvaluationStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pipelineStatus: Schema.optional(GoogleRpcStatus),
    done: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2EvaluationStatus" });

export interface GoogleCloudDialogflowV2GeneratorEvaluation {
  summarizationMetrics?: GoogleCloudDialogflowV2SummarizationEvaluationMetrics;
  name?: string;
  initialGenerator?: GoogleCloudDialogflowV2Generator;
  satisfiesPzs?: boolean;
  evaluationStatus?: GoogleCloudDialogflowV2EvaluationStatus;
  satisfiesPzi?: boolean;
  generatorEvaluationConfig?: GoogleCloudDialogflowV2GeneratorEvaluationConfig;
  displayName?: string;
  createTime?: string;
  completeTime?: string;
}

export const GoogleCloudDialogflowV2GeneratorEvaluation: Schema.Schema<GoogleCloudDialogflowV2GeneratorEvaluation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    summarizationMetrics: Schema.optional(
      GoogleCloudDialogflowV2SummarizationEvaluationMetrics,
    ),
    name: Schema.optional(Schema.String),
    initialGenerator: Schema.optional(GoogleCloudDialogflowV2Generator),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    evaluationStatus: Schema.optional(GoogleCloudDialogflowV2EvaluationStatus),
    satisfiesPzi: Schema.optional(Schema.Boolean),
    generatorEvaluationConfig: Schema.optional(
      GoogleCloudDialogflowV2GeneratorEvaluationConfig,
    ),
    displayName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    completeTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2GeneratorEvaluation" });

export interface GoogleCloudDialogflowV2ListGeneratorEvaluationsResponse {
  generatorEvaluations?: ReadonlyArray<GoogleCloudDialogflowV2GeneratorEvaluation>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListGeneratorEvaluationsResponse: Schema.Schema<GoogleCloudDialogflowV2ListGeneratorEvaluationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generatorEvaluations: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2GeneratorEvaluation),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ListGeneratorEvaluationsResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1ContinuousTestResult {
  name?: string;
  result?:
    | "AGGREGATED_TEST_RESULT_UNSPECIFIED"
    | "PASSED"
    | "FAILED"
    | (string & {});
  testCaseResults?: ReadonlyArray<string>;
  runTime?: string;
}

export const GoogleCloudDialogflowCxV3beta1ContinuousTestResult: Schema.Schema<GoogleCloudDialogflowCxV3beta1ContinuousTestResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    result: Schema.optional(Schema.String),
    testCaseResults: Schema.optional(Schema.Array(Schema.String)),
    runTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ContinuousTestResult",
  });

export interface GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction {}

export const GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction: Schema.Schema<GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction",
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

export interface GoogleCloudDialogflowV2beta1ResponseMessageText {
  text?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1ResponseMessageText: Schema.Schema<GoogleCloudDialogflowV2beta1ResponseMessageText> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ResponseMessageText",
  });

export interface GoogleCloudDialogflowV2beta1ResponseMessage {
  payload?: Record<string, unknown>;
  endInteraction?: GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction;
  mixedAudio?: GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio;
  telephonyTransferCall?: GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall;
  text?: GoogleCloudDialogflowV2beta1ResponseMessageText;
  liveAgentHandoff?: GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff;
}

export const GoogleCloudDialogflowV2beta1ResponseMessage: Schema.Schema<GoogleCloudDialogflowV2beta1ResponseMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    endInteraction: Schema.optional(
      GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction,
    ),
    mixedAudio: Schema.optional(
      GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio,
    ),
    telephonyTransferCall: Schema.optional(
      GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall,
    ),
    text: Schema.optional(GoogleCloudDialogflowV2beta1ResponseMessageText),
    liveAgentHandoff: Schema.optional(
      GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ResponseMessage" });

export interface GoogleCloudDialogflowV2beta1AnnotatedMessagePart {
  text?: string;
  entityType?: string;
  formattedValue?: unknown;
}

export const GoogleCloudDialogflowV2beta1AnnotatedMessagePart: Schema.Schema<GoogleCloudDialogflowV2beta1AnnotatedMessagePart> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    entityType: Schema.optional(Schema.String),
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
  content?: string;
  createTime?: string;
  languageCode?: string;
  responseMessages?: ReadonlyArray<GoogleCloudDialogflowV2beta1ResponseMessage>;
  participant?: string;
  participantRole?:
    | "ROLE_UNSPECIFIED"
    | "HUMAN_AGENT"
    | "AUTOMATED_AGENT"
    | "END_USER"
    | (string & {});
  name?: string;
  sendTime?: string;
  messageAnnotation?: GoogleCloudDialogflowV2beta1MessageAnnotation;
  sentimentAnalysis?: GoogleCloudDialogflowV2beta1SentimentAnalysisResult;
}

export const GoogleCloudDialogflowV2beta1Message: Schema.Schema<GoogleCloudDialogflowV2beta1Message> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    responseMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1ResponseMessage),
    ),
    participant: Schema.optional(Schema.String),
    participantRole: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    sendTime: Schema.optional(Schema.String),
    messageAnnotation: Schema.optional(
      GoogleCloudDialogflowV2beta1MessageAnnotation,
    ),
    sentimentAnalysis: Schema.optional(
      GoogleCloudDialogflowV2beta1SentimentAnalysisResult,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1Message" });

export interface GoogleCloudDialogflowV2beta1SpeechWordInfo {
  endOffset?: string;
  confidence?: number;
  word?: string;
  startOffset?: string;
}

export const GoogleCloudDialogflowV2beta1SpeechWordInfo: Schema.Schema<GoogleCloudDialogflowV2beta1SpeechWordInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endOffset: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
    word: Schema.optional(Schema.String),
    startOffset: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1SpeechWordInfo" });

export interface GoogleCloudDialogflowV2beta1StreamingRecognitionResult {
  transcript?: string;
  confidence?: number;
  stability?: number;
  languageCode?: string;
  speechWordInfo?: ReadonlyArray<GoogleCloudDialogflowV2beta1SpeechWordInfo>;
  isFinal?: boolean;
  speechEndOffset?: string;
  messageType?:
    | "MESSAGE_TYPE_UNSPECIFIED"
    | "TRANSCRIPT"
    | "END_OF_SINGLE_UTTERANCE"
    | "DTMF_DIGITS"
    | "PARTIAL_DTMF_DIGITS"
    | (string & {});
  dtmfDigits?: GoogleCloudDialogflowV2beta1TelephonyDtmfEvents;
}

export const GoogleCloudDialogflowV2beta1StreamingRecognitionResult: Schema.Schema<GoogleCloudDialogflowV2beta1StreamingRecognitionResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transcript: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
    stability: Schema.optional(Schema.Number),
    languageCode: Schema.optional(Schema.String),
    speechWordInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SpeechWordInfo),
    ),
    isFinal: Schema.optional(Schema.Boolean),
    speechEndOffset: Schema.optional(Schema.String),
    messageType: Schema.optional(Schema.String),
    dtmfDigits: Schema.optional(
      GoogleCloudDialogflowV2beta1TelephonyDtmfEvents,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1StreamingRecognitionResult",
  });

export interface GoogleCloudDialogflowV2beta1ConversationEvent {
  newMessagePayload?: GoogleCloudDialogflowV2beta1Message;
  type?:
    | "TYPE_UNSPECIFIED"
    | "CONVERSATION_STARTED"
    | "CONVERSATION_FINISHED"
    | "HUMAN_INTERVENTION_NEEDED"
    | "NEW_MESSAGE"
    | "NEW_RECOGNITION_RESULT"
    | "UNRECOVERABLE_ERROR"
    | (string & {});
  newRecognitionResultPayload?: GoogleCloudDialogflowV2beta1StreamingRecognitionResult;
  errorStatus?: GoogleRpcStatus;
  conversation?: string;
}

export const GoogleCloudDialogflowV2beta1ConversationEvent: Schema.Schema<GoogleCloudDialogflowV2beta1ConversationEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    newMessagePayload: Schema.optional(GoogleCloudDialogflowV2beta1Message),
    type: Schema.optional(Schema.String),
    newRecognitionResultPayload: Schema.optional(
      GoogleCloudDialogflowV2beta1StreamingRecognitionResult,
    ),
    errorStatus: Schema.optional(GoogleRpcStatus),
    conversation: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ConversationEvent" });

export interface GoogleCloudDialogflowV2DocumentReloadStatus {
  time?: string;
  status?: GoogleRpcStatus;
}

export const GoogleCloudDialogflowV2DocumentReloadStatus: Schema.Schema<GoogleCloudDialogflowV2DocumentReloadStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    time: Schema.optional(Schema.String),
    status: Schema.optional(GoogleRpcStatus),
  }).annotate({ identifier: "GoogleCloudDialogflowV2DocumentReloadStatus" });

export interface GoogleCloudDialogflowV2DialogflowAssistAnswer {
  answerRecord?: string;
  intentSuggestion?: GoogleCloudDialogflowV2IntentSuggestion;
  queryResult?: GoogleCloudDialogflowV2QueryResult;
}

export const GoogleCloudDialogflowV2DialogflowAssistAnswer: Schema.Schema<GoogleCloudDialogflowV2DialogflowAssistAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answerRecord: Schema.optional(Schema.String),
    intentSuggestion: Schema.optional(GoogleCloudDialogflowV2IntentSuggestion),
    queryResult: Schema.optional(GoogleCloudDialogflowV2QueryResult),
  }).annotate({ identifier: "GoogleCloudDialogflowV2DialogflowAssistAnswer" });

export interface GoogleCloudDialogflowV2AgentAssistantRecord {
  articleSuggestionAnswer?: GoogleCloudDialogflowV2ArticleAnswer;
  faqAnswer?: GoogleCloudDialogflowV2FaqAnswer;
  dialogflowAssistAnswer?: GoogleCloudDialogflowV2DialogflowAssistAnswer;
  generatorSuggestion?: GoogleCloudDialogflowV2GeneratorSuggestion;
}

export const GoogleCloudDialogflowV2AgentAssistantRecord: Schema.Schema<GoogleCloudDialogflowV2AgentAssistantRecord> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    articleSuggestionAnswer: Schema.optional(
      GoogleCloudDialogflowV2ArticleAnswer,
    ),
    faqAnswer: Schema.optional(GoogleCloudDialogflowV2FaqAnswer),
    dialogflowAssistAnswer: Schema.optional(
      GoogleCloudDialogflowV2DialogflowAssistAnswer,
    ),
    generatorSuggestion: Schema.optional(
      GoogleCloudDialogflowV2GeneratorSuggestion,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2AgentAssistantRecord" });

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

export interface GoogleCloudDialogflowV2beta1EventInput {
  name?: string;
  languageCode?: string;
  parameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2beta1EventInput: Schema.Schema<GoogleCloudDialogflowV2beta1EventInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1EventInput" });

export interface GoogleCloudDialogflowCxV3InlineDestination {
  content?: string;
}

export const GoogleCloudDialogflowCxV3InlineDestination: Schema.Schema<GoogleCloudDialogflowCxV3InlineDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3InlineDestination" });

export interface GoogleCloudDialogflowCxV3ExportEntityTypesResponse {
  entityTypesUri?: string;
  entityTypesContent?: GoogleCloudDialogflowCxV3InlineDestination;
}

export const GoogleCloudDialogflowCxV3ExportEntityTypesResponse: Schema.Schema<GoogleCloudDialogflowCxV3ExportEntityTypesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypesUri: Schema.optional(Schema.String),
    entityTypesContent: Schema.optional(
      GoogleCloudDialogflowCxV3InlineDestination,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ExportEntityTypesResponse",
  });

export interface GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequest {
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

export const GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequest: Schema.Schema<GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    participantRole: Schema.optional(Schema.String),
    suggestionFeatureType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequest",
  });

export interface GoogleCloudDialogflowV2SearchKnowledgeDebugInfoSearchKnowledgeBehavior {
  endUserMetadataIncluded?: boolean;
  thirdPartyConnectorAllowed?: boolean;
  answerGenerationRewriterOn?: boolean;
}

export const GoogleCloudDialogflowV2SearchKnowledgeDebugInfoSearchKnowledgeBehavior: Schema.Schema<GoogleCloudDialogflowV2SearchKnowledgeDebugInfoSearchKnowledgeBehavior> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endUserMetadataIncluded: Schema.optional(Schema.Boolean),
    thirdPartyConnectorAllowed: Schema.optional(Schema.Boolean),
    answerGenerationRewriterOn: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SearchKnowledgeDebugInfoSearchKnowledgeBehavior",
  });

export interface GoogleCloudDialogflowV2SearchKnowledgeDebugInfo {
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
  searchKnowledgeBehavior?: GoogleCloudDialogflowV2SearchKnowledgeDebugInfoSearchKnowledgeBehavior;
  ingestedContextReferenceDebugInfo?: GoogleCloudDialogflowV2IngestedContextReferenceDebugInfo;
  serviceLatency?: GoogleCloudDialogflowV2ServiceLatency;
}

export const GoogleCloudDialogflowV2SearchKnowledgeDebugInfo: Schema.Schema<GoogleCloudDialogflowV2SearchKnowledgeDebugInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datastoreResponseReason: Schema.optional(Schema.String),
    searchKnowledgeBehavior: Schema.optional(
      GoogleCloudDialogflowV2SearchKnowledgeDebugInfoSearchKnowledgeBehavior,
    ),
    ingestedContextReferenceDebugInfo: Schema.optional(
      GoogleCloudDialogflowV2IngestedContextReferenceDebugInfo,
    ),
    serviceLatency: Schema.optional(GoogleCloudDialogflowV2ServiceLatency),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SearchKnowledgeDebugInfo",
  });

export interface GoogleCloudDialogflowV2SearchKnowledgeResponse {
  rewrittenQuery?: string;
  searchKnowledgeDebugInfo?: GoogleCloudDialogflowV2SearchKnowledgeDebugInfo;
  answers?: ReadonlyArray<GoogleCloudDialogflowV2SearchKnowledgeAnswer>;
}

export const GoogleCloudDialogflowV2SearchKnowledgeResponse: Schema.Schema<GoogleCloudDialogflowV2SearchKnowledgeResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rewrittenQuery: Schema.optional(Schema.String),
    searchKnowledgeDebugInfo: Schema.optional(
      GoogleCloudDialogflowV2SearchKnowledgeDebugInfo,
    ),
    answers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SearchKnowledgeAnswer),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SearchKnowledgeResponse" });

export interface GoogleCloudDialogflowV2SuggestSmartRepliesRequest {
  latestMessage?: string;
  currentTextInput?: GoogleCloudDialogflowV2TextInput;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2SuggestSmartRepliesRequest: Schema.Schema<GoogleCloudDialogflowV2SuggestSmartRepliesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestMessage: Schema.optional(Schema.String),
    currentTextInput: Schema.optional(GoogleCloudDialogflowV2TextInput),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SuggestSmartRepliesRequest",
  });

export interface GoogleCloudDialogflowV2Connection {
  updateTime?: string;
  state?:
    | "STATE_UNSPECIFIED"
    | "CONNECTED"
    | "DISCONNECTED"
    | "AUTHENTICATION_FAILED"
    | "KEEPALIVE"
    | (string & {});
  connectionId?: string;
  errorDetails?: GoogleCloudDialogflowV2ConnectionErrorDetails;
}

export const GoogleCloudDialogflowV2Connection: Schema.Schema<GoogleCloudDialogflowV2Connection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    connectionId: Schema.optional(Schema.String),
    errorDetails: Schema.optional(
      GoogleCloudDialogflowV2ConnectionErrorDetails,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Connection" });

export interface GoogleCloudDialogflowV2SipTrunk {
  name?: string;
  expectedHostname?: ReadonlyArray<string>;
  displayName?: string;
  connections?: ReadonlyArray<GoogleCloudDialogflowV2Connection>;
}

export const GoogleCloudDialogflowV2SipTrunk: Schema.Schema<GoogleCloudDialogflowV2SipTrunk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    expectedHostname: Schema.optional(Schema.Array(Schema.String)),
    displayName: Schema.optional(Schema.String),
    connections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2Connection),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SipTrunk" });

export interface GoogleCloudDialogflowV2ListSipTrunksResponse {
  sipTrunks?: ReadonlyArray<GoogleCloudDialogflowV2SipTrunk>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListSipTrunksResponse: Schema.Schema<GoogleCloudDialogflowV2ListSipTrunksResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sipTrunks: Schema.optional(Schema.Array(GoogleCloudDialogflowV2SipTrunk)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ListSipTrunksResponse" });

export interface GoogleCloudDialogflowV2UndeployConversationModelOperationMetadata {
  createTime?: string;
  conversationModel?: string;
  doneTime?: string;
}

export const GoogleCloudDialogflowV2UndeployConversationModelOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2UndeployConversationModelOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    conversationModel: Schema.optional(Schema.String),
    doneTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2UndeployConversationModelOperationMetadata",
  });

export interface GoogleCloudDialogflowV2EntityTypeBatch {
  entityTypes?: ReadonlyArray<GoogleCloudDialogflowV2EntityType>;
}

export const GoogleCloudDialogflowV2EntityTypeBatch: Schema.Schema<GoogleCloudDialogflowV2EntityTypeBatch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2EntityType),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2EntityTypeBatch" });

export interface GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest {
  entityTypeBatchInline?: GoogleCloudDialogflowV2EntityTypeBatch;
  languageCode?: string;
  entityTypeBatchUri?: string;
  updateMask?: string;
}

export const GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest: Schema.Schema<GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypeBatchInline: Schema.optional(
      GoogleCloudDialogflowV2EntityTypeBatch,
    ),
    languageCode: Schema.optional(Schema.String),
    entityTypeBatchUri: Schema.optional(Schema.String),
    updateMask: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest",
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

export interface GoogleCloudDialogflowCxV3ExportIntentsMetadata {}

export const GoogleCloudDialogflowCxV3ExportIntentsMetadata: Schema.Schema<GoogleCloudDialogflowCxV3ExportIntentsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ExportIntentsMetadata",
  });

export interface GoogleCloudDialogflowCxV3TestConfig {
  trackingParameters?: ReadonlyArray<string>;
  page?: string;
  flow?: string;
}

export const GoogleCloudDialogflowCxV3TestConfig: Schema.Schema<GoogleCloudDialogflowCxV3TestConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trackingParameters: Schema.optional(Schema.Array(Schema.String)),
    page: Schema.optional(Schema.String),
    flow: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TestConfig" });

export interface GoogleCloudDialogflowCxV3EventInput {
  event?: string;
}

export const GoogleCloudDialogflowCxV3EventInput: Schema.Schema<GoogleCloudDialogflowCxV3EventInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    event: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3EventInput" });

export interface GoogleCloudDialogflowCxV3DtmfInput {
  finishDigit?: string;
  digits?: string;
}

export const GoogleCloudDialogflowCxV3DtmfInput: Schema.Schema<GoogleCloudDialogflowCxV3DtmfInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    finishDigit: Schema.optional(Schema.String),
    digits: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3DtmfInput" });

export interface GoogleCloudDialogflowCxV3ToolCallResult {
  action?: string;
  tool?: string;
  error?: GoogleCloudDialogflowCxV3ToolCallResultError;
  outputParameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3ToolCallResult: Schema.Schema<GoogleCloudDialogflowCxV3ToolCallResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    tool: Schema.optional(Schema.String),
    error: Schema.optional(GoogleCloudDialogflowCxV3ToolCallResultError),
    outputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ToolCallResult" });

export interface GoogleCloudDialogflowCxV3IntentInput {
  intent?: string;
}

export const GoogleCloudDialogflowCxV3IntentInput: Schema.Schema<GoogleCloudDialogflowCxV3IntentInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3IntentInput" });

export interface GoogleCloudDialogflowCxV3TextInput {
  text?: string;
}

export const GoogleCloudDialogflowCxV3TextInput: Schema.Schema<GoogleCloudDialogflowCxV3TextInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TextInput" });

export interface GoogleCloudDialogflowCxV3BargeInConfig {
  totalDuration?: string;
  noBargeInDuration?: string;
}

export const GoogleCloudDialogflowCxV3BargeInConfig: Schema.Schema<GoogleCloudDialogflowCxV3BargeInConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalDuration: Schema.optional(Schema.String),
    noBargeInDuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3BargeInConfig" });

export interface GoogleCloudDialogflowCxV3InputAudioConfig {
  phraseHints?: ReadonlyArray<string>;
  optOutConformerModelMigration?: boolean;
  bargeInConfig?: GoogleCloudDialogflowCxV3BargeInConfig;
  sampleRateHertz?: number;
  enableWordInfo?: boolean;
  model?: string;
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
  singleUtterance?: boolean;
}

export const GoogleCloudDialogflowCxV3InputAudioConfig: Schema.Schema<GoogleCloudDialogflowCxV3InputAudioConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    phraseHints: Schema.optional(Schema.Array(Schema.String)),
    optOutConformerModelMigration: Schema.optional(Schema.Boolean),
    bargeInConfig: Schema.optional(GoogleCloudDialogflowCxV3BargeInConfig),
    sampleRateHertz: Schema.optional(Schema.Number),
    enableWordInfo: Schema.optional(Schema.Boolean),
    model: Schema.optional(Schema.String),
    modelVariant: Schema.optional(Schema.String),
    audioEncoding: Schema.optional(Schema.String),
    singleUtterance: Schema.optional(Schema.Boolean),
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

export interface GoogleCloudDialogflowCxV3QueryInput {
  event?: GoogleCloudDialogflowCxV3EventInput;
  dtmf?: GoogleCloudDialogflowCxV3DtmfInput;
  toolCallResult?: GoogleCloudDialogflowCxV3ToolCallResult;
  languageCode?: string;
  intent?: GoogleCloudDialogflowCxV3IntentInput;
  text?: GoogleCloudDialogflowCxV3TextInput;
  audio?: GoogleCloudDialogflowCxV3AudioInput;
}

export const GoogleCloudDialogflowCxV3QueryInput: Schema.Schema<GoogleCloudDialogflowCxV3QueryInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    event: Schema.optional(GoogleCloudDialogflowCxV3EventInput),
    dtmf: Schema.optional(GoogleCloudDialogflowCxV3DtmfInput),
    toolCallResult: Schema.optional(GoogleCloudDialogflowCxV3ToolCallResult),
    languageCode: Schema.optional(Schema.String),
    intent: Schema.optional(GoogleCloudDialogflowCxV3IntentInput),
    text: Schema.optional(GoogleCloudDialogflowCxV3TextInput),
    audio: Schema.optional(GoogleCloudDialogflowCxV3AudioInput),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3QueryInput" });

export interface GoogleCloudDialogflowCxV3ConversationTurnUserInput {
  input?: GoogleCloudDialogflowCxV3QueryInput;
  injectedParameters?: Record<string, unknown>;
  isWebhookEnabled?: boolean;
  enableSentimentAnalysis?: boolean;
}

export const GoogleCloudDialogflowCxV3ConversationTurnUserInput: Schema.Schema<GoogleCloudDialogflowCxV3ConversationTurnUserInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    input: Schema.optional(GoogleCloudDialogflowCxV3QueryInput),
    injectedParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    isWebhookEnabled: Schema.optional(Schema.Boolean),
    enableSentimentAnalysis: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ConversationTurnUserInput",
  });

export interface GoogleCloudDialogflowCxV3TransitionRoute {
  description?: string;
  targetPage?: string;
  condition?: string;
  intent?: string;
  triggerFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
  targetFlow?: string;
  name?: string;
}

export const GoogleCloudDialogflowCxV3TransitionRoute: Schema.Schema<GoogleCloudDialogflowCxV3TransitionRoute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    targetPage: Schema.optional(Schema.String),
    condition: Schema.optional(Schema.String),
    intent: Schema.optional(Schema.String),
    triggerFulfillment: Schema.optional(GoogleCloudDialogflowCxV3Fulfillment),
    targetFlow: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TransitionRoute" });

export interface GoogleCloudDialogflowCxV3EventHandler {
  event?: string;
  targetPlaybook?: string;
  targetPage?: string;
  triggerFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
  targetFlow?: string;
  name?: string;
}

export const GoogleCloudDialogflowCxV3EventHandler: Schema.Schema<GoogleCloudDialogflowCxV3EventHandler> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    event: Schema.optional(Schema.String),
    targetPlaybook: Schema.optional(Schema.String),
    targetPage: Schema.optional(Schema.String),
    triggerFulfillment: Schema.optional(GoogleCloudDialogflowCxV3Fulfillment),
    targetFlow: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3EventHandler" });

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

export interface GoogleCloudDialogflowCxV3KnowledgeConnectorSettings {
  triggerFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
  targetFlow?: string;
  enabled?: boolean;
  dataStoreConnections?: ReadonlyArray<GoogleCloudDialogflowCxV3DataStoreConnection>;
  targetPage?: string;
}

export const GoogleCloudDialogflowCxV3KnowledgeConnectorSettings: Schema.Schema<GoogleCloudDialogflowCxV3KnowledgeConnectorSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    triggerFulfillment: Schema.optional(GoogleCloudDialogflowCxV3Fulfillment),
    targetFlow: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    dataStoreConnections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3DataStoreConnection),
    ),
    targetPage: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3KnowledgeConnectorSettings",
  });

export interface GoogleCloudDialogflowCxV3FormParameterFillBehavior {
  initialPromptFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
  repromptEventHandlers?: ReadonlyArray<GoogleCloudDialogflowCxV3EventHandler>;
}

export const GoogleCloudDialogflowCxV3FormParameterFillBehavior: Schema.Schema<GoogleCloudDialogflowCxV3FormParameterFillBehavior> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    initialPromptFulfillment: Schema.optional(
      GoogleCloudDialogflowCxV3Fulfillment,
    ),
    repromptEventHandlers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3EventHandler),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3FormParameterFillBehavior",
  });

export interface GoogleCloudDialogflowCxV3FormParameter {
  entityType?: string;
  isList?: boolean;
  redact?: boolean;
  advancedSettings?: GoogleCloudDialogflowCxV3AdvancedSettings;
  defaultValue?: unknown;
  required?: boolean;
  displayName?: string;
  fillBehavior?: GoogleCloudDialogflowCxV3FormParameterFillBehavior;
}

export const GoogleCloudDialogflowCxV3FormParameter: Schema.Schema<GoogleCloudDialogflowCxV3FormParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityType: Schema.optional(Schema.String),
    isList: Schema.optional(Schema.Boolean),
    redact: Schema.optional(Schema.Boolean),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettings,
    ),
    defaultValue: Schema.optional(Schema.Unknown),
    required: Schema.optional(Schema.Boolean),
    displayName: Schema.optional(Schema.String),
    fillBehavior: Schema.optional(
      GoogleCloudDialogflowCxV3FormParameterFillBehavior,
    ),
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
  transitionRoutes?: ReadonlyArray<GoogleCloudDialogflowCxV3TransitionRoute>;
  entryFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
  advancedSettings?: GoogleCloudDialogflowCxV3AdvancedSettings;
  name?: string;
  eventHandlers?: ReadonlyArray<GoogleCloudDialogflowCxV3EventHandler>;
  description?: string;
  transitionRouteGroups?: ReadonlyArray<string>;
  knowledgeConnectorSettings?: GoogleCloudDialogflowCxV3KnowledgeConnectorSettings;
  form?: GoogleCloudDialogflowCxV3Form;
  displayName?: string;
}

export const GoogleCloudDialogflowCxV3Page: Schema.Schema<GoogleCloudDialogflowCxV3Page> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transitionRoutes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3TransitionRoute),
    ),
    entryFulfillment: Schema.optional(GoogleCloudDialogflowCxV3Fulfillment),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettings,
    ),
    name: Schema.optional(Schema.String),
    eventHandlers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3EventHandler),
    ),
    description: Schema.optional(Schema.String),
    transitionRouteGroups: Schema.optional(Schema.Array(Schema.String)),
    knowledgeConnectorSettings: Schema.optional(
      GoogleCloudDialogflowCxV3KnowledgeConnectorSettings,
    ),
    form: Schema.optional(GoogleCloudDialogflowCxV3Form),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Page" });

export interface GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput {
  triggeredIntent?: GoogleCloudDialogflowCxV3Intent;
  diagnosticInfo?: Record<string, unknown>;
  currentPage?: GoogleCloudDialogflowCxV3Page;
  differences?: ReadonlyArray<GoogleCloudDialogflowCxV3TestRunDifference>;
  status?: GoogleRpcStatus;
  sessionParameters?: Record<string, unknown>;
  textResponses?: ReadonlyArray<GoogleCloudDialogflowCxV3ResponseMessageText>;
}

export const GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput: Schema.Schema<GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    triggeredIntent: Schema.optional(GoogleCloudDialogflowCxV3Intent),
    diagnosticInfo: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    currentPage: Schema.optional(GoogleCloudDialogflowCxV3Page),
    differences: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3TestRunDifference),
    ),
    status: Schema.optional(GoogleRpcStatus),
    sessionParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    textResponses: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ResponseMessageText),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput",
  });

export interface GoogleCloudDialogflowCxV3ConversationTurn {
  userInput?: GoogleCloudDialogflowCxV3ConversationTurnUserInput;
  virtualAgentOutput?: GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput;
}

export const GoogleCloudDialogflowCxV3ConversationTurn: Schema.Schema<GoogleCloudDialogflowCxV3ConversationTurn> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userInput: Schema.optional(
      GoogleCloudDialogflowCxV3ConversationTurnUserInput,
    ),
    virtualAgentOutput: Schema.optional(
      GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ConversationTurn" });

export interface GoogleCloudDialogflowCxV3TestCaseResult {
  testTime?: string;
  testResult?: "TEST_RESULT_UNSPECIFIED" | "PASSED" | "FAILED" | (string & {});
  conversationTurns?: ReadonlyArray<GoogleCloudDialogflowCxV3ConversationTurn>;
  environment?: string;
  name?: string;
}

export const GoogleCloudDialogflowCxV3TestCaseResult: Schema.Schema<GoogleCloudDialogflowCxV3TestCaseResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testTime: Schema.optional(Schema.String),
    testResult: Schema.optional(Schema.String),
    conversationTurns: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ConversationTurn),
    ),
    environment: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TestCaseResult" });

export interface GoogleCloudDialogflowCxV3TestCase {
  displayName?: string;
  name?: string;
  testConfig?: GoogleCloudDialogflowCxV3TestConfig;
  lastTestResult?: GoogleCloudDialogflowCxV3TestCaseResult;
  creationTime?: string;
  tags?: ReadonlyArray<string>;
  testCaseConversationTurns?: ReadonlyArray<GoogleCloudDialogflowCxV3ConversationTurn>;
  notes?: string;
}

export const GoogleCloudDialogflowCxV3TestCase: Schema.Schema<GoogleCloudDialogflowCxV3TestCase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    testConfig: Schema.optional(GoogleCloudDialogflowCxV3TestConfig),
    lastTestResult: Schema.optional(GoogleCloudDialogflowCxV3TestCaseResult),
    creationTime: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.String)),
    testCaseConversationTurns: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ConversationTurn),
    ),
    notes: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TestCase" });

export interface GoogleCloudDialogflowCxV3TestCaseError {
  testCase?: GoogleCloudDialogflowCxV3TestCase;
  status?: GoogleRpcStatus;
}

export const GoogleCloudDialogflowCxV3TestCaseError: Schema.Schema<GoogleCloudDialogflowCxV3TestCaseError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testCase: Schema.optional(GoogleCloudDialogflowCxV3TestCase),
    status: Schema.optional(GoogleRpcStatus),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TestCaseError" });

export interface GoogleCloudDialogflowCxV3beta1TurnSignals {
  failureReasons?: ReadonlyArray<
    | "FAILURE_REASON_UNSPECIFIED"
    | "FAILED_INTENT"
    | "FAILED_WEBHOOK"
    | (string & {})
  >;
  sentimentScore?: number;
  webhookStatuses?: ReadonlyArray<string>;
  noMatch?: boolean;
  dtmfUsed?: boolean;
  agentEscalated?: boolean;
  sentimentMagnitude?: number;
  noUserInput?: boolean;
  userEscalated?: boolean;
  reachedEndPage?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1TurnSignals: Schema.Schema<GoogleCloudDialogflowCxV3beta1TurnSignals> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    failureReasons: Schema.optional(Schema.Array(Schema.String)),
    sentimentScore: Schema.optional(Schema.Number),
    webhookStatuses: Schema.optional(Schema.Array(Schema.String)),
    noMatch: Schema.optional(Schema.Boolean),
    dtmfUsed: Schema.optional(Schema.Boolean),
    agentEscalated: Schema.optional(Schema.Boolean),
    sentimentMagnitude: Schema.optional(Schema.Number),
    noUserInput: Schema.optional(Schema.Boolean),
    userEscalated: Schema.optional(Schema.Boolean),
    reachedEndPage: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TurnSignals" });

export interface GoogleCloudDialogflowCxV3beta1ConversationSignals {
  turnSignals?: GoogleCloudDialogflowCxV3beta1TurnSignals;
}

export const GoogleCloudDialogflowCxV3beta1ConversationSignals: Schema.Schema<GoogleCloudDialogflowCxV3beta1ConversationSignals> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    turnSignals: Schema.optional(GoogleCloudDialogflowCxV3beta1TurnSignals),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ConversationSignals",
  });

export interface GoogleCloudDialogflowV2ToolConnectorTool {
  actions?: ReadonlyArray<GoogleCloudDialogflowV2ToolConnectorToolAction>;
  name?: string;
}

export const GoogleCloudDialogflowV2ToolConnectorTool: Schema.Schema<GoogleCloudDialogflowV2ToolConnectorTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    actions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2ToolConnectorToolAction),
    ),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolConnectorTool" });

export interface GoogleCloudDialogflowV2ImportConversationDataOperationMetadata {
  conversationDataset?: string;
  partialFailures?: ReadonlyArray<GoogleRpcStatus>;
  createTime?: string;
}

export const GoogleCloudDialogflowV2ImportConversationDataOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2ImportConversationDataOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationDataset: Schema.optional(Schema.String),
    partialFailures: Schema.optional(Schema.Array(GoogleRpcStatus)),
    createTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2ImportConversationDataOperationMetadata",
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

export interface GoogleCloudDialogflowCxV3RunTestCaseResponse {
  result?: GoogleCloudDialogflowCxV3TestCaseResult;
}

export const GoogleCloudDialogflowCxV3RunTestCaseResponse: Schema.Schema<GoogleCloudDialogflowCxV3RunTestCaseResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.optional(GoogleCloudDialogflowCxV3TestCaseResult),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3RunTestCaseResponse" });

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

export interface GoogleCloudDialogflowV2ToolTLSConfigCACert {
  displayName?: string;
  cert?: string;
}

export const GoogleCloudDialogflowV2ToolTLSConfigCACert: Schema.Schema<GoogleCloudDialogflowV2ToolTLSConfigCACert> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    cert: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolTLSConfigCACert" });

export interface GoogleCloudDialogflowV2ToolTLSConfig {
  caCerts?: ReadonlyArray<GoogleCloudDialogflowV2ToolTLSConfigCACert>;
}

export const GoogleCloudDialogflowV2ToolTLSConfig: Schema.Schema<GoogleCloudDialogflowV2ToolTLSConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    caCerts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2ToolTLSConfigCACert),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolTLSConfig" });

export interface GoogleCloudDialogflowV2EncryptionSpec {
  kmsKey?: string;
  name?: string;
}

export const GoogleCloudDialogflowV2EncryptionSpec: Schema.Schema<GoogleCloudDialogflowV2EncryptionSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kmsKey: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2EncryptionSpec" });

export interface GoogleCloudDialogflowV3alpha1TurnSignals {
  failureReasons?: ReadonlyArray<
    | "FAILURE_REASON_UNSPECIFIED"
    | "FAILED_INTENT"
    | "FAILED_WEBHOOK"
    | (string & {})
  >;
  sentimentScore?: number;
  webhookStatuses?: ReadonlyArray<string>;
  agentEscalated?: boolean;
  noMatch?: boolean;
  dtmfUsed?: boolean;
  sentimentMagnitude?: number;
  reachedEndPage?: boolean;
  noUserInput?: boolean;
  userEscalated?: boolean;
  triggeredAbandonmentEvent?: boolean;
}

export const GoogleCloudDialogflowV3alpha1TurnSignals: Schema.Schema<GoogleCloudDialogflowV3alpha1TurnSignals> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    failureReasons: Schema.optional(Schema.Array(Schema.String)),
    sentimentScore: Schema.optional(Schema.Number),
    webhookStatuses: Schema.optional(Schema.Array(Schema.String)),
    agentEscalated: Schema.optional(Schema.Boolean),
    noMatch: Schema.optional(Schema.Boolean),
    dtmfUsed: Schema.optional(Schema.Boolean),
    sentimentMagnitude: Schema.optional(Schema.Number),
    reachedEndPage: Schema.optional(Schema.Boolean),
    noUserInput: Schema.optional(Schema.Boolean),
    userEscalated: Schema.optional(Schema.Boolean),
    triggeredAbandonmentEvent: Schema.optional(Schema.Boolean),
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

export interface GoogleCloudDialogflowV2SuggestArticlesRequest {
  assistQueryParams?: GoogleCloudDialogflowV2AssistQueryParameters;
  contextSize?: number;
  latestMessage?: string;
}

export const GoogleCloudDialogflowV2SuggestArticlesRequest: Schema.Schema<GoogleCloudDialogflowV2SuggestArticlesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assistQueryParams: Schema.optional(
      GoogleCloudDialogflowV2AssistQueryParameters,
    ),
    contextSize: Schema.optional(Schema.Number),
    latestMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SuggestArticlesRequest" });

export interface GoogleCloudDialogflowV2BatchCreateEntitiesRequest {
  entities?: ReadonlyArray<GoogleCloudDialogflowV2EntityTypeEntity>;
  languageCode?: string;
}

export const GoogleCloudDialogflowV2BatchCreateEntitiesRequest: Schema.Schema<GoogleCloudDialogflowV2BatchCreateEntitiesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2EntityTypeEntity),
    ),
    languageCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2BatchCreateEntitiesRequest",
  });

export interface GoogleCloudDialogflowCxV3ExportTestCasesMetadata {}

export const GoogleCloudDialogflowCxV3ExportTestCasesMetadata: Schema.Schema<GoogleCloudDialogflowCxV3ExportTestCasesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ExportTestCasesMetadata",
  });

export interface GoogleCloudLocationLocation {
  displayName?: string;
  name?: string;
  labels?: Record<string, string>;
  locationId?: string;
  metadata?: Record<string, unknown>;
}

export const GoogleCloudLocationLocation: Schema.Schema<GoogleCloudLocationLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    locationId: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudLocationLocation" });

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

export interface GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig {
  testCases?: ReadonlyArray<string>;
  enableContinuousRun?: boolean;
  enablePredeploymentRun?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testCases: Schema.optional(Schema.Array(Schema.String)),
    enableContinuousRun: Schema.optional(Schema.Boolean),
    enablePredeploymentRun: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig",
  });

export interface GoogleCloudDialogflowV2GcsDestination {
  uri?: string;
}

export const GoogleCloudDialogflowV2GcsDestination: Schema.Schema<GoogleCloudDialogflowV2GcsDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2GcsDestination" });

export interface GoogleCloudDialogflowV2ToolExtensionTool {
  name?: string;
}

export const GoogleCloudDialogflowV2ToolExtensionTool: Schema.Schema<GoogleCloudDialogflowV2ToolExtensionTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolExtensionTool" });

export interface GoogleCloudDialogflowV2ToolAuthenticationBearerTokenConfig {
  token?: string;
  secretVersionForToken?: string;
}

export const GoogleCloudDialogflowV2ToolAuthenticationBearerTokenConfig: Schema.Schema<GoogleCloudDialogflowV2ToolAuthenticationBearerTokenConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String),
    secretVersionForToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ToolAuthenticationBearerTokenConfig",
  });

export interface GoogleCloudDialogflowV2ToolAuthenticationApiKeyConfig {
  requestLocation?:
    | "REQUEST_LOCATION_UNSPECIFIED"
    | "HEADER"
    | "QUERY_STRING"
    | (string & {});
  keyName?: string;
  apiKey?: string;
  secretVersionForApiKey?: string;
}

export const GoogleCloudDialogflowV2ToolAuthenticationApiKeyConfig: Schema.Schema<GoogleCloudDialogflowV2ToolAuthenticationApiKeyConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestLocation: Schema.optional(Schema.String),
    keyName: Schema.optional(Schema.String),
    apiKey: Schema.optional(Schema.String),
    secretVersionForApiKey: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ToolAuthenticationApiKeyConfig",
  });

export interface GoogleCloudDialogflowV2ToolAuthenticationOAuthConfig {
  clientId?: string;
  clientSecret?: string;
  scopes?: ReadonlyArray<string>;
  tokenEndpoint?: string;
  secretVersionForClientSecret?: string;
  oauthGrantType?:
    | "OAUTH_GRANT_TYPE_UNSPECIFIED"
    | "CLIENT_CREDENTIAL"
    | (string & {});
}

export const GoogleCloudDialogflowV2ToolAuthenticationOAuthConfig: Schema.Schema<GoogleCloudDialogflowV2ToolAuthenticationOAuthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientId: Schema.optional(Schema.String),
    clientSecret: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Schema.String)),
    tokenEndpoint: Schema.optional(Schema.String),
    secretVersionForClientSecret: Schema.optional(Schema.String),
    oauthGrantType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ToolAuthenticationOAuthConfig",
  });

export interface GoogleCloudDialogflowV2ToolAuthenticationServiceAgentAuthConfig {
  serviceAgentAuth?:
    | "SERVICE_AGENT_AUTH_UNSPECIFIED"
    | "ID_TOKEN"
    | "ACCESS_TOKEN"
    | (string & {});
}

export const GoogleCloudDialogflowV2ToolAuthenticationServiceAgentAuthConfig: Schema.Schema<GoogleCloudDialogflowV2ToolAuthenticationServiceAgentAuthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAgentAuth: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2ToolAuthenticationServiceAgentAuthConfig",
  });

export interface GoogleCloudDialogflowV2ToolAuthentication {
  bearerTokenConfig?: GoogleCloudDialogflowV2ToolAuthenticationBearerTokenConfig;
  apiKeyConfig?: GoogleCloudDialogflowV2ToolAuthenticationApiKeyConfig;
  oauthConfig?: GoogleCloudDialogflowV2ToolAuthenticationOAuthConfig;
  serviceAgentAuthConfig?: GoogleCloudDialogflowV2ToolAuthenticationServiceAgentAuthConfig;
}

export const GoogleCloudDialogflowV2ToolAuthentication: Schema.Schema<GoogleCloudDialogflowV2ToolAuthentication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bearerTokenConfig: Schema.optional(
      GoogleCloudDialogflowV2ToolAuthenticationBearerTokenConfig,
    ),
    apiKeyConfig: Schema.optional(
      GoogleCloudDialogflowV2ToolAuthenticationApiKeyConfig,
    ),
    oauthConfig: Schema.optional(
      GoogleCloudDialogflowV2ToolAuthenticationOAuthConfig,
    ),
    serviceAgentAuthConfig: Schema.optional(
      GoogleCloudDialogflowV2ToolAuthenticationServiceAgentAuthConfig,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolAuthentication" });

export interface GoogleCloudDialogflowV2ToolServiceDirectoryConfig {
  service?: string;
}

export const GoogleCloudDialogflowV2ToolServiceDirectoryConfig: Schema.Schema<GoogleCloudDialogflowV2ToolServiceDirectoryConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ToolServiceDirectoryConfig",
  });

export interface GoogleCloudDialogflowV2ToolOpenApiTool {
  authentication?: GoogleCloudDialogflowV2ToolAuthentication;
  textSchema?: string;
  tlsConfig?: GoogleCloudDialogflowV2ToolTLSConfig;
  serviceDirectoryConfig?: GoogleCloudDialogflowV2ToolServiceDirectoryConfig;
}

export const GoogleCloudDialogflowV2ToolOpenApiTool: Schema.Schema<GoogleCloudDialogflowV2ToolOpenApiTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authentication: Schema.optional(GoogleCloudDialogflowV2ToolAuthentication),
    textSchema: Schema.optional(Schema.String),
    tlsConfig: Schema.optional(GoogleCloudDialogflowV2ToolTLSConfig),
    serviceDirectoryConfig: Schema.optional(
      GoogleCloudDialogflowV2ToolServiceDirectoryConfig,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolOpenApiTool" });

export interface GoogleCloudDialogflowV2Tool {
  name?: string;
  updateTime?: string;
  displayName?: string;
  extensionSpec?: GoogleCloudDialogflowV2ToolExtensionTool;
  functionSpec?: GoogleCloudDialogflowV2ToolFunctionTool;
  description?: string;
  openApiSpec?: GoogleCloudDialogflowV2ToolOpenApiTool;
  toolKey?: string;
  satisfiesPzs?: boolean;
  satisfiesPzi?: boolean;
  connectorSpec?: GoogleCloudDialogflowV2ToolConnectorTool;
  actionConfirmationRequirement?: Record<
    string,
    | "CONFIRMATION_REQUIREMENT_UNSPECIFIED"
    | "REQUIRED"
    | "NOT_REQUIRED"
    | (string & {})
  >;
  createTime?: string;
}

export const GoogleCloudDialogflowV2Tool: Schema.Schema<GoogleCloudDialogflowV2Tool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    extensionSpec: Schema.optional(GoogleCloudDialogflowV2ToolExtensionTool),
    functionSpec: Schema.optional(GoogleCloudDialogflowV2ToolFunctionTool),
    description: Schema.optional(Schema.String),
    openApiSpec: Schema.optional(GoogleCloudDialogflowV2ToolOpenApiTool),
    toolKey: Schema.optional(Schema.String),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    satisfiesPzi: Schema.optional(Schema.Boolean),
    connectorSpec: Schema.optional(GoogleCloudDialogflowV2ToolConnectorTool),
    actionConfirmationRequirement: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Tool" });

export interface GoogleCloudDialogflowCxV3ExportIntentsResponse {
  intentsUri?: string;
  intentsContent?: GoogleCloudDialogflowCxV3InlineDestination;
}

export const GoogleCloudDialogflowCxV3ExportIntentsResponse: Schema.Schema<GoogleCloudDialogflowCxV3ExportIntentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intentsUri: Schema.optional(Schema.String),
    intentsContent: Schema.optional(GoogleCloudDialogflowCxV3InlineDestination),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ExportIntentsResponse" });

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

export interface GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpec {
  conditionBoostSpecs?: ReadonlyArray<GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpec>;
}

export const GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpec: Schema.Schema<GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditionBoostSpecs: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpec,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpec",
  });

export interface GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecs {
  dataStores?: ReadonlyArray<string>;
  spec?: ReadonlyArray<GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpec>;
}

export const GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecs: Schema.Schema<GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecs> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataStores: Schema.optional(Schema.Array(Schema.String)),
    spec: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpec,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecs",
  });

export interface GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigFilterSpecs {
  filter?: string;
  dataStores?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigFilterSpecs: Schema.Schema<GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigFilterSpecs> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String),
    dataStores: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigFilterSpecs",
  });

export interface GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfig {
  boostSpecs?: ReadonlyArray<GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecs>;
  filterSpecs?: ReadonlyArray<GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigFilterSpecs>;
}

export const GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfig: Schema.Schema<GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boostSpecs: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecs,
      ),
    ),
    filterSpecs: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigFilterSpecs,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfig",
  });

export interface GoogleCloudDialogflowV2SearchKnowledgeRequest {
  parent?: string;
  endUserMetadata?: Record<string, unknown>;
  exactSearch?: boolean;
  conversationProfile?: string;
  searchConfig?: GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfig;
  query?: GoogleCloudDialogflowV2TextInput;
  latestMessage?: string;
  querySource?:
    | "QUERY_SOURCE_UNSPECIFIED"
    | "AGENT_QUERY"
    | "SUGGESTED_QUERY"
    | (string & {});
  conversation?: string;
  sessionId?: string;
}

export const GoogleCloudDialogflowV2SearchKnowledgeRequest: Schema.Schema<GoogleCloudDialogflowV2SearchKnowledgeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.optional(Schema.String),
    endUserMetadata: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    exactSearch: Schema.optional(Schema.Boolean),
    conversationProfile: Schema.optional(Schema.String),
    searchConfig: Schema.optional(
      GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfig,
    ),
    query: Schema.optional(GoogleCloudDialogflowV2TextInput),
    latestMessage: Schema.optional(Schema.String),
    querySource: Schema.optional(Schema.String),
    conversation: Schema.optional(Schema.String),
    sessionId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SearchKnowledgeRequest" });

export interface GoogleCloudDialogflowCxV3ImportTestCasesResponse {
  names?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3ImportTestCasesResponse: Schema.Schema<GoogleCloudDialogflowCxV3ImportTestCasesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ImportTestCasesResponse",
  });

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

export interface GoogleCloudDialogflowV2ImportAgentRequest {
  agentUri?: string;
  agentContent?: string;
}

export const GoogleCloudDialogflowV2ImportAgentRequest: Schema.Schema<GoogleCloudDialogflowV2ImportAgentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentUri: Schema.optional(Schema.String),
    agentContent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ImportAgentRequest" });

export interface GoogleCloudDialogflowV2ExportAgentRequest {
  agentUri?: string;
}

export const GoogleCloudDialogflowV2ExportAgentRequest: Schema.Schema<GoogleCloudDialogflowV2ExportAgentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ExportAgentRequest" });

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
  satisfiesPzs?: boolean;
  name?: string;
  satisfiesPzi?: boolean;
  displayName?: string;
  languageCode?: string;
  smartReplyModelMetadata?: GoogleCloudDialogflowV2SmartReplyModelMetadata;
  articleSuggestionModelMetadata?: GoogleCloudDialogflowV2ArticleSuggestionModelMetadata;
  createTime?: string;
  datasets?: ReadonlyArray<GoogleCloudDialogflowV2InputDataset>;
}

export const GoogleCloudDialogflowV2ConversationModel: Schema.Schema<GoogleCloudDialogflowV2ConversationModel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    satisfiesPzi: Schema.optional(Schema.Boolean),
    displayName: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    smartReplyModelMetadata: Schema.optional(
      GoogleCloudDialogflowV2SmartReplyModelMetadata,
    ),
    articleSuggestionModelMetadata: Schema.optional(
      GoogleCloudDialogflowV2ArticleSuggestionModelMetadata,
    ),
    createTime: Schema.optional(Schema.String),
    datasets: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2InputDataset),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ConversationModel" });

export interface GoogleCloudDialogflowCxV3beta1TestConfig {
  flow?: string;
  page?: string;
  trackingParameters?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1TestConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1TestConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flow: Schema.optional(Schema.String),
    page: Schema.optional(Schema.String),
    trackingParameters: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TestConfig" });

export interface GoogleCloudDialogflowCxV3beta1TestCase {
  creationTime?: string;
  tags?: ReadonlyArray<string>;
  testCaseConversationTurns?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ConversationTurn>;
  notes?: string;
  displayName?: string;
  name?: string;
  testConfig?: GoogleCloudDialogflowCxV3beta1TestConfig;
  lastTestResult?: GoogleCloudDialogflowCxV3beta1TestCaseResult;
}

export const GoogleCloudDialogflowCxV3beta1TestCase: Schema.Schema<GoogleCloudDialogflowCxV3beta1TestCase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    creationTime: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.String)),
    testCaseConversationTurns: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ConversationTurn),
    ),
    notes: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    testConfig: Schema.optional(GoogleCloudDialogflowCxV3beta1TestConfig),
    lastTestResult: Schema.optional(
      GoogleCloudDialogflowCxV3beta1TestCaseResult,
    ),
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

export interface GoogleCloudDialogflowCxV3beta1ExportIntentsMetadata {}

export const GoogleCloudDialogflowCxV3beta1ExportIntentsMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportIntentsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportIntentsMetadata",
  });

export interface GoogleCloudDialogflowV2ConversationDataset {
  displayName?: string;
  description?: string;
  createTime?: string;
  inputConfig?: GoogleCloudDialogflowV2InputConfig;
  satisfiesPzs?: boolean;
  conversationCount?: string;
  name?: string;
  conversationInfo?: GoogleCloudDialogflowV2ConversationInfo;
  satisfiesPzi?: boolean;
}

export const GoogleCloudDialogflowV2ConversationDataset: Schema.Schema<GoogleCloudDialogflowV2ConversationDataset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    inputConfig: Schema.optional(GoogleCloudDialogflowV2InputConfig),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    conversationCount: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    conversationInfo: Schema.optional(GoogleCloudDialogflowV2ConversationInfo),
    satisfiesPzi: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ConversationDataset" });

export interface GoogleCloudDialogflowV2SuggestKnowledgeAssistRequest {
  contextSize?: number;
  previousSuggestedQuery?: string;
  latestMessage?: string;
}

export const GoogleCloudDialogflowV2SuggestKnowledgeAssistRequest: Schema.Schema<GoogleCloudDialogflowV2SuggestKnowledgeAssistRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contextSize: Schema.optional(Schema.Number),
    previousSuggestedQuery: Schema.optional(Schema.String),
    latestMessage: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SuggestKnowledgeAssistRequest",
  });

export interface GoogleCloudDialogflowV2ListToolsResponse {
  tools?: ReadonlyArray<GoogleCloudDialogflowV2Tool>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListToolsResponse: Schema.Schema<GoogleCloudDialogflowV2ListToolsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tools: Schema.optional(Schema.Array(GoogleCloudDialogflowV2Tool)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ListToolsResponse" });

export interface GoogleCloudDialogflowV2beta1BatchUpdateIntentsResponse {
  intents?: ReadonlyArray<GoogleCloudDialogflowV2beta1Intent>;
}

export const GoogleCloudDialogflowV2beta1BatchUpdateIntentsResponse: Schema.Schema<GoogleCloudDialogflowV2beta1BatchUpdateIntentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intents: Schema.optional(Schema.Array(GoogleCloudDialogflowV2beta1Intent)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1BatchUpdateIntentsResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1ImportIntentsMetadata {}

export const GoogleCloudDialogflowCxV3beta1ImportIntentsMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportIntentsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportIntentsMetadata",
  });

export interface GoogleCloudLocationListLocationsResponse {
  locations?: ReadonlyArray<GoogleCloudLocationLocation>;
  nextPageToken?: string;
}

export const GoogleCloudLocationListLocationsResponse: Schema.Schema<GoogleCloudLocationListLocationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locations: Schema.optional(Schema.Array(GoogleCloudLocationLocation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudLocationListLocationsResponse" });

export interface GoogleCloudDialogflowV2ExportDocumentRequest {
  gcsDestination?: GoogleCloudDialogflowV2GcsDestination;
  smartMessagingPartialUpdate?: boolean;
  exportFullContent?: boolean;
}

export const GoogleCloudDialogflowV2ExportDocumentRequest: Schema.Schema<GoogleCloudDialogflowV2ExportDocumentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsDestination: Schema.optional(GoogleCloudDialogflowV2GcsDestination),
    smartMessagingPartialUpdate: Schema.optional(Schema.Boolean),
    exportFullContent: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ExportDocumentRequest" });

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

export const GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    participantRole: Schema.optional(Schema.String),
    suggestionFeatureType: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    conversationProfile: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadata",
  });

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

export interface GoogleCloudDialogflowCxV3TurnSignals {
  noUserInput?: boolean;
  userEscalated?: boolean;
  reachedEndPage?: boolean;
  sentimentMagnitude?: number;
  noMatch?: boolean;
  dtmfUsed?: boolean;
  agentEscalated?: boolean;
  webhookStatuses?: ReadonlyArray<string>;
  failureReasons?: ReadonlyArray<
    | "FAILURE_REASON_UNSPECIFIED"
    | "FAILED_INTENT"
    | "FAILED_WEBHOOK"
    | (string & {})
  >;
  sentimentScore?: number;
}

export const GoogleCloudDialogflowCxV3TurnSignals: Schema.Schema<GoogleCloudDialogflowCxV3TurnSignals> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    noUserInput: Schema.optional(Schema.Boolean),
    userEscalated: Schema.optional(Schema.Boolean),
    reachedEndPage: Schema.optional(Schema.Boolean),
    sentimentMagnitude: Schema.optional(Schema.Number),
    noMatch: Schema.optional(Schema.Boolean),
    dtmfUsed: Schema.optional(Schema.Boolean),
    agentEscalated: Schema.optional(Schema.Boolean),
    webhookStatuses: Schema.optional(Schema.Array(Schema.String)),
    failureReasons: Schema.optional(Schema.Array(Schema.String)),
    sentimentScore: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TurnSignals" });

export interface GoogleCloudDialogflowCxV3ConversationSignals {
  turnSignals?: GoogleCloudDialogflowCxV3TurnSignals;
}

export const GoogleCloudDialogflowCxV3ConversationSignals: Schema.Schema<GoogleCloudDialogflowCxV3ConversationSignals> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    turnSignals: Schema.optional(GoogleCloudDialogflowCxV3TurnSignals),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ConversationSignals" });

export interface GoogleCloudDialogflowCxV3ExportEntityTypesMetadata {}

export const GoogleCloudDialogflowCxV3ExportEntityTypesMetadata: Schema.Schema<GoogleCloudDialogflowCxV3ExportEntityTypesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ExportEntityTypesMetadata",
  });

export interface GoogleCloudDialogflowV2ListMessagesResponse {
  messages?: ReadonlyArray<GoogleCloudDialogflowV2Message>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListMessagesResponse: Schema.Schema<GoogleCloudDialogflowV2ListMessagesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messages: Schema.optional(Schema.Array(GoogleCloudDialogflowV2Message)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ListMessagesResponse" });

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

export interface GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo {
  tag?: string;
}

export const GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo: Schema.Schema<GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tag: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo",
  });

export interface GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigOperationMetadata {
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

export const GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    participantRole: Schema.optional(Schema.String),
    suggestionFeatureType: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    conversationProfile: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigOperationMetadata",
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

export interface GoogleCloudDialogflowV2CompleteConversationRequest {}

export const GoogleCloudDialogflowV2CompleteConversationRequest: Schema.Schema<GoogleCloudDialogflowV2CompleteConversationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowV2CompleteConversationRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue {
  resolvedValue?: unknown;
  originalValue?: string;
}

export const GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue: Schema.Schema<GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resolvedValue: Schema.optional(Schema.Unknown),
    originalValue: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue",
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

export interface GoogleCloudDialogflowCxV3beta1LanguageInfo {
  inputLanguageCode?: string;
  resolvedLanguageCode?: string;
  confidenceScore?: number;
}

export const GoogleCloudDialogflowCxV3beta1LanguageInfo: Schema.Schema<GoogleCloudDialogflowCxV3beta1LanguageInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputLanguageCode: Schema.optional(Schema.String),
    resolvedLanguageCode: Schema.optional(Schema.String),
    confidenceScore: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1LanguageInfo" });

export interface GoogleCloudDialogflowCxV3beta1WebhookRequest {
  languageCode?: string;
  payload?: Record<string, unknown>;
  messages?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ResponseMessage>;
  sentimentAnalysisResult?: GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult;
  detectIntentResponseId?: string;
  intentInfo?: GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo;
  dtmfDigits?: string;
  text?: string;
  fulfillmentInfo?: GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo;
  languageInfo?: GoogleCloudDialogflowCxV3beta1LanguageInfo;
  sessionInfo?: GoogleCloudDialogflowCxV3beta1SessionInfo;
  transcript?: string;
  triggerEvent?: string;
  triggerIntent?: string;
  pageInfo?: GoogleCloudDialogflowCxV3beta1PageInfo;
}

export const GoogleCloudDialogflowCxV3beta1WebhookRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1WebhookRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ResponseMessage),
    ),
    sentimentAnalysisResult: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult,
    ),
    detectIntentResponseId: Schema.optional(Schema.String),
    intentInfo: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo,
    ),
    dtmfDigits: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
    fulfillmentInfo: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo,
    ),
    languageInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1LanguageInfo),
    sessionInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1SessionInfo),
    transcript: Schema.optional(Schema.String),
    triggerEvent: Schema.optional(Schema.String),
    triggerIntent: Schema.optional(Schema.String),
    pageInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1PageInfo),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1WebhookRequest" });

export interface GoogleCloudDialogflowV2beta1ImportDocumentsResponse {
  warnings?: ReadonlyArray<GoogleRpcStatus>;
}

export const GoogleCloudDialogflowV2beta1ImportDocumentsResponse: Schema.Schema<GoogleCloudDialogflowV2beta1ImportDocumentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    warnings: Schema.optional(Schema.Array(GoogleRpcStatus)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ImportDocumentsResponse",
  });

export interface GoogleCloudDialogflowV2BatchDeleteEntitiesRequest {
  languageCode?: string;
  entityValues?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2BatchDeleteEntitiesRequest: Schema.Schema<GoogleCloudDialogflowV2BatchDeleteEntitiesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    entityValues: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2BatchDeleteEntitiesRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportTestCasesResponse {
  gcsUri?: string;
  content?: string;
}

export const GoogleCloudDialogflowCxV3beta1ExportTestCasesResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportTestCasesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsUri: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportTestCasesResponse",
  });

export interface GoogleCloudDialogflowV2GenerateSuggestionsRequest {
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

export const GoogleCloudDialogflowV2GenerateSuggestionsRequest: Schema.Schema<GoogleCloudDialogflowV2GenerateSuggestionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestMessage: Schema.optional(Schema.String),
    triggerEvents: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2GenerateSuggestionsRequest",
  });

export interface GoogleCloudDialogflowV2CreateConversationModelEvaluationOperationMetadata {
  conversationModel?: string;
  state?:
    | "STATE_UNSPECIFIED"
    | "INITIALIZING"
    | "RUNNING"
    | "CANCELLED"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
  conversationModelEvaluation?: string;
  createTime?: string;
}

export const GoogleCloudDialogflowV2CreateConversationModelEvaluationOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2CreateConversationModelEvaluationOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationModel: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    conversationModelEvaluation: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2CreateConversationModelEvaluationOperationMetadata",
  });

export interface GoogleCloudDialogflowV2Document {
  metadata?: Record<string, string>;
  name?: string;
  rawContent?: string;
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "UPDATING"
    | "RELOADING"
    | "DELETING"
    | (string & {});
  mimeType?: string;
  contentUri?: string;
  enableAutoReload?: boolean;
  displayName?: string;
  latestReloadStatus?: GoogleCloudDialogflowV2DocumentReloadStatus;
  knowledgeTypes?: ReadonlyArray<
    | "KNOWLEDGE_TYPE_UNSPECIFIED"
    | "FAQ"
    | "EXTRACTIVE_QA"
    | "ARTICLE_SUGGESTION"
    | "AGENT_FACING_SMART_REPLY"
    | (string & {})
  >;
}

export const GoogleCloudDialogflowV2Document: Schema.Schema<GoogleCloudDialogflowV2Document> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    rawContent: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    mimeType: Schema.optional(Schema.String),
    contentUri: Schema.optional(Schema.String),
    enableAutoReload: Schema.optional(Schema.Boolean),
    displayName: Schema.optional(Schema.String),
    latestReloadStatus: Schema.optional(
      GoogleCloudDialogflowV2DocumentReloadStatus,
    ),
    knowledgeTypes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Document" });

export interface GoogleCloudDialogflowV2ListDocumentsResponse {
  documents?: ReadonlyArray<GoogleCloudDialogflowV2Document>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListDocumentsResponse: Schema.Schema<GoogleCloudDialogflowV2ListDocumentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    documents: Schema.optional(Schema.Array(GoogleCloudDialogflowV2Document)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ListDocumentsResponse" });

export interface GoogleCloudDialogflowV2ListConversationModelsResponse {
  conversationModels?: ReadonlyArray<GoogleCloudDialogflowV2ConversationModel>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListConversationModelsResponse: Schema.Schema<GoogleCloudDialogflowV2ListConversationModelsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationModels: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2ConversationModel),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ListConversationModelsResponse",
  });

export interface GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse {
  conversationModelEvaluations?: ReadonlyArray<GoogleCloudDialogflowV2ConversationModelEvaluation>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse: Schema.Schema<GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationModelEvaluations: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2ConversationModelEvaluation),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse",
  });

export interface GoogleCloudDialogflowV2AnswerFeedback {
  correctnessLevel?:
    | "CORRECTNESS_LEVEL_UNSPECIFIED"
    | "NOT_CORRECT"
    | "PARTIALLY_CORRECT"
    | "FULLY_CORRECT"
    | (string & {});
  clicked?: boolean;
  displayTime?: string;
  clickTime?: string;
  agentAssistantDetailFeedback?: GoogleCloudDialogflowV2AgentAssistantFeedback;
  displayed?: boolean;
}

export const GoogleCloudDialogflowV2AnswerFeedback: Schema.Schema<GoogleCloudDialogflowV2AnswerFeedback> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    correctnessLevel: Schema.optional(Schema.String),
    clicked: Schema.optional(Schema.Boolean),
    displayTime: Schema.optional(Schema.String),
    clickTime: Schema.optional(Schema.String),
    agentAssistantDetailFeedback: Schema.optional(
      GoogleCloudDialogflowV2AgentAssistantFeedback,
    ),
    displayed: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2AnswerFeedback" });

export interface GoogleCloudDialogflowV2AnswerRecord {
  name?: string;
  answerFeedback?: GoogleCloudDialogflowV2AnswerFeedback;
  agentAssistantRecord?: GoogleCloudDialogflowV2AgentAssistantRecord;
}

export const GoogleCloudDialogflowV2AnswerRecord: Schema.Schema<GoogleCloudDialogflowV2AnswerRecord> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    answerFeedback: Schema.optional(GoogleCloudDialogflowV2AnswerFeedback),
    agentAssistantRecord: Schema.optional(
      GoogleCloudDialogflowV2AgentAssistantRecord,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2AnswerRecord" });

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

export interface GoogleCloudDialogflowCxV3BatchRunTestCasesMetadata {
  errors?: ReadonlyArray<GoogleCloudDialogflowCxV3TestError>;
}

export const GoogleCloudDialogflowCxV3BatchRunTestCasesMetadata: Schema.Schema<GoogleCloudDialogflowCxV3BatchRunTestCasesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3TestError)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3BatchRunTestCasesMetadata",
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

export const GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    participantRole: Schema.optional(Schema.String),
    suggestionFeatureType: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    conversationProfile: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadata",
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

export const GoogleCloudDialogflowV2CreateConversationModelOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2CreateConversationModelOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    conversationModel: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    doneTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2CreateConversationModelOperationMetadata",
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

export interface GoogleLongrunningListOperationsResponse {
  operations?: ReadonlyArray<GoogleLongrunningOperation>;
  nextPageToken?: string;
  unreachable?: ReadonlyArray<string>;
}

export const GoogleLongrunningListOperationsResponse: Schema.Schema<GoogleLongrunningListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(GoogleLongrunningOperation)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleLongrunningListOperationsResponse" });

export interface GoogleCloudDialogflowV2BatchUpdateEntitiesRequest {
  updateMask?: string;
  entities?: ReadonlyArray<GoogleCloudDialogflowV2EntityTypeEntity>;
  languageCode?: string;
}

export const GoogleCloudDialogflowV2BatchUpdateEntitiesRequest: Schema.Schema<GoogleCloudDialogflowV2BatchUpdateEntitiesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String),
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2EntityTypeEntity),
    ),
    languageCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2BatchUpdateEntitiesRequest",
  });

export interface GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummarySummarySection {
  section?: string;
  summary?: string;
}

export const GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummarySummarySection: Schema.Schema<GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummarySummarySection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    section: Schema.optional(Schema.String),
    summary: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummarySummarySection",
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

export interface GoogleCloudDialogflowCxV3beta1RunTestCaseResponse {
  result?: GoogleCloudDialogflowCxV3beta1TestCaseResult;
}

export const GoogleCloudDialogflowCxV3beta1RunTestCaseResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1RunTestCaseResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.optional(GoogleCloudDialogflowCxV3beta1TestCaseResult),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RunTestCaseResponse",
  });

export interface GoogleCloudDialogflowV2ListConversationDatasetsResponse {
  nextPageToken?: string;
  conversationDatasets?: ReadonlyArray<GoogleCloudDialogflowV2ConversationDataset>;
}

export const GoogleCloudDialogflowV2ListConversationDatasetsResponse: Schema.Schema<GoogleCloudDialogflowV2ListConversationDatasetsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    conversationDatasets: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2ConversationDataset),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ListConversationDatasetsResponse",
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
  testCasesConfig?: GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig;
  versionConfigs?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig>;
  displayName?: string;
  name?: string;
  webhookConfig?: GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig;
}

export const GoogleCloudDialogflowCxV3beta1Environment: Schema.Schema<GoogleCloudDialogflowCxV3beta1Environment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    testCasesConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig,
    ),
    versionConfigs: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig),
    ),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    webhookConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Environment" });

export interface GoogleCloudDialogflowV2ListAnswerRecordsResponse {
  answerRecords?: ReadonlyArray<GoogleCloudDialogflowV2AnswerRecord>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListAnswerRecordsResponse: Schema.Schema<GoogleCloudDialogflowV2ListAnswerRecordsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answerRecords: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2AnswerRecord),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ListAnswerRecordsResponse",
  });

export interface GoogleCloudDialogflowV2beta1EntityType {
  enableFuzzyExtraction?: boolean;
  autoExpansionMode?:
    | "AUTO_EXPANSION_MODE_UNSPECIFIED"
    | "AUTO_EXPANSION_MODE_DEFAULT"
    | (string & {});
  entities?: ReadonlyArray<GoogleCloudDialogflowV2beta1EntityTypeEntity>;
  name?: string;
  kind?:
    | "KIND_UNSPECIFIED"
    | "KIND_MAP"
    | "KIND_LIST"
    | "KIND_REGEXP"
    | (string & {});
  displayName?: string;
}

export const GoogleCloudDialogflowV2beta1EntityType: Schema.Schema<GoogleCloudDialogflowV2beta1EntityType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableFuzzyExtraction: Schema.optional(Schema.Boolean),
    autoExpansionMode: Schema.optional(Schema.String),
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1EntityTypeEntity),
    ),
    name: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1EntityType" });

export interface GoogleCloudDialogflowCxV3WebhookResponse {
  fulfillmentResponse?: GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponse;
  pageInfo?: GoogleCloudDialogflowCxV3PageInfo;
  targetFlow?: string;
  payload?: Record<string, unknown>;
  targetPage?: string;
  sessionInfo?: GoogleCloudDialogflowCxV3SessionInfo;
}

export const GoogleCloudDialogflowCxV3WebhookResponse: Schema.Schema<GoogleCloudDialogflowCxV3WebhookResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fulfillmentResponse: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponse,
    ),
    pageInfo: Schema.optional(GoogleCloudDialogflowCxV3PageInfo),
    targetFlow: Schema.optional(Schema.String),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    targetPage: Schema.optional(Schema.String),
    sessionInfo: Schema.optional(GoogleCloudDialogflowCxV3SessionInfo),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3WebhookResponse" });

export interface GoogleCloudDialogflowV2ListConversationProfilesResponse {
  conversationProfiles?: ReadonlyArray<GoogleCloudDialogflowV2ConversationProfile>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListConversationProfilesResponse: Schema.Schema<GoogleCloudDialogflowV2ListConversationProfilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationProfiles: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2ConversationProfile),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ListConversationProfilesResponse",
  });

export interface GoogleCloudDialogflowV2DeleteConversationModelOperationMetadata {
  conversationModel?: string;
  doneTime?: string;
  createTime?: string;
}

export const GoogleCloudDialogflowV2DeleteConversationModelOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2DeleteConversationModelOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationModel: Schema.optional(Schema.String),
    doneTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2DeleteConversationModelOperationMetadata",
  });

export interface GoogleCloudDialogflowCxV3ExportAgentResponse {
  commitSha?: string;
  agentUri?: string;
  agentContent?: string;
}

export const GoogleCloudDialogflowCxV3ExportAgentResponse: Schema.Schema<GoogleCloudDialogflowCxV3ExportAgentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    commitSha: Schema.optional(Schema.String),
    agentUri: Schema.optional(Schema.String),
    agentContent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ExportAgentResponse" });

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

export interface GoogleCloudDialogflowCxV3RunTestCaseMetadata {}

export const GoogleCloudDialogflowCxV3RunTestCaseMetadata: Schema.Schema<GoogleCloudDialogflowCxV3RunTestCaseMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3RunTestCaseMetadata",
  });

export interface GoogleCloudDialogflowV2FulfillmentGenericWebService {
  username?: string;
  password?: string;
  isCloudFunction?: boolean;
  uri?: string;
  requestHeaders?: Record<string, string>;
}

export const GoogleCloudDialogflowV2FulfillmentGenericWebService: Schema.Schema<GoogleCloudDialogflowV2FulfillmentGenericWebService> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    isCloudFunction: Schema.optional(Schema.Boolean),
    uri: Schema.optional(Schema.String),
    requestHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2FulfillmentGenericWebService",
  });

export interface GoogleCloudDialogflowV2Fulfillment {
  name?: string;
  genericWebService?: GoogleCloudDialogflowV2FulfillmentGenericWebService;
  displayName?: string;
  enabled?: boolean;
  features?: ReadonlyArray<GoogleCloudDialogflowV2FulfillmentFeature>;
}

export const GoogleCloudDialogflowV2Fulfillment: Schema.Schema<GoogleCloudDialogflowV2Fulfillment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    genericWebService: Schema.optional(
      GoogleCloudDialogflowV2FulfillmentGenericWebService,
    ),
    displayName: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    features: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2FulfillmentFeature),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Fulfillment" });

export interface GoogleCloudDialogflowV2TextToSpeechSettings {
  enableTextToSpeech?: boolean;
  sampleRateHertz?: number;
  outputAudioEncoding?:
    | "OUTPUT_AUDIO_ENCODING_UNSPECIFIED"
    | "OUTPUT_AUDIO_ENCODING_LINEAR_16"
    | "OUTPUT_AUDIO_ENCODING_MP3"
    | "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS"
    | "OUTPUT_AUDIO_ENCODING_OGG_OPUS"
    | "OUTPUT_AUDIO_ENCODING_MULAW"
    | "OUTPUT_AUDIO_ENCODING_ALAW"
    | (string & {});
  synthesizeSpeechConfigs?: Record<
    string,
    GoogleCloudDialogflowV2SynthesizeSpeechConfig
  >;
}

export const GoogleCloudDialogflowV2TextToSpeechSettings: Schema.Schema<GoogleCloudDialogflowV2TextToSpeechSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableTextToSpeech: Schema.optional(Schema.Boolean),
    sampleRateHertz: Schema.optional(Schema.Number),
    outputAudioEncoding: Schema.optional(Schema.String),
    synthesizeSpeechConfigs: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowV2SynthesizeSpeechConfig,
      ),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2TextToSpeechSettings" });

export interface GoogleCloudDialogflowV2Environment {
  fulfillment?: GoogleCloudDialogflowV2Fulfillment;
  description?: string;
  updateTime?: string;
  textToSpeechSettings?: GoogleCloudDialogflowV2TextToSpeechSettings;
  name?: string;
  agentVersion?: string;
  state?:
    | "STATE_UNSPECIFIED"
    | "STOPPED"
    | "LOADING"
    | "RUNNING"
    | (string & {});
}

export const GoogleCloudDialogflowV2Environment: Schema.Schema<GoogleCloudDialogflowV2Environment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fulfillment: Schema.optional(GoogleCloudDialogflowV2Fulfillment),
    description: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    textToSpeechSettings: Schema.optional(
      GoogleCloudDialogflowV2TextToSpeechSettings,
    ),
    name: Schema.optional(Schema.String),
    agentVersion: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Environment" });

export interface GoogleCloudDialogflowV2ListEnvironmentsResponse {
  environments?: ReadonlyArray<GoogleCloudDialogflowV2Environment>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListEnvironmentsResponse: Schema.Schema<GoogleCloudDialogflowV2ListEnvironmentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    environments: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2Environment),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ListEnvironmentsResponse",
  });

export interface GoogleCloudDialogflowV2CreateConversationModelEvaluationRequest {
  conversationModelEvaluation?: GoogleCloudDialogflowV2ConversationModelEvaluation;
}

export const GoogleCloudDialogflowV2CreateConversationModelEvaluationRequest: Schema.Schema<GoogleCloudDialogflowV2CreateConversationModelEvaluationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationModelEvaluation: Schema.optional(
      GoogleCloudDialogflowV2ConversationModelEvaluation,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2CreateConversationModelEvaluationRequest",
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

export interface GoogleCloudDialogflowCxV3beta1ImportTestCasesResponse {
  names?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1ImportTestCasesResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportTestCasesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportTestCasesResponse",
  });

export interface GoogleCloudDialogflowV2BatchUpdateIntentsRequest {
  intentView?: "INTENT_VIEW_UNSPECIFIED" | "INTENT_VIEW_FULL" | (string & {});
  updateMask?: string;
  languageCode?: string;
  intentBatchInline?: GoogleCloudDialogflowV2IntentBatch;
  intentBatchUri?: string;
}

export const GoogleCloudDialogflowV2BatchUpdateIntentsRequest: Schema.Schema<GoogleCloudDialogflowV2BatchUpdateIntentsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intentView: Schema.optional(Schema.String),
    updateMask: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    intentBatchInline: Schema.optional(GoogleCloudDialogflowV2IntentBatch),
    intentBatchUri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2BatchUpdateIntentsRequest",
  });

export interface GoogleCloudDialogflowV2InitializeEncryptionSpecRequest {
  encryptionSpec?: GoogleCloudDialogflowV2EncryptionSpec;
}

export const GoogleCloudDialogflowV2InitializeEncryptionSpecRequest: Schema.Schema<GoogleCloudDialogflowV2InitializeEncryptionSpecRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    encryptionSpec: Schema.optional(GoogleCloudDialogflowV2EncryptionSpec),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2InitializeEncryptionSpecRequest",
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

export const GoogleCloudDialogflowV2SetSuggestionFeatureConfigOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2SetSuggestionFeatureConfigOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationProfile: Schema.optional(Schema.String),
    participantRole: Schema.optional(Schema.String),
    suggestionFeatureType: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SetSuggestionFeatureConfigOperationMetadata",
  });

export interface GoogleProtobufEmpty {}

export const GoogleProtobufEmpty: Schema.Schema<GoogleProtobufEmpty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleProtobufEmpty",
  });

export interface GoogleCloudDialogflowCxV3beta1ImportEntityTypesMetadata {}

export const GoogleCloudDialogflowCxV3beta1ImportEntityTypesMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportEntityTypesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportEntityTypesMetadata",
  });

export interface GoogleCloudDialogflowV2ListIntentsResponse {
  intents?: ReadonlyArray<GoogleCloudDialogflowV2Intent>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListIntentsResponse: Schema.Schema<GoogleCloudDialogflowV2ListIntentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intents: Schema.optional(Schema.Array(GoogleCloudDialogflowV2Intent)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ListIntentsResponse" });

export interface GoogleCloudDialogflowV2SuggestionInput {
  sendTime?: string;
  answerRecord?: string;
  parameters?: Record<string, unknown>;
  action?:
    | "ACTION_UNSPECIFIED"
    | "CANCEL"
    | "REVISE"
    | "CONFIRM"
    | (string & {});
}

export const GoogleCloudDialogflowV2SuggestionInput: Schema.Schema<GoogleCloudDialogflowV2SuggestionInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sendTime: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    action: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SuggestionInput" });

export interface GoogleCloudDialogflowCxV3RunContinuousTestMetadata {
  errors?: ReadonlyArray<GoogleCloudDialogflowCxV3TestError>;
}

export const GoogleCloudDialogflowCxV3RunContinuousTestMetadata: Schema.Schema<GoogleCloudDialogflowCxV3RunContinuousTestMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3TestError)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3RunContinuousTestMetadata",
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

export interface GoogleCloudDialogflowV2DeployConversationModelOperationMetadata {
  doneTime?: string;
  conversationModel?: string;
  createTime?: string;
}

export const GoogleCloudDialogflowV2DeployConversationModelOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2DeployConversationModelOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    doneTime: Schema.optional(Schema.String),
    conversationModel: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2DeployConversationModelOperationMetadata",
  });

export interface GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummary {
  text?: string;
  answerRecord?: string;
  sortedTextSections?: ReadonlyArray<GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummarySummarySection>;
  textSections?: Record<string, string>;
  baselineModelVersion?: string;
}

export const GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummary: Schema.Schema<GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    sortedTextSections: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummarySummarySection,
      ),
    ),
    textSections: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    baselineModelVersion: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummary",
  });

export interface GoogleCloudDialogflowV2SuggestConversationSummaryResponse {
  latestMessage?: string;
  summary?: GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummary;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2SuggestConversationSummaryResponse: Schema.Schema<GoogleCloudDialogflowV2SuggestConversationSummaryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestMessage: Schema.optional(Schema.String),
    summary: Schema.optional(
      GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummary,
    ),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SuggestConversationSummaryResponse",
  });

export interface GoogleCloudDialogflowV2ValidationError {
  entries?: ReadonlyArray<string>;
  errorMessage?: string;
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "INFO"
    | "WARNING"
    | "ERROR"
    | "CRITICAL"
    | (string & {});
}

export const GoogleCloudDialogflowV2ValidationError: Schema.Schema<GoogleCloudDialogflowV2ValidationError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(Schema.String)),
    errorMessage: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ValidationError" });

export interface GoogleCloudDialogflowV2ValidationResult {
  validationErrors?: ReadonlyArray<GoogleCloudDialogflowV2ValidationError>;
}

export const GoogleCloudDialogflowV2ValidationResult: Schema.Schema<GoogleCloudDialogflowV2ValidationResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validationErrors: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2ValidationError),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ValidationResult" });

export interface GoogleCloudDialogflowV2KnowledgeBase {
  name?: string;
  displayName?: string;
  languageCode?: string;
}

export const GoogleCloudDialogflowV2KnowledgeBase: Schema.Schema<GoogleCloudDialogflowV2KnowledgeBase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2KnowledgeBase" });

export interface GoogleCloudDialogflowV2UndeployConversationModelRequest {}

export const GoogleCloudDialogflowV2UndeployConversationModelRequest: Schema.Schema<GoogleCloudDialogflowV2UndeployConversationModelRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowV2UndeployConversationModelRequest",
  });

export interface GoogleCloudDialogflowV2ListGeneratorsResponse {
  generators?: ReadonlyArray<GoogleCloudDialogflowV2Generator>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListGeneratorsResponse: Schema.Schema<GoogleCloudDialogflowV2ListGeneratorsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generators: Schema.optional(Schema.Array(GoogleCloudDialogflowV2Generator)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ListGeneratorsResponse" });

export interface GoogleCloudDialogflowCxV3beta1ImportFlowResponse {
  flow?: string;
}

export const GoogleCloudDialogflowCxV3beta1ImportFlowResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportFlowResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flow: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportFlowResponse",
  });

export interface GoogleCloudDialogflowV2DeleteConversationDatasetOperationMetadata {}

export const GoogleCloudDialogflowV2DeleteConversationDatasetOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2DeleteConversationDatasetOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleCloudDialogflowV2DeleteConversationDatasetOperationMetadata",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata {
  exportOperationMetadata?: GoogleCloudDialogflowV2beta1ExportOperationMetadata;
  state?: "STATE_UNSPECIFIED" | "PENDING" | "RUNNING" | "DONE" | (string & {});
  knowledgeBase?: string;
  doneTime?: string;
}

export const GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exportOperationMetadata: Schema.optional(
      GoogleCloudDialogflowV2beta1ExportOperationMetadata,
    ),
    state: Schema.optional(Schema.String),
    knowledgeBase: Schema.optional(Schema.String),
    doneTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata",
  });

export interface GoogleCloudDialogflowV2Version {
  description?: string;
  status?:
    | "VERSION_STATUS_UNSPECIFIED"
    | "IN_PROGRESS"
    | "READY"
    | "FAILED"
    | (string & {});
  createTime?: string;
  versionNumber?: number;
  name?: string;
}

export const GoogleCloudDialogflowV2Version: Schema.Schema<GoogleCloudDialogflowV2Version> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    versionNumber: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Version" });

export interface GoogleCloudDialogflowV2ListEntityTypesResponse {
  entityTypes?: ReadonlyArray<GoogleCloudDialogflowV2EntityType>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListEntityTypesResponse: Schema.Schema<GoogleCloudDialogflowV2ListEntityTypesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2EntityType),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ListEntityTypesResponse" });

export interface GoogleCloudDialogflowCxV3beta1WebhookResponse {
  pageInfo?: GoogleCloudDialogflowCxV3beta1PageInfo;
  targetFlow?: string;
  fulfillmentResponse?: GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse;
  sessionInfo?: GoogleCloudDialogflowCxV3beta1SessionInfo;
  payload?: Record<string, unknown>;
  targetPage?: string;
}

export const GoogleCloudDialogflowCxV3beta1WebhookResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1WebhookResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1PageInfo),
    targetFlow: Schema.optional(Schema.String),
    fulfillmentResponse: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse,
    ),
    sessionInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1SessionInfo),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    targetPage: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1WebhookResponse" });

export interface GoogleCloudDialogflowV2ListContextsResponse {
  contexts?: ReadonlyArray<GoogleCloudDialogflowV2Context>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListContextsResponse: Schema.Schema<GoogleCloudDialogflowV2ListContextsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contexts: Schema.optional(Schema.Array(GoogleCloudDialogflowV2Context)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ListContextsResponse" });

export interface GoogleCloudDialogflowV2ListKnowledgeBasesResponse {
  knowledgeBases?: ReadonlyArray<GoogleCloudDialogflowV2KnowledgeBase>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListKnowledgeBasesResponse: Schema.Schema<GoogleCloudDialogflowV2ListKnowledgeBasesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    knowledgeBases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2KnowledgeBase),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ListKnowledgeBasesResponse",
  });

export interface GoogleCloudDialogflowV2HumanAgentAssistantEvent {
  suggestionResults?: ReadonlyArray<GoogleCloudDialogflowV2SuggestionResult>;
  conversation?: string;
  participant?: string;
}

export const GoogleCloudDialogflowV2HumanAgentAssistantEvent: Schema.Schema<GoogleCloudDialogflowV2HumanAgentAssistantEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suggestionResults: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SuggestionResult),
    ),
    conversation: Schema.optional(Schema.String),
    participant: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2HumanAgentAssistantEvent",
  });

export interface GoogleCloudDialogflowV2IngestContextReferencesResponse {
  ingestedContextReferences?: Record<
    string,
    GoogleCloudDialogflowV2ConversationContextReference
  >;
}

export const GoogleCloudDialogflowV2IngestContextReferencesResponse: Schema.Schema<GoogleCloudDialogflowV2IngestContextReferencesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ingestedContextReferences: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowV2ConversationContextReference,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IngestContextReferencesResponse",
  });

export interface GoogleCloudDialogflowV2ListParticipantsResponse {
  participants?: ReadonlyArray<GoogleCloudDialogflowV2Participant>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListParticipantsResponse: Schema.Schema<GoogleCloudDialogflowV2ListParticipantsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    participants: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2Participant),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ListParticipantsResponse",
  });

export interface GoogleCloudDialogflowCxV3ImportEntityTypesMetadata {}

export const GoogleCloudDialogflowCxV3ImportEntityTypesMetadata: Schema.Schema<GoogleCloudDialogflowCxV3ImportEntityTypesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ImportEntityTypesMetadata",
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

export interface GoogleCloudDialogflowV2ListVersionsResponse {
  nextPageToken?: string;
  versions?: ReadonlyArray<GoogleCloudDialogflowV2Version>;
}

export const GoogleCloudDialogflowV2ListVersionsResponse: Schema.Schema<GoogleCloudDialogflowV2ListVersionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    versions: Schema.optional(Schema.Array(GoogleCloudDialogflowV2Version)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ListVersionsResponse" });

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

export interface GoogleCloudDialogflowV2WebhookRequest {
  session?: string;
  queryResult?: GoogleCloudDialogflowV2QueryResult;
  originalDetectIntentRequest?: GoogleCloudDialogflowV2OriginalDetectIntentRequest;
  responseId?: string;
}

export const GoogleCloudDialogflowV2WebhookRequest: Schema.Schema<GoogleCloudDialogflowV2WebhookRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.optional(Schema.String),
    queryResult: Schema.optional(GoogleCloudDialogflowV2QueryResult),
    originalDetectIntentRequest: Schema.optional(
      GoogleCloudDialogflowV2OriginalDetectIntentRequest,
    ),
    responseId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2WebhookRequest" });

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

export interface GoogleCloudDialogflowV2ListSessionEntityTypesResponse {
  sessionEntityTypes?: ReadonlyArray<GoogleCloudDialogflowV2SessionEntityType>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListSessionEntityTypesResponse: Schema.Schema<GoogleCloudDialogflowV2ListSessionEntityTypesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionEntityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SessionEntityType),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ListSessionEntityTypesResponse",
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

export interface GoogleCloudDialogflowV2ExportAgentResponse {
  agentUri?: string;
  agentContent?: string;
}

export const GoogleCloudDialogflowV2ExportAgentResponse: Schema.Schema<GoogleCloudDialogflowV2ExportAgentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentUri: Schema.optional(Schema.String),
    agentContent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ExportAgentResponse" });

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
  conflictingResources?: GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResources;
  intents?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1ImportIntentsResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportIntentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conflictingResources: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResources,
    ),
    intents: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportIntentsResponse",
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

export interface GoogleCloudDialogflowV2beta1WebhookRequest {
  responseId?: string;
  queryResult?: GoogleCloudDialogflowV2beta1QueryResult;
  originalDetectIntentRequest?: GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest;
  session?: string;
  alternativeQueryResults?: ReadonlyArray<GoogleCloudDialogflowV2beta1QueryResult>;
}

export const GoogleCloudDialogflowV2beta1WebhookRequest: Schema.Schema<GoogleCloudDialogflowV2beta1WebhookRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responseId: Schema.optional(Schema.String),
    queryResult: Schema.optional(GoogleCloudDialogflowV2beta1QueryResult),
    originalDetectIntentRequest: Schema.optional(
      GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest,
    ),
    session: Schema.optional(Schema.String),
    alternativeQueryResults: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1QueryResult),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1WebhookRequest" });

export interface GoogleCloudDialogflowCxV3ImportFlowResponse {
  flow?: string;
}

export const GoogleCloudDialogflowCxV3ImportFlowResponse: Schema.Schema<GoogleCloudDialogflowCxV3ImportFlowResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flow: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ImportFlowResponse" });

export interface GoogleCloudDialogflowV2beta1WebhookResponse {
  fulfillmentText?: string;
  source?: string;
  sessionEntityTypes?: ReadonlyArray<GoogleCloudDialogflowV2beta1SessionEntityType>;
  followupEventInput?: GoogleCloudDialogflowV2beta1EventInput;
  fulfillmentMessages?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessage>;
  liveAgentHandoff?: boolean;
  payload?: Record<string, unknown>;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2beta1Context>;
  endInteraction?: boolean;
}

export const GoogleCloudDialogflowV2beta1WebhookResponse: Schema.Schema<GoogleCloudDialogflowV2beta1WebhookResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fulfillmentText: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    sessionEntityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SessionEntityType),
    ),
    followupEventInput: Schema.optional(GoogleCloudDialogflowV2beta1EventInput),
    fulfillmentMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessage),
    ),
    liveAgentHandoff: Schema.optional(Schema.Boolean),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1Context),
    ),
    endInteraction: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1WebhookResponse" });

export interface GoogleCloudDialogflowV2GenerateStatelessSuggestionRequest {
  generatorName?: string;
  generator?: GoogleCloudDialogflowV2Generator;
  contextReferences?: Record<
    string,
    GoogleCloudDialogflowV2ConversationContextReference
  >;
  conversationContext?: GoogleCloudDialogflowV2ConversationContext;
  triggerEvents?: ReadonlyArray<
    | "TRIGGER_EVENT_UNSPECIFIED"
    | "END_OF_UTTERANCE"
    | "MANUAL_CALL"
    | "CUSTOMER_MESSAGE"
    | "AGENT_MESSAGE"
    | (string & {})
  >;
  securitySettings?: string;
}

export const GoogleCloudDialogflowV2GenerateStatelessSuggestionRequest: Schema.Schema<GoogleCloudDialogflowV2GenerateStatelessSuggestionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generatorName: Schema.optional(Schema.String),
    generator: Schema.optional(GoogleCloudDialogflowV2Generator),
    contextReferences: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowV2ConversationContextReference,
      ),
    ),
    conversationContext: Schema.optional(
      GoogleCloudDialogflowV2ConversationContext,
    ),
    triggerEvents: Schema.optional(Schema.Array(Schema.String)),
    securitySettings: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2GenerateStatelessSuggestionRequest",
  });

export interface GoogleCloudDialogflowV2ImportConversationDataRequest {
  inputConfig?: GoogleCloudDialogflowV2InputConfig;
}

export const GoogleCloudDialogflowV2ImportConversationDataRequest: Schema.Schema<GoogleCloudDialogflowV2ImportConversationDataRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputConfig: Schema.optional(GoogleCloudDialogflowV2InputConfig),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ImportConversationDataRequest",
  });

export interface GoogleCloudDialogflowV2BatchDeleteIntentsRequest {
  intents?: ReadonlyArray<GoogleCloudDialogflowV2Intent>;
}

export const GoogleCloudDialogflowV2BatchDeleteIntentsRequest: Schema.Schema<GoogleCloudDialogflowV2BatchDeleteIntentsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intents: Schema.optional(Schema.Array(GoogleCloudDialogflowV2Intent)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2BatchDeleteIntentsRequest",
  });

export interface GoogleCloudDialogflowV2KnowledgeOperationMetadata {
  exportOperationMetadata?: GoogleCloudDialogflowV2ExportOperationMetadata;
  knowledgeBase?: string;
  doneTime?: string;
  state?: "STATE_UNSPECIFIED" | "PENDING" | "RUNNING" | "DONE" | (string & {});
}

export const GoogleCloudDialogflowV2KnowledgeOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2KnowledgeOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exportOperationMetadata: Schema.optional(
      GoogleCloudDialogflowV2ExportOperationMetadata,
    ),
    knowledgeBase: Schema.optional(Schema.String),
    doneTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2KnowledgeOperationMetadata",
  });

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

export interface GoogleCloudDialogflowV2AnalyzeContentRequest {
  cxParameters?: Record<string, unknown>;
  textInput?: GoogleCloudDialogflowV2TextInput;
  suggestionInput?: GoogleCloudDialogflowV2SuggestionInput;
  replyAudioConfig?: GoogleCloudDialogflowV2OutputAudioConfig;
  assistQueryParams?: GoogleCloudDialogflowV2AssistQueryParameters;
  eventInput?: GoogleCloudDialogflowV2EventInput;
  audioInput?: GoogleCloudDialogflowV2AudioInput;
  requestId?: string;
  queryParams?: GoogleCloudDialogflowV2QueryParameters;
}

export const GoogleCloudDialogflowV2AnalyzeContentRequest: Schema.Schema<GoogleCloudDialogflowV2AnalyzeContentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cxParameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    textInput: Schema.optional(GoogleCloudDialogflowV2TextInput),
    suggestionInput: Schema.optional(GoogleCloudDialogflowV2SuggestionInput),
    replyAudioConfig: Schema.optional(GoogleCloudDialogflowV2OutputAudioConfig),
    assistQueryParams: Schema.optional(
      GoogleCloudDialogflowV2AssistQueryParameters,
    ),
    eventInput: Schema.optional(GoogleCloudDialogflowV2EventInput),
    audioInput: Schema.optional(GoogleCloudDialogflowV2AudioInput),
    requestId: Schema.optional(Schema.String),
    queryParams: Schema.optional(GoogleCloudDialogflowV2QueryParameters),
  }).annotate({ identifier: "GoogleCloudDialogflowV2AnalyzeContentRequest" });

export interface GoogleCloudDialogflowV2SuggestConversationSummaryRequest {
  latestMessage?: string;
  assistQueryParams?: GoogleCloudDialogflowV2AssistQueryParameters;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2SuggestConversationSummaryRequest: Schema.Schema<GoogleCloudDialogflowV2SuggestConversationSummaryRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestMessage: Schema.optional(Schema.String),
    assistQueryParams: Schema.optional(
      GoogleCloudDialogflowV2AssistQueryParameters,
    ),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SuggestConversationSummaryRequest",
  });

export interface GoogleCloudDialogflowV2GenerateStatelessSuggestionResponse {
  generatorSuggestion?: GoogleCloudDialogflowV2GeneratorSuggestion;
}

export const GoogleCloudDialogflowV2GenerateStatelessSuggestionResponse: Schema.Schema<GoogleCloudDialogflowV2GenerateStatelessSuggestionResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generatorSuggestion: Schema.optional(
      GoogleCloudDialogflowV2GeneratorSuggestion,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2GenerateStatelessSuggestionResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportTestCasesMetadata {}

export const GoogleCloudDialogflowCxV3beta1ExportTestCasesMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportTestCasesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportTestCasesMetadata",
  });

export interface GoogleCloudDialogflowCxV3CreateVersionOperationMetadata {
  version?: string;
}

export const GoogleCloudDialogflowCxV3CreateVersionOperationMetadata: Schema.Schema<GoogleCloudDialogflowCxV3CreateVersionOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3CreateVersionOperationMetadata",
  });

export interface GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest {
  entityTypeNames?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest: Schema.Schema<GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypeNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest",
  });

export interface GoogleCloudDialogflowCxV3ImportIntentsMetadata {}

export const GoogleCloudDialogflowCxV3ImportIntentsMetadata: Schema.Schema<GoogleCloudDialogflowCxV3ImportIntentsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ImportIntentsMetadata",
  });

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

export interface GoogleCloudDialogflowV2ImportDocumentsResponse {
  warnings?: ReadonlyArray<GoogleRpcStatus>;
}

export const GoogleCloudDialogflowV2ImportDocumentsResponse: Schema.Schema<GoogleCloudDialogflowV2ImportDocumentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    warnings: Schema.optional(Schema.Array(GoogleRpcStatus)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ImportDocumentsResponse" });

export interface GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata {
  version?: string;
}

export const GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata",
  });

export interface GoogleCloudDialogflowCxV3DeployFlowMetadata {
  testErrors?: ReadonlyArray<GoogleCloudDialogflowCxV3TestError>;
}

export const GoogleCloudDialogflowCxV3DeployFlowMetadata: Schema.Schema<GoogleCloudDialogflowCxV3DeployFlowMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testErrors: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3TestError),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3DeployFlowMetadata" });

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

export interface SetAgentProjectsRequest {
  parent: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Agent;
}

export const SetAgentProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2Agent).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/agent", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SetAgentProjectsRequest>;

export type SetAgentProjectsResponse = GoogleCloudDialogflowV2Agent;
export const SetAgentProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Agent;

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

export interface GetAgentProjectsRequest {
  parent: string;
}

export const GetAgentProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/agent" }),
    svc,
  ) as unknown as Schema.Schema<GetAgentProjectsRequest>;

export type GetAgentProjectsResponse = GoogleCloudDialogflowV2Agent;
export const GetAgentProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Agent;

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
    T.Http({ method: "DELETE", path: "v2/{+parent}/agent" }),
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

export interface GetProjectsConversationDatasetsRequest {
  name: string;
}

export const GetProjectsConversationDatasetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsConversationDatasetsRequest>;

export type GetProjectsConversationDatasetsResponse =
  GoogleCloudDialogflowV2ConversationDataset;
export const GetProjectsConversationDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ConversationDataset;

export type GetProjectsConversationDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsConversationDatasets: API.OperationMethod<
  GetProjectsConversationDatasetsRequest,
  GetProjectsConversationDatasetsResponse,
  GetProjectsConversationDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsConversationDatasetsRequest,
  output: GetProjectsConversationDatasetsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsConversationDatasetsRequest {
  pageSize?: number;
  pageToken?: string;
  parent: string;
}

export const ListProjectsConversationDatasetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/conversationDatasets" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsConversationDatasetsRequest>;

export type ListProjectsConversationDatasetsResponse =
  GoogleCloudDialogflowV2ListConversationDatasetsResponse;
export const ListProjectsConversationDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListConversationDatasetsResponse;

export type ListProjectsConversationDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsConversationDatasets: API.PaginatedOperationMethod<
  ListProjectsConversationDatasetsRequest,
  ListProjectsConversationDatasetsResponse,
  ListProjectsConversationDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsConversationDatasetsRequest,
  output: ListProjectsConversationDatasetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ImportConversationDataProjectsConversationDatasetsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2ImportConversationDataRequest;
}

export const ImportConversationDataProjectsConversationDatasetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowV2ImportConversationDataRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+name}:importConversationData",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ImportConversationDataProjectsConversationDatasetsRequest>;

export type ImportConversationDataProjectsConversationDatasetsResponse =
  GoogleLongrunningOperation;
export const ImportConversationDataProjectsConversationDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ImportConversationDataProjectsConversationDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const importConversationDataProjectsConversationDatasets: API.OperationMethod<
  ImportConversationDataProjectsConversationDatasetsRequest,
  ImportConversationDataProjectsConversationDatasetsResponse,
  ImportConversationDataProjectsConversationDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportConversationDataProjectsConversationDatasetsRequest,
  output: ImportConversationDataProjectsConversationDatasetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsConversationProfilesRequest {
  name: string;
}

export const DeleteProjectsConversationProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
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

export interface ClearSuggestionFeatureConfigProjectsConversationProfilesRequest {
  conversationProfile: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequest;
}

export const ClearSuggestionFeatureConfigProjectsConversationProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationProfile: Schema.String.pipe(T.HttpPath("conversationProfile")),
    body: Schema.optional(
      GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+conversationProfile}:clearSuggestionFeatureConfig",
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
  body?: GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequest;
}

export const SetSuggestionFeatureConfigProjectsConversationProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationProfile: Schema.String.pipe(T.HttpPath("conversationProfile")),
    body: Schema.optional(
      GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+conversationProfile}:setSuggestionFeatureConfig",
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

export interface CreateProjectsConversationProfilesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2ConversationProfile;
}

export const CreateProjectsConversationProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2ConversationProfile).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/conversationProfiles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsConversationProfilesRequest>;

export type CreateProjectsConversationProfilesResponse =
  GoogleCloudDialogflowV2ConversationProfile;
export const CreateProjectsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ConversationProfile;

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
    T.Http({ method: "GET", path: "v2/{+parent}/conversationProfiles" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsConversationProfilesRequest>;

export type ListProjectsConversationProfilesResponse =
  GoogleCloudDialogflowV2ListConversationProfilesResponse;
export const ListProjectsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListConversationProfilesResponse;

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

export interface GetProjectsConversationProfilesRequest {
  name: string;
}

export const GetProjectsConversationProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsConversationProfilesRequest>;

export type GetProjectsConversationProfilesResponse =
  GoogleCloudDialogflowV2ConversationProfile;
export const GetProjectsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ConversationProfile;

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

export interface PatchProjectsConversationProfilesRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2ConversationProfile;
}

export const PatchProjectsConversationProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2ConversationProfile).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsConversationProfilesRequest>;

export type PatchProjectsConversationProfilesResponse =
  GoogleCloudDialogflowV2ConversationProfile;
export const PatchProjectsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ConversationProfile;

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

export interface CreateProjectsKnowledgeBasesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2KnowledgeBase;
}

export const CreateProjectsKnowledgeBasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2KnowledgeBase).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/knowledgeBases",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsKnowledgeBasesRequest>;

export type CreateProjectsKnowledgeBasesResponse =
  GoogleCloudDialogflowV2KnowledgeBase;
export const CreateProjectsKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2KnowledgeBase;

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

export interface ListProjectsKnowledgeBasesRequest {
  parent: string;
  filter?: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsKnowledgeBasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/knowledgeBases" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsKnowledgeBasesRequest>;

export type ListProjectsKnowledgeBasesResponse =
  GoogleCloudDialogflowV2ListKnowledgeBasesResponse;
export const ListProjectsKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListKnowledgeBasesResponse;

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

export interface GetProjectsKnowledgeBasesRequest {
  name: string;
}

export const GetProjectsKnowledgeBasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsKnowledgeBasesRequest>;

export type GetProjectsKnowledgeBasesResponse =
  GoogleCloudDialogflowV2KnowledgeBase;
export const GetProjectsKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2KnowledgeBase;

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

export interface PatchProjectsKnowledgeBasesRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2KnowledgeBase;
}

export const PatchProjectsKnowledgeBasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2KnowledgeBase).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsKnowledgeBasesRequest>;

export type PatchProjectsKnowledgeBasesResponse =
  GoogleCloudDialogflowV2KnowledgeBase;
export const PatchProjectsKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2KnowledgeBase;

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

export interface DeleteProjectsKnowledgeBasesRequest {
  name: string;
  force?: boolean;
}

export const DeleteProjectsKnowledgeBasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
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

export interface ExportProjectsKnowledgeBasesDocumentsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2ExportDocumentRequest;
}

export const ExportProjectsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2ExportDocumentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+name}:export", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ExportProjectsKnowledgeBasesDocumentsRequest>;

export type ExportProjectsKnowledgeBasesDocumentsResponse =
  GoogleLongrunningOperation;
export const ExportProjectsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ExportProjectsKnowledgeBasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const exportProjectsKnowledgeBasesDocuments: API.OperationMethod<
  ExportProjectsKnowledgeBasesDocumentsRequest,
  ExportProjectsKnowledgeBasesDocumentsResponse,
  ExportProjectsKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportProjectsKnowledgeBasesDocumentsRequest,
  output: ExportProjectsKnowledgeBasesDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsKnowledgeBasesDocumentsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Document;
}

export const CreateProjectsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2Document).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/documents", hasBody: true }),
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

export interface ListProjectsKnowledgeBasesDocumentsRequest {
  pageSize?: number;
  pageToken?: string;
  parent: string;
  filter?: string;
}

export const ListProjectsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/documents" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsKnowledgeBasesDocumentsRequest>;

export type ListProjectsKnowledgeBasesDocumentsResponse =
  GoogleCloudDialogflowV2ListDocumentsResponse;
export const ListProjectsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListDocumentsResponse;

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

export interface GetProjectsKnowledgeBasesDocumentsRequest {
  name: string;
}

export const GetProjectsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsKnowledgeBasesDocumentsRequest>;

export type GetProjectsKnowledgeBasesDocumentsResponse =
  GoogleCloudDialogflowV2Document;
export const GetProjectsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Document;

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

export interface PatchProjectsKnowledgeBasesDocumentsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Document;
}

export const PatchProjectsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2Document).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
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

export interface ImportProjectsKnowledgeBasesDocumentsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2ImportDocumentsRequest;
}

export const ImportProjectsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2ImportDocumentsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/documents:import",
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

export interface ReloadProjectsKnowledgeBasesDocumentsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2ReloadDocumentRequest;
}

export const ReloadProjectsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2ReloadDocumentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+name}:reload", hasBody: true }),
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

export interface DeleteProjectsKnowledgeBasesDocumentsRequest {
  name: string;
}

export const DeleteProjectsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
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

export interface GetAgentProjectsLocationsRequest {
  parent: string;
}

export const GetAgentProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/agent" }),
    svc,
  ) as unknown as Schema.Schema<GetAgentProjectsLocationsRequest>;

export type GetAgentProjectsLocationsResponse = GoogleCloudDialogflowV2Agent;
export const GetAgentProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Agent;

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

export interface DeleteAgentProjectsLocationsRequest {
  parent: string;
}

export const DeleteAgentProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+parent}/agent" }),
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

export interface GetEncryptionSpecProjectsLocationsRequest {
  name: string;
}

export const GetEncryptionSpecProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetEncryptionSpecProjectsLocationsRequest>;

export type GetEncryptionSpecProjectsLocationsResponse =
  GoogleCloudDialogflowV2EncryptionSpec;
export const GetEncryptionSpecProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2EncryptionSpec;

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

export interface ListProjectsLocationsRequest {
  pageToken?: string;
  filter?: string;
  pageSize?: number;
  extraLocationTypes?: string[];
  name: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}/locations" }),
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

export interface GetProjectsLocationsRequest {
  name: string;
}

export const GetProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
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
  body?: GoogleCloudDialogflowV2Agent;
}

export const SetAgentProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2Agent).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/agent", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SetAgentProjectsLocationsRequest>;

export type SetAgentProjectsLocationsResponse = GoogleCloudDialogflowV2Agent;
export const SetAgentProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Agent;

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

export interface DeleteProjectsLocationsConversationModelsRequest {
  name: string;
}

export const DeleteProjectsLocationsConversationModelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsConversationModelsRequest>;

export type DeleteProjectsLocationsConversationModelsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsConversationModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsConversationModelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsConversationModels: API.OperationMethod<
  DeleteProjectsLocationsConversationModelsRequest,
  DeleteProjectsLocationsConversationModelsResponse,
  DeleteProjectsLocationsConversationModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsConversationModelsRequest,
  output: DeleteProjectsLocationsConversationModelsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeployProjectsLocationsConversationModelsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2DeployConversationModelRequest;
}

export const DeployProjectsLocationsConversationModelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowV2DeployConversationModelRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+name}:deploy", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<DeployProjectsLocationsConversationModelsRequest>;

export type DeployProjectsLocationsConversationModelsResponse =
  GoogleLongrunningOperation;
export const DeployProjectsLocationsConversationModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeployProjectsLocationsConversationModelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deployProjectsLocationsConversationModels: API.OperationMethod<
  DeployProjectsLocationsConversationModelsRequest,
  DeployProjectsLocationsConversationModelsResponse,
  DeployProjectsLocationsConversationModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeployProjectsLocationsConversationModelsRequest,
  output: DeployProjectsLocationsConversationModelsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UndeployProjectsLocationsConversationModelsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2UndeployConversationModelRequest;
}

export const UndeployProjectsLocationsConversationModelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowV2UndeployConversationModelRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+name}:undeploy", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UndeployProjectsLocationsConversationModelsRequest>;

export type UndeployProjectsLocationsConversationModelsResponse =
  GoogleLongrunningOperation;
export const UndeployProjectsLocationsConversationModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type UndeployProjectsLocationsConversationModelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const undeployProjectsLocationsConversationModels: API.OperationMethod<
  UndeployProjectsLocationsConversationModelsRequest,
  UndeployProjectsLocationsConversationModelsResponse,
  UndeployProjectsLocationsConversationModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UndeployProjectsLocationsConversationModelsRequest,
  output: UndeployProjectsLocationsConversationModelsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsConversationModelsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2ConversationModel;
}

export const CreateProjectsLocationsConversationModelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2ConversationModel).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/conversationModels",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConversationModelsRequest>;

export type CreateProjectsLocationsConversationModelsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsConversationModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsConversationModelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsConversationModels: API.OperationMethod<
  CreateProjectsLocationsConversationModelsRequest,
  CreateProjectsLocationsConversationModelsResponse,
  CreateProjectsLocationsConversationModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsConversationModelsRequest,
  output: CreateProjectsLocationsConversationModelsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsConversationModelsRequest {
  name: string;
}

export const GetProjectsLocationsConversationModelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConversationModelsRequest>;

export type GetProjectsLocationsConversationModelsResponse =
  GoogleCloudDialogflowV2ConversationModel;
export const GetProjectsLocationsConversationModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ConversationModel;

export type GetProjectsLocationsConversationModelsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsConversationModels: API.OperationMethod<
  GetProjectsLocationsConversationModelsRequest,
  GetProjectsLocationsConversationModelsResponse,
  GetProjectsLocationsConversationModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConversationModelsRequest,
  output: GetProjectsLocationsConversationModelsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsConversationModelsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsConversationModelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/conversationModels" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConversationModelsRequest>;

export type ListProjectsLocationsConversationModelsResponse =
  GoogleCloudDialogflowV2ListConversationModelsResponse;
export const ListProjectsLocationsConversationModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListConversationModelsResponse;

export type ListProjectsLocationsConversationModelsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsConversationModels: API.PaginatedOperationMethod<
  ListProjectsLocationsConversationModelsRequest,
  ListProjectsLocationsConversationModelsResponse,
  ListProjectsLocationsConversationModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConversationModelsRequest,
  output: ListProjectsLocationsConversationModelsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsConversationModelsEvaluationsRequest {
  name: string;
}

export const GetProjectsLocationsConversationModelsEvaluationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConversationModelsEvaluationsRequest>;

export type GetProjectsLocationsConversationModelsEvaluationsResponse =
  GoogleCloudDialogflowV2ConversationModelEvaluation;
export const GetProjectsLocationsConversationModelsEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ConversationModelEvaluation;

export type GetProjectsLocationsConversationModelsEvaluationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsConversationModelsEvaluations: API.OperationMethod<
  GetProjectsLocationsConversationModelsEvaluationsRequest,
  GetProjectsLocationsConversationModelsEvaluationsResponse,
  GetProjectsLocationsConversationModelsEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConversationModelsEvaluationsRequest,
  output: GetProjectsLocationsConversationModelsEvaluationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsConversationModelsEvaluationsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsConversationModelsEvaluationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/evaluations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConversationModelsEvaluationsRequest>;

export type ListProjectsLocationsConversationModelsEvaluationsResponse =
  GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse;
export const ListProjectsLocationsConversationModelsEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse;

export type ListProjectsLocationsConversationModelsEvaluationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsConversationModelsEvaluations: API.PaginatedOperationMethod<
  ListProjectsLocationsConversationModelsEvaluationsRequest,
  ListProjectsLocationsConversationModelsEvaluationsResponse,
  ListProjectsLocationsConversationModelsEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConversationModelsEvaluationsRequest,
  output: ListProjectsLocationsConversationModelsEvaluationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsConversationModelsEvaluationsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2CreateConversationModelEvaluationRequest;
}

export const CreateProjectsLocationsConversationModelsEvaluationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2CreateConversationModelEvaluationRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/evaluations", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConversationModelsEvaluationsRequest>;

export type CreateProjectsLocationsConversationModelsEvaluationsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsConversationModelsEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsConversationModelsEvaluationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsConversationModelsEvaluations: API.OperationMethod<
  CreateProjectsLocationsConversationModelsEvaluationsRequest,
  CreateProjectsLocationsConversationModelsEvaluationsResponse,
  CreateProjectsLocationsConversationModelsEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsConversationModelsEvaluationsRequest,
  output: CreateProjectsLocationsConversationModelsEvaluationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SearchKnowledgeProjectsLocationsSuggestionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2SearchKnowledgeRequest;
}

export const SearchKnowledgeProjectsLocationsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2SearchKnowledgeRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/suggestions:searchKnowledge",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SearchKnowledgeProjectsLocationsSuggestionsRequest>;

export type SearchKnowledgeProjectsLocationsSuggestionsResponse =
  GoogleCloudDialogflowV2SearchKnowledgeResponse;
export const SearchKnowledgeProjectsLocationsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SearchKnowledgeResponse;

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

export interface GenerateStatelessSummaryProjectsLocationsSuggestionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2GenerateStatelessSummaryRequest;
}

export const GenerateStatelessSummaryProjectsLocationsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2GenerateStatelessSummaryRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/suggestions:generateStatelessSummary",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateStatelessSummaryProjectsLocationsSuggestionsRequest>;

export type GenerateStatelessSummaryProjectsLocationsSuggestionsResponse =
  GoogleCloudDialogflowV2GenerateStatelessSummaryResponse;
export const GenerateStatelessSummaryProjectsLocationsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2GenerateStatelessSummaryResponse;

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

export interface ListProjectsLocationsOperationsRequest {
  name: string;
  pageSize?: number;
  filter?: string;
  pageToken?: string;
  returnPartialSuccess?: boolean;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}/operations" }),
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
    T.Http({ method: "GET", path: "v2/{+name}" }),
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
    T.Http({ method: "POST", path: "v2/{+name}:cancel", hasBody: true }),
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

export interface UpdateFulfillmentProjectsLocationsAgentRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Fulfillment;
}

export const UpdateFulfillmentProjectsLocationsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2Fulfillment).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateFulfillmentProjectsLocationsAgentRequest>;

export type UpdateFulfillmentProjectsLocationsAgentResponse =
  GoogleCloudDialogflowV2Fulfillment;
export const UpdateFulfillmentProjectsLocationsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Fulfillment;

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

export interface TrainProjectsLocationsAgentRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2TrainAgentRequest;
}

export const TrainProjectsLocationsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2TrainAgentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/agent:train", hasBody: true }),
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

export interface ExportProjectsLocationsAgentRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2ExportAgentRequest;
}

export const ExportProjectsLocationsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2ExportAgentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/agent:export",
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
    T.Http({ method: "GET", path: "v2/{+parent}/agent/validationResult" }),
    svc,
  ) as unknown as Schema.Schema<GetValidationResultProjectsLocationsAgentRequest>;

export type GetValidationResultProjectsLocationsAgentResponse =
  GoogleCloudDialogflowV2ValidationResult;
export const GetValidationResultProjectsLocationsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ValidationResult;

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

export interface GetFulfillmentProjectsLocationsAgentRequest {
  name: string;
}

export const GetFulfillmentProjectsLocationsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetFulfillmentProjectsLocationsAgentRequest>;

export type GetFulfillmentProjectsLocationsAgentResponse =
  GoogleCloudDialogflowV2Fulfillment;
export const GetFulfillmentProjectsLocationsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Fulfillment;

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
  body?: GoogleCloudDialogflowV2ImportAgentRequest;
}

export const ImportProjectsLocationsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2ImportAgentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/agent:import",
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

export interface RestoreProjectsLocationsAgentRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2RestoreAgentRequest;
}

export const RestoreProjectsLocationsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2RestoreAgentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/agent:restore",
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
    T.Http({ method: "GET", path: "v2/{+parent}/agent:search" }),
    svc,
  ) as unknown as Schema.Schema<SearchProjectsLocationsAgentRequest>;

export type SearchProjectsLocationsAgentResponse =
  GoogleCloudDialogflowV2SearchAgentsResponse;
export const SearchProjectsLocationsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SearchAgentsResponse;

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

export interface DeleteProjectsLocationsAgentIntentsRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
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

export interface BatchDeleteProjectsLocationsAgentIntentsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2BatchDeleteIntentsRequest;
}

export const BatchDeleteProjectsLocationsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2BatchDeleteIntentsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/intents:batchDelete",
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

export interface CreateProjectsLocationsAgentIntentsRequest {
  languageCode?: string;
  intentView?: "INTENT_VIEW_UNSPECIFIED" | "INTENT_VIEW_FULL" | (string & {});
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Intent;
}

export const CreateProjectsLocationsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    intentView: Schema.optional(Schema.String).pipe(T.HttpQuery("intentView")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2Intent).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/intents", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentIntentsRequest>;

export type CreateProjectsLocationsAgentIntentsResponse =
  GoogleCloudDialogflowV2Intent;
export const CreateProjectsLocationsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Intent;

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

export interface BatchUpdateProjectsLocationsAgentIntentsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2BatchUpdateIntentsRequest;
}

export const BatchUpdateProjectsLocationsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2BatchUpdateIntentsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/intents:batchUpdate",
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

export interface ListProjectsLocationsAgentIntentsRequest {
  parent: string;
  pageToken?: string;
  languageCode?: string;
  pageSize?: number;
  intentView?: "INTENT_VIEW_UNSPECIFIED" | "INTENT_VIEW_FULL" | (string & {});
}

export const ListProjectsLocationsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    intentView: Schema.optional(Schema.String).pipe(T.HttpQuery("intentView")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/intents" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentIntentsRequest>;

export type ListProjectsLocationsAgentIntentsResponse =
  GoogleCloudDialogflowV2ListIntentsResponse;
export const ListProjectsLocationsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListIntentsResponse;

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

export interface GetProjectsLocationsAgentIntentsRequest {
  languageCode?: string;
  intentView?: "INTENT_VIEW_UNSPECIFIED" | "INTENT_VIEW_FULL" | (string & {});
  name: string;
}

export const GetProjectsLocationsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    intentView: Schema.optional(Schema.String).pipe(T.HttpQuery("intentView")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentIntentsRequest>;

export type GetProjectsLocationsAgentIntentsResponse =
  GoogleCloudDialogflowV2Intent;
export const GetProjectsLocationsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Intent;

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

export interface PatchProjectsLocationsAgentIntentsRequest {
  name: string;
  updateMask?: string;
  languageCode?: string;
  intentView?: "INTENT_VIEW_UNSPECIFIED" | "INTENT_VIEW_FULL" | (string & {});
  /** Request body */
  body?: GoogleCloudDialogflowV2Intent;
}

export const PatchProjectsLocationsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    intentView: Schema.optional(Schema.String).pipe(T.HttpQuery("intentView")),
    body: Schema.optional(GoogleCloudDialogflowV2Intent).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentIntentsRequest>;

export type PatchProjectsLocationsAgentIntentsResponse =
  GoogleCloudDialogflowV2Intent;
export const PatchProjectsLocationsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Intent;

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

export interface DeleteProjectsLocationsAgentEntityTypesRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
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

export interface BatchDeleteProjectsLocationsAgentEntityTypesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest;
}

export const BatchDeleteProjectsLocationsAgentEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/entityTypes:batchDelete",
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

export interface CreateProjectsLocationsAgentEntityTypesRequest {
  parent: string;
  languageCode?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2EntityType;
}

export const CreateProjectsLocationsAgentEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    body: Schema.optional(GoogleCloudDialogflowV2EntityType).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/entityTypes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentEntityTypesRequest>;

export type CreateProjectsLocationsAgentEntityTypesResponse =
  GoogleCloudDialogflowV2EntityType;
export const CreateProjectsLocationsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2EntityType;

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

export interface BatchUpdateProjectsLocationsAgentEntityTypesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest;
}

export const BatchUpdateProjectsLocationsAgentEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/entityTypes:batchUpdate",
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

export interface ListProjectsLocationsAgentEntityTypesRequest {
  pageSize?: number;
  pageToken?: string;
  languageCode?: string;
  parent: string;
}

export const ListProjectsLocationsAgentEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/entityTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentEntityTypesRequest>;

export type ListProjectsLocationsAgentEntityTypesResponse =
  GoogleCloudDialogflowV2ListEntityTypesResponse;
export const ListProjectsLocationsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListEntityTypesResponse;

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
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentEntityTypesRequest>;

export type GetProjectsLocationsAgentEntityTypesResponse =
  GoogleCloudDialogflowV2EntityType;
export const GetProjectsLocationsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2EntityType;

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

export interface PatchProjectsLocationsAgentEntityTypesRequest {
  name: string;
  updateMask?: string;
  languageCode?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2EntityType;
}

export const PatchProjectsLocationsAgentEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    body: Schema.optional(GoogleCloudDialogflowV2EntityType).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentEntityTypesRequest>;

export type PatchProjectsLocationsAgentEntityTypesResponse =
  GoogleCloudDialogflowV2EntityType;
export const PatchProjectsLocationsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2EntityType;

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

export interface BatchCreateProjectsLocationsAgentEntityTypesEntitiesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2BatchCreateEntitiesRequest;
}

export const BatchCreateProjectsLocationsAgentEntityTypesEntitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2BatchCreateEntitiesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/entities:batchCreate",
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
  body?: GoogleCloudDialogflowV2BatchUpdateEntitiesRequest;
}

export const BatchUpdateProjectsLocationsAgentEntityTypesEntitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2BatchUpdateEntitiesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/entities:batchUpdate",
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
  body?: GoogleCloudDialogflowV2BatchDeleteEntitiesRequest;
}

export const BatchDeleteProjectsLocationsAgentEntityTypesEntitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2BatchDeleteEntitiesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/entities:batchDelete",
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

export interface DeleteContextsProjectsLocationsAgentSessionsRequest {
  parent: string;
}

export const DeleteContextsProjectsLocationsAgentSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+parent}/contexts" }),
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
  body?: GoogleCloudDialogflowV2DetectIntentRequest;
}

export const DetectIntentProjectsLocationsAgentSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.HttpPath("session")),
    body: Schema.optional(GoogleCloudDialogflowV2DetectIntentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+session}:detectIntent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DetectIntentProjectsLocationsAgentSessionsRequest>;

export type DetectIntentProjectsLocationsAgentSessionsResponse =
  GoogleCloudDialogflowV2DetectIntentResponse;
export const DetectIntentProjectsLocationsAgentSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2DetectIntentResponse;

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

export interface DeleteProjectsLocationsAgentSessionsEntityTypesRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
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

export interface ListProjectsLocationsAgentSessionsEntityTypesRequest {
  pageSize?: number;
  pageToken?: string;
  parent: string;
}

export const ListProjectsLocationsAgentSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/entityTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentSessionsEntityTypesRequest>;

export type ListProjectsLocationsAgentSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2ListSessionEntityTypesResponse;
export const ListProjectsLocationsAgentSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListSessionEntityTypesResponse;

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

export interface GetProjectsLocationsAgentSessionsEntityTypesRequest {
  name: string;
}

export const GetProjectsLocationsAgentSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentSessionsEntityTypesRequest>;

export type GetProjectsLocationsAgentSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2SessionEntityType;
export const GetProjectsLocationsAgentSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SessionEntityType;

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

export interface PatchProjectsLocationsAgentSessionsEntityTypesRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2SessionEntityType;
}

export const PatchProjectsLocationsAgentSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2SessionEntityType).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentSessionsEntityTypesRequest>;

export type PatchProjectsLocationsAgentSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2SessionEntityType;
export const PatchProjectsLocationsAgentSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SessionEntityType;

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

export interface CreateProjectsLocationsAgentSessionsEntityTypesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2SessionEntityType;
}

export const CreateProjectsLocationsAgentSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2SessionEntityType).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/entityTypes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentSessionsEntityTypesRequest>;

export type CreateProjectsLocationsAgentSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2SessionEntityType;
export const CreateProjectsLocationsAgentSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SessionEntityType;

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

export interface CreateProjectsLocationsAgentSessionsContextsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Context;
}

export const CreateProjectsLocationsAgentSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2Context).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/contexts", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentSessionsContextsRequest>;

export type CreateProjectsLocationsAgentSessionsContextsResponse =
  GoogleCloudDialogflowV2Context;
export const CreateProjectsLocationsAgentSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Context;

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

export interface ListProjectsLocationsAgentSessionsContextsRequest {
  pageSize?: number;
  pageToken?: string;
  parent: string;
}

export const ListProjectsLocationsAgentSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/contexts" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentSessionsContextsRequest>;

export type ListProjectsLocationsAgentSessionsContextsResponse =
  GoogleCloudDialogflowV2ListContextsResponse;
export const ListProjectsLocationsAgentSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListContextsResponse;

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

export interface GetProjectsLocationsAgentSessionsContextsRequest {
  name: string;
}

export const GetProjectsLocationsAgentSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentSessionsContextsRequest>;

export type GetProjectsLocationsAgentSessionsContextsResponse =
  GoogleCloudDialogflowV2Context;
export const GetProjectsLocationsAgentSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Context;

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

export interface PatchProjectsLocationsAgentSessionsContextsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Context;
}

export const PatchProjectsLocationsAgentSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2Context).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentSessionsContextsRequest>;

export type PatchProjectsLocationsAgentSessionsContextsResponse =
  GoogleCloudDialogflowV2Context;
export const PatchProjectsLocationsAgentSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Context;

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

export interface DeleteProjectsLocationsAgentSessionsContextsRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
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

export interface ListProjectsLocationsAgentEnvironmentsRequest {
  pageSize?: number;
  pageToken?: string;
  parent: string;
}

export const ListProjectsLocationsAgentEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/environments" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentEnvironmentsRequest>;

export type ListProjectsLocationsAgentEnvironmentsResponse =
  GoogleCloudDialogflowV2ListEnvironmentsResponse;
export const ListProjectsLocationsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListEnvironmentsResponse;

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

export interface GetProjectsLocationsAgentEnvironmentsRequest {
  name: string;
}

export const GetProjectsLocationsAgentEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentEnvironmentsRequest>;

export type GetProjectsLocationsAgentEnvironmentsResponse =
  GoogleCloudDialogflowV2Environment;
export const GetProjectsLocationsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Environment;

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

export interface PatchProjectsLocationsAgentEnvironmentsRequest {
  name: string;
  updateMask?: string;
  allowLoadToDraftAndDiscardChanges?: boolean;
  /** Request body */
  body?: GoogleCloudDialogflowV2Environment;
}

export const PatchProjectsLocationsAgentEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    allowLoadToDraftAndDiscardChanges: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowLoadToDraftAndDiscardChanges"),
    ),
    body: Schema.optional(GoogleCloudDialogflowV2Environment).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentEnvironmentsRequest>;

export type PatchProjectsLocationsAgentEnvironmentsResponse =
  GoogleCloudDialogflowV2Environment;
export const PatchProjectsLocationsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Environment;

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

export interface CreateProjectsLocationsAgentEnvironmentsRequest {
  parent: string;
  environmentId?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Environment;
}

export const CreateProjectsLocationsAgentEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    environmentId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("environmentId"),
    ),
    body: Schema.optional(GoogleCloudDialogflowV2Environment).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/environments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentEnvironmentsRequest>;

export type CreateProjectsLocationsAgentEnvironmentsResponse =
  GoogleCloudDialogflowV2Environment;
export const CreateProjectsLocationsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Environment;

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

export interface GetHistoryProjectsLocationsAgentEnvironmentsRequest {
  pageSize?: number;
  pageToken?: string;
  parent: string;
}

export const GetHistoryProjectsLocationsAgentEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/history" }),
    svc,
  ) as unknown as Schema.Schema<GetHistoryProjectsLocationsAgentEnvironmentsRequest>;

export type GetHistoryProjectsLocationsAgentEnvironmentsResponse =
  GoogleCloudDialogflowV2EnvironmentHistory;
export const GetHistoryProjectsLocationsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2EnvironmentHistory;

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

export interface DeleteProjectsLocationsAgentEnvironmentsRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
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
    T.Http({ method: "DELETE", path: "v2/{+parent}/contexts" }),
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
  body?: GoogleCloudDialogflowV2DetectIntentRequest;
}

export const DetectIntentProjectsLocationsAgentEnvironmentsUsersSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.HttpPath("session")),
    body: Schema.optional(GoogleCloudDialogflowV2DetectIntentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+session}:detectIntent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DetectIntentProjectsLocationsAgentEnvironmentsUsersSessionsRequest>;

export type DetectIntentProjectsLocationsAgentEnvironmentsUsersSessionsResponse =
  GoogleCloudDialogflowV2DetectIntentResponse;
export const DetectIntentProjectsLocationsAgentEnvironmentsUsersSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2DetectIntentResponse;

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

export interface DeleteProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
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

export interface ListProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest {
  pageSize?: number;
  pageToken?: string;
  parent: string;
}

export const ListProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/entityTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest>;

export type ListProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2ListSessionEntityTypesResponse;
export const ListProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListSessionEntityTypesResponse;

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

export interface GetProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest {
  name: string;
}

export const GetProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest>;

export type GetProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2SessionEntityType;
export const GetProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SessionEntityType;

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

export interface PatchProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2SessionEntityType;
}

export const PatchProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2SessionEntityType).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest>;

export type PatchProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2SessionEntityType;
export const PatchProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SessionEntityType;

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

export interface CreateProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2SessionEntityType;
}

export const CreateProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2SessionEntityType).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/entityTypes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest>;

export type CreateProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2SessionEntityType;
export const CreateProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SessionEntityType;

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

export interface DeleteProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
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

export interface ListProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest {
  pageSize?: number;
  pageToken?: string;
  parent: string;
}

export const ListProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/contexts" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest>;

export type ListProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse =
  GoogleCloudDialogflowV2ListContextsResponse;
export const ListProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListContextsResponse;

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

export interface GetProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest {
  name: string;
}

export const GetProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest>;

export type GetProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse =
  GoogleCloudDialogflowV2Context;
export const GetProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Context;

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

export interface PatchProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Context;
}

export const PatchProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2Context).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest>;

export type PatchProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse =
  GoogleCloudDialogflowV2Context;
export const PatchProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Context;

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

export interface CreateProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Context;
}

export const CreateProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2Context).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/contexts", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest>;

export type CreateProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse =
  GoogleCloudDialogflowV2Context;
export const CreateProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Context;

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

export interface ListProjectsLocationsAgentEnvironmentsIntentsRequest {
  languageCode?: string;
  pageToken?: string;
  parent: string;
  intentView?: "INTENT_VIEW_UNSPECIFIED" | "INTENT_VIEW_FULL" | (string & {});
  pageSize?: number;
}

export const ListProjectsLocationsAgentEnvironmentsIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    intentView: Schema.optional(Schema.String).pipe(T.HttpQuery("intentView")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/intents" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentEnvironmentsIntentsRequest>;

export type ListProjectsLocationsAgentEnvironmentsIntentsResponse =
  GoogleCloudDialogflowV2ListIntentsResponse;
export const ListProjectsLocationsAgentEnvironmentsIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListIntentsResponse;

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

export interface DeleteProjectsLocationsAgentVersionsRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
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
    T.Http({ method: "GET", path: "v2/{+parent}/versions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentVersionsRequest>;

export type ListProjectsLocationsAgentVersionsResponse =
  GoogleCloudDialogflowV2ListVersionsResponse;
export const ListProjectsLocationsAgentVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListVersionsResponse;

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

export interface GetProjectsLocationsAgentVersionsRequest {
  name: string;
}

export const GetProjectsLocationsAgentVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentVersionsRequest>;

export type GetProjectsLocationsAgentVersionsResponse =
  GoogleCloudDialogflowV2Version;
export const GetProjectsLocationsAgentVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Version;

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

export interface PatchProjectsLocationsAgentVersionsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Version;
}

export const PatchProjectsLocationsAgentVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2Version).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentVersionsRequest>;

export type PatchProjectsLocationsAgentVersionsResponse =
  GoogleCloudDialogflowV2Version;
export const PatchProjectsLocationsAgentVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Version;

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

export interface CreateProjectsLocationsAgentVersionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Version;
}

export const CreateProjectsLocationsAgentVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2Version).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/versions", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentVersionsRequest>;

export type CreateProjectsLocationsAgentVersionsResponse =
  GoogleCloudDialogflowV2Version;
export const CreateProjectsLocationsAgentVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Version;

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

export interface DeleteProjectsLocationsKnowledgeBasesRequest {
  name: string;
  force?: boolean;
}

export const DeleteProjectsLocationsKnowledgeBasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
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

export interface ListProjectsLocationsKnowledgeBasesRequest {
  pageSize?: number;
  pageToken?: string;
  parent: string;
  filter?: string;
}

export const ListProjectsLocationsKnowledgeBasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/knowledgeBases" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsKnowledgeBasesRequest>;

export type ListProjectsLocationsKnowledgeBasesResponse =
  GoogleCloudDialogflowV2ListKnowledgeBasesResponse;
export const ListProjectsLocationsKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListKnowledgeBasesResponse;

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

export interface GetProjectsLocationsKnowledgeBasesRequest {
  name: string;
}

export const GetProjectsLocationsKnowledgeBasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsKnowledgeBasesRequest>;

export type GetProjectsLocationsKnowledgeBasesResponse =
  GoogleCloudDialogflowV2KnowledgeBase;
export const GetProjectsLocationsKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2KnowledgeBase;

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

export interface PatchProjectsLocationsKnowledgeBasesRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2KnowledgeBase;
}

export const PatchProjectsLocationsKnowledgeBasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2KnowledgeBase).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsKnowledgeBasesRequest>;

export type PatchProjectsLocationsKnowledgeBasesResponse =
  GoogleCloudDialogflowV2KnowledgeBase;
export const PatchProjectsLocationsKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2KnowledgeBase;

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

export interface CreateProjectsLocationsKnowledgeBasesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2KnowledgeBase;
}

export const CreateProjectsLocationsKnowledgeBasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2KnowledgeBase).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/knowledgeBases",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsKnowledgeBasesRequest>;

export type CreateProjectsLocationsKnowledgeBasesResponse =
  GoogleCloudDialogflowV2KnowledgeBase;
export const CreateProjectsLocationsKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2KnowledgeBase;

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

export interface ImportProjectsLocationsKnowledgeBasesDocumentsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2ImportDocumentsRequest;
}

export const ImportProjectsLocationsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2ImportDocumentsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/documents:import",
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

export interface ReloadProjectsLocationsKnowledgeBasesDocumentsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2ReloadDocumentRequest;
}

export const ReloadProjectsLocationsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2ReloadDocumentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+name}:reload", hasBody: true }),
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

export interface DeleteProjectsLocationsKnowledgeBasesDocumentsRequest {
  name: string;
}

export const DeleteProjectsLocationsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
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

export interface ExportProjectsLocationsKnowledgeBasesDocumentsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2ExportDocumentRequest;
}

export const ExportProjectsLocationsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2ExportDocumentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+name}:export", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ExportProjectsLocationsKnowledgeBasesDocumentsRequest>;

export type ExportProjectsLocationsKnowledgeBasesDocumentsResponse =
  GoogleLongrunningOperation;
export const ExportProjectsLocationsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ExportProjectsLocationsKnowledgeBasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const exportProjectsLocationsKnowledgeBasesDocuments: API.OperationMethod<
  ExportProjectsLocationsKnowledgeBasesDocumentsRequest,
  ExportProjectsLocationsKnowledgeBasesDocumentsResponse,
  ExportProjectsLocationsKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportProjectsLocationsKnowledgeBasesDocumentsRequest,
  output: ExportProjectsLocationsKnowledgeBasesDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsKnowledgeBasesDocumentsRequest {
  parent: string;
  filter?: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/documents" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsKnowledgeBasesDocumentsRequest>;

export type ListProjectsLocationsKnowledgeBasesDocumentsResponse =
  GoogleCloudDialogflowV2ListDocumentsResponse;
export const ListProjectsLocationsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListDocumentsResponse;

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

export interface GetProjectsLocationsKnowledgeBasesDocumentsRequest {
  name: string;
}

export const GetProjectsLocationsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsKnowledgeBasesDocumentsRequest>;

export type GetProjectsLocationsKnowledgeBasesDocumentsResponse =
  GoogleCloudDialogflowV2Document;
export const GetProjectsLocationsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Document;

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

export interface PatchProjectsLocationsKnowledgeBasesDocumentsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Document;
}

export const PatchProjectsLocationsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2Document).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
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

export interface CreateProjectsLocationsKnowledgeBasesDocumentsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Document;
}

export const CreateProjectsLocationsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2Document).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/documents", hasBody: true }),
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

export interface GetProjectsLocationsToolsRequest {
  name: string;
}

export const GetProjectsLocationsToolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsToolsRequest>;

export type GetProjectsLocationsToolsResponse = GoogleCloudDialogflowV2Tool;
export const GetProjectsLocationsToolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Tool;

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

export interface ListProjectsLocationsToolsRequest {
  pageSize?: number;
  pageToken?: string;
  parent: string;
}

export const ListProjectsLocationsToolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/tools" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsToolsRequest>;

export type ListProjectsLocationsToolsResponse =
  GoogleCloudDialogflowV2ListToolsResponse;
export const ListProjectsLocationsToolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListToolsResponse;

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

export interface PatchProjectsLocationsToolsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Tool;
}

export const PatchProjectsLocationsToolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2Tool).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsToolsRequest>;

export type PatchProjectsLocationsToolsResponse = GoogleCloudDialogflowV2Tool;
export const PatchProjectsLocationsToolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Tool;

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

export interface CreateProjectsLocationsToolsRequest {
  parent: string;
  toolId?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Tool;
}

export const CreateProjectsLocationsToolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    toolId: Schema.optional(Schema.String).pipe(T.HttpQuery("toolId")),
    body: Schema.optional(GoogleCloudDialogflowV2Tool).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/tools", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsToolsRequest>;

export type CreateProjectsLocationsToolsResponse = GoogleCloudDialogflowV2Tool;
export const CreateProjectsLocationsToolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Tool;

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

export interface DeleteProjectsLocationsToolsRequest {
  name: string;
}

export const DeleteProjectsLocationsToolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
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

export interface DeleteProjectsLocationsConversationDatasetsRequest {
  name: string;
}

export const DeleteProjectsLocationsConversationDatasetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsConversationDatasetsRequest>;

export type DeleteProjectsLocationsConversationDatasetsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsConversationDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsConversationDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsConversationDatasets: API.OperationMethod<
  DeleteProjectsLocationsConversationDatasetsRequest,
  DeleteProjectsLocationsConversationDatasetsResponse,
  DeleteProjectsLocationsConversationDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsConversationDatasetsRequest,
  output: DeleteProjectsLocationsConversationDatasetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsConversationDatasetsRequest {
  name: string;
}

export const GetProjectsLocationsConversationDatasetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConversationDatasetsRequest>;

export type GetProjectsLocationsConversationDatasetsResponse =
  GoogleCloudDialogflowV2ConversationDataset;
export const GetProjectsLocationsConversationDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ConversationDataset;

export type GetProjectsLocationsConversationDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsConversationDatasets: API.OperationMethod<
  GetProjectsLocationsConversationDatasetsRequest,
  GetProjectsLocationsConversationDatasetsResponse,
  GetProjectsLocationsConversationDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConversationDatasetsRequest,
  output: GetProjectsLocationsConversationDatasetsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsConversationDatasetsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsConversationDatasetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/conversationDatasets" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConversationDatasetsRequest>;

export type ListProjectsLocationsConversationDatasetsResponse =
  GoogleCloudDialogflowV2ListConversationDatasetsResponse;
export const ListProjectsLocationsConversationDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListConversationDatasetsResponse;

export type ListProjectsLocationsConversationDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsConversationDatasets: API.PaginatedOperationMethod<
  ListProjectsLocationsConversationDatasetsRequest,
  ListProjectsLocationsConversationDatasetsResponse,
  ListProjectsLocationsConversationDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConversationDatasetsRequest,
  output: ListProjectsLocationsConversationDatasetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsConversationDatasetsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2ConversationDataset;
}

export const CreateProjectsLocationsConversationDatasetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2ConversationDataset).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/conversationDatasets",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConversationDatasetsRequest>;

export type CreateProjectsLocationsConversationDatasetsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsConversationDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsConversationDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsLocationsConversationDatasets: API.OperationMethod<
  CreateProjectsLocationsConversationDatasetsRequest,
  CreateProjectsLocationsConversationDatasetsResponse,
  CreateProjectsLocationsConversationDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsConversationDatasetsRequest,
  output: CreateProjectsLocationsConversationDatasetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ImportConversationDataProjectsLocationsConversationDatasetsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2ImportConversationDataRequest;
}

export const ImportConversationDataProjectsLocationsConversationDatasetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowV2ImportConversationDataRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+name}:importConversationData",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ImportConversationDataProjectsLocationsConversationDatasetsRequest>;

export type ImportConversationDataProjectsLocationsConversationDatasetsResponse =
  GoogleLongrunningOperation;
export const ImportConversationDataProjectsLocationsConversationDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ImportConversationDataProjectsLocationsConversationDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const importConversationDataProjectsLocationsConversationDatasets: API.OperationMethod<
  ImportConversationDataProjectsLocationsConversationDatasetsRequest,
  ImportConversationDataProjectsLocationsConversationDatasetsResponse,
  ImportConversationDataProjectsLocationsConversationDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportConversationDataProjectsLocationsConversationDatasetsRequest,
  output: ImportConversationDataProjectsLocationsConversationDatasetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsGeneratorsRequest {
  parent: string;
  generatorId?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Generator;
}

export const CreateProjectsLocationsGeneratorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    generatorId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("generatorId"),
    ),
    body: Schema.optional(GoogleCloudDialogflowV2Generator).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/generators", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsGeneratorsRequest>;

export type CreateProjectsLocationsGeneratorsResponse =
  GoogleCloudDialogflowV2Generator;
export const CreateProjectsLocationsGeneratorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Generator;

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
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsGeneratorsRequest>;

export type GetProjectsLocationsGeneratorsResponse =
  GoogleCloudDialogflowV2Generator;
export const GetProjectsLocationsGeneratorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Generator;

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
    T.Http({ method: "GET", path: "v2/{+parent}/generators" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsGeneratorsRequest>;

export type ListProjectsLocationsGeneratorsResponse =
  GoogleCloudDialogflowV2ListGeneratorsResponse;
export const ListProjectsLocationsGeneratorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListGeneratorsResponse;

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

export interface PatchProjectsLocationsGeneratorsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Generator;
}

export const PatchProjectsLocationsGeneratorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2Generator).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsGeneratorsRequest>;

export type PatchProjectsLocationsGeneratorsResponse =
  GoogleCloudDialogflowV2Generator;
export const PatchProjectsLocationsGeneratorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Generator;

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

export interface DeleteProjectsLocationsGeneratorsRequest {
  name: string;
}

export const DeleteProjectsLocationsGeneratorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
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
  body?: GoogleCloudDialogflowV2GeneratorEvaluation;
}

export const CreateProjectsLocationsGeneratorsEvaluationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2GeneratorEvaluation).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/evaluations", hasBody: true }),
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

export interface DeleteProjectsLocationsGeneratorsEvaluationsRequest {
  name: string;
}

export const DeleteProjectsLocationsGeneratorsEvaluationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
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

export interface GetProjectsLocationsGeneratorsEvaluationsRequest {
  name: string;
}

export const GetProjectsLocationsGeneratorsEvaluationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsGeneratorsEvaluationsRequest>;

export type GetProjectsLocationsGeneratorsEvaluationsResponse =
  GoogleCloudDialogflowV2GeneratorEvaluation;
export const GetProjectsLocationsGeneratorsEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2GeneratorEvaluation;

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
    T.Http({ method: "GET", path: "v2/{+parent}/evaluations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsGeneratorsEvaluationsRequest>;

export type ListProjectsLocationsGeneratorsEvaluationsResponse =
  GoogleCloudDialogflowV2ListGeneratorEvaluationsResponse;
export const ListProjectsLocationsGeneratorsEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListGeneratorEvaluationsResponse;

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

export interface CompleteProjectsLocationsConversationsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2CompleteConversationRequest;
}

export const CompleteProjectsLocationsConversationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowV2CompleteConversationRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+name}:complete", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CompleteProjectsLocationsConversationsRequest>;

export type CompleteProjectsLocationsConversationsResponse =
  GoogleCloudDialogflowV2Conversation;
export const CompleteProjectsLocationsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Conversation;

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
  filter?: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsConversationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/conversations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConversationsRequest>;

export type ListProjectsLocationsConversationsResponse =
  GoogleCloudDialogflowV2ListConversationsResponse;
export const ListProjectsLocationsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListConversationsResponse;

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

export interface GetProjectsLocationsConversationsRequest {
  name: string;
}

export const GetProjectsLocationsConversationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConversationsRequest>;

export type GetProjectsLocationsConversationsResponse =
  GoogleCloudDialogflowV2Conversation;
export const GetProjectsLocationsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Conversation;

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

export interface CreateProjectsLocationsConversationsRequest {
  parent: string;
  conversationId?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Conversation;
}

export const CreateProjectsLocationsConversationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    conversationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("conversationId"),
    ),
    body: Schema.optional(GoogleCloudDialogflowV2Conversation).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/conversations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConversationsRequest>;

export type CreateProjectsLocationsConversationsResponse =
  GoogleCloudDialogflowV2Conversation;
export const CreateProjectsLocationsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Conversation;

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

export interface IngestContextReferencesProjectsLocationsConversationsRequest {
  conversation: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2IngestContextReferencesRequest;
}

export const IngestContextReferencesProjectsLocationsConversationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversation: Schema.String.pipe(T.HttpPath("conversation")),
    body: Schema.optional(
      GoogleCloudDialogflowV2IngestContextReferencesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+conversation}:ingestContextReferences",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<IngestContextReferencesProjectsLocationsConversationsRequest>;

export type IngestContextReferencesProjectsLocationsConversationsResponse =
  GoogleCloudDialogflowV2IngestContextReferencesResponse;
export const IngestContextReferencesProjectsLocationsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2IngestContextReferencesResponse;

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

export interface SearchKnowledgeProjectsLocationsConversationsSuggestionsRequest {
  conversation: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2SearchKnowledgeRequest;
}

export const SearchKnowledgeProjectsLocationsConversationsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversation: Schema.String.pipe(T.HttpPath("conversation")),
    body: Schema.optional(GoogleCloudDialogflowV2SearchKnowledgeRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+conversation}/suggestions:searchKnowledge",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SearchKnowledgeProjectsLocationsConversationsSuggestionsRequest>;

export type SearchKnowledgeProjectsLocationsConversationsSuggestionsResponse =
  GoogleCloudDialogflowV2SearchKnowledgeResponse;
export const SearchKnowledgeProjectsLocationsConversationsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SearchKnowledgeResponse;

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

export interface GenerateProjectsLocationsConversationsSuggestionsRequest {
  conversation: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2GenerateSuggestionsRequest;
}

export const GenerateProjectsLocationsConversationsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversation: Schema.String.pipe(T.HttpPath("conversation")),
    body: Schema.optional(
      GoogleCloudDialogflowV2GenerateSuggestionsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+conversation}/suggestions:generate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateProjectsLocationsConversationsSuggestionsRequest>;

export type GenerateProjectsLocationsConversationsSuggestionsResponse =
  GoogleCloudDialogflowV2GenerateSuggestionsResponse;
export const GenerateProjectsLocationsConversationsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2GenerateSuggestionsResponse;

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

export interface SuggestConversationSummaryProjectsLocationsConversationsSuggestionsRequest {
  conversation: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2SuggestConversationSummaryRequest;
}

export const SuggestConversationSummaryProjectsLocationsConversationsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversation: Schema.String.pipe(T.HttpPath("conversation")),
    body: Schema.optional(
      GoogleCloudDialogflowV2SuggestConversationSummaryRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+conversation}/suggestions:suggestConversationSummary",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SuggestConversationSummaryProjectsLocationsConversationsSuggestionsRequest>;

export type SuggestConversationSummaryProjectsLocationsConversationsSuggestionsResponse =
  GoogleCloudDialogflowV2SuggestConversationSummaryResponse;
export const SuggestConversationSummaryProjectsLocationsConversationsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SuggestConversationSummaryResponse;

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

export interface CreateProjectsLocationsConversationsParticipantsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Participant;
}

export const CreateProjectsLocationsConversationsParticipantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2Participant).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/participants",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConversationsParticipantsRequest>;

export type CreateProjectsLocationsConversationsParticipantsResponse =
  GoogleCloudDialogflowV2Participant;
export const CreateProjectsLocationsConversationsParticipantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Participant;

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
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConversationsParticipantsRequest>;

export type GetProjectsLocationsConversationsParticipantsResponse =
  GoogleCloudDialogflowV2Participant;
export const GetProjectsLocationsConversationsParticipantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Participant;

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

export interface ListProjectsLocationsConversationsParticipantsRequest {
  pageSize?: number;
  pageToken?: string;
  parent: string;
}

export const ListProjectsLocationsConversationsParticipantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/participants" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConversationsParticipantsRequest>;

export type ListProjectsLocationsConversationsParticipantsResponse =
  GoogleCloudDialogflowV2ListParticipantsResponse;
export const ListProjectsLocationsConversationsParticipantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListParticipantsResponse;

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

export interface PatchProjectsLocationsConversationsParticipantsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Participant;
}

export const PatchProjectsLocationsConversationsParticipantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2Participant).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsConversationsParticipantsRequest>;

export type PatchProjectsLocationsConversationsParticipantsResponse =
  GoogleCloudDialogflowV2Participant;
export const PatchProjectsLocationsConversationsParticipantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Participant;

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

export interface AnalyzeContentProjectsLocationsConversationsParticipantsRequest {
  participant: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2AnalyzeContentRequest;
}

export const AnalyzeContentProjectsLocationsConversationsParticipantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    participant: Schema.String.pipe(T.HttpPath("participant")),
    body: Schema.optional(GoogleCloudDialogflowV2AnalyzeContentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+participant}:analyzeContent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AnalyzeContentProjectsLocationsConversationsParticipantsRequest>;

export type AnalyzeContentProjectsLocationsConversationsParticipantsResponse =
  GoogleCloudDialogflowV2AnalyzeContentResponse;
export const AnalyzeContentProjectsLocationsConversationsParticipantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2AnalyzeContentResponse;

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

export interface SuggestFaqAnswersProjectsLocationsConversationsParticipantsSuggestionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2SuggestFaqAnswersRequest;
}

export const SuggestFaqAnswersProjectsLocationsConversationsParticipantsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2SuggestFaqAnswersRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/suggestions:suggestFaqAnswers",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SuggestFaqAnswersProjectsLocationsConversationsParticipantsSuggestionsRequest>;

export type SuggestFaqAnswersProjectsLocationsConversationsParticipantsSuggestionsResponse =
  GoogleCloudDialogflowV2SuggestFaqAnswersResponse;
export const SuggestFaqAnswersProjectsLocationsConversationsParticipantsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SuggestFaqAnswersResponse;

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

export interface SuggestSmartRepliesProjectsLocationsConversationsParticipantsSuggestionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2SuggestSmartRepliesRequest;
}

export const SuggestSmartRepliesProjectsLocationsConversationsParticipantsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2SuggestSmartRepliesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/suggestions:suggestSmartReplies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SuggestSmartRepliesProjectsLocationsConversationsParticipantsSuggestionsRequest>;

export type SuggestSmartRepliesProjectsLocationsConversationsParticipantsSuggestionsResponse =
  GoogleCloudDialogflowV2SuggestSmartRepliesResponse;
export const SuggestSmartRepliesProjectsLocationsConversationsParticipantsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SuggestSmartRepliesResponse;

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

export interface SuggestKnowledgeAssistProjectsLocationsConversationsParticipantsSuggestionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2SuggestKnowledgeAssistRequest;
}

export const SuggestKnowledgeAssistProjectsLocationsConversationsParticipantsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2SuggestKnowledgeAssistRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/suggestions:suggestKnowledgeAssist",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SuggestKnowledgeAssistProjectsLocationsConversationsParticipantsSuggestionsRequest>;

export type SuggestKnowledgeAssistProjectsLocationsConversationsParticipantsSuggestionsResponse =
  GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse;
export const SuggestKnowledgeAssistProjectsLocationsConversationsParticipantsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse;

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

export interface SuggestArticlesProjectsLocationsConversationsParticipantsSuggestionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2SuggestArticlesRequest;
}

export const SuggestArticlesProjectsLocationsConversationsParticipantsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2SuggestArticlesRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/suggestions:suggestArticles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SuggestArticlesProjectsLocationsConversationsParticipantsSuggestionsRequest>;

export type SuggestArticlesProjectsLocationsConversationsParticipantsSuggestionsResponse =
  GoogleCloudDialogflowV2SuggestArticlesResponse;
export const SuggestArticlesProjectsLocationsConversationsParticipantsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SuggestArticlesResponse;

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

export interface ListProjectsLocationsConversationsMessagesRequest {
  parent: string;
  filter?: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsConversationsMessagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/messages" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConversationsMessagesRequest>;

export type ListProjectsLocationsConversationsMessagesResponse =
  GoogleCloudDialogflowV2ListMessagesResponse;
export const ListProjectsLocationsConversationsMessagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListMessagesResponse;

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

export interface InitializeProjectsLocationsEncryptionSpecRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2InitializeEncryptionSpecRequest;
}

export const InitializeProjectsLocationsEncryptionSpecRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowV2InitializeEncryptionSpecRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+name}:initialize", hasBody: true }),
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
    T.Http({ method: "GET", path: "v2/{+parent}/sipTrunks" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSipTrunksRequest>;

export type ListProjectsLocationsSipTrunksResponse =
  GoogleCloudDialogflowV2ListSipTrunksResponse;
export const ListProjectsLocationsSipTrunksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListSipTrunksResponse;

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

export interface GetProjectsLocationsSipTrunksRequest {
  name: string;
}

export const GetProjectsLocationsSipTrunksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSipTrunksRequest>;

export type GetProjectsLocationsSipTrunksResponse =
  GoogleCloudDialogflowV2SipTrunk;
export const GetProjectsLocationsSipTrunksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SipTrunk;

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
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2SipTrunk;
}

export const PatchProjectsLocationsSipTrunksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2SipTrunk).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsSipTrunksRequest>;

export type PatchProjectsLocationsSipTrunksResponse =
  GoogleCloudDialogflowV2SipTrunk;
export const PatchProjectsLocationsSipTrunksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SipTrunk;

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

export interface CreateProjectsLocationsSipTrunksRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2SipTrunk;
}

export const CreateProjectsLocationsSipTrunksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2SipTrunk).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/sipTrunks", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsSipTrunksRequest>;

export type CreateProjectsLocationsSipTrunksResponse =
  GoogleCloudDialogflowV2SipTrunk;
export const CreateProjectsLocationsSipTrunksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SipTrunk;

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

export interface DeleteProjectsLocationsSipTrunksRequest {
  name: string;
}

export const DeleteProjectsLocationsSipTrunksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
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

export interface ListProjectsLocationsAnswerRecordsRequest {
  pageSize?: number;
  pageToken?: string;
  parent: string;
  filter?: string;
}

export const ListProjectsLocationsAnswerRecordsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/answerRecords" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAnswerRecordsRequest>;

export type ListProjectsLocationsAnswerRecordsResponse =
  GoogleCloudDialogflowV2ListAnswerRecordsResponse;
export const ListProjectsLocationsAnswerRecordsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListAnswerRecordsResponse;

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
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2AnswerRecord;
}

export const PatchProjectsLocationsAnswerRecordsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2AnswerRecord).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAnswerRecordsRequest>;

export type PatchProjectsLocationsAnswerRecordsResponse =
  GoogleCloudDialogflowV2AnswerRecord;
export const PatchProjectsLocationsAnswerRecordsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2AnswerRecord;

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

export interface GenerateProjectsLocationsStatelessSuggestionRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2GenerateStatelessSuggestionRequest;
}

export const GenerateProjectsLocationsStatelessSuggestionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2GenerateStatelessSuggestionRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/statelessSuggestion:generate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateProjectsLocationsStatelessSuggestionRequest>;

export type GenerateProjectsLocationsStatelessSuggestionResponse =
  GoogleCloudDialogflowV2GenerateStatelessSuggestionResponse;
export const GenerateProjectsLocationsStatelessSuggestionResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2GenerateStatelessSuggestionResponse;

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

export interface ListProjectsLocationsConversationProfilesRequest {
  pageSize?: number;
  pageToken?: string;
  parent: string;
}

export const ListProjectsLocationsConversationProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/conversationProfiles" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConversationProfilesRequest>;

export type ListProjectsLocationsConversationProfilesResponse =
  GoogleCloudDialogflowV2ListConversationProfilesResponse;
export const ListProjectsLocationsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListConversationProfilesResponse;

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

export interface GetProjectsLocationsConversationProfilesRequest {
  name: string;
}

export const GetProjectsLocationsConversationProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConversationProfilesRequest>;

export type GetProjectsLocationsConversationProfilesResponse =
  GoogleCloudDialogflowV2ConversationProfile;
export const GetProjectsLocationsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ConversationProfile;

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

export interface PatchProjectsLocationsConversationProfilesRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2ConversationProfile;
}

export const PatchProjectsLocationsConversationProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2ConversationProfile).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsConversationProfilesRequest>;

export type PatchProjectsLocationsConversationProfilesResponse =
  GoogleCloudDialogflowV2ConversationProfile;
export const PatchProjectsLocationsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ConversationProfile;

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

export interface CreateProjectsLocationsConversationProfilesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2ConversationProfile;
}

export const CreateProjectsLocationsConversationProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2ConversationProfile).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/conversationProfiles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConversationProfilesRequest>;

export type CreateProjectsLocationsConversationProfilesResponse =
  GoogleCloudDialogflowV2ConversationProfile;
export const CreateProjectsLocationsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ConversationProfile;

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

export interface SetSuggestionFeatureConfigProjectsLocationsConversationProfilesRequest {
  conversationProfile: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequest;
}

export const SetSuggestionFeatureConfigProjectsLocationsConversationProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationProfile: Schema.String.pipe(T.HttpPath("conversationProfile")),
    body: Schema.optional(
      GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+conversationProfile}:setSuggestionFeatureConfig",
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

export interface DeleteProjectsLocationsConversationProfilesRequest {
  name: string;
}

export const DeleteProjectsLocationsConversationProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
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

export interface ClearSuggestionFeatureConfigProjectsLocationsConversationProfilesRequest {
  conversationProfile: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequest;
}

export const ClearSuggestionFeatureConfigProjectsLocationsConversationProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationProfile: Schema.String.pipe(T.HttpPath("conversationProfile")),
    body: Schema.optional(
      GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+conversationProfile}:clearSuggestionFeatureConfig",
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

export interface ImportProjectsAgentRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2ImportAgentRequest;
}

export const ImportProjectsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2ImportAgentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/agent:import",
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

export interface RestoreProjectsAgentRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2RestoreAgentRequest;
}

export const RestoreProjectsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2RestoreAgentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/agent:restore",
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
    T.Http({ method: "GET", path: "v2/{+parent}/agent:search" }),
    svc,
  ) as unknown as Schema.Schema<SearchProjectsAgentRequest>;

export type SearchProjectsAgentResponse =
  GoogleCloudDialogflowV2SearchAgentsResponse;
export const SearchProjectsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SearchAgentsResponse;

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
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Fulfillment;
}

export const UpdateFulfillmentProjectsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2Fulfillment).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateFulfillmentProjectsAgentRequest>;

export type UpdateFulfillmentProjectsAgentResponse =
  GoogleCloudDialogflowV2Fulfillment;
export const UpdateFulfillmentProjectsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Fulfillment;

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

export interface TrainProjectsAgentRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2TrainAgentRequest;
}

export const TrainProjectsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2TrainAgentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/agent:train", hasBody: true }),
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

export interface ExportProjectsAgentRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2ExportAgentRequest;
}

export const ExportProjectsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2ExportAgentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/agent:export",
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

export interface GetValidationResultProjectsAgentRequest {
  parent: string;
  languageCode?: string;
}

export const GetValidationResultProjectsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/agent/validationResult" }),
    svc,
  ) as unknown as Schema.Schema<GetValidationResultProjectsAgentRequest>;

export type GetValidationResultProjectsAgentResponse =
  GoogleCloudDialogflowV2ValidationResult;
export const GetValidationResultProjectsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ValidationResult;

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

export interface GetFulfillmentProjectsAgentRequest {
  name: string;
}

export const GetFulfillmentProjectsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetFulfillmentProjectsAgentRequest>;

export type GetFulfillmentProjectsAgentResponse =
  GoogleCloudDialogflowV2Fulfillment;
export const GetFulfillmentProjectsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Fulfillment;

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

export interface DeleteProjectsAgentEnvironmentsRequest {
  name: string;
}

export const DeleteProjectsAgentEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
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

export interface CreateProjectsAgentEnvironmentsRequest {
  parent: string;
  environmentId?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Environment;
}

export const CreateProjectsAgentEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    environmentId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("environmentId"),
    ),
    body: Schema.optional(GoogleCloudDialogflowV2Environment).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/environments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAgentEnvironmentsRequest>;

export type CreateProjectsAgentEnvironmentsResponse =
  GoogleCloudDialogflowV2Environment;
export const CreateProjectsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Environment;

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
    T.Http({ method: "GET", path: "v2/{+parent}/history" }),
    svc,
  ) as unknown as Schema.Schema<GetHistoryProjectsAgentEnvironmentsRequest>;

export type GetHistoryProjectsAgentEnvironmentsResponse =
  GoogleCloudDialogflowV2EnvironmentHistory;
export const GetHistoryProjectsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2EnvironmentHistory;

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
    T.Http({ method: "GET", path: "v2/{+parent}/environments" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentEnvironmentsRequest>;

export type ListProjectsAgentEnvironmentsResponse =
  GoogleCloudDialogflowV2ListEnvironmentsResponse;
export const ListProjectsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListEnvironmentsResponse;

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

export interface GetProjectsAgentEnvironmentsRequest {
  name: string;
}

export const GetProjectsAgentEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAgentEnvironmentsRequest>;

export type GetProjectsAgentEnvironmentsResponse =
  GoogleCloudDialogflowV2Environment;
export const GetProjectsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Environment;

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

export interface PatchProjectsAgentEnvironmentsRequest {
  allowLoadToDraftAndDiscardChanges?: boolean;
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Environment;
}

export const PatchProjectsAgentEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowLoadToDraftAndDiscardChanges: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowLoadToDraftAndDiscardChanges"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2Environment).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAgentEnvironmentsRequest>;

export type PatchProjectsAgentEnvironmentsResponse =
  GoogleCloudDialogflowV2Environment;
export const PatchProjectsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Environment;

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

export interface DeleteContextsProjectsAgentEnvironmentsUsersSessionsRequest {
  parent: string;
}

export const DeleteContextsProjectsAgentEnvironmentsUsersSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+parent}/contexts" }),
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
  body?: GoogleCloudDialogflowV2DetectIntentRequest;
}

export const DetectIntentProjectsAgentEnvironmentsUsersSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.HttpPath("session")),
    body: Schema.optional(GoogleCloudDialogflowV2DetectIntentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+session}:detectIntent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DetectIntentProjectsAgentEnvironmentsUsersSessionsRequest>;

export type DetectIntentProjectsAgentEnvironmentsUsersSessionsResponse =
  GoogleCloudDialogflowV2DetectIntentResponse;
export const DetectIntentProjectsAgentEnvironmentsUsersSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2DetectIntentResponse;

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

export interface DeleteProjectsAgentEnvironmentsUsersSessionsContextsRequest {
  name: string;
}

export const DeleteProjectsAgentEnvironmentsUsersSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
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

export interface CreateProjectsAgentEnvironmentsUsersSessionsContextsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Context;
}

export const CreateProjectsAgentEnvironmentsUsersSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2Context).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/contexts", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAgentEnvironmentsUsersSessionsContextsRequest>;

export type CreateProjectsAgentEnvironmentsUsersSessionsContextsResponse =
  GoogleCloudDialogflowV2Context;
export const CreateProjectsAgentEnvironmentsUsersSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Context;

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
    T.Http({ method: "GET", path: "v2/{+parent}/contexts" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentEnvironmentsUsersSessionsContextsRequest>;

export type ListProjectsAgentEnvironmentsUsersSessionsContextsResponse =
  GoogleCloudDialogflowV2ListContextsResponse;
export const ListProjectsAgentEnvironmentsUsersSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListContextsResponse;

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

export interface GetProjectsAgentEnvironmentsUsersSessionsContextsRequest {
  name: string;
}

export const GetProjectsAgentEnvironmentsUsersSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAgentEnvironmentsUsersSessionsContextsRequest>;

export type GetProjectsAgentEnvironmentsUsersSessionsContextsResponse =
  GoogleCloudDialogflowV2Context;
export const GetProjectsAgentEnvironmentsUsersSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Context;

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

export interface PatchProjectsAgentEnvironmentsUsersSessionsContextsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Context;
}

export const PatchProjectsAgentEnvironmentsUsersSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2Context).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAgentEnvironmentsUsersSessionsContextsRequest>;

export type PatchProjectsAgentEnvironmentsUsersSessionsContextsResponse =
  GoogleCloudDialogflowV2Context;
export const PatchProjectsAgentEnvironmentsUsersSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Context;

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

export interface DeleteProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest {
  name: string;
}

export const DeleteProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
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

export interface ListProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest {
  pageSize?: number;
  pageToken?: string;
  parent: string;
}

export const ListProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/entityTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest>;

export type ListProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2ListSessionEntityTypesResponse;
export const ListProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListSessionEntityTypesResponse;

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

export interface GetProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest {
  name: string;
}

export const GetProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest>;

export type GetProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2SessionEntityType;
export const GetProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SessionEntityType;

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

export interface PatchProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2SessionEntityType;
}

export const PatchProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2SessionEntityType).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest>;

export type PatchProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2SessionEntityType;
export const PatchProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SessionEntityType;

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

export interface CreateProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2SessionEntityType;
}

export const CreateProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2SessionEntityType).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/entityTypes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest>;

export type CreateProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2SessionEntityType;
export const CreateProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SessionEntityType;

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

export interface ListProjectsAgentEnvironmentsIntentsRequest {
  intentView?: "INTENT_VIEW_UNSPECIFIED" | "INTENT_VIEW_FULL" | (string & {});
  pageSize?: number;
  parent: string;
  languageCode?: string;
  pageToken?: string;
}

export const ListProjectsAgentEnvironmentsIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intentView: Schema.optional(Schema.String).pipe(T.HttpQuery("intentView")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/intents" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentEnvironmentsIntentsRequest>;

export type ListProjectsAgentEnvironmentsIntentsResponse =
  GoogleCloudDialogflowV2ListIntentsResponse;
export const ListProjectsAgentEnvironmentsIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListIntentsResponse;

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

export interface ListProjectsAgentKnowledgeBasesRequest {
  parent: string;
  filter?: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsAgentKnowledgeBasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/knowledgeBases" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentKnowledgeBasesRequest>;

export type ListProjectsAgentKnowledgeBasesResponse =
  GoogleCloudDialogflowV2ListKnowledgeBasesResponse;
export const ListProjectsAgentKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListKnowledgeBasesResponse;

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

export interface GetProjectsAgentKnowledgeBasesRequest {
  name: string;
}

export const GetProjectsAgentKnowledgeBasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAgentKnowledgeBasesRequest>;

export type GetProjectsAgentKnowledgeBasesResponse =
  GoogleCloudDialogflowV2KnowledgeBase;
export const GetProjectsAgentKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2KnowledgeBase;

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

export interface PatchProjectsAgentKnowledgeBasesRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2KnowledgeBase;
}

export const PatchProjectsAgentKnowledgeBasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2KnowledgeBase).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAgentKnowledgeBasesRequest>;

export type PatchProjectsAgentKnowledgeBasesResponse =
  GoogleCloudDialogflowV2KnowledgeBase;
export const PatchProjectsAgentKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2KnowledgeBase;

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

export interface CreateProjectsAgentKnowledgeBasesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2KnowledgeBase;
}

export const CreateProjectsAgentKnowledgeBasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2KnowledgeBase).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/knowledgeBases",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAgentKnowledgeBasesRequest>;

export type CreateProjectsAgentKnowledgeBasesResponse =
  GoogleCloudDialogflowV2KnowledgeBase;
export const CreateProjectsAgentKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2KnowledgeBase;

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

export interface DeleteProjectsAgentKnowledgeBasesRequest {
  name: string;
  force?: boolean;
}

export const DeleteProjectsAgentKnowledgeBasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
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

export interface CreateProjectsAgentKnowledgeBasesDocumentsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Document;
}

export const CreateProjectsAgentKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2Document).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/documents", hasBody: true }),
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

export interface ListProjectsAgentKnowledgeBasesDocumentsRequest {
  parent: string;
  filter?: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsAgentKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/documents" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentKnowledgeBasesDocumentsRequest>;

export type ListProjectsAgentKnowledgeBasesDocumentsResponse =
  GoogleCloudDialogflowV2ListDocumentsResponse;
export const ListProjectsAgentKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListDocumentsResponse;

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

export interface GetProjectsAgentKnowledgeBasesDocumentsRequest {
  name: string;
}

export const GetProjectsAgentKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAgentKnowledgeBasesDocumentsRequest>;

export type GetProjectsAgentKnowledgeBasesDocumentsResponse =
  GoogleCloudDialogflowV2Document;
export const GetProjectsAgentKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Document;

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

export interface PatchProjectsAgentKnowledgeBasesDocumentsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Document;
}

export const PatchProjectsAgentKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2Document).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
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

export interface ReloadProjectsAgentKnowledgeBasesDocumentsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2ReloadDocumentRequest;
}

export const ReloadProjectsAgentKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2ReloadDocumentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+name}:reload", hasBody: true }),
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

export interface DeleteProjectsAgentKnowledgeBasesDocumentsRequest {
  name: string;
}

export const DeleteProjectsAgentKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
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

export interface ListProjectsAgentVersionsRequest {
  pageSize?: number;
  pageToken?: string;
  parent: string;
}

export const ListProjectsAgentVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/versions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentVersionsRequest>;

export type ListProjectsAgentVersionsResponse =
  GoogleCloudDialogflowV2ListVersionsResponse;
export const ListProjectsAgentVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListVersionsResponse;

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

export interface GetProjectsAgentVersionsRequest {
  name: string;
}

export const GetProjectsAgentVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAgentVersionsRequest>;

export type GetProjectsAgentVersionsResponse = GoogleCloudDialogflowV2Version;
export const GetProjectsAgentVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Version;

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

export interface PatchProjectsAgentVersionsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Version;
}

export const PatchProjectsAgentVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2Version).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAgentVersionsRequest>;

export type PatchProjectsAgentVersionsResponse = GoogleCloudDialogflowV2Version;
export const PatchProjectsAgentVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Version;

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

export interface CreateProjectsAgentVersionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Version;
}

export const CreateProjectsAgentVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2Version).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/versions", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAgentVersionsRequest>;

export type CreateProjectsAgentVersionsResponse =
  GoogleCloudDialogflowV2Version;
export const CreateProjectsAgentVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Version;

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

export interface DeleteProjectsAgentVersionsRequest {
  name: string;
}

export const DeleteProjectsAgentVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
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

export interface CreateProjectsAgentIntentsRequest {
  parent: string;
  languageCode?: string;
  intentView?: "INTENT_VIEW_UNSPECIFIED" | "INTENT_VIEW_FULL" | (string & {});
  /** Request body */
  body?: GoogleCloudDialogflowV2Intent;
}

export const CreateProjectsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    intentView: Schema.optional(Schema.String).pipe(T.HttpQuery("intentView")),
    body: Schema.optional(GoogleCloudDialogflowV2Intent).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/intents", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAgentIntentsRequest>;

export type CreateProjectsAgentIntentsResponse = GoogleCloudDialogflowV2Intent;
export const CreateProjectsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Intent;

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

export interface BatchUpdateProjectsAgentIntentsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2BatchUpdateIntentsRequest;
}

export const BatchUpdateProjectsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2BatchUpdateIntentsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/intents:batchUpdate",
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

export interface ListProjectsAgentIntentsRequest {
  pageSize?: number;
  intentView?: "INTENT_VIEW_UNSPECIFIED" | "INTENT_VIEW_FULL" | (string & {});
  pageToken?: string;
  languageCode?: string;
  parent: string;
}

export const ListProjectsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    intentView: Schema.optional(Schema.String).pipe(T.HttpQuery("intentView")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/intents" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentIntentsRequest>;

export type ListProjectsAgentIntentsResponse =
  GoogleCloudDialogflowV2ListIntentsResponse;
export const ListProjectsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListIntentsResponse;

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
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAgentIntentsRequest>;

export type GetProjectsAgentIntentsResponse = GoogleCloudDialogflowV2Intent;
export const GetProjectsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Intent;

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

export interface PatchProjectsAgentIntentsRequest {
  name: string;
  languageCode?: string;
  intentView?: "INTENT_VIEW_UNSPECIFIED" | "INTENT_VIEW_FULL" | (string & {});
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Intent;
}

export const PatchProjectsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    intentView: Schema.optional(Schema.String).pipe(T.HttpQuery("intentView")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2Intent).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAgentIntentsRequest>;

export type PatchProjectsAgentIntentsResponse = GoogleCloudDialogflowV2Intent;
export const PatchProjectsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Intent;

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

export interface DeleteProjectsAgentIntentsRequest {
  name: string;
}

export const DeleteProjectsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
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

export interface BatchDeleteProjectsAgentIntentsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2BatchDeleteIntentsRequest;
}

export const BatchDeleteProjectsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2BatchDeleteIntentsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/intents:batchDelete",
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

export interface CreateProjectsAgentEntityTypesRequest {
  parent: string;
  languageCode?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2EntityType;
}

export const CreateProjectsAgentEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    body: Schema.optional(GoogleCloudDialogflowV2EntityType).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/entityTypes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAgentEntityTypesRequest>;

export type CreateProjectsAgentEntityTypesResponse =
  GoogleCloudDialogflowV2EntityType;
export const CreateProjectsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2EntityType;

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

export interface BatchUpdateProjectsAgentEntityTypesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest;
}

export const BatchUpdateProjectsAgentEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/entityTypes:batchUpdate",
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

export interface ListProjectsAgentEntityTypesRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
  languageCode?: string;
}

export const ListProjectsAgentEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/entityTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentEntityTypesRequest>;

export type ListProjectsAgentEntityTypesResponse =
  GoogleCloudDialogflowV2ListEntityTypesResponse;
export const ListProjectsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListEntityTypesResponse;

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
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAgentEntityTypesRequest>;

export type GetProjectsAgentEntityTypesResponse =
  GoogleCloudDialogflowV2EntityType;
export const GetProjectsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2EntityType;

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

export interface PatchProjectsAgentEntityTypesRequest {
  languageCode?: string;
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2EntityType;
}

export const PatchProjectsAgentEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2EntityType).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAgentEntityTypesRequest>;

export type PatchProjectsAgentEntityTypesResponse =
  GoogleCloudDialogflowV2EntityType;
export const PatchProjectsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2EntityType;

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

export interface DeleteProjectsAgentEntityTypesRequest {
  name: string;
}

export const DeleteProjectsAgentEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
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

export interface BatchDeleteProjectsAgentEntityTypesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest;
}

export const BatchDeleteProjectsAgentEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/entityTypes:batchDelete",
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

export interface BatchCreateProjectsAgentEntityTypesEntitiesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2BatchCreateEntitiesRequest;
}

export const BatchCreateProjectsAgentEntityTypesEntitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2BatchCreateEntitiesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/entities:batchCreate",
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

export interface BatchUpdateProjectsAgentEntityTypesEntitiesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2BatchUpdateEntitiesRequest;
}

export const BatchUpdateProjectsAgentEntityTypesEntitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2BatchUpdateEntitiesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/entities:batchUpdate",
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
  body?: GoogleCloudDialogflowV2BatchDeleteEntitiesRequest;
}

export const BatchDeleteProjectsAgentEntityTypesEntitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2BatchDeleteEntitiesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/entities:batchDelete",
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

export interface DeleteContextsProjectsAgentSessionsRequest {
  parent: string;
}

export const DeleteContextsProjectsAgentSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+parent}/contexts" }),
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
  body?: GoogleCloudDialogflowV2DetectIntentRequest;
}

export const DetectIntentProjectsAgentSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.HttpPath("session")),
    body: Schema.optional(GoogleCloudDialogflowV2DetectIntentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+session}:detectIntent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DetectIntentProjectsAgentSessionsRequest>;

export type DetectIntentProjectsAgentSessionsResponse =
  GoogleCloudDialogflowV2DetectIntentResponse;
export const DetectIntentProjectsAgentSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2DetectIntentResponse;

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

export interface CreateProjectsAgentSessionsEntityTypesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2SessionEntityType;
}

export const CreateProjectsAgentSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2SessionEntityType).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/entityTypes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAgentSessionsEntityTypesRequest>;

export type CreateProjectsAgentSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2SessionEntityType;
export const CreateProjectsAgentSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SessionEntityType;

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
    T.Http({ method: "GET", path: "v2/{+parent}/entityTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentSessionsEntityTypesRequest>;

export type ListProjectsAgentSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2ListSessionEntityTypesResponse;
export const ListProjectsAgentSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListSessionEntityTypesResponse;

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

export interface GetProjectsAgentSessionsEntityTypesRequest {
  name: string;
}

export const GetProjectsAgentSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAgentSessionsEntityTypesRequest>;

export type GetProjectsAgentSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2SessionEntityType;
export const GetProjectsAgentSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SessionEntityType;

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

export interface PatchProjectsAgentSessionsEntityTypesRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2SessionEntityType;
}

export const PatchProjectsAgentSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2SessionEntityType).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAgentSessionsEntityTypesRequest>;

export type PatchProjectsAgentSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2SessionEntityType;
export const PatchProjectsAgentSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SessionEntityType;

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

export interface DeleteProjectsAgentSessionsEntityTypesRequest {
  name: string;
}

export const DeleteProjectsAgentSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
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

export interface DeleteProjectsAgentSessionsContextsRequest {
  name: string;
}

export const DeleteProjectsAgentSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
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

export interface CreateProjectsAgentSessionsContextsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Context;
}

export const CreateProjectsAgentSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2Context).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/contexts", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAgentSessionsContextsRequest>;

export type CreateProjectsAgentSessionsContextsResponse =
  GoogleCloudDialogflowV2Context;
export const CreateProjectsAgentSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Context;

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
    T.Http({ method: "GET", path: "v2/{+parent}/contexts" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentSessionsContextsRequest>;

export type ListProjectsAgentSessionsContextsResponse =
  GoogleCloudDialogflowV2ListContextsResponse;
export const ListProjectsAgentSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListContextsResponse;

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

export interface GetProjectsAgentSessionsContextsRequest {
  name: string;
}

export const GetProjectsAgentSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAgentSessionsContextsRequest>;

export type GetProjectsAgentSessionsContextsResponse =
  GoogleCloudDialogflowV2Context;
export const GetProjectsAgentSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Context;

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

export interface PatchProjectsAgentSessionsContextsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Context;
}

export const PatchProjectsAgentSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2Context).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAgentSessionsContextsRequest>;

export type PatchProjectsAgentSessionsContextsResponse =
  GoogleCloudDialogflowV2Context;
export const PatchProjectsAgentSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Context;

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

export interface CancelProjectsOperationsRequest {
  name: string;
}

export const CancelProjectsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+name}:cancel", hasBody: true }),
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

export interface ListProjectsOperationsRequest {
  pageSize?: number;
  name: string;
  pageToken?: string;
  returnPartialSuccess?: boolean;
  filter?: string;
}

export const ListProjectsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}/operations" }),
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
    T.Http({ method: "GET", path: "v2/{+name}" }),
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

export interface ListProjectsAnswerRecordsRequest {
  pageSize?: number;
  pageToken?: string;
  parent: string;
  filter?: string;
}

export const ListProjectsAnswerRecordsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/answerRecords" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAnswerRecordsRequest>;

export type ListProjectsAnswerRecordsResponse =
  GoogleCloudDialogflowV2ListAnswerRecordsResponse;
export const ListProjectsAnswerRecordsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListAnswerRecordsResponse;

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
  body?: GoogleCloudDialogflowV2AnswerRecord;
}

export const PatchProjectsAnswerRecordsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2AnswerRecord).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAnswerRecordsRequest>;

export type PatchProjectsAnswerRecordsResponse =
  GoogleCloudDialogflowV2AnswerRecord;
export const PatchProjectsAnswerRecordsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2AnswerRecord;

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

export interface DeployProjectsConversationModelsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2DeployConversationModelRequest;
}

export const DeployProjectsConversationModelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowV2DeployConversationModelRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+name}:deploy", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<DeployProjectsConversationModelsRequest>;

export type DeployProjectsConversationModelsResponse =
  GoogleLongrunningOperation;
export const DeployProjectsConversationModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeployProjectsConversationModelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deployProjectsConversationModels: API.OperationMethod<
  DeployProjectsConversationModelsRequest,
  DeployProjectsConversationModelsResponse,
  DeployProjectsConversationModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeployProjectsConversationModelsRequest,
  output: DeployProjectsConversationModelsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UndeployProjectsConversationModelsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2UndeployConversationModelRequest;
}

export const UndeployProjectsConversationModelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowV2UndeployConversationModelRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+name}:undeploy", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UndeployProjectsConversationModelsRequest>;

export type UndeployProjectsConversationModelsResponse =
  GoogleLongrunningOperation;
export const UndeployProjectsConversationModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type UndeployProjectsConversationModelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const undeployProjectsConversationModels: API.OperationMethod<
  UndeployProjectsConversationModelsRequest,
  UndeployProjectsConversationModelsResponse,
  UndeployProjectsConversationModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UndeployProjectsConversationModelsRequest,
  output: UndeployProjectsConversationModelsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsConversationModelsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2ConversationModel;
}

export const CreateProjectsConversationModelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2ConversationModel).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/conversationModels",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsConversationModelsRequest>;

export type CreateProjectsConversationModelsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsConversationModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsConversationModelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsConversationModels: API.OperationMethod<
  CreateProjectsConversationModelsRequest,
  CreateProjectsConversationModelsResponse,
  CreateProjectsConversationModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsConversationModelsRequest,
  output: CreateProjectsConversationModelsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsConversationModelsRequest {
  name: string;
}

export const GetProjectsConversationModelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsConversationModelsRequest>;

export type GetProjectsConversationModelsResponse =
  GoogleCloudDialogflowV2ConversationModel;
export const GetProjectsConversationModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ConversationModel;

export type GetProjectsConversationModelsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsConversationModels: API.OperationMethod<
  GetProjectsConversationModelsRequest,
  GetProjectsConversationModelsResponse,
  GetProjectsConversationModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsConversationModelsRequest,
  output: GetProjectsConversationModelsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsConversationModelsRequest {
  pageSize?: number;
  pageToken?: string;
  parent: string;
}

export const ListProjectsConversationModelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/conversationModels" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsConversationModelsRequest>;

export type ListProjectsConversationModelsResponse =
  GoogleCloudDialogflowV2ListConversationModelsResponse;
export const ListProjectsConversationModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListConversationModelsResponse;

export type ListProjectsConversationModelsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsConversationModels: API.PaginatedOperationMethod<
  ListProjectsConversationModelsRequest,
  ListProjectsConversationModelsResponse,
  ListProjectsConversationModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsConversationModelsRequest,
  output: ListProjectsConversationModelsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsConversationModelsRequest {
  name: string;
}

export const DeleteProjectsConversationModelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsConversationModelsRequest>;

export type DeleteProjectsConversationModelsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsConversationModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsConversationModelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsConversationModels: API.OperationMethod<
  DeleteProjectsConversationModelsRequest,
  DeleteProjectsConversationModelsResponse,
  DeleteProjectsConversationModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsConversationModelsRequest,
  output: DeleteProjectsConversationModelsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsConversationModelsEvaluationsRequest {
  name: string;
}

export const GetProjectsConversationModelsEvaluationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsConversationModelsEvaluationsRequest>;

export type GetProjectsConversationModelsEvaluationsResponse =
  GoogleCloudDialogflowV2ConversationModelEvaluation;
export const GetProjectsConversationModelsEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ConversationModelEvaluation;

export type GetProjectsConversationModelsEvaluationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsConversationModelsEvaluations: API.OperationMethod<
  GetProjectsConversationModelsEvaluationsRequest,
  GetProjectsConversationModelsEvaluationsResponse,
  GetProjectsConversationModelsEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsConversationModelsEvaluationsRequest,
  output: GetProjectsConversationModelsEvaluationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsConversationModelsEvaluationsRequest {
  pageSize?: number;
  pageToken?: string;
  parent: string;
}

export const ListProjectsConversationModelsEvaluationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/evaluations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsConversationModelsEvaluationsRequest>;

export type ListProjectsConversationModelsEvaluationsResponse =
  GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse;
export const ListProjectsConversationModelsEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse;

export type ListProjectsConversationModelsEvaluationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsConversationModelsEvaluations: API.PaginatedOperationMethod<
  ListProjectsConversationModelsEvaluationsRequest,
  ListProjectsConversationModelsEvaluationsResponse,
  ListProjectsConversationModelsEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsConversationModelsEvaluationsRequest,
  output: ListProjectsConversationModelsEvaluationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SearchKnowledgeProjectsSuggestionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2SearchKnowledgeRequest;
}

export const SearchKnowledgeProjectsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2SearchKnowledgeRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/suggestions:searchKnowledge",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SearchKnowledgeProjectsSuggestionsRequest>;

export type SearchKnowledgeProjectsSuggestionsResponse =
  GoogleCloudDialogflowV2SearchKnowledgeResponse;
export const SearchKnowledgeProjectsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SearchKnowledgeResponse;

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

export interface GenerateStatelessSummaryProjectsSuggestionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2GenerateStatelessSummaryRequest;
}

export const GenerateStatelessSummaryProjectsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2GenerateStatelessSummaryRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/suggestions:generateStatelessSummary",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateStatelessSummaryProjectsSuggestionsRequest>;

export type GenerateStatelessSummaryProjectsSuggestionsResponse =
  GoogleCloudDialogflowV2GenerateStatelessSummaryResponse;
export const GenerateStatelessSummaryProjectsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2GenerateStatelessSummaryResponse;

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

export interface CreateProjectsGeneratorsRequest {
  parent: string;
  generatorId?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Generator;
}

export const CreateProjectsGeneratorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    generatorId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("generatorId"),
    ),
    body: Schema.optional(GoogleCloudDialogflowV2Generator).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/generators", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsGeneratorsRequest>;

export type CreateProjectsGeneratorsResponse = GoogleCloudDialogflowV2Generator;
export const CreateProjectsGeneratorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Generator;

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
  pageSize?: number;
  pageToken?: string;
  parent: string;
}

export const ListProjectsGeneratorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/generators" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsGeneratorsRequest>;

export type ListProjectsGeneratorsResponse =
  GoogleCloudDialogflowV2ListGeneratorsResponse;
export const ListProjectsGeneratorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListGeneratorsResponse;

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

export interface CompleteProjectsConversationsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2CompleteConversationRequest;
}

export const CompleteProjectsConversationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowV2CompleteConversationRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+name}:complete", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CompleteProjectsConversationsRequest>;

export type CompleteProjectsConversationsResponse =
  GoogleCloudDialogflowV2Conversation;
export const CompleteProjectsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Conversation;

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

export interface ListProjectsConversationsRequest {
  parent: string;
  filter?: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsConversationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/conversations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsConversationsRequest>;

export type ListProjectsConversationsResponse =
  GoogleCloudDialogflowV2ListConversationsResponse;
export const ListProjectsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListConversationsResponse;

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
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsConversationsRequest>;

export type GetProjectsConversationsResponse =
  GoogleCloudDialogflowV2Conversation;
export const GetProjectsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Conversation;

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

export interface CreateProjectsConversationsRequest {
  parent: string;
  conversationId?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Conversation;
}

export const CreateProjectsConversationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    conversationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("conversationId"),
    ),
    body: Schema.optional(GoogleCloudDialogflowV2Conversation).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/conversations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsConversationsRequest>;

export type CreateProjectsConversationsResponse =
  GoogleCloudDialogflowV2Conversation;
export const CreateProjectsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Conversation;

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

export interface SearchKnowledgeProjectsConversationsSuggestionsRequest {
  conversation: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2SearchKnowledgeRequest;
}

export const SearchKnowledgeProjectsConversationsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversation: Schema.String.pipe(T.HttpPath("conversation")),
    body: Schema.optional(GoogleCloudDialogflowV2SearchKnowledgeRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+conversation}/suggestions:searchKnowledge",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SearchKnowledgeProjectsConversationsSuggestionsRequest>;

export type SearchKnowledgeProjectsConversationsSuggestionsResponse =
  GoogleCloudDialogflowV2SearchKnowledgeResponse;
export const SearchKnowledgeProjectsConversationsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SearchKnowledgeResponse;

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
  body?: GoogleCloudDialogflowV2SuggestConversationSummaryRequest;
}

export const SuggestConversationSummaryProjectsConversationsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversation: Schema.String.pipe(T.HttpPath("conversation")),
    body: Schema.optional(
      GoogleCloudDialogflowV2SuggestConversationSummaryRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+conversation}/suggestions:suggestConversationSummary",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SuggestConversationSummaryProjectsConversationsSuggestionsRequest>;

export type SuggestConversationSummaryProjectsConversationsSuggestionsResponse =
  GoogleCloudDialogflowV2SuggestConversationSummaryResponse;
export const SuggestConversationSummaryProjectsConversationsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SuggestConversationSummaryResponse;

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
  body?: GoogleCloudDialogflowV2GenerateSuggestionsRequest;
}

export const GenerateProjectsConversationsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversation: Schema.String.pipe(T.HttpPath("conversation")),
    body: Schema.optional(
      GoogleCloudDialogflowV2GenerateSuggestionsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+conversation}/suggestions:generate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateProjectsConversationsSuggestionsRequest>;

export type GenerateProjectsConversationsSuggestionsResponse =
  GoogleCloudDialogflowV2GenerateSuggestionsResponse;
export const GenerateProjectsConversationsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2GenerateSuggestionsResponse;

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

export interface CreateProjectsConversationsParticipantsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Participant;
}

export const CreateProjectsConversationsParticipantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2Participant).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/participants",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsConversationsParticipantsRequest>;

export type CreateProjectsConversationsParticipantsResponse =
  GoogleCloudDialogflowV2Participant;
export const CreateProjectsConversationsParticipantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Participant;

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
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsConversationsParticipantsRequest>;

export type GetProjectsConversationsParticipantsResponse =
  GoogleCloudDialogflowV2Participant;
export const GetProjectsConversationsParticipantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Participant;

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
    T.Http({ method: "GET", path: "v2/{+parent}/participants" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsConversationsParticipantsRequest>;

export type ListProjectsConversationsParticipantsResponse =
  GoogleCloudDialogflowV2ListParticipantsResponse;
export const ListProjectsConversationsParticipantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListParticipantsResponse;

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

export interface PatchProjectsConversationsParticipantsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Participant;
}

export const PatchProjectsConversationsParticipantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowV2Participant).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsConversationsParticipantsRequest>;

export type PatchProjectsConversationsParticipantsResponse =
  GoogleCloudDialogflowV2Participant;
export const PatchProjectsConversationsParticipantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Participant;

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

export interface AnalyzeContentProjectsConversationsParticipantsRequest {
  participant: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2AnalyzeContentRequest;
}

export const AnalyzeContentProjectsConversationsParticipantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    participant: Schema.String.pipe(T.HttpPath("participant")),
    body: Schema.optional(GoogleCloudDialogflowV2AnalyzeContentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+participant}:analyzeContent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AnalyzeContentProjectsConversationsParticipantsRequest>;

export type AnalyzeContentProjectsConversationsParticipantsResponse =
  GoogleCloudDialogflowV2AnalyzeContentResponse;
export const AnalyzeContentProjectsConversationsParticipantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2AnalyzeContentResponse;

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

export interface SuggestArticlesProjectsConversationsParticipantsSuggestionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2SuggestArticlesRequest;
}

export const SuggestArticlesProjectsConversationsParticipantsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2SuggestArticlesRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/suggestions:suggestArticles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SuggestArticlesProjectsConversationsParticipantsSuggestionsRequest>;

export type SuggestArticlesProjectsConversationsParticipantsSuggestionsResponse =
  GoogleCloudDialogflowV2SuggestArticlesResponse;
export const SuggestArticlesProjectsConversationsParticipantsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SuggestArticlesResponse;

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
  body?: GoogleCloudDialogflowV2SuggestFaqAnswersRequest;
}

export const SuggestFaqAnswersProjectsConversationsParticipantsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowV2SuggestFaqAnswersRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/suggestions:suggestFaqAnswers",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SuggestFaqAnswersProjectsConversationsParticipantsSuggestionsRequest>;

export type SuggestFaqAnswersProjectsConversationsParticipantsSuggestionsResponse =
  GoogleCloudDialogflowV2SuggestFaqAnswersResponse;
export const SuggestFaqAnswersProjectsConversationsParticipantsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SuggestFaqAnswersResponse;

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
  body?: GoogleCloudDialogflowV2SuggestSmartRepliesRequest;
}

export const SuggestSmartRepliesProjectsConversationsParticipantsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2SuggestSmartRepliesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/suggestions:suggestSmartReplies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SuggestSmartRepliesProjectsConversationsParticipantsSuggestionsRequest>;

export type SuggestSmartRepliesProjectsConversationsParticipantsSuggestionsResponse =
  GoogleCloudDialogflowV2SuggestSmartRepliesResponse;
export const SuggestSmartRepliesProjectsConversationsParticipantsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SuggestSmartRepliesResponse;

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

export interface SuggestKnowledgeAssistProjectsConversationsParticipantsSuggestionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2SuggestKnowledgeAssistRequest;
}

export const SuggestKnowledgeAssistProjectsConversationsParticipantsSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowV2SuggestKnowledgeAssistRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/suggestions:suggestKnowledgeAssist",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SuggestKnowledgeAssistProjectsConversationsParticipantsSuggestionsRequest>;

export type SuggestKnowledgeAssistProjectsConversationsParticipantsSuggestionsResponse =
  GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse;
export const SuggestKnowledgeAssistProjectsConversationsParticipantsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse;

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

export interface ListProjectsConversationsMessagesRequest {
  parent: string;
  filter?: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsConversationsMessagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/messages" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsConversationsMessagesRequest>;

export type ListProjectsConversationsMessagesResponse =
  GoogleCloudDialogflowV2ListMessagesResponse;
export const ListProjectsConversationsMessagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListMessagesResponse;

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
