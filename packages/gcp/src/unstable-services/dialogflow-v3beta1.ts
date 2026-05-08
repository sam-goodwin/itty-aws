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

export interface GoogleCloudDialogflowCxV3beta1InlineDestination {
  content?: string;
}

export const GoogleCloudDialogflowCxV3beta1InlineDestination: Schema.Schema<GoogleCloudDialogflowCxV3beta1InlineDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1InlineDestination",
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
  similarityScore?: number;
  answerRecord?: string;
  sources?: GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSources;
  suggestionIndex?: number;
}

export const GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion: Schema.Schema<GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    similarityScore: Schema.optional(Schema.Number),
    answerRecord: Schema.optional(Schema.String),
    sources: Schema.optional(
      GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSources,
    ),
    suggestionIndex: Schema.optional(Schema.Number),
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

export interface GoogleCloudDialogflowCxV3beta1ExportEntityTypesRequest {
  entityTypes?: ReadonlyArray<string>;
  entityTypesUri?: string;
  entityTypesContentInline?: boolean;
  dataFormat?:
    | "DATA_FORMAT_UNSPECIFIED"
    | "BLOB"
    | "JSON_PACKAGE"
    | (string & {});
  languageCode?: string;
}

export const GoogleCloudDialogflowCxV3beta1ExportEntityTypesRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportEntityTypesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypes: Schema.optional(Schema.Array(Schema.String)),
    entityTypesUri: Schema.optional(Schema.String),
    entityTypesContentInline: Schema.optional(Schema.Boolean),
    dataFormat: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportEntityTypesRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1VersionVariantsVariant {
  trafficAllocation?: number;
  isControlGroup?: boolean;
  version?: string;
}

export const GoogleCloudDialogflowCxV3beta1VersionVariantsVariant: Schema.Schema<GoogleCloudDialogflowCxV3beta1VersionVariantsVariant> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trafficAllocation: Schema.optional(Schema.Number),
    isControlGroup: Schema.optional(Schema.Boolean),
    version: Schema.optional(Schema.String),
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
  displayName?: string;
  trafficPercent?: number;
  minDuration?: string;
}

export const GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep: Schema.Schema<GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    trafficPercent: Schema.optional(Schema.Number),
    minDuration: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep",
  });

export interface GoogleCloudDialogflowCxV3beta1RolloutConfig {
  rolloutCondition?: string;
  failureCondition?: string;
  rolloutSteps?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep>;
}

export const GoogleCloudDialogflowCxV3beta1RolloutConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1RolloutConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rolloutCondition: Schema.optional(Schema.String),
    failureCondition: Schema.optional(Schema.String),
    rolloutSteps: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1RolloutConfig" });

export interface GoogleCloudDialogflowCxV3beta1RolloutState {
  startTime?: string;
  stepIndex?: number;
  step?: string;
}

export const GoogleCloudDialogflowCxV3beta1RolloutState: Schema.Schema<GoogleCloudDialogflowCxV3beta1RolloutState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    stepIndex: Schema.optional(Schema.Number),
    step: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1RolloutState" });

export interface GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval {
  ratio?: number;
  lowerBound?: number;
  confidenceLevel?: number;
  upperBound?: number;
}

export const GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ratio: Schema.optional(Schema.Number),
    lowerBound: Schema.optional(Schema.Number),
    confidenceLevel: Schema.optional(Schema.Number),
    upperBound: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval",
  });

export interface GoogleCloudDialogflowCxV3beta1ExperimentResultMetric {
  count?: number;
  countType?:
    | "COUNT_TYPE_UNSPECIFIED"
    | "TOTAL_NO_MATCH_COUNT"
    | "TOTAL_TURN_COUNT"
    | "AVERAGE_TURN_COUNT"
    | (string & {});
  confidenceInterval?: GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval;
  ratio?: number;
  type?:
    | "METRIC_UNSPECIFIED"
    | "CONTAINED_SESSION_NO_CALLBACK_RATE"
    | "LIVE_AGENT_HANDOFF_RATE"
    | "CALLBACK_SESSION_RATE"
    | "ABANDONED_SESSION_RATE"
    | "SESSION_END_RATE"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1ExperimentResultMetric: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExperimentResultMetric> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    countType: Schema.optional(Schema.String),
    confidenceInterval: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval,
    ),
    ratio: Schema.optional(Schema.Number),
    type: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowCxV3beta1ExperimentResult {
  versionMetrics?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics>;
  lastUpdateTime?: string;
}

export const GoogleCloudDialogflowCxV3beta1ExperimentResult: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExperimentResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versionMetrics: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics,
      ),
    ),
    lastUpdateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ExperimentResult" });

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

export interface GoogleCloudDialogflowCxV3beta1Experiment {
  definition?: GoogleCloudDialogflowCxV3beta1ExperimentDefinition;
  rolloutConfig?: GoogleCloudDialogflowCxV3beta1RolloutConfig;
  state?:
    | "STATE_UNSPECIFIED"
    | "DRAFT"
    | "RUNNING"
    | "DONE"
    | "ROLLOUT_FAILED"
    | (string & {});
  endTime?: string;
  startTime?: string;
  lastUpdateTime?: string;
  rolloutState?: GoogleCloudDialogflowCxV3beta1RolloutState;
  result?: GoogleCloudDialogflowCxV3beta1ExperimentResult;
  experimentLength?: string;
  createTime?: string;
  displayName?: string;
  rolloutFailureReason?: string;
  variantsHistory?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1VariantsHistory>;
  name?: string;
  description?: string;
}

export const GoogleCloudDialogflowCxV3beta1Experiment: Schema.Schema<GoogleCloudDialogflowCxV3beta1Experiment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    definition: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ExperimentDefinition,
    ),
    rolloutConfig: Schema.optional(GoogleCloudDialogflowCxV3beta1RolloutConfig),
    state: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    lastUpdateTime: Schema.optional(Schema.String),
    rolloutState: Schema.optional(GoogleCloudDialogflowCxV3beta1RolloutState),
    result: Schema.optional(GoogleCloudDialogflowCxV3beta1ExperimentResult),
    experimentLength: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    rolloutFailureReason: Schema.optional(Schema.String),
    variantsHistory: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1VariantsHistory),
    ),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Experiment" });

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

export interface GoogleCloudDialogflowCxV3beta1TestError {
  status?: GoogleRpcStatus;
  testCase?: string;
  testTime?: string;
}

export const GoogleCloudDialogflowCxV3beta1TestError: Schema.Schema<GoogleCloudDialogflowCxV3beta1TestError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(GoogleRpcStatus),
    testCase: Schema.optional(Schema.String),
    testTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TestError" });

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

export interface GoogleCloudDialogflowCxV3beta1TypeSchemaSchemaReference {
  schema?: string;
  tool?: string;
}

export const GoogleCloudDialogflowCxV3beta1TypeSchemaSchemaReference: Schema.Schema<GoogleCloudDialogflowCxV3beta1TypeSchemaSchemaReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schema: Schema.optional(Schema.String),
    tool: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1TypeSchemaSchemaReference",
  });

export interface GoogleCloudDialogflowCxV3beta1TypeSchema {
  schemaReference?: GoogleCloudDialogflowCxV3beta1TypeSchemaSchemaReference;
  inlineSchema?: GoogleCloudDialogflowCxV3beta1InlineSchema;
}

export const GoogleCloudDialogflowCxV3beta1TypeSchema: Schema.Schema<GoogleCloudDialogflowCxV3beta1TypeSchema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      schemaReference: Schema.optional(
        GoogleCloudDialogflowCxV3beta1TypeSchemaSchemaReference,
      ),
      inlineSchema: Schema.optional(GoogleCloudDialogflowCxV3beta1InlineSchema),
    }),
  ).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1TypeSchema",
  }) as any as Schema.Schema<GoogleCloudDialogflowCxV3beta1TypeSchema>;

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

export interface GoogleCloudDialogflowV2IntentMessageImage {
  imageUri?: string;
  accessibilityText?: string;
}

export const GoogleCloudDialogflowV2IntentMessageImage: Schema.Schema<GoogleCloudDialogflowV2IntentMessageImage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageUri: Schema.optional(Schema.String),
    accessibilityText: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageImage" });

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

export interface GoogleCloudDialogflowV2IntentMessageTableCard {
  image?: GoogleCloudDialogflowV2IntentMessageImage;
  rows?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageTableCardRow>;
  columnProperties?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageColumnProperties>;
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageBasicCardButton>;
  subtitle?: string;
  title?: string;
}

export const GoogleCloudDialogflowV2IntentMessageTableCard: Schema.Schema<GoogleCloudDialogflowV2IntentMessageTableCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    image: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
    rows: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageTableCardRow),
    ),
    columnProperties: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageColumnProperties),
    ),
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageBasicCardButton),
    ),
    subtitle: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageTableCard" });

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
  imageUri?: string;
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageCardButton>;
}

export const GoogleCloudDialogflowV2IntentMessageCard: Schema.Schema<GoogleCloudDialogflowV2IntentMessageCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    subtitle: Schema.optional(Schema.String),
    imageUri: Schema.optional(Schema.String),
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageCardButton),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageCard" });

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

export interface GoogleCloudDialogflowV2IntentMessageText {
  text?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2IntentMessageText: Schema.Schema<GoogleCloudDialogflowV2IntentMessageText> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageText" });

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
  description?: string;
  footer?: string;
  image?: GoogleCloudDialogflowV2IntentMessageImage;
  title?: string;
}

export const GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem: Schema.Schema<GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    openUriAction: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction,
    ),
    description: Schema.optional(Schema.String),
    footer: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
    title: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowV2IntentMessageSelectItemInfo {
  synonyms?: ReadonlyArray<string>;
  key?: string;
}

export const GoogleCloudDialogflowV2IntentMessageSelectItemInfo: Schema.Schema<GoogleCloudDialogflowV2IntentMessageSelectItemInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    synonyms: Schema.optional(Schema.Array(Schema.String)),
    key: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageSelectItemInfo",
  });

export interface GoogleCloudDialogflowV2IntentMessageCarouselSelectItem {
  title?: string;
  description?: string;
  info?: GoogleCloudDialogflowV2IntentMessageSelectItemInfo;
  image?: GoogleCloudDialogflowV2IntentMessageImage;
}

export const GoogleCloudDialogflowV2IntentMessageCarouselSelectItem: Schema.Schema<GoogleCloudDialogflowV2IntentMessageCarouselSelectItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    info: Schema.optional(GoogleCloudDialogflowV2IntentMessageSelectItemInfo),
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

export interface GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject {
  largeImage?: GoogleCloudDialogflowV2IntentMessageImage;
  icon?: GoogleCloudDialogflowV2IntentMessageImage;
  name?: string;
  description?: string;
  contentUrl?: string;
}

export const GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject: Schema.Schema<GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    largeImage: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
    icon: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    contentUrl: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowV2IntentMessageBasicCard {
  formattedText?: string;
  image?: GoogleCloudDialogflowV2IntentMessageImage;
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageBasicCardButton>;
  title?: string;
  subtitle?: string;
}

export const GoogleCloudDialogflowV2IntentMessageBasicCard: Schema.Schema<GoogleCloudDialogflowV2IntentMessageBasicCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    formattedText: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageBasicCardButton),
    ),
    title: Schema.optional(Schema.String),
    subtitle: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageBasicCard" });

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

export interface GoogleCloudDialogflowV2IntentMessage {
  tableCard?: GoogleCloudDialogflowV2IntentMessageTableCard;
  card?: GoogleCloudDialogflowV2IntentMessageCard;
  linkOutSuggestion?: GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion;
  image?: GoogleCloudDialogflowV2IntentMessageImage;
  suggestions?: GoogleCloudDialogflowV2IntentMessageSuggestions;
  text?: GoogleCloudDialogflowV2IntentMessageText;
  browseCarouselCard?: GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard;
  simpleResponses?: GoogleCloudDialogflowV2IntentMessageSimpleResponses;
  carouselSelect?: GoogleCloudDialogflowV2IntentMessageCarouselSelect;
  mediaContent?: GoogleCloudDialogflowV2IntentMessageMediaContent;
  payload?: Record<string, unknown>;
  listSelect?: GoogleCloudDialogflowV2IntentMessageListSelect;
  basicCard?: GoogleCloudDialogflowV2IntentMessageBasicCard;
  quickReplies?: GoogleCloudDialogflowV2IntentMessageQuickReplies;
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
    tableCard: Schema.optional(GoogleCloudDialogflowV2IntentMessageTableCard),
    card: Schema.optional(GoogleCloudDialogflowV2IntentMessageCard),
    linkOutSuggestion: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion,
    ),
    image: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
    suggestions: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageSuggestions,
    ),
    text: Schema.optional(GoogleCloudDialogflowV2IntentMessageText),
    browseCarouselCard: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard,
    ),
    simpleResponses: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageSimpleResponses,
    ),
    carouselSelect: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageCarouselSelect,
    ),
    mediaContent: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageMediaContent,
    ),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    listSelect: Schema.optional(GoogleCloudDialogflowV2IntentMessageListSelect),
    basicCard: Schema.optional(GoogleCloudDialogflowV2IntentMessageBasicCard),
    quickReplies: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageQuickReplies,
    ),
    platform: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessage" });

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

export interface GoogleCloudDialogflowV2EntityTypeEntity {
  value?: string;
  synonyms?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2EntityTypeEntity: Schema.Schema<GoogleCloudDialogflowV2EntityTypeEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    synonyms: Schema.optional(Schema.Array(Schema.String)),
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

export interface GoogleCloudDialogflowV2WebhookResponse {
  fulfillmentText?: string;
  fulfillmentMessages?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessage>;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2Context>;
  sessionEntityTypes?: ReadonlyArray<GoogleCloudDialogflowV2SessionEntityType>;
  payload?: Record<string, unknown>;
  source?: string;
  followupEventInput?: GoogleCloudDialogflowV2EventInput;
}

export const GoogleCloudDialogflowV2WebhookResponse: Schema.Schema<GoogleCloudDialogflowV2WebhookResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fulfillmentText: Schema.optional(Schema.String),
    fulfillmentMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessage),
    ),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2Context),
    ),
    sessionEntityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SessionEntityType),
    ),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    source: Schema.optional(Schema.String),
    followupEventInput: Schema.optional(GoogleCloudDialogflowV2EventInput),
  }).annotate({ identifier: "GoogleCloudDialogflowV2WebhookResponse" });

export interface GoogleCloudDialogflowCxV3beta1ResourceName {
  displayName?: string;
  name?: string;
}

export const GoogleCloudDialogflowCxV3beta1ResourceName: Schema.Schema<GoogleCloudDialogflowCxV3beta1ResourceName> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ResourceName" });

export interface GoogleCloudDialogflowCxV3beta1ValidationMessage {
  resourceNames?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ResourceName>;
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
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "INFO"
    | "WARNING"
    | "ERROR"
    | (string & {});
  detail?: string;
  resources?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1ValidationMessage: Schema.Schema<GoogleCloudDialogflowCxV3beta1ValidationMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceNames: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ResourceName),
    ),
    resourceType: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    detail: Schema.optional(Schema.String),
    resources: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ValidationMessage",
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

export interface GoogleCloudDialogflowV2beta1ServiceLatencyInternalServiceLatency {
  latencyMs?: number;
  startTime?: string;
  completeTime?: string;
  step?: string;
}

export const GoogleCloudDialogflowV2beta1ServiceLatencyInternalServiceLatency: Schema.Schema<GoogleCloudDialogflowV2beta1ServiceLatencyInternalServiceLatency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latencyMs: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    completeTime: Schema.optional(Schema.String),
    step: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowCxV3beta1RestoreToolVersionRequest {}

export const GoogleCloudDialogflowCxV3beta1RestoreToolVersionRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1RestoreToolVersionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RestoreToolVersionRequest",
  });

export interface GoogleCloudDialogflowCxV3ExportEntityTypesMetadata {}

export const GoogleCloudDialogflowCxV3ExportEntityTypesMetadata: Schema.Schema<GoogleCloudDialogflowCxV3ExportEntityTypesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ExportEntityTypesMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGitConnectionSettings {
  trackingBranch?: string;
  branches?: ReadonlyArray<string>;
  repositoryUri?: string;
  displayName?: string;
  accessTokenSecret?: string;
}

export const GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGitConnectionSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGitConnectionSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trackingBranch: Schema.optional(Schema.String),
    branches: Schema.optional(Schema.Array(Schema.String)),
    repositoryUri: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    accessTokenSecret: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGitConnectionSettings",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior {
  conversationTranscriptHasMixedLanguages?: boolean;
  endUserMetadataIncluded?: boolean;
  useTranslatedMessage?: boolean;
  multipleQueriesGenerated?: boolean;
  returnQueryOnly?: boolean;
  usePubsubDelivery?: boolean;
  thirdPartyConnectorAllowed?: boolean;
  primaryQueryRedactedAndReplaced?: boolean;
  answerGenerationRewriterOn?: boolean;
  appendedSearchContextCount?: number;
  previousQueriesIncluded?: boolean;
  invalidItemsQuerySuggestionSkipped?: boolean;
  useCustomSafetyFilterLevel?: boolean;
  disableSyncDelivery?: boolean;
  queryGenerationAgentLanguageMismatch?: boolean;
  queryGenerationEndUserLanguageMismatch?: boolean;
  queryContainedSearchContext?: boolean;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationTranscriptHasMixedLanguages: Schema.optional(Schema.Boolean),
    endUserMetadataIncluded: Schema.optional(Schema.Boolean),
    useTranslatedMessage: Schema.optional(Schema.Boolean),
    multipleQueriesGenerated: Schema.optional(Schema.Boolean),
    returnQueryOnly: Schema.optional(Schema.Boolean),
    usePubsubDelivery: Schema.optional(Schema.Boolean),
    thirdPartyConnectorAllowed: Schema.optional(Schema.Boolean),
    primaryQueryRedactedAndReplaced: Schema.optional(Schema.Boolean),
    answerGenerationRewriterOn: Schema.optional(Schema.Boolean),
    appendedSearchContextCount: Schema.optional(Schema.Number),
    previousQueriesIncluded: Schema.optional(Schema.Boolean),
    invalidItemsQuerySuggestionSkipped: Schema.optional(Schema.Boolean),
    useCustomSafetyFilterLevel: Schema.optional(Schema.Boolean),
    disableSyncDelivery: Schema.optional(Schema.Boolean),
    queryGenerationAgentLanguageMismatch: Schema.optional(Schema.Boolean),
    queryGenerationEndUserLanguageMismatch: Schema.optional(Schema.Boolean),
    queryContainedSearchContext: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportTestCasesRequest {
  filter?: string;
  gcsUri?: string;
  dataFormat?: "DATA_FORMAT_UNSPECIFIED" | "BLOB" | "JSON" | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1ExportTestCasesRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportTestCasesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String),
    gcsUri: Schema.optional(Schema.String),
    dataFormat: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportTestCasesRequest",
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

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard {}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard: Schema.Schema<GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard",
  });

export interface GoogleCloudDialogflowCxV3beta1ToolCall {
  action?: string;
  tool?: string;
  inputParameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3beta1ToolCall: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolCall> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    tool: Schema.optional(Schema.String),
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ToolCall" });

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

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff {
  metadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff: Schema.Schema<GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff",
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

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction {}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction: Schema.Schema<GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction",
  });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment {
  audio?: string;
  allowPlaybackInterruption?: boolean;
  uri?: string;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment: Schema.Schema<GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audio: Schema.optional(Schema.String),
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
    uri: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowCxV3beta1ResponseMessage {
  knowledgeInfoCard?: GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard;
  toolCall?: GoogleCloudDialogflowCxV3beta1ToolCall;
  outputAudioText?: GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText;
  text?: GoogleCloudDialogflowCxV3beta1ResponseMessageText;
  playAudio?: GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio;
  liveAgentHandoff?: GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff;
  telephonyTransferCall?: GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall;
  channel?: string;
  endInteraction?: GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction;
  mixedAudio?: GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio;
  payload?: Record<string, unknown>;
  conversationSuccess?: GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessage: Schema.Schema<GoogleCloudDialogflowCxV3beta1ResponseMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    knowledgeInfoCard: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard,
    ),
    toolCall: Schema.optional(GoogleCloudDialogflowCxV3beta1ToolCall),
    outputAudioText: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText,
    ),
    text: Schema.optional(GoogleCloudDialogflowCxV3beta1ResponseMessageText),
    playAudio: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio,
    ),
    liveAgentHandoff: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff,
    ),
    telephonyTransferCall: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall,
    ),
    channel: Schema.optional(Schema.String),
    endInteraction: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction,
    ),
    mixedAudio: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio,
    ),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    conversationSuccess: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ResponseMessage" });

export interface GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings {
  noSpeechTimeout?: string;
  useTimeoutBasedEndpointing?: boolean;
  models?: Record<string, string>;
  endpointerSensitivity?: number;
}

export const GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    noSpeechTimeout: Schema.optional(Schema.String),
    useTimeoutBasedEndpointing: Schema.optional(Schema.Boolean),
    models: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    endpointerSensitivity: Schema.optional(Schema.Number),
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
  interdigitTimeoutDuration?: string;
  endpointingTimeoutDuration?: string;
  enabled?: boolean;
  finishDigit?: string;
  maxDigits?: number;
}

export const GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    interdigitTimeoutDuration: Schema.optional(Schema.String),
    endpointingTimeoutDuration: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    finishDigit: Schema.optional(Schema.String),
    maxDigits: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings {
  enableConsentBasedRedaction?: boolean;
  enableInteractionLogging?: boolean;
  enableStackdriverLogging?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableConsentBasedRedaction: Schema.optional(Schema.Boolean),
    enableInteractionLogging: Schema.optional(Schema.Boolean),
    enableStackdriverLogging: Schema.optional(Schema.Boolean),
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

export interface GoogleCloudDialogflowCxV3beta1FulfillmentGeneratorSettings {
  inputParameters?: Record<string, string>;
  generator?: string;
  outputParameter?: string;
}

export const GoogleCloudDialogflowCxV3beta1FulfillmentGeneratorSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1FulfillmentGeneratorSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    generator: Schema.optional(Schema.String),
    outputParameter: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1FulfillmentGeneratorSettings",
  });

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

export interface GoogleCloudDialogflowCxV3beta1Fulfillment {
  messages?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ResponseMessage>;
  advancedSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettings;
  webhook?: string;
  returnPartialResponses?: boolean;
  generators?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1FulfillmentGeneratorSettings>;
  setParameterActions?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction>;
  tag?: string;
  enableGenerativeFallback?: boolean;
  conditionalCases?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases>;
}

export const GoogleCloudDialogflowCxV3beta1Fulfillment: Schema.Schema<GoogleCloudDialogflowCxV3beta1Fulfillment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ResponseMessage),
    ),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettings,
    ),
    webhook: Schema.optional(Schema.String),
    returnPartialResponses: Schema.optional(Schema.Boolean),
    generators: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1FulfillmentGeneratorSettings),
    ),
    setParameterActions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction),
    ),
    tag: Schema.optional(Schema.String),
    enableGenerativeFallback: Schema.optional(Schema.Boolean),
    conditionalCases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Fulfillment" });

export interface GoogleCloudDialogflowCxV3beta1TransitionRoute {
  triggerFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
  targetFlow?: string;
  intent?: string;
  condition?: string;
  targetPage?: string;
  name?: string;
  description?: string;
}

export const GoogleCloudDialogflowCxV3beta1TransitionRoute: Schema.Schema<GoogleCloudDialogflowCxV3beta1TransitionRoute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    triggerFulfillment: Schema.optional(
      GoogleCloudDialogflowCxV3beta1Fulfillment,
    ),
    targetFlow: Schema.optional(Schema.String),
    intent: Schema.optional(Schema.String),
    condition: Schema.optional(Schema.String),
    targetPage: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
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
  covered?: boolean;
  transitionRoute?: GoogleCloudDialogflowCxV3beta1TransitionRoute;
}

export const GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition: Schema.Schema<GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    covered: Schema.optional(Schema.Boolean),
    transitionRoute: Schema.optional(
      GoogleCloudDialogflowCxV3beta1TransitionRoute,
    ),
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
  coverages?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage>;
  coverageScore?: number;
}

export const GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage: Schema.Schema<GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    coverages: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage,
      ),
    ),
    coverageScore: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage",
  });

export interface GoogleCloudDialogflowCxV3beta1EventHandler {
  name?: string;
  targetPage?: string;
  event?: string;
  targetFlow?: string;
  targetPlaybook?: string;
  triggerFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
}

export const GoogleCloudDialogflowCxV3beta1EventHandler: Schema.Schema<GoogleCloudDialogflowCxV3beta1EventHandler> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    targetPage: Schema.optional(Schema.String),
    event: Schema.optional(Schema.String),
    targetFlow: Schema.optional(Schema.String),
    targetPlaybook: Schema.optional(Schema.String),
    triggerFulfillment: Schema.optional(
      GoogleCloudDialogflowCxV3beta1Fulfillment,
    ),
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
  fillBehavior?: GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior;
  defaultValue?: unknown;
  redact?: boolean;
  required?: boolean;
  entityType?: string;
  advancedSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettings;
  isList?: boolean;
  displayName?: string;
}

export const GoogleCloudDialogflowCxV3beta1FormParameter: Schema.Schema<GoogleCloudDialogflowCxV3beta1FormParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fillBehavior: Schema.optional(
      GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior,
    ),
    defaultValue: Schema.optional(Schema.Unknown),
    redact: Schema.optional(Schema.Boolean),
    required: Schema.optional(Schema.Boolean),
    entityType: Schema.optional(Schema.String),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettings,
    ),
    isList: Schema.optional(Schema.Boolean),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1FormParameter" });

export interface GoogleCloudDialogflowCxV3GcsDestination {
  uri?: string;
}

export const GoogleCloudDialogflowCxV3GcsDestination: Schema.Schema<GoogleCloudDialogflowCxV3GcsDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3GcsDestination" });

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

export interface GoogleCloudDialogflowCxV3beta1IntentInput {
  intent?: string;
}

export const GoogleCloudDialogflowCxV3beta1IntentInput: Schema.Schema<GoogleCloudDialogflowCxV3beta1IntentInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1IntentInput" });

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

export interface GoogleCloudDialogflowCxV3beta1TextInput {
  text?: string;
}

export const GoogleCloudDialogflowCxV3beta1TextInput: Schema.Schema<GoogleCloudDialogflowCxV3beta1TextInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TextInput" });

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
  optOutConformerModelMigration?: boolean;
  bargeInConfig?: GoogleCloudDialogflowCxV3beta1BargeInConfig;
  singleUtterance?: boolean;
  model?: string;
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
  modelVariant?:
    | "SPEECH_MODEL_VARIANT_UNSPECIFIED"
    | "USE_BEST_AVAILABLE"
    | "USE_STANDARD"
    | "USE_ENHANCED"
    | (string & {});
  sampleRateHertz?: number;
  enableWordInfo?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1InputAudioConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1InputAudioConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    optOutConformerModelMigration: Schema.optional(Schema.Boolean),
    bargeInConfig: Schema.optional(GoogleCloudDialogflowCxV3beta1BargeInConfig),
    singleUtterance: Schema.optional(Schema.Boolean),
    model: Schema.optional(Schema.String),
    phraseHints: Schema.optional(Schema.Array(Schema.String)),
    audioEncoding: Schema.optional(Schema.String),
    modelVariant: Schema.optional(Schema.String),
    sampleRateHertz: Schema.optional(Schema.Number),
    enableWordInfo: Schema.optional(Schema.Boolean),
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
  action?: string;
  error?: GoogleCloudDialogflowCxV3beta1ToolCallResultError;
  outputParameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3beta1ToolCallResult: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolCallResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tool: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    error: Schema.optional(GoogleCloudDialogflowCxV3beta1ToolCallResultError),
    outputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ToolCallResult" });

export interface GoogleCloudDialogflowCxV3beta1QueryInput {
  intent?: GoogleCloudDialogflowCxV3beta1IntentInput;
  event?: GoogleCloudDialogflowCxV3beta1EventInput;
  dtmf?: GoogleCloudDialogflowCxV3beta1DtmfInput;
  languageCode?: string;
  text?: GoogleCloudDialogflowCxV3beta1TextInput;
  audio?: GoogleCloudDialogflowCxV3beta1AudioInput;
  toolCallResult?: GoogleCloudDialogflowCxV3beta1ToolCallResult;
}

export const GoogleCloudDialogflowCxV3beta1QueryInput: Schema.Schema<GoogleCloudDialogflowCxV3beta1QueryInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intent: Schema.optional(GoogleCloudDialogflowCxV3beta1IntentInput),
    event: Schema.optional(GoogleCloudDialogflowCxV3beta1EventInput),
    dtmf: Schema.optional(GoogleCloudDialogflowCxV3beta1DtmfInput),
    languageCode: Schema.optional(Schema.String),
    text: Schema.optional(GoogleCloudDialogflowCxV3beta1TextInput),
    audio: Schema.optional(GoogleCloudDialogflowCxV3beta1AudioInput),
    toolCallResult: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolCallResult,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1QueryInput" });

