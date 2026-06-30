// ==========================================================================
// Dialogflow API (dialogflow v3beta1)
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
  version: "v3beta1",
  rootUrl: "https://dialogflow.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig {
  enableContinuousRun?: boolean;
  enablePredeploymentRun?: boolean;
  testCases?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableContinuousRun: Schema.optional(Schema.Boolean),
    enablePredeploymentRun: Schema.optional(Schema.Boolean),
    testCases: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig",
  });

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
  suggestionIndex?: number;
  sources?: GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSources;
  answerRecord?: string;
  similarityScore?: number;
}

export const GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion: Schema.Schema<GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suggestionIndex: Schema.optional(Schema.Number),
    sources: Schema.optional(
      GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSources,
    ),
    answerRecord: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowCxV3beta1VersionVariantsVariant {
  trafficAllocation?: number;
  version?: string;
  isControlGroup?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1VersionVariantsVariant: Schema.Schema<GoogleCloudDialogflowCxV3beta1VersionVariantsVariant> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trafficAllocation: Schema.optional(Schema.Number),
    version: Schema.optional(Schema.String),
    isControlGroup: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1VersionVariantsVariant",
  });

export interface GoogleCloudDialogflowCxV3beta1VersionVariants {
  variants?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1VersionVariantsVariant>;
}

export const GoogleCloudDialogflowCxV3beta1VersionVariants: Schema.Schema<GoogleCloudDialogflowCxV3beta1VersionVariants> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    variants: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1VersionVariantsVariant),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1VersionVariants" });

export interface GoogleCloudDialogflowCxV3beta1VariantsHistory {
  versionVariants?: GoogleCloudDialogflowCxV3beta1VersionVariants;
  updateTime?: string;
}

export const GoogleCloudDialogflowCxV3beta1VariantsHistory: Schema.Schema<GoogleCloudDialogflowCxV3beta1VariantsHistory> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versionVariants: Schema.optional(
      GoogleCloudDialogflowCxV3beta1VersionVariants,
    ),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1VariantsHistory" });

export interface GoogleCloudDialogflowCxV3beta1IntentCoverageIntent {
  covered?: boolean;
  intent?: string;
}

export const GoogleCloudDialogflowCxV3beta1IntentCoverageIntent: Schema.Schema<GoogleCloudDialogflowCxV3beta1IntentCoverageIntent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    covered: Schema.optional(Schema.Boolean),
    intent: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1IntentCoverageIntent",
  });

export interface GoogleCloudDialogflowCxV3beta1IntentCoverage {
  intents?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1IntentCoverageIntent>;
  coverageScore?: number;
}

export const GoogleCloudDialogflowCxV3beta1IntentCoverage: Schema.Schema<GoogleCloudDialogflowCxV3beta1IntentCoverage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intents: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1IntentCoverageIntent),
    ),
    coverageScore: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1IntentCoverage" });

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

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageText {
  allowPlaybackInterruption?: boolean;
  text?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageText: Schema.Schema<GoogleCloudDialogflowCxV3beta1ResponseMessageText> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
    text: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ResponseMessageText",
  });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText {
  ssml?: string;
  text?: string;
  allowPlaybackInterruption?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText: Schema.Schema<GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ssml: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText",
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

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff {
  metadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff: Schema.Schema<GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff",
  });

export interface GoogleCloudDialogflowCxV3beta1ToolCall {
  inputParameters?: Record<string, unknown>;
  action?: string;
  tool?: string;
}

export const GoogleCloudDialogflowCxV3beta1ToolCall: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolCall> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    action: Schema.optional(Schema.String),
    tool: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ToolCall" });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction {}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction: Schema.Schema<GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction",
  });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard {}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard: Schema.Schema<GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard",
  });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessage {
  channel?: string;
  mixedAudio?: GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio;
  playAudio?: GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio;
  text?: GoogleCloudDialogflowCxV3beta1ResponseMessageText;
  outputAudioText?: GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText;
  telephonyTransferCall?: GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall;
  payload?: Record<string, unknown>;
  conversationSuccess?: GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess;
  liveAgentHandoff?: GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff;
  toolCall?: GoogleCloudDialogflowCxV3beta1ToolCall;
  endInteraction?: GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction;
  knowledgeInfoCard?: GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessage: Schema.Schema<GoogleCloudDialogflowCxV3beta1ResponseMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channel: Schema.optional(Schema.String),
    mixedAudio: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio,
    ),
    playAudio: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio,
    ),
    text: Schema.optional(GoogleCloudDialogflowCxV3beta1ResponseMessageText),
    outputAudioText: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText,
    ),
    telephonyTransferCall: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall,
    ),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    conversationSuccess: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess,
    ),
    liveAgentHandoff: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff,
    ),
    toolCall: Schema.optional(GoogleCloudDialogflowCxV3beta1ToolCall),
    endInteraction: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction,
    ),
    knowledgeInfoCard: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard,
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
  condition?: string;
  caseContent?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent>;
}

export const GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase: Schema.Schema<GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
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

export interface GoogleCloudDialogflowCxV3beta1GcsDestination {
  uri?: string;
}

export const GoogleCloudDialogflowCxV3beta1GcsDestination: Schema.Schema<GoogleCloudDialogflowCxV3beta1GcsDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1GcsDestination" });

export interface GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings {
  endpointerSensitivity?: number;
  useTimeoutBasedEndpointing?: boolean;
  models?: Record<string, string>;
  noSpeechTimeout?: string;
}

export const GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpointerSensitivity: Schema.optional(Schema.Number),
    useTimeoutBasedEndpointing: Schema.optional(Schema.Boolean),
    models: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    noSpeechTimeout: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings {
  enabled?: boolean;
  endpointingTimeoutDuration?: string;
  maxDigits?: number;
  interdigitTimeoutDuration?: string;
  finishDigit?: string;
}

export const GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    endpointingTimeoutDuration: Schema.optional(Schema.String),
    maxDigits: Schema.optional(Schema.Number),
    interdigitTimeoutDuration: Schema.optional(Schema.String),
    finishDigit: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings {
  enableStackdriverLogging?: boolean;
  enableInteractionLogging?: boolean;
  enableConsentBasedRedaction?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableStackdriverLogging: Schema.optional(Schema.Boolean),
    enableInteractionLogging: Schema.optional(Schema.Boolean),
    enableConsentBasedRedaction: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1AdvancedSettings {
  audioExportGcsDestination?: GoogleCloudDialogflowCxV3beta1GcsDestination;
  speechSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings;
  dtmfSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings;
  loggingSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings;
}

export const GoogleCloudDialogflowCxV3beta1AdvancedSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1AdvancedSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audioExportGcsDestination: Schema.optional(
      GoogleCloudDialogflowCxV3beta1GcsDestination,
    ),
    speechSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings,
    ),
    dtmfSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings,
    ),
    loggingSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1AdvancedSettings" });

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

export interface GoogleCloudDialogflowCxV3beta1Fulfillment {
  setParameterActions?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction>;
  conditionalCases?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases>;
  messages?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ResponseMessage>;
  advancedSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettings;
  webhook?: string;
  tag?: string;
  enableGenerativeFallback?: boolean;
  generators?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1FulfillmentGeneratorSettings>;
  returnPartialResponses?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1Fulfillment: Schema.Schema<GoogleCloudDialogflowCxV3beta1Fulfillment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    setParameterActions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction),
    ),
    conditionalCases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases),
    ),
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ResponseMessage),
    ),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettings,
    ),
    webhook: Schema.optional(Schema.String),
    tag: Schema.optional(Schema.String),
    enableGenerativeFallback: Schema.optional(Schema.Boolean),
    generators: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1FulfillmentGeneratorSettings),
    ),
    returnPartialResponses: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Fulfillment" });

export interface GoogleCloudDialogflowCxV3beta1TransitionRoute {
  description?: string;
  intent?: string;
  name?: string;
  triggerFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
  targetPage?: string;
  condition?: string;
  targetFlow?: string;
}

export const GoogleCloudDialogflowCxV3beta1TransitionRoute: Schema.Schema<GoogleCloudDialogflowCxV3beta1TransitionRoute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    intent: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    triggerFulfillment: Schema.optional(
      GoogleCloudDialogflowCxV3beta1Fulfillment,
    ),
    targetPage: Schema.optional(Schema.String),
    condition: Schema.optional(Schema.String),
    targetFlow: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TransitionRoute" });

export interface GoogleCloudDialogflowCxV3beta1TransitionRouteGroup {
  name?: string;
  displayName?: string;
  transitionRoutes?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TransitionRoute>;
}

export const GoogleCloudDialogflowCxV3beta1TransitionRouteGroup: Schema.Schema<GoogleCloudDialogflowCxV3beta1TransitionRouteGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    transitionRoutes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TransitionRoute),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1TransitionRouteGroup",
  });

export interface GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition {
  transitionRoute?: GoogleCloudDialogflowCxV3beta1TransitionRoute;
  covered?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition: Schema.Schema<GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transitionRoute: Schema.optional(
      GoogleCloudDialogflowCxV3beta1TransitionRoute,
    ),
    covered: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition",
  });

export interface GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage {
  routeGroup?: GoogleCloudDialogflowCxV3beta1TransitionRouteGroup;
  coverageScore?: number;
  transitions?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition>;
}

export const GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage: Schema.Schema<GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    routeGroup: Schema.optional(
      GoogleCloudDialogflowCxV3beta1TransitionRouteGroup,
    ),
    coverageScore: Schema.optional(Schema.Number),
    transitions: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage",
  });

export interface GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage {
  coverageScore?: number;
  coverages?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage>;
}

export const GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage: Schema.Schema<GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    coverageScore: Schema.optional(Schema.Number),
    coverages: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage",
  });

export interface GoogleCloudDialogflowCxV3beta1EventHandler {
  targetFlow?: string;
  targetPlaybook?: string;
  event?: string;
  name?: string;
  triggerFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
  targetPage?: string;
}

export const GoogleCloudDialogflowCxV3beta1EventHandler: Schema.Schema<GoogleCloudDialogflowCxV3beta1EventHandler> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetFlow: Schema.optional(Schema.String),
    targetPlaybook: Schema.optional(Schema.String),
    event: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    triggerFulfillment: Schema.optional(
      GoogleCloudDialogflowCxV3beta1Fulfillment,
    ),
    targetPage: Schema.optional(Schema.String),
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
  required?: boolean;
  defaultValue?: unknown;
  entityType?: string;
  isList?: boolean;
  displayName?: string;
  advancedSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettings;
  fillBehavior?: GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior;
  redact?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1FormParameter: Schema.Schema<GoogleCloudDialogflowCxV3beta1FormParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    required: Schema.optional(Schema.Boolean),
    defaultValue: Schema.optional(Schema.Unknown),
    entityType: Schema.optional(Schema.String),
    isList: Schema.optional(Schema.Boolean),
    displayName: Schema.optional(Schema.String),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettings,
    ),
    fillBehavior: Schema.optional(
      GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior,
    ),
    redact: Schema.optional(Schema.Boolean),
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
  triggerFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
  targetPage?: string;
  dataStoreConnections?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1DataStoreConnection>;
  targetFlow?: string;
  enabled?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    triggerFulfillment: Schema.optional(
      GoogleCloudDialogflowCxV3beta1Fulfillment,
    ),
    targetPage: Schema.optional(Schema.String),
    dataStoreConnections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1DataStoreConnection),
    ),
    targetFlow: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1Page {
  eventHandlers?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1EventHandler>;
  description?: string;
  advancedSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettings;
  name?: string;
  displayName?: string;
  form?: GoogleCloudDialogflowCxV3beta1Form;
  entryFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
  knowledgeConnectorSettings?: GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings;
  transitionRouteGroups?: ReadonlyArray<string>;
  transitionRoutes?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TransitionRoute>;
}

export const GoogleCloudDialogflowCxV3beta1Page: Schema.Schema<GoogleCloudDialogflowCxV3beta1Page> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventHandlers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1EventHandler),
    ),
    description: Schema.optional(Schema.String),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettings,
    ),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    form: Schema.optional(GoogleCloudDialogflowCxV3beta1Form),
    entryFulfillment: Schema.optional(
      GoogleCloudDialogflowCxV3beta1Fulfillment,
    ),
    knowledgeConnectorSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings,
    ),
    transitionRouteGroups: Schema.optional(Schema.Array(Schema.String)),
    transitionRoutes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TransitionRoute),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Page" });

export interface GoogleCloudDialogflowCxV3beta1InlineSchema {
  type?:
    | "DATA_TYPE_UNSPECIFIED"
    | "STRING"
    | "NUMBER"
    | "BOOLEAN"
    | "ARRAY"
    | (string & {});
  items?: GoogleCloudDialogflowCxV3beta1TypeSchema;
}

export const GoogleCloudDialogflowCxV3beta1InlineSchema: Schema.Schema<GoogleCloudDialogflowCxV3beta1InlineSchema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      type: Schema.optional(Schema.String),
      items: Schema.optional(GoogleCloudDialogflowCxV3beta1TypeSchema),
    }),
  ).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1InlineSchema",
  }) as any as Schema.Schema<GoogleCloudDialogflowCxV3beta1InlineSchema>;

export interface GoogleCloudDialogflowCxV3beta1TypeSchemaSchemaReference {
  tool?: string;
  schema?: string;
}

export const GoogleCloudDialogflowCxV3beta1TypeSchemaSchemaReference: Schema.Schema<GoogleCloudDialogflowCxV3beta1TypeSchemaSchemaReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tool: Schema.optional(Schema.String),
    schema: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1TypeSchemaSchemaReference",
  });

export interface GoogleCloudDialogflowCxV3beta1TypeSchema {
  inlineSchema?: GoogleCloudDialogflowCxV3beta1InlineSchema;
  schemaReference?: GoogleCloudDialogflowCxV3beta1TypeSchemaSchemaReference;
}

export const GoogleCloudDialogflowCxV3beta1TypeSchema: Schema.Schema<GoogleCloudDialogflowCxV3beta1TypeSchema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      inlineSchema: Schema.optional(GoogleCloudDialogflowCxV3beta1InlineSchema),
      schemaReference: Schema.optional(
        GoogleCloudDialogflowCxV3beta1TypeSchemaSchemaReference,
      ),
    }),
  ).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1TypeSchema",
  }) as any as Schema.Schema<GoogleCloudDialogflowCxV3beta1TypeSchema>;

export interface GoogleCloudDialogflowCxV3beta1ParameterDefinition {
  name?: string;
  type?:
    | "PARAMETER_TYPE_UNSPECIFIED"
    | "STRING"
    | "NUMBER"
    | "BOOLEAN"
    | "NULL"
    | "OBJECT"
    | "LIST"
    | (string & {});
  typeSchema?: GoogleCloudDialogflowCxV3beta1TypeSchema;
  description?: string;
}

export const GoogleCloudDialogflowCxV3beta1ParameterDefinition: Schema.Schema<GoogleCloudDialogflowCxV3beta1ParameterDefinition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    typeSchema: Schema.optional(GoogleCloudDialogflowCxV3beta1TypeSchema),
    description: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ParameterDefinition",
  });

export interface GoogleCloudDialogflowCxV3beta1FlowMultiLanguageSettings {
  supportedResponseLanguageCodes?: ReadonlyArray<string>;
  enableMultiLanguageDetection?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1FlowMultiLanguageSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1FlowMultiLanguageSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    supportedResponseLanguageCodes: Schema.optional(
      Schema.Array(Schema.String),
    ),
    enableMultiLanguageDetection: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1FlowMultiLanguageSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1NluSettings {
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
  classificationThreshold?: number;
}

export const GoogleCloudDialogflowCxV3beta1NluSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1NluSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    modelTrainingMode: Schema.optional(Schema.String),
    modelType: Schema.optional(Schema.String),
    classificationThreshold: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1NluSettings" });

export interface GoogleCloudDialogflowCxV3beta1Flow {
  name?: string;
  transitionRoutes?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TransitionRoute>;
  outputParameterDefinitions?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ParameterDefinition>;
  description?: string;
  eventHandlers?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1EventHandler>;
  knowledgeConnectorSettings?: GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings;
  displayName?: string;
  multiLanguageSettings?: GoogleCloudDialogflowCxV3beta1FlowMultiLanguageSettings;
  transitionRouteGroups?: ReadonlyArray<string>;
  locked?: boolean;
  advancedSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettings;
  inputParameterDefinitions?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ParameterDefinition>;
  nluSettings?: GoogleCloudDialogflowCxV3beta1NluSettings;
}

export const GoogleCloudDialogflowCxV3beta1Flow: Schema.Schema<GoogleCloudDialogflowCxV3beta1Flow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    transitionRoutes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TransitionRoute),
    ),
    outputParameterDefinitions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ParameterDefinition),
    ),
    description: Schema.optional(Schema.String),
    eventHandlers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1EventHandler),
    ),
    knowledgeConnectorSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings,
    ),
    displayName: Schema.optional(Schema.String),
    multiLanguageSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1FlowMultiLanguageSettings,
    ),
    transitionRouteGroups: Schema.optional(Schema.Array(Schema.String)),
    locked: Schema.optional(Schema.Boolean),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettings,
    ),
    inputParameterDefinitions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ParameterDefinition),
    ),
    nluSettings: Schema.optional(GoogleCloudDialogflowCxV3beta1NluSettings),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Flow" });

export interface GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode {
  page?: GoogleCloudDialogflowCxV3beta1Page;
  flow?: GoogleCloudDialogflowCxV3beta1Flow;
}

export const GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode: Schema.Schema<GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    page: Schema.optional(GoogleCloudDialogflowCxV3beta1Page),
    flow: Schema.optional(GoogleCloudDialogflowCxV3beta1Flow),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode",
  });

export interface GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition {
  covered?: boolean;
  source?: GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode;
  target?: GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode;
  transitionRoute?: GoogleCloudDialogflowCxV3beta1TransitionRoute;
  index?: number;
  eventHandler?: GoogleCloudDialogflowCxV3beta1EventHandler;
}

export const GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition: Schema.Schema<GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    covered: Schema.optional(Schema.Boolean),
    source: Schema.optional(
      GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode,
    ),
    target: Schema.optional(
      GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode,
    ),
    transitionRoute: Schema.optional(
      GoogleCloudDialogflowCxV3beta1TransitionRoute,
    ),
    index: Schema.optional(Schema.Number),
    eventHandler: Schema.optional(GoogleCloudDialogflowCxV3beta1EventHandler),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition",
  });

export interface GoogleCloudDialogflowCxV3beta1TransitionCoverage {
  coverageScore?: number;
  transitions?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition>;
}

export const GoogleCloudDialogflowCxV3beta1TransitionCoverage: Schema.Schema<GoogleCloudDialogflowCxV3beta1TransitionCoverage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    coverageScore: Schema.optional(Schema.Number),
    transitions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1TransitionCoverage",
  });

export interface GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse {
  agent?: string;
  intentCoverage?: GoogleCloudDialogflowCxV3beta1IntentCoverage;
  routeGroupCoverage?: GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage;
  transitionCoverage?: GoogleCloudDialogflowCxV3beta1TransitionCoverage;
}

export const GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agent: Schema.optional(Schema.String),
    intentCoverage: Schema.optional(
      GoogleCloudDialogflowCxV3beta1IntentCoverage,
    ),
    routeGroupCoverage: Schema.optional(
      GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage,
    ),
    transitionCoverage: Schema.optional(
      GoogleCloudDialogflowCxV3beta1TransitionCoverage,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse",
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

export interface GoogleCloudDialogflowCxV3beta1AnswerFeedbackRatingReason {
  reasonLabels?: ReadonlyArray<string>;
  feedback?: string;
}

export const GoogleCloudDialogflowCxV3beta1AnswerFeedbackRatingReason: Schema.Schema<GoogleCloudDialogflowCxV3beta1AnswerFeedbackRatingReason> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reasonLabels: Schema.optional(Schema.Array(Schema.String)),
    feedback: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1AnswerFeedbackRatingReason",
  });

export interface GoogleCloudDialogflowCxV3beta1AnswerFeedback {
  rating?: "RATING_UNSPECIFIED" | "THUMBS_UP" | "THUMBS_DOWN" | (string & {});
  customRating?: string;
  ratingReason?: GoogleCloudDialogflowCxV3beta1AnswerFeedbackRatingReason;
}

export const GoogleCloudDialogflowCxV3beta1AnswerFeedback: Schema.Schema<GoogleCloudDialogflowCxV3beta1AnswerFeedback> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rating: Schema.optional(Schema.String),
    customRating: Schema.optional(Schema.String),
    ratingReason: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AnswerFeedbackRatingReason,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1AnswerFeedback" });

export interface GoogleCloudDialogflowCxV3beta1SubmitAnswerFeedbackRequest {
  responseId?: string;
  updateMask?: string;
  answerFeedback?: GoogleCloudDialogflowCxV3beta1AnswerFeedback;
}

export const GoogleCloudDialogflowCxV3beta1SubmitAnswerFeedbackRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1SubmitAnswerFeedbackRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responseId: Schema.optional(Schema.String),
    updateMask: Schema.optional(Schema.String),
    answerFeedback: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AnswerFeedback,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1SubmitAnswerFeedbackRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1ToolEndUserAuthConfigOauth2AuthCodeConfig {
  oauthToken?: string;
}

export const GoogleCloudDialogflowCxV3beta1ToolEndUserAuthConfigOauth2AuthCodeConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolEndUserAuthConfigOauth2AuthCodeConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oauthToken: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ToolEndUserAuthConfigOauth2AuthCodeConfig",
  });

export interface GoogleCloudDialogflowCxV3beta1ToolEndUserAuthConfigOauth2JwtBearerConfig {
  issuer?: string;
  subject?: string;
  clientKey?: string;
}

export const GoogleCloudDialogflowCxV3beta1ToolEndUserAuthConfigOauth2JwtBearerConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolEndUserAuthConfigOauth2JwtBearerConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    issuer: Schema.optional(Schema.String),
    subject: Schema.optional(Schema.String),
    clientKey: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ToolEndUserAuthConfigOauth2JwtBearerConfig",
  });

export interface GoogleCloudDialogflowCxV3beta1ToolEndUserAuthConfig {
  oauth2AuthCodeConfig?: GoogleCloudDialogflowCxV3beta1ToolEndUserAuthConfigOauth2AuthCodeConfig;
  oauth2JwtBearerConfig?: GoogleCloudDialogflowCxV3beta1ToolEndUserAuthConfigOauth2JwtBearerConfig;
}

export const GoogleCloudDialogflowCxV3beta1ToolEndUserAuthConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolEndUserAuthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oauth2AuthCodeConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolEndUserAuthConfigOauth2AuthCodeConfig,
    ),
    oauth2JwtBearerConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolEndUserAuthConfigOauth2JwtBearerConfig,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ToolEndUserAuthConfig",
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

export interface GoogleCloudDialogflowCxV3TestError {
  status?: GoogleRpcStatus;
  testTime?: string;
  testCase?: string;
}

export const GoogleCloudDialogflowCxV3TestError: Schema.Schema<GoogleCloudDialogflowCxV3TestError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(GoogleRpcStatus),
    testTime: Schema.optional(Schema.String),
    testCase: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TestError" });

export interface GoogleCloudDialogflowCxV3DeployFlowMetadata {
  testErrors?: ReadonlyArray<GoogleCloudDialogflowCxV3TestError>;
}

export const GoogleCloudDialogflowCxV3DeployFlowMetadata: Schema.Schema<GoogleCloudDialogflowCxV3DeployFlowMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testErrors: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3TestError),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3DeployFlowMetadata" });

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
  snippets?: GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource;
  event?: string;
}

export const GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerEventSource: Schema.Schema<GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerEventSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    snippets: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource,
    ),
    event: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerEventSource",
  });

export interface GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings {
  enabled?: boolean;
  endpointingTimeoutDuration?: string;
  maxDigits?: number;
  finishDigit?: string;
  interdigitTimeoutDuration?: string;
}

export const GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings: Schema.Schema<GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    endpointingTimeoutDuration: Schema.optional(Schema.String),
    maxDigits: Schema.optional(Schema.Number),
    finishDigit: Schema.optional(Schema.String),
    interdigitTimeoutDuration: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings",
  });

export interface GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings {
  enableStackdriverLogging?: boolean;
  enableInteractionLogging?: boolean;
  enableConsentBasedRedaction?: boolean;
}

export const GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings: Schema.Schema<GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableStackdriverLogging: Schema.optional(Schema.Boolean),
    enableInteractionLogging: Schema.optional(Schema.Boolean),
    enableConsentBasedRedaction: Schema.optional(Schema.Boolean),
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

export interface GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings {
  endpointerSensitivity?: number;
  useTimeoutBasedEndpointing?: boolean;
  models?: Record<string, string>;
  noSpeechTimeout?: string;
}

export const GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings: Schema.Schema<GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpointerSensitivity: Schema.optional(Schema.Number),
    useTimeoutBasedEndpointing: Schema.optional(Schema.Boolean),
    models: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    noSpeechTimeout: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings",
  });

export interface GoogleCloudDialogflowCxV3AdvancedSettings {
  dtmfSettings?: GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings;
  loggingSettings?: GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings;
  audioExportGcsDestination?: GoogleCloudDialogflowCxV3GcsDestination;
  speechSettings?: GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings;
}

export const GoogleCloudDialogflowCxV3AdvancedSettings: Schema.Schema<GoogleCloudDialogflowCxV3AdvancedSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dtmfSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings,
    ),
    loggingSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings,
    ),
    audioExportGcsDestination: Schema.optional(
      GoogleCloudDialogflowCxV3GcsDestination,
    ),
    speechSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3AdvancedSettings" });

export interface GoogleCloudDialogflowCxV3FulfillmentGeneratorSettings {
  outputParameter?: string;
  inputParameters?: Record<string, string>;
  generator?: string;
}

export const GoogleCloudDialogflowCxV3FulfillmentGeneratorSettings: Schema.Schema<GoogleCloudDialogflowCxV3FulfillmentGeneratorSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputParameter: Schema.optional(Schema.String),
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    generator: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3FulfillmentGeneratorSettings",
  });

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

export interface GoogleCloudDialogflowCxV3ToolCall {
  action?: string;
  tool?: string;
  inputParameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3ToolCall: Schema.Schema<GoogleCloudDialogflowCxV3ToolCall> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    tool: Schema.optional(Schema.String),
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ToolCall" });

export interface GoogleCloudDialogflowCxV3ResponseMessageEndInteraction {}

export const GoogleCloudDialogflowCxV3ResponseMessageEndInteraction: Schema.Schema<GoogleCloudDialogflowCxV3ResponseMessageEndInteraction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessageEndInteraction",
  });

export interface GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess {
  metadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess: Schema.Schema<GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess",
  });

export interface GoogleCloudDialogflowCxV3ResponseMessagePlayAudio {
  allowPlaybackInterruption?: boolean;
  audioUri?: string;
}

export const GoogleCloudDialogflowCxV3ResponseMessagePlayAudio: Schema.Schema<GoogleCloudDialogflowCxV3ResponseMessagePlayAudio> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
    audioUri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessagePlayAudio",
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

export interface GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard {}

export const GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard: Schema.Schema<GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard",
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

export interface GoogleCloudDialogflowCxV3ResponseMessage {
  toolCall?: GoogleCloudDialogflowCxV3ToolCall;
  endInteraction?: GoogleCloudDialogflowCxV3ResponseMessageEndInteraction;
  conversationSuccess?: GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess;
  channel?: string;
  playAudio?: GoogleCloudDialogflowCxV3ResponseMessagePlayAudio;
  responseType?:
    | "RESPONSE_TYPE_UNSPECIFIED"
    | "ENTRY_PROMPT"
    | "PARAMETER_PROMPT"
    | "HANDLER_PROMPT"
    | (string & {});
  payload?: Record<string, unknown>;
  text?: GoogleCloudDialogflowCxV3ResponseMessageText;
  outputAudioText?: GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText;
  telephonyTransferCall?: GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall;
  liveAgentHandoff?: GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff;
  knowledgeInfoCard?: GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard;
  mixedAudio?: GoogleCloudDialogflowCxV3ResponseMessageMixedAudio;
}

export const GoogleCloudDialogflowCxV3ResponseMessage: Schema.Schema<GoogleCloudDialogflowCxV3ResponseMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolCall: Schema.optional(GoogleCloudDialogflowCxV3ToolCall),
    endInteraction: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageEndInteraction,
    ),
    conversationSuccess: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess,
    ),
    channel: Schema.optional(Schema.String),
    playAudio: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessagePlayAudio,
    ),
    responseType: Schema.optional(Schema.String),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    text: Schema.optional(GoogleCloudDialogflowCxV3ResponseMessageText),
    outputAudioText: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText,
    ),
    telephonyTransferCall: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall,
    ),
    liveAgentHandoff: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff,
    ),
    knowledgeInfoCard: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard,
    ),
    mixedAudio: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageMixedAudio,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ResponseMessage" });

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
  enableGenerativeFallback?: boolean;
  generators?: ReadonlyArray<GoogleCloudDialogflowCxV3FulfillmentGeneratorSettings>;
  returnPartialResponses?: boolean;
  setParameterActions?: ReadonlyArray<GoogleCloudDialogflowCxV3FulfillmentSetParameterAction>;
  conditionalCases?: ReadonlyArray<GoogleCloudDialogflowCxV3FulfillmentConditionalCases>;
  messages?: ReadonlyArray<GoogleCloudDialogflowCxV3ResponseMessage>;
  advancedSettings?: GoogleCloudDialogflowCxV3AdvancedSettings;
  webhook?: string;
  tag?: string;
}

export const GoogleCloudDialogflowCxV3Fulfillment: Schema.Schema<GoogleCloudDialogflowCxV3Fulfillment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableGenerativeFallback: Schema.optional(Schema.Boolean),
    generators: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3FulfillmentGeneratorSettings),
    ),
    returnPartialResponses: Schema.optional(Schema.Boolean),
    setParameterActions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3FulfillmentSetParameterAction),
    ),
    conditionalCases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3FulfillmentConditionalCases),
    ),
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ResponseMessage),
    ),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettings,
    ),
    webhook: Schema.optional(Schema.String),
    tag: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Fulfillment" });

export interface GoogleCloudDialogflowCxV3EventHandler {
  targetFlow?: string;
  targetPlaybook?: string;
  event?: string;
  name?: string;
  triggerFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
  targetPage?: string;
}

export const GoogleCloudDialogflowCxV3EventHandler: Schema.Schema<GoogleCloudDialogflowCxV3EventHandler> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetFlow: Schema.optional(Schema.String),
    targetPlaybook: Schema.optional(Schema.String),
    event: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    triggerFulfillment: Schema.optional(GoogleCloudDialogflowCxV3Fulfillment),
    targetPage: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3EventHandler" });

export interface GoogleCloudDialogflowCxV3TransitionRoute {
  condition?: string;
  name?: string;
  triggerFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
  targetPage?: string;
  description?: string;
  intent?: string;
  targetFlow?: string;
}

export const GoogleCloudDialogflowCxV3TransitionRoute: Schema.Schema<GoogleCloudDialogflowCxV3TransitionRoute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    condition: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    triggerFulfillment: Schema.optional(GoogleCloudDialogflowCxV3Fulfillment),
    targetPage: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    intent: Schema.optional(Schema.String),
    targetFlow: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TransitionRoute" });

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
  targetFlow?: string;
  enabled?: boolean;
  triggerFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
  targetPage?: string;
  dataStoreConnections?: ReadonlyArray<GoogleCloudDialogflowCxV3DataStoreConnection>;
}

export const GoogleCloudDialogflowCxV3KnowledgeConnectorSettings: Schema.Schema<GoogleCloudDialogflowCxV3KnowledgeConnectorSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetFlow: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    triggerFulfillment: Schema.optional(GoogleCloudDialogflowCxV3Fulfillment),
    targetPage: Schema.optional(Schema.String),
    dataStoreConnections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3DataStoreConnection),
    ),
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
  advancedSettings?: GoogleCloudDialogflowCxV3AdvancedSettings;
  fillBehavior?: GoogleCloudDialogflowCxV3FormParameterFillBehavior;
  redact?: boolean;
  isList?: boolean;
  displayName?: string;
  entityType?: string;
  required?: boolean;
  defaultValue?: unknown;
}

export const GoogleCloudDialogflowCxV3FormParameter: Schema.Schema<GoogleCloudDialogflowCxV3FormParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettings,
    ),
    fillBehavior: Schema.optional(
      GoogleCloudDialogflowCxV3FormParameterFillBehavior,
    ),
    redact: Schema.optional(Schema.Boolean),
    isList: Schema.optional(Schema.Boolean),
    displayName: Schema.optional(Schema.String),
    entityType: Schema.optional(Schema.String),
    required: Schema.optional(Schema.Boolean),
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
  advancedSettings?: GoogleCloudDialogflowCxV3AdvancedSettings;
  description?: string;
  eventHandlers?: ReadonlyArray<GoogleCloudDialogflowCxV3EventHandler>;
  transitionRoutes?: ReadonlyArray<GoogleCloudDialogflowCxV3TransitionRoute>;
  transitionRouteGroups?: ReadonlyArray<string>;
  entryFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
  knowledgeConnectorSettings?: GoogleCloudDialogflowCxV3KnowledgeConnectorSettings;
  form?: GoogleCloudDialogflowCxV3Form;
  name?: string;
  displayName?: string;
}

export const GoogleCloudDialogflowCxV3Page: Schema.Schema<GoogleCloudDialogflowCxV3Page> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettings,
    ),
    description: Schema.optional(Schema.String),
    eventHandlers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3EventHandler),
    ),
    transitionRoutes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3TransitionRoute),
    ),
    transitionRouteGroups: Schema.optional(Schema.Array(Schema.String)),
    entryFulfillment: Schema.optional(GoogleCloudDialogflowCxV3Fulfillment),
    knowledgeConnectorSettings: Schema.optional(
      GoogleCloudDialogflowCxV3KnowledgeConnectorSettings,
    ),
    form: Schema.optional(GoogleCloudDialogflowCxV3Form),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Page" });

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

export interface GoogleCloudDialogflowCxV3IntentParameter {
  entityType?: string;
  redact?: boolean;
  id?: string;
  isList?: boolean;
}

export const GoogleCloudDialogflowCxV3IntentParameter: Schema.Schema<GoogleCloudDialogflowCxV3IntentParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityType: Schema.optional(Schema.String),
    redact: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.String),
    isList: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3IntentParameter" });

export interface GoogleCloudDialogflowCxV3Intent {
  isFallback?: boolean;
  description?: string;
  trainingPhrases?: ReadonlyArray<GoogleCloudDialogflowCxV3IntentTrainingPhrase>;
  dtmfPattern?: string;
  priority?: number;
  name?: string;
  displayName?: string;
  parameters?: ReadonlyArray<GoogleCloudDialogflowCxV3IntentParameter>;
  labels?: Record<string, string>;
}

export const GoogleCloudDialogflowCxV3Intent: Schema.Schema<GoogleCloudDialogflowCxV3Intent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isFallback: Schema.optional(Schema.Boolean),
    description: Schema.optional(Schema.String),
    trainingPhrases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3IntentTrainingPhrase),
    ),
    dtmfPattern: Schema.optional(Schema.String),
    priority: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    parameters: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3IntentParameter),
    ),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Intent" });

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

export interface GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput {
  sessionParameters?: Record<string, unknown>;
  currentPage?: GoogleCloudDialogflowCxV3Page;
  diagnosticInfo?: Record<string, unknown>;
  triggeredIntent?: GoogleCloudDialogflowCxV3Intent;
  differences?: ReadonlyArray<GoogleCloudDialogflowCxV3TestRunDifference>;
  textResponses?: ReadonlyArray<GoogleCloudDialogflowCxV3ResponseMessageText>;
  status?: GoogleRpcStatus;
}

export const GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput: Schema.Schema<GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    currentPage: Schema.optional(GoogleCloudDialogflowCxV3Page),
    diagnosticInfo: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    triggeredIntent: Schema.optional(GoogleCloudDialogflowCxV3Intent),
    differences: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3TestRunDifference),
    ),
    textResponses: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ResponseMessageText),
    ),
    status: Schema.optional(GoogleRpcStatus),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput",
  });

export interface GoogleCloudDialogflowCxV3TextInput {
  text?: string;
}

export const GoogleCloudDialogflowCxV3TextInput: Schema.Schema<GoogleCloudDialogflowCxV3TextInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TextInput" });

export interface GoogleCloudDialogflowCxV3IntentInput {
  intent?: string;
}

export const GoogleCloudDialogflowCxV3IntentInput: Schema.Schema<GoogleCloudDialogflowCxV3IntentInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3IntentInput" });

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

export interface GoogleCloudDialogflowCxV3ToolCallResultError {
  message?: string;
}

export const GoogleCloudDialogflowCxV3ToolCallResultError: Schema.Schema<GoogleCloudDialogflowCxV3ToolCallResultError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ToolCallResultError" });

export interface GoogleCloudDialogflowCxV3ToolCallResult {
  outputParameters?: Record<string, unknown>;
  action?: string;
  tool?: string;
  error?: GoogleCloudDialogflowCxV3ToolCallResultError;
}

export const GoogleCloudDialogflowCxV3ToolCallResult: Schema.Schema<GoogleCloudDialogflowCxV3ToolCallResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    action: Schema.optional(Schema.String),
    tool: Schema.optional(Schema.String),
    error: Schema.optional(GoogleCloudDialogflowCxV3ToolCallResultError),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ToolCallResult" });

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
  sampleRateHertz?: number;
  singleUtterance?: boolean;
  bargeInConfig?: GoogleCloudDialogflowCxV3BargeInConfig;
  enableWordInfo?: boolean;
  model?: string;
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
  phraseHints?: ReadonlyArray<string>;
  modelVariant?:
    | "SPEECH_MODEL_VARIANT_UNSPECIFIED"
    | "USE_BEST_AVAILABLE"
    | "USE_STANDARD"
    | "USE_ENHANCED"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3InputAudioConfig: Schema.Schema<GoogleCloudDialogflowCxV3InputAudioConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sampleRateHertz: Schema.optional(Schema.Number),
    singleUtterance: Schema.optional(Schema.Boolean),
    bargeInConfig: Schema.optional(GoogleCloudDialogflowCxV3BargeInConfig),
    enableWordInfo: Schema.optional(Schema.Boolean),
    model: Schema.optional(Schema.String),
    optOutConformerModelMigration: Schema.optional(Schema.Boolean),
    audioEncoding: Schema.optional(Schema.String),
    phraseHints: Schema.optional(Schema.Array(Schema.String)),
    modelVariant: Schema.optional(Schema.String),
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
  text?: GoogleCloudDialogflowCxV3TextInput;
  intent?: GoogleCloudDialogflowCxV3IntentInput;
  event?: GoogleCloudDialogflowCxV3EventInput;
  dtmf?: GoogleCloudDialogflowCxV3DtmfInput;
  toolCallResult?: GoogleCloudDialogflowCxV3ToolCallResult;
  languageCode?: string;
  audio?: GoogleCloudDialogflowCxV3AudioInput;
}

export const GoogleCloudDialogflowCxV3QueryInput: Schema.Schema<GoogleCloudDialogflowCxV3QueryInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(GoogleCloudDialogflowCxV3TextInput),
    intent: Schema.optional(GoogleCloudDialogflowCxV3IntentInput),
    event: Schema.optional(GoogleCloudDialogflowCxV3EventInput),
    dtmf: Schema.optional(GoogleCloudDialogflowCxV3DtmfInput),
    toolCallResult: Schema.optional(GoogleCloudDialogflowCxV3ToolCallResult),
    languageCode: Schema.optional(Schema.String),
    audio: Schema.optional(GoogleCloudDialogflowCxV3AudioInput),
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

export interface GoogleCloudDialogflowCxV3TestConfig {
  page?: string;
  trackingParameters?: ReadonlyArray<string>;
  flow?: string;
}

export const GoogleCloudDialogflowCxV3TestConfig: Schema.Schema<GoogleCloudDialogflowCxV3TestConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    page: Schema.optional(Schema.String),
    trackingParameters: Schema.optional(Schema.Array(Schema.String)),
    flow: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TestConfig" });

export interface GoogleCloudDialogflowCxV3TestCaseResult {
  conversationTurns?: ReadonlyArray<GoogleCloudDialogflowCxV3ConversationTurn>;
  testResult?: "TEST_RESULT_UNSPECIFIED" | "PASSED" | "FAILED" | (string & {});
  testTime?: string;
  environment?: string;
  name?: string;
}

export const GoogleCloudDialogflowCxV3TestCaseResult: Schema.Schema<GoogleCloudDialogflowCxV3TestCaseResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationTurns: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ConversationTurn),
    ),
    testResult: Schema.optional(Schema.String),
    testTime: Schema.optional(Schema.String),
    environment: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TestCaseResult" });

export interface GoogleCloudDialogflowCxV3TestCase {
  notes?: string;
  name?: string;
  displayName?: string;
  testCaseConversationTurns?: ReadonlyArray<GoogleCloudDialogflowCxV3ConversationTurn>;
  tags?: ReadonlyArray<string>;
  testConfig?: GoogleCloudDialogflowCxV3TestConfig;
  creationTime?: string;
  lastTestResult?: GoogleCloudDialogflowCxV3TestCaseResult;
}

export const GoogleCloudDialogflowCxV3TestCase: Schema.Schema<GoogleCloudDialogflowCxV3TestCase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notes: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    testCaseConversationTurns: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ConversationTurn),
    ),
    tags: Schema.optional(Schema.Array(Schema.String)),
    testConfig: Schema.optional(GoogleCloudDialogflowCxV3TestConfig),
    creationTime: Schema.optional(Schema.String),
    lastTestResult: Schema.optional(GoogleCloudDialogflowCxV3TestCaseResult),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TestCase" });

export interface GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuerySearchContext {
  key?: string;
  value?: string;
}

export const GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuerySearchContext: Schema.Schema<GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuerySearchContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuerySearchContext",
  });

export interface GoogleCloudDialogflowV2ServiceLatencyInternalServiceLatency {
  step?: string;
  latencyMs?: number;
  completeTime?: string;
  startTime?: string;
}

export const GoogleCloudDialogflowV2ServiceLatencyInternalServiceLatency: Schema.Schema<GoogleCloudDialogflowV2ServiceLatencyInternalServiceLatency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    step: Schema.optional(Schema.String),
    latencyMs: Schema.optional(Schema.Number),
    completeTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ServiceLatencyInternalServiceLatency",
  });

export interface GoogleCloudDialogflowV2beta1ServiceLatencyInternalServiceLatency {
  latencyMs?: number;
  completeTime?: string;
  step?: string;
  startTime?: string;
}

export const GoogleCloudDialogflowV2beta1ServiceLatencyInternalServiceLatency: Schema.Schema<GoogleCloudDialogflowV2beta1ServiceLatencyInternalServiceLatency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latencyMs: Schema.optional(Schema.Number),
    completeTime: Schema.optional(Schema.String),
    step: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowCxV3beta1RestorePlaybookVersionRequest {}

export const GoogleCloudDialogflowCxV3beta1RestorePlaybookVersionRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1RestorePlaybookVersionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RestorePlaybookVersionRequest",
  });

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

export interface GoogleCloudDialogflowV2beta1FreeFormSuggestion {
  response?: string;
}

export const GoogleCloudDialogflowV2beta1FreeFormSuggestion: Schema.Schema<GoogleCloudDialogflowV2beta1FreeFormSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    response: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1FreeFormSuggestion" });

export interface GoogleCloudDialogflowV2beta1ToolCall {
  tool?: string;
  cesToolset?: string;
  state?:
    | "STATE_UNSPECIFIED"
    | "TRIGGERED"
    | "NEEDS_CONFIRMATION"
    | (string & {});
  toolDisplayDetails?: string;
  inputParameters?: Record<string, unknown>;
  createTime?: string;
  toolDisplayName?: string;
  cesTool?: string;
  answerRecord?: string;
  action?: string;
  cesApp?: string;
}

export const GoogleCloudDialogflowV2beta1ToolCall: Schema.Schema<GoogleCloudDialogflowV2beta1ToolCall> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tool: Schema.optional(Schema.String),
    cesToolset: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    toolDisplayDetails: Schema.optional(Schema.String),
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    createTime: Schema.optional(Schema.String),
    toolDisplayName: Schema.optional(Schema.String),
    cesTool: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    cesApp: Schema.optional(Schema.String),
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
  createTime?: string;
  content?: string;
  tool?: string;
  cesToolset?: string;
  rawContent?: string;
  action?: string;
  cesApp?: string;
  error?: GoogleCloudDialogflowV2beta1ToolCallResultError;
  cesTool?: string;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2beta1ToolCallResult: Schema.Schema<GoogleCloudDialogflowV2beta1ToolCallResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    tool: Schema.optional(Schema.String),
    cesToolset: Schema.optional(Schema.String),
    rawContent: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    cesApp: Schema.optional(Schema.String),
    error: Schema.optional(GoogleCloudDialogflowV2beta1ToolCallResultError),
    cesTool: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowV2beta1SummarySuggestionSummarySection {
  summary?: string;
  section?: string;
}

export const GoogleCloudDialogflowV2beta1SummarySuggestionSummarySection: Schema.Schema<GoogleCloudDialogflowV2beta1SummarySuggestionSummarySection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    summary: Schema.optional(Schema.String),
    section: Schema.optional(Schema.String),
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
  suggestionIndex?: number;
  answerRecord?: string;
  similarityScore?: number;
}

export const GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion: Schema.Schema<GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suggestionIndex: Schema.optional(Schema.Number),
    answerRecord: Schema.optional(Schema.String),
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
  displayDetails?: string;
  systemAction?: string;
  triggeringEvent?:
    | "TRIGGER_EVENT_UNSPECIFIED"
    | "END_OF_UTTERANCE"
    | "MANUAL_CALL"
    | "CUSTOMER_MESSAGE"
    | "AGENT_MESSAGE"
    | "TOOL_CALL_COMPLETION"
    | (string & {});
  displayName?: string;
  condition?: string;
  duplicateCheckResult?: GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResult;
  agentAction?: string;
}

export const GoogleCloudDialogflowV2beta1AgentCoachingInstruction: Schema.Schema<GoogleCloudDialogflowV2beta1AgentCoachingInstruction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayDetails: Schema.optional(Schema.String),
    systemAction: Schema.optional(Schema.String),
    triggeringEvent: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    condition: Schema.optional(Schema.String),
    duplicateCheckResult: Schema.optional(
      GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResult,
    ),
    agentAction: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1AgentCoachingInstruction",
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

export interface GoogleCloudDialogflowV2beta1GeneratorSuggestion {
  freeFormSuggestion?: GoogleCloudDialogflowV2beta1FreeFormSuggestion;
  toolCallInfo?: ReadonlyArray<GoogleCloudDialogflowV2beta1GeneratorSuggestionToolCallInfo>;
  summarySuggestion?: GoogleCloudDialogflowV2beta1SummarySuggestion;
  agentCoachingSuggestion?: GoogleCloudDialogflowV2beta1AgentCoachingSuggestion;
}

export const GoogleCloudDialogflowV2beta1GeneratorSuggestion: Schema.Schema<GoogleCloudDialogflowV2beta1GeneratorSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    freeFormSuggestion: Schema.optional(
      GoogleCloudDialogflowV2beta1FreeFormSuggestion,
    ),
    toolCallInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1GeneratorSuggestionToolCallInfo),
    ),
    summarySuggestion: Schema.optional(
      GoogleCloudDialogflowV2beta1SummarySuggestion,
    ),
    agentCoachingSuggestion: Schema.optional(
      GoogleCloudDialogflowV2beta1AgentCoachingSuggestion,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1GeneratorSuggestion",
  });

export interface GoogleCloudDialogflowV2beta1GenerateSuggestionsResponseGeneratorSuggestionAnswer {
  answerRecord?: string;
  generatorSuggestion?: GoogleCloudDialogflowV2beta1GeneratorSuggestion;
  sourceGenerator?: string;
}

export const GoogleCloudDialogflowV2beta1GenerateSuggestionsResponseGeneratorSuggestionAnswer: Schema.Schema<GoogleCloudDialogflowV2beta1GenerateSuggestionsResponseGeneratorSuggestionAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answerRecord: Schema.optional(Schema.String),
    generatorSuggestion: Schema.optional(
      GoogleCloudDialogflowV2beta1GeneratorSuggestion,
    ),
    sourceGenerator: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1GenerateSuggestionsResponseGeneratorSuggestionAnswer",
  });

export interface GoogleCloudDialogflowV2beta1GenerateSuggestionsResponse {
  latestMessage?: string;
  generatorSuggestionAnswers?: ReadonlyArray<GoogleCloudDialogflowV2beta1GenerateSuggestionsResponseGeneratorSuggestionAnswer>;
}

export const GoogleCloudDialogflowV2beta1GenerateSuggestionsResponse: Schema.Schema<GoogleCloudDialogflowV2beta1GenerateSuggestionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestMessage: Schema.optional(Schema.String),
    generatorSuggestionAnswers: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1GenerateSuggestionsResponseGeneratorSuggestionAnswer,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1GenerateSuggestionsResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1IntentParameter {
  id?: string;
  isList?: boolean;
  entityType?: string;
  redact?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1IntentParameter: Schema.Schema<GoogleCloudDialogflowCxV3beta1IntentParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    isList: Schema.optional(Schema.Boolean),
    entityType: Schema.optional(Schema.String),
    redact: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1IntentParameter" });

export interface GoogleCloudDialogflowCxV3beta1EntityTypeEntity {
  value?: string;
  synonyms?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1EntityTypeEntity: Schema.Schema<GoogleCloudDialogflowCxV3beta1EntityTypeEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    synonyms: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1EntityTypeEntity" });

export interface GoogleCloudDialogflowCxV3beta1SessionEntityType {
  name?: string;
  entityOverrideMode?:
    | "ENTITY_OVERRIDE_MODE_UNSPECIFIED"
    | "ENTITY_OVERRIDE_MODE_OVERRIDE"
    | "ENTITY_OVERRIDE_MODE_SUPPLEMENT"
    | (string & {});
  entities?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1EntityTypeEntity>;
}

export const GoogleCloudDialogflowCxV3beta1SessionEntityType: Schema.Schema<GoogleCloudDialogflowCxV3beta1SessionEntityType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    entityOverrideMode: Schema.optional(Schema.String),
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1EntityTypeEntity),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1SessionEntityType",
  });

export interface GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse {
  sessionEntityTypes?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1SessionEntityType>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionEntityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1SessionEntityType),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia {
  fileUri?: string;
  thumbnailUri?: string;
  height?: "HEIGHT_UNSPECIFIED" | "SHORT" | "MEDIUM" | "TALL" | (string & {});
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileUri: Schema.optional(Schema.String),
    thumbnailUri: Schema.optional(Schema.String),
    height: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply {
  postbackData?: string;
  text?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    postbackData: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply",
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

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction {
  dial?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial;
  postbackData?: string;
  shareLocation?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation;
  text?: string;
  openUrl?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dial: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial,
    ),
    postbackData: Schema.optional(Schema.String),
    shareLocation: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation,
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
  media?: GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia;
  title?: string;
  suggestions?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion>;
  description?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    media: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia,
    ),
    title: Schema.optional(Schema.String),
    suggestions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion),
    ),
    description: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent",
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

export interface GoogleCloudDialogflowCxV3RunTestCaseMetadata {}

export const GoogleCloudDialogflowCxV3RunTestCaseMetadata: Schema.Schema<GoogleCloudDialogflowCxV3RunTestCaseMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3RunTestCaseMetadata",
  });

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

export interface GoogleCloudDialogflowV2beta1IntentParameter {
  entityTypeDisplayName?: string;
  mandatory?: boolean;
  defaultValue?: string;
  value?: string;
  isList?: boolean;
  name?: string;
  displayName?: string;
  prompts?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1IntentParameter: Schema.Schema<GoogleCloudDialogflowV2beta1IntentParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypeDisplayName: Schema.optional(Schema.String),
    mandatory: Schema.optional(Schema.Boolean),
    defaultValue: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    isList: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    prompts: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentParameter" });

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

export interface GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction {
  url?: string;
  urlTypeHint?:
    | "URL_TYPE_HINT_UNSPECIFIED"
    | "AMP_ACTION"
    | "AMP_CONTENT"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    urlTypeHint: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction",
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

export interface GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem {
  description?: string;
  footer?: string;
  title?: string;
  openUriAction?: GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
}

export const GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    footer: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    openUriAction: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction,
    ),
    image: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
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
  openUriAction?: GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction;
  title?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    openUriAction: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction,
    ),
    title: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageBasicCard {
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton>;
  formattedText?: string;
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  title?: string;
  subtitle?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageBasicCard: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageBasicCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton),
    ),
    formattedText: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
    title: Schema.optional(Schema.String),
    subtitle: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageBasicCard",
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

export interface GoogleCloudDialogflowV2beta1IntentMessageTableCard {
  rows?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageTableCardRow>;
  columnProperties?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageColumnProperties>;
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton>;
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  title?: string;
  subtitle?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageTableCard: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageTableCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rows: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageTableCardRow),
    ),
    columnProperties: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageColumnProperties),
    ),
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton),
    ),
    image: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
    title: Schema.optional(Schema.String),
    subtitle: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageTableCard",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo {
  synonyms?: ReadonlyArray<string>;
  key?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    synonyms: Schema.optional(Schema.Array(Schema.String)),
    key: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageListSelectItem {
  info?: GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo;
  title?: string;
  description?: string;
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
}

export const GoogleCloudDialogflowV2beta1IntentMessageListSelectItem: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageListSelectItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  title?: string;
  subtitle?: string;
  items?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageListSelectItem>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageListSelect: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageListSelect> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    subtitle: Schema.optional(Schema.String),
    items: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageListSelectItem),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageListSelect",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem {
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  description?: string;
  info?: GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo;
  title?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    image: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
    description: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject {
  name?: string;
  description?: string;
  largeImage?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  icon?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  contentUrl?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    largeImage: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
    icon: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
    contentUrl: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageMediaContent {
  mediaObjects?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject>;
  mediaType?: "RESPONSE_MEDIA_TYPE_UNSPECIFIED" | "AUDIO" | (string & {});
}

export const GoogleCloudDialogflowV2beta1IntentMessageMediaContent: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageMediaContent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mediaObjects: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject,
      ),
    ),
    mediaType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageMediaContent",
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

export interface GoogleCloudDialogflowV2beta1IntentMessageText {
  text?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageText: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageText> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentMessageText" });

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
  imageUri?: string;
  title?: string;
  subtitle?: string;
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageCardButton>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageCard: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageUri: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    subtitle: Schema.optional(Schema.String),
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageCardButton),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentMessageCard" });

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

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard {
  cardWidth?: "CARD_WIDTH_UNSPECIFIED" | "SMALL" | "MEDIUM" | (string & {});
  cardContents?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cardWidth: Schema.optional(Schema.String),
    cardContents: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageQuickReplies {
  quickReplies?: ReadonlyArray<string>;
  title?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageQuickReplies: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageQuickReplies> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    quickReplies: Schema.optional(Schema.Array(Schema.String)),
    title: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageQuickReplies",
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

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard {
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
  cardContent?: GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cardOrientation: Schema.optional(Schema.String),
    thumbnailImageAlignment: Schema.optional(Schema.String),
    cardContent: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard",
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

export interface GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio {
  audioUri?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audioUri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio",
  });

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

export interface GoogleCloudDialogflowV2beta1IntentMessage {
  telephonySynthesizeSpeech?: GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech;
  browseCarouselCard?: GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard;
  basicCard?: GoogleCloudDialogflowV2beta1IntentMessageBasicCard;
  tableCard?: GoogleCloudDialogflowV2beta1IntentMessageTableCard;
  listSelect?: GoogleCloudDialogflowV2beta1IntentMessageListSelect;
  carouselSelect?: GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect;
  mediaContent?: GoogleCloudDialogflowV2beta1IntentMessageMediaContent;
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
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  payload?: Record<string, unknown>;
  text?: GoogleCloudDialogflowV2beta1IntentMessageText;
  card?: GoogleCloudDialogflowV2beta1IntentMessageCard;
  telephonyTransferCall?: GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall;
  rbmCarouselRichCard?: GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard;
  quickReplies?: GoogleCloudDialogflowV2beta1IntentMessageQuickReplies;
  simpleResponses?: GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses;
  rbmStandaloneRichCard?: GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard;
  suggestions?: GoogleCloudDialogflowV2beta1IntentMessageSuggestions;
  telephonyPlayAudio?: GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio;
  rbmText?: GoogleCloudDialogflowV2beta1IntentMessageRbmText;
}

export const GoogleCloudDialogflowV2beta1IntentMessage: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    telephonySynthesizeSpeech: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech,
    ),
    browseCarouselCard: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard,
    ),
    basicCard: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageBasicCard,
    ),
    tableCard: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageTableCard,
    ),
    listSelect: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageListSelect,
    ),
    carouselSelect: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect,
    ),
    mediaContent: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageMediaContent,
    ),
    linkOutSuggestion: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion,
    ),
    platform: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    text: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageText),
    card: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageCard),
    telephonyTransferCall: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall,
    ),
    rbmCarouselRichCard: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard,
    ),
    quickReplies: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageQuickReplies,
    ),
    simpleResponses: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses,
    ),
    rbmStandaloneRichCard: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard,
    ),
    suggestions: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageSuggestions,
    ),
    telephonyPlayAudio: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio,
    ),
    rbmText: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageRbmText),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentMessage" });

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

export interface GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart {
  alias?: string;
  userDefined?: boolean;
  text?: string;
  entityType?: string;
}

export const GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart: Schema.Schema<GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    alias: Schema.optional(Schema.String),
    userDefined: Schema.optional(Schema.Boolean),
    text: Schema.optional(Schema.String),
    entityType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart",
  });

export interface GoogleCloudDialogflowV2beta1IntentTrainingPhrase {
  parts?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart>;
  timesAddedCount?: number;
  name?: string;
  type?: "TYPE_UNSPECIFIED" | "EXAMPLE" | "TEMPLATE" | (string & {});
}

export const GoogleCloudDialogflowV2beta1IntentTrainingPhrase: Schema.Schema<GoogleCloudDialogflowV2beta1IntentTrainingPhrase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart),
    ),
    timesAddedCount: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentTrainingPhrase",
  });

export interface GoogleCloudDialogflowV2beta1Intent {
  endInteraction?: boolean;
  followupIntentInfo?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo>;
  resetContexts?: boolean;
  name?: string;
  parameters?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentParameter>;
  events?: ReadonlyArray<string>;
  priority?: number;
  mlEnabled?: boolean;
  action?: string;
  inputContextNames?: ReadonlyArray<string>;
  messages?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessage>;
  liveAgentHandoff?: boolean;
  rootFollowupIntentName?: string;
  displayName?: string;
  mlDisabled?: boolean;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2beta1Context>;
  webhookState?:
    | "WEBHOOK_STATE_UNSPECIFIED"
    | "WEBHOOK_STATE_ENABLED"
    | "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"
    | (string & {});
  trainingPhrases?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentTrainingPhrase>;
  parentFollowupIntentName?: string;
  isFallback?: boolean;
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
}

export const GoogleCloudDialogflowV2beta1Intent: Schema.Schema<GoogleCloudDialogflowV2beta1Intent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endInteraction: Schema.optional(Schema.Boolean),
    followupIntentInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo),
    ),
    resetContexts: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    parameters: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentParameter),
    ),
    events: Schema.optional(Schema.Array(Schema.String)),
    priority: Schema.optional(Schema.Number),
    mlEnabled: Schema.optional(Schema.Boolean),
    action: Schema.optional(Schema.String),
    inputContextNames: Schema.optional(Schema.Array(Schema.String)),
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessage),
    ),
    liveAgentHandoff: Schema.optional(Schema.Boolean),
    rootFollowupIntentName: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    mlDisabled: Schema.optional(Schema.Boolean),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1Context),
    ),
    webhookState: Schema.optional(Schema.String),
    trainingPhrases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentTrainingPhrase),
    ),
    parentFollowupIntentName: Schema.optional(Schema.String),
    isFallback: Schema.optional(Schema.Boolean),
    defaultResponsePlatforms: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1Intent" });

export interface GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer {
  source?: string;
  matchConfidence?: number;
  faqQuestion?: string;
  matchConfidenceLevel?:
    | "MATCH_CONFIDENCE_LEVEL_UNSPECIFIED"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | (string & {});
  answer?: string;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
    matchConfidence: Schema.optional(Schema.Number),
    faqQuestion: Schema.optional(Schema.String),
    matchConfidenceLevel: Schema.optional(Schema.String),
    answer: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowV2beta1QueryResult {
  intent?: GoogleCloudDialogflowV2beta1Intent;
  allRequiredParamsPresent?: boolean;
  webhookSource?: string;
  fulfillmentMessages?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessage>;
  webhookPayload?: Record<string, unknown>;
  fulfillmentText?: string;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2beta1Context>;
  speechRecognitionConfidence?: number;
  intentDetectionConfidence?: number;
  diagnosticInfo?: Record<string, unknown>;
  queryText?: string;
  languageCode?: string;
  knowledgeAnswers?: GoogleCloudDialogflowV2beta1KnowledgeAnswers;
  parameters?: Record<string, unknown>;
  sentimentAnalysisResult?: GoogleCloudDialogflowV2beta1SentimentAnalysisResult;
  action?: string;
  cancelsSlotFilling?: boolean;
}

export const GoogleCloudDialogflowV2beta1QueryResult: Schema.Schema<GoogleCloudDialogflowV2beta1QueryResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intent: Schema.optional(GoogleCloudDialogflowV2beta1Intent),
    allRequiredParamsPresent: Schema.optional(Schema.Boolean),
    webhookSource: Schema.optional(Schema.String),
    fulfillmentMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessage),
    ),
    webhookPayload: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    fulfillmentText: Schema.optional(Schema.String),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1Context),
    ),
    speechRecognitionConfidence: Schema.optional(Schema.Number),
    intentDetectionConfidence: Schema.optional(Schema.Number),
    diagnosticInfo: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    queryText: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    knowledgeAnswers: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAnswers,
    ),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    sentimentAnalysisResult: Schema.optional(
      GoogleCloudDialogflowV2beta1SentimentAnalysisResult,
    ),
    action: Schema.optional(Schema.String),
    cancelsSlotFilling: Schema.optional(Schema.Boolean),
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
  queryResult?: GoogleCloudDialogflowV2beta1QueryResult;
  session?: string;
  alternativeQueryResults?: ReadonlyArray<GoogleCloudDialogflowV2beta1QueryResult>;
  originalDetectIntentRequest?: GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest;
}

export const GoogleCloudDialogflowV2beta1WebhookRequest: Schema.Schema<GoogleCloudDialogflowV2beta1WebhookRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responseId: Schema.optional(Schema.String),
    queryResult: Schema.optional(GoogleCloudDialogflowV2beta1QueryResult),
    session: Schema.optional(Schema.String),
    alternativeQueryResults: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1QueryResult),
    ),
    originalDetectIntentRequest: Schema.optional(
      GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1WebhookRequest" });

export interface GoogleCloudDialogflowCxV3beta1FlowInvocation {
  flow?: string;
  displayName?: string;
  outputActionParameters?: Record<string, unknown>;
  flowState?:
    | "OUTPUT_STATE_UNSPECIFIED"
    | "OUTPUT_STATE_OK"
    | "OUTPUT_STATE_CANCELLED"
    | "OUTPUT_STATE_FAILED"
    | "OUTPUT_STATE_ESCALATED"
    | "OUTPUT_STATE_PENDING"
    | (string & {});
  inputActionParameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3beta1FlowInvocation: Schema.Schema<GoogleCloudDialogflowCxV3beta1FlowInvocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flow: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    outputActionParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    flowState: Schema.optional(Schema.String),
    inputActionParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1FlowInvocation" });

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

export interface GoogleCloudDialogflowCxV3WebhookRequestIntentInfo {
  confidence?: number;
  lastMatchedIntent?: string;
  displayName?: string;
  parameters?: Record<
    string,
    GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue
  >;
}

export const GoogleCloudDialogflowCxV3WebhookRequestIntentInfo: Schema.Schema<GoogleCloudDialogflowCxV3WebhookRequestIntentInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
    lastMatchedIntent: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    parameters: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3WebhookRequestIntentInfo",
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
  title?: string;
  subtitle?: string;
  image?: GoogleCloudDialogflowV2IntentMessageImage;
  formattedText?: string;
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageBasicCardButton>;
}

export const GoogleCloudDialogflowV2IntentMessageBasicCard: Schema.Schema<GoogleCloudDialogflowV2IntentMessageBasicCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    subtitle: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
    formattedText: Schema.optional(Schema.String),
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageBasicCardButton),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageBasicCard" });

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

export interface GoogleCloudDialogflowCxV3beta1SafetySettingsPromptSecuritySettings {
  enablePromptSecurity?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1SafetySettingsPromptSecuritySettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1SafetySettingsPromptSecuritySettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enablePromptSecurity: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1SafetySettingsPromptSecuritySettings",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuerySearchContext {
  key?: string;
  value?: string;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuerySearchContext: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuerySearchContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuery: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export interface GoogleCloudDialogflowV2beta1EncryptionSpec {
  name?: string;
  kmsKey?: string;
}

export const GoogleCloudDialogflowV2beta1EncryptionSpec: Schema.Schema<GoogleCloudDialogflowV2beta1EncryptionSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    kmsKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1EncryptionSpec" });

export interface GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval {
  confidenceLevel?: number;
  lowerBound?: number;
  ratio?: number;
  upperBound?: number;
}

export const GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidenceLevel: Schema.optional(Schema.Number),
    lowerBound: Schema.optional(Schema.Number),
    ratio: Schema.optional(Schema.Number),
    upperBound: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval",
  });

export interface GoogleCloudDialogflowCxV3beta1ExperimentResultMetric {
  type?:
    | "METRIC_UNSPECIFIED"
    | "CONTAINED_SESSION_NO_CALLBACK_RATE"
    | "LIVE_AGENT_HANDOFF_RATE"
    | "CALLBACK_SESSION_RATE"
    | "ABANDONED_SESSION_RATE"
    | "SESSION_END_RATE"
    | (string & {});
  ratio?: number;
  count?: number;
  confidenceInterval?: GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval;
  countType?:
    | "COUNT_TYPE_UNSPECIFIED"
    | "TOTAL_NO_MATCH_COUNT"
    | "TOTAL_TURN_COUNT"
    | "AVERAGE_TURN_COUNT"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1ExperimentResultMetric: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExperimentResultMetric> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    ratio: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Number),
    confidenceInterval: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval,
    ),
    countType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExperimentResultMetric",
  });

export interface GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics {
  metrics?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ExperimentResultMetric>;
  version?: string;
  sessionCount?: number;
}

export const GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metrics: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ExperimentResultMetric),
    ),
    version: Schema.optional(Schema.String),
    sessionCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportEntityTypesMetadata {}

export const GoogleCloudDialogflowCxV3beta1ExportEntityTypesMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportEntityTypesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportEntityTypesMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsGroundingSignals {
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

export const GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsGroundingSignals: Schema.Schema<GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsGroundingSignals> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    decision: Schema.optional(Schema.String),
    score: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsGroundingSignals",
  });

export interface GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsSearchSnippet {
  documentTitle?: string;
  metadata?: Record<string, unknown>;
  documentUri?: string;
  text?: string;
}

export const GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsSearchSnippet: Schema.Schema<GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsSearchSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    documentTitle: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    documentUri: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsSearchSnippet",
  });

export interface GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsRewriterModelCallSignals {
  renderedPrompt?: string;
  model?: string;
  modelOutput?: string;
}

export const GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsRewriterModelCallSignals: Schema.Schema<GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsRewriterModelCallSignals> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    renderedPrompt: Schema.optional(Schema.String),
    model: Schema.optional(Schema.String),
    modelOutput: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsRewriterModelCallSignals",
  });

export interface GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsAnswerGenerationModelCallSignals {
  renderedPrompt?: string;
  model?: string;
  modelOutput?: string;
}

export const GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsAnswerGenerationModelCallSignals: Schema.Schema<GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsAnswerGenerationModelCallSignals> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    renderedPrompt: Schema.optional(Schema.String),
    model: Schema.optional(Schema.String),
    modelOutput: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsAnswerGenerationModelCallSignals",
  });

export interface GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsSafetySignals {
  matchedBannedPhrase?: string;
  decision?:
    | "SAFETY_DECISION_UNSPECIFIED"
    | "ACCEPTED_BY_SAFETY_CHECK"
    | "REJECTED_BY_SAFETY_CHECK"
    | (string & {});
  bannedPhraseMatch?:
    | "BANNED_PHRASE_MATCH_UNSPECIFIED"
    | "BANNED_PHRASE_MATCH_NONE"
    | "BANNED_PHRASE_MATCH_QUERY"
    | "BANNED_PHRASE_MATCH_RESPONSE"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsSafetySignals: Schema.Schema<GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsSafetySignals> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matchedBannedPhrase: Schema.optional(Schema.String),
    decision: Schema.optional(Schema.String),
    bannedPhraseMatch: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsSafetySignals",
  });

export interface GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsAnswerPart {
  supportingIndices?: ReadonlyArray<number>;
  text?: string;
}

export const GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsAnswerPart: Schema.Schema<GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsAnswerPart> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    supportingIndices: Schema.optional(Schema.Array(Schema.Number)),
    text: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsAnswerPart",
  });

export interface GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsCitedSnippet {
  searchSnippet?: GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsSearchSnippet;
  snippetIndex?: number;
}

export const GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsCitedSnippet: Schema.Schema<GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsCitedSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    searchSnippet: Schema.optional(
      GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsSearchSnippet,
    ),
    snippetIndex: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsCitedSnippet",
  });

export interface GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignals {
  groundingSignals?: GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsGroundingSignals;
  searchSnippets?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsSearchSnippet>;
  rewriterModelCallSignals?: GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsRewriterModelCallSignals;
  answerGenerationModelCallSignals?: GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsAnswerGenerationModelCallSignals;
  safetySignals?: GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsSafetySignals;
  rewrittenQuery?: string;
  answerParts?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsAnswerPart>;
  answer?: string;
  citedSnippets?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsCitedSnippet>;
}

export const GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignals: Schema.Schema<GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignals> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groundingSignals: Schema.optional(
      GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsGroundingSignals,
    ),
    searchSnippets: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsSearchSnippet,
      ),
    ),
    rewriterModelCallSignals: Schema.optional(
      GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsRewriterModelCallSignals,
    ),
    answerGenerationModelCallSignals: Schema.optional(
      GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsAnswerGenerationModelCallSignals,
    ),
    safetySignals: Schema.optional(
      GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsSafetySignals,
    ),
    rewrittenQuery: Schema.optional(Schema.String),
    answerParts: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsAnswerPart,
      ),
    ),
    answer: Schema.optional(Schema.String),
    citedSnippets: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsCitedSnippet,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignals",
  });

export interface GoogleCloudDialogflowCxV3beta1ToolUseDataStoreToolTrace {
  dataStoreConnectionSignals?: GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignals;
}

export const GoogleCloudDialogflowCxV3beta1ToolUseDataStoreToolTrace: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolUseDataStoreToolTrace> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataStoreConnectionSignals: Schema.optional(
      GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignals,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ToolUseDataStoreToolTrace",
  });

export interface GoogleCloudDialogflowCxV3beta1TextInput {
  text?: string;
}

export const GoogleCloudDialogflowCxV3beta1TextInput: Schema.Schema<GoogleCloudDialogflowCxV3beta1TextInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TextInput" });

export interface GoogleCloudDialogflowCxV3beta1ExportTestCasesRequest {
  filter?: string;
  dataFormat?: "DATA_FORMAT_UNSPECIFIED" | "BLOB" | "JSON" | (string & {});
  gcsUri?: string;
}

export const GoogleCloudDialogflowCxV3beta1ExportTestCasesRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportTestCasesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String),
    dataFormat: Schema.optional(Schema.String),
    gcsUri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportTestCasesRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig {
  scopes?: ReadonlyArray<string>;
  clientId?: string;
  tokenEndpoint?: string;
  clientSecret?: string;
  secretVersionForClientSecret?: string;
}

export const GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scopes: Schema.optional(Schema.Array(Schema.String)),
    clientId: Schema.optional(Schema.String),
    tokenEndpoint: Schema.optional(Schema.String),
    clientSecret: Schema.optional(Schema.String),
    secretVersionForClientSecret: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig",
  });

export interface GoogleCloudDialogflowV2IntentMessageSimpleResponse {
  ssml?: string;
  textToSpeech?: string;
  displayText?: string;
}

export const GoogleCloudDialogflowV2IntentMessageSimpleResponse: Schema.Schema<GoogleCloudDialogflowV2IntentMessageSimpleResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ssml: Schema.optional(Schema.String),
    textToSpeech: Schema.optional(Schema.String),
    displayText: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowCxV3ExportTestCasesMetadata {}

export const GoogleCloudDialogflowCxV3ExportTestCasesMetadata: Schema.Schema<GoogleCloudDialogflowCxV3ExportTestCasesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ExportTestCasesMetadata",
  });

export interface GoogleCloudDialogflowCxV3ContinuousTestResult {
  result?:
    | "AGGREGATED_TEST_RESULT_UNSPECIFIED"
    | "PASSED"
    | "FAILED"
    | (string & {});
  testCaseResults?: ReadonlyArray<string>;
  name?: string;
  runTime?: string;
}

export const GoogleCloudDialogflowCxV3ContinuousTestResult: Schema.Schema<GoogleCloudDialogflowCxV3ContinuousTestResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.optional(Schema.String),
    testCaseResults: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    runTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ContinuousTestResult" });

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
  name?: string;
  displayName?: string;
  parameters?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1IntentParameter>;
  labels?: Record<string, string>;
  trainingPhrases?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase>;
  isFallback?: boolean;
  description?: string;
  priority?: number;
  dtmfPattern?: string;
}

export const GoogleCloudDialogflowCxV3beta1Intent: Schema.Schema<GoogleCloudDialogflowCxV3beta1Intent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    parameters: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1IntentParameter),
    ),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    trainingPhrases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase),
    ),
    isFallback: Schema.optional(Schema.Boolean),
    description: Schema.optional(Schema.String),
    priority: Schema.optional(Schema.Number),
    dtmfPattern: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Intent" });

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

export interface GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput {
  triggeredIntent?: GoogleCloudDialogflowCxV3beta1Intent;
  status?: GoogleRpcStatus;
  differences?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TestRunDifference>;
  textResponses?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ResponseMessageText>;
  diagnosticInfo?: Record<string, unknown>;
  sessionParameters?: Record<string, unknown>;
  currentPage?: GoogleCloudDialogflowCxV3beta1Page;
}

export const GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput: Schema.Schema<GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    triggeredIntent: Schema.optional(GoogleCloudDialogflowCxV3beta1Intent),
    status: Schema.optional(GoogleRpcStatus),
    differences: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TestRunDifference),
    ),
    textResponses: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ResponseMessageText),
    ),
    diagnosticInfo: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    sessionParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    currentPage: Schema.optional(GoogleCloudDialogflowCxV3beta1Page),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput",
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
  model?: string;
  enableWordInfo?: boolean;
  singleUtterance?: boolean;
  bargeInConfig?: GoogleCloudDialogflowCxV3beta1BargeInConfig;
  sampleRateHertz?: number;
  phraseHints?: ReadonlyArray<string>;
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
  optOutConformerModelMigration?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1InputAudioConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1InputAudioConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    model: Schema.optional(Schema.String),
    enableWordInfo: Schema.optional(Schema.Boolean),
    singleUtterance: Schema.optional(Schema.Boolean),
    bargeInConfig: Schema.optional(GoogleCloudDialogflowCxV3beta1BargeInConfig),
    sampleRateHertz: Schema.optional(Schema.Number),
    phraseHints: Schema.optional(Schema.Array(Schema.String)),
    modelVariant: Schema.optional(Schema.String),
    audioEncoding: Schema.optional(Schema.String),
    optOutConformerModelMigration: Schema.optional(Schema.Boolean),
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

export interface GoogleCloudDialogflowCxV3beta1EventInput {
  event?: string;
}

export const GoogleCloudDialogflowCxV3beta1EventInput: Schema.Schema<GoogleCloudDialogflowCxV3beta1EventInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    event: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1EventInput" });

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
  outputParameters?: Record<string, unknown>;
  tool?: string;
  error?: GoogleCloudDialogflowCxV3beta1ToolCallResultError;
  action?: string;
}

export const GoogleCloudDialogflowCxV3beta1ToolCallResult: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolCallResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    tool: Schema.optional(Schema.String),
    error: Schema.optional(GoogleCloudDialogflowCxV3beta1ToolCallResultError),
    action: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ToolCallResult" });

export interface GoogleCloudDialogflowCxV3beta1QueryInput {
  audio?: GoogleCloudDialogflowCxV3beta1AudioInput;
  event?: GoogleCloudDialogflowCxV3beta1EventInput;
  text?: GoogleCloudDialogflowCxV3beta1TextInput;
  intent?: GoogleCloudDialogflowCxV3beta1IntentInput;
  dtmf?: GoogleCloudDialogflowCxV3beta1DtmfInput;
  toolCallResult?: GoogleCloudDialogflowCxV3beta1ToolCallResult;
  languageCode?: string;
}

export const GoogleCloudDialogflowCxV3beta1QueryInput: Schema.Schema<GoogleCloudDialogflowCxV3beta1QueryInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audio: Schema.optional(GoogleCloudDialogflowCxV3beta1AudioInput),
    event: Schema.optional(GoogleCloudDialogflowCxV3beta1EventInput),
    text: Schema.optional(GoogleCloudDialogflowCxV3beta1TextInput),
    intent: Schema.optional(GoogleCloudDialogflowCxV3beta1IntentInput),
    dtmf: Schema.optional(GoogleCloudDialogflowCxV3beta1DtmfInput),
    toolCallResult: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolCallResult,
    ),
    languageCode: Schema.optional(Schema.String),
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
  virtualAgentOutput?: GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput;
  userInput?: GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput;
}

export const GoogleCloudDialogflowCxV3beta1ConversationTurn: Schema.Schema<GoogleCloudDialogflowCxV3beta1ConversationTurn> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualAgentOutput: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput,
    ),
    userInput: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ConversationTurn" });

export interface GoogleCloudDialogflowCxV3beta1ActionIntentMatchMatchedIntent {
  intentId?: string;
  score?: number;
  generativeFallback?: Record<string, unknown>;
  displayName?: string;
}

export const GoogleCloudDialogflowCxV3beta1ActionIntentMatchMatchedIntent: Schema.Schema<GoogleCloudDialogflowCxV3beta1ActionIntentMatchMatchedIntent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intentId: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    generativeFallback: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    displayName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ActionIntentMatchMatchedIntent",
  });

export interface GoogleCloudDialogflowCxV3beta1ActionIntentMatch {
  matchedIntents?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ActionIntentMatchMatchedIntent>;
}

export const GoogleCloudDialogflowCxV3beta1ActionIntentMatch: Schema.Schema<GoogleCloudDialogflowCxV3beta1ActionIntentMatch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matchedIntents: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowCxV3beta1ActionIntentMatchMatchedIntent,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ActionIntentMatch",
  });

export interface GoogleCloudDialogflowCxV3beta1FlowImportStrategy {
  globalImportStrategy?:
    | "IMPORT_STRATEGY_UNSPECIFIED"
    | "IMPORT_STRATEGY_CREATE_NEW"
    | "IMPORT_STRATEGY_REPLACE"
    | "IMPORT_STRATEGY_KEEP"
    | "IMPORT_STRATEGY_MERGE"
    | "IMPORT_STRATEGY_THROW_ERROR"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1FlowImportStrategy: Schema.Schema<GoogleCloudDialogflowCxV3beta1FlowImportStrategy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    globalImportStrategy: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1FlowImportStrategy",
  });

export interface GoogleCloudDialogflowCxV3beta1ImportFlowRequest {
  flowUri?: string;
  flowContent?: string;
  importOption?:
    | "IMPORT_OPTION_UNSPECIFIED"
    | "KEEP"
    | "FALLBACK"
    | (string & {});
  flowImportStrategy?: GoogleCloudDialogflowCxV3beta1FlowImportStrategy;
}

export const GoogleCloudDialogflowCxV3beta1ImportFlowRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportFlowRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flowUri: Schema.optional(Schema.String),
    flowContent: Schema.optional(Schema.String),
    importOption: Schema.optional(Schema.String),
    flowImportStrategy: Schema.optional(
      GoogleCloudDialogflowCxV3beta1FlowImportStrategy,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportFlowRequest",
  });

export interface GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig {
  clientSecret?: string;
  secretVersionForClientSecret?: string;
  clientId?: string;
  tokenEndpoint?: string;
  scopes?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig: Schema.Schema<GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientSecret: Schema.optional(Schema.String),
    secretVersionForClientSecret: Schema.optional(Schema.String),
    clientId: Schema.optional(Schema.String),
    tokenEndpoint: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Schema.String)),
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

export interface GoogleCloudDialogflowCxV3WebhookGenericWebService {
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
  parameterMapping?: Record<string, string>;
  oauthConfig?: GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig;
  webhookType?:
    | "WEBHOOK_TYPE_UNSPECIFIED"
    | "STANDARD"
    | "FLEXIBLE"
    | (string & {});
  password?: string;
  secretVersionForUsernamePassword?: string;
  requestHeaders?: Record<string, string>;
  username?: string;
  requestBody?: string;
  allowedCaCerts?: ReadonlyArray<string>;
  serviceAgentAuth?:
    | "SERVICE_AGENT_AUTH_UNSPECIFIED"
    | "NONE"
    | "ID_TOKEN"
    | "ACCESS_TOKEN"
    | (string & {});
  secretVersionsForRequestHeaders?: Record<
    string,
    GoogleCloudDialogflowCxV3WebhookGenericWebServiceSecretVersionHeaderValue
  >;
  serviceAccountAuthConfig?: GoogleCloudDialogflowCxV3WebhookGenericWebServiceServiceAccountAuthConfig;
}

export const GoogleCloudDialogflowCxV3WebhookGenericWebService: Schema.Schema<GoogleCloudDialogflowCxV3WebhookGenericWebService> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    httpMethod: Schema.optional(Schema.String),
    parameterMapping: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    oauthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig,
    ),
    webhookType: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    secretVersionForUsernamePassword: Schema.optional(Schema.String),
    requestHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    username: Schema.optional(Schema.String),
    requestBody: Schema.optional(Schema.String),
    allowedCaCerts: Schema.optional(Schema.Array(Schema.String)),
    serviceAgentAuth: Schema.optional(Schema.String),
    secretVersionsForRequestHeaders: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowCxV3WebhookGenericWebServiceSecretVersionHeaderValue,
      ),
    ),
    serviceAccountAuthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookGenericWebServiceServiceAccountAuthConfig,
    ),
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
  serviceDirectory?: GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig;
  timeout?: string;
  genericWebService?: GoogleCloudDialogflowCxV3WebhookGenericWebService;
  name?: string;
  displayName?: string;
  disabled?: boolean;
}

export const GoogleCloudDialogflowCxV3Webhook: Schema.Schema<GoogleCloudDialogflowCxV3Webhook> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceDirectory: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig,
    ),
    timeout: Schema.optional(Schema.String),
    genericWebService: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookGenericWebService,
    ),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    disabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Webhook" });

export interface GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResources {
  intentDisplayNames?: ReadonlyArray<string>;
  entityDisplayNames?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResources: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResources> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intentDisplayNames: Schema.optional(Schema.Array(Schema.String)),
    entityDisplayNames: Schema.optional(Schema.Array(Schema.String)),
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

export interface GoogleCloudDialogflowV2beta1ImportDocumentsResponse {
  warnings?: ReadonlyArray<GoogleRpcStatus>;
}

export const GoogleCloudDialogflowV2beta1ImportDocumentsResponse: Schema.Schema<GoogleCloudDialogflowV2beta1ImportDocumentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    warnings: Schema.optional(Schema.Array(GoogleRpcStatus)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ImportDocumentsResponse",
  });

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
  title?: string;
  subtitle?: string;
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageCardButton>;
  imageUri?: string;
}

export const GoogleCloudDialogflowV2IntentMessageCard: Schema.Schema<GoogleCloudDialogflowV2IntentMessageCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    subtitle: Schema.optional(Schema.String),
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageCardButton),
    ),
    imageUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageCard" });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet {
  text?: string;
  uri?: string;
  title?: string;
  metadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
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

export interface GoogleCloudDialogflowV2EncryptionSpec {
  kmsKey?: string;
  name?: string;
}

export const GoogleCloudDialogflowV2EncryptionSpec: Schema.Schema<GoogleCloudDialogflowV2EncryptionSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kmsKey: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2EncryptionSpec" });

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

export interface GoogleCloudDialogflowCxV3beta1SafetySettingsRaiSettingsCategoryFilter {
  category?:
    | "SAFETY_CATEGORY_UNSPECIFIED"
    | "DANGEROUS_CONTENT"
    | "HATE_SPEECH"
    | "HARASSMENT"
    | "SEXUALLY_EXPLICIT_CONTENT"
    | (string & {});
  filterLevel?:
    | "SAFETY_FILTER_LEVEL_UNSPECIFIED"
    | "BLOCK_NONE"
    | "BLOCK_FEW"
    | "BLOCK_SOME"
    | "BLOCK_MOST"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1SafetySettingsRaiSettingsCategoryFilter: Schema.Schema<GoogleCloudDialogflowCxV3beta1SafetySettingsRaiSettingsCategoryFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    category: Schema.optional(Schema.String),
    filterLevel: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1SafetySettingsRaiSettingsCategoryFilter",
  });

export interface GoogleCloudDialogflowCxV3beta1ResourceName {
  name?: string;
  displayName?: string;
}

export const GoogleCloudDialogflowCxV3beta1ResourceName: Schema.Schema<GoogleCloudDialogflowCxV3beta1ResourceName> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ResourceName" });

export interface GoogleCloudDialogflowCxV3beta1ValidationMessage {
  resources?: ReadonlyArray<string>;
  resourceNames?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ResourceName>;
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "INFO"
    | "WARNING"
    | "ERROR"
    | (string & {});
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
  detail?: string;
}

export const GoogleCloudDialogflowCxV3beta1ValidationMessage: Schema.Schema<GoogleCloudDialogflowCxV3beta1ValidationMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(Schema.String)),
    resourceNames: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ResourceName),
    ),
    severity: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
    detail: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ValidationMessage",
  });

export interface GoogleCloudDialogflowCxV3beta1ExceptionDetail {
  errorMessage?: string;
}

export const GoogleCloudDialogflowCxV3beta1ExceptionDetail: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExceptionDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ExceptionDetail" });

export interface GoogleCloudDialogflowV2GcsDestination {
  uri?: string;
}

export const GoogleCloudDialogflowV2GcsDestination: Schema.Schema<GoogleCloudDialogflowV2GcsDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2GcsDestination" });

export interface GoogleCloudDialogflowV2beta1SpeechWordInfo {
  startOffset?: string;
  word?: string;
  endOffset?: string;
  confidence?: number;
}

export const GoogleCloudDialogflowV2beta1SpeechWordInfo: Schema.Schema<GoogleCloudDialogflowV2beta1SpeechWordInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startOffset: Schema.optional(Schema.String),
    word: Schema.optional(Schema.String),
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

export const GoogleCloudDialogflowV2beta1TelephonyDtmfEvents: Schema.Schema<GoogleCloudDialogflowV2beta1TelephonyDtmfEvents> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dtmfEvents: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1TelephonyDtmfEvents",
  });

export interface GoogleCloudDialogflowV2beta1StreamingRecognitionResult {
  messageType?:
    | "MESSAGE_TYPE_UNSPECIFIED"
    | "TRANSCRIPT"
    | "END_OF_SINGLE_UTTERANCE"
    | "DTMF_DIGITS"
    | "PARTIAL_DTMF_DIGITS"
    | (string & {});
  confidence?: number;
  speechWordInfo?: ReadonlyArray<GoogleCloudDialogflowV2beta1SpeechWordInfo>;
  speechEndOffset?: string;
  isFinal?: boolean;
  dtmfDigits?: GoogleCloudDialogflowV2beta1TelephonyDtmfEvents;
  stability?: number;
  transcript?: string;
  languageCode?: string;
}

export const GoogleCloudDialogflowV2beta1StreamingRecognitionResult: Schema.Schema<GoogleCloudDialogflowV2beta1StreamingRecognitionResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messageType: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
    speechWordInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SpeechWordInfo),
    ),
    speechEndOffset: Schema.optional(Schema.String),
    isFinal: Schema.optional(Schema.Boolean),
    dtmfDigits: Schema.optional(
      GoogleCloudDialogflowV2beta1TelephonyDtmfEvents,
    ),
    stability: Schema.optional(Schema.Number),
    transcript: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1StreamingRecognitionResult",
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

export interface GoogleCloudDialogflowV2beta1InitializeEncryptionSpecRequest {
  encryptionSpec?: GoogleCloudDialogflowV2beta1EncryptionSpec;
}

export const GoogleCloudDialogflowV2beta1InitializeEncryptionSpecRequest: Schema.Schema<GoogleCloudDialogflowV2beta1InitializeEncryptionSpecRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    encryptionSpec: Schema.optional(GoogleCloudDialogflowV2beta1EncryptionSpec),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1InitializeEncryptionSpecRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1ImportFlowResponse {
  flow?: string;
}

export const GoogleCloudDialogflowCxV3beta1ImportFlowResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportFlowResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flow: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportFlowResponse",
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

export interface GoogleCloudDialogflowV2DeleteConversationModelOperationMetadata {
  createTime?: string;
  conversationModel?: string;
  doneTime?: string;
}

export const GoogleCloudDialogflowV2DeleteConversationModelOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2DeleteConversationModelOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    conversationModel: Schema.optional(Schema.String),
    doneTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2DeleteConversationModelOperationMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettingsPromptTemplate {
  displayName?: string;
  frozen?: boolean;
  promptText?: string;
}

export const GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettingsPromptTemplate: Schema.Schema<GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettingsPromptTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    frozen: Schema.optional(Schema.Boolean),
    promptText: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettingsPromptTemplate",
  });

export interface GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettings {
  selectedPrompt?: string;
  promptTemplates?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettingsPromptTemplate>;
}

export const GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    selectedPrompt: Schema.optional(Schema.String),
    promptTemplates: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettingsPromptTemplate,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettings",
  });

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

export const GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfoIngestedParameterDebugInfo: Schema.Schema<GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfoIngestedParameterDebugInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameter: Schema.optional(Schema.String),
    ingestionStatus: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfoIngestedParameterDebugInfo",
  });

export interface GoogleCloudDialogflowCxV3beta1ToolConnectorToolActionEntityOperation {
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

export const GoogleCloudDialogflowCxV3beta1ToolConnectorToolActionEntityOperation: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolConnectorToolActionEntityOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityId: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ToolConnectorToolActionEntityOperation",
  });

export interface GoogleCloudDialogflowCxV3beta1ToolConnectorToolAction {
  entityOperation?: GoogleCloudDialogflowCxV3beta1ToolConnectorToolActionEntityOperation;
  inputFields?: ReadonlyArray<string>;
  outputFields?: ReadonlyArray<string>;
  connectionActionId?: string;
}

export const GoogleCloudDialogflowCxV3beta1ToolConnectorToolAction: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolConnectorToolAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityOperation: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolConnectorToolActionEntityOperation,
    ),
    inputFields: Schema.optional(Schema.Array(Schema.String)),
    outputFields: Schema.optional(Schema.Array(Schema.String)),
    connectionActionId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ToolConnectorToolAction",
  });

export interface GoogleCloudDialogflowCxV3beta1ToolConnectorTool {
  actions?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ToolConnectorToolAction>;
  endUserAuthConfig?: GoogleCloudDialogflowCxV3beta1ToolEndUserAuthConfig;
  name?: string;
}

export const GoogleCloudDialogflowCxV3beta1ToolConnectorTool: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolConnectorTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    actions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ToolConnectorToolAction),
    ),
    endUserAuthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolEndUserAuthConfig,
    ),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ToolConnectorTool",
  });

export interface GoogleCloudDialogflowV2SpeechWordInfo {
  word?: string;
  endOffset?: string;
  confidence?: number;
  startOffset?: string;
}

export const GoogleCloudDialogflowV2SpeechWordInfo: Schema.Schema<GoogleCloudDialogflowV2SpeechWordInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    word: Schema.optional(Schema.String),
    endOffset: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
    startOffset: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SpeechWordInfo" });

export interface GoogleCloudDialogflowV2StreamingRecognitionResult {
  isFinal?: boolean;
  languageCode?: string;
  messageType?:
    | "MESSAGE_TYPE_UNSPECIFIED"
    | "TRANSCRIPT"
    | "END_OF_SINGLE_UTTERANCE"
    | (string & {});
  confidence?: number;
  speechWordInfo?: ReadonlyArray<GoogleCloudDialogflowV2SpeechWordInfo>;
  speechEndOffset?: string;
  transcript?: string;
}

export const GoogleCloudDialogflowV2StreamingRecognitionResult: Schema.Schema<GoogleCloudDialogflowV2StreamingRecognitionResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isFinal: Schema.optional(Schema.Boolean),
    languageCode: Schema.optional(Schema.String),
    messageType: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
    speechWordInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SpeechWordInfo),
    ),
    speechEndOffset: Schema.optional(Schema.String),
    transcript: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2StreamingRecognitionResult",
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
  sources?: GoogleCloudDialogflowV2AgentCoachingSuggestionSources;
  suggestionIndex?: number;
  answerRecord?: string;
  similarityScore?: number;
}

export const GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion: Schema.Schema<GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sources: Schema.optional(
      GoogleCloudDialogflowV2AgentCoachingSuggestionSources,
    ),
    suggestionIndex: Schema.optional(Schema.Number),
    answerRecord: Schema.optional(Schema.String),
    similarityScore: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion",
  });

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
  intentSuggestion?: GoogleCloudDialogflowV2beta1IntentSuggestion;
  answerRecord?: string;
  queryResult?: GoogleCloudDialogflowV2beta1QueryResult;
}

export const GoogleCloudDialogflowV2beta1DialogflowAssistAnswer: Schema.Schema<GoogleCloudDialogflowV2beta1DialogflowAssistAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intentSuggestion: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentSuggestion,
    ),
    answerRecord: Schema.optional(Schema.String),
    queryResult: Schema.optional(GoogleCloudDialogflowV2beta1QueryResult),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1DialogflowAssistAnswer",
  });

export interface GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse {
  contextSize?: number;
  dialogflowAssistAnswers?: ReadonlyArray<GoogleCloudDialogflowV2beta1DialogflowAssistAnswer>;
  latestMessage?: string;
}

export const GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contextSize: Schema.optional(Schema.Number),
    dialogflowAssistAnswers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1DialogflowAssistAnswer),
    ),
    latestMessage: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1LlmModelSettingsParameters {
  inputTokenLimit?:
    | "INPUT_TOKEN_LIMIT_UNSPECIFIED"
    | "INPUT_TOKEN_LIMIT_SHORT"
    | "INPUT_TOKEN_LIMIT_MEDIUM"
    | "INPUT_TOKEN_LIMIT_LONG"
    | (string & {});
  temperature?: number;
  outputTokenLimit?:
    | "OUTPUT_TOKEN_LIMIT_UNSPECIFIED"
    | "OUTPUT_TOKEN_LIMIT_SHORT"
    | "OUTPUT_TOKEN_LIMIT_MEDIUM"
    | "OUTPUT_TOKEN_LIMIT_LONG"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1LlmModelSettingsParameters: Schema.Schema<GoogleCloudDialogflowCxV3beta1LlmModelSettingsParameters> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputTokenLimit: Schema.optional(Schema.String),
    temperature: Schema.optional(Schema.Number),
    outputTokenLimit: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1LlmModelSettingsParameters",
  });

export interface GoogleCloudDialogflowCxV3beta1LlmModelSettings {
  promptText?: string;
  parameters?: GoogleCloudDialogflowCxV3beta1LlmModelSettingsParameters;
  model?: string;
}

export const GoogleCloudDialogflowCxV3beta1LlmModelSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1LlmModelSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    promptText: Schema.optional(Schema.String),
    parameters: Schema.optional(
      GoogleCloudDialogflowCxV3beta1LlmModelSettingsParameters,
    ),
    model: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1LlmModelSettings" });

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

export interface GoogleCloudDialogflowCxV3beta1DeploymentResult {
  deploymentTestResults?: ReadonlyArray<string>;
  experiment?: string;
}

export const GoogleCloudDialogflowCxV3beta1DeploymentResult: Schema.Schema<GoogleCloudDialogflowCxV3beta1DeploymentResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deploymentTestResults: Schema.optional(Schema.Array(Schema.String)),
    experiment: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1DeploymentResult" });

export interface GoogleCloudDialogflowCxV3beta1Deployment {
  name?: string;
  flowVersion?: string;
  state?:
    | "STATE_UNSPECIFIED"
    | "RUNNING"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
  endTime?: string;
  startTime?: string;
  result?: GoogleCloudDialogflowCxV3beta1DeploymentResult;
}

export const GoogleCloudDialogflowCxV3beta1Deployment: Schema.Schema<GoogleCloudDialogflowCxV3beta1Deployment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    flowVersion: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    result: Schema.optional(GoogleCloudDialogflowCxV3beta1DeploymentResult),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Deployment" });

export interface GoogleCloudDialogflowCxV3beta1ListDeploymentsResponse {
  deployments?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Deployment>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3beta1ListDeploymentsResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ListDeploymentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deployments: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1Deployment),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ListDeploymentsResponse",
  });

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

export interface GoogleCloudDialogflowV2InputDataset {
  dataset?: string;
}

export const GoogleCloudDialogflowV2InputDataset: Schema.Schema<GoogleCloudDialogflowV2InputDataset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataset: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2InputDataset" });

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
  datasets?: ReadonlyArray<GoogleCloudDialogflowV2InputDataset>;
  languageCode?: string;
  smartReplyModelMetadata?: GoogleCloudDialogflowV2SmartReplyModelMetadata;
  articleSuggestionModelMetadata?: GoogleCloudDialogflowV2ArticleSuggestionModelMetadata;
  satisfiesPzi?: boolean;
  name?: string;
  displayName?: string;
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
  createTime?: string;
}

export const GoogleCloudDialogflowV2ConversationModel: Schema.Schema<GoogleCloudDialogflowV2ConversationModel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datasets: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2InputDataset),
    ),
    languageCode: Schema.optional(Schema.String),
    smartReplyModelMetadata: Schema.optional(
      GoogleCloudDialogflowV2SmartReplyModelMetadata,
    ),
    articleSuggestionModelMetadata: Schema.optional(
      GoogleCloudDialogflowV2ArticleSuggestionModelMetadata,
    ),
    satisfiesPzi: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ConversationModel" });

export interface GoogleCloudDialogflowCxV3TurnSignals {
  userEscalated?: boolean;
  noUserInput?: boolean;
  failureReasons?: ReadonlyArray<
    | "FAILURE_REASON_UNSPECIFIED"
    | "FAILED_INTENT"
    | "FAILED_WEBHOOK"
    | (string & {})
  >;
  sentimentMagnitude?: number;
  noMatch?: boolean;
  sentimentScore?: number;
  agentEscalated?: boolean;
  reachedEndPage?: boolean;
  webhookStatuses?: ReadonlyArray<string>;
  dtmfUsed?: boolean;
}

export const GoogleCloudDialogflowCxV3TurnSignals: Schema.Schema<GoogleCloudDialogflowCxV3TurnSignals> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userEscalated: Schema.optional(Schema.Boolean),
    noUserInput: Schema.optional(Schema.Boolean),
    failureReasons: Schema.optional(Schema.Array(Schema.String)),
    sentimentMagnitude: Schema.optional(Schema.Number),
    noMatch: Schema.optional(Schema.Boolean),
    sentimentScore: Schema.optional(Schema.Number),
    agentEscalated: Schema.optional(Schema.Boolean),
    reachedEndPage: Schema.optional(Schema.Boolean),
    webhookStatuses: Schema.optional(Schema.Array(Schema.String)),
    dtmfUsed: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TurnSignals" });

export interface GoogleCloudDialogflowCxV3ConversationSignals {
  turnSignals?: GoogleCloudDialogflowCxV3TurnSignals;
}

export const GoogleCloudDialogflowCxV3ConversationSignals: Schema.Schema<GoogleCloudDialogflowCxV3ConversationSignals> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    turnSignals: Schema.optional(GoogleCloudDialogflowCxV3TurnSignals),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ConversationSignals" });

export interface GoogleCloudDialogflowCxV3beta1ExportIntentsRequest {
  intentsUri?: string;
  dataFormat?:
    | "DATA_FORMAT_UNSPECIFIED"
    | "BLOB"
    | "JSON"
    | "CSV"
    | (string & {});
  intents?: ReadonlyArray<string>;
  intentsContentInline?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1ExportIntentsRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportIntentsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intentsUri: Schema.optional(Schema.String),
    dataFormat: Schema.optional(Schema.String),
    intents: Schema.optional(Schema.Array(Schema.String)),
    intentsContentInline: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportIntentsRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1PlaybookStep {
  text?: string;
  steps?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1PlaybookStep>;
}

export const GoogleCloudDialogflowCxV3beta1PlaybookStep: Schema.Schema<GoogleCloudDialogflowCxV3beta1PlaybookStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      text: Schema.optional(Schema.String),
      steps: Schema.optional(
        Schema.Array(GoogleCloudDialogflowCxV3beta1PlaybookStep),
      ),
    }),
  ).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1PlaybookStep",
  }) as any as Schema.Schema<GoogleCloudDialogflowCxV3beta1PlaybookStep>;

export interface GoogleCloudDialogflowCxV3beta1PlaybookInstruction {
  steps?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1PlaybookStep>;
  guidelines?: string;
}

export const GoogleCloudDialogflowCxV3beta1PlaybookInstruction: Schema.Schema<GoogleCloudDialogflowCxV3beta1PlaybookInstruction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    steps: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1PlaybookStep),
    ),
    guidelines: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1PlaybookInstruction",
  });

export interface GoogleCloudDialogflowCxV3beta1HandlerEventHandler {
  event?: string;
  fulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
  condition?: string;
}

export const GoogleCloudDialogflowCxV3beta1HandlerEventHandler: Schema.Schema<GoogleCloudDialogflowCxV3beta1HandlerEventHandler> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    event: Schema.optional(Schema.String),
    fulfillment: Schema.optional(GoogleCloudDialogflowCxV3beta1Fulfillment),
    condition: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1HandlerEventHandler",
  });

export interface GoogleCloudDialogflowCxV3beta1HandlerLifecycleHandler {
  condition?: string;
  fulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
  lifecycleStage?: string;
}

export const GoogleCloudDialogflowCxV3beta1HandlerLifecycleHandler: Schema.Schema<GoogleCloudDialogflowCxV3beta1HandlerLifecycleHandler> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    condition: Schema.optional(Schema.String),
    fulfillment: Schema.optional(GoogleCloudDialogflowCxV3beta1Fulfillment),
    lifecycleStage: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1HandlerLifecycleHandler",
  });

export interface GoogleCloudDialogflowCxV3beta1Handler {
  eventHandler?: GoogleCloudDialogflowCxV3beta1HandlerEventHandler;
  lifecycleHandler?: GoogleCloudDialogflowCxV3beta1HandlerLifecycleHandler;
}

export const GoogleCloudDialogflowCxV3beta1Handler: Schema.Schema<GoogleCloudDialogflowCxV3beta1Handler> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventHandler: Schema.optional(
      GoogleCloudDialogflowCxV3beta1HandlerEventHandler,
    ),
    lifecycleHandler: Schema.optional(
      GoogleCloudDialogflowCxV3beta1HandlerLifecycleHandler,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Handler" });

export interface GoogleCloudDialogflowCxV3beta1CodeBlock {
  code?: string;
}

export const GoogleCloudDialogflowCxV3beta1CodeBlock: Schema.Schema<GoogleCloudDialogflowCxV3beta1CodeBlock> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1CodeBlock" });

export interface GoogleCloudDialogflowCxV3beta1Playbook {
  instruction?: GoogleCloudDialogflowCxV3beta1PlaybookInstruction;
  referencedPlaybooks?: ReadonlyArray<string>;
  inputParameterDefinitions?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ParameterDefinition>;
  llmModelSettings?: GoogleCloudDialogflowCxV3beta1LlmModelSettings;
  createTime?: string;
  inlineActions?: ReadonlyArray<string>;
  updateTime?: string;
  displayName?: string;
  referencedTools?: ReadonlyArray<string>;
  playbookType?:
    | "PLAYBOOK_TYPE_UNSPECIFIED"
    | "TASK"
    | "ROUTINE"
    | (string & {});
  tokenCount?: string;
  speechSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings;
  handlers?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Handler>;
  referencedFlows?: ReadonlyArray<string>;
  codeBlock?: GoogleCloudDialogflowCxV3beta1CodeBlock;
  goal?: string;
  outputParameterDefinitions?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ParameterDefinition>;
  name?: string;
}

export const GoogleCloudDialogflowCxV3beta1Playbook: Schema.Schema<GoogleCloudDialogflowCxV3beta1Playbook> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instruction: Schema.optional(
      GoogleCloudDialogflowCxV3beta1PlaybookInstruction,
    ),
    referencedPlaybooks: Schema.optional(Schema.Array(Schema.String)),
    inputParameterDefinitions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ParameterDefinition),
    ),
    llmModelSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1LlmModelSettings,
    ),
    createTime: Schema.optional(Schema.String),
    inlineActions: Schema.optional(Schema.Array(Schema.String)),
    updateTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    referencedTools: Schema.optional(Schema.Array(Schema.String)),
    playbookType: Schema.optional(Schema.String),
    tokenCount: Schema.optional(Schema.String),
    speechSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings,
    ),
    handlers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1Handler),
    ),
    referencedFlows: Schema.optional(Schema.Array(Schema.String)),
    codeBlock: Schema.optional(GoogleCloudDialogflowCxV3beta1CodeBlock),
    goal: Schema.optional(Schema.String),
    outputParameterDefinitions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ParameterDefinition),
    ),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Playbook" });

export interface GoogleCloudDialogflowCxV3beta1ListPlaybooksResponse {
  nextPageToken?: string;
  playbooks?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Playbook>;
}

export const GoogleCloudDialogflowCxV3beta1ListPlaybooksResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ListPlaybooksResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    playbooks: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1Playbook),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ListPlaybooksResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1SafetySettingsPhrase {
  text?: string;
  languageCode?: string;
}

export const GoogleCloudDialogflowCxV3beta1SafetySettingsPhrase: Schema.Schema<GoogleCloudDialogflowCxV3beta1SafetySettingsPhrase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1SafetySettingsPhrase",
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
  title?: string;
  subtitle?: string;
  columnProperties?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageColumnProperties>;
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageBasicCardButton>;
  rows?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageTableCardRow>;
  image?: GoogleCloudDialogflowV2IntentMessageImage;
}

export const GoogleCloudDialogflowV2IntentMessageTableCard: Schema.Schema<GoogleCloudDialogflowV2IntentMessageTableCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    subtitle: Schema.optional(Schema.String),
    columnProperties: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageColumnProperties),
    ),
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageBasicCardButton),
    ),
    rows: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageTableCardRow),
    ),
    image: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageTableCard" });

export interface GoogleCloudDialogflowCxV3beta1BigQueryExportSettings {
  enabled?: boolean;
  bigqueryTable?: string;
}

export const GoogleCloudDialogflowCxV3beta1BigQueryExportSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1BigQueryExportSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    bigqueryTable: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1BigQueryExportSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1ToolFunctionTool {
  inputSchema?: Record<string, unknown>;
  outputSchema?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3beta1ToolFunctionTool: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolFunctionTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputSchema: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    outputSchema: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ToolFunctionTool" });

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

export interface GoogleCloudDialogflowV2Message {
  messageAnnotation?: GoogleCloudDialogflowV2MessageAnnotation;
  name?: string;
  content?: string;
  createTime?: string;
  sentimentAnalysis?: GoogleCloudDialogflowV2SentimentAnalysisResult;
  participant?: string;
  languageCode?: string;
  sendTime?: string;
  participantRole?:
    | "ROLE_UNSPECIFIED"
    | "HUMAN_AGENT"
    | "AUTOMATED_AGENT"
    | "END_USER"
    | (string & {});
}

export const GoogleCloudDialogflowV2Message: Schema.Schema<GoogleCloudDialogflowV2Message> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messageAnnotation: Schema.optional(
      GoogleCloudDialogflowV2MessageAnnotation,
    ),
    name: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    sentimentAnalysis: Schema.optional(
      GoogleCloudDialogflowV2SentimentAnalysisResult,
    ),
    participant: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    sendTime: Schema.optional(Schema.String),
    participantRole: Schema.optional(Schema.String),
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
  newRecognitionResultPayload?: GoogleCloudDialogflowV2StreamingRecognitionResult;
  newMessagePayload?: GoogleCloudDialogflowV2Message;
  conversation?: string;
  errorStatus?: GoogleRpcStatus;
}

export const GoogleCloudDialogflowV2ConversationEvent: Schema.Schema<GoogleCloudDialogflowV2ConversationEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    newRecognitionResultPayload: Schema.optional(
      GoogleCloudDialogflowV2StreamingRecognitionResult,
    ),
    newMessagePayload: Schema.optional(GoogleCloudDialogflowV2Message),
    conversation: Schema.optional(Schema.String),
    errorStatus: Schema.optional(GoogleRpcStatus),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ConversationEvent" });

export interface GoogleCloudDialogflowCxV3beta1ToolAuthenticationServiceAccountAuthConfig {
  serviceAccount?: string;
}

export const GoogleCloudDialogflowCxV3beta1ToolAuthenticationServiceAccountAuthConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolAuthenticationServiceAccountAuthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAccount: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ToolAuthenticationServiceAccountAuthConfig",
  });

export interface GoogleCloudDialogflowCxV3beta1PlaybookOutput {
  executionSummary?: string;
  actionParameters?: Record<string, unknown>;
  state?:
    | "STATE_UNSPECIFIED"
    | "OK"
    | "CANCELLED"
    | "FAILED"
    | "ESCALATED"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1PlaybookOutput: Schema.Schema<GoogleCloudDialogflowCxV3beta1PlaybookOutput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    executionSummary: Schema.optional(Schema.String),
    actionParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1PlaybookOutput" });

export interface GoogleCloudDialogflowCxV3beta1PlaybookInput {
  precedingConversationSummary?: string;
  actionParameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3beta1PlaybookInput: Schema.Schema<GoogleCloudDialogflowCxV3beta1PlaybookInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    precedingConversationSummary: Schema.optional(Schema.String),
    actionParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1PlaybookInput" });

export interface GoogleCloudDialogflowCxV3beta1Status {
  exception?: GoogleCloudDialogflowCxV3beta1ExceptionDetail;
}

export const GoogleCloudDialogflowCxV3beta1Status: Schema.Schema<GoogleCloudDialogflowCxV3beta1Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exception: Schema.optional(GoogleCloudDialogflowCxV3beta1ExceptionDetail),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Status" });

export interface GoogleCloudDialogflowCxV3beta1ActionFlowStateUpdatePageState {
  page?: string;
  displayName?: string;
  status?: string;
}

export const GoogleCloudDialogflowCxV3beta1ActionFlowStateUpdatePageState: Schema.Schema<GoogleCloudDialogflowCxV3beta1ActionFlowStateUpdatePageState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    page: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ActionFlowStateUpdatePageState",
  });

export interface GoogleCloudDialogflowCxV3beta1ActionFlowStateUpdateFunctionCall {
  name?: string;
}

export const GoogleCloudDialogflowCxV3beta1ActionFlowStateUpdateFunctionCall: Schema.Schema<GoogleCloudDialogflowCxV3beta1ActionFlowStateUpdateFunctionCall> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ActionFlowStateUpdateFunctionCall",
  });

export interface GoogleCloudDialogflowCxV3beta1ActionFlowStateUpdate {
  pageState?: GoogleCloudDialogflowCxV3beta1ActionFlowStateUpdatePageState;
  updatedParameters?: Record<string, unknown>;
  destination?: string;
  eventType?: string;
  functionCall?: GoogleCloudDialogflowCxV3beta1ActionFlowStateUpdateFunctionCall;
}

export const GoogleCloudDialogflowCxV3beta1ActionFlowStateUpdate: Schema.Schema<GoogleCloudDialogflowCxV3beta1ActionFlowStateUpdate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageState: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ActionFlowStateUpdatePageState,
    ),
    updatedParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    destination: Schema.optional(Schema.String),
    eventType: Schema.optional(Schema.String),
    functionCall: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ActionFlowStateUpdateFunctionCall,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ActionFlowStateUpdate",
  });

export interface GoogleCloudDialogflowCxV3beta1Event {
  event?: string;
  text?: string;
}

export const GoogleCloudDialogflowCxV3beta1Event: Schema.Schema<GoogleCloudDialogflowCxV3beta1Event> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    event: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Event" });

export interface GoogleCloudDialogflowCxV3beta1ActionTTS {}

export const GoogleCloudDialogflowCxV3beta1ActionTTS: Schema.Schema<GoogleCloudDialogflowCxV3beta1ActionTTS> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ActionTTS",
  });

export interface GoogleCloudDialogflowCxV3beta1PlaybookInvocation {
  displayName?: string;
  playbookOutput?: GoogleCloudDialogflowCxV3beta1PlaybookOutput;
  playbook?: string;
  playbookInput?: GoogleCloudDialogflowCxV3beta1PlaybookInput;
  playbookState?:
    | "OUTPUT_STATE_UNSPECIFIED"
    | "OUTPUT_STATE_OK"
    | "OUTPUT_STATE_CANCELLED"
    | "OUTPUT_STATE_FAILED"
    | "OUTPUT_STATE_ESCALATED"
    | "OUTPUT_STATE_PENDING"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1PlaybookInvocation: Schema.Schema<GoogleCloudDialogflowCxV3beta1PlaybookInvocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    playbookOutput: Schema.optional(
      GoogleCloudDialogflowCxV3beta1PlaybookOutput,
    ),
    playbook: Schema.optional(Schema.String),
    playbookInput: Schema.optional(GoogleCloudDialogflowCxV3beta1PlaybookInput),
    playbookState: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1PlaybookInvocation",
  });

export interface GoogleCloudDialogflowCxV3beta1LlmCallRetrievedExample {
  exampleId?: string;
  retrievalStrategy?:
    | "RETRIEVAL_STRATEGY_UNSPECIFIED"
    | "DEFAULT"
    | "STATIC"
    | "NEVER"
    | (string & {});
  matchedRetrievalLabel?: string;
  exampleDisplayName?: string;
}

export const GoogleCloudDialogflowCxV3beta1LlmCallRetrievedExample: Schema.Schema<GoogleCloudDialogflowCxV3beta1LlmCallRetrievedExample> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exampleId: Schema.optional(Schema.String),
    retrievalStrategy: Schema.optional(Schema.String),
    matchedRetrievalLabel: Schema.optional(Schema.String),
    exampleDisplayName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1LlmCallRetrievedExample",
  });

export interface GoogleCloudDialogflowCxV3beta1LlmCallTokenCount {
  totalOutputTokenCount?: string;
  conversationContextTokenCount?: string;
  exampleTokenCount?: string;
  totalInputTokenCount?: string;
}

export const GoogleCloudDialogflowCxV3beta1LlmCallTokenCount: Schema.Schema<GoogleCloudDialogflowCxV3beta1LlmCallTokenCount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalOutputTokenCount: Schema.optional(Schema.String),
    conversationContextTokenCount: Schema.optional(Schema.String),
    exampleTokenCount: Schema.optional(Schema.String),
    totalInputTokenCount: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1LlmCallTokenCount",
  });

export interface GoogleCloudDialogflowCxV3beta1LlmCall {
  retrievedExamples?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1LlmCallRetrievedExample>;
  tokenCount?: GoogleCloudDialogflowCxV3beta1LlmCallTokenCount;
  temperature?: number;
  model?: string;
}

export const GoogleCloudDialogflowCxV3beta1LlmCall: Schema.Schema<GoogleCloudDialogflowCxV3beta1LlmCall> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    retrievedExamples: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1LlmCallRetrievedExample),
    ),
    tokenCount: Schema.optional(
      GoogleCloudDialogflowCxV3beta1LlmCallTokenCount,
    ),
    temperature: Schema.optional(Schema.Number),
    model: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1LlmCall" });

export interface GoogleCloudDialogflowCxV3beta1NamedMetric {
  value?: unknown;
  name?: string;
  unit?: string;
}

export const GoogleCloudDialogflowCxV3beta1NamedMetric: Schema.Schema<GoogleCloudDialogflowCxV3beta1NamedMetric> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Unknown),
    name: Schema.optional(Schema.String),
    unit: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1NamedMetric" });

export interface GoogleCloudDialogflowCxV3beta1Span {
  startTime?: string;
  tags?: ReadonlyArray<string>;
  completeTime?: string;
  metrics?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1NamedMetric>;
  name?: string;
}

export const GoogleCloudDialogflowCxV3beta1Span: Schema.Schema<GoogleCloudDialogflowCxV3beta1Span> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.String)),
    completeTime: Schema.optional(Schema.String),
    metrics: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1NamedMetric),
    ),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Span" });

export interface GoogleCloudDialogflowCxV3beta1UserUtterance {
  audioTokens?: ReadonlyArray<number>;
  text?: string;
  audio?: string;
}

export const GoogleCloudDialogflowCxV3beta1UserUtterance: Schema.Schema<GoogleCloudDialogflowCxV3beta1UserUtterance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audioTokens: Schema.optional(Schema.Array(Schema.Number)),
    text: Schema.optional(Schema.String),
    audio: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1UserUtterance" });

export interface GoogleCloudDialogflowCxV3beta1AgentUtterance {
  text?: string;
  requireGeneration?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1AgentUtterance: Schema.Schema<GoogleCloudDialogflowCxV3beta1AgentUtterance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    requireGeneration: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1AgentUtterance" });

export interface GoogleCloudDialogflowCxV3beta1ActionSTT {}

export const GoogleCloudDialogflowCxV3beta1ActionSTT: Schema.Schema<GoogleCloudDialogflowCxV3beta1ActionSTT> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ActionSTT",
  });

export interface GoogleCloudDialogflowCxV3beta1PlaybookTransition {
  displayName?: string;
  playbook?: string;
  inputActionParameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3beta1PlaybookTransition: Schema.Schema<GoogleCloudDialogflowCxV3beta1PlaybookTransition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    playbook: Schema.optional(Schema.String),
    inputActionParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1PlaybookTransition",
  });

export interface GoogleCloudDialogflowCxV3beta1ToolUseWebhookToolTrace {
  webhookTag?: string;
  webhookUri?: string;
}

export const GoogleCloudDialogflowCxV3beta1ToolUseWebhookToolTrace: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolUseWebhookToolTrace> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webhookTag: Schema.optional(Schema.String),
    webhookUri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ToolUseWebhookToolTrace",
  });

export interface GoogleCloudDialogflowCxV3beta1ToolUse {
  inputActionParameters?: Record<string, unknown>;
  action?: string;
  displayName?: string;
  outputActionParameters?: Record<string, unknown>;
  tool?: string;
  dataStoreToolTrace?: GoogleCloudDialogflowCxV3beta1ToolUseDataStoreToolTrace;
  webhookToolTrace?: GoogleCloudDialogflowCxV3beta1ToolUseWebhookToolTrace;
}

export const GoogleCloudDialogflowCxV3beta1ToolUse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolUse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputActionParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    action: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    outputActionParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    tool: Schema.optional(Schema.String),
    dataStoreToolTrace: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolUseDataStoreToolTrace,
    ),
    webhookToolTrace: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolUseWebhookToolTrace,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ToolUse" });

export interface GoogleCloudDialogflowCxV3beta1FlowTransition {
  flow?: string;
  displayName?: string;
  inputActionParameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3beta1FlowTransition: Schema.Schema<GoogleCloudDialogflowCxV3beta1FlowTransition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flow: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    inputActionParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1FlowTransition" });

export interface GoogleCloudDialogflowCxV3beta1Action {
  status?: GoogleCloudDialogflowCxV3beta1Status;
  completeTime?: string;
  flowStateUpdate?: GoogleCloudDialogflowCxV3beta1ActionFlowStateUpdate;
  startTime?: string;
  displayName?: string;
  flowInvocation?: GoogleCloudDialogflowCxV3beta1FlowInvocation;
  event?: GoogleCloudDialogflowCxV3beta1Event;
  tts?: GoogleCloudDialogflowCxV3beta1ActionTTS;
  playbookInvocation?: GoogleCloudDialogflowCxV3beta1PlaybookInvocation;
  llmCall?: GoogleCloudDialogflowCxV3beta1LlmCall;
  subExecutionSteps?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Span>;
  intentMatch?: GoogleCloudDialogflowCxV3beta1ActionIntentMatch;
  userUtterance?: GoogleCloudDialogflowCxV3beta1UserUtterance;
  agentUtterance?: GoogleCloudDialogflowCxV3beta1AgentUtterance;
  stt?: GoogleCloudDialogflowCxV3beta1ActionSTT;
  playbookTransition?: GoogleCloudDialogflowCxV3beta1PlaybookTransition;
  toolUse?: GoogleCloudDialogflowCxV3beta1ToolUse;
  flowTransition?: GoogleCloudDialogflowCxV3beta1FlowTransition;
}

export const GoogleCloudDialogflowCxV3beta1Action: Schema.Schema<GoogleCloudDialogflowCxV3beta1Action> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(GoogleCloudDialogflowCxV3beta1Status),
    completeTime: Schema.optional(Schema.String),
    flowStateUpdate: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ActionFlowStateUpdate,
    ),
    startTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    flowInvocation: Schema.optional(
      GoogleCloudDialogflowCxV3beta1FlowInvocation,
    ),
    event: Schema.optional(GoogleCloudDialogflowCxV3beta1Event),
    tts: Schema.optional(GoogleCloudDialogflowCxV3beta1ActionTTS),
    playbookInvocation: Schema.optional(
      GoogleCloudDialogflowCxV3beta1PlaybookInvocation,
    ),
    llmCall: Schema.optional(GoogleCloudDialogflowCxV3beta1LlmCall),
    subExecutionSteps: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1Span),
    ),
    intentMatch: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ActionIntentMatch,
    ),
    userUtterance: Schema.optional(GoogleCloudDialogflowCxV3beta1UserUtterance),
    agentUtterance: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AgentUtterance,
    ),
    stt: Schema.optional(GoogleCloudDialogflowCxV3beta1ActionSTT),
    playbookTransition: Schema.optional(
      GoogleCloudDialogflowCxV3beta1PlaybookTransition,
    ),
    toolUse: Schema.optional(GoogleCloudDialogflowCxV3beta1ToolUse),
    flowTransition: Schema.optional(
      GoogleCloudDialogflowCxV3beta1FlowTransition,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Action" });

export interface GoogleCloudDialogflowCxV3beta1Example {
  createTime?: string;
  name?: string;
  displayName?: string;
  playbookOutput?: GoogleCloudDialogflowCxV3beta1PlaybookOutput;
  updateTime?: string;
  playbookInput?: GoogleCloudDialogflowCxV3beta1PlaybookInput;
  actions?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Action>;
  conversationState?:
    | "OUTPUT_STATE_UNSPECIFIED"
    | "OUTPUT_STATE_OK"
    | "OUTPUT_STATE_CANCELLED"
    | "OUTPUT_STATE_FAILED"
    | "OUTPUT_STATE_ESCALATED"
    | "OUTPUT_STATE_PENDING"
    | (string & {});
  languageCode?: string;
  description?: string;
  tokenCount?: string;
}

export const GoogleCloudDialogflowCxV3beta1Example: Schema.Schema<GoogleCloudDialogflowCxV3beta1Example> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    playbookOutput: Schema.optional(
      GoogleCloudDialogflowCxV3beta1PlaybookOutput,
    ),
    updateTime: Schema.optional(Schema.String),
    playbookInput: Schema.optional(GoogleCloudDialogflowCxV3beta1PlaybookInput),
    actions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1Action),
    ),
    conversationState: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    tokenCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Example" });

export interface GoogleCloudDialogflowCxV3beta1GenerativeInfo {
  currentPlaybooks?: ReadonlyArray<string>;
  actionTracingInfo?: GoogleCloudDialogflowCxV3beta1Example;
}

export const GoogleCloudDialogflowCxV3beta1GenerativeInfo: Schema.Schema<GoogleCloudDialogflowCxV3beta1GenerativeInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currentPlaybooks: Schema.optional(Schema.Array(Schema.String)),
    actionTracingInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1Example),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1GenerativeInfo" });

export interface GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig {
  enableContinuousRun?: boolean;
  testCases?: ReadonlyArray<string>;
  enablePredeploymentRun?: boolean;
}

export const GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig: Schema.Schema<GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableContinuousRun: Schema.optional(Schema.Boolean),
    testCases: Schema.optional(Schema.Array(Schema.String)),
    enablePredeploymentRun: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig",
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
  exportOperationMetadata?: GoogleCloudDialogflowV2ExportOperationMetadata;
  doneTime?: string;
  knowledgeBase?: string;
}

export const GoogleCloudDialogflowV2KnowledgeOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2KnowledgeOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    exportOperationMetadata: Schema.optional(
      GoogleCloudDialogflowV2ExportOperationMetadata,
    ),
    doneTime: Schema.optional(Schema.String),
    knowledgeBase: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2KnowledgeOperationMetadata",
  });

export interface GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction {}

export const GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction: Schema.Schema<GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction",
  });

export interface GoogleCloudDialogflowCxV3beta1TestCaseResult {
  environment?: string;
  name?: string;
  conversationTurns?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ConversationTurn>;
  testResult?: "TEST_RESULT_UNSPECIFIED" | "PASSED" | "FAILED" | (string & {});
  testTime?: string;
}

export const GoogleCloudDialogflowCxV3beta1TestCaseResult: Schema.Schema<GoogleCloudDialogflowCxV3beta1TestCaseResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    environment: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    conversationTurns: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ConversationTurn),
    ),
    testResult: Schema.optional(Schema.String),
    testTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TestCaseResult" });

export interface GoogleCloudDialogflowCxV3beta1ToolAuthenticationOAuthConfig {
  oauthGrantType?:
    | "OAUTH_GRANT_TYPE_UNSPECIFIED"
    | "CLIENT_CREDENTIAL"
    | (string & {});
  clientSecret?: string;
  secretVersionForClientSecret?: string;
  clientId?: string;
  tokenEndpoint?: string;
  scopes?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1ToolAuthenticationOAuthConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolAuthenticationOAuthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oauthGrantType: Schema.optional(Schema.String),
    clientSecret: Schema.optional(Schema.String),
    secretVersionForClientSecret: Schema.optional(Schema.String),
    clientId: Schema.optional(Schema.String),
    tokenEndpoint: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ToolAuthenticationOAuthConfig",
  });

export interface GoogleCloudDialogflowV2ImportConversationDataOperationMetadata {
  partialFailures?: ReadonlyArray<GoogleRpcStatus>;
  createTime?: string;
  conversationDataset?: string;
}

export const GoogleCloudDialogflowV2ImportConversationDataOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2ImportConversationDataOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    partialFailures: Schema.optional(Schema.Array(GoogleRpcStatus)),
    createTime: Schema.optional(Schema.String),
    conversationDataset: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2ImportConversationDataOperationMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1ConversationInteractionStepMetrics {
  name?: string;
  latency?: string;
}

export const GoogleCloudDialogflowCxV3beta1ConversationInteractionStepMetrics: Schema.Schema<GoogleCloudDialogflowCxV3beta1ConversationInteractionStepMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    latency: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ConversationInteractionStepMetrics",
  });

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

export interface GoogleCloudDialogflowCxV3beta1RestoreAgentRequestGitSource {
  trackingBranch?: string;
}

export const GoogleCloudDialogflowCxV3beta1RestoreAgentRequestGitSource: Schema.Schema<GoogleCloudDialogflowCxV3beta1RestoreAgentRequestGitSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trackingBranch: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RestoreAgentRequestGitSource",
  });

export interface GoogleCloudDialogflowCxV3beta1TestConfig {
  trackingParameters?: ReadonlyArray<string>;
  page?: string;
  flow?: string;
}

export const GoogleCloudDialogflowCxV3beta1TestConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1TestConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trackingParameters: Schema.optional(Schema.Array(Schema.String)),
    page: Schema.optional(Schema.String),
    flow: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TestConfig" });

export interface GoogleCloudDialogflowCxV3beta1TestCase {
  tags?: ReadonlyArray<string>;
  lastTestResult?: GoogleCloudDialogflowCxV3beta1TestCaseResult;
  testConfig?: GoogleCloudDialogflowCxV3beta1TestConfig;
  creationTime?: string;
  name?: string;
  displayName?: string;
  notes?: string;
  testCaseConversationTurns?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ConversationTurn>;
}

export const GoogleCloudDialogflowCxV3beta1TestCase: Schema.Schema<GoogleCloudDialogflowCxV3beta1TestCase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tags: Schema.optional(Schema.Array(Schema.String)),
    lastTestResult: Schema.optional(
      GoogleCloudDialogflowCxV3beta1TestCaseResult,
    ),
    testConfig: Schema.optional(GoogleCloudDialogflowCxV3beta1TestConfig),
    creationTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    notes: Schema.optional(Schema.String),
    testCaseConversationTurns: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ConversationTurn),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TestCase" });

export interface GoogleCloudDialogflowCxV3beta1ListTestCasesResponse {
  nextPageToken?: string;
  testCases?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TestCase>;
}

export const GoogleCloudDialogflowCxV3beta1ListTestCasesResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ListTestCasesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    testCases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TestCase),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ListTestCasesResponse",
  });

export interface GoogleCloudDialogflowV2beta1GcsDestination {
  uri?: string;
}

export const GoogleCloudDialogflowV2beta1GcsDestination: Schema.Schema<GoogleCloudDialogflowV2beta1GcsDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1GcsDestination" });

export interface GoogleCloudDialogflowCxV3beta1ExperimentDefinition {
  condition?: string;
  versionVariants?: GoogleCloudDialogflowCxV3beta1VersionVariants;
}

export const GoogleCloudDialogflowCxV3beta1ExperimentDefinition: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExperimentDefinition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    condition: Schema.optional(Schema.String),
    versionVariants: Schema.optional(
      GoogleCloudDialogflowCxV3beta1VersionVariants,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExperimentDefinition",
  });

export interface GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep {
  trafficPercent?: number;
  displayName?: string;
  minDuration?: string;
}

export const GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep: Schema.Schema<GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trafficPercent: Schema.optional(Schema.Number),
    displayName: Schema.optional(Schema.String),
    minDuration: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep",
  });

export interface GoogleCloudDialogflowCxV3beta1RolloutConfig {
  failureCondition?: string;
  rolloutSteps?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep>;
  rolloutCondition?: string;
}

export const GoogleCloudDialogflowCxV3beta1RolloutConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1RolloutConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    failureCondition: Schema.optional(Schema.String),
    rolloutSteps: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep),
    ),
    rolloutCondition: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1RolloutConfig" });

export interface GoogleCloudDialogflowCxV3beta1ExperimentResult {
  lastUpdateTime?: string;
  versionMetrics?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics>;
}

export const GoogleCloudDialogflowCxV3beta1ExperimentResult: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExperimentResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastUpdateTime: Schema.optional(Schema.String),
    versionMetrics: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics,
      ),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ExperimentResult" });

export interface GoogleCloudDialogflowCxV3beta1RolloutState {
  step?: string;
  stepIndex?: number;
  startTime?: string;
}

export const GoogleCloudDialogflowCxV3beta1RolloutState: Schema.Schema<GoogleCloudDialogflowCxV3beta1RolloutState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    step: Schema.optional(Schema.String),
    stepIndex: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1RolloutState" });

export interface GoogleCloudDialogflowCxV3beta1Experiment {
  description?: string;
  definition?: GoogleCloudDialogflowCxV3beta1ExperimentDefinition;
  endTime?: string;
  rolloutConfig?: GoogleCloudDialogflowCxV3beta1RolloutConfig;
  result?: GoogleCloudDialogflowCxV3beta1ExperimentResult;
  variantsHistory?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1VariantsHistory>;
  name?: string;
  state?:
    | "STATE_UNSPECIFIED"
    | "DRAFT"
    | "RUNNING"
    | "DONE"
    | "ROLLOUT_FAILED"
    | (string & {});
  lastUpdateTime?: string;
  experimentLength?: string;
  displayName?: string;
  rolloutFailureReason?: string;
  startTime?: string;
  rolloutState?: GoogleCloudDialogflowCxV3beta1RolloutState;
  createTime?: string;
}

export const GoogleCloudDialogflowCxV3beta1Experiment: Schema.Schema<GoogleCloudDialogflowCxV3beta1Experiment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    definition: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ExperimentDefinition,
    ),
    endTime: Schema.optional(Schema.String),
    rolloutConfig: Schema.optional(GoogleCloudDialogflowCxV3beta1RolloutConfig),
    result: Schema.optional(GoogleCloudDialogflowCxV3beta1ExperimentResult),
    variantsHistory: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1VariantsHistory),
    ),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    lastUpdateTime: Schema.optional(Schema.String),
    experimentLength: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    rolloutFailureReason: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    rolloutState: Schema.optional(GoogleCloudDialogflowCxV3beta1RolloutState),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Experiment" });

export interface GoogleCloudDialogflowCxV3beta1ListExperimentsResponse {
  experiments?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Experiment>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3beta1ListExperimentsResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ListExperimentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    experiments: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1Experiment),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ListExperimentsResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1SpeechProcessingMetadata {
  displayName?: string;
}

export const GoogleCloudDialogflowCxV3beta1SpeechProcessingMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1SpeechProcessingMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1SpeechProcessingMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1ValidateFlowRequest {
  languageCode?: string;
}

export const GoogleCloudDialogflowCxV3beta1ValidateFlowRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1ValidateFlowRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ValidateFlowRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportAgentRequestGitDestination {
  trackingBranch?: string;
  commitMessage?: string;
}

export const GoogleCloudDialogflowCxV3beta1ExportAgentRequestGitDestination: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportAgentRequestGitDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trackingBranch: Schema.optional(Schema.String),
    commitMessage: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ExportAgentRequestGitDestination",
  });

export interface GoogleCloudDialogflowCxV3beta1BoostSpecConditionBoostSpecBoostControlSpecControlPoint {
  attributeValue?: string;
  boostAmount?: number;
}

export const GoogleCloudDialogflowCxV3beta1BoostSpecConditionBoostSpecBoostControlSpecControlPoint: Schema.Schema<GoogleCloudDialogflowCxV3beta1BoostSpecConditionBoostSpecBoostControlSpecControlPoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attributeValue: Schema.optional(Schema.String),
    boostAmount: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1BoostSpecConditionBoostSpecBoostControlSpecControlPoint",
  });

export interface GoogleCloudDialogflowCxV3beta1SafetySettingsRaiSettings {
  categoryFilters?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1SafetySettingsRaiSettingsCategoryFilter>;
}

export const GoogleCloudDialogflowCxV3beta1SafetySettingsRaiSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1SafetySettingsRaiSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    categoryFilters: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowCxV3beta1SafetySettingsRaiSettingsCategoryFilter,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1SafetySettingsRaiSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1SafetySettings {
  defaultBannedPhraseMatchStrategy?:
    | "PHRASE_MATCH_STRATEGY_UNSPECIFIED"
    | "PARTIAL_MATCH"
    | "WORD_MATCH"
    | (string & {});
  bannedPhrases?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1SafetySettingsPhrase>;
  promptSecuritySettings?: GoogleCloudDialogflowCxV3beta1SafetySettingsPromptSecuritySettings;
  raiSettings?: GoogleCloudDialogflowCxV3beta1SafetySettingsRaiSettings;
  defaultRaiSettings?: GoogleCloudDialogflowCxV3beta1SafetySettingsRaiSettings;
}

export const GoogleCloudDialogflowCxV3beta1SafetySettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1SafetySettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultBannedPhraseMatchStrategy: Schema.optional(Schema.String),
    bannedPhrases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1SafetySettingsPhrase),
    ),
    promptSecuritySettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1SafetySettingsPromptSecuritySettings,
    ),
    raiSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1SafetySettingsRaiSettings,
    ),
    defaultRaiSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1SafetySettingsRaiSettings,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1SafetySettings" });

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

export interface GoogleCloudDialogflowV2beta1SmartReplyAnswer {
  reply?: string;
  answerRecord?: string;
  confidence?: number;
}

export const GoogleCloudDialogflowV2beta1SmartReplyAnswer: Schema.Schema<GoogleCloudDialogflowV2beta1SmartReplyAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reply: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1SmartReplyAnswer" });

export interface GoogleCloudDialogflowCxV3beta1RestoreToolVersionRequest {}

export const GoogleCloudDialogflowCxV3beta1RestoreToolVersionRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1RestoreToolVersionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RestoreToolVersionRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1FlowValidationResult {
  updateTime?: string;
  name?: string;
  validationMessages?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ValidationMessage>;
}

export const GoogleCloudDialogflowCxV3beta1FlowValidationResult: Schema.Schema<GoogleCloudDialogflowCxV3beta1FlowValidationResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    validationMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ValidationMessage),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1FlowValidationResult",
  });

export interface GoogleCloudDialogflowCxV3beta1AgentValidationResult {
  flowValidationResults?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1FlowValidationResult>;
  name?: string;
}

export const GoogleCloudDialogflowCxV3beta1AgentValidationResult: Schema.Schema<GoogleCloudDialogflowCxV3beta1AgentValidationResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flowValidationResults: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1FlowValidationResult),
    ),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1AgentValidationResult",
  });

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

export interface GoogleCloudDialogflowV2IntentMessageListSelectItem {
  info?: GoogleCloudDialogflowV2IntentMessageSelectItemInfo;
  title?: string;
  image?: GoogleCloudDialogflowV2IntentMessageImage;
  description?: string;
}

export const GoogleCloudDialogflowV2IntentMessageListSelectItem: Schema.Schema<GoogleCloudDialogflowV2IntentMessageListSelectItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    info: Schema.optional(GoogleCloudDialogflowV2IntentMessageSelectItemInfo),
    title: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
    description: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageListSelectItem",
  });

export interface GoogleTypeLatLng {
  latitude?: number;
  longitude?: number;
}

export const GoogleTypeLatLng: Schema.Schema<GoogleTypeLatLng> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latitude: Schema.optional(Schema.Number),
    longitude: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleTypeLatLng" });

export interface GoogleCloudDialogflowCxV3beta1BoostSpecConditionBoostSpecBoostControlSpec {
  interpolationType?:
    | "INTERPOLATION_TYPE_UNSPECIFIED"
    | "LINEAR"
    | (string & {});
  fieldName?: string;
  attributeType?:
    | "ATTRIBUTE_TYPE_UNSPECIFIED"
    | "NUMERICAL"
    | "FRESHNESS"
    | (string & {});
  controlPoints?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1BoostSpecConditionBoostSpecBoostControlSpecControlPoint>;
}

export const GoogleCloudDialogflowCxV3beta1BoostSpecConditionBoostSpecBoostControlSpec: Schema.Schema<GoogleCloudDialogflowCxV3beta1BoostSpecConditionBoostSpecBoostControlSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    interpolationType: Schema.optional(Schema.String),
    fieldName: Schema.optional(Schema.String),
    attributeType: Schema.optional(Schema.String),
    controlPoints: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowCxV3beta1BoostSpecConditionBoostSpecBoostControlSpecControlPoint,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1BoostSpecConditionBoostSpecBoostControlSpec",
  });

export interface GoogleCloudDialogflowCxV3beta1BoostSpecConditionBoostSpec {
  condition?: string;
  boostControlSpec?: GoogleCloudDialogflowCxV3beta1BoostSpecConditionBoostSpecBoostControlSpec;
  boost?: number;
}

export const GoogleCloudDialogflowCxV3beta1BoostSpecConditionBoostSpec: Schema.Schema<GoogleCloudDialogflowCxV3beta1BoostSpecConditionBoostSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    condition: Schema.optional(Schema.String),
    boostControlSpec: Schema.optional(
      GoogleCloudDialogflowCxV3beta1BoostSpecConditionBoostSpecBoostControlSpec,
    ),
    boost: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1BoostSpecConditionBoostSpec",
  });

export interface GoogleCloudDialogflowCxV3beta1BoostSpec {
  conditionBoostSpecs?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1BoostSpecConditionBoostSpec>;
}

export const GoogleCloudDialogflowCxV3beta1BoostSpec: Schema.Schema<GoogleCloudDialogflowCxV3beta1BoostSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditionBoostSpecs: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1BoostSpecConditionBoostSpec),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1BoostSpec" });

export interface GoogleCloudDialogflowCxV3beta1BoostSpecs {
  dataStores?: ReadonlyArray<string>;
  spec?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1BoostSpec>;
}

export const GoogleCloudDialogflowCxV3beta1BoostSpecs: Schema.Schema<GoogleCloudDialogflowCxV3beta1BoostSpecs> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataStores: Schema.optional(Schema.Array(Schema.String)),
    spec: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1BoostSpec),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1BoostSpecs" });

export interface GoogleCloudDialogflowCxV3beta1FilterSpecs {
  dataStores?: ReadonlyArray<string>;
  filter?: string;
}

export const GoogleCloudDialogflowCxV3beta1FilterSpecs: Schema.Schema<GoogleCloudDialogflowCxV3beta1FilterSpecs> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataStores: Schema.optional(Schema.Array(Schema.String)),
    filter: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1FilterSpecs" });

export interface GoogleCloudDialogflowCxV3beta1SearchConfig {
  boostSpecs?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1BoostSpecs>;
  filterSpecs?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1FilterSpecs>;
}

export const GoogleCloudDialogflowCxV3beta1SearchConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1SearchConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boostSpecs: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1BoostSpecs),
    ),
    filterSpecs: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1FilterSpecs),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1SearchConfig" });

export interface GoogleCloudDialogflowCxV3beta1QueryParameters {
  currentPlaybook?: string;
  sessionTtl?: string;
  payload?: Record<string, unknown>;
  disableWebhook?: boolean;
  geoLocation?: GoogleTypeLatLng;
  populateDataStoreConnectionSignals?: boolean;
  currentPage?: string;
  flowVersions?: ReadonlyArray<string>;
  llmModelSettings?: GoogleCloudDialogflowCxV3beta1LlmModelSettings;
  searchConfig?: GoogleCloudDialogflowCxV3beta1SearchConfig;
  endUserMetadata?: Record<string, unknown>;
  parameters?: Record<string, unknown>;
  timeZone?: string;
  analyzeQueryTextSentiment?: boolean;
  parameterScope?: string;
  channel?: string;
  sessionEntityTypes?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1SessionEntityType>;
  webhookHeaders?: Record<string, string>;
}

export const GoogleCloudDialogflowCxV3beta1QueryParameters: Schema.Schema<GoogleCloudDialogflowCxV3beta1QueryParameters> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currentPlaybook: Schema.optional(Schema.String),
    sessionTtl: Schema.optional(Schema.String),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    disableWebhook: Schema.optional(Schema.Boolean),
    geoLocation: Schema.optional(GoogleTypeLatLng),
    populateDataStoreConnectionSignals: Schema.optional(Schema.Boolean),
    currentPage: Schema.optional(Schema.String),
    flowVersions: Schema.optional(Schema.Array(Schema.String)),
    llmModelSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1LlmModelSettings,
    ),
    searchConfig: Schema.optional(GoogleCloudDialogflowCxV3beta1SearchConfig),
    endUserMetadata: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    timeZone: Schema.optional(Schema.String),
    analyzeQueryTextSentiment: Schema.optional(Schema.Boolean),
    parameterScope: Schema.optional(Schema.String),
    channel: Schema.optional(Schema.String),
    sessionEntityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1SessionEntityType),
    ),
    webhookHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1QueryParameters" });

export interface GoogleCloudDialogflowV2Context {
  lifespanCount?: number;
  name?: string;
  parameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2Context: Schema.Schema<GoogleCloudDialogflowV2Context> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lifespanCount: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Context" });

export interface GoogleCloudDialogflowCxV3beta1ValidateAgentRequest {
  languageCode?: string;
}

export const GoogleCloudDialogflowCxV3beta1ValidateAgentRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1ValidateAgentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ValidateAgentRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1VoiceSelectionParams {
  name?: string;
  ssmlGender?:
    | "SSML_VOICE_GENDER_UNSPECIFIED"
    | "SSML_VOICE_GENDER_MALE"
    | "SSML_VOICE_GENDER_FEMALE"
    | "SSML_VOICE_GENDER_NEUTRAL"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1VoiceSelectionParams: Schema.Schema<GoogleCloudDialogflowCxV3beta1VoiceSelectionParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    ssmlGender: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1VoiceSelectionParams",
  });

export interface GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig {
  speakingRate?: number;
  voice?: GoogleCloudDialogflowCxV3beta1VoiceSelectionParams;
  volumeGainDb?: number;
  effectsProfileId?: ReadonlyArray<string>;
  pitch?: number;
}

export const GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    speakingRate: Schema.optional(Schema.Number),
    voice: Schema.optional(GoogleCloudDialogflowCxV3beta1VoiceSelectionParams),
    volumeGainDb: Schema.optional(Schema.Number),
    effectsProfileId: Schema.optional(Schema.Array(Schema.String)),
    pitch: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig",
  });

export interface GoogleCloudDialogflowCxV3beta1OutputAudioConfig {
  audioEncoding?:
    | "OUTPUT_AUDIO_ENCODING_UNSPECIFIED"
    | "OUTPUT_AUDIO_ENCODING_LINEAR_16"
    | "OUTPUT_AUDIO_ENCODING_MP3"
    | "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS"
    | "OUTPUT_AUDIO_ENCODING_OGG_OPUS"
    | "OUTPUT_AUDIO_ENCODING_MULAW"
    | "OUTPUT_AUDIO_ENCODING_ALAW"
    | (string & {});
  synthesizeSpeechConfig?: GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig;
  sampleRateHertz?: number;
}

export const GoogleCloudDialogflowCxV3beta1OutputAudioConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1OutputAudioConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audioEncoding: Schema.optional(Schema.String),
    synthesizeSpeechConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig,
    ),
    sampleRateHertz: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1OutputAudioConfig",
  });

export interface GoogleCloudDialogflowCxV3beta1MatchIntentRequest {
  queryInput?: GoogleCloudDialogflowCxV3beta1QueryInput;
  persistParameterChanges?: boolean;
  queryParams?: GoogleCloudDialogflowCxV3beta1QueryParameters;
}

export const GoogleCloudDialogflowCxV3beta1MatchIntentRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1MatchIntentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryInput: Schema.optional(GoogleCloudDialogflowCxV3beta1QueryInput),
    persistParameterChanges: Schema.optional(Schema.Boolean),
    queryParams: Schema.optional(GoogleCloudDialogflowCxV3beta1QueryParameters),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1MatchIntentRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1Match {
  parameters?: Record<string, unknown>;
  intent?: GoogleCloudDialogflowCxV3beta1Intent;
  event?: string;
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
  resolvedInput?: string;
  confidence?: number;
}

export const GoogleCloudDialogflowCxV3beta1Match: Schema.Schema<GoogleCloudDialogflowCxV3beta1Match> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    intent: Schema.optional(GoogleCloudDialogflowCxV3beta1Intent),
    event: Schema.optional(Schema.String),
    matchType: Schema.optional(Schema.String),
    resolvedInput: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Match" });

export interface GoogleCloudDialogflowCxV3beta1FulfillIntentRequest {
  outputAudioConfig?: GoogleCloudDialogflowCxV3beta1OutputAudioConfig;
  matchIntentRequest?: GoogleCloudDialogflowCxV3beta1MatchIntentRequest;
  match?: GoogleCloudDialogflowCxV3beta1Match;
}

export const GoogleCloudDialogflowCxV3beta1FulfillIntentRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1FulfillIntentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputAudioConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1OutputAudioConfig,
    ),
    matchIntentRequest: Schema.optional(
      GoogleCloudDialogflowCxV3beta1MatchIntentRequest,
    ),
    match: Schema.optional(GoogleCloudDialogflowCxV3beta1Match),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1FulfillIntentRequest",
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

export interface GoogleCloudDialogflowCxV3beta1InlineDestination {
  content?: string;
}

export const GoogleCloudDialogflowCxV3beta1InlineDestination: Schema.Schema<GoogleCloudDialogflowCxV3beta1InlineDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1InlineDestination",
  });

export interface GoogleCloudDialogflowCxV3beta1AgentAnswerFeedbackSettings {
  enableAnswerFeedback?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1AgentAnswerFeedbackSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1AgentAnswerFeedbackSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableAnswerFeedback: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1AgentAnswerFeedbackSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGitConnectionSettings {
  repositoryUri?: string;
  trackingBranch?: string;
  branches?: ReadonlyArray<string>;
  displayName?: string;
  accessTokenSecret?: string;
}

export const GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGitConnectionSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGitConnectionSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repositoryUri: Schema.optional(Schema.String),
    trackingBranch: Schema.optional(Schema.String),
    branches: Schema.optional(Schema.Array(Schema.String)),
    displayName: Schema.optional(Schema.String),
    accessTokenSecret: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGitConnectionSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGithubSettings {
  displayName?: string;
  accessToken?: string;
  repositoryUri?: string;
  trackingBranch?: string;
  branches?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGithubSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGithubSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    accessToken: Schema.optional(Schema.String),
    repositoryUri: Schema.optional(Schema.String),
    trackingBranch: Schema.optional(Schema.String),
    branches: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGithubSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettings {
  gitConnectionSettings?: GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGitConnectionSettings;
  githubSettings?: GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGithubSettings;
}

export const GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gitConnectionSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGitConnectionSettings,
    ),
    githubSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGithubSettings,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1AgentClientCertificateSettings {
  privateKey?: string;
  passphrase?: string;
  sslCertificate?: string;
}

export const GoogleCloudDialogflowCxV3beta1AgentClientCertificateSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1AgentClientCertificateSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateKey: Schema.optional(Schema.String),
    passphrase: Schema.optional(Schema.String),
    sslCertificate: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1AgentClientCertificateSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1AgentGenAppBuilderSettings {
  engine?: string;
}

export const GoogleCloudDialogflowCxV3beta1AgentGenAppBuilderSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1AgentGenAppBuilderSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    engine: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1AgentGenAppBuilderSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1SpeechToTextSettings {
  enableSpeechAdaptation?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1SpeechToTextSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1SpeechToTextSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableSpeechAdaptation: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1SpeechToTextSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1AgentPersonalizationSettings {
  defaultEndUserMetadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3beta1AgentPersonalizationSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1AgentPersonalizationSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultEndUserMetadata: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1AgentPersonalizationSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1TextToSpeechSettings {
  synthesizeSpeechConfigs?: Record<
    string,
    GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig
  >;
}

export const GoogleCloudDialogflowCxV3beta1TextToSpeechSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1TextToSpeechSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    synthesizeSpeechConfigs: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1TextToSpeechSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1Agent {
  enableSpellCorrection?: boolean;
  answerFeedbackSettings?: GoogleCloudDialogflowCxV3beta1AgentAnswerFeedbackSettings;
  startFlow?: string;
  satisfiesPzs?: boolean;
  defaultLanguageCode?: string;
  description?: string;
  enableStackdriverLogging?: boolean;
  gitIntegrationSettings?: GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettings;
  locked?: boolean;
  satisfiesPzi?: boolean;
  displayName?: string;
  securitySettings?: string;
  avatarUri?: string;
  advancedSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettings;
  startPlaybook?: string;
  bigqueryExportSettings?: GoogleCloudDialogflowCxV3beta1BigQueryExportSettings;
  clientCertificateSettings?: GoogleCloudDialogflowCxV3beta1AgentClientCertificateSettings;
  name?: string;
  genAppBuilderSettings?: GoogleCloudDialogflowCxV3beta1AgentGenAppBuilderSettings;
  timeZone?: string;
  speechToTextSettings?: GoogleCloudDialogflowCxV3beta1SpeechToTextSettings;
  personalizationSettings?: GoogleCloudDialogflowCxV3beta1AgentPersonalizationSettings;
  supportedLanguageCodes?: ReadonlyArray<string>;
  enableMultiLanguageTraining?: boolean;
  textToSpeechSettings?: GoogleCloudDialogflowCxV3beta1TextToSpeechSettings;
}

export const GoogleCloudDialogflowCxV3beta1Agent: Schema.Schema<GoogleCloudDialogflowCxV3beta1Agent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableSpellCorrection: Schema.optional(Schema.Boolean),
    answerFeedbackSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AgentAnswerFeedbackSettings,
    ),
    startFlow: Schema.optional(Schema.String),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    defaultLanguageCode: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    enableStackdriverLogging: Schema.optional(Schema.Boolean),
    gitIntegrationSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettings,
    ),
    locked: Schema.optional(Schema.Boolean),
    satisfiesPzi: Schema.optional(Schema.Boolean),
    displayName: Schema.optional(Schema.String),
    securitySettings: Schema.optional(Schema.String),
    avatarUri: Schema.optional(Schema.String),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettings,
    ),
    startPlaybook: Schema.optional(Schema.String),
    bigqueryExportSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1BigQueryExportSettings,
    ),
    clientCertificateSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AgentClientCertificateSettings,
    ),
    name: Schema.optional(Schema.String),
    genAppBuilderSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AgentGenAppBuilderSettings,
    ),
    timeZone: Schema.optional(Schema.String),
    speechToTextSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1SpeechToTextSettings,
    ),
    personalizationSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AgentPersonalizationSettings,
    ),
    supportedLanguageCodes: Schema.optional(Schema.Array(Schema.String)),
    enableMultiLanguageTraining: Schema.optional(Schema.Boolean),
    textToSpeechSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1TextToSpeechSettings,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Agent" });

export interface GoogleCloudDialogflowCxV3beta1ListAgentsResponse {
  agents?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Agent>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3beta1ListAgentsResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ListAgentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agents: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3beta1Agent)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ListAgentsResponse",
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

export interface GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo {
  justCollected?: boolean;
  required?: boolean;
  value?: unknown;
  displayName?: string;
  state?:
    | "PARAMETER_STATE_UNSPECIFIED"
    | "EMPTY"
    | "INVALID"
    | "FILLED"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo: Schema.Schema<GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    justCollected: Schema.optional(Schema.Boolean),
    required: Schema.optional(Schema.Boolean),
    value: Schema.optional(Schema.Unknown),
    displayName: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowCxV3beta1WebhookResponse {
  payload?: Record<string, unknown>;
  targetPage?: string;
  sessionInfo?: GoogleCloudDialogflowCxV3beta1SessionInfo;
  targetFlow?: string;
  fulfillmentResponse?: GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse;
  pageInfo?: GoogleCloudDialogflowCxV3beta1PageInfo;
}

export const GoogleCloudDialogflowCxV3beta1WebhookResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1WebhookResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    targetPage: Schema.optional(Schema.String),
    sessionInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1SessionInfo),
    targetFlow: Schema.optional(Schema.String),
    fulfillmentResponse: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse,
    ),
    pageInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1PageInfo),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1WebhookResponse" });

export interface GoogleCloudDialogflowV2beta1BatchUpdateIntentsResponse {
  intents?: ReadonlyArray<GoogleCloudDialogflowV2beta1Intent>;
}

export const GoogleCloudDialogflowV2beta1BatchUpdateIntentsResponse: Schema.Schema<GoogleCloudDialogflowV2beta1BatchUpdateIntentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intents: Schema.optional(Schema.Array(GoogleCloudDialogflowV2beta1Intent)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1BatchUpdateIntentsResponse",
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

export interface GoogleCloudDialogflowCxV3beta1ExportIntentsMetadata {}

export const GoogleCloudDialogflowCxV3beta1ExportIntentsMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportIntentsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportIntentsMetadata",
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

export interface GoogleLongrunningOperation {
  name?: string;
  done?: boolean;
  response?: Record<string, unknown>;
  metadata?: Record<string, unknown>;
  error?: GoogleRpcStatus;
}

export const GoogleLongrunningOperation: Schema.Schema<GoogleLongrunningOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    done: Schema.optional(Schema.Boolean),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(GoogleRpcStatus),
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

export interface GoogleCloudDialogflowCxV3beta1Changelog {
  languageCode?: string;
  name?: string;
  displayName?: string;
  createTime?: string;
  userEmail?: string;
  type?: string;
  resource?: string;
  action?: string;
}

export const GoogleCloudDialogflowCxV3beta1Changelog: Schema.Schema<GoogleCloudDialogflowCxV3beta1Changelog> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    userEmail: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Changelog" });

export interface GoogleCloudDialogflowCxV3beta1ListChangelogsResponse {
  nextPageToken?: string;
  changelogs?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Changelog>;
}

export const GoogleCloudDialogflowCxV3beta1ListChangelogsResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ListChangelogsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    changelogs: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1Changelog),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ListChangelogsResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1ImportTestCasesRequest {
  gcsUri?: string;
  content?: string;
}

export const GoogleCloudDialogflowCxV3beta1ImportTestCasesRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportTestCasesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsUri: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportTestCasesRequest",
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

export interface GoogleCloudDialogflowV2SessionEntityType {
  name?: string;
  entityOverrideMode?:
    | "ENTITY_OVERRIDE_MODE_UNSPECIFIED"
    | "ENTITY_OVERRIDE_MODE_OVERRIDE"
    | "ENTITY_OVERRIDE_MODE_SUPPLEMENT"
    | (string & {});
  entities?: ReadonlyArray<GoogleCloudDialogflowV2EntityTypeEntity>;
}

export const GoogleCloudDialogflowV2SessionEntityType: Schema.Schema<GoogleCloudDialogflowV2SessionEntityType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    entityOverrideMode: Schema.optional(Schema.String),
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2EntityTypeEntity),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SessionEntityType" });

export interface GoogleCloudDialogflowV2IntentMessageText {
  text?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2IntentMessageText: Schema.Schema<GoogleCloudDialogflowV2IntentMessageText> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageText" });

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

export interface GoogleCloudDialogflowV2IntentMessageListSelect {
  items?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageListSelectItem>;
  title?: string;
  subtitle?: string;
}

export const GoogleCloudDialogflowV2IntentMessageListSelect: Schema.Schema<GoogleCloudDialogflowV2IntentMessageListSelect> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageListSelectItem),
    ),
    title: Schema.optional(Schema.String),
    subtitle: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageListSelect" });

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
  image?: GoogleCloudDialogflowV2IntentMessageImage;
  title?: string;
  openUriAction?: GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;
  description?: string;
  footer?: string;
}

export const GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem: Schema.Schema<GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    image: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
    title: Schema.optional(Schema.String),
    openUriAction: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction,
    ),
    description: Schema.optional(Schema.String),
    footer: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject {
  description?: string;
  largeImage?: GoogleCloudDialogflowV2IntentMessageImage;
  icon?: GoogleCloudDialogflowV2IntentMessageImage;
  name?: string;
  contentUrl?: string;
}

export const GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject: Schema.Schema<GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    largeImage: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
    icon: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
    name: Schema.optional(Schema.String),
    contentUrl: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject",
  });

export interface GoogleCloudDialogflowV2IntentMessageMediaContent {
  mediaObjects?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject>;
  mediaType?: "RESPONSE_MEDIA_TYPE_UNSPECIFIED" | "AUDIO" | (string & {});
}

export const GoogleCloudDialogflowV2IntentMessageMediaContent: Schema.Schema<GoogleCloudDialogflowV2IntentMessageMediaContent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mediaObjects: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject,
      ),
    ),
    mediaType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageMediaContent",
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

export interface GoogleCloudDialogflowV2IntentMessage {
  text?: GoogleCloudDialogflowV2IntentMessageText;
  card?: GoogleCloudDialogflowV2IntentMessageCard;
  payload?: Record<string, unknown>;
  suggestions?: GoogleCloudDialogflowV2IntentMessageSuggestions;
  quickReplies?: GoogleCloudDialogflowV2IntentMessageQuickReplies;
  simpleResponses?: GoogleCloudDialogflowV2IntentMessageSimpleResponses;
  listSelect?: GoogleCloudDialogflowV2IntentMessageListSelect;
  tableCard?: GoogleCloudDialogflowV2IntentMessageTableCard;
  basicCard?: GoogleCloudDialogflowV2IntentMessageBasicCard;
  browseCarouselCard?: GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard;
  image?: GoogleCloudDialogflowV2IntentMessageImage;
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
  linkOutSuggestion?: GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion;
  mediaContent?: GoogleCloudDialogflowV2IntentMessageMediaContent;
  carouselSelect?: GoogleCloudDialogflowV2IntentMessageCarouselSelect;
}

export const GoogleCloudDialogflowV2IntentMessage: Schema.Schema<GoogleCloudDialogflowV2IntentMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(GoogleCloudDialogflowV2IntentMessageText),
    card: Schema.optional(GoogleCloudDialogflowV2IntentMessageCard),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    suggestions: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageSuggestions,
    ),
    quickReplies: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageQuickReplies,
    ),
    simpleResponses: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageSimpleResponses,
    ),
    listSelect: Schema.optional(GoogleCloudDialogflowV2IntentMessageListSelect),
    tableCard: Schema.optional(GoogleCloudDialogflowV2IntentMessageTableCard),
    basicCard: Schema.optional(GoogleCloudDialogflowV2IntentMessageBasicCard),
    browseCarouselCard: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard,
    ),
    image: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
    platform: Schema.optional(Schema.String),
    linkOutSuggestion: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion,
    ),
    mediaContent: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageMediaContent,
    ),
    carouselSelect: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageCarouselSelect,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessage" });

export interface GoogleCloudDialogflowV2WebhookResponse {
  sessionEntityTypes?: ReadonlyArray<GoogleCloudDialogflowV2SessionEntityType>;
  source?: string;
  payload?: Record<string, unknown>;
  fulfillmentMessages?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessage>;
  followupEventInput?: GoogleCloudDialogflowV2EventInput;
  fulfillmentText?: string;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2Context>;
}

export const GoogleCloudDialogflowV2WebhookResponse: Schema.Schema<GoogleCloudDialogflowV2WebhookResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionEntityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SessionEntityType),
    ),
    source: Schema.optional(Schema.String),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    fulfillmentMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessage),
    ),
    followupEventInput: Schema.optional(GoogleCloudDialogflowV2EventInput),
    fulfillmentText: Schema.optional(Schema.String),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2Context),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2WebhookResponse" });

export interface GoogleCloudDialogflowV2beta1AnnotatedMessagePart {
  formattedValue?: unknown;
  text?: string;
  entityType?: string;
}

export const GoogleCloudDialogflowV2beta1AnnotatedMessagePart: Schema.Schema<GoogleCloudDialogflowV2beta1AnnotatedMessagePart> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    formattedValue: Schema.optional(Schema.Unknown),
    text: Schema.optional(Schema.String),
    entityType: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowV2beta1ResponseMessageText {
  text?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1ResponseMessageText: Schema.Schema<GoogleCloudDialogflowV2beta1ResponseMessageText> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ResponseMessageText",
  });

export interface GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment {
  audio?: string;
  uri?: string;
  allowPlaybackInterruption?: boolean;
}

export const GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment: Schema.Schema<GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audio: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
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

export interface GoogleCloudDialogflowV2beta1ResponseMessage {
  text?: GoogleCloudDialogflowV2beta1ResponseMessageText;
  mixedAudio?: GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio;
  telephonyTransferCall?: GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall;
  payload?: Record<string, unknown>;
  liveAgentHandoff?: GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff;
  endInteraction?: GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction;
}

export const GoogleCloudDialogflowV2beta1ResponseMessage: Schema.Schema<GoogleCloudDialogflowV2beta1ResponseMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(GoogleCloudDialogflowV2beta1ResponseMessageText),
    mixedAudio: Schema.optional(
      GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio,
    ),
    telephonyTransferCall: Schema.optional(
      GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall,
    ),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    liveAgentHandoff: Schema.optional(
      GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff,
    ),
    endInteraction: Schema.optional(
      GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ResponseMessage" });

export interface GoogleCloudDialogflowV2beta1Message {
  participant?: string;
  sentimentAnalysis?: GoogleCloudDialogflowV2beta1SentimentAnalysisResult;
  participantRole?:
    | "ROLE_UNSPECIFIED"
    | "HUMAN_AGENT"
    | "AUTOMATED_AGENT"
    | "END_USER"
    | (string & {});
  languageCode?: string;
  sendTime?: string;
  messageAnnotation?: GoogleCloudDialogflowV2beta1MessageAnnotation;
  name?: string;
  content?: string;
  responseMessages?: ReadonlyArray<GoogleCloudDialogflowV2beta1ResponseMessage>;
  createTime?: string;
}

export const GoogleCloudDialogflowV2beta1Message: Schema.Schema<GoogleCloudDialogflowV2beta1Message> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    participant: Schema.optional(Schema.String),
    sentimentAnalysis: Schema.optional(
      GoogleCloudDialogflowV2beta1SentimentAnalysisResult,
    ),
    participantRole: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    sendTime: Schema.optional(Schema.String),
    messageAnnotation: Schema.optional(
      GoogleCloudDialogflowV2beta1MessageAnnotation,
    ),
    name: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    responseMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1ResponseMessage),
    ),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1Message" });

export interface GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo {
  tag?: string;
}

export const GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo: Schema.Schema<GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tag: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo",
  });

export interface GoogleCloudDialogflowCxV3ExportIntentsMetadata {}

export const GoogleCloudDialogflowCxV3ExportIntentsMetadata: Schema.Schema<GoogleCloudDialogflowCxV3ExportIntentsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ExportIntentsMetadata",
  });

export interface GoogleCloudDialogflowV2DeleteConversationDatasetOperationMetadata {}

export const GoogleCloudDialogflowV2DeleteConversationDatasetOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2DeleteConversationDatasetOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleCloudDialogflowV2DeleteConversationDatasetOperationMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1ContinuousTestResult {
  result?:
    | "AGGREGATED_TEST_RESULT_UNSPECIFIED"
    | "PASSED"
    | "FAILED"
    | (string & {});
  testCaseResults?: ReadonlyArray<string>;
  name?: string;
  runTime?: string;
}

export const GoogleCloudDialogflowCxV3beta1ContinuousTestResult: Schema.Schema<GoogleCloudDialogflowCxV3beta1ContinuousTestResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.optional(Schema.String),
    testCaseResults: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    runTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ContinuousTestResult",
  });

export interface GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponse {
  continuousTestResults?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ContinuousTestResult>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    continuousTestResults: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ContinuousTestResult),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponse",
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

export interface GoogleCloudDialogflowV2AgentCoachingSuggestionSampleResponse {
  responseText?: string;
  sources?: GoogleCloudDialogflowV2AgentCoachingSuggestionSources;
  duplicateCheckResult?: GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResult;
}

export const GoogleCloudDialogflowV2AgentCoachingSuggestionSampleResponse: Schema.Schema<GoogleCloudDialogflowV2AgentCoachingSuggestionSampleResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export interface GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion {
  suggestionIndex?: number;
  answerRecord?: string;
  similarityScore?: number;
}

export const GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion: Schema.Schema<GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suggestionIndex: Schema.optional(Schema.Number),
    answerRecord: Schema.optional(Schema.String),
    similarityScore: Schema.optional(Schema.Number),
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
  condition?: string;
  displayName?: string;
  agentAction?: string;
  duplicateCheckResult?: GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResult;
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
}

export const GoogleCloudDialogflowV2AgentCoachingInstruction: Schema.Schema<GoogleCloudDialogflowV2AgentCoachingInstruction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    condition: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    agentAction: Schema.optional(Schema.String),
    duplicateCheckResult: Schema.optional(
      GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResult,
    ),
    systemAction: Schema.optional(Schema.String),
    displayDetails: Schema.optional(Schema.String),
    triggeringEvent: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2AgentCoachingInstruction",
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

export interface GoogleCloudDialogflowV2AgentCoachingSuggestion {
  sampleResponses?: ReadonlyArray<GoogleCloudDialogflowV2AgentCoachingSuggestionSampleResponse>;
  applicableInstructions?: ReadonlyArray<GoogleCloudDialogflowV2AgentCoachingInstruction>;
  agentActionSuggestions?: ReadonlyArray<GoogleCloudDialogflowV2AgentCoachingSuggestionAgentActionSuggestion>;
}

export const GoogleCloudDialogflowV2AgentCoachingSuggestion: Schema.Schema<GoogleCloudDialogflowV2AgentCoachingSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sampleResponses: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2AgentCoachingSuggestionSampleResponse,
      ),
    ),
    applicableInstructions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2AgentCoachingInstruction),
    ),
    agentActionSuggestions: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2AgentCoachingSuggestionAgentActionSuggestion,
      ),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2AgentCoachingSuggestion" });

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

export interface GoogleCloudDialogflowV2ToolCall {
  state?:
    | "STATE_UNSPECIFIED"
    | "TRIGGERED"
    | "NEEDS_CONFIRMATION"
    | (string & {});
  tool?: string;
  cesToolset?: string;
  inputParameters?: Record<string, unknown>;
  createTime?: string;
  toolDisplayDetails?: string;
  cesTool?: string;
  answerRecord?: string;
  toolDisplayName?: string;
  action?: string;
  cesApp?: string;
}

export const GoogleCloudDialogflowV2ToolCall: Schema.Schema<GoogleCloudDialogflowV2ToolCall> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    tool: Schema.optional(Schema.String),
    cesToolset: Schema.optional(Schema.String),
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    createTime: Schema.optional(Schema.String),
    toolDisplayDetails: Schema.optional(Schema.String),
    cesTool: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    toolDisplayName: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    cesApp: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolCall" });

export interface GoogleCloudDialogflowV2ToolCallResultError {
  message?: string;
}

export const GoogleCloudDialogflowV2ToolCallResultError: Schema.Schema<GoogleCloudDialogflowV2ToolCallResultError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolCallResultError" });

export interface GoogleCloudDialogflowV2ToolCallResult {
  cesTool?: string;
  answerRecord?: string;
  action?: string;
  cesApp?: string;
  error?: GoogleCloudDialogflowV2ToolCallResultError;
  rawContent?: string;
  tool?: string;
  cesToolset?: string;
  content?: string;
  createTime?: string;
}

export const GoogleCloudDialogflowV2ToolCallResult: Schema.Schema<GoogleCloudDialogflowV2ToolCallResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cesTool: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    cesApp: Schema.optional(Schema.String),
    error: Schema.optional(GoogleCloudDialogflowV2ToolCallResultError),
    rawContent: Schema.optional(Schema.String),
    tool: Schema.optional(Schema.String),
    cesToolset: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowV2FreeFormSuggestion {
  response?: string;
}

export const GoogleCloudDialogflowV2FreeFormSuggestion: Schema.Schema<GoogleCloudDialogflowV2FreeFormSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    response: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2FreeFormSuggestion" });

export interface GoogleCloudDialogflowV2GeneratorSuggestion {
  agentCoachingSuggestion?: GoogleCloudDialogflowV2AgentCoachingSuggestion;
  summarySuggestion?: GoogleCloudDialogflowV2SummarySuggestion;
  toolCallInfo?: ReadonlyArray<GoogleCloudDialogflowV2GeneratorSuggestionToolCallInfo>;
  freeFormSuggestion?: GoogleCloudDialogflowV2FreeFormSuggestion;
}

export const GoogleCloudDialogflowV2GeneratorSuggestion: Schema.Schema<GoogleCloudDialogflowV2GeneratorSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentCoachingSuggestion: Schema.optional(
      GoogleCloudDialogflowV2AgentCoachingSuggestion,
    ),
    summarySuggestion: Schema.optional(
      GoogleCloudDialogflowV2SummarySuggestion,
    ),
    toolCallInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2GeneratorSuggestionToolCallInfo),
    ),
    freeFormSuggestion: Schema.optional(
      GoogleCloudDialogflowV2FreeFormSuggestion,
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

export interface GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery {
  queryText?: string;
  searchContexts?: ReadonlyArray<GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuerySearchContext>;
}

export const GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery: Schema.Schema<GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryText: Schema.optional(Schema.String),
    searchContexts: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuerySearchContext,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery",
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
  generativeSource?: GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource;
  playbookSource?: GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource;
  eventSource?: GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerEventSource;
  faqSource?: GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerFaqSource;
  answerText?: string;
}

export const GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswer: Schema.Schema<GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generativeSource: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource,
    ),
    playbookSource: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource,
    ),
    eventSource: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerEventSource,
    ),
    faqSource: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerFaqSource,
    ),
    answerText: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswer",
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

export interface GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior {
  endUserMetadataIncluded?: boolean;
  useTranslatedMessage?: boolean;
  thirdPartyConnectorAllowed?: boolean;
  queryContainedSearchContext?: boolean;
  appendedSearchContextCount?: number;
  useCustomSafetyFilterLevel?: boolean;
  answerGenerationRewriterOn?: boolean;
  usePubsubDelivery?: boolean;
  queryGenerationEndUserLanguageMismatch?: boolean;
  conversationTranscriptHasMixedLanguages?: boolean;
  queryGenerationAgentLanguageMismatch?: boolean;
  invalidItemsQuerySuggestionSkipped?: boolean;
  previousQueriesIncluded?: boolean;
  returnQueryOnly?: boolean;
  multipleQueriesGenerated?: boolean;
  primaryQueryRedactedAndReplaced?: boolean;
  disableSyncDelivery?: boolean;
}

export const GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior: Schema.Schema<GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endUserMetadataIncluded: Schema.optional(Schema.Boolean),
    useTranslatedMessage: Schema.optional(Schema.Boolean),
    thirdPartyConnectorAllowed: Schema.optional(Schema.Boolean),
    queryContainedSearchContext: Schema.optional(Schema.Boolean),
    appendedSearchContextCount: Schema.optional(Schema.Number),
    useCustomSafetyFilterLevel: Schema.optional(Schema.Boolean),
    answerGenerationRewriterOn: Schema.optional(Schema.Boolean),
    usePubsubDelivery: Schema.optional(Schema.Boolean),
    queryGenerationEndUserLanguageMismatch: Schema.optional(Schema.Boolean),
    conversationTranscriptHasMixedLanguages: Schema.optional(Schema.Boolean),
    queryGenerationAgentLanguageMismatch: Schema.optional(Schema.Boolean),
    invalidItemsQuerySuggestionSkipped: Schema.optional(Schema.Boolean),
    previousQueriesIncluded: Schema.optional(Schema.Boolean),
    returnQueryOnly: Schema.optional(Schema.Boolean),
    multipleQueriesGenerated: Schema.optional(Schema.Boolean),
    primaryQueryRedactedAndReplaced: Schema.optional(Schema.Boolean),
    disableSyncDelivery: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior",
  });

export interface GoogleCloudDialogflowV2KnowledgeAssistDebugInfoQueryGenerationDebugInfo {
  candidatesTokenCount?: number;
  promptTokenCount?: number;
  totalTokenCount?: number;
}

export const GoogleCloudDialogflowV2KnowledgeAssistDebugInfoQueryGenerationDebugInfo: Schema.Schema<GoogleCloudDialogflowV2KnowledgeAssistDebugInfoQueryGenerationDebugInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    candidatesTokenCount: Schema.optional(Schema.Number),
    promptTokenCount: Schema.optional(Schema.Number),
    totalTokenCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2KnowledgeAssistDebugInfoQueryGenerationDebugInfo",
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
  knowledgeAssistBehavior?: GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior;
  queryGenerationDebugInfo?: GoogleCloudDialogflowV2KnowledgeAssistDebugInfoQueryGenerationDebugInfo;
  cesDebugInfo?: Record<string, unknown>;
  ingestedContextReferenceDebugInfo?: GoogleCloudDialogflowV2IngestedContextReferenceDebugInfo;
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
    knowledgeAssistBehavior: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior,
    ),
    queryGenerationDebugInfo: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistDebugInfoQueryGenerationDebugInfo,
    ),
    cesDebugInfo: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    ingestedContextReferenceDebugInfo: Schema.optional(
      GoogleCloudDialogflowV2IngestedContextReferenceDebugInfo,
    ),
    queryCategorizationFailureReason: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2KnowledgeAssistDebugInfo",
  });

export interface GoogleCloudDialogflowV2KnowledgeAssistAnswer {
  suggestedQuery?: GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery;
  answerRecord?: string;
  suggestedQueryAnswer?: GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswer;
  knowledgeAssistDebugInfo?: GoogleCloudDialogflowV2KnowledgeAssistDebugInfo;
}

export const GoogleCloudDialogflowV2KnowledgeAssistAnswer: Schema.Schema<GoogleCloudDialogflowV2KnowledgeAssistAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suggestedQuery: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery,
    ),
    answerRecord: Schema.optional(Schema.String),
    suggestedQueryAnswer: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswer,
    ),
    knowledgeAssistDebugInfo: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistDebugInfo,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2KnowledgeAssistAnswer" });

export interface GoogleCloudDialogflowV2KnowledgeAssistAnswerAdditionalSuggestedQueryResult {
  suggestedQuery?: GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2KnowledgeAssistAnswerAdditionalSuggestedQueryResult: Schema.Schema<GoogleCloudDialogflowV2KnowledgeAssistAnswerAdditionalSuggestedQueryResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse: Schema.Schema<GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export interface GoogleCloudDialogflowV2FaqAnswer {
  metadata?: Record<string, string>;
  answer?: string;
  confidence?: number;
  source?: string;
  answerRecord?: string;
  question?: string;
}

export const GoogleCloudDialogflowV2FaqAnswer: Schema.Schema<GoogleCloudDialogflowV2FaqAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    answer: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
    source: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    question: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2FaqAnswer" });

export interface GoogleCloudDialogflowV2SuggestFaqAnswersResponse {
  latestMessage?: string;
  faqAnswers?: ReadonlyArray<GoogleCloudDialogflowV2FaqAnswer>;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2SuggestFaqAnswersResponse: Schema.Schema<GoogleCloudDialogflowV2SuggestFaqAnswersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestMessage: Schema.optional(Schema.String),
    faqAnswers: Schema.optional(Schema.Array(GoogleCloudDialogflowV2FaqAnswer)),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SuggestFaqAnswersResponse",
  });

export interface GoogleCloudDialogflowV2SmartReplyAnswer {
  reply?: string;
  answerRecord?: string;
  confidence?: number;
}

export const GoogleCloudDialogflowV2SmartReplyAnswer: Schema.Schema<GoogleCloudDialogflowV2SmartReplyAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reply: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SmartReplyAnswer" });

export interface GoogleCloudDialogflowV2SuggestSmartRepliesResponse {
  latestMessage?: string;
  smartReplyAnswers?: ReadonlyArray<GoogleCloudDialogflowV2SmartReplyAnswer>;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2SuggestSmartRepliesResponse: Schema.Schema<GoogleCloudDialogflowV2SuggestSmartRepliesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestMessage: Schema.optional(Schema.String),
    smartReplyAnswers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SmartReplyAnswer),
    ),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SuggestSmartRepliesResponse",
  });

export interface GoogleCloudDialogflowV2ArticleAnswer {
  snippets?: ReadonlyArray<string>;
  confidence?: number;
  metadata?: Record<string, string>;
  uri?: string;
  title?: string;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2ArticleAnswer: Schema.Schema<GoogleCloudDialogflowV2ArticleAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    snippets: Schema.optional(Schema.Array(Schema.String)),
    confidence: Schema.optional(Schema.Number),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    uri: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ArticleAnswer" });

export interface GoogleCloudDialogflowV2SuggestArticlesResponse {
  articleAnswers?: ReadonlyArray<GoogleCloudDialogflowV2ArticleAnswer>;
  contextSize?: number;
  latestMessage?: string;
}

export const GoogleCloudDialogflowV2SuggestArticlesResponse: Schema.Schema<GoogleCloudDialogflowV2SuggestArticlesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    articleAnswers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2ArticleAnswer),
    ),
    contextSize: Schema.optional(Schema.Number),
    latestMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SuggestArticlesResponse" });

export interface GoogleCloudDialogflowV2SuggestionResult {
  generateSuggestionsResponse?: GoogleCloudDialogflowV2GenerateSuggestionsResponse;
  suggestKnowledgeAssistResponse?: GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse;
  suggestFaqAnswersResponse?: GoogleCloudDialogflowV2SuggestFaqAnswersResponse;
  suggestSmartRepliesResponse?: GoogleCloudDialogflowV2SuggestSmartRepliesResponse;
  error?: GoogleRpcStatus;
  suggestArticlesResponse?: GoogleCloudDialogflowV2SuggestArticlesResponse;
}

export const GoogleCloudDialogflowV2SuggestionResult: Schema.Schema<GoogleCloudDialogflowV2SuggestionResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generateSuggestionsResponse: Schema.optional(
      GoogleCloudDialogflowV2GenerateSuggestionsResponse,
    ),
    suggestKnowledgeAssistResponse: Schema.optional(
      GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse,
    ),
    suggestFaqAnswersResponse: Schema.optional(
      GoogleCloudDialogflowV2SuggestFaqAnswersResponse,
    ),
    suggestSmartRepliesResponse: Schema.optional(
      GoogleCloudDialogflowV2SuggestSmartRepliesResponse,
    ),
    error: Schema.optional(GoogleRpcStatus),
    suggestArticlesResponse: Schema.optional(
      GoogleCloudDialogflowV2SuggestArticlesResponse,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SuggestionResult" });

export interface GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig {
  version?: string;
}

export const GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig",
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

export interface GoogleCloudDialogflowCxV3beta1ImportEntityTypesResponseConflictingResources {
  entityDisplayNames?: ReadonlyArray<string>;
  entityTypeDisplayNames?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1ImportEntityTypesResponseConflictingResources: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportEntityTypesResponseConflictingResources> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityDisplayNames: Schema.optional(Schema.Array(Schema.String)),
    entityTypeDisplayNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ImportEntityTypesResponseConflictingResources",
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

export interface GoogleCloudDialogflowCxV3beta1ToolDataStoreToolFallbackPrompt {}

export const GoogleCloudDialogflowCxV3beta1ToolDataStoreToolFallbackPrompt: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolDataStoreToolFallbackPrompt> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ToolDataStoreToolFallbackPrompt",
  });

export interface GoogleCloudDialogflowCxV3beta1ToolDataStoreTool {
  dataStoreConnections?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1DataStoreConnection>;
  fallbackPrompt?: GoogleCloudDialogflowCxV3beta1ToolDataStoreToolFallbackPrompt;
}

export const GoogleCloudDialogflowCxV3beta1ToolDataStoreTool: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolDataStoreTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataStoreConnections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1DataStoreConnection),
    ),
    fallbackPrompt: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolDataStoreToolFallbackPrompt,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ToolDataStoreTool",
  });

export interface GoogleCloudDialogflowCxV3beta1ToolServiceDirectoryConfig {
  service?: string;
}

export const GoogleCloudDialogflowCxV3beta1ToolServiceDirectoryConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolServiceDirectoryConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ToolServiceDirectoryConfig",
  });

export interface GoogleCloudDialogflowCxV3beta1ToolAuthenticationApiKeyConfig {
  keyName?: string;
  apiKey?: string;
  secretVersionForApiKey?: string;
  requestLocation?:
    | "REQUEST_LOCATION_UNSPECIFIED"
    | "HEADER"
    | "QUERY_STRING"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1ToolAuthenticationApiKeyConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolAuthenticationApiKeyConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyName: Schema.optional(Schema.String),
    apiKey: Schema.optional(Schema.String),
    secretVersionForApiKey: Schema.optional(Schema.String),
    requestLocation: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ToolAuthenticationApiKeyConfig",
  });

export interface GoogleCloudDialogflowCxV3beta1ToolAuthenticationServiceAgentAuthConfig {
  serviceAgentAuth?:
    | "SERVICE_AGENT_AUTH_UNSPECIFIED"
    | "ID_TOKEN"
    | "ACCESS_TOKEN"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1ToolAuthenticationServiceAgentAuthConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolAuthenticationServiceAgentAuthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAgentAuth: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ToolAuthenticationServiceAgentAuthConfig",
  });

export interface GoogleCloudDialogflowCxV3beta1ToolAuthenticationBearerTokenConfig {
  token?: string;
  secretVersionForToken?: string;
}

export const GoogleCloudDialogflowCxV3beta1ToolAuthenticationBearerTokenConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolAuthenticationBearerTokenConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String),
    secretVersionForToken: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ToolAuthenticationBearerTokenConfig",
  });

export interface GoogleCloudDialogflowCxV3beta1ToolAuthentication {
  serviceAccountAuthConfig?: GoogleCloudDialogflowCxV3beta1ToolAuthenticationServiceAccountAuthConfig;
  apiKeyConfig?: GoogleCloudDialogflowCxV3beta1ToolAuthenticationApiKeyConfig;
  oauthConfig?: GoogleCloudDialogflowCxV3beta1ToolAuthenticationOAuthConfig;
  serviceAgentAuthConfig?: GoogleCloudDialogflowCxV3beta1ToolAuthenticationServiceAgentAuthConfig;
  bearerTokenConfig?: GoogleCloudDialogflowCxV3beta1ToolAuthenticationBearerTokenConfig;
}

export const GoogleCloudDialogflowCxV3beta1ToolAuthentication: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolAuthentication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAccountAuthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolAuthenticationServiceAccountAuthConfig,
    ),
    apiKeyConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolAuthenticationApiKeyConfig,
    ),
    oauthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolAuthenticationOAuthConfig,
    ),
    serviceAgentAuthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolAuthenticationServiceAgentAuthConfig,
    ),
    bearerTokenConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolAuthenticationBearerTokenConfig,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ToolAuthentication",
  });

export interface GoogleCloudDialogflowCxV3beta1ToolTLSConfigCACert {
  displayName?: string;
  cert?: string;
}

export const GoogleCloudDialogflowCxV3beta1ToolTLSConfigCACert: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolTLSConfigCACert> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    cert: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ToolTLSConfigCACert",
  });

export interface GoogleCloudDialogflowCxV3beta1ToolTLSConfig {
  caCerts?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ToolTLSConfigCACert>;
}

export const GoogleCloudDialogflowCxV3beta1ToolTLSConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolTLSConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    caCerts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ToolTLSConfigCACert),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ToolTLSConfig" });

export interface GoogleCloudDialogflowCxV3beta1ToolOpenApiTool {
  serviceDirectoryConfig?: GoogleCloudDialogflowCxV3beta1ToolServiceDirectoryConfig;
  textSchema?: string;
  authentication?: GoogleCloudDialogflowCxV3beta1ToolAuthentication;
  tlsConfig?: GoogleCloudDialogflowCxV3beta1ToolTLSConfig;
}

export const GoogleCloudDialogflowCxV3beta1ToolOpenApiTool: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolOpenApiTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceDirectoryConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolServiceDirectoryConfig,
    ),
    textSchema: Schema.optional(Schema.String),
    authentication: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolAuthentication,
    ),
    tlsConfig: Schema.optional(GoogleCloudDialogflowCxV3beta1ToolTLSConfig),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ToolOpenApiTool" });

export interface GoogleCloudDialogflowCxV3beta1ToolExtensionTool {
  name?: string;
}

export const GoogleCloudDialogflowCxV3beta1ToolExtensionTool: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolExtensionTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ToolExtensionTool",
  });

export interface GoogleCloudDialogflowCxV3beta1Tool {
  name?: string;
  displayName?: string;
  dataStoreSpec?: GoogleCloudDialogflowCxV3beta1ToolDataStoreTool;
  openApiSpec?: GoogleCloudDialogflowCxV3beta1ToolOpenApiTool;
  toolType?:
    | "TOOL_TYPE_UNSPECIFIED"
    | "CUSTOMIZED_TOOL"
    | "BUILTIN_TOOL"
    | (string & {});
  extensionSpec?: GoogleCloudDialogflowCxV3beta1ToolExtensionTool;
  connectorSpec?: GoogleCloudDialogflowCxV3beta1ToolConnectorTool;
  description?: string;
  functionSpec?: GoogleCloudDialogflowCxV3beta1ToolFunctionTool;
}

export const GoogleCloudDialogflowCxV3beta1Tool: Schema.Schema<GoogleCloudDialogflowCxV3beta1Tool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    dataStoreSpec: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolDataStoreTool,
    ),
    openApiSpec: Schema.optional(GoogleCloudDialogflowCxV3beta1ToolOpenApiTool),
    toolType: Schema.optional(Schema.String),
    extensionSpec: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolExtensionTool,
    ),
    connectorSpec: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolConnectorTool,
    ),
    description: Schema.optional(Schema.String),
    functionSpec: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolFunctionTool,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Tool" });

export interface GoogleCloudDialogflowCxV3beta1ListToolsResponse {
  nextPageToken?: string;
  tools?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Tool>;
}

export const GoogleCloudDialogflowCxV3beta1ListToolsResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ListToolsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    tools: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3beta1Tool)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ListToolsResponse",
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

export interface GoogleCloudDialogflowCxV3beta1WebhookGenericWebService {
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
  parameterMapping?: Record<string, string>;
  oauthConfig?: GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig;
  webhookType?:
    | "WEBHOOK_TYPE_UNSPECIFIED"
    | "STANDARD"
    | "FLEXIBLE"
    | (string & {});
  password?: string;
  uri?: string;
  allowedCaCerts?: ReadonlyArray<string>;
  serviceAgentAuth?:
    | "SERVICE_AGENT_AUTH_UNSPECIFIED"
    | "NONE"
    | "ID_TOKEN"
    | "ACCESS_TOKEN"
    | (string & {});
  secretVersionsForRequestHeaders?: Record<
    string,
    GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceSecretVersionHeaderValue
  >;
  serviceAccountAuthConfig?: GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceServiceAccountAuthConfig;
  secretVersionForUsernamePassword?: string;
  requestHeaders?: Record<string, string>;
  username?: string;
  requestBody?: string;
}

export const GoogleCloudDialogflowCxV3beta1WebhookGenericWebService: Schema.Schema<GoogleCloudDialogflowCxV3beta1WebhookGenericWebService> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    httpMethod: Schema.optional(Schema.String),
    parameterMapping: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    oauthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig,
    ),
    webhookType: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    allowedCaCerts: Schema.optional(Schema.Array(Schema.String)),
    serviceAgentAuth: Schema.optional(Schema.String),
    secretVersionsForRequestHeaders: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceSecretVersionHeaderValue,
      ),
    ),
    serviceAccountAuthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceServiceAccountAuthConfig,
    ),
    secretVersionForUsernamePassword: Schema.optional(Schema.String),
    requestHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    username: Schema.optional(Schema.String),
    requestBody: Schema.optional(Schema.String),
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
  timeout?: string;
  serviceDirectory?: GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig;
  disabled?: boolean;
  name?: string;
  displayName?: string;
  genericWebService?: GoogleCloudDialogflowCxV3beta1WebhookGenericWebService;
}

export const GoogleCloudDialogflowCxV3beta1Webhook: Schema.Schema<GoogleCloudDialogflowCxV3beta1Webhook> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timeout: Schema.optional(Schema.String),
    serviceDirectory: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig,
    ),
    disabled: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    genericWebService: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookGenericWebService,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Webhook" });

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

export interface GoogleCloudDialogflowCxV3beta1Environment {
  testCasesConfig?: GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig;
  webhookConfig?: GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig;
  name?: string;
  displayName?: string;
  description?: string;
  versionConfigs?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig>;
  updateTime?: string;
}

export const GoogleCloudDialogflowCxV3beta1Environment: Schema.Schema<GoogleCloudDialogflowCxV3beta1Environment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testCasesConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig,
    ),
    webhookConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig,
    ),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    versionConfigs: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig),
    ),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Environment" });

export interface GoogleCloudDialogflowCxV3beta1DetectIntentRequest {
  outputAudioConfig?: GoogleCloudDialogflowCxV3beta1OutputAudioConfig;
  responseView?:
    | "DETECT_INTENT_RESPONSE_VIEW_UNSPECIFIED"
    | "DETECT_INTENT_RESPONSE_VIEW_FULL"
    | "DETECT_INTENT_RESPONSE_VIEW_BASIC"
    | "DETECT_INTENT_RESPONSE_VIEW_DEFAULT"
    | (string & {});
  session?: string;
  queryInput?: GoogleCloudDialogflowCxV3beta1QueryInput;
  queryParams?: GoogleCloudDialogflowCxV3beta1QueryParameters;
}

export const GoogleCloudDialogflowCxV3beta1DetectIntentRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1DetectIntentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputAudioConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1OutputAudioConfig,
    ),
    responseView: Schema.optional(Schema.String),
    session: Schema.optional(Schema.String),
    queryInput: Schema.optional(GoogleCloudDialogflowCxV3beta1QueryInput),
    queryParams: Schema.optional(GoogleCloudDialogflowCxV3beta1QueryParameters),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1DetectIntentRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1ConversationInteractionMissingTransition {
  score?: number;
  intentDisplayName?: string;
}

export const GoogleCloudDialogflowCxV3beta1ConversationInteractionMissingTransition: Schema.Schema<GoogleCloudDialogflowCxV3beta1ConversationInteractionMissingTransition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.Number),
    intentDisplayName: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ConversationInteractionMissingTransition",
  });

export interface GoogleCloudDialogflowCxV3beta1PlaybookTraceMetadata {
  playbook?: string;
  displayName?: string;
}

export const GoogleCloudDialogflowCxV3beta1PlaybookTraceMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1PlaybookTraceMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    playbook: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1PlaybookTraceMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1FlowTraceMetadata {
  flow?: string;
  displayName?: string;
}

export const GoogleCloudDialogflowCxV3beta1FlowTraceMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1FlowTraceMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flow: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1FlowTraceMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1TraceBlock {
  playbookTraceMetadata?: GoogleCloudDialogflowCxV3beta1PlaybookTraceMetadata;
  speechProcessingMetadata?: GoogleCloudDialogflowCxV3beta1SpeechProcessingMetadata;
  actions?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Action>;
  endState?:
    | "OUTPUT_STATE_UNSPECIFIED"
    | "OUTPUT_STATE_OK"
    | "OUTPUT_STATE_CANCELLED"
    | "OUTPUT_STATE_FAILED"
    | "OUTPUT_STATE_ESCALATED"
    | "OUTPUT_STATE_PENDING"
    | (string & {});
  flowTraceMetadata?: GoogleCloudDialogflowCxV3beta1FlowTraceMetadata;
  outputParameters?: Record<string, unknown>;
  completeTime?: string;
  inputParameters?: Record<string, unknown>;
  startTime?: string;
}

export const GoogleCloudDialogflowCxV3beta1TraceBlock: Schema.Schema<GoogleCloudDialogflowCxV3beta1TraceBlock> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    playbookTraceMetadata: Schema.optional(
      GoogleCloudDialogflowCxV3beta1PlaybookTraceMetadata,
    ),
    speechProcessingMetadata: Schema.optional(
      GoogleCloudDialogflowCxV3beta1SpeechProcessingMetadata,
    ),
    actions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1Action),
    ),
    endState: Schema.optional(Schema.String),
    flowTraceMetadata: Schema.optional(
      GoogleCloudDialogflowCxV3beta1FlowTraceMetadata,
    ),
    outputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    completeTime: Schema.optional(Schema.String),
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TraceBlock" });

export interface GoogleCloudDialogflowCxV3beta1SentimentAnalysisResult {
  score?: number;
  magnitude?: number;
}

export const GoogleCloudDialogflowCxV3beta1SentimentAnalysisResult: Schema.Schema<GoogleCloudDialogflowCxV3beta1SentimentAnalysisResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.Number),
    magnitude: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1SentimentAnalysisResult",
  });

export interface GoogleCloudDialogflowCxV3beta1QueryResult {
  webhookTags?: ReadonlyArray<string>;
  webhookLatencies?: ReadonlyArray<string>;
  dtmf?: GoogleCloudDialogflowCxV3beta1DtmfInput;
  traceBlocks?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TraceBlock>;
  triggerIntent?: string;
  intent?: GoogleCloudDialogflowCxV3beta1Intent;
  generativeInfo?: GoogleCloudDialogflowCxV3beta1GenerativeInfo;
  responseMessages?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ResponseMessage>;
  match?: GoogleCloudDialogflowCxV3beta1Match;
  currentFlow?: GoogleCloudDialogflowCxV3beta1Flow;
  languageCode?: string;
  webhookStatuses?: ReadonlyArray<GoogleRpcStatus>;
  currentPage?: GoogleCloudDialogflowCxV3beta1Page;
  parameters?: Record<string, unknown>;
  sentimentAnalysisResult?: GoogleCloudDialogflowCxV3beta1SentimentAnalysisResult;
  dataStoreConnectionSignals?: GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignals;
  webhookPayloads?: ReadonlyArray<Record<string, unknown>>;
  webhookDisplayNames?: ReadonlyArray<string>;
  allowAnswerFeedback?: boolean;
  text?: string;
  webhookIds?: ReadonlyArray<string>;
  advancedSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettings;
  intentDetectionConfidence?: number;
  diagnosticInfo?: Record<string, unknown>;
  triggerEvent?: string;
  transcript?: string;
}

export const GoogleCloudDialogflowCxV3beta1QueryResult: Schema.Schema<GoogleCloudDialogflowCxV3beta1QueryResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webhookTags: Schema.optional(Schema.Array(Schema.String)),
    webhookLatencies: Schema.optional(Schema.Array(Schema.String)),
    dtmf: Schema.optional(GoogleCloudDialogflowCxV3beta1DtmfInput),
    traceBlocks: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TraceBlock),
    ),
    triggerIntent: Schema.optional(Schema.String),
    intent: Schema.optional(GoogleCloudDialogflowCxV3beta1Intent),
    generativeInfo: Schema.optional(
      GoogleCloudDialogflowCxV3beta1GenerativeInfo,
    ),
    responseMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ResponseMessage),
    ),
    match: Schema.optional(GoogleCloudDialogflowCxV3beta1Match),
    currentFlow: Schema.optional(GoogleCloudDialogflowCxV3beta1Flow),
    languageCode: Schema.optional(Schema.String),
    webhookStatuses: Schema.optional(Schema.Array(GoogleRpcStatus)),
    currentPage: Schema.optional(GoogleCloudDialogflowCxV3beta1Page),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    sentimentAnalysisResult: Schema.optional(
      GoogleCloudDialogflowCxV3beta1SentimentAnalysisResult,
    ),
    dataStoreConnectionSignals: Schema.optional(
      GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignals,
    ),
    webhookPayloads: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    webhookDisplayNames: Schema.optional(Schema.Array(Schema.String)),
    allowAnswerFeedback: Schema.optional(Schema.Boolean),
    text: Schema.optional(Schema.String),
    webhookIds: Schema.optional(Schema.Array(Schema.String)),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettings,
    ),
    intentDetectionConfidence: Schema.optional(Schema.Number),
    diagnosticInfo: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    triggerEvent: Schema.optional(Schema.String),
    transcript: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1QueryResult" });

export interface GoogleCloudDialogflowCxV3beta1DetectIntentResponse {
  outputAudioConfig?: GoogleCloudDialogflowCxV3beta1OutputAudioConfig;
  queryResult?: GoogleCloudDialogflowCxV3beta1QueryResult;
  responseId?: string;
  outputAudio?: string;
  responseType?:
    | "RESPONSE_TYPE_UNSPECIFIED"
    | "PARTIAL"
    | "FINAL"
    | (string & {});
  allowCancellation?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1DetectIntentResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1DetectIntentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputAudioConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1OutputAudioConfig,
    ),
    queryResult: Schema.optional(GoogleCloudDialogflowCxV3beta1QueryResult),
    responseId: Schema.optional(Schema.String),
    outputAudio: Schema.optional(Schema.String),
    responseType: Schema.optional(Schema.String),
    allowCancellation: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1DetectIntentResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1ConversationInteraction {
  requestUtterances?: string;
  stepMetrics?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ConversationInteractionStepMetrics>;
  request?: GoogleCloudDialogflowCxV3beta1DetectIntentRequest;
  responseUtterances?: string;
  missingTransition?: GoogleCloudDialogflowCxV3beta1ConversationInteractionMissingTransition;
  partialResponses?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1DetectIntentResponse>;
  createTime?: string;
  response?: GoogleCloudDialogflowCxV3beta1DetectIntentResponse;
  answerFeedback?: GoogleCloudDialogflowCxV3beta1AnswerFeedback;
}

export const GoogleCloudDialogflowCxV3beta1ConversationInteraction: Schema.Schema<GoogleCloudDialogflowCxV3beta1ConversationInteraction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestUtterances: Schema.optional(Schema.String),
    stepMetrics: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowCxV3beta1ConversationInteractionStepMetrics,
      ),
    ),
    request: Schema.optional(GoogleCloudDialogflowCxV3beta1DetectIntentRequest),
    responseUtterances: Schema.optional(Schema.String),
    missingTransition: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ConversationInteractionMissingTransition,
    ),
    partialResponses: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1DetectIntentResponse),
    ),
    createTime: Schema.optional(Schema.String),
    response: Schema.optional(
      GoogleCloudDialogflowCxV3beta1DetectIntentResponse,
    ),
    answerFeedback: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AnswerFeedback,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ConversationInteraction",
  });

export interface GoogleCloudDialogflowCxV3beta1ConversationMetricsMatchTypeCount {
  parameterFillingCount?: number;
  noMatchCount?: number;
  unspecifiedCount?: number;
  noInputCount?: number;
  intentCount?: number;
  eventCount?: number;
  directIntentCount?: number;
}

export const GoogleCloudDialogflowCxV3beta1ConversationMetricsMatchTypeCount: Schema.Schema<GoogleCloudDialogflowCxV3beta1ConversationMetricsMatchTypeCount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameterFillingCount: Schema.optional(Schema.Number),
    noMatchCount: Schema.optional(Schema.Number),
    unspecifiedCount: Schema.optional(Schema.Number),
    noInputCount: Schema.optional(Schema.Number),
    intentCount: Schema.optional(Schema.Number),
    eventCount: Schema.optional(Schema.Number),
    directIntentCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ConversationMetricsMatchTypeCount",
  });

export interface GoogleCloudDialogflowCxV3beta1ConversationMetricsQueryInputCount {
  textCount?: number;
  dtmfCount?: number;
  audioCount?: number;
  intentCount?: number;
  eventCount?: number;
}

export const GoogleCloudDialogflowCxV3beta1ConversationMetricsQueryInputCount: Schema.Schema<GoogleCloudDialogflowCxV3beta1ConversationMetricsQueryInputCount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    textCount: Schema.optional(Schema.Number),
    dtmfCount: Schema.optional(Schema.Number),
    audioCount: Schema.optional(Schema.Number),
    intentCount: Schema.optional(Schema.Number),
    eventCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ConversationMetricsQueryInputCount",
  });

export interface GoogleCloudDialogflowCxV3beta1ConversationMetrics {
  hasLiveAgentHandoff?: boolean;
  outputAudioDuration?: string;
  maxWebhookLatency?: string;
  hasEndInteraction?: boolean;
  interactionCount?: number;
  matchTypeCount?: GoogleCloudDialogflowCxV3beta1ConversationMetricsMatchTypeCount;
  inputAudioDuration?: string;
  averageMatchConfidence?: number;
  queryInputCount?: GoogleCloudDialogflowCxV3beta1ConversationMetricsQueryInputCount;
}

export const GoogleCloudDialogflowCxV3beta1ConversationMetrics: Schema.Schema<GoogleCloudDialogflowCxV3beta1ConversationMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hasLiveAgentHandoff: Schema.optional(Schema.Boolean),
    outputAudioDuration: Schema.optional(Schema.String),
    maxWebhookLatency: Schema.optional(Schema.String),
    hasEndInteraction: Schema.optional(Schema.Boolean),
    interactionCount: Schema.optional(Schema.Number),
    matchTypeCount: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ConversationMetricsMatchTypeCount,
    ),
    inputAudioDuration: Schema.optional(Schema.String),
    averageMatchConfidence: Schema.optional(Schema.Number),
    queryInputCount: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ConversationMetricsQueryInputCount,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ConversationMetrics",
  });

export interface GoogleCloudDialogflowCxV3beta1Conversation {
  duration?: string;
  flows?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Flow>;
  name?: string;
  environment?: GoogleCloudDialogflowCxV3beta1Environment;
  type?: "TYPE_UNSPECIFIED" | "AUDIO" | "TEXT" | "UNDETERMINED" | (string & {});
  intents?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Intent>;
  startTime?: string;
  languageCode?: string;
  flowVersions?: Record<string, string>;
  interactions?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ConversationInteraction>;
  metrics?: GoogleCloudDialogflowCxV3beta1ConversationMetrics;
  pages?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Page>;
}

export const GoogleCloudDialogflowCxV3beta1Conversation: Schema.Schema<GoogleCloudDialogflowCxV3beta1Conversation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    duration: Schema.optional(Schema.String),
    flows: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3beta1Flow)),
    name: Schema.optional(Schema.String),
    environment: Schema.optional(GoogleCloudDialogflowCxV3beta1Environment),
    type: Schema.optional(Schema.String),
    intents: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1Intent),
    ),
    startTime: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    flowVersions: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    interactions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ConversationInteraction),
    ),
    metrics: Schema.optional(GoogleCloudDialogflowCxV3beta1ConversationMetrics),
    pages: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3beta1Page)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Conversation" });

export interface GoogleCloudDialogflowCxV3beta1RestoreToolVersionResponse {
  tool?: GoogleCloudDialogflowCxV3beta1Tool;
}

export const GoogleCloudDialogflowCxV3beta1RestoreToolVersionResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1RestoreToolVersionResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tool: Schema.optional(GoogleCloudDialogflowCxV3beta1Tool),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RestoreToolVersionResponse",
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

export interface GoogleCloudDialogflowV2beta1EventInput {
  parameters?: Record<string, unknown>;
  languageCode?: string;
  name?: string;
}

export const GoogleCloudDialogflowV2beta1EventInput: Schema.Schema<GoogleCloudDialogflowV2beta1EventInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    languageCode: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1EventInput" });

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

export interface GoogleCloudDialogflowV2beta1WebhookResponse {
  payload?: Record<string, unknown>;
  followupEventInput?: GoogleCloudDialogflowV2beta1EventInput;
  endInteraction?: boolean;
  liveAgentHandoff?: boolean;
  source?: string;
  sessionEntityTypes?: ReadonlyArray<GoogleCloudDialogflowV2beta1SessionEntityType>;
  fulfillmentText?: string;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2beta1Context>;
  fulfillmentMessages?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessage>;
}

export const GoogleCloudDialogflowV2beta1WebhookResponse: Schema.Schema<GoogleCloudDialogflowV2beta1WebhookResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    followupEventInput: Schema.optional(GoogleCloudDialogflowV2beta1EventInput),
    endInteraction: Schema.optional(Schema.Boolean),
    liveAgentHandoff: Schema.optional(Schema.Boolean),
    source: Schema.optional(Schema.String),
    sessionEntityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SessionEntityType),
    ),
    fulfillmentText: Schema.optional(Schema.String),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1Context),
    ),
    fulfillmentMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessage),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1WebhookResponse" });

export interface GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo {
  justCollected?: boolean;
  required?: boolean;
  value?: unknown;
  displayName?: string;
  state?:
    | "PARAMETER_STATE_UNSPECIFIED"
    | "EMPTY"
    | "INVALID"
    | "FILLED"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo: Schema.Schema<GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    justCollected: Schema.optional(Schema.Boolean),
    required: Schema.optional(Schema.Boolean),
    value: Schema.optional(Schema.Unknown),
    displayName: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings {
  audioExportPattern?: string;
  enableAudioRedaction?: boolean;
  gcsBucket?: string;
  storeTtsAudio?: boolean;
  audioFormat?:
    | "AUDIO_FORMAT_UNSPECIFIED"
    | "MULAW"
    | "MP3"
    | "OGG"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audioExportPattern: Schema.optional(Schema.String),
    enableAudioRedaction: Schema.optional(Schema.Boolean),
    gcsBucket: Schema.optional(Schema.String),
    storeTtsAudio: Schema.optional(Schema.Boolean),
    audioFormat: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings",
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

export interface GoogleCloudDialogflowCxV3ImportIntentsMetadata {}

export const GoogleCloudDialogflowCxV3ImportIntentsMetadata: Schema.Schema<GoogleCloudDialogflowCxV3ImportIntentsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ImportIntentsMetadata",
  });

export interface GoogleCloudDialogflowV2CreateConversationModelEvaluationOperationMetadata {
  createTime?: string;
  state?:
    | "STATE_UNSPECIFIED"
    | "INITIALIZING"
    | "RUNNING"
    | "CANCELLED"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
  conversationModel?: string;
  conversationModelEvaluation?: string;
}

export const GoogleCloudDialogflowV2CreateConversationModelEvaluationOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2CreateConversationModelEvaluationOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    conversationModel: Schema.optional(Schema.String),
    conversationModelEvaluation: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2CreateConversationModelEvaluationOperationMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1Phrase {
  text?: string;
}

export const GoogleCloudDialogflowCxV3beta1Phrase: Schema.Schema<GoogleCloudDialogflowCxV3beta1Phrase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Phrase" });

export interface GoogleCloudDialogflowCxV3beta1GeneratorPlaceholder {
  name?: string;
  id?: string;
}

export const GoogleCloudDialogflowCxV3beta1GeneratorPlaceholder: Schema.Schema<GoogleCloudDialogflowCxV3beta1GeneratorPlaceholder> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1GeneratorPlaceholder",
  });

export interface GoogleCloudDialogflowCxV3beta1GeneratorModelParameter {
  maxDecodeSteps?: number;
  topP?: number;
  temperature?: number;
  topK?: number;
}

export const GoogleCloudDialogflowCxV3beta1GeneratorModelParameter: Schema.Schema<GoogleCloudDialogflowCxV3beta1GeneratorModelParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxDecodeSteps: Schema.optional(Schema.Number),
    topP: Schema.optional(Schema.Number),
    temperature: Schema.optional(Schema.Number),
    topK: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1GeneratorModelParameter",
  });

export interface GoogleCloudDialogflowCxV3beta1Generator {
  name?: string;
  displayName?: string;
  llmModelSettings?: GoogleCloudDialogflowCxV3beta1LlmModelSettings;
  promptText?: GoogleCloudDialogflowCxV3beta1Phrase;
  placeholders?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1GeneratorPlaceholder>;
  modelParameter?: GoogleCloudDialogflowCxV3beta1GeneratorModelParameter;
}

export const GoogleCloudDialogflowCxV3beta1Generator: Schema.Schema<GoogleCloudDialogflowCxV3beta1Generator> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    llmModelSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1LlmModelSettings,
    ),
    promptText: Schema.optional(GoogleCloudDialogflowCxV3beta1Phrase),
    placeholders: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1GeneratorPlaceholder),
    ),
    modelParameter: Schema.optional(
      GoogleCloudDialogflowCxV3beta1GeneratorModelParameter,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Generator" });

export interface GoogleCloudDialogflowCxV3beta1ListGeneratorsResponse {
  generators?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Generator>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3beta1ListGeneratorsResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ListGeneratorsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generators: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1Generator),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ListGeneratorsResponse",
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

export interface GoogleCloudDialogflowCxV3beta1BatchDeleteTestCasesRequest {
  names?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1BatchDeleteTestCasesRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1BatchDeleteTestCasesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1BatchDeleteTestCasesRequest",
  });

export interface GoogleCloudDialogflowV2beta1ConversationEvent {
  errorStatus?: GoogleRpcStatus;
  conversation?: string;
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
}

export const GoogleCloudDialogflowV2beta1ConversationEvent: Schema.Schema<GoogleCloudDialogflowV2beta1ConversationEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorStatus: Schema.optional(GoogleRpcStatus),
    conversation: Schema.optional(Schema.String),
    newMessagePayload: Schema.optional(GoogleCloudDialogflowV2beta1Message),
    type: Schema.optional(Schema.String),
    newRecognitionResultPayload: Schema.optional(
      GoogleCloudDialogflowV2beta1StreamingRecognitionResult,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ConversationEvent" });

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

export interface GoogleCloudDialogflowCxV3beta1ExportPlaybookRequest {
  playbookUri?: string;
  dataFormat?: "DATA_FORMAT_UNSPECIFIED" | "BLOB" | "JSON" | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1ExportPlaybookRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportPlaybookRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    playbookUri: Schema.optional(Schema.String),
    dataFormat: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportPlaybookRequest",
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

export interface GoogleCloudDialogflowCxV3beta1ExportEntityTypesRequest {
  entityTypes?: ReadonlyArray<string>;
  dataFormat?:
    | "DATA_FORMAT_UNSPECIFIED"
    | "BLOB"
    | "JSON_PACKAGE"
    | (string & {});
  languageCode?: string;
  entityTypesUri?: string;
  entityTypesContentInline?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1ExportEntityTypesRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportEntityTypesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypes: Schema.optional(Schema.Array(Schema.String)),
    dataFormat: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    entityTypesUri: Schema.optional(Schema.String),
    entityTypesContentInline: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportEntityTypesRequest",
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

export interface GoogleCloudDialogflowCxV3beta1GenerativeSettingsKnowledgeConnectorSettings {
  agent?: string;
  agentScope?: string;
  business?: string;
  disableDataStoreFallback?: boolean;
  agentIdentity?: string;
  businessDescription?: string;
}

export const GoogleCloudDialogflowCxV3beta1GenerativeSettingsKnowledgeConnectorSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1GenerativeSettingsKnowledgeConnectorSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agent: Schema.optional(Schema.String),
    agentScope: Schema.optional(Schema.String),
    business: Schema.optional(Schema.String),
    disableDataStoreFallback: Schema.optional(Schema.Boolean),
    agentIdentity: Schema.optional(Schema.String),
    businessDescription: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1GenerativeSettingsKnowledgeConnectorSettings",
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

export interface GoogleCloudDialogflowCxV3beta1EntityTypeExcludedPhrase {
  value?: string;
}

export const GoogleCloudDialogflowCxV3beta1EntityTypeExcludedPhrase: Schema.Schema<GoogleCloudDialogflowCxV3beta1EntityTypeExcludedPhrase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1EntityTypeExcludedPhrase",
  });

export interface GoogleCloudDialogflowCxV3beta1MatchIntentResponse {
  text?: string;
  matches?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Match>;
  currentPage?: GoogleCloudDialogflowCxV3beta1Page;
  triggerIntent?: string;
  triggerEvent?: string;
  transcript?: string;
}

export const GoogleCloudDialogflowCxV3beta1MatchIntentResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1MatchIntentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    matches: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3beta1Match)),
    currentPage: Schema.optional(GoogleCloudDialogflowCxV3beta1Page),
    triggerIntent: Schema.optional(Schema.String),
    triggerEvent: Schema.optional(Schema.String),
    transcript: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1MatchIntentResponse",
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

export interface GoogleCloudDialogflowCxV3beta1InlineSource {
  content?: string;
}

export const GoogleCloudDialogflowCxV3beta1InlineSource: Schema.Schema<GoogleCloudDialogflowCxV3beta1InlineSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1InlineSource" });

export interface GoogleCloudDialogflowCxV3beta1ImportIntentsRequest {
  intentsContent?: GoogleCloudDialogflowCxV3beta1InlineSource;
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

export const GoogleCloudDialogflowCxV3beta1ImportIntentsRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportIntentsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intentsContent: Schema.optional(GoogleCloudDialogflowCxV3beta1InlineSource),
    intentsUri: Schema.optional(Schema.String),
    mergeOption: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportIntentsRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1Version {
  nluSettings?: GoogleCloudDialogflowCxV3beta1NluSettings;
  createTime?: string;
  description?: string;
  name?: string;
  displayName?: string;
  state?:
    | "STATE_UNSPECIFIED"
    | "RUNNING"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1Version: Schema.Schema<GoogleCloudDialogflowCxV3beta1Version> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nluSettings: Schema.optional(GoogleCloudDialogflowCxV3beta1NluSettings),
    createTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Version" });

export interface GoogleCloudDialogflowCxV3beta1ListVersionsResponse {
  versions?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Version>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3beta1ListVersionsResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ListVersionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1Version),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ListVersionsResponse",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerAdditionalSuggestedQueryResult {
  suggestedQuery?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuery;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerAdditionalSuggestedQueryResult: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerAdditionalSuggestedQueryResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suggestedQuery: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuery,
    ),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerAdditionalSuggestedQueryResult",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswer {
  eventSource?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerEventSource;
  generativeSource?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource;
  playbookSource?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource;
  answerText?: string;
  faqSource?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerFaqSource;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswer: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventSource: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerEventSource,
    ),
    generativeSource: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource,
    ),
    playbookSource: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource,
    ),
    answerText: Schema.optional(Schema.String),
    faqSource: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerFaqSource,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswer",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior {
  appendedSearchContextCount?: number;
  endUserMetadataIncluded?: boolean;
  useTranslatedMessage?: boolean;
  thirdPartyConnectorAllowed?: boolean;
  queryContainedSearchContext?: boolean;
  answerGenerationRewriterOn?: boolean;
  useCustomSafetyFilterLevel?: boolean;
  queryGenerationAgentLanguageMismatch?: boolean;
  invalidItemsQuerySuggestionSkipped?: boolean;
  usePubsubDelivery?: boolean;
  queryGenerationEndUserLanguageMismatch?: boolean;
  conversationTranscriptHasMixedLanguages?: boolean;
  disableSyncDelivery?: boolean;
  returnQueryOnly?: boolean;
  previousQueriesIncluded?: boolean;
  primaryQueryRedactedAndReplaced?: boolean;
  multipleQueriesGenerated?: boolean;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appendedSearchContextCount: Schema.optional(Schema.Number),
    endUserMetadataIncluded: Schema.optional(Schema.Boolean),
    useTranslatedMessage: Schema.optional(Schema.Boolean),
    thirdPartyConnectorAllowed: Schema.optional(Schema.Boolean),
    queryContainedSearchContext: Schema.optional(Schema.Boolean),
    answerGenerationRewriterOn: Schema.optional(Schema.Boolean),
    useCustomSafetyFilterLevel: Schema.optional(Schema.Boolean),
    queryGenerationAgentLanguageMismatch: Schema.optional(Schema.Boolean),
    invalidItemsQuerySuggestionSkipped: Schema.optional(Schema.Boolean),
    usePubsubDelivery: Schema.optional(Schema.Boolean),
    queryGenerationEndUserLanguageMismatch: Schema.optional(Schema.Boolean),
    conversationTranscriptHasMixedLanguages: Schema.optional(Schema.Boolean),
    disableSyncDelivery: Schema.optional(Schema.Boolean),
    returnQueryOnly: Schema.optional(Schema.Boolean),
    previousQueriesIncluded: Schema.optional(Schema.Boolean),
    primaryQueryRedactedAndReplaced: Schema.optional(Schema.Boolean),
    multipleQueriesGenerated: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoQueryGenerationDebugInfo {
  candidatesTokenCount?: number;
  promptTokenCount?: number;
  totalTokenCount?: number;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoQueryGenerationDebugInfo: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoQueryGenerationDebugInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    candidatesTokenCount: Schema.optional(Schema.Number),
    promptTokenCount: Schema.optional(Schema.Number),
    totalTokenCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoQueryGenerationDebugInfo",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfo {
  serviceLatency?: GoogleCloudDialogflowV2beta1ServiceLatency;
  knowledgeAssistBehavior?: GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior;
  queryGenerationDebugInfo?: GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoQueryGenerationDebugInfo;
  cesDebugInfo?: Record<string, unknown>;
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
  queryCategorizationFailureReason?:
    | "QUERY_CATEGORIZATION_FAILURE_REASON_UNSPECIFIED"
    | "QUERY_CATEGORIZATION_INVALID_CONFIG"
    | "QUERY_CATEGORIZATION_RESULT_NOT_FOUND"
    | "QUERY_CATEGORIZATION_FAILED"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfo: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceLatency: Schema.optional(GoogleCloudDialogflowV2beta1ServiceLatency),
    knowledgeAssistBehavior: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior,
    ),
    queryGenerationDebugInfo: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoQueryGenerationDebugInfo,
    ),
    cesDebugInfo: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    queryGenerationFailureReason: Schema.optional(Schema.String),
    datastoreResponseReason: Schema.optional(Schema.String),
    ingestedContextReferenceDebugInfo: Schema.optional(
      GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfo,
    ),
    queryCategorizationFailureReason: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfo",
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

export interface GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse {
  additionalSuggestedQueryResults?: ReadonlyArray<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerAdditionalSuggestedQueryResult>;
  contextSize?: number;
  knowledgeAssistAnswer?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswer;
  latestMessage?: string;
}

export const GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    additionalSuggestedQueryResults: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerAdditionalSuggestedQueryResult,
      ),
    ),
    contextSize: Schema.optional(Schema.Number),
    knowledgeAssistAnswer: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswer,
    ),
    latestMessage: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1ListWebhooksResponse {
  webhooks?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Webhook>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3beta1ListWebhooksResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ListWebhooksResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webhooks: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1Webhook),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ListWebhooksResponse",
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

export interface GoogleCloudDialogflowCxV3beta1RestorePlaybookVersionResponse {
  playbook?: GoogleCloudDialogflowCxV3beta1Playbook;
}

export const GoogleCloudDialogflowCxV3beta1RestorePlaybookVersionResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1RestorePlaybookVersionResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    playbook: Schema.optional(GoogleCloudDialogflowCxV3beta1Playbook),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RestorePlaybookVersionResponse",
  });

export interface GoogleCloudDialogflowCxV3ImportFlowResponse {
  flow?: string;
}

export const GoogleCloudDialogflowCxV3ImportFlowResponse: Schema.Schema<GoogleCloudDialogflowCxV3ImportFlowResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flow: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ImportFlowResponse" });

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

export interface GoogleCloudDialogflowCxV3beta1ImportIntentsMetadata {}

export const GoogleCloudDialogflowCxV3beta1ImportIntentsMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportIntentsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportIntentsMetadata",
  });

export interface GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse {
  latestMessage?: string;
  contextSize?: number;
  smartReplyAnswers?: ReadonlyArray<GoogleCloudDialogflowV2beta1SmartReplyAnswer>;
}

export const GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
    smartReplyAnswers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SmartReplyAnswer),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse",
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

export interface GoogleCloudDialogflowV2beta1FaqAnswer {
  answer?: string;
  confidence?: number;
  metadata?: Record<string, string>;
  source?: string;
  answerRecord?: string;
  question?: string;
}

export const GoogleCloudDialogflowV2beta1FaqAnswer: Schema.Schema<GoogleCloudDialogflowV2beta1FaqAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answer: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    source: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    question: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1FaqAnswer" });

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

export interface GoogleCloudDialogflowCxV3beta1RunContinuousTestRequest {}

export const GoogleCloudDialogflowCxV3beta1RunContinuousTestRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1RunContinuousTestRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RunContinuousTestRequest",
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

export interface GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse {
  latestMessage?: string;
  faqAnswers?: ReadonlyArray<GoogleCloudDialogflowV2beta1FaqAnswer>;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestMessage: Schema.optional(Schema.String),
    faqAnswers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1FaqAnswer),
    ),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse",
  });

export interface GoogleCloudDialogflowV2beta1SuggestArticlesResponse {
  articleAnswers?: ReadonlyArray<GoogleCloudDialogflowV2beta1ArticleAnswer>;
  contextSize?: number;
  latestMessage?: string;
}

export const GoogleCloudDialogflowV2beta1SuggestArticlesResponse: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestArticlesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    articleAnswers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1ArticleAnswer),
    ),
    contextSize: Schema.optional(Schema.Number),
    latestMessage: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestArticlesResponse",
  });

export interface GoogleCloudDialogflowV2beta1SuggestionResult {
  suggestDialogflowAssistsResponse?: GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse;
  generateSuggestionsResponse?: GoogleCloudDialogflowV2beta1GenerateSuggestionsResponse;
  suggestKnowledgeAssistResponse?: GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse;
  suggestEntityExtractionResponse?: GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse;
  suggestFaqAnswersResponse?: GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse;
  suggestSmartRepliesResponse?: GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse;
  error?: GoogleRpcStatus;
  suggestArticlesResponse?: GoogleCloudDialogflowV2beta1SuggestArticlesResponse;
}

export const GoogleCloudDialogflowV2beta1SuggestionResult: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestionResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suggestDialogflowAssistsResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse,
    ),
    generateSuggestionsResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1GenerateSuggestionsResponse,
    ),
    suggestKnowledgeAssistResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse,
    ),
    suggestEntityExtractionResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse,
    ),
    suggestFaqAnswersResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse,
    ),
    suggestSmartRepliesResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse,
    ),
    error: Schema.optional(GoogleRpcStatus),
    suggestArticlesResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestArticlesResponse,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1SuggestionResult" });

export interface GoogleCloudDialogflowCxV3SessionInfo {
  session?: string;
  parameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3SessionInfo: Schema.Schema<GoogleCloudDialogflowCxV3SessionInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3SessionInfo" });

export interface GoogleCloudDialogflowCxV3CreateVersionOperationMetadata {
  version?: string;
}

export const GoogleCloudDialogflowCxV3CreateVersionOperationMetadata: Schema.Schema<GoogleCloudDialogflowCxV3CreateVersionOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3CreateVersionOperationMetadata",
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

export interface GoogleCloudDialogflowCxV3WebhookResponse {
  targetFlow?: string;
  fulfillmentResponse?: GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponse;
  pageInfo?: GoogleCloudDialogflowCxV3PageInfo;
  payload?: Record<string, unknown>;
  targetPage?: string;
  sessionInfo?: GoogleCloudDialogflowCxV3SessionInfo;
}

export const GoogleCloudDialogflowCxV3WebhookResponse: Schema.Schema<GoogleCloudDialogflowCxV3WebhookResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetFlow: Schema.optional(Schema.String),
    fulfillmentResponse: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponse,
    ),
    pageInfo: Schema.optional(GoogleCloudDialogflowCxV3PageInfo),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    targetPage: Schema.optional(Schema.String),
    sessionInfo: Schema.optional(GoogleCloudDialogflowCxV3SessionInfo),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3WebhookResponse" });

export interface GoogleCloudDialogflowV3alpha1TurnSignals {
  dtmfUsed?: boolean;
  webhookStatuses?: ReadonlyArray<string>;
  noMatch?: boolean;
  sentimentScore?: number;
  agentEscalated?: boolean;
  reachedEndPage?: boolean;
  sentimentMagnitude?: number;
  triggeredAbandonmentEvent?: boolean;
  failureReasons?: ReadonlyArray<
    | "FAILURE_REASON_UNSPECIFIED"
    | "FAILED_INTENT"
    | "FAILED_WEBHOOK"
    | (string & {})
  >;
  userEscalated?: boolean;
  noUserInput?: boolean;
}

export const GoogleCloudDialogflowV3alpha1TurnSignals: Schema.Schema<GoogleCloudDialogflowV3alpha1TurnSignals> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dtmfUsed: Schema.optional(Schema.Boolean),
    webhookStatuses: Schema.optional(Schema.Array(Schema.String)),
    noMatch: Schema.optional(Schema.Boolean),
    sentimentScore: Schema.optional(Schema.Number),
    agentEscalated: Schema.optional(Schema.Boolean),
    reachedEndPage: Schema.optional(Schema.Boolean),
    sentimentMagnitude: Schema.optional(Schema.Number),
    triggeredAbandonmentEvent: Schema.optional(Schema.Boolean),
    failureReasons: Schema.optional(Schema.Array(Schema.String)),
    userEscalated: Schema.optional(Schema.Boolean),
    noUserInput: Schema.optional(Schema.Boolean),
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

export interface GoogleCloudDialogflowCxV3beta1LoadVersionRequest {
  allowOverrideAgentResources?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1LoadVersionRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1LoadVersionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowOverrideAgentResources: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1LoadVersionRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1TrainFlowRequest {}

export const GoogleCloudDialogflowCxV3beta1TrainFlowRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1TrainFlowRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1TrainFlowRequest",
  });

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

export interface GoogleCloudDialogflowCxV3beta1PlaybookImportStrategy {
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

export const GoogleCloudDialogflowCxV3beta1PlaybookImportStrategy: Schema.Schema<GoogleCloudDialogflowCxV3beta1PlaybookImportStrategy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mainPlaybookImportStrategy: Schema.optional(Schema.String),
    nestedResourceImportStrategy: Schema.optional(Schema.String),
    toolImportStrategy: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1PlaybookImportStrategy",
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

export interface GoogleCloudDialogflowCxV3beta1StopExperimentRequest {}

export const GoogleCloudDialogflowCxV3beta1StopExperimentRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1StopExperimentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1StopExperimentRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1PlaybookVersion {
  playbook?: GoogleCloudDialogflowCxV3beta1Playbook;
  updateTime?: string;
  description?: string;
  examples?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Example>;
  name?: string;
}

export const GoogleCloudDialogflowCxV3beta1PlaybookVersion: Schema.Schema<GoogleCloudDialogflowCxV3beta1PlaybookVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    playbook: Schema.optional(GoogleCloudDialogflowCxV3beta1Playbook),
    updateTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    examples: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1Example),
    ),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1PlaybookVersion" });

export interface GoogleCloudDialogflowCxV3beta1ImportPlaybookRequest {
  playbookContent?: string;
  playbookUri?: string;
  importStrategy?: GoogleCloudDialogflowCxV3beta1PlaybookImportStrategy;
}

export const GoogleCloudDialogflowCxV3beta1ImportPlaybookRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportPlaybookRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    playbookContent: Schema.optional(Schema.String),
    playbookUri: Schema.optional(Schema.String),
    importStrategy: Schema.optional(
      GoogleCloudDialogflowCxV3beta1PlaybookImportStrategy,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportPlaybookRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequest {
  environment?: string;
  testCases?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    environment: Schema.optional(Schema.String),
    testCases: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequest",
  });

export interface GoogleCloudDialogflowV2EntityType {
  kind?:
    | "KIND_UNSPECIFIED"
    | "KIND_MAP"
    | "KIND_LIST"
    | "KIND_REGEXP"
    | (string & {});
  autoExpansionMode?:
    | "AUTO_EXPANSION_MODE_UNSPECIFIED"
    | "AUTO_EXPANSION_MODE_DEFAULT"
    | (string & {});
  entities?: ReadonlyArray<GoogleCloudDialogflowV2EntityTypeEntity>;
  name?: string;
  displayName?: string;
  enableFuzzyExtraction?: boolean;
}

export const GoogleCloudDialogflowV2EntityType: Schema.Schema<GoogleCloudDialogflowV2EntityType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    autoExpansionMode: Schema.optional(Schema.String),
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2EntityTypeEntity),
    ),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    enableFuzzyExtraction: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2EntityType" });

export interface GoogleCloudDialogflowCxV3beta1ListConversationsResponse {
  conversations?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Conversation>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3beta1ListConversationsResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ListConversationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversations: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1Conversation),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ListConversationsResponse",
  });

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

export interface GoogleCloudDialogflowCxV3WebhookRequest {
  text?: string;
  intentInfo?: GoogleCloudDialogflowCxV3WebhookRequestIntentInfo;
  sessionInfo?: GoogleCloudDialogflowCxV3SessionInfo;
  detectIntentResponseId?: string;
  payload?: Record<string, unknown>;
  fulfillmentInfo?: GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo;
  pageInfo?: GoogleCloudDialogflowCxV3PageInfo;
  triggerEvent?: string;
  transcript?: string;
  languageCode?: string;
  languageInfo?: GoogleCloudDialogflowCxV3LanguageInfo;
  dtmfDigits?: string;
  sentimentAnalysisResult?: GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult;
  messages?: ReadonlyArray<GoogleCloudDialogflowCxV3ResponseMessage>;
  triggerIntent?: string;
}

export const GoogleCloudDialogflowCxV3WebhookRequest: Schema.Schema<GoogleCloudDialogflowCxV3WebhookRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    intentInfo: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookRequestIntentInfo,
    ),
    sessionInfo: Schema.optional(GoogleCloudDialogflowCxV3SessionInfo),
    detectIntentResponseId: Schema.optional(Schema.String),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    fulfillmentInfo: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo,
    ),
    pageInfo: Schema.optional(GoogleCloudDialogflowCxV3PageInfo),
    triggerEvent: Schema.optional(Schema.String),
    transcript: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    languageInfo: Schema.optional(GoogleCloudDialogflowCxV3LanguageInfo),
    dtmfDigits: Schema.optional(Schema.String),
    sentimentAnalysisResult: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult,
    ),
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ResponseMessage),
    ),
    triggerIntent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3WebhookRequest" });

export interface GoogleCloudDialogflowV2ExportAgentResponse {
  agentUri?: string;
  agentContent?: string;
}

export const GoogleCloudDialogflowV2ExportAgentResponse: Schema.Schema<GoogleCloudDialogflowV2ExportAgentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentUri: Schema.optional(Schema.String),
    agentContent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ExportAgentResponse" });

export interface GoogleCloudDialogflowV2IntentParameter {
  value?: string;
  isList?: boolean;
  name?: string;
  displayName?: string;
  prompts?: ReadonlyArray<string>;
  entityTypeDisplayName?: string;
  mandatory?: boolean;
  defaultValue?: string;
}

export const GoogleCloudDialogflowV2IntentParameter: Schema.Schema<GoogleCloudDialogflowV2IntentParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    isList: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    prompts: Schema.optional(Schema.Array(Schema.String)),
    entityTypeDisplayName: Schema.optional(Schema.String),
    mandatory: Schema.optional(Schema.Boolean),
    defaultValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentParameter" });

export interface GoogleCloudDialogflowCxV3RunTestCaseResponse {
  result?: GoogleCloudDialogflowCxV3TestCaseResult;
}

export const GoogleCloudDialogflowCxV3RunTestCaseResponse: Schema.Schema<GoogleCloudDialogflowCxV3RunTestCaseResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.optional(GoogleCloudDialogflowCxV3TestCaseResult),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3RunTestCaseResponse" });

export interface GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings {
  enableInsightsExport?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableInsightsExport: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1ImportEntityTypesMetadata {}

export const GoogleCloudDialogflowCxV3beta1ImportEntityTypesMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportEntityTypesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportEntityTypesMetadata",
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

export interface GoogleCloudDialogflowV2IntentTrainingPhrasePart {
  text?: string;
  entityType?: string;
  userDefined?: boolean;
  alias?: string;
}

export const GoogleCloudDialogflowV2IntentTrainingPhrasePart: Schema.Schema<GoogleCloudDialogflowV2IntentTrainingPhrasePart> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    entityType: Schema.optional(Schema.String),
    userDefined: Schema.optional(Schema.Boolean),
    alias: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentTrainingPhrasePart",
  });

export interface GoogleCloudDialogflowV2IntentTrainingPhrase {
  name?: string;
  type?: "TYPE_UNSPECIFIED" | "EXAMPLE" | "TEMPLATE" | (string & {});
  parts?: ReadonlyArray<GoogleCloudDialogflowV2IntentTrainingPhrasePart>;
  timesAddedCount?: number;
}

export const GoogleCloudDialogflowV2IntentTrainingPhrase: Schema.Schema<GoogleCloudDialogflowV2IntentTrainingPhrase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    parts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentTrainingPhrasePart),
    ),
    timesAddedCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentTrainingPhrase" });

export interface GoogleCloudDialogflowV2Intent {
  resetContexts?: boolean;
  endInteraction?: boolean;
  followupIntentInfo?: ReadonlyArray<GoogleCloudDialogflowV2IntentFollowupIntentInfo>;
  parameters?: ReadonlyArray<GoogleCloudDialogflowV2IntentParameter>;
  name?: string;
  events?: ReadonlyArray<string>;
  priority?: number;
  action?: string;
  inputContextNames?: ReadonlyArray<string>;
  messages?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessage>;
  liveAgentHandoff?: boolean;
  rootFollowupIntentName?: string;
  displayName?: string;
  mlDisabled?: boolean;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2Context>;
  webhookState?:
    | "WEBHOOK_STATE_UNSPECIFIED"
    | "WEBHOOK_STATE_ENABLED"
    | "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"
    | (string & {});
  trainingPhrases?: ReadonlyArray<GoogleCloudDialogflowV2IntentTrainingPhrase>;
  parentFollowupIntentName?: string;
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
  isFallback?: boolean;
}

export const GoogleCloudDialogflowV2Intent: Schema.Schema<GoogleCloudDialogflowV2Intent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resetContexts: Schema.optional(Schema.Boolean),
    endInteraction: Schema.optional(Schema.Boolean),
    followupIntentInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentFollowupIntentInfo),
    ),
    parameters: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentParameter),
    ),
    name: Schema.optional(Schema.String),
    events: Schema.optional(Schema.Array(Schema.String)),
    priority: Schema.optional(Schema.Number),
    action: Schema.optional(Schema.String),
    inputContextNames: Schema.optional(Schema.Array(Schema.String)),
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessage),
    ),
    liveAgentHandoff: Schema.optional(Schema.Boolean),
    rootFollowupIntentName: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    mlDisabled: Schema.optional(Schema.Boolean),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2Context),
    ),
    webhookState: Schema.optional(Schema.String),
    trainingPhrases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentTrainingPhrase),
    ),
    parentFollowupIntentName: Schema.optional(Schema.String),
    defaultResponsePlatforms: Schema.optional(Schema.Array(Schema.String)),
    isFallback: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Intent" });

export interface GoogleCloudDialogflowV2QueryResult {
  parameters?: Record<string, unknown>;
  sentimentAnalysisResult?: GoogleCloudDialogflowV2SentimentAnalysisResult;
  cancelsSlotFilling?: boolean;
  action?: string;
  webhookSource?: string;
  allRequiredParamsPresent?: boolean;
  intent?: GoogleCloudDialogflowV2Intent;
  queryText?: string;
  languageCode?: string;
  intentDetectionConfidence?: number;
  diagnosticInfo?: Record<string, unknown>;
  speechRecognitionConfidence?: number;
  fulfillmentText?: string;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2Context>;
  webhookPayload?: Record<string, unknown>;
  fulfillmentMessages?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessage>;
}

export const GoogleCloudDialogflowV2QueryResult: Schema.Schema<GoogleCloudDialogflowV2QueryResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    sentimentAnalysisResult: Schema.optional(
      GoogleCloudDialogflowV2SentimentAnalysisResult,
    ),
    cancelsSlotFilling: Schema.optional(Schema.Boolean),
    action: Schema.optional(Schema.String),
    webhookSource: Schema.optional(Schema.String),
    allRequiredParamsPresent: Schema.optional(Schema.Boolean),
    intent: Schema.optional(GoogleCloudDialogflowV2Intent),
    queryText: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    intentDetectionConfidence: Schema.optional(Schema.Number),
    diagnosticInfo: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    speechRecognitionConfidence: Schema.optional(Schema.Number),
    fulfillmentText: Schema.optional(Schema.String),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2Context),
    ),
    webhookPayload: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    fulfillmentMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessage),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2QueryResult" });

export interface GoogleCloudDialogflowV2WebhookRequest {
  responseId?: string;
  queryResult?: GoogleCloudDialogflowV2QueryResult;
  session?: string;
  originalDetectIntentRequest?: GoogleCloudDialogflowV2OriginalDetectIntentRequest;
}

export const GoogleCloudDialogflowV2WebhookRequest: Schema.Schema<GoogleCloudDialogflowV2WebhookRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responseId: Schema.optional(Schema.String),
    queryResult: Schema.optional(GoogleCloudDialogflowV2QueryResult),
    session: Schema.optional(Schema.String),
    originalDetectIntentRequest: Schema.optional(
      GoogleCloudDialogflowV2OriginalDetectIntentRequest,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2WebhookRequest" });

export interface GoogleCloudLocationLocation {
  metadata?: Record<string, unknown>;
  name?: string;
  locationId?: string;
  displayName?: string;
  labels?: Record<string, string>;
}

export const GoogleCloudLocationLocation: Schema.Schema<GoogleCloudLocationLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GoogleCloudLocationLocation" });

export interface GoogleCloudDialogflowCxV3ExportIntentsResponse {
  intentsUri?: string;
  intentsContent?: GoogleCloudDialogflowCxV3InlineDestination;
}

export const GoogleCloudDialogflowCxV3ExportIntentsResponse: Schema.Schema<GoogleCloudDialogflowCxV3ExportIntentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intentsUri: Schema.optional(Schema.String),
    intentsContent: Schema.optional(GoogleCloudDialogflowCxV3InlineDestination),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ExportIntentsResponse" });

export interface GoogleCloudDialogflowCxV3beta1TurnSignals {
  webhookStatuses?: ReadonlyArray<string>;
  dtmfUsed?: boolean;
  sentimentMagnitude?: number;
  agentEscalated?: boolean;
  reachedEndPage?: boolean;
  noMatch?: boolean;
  sentimentScore?: number;
  noUserInput?: boolean;
  userEscalated?: boolean;
  failureReasons?: ReadonlyArray<
    | "FAILURE_REASON_UNSPECIFIED"
    | "FAILED_INTENT"
    | "FAILED_WEBHOOK"
    | (string & {})
  >;
}

export const GoogleCloudDialogflowCxV3beta1TurnSignals: Schema.Schema<GoogleCloudDialogflowCxV3beta1TurnSignals> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webhookStatuses: Schema.optional(Schema.Array(Schema.String)),
    dtmfUsed: Schema.optional(Schema.Boolean),
    sentimentMagnitude: Schema.optional(Schema.Number),
    agentEscalated: Schema.optional(Schema.Boolean),
    reachedEndPage: Schema.optional(Schema.Boolean),
    noMatch: Schema.optional(Schema.Boolean),
    sentimentScore: Schema.optional(Schema.Number),
    noUserInput: Schema.optional(Schema.Boolean),
    userEscalated: Schema.optional(Schema.Boolean),
    failureReasons: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TurnSignals" });

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

export interface GoogleCloudDialogflowCxV3beta1ToolVersion {
  name?: string;
  displayName?: string;
  updateTime?: string;
  tool?: GoogleCloudDialogflowCxV3beta1Tool;
  createTime?: string;
}

export const GoogleCloudDialogflowCxV3beta1ToolVersion: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    tool: Schema.optional(GoogleCloudDialogflowCxV3beta1Tool),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ToolVersion" });

export interface GoogleCloudDialogflowCxV3beta1ExportAgentRequest {
  agentUri?: string;
  dataFormat?:
    | "DATA_FORMAT_UNSPECIFIED"
    | "BLOB"
    | "JSON_PACKAGE"
    | (string & {});
  environment?: string;
  includeBigqueryExportSettings?: boolean;
  gitDestination?: GoogleCloudDialogflowCxV3beta1ExportAgentRequestGitDestination;
}

export const GoogleCloudDialogflowCxV3beta1ExportAgentRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportAgentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentUri: Schema.optional(Schema.String),
    dataFormat: Schema.optional(Schema.String),
    environment: Schema.optional(Schema.String),
    includeBigqueryExportSettings: Schema.optional(Schema.Boolean),
    gitDestination: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ExportAgentRequestGitDestination,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportAgentRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse {
  environments?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Environment>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    environments: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1Environment),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata {
  version?: string;
}

export const GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1ListToolVersionsResponse {
  toolVersions?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ToolVersion>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3beta1ListToolVersionsResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ListToolVersionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolVersions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ToolVersion),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ListToolVersionsResponse",
  });

export interface GoogleCloudDialogflowV2beta1EntityType {
  kind?:
    | "KIND_UNSPECIFIED"
    | "KIND_MAP"
    | "KIND_LIST"
    | "KIND_REGEXP"
    | (string & {});
  autoExpansionMode?:
    | "AUTO_EXPANSION_MODE_UNSPECIFIED"
    | "AUTO_EXPANSION_MODE_DEFAULT"
    | (string & {});
  enableFuzzyExtraction?: boolean;
  name?: string;
  displayName?: string;
  entities?: ReadonlyArray<GoogleCloudDialogflowV2beta1EntityTypeEntity>;
}

export const GoogleCloudDialogflowV2beta1EntityType: Schema.Schema<GoogleCloudDialogflowV2beta1EntityType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    autoExpansionMode: Schema.optional(Schema.String),
    enableFuzzyExtraction: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1EntityTypeEntity),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1EntityType" });

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

export interface GoogleCloudDialogflowV2CreateConversationModelOperationMetadata {
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
  conversationModel?: string;
  doneTime?: string;
}

export const GoogleCloudDialogflowV2CreateConversationModelOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2CreateConversationModelOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    conversationModel: Schema.optional(Schema.String),
    doneTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2CreateConversationModelOperationMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1ListExamplesResponse {
  examples?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Example>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3beta1ListExamplesResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ListExamplesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    examples: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1Example),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ListExamplesResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1ListIntentsResponse {
  intents?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Intent>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3beta1ListIntentsResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ListIntentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intents: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1Intent),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ListIntentsResponse",
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

export interface GoogleCloudDialogflowCxV3beta1ListPagesResponse {
  pages?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Page>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3beta1ListPagesResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ListPagesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pages: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3beta1Page)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ListPagesResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportFlowRequest {
  includeReferencedFlows?: boolean;
  flowUri?: string;
}

export const GoogleCloudDialogflowCxV3beta1ExportFlowRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportFlowRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includeReferencedFlows: Schema.optional(Schema.Boolean),
    flowUri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportFlowRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1GenerativeSettings {
  generativeSafetySettings?: GoogleCloudDialogflowCxV3beta1SafetySettings;
  fallbackSettings?: GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettings;
  knowledgeConnectorSettings?: GoogleCloudDialogflowCxV3beta1GenerativeSettingsKnowledgeConnectorSettings;
  name?: string;
  llmModelSettings?: GoogleCloudDialogflowCxV3beta1LlmModelSettings;
  languageCode?: string;
}

export const GoogleCloudDialogflowCxV3beta1GenerativeSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1GenerativeSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generativeSafetySettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1SafetySettings,
    ),
    fallbackSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettings,
    ),
    knowledgeConnectorSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1GenerativeSettingsKnowledgeConnectorSettings,
    ),
    name: Schema.optional(Schema.String),
    llmModelSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1LlmModelSettings,
    ),
    languageCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1GenerativeSettings",
  });

export interface GoogleCloudDialogflowCxV3RunContinuousTestMetadata {
  errors?: ReadonlyArray<GoogleCloudDialogflowCxV3TestError>;
}

export const GoogleCloudDialogflowCxV3RunContinuousTestMetadata: Schema.Schema<GoogleCloudDialogflowCxV3RunContinuousTestMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3TestError)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3RunContinuousTestMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1SecuritySettings {
  name?: string;
  displayName?: string;
  redactionScope?:
    | "REDACTION_SCOPE_UNSPECIFIED"
    | "REDACT_DISK_STORAGE"
    | (string & {});
  audioExportSettings?: GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings;
  retentionWindowDays?: number;
  retentionStrategy?:
    | "RETENTION_STRATEGY_UNSPECIFIED"
    | "REMOVE_AFTER_CONVERSATION"
    | (string & {});
  inspectTemplate?: string;
  insightsExportSettings?: GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings;
  purgeDataTypes?: ReadonlyArray<
    "PURGE_DATA_TYPE_UNSPECIFIED" | "DIALOGFLOW_HISTORY" | (string & {})
  >;
  redactionStrategy?:
    | "REDACTION_STRATEGY_UNSPECIFIED"
    | "REDACT_WITH_SERVICE"
    | (string & {});
  deidentifyTemplate?: string;
}

export const GoogleCloudDialogflowCxV3beta1SecuritySettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1SecuritySettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    redactionScope: Schema.optional(Schema.String),
    audioExportSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings,
    ),
    retentionWindowDays: Schema.optional(Schema.Number),
    retentionStrategy: Schema.optional(Schema.String),
    inspectTemplate: Schema.optional(Schema.String),
    insightsExportSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings,
    ),
    purgeDataTypes: Schema.optional(Schema.Array(Schema.String)),
    redactionStrategy: Schema.optional(Schema.String),
    deidentifyTemplate: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1SecuritySettings" });

export interface GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo {
  confidence?: number;
  parameters?: Record<
    string,
    GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue
  >;
  lastMatchedIntent?: string;
  displayName?: string;
}

export const GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo: Schema.Schema<GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
    parameters: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue,
      ),
    ),
    lastMatchedIntent: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo",
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

export interface GoogleCloudDialogflowCxV3beta1RestoreAgentRequest {
  agentContent?: string;
  gitSource?: GoogleCloudDialogflowCxV3beta1RestoreAgentRequestGitSource;
  restoreOption?:
    | "RESTORE_OPTION_UNSPECIFIED"
    | "KEEP"
    | "FALLBACK"
    | (string & {});
  agentUri?: string;
}

export const GoogleCloudDialogflowCxV3beta1RestoreAgentRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1RestoreAgentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentContent: Schema.optional(Schema.String),
    gitSource: Schema.optional(
      GoogleCloudDialogflowCxV3beta1RestoreAgentRequestGitSource,
    ),
    restoreOption: Schema.optional(Schema.String),
    agentUri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RestoreAgentRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1EntityType {
  entities?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1EntityTypeEntity>;
  excludedPhrases?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1EntityTypeExcludedPhrase>;
  redact?: boolean;
  enableFuzzyExtraction?: boolean;
  name?: string;
  displayName?: string;
  kind?:
    | "KIND_UNSPECIFIED"
    | "KIND_MAP"
    | "KIND_LIST"
    | "KIND_REGEXP"
    | (string & {});
  autoExpansionMode?:
    | "AUTO_EXPANSION_MODE_UNSPECIFIED"
    | "AUTO_EXPANSION_MODE_DEFAULT"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1EntityType: Schema.Schema<GoogleCloudDialogflowCxV3beta1EntityType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1EntityTypeEntity),
    ),
    excludedPhrases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1EntityTypeExcludedPhrase),
    ),
    redact: Schema.optional(Schema.Boolean),
    enableFuzzyExtraction: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    autoExpansionMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1EntityType" });

export interface GoogleCloudDialogflowCxV3Environment {
  name?: string;
  displayName?: string;
  description?: string;
  versionConfigs?: ReadonlyArray<GoogleCloudDialogflowCxV3EnvironmentVersionConfig>;
  updateTime?: string;
  testCasesConfig?: GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig;
  webhookConfig?: GoogleCloudDialogflowCxV3EnvironmentWebhookConfig;
}

export const GoogleCloudDialogflowCxV3Environment: Schema.Schema<GoogleCloudDialogflowCxV3Environment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    versionConfigs: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3EnvironmentVersionConfig),
    ),
    updateTime: Schema.optional(Schema.String),
    testCasesConfig: Schema.optional(
      GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig,
    ),
    webhookConfig: Schema.optional(
      GoogleCloudDialogflowCxV3EnvironmentWebhookConfig,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Environment" });

export interface GoogleCloudDialogflowCxV3ExportTestCasesResponse {
  gcsUri?: string;
  content?: string;
}

export const GoogleCloudDialogflowCxV3ExportTestCasesResponse: Schema.Schema<GoogleCloudDialogflowCxV3ExportTestCasesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsUri: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ExportTestCasesResponse",
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

export interface GoogleCloudDialogflowCxV3beta1WebhookRequest {
  messages?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ResponseMessage>;
  triggerIntent?: string;
  dtmfDigits?: string;
  sentimentAnalysisResult?: GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult;
  languageInfo?: GoogleCloudDialogflowCxV3beta1LanguageInfo;
  languageCode?: string;
  triggerEvent?: string;
  fulfillmentInfo?: GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo;
  pageInfo?: GoogleCloudDialogflowCxV3beta1PageInfo;
  transcript?: string;
  sessionInfo?: GoogleCloudDialogflowCxV3beta1SessionInfo;
  text?: string;
  intentInfo?: GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo;
  detectIntentResponseId?: string;
  payload?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3beta1WebhookRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1WebhookRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ResponseMessage),
    ),
    triggerIntent: Schema.optional(Schema.String),
    dtmfDigits: Schema.optional(Schema.String),
    sentimentAnalysisResult: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult,
    ),
    languageInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1LanguageInfo),
    languageCode: Schema.optional(Schema.String),
    triggerEvent: Schema.optional(Schema.String),
    fulfillmentInfo: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo,
    ),
    pageInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1PageInfo),
    transcript: Schema.optional(Schema.String),
    sessionInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1SessionInfo),
    text: Schema.optional(Schema.String),
    intentInfo: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo,
    ),
    detectIntentResponseId: Schema.optional(Schema.String),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1WebhookRequest" });

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

export interface GoogleCloudDialogflowCxV3beta1RunTestCaseMetadata {}

export const GoogleCloudDialogflowCxV3beta1RunTestCaseMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1RunTestCaseMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RunTestCaseMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportToolsRequest {
  toolsUri?: string;
  toolsContentInline?: boolean;
  tools?: ReadonlyArray<string>;
  dataFormat?: "DATA_FORMAT_UNSPECIFIED" | "BLOB" | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1ExportToolsRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportToolsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolsUri: Schema.optional(Schema.String),
    toolsContentInline: Schema.optional(Schema.Boolean),
    tools: Schema.optional(Schema.Array(Schema.String)),
    dataFormat: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportToolsRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1DeployFlowRequest {
  flowVersion?: string;
}

export const GoogleCloudDialogflowCxV3beta1DeployFlowRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1DeployFlowRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flowVersion: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1DeployFlowRequest",
  });

export interface GoogleCloudDialogflowCxV3ExportAgentResponse {
  commitSha?: string;
  agentContent?: string;
  agentUri?: string;
}

export const GoogleCloudDialogflowCxV3ExportAgentResponse: Schema.Schema<GoogleCloudDialogflowCxV3ExportAgentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    commitSha: Schema.optional(Schema.String),
    agentContent: Schema.optional(Schema.String),
    agentUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ExportAgentResponse" });

export interface GoogleProtobufEmpty {}

export const GoogleProtobufEmpty: Schema.Schema<GoogleProtobufEmpty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleProtobufEmpty",
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

export interface GoogleCloudDialogflowCxV3ExportEntityTypesMetadata {}

export const GoogleCloudDialogflowCxV3ExportEntityTypesMetadata: Schema.Schema<GoogleCloudDialogflowCxV3ExportEntityTypesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ExportEntityTypesMetadata",
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

export interface GoogleCloudDialogflowCxV3beta1StartExperimentRequest {}

export const GoogleCloudDialogflowCxV3beta1StartExperimentRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1StartExperimentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1StartExperimentRequest",
  });

export interface GoogleCloudDialogflowV2ImportDocumentsResponse {
  warnings?: ReadonlyArray<GoogleRpcStatus>;
}

export const GoogleCloudDialogflowV2ImportDocumentsResponse: Schema.Schema<GoogleCloudDialogflowV2ImportDocumentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    warnings: Schema.optional(Schema.Array(GoogleRpcStatus)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ImportDocumentsResponse" });

export interface GoogleCloudDialogflowCxV3beta1ListFlowsResponse {
  flows?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Flow>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3beta1ListFlowsResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ListFlowsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flows: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3beta1Flow)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ListFlowsResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportTestCasesMetadata {}

export const GoogleCloudDialogflowCxV3beta1ExportTestCasesMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportTestCasesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportTestCasesMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse {
  securitySettings?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1SecuritySettings>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    securitySettings: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1SecuritySettings),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse",
  });

export interface GoogleCloudDialogflowCxV3ImportEntityTypesMetadata {}

export const GoogleCloudDialogflowCxV3ImportEntityTypesMetadata: Schema.Schema<GoogleCloudDialogflowCxV3ImportEntityTypesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ImportEntityTypesMetadata",
  });

export interface GoogleCloudDialogflowCxV3DeployFlowResponse {
  environment?: GoogleCloudDialogflowCxV3Environment;
  deployment?: string;
}

export const GoogleCloudDialogflowCxV3DeployFlowResponse: Schema.Schema<GoogleCloudDialogflowCxV3DeployFlowResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    environment: Schema.optional(GoogleCloudDialogflowCxV3Environment),
    deployment: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3DeployFlowResponse" });

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

export interface GoogleCloudDialogflowCxV3beta1FulfillIntentResponse {
  responseId?: string;
  queryResult?: GoogleCloudDialogflowCxV3beta1QueryResult;
  outputAudioConfig?: GoogleCloudDialogflowCxV3beta1OutputAudioConfig;
  outputAudio?: string;
}

export const GoogleCloudDialogflowCxV3beta1FulfillIntentResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1FulfillIntentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responseId: Schema.optional(Schema.String),
    queryResult: Schema.optional(GoogleCloudDialogflowCxV3beta1QueryResult),
    outputAudioConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1OutputAudioConfig,
    ),
    outputAudio: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1FulfillIntentResponse",
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

export interface GoogleCloudDialogflowCxV3beta1RunTestCaseRequest {
  environment?: string;
}

export const GoogleCloudDialogflowCxV3beta1RunTestCaseRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1RunTestCaseRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    environment: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RunTestCaseRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportAgentResponse {
  agentUri?: string;
  commitSha?: string;
  agentContent?: string;
}

export const GoogleCloudDialogflowCxV3beta1ExportAgentResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportAgentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentUri: Schema.optional(Schema.String),
    commitSha: Schema.optional(Schema.String),
    agentContent: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportAgentResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse {
  transitionRouteGroups?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TransitionRouteGroup>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transitionRouteGroups: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TransitionRouteGroup),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1ListEntityTypesResponse {
  nextPageToken?: string;
  entityTypes?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1EntityType>;
}

export const GoogleCloudDialogflowCxV3beta1ListEntityTypesResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ListEntityTypesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    entityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1EntityType),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ListEntityTypesResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1ImportEntityTypesRequest {
  entityTypesUri?: string;
  mergeOption?:
    | "MERGE_OPTION_UNSPECIFIED"
    | "REPLACE"
    | "MERGE"
    | "RENAME"
    | "REPORT_CONFLICT"
    | "KEEP"
    | (string & {});
  targetEntityType?: string;
  entityTypesContent?: GoogleCloudDialogflowCxV3beta1InlineSource;
}

export const GoogleCloudDialogflowCxV3beta1ImportEntityTypesRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportEntityTypesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypesUri: Schema.optional(Schema.String),
    mergeOption: Schema.optional(Schema.String),
    targetEntityType: Schema.optional(Schema.String),
    entityTypesContent: Schema.optional(
      GoogleCloudDialogflowCxV3beta1InlineSource,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportEntityTypesRequest",
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

export interface GoogleCloudDialogflowCxV3BatchRunTestCasesMetadata {
  errors?: ReadonlyArray<GoogleCloudDialogflowCxV3TestError>;
}

export const GoogleCloudDialogflowCxV3BatchRunTestCasesMetadata: Schema.Schema<GoogleCloudDialogflowCxV3BatchRunTestCasesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3TestError)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3BatchRunTestCasesMetadata",
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

export interface GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse {
  nextPageToken?: string;
  testCaseResults?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TestCaseResult>;
}

export const GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    testCaseResults: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TestCaseResult),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse",
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

export interface GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse {
  nextPageToken?: string;
  environments?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Environment>;
}

export const GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    environments: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1Environment),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse",
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

export interface GoogleCloudDialogflowCxV3beta1ListPlaybookVersionsResponse {
  nextPageToken?: string;
  playbookVersions?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1PlaybookVersion>;
}

export const GoogleCloudDialogflowCxV3beta1ListPlaybookVersionsResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ListPlaybookVersionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    playbookVersions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1PlaybookVersion),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ListPlaybookVersionsResponse",
  });

export interface GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadata {
  conversationProfile?: string;
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
  participantRole?:
    | "ROLE_UNSPECIFIED"
    | "HUMAN_AGENT"
    | "AUTOMATED_AGENT"
    | "END_USER"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationProfile: Schema.optional(Schema.String),
    suggestionFeatureType: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    participantRole: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1CompareVersionsResponse {
  baseVersionContentJson?: string;
  targetVersionContentJson?: string;
  compareTime?: string;
}

export const GoogleCloudDialogflowCxV3beta1CompareVersionsResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1CompareVersionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    baseVersionContentJson: Schema.optional(Schema.String),
    targetVersionContentJson: Schema.optional(Schema.String),
    compareTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1CompareVersionsResponse",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata {
  exportOperationMetadata?: GoogleCloudDialogflowV2beta1ExportOperationMetadata;
  doneTime?: string;
  knowledgeBase?: string;
  state?: "STATE_UNSPECIFIED" | "PENDING" | "RUNNING" | "DONE" | (string & {});
}

export const GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exportOperationMetadata: Schema.optional(
      GoogleCloudDialogflowV2beta1ExportOperationMetadata,
    ),
    doneTime: Schema.optional(Schema.String),
    knowledgeBase: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata",
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

export interface GoogleCloudDialogflowCxV3beta1CompareVersionsRequest {
  targetVersion?: string;
  languageCode?: string;
}

export const GoogleCloudDialogflowCxV3beta1CompareVersionsRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1CompareVersionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetVersion: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1CompareVersionsRequest",
  });

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

export interface GoogleCloudDialogflowV2DeployConversationModelOperationMetadata {
  conversationModel?: string;
  doneTime?: string;
  createTime?: string;
}

export const GoogleCloudDialogflowV2DeployConversationModelOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2DeployConversationModelOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationModel: Schema.optional(Schema.String),
    doneTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2DeployConversationModelOperationMetadata",
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

export interface ListProjectsOperationsRequest {
  name: string;
  returnPartialSuccess?: boolean;
  filter?: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}/operations" }),
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
    T.Http({ method: "GET", path: "v3beta1/{+name}" }),
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
    T.Http({ method: "POST", path: "v3beta1/{+name}:cancel", hasBody: true }),
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

export interface ListProjectsLocationsRequest {
  filter?: string;
  pageSize?: number;
  name: string;
  extraLocationTypes?: string[];
  pageToken?: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}/locations" }),
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
    T.Http({ method: "GET", path: "v3beta1/{+name}" }),
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

export interface GetProjectsLocationsOperationsRequest {
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}" }),
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
    T.Http({ method: "POST", path: "v3beta1/{+name}:cancel", hasBody: true }),
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

export interface ListProjectsLocationsOperationsRequest {
  name: string;
  returnPartialSuccess?: boolean;
  filter?: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}/operations" }),
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

export interface GetProjectsLocationsSecuritySettingsRequest {
  name: string;
}

export const GetProjectsLocationsSecuritySettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSecuritySettingsRequest>;

export type GetProjectsLocationsSecuritySettingsResponse =
  GoogleCloudDialogflowCxV3beta1SecuritySettings;
export const GetProjectsLocationsSecuritySettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1SecuritySettings;

export type GetProjectsLocationsSecuritySettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsSecuritySettings: API.OperationMethod<
  GetProjectsLocationsSecuritySettingsRequest,
  GetProjectsLocationsSecuritySettingsResponse,
  GetProjectsLocationsSecuritySettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSecuritySettingsRequest,
  output: GetProjectsLocationsSecuritySettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsSecuritySettingsRequest {
  name: string;
}

export const DeleteProjectsLocationsSecuritySettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsSecuritySettingsRequest>;

export type DeleteProjectsLocationsSecuritySettingsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsSecuritySettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSecuritySettingsRequest,
  output: DeleteProjectsLocationsSecuritySettingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsSecuritySettingsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1SecuritySettings;
}

export const PatchProjectsLocationsSecuritySettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1SecuritySettings).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsSecuritySettingsRequest>;

export type PatchProjectsLocationsSecuritySettingsResponse =
  GoogleCloudDialogflowCxV3beta1SecuritySettings;
export const PatchProjectsLocationsSecuritySettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1SecuritySettings;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsSecuritySettingsRequest,
  output: PatchProjectsLocationsSecuritySettingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsSecuritySettingsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1SecuritySettings;
}

export const CreateProjectsLocationsSecuritySettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1SecuritySettings).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+parent}/securitySettings",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsSecuritySettingsRequest>;

export type CreateProjectsLocationsSecuritySettingsResponse =
  GoogleCloudDialogflowCxV3beta1SecuritySettings;
export const CreateProjectsLocationsSecuritySettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1SecuritySettings;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsSecuritySettingsRequest,
  output: CreateProjectsLocationsSecuritySettingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsSecuritySettingsRequest {
  pageSize?: number;
  parent: string;
  pageToken?: string;
}

export const ListProjectsLocationsSecuritySettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+parent}/securitySettings" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSecuritySettingsRequest>;

export type ListProjectsLocationsSecuritySettingsResponse =
  GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse;
export const ListProjectsLocationsSecuritySettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse;

export type ListProjectsLocationsSecuritySettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsSecuritySettings: API.PaginatedOperationMethod<
  ListProjectsLocationsSecuritySettingsRequest,
  ListProjectsLocationsSecuritySettingsResponse,
  ListProjectsLocationsSecuritySettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSecuritySettingsRequest,
  output: ListProjectsLocationsSecuritySettingsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsAgentsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1Agent;
}

export const CreateProjectsLocationsAgentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1Agent).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v3beta1/{+parent}/agents", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentsRequest>;

export type CreateProjectsLocationsAgentsResponse =
  GoogleCloudDialogflowCxV3beta1Agent;
export const CreateProjectsLocationsAgentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Agent;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsRequest,
  output: CreateProjectsLocationsAgentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsRequest {
  parent: string;
  pageToken?: string;
  pageSize?: number;
}

export const ListProjectsLocationsAgentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+parent}/agents" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentsRequest>;

export type ListProjectsLocationsAgentsResponse =
  GoogleCloudDialogflowCxV3beta1ListAgentsResponse;
export const ListProjectsLocationsAgentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1ListAgentsResponse;

export type ListProjectsLocationsAgentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgents: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsRequest,
  ListProjectsLocationsAgentsResponse,
  ListProjectsLocationsAgentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsRequest,
  output: ListProjectsLocationsAgentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsAgentsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1Agent;
}

export const PatchProjectsLocationsAgentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1Agent).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentsRequest>;

export type PatchProjectsLocationsAgentsResponse =
  GoogleCloudDialogflowCxV3beta1Agent;
export const PatchProjectsLocationsAgentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Agent;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsRequest,
  output: PatchProjectsLocationsAgentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RestoreProjectsLocationsAgentsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1RestoreAgentRequest;
}

export const RestoreProjectsLocationsAgentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1RestoreAgentRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3beta1/{+name}:restore", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RestoreProjectsLocationsAgentsRequest>;

export type RestoreProjectsLocationsAgentsResponse = GoogleLongrunningOperation;
export const RestoreProjectsLocationsAgentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RestoreProjectsLocationsAgentsRequest,
  output: RestoreProjectsLocationsAgentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetValidationResultProjectsLocationsAgentsRequest {
  name: string;
  languageCode?: string;
}

export const GetValidationResultProjectsLocationsAgentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetValidationResultProjectsLocationsAgentsRequest>;

export type GetValidationResultProjectsLocationsAgentsResponse =
  GoogleCloudDialogflowCxV3beta1AgentValidationResult;
export const GetValidationResultProjectsLocationsAgentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1AgentValidationResult;

export type GetValidationResultProjectsLocationsAgentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getValidationResultProjectsLocationsAgents: API.OperationMethod<
  GetValidationResultProjectsLocationsAgentsRequest,
  GetValidationResultProjectsLocationsAgentsResponse,
  GetValidationResultProjectsLocationsAgentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetValidationResultProjectsLocationsAgentsRequest,
  output: GetValidationResultProjectsLocationsAgentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsAgentsRequest {
  name: string;
}

export const GetProjectsLocationsAgentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentsRequest>;

export type GetProjectsLocationsAgentsResponse =
  GoogleCloudDialogflowCxV3beta1Agent;
export const GetProjectsLocationsAgentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Agent;

export type GetProjectsLocationsAgentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgents: API.OperationMethod<
  GetProjectsLocationsAgentsRequest,
  GetProjectsLocationsAgentsResponse,
  GetProjectsLocationsAgentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsRequest,
  output: GetProjectsLocationsAgentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ValidateProjectsLocationsAgentsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1ValidateAgentRequest;
}

export const ValidateProjectsLocationsAgentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ValidateAgentRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3beta1/{+name}:validate", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ValidateProjectsLocationsAgentsRequest>;

export type ValidateProjectsLocationsAgentsResponse =
  GoogleCloudDialogflowCxV3beta1AgentValidationResult;
export const ValidateProjectsLocationsAgentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1AgentValidationResult;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ValidateProjectsLocationsAgentsRequest,
  output: ValidateProjectsLocationsAgentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAgentsRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentsRequest>;

export type DeleteProjectsLocationsAgentsResponse = GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsRequest,
  output: DeleteProjectsLocationsAgentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateGenerativeSettingsProjectsLocationsAgentsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1GenerativeSettings;
}

export const UpdateGenerativeSettingsProjectsLocationsAgentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1GenerativeSettings,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateGenerativeSettingsProjectsLocationsAgentsRequest>;

export type UpdateGenerativeSettingsProjectsLocationsAgentsResponse =
  GoogleCloudDialogflowCxV3beta1GenerativeSettings;
export const UpdateGenerativeSettingsProjectsLocationsAgentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1GenerativeSettings;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateGenerativeSettingsProjectsLocationsAgentsRequest,
  output: UpdateGenerativeSettingsProjectsLocationsAgentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetGenerativeSettingsProjectsLocationsAgentsRequest {
  name: string;
  languageCode?: string;
}

export const GetGenerativeSettingsProjectsLocationsAgentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetGenerativeSettingsProjectsLocationsAgentsRequest>;

export type GetGenerativeSettingsProjectsLocationsAgentsResponse =
  GoogleCloudDialogflowCxV3beta1GenerativeSettings;
export const GetGenerativeSettingsProjectsLocationsAgentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1GenerativeSettings;

export type GetGenerativeSettingsProjectsLocationsAgentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getGenerativeSettingsProjectsLocationsAgents: API.OperationMethod<
  GetGenerativeSettingsProjectsLocationsAgentsRequest,
  GetGenerativeSettingsProjectsLocationsAgentsResponse,
  GetGenerativeSettingsProjectsLocationsAgentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetGenerativeSettingsProjectsLocationsAgentsRequest,
  output: GetGenerativeSettingsProjectsLocationsAgentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ExportProjectsLocationsAgentsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1ExportAgentRequest;
}

export const ExportProjectsLocationsAgentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ExportAgentRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3beta1/{+name}:export", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ExportProjectsLocationsAgentsRequest>;

export type ExportProjectsLocationsAgentsResponse = GoogleLongrunningOperation;
export const ExportProjectsLocationsAgentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportProjectsLocationsAgentsRequest,
  output: ExportProjectsLocationsAgentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAgentsToolsRequest {
  name: string;
  force?: boolean;
}

export const DeleteProjectsLocationsAgentsToolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentsToolsRequest>;

export type DeleteProjectsLocationsAgentsToolsResponse = GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsToolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsToolsRequest,
  output: DeleteProjectsLocationsAgentsToolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAgentsToolsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1Tool;
}

export const PatchProjectsLocationsAgentsToolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1Tool).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentsToolsRequest>;

export type PatchProjectsLocationsAgentsToolsResponse =
  GoogleCloudDialogflowCxV3beta1Tool;
export const PatchProjectsLocationsAgentsToolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Tool;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsToolsRequest,
  output: PatchProjectsLocationsAgentsToolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExportProjectsLocationsAgentsToolsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1ExportToolsRequest;
}

export const ExportProjectsLocationsAgentsToolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ExportToolsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+parent}/tools:export",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExportProjectsLocationsAgentsToolsRequest>;

export type ExportProjectsLocationsAgentsToolsResponse =
  GoogleLongrunningOperation;
export const ExportProjectsLocationsAgentsToolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ExportProjectsLocationsAgentsToolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const exportProjectsLocationsAgentsTools: API.OperationMethod<
  ExportProjectsLocationsAgentsToolsRequest,
  ExportProjectsLocationsAgentsToolsResponse,
  ExportProjectsLocationsAgentsToolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportProjectsLocationsAgentsToolsRequest,
  output: ExportProjectsLocationsAgentsToolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsToolsRequest {
  name: string;
}

export const GetProjectsLocationsAgentsToolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentsToolsRequest>;

export type GetProjectsLocationsAgentsToolsResponse =
  GoogleCloudDialogflowCxV3beta1Tool;
export const GetProjectsLocationsAgentsToolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Tool;

export type GetProjectsLocationsAgentsToolsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsTools: API.OperationMethod<
  GetProjectsLocationsAgentsToolsRequest,
  GetProjectsLocationsAgentsToolsResponse,
  GetProjectsLocationsAgentsToolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsToolsRequest,
  output: GetProjectsLocationsAgentsToolsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsAgentsToolsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1Tool;
}

export const CreateProjectsLocationsAgentsToolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1Tool).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v3beta1/{+parent}/tools", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentsToolsRequest>;

export type CreateProjectsLocationsAgentsToolsResponse =
  GoogleCloudDialogflowCxV3beta1Tool;
export const CreateProjectsLocationsAgentsToolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Tool;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsToolsRequest,
  output: CreateProjectsLocationsAgentsToolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsToolsRequest {
  pageSize?: number;
  parent: string;
  pageToken?: string;
}

export const ListProjectsLocationsAgentsToolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+parent}/tools" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentsToolsRequest>;

export type ListProjectsLocationsAgentsToolsResponse =
  GoogleCloudDialogflowCxV3beta1ListToolsResponse;
export const ListProjectsLocationsAgentsToolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1ListToolsResponse;

export type ListProjectsLocationsAgentsToolsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsTools: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsToolsRequest,
  ListProjectsLocationsAgentsToolsResponse,
  ListProjectsLocationsAgentsToolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsToolsRequest,
  output: ListProjectsLocationsAgentsToolsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface RestoreProjectsLocationsAgentsToolsVersionsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1RestoreToolVersionRequest;
}

export const RestoreProjectsLocationsAgentsToolsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1RestoreToolVersionRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3beta1/{+name}:restore", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RestoreProjectsLocationsAgentsToolsVersionsRequest>;

export type RestoreProjectsLocationsAgentsToolsVersionsResponse =
  GoogleCloudDialogflowCxV3beta1RestoreToolVersionResponse;
export const RestoreProjectsLocationsAgentsToolsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1RestoreToolVersionResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RestoreProjectsLocationsAgentsToolsVersionsRequest,
  output: RestoreProjectsLocationsAgentsToolsVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAgentsToolsVersionsRequest {
  name: string;
  force?: boolean;
}

export const DeleteProjectsLocationsAgentsToolsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentsToolsVersionsRequest>;

export type DeleteProjectsLocationsAgentsToolsVersionsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsToolsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsToolsVersionsRequest,
  output: DeleteProjectsLocationsAgentsToolsVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsToolsVersionsRequest {
  name: string;
}

export const GetProjectsLocationsAgentsToolsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentsToolsVersionsRequest>;

export type GetProjectsLocationsAgentsToolsVersionsResponse =
  GoogleCloudDialogflowCxV3beta1ToolVersion;
export const GetProjectsLocationsAgentsToolsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1ToolVersion;

export type GetProjectsLocationsAgentsToolsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsToolsVersions: API.OperationMethod<
  GetProjectsLocationsAgentsToolsVersionsRequest,
  GetProjectsLocationsAgentsToolsVersionsResponse,
  GetProjectsLocationsAgentsToolsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsToolsVersionsRequest,
  output: GetProjectsLocationsAgentsToolsVersionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsAgentsToolsVersionsRequest {
  pageSize?: number;
  parent: string;
  pageToken?: string;
}

export const ListProjectsLocationsAgentsToolsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+parent}/versions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentsToolsVersionsRequest>;

export type ListProjectsLocationsAgentsToolsVersionsResponse =
  GoogleCloudDialogflowCxV3beta1ListToolVersionsResponse;
export const ListProjectsLocationsAgentsToolsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1ListToolVersionsResponse;

export type ListProjectsLocationsAgentsToolsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsToolsVersions: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsToolsVersionsRequest,
  ListProjectsLocationsAgentsToolsVersionsResponse,
  ListProjectsLocationsAgentsToolsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsToolsVersionsRequest,
  output: ListProjectsLocationsAgentsToolsVersionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsAgentsToolsVersionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1ToolVersion;
}

export const CreateProjectsLocationsAgentsToolsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1ToolVersion).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+parent}/versions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentsToolsVersionsRequest>;

export type CreateProjectsLocationsAgentsToolsVersionsResponse =
  GoogleCloudDialogflowCxV3beta1ToolVersion;
export const CreateProjectsLocationsAgentsToolsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1ToolVersion;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsToolsVersionsRequest,
  output: CreateProjectsLocationsAgentsToolsVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAgentsEntityTypesRequest {
  parent: string;
  languageCode?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1EntityType;
}

export const CreateProjectsLocationsAgentsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1EntityType).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+parent}/entityTypes",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentsEntityTypesRequest>;

export type CreateProjectsLocationsAgentsEntityTypesResponse =
  GoogleCloudDialogflowCxV3beta1EntityType;
export const CreateProjectsLocationsAgentsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1EntityType;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsEntityTypesRequest,
  output: CreateProjectsLocationsAgentsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsEntityTypesRequest {
  languageCode?: string;
  pageSize?: number;
  parent: string;
  pageToken?: string;
}

export const ListProjectsLocationsAgentsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+parent}/entityTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentsEntityTypesRequest>;

export type ListProjectsLocationsAgentsEntityTypesResponse =
  GoogleCloudDialogflowCxV3beta1ListEntityTypesResponse;
export const ListProjectsLocationsAgentsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1ListEntityTypesResponse;

export type ListProjectsLocationsAgentsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsEntityTypes: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsEntityTypesRequest,
  ListProjectsLocationsAgentsEntityTypesResponse,
  ListProjectsLocationsAgentsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsEntityTypesRequest,
  output: ListProjectsLocationsAgentsEntityTypesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ImportProjectsLocationsAgentsEntityTypesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1ImportEntityTypesRequest;
}

export const ImportProjectsLocationsAgentsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ImportEntityTypesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+parent}/entityTypes:import",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ImportProjectsLocationsAgentsEntityTypesRequest>;

export type ImportProjectsLocationsAgentsEntityTypesResponse =
  GoogleLongrunningOperation;
export const ImportProjectsLocationsAgentsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportProjectsLocationsAgentsEntityTypesRequest,
  output: ImportProjectsLocationsAgentsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAgentsEntityTypesRequest {
  name: string;
  force?: boolean;
}

export const DeleteProjectsLocationsAgentsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentsEntityTypesRequest>;

export type DeleteProjectsLocationsAgentsEntityTypesResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsEntityTypesRequest,
  output: DeleteProjectsLocationsAgentsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAgentsEntityTypesRequest {
  name: string;
  languageCode?: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1EntityType;
}

export const PatchProjectsLocationsAgentsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1EntityType).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentsEntityTypesRequest>;

export type PatchProjectsLocationsAgentsEntityTypesResponse =
  GoogleCloudDialogflowCxV3beta1EntityType;
export const PatchProjectsLocationsAgentsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1EntityType;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsEntityTypesRequest,
  output: PatchProjectsLocationsAgentsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsEntityTypesRequest {
  name: string;
  languageCode?: string;
}

export const GetProjectsLocationsAgentsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentsEntityTypesRequest>;

export type GetProjectsLocationsAgentsEntityTypesResponse =
  GoogleCloudDialogflowCxV3beta1EntityType;
export const GetProjectsLocationsAgentsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1EntityType;

export type GetProjectsLocationsAgentsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsEntityTypes: API.OperationMethod<
  GetProjectsLocationsAgentsEntityTypesRequest,
  GetProjectsLocationsAgentsEntityTypesResponse,
  GetProjectsLocationsAgentsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsEntityTypesRequest,
  output: GetProjectsLocationsAgentsEntityTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ExportProjectsLocationsAgentsEntityTypesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1ExportEntityTypesRequest;
}

export const ExportProjectsLocationsAgentsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ExportEntityTypesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+parent}/entityTypes:export",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExportProjectsLocationsAgentsEntityTypesRequest>;

export type ExportProjectsLocationsAgentsEntityTypesResponse =
  GoogleLongrunningOperation;
export const ExportProjectsLocationsAgentsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportProjectsLocationsAgentsEntityTypesRequest,
  output: ExportProjectsLocationsAgentsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsIntentsRequest {
  name: string;
  languageCode?: string;
}

export const GetProjectsLocationsAgentsIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentsIntentsRequest>;

export type GetProjectsLocationsAgentsIntentsResponse =
  GoogleCloudDialogflowCxV3beta1Intent;
export const GetProjectsLocationsAgentsIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Intent;

export type GetProjectsLocationsAgentsIntentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsIntents: API.OperationMethod<
  GetProjectsLocationsAgentsIntentsRequest,
  GetProjectsLocationsAgentsIntentsResponse,
  GetProjectsLocationsAgentsIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsIntentsRequest,
  output: GetProjectsLocationsAgentsIntentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ExportProjectsLocationsAgentsIntentsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1ExportIntentsRequest;
}

export const ExportProjectsLocationsAgentsIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ExportIntentsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+parent}/intents:export",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExportProjectsLocationsAgentsIntentsRequest>;

export type ExportProjectsLocationsAgentsIntentsResponse =
  GoogleLongrunningOperation;
export const ExportProjectsLocationsAgentsIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportProjectsLocationsAgentsIntentsRequest,
  output: ExportProjectsLocationsAgentsIntentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAgentsIntentsRequest {
  name: string;
  languageCode?: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1Intent;
}

export const PatchProjectsLocationsAgentsIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1Intent).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentsIntentsRequest>;

export type PatchProjectsLocationsAgentsIntentsResponse =
  GoogleCloudDialogflowCxV3beta1Intent;
export const PatchProjectsLocationsAgentsIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Intent;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsIntentsRequest,
  output: PatchProjectsLocationsAgentsIntentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAgentsIntentsRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentsIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentsIntentsRequest>;

export type DeleteProjectsLocationsAgentsIntentsResponse = GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsIntentsRequest,
  output: DeleteProjectsLocationsAgentsIntentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ImportProjectsLocationsAgentsIntentsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1ImportIntentsRequest;
}

export const ImportProjectsLocationsAgentsIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ImportIntentsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+parent}/intents:import",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ImportProjectsLocationsAgentsIntentsRequest>;

export type ImportProjectsLocationsAgentsIntentsResponse =
  GoogleLongrunningOperation;
export const ImportProjectsLocationsAgentsIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportProjectsLocationsAgentsIntentsRequest,
  output: ImportProjectsLocationsAgentsIntentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsIntentsRequest {
  pageToken?: string;
  intentView?:
    | "INTENT_VIEW_UNSPECIFIED"
    | "INTENT_VIEW_PARTIAL"
    | "INTENT_VIEW_FULL"
    | (string & {});
  languageCode?: string;
  parent: string;
  pageSize?: number;
}

export const ListProjectsLocationsAgentsIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    intentView: Schema.optional(Schema.String).pipe(T.HttpQuery("intentView")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+parent}/intents" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentsIntentsRequest>;

export type ListProjectsLocationsAgentsIntentsResponse =
  GoogleCloudDialogflowCxV3beta1ListIntentsResponse;
export const ListProjectsLocationsAgentsIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1ListIntentsResponse;

export type ListProjectsLocationsAgentsIntentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsIntents: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsIntentsRequest,
  ListProjectsLocationsAgentsIntentsResponse,
  ListProjectsLocationsAgentsIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsIntentsRequest,
  output: ListProjectsLocationsAgentsIntentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsAgentsIntentsRequest {
  parent: string;
  languageCode?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1Intent;
}

export const CreateProjectsLocationsAgentsIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1Intent).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+parent}/intents",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentsIntentsRequest>;

export type CreateProjectsLocationsAgentsIntentsResponse =
  GoogleCloudDialogflowCxV3beta1Intent;
export const CreateProjectsLocationsAgentsIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Intent;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsIntentsRequest,
  output: CreateProjectsLocationsAgentsIntentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsChangelogsRequest {
  parent: string;
  pageToken?: string;
  filter?: string;
  pageSize?: number;
}

export const ListProjectsLocationsAgentsChangelogsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+parent}/changelogs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentsChangelogsRequest>;

export type ListProjectsLocationsAgentsChangelogsResponse =
  GoogleCloudDialogflowCxV3beta1ListChangelogsResponse;
export const ListProjectsLocationsAgentsChangelogsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1ListChangelogsResponse;

export type ListProjectsLocationsAgentsChangelogsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsChangelogs: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsChangelogsRequest,
  ListProjectsLocationsAgentsChangelogsResponse,
  ListProjectsLocationsAgentsChangelogsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsChangelogsRequest,
  output: ListProjectsLocationsAgentsChangelogsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsAgentsChangelogsRequest {
  name: string;
}

export const GetProjectsLocationsAgentsChangelogsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentsChangelogsRequest>;

export type GetProjectsLocationsAgentsChangelogsResponse =
  GoogleCloudDialogflowCxV3beta1Changelog;
export const GetProjectsLocationsAgentsChangelogsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Changelog;

export type GetProjectsLocationsAgentsChangelogsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsChangelogs: API.OperationMethod<
  GetProjectsLocationsAgentsChangelogsRequest,
  GetProjectsLocationsAgentsChangelogsResponse,
  GetProjectsLocationsAgentsChangelogsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsChangelogsRequest,
  output: GetProjectsLocationsAgentsChangelogsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsAgentsEnvironmentsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1Environment;
}

export const CreateProjectsLocationsAgentsEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1Environment).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+parent}/environments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentsEnvironmentsRequest>;

export type CreateProjectsLocationsAgentsEnvironmentsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsAgentsEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsEnvironmentsRequest,
  output: CreateProjectsLocationsAgentsEnvironmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeployFlowProjectsLocationsAgentsEnvironmentsRequest {
  environment: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1DeployFlowRequest;
}

export const DeployFlowProjectsLocationsAgentsEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    environment: Schema.String.pipe(T.HttpPath("environment")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1DeployFlowRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+environment}:deployFlow",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DeployFlowProjectsLocationsAgentsEnvironmentsRequest>;

export type DeployFlowProjectsLocationsAgentsEnvironmentsResponse =
  GoogleLongrunningOperation;
export const DeployFlowProjectsLocationsAgentsEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeployFlowProjectsLocationsAgentsEnvironmentsRequest,
  output: DeployFlowProjectsLocationsAgentsEnvironmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsEnvironmentsRequest {
  pageSize?: number;
  parent: string;
  pageToken?: string;
}

export const ListProjectsLocationsAgentsEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+parent}/environments" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentsEnvironmentsRequest>;

export type ListProjectsLocationsAgentsEnvironmentsResponse =
  GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse;
export const ListProjectsLocationsAgentsEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse;

export type ListProjectsLocationsAgentsEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsEnvironments: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsEnvironmentsRequest,
  ListProjectsLocationsAgentsEnvironmentsResponse,
  ListProjectsLocationsAgentsEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsEnvironmentsRequest,
  output: ListProjectsLocationsAgentsEnvironmentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsAgentsEnvironmentsRequest {
  name: string;
}

export const GetProjectsLocationsAgentsEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentsEnvironmentsRequest>;

export type GetProjectsLocationsAgentsEnvironmentsResponse =
  GoogleCloudDialogflowCxV3beta1Environment;
export const GetProjectsLocationsAgentsEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Environment;

export type GetProjectsLocationsAgentsEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsEnvironments: API.OperationMethod<
  GetProjectsLocationsAgentsEnvironmentsRequest,
  GetProjectsLocationsAgentsEnvironmentsResponse,
  GetProjectsLocationsAgentsEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsEnvironmentsRequest,
  output: GetProjectsLocationsAgentsEnvironmentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface LookupEnvironmentHistoryProjectsLocationsAgentsEnvironmentsRequest {
  name: string;
  pageToken?: string;
  pageSize?: number;
}

export const LookupEnvironmentHistoryProjectsLocationsAgentsEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}:lookupEnvironmentHistory" }),
    svc,
  ) as unknown as Schema.Schema<LookupEnvironmentHistoryProjectsLocationsAgentsEnvironmentsRequest>;

export type LookupEnvironmentHistoryProjectsLocationsAgentsEnvironmentsResponse =
  GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse;
export const LookupEnvironmentHistoryProjectsLocationsAgentsEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse;

export type LookupEnvironmentHistoryProjectsLocationsAgentsEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const lookupEnvironmentHistoryProjectsLocationsAgentsEnvironments: API.PaginatedOperationMethod<
  LookupEnvironmentHistoryProjectsLocationsAgentsEnvironmentsRequest,
  LookupEnvironmentHistoryProjectsLocationsAgentsEnvironmentsResponse,
  LookupEnvironmentHistoryProjectsLocationsAgentsEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: LookupEnvironmentHistoryProjectsLocationsAgentsEnvironmentsRequest,
  output: LookupEnvironmentHistoryProjectsLocationsAgentsEnvironmentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsAgentsEnvironmentsRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentsEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentsEnvironmentsRequest>;

export type DeleteProjectsLocationsAgentsEnvironmentsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsEnvironmentsRequest,
  output: DeleteProjectsLocationsAgentsEnvironmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAgentsEnvironmentsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1Environment;
}

export const PatchProjectsLocationsAgentsEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1Environment).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentsEnvironmentsRequest>;

export type PatchProjectsLocationsAgentsEnvironmentsResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsAgentsEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsEnvironmentsRequest,
  output: PatchProjectsLocationsAgentsEnvironmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RunContinuousTestProjectsLocationsAgentsEnvironmentsRequest {
  environment: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1RunContinuousTestRequest;
}

export const RunContinuousTestProjectsLocationsAgentsEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    environment: Schema.String.pipe(T.HttpPath("environment")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1RunContinuousTestRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+environment}:runContinuousTest",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RunContinuousTestProjectsLocationsAgentsEnvironmentsRequest>;

export type RunContinuousTestProjectsLocationsAgentsEnvironmentsResponse =
  GoogleLongrunningOperation;
export const RunContinuousTestProjectsLocationsAgentsEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RunContinuousTestProjectsLocationsAgentsEnvironmentsRequest,
  output: RunContinuousTestProjectsLocationsAgentsEnvironmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsEnvironmentsContinuousTestResultsRequest {
  parent: string;
  pageToken?: string;
  pageSize?: number;
}

export const ListProjectsLocationsAgentsEnvironmentsContinuousTestResultsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+parent}/continuousTestResults" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentsEnvironmentsContinuousTestResultsRequest>;

export type ListProjectsLocationsAgentsEnvironmentsContinuousTestResultsResponse =
  GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponse;
export const ListProjectsLocationsAgentsEnvironmentsContinuousTestResultsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponse;

export type ListProjectsLocationsAgentsEnvironmentsContinuousTestResultsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsEnvironmentsContinuousTestResults: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsEnvironmentsContinuousTestResultsRequest,
  ListProjectsLocationsAgentsEnvironmentsContinuousTestResultsResponse,
  ListProjectsLocationsAgentsEnvironmentsContinuousTestResultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
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
  body?: GoogleCloudDialogflowCxV3beta1DetectIntentRequest;
}

export const DetectIntentProjectsLocationsAgentsEnvironmentsSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.HttpPath("session")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1DetectIntentRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+session}:detectIntent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DetectIntentProjectsLocationsAgentsEnvironmentsSessionsRequest>;

export type DetectIntentProjectsLocationsAgentsEnvironmentsSessionsResponse =
  GoogleCloudDialogflowCxV3beta1DetectIntentResponse;
export const DetectIntentProjectsLocationsAgentsEnvironmentsSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1DetectIntentResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DetectIntentProjectsLocationsAgentsEnvironmentsSessionsRequest,
  output: DetectIntentProjectsLocationsAgentsEnvironmentsSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MatchIntentProjectsLocationsAgentsEnvironmentsSessionsRequest {
  session: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1MatchIntentRequest;
}

export const MatchIntentProjectsLocationsAgentsEnvironmentsSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.HttpPath("session")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1MatchIntentRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+session}:matchIntent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<MatchIntentProjectsLocationsAgentsEnvironmentsSessionsRequest>;

export type MatchIntentProjectsLocationsAgentsEnvironmentsSessionsResponse =
  GoogleCloudDialogflowCxV3beta1MatchIntentResponse;
export const MatchIntentProjectsLocationsAgentsEnvironmentsSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1MatchIntentResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MatchIntentProjectsLocationsAgentsEnvironmentsSessionsRequest,
  output: MatchIntentProjectsLocationsAgentsEnvironmentsSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FulfillIntentProjectsLocationsAgentsEnvironmentsSessionsRequest {
  session: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1FulfillIntentRequest;
}

export const FulfillIntentProjectsLocationsAgentsEnvironmentsSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.HttpPath("session")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1FulfillIntentRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+session}:fulfillIntent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<FulfillIntentProjectsLocationsAgentsEnvironmentsSessionsRequest>;

export type FulfillIntentProjectsLocationsAgentsEnvironmentsSessionsResponse =
  GoogleCloudDialogflowCxV3beta1FulfillIntentResponse;
export const FulfillIntentProjectsLocationsAgentsEnvironmentsSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1FulfillIntentResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FulfillIntentProjectsLocationsAgentsEnvironmentsSessionsRequest,
  output: FulfillIntentProjectsLocationsAgentsEnvironmentsSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ServerStreamingDetectIntentProjectsLocationsAgentsEnvironmentsSessionsRequest {
  session: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1DetectIntentRequest;
}

export const ServerStreamingDetectIntentProjectsLocationsAgentsEnvironmentsSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.HttpPath("session")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1DetectIntentRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+session}:serverStreamingDetectIntent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ServerStreamingDetectIntentProjectsLocationsAgentsEnvironmentsSessionsRequest>;

export type ServerStreamingDetectIntentProjectsLocationsAgentsEnvironmentsSessionsResponse =
  GoogleCloudDialogflowCxV3beta1DetectIntentResponse;
export const ServerStreamingDetectIntentProjectsLocationsAgentsEnvironmentsSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1DetectIntentResponse;

export type ServerStreamingDetectIntentProjectsLocationsAgentsEnvironmentsSessionsError =
  DefaultErrors | NotFound | Forbidden | BadRequest | Conflict;

export const serverStreamingDetectIntentProjectsLocationsAgentsEnvironmentsSessions: API.OperationMethod<
  ServerStreamingDetectIntentProjectsLocationsAgentsEnvironmentsSessionsRequest,
  ServerStreamingDetectIntentProjectsLocationsAgentsEnvironmentsSessionsResponse,
  ServerStreamingDetectIntentProjectsLocationsAgentsEnvironmentsSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    ServerStreamingDetectIntentProjectsLocationsAgentsEnvironmentsSessionsRequest,
  output:
    ServerStreamingDetectIntentProjectsLocationsAgentsEnvironmentsSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1SessionEntityType;
}

export const CreateProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1SessionEntityType).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+parent}/entityTypes",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest>;

export type CreateProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse =
  GoogleCloudDialogflowCxV3beta1SessionEntityType;
export const CreateProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1SessionEntityType;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest,
  output: CreateProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest {
  pageSize?: number;
  parent: string;
  pageToken?: string;
}

export const ListProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+parent}/entityTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest>;

export type ListProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse =
  GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse;
export const ListProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse;

export type ListProjectsLocationsAgentsEnvironmentsSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsEnvironmentsSessionsEntityTypes: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest,
  ListProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse,
  ListProjectsLocationsAgentsEnvironmentsSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest,
  output: ListProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest>;

export type DeleteProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest,
  output: DeleteProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1SessionEntityType;
}

export const PatchProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1SessionEntityType).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest>;

export type PatchProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse =
  GoogleCloudDialogflowCxV3beta1SessionEntityType;
export const PatchProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1SessionEntityType;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest,
  output: PatchProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest {
  name: string;
}

export const GetProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest>;

export type GetProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse =
  GoogleCloudDialogflowCxV3beta1SessionEntityType;
export const GetProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1SessionEntityType;

export type GetProjectsLocationsAgentsEnvironmentsSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsEnvironmentsSessionsEntityTypes: API.OperationMethod<
  GetProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest,
  GetProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse,
  GetProjectsLocationsAgentsEnvironmentsSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest,
  output: GetProjectsLocationsAgentsEnvironmentsSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsAgentsEnvironmentsDeploymentsRequest {
  pageSize?: number;
  parent: string;
  pageToken?: string;
}

export const ListProjectsLocationsAgentsEnvironmentsDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+parent}/deployments" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentsEnvironmentsDeploymentsRequest>;

export type ListProjectsLocationsAgentsEnvironmentsDeploymentsResponse =
  GoogleCloudDialogflowCxV3beta1ListDeploymentsResponse;
export const ListProjectsLocationsAgentsEnvironmentsDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1ListDeploymentsResponse;

export type ListProjectsLocationsAgentsEnvironmentsDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsEnvironmentsDeployments: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsEnvironmentsDeploymentsRequest,
  ListProjectsLocationsAgentsEnvironmentsDeploymentsResponse,
  ListProjectsLocationsAgentsEnvironmentsDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsEnvironmentsDeploymentsRequest,
  output: ListProjectsLocationsAgentsEnvironmentsDeploymentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsAgentsEnvironmentsDeploymentsRequest {
  name: string;
}

export const GetProjectsLocationsAgentsEnvironmentsDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentsEnvironmentsDeploymentsRequest>;

export type GetProjectsLocationsAgentsEnvironmentsDeploymentsResponse =
  GoogleCloudDialogflowCxV3beta1Deployment;
export const GetProjectsLocationsAgentsEnvironmentsDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Deployment;

export type GetProjectsLocationsAgentsEnvironmentsDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsEnvironmentsDeployments: API.OperationMethod<
  GetProjectsLocationsAgentsEnvironmentsDeploymentsRequest,
  GetProjectsLocationsAgentsEnvironmentsDeploymentsResponse,
  GetProjectsLocationsAgentsEnvironmentsDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsEnvironmentsDeploymentsRequest,
  output: GetProjectsLocationsAgentsEnvironmentsDeploymentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsAgentsEnvironmentsExperimentsRequest {
  name: string;
}

export const GetProjectsLocationsAgentsEnvironmentsExperimentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentsEnvironmentsExperimentsRequest>;

export type GetProjectsLocationsAgentsEnvironmentsExperimentsResponse =
  GoogleCloudDialogflowCxV3beta1Experiment;
export const GetProjectsLocationsAgentsEnvironmentsExperimentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Experiment;

export type GetProjectsLocationsAgentsEnvironmentsExperimentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsEnvironmentsExperiments: API.OperationMethod<
  GetProjectsLocationsAgentsEnvironmentsExperimentsRequest,
  GetProjectsLocationsAgentsEnvironmentsExperimentsResponse,
  GetProjectsLocationsAgentsEnvironmentsExperimentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsEnvironmentsExperimentsRequest,
  output: GetProjectsLocationsAgentsEnvironmentsExperimentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsAgentsEnvironmentsExperimentsRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentsEnvironmentsExperimentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentsEnvironmentsExperimentsRequest>;

export type DeleteProjectsLocationsAgentsEnvironmentsExperimentsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsEnvironmentsExperimentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsEnvironmentsExperimentsRequest,
  output: DeleteProjectsLocationsAgentsEnvironmentsExperimentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StartProjectsLocationsAgentsEnvironmentsExperimentsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1StartExperimentRequest;
}

export const StartProjectsLocationsAgentsEnvironmentsExperimentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1StartExperimentRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3beta1/{+name}:start", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<StartProjectsLocationsAgentsEnvironmentsExperimentsRequest>;

export type StartProjectsLocationsAgentsEnvironmentsExperimentsResponse =
  GoogleCloudDialogflowCxV3beta1Experiment;
export const StartProjectsLocationsAgentsEnvironmentsExperimentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Experiment;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StartProjectsLocationsAgentsEnvironmentsExperimentsRequest,
  output: StartProjectsLocationsAgentsEnvironmentsExperimentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAgentsEnvironmentsExperimentsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1Experiment;
}

export const PatchProjectsLocationsAgentsEnvironmentsExperimentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1Experiment).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentsEnvironmentsExperimentsRequest>;

export type PatchProjectsLocationsAgentsEnvironmentsExperimentsResponse =
  GoogleCloudDialogflowCxV3beta1Experiment;
export const PatchProjectsLocationsAgentsEnvironmentsExperimentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Experiment;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsEnvironmentsExperimentsRequest,
  output: PatchProjectsLocationsAgentsEnvironmentsExperimentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StopProjectsLocationsAgentsEnvironmentsExperimentsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1StopExperimentRequest;
}

export const StopProjectsLocationsAgentsEnvironmentsExperimentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1StopExperimentRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3beta1/{+name}:stop", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<StopProjectsLocationsAgentsEnvironmentsExperimentsRequest>;

export type StopProjectsLocationsAgentsEnvironmentsExperimentsResponse =
  GoogleCloudDialogflowCxV3beta1Experiment;
export const StopProjectsLocationsAgentsEnvironmentsExperimentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Experiment;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StopProjectsLocationsAgentsEnvironmentsExperimentsRequest,
  output: StopProjectsLocationsAgentsEnvironmentsExperimentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAgentsEnvironmentsExperimentsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1Experiment;
}

export const CreateProjectsLocationsAgentsEnvironmentsExperimentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1Experiment).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+parent}/experiments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentsEnvironmentsExperimentsRequest>;

export type CreateProjectsLocationsAgentsEnvironmentsExperimentsResponse =
  GoogleCloudDialogflowCxV3beta1Experiment;
export const CreateProjectsLocationsAgentsEnvironmentsExperimentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Experiment;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsEnvironmentsExperimentsRequest,
  output: CreateProjectsLocationsAgentsEnvironmentsExperimentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsEnvironmentsExperimentsRequest {
  parent: string;
  pageToken?: string;
  pageSize?: number;
}

export const ListProjectsLocationsAgentsEnvironmentsExperimentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+parent}/experiments" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentsEnvironmentsExperimentsRequest>;

export type ListProjectsLocationsAgentsEnvironmentsExperimentsResponse =
  GoogleCloudDialogflowCxV3beta1ListExperimentsResponse;
export const ListProjectsLocationsAgentsEnvironmentsExperimentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1ListExperimentsResponse;

export type ListProjectsLocationsAgentsEnvironmentsExperimentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsEnvironmentsExperiments: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsEnvironmentsExperimentsRequest,
  ListProjectsLocationsAgentsEnvironmentsExperimentsResponse,
  ListProjectsLocationsAgentsEnvironmentsExperimentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsEnvironmentsExperimentsRequest,
  output: ListProjectsLocationsAgentsEnvironmentsExperimentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ServerStreamingDetectIntentProjectsLocationsAgentsSessionsRequest {
  session: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1DetectIntentRequest;
}

export const ServerStreamingDetectIntentProjectsLocationsAgentsSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.HttpPath("session")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1DetectIntentRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+session}:serverStreamingDetectIntent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ServerStreamingDetectIntentProjectsLocationsAgentsSessionsRequest>;

export type ServerStreamingDetectIntentProjectsLocationsAgentsSessionsResponse =
  GoogleCloudDialogflowCxV3beta1DetectIntentResponse;
export const ServerStreamingDetectIntentProjectsLocationsAgentsSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1DetectIntentResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ServerStreamingDetectIntentProjectsLocationsAgentsSessionsRequest,
  output: ServerStreamingDetectIntentProjectsLocationsAgentsSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FulfillIntentProjectsLocationsAgentsSessionsRequest {
  session: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1FulfillIntentRequest;
}

export const FulfillIntentProjectsLocationsAgentsSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.HttpPath("session")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1FulfillIntentRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+session}:fulfillIntent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<FulfillIntentProjectsLocationsAgentsSessionsRequest>;

export type FulfillIntentProjectsLocationsAgentsSessionsResponse =
  GoogleCloudDialogflowCxV3beta1FulfillIntentResponse;
export const FulfillIntentProjectsLocationsAgentsSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1FulfillIntentResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FulfillIntentProjectsLocationsAgentsSessionsRequest,
  output: FulfillIntentProjectsLocationsAgentsSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DetectIntentProjectsLocationsAgentsSessionsRequest {
  session: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1DetectIntentRequest;
}

export const DetectIntentProjectsLocationsAgentsSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.HttpPath("session")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1DetectIntentRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+session}:detectIntent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DetectIntentProjectsLocationsAgentsSessionsRequest>;

export type DetectIntentProjectsLocationsAgentsSessionsResponse =
  GoogleCloudDialogflowCxV3beta1DetectIntentResponse;
export const DetectIntentProjectsLocationsAgentsSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1DetectIntentResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DetectIntentProjectsLocationsAgentsSessionsRequest,
  output: DetectIntentProjectsLocationsAgentsSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SubmitAnswerFeedbackProjectsLocationsAgentsSessionsRequest {
  session: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1SubmitAnswerFeedbackRequest;
}

export const SubmitAnswerFeedbackProjectsLocationsAgentsSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.HttpPath("session")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1SubmitAnswerFeedbackRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+session}:submitAnswerFeedback",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SubmitAnswerFeedbackProjectsLocationsAgentsSessionsRequest>;

export type SubmitAnswerFeedbackProjectsLocationsAgentsSessionsResponse =
  GoogleCloudDialogflowCxV3beta1AnswerFeedback;
export const SubmitAnswerFeedbackProjectsLocationsAgentsSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1AnswerFeedback;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SubmitAnswerFeedbackProjectsLocationsAgentsSessionsRequest,
  output: SubmitAnswerFeedbackProjectsLocationsAgentsSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MatchIntentProjectsLocationsAgentsSessionsRequest {
  session: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1MatchIntentRequest;
}

export const MatchIntentProjectsLocationsAgentsSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.HttpPath("session")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1MatchIntentRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+session}:matchIntent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<MatchIntentProjectsLocationsAgentsSessionsRequest>;

export type MatchIntentProjectsLocationsAgentsSessionsResponse =
  GoogleCloudDialogflowCxV3beta1MatchIntentResponse;
export const MatchIntentProjectsLocationsAgentsSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1MatchIntentResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MatchIntentProjectsLocationsAgentsSessionsRequest,
  output: MatchIntentProjectsLocationsAgentsSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAgentsSessionsEntityTypesRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentsSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentsSessionsEntityTypesRequest>;

export type DeleteProjectsLocationsAgentsSessionsEntityTypesResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsSessionsEntityTypesRequest,
  output: DeleteProjectsLocationsAgentsSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAgentsSessionsEntityTypesRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1SessionEntityType;
}

export const PatchProjectsLocationsAgentsSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1SessionEntityType).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentsSessionsEntityTypesRequest>;

export type PatchProjectsLocationsAgentsSessionsEntityTypesResponse =
  GoogleCloudDialogflowCxV3beta1SessionEntityType;
export const PatchProjectsLocationsAgentsSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1SessionEntityType;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsSessionsEntityTypesRequest,
  output: PatchProjectsLocationsAgentsSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsSessionsEntityTypesRequest {
  name: string;
}

export const GetProjectsLocationsAgentsSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentsSessionsEntityTypesRequest>;

export type GetProjectsLocationsAgentsSessionsEntityTypesResponse =
  GoogleCloudDialogflowCxV3beta1SessionEntityType;
export const GetProjectsLocationsAgentsSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1SessionEntityType;

export type GetProjectsLocationsAgentsSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsSessionsEntityTypes: API.OperationMethod<
  GetProjectsLocationsAgentsSessionsEntityTypesRequest,
  GetProjectsLocationsAgentsSessionsEntityTypesResponse,
  GetProjectsLocationsAgentsSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsSessionsEntityTypesRequest,
  output: GetProjectsLocationsAgentsSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsAgentsSessionsEntityTypesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1SessionEntityType;
}

export const CreateProjectsLocationsAgentsSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1SessionEntityType).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+parent}/entityTypes",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentsSessionsEntityTypesRequest>;

export type CreateProjectsLocationsAgentsSessionsEntityTypesResponse =
  GoogleCloudDialogflowCxV3beta1SessionEntityType;
export const CreateProjectsLocationsAgentsSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1SessionEntityType;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsSessionsEntityTypesRequest,
  output: CreateProjectsLocationsAgentsSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsSessionsEntityTypesRequest {
  pageSize?: number;
  parent: string;
  pageToken?: string;
}

export const ListProjectsLocationsAgentsSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+parent}/entityTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentsSessionsEntityTypesRequest>;

export type ListProjectsLocationsAgentsSessionsEntityTypesResponse =
  GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse;
export const ListProjectsLocationsAgentsSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse;

export type ListProjectsLocationsAgentsSessionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsSessionsEntityTypes: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsSessionsEntityTypesRequest,
  ListProjectsLocationsAgentsSessionsEntityTypesResponse,
  ListProjectsLocationsAgentsSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsSessionsEntityTypesRequest,
  output: ListProjectsLocationsAgentsSessionsEntityTypesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ValidateProjectsLocationsAgentsFlowsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1ValidateFlowRequest;
}

export const ValidateProjectsLocationsAgentsFlowsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ValidateFlowRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3beta1/{+name}:validate", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ValidateProjectsLocationsAgentsFlowsRequest>;

export type ValidateProjectsLocationsAgentsFlowsResponse =
  GoogleCloudDialogflowCxV3beta1FlowValidationResult;
export const ValidateProjectsLocationsAgentsFlowsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1FlowValidationResult;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ValidateProjectsLocationsAgentsFlowsRequest,
  output: ValidateProjectsLocationsAgentsFlowsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ImportProjectsLocationsAgentsFlowsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1ImportFlowRequest;
}

export const ImportProjectsLocationsAgentsFlowsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1ImportFlowRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+parent}/flows:import",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ImportProjectsLocationsAgentsFlowsRequest>;

export type ImportProjectsLocationsAgentsFlowsResponse =
  GoogleLongrunningOperation;
export const ImportProjectsLocationsAgentsFlowsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportProjectsLocationsAgentsFlowsRequest,
  output: ImportProjectsLocationsAgentsFlowsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAgentsFlowsRequest {
  name: string;
  force?: boolean;
}

export const DeleteProjectsLocationsAgentsFlowsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentsFlowsRequest>;

export type DeleteProjectsLocationsAgentsFlowsResponse = GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsFlowsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsFlowsRequest,
  output: DeleteProjectsLocationsAgentsFlowsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExportProjectsLocationsAgentsFlowsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1ExportFlowRequest;
}

export const ExportProjectsLocationsAgentsFlowsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1ExportFlowRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v3beta1/{+name}:export", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ExportProjectsLocationsAgentsFlowsRequest>;

export type ExportProjectsLocationsAgentsFlowsResponse =
  GoogleLongrunningOperation;
export const ExportProjectsLocationsAgentsFlowsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportProjectsLocationsAgentsFlowsRequest,
  output: ExportProjectsLocationsAgentsFlowsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAgentsFlowsRequest {
  parent: string;
  languageCode?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1Flow;
}

export const CreateProjectsLocationsAgentsFlowsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1Flow).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v3beta1/{+parent}/flows", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentsFlowsRequest>;

export type CreateProjectsLocationsAgentsFlowsResponse =
  GoogleCloudDialogflowCxV3beta1Flow;
export const CreateProjectsLocationsAgentsFlowsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Flow;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsFlowsRequest,
  output: CreateProjectsLocationsAgentsFlowsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsFlowsRequest {
  languageCode?: string;
  parent: string;
  pageToken?: string;
  pageSize?: number;
}

export const ListProjectsLocationsAgentsFlowsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+parent}/flows" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentsFlowsRequest>;

export type ListProjectsLocationsAgentsFlowsResponse =
  GoogleCloudDialogflowCxV3beta1ListFlowsResponse;
export const ListProjectsLocationsAgentsFlowsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1ListFlowsResponse;

export type ListProjectsLocationsAgentsFlowsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsFlows: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsFlowsRequest,
  ListProjectsLocationsAgentsFlowsResponse,
  ListProjectsLocationsAgentsFlowsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
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
  body?: GoogleCloudDialogflowCxV3beta1Flow;
}

export const PatchProjectsLocationsAgentsFlowsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1Flow).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentsFlowsRequest>;

export type PatchProjectsLocationsAgentsFlowsResponse =
  GoogleCloudDialogflowCxV3beta1Flow;
export const PatchProjectsLocationsAgentsFlowsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Flow;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsFlowsRequest,
  output: PatchProjectsLocationsAgentsFlowsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TrainProjectsLocationsAgentsFlowsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1TrainFlowRequest;
}

export const TrainProjectsLocationsAgentsFlowsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1TrainFlowRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v3beta1/{+name}:train", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<TrainProjectsLocationsAgentsFlowsRequest>;

export type TrainProjectsLocationsAgentsFlowsResponse =
  GoogleLongrunningOperation;
export const TrainProjectsLocationsAgentsFlowsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TrainProjectsLocationsAgentsFlowsRequest,
  output: TrainProjectsLocationsAgentsFlowsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetValidationResultProjectsLocationsAgentsFlowsRequest {
  languageCode?: string;
  name: string;
}

export const GetValidationResultProjectsLocationsAgentsFlowsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetValidationResultProjectsLocationsAgentsFlowsRequest>;

export type GetValidationResultProjectsLocationsAgentsFlowsResponse =
  GoogleCloudDialogflowCxV3beta1FlowValidationResult;
export const GetValidationResultProjectsLocationsAgentsFlowsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1FlowValidationResult;

export type GetValidationResultProjectsLocationsAgentsFlowsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getValidationResultProjectsLocationsAgentsFlows: API.OperationMethod<
  GetValidationResultProjectsLocationsAgentsFlowsRequest,
  GetValidationResultProjectsLocationsAgentsFlowsResponse,
  GetValidationResultProjectsLocationsAgentsFlowsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetValidationResultProjectsLocationsAgentsFlowsRequest,
  output: GetValidationResultProjectsLocationsAgentsFlowsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsAgentsFlowsRequest {
  languageCode?: string;
  name: string;
}

export const GetProjectsLocationsAgentsFlowsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentsFlowsRequest>;

export type GetProjectsLocationsAgentsFlowsResponse =
  GoogleCloudDialogflowCxV3beta1Flow;
export const GetProjectsLocationsAgentsFlowsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Flow;

export type GetProjectsLocationsAgentsFlowsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsFlows: API.OperationMethod<
  GetProjectsLocationsAgentsFlowsRequest,
  GetProjectsLocationsAgentsFlowsResponse,
  GetProjectsLocationsAgentsFlowsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsFlowsRequest,
  output: GetProjectsLocationsAgentsFlowsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsAgentsFlowsPagesRequest {
  name: string;
  force?: boolean;
}

export const DeleteProjectsLocationsAgentsFlowsPagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentsFlowsPagesRequest>;

export type DeleteProjectsLocationsAgentsFlowsPagesResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsFlowsPagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsFlowsPagesRequest,
  output: DeleteProjectsLocationsAgentsFlowsPagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAgentsFlowsPagesRequest {
  name: string;
  languageCode?: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1Page;
}

export const PatchProjectsLocationsAgentsFlowsPagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1Page).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentsFlowsPagesRequest>;

export type PatchProjectsLocationsAgentsFlowsPagesResponse =
  GoogleCloudDialogflowCxV3beta1Page;
export const PatchProjectsLocationsAgentsFlowsPagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Page;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsFlowsPagesRequest,
  output: PatchProjectsLocationsAgentsFlowsPagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsFlowsPagesRequest {
  name: string;
  languageCode?: string;
}

export const GetProjectsLocationsAgentsFlowsPagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentsFlowsPagesRequest>;

export type GetProjectsLocationsAgentsFlowsPagesResponse =
  GoogleCloudDialogflowCxV3beta1Page;
export const GetProjectsLocationsAgentsFlowsPagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Page;

export type GetProjectsLocationsAgentsFlowsPagesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsFlowsPages: API.OperationMethod<
  GetProjectsLocationsAgentsFlowsPagesRequest,
  GetProjectsLocationsAgentsFlowsPagesResponse,
  GetProjectsLocationsAgentsFlowsPagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsFlowsPagesRequest,
  output: GetProjectsLocationsAgentsFlowsPagesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsAgentsFlowsPagesRequest {
  parent: string;
  languageCode?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1Page;
}

export const CreateProjectsLocationsAgentsFlowsPagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1Page).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v3beta1/{+parent}/pages", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentsFlowsPagesRequest>;

export type CreateProjectsLocationsAgentsFlowsPagesResponse =
  GoogleCloudDialogflowCxV3beta1Page;
export const CreateProjectsLocationsAgentsFlowsPagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Page;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsFlowsPagesRequest,
  output: CreateProjectsLocationsAgentsFlowsPagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsFlowsPagesRequest {
  pageSize?: number;
  parent: string;
  pageToken?: string;
  languageCode?: string;
}

export const ListProjectsLocationsAgentsFlowsPagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+parent}/pages" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentsFlowsPagesRequest>;

export type ListProjectsLocationsAgentsFlowsPagesResponse =
  GoogleCloudDialogflowCxV3beta1ListPagesResponse;
export const ListProjectsLocationsAgentsFlowsPagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1ListPagesResponse;

export type ListProjectsLocationsAgentsFlowsPagesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsFlowsPages: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsFlowsPagesRequest,
  ListProjectsLocationsAgentsFlowsPagesResponse,
  ListProjectsLocationsAgentsFlowsPagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsFlowsPagesRequest,
  output: ListProjectsLocationsAgentsFlowsPagesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest {
  parent: string;
  languageCode?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1TransitionRouteGroup;
}

export const CreateProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1TransitionRouteGroup,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+parent}/transitionRouteGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest>;

export type CreateProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse =
  GoogleCloudDialogflowCxV3beta1TransitionRouteGroup;
export const CreateProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1TransitionRouteGroup;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest,
  output: CreateProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest {
  languageCode?: string;
  parent: string;
  pageToken?: string;
  pageSize?: number;
}

export const ListProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+parent}/transitionRouteGroups" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest>;

export type ListProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse =
  GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse;
export const ListProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse;

export type ListProjectsLocationsAgentsFlowsTransitionRouteGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsFlowsTransitionRouteGroups: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest,
  ListProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse,
  ListProjectsLocationsAgentsFlowsTransitionRouteGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest,
  output: ListProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest {
  name: string;
  force?: boolean;
}

export const DeleteProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest>;

export type DeleteProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest,
  output: DeleteProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest {
  updateMask?: string;
  languageCode?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1TransitionRouteGroup;
}

export const PatchProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1TransitionRouteGroup,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest>;

export type PatchProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse =
  GoogleCloudDialogflowCxV3beta1TransitionRouteGroup;
export const PatchProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1TransitionRouteGroup;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest,
  output: PatchProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest {
  name: string;
  languageCode?: string;
}

export const GetProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest>;

export type GetProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse =
  GoogleCloudDialogflowCxV3beta1TransitionRouteGroup;
export const GetProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1TransitionRouteGroup;

export type GetProjectsLocationsAgentsFlowsTransitionRouteGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsFlowsTransitionRouteGroups: API.OperationMethod<
  GetProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest,
  GetProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse,
  GetProjectsLocationsAgentsFlowsTransitionRouteGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest,
  output: GetProjectsLocationsAgentsFlowsTransitionRouteGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsAgentsFlowsVersionsRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentsFlowsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentsFlowsVersionsRequest>;

export type DeleteProjectsLocationsAgentsFlowsVersionsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsFlowsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsFlowsVersionsRequest,
  output: DeleteProjectsLocationsAgentsFlowsVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAgentsFlowsVersionsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1Version;
}

export const PatchProjectsLocationsAgentsFlowsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1Version).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentsFlowsVersionsRequest>;

export type PatchProjectsLocationsAgentsFlowsVersionsResponse =
  GoogleCloudDialogflowCxV3beta1Version;
export const PatchProjectsLocationsAgentsFlowsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Version;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsFlowsVersionsRequest,
  output: PatchProjectsLocationsAgentsFlowsVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface LoadProjectsLocationsAgentsFlowsVersionsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1LoadVersionRequest;
}

export const LoadProjectsLocationsAgentsFlowsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1LoadVersionRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3beta1/{+name}:load", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<LoadProjectsLocationsAgentsFlowsVersionsRequest>;

export type LoadProjectsLocationsAgentsFlowsVersionsResponse =
  GoogleLongrunningOperation;
export const LoadProjectsLocationsAgentsFlowsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LoadProjectsLocationsAgentsFlowsVersionsRequest,
  output: LoadProjectsLocationsAgentsFlowsVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsFlowsVersionsRequest {
  name: string;
}

export const GetProjectsLocationsAgentsFlowsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentsFlowsVersionsRequest>;

export type GetProjectsLocationsAgentsFlowsVersionsResponse =
  GoogleCloudDialogflowCxV3beta1Version;
export const GetProjectsLocationsAgentsFlowsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Version;

export type GetProjectsLocationsAgentsFlowsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsFlowsVersions: API.OperationMethod<
  GetProjectsLocationsAgentsFlowsVersionsRequest,
  GetProjectsLocationsAgentsFlowsVersionsResponse,
  GetProjectsLocationsAgentsFlowsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsFlowsVersionsRequest,
  output: GetProjectsLocationsAgentsFlowsVersionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsAgentsFlowsVersionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1Version;
}

export const CreateProjectsLocationsAgentsFlowsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1Version).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+parent}/versions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentsFlowsVersionsRequest>;

export type CreateProjectsLocationsAgentsFlowsVersionsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsAgentsFlowsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsFlowsVersionsRequest,
  output: CreateProjectsLocationsAgentsFlowsVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsFlowsVersionsRequest {
  pageSize?: number;
  parent: string;
  pageToken?: string;
}

export const ListProjectsLocationsAgentsFlowsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+parent}/versions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentsFlowsVersionsRequest>;

export type ListProjectsLocationsAgentsFlowsVersionsResponse =
  GoogleCloudDialogflowCxV3beta1ListVersionsResponse;
export const ListProjectsLocationsAgentsFlowsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1ListVersionsResponse;

export type ListProjectsLocationsAgentsFlowsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsFlowsVersions: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsFlowsVersionsRequest,
  ListProjectsLocationsAgentsFlowsVersionsResponse,
  ListProjectsLocationsAgentsFlowsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsFlowsVersionsRequest,
  output: ListProjectsLocationsAgentsFlowsVersionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CompareVersionsProjectsLocationsAgentsFlowsVersionsRequest {
  baseVersion: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1CompareVersionsRequest;
}

export const CompareVersionsProjectsLocationsAgentsFlowsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    baseVersion: Schema.String.pipe(T.HttpPath("baseVersion")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1CompareVersionsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+baseVersion}:compareVersions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CompareVersionsProjectsLocationsAgentsFlowsVersionsRequest>;

export type CompareVersionsProjectsLocationsAgentsFlowsVersionsResponse =
  GoogleCloudDialogflowCxV3beta1CompareVersionsResponse;
export const CompareVersionsProjectsLocationsAgentsFlowsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1CompareVersionsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CompareVersionsProjectsLocationsAgentsFlowsVersionsRequest,
  output: CompareVersionsProjectsLocationsAgentsFlowsVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsConversationsRequest {
  name: string;
}

export const GetProjectsLocationsAgentsConversationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentsConversationsRequest>;

export type GetProjectsLocationsAgentsConversationsResponse =
  GoogleCloudDialogflowCxV3beta1Conversation;
export const GetProjectsLocationsAgentsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Conversation;

export type GetProjectsLocationsAgentsConversationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsConversations: API.OperationMethod<
  GetProjectsLocationsAgentsConversationsRequest,
  GetProjectsLocationsAgentsConversationsResponse,
  GetProjectsLocationsAgentsConversationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsConversationsRequest,
  output: GetProjectsLocationsAgentsConversationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsAgentsConversationsRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentsConversationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentsConversationsRequest>;

export type DeleteProjectsLocationsAgentsConversationsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentsConversationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsAgentsConversations: API.OperationMethod<
  DeleteProjectsLocationsAgentsConversationsRequest,
  DeleteProjectsLocationsAgentsConversationsResponse,
  DeleteProjectsLocationsAgentsConversationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsConversationsRequest,
  output: DeleteProjectsLocationsAgentsConversationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsConversationsRequest {
  parent: string;
  pageToken?: string;
  filter?: string;
  pageSize?: number;
}

export const ListProjectsLocationsAgentsConversationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+parent}/conversations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentsConversationsRequest>;

export type ListProjectsLocationsAgentsConversationsResponse =
  GoogleCloudDialogflowCxV3beta1ListConversationsResponse;
export const ListProjectsLocationsAgentsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1ListConversationsResponse;

export type ListProjectsLocationsAgentsConversationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsConversations: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsConversationsRequest,
  ListProjectsLocationsAgentsConversationsResponse,
  ListProjectsLocationsAgentsConversationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsConversationsRequest,
  output: ListProjectsLocationsAgentsConversationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsAgentsPlaybooksRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1Playbook;
}

export const CreateProjectsLocationsAgentsPlaybooksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1Playbook).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+parent}/playbooks",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentsPlaybooksRequest>;

export type CreateProjectsLocationsAgentsPlaybooksResponse =
  GoogleCloudDialogflowCxV3beta1Playbook;
export const CreateProjectsLocationsAgentsPlaybooksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Playbook;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsPlaybooksRequest,
  output: CreateProjectsLocationsAgentsPlaybooksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsPlaybooksRequest {
  parent: string;
  pageToken?: string;
  pageSize?: number;
}

export const ListProjectsLocationsAgentsPlaybooksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+parent}/playbooks" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentsPlaybooksRequest>;

export type ListProjectsLocationsAgentsPlaybooksResponse =
  GoogleCloudDialogflowCxV3beta1ListPlaybooksResponse;
export const ListProjectsLocationsAgentsPlaybooksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1ListPlaybooksResponse;

export type ListProjectsLocationsAgentsPlaybooksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsPlaybooks: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsPlaybooksRequest,
  ListProjectsLocationsAgentsPlaybooksResponse,
  ListProjectsLocationsAgentsPlaybooksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsPlaybooksRequest,
  output: ListProjectsLocationsAgentsPlaybooksResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ImportProjectsLocationsAgentsPlaybooksRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1ImportPlaybookRequest;
}

export const ImportProjectsLocationsAgentsPlaybooksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ImportPlaybookRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+parent}/playbooks:import",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ImportProjectsLocationsAgentsPlaybooksRequest>;

export type ImportProjectsLocationsAgentsPlaybooksResponse =
  GoogleLongrunningOperation;
export const ImportProjectsLocationsAgentsPlaybooksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportProjectsLocationsAgentsPlaybooksRequest,
  output: ImportProjectsLocationsAgentsPlaybooksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAgentsPlaybooksRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentsPlaybooksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentsPlaybooksRequest>;

export type DeleteProjectsLocationsAgentsPlaybooksResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsPlaybooksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsPlaybooksRequest,
  output: DeleteProjectsLocationsAgentsPlaybooksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAgentsPlaybooksRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1Playbook;
}

export const PatchProjectsLocationsAgentsPlaybooksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1Playbook).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentsPlaybooksRequest>;

export type PatchProjectsLocationsAgentsPlaybooksResponse =
  GoogleCloudDialogflowCxV3beta1Playbook;
export const PatchProjectsLocationsAgentsPlaybooksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Playbook;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsPlaybooksRequest,
  output: PatchProjectsLocationsAgentsPlaybooksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsPlaybooksRequest {
  name: string;
}

export const GetProjectsLocationsAgentsPlaybooksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentsPlaybooksRequest>;

export type GetProjectsLocationsAgentsPlaybooksResponse =
  GoogleCloudDialogflowCxV3beta1Playbook;
export const GetProjectsLocationsAgentsPlaybooksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Playbook;

export type GetProjectsLocationsAgentsPlaybooksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsPlaybooks: API.OperationMethod<
  GetProjectsLocationsAgentsPlaybooksRequest,
  GetProjectsLocationsAgentsPlaybooksResponse,
  GetProjectsLocationsAgentsPlaybooksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsPlaybooksRequest,
  output: GetProjectsLocationsAgentsPlaybooksResponse,
  errors: [NotFound, Forbidden],
}));

export interface ExportProjectsLocationsAgentsPlaybooksRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1ExportPlaybookRequest;
}

export const ExportProjectsLocationsAgentsPlaybooksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ExportPlaybookRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3beta1/{+name}:export", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ExportProjectsLocationsAgentsPlaybooksRequest>;

export type ExportProjectsLocationsAgentsPlaybooksResponse =
  GoogleLongrunningOperation;
export const ExportProjectsLocationsAgentsPlaybooksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportProjectsLocationsAgentsPlaybooksRequest,
  output: ExportProjectsLocationsAgentsPlaybooksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAgentsPlaybooksExamplesRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1Example;
}

export const PatchProjectsLocationsAgentsPlaybooksExamplesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1Example).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentsPlaybooksExamplesRequest>;

export type PatchProjectsLocationsAgentsPlaybooksExamplesResponse =
  GoogleCloudDialogflowCxV3beta1Example;
export const PatchProjectsLocationsAgentsPlaybooksExamplesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Example;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsPlaybooksExamplesRequest,
  output: PatchProjectsLocationsAgentsPlaybooksExamplesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAgentsPlaybooksExamplesRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentsPlaybooksExamplesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentsPlaybooksExamplesRequest>;

export type DeleteProjectsLocationsAgentsPlaybooksExamplesResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsPlaybooksExamplesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsPlaybooksExamplesRequest,
  output: DeleteProjectsLocationsAgentsPlaybooksExamplesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsPlaybooksExamplesRequest {
  name: string;
}

export const GetProjectsLocationsAgentsPlaybooksExamplesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentsPlaybooksExamplesRequest>;

export type GetProjectsLocationsAgentsPlaybooksExamplesResponse =
  GoogleCloudDialogflowCxV3beta1Example;
export const GetProjectsLocationsAgentsPlaybooksExamplesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Example;

export type GetProjectsLocationsAgentsPlaybooksExamplesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsPlaybooksExamples: API.OperationMethod<
  GetProjectsLocationsAgentsPlaybooksExamplesRequest,
  GetProjectsLocationsAgentsPlaybooksExamplesResponse,
  GetProjectsLocationsAgentsPlaybooksExamplesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsPlaybooksExamplesRequest,
  output: GetProjectsLocationsAgentsPlaybooksExamplesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsAgentsPlaybooksExamplesRequest {
  languageCode?: string;
  pageSize?: number;
  parent: string;
  pageToken?: string;
}

export const ListProjectsLocationsAgentsPlaybooksExamplesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+parent}/examples" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentsPlaybooksExamplesRequest>;

export type ListProjectsLocationsAgentsPlaybooksExamplesResponse =
  GoogleCloudDialogflowCxV3beta1ListExamplesResponse;
export const ListProjectsLocationsAgentsPlaybooksExamplesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1ListExamplesResponse;

export type ListProjectsLocationsAgentsPlaybooksExamplesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsPlaybooksExamples: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsPlaybooksExamplesRequest,
  ListProjectsLocationsAgentsPlaybooksExamplesResponse,
  ListProjectsLocationsAgentsPlaybooksExamplesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsPlaybooksExamplesRequest,
  output: ListProjectsLocationsAgentsPlaybooksExamplesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsAgentsPlaybooksExamplesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1Example;
}

export const CreateProjectsLocationsAgentsPlaybooksExamplesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1Example).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+parent}/examples",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentsPlaybooksExamplesRequest>;

export type CreateProjectsLocationsAgentsPlaybooksExamplesResponse =
  GoogleCloudDialogflowCxV3beta1Example;
export const CreateProjectsLocationsAgentsPlaybooksExamplesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Example;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsPlaybooksExamplesRequest,
  output: CreateProjectsLocationsAgentsPlaybooksExamplesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAgentsPlaybooksVersionsRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1PlaybookVersion;
}

export const CreateProjectsLocationsAgentsPlaybooksVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1PlaybookVersion).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+parent}/versions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentsPlaybooksVersionsRequest>;

export type CreateProjectsLocationsAgentsPlaybooksVersionsResponse =
  GoogleCloudDialogflowCxV3beta1PlaybookVersion;
export const CreateProjectsLocationsAgentsPlaybooksVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1PlaybookVersion;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsPlaybooksVersionsRequest,
  output: CreateProjectsLocationsAgentsPlaybooksVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsPlaybooksVersionsRequest {
  pageSize?: number;
  parent: string;
  pageToken?: string;
}

export const ListProjectsLocationsAgentsPlaybooksVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+parent}/versions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentsPlaybooksVersionsRequest>;

export type ListProjectsLocationsAgentsPlaybooksVersionsResponse =
  GoogleCloudDialogflowCxV3beta1ListPlaybookVersionsResponse;
export const ListProjectsLocationsAgentsPlaybooksVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1ListPlaybookVersionsResponse;

export type ListProjectsLocationsAgentsPlaybooksVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsPlaybooksVersions: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsPlaybooksVersionsRequest,
  ListProjectsLocationsAgentsPlaybooksVersionsResponse,
  ListProjectsLocationsAgentsPlaybooksVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentsPlaybooksVersionsRequest>;

export type DeleteProjectsLocationsAgentsPlaybooksVersionsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsPlaybooksVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsPlaybooksVersionsRequest,
  output: DeleteProjectsLocationsAgentsPlaybooksVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RestoreProjectsLocationsAgentsPlaybooksVersionsRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1RestorePlaybookVersionRequest;
}

export const RestoreProjectsLocationsAgentsPlaybooksVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1RestorePlaybookVersionRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3beta1/{+name}:restore", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RestoreProjectsLocationsAgentsPlaybooksVersionsRequest>;

export type RestoreProjectsLocationsAgentsPlaybooksVersionsResponse =
  GoogleCloudDialogflowCxV3beta1RestorePlaybookVersionResponse;
export const RestoreProjectsLocationsAgentsPlaybooksVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1RestorePlaybookVersionResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RestoreProjectsLocationsAgentsPlaybooksVersionsRequest,
  output: RestoreProjectsLocationsAgentsPlaybooksVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsPlaybooksVersionsRequest {
  name: string;
}

export const GetProjectsLocationsAgentsPlaybooksVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentsPlaybooksVersionsRequest>;

export type GetProjectsLocationsAgentsPlaybooksVersionsResponse =
  GoogleCloudDialogflowCxV3beta1PlaybookVersion;
export const GetProjectsLocationsAgentsPlaybooksVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1PlaybookVersion;

export type GetProjectsLocationsAgentsPlaybooksVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsPlaybooksVersions: API.OperationMethod<
  GetProjectsLocationsAgentsPlaybooksVersionsRequest,
  GetProjectsLocationsAgentsPlaybooksVersionsResponse,
  GetProjectsLocationsAgentsPlaybooksVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsPlaybooksVersionsRequest,
  output: GetProjectsLocationsAgentsPlaybooksVersionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsAgentsGeneratorsRequest {
  parent: string;
  languageCode?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1Generator;
}

export const CreateProjectsLocationsAgentsGeneratorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1Generator).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+parent}/generators",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentsGeneratorsRequest>;

export type CreateProjectsLocationsAgentsGeneratorsResponse =
  GoogleCloudDialogflowCxV3beta1Generator;
export const CreateProjectsLocationsAgentsGeneratorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Generator;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsGeneratorsRequest,
  output: CreateProjectsLocationsAgentsGeneratorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsGeneratorsRequest {
  languageCode?: string;
  pageSize?: number;
  parent: string;
  pageToken?: string;
}

export const ListProjectsLocationsAgentsGeneratorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+parent}/generators" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentsGeneratorsRequest>;

export type ListProjectsLocationsAgentsGeneratorsResponse =
  GoogleCloudDialogflowCxV3beta1ListGeneratorsResponse;
export const ListProjectsLocationsAgentsGeneratorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1ListGeneratorsResponse;

export type ListProjectsLocationsAgentsGeneratorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsGenerators: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsGeneratorsRequest,
  ListProjectsLocationsAgentsGeneratorsResponse,
  ListProjectsLocationsAgentsGeneratorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsGeneratorsRequest,
  output: ListProjectsLocationsAgentsGeneratorsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsAgentsGeneratorsRequest {
  name: string;
  force?: boolean;
}

export const DeleteProjectsLocationsAgentsGeneratorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentsGeneratorsRequest>;

export type DeleteProjectsLocationsAgentsGeneratorsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsGeneratorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsGeneratorsRequest,
  output: DeleteProjectsLocationsAgentsGeneratorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAgentsGeneratorsRequest {
  languageCode?: string;
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1Generator;
}

export const PatchProjectsLocationsAgentsGeneratorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1Generator).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentsGeneratorsRequest>;

export type PatchProjectsLocationsAgentsGeneratorsResponse =
  GoogleCloudDialogflowCxV3beta1Generator;
export const PatchProjectsLocationsAgentsGeneratorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Generator;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsGeneratorsRequest,
  output: PatchProjectsLocationsAgentsGeneratorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsGeneratorsRequest {
  name: string;
  languageCode?: string;
}

export const GetProjectsLocationsAgentsGeneratorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentsGeneratorsRequest>;

export type GetProjectsLocationsAgentsGeneratorsResponse =
  GoogleCloudDialogflowCxV3beta1Generator;
export const GetProjectsLocationsAgentsGeneratorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Generator;

export type GetProjectsLocationsAgentsGeneratorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsGenerators: API.OperationMethod<
  GetProjectsLocationsAgentsGeneratorsRequest,
  GetProjectsLocationsAgentsGeneratorsResponse,
  GetProjectsLocationsAgentsGeneratorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsGeneratorsRequest,
  output: GetProjectsLocationsAgentsGeneratorsResponse,
  errors: [NotFound, Forbidden],
}));

export interface BatchRunProjectsLocationsAgentsTestCasesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequest;
}

export const BatchRunProjectsLocationsAgentsTestCasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+parent}/testCases:batchRun",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchRunProjectsLocationsAgentsTestCasesRequest>;

export type BatchRunProjectsLocationsAgentsTestCasesResponse =
  GoogleLongrunningOperation;
export const BatchRunProjectsLocationsAgentsTestCasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchRunProjectsLocationsAgentsTestCasesRequest,
  output: BatchRunProjectsLocationsAgentsTestCasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ImportProjectsLocationsAgentsTestCasesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1ImportTestCasesRequest;
}

export const ImportProjectsLocationsAgentsTestCasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ImportTestCasesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+parent}/testCases:import",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ImportProjectsLocationsAgentsTestCasesRequest>;

export type ImportProjectsLocationsAgentsTestCasesResponse =
  GoogleLongrunningOperation;
export const ImportProjectsLocationsAgentsTestCasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportProjectsLocationsAgentsTestCasesRequest,
  output: ImportProjectsLocationsAgentsTestCasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchDeleteProjectsLocationsAgentsTestCasesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1BatchDeleteTestCasesRequest;
}

export const BatchDeleteProjectsLocationsAgentsTestCasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1BatchDeleteTestCasesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+parent}/testCases:batchDelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchDeleteProjectsLocationsAgentsTestCasesRequest>;

export type BatchDeleteProjectsLocationsAgentsTestCasesResponse =
  GoogleProtobufEmpty;
export const BatchDeleteProjectsLocationsAgentsTestCasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchDeleteProjectsLocationsAgentsTestCasesRequest,
  output: BatchDeleteProjectsLocationsAgentsTestCasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExportProjectsLocationsAgentsTestCasesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1ExportTestCasesRequest;
}

export const ExportProjectsLocationsAgentsTestCasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ExportTestCasesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+parent}/testCases:export",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExportProjectsLocationsAgentsTestCasesRequest>;

export type ExportProjectsLocationsAgentsTestCasesResponse =
  GoogleLongrunningOperation;
export const ExportProjectsLocationsAgentsTestCasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportProjectsLocationsAgentsTestCasesRequest,
  output: ExportProjectsLocationsAgentsTestCasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RunProjectsLocationsAgentsTestCasesRequest {
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1RunTestCaseRequest;
}

export const RunProjectsLocationsAgentsTestCasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1RunTestCaseRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3beta1/{+name}:run", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RunProjectsLocationsAgentsTestCasesRequest>;

export type RunProjectsLocationsAgentsTestCasesResponse =
  GoogleLongrunningOperation;
export const RunProjectsLocationsAgentsTestCasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RunProjectsLocationsAgentsTestCasesRequest,
  output: RunProjectsLocationsAgentsTestCasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agent: Schema.String.pipe(T.HttpPath("agent")),
    type: Schema.optional(Schema.String).pipe(T.HttpQuery("type")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v3beta1/{+agent}/testCases:calculateCoverage",
    }),
    svc,
  ) as unknown as Schema.Schema<CalculateCoverageProjectsLocationsAgentsTestCasesRequest>;

export type CalculateCoverageProjectsLocationsAgentsTestCasesResponse =
  GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse;
export const CalculateCoverageProjectsLocationsAgentsTestCasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse;

export type CalculateCoverageProjectsLocationsAgentsTestCasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const calculateCoverageProjectsLocationsAgentsTestCases: API.OperationMethod<
  CalculateCoverageProjectsLocationsAgentsTestCasesRequest,
  CalculateCoverageProjectsLocationsAgentsTestCasesResponse,
  CalculateCoverageProjectsLocationsAgentsTestCasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CalculateCoverageProjectsLocationsAgentsTestCasesRequest,
  output: CalculateCoverageProjectsLocationsAgentsTestCasesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsAgentsTestCasesRequest {
  view?: "TEST_CASE_VIEW_UNSPECIFIED" | "BASIC" | "FULL" | (string & {});
  parent: string;
  pageToken?: string;
  pageSize?: number;
}

export const ListProjectsLocationsAgentsTestCasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+parent}/testCases" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentsTestCasesRequest>;

export type ListProjectsLocationsAgentsTestCasesResponse =
  GoogleCloudDialogflowCxV3beta1ListTestCasesResponse;
export const ListProjectsLocationsAgentsTestCasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1ListTestCasesResponse;

export type ListProjectsLocationsAgentsTestCasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsTestCases: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsTestCasesRequest,
  ListProjectsLocationsAgentsTestCasesResponse,
  ListProjectsLocationsAgentsTestCasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsTestCasesRequest,
  output: ListProjectsLocationsAgentsTestCasesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsAgentsTestCasesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1TestCase;
}

export const CreateProjectsLocationsAgentsTestCasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1TestCase).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+parent}/testCases",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentsTestCasesRequest>;

export type CreateProjectsLocationsAgentsTestCasesResponse =
  GoogleCloudDialogflowCxV3beta1TestCase;
export const CreateProjectsLocationsAgentsTestCasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1TestCase;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsTestCasesRequest,
  output: CreateProjectsLocationsAgentsTestCasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsTestCasesRequest {
  name: string;
}

export const GetProjectsLocationsAgentsTestCasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentsTestCasesRequest>;

export type GetProjectsLocationsAgentsTestCasesResponse =
  GoogleCloudDialogflowCxV3beta1TestCase;
export const GetProjectsLocationsAgentsTestCasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1TestCase;

export type GetProjectsLocationsAgentsTestCasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsTestCases: API.OperationMethod<
  GetProjectsLocationsAgentsTestCasesRequest,
  GetProjectsLocationsAgentsTestCasesResponse,
  GetProjectsLocationsAgentsTestCasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsTestCasesRequest,
  output: GetProjectsLocationsAgentsTestCasesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsAgentsTestCasesRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1TestCase;
}

export const PatchProjectsLocationsAgentsTestCasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1TestCase).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentsTestCasesRequest>;

export type PatchProjectsLocationsAgentsTestCasesResponse =
  GoogleCloudDialogflowCxV3beta1TestCase;
export const PatchProjectsLocationsAgentsTestCasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1TestCase;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsTestCasesRequest,
  output: PatchProjectsLocationsAgentsTestCasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsTestCasesResultsRequest {
  parent: string;
  pageToken?: string;
  pageSize?: number;
  filter?: string;
}

export const ListProjectsLocationsAgentsTestCasesResultsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+parent}/results" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentsTestCasesResultsRequest>;

export type ListProjectsLocationsAgentsTestCasesResultsResponse =
  GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse;
export const ListProjectsLocationsAgentsTestCasesResultsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse;

export type ListProjectsLocationsAgentsTestCasesResultsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsTestCasesResults: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsTestCasesResultsRequest,
  ListProjectsLocationsAgentsTestCasesResultsResponse,
  ListProjectsLocationsAgentsTestCasesResultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsTestCasesResultsRequest,
  output: ListProjectsLocationsAgentsTestCasesResultsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsAgentsTestCasesResultsRequest {
  name: string;
}

export const GetProjectsLocationsAgentsTestCasesResultsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentsTestCasesResultsRequest>;

export type GetProjectsLocationsAgentsTestCasesResultsResponse =
  GoogleCloudDialogflowCxV3beta1TestCaseResult;
export const GetProjectsLocationsAgentsTestCasesResultsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1TestCaseResult;

export type GetProjectsLocationsAgentsTestCasesResultsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsTestCasesResults: API.OperationMethod<
  GetProjectsLocationsAgentsTestCasesResultsRequest,
  GetProjectsLocationsAgentsTestCasesResultsResponse,
  GetProjectsLocationsAgentsTestCasesResultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsTestCasesResultsRequest,
  output: GetProjectsLocationsAgentsTestCasesResultsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsAgentsTransitionRouteGroupsRequest {
  parent: string;
  languageCode?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1TransitionRouteGroup;
}

export const CreateProjectsLocationsAgentsTransitionRouteGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1TransitionRouteGroup,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+parent}/transitionRouteGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentsTransitionRouteGroupsRequest>;

export type CreateProjectsLocationsAgentsTransitionRouteGroupsResponse =
  GoogleCloudDialogflowCxV3beta1TransitionRouteGroup;
export const CreateProjectsLocationsAgentsTransitionRouteGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1TransitionRouteGroup;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsTransitionRouteGroupsRequest,
  output: CreateProjectsLocationsAgentsTransitionRouteGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAgentsTransitionRouteGroupsRequest {
  languageCode?: string;
  parent: string;
  pageToken?: string;
  pageSize?: number;
}

export const ListProjectsLocationsAgentsTransitionRouteGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+parent}/transitionRouteGroups" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentsTransitionRouteGroupsRequest>;

export type ListProjectsLocationsAgentsTransitionRouteGroupsResponse =
  GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse;
export const ListProjectsLocationsAgentsTransitionRouteGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse;

export type ListProjectsLocationsAgentsTransitionRouteGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsTransitionRouteGroups: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsTransitionRouteGroupsRequest,
  ListProjectsLocationsAgentsTransitionRouteGroupsResponse,
  ListProjectsLocationsAgentsTransitionRouteGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsTransitionRouteGroupsRequest,
  output: ListProjectsLocationsAgentsTransitionRouteGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsAgentsTransitionRouteGroupsRequest {
  name: string;
  force?: boolean;
}

export const DeleteProjectsLocationsAgentsTransitionRouteGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentsTransitionRouteGroupsRequest>;

export type DeleteProjectsLocationsAgentsTransitionRouteGroupsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsTransitionRouteGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsTransitionRouteGroupsRequest,
  output: DeleteProjectsLocationsAgentsTransitionRouteGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAgentsTransitionRouteGroupsRequest {
  updateMask?: string;
  languageCode?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1TransitionRouteGroup;
}

export const PatchProjectsLocationsAgentsTransitionRouteGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDialogflowCxV3beta1TransitionRouteGroup,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentsTransitionRouteGroupsRequest>;

export type PatchProjectsLocationsAgentsTransitionRouteGroupsResponse =
  GoogleCloudDialogflowCxV3beta1TransitionRouteGroup;
export const PatchProjectsLocationsAgentsTransitionRouteGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1TransitionRouteGroup;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsTransitionRouteGroupsRequest,
  output: PatchProjectsLocationsAgentsTransitionRouteGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsTransitionRouteGroupsRequest {
  languageCode?: string;
  name: string;
}

export const GetProjectsLocationsAgentsTransitionRouteGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentsTransitionRouteGroupsRequest>;

export type GetProjectsLocationsAgentsTransitionRouteGroupsResponse =
  GoogleCloudDialogflowCxV3beta1TransitionRouteGroup;
export const GetProjectsLocationsAgentsTransitionRouteGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1TransitionRouteGroup;

export type GetProjectsLocationsAgentsTransitionRouteGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsTransitionRouteGroups: API.OperationMethod<
  GetProjectsLocationsAgentsTransitionRouteGroupsRequest,
  GetProjectsLocationsAgentsTransitionRouteGroupsResponse,
  GetProjectsLocationsAgentsTransitionRouteGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsTransitionRouteGroupsRequest,
  output: GetProjectsLocationsAgentsTransitionRouteGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsAgentsWebhooksRequest {
  pageSize?: number;
  parent: string;
  pageToken?: string;
}

export const ListProjectsLocationsAgentsWebhooksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+parent}/webhooks" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentsWebhooksRequest>;

export type ListProjectsLocationsAgentsWebhooksResponse =
  GoogleCloudDialogflowCxV3beta1ListWebhooksResponse;
export const ListProjectsLocationsAgentsWebhooksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1ListWebhooksResponse;

export type ListProjectsLocationsAgentsWebhooksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsLocationsAgentsWebhooks: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentsWebhooksRequest,
  ListProjectsLocationsAgentsWebhooksResponse,
  ListProjectsLocationsAgentsWebhooksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentsWebhooksRequest,
  output: ListProjectsLocationsAgentsWebhooksResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsAgentsWebhooksRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1Webhook;
}

export const CreateProjectsLocationsAgentsWebhooksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1Webhook).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{+parent}/webhooks",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentsWebhooksRequest>;

export type CreateProjectsLocationsAgentsWebhooksResponse =
  GoogleCloudDialogflowCxV3beta1Webhook;
export const CreateProjectsLocationsAgentsWebhooksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Webhook;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentsWebhooksRequest,
  output: CreateProjectsLocationsAgentsWebhooksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAgentsWebhooksRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1Webhook;
}

export const PatchProjectsLocationsAgentsWebhooksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowCxV3beta1Webhook).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentsWebhooksRequest>;

export type PatchProjectsLocationsAgentsWebhooksResponse =
  GoogleCloudDialogflowCxV3beta1Webhook;
export const PatchProjectsLocationsAgentsWebhooksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Webhook;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentsWebhooksRequest,
  output: PatchProjectsLocationsAgentsWebhooksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAgentsWebhooksRequest {
  name: string;
  force?: boolean;
}

export const DeleteProjectsLocationsAgentsWebhooksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentsWebhooksRequest>;

export type DeleteProjectsLocationsAgentsWebhooksResponse = GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentsWebhooksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentsWebhooksRequest,
  output: DeleteProjectsLocationsAgentsWebhooksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsWebhooksRequest {
  name: string;
}

export const GetProjectsLocationsAgentsWebhooksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentsWebhooksRequest>;

export type GetProjectsLocationsAgentsWebhooksResponse =
  GoogleCloudDialogflowCxV3beta1Webhook;
export const GetProjectsLocationsAgentsWebhooksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowCxV3beta1Webhook;

export type GetProjectsLocationsAgentsWebhooksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsAgentsWebhooks: API.OperationMethod<
  GetProjectsLocationsAgentsWebhooksRequest,
  GetProjectsLocationsAgentsWebhooksResponse,
  GetProjectsLocationsAgentsWebhooksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentsWebhooksRequest,
  output: GetProjectsLocationsAgentsWebhooksResponse,
  errors: [NotFound, Forbidden],
}));
