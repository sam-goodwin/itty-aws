// ==========================================================================
// Gemini Enterprise for Customer Experience API (ces v1beta)
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
  name: "ces",
  version: "v1beta",
  rootUrl: "https://ces.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface LfA2aV1Part {
  /** The `raw` byte content of a file. In JSON serialization, this is encoded as a base64 string. */
  raw?: string;
  /** The string content of the `text` part. */
  text?: string;
  /** Arbitrary structured `data` as a JSON value (object, array, string, number, boolean, or null). */
  data?: unknown;
  /** Optional. metadata associated with this part. */
  metadata?: Record<string, unknown>;
  /** An optional `filename` for the file (e.g., "document.pdf"). */
  filename?: string;
  /** A `url` pointing to the file's content. */
  url?: string;
  /** The `media_type` (MIME type) of the part content (e.g., "text/plain", "application/json", "image/png"). This field is available for all part types. */
  mediaType?: string;
}

export const LfA2aV1Part: Schema.Schema<LfA2aV1Part> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    raw: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
    data: Schema.optional(Schema.Unknown),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    filename: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    mediaType: Schema.optional(Schema.String),
  }).annotate({ identifier: "LfA2aV1Part" });

export interface LfA2aV1Artifact {
  /** Required. The content of the artifact. Must contain at least one part. */
  parts?: ReadonlyArray<LfA2aV1Part>;
  /** Optional. Metadata included with the artifact. */
  metadata?: Record<string, unknown>;
  /** Required. Unique identifier (e.g. UUID) for the artifact. It must be unique within a task. */
  artifactId?: string;
  /** A human readable name for the artifact. */
  name?: string;
  /** The URIs of extensions that are present or contributed to this Artifact. */
  extensions?: ReadonlyArray<string>;
  /** Optional. A human readable description of the artifact. */
  description?: string;
}

export const LfA2aV1Artifact: Schema.Schema<LfA2aV1Artifact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parts: Schema.optional(Schema.Array(LfA2aV1Part)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    artifactId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    extensions: Schema.optional(Schema.Array(Schema.String)),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "LfA2aV1Artifact" });

export interface LfA2aV1Message {
  /** Optional. The context id of the message. If set, the message will be associated with the given context. */
  contextId?: string;
  /** Optional. The task id of the message. If set, the message will be associated with the given task. */
  taskId?: string;
  /** The URIs of extensions that are present or contributed to this Message. */
  extensions?: ReadonlyArray<string>;
  /** A list of task IDs that this message references for additional context. */
  referenceTaskIds?: ReadonlyArray<string>;
  /** Required. Parts is the container of the message content. */
  parts?: ReadonlyArray<LfA2aV1Part>;
  /** Optional. Any metadata to provide along with the message. */
  metadata?: Record<string, unknown>;
  /** Required. The unique identifier (e.g. UUID) of the message. This is created by the message creator. */
  messageId?: string;
  /** Required. Identifies the sender of the message. */
  role?: "ROLE_UNSPECIFIED" | "ROLE_USER" | "ROLE_AGENT" | (string & {});
}

export const LfA2aV1Message: Schema.Schema<LfA2aV1Message> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contextId: Schema.optional(Schema.String),
    taskId: Schema.optional(Schema.String),
    extensions: Schema.optional(Schema.Array(Schema.String)),
    referenceTaskIds: Schema.optional(Schema.Array(Schema.String)),
    parts: Schema.optional(Schema.Array(LfA2aV1Part)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    messageId: Schema.optional(Schema.String),
    role: Schema.optional(Schema.String),
  }).annotate({ identifier: "LfA2aV1Message" });

export interface LfA2aV1TaskStatus {
  /** A message associated with the status. */
  message?: LfA2aV1Message;
  /** ISO 8601 Timestamp when the status was recorded. Example: "2023-10-27T10:00:00Z" */
  timestamp?: string;
  /** Required. The current state of this task. */
  state?:
    | "TASK_STATE_UNSPECIFIED"
    | "TASK_STATE_SUBMITTED"
    | "TASK_STATE_WORKING"
    | "TASK_STATE_COMPLETED"
    | "TASK_STATE_FAILED"
    | "TASK_STATE_CANCELED"
    | "TASK_STATE_INPUT_REQUIRED"
    | "TASK_STATE_REJECTED"
    | "TASK_STATE_AUTH_REQUIRED"
    | (string & {});
}

export const LfA2aV1TaskStatus: Schema.Schema<LfA2aV1TaskStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(LfA2aV1Message),
    timestamp: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "LfA2aV1TaskStatus" });

export interface LfA2aV1Task {
  /** Required. Unique identifier (e.g. UUID) for the task, generated by the server for a new task. */
  id?: string;
  /** protolint:enable REPEATED_FIELD_NAMES_PLURALIZED A key/value object to store custom metadata about a task. */
  metadata?: Record<string, unknown>;
  /** A set of output artifacts for a `Task`. */
  artifacts?: ReadonlyArray<LfA2aV1Artifact>;
  /** Required. The current status of a `Task`, including `state` and a `message`. */
  status?: LfA2aV1TaskStatus;
  /** Unique identifier (e.g. UUID) for the contextual collection of interactions (tasks and messages). */
  contextId?: string;
  /** protolint:disable REPEATED_FIELD_NAMES_PLURALIZED The history of interactions from a `Task`. */
  history?: ReadonlyArray<LfA2aV1Message>;
}

export const LfA2aV1Task: Schema.Schema<LfA2aV1Task> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    artifacts: Schema.optional(Schema.Array(LfA2aV1Artifact)),
    status: Schema.optional(LfA2aV1TaskStatus),
    contextId: Schema.optional(Schema.String),
    history: Schema.optional(Schema.Array(LfA2aV1Message)),
  }).annotate({ identifier: "LfA2aV1Task" });

export interface ApiKeyConfig {
  /** Required. Key location in the request. */
  requestLocation?:
    | "REQUEST_LOCATION_UNSPECIFIED"
    | "HEADER"
    | "QUERY_STRING"
    | (string & {});
  /** Required. The name of the SecretManager secret version resource storing the API key. Format: `projects/{project}/secrets/{secret}/versions/{version}` Note: You should grant `roles/secretmanager.secretAccessor` role to the CES service agent `service-@gcp-sa-ces.iam.gserviceaccount.com`. */
  apiKeySecretVersion?: string;
  /** Required. The parameter name or the header name of the API key. E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name. */
  keyName?: string;
}

export const ApiKeyConfig: Schema.Schema<ApiKeyConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestLocation: Schema.optional(Schema.String),
    apiKeySecretVersion: Schema.optional(Schema.String),
    keyName: Schema.optional(Schema.String),
  }).annotate({ identifier: "ApiKeyConfig" });

export interface WebSearchQuery {
  /** The search query text. */
  query?: string;
  /** The URI to the Google Search results page for the query. */
  uri?: string;
}

export const WebSearchQuery: Schema.Schema<WebSearchQuery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    query: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "WebSearchQuery" });

export interface GoogleSearchSuggestions {
  /** List of queries used to perform the google search along with the search result URIs forming the search suggestions. */
  webSearchQueries?: ReadonlyArray<WebSearchQuery>;
  /** Compliant HTML and CSS styling for search suggestions. The provided HTML and CSS automatically adapts to your device settings, displaying in either light or dark mode indicated by `@media(prefers-color-scheme)`. */
  htmls?: ReadonlyArray<string>;
}

export const GoogleSearchSuggestions: Schema.Schema<GoogleSearchSuggestions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webSearchQueries: Schema.optional(Schema.Array(WebSearchQuery)),
    htmls: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleSearchSuggestions" });

export interface RedactionConfig {
  /** Optional. If true, redaction will be applied in various logging scenarios, including conversation history, Cloud Logging and audio recording. */
  enableRedaction?: boolean;
  /** Optional. [DLP](https://cloud.google.com/dlp/docs) inspect template name to configure detection of sensitive data types. Format: `projects/{project}/locations/{location}/inspectTemplates/{inspect_template}` */
  inspectTemplate?: string;
  /** Optional. [DLP](https://cloud.google.com/dlp/docs) deidentify template name to instruct on how to de-identify content. Format: `projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}` */
  deidentifyTemplate?: string;
}

export const RedactionConfig: Schema.Schema<RedactionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableRedaction: Schema.optional(Schema.Boolean),
    inspectTemplate: Schema.optional(Schema.String),
    deidentifyTemplate: Schema.optional(Schema.String),
  }).annotate({ identifier: "RedactionConfig" });

export interface AudioRecordingConfig {
  /** Optional. The [Cloud Storage](https://cloud.google.com/storage) bucket to store the session audio recordings. The URI must start with "gs://". Please choose a bucket location that meets your data residency requirements. Note: If the Cloud Storage bucket is in a different project from the app, you should grant `storage.objects.create` permission to the CES service agent `service-@gcp-sa-ces.iam.gserviceaccount.com`. */
  gcsBucket?: string;
  /** Optional. The Cloud Storage path prefix for audio recordings. This prefix can include the following placeholders, which will be dynamically substituted at serving time: - $project: project ID - $location: app location - $app: app ID - $date: session date in YYYY-MM-DD format - $session: session ID If the path prefix is not specified, the default prefix `$project/$location/$app/$date/$session/` will be used. */
  gcsPathPrefix?: string;
}

export const AudioRecordingConfig: Schema.Schema<AudioRecordingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsBucket: Schema.optional(Schema.String),
    gcsPathPrefix: Schema.optional(Schema.String),
  }).annotate({ identifier: "AudioRecordingConfig" });

export interface CloudLoggingSettings {
  /** Optional. Whether to enable Cloud Logging for the sessions. */
  enableCloudLogging?: boolean;
}

export const CloudLoggingSettings: Schema.Schema<CloudLoggingSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableCloudLogging: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "CloudLoggingSettings" });

export interface MetricAnalysisSettings {
  /** Optional. Whether to collect conversation data for llm analysis metrics. If true, conversation data will not be collected for llm analysis metrics; otherwise, conversation data will be collected. */
  llmMetricsOptedOut?: boolean;
}

export const MetricAnalysisSettings: Schema.Schema<MetricAnalysisSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    llmMetricsOptedOut: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "MetricAnalysisSettings" });

export interface BigQueryExportSettings {
  /** Optional. Indicates whether the BigQuery export is enabled. */
  enabled?: boolean;
  /** Optional. The **project ID** of the BigQuery dataset to export the data to. Note: If the BigQuery dataset is in a different project from the app, you should grant `roles/bigquery.admin` role to the CES service agent `service-@gcp-sa-ces.iam.gserviceaccount.com`. */
  project?: string;
  /** Optional. The BigQuery **dataset ID** to export the data to. */
  dataset?: string;
}

export const BigQueryExportSettings: Schema.Schema<BigQueryExportSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    project: Schema.optional(Schema.String),
    dataset: Schema.optional(Schema.String),
  }).annotate({ identifier: "BigQueryExportSettings" });

export interface ConversationLoggingSettings {
  /** Optional. Whether to disable conversation logging for the sessions. */
  disableConversationLogging?: boolean;
  /** Optional. Controls the retention window for the conversation. If not set, the conversation will be retained for 365 days. */
  retentionWindow?: string;
}

export const ConversationLoggingSettings: Schema.Schema<ConversationLoggingSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disableConversationLogging: Schema.optional(Schema.Boolean),
    retentionWindow: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConversationLoggingSettings" });

export interface LoggingSettings {
  /** Optional. Configuration for how sensitive data should be redacted. */
  redactionConfig?: RedactionConfig;
  /** Optional. Configuration for how audio interactions should be recorded. The audio is subject to redaction as configured in RedactionConfig. */
  audioRecordingConfig?: AudioRecordingConfig;
  /** Optional. Settings to describe the Cloud Logging behaviors for the app. */
  cloudLoggingSettings?: CloudLoggingSettings;
  /** Optional. Configuration for how audio interactions should be recorded for the evaluation. By default, audio recording is not enabled for evaluation sessions. */
  evaluationAudioRecordingConfig?: AudioRecordingConfig;
  /** Optional. Settings to describe the conversation data collection behaviors for the LLM analysis pipeline for the app. */
  metricAnalysisSettings?: MetricAnalysisSettings;
  /** Optional. Configures an additional recording of unredacted audio. This can be used to maintain a raw audio copy when audio redaction is enabled, typically for auditing or monitoring purposes. */
  unredactedAudioRecordingConfig?: AudioRecordingConfig;
  /** Optional. Configures the BigQuery export behaviors for the app. The conversation data is subject to redaction as configured in RedactionConfig. */
  bigqueryExportSettings?: BigQueryExportSettings;
  /** Optional. Settings to describe the conversation logging behaviors for the app. */
  conversationLoggingSettings?: ConversationLoggingSettings;
}

export const LoggingSettings: Schema.Schema<LoggingSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    redactionConfig: Schema.optional(RedactionConfig),
    audioRecordingConfig: Schema.optional(AudioRecordingConfig),
    cloudLoggingSettings: Schema.optional(CloudLoggingSettings),
    evaluationAudioRecordingConfig: Schema.optional(AudioRecordingConfig),
    metricAnalysisSettings: Schema.optional(MetricAnalysisSettings),
    unredactedAudioRecordingConfig: Schema.optional(AudioRecordingConfig),
    bigqueryExportSettings: Schema.optional(BigQueryExportSettings),
    conversationLoggingSettings: Schema.optional(ConversationLoggingSettings),
  }).annotate({ identifier: "LoggingSettings" });

export interface GoogleSearchToolPromptConfig {
  /** Optional. Defines the prompt used for the system instructions when interacting with the agent in voice conversations. If not set, default prompt will be used. */
  voicePrompt?: string;
  /** Optional. Defines the prompt used for the system instructions when interacting with the agent in chat conversations. If not set, default prompt will be used. */
  textPrompt?: string;
}

export const GoogleSearchToolPromptConfig: Schema.Schema<GoogleSearchToolPromptConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    voicePrompt: Schema.optional(Schema.String),
    textPrompt: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleSearchToolPromptConfig" });

export interface GoogleSearchTool {
  /** Optional. Description of the tool's purpose. */
  description?: string;
  /** Optional. Specifies domains to restrict search results to. Example: "example.com", "another.site". A maximum of 20 domains can be specified. */
  preferredDomains?: ReadonlyArray<string>;
  /** Required. The name of the tool. */
  name?: string;
  /** Optional. Content will be fetched directly from these URLs for context and grounding. Example: "https://example.com/path.html". A maximum of 20 URLs are allowed. */
  contextUrls?: ReadonlyArray<string>;
  /** Optional. List of domains to be excluded from the search results. Example: "example.com". A maximum of 2000 domains can be excluded. */
  excludeDomains?: ReadonlyArray<string>;
  /** Optional. Prompt instructions passed to planner on how the search results should be processed for text and voice. */
  promptConfig?: GoogleSearchToolPromptConfig;
}

export const GoogleSearchTool: Schema.Schema<GoogleSearchTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    preferredDomains: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    contextUrls: Schema.optional(Schema.Array(Schema.String)),
    excludeDomains: Schema.optional(Schema.Array(Schema.String)),
    promptConfig: Schema.optional(GoogleSearchToolPromptConfig),
  }).annotate({ identifier: "GoogleSearchTool" });

export interface EvaluationResultToolCallLatency {
  /** Output only. The name of the tool that got executed. Format: `projects/{project}/locations/{location}/apps/{app}/tools/{tool}`. */
  tool?: string;
  /** Output only. The end time of the tool call execution. */
  endTime?: string;
  /** Output only. The latency of the tool call execution. */
  executionLatency?: string;
  /** Output only. The start time of the tool call execution. */
  startTime?: string;
  /** Output only. The display name of the tool. */
  displayName?: string;
}

export const EvaluationResultToolCallLatency: Schema.Schema<EvaluationResultToolCallLatency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tool: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    executionLatency: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "EvaluationResultToolCallLatency" });

export interface ToolsetTool {
  /** Optional. The tool ID to filter the tools to retrieve the schema for. */
  toolId?: string;
  /** Required. The resource name of the Toolset from which this tool is derived. Format: `projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}` */
  toolset?: string;
}

export const ToolsetTool: Schema.Schema<ToolsetTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolId: Schema.optional(Schema.String),
    toolset: Schema.optional(Schema.String),
  }).annotate({ identifier: "ToolsetTool" });

export interface MockedToolCall {
  /** Optional. The name of the tool to mock. Format: `projects/{project}/locations/{location}/apps/{app}/tools/{tool}` */
  toolId?: string;
  /** Optional. Deprecated. Use tool_identifier instead. */
  tool?: string;
  /** Optional. The toolset to mock. */
  toolset?: ToolsetTool;
  /** Required. A pattern to match against the args / inputs of all dispatched tool calls. If the tool call inputs match this pattern, then mock output will be returned. */
  expectedArgsPattern?: Record<string, unknown>;
  /** Optional. The mock response / output to return if the tool call args / inputs match the pattern. */
  mockResponse?: Record<string, unknown>;
}

export const MockedToolCall: Schema.Schema<MockedToolCall> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolId: Schema.optional(Schema.String),
    tool: Schema.optional(Schema.String),
    toolset: Schema.optional(ToolsetTool),
    expectedArgsPattern: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    mockResponse: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "MockedToolCall" });

export interface ErrorHandlingSettingsFallbackResponseConfig {
  /** Optional. The fallback messages in case of system errors (e.g. LLM errors), mapped by [supported language code](https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/reference/language). */
  customFallbackMessages?: Record<string, string>;
  /** Optional. The maximum number of fallback attempts to make before the agent emitting EndSession Signal. */
  maxFallbackAttempts?: number;
}

export const ErrorHandlingSettingsFallbackResponseConfig: Schema.Schema<ErrorHandlingSettingsFallbackResponseConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customFallbackMessages: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    maxFallbackAttempts: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ErrorHandlingSettingsFallbackResponseConfig" });

export interface EvaluationErrorInfo {
  /** Output only. The type of error. */
  errorType?:
    | "ERROR_TYPE_UNSPECIFIED"
    | "RUNTIME_FAILURE"
    | "CONVERSATION_RETRIEVAL_FAILURE"
    | "METRIC_CALCULATION_FAILURE"
    | "EVALUATION_UPDATE_FAILURE"
    | "QUOTA_EXHAUSTED"
    | "USER_SIMULATION_FAILURE"
    | (string & {});
  /** Output only. The user facing error message. */
  userFacingErrorMessage?: string;
  /** Output only. The error message. */
  errorMessage?: string;
  /** Output only. The session ID for the conversation that caused the error. */
  sessionId?: string;
}

export const EvaluationErrorInfo: Schema.Schema<EvaluationErrorInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorType: Schema.optional(Schema.String),
    userFacingErrorMessage: Schema.optional(Schema.String),
    errorMessage: Schema.optional(Schema.String),
    sessionId: Schema.optional(Schema.String),
  }).annotate({ identifier: "EvaluationErrorInfo" });

export interface Status {
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "Status" });

export interface PersonaRunConfig {
  /** Optional. The persona to use for the evaluation. Format: `projects/{project}/locations/{location}/apps/{app}/evaluationPersonas/{evaluationPersona}` */
  persona?: string;
  /** Optional. The number of tasks to run for the persona. */
  taskCount?: number;
}

export const PersonaRunConfig: Schema.Schema<PersonaRunConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    persona: Schema.optional(Schema.String),
    taskCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "PersonaRunConfig" });

export interface EvaluationRunProgress {
  /** Output only. Number of completed evaluation results with an outcome of FAIL. (EvaluationResult.execution_state is COMPLETED and EvaluationResult.evaluation_status is FAIL). */
  failedCount?: number;
  /** Output only. Number of evaluation results that finished successfully. (EvaluationResult.execution_state is COMPLETED). */
  completedCount?: number;
  /** Output only. Number of evaluation results that failed to execute. (EvaluationResult.execution_state is ERROR). */
  errorCount?: number;
  /** Output only. Total number of evaluation results in this run. */
  totalCount?: number;
  /** Output only. Number of completed evaluation results with an outcome of PASS. (EvaluationResult.execution_state is COMPLETED and EvaluationResult.evaluation_status is PASS). */
  passedCount?: number;
}

export const EvaluationRunProgress: Schema.Schema<EvaluationRunProgress> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    failedCount: Schema.optional(Schema.Number),
    completedCount: Schema.optional(Schema.Number),
    errorCount: Schema.optional(Schema.Number),
    totalCount: Schema.optional(Schema.Number),
    passedCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "EvaluationRunProgress" });

export interface InputAudioConfig {
  /** Required. The encoding of the input audio data. */
  audioEncoding?:
    | "AUDIO_ENCODING_UNSPECIFIED"
    | "LINEAR16"
    | "MULAW"
    | "ALAW"
    | (string & {});
  /** Optional. Whether to enable noise suppression on the input audio. Available values are "low", "moderate", "high", "very_high". */
  noiseSuppressionLevel?: string;
  /** Required. The sample rate (in Hertz) of the input audio data. */
  sampleRateHertz?: number;
}

export const InputAudioConfig: Schema.Schema<InputAudioConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audioEncoding: Schema.optional(Schema.String),
    noiseSuppressionLevel: Schema.optional(Schema.String),
    sampleRateHertz: Schema.optional(Schema.Number),
  }).annotate({ identifier: "InputAudioConfig" });

export interface OutputAudioConfig {
  /** Required. The encoding of the output audio data. */
  audioEncoding?:
    | "AUDIO_ENCODING_UNSPECIFIED"
    | "LINEAR16"
    | "MULAW"
    | "ALAW"
    | (string & {});
  /** Required. The sample rate (in Hertz) of the output audio data. */
  sampleRateHertz?: number;
}

export const OutputAudioConfig: Schema.Schema<OutputAudioConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audioEncoding: Schema.optional(Schema.String),
    sampleRateHertz: Schema.optional(Schema.Number),
  }).annotate({ identifier: "OutputAudioConfig" });

export interface EvaluationConfig {
  /** Optional. Configuration for processing the input audio. */
  inputAudioConfig?: InputAudioConfig;
  /** Optional. Specifies whether the evaluation should use real tool calls or fake tools. */
  toolCallBehaviour?:
    | "EVALUATION_TOOL_CALL_BEHAVIOUR_UNSPECIFIED"
    | "REAL"
    | "FAKE"
    | (string & {});
  /** Optional. Configuration for generating the output audio. */
  outputAudioConfig?: OutputAudioConfig;
  /** Optional. The channel to evaluate. */
  evaluationChannel?:
    | "EVALUATION_CHANNEL_UNSPECIFIED"
    | "TEXT"
    | "AUDIO"
    | (string & {});
}

export const EvaluationConfig: Schema.Schema<EvaluationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputAudioConfig: Schema.optional(InputAudioConfig),
    toolCallBehaviour: Schema.optional(Schema.String),
    outputAudioConfig: Schema.optional(OutputAudioConfig),
    evaluationChannel: Schema.optional(Schema.String),
  }).annotate({ identifier: "EvaluationConfig" });

export interface LatencyReportLatencyMetrics {
  /** Output only. The 90th percentile latency. */
  p90Latency?: string;
  /** Output only. The number of times the resource was called. */
  callCount?: number;
  /** Output only. The 50th percentile latency. */
  p50Latency?: string;
  /** Output only. The 99th percentile latency. */
  p99Latency?: string;
}

export const LatencyReportLatencyMetrics: Schema.Schema<LatencyReportLatencyMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    p90Latency: Schema.optional(Schema.String),
    callCount: Schema.optional(Schema.Number),
    p50Latency: Schema.optional(Schema.String),
    p99Latency: Schema.optional(Schema.String),
  }).annotate({ identifier: "LatencyReportLatencyMetrics" });

export interface LatencyReportGuardrailLatency {
  /** Output only. The latency metrics for the guardrail. */
  latencyMetrics?: LatencyReportLatencyMetrics;
  /** Output only. The name of the guardrail. Format: `projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}`. */
  guardrail?: string;
  /** Output only. The display name of the guardrail. */
  guardrailDisplayName?: string;
}

export const LatencyReportGuardrailLatency: Schema.Schema<LatencyReportGuardrailLatency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latencyMetrics: Schema.optional(LatencyReportLatencyMetrics),
    guardrail: Schema.optional(Schema.String),
    guardrailDisplayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "LatencyReportGuardrailLatency" });

export interface LatencyReportLlmCallLatency {
  /** Output only. The name of the model. */
  model?: string;
  /** Output only. The latency metrics for the LLM call. */
  latencyMetrics?: LatencyReportLatencyMetrics;
}

export const LatencyReportLlmCallLatency: Schema.Schema<LatencyReportLlmCallLatency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    model: Schema.optional(Schema.String),
    latencyMetrics: Schema.optional(LatencyReportLatencyMetrics),
  }).annotate({ identifier: "LatencyReportLlmCallLatency" });

export interface LatencyReportToolLatency {
  /** Output only. The display name of the tool. */
  toolDisplayName?: string;
  /** Output only. The toolset tool identifier. */
  toolsetTool?: ToolsetTool;
  /** Output only. Format: `projects/{project}/locations/{location}/apps/{app}/tools/{tool}`. */
  tool?: string;
  /** Output only. The latency metrics for the tool. */
  latencyMetrics?: LatencyReportLatencyMetrics;
}

export const LatencyReportToolLatency: Schema.Schema<LatencyReportToolLatency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolDisplayName: Schema.optional(Schema.String),
    toolsetTool: Schema.optional(ToolsetTool),
    tool: Schema.optional(Schema.String),
    latencyMetrics: Schema.optional(LatencyReportLatencyMetrics),
  }).annotate({ identifier: "LatencyReportToolLatency" });

export interface LatencyReportCallbackLatency {
  /** Output only. The latency metrics for the callback. */
  latencyMetrics?: LatencyReportLatencyMetrics;
  /** Output only. The stage of the callback. */
  stage?: string;
}

export const LatencyReportCallbackLatency: Schema.Schema<LatencyReportCallbackLatency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latencyMetrics: Schema.optional(LatencyReportLatencyMetrics),
    stage: Schema.optional(Schema.String),
  }).annotate({ identifier: "LatencyReportCallbackLatency" });

export interface LatencyReport {
  /** Output only. Unordered list. Latency metrics for each guardrail. */
  guardrailLatencies?: ReadonlyArray<LatencyReportGuardrailLatency>;
  /** Output only. Unordered list. Latency metrics for each LLM call. */
  llmCallLatencies?: ReadonlyArray<LatencyReportLlmCallLatency>;
  /** Output only. Unordered list. Latency metrics for each tool. */
  toolLatencies?: ReadonlyArray<LatencyReportToolLatency>;
  /** Output only. The total number of sessions considered in the latency report. */
  sessionCount?: number;
  /** Output only. Unordered list. Latency metrics for each callback. */
  callbackLatencies?: ReadonlyArray<LatencyReportCallbackLatency>;
}

export const LatencyReport: Schema.Schema<LatencyReport> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guardrailLatencies: Schema.optional(
      Schema.Array(LatencyReportGuardrailLatency),
    ),
    llmCallLatencies: Schema.optional(
      Schema.Array(LatencyReportLlmCallLatency),
    ),
    toolLatencies: Schema.optional(Schema.Array(LatencyReportToolLatency)),
    sessionCount: Schema.optional(Schema.Number),
    callbackLatencies: Schema.optional(
      Schema.Array(LatencyReportCallbackLatency),
    ),
  }).annotate({ identifier: "LatencyReport" });

export interface EvaluationRunEvaluationRunSummary {
  /** Output only. Number of passed results for the associated Evaluation in this run. */
  passedCount?: number;
  /** Output only. Number of failed results for the associated Evaluation in this run. */
  failedCount?: number;
  /** Output only. Number of error results for the associated Evaluation in this run. */
  errorCount?: number;
}

export const EvaluationRunEvaluationRunSummary: Schema.Schema<EvaluationRunEvaluationRunSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    passedCount: Schema.optional(Schema.Number),
    failedCount: Schema.optional(Schema.Number),
    errorCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "EvaluationRunEvaluationRunSummary" });

export interface OptimizationConfig {
  /** Output only. The summary of the loss report. */
  reportSummary?: string;
  /** Output only. Whether to suggest a fix for the losses. */
  shouldSuggestFix?: boolean;
  /** Output only. The assistant session to use for the optimization based on this evaluation run. Format: `projects/{project}/locations/{location}/apps/{app}/assistantSessions/{assistantSession}` */
  assistantSession?: string;
  /** Optional. Whether to generate a loss report. */
  generateLossReport?: boolean;
  /** Output only. The error message if the optimization run failed. */
  errorMessage?: string;
  /** Output only. The status of the optimization run. */
  status?:
    | "OPTIMIZATION_STATUS_UNSPECIFIED"
    | "RUNNING"
    | "COMPLETED"
    | "ERROR"
    | (string & {});
  /** Output only. The generated loss report. */
  lossReport?: Record<string, unknown>;
}

export const OptimizationConfig: Schema.Schema<OptimizationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reportSummary: Schema.optional(Schema.String),
    shouldSuggestFix: Schema.optional(Schema.Boolean),
    assistantSession: Schema.optional(Schema.String),
    generateLossReport: Schema.optional(Schema.Boolean),
    errorMessage: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    lossReport: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "OptimizationConfig" });

export interface EvaluationRun {
  /** Output only. Error information for the evaluation run. */
  errorInfo?: EvaluationErrorInfo;
  /** Output only. Deprecated: Use error_info instead. Errors encountered during execution. */
  error?: Status;
  /** Output only. The type of the evaluations in this run. */
  evaluationType?:
    | "EVALUATION_TYPE_UNSPECIFIED"
    | "GOLDEN"
    | "SCENARIO"
    | "MIXED"
    | (string & {});
  /** Output only. The changelog of the app version that the evaluation ran against. This is populated if user runs evaluation on latest/draft. */
  changelog?: string;
  /** Output only. The configuration to use for the run per persona. */
  personaRunConfigs?: ReadonlyArray<PersonaRunConfig>;
  /** Output only. The progress of the evaluation run. */
  progress?: EvaluationRunProgress;
  /** Output only. The method used to run the evaluation. */
  goldenRunMethod?:
    | "GOLDEN_RUN_METHOD_UNSPECIFIED"
    | "STABLE"
    | "NAIVE"
    | (string & {});
  /** Identifier. The unique identifier of the evaluation run. Format: `projects/{project}/locations/{location}/apps/{app}/evaluationRuns/{evaluationRun}` */
  name?: string;
  /** Optional. User-defined display name of the evaluation run. default: " run - ". */
  displayName?: string;
  /** Output only. The user who initiated the evaluation run. */
  initiatedBy?: string;
  /** Output only. The evaluation dataset that this run is associated with. This field is mutually exclusive with `evaluations`. Format: `projects/{project}/locations/{location}/apps/{app}/evaluationDatasets/{evaluationDataset}` */
  evaluationDataset?: string;
  /** Output only. The evaluation results that are part of this run. Format: `projects/{project}/locations/{location}/apps/{app}/evaluations/{evaluation}/results/{result}` */
  evaluationResults?: ReadonlyArray<string>;
  /** Output only. The operation that created this evaluation run. Format: `projects/{project}/locations/{location}/operations/{operation}` */
  operation?: string;
  /** Output only. The scheduled evaluation run resource name that created this evaluation run. This field is only set if the evaluation run was created by a scheduled evaluation run. Format: `projects/{project}/locations/{location}/apps/{app}/scheduledEvaluationRuns/{scheduled_evaluation_run}` */
  scheduledEvaluationRun?: string;
  /** Output only. The configuration used in the run. */
  config?: EvaluationConfig;
  /** Output only. The display name of the `app_version` that the evaluation ran against. */
  appVersionDisplayName?: string;
  /** Output only. The app version to evaluate. Format: `projects/{project}/locations/{location}/apps/{app}/versions/{version}` */
  appVersion?: string;
  /** Output only. Latency report for the evaluation run. */
  latencyReport?: LatencyReport;
  /** Output only. Map of evaluation name to EvaluationRunSummary. */
  evaluationRunSummaries?: Record<string, EvaluationRunEvaluationRunSummary>;
  /** Output only. The create time of the changelog of the app version that the evaluation ran against. This is populated if user runs evaluation on latest/draft. */
  changelogCreateTime?: string;
  /** Optional. Configuration for running the optimization step after the evaluation run. If not set, the optimization step will not be run. */
  optimizationConfig?: OptimizationConfig;
  /** Output only. The number of times the evaluations inside the run were run. */
  runCount?: number;
  /** Output only. Timestamp when the evaluation run was created. */
  createTime?: string;
  /** Output only. The evaluations that are part of this run. The list may contain evaluations of either type. This field is mutually exclusive with `evaluation_dataset`. Format: `projects/{project}/locations/{location}/apps/{app}/evaluations/{evaluation}` */
  evaluations?: ReadonlyArray<string>;
  /** Output only. The state of the evaluation run. */
  state?:
    | "EVALUATION_RUN_STATE_UNSPECIFIED"
    | "RUNNING"
    | "COMPLETED"
    | "ERROR"
    | (string & {});
}

export const EvaluationRun: Schema.Schema<EvaluationRun> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorInfo: Schema.optional(EvaluationErrorInfo),
    error: Schema.optional(Status),
    evaluationType: Schema.optional(Schema.String),
    changelog: Schema.optional(Schema.String),
    personaRunConfigs: Schema.optional(Schema.Array(PersonaRunConfig)),
    progress: Schema.optional(EvaluationRunProgress),
    goldenRunMethod: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    initiatedBy: Schema.optional(Schema.String),
    evaluationDataset: Schema.optional(Schema.String),
    evaluationResults: Schema.optional(Schema.Array(Schema.String)),
    operation: Schema.optional(Schema.String),
    scheduledEvaluationRun: Schema.optional(Schema.String),
    config: Schema.optional(EvaluationConfig),
    appVersionDisplayName: Schema.optional(Schema.String),
    appVersion: Schema.optional(Schema.String),
    latencyReport: Schema.optional(LatencyReport),
    evaluationRunSummaries: Schema.optional(
      Schema.Record(Schema.String, EvaluationRunEvaluationRunSummary),
    ),
    changelogCreateTime: Schema.optional(Schema.String),
    optimizationConfig: Schema.optional(OptimizationConfig),
    runCount: Schema.optional(Schema.Number),
    createTime: Schema.optional(Schema.String),
    evaluations: Schema.optional(Schema.Array(Schema.String)),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "EvaluationRun" });

export interface EndUserAuthConfigOauth2JwtBearerConfig {
  /** Required. Subject parameter name to pass through. Must be in the format `$context.variables.`. */
  subject?: string;
  /** Required. Client parameter name to pass through. Must be in the format `$context.variables.`. */
  clientKey?: string;
  /** Required. Issuer parameter name to pass through. Must be in the format `$context.variables.`. */
  issuer?: string;
}

export const EndUserAuthConfigOauth2JwtBearerConfig: Schema.Schema<EndUserAuthConfigOauth2JwtBearerConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subject: Schema.optional(Schema.String),
    clientKey: Schema.optional(Schema.String),
    issuer: Schema.optional(Schema.String),
  }).annotate({ identifier: "EndUserAuthConfigOauth2JwtBearerConfig" });

export interface AgentInterface {
  /** Required. The URL where this interface is available. Must be a valid absolute HTTPS URL in production. Example: "https://api.example.com/a2a/v1", "https://grpc.example.com/a2a" */
  url?: string;
  /** Required. The protocol binding supported at this URL. This is an open form string, to be easily extended for other protocol bindings. The core ones officially supported are `JSONRPC`, `GRPC` and `HTTP+JSON`. */
  protocolBinding?: string;
  /** Required. The version of the A2A protocol this interface exposes. Use the latest supported minor version per major version. Examples: "0.3", "1.0" */
  protocolVersion?: string;
  /** Tenant ID to be used in the request when calling the agent. */
  tenant?: string;
}

export const AgentInterface: Schema.Schema<AgentInterface> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    protocolBinding: Schema.optional(Schema.String),
    protocolVersion: Schema.optional(Schema.String),
    tenant: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentInterface" });

export interface LfA2aV1AuthenticationInfo {
  /** Required. HTTP Authentication Scheme from the [IANA registry](https://www.iana.org/assignments/http-authschemes/). Examples: `Bearer`, `Basic`, `Digest`. Scheme names are case-insensitive per [RFC 9110 Section 11.1](https://www.rfc-editor.org/rfc/rfc9110#section-11.1). */
  scheme?: string;
  /** Push Notification credentials. Format depends on the scheme (e.g., token for Bearer). */
  credentials?: string;
}

export const LfA2aV1AuthenticationInfo: Schema.Schema<LfA2aV1AuthenticationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scheme: Schema.optional(Schema.String),
    credentials: Schema.optional(Schema.String),
  }).annotate({ identifier: "LfA2aV1AuthenticationInfo" });

export interface LfA2aV1TaskPushNotificationConfig {
  /** Required. The URL where the notification should be sent. */
  url?: string;
  /** A token unique for this task or session. */
  token?: string;
  /** The ID of the task this configuration is associated with. */
  taskId?: string;
  /** Authentication information required to send the notification. */
  authentication?: LfA2aV1AuthenticationInfo;
  /** Optional. Tenant ID. */
  tenant?: string;
  /** The push notification configuration details. A unique identifier (e.g. UUID) for this push notification configuration. */
  id?: string;
}

export const LfA2aV1TaskPushNotificationConfig: Schema.Schema<LfA2aV1TaskPushNotificationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    token: Schema.optional(Schema.String),
    taskId: Schema.optional(Schema.String),
    authentication: Schema.optional(LfA2aV1AuthenticationInfo),
    tenant: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "LfA2aV1TaskPushNotificationConfig" });

export interface AggregatedMetricsToolMetrics {
  /** Output only. The number of times the tool passed. */
  passCount?: number;
  /** Output only. The name of the tool. */
  tool?: string;
  /** Output only. The number of times the tool failed. */
  failCount?: number;
}

export const AggregatedMetricsToolMetrics: Schema.Schema<AggregatedMetricsToolMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    passCount: Schema.optional(Schema.Number),
    tool: Schema.optional(Schema.String),
    failCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AggregatedMetricsToolMetrics" });

export interface AggregatedMetricsToolCallLatencyMetrics {
  /** Output only. The average latency of the tool calls. */
  averageLatency?: string;
  /** Output only. The name of the tool. */
  tool?: string;
}

export const AggregatedMetricsToolCallLatencyMetrics: Schema.Schema<AggregatedMetricsToolCallLatencyMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    averageLatency: Schema.optional(Schema.String),
    tool: Schema.optional(Schema.String),
  }).annotate({ identifier: "AggregatedMetricsToolCallLatencyMetrics" });

export interface AggregatedMetricsHallucinationMetrics {
  /** Output only. The average hallucination score (0 to 1). */
  score?: number;
}

export const AggregatedMetricsHallucinationMetrics: Schema.Schema<AggregatedMetricsHallucinationMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AggregatedMetricsHallucinationMetrics" });

export interface AggregatedMetricsTurnLatencyMetrics {
  /** Output only. The average latency of the turns. */
  averageLatency?: string;
}

export const AggregatedMetricsTurnLatencyMetrics: Schema.Schema<AggregatedMetricsTurnLatencyMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    averageLatency: Schema.optional(Schema.String),
  }).annotate({ identifier: "AggregatedMetricsTurnLatencyMetrics" });

export interface AggregatedMetricsSemanticSimilarityMetrics {
  /** Output only. The average semantic similarity score (0-4). */
  score?: number;
}

export const AggregatedMetricsSemanticSimilarityMetrics: Schema.Schema<AggregatedMetricsSemanticSimilarityMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AggregatedMetricsSemanticSimilarityMetrics" });

export interface AggregatedMetricsMetricsByTurn {
  /** Output only. Metrics for each tool within this turn. */
  toolMetrics?: ReadonlyArray<AggregatedMetricsToolMetrics>;
  /** Output only. Metrics for tool call latency within this turn. */
  toolCallLatencyMetrics?: ReadonlyArray<AggregatedMetricsToolCallLatencyMetrics>;
  /** Output only. Metrics for hallucination within this turn. */
  hallucinationMetrics?: ReadonlyArray<AggregatedMetricsHallucinationMetrics>;
  /** Output only. Metrics for turn latency within this turn. */
  turnLatencyMetrics?: ReadonlyArray<AggregatedMetricsTurnLatencyMetrics>;
  /** Output only. The turn index (0-based). */
  turnIndex?: number;
  /** Output only. Metrics for semantic similarity within this turn. */
  semanticSimilarityMetrics?: ReadonlyArray<AggregatedMetricsSemanticSimilarityMetrics>;
}

export const AggregatedMetricsMetricsByTurn: Schema.Schema<AggregatedMetricsMetricsByTurn> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolMetrics: Schema.optional(Schema.Array(AggregatedMetricsToolMetrics)),
    toolCallLatencyMetrics: Schema.optional(
      Schema.Array(AggregatedMetricsToolCallLatencyMetrics),
    ),
    hallucinationMetrics: Schema.optional(
      Schema.Array(AggregatedMetricsHallucinationMetrics),
    ),
    turnLatencyMetrics: Schema.optional(
      Schema.Array(AggregatedMetricsTurnLatencyMetrics),
    ),
    turnIndex: Schema.optional(Schema.Number),
    semanticSimilarityMetrics: Schema.optional(
      Schema.Array(AggregatedMetricsSemanticSimilarityMetrics),
    ),
  }).annotate({ identifier: "AggregatedMetricsMetricsByTurn" });

export interface AggregatedMetricsMetricsByAppVersion {
  /** Output only. The number of times the evaluation passed. */
  passCount?: number;
  /** Output only. The number of times the evaluation failed. */
  failCount?: number;
  /** Output only. Metrics aggregated per turn within this app version. */
  metricsByTurn?: ReadonlyArray<AggregatedMetricsMetricsByTurn>;
  /** Output only. Metrics for semantic similarity within this app version. */
  semanticSimilarityMetrics?: ReadonlyArray<AggregatedMetricsSemanticSimilarityMetrics>;
  /** Output only. The app version ID. */
  appVersionId?: string;
  /** Output only. Metrics for each tool within this app version. */
  toolMetrics?: ReadonlyArray<AggregatedMetricsToolMetrics>;
  /** Output only. Metrics for tool call latency within this app version. */
  toolCallLatencyMetrics?: ReadonlyArray<AggregatedMetricsToolCallLatencyMetrics>;
  /** Output only. Metrics for hallucination within this app version. */
  hallucinationMetrics?: ReadonlyArray<AggregatedMetricsHallucinationMetrics>;
  /** Output only. Metrics for turn latency within this app version. */
  turnLatencyMetrics?: ReadonlyArray<AggregatedMetricsTurnLatencyMetrics>;
}

export const AggregatedMetricsMetricsByAppVersion: Schema.Schema<AggregatedMetricsMetricsByAppVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    passCount: Schema.optional(Schema.Number),
    failCount: Schema.optional(Schema.Number),
    metricsByTurn: Schema.optional(
      Schema.Array(AggregatedMetricsMetricsByTurn),
    ),
    semanticSimilarityMetrics: Schema.optional(
      Schema.Array(AggregatedMetricsSemanticSimilarityMetrics),
    ),
    appVersionId: Schema.optional(Schema.String),
    toolMetrics: Schema.optional(Schema.Array(AggregatedMetricsToolMetrics)),
    toolCallLatencyMetrics: Schema.optional(
      Schema.Array(AggregatedMetricsToolCallLatencyMetrics),
    ),
    hallucinationMetrics: Schema.optional(
      Schema.Array(AggregatedMetricsHallucinationMetrics),
    ),
    turnLatencyMetrics: Schema.optional(
      Schema.Array(AggregatedMetricsTurnLatencyMetrics),
    ),
  }).annotate({ identifier: "AggregatedMetricsMetricsByAppVersion" });

export interface AggregatedMetrics {
  /** Output only. Aggregated metrics, grouped by app version ID. */
  metricsByAppVersion?: ReadonlyArray<AggregatedMetricsMetricsByAppVersion>;
}

export const AggregatedMetrics: Schema.Schema<AggregatedMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metricsByAppVersion: Schema.optional(
      Schema.Array(AggregatedMetricsMetricsByAppVersion),
    ),
  }).annotate({ identifier: "AggregatedMetrics" });

export interface EvaluationDataset {
  /** Output only. Timestamp when the evaluation dataset was created. */
  createTime?: string;
  /** Identifier. The unique identifier of this evaluation dataset. Format: `projects/{project}/locations/{location}/apps/{app}/evaluationDatasets/{evaluationDataset}` */
  name?: string;
  /** Required. User-defined display name of the evaluation dataset. Unique within an App. */
  displayName?: string;
  /** Output only. The user who created the evaluation dataset. */
  createdBy?: string;
  /** Optional. Evaluations that are included in this dataset. */
  evaluations?: ReadonlyArray<string>;
  /** Output only. Timestamp when the evaluation dataset was last updated. */
  updateTime?: string;
  /** Output only. The aggregated metrics for this evaluation dataset across all runs. */
  aggregatedMetrics?: AggregatedMetrics;
  /** Output only. Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes. */
  etag?: string;
  /** Output only. The user who last updated the evaluation dataset. */
  lastUpdatedBy?: string;
}

export const EvaluationDataset: Schema.Schema<EvaluationDataset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    createdBy: Schema.optional(Schema.String),
    evaluations: Schema.optional(Schema.Array(Schema.String)),
    updateTime: Schema.optional(Schema.String),
    aggregatedMetrics: Schema.optional(AggregatedMetrics),
    etag: Schema.optional(Schema.String),
    lastUpdatedBy: Schema.optional(Schema.String),
  }).annotate({ identifier: "EvaluationDataset" });

export interface Ces_Schema {
  /** Optional. Indicate the items in the array must be unique. Only applies to TYPE.ARRAY. */
  uniqueItems?: boolean;
  /** Optional. Maximum value for Type.INTEGER and Type.NUMBER. */
  maximum?: number;
  /** Required. The type of the data. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "STRING"
    | "INTEGER"
    | "NUMBER"
    | "BOOLEAN"
    | "OBJECT"
    | "ARRAY"
    | (string & {});
  /** Optional. Required properties of Type.OBJECT. */
  required?: ReadonlyArray<string>;
  /** Optional. Indicates if the value may be null. */
  nullable?: boolean;
  /** Optional. Allows indirect references between schema nodes. The value should be a valid reference to a child of the root `defs`. For example, the following schema defines a reference to a schema node named "Pet": ``` type: object properties: pet: ref: #/defs/Pet defs: Pet: type: object properties: name: type: string ``` The value of the "pet" property is a reference to the schema node named "Pet". See details in https://json-schema.org/understanding-json-schema/structuring. */
  ref?: string;
  /** Optional. Maximum number of the elements for Type.ARRAY. */
  maxItems?: string;
  /** Optional. Schemas of initial elements of Type.ARRAY. */
  prefixItems?: ReadonlyArray<Ces_Schema>;
  /** Optional. Default value of the data. */
  default?: unknown;
  /** Optional. The description of the data. */
  description?: string;
  /** Optional. The title of the schema. */
  title?: string;
  /** Optional. The value should be validated against any (one or more) of the subschemas in the list. */
  anyOf?: ReadonlyArray<Ces_Schema>;
  /** Optional. A map of definitions for use by `ref`. Only allowed at the root of the schema. */
  defs?: Record<string, Ces_Schema>;
  /** Optional. Possible values of the element of primitive type with enum format. Examples: 1. We can define direction as : {type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]} 2. We can define apartment number as : {type:INTEGER, format:enum, enum:["101", "201", "301"]} */
  enum?: ReadonlyArray<string>;
  /** Optional. Properties of Type.OBJECT. */
  properties?: Record<string, Ces_Schema>;
  /** Optional. Schema of the elements of Type.ARRAY. */
  items?: Ces_Schema;
  /** Optional. Minimum number of the elements for Type.ARRAY. */
  minItems?: string;
  /** Optional. Can either be a boolean or an object, controls the presence of additional properties. */
  additionalProperties?: Ces_Schema;
  /** Optional. Minimum value for Type.INTEGER and Type.NUMBER. */
  minimum?: number;
}

export const Ces_Schema: Schema.Schema<Ces_Schema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      uniqueItems: Schema.optional(Schema.Boolean),
      maximum: Schema.optional(Schema.Number),
      type: Schema.optional(Schema.String),
      required: Schema.optional(Schema.Array(Schema.String)),
      nullable: Schema.optional(Schema.Boolean),
      ref: Schema.optional(Schema.String),
      maxItems: Schema.optional(Schema.String),
      prefixItems: Schema.optional(Schema.Array(Ces_Schema)),
      default: Schema.optional(Schema.Unknown),
      description: Schema.optional(Schema.String),
      title: Schema.optional(Schema.String),
      anyOf: Schema.optional(Schema.Array(Ces_Schema)),
      defs: Schema.optional(Schema.Record(Schema.String, Ces_Schema)),
      enum: Schema.optional(Schema.Array(Schema.String)),
      properties: Schema.optional(Schema.Record(Schema.String, Ces_Schema)),
      items: Schema.optional(Ces_Schema),
      minItems: Schema.optional(Schema.String),
      additionalProperties: Schema.optional(Ces_Schema),
      minimum: Schema.optional(Schema.Number),
    }),
  ).annotate({ identifier: "Ces_Schema" }) as any as Schema.Schema<Ces_Schema>;

export interface TlsConfigCaCert {
  /** Required. The allowed custom CA certificates (in DER format) for HTTPS verification. This overrides the default SSL trust store. If this is empty or unspecified, CES will use Google's default trust store to verify certificates. N.B. Make sure the HTTPS server certificates are signed with "subject alt name". For instance a certificate can be self-signed using the following command: ``` openssl x509 -req -days 200 -in example.com.csr \ -signkey example.com.key \ -out example.com.crt \ -extfile <(printf "\nsubjectAltName='DNS:www.example.com'") ``` */
  cert?: string;
  /** Required. The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates. */
  displayName?: string;
}

export const TlsConfigCaCert: Schema.Schema<TlsConfigCaCert> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cert: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "TlsConfigCaCert" });

export interface TlsConfig {
  /** Required. Specifies a list of allowed custom CA certificates for HTTPS verification. */
  caCerts?: ReadonlyArray<TlsConfigCaCert>;
}

export const TlsConfig: Schema.Schema<TlsConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    caCerts: Schema.optional(Schema.Array(TlsConfigCaCert)),
  }).annotate({ identifier: "TlsConfig" });

export interface ServiceAgentIdTokenAuthConfig {}

export const ServiceAgentIdTokenAuthConfig: Schema.Schema<ServiceAgentIdTokenAuthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ServiceAgentIdTokenAuthConfig",
  });

export interface BearerTokenConfig {
  /** Required. The bearer token. Must be in the format `$context.variables.`. */
  token?: string;
}

export const BearerTokenConfig: Schema.Schema<BearerTokenConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String),
  }).annotate({ identifier: "BearerTokenConfig" });

export interface OAuthConfig {
  /** Optional. The OAuth scopes to grant. */
  scopes?: ReadonlyArray<string>;
  /** Required. The name of the SecretManager secret version resource storing the client secret. Format: `projects/{project}/secrets/{secret}/versions/{version}` Note: You should grant `roles/secretmanager.secretAccessor` role to the CES service agent `service-@gcp-sa-ces.iam.gserviceaccount.com`. */
  clientSecretVersion?: string;
  /** Required. The client ID from the OAuth provider. */
  clientId?: string;
  /** Required. The token endpoint in the OAuth provider to exchange for an access token. */
  tokenEndpoint?: string;
  /** Required. OAuth grant types. */
  oauthGrantType?:
    | "OAUTH_GRANT_TYPE_UNSPECIFIED"
    | "CLIENT_CREDENTIAL"
    | (string & {});
}

export const OAuthConfig: Schema.Schema<OAuthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scopes: Schema.optional(Schema.Array(Schema.String)),
    clientSecretVersion: Schema.optional(Schema.String),
    clientId: Schema.optional(Schema.String),
    tokenEndpoint: Schema.optional(Schema.String),
    oauthGrantType: Schema.optional(Schema.String),
  }).annotate({ identifier: "OAuthConfig" });

export interface ServiceAccountAuthConfig {
  /** Required. The email address of the service account used for authentication. CES uses this service account to exchange an access token and the access token is then sent in the `Authorization` header of the request. The service account must have the `roles/iam.serviceAccountTokenCreator` role granted to the CES service agent `service-@gcp-sa-ces.iam.gserviceaccount.com`. */
  serviceAccount?: string;
  /** Optional. The OAuth scopes to grant. If not specified, the default scope `https://www.googleapis.com/auth/cloud-platform` is used. */
  scopes?: ReadonlyArray<string>;
}

export const ServiceAccountAuthConfig: Schema.Schema<ServiceAccountAuthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAccount: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ServiceAccountAuthConfig" });

export interface ApiAuthentication {
  /** Optional. Config for API key auth. */
  apiKeyConfig?: ApiKeyConfig;
  /** Optional. Config for ID token auth generated from CES service agent. */
  serviceAgentIdTokenAuthConfig?: ServiceAgentIdTokenAuthConfig;
  /** Optional. Config for bearer token auth. */
  bearerTokenConfig?: BearerTokenConfig;
  /** Optional. Config for OAuth. */
  oauthConfig?: OAuthConfig;
  /** Optional. Config for service account authentication. */
  serviceAccountAuthConfig?: ServiceAccountAuthConfig;
}

export const ApiAuthentication: Schema.Schema<ApiAuthentication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiKeyConfig: Schema.optional(ApiKeyConfig),
    serviceAgentIdTokenAuthConfig: Schema.optional(
      ServiceAgentIdTokenAuthConfig,
    ),
    bearerTokenConfig: Schema.optional(BearerTokenConfig),
    oauthConfig: Schema.optional(OAuthConfig),
    serviceAccountAuthConfig: Schema.optional(ServiceAccountAuthConfig),
  }).annotate({ identifier: "ApiAuthentication" });

export interface ServiceDirectoryConfig {
  /** Required. The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: `projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}`. Location of the service directory must be the same as the location of the app. */
  service?: string;
}

export const ServiceDirectoryConfig: Schema.Schema<ServiceDirectoryConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceDirectoryConfig" });

export interface McpTool {
  /** Optional. The schema of the input arguments of the MCP tool. */
  inputSchema?: Ces_Schema;
  /** Output only. The dynamic availability state of the tool on the external server. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | "STALE" | (string & {});
  /** Required. The server address of the MCP server, e.g., "https://example.com/mcp/". If the server is built with the MCP SDK, the url should be suffixed with "/mcp/". Only Streamable HTTP transport based servers are supported. This is the same as the server_address in the McpToolset. See https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#streamable-http for more details. */
  serverAddress?: string;
  /** Optional. The TLS configuration. Includes the custom server certificates that the client should trust. */
  tlsConfig?: TlsConfig;
  /** Optional. Authentication information required to execute the tool against the MCP server. For bearer token authentication, the token applies only to tool execution, not to listing tools. This requires that tools can be listed without authentication. */
  apiAuthentication?: ApiAuthentication;
  /** Optional. The description of the MCP tool. */
  description?: string;
  /** Optional. The custom headers to send in the request to the MCP server. The values must be in the format `$context.variables.` and can be set in the session variables. See https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/tool/open-api#openapi-injection for more details. */
  customHeaders?: Record<string, string>;
  /** Required. The name of the MCP tool. */
  name?: string;
  /** Optional. The schema of the output arguments of the MCP tool. */
  outputSchema?: Ces_Schema;
  /** Optional. Service Directory configuration for VPC-SC, used to resolve service names within a perimeter. */
  serviceDirectoryConfig?: ServiceDirectoryConfig;
  /** Optional. The name override of the MCP tool. This is populated if the name was overridden by a Toolset override. */
  nameOverride?: string;
}

export const McpTool: Schema.Schema<McpTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputSchema: Schema.optional(Ces_Schema),
    state: Schema.optional(Schema.String),
    serverAddress: Schema.optional(Schema.String),
    tlsConfig: Schema.optional(TlsConfig),
    apiAuthentication: Schema.optional(ApiAuthentication),
    description: Schema.optional(Schema.String),
    customHeaders: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    outputSchema: Schema.optional(Ces_Schema),
    serviceDirectoryConfig: Schema.optional(ServiceDirectoryConfig),
    nameOverride: Schema.optional(Schema.String),
  }).annotate({ identifier: "McpTool" });

export interface ToolResponse {
  /** Required. The tool execution result in JSON object format. Use "output" key to specify tool response and "error" key to specify error details (if any). If "output" and "error" keys are not specified, then whole "response" is treated as tool execution result. */
  response?: Record<string, unknown>;
  /** Output only. Display name of the tool. */
  displayName?: string;
  /** Optional. The toolset tool that got executed. */
  toolsetTool?: ToolsetTool;
  /** Optional. The name of the tool to execute. Format: `projects/{project}/locations/{location}/apps/{app}/tools/{tool}` */
  tool?: string;
  /** Optional. The matching ID of the tool call the response is for. */
  id?: string;
}

export const ToolResponse: Schema.Schema<ToolResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    displayName: Schema.optional(Schema.String),
    toolsetTool: Schema.optional(ToolsetTool),
    tool: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "ToolResponse" });

export interface EvaluationResultGoldenExpectationOutcomeToolInvocationResult {
  /** Output only. A free text explanation for the tool invocation result. */
  explanation?: string;
  /** Output only. The tool invocation parameter correctness score. This indicates the percent of parameters from the expected tool call that were also present in the actual tool call. */
  parameterCorrectnessScore?: number;
  /** Output only. The outcome of the tool invocation check. This is determined by comparing the parameter_correctness_score to the threshold. If the score is equal to or above the threshold, the outcome will be PASS. Otherwise, the outcome will be FAIL. */
  outcome?: "OUTCOME_UNSPECIFIED" | "PASS" | "FAIL" | "SKIPPED" | (string & {});
}

export const EvaluationResultGoldenExpectationOutcomeToolInvocationResult: Schema.Schema<EvaluationResultGoldenExpectationOutcomeToolInvocationResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    explanation: Schema.optional(Schema.String),
    parameterCorrectnessScore: Schema.optional(Schema.Number),
    outcome: Schema.optional(Schema.String),
  }).annotate({
    identifier: "EvaluationResultGoldenExpectationOutcomeToolInvocationResult",
  });

export interface Image {
  /** Required. The IANA standard MIME type of the source data. Supported image types includes: * image/png * image/jpeg * image/webp */
  mimeType?: string;
  /** Required. Raw bytes of the image. */
  data?: string;
}

export const Image: Schema.Schema<Image> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mimeType: Schema.optional(Schema.String),
    data: Schema.optional(Schema.String),
  }).annotate({ identifier: "Image" });

export interface Blob {
  /** Required. Raw bytes of the blob. */
  data?: string;
  /** Required. The IANA standard MIME type of the source data. */
  mimeType?: string;
}

export const Blob: Schema.Schema<Blob> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.optional(Schema.String),
    mimeType: Schema.optional(Schema.String),
  }).annotate({ identifier: "Blob" });

export interface AgentTransfer {
  /** Required. The agent to which the conversation is being transferred. The agent will handle the conversation from this point forward. Format: `projects/{project}/locations/{location}/apps/{app}/agents/{agent}` */
  targetAgent?: string;
  /** Output only. Display name of the agent. */
  displayName?: string;
}

export const AgentTransfer: Schema.Schema<AgentTransfer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetAgent: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentTransfer" });

export interface ToolCall {
  /** Optional. The name of the tool to execute. Format: `projects/{project}/locations/{location}/apps/{app}/tools/{tool}` */
  tool?: string;
  /** Optional. The unique identifier of the tool call. If populated, the client should return the execution result with the matching ID in ToolResponse. */
  id?: string;
  /** Optional. The input parameters and values for the tool in JSON object format. */
  args?: Record<string, unknown>;
  /** Optional. The toolset tool to execute. */
  toolsetTool?: ToolsetTool;
  /** Output only. Display name of the tool. */
  displayName?: string;
}

export const ToolCall: Schema.Schema<ToolCall> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tool: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    args: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    toolsetTool: Schema.optional(ToolsetTool),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "ToolCall" });

export interface Chunk {
  /** Optional. Text data. */
  text?: string;
  /** Optional. Custom payload data. */
  payload?: Record<string, unknown>;
  /** Optional. Image data. */
  image?: Image;
  /** A struct represents default variables at the start of the conversation, keyed by variable names. */
  defaultVariables?: Record<string, unknown>;
  /** A struct represents variables that were updated in the conversation, keyed by variable names. */
  updatedVariables?: Record<string, unknown>;
  /** Optional. Transcript associated with the audio. */
  transcript?: string;
  /** Optional. Blob data. */
  blob?: Blob;
  /** Optional. Tool execution response. */
  toolResponse?: ToolResponse;
  /** Optional. Agent transfer event. */
  agentTransfer?: AgentTransfer;
  /** Optional. Tool execution request. */
  toolCall?: ToolCall;
}

export const Chunk: Schema.Schema<Chunk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    image: Schema.optional(Image),
    defaultVariables: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    updatedVariables: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    transcript: Schema.optional(Schema.String),
    blob: Schema.optional(Blob),
    toolResponse: Schema.optional(ToolResponse),
    agentTransfer: Schema.optional(AgentTransfer),
    toolCall: Schema.optional(ToolCall),
  }).annotate({ identifier: "Chunk" });

export interface Message {
  /** Optional. The role within the conversation, e.g., user, agent. */
  role?: string;
  /** Optional. Content of the message as a series of chunks. */
  chunks?: ReadonlyArray<Chunk>;
  /** Optional. Timestamp when the message was sent or received. Should not be used if the message is part of an example. */
  eventTime?: string;
}

export const Message: Schema.Schema<Message> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
    chunks: Schema.optional(Schema.Array(Chunk)),
    eventTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Message" });

export interface EvaluationMetricsConfigHallucinationMetricsConfig {
  /** Optional. Whether to calculate hallucination metrics for the evaluation. */
  enableHallucinationMetrics?: boolean;
}

export const EvaluationMetricsConfigHallucinationMetricsConfig: Schema.Schema<EvaluationMetricsConfigHallucinationMetricsConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableHallucinationMetrics: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "EvaluationMetricsConfigHallucinationMetricsConfig",
  });

export interface EvaluationMetricsConfigSemanticSimilarityMetricsConfig {
  /** Optional. Whether to calculate semantic similarity metrics for the evaluation. */
  enableSemanticSimilarityMetrics?: boolean;
}

export const EvaluationMetricsConfigSemanticSimilarityMetricsConfig: Schema.Schema<EvaluationMetricsConfigSemanticSimilarityMetricsConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableSemanticSimilarityMetrics: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "EvaluationMetricsConfigSemanticSimilarityMetricsConfig",
  });

export interface EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds {
  /** Optional. The success threshold for individual tool invocation parameter correctness. Must be a float between 0 and 1. Default is 1.0. */
  toolInvocationParameterCorrectnessThreshold?: number;
}

export const EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds: Schema.Schema<EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolInvocationParameterCorrectnessThreshold: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds",
  });

export interface EvaluationGoldenExpectation {
  /** Optional. Check that the agent updated the session variables to the expected values. Used to also capture agent variable updates for golden evals. */
  updatedVariables?: Record<string, unknown>;
  /** Optional. If set to true, this specific expectation will not be evaluated. */
  skipEvaluation?: boolean;
  /** Optional. Check that the agent responded with the correct response. The role "agent" is implied. */
  agentResponse?: Message;
  /** Optional. A note for this requirement, useful in reporting when specific checks fail. E.g., "Check_Payment_Tool_Called". */
  note?: string;
  /** Optional. The tool response to mock, with the parameters of interest specified. Any parameters not specified will be hallucinated by the LLM. */
  mockToolResponse?: ToolResponse;
  /** Optional. Overrides for agent_response hallucination metrics. */
  agentResponseHallucinationMetricsConfigOverride?: EvaluationMetricsConfigHallucinationMetricsConfig;
  /** Optional. Check that a specific tool was called with the parameters. */
  toolCall?: ToolCall;
  /** Optional. Overrides for agent_response semantic similarity metrics. */
  agentResponseSemanticSimilarityMetricsConfigOverride?: EvaluationMetricsConfigSemanticSimilarityMetricsConfig;
  /** Optional. Check that the agent transferred the conversation to a different agent. */
  agentTransfer?: AgentTransfer;
  /** Optional. Overrides metrics at the step level. */
  expectationLevelMetricsThresholdsOverride?: EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds;
  /** Optional. Check that a specific tool had the expected response. */
  toolResponse?: ToolResponse;
}

export const EvaluationGoldenExpectation: Schema.Schema<EvaluationGoldenExpectation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updatedVariables: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    skipEvaluation: Schema.optional(Schema.Boolean),
    agentResponse: Schema.optional(Message),
    note: Schema.optional(Schema.String),
    mockToolResponse: Schema.optional(ToolResponse),
    agentResponseHallucinationMetricsConfigOverride: Schema.optional(
      EvaluationMetricsConfigHallucinationMetricsConfig,
    ),
    toolCall: Schema.optional(ToolCall),
    agentResponseSemanticSimilarityMetricsConfigOverride: Schema.optional(
      EvaluationMetricsConfigSemanticSimilarityMetricsConfig,
    ),
    agentTransfer: Schema.optional(AgentTransfer),
    expectationLevelMetricsThresholdsOverride: Schema.optional(
      EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds,
    ),
    toolResponse: Schema.optional(ToolResponse),
  }).annotate({ identifier: "EvaluationGoldenExpectation" });

export interface EvaluationResultSemanticSimilarityResult {
  /** Output only. The explanation for the semantic similarity score. */
  explanation?: string;
  /** Output only. The outcome of the semantic similarity check. This is determined by comparing the score to the semantic_similarity_success_threshold. If the score is equal to or above the threshold, the outcome will be PASS. Otherwise, the outcome will be FAIL. */
  outcome?: "OUTCOME_UNSPECIFIED" | "PASS" | "FAIL" | "SKIPPED" | (string & {});
  /** Output only. The semantic similarity score. Can be 0, 1, 2, 3, or 4. */
  score?: number;
  /** Output only. The label associated with each score. Score 4: Fully Consistent Score 3: Mostly Consistent Score 2: Partially Consistent (Minor Omissions) Score 1: Largely Inconsistent (Major Omissions) Score 0: Completely Inconsistent / Contradictory */
  label?: string;
}

export const EvaluationResultSemanticSimilarityResult: Schema.Schema<EvaluationResultSemanticSimilarityResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    explanation: Schema.optional(Schema.String),
    outcome: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    label: Schema.optional(Schema.String),
  }).annotate({ identifier: "EvaluationResultSemanticSimilarityResult" });

export interface EvaluationResultGoldenExpectationOutcome {
  /** Output only. The result of the tool response expectation. */
  observedToolResponse?: ToolResponse;
  /** Output only. The outcome of the expectation. */
  outcome?: "OUTCOME_UNSPECIFIED" | "PASS" | "FAIL" | "SKIPPED" | (string & {});
  /** Output only. The result of the tool invocation check. */
  toolInvocationResult?: EvaluationResultGoldenExpectationOutcomeToolInvocationResult;
  /** Output only. The result of the agent response expectation. */
  observedAgentResponse?: Message;
  /** Output only. An observed custom payload. There are no expectations for custom payloads. This is only used for metrics calculation. The outcome is always SKIPPED. */
  observedPayload?: Record<string, unknown>;
  /** Output only. The result of the tool call expectation. */
  observedToolCall?: ToolCall;
  /** Output only. The expectation that was evaluated. */
  expectation?: EvaluationGoldenExpectation;
  /** Output only. The result of the agent transfer expectation. */
  observedAgentTransfer?: AgentTransfer;
  /** Output only. The result of the semantic similarity check. */
  semanticSimilarityResult?: EvaluationResultSemanticSimilarityResult;
}

export const EvaluationResultGoldenExpectationOutcome: Schema.Schema<EvaluationResultGoldenExpectationOutcome> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    observedToolResponse: Schema.optional(ToolResponse),
    outcome: Schema.optional(Schema.String),
    toolInvocationResult: Schema.optional(
      EvaluationResultGoldenExpectationOutcomeToolInvocationResult,
    ),
    observedAgentResponse: Schema.optional(Message),
    observedPayload: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    observedToolCall: Schema.optional(ToolCall),
    expectation: Schema.optional(EvaluationGoldenExpectation),
    observedAgentTransfer: Schema.optional(AgentTransfer),
    semanticSimilarityResult: Schema.optional(
      EvaluationResultSemanticSimilarityResult,
    ),
  }).annotate({ identifier: "EvaluationResultGoldenExpectationOutcome" });

export interface LfA2aV1SendMessageConfiguration {
  /** The maximum number of most recent messages from the task's history to retrieve in the response. An unset value means the client does not impose any limit. A value of zero is a request to not include any messages. The server MUST NOT return more messages than the provided value, but MAY apply a lower limit. */
  historyLength?: number;
  /** A list of media types the client is prepared to accept for response parts. Agents SHOULD use this to tailor their output. */
  acceptedOutputModes?: ReadonlyArray<string>;
  /** Configuration for the agent to send push notifications for task updates. Task id should be empty when sending this configuration in a `SendMessage` request. */
  taskPushNotificationConfig?: LfA2aV1TaskPushNotificationConfig;
  /** If `true`, the operation returns immediately after creating the task, even if processing is still in progress. If `false` (default), the operation MUST wait until the task reaches a terminal (`COMPLETED`, `FAILED`, `CANCELED`, `REJECTED`) or interrupted (`INPUT_REQUIRED`, `AUTH_REQUIRED`) state before returning. */
  returnImmediately?: boolean;
}

export const LfA2aV1SendMessageConfiguration: Schema.Schema<LfA2aV1SendMessageConfiguration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    historyLength: Schema.optional(Schema.Number),
    acceptedOutputModes: Schema.optional(Schema.Array(Schema.String)),
    taskPushNotificationConfig: Schema.optional(
      LfA2aV1TaskPushNotificationConfig,
    ),
    returnImmediately: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "LfA2aV1SendMessageConfiguration" });

export interface ExecuteToolResponse {
  /** The toolset tool that got executed. */
  toolsetTool?: ToolsetTool;
  /** The tool execution result in JSON object format. Use "output" key to specify tool response and "error" key to specify error details (if any). If "output" and "error" keys are not specified, then whole "response" is treated as tool execution result. */
  response?: Record<string, unknown>;
  /** The name of the tool that got executed. Format: `projects/{project}/locations/{location}/apps/{app}/tools/{tool}` */
  tool?: string;
  /** The variable values at the end of the tool execution. */
  variables?: Record<string, unknown>;
}

export const ExecuteToolResponse: Schema.Schema<ExecuteToolResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolsetTool: Schema.optional(ToolsetTool),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    tool: Schema.optional(Schema.String),
    variables: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "ExecuteToolResponse" });

export interface ToolCalls {
  /** Optional. The list of tool calls to execute. */
  toolCalls?: ReadonlyArray<ToolCall>;
}

export const ToolCalls: Schema.Schema<ToolCalls> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolCalls: Schema.optional(Schema.Array(ToolCall)),
  }).annotate({ identifier: "ToolCalls" });

export interface DataStoreConnectorConfig {
  /** The name of the data source. Example: `salesforce`, `jira`, `confluence`, `bigquery`. */
  dataSource?: string;
  /** Display name of the collection the data store belongs to. */
  collectionDisplayName?: string;
  /** Resource name of the collection the data store belongs to. */
  collection?: string;
}

export const DataStoreConnectorConfig: Schema.Schema<DataStoreConnectorConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataSource: Schema.optional(Schema.String),
    collectionDisplayName: Schema.optional(Schema.String),
    collection: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataStoreConnectorConfig" });

export interface DataStore {
  /** Output only. The document processing mode for the data store connection. Only set for PUBLIC_WEB and UNSTRUCTURED data stores. */
  documentProcessingMode?:
    | "DOCUMENT_PROCESSING_MODE_UNSPECIFIED"
    | "DOCUMENTS"
    | "CHUNKS"
    | (string & {});
  /** Required. Full resource name of the DataStore. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore}` */
  name?: string;
  /** Output only. The display name of the data store. */
  displayName?: string;
  /** Output only. The type of the data store. This field is readonly and populated by the server. */
  type?:
    | "DATA_STORE_TYPE_UNSPECIFIED"
    | "PUBLIC_WEB"
    | "UNSTRUCTURED"
    | "FAQ"
    | "CONNECTOR"
    | (string & {});
  /** Output only. The connector config for the data store connection. */
  connectorConfig?: DataStoreConnectorConfig;
  /** Output only. Timestamp when the data store was created. */
  createTime?: string;
}

export const DataStore: Schema.Schema<DataStore> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    documentProcessingMode: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    connectorConfig: Schema.optional(DataStoreConnectorConfig),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataStore" });

export interface DataStoreToolDataStoreSource {
  /** Optional. The data store. */
  dataStore?: DataStore;
  /** Optional. Filter specification for the DataStore. See: https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata */
  filter?: string;
}

export const DataStoreToolDataStoreSource: Schema.Schema<DataStoreToolDataStoreSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataStore: Schema.optional(DataStore),
    filter: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataStoreToolDataStoreSource" });

export interface DataStoreToolEngineSource {
  /** Optional. Use to target specific DataStores within the Engine. If empty, the search applies to all DataStores associated with the Engine. */
  dataStoreSources?: ReadonlyArray<DataStoreToolDataStoreSource>;
  /** Optional. A filter applied to the search across the Engine. Not relevant and not used if 'data_store_sources' is provided. See: https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata */
  filter?: string;
  /** Required. Full resource name of the Engine. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}` */
  engine?: string;
}

export const DataStoreToolEngineSource: Schema.Schema<DataStoreToolEngineSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataStoreSources: Schema.optional(
      Schema.Array(DataStoreToolDataStoreSource),
    ),
    filter: Schema.optional(Schema.String),
    engine: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataStoreToolEngineSource" });

export interface DataStoreToolBoostSpecConditionBoostSpecBoostControlSpecControlPoint {
  /** Optional. Can be one of: 1. The numerical field value. 2. The duration spec for freshness: The value must be formatted as an XSD `dayTimeDuration` value (a restricted subset of an ISO 8601 duration value). The pattern for this is: `nDnM]`. */
  attributeValue?: string;
  /** Optional. The value between -1 to 1 by which to boost the score if the attribute_value evaluates to the value specified above. */
  boostAmount?: number;
}

export const DataStoreToolBoostSpecConditionBoostSpecBoostControlSpecControlPoint: Schema.Schema<DataStoreToolBoostSpecConditionBoostSpecBoostControlSpecControlPoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attributeValue: Schema.optional(Schema.String),
    boostAmount: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "DataStoreToolBoostSpecConditionBoostSpecBoostControlSpecControlPoint",
  });

export interface DataStoreToolBoostSpecConditionBoostSpecBoostControlSpec {
  /** Optional. The interpolation type to be applied to connect the control points listed below. */
  interpolationType?:
    | "INTERPOLATION_TYPE_UNSPECIFIED"
    | "LINEAR"
    | (string & {});
  /** Optional. The name of the field whose value will be used to determine the boost amount. */
  fieldName?: string;
  /** Optional. The control points used to define the curve. The monotonic function (defined through the interpolation_type above) passes through the control points listed here. */
  controlPoints?: ReadonlyArray<DataStoreToolBoostSpecConditionBoostSpecBoostControlSpecControlPoint>;
  /** Optional. The attribute type to be used to determine the boost amount. The attribute value can be derived from the field value of the specified field_name. In the case of numerical it is straightforward i.e. attribute_value = numerical_field_value. In the case of freshness however, attribute_value = (time.now() - datetime_field_value). */
  attributeType?:
    | "ATTRIBUTE_TYPE_UNSPECIFIED"
    | "NUMERICAL"
    | "FRESHNESS"
    | (string & {});
}

export const DataStoreToolBoostSpecConditionBoostSpecBoostControlSpec: Schema.Schema<DataStoreToolBoostSpecConditionBoostSpecBoostControlSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    interpolationType: Schema.optional(Schema.String),
    fieldName: Schema.optional(Schema.String),
    controlPoints: Schema.optional(
      Schema.Array(
        DataStoreToolBoostSpecConditionBoostSpecBoostControlSpecControlPoint,
      ),
    ),
    attributeType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "DataStoreToolBoostSpecConditionBoostSpecBoostControlSpec",
  });

export interface DataStoreToolBoostSpecConditionBoostSpec {
  /** Optional. Complex specification for custom ranking based on customer defined attribute value. */
  boostControlSpec?: DataStoreToolBoostSpecConditionBoostSpecBoostControlSpec;
  /** Required. An expression which specifies a boost condition. The syntax is the same as filter expression syntax. Currently, the only supported condition is a list of BCP-47 lang codes. Example: To boost suggestions in languages en or fr: (lang_code: ANY("en", "fr")) */
  condition?: string;
  /** Optional. Strength of the boost, which should be in [-1, 1]. Negative boost means demotion. Default is 0.0. Setting to 1.0 gives the suggestions a big promotion. However, it does not necessarily mean that the top result will be a boosted suggestion. Setting to -1.0 gives the suggestions a big demotion. However, other suggestions that are relevant might still be shown. Setting to 0.0 means no boost applied. The boosting condition is ignored. */
  boost?: number;
}

export const DataStoreToolBoostSpecConditionBoostSpec: Schema.Schema<DataStoreToolBoostSpecConditionBoostSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boostControlSpec: Schema.optional(
      DataStoreToolBoostSpecConditionBoostSpecBoostControlSpec,
    ),
    condition: Schema.optional(Schema.String),
    boost: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DataStoreToolBoostSpecConditionBoostSpec" });

export interface DataStoreToolBoostSpec {
  /** Required. A list of boosting specifications. */
  conditionBoostSpecs?: ReadonlyArray<DataStoreToolBoostSpecConditionBoostSpec>;
}

export const DataStoreToolBoostSpec: Schema.Schema<DataStoreToolBoostSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditionBoostSpecs: Schema.optional(
      Schema.Array(DataStoreToolBoostSpecConditionBoostSpec),
    ),
  }).annotate({ identifier: "DataStoreToolBoostSpec" });

export interface DataStoreToolBoostSpecs {
  /** Required. The Data Store where the boosting configuration is applied. Full resource name of DataStore, such as projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore}. */
  dataStores?: ReadonlyArray<string>;
  /** Required. A list of boosting specifications. */
  spec?: ReadonlyArray<DataStoreToolBoostSpec>;
}

export const DataStoreToolBoostSpecs: Schema.Schema<DataStoreToolBoostSpecs> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataStores: Schema.optional(Schema.Array(Schema.String)),
    spec: Schema.optional(Schema.Array(DataStoreToolBoostSpec)),
  }).annotate({ identifier: "DataStoreToolBoostSpecs" });

export interface ModelSettings {
  /** Optional. If set, this temperature will be used for the LLM model. Temperature controls the randomness of the model's responses. Lower temperatures produce responses that are more predictable. Higher temperatures produce responses that are more creative. */
  temperature?: number;
  /** Optional. The LLM model that the agent should use. If not set, the agent will inherit the model from its parent agent. */
  model?: string;
}

export const ModelSettings: Schema.Schema<ModelSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    temperature: Schema.optional(Schema.Number),
    model: Schema.optional(Schema.String),
  }).annotate({ identifier: "ModelSettings" });

export interface DataStoreToolSummarizationConfig {
  /** Optional. The prompt definition. If not set, default prompt will be used. */
  prompt?: string;
  /** Optional. Configurations for the LLM model. */
  modelSettings?: ModelSettings;
  /** Optional. Whether summarization is disabled. */
  disabled?: boolean;
}

export const DataStoreToolSummarizationConfig: Schema.Schema<DataStoreToolSummarizationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    prompt: Schema.optional(Schema.String),
    modelSettings: Schema.optional(ModelSettings),
    disabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DataStoreToolSummarizationConfig" });

export interface DataStoreToolRewriterConfig {
  /** Optional. The prompt definition. If not set, default prompt will be used. */
  prompt?: string;
  /** Required. Configurations for the LLM model. */
  modelSettings?: ModelSettings;
  /** Optional. Whether the rewriter is disabled. */
  disabled?: boolean;
}

export const DataStoreToolRewriterConfig: Schema.Schema<DataStoreToolRewriterConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    prompt: Schema.optional(Schema.String),
    modelSettings: Schema.optional(ModelSettings),
    disabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DataStoreToolRewriterConfig" });

export interface DataStoreToolGroundingConfig {
  /** Optional. The groundedness threshold of the answer based on the retrieved sources. The value has a configurable range of [1, 5]. The level is used to threshold the groundedness of the answer, meaning that all responses with a groundedness score below the threshold will fall back to returning relevant snippets only. For example, a level of 3 means that the groundedness score must be 3 or higher for the response to be returned. */
  groundingLevel?: number;
  /** Optional. Whether grounding is disabled. */
  disabled?: boolean;
}

export const DataStoreToolGroundingConfig: Schema.Schema<DataStoreToolGroundingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groundingLevel: Schema.optional(Schema.Number),
    disabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DataStoreToolGroundingConfig" });

export interface DataStoreToolModalityConfig {
  /** Optional. The summarization config. */
  summarizationConfig?: DataStoreToolSummarizationConfig;
  /** Optional. The rewriter config. */
  rewriterConfig?: DataStoreToolRewriterConfig;
  /** Optional. The grounding configuration. */
  groundingConfig?: DataStoreToolGroundingConfig;
  /** Required. The modality type. */
  modalityType?: "MODALITY_TYPE_UNSPECIFIED" | "TEXT" | "AUDIO" | (string & {});
}

export const DataStoreToolModalityConfig: Schema.Schema<DataStoreToolModalityConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    summarizationConfig: Schema.optional(DataStoreToolSummarizationConfig),
    rewriterConfig: Schema.optional(DataStoreToolRewriterConfig),
    groundingConfig: Schema.optional(DataStoreToolGroundingConfig),
    modalityType: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataStoreToolModalityConfig" });

export interface DataStoreTool {
  /** Required. The data store tool name. */
  name?: string;
  /** Optional. Search within an Engine (potentially across multiple DataStores). */
  engineSource?: DataStoreToolEngineSource;
  /** Optional. The tool description. */
  description?: string;
  /** Optional. The filter parameter behavior. */
  filterParameterBehavior?:
    | "FILTER_PARAMETER_BEHAVIOR_UNSPECIFIED"
    | "ALWAYS_INCLUDE"
    | "NEVER_INCLUDE"
    | (string & {});
  /** Optional. Boost specification to boost certain documents. */
  boostSpecs?: ReadonlyArray<DataStoreToolBoostSpecs>;
  /** Optional. Search within a single specific DataStore. */
  dataStoreSource?: DataStoreToolDataStoreSource;
  /** Optional. The modality configs for the data store. */
  modalityConfigs?: ReadonlyArray<DataStoreToolModalityConfig>;
}

export const DataStoreTool: Schema.Schema<DataStoreTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    engineSource: Schema.optional(DataStoreToolEngineSource),
    description: Schema.optional(Schema.String),
    filterParameterBehavior: Schema.optional(Schema.String),
    boostSpecs: Schema.optional(Schema.Array(DataStoreToolBoostSpecs)),
    dataStoreSource: Schema.optional(DataStoreToolDataStoreSource),
    modalityConfigs: Schema.optional(Schema.Array(DataStoreToolModalityConfig)),
  }).annotate({ identifier: "DataStoreTool" });

export interface WidgetToolTextResponseConfig {
  /** Optional. The strategy for providing the text response. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "NONE"
    | "LLM_GENERATED"
    | "STATIC"
    | (string & {});
  /** Optional. Instruction for the LLM on how to generate the text response. Used as the description for the text response parameter if type is LLM_GENERATED. */
  textResponseInstruction?: string;
  /** Optional. The static text response to return when type is STATIC. */
  staticText?: string;
}

export const WidgetToolTextResponseConfig: Schema.Schema<WidgetToolTextResponseConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    textResponseInstruction: Schema.optional(Schema.String),
    staticText: Schema.optional(Schema.String),
  }).annotate({ identifier: "WidgetToolTextResponseConfig" });

export interface PythonFunction {
  /** Optional. The Python code to execute for the tool. */
  pythonCode?: string;
  /** Output only. The description of the Python function, parsed from the python code's docstring. */
  description?: string;
  /** Optional. The name of the Python function to execute. Must match a Python function name defined in the python code. Case sensitive. If the name is not provided, the first function defined in the python code will be used. */
  name?: string;
  /** Optional. Service Directory configuration for the tool. */
  serviceDirectoryConfig?: ServiceDirectoryConfig;
}

export const PythonFunction: Schema.Schema<PythonFunction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pythonCode: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    serviceDirectoryConfig: Schema.optional(ServiceDirectoryConfig),
  }).annotate({ identifier: "PythonFunction" });

export interface WidgetToolDataMapping {
  /** Optional. Configuration for a Python function used to transform the source tool's output into the widget's input format. */
  pythonFunction?: PythonFunction;
  /** Deprecated: Use `python_function` instead. */
  pythonScript?: string;
  /** Optional. The mode of the data mapping. */
  mode?: "MODE_UNSPECIFIED" | "FIELD_MAPPING" | "PYTHON_SCRIPT" | (string & {});
  /** Optional. The resource name of the tool that provides the data for the widget (e.g., a search tool or a custom function). Format: `projects/{project}/locations/{location}/agents/{agent}/tools/{tool}` */
  sourceToolName?: string;
  /** Optional. A map of widget input parameter fields to the corresponding output fields of the source tool. */
  fieldMappings?: Record<string, string>;
}

export const WidgetToolDataMapping: Schema.Schema<WidgetToolDataMapping> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pythonFunction: Schema.optional(PythonFunction),
    pythonScript: Schema.optional(Schema.String),
    mode: Schema.optional(Schema.String),
    sourceToolName: Schema.optional(Schema.String),
    fieldMappings: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "WidgetToolDataMapping" });

export interface WidgetTool {
  /** Optional. The description of the widget tool. */
  description?: string;
  /** Required. The display name of the widget tool. */
  name?: string;
  /** Optional. Configuration for always-included text responses. */
  textResponseConfig?: WidgetToolTextResponseConfig;
  /** Optional. The type of the widget tool. If not specified, the default type will be CUSTOMIZED. */
  widgetType?:
    | "WIDGET_TYPE_UNSPECIFIED"
    | "CUSTOM"
    | "PRODUCT_CAROUSEL"
    | "PRODUCT_DETAILS"
    | "QUICK_ACTIONS"
    | "PRODUCT_COMPARISON"
    | "ADVANCED_PRODUCT_DETAILS"
    | "SHORT_FORM"
    | "OVERALL_SATISFACTION"
    | "ORDER_SUMMARY"
    | "APPOINTMENT_DETAILS"
    | "APPOINTMENT_SCHEDULER"
    | "CONTACT_FORM"
    | (string & {});
  /** Optional. The mapping that defines how data from a source tool is mapped to the widget's input parameters. */
  dataMapping?: WidgetToolDataMapping;
  /** Optional. The input parameters of the widget tool. */
  parameters?: Ces_Schema;
  /** Optional. Configuration for rendering the widget. */
  uiConfig?: Record<string, unknown>;
}

export const WidgetTool: Schema.Schema<WidgetTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    textResponseConfig: Schema.optional(WidgetToolTextResponseConfig),
    widgetType: Schema.optional(Schema.String),
    dataMapping: Schema.optional(WidgetToolDataMapping),
    parameters: Schema.optional(Ces_Schema),
    uiConfig: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "WidgetTool" });

export interface EndUserAuthConfigOauth2AuthCodeConfig {
  /** Required. Oauth token parameter name to pass through. Must be in the format `$context.variables.`. */
  oauthToken?: string;
}

export const EndUserAuthConfigOauth2AuthCodeConfig: Schema.Schema<EndUserAuthConfigOauth2AuthCodeConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oauthToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "EndUserAuthConfigOauth2AuthCodeConfig" });

export interface EndUserAuthConfig {
  /** Oauth 2.0 Authorization Code authentication. */
  oauth2AuthCodeConfig?: EndUserAuthConfigOauth2AuthCodeConfig;
  /** JWT Profile Oauth 2.0 Authorization Grant authentication. */
  oauth2JwtBearerConfig?: EndUserAuthConfigOauth2JwtBearerConfig;
}

export const EndUserAuthConfig: Schema.Schema<EndUserAuthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oauth2AuthCodeConfig: Schema.optional(
      EndUserAuthConfigOauth2AuthCodeConfig,
    ),
    oauth2JwtBearerConfig: Schema.optional(
      EndUserAuthConfigOauth2JwtBearerConfig,
    ),
  }).annotate({ identifier: "EndUserAuthConfig" });

export interface ActionEntityOperation {
  /** Required. ID of the entity. */
  entityId?: string;
  /** Required. Operation to perform on the entity. */
  operation?:
    | "OPERATION_TYPE_UNSPECIFIED"
    | "LIST"
    | "GET"
    | "CREATE"
    | "UPDATE"
    | "DELETE"
    | (string & {});
}

export const ActionEntityOperation: Schema.Schema<ActionEntityOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityId: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActionEntityOperation" });

export interface Action {
  /** Entity operation configuration for the tool to use. */
  entityOperation?: ActionEntityOperation;
  /** Optional. Entity fields to use as inputs for the operation. If no fields are specified, all fields of the Entity will be used. */
  inputFields?: ReadonlyArray<string>;
  /** Optional. Entity fields to return from the operation. If no fields are specified, all fields of the Entity will be returned. */
  outputFields?: ReadonlyArray<string>;
  /** ID of a Connection action for the tool to use. */
  connectionActionId?: string;
}

export const Action: Schema.Schema<Action> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityOperation: Schema.optional(ActionEntityOperation),
    inputFields: Schema.optional(Schema.Array(Schema.String)),
    outputFields: Schema.optional(Schema.Array(Schema.String)),
    connectionActionId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Action" });

export interface ConnectorTool {
  /** Optional. The name of the tool that can be used by the Agent to decide whether to call this ConnectorTool. */
  name?: string;
  /** Optional. The description of the tool that can be used by the Agent to decide whether to call this ConnectorTool. */
  description?: string;
  /** Optional. Configures how authentication is handled in Integration Connectors. By default, an admin authentication is passed in the Integration Connectors API requests. You can override it with a different end-user authentication config. **Note**: The Connection must have authentication override enabled in order to specify an EUC configuration here - otherwise, the ConnectorTool creation will fail. See https://cloud.google.com/application-integration/docs/configure-connectors-task#configure-authentication-override for details. */
  authConfig?: EndUserAuthConfig;
  /** Required. The full resource name of the referenced Integration Connectors Connection. Format: `projects/{project}/locations/{location}/connections/{connection}` */
  connection?: string;
  /** Required. Action for the tool to use. */
  action?: Action;
}

export const ConnectorTool: Schema.Schema<ConnectorTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    authConfig: Schema.optional(EndUserAuthConfig),
    connection: Schema.optional(Schema.String),
    action: Schema.optional(Action),
  }).annotate({ identifier: "ConnectorTool" });

export interface FileSearchTool {
  /** Required. The tool name. */
  name?: string;
  /** Optional. The tool description. */
  description?: string;
  /** Optional. The corpus where files are stored. Format: projects/{project}/locations/{location}/ragCorpora/{rag_corpus} */
  fileCorpus?: string;
  /** Optional. The type of the corpus. Default is FULLY_MANAGED. */
  corpusType?:
    | "CORPUS_TYPE_UNSPECIFIED"
    | "USER_OWNED"
    | "FULLY_MANAGED"
    | (string & {});
}

export const FileSearchTool: Schema.Schema<FileSearchTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    fileCorpus: Schema.optional(Schema.String),
    corpusType: Schema.optional(Schema.String),
  }).annotate({ identifier: "FileSearchTool" });

export interface AgentTool {
  /** Optional. Description of the tool's purpose. */
  description?: string;
  /** Optional. Deprecated: Use `agent` instead. The resource name of the root agent that is the entry point of the tool. Format: `projects/{project}/locations/{location}/agents/{agent}` */
  rootAgent?: string;
  /** Optional. The resource name of the agent that is the entry point of the tool. Format: `projects/{project}/locations/{location}/agents/{agent}` */
  agent?: string;
  /** Required. The name of the agent tool. */
  name?: string;
}

export const AgentTool: Schema.Schema<AgentTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    rootAgent: Schema.optional(Schema.String),
    agent: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentTool" });

export interface ClientFunction {
  /** Required. The function name. */
  name?: string;
  /** Optional. The schema of the function response. */
  response?: Ces_Schema;
  /** Optional. The schema of the function parameters. */
  parameters?: Ces_Schema;
  /** Optional. The function description. */
  description?: string;
}

export const ClientFunction: Schema.Schema<ClientFunction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    response: Schema.optional(Ces_Schema),
    parameters: Schema.optional(Ces_Schema),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClientFunction" });

export interface CodeBlock {
  /** Required. Python code which will be invoked in tool fake mode. Expected Python function signature - To catch all tool calls: def fake_tool_call(tool: Tool, input: dict[str, Any], callback_context: CallbackContext) -> Optional[dict[str, Any]]: To catch a specific tool call: def fake_{tool_id}(tool: Tool, input: dict[str, Any], callback_context: CallbackContext) -> Optional[dict[str, Any]]: If the function returns None, the real tool will be invoked instead. */
  pythonCode?: string;
}

export const CodeBlock: Schema.Schema<CodeBlock> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pythonCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "CodeBlock" });

export interface ToolFakeConfig {
  /** Optional. Code block which will be executed instead of a real tool call. */
  codeBlock?: CodeBlock;
  /** Optional. Whether the tool is using fake mode. */
  enableFakeMode?: boolean;
}

export const ToolFakeConfig: Schema.Schema<ToolFakeConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    codeBlock: Schema.optional(CodeBlock),
    enableFakeMode: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ToolFakeConfig" });

export interface SystemTool {
  /** Required. The name of the system tool. */
  name?: string;
  /** Output only. The description of the system tool. */
  description?: string;
}

export const SystemTool: Schema.Schema<SystemTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "SystemTool" });

export interface AgentSkill {
  /** Required. A unique identifier for the agent's skill. */
  id?: string;
  /** Example prompts or scenarios that this skill can handle. */
  examples?: ReadonlyArray<string>;
  /** Required. A human-readable name for the skill. */
  name?: string;
  /** Required. A set of keywords describing the skill's capabilities. */
  tags?: ReadonlyArray<string>;
  /** The set of supported input media types for this skill, overriding the agent's defaults. */
  inputModes?: ReadonlyArray<string>;
  /** Required. A detailed description of the skill. */
  description?: string;
  /** The set of supported output media types for this skill, overriding the agent's defaults. */
  outputModes?: ReadonlyArray<string>;
}

export const AgentSkill: Schema.Schema<AgentSkill> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    examples: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.String)),
    inputModes: Schema.optional(Schema.Array(Schema.String)),
    description: Schema.optional(Schema.String),
    outputModes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AgentSkill" });

export interface AgentCard {
  /** Required. Skills represent a unit of ability an agent can perform. This may somewhat abstract but represents a more focused set of actions that the agent is highly likely to succeed at. */
  skills?: ReadonlyArray<AgentSkill>;
  /** Required. A description of the agent's domain of action/solution space. */
  description?: string;
  /** Required. The version of the agent. */
  version?: string;
  /** Required. Ordered list of supported interfaces. The first entry is preferred. */
  supportedInterfaces?: ReadonlyArray<AgentInterface>;
  /** Required. A human-readable name for the agent. */
  name?: string;
}

export const AgentCard: Schema.Schema<AgentCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    skills: Schema.optional(Schema.Array(AgentSkill)),
    description: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    supportedInterfaces: Schema.optional(Schema.Array(AgentInterface)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentCard" });

export interface RemoteAgentTool {
  /** Required. The agent card of the remote agent that this tool invokes. */
  agentCard?: AgentCard;
  /** Required. The name of the tool. */
  name?: string;
  /** Required. The description of the tool. */
  description?: string;
}

export const RemoteAgentTool: Schema.Schema<RemoteAgentTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentCard: Schema.optional(AgentCard),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "RemoteAgentTool" });

export interface OpenApiTool {
  /** Required. The OpenAPI schema in JSON or YAML format. */
  openApiSchema?: string;
  /** Optional. The TLS configuration. Includes the custom server certificates that the client will trust. */
  tlsConfig?: TlsConfig;
  /** Optional. Authentication information required by the API. */
  apiAuthentication?: ApiAuthentication;
  /** Optional. If true, the agent will ignore unknown fields in the API response. */
  ignoreUnknownFields?: boolean;
  /** Optional. The description of the tool. If not provided, the description of the tool will be derived from the OpenAPI schema, from `operation.description` or `operation.summary`. */
  description?: string;
  /** Optional. The server URL of the Open API schema. This field is only set in tools in the environment dependencies during the export process if the schema contains a server url. During the import process, if this url is present in the environment dependencies and the schema has the $env_var placeholder, it will replace the placeholder in the schema. */
  url?: string;
  /** Optional. The name of the tool. If not provided, the name of the tool will be derived from the OpenAPI schema, from `operation.operationId`. */
  name?: string;
  /** Optional. Service Directory configuration. */
  serviceDirectoryConfig?: ServiceDirectoryConfig;
}

export const OpenApiTool: Schema.Schema<OpenApiTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    openApiSchema: Schema.optional(Schema.String),
    tlsConfig: Schema.optional(TlsConfig),
    apiAuthentication: Schema.optional(ApiAuthentication),
    ignoreUnknownFields: Schema.optional(Schema.Boolean),
    description: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    serviceDirectoryConfig: Schema.optional(ServiceDirectoryConfig),
  }).annotate({ identifier: "OpenApiTool" });

export interface Tool {
  /** Optional. The data store tool. */
  dataStoreTool?: DataStoreTool;
  /** Output only. Timestamp when the tool was last updated. */
  updateTime?: string;
  /** Optional. The widget tool. */
  widgetTool?: WidgetTool;
  /** Optional. The Integration Connector tool. */
  connectorTool?: ConnectorTool;
  /** Identifier. The resource name of the tool. Format: * `projects/{project}/locations/{location}/apps/{app}/tools/{tool}` for standalone tools. * `projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}/tools/{tool}` for tools retrieved from a toolset. These tools are dynamic and output-only; they cannot be referenced directly where a tool is expected. */
  name?: string;
  /** Optional. The google search tool. */
  googleSearchTool?: GoogleSearchTool;
  /** Optional. The execution type of the tool. */
  executionType?:
    | "EXECUTION_TYPE_UNSPECIFIED"
    | "SYNCHRONOUS"
    | "ASYNCHRONOUS"
    | (string & {});
  /** Output only. If the tool is generated by the LLM assistant, this field contains a descriptive summary of the generation. */
  generatedSummary?: string;
  /** Output only. The display name of the tool, derived based on the tool's type. For example, display name of a ClientFunction is derived from its `name` property. */
  displayName?: string;
  /** Output only. Timestamp when the tool was created. */
  createTime?: string;
  /** Optional. The file search tool. */
  fileSearchTool?: FileSearchTool;
  /** Optional. The agent tool. */
  agentTool?: AgentTool;
  /** Optional. The client function. */
  clientFunction?: ClientFunction;
  /** Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes. */
  etag?: string;
  /** Optional. Configuration for tool behavior in fake mode. */
  toolFakeConfig?: ToolFakeConfig;
  /** Optional. The system tool. */
  systemTool?: SystemTool;
  /** Optional. The remote agent tool. */
  remoteAgentTool?: RemoteAgentTool;
  /** Optional. The timeout for the tool execution. If not set, the default timeout is 30 seconds for `SYNCHRONOUS` tools and 60 seconds for `ASYNCHRONOUS` tools. */
  timeout?: string;
  /** Optional. The open API tool. */
  openApiTool?: OpenApiTool;
  /** Optional. The python function tool. */
  pythonFunction?: PythonFunction;
  /** Optional. The MCP tool. An MCP tool cannot be created or updated directly and is managed by the MCP toolset. */
  mcpTool?: McpTool;
}

export const Tool: Schema.Schema<Tool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataStoreTool: Schema.optional(DataStoreTool),
    updateTime: Schema.optional(Schema.String),
    widgetTool: Schema.optional(WidgetTool),
    connectorTool: Schema.optional(ConnectorTool),
    name: Schema.optional(Schema.String),
    googleSearchTool: Schema.optional(GoogleSearchTool),
    executionType: Schema.optional(Schema.String),
    generatedSummary: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    fileSearchTool: Schema.optional(FileSearchTool),
    agentTool: Schema.optional(AgentTool),
    clientFunction: Schema.optional(ClientFunction),
    etag: Schema.optional(Schema.String),
    toolFakeConfig: Schema.optional(ToolFakeConfig),
    systemTool: Schema.optional(SystemTool),
    remoteAgentTool: Schema.optional(RemoteAgentTool),
    timeout: Schema.optional(Schema.String),
    openApiTool: Schema.optional(OpenApiTool),
    pythonFunction: Schema.optional(PythonFunction),
    mcpTool: Schema.optional(McpTool),
  }).annotate({ identifier: "Tool" });

export interface EvaluationMetricsConfigUserGoalMetMetricsConfig {
  /** Optional. Whether to calculate the user goal met metrics for the evaluation. */
  enableUserGoalMetMetrics?: boolean;
}

export const EvaluationMetricsConfigUserGoalMetMetricsConfig: Schema.Schema<EvaluationMetricsConfigUserGoalMetMetricsConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableUserGoalMetMetrics: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "EvaluationMetricsConfigUserGoalMetMetricsConfig",
  });

export interface EvaluationMetricsConfigExpectationsMetMetricsConfig {
  /** Optional. Whether to calculate the expectation level metrics for the evaluation. */
  enableExpectationsMetMetrics?: boolean;
}

export const EvaluationMetricsConfigExpectationsMetMetricsConfig: Schema.Schema<EvaluationMetricsConfigExpectationsMetMetricsConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableExpectationsMetMetrics: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "EvaluationMetricsConfigExpectationsMetMetricsConfig",
  });

export interface EvaluationMetricsConfigScenarioMetricsConfig {
  /** Optional. Configuration for user goal met metrics. */
  userGoalMetMetricsConfig?: EvaluationMetricsConfigUserGoalMetMetricsConfig;
  /** Optional. Configuration for expectation level metrics. */
  expectationsMetMetricsConfig?: EvaluationMetricsConfigExpectationsMetMetricsConfig;
}

export const EvaluationMetricsConfigScenarioMetricsConfig: Schema.Schema<EvaluationMetricsConfigScenarioMetricsConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userGoalMetMetricsConfig: Schema.optional(
      EvaluationMetricsConfigUserGoalMetMetricsConfig,
    ),
    expectationsMetMetricsConfig: Schema.optional(
      EvaluationMetricsConfigExpectationsMetMetricsConfig,
    ),
  }).annotate({ identifier: "EvaluationMetricsConfigScenarioMetricsConfig" });

export interface EvaluationMetricsConfigToolCorrectnessMetricsConfig {
  /** Optional. Whether to calculate tool correctness metrics for the evaluation. */
  enableToolCorrectnessMetrics?: boolean;
}

export const EvaluationMetricsConfigToolCorrectnessMetricsConfig: Schema.Schema<EvaluationMetricsConfigToolCorrectnessMetricsConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableToolCorrectnessMetrics: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "EvaluationMetricsConfigToolCorrectnessMetricsConfig",
  });

export interface EvaluationMetricsConfigGoldenMetricsConfig {
  /** Optional. Configuration for turn level tool correctness metrics. */
  toolCorrectnessMetricsConfig?: EvaluationMetricsConfigToolCorrectnessMetricsConfig;
  /** Optional. Configuration for step level tool correctness metrics. */
  stepToolCorrectnessMetricsConfig?: EvaluationMetricsConfigToolCorrectnessMetricsConfig;
  /** Optional. Global configuration for semantic similarity metrics. */
  semanticSimilarityMetricsConfig?: EvaluationMetricsConfigSemanticSimilarityMetricsConfig;
}

export const EvaluationMetricsConfigGoldenMetricsConfig: Schema.Schema<EvaluationMetricsConfigGoldenMetricsConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolCorrectnessMetricsConfig: Schema.optional(
      EvaluationMetricsConfigToolCorrectnessMetricsConfig,
    ),
    stepToolCorrectnessMetricsConfig: Schema.optional(
      EvaluationMetricsConfigToolCorrectnessMetricsConfig,
    ),
    semanticSimilarityMetricsConfig: Schema.optional(
      EvaluationMetricsConfigSemanticSimilarityMetricsConfig,
    ),
  }).annotate({ identifier: "EvaluationMetricsConfigGoldenMetricsConfig" });

export interface EvaluationMetricsConfig {
  /** Optional. Configuration for the scenario metrics for the evaluation. */
  scenarioMetricsConfig?: EvaluationMetricsConfigScenarioMetricsConfig;
  /** Optional. Configuration for the golden metrics for the evaluation. */
  goldenMetricsConfig?: EvaluationMetricsConfigGoldenMetricsConfig;
}

export const EvaluationMetricsConfig: Schema.Schema<EvaluationMetricsConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scenarioMetricsConfig: Schema.optional(
      EvaluationMetricsConfigScenarioMetricsConfig,
    ),
    goldenMetricsConfig: Schema.optional(
      EvaluationMetricsConfigGoldenMetricsConfig,
    ),
  }).annotate({ identifier: "EvaluationMetricsConfig" });

export interface EvaluationSettings {
  /** Optional. The default method used to run golden evaluations. This will be used if no golden_run_method is specified in the RunEvaluationRequest. */
  goldenRunMethod?:
    | "GOLDEN_RUN_METHOD_UNSPECIFIED"
    | "STABLE"
    | "NAIVE"
    | (string & {});
  /** Optional. Who starts the conversation in a scenario evaluation. */
  scenarioConversationInitiator?:
    | "SCENARIO_CONVERSATION_INITIATOR_UNSPECIFIED"
    | "USER"
    | "AGENT"
    | (string & {});
  /** Optional. Configures the default metrics for evaluations. */
  metricsConfig?: EvaluationMetricsConfig;
  /** Optional. Configures the default tool call behaviour for golden evaluations. */
  goldenEvaluationToolCallBehaviour?:
    | "EVALUATION_TOOL_CALL_BEHAVIOUR_UNSPECIFIED"
    | "REAL"
    | "FAKE"
    | (string & {});
  /** Optional. Configures the default tool call behaviour for scenario evaluations. */
  scenarioEvaluationToolCallBehaviour?:
    | "EVALUATION_TOOL_CALL_BEHAVIOUR_UNSPECIFIED"
    | "REAL"
    | "FAKE"
    | (string & {});
}

export const EvaluationSettings: Schema.Schema<EvaluationSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    goldenRunMethod: Schema.optional(Schema.String),
    scenarioConversationInitiator: Schema.optional(Schema.String),
    metricsConfig: Schema.optional(EvaluationMetricsConfig),
    goldenEvaluationToolCallBehaviour: Schema.optional(Schema.String),
    scenarioEvaluationToolCallBehaviour: Schema.optional(Schema.String),
  }).annotate({ identifier: "EvaluationSettings" });

export interface SynthesizeSpeechConfig {
  /** Optional. The name of the voice. If not set, the service will choose a voice based on the other parameters such as language_code. For the list of available voices, please refer to [Supported voices and languages](https://cloud.google.com/text-to-speech/docs/voices) from Cloud Text-to-Speech. */
  voice?: string;
  /** Optional. The speaking rate/speed in the range [0.25, 2.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. Values outside of the range [0.25, 2.0] will return an error. */
  speakingRate?: number;
}

export const SynthesizeSpeechConfig: Schema.Schema<SynthesizeSpeechConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    voice: Schema.optional(Schema.String),
    speakingRate: Schema.optional(Schema.Number),
  }).annotate({ identifier: "SynthesizeSpeechConfig" });

export interface AmbientSoundConfig {
  /** Optional. Deprecated: `prebuilt_ambient_noise` is deprecated in favor of `prebuilt_ambient_sound`. */
  prebuiltAmbientNoise?:
    | "PREBUILT_AMBIENT_NOISE_UNSPECIFIED"
    | "RETAIL_STORE"
    | "CONVENTION_HALL"
    | "OUTDOOR"
    | (string & {});
  /** Optional. Ambient noise as a mono-channel, 16kHz WAV file stored in [Cloud Storage](https://cloud.google.com/storage). Note: Please make sure the CES service agent `service-@gcp-sa-ces.iam.gserviceaccount.com` has `storage.objects.get` permission to the Cloud Storage object. */
  gcsUri?: string;
  /** Optional. Name of the prebuilt ambient sound. Valid values are: - "coffee_shop" - "keyboard" - "keypad" - "hum" - "office_1" - "office_2" - "office_3" - "room_1" - "room_2" - "room_3" - "room_4" - "room_5" - "air_conditioner" */
  prebuiltAmbientSound?: string;
  /** Optional. Volume gain (in dB) of the normal native volume supported by ambient noise, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. We strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that. */
  volumeGainDb?: number;
}

export const AmbientSoundConfig: Schema.Schema<AmbientSoundConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    prebuiltAmbientNoise: Schema.optional(Schema.String),
    gcsUri: Schema.optional(Schema.String),
    prebuiltAmbientSound: Schema.optional(Schema.String),
    volumeGainDb: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AmbientSoundConfig" });

export interface BargeInConfig {
  /** Optional. Disables user barge-in while the agent is speaking. If true, user input during agent response playback will be ignored. Deprecated: `disable_barge_in` is deprecated in favor of `disable_barge_in_control` in ChannelProfile. */
  disableBargeIn?: boolean;
  /** Optional. If enabled, the agent will adapt its next response based on the assumption that the user hasn't heard the full preceding agent message. This should not be used in scenarios where agent responses are displayed visually. */
  bargeInAwareness?: boolean;
}

export const BargeInConfig: Schema.Schema<BargeInConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disableBargeIn: Schema.optional(Schema.Boolean),
    bargeInAwareness: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "BargeInConfig" });

export interface AudioProcessingConfig {
  /** Optional. Configuration for the ambient sound to be played with the synthesized agent response, to enhance the naturalness of the conversation. */
  ambientSoundConfig?: AmbientSoundConfig;
  /** Optional. Configuration of how the agent response should be synthesized, mapping from the language code to SynthesizeSpeechConfig. If the configuration for the specified language code is not found, the configuration for the root language code will be used. For example, if the map contains "en-us" and "en", and the specified language code is "en-gb", then "en" configuration will be used. Note: Language code is case-insensitive. */
  synthesizeSpeechConfigs?: Record<string, SynthesizeSpeechConfig>;
  /** Optional. Configures the agent behavior for the user barge-in activities. */
  bargeInConfig?: BargeInConfig;
  /** Optional. The duration of user inactivity (no speech or interaction) before the agent prompts the user for reengagement. If not set, the agent will not prompt the user for reengagement. */
  inactivityTimeout?: string;
}

export const AudioProcessingConfig: Schema.Schema<AudioProcessingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ambientSoundConfig: Schema.optional(AmbientSoundConfig),
    synthesizeSpeechConfigs: Schema.optional(
      Schema.Record(Schema.String, SynthesizeSpeechConfig),
    ),
    bargeInConfig: Schema.optional(BargeInConfig),
    inactivityTimeout: Schema.optional(Schema.String),
  }).annotate({ identifier: "AudioProcessingConfig" });

export interface EvaluationPersonaSpeechConfig {
  /** Optional. The speaking rate. 1.0 is normal. Lower is slower (e.g., 0.8), higher is faster (e.g., 1.5). Useful for testing how the agent handles fast talkers. */
  speakingRate?: number;
  /** Optional. The specific voice identifier/accent to use. Example: "en-US-Wavenet-D" or "en-GB-Standard-A" */
  voiceId?: string;
  /** Optional. The simulated audio environment. */
  environment?:
    | "BACKGROUND_ENVIRONMENT_UNSPECIFIED"
    | "CALL_CENTER"
    | "TRAFFIC"
    | "KIDS_NOISE"
    | "CAFE"
    | (string & {});
}

export const EvaluationPersonaSpeechConfig: Schema.Schema<EvaluationPersonaSpeechConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    speakingRate: Schema.optional(Schema.Number),
    voiceId: Schema.optional(Schema.String),
    environment: Schema.optional(Schema.String),
  }).annotate({ identifier: "EvaluationPersonaSpeechConfig" });

export interface GuardrailContentFilter {
  /** Optional. If true, diacritics are ignored during matching. */
  disregardDiacritics?: boolean;
  /** Optional. List of banned phrases. Applies only to agent responses. */
  bannedContentsInAgentResponse?: ReadonlyArray<string>;
  /** Optional. List of banned phrases. Applies to both user inputs and agent responses. */
  bannedContents?: ReadonlyArray<string>;
  /** Optional. List of banned phrases. Applies only to user inputs. */
  bannedContentsInUserInput?: ReadonlyArray<string>;
  /** Required. Match type for the content filter. */
  matchType?:
    | "MATCH_TYPE_UNSPECIFIED"
    | "SIMPLE_STRING_MATCH"
    | "WORD_BOUNDARY_STRING_MATCH"
    | "REGEXP_MATCH"
    | (string & {});
}

export const GuardrailContentFilter: Schema.Schema<GuardrailContentFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disregardDiacritics: Schema.optional(Schema.Boolean),
    bannedContentsInAgentResponse: Schema.optional(Schema.Array(Schema.String)),
    bannedContents: Schema.optional(Schema.Array(Schema.String)),
    bannedContentsInUserInput: Schema.optional(Schema.Array(Schema.String)),
    matchType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GuardrailContentFilter" });

export interface EvaluationResultHallucinationResult {
  /** Output only. The explanation for the hallucination score. */
  explanation?: string;
  /** Output only. The hallucination score. Can be -1, 0, 1. */
  score?: number;
  /** Output only. The label associated with each score. Score 1: Justified Score 0: Not Justified Score -1: No Claim To Assess */
  label?: string;
}

export const EvaluationResultHallucinationResult: Schema.Schema<EvaluationResultHallucinationResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    explanation: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    label: Schema.optional(Schema.String),
  }).annotate({ identifier: "EvaluationResultHallucinationResult" });

export interface EvaluationResultOverallToolInvocationResult {
  /** The overall tool invocation score for this turn. This indicates the overall percent of tools from the expected turn that were actually invoked. */
  toolInvocationScore?: number;
  /** Output only. The outcome of the tool invocation check. This is determined by comparing the tool_invocation_score to the overall_tool_invocation_correctness_threshold. If the score is equal to or above the threshold, the outcome will be PASS. Otherwise, the outcome will be FAIL. */
  outcome?: "OUTCOME_UNSPECIFIED" | "PASS" | "FAIL" | "SKIPPED" | (string & {});
}

export const EvaluationResultOverallToolInvocationResult: Schema.Schema<EvaluationResultOverallToolInvocationResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolInvocationScore: Schema.optional(Schema.Number),
    outcome: Schema.optional(Schema.String),
  }).annotate({ identifier: "EvaluationResultOverallToolInvocationResult" });

export interface EvaluationResultSpanLatency {
  /** Output only. The end time of span. */
  endTime?: string;
  /** Output only. The type of span. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "TOOL"
    | "USER_CALLBACK"
    | "GUARDRAIL"
    | "LLM"
    | (string & {});
  /** Output only. The latency of span. */
  executionLatency?: string;
  /** Output only. The name of the LLM span. */
  model?: string;
  /** Output only. The resource name of the guardrail or tool spans. */
  resource?: string;
  /** Output only. The name of the user callback span. */
  callback?: string;
  /** Output only. The toolset tool identifier. */
  toolset?: ToolsetTool;
  /** Output only. The start time of span. */
  startTime?: string;
  /** Output only. The display name of the span. Applicable to tool and guardrail spans. */
  displayName?: string;
}

export const EvaluationResultSpanLatency: Schema.Schema<EvaluationResultSpanLatency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    executionLatency: Schema.optional(Schema.String),
    model: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
    callback: Schema.optional(Schema.String),
    toolset: Schema.optional(ToolsetTool),
    startTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "EvaluationResultSpanLatency" });

export interface EvaluationResultGoldenResultTurnReplayResult {
  /** Output only. Deprecated. Use OverallToolInvocationResult instead. */
  toolInvocationScore?: number;
  /** Output only. The conversation that was generated for this turn. */
  conversation?: string;
  /** Output only. The result of the semantic similarity check. */
  semanticSimilarityResult?: EvaluationResultSemanticSimilarityResult;
  /** Output only. The outcome of each expectation. */
  expectationOutcome?: ReadonlyArray<EvaluationResultGoldenExpectationOutcome>;
  /** Output only. The result of the hallucination check. */
  hallucinationResult?: EvaluationResultHallucinationResult;
  /** Output only. Duration of the turn. */
  turnLatency?: string;
  /** Output only. The overall tool ordered invocation score for this turn. This indicates the overall percent of tools from the expected turn that were actually invoked in the expected order. */
  toolOrderedInvocationScore?: number;
  /** Output only. The result of the overall tool invocation check. */
  overallToolInvocationResult?: EvaluationResultOverallToolInvocationResult;
  /** Output only. The latency of each tool call in the turn. */
  toolCallLatencies?: ReadonlyArray<EvaluationResultToolCallLatency>;
  /** Output only. Information about the error that occurred during this turn. */
  errorInfo?: EvaluationErrorInfo;
  /** Output only. The latency of spans in the turn. */
  spanLatencies?: ReadonlyArray<EvaluationResultSpanLatency>;
}

export const EvaluationResultGoldenResultTurnReplayResult: Schema.Schema<EvaluationResultGoldenResultTurnReplayResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolInvocationScore: Schema.optional(Schema.Number),
    conversation: Schema.optional(Schema.String),
    semanticSimilarityResult: Schema.optional(
      EvaluationResultSemanticSimilarityResult,
    ),
    expectationOutcome: Schema.optional(
      Schema.Array(EvaluationResultGoldenExpectationOutcome),
    ),
    hallucinationResult: Schema.optional(EvaluationResultHallucinationResult),
    turnLatency: Schema.optional(Schema.String),
    toolOrderedInvocationScore: Schema.optional(Schema.Number),
    overallToolInvocationResult: Schema.optional(
      EvaluationResultOverallToolInvocationResult,
    ),
    toolCallLatencies: Schema.optional(
      Schema.Array(EvaluationResultToolCallLatency),
    ),
    errorInfo: Schema.optional(EvaluationErrorInfo),
    spanLatencies: Schema.optional(Schema.Array(EvaluationResultSpanLatency)),
  }).annotate({ identifier: "EvaluationResultGoldenResultTurnReplayResult" });

export interface ListToolsResponse {
  /** The list of tools. */
  tools?: ReadonlyArray<Tool>;
  /** A token that can be sent as ListToolsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListToolsResponse: Schema.Schema<ListToolsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tools: Schema.optional(Schema.Array(Tool)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListToolsResponse" });

export interface Event {
  /** Required. The name of the event. */
  event?: string;
}

export const Event: Schema.Schema<Event> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    event: Schema.optional(Schema.String),
  }).annotate({ identifier: "Event" });

export interface ToolResponses {
  /** Optional. The list of tool execution results. */
  toolResponses?: ReadonlyArray<ToolResponse>;
}

export const ToolResponses: Schema.Schema<ToolResponses> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolResponses: Schema.optional(Schema.Array(ToolResponse)),
  }).annotate({ identifier: "ToolResponses" });

export interface SessionInput {
  /** Optional. Image data from the end user. */
  image?: Image;
  /** Optional. A flag to indicate if the current message is a fragment of a larger input in the bidi streaming session. When set to `true`, the agent defers processing until it receives a subsequent message where `will_continue` is `false`, or until the system detects an endpoint in the audio input. NOTE: This field does not apply to audio and DTMF inputs, as they are always processed automatically based on the endpointing signal. */
  willContinue?: boolean;
  /** Optional. Contextual variables for the session, keyed by name. Only variables declared in the app will be used by the CES agent. Unrecognized variables will still be sent to the Dialogflow agent as additional session parameters. */
  variables?: Record<string, unknown>;
  /** Optional. Text data from the end user. */
  text?: string;
  /** Optional. DTMF digits from the end user. */
  dtmf?: string;
  /** Optional. Audio data from the end user. */
  audio?: string;
  /** Optional. Blob data from the end user. */
  blob?: Blob;
  /** Optional. Event input. */
  event?: Event;
  /** Optional. Execution results for the tool calls from the client. */
  toolResponses?: ToolResponses;
}

export const SessionInput: Schema.Schema<SessionInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    image: Schema.optional(Image),
    willContinue: Schema.optional(Schema.Boolean),
    variables: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    text: Schema.optional(Schema.String),
    dtmf: Schema.optional(Schema.String),
    audio: Schema.optional(Schema.String),
    blob: Schema.optional(Blob),
    event: Schema.optional(Event),
    toolResponses: Schema.optional(ToolResponses),
  }).annotate({ identifier: "SessionInput" });

export interface EvaluationStep {
  /** Optional. User input for the conversation. */
  userInput?: SessionInput;
  /** Optional. Executes an expectation on the current turn. */
  expectation?: EvaluationGoldenExpectation;
  /** Optional. Transfer the conversation to a different agent. */
  agentTransfer?: AgentTransfer;
}

export const EvaluationStep: Schema.Schema<EvaluationStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userInput: Schema.optional(SessionInput),
    expectation: Schema.optional(EvaluationGoldenExpectation),
    agentTransfer: Schema.optional(AgentTransfer),
  }).annotate({ identifier: "EvaluationStep" });

export interface EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds {
  /** Optional. The success threshold for overall tool invocation correctness. Must be a float between 0 and 1. Default is 1.0. */
  overallToolInvocationCorrectnessThreshold?: number;
  /** Optional. The semantic similarity channel to use for evaluation. */
  semanticSimilarityChannel?:
    | "SEMANTIC_SIMILARITY_CHANNEL_UNSPECIFIED"
    | "TEXT"
    | "AUDIO"
    | (string & {});
  /** Optional. The success threshold for semantic similarity. Must be an integer between 0 and 4. Default is >= 3. */
  semanticSimilaritySuccessThreshold?: number;
}

export const EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds: Schema.Schema<EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    overallToolInvocationCorrectnessThreshold: Schema.optional(Schema.Number),
    semanticSimilarityChannel: Schema.optional(Schema.String),
    semanticSimilaritySuccessThreshold: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds",
  });

export interface EvaluationMetricsThresholdsToolMatchingSettings {
  /** Optional. Behavior for extra tool calls. Defaults to FAIL. */
  extraToolCallBehavior?:
    | "EXTRA_TOOL_CALL_BEHAVIOR_UNSPECIFIED"
    | "FAIL"
    | "ALLOW"
    | (string & {});
}

export const EvaluationMetricsThresholdsToolMatchingSettings: Schema.Schema<EvaluationMetricsThresholdsToolMatchingSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    extraToolCallBehavior: Schema.optional(Schema.String),
  }).annotate({
    identifier: "EvaluationMetricsThresholdsToolMatchingSettings",
  });

export interface EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds {
  /** Optional. The turn level metrics thresholds. */
  turnLevelMetricsThresholds?: EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds;
  /** Optional. The tool matching settings. An extra tool call is a tool call that is present in the execution but does not match any tool call in the golden expectation. */
  toolMatchingSettings?: EvaluationMetricsThresholdsToolMatchingSettings;
  /** Optional. The expectation level metrics thresholds. */
  expectationLevelMetricsThresholds?: EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds;
}

export const EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds: Schema.Schema<EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    turnLevelMetricsThresholds: Schema.optional(
      EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds,
    ),
    toolMatchingSettings: Schema.optional(
      EvaluationMetricsThresholdsToolMatchingSettings,
    ),
    expectationLevelMetricsThresholds: Schema.optional(
      EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds,
    ),
  }).annotate({
    identifier: "EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds",
  });

export interface EvaluationMetricsThresholds {
  /** Optional. The golden evaluation metrics thresholds. */
  goldenEvaluationMetricsThresholds?: EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds;
  /** Optional. The hallucination metric behavior for scenario evaluations. */
  scenarioHallucinationMetricBehavior?:
    | "HALLUCINATION_METRIC_BEHAVIOR_UNSPECIFIED"
    | "DISABLED"
    | "ENABLED"
    | (string & {});
  /** Optional. Deprecated: Use `golden_hallucination_metric_behavior` instead. The hallucination metric behavior is currently used for golden evaluations. */
  hallucinationMetricBehavior?:
    | "HALLUCINATION_METRIC_BEHAVIOR_UNSPECIFIED"
    | "DISABLED"
    | "ENABLED"
    | (string & {});
  /** Optional. The hallucination metric behavior for golden evaluations. */
  goldenHallucinationMetricBehavior?:
    | "HALLUCINATION_METRIC_BEHAVIOR_UNSPECIFIED"
    | "DISABLED"
    | "ENABLED"
    | (string & {});
}

export const EvaluationMetricsThresholds: Schema.Schema<EvaluationMetricsThresholds> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    goldenEvaluationMetricsThresholds: Schema.optional(
      EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds,
    ),
    scenarioHallucinationMetricBehavior: Schema.optional(Schema.String),
    hallucinationMetricBehavior: Schema.optional(Schema.String),
    goldenHallucinationMetricBehavior: Schema.optional(Schema.String),
  }).annotate({ identifier: "EvaluationMetricsThresholds" });

export interface EvaluationResultScenarioRubricOutcome {
  /** Output only. The rater's response to the rubric. */
  scoreExplanation?: string;
  /** Output only. The rubric that was used to evaluate the conversation. */
  rubric?: string;
  /** Output only. The score of the conversation against the rubric. */
  score?: number;
}

export const EvaluationResultScenarioRubricOutcome: Schema.Schema<EvaluationResultScenarioRubricOutcome> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scoreExplanation: Schema.optional(Schema.String),
    rubric: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
  }).annotate({ identifier: "EvaluationResultScenarioRubricOutcome" });

export interface EvaluationResultScenarioExpectationOutcomeObservedToolCall {
  /** Output only. The observed tool call. */
  toolCall?: ToolCall;
  /** Output only. The observed tool response. */
  toolResponse?: ToolResponse;
}

export const EvaluationResultScenarioExpectationOutcomeObservedToolCall: Schema.Schema<EvaluationResultScenarioExpectationOutcomeObservedToolCall> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolCall: Schema.optional(ToolCall),
    toolResponse: Schema.optional(ToolResponse),
  }).annotate({
    identifier: "EvaluationResultScenarioExpectationOutcomeObservedToolCall",
  });

export interface EvaluationScenarioExpectationToolExpectation {
  /** Required. The expected tool call, with the parameters of interest specified. Any parameters not specified will be hallucinated by the LLM. */
  expectedToolCall?: ToolCall;
  /** Required. The tool response to mock, with the parameters of interest specified. Any parameters not specified will be hallucinated by the LLM. */
  mockToolResponse?: ToolResponse;
}

export const EvaluationScenarioExpectationToolExpectation: Schema.Schema<EvaluationScenarioExpectationToolExpectation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expectedToolCall: Schema.optional(ToolCall),
    mockToolResponse: Schema.optional(ToolResponse),
  }).annotate({ identifier: "EvaluationScenarioExpectationToolExpectation" });

export interface EvaluationScenarioExpectation {
  /** Optional. The tool call and response pair to be evaluated. */
  toolExpectation?: EvaluationScenarioExpectationToolExpectation;
  /** Optional. The agent response to be evaluated. */
  agentResponse?: Message;
}

export const EvaluationScenarioExpectation: Schema.Schema<EvaluationScenarioExpectation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolExpectation: Schema.optional(
      EvaluationScenarioExpectationToolExpectation,
    ),
    agentResponse: Schema.optional(Message),
  }).annotate({ identifier: "EvaluationScenarioExpectation" });

export interface EvaluationResultScenarioExpectationOutcome {
  /** Output only. The observed agent response. */
  observedAgentResponse?: Message;
  /** Output only. The observed tool call. */
  observedToolCall?: EvaluationResultScenarioExpectationOutcomeObservedToolCall;
  /** Output only. The outcome of the ScenarioExpectation. */
  outcome?: "OUTCOME_UNSPECIFIED" | "PASS" | "FAIL" | "SKIPPED" | (string & {});
  /** Output only. The expectation that was evaluated. */
  expectation?: EvaluationScenarioExpectation;
}

export const EvaluationResultScenarioExpectationOutcome: Schema.Schema<EvaluationResultScenarioExpectationOutcome> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    observedAgentResponse: Schema.optional(Message),
    observedToolCall: Schema.optional(
      EvaluationResultScenarioExpectationOutcomeObservedToolCall,
    ),
    outcome: Schema.optional(Schema.String),
    expectation: Schema.optional(EvaluationScenarioExpectation),
  }).annotate({ identifier: "EvaluationResultScenarioExpectationOutcome" });

export interface EvaluationResultTaskCompletionResult {
  /** Output only. The task completion score. Can be -1, 0, 1 */
  score?: number;
  /** Output only. The label associated with each score. Score 1: Task Completed Score 0: Task Not Completed Score -1: User Goal Undefined */
  label?: string;
  /** Output only. The explanation for the task completion score. */
  explanation?: string;
}

export const EvaluationResultTaskCompletionResult: Schema.Schema<EvaluationResultTaskCompletionResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.Number),
    label: Schema.optional(Schema.String),
    explanation: Schema.optional(Schema.String),
  }).annotate({ identifier: "EvaluationResultTaskCompletionResult" });

export interface EvaluationResultUserGoalSatisfactionResult {
  /** Output only. The user task satisfaction score. Can be -1, 0, 1. */
  score?: number;
  /** Output only. The label associated with each score. Score 1: User Task Satisfied Score 0: User Task Not Satisfied Score -1: User Task Unspecified */
  label?: string;
  /** Output only. The explanation for the user task satisfaction score. */
  explanation?: string;
}

export const EvaluationResultUserGoalSatisfactionResult: Schema.Schema<EvaluationResultUserGoalSatisfactionResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.Number),
    label: Schema.optional(Schema.String),
    explanation: Schema.optional(Schema.String),
  }).annotate({ identifier: "EvaluationResultUserGoalSatisfactionResult" });

export interface EvaluationResultEvaluationExpectationResult {
  /** Output only. The prompt that was used for the evaluation. */
  prompt?: string;
  /** Output only. The outcome of the evaluation expectation. */
  outcome?: "OUTCOME_UNSPECIFIED" | "PASS" | "FAIL" | "SKIPPED" | (string & {});
  /** Output only. The evaluation expectation. Format: `projects/{project}/locations/{location}/apps/{app}/evaluationExpectations/{evaluation_expectation}` */
  evaluationExpectation?: string;
  /** Output only. The explanation for the result. */
  explanation?: string;
}

export const EvaluationResultEvaluationExpectationResult: Schema.Schema<EvaluationResultEvaluationExpectationResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    prompt: Schema.optional(Schema.String),
    outcome: Schema.optional(Schema.String),
    evaluationExpectation: Schema.optional(Schema.String),
    explanation: Schema.optional(Schema.String),
  }).annotate({ identifier: "EvaluationResultEvaluationExpectationResult" });

export interface EvaluationScenarioUserFact {
  /** Required. The value of the user fact. */
  value?: string;
  /** Required. The name of the user fact. */
  name?: string;
}

export const EvaluationScenarioUserFact: Schema.Schema<EvaluationScenarioUserFact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "EvaluationScenarioUserFact" });

export interface EvaluationResultScenarioResult {
  /** Output only. The outcome of the rubric. */
  rubricOutcomes?: ReadonlyArray<EvaluationResultScenarioRubricOutcome>;
  /** Output only. The task that was used when running the scenario for this result. */
  task?: string;
  /** Output only. The outcome of each expectation. */
  expectationOutcomes?: ReadonlyArray<EvaluationResultScenarioExpectationOutcome>;
  /** Output only. The result of the task completion check. */
  taskCompletionResult?: EvaluationResultTaskCompletionResult;
  /** Output only. Whether all expectations were satisfied for this turn. */
  allExpectationsSatisfied?: boolean;
  /** Output only. The conversation that was generated in the scenario. */
  conversation?: string;
  /** Output only. Whether the task was completed for this turn. This is a composite of all expectations satisfied, no hallucinations, and user goal satisfaction. */
  taskCompleted?: boolean;
  /** Output only. The result of the hallucination check. There will be one hallucination result for each turn in the conversation. */
  hallucinationResult?: ReadonlyArray<EvaluationResultHallucinationResult>;
  /** Output only. The result of the user goal satisfaction check. */
  userGoalSatisfactionResult?: EvaluationResultUserGoalSatisfactionResult;
  /** Output only. The results of the evaluation expectations. */
  evaluationExpectationResults?: ReadonlyArray<EvaluationResultEvaluationExpectationResult>;
  /** Output only. The user facts that were used by the scenario for this result. */
  userFacts?: ReadonlyArray<EvaluationScenarioUserFact>;
  /** Output only. The latency of spans in the conversation. */
  spanLatencies?: ReadonlyArray<EvaluationResultSpanLatency>;
  /** Output only. The latency of each tool call execution in the conversation. */
  toolCallLatencies?: ReadonlyArray<EvaluationResultToolCallLatency>;
}

export const EvaluationResultScenarioResult: Schema.Schema<EvaluationResultScenarioResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rubricOutcomes: Schema.optional(
      Schema.Array(EvaluationResultScenarioRubricOutcome),
    ),
    task: Schema.optional(Schema.String),
    expectationOutcomes: Schema.optional(
      Schema.Array(EvaluationResultScenarioExpectationOutcome),
    ),
    taskCompletionResult: Schema.optional(EvaluationResultTaskCompletionResult),
    allExpectationsSatisfied: Schema.optional(Schema.Boolean),
    conversation: Schema.optional(Schema.String),
    taskCompleted: Schema.optional(Schema.Boolean),
    hallucinationResult: Schema.optional(
      Schema.Array(EvaluationResultHallucinationResult),
    ),
    userGoalSatisfactionResult: Schema.optional(
      EvaluationResultUserGoalSatisfactionResult,
    ),
    evaluationExpectationResults: Schema.optional(
      Schema.Array(EvaluationResultEvaluationExpectationResult),
    ),
    userFacts: Schema.optional(Schema.Array(EvaluationScenarioUserFact)),
    spanLatencies: Schema.optional(Schema.Array(EvaluationResultSpanLatency)),
    toolCallLatencies: Schema.optional(
      Schema.Array(EvaluationResultToolCallLatency),
    ),
  }).annotate({ identifier: "EvaluationResultScenarioResult" });

export interface EvaluationPersona {
  /** Required. The unique identifier of the persona. Format: `projects/{project}/locations/{location}/apps/{app}/evaluationPersonas/{evaluationPersona}` */
  name?: string;
  /** Required. The display name of the persona. Unique within an app. */
  displayName?: string;
  /** Optional. The description of the persona. */
  description?: string;
  /** Optional. Configuration for how the persona sounds (TTS settings). */
  speechConfig?: EvaluationPersonaSpeechConfig;
  /** Required. An instruction for the agent on how to behave in the evaluation. */
  personality?: string;
}

export const EvaluationPersona: Schema.Schema<EvaluationPersona> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    speechConfig: Schema.optional(EvaluationPersonaSpeechConfig),
    personality: Schema.optional(Schema.String),
  }).annotate({ identifier: "EvaluationPersona" });

export interface EvaluationResultGoldenResult {
  /** Output only. The result of running each turn of the golden conversation. */
  turnReplayResults?: ReadonlyArray<EvaluationResultGoldenResultTurnReplayResult>;
  /** Output only. The results of the evaluation expectations. */
  evaluationExpectationResults?: ReadonlyArray<EvaluationResultEvaluationExpectationResult>;
}

export const EvaluationResultGoldenResult: Schema.Schema<EvaluationResultGoldenResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    turnReplayResults: Schema.optional(
      Schema.Array(EvaluationResultGoldenResultTurnReplayResult),
    ),
    evaluationExpectationResults: Schema.optional(
      Schema.Array(EvaluationResultEvaluationExpectationResult),
    ),
  }).annotate({ identifier: "EvaluationResultGoldenResult" });

export interface EvaluationResult {
  /** Output only. The create time of the changelog of the app version that the evaluation ran against. This is populated if user runs evaluation on latest/draft. */
  changelogCreateTime?: string;
  /** Output only. The method used to run the golden evaluation. */
  goldenRunMethod?:
    | "GOLDEN_RUN_METHOD_UNSPECIFIED"
    | "STABLE"
    | "NAIVE"
    | (string & {});
  /** Output only. The changelog of the app version that the evaluation ran against. This is populated if user runs evaluation on latest/draft. */
  changelog?: string;
  /** Output only. The evaluation thresholds for the result. */
  evaluationMetricsThresholds?: EvaluationMetricsThresholds;
  /** Output only. Deprecated: Use `error_info` instead. Errors encountered during execution. */
  error?: Status;
  /** Output only. Error information for the evaluation result. */
  errorInfo?: EvaluationErrorInfo;
  /** Output only. The app version used to generate the conversation that resulted in this result. Format: `projects/{project}/locations/{location}/apps/{app}/versions/{version}` */
  appVersion?: string;
  /** Output only. The display name of the `app_version` that the evaluation ran against. */
  appVersionDisplayName?: string;
  /** Output only. The evaluation run that produced this result. Format: `projects/{project}/locations/{location}/apps/{app}/evaluationRuns/{evaluationRun}` */
  evaluationRun?: string;
  /** Output only. The configuration used in the evaluation run that resulted in this result. */
  config?: EvaluationConfig;
  /** Output only. The outcome of the evaluation. Only populated if execution_state is COMPLETE. */
  evaluationStatus?:
    | "OUTCOME_UNSPECIFIED"
    | "PASS"
    | "FAIL"
    | "SKIPPED"
    | (string & {});
  /** Output only. The outcome of a scenario evaluation. */
  scenarioResult?: EvaluationResultScenarioResult;
  /** Required. Display name of the Evaluation Result. Unique within an Evaluation. By default, it has the following format: " result - ". */
  displayName?: string;
  /** Output only. The user who initiated the evaluation run that resulted in this result. */
  initiatedBy?: string;
  /** Identifier. The unique identifier of the evaluation result. Format: `projects/{project}/locations/{location}/apps/{app}/evaluations/{evaluation}/results/{result}` */
  name?: string;
  /** Output only. The persona used to generate the conversation for the evaluation result. */
  persona?: EvaluationPersona;
  /** Output only. The state of the evaluation result execution. */
  executionState?:
    | "EXECUTION_STATE_UNSPECIFIED"
    | "RUNNING"
    | "COMPLETED"
    | "ERROR"
    | (string & {});
  /** Output only. Timestamp when the evaluation result was created. */
  createTime?: string;
  /** Output only. The outcome of a golden evaluation. */
  goldenResult?: EvaluationResultGoldenResult;
}

export const EvaluationResult: Schema.Schema<EvaluationResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    changelogCreateTime: Schema.optional(Schema.String),
    goldenRunMethod: Schema.optional(Schema.String),
    changelog: Schema.optional(Schema.String),
    evaluationMetricsThresholds: Schema.optional(EvaluationMetricsThresholds),
    error: Schema.optional(Status),
    errorInfo: Schema.optional(EvaluationErrorInfo),
    appVersion: Schema.optional(Schema.String),
    appVersionDisplayName: Schema.optional(Schema.String),
    evaluationRun: Schema.optional(Schema.String),
    config: Schema.optional(EvaluationConfig),
    evaluationStatus: Schema.optional(Schema.String),
    scenarioResult: Schema.optional(EvaluationResultScenarioResult),
    displayName: Schema.optional(Schema.String),
    initiatedBy: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    persona: Schema.optional(EvaluationPersona),
    executionState: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    goldenResult: Schema.optional(EvaluationResultGoldenResult),
  }).annotate({ identifier: "EvaluationResult" });

export interface EvaluationScenario {
  /** Optional. The maximum number of turns to simulate. If not specified, the simulation will continue until the task is complete. */
  maxTurns?: number;
  /** Required. The rubrics to score the scenario against. */
  rubrics?: ReadonlyArray<string>;
  /** Required. The ScenarioExpectations to evaluate the conversation produced by the user simulation. */
  scenarioExpectations?: ReadonlyArray<EvaluationScenarioExpectation>;
  /** Optional. The evaluation expectations to evaluate the conversation produced by the simulation against. Format: `projects/{project}/locations/{location}/apps/{app}/evaluationExpectations/{evaluationExpectation}` */
  evaluationExpectations?: ReadonlyArray<string>;
  /** Optional. The user facts to be used by the scenario. */
  userFacts?: ReadonlyArray<EvaluationScenarioUserFact>;
  /** Optional. The expected behavior of the user goal. */
  userGoalBehavior?:
    | "USER_GOAL_BEHAVIOR_UNSPECIFIED"
    | "USER_GOAL_SATISFIED"
    | "USER_GOAL_REJECTED"
    | "USER_GOAL_IGNORED"
    | (string & {});
  /** Required. The task to be targeted by the scenario. */
  task?: string;
  /** Optional. Deprecated. Use user_goal_behavior instead. */
  taskCompletionBehavior?:
    | "TASK_COMPLETION_BEHAVIOR_UNSPECIFIED"
    | "TASK_SATISFIED"
    | "TASK_REJECTED"
    | (string & {});
  /** Optional. Variables / Session Parameters as context for the session, keyed by variable names. Members of this struct will override any default values set by the system. Note, these are different from user facts, which are facts known to the user. Variables are parameters known to the agent: i.e. MDN (phone number) passed by the telephony system. */
  variableOverrides?: Record<string, unknown>;
}

export const EvaluationScenario: Schema.Schema<EvaluationScenario> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxTurns: Schema.optional(Schema.Number),
    rubrics: Schema.optional(Schema.Array(Schema.String)),
    scenarioExpectations: Schema.optional(
      Schema.Array(EvaluationScenarioExpectation),
    ),
    evaluationExpectations: Schema.optional(Schema.Array(Schema.String)),
    userFacts: Schema.optional(Schema.Array(EvaluationScenarioUserFact)),
    userGoalBehavior: Schema.optional(Schema.String),
    task: Schema.optional(Schema.String),
    taskCompletionBehavior: Schema.optional(Schema.String),
    variableOverrides: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "EvaluationScenario" });

export interface Span {
  /** Output only. Key-value attributes associated with the span. */
  attributes?: Record<string, unknown>;
  /** Output only. The end time of the span. */
  endTime?: string;
  /** Output only. The name of the span. */
  name?: string;
  /** Output only. The start time of the span. */
  startTime?: string;
  /** Output only. The duration of the span. */
  duration?: string;
  /** Output only. The child spans that are nested under this span. */
  childSpans?: ReadonlyArray<Span>;
}

export const Span: Schema.Schema<Span> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      attributes: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      endTime: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      startTime: Schema.optional(Schema.String),
      duration: Schema.optional(Schema.String),
      childSpans: Schema.optional(Schema.Array(Span)),
    }),
  ).annotate({ identifier: "Span" }) as any as Schema.Schema<Span>;

export interface EvaluationGoldenTurn {
  /** Optional. The root span of the golden turn for processing and maintaining audio information. The uri for the audio must contain audio saved in 16Khz sample rate. */
  rootSpan?: Span;
  /** Required. The steps required to replay a golden conversation. */
  steps?: ReadonlyArray<EvaluationStep>;
  /** Optional. Overrides for turn-level metric thresholds. */
  turnLevelMetricsThresholdsOverride?: EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds;
  /** Optional. Override for turn-level hallucination metric behavior. */
  hallucinationMetricBehaviorOverride?:
    | "HALLUCINATION_METRIC_BEHAVIOR_UNSPECIFIED"
    | "DISABLED"
    | "ENABLED"
    | (string & {});
}

export const EvaluationGoldenTurn: Schema.Schema<EvaluationGoldenTurn> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rootSpan: Schema.optional(Span),
    steps: Schema.optional(Schema.Array(EvaluationStep)),
    turnLevelMetricsThresholdsOverride: Schema.optional(
      EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds,
    ),
    hallucinationMetricBehaviorOverride: Schema.optional(Schema.String),
  }).annotate({ identifier: "EvaluationGoldenTurn" });

export interface EvaluationGolden {
  /** Optional. The evaluation expectations to evaluate the replayed conversation against. Format: `projects/{project}/locations/{location}/apps/{app}/evaluationExpectations/{evaluationExpectation}` */
  evaluationExpectations?: ReadonlyArray<string>;
  /** Required. The golden turns required to replay a golden conversation. */
  turns?: ReadonlyArray<EvaluationGoldenTurn>;
}

export const EvaluationGolden: Schema.Schema<EvaluationGolden> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    evaluationExpectations: Schema.optional(Schema.Array(Schema.String)),
    turns: Schema.optional(Schema.Array(EvaluationGoldenTurn)),
  }).annotate({ identifier: "EvaluationGolden" });

export interface Evaluation {
  /** Optional. User defined tags to categorize the evaluation. */
  tags?: ReadonlyArray<string>;
  /** Optional. User-defined description of the evaluation. */
  description?: string;
  /** Optional. Overrides metrics thresholds for this specific evaluation. */
  evaluationMetricsThresholdOverride?: EvaluationMetricsThresholds;
  /** Output only. The user who last updated the evaluation. */
  lastUpdatedBy?: string;
  /** Output only. The EvaluationRuns that this Evaluation is associated with. */
  evaluationRuns?: ReadonlyArray<string>;
  /** Output only. Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes. */
  etag?: string;
  /** Output only. The aggregated metrics for this evaluation across all runs. */
  aggregatedMetrics?: AggregatedMetrics;
  /** Required. User-defined display name of the evaluation. Unique within an App. */
  displayName?: string;
  /** Output only. The user who created the evaluation. */
  createdBy?: string;
  /** Output only. The last 10 evaluation results for this evaluation. This is only populated if include_last_ten_results is set to true in the ListEvaluationsRequest or GetEvaluationRequest. */
  lastTenResults?: ReadonlyArray<EvaluationResult>;
  /** Output only. The latest evaluation result for this evaluation. */
  lastCompletedResult?: EvaluationResult;
  /** Identifier. The unique identifier of this evaluation. Format: `projects/{project}/locations/{location}/apps/{app}/evaluations/{evaluation}` */
  name?: string;
  /** Optional. The config for a scenario. */
  scenario?: EvaluationScenario;
  /** Output only. Timestamp when the evaluation was created. */
  createTime?: string;
  /** Optional. The golden steps to be evaluated. */
  golden?: EvaluationGolden;
  /** Output only. List of evaluation datasets the evaluation belongs to. Format: `projects/{project}/locations/{location}/apps/{app}/evaluationDatasets/{evaluationDataset}` */
  evaluationDatasets?: ReadonlyArray<string>;
  /** Optional. Overrides metrics config for this specific evaluation. */
  evaluationMetricsConfigOverride?: EvaluationMetricsConfig;
  /** Output only. Timestamp when the evaluation was last updated. */
  updateTime?: string;
  /** Output only. Whether the evaluation is invalid. This can happen if an evaluation is referencing a tool, toolset, or agent that has since been deleted. */
  invalid?: boolean;
}

export const Evaluation: Schema.Schema<Evaluation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tags: Schema.optional(Schema.Array(Schema.String)),
    description: Schema.optional(Schema.String),
    evaluationMetricsThresholdOverride: Schema.optional(
      EvaluationMetricsThresholds,
    ),
    lastUpdatedBy: Schema.optional(Schema.String),
    evaluationRuns: Schema.optional(Schema.Array(Schema.String)),
    etag: Schema.optional(Schema.String),
    aggregatedMetrics: Schema.optional(AggregatedMetrics),
    displayName: Schema.optional(Schema.String),
    createdBy: Schema.optional(Schema.String),
    lastTenResults: Schema.optional(Schema.Array(EvaluationResult)),
    lastCompletedResult: Schema.optional(EvaluationResult),
    name: Schema.optional(Schema.String),
    scenario: Schema.optional(EvaluationScenario),
    createTime: Schema.optional(Schema.String),
    golden: Schema.optional(EvaluationGolden),
    evaluationDatasets: Schema.optional(Schema.Array(Schema.String)),
    evaluationMetricsConfigOverride: Schema.optional(EvaluationMetricsConfig),
    updateTime: Schema.optional(Schema.String),
    invalid: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Evaluation" });

export interface GenerateAppResourceResponseEvaluations {
  /** The list of generated evaluations. */
  evaluations?: ReadonlyArray<Evaluation>;
}

export const GenerateAppResourceResponseEvaluations: Schema.Schema<GenerateAppResourceResponseEvaluations> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    evaluations: Schema.optional(Schema.Array(Evaluation)),
  }).annotate({ identifier: "GenerateAppResourceResponseEvaluations" });

export interface Location {
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Location" });

export interface ListLocationsResponse {
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListLocationsResponse: Schema.Schema<ListLocationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locations: Schema.optional(Schema.Array(Location)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListLocationsResponse" });

export interface ScheduledEvaluationRunSchedulingConfig {
  /** Required. The frequency with which to run the eval */
  frequency?:
    | "FREQUENCY_UNSPECIFIED"
    | "NONE"
    | "DAILY"
    | "WEEKLY"
    | "BIWEEKLY"
    | (string & {});
  /** Optional. The days of the week to run the eval. Applicable only for Weekly and Biweekly frequencies. 1 is Monday, 2 is Tuesday, ..., 7 is Sunday. */
  daysOfWeek?: ReadonlyArray<number>;
  /** Required. Timestamp when the eval should start. */
  startTime?: string;
}

export const ScheduledEvaluationRunSchedulingConfig: Schema.Schema<ScheduledEvaluationRunSchedulingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    frequency: Schema.optional(Schema.String),
    daysOfWeek: Schema.optional(Schema.Array(Schema.Number)),
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ScheduledEvaluationRunSchedulingConfig" });

export interface RunEvaluationRequest {
  /** Optional. The display name of the evaluation run. */
  displayName?: string;
  /** Optional. The app version to evaluate. Format: `projects/{project}/locations/{location}/apps/{app}/versions/{version}` */
  appVersion?: string;
  /** Optional. The number of times to run the evaluation. If not set, the default value is 1 per golden, and 5 per scenario. */
  runCount?: number;
  /** Optional. Configuration for running the optimization step after the evaluation run. If not set, the optimization step will not be run. */
  optimizationConfig?: OptimizationConfig;
  /** Optional. The method to run the evaluation if it is a golden evaluation. If not set, default to STABLE. */
  goldenRunMethod?:
    | "GOLDEN_RUN_METHOD_UNSPECIFIED"
    | "STABLE"
    | "NAIVE"
    | (string & {});
  /** Optional. Whether to generate a latency report for the evaluation run. */
  generateLatencyReport?: boolean;
  /** Optional. The configuration to use for the run. */
  config?: EvaluationConfig;
  /** Optional. The configuration to use for the run per persona. */
  personaRunConfigs?: ReadonlyArray<PersonaRunConfig>;
  /** Optional. The resource name of the `ScheduledEvaluationRun` that is triggering this evaluation run. If this field is set, the `scheduled_evaluation_run` field on the created `EvaluationRun` resource will be populated from this value. Format: `projects/{project}/locations/{location}/apps/{app}/scheduledEvaluationRuns/{scheduled_evaluation_run}` */
  scheduledEvaluationRun?: string;
  /** Required. The app to evaluate. Format: `projects/{project}/locations/{location}/apps/{app}` */
  app?: string;
  /** Optional. List of evaluations to run. Format: `projects/{project}/locations/{location}/apps/{app}/evaluations/{evaluation}` */
  evaluations?: ReadonlyArray<string>;
  /** Optional. An evaluation dataset to run. Format: `projects/{project}/locations/{location}/apps/{app}/evaluationDatasets/{evaluationDataset}` */
  evaluationDataset?: string;
}

export const RunEvaluationRequest: Schema.Schema<RunEvaluationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    appVersion: Schema.optional(Schema.String),
    runCount: Schema.optional(Schema.Number),
    optimizationConfig: Schema.optional(OptimizationConfig),
    goldenRunMethod: Schema.optional(Schema.String),
    generateLatencyReport: Schema.optional(Schema.Boolean),
    config: Schema.optional(EvaluationConfig),
    personaRunConfigs: Schema.optional(Schema.Array(PersonaRunConfig)),
    scheduledEvaluationRun: Schema.optional(Schema.String),
    app: Schema.optional(Schema.String),
    evaluations: Schema.optional(Schema.Array(Schema.String)),
    evaluationDataset: Schema.optional(Schema.String),
  }).annotate({ identifier: "RunEvaluationRequest" });

export interface ScheduledEvaluationRun {
  /** Output only. The total number of times this run has been executed */
  totalExecutions?: number;
  /** Output only. The user who last updated the evaluation. */
  lastUpdatedBy?: string;
  /** Output only. Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes. */
  etag?: string;
  /** Optional. User-defined description of the scheduled evaluation run. */
  description?: string;
  /** Output only. The next time this is scheduled to execute */
  nextScheduledExecutionTime?: string;
  /** Required. Configuration for the timing and frequency with which to execute the evaluations. */
  schedulingConfig?: ScheduledEvaluationRunSchedulingConfig;
  /** Output only. Timestamp when the evaluation was last updated. */
  updateTime?: string;
  /** Output only. The last successful EvaluationRun of this scheduled execution. Format: `projects/{project}/locations/{location}/apps/{app}/evaluationRuns/{evaluationRun}` */
  lastCompletedRun?: string;
  /** Output only. Timestamp when the scheduled evaluation run was created. */
  createTime?: string;
  /** Required. User-defined display name of the scheduled evaluation run config. */
  displayName?: string;
  /** Required. The RunEvaluationRequest to schedule */
  request?: RunEvaluationRequest;
  /** Output only. The user who created the scheduled evaluation run. */
  createdBy?: string;
  /** Identifier. The unique identifier of the scheduled evaluation run config. Format: projects/{projectId}/locations/{locationId}/apps/{appId}/scheduledEvaluationRuns/{scheduledEvaluationRunId} */
  name?: string;
  /** Optional. Whether this config is active */
  active?: boolean;
}

export const ScheduledEvaluationRun: Schema.Schema<ScheduledEvaluationRun> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalExecutions: Schema.optional(Schema.Number),
    lastUpdatedBy: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    nextScheduledExecutionTime: Schema.optional(Schema.String),
    schedulingConfig: Schema.optional(ScheduledEvaluationRunSchedulingConfig),
    updateTime: Schema.optional(Schema.String),
    lastCompletedRun: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    request: Schema.optional(RunEvaluationRequest),
    createdBy: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    active: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ScheduledEvaluationRun" });

export interface RetrieveToolSchemaResponse {
  /** The toolset tool that the schema is for. */
  toolsetTool?: ToolsetTool;
  /** The schema of the tool output parameters. */
  outputSchema?: Ces_Schema;
  /** The name of the tool that the schema is for. Format: `projects/{project}/locations/{location}/apps/{app}/tools/{tool}` */
  tool?: string;
  /** The schema of the tool input parameters. */
  inputSchema?: Ces_Schema;
}

export const RetrieveToolSchemaResponse: Schema.Schema<RetrieveToolSchemaResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolsetTool: Schema.optional(ToolsetTool),
    outputSchema: Schema.optional(Ces_Schema),
    tool: Schema.optional(Schema.String),
    inputSchema: Schema.optional(Ces_Schema),
  }).annotate({ identifier: "RetrieveToolSchemaResponse" });

export interface ExportAppResponse {
  /** App folder compressed as a zip file. */
  appContent?: string;
  /** The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to which the app was exported. */
  appUri?: string;
}

export const ExportAppResponse: Schema.Schema<ExportAppResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appContent: Schema.optional(Schema.String),
    appUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExportAppResponse" });

export interface TestPersonaVoiceRequest {
  /** Required. The text to test the voice for. */
  text?: string;
  /** Required. The persona ID to test the voice for. Also accepts "default". */
  personaId?: string;
}

export const TestPersonaVoiceRequest: Schema.Schema<TestPersonaVoiceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    personaId: Schema.optional(Schema.String),
  }).annotate({ identifier: "TestPersonaVoiceRequest" });

export interface ExportOptions {
  /** Optional. The format to export the evaluation results in. Defaults to JSON if not specified. */
  exportFormat?: "EXPORT_FORMAT_UNSPECIFIED" | "JSON" | "YAML" | (string & {});
  /** Optional. The Google Cloud Storage URI to write the exported Evaluation Results to. */
  gcsUri?: string;
}

export const ExportOptions: Schema.Schema<ExportOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exportFormat: Schema.optional(Schema.String),
    gcsUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExportOptions" });

export interface SessionOutputDiagnosticInfo {
  /** A trace of the entire request processing, represented as a root span. This span can contain nested child spans for specific operations. */
  rootSpan?: Span;
  /** List of the messages that happened during the processing. */
  messages?: ReadonlyArray<Message>;
}

export const SessionOutputDiagnosticInfo: Schema.Schema<SessionOutputDiagnosticInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rootSpan: Schema.optional(Span),
    messages: Schema.optional(Schema.Array(Message)),
  }).annotate({ identifier: "SessionOutputDiagnosticInfo" });

export interface EndSession {
  /** Optional. Provides additional information about the end session signal, such as the reason for ending the session. */
  metadata?: Record<string, unknown>;
}

export const EndSession: Schema.Schema<EndSession> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "EndSession" });

export interface CitationsCitedChunk {
  /** Title of the cited document. */
  title?: string;
  /** Text used for citation. */
  text?: string;
  /** URI used for citation. */
  uri?: string;
}

export const CitationsCitedChunk: Schema.Schema<CitationsCitedChunk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "CitationsCitedChunk" });

export interface Citations {
  /** List of cited pieces of information. */
  citedChunks?: ReadonlyArray<CitationsCitedChunk>;
}

export const Citations: Schema.Schema<Citations> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    citedChunks: Schema.optional(Schema.Array(CitationsCitedChunk)),
  }).annotate({ identifier: "Citations" });

export interface SessionOutput {
  /** If true, the CES agent has detected the end of the current conversation turn and will provide no further output for this turn. */
  turnCompleted?: boolean;
  /** Indicates the sequential order of conversation turn to which this output belongs to, starting from 1. */
  turnIndex?: number;
  /** The suggestions returned from Google Search as a result of invoking the GoogleSearchTool. */
  googleSearchSuggestions?: GoogleSearchSuggestions;
  /** Optional. Diagnostic information contains execution details during the processing of the input. Only populated in the last SessionOutput (with `turn_completed=true`) for each turn. */
  diagnosticInfo?: SessionOutputDiagnosticInfo;
  /** Output audio from the CES agent. */
  audio?: string;
  /** Indicates the session has ended. */
  endSession?: EndSession;
  /** Request for the client to execute the tools. */
  toolCalls?: ToolCalls;
  /** Output text from the CES agent. */
  text?: string;
  /** Citations that provide the source information for the agent's generated text. */
  citations?: Citations;
  /** Custom payload with structured output from the CES agent. */
  payload?: Record<string, unknown>;
}

export const SessionOutput: Schema.Schema<SessionOutput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    turnCompleted: Schema.optional(Schema.Boolean),
    turnIndex: Schema.optional(Schema.Number),
    googleSearchSuggestions: Schema.optional(GoogleSearchSuggestions),
    diagnosticInfo: Schema.optional(SessionOutputDiagnosticInfo),
    audio: Schema.optional(Schema.String),
    endSession: Schema.optional(EndSession),
    toolCalls: Schema.optional(ToolCalls),
    text: Schema.optional(Schema.String),
    citations: Schema.optional(Citations),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "SessionOutput" });

export interface RunSessionResponse {
  /** Outputs for the session. */
  outputs?: ReadonlyArray<SessionOutput>;
}

export const RunSessionResponse: Schema.Schema<RunSessionResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputs: Schema.optional(Schema.Array(SessionOutput)),
  }).annotate({ identifier: "RunSessionResponse" });

export interface ChannelProfileWebWidgetConfigSecuritySettings {
  /** Optional. Indicates whether public access to the web widget is enabled. If `true`, the web widget will be publicly accessible. If `false`, the web widget must be integrated with your own authentication and authorization system to return valid credentials for accessing the CES agent. */
  enablePublicAccess?: boolean;
  /** Optional. Indicates whether origin check for the web widget is enabled. If `true`, the web widget will check the origin of the website that loads the web widget and only allow it to be loaded in the same origin or any of the allowed origins. */
  enableOriginCheck?: boolean;
  /** Optional. The origins that are allowed to host the web widget. An origin is defined by RFC 6454. If empty, all origins are allowed. A maximum of 100 origins is allowed. Example: "https://example.com" */
  allowedOrigins?: ReadonlyArray<string>;
  /** Optional. Indicates whether reCAPTCHA verification for the web widget is enabled. */
  enableRecaptcha?: boolean;
}

export const ChannelProfileWebWidgetConfigSecuritySettings: Schema.Schema<ChannelProfileWebWidgetConfigSecuritySettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enablePublicAccess: Schema.optional(Schema.Boolean),
    enableOriginCheck: Schema.optional(Schema.Boolean),
    allowedOrigins: Schema.optional(Schema.Array(Schema.String)),
    enableRecaptcha: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ChannelProfileWebWidgetConfigSecuritySettings" });

export interface BatchDeleteConversationsRequest {
  /** Required. The resource names of the conversations to delete. */
  conversations?: ReadonlyArray<string>;
}

export const BatchDeleteConversationsRequest: Schema.Schema<BatchDeleteConversationsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversations: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BatchDeleteConversationsRequest" });

export interface Example {
  /** Required. Display name of the example. */
  displayName?: string;
  /** Optional. Human-readable description of the example. */
  description?: string;
  /** Identifier. The unique identifier of the example. Format: `projects/{project}/locations/{location}/apps/{app}/examples/{example}` */
  name?: string;
  /** Output only. Timestamp when the example was created. */
  createTime?: string;
  /** Optional. The collection of messages that make up the conversation. */
  messages?: ReadonlyArray<Message>;
  /** Optional. The agent that initially handles the conversation. If not specified, the example represents a conversation that is handled by the root agent. Format: `projects/{project}/locations/{location}/apps/{app}/agents/{agent}` */
  entryAgent?: string;
  /** Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes. */
  etag?: string;
  /** Output only. Timestamp when the example was last updated. */
  updateTime?: string;
  /** Output only. The example may become invalid if referencing resources are deleted. Invalid examples will not be used as few-shot examples. */
  invalid?: boolean;
}

export const Example: Schema.Schema<Example> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    messages: Schema.optional(Schema.Array(Message)),
    entryAgent: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    invalid: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Example" });

export interface ListExamplesResponse {
  /** The list of examples. */
  examples?: ReadonlyArray<Example>;
  /** A token that can be sent as ListExamplesRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListExamplesResponse: Schema.Schema<ListExamplesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    examples: Schema.optional(Schema.Array(Example)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListExamplesResponse" });

export interface AgentLlmAgent {}

export const AgentLlmAgent: Schema.Schema<AgentLlmAgent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AgentLlmAgent",
  });

export interface GenerateAppResourceResponseTools {
  /** The list of tools generated by the LLM assistant. */
  tools?: ReadonlyArray<Tool>;
}

export const GenerateAppResourceResponseTools: Schema.Schema<GenerateAppResourceResponseTools> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tools: Schema.optional(Schema.Array(Tool)),
  }).annotate({ identifier: "GenerateAppResourceResponseTools" });

export interface AgentAgentToolset {
  /** Required. The resource name of the toolset. Format: `projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}` */
  toolset?: string;
  /** Optional. The tools IDs to filter the toolset. */
  toolIds?: ReadonlyArray<string>;
}

export const AgentAgentToolset: Schema.Schema<AgentAgentToolset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolset: Schema.optional(Schema.String),
    toolIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AgentAgentToolset" });

export interface PythonCodeCondition {
  /** Required. The python code to execute. */
  pythonCode?: string;
}

export const PythonCodeCondition: Schema.Schema<PythonCodeCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pythonCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "PythonCodeCondition" });

export interface ExpressionCondition {
  /** Required. The string representation of cloud.api.Expression condition. */
  expression?: string;
}

export const ExpressionCondition: Schema.Schema<ExpressionCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExpressionCondition" });

export interface TransferRuleDeterministicTransfer {
  /** Optional. A rule that uses Python code block to evaluate the conditions. If the condition evaluates to true, the transfer occurs. */
  pythonCodeCondition?: PythonCodeCondition;
  /** Optional. A rule that evaluates a session state condition. If the condition evaluates to true, the transfer occurs. */
  expressionCondition?: ExpressionCondition;
}

export const TransferRuleDeterministicTransfer: Schema.Schema<TransferRuleDeterministicTransfer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pythonCodeCondition: Schema.optional(PythonCodeCondition),
    expressionCondition: Schema.optional(ExpressionCondition),
  }).annotate({ identifier: "TransferRuleDeterministicTransfer" });

export interface TransferRuleDisablePlannerTransfer {
  /** Required. If the condition evaluates to true, planner will not be allowed to transfer to the target agent. */
  expressionCondition?: ExpressionCondition;
}

export const TransferRuleDisablePlannerTransfer: Schema.Schema<TransferRuleDisablePlannerTransfer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expressionCondition: Schema.optional(ExpressionCondition),
  }).annotate({ identifier: "TransferRuleDisablePlannerTransfer" });

export interface TransferRule {
  /** Optional. A rule that immediately transfers to the target agent when the condition is met. */
  deterministicTransfer?: TransferRuleDeterministicTransfer;
  /** Required. The direction of the transfer. */
  direction?:
    | "DIRECTION_UNSPECIFIED"
    | "PARENT_TO_CHILD"
    | "CHILD_TO_PARENT"
    | (string & {});
  /** Optional. Rule that prevents the planner from transferring to the target agent. */
  disablePlannerTransfer?: TransferRuleDisablePlannerTransfer;
  /** Required. The resource name of the child agent the rule applies to. Format: `projects/{project}/locations/{location}/apps/{app}/agents/{agent}` */
  childAgent?: string;
}

export const TransferRule: Schema.Schema<TransferRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deterministicTransfer: Schema.optional(TransferRuleDeterministicTransfer),
    direction: Schema.optional(Schema.String),
    disablePlannerTransfer: Schema.optional(TransferRuleDisablePlannerTransfer),
    childAgent: Schema.optional(Schema.String),
  }).annotate({ identifier: "TransferRule" });

export interface Callback {
  /** Required. The python code to execute for the callback. */
  pythonCode?: string;
  /** Optional. Human-readable description of the callback. */
  description?: string;
  /** Optional. Whether the callback is disabled. Disabled callbacks are ignored by the agent. */
  disabled?: boolean;
  /** Optional. If enabled, the callback will also be executed on intermediate model outputs. This setting only affects after model callback. **ENABLE WITH CAUTION**. Typically after model callback only needs to be executed after receiving all model responses. Enabling proactive execution may have negative implication on the execution cost and latency, and should only be enabled in rare situations. */
  proactiveExecutionEnabled?: boolean;
}

export const Callback: Schema.Schema<Callback> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pythonCode: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    disabled: Schema.optional(Schema.Boolean),
    proactiveExecutionEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Callback" });

export interface AgentRemoteDialogflowAgent {
  /** Optional. Indicates whether to respect the message-level interruption settings configured in the Dialogflow agent. * If false: all response messages from the Dialogflow agent follow the app-level barge-in settings. * If true: only response messages with [`allow_playback_interruption`](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#text) set to true will be interruptable, all other messages follow the app-level barge-in settings. */
  respectResponseInterruptionSettings?: boolean;
  /** Required. The [Dialogflow](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent) agent resource name. Format: `projects/{project}/locations/{location}/agents/{agent}` */
  agent?: string;
  /** Optional. The flow ID of the flow in the Dialogflow agent. */
  flowId?: string;
  /** Optional. The name of the variable that contains the language code to be used for the Dialogflow session. If unspecified, the default language code of the Dialogflow agent will be used. */
  languageCodeVariable?: string;
  /** Optional. The mapping of the app variables names to the Dialogflow session parameters names to be sent to the Dialogflow agent as input. */
  inputVariableMapping?: Record<string, string>;
  /** Optional. The mapping of the Dialogflow session parameters names to the app variables names to be sent back to the CES agent after the Dialogflow agent execution ends. */
  outputVariableMapping?: Record<string, string>;
  /** Optional. The environment ID of the Dialogflow agent to be used for the agent execution. If not specified, the draft environment will be used. */
  environmentId?: string;
}

export const AgentRemoteDialogflowAgent: Schema.Schema<AgentRemoteDialogflowAgent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    respectResponseInterruptionSettings: Schema.optional(Schema.Boolean),
    agent: Schema.optional(Schema.String),
    flowId: Schema.optional(Schema.String),
    languageCodeVariable: Schema.optional(Schema.String),
    inputVariableMapping: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    outputVariableMapping: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    environmentId: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentRemoteDialogflowAgent" });

export interface Agent {
  /** Output only. Timestamp when the agent was last updated. */
  updateTime?: string;
  /** Optional. List of toolsets for the agent. */
  toolsets?: ReadonlyArray<AgentAgentToolset>;
  /** Optional. Agent transfer rules. If multiple rules match, the first one in the list will be used. */
  transferRules?: ReadonlyArray<TransferRule>;
  /** Optional. List of guardrails for the agent. Format: `projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}` */
  guardrails?: ReadonlyArray<string>;
  /** Optional. Instructions for the LLM model to guide the agent's behavior. */
  instruction?: string;
  /** Optional. The callbacks to execute after the model is called. If there are multiple calls to the model, the callback will be executed multiple times. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped. */
  afterModelCallbacks?: ReadonlyArray<Callback>;
  /** Output only. Timestamp when the agent was created. */
  createTime?: string;
  /** Identifier. The unique identifier of the agent. Format: `projects/{project}/locations/{location}/apps/{app}/agents/{agent}` */
  name?: string;
  /** Optional. The callbacks to execute after the agent is called. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped. */
  afterAgentCallbacks?: ReadonlyArray<Callback>;
  /** Output only. If the agent is generated by the LLM assistant, this field contains a descriptive summary of the generation. */
  generatedSummary?: string;
  /** Required. Display name of the agent. */
  displayName?: string;
  /** Optional. List of available tools for the agent. Format: `projects/{project}/locations/{location}/apps/{app}/tools/{tool}` */
  tools?: ReadonlyArray<string>;
  /** Output only. Misconfigurations or errors in the agent that may affect agent quality. */
  validationErrors?: ReadonlyArray<string>;
  /** Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes. */
  etag?: string;
  /** Optional. The callbacks to execute before the model is called. If there are multiple calls to the model, the callback will be executed multiple times. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped. */
  beforeModelCallbacks?: ReadonlyArray<Callback>;
  /** Optional. List of child agents in the agent tree. Format: `projects/{project}/locations/{location}/apps/{app}/agents/{agent}` */
  childAgents?: ReadonlyArray<string>;
  /** Optional. The callbacks to execute after the tool is invoked. If there are multiple tool invocations, the callback will be executed multiple times. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped. */
  afterToolCallbacks?: ReadonlyArray<Callback>;
  /** Optional. The callbacks to execute before the agent is called. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped. */
  beforeAgentCallbacks?: ReadonlyArray<Callback>;
  /** Optional. The callbacks to execute before the tool is invoked. If there are multiple tool invocations, the callback will be executed multiple times. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped. */
  beforeToolCallbacks?: ReadonlyArray<Callback>;
  /** Optional. The default agent type. */
  llmAgent?: AgentLlmAgent;
  /** Optional. The remote [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents) agent to be used for the agent execution. If this field is set, all other agent level properties will be ignored. Note: If the Dialogflow agent is in a different project from the app, you should grant `roles/dialogflow.client` to the CES service agent `service-@gcp-sa-ces.iam.gserviceaccount.com`. */
  remoteDialogflowAgent?: AgentRemoteDialogflowAgent;
  /** Optional. Human-readable description of the agent. */
  description?: string;
  /** Optional. Configurations for the LLM model. */
  modelSettings?: ModelSettings;
}

export const Agent: Schema.Schema<Agent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    toolsets: Schema.optional(Schema.Array(AgentAgentToolset)),
    transferRules: Schema.optional(Schema.Array(TransferRule)),
    guardrails: Schema.optional(Schema.Array(Schema.String)),
    instruction: Schema.optional(Schema.String),
    afterModelCallbacks: Schema.optional(Schema.Array(Callback)),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    afterAgentCallbacks: Schema.optional(Schema.Array(Callback)),
    generatedSummary: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    tools: Schema.optional(Schema.Array(Schema.String)),
    validationErrors: Schema.optional(Schema.Array(Schema.String)),
    etag: Schema.optional(Schema.String),
    beforeModelCallbacks: Schema.optional(Schema.Array(Callback)),
    childAgents: Schema.optional(Schema.Array(Schema.String)),
    afterToolCallbacks: Schema.optional(Schema.Array(Callback)),
    beforeAgentCallbacks: Schema.optional(Schema.Array(Callback)),
    beforeToolCallbacks: Schema.optional(Schema.Array(Callback)),
    llmAgent: Schema.optional(AgentLlmAgent),
    remoteDialogflowAgent: Schema.optional(AgentRemoteDialogflowAgent),
    description: Schema.optional(Schema.String),
    modelSettings: Schema.optional(ModelSettings),
  }).annotate({ identifier: "Agent" });

export interface McpToolDefinition {
  /** Output only. The schema of the input arguments of the MCP tool. */
  inputSchema?: Ces_Schema;
  /** Output only. The description of the MCP tool. This can be overridden by `description_override` in `McpToolOverride`. */
  description?: string;
  /** Output only. The schema of the output arguments of the MCP tool. */
  outputSchema?: Ces_Schema;
}

export const McpToolDefinition: Schema.Schema<McpToolDefinition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputSchema: Schema.optional(Ces_Schema),
    description: Schema.optional(Schema.String),
    outputSchema: Schema.optional(Ces_Schema),
  }).annotate({ identifier: "McpToolDefinition" });

export interface McpToolOverride {
  /** Required. The original name of the tool as it is emitted by the MCP server. */
  tool?: string;
  /** Optional. If present, this tool uses this name in the Agent instead of the original name. This is primarily used as an alias if the MCP server offers poorly named tools. */
  nameOverride?: string;
  /** Output only. If present, this tool is "Pinned" and uses the snapshot values as fallbacks if the server becomes temporarily unavailable or if no Override is present. */
  snapshot?: McpToolDefinition;
  /** Optional. If present, this tool uses this description instead of the original description from the server. */
  descriptionOverride?: string;
}

export const McpToolOverride: Schema.Schema<McpToolOverride> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tool: Schema.optional(Schema.String),
    nameOverride: Schema.optional(Schema.String),
    snapshot: Schema.optional(McpToolDefinition),
    descriptionOverride: Schema.optional(Schema.String),
  }).annotate({ identifier: "McpToolOverride" });

export interface McpToolset {
  /** Optional. Service Directory configuration for VPC-SC, used to resolve service names within a perimeter. */
  serviceDirectoryConfig?: ServiceDirectoryConfig;
  /** Optional. Overrides for individual tools within this toolset. This allows overriding specific details like descriptions, names, or pinning the tools' states so they aren't fully dynamic. */
  toolOverrides?: ReadonlyArray<McpToolOverride>;
  /** Optional. The custom headers to send in the request to the MCP server. The values must be in the format `$context.variables.` and can be set in the session variables. See https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/tool/open-api#openapi-injection for more details. */
  customHeaders?: Record<string, string>;
  /** Optional. Authentication information required to access tools and execute a tool against the MCP server. For bearer token authentication, the token applies only to tool execution, not to listing tools. This requires that tools can be listed without authentication. */
  apiAuthentication?: ApiAuthentication;
  /** Required. The address of the MCP server, for example, "https://example.com/mcp/". If the server is built with the MCP SDK, the url should be suffixed with "/mcp/". Only Streamable HTTP transport based servers are supported. See https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#streamable-http for more details. */
  serverAddress?: string;
  /** Optional. The TLS configuration. Includes the custom server certificates that the client should trust. */
  tlsConfig?: TlsConfig;
}

export const McpToolset: Schema.Schema<McpToolset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceDirectoryConfig: Schema.optional(ServiceDirectoryConfig),
    toolOverrides: Schema.optional(Schema.Array(McpToolOverride)),
    customHeaders: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    apiAuthentication: Schema.optional(ApiAuthentication),
    serverAddress: Schema.optional(Schema.String),
    tlsConfig: Schema.optional(TlsConfig),
  }).annotate({ identifier: "McpToolset" });

export interface ConnectorToolset {
  /** Required. The full resource name of the referenced Integration Connectors Connection. Format: `projects/{project}/locations/{location}/connections/{connection}` */
  connection?: string;
  /** Required. The list of connector actions/entity operations to generate tools for. */
  connectorActions?: ReadonlyArray<Action>;
  /** Optional. Configures how authentication is handled in Integration Connectors. By default, an admin authentication is passed in the Integration Connectors API requests. You can override it with a different end-user authentication config. **Note**: The Connection must have authentication override enabled in order to specify an EUC configuration here - otherwise, the Toolset creation will fail. See: https://cloud.google.com/application-integration/docs/configure-connectors-task#configure-authentication-override */
  authConfig?: EndUserAuthConfig;
}

export const ConnectorToolset: Schema.Schema<ConnectorToolset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connection: Schema.optional(Schema.String),
    connectorActions: Schema.optional(Schema.Array(Action)),
    authConfig: Schema.optional(EndUserAuthConfig),
  }).annotate({ identifier: "ConnectorToolset" });

export interface OpenApiToolset {
  /** Optional. Service Directory configuration. */
  serviceDirectoryConfig?: ServiceDirectoryConfig;
  /** Optional. The server URL of the Open API schema. This field is only set in toolsets in the environment dependencies during the export process if the schema contains a server url. During the import process, if this url is present in the environment dependencies and the schema has the $env_var placeholder, it will replace the placeholder in the schema. */
  url?: string;
  /** Optional. If true, the agent will ignore unknown fields in the API response for all operations defined in the OpenAPI schema. */
  ignoreUnknownFields?: boolean;
  /** Required. The OpenAPI schema of the toolset. */
  openApiSchema?: string;
  /** Optional. The TLS configuration. Includes the custom server certificates */
  tlsConfig?: TlsConfig;
  /** Optional. Authentication information required by the API. */
  apiAuthentication?: ApiAuthentication;
}

export const OpenApiToolset: Schema.Schema<OpenApiToolset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceDirectoryConfig: Schema.optional(ServiceDirectoryConfig),
    url: Schema.optional(Schema.String),
    ignoreUnknownFields: Schema.optional(Schema.Boolean),
    openApiSchema: Schema.optional(Schema.String),
    tlsConfig: Schema.optional(TlsConfig),
    apiAuthentication: Schema.optional(ApiAuthentication),
  }).annotate({ identifier: "OpenApiToolset" });

export interface Toolset {
  /** ETag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes. */
  etag?: string;
  /** Optional. Configuration for tools behavior in fake mode. */
  toolFakeConfig?: ToolFakeConfig;
  /** Optional. A toolset that contains a list of tools that are offered by the MCP server. */
  mcpToolset?: McpToolset;
  /** Optional. A toolset that generates tools from an Integration Connectors Connection. */
  connectorToolset?: ConnectorToolset;
  /** Output only. Timestamp when the toolset was last updated. */
  updateTime?: string;
  /** Identifier. The unique identifier of the toolset. Format: `projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}` */
  name?: string;
  /** Optional. The display name of the toolset. Must be unique within the same app. */
  displayName?: string;
  /** Optional. The description of the toolset. */
  description?: string;
  /** Optional. The execution type of the tools in the toolset. */
  executionType?:
    | "EXECUTION_TYPE_UNSPECIFIED"
    | "SYNCHRONOUS"
    | "ASYNCHRONOUS"
    | (string & {});
  /** Optional. A toolset that contains a list of tools that are defined by an OpenAPI schema. */
  openApiToolset?: OpenApiToolset;
  /** Output only. Timestamp when the toolset was created. */
  createTime?: string;
}

export const Toolset: Schema.Schema<Toolset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    toolFakeConfig: Schema.optional(ToolFakeConfig),
    mcpToolset: Schema.optional(McpToolset),
    connectorToolset: Schema.optional(ConnectorToolset),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    executionType: Schema.optional(Schema.String),
    openApiToolset: Schema.optional(OpenApiToolset),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Toolset" });

export interface QualityReportIssue {
  /** Optional. How many times this issue occurred. */
  occurrenceCount?: number;
  /** Optional. Description of the issue found. */
  description?: string;
  /** Optional. Proposed solution to fix the issue by modifying instructions or tools. */
  proposedSolution?: string;
}

export const QualityReportIssue: Schema.Schema<QualityReportIssue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    occurrenceCount: Schema.optional(Schema.Number),
    description: Schema.optional(Schema.String),
    proposedSolution: Schema.optional(Schema.String),
  }).annotate({ identifier: "QualityReportIssue" });

export interface QualityReportAgentIssues {
  /** Optional. The name of the agent to which the issues are related. Format: `projects/{project}/locations/{location}/apps/{app}/agents/{agent}` */
  agent?: string;
  /** Optional. List of issues found for this agent. */
  issues?: ReadonlyArray<QualityReportIssue>;
}

export const QualityReportAgentIssues: Schema.Schema<QualityReportAgentIssues> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agent: Schema.optional(Schema.String),
    issues: Schema.optional(Schema.Array(QualityReportIssue)),
  }).annotate({ identifier: "QualityReportAgentIssues" });

export interface QualityReport {
  /** Optional. A list of evaluation runs used to generate the quality report. Format: `projects/{project}/locations/{location}/evaluationRuns/{evaluationRun}`. */
  evaluationRuns?: ReadonlyArray<string>;
  /** Optional. General issues not specific to any agent. */
  generalIssues?: ReadonlyArray<QualityReportIssue>;
  /** Optional. The issues grouped by agent. */
  issues?: ReadonlyArray<QualityReportAgentIssues>;
}

export const QualityReport: Schema.Schema<QualityReport> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    evaluationRuns: Schema.optional(Schema.Array(Schema.String)),
    generalIssues: Schema.optional(Schema.Array(QualityReportIssue)),
    issues: Schema.optional(Schema.Array(QualityReportAgentIssues)),
  }).annotate({ identifier: "QualityReport" });

export interface GenerateAppResourceResponseGenerateResultInfo {
  /** An explanation of the changes in the generated resource. */
  explanation?: string;
}

export const GenerateAppResourceResponseGenerateResultInfo: Schema.Schema<GenerateAppResourceResponseGenerateResultInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    explanation: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerateAppResourceResponseGenerateResultInfo" });

export interface VpcScSettings {
  /** Optional. The allowed HTTP(s) origins that OpenAPI tools in the App are able to directly call when VPC Service Controls are enabled. These strings must match the origin exactly, including the port if specified. For example, "https://example.com" or "https://example.com:443". This list does not yet apply to Python tools that may make direct HTTP calls. */
  allowedOrigins?: ReadonlyArray<string>;
}

export const VpcScSettings: Schema.Schema<VpcScSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowedOrigins: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "VpcScSettings" });

export interface AppVariableDeclaration {
  /** Required. The description of the variable. */
  description?: string;
  /** Required. The name of the variable. The name must start with a letter or underscore and contain only letters, numbers, or underscores. */
  name?: string;
  /** Required. The schema of the variable. */
  schema?: Ces_Schema;
}

export const AppVariableDeclaration: Schema.Schema<AppVariableDeclaration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    schema: Schema.optional(Ces_Schema),
  }).annotate({ identifier: "AppVariableDeclaration" });

export interface ErrorHandlingSettingsEndSessionConfig {
  /** Optional. Whether to escalate the session in EndSession. If session is escalated, metadata in EndSession will contain `session_escalated = true`. See https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/deploy/google-telephony-platform#transfer_a_call_to_a_human_agent for details. */
  escalateSession?: boolean;
}

export const ErrorHandlingSettingsEndSessionConfig: Schema.Schema<ErrorHandlingSettingsEndSessionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    escalateSession: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ErrorHandlingSettingsEndSessionConfig" });

export interface ErrorHandlingSettings {
  /** Optional. The strategy to use for error handling. */
  errorHandlingStrategy?:
    | "ERROR_HANDLING_STRATEGY_UNSPECIFIED"
    | "NONE"
    | "FALLBACK_RESPONSE"
    | "END_SESSION"
    | (string & {});
  /** Optional. Configuration for ending the session in case of system errors (e.g. LLM errors). */
  endSessionConfig?: ErrorHandlingSettingsEndSessionConfig;
  /** Optional. Configuration for handling fallback responses. */
  fallbackResponseConfig?: ErrorHandlingSettingsFallbackResponseConfig;
}

export const ErrorHandlingSettings: Schema.Schema<ErrorHandlingSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorHandlingStrategy: Schema.optional(Schema.String),
    endSessionConfig: Schema.optional(ErrorHandlingSettingsEndSessionConfig),
    fallbackResponseConfig: Schema.optional(
      ErrorHandlingSettingsFallbackResponseConfig,
    ),
  }).annotate({ identifier: "ErrorHandlingSettings" });

export interface ChannelProfileWebWidgetConfig {
  /** Optional. The theme of the web widget. */
  theme?: "THEME_UNSPECIFIED" | "LIGHT" | "DARK" | (string & {});
  /** Optional. The security settings of the web widget. */
  securitySettings?: ChannelProfileWebWidgetConfigSecuritySettings;
  /** Optional. The modality of the web widget. */
  modality?:
    | "MODALITY_UNSPECIFIED"
    | "CHAT_AND_VOICE"
    | "VOICE_ONLY"
    | "CHAT_ONLY"
    | "CHAT_VOICE_AND_VIDEO"
    | (string & {});
  /** Optional. The title of the web widget. */
  webWidgetTitle?: string;
}

export const ChannelProfileWebWidgetConfig: Schema.Schema<ChannelProfileWebWidgetConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    theme: Schema.optional(Schema.String),
    securitySettings: Schema.optional(
      ChannelProfileWebWidgetConfigSecuritySettings,
    ),
    modality: Schema.optional(Schema.String),
    webWidgetTitle: Schema.optional(Schema.String),
  }).annotate({ identifier: "ChannelProfileWebWidgetConfig" });

export interface ChannelProfilePersonaProperty {
  /** Optional. The persona of the channel. */
  persona?: "UNKNOWN" | "CONCISE" | "CHATTY" | (string & {});
}

export const ChannelProfilePersonaProperty: Schema.Schema<ChannelProfilePersonaProperty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    persona: Schema.optional(Schema.String),
  }).annotate({ identifier: "ChannelProfilePersonaProperty" });

export interface ChannelProfile {
  /** Optional. Whether to disable user barge-in control in the conversation. - **true**: User interruptions are disabled while the agent is speaking. - **false**: The agent retains automatic control over when the user can interrupt. */
  disableBargeInControl?: boolean;
  /** Optional. The type of the channel profile. */
  channelType?:
    | "UNKNOWN"
    | "WEB_UI"
    | "API"
    | "TWILIO"
    | "GOOGLE_TELEPHONY_PLATFORM"
    | "CONTACT_CENTER_AS_A_SERVICE"
    | "FIVE9"
    | "CONTACT_CENTER_INTEGRATION"
    | (string & {});
  /** Optional. The configuration for the web widget. */
  webWidgetConfig?: ChannelProfileWebWidgetConfig;
  /** Optional. The persona property of the channel profile. */
  personaProperty?: ChannelProfilePersonaProperty;
  /** Optional. The unique identifier of the channel profile. */
  profileId?: string;
  /** Optional. Whether to disable DTMF (dual-tone multi-frequency). */
  disableDtmf?: boolean;
  /** Optional. The noise suppression level of the channel profile. Available values are "low", "moderate", "high", "very_high". */
  noiseSuppressionLevel?: string;
}

export const ChannelProfile: Schema.Schema<ChannelProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disableBargeInControl: Schema.optional(Schema.Boolean),
    channelType: Schema.optional(Schema.String),
    webWidgetConfig: Schema.optional(ChannelProfileWebWidgetConfig),
    personaProperty: Schema.optional(ChannelProfilePersonaProperty),
    profileId: Schema.optional(Schema.String),
    disableDtmf: Schema.optional(Schema.Boolean),
    noiseSuppressionLevel: Schema.optional(Schema.String),
  }).annotate({ identifier: "ChannelProfile" });

export interface TimeZoneSettings {
  /** Optional. The time zone of the app from the [time zone database](https://www.iana.org/time-zones), e.g., America/Los_Angeles, Europe/Paris. */
  timeZone?: string;
}

export const TimeZoneSettings: Schema.Schema<TimeZoneSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timeZone: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimeZoneSettings" });

export interface LanguageSettings {
  /** Optional. Deprecated: This feature is no longer supported. Use `enable_multilingual_support` instead to improve handling of multilingual input. The action to perform when an agent receives input in an unsupported language. This can be a predefined action or a custom tool call. Valid values are: - A tool's full resource name, which triggers a specific tool execution. - A predefined system action, such as "escalate" or "exit", which triggers an EndSession signal with corresponding metadata to terminate the conversation. */
  fallbackAction?: string;
  /** Optional. List of languages codes supported by the app, in addition to the `default_language_code`. */
  supportedLanguageCodes?: ReadonlyArray<string>;
  /** Optional. The default language code of the app. */
  defaultLanguageCode?: string;
  /** Optional. Enables multilingual support. If true, agents in the app will use pre-built instructions to improve handling of multilingual input. */
  enableMultilingualSupport?: boolean;
}

export const LanguageSettings: Schema.Schema<LanguageSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fallbackAction: Schema.optional(Schema.String),
    supportedLanguageCodes: Schema.optional(Schema.Array(Schema.String)),
    defaultLanguageCode: Schema.optional(Schema.String),
    enableMultilingualSupport: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "LanguageSettings" });

export interface DataStoreSettingsEngine {
  /** Output only. The resource name of the engine. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}` */
  name?: string;
  /** Output only. The type of the engine. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "ENGINE_TYPE_SEARCH"
    | "ENGINE_TYPE_CHAT"
    | (string & {});
}

export const DataStoreSettingsEngine: Schema.Schema<DataStoreSettingsEngine> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataStoreSettingsEngine" });

export interface DataStoreSettings {
  /** Output only. The engines for the app. */
  engines?: ReadonlyArray<DataStoreSettingsEngine>;
}

export const DataStoreSettings: Schema.Schema<DataStoreSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    engines: Schema.optional(Schema.Array(DataStoreSettingsEngine)),
  }).annotate({ identifier: "DataStoreSettings" });

export interface ClientCertificateSettings {
  /** Required. The name of the SecretManager secret version resource storing the private key encoded in PEM format. Format: `projects/{project}/secrets/{secret}/versions/{version}` */
  privateKey?: string;
  /** Optional. The name of the SecretManager secret version resource storing the passphrase to decrypt the private key. Should be left unset if the private key is not encrypted. Format: `projects/{project}/secrets/{secret}/versions/{version}` */
  passphrase?: string;
  /** Required. The TLS certificate encoded in PEM format. This string must include the begin header and end footer lines. */
  tlsCertificate?: string;
}

export const ClientCertificateSettings: Schema.Schema<ClientCertificateSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateKey: Schema.optional(Schema.String),
    passphrase: Schema.optional(Schema.String),
    tlsCertificate: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClientCertificateSettings" });

export interface App {
  /** Identifier. The unique identifier of the app. Format: `projects/{project}/locations/{location}/apps/{app}` */
  name?: string;
  /** Optional. VPC-SC settings for the app. */
  vpcScSettings?: VpcScSettings;
  /** Required. Display name of the app. */
  displayName?: string;
  /** Output only. Number of deployments in the app. */
  deploymentCount?: number;
  /** Optional. Whether the app is pinned in the app list. */
  pinned?: boolean;
  /** Optional. The evaluation personas for the app. This field is used to define the personas that can be used for evaluation. Maximum of 30 personas can be defined. */
  evaluationPersonas?: ReadonlyArray<EvaluationPersona>;
  /** Optional. Indicates whether the app is locked for changes. If the app is locked, modifications to the app resources will be rejected. */
  locked?: boolean;
  /** Output only. The declarations of predefined variables for the app. */
  predefinedVariableDeclarations?: ReadonlyArray<AppVariableDeclaration>;
  /** Optional. The tool execution mode for the app. If not provided, will default to PARALLEL. */
  toolExecutionMode?:
    | "TOOL_EXECUTION_MODE_UNSPECIFIED"
    | "PARALLEL"
    | "SEQUENTIAL"
    | (string & {});
  /** Optional. The default LLM model settings for the app. Individual resources (e.g. agents, guardrails) can override these configurations as needed. */
  modelSettings?: ModelSettings;
  /** Optional. The declarations of the variables. */
  variableDeclarations?: ReadonlyArray<AppVariableDeclaration>;
  /** Optional. Logging settings of the app. */
  loggingSettings?: LoggingSettings;
  /** Optional. Audio processing configuration of the app. */
  audioProcessingConfig?: AudioProcessingConfig;
  /** Output only. Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes. */
  etag?: string;
  /** Optional. Instructions for all the agents in the app. You can use this instruction to set up a stable identity or personality across all the agents. */
  globalInstruction?: string;
  /** Optional. Error handling settings of the app. */
  errorHandlingSettings?: ErrorHandlingSettings;
  /** Optional. The default channel profile used by the app. */
  defaultChannelProfile?: ChannelProfile;
  /** Optional. TimeZone settings of the app. */
  timeZoneSettings?: TimeZoneSettings;
  /** Output only. Timestamp when the app was created. */
  createTime?: string;
  /** Optional. Language settings of the app. */
  languageSettings?: LanguageSettings;
  /** Output only. Timestamp when the app was last updated. */
  updateTime?: string;
  /** Optional. List of guardrails for the app. Format: `projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}` */
  guardrails?: ReadonlyArray<string>;
  /** Optional. The evaluation thresholds for the app. */
  evaluationMetricsThresholds?: EvaluationMetricsThresholds;
  /** Optional. The evaluation settings for the app. */
  evaluationSettings?: EvaluationSettings;
  /** Optional. The data store settings for the app. */
  dataStoreSettings?: DataStoreSettings;
  /** Optional. Human-readable description of the app. */
  description?: string;
  /** Output only. Misconfigurations or warnings in the app. */
  validationErrors?: ReadonlyArray<string>;
  /** Optional. The default client certificate settings for the app. */
  clientCertificateSettings?: ClientCertificateSettings;
  /** Optional. The root agent is the entry point of the app. Format: `projects/{project}/locations/{location}/apps/{app}/agents/{agent}` */
  rootAgent?: string;
  /** Optional. Metadata about the app. This field can be used to store additional information relevant to the app's details or intended usages. */
  metadata?: Record<string, string>;
}

export const App: Schema.Schema<App> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    vpcScSettings: Schema.optional(VpcScSettings),
    displayName: Schema.optional(Schema.String),
    deploymentCount: Schema.optional(Schema.Number),
    pinned: Schema.optional(Schema.Boolean),
    evaluationPersonas: Schema.optional(Schema.Array(EvaluationPersona)),
    locked: Schema.optional(Schema.Boolean),
    predefinedVariableDeclarations: Schema.optional(
      Schema.Array(AppVariableDeclaration),
    ),
    toolExecutionMode: Schema.optional(Schema.String),
    modelSettings: Schema.optional(ModelSettings),
    variableDeclarations: Schema.optional(Schema.Array(AppVariableDeclaration)),
    loggingSettings: Schema.optional(LoggingSettings),
    audioProcessingConfig: Schema.optional(AudioProcessingConfig),
    etag: Schema.optional(Schema.String),
    globalInstruction: Schema.optional(Schema.String),
    errorHandlingSettings: Schema.optional(ErrorHandlingSettings),
    defaultChannelProfile: Schema.optional(ChannelProfile),
    timeZoneSettings: Schema.optional(TimeZoneSettings),
    createTime: Schema.optional(Schema.String),
    languageSettings: Schema.optional(LanguageSettings),
    updateTime: Schema.optional(Schema.String),
    guardrails: Schema.optional(Schema.Array(Schema.String)),
    evaluationMetricsThresholds: Schema.optional(EvaluationMetricsThresholds),
    evaluationSettings: Schema.optional(EvaluationSettings),
    dataStoreSettings: Schema.optional(DataStoreSettings),
    description: Schema.optional(Schema.String),
    validationErrors: Schema.optional(Schema.Array(Schema.String)),
    clientCertificateSettings: Schema.optional(ClientCertificateSettings),
    rootAgent: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "App" });

export interface GuardrailLlmPromptSecurityDefaultSecuritySettings {
  /** Output only. The default prompt template used by the system. This field is for display purposes to show the user what prompt the system uses by default. It is OUTPUT_ONLY. */
  defaultPromptTemplate?: string;
}

export const GuardrailLlmPromptSecurityDefaultSecuritySettings: Schema.Schema<GuardrailLlmPromptSecurityDefaultSecuritySettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultPromptTemplate: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GuardrailLlmPromptSecurityDefaultSecuritySettings",
  });

export interface GuardrailLlmPolicy {
  /** Optional. Model settings. */
  modelSettings?: ModelSettings;
  /** Optional. When checking this policy, consider the last 'n' messages in the conversation. When not set a default value of 10 will be used. */
  maxConversationMessages?: number;
  /** Required. Defines when to apply the policy check during the conversation. If set to `POLICY_SCOPE_UNSPECIFIED`, the policy will be applied to the user input. When applying the policy to the agent response, additional latency will be introduced before the agent can respond. */
  policyScope?:
    | "POLICY_SCOPE_UNSPECIFIED"
    | "USER_QUERY"
    | "AGENT_RESPONSE"
    | "USER_QUERY_AND_AGENT_RESPONSE"
    | (string & {});
  /** Optional. If an error occurs during the policy check, fail open and do not trigger the guardrail. */
  failOpen?: boolean;
  /** Required. Policy prompt. */
  prompt?: string;
  /** Optional. By default, the LLM policy check is bypassed for short utterances. Enabling this setting applies the policy check to all utterances, including those that would normally be skipped. */
  allowShortUtterance?: boolean;
}

export const GuardrailLlmPolicy: Schema.Schema<GuardrailLlmPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    modelSettings: Schema.optional(ModelSettings),
    maxConversationMessages: Schema.optional(Schema.Number),
    policyScope: Schema.optional(Schema.String),
    failOpen: Schema.optional(Schema.Boolean),
    prompt: Schema.optional(Schema.String),
    allowShortUtterance: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GuardrailLlmPolicy" });

export interface GuardrailLlmPromptSecurity {
  /** Optional. Use the system's predefined default security settings. To select this mode, include an empty 'default_settings' message in the request. The 'default_prompt_template' field within will be populated by the server in the response. */
  defaultSettings?: GuardrailLlmPromptSecurityDefaultSecuritySettings;
  /** Optional. Use a user-defined LlmPolicy to configure the security guardrail. */
  customPolicy?: GuardrailLlmPolicy;
  /** Optional. Determines the behavior when the guardrail encounters an LLM error. - If true: the guardrail is bypassed. - If false (default): the guardrail triggers/blocks. Note: If a custom policy is provided, this field is ignored in favor of the policy's 'fail_open' configuration. */
  failOpen?: boolean;
}

export const GuardrailLlmPromptSecurity: Schema.Schema<GuardrailLlmPromptSecurity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultSettings: Schema.optional(
      GuardrailLlmPromptSecurityDefaultSecuritySettings,
    ),
    customPolicy: Schema.optional(GuardrailLlmPolicy),
    failOpen: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GuardrailLlmPromptSecurity" });

export interface TriggerActionResponse {
  /** Required. Text for the agent to respond with. */
  text?: string;
  /** Optional. Whether the response is disabled. Disabled responses are not used by the agent. */
  disabled?: boolean;
}

export const TriggerActionResponse: Schema.Schema<TriggerActionResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    disabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "TriggerActionResponse" });

export interface TriggerActionRespondImmediately {
  /** Required. The canned responses for the agent to choose from. The response is chosen randomly. */
  responses?: ReadonlyArray<TriggerActionResponse>;
}

export const TriggerActionRespondImmediately: Schema.Schema<TriggerActionRespondImmediately> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responses: Schema.optional(Schema.Array(TriggerActionResponse)),
  }).annotate({ identifier: "TriggerActionRespondImmediately" });

export interface TriggerActionTransferAgent {
  /** Required. The name of the agent to transfer the conversation to. The agent must be in the same app as the current agent. Format: `projects/{project}/locations/{location}/apps/{app}/agents/{agent}` */
  agent?: string;
}

export const TriggerActionTransferAgent: Schema.Schema<TriggerActionTransferAgent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agent: Schema.optional(Schema.String),
  }).annotate({ identifier: "TriggerActionTransferAgent" });

export interface TriggerActionGenerativeAnswer {
  /** Required. The prompt to use for the generative answer. */
  prompt?: string;
}

export const TriggerActionGenerativeAnswer: Schema.Schema<TriggerActionGenerativeAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    prompt: Schema.optional(Schema.String),
  }).annotate({ identifier: "TriggerActionGenerativeAnswer" });

export interface TriggerAction {
  /** Optional. Immediately respond with a preconfigured response. */
  respondImmediately?: TriggerActionRespondImmediately;
  /** Optional. Transfer the conversation to a different agent. */
  transferAgent?: TriggerActionTransferAgent;
  /** Optional. Respond with a generative answer. */
  generativeAnswer?: TriggerActionGenerativeAnswer;
}

export const TriggerAction: Schema.Schema<TriggerAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    respondImmediately: Schema.optional(TriggerActionRespondImmediately),
    transferAgent: Schema.optional(TriggerActionTransferAgent),
    generativeAnswer: Schema.optional(TriggerActionGenerativeAnswer),
  }).annotate({ identifier: "TriggerAction" });

export interface GuardrailModelSafetySafetySetting {
  /** Required. The harm category. */
  category?:
    | "HARM_CATEGORY_UNSPECIFIED"
    | "HARM_CATEGORY_HATE_SPEECH"
    | "HARM_CATEGORY_DANGEROUS_CONTENT"
    | "HARM_CATEGORY_HARASSMENT"
    | "HARM_CATEGORY_SEXUALLY_EXPLICIT"
    | (string & {});
  /** Required. The harm block threshold. */
  threshold?:
    | "HARM_BLOCK_THRESHOLD_UNSPECIFIED"
    | "BLOCK_LOW_AND_ABOVE"
    | "BLOCK_MEDIUM_AND_ABOVE"
    | "BLOCK_ONLY_HIGH"
    | "BLOCK_NONE"
    | "OFF"
    | (string & {});
}

export const GuardrailModelSafetySafetySetting: Schema.Schema<GuardrailModelSafetySafetySetting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    category: Schema.optional(Schema.String),
    threshold: Schema.optional(Schema.String),
  }).annotate({ identifier: "GuardrailModelSafetySafetySetting" });

export interface GuardrailModelSafety {
  /** Required. List of safety settings. */
  safetySettings?: ReadonlyArray<GuardrailModelSafetySafetySetting>;
}

export const GuardrailModelSafety: Schema.Schema<GuardrailModelSafety> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    safetySettings: Schema.optional(
      Schema.Array(GuardrailModelSafetySafetySetting),
    ),
  }).annotate({ identifier: "GuardrailModelSafety" });

export interface GuardrailCodeCallback {
  /** Optional. The callback to execute before the model is called. If there are multiple calls to the model, the callback will be executed multiple times. Each callback function is expected to return a structure (e.g., a dict or object) containing at least: - 'decision': Either 'OK' or 'TRIGGER'. - 'reason': A string explaining the decision. A 'TRIGGER' decision may halt further processing. */
  beforeModelCallback?: Callback;
  /** Optional. The callback to execute before the agent is called. Each callback function is expected to return a structure (e.g., a dict or object) containing at least: - 'decision': Either 'OK' or 'TRIGGER'. - 'reason': A string explaining the decision. A 'TRIGGER' decision may halt further processing. */
  beforeAgentCallback?: Callback;
  /** Optional. The callback to execute after the model is called. If there are multiple calls to the model, the callback will be executed multiple times. Each callback function is expected to return a structure (e.g., a dict or object) containing at least: - 'decision': Either 'OK' or 'TRIGGER'. - 'reason': A string explaining the decision. A 'TRIGGER' decision may halt further processing. */
  afterModelCallback?: Callback;
  /** Optional. The callback to execute after the agent is called. Each callback function is expected to return a structure (e.g., a dict or object) containing at least: - 'decision': Either 'OK' or 'TRIGGER'. - 'reason': A string explaining the decision. A 'TRIGGER' decision may halt further processing. */
  afterAgentCallback?: Callback;
}

export const GuardrailCodeCallback: Schema.Schema<GuardrailCodeCallback> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    beforeModelCallback: Schema.optional(Callback),
    beforeAgentCallback: Schema.optional(Callback),
    afterModelCallback: Schema.optional(Callback),
    afterAgentCallback: Schema.optional(Callback),
  }).annotate({ identifier: "GuardrailCodeCallback" });

export interface Guardrail {
  /** Optional. Description of the guardrail. */
  description?: string;
  /** Optional. Guardrail that blocks the conversation if the prompt is considered unsafe based on the LLM classification. */
  llmPromptSecurity?: GuardrailLlmPromptSecurity;
  /** Optional. Action to take when the guardrail is triggered. */
  action?: TriggerAction;
  /** Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes. */
  etag?: string;
  /** Optional. Guardrail that bans certain content from being used in the conversation. */
  contentFilter?: GuardrailContentFilter;
  /** Optional. Guardrail that blocks the conversation if the LLM response is considered unsafe based on the model safety settings. */
  modelSafety?: GuardrailModelSafety;
  /** Output only. Timestamp when the guardrail was created. */
  createTime?: string;
  /** Identifier. The unique identifier of the guardrail. Format: `projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}` */
  name?: string;
  /** Required. Display name of the guardrail. */
  displayName?: string;
  /** Output only. Timestamp when the guardrail was last updated. */
  updateTime?: string;
  /** Optional. Guardrail that potentially blocks the conversation based on the result of the callback execution. */
  codeCallback?: GuardrailCodeCallback;
  /** Optional. Guardrail that blocks the conversation if the LLM response is considered violating the policy based on the LLM classification. */
  llmPolicy?: GuardrailLlmPolicy;
  /** Optional. Whether the guardrail is enabled. */
  enabled?: boolean;
}

export const Guardrail: Schema.Schema<Guardrail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    llmPromptSecurity: Schema.optional(GuardrailLlmPromptSecurity),
    action: Schema.optional(TriggerAction),
    etag: Schema.optional(Schema.String),
    contentFilter: Schema.optional(GuardrailContentFilter),
    modelSafety: Schema.optional(GuardrailModelSafety),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    codeCallback: Schema.optional(GuardrailCodeCallback),
    llmPolicy: Schema.optional(GuardrailLlmPolicy),
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Guardrail" });

export interface AppSnapshot {
  /** Optional. The basic settings for the app. */
  app?: App;
  /** Optional. List of agents in the app. */
  agents?: ReadonlyArray<Agent>;
  /** Optional. List of guardrails in the app. */
  guardrails?: ReadonlyArray<Guardrail>;
  /** Optional. List of tools in the app. */
  tools?: ReadonlyArray<Tool>;
  /** Optional. List of examples in the app. */
  examples?: ReadonlyArray<Example>;
  /** Optional. List of toolsets in the app. */
  toolsets?: ReadonlyArray<Toolset>;
}

export const AppSnapshot: Schema.Schema<AppSnapshot> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    app: Schema.optional(App),
    agents: Schema.optional(Schema.Array(Agent)),
    guardrails: Schema.optional(Schema.Array(Guardrail)),
    tools: Schema.optional(Schema.Array(Tool)),
    examples: Schema.optional(Schema.Array(Example)),
    toolsets: Schema.optional(Schema.Array(Toolset)),
  }).annotate({ identifier: "AppSnapshot" });

export interface GenerateAppResourceResponseAppResources {
  /** The app snapshot generated by the LLM assistant. This snapshot contains the app, agents & tools generated by the LLM assistant. */
  appSnapshot?: AppSnapshot;
  /** The list of evaluations generated by the LLM assistant. */
  evaluations?: ReadonlyArray<Evaluation>;
}

export const GenerateAppResourceResponseAppResources: Schema.Schema<GenerateAppResourceResponseAppResources> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appSnapshot: Schema.optional(AppSnapshot),
    evaluations: Schema.optional(Schema.Array(Evaluation)),
  }).annotate({ identifier: "GenerateAppResourceResponseAppResources" });

export interface GenerateAppResourceResponse {
  /** The list of tools generated by the LLM assistant. */
  tools?: GenerateAppResourceResponseTools;
  /** Agent generated by the LLM assistant. */
  agent?: Agent;
  /** Toolset generated by the LLM assistant. Supports Open API toolset schema generation. */
  toolset?: Toolset;
  /** Evaluations generated by the LLM assistant. */
  evaluations?: GenerateAppResourceResponseEvaluations;
  /** The quality report generated by the LLM assistant. */
  qualityReport?: QualityReport;
  /** Additional information about the generated result. */
  generateResultInfo?: GenerateAppResourceResponseGenerateResultInfo;
  /** The app resources generated by the LLM assistant. */
  appResources?: GenerateAppResourceResponseAppResources;
  /** App snapshot generated by the LLM assistant. This snapshot contains the app, agents & tools generated by the LLM assistant. */
  appSnapshot?: AppSnapshot;
}

export const GenerateAppResourceResponse: Schema.Schema<GenerateAppResourceResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tools: Schema.optional(GenerateAppResourceResponseTools),
    agent: Schema.optional(Agent),
    toolset: Schema.optional(Toolset),
    evaluations: Schema.optional(GenerateAppResourceResponseEvaluations),
    qualityReport: Schema.optional(QualityReport),
    generateResultInfo: Schema.optional(
      GenerateAppResourceResponseGenerateResultInfo,
    ),
    appResources: Schema.optional(GenerateAppResourceResponseAppResources),
    appSnapshot: Schema.optional(AppSnapshot),
  }).annotate({ identifier: "GenerateAppResourceResponse" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface ListEvaluationResultsResponse {
  /** The list of evaluation results. */
  evaluationResults?: ReadonlyArray<EvaluationResult>;
  /** A token that can be sent as ListEvaluationResultsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListEvaluationResultsResponse: Schema.Schema<ListEvaluationResultsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    evaluationResults: Schema.optional(Schema.Array(EvaluationResult)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListEvaluationResultsResponse" });

export interface GenerateAppResourceRequestEvaluationPersonasGenerationConfig {}

export const GenerateAppResourceRequestEvaluationPersonasGenerationConfig: Schema.Schema<GenerateAppResourceRequestEvaluationPersonasGenerationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GenerateAppResourceRequestEvaluationPersonasGenerationConfig",
  });

export interface GenerateChatTokenRequest {
  /** Optional. The reCAPTCHA token generated by the client-side chat widget. */
  recaptchaToken?: string;
  /** Optional. Indicates if live handoff is enabled for the session. */
  liveHandoffEnabled?: boolean;
  /** Required. The deployment of the app to use for the session. Format: projects/{project}/locations/{location}/apps/{app}/deployments/{deployment} */
  deployment?: string;
}

export const GenerateChatTokenRequest: Schema.Schema<GenerateChatTokenRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    recaptchaToken: Schema.optional(Schema.String),
    liveHandoffEnabled: Schema.optional(Schema.Boolean),
    deployment: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerateChatTokenRequest" });

export interface TestPersonaVoiceResponse {
  /** The audio data bytes of the synthesized voice. */
  audio?: string;
}

export const TestPersonaVoiceResponse: Schema.Schema<TestPersonaVoiceResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audio: Schema.optional(Schema.String),
  }).annotate({ identifier: "TestPersonaVoiceResponse" });

export interface EvaluationExpectationLlmCriteria {
  /** Required. The prompt/instructions provided to the LLM judge. */
  prompt?: string;
}

export const EvaluationExpectationLlmCriteria: Schema.Schema<EvaluationExpectationLlmCriteria> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    prompt: Schema.optional(Schema.String),
  }).annotate({ identifier: "EvaluationExpectationLlmCriteria" });

export interface EvaluationExpectation {
  /** Identifier. The unique identifier of this evaluation expectation. Format: `projects/{project}/locations/{location}/apps/{app}/evaluationExpectations/{evaluation_expectation}` */
  name?: string;
  /** Required. User-defined display name. Must be unique within the app. */
  displayName?: string;
  /** Optional. User-defined tags for expectations. Can be used to filter expectations. */
  tags?: ReadonlyArray<string>;
  /** Output only. Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes. */
  etag?: string;
  /** Output only. Timestamp when the evaluation expectation was last updated. */
  updateTime?: string;
  /** Optional. Evaluation criteria based on an LLM prompt. */
  llmCriteria?: EvaluationExpectationLlmCriteria;
  /** Output only. Timestamp when the evaluation expectation was created. */
  createTime?: string;
}

export const EvaluationExpectation: Schema.Schema<EvaluationExpectation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.String)),
    etag: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    llmCriteria: Schema.optional(EvaluationExpectationLlmCriteria),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "EvaluationExpectation" });

export interface ListEvaluationExpectationsResponse {
  /** The list of evaluation expectations. */
  evaluationExpectations?: ReadonlyArray<EvaluationExpectation>;
  /** A token that can be sent as ListEvaluationExpectationsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListEvaluationExpectationsResponse: Schema.Schema<ListEvaluationExpectationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    evaluationExpectations: Schema.optional(
      Schema.Array(EvaluationExpectation),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListEvaluationExpectationsResponse" });

export interface ExportEvaluationsResponse {
  /** The Google Cloud Storage URI folder where the exported evaluations were written. This will be populated if gcs_uri was specified in the request. */
  evaluationsUri?: string;
  /** Output only. A map of evaluation resource names that could not be exported, to the reason why they failed. */
  failedEvaluations?: Record<string, string>;
  /** The content of the exported Evaluations. This will be populated if gcs_uri was not specified in the request. */
  evaluationsContent?: string;
}

export const ExportEvaluationsResponse: Schema.Schema<ExportEvaluationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    evaluationsUri: Schema.optional(Schema.String),
    failedEvaluations: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    evaluationsContent: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExportEvaluationsResponse" });

export interface ExportAppRequest {
  /** Optional. The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to which to export the app. The format of this URI must be `gs:///`. The exported app archive will be written directly to the specified GCS object. */
  gcsUri?: string;
  /** Required. The format to export the app in. */
  exportFormat?: "EXPORT_FORMAT_UNSPECIFIED" | "JSON" | "YAML" | (string & {});
  /** Optional. The resource name of the app version to export. Format: `projects/{project}/locations/{location}/apps/{app}/versions/{version}`. */
  appVersion?: string;
}

export const ExportAppRequest: Schema.Schema<ExportAppRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsUri: Schema.optional(Schema.String),
    exportFormat: Schema.optional(Schema.String),
    appVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExportAppRequest" });

export interface FileContextFileBytes {
  /** Required. The name of the file provided as raw bytes. */
  fileName?: string;
  /** Required. Raw bytes of the file. */
  data?: string;
  /** Required. The IANA standard MIME type of the source data. */
  mimeType?: string;
}

export const FileContextFileBytes: Schema.Schema<FileContextFileBytes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileName: Schema.optional(Schema.String),
    data: Schema.optional(Schema.String),
    mimeType: Schema.optional(Schema.String),
  }).annotate({ identifier: "FileContextFileBytes" });

export interface ExperimentConfigVersionReleaseTrafficAllocation {
  /** Optional. Traffic percentage of the traffic allocation. Must be between 0 and 100. */
  trafficPercentage?: number;
  /** Optional. App version of the traffic allocation. Format: `projects/{project}/locations/{location}/apps/{app}/versions/{version}` */
  appVersion?: string;
  /** Optional. Id of the traffic allocation. Free format string, up to 128 characters. */
  id?: string;
}

export const ExperimentConfigVersionReleaseTrafficAllocation: Schema.Schema<ExperimentConfigVersionReleaseTrafficAllocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trafficPercentage: Schema.optional(Schema.Number),
    appVersion: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ExperimentConfigVersionReleaseTrafficAllocation",
  });

export interface ExperimentConfigVersionRelease {
  /** Optional. State of the version release. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "RUNNING"
    | "DONE"
    | "EXPIRED"
    | (string & {});
  /** Optional. Traffic allocations for the version release. */
  trafficAllocations?: ReadonlyArray<ExperimentConfigVersionReleaseTrafficAllocation>;
}

export const ExperimentConfigVersionRelease: Schema.Schema<ExperimentConfigVersionRelease> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    trafficAllocations: Schema.optional(
      Schema.Array(ExperimentConfigVersionReleaseTrafficAllocation),
    ),
  }).annotate({ identifier: "ExperimentConfigVersionRelease" });

export interface ExperimentConfig {
  /** Optional. Version release for the experiment. */
  versionRelease?: ExperimentConfigVersionRelease;
}

export const ExperimentConfig: Schema.Schema<ExperimentConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versionRelease: Schema.optional(ExperimentConfigVersionRelease),
  }).annotate({ identifier: "ExperimentConfig" });

export interface MockConfig {
  /** Optional. All tool calls to mock for the duration of the session. */
  mockedToolCalls?: ReadonlyArray<MockedToolCall>;
  /** Required. Beavhior for tool calls that don't match any args patterns in mocked_tool_calls. */
  unmatchedToolCallBehavior?:
    | "UNMATCHED_TOOL_CALL_BEHAVIOR_UNSPECIFIED"
    | "FAIL"
    | "PASS_THROUGH"
    | (string & {});
}

export const MockConfig: Schema.Schema<MockConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mockedToolCalls: Schema.optional(Schema.Array(MockedToolCall)),
    unmatchedToolCallBehavior: Schema.optional(Schema.String),
  }).annotate({ identifier: "MockConfig" });

export interface ExecuteToolRequest {
  /** Optional. The [ToolCallContext](https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/tool/python#environment for details) to be passed to the Python tool. */
  context?: Record<string, unknown>;
  /** Optional. The variables that are available for the tool execution. */
  variables?: Record<string, unknown>;
  /** Optional. The name of the tool to execute. Format: projects/{project}/locations/{location}/apps/{app}/tools/{tool} */
  tool?: string;
  /** Optional. The input parameters and values for the tool in JSON object format. */
  args?: Record<string, unknown>;
  /** Optional. Mock configuration for the tool execution. If this field is set, tools that call other tools will be mocked based on the provided patterns and responses. */
  mockConfig?: MockConfig;
  /** Optional. The toolset tool to execute. Only one tool should match the predicate from the toolset. Otherwise, an error will be returned. */
  toolsetTool?: ToolsetTool;
}

export const ExecuteToolRequest: Schema.Schema<ExecuteToolRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    context: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    variables: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    tool: Schema.optional(Schema.String),
    args: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    mockConfig: Schema.optional(MockConfig),
    toolsetTool: Schema.optional(ToolsetTool),
  }).annotate({ identifier: "ExecuteToolRequest" });

export interface ListAppsResponse {
  /** A token that can be sent as ListAppsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages. */
  nextPageToken?: string;
  /** Unordered list. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The list of apps. */
  apps?: ReadonlyArray<App>;
}

export const ListAppsResponse: Schema.Schema<ListAppsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    apps: Schema.optional(Schema.Array(App)),
  }).annotate({ identifier: "ListAppsResponse" });

export interface UploadEvaluationAudioResponse {
  /** The Google Cloud Storage URI where the uploaded audio file is stored. Format: `gs:///` */
  audioGcsUri?: string;
  /** The transcript of the audio, generated by Cloud Speech-to-Text. */
  transcript?: string;
  /** The duration of the audio. */
  duration?: string;
}

export const UploadEvaluationAudioResponse: Schema.Schema<UploadEvaluationAudioResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audioGcsUri: Schema.optional(Schema.String),
    transcript: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
  }).annotate({ identifier: "UploadEvaluationAudioResponse" });

export interface SessionConfigRemoteDialogflowQueryParameters {
  /** Optional. The HTTP headers to be sent as webhook_headers in [QueryParameters](https://cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#queryparameters). */
  webhookHeaders?: Record<string, string>;
  /** Optional. The payload to be sent in [QueryParameters](https://cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#queryparameters). */
  payload?: Record<string, unknown>;
  /** Optional. The end user metadata to be sent in [QueryParameters](https://cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#queryparameters). */
  endUserMetadata?: Record<string, unknown>;
}

export const SessionConfigRemoteDialogflowQueryParameters: Schema.Schema<SessionConfigRemoteDialogflowQueryParameters> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webhookHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    endUserMetadata: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "SessionConfigRemoteDialogflowQueryParameters" });

export interface EndpointControlPolicy {
  /** Optional. The allowed HTTP(s) origins that tools in the App are able to directly call. The enforcement depends on the value of enforcement_scope and the VPC-SC status of the project. If a port number is not provided, all ports will be allowed. Otherwise, the port number must match exactly. For example, "https://example.com" will match "https://example.com:443" and any other port. "https://example.com:443" will only match "https://example.com:443". */
  allowedOrigins?: ReadonlyArray<string>;
  /** Optional. The scope in which this policy's allowed_origins list is enforced. */
  enforcementScope?:
    | "ENFORCEMENT_SCOPE_UNSPECIFIED"
    | "VPCSC_ONLY"
    | "ALWAYS"
    | (string & {});
}

export const EndpointControlPolicy: Schema.Schema<EndpointControlPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowedOrigins: Schema.optional(Schema.Array(Schema.String)),
    enforcementScope: Schema.optional(Schema.String),
  }).annotate({ identifier: "EndpointControlPolicy" });

export interface SecuritySettings {
  /** Output only. Last update time of the security settings. */
  updateTime?: string;
  /** Optional. Endpoint control related settings. */
  endpointControlPolicy?: EndpointControlPolicy;
  /** Output only. Create time of the security settings. */
  createTime?: string;
  /** Identifier. The unique identifier of the security settings. Format: `projects/{project}/locations/{location}/securitySettings` */
  name?: string;
  /** Output only. Etag of the security settings. */
  etag?: string;
}

export const SecuritySettings: Schema.Schema<SecuritySettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    endpointControlPolicy: Schema.optional(EndpointControlPolicy),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecuritySettings" });

export interface FileContext {
  /** Optional. File provided as raw bytes. */
  fileBytes?: FileContextFileBytes;
}

export const FileContext: Schema.Schema<FileContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileBytes: Schema.optional(FileContextFileBytes),
  }).annotate({ identifier: "FileContext" });

export interface Deployment {
  /** Required. Display name of the deployment. */
  displayName?: string;
  /** Output only. Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes. */
  etag?: string;
  /** Optional. Experiment configuration for the deployment. */
  experimentConfig?: ExperimentConfig;
  /** Identifier. The resource name of the deployment. Format: `projects/{project}/locations/{location}/apps/{app}/deployments/{deployment}` */
  name?: string;
  /** Required. The channel profile used in the deployment. */
  channelProfile?: ChannelProfile;
  /** Output only. Timestamp when this deployment was created. */
  createTime?: string;
  /** Optional. The resource name of the app version to deploy. Format: `projects/{project}/locations/{location}/apps/{app}/versions/{version}` Use `projects/{project}/locations/{location}/apps/{app}/versions/-` to use the draft app. */
  appVersion?: string;
  /** Output only. Timestamp when this deployment was last updated. */
  updateTime?: string;
}

export const Deployment: Schema.Schema<Deployment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    experimentConfig: Schema.optional(ExperimentConfig),
    name: Schema.optional(Schema.String),
    channelProfile: Schema.optional(ChannelProfile),
    createTime: Schema.optional(Schema.String),
    appVersion: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Deployment" });

export interface SessionConfig {
  /** Optional. The historical context of the session, including user inputs, agent responses, and other messages. Typically, CES agent would manage session automatically so client doesn't need to explicitly populate this field. However, client can optionally override the historical contexts to force the session start from certain state. */
  historicalContexts?: ReadonlyArray<Message>;
  /** Optional. The entry agent to handle the session. If not specified, the session will be handled by the root agent of the app. Format: `projects/{project}/locations/{location}/apps/{app}/agents/{agent}` */
  entryAgent?: string;
  /** Optional. The time zone of the user. If provided, the agent will use the time zone for date and time related variables. Otherwise, the agent will use the time zone specified in the App.time_zone_settings. The format is the IANA Time Zone Database time zone, e.g. "America/Los_Angeles". */
  timeZone?: string;
  /** Optional. [QueryParameters](https://cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#queryparameters) to send to the remote [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents) agent when the session control is transferred to the remote agent. */
  remoteDialogflowQueryParameters?: SessionConfigRemoteDialogflowQueryParameters;
  /** Optional. Whether to enable streaming text outputs from the model. By default, text outputs from the model are collected before sending to the client. NOTE: This is only supported for text (non-voice) sessions via StreamRunSession or BidiRunSession. */
  enableTextStreaming?: boolean;
  /** Optional. Configuration for processing the input audio. */
  inputAudioConfig?: InputAudioConfig;
  /** Optional. Configuration for generating the output audio. */
  outputAudioConfig?: OutputAudioConfig;
  /** Optional. Whether to use tool fakes for the session. If this field is set, the agent will attempt use tool fakes instead of calling the real tools. */
  useToolFakes?: boolean;
  /** Optional. The deployment of the app to use for the session. Format: `projects/{project}/locations/{location}/apps/{app}/deployments/{deployment}` */
  deployment?: string;
}

export const SessionConfig: Schema.Schema<SessionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    historicalContexts: Schema.optional(Schema.Array(Message)),
    entryAgent: Schema.optional(Schema.String),
    timeZone: Schema.optional(Schema.String),
    remoteDialogflowQueryParameters: Schema.optional(
      SessionConfigRemoteDialogflowQueryParameters,
    ),
    enableTextStreaming: Schema.optional(Schema.Boolean),
    inputAudioConfig: Schema.optional(InputAudioConfig),
    outputAudioConfig: Schema.optional(OutputAudioConfig),
    useToolFakes: Schema.optional(Schema.Boolean),
    deployment: Schema.optional(Schema.String),
  }).annotate({ identifier: "SessionConfig" });

export interface RunSessionRequest {
  /** Required. Inputs for the session. */
  inputs?: ReadonlyArray<SessionInput>;
  /** Required. The configuration for the session. */
  config?: SessionConfig;
}

export const RunSessionRequest: Schema.Schema<RunSessionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputs: Schema.optional(Schema.Array(SessionInput)),
    config: Schema.optional(SessionConfig),
  }).annotate({ identifier: "RunSessionRequest" });

export interface RetrieveToolsResponse {
  /** The list of tools that are included in the specified toolset. */
  tools?: ReadonlyArray<Tool>;
}

export const RetrieveToolsResponse: Schema.Schema<RetrieveToolsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tools: Schema.optional(Schema.Array(Tool)),
  }).annotate({ identifier: "RetrieveToolsResponse" });

export interface ImportEvaluationsRequestConversationList {
  /** Optional. Conversation resource names. */
  conversations?: ReadonlyArray<string>;
}

export const ImportEvaluationsRequestConversationList: Schema.Schema<ImportEvaluationsRequestConversationList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversations: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ImportEvaluationsRequestConversationList" });

export interface ListDeploymentsResponse {
  /** The list of deployments. */
  deployments?: ReadonlyArray<Deployment>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListDeploymentsResponse: Schema.Schema<ListDeploymentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deployments: Schema.optional(Schema.Array(Deployment)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDeploymentsResponse" });

export interface ImportEvaluationsRequestImportOptions {
  /** Optional. The strategy to use when resolving conflicts during import. */
  conflictResolutionStrategy?:
    | "CONFLICT_RESOLUTION_STRATEGY_UNSPECIFIED"
    | "OVERWRITE"
    | "SKIP"
    | "DUPLICATE"
    | (string & {});
}

export const ImportEvaluationsRequestImportOptions: Schema.Schema<ImportEvaluationsRequestImportOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conflictResolutionStrategy: Schema.optional(Schema.String),
  }).annotate({ identifier: "ImportEvaluationsRequestImportOptions" });

export interface GenerateAppResourceRequestQualityReportGenerationConfig {
  /** Required. The evaluation run used to inform quality report analysis. */
  evaluationRun?: string;
}

export const GenerateAppResourceRequestQualityReportGenerationConfig: Schema.Schema<GenerateAppResourceRequestQualityReportGenerationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    evaluationRun: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GenerateAppResourceRequestQualityReportGenerationConfig",
  });

export interface ListAgentsResponse {
  /** A token that can be sent as ListAgentsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages. */
  nextPageToken?: string;
  /** The list of agents. */
  agents?: ReadonlyArray<Agent>;
}

export const ListAgentsResponse: Schema.Schema<ListAgentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    agents: Schema.optional(Schema.Array(Agent)),
  }).annotate({ identifier: "ListAgentsResponse" });

export interface Changelog {
  /** Identifier. The unique identifier of the changelog. Format: `projects/{project}/locations/{location}/apps/{app}/changelogs/{changelog}` */
  name?: string;
  /** Output only. The new resource after the change. */
  newResource?: Record<string, unknown>;
  /** Output only. Description of the change. which typically captures the changed fields in the resource. */
  description?: string;
  /** Output only. Display name of the change. It typically should be the display name of the resource that was changed. */
  displayName?: string;
  /** Output only. The type of the resource that was changed. */
  resourceType?: string;
  /** Output only. The dependent resources that were changed. */
  dependentResources?: ReadonlyArray<Record<string, unknown>>;
  /** Output only. The time when the change was made. */
  createTime?: string;
  /** Output only. The monotonically increasing sequence number of the changelog. */
  sequenceNumber?: string;
  /** Output only. Email address of the change author. */
  author?: string;
  /** Output only. The resource that was changed. */
  resource?: string;
  /** Output only. The original resource before the change. */
  originalResource?: Record<string, unknown>;
  /** Output only. The action that was performed on the resource. */
  action?: string;
}

export const Changelog: Schema.Schema<Changelog> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    newResource: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    description: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
    dependentResources: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    createTime: Schema.optional(Schema.String),
    sequenceNumber: Schema.optional(Schema.String),
    author: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
    originalResource: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    action: Schema.optional(Schema.String),
  }).annotate({ identifier: "Changelog" });

export interface ExportEvaluationResultsRequest {
  /** Required. The resource names of the evaluation results to export. */
  names?: ReadonlyArray<string>;
  /** Optional. The export options for the evaluation results. */
  exportOptions?: ExportOptions;
}

export const ExportEvaluationResultsRequest: Schema.Schema<ExportEvaluationResultsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)),
    exportOptions: Schema.optional(ExportOptions),
  }).annotate({ identifier: "ExportEvaluationResultsRequest" });

export interface ListEvaluationRunsResponse {
  /** The list of evaluation runs. */
  evaluationRuns?: ReadonlyArray<EvaluationRun>;
  /** A token that can be sent as ListEvaluationRunsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListEvaluationRunsResponse: Schema.Schema<ListEvaluationRunsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    evaluationRuns: Schema.optional(Schema.Array(EvaluationRun)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListEvaluationRunsResponse" });

export interface Operation {
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
    error: Schema.optional(Status),
  }).annotate({ identifier: "Operation" });

export interface ListOperationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
}

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    operations: Schema.optional(Schema.Array(Operation)),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface ListToolsetsResponse {
  /** A token that can be sent as ListToolsetsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages. */
  nextPageToken?: string;
  /** The list of toolsets. */
  toolsets?: ReadonlyArray<Toolset>;
}

export const ListToolsetsResponse: Schema.Schema<ListToolsetsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    toolsets: Schema.optional(Schema.Array(Toolset)),
  }).annotate({ identifier: "ListToolsetsResponse" });

export interface ImportAppResponse {
  /** The resource name of the app that was imported. */
  name?: string;
  /** Warning messages generated during the import process. If errors occur for specific resources, they will not be included in the imported app and the error will be mentioned here. */
  warnings?: ReadonlyArray<string>;
}

export const ImportAppResponse: Schema.Schema<ImportAppResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    warnings: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ImportAppResponse" });

export interface ListEvaluationsResponse {
  /** The list of evaluations. */
  evaluations?: ReadonlyArray<Evaluation>;
  /** A token that can be sent as ListEvaluationsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListEvaluationsResponse: Schema.Schema<ListEvaluationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    evaluations: Schema.optional(Schema.Array(Evaluation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListEvaluationsResponse" });

export interface GenerateEvaluationRequest {
  /** Optional. Indicate the source of the conversation. If not set, all sources will be searched. */
  source?:
    | "SOURCE_UNSPECIFIED"
    | "LIVE"
    | "SIMULATOR"
    | "EVAL"
    | "AGENT_TOOL"
    | (string & {});
}

export const GenerateEvaluationRequest: Schema.Schema<GenerateEvaluationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerateEvaluationRequest" });

export interface RetrieveToolSchemaRequest {
  /** Optional. The toolset tool to retrieve the schema for. Only one tool should match the predicate from the toolset. Otherwise, an error will be returned. */
  toolsetTool?: ToolsetTool;
  /** Optional. The name of the tool to retrieve the schema for. Format: projects/{project}/locations/{location}/apps/{app}/tools/{tool} */
  tool?: string;
}

export const RetrieveToolSchemaRequest: Schema.Schema<RetrieveToolSchemaRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolsetTool: Schema.optional(ToolsetTool),
    tool: Schema.optional(Schema.String),
  }).annotate({ identifier: "RetrieveToolSchemaRequest" });

export interface GenerateAppResourceRequestEvaluationGenerationConfig {
  /** Optional. The insights dataset to be used to fetch conversation data for generating the evaluations. Format: `projects/{project}/locations/{location}/datasets/{dataset}`. */
  datasetId?: string;
}

export const GenerateAppResourceRequestEvaluationGenerationConfig: Schema.Schema<GenerateAppResourceRequestEvaluationGenerationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datasetId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GenerateAppResourceRequestEvaluationGenerationConfig",
  });

export interface AppVersion {
  /** Output only. Email of the user who created the app version. */
  creator?: string;
  /** Output only. The snapshot of the app when the version is created. */
  snapshot?: AppSnapshot;
  /** Output only. Timestamp when the app version was created. */
  createTime?: string;
  /** Identifier. The unique identifier of the app version. Format: `projects/{project}/locations/{location}/apps/{app}/versions/{version}` */
  name?: string;
  /** Optional. The display name of the app version. */
  displayName?: string;
  /** Optional. The description of the app version. */
  description?: string;
  /** Output only. Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes. */
  etag?: string;
}

export const AppVersion: Schema.Schema<AppVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    creator: Schema.optional(Schema.String),
    snapshot: Schema.optional(AppSnapshot),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "AppVersion" });

export interface GenerateAppResourceRequestRefineInstructions {
  /** Required. The field of the resource being refined. Only one field is allowed per RefineInstructions. If refining agent instructions, the field mask should be "instructions". */
  fieldMask?: string;
  /** Required. The first character (inclusive) of the text to refine. */
  startIndex?: string;
  /** Required. The last character (inclusive) of the text to refine. */
  endIndex?: string;
  /** Required. The instructions to refine the resource. */
  instructions?: string;
}

export const GenerateAppResourceRequestRefineInstructions: Schema.Schema<GenerateAppResourceRequestRefineInstructions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldMask: Schema.optional(Schema.String),
    startIndex: Schema.optional(Schema.String),
    endIndex: Schema.optional(Schema.String),
    instructions: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerateAppResourceRequestRefineInstructions" });

export interface GenerateAppResourceRequestAppGenerationConfig {
  /** Optional. Whether to generate the evaluations for the app. If true, the provided context will be used to generate the evaluations data. */
  generateEvaluations?: boolean;
  /** Optional. The context which describes the requirements of the agents & tools to be generated. */
  context?: string;
  /** Optional. The Cloud Storage location to store the generated question answer data to be used by the Datastore tool. This data is generated only when using conversation data as an input source. The location must be in the same project as the app. Format: `gs://...`. */
  gcsLocation?: string;
  /** Optional. The insights dataset to be used to fetch conversation data for generating the agents & tools. Format: `projects/{project}/locations/{location}/datasets/{dataset}`. */
  datasetId?: string;
  /** Optional. The files to be used as context. */
  fileContexts?: ReadonlyArray<FileContext>;
}

export const GenerateAppResourceRequestAppGenerationConfig: Schema.Schema<GenerateAppResourceRequestAppGenerationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generateEvaluations: Schema.optional(Schema.Boolean),
    context: Schema.optional(Schema.String),
    gcsLocation: Schema.optional(Schema.String),
    datasetId: Schema.optional(Schema.String),
    fileContexts: Schema.optional(Schema.Array(FileContext)),
  }).annotate({ identifier: "GenerateAppResourceRequestAppGenerationConfig" });

export interface RestoreAppVersionRequest {}

export const RestoreAppVersionRequest: Schema.Schema<RestoreAppVersionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RestoreAppVersionRequest",
  });

export interface ListGuardrailsResponse {
  /** A token that can be sent as ListGuardrailsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages. */
  nextPageToken?: string;
  /** The list of guardrails. */
  guardrails?: ReadonlyArray<Guardrail>;
}

export const ListGuardrailsResponse: Schema.Schema<ListGuardrailsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    guardrails: Schema.optional(Schema.Array(Guardrail)),
  }).annotate({ identifier: "ListGuardrailsResponse" });

export interface UploadEvaluationAudioRequest {
  /** Required. The raw audio bytes. The format of the audio must be single-channel LINEAR16 with a sample rate of 16kHz (default InputAudioConfig). */
  audioContent?: string;
  /** Optional. The Google Cloud Storage URI of the previously uploaded audio file to be deleted. Format: `gs:///` */
  previousAudioGcsUri?: string;
}

export const UploadEvaluationAudioRequest: Schema.Schema<UploadEvaluationAudioRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audioContent: Schema.optional(Schema.String),
    previousAudioGcsUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "UploadEvaluationAudioRequest" });

export interface GenerateEvaluationOperationMetadata {}

export const GenerateEvaluationOperationMetadata: Schema.Schema<GenerateEvaluationOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GenerateEvaluationOperationMetadata",
  });

export interface ConversationTurn {
  /** Optional. The root span of the action processing. */
  rootSpan?: Span;
  /** Optional. List of messages in the conversation turn, including user input, agent responses and intermediate events during the processing. */
  messages?: ReadonlyArray<Message>;
}

export const ConversationTurn: Schema.Schema<ConversationTurn> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rootSpan: Schema.optional(Span),
    messages: Schema.optional(Schema.Array(Message)),
  }).annotate({ identifier: "ConversationTurn" });

export interface Conversation {
  /** Output only. The agent that initially handles the conversation. If not specified, the conversation is handled by the root agent. Format: `projects/{project}/locations/{location}/apps/{app}/agents/{agent}` */
  entryAgent?: string;
  /** Output only. Indicate the source of the conversation. */
  source?:
    | "SOURCE_UNSPECIFIED"
    | "LIVE"
    | "SIMULATOR"
    | "EVAL"
    | "AGENT_TOOL"
    | (string & {});
  /** Output only. The number of turns in the conversation. */
  turnCount?: number;
  /** Output only. Timestamp when the conversation was completed. */
  endTime?: string;
  /** DEPRECATED. Please use input_types instead. */
  channelType?:
    | "CHANNEL_TYPE_UNSPECIFIED"
    | "TEXT"
    | "AUDIO"
    | "MULTIMODAL"
    | (string & {});
  /** Output only. The deployment of the app used for processing the conversation. Format: `projects/{project}/locations/{location}/apps/{app}/deployments/{deployment}` */
  deployment?: string;
  /** Output only. The version of the app used for processing the conversation. Format: `projects/{project}/locations/{location}/apps/{app}/versions/{version}` */
  appVersion?: string;
  /** Deprecated. Use turns instead. */
  messages?: ReadonlyArray<Message>;
  /** Output only. The language code of the conversation. */
  languageCode?: string;
  /** Identifier. The unique identifier of the conversation. Format: `projects/{project}/locations/{location}/apps/{app}/conversations/{conversation}` */
  name?: string;
  /** Output only. Timestamp when the conversation was created. */
  startTime?: string;
  /** Output only. The input types of the conversation. */
  inputTypes?: ReadonlyArray<
    | "INPUT_TYPE_UNSPECIFIED"
    | "INPUT_TYPE_TEXT"
    | "INPUT_TYPE_EVENT"
    | "INPUT_TYPE_AUDIO"
    | "INPUT_TYPE_IMAGE"
    | "INPUT_TYPE_BLOB"
    | "INPUT_TYPE_TOOL_RESPONSE"
    | "INPUT_TYPE_VARIABLES"
    | (string & {})
  >;
  /** Required. The turns in the conversation. */
  turns?: ReadonlyArray<ConversationTurn>;
}

export const Conversation: Schema.Schema<Conversation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entryAgent: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    turnCount: Schema.optional(Schema.Number),
    endTime: Schema.optional(Schema.String),
    channelType: Schema.optional(Schema.String),
    deployment: Schema.optional(Schema.String),
    appVersion: Schema.optional(Schema.String),
    messages: Schema.optional(Schema.Array(Message)),
    languageCode: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    inputTypes: Schema.optional(Schema.Array(Schema.String)),
    turns: Schema.optional(Schema.Array(ConversationTurn)),
  }).annotate({ identifier: "Conversation" });

export interface RetrieveToolsRequest {
  /** Optional. If true, the returned tools will contain raw descriptions and schemas directly from the server, bypassing any stored persistence configurations (overrides/snapshots). */
  bypassPersistenceConfig?: boolean;
  /** Optional. The identifiers of the tools to retrieve from the toolset. If empty, all tools in the toolset will be returned. */
  toolIds?: ReadonlyArray<string>;
}

export const RetrieveToolsRequest: Schema.Schema<RetrieveToolsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bypassPersistenceConfig: Schema.optional(Schema.Boolean),
    toolIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "RetrieveToolsRequest" });

export interface DeleteEvaluationRunOperationMetadata {}

export const DeleteEvaluationRunOperationMetadata: Schema.Schema<DeleteEvaluationRunOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DeleteEvaluationRunOperationMetadata",
  });

export interface ListChangelogsResponse {
  /** The list of changelogs. */
  changelogs?: ReadonlyArray<Changelog>;
  /** A token that can be sent as ListChangelogsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListChangelogsResponse: Schema.Schema<ListChangelogsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    changelogs: Schema.optional(Schema.Array(Changelog)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListChangelogsResponse" });

export interface GenerateAppResourceRequestToolGenerationConfigOpenApiToolsetGenerationConfigOperationGenerationConfig {
  /** Required. The uri of the tool. This should include query and path parameters if any. */
  method?: string;
  /** Required. The path of the tool to be appended to the base uri. This should include query and path parameters if any. */
  path?: string;
  /** Required. A sample request to the tool in JSON format. Skip if the tool does not support request body. */
  requestJson?: string;
  /** Required. A sample response from the tool in JSON format. */
  responseJson?: string;
}

export const GenerateAppResourceRequestToolGenerationConfigOpenApiToolsetGenerationConfigOperationGenerationConfig: Schema.Schema<GenerateAppResourceRequestToolGenerationConfigOpenApiToolsetGenerationConfigOperationGenerationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    method: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    requestJson: Schema.optional(Schema.String),
    responseJson: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GenerateAppResourceRequestToolGenerationConfigOpenApiToolsetGenerationConfigOperationGenerationConfig",
  });

export interface GenerateAppResourceRequestToolGenerationConfigOpenApiToolsetGenerationConfig {
  /** Required. The base uri of the tool. */
  uri?: string;
  /** Required. The list of operations to be added to the Open API schema. */
  operationGenerationConfigs?: ReadonlyArray<GenerateAppResourceRequestToolGenerationConfigOpenApiToolsetGenerationConfigOperationGenerationConfig>;
}

export const GenerateAppResourceRequestToolGenerationConfigOpenApiToolsetGenerationConfig: Schema.Schema<GenerateAppResourceRequestToolGenerationConfigOpenApiToolsetGenerationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    operationGenerationConfigs: Schema.optional(
      Schema.Array(
        GenerateAppResourceRequestToolGenerationConfigOpenApiToolsetGenerationConfigOperationGenerationConfig,
      ),
    ),
  }).annotate({
    identifier:
      "GenerateAppResourceRequestToolGenerationConfigOpenApiToolsetGenerationConfig",
  });

export interface GenerateAppResourceRequestToolGenerationConfig {
  /** Optional. The context which describes the tool to be generated. This can be empty if the tool request & response are provided. */
  context?: string;
  /** Optional. The files to be used as context. */
  fileContexts?: ReadonlyArray<FileContext>;
  /** Optional. The configuration to be used to generate an Open API schema. */
  openApiToolsetGenerationConfig?: GenerateAppResourceRequestToolGenerationConfigOpenApiToolsetGenerationConfig;
}

export const GenerateAppResourceRequestToolGenerationConfig: Schema.Schema<GenerateAppResourceRequestToolGenerationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    context: Schema.optional(Schema.String),
    fileContexts: Schema.optional(Schema.Array(FileContext)),
    openApiToolsetGenerationConfig: Schema.optional(
      GenerateAppResourceRequestToolGenerationConfigOpenApiToolsetGenerationConfig,
    ),
  }).annotate({ identifier: "GenerateAppResourceRequestToolGenerationConfig" });

export interface BatchDeleteConversationsResponse {
  /** The list of conversations that were successfully deleted. */
  deletedConversations?: ReadonlyArray<string>;
  /** The list of conversations that failed to be deleted. */
  failedConversations?: ReadonlyArray<string>;
  /** Optional. A list of error messages associated with conversations that failed to be deleted. */
  errorMessages?: ReadonlyArray<string>;
}

export const BatchDeleteConversationsResponse: Schema.Schema<BatchDeleteConversationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deletedConversations: Schema.optional(Schema.Array(Schema.String)),
    failedConversations: Schema.optional(Schema.Array(Schema.String)),
    errorMessages: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BatchDeleteConversationsResponse" });

export interface GenerateAppResourceRequestHillClimbingFixConfig {
  /** Required. The quality report used to inform the instruction following fix. */
  qualityReport?: QualityReport;
}

export const GenerateAppResourceRequestHillClimbingFixConfig: Schema.Schema<GenerateAppResourceRequestHillClimbingFixConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    qualityReport: Schema.optional(QualityReport),
  }).annotate({
    identifier: "GenerateAppResourceRequestHillClimbingFixConfig",
  });

export interface GenerateChatTokenResponse {
  /** The session scoped token for chat widget to authenticate with Session APIs. */
  chatToken?: string;
  /** The time at which the chat token expires. */
  expireTime?: string;
}

export const GenerateChatTokenResponse: Schema.Schema<GenerateChatTokenResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    chatToken: Schema.optional(Schema.String),
    expireTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerateChatTokenResponse" });

export interface ExportEvaluationsRequest {
  /** Required. The resource names of the evaluations to export. */
  names?: ReadonlyArray<string>;
  /** Optional. The export options for the evaluations. */
  exportOptions?: ExportOptions;
  /** Optional. Includes evaluations in the export. At least one of include_evaluation_results or include_evaluations must be set. */
  includeEvaluations?: boolean;
  /** Optional. Includes evaluation results in the export. At least one of include_evaluation_results or include_evaluations must be set. */
  includeEvaluationResults?: boolean;
}

export const ExportEvaluationsRequest: Schema.Schema<ExportEvaluationsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)),
    exportOptions: Schema.optional(ExportOptions),
    includeEvaluations: Schema.optional(Schema.Boolean),
    includeEvaluationResults: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ExportEvaluationsRequest" });

export interface ListScheduledEvaluationRunsResponse {
  /** The list of scheduled evaluation runs. */
  scheduledEvaluationRuns?: ReadonlyArray<ScheduledEvaluationRun>;
  /** A token that can be sent as ListScheduledEvaluationRunsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListScheduledEvaluationRunsResponse: Schema.Schema<ListScheduledEvaluationRunsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scheduledEvaluationRuns: Schema.optional(
      Schema.Array(ScheduledEvaluationRun),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListScheduledEvaluationRunsResponse" });

export interface ExportEvaluationRunsRequest {
  /** Required. The resource names of the evaluation runs to export. */
  names?: ReadonlyArray<string>;
  /** Optional. The export options for the evaluation runs. */
  exportOptions?: ExportOptions;
}

export const ExportEvaluationRunsRequest: Schema.Schema<ExportEvaluationRunsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)),
    exportOptions: Schema.optional(ExportOptions),
  }).annotate({ identifier: "ExportEvaluationRunsRequest" });

export interface ExportEvaluationRunsResponse {
  /** The content of the exported Evaluation Runs. This will be populated if gcs_uri was not specified in the request. */
  evaluationRunsContent?: string;
  /** The Google Cloud Storage URI folder where the exported Evaluation Runs were written. This will be populated if gcs_uri was specified in the request. */
  evaluationRunsUri?: string;
}

export const ExportEvaluationRunsResponse: Schema.Schema<ExportEvaluationRunsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    evaluationRunsContent: Schema.optional(Schema.String),
    evaluationRunsUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExportEvaluationRunsResponse" });

export interface ImportEvaluationsOperationMetadata {
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
}

export const ImportEvaluationsOperationMetadata: Schema.Schema<ImportEvaluationsOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ImportEvaluationsOperationMetadata" });

export interface ImportEvaluationsRequest {
  /** The conversations to import the evaluations from. */
  conversationList?: ImportEvaluationsRequestConversationList;
  /** The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI from which to import evaluations. The format of this URI must be `gs:///`. */
  gcsUri?: string;
  /** Raw bytes representing the csv file with the evaluations structure. */
  csvContent?: string;
  /** Optional. Options governing the import process for the evaluations. */
  importOptions?: ImportEvaluationsRequestImportOptions;
}

export const ImportEvaluationsRequest: Schema.Schema<ImportEvaluationsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationList: Schema.optional(ImportEvaluationsRequestConversationList),
    gcsUri: Schema.optional(Schema.String),
    csvContent: Schema.optional(Schema.String),
    importOptions: Schema.optional(ImportEvaluationsRequestImportOptions),
  }).annotate({ identifier: "ImportEvaluationsRequest" });

export interface ListAppVersionsResponse {
  /** The list of app versions. */
  appVersions?: ReadonlyArray<AppVersion>;
  /** A token that can be sent as ListAppVersionsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListAppVersionsResponse: Schema.Schema<ListAppVersionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appVersions: Schema.optional(Schema.Array(AppVersion)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAppVersionsResponse" });

export interface LfA2aV1SendMessageResponse {
  /** The task created or updated by the message. */
  task?: LfA2aV1Task;
  /** A message from the agent. */
  message?: LfA2aV1Message;
}

export const LfA2aV1SendMessageResponse: Schema.Schema<LfA2aV1SendMessageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    task: Schema.optional(LfA2aV1Task),
    message: Schema.optional(LfA2aV1Message),
  }).annotate({ identifier: "LfA2aV1SendMessageResponse" });

export interface ListConversationsResponse {
  /** The list of conversations. */
  conversations?: ReadonlyArray<Conversation>;
  /** A token that can be sent as ListConversationsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListConversationsResponse: Schema.Schema<ListConversationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversations: Schema.optional(Schema.Array(Conversation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListConversationsResponse" });

export interface GenerateAppResourceRequest {
  /** The agent resource to be used by the LLM assistant, can be empty for generating a new agent. */
  agent?: Agent;
  /** The tool resource to be used by the LLM assistant, can be empty for generating a new tool. */
  tool?: Tool;
  /** Optional. The configuration to be used to generate the agents and tools. */
  appGenerationConfig?: GenerateAppResourceRequestAppGenerationConfig;
  /** Optional. The configuration to be used for hill climbing fixes. */
  hillClimbingFixConfig?: GenerateAppResourceRequestHillClimbingFixConfig;
  /** Optional. List of refine instructions to be used to refine the resource. */
  refineInstructions?: ReadonlyArray<GenerateAppResourceRequestRefineInstructions>;
  /** Optional. The configuration to be used for quality report generation. */
  qualityReportGenerationConfig?: GenerateAppResourceRequestQualityReportGenerationConfig;
  /** The toolset resource to be used by the LLM assistant, can be empty for generating a new toolset. */
  toolset?: Toolset;
  /** Optional. The configuration to be used to generate the tool. */
  toolGenerationConfig?: GenerateAppResourceRequestToolGenerationConfig;
  /** Optional. The configuration to be used to generate the evaluations. */
  evaluationGenerationConfig?: GenerateAppResourceRequestEvaluationGenerationConfig;
  /** Optional. The configuration to be used to generate the evaluation personas. */
  evaluationPersonasGenerationConfig?: GenerateAppResourceRequestEvaluationPersonasGenerationConfig;
}

export const GenerateAppResourceRequest: Schema.Schema<GenerateAppResourceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agent: Schema.optional(Agent),
    tool: Schema.optional(Tool),
    appGenerationConfig: Schema.optional(
      GenerateAppResourceRequestAppGenerationConfig,
    ),
    hillClimbingFixConfig: Schema.optional(
      GenerateAppResourceRequestHillClimbingFixConfig,
    ),
    refineInstructions: Schema.optional(
      Schema.Array(GenerateAppResourceRequestRefineInstructions),
    ),
    qualityReportGenerationConfig: Schema.optional(
      GenerateAppResourceRequestQualityReportGenerationConfig,
    ),
    toolset: Schema.optional(Toolset),
    toolGenerationConfig: Schema.optional(
      GenerateAppResourceRequestToolGenerationConfig,
    ),
    evaluationGenerationConfig: Schema.optional(
      GenerateAppResourceRequestEvaluationGenerationConfig,
    ),
    evaluationPersonasGenerationConfig: Schema.optional(
      GenerateAppResourceRequestEvaluationPersonasGenerationConfig,
    ),
  }).annotate({ identifier: "GenerateAppResourceRequest" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface OperationMetadata {
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have google.longrunning.Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. The time the operation finished running. */
  endTime?: string;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface LfA2aV1SendMessageRequest {
  /** Required. The message to send to the agent. */
  message?: LfA2aV1Message;
  /** A flexible key-value map for passing additional context or parameters. */
  metadata?: Record<string, unknown>;
  /** Configuration for the send request. */
  configuration?: LfA2aV1SendMessageConfiguration;
}

export const LfA2aV1SendMessageRequest: Schema.Schema<LfA2aV1SendMessageRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(LfA2aV1Message),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    configuration: Schema.optional(LfA2aV1SendMessageConfiguration),
  }).annotate({ identifier: "LfA2aV1SendMessageRequest" });

export interface ListEvaluationDatasetsResponse {
  /** The list of evaluation datasets. */
  evaluationDatasets?: ReadonlyArray<EvaluationDataset>;
  /** A token that can be sent as ListEvaluationDatasetsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListEvaluationDatasetsResponse: Schema.Schema<ListEvaluationDatasetsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    evaluationDatasets: Schema.optional(Schema.Array(EvaluationDataset)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListEvaluationDatasetsResponse" });

export interface ImportEvaluationsResponse {
  /** The number of evaluation results that either failed to import entirely or completed import with one or more errors. */
  evaluationResultImportFailureCount?: number;
  /** The number of evaluation runs that either failed to import entirely or completed import with one or more errors. */
  evaluationRunImportFailureCount?: number;
  /** The list of evaluation runs that were imported into the app. */
  evaluationRuns?: ReadonlyArray<EvaluationRun>;
  /** The list of evaluation results that were imported into the app. */
  evaluationResults?: ReadonlyArray<EvaluationResult>;
  /** The list of evaluations that were imported into the app. */
  evaluations?: ReadonlyArray<Evaluation>;
  /** The number of evaluations that either failed to import entirely or completed import with one or more errors. */
  importFailureCount?: number;
  /** Optional. A list of error messages associated with evaluations that failed to be imported. */
  errorMessages?: ReadonlyArray<string>;
}

export const ImportEvaluationsResponse: Schema.Schema<ImportEvaluationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    evaluationResultImportFailureCount: Schema.optional(Schema.Number),
    evaluationRunImportFailureCount: Schema.optional(Schema.Number),
    evaluationRuns: Schema.optional(Schema.Array(EvaluationRun)),
    evaluationResults: Schema.optional(Schema.Array(EvaluationResult)),
    evaluations: Schema.optional(Schema.Array(Evaluation)),
    importFailureCount: Schema.optional(Schema.Number),
    errorMessages: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ImportEvaluationsResponse" });

export interface ImportAppRequestImportOptions {
  /** Optional. The strategy to use when resolving conflicts during import. */
  conflictResolutionStrategy?:
    | "CONFLICT_RESOLUTION_STRATEGY_UNSPECIFIED"
    | "REPLACE"
    | "OVERWRITE"
    | (string & {});
}

export const ImportAppRequestImportOptions: Schema.Schema<ImportAppRequestImportOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conflictResolutionStrategy: Schema.optional(Schema.String),
  }).annotate({ identifier: "ImportAppRequestImportOptions" });

export interface ImportAppRequest {
  /** The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI from which to import app. The format of this URI must be `gs:///`. */
  gcsUri?: string;
  /** Optional. Flag for overriding the app lock during import. If set to true, the import process will ignore the app lock. */
  ignoreAppLock?: boolean;
  /** Optional. The ID to use for the imported app. * If not specified, a unique ID will be automatically assigned for the app. * Otherwise, the imported app will use this ID as the final component of its resource name. If an app with the same ID already exists at the specified location in the project, the content of the existing app will be replaced. */
  appId?: string;
  /** Optional. The display name of the app to import. * If the app is created on import, and the display name is specified, the imported app will use this display name. If a conflict is detected with an existing app, a timestamp will be appended to the display name to make it unique. * If the app is a reimport, this field should not be set. Providing a display name during reimport will result in an INVALID_ARGUMENT error. */
  displayName?: string;
  /** Optional. Options governing the import process for the app. */
  importOptions?: ImportAppRequestImportOptions;
  /** Raw bytes representing the compressed zip file with the app folder structure. */
  appContent?: string;
}

export const ImportAppRequest: Schema.Schema<ImportAppRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsUri: Schema.optional(Schema.String),
    ignoreAppLock: Schema.optional(Schema.Boolean),
    appId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    importOptions: Schema.optional(ImportAppRequestImportOptions),
    appContent: Schema.optional(Schema.String),
  }).annotate({ identifier: "ImportAppRequest" });

export interface ExportEvaluationResultsResponse {
  /** The Google Cloud Storage URI folder where the exported Evaluation Results were written. This will be populated if gcs_uri was specified in the request. */
  evaluationResultsUri?: string;
  /** The content of the exported Evaluation Results. This will be populated if gcs_uri was not specified in the request. */
  evaluationResultsContent?: string;
}

export const ExportEvaluationResultsResponse: Schema.Schema<ExportEvaluationResultsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    evaluationResultsUri: Schema.optional(Schema.String),
    evaluationResultsContent: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExportEvaluationResultsResponse" });

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

export interface UpdateSecuritySettingsProjectsLocationsRequest {
  /** Identifier. The unique identifier of the security settings. Format: `projects/{project}/locations/{location}/securitySettings` */
  name: string;
  /** Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated. */
  updateMask?: string;
  /** Request body */
  body?: SecuritySettings;
}

export const UpdateSecuritySettingsProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(SecuritySettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateSecuritySettingsProjectsLocationsRequest>;

export type UpdateSecuritySettingsProjectsLocationsResponse = SecuritySettings;
export const UpdateSecuritySettingsProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SecuritySettings;

export type UpdateSecuritySettingsProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the security settings for the project and location. */
export const updateSecuritySettingsProjectsLocations: API.OperationMethod<
  UpdateSecuritySettingsProjectsLocationsRequest,
  UpdateSecuritySettingsProjectsLocationsResponse,
  UpdateSecuritySettingsProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSecuritySettingsProjectsLocationsRequest,
  output: UpdateSecuritySettingsProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetSecuritySettingsProjectsLocationsRequest {
  /** Required. The resource name of the security settings to retrieve. Format: `projects/{project}/locations/{location}/securitySettings` */
  name: string;
}

export const GetSecuritySettingsProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetSecuritySettingsProjectsLocationsRequest>;

export type GetSecuritySettingsProjectsLocationsResponse = SecuritySettings;
export const GetSecuritySettingsProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SecuritySettings;

export type GetSecuritySettingsProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves the security settings for the project and location. */
export const getSecuritySettingsProjectsLocations: API.OperationMethod<
  GetSecuritySettingsProjectsLocationsRequest,
  GetSecuritySettingsProjectsLocationsResponse,
  GetSecuritySettingsProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSecuritySettingsProjectsLocationsRequest,
  output: GetSecuritySettingsProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsRequest {
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse = ListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
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
  /** Resource name for the location. */
  name: string;
}

export const GetProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRequest>;

export type GetProjectsLocationsResponse = Location;
export const GetProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Location;

export type GetProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Gets information about a location. */
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

export interface CancelProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsOperationsRequest>;

export type CancelProjectsLocationsOperationsResponse = Empty;
export const CancelProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
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
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsOperationsRequest>;

export type GetProjectsLocationsOperationsResponse = Operation;
export const GetProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
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

export interface DeleteProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsOperationsRequest>;

export type DeleteProjectsLocationsOperationsResponse = Empty;
export const DeleteProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteProjectsLocationsOperations: API.OperationMethod<
  DeleteProjectsLocationsOperationsRequest,
  DeleteProjectsLocationsOperationsResponse,
  DeleteProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsOperationsRequest,
  output: DeleteProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list page size. */
  pageSize?: number;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list filter. */
  filter?: string;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page token. */
  pageToken?: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse = ListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
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

export interface GetProjectsLocationsAppsRequest {
  /** Required. The resource name of the app to retrieve. */
  name: string;
}

export const GetProjectsLocationsAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAppsRequest>;

export type GetProjectsLocationsAppsResponse = App;
export const GetProjectsLocationsAppsResponse = /*@__PURE__*/ /*#__PURE__*/ App;

export type GetProjectsLocationsAppsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of the specified app. */
export const getProjectsLocationsApps: API.OperationMethod<
  GetProjectsLocationsAppsRequest,
  GetProjectsLocationsAppsResponse,
  GetProjectsLocationsAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAppsRequest,
  output: GetProjectsLocationsAppsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ImportEvaluationsProjectsLocationsAppsRequest {
  /** Required. The app to import the evaluations into. Format: `projects/{project}/locations/{location}/apps/{app}` */
  parent: string;
  /** Request body */
  body?: ImportEvaluationsRequest;
}

export const ImportEvaluationsProjectsLocationsAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ImportEvaluationsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}:importEvaluations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ImportEvaluationsProjectsLocationsAppsRequest>;

export type ImportEvaluationsProjectsLocationsAppsResponse = Operation;
export const ImportEvaluationsProjectsLocationsAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ImportEvaluationsProjectsLocationsAppsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Imports evaluations into the app. */
export const importEvaluationsProjectsLocationsApps: API.OperationMethod<
  ImportEvaluationsProjectsLocationsAppsRequest,
  ImportEvaluationsProjectsLocationsAppsResponse,
  ImportEvaluationsProjectsLocationsAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportEvaluationsProjectsLocationsAppsRequest,
  output: ImportEvaluationsProjectsLocationsAppsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RetrieveToolSchemaProjectsLocationsAppsRequest {
  /** Required. The resource name of the app which the tool/toolset belongs to. Format: `projects/{project}/locations/{location}/apps/{app}` */
  parent: string;
  /** Request body */
  body?: RetrieveToolSchemaRequest;
}

export const RetrieveToolSchemaProjectsLocationsAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(RetrieveToolSchemaRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}:retrieveToolSchema",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RetrieveToolSchemaProjectsLocationsAppsRequest>;

export type RetrieveToolSchemaProjectsLocationsAppsResponse =
  RetrieveToolSchemaResponse;
export const RetrieveToolSchemaProjectsLocationsAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RetrieveToolSchemaResponse;

export type RetrieveToolSchemaProjectsLocationsAppsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Retrieve the schema of the given tool. The schema is computed on the fly for the given instance of the tool. */
export const retrieveToolSchemaProjectsLocationsApps: API.OperationMethod<
  RetrieveToolSchemaProjectsLocationsAppsRequest,
  RetrieveToolSchemaProjectsLocationsAppsResponse,
  RetrieveToolSchemaProjectsLocationsAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RetrieveToolSchemaProjectsLocationsAppsRequest,
  output: RetrieveToolSchemaProjectsLocationsAppsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ImportAppProjectsLocationsAppsRequest {
  /** Required. The parent resource name with the location of the app to import. */
  parent: string;
  /** Request body */
  body?: ImportAppRequest;
}

export const ImportAppProjectsLocationsAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ImportAppRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}/apps:importApp",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ImportAppProjectsLocationsAppsRequest>;

export type ImportAppProjectsLocationsAppsResponse = Operation;
export const ImportAppProjectsLocationsAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ImportAppProjectsLocationsAppsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Imports the specified app. */
export const importAppProjectsLocationsApps: API.OperationMethod<
  ImportAppProjectsLocationsAppsRequest,
  ImportAppProjectsLocationsAppsResponse,
  ImportAppProjectsLocationsAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportAppProjectsLocationsAppsRequest,
  output: ImportAppProjectsLocationsAppsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAppsRequest {
  /** Identifier. The unique identifier of the app. Format: `projects/{project}/locations/{location}/apps/{app}` */
  name: string;
  /** Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated. */
  updateMask?: string;
  /** Request body */
  body?: App;
}

export const PatchProjectsLocationsAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(App).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAppsRequest>;

export type PatchProjectsLocationsAppsResponse = App;
export const PatchProjectsLocationsAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ App;

export type PatchProjectsLocationsAppsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the specified app. */
export const patchProjectsLocationsApps: API.OperationMethod<
  PatchProjectsLocationsAppsRequest,
  PatchProjectsLocationsAppsResponse,
  PatchProjectsLocationsAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAppsRequest,
  output: PatchProjectsLocationsAppsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAppsRequest {
  /** Required. The resource name of the location to create an app in. */
  parent: string;
  /** Optional. The ID to use for the app, which will become the final component of the app's resource name. If not provided, a unique ID will be automatically assigned for the app. */
  appId?: string;
  /** Request body */
  body?: App;
}

export const CreateProjectsLocationsAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    appId: Schema.optional(Schema.String).pipe(T.HttpQuery("appId")),
    body: Schema.optional(App).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta/{+parent}/apps", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAppsRequest>;

export type CreateProjectsLocationsAppsResponse = Operation;
export const CreateProjectsLocationsAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsAppsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new app in the given project and location. */
export const createProjectsLocationsApps: API.OperationMethod<
  CreateProjectsLocationsAppsRequest,
  CreateProjectsLocationsAppsResponse,
  CreateProjectsLocationsAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAppsRequest,
  output: CreateProjectsLocationsAppsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestPersonaVoiceProjectsLocationsAppsRequest {
  /** Required. the resource name of the app to test the persona voice for. Format: `projects/{project}/locations/{location}/apps/{app}` */
  app: string;
  /** Request body */
  body?: TestPersonaVoiceRequest;
}

export const TestPersonaVoiceProjectsLocationsAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    app: Schema.String.pipe(T.HttpPath("app")),
    body: Schema.optional(TestPersonaVoiceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+app}:testPersonaVoice",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestPersonaVoiceProjectsLocationsAppsRequest>;

export type TestPersonaVoiceProjectsLocationsAppsResponse =
  TestPersonaVoiceResponse;
export const TestPersonaVoiceProjectsLocationsAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestPersonaVoiceResponse;

export type TestPersonaVoiceProjectsLocationsAppsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Tests the voice of a persona. Also accepts a default persona. */
export const testPersonaVoiceProjectsLocationsApps: API.OperationMethod<
  TestPersonaVoiceProjectsLocationsAppsRequest,
  TestPersonaVoiceProjectsLocationsAppsResponse,
  TestPersonaVoiceProjectsLocationsAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestPersonaVoiceProjectsLocationsAppsRequest,
  output: TestPersonaVoiceProjectsLocationsAppsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GenerateAppResourceProjectsLocationsAppsRequest {
  /** Required. The resource name of the app to generate the resource for. */
  parent: string;
  /** Request body */
  body?: GenerateAppResourceRequest;
}

export const GenerateAppResourceProjectsLocationsAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GenerateAppResourceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}:generateAppResource",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateAppResourceProjectsLocationsAppsRequest>;

export type GenerateAppResourceProjectsLocationsAppsResponse = Operation;
export const GenerateAppResourceProjectsLocationsAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GenerateAppResourceProjectsLocationsAppsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generates specific resources (e.g. agent) in the app using LLM assistant. */
export const generateAppResourceProjectsLocationsApps: API.OperationMethod<
  GenerateAppResourceProjectsLocationsAppsRequest,
  GenerateAppResourceProjectsLocationsAppsResponse,
  GenerateAppResourceProjectsLocationsAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateAppResourceProjectsLocationsAppsRequest,
  output: GenerateAppResourceProjectsLocationsAppsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExportAppProjectsLocationsAppsRequest {
  /** Required. The resource name of the app to export. */
  name: string;
  /** Request body */
  body?: ExportAppRequest;
}

export const ExportAppProjectsLocationsAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ExportAppRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta/{+name}:exportApp", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ExportAppProjectsLocationsAppsRequest>;

export type ExportAppProjectsLocationsAppsResponse = Operation;
export const ExportAppProjectsLocationsAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ExportAppProjectsLocationsAppsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Exports the specified app. */
export const exportAppProjectsLocationsApps: API.OperationMethod<
  ExportAppProjectsLocationsAppsRequest,
  ExportAppProjectsLocationsAppsResponse,
  ExportAppProjectsLocationsAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportAppProjectsLocationsAppsRequest,
  output: ExportAppProjectsLocationsAppsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExecuteToolProjectsLocationsAppsRequest {
  /** Required. The resource name of the app which the tool/toolset belongs to. Format: `projects/{project}/locations/{location}/apps/{app}` */
  parent: string;
  /** Request body */
  body?: ExecuteToolRequest;
}

export const ExecuteToolProjectsLocationsAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ExecuteToolRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}:executeTool",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExecuteToolProjectsLocationsAppsRequest>;

export type ExecuteToolProjectsLocationsAppsResponse = ExecuteToolResponse;
export const ExecuteToolProjectsLocationsAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ExecuteToolResponse;

export type ExecuteToolProjectsLocationsAppsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Executes the given tool with the given arguments. */
export const executeToolProjectsLocationsApps: API.OperationMethod<
  ExecuteToolProjectsLocationsAppsRequest,
  ExecuteToolProjectsLocationsAppsResponse,
  ExecuteToolProjectsLocationsAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExecuteToolProjectsLocationsAppsRequest,
  output: ExecuteToolProjectsLocationsAppsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RunEvaluationProjectsLocationsAppsRequest {
  /** Required. The app to evaluate. Format: `projects/{project}/locations/{location}/apps/{app}` */
  app: string;
  /** Request body */
  body?: RunEvaluationRequest;
}

export const RunEvaluationProjectsLocationsAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    app: Schema.String.pipe(T.HttpPath("app")),
    body: Schema.optional(RunEvaluationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+app}:runEvaluation",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RunEvaluationProjectsLocationsAppsRequest>;

export type RunEvaluationProjectsLocationsAppsResponse = Operation;
export const RunEvaluationProjectsLocationsAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RunEvaluationProjectsLocationsAppsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Runs an evaluation of the app. */
export const runEvaluationProjectsLocationsApps: API.OperationMethod<
  RunEvaluationProjectsLocationsAppsRequest,
  RunEvaluationProjectsLocationsAppsResponse,
  RunEvaluationProjectsLocationsAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RunEvaluationProjectsLocationsAppsRequest,
  output: RunEvaluationProjectsLocationsAppsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAppsRequest {
  /** Required. The resource name of the app to delete. */
  name: string;
  /** Optional. The current etag of the app. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the app, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
}

export const DeleteProjectsLocationsAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAppsRequest>;

export type DeleteProjectsLocationsAppsResponse = Operation;
export const DeleteProjectsLocationsAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsAppsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified app. */
export const deleteProjectsLocationsApps: API.OperationMethod<
  DeleteProjectsLocationsAppsRequest,
  DeleteProjectsLocationsAppsResponse,
  DeleteProjectsLocationsAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAppsRequest,
  output: DeleteProjectsLocationsAppsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAppsRequest {
  /** Optional. The next_page_token value returned from a previous list AgentService.ListApps call. */
  pageToken?: string;
  /** Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Optional. Filter to be applied when listing the apps. See https://google.aip.dev/160 for more details. */
  filter?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Required. The resource name of the location to list apps from. */
  parent: string;
}

export const ListProjectsLocationsAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/apps" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAppsRequest>;

export type ListProjectsLocationsAppsResponse = ListAppsResponse;
export const ListProjectsLocationsAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAppsResponse;

export type ListProjectsLocationsAppsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists apps in the given project and location. */
export const listProjectsLocationsApps: API.PaginatedOperationMethod<
  ListProjectsLocationsAppsRequest,
  ListProjectsLocationsAppsResponse,
  ListProjectsLocationsAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAppsRequest,
  output: ListProjectsLocationsAppsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsAppsEvaluationRunsRequest {
  /** Required. The resource name of the evaluation run to retrieve. */
  name: string;
}

export const GetProjectsLocationsAppsEvaluationRunsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAppsEvaluationRunsRequest>;

export type GetProjectsLocationsAppsEvaluationRunsResponse = EvaluationRun;
export const GetProjectsLocationsAppsEvaluationRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ EvaluationRun;

export type GetProjectsLocationsAppsEvaluationRunsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of the specified evaluation run. */
export const getProjectsLocationsAppsEvaluationRuns: API.OperationMethod<
  GetProjectsLocationsAppsEvaluationRunsRequest,
  GetProjectsLocationsAppsEvaluationRunsResponse,
  GetProjectsLocationsAppsEvaluationRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAppsEvaluationRunsRequest,
  output: GetProjectsLocationsAppsEvaluationRunsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsAppsEvaluationRunsRequest {
  /** Required. The resource name of the app to list evaluation runs from. */
  parent: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Filter to be applied when listing the evaluation runs. See https://google.aip.dev/160 for more details. */
  filter?: string;
  /** Optional. Field to sort by. Only "name" and "create_time", and "update_time" are supported. Time fields are ordered in descending order, and the name field is ordered in ascending order. If not included, "update_time" will be the default. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Optional. The next_page_token value returned from a previous list EvaluationService.ListEvaluationRuns call. */
  pageToken?: string;
}

export const ListProjectsLocationsAppsEvaluationRunsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/evaluationRuns" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAppsEvaluationRunsRequest>;

export type ListProjectsLocationsAppsEvaluationRunsResponse =
  ListEvaluationRunsResponse;
export const ListProjectsLocationsAppsEvaluationRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListEvaluationRunsResponse;

export type ListProjectsLocationsAppsEvaluationRunsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all evaluation runs in the given app. */
export const listProjectsLocationsAppsEvaluationRuns: API.PaginatedOperationMethod<
  ListProjectsLocationsAppsEvaluationRunsRequest,
  ListProjectsLocationsAppsEvaluationRunsResponse,
  ListProjectsLocationsAppsEvaluationRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAppsEvaluationRunsRequest,
  output: ListProjectsLocationsAppsEvaluationRunsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ExportProjectsLocationsAppsEvaluationRunsRequest {
  /** Required. The resource name of the app to export evaluation runs from. Format: `projects/{project}/locations/{location}/apps/{app}` */
  parent: string;
  /** Request body */
  body?: ExportEvaluationRunsRequest;
}

export const ExportProjectsLocationsAppsEvaluationRunsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ExportEvaluationRunsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}/evaluationRuns:export",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExportProjectsLocationsAppsEvaluationRunsRequest>;

export type ExportProjectsLocationsAppsEvaluationRunsResponse = Operation;
export const ExportProjectsLocationsAppsEvaluationRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ExportProjectsLocationsAppsEvaluationRunsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Exports evaluations runs. */
export const exportProjectsLocationsAppsEvaluationRuns: API.OperationMethod<
  ExportProjectsLocationsAppsEvaluationRunsRequest,
  ExportProjectsLocationsAppsEvaluationRunsResponse,
  ExportProjectsLocationsAppsEvaluationRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportProjectsLocationsAppsEvaluationRunsRequest,
  output: ExportProjectsLocationsAppsEvaluationRunsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAppsEvaluationRunsRequest {
  /** Required. The resource name of the evaluation run to delete. */
  name: string;
}

export const DeleteProjectsLocationsAppsEvaluationRunsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAppsEvaluationRunsRequest>;

export type DeleteProjectsLocationsAppsEvaluationRunsResponse = Operation;
export const DeleteProjectsLocationsAppsEvaluationRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsAppsEvaluationRunsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an evaluation run. */
export const deleteProjectsLocationsAppsEvaluationRuns: API.OperationMethod<
  DeleteProjectsLocationsAppsEvaluationRunsRequest,
  DeleteProjectsLocationsAppsEvaluationRunsResponse,
  DeleteProjectsLocationsAppsEvaluationRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAppsEvaluationRunsRequest,
  output: DeleteProjectsLocationsAppsEvaluationRunsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAppsToolsRequest {
  /** Required. The resource name of the tool to retrieve. */
  name: string;
}

export const GetProjectsLocationsAppsToolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAppsToolsRequest>;

export type GetProjectsLocationsAppsToolsResponse = Tool;
export const GetProjectsLocationsAppsToolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Tool;

export type GetProjectsLocationsAppsToolsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of the specified tool. */
export const getProjectsLocationsAppsTools: API.OperationMethod<
  GetProjectsLocationsAppsToolsRequest,
  GetProjectsLocationsAppsToolsResponse,
  GetProjectsLocationsAppsToolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAppsToolsRequest,
  output: GetProjectsLocationsAppsToolsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsAppsToolsRequest {
  /** Identifier. The resource name of the tool. Format: * `projects/{project}/locations/{location}/apps/{app}/tools/{tool}` for standalone tools. * `projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}/tools/{tool}` for tools retrieved from a toolset. These tools are dynamic and output-only; they cannot be referenced directly where a tool is expected. */
  name: string;
  /** Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated. */
  updateMask?: string;
  /** Request body */
  body?: Tool;
}

export const PatchProjectsLocationsAppsToolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Tool).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAppsToolsRequest>;

export type PatchProjectsLocationsAppsToolsResponse = Tool;
export const PatchProjectsLocationsAppsToolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Tool;

export type PatchProjectsLocationsAppsToolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the specified tool. */
export const patchProjectsLocationsAppsTools: API.OperationMethod<
  PatchProjectsLocationsAppsToolsRequest,
  PatchProjectsLocationsAppsToolsResponse,
  PatchProjectsLocationsAppsToolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAppsToolsRequest,
  output: PatchProjectsLocationsAppsToolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAppsToolsRequest {
  /** Required. The resource name of the app to create a tool in. */
  parent: string;
  /** Optional. The ID to use for the tool, which will become the final component of the tool's resource name. If not provided, a unique ID will be automatically assigned for the tool. */
  toolId?: string;
  /** Request body */
  body?: Tool;
}

export const CreateProjectsLocationsAppsToolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    toolId: Schema.optional(Schema.String).pipe(T.HttpQuery("toolId")),
    body: Schema.optional(Tool).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta/{+parent}/tools", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAppsToolsRequest>;

export type CreateProjectsLocationsAppsToolsResponse = Tool;
export const CreateProjectsLocationsAppsToolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Tool;

export type CreateProjectsLocationsAppsToolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new tool in the given app. */
export const createProjectsLocationsAppsTools: API.OperationMethod<
  CreateProjectsLocationsAppsToolsRequest,
  CreateProjectsLocationsAppsToolsResponse,
  CreateProjectsLocationsAppsToolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAppsToolsRequest,
  output: CreateProjectsLocationsAppsToolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAppsToolsRequest {
  /** Optional. Filter to be applied when listing the tools. Use "include_system_tools=true" to include system tools in the response. See https://google.aip.dev/160 for more details. */
  filter?: string;
  /** Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Optional. The next_page_token value returned from a previous list AgentService.ListTools call. */
  pageToken?: string;
  /** Required. The resource name of the app to list tools from. */
  parent: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsAppsToolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/tools" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAppsToolsRequest>;

export type ListProjectsLocationsAppsToolsResponse = ListToolsResponse;
export const ListProjectsLocationsAppsToolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListToolsResponse;

export type ListProjectsLocationsAppsToolsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists tools in the given app. */
export const listProjectsLocationsAppsTools: API.PaginatedOperationMethod<
  ListProjectsLocationsAppsToolsRequest,
  ListProjectsLocationsAppsToolsResponse,
  ListProjectsLocationsAppsToolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAppsToolsRequest,
  output: ListProjectsLocationsAppsToolsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsAppsToolsRequest {
  /** Optional. Indicates whether to forcefully delete the tool, even if it is still referenced by agents/examples. * If `force = false`, the deletion will fail if any agents still reference the tool. * If `force = true`, all existing references from agents will be removed and the tool will be deleted. */
  force?: boolean;
  /** Optional. The current etag of the tool. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the tool, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
  /** Required. The resource name of the tool to delete. */
  name: string;
}

export const DeleteProjectsLocationsAppsToolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAppsToolsRequest>;

export type DeleteProjectsLocationsAppsToolsResponse = Empty;
export const DeleteProjectsLocationsAppsToolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsAppsToolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified tool. */
export const deleteProjectsLocationsAppsTools: API.OperationMethod<
  DeleteProjectsLocationsAppsToolsRequest,
  DeleteProjectsLocationsAppsToolsResponse,
  DeleteProjectsLocationsAppsToolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAppsToolsRequest,
  output: DeleteProjectsLocationsAppsToolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAppsDeploymentsRequest {
  /** Required. The name of the deployment to delete. Format: `projects/{project}/locations/{location}/apps/{app}/deployments/{deployment}` */
  name: string;
  /** Optional. The etag of the deployment. If an etag is provided and does not match the current etag of the deployment, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
}

export const DeleteProjectsLocationsAppsDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAppsDeploymentsRequest>;

export type DeleteProjectsLocationsAppsDeploymentsResponse = Empty;
export const DeleteProjectsLocationsAppsDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsAppsDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified deployment. */
export const deleteProjectsLocationsAppsDeployments: API.OperationMethod<
  DeleteProjectsLocationsAppsDeploymentsRequest,
  DeleteProjectsLocationsAppsDeploymentsResponse,
  DeleteProjectsLocationsAppsDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAppsDeploymentsRequest,
  output: DeleteProjectsLocationsAppsDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAppsDeploymentsRequest {
  /** Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Required. The parent app. Format: `projects/{project}/locations/{location}/apps/{app}` */
  parent: string;
  /** Optional. A page token, received from a previous `ListDeployments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDeployments` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The maximum number of deployments to return. The service may return fewer than this value. If unspecified, at most 50 deployments will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsLocationsAppsDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/deployments" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAppsDeploymentsRequest>;

export type ListProjectsLocationsAppsDeploymentsResponse =
  ListDeploymentsResponse;
export const ListProjectsLocationsAppsDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDeploymentsResponse;

export type ListProjectsLocationsAppsDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists deployments in the given app. */
export const listProjectsLocationsAppsDeployments: API.PaginatedOperationMethod<
  ListProjectsLocationsAppsDeploymentsRequest,
  ListProjectsLocationsAppsDeploymentsResponse,
  ListProjectsLocationsAppsDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAppsDeploymentsRequest,
  output: ListProjectsLocationsAppsDeploymentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsAppsDeploymentsRequest {
  /** Optional. The ID to use for the deployment, which will become the final component of the deployment's resource name. If not provided, a unique ID will be automatically assigned for the deployment. */
  deploymentId?: string;
  /** Required. The parent app. Format: `projects/{project}/locations/{location}/apps/{app}` */
  parent: string;
  /** Request body */
  body?: Deployment;
}

export const CreateProjectsLocationsAppsDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deploymentId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("deploymentId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Deployment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}/deployments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAppsDeploymentsRequest>;

export type CreateProjectsLocationsAppsDeploymentsResponse = Deployment;
export const CreateProjectsLocationsAppsDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Deployment;

export type CreateProjectsLocationsAppsDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new deployment in the given app. */
export const createProjectsLocationsAppsDeployments: API.OperationMethod<
  CreateProjectsLocationsAppsDeploymentsRequest,
  CreateProjectsLocationsAppsDeploymentsResponse,
  CreateProjectsLocationsAppsDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAppsDeploymentsRequest,
  output: CreateProjectsLocationsAppsDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAppsDeploymentsRequest {
  /** Identifier. The resource name of the deployment. Format: `projects/{project}/locations/{location}/apps/{app}/deployments/{deployment}` */
  name: string;
  /** Optional. The list of fields to update. */
  updateMask?: string;
  /** Request body */
  body?: Deployment;
}

export const PatchProjectsLocationsAppsDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Deployment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAppsDeploymentsRequest>;

export type PatchProjectsLocationsAppsDeploymentsResponse = Deployment;
export const PatchProjectsLocationsAppsDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Deployment;

export type PatchProjectsLocationsAppsDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the specified deployment. */
export const patchProjectsLocationsAppsDeployments: API.OperationMethod<
  PatchProjectsLocationsAppsDeploymentsRequest,
  PatchProjectsLocationsAppsDeploymentsResponse,
  PatchProjectsLocationsAppsDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAppsDeploymentsRequest,
  output: PatchProjectsLocationsAppsDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAppsDeploymentsRequest {
  /** Required. The name of the deployment. Format: `projects/{project}/locations/{location}/apps/{app}/deployments/{deployment}` */
  name: string;
}

export const GetProjectsLocationsAppsDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAppsDeploymentsRequest>;

export type GetProjectsLocationsAppsDeploymentsResponse = Deployment;
export const GetProjectsLocationsAppsDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Deployment;

export type GetProjectsLocationsAppsDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of the specified deployment. */
export const getProjectsLocationsAppsDeployments: API.OperationMethod<
  GetProjectsLocationsAppsDeploymentsRequest,
  GetProjectsLocationsAppsDeploymentsResponse,
  GetProjectsLocationsAppsDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAppsDeploymentsRequest,
  output: GetProjectsLocationsAppsDeploymentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsAppsScheduledEvaluationRunsRequest {
  /** Required. The resource name of the scheduled evaluation run to delete. */
  name: string;
  /** Optional. The etag of the ScheduledEvaluationRun. If provided, it must match the server's etag. */
  etag?: string;
}

export const DeleteProjectsLocationsAppsScheduledEvaluationRunsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAppsScheduledEvaluationRunsRequest>;

export type DeleteProjectsLocationsAppsScheduledEvaluationRunsResponse = Empty;
export const DeleteProjectsLocationsAppsScheduledEvaluationRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsAppsScheduledEvaluationRunsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a scheduled evaluation run. */
export const deleteProjectsLocationsAppsScheduledEvaluationRuns: API.OperationMethod<
  DeleteProjectsLocationsAppsScheduledEvaluationRunsRequest,
  DeleteProjectsLocationsAppsScheduledEvaluationRunsResponse,
  DeleteProjectsLocationsAppsScheduledEvaluationRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAppsScheduledEvaluationRunsRequest,
  output: DeleteProjectsLocationsAppsScheduledEvaluationRunsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAppsScheduledEvaluationRunsRequest {
  /** Optional. The next_page_token value returned from a previous list EvaluationService.ListScheduledEvaluationRuns call. */
  pageToken?: string;
  /** Optional. Field to sort by. Supported fields are: "name" (ascending), "create_time" (descending), "update_time" (descending), "next_scheduled_execution" (ascending), and "last_completed_run.create_time" (descending). If not included, "update_time" will be the default. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Optional. Filter to be applied when listing the scheduled evaluation runs. See https://google.aip.dev/160 for more details. Currently supports filtering by: * request.evaluations:evaluation_id * request.evaluation_dataset:evaluation_dataset_id */
  filter?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Required. The resource name of the app to list scheduled evaluation runs from. */
  parent: string;
}

export const ListProjectsLocationsAppsScheduledEvaluationRunsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/scheduledEvaluationRuns" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAppsScheduledEvaluationRunsRequest>;

export type ListProjectsLocationsAppsScheduledEvaluationRunsResponse =
  ListScheduledEvaluationRunsResponse;
export const ListProjectsLocationsAppsScheduledEvaluationRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListScheduledEvaluationRunsResponse;

export type ListProjectsLocationsAppsScheduledEvaluationRunsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all scheduled evaluation runs in the given app. */
export const listProjectsLocationsAppsScheduledEvaluationRuns: API.PaginatedOperationMethod<
  ListProjectsLocationsAppsScheduledEvaluationRunsRequest,
  ListProjectsLocationsAppsScheduledEvaluationRunsResponse,
  ListProjectsLocationsAppsScheduledEvaluationRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAppsScheduledEvaluationRunsRequest,
  output: ListProjectsLocationsAppsScheduledEvaluationRunsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsAppsScheduledEvaluationRunsRequest {
  /** Required. The app to create the scheduled evaluation run for. Format: `projects/{project}/locations/{location}/apps/{app}` */
  parent: string;
  /** Optional. The ID to use for the scheduled evaluation run, which will become the final component of the scheduled evaluation run's resource name. If not provided, a unique ID will be automatically assigned. */
  scheduledEvaluationRunId?: string;
  /** Request body */
  body?: ScheduledEvaluationRun;
}

export const CreateProjectsLocationsAppsScheduledEvaluationRunsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    scheduledEvaluationRunId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("scheduledEvaluationRunId"),
    ),
    body: Schema.optional(ScheduledEvaluationRun).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}/scheduledEvaluationRuns",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAppsScheduledEvaluationRunsRequest>;

export type CreateProjectsLocationsAppsScheduledEvaluationRunsResponse =
  ScheduledEvaluationRun;
export const CreateProjectsLocationsAppsScheduledEvaluationRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ScheduledEvaluationRun;

export type CreateProjectsLocationsAppsScheduledEvaluationRunsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a scheduled evaluation run. */
export const createProjectsLocationsAppsScheduledEvaluationRuns: API.OperationMethod<
  CreateProjectsLocationsAppsScheduledEvaluationRunsRequest,
  CreateProjectsLocationsAppsScheduledEvaluationRunsResponse,
  CreateProjectsLocationsAppsScheduledEvaluationRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAppsScheduledEvaluationRunsRequest,
  output: CreateProjectsLocationsAppsScheduledEvaluationRunsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAppsScheduledEvaluationRunsRequest {
  /** Identifier. The unique identifier of the scheduled evaluation run config. Format: projects/{projectId}/locations/{locationId}/apps/{appId}/scheduledEvaluationRuns/{scheduledEvaluationRunId} */
  name: string;
  /** Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated. */
  updateMask?: string;
  /** Request body */
  body?: ScheduledEvaluationRun;
}

export const PatchProjectsLocationsAppsScheduledEvaluationRunsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(ScheduledEvaluationRun).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAppsScheduledEvaluationRunsRequest>;

export type PatchProjectsLocationsAppsScheduledEvaluationRunsResponse =
  ScheduledEvaluationRun;
export const PatchProjectsLocationsAppsScheduledEvaluationRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ScheduledEvaluationRun;

export type PatchProjectsLocationsAppsScheduledEvaluationRunsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a scheduled evaluation run. */
export const patchProjectsLocationsAppsScheduledEvaluationRuns: API.OperationMethod<
  PatchProjectsLocationsAppsScheduledEvaluationRunsRequest,
  PatchProjectsLocationsAppsScheduledEvaluationRunsResponse,
  PatchProjectsLocationsAppsScheduledEvaluationRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAppsScheduledEvaluationRunsRequest,
  output: PatchProjectsLocationsAppsScheduledEvaluationRunsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAppsScheduledEvaluationRunsRequest {
  /** Required. The resource name of the scheduled evaluation run to retrieve. */
  name: string;
}

export const GetProjectsLocationsAppsScheduledEvaluationRunsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAppsScheduledEvaluationRunsRequest>;

export type GetProjectsLocationsAppsScheduledEvaluationRunsResponse =
  ScheduledEvaluationRun;
export const GetProjectsLocationsAppsScheduledEvaluationRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ScheduledEvaluationRun;

export type GetProjectsLocationsAppsScheduledEvaluationRunsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of the specified scheduled evaluation run. */
export const getProjectsLocationsAppsScheduledEvaluationRuns: API.OperationMethod<
  GetProjectsLocationsAppsScheduledEvaluationRunsRequest,
  GetProjectsLocationsAppsScheduledEvaluationRunsResponse,
  GetProjectsLocationsAppsScheduledEvaluationRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAppsScheduledEvaluationRunsRequest,
  output: GetProjectsLocationsAppsScheduledEvaluationRunsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsAppsChangelogsRequest {
  /** Required. The resource name of the app to list changelogs from. */
  parent: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. The next_page_token value returned from a previous list AgentService.ListChangelogs call. */
  pageToken?: string;
  /** Optional. Filter to be applied when listing the changelogs. See https://google.aip.dev/160 for more details. The filter string can be used to filter by `action`, `resource_type`, `resource_name`, `author`, and `create_time`. The `:` comparator can be used for case-insensitive partial matching on string fields, while `=` performs an exact case-sensitive match. Examples: * `action:update` (case-insensitive partial match) * `action="Create"` (case-sensitive exact match) * `resource_type:agent` * `resource_name:my-agent` * `author:me@example.com` * `create_time > "2025-01-01T00:00:00Z"` * `create_time <= "2025-01-01T00:00:00Z" AND resource_type:tool` */
  filter?: string;
  /** Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
}

export const ListProjectsLocationsAppsChangelogsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/changelogs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAppsChangelogsRequest>;

export type ListProjectsLocationsAppsChangelogsResponse =
  ListChangelogsResponse;
export const ListProjectsLocationsAppsChangelogsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListChangelogsResponse;

export type ListProjectsLocationsAppsChangelogsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the changelogs of the specified app. */
export const listProjectsLocationsAppsChangelogs: API.PaginatedOperationMethod<
  ListProjectsLocationsAppsChangelogsRequest,
  ListProjectsLocationsAppsChangelogsResponse,
  ListProjectsLocationsAppsChangelogsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAppsChangelogsRequest,
  output: ListProjectsLocationsAppsChangelogsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsAppsChangelogsRequest {
  /** Required. The resource name of the changelog to retrieve. */
  name: string;
}

export const GetProjectsLocationsAppsChangelogsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAppsChangelogsRequest>;

export type GetProjectsLocationsAppsChangelogsResponse = Changelog;
export const GetProjectsLocationsAppsChangelogsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Changelog;

export type GetProjectsLocationsAppsChangelogsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the specified changelog. */
export const getProjectsLocationsAppsChangelogs: API.OperationMethod<
  GetProjectsLocationsAppsChangelogsRequest,
  GetProjectsLocationsAppsChangelogsResponse,
  GetProjectsLocationsAppsChangelogsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAppsChangelogsRequest,
  output: GetProjectsLocationsAppsChangelogsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsAppsConversationsRequest {
  /** Required. The resource name of the conversation to delete. */
  name: string;
  /** Optional. Indicate the source of the conversation. If not set, Source.Live will be applied by default. */
  source?:
    | "SOURCE_UNSPECIFIED"
    | "LIVE"
    | "SIMULATOR"
    | "EVAL"
    | "AGENT_TOOL"
    | (string & {});
}

export const DeleteProjectsLocationsAppsConversationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAppsConversationsRequest>;

export type DeleteProjectsLocationsAppsConversationsResponse = Empty;
export const DeleteProjectsLocationsAppsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsAppsConversationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified conversation. */
export const deleteProjectsLocationsAppsConversations: API.OperationMethod<
  DeleteProjectsLocationsAppsConversationsRequest,
  DeleteProjectsLocationsAppsConversationsResponse,
  DeleteProjectsLocationsAppsConversationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAppsConversationsRequest,
  output: DeleteProjectsLocationsAppsConversationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchDeleteProjectsLocationsAppsConversationsRequest {
  /** Required. The resource name of the app to delete conversations from. Format: `projects/{project}/locations/{location}/apps/{app}` */
  parent: string;
  /** Request body */
  body?: BatchDeleteConversationsRequest;
}

export const BatchDeleteProjectsLocationsAppsConversationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BatchDeleteConversationsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}/conversations:batchDelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchDeleteProjectsLocationsAppsConversationsRequest>;

export type BatchDeleteProjectsLocationsAppsConversationsResponse = Operation;
export const BatchDeleteProjectsLocationsAppsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type BatchDeleteProjectsLocationsAppsConversationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Batch deletes the specified conversations. */
export const batchDeleteProjectsLocationsAppsConversations: API.OperationMethod<
  BatchDeleteProjectsLocationsAppsConversationsRequest,
  BatchDeleteProjectsLocationsAppsConversationsResponse,
  BatchDeleteProjectsLocationsAppsConversationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchDeleteProjectsLocationsAppsConversationsRequest,
  output: BatchDeleteProjectsLocationsAppsConversationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAppsConversationsRequest {
  /** Required. The resource name of the app to list conversations from. */
  parent: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Indicate the sources of the conversations. If not set, all available sources will be applied by default. */
  sources?:
    | "SOURCE_UNSPECIFIED"
    | "LIVE"
    | "SIMULATOR"
    | "EVAL"
    | "AGENT_TOOL"
    | (string & {})[];
  /** Optional. Filter to be applied when listing the conversations. See https://google.aip.dev/160 for more details. */
  filter?: string;
  /** Optional. The next_page_token value returned from a previous list AgentService.ListConversations call. */
  pageToken?: string;
  /** Optional. Indicate the source of the conversation. If not set, Source.Live will be applied by default. Will be deprecated in favor of `sources` field. */
  source?:
    | "SOURCE_UNSPECIFIED"
    | "LIVE"
    | "SIMULATOR"
    | "EVAL"
    | "AGENT_TOOL"
    | (string & {});
}

export const ListProjectsLocationsAppsConversationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    sources: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("sources"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/conversations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAppsConversationsRequest>;

export type ListProjectsLocationsAppsConversationsResponse =
  ListConversationsResponse;
export const ListProjectsLocationsAppsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListConversationsResponse;

export type ListProjectsLocationsAppsConversationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists conversations in the given app. */
export const listProjectsLocationsAppsConversations: API.PaginatedOperationMethod<
  ListProjectsLocationsAppsConversationsRequest,
  ListProjectsLocationsAppsConversationsResponse,
  ListProjectsLocationsAppsConversationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAppsConversationsRequest,
  output: ListProjectsLocationsAppsConversationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsAppsConversationsRequest {
  /** Optional. Indicate the source of the conversation. If not set, all source will be searched. */
  source?:
    | "SOURCE_UNSPECIFIED"
    | "LIVE"
    | "SIMULATOR"
    | "EVAL"
    | "AGENT_TOOL"
    | (string & {});
  /** Required. The resource name of the conversation to retrieve. */
  name: string;
}

export const GetProjectsLocationsAppsConversationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAppsConversationsRequest>;

export type GetProjectsLocationsAppsConversationsResponse = Conversation;
export const GetProjectsLocationsAppsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Conversation;

export type GetProjectsLocationsAppsConversationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of the specified conversation. */
export const getProjectsLocationsAppsConversations: API.OperationMethod<
  GetProjectsLocationsAppsConversationsRequest,
  GetProjectsLocationsAppsConversationsResponse,
  GetProjectsLocationsAppsConversationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAppsConversationsRequest,
  output: GetProjectsLocationsAppsConversationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GenerateEvaluationProjectsLocationsAppsConversationsRequest {
  /** Required. The conversation to create the golden evaluation for. Format: `projects/{project}/locations/{location}/apps/{app}/conversations/{conversation}` */
  conversation: string;
  /** Request body */
  body?: GenerateEvaluationRequest;
}

export const GenerateEvaluationProjectsLocationsAppsConversationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversation: Schema.String.pipe(T.HttpPath("conversation")),
    body: Schema.optional(GenerateEvaluationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+conversation}:generateEvaluation",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateEvaluationProjectsLocationsAppsConversationsRequest>;

export type GenerateEvaluationProjectsLocationsAppsConversationsResponse =
  Operation;
export const GenerateEvaluationProjectsLocationsAppsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GenerateEvaluationProjectsLocationsAppsConversationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a golden evaluation from a conversation. */
export const generateEvaluationProjectsLocationsAppsConversations: API.OperationMethod<
  GenerateEvaluationProjectsLocationsAppsConversationsRequest,
  GenerateEvaluationProjectsLocationsAppsConversationsResponse,
  GenerateEvaluationProjectsLocationsAppsConversationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateEvaluationProjectsLocationsAppsConversationsRequest,
  output: GenerateEvaluationProjectsLocationsAppsConversationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAppsEvaluationDatasetsRequest {
  /** Required. The app to create the evaluation for. Format: `projects/{project}/locations/{location}/apps/{app}` */
  parent: string;
  /** Optional. The ID to use for the evaluation dataset, which will become the final component of the evaluation dataset's resource name. If not provided, a unique ID will be automatically assigned for the evaluation. */
  evaluationDatasetId?: string;
  /** Request body */
  body?: EvaluationDataset;
}

export const CreateProjectsLocationsAppsEvaluationDatasetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    evaluationDatasetId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("evaluationDatasetId"),
    ),
    body: Schema.optional(EvaluationDataset).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}/evaluationDatasets",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAppsEvaluationDatasetsRequest>;

export type CreateProjectsLocationsAppsEvaluationDatasetsResponse =
  EvaluationDataset;
export const CreateProjectsLocationsAppsEvaluationDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ EvaluationDataset;

export type CreateProjectsLocationsAppsEvaluationDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an evaluation dataset. */
export const createProjectsLocationsAppsEvaluationDatasets: API.OperationMethod<
  CreateProjectsLocationsAppsEvaluationDatasetsRequest,
  CreateProjectsLocationsAppsEvaluationDatasetsResponse,
  CreateProjectsLocationsAppsEvaluationDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAppsEvaluationDatasetsRequest,
  output: CreateProjectsLocationsAppsEvaluationDatasetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAppsEvaluationDatasetsRequest {
  /** Required. The resource name of the evaluation dataset to retrieve. */
  name: string;
}

export const GetProjectsLocationsAppsEvaluationDatasetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAppsEvaluationDatasetsRequest>;

export type GetProjectsLocationsAppsEvaluationDatasetsResponse =
  EvaluationDataset;
export const GetProjectsLocationsAppsEvaluationDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ EvaluationDataset;

export type GetProjectsLocationsAppsEvaluationDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of the specified evaluation dataset. */
export const getProjectsLocationsAppsEvaluationDatasets: API.OperationMethod<
  GetProjectsLocationsAppsEvaluationDatasetsRequest,
  GetProjectsLocationsAppsEvaluationDatasetsResponse,
  GetProjectsLocationsAppsEvaluationDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAppsEvaluationDatasetsRequest,
  output: GetProjectsLocationsAppsEvaluationDatasetsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsAppsEvaluationDatasetsRequest {
  /** Identifier. The unique identifier of this evaluation dataset. Format: `projects/{project}/locations/{location}/apps/{app}/evaluationDatasets/{evaluationDataset}` */
  name: string;
  /** Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated. */
  updateMask?: string;
  /** Request body */
  body?: EvaluationDataset;
}

export const PatchProjectsLocationsAppsEvaluationDatasetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(EvaluationDataset).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAppsEvaluationDatasetsRequest>;

export type PatchProjectsLocationsAppsEvaluationDatasetsResponse =
  EvaluationDataset;
export const PatchProjectsLocationsAppsEvaluationDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ EvaluationDataset;

export type PatchProjectsLocationsAppsEvaluationDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an evaluation dataset. */
export const patchProjectsLocationsAppsEvaluationDatasets: API.OperationMethod<
  PatchProjectsLocationsAppsEvaluationDatasetsRequest,
  PatchProjectsLocationsAppsEvaluationDatasetsResponse,
  PatchProjectsLocationsAppsEvaluationDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAppsEvaluationDatasetsRequest,
  output: PatchProjectsLocationsAppsEvaluationDatasetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAppsEvaluationDatasetsRequest {
  /** Optional. The next_page_token value returned from a previous list EvaluationService.ListEvaluationDatasets call. */
  pageToken?: string;
  /** Optional. Filter to be applied when listing the evaluation datasets. See https://google.aip.dev/160 for more details. */
  filter?: string;
  /** Optional. Field to sort by. Only "name" and "create_time", and "update_time" are supported. Time fields are ordered in descending order, and the name field is ordered in ascending order. If not included, "update_time" will be the default. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Required. The resource name of the app to list evaluation datasets from. */
  parent: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsAppsEvaluationDatasetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/evaluationDatasets" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAppsEvaluationDatasetsRequest>;

export type ListProjectsLocationsAppsEvaluationDatasetsResponse =
  ListEvaluationDatasetsResponse;
export const ListProjectsLocationsAppsEvaluationDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListEvaluationDatasetsResponse;

export type ListProjectsLocationsAppsEvaluationDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all evaluation datasets in the given app. */
export const listProjectsLocationsAppsEvaluationDatasets: API.PaginatedOperationMethod<
  ListProjectsLocationsAppsEvaluationDatasetsRequest,
  ListProjectsLocationsAppsEvaluationDatasetsResponse,
  ListProjectsLocationsAppsEvaluationDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAppsEvaluationDatasetsRequest,
  output: ListProjectsLocationsAppsEvaluationDatasetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsAppsEvaluationDatasetsRequest {
  /** Required. The resource name of the evaluation dataset to delete. */
  name: string;
  /** Optional. The current etag of the evaluation dataset. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the evaluation dataset, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
}

export const DeleteProjectsLocationsAppsEvaluationDatasetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAppsEvaluationDatasetsRequest>;

export type DeleteProjectsLocationsAppsEvaluationDatasetsResponse = Empty;
export const DeleteProjectsLocationsAppsEvaluationDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsAppsEvaluationDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an evaluation dataset. */
export const deleteProjectsLocationsAppsEvaluationDatasets: API.OperationMethod<
  DeleteProjectsLocationsAppsEvaluationDatasetsRequest,
  DeleteProjectsLocationsAppsEvaluationDatasetsResponse,
  DeleteProjectsLocationsAppsEvaluationDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAppsEvaluationDatasetsRequest,
  output: DeleteProjectsLocationsAppsEvaluationDatasetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAppsEvaluationsRequest {
  /** Required. The resource name of the evaluation to delete. */
  name: string;
  /** Optional. The current etag of the evaluation. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the evaluation, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
  /** Optional. Indicates whether to forcefully delete the evaluation, even if it is still referenced by evaluation datasets. * If `force = false`, the deletion will fail if any datasets still reference the evaluation. * If `force = true`, all existing references from datasets will be removed and the evaluation will be deleted. */
  force?: boolean;
}

export const DeleteProjectsLocationsAppsEvaluationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAppsEvaluationsRequest>;

export type DeleteProjectsLocationsAppsEvaluationsResponse = Empty;
export const DeleteProjectsLocationsAppsEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsAppsEvaluationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an evaluation. */
export const deleteProjectsLocationsAppsEvaluations: API.OperationMethod<
  DeleteProjectsLocationsAppsEvaluationsRequest,
  DeleteProjectsLocationsAppsEvaluationsResponse,
  DeleteProjectsLocationsAppsEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAppsEvaluationsRequest,
  output: DeleteProjectsLocationsAppsEvaluationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAppsEvaluationsRequest {
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Required. The resource name of the app to list evaluations from. */
  parent: string;
  /** Optional. The next_page_token value returned from a previous list EvaluationService.ListEvaluations call. */
  pageToken?: string;
  /** Optional. Filter to be applied on the evaluation when listing the evaluations. See https://google.aip.dev/160 for more details. Supported fields: evaluation_datasets */
  evaluationFilter?: string;
  /** Optional. Filter string for fields on the associated EvaluationRun resources. See https://google.aip.dev/160 for more details. Supported fields: create_time, initiated_by, app_version_display_name */
  evaluationRunFilter?: string;
  /** Optional. Field to sort by. Only "name" and "create_time", and "update_time" are supported. Time fields are ordered in descending order, and the name field is ordered in ascending order. If not included, "update_time" will be the default. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Optional. Deprecated: Use evaluation_filter and evaluation_run_filter instead. */
  filter?: string;
  /** Optional. Whether to include the last 10 evaluation results for each evaluation in the response. */
  lastTenResults?: boolean;
}

export const ListProjectsLocationsAppsEvaluationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    evaluationFilter: Schema.optional(Schema.String).pipe(
      T.HttpQuery("evaluationFilter"),
    ),
    evaluationRunFilter: Schema.optional(Schema.String).pipe(
      T.HttpQuery("evaluationRunFilter"),
    ),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    lastTenResults: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("lastTenResults"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/evaluations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAppsEvaluationsRequest>;

export type ListProjectsLocationsAppsEvaluationsResponse =
  ListEvaluationsResponse;
export const ListProjectsLocationsAppsEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListEvaluationsResponse;

export type ListProjectsLocationsAppsEvaluationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all evaluations in the given app. */
export const listProjectsLocationsAppsEvaluations: API.PaginatedOperationMethod<
  ListProjectsLocationsAppsEvaluationsRequest,
  ListProjectsLocationsAppsEvaluationsResponse,
  ListProjectsLocationsAppsEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAppsEvaluationsRequest,
  output: ListProjectsLocationsAppsEvaluationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsAppsEvaluationsRequest {
  /** Required. The app to create the evaluation for. Format: `projects/{project}/locations/{location}/apps/{app}` */
  parent: string;
  /** Optional. The ID to use for the evaluation, which will become the final component of the evaluation's resource name. If not provided, a unique ID will be automatically assigned for the evaluation. */
  evaluationId?: string;
  /** Request body */
  body?: Evaluation;
}

export const CreateProjectsLocationsAppsEvaluationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    evaluationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("evaluationId"),
    ),
    body: Schema.optional(Evaluation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}/evaluations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAppsEvaluationsRequest>;

export type CreateProjectsLocationsAppsEvaluationsResponse = Evaluation;
export const CreateProjectsLocationsAppsEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Evaluation;

export type CreateProjectsLocationsAppsEvaluationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an evaluation. */
export const createProjectsLocationsAppsEvaluations: API.OperationMethod<
  CreateProjectsLocationsAppsEvaluationsRequest,
  CreateProjectsLocationsAppsEvaluationsResponse,
  CreateProjectsLocationsAppsEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAppsEvaluationsRequest,
  output: CreateProjectsLocationsAppsEvaluationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExportProjectsLocationsAppsEvaluationsRequest {
  /** Required. The resource name of the app to export evaluations from. Format: `projects/{project}/locations/{location}/apps/{app}` */
  parent: string;
  /** Request body */
  body?: ExportEvaluationsRequest;
}

export const ExportProjectsLocationsAppsEvaluationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ExportEvaluationsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}/evaluations:export",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExportProjectsLocationsAppsEvaluationsRequest>;

export type ExportProjectsLocationsAppsEvaluationsResponse = Operation;
export const ExportProjectsLocationsAppsEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ExportProjectsLocationsAppsEvaluationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Exports evaluations. */
export const exportProjectsLocationsAppsEvaluations: API.OperationMethod<
  ExportProjectsLocationsAppsEvaluationsRequest,
  ExportProjectsLocationsAppsEvaluationsResponse,
  ExportProjectsLocationsAppsEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportProjectsLocationsAppsEvaluationsRequest,
  output: ExportProjectsLocationsAppsEvaluationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UploadEvaluationAudioProjectsLocationsAppsEvaluationsRequest {
  /** Required. The resource name of the Evaluation for which to upload the evaluation audio. Format: `projects/{project}/locations/{location}/apps/{app}/evaluations/{evaluation}` */
  name: string;
  /** Request body */
  body?: UploadEvaluationAudioRequest;
}

export const UploadEvaluationAudioProjectsLocationsAppsEvaluationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UploadEvaluationAudioRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+name}:uploadEvaluationAudio",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UploadEvaluationAudioProjectsLocationsAppsEvaluationsRequest>;

export type UploadEvaluationAudioProjectsLocationsAppsEvaluationsResponse =
  UploadEvaluationAudioResponse;
export const UploadEvaluationAudioProjectsLocationsAppsEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UploadEvaluationAudioResponse;

export type UploadEvaluationAudioProjectsLocationsAppsEvaluationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Uploads audio for use in Golden Evaluations. Stores the audio in the Cloud Storage bucket defined in 'App.logging_settings.evaluation_audio_recording_config.gcs_bucket' and returns a transcript. */
export const uploadEvaluationAudioProjectsLocationsAppsEvaluations: API.OperationMethod<
  UploadEvaluationAudioProjectsLocationsAppsEvaluationsRequest,
  UploadEvaluationAudioProjectsLocationsAppsEvaluationsResponse,
  UploadEvaluationAudioProjectsLocationsAppsEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UploadEvaluationAudioProjectsLocationsAppsEvaluationsRequest,
  output: UploadEvaluationAudioProjectsLocationsAppsEvaluationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAppsEvaluationsRequest {
  /** Identifier. The unique identifier of this evaluation. Format: `projects/{project}/locations/{location}/apps/{app}/evaluations/{evaluation}` */
  name: string;
  /** Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated. */
  updateMask?: string;
  /** Request body */
  body?: Evaluation;
}

export const PatchProjectsLocationsAppsEvaluationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Evaluation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAppsEvaluationsRequest>;

export type PatchProjectsLocationsAppsEvaluationsResponse = Evaluation;
export const PatchProjectsLocationsAppsEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Evaluation;

export type PatchProjectsLocationsAppsEvaluationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an evaluation. */
export const patchProjectsLocationsAppsEvaluations: API.OperationMethod<
  PatchProjectsLocationsAppsEvaluationsRequest,
  PatchProjectsLocationsAppsEvaluationsResponse,
  PatchProjectsLocationsAppsEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAppsEvaluationsRequest,
  output: PatchProjectsLocationsAppsEvaluationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAppsEvaluationsRequest {
  /** Required. The resource name of the evaluation to retrieve. */
  name: string;
}

export const GetProjectsLocationsAppsEvaluationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAppsEvaluationsRequest>;

export type GetProjectsLocationsAppsEvaluationsResponse = Evaluation;
export const GetProjectsLocationsAppsEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Evaluation;

export type GetProjectsLocationsAppsEvaluationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of the specified evaluation. */
export const getProjectsLocationsAppsEvaluations: API.OperationMethod<
  GetProjectsLocationsAppsEvaluationsRequest,
  GetProjectsLocationsAppsEvaluationsResponse,
  GetProjectsLocationsAppsEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAppsEvaluationsRequest,
  output: GetProjectsLocationsAppsEvaluationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsAppsEvaluationsResultsRequest {
  /** Required. The resource name of the evaluation to list evaluation results from. To filter by evaluation run, use `-` as the evaluation ID and specify the evaluation run ID in the filter. For example: `projects/{project}/locations/{location}/apps/{app}/evaluations/-` */
  parent: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Filter to be applied when listing the evaluation results. See https://google.aip.dev/160 for more details. */
  filter?: string;
  /** Optional. Field to sort by. Only "name" and "create_time", and "update_time" are supported. Time fields are ordered in descending order, and the name field is ordered in ascending order. If not included, "update_time" will be the default. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Optional. The next_page_token value returned from a previous list EvaluationService.ListEvaluationResults call. */
  pageToken?: string;
}

export const ListProjectsLocationsAppsEvaluationsResultsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/results" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAppsEvaluationsResultsRequest>;

export type ListProjectsLocationsAppsEvaluationsResultsResponse =
  ListEvaluationResultsResponse;
export const ListProjectsLocationsAppsEvaluationsResultsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListEvaluationResultsResponse;

export type ListProjectsLocationsAppsEvaluationsResultsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all evaluation results for a given evaluation. */
export const listProjectsLocationsAppsEvaluationsResults: API.PaginatedOperationMethod<
  ListProjectsLocationsAppsEvaluationsResultsRequest,
  ListProjectsLocationsAppsEvaluationsResultsResponse,
  ListProjectsLocationsAppsEvaluationsResultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAppsEvaluationsResultsRequest,
  output: ListProjectsLocationsAppsEvaluationsResultsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ExportProjectsLocationsAppsEvaluationsResultsRequest {
  /** Required. The resource name of the evaluation to export evaluation results from. Format: `projects/{project}/locations/{location}/apps/{app}/evaluations/{evaluation}` */
  parent: string;
  /** Request body */
  body?: ExportEvaluationResultsRequest;
}

export const ExportProjectsLocationsAppsEvaluationsResultsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ExportEvaluationResultsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}/results:export",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExportProjectsLocationsAppsEvaluationsResultsRequest>;

export type ExportProjectsLocationsAppsEvaluationsResultsResponse = Operation;
export const ExportProjectsLocationsAppsEvaluationsResultsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ExportProjectsLocationsAppsEvaluationsResultsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Exports evaluations results. */
export const exportProjectsLocationsAppsEvaluationsResults: API.OperationMethod<
  ExportProjectsLocationsAppsEvaluationsResultsRequest,
  ExportProjectsLocationsAppsEvaluationsResultsResponse,
  ExportProjectsLocationsAppsEvaluationsResultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportProjectsLocationsAppsEvaluationsResultsRequest,
  output: ExportProjectsLocationsAppsEvaluationsResultsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAppsEvaluationsResultsRequest {
  /** Required. The resource name of the evaluation result to delete. */
  name: string;
}

export const DeleteProjectsLocationsAppsEvaluationsResultsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAppsEvaluationsResultsRequest>;

export type DeleteProjectsLocationsAppsEvaluationsResultsResponse = Empty;
export const DeleteProjectsLocationsAppsEvaluationsResultsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsAppsEvaluationsResultsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an evaluation result. */
export const deleteProjectsLocationsAppsEvaluationsResults: API.OperationMethod<
  DeleteProjectsLocationsAppsEvaluationsResultsRequest,
  DeleteProjectsLocationsAppsEvaluationsResultsResponse,
  DeleteProjectsLocationsAppsEvaluationsResultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAppsEvaluationsResultsRequest,
  output: DeleteProjectsLocationsAppsEvaluationsResultsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAppsEvaluationsResultsRequest {
  /** Required. The resource name of the evaluation result to retrieve. */
  name: string;
}

export const GetProjectsLocationsAppsEvaluationsResultsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAppsEvaluationsResultsRequest>;

export type GetProjectsLocationsAppsEvaluationsResultsResponse =
  EvaluationResult;
export const GetProjectsLocationsAppsEvaluationsResultsResponse =
  /*@__PURE__*/ /*#__PURE__*/ EvaluationResult;

export type GetProjectsLocationsAppsEvaluationsResultsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of the specified evaluation result. */
export const getProjectsLocationsAppsEvaluationsResults: API.OperationMethod<
  GetProjectsLocationsAppsEvaluationsResultsRequest,
  GetProjectsLocationsAppsEvaluationsResultsResponse,
  GetProjectsLocationsAppsEvaluationsResultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAppsEvaluationsResultsRequest,
  output: GetProjectsLocationsAppsEvaluationsResultsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GenerateChatTokenProjectsLocationsAppsSessionsRequest {
  /** Required. The session name to generate the chat token for. Format: projects/{project}/locations/{location}/apps/{app}/sessions/{session} */
  name: string;
  /** Request body */
  body?: GenerateChatTokenRequest;
}

export const GenerateChatTokenProjectsLocationsAppsSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GenerateChatTokenRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+name}:generateChatToken",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateChatTokenProjectsLocationsAppsSessionsRequest>;

export type GenerateChatTokenProjectsLocationsAppsSessionsResponse =
  GenerateChatTokenResponse;
export const GenerateChatTokenProjectsLocationsAppsSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GenerateChatTokenResponse;

export type GenerateChatTokenProjectsLocationsAppsSessionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generates a session scoped token for chat widget to authenticate with Session APIs. */
export const generateChatTokenProjectsLocationsAppsSessions: API.OperationMethod<
  GenerateChatTokenProjectsLocationsAppsSessionsRequest,
  GenerateChatTokenProjectsLocationsAppsSessionsResponse,
  GenerateChatTokenProjectsLocationsAppsSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateChatTokenProjectsLocationsAppsSessionsRequest,
  output: GenerateChatTokenProjectsLocationsAppsSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RunSessionProjectsLocationsAppsSessionsRequest {
  /** Required. The unique identifier of the session. Format: `projects/{project}/locations/{location}/apps/{app}/sessions/{session}` */
  session: string;
  /** Request body */
  body?: RunSessionRequest;
}

export const RunSessionProjectsLocationsAppsSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.HttpPath("session")),
    body: Schema.optional(RunSessionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+session}:runSession",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RunSessionProjectsLocationsAppsSessionsRequest>;

export type RunSessionProjectsLocationsAppsSessionsResponse =
  RunSessionResponse;
export const RunSessionProjectsLocationsAppsSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RunSessionResponse;

export type RunSessionProjectsLocationsAppsSessionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Initiates a single-turn interaction with the CES agent within a session. */
export const runSessionProjectsLocationsAppsSessions: API.OperationMethod<
  RunSessionProjectsLocationsAppsSessionsRequest,
  RunSessionProjectsLocationsAppsSessionsResponse,
  RunSessionProjectsLocationsAppsSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RunSessionProjectsLocationsAppsSessionsRequest,
  output: RunSessionProjectsLocationsAppsSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StreamRunSessionProjectsLocationsAppsSessionsRequest {
  /** Required. The unique identifier of the session. Format: `projects/{project}/locations/{location}/apps/{app}/sessions/{session}` */
  session: string;
  /** Request body */
  body?: RunSessionRequest;
}

export const StreamRunSessionProjectsLocationsAppsSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.HttpPath("session")),
    body: Schema.optional(RunSessionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+session}:streamRunSession",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<StreamRunSessionProjectsLocationsAppsSessionsRequest>;

export type StreamRunSessionProjectsLocationsAppsSessionsResponse =
  RunSessionResponse;
export const StreamRunSessionProjectsLocationsAppsSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RunSessionResponse;

export type StreamRunSessionProjectsLocationsAppsSessionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Initiates a single-turn interaction with the CES agent. Uses server-side streaming to deliver incremental results and partial responses as they are generated. By default, complete responses (e.g., messages from callbacks or full LLM responses) are sent to the client as soon as they are available. To enable streaming individual text chunks directly from the model, set enable_text_streaming to true. */
export const streamRunSessionProjectsLocationsAppsSessions: API.OperationMethod<
  StreamRunSessionProjectsLocationsAppsSessionsRequest,
  StreamRunSessionProjectsLocationsAppsSessionsResponse,
  StreamRunSessionProjectsLocationsAppsSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StreamRunSessionProjectsLocationsAppsSessionsRequest,
  output: StreamRunSessionProjectsLocationsAppsSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAppsToolsetsRequest {
  /** Optional. The ID to use for the toolset, which will become the final component of the toolset's resource name. If not provided, a unique ID will be automatically assigned for the toolset. */
  toolsetId?: string;
  /** Required. The resource name of the app to create a toolset in. */
  parent: string;
  /** Request body */
  body?: Toolset;
}

export const CreateProjectsLocationsAppsToolsetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolsetId: Schema.optional(Schema.String).pipe(T.HttpQuery("toolsetId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Toolset).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}/toolsets",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAppsToolsetsRequest>;

export type CreateProjectsLocationsAppsToolsetsResponse = Toolset;
export const CreateProjectsLocationsAppsToolsetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Toolset;

export type CreateProjectsLocationsAppsToolsetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new toolset in the given app. */
export const createProjectsLocationsAppsToolsets: API.OperationMethod<
  CreateProjectsLocationsAppsToolsetsRequest,
  CreateProjectsLocationsAppsToolsetsResponse,
  CreateProjectsLocationsAppsToolsetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAppsToolsetsRequest,
  output: CreateProjectsLocationsAppsToolsetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAppsToolsetsRequest {
  /** Required. The resource name of the toolset to retrieve. */
  name: string;
}

export const GetProjectsLocationsAppsToolsetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAppsToolsetsRequest>;

export type GetProjectsLocationsAppsToolsetsResponse = Toolset;
export const GetProjectsLocationsAppsToolsetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Toolset;

export type GetProjectsLocationsAppsToolsetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of the specified toolset. */
export const getProjectsLocationsAppsToolsets: API.OperationMethod<
  GetProjectsLocationsAppsToolsetsRequest,
  GetProjectsLocationsAppsToolsetsResponse,
  GetProjectsLocationsAppsToolsetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAppsToolsetsRequest,
  output: GetProjectsLocationsAppsToolsetsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsAppsToolsetsRequest {
  /** Identifier. The unique identifier of the toolset. Format: `projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}` */
  name: string;
  /** Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated. */
  updateMask?: string;
  /** Request body */
  body?: Toolset;
}

export const PatchProjectsLocationsAppsToolsetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Toolset).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAppsToolsetsRequest>;

export type PatchProjectsLocationsAppsToolsetsResponse = Toolset;
export const PatchProjectsLocationsAppsToolsetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Toolset;

export type PatchProjectsLocationsAppsToolsetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the specified toolset. */
export const patchProjectsLocationsAppsToolsets: API.OperationMethod<
  PatchProjectsLocationsAppsToolsetsRequest,
  PatchProjectsLocationsAppsToolsetsResponse,
  PatchProjectsLocationsAppsToolsetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAppsToolsetsRequest,
  output: PatchProjectsLocationsAppsToolsetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAppsToolsetsRequest {
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Required. The resource name of the app to list toolsets from. */
  parent: string;
  /** Optional. The next_page_token value returned from a previous list AgentService.ListToolsets call. */
  pageToken?: string;
  /** Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Optional. Filter to be applied when listing the toolsets. See https://google.aip.dev/160 for more details. */
  filter?: string;
}

export const ListProjectsLocationsAppsToolsetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/toolsets" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAppsToolsetsRequest>;

export type ListProjectsLocationsAppsToolsetsResponse = ListToolsetsResponse;
export const ListProjectsLocationsAppsToolsetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListToolsetsResponse;

export type ListProjectsLocationsAppsToolsetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists toolsets in the given app. */
export const listProjectsLocationsAppsToolsets: API.PaginatedOperationMethod<
  ListProjectsLocationsAppsToolsetsRequest,
  ListProjectsLocationsAppsToolsetsResponse,
  ListProjectsLocationsAppsToolsetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAppsToolsetsRequest,
  output: ListProjectsLocationsAppsToolsetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsAppsToolsetsRequest {
  /** Required. The resource name of the toolset to delete. */
  name: string;
  /** Optional. Indicates whether to forcefully delete the toolset, even if it is still referenced by app/agents. * If `force = false`, the deletion fails if any agents still reference the toolset. * If `force = true`, all existing references from agents will be removed and the toolset will be deleted. */
  force?: boolean;
  /** Optional. The current etag of the toolset. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the toolset, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
}

export const DeleteProjectsLocationsAppsToolsetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAppsToolsetsRequest>;

export type DeleteProjectsLocationsAppsToolsetsResponse = Empty;
export const DeleteProjectsLocationsAppsToolsetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsAppsToolsetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified toolset. */
export const deleteProjectsLocationsAppsToolsets: API.OperationMethod<
  DeleteProjectsLocationsAppsToolsetsRequest,
  DeleteProjectsLocationsAppsToolsetsResponse,
  DeleteProjectsLocationsAppsToolsetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAppsToolsetsRequest,
  output: DeleteProjectsLocationsAppsToolsetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RetrieveToolsProjectsLocationsAppsToolsetsRequest {
  /** Required. The name of the toolset to retrieve the tools for. Format: `projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}` */
  toolset: string;
  /** Request body */
  body?: RetrieveToolsRequest;
}

export const RetrieveToolsProjectsLocationsAppsToolsetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolset: Schema.String.pipe(T.HttpPath("toolset")),
    body: Schema.optional(RetrieveToolsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+toolset}:retrieveTools",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RetrieveToolsProjectsLocationsAppsToolsetsRequest>;

export type RetrieveToolsProjectsLocationsAppsToolsetsResponse =
  RetrieveToolsResponse;
export const RetrieveToolsProjectsLocationsAppsToolsetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RetrieveToolsResponse;

export type RetrieveToolsProjectsLocationsAppsToolsetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Retrieve the list of tools included in the specified toolset. */
export const retrieveToolsProjectsLocationsAppsToolsets: API.OperationMethod<
  RetrieveToolsProjectsLocationsAppsToolsetsRequest,
  RetrieveToolsProjectsLocationsAppsToolsetsResponse,
  RetrieveToolsProjectsLocationsAppsToolsetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RetrieveToolsProjectsLocationsAppsToolsetsRequest,
  output: RetrieveToolsProjectsLocationsAppsToolsetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SendProjectsLocationsAppsMessageRequest {
  /** Optional. Tenant ID, provided as a path parameter. */
  tenant: string;
  /** Request body */
  body?: LfA2aV1SendMessageRequest;
}

export const SendProjectsLocationsAppsMessageRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tenant: Schema.String.pipe(T.HttpPath("tenant")),
    body: Schema.optional(LfA2aV1SendMessageRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+tenant}/message:send",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SendProjectsLocationsAppsMessageRequest>;

export type SendProjectsLocationsAppsMessageResponse =
  LfA2aV1SendMessageResponse;
export const SendProjectsLocationsAppsMessageResponse =
  /*@__PURE__*/ /*#__PURE__*/ LfA2aV1SendMessageResponse;

export type SendProjectsLocationsAppsMessageError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sends a message to an agent. */
export const sendProjectsLocationsAppsMessage: API.OperationMethod<
  SendProjectsLocationsAppsMessageRequest,
  SendProjectsLocationsAppsMessageResponse,
  SendProjectsLocationsAppsMessageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SendProjectsLocationsAppsMessageRequest,
  output: SendProjectsLocationsAppsMessageResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAppsGuardrailsRequest {
  /** Optional. The ID to use for the guardrail, which will become the final component of the guardrail's resource name. If not provided, a unique ID will be automatically assigned for the guardrail. */
  guardrailId?: string;
  /** Required. The resource name of the app to create a guardrail in. */
  parent: string;
  /** Request body */
  body?: Guardrail;
}

export const CreateProjectsLocationsAppsGuardrailsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guardrailId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("guardrailId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Guardrail).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}/guardrails",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAppsGuardrailsRequest>;

export type CreateProjectsLocationsAppsGuardrailsResponse = Guardrail;
export const CreateProjectsLocationsAppsGuardrailsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Guardrail;

export type CreateProjectsLocationsAppsGuardrailsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new guardrail in the given app. */
export const createProjectsLocationsAppsGuardrails: API.OperationMethod<
  CreateProjectsLocationsAppsGuardrailsRequest,
  CreateProjectsLocationsAppsGuardrailsResponse,
  CreateProjectsLocationsAppsGuardrailsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAppsGuardrailsRequest,
  output: CreateProjectsLocationsAppsGuardrailsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAppsGuardrailsRequest {
  /** Required. The resource name of the guardrail to retrieve. */
  name: string;
}

export const GetProjectsLocationsAppsGuardrailsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAppsGuardrailsRequest>;

export type GetProjectsLocationsAppsGuardrailsResponse = Guardrail;
export const GetProjectsLocationsAppsGuardrailsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Guardrail;

export type GetProjectsLocationsAppsGuardrailsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of the specified guardrail. */
export const getProjectsLocationsAppsGuardrails: API.OperationMethod<
  GetProjectsLocationsAppsGuardrailsRequest,
  GetProjectsLocationsAppsGuardrailsResponse,
  GetProjectsLocationsAppsGuardrailsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAppsGuardrailsRequest,
  output: GetProjectsLocationsAppsGuardrailsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsAppsGuardrailsRequest {
  /** Identifier. The unique identifier of the guardrail. Format: `projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}` */
  name: string;
  /** Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated. */
  updateMask?: string;
  /** Request body */
  body?: Guardrail;
}

export const PatchProjectsLocationsAppsGuardrailsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Guardrail).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAppsGuardrailsRequest>;

export type PatchProjectsLocationsAppsGuardrailsResponse = Guardrail;
export const PatchProjectsLocationsAppsGuardrailsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Guardrail;

export type PatchProjectsLocationsAppsGuardrailsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the specified guardrail. */
export const patchProjectsLocationsAppsGuardrails: API.OperationMethod<
  PatchProjectsLocationsAppsGuardrailsRequest,
  PatchProjectsLocationsAppsGuardrailsResponse,
  PatchProjectsLocationsAppsGuardrailsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAppsGuardrailsRequest,
  output: PatchProjectsLocationsAppsGuardrailsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAppsGuardrailsRequest {
  /** Optional. The next_page_token value returned from a previous list AgentService.ListGuardrails call. */
  pageToken?: string;
  /** Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Optional. Filter to be applied when listing the guardrails. See https://google.aip.dev/160 for more details. */
  filter?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Required. The resource name of the app to list guardrails from. */
  parent: string;
}

export const ListProjectsLocationsAppsGuardrailsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/guardrails" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAppsGuardrailsRequest>;

export type ListProjectsLocationsAppsGuardrailsResponse =
  ListGuardrailsResponse;
export const ListProjectsLocationsAppsGuardrailsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListGuardrailsResponse;

export type ListProjectsLocationsAppsGuardrailsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists guardrails in the given app. */
export const listProjectsLocationsAppsGuardrails: API.PaginatedOperationMethod<
  ListProjectsLocationsAppsGuardrailsRequest,
  ListProjectsLocationsAppsGuardrailsResponse,
  ListProjectsLocationsAppsGuardrailsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAppsGuardrailsRequest,
  output: ListProjectsLocationsAppsGuardrailsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsAppsGuardrailsRequest {
  /** Optional. Indicates whether to forcefully delete the guardrail, even if it is still referenced by app/agents. * If `force = false`, the deletion fails if any apps/agents still reference the guardrail. * If `force = true`, all existing references from apps/agents will be removed and the guardrail will be deleted. */
  force?: boolean;
  /** Optional. The current etag of the guardrail. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the guardrail, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
  /** Required. The resource name of the guardrail to delete. */
  name: string;
}

export const DeleteProjectsLocationsAppsGuardrailsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAppsGuardrailsRequest>;

export type DeleteProjectsLocationsAppsGuardrailsResponse = Empty;
export const DeleteProjectsLocationsAppsGuardrailsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsAppsGuardrailsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified guardrail. */
export const deleteProjectsLocationsAppsGuardrails: API.OperationMethod<
  DeleteProjectsLocationsAppsGuardrailsRequest,
  DeleteProjectsLocationsAppsGuardrailsResponse,
  DeleteProjectsLocationsAppsGuardrailsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAppsGuardrailsRequest,
  output: DeleteProjectsLocationsAppsGuardrailsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAppsEvaluationExpectationsRequest {
  /** Required. The resource name of the evaluation expectation to delete. */
  name: string;
  /** Optional. The current etag of the evaluation expectation. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the evaluation expectation, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
}

export const DeleteProjectsLocationsAppsEvaluationExpectationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAppsEvaluationExpectationsRequest>;

export type DeleteProjectsLocationsAppsEvaluationExpectationsResponse = Empty;
export const DeleteProjectsLocationsAppsEvaluationExpectationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsAppsEvaluationExpectationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an evaluation expectation. */
export const deleteProjectsLocationsAppsEvaluationExpectations: API.OperationMethod<
  DeleteProjectsLocationsAppsEvaluationExpectationsRequest,
  DeleteProjectsLocationsAppsEvaluationExpectationsResponse,
  DeleteProjectsLocationsAppsEvaluationExpectationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAppsEvaluationExpectationsRequest,
  output: DeleteProjectsLocationsAppsEvaluationExpectationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAppsEvaluationExpectationsRequest {
  /** Optional. Field to sort by. Only "name" and "create_time", and "update_time" are supported. Time fields are ordered in descending order, and the name field is ordered in ascending order. If not included, "update_time" will be the default. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Optional. Filter to be applied when listing the evaluation expectations. See https://google.aip.dev/160 for more details. */
  filter?: string;
  /** Optional. The next_page_token value returned from a previous list EvaluationService.ListEvaluationExpectations call. */
  pageToken?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Required. The resource name of the app to list evaluation expectations from. */
  parent: string;
}

export const ListProjectsLocationsAppsEvaluationExpectationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/evaluationExpectations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAppsEvaluationExpectationsRequest>;

export type ListProjectsLocationsAppsEvaluationExpectationsResponse =
  ListEvaluationExpectationsResponse;
export const ListProjectsLocationsAppsEvaluationExpectationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListEvaluationExpectationsResponse;

export type ListProjectsLocationsAppsEvaluationExpectationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all evaluation expectations in the given app. */
export const listProjectsLocationsAppsEvaluationExpectations: API.PaginatedOperationMethod<
  ListProjectsLocationsAppsEvaluationExpectationsRequest,
  ListProjectsLocationsAppsEvaluationExpectationsResponse,
  ListProjectsLocationsAppsEvaluationExpectationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAppsEvaluationExpectationsRequest,
  output: ListProjectsLocationsAppsEvaluationExpectationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsAppsEvaluationExpectationsRequest {
  /** Identifier. The unique identifier of this evaluation expectation. Format: `projects/{project}/locations/{location}/apps/{app}/evaluationExpectations/{evaluation_expectation}` */
  name: string;
  /** Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated. */
  updateMask?: string;
  /** Request body */
  body?: EvaluationExpectation;
}

export const PatchProjectsLocationsAppsEvaluationExpectationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(EvaluationExpectation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAppsEvaluationExpectationsRequest>;

export type PatchProjectsLocationsAppsEvaluationExpectationsResponse =
  EvaluationExpectation;
export const PatchProjectsLocationsAppsEvaluationExpectationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ EvaluationExpectation;

export type PatchProjectsLocationsAppsEvaluationExpectationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an evaluation expectation. */
export const patchProjectsLocationsAppsEvaluationExpectations: API.OperationMethod<
  PatchProjectsLocationsAppsEvaluationExpectationsRequest,
  PatchProjectsLocationsAppsEvaluationExpectationsResponse,
  PatchProjectsLocationsAppsEvaluationExpectationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAppsEvaluationExpectationsRequest,
  output: PatchProjectsLocationsAppsEvaluationExpectationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAppsEvaluationExpectationsRequest {
  /** Required. The resource name of the evaluation expectation to retrieve. */
  name: string;
}

export const GetProjectsLocationsAppsEvaluationExpectationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAppsEvaluationExpectationsRequest>;

export type GetProjectsLocationsAppsEvaluationExpectationsResponse =
  EvaluationExpectation;
export const GetProjectsLocationsAppsEvaluationExpectationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ EvaluationExpectation;

export type GetProjectsLocationsAppsEvaluationExpectationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of the specified evaluation expectation. */
export const getProjectsLocationsAppsEvaluationExpectations: API.OperationMethod<
  GetProjectsLocationsAppsEvaluationExpectationsRequest,
  GetProjectsLocationsAppsEvaluationExpectationsResponse,
  GetProjectsLocationsAppsEvaluationExpectationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAppsEvaluationExpectationsRequest,
  output: GetProjectsLocationsAppsEvaluationExpectationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsAppsEvaluationExpectationsRequest {
  /** Required. The app to create the evaluation expectation for. Format: `projects/{project}/locations/{location}/apps/{app}` */
  parent: string;
  /** Optional. The ID to use for the evaluation expectation, which will become the final component of the evaluation expectation's resource name. If not provided, a unique ID will be automatically assigned for the evaluation expectation. */
  evaluationExpectationId?: string;
  /** Request body */
  body?: EvaluationExpectation;
}

export const CreateProjectsLocationsAppsEvaluationExpectationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    evaluationExpectationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("evaluationExpectationId"),
    ),
    body: Schema.optional(EvaluationExpectation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}/evaluationExpectations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAppsEvaluationExpectationsRequest>;

export type CreateProjectsLocationsAppsEvaluationExpectationsResponse =
  EvaluationExpectation;
export const CreateProjectsLocationsAppsEvaluationExpectationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ EvaluationExpectation;

export type CreateProjectsLocationsAppsEvaluationExpectationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an evaluation expectation. */
export const createProjectsLocationsAppsEvaluationExpectations: API.OperationMethod<
  CreateProjectsLocationsAppsEvaluationExpectationsRequest,
  CreateProjectsLocationsAppsEvaluationExpectationsResponse,
  CreateProjectsLocationsAppsEvaluationExpectationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAppsEvaluationExpectationsRequest,
  output: CreateProjectsLocationsAppsEvaluationExpectationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAppsExamplesRequest {
  /** Required. The resource name of the app to create an example in. */
  parent: string;
  /** Optional. The ID to use for the example, which will become the final component of the example's resource name. If not provided, a unique ID will be automatically assigned for the example. */
  exampleId?: string;
  /** Request body */
  body?: Example;
}

export const CreateProjectsLocationsAppsExamplesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    exampleId: Schema.optional(Schema.String).pipe(T.HttpQuery("exampleId")),
    body: Schema.optional(Example).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}/examples",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAppsExamplesRequest>;

export type CreateProjectsLocationsAppsExamplesResponse = Example;
export const CreateProjectsLocationsAppsExamplesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Example;

export type CreateProjectsLocationsAppsExamplesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new example in the given app. */
export const createProjectsLocationsAppsExamples: API.OperationMethod<
  CreateProjectsLocationsAppsExamplesRequest,
  CreateProjectsLocationsAppsExamplesResponse,
  CreateProjectsLocationsAppsExamplesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAppsExamplesRequest,
  output: CreateProjectsLocationsAppsExamplesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAppsExamplesRequest {
  /** Identifier. The unique identifier of the example. Format: `projects/{project}/locations/{location}/apps/{app}/examples/{example}` */
  name: string;
  /** Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated. */
  updateMask?: string;
  /** Request body */
  body?: Example;
}

export const PatchProjectsLocationsAppsExamplesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Example).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAppsExamplesRequest>;

export type PatchProjectsLocationsAppsExamplesResponse = Example;
export const PatchProjectsLocationsAppsExamplesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Example;

export type PatchProjectsLocationsAppsExamplesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the specified example. */
export const patchProjectsLocationsAppsExamples: API.OperationMethod<
  PatchProjectsLocationsAppsExamplesRequest,
  PatchProjectsLocationsAppsExamplesResponse,
  PatchProjectsLocationsAppsExamplesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAppsExamplesRequest,
  output: PatchProjectsLocationsAppsExamplesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAppsExamplesRequest {
  /** Required. The resource name of the example to retrieve. */
  name: string;
}

export const GetProjectsLocationsAppsExamplesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAppsExamplesRequest>;

export type GetProjectsLocationsAppsExamplesResponse = Example;
export const GetProjectsLocationsAppsExamplesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Example;

export type GetProjectsLocationsAppsExamplesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of the specified example. */
export const getProjectsLocationsAppsExamples: API.OperationMethod<
  GetProjectsLocationsAppsExamplesRequest,
  GetProjectsLocationsAppsExamplesResponse,
  GetProjectsLocationsAppsExamplesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAppsExamplesRequest,
  output: GetProjectsLocationsAppsExamplesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsAppsExamplesRequest {
  /** Required. The resource name of the example to delete. */
  name: string;
  /** Optional. The current etag of the example. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the example, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
}

export const DeleteProjectsLocationsAppsExamplesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAppsExamplesRequest>;

export type DeleteProjectsLocationsAppsExamplesResponse = Empty;
export const DeleteProjectsLocationsAppsExamplesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsAppsExamplesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified example. */
export const deleteProjectsLocationsAppsExamples: API.OperationMethod<
  DeleteProjectsLocationsAppsExamplesRequest,
  DeleteProjectsLocationsAppsExamplesResponse,
  DeleteProjectsLocationsAppsExamplesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAppsExamplesRequest,
  output: DeleteProjectsLocationsAppsExamplesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAppsExamplesRequest {
  /** Optional. The next_page_token value returned from a previous list AgentService.ListExamples call. */
  pageToken?: string;
  /** Optional. Filter to be applied when listing the examples. See https://google.aip.dev/160 for more details. */
  filter?: string;
  /** Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Required. The resource name of the app to list examples from. */
  parent: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsAppsExamplesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/examples" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAppsExamplesRequest>;

export type ListProjectsLocationsAppsExamplesResponse = ListExamplesResponse;
export const ListProjectsLocationsAppsExamplesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListExamplesResponse;

export type ListProjectsLocationsAppsExamplesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists examples in the given app. */
export const listProjectsLocationsAppsExamples: API.PaginatedOperationMethod<
  ListProjectsLocationsAppsExamplesRequest,
  ListProjectsLocationsAppsExamplesResponse,
  ListProjectsLocationsAppsExamplesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAppsExamplesRequest,
  output: ListProjectsLocationsAppsExamplesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsAppsVersionsRequest {
  /** Required. The resource name of the app version to delete. */
  name: string;
  /** Optional. The current etag of the app version. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the app version, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
}

export const DeleteProjectsLocationsAppsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAppsVersionsRequest>;

export type DeleteProjectsLocationsAppsVersionsResponse = Empty;
export const DeleteProjectsLocationsAppsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsAppsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified app version. */
export const deleteProjectsLocationsAppsVersions: API.OperationMethod<
  DeleteProjectsLocationsAppsVersionsRequest,
  DeleteProjectsLocationsAppsVersionsResponse,
  DeleteProjectsLocationsAppsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAppsVersionsRequest,
  output: DeleteProjectsLocationsAppsVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAppsVersionsRequest {
  /** Required. The resource name of the app to list app versions from. */
  parent: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Filter to be applied when listing the app versions. See https://google.aip.dev/160 for more details. */
  filter?: string;
  /** Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Optional. The next_page_token value returned from a previous list AgentService.ListAppVersions call. */
  pageToken?: string;
}

export const ListProjectsLocationsAppsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/versions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAppsVersionsRequest>;

export type ListProjectsLocationsAppsVersionsResponse = ListAppVersionsResponse;
export const ListProjectsLocationsAppsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAppVersionsResponse;

export type ListProjectsLocationsAppsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all app versions in the given app. */
export const listProjectsLocationsAppsVersions: API.PaginatedOperationMethod<
  ListProjectsLocationsAppsVersionsRequest,
  ListProjectsLocationsAppsVersionsResponse,
  ListProjectsLocationsAppsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAppsVersionsRequest,
  output: ListProjectsLocationsAppsVersionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsAppsVersionsRequest {
  /** Required. The resource name of the app version to retrieve. */
  name: string;
}

export const GetProjectsLocationsAppsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAppsVersionsRequest>;

export type GetProjectsLocationsAppsVersionsResponse = AppVersion;
export const GetProjectsLocationsAppsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AppVersion;

export type GetProjectsLocationsAppsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of the specified app version. */
export const getProjectsLocationsAppsVersions: API.OperationMethod<
  GetProjectsLocationsAppsVersionsRequest,
  GetProjectsLocationsAppsVersionsResponse,
  GetProjectsLocationsAppsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAppsVersionsRequest,
  output: GetProjectsLocationsAppsVersionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface RestoreProjectsLocationsAppsVersionsRequest {
  /** Required. The resource name of the app version to restore. */
  name: string;
  /** Request body */
  body?: RestoreAppVersionRequest;
}

export const RestoreProjectsLocationsAppsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RestoreAppVersionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta/{+name}:restore", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RestoreProjectsLocationsAppsVersionsRequest>;

export type RestoreProjectsLocationsAppsVersionsResponse = Operation;
export const RestoreProjectsLocationsAppsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RestoreProjectsLocationsAppsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Restores the specified app version. This will create a new app version from the current draft app and overwrite the current draft with the specified app version. */
export const restoreProjectsLocationsAppsVersions: API.OperationMethod<
  RestoreProjectsLocationsAppsVersionsRequest,
  RestoreProjectsLocationsAppsVersionsResponse,
  RestoreProjectsLocationsAppsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RestoreProjectsLocationsAppsVersionsRequest,
  output: RestoreProjectsLocationsAppsVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAppsVersionsRequest {
  /** Required. The resource name of the app to create an app version in. */
  parent: string;
  /** Optional. The ID to use for the app version, which will become the final component of the app version's resource name. If not provided, a unique ID will be automatically assigned for the app version. */
  appVersionId?: string;
  /** Request body */
  body?: AppVersion;
}

export const CreateProjectsLocationsAppsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    appVersionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("appVersionId"),
    ),
    body: Schema.optional(AppVersion).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}/versions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAppsVersionsRequest>;

export type CreateProjectsLocationsAppsVersionsResponse = AppVersion;
export const CreateProjectsLocationsAppsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AppVersion;

export type CreateProjectsLocationsAppsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new app version in the given app. */
export const createProjectsLocationsAppsVersions: API.OperationMethod<
  CreateProjectsLocationsAppsVersionsRequest,
  CreateProjectsLocationsAppsVersionsResponse,
  CreateProjectsLocationsAppsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAppsVersionsRequest,
  output: CreateProjectsLocationsAppsVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAppsAgentsRequest {
  /** Required. The resource name of the app to create an agent in. */
  parent: string;
  /** Optional. The ID to use for the agent, which will become the final component of the agent's resource name. If not provided, a unique ID will be automatically assigned for the agent. */
  agentId?: string;
  /** Request body */
  body?: Agent;
}

export const CreateProjectsLocationsAppsAgentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    agentId: Schema.optional(Schema.String).pipe(T.HttpQuery("agentId")),
    body: Schema.optional(Agent).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta/{+parent}/agents", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAppsAgentsRequest>;

export type CreateProjectsLocationsAppsAgentsResponse = Agent;
export const CreateProjectsLocationsAppsAgentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Agent;

export type CreateProjectsLocationsAppsAgentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new agent in the given app. */
export const createProjectsLocationsAppsAgents: API.OperationMethod<
  CreateProjectsLocationsAppsAgentsRequest,
  CreateProjectsLocationsAppsAgentsResponse,
  CreateProjectsLocationsAppsAgentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAppsAgentsRequest,
  output: CreateProjectsLocationsAppsAgentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAppsAgentsRequest {
  /** Identifier. The unique identifier of the agent. Format: `projects/{project}/locations/{location}/apps/{app}/agents/{agent}` */
  name: string;
  /** Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated. */
  updateMask?: string;
  /** Request body */
  body?: Agent;
}

export const PatchProjectsLocationsAppsAgentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Agent).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAppsAgentsRequest>;

export type PatchProjectsLocationsAppsAgentsResponse = Agent;
export const PatchProjectsLocationsAppsAgentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Agent;

export type PatchProjectsLocationsAppsAgentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the specified agent. */
export const patchProjectsLocationsAppsAgents: API.OperationMethod<
  PatchProjectsLocationsAppsAgentsRequest,
  PatchProjectsLocationsAppsAgentsResponse,
  PatchProjectsLocationsAppsAgentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAppsAgentsRequest,
  output: PatchProjectsLocationsAppsAgentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAppsAgentsRequest {
  /** Required. The resource name of the agent to retrieve. */
  name: string;
}

export const GetProjectsLocationsAppsAgentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAppsAgentsRequest>;

export type GetProjectsLocationsAppsAgentsResponse = Agent;
export const GetProjectsLocationsAppsAgentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Agent;

export type GetProjectsLocationsAppsAgentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of the specified agent. */
export const getProjectsLocationsAppsAgents: API.OperationMethod<
  GetProjectsLocationsAppsAgentsRequest,
  GetProjectsLocationsAppsAgentsResponse,
  GetProjectsLocationsAppsAgentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAppsAgentsRequest,
  output: GetProjectsLocationsAppsAgentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsAppsAgentsRequest {
  /** Required. The resource name of the agent to delete. */
  name: string;
  /** Optional. The current etag of the agent. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the agent, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
  /** Optional. Indicates whether to forcefully delete the agent, even if it is still referenced by other app/agents/examples. * If `force = false`, the deletion fails if other agents/examples reference it. * If `force = true`, delete the agent and remove it from all referencing apps/agents/examples. */
  force?: boolean;
}

export const DeleteProjectsLocationsAppsAgentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAppsAgentsRequest>;

export type DeleteProjectsLocationsAppsAgentsResponse = Empty;
export const DeleteProjectsLocationsAppsAgentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsAppsAgentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified agent. */
export const deleteProjectsLocationsAppsAgents: API.OperationMethod<
  DeleteProjectsLocationsAppsAgentsRequest,
  DeleteProjectsLocationsAppsAgentsResponse,
  DeleteProjectsLocationsAppsAgentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAppsAgentsRequest,
  output: DeleteProjectsLocationsAppsAgentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAppsAgentsRequest {
  /** Required. The resource name of the app to list agents from. */
  parent: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Filter to be applied when listing the agents. See https://google.aip.dev/160 for more details. */
  filter?: string;
  /** Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Optional. The next_page_token value returned from a previous list AgentService.ListAgents call. */
  pageToken?: string;
}

export const ListProjectsLocationsAppsAgentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/agents" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAppsAgentsRequest>;

export type ListProjectsLocationsAppsAgentsResponse = ListAgentsResponse;
export const ListProjectsLocationsAppsAgentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAgentsResponse;

export type ListProjectsLocationsAppsAgentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists agents in the given app. */
export const listProjectsLocationsAppsAgents: API.PaginatedOperationMethod<
  ListProjectsLocationsAppsAgentsRequest,
  ListProjectsLocationsAppsAgentsResponse,
  ListProjectsLocationsAppsAgentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAppsAgentsRequest,
  output: ListProjectsLocationsAppsAgentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