export interface GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput {
  enableSentimentAnalysis?: boolean;
  input?: GoogleCloudDialogflowCxV3beta1QueryInput;
  injectedParameters?: Record<string, unknown>;
  isWebhookEnabled?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput: Schema.Schema<GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableSentimentAnalysis: Schema.optional(Schema.Boolean),
    input: Schema.optional(GoogleCloudDialogflowCxV3beta1QueryInput),
    injectedParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    isWebhookEnabled: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput",
  });

export interface GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo {
  value?: unknown;
  justCollected?: boolean;
  displayName?: string;
  state?:
    | "PARAMETER_STATE_UNSPECIFIED"
    | "EMPTY"
    | "INVALID"
    | "FILLED"
    | (string & {});
  required?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo: Schema.Schema<GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Unknown),
    justCollected: Schema.optional(Schema.Boolean),
    displayName: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
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
  currentPage?: string;
  formInfo?: GoogleCloudDialogflowCxV3beta1PageInfoFormInfo;
  displayName?: string;
}

export const GoogleCloudDialogflowCxV3beta1PageInfo: Schema.Schema<GoogleCloudDialogflowCxV3beta1PageInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currentPage: Schema.optional(Schema.String),
    formInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1PageInfoFormInfo),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1PageInfo" });

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

export interface GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment {
  audio?: string;
  allowPlaybackInterruption?: boolean;
  uri?: string;
}

export const GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment: Schema.Schema<GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audio: Schema.optional(Schema.String),
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
    uri: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowCxV3ResponseMessageText {
  text?: ReadonlyArray<string>;
  allowPlaybackInterruption?: boolean;
}

export const GoogleCloudDialogflowCxV3ResponseMessageText: Schema.Schema<GoogleCloudDialogflowCxV3ResponseMessageText> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.Array(Schema.String)),
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ResponseMessageText" });

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

export interface GoogleCloudDialogflowCxV3ResponseMessageEndInteraction {}

export const GoogleCloudDialogflowCxV3ResponseMessageEndInteraction: Schema.Schema<GoogleCloudDialogflowCxV3ResponseMessageEndInteraction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessageEndInteraction",
  });

export interface GoogleCloudDialogflowCxV3ResponseMessage {
  toolCall?: GoogleCloudDialogflowCxV3ToolCall;
  outputAudioText?: GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText;
  payload?: Record<string, unknown>;
  mixedAudio?: GoogleCloudDialogflowCxV3ResponseMessageMixedAudio;
  conversationSuccess?: GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess;
  channel?: string;
  liveAgentHandoff?: GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff;
  text?: GoogleCloudDialogflowCxV3ResponseMessageText;
  playAudio?: GoogleCloudDialogflowCxV3ResponseMessagePlayAudio;
  knowledgeInfoCard?: GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard;
  telephonyTransferCall?: GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall;
  endInteraction?: GoogleCloudDialogflowCxV3ResponseMessageEndInteraction;
  responseType?:
    | "RESPONSE_TYPE_UNSPECIFIED"
    | "ENTRY_PROMPT"
    | "PARAMETER_PROMPT"
    | "HANDLER_PROMPT"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3ResponseMessage: Schema.Schema<GoogleCloudDialogflowCxV3ResponseMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolCall: Schema.optional(GoogleCloudDialogflowCxV3ToolCall),
    outputAudioText: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText,
    ),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    mixedAudio: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageMixedAudio,
    ),
    conversationSuccess: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess,
    ),
    channel: Schema.optional(Schema.String),
    liveAgentHandoff: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff,
    ),
    text: Schema.optional(GoogleCloudDialogflowCxV3ResponseMessageText),
    playAudio: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessagePlayAudio,
    ),
    knowledgeInfoCard: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard,
    ),
    telephonyTransferCall: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall,
    ),
    endInteraction: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageEndInteraction,
    ),
    responseType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ResponseMessage" });

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

export interface GoogleCloudDialogflowV2beta1GcsDestination {
  uri?: string;
}

export const GoogleCloudDialogflowV2beta1GcsDestination: Schema.Schema<GoogleCloudDialogflowV2beta1GcsDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1GcsDestination" });

export interface GoogleCloudDialogflowCxV3beta1RunTestCaseMetadata {}

export const GoogleCloudDialogflowCxV3beta1RunTestCaseMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1RunTestCaseMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RunTestCaseMetadata",
  });

export interface GoogleCloudDialogflowCxV3ToolCallResultError {
  message?: string;
}

export const GoogleCloudDialogflowCxV3ToolCallResultError: Schema.Schema<GoogleCloudDialogflowCxV3ToolCallResultError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ToolCallResultError" });

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
  singleUtterance?: boolean;
  bargeInConfig?: GoogleCloudDialogflowCxV3BargeInConfig;
  optOutConformerModelMigration?: boolean;
  phraseHints?: ReadonlyArray<string>;
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
  enableWordInfo?: boolean;
  sampleRateHertz?: number;
}

export const GoogleCloudDialogflowCxV3InputAudioConfig: Schema.Schema<GoogleCloudDialogflowCxV3InputAudioConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    singleUtterance: Schema.optional(Schema.Boolean),
    bargeInConfig: Schema.optional(GoogleCloudDialogflowCxV3BargeInConfig),
    optOutConformerModelMigration: Schema.optional(Schema.Boolean),
    phraseHints: Schema.optional(Schema.Array(Schema.String)),
    model: Schema.optional(Schema.String),
    modelVariant: Schema.optional(Schema.String),
    audioEncoding: Schema.optional(Schema.String),
    enableWordInfo: Schema.optional(Schema.Boolean),
    sampleRateHertz: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3InputAudioConfig" });

export interface GoogleCloudDialogflowCxV3beta1FlowTransition {
  displayName?: string;
  flow?: string;
  inputActionParameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3beta1FlowTransition: Schema.Schema<GoogleCloudDialogflowCxV3beta1FlowTransition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    flow: Schema.optional(Schema.String),
    inputActionParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1FlowTransition" });

export interface GoogleCloudDialogflowCxV3beta1NluSettings {
  classificationThreshold?: number;
  modelType?:
    | "MODEL_TYPE_UNSPECIFIED"
    | "MODEL_TYPE_STANDARD"
    | "MODEL_TYPE_ADVANCED"
    | (string & {});
  modelTrainingMode?:
    | "MODEL_TRAINING_MODE_UNSPECIFIED"
    | "MODEL_TRAINING_MODE_AUTOMATIC"
    | "MODEL_TRAINING_MODE_MANUAL"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1NluSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1NluSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    classificationThreshold: Schema.optional(Schema.Number),
    modelType: Schema.optional(Schema.String),
    modelTrainingMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1NluSettings" });

export interface GoogleCloudDialogflowCxV3beta1Version {
  name?: string;
  description?: string;
  nluSettings?: GoogleCloudDialogflowCxV3beta1NluSettings;
  createTime?: string;
  state?:
    | "STATE_UNSPECIFIED"
    | "RUNNING"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
  displayName?: string;
}

export const GoogleCloudDialogflowCxV3beta1Version: Schema.Schema<GoogleCloudDialogflowCxV3beta1Version> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    nluSettings: Schema.optional(GoogleCloudDialogflowCxV3beta1NluSettings),
    createTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowCxV3beta1ActionFlowStateUpdate {
  functionCall?: GoogleCloudDialogflowCxV3beta1ActionFlowStateUpdateFunctionCall;
  updatedParameters?: Record<string, unknown>;
  destination?: string;
  pageState?: GoogleCloudDialogflowCxV3beta1ActionFlowStateUpdatePageState;
  eventType?: string;
}

export const GoogleCloudDialogflowCxV3beta1ActionFlowStateUpdate: Schema.Schema<GoogleCloudDialogflowCxV3beta1ActionFlowStateUpdate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    functionCall: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ActionFlowStateUpdateFunctionCall,
    ),
    updatedParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    destination: Schema.optional(Schema.String),
    pageState: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ActionFlowStateUpdatePageState,
    ),
    eventType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ActionFlowStateUpdate",
  });

export interface GoogleCloudDialogflowCxV3beta1AgentUtterance {
  requireGeneration?: boolean;
  text?: string;
}

export const GoogleCloudDialogflowCxV3beta1AgentUtterance: Schema.Schema<GoogleCloudDialogflowCxV3beta1AgentUtterance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requireGeneration: Schema.optional(Schema.Boolean),
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1AgentUtterance" });

export interface GoogleCloudDialogflowCxV3beta1LlmCallRetrievedExample {
  exampleId?: string;
  exampleDisplayName?: string;
  retrievalStrategy?:
    | "RETRIEVAL_STRATEGY_UNSPECIFIED"
    | "DEFAULT"
    | "STATIC"
    | "NEVER"
    | (string & {});
  matchedRetrievalLabel?: string;
}

export const GoogleCloudDialogflowCxV3beta1LlmCallRetrievedExample: Schema.Schema<GoogleCloudDialogflowCxV3beta1LlmCallRetrievedExample> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exampleId: Schema.optional(Schema.String),
    exampleDisplayName: Schema.optional(Schema.String),
    retrievalStrategy: Schema.optional(Schema.String),
    matchedRetrievalLabel: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1LlmCallRetrievedExample",
  });

export interface GoogleCloudDialogflowCxV3beta1LlmCallTokenCount {
  conversationContextTokenCount?: string;
  exampleTokenCount?: string;
  totalOutputTokenCount?: string;
  totalInputTokenCount?: string;
}

export const GoogleCloudDialogflowCxV3beta1LlmCallTokenCount: Schema.Schema<GoogleCloudDialogflowCxV3beta1LlmCallTokenCount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationContextTokenCount: Schema.optional(Schema.String),
    exampleTokenCount: Schema.optional(Schema.String),
    totalOutputTokenCount: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowCxV3beta1FlowInvocation {
  flow?: string;
  flowState?:
    | "OUTPUT_STATE_UNSPECIFIED"
    | "OUTPUT_STATE_OK"
    | "OUTPUT_STATE_CANCELLED"
    | "OUTPUT_STATE_FAILED"
    | "OUTPUT_STATE_ESCALATED"
    | "OUTPUT_STATE_PENDING"
    | (string & {});
  outputActionParameters?: Record<string, unknown>;
  displayName?: string;
  inputActionParameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3beta1FlowInvocation: Schema.Schema<GoogleCloudDialogflowCxV3beta1FlowInvocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flow: Schema.optional(Schema.String),
    flowState: Schema.optional(Schema.String),
    outputActionParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    displayName: Schema.optional(Schema.String),
    inputActionParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1FlowInvocation" });

export interface GoogleCloudDialogflowCxV3beta1Event {
  event?: string;
  text?: string;
}

export const GoogleCloudDialogflowCxV3beta1Event: Schema.Schema<GoogleCloudDialogflowCxV3beta1Event> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    event: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Event" });

export interface GoogleCloudDialogflowCxV3beta1ActionIntentMatchMatchedIntent {
  intentId?: string;
  generativeFallback?: Record<string, unknown>;
  displayName?: string;
  score?: number;
}

export const GoogleCloudDialogflowCxV3beta1ActionIntentMatchMatchedIntent: Schema.Schema<GoogleCloudDialogflowCxV3beta1ActionIntentMatchMatchedIntent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intentId: Schema.optional(Schema.String),
    generativeFallback: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    displayName: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
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

export interface GoogleCloudDialogflowCxV3beta1ActionSTT {}

export const GoogleCloudDialogflowCxV3beta1ActionSTT: Schema.Schema<GoogleCloudDialogflowCxV3beta1ActionSTT> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ActionSTT",
  });

export interface GoogleCloudDialogflowCxV3beta1ActionTTS {}

export const GoogleCloudDialogflowCxV3beta1ActionTTS: Schema.Schema<GoogleCloudDialogflowCxV3beta1ActionTTS> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ActionTTS",
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

export interface GoogleCloudDialogflowCxV3beta1UserUtterance {
  text?: string;
  audio?: string;
  audioTokens?: ReadonlyArray<number>;
}

export const GoogleCloudDialogflowCxV3beta1UserUtterance: Schema.Schema<GoogleCloudDialogflowCxV3beta1UserUtterance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    audio: Schema.optional(Schema.String),
    audioTokens: Schema.optional(Schema.Array(Schema.Number)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1UserUtterance" });

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

export interface GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsRewriterModelCallSignals {
  modelOutput?: string;
  model?: string;
  renderedPrompt?: string;
}

export const GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsRewriterModelCallSignals: Schema.Schema<GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsRewriterModelCallSignals> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    modelOutput: Schema.optional(Schema.String),
    model: Schema.optional(Schema.String),
    renderedPrompt: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsRewriterModelCallSignals",
  });

export interface GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsSearchSnippet {
  documentUri?: string;
  text?: string;
  metadata?: Record<string, unknown>;
  documentTitle?: string;
}

export const GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsSearchSnippet: Schema.Schema<GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsSearchSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    documentUri: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    documentTitle: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsSearchSnippet",
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

export interface GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsAnswerGenerationModelCallSignals {
  modelOutput?: string;
  model?: string;
  renderedPrompt?: string;
}

export const GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsAnswerGenerationModelCallSignals: Schema.Schema<GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsAnswerGenerationModelCallSignals> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    modelOutput: Schema.optional(Schema.String),
    model: Schema.optional(Schema.String),
    renderedPrompt: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsAnswerGenerationModelCallSignals",
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

export interface GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignals {
  safetySignals?: GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsSafetySignals;
  rewrittenQuery?: string;
  answer?: string;
  groundingSignals?: GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsGroundingSignals;
  rewriterModelCallSignals?: GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsRewriterModelCallSignals;
  searchSnippets?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsSearchSnippet>;
  citedSnippets?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsCitedSnippet>;
  answerGenerationModelCallSignals?: GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsAnswerGenerationModelCallSignals;
  answerParts?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsAnswerPart>;
}

export const GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignals: Schema.Schema<GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignals> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    safetySignals: Schema.optional(
      GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsSafetySignals,
    ),
    rewrittenQuery: Schema.optional(Schema.String),
    answer: Schema.optional(Schema.String),
    groundingSignals: Schema.optional(
      GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsGroundingSignals,
    ),
    rewriterModelCallSignals: Schema.optional(
      GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsRewriterModelCallSignals,
    ),
    searchSnippets: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsSearchSnippet,
      ),
    ),
    citedSnippets: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsCitedSnippet,
      ),
    ),
    answerGenerationModelCallSignals: Schema.optional(
      GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsAnswerGenerationModelCallSignals,
    ),
    answerParts: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignalsAnswerPart,
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

export interface GoogleCloudDialogflowCxV3beta1ToolUse {
  webhookToolTrace?: GoogleCloudDialogflowCxV3beta1ToolUseWebhookToolTrace;
  action?: string;
  inputActionParameters?: Record<string, unknown>;
  tool?: string;
  displayName?: string;
  outputActionParameters?: Record<string, unknown>;
  dataStoreToolTrace?: GoogleCloudDialogflowCxV3beta1ToolUseDataStoreToolTrace;
}

export const GoogleCloudDialogflowCxV3beta1ToolUse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolUse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webhookToolTrace: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolUseWebhookToolTrace,
    ),
    action: Schema.optional(Schema.String),
    inputActionParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    tool: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    outputActionParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    dataStoreToolTrace: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolUseDataStoreToolTrace,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ToolUse" });

export interface GoogleCloudDialogflowCxV3beta1ExceptionDetail {
  errorMessage?: string;
}

export const GoogleCloudDialogflowCxV3beta1ExceptionDetail: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExceptionDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ExceptionDetail" });

export interface GoogleCloudDialogflowCxV3beta1Status {
  exception?: GoogleCloudDialogflowCxV3beta1ExceptionDetail;
}

export const GoogleCloudDialogflowCxV3beta1Status: Schema.Schema<GoogleCloudDialogflowCxV3beta1Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exception: Schema.optional(GoogleCloudDialogflowCxV3beta1ExceptionDetail),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Status" });

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

export interface GoogleCloudDialogflowCxV3beta1PlaybookInvocation {
  displayName?: string;
  playbook?: string;
  playbookOutput?: GoogleCloudDialogflowCxV3beta1PlaybookOutput;
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
    playbook: Schema.optional(Schema.String),
    playbookOutput: Schema.optional(
      GoogleCloudDialogflowCxV3beta1PlaybookOutput,
    ),
    playbookInput: Schema.optional(GoogleCloudDialogflowCxV3beta1PlaybookInput),
    playbookState: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1PlaybookInvocation",
  });

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
  tags?: ReadonlyArray<string>;
  completeTime?: string;
  name?: string;
  metrics?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1NamedMetric>;
  startTime?: string;
}

export const GoogleCloudDialogflowCxV3beta1Span: Schema.Schema<GoogleCloudDialogflowCxV3beta1Span> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tags: Schema.optional(Schema.Array(Schema.String)),
    completeTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    metrics: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1NamedMetric),
    ),
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Span" });

export interface GoogleCloudDialogflowCxV3beta1Action {
  flowStateUpdate?: GoogleCloudDialogflowCxV3beta1ActionFlowStateUpdate;
  agentUtterance?: GoogleCloudDialogflowCxV3beta1AgentUtterance;
  llmCall?: GoogleCloudDialogflowCxV3beta1LlmCall;
  flowInvocation?: GoogleCloudDialogflowCxV3beta1FlowInvocation;
  event?: GoogleCloudDialogflowCxV3beta1Event;
  intentMatch?: GoogleCloudDialogflowCxV3beta1ActionIntentMatch;
  stt?: GoogleCloudDialogflowCxV3beta1ActionSTT;
  startTime?: string;
  tts?: GoogleCloudDialogflowCxV3beta1ActionTTS;
  playbookTransition?: GoogleCloudDialogflowCxV3beta1PlaybookTransition;
  completeTime?: string;
  userUtterance?: GoogleCloudDialogflowCxV3beta1UserUtterance;
  flowTransition?: GoogleCloudDialogflowCxV3beta1FlowTransition;
  toolUse?: GoogleCloudDialogflowCxV3beta1ToolUse;
  status?: GoogleCloudDialogflowCxV3beta1Status;
  playbookInvocation?: GoogleCloudDialogflowCxV3beta1PlaybookInvocation;
  displayName?: string;
  subExecutionSteps?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Span>;
}

export const GoogleCloudDialogflowCxV3beta1Action: Schema.Schema<GoogleCloudDialogflowCxV3beta1Action> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flowStateUpdate: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ActionFlowStateUpdate,
    ),
    agentUtterance: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AgentUtterance,
    ),
    llmCall: Schema.optional(GoogleCloudDialogflowCxV3beta1LlmCall),
    flowInvocation: Schema.optional(
      GoogleCloudDialogflowCxV3beta1FlowInvocation,
    ),
    event: Schema.optional(GoogleCloudDialogflowCxV3beta1Event),
    intentMatch: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ActionIntentMatch,
    ),
    stt: Schema.optional(GoogleCloudDialogflowCxV3beta1ActionSTT),
    startTime: Schema.optional(Schema.String),
    tts: Schema.optional(GoogleCloudDialogflowCxV3beta1ActionTTS),
    playbookTransition: Schema.optional(
      GoogleCloudDialogflowCxV3beta1PlaybookTransition,
    ),
    completeTime: Schema.optional(Schema.String),
    userUtterance: Schema.optional(GoogleCloudDialogflowCxV3beta1UserUtterance),
    flowTransition: Schema.optional(
      GoogleCloudDialogflowCxV3beta1FlowTransition,
    ),
    toolUse: Schema.optional(GoogleCloudDialogflowCxV3beta1ToolUse),
    status: Schema.optional(GoogleCloudDialogflowCxV3beta1Status),
    playbookInvocation: Schema.optional(
      GoogleCloudDialogflowCxV3beta1PlaybookInvocation,
    ),
    displayName: Schema.optional(Schema.String),
    subExecutionSteps: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1Span),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Action" });

export interface GoogleCloudDialogflowCxV3beta1Example {
  conversationState?:
    | "OUTPUT_STATE_UNSPECIFIED"
    | "OUTPUT_STATE_OK"
    | "OUTPUT_STATE_CANCELLED"
    | "OUTPUT_STATE_FAILED"
    | "OUTPUT_STATE_ESCALATED"
    | "OUTPUT_STATE_PENDING"
    | (string & {});
  tokenCount?: string;
  playbookInput?: GoogleCloudDialogflowCxV3beta1PlaybookInput;
  createTime?: string;
  displayName?: string;
  updateTime?: string;
  actions?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Action>;
  languageCode?: string;
  name?: string;
  description?: string;
  playbookOutput?: GoogleCloudDialogflowCxV3beta1PlaybookOutput;
}

export const GoogleCloudDialogflowCxV3beta1Example: Schema.Schema<GoogleCloudDialogflowCxV3beta1Example> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationState: Schema.optional(Schema.String),
    tokenCount: Schema.optional(Schema.String),
    playbookInput: Schema.optional(GoogleCloudDialogflowCxV3beta1PlaybookInput),
    createTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    actions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1Action),
    ),
    languageCode: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    playbookOutput: Schema.optional(
      GoogleCloudDialogflowCxV3beta1PlaybookOutput,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Example" });

export interface GoogleCloudDialogflowCxV3beta1ParameterDefinition {
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
  name?: string;
  description?: string;
}

export const GoogleCloudDialogflowCxV3beta1ParameterDefinition: Schema.Schema<GoogleCloudDialogflowCxV3beta1ParameterDefinition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    typeSchema: Schema.optional(GoogleCloudDialogflowCxV3beta1TypeSchema),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ParameterDefinition",
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
  model?: string;
  parameters?: GoogleCloudDialogflowCxV3beta1LlmModelSettingsParameters;
}

export const GoogleCloudDialogflowCxV3beta1LlmModelSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1LlmModelSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    promptText: Schema.optional(Schema.String),
    model: Schema.optional(Schema.String),
    parameters: Schema.optional(
      GoogleCloudDialogflowCxV3beta1LlmModelSettingsParameters,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1LlmModelSettings" });

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
  guidelines?: string;
  steps?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1PlaybookStep>;
}

export const GoogleCloudDialogflowCxV3beta1PlaybookInstruction: Schema.Schema<GoogleCloudDialogflowCxV3beta1PlaybookInstruction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guidelines: Schema.optional(Schema.String),
    steps: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1PlaybookStep),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1PlaybookInstruction",
  });

export interface GoogleCloudDialogflowCxV3beta1CodeBlock {
  code?: string;
}

export const GoogleCloudDialogflowCxV3beta1CodeBlock: Schema.Schema<GoogleCloudDialogflowCxV3beta1CodeBlock> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1CodeBlock" });

export interface GoogleCloudDialogflowCxV3beta1HandlerEventHandler {
  event?: string;
  condition?: string;
  fulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
}

export const GoogleCloudDialogflowCxV3beta1HandlerEventHandler: Schema.Schema<GoogleCloudDialogflowCxV3beta1HandlerEventHandler> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    event: Schema.optional(Schema.String),
    condition: Schema.optional(Schema.String),
    fulfillment: Schema.optional(GoogleCloudDialogflowCxV3beta1Fulfillment),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1HandlerEventHandler",
  });

export interface GoogleCloudDialogflowCxV3beta1HandlerLifecycleHandler {
  lifecycleStage?: string;
  condition?: string;
  fulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
}

export const GoogleCloudDialogflowCxV3beta1HandlerLifecycleHandler: Schema.Schema<GoogleCloudDialogflowCxV3beta1HandlerLifecycleHandler> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lifecycleStage: Schema.optional(Schema.String),
    condition: Schema.optional(Schema.String),
    fulfillment: Schema.optional(GoogleCloudDialogflowCxV3beta1Fulfillment),
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

export interface GoogleCloudDialogflowCxV3beta1Playbook {
  inputParameterDefinitions?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ParameterDefinition>;
  llmModelSettings?: GoogleCloudDialogflowCxV3beta1LlmModelSettings;
  outputParameterDefinitions?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ParameterDefinition>;
  tokenCount?: string;
  referencedPlaybooks?: ReadonlyArray<string>;
  referencedFlows?: ReadonlyArray<string>;
  referencedTools?: ReadonlyArray<string>;
  displayName?: string;
  updateTime?: string;
  createTime?: string;
  speechSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings;
  instruction?: GoogleCloudDialogflowCxV3beta1PlaybookInstruction;
  codeBlock?: GoogleCloudDialogflowCxV3beta1CodeBlock;
  name?: string;
  playbookType?:
    | "PLAYBOOK_TYPE_UNSPECIFIED"
    | "TASK"
    | "ROUTINE"
    | (string & {});
  inlineActions?: ReadonlyArray<string>;
  goal?: string;
  handlers?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Handler>;
}

export const GoogleCloudDialogflowCxV3beta1Playbook: Schema.Schema<GoogleCloudDialogflowCxV3beta1Playbook> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputParameterDefinitions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ParameterDefinition),
    ),
    llmModelSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1LlmModelSettings,
    ),
    outputParameterDefinitions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ParameterDefinition),
    ),
    tokenCount: Schema.optional(Schema.String),
    referencedPlaybooks: Schema.optional(Schema.Array(Schema.String)),
    referencedFlows: Schema.optional(Schema.Array(Schema.String)),
    referencedTools: Schema.optional(Schema.Array(Schema.String)),
    displayName: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    speechSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings,
    ),
    instruction: Schema.optional(
      GoogleCloudDialogflowCxV3beta1PlaybookInstruction,
    ),
    codeBlock: Schema.optional(GoogleCloudDialogflowCxV3beta1CodeBlock),
    name: Schema.optional(Schema.String),
    playbookType: Schema.optional(Schema.String),
    inlineActions: Schema.optional(Schema.Array(Schema.String)),
    goal: Schema.optional(Schema.String),
    handlers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1Handler),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Playbook" });

export interface GoogleCloudDialogflowCxV3beta1PlaybookVersion {
  updateTime?: string;
  examples?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Example>;
  name?: string;
  description?: string;
  playbook?: GoogleCloudDialogflowCxV3beta1Playbook;
}

export const GoogleCloudDialogflowCxV3beta1PlaybookVersion: Schema.Schema<GoogleCloudDialogflowCxV3beta1PlaybookVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    examples: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1Example),
    ),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    playbook: Schema.optional(GoogleCloudDialogflowCxV3beta1Playbook),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1PlaybookVersion" });

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

export interface GoogleCloudDialogflowV2IntentParameter {
  displayName?: string;
  value?: string;
  entityTypeDisplayName?: string;
  isList?: boolean;
  mandatory?: boolean;
  name?: string;
  prompts?: ReadonlyArray<string>;
  defaultValue?: string;
}

export const GoogleCloudDialogflowV2IntentParameter: Schema.Schema<GoogleCloudDialogflowV2IntentParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    entityTypeDisplayName: Schema.optional(Schema.String),
    isList: Schema.optional(Schema.Boolean),
    mandatory: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    prompts: Schema.optional(Schema.Array(Schema.String)),
    defaultValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentParameter" });

export interface GoogleCloudDialogflowV2IntentTrainingPhrasePart {
  entityType?: string;
  text?: string;
  alias?: string;
  userDefined?: boolean;
}

export const GoogleCloudDialogflowV2IntentTrainingPhrasePart: Schema.Schema<GoogleCloudDialogflowV2IntentTrainingPhrasePart> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityType: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
    alias: Schema.optional(Schema.String),
    userDefined: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentTrainingPhrasePart",
  });

export interface GoogleCloudDialogflowV2IntentTrainingPhrase {
  type?: "TYPE_UNSPECIFIED" | "EXAMPLE" | "TEMPLATE" | (string & {});
  name?: string;
  parts?: ReadonlyArray<GoogleCloudDialogflowV2IntentTrainingPhrasePart>;
  timesAddedCount?: number;
}

export const GoogleCloudDialogflowV2IntentTrainingPhrase: Schema.Schema<GoogleCloudDialogflowV2IntentTrainingPhrase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    parts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentTrainingPhrasePart),
    ),
    timesAddedCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentTrainingPhrase" });

export interface GoogleCloudDialogflowV2IntentFollowupIntentInfo {
  parentFollowupIntentName?: string;
  followupIntentName?: string;
}

export const GoogleCloudDialogflowV2IntentFollowupIntentInfo: Schema.Schema<GoogleCloudDialogflowV2IntentFollowupIntentInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parentFollowupIntentName: Schema.optional(Schema.String),
    followupIntentName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentFollowupIntentInfo",
  });

export interface GoogleCloudDialogflowV2Intent {
  displayName?: string;
  liveAgentHandoff?: boolean;
  name?: string;
  parameters?: ReadonlyArray<GoogleCloudDialogflowV2IntentParameter>;
  messages?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessage>;
  priority?: number;
  resetContexts?: boolean;
  endInteraction?: boolean;
  webhookState?:
    | "WEBHOOK_STATE_UNSPECIFIED"
    | "WEBHOOK_STATE_ENABLED"
    | "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"
    | (string & {});
  rootFollowupIntentName?: string;
  trainingPhrases?: ReadonlyArray<GoogleCloudDialogflowV2IntentTrainingPhrase>;
  isFallback?: boolean;
  mlDisabled?: boolean;
  parentFollowupIntentName?: string;
  followupIntentInfo?: ReadonlyArray<GoogleCloudDialogflowV2IntentFollowupIntentInfo>;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2Context>;
  action?: string;
  inputContextNames?: ReadonlyArray<string>;
  events?: ReadonlyArray<string>;
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
}

export const GoogleCloudDialogflowV2Intent: Schema.Schema<GoogleCloudDialogflowV2Intent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    liveAgentHandoff: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    parameters: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentParameter),
    ),
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessage),
    ),
    priority: Schema.optional(Schema.Number),
    resetContexts: Schema.optional(Schema.Boolean),
    endInteraction: Schema.optional(Schema.Boolean),
    webhookState: Schema.optional(Schema.String),
    rootFollowupIntentName: Schema.optional(Schema.String),
    trainingPhrases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentTrainingPhrase),
    ),
    isFallback: Schema.optional(Schema.Boolean),
    mlDisabled: Schema.optional(Schema.Boolean),
    parentFollowupIntentName: Schema.optional(Schema.String),
    followupIntentInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentFollowupIntentInfo),
    ),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2Context),
    ),
    action: Schema.optional(Schema.String),
    inputContextNames: Schema.optional(Schema.Array(Schema.String)),
    events: Schema.optional(Schema.Array(Schema.String)),
    defaultResponsePlatforms: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Intent" });

export interface GoogleCloudDialogflowV2BatchUpdateIntentsResponse {
  intents?: ReadonlyArray<GoogleCloudDialogflowV2Intent>;
}

export const GoogleCloudDialogflowV2BatchUpdateIntentsResponse: Schema.Schema<GoogleCloudDialogflowV2BatchUpdateIntentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intents: Schema.optional(Schema.Array(GoogleCloudDialogflowV2Intent)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2BatchUpdateIntentsResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1ConversationMetricsMatchTypeCount {
  unspecifiedCount?: number;
  directIntentCount?: number;
  eventCount?: number;
  parameterFillingCount?: number;
  noInputCount?: number;
  noMatchCount?: number;
  intentCount?: number;
}

export const GoogleCloudDialogflowCxV3beta1ConversationMetricsMatchTypeCount: Schema.Schema<GoogleCloudDialogflowCxV3beta1ConversationMetricsMatchTypeCount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unspecifiedCount: Schema.optional(Schema.Number),
    directIntentCount: Schema.optional(Schema.Number),
    eventCount: Schema.optional(Schema.Number),
    parameterFillingCount: Schema.optional(Schema.Number),
    noInputCount: Schema.optional(Schema.Number),
    noMatchCount: Schema.optional(Schema.Number),
    intentCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ConversationMetricsMatchTypeCount",
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

export interface GoogleCloudDialogflowCxV3beta1SessionInfo {
  session?: string;
  parameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3beta1SessionInfo: Schema.Schema<GoogleCloudDialogflowCxV3beta1SessionInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1SessionInfo" });

export interface GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo {
  tag?: string;
}

export const GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo: Schema.Schema<GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tag: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo",
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

export interface GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo {
  displayName?: string;
  parameters?: Record<
    string,
    GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue
  >;
  lastMatchedIntent?: string;
  confidence?: number;
}

export const GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo: Schema.Schema<GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    parameters: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue,
      ),
    ),
    lastMatchedIntent: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookRequest {
  languageInfo?: GoogleCloudDialogflowCxV3beta1LanguageInfo;
  pageInfo?: GoogleCloudDialogflowCxV3beta1PageInfo;
  sessionInfo?: GoogleCloudDialogflowCxV3beta1SessionInfo;
  triggerEvent?: string;
  payload?: Record<string, unknown>;
  transcript?: string;
  triggerIntent?: string;
  fulfillmentInfo?: GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo;
  detectIntentResponseId?: string;
  languageCode?: string;
  dtmfDigits?: string;
  intentInfo?: GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo;
  messages?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ResponseMessage>;
  text?: string;
  sentimentAnalysisResult?: GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult;
}

export const GoogleCloudDialogflowCxV3beta1WebhookRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1WebhookRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1LanguageInfo),
    pageInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1PageInfo),
    sessionInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1SessionInfo),
    triggerEvent: Schema.optional(Schema.String),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    transcript: Schema.optional(Schema.String),
    triggerIntent: Schema.optional(Schema.String),
    fulfillmentInfo: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo,
    ),
    detectIntentResponseId: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    dtmfDigits: Schema.optional(Schema.String),
    intentInfo: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo,
    ),
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ResponseMessage),
    ),
    text: Schema.optional(Schema.String),
    sentimentAnalysisResult: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1WebhookRequest" });

export interface GoogleCloudDialogflowCxV3TextInput {
  text?: string;
}

export const GoogleCloudDialogflowCxV3TextInput: Schema.Schema<GoogleCloudDialogflowCxV3TextInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TextInput" });

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

export interface GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings {
  endpointingTimeoutDuration?: string;
  interdigitTimeoutDuration?: string;
  maxDigits?: number;
  finishDigit?: string;
  enabled?: boolean;
}

export const GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings: Schema.Schema<GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpointingTimeoutDuration: Schema.optional(Schema.String),
    interdigitTimeoutDuration: Schema.optional(Schema.String),
    maxDigits: Schema.optional(Schema.Number),
    finishDigit: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
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

export interface GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings {
  noSpeechTimeout?: string;
  useTimeoutBasedEndpointing?: boolean;
  models?: Record<string, string>;
  endpointerSensitivity?: number;
}

export const GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings: Schema.Schema<GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    noSpeechTimeout: Schema.optional(Schema.String),
    useTimeoutBasedEndpointing: Schema.optional(Schema.Boolean),
    models: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    endpointerSensitivity: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings",
  });

export interface GoogleCloudDialogflowCxV3AdvancedSettings {
  audioExportGcsDestination?: GoogleCloudDialogflowCxV3GcsDestination;
  dtmfSettings?: GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings;
  loggingSettings?: GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings;
  speechSettings?: GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings;
}

export const GoogleCloudDialogflowCxV3AdvancedSettings: Schema.Schema<GoogleCloudDialogflowCxV3AdvancedSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  condition?: string;
  caseContent?: ReadonlyArray<GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent>;
}

export const GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase: Schema.Schema<GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
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
  advancedSettings?: GoogleCloudDialogflowCxV3AdvancedSettings;
  tag?: string;
  enableGenerativeFallback?: boolean;
  conditionalCases?: ReadonlyArray<GoogleCloudDialogflowCxV3FulfillmentConditionalCases>;
  generators?: ReadonlyArray<GoogleCloudDialogflowCxV3FulfillmentGeneratorSettings>;
  setParameterActions?: ReadonlyArray<GoogleCloudDialogflowCxV3FulfillmentSetParameterAction>;
  webhook?: string;
  returnPartialResponses?: boolean;
}

export const GoogleCloudDialogflowCxV3Fulfillment: Schema.Schema<GoogleCloudDialogflowCxV3Fulfillment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ResponseMessage),
    ),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettings,
    ),
    tag: Schema.optional(Schema.String),
    enableGenerativeFallback: Schema.optional(Schema.Boolean),
    conditionalCases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3FulfillmentConditionalCases),
    ),
    generators: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3FulfillmentGeneratorSettings),
    ),
    setParameterActions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3FulfillmentSetParameterAction),
    ),
    webhook: Schema.optional(Schema.String),
    returnPartialResponses: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Fulfillment" });

export interface GoogleCloudDialogflowV2beta1AgentCoachingSuggestionAgentActionSuggestion {
  agentAction?: string;
  sources?: GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSources;
  duplicateCheckResult?: GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResult;
}

export const GoogleCloudDialogflowV2beta1AgentCoachingSuggestionAgentActionSuggestion: Schema.Schema<GoogleCloudDialogflowV2beta1AgentCoachingSuggestionAgentActionSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export interface GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig {
  clientSecret?: string;
  tokenEndpoint?: string;
  secretVersionForClientSecret?: string;
  scopes?: ReadonlyArray<string>;
  clientId?: string;
}

export const GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientSecret: Schema.optional(Schema.String),
    tokenEndpoint: Schema.optional(Schema.String),
    secretVersionForClientSecret: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Schema.String)),
    clientId: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig",
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

export interface GoogleCloudDialogflowCxV3beta1WebhookGenericWebService {
  oauthConfig?: GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig;
  secretVersionsForRequestHeaders?: Record<
    string,
    GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceSecretVersionHeaderValue
  >;
  uri?: string;
  serviceAccountAuthConfig?: GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceServiceAccountAuthConfig;
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
  username?: string;
  parameterMapping?: Record<string, string>;
  secretVersionForUsernamePassword?: string;
  serviceAgentAuth?:
    | "SERVICE_AGENT_AUTH_UNSPECIFIED"
    | "NONE"
    | "ID_TOKEN"
    | "ACCESS_TOKEN"
    | (string & {});
  requestHeaders?: Record<string, string>;
  password?: string;
  requestBody?: string;
  allowedCaCerts?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1WebhookGenericWebService: Schema.Schema<GoogleCloudDialogflowCxV3beta1WebhookGenericWebService> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oauthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig,
    ),
    secretVersionsForRequestHeaders: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceSecretVersionHeaderValue,
      ),
    ),
    uri: Schema.optional(Schema.String),
    serviceAccountAuthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceServiceAccountAuthConfig,
    ),
    webhookType: Schema.optional(Schema.String),
    httpMethod: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    parameterMapping: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    secretVersionForUsernamePassword: Schema.optional(Schema.String),
    serviceAgentAuth: Schema.optional(Schema.String),
    requestHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    password: Schema.optional(Schema.String),
    requestBody: Schema.optional(Schema.String),
    allowedCaCerts: Schema.optional(Schema.Array(Schema.String)),
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
  genericWebService?: GoogleCloudDialogflowCxV3beta1WebhookGenericWebService;
  serviceDirectory?: GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig;
  timeout?: string;
  displayName?: string;
  name?: string;
  disabled?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1Webhook: Schema.Schema<GoogleCloudDialogflowCxV3beta1Webhook> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    genericWebService: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookGenericWebService,
    ),
    serviceDirectory: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig,
    ),
    timeout: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    disabled: Schema.optional(Schema.Boolean),
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

export interface GoogleCloudDialogflowCxV3beta1SpeechProcessingMetadata {
  displayName?: string;
}

export const GoogleCloudDialogflowCxV3beta1SpeechProcessingMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1SpeechProcessingMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1SpeechProcessingMetadata",
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
  accessibilityText?: string;
  imageUri?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageImage: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageImage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accessibilityText: Schema.optional(Schema.String),
    imageUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentMessageImage" });

export interface GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject {
  largeImage?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  icon?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  name?: string;
  description?: string;
  contentUrl?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    largeImage: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
    icon: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    contentUrl: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowCxV3beta1BoostSpecConditionBoostSpecBoostControlSpec {
  fieldName?: string;
  controlPoints?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1BoostSpecConditionBoostSpecBoostControlSpecControlPoint>;
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

export const GoogleCloudDialogflowCxV3beta1BoostSpecConditionBoostSpecBoostControlSpec: Schema.Schema<GoogleCloudDialogflowCxV3beta1BoostSpecConditionBoostSpecBoostControlSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldName: Schema.optional(Schema.String),
    controlPoints: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowCxV3beta1BoostSpecConditionBoostSpecBoostControlSpecControlPoint,
      ),
    ),
    attributeType: Schema.optional(Schema.String),
    interpolationType: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowCxV3IntentInput {
  intent?: string;
}

export const GoogleCloudDialogflowCxV3IntentInput: Schema.Schema<GoogleCloudDialogflowCxV3IntentInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3IntentInput" });

export interface GoogleCloudDialogflowCxV3beta1IntentCoverageIntent {
  intent?: string;
  covered?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1IntentCoverageIntent: Schema.Schema<GoogleCloudDialogflowCxV3beta1IntentCoverageIntent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intent: Schema.optional(Schema.String),
    covered: Schema.optional(Schema.Boolean),
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
  text?: string;
  shareLocation?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation;
  postbackData?: string;
  openUrl?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dial: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial,
    ),
    text: Schema.optional(Schema.String),
    shareLocation: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation,
    ),
    postbackData: Schema.optional(Schema.String),
    openUrl: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction",
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

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion {
  action?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction;
  reply?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    action: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction,
    ),
    reply: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion",
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
  parts?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart>;
  repeatCount?: number;
  id?: string;
}

export const GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase: Schema.Schema<GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart),
    ),
    repeatCount: Schema.optional(Schema.Number),
    id: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase",
  });

export interface GoogleCloudDialogflowCxV3beta1RunContinuousTestRequest {}

export const GoogleCloudDialogflowCxV3beta1RunContinuousTestRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1RunContinuousTestRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RunContinuousTestRequest",
  });

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

export interface GoogleCloudDialogflowCxV3beta1ExportToolsRequest {
  dataFormat?: "DATA_FORMAT_UNSPECIFIED" | "BLOB" | (string & {});
  tools?: ReadonlyArray<string>;
  toolsUri?: string;
  toolsContentInline?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1ExportToolsRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportToolsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataFormat: Schema.optional(Schema.String),
    tools: Schema.optional(Schema.Array(Schema.String)),
    toolsUri: Schema.optional(Schema.String),
    toolsContentInline: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportToolsRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings {
  gcsBucket?: string;
  audioExportPattern?: string;
  enableAudioRedaction?: boolean;
  audioFormat?:
    | "AUDIO_FORMAT_UNSPECIFIED"
    | "MULAW"
    | "MP3"
    | "OGG"
    | (string & {});
  storeTtsAudio?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsBucket: Schema.optional(Schema.String),
    audioExportPattern: Schema.optional(Schema.String),
    enableAudioRedaction: Schema.optional(Schema.Boolean),
    audioFormat: Schema.optional(Schema.String),
    storeTtsAudio: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings",
  });

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
  displayName?: string;
  displayDetails?: string;
  condition?: string;
  systemAction?: string;
  agentAction?: string;
  duplicateCheckResult?: GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResult;
  triggeringEvent?:
    | "TRIGGER_EVENT_UNSPECIFIED"
    | "END_OF_UTTERANCE"
    | "MANUAL_CALL"
    | "CUSTOMER_MESSAGE"
    | "AGENT_MESSAGE"
    | "TOOL_CALL_COMPLETION"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1AgentCoachingInstruction: Schema.Schema<GoogleCloudDialogflowV2beta1AgentCoachingInstruction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    displayDetails: Schema.optional(Schema.String),
    condition: Schema.optional(Schema.String),
    systemAction: Schema.optional(Schema.String),
    agentAction: Schema.optional(Schema.String),
    duplicateCheckResult: Schema.optional(
      GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResult,
    ),
    triggeringEvent: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1AgentCoachingInstruction",
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

export interface GoogleCloudDialogflowV2beta1ToolCall {
  cesTool?: string;
  answerRecord?: string;
  cesApp?: string;
  action?: string;
  state?:
    | "STATE_UNSPECIFIED"
    | "TRIGGERED"
    | "NEEDS_CONFIRMATION"
    | (string & {});
  toolDisplayName?: string;
  cesToolset?: string;
  inputParameters?: Record<string, unknown>;
  toolDisplayDetails?: string;
  createTime?: string;
  tool?: string;
}

export const GoogleCloudDialogflowV2beta1ToolCall: Schema.Schema<GoogleCloudDialogflowV2beta1ToolCall> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cesTool: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    cesApp: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    toolDisplayName: Schema.optional(Schema.String),
    cesToolset: Schema.optional(Schema.String),
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    toolDisplayDetails: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
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
  content?: string;
  cesTool?: string;
  answerRecord?: string;
  cesApp?: string;
  action?: string;
  cesToolset?: string;
  tool?: string;
  rawContent?: string;
  createTime?: string;
  error?: GoogleCloudDialogflowV2beta1ToolCallResultError;
}

export const GoogleCloudDialogflowV2beta1ToolCallResult: Schema.Schema<GoogleCloudDialogflowV2beta1ToolCallResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
    cesTool: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    cesApp: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    cesToolset: Schema.optional(Schema.String),
    tool: Schema.optional(Schema.String),
    rawContent: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    error: Schema.optional(GoogleCloudDialogflowV2beta1ToolCallResultError),
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

export interface GoogleCloudDialogflowCxV3ImportIntentsMetadata {}

export const GoogleCloudDialogflowCxV3ImportIntentsMetadata: Schema.Schema<GoogleCloudDialogflowCxV3ImportIntentsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ImportIntentsMetadata",
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

export interface GoogleCloudDialogflowV2DeleteConversationDatasetOperationMetadata {}

export const GoogleCloudDialogflowV2DeleteConversationDatasetOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2DeleteConversationDatasetOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleCloudDialogflowV2DeleteConversationDatasetOperationMetadata",
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

export interface GoogleCloudDialogflowCxV3beta1VoiceSelectionParams {
  ssmlGender?:
    | "SSML_VOICE_GENDER_UNSPECIFIED"
    | "SSML_VOICE_GENDER_MALE"
    | "SSML_VOICE_GENDER_FEMALE"
    | "SSML_VOICE_GENDER_NEUTRAL"
    | (string & {});
  name?: string;
}

export const GoogleCloudDialogflowCxV3beta1VoiceSelectionParams: Schema.Schema<GoogleCloudDialogflowCxV3beta1VoiceSelectionParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ssmlGender: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1VoiceSelectionParams",
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

export interface GoogleCloudDialogflowCxV3DtmfInput {
  digits?: string;
  finishDigit?: string;
}

export const GoogleCloudDialogflowCxV3DtmfInput: Schema.Schema<GoogleCloudDialogflowCxV3DtmfInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    digits: Schema.optional(Schema.String),
    finishDigit: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3DtmfInput" });

export interface GoogleCloudDialogflowCxV3EventInput {
  event?: string;
}

export const GoogleCloudDialogflowCxV3EventInput: Schema.Schema<GoogleCloudDialogflowCxV3EventInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    event: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3EventInput" });

export interface GoogleCloudDialogflowCxV3AudioInput {
  config?: GoogleCloudDialogflowCxV3InputAudioConfig;
  audio?: string;
}

export const GoogleCloudDialogflowCxV3AudioInput: Schema.Schema<GoogleCloudDialogflowCxV3AudioInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    config: Schema.optional(GoogleCloudDialogflowCxV3InputAudioConfig),
    audio: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3AudioInput" });

export interface GoogleCloudDialogflowCxV3ToolCallResult {
  tool?: string;
  action?: string;
  error?: GoogleCloudDialogflowCxV3ToolCallResultError;
  outputParameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3ToolCallResult: Schema.Schema<GoogleCloudDialogflowCxV3ToolCallResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tool: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    error: Schema.optional(GoogleCloudDialogflowCxV3ToolCallResultError),
    outputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ToolCallResult" });

export interface GoogleCloudDialogflowCxV3QueryInput {
  dtmf?: GoogleCloudDialogflowCxV3DtmfInput;
  intent?: GoogleCloudDialogflowCxV3IntentInput;
  event?: GoogleCloudDialogflowCxV3EventInput;
  text?: GoogleCloudDialogflowCxV3TextInput;
  audio?: GoogleCloudDialogflowCxV3AudioInput;
  toolCallResult?: GoogleCloudDialogflowCxV3ToolCallResult;
  languageCode?: string;
}

export const GoogleCloudDialogflowCxV3QueryInput: Schema.Schema<GoogleCloudDialogflowCxV3QueryInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dtmf: Schema.optional(GoogleCloudDialogflowCxV3DtmfInput),
    intent: Schema.optional(GoogleCloudDialogflowCxV3IntentInput),
    event: Schema.optional(GoogleCloudDialogflowCxV3EventInput),
    text: Schema.optional(GoogleCloudDialogflowCxV3TextInput),
    audio: Schema.optional(GoogleCloudDialogflowCxV3AudioInput),
    toolCallResult: Schema.optional(GoogleCloudDialogflowCxV3ToolCallResult),
    languageCode: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowCxV3TransitionRoute {
  triggerFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
  intent?: string;
  condition?: string;
  targetFlow?: string;
  name?: string;
  description?: string;
  targetPage?: string;
}

export const GoogleCloudDialogflowCxV3TransitionRoute: Schema.Schema<GoogleCloudDialogflowCxV3TransitionRoute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    triggerFulfillment: Schema.optional(GoogleCloudDialogflowCxV3Fulfillment),
    intent: Schema.optional(Schema.String),
    condition: Schema.optional(Schema.String),
    targetFlow: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    targetPage: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TransitionRoute" });

export interface GoogleCloudDialogflowCxV3EventHandler {
  name?: string;
  targetPage?: string;
  event?: string;
  targetFlow?: string;
  targetPlaybook?: string;
  triggerFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
}

export const GoogleCloudDialogflowCxV3EventHandler: Schema.Schema<GoogleCloudDialogflowCxV3EventHandler> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    targetPage: Schema.optional(Schema.String),
    event: Schema.optional(Schema.String),
    targetFlow: Schema.optional(Schema.String),
    targetPlaybook: Schema.optional(Schema.String),
    triggerFulfillment: Schema.optional(GoogleCloudDialogflowCxV3Fulfillment),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3EventHandler" });

export interface GoogleCloudDialogflowCxV3DataStoreConnection {
  dataStore?: string;
  dataStoreType?:
    | "DATA_STORE_TYPE_UNSPECIFIED"
    | "PUBLIC_WEB"
    | "UNSTRUCTURED"
    | "STRUCTURED"
    | (string & {});
  documentProcessingMode?:
    | "DOCUMENT_PROCESSING_MODE_UNSPECIFIED"
    | "DOCUMENTS"
    | "CHUNKS"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3DataStoreConnection: Schema.Schema<GoogleCloudDialogflowCxV3DataStoreConnection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataStore: Schema.optional(Schema.String),
    dataStoreType: Schema.optional(Schema.String),
    documentProcessingMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3DataStoreConnection" });

export interface GoogleCloudDialogflowCxV3KnowledgeConnectorSettings {
  triggerFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
  dataStoreConnections?: ReadonlyArray<GoogleCloudDialogflowCxV3DataStoreConnection>;
  enabled?: boolean;
  targetPage?: string;
  targetFlow?: string;
}

export const GoogleCloudDialogflowCxV3KnowledgeConnectorSettings: Schema.Schema<GoogleCloudDialogflowCxV3KnowledgeConnectorSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    triggerFulfillment: Schema.optional(GoogleCloudDialogflowCxV3Fulfillment),
    dataStoreConnections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3DataStoreConnection),
    ),
    enabled: Schema.optional(Schema.Boolean),
    targetPage: Schema.optional(Schema.String),
    targetFlow: Schema.optional(Schema.String),
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
  fillBehavior?: GoogleCloudDialogflowCxV3FormParameterFillBehavior;
  defaultValue?: unknown;
  redact?: boolean;
  required?: boolean;
  entityType?: string;
  advancedSettings?: GoogleCloudDialogflowCxV3AdvancedSettings;
  isList?: boolean;
  displayName?: string;
}

export const GoogleCloudDialogflowCxV3FormParameter: Schema.Schema<GoogleCloudDialogflowCxV3FormParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fillBehavior: Schema.optional(
      GoogleCloudDialogflowCxV3FormParameterFillBehavior,
    ),
    defaultValue: Schema.optional(Schema.Unknown),
    redact: Schema.optional(Schema.Boolean),
    required: Schema.optional(Schema.Boolean),
    entityType: Schema.optional(Schema.String),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettings,
    ),
    isList: Schema.optional(Schema.Boolean),
    displayName: Schema.optional(Schema.String),
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
  transitionRouteGroups?: ReadonlyArray<string>;
  transitionRoutes?: ReadonlyArray<GoogleCloudDialogflowCxV3TransitionRoute>;
  eventHandlers?: ReadonlyArray<GoogleCloudDialogflowCxV3EventHandler>;
  knowledgeConnectorSettings?: GoogleCloudDialogflowCxV3KnowledgeConnectorSettings;
  name?: string;
  description?: string;
  advancedSettings?: GoogleCloudDialogflowCxV3AdvancedSettings;
  form?: GoogleCloudDialogflowCxV3Form;
  displayName?: string;
  entryFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
}

export const GoogleCloudDialogflowCxV3Page: Schema.Schema<GoogleCloudDialogflowCxV3Page> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transitionRouteGroups: Schema.optional(Schema.Array(Schema.String)),
    transitionRoutes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3TransitionRoute),
    ),
    eventHandlers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3EventHandler),
    ),
    knowledgeConnectorSettings: Schema.optional(
      GoogleCloudDialogflowCxV3KnowledgeConnectorSettings,
    ),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettings,
    ),
    form: Schema.optional(GoogleCloudDialogflowCxV3Form),
    displayName: Schema.optional(Schema.String),
    entryFulfillment: Schema.optional(GoogleCloudDialogflowCxV3Fulfillment),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Page" });

export interface GoogleCloudDialogflowCxV3IntentParameter {
  id?: string;
  redact?: boolean;
  isList?: boolean;
  entityType?: string;
}

export const GoogleCloudDialogflowCxV3IntentParameter: Schema.Schema<GoogleCloudDialogflowCxV3IntentParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    redact: Schema.optional(Schema.Boolean),
    isList: Schema.optional(Schema.Boolean),
    entityType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3IntentParameter" });

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

export interface GoogleCloudDialogflowCxV3Intent {
  priority?: number;
  name?: string;
  parameters?: ReadonlyArray<GoogleCloudDialogflowCxV3IntentParameter>;
  labels?: Record<string, string>;
  description?: string;
  displayName?: string;
  isFallback?: boolean;
  trainingPhrases?: ReadonlyArray<GoogleCloudDialogflowCxV3IntentTrainingPhrase>;
  dtmfPattern?: string;
}

export const GoogleCloudDialogflowCxV3Intent: Schema.Schema<GoogleCloudDialogflowCxV3Intent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    priority: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    parameters: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3IntentParameter),
    ),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    description: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    isFallback: Schema.optional(Schema.Boolean),
    trainingPhrases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3IntentTrainingPhrase),
    ),
    dtmfPattern: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Intent" });

export interface GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput {
  sessionParameters?: Record<string, unknown>;
  differences?: ReadonlyArray<GoogleCloudDialogflowCxV3TestRunDifference>;
  currentPage?: GoogleCloudDialogflowCxV3Page;
  status?: GoogleRpcStatus;
  diagnosticInfo?: Record<string, unknown>;
  triggeredIntent?: GoogleCloudDialogflowCxV3Intent;
  textResponses?: ReadonlyArray<GoogleCloudDialogflowCxV3ResponseMessageText>;
}

export const GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput: Schema.Schema<GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    differences: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3TestRunDifference),
    ),
    currentPage: Schema.optional(GoogleCloudDialogflowCxV3Page),
    status: Schema.optional(GoogleRpcStatus),
    diagnosticInfo: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    triggeredIntent: Schema.optional(GoogleCloudDialogflowCxV3Intent),
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

export interface GoogleCloudDialogflowCxV3TestConfig {
  flow?: string;
  trackingParameters?: ReadonlyArray<string>;
  page?: string;
}

export const GoogleCloudDialogflowCxV3TestConfig: Schema.Schema<GoogleCloudDialogflowCxV3TestConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flow: Schema.optional(Schema.String),
    trackingParameters: Schema.optional(Schema.Array(Schema.String)),
    page: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TestConfig" });

export interface GoogleCloudDialogflowCxV3TestCaseResult {
  testTime?: string;
  name?: string;
  environment?: string;
  testResult?: "TEST_RESULT_UNSPECIFIED" | "PASSED" | "FAILED" | (string & {});
  conversationTurns?: ReadonlyArray<GoogleCloudDialogflowCxV3ConversationTurn>;
}

export const GoogleCloudDialogflowCxV3TestCaseResult: Schema.Schema<GoogleCloudDialogflowCxV3TestCaseResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    environment: Schema.optional(Schema.String),
    testResult: Schema.optional(Schema.String),
    conversationTurns: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ConversationTurn),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TestCaseResult" });

export interface GoogleCloudDialogflowCxV3TestCase {
  tags?: ReadonlyArray<string>;
  testCaseConversationTurns?: ReadonlyArray<GoogleCloudDialogflowCxV3ConversationTurn>;
  displayName?: string;
  testConfig?: GoogleCloudDialogflowCxV3TestConfig;
  creationTime?: string;
  lastTestResult?: GoogleCloudDialogflowCxV3TestCaseResult;
  notes?: string;
  name?: string;
}

export const GoogleCloudDialogflowCxV3TestCase: Schema.Schema<GoogleCloudDialogflowCxV3TestCase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tags: Schema.optional(Schema.Array(Schema.String)),
    testCaseConversationTurns: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ConversationTurn),
    ),
    displayName: Schema.optional(Schema.String),
    testConfig: Schema.optional(GoogleCloudDialogflowCxV3TestConfig),
    creationTime: Schema.optional(Schema.String),
    lastTestResult: Schema.optional(GoogleCloudDialogflowCxV3TestCaseResult),
    notes: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TestCase" });

export interface GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettingsPromptTemplate {
  displayName?: string;
  promptText?: string;
  frozen?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettingsPromptTemplate: Schema.Schema<GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettingsPromptTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    promptText: Schema.optional(Schema.String),
    frozen: Schema.optional(Schema.Boolean),
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

export interface GoogleCloudDialogflowCxV3beta1SafetySettings {
  bannedPhrases?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1SafetySettingsPhrase>;
  defaultBannedPhraseMatchStrategy?:
    | "PHRASE_MATCH_STRATEGY_UNSPECIFIED"
    | "PARTIAL_MATCH"
    | "WORD_MATCH"
    | (string & {});
  defaultRaiSettings?: GoogleCloudDialogflowCxV3beta1SafetySettingsRaiSettings;
  raiSettings?: GoogleCloudDialogflowCxV3beta1SafetySettingsRaiSettings;
  promptSecuritySettings?: GoogleCloudDialogflowCxV3beta1SafetySettingsPromptSecuritySettings;
}

export const GoogleCloudDialogflowCxV3beta1SafetySettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1SafetySettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bannedPhrases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1SafetySettingsPhrase),
    ),
    defaultBannedPhraseMatchStrategy: Schema.optional(Schema.String),
    defaultRaiSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1SafetySettingsRaiSettings,
    ),
    raiSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1SafetySettingsRaiSettings,
    ),
    promptSecuritySettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1SafetySettingsPromptSecuritySettings,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1SafetySettings" });

export interface GoogleCloudDialogflowCxV3beta1GenerativeSettingsKnowledgeConnectorSettings {
  business?: string;
  businessDescription?: string;
  agentScope?: string;
  disableDataStoreFallback?: boolean;
  agent?: string;
  agentIdentity?: string;
}

export const GoogleCloudDialogflowCxV3beta1GenerativeSettingsKnowledgeConnectorSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1GenerativeSettingsKnowledgeConnectorSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    business: Schema.optional(Schema.String),
    businessDescription: Schema.optional(Schema.String),
    agentScope: Schema.optional(Schema.String),
    disableDataStoreFallback: Schema.optional(Schema.Boolean),
    agent: Schema.optional(Schema.String),
    agentIdentity: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1GenerativeSettingsKnowledgeConnectorSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1GenerativeSettings {
  name?: string;
  languageCode?: string;
  llmModelSettings?: GoogleCloudDialogflowCxV3beta1LlmModelSettings;
  fallbackSettings?: GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettings;
  generativeSafetySettings?: GoogleCloudDialogflowCxV3beta1SafetySettings;
  knowledgeConnectorSettings?: GoogleCloudDialogflowCxV3beta1GenerativeSettingsKnowledgeConnectorSettings;
}

export const GoogleCloudDialogflowCxV3beta1GenerativeSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1GenerativeSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    llmModelSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1LlmModelSettings,
    ),
    fallbackSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettings,
    ),
    generativeSafetySettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1SafetySettings,
    ),
    knowledgeConnectorSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1GenerativeSettingsKnowledgeConnectorSettings,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1GenerativeSettings",
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
  displayName?: string;
  entities?: ReadonlyArray<GoogleCloudDialogflowV2beta1EntityTypeEntity>;
  enableFuzzyExtraction?: boolean;
  name?: string;
}

export const GoogleCloudDialogflowV2beta1EntityType: Schema.Schema<GoogleCloudDialogflowV2beta1EntityType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    autoExpansionMode: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1EntityTypeEntity),
    ),
    enableFuzzyExtraction: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1EntityType" });

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

export interface GoogleCloudDialogflowCxV3beta1ListPlaybooksResponse {
  playbooks?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Playbook>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3beta1ListPlaybooksResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ListPlaybooksResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    playbooks: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1Playbook),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ListPlaybooksResponse",
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

export interface GoogleCloudDialogflowCxV3SessionInfo {
  session?: string;
  parameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3SessionInfo: Schema.Schema<GoogleCloudDialogflowCxV3SessionInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3SessionInfo" });

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

export interface GoogleCloudDialogflowCxV3beta1DataStoreConnection {
  dataStoreType?:
    | "DATA_STORE_TYPE_UNSPECIFIED"
    | "PUBLIC_WEB"
    | "UNSTRUCTURED"
    | "STRUCTURED"
    | (string & {});
  documentProcessingMode?:
    | "DOCUMENT_PROCESSING_MODE_UNSPECIFIED"
    | "DOCUMENTS"
    | "CHUNKS"
    | (string & {});
  dataStore?: string;
}

export const GoogleCloudDialogflowCxV3beta1DataStoreConnection: Schema.Schema<GoogleCloudDialogflowCxV3beta1DataStoreConnection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataStoreType: Schema.optional(Schema.String),
    documentProcessingMode: Schema.optional(Schema.String),
    dataStore: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1DataStoreConnection",
  });

export interface GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings {
  enabled?: boolean;
  targetPage?: string;
  targetFlow?: string;
  triggerFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
  dataStoreConnections?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1DataStoreConnection>;
}

export const GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    targetPage: Schema.optional(Schema.String),
    targetFlow: Schema.optional(Schema.String),
    triggerFulfillment: Schema.optional(
      GoogleCloudDialogflowCxV3beta1Fulfillment,
    ),
    dataStoreConnections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1DataStoreConnection),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings",
  });

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
  knowledgeConnectorSettings?: GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings;
  transitionRouteGroups?: ReadonlyArray<string>;
  transitionRoutes?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TransitionRoute>;
  eventHandlers?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1EventHandler>;
  displayName?: string;
  entryFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
  advancedSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettings;
  name?: string;
  description?: string;
  form?: GoogleCloudDialogflowCxV3beta1Form;
}

export const GoogleCloudDialogflowCxV3beta1Page: Schema.Schema<GoogleCloudDialogflowCxV3beta1Page> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    knowledgeConnectorSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings,
    ),
    transitionRouteGroups: Schema.optional(Schema.Array(Schema.String)),
    transitionRoutes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TransitionRoute),
    ),
    eventHandlers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1EventHandler),
    ),
    displayName: Schema.optional(Schema.String),
    entryFulfillment: Schema.optional(
      GoogleCloudDialogflowCxV3beta1Fulfillment,
    ),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettings,
    ),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    form: Schema.optional(GoogleCloudDialogflowCxV3beta1Form),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Page" });

export interface GoogleCloudDialogflowCxV3beta1FlowMultiLanguageSettings {
  enableMultiLanguageDetection?: boolean;
  supportedResponseLanguageCodes?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1FlowMultiLanguageSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1FlowMultiLanguageSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableMultiLanguageDetection: Schema.optional(Schema.Boolean),
    supportedResponseLanguageCodes: Schema.optional(
      Schema.Array(Schema.String),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1FlowMultiLanguageSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1Flow {
  outputParameterDefinitions?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ParameterDefinition>;
  transitionRouteGroups?: ReadonlyArray<string>;
  knowledgeConnectorSettings?: GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings;
  inputParameterDefinitions?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ParameterDefinition>;
  multiLanguageSettings?: GoogleCloudDialogflowCxV3beta1FlowMultiLanguageSettings;
  locked?: boolean;
  advancedSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettings;
  transitionRoutes?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TransitionRoute>;
  eventHandlers?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1EventHandler>;
  name?: string;
  description?: string;
  nluSettings?: GoogleCloudDialogflowCxV3beta1NluSettings;
  displayName?: string;
}

export const GoogleCloudDialogflowCxV3beta1Flow: Schema.Schema<GoogleCloudDialogflowCxV3beta1Flow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputParameterDefinitions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ParameterDefinition),
    ),
    transitionRouteGroups: Schema.optional(Schema.Array(Schema.String)),
    knowledgeConnectorSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings,
    ),
    inputParameterDefinitions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ParameterDefinition),
    ),
    multiLanguageSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1FlowMultiLanguageSettings,
    ),
    locked: Schema.optional(Schema.Boolean),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettings,
    ),
    transitionRoutes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TransitionRoute),
    ),
    eventHandlers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1EventHandler),
    ),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    nluSettings: Schema.optional(GoogleCloudDialogflowCxV3beta1NluSettings),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Flow" });

export interface GoogleCloudDialogflowCxV3beta1IntentParameter {
  id?: string;
  redact?: boolean;
  isList?: boolean;
  entityType?: string;
}

export const GoogleCloudDialogflowCxV3beta1IntentParameter: Schema.Schema<GoogleCloudDialogflowCxV3beta1IntentParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    redact: Schema.optional(Schema.Boolean),
    isList: Schema.optional(Schema.Boolean),
    entityType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1IntentParameter" });

export interface GoogleCloudDialogflowCxV3beta1Intent {
  displayName?: string;
  isFallback?: boolean;
  name?: string;
  parameters?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1IntentParameter>;
  labels?: Record<string, string>;
  description?: string;
  priority?: number;
  dtmfPattern?: string;
  trainingPhrases?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase>;
}

export const GoogleCloudDialogflowCxV3beta1Intent: Schema.Schema<GoogleCloudDialogflowCxV3beta1Intent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    isFallback: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    parameters: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1IntentParameter),
    ),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    description: Schema.optional(Schema.String),
    priority: Schema.optional(Schema.Number),
    dtmfPattern: Schema.optional(Schema.String),
    trainingPhrases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Intent" });

export interface GoogleCloudDialogflowCxV3beta1GenerativeInfo {
  currentPlaybooks?: ReadonlyArray<string>;
  actionTracingInfo?: GoogleCloudDialogflowCxV3beta1Example;
}

export const GoogleCloudDialogflowCxV3beta1GenerativeInfo: Schema.Schema<GoogleCloudDialogflowCxV3beta1GenerativeInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currentPlaybooks: Schema.optional(Schema.Array(Schema.String)),
    actionTracingInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1Example),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1GenerativeInfo" });

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

export interface GoogleCloudDialogflowCxV3beta1TraceBlock {
  completeTime?: string;
  outputParameters?: Record<string, unknown>;
  endState?:
    | "OUTPUT_STATE_UNSPECIFIED"
    | "OUTPUT_STATE_OK"
    | "OUTPUT_STATE_CANCELLED"
    | "OUTPUT_STATE_FAILED"
    | "OUTPUT_STATE_ESCALATED"
    | "OUTPUT_STATE_PENDING"
    | (string & {});
  flowTraceMetadata?: GoogleCloudDialogflowCxV3beta1FlowTraceMetadata;
  inputParameters?: Record<string, unknown>;
  playbookTraceMetadata?: GoogleCloudDialogflowCxV3beta1PlaybookTraceMetadata;
  startTime?: string;
  speechProcessingMetadata?: GoogleCloudDialogflowCxV3beta1SpeechProcessingMetadata;
  actions?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Action>;
}

export const GoogleCloudDialogflowCxV3beta1TraceBlock: Schema.Schema<GoogleCloudDialogflowCxV3beta1TraceBlock> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    completeTime: Schema.optional(Schema.String),
    outputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    endState: Schema.optional(Schema.String),
    flowTraceMetadata: Schema.optional(
      GoogleCloudDialogflowCxV3beta1FlowTraceMetadata,
    ),
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    playbookTraceMetadata: Schema.optional(
      GoogleCloudDialogflowCxV3beta1PlaybookTraceMetadata,
    ),
    startTime: Schema.optional(Schema.String),
    speechProcessingMetadata: Schema.optional(
      GoogleCloudDialogflowCxV3beta1SpeechProcessingMetadata,
    ),
    actions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1Action),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TraceBlock" });

export interface GoogleCloudDialogflowCxV3beta1Match {
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
  confidence?: number;
  parameters?: Record<string, unknown>;
  intent?: GoogleCloudDialogflowCxV3beta1Intent;
  event?: string;
  resolvedInput?: string;
}

export const GoogleCloudDialogflowCxV3beta1Match: Schema.Schema<GoogleCloudDialogflowCxV3beta1Match> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matchType: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    intent: Schema.optional(GoogleCloudDialogflowCxV3beta1Intent),
    event: Schema.optional(Schema.String),
    resolvedInput: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Match" });

export interface GoogleCloudDialogflowCxV3beta1QueryResult {
  currentPage?: GoogleCloudDialogflowCxV3beta1Page;
  responseMessages?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ResponseMessage>;
  dataStoreConnectionSignals?: GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignals;
  parameters?: Record<string, unknown>;
  currentFlow?: GoogleCloudDialogflowCxV3beta1Flow;
  intent?: GoogleCloudDialogflowCxV3beta1Intent;
  webhookLatencies?: ReadonlyArray<string>;
  transcript?: string;
  webhookDisplayNames?: ReadonlyArray<string>;
  languageCode?: string;
  generativeInfo?: GoogleCloudDialogflowCxV3beta1GenerativeInfo;
  diagnosticInfo?: Record<string, unknown>;
  allowAnswerFeedback?: boolean;
  webhookPayloads?: ReadonlyArray<Record<string, unknown>>;
  webhookIds?: ReadonlyArray<string>;
  text?: string;
  intentDetectionConfidence?: number;
  sentimentAnalysisResult?: GoogleCloudDialogflowCxV3beta1SentimentAnalysisResult;
  traceBlocks?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TraceBlock>;
  triggerEvent?: string;
  match?: GoogleCloudDialogflowCxV3beta1Match;
  dtmf?: GoogleCloudDialogflowCxV3beta1DtmfInput;
  webhookStatuses?: ReadonlyArray<GoogleRpcStatus>;
  advancedSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettings;
  triggerIntent?: string;
  webhookTags?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1QueryResult: Schema.Schema<GoogleCloudDialogflowCxV3beta1QueryResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currentPage: Schema.optional(GoogleCloudDialogflowCxV3beta1Page),
    responseMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ResponseMessage),
    ),
    dataStoreConnectionSignals: Schema.optional(
      GoogleCloudDialogflowCxV3beta1DataStoreConnectionSignals,
    ),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    currentFlow: Schema.optional(GoogleCloudDialogflowCxV3beta1Flow),
    intent: Schema.optional(GoogleCloudDialogflowCxV3beta1Intent),
    webhookLatencies: Schema.optional(Schema.Array(Schema.String)),
    transcript: Schema.optional(Schema.String),
    webhookDisplayNames: Schema.optional(Schema.Array(Schema.String)),
    languageCode: Schema.optional(Schema.String),
    generativeInfo: Schema.optional(
      GoogleCloudDialogflowCxV3beta1GenerativeInfo,
    ),
    diagnosticInfo: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    allowAnswerFeedback: Schema.optional(Schema.Boolean),
    webhookPayloads: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    webhookIds: Schema.optional(Schema.Array(Schema.String)),
    text: Schema.optional(Schema.String),
    intentDetectionConfidence: Schema.optional(Schema.Number),
    sentimentAnalysisResult: Schema.optional(
      GoogleCloudDialogflowCxV3beta1SentimentAnalysisResult,
    ),
    traceBlocks: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TraceBlock),
    ),
    triggerEvent: Schema.optional(Schema.String),
    match: Schema.optional(GoogleCloudDialogflowCxV3beta1Match),
    dtmf: Schema.optional(GoogleCloudDialogflowCxV3beta1DtmfInput),
    webhookStatuses: Schema.optional(Schema.Array(GoogleRpcStatus)),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettings,
    ),
    triggerIntent: Schema.optional(Schema.String),
    webhookTags: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1QueryResult" });

export interface GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig {
  speakingRate?: number;
  pitch?: number;
  voice?: GoogleCloudDialogflowCxV3beta1VoiceSelectionParams;
  volumeGainDb?: number;
  effectsProfileId?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    speakingRate: Schema.optional(Schema.Number),
    pitch: Schema.optional(Schema.Number),
    voice: Schema.optional(GoogleCloudDialogflowCxV3beta1VoiceSelectionParams),
    volumeGainDb: Schema.optional(Schema.Number),
    effectsProfileId: Schema.optional(Schema.Array(Schema.String)),
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
  sampleRateHertz?: number;
  synthesizeSpeechConfig?: GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig;
}

export const GoogleCloudDialogflowCxV3beta1OutputAudioConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1OutputAudioConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audioEncoding: Schema.optional(Schema.String),
    sampleRateHertz: Schema.optional(Schema.Number),
    synthesizeSpeechConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1OutputAudioConfig",
  });

export interface GoogleCloudDialogflowCxV3beta1DetectIntentResponse {
  responseType?:
    | "RESPONSE_TYPE_UNSPECIFIED"
    | "PARTIAL"
    | "FINAL"
    | (string & {});
  queryResult?: GoogleCloudDialogflowCxV3beta1QueryResult;
  responseId?: string;
  outputAudioConfig?: GoogleCloudDialogflowCxV3beta1OutputAudioConfig;
  allowCancellation?: boolean;
  outputAudio?: string;
}

export const GoogleCloudDialogflowCxV3beta1DetectIntentResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1DetectIntentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responseType: Schema.optional(Schema.String),
    queryResult: Schema.optional(GoogleCloudDialogflowCxV3beta1QueryResult),
    responseId: Schema.optional(Schema.String),
    outputAudioConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1OutputAudioConfig,
    ),
    allowCancellation: Schema.optional(Schema.Boolean),
    outputAudio: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1DetectIntentResponse",
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

export interface GoogleTypeLatLng {
  latitude?: number;
  longitude?: number;
}

export const GoogleTypeLatLng: Schema.Schema<GoogleTypeLatLng> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latitude: Schema.optional(Schema.Number),
    longitude: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleTypeLatLng" });

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

export interface GoogleCloudDialogflowCxV3beta1FilterSpecs {
  filter?: string;
  dataStores?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1FilterSpecs: Schema.Schema<GoogleCloudDialogflowCxV3beta1FilterSpecs> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String),
    dataStores: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1FilterSpecs" });

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

export interface GoogleCloudDialogflowCxV3beta1SearchConfig {
  filterSpecs?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1FilterSpecs>;
  boostSpecs?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1BoostSpecs>;
}

export const GoogleCloudDialogflowCxV3beta1SearchConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1SearchConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filterSpecs: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1FilterSpecs),
    ),
    boostSpecs: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1BoostSpecs),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1SearchConfig" });

export interface GoogleCloudDialogflowCxV3beta1QueryParameters {
  currentPage?: string;
  geoLocation?: GoogleTypeLatLng;
  populateDataStoreConnectionSignals?: boolean;
  flowVersions?: ReadonlyArray<string>;
  parameters?: Record<string, unknown>;
  parameterScope?: string;
  currentPlaybook?: string;
  sessionEntityTypes?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1SessionEntityType>;
  endUserMetadata?: Record<string, unknown>;
  timeZone?: string;
  channel?: string;
  disableWebhook?: boolean;
  analyzeQueryTextSentiment?: boolean;
  payload?: Record<string, unknown>;
  llmModelSettings?: GoogleCloudDialogflowCxV3beta1LlmModelSettings;
  searchConfig?: GoogleCloudDialogflowCxV3beta1SearchConfig;
  webhookHeaders?: Record<string, string>;
  sessionTtl?: string;
}

export const GoogleCloudDialogflowCxV3beta1QueryParameters: Schema.Schema<GoogleCloudDialogflowCxV3beta1QueryParameters> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currentPage: Schema.optional(Schema.String),
    geoLocation: Schema.optional(GoogleTypeLatLng),
    populateDataStoreConnectionSignals: Schema.optional(Schema.Boolean),
    flowVersions: Schema.optional(Schema.Array(Schema.String)),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    parameterScope: Schema.optional(Schema.String),
    currentPlaybook: Schema.optional(Schema.String),
    sessionEntityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1SessionEntityType),
    ),
    endUserMetadata: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    timeZone: Schema.optional(Schema.String),
    channel: Schema.optional(Schema.String),
    disableWebhook: Schema.optional(Schema.Boolean),
    analyzeQueryTextSentiment: Schema.optional(Schema.Boolean),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    llmModelSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1LlmModelSettings,
    ),
    searchConfig: Schema.optional(GoogleCloudDialogflowCxV3beta1SearchConfig),
    webhookHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    sessionTtl: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1QueryParameters" });

export interface GoogleCloudDialogflowCxV3beta1DetectIntentRequest {
  session?: string;
  outputAudioConfig?: GoogleCloudDialogflowCxV3beta1OutputAudioConfig;
  responseView?:
    | "DETECT_INTENT_RESPONSE_VIEW_UNSPECIFIED"
    | "DETECT_INTENT_RESPONSE_VIEW_FULL"
    | "DETECT_INTENT_RESPONSE_VIEW_BASIC"
    | "DETECT_INTENT_RESPONSE_VIEW_DEFAULT"
    | (string & {});
  queryInput?: GoogleCloudDialogflowCxV3beta1QueryInput;
  queryParams?: GoogleCloudDialogflowCxV3beta1QueryParameters;
}

export const GoogleCloudDialogflowCxV3beta1DetectIntentRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1DetectIntentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.optional(Schema.String),
    outputAudioConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1OutputAudioConfig,
    ),
    responseView: Schema.optional(Schema.String),
    queryInput: Schema.optional(GoogleCloudDialogflowCxV3beta1QueryInput),
    queryParams: Schema.optional(GoogleCloudDialogflowCxV3beta1QueryParameters),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1DetectIntentRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1ConversationInteraction {
  stepMetrics?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ConversationInteractionStepMetrics>;
  createTime?: string;
  answerFeedback?: GoogleCloudDialogflowCxV3beta1AnswerFeedback;
  partialResponses?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1DetectIntentResponse>;
  missingTransition?: GoogleCloudDialogflowCxV3beta1ConversationInteractionMissingTransition;
  response?: GoogleCloudDialogflowCxV3beta1DetectIntentResponse;
  requestUtterances?: string;
  responseUtterances?: string;
  request?: GoogleCloudDialogflowCxV3beta1DetectIntentRequest;
}

export const GoogleCloudDialogflowCxV3beta1ConversationInteraction: Schema.Schema<GoogleCloudDialogflowCxV3beta1ConversationInteraction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stepMetrics: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowCxV3beta1ConversationInteractionStepMetrics,
      ),
    ),
    createTime: Schema.optional(Schema.String),
    answerFeedback: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AnswerFeedback,
    ),
    partialResponses: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1DetectIntentResponse),
    ),
    missingTransition: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ConversationInteractionMissingTransition,
    ),
    response: Schema.optional(
      GoogleCloudDialogflowCxV3beta1DetectIntentResponse,
    ),
    requestUtterances: Schema.optional(Schema.String),
    responseUtterances: Schema.optional(Schema.String),
    request: Schema.optional(GoogleCloudDialogflowCxV3beta1DetectIntentRequest),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ConversationInteraction",
  });

export interface GoogleCloudDialogflowCxV3beta1MatchIntentResponse {
  triggerEvent?: string;
  matches?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Match>;
  text?: string;
  triggerIntent?: string;
  currentPage?: GoogleCloudDialogflowCxV3beta1Page;
  transcript?: string;
}

export const GoogleCloudDialogflowCxV3beta1MatchIntentResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1MatchIntentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    triggerEvent: Schema.optional(Schema.String),
    matches: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3beta1Match)),
    text: Schema.optional(Schema.String),
    triggerIntent: Schema.optional(Schema.String),
    currentPage: Schema.optional(GoogleCloudDialogflowCxV3beta1Page),
    transcript: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1MatchIntentResponse",
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

export interface GoogleCloudDialogflowCxV3RunContinuousTestMetadata {
  errors?: ReadonlyArray<GoogleCloudDialogflowCxV3TestError>;
}

export const GoogleCloudDialogflowCxV3RunContinuousTestMetadata: Schema.Schema<GoogleCloudDialogflowCxV3RunContinuousTestMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3TestError)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3RunContinuousTestMetadata",
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

export interface GoogleCloudDialogflowCxV3beta1ExportIntentsRequest {
  intentsUri?: string;
  intentsContentInline?: boolean;
  intents?: ReadonlyArray<string>;
  dataFormat?:
    | "DATA_FORMAT_UNSPECIFIED"
    | "BLOB"
    | "JSON"
    | "CSV"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1ExportIntentsRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportIntentsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intentsUri: Schema.optional(Schema.String),
    intentsContentInline: Schema.optional(Schema.Boolean),
    intents: Schema.optional(Schema.Array(Schema.String)),
    dataFormat: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportIntentsRequest",
  });

export interface GoogleCloudDialogflowCxV3TestCaseError {
  status?: GoogleRpcStatus;
  testCase?: GoogleCloudDialogflowCxV3TestCase;
}

export const GoogleCloudDialogflowCxV3TestCaseError: Schema.Schema<GoogleCloudDialogflowCxV3TestCaseError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(GoogleRpcStatus),
    testCase: Schema.optional(GoogleCloudDialogflowCxV3TestCase),
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

export interface GoogleCloudDialogflowCxV3beta1FlowValidationResult {
  validationMessages?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ValidationMessage>;
  name?: string;
  updateTime?: string;
}

export const GoogleCloudDialogflowCxV3beta1FlowValidationResult: Schema.Schema<GoogleCloudDialogflowCxV3beta1FlowValidationResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validationMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ValidationMessage),
    ),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1FlowValidationResult",
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

export interface GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode {
  flow?: GoogleCloudDialogflowCxV3beta1Flow;
  page?: GoogleCloudDialogflowCxV3beta1Page;
}

export const GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode: Schema.Schema<GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flow: Schema.optional(GoogleCloudDialogflowCxV3beta1Flow),
    page: Schema.optional(GoogleCloudDialogflowCxV3beta1Page),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode",
  });

export interface GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition {
  transitionRoute?: GoogleCloudDialogflowCxV3beta1TransitionRoute;
  index?: number;
  target?: GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode;
  eventHandler?: GoogleCloudDialogflowCxV3beta1EventHandler;
  source?: GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode;
  covered?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition: Schema.Schema<GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transitionRoute: Schema.optional(
      GoogleCloudDialogflowCxV3beta1TransitionRoute,
    ),
    index: Schema.optional(Schema.Number),
    target: Schema.optional(
      GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode,
    ),
    eventHandler: Schema.optional(GoogleCloudDialogflowCxV3beta1EventHandler),
    source: Schema.optional(
      GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode,
    ),
    covered: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition",
  });

export interface GoogleCloudDialogflowCxV3beta1TransitionCoverage {
  transitions?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition>;
  coverageScore?: number;
}

export const GoogleCloudDialogflowCxV3beta1TransitionCoverage: Schema.Schema<GoogleCloudDialogflowCxV3beta1TransitionCoverage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transitions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition),
    ),
    coverageScore: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1TransitionCoverage",
  });

export interface GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse {
  agent?: string;
  transitionCoverage?: GoogleCloudDialogflowCxV3beta1TransitionCoverage;
  intentCoverage?: GoogleCloudDialogflowCxV3beta1IntentCoverage;
  routeGroupCoverage?: GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage;
}

export const GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agent: Schema.optional(Schema.String),
    transitionCoverage: Schema.optional(
      GoogleCloudDialogflowCxV3beta1TransitionCoverage,
    ),
    intentCoverage: Schema.optional(
      GoogleCloudDialogflowCxV3beta1IntentCoverage,
    ),
    routeGroupCoverage: Schema.optional(
      GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput {
  status?: GoogleRpcStatus;
  sessionParameters?: Record<string, unknown>;
  differences?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TestRunDifference>;
  currentPage?: GoogleCloudDialogflowCxV3beta1Page;
  textResponses?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ResponseMessageText>;
  diagnosticInfo?: Record<string, unknown>;
  triggeredIntent?: GoogleCloudDialogflowCxV3beta1Intent;
}

export const GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput: Schema.Schema<GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(GoogleRpcStatus),
    sessionParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
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
    triggeredIntent: Schema.optional(GoogleCloudDialogflowCxV3beta1Intent),
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
  testTime?: string;
  conversationTurns?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ConversationTurn>;
  environment?: string;
  testResult?: "TEST_RESULT_UNSPECIFIED" | "PASSED" | "FAILED" | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1TestCaseResult: Schema.Schema<GoogleCloudDialogflowCxV3beta1TestCaseResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    testTime: Schema.optional(Schema.String),
    conversationTurns: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ConversationTurn),
    ),
    environment: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent {
  media?: GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia;
  suggestions?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion>;
  title?: string;
  description?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    media: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia,
    ),
    suggestions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion),
    ),
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent",
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

export interface GoogleCloudDialogflowCxV3beta1DeploymentResult {
  deploymentTestResults?: ReadonlyArray<string>;
  experiment?: string;
}

export const GoogleCloudDialogflowCxV3beta1DeploymentResult: Schema.Schema<GoogleCloudDialogflowCxV3beta1DeploymentResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deploymentTestResults: Schema.optional(Schema.Array(Schema.String)),
    experiment: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1DeploymentResult" });

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

export interface GoogleCloudDialogflowV2beta1FaqAnswer {
  answer?: string;
  answerRecord?: string;
  source?: string;
  metadata?: Record<string, string>;
  confidence?: number;
  question?: string;
}

export const GoogleCloudDialogflowV2beta1FaqAnswer: Schema.Schema<GoogleCloudDialogflowV2beta1FaqAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answer: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    confidence: Schema.optional(Schema.Number),
    question: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowV2ToolCall {
  tool?: string;
  createTime?: string;
  toolDisplayDetails?: string;
  inputParameters?: Record<string, unknown>;
  cesToolset?: string;
  toolDisplayName?: string;
  state?:
    | "STATE_UNSPECIFIED"
    | "TRIGGERED"
    | "NEEDS_CONFIRMATION"
    | (string & {});
  cesApp?: string;
  action?: string;
  cesTool?: string;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2ToolCall: Schema.Schema<GoogleCloudDialogflowV2ToolCall> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tool: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    toolDisplayDetails: Schema.optional(Schema.String),
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    cesToolset: Schema.optional(Schema.String),
    toolDisplayName: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    cesApp: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    cesTool: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolCall" });

export interface GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo {
  tag?: string;
}

export const GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo: Schema.Schema<GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tag: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo",
  });

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

export interface GoogleCloudDialogflowCxV3beta1ToolServiceDirectoryConfig {
  service?: string;
}

export const GoogleCloudDialogflowCxV3beta1ToolServiceDirectoryConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolServiceDirectoryConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ToolServiceDirectoryConfig",
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

export interface GoogleCloudDialogflowCxV3beta1LoadVersionRequest {
  allowOverrideAgentResources?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1LoadVersionRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1LoadVersionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowOverrideAgentResources: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1LoadVersionRequest",
  });

export interface GoogleCloudDialogflowV2beta1IntentParameter {
  displayName?: string;
  mandatory?: boolean;
  value?: string;
  entityTypeDisplayName?: string;
  isList?: boolean;
  name?: string;
  prompts?: ReadonlyArray<string>;
  defaultValue?: string;
}

export const GoogleCloudDialogflowV2beta1IntentParameter: Schema.Schema<GoogleCloudDialogflowV2beta1IntentParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    mandatory: Schema.optional(Schema.Boolean),
    value: Schema.optional(Schema.String),
    entityTypeDisplayName: Schema.optional(Schema.String),
    isList: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    prompts: Schema.optional(Schema.Array(Schema.String)),
    defaultValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentParameter" });

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

export interface GoogleCloudDialogflowCxV3beta1RestorePlaybookVersionResponse {
  playbook?: GoogleCloudDialogflowCxV3beta1Playbook;
}

export const GoogleCloudDialogflowCxV3beta1RestorePlaybookVersionResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1RestorePlaybookVersionResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    playbook: Schema.optional(GoogleCloudDialogflowCxV3beta1Playbook),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RestorePlaybookVersionResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1CompareVersionsResponse {
  baseVersionContentJson?: string;
  compareTime?: string;
  targetVersionContentJson?: string;
}

export const GoogleCloudDialogflowCxV3beta1CompareVersionsResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1CompareVersionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    baseVersionContentJson: Schema.optional(Schema.String),
    compareTime: Schema.optional(Schema.String),
    targetVersionContentJson: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1CompareVersionsResponse",
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
  outputFields?: ReadonlyArray<string>;
  connectionActionId?: string;
  inputFields?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1ToolConnectorToolAction: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolConnectorToolAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityOperation: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolConnectorToolActionEntityOperation,
    ),
    outputFields: Schema.optional(Schema.Array(Schema.String)),
    connectionActionId: Schema.optional(Schema.String),
    inputFields: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ToolConnectorToolAction",
  });

export interface GoogleCloudDialogflowCxV3beta1ToolConnectorTool {
  endUserAuthConfig?: GoogleCloudDialogflowCxV3beta1ToolEndUserAuthConfig;
  actions?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ToolConnectorToolAction>;
  name?: string;
}

export const GoogleCloudDialogflowCxV3beta1ToolConnectorTool: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolConnectorTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endUserAuthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolEndUserAuthConfig,
    ),
    actions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ToolConnectorToolAction),
    ),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ToolConnectorTool",
  });

export interface GoogleCloudDialogflowCxV3beta1ToolExtensionTool {
  name?: string;
}

export const GoogleCloudDialogflowCxV3beta1ToolExtensionTool: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolExtensionTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ToolExtensionTool",
  });

export interface GoogleCloudDialogflowCxV3beta1ToolFunctionTool {
  outputSchema?: Record<string, unknown>;
  inputSchema?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3beta1ToolFunctionTool: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolFunctionTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputSchema: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    inputSchema: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ToolFunctionTool" });

export interface GoogleCloudDialogflowCxV3beta1ToolDataStoreToolFallbackPrompt {}

export const GoogleCloudDialogflowCxV3beta1ToolDataStoreToolFallbackPrompt: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolDataStoreToolFallbackPrompt> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ToolDataStoreToolFallbackPrompt",
  });

export interface GoogleCloudDialogflowCxV3beta1ToolDataStoreTool {
  fallbackPrompt?: GoogleCloudDialogflowCxV3beta1ToolDataStoreToolFallbackPrompt;
  dataStoreConnections?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1DataStoreConnection>;
}

export const GoogleCloudDialogflowCxV3beta1ToolDataStoreTool: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolDataStoreTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fallbackPrompt: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolDataStoreToolFallbackPrompt,
    ),
    dataStoreConnections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1DataStoreConnection),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ToolDataStoreTool",
  });

export interface GoogleCloudDialogflowCxV3beta1ToolTLSConfigCACert {
  cert?: string;
  displayName?: string;
}

export const GoogleCloudDialogflowCxV3beta1ToolTLSConfigCACert: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolTLSConfigCACert> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cert: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowCxV3beta1ToolAuthenticationOAuthConfig {
  secretVersionForClientSecret?: string;
  scopes?: ReadonlyArray<string>;
  oauthGrantType?:
    | "OAUTH_GRANT_TYPE_UNSPECIFIED"
    | "CLIENT_CREDENTIAL"
    | (string & {});
  clientSecret?: string;
  tokenEndpoint?: string;
  clientId?: string;
}

export const GoogleCloudDialogflowCxV3beta1ToolAuthenticationOAuthConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolAuthenticationOAuthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    secretVersionForClientSecret: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Schema.String)),
    oauthGrantType: Schema.optional(Schema.String),
    clientSecret: Schema.optional(Schema.String),
    tokenEndpoint: Schema.optional(Schema.String),
    clientId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ToolAuthenticationOAuthConfig",
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

export interface GoogleCloudDialogflowCxV3beta1ToolAuthenticationApiKeyConfig {
  keyName?: string;
  apiKey?: string;
  requestLocation?:
    | "REQUEST_LOCATION_UNSPECIFIED"
    | "HEADER"
    | "QUERY_STRING"
    | (string & {});
  secretVersionForApiKey?: string;
}

export const GoogleCloudDialogflowCxV3beta1ToolAuthenticationApiKeyConfig: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolAuthenticationApiKeyConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyName: Schema.optional(Schema.String),
    apiKey: Schema.optional(Schema.String),
    requestLocation: Schema.optional(Schema.String),
    secretVersionForApiKey: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ToolAuthenticationApiKeyConfig",
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
  oauthConfig?: GoogleCloudDialogflowCxV3beta1ToolAuthenticationOAuthConfig;
  serviceAgentAuthConfig?: GoogleCloudDialogflowCxV3beta1ToolAuthenticationServiceAgentAuthConfig;
  serviceAccountAuthConfig?: GoogleCloudDialogflowCxV3beta1ToolAuthenticationServiceAccountAuthConfig;
  apiKeyConfig?: GoogleCloudDialogflowCxV3beta1ToolAuthenticationApiKeyConfig;
  bearerTokenConfig?: GoogleCloudDialogflowCxV3beta1ToolAuthenticationBearerTokenConfig;
}

export const GoogleCloudDialogflowCxV3beta1ToolAuthentication: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolAuthentication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oauthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolAuthenticationOAuthConfig,
    ),
    serviceAgentAuthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolAuthenticationServiceAgentAuthConfig,
    ),
    serviceAccountAuthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolAuthenticationServiceAccountAuthConfig,
    ),
    apiKeyConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolAuthenticationApiKeyConfig,
    ),
    bearerTokenConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolAuthenticationBearerTokenConfig,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ToolAuthentication",
  });

export interface GoogleCloudDialogflowCxV3beta1ToolOpenApiTool {
  textSchema?: string;
  serviceDirectoryConfig?: GoogleCloudDialogflowCxV3beta1ToolServiceDirectoryConfig;
  tlsConfig?: GoogleCloudDialogflowCxV3beta1ToolTLSConfig;
  authentication?: GoogleCloudDialogflowCxV3beta1ToolAuthentication;
}

export const GoogleCloudDialogflowCxV3beta1ToolOpenApiTool: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolOpenApiTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    textSchema: Schema.optional(Schema.String),
    serviceDirectoryConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolServiceDirectoryConfig,
    ),
    tlsConfig: Schema.optional(GoogleCloudDialogflowCxV3beta1ToolTLSConfig),
    authentication: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolAuthentication,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ToolOpenApiTool" });

export interface GoogleCloudDialogflowCxV3beta1Tool {
  connectorSpec?: GoogleCloudDialogflowCxV3beta1ToolConnectorTool;
  extensionSpec?: GoogleCloudDialogflowCxV3beta1ToolExtensionTool;
  toolType?:
    | "TOOL_TYPE_UNSPECIFIED"
    | "CUSTOMIZED_TOOL"
    | "BUILTIN_TOOL"
    | (string & {});
  displayName?: string;
  functionSpec?: GoogleCloudDialogflowCxV3beta1ToolFunctionTool;
  dataStoreSpec?: GoogleCloudDialogflowCxV3beta1ToolDataStoreTool;
  name?: string;
  description?: string;
  openApiSpec?: GoogleCloudDialogflowCxV3beta1ToolOpenApiTool;
}

export const GoogleCloudDialogflowCxV3beta1Tool: Schema.Schema<GoogleCloudDialogflowCxV3beta1Tool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connectorSpec: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolConnectorTool,
    ),
    extensionSpec: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolExtensionTool,
    ),
    toolType: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    functionSpec: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolFunctionTool,
    ),
    dataStoreSpec: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolDataStoreTool,
    ),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    openApiSpec: Schema.optional(GoogleCloudDialogflowCxV3beta1ToolOpenApiTool),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Tool" });

export interface GoogleCloudDialogflowCxV3beta1RestoreToolVersionResponse {
  tool?: GoogleCloudDialogflowCxV3beta1Tool;
}

export const GoogleCloudDialogflowCxV3beta1RestoreToolVersionResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1RestoreToolVersionResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tool: Schema.optional(GoogleCloudDialogflowCxV3beta1Tool),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RestoreToolVersionResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportAgentResponse {
  commitSha?: string;
  agentContent?: string;
  agentUri?: string;
}

export const GoogleCloudDialogflowCxV3beta1ExportAgentResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportAgentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    commitSha: Schema.optional(Schema.String),
    agentContent: Schema.optional(Schema.String),
    agentUri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportAgentResponse",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer {
  answer?: string;
  source?: string;
  matchConfidence?: number;
  matchConfidenceLevel?:
    | "MATCH_CONFIDENCE_LEVEL_UNSPECIFIED"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | (string & {});
  faqQuestion?: string;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answer: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    matchConfidence: Schema.optional(Schema.Number),
    matchConfidenceLevel: Schema.optional(Schema.String),
    faqQuestion: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart {
  entityType?: string;
  text?: string;
  alias?: string;
  userDefined?: boolean;
}

export const GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart: Schema.Schema<GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityType: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
    alias: Schema.optional(Schema.String),
    userDefined: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart",
  });

export interface GoogleCloudDialogflowV2beta1IntentTrainingPhrase {
  type?: "TYPE_UNSPECIFIED" | "EXAMPLE" | "TEMPLATE" | (string & {});
  name?: string;
  parts?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart>;
  timesAddedCount?: number;
}

export const GoogleCloudDialogflowV2beta1IntentTrainingPhrase: Schema.Schema<GoogleCloudDialogflowV2beta1IntentTrainingPhrase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    parts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart),
    ),
    timesAddedCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentTrainingPhrase",
  });

export interface GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment {
  uri?: string;
  audio?: string;
  allowPlaybackInterruption?: boolean;
}

export const GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment: Schema.Schema<GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    audio: Schema.optional(Schema.String),
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment",
  });

export interface GoogleCloudDialogflowCxV3beta1TestCase {
  name?: string;
  notes?: string;
  creationTime?: string;
  lastTestResult?: GoogleCloudDialogflowCxV3beta1TestCaseResult;
  displayName?: string;
  testConfig?: GoogleCloudDialogflowCxV3beta1TestConfig;
  testCaseConversationTurns?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ConversationTurn>;
  tags?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1TestCase: Schema.Schema<GoogleCloudDialogflowCxV3beta1TestCase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    notes: Schema.optional(Schema.String),
    creationTime: Schema.optional(Schema.String),
    lastTestResult: Schema.optional(
      GoogleCloudDialogflowCxV3beta1TestCaseResult,
    ),
    displayName: Schema.optional(Schema.String),
    testConfig: Schema.optional(GoogleCloudDialogflowCxV3beta1TestConfig),
    testCaseConversationTurns: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ConversationTurn),
    ),
    tags: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TestCase" });

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

export interface GoogleCloudDialogflowV2EntityType {
  enableFuzzyExtraction?: boolean;
  name?: string;
  displayName?: string;
  entities?: ReadonlyArray<GoogleCloudDialogflowV2EntityTypeEntity>;
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

export const GoogleCloudDialogflowV2EntityType: Schema.Schema<GoogleCloudDialogflowV2EntityType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableFuzzyExtraction: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2EntityTypeEntity),
    ),
    kind: Schema.optional(Schema.String),
    autoExpansionMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2EntityType" });

export interface GoogleCloudDialogflowCxV3beta1ImportTestCasesRequest {
  content?: string;
  gcsUri?: string;
}

export const GoogleCloudDialogflowCxV3beta1ImportTestCasesRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportTestCasesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
    gcsUri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportTestCasesRequest",
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

export interface GoogleCloudDialogflowV2beta1IntentMessageBasicCard {
  title?: string;
  subtitle?: string;
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton>;
  formattedText?: string;
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
}

export const GoogleCloudDialogflowV2beta1IntentMessageBasicCard: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageBasicCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    subtitle: Schema.optional(Schema.String),
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton),
    ),
    formattedText: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageBasicCard",
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

export interface GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse {
  ssml?: string;
  textToSpeech?: string;
  displayText?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ssml: Schema.optional(Schema.String),
    textToSpeech: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem {
  title?: string;
  description?: string;
  info?: GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo;
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
}

export const GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    info: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo,
    ),
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

export interface GoogleCloudDialogflowV2beta1IntentMessageText {
  text?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageText: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageText> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentMessageText" });

export interface GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem {
  footer?: string;
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  openUriAction?: GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;
  description?: string;
  title?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    footer: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
    openUriAction: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction,
    ),
    description: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowV2beta1IntentMessageTableCard {
  columnProperties?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageColumnProperties>;
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton>;
  rows?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageTableCardRow>;
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  title?: string;
  subtitle?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageTableCard: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageTableCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    columnProperties: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageColumnProperties),
    ),
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton),
    ),
    rows: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageTableCardRow),
    ),
    image: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
    title: Schema.optional(Schema.String),
    subtitle: Schema.optional(Schema.String),
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
  imageUri?: string;
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageCardButton>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageCard: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    subtitle: Schema.optional(Schema.String),
    imageUri: Schema.optional(Schema.String),
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageCardButton),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentMessageCard" });

export interface GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio {
  audioUri?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audioUri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio",
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

export interface GoogleCloudDialogflowV2beta1IntentMessage {
  listSelect?: GoogleCloudDialogflowV2beta1IntentMessageListSelect;
  basicCard?: GoogleCloudDialogflowV2beta1IntentMessageBasicCard;
  telephonySynthesizeSpeech?: GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech;
  rbmText?: GoogleCloudDialogflowV2beta1IntentMessageRbmText;
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
  quickReplies?: GoogleCloudDialogflowV2beta1IntentMessageQuickReplies;
  simpleResponses?: GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses;
  carouselSelect?: GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect;
  mediaContent?: GoogleCloudDialogflowV2beta1IntentMessageMediaContent;
  payload?: Record<string, unknown>;
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  suggestions?: GoogleCloudDialogflowV2beta1IntentMessageSuggestions;
  rbmStandaloneRichCard?: GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard;
  text?: GoogleCloudDialogflowV2beta1IntentMessageText;
  browseCarouselCard?: GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard;
  tableCard?: GoogleCloudDialogflowV2beta1IntentMessageTableCard;
  telephonyTransferCall?: GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall;
  rbmCarouselRichCard?: GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard;
  card?: GoogleCloudDialogflowV2beta1IntentMessageCard;
  telephonyPlayAudio?: GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio;
  linkOutSuggestion?: GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion;
}

export const GoogleCloudDialogflowV2beta1IntentMessage: Schema.Schema<GoogleCloudDialogflowV2beta1IntentMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    listSelect: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageListSelect,
    ),
    basicCard: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageBasicCard,
    ),
    telephonySynthesizeSpeech: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech,
    ),
    rbmText: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageRbmText),
    platform: Schema.optional(Schema.String),
    quickReplies: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageQuickReplies,
    ),
    simpleResponses: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses,
    ),
    carouselSelect: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect,
    ),
    mediaContent: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageMediaContent,
    ),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    image: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
    suggestions: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageSuggestions,
    ),
    rbmStandaloneRichCard: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard,
    ),
    text: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageText),
    browseCarouselCard: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard,
    ),
    tableCard: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageTableCard,
    ),
    telephonyTransferCall: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall,
    ),
    rbmCarouselRichCard: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard,
    ),
    card: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageCard),
    telephonyPlayAudio: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio,
    ),
    linkOutSuggestion: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentMessage" });

export interface GoogleCloudDialogflowV2beta1Context {
  lifespanCount?: number;
  name?: string;
  parameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2beta1Context: Schema.Schema<GoogleCloudDialogflowV2beta1Context> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lifespanCount: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowV2beta1Intent {
  events?: ReadonlyArray<string>;
  mlEnabled?: boolean;
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
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2beta1Context>;
  inputContextNames?: ReadonlyArray<string>;
  action?: string;
  mlDisabled?: boolean;
  parentFollowupIntentName?: string;
  followupIntentInfo?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo>;
  isFallback?: boolean;
  endInteraction?: boolean;
  trainingPhrases?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentTrainingPhrase>;
  webhookState?:
    | "WEBHOOK_STATE_UNSPECIFIED"
    | "WEBHOOK_STATE_ENABLED"
    | "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"
    | (string & {});
  rootFollowupIntentName?: string;
  resetContexts?: boolean;
  name?: string;
  parameters?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentParameter>;
  messages?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessage>;
  priority?: number;
  displayName?: string;
  liveAgentHandoff?: boolean;
}

export const GoogleCloudDialogflowV2beta1Intent: Schema.Schema<GoogleCloudDialogflowV2beta1Intent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    events: Schema.optional(Schema.Array(Schema.String)),
    mlEnabled: Schema.optional(Schema.Boolean),
    defaultResponsePlatforms: Schema.optional(Schema.Array(Schema.String)),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1Context),
    ),
    inputContextNames: Schema.optional(Schema.Array(Schema.String)),
    action: Schema.optional(Schema.String),
    mlDisabled: Schema.optional(Schema.Boolean),
    parentFollowupIntentName: Schema.optional(Schema.String),
    followupIntentInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo),
    ),
    isFallback: Schema.optional(Schema.Boolean),
    endInteraction: Schema.optional(Schema.Boolean),
    trainingPhrases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentTrainingPhrase),
    ),
    webhookState: Schema.optional(Schema.String),
    rootFollowupIntentName: Schema.optional(Schema.String),
    resetContexts: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    parameters: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentParameter),
    ),
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessage),
    ),
    priority: Schema.optional(Schema.Number),
    displayName: Schema.optional(Schema.String),
    liveAgentHandoff: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1Intent" });

export interface GoogleCloudDialogflowV2beta1QueryResult {
  diagnosticInfo?: Record<string, unknown>;
  queryText?: string;
  parameters?: Record<string, unknown>;
  webhookPayload?: Record<string, unknown>;
  allRequiredParamsPresent?: boolean;
  fulfillmentMessages?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessage>;
  intentDetectionConfidence?: number;
  cancelsSlotFilling?: boolean;
  sentimentAnalysisResult?: GoogleCloudDialogflowV2beta1SentimentAnalysisResult;
  intent?: GoogleCloudDialogflowV2beta1Intent;
  fulfillmentText?: string;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2beta1Context>;
  action?: string;
  knowledgeAnswers?: GoogleCloudDialogflowV2beta1KnowledgeAnswers;
  speechRecognitionConfidence?: number;
  languageCode?: string;
  webhookSource?: string;
}

export const GoogleCloudDialogflowV2beta1QueryResult: Schema.Schema<GoogleCloudDialogflowV2beta1QueryResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    diagnosticInfo: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    queryText: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    webhookPayload: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    allRequiredParamsPresent: Schema.optional(Schema.Boolean),
    fulfillmentMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessage),
    ),
    intentDetectionConfidence: Schema.optional(Schema.Number),
    cancelsSlotFilling: Schema.optional(Schema.Boolean),
    sentimentAnalysisResult: Schema.optional(
      GoogleCloudDialogflowV2beta1SentimentAnalysisResult,
    ),
    intent: Schema.optional(GoogleCloudDialogflowV2beta1Intent),
    fulfillmentText: Schema.optional(Schema.String),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1Context),
    ),
    action: Schema.optional(Schema.String),
    knowledgeAnswers: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAnswers,
    ),
    speechRecognitionConfidence: Schema.optional(Schema.Number),
    languageCode: Schema.optional(Schema.String),
    webhookSource: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1QueryResult" });

export interface GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest {
  payload?: Record<string, unknown>;
  version?: string;
  source?: string;
}

export const GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest: Schema.Schema<GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    version: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest",
  });

export interface GoogleCloudDialogflowV2beta1WebhookRequest {
  responseId?: string;
  session?: string;
  queryResult?: GoogleCloudDialogflowV2beta1QueryResult;
  alternativeQueryResults?: ReadonlyArray<GoogleCloudDialogflowV2beta1QueryResult>;
  originalDetectIntentRequest?: GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest;
}

export const GoogleCloudDialogflowV2beta1WebhookRequest: Schema.Schema<GoogleCloudDialogflowV2beta1WebhookRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responseId: Schema.optional(Schema.String),
    session: Schema.optional(Schema.String),
    queryResult: Schema.optional(GoogleCloudDialogflowV2beta1QueryResult),
    alternativeQueryResults: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1QueryResult),
    ),
    originalDetectIntentRequest: Schema.optional(
      GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1WebhookRequest" });

export interface GoogleCloudDialogflowV2beta1ImportDocumentsResponse {
  warnings?: ReadonlyArray<GoogleRpcStatus>;
}

export const GoogleCloudDialogflowV2beta1ImportDocumentsResponse: Schema.Schema<GoogleCloudDialogflowV2beta1ImportDocumentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    warnings: Schema.optional(Schema.Array(GoogleRpcStatus)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ImportDocumentsResponse",
  });

export interface GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadata {
  participantRole?:
    | "ROLE_UNSPECIFIED"
    | "HUMAN_AGENT"
    | "AUTOMATED_AGENT"
    | "END_USER"
    | (string & {});
  createTime?: string;
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
}

export const GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    participantRole: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    conversationProfile: Schema.optional(Schema.String),
    suggestionFeatureType: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadata",
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

export interface GoogleCloudDialogflowCxV3beta1EntityTypeExcludedPhrase {
  value?: string;
}

export const GoogleCloudDialogflowCxV3beta1EntityTypeExcludedPhrase: Schema.Schema<GoogleCloudDialogflowCxV3beta1EntityTypeExcludedPhrase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1EntityTypeExcludedPhrase",
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

export interface GoogleCloudDialogflowV3alpha1TurnSignals {
  noMatch?: boolean;
  dtmfUsed?: boolean;
  triggeredAbandonmentEvent?: boolean;
  sentimentMagnitude?: number;
  noUserInput?: boolean;
  userEscalated?: boolean;
  failureReasons?: ReadonlyArray<
    | "FAILURE_REASON_UNSPECIFIED"
    | "FAILED_INTENT"
    | "FAILED_WEBHOOK"
    | (string & {})
  >;
  sentimentScore?: number;
  webhookStatuses?: ReadonlyArray<string>;
  agentEscalated?: boolean;
  reachedEndPage?: boolean;
}

export const GoogleCloudDialogflowV3alpha1TurnSignals: Schema.Schema<GoogleCloudDialogflowV3alpha1TurnSignals> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    noMatch: Schema.optional(Schema.Boolean),
    dtmfUsed: Schema.optional(Schema.Boolean),
    triggeredAbandonmentEvent: Schema.optional(Schema.Boolean),
    sentimentMagnitude: Schema.optional(Schema.Number),
    noUserInput: Schema.optional(Schema.Boolean),
    userEscalated: Schema.optional(Schema.Boolean),
    failureReasons: Schema.optional(Schema.Array(Schema.String)),
    sentimentScore: Schema.optional(Schema.Number),
    webhookStatuses: Schema.optional(Schema.Array(Schema.String)),
    agentEscalated: Schema.optional(Schema.Boolean),
    reachedEndPage: Schema.optional(Schema.Boolean),
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

export interface GoogleCloudDialogflowV2EncryptionSpec {
  name?: string;
  kmsKey?: string;
}

export const GoogleCloudDialogflowV2EncryptionSpec: Schema.Schema<GoogleCloudDialogflowV2EncryptionSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    kmsKey: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowCxV3beta1Changelog {
  name?: string;
  action?: string;
  languageCode?: string;
  userEmail?: string;
  type?: string;
  displayName?: string;
  resource?: string;
  createTime?: string;
}

export const GoogleCloudDialogflowCxV3beta1Changelog: Schema.Schema<GoogleCloudDialogflowCxV3beta1Changelog> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    userEmail: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Changelog" });

export interface GoogleCloudDialogflowV2beta1ResponseMessageText {
  text?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1ResponseMessageText: Schema.Schema<GoogleCloudDialogflowV2beta1ResponseMessageText> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ResponseMessageText",
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

export interface GoogleCloudDialogflowCxV3beta1Phrase {
  text?: string;
}

export const GoogleCloudDialogflowCxV3beta1Phrase: Schema.Schema<GoogleCloudDialogflowCxV3beta1Phrase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Phrase" });

export interface GoogleCloudDialogflowCxV3beta1GeneratorModelParameter {
  temperature?: number;
  topP?: number;
  maxDecodeSteps?: number;
  topK?: number;
}

export const GoogleCloudDialogflowCxV3beta1GeneratorModelParameter: Schema.Schema<GoogleCloudDialogflowCxV3beta1GeneratorModelParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    temperature: Schema.optional(Schema.Number),
    topP: Schema.optional(Schema.Number),
    maxDecodeSteps: Schema.optional(Schema.Number),
    topK: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1GeneratorModelParameter",
  });

export interface GoogleCloudDialogflowCxV3beta1GeneratorPlaceholder {
  id?: string;
  name?: string;
}

export const GoogleCloudDialogflowCxV3beta1GeneratorPlaceholder: Schema.Schema<GoogleCloudDialogflowCxV3beta1GeneratorPlaceholder> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1GeneratorPlaceholder",
  });

export interface GoogleCloudDialogflowCxV3beta1Generator {
  displayName?: string;
  promptText?: GoogleCloudDialogflowCxV3beta1Phrase;
  modelParameter?: GoogleCloudDialogflowCxV3beta1GeneratorModelParameter;
  placeholders?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1GeneratorPlaceholder>;
  llmModelSettings?: GoogleCloudDialogflowCxV3beta1LlmModelSettings;
  name?: string;
}

export const GoogleCloudDialogflowCxV3beta1Generator: Schema.Schema<GoogleCloudDialogflowCxV3beta1Generator> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    promptText: Schema.optional(GoogleCloudDialogflowCxV3beta1Phrase),
    modelParameter: Schema.optional(
      GoogleCloudDialogflowCxV3beta1GeneratorModelParameter,
    ),
    placeholders: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1GeneratorPlaceholder),
    ),
    llmModelSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1LlmModelSettings,
    ),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Generator" });

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

export interface GoogleCloudDialogflowCxV3WebhookRequestIntentInfo {
  parameters?: Record<
    string,
    GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue
  >;
  displayName?: string;
  lastMatchedIntent?: string;
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
    displayName: Schema.optional(Schema.String),
    lastMatchedIntent: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3WebhookRequestIntentInfo",
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

export interface GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfo {
  ingestedParametersDebugInfo?: ReadonlyArray<GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfoIngestedParameterDebugInfo>;
  projectNotAllowlisted?: boolean;
  contextReferenceRetrieved?: boolean;
}

export const GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfo: Schema.Schema<GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ingestedParametersDebugInfo: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfoIngestedParameterDebugInfo,
      ),
    ),
    projectNotAllowlisted: Schema.optional(Schema.Boolean),
    contextReferenceRetrieved: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfo",
  });

export interface GoogleCloudDialogflowCxV3beta1ConversationMetricsQueryInputCount {
  textCount?: number;
  eventCount?: number;
  dtmfCount?: number;
  audioCount?: number;
  intentCount?: number;
}

export const GoogleCloudDialogflowCxV3beta1ConversationMetricsQueryInputCount: Schema.Schema<GoogleCloudDialogflowCxV3beta1ConversationMetricsQueryInputCount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    textCount: Schema.optional(Schema.Number),
    eventCount: Schema.optional(Schema.Number),
    dtmfCount: Schema.optional(Schema.Number),
    audioCount: Schema.optional(Schema.Number),
    intentCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ConversationMetricsQueryInputCount",
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
  flowImportStrategy?: GoogleCloudDialogflowCxV3beta1FlowImportStrategy;
  importOption?:
    | "IMPORT_OPTION_UNSPECIFIED"
    | "KEEP"
    | "FALLBACK"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1ImportFlowRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportFlowRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flowUri: Schema.optional(Schema.String),
    flowContent: Schema.optional(Schema.String),
    flowImportStrategy: Schema.optional(
      GoogleCloudDialogflowCxV3beta1FlowImportStrategy,
    ),
    importOption: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportFlowRequest",
  });

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

export interface GoogleCloudDialogflowV2AgentCoachingInstruction {
  displayDetails?: string;
  displayName?: string;
  condition?: string;
  agentAction?: string;
  duplicateCheckResult?: GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResult;
  triggeringEvent?:
    | "TRIGGER_EVENT_UNSPECIFIED"
    | "END_OF_UTTERANCE"
    | "MANUAL_CALL"
    | "CUSTOMER_MESSAGE"
    | "AGENT_MESSAGE"
    | "TOOL_CALL_COMPLETION"
    | (string & {});
  systemAction?: string;
}

export const GoogleCloudDialogflowV2AgentCoachingInstruction: Schema.Schema<GoogleCloudDialogflowV2AgentCoachingInstruction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayDetails: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    condition: Schema.optional(Schema.String),
    agentAction: Schema.optional(Schema.String),
    duplicateCheckResult: Schema.optional(
      GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResult,
    ),
    triggeringEvent: Schema.optional(Schema.String),
    systemAction: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2AgentCoachingInstruction",
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

export interface GoogleCloudDialogflowCxV3beta1ImportIntentsMetadata {}

export const GoogleCloudDialogflowCxV3beta1ImportIntentsMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportIntentsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportIntentsMetadata",
  });

export interface GoogleCloudDialogflowV2ArticleAnswer {
  answerRecord?: string;
  metadata?: Record<string, string>;
  snippets?: ReadonlyArray<string>;
  uri?: string;
  confidence?: number;
  title?: string;
}

export const GoogleCloudDialogflowV2ArticleAnswer: Schema.Schema<GoogleCloudDialogflowV2ArticleAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answerRecord: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    snippets: Schema.optional(Schema.Array(Schema.String)),
    uri: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
    title: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowCxV3beta1PlaybookImportStrategy {
  mainPlaybookImportStrategy?:
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
  nestedResourceImportStrategy?:
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
    toolImportStrategy: Schema.optional(Schema.String),
    nestedResourceImportStrategy: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1PlaybookImportStrategy",
  });

export interface GoogleCloudDialogflowCxV3beta1ImportPlaybookRequest {
  playbookUri?: string;
  importStrategy?: GoogleCloudDialogflowCxV3beta1PlaybookImportStrategy;
  playbookContent?: string;
}

export const GoogleCloudDialogflowCxV3beta1ImportPlaybookRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportPlaybookRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    playbookUri: Schema.optional(Schema.String),
    importStrategy: Schema.optional(
      GoogleCloudDialogflowCxV3beta1PlaybookImportStrategy,
    ),
    playbookContent: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportPlaybookRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1ListToolsResponse {
  tools?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Tool>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3beta1ListToolsResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ListToolsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tools: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3beta1Tool)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ListToolsResponse",
  });

export interface GoogleLongrunningOperation {
  done?: boolean;
  error?: GoogleRpcStatus;
  response?: Record<string, unknown>;
  name?: string;
  metadata?: Record<string, unknown>;
}

export const GoogleLongrunningOperation: Schema.Schema<GoogleLongrunningOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    done: Schema.optional(Schema.Boolean),
    error: Schema.optional(GoogleRpcStatus),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleLongrunningOperation" });

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

export interface GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig {
  secretVersionForClientSecret?: string;
  scopes?: ReadonlyArray<string>;
  clientSecret?: string;
  tokenEndpoint?: string;
  clientId?: string;
}

export const GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig: Schema.Schema<GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    secretVersionForClientSecret: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Schema.String)),
    clientSecret: Schema.optional(Schema.String),
    tokenEndpoint: Schema.optional(Schema.String),
    clientId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig",
  });

export interface GoogleCloudDialogflowCxV3WebhookGenericWebService {
  allowedCaCerts?: ReadonlyArray<string>;
  requestBody?: string;
  requestHeaders?: Record<string, string>;
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
  username?: string;
  parameterMapping?: Record<string, string>;
  secretVersionForUsernamePassword?: string;
  serviceAgentAuth?:
    | "SERVICE_AGENT_AUTH_UNSPECIFIED"
    | "NONE"
    | "ID_TOKEN"
    | "ACCESS_TOKEN"
    | (string & {});
  uri?: string;
  serviceAccountAuthConfig?: GoogleCloudDialogflowCxV3WebhookGenericWebServiceServiceAccountAuthConfig;
  webhookType?:
    | "WEBHOOK_TYPE_UNSPECIFIED"
    | "STANDARD"
    | "FLEXIBLE"
    | (string & {});
  secretVersionsForRequestHeaders?: Record<
    string,
    GoogleCloudDialogflowCxV3WebhookGenericWebServiceSecretVersionHeaderValue
  >;
  oauthConfig?: GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig;
}

export const GoogleCloudDialogflowCxV3WebhookGenericWebService: Schema.Schema<GoogleCloudDialogflowCxV3WebhookGenericWebService> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowedCaCerts: Schema.optional(Schema.Array(Schema.String)),
    requestBody: Schema.optional(Schema.String),
    requestHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    password: Schema.optional(Schema.String),
    httpMethod: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    parameterMapping: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    secretVersionForUsernamePassword: Schema.optional(Schema.String),
    serviceAgentAuth: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    serviceAccountAuthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookGenericWebServiceServiceAccountAuthConfig,
    ),
    webhookType: Schema.optional(Schema.String),
    secretVersionsForRequestHeaders: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowCxV3WebhookGenericWebServiceSecretVersionHeaderValue,
      ),
    ),
    oauthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig,
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

export interface GoogleCloudDialogflowCxV3ExportIntentsMetadata {}

export const GoogleCloudDialogflowCxV3ExportIntentsMetadata: Schema.Schema<GoogleCloudDialogflowCxV3ExportIntentsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ExportIntentsMetadata",
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

export interface GoogleCloudDialogflowV2beta1AnnotatedMessagePart {
  entityType?: string;
  formattedValue?: unknown;
  text?: string;
}

export const GoogleCloudDialogflowV2beta1AnnotatedMessagePart: Schema.Schema<GoogleCloudDialogflowV2beta1AnnotatedMessagePart> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityType: Schema.optional(Schema.String),
    formattedValue: Schema.optional(Schema.Unknown),
    text: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1AnnotatedMessagePart",
  });

export interface GoogleCloudDialogflowV2beta1MessageAnnotation {
  containEntities?: boolean;
  parts?: ReadonlyArray<GoogleCloudDialogflowV2beta1AnnotatedMessagePart>;
}

export const GoogleCloudDialogflowV2beta1MessageAnnotation: Schema.Schema<GoogleCloudDialogflowV2beta1MessageAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containEntities: Schema.optional(Schema.Boolean),
    parts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1AnnotatedMessagePart),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1MessageAnnotation" });

export interface GoogleCloudDialogflowCxV3beta1TurnSignals {
  noUserInput?: boolean;
  userEscalated?: boolean;
  dtmfUsed?: boolean;
  sentimentMagnitude?: number;
  noMatch?: boolean;
  agentEscalated?: boolean;
  reachedEndPage?: boolean;
  sentimentScore?: number;
  webhookStatuses?: ReadonlyArray<string>;
  failureReasons?: ReadonlyArray<
    | "FAILURE_REASON_UNSPECIFIED"
    | "FAILED_INTENT"
    | "FAILED_WEBHOOK"
    | (string & {})
  >;
}

export const GoogleCloudDialogflowCxV3beta1TurnSignals: Schema.Schema<GoogleCloudDialogflowCxV3beta1TurnSignals> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    noUserInput: Schema.optional(Schema.Boolean),
    userEscalated: Schema.optional(Schema.Boolean),
    dtmfUsed: Schema.optional(Schema.Boolean),
    sentimentMagnitude: Schema.optional(Schema.Number),
    noMatch: Schema.optional(Schema.Boolean),
    agentEscalated: Schema.optional(Schema.Boolean),
    reachedEndPage: Schema.optional(Schema.Boolean),
    sentimentScore: Schema.optional(Schema.Number),
    webhookStatuses: Schema.optional(Schema.Array(Schema.String)),
    failureReasons: Schema.optional(Schema.Array(Schema.String)),
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

export interface GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior {
  conversationTranscriptHasMixedLanguages?: boolean;
  useTranslatedMessage?: boolean;
  endUserMetadataIncluded?: boolean;
  multipleQueriesGenerated?: boolean;
  returnQueryOnly?: boolean;
  usePubsubDelivery?: boolean;
  thirdPartyConnectorAllowed?: boolean;
  primaryQueryRedactedAndReplaced?: boolean;
  answerGenerationRewriterOn?: boolean;
  appendedSearchContextCount?: number;
  previousQueriesIncluded?: boolean;
  invalidItemsQuerySuggestionSkipped?: boolean;
  disableSyncDelivery?: boolean;
  useCustomSafetyFilterLevel?: boolean;
  queryGenerationAgentLanguageMismatch?: boolean;
  queryGenerationEndUserLanguageMismatch?: boolean;
  queryContainedSearchContext?: boolean;
}

export const GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior: Schema.Schema<GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationTranscriptHasMixedLanguages: Schema.optional(Schema.Boolean),
    useTranslatedMessage: Schema.optional(Schema.Boolean),
    endUserMetadataIncluded: Schema.optional(Schema.Boolean),
    multipleQueriesGenerated: Schema.optional(Schema.Boolean),
    returnQueryOnly: Schema.optional(Schema.Boolean),
    usePubsubDelivery: Schema.optional(Schema.Boolean),
    thirdPartyConnectorAllowed: Schema.optional(Schema.Boolean),
    primaryQueryRedactedAndReplaced: Schema.optional(Schema.Boolean),
    answerGenerationRewriterOn: Schema.optional(Schema.Boolean),
    appendedSearchContextCount: Schema.optional(Schema.Number),
    previousQueriesIncluded: Schema.optional(Schema.Boolean),
    invalidItemsQuerySuggestionSkipped: Schema.optional(Schema.Boolean),
    disableSyncDelivery: Schema.optional(Schema.Boolean),
    useCustomSafetyFilterLevel: Schema.optional(Schema.Boolean),
    queryGenerationAgentLanguageMismatch: Schema.optional(Schema.Boolean),
    queryGenerationEndUserLanguageMismatch: Schema.optional(Schema.Boolean),
    queryContainedSearchContext: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior",
  });

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
  name?: string;
  description?: string;
  webhookConfig?: GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig;
  versionConfigs?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig>;
  testCasesConfig?: GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig;
  displayName?: string;
  updateTime?: string;
}

export const GoogleCloudDialogflowCxV3beta1Environment: Schema.Schema<GoogleCloudDialogflowCxV3beta1Environment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    webhookConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig,
    ),
    versionConfigs: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig),
    ),
    testCasesConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig,
    ),
    displayName: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Environment" });

export interface GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigOperationMetadata {
  participantRole?:
    | "ROLE_UNSPECIFIED"
    | "HUMAN_AGENT"
    | "AUTOMATED_AGENT"
    | "END_USER"
    | (string & {});
  createTime?: string;
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
}

export const GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    participantRole: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    conversationProfile: Schema.optional(Schema.String),
    suggestionFeatureType: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigOperationMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1TestCaseError {
  status?: GoogleRpcStatus;
  testCase?: GoogleCloudDialogflowCxV3beta1TestCase;
}

export const GoogleCloudDialogflowCxV3beta1TestCaseError: Schema.Schema<GoogleCloudDialogflowCxV3beta1TestCaseError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(GoogleRpcStatus),
    testCase: Schema.optional(GoogleCloudDialogflowCxV3beta1TestCase),
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

export interface GoogleCloudDialogflowCxV3beta1ExportTestCasesMetadata {}

export const GoogleCloudDialogflowCxV3beta1ExportTestCasesMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportTestCasesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportTestCasesMetadata",
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

export interface GoogleCloudDialogflowCxV3ImportIntentsResponse {
  intents?: ReadonlyArray<string>;
  conflictingResources?: GoogleCloudDialogflowCxV3ImportIntentsResponseConflictingResources;
}

export const GoogleCloudDialogflowCxV3ImportIntentsResponse: Schema.Schema<GoogleCloudDialogflowCxV3ImportIntentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intents: Schema.optional(Schema.Array(Schema.String)),
    conflictingResources: Schema.optional(
      GoogleCloudDialogflowCxV3ImportIntentsResponseConflictingResources,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ImportIntentsResponse" });

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

export interface GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGithubSettings {
  accessToken?: string;
  displayName?: string;
  repositoryUri?: string;
  trackingBranch?: string;
  branches?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGithubSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGithubSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accessToken: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    repositoryUri: Schema.optional(Schema.String),
    trackingBranch: Schema.optional(Schema.String),
    branches: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGithubSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportIntentsMetadata {}

export const GoogleCloudDialogflowCxV3beta1ExportIntentsMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportIntentsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportIntentsMetadata",
  });

export interface GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo {
  displayName?: string;
  state?:
    | "PARAMETER_STATE_UNSPECIFIED"
    | "EMPTY"
    | "INVALID"
    | "FILLED"
    | (string & {});
  value?: unknown;
  justCollected?: boolean;
  required?: boolean;
}

export const GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo: Schema.Schema<GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Unknown),
    justCollected: Schema.optional(Schema.Boolean),
    required: Schema.optional(Schema.Boolean),
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

export interface GoogleCloudDialogflowV2GcsDestination {
  uri?: string;
}

export const GoogleCloudDialogflowV2GcsDestination: Schema.Schema<GoogleCloudDialogflowV2GcsDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2GcsDestination" });

export interface GoogleCloudDialogflowV2ExportOperationMetadata {
  exportedGcsDestination?: GoogleCloudDialogflowV2GcsDestination;
}

export const GoogleCloudDialogflowV2ExportOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2ExportOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exportedGcsDestination: Schema.optional(
      GoogleCloudDialogflowV2GcsDestination,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ExportOperationMetadata" });

export interface GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse {
  environments?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Environment>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    environments: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1Environment),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse",
  });

export interface GoogleCloudDialogflowV2beta1SpeechWordInfo {
  word?: string;
  confidence?: number;
  startOffset?: string;
  endOffset?: string;
}

export const GoogleCloudDialogflowV2beta1SpeechWordInfo: Schema.Schema<GoogleCloudDialogflowV2beta1SpeechWordInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    word: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
    startOffset: Schema.optional(Schema.String),
    endOffset: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1SpeechWordInfo" });

export interface GoogleCloudDialogflowV2beta1StreamingRecognitionResult {
  messageType?:
    | "MESSAGE_TYPE_UNSPECIFIED"
    | "TRANSCRIPT"
    | "END_OF_SINGLE_UTTERANCE"
    | "DTMF_DIGITS"
    | "PARTIAL_DTMF_DIGITS"
    | (string & {});
  speechWordInfo?: ReadonlyArray<GoogleCloudDialogflowV2beta1SpeechWordInfo>;
  speechEndOffset?: string;
  isFinal?: boolean;
  dtmfDigits?: GoogleCloudDialogflowV2beta1TelephonyDtmfEvents;
  confidence?: number;
  languageCode?: string;
  stability?: number;
  transcript?: string;
}

export const GoogleCloudDialogflowV2beta1StreamingRecognitionResult: Schema.Schema<GoogleCloudDialogflowV2beta1StreamingRecognitionResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messageType: Schema.optional(Schema.String),
    speechWordInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SpeechWordInfo),
    ),
    speechEndOffset: Schema.optional(Schema.String),
    isFinal: Schema.optional(Schema.Boolean),
    dtmfDigits: Schema.optional(
      GoogleCloudDialogflowV2beta1TelephonyDtmfEvents,
    ),
    confidence: Schema.optional(Schema.Number),
    languageCode: Schema.optional(Schema.String),
    stability: Schema.optional(Schema.Number),
    transcript: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1StreamingRecognitionResult",
  });

export interface GoogleCloudDialogflowCxV3LanguageInfo {
  confidenceScore?: number;
  resolvedLanguageCode?: string;
  inputLanguageCode?: string;
}

export const GoogleCloudDialogflowCxV3LanguageInfo: Schema.Schema<GoogleCloudDialogflowCxV3LanguageInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidenceScore: Schema.optional(Schema.Number),
    resolvedLanguageCode: Schema.optional(Schema.String),
    inputLanguageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3LanguageInfo" });

export interface GoogleCloudDialogflowV2ServiceLatencyInternalServiceLatency {
  latencyMs?: number;
  startTime?: string;
  completeTime?: string;
  step?: string;
}

export const GoogleCloudDialogflowV2ServiceLatencyInternalServiceLatency: Schema.Schema<GoogleCloudDialogflowV2ServiceLatencyInternalServiceLatency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latencyMs: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    completeTime: Schema.optional(Schema.String),
    step: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ServiceLatencyInternalServiceLatency",
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

export interface GoogleCloudDialogflowV2KnowledgeOperationMetadata {
  exportOperationMetadata?: GoogleCloudDialogflowV2ExportOperationMetadata;
  state?: "STATE_UNSPECIFIED" | "PENDING" | "RUNNING" | "DONE" | (string & {});
  knowledgeBase?: string;
  doneTime?: string;
}

export const GoogleCloudDialogflowV2KnowledgeOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2KnowledgeOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exportOperationMetadata: Schema.optional(
      GoogleCloudDialogflowV2ExportOperationMetadata,
    ),
    state: Schema.optional(Schema.String),
    knowledgeBase: Schema.optional(Schema.String),
    doneTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2KnowledgeOperationMetadata",
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

export interface GoogleCloudDialogflowCxV3beta1ImportFlowResponse {
  flow?: string;
}

export const GoogleCloudDialogflowCxV3beta1ImportFlowResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportFlowResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flow: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportFlowResponse",
  });

export interface GoogleCloudDialogflowCxV3Webhook {
  timeout?: string;
  genericWebService?: GoogleCloudDialogflowCxV3WebhookGenericWebService;
  serviceDirectory?: GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig;
  displayName?: string;
  name?: string;
  disabled?: boolean;
}

export const GoogleCloudDialogflowCxV3Webhook: Schema.Schema<GoogleCloudDialogflowCxV3Webhook> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timeout: Schema.optional(Schema.String),
    genericWebService: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookGenericWebService,
    ),
    serviceDirectory: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig,
    ),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowCxV3RunTestCaseResponse {
  result?: GoogleCloudDialogflowCxV3TestCaseResult;
}

export const GoogleCloudDialogflowCxV3RunTestCaseResponse: Schema.Schema<GoogleCloudDialogflowCxV3RunTestCaseResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.optional(GoogleCloudDialogflowCxV3TestCaseResult),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3RunTestCaseResponse" });

export interface GoogleCloudDialogflowCxV3beta1CompareVersionsRequest {
  languageCode?: string;
  targetVersion?: string;
}

export const GoogleCloudDialogflowCxV3beta1CompareVersionsRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1CompareVersionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    targetVersion: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1CompareVersionsRequest",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet {
  text?: string;
  title?: string;
  metadata?: Record<string, unknown>;
  uri?: string;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    uri: Schema.optional(Schema.String),
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
  snippets?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource;
  event?: string;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerEventSource: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerEventSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    snippets: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource,
    ),
    event: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerEventSource",
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

export interface GoogleCloudDialogflowV2SpeechWordInfo {
  confidence?: number;
  word?: string;
  startOffset?: string;
  endOffset?: string;
}

export const GoogleCloudDialogflowV2SpeechWordInfo: Schema.Schema<GoogleCloudDialogflowV2SpeechWordInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
    word: Schema.optional(Schema.String),
    startOffset: Schema.optional(Schema.String),
    endOffset: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SpeechWordInfo" });

export interface GoogleCloudDialogflowV2StreamingRecognitionResult {
  transcript?: string;
  isFinal?: boolean;
  speechEndOffset?: string;
  messageType?:
    | "MESSAGE_TYPE_UNSPECIFIED"
    | "TRANSCRIPT"
    | "END_OF_SINGLE_UTTERANCE"
    | (string & {});
  speechWordInfo?: ReadonlyArray<GoogleCloudDialogflowV2SpeechWordInfo>;
  confidence?: number;
  languageCode?: string;
}

export const GoogleCloudDialogflowV2StreamingRecognitionResult: Schema.Schema<GoogleCloudDialogflowV2StreamingRecognitionResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transcript: Schema.optional(Schema.String),
    isFinal: Schema.optional(Schema.Boolean),
    speechEndOffset: Schema.optional(Schema.String),
    messageType: Schema.optional(Schema.String),
    speechWordInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SpeechWordInfo),
    ),
    confidence: Schema.optional(Schema.Number),
    languageCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2StreamingRecognitionResult",
  });

export interface GoogleCloudDialogflowV2SentimentAnalysisResult {
  queryTextSentiment?: GoogleCloudDialogflowV2Sentiment;
}

export const GoogleCloudDialogflowV2SentimentAnalysisResult: Schema.Schema<GoogleCloudDialogflowV2SentimentAnalysisResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryTextSentiment: Schema.optional(GoogleCloudDialogflowV2Sentiment),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SentimentAnalysisResult" });

export interface GoogleCloudDialogflowV2Message {
  sendTime?: string;
  content?: string;
  participant?: string;
  name?: string;
  messageAnnotation?: GoogleCloudDialogflowV2MessageAnnotation;
  languageCode?: string;
  participantRole?:
    | "ROLE_UNSPECIFIED"
    | "HUMAN_AGENT"
    | "AUTOMATED_AGENT"
    | "END_USER"
    | (string & {});
  createTime?: string;
  sentimentAnalysis?: GoogleCloudDialogflowV2SentimentAnalysisResult;
}

export const GoogleCloudDialogflowV2Message: Schema.Schema<GoogleCloudDialogflowV2Message> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sendTime: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    participant: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    messageAnnotation: Schema.optional(
      GoogleCloudDialogflowV2MessageAnnotation,
    ),
    languageCode: Schema.optional(Schema.String),
    participantRole: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    sentimentAnalysis: Schema.optional(
      GoogleCloudDialogflowV2SentimentAnalysisResult,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Message" });

export interface GoogleCloudDialogflowV2ConversationEvent {
  newRecognitionResultPayload?: GoogleCloudDialogflowV2StreamingRecognitionResult;
  newMessagePayload?: GoogleCloudDialogflowV2Message;
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

export const GoogleCloudDialogflowV2ConversationEvent: Schema.Schema<GoogleCloudDialogflowV2ConversationEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    newRecognitionResultPayload: Schema.optional(
      GoogleCloudDialogflowV2StreamingRecognitionResult,
    ),
    newMessagePayload: Schema.optional(GoogleCloudDialogflowV2Message),
    conversation: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    errorStatus: Schema.optional(GoogleRpcStatus),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ConversationEvent" });

export interface GoogleCloudDialogflowCxV3ImportEntityTypesMetadata {}

export const GoogleCloudDialogflowCxV3ImportEntityTypesMetadata: Schema.Schema<GoogleCloudDialogflowCxV3ImportEntityTypesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ImportEntityTypesMetadata",
  });

export interface GoogleCloudDialogflowV2OriginalDetectIntentRequest {
  version?: string;
  payload?: Record<string, unknown>;
  source?: string;
}

export const GoogleCloudDialogflowV2OriginalDetectIntentRequest: Schema.Schema<GoogleCloudDialogflowV2OriginalDetectIntentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    source: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2OriginalDetectIntentRequest",
  });

export interface GoogleLongrunningListOperationsResponse {
  nextPageToken?: string;
  unreachable?: ReadonlyArray<string>;
  operations?: ReadonlyArray<GoogleLongrunningOperation>;
}

export const GoogleLongrunningListOperationsResponse: Schema.Schema<GoogleLongrunningListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    operations: Schema.optional(Schema.Array(GoogleLongrunningOperation)),
  }).annotate({ identifier: "GoogleLongrunningListOperationsResponse" });

export interface GoogleCloudDialogflowCxV3beta1RestoreAgentRequestGitSource {
  trackingBranch?: string;
}

export const GoogleCloudDialogflowCxV3beta1RestoreAgentRequestGitSource: Schema.Schema<GoogleCloudDialogflowCxV3beta1RestoreAgentRequestGitSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trackingBranch: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RestoreAgentRequestGitSource",
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

export interface GoogleCloudDialogflowV2ServiceLatency {
  internalServiceLatencies?: ReadonlyArray<GoogleCloudDialogflowV2ServiceLatencyInternalServiceLatency>;
}

export const GoogleCloudDialogflowV2ServiceLatency: Schema.Schema<GoogleCloudDialogflowV2ServiceLatency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    internalServiceLatencies: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2ServiceLatencyInternalServiceLatency),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ServiceLatency" });

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

export interface GoogleCloudDialogflowV2KnowledgeAssistDebugInfo {
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
  queryCategorizationFailureReason?:
    | "QUERY_CATEGORIZATION_FAILURE_REASON_UNSPECIFIED"
    | "QUERY_CATEGORIZATION_INVALID_CONFIG"
    | "QUERY_CATEGORIZATION_RESULT_NOT_FOUND"
    | "QUERY_CATEGORIZATION_FAILED"
    | (string & {});
  knowledgeAssistBehavior?: GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior;
  serviceLatency?: GoogleCloudDialogflowV2ServiceLatency;
  ingestedContextReferenceDebugInfo?: GoogleCloudDialogflowV2IngestedContextReferenceDebugInfo;
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
}

export const GoogleCloudDialogflowV2KnowledgeAssistDebugInfo: Schema.Schema<GoogleCloudDialogflowV2KnowledgeAssistDebugInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryGenerationFailureReason: Schema.optional(Schema.String),
    queryCategorizationFailureReason: Schema.optional(Schema.String),
    knowledgeAssistBehavior: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior,
    ),
    serviceLatency: Schema.optional(GoogleCloudDialogflowV2ServiceLatency),
    ingestedContextReferenceDebugInfo: Schema.optional(
      GoogleCloudDialogflowV2IngestedContextReferenceDebugInfo,
    ),
    datastoreResponseReason: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2KnowledgeAssistDebugInfo",
  });

export interface GoogleCloudDialogflowCxV3beta1ListPlaybookVersionsResponse {
  playbookVersions?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1PlaybookVersion>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3beta1ListPlaybookVersionsResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ListPlaybookVersionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    playbookVersions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1PlaybookVersion),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ListPlaybookVersionsResponse",
  });

export interface GoogleCloudDialogflowV2beta1SessionEntityType {
  entityOverrideMode?:
    | "ENTITY_OVERRIDE_MODE_UNSPECIFIED"
    | "ENTITY_OVERRIDE_MODE_OVERRIDE"
    | "ENTITY_OVERRIDE_MODE_SUPPLEMENT"
    | (string & {});
  entities?: ReadonlyArray<GoogleCloudDialogflowV2beta1EntityTypeEntity>;
  name?: string;
}

export const GoogleCloudDialogflowV2beta1SessionEntityType: Schema.Schema<GoogleCloudDialogflowV2beta1SessionEntityType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityOverrideMode: Schema.optional(Schema.String),
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1EntityTypeEntity),
    ),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1SessionEntityType" });

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
  sources?: GoogleCloudDialogflowV2AgentCoachingSuggestionSources;
  duplicateCheckResult?: GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResult;
}

export const GoogleCloudDialogflowV2AgentCoachingSuggestionAgentActionSuggestion: Schema.Schema<GoogleCloudDialogflowV2AgentCoachingSuggestionAgentActionSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentAction: Schema.optional(Schema.String),
    sources: Schema.optional(
      GoogleCloudDialogflowV2AgentCoachingSuggestionSources,
    ),
    duplicateCheckResult: Schema.optional(
      GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResult,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2AgentCoachingSuggestionAgentActionSuggestion",
  });

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

export interface GoogleCloudDialogflowCxV3beta1Deployment {
  state?:
    | "STATE_UNSPECIFIED"
    | "RUNNING"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
  name?: string;
  result?: GoogleCloudDialogflowCxV3beta1DeploymentResult;
  flowVersion?: string;
  startTime?: string;
  endTime?: string;
}

export const GoogleCloudDialogflowCxV3beta1Deployment: Schema.Schema<GoogleCloudDialogflowCxV3beta1Deployment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    result: Schema.optional(GoogleCloudDialogflowCxV3beta1DeploymentResult),
    flowVersion: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Deployment" });

export interface GoogleCloudDialogflowCxV3beta1ConversationMetrics {
  queryInputCount?: GoogleCloudDialogflowCxV3beta1ConversationMetricsQueryInputCount;
  maxWebhookLatency?: string;
  averageMatchConfidence?: number;
  outputAudioDuration?: string;
  hasLiveAgentHandoff?: boolean;
  interactionCount?: number;
  hasEndInteraction?: boolean;
  matchTypeCount?: GoogleCloudDialogflowCxV3beta1ConversationMetricsMatchTypeCount;
  inputAudioDuration?: string;
}

export const GoogleCloudDialogflowCxV3beta1ConversationMetrics: Schema.Schema<GoogleCloudDialogflowCxV3beta1ConversationMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryInputCount: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ConversationMetricsQueryInputCount,
    ),
    maxWebhookLatency: Schema.optional(Schema.String),
    averageMatchConfidence: Schema.optional(Schema.Number),
    outputAudioDuration: Schema.optional(Schema.String),
    hasLiveAgentHandoff: Schema.optional(Schema.Boolean),
    interactionCount: Schema.optional(Schema.Number),
    hasEndInteraction: Schema.optional(Schema.Boolean),
    matchTypeCount: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ConversationMetricsMatchTypeCount,
    ),
    inputAudioDuration: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ConversationMetrics",
  });

export interface GoogleCloudDialogflowCxV3beta1Conversation {
  type?: "TYPE_UNSPECIFIED" | "AUDIO" | "TEXT" | "UNDETERMINED" | (string & {});
  environment?: GoogleCloudDialogflowCxV3beta1Environment;
  interactions?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ConversationInteraction>;
  metrics?: GoogleCloudDialogflowCxV3beta1ConversationMetrics;
  languageCode?: string;
  intents?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Intent>;
  duration?: string;
  flows?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Flow>;
  flowVersions?: Record<string, string>;
  startTime?: string;
  name?: string;
  pages?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Page>;
}

export const GoogleCloudDialogflowCxV3beta1Conversation: Schema.Schema<GoogleCloudDialogflowCxV3beta1Conversation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    environment: Schema.optional(GoogleCloudDialogflowCxV3beta1Environment),
    interactions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ConversationInteraction),
    ),
    metrics: Schema.optional(GoogleCloudDialogflowCxV3beta1ConversationMetrics),
    languageCode: Schema.optional(Schema.String),
    intents: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1Intent),
    ),
    duration: Schema.optional(Schema.String),
    flows: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3beta1Flow)),
    flowVersions: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    startTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    pages: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3beta1Page)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Conversation" });

export interface GoogleCloudDialogflowCxV3TurnSignals {
  dtmfUsed?: boolean;
  sentimentMagnitude?: number;
  noUserInput?: boolean;
  userEscalated?: boolean;
  noMatch?: boolean;
  agentEscalated?: boolean;
  reachedEndPage?: boolean;
  failureReasons?: ReadonlyArray<
    | "FAILURE_REASON_UNSPECIFIED"
    | "FAILED_INTENT"
    | "FAILED_WEBHOOK"
    | (string & {})
  >;
  sentimentScore?: number;
  webhookStatuses?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3TurnSignals: Schema.Schema<GoogleCloudDialogflowCxV3TurnSignals> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dtmfUsed: Schema.optional(Schema.Boolean),
    sentimentMagnitude: Schema.optional(Schema.Number),
    noUserInput: Schema.optional(Schema.Boolean),
    userEscalated: Schema.optional(Schema.Boolean),
    noMatch: Schema.optional(Schema.Boolean),
    agentEscalated: Schema.optional(Schema.Boolean),
    reachedEndPage: Schema.optional(Schema.Boolean),
    failureReasons: Schema.optional(Schema.Array(Schema.String)),
    sentimentScore: Schema.optional(Schema.Number),
    webhookStatuses: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TurnSignals" });

export interface GoogleCloudDialogflowCxV3ConversationSignals {
  turnSignals?: GoogleCloudDialogflowCxV3TurnSignals;
}

export const GoogleCloudDialogflowCxV3ConversationSignals: Schema.Schema<GoogleCloudDialogflowCxV3ConversationSignals> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    turnSignals: Schema.optional(GoogleCloudDialogflowCxV3TurnSignals),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ConversationSignals" });

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

export interface GoogleCloudDialogflowCxV3beta1ImportTestCasesResponse {
  names?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1ImportTestCasesResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportTestCasesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportTestCasesResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1StopExperimentRequest {}

export const GoogleCloudDialogflowCxV3beta1StopExperimentRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1StopExperimentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1StopExperimentRequest",
  });

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

export interface GoogleCloudDialogflowCxV3beta1RestorePlaybookVersionRequest {}

export const GoogleCloudDialogflowCxV3beta1RestorePlaybookVersionRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1RestorePlaybookVersionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RestorePlaybookVersionRequest",
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

export interface GoogleCloudDialogflowCxV3ImportFlowResponse {
  flow?: string;
}

export const GoogleCloudDialogflowCxV3ImportFlowResponse: Schema.Schema<GoogleCloudDialogflowCxV3ImportFlowResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flow: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ImportFlowResponse" });

export interface GoogleCloudDialogflowCxV3ExportFlowResponse {
  flowUri?: string;
  flowContent?: string;
}

export const GoogleCloudDialogflowCxV3ExportFlowResponse: Schema.Schema<GoogleCloudDialogflowCxV3ExportFlowResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flowUri: Schema.optional(Schema.String),
    flowContent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ExportFlowResponse" });

export interface GoogleCloudDialogflowCxV3beta1BatchDeleteTestCasesRequest {
  names?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1BatchDeleteTestCasesRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1BatchDeleteTestCasesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1BatchDeleteTestCasesRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettings {
  githubSettings?: GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGithubSettings;
  gitConnectionSettings?: GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGitConnectionSettings;
}

export const GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    githubSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGithubSettings,
    ),
    gitConnectionSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGitConnectionSettings,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettings",
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

export interface GoogleCloudDialogflowV2SummarySuggestion {
  summarySections?: ReadonlyArray<GoogleCloudDialogflowV2SummarySuggestionSummarySection>;
}

export const GoogleCloudDialogflowV2SummarySuggestion: Schema.Schema<GoogleCloudDialogflowV2SummarySuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    summarySections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SummarySuggestionSummarySection),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SummarySuggestion" });

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

export interface GoogleProtobufEmpty {}

export const GoogleProtobufEmpty: Schema.Schema<GoogleProtobufEmpty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleProtobufEmpty",
  });

export interface GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse {
  dialogflowAssistAnswers?: ReadonlyArray<GoogleCloudDialogflowV2beta1DialogflowAssistAnswer>;
  contextSize?: number;
  latestMessage?: string;
}

export const GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dialogflowAssistAnswers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1DialogflowAssistAnswer),
    ),
    contextSize: Schema.optional(Schema.Number),
    latestMessage: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse",
  });

export interface GoogleCloudDialogflowV2beta1GenerateSuggestionsResponseGeneratorSuggestionAnswer {
  generatorSuggestion?: GoogleCloudDialogflowV2beta1GeneratorSuggestion;
  answerRecord?: string;
  sourceGenerator?: string;
}

export const GoogleCloudDialogflowV2beta1GenerateSuggestionsResponseGeneratorSuggestionAnswer: Schema.Schema<GoogleCloudDialogflowV2beta1GenerateSuggestionsResponseGeneratorSuggestionAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generatorSuggestion: Schema.optional(
      GoogleCloudDialogflowV2beta1GeneratorSuggestion,
    ),
    answerRecord: Schema.optional(Schema.String),
    sourceGenerator: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswer {
  answerText?: string;
  generativeSource?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource;
  eventSource?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerEventSource;
  faqSource?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerFaqSource;
  playbookSource?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswer: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answerText: Schema.optional(Schema.String),
    generativeSource: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource,
    ),
    eventSource: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerEventSource,
    ),
    faqSource: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerFaqSource,
    ),
    playbookSource: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswer",
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
  ingestedContextReferenceDebugInfo?: GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfo;
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
  serviceLatency?: GoogleCloudDialogflowV2beta1ServiceLatency;
  queryCategorizationFailureReason?:
    | "QUERY_CATEGORIZATION_FAILURE_REASON_UNSPECIFIED"
    | "QUERY_CATEGORIZATION_INVALID_CONFIG"
    | "QUERY_CATEGORIZATION_RESULT_NOT_FOUND"
    | "QUERY_CATEGORIZATION_FAILED"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfo: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datastoreResponseReason: Schema.optional(Schema.String),
    ingestedContextReferenceDebugInfo: Schema.optional(
      GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfo,
    ),
    queryGenerationFailureReason: Schema.optional(Schema.String),
    knowledgeAssistBehavior: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior,
    ),
    serviceLatency: Schema.optional(GoogleCloudDialogflowV2beta1ServiceLatency),
    queryCategorizationFailureReason: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfo",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistAnswer {
  answerRecord?: string;
  suggestedQueryAnswer?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswer;
  suggestedQuery?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuery;
  knowledgeAssistDebugInfo?: GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfo;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswer: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeAssistAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answerRecord: Schema.optional(Schema.String),
    suggestedQueryAnswer: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswer,
    ),
    suggestedQuery: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuery,
    ),
    knowledgeAssistDebugInfo: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfo,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1KnowledgeAssistAnswer",
  });

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

export interface GoogleCloudDialogflowV2beta1ArticleAnswer {
  uri?: string;
  title?: string;
  answerRecord?: string;
  snippets?: ReadonlyArray<string>;
  metadata?: Record<string, string>;
}

export const GoogleCloudDialogflowV2beta1ArticleAnswer: Schema.Schema<GoogleCloudDialogflowV2beta1ArticleAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    snippets: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ArticleAnswer" });

export interface GoogleCloudDialogflowV2beta1SuggestArticlesResponse {
  latestMessage?: string;
  articleAnswers?: ReadonlyArray<GoogleCloudDialogflowV2beta1ArticleAnswer>;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2beta1SuggestArticlesResponse: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestArticlesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestMessage: Schema.optional(Schema.String),
    articleAnswers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1ArticleAnswer),
    ),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestArticlesResponse",
  });

export interface GoogleCloudDialogflowV2beta1SuggestionResult {
  suggestDialogflowAssistsResponse?: GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse;
  suggestEntityExtractionResponse?: GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse;
  generateSuggestionsResponse?: GoogleCloudDialogflowV2beta1GenerateSuggestionsResponse;
  error?: GoogleRpcStatus;
  suggestKnowledgeAssistResponse?: GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse;
  suggestSmartRepliesResponse?: GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse;
  suggestFaqAnswersResponse?: GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse;
  suggestArticlesResponse?: GoogleCloudDialogflowV2beta1SuggestArticlesResponse;
}

export const GoogleCloudDialogflowV2beta1SuggestionResult: Schema.Schema<GoogleCloudDialogflowV2beta1SuggestionResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suggestDialogflowAssistsResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse,
    ),
    suggestEntityExtractionResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse,
    ),
    generateSuggestionsResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1GenerateSuggestionsResponse,
    ),
    error: Schema.optional(GoogleRpcStatus),
    suggestKnowledgeAssistResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse,
    ),
    suggestSmartRepliesResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse,
    ),
    suggestFaqAnswersResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse,
    ),
    suggestArticlesResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestArticlesResponse,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1SuggestionResult" });

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

export interface GoogleCloudDialogflowCxV3ImportTestCasesResponse {
  names?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3ImportTestCasesResponse: Schema.Schema<GoogleCloudDialogflowCxV3ImportTestCasesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ImportTestCasesResponse",
  });

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

export interface GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswer {
  eventSource?: GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerEventSource;
  answerText?: string;
  generativeSource?: GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource;
  faqSource?: GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerFaqSource;
  playbookSource?: GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource;
}

export const GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswer: Schema.Schema<GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventSource: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerEventSource,
    ),
    answerText: Schema.optional(Schema.String),
    generativeSource: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource,
    ),
    faqSource: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerFaqSource,
    ),
    playbookSource: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswer",
  });

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
  flowUri?: string;
  includeReferencedFlows?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1ExportFlowRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportFlowRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flowUri: Schema.optional(Schema.String),
    includeReferencedFlows: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportFlowRequest",
  });

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

export interface GoogleCloudDialogflowCxV3beta1RunTestCaseResponse {
  result?: GoogleCloudDialogflowCxV3beta1TestCaseResult;
}

export const GoogleCloudDialogflowCxV3beta1RunTestCaseResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1RunTestCaseResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.optional(GoogleCloudDialogflowCxV3beta1TestCaseResult),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RunTestCaseResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportAgentRequest {
  environment?: string;
  includeBigqueryExportSettings?: boolean;
  dataFormat?:
    | "DATA_FORMAT_UNSPECIFIED"
    | "BLOB"
    | "JSON_PACKAGE"
    | (string & {});
  gitDestination?: GoogleCloudDialogflowCxV3beta1ExportAgentRequestGitDestination;
  agentUri?: string;
}

export const GoogleCloudDialogflowCxV3beta1ExportAgentRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportAgentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    environment: Schema.optional(Schema.String),
    includeBigqueryExportSettings: Schema.optional(Schema.Boolean),
    dataFormat: Schema.optional(Schema.String),
    gitDestination: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ExportAgentRequestGitDestination,
    ),
    agentUri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportAgentRequest",
  });

export interface GoogleCloudDialogflowCxV3PageInfo {
  displayName?: string;
  currentPage?: string;
  formInfo?: GoogleCloudDialogflowCxV3PageInfoFormInfo;
}

export const GoogleCloudDialogflowCxV3PageInfo: Schema.Schema<GoogleCloudDialogflowCxV3PageInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    currentPage: Schema.optional(Schema.String),
    formInfo: Schema.optional(GoogleCloudDialogflowCxV3PageInfoFormInfo),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3PageInfo" });

export interface GoogleCloudDialogflowCxV3WebhookResponse {
  fulfillmentResponse?: GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponse;
  sessionInfo?: GoogleCloudDialogflowCxV3SessionInfo;
  payload?: Record<string, unknown>;
  pageInfo?: GoogleCloudDialogflowCxV3PageInfo;
  targetFlow?: string;
  targetPage?: string;
}

export const GoogleCloudDialogflowCxV3WebhookResponse: Schema.Schema<GoogleCloudDialogflowCxV3WebhookResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fulfillmentResponse: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponse,
    ),
    sessionInfo: Schema.optional(GoogleCloudDialogflowCxV3SessionInfo),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    pageInfo: Schema.optional(GoogleCloudDialogflowCxV3PageInfo),
    targetFlow: Schema.optional(Schema.String),
    targetPage: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3WebhookResponse" });

export interface GoogleCloudDialogflowCxV3beta1TrainFlowRequest {}

export const GoogleCloudDialogflowCxV3beta1TrainFlowRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1TrainFlowRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1TrainFlowRequest",
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

export interface GoogleCloudDialogflowCxV3beta1AgentClientCertificateSettings {
  privateKey?: string;
  sslCertificate?: string;
  passphrase?: string;
}

export const GoogleCloudDialogflowCxV3beta1AgentClientCertificateSettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1AgentClientCertificateSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateKey: Schema.optional(Schema.String),
    sslCertificate: Schema.optional(Schema.String),
    passphrase: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1AgentClientCertificateSettings",
  });

export interface GoogleCloudDialogflowV2beta1EventInput {
  languageCode?: string;
  name?: string;
  parameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2beta1EventInput: Schema.Schema<GoogleCloudDialogflowV2beta1EventInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1EventInput" });

export interface GoogleCloudDialogflowV2beta1WebhookResponse {
  fulfillmentMessages?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessage>;
  liveAgentHandoff?: boolean;
  sessionEntityTypes?: ReadonlyArray<GoogleCloudDialogflowV2beta1SessionEntityType>;
  fulfillmentText?: string;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2beta1Context>;
  payload?: Record<string, unknown>;
  source?: string;
  followupEventInput?: GoogleCloudDialogflowV2beta1EventInput;
  endInteraction?: boolean;
}

export const GoogleCloudDialogflowV2beta1WebhookResponse: Schema.Schema<GoogleCloudDialogflowV2beta1WebhookResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fulfillmentMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessage),
    ),
    liveAgentHandoff: Schema.optional(Schema.Boolean),
    sessionEntityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SessionEntityType),
    ),
    fulfillmentText: Schema.optional(Schema.String),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1Context),
    ),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    source: Schema.optional(Schema.String),
    followupEventInput: Schema.optional(GoogleCloudDialogflowV2beta1EventInput),
    endInteraction: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1WebhookResponse" });

export interface GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse {
  testCaseResults?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TestCaseResult>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testCaseResults: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TestCaseResult),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse",
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
  startPlaybook?: string;
  bigqueryExportSettings?: GoogleCloudDialogflowCxV3beta1BigQueryExportSettings;
  advancedSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettings;
  locked?: boolean;
  enableSpellCorrection?: boolean;
  satisfiesPzi?: boolean;
  defaultLanguageCode?: string;
  name?: string;
  description?: string;
  securitySettings?: string;
  enableStackdriverLogging?: boolean;
  startFlow?: string;
  displayName?: string;
  enableMultiLanguageTraining?: boolean;
  gitIntegrationSettings?: GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettings;
  timeZone?: string;
  personalizationSettings?: GoogleCloudDialogflowCxV3beta1AgentPersonalizationSettings;
  textToSpeechSettings?: GoogleCloudDialogflowCxV3beta1TextToSpeechSettings;
  speechToTextSettings?: GoogleCloudDialogflowCxV3beta1SpeechToTextSettings;
  answerFeedbackSettings?: GoogleCloudDialogflowCxV3beta1AgentAnswerFeedbackSettings;
  avatarUri?: string;
  genAppBuilderSettings?: GoogleCloudDialogflowCxV3beta1AgentGenAppBuilderSettings;
  satisfiesPzs?: boolean;
  supportedLanguageCodes?: ReadonlyArray<string>;
  clientCertificateSettings?: GoogleCloudDialogflowCxV3beta1AgentClientCertificateSettings;
}

export const GoogleCloudDialogflowCxV3beta1Agent: Schema.Schema<GoogleCloudDialogflowCxV3beta1Agent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startPlaybook: Schema.optional(Schema.String),
    bigqueryExportSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1BigQueryExportSettings,
    ),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettings,
    ),
    locked: Schema.optional(Schema.Boolean),
    enableSpellCorrection: Schema.optional(Schema.Boolean),
    satisfiesPzi: Schema.optional(Schema.Boolean),
    defaultLanguageCode: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    securitySettings: Schema.optional(Schema.String),
    enableStackdriverLogging: Schema.optional(Schema.Boolean),
    startFlow: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    enableMultiLanguageTraining: Schema.optional(Schema.Boolean),
    gitIntegrationSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettings,
    ),
    timeZone: Schema.optional(Schema.String),
    personalizationSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AgentPersonalizationSettings,
    ),
    textToSpeechSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1TextToSpeechSettings,
    ),
    speechToTextSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1SpeechToTextSettings,
    ),
    answerFeedbackSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AgentAnswerFeedbackSettings,
    ),
    avatarUri: Schema.optional(Schema.String),
    genAppBuilderSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AgentGenAppBuilderSettings,
    ),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    supportedLanguageCodes: Schema.optional(Schema.Array(Schema.String)),
    clientCertificateSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AgentClientCertificateSettings,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Agent" });

export interface GoogleCloudDialogflowCxV3beta1ListTestCasesResponse {
  testCases?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TestCase>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3beta1ListTestCasesResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ListTestCasesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testCases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TestCase),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ListTestCasesResponse",
  });

export interface GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction {}

export const GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction: Schema.Schema<GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction",
  });

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

export interface GoogleCloudDialogflowV2SuggestSmartRepliesResponse {
  contextSize?: number;
  smartReplyAnswers?: ReadonlyArray<GoogleCloudDialogflowV2SmartReplyAnswer>;
  latestMessage?: string;
}

export const GoogleCloudDialogflowV2SuggestSmartRepliesResponse: Schema.Schema<GoogleCloudDialogflowV2SuggestSmartRepliesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contextSize: Schema.optional(Schema.Number),
    smartReplyAnswers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SmartReplyAnswer),
    ),
    latestMessage: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SuggestSmartRepliesResponse",
  });

export interface GoogleCloudLocationLocation {
  name?: string;
  labels?: Record<string, string>;
  metadata?: Record<string, unknown>;
  locationId?: string;
  displayName?: string;
}

export const GoogleCloudLocationLocation: Schema.Schema<GoogleCloudLocationLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    locationId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudLocationLocation" });

export interface GoogleCloudLocationListLocationsResponse {
  locations?: ReadonlyArray<GoogleCloudLocationLocation>;
  nextPageToken?: string;
}

export const GoogleCloudLocationListLocationsResponse: Schema.Schema<GoogleCloudLocationListLocationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locations: Schema.optional(Schema.Array(GoogleCloudLocationLocation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudLocationListLocationsResponse" });

export interface GoogleCloudDialogflowCxV3beta1ExportIntentsResponse {
  intentsUri?: string;
  intentsContent?: GoogleCloudDialogflowCxV3beta1InlineDestination;
}

export const GoogleCloudDialogflowCxV3beta1ExportIntentsResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportIntentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intentsUri: Schema.optional(Schema.String),
    intentsContent: Schema.optional(
      GoogleCloudDialogflowCxV3beta1InlineDestination,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportIntentsResponse",
  });

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
  content?: string;
  cesApp?: string;
  action?: string;
  cesToolset?: string;
  error?: GoogleCloudDialogflowV2ToolCallResultError;
  rawContent?: string;
  createTime?: string;
  tool?: string;
}

export const GoogleCloudDialogflowV2ToolCallResult: Schema.Schema<GoogleCloudDialogflowV2ToolCallResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cesTool: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    cesApp: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    cesToolset: Schema.optional(Schema.String),
    error: Schema.optional(GoogleCloudDialogflowV2ToolCallResultError),
    rawContent: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    tool: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolCallResult" });

export interface GoogleCloudDialogflowV2GeneratorSuggestionToolCallInfo {
  toolCallResult?: GoogleCloudDialogflowV2ToolCallResult;
  toolCall?: GoogleCloudDialogflowV2ToolCall;
}

export const GoogleCloudDialogflowV2GeneratorSuggestionToolCallInfo: Schema.Schema<GoogleCloudDialogflowV2GeneratorSuggestionToolCallInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolCallResult: Schema.optional(GoogleCloudDialogflowV2ToolCallResult),
    toolCall: Schema.optional(GoogleCloudDialogflowV2ToolCall),
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

export interface GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery {
  queryText?: string;
}

export const GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery: Schema.Schema<GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryText: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery",
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

export interface GoogleCloudDialogflowV2QueryResult {
  languageCode?: string;
  webhookSource?: string;
  speechRecognitionConfidence?: number;
  action?: string;
  fulfillmentText?: string;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2Context>;
  intent?: GoogleCloudDialogflowV2Intent;
  cancelsSlotFilling?: boolean;
  sentimentAnalysisResult?: GoogleCloudDialogflowV2SentimentAnalysisResult;
  fulfillmentMessages?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessage>;
  intentDetectionConfidence?: number;
  allRequiredParamsPresent?: boolean;
  queryText?: string;
  parameters?: Record<string, unknown>;
  webhookPayload?: Record<string, unknown>;
  diagnosticInfo?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2QueryResult: Schema.Schema<GoogleCloudDialogflowV2QueryResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    webhookSource: Schema.optional(Schema.String),
    speechRecognitionConfidence: Schema.optional(Schema.Number),
    action: Schema.optional(Schema.String),
    fulfillmentText: Schema.optional(Schema.String),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2Context),
    ),
    intent: Schema.optional(GoogleCloudDialogflowV2Intent),
    cancelsSlotFilling: Schema.optional(Schema.Boolean),
    sentimentAnalysisResult: Schema.optional(
      GoogleCloudDialogflowV2SentimentAnalysisResult,
    ),
    fulfillmentMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessage),
    ),
    intentDetectionConfidence: Schema.optional(Schema.Number),
    allRequiredParamsPresent: Schema.optional(Schema.Boolean),
    queryText: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    webhookPayload: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    diagnosticInfo: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2QueryResult" });

export interface GoogleCloudDialogflowCxV3beta1SubmitAnswerFeedbackRequest {
  answerFeedback?: GoogleCloudDialogflowCxV3beta1AnswerFeedback;
  responseId?: string;
  updateMask?: string;
}

export const GoogleCloudDialogflowCxV3beta1SubmitAnswerFeedbackRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1SubmitAnswerFeedbackRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answerFeedback: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AnswerFeedback,
    ),
    responseId: Schema.optional(Schema.String),
    updateMask: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1SubmitAnswerFeedbackRequest",
  });

export interface GoogleCloudDialogflowV2ImportDocumentsResponse {
  warnings?: ReadonlyArray<GoogleRpcStatus>;
}

export const GoogleCloudDialogflowV2ImportDocumentsResponse: Schema.Schema<GoogleCloudDialogflowV2ImportDocumentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    warnings: Schema.optional(Schema.Array(GoogleRpcStatus)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ImportDocumentsResponse" });

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
  telephonyTransferCall?: GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall;
  endInteraction?: GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction;
  payload?: Record<string, unknown>;
  mixedAudio?: GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio;
  liveAgentHandoff?: GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff;
  text?: GoogleCloudDialogflowV2beta1ResponseMessageText;
}

export const GoogleCloudDialogflowV2beta1ResponseMessage: Schema.Schema<GoogleCloudDialogflowV2beta1ResponseMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    telephonyTransferCall: Schema.optional(
      GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall,
    ),
    endInteraction: Schema.optional(
      GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction,
    ),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    mixedAudio: Schema.optional(
      GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio,
    ),
    liveAgentHandoff: Schema.optional(
      GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff,
    ),
    text: Schema.optional(GoogleCloudDialogflowV2beta1ResponseMessageText),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ResponseMessage" });

export interface GoogleCloudDialogflowV2beta1Message {
  languageCode?: string;
  participantRole?:
    | "ROLE_UNSPECIFIED"
    | "HUMAN_AGENT"
    | "AUTOMATED_AGENT"
    | "END_USER"
    | (string & {});
  createTime?: string;
  sentimentAnalysis?: GoogleCloudDialogflowV2beta1SentimentAnalysisResult;
  name?: string;
  messageAnnotation?: GoogleCloudDialogflowV2beta1MessageAnnotation;
  responseMessages?: ReadonlyArray<GoogleCloudDialogflowV2beta1ResponseMessage>;
  sendTime?: string;
  content?: string;
  participant?: string;
}

export const GoogleCloudDialogflowV2beta1Message: Schema.Schema<GoogleCloudDialogflowV2beta1Message> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    participantRole: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    sentimentAnalysis: Schema.optional(
      GoogleCloudDialogflowV2beta1SentimentAnalysisResult,
    ),
    name: Schema.optional(Schema.String),
    messageAnnotation: Schema.optional(
      GoogleCloudDialogflowV2beta1MessageAnnotation,
    ),
    responseMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1ResponseMessage),
    ),
    sendTime: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    participant: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1Message" });

export interface GoogleCloudDialogflowV2beta1ConversationEvent {
  newMessagePayload?: GoogleCloudDialogflowV2beta1Message;
  newRecognitionResultPayload?: GoogleCloudDialogflowV2beta1StreamingRecognitionResult;
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

export const GoogleCloudDialogflowV2beta1ConversationEvent: Schema.Schema<GoogleCloudDialogflowV2beta1ConversationEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    newMessagePayload: Schema.optional(GoogleCloudDialogflowV2beta1Message),
    newRecognitionResultPayload: Schema.optional(
      GoogleCloudDialogflowV2beta1StreamingRecognitionResult,
    ),
    errorStatus: Schema.optional(GoogleRpcStatus),
    conversation: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ConversationEvent" });

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

export interface GoogleCloudDialogflowCxV3beta1ValidateFlowRequest {
  languageCode?: string;
}

export const GoogleCloudDialogflowCxV3beta1ValidateFlowRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1ValidateFlowRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ValidateFlowRequest",
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

export interface GoogleCloudDialogflowV2InputDataset {
  dataset?: string;
}

export const GoogleCloudDialogflowV2InputDataset: Schema.Schema<GoogleCloudDialogflowV2InputDataset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataset: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2InputDataset" });

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
  languageCode?: string;
  displayName?: string;
  createTime?: string;
  satisfiesPzs?: boolean;
  name?: string;
  datasets?: ReadonlyArray<GoogleCloudDialogflowV2InputDataset>;
  articleSuggestionModelMetadata?: GoogleCloudDialogflowV2ArticleSuggestionModelMetadata;
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
  smartReplyModelMetadata?: GoogleCloudDialogflowV2SmartReplyModelMetadata;
  satisfiesPzi?: boolean;
}

export const GoogleCloudDialogflowV2ConversationModel: Schema.Schema<GoogleCloudDialogflowV2ConversationModel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    datasets: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2InputDataset),
    ),
    articleSuggestionModelMetadata: Schema.optional(
      GoogleCloudDialogflowV2ArticleSuggestionModelMetadata,
    ),
    state: Schema.optional(Schema.String),
    smartReplyModelMetadata: Schema.optional(
      GoogleCloudDialogflowV2SmartReplyModelMetadata,
    ),
    satisfiesPzi: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ConversationModel" });

export interface GoogleCloudDialogflowCxV3beta1InlineSource {
  content?: string;
}

export const GoogleCloudDialogflowCxV3beta1InlineSource: Schema.Schema<GoogleCloudDialogflowCxV3beta1InlineSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1InlineSource" });

export interface GoogleCloudDialogflowCxV3beta1ImportIntentsRequest {
  mergeOption?:
    | "MERGE_OPTION_UNSPECIFIED"
    | "REJECT"
    | "REPLACE"
    | "MERGE"
    | "RENAME"
    | "REPORT_CONFLICT"
    | "KEEP"
    | (string & {});
  intentsUri?: string;
  intentsContent?: GoogleCloudDialogflowCxV3beta1InlineSource;
}

export const GoogleCloudDialogflowCxV3beta1ImportIntentsRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportIntentsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mergeOption: Schema.optional(Schema.String),
    intentsUri: Schema.optional(Schema.String),
    intentsContent: Schema.optional(GoogleCloudDialogflowCxV3beta1InlineSource),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportIntentsRequest",
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

export interface GoogleCloudDialogflowCxV3beta1EntityType {
  name?: string;
  enableFuzzyExtraction?: boolean;
  redact?: boolean;
  displayName?: string;
  entities?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1EntityTypeEntity>;
  autoExpansionMode?:
    | "AUTO_EXPANSION_MODE_UNSPECIFIED"
    | "AUTO_EXPANSION_MODE_DEFAULT"
    | (string & {});
  excludedPhrases?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1EntityTypeExcludedPhrase>;
  kind?:
    | "KIND_UNSPECIFIED"
    | "KIND_MAP"
    | "KIND_LIST"
    | "KIND_REGEXP"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1EntityType: Schema.Schema<GoogleCloudDialogflowCxV3beta1EntityType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    enableFuzzyExtraction: Schema.optional(Schema.Boolean),
    redact: Schema.optional(Schema.Boolean),
    displayName: Schema.optional(Schema.String),
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1EntityTypeEntity),
    ),
    autoExpansionMode: Schema.optional(Schema.String),
    excludedPhrases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1EntityTypeExcludedPhrase),
    ),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1EntityType" });

export interface GoogleCloudDialogflowCxV3beta1ToolVersion {
  name?: string;
  displayName?: string;
  tool?: GoogleCloudDialogflowCxV3beta1Tool;
  updateTime?: string;
  createTime?: string;
}

export const GoogleCloudDialogflowCxV3beta1ToolVersion: Schema.Schema<GoogleCloudDialogflowCxV3beta1ToolVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    tool: Schema.optional(GoogleCloudDialogflowCxV3beta1Tool),
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ToolVersion" });

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

export interface GoogleCloudDialogflowV2KnowledgeAssistAnswer {
  suggestedQuery?: GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery;
  knowledgeAssistDebugInfo?: GoogleCloudDialogflowV2KnowledgeAssistDebugInfo;
  suggestedQueryAnswer?: GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswer;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2KnowledgeAssistAnswer: Schema.Schema<GoogleCloudDialogflowV2KnowledgeAssistAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suggestedQuery: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery,
    ),
    knowledgeAssistDebugInfo: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistDebugInfo,
    ),
    suggestedQueryAnswer: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswer,
    ),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2KnowledgeAssistAnswer" });

export interface GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse {
  contextSize?: number;
  latestMessage?: string;
  knowledgeAssistAnswer?: GoogleCloudDialogflowV2KnowledgeAssistAnswer;
}

export const GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse: Schema.Schema<GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contextSize: Schema.optional(Schema.Number),
    latestMessage: Schema.optional(Schema.String),
    knowledgeAssistAnswer: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswer,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse",
  });

export interface GoogleCloudDialogflowV2FaqAnswer {
  question?: string;
  confidence?: number;
  source?: string;
  metadata?: Record<string, string>;
  answer?: string;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2FaqAnswer: Schema.Schema<GoogleCloudDialogflowV2FaqAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    question: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
    source: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    answer: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2FaqAnswer" });

export interface GoogleCloudDialogflowV2SuggestFaqAnswersResponse {
  contextSize?: number;
  faqAnswers?: ReadonlyArray<GoogleCloudDialogflowV2FaqAnswer>;
  latestMessage?: string;
}

export const GoogleCloudDialogflowV2SuggestFaqAnswersResponse: Schema.Schema<GoogleCloudDialogflowV2SuggestFaqAnswersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contextSize: Schema.optional(Schema.Number),
    faqAnswers: Schema.optional(Schema.Array(GoogleCloudDialogflowV2FaqAnswer)),
    latestMessage: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SuggestFaqAnswersResponse",
  });

export interface GoogleCloudDialogflowV2SuggestionResult {
  error?: GoogleRpcStatus;
  generateSuggestionsResponse?: GoogleCloudDialogflowV2GenerateSuggestionsResponse;
  suggestKnowledgeAssistResponse?: GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse;
  suggestSmartRepliesResponse?: GoogleCloudDialogflowV2SuggestSmartRepliesResponse;
  suggestArticlesResponse?: GoogleCloudDialogflowV2SuggestArticlesResponse;
  suggestFaqAnswersResponse?: GoogleCloudDialogflowV2SuggestFaqAnswersResponse;
}

export const GoogleCloudDialogflowV2SuggestionResult: Schema.Schema<GoogleCloudDialogflowV2SuggestionResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    error: Schema.optional(GoogleRpcStatus),
    generateSuggestionsResponse: Schema.optional(
      GoogleCloudDialogflowV2GenerateSuggestionsResponse,
    ),
    suggestKnowledgeAssistResponse: Schema.optional(
      GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse,
    ),
    suggestSmartRepliesResponse: Schema.optional(
      GoogleCloudDialogflowV2SuggestSmartRepliesResponse,
    ),
    suggestArticlesResponse: Schema.optional(
      GoogleCloudDialogflowV2SuggestArticlesResponse,
    ),
    suggestFaqAnswersResponse: Schema.optional(
      GoogleCloudDialogflowV2SuggestFaqAnswersResponse,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SuggestionResult" });

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
  doneTime?: string;
  exportOperationMetadata?: GoogleCloudDialogflowV2beta1ExportOperationMetadata;
}

export const GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    knowledgeBase: Schema.optional(Schema.String),
    doneTime: Schema.optional(Schema.String),
    exportOperationMetadata: Schema.optional(
      GoogleCloudDialogflowV2beta1ExportOperationMetadata,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1ListEntityTypesResponse {
  entityTypes?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1EntityType>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3beta1ListEntityTypesResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ListEntityTypesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1EntityType),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ListEntityTypesResponse",
  });

export interface GoogleCloudDialogflowCxV3Environment {
  displayName?: string;
  updateTime?: string;
  name?: string;
  description?: string;
  versionConfigs?: ReadonlyArray<GoogleCloudDialogflowCxV3EnvironmentVersionConfig>;
  testCasesConfig?: GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig;
  webhookConfig?: GoogleCloudDialogflowCxV3EnvironmentWebhookConfig;
}

export const GoogleCloudDialogflowCxV3Environment: Schema.Schema<GoogleCloudDialogflowCxV3Environment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    versionConfigs: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3EnvironmentVersionConfig),
    ),
    testCasesConfig: Schema.optional(
      GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig,
    ),
    webhookConfig: Schema.optional(
      GoogleCloudDialogflowCxV3EnvironmentWebhookConfig,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Environment" });

export interface GoogleCloudDialogflowCxV3DeployFlowResponse {
  deployment?: string;
  environment?: GoogleCloudDialogflowCxV3Environment;
}

export const GoogleCloudDialogflowCxV3DeployFlowResponse: Schema.Schema<GoogleCloudDialogflowCxV3DeployFlowResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deployment: Schema.optional(Schema.String),
    environment: Schema.optional(GoogleCloudDialogflowCxV3Environment),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3DeployFlowResponse" });

export interface GoogleCloudDialogflowV2DeleteConversationModelOperationMetadata {
  conversationModel?: string;
  createTime?: string;
  doneTime?: string;
}

export const GoogleCloudDialogflowV2DeleteConversationModelOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2DeleteConversationModelOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationModel: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    doneTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2DeleteConversationModelOperationMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1StartExperimentRequest {}

export const GoogleCloudDialogflowCxV3beta1StartExperimentRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1StartExperimentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1StartExperimentRequest",
  });

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

export interface GoogleCloudDialogflowCxV3CreateVersionOperationMetadata {
  version?: string;
}

export const GoogleCloudDialogflowCxV3CreateVersionOperationMetadata: Schema.Schema<GoogleCloudDialogflowCxV3CreateVersionOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3CreateVersionOperationMetadata",
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

export interface GoogleCloudDialogflowCxV3ExportTestCasesMetadata {}

export const GoogleCloudDialogflowCxV3ExportTestCasesMetadata: Schema.Schema<GoogleCloudDialogflowCxV3ExportTestCasesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ExportTestCasesMetadata",
  });

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

export interface GoogleCloudDialogflowV2SetSuggestionFeatureConfigOperationMetadata {
  suggestionFeatureType?:
    | "TYPE_UNSPECIFIED"
    | "ARTICLE_SUGGESTION"
    | "FAQ"
    | "SMART_REPLY"
    | "CONVERSATION_SUMMARIZATION"
    | "KNOWLEDGE_SEARCH"
    | "KNOWLEDGE_ASSIST"
    | (string & {});
  conversationProfile?: string;
  participantRole?:
    | "ROLE_UNSPECIFIED"
    | "HUMAN_AGENT"
    | "AUTOMATED_AGENT"
    | "END_USER"
    | (string & {});
  createTime?: string;
}

export const GoogleCloudDialogflowV2SetSuggestionFeatureConfigOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2SetSuggestionFeatureConfigOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suggestionFeatureType: Schema.optional(Schema.String),
    conversationProfile: Schema.optional(Schema.String),
    participantRole: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SetSuggestionFeatureConfigOperationMetadata",
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
  entityTypesContent?: GoogleCloudDialogflowCxV3beta1InlineSource;
  targetEntityType?: string;
}

export const GoogleCloudDialogflowCxV3beta1ImportEntityTypesRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportEntityTypesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypesUri: Schema.optional(Schema.String),
    mergeOption: Schema.optional(Schema.String),
    entityTypesContent: Schema.optional(
      GoogleCloudDialogflowCxV3beta1InlineSource,
    ),
    targetEntityType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportEntityTypesRequest",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportEntityTypesMetadata {}

export const GoogleCloudDialogflowCxV3beta1ExportEntityTypesMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1ExportEntityTypesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportEntityTypesMetadata",
  });

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

export interface GoogleCloudDialogflowCxV3beta1ValidateAgentRequest {
  languageCode?: string;
}

export const GoogleCloudDialogflowCxV3beta1ValidateAgentRequest: Schema.Schema<GoogleCloudDialogflowCxV3beta1ValidateAgentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ValidateAgentRequest",
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

export interface GoogleCloudDialogflowCxV3RunTestCaseMetadata {}

export const GoogleCloudDialogflowCxV3RunTestCaseMetadata: Schema.Schema<GoogleCloudDialogflowCxV3RunTestCaseMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3RunTestCaseMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1ListChangelogsResponse {
  changelogs?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Changelog>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowCxV3beta1ListChangelogsResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1ListChangelogsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    changelogs: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1Changelog),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ListChangelogsResponse",
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

export interface GoogleCloudDialogflowCxV3BatchRunTestCasesMetadata {
  errors?: ReadonlyArray<GoogleCloudDialogflowCxV3TestError>;
}

export const GoogleCloudDialogflowCxV3BatchRunTestCasesMetadata: Schema.Schema<GoogleCloudDialogflowCxV3BatchRunTestCasesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3TestError)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3BatchRunTestCasesMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookResponse {
  payload?: Record<string, unknown>;
  fulfillmentResponse?: GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse;
  sessionInfo?: GoogleCloudDialogflowCxV3beta1SessionInfo;
  pageInfo?: GoogleCloudDialogflowCxV3beta1PageInfo;
  targetFlow?: string;
  targetPage?: string;
}

export const GoogleCloudDialogflowCxV3beta1WebhookResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1WebhookResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    fulfillmentResponse: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse,
    ),
    sessionInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1SessionInfo),
    pageInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1PageInfo),
    targetFlow: Schema.optional(Schema.String),
    targetPage: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1WebhookResponse" });

export interface GoogleCloudDialogflowCxV3beta1SecuritySettings {
  insightsExportSettings?: GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings;
  displayName?: string;
  redactionScope?:
    | "REDACTION_SCOPE_UNSPECIFIED"
    | "REDACT_DISK_STORAGE"
    | (string & {});
  audioExportSettings?: GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings;
  redactionStrategy?:
    | "REDACTION_STRATEGY_UNSPECIFIED"
    | "REDACT_WITH_SERVICE"
    | (string & {});
  retentionWindowDays?: number;
  retentionStrategy?:
    | "RETENTION_STRATEGY_UNSPECIFIED"
    | "REMOVE_AFTER_CONVERSATION"
    | (string & {});
  name?: string;
  inspectTemplate?: string;
  deidentifyTemplate?: string;
  purgeDataTypes?: ReadonlyArray<
    "PURGE_DATA_TYPE_UNSPECIFIED" | "DIALOGFLOW_HISTORY" | (string & {})
  >;
}

export const GoogleCloudDialogflowCxV3beta1SecuritySettings: Schema.Schema<GoogleCloudDialogflowCxV3beta1SecuritySettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    insightsExportSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings,
    ),
    displayName: Schema.optional(Schema.String),
    redactionScope: Schema.optional(Schema.String),
    audioExportSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings,
    ),
    redactionStrategy: Schema.optional(Schema.String),
    retentionWindowDays: Schema.optional(Schema.Number),
    retentionStrategy: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    inspectTemplate: Schema.optional(Schema.String),
    deidentifyTemplate: Schema.optional(Schema.String),
    purgeDataTypes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1SecuritySettings" });

export interface GoogleCloudDialogflowCxV3WebhookRequest {
  languageInfo?: GoogleCloudDialogflowCxV3LanguageInfo;
  triggerEvent?: string;
  payload?: Record<string, unknown>;
  sessionInfo?: GoogleCloudDialogflowCxV3SessionInfo;
  pageInfo?: GoogleCloudDialogflowCxV3PageInfo;
  triggerIntent?: string;
  fulfillmentInfo?: GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo;
  transcript?: string;
  languageCode?: string;
  detectIntentResponseId?: string;
  dtmfDigits?: string;
  intentInfo?: GoogleCloudDialogflowCxV3WebhookRequestIntentInfo;
  messages?: ReadonlyArray<GoogleCloudDialogflowCxV3ResponseMessage>;
  sentimentAnalysisResult?: GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult;
  text?: string;
}

export const GoogleCloudDialogflowCxV3WebhookRequest: Schema.Schema<GoogleCloudDialogflowCxV3WebhookRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageInfo: Schema.optional(GoogleCloudDialogflowCxV3LanguageInfo),
    triggerEvent: Schema.optional(Schema.String),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    sessionInfo: Schema.optional(GoogleCloudDialogflowCxV3SessionInfo),
    pageInfo: Schema.optional(GoogleCloudDialogflowCxV3PageInfo),
    triggerIntent: Schema.optional(Schema.String),
    fulfillmentInfo: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo,
    ),
    transcript: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    detectIntentResponseId: Schema.optional(Schema.String),
    dtmfDigits: Schema.optional(Schema.String),
    intentInfo: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookRequestIntentInfo,
    ),
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ResponseMessage),
    ),
    sentimentAnalysisResult: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult,
    ),
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3WebhookRequest" });

export interface GoogleCloudDialogflowCxV3beta1ImportEntityTypesMetadata {}

export const GoogleCloudDialogflowCxV3beta1ImportEntityTypesMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1ImportEntityTypesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportEntityTypesMetadata",
  });

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

export interface GoogleCloudDialogflowV2WebhookRequest {
  responseId?: string;
  originalDetectIntentRequest?: GoogleCloudDialogflowV2OriginalDetectIntentRequest;
  session?: string;
  queryResult?: GoogleCloudDialogflowV2QueryResult;
}

export const GoogleCloudDialogflowV2WebhookRequest: Schema.Schema<GoogleCloudDialogflowV2WebhookRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responseId: Schema.optional(Schema.String),
    originalDetectIntentRequest: Schema.optional(
      GoogleCloudDialogflowV2OriginalDetectIntentRequest,
    ),
    session: Schema.optional(Schema.String),
    queryResult: Schema.optional(GoogleCloudDialogflowV2QueryResult),
  }).annotate({ identifier: "GoogleCloudDialogflowV2WebhookRequest" });

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

export interface GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata {
  version?: string;
}

export const GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata: Schema.Schema<GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata",
  });

export interface GoogleCloudDialogflowV2HumanAgentAssistantEvent {
  participant?: string;
  suggestionResults?: ReadonlyArray<GoogleCloudDialogflowV2SuggestionResult>;
  conversation?: string;
}

export const GoogleCloudDialogflowV2HumanAgentAssistantEvent: Schema.Schema<GoogleCloudDialogflowV2HumanAgentAssistantEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    participant: Schema.optional(Schema.String),
    suggestionResults: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SuggestionResult),
    ),
    conversation: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2HumanAgentAssistantEvent",
  });

export interface GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadata {
  participantRole?:
    | "ROLE_UNSPECIFIED"
    | "HUMAN_AGENT"
    | "AUTOMATED_AGENT"
    | "END_USER"
    | (string & {});
  createTime?: string;
  conversationProfile?: string;
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

export const GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadata: Schema.Schema<GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    participantRole: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    conversationProfile: Schema.optional(Schema.String),
    suggestionFeatureType: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadata",
  });

export interface GoogleCloudDialogflowCxV3ExportIntentsResponse {
  intentsUri?: string;
  intentsContent?: GoogleCloudDialogflowCxV3InlineDestination;
}

export const GoogleCloudDialogflowCxV3ExportIntentsResponse: Schema.Schema<GoogleCloudDialogflowCxV3ExportIntentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intentsUri: Schema.optional(Schema.String),
    intentsContent: Schema.optional(GoogleCloudDialogflowCxV3InlineDestination),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ExportIntentsResponse" });

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

export interface GoogleCloudDialogflowCxV3beta1FulfillIntentResponse {
  responseId?: string;
  outputAudioConfig?: GoogleCloudDialogflowCxV3beta1OutputAudioConfig;
  outputAudio?: string;
  queryResult?: GoogleCloudDialogflowCxV3beta1QueryResult;
}

export const GoogleCloudDialogflowCxV3beta1FulfillIntentResponse: Schema.Schema<GoogleCloudDialogflowCxV3beta1FulfillIntentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responseId: Schema.optional(Schema.String),
    outputAudioConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1OutputAudioConfig,
    ),
    outputAudio: Schema.optional(Schema.String),
    queryResult: Schema.optional(GoogleCloudDialogflowCxV3beta1QueryResult),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1FulfillIntentResponse",
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

export interface ListProjectsOperationsRequest {
  filter?: string;
  returnPartialSuccess?: boolean;
  name: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
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

export interface ListProjectsLocationsRequest {
  filter?: string;
  name: string;
  pageSize?: number;
  extraLocationTypes?: string[];
  pageToken?: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
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

export interface PatchProjectsLocationsSecuritySettingsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1SecuritySettings;
}

export const PatchProjectsLocationsSecuritySettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
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

export interface ListProjectsLocationsSecuritySettingsRequest {
  pageToken?: string;
  parent: string;
  pageSize?: number;
}

export const ListProjectsLocationsSecuritySettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
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

export interface ListProjectsLocationsOperationsRequest {
  returnPartialSuccess?: boolean;
  filter?: string;
  pageToken?: string;
  name: string;
  pageSize?: number;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
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

export interface ListProjectsLocationsAgentsRequest {
  pageSize?: number;
  parent: string;
  pageToken?: string;
}

export const ListProjectsLocationsAgentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
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

export interface GetGenerativeSettingsProjectsLocationsAgentsRequest {
  languageCode?: string;
  name: string;
}

export const GetGenerativeSettingsProjectsLocationsAgentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
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

export interface UpdateGenerativeSettingsProjectsLocationsAgentsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1GenerativeSettings;
}

export const UpdateGenerativeSettingsProjectsLocationsAgentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
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

export interface ListProjectsLocationsAgentsEntityTypesRequest {
  pageToken?: string;
  languageCode?: string;
  pageSize?: number;
  parent: string;
}

export const ListProjectsLocationsAgentsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
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

export interface PatchProjectsLocationsAgentsEntityTypesRequest {
  updateMask?: string;
  name: string;
  languageCode?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1EntityType;
}

export const PatchProjectsLocationsAgentsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
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

export interface ListProjectsLocationsAgentsPlaybooksRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsAgentsPlaybooksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
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

export interface PatchProjectsLocationsAgentsPlaybooksRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1Playbook;
}

export const PatchProjectsLocationsAgentsPlaybooksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
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

export interface ListProjectsLocationsAgentsPlaybooksVersionsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsAgentsPlaybooksVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
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
  pageSize?: number;
  parent: string;
  pageToken?: string;
  languageCode?: string;
}

export const ListProjectsLocationsAgentsPlaybooksExamplesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
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

export interface PatchProjectsLocationsAgentsPlaybooksExamplesRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1Example;
}

export const PatchProjectsLocationsAgentsPlaybooksExamplesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
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

export interface ListProjectsLocationsAgentsGeneratorsRequest {
  languageCode?: string;
  pageToken?: string;
  parent: string;
  pageSize?: number;
}

export const ListProjectsLocationsAgentsGeneratorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
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

export interface GetProjectsLocationsAgentsGeneratorsRequest {
  languageCode?: string;
  name: string;
}

export const GetProjectsLocationsAgentsGeneratorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
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

export interface PatchProjectsLocationsAgentsGeneratorsRequest {
  name: string;
  updateMask?: string;
  languageCode?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1Generator;
}

export const PatchProjectsLocationsAgentsGeneratorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
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

export interface PatchProjectsLocationsAgentsFlowsRequest {
  updateMask?: string;
  name: string;
  languageCode?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1Flow;
}

export const PatchProjectsLocationsAgentsFlowsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
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

export interface GetValidationResultProjectsLocationsAgentsFlowsRequest {
  name: string;
  languageCode?: string;
}

export const GetValidationResultProjectsLocationsAgentsFlowsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
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

export interface ListProjectsLocationsAgentsFlowsRequest {
  languageCode?: string;
  pageToken?: string;
  parent: string;
  pageSize?: number;
}

export const ListProjectsLocationsAgentsFlowsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
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
  languageCode?: string;
  pageToken?: string;
  parent: string;
  pageSize?: number;
}

export const ListProjectsLocationsAgentsFlowsPagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
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

export interface GetProjectsLocationsAgentsFlowsPagesRequest {
  languageCode?: string;
  name: string;
}

export const GetProjectsLocationsAgentsFlowsPagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
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

export interface PatchProjectsLocationsAgentsFlowsPagesRequest {
  name: string;
  updateMask?: string;
  languageCode?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1Page;
}

export const PatchProjectsLocationsAgentsFlowsPagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
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

export interface PatchProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest {
  name: string;
  updateMask?: string;
  languageCode?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1TransitionRouteGroup;
}

export const PatchProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
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

export interface ListProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest {
  pageToken?: string;
  languageCode?: string;
  pageSize?: number;
  parent: string;
}

export const ListProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
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

export interface GetProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest {
  languageCode?: string;
  name: string;
}

export const GetProjectsLocationsAgentsFlowsTransitionRouteGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
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

export interface ListProjectsLocationsAgentsFlowsVersionsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsAgentsFlowsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
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

export interface ListProjectsLocationsAgentsToolsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsAgentsToolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
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

export interface PatchProjectsLocationsAgentsToolsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1Tool;
}

export const PatchProjectsLocationsAgentsToolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
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

export interface ListProjectsLocationsAgentsToolsVersionsRequest {
  pageToken?: string;
  parent: string;
  pageSize?: number;
}

export const ListProjectsLocationsAgentsToolsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
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
  intentView?:
    | "INTENT_VIEW_UNSPECIFIED"
    | "INTENT_VIEW_PARTIAL"
    | "INTENT_VIEW_FULL"
    | (string & {});
  pageToken?: string;
  parent: string;
  pageSize?: number;
  languageCode?: string;
}

export const ListProjectsLocationsAgentsIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intentView: Schema.optional(Schema.String).pipe(T.HttpQuery("intentView")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
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

export interface GetProjectsLocationsAgentsIntentsRequest {
  languageCode?: string;
  name: string;
}

export const GetProjectsLocationsAgentsIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
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

export interface PatchProjectsLocationsAgentsIntentsRequest {
  name: string;
  updateMask?: string;
  languageCode?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1Intent;
}

export const PatchProjectsLocationsAgentsIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
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

export interface ListProjectsLocationsAgentsChangelogsRequest {
  pageToken?: string;
  pageSize?: number;
  parent: string;
  filter?: string;
}

export const ListProjectsLocationsAgentsChangelogsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
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

export interface ListProjectsLocationsAgentsTestCasesRequest {
  pageToken?: string;
  pageSize?: number;
  parent: string;
  view?: "TEST_CASE_VIEW_UNSPECIFIED" | "BASIC" | "FULL" | (string & {});
}

export const ListProjectsLocationsAgentsTestCasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
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

export interface ListProjectsLocationsAgentsTestCasesResultsRequest {
  parent: string;
  filter?: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsAgentsTestCasesResultsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
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

export interface ListProjectsLocationsAgentsTransitionRouteGroupsRequest {
  languageCode?: string;
  pageToken?: string;
  parent: string;
  pageSize?: number;
}

export const ListProjectsLocationsAgentsTransitionRouteGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
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

export interface PatchProjectsLocationsAgentsTransitionRouteGroupsRequest {
  updateMask?: string;
  name: string;
  languageCode?: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1TransitionRouteGroup;
}

export const PatchProjectsLocationsAgentsTransitionRouteGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
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
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1Webhook;
}

export const PatchProjectsLocationsAgentsWebhooksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
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

export interface ListProjectsLocationsAgentsWebhooksRequest {
  pageToken?: string;
  pageSize?: number;
  parent: string;
}

export const ListProjectsLocationsAgentsWebhooksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
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
  pageSize?: number;
  pageToken?: string;
}

export const LookupEnvironmentHistoryProjectsLocationsAgentsEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
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

export interface ListProjectsLocationsAgentsEnvironmentsDeploymentsRequest {
  pageToken?: string;
  pageSize?: number;
  parent: string;
}

export const ListProjectsLocationsAgentsEnvironmentsDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
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
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

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
  pageToken?: string;
  pageSize?: number;
  parent: string;
}

export const ListProjectsLocationsAgentsEnvironmentsSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
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

export interface ListProjectsLocationsAgentsEnvironmentsContinuousTestResultsRequest {
  pageToken?: string;
  parent: string;
  pageSize?: number;
}

export const ListProjectsLocationsAgentsEnvironmentsContinuousTestResultsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
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

export interface ListProjectsLocationsAgentsEnvironmentsExperimentsRequest {
  pageToken?: string;
  pageSize?: number;
  parent: string;
}

export const ListProjectsLocationsAgentsEnvironmentsExperimentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
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

export interface PatchProjectsLocationsAgentsEnvironmentsExperimentsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1Experiment;
}

export const PatchProjectsLocationsAgentsEnvironmentsExperimentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
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

export interface ListProjectsLocationsAgentsConversationsRequest {
  pageToken?: string;
  parent: string;
  filter?: string;
  pageSize?: number;
}

export const ListProjectsLocationsAgentsConversationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
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

export interface ListProjectsLocationsAgentsSessionsEntityTypesRequest {
  pageToken?: string;
  parent: string;
  pageSize?: number;
}

export const ListProjectsLocationsAgentsSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
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

export interface PatchProjectsLocationsAgentsSessionsEntityTypesRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudDialogflowCxV3beta1SessionEntityType;
}

export const PatchProjectsLocationsAgentsSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
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
