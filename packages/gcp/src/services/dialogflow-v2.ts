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

export interface GoogleRpcStatus {
  code?: number;
  message?: string;
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const GoogleRpcStatus = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.optional(Schema.Number),
  message: Schema.optional(Schema.String),
  details: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  ),
}).annotate({ identifier: "GoogleRpcStatus" });

export interface GoogleLongrunningOperation {
  name?: string;
  metadata?: Record<string, unknown>;
  done?: boolean;
  error?: GoogleRpcStatus;
  response?: Record<string, unknown>;
}

export const GoogleLongrunningOperation =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
    error: Schema.optional(GoogleRpcStatus),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleLongrunningOperation" });

export interface GoogleLongrunningListOperationsResponse {
  operations?: ReadonlyArray<GoogleLongrunningOperation>;
  nextPageToken?: string;
  unreachable?: ReadonlyArray<string>;
}

export const GoogleLongrunningListOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(GoogleLongrunningOperation)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleLongrunningListOperationsResponse" });

export interface GoogleProtobufEmpty {}

export const GoogleProtobufEmpty = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "GoogleProtobufEmpty" });

export interface GoogleCloudDialogflowV2Agent {
  parent?: string;
  displayName?: string;
  defaultLanguageCode?: string;
  supportedLanguageCodes?: ReadonlyArray<string>;
  timeZone?: string;
  description?: string;
  avatarUri?: string;
  enableLogging?: boolean;
  matchMode?:
    | "MATCH_MODE_UNSPECIFIED"
    | "MATCH_MODE_HYBRID"
    | "MATCH_MODE_ML_ONLY"
    | (string & {});
  classificationThreshold?: number;
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
}

export const GoogleCloudDialogflowV2Agent =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    defaultLanguageCode: Schema.optional(Schema.String),
    supportedLanguageCodes: Schema.optional(Schema.Array(Schema.String)),
    timeZone: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    avatarUri: Schema.optional(Schema.String),
    enableLogging: Schema.optional(Schema.Boolean),
    matchMode: Schema.optional(Schema.String),
    classificationThreshold: Schema.optional(Schema.Number),
    apiVersion: Schema.optional(Schema.String),
    tier: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Agent" });

export interface GoogleCloudDialogflowV2SearchAgentsResponse {
  agents?: ReadonlyArray<GoogleCloudDialogflowV2Agent>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2SearchAgentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agents: Schema.optional(Schema.Array(GoogleCloudDialogflowV2Agent)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SearchAgentsResponse" });

export interface GoogleCloudDialogflowV2TrainAgentRequest {}

export const GoogleCloudDialogflowV2TrainAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowV2TrainAgentRequest",
  });

export interface GoogleCloudDialogflowV2ExportAgentRequest {
  agentUri?: string;
}

export const GoogleCloudDialogflowV2ExportAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ExportAgentRequest" });

export interface GoogleCloudDialogflowV2ImportAgentRequest {
  agentUri?: string;
  agentContent?: string;
}

export const GoogleCloudDialogflowV2ImportAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentUri: Schema.optional(Schema.String),
    agentContent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ImportAgentRequest" });

export interface GoogleCloudDialogflowV2RestoreAgentRequest {
  agentUri?: string;
  agentContent?: string;
}

export const GoogleCloudDialogflowV2RestoreAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentUri: Schema.optional(Schema.String),
    agentContent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2RestoreAgentRequest" });

export interface GoogleCloudDialogflowV2ValidationError {
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

export const GoogleCloudDialogflowV2ValidationError =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    severity: Schema.optional(Schema.String),
    entries: Schema.optional(Schema.Array(Schema.String)),
    errorMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ValidationError" });

export interface GoogleCloudDialogflowV2ValidationResult {
  validationErrors?: ReadonlyArray<GoogleCloudDialogflowV2ValidationError>;
}

export const GoogleCloudDialogflowV2ValidationResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validationErrors: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2ValidationError),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ValidationResult" });

export interface GoogleCloudDialogflowV2ToolExtensionTool {
  name?: string;
}

export const GoogleCloudDialogflowV2ToolExtensionTool =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolExtensionTool" });

export interface GoogleCloudDialogflowV2ToolFunctionTool {
  inputSchema?: Record<string, unknown>;
  outputSchema?: Record<string, unknown>;
  methodType?:
    | "METHOD_TYPE_UNSPECIFIED"
    | "GET"
    | "POST"
    | "PUT"
    | "DELETE"
    | "PATCH"
    | (string & {});
}

export const GoogleCloudDialogflowV2ToolFunctionTool =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputSchema: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    outputSchema: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    methodType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolFunctionTool" });

export interface GoogleCloudDialogflowV2ToolConnectorToolActionEntityOperation {
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

export const GoogleCloudDialogflowV2ToolConnectorToolActionEntityOperation =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityId: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ToolConnectorToolActionEntityOperation",
  });

export interface GoogleCloudDialogflowV2ToolConnectorToolAction {
  connectionActionId?: string;
  entityOperation?: GoogleCloudDialogflowV2ToolConnectorToolActionEntityOperation;
  inputFields?: ReadonlyArray<string>;
  outputFields?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2ToolConnectorToolAction =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connectionActionId: Schema.optional(Schema.String),
    entityOperation: Schema.optional(
      GoogleCloudDialogflowV2ToolConnectorToolActionEntityOperation,
    ),
    inputFields: Schema.optional(Schema.Array(Schema.String)),
    outputFields: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolConnectorToolAction" });

export interface GoogleCloudDialogflowV2ToolConnectorTool {
  name?: string;
  actions?: ReadonlyArray<GoogleCloudDialogflowV2ToolConnectorToolAction>;
}

export const GoogleCloudDialogflowV2ToolConnectorTool =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    actions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2ToolConnectorToolAction),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolConnectorTool" });

export interface GoogleCloudDialogflowV2ToolAuthenticationApiKeyConfig {
  keyName?: string;
  apiKey?: string;
  secretVersionForApiKey?: string;
  requestLocation?:
    | "REQUEST_LOCATION_UNSPECIFIED"
    | "HEADER"
    | "QUERY_STRING"
    | (string & {});
}

export const GoogleCloudDialogflowV2ToolAuthenticationApiKeyConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyName: Schema.optional(Schema.String),
    apiKey: Schema.optional(Schema.String),
    secretVersionForApiKey: Schema.optional(Schema.String),
    requestLocation: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ToolAuthenticationApiKeyConfig",
  });

export interface GoogleCloudDialogflowV2ToolAuthenticationOAuthConfig {
  oauthGrantType?:
    | "OAUTH_GRANT_TYPE_UNSPECIFIED"
    | "CLIENT_CREDENTIAL"
    | (string & {});
  clientId?: string;
  clientSecret?: string;
  secretVersionForClientSecret?: string;
  tokenEndpoint?: string;
  scopes?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2ToolAuthenticationOAuthConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oauthGrantType: Schema.optional(Schema.String),
    clientId: Schema.optional(Schema.String),
    clientSecret: Schema.optional(Schema.String),
    secretVersionForClientSecret: Schema.optional(Schema.String),
    tokenEndpoint: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Schema.String)),
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

export const GoogleCloudDialogflowV2ToolAuthenticationServiceAgentAuthConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAgentAuth: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2ToolAuthenticationServiceAgentAuthConfig",
  });

export interface GoogleCloudDialogflowV2ToolAuthenticationBearerTokenConfig {
  token?: string;
  secretVersionForToken?: string;
}

export const GoogleCloudDialogflowV2ToolAuthenticationBearerTokenConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String),
    secretVersionForToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ToolAuthenticationBearerTokenConfig",
  });

export interface GoogleCloudDialogflowV2ToolAuthentication {
  apiKeyConfig?: GoogleCloudDialogflowV2ToolAuthenticationApiKeyConfig;
  oauthConfig?: GoogleCloudDialogflowV2ToolAuthenticationOAuthConfig;
  serviceAgentAuthConfig?: GoogleCloudDialogflowV2ToolAuthenticationServiceAgentAuthConfig;
  bearerTokenConfig?: GoogleCloudDialogflowV2ToolAuthenticationBearerTokenConfig;
}

export const GoogleCloudDialogflowV2ToolAuthentication =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiKeyConfig: Schema.optional(
      GoogleCloudDialogflowV2ToolAuthenticationApiKeyConfig,
    ),
    oauthConfig: Schema.optional(
      GoogleCloudDialogflowV2ToolAuthenticationOAuthConfig,
    ),
    serviceAgentAuthConfig: Schema.optional(
      GoogleCloudDialogflowV2ToolAuthenticationServiceAgentAuthConfig,
    ),
    bearerTokenConfig: Schema.optional(
      GoogleCloudDialogflowV2ToolAuthenticationBearerTokenConfig,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolAuthentication" });

export interface GoogleCloudDialogflowV2ToolTLSConfigCACert {
  displayName?: string;
  cert?: string;
}

export const GoogleCloudDialogflowV2ToolTLSConfigCACert =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    cert: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolTLSConfigCACert" });

export interface GoogleCloudDialogflowV2ToolTLSConfig {
  caCerts?: ReadonlyArray<GoogleCloudDialogflowV2ToolTLSConfigCACert>;
}

export const GoogleCloudDialogflowV2ToolTLSConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    caCerts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2ToolTLSConfigCACert),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolTLSConfig" });

export interface GoogleCloudDialogflowV2ToolServiceDirectoryConfig {
  service?: string;
}

export const GoogleCloudDialogflowV2ToolServiceDirectoryConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ToolServiceDirectoryConfig",
  });

export interface GoogleCloudDialogflowV2ToolOpenApiTool {
  textSchema?: string;
  authentication?: GoogleCloudDialogflowV2ToolAuthentication;
  tlsConfig?: GoogleCloudDialogflowV2ToolTLSConfig;
  serviceDirectoryConfig?: GoogleCloudDialogflowV2ToolServiceDirectoryConfig;
}

export const GoogleCloudDialogflowV2ToolOpenApiTool =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    textSchema: Schema.optional(Schema.String),
    authentication: Schema.optional(GoogleCloudDialogflowV2ToolAuthentication),
    tlsConfig: Schema.optional(GoogleCloudDialogflowV2ToolTLSConfig),
    serviceDirectoryConfig: Schema.optional(
      GoogleCloudDialogflowV2ToolServiceDirectoryConfig,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolOpenApiTool" });

export interface GoogleCloudDialogflowV2Tool {
  name?: string;
  toolKey?: string;
  displayName?: string;
  description?: string;
  actionConfirmationRequirement?: Record<
    string,
    | "CONFIRMATION_REQUIREMENT_UNSPECIFIED"
    | "REQUIRED"
    | "NOT_REQUIRED"
    | (string & {})
  >;
  extensionSpec?: GoogleCloudDialogflowV2ToolExtensionTool;
  functionSpec?: GoogleCloudDialogflowV2ToolFunctionTool;
  connectorSpec?: GoogleCloudDialogflowV2ToolConnectorTool;
  openApiSpec?: GoogleCloudDialogflowV2ToolOpenApiTool;
  createTime?: string;
  updateTime?: string;
  satisfiesPzs?: boolean;
  satisfiesPzi?: boolean;
}

export const GoogleCloudDialogflowV2Tool =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    toolKey: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    actionConfirmationRequirement: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    extensionSpec: Schema.optional(GoogleCloudDialogflowV2ToolExtensionTool),
    functionSpec: Schema.optional(GoogleCloudDialogflowV2ToolFunctionTool),
    connectorSpec: Schema.optional(GoogleCloudDialogflowV2ToolConnectorTool),
    openApiSpec: Schema.optional(GoogleCloudDialogflowV2ToolOpenApiTool),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    satisfiesPzi: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Tool" });

export interface GoogleCloudDialogflowV2ListToolsResponse {
  tools?: ReadonlyArray<GoogleCloudDialogflowV2Tool>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListToolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tools: Schema.optional(Schema.Array(GoogleCloudDialogflowV2Tool)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ListToolsResponse" });

export interface GoogleCloudDialogflowV2FreeFormContext {
  text?: string;
}

export const GoogleCloudDialogflowV2FreeFormContext =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2FreeFormContext" });

export interface GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion {
  answerRecord?: string;
  suggestionIndex?: number;
  similarityScore?: number;
}

export const GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answerRecord: Schema.optional(Schema.String),
    suggestionIndex: Schema.optional(Schema.Number),
    similarityScore: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion",
  });

export interface GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResult {
  duplicateSuggestions?: ReadonlyArray<GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion>;
}

export const GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResult =
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
  displayDetails?: string;
  condition?: string;
  agentAction?: string;
  systemAction?: string;
  duplicateCheckResult?: GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResult;
  triggeringEvent?:
    | "TRIGGER_EVENT_UNSPECIFIED"
    | "END_OF_UTTERANCE"
    | "MANUAL_CALL"
    | "CUSTOMER_MESSAGE"
    | "AGENT_MESSAGE"
    | "TOOL_CALL_COMPLETION"
    | (string & {});
}

export const GoogleCloudDialogflowV2AgentCoachingInstruction =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    displayDetails: Schema.optional(Schema.String),
    condition: Schema.optional(Schema.String),
    agentAction: Schema.optional(Schema.String),
    systemAction: Schema.optional(Schema.String),
    duplicateCheckResult: Schema.optional(
      GoogleCloudDialogflowV2AgentCoachingInstructionDuplicateCheckResult,
    ),
    triggeringEvent: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2AgentCoachingInstruction",
  });

export interface GoogleCloudDialogflowV2AgentCoachingContext {
  overarchingGuidance?: string;
  instructions?: ReadonlyArray<GoogleCloudDialogflowV2AgentCoachingInstruction>;
  version?: string;
  outputLanguageCode?: string;
}

export const GoogleCloudDialogflowV2AgentCoachingContext =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    overarchingGuidance: Schema.optional(Schema.String),
    instructions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2AgentCoachingInstruction),
    ),
    version: Schema.optional(Schema.String),
    outputLanguageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2AgentCoachingContext" });

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

export const GoogleCloudDialogflowV2SummarizationSection =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    definition: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SummarizationSection" });

export interface GoogleCloudDialogflowV2MessageEntry {
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

export const GoogleCloudDialogflowV2MessageEntry =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2MessageEntry" });

export interface GoogleCloudDialogflowV2ConversationContext {
  messageEntries?: ReadonlyArray<GoogleCloudDialogflowV2MessageEntry>;
}

export const GoogleCloudDialogflowV2ConversationContext =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messageEntries: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2MessageEntry),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ConversationContext" });

export interface GoogleCloudDialogflowV2SummarizationSectionList {
  summarizationSections?: ReadonlyArray<GoogleCloudDialogflowV2SummarizationSection>;
}

export const GoogleCloudDialogflowV2SummarizationSectionList =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    summarizationSections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SummarizationSection),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SummarizationSectionList",
  });

export interface GoogleCloudDialogflowV2FreeFormSuggestion {
  response?: string;
}

export const GoogleCloudDialogflowV2FreeFormSuggestion =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    response: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2FreeFormSuggestion" });

export interface GoogleCloudDialogflowV2SummarySuggestionSummarySection {
  section?: string;
  summary?: string;
}

export const GoogleCloudDialogflowV2SummarySuggestionSummarySection =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    section: Schema.optional(Schema.String),
    summary: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SummarySuggestionSummarySection",
  });

export interface GoogleCloudDialogflowV2SummarySuggestion {
  summarySections?: ReadonlyArray<GoogleCloudDialogflowV2SummarySuggestionSummarySection>;
}

export const GoogleCloudDialogflowV2SummarySuggestion =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    summarySections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SummarySuggestionSummarySection),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SummarySuggestion" });

export interface GoogleCloudDialogflowV2AgentCoachingSuggestionSources {
  instructionIndexes?: ReadonlyArray<number>;
}

export const GoogleCloudDialogflowV2AgentCoachingSuggestionSources =
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

export const GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion =
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

export const GoogleCloudDialogflowV2AgentCoachingSuggestionDuplicateCheckResult =
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

export const GoogleCloudDialogflowV2AgentCoachingSuggestionAgentActionSuggestion =
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

export const GoogleCloudDialogflowV2AgentCoachingSuggestionSampleResponse =
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

export const GoogleCloudDialogflowV2AgentCoachingSuggestion =
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
  tool?: string;
  cesTool?: string;
  cesToolset?: string;
  cesApp?: string;
  toolDisplayName?: string;
  toolDisplayDetails?: string;
  action?: string;
  inputParameters?: Record<string, unknown>;
  createTime?: string;
  answerRecord?: string;
  state?:
    | "STATE_UNSPECIFIED"
    | "TRIGGERED"
    | "NEEDS_CONFIRMATION"
    | (string & {});
}

export const GoogleCloudDialogflowV2ToolCall =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tool: Schema.optional(Schema.String),
    cesTool: Schema.optional(Schema.String),
    cesToolset: Schema.optional(Schema.String),
    cesApp: Schema.optional(Schema.String),
    toolDisplayName: Schema.optional(Schema.String),
    toolDisplayDetails: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    createTime: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolCall" });

export interface GoogleCloudDialogflowV2ToolCallResultError {
  message?: string;
}

export const GoogleCloudDialogflowV2ToolCallResultError =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolCallResultError" });

export interface GoogleCloudDialogflowV2ToolCallResult {
  tool?: string;
  cesToolset?: string;
  cesTool?: string;
  cesApp?: string;
  action?: string;
  error?: GoogleCloudDialogflowV2ToolCallResultError;
  rawContent?: string;
  content?: string;
  createTime?: string;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2ToolCallResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tool: Schema.optional(Schema.String),
    cesToolset: Schema.optional(Schema.String),
    cesTool: Schema.optional(Schema.String),
    cesApp: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    error: Schema.optional(GoogleCloudDialogflowV2ToolCallResultError),
    rawContent: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolCallResult" });

export interface GoogleCloudDialogflowV2GeneratorSuggestionToolCallInfo {
  toolCall?: GoogleCloudDialogflowV2ToolCall;
  toolCallResult?: GoogleCloudDialogflowV2ToolCallResult;
}

export const GoogleCloudDialogflowV2GeneratorSuggestionToolCallInfo =
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

export const GoogleCloudDialogflowV2GeneratorSuggestion =
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

export interface GoogleCloudDialogflowV2FewShotExample {
  conversationContext?: GoogleCloudDialogflowV2ConversationContext;
  extraInfo?: Record<string, string>;
  summarizationSectionList?: GoogleCloudDialogflowV2SummarizationSectionList;
  output?: GoogleCloudDialogflowV2GeneratorSuggestion;
}

export const GoogleCloudDialogflowV2FewShotExample =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationContext: Schema.optional(
      GoogleCloudDialogflowV2ConversationContext,
    ),
    extraInfo: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    summarizationSectionList: Schema.optional(
      GoogleCloudDialogflowV2SummarizationSectionList,
    ),
    output: Schema.optional(GoogleCloudDialogflowV2GeneratorSuggestion),
  }).annotate({ identifier: "GoogleCloudDialogflowV2FewShotExample" });

export interface GoogleCloudDialogflowV2SummarizationContext {
  summarizationSections?: ReadonlyArray<GoogleCloudDialogflowV2SummarizationSection>;
  fewShotExamples?: ReadonlyArray<GoogleCloudDialogflowV2FewShotExample>;
  version?: string;
  outputLanguageCode?: string;
}

export const GoogleCloudDialogflowV2SummarizationContext =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    summarizationSections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SummarizationSection),
    ),
    fewShotExamples: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2FewShotExample),
    ),
    version: Schema.optional(Schema.String),
    outputLanguageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SummarizationContext" });

export interface GoogleCloudDialogflowV2InferenceParameter {
  maxOutputTokens?: number;
  temperature?: number;
  topK?: number;
  topP?: number;
}

export const GoogleCloudDialogflowV2InferenceParameter =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxOutputTokens: Schema.optional(Schema.Number),
    temperature: Schema.optional(Schema.Number),
    topK: Schema.optional(Schema.Number),
    topP: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2InferenceParameter" });

export interface GoogleCloudDialogflowV2SuggestionDedupingConfig {
  enableDeduping?: boolean;
  similarityThreshold?: number;
}

export const GoogleCloudDialogflowV2SuggestionDedupingConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableDeduping: Schema.optional(Schema.Boolean),
    similarityThreshold: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SuggestionDedupingConfig",
  });

export interface GoogleCloudDialogflowV2ToolsetTool {
  toolset?: string;
  operationId?: string;
  confirmationRequirement?:
    | "CONFIRMATION_REQUIREMENT_UNSPECIFIED"
    | "REQUIRED"
    | "NOT_REQUIRED"
    | (string & {});
}

export const GoogleCloudDialogflowV2ToolsetTool =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolset: Schema.optional(Schema.String),
    operationId: Schema.optional(Schema.String),
    confirmationRequirement: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ToolsetTool" });

export interface GoogleCloudDialogflowV2CesToolSpec {
  cesTool?: string;
  confirmationRequirement?:
    | "CONFIRMATION_REQUIREMENT_UNSPECIFIED"
    | "REQUIRED"
    | "NOT_REQUIRED"
    | (string & {});
}

export const GoogleCloudDialogflowV2CesToolSpec =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cesTool: Schema.optional(Schema.String),
    confirmationRequirement: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2CesToolSpec" });

export interface GoogleCloudDialogflowV2CesAppSpec {
  cesApp?: string;
  confirmationRequirement?:
    | "CONFIRMATION_REQUIREMENT_UNSPECIFIED"
    | "REQUIRED"
    | "NOT_REQUIRED"
    | (string & {});
}

export const GoogleCloudDialogflowV2CesAppSpec =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cesApp: Schema.optional(Schema.String),
    confirmationRequirement: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2CesAppSpec" });

export interface GoogleCloudDialogflowV2Generator {
  name?: string;
  description?: string;
  freeFormContext?: GoogleCloudDialogflowV2FreeFormContext;
  agentCoachingContext?: GoogleCloudDialogflowV2AgentCoachingContext;
  summarizationContext?: GoogleCloudDialogflowV2SummarizationContext;
  inferenceParameter?: GoogleCloudDialogflowV2InferenceParameter;
  triggerEvent?:
    | "TRIGGER_EVENT_UNSPECIFIED"
    | "END_OF_UTTERANCE"
    | "MANUAL_CALL"
    | "CUSTOMER_MESSAGE"
    | "AGENT_MESSAGE"
    | (string & {});
  publishedModel?: string;
  createTime?: string;
  updateTime?: string;
  tools?: ReadonlyArray<string>;
  suggestionDedupingConfig?: GoogleCloudDialogflowV2SuggestionDedupingConfig;
  toolsetTools?: ReadonlyArray<GoogleCloudDialogflowV2ToolsetTool>;
  cesToolSpecs?: ReadonlyArray<GoogleCloudDialogflowV2CesToolSpec>;
  cesAppSpecs?: ReadonlyArray<GoogleCloudDialogflowV2CesAppSpec>;
}

export const GoogleCloudDialogflowV2Generator =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    freeFormContext: Schema.optional(GoogleCloudDialogflowV2FreeFormContext),
    agentCoachingContext: Schema.optional(
      GoogleCloudDialogflowV2AgentCoachingContext,
    ),
    summarizationContext: Schema.optional(
      GoogleCloudDialogflowV2SummarizationContext,
    ),
    inferenceParameter: Schema.optional(
      GoogleCloudDialogflowV2InferenceParameter,
    ),
    triggerEvent: Schema.optional(Schema.String),
    publishedModel: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    tools: Schema.optional(Schema.Array(Schema.String)),
    suggestionDedupingConfig: Schema.optional(
      GoogleCloudDialogflowV2SuggestionDedupingConfig,
    ),
    toolsetTools: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2ToolsetTool),
    ),
    cesToolSpecs: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2CesToolSpec),
    ),
    cesAppSpecs: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2CesAppSpec),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Generator" });

export interface GoogleCloudDialogflowV2ListGeneratorsResponse {
  generators?: ReadonlyArray<GoogleCloudDialogflowV2Generator>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListGeneratorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generators: Schema.optional(Schema.Array(GoogleCloudDialogflowV2Generator)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ListGeneratorsResponse" });

export interface GoogleCloudDialogflowV2Context {
  name?: string;
  lifespanCount?: number;
  parameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2Context =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    lifespanCount: Schema.optional(Schema.Number),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Context" });

export interface GoogleCloudDialogflowV2ListContextsResponse {
  contexts?: ReadonlyArray<GoogleCloudDialogflowV2Context>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contexts: Schema.optional(Schema.Array(GoogleCloudDialogflowV2Context)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ListContextsResponse" });

export interface GoogleCloudDialogflowV2IntentTrainingPhrasePart {
  text?: string;
  entityType?: string;
  alias?: string;
  userDefined?: boolean;
}

export const GoogleCloudDialogflowV2IntentTrainingPhrasePart =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    entityType: Schema.optional(Schema.String),
    alias: Schema.optional(Schema.String),
    userDefined: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentTrainingPhrasePart",
  });

export interface GoogleCloudDialogflowV2IntentTrainingPhrase {
  name?: string;
  type?: "TYPE_UNSPECIFIED" | "EXAMPLE" | "TEMPLATE" | (string & {});
  parts?: ReadonlyArray<GoogleCloudDialogflowV2IntentTrainingPhrasePart>;
  timesAddedCount?: number;
}

export const GoogleCloudDialogflowV2IntentTrainingPhrase =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    parts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentTrainingPhrasePart),
    ),
    timesAddedCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentTrainingPhrase" });

export interface GoogleCloudDialogflowV2IntentParameter {
  name?: string;
  displayName?: string;
  value?: string;
  defaultValue?: string;
  entityTypeDisplayName?: string;
  mandatory?: boolean;
  prompts?: ReadonlyArray<string>;
  isList?: boolean;
}

export const GoogleCloudDialogflowV2IntentParameter =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    defaultValue: Schema.optional(Schema.String),
    entityTypeDisplayName: Schema.optional(Schema.String),
    mandatory: Schema.optional(Schema.Boolean),
    prompts: Schema.optional(Schema.Array(Schema.String)),
    isList: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentParameter" });

export interface GoogleCloudDialogflowV2IntentMessageText {
  text?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2IntentMessageText =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageText" });

export interface GoogleCloudDialogflowV2IntentMessageImage {
  imageUri?: string;
  accessibilityText?: string;
}

export const GoogleCloudDialogflowV2IntentMessageImage =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageUri: Schema.optional(Schema.String),
    accessibilityText: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageImage" });

export interface GoogleCloudDialogflowV2IntentMessageQuickReplies {
  title?: string;
  quickReplies?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2IntentMessageQuickReplies =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    quickReplies: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageQuickReplies",
  });

export interface GoogleCloudDialogflowV2IntentMessageCardButton {
  text?: string;
  postback?: string;
}

export const GoogleCloudDialogflowV2IntentMessageCardButton =
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

export const GoogleCloudDialogflowV2IntentMessageCard =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    subtitle: Schema.optional(Schema.String),
    imageUri: Schema.optional(Schema.String),
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageCardButton),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageCard" });

export interface GoogleCloudDialogflowV2IntentMessageSimpleResponse {
  textToSpeech?: string;
  ssml?: string;
  displayText?: string;
}

export const GoogleCloudDialogflowV2IntentMessageSimpleResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    textToSpeech: Schema.optional(Schema.String),
    ssml: Schema.optional(Schema.String),
    displayText: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageSimpleResponse",
  });

export interface GoogleCloudDialogflowV2IntentMessageSimpleResponses {
  simpleResponses?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageSimpleResponse>;
}

export const GoogleCloudDialogflowV2IntentMessageSimpleResponses =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    simpleResponses: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageSimpleResponse),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageSimpleResponses",
  });

export interface GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction {
  uri?: string;
}

export const GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction =
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

export const GoogleCloudDialogflowV2IntentMessageBasicCardButton =
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
  formattedText?: string;
  image?: GoogleCloudDialogflowV2IntentMessageImage;
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageBasicCardButton>;
}

export const GoogleCloudDialogflowV2IntentMessageBasicCard =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    subtitle: Schema.optional(Schema.String),
    formattedText: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageBasicCardButton),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageBasicCard" });

export interface GoogleCloudDialogflowV2IntentMessageSuggestion {
  title?: string;
}

export const GoogleCloudDialogflowV2IntentMessageSuggestion =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageSuggestion" });

export interface GoogleCloudDialogflowV2IntentMessageSuggestions {
  suggestions?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageSuggestion>;
}

export const GoogleCloudDialogflowV2IntentMessageSuggestions =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destinationName: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion",
  });

export interface GoogleCloudDialogflowV2IntentMessageSelectItemInfo {
  key?: string;
  synonyms?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2IntentMessageSelectItemInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    synonyms: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageSelectItemInfo",
  });

export interface GoogleCloudDialogflowV2IntentMessageListSelectItem {
  info?: GoogleCloudDialogflowV2IntentMessageSelectItemInfo;
  title?: string;
  description?: string;
  image?: GoogleCloudDialogflowV2IntentMessageImage;
}

export const GoogleCloudDialogflowV2IntentMessageListSelectItem =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    info: Schema.optional(GoogleCloudDialogflowV2IntentMessageSelectItemInfo),
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageListSelectItem",
  });

export interface GoogleCloudDialogflowV2IntentMessageListSelect {
  title?: string;
  items?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageListSelectItem>;
  subtitle?: string;
}

export const GoogleCloudDialogflowV2IntentMessageListSelect =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    items: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageListSelectItem),
    ),
    subtitle: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageListSelect" });

export interface GoogleCloudDialogflowV2IntentMessageCarouselSelectItem {
  info?: GoogleCloudDialogflowV2IntentMessageSelectItemInfo;
  title?: string;
  description?: string;
  image?: GoogleCloudDialogflowV2IntentMessageImage;
}

export const GoogleCloudDialogflowV2IntentMessageCarouselSelectItem =
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

export const GoogleCloudDialogflowV2IntentMessageCarouselSelect =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageCarouselSelectItem),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageCarouselSelect",
  });

export interface GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction {
  url?: string;
  urlTypeHint?:
    | "URL_TYPE_HINT_UNSPECIFIED"
    | "AMP_ACTION"
    | "AMP_CONTENT"
    | (string & {});
}

export const GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    urlTypeHint: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction",
  });

export interface GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem {
  openUriAction?: GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;
  title?: string;
  description?: string;
  image?: GoogleCloudDialogflowV2IntentMessageImage;
  footer?: string;
}

export const GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    openUriAction: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction,
    ),
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
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

export const GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard =
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

export interface GoogleCloudDialogflowV2IntentMessageColumnProperties {
  header?: string;
  horizontalAlignment?:
    | "HORIZONTAL_ALIGNMENT_UNSPECIFIED"
    | "LEADING"
    | "CENTER"
    | "TRAILING"
    | (string & {});
}

export const GoogleCloudDialogflowV2IntentMessageColumnProperties =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    header: Schema.optional(Schema.String),
    horizontalAlignment: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageColumnProperties",
  });

export interface GoogleCloudDialogflowV2IntentMessageTableCardCell {
  text?: string;
}

export const GoogleCloudDialogflowV2IntentMessageTableCardCell =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentMessageTableCardCell",
  });

export interface GoogleCloudDialogflowV2IntentMessageTableCardRow {
  cells?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageTableCardCell>;
  dividerAfter?: boolean;
}

export const GoogleCloudDialogflowV2IntentMessageTableCardRow =
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
  image?: GoogleCloudDialogflowV2IntentMessageImage;
  columnProperties?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageColumnProperties>;
  rows?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageTableCardRow>;
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessageBasicCardButton>;
}

export const GoogleCloudDialogflowV2IntentMessageTableCard =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    subtitle: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
    columnProperties: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageColumnProperties),
    ),
    rows: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageTableCardRow),
    ),
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessageBasicCardButton),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessageTableCard" });

export interface GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject {
  name?: string;
  description?: string;
  largeImage?: GoogleCloudDialogflowV2IntentMessageImage;
  icon?: GoogleCloudDialogflowV2IntentMessageImage;
  contentUrl?: string;
}

export const GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    largeImage: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
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

export const GoogleCloudDialogflowV2IntentMessageMediaContent =
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

export interface GoogleCloudDialogflowV2IntentMessage {
  text?: GoogleCloudDialogflowV2IntentMessageText;
  image?: GoogleCloudDialogflowV2IntentMessageImage;
  quickReplies?: GoogleCloudDialogflowV2IntentMessageQuickReplies;
  card?: GoogleCloudDialogflowV2IntentMessageCard;
  payload?: Record<string, unknown>;
  simpleResponses?: GoogleCloudDialogflowV2IntentMessageSimpleResponses;
  basicCard?: GoogleCloudDialogflowV2IntentMessageBasicCard;
  suggestions?: GoogleCloudDialogflowV2IntentMessageSuggestions;
  linkOutSuggestion?: GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion;
  listSelect?: GoogleCloudDialogflowV2IntentMessageListSelect;
  carouselSelect?: GoogleCloudDialogflowV2IntentMessageCarouselSelect;
  browseCarouselCard?: GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard;
  tableCard?: GoogleCloudDialogflowV2IntentMessageTableCard;
  mediaContent?: GoogleCloudDialogflowV2IntentMessageMediaContent;
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

export const GoogleCloudDialogflowV2IntentMessage =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(GoogleCloudDialogflowV2IntentMessageText),
    image: Schema.optional(GoogleCloudDialogflowV2IntentMessageImage),
    quickReplies: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageQuickReplies,
    ),
    card: Schema.optional(GoogleCloudDialogflowV2IntentMessageCard),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    simpleResponses: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageSimpleResponses,
    ),
    basicCard: Schema.optional(GoogleCloudDialogflowV2IntentMessageBasicCard),
    suggestions: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageSuggestions,
    ),
    linkOutSuggestion: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion,
    ),
    listSelect: Schema.optional(GoogleCloudDialogflowV2IntentMessageListSelect),
    carouselSelect: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageCarouselSelect,
    ),
    browseCarouselCard: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard,
    ),
    tableCard: Schema.optional(GoogleCloudDialogflowV2IntentMessageTableCard),
    mediaContent: Schema.optional(
      GoogleCloudDialogflowV2IntentMessageMediaContent,
    ),
    platform: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentMessage" });

export interface GoogleCloudDialogflowV2IntentFollowupIntentInfo {
  followupIntentName?: string;
  parentFollowupIntentName?: string;
}

export const GoogleCloudDialogflowV2IntentFollowupIntentInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    followupIntentName: Schema.optional(Schema.String),
    parentFollowupIntentName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2IntentFollowupIntentInfo",
  });

export interface GoogleCloudDialogflowV2Intent {
  name?: string;
  displayName?: string;
  webhookState?:
    | "WEBHOOK_STATE_UNSPECIFIED"
    | "WEBHOOK_STATE_ENABLED"
    | "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"
    | (string & {});
  priority?: number;
  isFallback?: boolean;
  mlDisabled?: boolean;
  liveAgentHandoff?: boolean;
  endInteraction?: boolean;
  inputContextNames?: ReadonlyArray<string>;
  events?: ReadonlyArray<string>;
  trainingPhrases?: ReadonlyArray<GoogleCloudDialogflowV2IntentTrainingPhrase>;
  action?: string;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2Context>;
  resetContexts?: boolean;
  parameters?: ReadonlyArray<GoogleCloudDialogflowV2IntentParameter>;
  messages?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessage>;
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
  rootFollowupIntentName?: string;
  parentFollowupIntentName?: string;
  followupIntentInfo?: ReadonlyArray<GoogleCloudDialogflowV2IntentFollowupIntentInfo>;
}

export const GoogleCloudDialogflowV2Intent =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    webhookState: Schema.optional(Schema.String),
    priority: Schema.optional(Schema.Number),
    isFallback: Schema.optional(Schema.Boolean),
    mlDisabled: Schema.optional(Schema.Boolean),
    liveAgentHandoff: Schema.optional(Schema.Boolean),
    endInteraction: Schema.optional(Schema.Boolean),
    inputContextNames: Schema.optional(Schema.Array(Schema.String)),
    events: Schema.optional(Schema.Array(Schema.String)),
    trainingPhrases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentTrainingPhrase),
    ),
    action: Schema.optional(Schema.String),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2Context),
    ),
    resetContexts: Schema.optional(Schema.Boolean),
    parameters: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentParameter),
    ),
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessage),
    ),
    defaultResponsePlatforms: Schema.optional(Schema.Array(Schema.String)),
    rootFollowupIntentName: Schema.optional(Schema.String),
    parentFollowupIntentName: Schema.optional(Schema.String),
    followupIntentInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentFollowupIntentInfo),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Intent" });

export interface GoogleCloudDialogflowV2ListIntentsResponse {
  intents?: ReadonlyArray<GoogleCloudDialogflowV2Intent>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intents: Schema.optional(Schema.Array(GoogleCloudDialogflowV2Intent)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ListIntentsResponse" });

export interface GoogleCloudDialogflowV2IntentBatch {
  intents?: ReadonlyArray<GoogleCloudDialogflowV2Intent>;
}

export const GoogleCloudDialogflowV2IntentBatch =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intents: Schema.optional(Schema.Array(GoogleCloudDialogflowV2Intent)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentBatch" });

export interface GoogleCloudDialogflowV2BatchUpdateIntentsRequest {
  intentBatchUri?: string;
  intentBatchInline?: GoogleCloudDialogflowV2IntentBatch;
  languageCode?: string;
  updateMask?: string;
  intentView?: "INTENT_VIEW_UNSPECIFIED" | "INTENT_VIEW_FULL" | (string & {});
}

export const GoogleCloudDialogflowV2BatchUpdateIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intentBatchUri: Schema.optional(Schema.String),
    intentBatchInline: Schema.optional(GoogleCloudDialogflowV2IntentBatch),
    languageCode: Schema.optional(Schema.String),
    updateMask: Schema.optional(Schema.String),
    intentView: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2BatchUpdateIntentsRequest",
  });

export interface GoogleCloudDialogflowV2BatchDeleteIntentsRequest {
  intents?: ReadonlyArray<GoogleCloudDialogflowV2Intent>;
}

export const GoogleCloudDialogflowV2BatchDeleteIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intents: Schema.optional(Schema.Array(GoogleCloudDialogflowV2Intent)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2BatchDeleteIntentsRequest",
  });

export interface GoogleCloudDialogflowV2EntityTypeEntity {
  value?: string;
  synonyms?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2EntityTypeEntity =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    synonyms: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2EntityTypeEntity" });

export interface GoogleCloudDialogflowV2EntityType {
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
  entities?: ReadonlyArray<GoogleCloudDialogflowV2EntityTypeEntity>;
  enableFuzzyExtraction?: boolean;
}

export const GoogleCloudDialogflowV2EntityType =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    autoExpansionMode: Schema.optional(Schema.String),
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2EntityTypeEntity),
    ),
    enableFuzzyExtraction: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2EntityType" });

export interface GoogleCloudDialogflowV2ListEntityTypesResponse {
  entityTypes?: ReadonlyArray<GoogleCloudDialogflowV2EntityType>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2EntityType),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ListEntityTypesResponse" });

export interface GoogleCloudDialogflowV2EntityTypeBatch {
  entityTypes?: ReadonlyArray<GoogleCloudDialogflowV2EntityType>;
}

export const GoogleCloudDialogflowV2EntityTypeBatch =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2EntityType),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2EntityTypeBatch" });

export interface GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest {
  entityTypeBatchUri?: string;
  entityTypeBatchInline?: GoogleCloudDialogflowV2EntityTypeBatch;
  languageCode?: string;
  updateMask?: string;
}

export const GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypeBatchUri: Schema.optional(Schema.String),
    entityTypeBatchInline: Schema.optional(
      GoogleCloudDialogflowV2EntityTypeBatch,
    ),
    languageCode: Schema.optional(Schema.String),
    updateMask: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest",
  });

export interface GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest {
  entityTypeNames?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypeNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest",
  });

export interface GoogleCloudDialogflowV2BatchCreateEntitiesRequest {
  entities?: ReadonlyArray<GoogleCloudDialogflowV2EntityTypeEntity>;
  languageCode?: string;
}

export const GoogleCloudDialogflowV2BatchCreateEntitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2EntityTypeEntity),
    ),
    languageCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2BatchCreateEntitiesRequest",
  });

export interface GoogleCloudDialogflowV2BatchUpdateEntitiesRequest {
  entities?: ReadonlyArray<GoogleCloudDialogflowV2EntityTypeEntity>;
  languageCode?: string;
  updateMask?: string;
}

export const GoogleCloudDialogflowV2BatchUpdateEntitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2EntityTypeEntity),
    ),
    languageCode: Schema.optional(Schema.String),
    updateMask: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2BatchUpdateEntitiesRequest",
  });

export interface GoogleCloudDialogflowV2BatchDeleteEntitiesRequest {
  entityValues?: ReadonlyArray<string>;
  languageCode?: string;
}

export const GoogleCloudDialogflowV2BatchDeleteEntitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityValues: Schema.optional(Schema.Array(Schema.String)),
    languageCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2BatchDeleteEntitiesRequest",
  });

export interface GoogleCloudDialogflowV2SessionEntityType {
  name?: string;
  entityOverrideMode?:
    | "ENTITY_OVERRIDE_MODE_UNSPECIFIED"
    | "ENTITY_OVERRIDE_MODE_OVERRIDE"
    | "ENTITY_OVERRIDE_MODE_SUPPLEMENT"
    | (string & {});
  entities?: ReadonlyArray<GoogleCloudDialogflowV2EntityTypeEntity>;
}

export const GoogleCloudDialogflowV2SessionEntityType =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    entityOverrideMode: Schema.optional(Schema.String),
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2EntityTypeEntity),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SessionEntityType" });

export interface GoogleCloudDialogflowV2ListSessionEntityTypesResponse {
  sessionEntityTypes?: ReadonlyArray<GoogleCloudDialogflowV2SessionEntityType>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListSessionEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionEntityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SessionEntityType),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ListSessionEntityTypesResponse",
  });

export interface GoogleTypeLatLng {
  latitude?: number;
  longitude?: number;
}

export const GoogleTypeLatLng = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  latitude: Schema.optional(Schema.Number),
  longitude: Schema.optional(Schema.Number),
}).annotate({ identifier: "GoogleTypeLatLng" });

export interface GoogleCloudDialogflowV2SentimentAnalysisRequestConfig {
  analyzeQueryTextSentiment?: boolean;
}

export const GoogleCloudDialogflowV2SentimentAnalysisRequestConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    analyzeQueryTextSentiment: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SentimentAnalysisRequestConfig",
  });

export interface GoogleCloudDialogflowV2QueryParameters {
  timeZone?: string;
  geoLocation?: GoogleTypeLatLng;
  contexts?: ReadonlyArray<GoogleCloudDialogflowV2Context>;
  resetContexts?: boolean;
  sessionEntityTypes?: ReadonlyArray<GoogleCloudDialogflowV2SessionEntityType>;
  payload?: Record<string, unknown>;
  sentimentAnalysisRequestConfig?: GoogleCloudDialogflowV2SentimentAnalysisRequestConfig;
  webhookHeaders?: Record<string, string>;
  platform?: string;
}

export const GoogleCloudDialogflowV2QueryParameters =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timeZone: Schema.optional(Schema.String),
    geoLocation: Schema.optional(GoogleTypeLatLng),
    contexts: Schema.optional(Schema.Array(GoogleCloudDialogflowV2Context)),
    resetContexts: Schema.optional(Schema.Boolean),
    sessionEntityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SessionEntityType),
    ),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    sentimentAnalysisRequestConfig: Schema.optional(
      GoogleCloudDialogflowV2SentimentAnalysisRequestConfig,
    ),
    webhookHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    platform: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2QueryParameters" });

export interface GoogleCloudDialogflowV2SpeechContext {
  phrases?: ReadonlyArray<string>;
  boost?: number;
}

export const GoogleCloudDialogflowV2SpeechContext =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    phrases: Schema.optional(Schema.Array(Schema.String)),
    boost: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SpeechContext" });

export interface GoogleCloudDialogflowV2InputAudioConfig {
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
  languageCode?: string;
  enableWordInfo?: boolean;
  phraseHints?: ReadonlyArray<string>;
  speechContexts?: ReadonlyArray<GoogleCloudDialogflowV2SpeechContext>;
  model?: string;
  modelVariant?:
    | "SPEECH_MODEL_VARIANT_UNSPECIFIED"
    | "USE_BEST_AVAILABLE"
    | "USE_STANDARD"
    | "USE_ENHANCED"
    | (string & {});
  singleUtterance?: boolean;
  disableNoSpeechRecognizedEvent?: boolean;
  enableAutomaticPunctuation?: boolean;
  phraseSets?: ReadonlyArray<string>;
  optOutConformerModelMigration?: boolean;
}

export const GoogleCloudDialogflowV2InputAudioConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audioEncoding: Schema.optional(Schema.String),
    sampleRateHertz: Schema.optional(Schema.Number),
    languageCode: Schema.optional(Schema.String),
    enableWordInfo: Schema.optional(Schema.Boolean),
    phraseHints: Schema.optional(Schema.Array(Schema.String)),
    speechContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SpeechContext),
    ),
    model: Schema.optional(Schema.String),
    modelVariant: Schema.optional(Schema.String),
    singleUtterance: Schema.optional(Schema.Boolean),
    disableNoSpeechRecognizedEvent: Schema.optional(Schema.Boolean),
    enableAutomaticPunctuation: Schema.optional(Schema.Boolean),
    phraseSets: Schema.optional(Schema.Array(Schema.String)),
    optOutConformerModelMigration: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2InputAudioConfig" });

export interface GoogleCloudDialogflowV2TextInput {
  text?: string;
  languageCode?: string;
}

export const GoogleCloudDialogflowV2TextInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2TextInput" });

export interface GoogleCloudDialogflowV2EventInput {
  name?: string;
  parameters?: Record<string, unknown>;
  languageCode?: string;
}

export const GoogleCloudDialogflowV2EventInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2EventInput" });

export interface GoogleCloudDialogflowV2QueryInput {
  audioConfig?: GoogleCloudDialogflowV2InputAudioConfig;
  text?: GoogleCloudDialogflowV2TextInput;
  event?: GoogleCloudDialogflowV2EventInput;
}

export const GoogleCloudDialogflowV2QueryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audioConfig: Schema.optional(GoogleCloudDialogflowV2InputAudioConfig),
    text: Schema.optional(GoogleCloudDialogflowV2TextInput),
    event: Schema.optional(GoogleCloudDialogflowV2EventInput),
  }).annotate({ identifier: "GoogleCloudDialogflowV2QueryInput" });

export interface GoogleCloudDialogflowV2VoiceSelectionParams {
  name?: string;
  ssmlGender?:
    | "SSML_VOICE_GENDER_UNSPECIFIED"
    | "SSML_VOICE_GENDER_MALE"
    | "SSML_VOICE_GENDER_FEMALE"
    | "SSML_VOICE_GENDER_NEUTRAL"
    | (string & {});
}

export const GoogleCloudDialogflowV2VoiceSelectionParams =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    ssmlGender: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2VoiceSelectionParams" });

export interface GoogleCloudDialogflowV2CustomPronunciationParams {
  phrase?: string;
  phoneticEncoding?:
    | "PHONETIC_ENCODING_UNSPECIFIED"
    | "PHONETIC_ENCODING_IPA"
    | "PHONETIC_ENCODING_X_SAMPA"
    | (string & {});
  pronunciation?: string;
}

export const GoogleCloudDialogflowV2CustomPronunciationParams =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    phrase: Schema.optional(Schema.String),
    phoneticEncoding: Schema.optional(Schema.String),
    pronunciation: Schema.optional(Schema.String),
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

export const GoogleCloudDialogflowV2SynthesizeSpeechConfig =
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
  sampleRateHertz?: number;
  synthesizeSpeechConfig?: GoogleCloudDialogflowV2SynthesizeSpeechConfig;
}

export const GoogleCloudDialogflowV2OutputAudioConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audioEncoding: Schema.optional(Schema.String),
    sampleRateHertz: Schema.optional(Schema.Number),
    synthesizeSpeechConfig: Schema.optional(
      GoogleCloudDialogflowV2SynthesizeSpeechConfig,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2OutputAudioConfig" });

export interface GoogleCloudDialogflowV2DetectIntentRequest {
  queryParams?: GoogleCloudDialogflowV2QueryParameters;
  queryInput?: GoogleCloudDialogflowV2QueryInput;
  outputAudioConfig?: GoogleCloudDialogflowV2OutputAudioConfig;
  outputAudioConfigMask?: string;
  inputAudio?: string;
}

export const GoogleCloudDialogflowV2DetectIntentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryParams: Schema.optional(GoogleCloudDialogflowV2QueryParameters),
    queryInput: Schema.optional(GoogleCloudDialogflowV2QueryInput),
    outputAudioConfig: Schema.optional(
      GoogleCloudDialogflowV2OutputAudioConfig,
    ),
    outputAudioConfigMask: Schema.optional(Schema.String),
    inputAudio: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2DetectIntentRequest" });

export interface GoogleCloudDialogflowV2Sentiment {
  score?: number;
  magnitude?: number;
}

export const GoogleCloudDialogflowV2Sentiment =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.Number),
    magnitude: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Sentiment" });

export interface GoogleCloudDialogflowV2SentimentAnalysisResult {
  queryTextSentiment?: GoogleCloudDialogflowV2Sentiment;
}

export const GoogleCloudDialogflowV2SentimentAnalysisResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryTextSentiment: Schema.optional(GoogleCloudDialogflowV2Sentiment),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SentimentAnalysisResult" });

export interface GoogleCloudDialogflowV2QueryResult {
  queryText?: string;
  languageCode?: string;
  speechRecognitionConfidence?: number;
  action?: string;
  parameters?: Record<string, unknown>;
  allRequiredParamsPresent?: boolean;
  cancelsSlotFilling?: boolean;
  fulfillmentText?: string;
  fulfillmentMessages?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessage>;
  webhookSource?: string;
  webhookPayload?: Record<string, unknown>;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2Context>;
  intent?: GoogleCloudDialogflowV2Intent;
  intentDetectionConfidence?: number;
  diagnosticInfo?: Record<string, unknown>;
  sentimentAnalysisResult?: GoogleCloudDialogflowV2SentimentAnalysisResult;
}

export const GoogleCloudDialogflowV2QueryResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryText: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    speechRecognitionConfidence: Schema.optional(Schema.Number),
    action: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    allRequiredParamsPresent: Schema.optional(Schema.Boolean),
    cancelsSlotFilling: Schema.optional(Schema.Boolean),
    fulfillmentText: Schema.optional(Schema.String),
    fulfillmentMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessage),
    ),
    webhookSource: Schema.optional(Schema.String),
    webhookPayload: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2Context),
    ),
    intent: Schema.optional(GoogleCloudDialogflowV2Intent),
    intentDetectionConfidence: Schema.optional(Schema.Number),
    diagnosticInfo: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    sentimentAnalysisResult: Schema.optional(
      GoogleCloudDialogflowV2SentimentAnalysisResult,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2QueryResult" });

export interface GoogleCloudDialogflowV2DetectIntentResponse {
  responseId?: string;
  queryResult?: GoogleCloudDialogflowV2QueryResult;
  webhookStatus?: GoogleRpcStatus;
  outputAudio?: string;
  outputAudioConfig?: GoogleCloudDialogflowV2OutputAudioConfig;
}

export const GoogleCloudDialogflowV2DetectIntentResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responseId: Schema.optional(Schema.String),
    queryResult: Schema.optional(GoogleCloudDialogflowV2QueryResult),
    webhookStatus: Schema.optional(GoogleRpcStatus),
    outputAudio: Schema.optional(Schema.String),
    outputAudioConfig: Schema.optional(
      GoogleCloudDialogflowV2OutputAudioConfig,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2DetectIntentResponse" });

export interface GoogleCloudDialogflowV2Participant {
  name?: string;
  role?:
    | "ROLE_UNSPECIFIED"
    | "HUMAN_AGENT"
    | "AUTOMATED_AGENT"
    | "END_USER"
    | (string & {});
  sipRecordingMediaLabel?: string;
  obfuscatedExternalUserId?: string;
  documentsMetadataFilters?: Record<string, string>;
  agentDesktopSource?:
    | "AGENT_DESKTOP_SOURCE_UNSPECIFIED"
    | "LIVE_PERSON"
    | "GENESYS_CLOUD"
    | "TWILIO"
    | "SALESFORCE"
    | "OTHER"
    | (string & {});
}

export const GoogleCloudDialogflowV2Participant =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    role: Schema.optional(Schema.String),
    sipRecordingMediaLabel: Schema.optional(Schema.String),
    obfuscatedExternalUserId: Schema.optional(Schema.String),
    documentsMetadataFilters: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    agentDesktopSource: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Participant" });

export interface GoogleCloudDialogflowV2ListParticipantsResponse {
  participants?: ReadonlyArray<GoogleCloudDialogflowV2Participant>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListParticipantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    participants: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2Participant),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ListParticipantsResponse",
  });

export interface GoogleCloudDialogflowV2AudioInput {
  config?: GoogleCloudDialogflowV2InputAudioConfig;
  audio?: string;
}

export const GoogleCloudDialogflowV2AudioInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    config: Schema.optional(GoogleCloudDialogflowV2InputAudioConfig),
    audio: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2AudioInput" });

export interface GoogleCloudDialogflowV2SuggestionInput {
  answerRecord?: string;
  parameters?: Record<string, unknown>;
  action?:
    | "ACTION_UNSPECIFIED"
    | "CANCEL"
    | "REVISE"
    | "CONFIRM"
    | (string & {});
  sendTime?: string;
}

export const GoogleCloudDialogflowV2SuggestionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answerRecord: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    action: Schema.optional(Schema.String),
    sendTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SuggestionInput" });

export interface GoogleCloudDialogflowV2AssistQueryParameters {
  documentsMetadataFilters?: Record<string, string>;
}

export const GoogleCloudDialogflowV2AssistQueryParameters =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    documentsMetadataFilters: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2AssistQueryParameters" });

export interface GoogleCloudDialogflowV2AnalyzeContentRequest {
  textInput?: GoogleCloudDialogflowV2TextInput;
  audioInput?: GoogleCloudDialogflowV2AudioInput;
  eventInput?: GoogleCloudDialogflowV2EventInput;
  suggestionInput?: GoogleCloudDialogflowV2SuggestionInput;
  replyAudioConfig?: GoogleCloudDialogflowV2OutputAudioConfig;
  queryParams?: GoogleCloudDialogflowV2QueryParameters;
  assistQueryParams?: GoogleCloudDialogflowV2AssistQueryParameters;
  cxParameters?: Record<string, unknown>;
  requestId?: string;
}

export const GoogleCloudDialogflowV2AnalyzeContentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    textInput: Schema.optional(GoogleCloudDialogflowV2TextInput),
    audioInput: Schema.optional(GoogleCloudDialogflowV2AudioInput),
    eventInput: Schema.optional(GoogleCloudDialogflowV2EventInput),
    suggestionInput: Schema.optional(GoogleCloudDialogflowV2SuggestionInput),
    replyAudioConfig: Schema.optional(GoogleCloudDialogflowV2OutputAudioConfig),
    queryParams: Schema.optional(GoogleCloudDialogflowV2QueryParameters),
    assistQueryParams: Schema.optional(
      GoogleCloudDialogflowV2AssistQueryParameters,
    ),
    cxParameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2AnalyzeContentRequest" });

export interface GoogleCloudDialogflowV2OutputAudio {
  config?: GoogleCloudDialogflowV2OutputAudioConfig;
  audio?: string;
}

export const GoogleCloudDialogflowV2OutputAudio =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    config: Schema.optional(GoogleCloudDialogflowV2OutputAudioConfig),
    audio: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2OutputAudio" });

export interface GoogleCloudDialogflowV2AutomatedAgentReply {
  detectIntentResponse?: GoogleCloudDialogflowV2DetectIntentResponse;
  automatedAgentReplyType?:
    | "AUTOMATED_AGENT_REPLY_TYPE_UNSPECIFIED"
    | "PARTIAL"
    | "FINAL"
    | (string & {});
  allowCancellation?: boolean;
  cxCurrentPage?: string;
}

export const GoogleCloudDialogflowV2AutomatedAgentReply =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detectIntentResponse: Schema.optional(
      GoogleCloudDialogflowV2DetectIntentResponse,
    ),
    automatedAgentReplyType: Schema.optional(Schema.String),
    allowCancellation: Schema.optional(Schema.Boolean),
    cxCurrentPage: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2AutomatedAgentReply" });

export interface GoogleCloudDialogflowV2AnnotatedMessagePart {
  text?: string;
  entityType?: string;
  formattedValue?: unknown;
}

export const GoogleCloudDialogflowV2AnnotatedMessagePart =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    entityType: Schema.optional(Schema.String),
    formattedValue: Schema.optional(Schema.Unknown),
  }).annotate({ identifier: "GoogleCloudDialogflowV2AnnotatedMessagePart" });

export interface GoogleCloudDialogflowV2MessageAnnotation {
  parts?: ReadonlyArray<GoogleCloudDialogflowV2AnnotatedMessagePart>;
  containEntities?: boolean;
}

export const GoogleCloudDialogflowV2MessageAnnotation =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2AnnotatedMessagePart),
    ),
    containEntities: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2MessageAnnotation" });

export interface GoogleCloudDialogflowV2Message {
  name?: string;
  content?: string;
  languageCode?: string;
  participant?: string;
  participantRole?:
    | "ROLE_UNSPECIFIED"
    | "HUMAN_AGENT"
    | "AUTOMATED_AGENT"
    | "END_USER"
    | (string & {});
  createTime?: string;
  sendTime?: string;
  messageAnnotation?: GoogleCloudDialogflowV2MessageAnnotation;
  sentimentAnalysis?: GoogleCloudDialogflowV2SentimentAnalysisResult;
}

export const GoogleCloudDialogflowV2Message =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    participant: Schema.optional(Schema.String),
    participantRole: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    sendTime: Schema.optional(Schema.String),
    messageAnnotation: Schema.optional(
      GoogleCloudDialogflowV2MessageAnnotation,
    ),
    sentimentAnalysis: Schema.optional(
      GoogleCloudDialogflowV2SentimentAnalysisResult,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Message" });

export interface GoogleCloudDialogflowV2ArticleAnswer {
  title?: string;
  uri?: string;
  snippets?: ReadonlyArray<string>;
  confidence?: number;
  metadata?: Record<string, string>;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2ArticleAnswer =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    snippets: Schema.optional(Schema.Array(Schema.String)),
    confidence: Schema.optional(Schema.Number),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ArticleAnswer" });

export interface GoogleCloudDialogflowV2SuggestArticlesResponse {
  articleAnswers?: ReadonlyArray<GoogleCloudDialogflowV2ArticleAnswer>;
  latestMessage?: string;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2SuggestArticlesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    articleAnswers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2ArticleAnswer),
    ),
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SuggestArticlesResponse" });

export interface GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery {
  queryText?: string;
}

export const GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryText: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery",
  });

export interface GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerFaqSource {
  question?: string;
}

export const GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerFaqSource =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    question: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerFaqSource",
  });

export interface GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet {
  uri?: string;
  text?: string;
  title?: string;
  metadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet =
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

export const GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource =
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

export interface GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswer {
  answerText?: string;
  faqSource?: GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerFaqSource;
  generativeSource?: GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource;
}

export const GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswer =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export interface GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior {
  answerGenerationRewriterOn?: boolean;
  endUserMetadataIncluded?: boolean;
  returnQueryOnly?: boolean;
  usePubsubDelivery?: boolean;
  disableSyncDelivery?: boolean;
  previousQueriesIncluded?: boolean;
  useTranslatedMessage?: boolean;
  useCustomSafetyFilterLevel?: boolean;
  conversationTranscriptHasMixedLanguages?: boolean;
  queryGenerationAgentLanguageMismatch?: boolean;
  queryGenerationEndUserLanguageMismatch?: boolean;
  thirdPartyConnectorAllowed?: boolean;
  multipleQueriesGenerated?: boolean;
  queryContainedSearchContext?: boolean;
  invalidItemsQuerySuggestionSkipped?: boolean;
  primaryQueryRedactedAndReplaced?: boolean;
  appendedSearchContextCount?: number;
}

export const GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answerGenerationRewriterOn: Schema.optional(Schema.Boolean),
    endUserMetadataIncluded: Schema.optional(Schema.Boolean),
    returnQueryOnly: Schema.optional(Schema.Boolean),
    usePubsubDelivery: Schema.optional(Schema.Boolean),
    disableSyncDelivery: Schema.optional(Schema.Boolean),
    previousQueriesIncluded: Schema.optional(Schema.Boolean),
    useTranslatedMessage: Schema.optional(Schema.Boolean),
    useCustomSafetyFilterLevel: Schema.optional(Schema.Boolean),
    conversationTranscriptHasMixedLanguages: Schema.optional(Schema.Boolean),
    queryGenerationAgentLanguageMismatch: Schema.optional(Schema.Boolean),
    queryGenerationEndUserLanguageMismatch: Schema.optional(Schema.Boolean),
    thirdPartyConnectorAllowed: Schema.optional(Schema.Boolean),
    multipleQueriesGenerated: Schema.optional(Schema.Boolean),
    queryContainedSearchContext: Schema.optional(Schema.Boolean),
    invalidItemsQuerySuggestionSkipped: Schema.optional(Schema.Boolean),
    primaryQueryRedactedAndReplaced: Schema.optional(Schema.Boolean),
    appendedSearchContextCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior",
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

export const GoogleCloudDialogflowV2IngestedContextReferenceDebugInfoIngestedParameterDebugInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameter: Schema.optional(Schema.String),
    ingestionStatus: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2IngestedContextReferenceDebugInfoIngestedParameterDebugInfo",
  });

export interface GoogleCloudDialogflowV2IngestedContextReferenceDebugInfo {
  projectNotAllowlisted?: boolean;
  contextReferenceRetrieved?: boolean;
  ingestedParametersDebugInfo?: ReadonlyArray<GoogleCloudDialogflowV2IngestedContextReferenceDebugInfoIngestedParameterDebugInfo>;
}

export const GoogleCloudDialogflowV2IngestedContextReferenceDebugInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectNotAllowlisted: Schema.optional(Schema.Boolean),
    contextReferenceRetrieved: Schema.optional(Schema.Boolean),
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
  latencyMs?: number;
  startTime?: string;
  completeTime?: string;
}

export const GoogleCloudDialogflowV2ServiceLatencyInternalServiceLatency =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    step: Schema.optional(Schema.String),
    latencyMs: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    completeTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ServiceLatencyInternalServiceLatency",
  });

export interface GoogleCloudDialogflowV2ServiceLatency {
  internalServiceLatencies?: ReadonlyArray<GoogleCloudDialogflowV2ServiceLatencyInternalServiceLatency>;
}

export const GoogleCloudDialogflowV2ServiceLatency =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    internalServiceLatencies: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2ServiceLatencyInternalServiceLatency),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ServiceLatency" });

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
  ingestedContextReferenceDebugInfo?: GoogleCloudDialogflowV2IngestedContextReferenceDebugInfo;
  serviceLatency?: GoogleCloudDialogflowV2ServiceLatency;
}

export const GoogleCloudDialogflowV2KnowledgeAssistDebugInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryGenerationFailureReason: Schema.optional(Schema.String),
    queryCategorizationFailureReason: Schema.optional(Schema.String),
    datastoreResponseReason: Schema.optional(Schema.String),
    knowledgeAssistBehavior: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistDebugInfoKnowledgeAssistBehavior,
    ),
    ingestedContextReferenceDebugInfo: Schema.optional(
      GoogleCloudDialogflowV2IngestedContextReferenceDebugInfo,
    ),
    serviceLatency: Schema.optional(GoogleCloudDialogflowV2ServiceLatency),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2KnowledgeAssistDebugInfo",
  });

export interface GoogleCloudDialogflowV2KnowledgeAssistAnswer {
  suggestedQuery?: GoogleCloudDialogflowV2KnowledgeAssistAnswerSuggestedQuery;
  suggestedQueryAnswer?: GoogleCloudDialogflowV2KnowledgeAssistAnswerKnowledgeAnswer;
  answerRecord?: string;
  knowledgeAssistDebugInfo?: GoogleCloudDialogflowV2KnowledgeAssistDebugInfo;
}

export const GoogleCloudDialogflowV2KnowledgeAssistAnswer =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export interface GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse {
  knowledgeAssistAnswer?: GoogleCloudDialogflowV2KnowledgeAssistAnswer;
  latestMessage?: string;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    knowledgeAssistAnswer: Schema.optional(
      GoogleCloudDialogflowV2KnowledgeAssistAnswer,
    ),
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse",
  });

export interface GoogleCloudDialogflowV2FaqAnswer {
  answer?: string;
  confidence?: number;
  question?: string;
  source?: string;
  metadata?: Record<string, string>;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2FaqAnswer =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answer: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
    question: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2FaqAnswer" });

export interface GoogleCloudDialogflowV2SuggestFaqAnswersResponse {
  faqAnswers?: ReadonlyArray<GoogleCloudDialogflowV2FaqAnswer>;
  latestMessage?: string;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2SuggestFaqAnswersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    faqAnswers: Schema.optional(Schema.Array(GoogleCloudDialogflowV2FaqAnswer)),
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SuggestFaqAnswersResponse",
  });

export interface GoogleCloudDialogflowV2SmartReplyAnswer {
  reply?: string;
  confidence?: number;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2SmartReplyAnswer =
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

export const GoogleCloudDialogflowV2SuggestSmartRepliesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    smartReplyAnswers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SmartReplyAnswer),
    ),
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SuggestSmartRepliesResponse",
  });

export interface GoogleCloudDialogflowV2GenerateSuggestionsResponseGeneratorSuggestionAnswer {
  generatorSuggestion?: GoogleCloudDialogflowV2GeneratorSuggestion;
  sourceGenerator?: string;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2GenerateSuggestionsResponseGeneratorSuggestionAnswer =
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

export const GoogleCloudDialogflowV2GenerateSuggestionsResponse =
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

export interface GoogleCloudDialogflowV2SuggestionResult {
  error?: GoogleRpcStatus;
  suggestArticlesResponse?: GoogleCloudDialogflowV2SuggestArticlesResponse;
  suggestKnowledgeAssistResponse?: GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse;
  suggestFaqAnswersResponse?: GoogleCloudDialogflowV2SuggestFaqAnswersResponse;
  suggestSmartRepliesResponse?: GoogleCloudDialogflowV2SuggestSmartRepliesResponse;
  generateSuggestionsResponse?: GoogleCloudDialogflowV2GenerateSuggestionsResponse;
}

export const GoogleCloudDialogflowV2SuggestionResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    error: Schema.optional(GoogleRpcStatus),
    suggestArticlesResponse: Schema.optional(
      GoogleCloudDialogflowV2SuggestArticlesResponse,
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
    generateSuggestionsResponse: Schema.optional(
      GoogleCloudDialogflowV2GenerateSuggestionsResponse,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SuggestionResult" });

export interface GoogleCloudDialogflowV2DtmfParameters {
  acceptsDtmfInput?: boolean;
}

export const GoogleCloudDialogflowV2DtmfParameters =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acceptsDtmfInput: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2DtmfParameters" });

export interface GoogleCloudDialogflowV2AnalyzeContentResponse {
  replyText?: string;
  replyAudio?: GoogleCloudDialogflowV2OutputAudio;
  automatedAgentReply?: GoogleCloudDialogflowV2AutomatedAgentReply;
  message?: GoogleCloudDialogflowV2Message;
  humanAgentSuggestionResults?: ReadonlyArray<GoogleCloudDialogflowV2SuggestionResult>;
  endUserSuggestionResults?: ReadonlyArray<GoogleCloudDialogflowV2SuggestionResult>;
  dtmfParameters?: GoogleCloudDialogflowV2DtmfParameters;
}

export const GoogleCloudDialogflowV2AnalyzeContentResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    replyText: Schema.optional(Schema.String),
    replyAudio: Schema.optional(GoogleCloudDialogflowV2OutputAudio),
    automatedAgentReply: Schema.optional(
      GoogleCloudDialogflowV2AutomatedAgentReply,
    ),
    message: Schema.optional(GoogleCloudDialogflowV2Message),
    humanAgentSuggestionResults: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SuggestionResult),
    ),
    endUserSuggestionResults: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SuggestionResult),
    ),
    dtmfParameters: Schema.optional(GoogleCloudDialogflowV2DtmfParameters),
  }).annotate({ identifier: "GoogleCloudDialogflowV2AnalyzeContentResponse" });

export interface GoogleCloudDialogflowV2SuggestArticlesRequest {
  latestMessage?: string;
  contextSize?: number;
  assistQueryParams?: GoogleCloudDialogflowV2AssistQueryParameters;
}

export const GoogleCloudDialogflowV2SuggestArticlesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
    assistQueryParams: Schema.optional(
      GoogleCloudDialogflowV2AssistQueryParameters,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SuggestArticlesRequest" });

export interface GoogleCloudDialogflowV2SuggestFaqAnswersRequest {
  latestMessage?: string;
  contextSize?: number;
  assistQueryParams?: GoogleCloudDialogflowV2AssistQueryParameters;
}

export const GoogleCloudDialogflowV2SuggestFaqAnswersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
    assistQueryParams: Schema.optional(
      GoogleCloudDialogflowV2AssistQueryParameters,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SuggestFaqAnswersRequest",
  });

export interface GoogleCloudDialogflowV2SuggestSmartRepliesRequest {
  currentTextInput?: GoogleCloudDialogflowV2TextInput;
  latestMessage?: string;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2SuggestSmartRepliesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currentTextInput: Schema.optional(GoogleCloudDialogflowV2TextInput),
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SuggestSmartRepliesRequest",
  });

export interface GoogleCloudDialogflowV2SuggestKnowledgeAssistRequest {
  latestMessage?: string;
  contextSize?: number;
  previousSuggestedQuery?: string;
}

export const GoogleCloudDialogflowV2SuggestKnowledgeAssistRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
    previousSuggestedQuery: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SuggestKnowledgeAssistRequest",
  });

export interface GoogleCloudDialogflowV2AgentAssistantFeedbackSummarizationFeedback {
  startTime?: string;
  submitTime?: string;
  summaryText?: string;
  textSections?: Record<string, string>;
}

export const GoogleCloudDialogflowV2AgentAssistantFeedbackSummarizationFeedback =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    submitTime: Schema.optional(Schema.String),
    summaryText: Schema.optional(Schema.String),
    textSections: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2AgentAssistantFeedbackSummarizationFeedback",
  });

export interface GoogleCloudDialogflowV2AgentAssistantFeedbackKnowledgeSearchFeedback {
  answerCopied?: boolean;
  clickedUris?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2AgentAssistantFeedbackKnowledgeSearchFeedback =
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

export const GoogleCloudDialogflowV2AgentAssistantFeedbackKnowledgeAssistFeedback =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answerCopied: Schema.optional(Schema.Boolean),
    clickedUris: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2AgentAssistantFeedbackKnowledgeAssistFeedback",
  });

export interface GoogleCloudDialogflowV2AgentAssistantFeedback {
  answerRelevance?:
    | "ANSWER_RELEVANCE_UNSPECIFIED"
    | "IRRELEVANT"
    | "RELEVANT"
    | (string & {});
  documentCorrectness?:
    | "DOCUMENT_CORRECTNESS_UNSPECIFIED"
    | "INCORRECT"
    | "CORRECT"
    | (string & {});
  documentEfficiency?:
    | "DOCUMENT_EFFICIENCY_UNSPECIFIED"
    | "INEFFICIENT"
    | "EFFICIENT"
    | (string & {});
  summarizationFeedback?: GoogleCloudDialogflowV2AgentAssistantFeedbackSummarizationFeedback;
  knowledgeSearchFeedback?: GoogleCloudDialogflowV2AgentAssistantFeedbackKnowledgeSearchFeedback;
  knowledgeAssistFeedback?: GoogleCloudDialogflowV2AgentAssistantFeedbackKnowledgeAssistFeedback;
}

export const GoogleCloudDialogflowV2AgentAssistantFeedback =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answerRelevance: Schema.optional(Schema.String),
    documentCorrectness: Schema.optional(Schema.String),
    documentEfficiency: Schema.optional(Schema.String),
    summarizationFeedback: Schema.optional(
      GoogleCloudDialogflowV2AgentAssistantFeedbackSummarizationFeedback,
    ),
    knowledgeSearchFeedback: Schema.optional(
      GoogleCloudDialogflowV2AgentAssistantFeedbackKnowledgeSearchFeedback,
    ),
    knowledgeAssistFeedback: Schema.optional(
      GoogleCloudDialogflowV2AgentAssistantFeedbackKnowledgeAssistFeedback,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2AgentAssistantFeedback" });

export interface GoogleCloudDialogflowV2AnswerFeedback {
  correctnessLevel?:
    | "CORRECTNESS_LEVEL_UNSPECIFIED"
    | "NOT_CORRECT"
    | "PARTIALLY_CORRECT"
    | "FULLY_CORRECT"
    | (string & {});
  agentAssistantDetailFeedback?: GoogleCloudDialogflowV2AgentAssistantFeedback;
  clicked?: boolean;
  clickTime?: string;
  displayed?: boolean;
  displayTime?: string;
}

export const GoogleCloudDialogflowV2AnswerFeedback =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    correctnessLevel: Schema.optional(Schema.String),
    agentAssistantDetailFeedback: Schema.optional(
      GoogleCloudDialogflowV2AgentAssistantFeedback,
    ),
    clicked: Schema.optional(Schema.Boolean),
    clickTime: Schema.optional(Schema.String),
    displayed: Schema.optional(Schema.Boolean),
    displayTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2AnswerFeedback" });

export interface GoogleCloudDialogflowV2IntentSuggestion {
  displayName?: string;
  intentV2?: string;
  description?: string;
}

export const GoogleCloudDialogflowV2IntentSuggestion =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    intentV2: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2IntentSuggestion" });

export interface GoogleCloudDialogflowV2DialogflowAssistAnswer {
  queryResult?: GoogleCloudDialogflowV2QueryResult;
  intentSuggestion?: GoogleCloudDialogflowV2IntentSuggestion;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2DialogflowAssistAnswer =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryResult: Schema.optional(GoogleCloudDialogflowV2QueryResult),
    intentSuggestion: Schema.optional(GoogleCloudDialogflowV2IntentSuggestion),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2DialogflowAssistAnswer" });

export interface GoogleCloudDialogflowV2AgentAssistantRecord {
  articleSuggestionAnswer?: GoogleCloudDialogflowV2ArticleAnswer;
  faqAnswer?: GoogleCloudDialogflowV2FaqAnswer;
  dialogflowAssistAnswer?: GoogleCloudDialogflowV2DialogflowAssistAnswer;
  generatorSuggestion?: GoogleCloudDialogflowV2GeneratorSuggestion;
}

export const GoogleCloudDialogflowV2AgentAssistantRecord =
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

export interface GoogleCloudDialogflowV2AnswerRecord {
  name?: string;
  answerFeedback?: GoogleCloudDialogflowV2AnswerFeedback;
  agentAssistantRecord?: GoogleCloudDialogflowV2AgentAssistantRecord;
}

export const GoogleCloudDialogflowV2AnswerRecord =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    answerFeedback: Schema.optional(GoogleCloudDialogflowV2AnswerFeedback),
    agentAssistantRecord: Schema.optional(
      GoogleCloudDialogflowV2AgentAssistantRecord,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2AnswerRecord" });

export interface GoogleCloudDialogflowV2ListAnswerRecordsResponse {
  answerRecords?: ReadonlyArray<GoogleCloudDialogflowV2AnswerRecord>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListAnswerRecordsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answerRecords: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2AnswerRecord),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ListAnswerRecordsResponse",
  });

export interface GoogleCloudDialogflowV2GcsSources {
  uris?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2GcsSources =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uris: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2GcsSources" });

export interface GoogleCloudDialogflowV2InputConfig {
  gcsSource?: GoogleCloudDialogflowV2GcsSources;
}

export const GoogleCloudDialogflowV2InputConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsSource: Schema.optional(GoogleCloudDialogflowV2GcsSources),
  }).annotate({ identifier: "GoogleCloudDialogflowV2InputConfig" });

export interface GoogleCloudDialogflowV2ConversationInfo {
  languageCode?: string;
}

export const GoogleCloudDialogflowV2ConversationInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ConversationInfo" });

export interface GoogleCloudDialogflowV2ConversationDataset {
  name?: string;
  displayName?: string;
  description?: string;
  createTime?: string;
  inputConfig?: GoogleCloudDialogflowV2InputConfig;
  conversationInfo?: GoogleCloudDialogflowV2ConversationInfo;
  conversationCount?: string;
  satisfiesPzi?: boolean;
  satisfiesPzs?: boolean;
}

export const GoogleCloudDialogflowV2ConversationDataset =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    inputConfig: Schema.optional(GoogleCloudDialogflowV2InputConfig),
    conversationInfo: Schema.optional(GoogleCloudDialogflowV2ConversationInfo),
    conversationCount: Schema.optional(Schema.String),
    satisfiesPzi: Schema.optional(Schema.Boolean),
    satisfiesPzs: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ConversationDataset" });

export interface GoogleCloudDialogflowV2ListConversationDatasetsResponse {
  conversationDatasets?: ReadonlyArray<GoogleCloudDialogflowV2ConversationDataset>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListConversationDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationDatasets: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2ConversationDataset),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ListConversationDatasetsResponse",
  });

export interface GoogleCloudDialogflowV2ImportConversationDataRequest {
  inputConfig?: GoogleCloudDialogflowV2InputConfig;
}

export const GoogleCloudDialogflowV2ImportConversationDataRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputConfig: Schema.optional(GoogleCloudDialogflowV2InputConfig),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ImportConversationDataRequest",
  });

export interface GoogleCloudDialogflowV2InputDataset {
  dataset?: string;
}

export const GoogleCloudDialogflowV2InputDataset =
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

export const GoogleCloudDialogflowV2ArticleSuggestionModelMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trainingModelType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ArticleSuggestionModelMetadata",
  });

export interface GoogleCloudDialogflowV2SmartReplyModelMetadata {
  trainingModelType?:
    | "MODEL_TYPE_UNSPECIFIED"
    | "SMART_REPLY_DUAL_ENCODER_MODEL"
    | "SMART_REPLY_BERT_MODEL"
    | (string & {});
}

export const GoogleCloudDialogflowV2SmartReplyModelMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trainingModelType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SmartReplyModelMetadata" });

export interface GoogleCloudDialogflowV2ConversationModel {
  name?: string;
  displayName?: string;
  createTime?: string;
  datasets?: ReadonlyArray<GoogleCloudDialogflowV2InputDataset>;
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
  articleSuggestionModelMetadata?: GoogleCloudDialogflowV2ArticleSuggestionModelMetadata;
  smartReplyModelMetadata?: GoogleCloudDialogflowV2SmartReplyModelMetadata;
  satisfiesPzs?: boolean;
  satisfiesPzi?: boolean;
}

export const GoogleCloudDialogflowV2ConversationModel =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    datasets: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2InputDataset),
    ),
    state: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    articleSuggestionModelMetadata: Schema.optional(
      GoogleCloudDialogflowV2ArticleSuggestionModelMetadata,
    ),
    smartReplyModelMetadata: Schema.optional(
      GoogleCloudDialogflowV2SmartReplyModelMetadata,
    ),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    satisfiesPzi: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ConversationModel" });

export interface GoogleCloudDialogflowV2ListConversationModelsResponse {
  conversationModels?: ReadonlyArray<GoogleCloudDialogflowV2ConversationModel>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListConversationModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationModels: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2ConversationModel),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ListConversationModelsResponse",
  });

export interface GoogleCloudDialogflowV2DeployConversationModelRequest {}

export const GoogleCloudDialogflowV2DeployConversationModelRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowV2DeployConversationModelRequest",
  });

export interface GoogleCloudDialogflowV2UndeployConversationModelRequest {}

export const GoogleCloudDialogflowV2UndeployConversationModelRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowV2UndeployConversationModelRequest",
  });

export interface GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig {
  allowlistDocument?: string;
  maxResultCount?: number;
}

export const GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowlistDocument: Schema.optional(Schema.String),
    maxResultCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig",
  });

export interface GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig {
  allowlistDocument?: string;
  maxResultCount?: number;
}

export const GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowlistDocument: Schema.optional(Schema.String),
    maxResultCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig",
  });

export interface GoogleCloudDialogflowV2EvaluationConfig {
  datasets?: ReadonlyArray<GoogleCloudDialogflowV2InputDataset>;
  smartReplyConfig?: GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig;
  smartComposeConfig?: GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig;
}

export const GoogleCloudDialogflowV2EvaluationConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datasets: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2InputDataset),
    ),
    smartReplyConfig: Schema.optional(
      GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig,
    ),
    smartComposeConfig: Schema.optional(
      GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2EvaluationConfig" });

export interface GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics {
  n?: number;
  recall?: number;
}

export const GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    n: Schema.optional(Schema.Number),
    recall: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics",
  });

export interface GoogleCloudDialogflowV2SmartReplyMetrics {
  allowlistCoverage?: number;
  topNMetrics?: ReadonlyArray<GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics>;
  conversationCount?: string;
}

export const GoogleCloudDialogflowV2SmartReplyMetrics =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowlistCoverage: Schema.optional(Schema.Number),
    topNMetrics: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics),
    ),
    conversationCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SmartReplyMetrics" });

export interface GoogleCloudDialogflowV2ConversationModelEvaluation {
  name?: string;
  displayName?: string;
  evaluationConfig?: GoogleCloudDialogflowV2EvaluationConfig;
  createTime?: string;
  smartReplyMetrics?: GoogleCloudDialogflowV2SmartReplyMetrics;
  rawHumanEvalTemplateCsv?: string;
}

export const GoogleCloudDialogflowV2ConversationModelEvaluation =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    evaluationConfig: Schema.optional(GoogleCloudDialogflowV2EvaluationConfig),
    createTime: Schema.optional(Schema.String),
    smartReplyMetrics: Schema.optional(
      GoogleCloudDialogflowV2SmartReplyMetrics,
    ),
    rawHumanEvalTemplateCsv: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ConversationModelEvaluation",
  });

export interface GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse {
  conversationModelEvaluations?: ReadonlyArray<GoogleCloudDialogflowV2ConversationModelEvaluation>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationModelEvaluations: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2ConversationModelEvaluation),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse",
  });

export interface GoogleCloudDialogflowV2CreateConversationModelEvaluationRequest {
  conversationModelEvaluation?: GoogleCloudDialogflowV2ConversationModelEvaluation;
}

export const GoogleCloudDialogflowV2CreateConversationModelEvaluationRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationModelEvaluation: Schema.optional(
      GoogleCloudDialogflowV2ConversationModelEvaluation,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2CreateConversationModelEvaluationRequest",
  });

export interface GoogleCloudDialogflowV2AutomatedAgentConfig {
  agent?: string;
  sessionTtl?: string;
}

export const GoogleCloudDialogflowV2AutomatedAgentConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agent: Schema.optional(Schema.String),
    sessionTtl: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2AutomatedAgentConfig" });

export interface GoogleCloudDialogflowV2NotificationConfig {
  topic?: string;
  messageFormat?:
    | "MESSAGE_FORMAT_UNSPECIFIED"
    | "PROTO"
    | "JSON"
    | (string & {});
}

export const GoogleCloudDialogflowV2NotificationConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    topic: Schema.optional(Schema.String),
    messageFormat: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2NotificationConfig" });

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

export const GoogleCloudDialogflowV2SuggestionFeature =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SuggestionFeature" });

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

export const GoogleCloudDialogflowV2RaiSettingsRaiCategoryConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    category: Schema.optional(Schema.String),
    sensitivityLevel: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2RaiSettingsRaiCategoryConfig",
  });

export interface GoogleCloudDialogflowV2RaiSettings {
  raiCategoryConfigs?: ReadonlyArray<GoogleCloudDialogflowV2RaiSettingsRaiCategoryConfig>;
}

export const GoogleCloudDialogflowV2RaiSettings =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    raiCategoryConfigs: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2RaiSettingsRaiCategoryConfig),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2RaiSettings" });

export interface GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings {
  noSmalltalk?: boolean;
  onlyEndUser?: boolean;
}

export const GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    noSmalltalk: Schema.optional(Schema.Boolean),
    onlyEndUser: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings",
  });

export interface GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource {
  knowledgeBases?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    knowledgeBases: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource",
  });

export interface GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource {
  documents?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    documents: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource",
  });

export interface GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySourceHumanAgentSideConfig {
  agent?: string;
}

export const GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySourceHumanAgentSideConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agent: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySourceHumanAgentSideConfig",
  });

export interface GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource {
  agent?: string;
  humanAgentSideConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySourceHumanAgentSideConfig;
}

export const GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agent: Schema.optional(Schema.String),
    humanAgentSideConfig: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySourceHumanAgentSideConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource",
  });

export interface GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings {
  dropHandoffMessages?: boolean;
  dropVirtualAgentMessages?: boolean;
  dropIvrMessages?: boolean;
}

export const GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dropHandoffMessages: Schema.optional(Schema.Boolean),
    dropVirtualAgentMessages: Schema.optional(Schema.Boolean),
    dropIvrMessages: Schema.optional(Schema.Boolean),
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

export const GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigSections =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sectionTypes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigSections",
  });

export interface GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig {
  knowledgeBaseQuerySource?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource;
  documentQuerySource?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource;
  dialogflowQuerySource?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource;
  maxResults?: number;
  confidenceThreshold?: number;
  contextFilterSettings?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings;
  sections?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigSections;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    knowledgeBaseQuerySource: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource,
    ),
    documentQuerySource: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource,
    ),
    dialogflowQuerySource: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource,
    ),
    maxResults: Schema.optional(Schema.Number),
    confidenceThreshold: Schema.optional(Schema.Number),
    contextFilterSettings: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings,
    ),
    sections: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigSections,
    ),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig",
  });

export interface GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig {
  model?: string;
  baselineModelVersion?: string;
}

export const GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    model: Schema.optional(Schema.String),
    baselineModelVersion: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig",
  });

export interface GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig {
  recentSentencesCount?: number;
}

export const GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    recentSentencesCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig",
  });

export interface GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig {
  suggestionFeature?: GoogleCloudDialogflowV2SuggestionFeature;
  enableEventBasedSuggestion?: boolean;
  disableAgentQueryLogging?: boolean;
  enableQuerySuggestionWhenNoAnswer?: boolean;
  enableConversationAugmentedQuery?: boolean;
  enableQuerySuggestionOnly?: boolean;
  enableResponseDebugInfo?: boolean;
  raiSettings?: GoogleCloudDialogflowV2RaiSettings;
  suggestionTriggerSettings?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings;
  queryConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig;
  conversationModelConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig;
  conversationProcessConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig;
}

export const GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suggestionFeature: Schema.optional(
      GoogleCloudDialogflowV2SuggestionFeature,
    ),
    enableEventBasedSuggestion: Schema.optional(Schema.Boolean),
    disableAgentQueryLogging: Schema.optional(Schema.Boolean),
    enableQuerySuggestionWhenNoAnswer: Schema.optional(Schema.Boolean),
    enableConversationAugmentedQuery: Schema.optional(Schema.Boolean),
    enableQuerySuggestionOnly: Schema.optional(Schema.Boolean),
    enableResponseDebugInfo: Schema.optional(Schema.Boolean),
    raiSettings: Schema.optional(GoogleCloudDialogflowV2RaiSettings),
    suggestionTriggerSettings: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings,
    ),
    queryConfig: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig,
    ),
    conversationModelConfig: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig,
    ),
    conversationProcessConfig: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig",
  });

export interface GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig {
  featureConfigs?: ReadonlyArray<GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig>;
  groupSuggestionResponses?: boolean;
  generators?: ReadonlyArray<string>;
  disableHighLatencyFeaturesSyncDelivery?: boolean;
  skipEmptyEventBasedSuggestion?: boolean;
  useUnredactedConversationData?: boolean;
  enableAsyncToolCall?: boolean;
}

export const GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    featureConfigs: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig,
      ),
    ),
    groupSuggestionResponses: Schema.optional(Schema.Boolean),
    generators: Schema.optional(Schema.Array(Schema.String)),
    disableHighLatencyFeaturesSyncDelivery: Schema.optional(Schema.Boolean),
    skipEmptyEventBasedSuggestion: Schema.optional(Schema.Boolean),
    useUnredactedConversationData: Schema.optional(Schema.Boolean),
    enableAsyncToolCall: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig",
  });

export interface GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig {
  enableEntityExtraction?: boolean;
  enableSentimentAnalysis?: boolean;
  enableSentimentAnalysisV3?: boolean;
}

export const GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableEntityExtraction: Schema.optional(Schema.Boolean),
    enableSentimentAnalysis: Schema.optional(Schema.Boolean),
    enableSentimentAnalysisV3: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig",
  });

export interface GoogleCloudDialogflowV2HumanAgentAssistantConfig {
  notificationConfig?: GoogleCloudDialogflowV2NotificationConfig;
  humanAgentSuggestionConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig;
  endUserSuggestionConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig;
  messageAnalysisConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig;
}

export const GoogleCloudDialogflowV2HumanAgentAssistantConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notificationConfig: Schema.optional(
      GoogleCloudDialogflowV2NotificationConfig,
    ),
    humanAgentSuggestionConfig: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig,
    ),
    endUserSuggestionConfig: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig,
    ),
    messageAnalysisConfig: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2HumanAgentAssistantConfig",
  });

export interface GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig {
  accountNumber?: string;
}

export const GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountNumber: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig",
  });

export interface GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig {
  organizationId?: string;
  deploymentId?: string;
  buttonId?: string;
  endpointDomain?: string;
}

export const GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.optional(Schema.String),
    deploymentId: Schema.optional(Schema.String),
    buttonId: Schema.optional(Schema.String),
    endpointDomain: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig",
  });

export interface GoogleCloudDialogflowV2HumanAgentHandoffConfig {
  livePersonConfig?: GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig;
  salesforceLiveAgentConfig?: GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig;
}

export const GoogleCloudDialogflowV2HumanAgentHandoffConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    livePersonConfig: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig,
    ),
    salesforceLiveAgentConfig: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2HumanAgentHandoffConfig" });

export interface GoogleCloudDialogflowV2LoggingConfig {
  enableStackdriverLogging?: boolean;
}

export const GoogleCloudDialogflowV2LoggingConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableStackdriverLogging: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2LoggingConfig" });

export interface GoogleCloudDialogflowV2SpeechToTextConfig {
  speechModelVariant?:
    | "SPEECH_MODEL_VARIANT_UNSPECIFIED"
    | "USE_BEST_AVAILABLE"
    | "USE_STANDARD"
    | "USE_ENHANCED"
    | (string & {});
  model?: string;
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
  sampleRateHertz?: number;
  languageCode?: string;
  enableWordInfo?: boolean;
  useTimeoutBasedEndpointing?: boolean;
}

export const GoogleCloudDialogflowV2SpeechToTextConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    speechModelVariant: Schema.optional(Schema.String),
    model: Schema.optional(Schema.String),
    phraseSets: Schema.optional(Schema.Array(Schema.String)),
    audioEncoding: Schema.optional(Schema.String),
    sampleRateHertz: Schema.optional(Schema.Number),
    languageCode: Schema.optional(Schema.String),
    enableWordInfo: Schema.optional(Schema.Boolean),
    useTimeoutBasedEndpointing: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SpeechToTextConfig" });

export interface GoogleCloudDialogflowV2ConversationProfile {
  name?: string;
  displayName?: string;
  createTime?: string;
  updateTime?: string;
  automatedAgentConfig?: GoogleCloudDialogflowV2AutomatedAgentConfig;
  humanAgentAssistantConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfig;
  humanAgentHandoffConfig?: GoogleCloudDialogflowV2HumanAgentHandoffConfig;
  notificationConfig?: GoogleCloudDialogflowV2NotificationConfig;
  loggingConfig?: GoogleCloudDialogflowV2LoggingConfig;
  newMessageEventNotificationConfig?: GoogleCloudDialogflowV2NotificationConfig;
  newRecognitionResultNotificationConfig?: GoogleCloudDialogflowV2NotificationConfig;
  sttConfig?: GoogleCloudDialogflowV2SpeechToTextConfig;
  languageCode?: string;
  timeZone?: string;
  securitySettings?: string;
  ttsConfig?: GoogleCloudDialogflowV2SynthesizeSpeechConfig;
}

export const GoogleCloudDialogflowV2ConversationProfile =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    automatedAgentConfig: Schema.optional(
      GoogleCloudDialogflowV2AutomatedAgentConfig,
    ),
    humanAgentAssistantConfig: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentAssistantConfig,
    ),
    humanAgentHandoffConfig: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentHandoffConfig,
    ),
    notificationConfig: Schema.optional(
      GoogleCloudDialogflowV2NotificationConfig,
    ),
    loggingConfig: Schema.optional(GoogleCloudDialogflowV2LoggingConfig),
    newMessageEventNotificationConfig: Schema.optional(
      GoogleCloudDialogflowV2NotificationConfig,
    ),
    newRecognitionResultNotificationConfig: Schema.optional(
      GoogleCloudDialogflowV2NotificationConfig,
    ),
    sttConfig: Schema.optional(GoogleCloudDialogflowV2SpeechToTextConfig),
    languageCode: Schema.optional(Schema.String),
    timeZone: Schema.optional(Schema.String),
    securitySettings: Schema.optional(Schema.String),
    ttsConfig: Schema.optional(GoogleCloudDialogflowV2SynthesizeSpeechConfig),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ConversationProfile" });

export interface GoogleCloudDialogflowV2ListConversationProfilesResponse {
  conversationProfiles?: ReadonlyArray<GoogleCloudDialogflowV2ConversationProfile>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationProfiles: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2ConversationProfile),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ListConversationProfilesResponse",
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

export const GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    participantRole: Schema.optional(Schema.String),
    suggestionFeatureConfig: Schema.optional(
      GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequest",
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

export const GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    participantRole: Schema.optional(Schema.String),
    suggestionFeatureType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequest",
  });

export interface GoogleCloudDialogflowV2ConversationPhoneNumber {
  countryCode?: number;
  phoneNumber?: string;
}

export const GoogleCloudDialogflowV2ConversationPhoneNumber =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    countryCode: Schema.optional(Schema.Number),
    phoneNumber: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ConversationPhoneNumber" });

export interface GoogleCloudDialogflowV2ConversationTelephonyConnectionInfoSipHeader {
  name?: string;
  value?: string;
}

export const GoogleCloudDialogflowV2ConversationTelephonyConnectionInfoSipHeader =
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

export const GoogleCloudDialogflowV2ConversationTelephonyConnectionInfoMimeContent =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mimeType: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2ConversationTelephonyConnectionInfoMimeContent",
  });

export interface GoogleCloudDialogflowV2ConversationTelephonyConnectionInfo {
  dialedNumber?: string;
  sdp?: string;
  sipHeaders?: ReadonlyArray<GoogleCloudDialogflowV2ConversationTelephonyConnectionInfoSipHeader>;
  extraMimeContents?: ReadonlyArray<GoogleCloudDialogflowV2ConversationTelephonyConnectionInfoMimeContent>;
}

export const GoogleCloudDialogflowV2ConversationTelephonyConnectionInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dialedNumber: Schema.optional(Schema.String),
    sdp: Schema.optional(Schema.String),
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
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ConversationTelephonyConnectionInfo",
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

export const GoogleCloudDialogflowV2ConversationContextReferenceContextContent =
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
  contextContents?: ReadonlyArray<GoogleCloudDialogflowV2ConversationContextReferenceContextContent>;
  updateMode?:
    | "UPDATE_MODE_UNSPECIFIED"
    | "APPEND"
    | "OVERWRITE"
    | (string & {});
  languageCode?: string;
  createTime?: string;
}

export const GoogleCloudDialogflowV2ConversationContextReference =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contextContents: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2ConversationContextReferenceContextContent,
      ),
    ),
    updateMode: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ConversationContextReference",
  });

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

export const GoogleCloudDialogflowV2ConversationGeneratorContext =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generatorType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ConversationGeneratorContext",
  });

export interface GoogleCloudDialogflowV2Conversation {
  name?: string;
  lifecycleState?:
    | "LIFECYCLE_STATE_UNSPECIFIED"
    | "IN_PROGRESS"
    | "COMPLETED"
    | (string & {});
  conversationProfile?: string;
  phoneNumber?: GoogleCloudDialogflowV2ConversationPhoneNumber;
  startTime?: string;
  endTime?: string;
  conversationStage?:
    | "CONVERSATION_STAGE_UNSPECIFIED"
    | "VIRTUAL_AGENT_STAGE"
    | "HUMAN_ASSIST_STAGE"
    | (string & {});
  telephonyConnectionInfo?: GoogleCloudDialogflowV2ConversationTelephonyConnectionInfo;
  initialConversationProfile?: GoogleCloudDialogflowV2ConversationProfile;
  ingestedContextReferences?: Record<
    string,
    GoogleCloudDialogflowV2ConversationContextReference
  >;
  initialGeneratorContexts?: Record<
    string,
    GoogleCloudDialogflowV2ConversationGeneratorContext
  >;
}

export const GoogleCloudDialogflowV2Conversation =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    lifecycleState: Schema.optional(Schema.String),
    conversationProfile: Schema.optional(Schema.String),
    phoneNumber: Schema.optional(
      GoogleCloudDialogflowV2ConversationPhoneNumber,
    ),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    conversationStage: Schema.optional(Schema.String),
    telephonyConnectionInfo: Schema.optional(
      GoogleCloudDialogflowV2ConversationTelephonyConnectionInfo,
    ),
    initialConversationProfile: Schema.optional(
      GoogleCloudDialogflowV2ConversationProfile,
    ),
    ingestedContextReferences: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowV2ConversationContextReference,
      ),
    ),
    initialGeneratorContexts: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowV2ConversationGeneratorContext,
      ),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Conversation" });

export interface GoogleCloudDialogflowV2ListConversationsResponse {
  conversations?: ReadonlyArray<GoogleCloudDialogflowV2Conversation>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversations: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2Conversation),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ListConversationsResponse",
  });

export interface GoogleCloudDialogflowV2CompleteConversationRequest {}

export const GoogleCloudDialogflowV2CompleteConversationRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowV2CompleteConversationRequest",
  });

export interface GoogleCloudDialogflowV2IngestContextReferencesRequest {
  contextReferences?: Record<
    string,
    GoogleCloudDialogflowV2ConversationContextReference
  >;
}

export const GoogleCloudDialogflowV2IngestContextReferencesRequest =
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

export interface GoogleCloudDialogflowV2IngestContextReferencesResponse {
  ingestedContextReferences?: Record<
    string,
    GoogleCloudDialogflowV2ConversationContextReference
  >;
}

export const GoogleCloudDialogflowV2IngestContextReferencesResponse =
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

export interface GoogleCloudDialogflowV2ListMessagesResponse {
  messages?: ReadonlyArray<GoogleCloudDialogflowV2Message>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListMessagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messages: Schema.optional(Schema.Array(GoogleCloudDialogflowV2Message)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ListMessagesResponse" });

export interface GoogleCloudDialogflowV2SuggestConversationSummaryRequest {
  latestMessage?: string;
  contextSize?: number;
  assistQueryParams?: GoogleCloudDialogflowV2AssistQueryParameters;
}

export const GoogleCloudDialogflowV2SuggestConversationSummaryRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
    assistQueryParams: Schema.optional(
      GoogleCloudDialogflowV2AssistQueryParameters,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SuggestConversationSummaryRequest",
  });

export interface GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummarySummarySection {
  section?: string;
  summary?: string;
}

export const GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummarySummarySection =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    section: Schema.optional(Schema.String),
    summary: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummarySummarySection",
  });

export interface GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummary {
  text?: string;
  textSections?: Record<string, string>;
  sortedTextSections?: ReadonlyArray<GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummarySummarySection>;
  answerRecord?: string;
  baselineModelVersion?: string;
}

export const GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummary =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    textSections: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    sortedTextSections: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummarySummarySection,
      ),
    ),
    answerRecord: Schema.optional(Schema.String),
    baselineModelVersion: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummary",
  });

export interface GoogleCloudDialogflowV2SuggestConversationSummaryResponse {
  summary?: GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummary;
  latestMessage?: string;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2SuggestConversationSummaryResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    summary: Schema.optional(
      GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummary,
    ),
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2SuggestConversationSummaryResponse",
  });

export interface GoogleCloudDialogflowV2GenerateStatelessSummaryRequestMinimalConversation {
  messages?: ReadonlyArray<GoogleCloudDialogflowV2Message>;
}

export const GoogleCloudDialogflowV2GenerateStatelessSummaryRequestMinimalConversation =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messages: Schema.optional(Schema.Array(GoogleCloudDialogflowV2Message)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2GenerateStatelessSummaryRequestMinimalConversation",
  });

export interface GoogleCloudDialogflowV2GenerateStatelessSummaryRequest {
  statelessConversation?: GoogleCloudDialogflowV2GenerateStatelessSummaryRequestMinimalConversation;
  conversationProfile?: GoogleCloudDialogflowV2ConversationProfile;
  latestMessage?: string;
  maxContextSize?: number;
}

export const GoogleCloudDialogflowV2GenerateStatelessSummaryRequest =
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

export interface GoogleCloudDialogflowV2GenerateStatelessSummaryResponseSummary {
  text?: string;
  textSections?: Record<string, string>;
  baselineModelVersion?: string;
}

export const GoogleCloudDialogflowV2GenerateStatelessSummaryResponseSummary =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    textSections: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    baselineModelVersion: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2GenerateStatelessSummaryResponseSummary",
  });

export interface GoogleCloudDialogflowV2GenerateStatelessSummaryResponse {
  summary?: GoogleCloudDialogflowV2GenerateStatelessSummaryResponseSummary;
  latestMessage?: string;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2GenerateStatelessSummaryResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    summary: Schema.optional(
      GoogleCloudDialogflowV2GenerateStatelessSummaryResponseSummary,
    ),
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2GenerateStatelessSummaryResponse",
  });

export interface GoogleCloudDialogflowV2GenerateStatelessSuggestionRequest {
  generator?: GoogleCloudDialogflowV2Generator;
  generatorName?: string;
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

export const GoogleCloudDialogflowV2GenerateStatelessSuggestionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generator: Schema.optional(GoogleCloudDialogflowV2Generator),
    generatorName: Schema.optional(Schema.String),
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

export interface GoogleCloudDialogflowV2GenerateStatelessSuggestionResponse {
  generatorSuggestion?: GoogleCloudDialogflowV2GeneratorSuggestion;
}

export const GoogleCloudDialogflowV2GenerateStatelessSuggestionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generatorSuggestion: Schema.optional(
      GoogleCloudDialogflowV2GeneratorSuggestion,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2GenerateStatelessSuggestionResponse",
  });

export interface GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpecControlPoint {
  attributeValue?: string;
  boostAmount?: number;
}

export const GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpecControlPoint =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attributeValue: Schema.optional(Schema.String),
    boostAmount: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpecControlPoint",
  });

export interface GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpec {
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
  controlPoints?: ReadonlyArray<GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpecControlPoint>;
}

export const GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpec =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldName: Schema.optional(Schema.String),
    attributeType: Schema.optional(Schema.String),
    interpolationType: Schema.optional(Schema.String),
    controlPoints: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpecControlPoint,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpec",
  });

export interface GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpec {
  condition?: string;
  boost?: number;
  boostControlSpec?: GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpecBoostControlSpec;
}

export const GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpec =
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

export interface GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpec {
  conditionBoostSpecs?: ReadonlyArray<GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpecConditionBoostSpec>;
}

export const GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecsBoostSpec =
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

export const GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecs =
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
  dataStores?: ReadonlyArray<string>;
  filter?: string;
}

export const GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigFilterSpecs =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataStores: Schema.optional(Schema.Array(Schema.String)),
    filter: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigFilterSpecs",
  });

export interface GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfig {
  boostSpecs?: ReadonlyArray<GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigBoostSpecs>;
  filterSpecs?: ReadonlyArray<GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfigFilterSpecs>;
}

export const GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfig =
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
  query?: GoogleCloudDialogflowV2TextInput;
  conversationProfile?: string;
  sessionId?: string;
  conversation?: string;
  latestMessage?: string;
  querySource?:
    | "QUERY_SOURCE_UNSPECIFIED"
    | "AGENT_QUERY"
    | "SUGGESTED_QUERY"
    | (string & {});
  endUserMetadata?: Record<string, unknown>;
  searchConfig?: GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfig;
  exactSearch?: boolean;
}

export const GoogleCloudDialogflowV2SearchKnowledgeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.optional(Schema.String),
    query: Schema.optional(GoogleCloudDialogflowV2TextInput),
    conversationProfile: Schema.optional(Schema.String),
    sessionId: Schema.optional(Schema.String),
    conversation: Schema.optional(Schema.String),
    latestMessage: Schema.optional(Schema.String),
    querySource: Schema.optional(Schema.String),
    endUserMetadata: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    searchConfig: Schema.optional(
      GoogleCloudDialogflowV2SearchKnowledgeRequestSearchConfig,
    ),
    exactSearch: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SearchKnowledgeRequest" });

export interface GoogleCloudDialogflowV2SearchKnowledgeAnswerAnswerSource {
  title?: string;
  uri?: string;
  snippet?: string;
  metadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2SearchKnowledgeAnswerAnswerSource =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
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
    | (string & {});
  answerSources?: ReadonlyArray<GoogleCloudDialogflowV2SearchKnowledgeAnswerAnswerSource>;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2SearchKnowledgeAnswer =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answer: Schema.optional(Schema.String),
    answerType: Schema.optional(Schema.String),
    answerSources: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SearchKnowledgeAnswerAnswerSource),
    ),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SearchKnowledgeAnswer" });

export interface GoogleCloudDialogflowV2SearchKnowledgeDebugInfoSearchKnowledgeBehavior {
  answerGenerationRewriterOn?: boolean;
  endUserMetadataIncluded?: boolean;
  thirdPartyConnectorAllowed?: boolean;
}

export const GoogleCloudDialogflowV2SearchKnowledgeDebugInfoSearchKnowledgeBehavior =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answerGenerationRewriterOn: Schema.optional(Schema.Boolean),
    endUserMetadataIncluded: Schema.optional(Schema.Boolean),
    thirdPartyConnectorAllowed: Schema.optional(Schema.Boolean),
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

export const GoogleCloudDialogflowV2SearchKnowledgeDebugInfo =
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
  answers?: ReadonlyArray<GoogleCloudDialogflowV2SearchKnowledgeAnswer>;
  rewrittenQuery?: string;
  searchKnowledgeDebugInfo?: GoogleCloudDialogflowV2SearchKnowledgeDebugInfo;
}

export const GoogleCloudDialogflowV2SearchKnowledgeResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SearchKnowledgeAnswer),
    ),
    rewrittenQuery: Schema.optional(Schema.String),
    searchKnowledgeDebugInfo: Schema.optional(
      GoogleCloudDialogflowV2SearchKnowledgeDebugInfo,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SearchKnowledgeResponse" });

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

export const GoogleCloudDialogflowV2GenerateSuggestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestMessage: Schema.optional(Schema.String),
    triggerEvents: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2GenerateSuggestionsRequest",
  });

export interface GoogleCloudDialogflowV2DocumentReloadStatus {
  time?: string;
  status?: GoogleRpcStatus;
}

export const GoogleCloudDialogflowV2DocumentReloadStatus =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    time: Schema.optional(Schema.String),
    status: Schema.optional(GoogleRpcStatus),
  }).annotate({ identifier: "GoogleCloudDialogflowV2DocumentReloadStatus" });

export interface GoogleCloudDialogflowV2Document {
  name?: string;
  displayName?: string;
  mimeType?: string;
  knowledgeTypes?: ReadonlyArray<
    | "KNOWLEDGE_TYPE_UNSPECIFIED"
    | "FAQ"
    | "EXTRACTIVE_QA"
    | "ARTICLE_SUGGESTION"
    | "AGENT_FACING_SMART_REPLY"
    | (string & {})
  >;
  contentUri?: string;
  rawContent?: string;
  enableAutoReload?: boolean;
  latestReloadStatus?: GoogleCloudDialogflowV2DocumentReloadStatus;
  metadata?: Record<string, string>;
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "UPDATING"
    | "RELOADING"
    | "DELETING"
    | (string & {});
}

export const GoogleCloudDialogflowV2Document =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    mimeType: Schema.optional(Schema.String),
    knowledgeTypes: Schema.optional(Schema.Array(Schema.String)),
    contentUri: Schema.optional(Schema.String),
    rawContent: Schema.optional(Schema.String),
    enableAutoReload: Schema.optional(Schema.Boolean),
    latestReloadStatus: Schema.optional(
      GoogleCloudDialogflowV2DocumentReloadStatus,
    ),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Document" });

export interface GoogleCloudDialogflowV2ListDocumentsResponse {
  documents?: ReadonlyArray<GoogleCloudDialogflowV2Document>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    documents: Schema.optional(Schema.Array(GoogleCloudDialogflowV2Document)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ListDocumentsResponse" });

export interface GoogleCloudDialogflowV2ImportDocumentTemplate {
  mimeType?: string;
  knowledgeTypes?: ReadonlyArray<
    | "KNOWLEDGE_TYPE_UNSPECIFIED"
    | "FAQ"
    | "EXTRACTIVE_QA"
    | "ARTICLE_SUGGESTION"
    | "AGENT_FACING_SMART_REPLY"
    | (string & {})
  >;
  metadata?: Record<string, string>;
}

export const GoogleCloudDialogflowV2ImportDocumentTemplate =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mimeType: Schema.optional(Schema.String),
    knowledgeTypes: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ImportDocumentTemplate" });

export interface GoogleCloudDialogflowV2ImportDocumentsRequest {
  gcsSource?: GoogleCloudDialogflowV2GcsSources;
  documentTemplate?: GoogleCloudDialogflowV2ImportDocumentTemplate;
  importGcsCustomMetadata?: boolean;
}

export const GoogleCloudDialogflowV2ImportDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsSource: Schema.optional(GoogleCloudDialogflowV2GcsSources),
    documentTemplate: Schema.optional(
      GoogleCloudDialogflowV2ImportDocumentTemplate,
    ),
    importGcsCustomMetadata: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ImportDocumentsRequest" });

export interface GoogleCloudDialogflowV2ReloadDocumentRequest {
  contentUri?: string;
  importGcsCustomMetadata?: boolean;
  smartMessagingPartialUpdate?: boolean;
}

export const GoogleCloudDialogflowV2ReloadDocumentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contentUri: Schema.optional(Schema.String),
    importGcsCustomMetadata: Schema.optional(Schema.Boolean),
    smartMessagingPartialUpdate: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ReloadDocumentRequest" });

export interface GoogleCloudDialogflowV2GcsDestination {
  uri?: string;
}

export const GoogleCloudDialogflowV2GcsDestination =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2GcsDestination" });

export interface GoogleCloudDialogflowV2ExportDocumentRequest {
  gcsDestination?: GoogleCloudDialogflowV2GcsDestination;
  exportFullContent?: boolean;
  smartMessagingPartialUpdate?: boolean;
}

export const GoogleCloudDialogflowV2ExportDocumentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsDestination: Schema.optional(GoogleCloudDialogflowV2GcsDestination),
    exportFullContent: Schema.optional(Schema.Boolean),
    smartMessagingPartialUpdate: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ExportDocumentRequest" });

export interface GoogleCloudDialogflowV2EncryptionSpec {
  name?: string;
  kmsKey?: string;
}

export const GoogleCloudDialogflowV2EncryptionSpec =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    kmsKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2EncryptionSpec" });

export interface GoogleCloudDialogflowV2InitializeEncryptionSpecRequest {
  encryptionSpec?: GoogleCloudDialogflowV2EncryptionSpec;
}

export const GoogleCloudDialogflowV2InitializeEncryptionSpecRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    encryptionSpec: Schema.optional(GoogleCloudDialogflowV2EncryptionSpec),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2InitializeEncryptionSpecRequest",
  });

export interface GoogleCloudDialogflowV2FulfillmentGenericWebService {
  uri?: string;
  username?: string;
  password?: string;
  requestHeaders?: Record<string, string>;
  isCloudFunction?: boolean;
}

export const GoogleCloudDialogflowV2FulfillmentGenericWebService =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    requestHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    isCloudFunction: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2FulfillmentGenericWebService",
  });

export interface GoogleCloudDialogflowV2FulfillmentFeature {
  type?: "TYPE_UNSPECIFIED" | "SMALLTALK" | (string & {});
}

export const GoogleCloudDialogflowV2FulfillmentFeature =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2FulfillmentFeature" });

export interface GoogleCloudDialogflowV2Fulfillment {
  name?: string;
  displayName?: string;
  genericWebService?: GoogleCloudDialogflowV2FulfillmentGenericWebService;
  enabled?: boolean;
  features?: ReadonlyArray<GoogleCloudDialogflowV2FulfillmentFeature>;
}

export const GoogleCloudDialogflowV2Fulfillment =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    genericWebService: Schema.optional(
      GoogleCloudDialogflowV2FulfillmentGenericWebService,
    ),
    enabled: Schema.optional(Schema.Boolean),
    features: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2FulfillmentFeature),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Fulfillment" });

export interface GoogleCloudDialogflowV2TextToSpeechSettings {
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
  synthesizeSpeechConfigs?: Record<
    string,
    GoogleCloudDialogflowV2SynthesizeSpeechConfig
  >;
}

export const GoogleCloudDialogflowV2TextToSpeechSettings =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableTextToSpeech: Schema.optional(Schema.Boolean),
    outputAudioEncoding: Schema.optional(Schema.String),
    sampleRateHertz: Schema.optional(Schema.Number),
    synthesizeSpeechConfigs: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowV2SynthesizeSpeechConfig,
      ),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2TextToSpeechSettings" });

export interface GoogleCloudDialogflowV2Environment {
  name?: string;
  description?: string;
  agentVersion?: string;
  state?:
    | "STATE_UNSPECIFIED"
    | "STOPPED"
    | "LOADING"
    | "RUNNING"
    | (string & {});
  updateTime?: string;
  textToSpeechSettings?: GoogleCloudDialogflowV2TextToSpeechSettings;
  fulfillment?: GoogleCloudDialogflowV2Fulfillment;
}

export const GoogleCloudDialogflowV2Environment =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    agentVersion: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    textToSpeechSettings: Schema.optional(
      GoogleCloudDialogflowV2TextToSpeechSettings,
    ),
    fulfillment: Schema.optional(GoogleCloudDialogflowV2Fulfillment),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Environment" });

export interface GoogleCloudDialogflowV2ListEnvironmentsResponse {
  environments?: ReadonlyArray<GoogleCloudDialogflowV2Environment>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    environments: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2Environment),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ListEnvironmentsResponse",
  });

export interface GoogleCloudDialogflowV2EnvironmentHistoryEntry {
  agentVersion?: string;
  description?: string;
  createTime?: string;
}

export const GoogleCloudDialogflowV2EnvironmentHistoryEntry =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentVersion: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2EnvironmentHistoryEntry" });

export interface GoogleCloudDialogflowV2EnvironmentHistory {
  parent?: string;
  entries?: ReadonlyArray<GoogleCloudDialogflowV2EnvironmentHistoryEntry>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2EnvironmentHistory =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.optional(Schema.String),
    entries: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2EnvironmentHistoryEntry),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2EnvironmentHistory" });

export interface GoogleCloudDialogflowV2GeneratorEvaluationConfigAgentAssistInputDataConfig {
  startTime?: string;
  endTime?: string;
}

export const GoogleCloudDialogflowV2GeneratorEvaluationConfigAgentAssistInputDataConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2GeneratorEvaluationConfigAgentAssistInputDataConfig",
  });

export interface GoogleCloudDialogflowV2GeneratorEvaluationConfigDatasetInputDataConfig {
  dataset?: string;
}

export const GoogleCloudDialogflowV2GeneratorEvaluationConfigDatasetInputDataConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataset: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2GeneratorEvaluationConfigDatasetInputDataConfig",
  });

export interface GoogleCloudDialogflowV2GeneratorEvaluationConfigInputDataConfig {
  inputDataSourceType?:
    | "INPUT_DATA_SOURCE_TYPE_UNSPECIFIED"
    | "AGENT_ASSIST_CONVERSATIONS"
    | "INSIGHTS_CONVERSATIONS"
    | (string & {});
  startTime?: string;
  endTime?: string;
  sampleSize?: number;
  isSummaryGenerationAllowed?: boolean;
  summaryGenerationOption?:
    | "SUMMARY_GENERATION_OPTION_UNSPECIFIED"
    | "ALWAYS_GENERATE"
    | "GENERATE_IF_MISSING"
    | "DO_NOT_GENERATE"
    | (string & {});
  agentAssistInputDataConfig?: GoogleCloudDialogflowV2GeneratorEvaluationConfigAgentAssistInputDataConfig;
  datasetInputDataConfig?: GoogleCloudDialogflowV2GeneratorEvaluationConfigDatasetInputDataConfig;
}

export const GoogleCloudDialogflowV2GeneratorEvaluationConfigInputDataConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputDataSourceType: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    sampleSize: Schema.optional(Schema.Number),
    isSummaryGenerationAllowed: Schema.optional(Schema.Boolean),
    summaryGenerationOption: Schema.optional(Schema.String),
    agentAssistInputDataConfig: Schema.optional(
      GoogleCloudDialogflowV2GeneratorEvaluationConfigAgentAssistInputDataConfig,
    ),
    datasetInputDataConfig: Schema.optional(
      GoogleCloudDialogflowV2GeneratorEvaluationConfigDatasetInputDataConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2GeneratorEvaluationConfigInputDataConfig",
  });

export interface GoogleCloudDialogflowV2GeneratorEvaluationConfigSummarizationConfig {
  enableAccuracyEvaluation?: boolean;
  accuracyEvaluationVersion?: string;
  enableCompletenessEvaluation?: boolean;
  completenessEvaluationVersion?: string;
  evaluatorVersion?: string;
}

export const GoogleCloudDialogflowV2GeneratorEvaluationConfigSummarizationConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableAccuracyEvaluation: Schema.optional(Schema.Boolean),
    accuracyEvaluationVersion: Schema.optional(Schema.String),
    enableCompletenessEvaluation: Schema.optional(Schema.Boolean),
    completenessEvaluationVersion: Schema.optional(Schema.String),
    evaluatorVersion: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2GeneratorEvaluationConfigSummarizationConfig",
  });

export interface GoogleCloudDialogflowV2GeneratorEvaluationConfig {
  inputDataConfig?: GoogleCloudDialogflowV2GeneratorEvaluationConfigInputDataConfig;
  outputGcsBucketPath?: string;
  summarizationConfig?: GoogleCloudDialogflowV2GeneratorEvaluationConfigSummarizationConfig;
}

export const GoogleCloudDialogflowV2GeneratorEvaluationConfig =
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

export interface GoogleCloudDialogflowV2SummarizationEvaluationMetricsAccuracyDecomposition {
  point?: string;
  accuracyReasoning?: string;
  isAccurate?: boolean;
}

export const GoogleCloudDialogflowV2SummarizationEvaluationMetricsAccuracyDecomposition =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    point: Schema.optional(Schema.String),
    accuracyReasoning: Schema.optional(Schema.String),
    isAccurate: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SummarizationEvaluationMetricsAccuracyDecomposition",
  });

export interface GoogleCloudDialogflowV2SummarizationEvaluationMetricsAdherenceDecomposition {
  point?: string;
  adherenceReasoning?: string;
  isAdherent?: boolean;
}

export const GoogleCloudDialogflowV2SummarizationEvaluationMetricsAdherenceDecomposition =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    point: Schema.optional(Schema.String),
    adherenceReasoning: Schema.optional(Schema.String),
    isAdherent: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SummarizationEvaluationMetricsAdherenceDecomposition",
  });

export interface GoogleCloudDialogflowV2SummarizationEvaluationMetricsDecomposition {
  accuracyDecomposition?: GoogleCloudDialogflowV2SummarizationEvaluationMetricsAccuracyDecomposition;
  adherenceDecomposition?: GoogleCloudDialogflowV2SummarizationEvaluationMetricsAdherenceDecomposition;
}

export const GoogleCloudDialogflowV2SummarizationEvaluationMetricsDecomposition =
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

export interface GoogleCloudDialogflowV2SummarizationEvaluationMetricsAdherenceRubric {
  question?: string;
  reasoning?: string;
  isAddressed?: boolean;
}

export const GoogleCloudDialogflowV2SummarizationEvaluationMetricsAdherenceRubric =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    question: Schema.optional(Schema.String),
    reasoning: Schema.optional(Schema.String),
    isAddressed: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SummarizationEvaluationMetricsAdherenceRubric",
  });

export interface GoogleCloudDialogflowV2SummarizationEvaluationMetricsCompletenessRubric {
  question?: string;
  isAddressed?: boolean;
}

export const GoogleCloudDialogflowV2SummarizationEvaluationMetricsCompletenessRubric =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    question: Schema.optional(Schema.String),
    isAddressed: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SummarizationEvaluationMetricsCompletenessRubric",
  });

export interface GoogleCloudDialogflowV2SummarizationEvaluationMetricsEvaluationResult {
  accuracyDecomposition?: GoogleCloudDialogflowV2SummarizationEvaluationMetricsAccuracyDecomposition;
  adherenceRubric?: GoogleCloudDialogflowV2SummarizationEvaluationMetricsAdherenceRubric;
  completenessRubric?: GoogleCloudDialogflowV2SummarizationEvaluationMetricsCompletenessRubric;
}

export const GoogleCloudDialogflowV2SummarizationEvaluationMetricsEvaluationResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accuracyDecomposition: Schema.optional(
      GoogleCloudDialogflowV2SummarizationEvaluationMetricsAccuracyDecomposition,
    ),
    adherenceRubric: Schema.optional(
      GoogleCloudDialogflowV2SummarizationEvaluationMetricsAdherenceRubric,
    ),
    completenessRubric: Schema.optional(
      GoogleCloudDialogflowV2SummarizationEvaluationMetricsCompletenessRubric,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SummarizationEvaluationMetricsEvaluationResult",
  });

export interface GoogleCloudDialogflowV2SummarizationEvaluationMetricsSummarizationEvaluationResult {
  sessionId?: string;
  metric?: string;
  section?: string;
  score?: number;
  sectionSummary?: string;
  decompositions?: ReadonlyArray<GoogleCloudDialogflowV2SummarizationEvaluationMetricsDecomposition>;
  evaluationResults?: ReadonlyArray<GoogleCloudDialogflowV2SummarizationEvaluationMetricsEvaluationResult>;
}

export const GoogleCloudDialogflowV2SummarizationEvaluationMetricsSummarizationEvaluationResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionId: Schema.optional(Schema.String),
    metric: Schema.optional(Schema.String),
    section: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    sectionSummary: Schema.optional(Schema.String),
    decompositions: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2SummarizationEvaluationMetricsDecomposition,
      ),
    ),
    evaluationResults: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2SummarizationEvaluationMetricsEvaluationResult,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SummarizationEvaluationMetricsSummarizationEvaluationResult",
  });

export interface GoogleCloudDialogflowV2SummarizationEvaluationMetricsOverallScoresByMetric {
  metric?: string;
}

export const GoogleCloudDialogflowV2SummarizationEvaluationMetricsOverallScoresByMetric =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metric: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SummarizationEvaluationMetricsOverallScoresByMetric",
  });

export interface GoogleCloudDialogflowV2SummarizationEvaluationMetricsSectionToken {
  section?: string;
  tokenCount?: string;
}

export const GoogleCloudDialogflowV2SummarizationEvaluationMetricsSectionToken =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    section: Schema.optional(Schema.String),
    tokenCount: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SummarizationEvaluationMetricsSectionToken",
  });

export interface GoogleCloudDialogflowV2SummarizationEvaluationMetricsConversationDetailMetricDetailSectionDetail {
  section?: string;
  score?: number;
  sectionSummary?: string;
  evaluationResults?: ReadonlyArray<GoogleCloudDialogflowV2SummarizationEvaluationMetricsEvaluationResult>;
}

export const GoogleCloudDialogflowV2SummarizationEvaluationMetricsConversationDetailMetricDetailSectionDetail =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    section: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    sectionSummary: Schema.optional(Schema.String),
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

export const GoogleCloudDialogflowV2SummarizationEvaluationMetricsConversationDetailMetricDetail =
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

export interface GoogleCloudDialogflowV2SummarizationEvaluationMetricsConversationDetail {
  messageEntries?: ReadonlyArray<GoogleCloudDialogflowV2MessageEntry>;
  summarySections?: ReadonlyArray<GoogleCloudDialogflowV2SummarySuggestionSummarySection>;
  metricDetails?: ReadonlyArray<GoogleCloudDialogflowV2SummarizationEvaluationMetricsConversationDetailMetricDetail>;
  sectionTokens?: ReadonlyArray<GoogleCloudDialogflowV2SummarizationEvaluationMetricsSectionToken>;
}

export const GoogleCloudDialogflowV2SummarizationEvaluationMetricsConversationDetail =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messageEntries: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2MessageEntry),
    ),
    summarySections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SummarySuggestionSummarySection),
    ),
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
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SummarizationEvaluationMetricsConversationDetail",
  });

export interface GoogleCloudDialogflowV2SummarizationEvaluationMetrics {
  summarizationEvaluationResults?: ReadonlyArray<GoogleCloudDialogflowV2SummarizationEvaluationMetricsSummarizationEvaluationResult>;
  summarizationEvaluationMergedResultsUri?: string;
  overallMetrics?: ReadonlyArray<GoogleCloudDialogflowV2SummarizationEvaluationMetricsOverallScoresByMetric>;
  overallSectionTokens?: ReadonlyArray<GoogleCloudDialogflowV2SummarizationEvaluationMetricsSectionToken>;
  conversationDetails?: ReadonlyArray<GoogleCloudDialogflowV2SummarizationEvaluationMetricsConversationDetail>;
}

export const GoogleCloudDialogflowV2SummarizationEvaluationMetrics =
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

export interface GoogleCloudDialogflowV2EvaluationStatus {
  done?: boolean;
  pipelineStatus?: GoogleRpcStatus;
}

export const GoogleCloudDialogflowV2EvaluationStatus =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    done: Schema.optional(Schema.Boolean),
    pipelineStatus: Schema.optional(GoogleRpcStatus),
  }).annotate({ identifier: "GoogleCloudDialogflowV2EvaluationStatus" });

export interface GoogleCloudDialogflowV2GeneratorEvaluation {
  name?: string;
  displayName?: string;
  generatorEvaluationConfig?: GoogleCloudDialogflowV2GeneratorEvaluationConfig;
  createTime?: string;
  completeTime?: string;
  initialGenerator?: GoogleCloudDialogflowV2Generator;
  summarizationMetrics?: GoogleCloudDialogflowV2SummarizationEvaluationMetrics;
  evaluationStatus?: GoogleCloudDialogflowV2EvaluationStatus;
  satisfiesPzs?: boolean;
  satisfiesPzi?: boolean;
}

export const GoogleCloudDialogflowV2GeneratorEvaluation =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    generatorEvaluationConfig: Schema.optional(
      GoogleCloudDialogflowV2GeneratorEvaluationConfig,
    ),
    createTime: Schema.optional(Schema.String),
    completeTime: Schema.optional(Schema.String),
    initialGenerator: Schema.optional(GoogleCloudDialogflowV2Generator),
    summarizationMetrics: Schema.optional(
      GoogleCloudDialogflowV2SummarizationEvaluationMetrics,
    ),
    evaluationStatus: Schema.optional(GoogleCloudDialogflowV2EvaluationStatus),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    satisfiesPzi: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2GeneratorEvaluation" });

export interface GoogleCloudDialogflowV2ListGeneratorEvaluationsResponse {
  generatorEvaluations?: ReadonlyArray<GoogleCloudDialogflowV2GeneratorEvaluation>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListGeneratorEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generatorEvaluations: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2GeneratorEvaluation),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ListGeneratorEvaluationsResponse",
  });

export interface GoogleCloudDialogflowV2KnowledgeBase {
  name?: string;
  displayName?: string;
  languageCode?: string;
}

export const GoogleCloudDialogflowV2KnowledgeBase =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2KnowledgeBase" });

export interface GoogleCloudDialogflowV2ListKnowledgeBasesResponse {
  knowledgeBases?: ReadonlyArray<GoogleCloudDialogflowV2KnowledgeBase>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    knowledgeBases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2KnowledgeBase),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2ListKnowledgeBasesResponse",
  });

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

export const GoogleCloudDialogflowV2ConnectionErrorDetails =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificateState: Schema.optional(Schema.String),
    errorMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ConnectionErrorDetails" });

export interface GoogleCloudDialogflowV2Connection {
  connectionId?: string;
  state?:
    | "STATE_UNSPECIFIED"
    | "CONNECTED"
    | "DISCONNECTED"
    | "AUTHENTICATION_FAILED"
    | "KEEPALIVE"
    | (string & {});
  updateTime?: string;
  errorDetails?: GoogleCloudDialogflowV2ConnectionErrorDetails;
}

export const GoogleCloudDialogflowV2Connection =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connectionId: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    errorDetails: Schema.optional(
      GoogleCloudDialogflowV2ConnectionErrorDetails,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Connection" });

export interface GoogleCloudDialogflowV2SipTrunk {
  name?: string;
  expectedHostname?: ReadonlyArray<string>;
  connections?: ReadonlyArray<GoogleCloudDialogflowV2Connection>;
  displayName?: string;
}

export const GoogleCloudDialogflowV2SipTrunk =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    expectedHostname: Schema.optional(Schema.Array(Schema.String)),
    connections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2Connection),
    ),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SipTrunk" });

export interface GoogleCloudDialogflowV2ListSipTrunksResponse {
  sipTrunks?: ReadonlyArray<GoogleCloudDialogflowV2SipTrunk>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListSipTrunksResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sipTrunks: Schema.optional(Schema.Array(GoogleCloudDialogflowV2SipTrunk)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ListSipTrunksResponse" });

export interface GoogleCloudDialogflowV2Version {
  name?: string;
  description?: string;
  versionNumber?: number;
  createTime?: string;
  status?:
    | "VERSION_STATUS_UNSPECIFIED"
    | "IN_PROGRESS"
    | "READY"
    | "FAILED"
    | (string & {});
}

export const GoogleCloudDialogflowV2Version =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    versionNumber: Schema.optional(Schema.Number),
    createTime: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2Version" });

export interface GoogleCloudDialogflowV2ListVersionsResponse {
  versions?: ReadonlyArray<GoogleCloudDialogflowV2Version>;
  nextPageToken?: string;
}

export const GoogleCloudDialogflowV2ListVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versions: Schema.optional(Schema.Array(GoogleCloudDialogflowV2Version)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ListVersionsResponse" });

export interface GoogleCloudLocationLocation {
  name?: string;
  locationId?: string;
  displayName?: string;
  labels?: Record<string, string>;
  metadata?: Record<string, unknown>;
}

export const GoogleCloudLocationLocation =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudLocationLocation" });

export interface GoogleCloudLocationListLocationsResponse {
  locations?: ReadonlyArray<GoogleCloudLocationLocation>;
  nextPageToken?: string;
}

export const GoogleCloudLocationListLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locations: Schema.optional(Schema.Array(GoogleCloudLocationLocation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudLocationListLocationsResponse" });

export interface GoogleCloudDialogflowCxV3CreateVersionOperationMetadata {
  version?: string;
}

export const GoogleCloudDialogflowCxV3CreateVersionOperationMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3CreateVersionOperationMetadata",
  });

export interface GoogleCloudDialogflowCxV3ExportAgentResponse {
  agentUri?: string;
  agentContent?: string;
  commitSha?: string;
}

export const GoogleCloudDialogflowCxV3ExportAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentUri: Schema.optional(Schema.String),
    agentContent: Schema.optional(Schema.String),
    commitSha: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ExportAgentResponse" });

export interface GoogleCloudDialogflowCxV3ExportFlowResponse {
  flowUri?: string;
  flowContent?: string;
}

export const GoogleCloudDialogflowCxV3ExportFlowResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flowUri: Schema.optional(Schema.String),
    flowContent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ExportFlowResponse" });

export interface GoogleCloudDialogflowCxV3ExportIntentsMetadata {}

export const GoogleCloudDialogflowCxV3ExportIntentsMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ExportIntentsMetadata",
  });

export interface GoogleCloudDialogflowCxV3InlineDestination {
  content?: string;
}

export const GoogleCloudDialogflowCxV3InlineDestination =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3InlineDestination" });

export interface GoogleCloudDialogflowCxV3ExportIntentsResponse {
  intentsUri?: string;
  intentsContent?: GoogleCloudDialogflowCxV3InlineDestination;
}

export const GoogleCloudDialogflowCxV3ExportIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intentsUri: Schema.optional(Schema.String),
    intentsContent: Schema.optional(GoogleCloudDialogflowCxV3InlineDestination),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ExportIntentsResponse" });

export interface GoogleCloudDialogflowCxV3ImportFlowResponse {
  flow?: string;
}

export const GoogleCloudDialogflowCxV3ImportFlowResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flow: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ImportFlowResponse" });

export interface GoogleCloudDialogflowCxV3ImportEntityTypesMetadata {}

export const GoogleCloudDialogflowCxV3ImportEntityTypesMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ImportEntityTypesMetadata",
  });

export interface GoogleCloudDialogflowCxV3ImportEntityTypesResponseConflictingResources {
  entityTypeDisplayNames?: ReadonlyArray<string>;
  entityDisplayNames?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3ImportEntityTypesResponseConflictingResources =
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

export const GoogleCloudDialogflowCxV3ImportEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypes: Schema.optional(Schema.Array(Schema.String)),
    conflictingResources: Schema.optional(
      GoogleCloudDialogflowCxV3ImportEntityTypesResponseConflictingResources,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ImportEntityTypesResponse",
  });

export interface GoogleCloudDialogflowCxV3ExportEntityTypesMetadata {}

export const GoogleCloudDialogflowCxV3ExportEntityTypesMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ExportEntityTypesMetadata",
  });

export interface GoogleCloudDialogflowCxV3ExportEntityTypesResponse {
  entityTypesUri?: string;
  entityTypesContent?: GoogleCloudDialogflowCxV3InlineDestination;
}

export const GoogleCloudDialogflowCxV3ExportEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypesUri: Schema.optional(Schema.String),
    entityTypesContent: Schema.optional(
      GoogleCloudDialogflowCxV3InlineDestination,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ExportEntityTypesResponse",
  });

export interface GoogleCloudDialogflowCxV3ImportIntentsMetadata {}

export const GoogleCloudDialogflowCxV3ImportIntentsMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ImportIntentsMetadata",
  });

export interface GoogleCloudDialogflowCxV3ImportIntentsResponseConflictingResources {
  intentDisplayNames?: ReadonlyArray<string>;
  entityDisplayNames?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3ImportIntentsResponseConflictingResources =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intentDisplayNames: Schema.optional(Schema.Array(Schema.String)),
    entityDisplayNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3ImportIntentsResponseConflictingResources",
  });

export interface GoogleCloudDialogflowCxV3ImportIntentsResponse {
  intents?: ReadonlyArray<string>;
  conflictingResources?: GoogleCloudDialogflowCxV3ImportIntentsResponseConflictingResources;
}

export const GoogleCloudDialogflowCxV3ImportIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intents: Schema.optional(Schema.Array(Schema.String)),
    conflictingResources: Schema.optional(
      GoogleCloudDialogflowCxV3ImportIntentsResponseConflictingResources,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ImportIntentsResponse" });

export interface GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo {
  tag?: string;
}

export const GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tag: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo",
  });

export interface GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue {
  originalValue?: string;
  resolvedValue?: unknown;
}

export const GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    originalValue: Schema.optional(Schema.String),
    resolvedValue: Schema.optional(Schema.Unknown),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue",
  });

export interface GoogleCloudDialogflowCxV3WebhookRequestIntentInfo {
  lastMatchedIntent?: string;
  displayName?: string;
  parameters?: Record<
    string,
    GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue
  >;
  confidence?: number;
}

export const GoogleCloudDialogflowCxV3WebhookRequestIntentInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastMatchedIntent: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    parameters: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue,
      ),
    ),
    confidence: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3WebhookRequestIntentInfo",
  });

export interface GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo {
  displayName?: string;
  required?: boolean;
  state?:
    | "PARAMETER_STATE_UNSPECIFIED"
    | "EMPTY"
    | "INVALID"
    | "FILLED"
    | (string & {});
  value?: unknown;
  justCollected?: boolean;
}

export const GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    required: Schema.optional(Schema.Boolean),
    state: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Unknown),
    justCollected: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo",
  });

export interface GoogleCloudDialogflowCxV3PageInfoFormInfo {
  parameterInfo?: ReadonlyArray<GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo>;
}

export const GoogleCloudDialogflowCxV3PageInfoFormInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameterInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3PageInfoFormInfo" });

export interface GoogleCloudDialogflowCxV3PageInfo {
  currentPage?: string;
  displayName?: string;
  formInfo?: GoogleCloudDialogflowCxV3PageInfoFormInfo;
}

export const GoogleCloudDialogflowCxV3PageInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currentPage: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    formInfo: Schema.optional(GoogleCloudDialogflowCxV3PageInfoFormInfo),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3PageInfo" });

export interface GoogleCloudDialogflowCxV3SessionInfo {
  session?: string;
  parameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3SessionInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3SessionInfo" });

export interface GoogleCloudDialogflowCxV3ResponseMessageText {
  text?: ReadonlyArray<string>;
  allowPlaybackInterruption?: boolean;
}

export const GoogleCloudDialogflowCxV3ResponseMessageText =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.Array(Schema.String)),
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ResponseMessageText" });

export interface GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess {
  metadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess",
  });

export interface GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText {
  text?: string;
  ssml?: string;
  allowPlaybackInterruption?: boolean;
}

export const GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    ssml: Schema.optional(Schema.String),
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText",
  });

export interface GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff {
  metadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff",
  });

export interface GoogleCloudDialogflowCxV3ResponseMessageEndInteraction {}

export const GoogleCloudDialogflowCxV3ResponseMessageEndInteraction =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessageEndInteraction",
  });

export interface GoogleCloudDialogflowCxV3ResponseMessagePlayAudio {
  audioUri?: string;
  allowPlaybackInterruption?: boolean;
}

export const GoogleCloudDialogflowCxV3ResponseMessagePlayAudio =
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

export const GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment =
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

export const GoogleCloudDialogflowCxV3ResponseMessageMixedAudio =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    segments: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessageMixedAudio",
  });

export interface GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall {
  phoneNumber?: string;
}

export const GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    phoneNumber: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall",
  });

export interface GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard {}

export const GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard",
  });

export interface GoogleCloudDialogflowCxV3ToolCall {
  tool?: string;
  action?: string;
  inputParameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3ToolCall =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tool: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ToolCall" });

export interface GoogleCloudDialogflowCxV3ResponseMessage {
  text?: GoogleCloudDialogflowCxV3ResponseMessageText;
  payload?: Record<string, unknown>;
  conversationSuccess?: GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess;
  outputAudioText?: GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText;
  liveAgentHandoff?: GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff;
  endInteraction?: GoogleCloudDialogflowCxV3ResponseMessageEndInteraction;
  playAudio?: GoogleCloudDialogflowCxV3ResponseMessagePlayAudio;
  mixedAudio?: GoogleCloudDialogflowCxV3ResponseMessageMixedAudio;
  telephonyTransferCall?: GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall;
  knowledgeInfoCard?: GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard;
  toolCall?: GoogleCloudDialogflowCxV3ToolCall;
  responseType?:
    | "RESPONSE_TYPE_UNSPECIFIED"
    | "ENTRY_PROMPT"
    | "PARAMETER_PROMPT"
    | "HANDLER_PROMPT"
    | (string & {});
  channel?: string;
}

export const GoogleCloudDialogflowCxV3ResponseMessage =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(GoogleCloudDialogflowCxV3ResponseMessageText),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    conversationSuccess: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess,
    ),
    outputAudioText: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText,
    ),
    liveAgentHandoff: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff,
    ),
    endInteraction: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageEndInteraction,
    ),
    playAudio: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessagePlayAudio,
    ),
    mixedAudio: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageMixedAudio,
    ),
    telephonyTransferCall: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall,
    ),
    knowledgeInfoCard: Schema.optional(
      GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard,
    ),
    toolCall: Schema.optional(GoogleCloudDialogflowCxV3ToolCall),
    responseType: Schema.optional(Schema.String),
    channel: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ResponseMessage" });

export interface GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult {
  score?: number;
  magnitude?: number;
}

export const GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.Number),
    magnitude: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult",
  });

export interface GoogleCloudDialogflowCxV3LanguageInfo {
  inputLanguageCode?: string;
  resolvedLanguageCode?: string;
  confidenceScore?: number;
}

export const GoogleCloudDialogflowCxV3LanguageInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputLanguageCode: Schema.optional(Schema.String),
    resolvedLanguageCode: Schema.optional(Schema.String),
    confidenceScore: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3LanguageInfo" });

export interface GoogleCloudDialogflowCxV3WebhookRequest {
  detectIntentResponseId?: string;
  text?: string;
  triggerIntent?: string;
  transcript?: string;
  triggerEvent?: string;
  dtmfDigits?: string;
  languageCode?: string;
  fulfillmentInfo?: GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo;
  intentInfo?: GoogleCloudDialogflowCxV3WebhookRequestIntentInfo;
  pageInfo?: GoogleCloudDialogflowCxV3PageInfo;
  sessionInfo?: GoogleCloudDialogflowCxV3SessionInfo;
  messages?: ReadonlyArray<GoogleCloudDialogflowCxV3ResponseMessage>;
  payload?: Record<string, unknown>;
  sentimentAnalysisResult?: GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult;
  languageInfo?: GoogleCloudDialogflowCxV3LanguageInfo;
}

export const GoogleCloudDialogflowCxV3WebhookRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detectIntentResponseId: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
    triggerIntent: Schema.optional(Schema.String),
    transcript: Schema.optional(Schema.String),
    triggerEvent: Schema.optional(Schema.String),
    dtmfDigits: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    fulfillmentInfo: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo,
    ),
    intentInfo: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookRequestIntentInfo,
    ),
    pageInfo: Schema.optional(GoogleCloudDialogflowCxV3PageInfo),
    sessionInfo: Schema.optional(GoogleCloudDialogflowCxV3SessionInfo),
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ResponseMessage),
    ),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    sentimentAnalysisResult: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult,
    ),
    languageInfo: Schema.optional(GoogleCloudDialogflowCxV3LanguageInfo),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3WebhookRequest" });

export interface GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponse {
  messages?: ReadonlyArray<GoogleCloudDialogflowCxV3ResponseMessage>;
  mergeBehavior?:
    | "MERGE_BEHAVIOR_UNSPECIFIED"
    | "APPEND"
    | "REPLACE"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ResponseMessage),
    ),
    mergeBehavior: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponse",
  });

export interface GoogleCloudDialogflowCxV3WebhookResponse {
  fulfillmentResponse?: GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponse;
  pageInfo?: GoogleCloudDialogflowCxV3PageInfo;
  sessionInfo?: GoogleCloudDialogflowCxV3SessionInfo;
  payload?: Record<string, unknown>;
  targetPage?: string;
  targetFlow?: string;
}

export const GoogleCloudDialogflowCxV3WebhookResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fulfillmentResponse: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponse,
    ),
    pageInfo: Schema.optional(GoogleCloudDialogflowCxV3PageInfo),
    sessionInfo: Schema.optional(GoogleCloudDialogflowCxV3SessionInfo),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    targetPage: Schema.optional(Schema.String),
    targetFlow: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3WebhookResponse" });

export interface GoogleCloudDialogflowCxV3TestError {
  testCase?: string;
  status?: GoogleRpcStatus;
  testTime?: string;
}

export const GoogleCloudDialogflowCxV3TestError =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testCase: Schema.optional(Schema.String),
    status: Schema.optional(GoogleRpcStatus),
    testTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TestError" });

export interface GoogleCloudDialogflowCxV3BatchRunTestCasesMetadata {
  errors?: ReadonlyArray<GoogleCloudDialogflowCxV3TestError>;
}

export const GoogleCloudDialogflowCxV3BatchRunTestCasesMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3TestError)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3BatchRunTestCasesMetadata",
  });

export interface GoogleCloudDialogflowCxV3TextInput {
  text?: string;
}

export const GoogleCloudDialogflowCxV3TextInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TextInput" });

export interface GoogleCloudDialogflowCxV3IntentInput {
  intent?: string;
}

export const GoogleCloudDialogflowCxV3IntentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3IntentInput" });

export interface GoogleCloudDialogflowCxV3BargeInConfig {
  noBargeInDuration?: string;
  totalDuration?: string;
}

export const GoogleCloudDialogflowCxV3BargeInConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    noBargeInDuration: Schema.optional(Schema.String),
    totalDuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3BargeInConfig" });

export interface GoogleCloudDialogflowCxV3InputAudioConfig {
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
  phraseHints?: ReadonlyArray<string>;
  model?: string;
  modelVariant?:
    | "SPEECH_MODEL_VARIANT_UNSPECIFIED"
    | "USE_BEST_AVAILABLE"
    | "USE_STANDARD"
    | "USE_ENHANCED"
    | (string & {});
  singleUtterance?: boolean;
  bargeInConfig?: GoogleCloudDialogflowCxV3BargeInConfig;
  optOutConformerModelMigration?: boolean;
}

export const GoogleCloudDialogflowCxV3InputAudioConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audioEncoding: Schema.optional(Schema.String),
    sampleRateHertz: Schema.optional(Schema.Number),
    enableWordInfo: Schema.optional(Schema.Boolean),
    phraseHints: Schema.optional(Schema.Array(Schema.String)),
    model: Schema.optional(Schema.String),
    modelVariant: Schema.optional(Schema.String),
    singleUtterance: Schema.optional(Schema.Boolean),
    bargeInConfig: Schema.optional(GoogleCloudDialogflowCxV3BargeInConfig),
    optOutConformerModelMigration: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3InputAudioConfig" });

export interface GoogleCloudDialogflowCxV3AudioInput {
  config?: GoogleCloudDialogflowCxV3InputAudioConfig;
  audio?: string;
}

export const GoogleCloudDialogflowCxV3AudioInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    config: Schema.optional(GoogleCloudDialogflowCxV3InputAudioConfig),
    audio: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3AudioInput" });

export interface GoogleCloudDialogflowCxV3EventInput {
  event?: string;
}

export const GoogleCloudDialogflowCxV3EventInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    event: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3EventInput" });

export interface GoogleCloudDialogflowCxV3DtmfInput {
  digits?: string;
  finishDigit?: string;
}

export const GoogleCloudDialogflowCxV3DtmfInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    digits: Schema.optional(Schema.String),
    finishDigit: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3DtmfInput" });

export interface GoogleCloudDialogflowCxV3ToolCallResultError {
  message?: string;
}

export const GoogleCloudDialogflowCxV3ToolCallResultError =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ToolCallResultError" });

export interface GoogleCloudDialogflowCxV3ToolCallResult {
  tool?: string;
  action?: string;
  error?: GoogleCloudDialogflowCxV3ToolCallResultError;
  outputParameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3ToolCallResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tool: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    error: Schema.optional(GoogleCloudDialogflowCxV3ToolCallResultError),
    outputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ToolCallResult" });

export interface GoogleCloudDialogflowCxV3QueryInput {
  text?: GoogleCloudDialogflowCxV3TextInput;
  intent?: GoogleCloudDialogflowCxV3IntentInput;
  audio?: GoogleCloudDialogflowCxV3AudioInput;
  event?: GoogleCloudDialogflowCxV3EventInput;
  dtmf?: GoogleCloudDialogflowCxV3DtmfInput;
  toolCallResult?: GoogleCloudDialogflowCxV3ToolCallResult;
  languageCode?: string;
}

export const GoogleCloudDialogflowCxV3QueryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(GoogleCloudDialogflowCxV3TextInput),
    intent: Schema.optional(GoogleCloudDialogflowCxV3IntentInput),
    audio: Schema.optional(GoogleCloudDialogflowCxV3AudioInput),
    event: Schema.optional(GoogleCloudDialogflowCxV3EventInput),
    dtmf: Schema.optional(GoogleCloudDialogflowCxV3DtmfInput),
    toolCallResult: Schema.optional(GoogleCloudDialogflowCxV3ToolCallResult),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3QueryInput" });

export interface GoogleCloudDialogflowCxV3ConversationTurnUserInput {
  input?: GoogleCloudDialogflowCxV3QueryInput;
  injectedParameters?: Record<string, unknown>;
  isWebhookEnabled?: boolean;
  enableSentimentAnalysis?: boolean;
}

export const GoogleCloudDialogflowCxV3ConversationTurnUserInput =
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

export const GoogleCloudDialogflowCxV3TestRunDifference =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TestRunDifference" });

export interface GoogleCloudDialogflowCxV3IntentTrainingPhrasePart {
  text?: string;
  parameterId?: string;
}

export const GoogleCloudDialogflowCxV3IntentTrainingPhrasePart =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    parameterId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3IntentTrainingPhrasePart",
  });

export interface GoogleCloudDialogflowCxV3IntentTrainingPhrase {
  id?: string;
  parts?: ReadonlyArray<GoogleCloudDialogflowCxV3IntentTrainingPhrasePart>;
  repeatCount?: number;
}

export const GoogleCloudDialogflowCxV3IntentTrainingPhrase =
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

export const GoogleCloudDialogflowCxV3IntentParameter =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    entityType: Schema.optional(Schema.String),
    isList: Schema.optional(Schema.Boolean),
    redact: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3IntentParameter" });

export interface GoogleCloudDialogflowCxV3Intent {
  name?: string;
  displayName?: string;
  trainingPhrases?: ReadonlyArray<GoogleCloudDialogflowCxV3IntentTrainingPhrase>;
  parameters?: ReadonlyArray<GoogleCloudDialogflowCxV3IntentParameter>;
  priority?: number;
  isFallback?: boolean;
  labels?: Record<string, string>;
  description?: string;
  dtmfPattern?: string;
}

export const GoogleCloudDialogflowCxV3Intent =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    trainingPhrases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3IntentTrainingPhrase),
    ),
    parameters: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3IntentParameter),
    ),
    priority: Schema.optional(Schema.Number),
    isFallback: Schema.optional(Schema.Boolean),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    description: Schema.optional(Schema.String),
    dtmfPattern: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Intent" });

export interface GoogleCloudDialogflowCxV3FulfillmentSetParameterAction {
  parameter?: string;
  value?: unknown;
}

export const GoogleCloudDialogflowCxV3FulfillmentSetParameterAction =
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

export interface GoogleCloudDialogflowCxV3GcsDestination {
  uri?: string;
}

export const GoogleCloudDialogflowCxV3GcsDestination =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3GcsDestination" });

export interface GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings {
  endpointerSensitivity?: number;
  noSpeechTimeout?: string;
  useTimeoutBasedEndpointing?: boolean;
  models?: Record<string, string>;
}

export const GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpointerSensitivity: Schema.optional(Schema.Number),
    noSpeechTimeout: Schema.optional(Schema.String),
    useTimeoutBasedEndpointing: Schema.optional(Schema.Boolean),
    models: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings",
  });

export interface GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings {
  enabled?: boolean;
  maxDigits?: number;
  finishDigit?: string;
  interdigitTimeoutDuration?: string;
  endpointingTimeoutDuration?: string;
}

export const GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    maxDigits: Schema.optional(Schema.Number),
    finishDigit: Schema.optional(Schema.String),
    interdigitTimeoutDuration: Schema.optional(Schema.String),
    endpointingTimeoutDuration: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings",
  });

export interface GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings {
  enableStackdriverLogging?: boolean;
  enableInteractionLogging?: boolean;
  enableConsentBasedRedaction?: boolean;
}

export const GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableStackdriverLogging: Schema.optional(Schema.Boolean),
    enableInteractionLogging: Schema.optional(Schema.Boolean),
    enableConsentBasedRedaction: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings",
  });

export interface GoogleCloudDialogflowCxV3AdvancedSettings {
  audioExportGcsDestination?: GoogleCloudDialogflowCxV3GcsDestination;
  speechSettings?: GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings;
  dtmfSettings?: GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings;
  loggingSettings?: GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings;
}

export const GoogleCloudDialogflowCxV3AdvancedSettings =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audioExportGcsDestination: Schema.optional(
      GoogleCloudDialogflowCxV3GcsDestination,
    ),
    speechSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettingsSpeechSettings,
    ),
    dtmfSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings,
    ),
    loggingSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3AdvancedSettings" });

export interface GoogleCloudDialogflowCxV3FulfillmentGeneratorSettings {
  generator?: string;
  inputParameters?: Record<string, string>;
  outputParameter?: string;
}

export const GoogleCloudDialogflowCxV3FulfillmentGeneratorSettings =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generator: Schema.optional(Schema.String),
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    outputParameter: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3FulfillmentGeneratorSettings",
  });

export interface GoogleCloudDialogflowCxV3Fulfillment {
  messages?: ReadonlyArray<GoogleCloudDialogflowCxV3ResponseMessage>;
  webhook?: string;
  returnPartialResponses?: boolean;
  tag?: string;
  setParameterActions?: ReadonlyArray<GoogleCloudDialogflowCxV3FulfillmentSetParameterAction>;
  conditionalCases?: ReadonlyArray<GoogleCloudDialogflowCxV3FulfillmentConditionalCases>;
  advancedSettings?: GoogleCloudDialogflowCxV3AdvancedSettings;
  enableGenerativeFallback?: boolean;
  generators?: ReadonlyArray<GoogleCloudDialogflowCxV3FulfillmentGeneratorSettings>;
}

export const GoogleCloudDialogflowCxV3Fulfillment =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ResponseMessage),
    ),
    webhook: Schema.optional(Schema.String),
    returnPartialResponses: Schema.optional(Schema.Boolean),
    tag: Schema.optional(Schema.String),
    setParameterActions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3FulfillmentSetParameterAction),
    ),
    conditionalCases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3FulfillmentConditionalCases),
    ),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettings,
    ),
    enableGenerativeFallback: Schema.optional(Schema.Boolean),
    generators: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3FulfillmentGeneratorSettings),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Fulfillment" });

export interface GoogleCloudDialogflowCxV3EventHandler {
  name?: string;
  event?: string;
  triggerFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
  targetPage?: string;
  targetFlow?: string;
  targetPlaybook?: string;
}

export const GoogleCloudDialogflowCxV3EventHandler =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    event: Schema.optional(Schema.String),
    triggerFulfillment: Schema.optional(GoogleCloudDialogflowCxV3Fulfillment),
    targetPage: Schema.optional(Schema.String),
    targetFlow: Schema.optional(Schema.String),
    targetPlaybook: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3EventHandler" });

export interface GoogleCloudDialogflowCxV3FormParameterFillBehavior {
  initialPromptFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
  repromptEventHandlers?: ReadonlyArray<GoogleCloudDialogflowCxV3EventHandler>;
}

export const GoogleCloudDialogflowCxV3FormParameterFillBehavior =
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
  displayName?: string;
  required?: boolean;
  entityType?: string;
  isList?: boolean;
  fillBehavior?: GoogleCloudDialogflowCxV3FormParameterFillBehavior;
  defaultValue?: unknown;
  redact?: boolean;
  advancedSettings?: GoogleCloudDialogflowCxV3AdvancedSettings;
}

export const GoogleCloudDialogflowCxV3FormParameter =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    required: Schema.optional(Schema.Boolean),
    entityType: Schema.optional(Schema.String),
    isList: Schema.optional(Schema.Boolean),
    fillBehavior: Schema.optional(
      GoogleCloudDialogflowCxV3FormParameterFillBehavior,
    ),
    defaultValue: Schema.optional(Schema.Unknown),
    redact: Schema.optional(Schema.Boolean),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettings,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3FormParameter" });

export interface GoogleCloudDialogflowCxV3Form {
  parameters?: ReadonlyArray<GoogleCloudDialogflowCxV3FormParameter>;
}

export const GoogleCloudDialogflowCxV3Form =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameters: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3FormParameter),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Form" });

export interface GoogleCloudDialogflowCxV3TransitionRoute {
  name?: string;
  description?: string;
  intent?: string;
  condition?: string;
  triggerFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
  targetPage?: string;
  targetFlow?: string;
}

export const GoogleCloudDialogflowCxV3TransitionRoute =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    intent: Schema.optional(Schema.String),
    condition: Schema.optional(Schema.String),
    triggerFulfillment: Schema.optional(GoogleCloudDialogflowCxV3Fulfillment),
    targetPage: Schema.optional(Schema.String),
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

export const GoogleCloudDialogflowCxV3DataStoreConnection =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataStoreType: Schema.optional(Schema.String),
    dataStore: Schema.optional(Schema.String),
    documentProcessingMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3DataStoreConnection" });

export interface GoogleCloudDialogflowCxV3KnowledgeConnectorSettings {
  enabled?: boolean;
  triggerFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
  targetPage?: string;
  targetFlow?: string;
  dataStoreConnections?: ReadonlyArray<GoogleCloudDialogflowCxV3DataStoreConnection>;
}

export const GoogleCloudDialogflowCxV3KnowledgeConnectorSettings =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    triggerFulfillment: Schema.optional(GoogleCloudDialogflowCxV3Fulfillment),
    targetPage: Schema.optional(Schema.String),
    targetFlow: Schema.optional(Schema.String),
    dataStoreConnections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3DataStoreConnection),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3KnowledgeConnectorSettings",
  });

export interface GoogleCloudDialogflowCxV3Page {
  name?: string;
  displayName?: string;
  description?: string;
  entryFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
  form?: GoogleCloudDialogflowCxV3Form;
  transitionRouteGroups?: ReadonlyArray<string>;
  transitionRoutes?: ReadonlyArray<GoogleCloudDialogflowCxV3TransitionRoute>;
  eventHandlers?: ReadonlyArray<GoogleCloudDialogflowCxV3EventHandler>;
  advancedSettings?: GoogleCloudDialogflowCxV3AdvancedSettings;
  knowledgeConnectorSettings?: GoogleCloudDialogflowCxV3KnowledgeConnectorSettings;
}

export const GoogleCloudDialogflowCxV3Page =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    entryFulfillment: Schema.optional(GoogleCloudDialogflowCxV3Fulfillment),
    form: Schema.optional(GoogleCloudDialogflowCxV3Form),
    transitionRouteGroups: Schema.optional(Schema.Array(Schema.String)),
    transitionRoutes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3TransitionRoute),
    ),
    eventHandlers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3EventHandler),
    ),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3AdvancedSettings,
    ),
    knowledgeConnectorSettings: Schema.optional(
      GoogleCloudDialogflowCxV3KnowledgeConnectorSettings,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Page" });

export interface GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput {
  sessionParameters?: Record<string, unknown>;
  differences?: ReadonlyArray<GoogleCloudDialogflowCxV3TestRunDifference>;
  diagnosticInfo?: Record<string, unknown>;
  triggeredIntent?: GoogleCloudDialogflowCxV3Intent;
  currentPage?: GoogleCloudDialogflowCxV3Page;
  textResponses?: ReadonlyArray<GoogleCloudDialogflowCxV3ResponseMessageText>;
  status?: GoogleRpcStatus;
}

export const GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    differences: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3TestRunDifference),
    ),
    diagnosticInfo: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    triggeredIntent: Schema.optional(GoogleCloudDialogflowCxV3Intent),
    currentPage: Schema.optional(GoogleCloudDialogflowCxV3Page),
    textResponses: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ResponseMessageText),
    ),
    status: Schema.optional(GoogleRpcStatus),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput",
  });

export interface GoogleCloudDialogflowCxV3ConversationTurn {
  userInput?: GoogleCloudDialogflowCxV3ConversationTurnUserInput;
  virtualAgentOutput?: GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput;
}

export const GoogleCloudDialogflowCxV3ConversationTurn =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userInput: Schema.optional(
      GoogleCloudDialogflowCxV3ConversationTurnUserInput,
    ),
    virtualAgentOutput: Schema.optional(
      GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ConversationTurn" });

export interface GoogleCloudDialogflowCxV3TestCaseResult {
  name?: string;
  environment?: string;
  conversationTurns?: ReadonlyArray<GoogleCloudDialogflowCxV3ConversationTurn>;
  testResult?: "TEST_RESULT_UNSPECIFIED" | "PASSED" | "FAILED" | (string & {});
  testTime?: string;
}

export const GoogleCloudDialogflowCxV3TestCaseResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    environment: Schema.optional(Schema.String),
    conversationTurns: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ConversationTurn),
    ),
    testResult: Schema.optional(Schema.String),
    testTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TestCaseResult" });

export interface GoogleCloudDialogflowCxV3BatchRunTestCasesResponse {
  results?: ReadonlyArray<GoogleCloudDialogflowCxV3TestCaseResult>;
}

export const GoogleCloudDialogflowCxV3BatchRunTestCasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3TestCaseResult),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3BatchRunTestCasesResponse",
  });

export interface GoogleCloudDialogflowCxV3RunTestCaseMetadata {}

export const GoogleCloudDialogflowCxV3RunTestCaseMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3RunTestCaseMetadata",
  });

export interface GoogleCloudDialogflowCxV3RunTestCaseResponse {
  result?: GoogleCloudDialogflowCxV3TestCaseResult;
}

export const GoogleCloudDialogflowCxV3RunTestCaseResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.optional(GoogleCloudDialogflowCxV3TestCaseResult),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3RunTestCaseResponse" });

export interface GoogleCloudDialogflowCxV3ExportTestCasesMetadata {}

export const GoogleCloudDialogflowCxV3ExportTestCasesMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3ExportTestCasesMetadata",
  });

export interface GoogleCloudDialogflowCxV3ExportTestCasesResponse {
  gcsUri?: string;
  content?: string;
}

export const GoogleCloudDialogflowCxV3ExportTestCasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsUri: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ExportTestCasesResponse",
  });

export interface GoogleCloudDialogflowCxV3TestConfig {
  trackingParameters?: ReadonlyArray<string>;
  flow?: string;
  page?: string;
}

export const GoogleCloudDialogflowCxV3TestConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trackingParameters: Schema.optional(Schema.Array(Schema.String)),
    flow: Schema.optional(Schema.String),
    page: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TestConfig" });

export interface GoogleCloudDialogflowCxV3TestCase {
  name?: string;
  tags?: ReadonlyArray<string>;
  displayName?: string;
  notes?: string;
  testConfig?: GoogleCloudDialogflowCxV3TestConfig;
  testCaseConversationTurns?: ReadonlyArray<GoogleCloudDialogflowCxV3ConversationTurn>;
  creationTime?: string;
  lastTestResult?: GoogleCloudDialogflowCxV3TestCaseResult;
}

export const GoogleCloudDialogflowCxV3TestCase =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.String)),
    displayName: Schema.optional(Schema.String),
    notes: Schema.optional(Schema.String),
    testConfig: Schema.optional(GoogleCloudDialogflowCxV3TestConfig),
    testCaseConversationTurns: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3ConversationTurn),
    ),
    creationTime: Schema.optional(Schema.String),
    lastTestResult: Schema.optional(GoogleCloudDialogflowCxV3TestCaseResult),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TestCase" });

export interface GoogleCloudDialogflowCxV3TestCaseError {
  testCase?: GoogleCloudDialogflowCxV3TestCase;
  status?: GoogleRpcStatus;
}

export const GoogleCloudDialogflowCxV3TestCaseError =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testCase: Schema.optional(GoogleCloudDialogflowCxV3TestCase),
    status: Schema.optional(GoogleRpcStatus),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TestCaseError" });

export interface GoogleCloudDialogflowCxV3ImportTestCasesMetadata {
  errors?: ReadonlyArray<GoogleCloudDialogflowCxV3TestCaseError>;
}

export const GoogleCloudDialogflowCxV3ImportTestCasesMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3TestCaseError),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ImportTestCasesMetadata",
  });

export interface GoogleCloudDialogflowCxV3ImportTestCasesResponse {
  names?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3ImportTestCasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3ImportTestCasesResponse",
  });

export interface GoogleCloudDialogflowCxV3RunContinuousTestMetadata {
  errors?: ReadonlyArray<GoogleCloudDialogflowCxV3TestError>;
}

export const GoogleCloudDialogflowCxV3RunContinuousTestMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(GoogleCloudDialogflowCxV3TestError)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3RunContinuousTestMetadata",
  });

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

export const GoogleCloudDialogflowCxV3ContinuousTestResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    result: Schema.optional(Schema.String),
    testCaseResults: Schema.optional(Schema.Array(Schema.String)),
    runTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ContinuousTestResult" });

export interface GoogleCloudDialogflowCxV3RunContinuousTestResponse {
  continuousTestResult?: GoogleCloudDialogflowCxV3ContinuousTestResult;
}

export const GoogleCloudDialogflowCxV3RunContinuousTestResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    continuousTestResult: Schema.optional(
      GoogleCloudDialogflowCxV3ContinuousTestResult,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3RunContinuousTestResponse",
  });

export interface GoogleCloudDialogflowCxV3DeployFlowMetadata {
  testErrors?: ReadonlyArray<GoogleCloudDialogflowCxV3TestError>;
}

export const GoogleCloudDialogflowCxV3DeployFlowMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testErrors: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3TestError),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3DeployFlowMetadata" });

export interface GoogleCloudDialogflowCxV3EnvironmentVersionConfig {
  version?: string;
}

export const GoogleCloudDialogflowCxV3EnvironmentVersionConfig =
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

export const GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testCases: Schema.optional(Schema.Array(Schema.String)),
    enableContinuousRun: Schema.optional(Schema.Boolean),
    enablePredeploymentRun: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig",
  });

export interface GoogleCloudDialogflowCxV3WebhookGenericWebServiceSecretVersionHeaderValue {
  secretVersion?: string;
}

export const GoogleCloudDialogflowCxV3WebhookGenericWebServiceSecretVersionHeaderValue =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    secretVersion: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3WebhookGenericWebServiceSecretVersionHeaderValue",
  });

export interface GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig {
  clientId?: string;
  clientSecret?: string;
  secretVersionForClientSecret?: string;
  tokenEndpoint?: string;
  scopes?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientId: Schema.optional(Schema.String),
    clientSecret: Schema.optional(Schema.String),
    secretVersionForClientSecret: Schema.optional(Schema.String),
    tokenEndpoint: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig",
  });

export interface GoogleCloudDialogflowCxV3WebhookGenericWebServiceServiceAccountAuthConfig {
  serviceAccount?: string;
}

export const GoogleCloudDialogflowCxV3WebhookGenericWebServiceServiceAccountAuthConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAccount: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3WebhookGenericWebServiceServiceAccountAuthConfig",
  });

export interface GoogleCloudDialogflowCxV3WebhookGenericWebService {
  uri?: string;
  username?: string;
  password?: string;
  secretVersionForUsernamePassword?: string;
  requestHeaders?: Record<string, string>;
  secretVersionsForRequestHeaders?: Record<
    string,
    GoogleCloudDialogflowCxV3WebhookGenericWebServiceSecretVersionHeaderValue
  >;
  allowedCaCerts?: ReadonlyArray<string>;
  oauthConfig?: GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig;
  serviceAgentAuth?:
    | "SERVICE_AGENT_AUTH_UNSPECIFIED"
    | "NONE"
    | "ID_TOKEN"
    | "ACCESS_TOKEN"
    | (string & {});
  serviceAccountAuthConfig?: GoogleCloudDialogflowCxV3WebhookGenericWebServiceServiceAccountAuthConfig;
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
  requestBody?: string;
  parameterMapping?: Record<string, string>;
}

export const GoogleCloudDialogflowCxV3WebhookGenericWebService =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    secretVersionForUsernamePassword: Schema.optional(Schema.String),
    requestHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    secretVersionsForRequestHeaders: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowCxV3WebhookGenericWebServiceSecretVersionHeaderValue,
      ),
    ),
    allowedCaCerts: Schema.optional(Schema.Array(Schema.String)),
    oauthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookGenericWebServiceOAuthConfig,
    ),
    serviceAgentAuth: Schema.optional(Schema.String),
    serviceAccountAuthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookGenericWebServiceServiceAccountAuthConfig,
    ),
    webhookType: Schema.optional(Schema.String),
    httpMethod: Schema.optional(Schema.String),
    requestBody: Schema.optional(Schema.String),
    parameterMapping: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3WebhookGenericWebService",
  });

export interface GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig {
  service?: string;
  genericWebService?: GoogleCloudDialogflowCxV3WebhookGenericWebService;
}

export const GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig =
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
  displayName?: string;
  genericWebService?: GoogleCloudDialogflowCxV3WebhookGenericWebService;
  serviceDirectory?: GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig;
  timeout?: string;
  disabled?: boolean;
}

export const GoogleCloudDialogflowCxV3Webhook =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    genericWebService: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookGenericWebService,
    ),
    serviceDirectory: Schema.optional(
      GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig,
    ),
    timeout: Schema.optional(Schema.String),
    disabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3Webhook" });

export interface GoogleCloudDialogflowCxV3EnvironmentWebhookConfig {
  webhookOverrides?: ReadonlyArray<GoogleCloudDialogflowCxV3Webhook>;
}

export const GoogleCloudDialogflowCxV3EnvironmentWebhookConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webhookOverrides: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3Webhook),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3EnvironmentWebhookConfig",
  });

export interface GoogleCloudDialogflowCxV3Environment {
  name?: string;
  displayName?: string;
  description?: string;
  versionConfigs?: ReadonlyArray<GoogleCloudDialogflowCxV3EnvironmentVersionConfig>;
  updateTime?: string;
  testCasesConfig?: GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig;
  webhookConfig?: GoogleCloudDialogflowCxV3EnvironmentWebhookConfig;
}

export const GoogleCloudDialogflowCxV3Environment =
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

export interface GoogleCloudDialogflowCxV3DeployFlowResponse {
  environment?: GoogleCloudDialogflowCxV3Environment;
  deployment?: string;
}

export const GoogleCloudDialogflowCxV3DeployFlowResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    environment: Schema.optional(GoogleCloudDialogflowCxV3Environment),
    deployment: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3DeployFlowResponse" });

export interface GoogleCloudDialogflowCxV3TurnSignals {
  noMatch?: boolean;
  noUserInput?: boolean;
  dtmfUsed?: boolean;
  userEscalated?: boolean;
  agentEscalated?: boolean;
  reachedEndPage?: boolean;
  webhookStatuses?: ReadonlyArray<string>;
  failureReasons?: ReadonlyArray<
    | "FAILURE_REASON_UNSPECIFIED"
    | "FAILED_INTENT"
    | "FAILED_WEBHOOK"
    | (string & {})
  >;
  sentimentScore?: number;
  sentimentMagnitude?: number;
}

export const GoogleCloudDialogflowCxV3TurnSignals =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    noMatch: Schema.optional(Schema.Boolean),
    noUserInput: Schema.optional(Schema.Boolean),
    dtmfUsed: Schema.optional(Schema.Boolean),
    userEscalated: Schema.optional(Schema.Boolean),
    agentEscalated: Schema.optional(Schema.Boolean),
    reachedEndPage: Schema.optional(Schema.Boolean),
    webhookStatuses: Schema.optional(Schema.Array(Schema.String)),
    failureReasons: Schema.optional(Schema.Array(Schema.String)),
    sentimentScore: Schema.optional(Schema.Number),
    sentimentMagnitude: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3TurnSignals" });

export interface GoogleCloudDialogflowCxV3ConversationSignals {
  turnSignals?: GoogleCloudDialogflowCxV3TurnSignals;
}

export const GoogleCloudDialogflowCxV3ConversationSignals =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    turnSignals: Schema.optional(GoogleCloudDialogflowCxV3TurnSignals),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3ConversationSignals" });

export interface GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata {
  version?: string;
}

export const GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportAgentResponse {
  agentUri?: string;
  agentContent?: string;
  commitSha?: string;
}

export const GoogleCloudDialogflowCxV3beta1ExportAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentUri: Schema.optional(Schema.String),
    agentContent: Schema.optional(Schema.String),
    commitSha: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportAgentResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportFlowResponse {
  flowUri?: string;
  flowContent?: string;
}

export const GoogleCloudDialogflowCxV3beta1ExportFlowResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flowUri: Schema.optional(Schema.String),
    flowContent: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportFlowResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportIntentsMetadata {}

export const GoogleCloudDialogflowCxV3beta1ExportIntentsMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportIntentsMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1InlineDestination {
  content?: string;
}

export const GoogleCloudDialogflowCxV3beta1InlineDestination =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1InlineDestination",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportIntentsResponse {
  intentsUri?: string;
  intentsContent?: GoogleCloudDialogflowCxV3beta1InlineDestination;
}

export const GoogleCloudDialogflowCxV3beta1ExportIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intentsUri: Schema.optional(Schema.String),
    intentsContent: Schema.optional(
      GoogleCloudDialogflowCxV3beta1InlineDestination,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportIntentsResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1ImportFlowResponse {
  flow?: string;
}

export const GoogleCloudDialogflowCxV3beta1ImportFlowResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flow: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportFlowResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1ImportEntityTypesMetadata {}

export const GoogleCloudDialogflowCxV3beta1ImportEntityTypesMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportEntityTypesMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1ImportEntityTypesResponseConflictingResources {
  entityTypeDisplayNames?: ReadonlyArray<string>;
  entityDisplayNames?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1ImportEntityTypesResponseConflictingResources =
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

export const GoogleCloudDialogflowCxV3beta1ImportEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypes: Schema.optional(Schema.Array(Schema.String)),
    conflictingResources: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ImportEntityTypesResponseConflictingResources,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportEntityTypesResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportEntityTypesMetadata {}

export const GoogleCloudDialogflowCxV3beta1ExportEntityTypesMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportEntityTypesMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportEntityTypesResponse {
  entityTypesUri?: string;
  entityTypesContent?: GoogleCloudDialogflowCxV3beta1InlineDestination;
}

export const GoogleCloudDialogflowCxV3beta1ExportEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypesUri: Schema.optional(Schema.String),
    entityTypesContent: Schema.optional(
      GoogleCloudDialogflowCxV3beta1InlineDestination,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportEntityTypesResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1ImportIntentsMetadata {}

export const GoogleCloudDialogflowCxV3beta1ImportIntentsMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportIntentsMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResources {
  intentDisplayNames?: ReadonlyArray<string>;
  entityDisplayNames?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResources =
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

export const GoogleCloudDialogflowCxV3beta1ImportIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intents: Schema.optional(Schema.Array(Schema.String)),
    conflictingResources: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResources,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportIntentsResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo {
  tag?: string;
}

export const GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tag: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue {
  originalValue?: string;
  resolvedValue?: unknown;
}

export const GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    originalValue: Schema.optional(Schema.String),
    resolvedValue: Schema.optional(Schema.Unknown),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo {
  lastMatchedIntent?: string;
  displayName?: string;
  parameters?: Record<
    string,
    GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue
  >;
  confidence?: number;
}

export const GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastMatchedIntent: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    parameters: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue,
      ),
    ),
    confidence: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo",
  });

export interface GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo {
  displayName?: string;
  required?: boolean;
  state?:
    | "PARAMETER_STATE_UNSPECIFIED"
    | "EMPTY"
    | "INVALID"
    | "FILLED"
    | (string & {});
  value?: unknown;
  justCollected?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    required: Schema.optional(Schema.Boolean),
    state: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Unknown),
    justCollected: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo",
  });

export interface GoogleCloudDialogflowCxV3beta1PageInfoFormInfo {
  parameterInfo?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo>;
}

export const GoogleCloudDialogflowCxV3beta1PageInfoFormInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameterInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1PageInfoFormInfo" });

export interface GoogleCloudDialogflowCxV3beta1PageInfo {
  currentPage?: string;
  displayName?: string;
  formInfo?: GoogleCloudDialogflowCxV3beta1PageInfoFormInfo;
}

export const GoogleCloudDialogflowCxV3beta1PageInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currentPage: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    formInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1PageInfoFormInfo),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1PageInfo" });

export interface GoogleCloudDialogflowCxV3beta1SessionInfo {
  session?: string;
  parameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3beta1SessionInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1SessionInfo" });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageText {
  text?: ReadonlyArray<string>;
  allowPlaybackInterruption?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageText =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.Array(Schema.String)),
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ResponseMessageText",
  });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess {
  metadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess",
  });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText {
  text?: string;
  ssml?: string;
  allowPlaybackInterruption?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    ssml: Schema.optional(Schema.String),
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText",
  });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff {
  metadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff",
  });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction {}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction",
  });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio {
  audioUri?: string;
  allowPlaybackInterruption?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audioUri: Schema.optional(Schema.String),
    allowPlaybackInterruption: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio",
  });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment {
  audio?: string;
  uri?: string;
  allowPlaybackInterruption?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    segments: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio",
  });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall {
  phoneNumber?: string;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    phoneNumber: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall",
  });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard {}

export const GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard",
  });

export interface GoogleCloudDialogflowCxV3beta1ToolCall {
  tool?: string;
  action?: string;
  inputParameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowCxV3beta1ToolCall =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tool: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ToolCall" });

export interface GoogleCloudDialogflowCxV3beta1ResponseMessage {
  text?: GoogleCloudDialogflowCxV3beta1ResponseMessageText;
  payload?: Record<string, unknown>;
  conversationSuccess?: GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess;
  outputAudioText?: GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText;
  liveAgentHandoff?: GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff;
  endInteraction?: GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction;
  playAudio?: GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio;
  mixedAudio?: GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio;
  telephonyTransferCall?: GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall;
  knowledgeInfoCard?: GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard;
  toolCall?: GoogleCloudDialogflowCxV3beta1ToolCall;
  channel?: string;
}

export const GoogleCloudDialogflowCxV3beta1ResponseMessage =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(GoogleCloudDialogflowCxV3beta1ResponseMessageText),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    conversationSuccess: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess,
    ),
    outputAudioText: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText,
    ),
    liveAgentHandoff: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff,
    ),
    endInteraction: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction,
    ),
    playAudio: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio,
    ),
    mixedAudio: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio,
    ),
    telephonyTransferCall: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall,
    ),
    knowledgeInfoCard: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard,
    ),
    toolCall: Schema.optional(GoogleCloudDialogflowCxV3beta1ToolCall),
    channel: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ResponseMessage" });

export interface GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult {
  score?: number;
  magnitude?: number;
}

export const GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.Number),
    magnitude: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult",
  });

export interface GoogleCloudDialogflowCxV3beta1LanguageInfo {
  inputLanguageCode?: string;
  resolvedLanguageCode?: string;
  confidenceScore?: number;
}

export const GoogleCloudDialogflowCxV3beta1LanguageInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputLanguageCode: Schema.optional(Schema.String),
    resolvedLanguageCode: Schema.optional(Schema.String),
    confidenceScore: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1LanguageInfo" });

export interface GoogleCloudDialogflowCxV3beta1WebhookRequest {
  detectIntentResponseId?: string;
  text?: string;
  triggerIntent?: string;
  transcript?: string;
  triggerEvent?: string;
  dtmfDigits?: string;
  languageCode?: string;
  fulfillmentInfo?: GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo;
  intentInfo?: GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo;
  pageInfo?: GoogleCloudDialogflowCxV3beta1PageInfo;
  sessionInfo?: GoogleCloudDialogflowCxV3beta1SessionInfo;
  messages?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ResponseMessage>;
  payload?: Record<string, unknown>;
  sentimentAnalysisResult?: GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult;
  languageInfo?: GoogleCloudDialogflowCxV3beta1LanguageInfo;
}

export const GoogleCloudDialogflowCxV3beta1WebhookRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detectIntentResponseId: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
    triggerIntent: Schema.optional(Schema.String),
    transcript: Schema.optional(Schema.String),
    triggerEvent: Schema.optional(Schema.String),
    dtmfDigits: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    fulfillmentInfo: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo,
    ),
    intentInfo: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo,
    ),
    pageInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1PageInfo),
    sessionInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1SessionInfo),
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ResponseMessage),
    ),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    sentimentAnalysisResult: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult,
    ),
    languageInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1LanguageInfo),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1WebhookRequest" });

export interface GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse {
  messages?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ResponseMessage>;
  mergeBehavior?:
    | "MERGE_BEHAVIOR_UNSPECIFIED"
    | "APPEND"
    | "REPLACE"
    | (string & {});
}

export const GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ResponseMessage),
    ),
    mergeBehavior: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookResponse {
  fulfillmentResponse?: GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse;
  pageInfo?: GoogleCloudDialogflowCxV3beta1PageInfo;
  sessionInfo?: GoogleCloudDialogflowCxV3beta1SessionInfo;
  payload?: Record<string, unknown>;
  targetPage?: string;
  targetFlow?: string;
}

export const GoogleCloudDialogflowCxV3beta1WebhookResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fulfillmentResponse: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse,
    ),
    pageInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1PageInfo),
    sessionInfo: Schema.optional(GoogleCloudDialogflowCxV3beta1SessionInfo),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    targetPage: Schema.optional(Schema.String),
    targetFlow: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1WebhookResponse" });

export interface GoogleCloudDialogflowCxV3beta1TestError {
  testCase?: string;
  status?: GoogleRpcStatus;
  testTime?: string;
}

export const GoogleCloudDialogflowCxV3beta1TestError =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testCase: Schema.optional(Schema.String),
    status: Schema.optional(GoogleRpcStatus),
    testTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TestError" });

export interface GoogleCloudDialogflowCxV3beta1BatchRunTestCasesMetadata {
  errors?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TestError>;
}

export const GoogleCloudDialogflowCxV3beta1BatchRunTestCasesMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TestError),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1BatchRunTestCasesMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1TextInput {
  text?: string;
}

export const GoogleCloudDialogflowCxV3beta1TextInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TextInput" });

export interface GoogleCloudDialogflowCxV3beta1IntentInput {
  intent?: string;
}

export const GoogleCloudDialogflowCxV3beta1IntentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1IntentInput" });

export interface GoogleCloudDialogflowCxV3beta1BargeInConfig {
  noBargeInDuration?: string;
  totalDuration?: string;
}

export const GoogleCloudDialogflowCxV3beta1BargeInConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    noBargeInDuration: Schema.optional(Schema.String),
    totalDuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1BargeInConfig" });

export interface GoogleCloudDialogflowCxV3beta1InputAudioConfig {
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
  phraseHints?: ReadonlyArray<string>;
  model?: string;
  modelVariant?:
    | "SPEECH_MODEL_VARIANT_UNSPECIFIED"
    | "USE_BEST_AVAILABLE"
    | "USE_STANDARD"
    | "USE_ENHANCED"
    | (string & {});
  singleUtterance?: boolean;
  bargeInConfig?: GoogleCloudDialogflowCxV3beta1BargeInConfig;
  optOutConformerModelMigration?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1InputAudioConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audioEncoding: Schema.optional(Schema.String),
    sampleRateHertz: Schema.optional(Schema.Number),
    enableWordInfo: Schema.optional(Schema.Boolean),
    phraseHints: Schema.optional(Schema.Array(Schema.String)),
    model: Schema.optional(Schema.String),
    modelVariant: Schema.optional(Schema.String),
    singleUtterance: Schema.optional(Schema.Boolean),
    bargeInConfig: Schema.optional(GoogleCloudDialogflowCxV3beta1BargeInConfig),
    optOutConformerModelMigration: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1InputAudioConfig" });

export interface GoogleCloudDialogflowCxV3beta1AudioInput {
  config?: GoogleCloudDialogflowCxV3beta1InputAudioConfig;
  audio?: string;
}

export const GoogleCloudDialogflowCxV3beta1AudioInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    config: Schema.optional(GoogleCloudDialogflowCxV3beta1InputAudioConfig),
    audio: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1AudioInput" });

export interface GoogleCloudDialogflowCxV3beta1EventInput {
  event?: string;
}

export const GoogleCloudDialogflowCxV3beta1EventInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    event: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1EventInput" });

export interface GoogleCloudDialogflowCxV3beta1DtmfInput {
  digits?: string;
  finishDigit?: string;
}

export const GoogleCloudDialogflowCxV3beta1DtmfInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    digits: Schema.optional(Schema.String),
    finishDigit: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1DtmfInput" });

export interface GoogleCloudDialogflowCxV3beta1ToolCallResultError {
  message?: string;
}

export const GoogleCloudDialogflowCxV3beta1ToolCallResultError =
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

export const GoogleCloudDialogflowCxV3beta1ToolCallResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tool: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    error: Schema.optional(GoogleCloudDialogflowCxV3beta1ToolCallResultError),
    outputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1ToolCallResult" });

export interface GoogleCloudDialogflowCxV3beta1QueryInput {
  text?: GoogleCloudDialogflowCxV3beta1TextInput;
  intent?: GoogleCloudDialogflowCxV3beta1IntentInput;
  audio?: GoogleCloudDialogflowCxV3beta1AudioInput;
  event?: GoogleCloudDialogflowCxV3beta1EventInput;
  dtmf?: GoogleCloudDialogflowCxV3beta1DtmfInput;
  toolCallResult?: GoogleCloudDialogflowCxV3beta1ToolCallResult;
  languageCode?: string;
}

export const GoogleCloudDialogflowCxV3beta1QueryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(GoogleCloudDialogflowCxV3beta1TextInput),
    intent: Schema.optional(GoogleCloudDialogflowCxV3beta1IntentInput),
    audio: Schema.optional(GoogleCloudDialogflowCxV3beta1AudioInput),
    event: Schema.optional(GoogleCloudDialogflowCxV3beta1EventInput),
    dtmf: Schema.optional(GoogleCloudDialogflowCxV3beta1DtmfInput),
    toolCallResult: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ToolCallResult,
    ),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1QueryInput" });

export interface GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput {
  input?: GoogleCloudDialogflowCxV3beta1QueryInput;
  injectedParameters?: Record<string, unknown>;
  isWebhookEnabled?: boolean;
  enableSentimentAnalysis?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    input: Schema.optional(GoogleCloudDialogflowCxV3beta1QueryInput),
    injectedParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    isWebhookEnabled: Schema.optional(Schema.Boolean),
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

export const GoogleCloudDialogflowCxV3beta1TestRunDifference =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1TestRunDifference",
  });

export interface GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart {
  text?: string;
  parameterId?: string;
}

export const GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart =
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

export const GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    parts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart),
    ),
    repeatCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase",
  });

export interface GoogleCloudDialogflowCxV3beta1IntentParameter {
  id?: string;
  entityType?: string;
  isList?: boolean;
  redact?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1IntentParameter =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    entityType: Schema.optional(Schema.String),
    isList: Schema.optional(Schema.Boolean),
    redact: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1IntentParameter" });

export interface GoogleCloudDialogflowCxV3beta1Intent {
  name?: string;
  displayName?: string;
  trainingPhrases?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase>;
  parameters?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1IntentParameter>;
  priority?: number;
  isFallback?: boolean;
  labels?: Record<string, string>;
  description?: string;
  dtmfPattern?: string;
}

export const GoogleCloudDialogflowCxV3beta1Intent =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    trainingPhrases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase),
    ),
    parameters: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1IntentParameter),
    ),
    priority: Schema.optional(Schema.Number),
    isFallback: Schema.optional(Schema.Boolean),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    description: Schema.optional(Schema.String),
    dtmfPattern: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Intent" });

export interface GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction {
  parameter?: string;
  value?: unknown;
}

export const GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction =
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

export interface GoogleCloudDialogflowCxV3beta1GcsDestination {
  uri?: string;
}

export const GoogleCloudDialogflowCxV3beta1GcsDestination =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1GcsDestination" });

export interface GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings {
  endpointerSensitivity?: number;
  noSpeechTimeout?: string;
  useTimeoutBasedEndpointing?: boolean;
  models?: Record<string, string>;
}

export const GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpointerSensitivity: Schema.optional(Schema.Number),
    noSpeechTimeout: Schema.optional(Schema.String),
    useTimeoutBasedEndpointing: Schema.optional(Schema.Boolean),
    models: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1AdvancedSettingsSpeechSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings {
  enabled?: boolean;
  maxDigits?: number;
  finishDigit?: string;
  interdigitTimeoutDuration?: string;
  endpointingTimeoutDuration?: string;
}

export const GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    maxDigits: Schema.optional(Schema.Number),
    finishDigit: Schema.optional(Schema.String),
    interdigitTimeoutDuration: Schema.optional(Schema.String),
    endpointingTimeoutDuration: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings {
  enableStackdriverLogging?: boolean;
  enableInteractionLogging?: boolean;
  enableConsentBasedRedaction?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings =
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

export const GoogleCloudDialogflowCxV3beta1AdvancedSettings =
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

export const GoogleCloudDialogflowCxV3beta1FulfillmentGeneratorSettings =
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
  messages?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ResponseMessage>;
  webhook?: string;
  returnPartialResponses?: boolean;
  tag?: string;
  setParameterActions?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction>;
  conditionalCases?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases>;
  advancedSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettings;
  enableGenerativeFallback?: boolean;
  generators?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1FulfillmentGeneratorSettings>;
}

export const GoogleCloudDialogflowCxV3beta1Fulfillment =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ResponseMessage),
    ),
    webhook: Schema.optional(Schema.String),
    returnPartialResponses: Schema.optional(Schema.Boolean),
    tag: Schema.optional(Schema.String),
    setParameterActions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction),
    ),
    conditionalCases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases),
    ),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettings,
    ),
    enableGenerativeFallback: Schema.optional(Schema.Boolean),
    generators: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1FulfillmentGeneratorSettings),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Fulfillment" });

export interface GoogleCloudDialogflowCxV3beta1EventHandler {
  name?: string;
  event?: string;
  triggerFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
  targetPage?: string;
  targetFlow?: string;
  targetPlaybook?: string;
}

export const GoogleCloudDialogflowCxV3beta1EventHandler =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    event: Schema.optional(Schema.String),
    triggerFulfillment: Schema.optional(
      GoogleCloudDialogflowCxV3beta1Fulfillment,
    ),
    targetPage: Schema.optional(Schema.String),
    targetFlow: Schema.optional(Schema.String),
    targetPlaybook: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1EventHandler" });

export interface GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior {
  initialPromptFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
  repromptEventHandlers?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1EventHandler>;
}

export const GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior =
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
  displayName?: string;
  required?: boolean;
  entityType?: string;
  isList?: boolean;
  fillBehavior?: GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior;
  defaultValue?: unknown;
  redact?: boolean;
  advancedSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettings;
}

export const GoogleCloudDialogflowCxV3beta1FormParameter =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    required: Schema.optional(Schema.Boolean),
    entityType: Schema.optional(Schema.String),
    isList: Schema.optional(Schema.Boolean),
    fillBehavior: Schema.optional(
      GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior,
    ),
    defaultValue: Schema.optional(Schema.Unknown),
    redact: Schema.optional(Schema.Boolean),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettings,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1FormParameter" });

export interface GoogleCloudDialogflowCxV3beta1Form {
  parameters?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1FormParameter>;
}

export const GoogleCloudDialogflowCxV3beta1Form =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameters: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1FormParameter),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Form" });

export interface GoogleCloudDialogflowCxV3beta1TransitionRoute {
  name?: string;
  description?: string;
  intent?: string;
  condition?: string;
  triggerFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
  targetPage?: string;
  targetFlow?: string;
}

export const GoogleCloudDialogflowCxV3beta1TransitionRoute =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    intent: Schema.optional(Schema.String),
    condition: Schema.optional(Schema.String),
    triggerFulfillment: Schema.optional(
      GoogleCloudDialogflowCxV3beta1Fulfillment,
    ),
    targetPage: Schema.optional(Schema.String),
    targetFlow: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TransitionRoute" });

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

export const GoogleCloudDialogflowCxV3beta1DataStoreConnection =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataStoreType: Schema.optional(Schema.String),
    dataStore: Schema.optional(Schema.String),
    documentProcessingMode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1DataStoreConnection",
  });

export interface GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings {
  enabled?: boolean;
  triggerFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
  targetPage?: string;
  targetFlow?: string;
  dataStoreConnections?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1DataStoreConnection>;
}

export const GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    triggerFulfillment: Schema.optional(
      GoogleCloudDialogflowCxV3beta1Fulfillment,
    ),
    targetPage: Schema.optional(Schema.String),
    targetFlow: Schema.optional(Schema.String),
    dataStoreConnections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1DataStoreConnection),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings",
  });

export interface GoogleCloudDialogflowCxV3beta1Page {
  name?: string;
  displayName?: string;
  description?: string;
  entryFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
  form?: GoogleCloudDialogflowCxV3beta1Form;
  transitionRouteGroups?: ReadonlyArray<string>;
  transitionRoutes?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TransitionRoute>;
  eventHandlers?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1EventHandler>;
  advancedSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettings;
  knowledgeConnectorSettings?: GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings;
}

export const GoogleCloudDialogflowCxV3beta1Page =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    entryFulfillment: Schema.optional(
      GoogleCloudDialogflowCxV3beta1Fulfillment,
    ),
    form: Schema.optional(GoogleCloudDialogflowCxV3beta1Form),
    transitionRouteGroups: Schema.optional(Schema.Array(Schema.String)),
    transitionRoutes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TransitionRoute),
    ),
    eventHandlers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1EventHandler),
    ),
    advancedSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1AdvancedSettings,
    ),
    knowledgeConnectorSettings: Schema.optional(
      GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Page" });

export interface GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput {
  sessionParameters?: Record<string, unknown>;
  differences?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TestRunDifference>;
  diagnosticInfo?: Record<string, unknown>;
  triggeredIntent?: GoogleCloudDialogflowCxV3beta1Intent;
  currentPage?: GoogleCloudDialogflowCxV3beta1Page;
  textResponses?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ResponseMessageText>;
  status?: GoogleRpcStatus;
}

export const GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    differences: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TestRunDifference),
    ),
    diagnosticInfo: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    triggeredIntent: Schema.optional(GoogleCloudDialogflowCxV3beta1Intent),
    currentPage: Schema.optional(GoogleCloudDialogflowCxV3beta1Page),
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

export const GoogleCloudDialogflowCxV3beta1ConversationTurn =
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
  testResult?: "TEST_RESULT_UNSPECIFIED" | "PASSED" | "FAILED" | (string & {});
  testTime?: string;
}

export const GoogleCloudDialogflowCxV3beta1TestCaseResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    environment: Schema.optional(Schema.String),
    conversationTurns: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ConversationTurn),
    ),
    testResult: Schema.optional(Schema.String),
    testTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TestCaseResult" });

export interface GoogleCloudDialogflowCxV3beta1BatchRunTestCasesResponse {
  results?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TestCaseResult>;
}

export const GoogleCloudDialogflowCxV3beta1BatchRunTestCasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TestCaseResult),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1BatchRunTestCasesResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1RunTestCaseMetadata {}

export const GoogleCloudDialogflowCxV3beta1RunTestCaseMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RunTestCaseMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1RunTestCaseResponse {
  result?: GoogleCloudDialogflowCxV3beta1TestCaseResult;
}

export const GoogleCloudDialogflowCxV3beta1RunTestCaseResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.optional(GoogleCloudDialogflowCxV3beta1TestCaseResult),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RunTestCaseResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportTestCasesMetadata {}

export const GoogleCloudDialogflowCxV3beta1ExportTestCasesMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportTestCasesMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1ExportTestCasesResponse {
  gcsUri?: string;
  content?: string;
}

export const GoogleCloudDialogflowCxV3beta1ExportTestCasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsUri: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ExportTestCasesResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1TestConfig {
  trackingParameters?: ReadonlyArray<string>;
  flow?: string;
  page?: string;
}

export const GoogleCloudDialogflowCxV3beta1TestConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trackingParameters: Schema.optional(Schema.Array(Schema.String)),
    flow: Schema.optional(Schema.String),
    page: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TestConfig" });

export interface GoogleCloudDialogflowCxV3beta1TestCase {
  name?: string;
  tags?: ReadonlyArray<string>;
  displayName?: string;
  notes?: string;
  testConfig?: GoogleCloudDialogflowCxV3beta1TestConfig;
  testCaseConversationTurns?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1ConversationTurn>;
  creationTime?: string;
  lastTestResult?: GoogleCloudDialogflowCxV3beta1TestCaseResult;
}

export const GoogleCloudDialogflowCxV3beta1TestCase =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.String)),
    displayName: Schema.optional(Schema.String),
    notes: Schema.optional(Schema.String),
    testConfig: Schema.optional(GoogleCloudDialogflowCxV3beta1TestConfig),
    testCaseConversationTurns: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1ConversationTurn),
    ),
    creationTime: Schema.optional(Schema.String),
    lastTestResult: Schema.optional(
      GoogleCloudDialogflowCxV3beta1TestCaseResult,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TestCase" });

export interface GoogleCloudDialogflowCxV3beta1TestCaseError {
  testCase?: GoogleCloudDialogflowCxV3beta1TestCase;
  status?: GoogleRpcStatus;
}

export const GoogleCloudDialogflowCxV3beta1TestCaseError =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testCase: Schema.optional(GoogleCloudDialogflowCxV3beta1TestCase),
    status: Schema.optional(GoogleRpcStatus),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TestCaseError" });

export interface GoogleCloudDialogflowCxV3beta1ImportTestCasesMetadata {
  errors?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TestCaseError>;
}

export const GoogleCloudDialogflowCxV3beta1ImportTestCasesMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TestCaseError),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportTestCasesMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1ImportTestCasesResponse {
  names?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1ImportTestCasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ImportTestCasesResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1RunContinuousTestMetadata {
  errors?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TestError>;
}

export const GoogleCloudDialogflowCxV3beta1RunContinuousTestMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TestError),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RunContinuousTestMetadata",
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

export const GoogleCloudDialogflowCxV3beta1ContinuousTestResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    result: Schema.optional(Schema.String),
    testCaseResults: Schema.optional(Schema.Array(Schema.String)),
    runTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ContinuousTestResult",
  });

export interface GoogleCloudDialogflowCxV3beta1RunContinuousTestResponse {
  continuousTestResult?: GoogleCloudDialogflowCxV3beta1ContinuousTestResult;
}

export const GoogleCloudDialogflowCxV3beta1RunContinuousTestResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    continuousTestResult: Schema.optional(
      GoogleCloudDialogflowCxV3beta1ContinuousTestResult,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1RunContinuousTestResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1DeployFlowMetadata {
  testErrors?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1TestError>;
}

export const GoogleCloudDialogflowCxV3beta1DeployFlowMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testErrors: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1TestError),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1DeployFlowMetadata",
  });

export interface GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig {
  version?: string;
}

export const GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig",
  });

export interface GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig {
  testCases?: ReadonlyArray<string>;
  enableContinuousRun?: boolean;
  enablePredeploymentRun?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testCases: Schema.optional(Schema.Array(Schema.String)),
    enableContinuousRun: Schema.optional(Schema.Boolean),
    enablePredeploymentRun: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceSecretVersionHeaderValue {
  secretVersion?: string;
}

export const GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceSecretVersionHeaderValue =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    secretVersion: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceSecretVersionHeaderValue",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig {
  clientId?: string;
  clientSecret?: string;
  secretVersionForClientSecret?: string;
  tokenEndpoint?: string;
  scopes?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientId: Schema.optional(Schema.String),
    clientSecret: Schema.optional(Schema.String),
    secretVersionForClientSecret: Schema.optional(Schema.String),
    tokenEndpoint: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceServiceAccountAuthConfig {
  serviceAccount?: string;
}

export const GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceServiceAccountAuthConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAccount: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceServiceAccountAuthConfig",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookGenericWebService {
  uri?: string;
  username?: string;
  password?: string;
  secretVersionForUsernamePassword?: string;
  requestHeaders?: Record<string, string>;
  secretVersionsForRequestHeaders?: Record<
    string,
    GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceSecretVersionHeaderValue
  >;
  allowedCaCerts?: ReadonlyArray<string>;
  oauthConfig?: GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig;
  serviceAgentAuth?:
    | "SERVICE_AGENT_AUTH_UNSPECIFIED"
    | "NONE"
    | "ID_TOKEN"
    | "ACCESS_TOKEN"
    | (string & {});
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
  requestBody?: string;
  parameterMapping?: Record<string, string>;
}

export const GoogleCloudDialogflowCxV3beta1WebhookGenericWebService =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    secretVersionForUsernamePassword: Schema.optional(Schema.String),
    requestHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    secretVersionsForRequestHeaders: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceSecretVersionHeaderValue,
      ),
    ),
    allowedCaCerts: Schema.optional(Schema.Array(Schema.String)),
    oauthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceOAuthConfig,
    ),
    serviceAgentAuth: Schema.optional(Schema.String),
    serviceAccountAuthConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceServiceAccountAuthConfig,
    ),
    webhookType: Schema.optional(Schema.String),
    httpMethod: Schema.optional(Schema.String),
    requestBody: Schema.optional(Schema.String),
    parameterMapping: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1WebhookGenericWebService",
  });

export interface GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig {
  service?: string;
  genericWebService?: GoogleCloudDialogflowCxV3beta1WebhookGenericWebService;
}

export const GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
    genericWebService: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookGenericWebService,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig",
  });

export interface GoogleCloudDialogflowCxV3beta1Webhook {
  name?: string;
  displayName?: string;
  genericWebService?: GoogleCloudDialogflowCxV3beta1WebhookGenericWebService;
  serviceDirectory?: GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig;
  timeout?: string;
  disabled?: boolean;
}

export const GoogleCloudDialogflowCxV3beta1Webhook =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    genericWebService: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookGenericWebService,
    ),
    serviceDirectory: Schema.optional(
      GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig,
    ),
    timeout: Schema.optional(Schema.String),
    disabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Webhook" });

export interface GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig {
  webhookOverrides?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1Webhook>;
}

export const GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webhookOverrides: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1Webhook),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig",
  });

export interface GoogleCloudDialogflowCxV3beta1Environment {
  name?: string;
  displayName?: string;
  description?: string;
  versionConfigs?: ReadonlyArray<GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig>;
  updateTime?: string;
  testCasesConfig?: GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig;
  webhookConfig?: GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig;
}

export const GoogleCloudDialogflowCxV3beta1Environment =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    versionConfigs: Schema.optional(
      Schema.Array(GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig),
    ),
    updateTime: Schema.optional(Schema.String),
    testCasesConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig,
    ),
    webhookConfig: Schema.optional(
      GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1Environment" });

export interface GoogleCloudDialogflowCxV3beta1DeployFlowResponse {
  environment?: GoogleCloudDialogflowCxV3beta1Environment;
  deployment?: string;
}

export const GoogleCloudDialogflowCxV3beta1DeployFlowResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    environment: Schema.optional(GoogleCloudDialogflowCxV3beta1Environment),
    deployment: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1DeployFlowResponse",
  });

export interface GoogleCloudDialogflowCxV3beta1TurnSignals {
  noMatch?: boolean;
  noUserInput?: boolean;
  dtmfUsed?: boolean;
  userEscalated?: boolean;
  agentEscalated?: boolean;
  reachedEndPage?: boolean;
  webhookStatuses?: ReadonlyArray<string>;
  failureReasons?: ReadonlyArray<
    | "FAILURE_REASON_UNSPECIFIED"
    | "FAILED_INTENT"
    | "FAILED_WEBHOOK"
    | (string & {})
  >;
  sentimentScore?: number;
  sentimentMagnitude?: number;
}

export const GoogleCloudDialogflowCxV3beta1TurnSignals =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    noMatch: Schema.optional(Schema.Boolean),
    noUserInput: Schema.optional(Schema.Boolean),
    dtmfUsed: Schema.optional(Schema.Boolean),
    userEscalated: Schema.optional(Schema.Boolean),
    agentEscalated: Schema.optional(Schema.Boolean),
    reachedEndPage: Schema.optional(Schema.Boolean),
    webhookStatuses: Schema.optional(Schema.Array(Schema.String)),
    failureReasons: Schema.optional(Schema.Array(Schema.String)),
    sentimentScore: Schema.optional(Schema.Number),
    sentimentMagnitude: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowCxV3beta1TurnSignals" });

export interface GoogleCloudDialogflowCxV3beta1ConversationSignals {
  turnSignals?: GoogleCloudDialogflowCxV3beta1TurnSignals;
}

export const GoogleCloudDialogflowCxV3beta1ConversationSignals =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    turnSignals: Schema.optional(GoogleCloudDialogflowCxV3beta1TurnSignals),
  }).annotate({
    identifier: "GoogleCloudDialogflowCxV3beta1ConversationSignals",
  });

export interface GoogleCloudDialogflowV2BatchUpdateEntityTypesResponse {
  entityTypes?: ReadonlyArray<GoogleCloudDialogflowV2EntityType>;
}

export const GoogleCloudDialogflowV2BatchUpdateEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2EntityType),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2BatchUpdateEntityTypesResponse",
  });

export interface GoogleCloudDialogflowV2BatchUpdateIntentsResponse {
  intents?: ReadonlyArray<GoogleCloudDialogflowV2Intent>;
}

export const GoogleCloudDialogflowV2BatchUpdateIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intents: Schema.optional(Schema.Array(GoogleCloudDialogflowV2Intent)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2BatchUpdateIntentsResponse",
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

export const GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationProfile: Schema.optional(Schema.String),
    participantRole: Schema.optional(Schema.String),
    suggestionFeatureType: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadata",
  });

export interface GoogleCloudDialogflowV2SpeechWordInfo {
  word?: string;
  startOffset?: string;
  endOffset?: string;
  confidence?: number;
}

export const GoogleCloudDialogflowV2SpeechWordInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    word: Schema.optional(Schema.String),
    startOffset: Schema.optional(Schema.String),
    endOffset: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2SpeechWordInfo" });

export interface GoogleCloudDialogflowV2StreamingRecognitionResult {
  messageType?:
    | "MESSAGE_TYPE_UNSPECIFIED"
    | "TRANSCRIPT"
    | "END_OF_SINGLE_UTTERANCE"
    | (string & {});
  transcript?: string;
  isFinal?: boolean;
  confidence?: number;
  speechWordInfo?: ReadonlyArray<GoogleCloudDialogflowV2SpeechWordInfo>;
  speechEndOffset?: string;
  languageCode?: string;
}

export const GoogleCloudDialogflowV2StreamingRecognitionResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messageType: Schema.optional(Schema.String),
    transcript: Schema.optional(Schema.String),
    isFinal: Schema.optional(Schema.Boolean),
    confidence: Schema.optional(Schema.Number),
    speechWordInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SpeechWordInfo),
    ),
    speechEndOffset: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2StreamingRecognitionResult",
  });

export interface GoogleCloudDialogflowV2ConversationEvent {
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
  newMessagePayload?: GoogleCloudDialogflowV2Message;
  newRecognitionResultPayload?: GoogleCloudDialogflowV2StreamingRecognitionResult;
}

export const GoogleCloudDialogflowV2ConversationEvent =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversation: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    errorStatus: Schema.optional(GoogleRpcStatus),
    newMessagePayload: Schema.optional(GoogleCloudDialogflowV2Message),
    newRecognitionResultPayload: Schema.optional(
      GoogleCloudDialogflowV2StreamingRecognitionResult,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ConversationEvent" });

export interface GoogleCloudDialogflowV2ExportAgentResponse {
  agentUri?: string;
  agentContent?: string;
}

export const GoogleCloudDialogflowV2ExportAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentUri: Schema.optional(Schema.String),
    agentContent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ExportAgentResponse" });

export interface GoogleCloudDialogflowV2HumanAgentAssistantEvent {
  conversation?: string;
  participant?: string;
  suggestionResults?: ReadonlyArray<GoogleCloudDialogflowV2SuggestionResult>;
}

export const GoogleCloudDialogflowV2HumanAgentAssistantEvent =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversation: Schema.optional(Schema.String),
    participant: Schema.optional(Schema.String),
    suggestionResults: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SuggestionResult),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2HumanAgentAssistantEvent",
  });

export interface GoogleCloudDialogflowV2ImportDocumentsResponse {
  warnings?: ReadonlyArray<GoogleRpcStatus>;
}

export const GoogleCloudDialogflowV2ImportDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    warnings: Schema.optional(Schema.Array(GoogleRpcStatus)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2ImportDocumentsResponse" });

export interface GoogleCloudDialogflowV2ExportOperationMetadata {
  exportedGcsDestination?: GoogleCloudDialogflowV2GcsDestination;
}

export const GoogleCloudDialogflowV2ExportOperationMetadata =
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

export const GoogleCloudDialogflowV2KnowledgeOperationMetadata =
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

export interface GoogleCloudDialogflowV2OriginalDetectIntentRequest {
  source?: string;
  version?: string;
  payload?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2OriginalDetectIntentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2OriginalDetectIntentRequest",
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

export const GoogleCloudDialogflowV2SetSuggestionFeatureConfigOperationMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationProfile: Schema.optional(Schema.String),
    participantRole: Schema.optional(Schema.String),
    suggestionFeatureType: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2SetSuggestionFeatureConfigOperationMetadata",
  });

export interface GoogleCloudDialogflowV2WebhookRequest {
  session?: string;
  responseId?: string;
  queryResult?: GoogleCloudDialogflowV2QueryResult;
  originalDetectIntentRequest?: GoogleCloudDialogflowV2OriginalDetectIntentRequest;
}

export const GoogleCloudDialogflowV2WebhookRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.optional(Schema.String),
    responseId: Schema.optional(Schema.String),
    queryResult: Schema.optional(GoogleCloudDialogflowV2QueryResult),
    originalDetectIntentRequest: Schema.optional(
      GoogleCloudDialogflowV2OriginalDetectIntentRequest,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2WebhookRequest" });

export interface GoogleCloudDialogflowV2WebhookResponse {
  fulfillmentText?: string;
  fulfillmentMessages?: ReadonlyArray<GoogleCloudDialogflowV2IntentMessage>;
  source?: string;
  payload?: Record<string, unknown>;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2Context>;
  followupEventInput?: GoogleCloudDialogflowV2EventInput;
  sessionEntityTypes?: ReadonlyArray<GoogleCloudDialogflowV2SessionEntityType>;
}

export const GoogleCloudDialogflowV2WebhookResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fulfillmentText: Schema.optional(Schema.String),
    fulfillmentMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2IntentMessage),
    ),
    source: Schema.optional(Schema.String),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2Context),
    ),
    followupEventInput: Schema.optional(GoogleCloudDialogflowV2EventInput),
    sessionEntityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2SessionEntityType),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2WebhookResponse" });

export interface GoogleCloudDialogflowV2DeleteConversationDatasetOperationMetadata {}

export const GoogleCloudDialogflowV2DeleteConversationDatasetOperationMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleCloudDialogflowV2DeleteConversationDatasetOperationMetadata",
  });

export interface GoogleCloudDialogflowV2ImportConversationDataOperationResponse {
  conversationDataset?: string;
  importCount?: number;
}

export const GoogleCloudDialogflowV2ImportConversationDataOperationResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationDataset: Schema.optional(Schema.String),
    importCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2ImportConversationDataOperationResponse",
  });

export interface GoogleCloudDialogflowV2ImportConversationDataOperationMetadata {
  conversationDataset?: string;
  partialFailures?: ReadonlyArray<GoogleRpcStatus>;
  createTime?: string;
}

export const GoogleCloudDialogflowV2ImportConversationDataOperationMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationDataset: Schema.optional(Schema.String),
    partialFailures: Schema.optional(Schema.Array(GoogleRpcStatus)),
    createTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2ImportConversationDataOperationMetadata",
  });

export interface GoogleCloudDialogflowV2InitializeEncryptionSpecMetadata {
  request?: GoogleCloudDialogflowV2InitializeEncryptionSpecRequest;
}

export const GoogleCloudDialogflowV2InitializeEncryptionSpecMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    request: Schema.optional(
      GoogleCloudDialogflowV2InitializeEncryptionSpecRequest,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2InitializeEncryptionSpecMetadata",
  });

export interface GoogleCloudDialogflowV2CreateConversationDatasetOperationMetadata {
  conversationDataset?: string;
}

export const GoogleCloudDialogflowV2CreateConversationDatasetOperationMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationDataset: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2CreateConversationDatasetOperationMetadata",
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

export const GoogleCloudDialogflowV2CreateConversationModelOperationMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationModel: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    doneTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2CreateConversationModelOperationMetadata",
  });

export interface GoogleCloudDialogflowV2DeleteConversationModelOperationMetadata {
  conversationModel?: string;
  createTime?: string;
  doneTime?: string;
}

export const GoogleCloudDialogflowV2DeleteConversationModelOperationMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationModel: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    doneTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2DeleteConversationModelOperationMetadata",
  });

export interface GoogleCloudDialogflowV2DeployConversationModelOperationMetadata {
  conversationModel?: string;
  createTime?: string;
  doneTime?: string;
}

export const GoogleCloudDialogflowV2DeployConversationModelOperationMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationModel: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    doneTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2DeployConversationModelOperationMetadata",
  });

export interface GoogleCloudDialogflowV2UndeployConversationModelOperationMetadata {
  conversationModel?: string;
  createTime?: string;
  doneTime?: string;
}

export const GoogleCloudDialogflowV2UndeployConversationModelOperationMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationModel: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    doneTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2UndeployConversationModelOperationMetadata",
  });

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

export const GoogleCloudDialogflowV2CreateConversationModelEvaluationOperationMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationModelEvaluation: Schema.optional(Schema.String),
    conversationModel: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2CreateConversationModelEvaluationOperationMetadata",
  });

export interface GoogleCloudDialogflowV2beta1EntityTypeEntity {
  value?: string;
  synonyms?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1EntityTypeEntity =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    synonyms: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1EntityTypeEntity" });

export interface GoogleCloudDialogflowV2beta1EntityType {
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
  entities?: ReadonlyArray<GoogleCloudDialogflowV2beta1EntityTypeEntity>;
  enableFuzzyExtraction?: boolean;
}

export const GoogleCloudDialogflowV2beta1EntityType =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    autoExpansionMode: Schema.optional(Schema.String),
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1EntityTypeEntity),
    ),
    enableFuzzyExtraction: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1EntityType" });

export interface GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesResponse {
  entityTypes?: ReadonlyArray<GoogleCloudDialogflowV2beta1EntityType>;
}

export const GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1EntityType),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesResponse",
  });

export interface GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart {
  text?: string;
  entityType?: string;
  alias?: string;
  userDefined?: boolean;
}

export const GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    entityType: Schema.optional(Schema.String),
    alias: Schema.optional(Schema.String),
    userDefined: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart",
  });

export interface GoogleCloudDialogflowV2beta1IntentTrainingPhrase {
  name?: string;
  type?: "TYPE_UNSPECIFIED" | "EXAMPLE" | "TEMPLATE" | (string & {});
  parts?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart>;
  timesAddedCount?: number;
}

export const GoogleCloudDialogflowV2beta1IntentTrainingPhrase =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    parts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart),
    ),
    timesAddedCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentTrainingPhrase",
  });

export interface GoogleCloudDialogflowV2beta1Context {
  name?: string;
  lifespanCount?: number;
  parameters?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2beta1Context =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    lifespanCount: Schema.optional(Schema.Number),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1Context" });

export interface GoogleCloudDialogflowV2beta1IntentParameter {
  name?: string;
  displayName?: string;
  value?: string;
  defaultValue?: string;
  entityTypeDisplayName?: string;
  mandatory?: boolean;
  prompts?: ReadonlyArray<string>;
  isList?: boolean;
}

export const GoogleCloudDialogflowV2beta1IntentParameter =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    defaultValue: Schema.optional(Schema.String),
    entityTypeDisplayName: Schema.optional(Schema.String),
    mandatory: Schema.optional(Schema.Boolean),
    prompts: Schema.optional(Schema.Array(Schema.String)),
    isList: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentParameter" });

export interface GoogleCloudDialogflowV2beta1IntentMessageText {
  text?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageText =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentMessageText" });

export interface GoogleCloudDialogflowV2beta1IntentMessageImage {
  imageUri?: string;
  accessibilityText?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageImage =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageUri: Schema.optional(Schema.String),
    accessibilityText: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentMessageImage" });

export interface GoogleCloudDialogflowV2beta1IntentMessageQuickReplies {
  title?: string;
  quickReplies?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageQuickReplies =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    quickReplies: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageQuickReplies",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageCardButton {
  text?: string;
  postback?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageCardButton =
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

export const GoogleCloudDialogflowV2beta1IntentMessageCard =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    subtitle: Schema.optional(Schema.String),
    imageUri: Schema.optional(Schema.String),
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageCardButton),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentMessageCard" });

export interface GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse {
  textToSpeech?: string;
  ssml?: string;
  displayText?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse =
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

export const GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    simpleResponses: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction {
  uri?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction =
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

export const GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    openUriAction: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageBasicCard {
  title?: string;
  subtitle?: string;
  formattedText?: string;
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  buttons?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageBasicCard =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    subtitle: Schema.optional(Schema.String),
    formattedText: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
    buttons: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageBasicCard",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageSuggestion {
  title?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageSuggestion =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageSuggestion",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageSuggestions {
  suggestions?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageSuggestion>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageSuggestions =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suggestions: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageSuggestion),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageSuggestions",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion {
  destinationName?: string;
  uri?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destinationName: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo {
  key?: string;
  synonyms?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    synonyms: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageListSelectItem {
  info?: GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo;
  title?: string;
  description?: string;
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
}

export const GoogleCloudDialogflowV2beta1IntentMessageListSelectItem =
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
  items?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageListSelectItem>;
  subtitle?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageListSelect =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    items: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageListSelectItem),
    ),
    subtitle: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageListSelect",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem {
  info?: GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo;
  title?: string;
  description?: string;
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
}

export const GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem =
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

export const GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio {
  audioUri?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audioUri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech {
  text?: string;
  ssml?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    ssml: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall {
  phoneNumber?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    phoneNumber: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply {
  text?: string;
  postbackData?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    postbackData: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial {
  phoneNumber?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    phoneNumber: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri {
  uri?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation {}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction {
  text?: string;
  postbackData?: string;
  dial?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial;
  openUrl?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri;
  shareLocation?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    postbackData: Schema.optional(Schema.String),
    dial: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial,
    ),
    openUrl: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri,
    ),
    shareLocation: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion {
  reply?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply;
  action?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion =
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

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmText {
  text?: string;
  rbmSuggestion?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmText =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    rbmSuggestion: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageRbmText",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia {
  fileUri?: string;
  thumbnailUri?: string;
  height?: "HEIGHT_UNSPECIFIED" | "SHORT" | "MEDIUM" | "TALL" | (string & {});
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  media?: GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia;
  suggestions?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent =
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

export const GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cardOrientation: Schema.optional(Schema.String),
    thumbnailImageAlignment: Schema.optional(Schema.String),
    cardContent: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard {
  cardWidth?: "CARD_WIDTH_UNSPECIFIED" | "SMALL" | "MEDIUM" | (string & {});
  cardContents?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cardWidth: Schema.optional(Schema.String),
    cardContents: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction {
  url?: string;
  urlTypeHint?:
    | "URL_TYPE_HINT_UNSPECIFIED"
    | "AMP_ACTION"
    | "AMP_CONTENT"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    urlTypeHint: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem {
  openUriAction?: GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;
  title?: string;
  description?: string;
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  footer?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    openUriAction: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction,
    ),
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    image: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
    footer: Schema.optional(Schema.String),
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

export const GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard =
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

export interface GoogleCloudDialogflowV2beta1IntentMessageColumnProperties {
  header?: string;
  horizontalAlignment?:
    | "HORIZONTAL_ALIGNMENT_UNSPECIFIED"
    | "LEADING"
    | "CENTER"
    | "TRAILING"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1IntentMessageColumnProperties =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    header: Schema.optional(Schema.String),
    horizontalAlignment: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageColumnProperties",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageTableCardCell {
  text?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageTableCardCell =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentMessageTableCardCell",
  });

export interface GoogleCloudDialogflowV2beta1IntentMessageTableCardRow {
  cells?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageTableCardCell>;
  dividerAfter?: boolean;
}

export const GoogleCloudDialogflowV2beta1IntentMessageTableCardRow =
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

export const GoogleCloudDialogflowV2beta1IntentMessageTableCard =
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

export interface GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject {
  name?: string;
  description?: string;
  largeImage?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  icon?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  contentUrl?: string;
}

export const GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject =
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
  mediaType?: "RESPONSE_MEDIA_TYPE_UNSPECIFIED" | "AUDIO" | (string & {});
  mediaObjects?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject>;
}

export const GoogleCloudDialogflowV2beta1IntentMessageMediaContent =
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

export interface GoogleCloudDialogflowV2beta1IntentMessage {
  text?: GoogleCloudDialogflowV2beta1IntentMessageText;
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
  quickReplies?: GoogleCloudDialogflowV2beta1IntentMessageQuickReplies;
  card?: GoogleCloudDialogflowV2beta1IntentMessageCard;
  payload?: Record<string, unknown>;
  simpleResponses?: GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses;
  basicCard?: GoogleCloudDialogflowV2beta1IntentMessageBasicCard;
  suggestions?: GoogleCloudDialogflowV2beta1IntentMessageSuggestions;
  linkOutSuggestion?: GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion;
  listSelect?: GoogleCloudDialogflowV2beta1IntentMessageListSelect;
  carouselSelect?: GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect;
  telephonyPlayAudio?: GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio;
  telephonySynthesizeSpeech?: GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech;
  telephonyTransferCall?: GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall;
  rbmText?: GoogleCloudDialogflowV2beta1IntentMessageRbmText;
  rbmStandaloneRichCard?: GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard;
  rbmCarouselRichCard?: GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard;
  browseCarouselCard?: GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard;
  tableCard?: GoogleCloudDialogflowV2beta1IntentMessageTableCard;
  mediaContent?: GoogleCloudDialogflowV2beta1IntentMessageMediaContent;
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
}

export const GoogleCloudDialogflowV2beta1IntentMessage =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageText),
    image: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageImage),
    quickReplies: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageQuickReplies,
    ),
    card: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageCard),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    simpleResponses: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses,
    ),
    basicCard: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageBasicCard,
    ),
    suggestions: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageSuggestions,
    ),
    linkOutSuggestion: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion,
    ),
    listSelect: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageListSelect,
    ),
    carouselSelect: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect,
    ),
    telephonyPlayAudio: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio,
    ),
    telephonySynthesizeSpeech: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech,
    ),
    telephonyTransferCall: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall,
    ),
    rbmText: Schema.optional(GoogleCloudDialogflowV2beta1IntentMessageRbmText),
    rbmStandaloneRichCard: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard,
    ),
    rbmCarouselRichCard: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard,
    ),
    browseCarouselCard: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard,
    ),
    tableCard: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageTableCard,
    ),
    mediaContent: Schema.optional(
      GoogleCloudDialogflowV2beta1IntentMessageMediaContent,
    ),
    platform: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1IntentMessage" });

export interface GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo {
  followupIntentName?: string;
  parentFollowupIntentName?: string;
}

export const GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    followupIntentName: Schema.optional(Schema.String),
    parentFollowupIntentName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo",
  });

export interface GoogleCloudDialogflowV2beta1Intent {
  name?: string;
  displayName?: string;
  webhookState?:
    | "WEBHOOK_STATE_UNSPECIFIED"
    | "WEBHOOK_STATE_ENABLED"
    | "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"
    | (string & {});
  priority?: number;
  isFallback?: boolean;
  mlEnabled?: boolean;
  mlDisabled?: boolean;
  liveAgentHandoff?: boolean;
  endInteraction?: boolean;
  inputContextNames?: ReadonlyArray<string>;
  events?: ReadonlyArray<string>;
  trainingPhrases?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentTrainingPhrase>;
  action?: string;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2beta1Context>;
  resetContexts?: boolean;
  parameters?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentParameter>;
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
  rootFollowupIntentName?: string;
  parentFollowupIntentName?: string;
  followupIntentInfo?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo>;
}

export const GoogleCloudDialogflowV2beta1Intent =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    webhookState: Schema.optional(Schema.String),
    priority: Schema.optional(Schema.Number),
    isFallback: Schema.optional(Schema.Boolean),
    mlEnabled: Schema.optional(Schema.Boolean),
    mlDisabled: Schema.optional(Schema.Boolean),
    liveAgentHandoff: Schema.optional(Schema.Boolean),
    endInteraction: Schema.optional(Schema.Boolean),
    inputContextNames: Schema.optional(Schema.Array(Schema.String)),
    events: Schema.optional(Schema.Array(Schema.String)),
    trainingPhrases: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentTrainingPhrase),
    ),
    action: Schema.optional(Schema.String),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1Context),
    ),
    resetContexts: Schema.optional(Schema.Boolean),
    parameters: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentParameter),
    ),
    messages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessage),
    ),
    defaultResponsePlatforms: Schema.optional(Schema.Array(Schema.String)),
    rootFollowupIntentName: Schema.optional(Schema.String),
    parentFollowupIntentName: Schema.optional(Schema.String),
    followupIntentInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1Intent" });

export interface GoogleCloudDialogflowV2beta1BatchUpdateIntentsResponse {
  intents?: ReadonlyArray<GoogleCloudDialogflowV2beta1Intent>;
}

export const GoogleCloudDialogflowV2beta1BatchUpdateIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intents: Schema.optional(Schema.Array(GoogleCloudDialogflowV2beta1Intent)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1BatchUpdateIntentsResponse",
  });

export interface GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadata {
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

export const GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationProfile: Schema.optional(Schema.String),
    participantRole: Schema.optional(Schema.String),
    suggestionFeatureType: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadata",
  });

export interface GoogleCloudDialogflowV2beta1ResponseMessageText {
  text?: ReadonlyArray<string>;
}

export const GoogleCloudDialogflowV2beta1ResponseMessageText =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ResponseMessageText",
  });

export interface GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff {
  metadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff",
  });

export interface GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction {}

export const GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction",
  });

export interface GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment {
  audio?: string;
  uri?: string;
  allowPlaybackInterruption?: boolean;
}

export const GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment =
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

export const GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio =
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

export const GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    phoneNumber: Schema.optional(Schema.String),
    sipUri: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall",
  });

export interface GoogleCloudDialogflowV2beta1ResponseMessage {
  text?: GoogleCloudDialogflowV2beta1ResponseMessageText;
  payload?: Record<string, unknown>;
  liveAgentHandoff?: GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff;
  endInteraction?: GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction;
  mixedAudio?: GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio;
  telephonyTransferCall?: GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall;
}

export const GoogleCloudDialogflowV2beta1ResponseMessage =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(GoogleCloudDialogflowV2beta1ResponseMessageText),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    liveAgentHandoff: Schema.optional(
      GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff,
    ),
    endInteraction: Schema.optional(
      GoogleCloudDialogflowV2beta1ResponseMessageEndInteraction,
    ),
    mixedAudio: Schema.optional(
      GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio,
    ),
    telephonyTransferCall: Schema.optional(
      GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ResponseMessage" });

export interface GoogleCloudDialogflowV2beta1AnnotatedMessagePart {
  text?: string;
  entityType?: string;
  formattedValue?: unknown;
}

export const GoogleCloudDialogflowV2beta1AnnotatedMessagePart =
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

export const GoogleCloudDialogflowV2beta1MessageAnnotation =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1AnnotatedMessagePart),
    ),
    containEntities: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1MessageAnnotation" });

export interface GoogleCloudDialogflowV2beta1Sentiment {
  score?: number;
  magnitude?: number;
}

export const GoogleCloudDialogflowV2beta1Sentiment =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.Number),
    magnitude: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1Sentiment" });

export interface GoogleCloudDialogflowV2beta1SentimentAnalysisResult {
  queryTextSentiment?: GoogleCloudDialogflowV2beta1Sentiment;
}

export const GoogleCloudDialogflowV2beta1SentimentAnalysisResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryTextSentiment: Schema.optional(GoogleCloudDialogflowV2beta1Sentiment),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SentimentAnalysisResult",
  });

export interface GoogleCloudDialogflowV2beta1Message {
  name?: string;
  content?: string;
  responseMessages?: ReadonlyArray<GoogleCloudDialogflowV2beta1ResponseMessage>;
  languageCode?: string;
  participant?: string;
  participantRole?:
    | "ROLE_UNSPECIFIED"
    | "HUMAN_AGENT"
    | "AUTOMATED_AGENT"
    | "END_USER"
    | (string & {});
  createTime?: string;
  sendTime?: string;
  messageAnnotation?: GoogleCloudDialogflowV2beta1MessageAnnotation;
  sentimentAnalysis?: GoogleCloudDialogflowV2beta1SentimentAnalysisResult;
}

export const GoogleCloudDialogflowV2beta1Message =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    responseMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1ResponseMessage),
    ),
    languageCode: Schema.optional(Schema.String),
    participant: Schema.optional(Schema.String),
    participantRole: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    sendTime: Schema.optional(Schema.String),
    messageAnnotation: Schema.optional(
      GoogleCloudDialogflowV2beta1MessageAnnotation,
    ),
    sentimentAnalysis: Schema.optional(
      GoogleCloudDialogflowV2beta1SentimentAnalysisResult,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1Message" });

export interface GoogleCloudDialogflowV2beta1SpeechWordInfo {
  word?: string;
  startOffset?: string;
  endOffset?: string;
  confidence?: number;
}

export const GoogleCloudDialogflowV2beta1SpeechWordInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const GoogleCloudDialogflowV2beta1TelephonyDtmfEvents =
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
  transcript?: string;
  isFinal?: boolean;
  confidence?: number;
  stability?: number;
  speechWordInfo?: ReadonlyArray<GoogleCloudDialogflowV2beta1SpeechWordInfo>;
  speechEndOffset?: string;
  languageCode?: string;
  dtmfDigits?: GoogleCloudDialogflowV2beta1TelephonyDtmfEvents;
}

export const GoogleCloudDialogflowV2beta1StreamingRecognitionResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messageType: Schema.optional(Schema.String),
    transcript: Schema.optional(Schema.String),
    isFinal: Schema.optional(Schema.Boolean),
    confidence: Schema.optional(Schema.Number),
    stability: Schema.optional(Schema.Number),
    speechWordInfo: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SpeechWordInfo),
    ),
    speechEndOffset: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    dtmfDigits: Schema.optional(
      GoogleCloudDialogflowV2beta1TelephonyDtmfEvents,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1StreamingRecognitionResult",
  });

export interface GoogleCloudDialogflowV2beta1ConversationEvent {
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
  newMessagePayload?: GoogleCloudDialogflowV2beta1Message;
  newRecognitionResultPayload?: GoogleCloudDialogflowV2beta1StreamingRecognitionResult;
}

export const GoogleCloudDialogflowV2beta1ConversationEvent =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversation: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    errorStatus: Schema.optional(GoogleRpcStatus),
    newMessagePayload: Schema.optional(GoogleCloudDialogflowV2beta1Message),
    newRecognitionResultPayload: Schema.optional(
      GoogleCloudDialogflowV2beta1StreamingRecognitionResult,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ConversationEvent" });

export interface GoogleCloudDialogflowV2beta1ExportAgentResponse {
  agentUri?: string;
  agentContent?: string;
}

export const GoogleCloudDialogflowV2beta1ExportAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentUri: Schema.optional(Schema.String),
    agentContent: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ExportAgentResponse",
  });

export interface GoogleCloudDialogflowV2beta1ArticleAnswer {
  title?: string;
  uri?: string;
  snippets?: ReadonlyArray<string>;
  metadata?: Record<string, string>;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2beta1ArticleAnswer =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    snippets: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ArticleAnswer" });

export interface GoogleCloudDialogflowV2beta1SuggestArticlesResponse {
  articleAnswers?: ReadonlyArray<GoogleCloudDialogflowV2beta1ArticleAnswer>;
  latestMessage?: string;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2beta1SuggestArticlesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    articleAnswers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1ArticleAnswer),
    ),
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestArticlesResponse",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuery {
  queryText?: string;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuery =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryText: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuery",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerFaqSource {
  question?: string;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerFaqSource =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    question: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerFaqSource",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet {
  uri?: string;
  text?: string;
  title?: string;
  metadata?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSourceSnippet =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource =
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

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswer {
  answerText?: string;
  faqSource?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerFaqSource;
  generativeSource?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswer =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answerText: Schema.optional(Schema.String),
    faqSource: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerFaqSource,
    ),
    generativeSource: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswerGenerativeSource,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswer",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior {
  answerGenerationRewriterOn?: boolean;
  endUserMetadataIncluded?: boolean;
  returnQueryOnly?: boolean;
  usePubsubDelivery?: boolean;
  disableSyncDelivery?: boolean;
  previousQueriesIncluded?: boolean;
  useTranslatedMessage?: boolean;
  useCustomSafetyFilterLevel?: boolean;
  conversationTranscriptHasMixedLanguages?: boolean;
  queryGenerationAgentLanguageMismatch?: boolean;
  queryGenerationEndUserLanguageMismatch?: boolean;
  thirdPartyConnectorAllowed?: boolean;
  multipleQueriesGenerated?: boolean;
  queryContainedSearchContext?: boolean;
  invalidItemsQuerySuggestionSkipped?: boolean;
  primaryQueryRedactedAndReplaced?: boolean;
  appendedSearchContextCount?: number;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answerGenerationRewriterOn: Schema.optional(Schema.Boolean),
    endUserMetadataIncluded: Schema.optional(Schema.Boolean),
    returnQueryOnly: Schema.optional(Schema.Boolean),
    usePubsubDelivery: Schema.optional(Schema.Boolean),
    disableSyncDelivery: Schema.optional(Schema.Boolean),
    previousQueriesIncluded: Schema.optional(Schema.Boolean),
    useTranslatedMessage: Schema.optional(Schema.Boolean),
    useCustomSafetyFilterLevel: Schema.optional(Schema.Boolean),
    conversationTranscriptHasMixedLanguages: Schema.optional(Schema.Boolean),
    queryGenerationAgentLanguageMismatch: Schema.optional(Schema.Boolean),
    queryGenerationEndUserLanguageMismatch: Schema.optional(Schema.Boolean),
    thirdPartyConnectorAllowed: Schema.optional(Schema.Boolean),
    multipleQueriesGenerated: Schema.optional(Schema.Boolean),
    queryContainedSearchContext: Schema.optional(Schema.Boolean),
    invalidItemsQuerySuggestionSkipped: Schema.optional(Schema.Boolean),
    primaryQueryRedactedAndReplaced: Schema.optional(Schema.Boolean),
    appendedSearchContextCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior",
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

export const GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfoIngestedParameterDebugInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfo =
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
  step?: string;
  latencyMs?: number;
  startTime?: string;
  completeTime?: string;
}

export const GoogleCloudDialogflowV2beta1ServiceLatencyInternalServiceLatency =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    step: Schema.optional(Schema.String),
    latencyMs: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    completeTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1ServiceLatencyInternalServiceLatency",
  });

export interface GoogleCloudDialogflowV2beta1ServiceLatency {
  internalServiceLatencies?: ReadonlyArray<GoogleCloudDialogflowV2beta1ServiceLatencyInternalServiceLatency>;
}

export const GoogleCloudDialogflowV2beta1ServiceLatency =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    internalServiceLatencies: Schema.optional(
      Schema.Array(
        GoogleCloudDialogflowV2beta1ServiceLatencyInternalServiceLatency,
      ),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ServiceLatency" });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfo {
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
  knowledgeAssistBehavior?: GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior;
  ingestedContextReferenceDebugInfo?: GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfo;
  serviceLatency?: GoogleCloudDialogflowV2beta1ServiceLatency;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryGenerationFailureReason: Schema.optional(Schema.String),
    queryCategorizationFailureReason: Schema.optional(Schema.String),
    datastoreResponseReason: Schema.optional(Schema.String),
    knowledgeAssistBehavior: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfoKnowledgeAssistBehavior,
    ),
    ingestedContextReferenceDebugInfo: Schema.optional(
      GoogleCloudDialogflowV2beta1IngestedContextReferenceDebugInfo,
    ),
    serviceLatency: Schema.optional(GoogleCloudDialogflowV2beta1ServiceLatency),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfo",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAssistAnswer {
  suggestedQuery?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuery;
  suggestedQueryAnswer?: GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswer;
  answerRecord?: string;
  knowledgeAssistDebugInfo?: GoogleCloudDialogflowV2beta1KnowledgeAssistDebugInfo;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAssistAnswer =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suggestedQuery: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerSuggestedQuery,
    ),
    suggestedQueryAnswer: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswerKnowledgeAnswer,
    ),
    answerRecord: Schema.optional(Schema.String),
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

export const GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    knowledgeAssistAnswer: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAssistAnswer,
    ),
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse",
  });

export interface GoogleCloudDialogflowV2beta1FaqAnswer {
  answer?: string;
  confidence?: number;
  question?: string;
  source?: string;
  metadata?: Record<string, string>;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2beta1FaqAnswer =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answer: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
    question: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1FaqAnswer" });

export interface GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse {
  faqAnswers?: ReadonlyArray<GoogleCloudDialogflowV2beta1FaqAnswer>;
  latestMessage?: string;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    faqAnswers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1FaqAnswer),
    ),
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse",
  });

export interface GoogleCloudDialogflowV2beta1SmartReplyAnswer {
  reply?: string;
  confidence?: number;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2beta1SmartReplyAnswer =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reply: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1SmartReplyAnswer" });

export interface GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse {
  smartReplyAnswers?: ReadonlyArray<GoogleCloudDialogflowV2beta1SmartReplyAnswer>;
  latestMessage?: string;
  contextSize?: number;
}

export const GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    smartReplyAnswers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SmartReplyAnswer),
    ),
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer {
  source?: string;
  faqQuestion?: string;
  answer?: string;
  matchConfidenceLevel?:
    | "MATCH_CONFIDENCE_LEVEL_UNSPECIFIED"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | (string & {});
  matchConfidence?: number;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
    faqQuestion: Schema.optional(Schema.String),
    answer: Schema.optional(Schema.String),
    matchConfidenceLevel: Schema.optional(Schema.String),
    matchConfidence: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer",
  });

export interface GoogleCloudDialogflowV2beta1KnowledgeAnswers {
  answers?: ReadonlyArray<GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer>;
}

export const GoogleCloudDialogflowV2beta1KnowledgeAnswers =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1KnowledgeAnswers" });

export interface GoogleCloudDialogflowV2beta1QueryResult {
  queryText?: string;
  languageCode?: string;
  speechRecognitionConfidence?: number;
  action?: string;
  parameters?: Record<string, unknown>;
  allRequiredParamsPresent?: boolean;
  cancelsSlotFilling?: boolean;
  fulfillmentText?: string;
  fulfillmentMessages?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessage>;
  webhookSource?: string;
  webhookPayload?: Record<string, unknown>;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2beta1Context>;
  intent?: GoogleCloudDialogflowV2beta1Intent;
  intentDetectionConfidence?: number;
  diagnosticInfo?: Record<string, unknown>;
  sentimentAnalysisResult?: GoogleCloudDialogflowV2beta1SentimentAnalysisResult;
  knowledgeAnswers?: GoogleCloudDialogflowV2beta1KnowledgeAnswers;
}

export const GoogleCloudDialogflowV2beta1QueryResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryText: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    speechRecognitionConfidence: Schema.optional(Schema.Number),
    action: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    allRequiredParamsPresent: Schema.optional(Schema.Boolean),
    cancelsSlotFilling: Schema.optional(Schema.Boolean),
    fulfillmentText: Schema.optional(Schema.String),
    fulfillmentMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessage),
    ),
    webhookSource: Schema.optional(Schema.String),
    webhookPayload: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1Context),
    ),
    intent: Schema.optional(GoogleCloudDialogflowV2beta1Intent),
    intentDetectionConfidence: Schema.optional(Schema.Number),
    diagnosticInfo: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    sentimentAnalysisResult: Schema.optional(
      GoogleCloudDialogflowV2beta1SentimentAnalysisResult,
    ),
    knowledgeAnswers: Schema.optional(
      GoogleCloudDialogflowV2beta1KnowledgeAnswers,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1QueryResult" });

export interface GoogleCloudDialogflowV2beta1IntentSuggestion {
  displayName?: string;
  intentV2?: string;
  description?: string;
}

export const GoogleCloudDialogflowV2beta1IntentSuggestion =
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

export const GoogleCloudDialogflowV2beta1DialogflowAssistAnswer =
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

export const GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dialogflowAssistAnswers: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1DialogflowAssistAnswer),
    ),
    latestMessage: Schema.optional(Schema.String),
    contextSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse",
  });

export interface GoogleCloudDialogflowV2beta1FreeFormSuggestion {
  response?: string;
}

export const GoogleCloudDialogflowV2beta1FreeFormSuggestion =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    response: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1FreeFormSuggestion" });

export interface GoogleCloudDialogflowV2beta1SummarySuggestionSummarySection {
  section?: string;
  summary?: string;
}

export const GoogleCloudDialogflowV2beta1SummarySuggestionSummarySection =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    section: Schema.optional(Schema.String),
    summary: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1SummarySuggestionSummarySection",
  });

export interface GoogleCloudDialogflowV2beta1SummarySuggestion {
  summarySections?: ReadonlyArray<GoogleCloudDialogflowV2beta1SummarySuggestionSummarySection>;
}

export const GoogleCloudDialogflowV2beta1SummarySuggestion =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    summarySections: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SummarySuggestionSummarySection),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1SummarySuggestion" });

export interface GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion {
  answerRecord?: string;
  suggestionIndex?: number;
  similarityScore?: number;
}

export const GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResultDuplicateSuggestion =
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

export const GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResult =
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
  agentAction?: string;
  systemAction?: string;
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

export const GoogleCloudDialogflowV2beta1AgentCoachingInstruction =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    displayDetails: Schema.optional(Schema.String),
    condition: Schema.optional(Schema.String),
    agentAction: Schema.optional(Schema.String),
    systemAction: Schema.optional(Schema.String),
    duplicateCheckResult: Schema.optional(
      GoogleCloudDialogflowV2beta1AgentCoachingInstructionDuplicateCheckResult,
    ),
    triggeringEvent: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1AgentCoachingInstruction",
  });

export interface GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSources {
  instructionIndexes?: ReadonlyArray<number>;
}

export const GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSources =
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

export const GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResultDuplicateSuggestion =
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

export const GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResult =
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
  sources?: GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSources;
  duplicateCheckResult?: GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResult;
}

export const GoogleCloudDialogflowV2beta1AgentCoachingSuggestionAgentActionSuggestion =
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

export interface GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSampleResponse {
  responseText?: string;
  sources?: GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSources;
  duplicateCheckResult?: GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResult;
}

export const GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSampleResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responseText: Schema.optional(Schema.String),
    sources: Schema.optional(
      GoogleCloudDialogflowV2beta1AgentCoachingSuggestionSources,
    ),
    duplicateCheckResult: Schema.optional(
      GoogleCloudDialogflowV2beta1AgentCoachingSuggestionDuplicateCheckResult,
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

export const GoogleCloudDialogflowV2beta1AgentCoachingSuggestion =
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
  tool?: string;
  cesTool?: string;
  cesToolset?: string;
  cesApp?: string;
  toolDisplayName?: string;
  toolDisplayDetails?: string;
  action?: string;
  inputParameters?: Record<string, unknown>;
  createTime?: string;
  answerRecord?: string;
  state?:
    | "STATE_UNSPECIFIED"
    | "TRIGGERED"
    | "NEEDS_CONFIRMATION"
    | (string & {});
}

export const GoogleCloudDialogflowV2beta1ToolCall =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tool: Schema.optional(Schema.String),
    cesTool: Schema.optional(Schema.String),
    cesToolset: Schema.optional(Schema.String),
    cesApp: Schema.optional(Schema.String),
    toolDisplayName: Schema.optional(Schema.String),
    toolDisplayDetails: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    inputParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    createTime: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ToolCall" });

export interface GoogleCloudDialogflowV2beta1ToolCallResultError {
  message?: string;
}

export const GoogleCloudDialogflowV2beta1ToolCallResultError =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ToolCallResultError",
  });

export interface GoogleCloudDialogflowV2beta1ToolCallResult {
  tool?: string;
  cesTool?: string;
  cesToolset?: string;
  cesApp?: string;
  action?: string;
  error?: GoogleCloudDialogflowV2beta1ToolCallResultError;
  rawContent?: string;
  content?: string;
  createTime?: string;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2beta1ToolCallResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tool: Schema.optional(Schema.String),
    cesTool: Schema.optional(Schema.String),
    cesToolset: Schema.optional(Schema.String),
    cesApp: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    error: Schema.optional(GoogleCloudDialogflowV2beta1ToolCallResultError),
    rawContent: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    answerRecord: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1ToolCallResult" });

export interface GoogleCloudDialogflowV2beta1GeneratorSuggestionToolCallInfo {
  toolCall?: GoogleCloudDialogflowV2beta1ToolCall;
  toolCallResult?: GoogleCloudDialogflowV2beta1ToolCallResult;
}

export const GoogleCloudDialogflowV2beta1GeneratorSuggestionToolCallInfo =
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

export const GoogleCloudDialogflowV2beta1GeneratorSuggestion =
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

export interface GoogleCloudDialogflowV2beta1GenerateSuggestionsResponseGeneratorSuggestionAnswer {
  generatorSuggestion?: GoogleCloudDialogflowV2beta1GeneratorSuggestion;
  sourceGenerator?: string;
  answerRecord?: string;
}

export const GoogleCloudDialogflowV2beta1GenerateSuggestionsResponseGeneratorSuggestionAnswer =
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

export interface GoogleCloudDialogflowV2beta1GenerateSuggestionsResponse {
  generatorSuggestionAnswers?: ReadonlyArray<GoogleCloudDialogflowV2beta1GenerateSuggestionsResponseGeneratorSuggestionAnswer>;
  latestMessage?: string;
}

export const GoogleCloudDialogflowV2beta1GenerateSuggestionsResponse =
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

export interface GoogleCloudDialogflowV2beta1SuggestionResult {
  error?: GoogleRpcStatus;
  suggestArticlesResponse?: GoogleCloudDialogflowV2beta1SuggestArticlesResponse;
  suggestKnowledgeAssistResponse?: GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse;
  suggestFaqAnswersResponse?: GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse;
  suggestSmartRepliesResponse?: GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse;
  suggestDialogflowAssistsResponse?: GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse;
  suggestEntityExtractionResponse?: GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse;
  generateSuggestionsResponse?: GoogleCloudDialogflowV2beta1GenerateSuggestionsResponse;
}

export const GoogleCloudDialogflowV2beta1SuggestionResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    error: Schema.optional(GoogleRpcStatus),
    suggestArticlesResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestArticlesResponse,
    ),
    suggestKnowledgeAssistResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestKnowledgeAssistResponse,
    ),
    suggestFaqAnswersResponse: Schema.optional(
      GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse,
    ),
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
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1SuggestionResult" });

export interface GoogleCloudDialogflowV2beta1HumanAgentAssistantEvent {
  conversation?: string;
  participant?: string;
  suggestionResults?: ReadonlyArray<GoogleCloudDialogflowV2beta1SuggestionResult>;
}

export const GoogleCloudDialogflowV2beta1HumanAgentAssistantEvent =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversation: Schema.optional(Schema.String),
    participant: Schema.optional(Schema.String),
    suggestionResults: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SuggestionResult),
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1HumanAgentAssistantEvent",
  });

export interface GoogleCloudDialogflowV2beta1ImportDocumentsResponse {
  warnings?: ReadonlyArray<GoogleRpcStatus>;
}

export const GoogleCloudDialogflowV2beta1ImportDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    warnings: Schema.optional(Schema.Array(GoogleRpcStatus)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1ImportDocumentsResponse",
  });

export interface GoogleCloudDialogflowV2beta1EncryptionSpec {
  name?: string;
  kmsKey?: string;
}

export const GoogleCloudDialogflowV2beta1EncryptionSpec =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    kmsKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1EncryptionSpec" });

export interface GoogleCloudDialogflowV2beta1InitializeEncryptionSpecRequest {
  encryptionSpec?: GoogleCloudDialogflowV2beta1EncryptionSpec;
}

export const GoogleCloudDialogflowV2beta1InitializeEncryptionSpecRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    encryptionSpec: Schema.optional(GoogleCloudDialogflowV2beta1EncryptionSpec),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1InitializeEncryptionSpecRequest",
  });

export interface GoogleCloudDialogflowV2beta1InitializeEncryptionSpecMetadata {
  request?: GoogleCloudDialogflowV2beta1InitializeEncryptionSpecRequest;
}

export const GoogleCloudDialogflowV2beta1InitializeEncryptionSpecMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    request: Schema.optional(
      GoogleCloudDialogflowV2beta1InitializeEncryptionSpecRequest,
    ),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1InitializeEncryptionSpecMetadata",
  });

export interface GoogleCloudDialogflowV2beta1GcsDestination {
  uri?: string;
}

export const GoogleCloudDialogflowV2beta1GcsDestination =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1GcsDestination" });

export interface GoogleCloudDialogflowV2beta1ExportOperationMetadata {
  exportedGcsDestination?: GoogleCloudDialogflowV2beta1GcsDestination;
}

export const GoogleCloudDialogflowV2beta1ExportOperationMetadata =
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

export const GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata =
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

export interface GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest {
  source?: string;
  version?: string;
  payload?: Record<string, unknown>;
}

export const GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier: "GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest",
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

export const GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigOperationMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationProfile: Schema.optional(Schema.String),
    participantRole: Schema.optional(Schema.String),
    suggestionFeatureType: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigOperationMetadata",
  });

export interface GoogleCloudDialogflowV2beta1WebhookRequest {
  session?: string;
  responseId?: string;
  queryResult?: GoogleCloudDialogflowV2beta1QueryResult;
  alternativeQueryResults?: ReadonlyArray<GoogleCloudDialogflowV2beta1QueryResult>;
  originalDetectIntentRequest?: GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest;
}

export const GoogleCloudDialogflowV2beta1WebhookRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.optional(Schema.String),
    responseId: Schema.optional(Schema.String),
    queryResult: Schema.optional(GoogleCloudDialogflowV2beta1QueryResult),
    alternativeQueryResults: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1QueryResult),
    ),
    originalDetectIntentRequest: Schema.optional(
      GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest,
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1WebhookRequest" });

export interface GoogleCloudDialogflowV2beta1EventInput {
  name?: string;
  parameters?: Record<string, unknown>;
  languageCode?: string;
}

export const GoogleCloudDialogflowV2beta1EventInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1EventInput" });

export interface GoogleCloudDialogflowV2beta1SessionEntityType {
  name?: string;
  entityOverrideMode?:
    | "ENTITY_OVERRIDE_MODE_UNSPECIFIED"
    | "ENTITY_OVERRIDE_MODE_OVERRIDE"
    | "ENTITY_OVERRIDE_MODE_SUPPLEMENT"
    | (string & {});
  entities?: ReadonlyArray<GoogleCloudDialogflowV2beta1EntityTypeEntity>;
}

export const GoogleCloudDialogflowV2beta1SessionEntityType =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    entityOverrideMode: Schema.optional(Schema.String),
    entities: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1EntityTypeEntity),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1SessionEntityType" });

export interface GoogleCloudDialogflowV2beta1WebhookResponse {
  fulfillmentText?: string;
  fulfillmentMessages?: ReadonlyArray<GoogleCloudDialogflowV2beta1IntentMessage>;
  source?: string;
  payload?: Record<string, unknown>;
  outputContexts?: ReadonlyArray<GoogleCloudDialogflowV2beta1Context>;
  followupEventInput?: GoogleCloudDialogflowV2beta1EventInput;
  liveAgentHandoff?: boolean;
  endInteraction?: boolean;
  sessionEntityTypes?: ReadonlyArray<GoogleCloudDialogflowV2beta1SessionEntityType>;
}

export const GoogleCloudDialogflowV2beta1WebhookResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fulfillmentText: Schema.optional(Schema.String),
    fulfillmentMessages: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1IntentMessage),
    ),
    source: Schema.optional(Schema.String),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    outputContexts: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1Context),
    ),
    followupEventInput: Schema.optional(GoogleCloudDialogflowV2beta1EventInput),
    liveAgentHandoff: Schema.optional(Schema.Boolean),
    endInteraction: Schema.optional(Schema.Boolean),
    sessionEntityTypes: Schema.optional(
      Schema.Array(GoogleCloudDialogflowV2beta1SessionEntityType),
    ),
  }).annotate({ identifier: "GoogleCloudDialogflowV2beta1WebhookResponse" });

export interface GoogleCloudDialogflowV3alpha1TurnSignals {
  noMatch?: boolean;
  noUserInput?: boolean;
  dtmfUsed?: boolean;
  userEscalated?: boolean;
  agentEscalated?: boolean;
  triggeredAbandonmentEvent?: boolean;
  reachedEndPage?: boolean;
  webhookStatuses?: ReadonlyArray<string>;
  failureReasons?: ReadonlyArray<
    | "FAILURE_REASON_UNSPECIFIED"
    | "FAILED_INTENT"
    | "FAILED_WEBHOOK"
    | (string & {})
  >;
  sentimentScore?: number;
  sentimentMagnitude?: number;
}

export const GoogleCloudDialogflowV3alpha1TurnSignals =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    noMatch: Schema.optional(Schema.Boolean),
    noUserInput: Schema.optional(Schema.Boolean),
    dtmfUsed: Schema.optional(Schema.Boolean),
    userEscalated: Schema.optional(Schema.Boolean),
    agentEscalated: Schema.optional(Schema.Boolean),
    triggeredAbandonmentEvent: Schema.optional(Schema.Boolean),
    reachedEndPage: Schema.optional(Schema.Boolean),
    webhookStatuses: Schema.optional(Schema.Array(Schema.String)),
    failureReasons: Schema.optional(Schema.Array(Schema.String)),
    sentimentScore: Schema.optional(Schema.Number),
    sentimentMagnitude: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDialogflowV3alpha1TurnSignals" });

export interface GoogleCloudDialogflowV3alpha1ConversationSignals {
  turnSignals?: GoogleCloudDialogflowV3alpha1TurnSignals;
}

export const GoogleCloudDialogflowV3alpha1ConversationSignals =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    turnSignals: Schema.optional(GoogleCloudDialogflowV3alpha1TurnSignals),
  }).annotate({
    identifier: "GoogleCloudDialogflowV3alpha1ConversationSignals",
  });

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
    T.Http({ method: "GET", path: "v2/{parent}/agent" }),
    svc,
  ) as unknown as Schema.Schema<GetAgentProjectsRequest>;

export type GetAgentProjectsResponse = GoogleCloudDialogflowV2Agent;
export const GetAgentProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Agent;

export type GetAgentProjectsError = DefaultErrors;

export const getAgentProjects: API.OperationMethod<
  GetAgentProjectsRequest,
  GetAgentProjectsResponse,
  GetAgentProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAgentProjectsRequest,
  output: GetAgentProjectsResponse,
  errors: [],
}));

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
    T.Http({ method: "POST", path: "v2/{parent}/agent", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SetAgentProjectsRequest>;

export type SetAgentProjectsResponse = GoogleCloudDialogflowV2Agent;
export const SetAgentProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Agent;

export type SetAgentProjectsError = DefaultErrors;

export const setAgentProjects: API.OperationMethod<
  SetAgentProjectsRequest,
  SetAgentProjectsResponse,
  SetAgentProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetAgentProjectsRequest,
  output: SetAgentProjectsResponse,
  errors: [],
}));

export interface DeleteAgentProjectsRequest {
  parent: string;
}

export const DeleteAgentProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{parent}/agent" }),
    svc,
  ) as unknown as Schema.Schema<DeleteAgentProjectsRequest>;

export type DeleteAgentProjectsResponse = GoogleProtobufEmpty;
export const DeleteAgentProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteAgentProjectsError = DefaultErrors;

export const deleteAgentProjects: API.OperationMethod<
  DeleteAgentProjectsRequest,
  DeleteAgentProjectsResponse,
  DeleteAgentProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAgentProjectsRequest,
  output: DeleteAgentProjectsResponse,
  errors: [],
}));

export interface ListProjectsOperationsRequest {
  name: string;
  filter?: string;
  pageSize?: number;
  pageToken?: string;
  returnPartialSuccess?: boolean;
}

export const ListProjectsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsOperationsRequest>;

export type ListProjectsOperationsResponse =
  GoogleLongrunningListOperationsResponse;
export const ListProjectsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningListOperationsResponse;

export type ListProjectsOperationsError = DefaultErrors;

export const listProjectsOperations: API.PaginatedOperationMethod<
  ListProjectsOperationsRequest,
  ListProjectsOperationsResponse,
  ListProjectsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsOperationsRequest,
  output: ListProjectsOperationsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsOperationsRequest>;

export type GetProjectsOperationsResponse = GoogleLongrunningOperation;
export const GetProjectsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type GetProjectsOperationsError = DefaultErrors;

export const getProjectsOperations: API.OperationMethod<
  GetProjectsOperationsRequest,
  GetProjectsOperationsResponse,
  GetProjectsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsOperationsRequest,
  output: GetProjectsOperationsResponse,
  errors: [],
}));

export interface CancelProjectsOperationsRequest {
  name: string;
}

export const CancelProjectsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsOperationsRequest>;

export type CancelProjectsOperationsResponse = GoogleProtobufEmpty;
export const CancelProjectsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type CancelProjectsOperationsError = DefaultErrors;

export const cancelProjectsOperations: API.OperationMethod<
  CancelProjectsOperationsRequest,
  CancelProjectsOperationsResponse,
  CancelProjectsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsOperationsRequest,
  output: CancelProjectsOperationsResponse,
  errors: [],
}));

export interface GetAgentProjectsLocationsRequest {
  parent: string;
}

export const GetAgentProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{parent}/agent" }),
    svc,
  ) as unknown as Schema.Schema<GetAgentProjectsLocationsRequest>;

export type GetAgentProjectsLocationsResponse = GoogleCloudDialogflowV2Agent;
export const GetAgentProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Agent;

export type GetAgentProjectsLocationsError = DefaultErrors;

export const getAgentProjectsLocations: API.OperationMethod<
  GetAgentProjectsLocationsRequest,
  GetAgentProjectsLocationsResponse,
  GetAgentProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAgentProjectsLocationsRequest,
  output: GetAgentProjectsLocationsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{parent}/agent", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SetAgentProjectsLocationsRequest>;

export type SetAgentProjectsLocationsResponse = GoogleCloudDialogflowV2Agent;
export const SetAgentProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Agent;

export type SetAgentProjectsLocationsError = DefaultErrors;

export const setAgentProjectsLocations: API.OperationMethod<
  SetAgentProjectsLocationsRequest,
  SetAgentProjectsLocationsResponse,
  SetAgentProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetAgentProjectsLocationsRequest,
  output: SetAgentProjectsLocationsResponse,
  errors: [],
}));

export interface DeleteAgentProjectsLocationsRequest {
  parent: string;
}

export const DeleteAgentProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{parent}/agent" }),
    svc,
  ) as unknown as Schema.Schema<DeleteAgentProjectsLocationsRequest>;

export type DeleteAgentProjectsLocationsResponse = GoogleProtobufEmpty;
export const DeleteAgentProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteAgentProjectsLocationsError = DefaultErrors;

export const deleteAgentProjectsLocations: API.OperationMethod<
  DeleteAgentProjectsLocationsRequest,
  DeleteAgentProjectsLocationsResponse,
  DeleteAgentProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAgentProjectsLocationsRequest,
  output: DeleteAgentProjectsLocationsResponse,
  errors: [],
}));

export interface GetEncryptionSpecProjectsLocationsRequest {
  name: string;
}

export const GetEncryptionSpecProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetEncryptionSpecProjectsLocationsRequest>;

export type GetEncryptionSpecProjectsLocationsResponse =
  GoogleCloudDialogflowV2EncryptionSpec;
export const GetEncryptionSpecProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2EncryptionSpec;

export type GetEncryptionSpecProjectsLocationsError = DefaultErrors;

export const getEncryptionSpecProjectsLocations: API.OperationMethod<
  GetEncryptionSpecProjectsLocationsRequest,
  GetEncryptionSpecProjectsLocationsResponse,
  GetEncryptionSpecProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetEncryptionSpecProjectsLocationsRequest,
  output: GetEncryptionSpecProjectsLocationsResponse,
  errors: [],
}));

export interface ListProjectsLocationsRequest {
  name: string;
  filter?: string;
  pageSize?: number;
  pageToken?: string;
  extraLocationTypes?: string[];
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{name}/locations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse =
  GoogleCloudLocationListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudLocationListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors;

export const listProjectsLocations: API.PaginatedOperationMethod<
  ListProjectsLocationsRequest,
  ListProjectsLocationsResponse,
  ListProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRequest,
  output: ListProjectsLocationsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRequest>;

export type GetProjectsLocationsResponse = GoogleCloudLocationLocation;
export const GetProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudLocationLocation;

export type GetProjectsLocationsError = DefaultErrors;

export const getProjectsLocations: API.OperationMethod<
  GetProjectsLocationsRequest,
  GetProjectsLocationsResponse,
  GetProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRequest,
  output: GetProjectsLocationsResponse,
  errors: [],
}));

export interface ListProjectsLocationsOperationsRequest {
  name: string;
  filter?: string;
  pageSize?: number;
  pageToken?: string;
  returnPartialSuccess?: boolean;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse =
  GoogleLongrunningListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningListOperationsResponse;

export type ListProjectsLocationsOperationsError = DefaultErrors;

export const listProjectsLocationsOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsOperationsRequest,
  ListProjectsLocationsOperationsResponse,
  ListProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOperationsRequest,
  output: ListProjectsLocationsOperationsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsOperationsRequest>;

export type GetProjectsLocationsOperationsResponse = GoogleLongrunningOperation;
export const GetProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type GetProjectsLocationsOperationsError = DefaultErrors;

export const getProjectsLocationsOperations: API.OperationMethod<
  GetProjectsLocationsOperationsRequest,
  GetProjectsLocationsOperationsResponse,
  GetProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOperationsRequest,
  output: GetProjectsLocationsOperationsResponse,
  errors: [],
}));

export interface CancelProjectsLocationsOperationsRequest {
  name: string;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsOperationsRequest>;

export type CancelProjectsLocationsOperationsResponse = GoogleProtobufEmpty;
export const CancelProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type CancelProjectsLocationsOperationsError = DefaultErrors;

export const cancelProjectsLocationsOperations: API.OperationMethod<
  CancelProjectsLocationsOperationsRequest,
  CancelProjectsLocationsOperationsResponse,
  CancelProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsOperationsRequest,
  output: CancelProjectsLocationsOperationsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/agent:search" }),
    svc,
  ) as unknown as Schema.Schema<SearchProjectsLocationsAgentRequest>;

export type SearchProjectsLocationsAgentResponse =
  GoogleCloudDialogflowV2SearchAgentsResponse;
export const SearchProjectsLocationsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SearchAgentsResponse;

export type SearchProjectsLocationsAgentError = DefaultErrors;

export const searchProjectsLocationsAgent: API.PaginatedOperationMethod<
  SearchProjectsLocationsAgentRequest,
  SearchProjectsLocationsAgentResponse,
  SearchProjectsLocationsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchProjectsLocationsAgentRequest,
  output: SearchProjectsLocationsAgentResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
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
    T.Http({ method: "POST", path: "v2/{parent}/agent:train", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<TrainProjectsLocationsAgentRequest>;

export type TrainProjectsLocationsAgentResponse = GoogleLongrunningOperation;
export const TrainProjectsLocationsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type TrainProjectsLocationsAgentError = DefaultErrors;

export const trainProjectsLocationsAgent: API.OperationMethod<
  TrainProjectsLocationsAgentRequest,
  TrainProjectsLocationsAgentResponse,
  TrainProjectsLocationsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TrainProjectsLocationsAgentRequest,
  output: TrainProjectsLocationsAgentResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{parent}/agent:export", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ExportProjectsLocationsAgentRequest>;

export type ExportProjectsLocationsAgentResponse = GoogleLongrunningOperation;
export const ExportProjectsLocationsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ExportProjectsLocationsAgentError = DefaultErrors;

export const exportProjectsLocationsAgent: API.OperationMethod<
  ExportProjectsLocationsAgentRequest,
  ExportProjectsLocationsAgentResponse,
  ExportProjectsLocationsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportProjectsLocationsAgentRequest,
  output: ExportProjectsLocationsAgentResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{parent}/agent:import", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ImportProjectsLocationsAgentRequest>;

export type ImportProjectsLocationsAgentResponse = GoogleLongrunningOperation;
export const ImportProjectsLocationsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ImportProjectsLocationsAgentError = DefaultErrors;

export const importProjectsLocationsAgent: API.OperationMethod<
  ImportProjectsLocationsAgentRequest,
  ImportProjectsLocationsAgentResponse,
  ImportProjectsLocationsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportProjectsLocationsAgentRequest,
  output: ImportProjectsLocationsAgentResponse,
  errors: [],
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
      path: "v2/{parent}/agent:restore",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RestoreProjectsLocationsAgentRequest>;

export type RestoreProjectsLocationsAgentResponse = GoogleLongrunningOperation;
export const RestoreProjectsLocationsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type RestoreProjectsLocationsAgentError = DefaultErrors;

export const restoreProjectsLocationsAgent: API.OperationMethod<
  RestoreProjectsLocationsAgentRequest,
  RestoreProjectsLocationsAgentResponse,
  RestoreProjectsLocationsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RestoreProjectsLocationsAgentRequest,
  output: RestoreProjectsLocationsAgentResponse,
  errors: [],
}));

export interface GetValidationResultProjectsLocationsAgentRequest {
  parent: string;
  languageCode?: string;
}

export const GetValidationResultProjectsLocationsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{parent}/agent/validationResult" }),
    svc,
  ) as unknown as Schema.Schema<GetValidationResultProjectsLocationsAgentRequest>;

export type GetValidationResultProjectsLocationsAgentResponse =
  GoogleCloudDialogflowV2ValidationResult;
export const GetValidationResultProjectsLocationsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ValidationResult;

export type GetValidationResultProjectsLocationsAgentError = DefaultErrors;

export const getValidationResultProjectsLocationsAgent: API.OperationMethod<
  GetValidationResultProjectsLocationsAgentRequest,
  GetValidationResultProjectsLocationsAgentResponse,
  GetValidationResultProjectsLocationsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetValidationResultProjectsLocationsAgentRequest,
  output: GetValidationResultProjectsLocationsAgentResponse,
  errors: [],
}));

export interface GetFulfillmentProjectsLocationsAgentRequest {
  name: string;
}

export const GetFulfillmentProjectsLocationsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetFulfillmentProjectsLocationsAgentRequest>;

export type GetFulfillmentProjectsLocationsAgentResponse =
  GoogleCloudDialogflowV2Fulfillment;
export const GetFulfillmentProjectsLocationsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Fulfillment;

export type GetFulfillmentProjectsLocationsAgentError = DefaultErrors;

export const getFulfillmentProjectsLocationsAgent: API.OperationMethod<
  GetFulfillmentProjectsLocationsAgentRequest,
  GetFulfillmentProjectsLocationsAgentResponse,
  GetFulfillmentProjectsLocationsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFulfillmentProjectsLocationsAgentRequest,
  output: GetFulfillmentProjectsLocationsAgentResponse,
  errors: [],
}));

export interface UpdateFulfillmentProjectsLocationsAgentRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Fulfillment;
}

export const UpdateFulfillmentProjectsLocationsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2Fulfillment).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateFulfillmentProjectsLocationsAgentRequest>;

export type UpdateFulfillmentProjectsLocationsAgentResponse =
  GoogleCloudDialogflowV2Fulfillment;
export const UpdateFulfillmentProjectsLocationsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Fulfillment;

export type UpdateFulfillmentProjectsLocationsAgentError = DefaultErrors;

export const updateFulfillmentProjectsLocationsAgent: API.OperationMethod<
  UpdateFulfillmentProjectsLocationsAgentRequest,
  UpdateFulfillmentProjectsLocationsAgentResponse,
  UpdateFulfillmentProjectsLocationsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateFulfillmentProjectsLocationsAgentRequest,
  output: UpdateFulfillmentProjectsLocationsAgentResponse,
  errors: [],
}));

export interface DeleteContextsProjectsLocationsAgentSessionsRequest {
  parent: string;
}

export const DeleteContextsProjectsLocationsAgentSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{parent}/contexts" }),
    svc,
  ) as unknown as Schema.Schema<DeleteContextsProjectsLocationsAgentSessionsRequest>;

export type DeleteContextsProjectsLocationsAgentSessionsResponse =
  GoogleProtobufEmpty;
export const DeleteContextsProjectsLocationsAgentSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteContextsProjectsLocationsAgentSessionsError = DefaultErrors;

export const deleteContextsProjectsLocationsAgentSessions: API.OperationMethod<
  DeleteContextsProjectsLocationsAgentSessionsRequest,
  DeleteContextsProjectsLocationsAgentSessionsResponse,
  DeleteContextsProjectsLocationsAgentSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteContextsProjectsLocationsAgentSessionsRequest,
  output: DeleteContextsProjectsLocationsAgentSessionsResponse,
  errors: [],
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
      path: "v2/{session}:detectIntent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DetectIntentProjectsLocationsAgentSessionsRequest>;

export type DetectIntentProjectsLocationsAgentSessionsResponse =
  GoogleCloudDialogflowV2DetectIntentResponse;
export const DetectIntentProjectsLocationsAgentSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2DetectIntentResponse;

export type DetectIntentProjectsLocationsAgentSessionsError = DefaultErrors;

export const detectIntentProjectsLocationsAgentSessions: API.OperationMethod<
  DetectIntentProjectsLocationsAgentSessionsRequest,
  DetectIntentProjectsLocationsAgentSessionsResponse,
  DetectIntentProjectsLocationsAgentSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DetectIntentProjectsLocationsAgentSessionsRequest,
  output: DetectIntentProjectsLocationsAgentSessionsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/contexts" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentSessionsContextsRequest>;

export type ListProjectsLocationsAgentSessionsContextsResponse =
  GoogleCloudDialogflowV2ListContextsResponse;
export const ListProjectsLocationsAgentSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListContextsResponse;

export type ListProjectsLocationsAgentSessionsContextsError = DefaultErrors;

export const listProjectsLocationsAgentSessionsContexts: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentSessionsContextsRequest,
  ListProjectsLocationsAgentSessionsContextsResponse,
  ListProjectsLocationsAgentSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentSessionsContextsRequest,
  output: ListProjectsLocationsAgentSessionsContextsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentSessionsContextsRequest>;

export type GetProjectsLocationsAgentSessionsContextsResponse =
  GoogleCloudDialogflowV2Context;
export const GetProjectsLocationsAgentSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Context;

export type GetProjectsLocationsAgentSessionsContextsError = DefaultErrors;

export const getProjectsLocationsAgentSessionsContexts: API.OperationMethod<
  GetProjectsLocationsAgentSessionsContextsRequest,
  GetProjectsLocationsAgentSessionsContextsResponse,
  GetProjectsLocationsAgentSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentSessionsContextsRequest,
  output: GetProjectsLocationsAgentSessionsContextsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{parent}/contexts", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentSessionsContextsRequest>;

export type CreateProjectsLocationsAgentSessionsContextsResponse =
  GoogleCloudDialogflowV2Context;
export const CreateProjectsLocationsAgentSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Context;

export type CreateProjectsLocationsAgentSessionsContextsError = DefaultErrors;

export const createProjectsLocationsAgentSessionsContexts: API.OperationMethod<
  CreateProjectsLocationsAgentSessionsContextsRequest,
  CreateProjectsLocationsAgentSessionsContextsResponse,
  CreateProjectsLocationsAgentSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentSessionsContextsRequest,
  output: CreateProjectsLocationsAgentSessionsContextsResponse,
  errors: [],
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
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentSessionsContextsRequest>;

export type PatchProjectsLocationsAgentSessionsContextsResponse =
  GoogleCloudDialogflowV2Context;
export const PatchProjectsLocationsAgentSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Context;

export type PatchProjectsLocationsAgentSessionsContextsError = DefaultErrors;

export const patchProjectsLocationsAgentSessionsContexts: API.OperationMethod<
  PatchProjectsLocationsAgentSessionsContextsRequest,
  PatchProjectsLocationsAgentSessionsContextsResponse,
  PatchProjectsLocationsAgentSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentSessionsContextsRequest,
  output: PatchProjectsLocationsAgentSessionsContextsResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsAgentSessionsContextsRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentSessionsContextsRequest>;

export type DeleteProjectsLocationsAgentSessionsContextsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentSessionsContextsError = DefaultErrors;

export const deleteProjectsLocationsAgentSessionsContexts: API.OperationMethod<
  DeleteProjectsLocationsAgentSessionsContextsRequest,
  DeleteProjectsLocationsAgentSessionsContextsResponse,
  DeleteProjectsLocationsAgentSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentSessionsContextsRequest,
  output: DeleteProjectsLocationsAgentSessionsContextsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/entityTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentSessionsEntityTypesRequest>;

export type ListProjectsLocationsAgentSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2ListSessionEntityTypesResponse;
export const ListProjectsLocationsAgentSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListSessionEntityTypesResponse;

export type ListProjectsLocationsAgentSessionsEntityTypesError = DefaultErrors;

export const listProjectsLocationsAgentSessionsEntityTypes: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentSessionsEntityTypesRequest,
  ListProjectsLocationsAgentSessionsEntityTypesResponse,
  ListProjectsLocationsAgentSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentSessionsEntityTypesRequest,
  output: ListProjectsLocationsAgentSessionsEntityTypesResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentSessionsEntityTypesRequest>;

export type GetProjectsLocationsAgentSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2SessionEntityType;
export const GetProjectsLocationsAgentSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SessionEntityType;

export type GetProjectsLocationsAgentSessionsEntityTypesError = DefaultErrors;

export const getProjectsLocationsAgentSessionsEntityTypes: API.OperationMethod<
  GetProjectsLocationsAgentSessionsEntityTypesRequest,
  GetProjectsLocationsAgentSessionsEntityTypesResponse,
  GetProjectsLocationsAgentSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentSessionsEntityTypesRequest,
  output: GetProjectsLocationsAgentSessionsEntityTypesResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{parent}/entityTypes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentSessionsEntityTypesRequest>;

export type CreateProjectsLocationsAgentSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2SessionEntityType;
export const CreateProjectsLocationsAgentSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SessionEntityType;

export type CreateProjectsLocationsAgentSessionsEntityTypesError =
  DefaultErrors;

export const createProjectsLocationsAgentSessionsEntityTypes: API.OperationMethod<
  CreateProjectsLocationsAgentSessionsEntityTypesRequest,
  CreateProjectsLocationsAgentSessionsEntityTypesResponse,
  CreateProjectsLocationsAgentSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentSessionsEntityTypesRequest,
  output: CreateProjectsLocationsAgentSessionsEntityTypesResponse,
  errors: [],
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
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentSessionsEntityTypesRequest>;

export type PatchProjectsLocationsAgentSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2SessionEntityType;
export const PatchProjectsLocationsAgentSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SessionEntityType;

export type PatchProjectsLocationsAgentSessionsEntityTypesError = DefaultErrors;

export const patchProjectsLocationsAgentSessionsEntityTypes: API.OperationMethod<
  PatchProjectsLocationsAgentSessionsEntityTypesRequest,
  PatchProjectsLocationsAgentSessionsEntityTypesResponse,
  PatchProjectsLocationsAgentSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentSessionsEntityTypesRequest,
  output: PatchProjectsLocationsAgentSessionsEntityTypesResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsAgentSessionsEntityTypesRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentSessionsEntityTypesRequest>;

export type DeleteProjectsLocationsAgentSessionsEntityTypesResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentSessionsEntityTypesError =
  DefaultErrors;

export const deleteProjectsLocationsAgentSessionsEntityTypes: API.OperationMethod<
  DeleteProjectsLocationsAgentSessionsEntityTypesRequest,
  DeleteProjectsLocationsAgentSessionsEntityTypesResponse,
  DeleteProjectsLocationsAgentSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentSessionsEntityTypesRequest,
  output: DeleteProjectsLocationsAgentSessionsEntityTypesResponse,
  errors: [],
}));

export interface ListProjectsLocationsAgentIntentsRequest {
  parent: string;
  languageCode?: string;
  intentView?: "INTENT_VIEW_UNSPECIFIED" | "INTENT_VIEW_FULL" | (string & {});
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    intentView: Schema.optional(Schema.String).pipe(T.HttpQuery("intentView")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{parent}/intents" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentIntentsRequest>;

export type ListProjectsLocationsAgentIntentsResponse =
  GoogleCloudDialogflowV2ListIntentsResponse;
export const ListProjectsLocationsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListIntentsResponse;

export type ListProjectsLocationsAgentIntentsError = DefaultErrors;

export const listProjectsLocationsAgentIntents: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentIntentsRequest,
  ListProjectsLocationsAgentIntentsResponse,
  ListProjectsLocationsAgentIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentIntentsRequest,
  output: ListProjectsLocationsAgentIntentsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
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
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentIntentsRequest>;

export type GetProjectsLocationsAgentIntentsResponse =
  GoogleCloudDialogflowV2Intent;
export const GetProjectsLocationsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Intent;

export type GetProjectsLocationsAgentIntentsError = DefaultErrors;

export const getProjectsLocationsAgentIntents: API.OperationMethod<
  GetProjectsLocationsAgentIntentsRequest,
  GetProjectsLocationsAgentIntentsResponse,
  GetProjectsLocationsAgentIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentIntentsRequest,
  output: GetProjectsLocationsAgentIntentsResponse,
  errors: [],
}));

export interface CreateProjectsLocationsAgentIntentsRequest {
  parent: string;
  languageCode?: string;
  intentView?: "INTENT_VIEW_UNSPECIFIED" | "INTENT_VIEW_FULL" | (string & {});
  /** Request body */
  body?: GoogleCloudDialogflowV2Intent;
}

export const CreateProjectsLocationsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    intentView: Schema.optional(Schema.String).pipe(T.HttpQuery("intentView")),
    body: Schema.optional(GoogleCloudDialogflowV2Intent).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{parent}/intents", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentIntentsRequest>;

export type CreateProjectsLocationsAgentIntentsResponse =
  GoogleCloudDialogflowV2Intent;
export const CreateProjectsLocationsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Intent;

export type CreateProjectsLocationsAgentIntentsError = DefaultErrors;

export const createProjectsLocationsAgentIntents: API.OperationMethod<
  CreateProjectsLocationsAgentIntentsRequest,
  CreateProjectsLocationsAgentIntentsResponse,
  CreateProjectsLocationsAgentIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentIntentsRequest,
  output: CreateProjectsLocationsAgentIntentsResponse,
  errors: [],
}));

export interface PatchProjectsLocationsAgentIntentsRequest {
  name: string;
  languageCode?: string;
  updateMask?: string;
  intentView?: "INTENT_VIEW_UNSPECIFIED" | "INTENT_VIEW_FULL" | (string & {});
  /** Request body */
  body?: GoogleCloudDialogflowV2Intent;
}

export const PatchProjectsLocationsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    intentView: Schema.optional(Schema.String).pipe(T.HttpQuery("intentView")),
    body: Schema.optional(GoogleCloudDialogflowV2Intent).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentIntentsRequest>;

export type PatchProjectsLocationsAgentIntentsResponse =
  GoogleCloudDialogflowV2Intent;
export const PatchProjectsLocationsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Intent;

export type PatchProjectsLocationsAgentIntentsError = DefaultErrors;

export const patchProjectsLocationsAgentIntents: API.OperationMethod<
  PatchProjectsLocationsAgentIntentsRequest,
  PatchProjectsLocationsAgentIntentsResponse,
  PatchProjectsLocationsAgentIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentIntentsRequest,
  output: PatchProjectsLocationsAgentIntentsResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsAgentIntentsRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentIntentsRequest>;

export type DeleteProjectsLocationsAgentIntentsResponse = GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentIntentsError = DefaultErrors;

export const deleteProjectsLocationsAgentIntents: API.OperationMethod<
  DeleteProjectsLocationsAgentIntentsRequest,
  DeleteProjectsLocationsAgentIntentsResponse,
  DeleteProjectsLocationsAgentIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentIntentsRequest,
  output: DeleteProjectsLocationsAgentIntentsResponse,
  errors: [],
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
      path: "v2/{parent}/intents:batchUpdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchUpdateProjectsLocationsAgentIntentsRequest>;

export type BatchUpdateProjectsLocationsAgentIntentsResponse =
  GoogleLongrunningOperation;
export const BatchUpdateProjectsLocationsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type BatchUpdateProjectsLocationsAgentIntentsError = DefaultErrors;

export const batchUpdateProjectsLocationsAgentIntents: API.OperationMethod<
  BatchUpdateProjectsLocationsAgentIntentsRequest,
  BatchUpdateProjectsLocationsAgentIntentsResponse,
  BatchUpdateProjectsLocationsAgentIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchUpdateProjectsLocationsAgentIntentsRequest,
  output: BatchUpdateProjectsLocationsAgentIntentsResponse,
  errors: [],
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
      path: "v2/{parent}/intents:batchDelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchDeleteProjectsLocationsAgentIntentsRequest>;

export type BatchDeleteProjectsLocationsAgentIntentsResponse =
  GoogleLongrunningOperation;
export const BatchDeleteProjectsLocationsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type BatchDeleteProjectsLocationsAgentIntentsError = DefaultErrors;

export const batchDeleteProjectsLocationsAgentIntents: API.OperationMethod<
  BatchDeleteProjectsLocationsAgentIntentsRequest,
  BatchDeleteProjectsLocationsAgentIntentsResponse,
  BatchDeleteProjectsLocationsAgentIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchDeleteProjectsLocationsAgentIntentsRequest,
  output: BatchDeleteProjectsLocationsAgentIntentsResponse,
  errors: [],
}));

export interface ListProjectsLocationsAgentEntityTypesRequest {
  parent: string;
  languageCode?: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsAgentEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{parent}/entityTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentEntityTypesRequest>;

export type ListProjectsLocationsAgentEntityTypesResponse =
  GoogleCloudDialogflowV2ListEntityTypesResponse;
export const ListProjectsLocationsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListEntityTypesResponse;

export type ListProjectsLocationsAgentEntityTypesError = DefaultErrors;

export const listProjectsLocationsAgentEntityTypes: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentEntityTypesRequest,
  ListProjectsLocationsAgentEntityTypesResponse,
  ListProjectsLocationsAgentEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentEntityTypesRequest,
  output: ListProjectsLocationsAgentEntityTypesResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentEntityTypesRequest>;

export type GetProjectsLocationsAgentEntityTypesResponse =
  GoogleCloudDialogflowV2EntityType;
export const GetProjectsLocationsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2EntityType;

export type GetProjectsLocationsAgentEntityTypesError = DefaultErrors;

export const getProjectsLocationsAgentEntityTypes: API.OperationMethod<
  GetProjectsLocationsAgentEntityTypesRequest,
  GetProjectsLocationsAgentEntityTypesResponse,
  GetProjectsLocationsAgentEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentEntityTypesRequest,
  output: GetProjectsLocationsAgentEntityTypesResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{parent}/entityTypes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentEntityTypesRequest>;

export type CreateProjectsLocationsAgentEntityTypesResponse =
  GoogleCloudDialogflowV2EntityType;
export const CreateProjectsLocationsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2EntityType;

export type CreateProjectsLocationsAgentEntityTypesError = DefaultErrors;

export const createProjectsLocationsAgentEntityTypes: API.OperationMethod<
  CreateProjectsLocationsAgentEntityTypesRequest,
  CreateProjectsLocationsAgentEntityTypesResponse,
  CreateProjectsLocationsAgentEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentEntityTypesRequest,
  output: CreateProjectsLocationsAgentEntityTypesResponse,
  errors: [],
}));

export interface PatchProjectsLocationsAgentEntityTypesRequest {
  name: string;
  languageCode?: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2EntityType;
}

export const PatchProjectsLocationsAgentEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2EntityType).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentEntityTypesRequest>;

export type PatchProjectsLocationsAgentEntityTypesResponse =
  GoogleCloudDialogflowV2EntityType;
export const PatchProjectsLocationsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2EntityType;

export type PatchProjectsLocationsAgentEntityTypesError = DefaultErrors;

export const patchProjectsLocationsAgentEntityTypes: API.OperationMethod<
  PatchProjectsLocationsAgentEntityTypesRequest,
  PatchProjectsLocationsAgentEntityTypesResponse,
  PatchProjectsLocationsAgentEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentEntityTypesRequest,
  output: PatchProjectsLocationsAgentEntityTypesResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsAgentEntityTypesRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentEntityTypesRequest>;

export type DeleteProjectsLocationsAgentEntityTypesResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentEntityTypesError = DefaultErrors;

export const deleteProjectsLocationsAgentEntityTypes: API.OperationMethod<
  DeleteProjectsLocationsAgentEntityTypesRequest,
  DeleteProjectsLocationsAgentEntityTypesResponse,
  DeleteProjectsLocationsAgentEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentEntityTypesRequest,
  output: DeleteProjectsLocationsAgentEntityTypesResponse,
  errors: [],
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
      path: "v2/{parent}/entityTypes:batchUpdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchUpdateProjectsLocationsAgentEntityTypesRequest>;

export type BatchUpdateProjectsLocationsAgentEntityTypesResponse =
  GoogleLongrunningOperation;
export const BatchUpdateProjectsLocationsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type BatchUpdateProjectsLocationsAgentEntityTypesError = DefaultErrors;

export const batchUpdateProjectsLocationsAgentEntityTypes: API.OperationMethod<
  BatchUpdateProjectsLocationsAgentEntityTypesRequest,
  BatchUpdateProjectsLocationsAgentEntityTypesResponse,
  BatchUpdateProjectsLocationsAgentEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchUpdateProjectsLocationsAgentEntityTypesRequest,
  output: BatchUpdateProjectsLocationsAgentEntityTypesResponse,
  errors: [],
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
      path: "v2/{parent}/entityTypes:batchDelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchDeleteProjectsLocationsAgentEntityTypesRequest>;

export type BatchDeleteProjectsLocationsAgentEntityTypesResponse =
  GoogleLongrunningOperation;
export const BatchDeleteProjectsLocationsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type BatchDeleteProjectsLocationsAgentEntityTypesError = DefaultErrors;

export const batchDeleteProjectsLocationsAgentEntityTypes: API.OperationMethod<
  BatchDeleteProjectsLocationsAgentEntityTypesRequest,
  BatchDeleteProjectsLocationsAgentEntityTypesResponse,
  BatchDeleteProjectsLocationsAgentEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchDeleteProjectsLocationsAgentEntityTypesRequest,
  output: BatchDeleteProjectsLocationsAgentEntityTypesResponse,
  errors: [],
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
      path: "v2/{parent}/entities:batchCreate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchCreateProjectsLocationsAgentEntityTypesEntitiesRequest>;

export type BatchCreateProjectsLocationsAgentEntityTypesEntitiesResponse =
  GoogleLongrunningOperation;
export const BatchCreateProjectsLocationsAgentEntityTypesEntitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type BatchCreateProjectsLocationsAgentEntityTypesEntitiesError =
  DefaultErrors;

export const batchCreateProjectsLocationsAgentEntityTypesEntities: API.OperationMethod<
  BatchCreateProjectsLocationsAgentEntityTypesEntitiesRequest,
  BatchCreateProjectsLocationsAgentEntityTypesEntitiesResponse,
  BatchCreateProjectsLocationsAgentEntityTypesEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchCreateProjectsLocationsAgentEntityTypesEntitiesRequest,
  output: BatchCreateProjectsLocationsAgentEntityTypesEntitiesResponse,
  errors: [],
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
      path: "v2/{parent}/entities:batchUpdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchUpdateProjectsLocationsAgentEntityTypesEntitiesRequest>;

export type BatchUpdateProjectsLocationsAgentEntityTypesEntitiesResponse =
  GoogleLongrunningOperation;
export const BatchUpdateProjectsLocationsAgentEntityTypesEntitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type BatchUpdateProjectsLocationsAgentEntityTypesEntitiesError =
  DefaultErrors;

export const batchUpdateProjectsLocationsAgentEntityTypesEntities: API.OperationMethod<
  BatchUpdateProjectsLocationsAgentEntityTypesEntitiesRequest,
  BatchUpdateProjectsLocationsAgentEntityTypesEntitiesResponse,
  BatchUpdateProjectsLocationsAgentEntityTypesEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchUpdateProjectsLocationsAgentEntityTypesEntitiesRequest,
  output: BatchUpdateProjectsLocationsAgentEntityTypesEntitiesResponse,
  errors: [],
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
      path: "v2/{parent}/entities:batchDelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchDeleteProjectsLocationsAgentEntityTypesEntitiesRequest>;

export type BatchDeleteProjectsLocationsAgentEntityTypesEntitiesResponse =
  GoogleLongrunningOperation;
export const BatchDeleteProjectsLocationsAgentEntityTypesEntitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type BatchDeleteProjectsLocationsAgentEntityTypesEntitiesError =
  DefaultErrors;

export const batchDeleteProjectsLocationsAgentEntityTypesEntities: API.OperationMethod<
  BatchDeleteProjectsLocationsAgentEntityTypesEntitiesRequest,
  BatchDeleteProjectsLocationsAgentEntityTypesEntitiesResponse,
  BatchDeleteProjectsLocationsAgentEntityTypesEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchDeleteProjectsLocationsAgentEntityTypesEntitiesRequest,
  output: BatchDeleteProjectsLocationsAgentEntityTypesEntitiesResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/environments" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentEnvironmentsRequest>;

export type ListProjectsLocationsAgentEnvironmentsResponse =
  GoogleCloudDialogflowV2ListEnvironmentsResponse;
export const ListProjectsLocationsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListEnvironmentsResponse;

export type ListProjectsLocationsAgentEnvironmentsError = DefaultErrors;

export const listProjectsLocationsAgentEnvironments: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentEnvironmentsRequest,
  ListProjectsLocationsAgentEnvironmentsResponse,
  ListProjectsLocationsAgentEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentEnvironmentsRequest,
  output: ListProjectsLocationsAgentEnvironmentsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentEnvironmentsRequest>;

export type GetProjectsLocationsAgentEnvironmentsResponse =
  GoogleCloudDialogflowV2Environment;
export const GetProjectsLocationsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Environment;

export type GetProjectsLocationsAgentEnvironmentsError = DefaultErrors;

export const getProjectsLocationsAgentEnvironments: API.OperationMethod<
  GetProjectsLocationsAgentEnvironmentsRequest,
  GetProjectsLocationsAgentEnvironmentsResponse,
  GetProjectsLocationsAgentEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentEnvironmentsRequest,
  output: GetProjectsLocationsAgentEnvironmentsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{parent}/environments", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentEnvironmentsRequest>;

export type CreateProjectsLocationsAgentEnvironmentsResponse =
  GoogleCloudDialogflowV2Environment;
export const CreateProjectsLocationsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Environment;

export type CreateProjectsLocationsAgentEnvironmentsError = DefaultErrors;

export const createProjectsLocationsAgentEnvironments: API.OperationMethod<
  CreateProjectsLocationsAgentEnvironmentsRequest,
  CreateProjectsLocationsAgentEnvironmentsResponse,
  CreateProjectsLocationsAgentEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentEnvironmentsRequest,
  output: CreateProjectsLocationsAgentEnvironmentsResponse,
  errors: [],
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
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentEnvironmentsRequest>;

export type PatchProjectsLocationsAgentEnvironmentsResponse =
  GoogleCloudDialogflowV2Environment;
export const PatchProjectsLocationsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Environment;

export type PatchProjectsLocationsAgentEnvironmentsError = DefaultErrors;

export const patchProjectsLocationsAgentEnvironments: API.OperationMethod<
  PatchProjectsLocationsAgentEnvironmentsRequest,
  PatchProjectsLocationsAgentEnvironmentsResponse,
  PatchProjectsLocationsAgentEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentEnvironmentsRequest,
  output: PatchProjectsLocationsAgentEnvironmentsResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsAgentEnvironmentsRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentEnvironmentsRequest>;

export type DeleteProjectsLocationsAgentEnvironmentsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentEnvironmentsError = DefaultErrors;

export const deleteProjectsLocationsAgentEnvironments: API.OperationMethod<
  DeleteProjectsLocationsAgentEnvironmentsRequest,
  DeleteProjectsLocationsAgentEnvironmentsResponse,
  DeleteProjectsLocationsAgentEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentEnvironmentsRequest,
  output: DeleteProjectsLocationsAgentEnvironmentsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/history" }),
    svc,
  ) as unknown as Schema.Schema<GetHistoryProjectsLocationsAgentEnvironmentsRequest>;

export type GetHistoryProjectsLocationsAgentEnvironmentsResponse =
  GoogleCloudDialogflowV2EnvironmentHistory;
export const GetHistoryProjectsLocationsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2EnvironmentHistory;

export type GetHistoryProjectsLocationsAgentEnvironmentsError = DefaultErrors;

export const getHistoryProjectsLocationsAgentEnvironments: API.PaginatedOperationMethod<
  GetHistoryProjectsLocationsAgentEnvironmentsRequest,
  GetHistoryProjectsLocationsAgentEnvironmentsResponse,
  GetHistoryProjectsLocationsAgentEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: GetHistoryProjectsLocationsAgentEnvironmentsRequest,
  output: GetHistoryProjectsLocationsAgentEnvironmentsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteContextsProjectsLocationsAgentEnvironmentsUsersSessionsRequest {
  parent: string;
}

export const DeleteContextsProjectsLocationsAgentEnvironmentsUsersSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{parent}/contexts" }),
    svc,
  ) as unknown as Schema.Schema<DeleteContextsProjectsLocationsAgentEnvironmentsUsersSessionsRequest>;

export type DeleteContextsProjectsLocationsAgentEnvironmentsUsersSessionsResponse =
  GoogleProtobufEmpty;
export const DeleteContextsProjectsLocationsAgentEnvironmentsUsersSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteContextsProjectsLocationsAgentEnvironmentsUsersSessionsError =
  DefaultErrors;

export const deleteContextsProjectsLocationsAgentEnvironmentsUsersSessions: API.OperationMethod<
  DeleteContextsProjectsLocationsAgentEnvironmentsUsersSessionsRequest,
  DeleteContextsProjectsLocationsAgentEnvironmentsUsersSessionsResponse,
  DeleteContextsProjectsLocationsAgentEnvironmentsUsersSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteContextsProjectsLocationsAgentEnvironmentsUsersSessionsRequest,
  output: DeleteContextsProjectsLocationsAgentEnvironmentsUsersSessionsResponse,
  errors: [],
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
      path: "v2/{session}:detectIntent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DetectIntentProjectsLocationsAgentEnvironmentsUsersSessionsRequest>;

export type DetectIntentProjectsLocationsAgentEnvironmentsUsersSessionsResponse =
  GoogleCloudDialogflowV2DetectIntentResponse;
export const DetectIntentProjectsLocationsAgentEnvironmentsUsersSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2DetectIntentResponse;

export type DetectIntentProjectsLocationsAgentEnvironmentsUsersSessionsError =
  DefaultErrors;

export const detectIntentProjectsLocationsAgentEnvironmentsUsersSessions: API.OperationMethod<
  DetectIntentProjectsLocationsAgentEnvironmentsUsersSessionsRequest,
  DetectIntentProjectsLocationsAgentEnvironmentsUsersSessionsResponse,
  DetectIntentProjectsLocationsAgentEnvironmentsUsersSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DetectIntentProjectsLocationsAgentEnvironmentsUsersSessionsRequest,
  output: DetectIntentProjectsLocationsAgentEnvironmentsUsersSessionsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/contexts" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest>;

export type ListProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse =
  GoogleCloudDialogflowV2ListContextsResponse;
export const ListProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListContextsResponse;

export type ListProjectsLocationsAgentEnvironmentsUsersSessionsContextsError =
  DefaultErrors;

export const listProjectsLocationsAgentEnvironmentsUsersSessionsContexts: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest,
  ListProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse,
  ListProjectsLocationsAgentEnvironmentsUsersSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest,
  output: ListProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest>;

export type GetProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse =
  GoogleCloudDialogflowV2Context;
export const GetProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Context;

export type GetProjectsLocationsAgentEnvironmentsUsersSessionsContextsError =
  DefaultErrors;

export const getProjectsLocationsAgentEnvironmentsUsersSessionsContexts: API.OperationMethod<
  GetProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest,
  GetProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse,
  GetProjectsLocationsAgentEnvironmentsUsersSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest,
  output: GetProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{parent}/contexts", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest>;

export type CreateProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse =
  GoogleCloudDialogflowV2Context;
export const CreateProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Context;

export type CreateProjectsLocationsAgentEnvironmentsUsersSessionsContextsError =
  DefaultErrors;

export const createProjectsLocationsAgentEnvironmentsUsersSessionsContexts: API.OperationMethod<
  CreateProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest,
  CreateProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse,
  CreateProjectsLocationsAgentEnvironmentsUsersSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest,
  output: CreateProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse,
  errors: [],
}));

export interface PatchProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Context;
}

export const PatchProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2Context).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest>;

export type PatchProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse =
  GoogleCloudDialogflowV2Context;
export const PatchProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Context;

export type PatchProjectsLocationsAgentEnvironmentsUsersSessionsContextsError =
  DefaultErrors;

export const patchProjectsLocationsAgentEnvironmentsUsersSessionsContexts: API.OperationMethod<
  PatchProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest,
  PatchProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse,
  PatchProjectsLocationsAgentEnvironmentsUsersSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest,
  output: PatchProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest>;

export type DeleteProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentEnvironmentsUsersSessionsContextsError =
  DefaultErrors;

export const deleteProjectsLocationsAgentEnvironmentsUsersSessionsContexts: API.OperationMethod<
  DeleteProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest,
  DeleteProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse,
  DeleteProjectsLocationsAgentEnvironmentsUsersSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentEnvironmentsUsersSessionsContextsRequest,
  output: DeleteProjectsLocationsAgentEnvironmentsUsersSessionsContextsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/entityTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest>;

export type ListProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2ListSessionEntityTypesResponse;
export const ListProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListSessionEntityTypesResponse;

export type ListProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesError =
  DefaultErrors;

export const listProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypes: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  ListProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  ListProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  output:
    ListProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest>;

export type GetProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2SessionEntityType;
export const GetProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SessionEntityType;

export type GetProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesError =
  DefaultErrors;

export const getProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypes: API.OperationMethod<
  GetProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  GetProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  GetProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  output: GetProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{parent}/entityTypes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest>;

export type CreateProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2SessionEntityType;
export const CreateProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SessionEntityType;

export type CreateProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesError =
  DefaultErrors;

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
  errors: [],
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
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest>;

export type PatchProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2SessionEntityType;
export const PatchProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SessionEntityType;

export type PatchProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesError =
  DefaultErrors;

export const patchProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypes: API.OperationMethod<
  PatchProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  PatchProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  PatchProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  output:
    PatchProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesRequest>;

export type DeleteProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentEnvironmentsUsersSessionsEntityTypesError =
  DefaultErrors;

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
  errors: [],
}));

export interface ListProjectsLocationsAgentEnvironmentsIntentsRequest {
  parent: string;
  languageCode?: string;
  intentView?: "INTENT_VIEW_UNSPECIFIED" | "INTENT_VIEW_FULL" | (string & {});
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsAgentEnvironmentsIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    intentView: Schema.optional(Schema.String).pipe(T.HttpQuery("intentView")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{parent}/intents" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentEnvironmentsIntentsRequest>;

export type ListProjectsLocationsAgentEnvironmentsIntentsResponse =
  GoogleCloudDialogflowV2ListIntentsResponse;
export const ListProjectsLocationsAgentEnvironmentsIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListIntentsResponse;

export type ListProjectsLocationsAgentEnvironmentsIntentsError = DefaultErrors;

export const listProjectsLocationsAgentEnvironmentsIntents: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentEnvironmentsIntentsRequest,
  ListProjectsLocationsAgentEnvironmentsIntentsResponse,
  ListProjectsLocationsAgentEnvironmentsIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentEnvironmentsIntentsRequest,
  output: ListProjectsLocationsAgentEnvironmentsIntentsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/versions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentVersionsRequest>;

export type ListProjectsLocationsAgentVersionsResponse =
  GoogleCloudDialogflowV2ListVersionsResponse;
export const ListProjectsLocationsAgentVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListVersionsResponse;

export type ListProjectsLocationsAgentVersionsError = DefaultErrors;

export const listProjectsLocationsAgentVersions: API.PaginatedOperationMethod<
  ListProjectsLocationsAgentVersionsRequest,
  ListProjectsLocationsAgentVersionsResponse,
  ListProjectsLocationsAgentVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAgentVersionsRequest,
  output: ListProjectsLocationsAgentVersionsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentVersionsRequest>;

export type GetProjectsLocationsAgentVersionsResponse =
  GoogleCloudDialogflowV2Version;
export const GetProjectsLocationsAgentVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Version;

export type GetProjectsLocationsAgentVersionsError = DefaultErrors;

export const getProjectsLocationsAgentVersions: API.OperationMethod<
  GetProjectsLocationsAgentVersionsRequest,
  GetProjectsLocationsAgentVersionsResponse,
  GetProjectsLocationsAgentVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAgentVersionsRequest,
  output: GetProjectsLocationsAgentVersionsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{parent}/versions", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAgentVersionsRequest>;

export type CreateProjectsLocationsAgentVersionsResponse =
  GoogleCloudDialogflowV2Version;
export const CreateProjectsLocationsAgentVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Version;

export type CreateProjectsLocationsAgentVersionsError = DefaultErrors;

export const createProjectsLocationsAgentVersions: API.OperationMethod<
  CreateProjectsLocationsAgentVersionsRequest,
  CreateProjectsLocationsAgentVersionsResponse,
  CreateProjectsLocationsAgentVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAgentVersionsRequest,
  output: CreateProjectsLocationsAgentVersionsResponse,
  errors: [],
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
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAgentVersionsRequest>;

export type PatchProjectsLocationsAgentVersionsResponse =
  GoogleCloudDialogflowV2Version;
export const PatchProjectsLocationsAgentVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Version;

export type PatchProjectsLocationsAgentVersionsError = DefaultErrors;

export const patchProjectsLocationsAgentVersions: API.OperationMethod<
  PatchProjectsLocationsAgentVersionsRequest,
  PatchProjectsLocationsAgentVersionsResponse,
  PatchProjectsLocationsAgentVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAgentVersionsRequest,
  output: PatchProjectsLocationsAgentVersionsResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsAgentVersionsRequest {
  name: string;
}

export const DeleteProjectsLocationsAgentVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAgentVersionsRequest>;

export type DeleteProjectsLocationsAgentVersionsResponse = GoogleProtobufEmpty;
export const DeleteProjectsLocationsAgentVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsAgentVersionsError = DefaultErrors;

export const deleteProjectsLocationsAgentVersions: API.OperationMethod<
  DeleteProjectsLocationsAgentVersionsRequest,
  DeleteProjectsLocationsAgentVersionsResponse,
  DeleteProjectsLocationsAgentVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAgentVersionsRequest,
  output: DeleteProjectsLocationsAgentVersionsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{parent}/tools", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsToolsRequest>;

export type CreateProjectsLocationsToolsResponse = GoogleCloudDialogflowV2Tool;
export const CreateProjectsLocationsToolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Tool;

export type CreateProjectsLocationsToolsError = DefaultErrors;

export const createProjectsLocationsTools: API.OperationMethod<
  CreateProjectsLocationsToolsRequest,
  CreateProjectsLocationsToolsResponse,
  CreateProjectsLocationsToolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsToolsRequest,
  output: CreateProjectsLocationsToolsResponse,
  errors: [],
}));

export interface GetProjectsLocationsToolsRequest {
  name: string;
}

export const GetProjectsLocationsToolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsToolsRequest>;

export type GetProjectsLocationsToolsResponse = GoogleCloudDialogflowV2Tool;
export const GetProjectsLocationsToolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Tool;

export type GetProjectsLocationsToolsError = DefaultErrors;

export const getProjectsLocationsTools: API.OperationMethod<
  GetProjectsLocationsToolsRequest,
  GetProjectsLocationsToolsResponse,
  GetProjectsLocationsToolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsToolsRequest,
  output: GetProjectsLocationsToolsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/tools" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsToolsRequest>;

export type ListProjectsLocationsToolsResponse =
  GoogleCloudDialogflowV2ListToolsResponse;
export const ListProjectsLocationsToolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListToolsResponse;

export type ListProjectsLocationsToolsError = DefaultErrors;

export const listProjectsLocationsTools: API.PaginatedOperationMethod<
  ListProjectsLocationsToolsRequest,
  ListProjectsLocationsToolsResponse,
  ListProjectsLocationsToolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsToolsRequest,
  output: ListProjectsLocationsToolsResponse,
  errors: [],
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
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsToolsRequest>;

export type DeleteProjectsLocationsToolsResponse = GoogleProtobufEmpty;
export const DeleteProjectsLocationsToolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsToolsError = DefaultErrors;

export const deleteProjectsLocationsTools: API.OperationMethod<
  DeleteProjectsLocationsToolsRequest,
  DeleteProjectsLocationsToolsResponse,
  DeleteProjectsLocationsToolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsToolsRequest,
  output: DeleteProjectsLocationsToolsResponse,
  errors: [],
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
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsToolsRequest>;

export type PatchProjectsLocationsToolsResponse = GoogleCloudDialogflowV2Tool;
export const PatchProjectsLocationsToolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Tool;

export type PatchProjectsLocationsToolsError = DefaultErrors;

export const patchProjectsLocationsTools: API.OperationMethod<
  PatchProjectsLocationsToolsRequest,
  PatchProjectsLocationsToolsResponse,
  PatchProjectsLocationsToolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsToolsRequest,
  output: PatchProjectsLocationsToolsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{parent}/generators", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsGeneratorsRequest>;

export type CreateProjectsLocationsGeneratorsResponse =
  GoogleCloudDialogflowV2Generator;
export const CreateProjectsLocationsGeneratorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Generator;

export type CreateProjectsLocationsGeneratorsError = DefaultErrors;

export const createProjectsLocationsGenerators: API.OperationMethod<
  CreateProjectsLocationsGeneratorsRequest,
  CreateProjectsLocationsGeneratorsResponse,
  CreateProjectsLocationsGeneratorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsGeneratorsRequest,
  output: CreateProjectsLocationsGeneratorsResponse,
  errors: [],
}));

export interface GetProjectsLocationsGeneratorsRequest {
  name: string;
}

export const GetProjectsLocationsGeneratorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsGeneratorsRequest>;

export type GetProjectsLocationsGeneratorsResponse =
  GoogleCloudDialogflowV2Generator;
export const GetProjectsLocationsGeneratorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Generator;

export type GetProjectsLocationsGeneratorsError = DefaultErrors;

export const getProjectsLocationsGenerators: API.OperationMethod<
  GetProjectsLocationsGeneratorsRequest,
  GetProjectsLocationsGeneratorsResponse,
  GetProjectsLocationsGeneratorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGeneratorsRequest,
  output: GetProjectsLocationsGeneratorsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/generators" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsGeneratorsRequest>;

export type ListProjectsLocationsGeneratorsResponse =
  GoogleCloudDialogflowV2ListGeneratorsResponse;
export const ListProjectsLocationsGeneratorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListGeneratorsResponse;

export type ListProjectsLocationsGeneratorsError = DefaultErrors;

export const listProjectsLocationsGenerators: API.PaginatedOperationMethod<
  ListProjectsLocationsGeneratorsRequest,
  ListProjectsLocationsGeneratorsResponse,
  ListProjectsLocationsGeneratorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGeneratorsRequest,
  output: ListProjectsLocationsGeneratorsResponse,
  errors: [],
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
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsGeneratorsRequest>;

export type DeleteProjectsLocationsGeneratorsResponse = GoogleProtobufEmpty;
export const DeleteProjectsLocationsGeneratorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsGeneratorsError = DefaultErrors;

export const deleteProjectsLocationsGenerators: API.OperationMethod<
  DeleteProjectsLocationsGeneratorsRequest,
  DeleteProjectsLocationsGeneratorsResponse,
  DeleteProjectsLocationsGeneratorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsGeneratorsRequest,
  output: DeleteProjectsLocationsGeneratorsResponse,
  errors: [],
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
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsGeneratorsRequest>;

export type PatchProjectsLocationsGeneratorsResponse =
  GoogleCloudDialogflowV2Generator;
export const PatchProjectsLocationsGeneratorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Generator;

export type PatchProjectsLocationsGeneratorsError = DefaultErrors;

export const patchProjectsLocationsGenerators: API.OperationMethod<
  PatchProjectsLocationsGeneratorsRequest,
  PatchProjectsLocationsGeneratorsResponse,
  PatchProjectsLocationsGeneratorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsGeneratorsRequest,
  output: PatchProjectsLocationsGeneratorsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{parent}/evaluations", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsGeneratorsEvaluationsRequest>;

export type CreateProjectsLocationsGeneratorsEvaluationsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsGeneratorsEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsGeneratorsEvaluationsError = DefaultErrors;

export const createProjectsLocationsGeneratorsEvaluations: API.OperationMethod<
  CreateProjectsLocationsGeneratorsEvaluationsRequest,
  CreateProjectsLocationsGeneratorsEvaluationsResponse,
  CreateProjectsLocationsGeneratorsEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsGeneratorsEvaluationsRequest,
  output: CreateProjectsLocationsGeneratorsEvaluationsResponse,
  errors: [],
}));

export interface GetProjectsLocationsGeneratorsEvaluationsRequest {
  name: string;
}

export const GetProjectsLocationsGeneratorsEvaluationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsGeneratorsEvaluationsRequest>;

export type GetProjectsLocationsGeneratorsEvaluationsResponse =
  GoogleCloudDialogflowV2GeneratorEvaluation;
export const GetProjectsLocationsGeneratorsEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2GeneratorEvaluation;

export type GetProjectsLocationsGeneratorsEvaluationsError = DefaultErrors;

export const getProjectsLocationsGeneratorsEvaluations: API.OperationMethod<
  GetProjectsLocationsGeneratorsEvaluationsRequest,
  GetProjectsLocationsGeneratorsEvaluationsResponse,
  GetProjectsLocationsGeneratorsEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGeneratorsEvaluationsRequest,
  output: GetProjectsLocationsGeneratorsEvaluationsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/evaluations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsGeneratorsEvaluationsRequest>;

export type ListProjectsLocationsGeneratorsEvaluationsResponse =
  GoogleCloudDialogflowV2ListGeneratorEvaluationsResponse;
export const ListProjectsLocationsGeneratorsEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListGeneratorEvaluationsResponse;

export type ListProjectsLocationsGeneratorsEvaluationsError = DefaultErrors;

export const listProjectsLocationsGeneratorsEvaluations: API.PaginatedOperationMethod<
  ListProjectsLocationsGeneratorsEvaluationsRequest,
  ListProjectsLocationsGeneratorsEvaluationsResponse,
  ListProjectsLocationsGeneratorsEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGeneratorsEvaluationsRequest,
  output: ListProjectsLocationsGeneratorsEvaluationsResponse,
  errors: [],
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
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsGeneratorsEvaluationsRequest>;

export type DeleteProjectsLocationsGeneratorsEvaluationsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsGeneratorsEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsGeneratorsEvaluationsError = DefaultErrors;

export const deleteProjectsLocationsGeneratorsEvaluations: API.OperationMethod<
  DeleteProjectsLocationsGeneratorsEvaluationsRequest,
  DeleteProjectsLocationsGeneratorsEvaluationsResponse,
  DeleteProjectsLocationsGeneratorsEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsGeneratorsEvaluationsRequest,
  output: DeleteProjectsLocationsGeneratorsEvaluationsResponse,
  errors: [],
}));

export interface ListProjectsLocationsAnswerRecordsRequest {
  parent: string;
  filter?: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsLocationsAnswerRecordsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{parent}/answerRecords" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAnswerRecordsRequest>;

export type ListProjectsLocationsAnswerRecordsResponse =
  GoogleCloudDialogflowV2ListAnswerRecordsResponse;
export const ListProjectsLocationsAnswerRecordsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListAnswerRecordsResponse;

export type ListProjectsLocationsAnswerRecordsError = DefaultErrors;

export const listProjectsLocationsAnswerRecords: API.PaginatedOperationMethod<
  ListProjectsLocationsAnswerRecordsRequest,
  ListProjectsLocationsAnswerRecordsResponse,
  ListProjectsLocationsAnswerRecordsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAnswerRecordsRequest,
  output: ListProjectsLocationsAnswerRecordsResponse,
  errors: [],
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
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAnswerRecordsRequest>;

export type PatchProjectsLocationsAnswerRecordsResponse =
  GoogleCloudDialogflowV2AnswerRecord;
export const PatchProjectsLocationsAnswerRecordsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2AnswerRecord;

export type PatchProjectsLocationsAnswerRecordsError = DefaultErrors;

export const patchProjectsLocationsAnswerRecords: API.OperationMethod<
  PatchProjectsLocationsAnswerRecordsRequest,
  PatchProjectsLocationsAnswerRecordsResponse,
  PatchProjectsLocationsAnswerRecordsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAnswerRecordsRequest,
  output: PatchProjectsLocationsAnswerRecordsResponse,
  errors: [],
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
      path: "v2/{parent}/conversationDatasets",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConversationDatasetsRequest>;

export type CreateProjectsLocationsConversationDatasetsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsConversationDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsConversationDatasetsError = DefaultErrors;

export const createProjectsLocationsConversationDatasets: API.OperationMethod<
  CreateProjectsLocationsConversationDatasetsRequest,
  CreateProjectsLocationsConversationDatasetsResponse,
  CreateProjectsLocationsConversationDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsConversationDatasetsRequest,
  output: CreateProjectsLocationsConversationDatasetsResponse,
  errors: [],
}));

export interface GetProjectsLocationsConversationDatasetsRequest {
  name: string;
}

export const GetProjectsLocationsConversationDatasetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConversationDatasetsRequest>;

export type GetProjectsLocationsConversationDatasetsResponse =
  GoogleCloudDialogflowV2ConversationDataset;
export const GetProjectsLocationsConversationDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ConversationDataset;

export type GetProjectsLocationsConversationDatasetsError = DefaultErrors;

export const getProjectsLocationsConversationDatasets: API.OperationMethod<
  GetProjectsLocationsConversationDatasetsRequest,
  GetProjectsLocationsConversationDatasetsResponse,
  GetProjectsLocationsConversationDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConversationDatasetsRequest,
  output: GetProjectsLocationsConversationDatasetsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/conversationDatasets" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConversationDatasetsRequest>;

export type ListProjectsLocationsConversationDatasetsResponse =
  GoogleCloudDialogflowV2ListConversationDatasetsResponse;
export const ListProjectsLocationsConversationDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListConversationDatasetsResponse;

export type ListProjectsLocationsConversationDatasetsError = DefaultErrors;

export const listProjectsLocationsConversationDatasets: API.PaginatedOperationMethod<
  ListProjectsLocationsConversationDatasetsRequest,
  ListProjectsLocationsConversationDatasetsResponse,
  ListProjectsLocationsConversationDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConversationDatasetsRequest,
  output: ListProjectsLocationsConversationDatasetsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsConversationDatasetsRequest {
  name: string;
}

export const DeleteProjectsLocationsConversationDatasetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsConversationDatasetsRequest>;

export type DeleteProjectsLocationsConversationDatasetsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsConversationDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsConversationDatasetsError = DefaultErrors;

export const deleteProjectsLocationsConversationDatasets: API.OperationMethod<
  DeleteProjectsLocationsConversationDatasetsRequest,
  DeleteProjectsLocationsConversationDatasetsResponse,
  DeleteProjectsLocationsConversationDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsConversationDatasetsRequest,
  output: DeleteProjectsLocationsConversationDatasetsResponse,
  errors: [],
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
      path: "v2/{name}:importConversationData",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ImportConversationDataProjectsLocationsConversationDatasetsRequest>;

export type ImportConversationDataProjectsLocationsConversationDatasetsResponse =
  GoogleLongrunningOperation;
export const ImportConversationDataProjectsLocationsConversationDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ImportConversationDataProjectsLocationsConversationDatasetsError =
  DefaultErrors;

export const importConversationDataProjectsLocationsConversationDatasets: API.OperationMethod<
  ImportConversationDataProjectsLocationsConversationDatasetsRequest,
  ImportConversationDataProjectsLocationsConversationDatasetsResponse,
  ImportConversationDataProjectsLocationsConversationDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportConversationDataProjectsLocationsConversationDatasetsRequest,
  output: ImportConversationDataProjectsLocationsConversationDatasetsResponse,
  errors: [],
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
      path: "v2/{parent}/conversationModels",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConversationModelsRequest>;

export type CreateProjectsLocationsConversationModelsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsConversationModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsConversationModelsError = DefaultErrors;

export const createProjectsLocationsConversationModels: API.OperationMethod<
  CreateProjectsLocationsConversationModelsRequest,
  CreateProjectsLocationsConversationModelsResponse,
  CreateProjectsLocationsConversationModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsConversationModelsRequest,
  output: CreateProjectsLocationsConversationModelsResponse,
  errors: [],
}));

export interface GetProjectsLocationsConversationModelsRequest {
  name: string;
}

export const GetProjectsLocationsConversationModelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConversationModelsRequest>;

export type GetProjectsLocationsConversationModelsResponse =
  GoogleCloudDialogflowV2ConversationModel;
export const GetProjectsLocationsConversationModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ConversationModel;

export type GetProjectsLocationsConversationModelsError = DefaultErrors;

export const getProjectsLocationsConversationModels: API.OperationMethod<
  GetProjectsLocationsConversationModelsRequest,
  GetProjectsLocationsConversationModelsResponse,
  GetProjectsLocationsConversationModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConversationModelsRequest,
  output: GetProjectsLocationsConversationModelsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/conversationModels" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConversationModelsRequest>;

export type ListProjectsLocationsConversationModelsResponse =
  GoogleCloudDialogflowV2ListConversationModelsResponse;
export const ListProjectsLocationsConversationModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListConversationModelsResponse;

export type ListProjectsLocationsConversationModelsError = DefaultErrors;

export const listProjectsLocationsConversationModels: API.PaginatedOperationMethod<
  ListProjectsLocationsConversationModelsRequest,
  ListProjectsLocationsConversationModelsResponse,
  ListProjectsLocationsConversationModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConversationModelsRequest,
  output: ListProjectsLocationsConversationModelsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsConversationModelsRequest {
  name: string;
}

export const DeleteProjectsLocationsConversationModelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsConversationModelsRequest>;

export type DeleteProjectsLocationsConversationModelsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsConversationModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsConversationModelsError = DefaultErrors;

export const deleteProjectsLocationsConversationModels: API.OperationMethod<
  DeleteProjectsLocationsConversationModelsRequest,
  DeleteProjectsLocationsConversationModelsResponse,
  DeleteProjectsLocationsConversationModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsConversationModelsRequest,
  output: DeleteProjectsLocationsConversationModelsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{name}:deploy", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<DeployProjectsLocationsConversationModelsRequest>;

export type DeployProjectsLocationsConversationModelsResponse =
  GoogleLongrunningOperation;
export const DeployProjectsLocationsConversationModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeployProjectsLocationsConversationModelsError = DefaultErrors;

export const deployProjectsLocationsConversationModels: API.OperationMethod<
  DeployProjectsLocationsConversationModelsRequest,
  DeployProjectsLocationsConversationModelsResponse,
  DeployProjectsLocationsConversationModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeployProjectsLocationsConversationModelsRequest,
  output: DeployProjectsLocationsConversationModelsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{name}:undeploy", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UndeployProjectsLocationsConversationModelsRequest>;

export type UndeployProjectsLocationsConversationModelsResponse =
  GoogleLongrunningOperation;
export const UndeployProjectsLocationsConversationModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type UndeployProjectsLocationsConversationModelsError = DefaultErrors;

export const undeployProjectsLocationsConversationModels: API.OperationMethod<
  UndeployProjectsLocationsConversationModelsRequest,
  UndeployProjectsLocationsConversationModelsResponse,
  UndeployProjectsLocationsConversationModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UndeployProjectsLocationsConversationModelsRequest,
  output: UndeployProjectsLocationsConversationModelsResponse,
  errors: [],
}));

export interface GetProjectsLocationsConversationModelsEvaluationsRequest {
  name: string;
}

export const GetProjectsLocationsConversationModelsEvaluationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConversationModelsEvaluationsRequest>;

export type GetProjectsLocationsConversationModelsEvaluationsResponse =
  GoogleCloudDialogflowV2ConversationModelEvaluation;
export const GetProjectsLocationsConversationModelsEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ConversationModelEvaluation;

export type GetProjectsLocationsConversationModelsEvaluationsError =
  DefaultErrors;

export const getProjectsLocationsConversationModelsEvaluations: API.OperationMethod<
  GetProjectsLocationsConversationModelsEvaluationsRequest,
  GetProjectsLocationsConversationModelsEvaluationsResponse,
  GetProjectsLocationsConversationModelsEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConversationModelsEvaluationsRequest,
  output: GetProjectsLocationsConversationModelsEvaluationsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/evaluations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConversationModelsEvaluationsRequest>;

export type ListProjectsLocationsConversationModelsEvaluationsResponse =
  GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse;
export const ListProjectsLocationsConversationModelsEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse;

export type ListProjectsLocationsConversationModelsEvaluationsError =
  DefaultErrors;

export const listProjectsLocationsConversationModelsEvaluations: API.PaginatedOperationMethod<
  ListProjectsLocationsConversationModelsEvaluationsRequest,
  ListProjectsLocationsConversationModelsEvaluationsResponse,
  ListProjectsLocationsConversationModelsEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConversationModelsEvaluationsRequest,
  output: ListProjectsLocationsConversationModelsEvaluationsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{parent}/evaluations", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConversationModelsEvaluationsRequest>;

export type CreateProjectsLocationsConversationModelsEvaluationsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsConversationModelsEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsConversationModelsEvaluationsError =
  DefaultErrors;

export const createProjectsLocationsConversationModelsEvaluations: API.OperationMethod<
  CreateProjectsLocationsConversationModelsEvaluationsRequest,
  CreateProjectsLocationsConversationModelsEvaluationsResponse,
  CreateProjectsLocationsConversationModelsEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsConversationModelsEvaluationsRequest,
  output: CreateProjectsLocationsConversationModelsEvaluationsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/conversationProfiles" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConversationProfilesRequest>;

export type ListProjectsLocationsConversationProfilesResponse =
  GoogleCloudDialogflowV2ListConversationProfilesResponse;
export const ListProjectsLocationsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListConversationProfilesResponse;

export type ListProjectsLocationsConversationProfilesError = DefaultErrors;

export const listProjectsLocationsConversationProfiles: API.PaginatedOperationMethod<
  ListProjectsLocationsConversationProfilesRequest,
  ListProjectsLocationsConversationProfilesResponse,
  ListProjectsLocationsConversationProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConversationProfilesRequest,
  output: ListProjectsLocationsConversationProfilesResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConversationProfilesRequest>;

export type GetProjectsLocationsConversationProfilesResponse =
  GoogleCloudDialogflowV2ConversationProfile;
export const GetProjectsLocationsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ConversationProfile;

export type GetProjectsLocationsConversationProfilesError = DefaultErrors;

export const getProjectsLocationsConversationProfiles: API.OperationMethod<
  GetProjectsLocationsConversationProfilesRequest,
  GetProjectsLocationsConversationProfilesResponse,
  GetProjectsLocationsConversationProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConversationProfilesRequest,
  output: GetProjectsLocationsConversationProfilesResponse,
  errors: [],
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
      path: "v2/{parent}/conversationProfiles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConversationProfilesRequest>;

export type CreateProjectsLocationsConversationProfilesResponse =
  GoogleCloudDialogflowV2ConversationProfile;
export const CreateProjectsLocationsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ConversationProfile;

export type CreateProjectsLocationsConversationProfilesError = DefaultErrors;

export const createProjectsLocationsConversationProfiles: API.OperationMethod<
  CreateProjectsLocationsConversationProfilesRequest,
  CreateProjectsLocationsConversationProfilesResponse,
  CreateProjectsLocationsConversationProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsConversationProfilesRequest,
  output: CreateProjectsLocationsConversationProfilesResponse,
  errors: [],
}));

export interface PatchProjectsLocationsConversationProfilesRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2ConversationProfile;
}

export const PatchProjectsLocationsConversationProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2ConversationProfile).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsConversationProfilesRequest>;

export type PatchProjectsLocationsConversationProfilesResponse =
  GoogleCloudDialogflowV2ConversationProfile;
export const PatchProjectsLocationsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ConversationProfile;

export type PatchProjectsLocationsConversationProfilesError = DefaultErrors;

export const patchProjectsLocationsConversationProfiles: API.OperationMethod<
  PatchProjectsLocationsConversationProfilesRequest,
  PatchProjectsLocationsConversationProfilesResponse,
  PatchProjectsLocationsConversationProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsConversationProfilesRequest,
  output: PatchProjectsLocationsConversationProfilesResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsConversationProfilesRequest {
  name: string;
}

export const DeleteProjectsLocationsConversationProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsConversationProfilesRequest>;

export type DeleteProjectsLocationsConversationProfilesResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsConversationProfilesError = DefaultErrors;

export const deleteProjectsLocationsConversationProfiles: API.OperationMethod<
  DeleteProjectsLocationsConversationProfilesRequest,
  DeleteProjectsLocationsConversationProfilesResponse,
  DeleteProjectsLocationsConversationProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsConversationProfilesRequest,
  output: DeleteProjectsLocationsConversationProfilesResponse,
  errors: [],
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
      path: "v2/{conversationProfile}:setSuggestionFeatureConfig",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetSuggestionFeatureConfigProjectsLocationsConversationProfilesRequest>;

export type SetSuggestionFeatureConfigProjectsLocationsConversationProfilesResponse =
  GoogleLongrunningOperation;
export const SetSuggestionFeatureConfigProjectsLocationsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type SetSuggestionFeatureConfigProjectsLocationsConversationProfilesError =
  DefaultErrors;

export const setSuggestionFeatureConfigProjectsLocationsConversationProfiles: API.OperationMethod<
  SetSuggestionFeatureConfigProjectsLocationsConversationProfilesRequest,
  SetSuggestionFeatureConfigProjectsLocationsConversationProfilesResponse,
  SetSuggestionFeatureConfigProjectsLocationsConversationProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetSuggestionFeatureConfigProjectsLocationsConversationProfilesRequest,
  output:
    SetSuggestionFeatureConfigProjectsLocationsConversationProfilesResponse,
  errors: [],
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
      path: "v2/{conversationProfile}:clearSuggestionFeatureConfig",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ClearSuggestionFeatureConfigProjectsLocationsConversationProfilesRequest>;

export type ClearSuggestionFeatureConfigProjectsLocationsConversationProfilesResponse =
  GoogleLongrunningOperation;
export const ClearSuggestionFeatureConfigProjectsLocationsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ClearSuggestionFeatureConfigProjectsLocationsConversationProfilesError =
  DefaultErrors;

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
  errors: [],
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
      path: "v2/{parent}/conversations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConversationsRequest>;

export type CreateProjectsLocationsConversationsResponse =
  GoogleCloudDialogflowV2Conversation;
export const CreateProjectsLocationsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Conversation;

export type CreateProjectsLocationsConversationsError = DefaultErrors;

export const createProjectsLocationsConversations: API.OperationMethod<
  CreateProjectsLocationsConversationsRequest,
  CreateProjectsLocationsConversationsResponse,
  CreateProjectsLocationsConversationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsConversationsRequest,
  output: CreateProjectsLocationsConversationsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/conversations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConversationsRequest>;

export type ListProjectsLocationsConversationsResponse =
  GoogleCloudDialogflowV2ListConversationsResponse;
export const ListProjectsLocationsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListConversationsResponse;

export type ListProjectsLocationsConversationsError = DefaultErrors;

export const listProjectsLocationsConversations: API.PaginatedOperationMethod<
  ListProjectsLocationsConversationsRequest,
  ListProjectsLocationsConversationsResponse,
  ListProjectsLocationsConversationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConversationsRequest,
  output: ListProjectsLocationsConversationsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConversationsRequest>;

export type GetProjectsLocationsConversationsResponse =
  GoogleCloudDialogflowV2Conversation;
export const GetProjectsLocationsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Conversation;

export type GetProjectsLocationsConversationsError = DefaultErrors;

export const getProjectsLocationsConversations: API.OperationMethod<
  GetProjectsLocationsConversationsRequest,
  GetProjectsLocationsConversationsResponse,
  GetProjectsLocationsConversationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConversationsRequest,
  output: GetProjectsLocationsConversationsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{name}:complete", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CompleteProjectsLocationsConversationsRequest>;

export type CompleteProjectsLocationsConversationsResponse =
  GoogleCloudDialogflowV2Conversation;
export const CompleteProjectsLocationsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Conversation;

export type CompleteProjectsLocationsConversationsError = DefaultErrors;

export const completeProjectsLocationsConversations: API.OperationMethod<
  CompleteProjectsLocationsConversationsRequest,
  CompleteProjectsLocationsConversationsResponse,
  CompleteProjectsLocationsConversationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CompleteProjectsLocationsConversationsRequest,
  output: CompleteProjectsLocationsConversationsResponse,
  errors: [],
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
      path: "v2/{conversation}:ingestContextReferences",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<IngestContextReferencesProjectsLocationsConversationsRequest>;

export type IngestContextReferencesProjectsLocationsConversationsResponse =
  GoogleCloudDialogflowV2IngestContextReferencesResponse;
export const IngestContextReferencesProjectsLocationsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2IngestContextReferencesResponse;

export type IngestContextReferencesProjectsLocationsConversationsError =
  DefaultErrors;

export const ingestContextReferencesProjectsLocationsConversations: API.OperationMethod<
  IngestContextReferencesProjectsLocationsConversationsRequest,
  IngestContextReferencesProjectsLocationsConversationsResponse,
  IngestContextReferencesProjectsLocationsConversationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: IngestContextReferencesProjectsLocationsConversationsRequest,
  output: IngestContextReferencesProjectsLocationsConversationsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{parent}/participants", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConversationsParticipantsRequest>;

export type CreateProjectsLocationsConversationsParticipantsResponse =
  GoogleCloudDialogflowV2Participant;
export const CreateProjectsLocationsConversationsParticipantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Participant;

export type CreateProjectsLocationsConversationsParticipantsError =
  DefaultErrors;

export const createProjectsLocationsConversationsParticipants: API.OperationMethod<
  CreateProjectsLocationsConversationsParticipantsRequest,
  CreateProjectsLocationsConversationsParticipantsResponse,
  CreateProjectsLocationsConversationsParticipantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsConversationsParticipantsRequest,
  output: CreateProjectsLocationsConversationsParticipantsResponse,
  errors: [],
}));

export interface GetProjectsLocationsConversationsParticipantsRequest {
  name: string;
}

export const GetProjectsLocationsConversationsParticipantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConversationsParticipantsRequest>;

export type GetProjectsLocationsConversationsParticipantsResponse =
  GoogleCloudDialogflowV2Participant;
export const GetProjectsLocationsConversationsParticipantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Participant;

export type GetProjectsLocationsConversationsParticipantsError = DefaultErrors;

export const getProjectsLocationsConversationsParticipants: API.OperationMethod<
  GetProjectsLocationsConversationsParticipantsRequest,
  GetProjectsLocationsConversationsParticipantsResponse,
  GetProjectsLocationsConversationsParticipantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConversationsParticipantsRequest,
  output: GetProjectsLocationsConversationsParticipantsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/participants" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConversationsParticipantsRequest>;

export type ListProjectsLocationsConversationsParticipantsResponse =
  GoogleCloudDialogflowV2ListParticipantsResponse;
export const ListProjectsLocationsConversationsParticipantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListParticipantsResponse;

export type ListProjectsLocationsConversationsParticipantsError = DefaultErrors;

export const listProjectsLocationsConversationsParticipants: API.PaginatedOperationMethod<
  ListProjectsLocationsConversationsParticipantsRequest,
  ListProjectsLocationsConversationsParticipantsResponse,
  ListProjectsLocationsConversationsParticipantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConversationsParticipantsRequest,
  output: ListProjectsLocationsConversationsParticipantsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsConversationsParticipantsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Participant;
}

export const PatchProjectsLocationsConversationsParticipantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2Participant).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsConversationsParticipantsRequest>;

export type PatchProjectsLocationsConversationsParticipantsResponse =
  GoogleCloudDialogflowV2Participant;
export const PatchProjectsLocationsConversationsParticipantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Participant;

export type PatchProjectsLocationsConversationsParticipantsError =
  DefaultErrors;

export const patchProjectsLocationsConversationsParticipants: API.OperationMethod<
  PatchProjectsLocationsConversationsParticipantsRequest,
  PatchProjectsLocationsConversationsParticipantsResponse,
  PatchProjectsLocationsConversationsParticipantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsConversationsParticipantsRequest,
  output: PatchProjectsLocationsConversationsParticipantsResponse,
  errors: [],
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
      path: "v2/{participant}:analyzeContent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AnalyzeContentProjectsLocationsConversationsParticipantsRequest>;

export type AnalyzeContentProjectsLocationsConversationsParticipantsResponse =
  GoogleCloudDialogflowV2AnalyzeContentResponse;
export const AnalyzeContentProjectsLocationsConversationsParticipantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2AnalyzeContentResponse;

export type AnalyzeContentProjectsLocationsConversationsParticipantsError =
  DefaultErrors;

export const analyzeContentProjectsLocationsConversationsParticipants: API.OperationMethod<
  AnalyzeContentProjectsLocationsConversationsParticipantsRequest,
  AnalyzeContentProjectsLocationsConversationsParticipantsResponse,
  AnalyzeContentProjectsLocationsConversationsParticipantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AnalyzeContentProjectsLocationsConversationsParticipantsRequest,
  output: AnalyzeContentProjectsLocationsConversationsParticipantsResponse,
  errors: [],
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
      path: "v2/{parent}/suggestions:suggestArticles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SuggestArticlesProjectsLocationsConversationsParticipantsSuggestionsRequest>;

export type SuggestArticlesProjectsLocationsConversationsParticipantsSuggestionsResponse =
  GoogleCloudDialogflowV2SuggestArticlesResponse;
export const SuggestArticlesProjectsLocationsConversationsParticipantsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SuggestArticlesResponse;

export type SuggestArticlesProjectsLocationsConversationsParticipantsSuggestionsError =
  DefaultErrors;

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
  errors: [],
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
      path: "v2/{parent}/suggestions:suggestFaqAnswers",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SuggestFaqAnswersProjectsLocationsConversationsParticipantsSuggestionsRequest>;

export type SuggestFaqAnswersProjectsLocationsConversationsParticipantsSuggestionsResponse =
  GoogleCloudDialogflowV2SuggestFaqAnswersResponse;
export const SuggestFaqAnswersProjectsLocationsConversationsParticipantsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SuggestFaqAnswersResponse;

export type SuggestFaqAnswersProjectsLocationsConversationsParticipantsSuggestionsError =
  DefaultErrors;

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
  errors: [],
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
      path: "v2/{parent}/suggestions:suggestSmartReplies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SuggestSmartRepliesProjectsLocationsConversationsParticipantsSuggestionsRequest>;

export type SuggestSmartRepliesProjectsLocationsConversationsParticipantsSuggestionsResponse =
  GoogleCloudDialogflowV2SuggestSmartRepliesResponse;
export const SuggestSmartRepliesProjectsLocationsConversationsParticipantsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SuggestSmartRepliesResponse;

export type SuggestSmartRepliesProjectsLocationsConversationsParticipantsSuggestionsError =
  DefaultErrors;

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
  errors: [],
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
      path: "v2/{parent}/suggestions:suggestKnowledgeAssist",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SuggestKnowledgeAssistProjectsLocationsConversationsParticipantsSuggestionsRequest>;

export type SuggestKnowledgeAssistProjectsLocationsConversationsParticipantsSuggestionsResponse =
  GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse;
export const SuggestKnowledgeAssistProjectsLocationsConversationsParticipantsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse;

export type SuggestKnowledgeAssistProjectsLocationsConversationsParticipantsSuggestionsError =
  DefaultErrors;

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
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/messages" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConversationsMessagesRequest>;

export type ListProjectsLocationsConversationsMessagesResponse =
  GoogleCloudDialogflowV2ListMessagesResponse;
export const ListProjectsLocationsConversationsMessagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListMessagesResponse;

export type ListProjectsLocationsConversationsMessagesError = DefaultErrors;

export const listProjectsLocationsConversationsMessages: API.PaginatedOperationMethod<
  ListProjectsLocationsConversationsMessagesRequest,
  ListProjectsLocationsConversationsMessagesResponse,
  ListProjectsLocationsConversationsMessagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConversationsMessagesRequest,
  output: ListProjectsLocationsConversationsMessagesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
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
      path: "v2/{conversation}/suggestions:suggestConversationSummary",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SuggestConversationSummaryProjectsLocationsConversationsSuggestionsRequest>;

export type SuggestConversationSummaryProjectsLocationsConversationsSuggestionsResponse =
  GoogleCloudDialogflowV2SuggestConversationSummaryResponse;
export const SuggestConversationSummaryProjectsLocationsConversationsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SuggestConversationSummaryResponse;

export type SuggestConversationSummaryProjectsLocationsConversationsSuggestionsError =
  DefaultErrors;

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
  errors: [],
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
      path: "v2/{conversation}/suggestions:searchKnowledge",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SearchKnowledgeProjectsLocationsConversationsSuggestionsRequest>;

export type SearchKnowledgeProjectsLocationsConversationsSuggestionsResponse =
  GoogleCloudDialogflowV2SearchKnowledgeResponse;
export const SearchKnowledgeProjectsLocationsConversationsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SearchKnowledgeResponse;

export type SearchKnowledgeProjectsLocationsConversationsSuggestionsError =
  DefaultErrors;

export const searchKnowledgeProjectsLocationsConversationsSuggestions: API.OperationMethod<
  SearchKnowledgeProjectsLocationsConversationsSuggestionsRequest,
  SearchKnowledgeProjectsLocationsConversationsSuggestionsResponse,
  SearchKnowledgeProjectsLocationsConversationsSuggestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchKnowledgeProjectsLocationsConversationsSuggestionsRequest,
  output: SearchKnowledgeProjectsLocationsConversationsSuggestionsResponse,
  errors: [],
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
      path: "v2/{conversation}/suggestions:generate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateProjectsLocationsConversationsSuggestionsRequest>;

export type GenerateProjectsLocationsConversationsSuggestionsResponse =
  GoogleCloudDialogflowV2GenerateSuggestionsResponse;
export const GenerateProjectsLocationsConversationsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2GenerateSuggestionsResponse;

export type GenerateProjectsLocationsConversationsSuggestionsError =
  DefaultErrors;

export const generateProjectsLocationsConversationsSuggestions: API.OperationMethod<
  GenerateProjectsLocationsConversationsSuggestionsRequest,
  GenerateProjectsLocationsConversationsSuggestionsResponse,
  GenerateProjectsLocationsConversationsSuggestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateProjectsLocationsConversationsSuggestionsRequest,
  output: GenerateProjectsLocationsConversationsSuggestionsResponse,
  errors: [],
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
      path: "v2/{parent}/suggestions:generateStatelessSummary",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateStatelessSummaryProjectsLocationsSuggestionsRequest>;

export type GenerateStatelessSummaryProjectsLocationsSuggestionsResponse =
  GoogleCloudDialogflowV2GenerateStatelessSummaryResponse;
export const GenerateStatelessSummaryProjectsLocationsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2GenerateStatelessSummaryResponse;

export type GenerateStatelessSummaryProjectsLocationsSuggestionsError =
  DefaultErrors;

export const generateStatelessSummaryProjectsLocationsSuggestions: API.OperationMethod<
  GenerateStatelessSummaryProjectsLocationsSuggestionsRequest,
  GenerateStatelessSummaryProjectsLocationsSuggestionsResponse,
  GenerateStatelessSummaryProjectsLocationsSuggestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateStatelessSummaryProjectsLocationsSuggestionsRequest,
  output: GenerateStatelessSummaryProjectsLocationsSuggestionsResponse,
  errors: [],
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
      path: "v2/{parent}/suggestions:searchKnowledge",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SearchKnowledgeProjectsLocationsSuggestionsRequest>;

export type SearchKnowledgeProjectsLocationsSuggestionsResponse =
  GoogleCloudDialogflowV2SearchKnowledgeResponse;
export const SearchKnowledgeProjectsLocationsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SearchKnowledgeResponse;

export type SearchKnowledgeProjectsLocationsSuggestionsError = DefaultErrors;

export const searchKnowledgeProjectsLocationsSuggestions: API.OperationMethod<
  SearchKnowledgeProjectsLocationsSuggestionsRequest,
  SearchKnowledgeProjectsLocationsSuggestionsResponse,
  SearchKnowledgeProjectsLocationsSuggestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchKnowledgeProjectsLocationsSuggestionsRequest,
  output: SearchKnowledgeProjectsLocationsSuggestionsResponse,
  errors: [],
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
      path: "v2/{parent}/statelessSuggestion:generate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateProjectsLocationsStatelessSuggestionRequest>;

export type GenerateProjectsLocationsStatelessSuggestionResponse =
  GoogleCloudDialogflowV2GenerateStatelessSuggestionResponse;
export const GenerateProjectsLocationsStatelessSuggestionResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2GenerateStatelessSuggestionResponse;

export type GenerateProjectsLocationsStatelessSuggestionError = DefaultErrors;

export const generateProjectsLocationsStatelessSuggestion: API.OperationMethod<
  GenerateProjectsLocationsStatelessSuggestionRequest,
  GenerateProjectsLocationsStatelessSuggestionResponse,
  GenerateProjectsLocationsStatelessSuggestionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateProjectsLocationsStatelessSuggestionRequest,
  output: GenerateProjectsLocationsStatelessSuggestionResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{name}:initialize", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<InitializeProjectsLocationsEncryptionSpecRequest>;

export type InitializeProjectsLocationsEncryptionSpecResponse =
  GoogleLongrunningOperation;
export const InitializeProjectsLocationsEncryptionSpecResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type InitializeProjectsLocationsEncryptionSpecError = DefaultErrors;

export const initializeProjectsLocationsEncryptionSpec: API.OperationMethod<
  InitializeProjectsLocationsEncryptionSpecRequest,
  InitializeProjectsLocationsEncryptionSpecResponse,
  InitializeProjectsLocationsEncryptionSpecError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InitializeProjectsLocationsEncryptionSpecRequest,
  output: InitializeProjectsLocationsEncryptionSpecResponse,
  errors: [],
}));

export interface ListProjectsLocationsKnowledgeBasesRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
  filter?: string;
}

export const ListProjectsLocationsKnowledgeBasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{parent}/knowledgeBases" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsKnowledgeBasesRequest>;

export type ListProjectsLocationsKnowledgeBasesResponse =
  GoogleCloudDialogflowV2ListKnowledgeBasesResponse;
export const ListProjectsLocationsKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListKnowledgeBasesResponse;

export type ListProjectsLocationsKnowledgeBasesError = DefaultErrors;

export const listProjectsLocationsKnowledgeBases: API.PaginatedOperationMethod<
  ListProjectsLocationsKnowledgeBasesRequest,
  ListProjectsLocationsKnowledgeBasesResponse,
  ListProjectsLocationsKnowledgeBasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsKnowledgeBasesRequest,
  output: ListProjectsLocationsKnowledgeBasesResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsKnowledgeBasesRequest>;

export type GetProjectsLocationsKnowledgeBasesResponse =
  GoogleCloudDialogflowV2KnowledgeBase;
export const GetProjectsLocationsKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2KnowledgeBase;

export type GetProjectsLocationsKnowledgeBasesError = DefaultErrors;

export const getProjectsLocationsKnowledgeBases: API.OperationMethod<
  GetProjectsLocationsKnowledgeBasesRequest,
  GetProjectsLocationsKnowledgeBasesResponse,
  GetProjectsLocationsKnowledgeBasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsKnowledgeBasesRequest,
  output: GetProjectsLocationsKnowledgeBasesResponse,
  errors: [],
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
      path: "v2/{parent}/knowledgeBases",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsKnowledgeBasesRequest>;

export type CreateProjectsLocationsKnowledgeBasesResponse =
  GoogleCloudDialogflowV2KnowledgeBase;
export const CreateProjectsLocationsKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2KnowledgeBase;

export type CreateProjectsLocationsKnowledgeBasesError = DefaultErrors;

export const createProjectsLocationsKnowledgeBases: API.OperationMethod<
  CreateProjectsLocationsKnowledgeBasesRequest,
  CreateProjectsLocationsKnowledgeBasesResponse,
  CreateProjectsLocationsKnowledgeBasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsKnowledgeBasesRequest,
  output: CreateProjectsLocationsKnowledgeBasesResponse,
  errors: [],
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
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsKnowledgeBasesRequest>;

export type DeleteProjectsLocationsKnowledgeBasesResponse = GoogleProtobufEmpty;
export const DeleteProjectsLocationsKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsKnowledgeBasesError = DefaultErrors;

export const deleteProjectsLocationsKnowledgeBases: API.OperationMethod<
  DeleteProjectsLocationsKnowledgeBasesRequest,
  DeleteProjectsLocationsKnowledgeBasesResponse,
  DeleteProjectsLocationsKnowledgeBasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsKnowledgeBasesRequest,
  output: DeleteProjectsLocationsKnowledgeBasesResponse,
  errors: [],
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
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsKnowledgeBasesRequest>;

export type PatchProjectsLocationsKnowledgeBasesResponse =
  GoogleCloudDialogflowV2KnowledgeBase;
export const PatchProjectsLocationsKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2KnowledgeBase;

export type PatchProjectsLocationsKnowledgeBasesError = DefaultErrors;

export const patchProjectsLocationsKnowledgeBases: API.OperationMethod<
  PatchProjectsLocationsKnowledgeBasesRequest,
  PatchProjectsLocationsKnowledgeBasesResponse,
  PatchProjectsLocationsKnowledgeBasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsKnowledgeBasesRequest,
  output: PatchProjectsLocationsKnowledgeBasesResponse,
  errors: [],
}));

export interface ListProjectsLocationsKnowledgeBasesDocumentsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
  filter?: string;
}

export const ListProjectsLocationsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{parent}/documents" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsKnowledgeBasesDocumentsRequest>;

export type ListProjectsLocationsKnowledgeBasesDocumentsResponse =
  GoogleCloudDialogflowV2ListDocumentsResponse;
export const ListProjectsLocationsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListDocumentsResponse;

export type ListProjectsLocationsKnowledgeBasesDocumentsError = DefaultErrors;

export const listProjectsLocationsKnowledgeBasesDocuments: API.PaginatedOperationMethod<
  ListProjectsLocationsKnowledgeBasesDocumentsRequest,
  ListProjectsLocationsKnowledgeBasesDocumentsResponse,
  ListProjectsLocationsKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsKnowledgeBasesDocumentsRequest,
  output: ListProjectsLocationsKnowledgeBasesDocumentsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsKnowledgeBasesDocumentsRequest>;

export type GetProjectsLocationsKnowledgeBasesDocumentsResponse =
  GoogleCloudDialogflowV2Document;
export const GetProjectsLocationsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Document;

export type GetProjectsLocationsKnowledgeBasesDocumentsError = DefaultErrors;

export const getProjectsLocationsKnowledgeBasesDocuments: API.OperationMethod<
  GetProjectsLocationsKnowledgeBasesDocumentsRequest,
  GetProjectsLocationsKnowledgeBasesDocumentsResponse,
  GetProjectsLocationsKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsKnowledgeBasesDocumentsRequest,
  output: GetProjectsLocationsKnowledgeBasesDocumentsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{parent}/documents", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsKnowledgeBasesDocumentsRequest>;

export type CreateProjectsLocationsKnowledgeBasesDocumentsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsKnowledgeBasesDocumentsError = DefaultErrors;

export const createProjectsLocationsKnowledgeBasesDocuments: API.OperationMethod<
  CreateProjectsLocationsKnowledgeBasesDocumentsRequest,
  CreateProjectsLocationsKnowledgeBasesDocumentsResponse,
  CreateProjectsLocationsKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsKnowledgeBasesDocumentsRequest,
  output: CreateProjectsLocationsKnowledgeBasesDocumentsResponse,
  errors: [],
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
      path: "v2/{parent}/documents:import",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ImportProjectsLocationsKnowledgeBasesDocumentsRequest>;

export type ImportProjectsLocationsKnowledgeBasesDocumentsResponse =
  GoogleLongrunningOperation;
export const ImportProjectsLocationsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ImportProjectsLocationsKnowledgeBasesDocumentsError = DefaultErrors;

export const importProjectsLocationsKnowledgeBasesDocuments: API.OperationMethod<
  ImportProjectsLocationsKnowledgeBasesDocumentsRequest,
  ImportProjectsLocationsKnowledgeBasesDocumentsResponse,
  ImportProjectsLocationsKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportProjectsLocationsKnowledgeBasesDocumentsRequest,
  output: ImportProjectsLocationsKnowledgeBasesDocumentsResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsKnowledgeBasesDocumentsRequest {
  name: string;
}

export const DeleteProjectsLocationsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsKnowledgeBasesDocumentsRequest>;

export type DeleteProjectsLocationsKnowledgeBasesDocumentsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsKnowledgeBasesDocumentsError = DefaultErrors;

export const deleteProjectsLocationsKnowledgeBasesDocuments: API.OperationMethod<
  DeleteProjectsLocationsKnowledgeBasesDocumentsRequest,
  DeleteProjectsLocationsKnowledgeBasesDocumentsResponse,
  DeleteProjectsLocationsKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsKnowledgeBasesDocumentsRequest,
  output: DeleteProjectsLocationsKnowledgeBasesDocumentsResponse,
  errors: [],
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
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsKnowledgeBasesDocumentsRequest>;

export type PatchProjectsLocationsKnowledgeBasesDocumentsResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsKnowledgeBasesDocumentsError = DefaultErrors;

export const patchProjectsLocationsKnowledgeBasesDocuments: API.OperationMethod<
  PatchProjectsLocationsKnowledgeBasesDocumentsRequest,
  PatchProjectsLocationsKnowledgeBasesDocumentsResponse,
  PatchProjectsLocationsKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsKnowledgeBasesDocumentsRequest,
  output: PatchProjectsLocationsKnowledgeBasesDocumentsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{name}:reload", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ReloadProjectsLocationsKnowledgeBasesDocumentsRequest>;

export type ReloadProjectsLocationsKnowledgeBasesDocumentsResponse =
  GoogleLongrunningOperation;
export const ReloadProjectsLocationsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ReloadProjectsLocationsKnowledgeBasesDocumentsError = DefaultErrors;

export const reloadProjectsLocationsKnowledgeBasesDocuments: API.OperationMethod<
  ReloadProjectsLocationsKnowledgeBasesDocumentsRequest,
  ReloadProjectsLocationsKnowledgeBasesDocumentsResponse,
  ReloadProjectsLocationsKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReloadProjectsLocationsKnowledgeBasesDocumentsRequest,
  output: ReloadProjectsLocationsKnowledgeBasesDocumentsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{name}:export", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ExportProjectsLocationsKnowledgeBasesDocumentsRequest>;

export type ExportProjectsLocationsKnowledgeBasesDocumentsResponse =
  GoogleLongrunningOperation;
export const ExportProjectsLocationsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ExportProjectsLocationsKnowledgeBasesDocumentsError = DefaultErrors;

export const exportProjectsLocationsKnowledgeBasesDocuments: API.OperationMethod<
  ExportProjectsLocationsKnowledgeBasesDocumentsRequest,
  ExportProjectsLocationsKnowledgeBasesDocumentsResponse,
  ExportProjectsLocationsKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportProjectsLocationsKnowledgeBasesDocumentsRequest,
  output: ExportProjectsLocationsKnowledgeBasesDocumentsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{parent}/sipTrunks", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsSipTrunksRequest>;

export type CreateProjectsLocationsSipTrunksResponse =
  GoogleCloudDialogflowV2SipTrunk;
export const CreateProjectsLocationsSipTrunksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SipTrunk;

export type CreateProjectsLocationsSipTrunksError = DefaultErrors;

export const createProjectsLocationsSipTrunks: API.OperationMethod<
  CreateProjectsLocationsSipTrunksRequest,
  CreateProjectsLocationsSipTrunksResponse,
  CreateProjectsLocationsSipTrunksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsSipTrunksRequest,
  output: CreateProjectsLocationsSipTrunksResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsSipTrunksRequest {
  name: string;
}

export const DeleteProjectsLocationsSipTrunksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsSipTrunksRequest>;

export type DeleteProjectsLocationsSipTrunksResponse = GoogleProtobufEmpty;
export const DeleteProjectsLocationsSipTrunksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsSipTrunksError = DefaultErrors;

export const deleteProjectsLocationsSipTrunks: API.OperationMethod<
  DeleteProjectsLocationsSipTrunksRequest,
  DeleteProjectsLocationsSipTrunksResponse,
  DeleteProjectsLocationsSipTrunksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSipTrunksRequest,
  output: DeleteProjectsLocationsSipTrunksResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/sipTrunks" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSipTrunksRequest>;

export type ListProjectsLocationsSipTrunksResponse =
  GoogleCloudDialogflowV2ListSipTrunksResponse;
export const ListProjectsLocationsSipTrunksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListSipTrunksResponse;

export type ListProjectsLocationsSipTrunksError = DefaultErrors;

export const listProjectsLocationsSipTrunks: API.PaginatedOperationMethod<
  ListProjectsLocationsSipTrunksRequest,
  ListProjectsLocationsSipTrunksResponse,
  ListProjectsLocationsSipTrunksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSipTrunksRequest,
  output: ListProjectsLocationsSipTrunksResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSipTrunksRequest>;

export type GetProjectsLocationsSipTrunksResponse =
  GoogleCloudDialogflowV2SipTrunk;
export const GetProjectsLocationsSipTrunksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SipTrunk;

export type GetProjectsLocationsSipTrunksError = DefaultErrors;

export const getProjectsLocationsSipTrunks: API.OperationMethod<
  GetProjectsLocationsSipTrunksRequest,
  GetProjectsLocationsSipTrunksResponse,
  GetProjectsLocationsSipTrunksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSipTrunksRequest,
  output: GetProjectsLocationsSipTrunksResponse,
  errors: [],
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
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsSipTrunksRequest>;

export type PatchProjectsLocationsSipTrunksResponse =
  GoogleCloudDialogflowV2SipTrunk;
export const PatchProjectsLocationsSipTrunksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SipTrunk;

export type PatchProjectsLocationsSipTrunksError = DefaultErrors;

export const patchProjectsLocationsSipTrunks: API.OperationMethod<
  PatchProjectsLocationsSipTrunksRequest,
  PatchProjectsLocationsSipTrunksResponse,
  PatchProjectsLocationsSipTrunksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsSipTrunksRequest,
  output: PatchProjectsLocationsSipTrunksResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/agent:search" }),
    svc,
  ) as unknown as Schema.Schema<SearchProjectsAgentRequest>;

export type SearchProjectsAgentResponse =
  GoogleCloudDialogflowV2SearchAgentsResponse;
export const SearchProjectsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SearchAgentsResponse;

export type SearchProjectsAgentError = DefaultErrors;

export const searchProjectsAgent: API.PaginatedOperationMethod<
  SearchProjectsAgentRequest,
  SearchProjectsAgentResponse,
  SearchProjectsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchProjectsAgentRequest,
  output: SearchProjectsAgentResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
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
    T.Http({ method: "POST", path: "v2/{parent}/agent:train", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<TrainProjectsAgentRequest>;

export type TrainProjectsAgentResponse = GoogleLongrunningOperation;
export const TrainProjectsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type TrainProjectsAgentError = DefaultErrors;

export const trainProjectsAgent: API.OperationMethod<
  TrainProjectsAgentRequest,
  TrainProjectsAgentResponse,
  TrainProjectsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TrainProjectsAgentRequest,
  output: TrainProjectsAgentResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{parent}/agent:export", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ExportProjectsAgentRequest>;

export type ExportProjectsAgentResponse = GoogleLongrunningOperation;
export const ExportProjectsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ExportProjectsAgentError = DefaultErrors;

export const exportProjectsAgent: API.OperationMethod<
  ExportProjectsAgentRequest,
  ExportProjectsAgentResponse,
  ExportProjectsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportProjectsAgentRequest,
  output: ExportProjectsAgentResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{parent}/agent:import", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ImportProjectsAgentRequest>;

export type ImportProjectsAgentResponse = GoogleLongrunningOperation;
export const ImportProjectsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ImportProjectsAgentError = DefaultErrors;

export const importProjectsAgent: API.OperationMethod<
  ImportProjectsAgentRequest,
  ImportProjectsAgentResponse,
  ImportProjectsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportProjectsAgentRequest,
  output: ImportProjectsAgentResponse,
  errors: [],
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
      path: "v2/{parent}/agent:restore",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RestoreProjectsAgentRequest>;

export type RestoreProjectsAgentResponse = GoogleLongrunningOperation;
export const RestoreProjectsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type RestoreProjectsAgentError = DefaultErrors;

export const restoreProjectsAgent: API.OperationMethod<
  RestoreProjectsAgentRequest,
  RestoreProjectsAgentResponse,
  RestoreProjectsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RestoreProjectsAgentRequest,
  output: RestoreProjectsAgentResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/agent/validationResult" }),
    svc,
  ) as unknown as Schema.Schema<GetValidationResultProjectsAgentRequest>;

export type GetValidationResultProjectsAgentResponse =
  GoogleCloudDialogflowV2ValidationResult;
export const GetValidationResultProjectsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ValidationResult;

export type GetValidationResultProjectsAgentError = DefaultErrors;

export const getValidationResultProjectsAgent: API.OperationMethod<
  GetValidationResultProjectsAgentRequest,
  GetValidationResultProjectsAgentResponse,
  GetValidationResultProjectsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetValidationResultProjectsAgentRequest,
  output: GetValidationResultProjectsAgentResponse,
  errors: [],
}));

export interface GetFulfillmentProjectsAgentRequest {
  name: string;
}

export const GetFulfillmentProjectsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetFulfillmentProjectsAgentRequest>;

export type GetFulfillmentProjectsAgentResponse =
  GoogleCloudDialogflowV2Fulfillment;
export const GetFulfillmentProjectsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Fulfillment;

export type GetFulfillmentProjectsAgentError = DefaultErrors;

export const getFulfillmentProjectsAgent: API.OperationMethod<
  GetFulfillmentProjectsAgentRequest,
  GetFulfillmentProjectsAgentResponse,
  GetFulfillmentProjectsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFulfillmentProjectsAgentRequest,
  output: GetFulfillmentProjectsAgentResponse,
  errors: [],
}));

export interface UpdateFulfillmentProjectsAgentRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Fulfillment;
}

export const UpdateFulfillmentProjectsAgentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2Fulfillment).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateFulfillmentProjectsAgentRequest>;

export type UpdateFulfillmentProjectsAgentResponse =
  GoogleCloudDialogflowV2Fulfillment;
export const UpdateFulfillmentProjectsAgentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Fulfillment;

export type UpdateFulfillmentProjectsAgentError = DefaultErrors;

export const updateFulfillmentProjectsAgent: API.OperationMethod<
  UpdateFulfillmentProjectsAgentRequest,
  UpdateFulfillmentProjectsAgentResponse,
  UpdateFulfillmentProjectsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateFulfillmentProjectsAgentRequest,
  output: UpdateFulfillmentProjectsAgentResponse,
  errors: [],
}));

export interface DeleteContextsProjectsAgentSessionsRequest {
  parent: string;
}

export const DeleteContextsProjectsAgentSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{parent}/contexts" }),
    svc,
  ) as unknown as Schema.Schema<DeleteContextsProjectsAgentSessionsRequest>;

export type DeleteContextsProjectsAgentSessionsResponse = GoogleProtobufEmpty;
export const DeleteContextsProjectsAgentSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteContextsProjectsAgentSessionsError = DefaultErrors;

export const deleteContextsProjectsAgentSessions: API.OperationMethod<
  DeleteContextsProjectsAgentSessionsRequest,
  DeleteContextsProjectsAgentSessionsResponse,
  DeleteContextsProjectsAgentSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteContextsProjectsAgentSessionsRequest,
  output: DeleteContextsProjectsAgentSessionsResponse,
  errors: [],
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
      path: "v2/{session}:detectIntent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DetectIntentProjectsAgentSessionsRequest>;

export type DetectIntentProjectsAgentSessionsResponse =
  GoogleCloudDialogflowV2DetectIntentResponse;
export const DetectIntentProjectsAgentSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2DetectIntentResponse;

export type DetectIntentProjectsAgentSessionsError = DefaultErrors;

export const detectIntentProjectsAgentSessions: API.OperationMethod<
  DetectIntentProjectsAgentSessionsRequest,
  DetectIntentProjectsAgentSessionsResponse,
  DetectIntentProjectsAgentSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DetectIntentProjectsAgentSessionsRequest,
  output: DetectIntentProjectsAgentSessionsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/contexts" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentSessionsContextsRequest>;

export type ListProjectsAgentSessionsContextsResponse =
  GoogleCloudDialogflowV2ListContextsResponse;
export const ListProjectsAgentSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListContextsResponse;

export type ListProjectsAgentSessionsContextsError = DefaultErrors;

export const listProjectsAgentSessionsContexts: API.PaginatedOperationMethod<
  ListProjectsAgentSessionsContextsRequest,
  ListProjectsAgentSessionsContextsResponse,
  ListProjectsAgentSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAgentSessionsContextsRequest,
  output: ListProjectsAgentSessionsContextsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAgentSessionsContextsRequest>;

export type GetProjectsAgentSessionsContextsResponse =
  GoogleCloudDialogflowV2Context;
export const GetProjectsAgentSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Context;

export type GetProjectsAgentSessionsContextsError = DefaultErrors;

export const getProjectsAgentSessionsContexts: API.OperationMethod<
  GetProjectsAgentSessionsContextsRequest,
  GetProjectsAgentSessionsContextsResponse,
  GetProjectsAgentSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAgentSessionsContextsRequest,
  output: GetProjectsAgentSessionsContextsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{parent}/contexts", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAgentSessionsContextsRequest>;

export type CreateProjectsAgentSessionsContextsResponse =
  GoogleCloudDialogflowV2Context;
export const CreateProjectsAgentSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Context;

export type CreateProjectsAgentSessionsContextsError = DefaultErrors;

export const createProjectsAgentSessionsContexts: API.OperationMethod<
  CreateProjectsAgentSessionsContextsRequest,
  CreateProjectsAgentSessionsContextsResponse,
  CreateProjectsAgentSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsAgentSessionsContextsRequest,
  output: CreateProjectsAgentSessionsContextsResponse,
  errors: [],
}));

export interface PatchProjectsAgentSessionsContextsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Context;
}

export const PatchProjectsAgentSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2Context).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAgentSessionsContextsRequest>;

export type PatchProjectsAgentSessionsContextsResponse =
  GoogleCloudDialogflowV2Context;
export const PatchProjectsAgentSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Context;

export type PatchProjectsAgentSessionsContextsError = DefaultErrors;

export const patchProjectsAgentSessionsContexts: API.OperationMethod<
  PatchProjectsAgentSessionsContextsRequest,
  PatchProjectsAgentSessionsContextsResponse,
  PatchProjectsAgentSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsAgentSessionsContextsRequest,
  output: PatchProjectsAgentSessionsContextsResponse,
  errors: [],
}));

export interface DeleteProjectsAgentSessionsContextsRequest {
  name: string;
}

export const DeleteProjectsAgentSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsAgentSessionsContextsRequest>;

export type DeleteProjectsAgentSessionsContextsResponse = GoogleProtobufEmpty;
export const DeleteProjectsAgentSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsAgentSessionsContextsError = DefaultErrors;

export const deleteProjectsAgentSessionsContexts: API.OperationMethod<
  DeleteProjectsAgentSessionsContextsRequest,
  DeleteProjectsAgentSessionsContextsResponse,
  DeleteProjectsAgentSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsAgentSessionsContextsRequest,
  output: DeleteProjectsAgentSessionsContextsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/entityTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentSessionsEntityTypesRequest>;

export type ListProjectsAgentSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2ListSessionEntityTypesResponse;
export const ListProjectsAgentSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListSessionEntityTypesResponse;

export type ListProjectsAgentSessionsEntityTypesError = DefaultErrors;

export const listProjectsAgentSessionsEntityTypes: API.PaginatedOperationMethod<
  ListProjectsAgentSessionsEntityTypesRequest,
  ListProjectsAgentSessionsEntityTypesResponse,
  ListProjectsAgentSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAgentSessionsEntityTypesRequest,
  output: ListProjectsAgentSessionsEntityTypesResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAgentSessionsEntityTypesRequest>;

export type GetProjectsAgentSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2SessionEntityType;
export const GetProjectsAgentSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SessionEntityType;

export type GetProjectsAgentSessionsEntityTypesError = DefaultErrors;

export const getProjectsAgentSessionsEntityTypes: API.OperationMethod<
  GetProjectsAgentSessionsEntityTypesRequest,
  GetProjectsAgentSessionsEntityTypesResponse,
  GetProjectsAgentSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAgentSessionsEntityTypesRequest,
  output: GetProjectsAgentSessionsEntityTypesResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{parent}/entityTypes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAgentSessionsEntityTypesRequest>;

export type CreateProjectsAgentSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2SessionEntityType;
export const CreateProjectsAgentSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SessionEntityType;

export type CreateProjectsAgentSessionsEntityTypesError = DefaultErrors;

export const createProjectsAgentSessionsEntityTypes: API.OperationMethod<
  CreateProjectsAgentSessionsEntityTypesRequest,
  CreateProjectsAgentSessionsEntityTypesResponse,
  CreateProjectsAgentSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsAgentSessionsEntityTypesRequest,
  output: CreateProjectsAgentSessionsEntityTypesResponse,
  errors: [],
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
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAgentSessionsEntityTypesRequest>;

export type PatchProjectsAgentSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2SessionEntityType;
export const PatchProjectsAgentSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SessionEntityType;

export type PatchProjectsAgentSessionsEntityTypesError = DefaultErrors;

export const patchProjectsAgentSessionsEntityTypes: API.OperationMethod<
  PatchProjectsAgentSessionsEntityTypesRequest,
  PatchProjectsAgentSessionsEntityTypesResponse,
  PatchProjectsAgentSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsAgentSessionsEntityTypesRequest,
  output: PatchProjectsAgentSessionsEntityTypesResponse,
  errors: [],
}));

export interface DeleteProjectsAgentSessionsEntityTypesRequest {
  name: string;
}

export const DeleteProjectsAgentSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsAgentSessionsEntityTypesRequest>;

export type DeleteProjectsAgentSessionsEntityTypesResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsAgentSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsAgentSessionsEntityTypesError = DefaultErrors;

export const deleteProjectsAgentSessionsEntityTypes: API.OperationMethod<
  DeleteProjectsAgentSessionsEntityTypesRequest,
  DeleteProjectsAgentSessionsEntityTypesResponse,
  DeleteProjectsAgentSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsAgentSessionsEntityTypesRequest,
  output: DeleteProjectsAgentSessionsEntityTypesResponse,
  errors: [],
}));

export interface ListProjectsAgentIntentsRequest {
  parent: string;
  languageCode?: string;
  intentView?: "INTENT_VIEW_UNSPECIFIED" | "INTENT_VIEW_FULL" | (string & {});
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    intentView: Schema.optional(Schema.String).pipe(T.HttpQuery("intentView")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{parent}/intents" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentIntentsRequest>;

export type ListProjectsAgentIntentsResponse =
  GoogleCloudDialogflowV2ListIntentsResponse;
export const ListProjectsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListIntentsResponse;

export type ListProjectsAgentIntentsError = DefaultErrors;

export const listProjectsAgentIntents: API.PaginatedOperationMethod<
  ListProjectsAgentIntentsRequest,
  ListProjectsAgentIntentsResponse,
  ListProjectsAgentIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAgentIntentsRequest,
  output: ListProjectsAgentIntentsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAgentIntentsRequest>;

export type GetProjectsAgentIntentsResponse = GoogleCloudDialogflowV2Intent;
export const GetProjectsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Intent;

export type GetProjectsAgentIntentsError = DefaultErrors;

export const getProjectsAgentIntents: API.OperationMethod<
  GetProjectsAgentIntentsRequest,
  GetProjectsAgentIntentsResponse,
  GetProjectsAgentIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAgentIntentsRequest,
  output: GetProjectsAgentIntentsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{parent}/intents", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAgentIntentsRequest>;

export type CreateProjectsAgentIntentsResponse = GoogleCloudDialogflowV2Intent;
export const CreateProjectsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Intent;

export type CreateProjectsAgentIntentsError = DefaultErrors;

export const createProjectsAgentIntents: API.OperationMethod<
  CreateProjectsAgentIntentsRequest,
  CreateProjectsAgentIntentsResponse,
  CreateProjectsAgentIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsAgentIntentsRequest,
  output: CreateProjectsAgentIntentsResponse,
  errors: [],
}));

export interface PatchProjectsAgentIntentsRequest {
  name: string;
  languageCode?: string;
  updateMask?: string;
  intentView?: "INTENT_VIEW_UNSPECIFIED" | "INTENT_VIEW_FULL" | (string & {});
  /** Request body */
  body?: GoogleCloudDialogflowV2Intent;
}

export const PatchProjectsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    intentView: Schema.optional(Schema.String).pipe(T.HttpQuery("intentView")),
    body: Schema.optional(GoogleCloudDialogflowV2Intent).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAgentIntentsRequest>;

export type PatchProjectsAgentIntentsResponse = GoogleCloudDialogflowV2Intent;
export const PatchProjectsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Intent;

export type PatchProjectsAgentIntentsError = DefaultErrors;

export const patchProjectsAgentIntents: API.OperationMethod<
  PatchProjectsAgentIntentsRequest,
  PatchProjectsAgentIntentsResponse,
  PatchProjectsAgentIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsAgentIntentsRequest,
  output: PatchProjectsAgentIntentsResponse,
  errors: [],
}));

export interface DeleteProjectsAgentIntentsRequest {
  name: string;
}

export const DeleteProjectsAgentIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsAgentIntentsRequest>;

export type DeleteProjectsAgentIntentsResponse = GoogleProtobufEmpty;
export const DeleteProjectsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsAgentIntentsError = DefaultErrors;

export const deleteProjectsAgentIntents: API.OperationMethod<
  DeleteProjectsAgentIntentsRequest,
  DeleteProjectsAgentIntentsResponse,
  DeleteProjectsAgentIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsAgentIntentsRequest,
  output: DeleteProjectsAgentIntentsResponse,
  errors: [],
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
      path: "v2/{parent}/intents:batchUpdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchUpdateProjectsAgentIntentsRequest>;

export type BatchUpdateProjectsAgentIntentsResponse =
  GoogleLongrunningOperation;
export const BatchUpdateProjectsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type BatchUpdateProjectsAgentIntentsError = DefaultErrors;

export const batchUpdateProjectsAgentIntents: API.OperationMethod<
  BatchUpdateProjectsAgentIntentsRequest,
  BatchUpdateProjectsAgentIntentsResponse,
  BatchUpdateProjectsAgentIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchUpdateProjectsAgentIntentsRequest,
  output: BatchUpdateProjectsAgentIntentsResponse,
  errors: [],
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
      path: "v2/{parent}/intents:batchDelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchDeleteProjectsAgentIntentsRequest>;

export type BatchDeleteProjectsAgentIntentsResponse =
  GoogleLongrunningOperation;
export const BatchDeleteProjectsAgentIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type BatchDeleteProjectsAgentIntentsError = DefaultErrors;

export const batchDeleteProjectsAgentIntents: API.OperationMethod<
  BatchDeleteProjectsAgentIntentsRequest,
  BatchDeleteProjectsAgentIntentsResponse,
  BatchDeleteProjectsAgentIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchDeleteProjectsAgentIntentsRequest,
  output: BatchDeleteProjectsAgentIntentsResponse,
  errors: [],
}));

export interface ListProjectsAgentEntityTypesRequest {
  parent: string;
  languageCode?: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsAgentEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{parent}/entityTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentEntityTypesRequest>;

export type ListProjectsAgentEntityTypesResponse =
  GoogleCloudDialogflowV2ListEntityTypesResponse;
export const ListProjectsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListEntityTypesResponse;

export type ListProjectsAgentEntityTypesError = DefaultErrors;

export const listProjectsAgentEntityTypes: API.PaginatedOperationMethod<
  ListProjectsAgentEntityTypesRequest,
  ListProjectsAgentEntityTypesResponse,
  ListProjectsAgentEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAgentEntityTypesRequest,
  output: ListProjectsAgentEntityTypesResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAgentEntityTypesRequest>;

export type GetProjectsAgentEntityTypesResponse =
  GoogleCloudDialogflowV2EntityType;
export const GetProjectsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2EntityType;

export type GetProjectsAgentEntityTypesError = DefaultErrors;

export const getProjectsAgentEntityTypes: API.OperationMethod<
  GetProjectsAgentEntityTypesRequest,
  GetProjectsAgentEntityTypesResponse,
  GetProjectsAgentEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAgentEntityTypesRequest,
  output: GetProjectsAgentEntityTypesResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{parent}/entityTypes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAgentEntityTypesRequest>;

export type CreateProjectsAgentEntityTypesResponse =
  GoogleCloudDialogflowV2EntityType;
export const CreateProjectsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2EntityType;

export type CreateProjectsAgentEntityTypesError = DefaultErrors;

export const createProjectsAgentEntityTypes: API.OperationMethod<
  CreateProjectsAgentEntityTypesRequest,
  CreateProjectsAgentEntityTypesResponse,
  CreateProjectsAgentEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsAgentEntityTypesRequest,
  output: CreateProjectsAgentEntityTypesResponse,
  errors: [],
}));

export interface PatchProjectsAgentEntityTypesRequest {
  name: string;
  languageCode?: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2EntityType;
}

export const PatchProjectsAgentEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2EntityType).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAgentEntityTypesRequest>;

export type PatchProjectsAgentEntityTypesResponse =
  GoogleCloudDialogflowV2EntityType;
export const PatchProjectsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2EntityType;

export type PatchProjectsAgentEntityTypesError = DefaultErrors;

export const patchProjectsAgentEntityTypes: API.OperationMethod<
  PatchProjectsAgentEntityTypesRequest,
  PatchProjectsAgentEntityTypesResponse,
  PatchProjectsAgentEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsAgentEntityTypesRequest,
  output: PatchProjectsAgentEntityTypesResponse,
  errors: [],
}));

export interface DeleteProjectsAgentEntityTypesRequest {
  name: string;
}

export const DeleteProjectsAgentEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsAgentEntityTypesRequest>;

export type DeleteProjectsAgentEntityTypesResponse = GoogleProtobufEmpty;
export const DeleteProjectsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsAgentEntityTypesError = DefaultErrors;

export const deleteProjectsAgentEntityTypes: API.OperationMethod<
  DeleteProjectsAgentEntityTypesRequest,
  DeleteProjectsAgentEntityTypesResponse,
  DeleteProjectsAgentEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsAgentEntityTypesRequest,
  output: DeleteProjectsAgentEntityTypesResponse,
  errors: [],
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
      path: "v2/{parent}/entityTypes:batchUpdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchUpdateProjectsAgentEntityTypesRequest>;

export type BatchUpdateProjectsAgentEntityTypesResponse =
  GoogleLongrunningOperation;
export const BatchUpdateProjectsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type BatchUpdateProjectsAgentEntityTypesError = DefaultErrors;

export const batchUpdateProjectsAgentEntityTypes: API.OperationMethod<
  BatchUpdateProjectsAgentEntityTypesRequest,
  BatchUpdateProjectsAgentEntityTypesResponse,
  BatchUpdateProjectsAgentEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchUpdateProjectsAgentEntityTypesRequest,
  output: BatchUpdateProjectsAgentEntityTypesResponse,
  errors: [],
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
      path: "v2/{parent}/entityTypes:batchDelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchDeleteProjectsAgentEntityTypesRequest>;

export type BatchDeleteProjectsAgentEntityTypesResponse =
  GoogleLongrunningOperation;
export const BatchDeleteProjectsAgentEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type BatchDeleteProjectsAgentEntityTypesError = DefaultErrors;

export const batchDeleteProjectsAgentEntityTypes: API.OperationMethod<
  BatchDeleteProjectsAgentEntityTypesRequest,
  BatchDeleteProjectsAgentEntityTypesResponse,
  BatchDeleteProjectsAgentEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchDeleteProjectsAgentEntityTypesRequest,
  output: BatchDeleteProjectsAgentEntityTypesResponse,
  errors: [],
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
      path: "v2/{parent}/entities:batchCreate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchCreateProjectsAgentEntityTypesEntitiesRequest>;

export type BatchCreateProjectsAgentEntityTypesEntitiesResponse =
  GoogleLongrunningOperation;
export const BatchCreateProjectsAgentEntityTypesEntitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type BatchCreateProjectsAgentEntityTypesEntitiesError = DefaultErrors;

export const batchCreateProjectsAgentEntityTypesEntities: API.OperationMethod<
  BatchCreateProjectsAgentEntityTypesEntitiesRequest,
  BatchCreateProjectsAgentEntityTypesEntitiesResponse,
  BatchCreateProjectsAgentEntityTypesEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchCreateProjectsAgentEntityTypesEntitiesRequest,
  output: BatchCreateProjectsAgentEntityTypesEntitiesResponse,
  errors: [],
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
      path: "v2/{parent}/entities:batchUpdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchUpdateProjectsAgentEntityTypesEntitiesRequest>;

export type BatchUpdateProjectsAgentEntityTypesEntitiesResponse =
  GoogleLongrunningOperation;
export const BatchUpdateProjectsAgentEntityTypesEntitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type BatchUpdateProjectsAgentEntityTypesEntitiesError = DefaultErrors;

export const batchUpdateProjectsAgentEntityTypesEntities: API.OperationMethod<
  BatchUpdateProjectsAgentEntityTypesEntitiesRequest,
  BatchUpdateProjectsAgentEntityTypesEntitiesResponse,
  BatchUpdateProjectsAgentEntityTypesEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchUpdateProjectsAgentEntityTypesEntitiesRequest,
  output: BatchUpdateProjectsAgentEntityTypesEntitiesResponse,
  errors: [],
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
      path: "v2/{parent}/entities:batchDelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchDeleteProjectsAgentEntityTypesEntitiesRequest>;

export type BatchDeleteProjectsAgentEntityTypesEntitiesResponse =
  GoogleLongrunningOperation;
export const BatchDeleteProjectsAgentEntityTypesEntitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type BatchDeleteProjectsAgentEntityTypesEntitiesError = DefaultErrors;

export const batchDeleteProjectsAgentEntityTypesEntities: API.OperationMethod<
  BatchDeleteProjectsAgentEntityTypesEntitiesRequest,
  BatchDeleteProjectsAgentEntityTypesEntitiesResponse,
  BatchDeleteProjectsAgentEntityTypesEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchDeleteProjectsAgentEntityTypesEntitiesRequest,
  output: BatchDeleteProjectsAgentEntityTypesEntitiesResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/environments" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentEnvironmentsRequest>;

export type ListProjectsAgentEnvironmentsResponse =
  GoogleCloudDialogflowV2ListEnvironmentsResponse;
export const ListProjectsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListEnvironmentsResponse;

export type ListProjectsAgentEnvironmentsError = DefaultErrors;

export const listProjectsAgentEnvironments: API.PaginatedOperationMethod<
  ListProjectsAgentEnvironmentsRequest,
  ListProjectsAgentEnvironmentsResponse,
  ListProjectsAgentEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAgentEnvironmentsRequest,
  output: ListProjectsAgentEnvironmentsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAgentEnvironmentsRequest>;

export type GetProjectsAgentEnvironmentsResponse =
  GoogleCloudDialogflowV2Environment;
export const GetProjectsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Environment;

export type GetProjectsAgentEnvironmentsError = DefaultErrors;

export const getProjectsAgentEnvironments: API.OperationMethod<
  GetProjectsAgentEnvironmentsRequest,
  GetProjectsAgentEnvironmentsResponse,
  GetProjectsAgentEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAgentEnvironmentsRequest,
  output: GetProjectsAgentEnvironmentsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{parent}/environments", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAgentEnvironmentsRequest>;

export type CreateProjectsAgentEnvironmentsResponse =
  GoogleCloudDialogflowV2Environment;
export const CreateProjectsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Environment;

export type CreateProjectsAgentEnvironmentsError = DefaultErrors;

export const createProjectsAgentEnvironments: API.OperationMethod<
  CreateProjectsAgentEnvironmentsRequest,
  CreateProjectsAgentEnvironmentsResponse,
  CreateProjectsAgentEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsAgentEnvironmentsRequest,
  output: CreateProjectsAgentEnvironmentsResponse,
  errors: [],
}));

export interface PatchProjectsAgentEnvironmentsRequest {
  name: string;
  updateMask?: string;
  allowLoadToDraftAndDiscardChanges?: boolean;
  /** Request body */
  body?: GoogleCloudDialogflowV2Environment;
}

export const PatchProjectsAgentEnvironmentsRequest =
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
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAgentEnvironmentsRequest>;

export type PatchProjectsAgentEnvironmentsResponse =
  GoogleCloudDialogflowV2Environment;
export const PatchProjectsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Environment;

export type PatchProjectsAgentEnvironmentsError = DefaultErrors;

export const patchProjectsAgentEnvironments: API.OperationMethod<
  PatchProjectsAgentEnvironmentsRequest,
  PatchProjectsAgentEnvironmentsResponse,
  PatchProjectsAgentEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsAgentEnvironmentsRequest,
  output: PatchProjectsAgentEnvironmentsResponse,
  errors: [],
}));

export interface DeleteProjectsAgentEnvironmentsRequest {
  name: string;
}

export const DeleteProjectsAgentEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsAgentEnvironmentsRequest>;

export type DeleteProjectsAgentEnvironmentsResponse = GoogleProtobufEmpty;
export const DeleteProjectsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsAgentEnvironmentsError = DefaultErrors;

export const deleteProjectsAgentEnvironments: API.OperationMethod<
  DeleteProjectsAgentEnvironmentsRequest,
  DeleteProjectsAgentEnvironmentsResponse,
  DeleteProjectsAgentEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsAgentEnvironmentsRequest,
  output: DeleteProjectsAgentEnvironmentsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/history" }),
    svc,
  ) as unknown as Schema.Schema<GetHistoryProjectsAgentEnvironmentsRequest>;

export type GetHistoryProjectsAgentEnvironmentsResponse =
  GoogleCloudDialogflowV2EnvironmentHistory;
export const GetHistoryProjectsAgentEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2EnvironmentHistory;

export type GetHistoryProjectsAgentEnvironmentsError = DefaultErrors;

export const getHistoryProjectsAgentEnvironments: API.PaginatedOperationMethod<
  GetHistoryProjectsAgentEnvironmentsRequest,
  GetHistoryProjectsAgentEnvironmentsResponse,
  GetHistoryProjectsAgentEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: GetHistoryProjectsAgentEnvironmentsRequest,
  output: GetHistoryProjectsAgentEnvironmentsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteContextsProjectsAgentEnvironmentsUsersSessionsRequest {
  parent: string;
}

export const DeleteContextsProjectsAgentEnvironmentsUsersSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{parent}/contexts" }),
    svc,
  ) as unknown as Schema.Schema<DeleteContextsProjectsAgentEnvironmentsUsersSessionsRequest>;

export type DeleteContextsProjectsAgentEnvironmentsUsersSessionsResponse =
  GoogleProtobufEmpty;
export const DeleteContextsProjectsAgentEnvironmentsUsersSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteContextsProjectsAgentEnvironmentsUsersSessionsError =
  DefaultErrors;

export const deleteContextsProjectsAgentEnvironmentsUsersSessions: API.OperationMethod<
  DeleteContextsProjectsAgentEnvironmentsUsersSessionsRequest,
  DeleteContextsProjectsAgentEnvironmentsUsersSessionsResponse,
  DeleteContextsProjectsAgentEnvironmentsUsersSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteContextsProjectsAgentEnvironmentsUsersSessionsRequest,
  output: DeleteContextsProjectsAgentEnvironmentsUsersSessionsResponse,
  errors: [],
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
      path: "v2/{session}:detectIntent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DetectIntentProjectsAgentEnvironmentsUsersSessionsRequest>;

export type DetectIntentProjectsAgentEnvironmentsUsersSessionsResponse =
  GoogleCloudDialogflowV2DetectIntentResponse;
export const DetectIntentProjectsAgentEnvironmentsUsersSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2DetectIntentResponse;

export type DetectIntentProjectsAgentEnvironmentsUsersSessionsError =
  DefaultErrors;

export const detectIntentProjectsAgentEnvironmentsUsersSessions: API.OperationMethod<
  DetectIntentProjectsAgentEnvironmentsUsersSessionsRequest,
  DetectIntentProjectsAgentEnvironmentsUsersSessionsResponse,
  DetectIntentProjectsAgentEnvironmentsUsersSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DetectIntentProjectsAgentEnvironmentsUsersSessionsRequest,
  output: DetectIntentProjectsAgentEnvironmentsUsersSessionsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/contexts" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentEnvironmentsUsersSessionsContextsRequest>;

export type ListProjectsAgentEnvironmentsUsersSessionsContextsResponse =
  GoogleCloudDialogflowV2ListContextsResponse;
export const ListProjectsAgentEnvironmentsUsersSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListContextsResponse;

export type ListProjectsAgentEnvironmentsUsersSessionsContextsError =
  DefaultErrors;

export const listProjectsAgentEnvironmentsUsersSessionsContexts: API.PaginatedOperationMethod<
  ListProjectsAgentEnvironmentsUsersSessionsContextsRequest,
  ListProjectsAgentEnvironmentsUsersSessionsContextsResponse,
  ListProjectsAgentEnvironmentsUsersSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAgentEnvironmentsUsersSessionsContextsRequest,
  output: ListProjectsAgentEnvironmentsUsersSessionsContextsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAgentEnvironmentsUsersSessionsContextsRequest>;

export type GetProjectsAgentEnvironmentsUsersSessionsContextsResponse =
  GoogleCloudDialogflowV2Context;
export const GetProjectsAgentEnvironmentsUsersSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Context;

export type GetProjectsAgentEnvironmentsUsersSessionsContextsError =
  DefaultErrors;

export const getProjectsAgentEnvironmentsUsersSessionsContexts: API.OperationMethod<
  GetProjectsAgentEnvironmentsUsersSessionsContextsRequest,
  GetProjectsAgentEnvironmentsUsersSessionsContextsResponse,
  GetProjectsAgentEnvironmentsUsersSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAgentEnvironmentsUsersSessionsContextsRequest,
  output: GetProjectsAgentEnvironmentsUsersSessionsContextsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{parent}/contexts", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAgentEnvironmentsUsersSessionsContextsRequest>;

export type CreateProjectsAgentEnvironmentsUsersSessionsContextsResponse =
  GoogleCloudDialogflowV2Context;
export const CreateProjectsAgentEnvironmentsUsersSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Context;

export type CreateProjectsAgentEnvironmentsUsersSessionsContextsError =
  DefaultErrors;

export const createProjectsAgentEnvironmentsUsersSessionsContexts: API.OperationMethod<
  CreateProjectsAgentEnvironmentsUsersSessionsContextsRequest,
  CreateProjectsAgentEnvironmentsUsersSessionsContextsResponse,
  CreateProjectsAgentEnvironmentsUsersSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsAgentEnvironmentsUsersSessionsContextsRequest,
  output: CreateProjectsAgentEnvironmentsUsersSessionsContextsResponse,
  errors: [],
}));

export interface PatchProjectsAgentEnvironmentsUsersSessionsContextsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Context;
}

export const PatchProjectsAgentEnvironmentsUsersSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2Context).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAgentEnvironmentsUsersSessionsContextsRequest>;

export type PatchProjectsAgentEnvironmentsUsersSessionsContextsResponse =
  GoogleCloudDialogflowV2Context;
export const PatchProjectsAgentEnvironmentsUsersSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Context;

export type PatchProjectsAgentEnvironmentsUsersSessionsContextsError =
  DefaultErrors;

export const patchProjectsAgentEnvironmentsUsersSessionsContexts: API.OperationMethod<
  PatchProjectsAgentEnvironmentsUsersSessionsContextsRequest,
  PatchProjectsAgentEnvironmentsUsersSessionsContextsResponse,
  PatchProjectsAgentEnvironmentsUsersSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsAgentEnvironmentsUsersSessionsContextsRequest,
  output: PatchProjectsAgentEnvironmentsUsersSessionsContextsResponse,
  errors: [],
}));

export interface DeleteProjectsAgentEnvironmentsUsersSessionsContextsRequest {
  name: string;
}

export const DeleteProjectsAgentEnvironmentsUsersSessionsContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsAgentEnvironmentsUsersSessionsContextsRequest>;

export type DeleteProjectsAgentEnvironmentsUsersSessionsContextsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsAgentEnvironmentsUsersSessionsContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsAgentEnvironmentsUsersSessionsContextsError =
  DefaultErrors;

export const deleteProjectsAgentEnvironmentsUsersSessionsContexts: API.OperationMethod<
  DeleteProjectsAgentEnvironmentsUsersSessionsContextsRequest,
  DeleteProjectsAgentEnvironmentsUsersSessionsContextsResponse,
  DeleteProjectsAgentEnvironmentsUsersSessionsContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsAgentEnvironmentsUsersSessionsContextsRequest,
  output: DeleteProjectsAgentEnvironmentsUsersSessionsContextsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/entityTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest>;

export type ListProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2ListSessionEntityTypesResponse;
export const ListProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListSessionEntityTypesResponse;

export type ListProjectsAgentEnvironmentsUsersSessionsEntityTypesError =
  DefaultErrors;

export const listProjectsAgentEnvironmentsUsersSessionsEntityTypes: API.PaginatedOperationMethod<
  ListProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  ListProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  ListProjectsAgentEnvironmentsUsersSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  output: ListProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest>;

export type GetProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2SessionEntityType;
export const GetProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SessionEntityType;

export type GetProjectsAgentEnvironmentsUsersSessionsEntityTypesError =
  DefaultErrors;

export const getProjectsAgentEnvironmentsUsersSessionsEntityTypes: API.OperationMethod<
  GetProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  GetProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  GetProjectsAgentEnvironmentsUsersSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  output: GetProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{parent}/entityTypes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest>;

export type CreateProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2SessionEntityType;
export const CreateProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SessionEntityType;

export type CreateProjectsAgentEnvironmentsUsersSessionsEntityTypesError =
  DefaultErrors;

export const createProjectsAgentEnvironmentsUsersSessionsEntityTypes: API.OperationMethod<
  CreateProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  CreateProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  CreateProjectsAgentEnvironmentsUsersSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  output: CreateProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  errors: [],
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
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest>;

export type PatchProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  GoogleCloudDialogflowV2SessionEntityType;
export const PatchProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SessionEntityType;

export type PatchProjectsAgentEnvironmentsUsersSessionsEntityTypesError =
  DefaultErrors;

export const patchProjectsAgentEnvironmentsUsersSessionsEntityTypes: API.OperationMethod<
  PatchProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  PatchProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  PatchProjectsAgentEnvironmentsUsersSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  output: PatchProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  errors: [],
}));

export interface DeleteProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest {
  name: string;
}

export const DeleteProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest>;

export type DeleteProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsAgentEnvironmentsUsersSessionsEntityTypesError =
  DefaultErrors;

export const deleteProjectsAgentEnvironmentsUsersSessionsEntityTypes: API.OperationMethod<
  DeleteProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  DeleteProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  DeleteProjectsAgentEnvironmentsUsersSessionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsAgentEnvironmentsUsersSessionsEntityTypesRequest,
  output: DeleteProjectsAgentEnvironmentsUsersSessionsEntityTypesResponse,
  errors: [],
}));

export interface ListProjectsAgentEnvironmentsIntentsRequest {
  parent: string;
  languageCode?: string;
  intentView?: "INTENT_VIEW_UNSPECIFIED" | "INTENT_VIEW_FULL" | (string & {});
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsAgentEnvironmentsIntentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    intentView: Schema.optional(Schema.String).pipe(T.HttpQuery("intentView")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{parent}/intents" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentEnvironmentsIntentsRequest>;

export type ListProjectsAgentEnvironmentsIntentsResponse =
  GoogleCloudDialogflowV2ListIntentsResponse;
export const ListProjectsAgentEnvironmentsIntentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListIntentsResponse;

export type ListProjectsAgentEnvironmentsIntentsError = DefaultErrors;

export const listProjectsAgentEnvironmentsIntents: API.PaginatedOperationMethod<
  ListProjectsAgentEnvironmentsIntentsRequest,
  ListProjectsAgentEnvironmentsIntentsResponse,
  ListProjectsAgentEnvironmentsIntentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAgentEnvironmentsIntentsRequest,
  output: ListProjectsAgentEnvironmentsIntentsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
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
    T.Http({ method: "GET", path: "v2/{parent}/knowledgeBases" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentKnowledgeBasesRequest>;

export type ListProjectsAgentKnowledgeBasesResponse =
  GoogleCloudDialogflowV2ListKnowledgeBasesResponse;
export const ListProjectsAgentKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListKnowledgeBasesResponse;

export type ListProjectsAgentKnowledgeBasesError = DefaultErrors;

export const listProjectsAgentKnowledgeBases: API.PaginatedOperationMethod<
  ListProjectsAgentKnowledgeBasesRequest,
  ListProjectsAgentKnowledgeBasesResponse,
  ListProjectsAgentKnowledgeBasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAgentKnowledgeBasesRequest,
  output: ListProjectsAgentKnowledgeBasesResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAgentKnowledgeBasesRequest>;

export type GetProjectsAgentKnowledgeBasesResponse =
  GoogleCloudDialogflowV2KnowledgeBase;
export const GetProjectsAgentKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2KnowledgeBase;

export type GetProjectsAgentKnowledgeBasesError = DefaultErrors;

export const getProjectsAgentKnowledgeBases: API.OperationMethod<
  GetProjectsAgentKnowledgeBasesRequest,
  GetProjectsAgentKnowledgeBasesResponse,
  GetProjectsAgentKnowledgeBasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAgentKnowledgeBasesRequest,
  output: GetProjectsAgentKnowledgeBasesResponse,
  errors: [],
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
      path: "v2/{parent}/knowledgeBases",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAgentKnowledgeBasesRequest>;

export type CreateProjectsAgentKnowledgeBasesResponse =
  GoogleCloudDialogflowV2KnowledgeBase;
export const CreateProjectsAgentKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2KnowledgeBase;

export type CreateProjectsAgentKnowledgeBasesError = DefaultErrors;

export const createProjectsAgentKnowledgeBases: API.OperationMethod<
  CreateProjectsAgentKnowledgeBasesRequest,
  CreateProjectsAgentKnowledgeBasesResponse,
  CreateProjectsAgentKnowledgeBasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsAgentKnowledgeBasesRequest,
  output: CreateProjectsAgentKnowledgeBasesResponse,
  errors: [],
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
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsAgentKnowledgeBasesRequest>;

export type DeleteProjectsAgentKnowledgeBasesResponse = GoogleProtobufEmpty;
export const DeleteProjectsAgentKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsAgentKnowledgeBasesError = DefaultErrors;

export const deleteProjectsAgentKnowledgeBases: API.OperationMethod<
  DeleteProjectsAgentKnowledgeBasesRequest,
  DeleteProjectsAgentKnowledgeBasesResponse,
  DeleteProjectsAgentKnowledgeBasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsAgentKnowledgeBasesRequest,
  output: DeleteProjectsAgentKnowledgeBasesResponse,
  errors: [],
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
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAgentKnowledgeBasesRequest>;

export type PatchProjectsAgentKnowledgeBasesResponse =
  GoogleCloudDialogflowV2KnowledgeBase;
export const PatchProjectsAgentKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2KnowledgeBase;

export type PatchProjectsAgentKnowledgeBasesError = DefaultErrors;

export const patchProjectsAgentKnowledgeBases: API.OperationMethod<
  PatchProjectsAgentKnowledgeBasesRequest,
  PatchProjectsAgentKnowledgeBasesResponse,
  PatchProjectsAgentKnowledgeBasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsAgentKnowledgeBasesRequest,
  output: PatchProjectsAgentKnowledgeBasesResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/documents" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentKnowledgeBasesDocumentsRequest>;

export type ListProjectsAgentKnowledgeBasesDocumentsResponse =
  GoogleCloudDialogflowV2ListDocumentsResponse;
export const ListProjectsAgentKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListDocumentsResponse;

export type ListProjectsAgentKnowledgeBasesDocumentsError = DefaultErrors;

export const listProjectsAgentKnowledgeBasesDocuments: API.PaginatedOperationMethod<
  ListProjectsAgentKnowledgeBasesDocumentsRequest,
  ListProjectsAgentKnowledgeBasesDocumentsResponse,
  ListProjectsAgentKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAgentKnowledgeBasesDocumentsRequest,
  output: ListProjectsAgentKnowledgeBasesDocumentsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAgentKnowledgeBasesDocumentsRequest>;

export type GetProjectsAgentKnowledgeBasesDocumentsResponse =
  GoogleCloudDialogflowV2Document;
export const GetProjectsAgentKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Document;

export type GetProjectsAgentKnowledgeBasesDocumentsError = DefaultErrors;

export const getProjectsAgentKnowledgeBasesDocuments: API.OperationMethod<
  GetProjectsAgentKnowledgeBasesDocumentsRequest,
  GetProjectsAgentKnowledgeBasesDocumentsResponse,
  GetProjectsAgentKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAgentKnowledgeBasesDocumentsRequest,
  output: GetProjectsAgentKnowledgeBasesDocumentsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{parent}/documents", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAgentKnowledgeBasesDocumentsRequest>;

export type CreateProjectsAgentKnowledgeBasesDocumentsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsAgentKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsAgentKnowledgeBasesDocumentsError = DefaultErrors;

export const createProjectsAgentKnowledgeBasesDocuments: API.OperationMethod<
  CreateProjectsAgentKnowledgeBasesDocumentsRequest,
  CreateProjectsAgentKnowledgeBasesDocumentsResponse,
  CreateProjectsAgentKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsAgentKnowledgeBasesDocumentsRequest,
  output: CreateProjectsAgentKnowledgeBasesDocumentsResponse,
  errors: [],
}));

export interface DeleteProjectsAgentKnowledgeBasesDocumentsRequest {
  name: string;
}

export const DeleteProjectsAgentKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsAgentKnowledgeBasesDocumentsRequest>;

export type DeleteProjectsAgentKnowledgeBasesDocumentsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsAgentKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsAgentKnowledgeBasesDocumentsError = DefaultErrors;

export const deleteProjectsAgentKnowledgeBasesDocuments: API.OperationMethod<
  DeleteProjectsAgentKnowledgeBasesDocumentsRequest,
  DeleteProjectsAgentKnowledgeBasesDocumentsResponse,
  DeleteProjectsAgentKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsAgentKnowledgeBasesDocumentsRequest,
  output: DeleteProjectsAgentKnowledgeBasesDocumentsResponse,
  errors: [],
}));

export interface PatchProjectsAgentKnowledgeBasesDocumentsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Document;
}

export const PatchProjectsAgentKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2Document).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAgentKnowledgeBasesDocumentsRequest>;

export type PatchProjectsAgentKnowledgeBasesDocumentsResponse =
  GoogleLongrunningOperation;
export const PatchProjectsAgentKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsAgentKnowledgeBasesDocumentsError = DefaultErrors;

export const patchProjectsAgentKnowledgeBasesDocuments: API.OperationMethod<
  PatchProjectsAgentKnowledgeBasesDocumentsRequest,
  PatchProjectsAgentKnowledgeBasesDocumentsResponse,
  PatchProjectsAgentKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsAgentKnowledgeBasesDocumentsRequest,
  output: PatchProjectsAgentKnowledgeBasesDocumentsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{name}:reload", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ReloadProjectsAgentKnowledgeBasesDocumentsRequest>;

export type ReloadProjectsAgentKnowledgeBasesDocumentsResponse =
  GoogleLongrunningOperation;
export const ReloadProjectsAgentKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ReloadProjectsAgentKnowledgeBasesDocumentsError = DefaultErrors;

export const reloadProjectsAgentKnowledgeBasesDocuments: API.OperationMethod<
  ReloadProjectsAgentKnowledgeBasesDocumentsRequest,
  ReloadProjectsAgentKnowledgeBasesDocumentsResponse,
  ReloadProjectsAgentKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReloadProjectsAgentKnowledgeBasesDocumentsRequest,
  output: ReloadProjectsAgentKnowledgeBasesDocumentsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/versions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAgentVersionsRequest>;

export type ListProjectsAgentVersionsResponse =
  GoogleCloudDialogflowV2ListVersionsResponse;
export const ListProjectsAgentVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListVersionsResponse;

export type ListProjectsAgentVersionsError = DefaultErrors;

export const listProjectsAgentVersions: API.PaginatedOperationMethod<
  ListProjectsAgentVersionsRequest,
  ListProjectsAgentVersionsResponse,
  ListProjectsAgentVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAgentVersionsRequest,
  output: ListProjectsAgentVersionsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAgentVersionsRequest>;

export type GetProjectsAgentVersionsResponse = GoogleCloudDialogflowV2Version;
export const GetProjectsAgentVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Version;

export type GetProjectsAgentVersionsError = DefaultErrors;

export const getProjectsAgentVersions: API.OperationMethod<
  GetProjectsAgentVersionsRequest,
  GetProjectsAgentVersionsResponse,
  GetProjectsAgentVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAgentVersionsRequest,
  output: GetProjectsAgentVersionsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{parent}/versions", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAgentVersionsRequest>;

export type CreateProjectsAgentVersionsResponse =
  GoogleCloudDialogflowV2Version;
export const CreateProjectsAgentVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Version;

export type CreateProjectsAgentVersionsError = DefaultErrors;

export const createProjectsAgentVersions: API.OperationMethod<
  CreateProjectsAgentVersionsRequest,
  CreateProjectsAgentVersionsResponse,
  CreateProjectsAgentVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsAgentVersionsRequest,
  output: CreateProjectsAgentVersionsResponse,
  errors: [],
}));

export interface PatchProjectsAgentVersionsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Version;
}

export const PatchProjectsAgentVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2Version).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAgentVersionsRequest>;

export type PatchProjectsAgentVersionsResponse = GoogleCloudDialogflowV2Version;
export const PatchProjectsAgentVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Version;

export type PatchProjectsAgentVersionsError = DefaultErrors;

export const patchProjectsAgentVersions: API.OperationMethod<
  PatchProjectsAgentVersionsRequest,
  PatchProjectsAgentVersionsResponse,
  PatchProjectsAgentVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsAgentVersionsRequest,
  output: PatchProjectsAgentVersionsResponse,
  errors: [],
}));

export interface DeleteProjectsAgentVersionsRequest {
  name: string;
}

export const DeleteProjectsAgentVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsAgentVersionsRequest>;

export type DeleteProjectsAgentVersionsResponse = GoogleProtobufEmpty;
export const DeleteProjectsAgentVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsAgentVersionsError = DefaultErrors;

export const deleteProjectsAgentVersions: API.OperationMethod<
  DeleteProjectsAgentVersionsRequest,
  DeleteProjectsAgentVersionsResponse,
  DeleteProjectsAgentVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsAgentVersionsRequest,
  output: DeleteProjectsAgentVersionsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{parent}/generators", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsGeneratorsRequest>;

export type CreateProjectsGeneratorsResponse = GoogleCloudDialogflowV2Generator;
export const CreateProjectsGeneratorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Generator;

export type CreateProjectsGeneratorsError = DefaultErrors;

export const createProjectsGenerators: API.OperationMethod<
  CreateProjectsGeneratorsRequest,
  CreateProjectsGeneratorsResponse,
  CreateProjectsGeneratorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsGeneratorsRequest,
  output: CreateProjectsGeneratorsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/generators" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsGeneratorsRequest>;

export type ListProjectsGeneratorsResponse =
  GoogleCloudDialogflowV2ListGeneratorsResponse;
export const ListProjectsGeneratorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListGeneratorsResponse;

export type ListProjectsGeneratorsError = DefaultErrors;

export const listProjectsGenerators: API.PaginatedOperationMethod<
  ListProjectsGeneratorsRequest,
  ListProjectsGeneratorsResponse,
  ListProjectsGeneratorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsGeneratorsRequest,
  output: ListProjectsGeneratorsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsAnswerRecordsRequest {
  parent: string;
  filter?: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsAnswerRecordsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{parent}/answerRecords" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAnswerRecordsRequest>;

export type ListProjectsAnswerRecordsResponse =
  GoogleCloudDialogflowV2ListAnswerRecordsResponse;
export const ListProjectsAnswerRecordsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListAnswerRecordsResponse;

export type ListProjectsAnswerRecordsError = DefaultErrors;

export const listProjectsAnswerRecords: API.PaginatedOperationMethod<
  ListProjectsAnswerRecordsRequest,
  ListProjectsAnswerRecordsResponse,
  ListProjectsAnswerRecordsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAnswerRecordsRequest,
  output: ListProjectsAnswerRecordsResponse,
  errors: [],
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
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAnswerRecordsRequest>;

export type PatchProjectsAnswerRecordsResponse =
  GoogleCloudDialogflowV2AnswerRecord;
export const PatchProjectsAnswerRecordsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2AnswerRecord;

export type PatchProjectsAnswerRecordsError = DefaultErrors;

export const patchProjectsAnswerRecords: API.OperationMethod<
  PatchProjectsAnswerRecordsRequest,
  PatchProjectsAnswerRecordsResponse,
  PatchProjectsAnswerRecordsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsAnswerRecordsRequest,
  output: PatchProjectsAnswerRecordsResponse,
  errors: [],
}));

export interface GetProjectsConversationDatasetsRequest {
  name: string;
}

export const GetProjectsConversationDatasetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsConversationDatasetsRequest>;

export type GetProjectsConversationDatasetsResponse =
  GoogleCloudDialogflowV2ConversationDataset;
export const GetProjectsConversationDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ConversationDataset;

export type GetProjectsConversationDatasetsError = DefaultErrors;

export const getProjectsConversationDatasets: API.OperationMethod<
  GetProjectsConversationDatasetsRequest,
  GetProjectsConversationDatasetsResponse,
  GetProjectsConversationDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsConversationDatasetsRequest,
  output: GetProjectsConversationDatasetsResponse,
  errors: [],
}));

export interface ListProjectsConversationDatasetsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsConversationDatasetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{parent}/conversationDatasets" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsConversationDatasetsRequest>;

export type ListProjectsConversationDatasetsResponse =
  GoogleCloudDialogflowV2ListConversationDatasetsResponse;
export const ListProjectsConversationDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListConversationDatasetsResponse;

export type ListProjectsConversationDatasetsError = DefaultErrors;

export const listProjectsConversationDatasets: API.PaginatedOperationMethod<
  ListProjectsConversationDatasetsRequest,
  ListProjectsConversationDatasetsResponse,
  ListProjectsConversationDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsConversationDatasetsRequest,
  output: ListProjectsConversationDatasetsResponse,
  errors: [],
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
      path: "v2/{name}:importConversationData",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ImportConversationDataProjectsConversationDatasetsRequest>;

export type ImportConversationDataProjectsConversationDatasetsResponse =
  GoogleLongrunningOperation;
export const ImportConversationDataProjectsConversationDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ImportConversationDataProjectsConversationDatasetsError =
  DefaultErrors;

export const importConversationDataProjectsConversationDatasets: API.OperationMethod<
  ImportConversationDataProjectsConversationDatasetsRequest,
  ImportConversationDataProjectsConversationDatasetsResponse,
  ImportConversationDataProjectsConversationDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportConversationDataProjectsConversationDatasetsRequest,
  output: ImportConversationDataProjectsConversationDatasetsResponse,
  errors: [],
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
      path: "v2/{parent}/conversationModels",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsConversationModelsRequest>;

export type CreateProjectsConversationModelsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsConversationModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsConversationModelsError = DefaultErrors;

export const createProjectsConversationModels: API.OperationMethod<
  CreateProjectsConversationModelsRequest,
  CreateProjectsConversationModelsResponse,
  CreateProjectsConversationModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsConversationModelsRequest,
  output: CreateProjectsConversationModelsResponse,
  errors: [],
}));

export interface GetProjectsConversationModelsRequest {
  name: string;
}

export const GetProjectsConversationModelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsConversationModelsRequest>;

export type GetProjectsConversationModelsResponse =
  GoogleCloudDialogflowV2ConversationModel;
export const GetProjectsConversationModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ConversationModel;

export type GetProjectsConversationModelsError = DefaultErrors;

export const getProjectsConversationModels: API.OperationMethod<
  GetProjectsConversationModelsRequest,
  GetProjectsConversationModelsResponse,
  GetProjectsConversationModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsConversationModelsRequest,
  output: GetProjectsConversationModelsResponse,
  errors: [],
}));

export interface ListProjectsConversationModelsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsConversationModelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{parent}/conversationModels" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsConversationModelsRequest>;

export type ListProjectsConversationModelsResponse =
  GoogleCloudDialogflowV2ListConversationModelsResponse;
export const ListProjectsConversationModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListConversationModelsResponse;

export type ListProjectsConversationModelsError = DefaultErrors;

export const listProjectsConversationModels: API.PaginatedOperationMethod<
  ListProjectsConversationModelsRequest,
  ListProjectsConversationModelsResponse,
  ListProjectsConversationModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsConversationModelsRequest,
  output: ListProjectsConversationModelsResponse,
  errors: [],
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
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsConversationModelsRequest>;

export type DeleteProjectsConversationModelsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsConversationModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsConversationModelsError = DefaultErrors;

export const deleteProjectsConversationModels: API.OperationMethod<
  DeleteProjectsConversationModelsRequest,
  DeleteProjectsConversationModelsResponse,
  DeleteProjectsConversationModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsConversationModelsRequest,
  output: DeleteProjectsConversationModelsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{name}:deploy", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<DeployProjectsConversationModelsRequest>;

export type DeployProjectsConversationModelsResponse =
  GoogleLongrunningOperation;
export const DeployProjectsConversationModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeployProjectsConversationModelsError = DefaultErrors;

export const deployProjectsConversationModels: API.OperationMethod<
  DeployProjectsConversationModelsRequest,
  DeployProjectsConversationModelsResponse,
  DeployProjectsConversationModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeployProjectsConversationModelsRequest,
  output: DeployProjectsConversationModelsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{name}:undeploy", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UndeployProjectsConversationModelsRequest>;

export type UndeployProjectsConversationModelsResponse =
  GoogleLongrunningOperation;
export const UndeployProjectsConversationModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type UndeployProjectsConversationModelsError = DefaultErrors;

export const undeployProjectsConversationModels: API.OperationMethod<
  UndeployProjectsConversationModelsRequest,
  UndeployProjectsConversationModelsResponse,
  UndeployProjectsConversationModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UndeployProjectsConversationModelsRequest,
  output: UndeployProjectsConversationModelsResponse,
  errors: [],
}));

export interface GetProjectsConversationModelsEvaluationsRequest {
  name: string;
}

export const GetProjectsConversationModelsEvaluationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsConversationModelsEvaluationsRequest>;

export type GetProjectsConversationModelsEvaluationsResponse =
  GoogleCloudDialogflowV2ConversationModelEvaluation;
export const GetProjectsConversationModelsEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ConversationModelEvaluation;

export type GetProjectsConversationModelsEvaluationsError = DefaultErrors;

export const getProjectsConversationModelsEvaluations: API.OperationMethod<
  GetProjectsConversationModelsEvaluationsRequest,
  GetProjectsConversationModelsEvaluationsResponse,
  GetProjectsConversationModelsEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsConversationModelsEvaluationsRequest,
  output: GetProjectsConversationModelsEvaluationsResponse,
  errors: [],
}));

export interface ListProjectsConversationModelsEvaluationsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsConversationModelsEvaluationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{parent}/evaluations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsConversationModelsEvaluationsRequest>;

export type ListProjectsConversationModelsEvaluationsResponse =
  GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse;
export const ListProjectsConversationModelsEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse;

export type ListProjectsConversationModelsEvaluationsError = DefaultErrors;

export const listProjectsConversationModelsEvaluations: API.PaginatedOperationMethod<
  ListProjectsConversationModelsEvaluationsRequest,
  ListProjectsConversationModelsEvaluationsResponse,
  ListProjectsConversationModelsEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsConversationModelsEvaluationsRequest,
  output: ListProjectsConversationModelsEvaluationsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
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
    T.Http({ method: "GET", path: "v2/{parent}/conversationProfiles" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsConversationProfilesRequest>;

export type ListProjectsConversationProfilesResponse =
  GoogleCloudDialogflowV2ListConversationProfilesResponse;
export const ListProjectsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListConversationProfilesResponse;

export type ListProjectsConversationProfilesError = DefaultErrors;

export const listProjectsConversationProfiles: API.PaginatedOperationMethod<
  ListProjectsConversationProfilesRequest,
  ListProjectsConversationProfilesResponse,
  ListProjectsConversationProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsConversationProfilesRequest,
  output: ListProjectsConversationProfilesResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsConversationProfilesRequest>;

export type GetProjectsConversationProfilesResponse =
  GoogleCloudDialogflowV2ConversationProfile;
export const GetProjectsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ConversationProfile;

export type GetProjectsConversationProfilesError = DefaultErrors;

export const getProjectsConversationProfiles: API.OperationMethod<
  GetProjectsConversationProfilesRequest,
  GetProjectsConversationProfilesResponse,
  GetProjectsConversationProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsConversationProfilesRequest,
  output: GetProjectsConversationProfilesResponse,
  errors: [],
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
      path: "v2/{parent}/conversationProfiles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsConversationProfilesRequest>;

export type CreateProjectsConversationProfilesResponse =
  GoogleCloudDialogflowV2ConversationProfile;
export const CreateProjectsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ConversationProfile;

export type CreateProjectsConversationProfilesError = DefaultErrors;

export const createProjectsConversationProfiles: API.OperationMethod<
  CreateProjectsConversationProfilesRequest,
  CreateProjectsConversationProfilesResponse,
  CreateProjectsConversationProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsConversationProfilesRequest,
  output: CreateProjectsConversationProfilesResponse,
  errors: [],
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
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsConversationProfilesRequest>;

export type PatchProjectsConversationProfilesResponse =
  GoogleCloudDialogflowV2ConversationProfile;
export const PatchProjectsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ConversationProfile;

export type PatchProjectsConversationProfilesError = DefaultErrors;

export const patchProjectsConversationProfiles: API.OperationMethod<
  PatchProjectsConversationProfilesRequest,
  PatchProjectsConversationProfilesResponse,
  PatchProjectsConversationProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsConversationProfilesRequest,
  output: PatchProjectsConversationProfilesResponse,
  errors: [],
}));

export interface DeleteProjectsConversationProfilesRequest {
  name: string;
}

export const DeleteProjectsConversationProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsConversationProfilesRequest>;

export type DeleteProjectsConversationProfilesResponse = GoogleProtobufEmpty;
export const DeleteProjectsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsConversationProfilesError = DefaultErrors;

export const deleteProjectsConversationProfiles: API.OperationMethod<
  DeleteProjectsConversationProfilesRequest,
  DeleteProjectsConversationProfilesResponse,
  DeleteProjectsConversationProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsConversationProfilesRequest,
  output: DeleteProjectsConversationProfilesResponse,
  errors: [],
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
      path: "v2/{conversationProfile}:setSuggestionFeatureConfig",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetSuggestionFeatureConfigProjectsConversationProfilesRequest>;

export type SetSuggestionFeatureConfigProjectsConversationProfilesResponse =
  GoogleLongrunningOperation;
export const SetSuggestionFeatureConfigProjectsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type SetSuggestionFeatureConfigProjectsConversationProfilesError =
  DefaultErrors;

export const setSuggestionFeatureConfigProjectsConversationProfiles: API.OperationMethod<
  SetSuggestionFeatureConfigProjectsConversationProfilesRequest,
  SetSuggestionFeatureConfigProjectsConversationProfilesResponse,
  SetSuggestionFeatureConfigProjectsConversationProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetSuggestionFeatureConfigProjectsConversationProfilesRequest,
  output: SetSuggestionFeatureConfigProjectsConversationProfilesResponse,
  errors: [],
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
      path: "v2/{conversationProfile}:clearSuggestionFeatureConfig",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ClearSuggestionFeatureConfigProjectsConversationProfilesRequest>;

export type ClearSuggestionFeatureConfigProjectsConversationProfilesResponse =
  GoogleLongrunningOperation;
export const ClearSuggestionFeatureConfigProjectsConversationProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ClearSuggestionFeatureConfigProjectsConversationProfilesError =
  DefaultErrors;

export const clearSuggestionFeatureConfigProjectsConversationProfiles: API.OperationMethod<
  ClearSuggestionFeatureConfigProjectsConversationProfilesRequest,
  ClearSuggestionFeatureConfigProjectsConversationProfilesResponse,
  ClearSuggestionFeatureConfigProjectsConversationProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ClearSuggestionFeatureConfigProjectsConversationProfilesRequest,
  output: ClearSuggestionFeatureConfigProjectsConversationProfilesResponse,
  errors: [],
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
      path: "v2/{parent}/conversations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsConversationsRequest>;

export type CreateProjectsConversationsResponse =
  GoogleCloudDialogflowV2Conversation;
export const CreateProjectsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Conversation;

export type CreateProjectsConversationsError = DefaultErrors;

export const createProjectsConversations: API.OperationMethod<
  CreateProjectsConversationsRequest,
  CreateProjectsConversationsResponse,
  CreateProjectsConversationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsConversationsRequest,
  output: CreateProjectsConversationsResponse,
  errors: [],
}));

export interface ListProjectsConversationsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
  filter?: string;
}

export const ListProjectsConversationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{parent}/conversations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsConversationsRequest>;

export type ListProjectsConversationsResponse =
  GoogleCloudDialogflowV2ListConversationsResponse;
export const ListProjectsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListConversationsResponse;

export type ListProjectsConversationsError = DefaultErrors;

export const listProjectsConversations: API.PaginatedOperationMethod<
  ListProjectsConversationsRequest,
  ListProjectsConversationsResponse,
  ListProjectsConversationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsConversationsRequest,
  output: ListProjectsConversationsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsConversationsRequest>;

export type GetProjectsConversationsResponse =
  GoogleCloudDialogflowV2Conversation;
export const GetProjectsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Conversation;

export type GetProjectsConversationsError = DefaultErrors;

export const getProjectsConversations: API.OperationMethod<
  GetProjectsConversationsRequest,
  GetProjectsConversationsResponse,
  GetProjectsConversationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsConversationsRequest,
  output: GetProjectsConversationsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{name}:complete", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CompleteProjectsConversationsRequest>;

export type CompleteProjectsConversationsResponse =
  GoogleCloudDialogflowV2Conversation;
export const CompleteProjectsConversationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Conversation;

export type CompleteProjectsConversationsError = DefaultErrors;

export const completeProjectsConversations: API.OperationMethod<
  CompleteProjectsConversationsRequest,
  CompleteProjectsConversationsResponse,
  CompleteProjectsConversationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CompleteProjectsConversationsRequest,
  output: CompleteProjectsConversationsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{parent}/participants", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsConversationsParticipantsRequest>;

export type CreateProjectsConversationsParticipantsResponse =
  GoogleCloudDialogflowV2Participant;
export const CreateProjectsConversationsParticipantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Participant;

export type CreateProjectsConversationsParticipantsError = DefaultErrors;

export const createProjectsConversationsParticipants: API.OperationMethod<
  CreateProjectsConversationsParticipantsRequest,
  CreateProjectsConversationsParticipantsResponse,
  CreateProjectsConversationsParticipantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsConversationsParticipantsRequest,
  output: CreateProjectsConversationsParticipantsResponse,
  errors: [],
}));

export interface GetProjectsConversationsParticipantsRequest {
  name: string;
}

export const GetProjectsConversationsParticipantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsConversationsParticipantsRequest>;

export type GetProjectsConversationsParticipantsResponse =
  GoogleCloudDialogflowV2Participant;
export const GetProjectsConversationsParticipantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Participant;

export type GetProjectsConversationsParticipantsError = DefaultErrors;

export const getProjectsConversationsParticipants: API.OperationMethod<
  GetProjectsConversationsParticipantsRequest,
  GetProjectsConversationsParticipantsResponse,
  GetProjectsConversationsParticipantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsConversationsParticipantsRequest,
  output: GetProjectsConversationsParticipantsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/participants" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsConversationsParticipantsRequest>;

export type ListProjectsConversationsParticipantsResponse =
  GoogleCloudDialogflowV2ListParticipantsResponse;
export const ListProjectsConversationsParticipantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListParticipantsResponse;

export type ListProjectsConversationsParticipantsError = DefaultErrors;

export const listProjectsConversationsParticipants: API.PaginatedOperationMethod<
  ListProjectsConversationsParticipantsRequest,
  ListProjectsConversationsParticipantsResponse,
  ListProjectsConversationsParticipantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsConversationsParticipantsRequest,
  output: ListProjectsConversationsParticipantsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsConversationsParticipantsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Participant;
}

export const PatchProjectsConversationsParticipantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2Participant).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsConversationsParticipantsRequest>;

export type PatchProjectsConversationsParticipantsResponse =
  GoogleCloudDialogflowV2Participant;
export const PatchProjectsConversationsParticipantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Participant;

export type PatchProjectsConversationsParticipantsError = DefaultErrors;

export const patchProjectsConversationsParticipants: API.OperationMethod<
  PatchProjectsConversationsParticipantsRequest,
  PatchProjectsConversationsParticipantsResponse,
  PatchProjectsConversationsParticipantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsConversationsParticipantsRequest,
  output: PatchProjectsConversationsParticipantsResponse,
  errors: [],
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
      path: "v2/{participant}:analyzeContent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AnalyzeContentProjectsConversationsParticipantsRequest>;

export type AnalyzeContentProjectsConversationsParticipantsResponse =
  GoogleCloudDialogflowV2AnalyzeContentResponse;
export const AnalyzeContentProjectsConversationsParticipantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2AnalyzeContentResponse;

export type AnalyzeContentProjectsConversationsParticipantsError =
  DefaultErrors;

export const analyzeContentProjectsConversationsParticipants: API.OperationMethod<
  AnalyzeContentProjectsConversationsParticipantsRequest,
  AnalyzeContentProjectsConversationsParticipantsResponse,
  AnalyzeContentProjectsConversationsParticipantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AnalyzeContentProjectsConversationsParticipantsRequest,
  output: AnalyzeContentProjectsConversationsParticipantsResponse,
  errors: [],
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
      path: "v2/{parent}/suggestions:suggestArticles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SuggestArticlesProjectsConversationsParticipantsSuggestionsRequest>;

export type SuggestArticlesProjectsConversationsParticipantsSuggestionsResponse =
  GoogleCloudDialogflowV2SuggestArticlesResponse;
export const SuggestArticlesProjectsConversationsParticipantsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SuggestArticlesResponse;

export type SuggestArticlesProjectsConversationsParticipantsSuggestionsError =
  DefaultErrors;

export const suggestArticlesProjectsConversationsParticipantsSuggestions: API.OperationMethod<
  SuggestArticlesProjectsConversationsParticipantsSuggestionsRequest,
  SuggestArticlesProjectsConversationsParticipantsSuggestionsResponse,
  SuggestArticlesProjectsConversationsParticipantsSuggestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SuggestArticlesProjectsConversationsParticipantsSuggestionsRequest,
  output: SuggestArticlesProjectsConversationsParticipantsSuggestionsResponse,
  errors: [],
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
      path: "v2/{parent}/suggestions:suggestFaqAnswers",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SuggestFaqAnswersProjectsConversationsParticipantsSuggestionsRequest>;

export type SuggestFaqAnswersProjectsConversationsParticipantsSuggestionsResponse =
  GoogleCloudDialogflowV2SuggestFaqAnswersResponse;
export const SuggestFaqAnswersProjectsConversationsParticipantsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SuggestFaqAnswersResponse;

export type SuggestFaqAnswersProjectsConversationsParticipantsSuggestionsError =
  DefaultErrors;

export const suggestFaqAnswersProjectsConversationsParticipantsSuggestions: API.OperationMethod<
  SuggestFaqAnswersProjectsConversationsParticipantsSuggestionsRequest,
  SuggestFaqAnswersProjectsConversationsParticipantsSuggestionsResponse,
  SuggestFaqAnswersProjectsConversationsParticipantsSuggestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SuggestFaqAnswersProjectsConversationsParticipantsSuggestionsRequest,
  output: SuggestFaqAnswersProjectsConversationsParticipantsSuggestionsResponse,
  errors: [],
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
      path: "v2/{parent}/suggestions:suggestSmartReplies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SuggestSmartRepliesProjectsConversationsParticipantsSuggestionsRequest>;

export type SuggestSmartRepliesProjectsConversationsParticipantsSuggestionsResponse =
  GoogleCloudDialogflowV2SuggestSmartRepliesResponse;
export const SuggestSmartRepliesProjectsConversationsParticipantsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SuggestSmartRepliesResponse;

export type SuggestSmartRepliesProjectsConversationsParticipantsSuggestionsError =
  DefaultErrors;

export const suggestSmartRepliesProjectsConversationsParticipantsSuggestions: API.OperationMethod<
  SuggestSmartRepliesProjectsConversationsParticipantsSuggestionsRequest,
  SuggestSmartRepliesProjectsConversationsParticipantsSuggestionsResponse,
  SuggestSmartRepliesProjectsConversationsParticipantsSuggestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SuggestSmartRepliesProjectsConversationsParticipantsSuggestionsRequest,
  output:
    SuggestSmartRepliesProjectsConversationsParticipantsSuggestionsResponse,
  errors: [],
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
      path: "v2/{parent}/suggestions:suggestKnowledgeAssist",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SuggestKnowledgeAssistProjectsConversationsParticipantsSuggestionsRequest>;

export type SuggestKnowledgeAssistProjectsConversationsParticipantsSuggestionsResponse =
  GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse;
export const SuggestKnowledgeAssistProjectsConversationsParticipantsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SuggestKnowledgeAssistResponse;

export type SuggestKnowledgeAssistProjectsConversationsParticipantsSuggestionsError =
  DefaultErrors;

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
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/messages" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsConversationsMessagesRequest>;

export type ListProjectsConversationsMessagesResponse =
  GoogleCloudDialogflowV2ListMessagesResponse;
export const ListProjectsConversationsMessagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListMessagesResponse;

export type ListProjectsConversationsMessagesError = DefaultErrors;

export const listProjectsConversationsMessages: API.PaginatedOperationMethod<
  ListProjectsConversationsMessagesRequest,
  ListProjectsConversationsMessagesResponse,
  ListProjectsConversationsMessagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsConversationsMessagesRequest,
  output: ListProjectsConversationsMessagesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
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
      path: "v2/{conversation}/suggestions:suggestConversationSummary",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SuggestConversationSummaryProjectsConversationsSuggestionsRequest>;

export type SuggestConversationSummaryProjectsConversationsSuggestionsResponse =
  GoogleCloudDialogflowV2SuggestConversationSummaryResponse;
export const SuggestConversationSummaryProjectsConversationsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SuggestConversationSummaryResponse;

export type SuggestConversationSummaryProjectsConversationsSuggestionsError =
  DefaultErrors;

export const suggestConversationSummaryProjectsConversationsSuggestions: API.OperationMethod<
  SuggestConversationSummaryProjectsConversationsSuggestionsRequest,
  SuggestConversationSummaryProjectsConversationsSuggestionsResponse,
  SuggestConversationSummaryProjectsConversationsSuggestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SuggestConversationSummaryProjectsConversationsSuggestionsRequest,
  output: SuggestConversationSummaryProjectsConversationsSuggestionsResponse,
  errors: [],
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
      path: "v2/{conversation}/suggestions:searchKnowledge",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SearchKnowledgeProjectsConversationsSuggestionsRequest>;

export type SearchKnowledgeProjectsConversationsSuggestionsResponse =
  GoogleCloudDialogflowV2SearchKnowledgeResponse;
export const SearchKnowledgeProjectsConversationsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SearchKnowledgeResponse;

export type SearchKnowledgeProjectsConversationsSuggestionsError =
  DefaultErrors;

export const searchKnowledgeProjectsConversationsSuggestions: API.OperationMethod<
  SearchKnowledgeProjectsConversationsSuggestionsRequest,
  SearchKnowledgeProjectsConversationsSuggestionsResponse,
  SearchKnowledgeProjectsConversationsSuggestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchKnowledgeProjectsConversationsSuggestionsRequest,
  output: SearchKnowledgeProjectsConversationsSuggestionsResponse,
  errors: [],
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
      path: "v2/{conversation}/suggestions:generate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateProjectsConversationsSuggestionsRequest>;

export type GenerateProjectsConversationsSuggestionsResponse =
  GoogleCloudDialogflowV2GenerateSuggestionsResponse;
export const GenerateProjectsConversationsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2GenerateSuggestionsResponse;

export type GenerateProjectsConversationsSuggestionsError = DefaultErrors;

export const generateProjectsConversationsSuggestions: API.OperationMethod<
  GenerateProjectsConversationsSuggestionsRequest,
  GenerateProjectsConversationsSuggestionsResponse,
  GenerateProjectsConversationsSuggestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateProjectsConversationsSuggestionsRequest,
  output: GenerateProjectsConversationsSuggestionsResponse,
  errors: [],
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
      path: "v2/{parent}/suggestions:generateStatelessSummary",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateStatelessSummaryProjectsSuggestionsRequest>;

export type GenerateStatelessSummaryProjectsSuggestionsResponse =
  GoogleCloudDialogflowV2GenerateStatelessSummaryResponse;
export const GenerateStatelessSummaryProjectsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2GenerateStatelessSummaryResponse;

export type GenerateStatelessSummaryProjectsSuggestionsError = DefaultErrors;

export const generateStatelessSummaryProjectsSuggestions: API.OperationMethod<
  GenerateStatelessSummaryProjectsSuggestionsRequest,
  GenerateStatelessSummaryProjectsSuggestionsResponse,
  GenerateStatelessSummaryProjectsSuggestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateStatelessSummaryProjectsSuggestionsRequest,
  output: GenerateStatelessSummaryProjectsSuggestionsResponse,
  errors: [],
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
      path: "v2/{parent}/suggestions:searchKnowledge",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SearchKnowledgeProjectsSuggestionsRequest>;

export type SearchKnowledgeProjectsSuggestionsResponse =
  GoogleCloudDialogflowV2SearchKnowledgeResponse;
export const SearchKnowledgeProjectsSuggestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2SearchKnowledgeResponse;

export type SearchKnowledgeProjectsSuggestionsError = DefaultErrors;

export const searchKnowledgeProjectsSuggestions: API.OperationMethod<
  SearchKnowledgeProjectsSuggestionsRequest,
  SearchKnowledgeProjectsSuggestionsResponse,
  SearchKnowledgeProjectsSuggestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchKnowledgeProjectsSuggestionsRequest,
  output: SearchKnowledgeProjectsSuggestionsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/knowledgeBases" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsKnowledgeBasesRequest>;

export type ListProjectsKnowledgeBasesResponse =
  GoogleCloudDialogflowV2ListKnowledgeBasesResponse;
export const ListProjectsKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListKnowledgeBasesResponse;

export type ListProjectsKnowledgeBasesError = DefaultErrors;

export const listProjectsKnowledgeBases: API.PaginatedOperationMethod<
  ListProjectsKnowledgeBasesRequest,
  ListProjectsKnowledgeBasesResponse,
  ListProjectsKnowledgeBasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsKnowledgeBasesRequest,
  output: ListProjectsKnowledgeBasesResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsKnowledgeBasesRequest>;

export type GetProjectsKnowledgeBasesResponse =
  GoogleCloudDialogflowV2KnowledgeBase;
export const GetProjectsKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2KnowledgeBase;

export type GetProjectsKnowledgeBasesError = DefaultErrors;

export const getProjectsKnowledgeBases: API.OperationMethod<
  GetProjectsKnowledgeBasesRequest,
  GetProjectsKnowledgeBasesResponse,
  GetProjectsKnowledgeBasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsKnowledgeBasesRequest,
  output: GetProjectsKnowledgeBasesResponse,
  errors: [],
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
      path: "v2/{parent}/knowledgeBases",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsKnowledgeBasesRequest>;

export type CreateProjectsKnowledgeBasesResponse =
  GoogleCloudDialogflowV2KnowledgeBase;
export const CreateProjectsKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2KnowledgeBase;

export type CreateProjectsKnowledgeBasesError = DefaultErrors;

export const createProjectsKnowledgeBases: API.OperationMethod<
  CreateProjectsKnowledgeBasesRequest,
  CreateProjectsKnowledgeBasesResponse,
  CreateProjectsKnowledgeBasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsKnowledgeBasesRequest,
  output: CreateProjectsKnowledgeBasesResponse,
  errors: [],
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
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsKnowledgeBasesRequest>;

export type DeleteProjectsKnowledgeBasesResponse = GoogleProtobufEmpty;
export const DeleteProjectsKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsKnowledgeBasesError = DefaultErrors;

export const deleteProjectsKnowledgeBases: API.OperationMethod<
  DeleteProjectsKnowledgeBasesRequest,
  DeleteProjectsKnowledgeBasesResponse,
  DeleteProjectsKnowledgeBasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsKnowledgeBasesRequest,
  output: DeleteProjectsKnowledgeBasesResponse,
  errors: [],
}));

export interface PatchProjectsKnowledgeBasesRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2KnowledgeBase;
}

export const PatchProjectsKnowledgeBasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2KnowledgeBase).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsKnowledgeBasesRequest>;

export type PatchProjectsKnowledgeBasesResponse =
  GoogleCloudDialogflowV2KnowledgeBase;
export const PatchProjectsKnowledgeBasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2KnowledgeBase;

export type PatchProjectsKnowledgeBasesError = DefaultErrors;

export const patchProjectsKnowledgeBases: API.OperationMethod<
  PatchProjectsKnowledgeBasesRequest,
  PatchProjectsKnowledgeBasesResponse,
  PatchProjectsKnowledgeBasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsKnowledgeBasesRequest,
  output: PatchProjectsKnowledgeBasesResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{parent}/documents" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsKnowledgeBasesDocumentsRequest>;

export type ListProjectsKnowledgeBasesDocumentsResponse =
  GoogleCloudDialogflowV2ListDocumentsResponse;
export const ListProjectsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2ListDocumentsResponse;

export type ListProjectsKnowledgeBasesDocumentsError = DefaultErrors;

export const listProjectsKnowledgeBasesDocuments: API.PaginatedOperationMethod<
  ListProjectsKnowledgeBasesDocumentsRequest,
  ListProjectsKnowledgeBasesDocumentsResponse,
  ListProjectsKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsKnowledgeBasesDocumentsRequest,
  output: ListProjectsKnowledgeBasesDocumentsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsKnowledgeBasesDocumentsRequest>;

export type GetProjectsKnowledgeBasesDocumentsResponse =
  GoogleCloudDialogflowV2Document;
export const GetProjectsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDialogflowV2Document;

export type GetProjectsKnowledgeBasesDocumentsError = DefaultErrors;

export const getProjectsKnowledgeBasesDocuments: API.OperationMethod<
  GetProjectsKnowledgeBasesDocumentsRequest,
  GetProjectsKnowledgeBasesDocumentsResponse,
  GetProjectsKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsKnowledgeBasesDocumentsRequest,
  output: GetProjectsKnowledgeBasesDocumentsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{parent}/documents", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsKnowledgeBasesDocumentsRequest>;

export type CreateProjectsKnowledgeBasesDocumentsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsKnowledgeBasesDocumentsError = DefaultErrors;

export const createProjectsKnowledgeBasesDocuments: API.OperationMethod<
  CreateProjectsKnowledgeBasesDocumentsRequest,
  CreateProjectsKnowledgeBasesDocumentsResponse,
  CreateProjectsKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsKnowledgeBasesDocumentsRequest,
  output: CreateProjectsKnowledgeBasesDocumentsResponse,
  errors: [],
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
      path: "v2/{parent}/documents:import",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ImportProjectsKnowledgeBasesDocumentsRequest>;

export type ImportProjectsKnowledgeBasesDocumentsResponse =
  GoogleLongrunningOperation;
export const ImportProjectsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ImportProjectsKnowledgeBasesDocumentsError = DefaultErrors;

export const importProjectsKnowledgeBasesDocuments: API.OperationMethod<
  ImportProjectsKnowledgeBasesDocumentsRequest,
  ImportProjectsKnowledgeBasesDocumentsResponse,
  ImportProjectsKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportProjectsKnowledgeBasesDocumentsRequest,
  output: ImportProjectsKnowledgeBasesDocumentsResponse,
  errors: [],
}));

export interface DeleteProjectsKnowledgeBasesDocumentsRequest {
  name: string;
}

export const DeleteProjectsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsKnowledgeBasesDocumentsRequest>;

export type DeleteProjectsKnowledgeBasesDocumentsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsKnowledgeBasesDocumentsError = DefaultErrors;

export const deleteProjectsKnowledgeBasesDocuments: API.OperationMethod<
  DeleteProjectsKnowledgeBasesDocumentsRequest,
  DeleteProjectsKnowledgeBasesDocumentsResponse,
  DeleteProjectsKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsKnowledgeBasesDocumentsRequest,
  output: DeleteProjectsKnowledgeBasesDocumentsResponse,
  errors: [],
}));

export interface PatchProjectsKnowledgeBasesDocumentsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDialogflowV2Document;
}

export const PatchProjectsKnowledgeBasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDialogflowV2Document).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsKnowledgeBasesDocumentsRequest>;

export type PatchProjectsKnowledgeBasesDocumentsResponse =
  GoogleLongrunningOperation;
export const PatchProjectsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsKnowledgeBasesDocumentsError = DefaultErrors;

export const patchProjectsKnowledgeBasesDocuments: API.OperationMethod<
  PatchProjectsKnowledgeBasesDocumentsRequest,
  PatchProjectsKnowledgeBasesDocumentsResponse,
  PatchProjectsKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsKnowledgeBasesDocumentsRequest,
  output: PatchProjectsKnowledgeBasesDocumentsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{name}:reload", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ReloadProjectsKnowledgeBasesDocumentsRequest>;

export type ReloadProjectsKnowledgeBasesDocumentsResponse =
  GoogleLongrunningOperation;
export const ReloadProjectsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ReloadProjectsKnowledgeBasesDocumentsError = DefaultErrors;

export const reloadProjectsKnowledgeBasesDocuments: API.OperationMethod<
  ReloadProjectsKnowledgeBasesDocumentsRequest,
  ReloadProjectsKnowledgeBasesDocumentsResponse,
  ReloadProjectsKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReloadProjectsKnowledgeBasesDocumentsRequest,
  output: ReloadProjectsKnowledgeBasesDocumentsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v2/{name}:export", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ExportProjectsKnowledgeBasesDocumentsRequest>;

export type ExportProjectsKnowledgeBasesDocumentsResponse =
  GoogleLongrunningOperation;
export const ExportProjectsKnowledgeBasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ExportProjectsKnowledgeBasesDocumentsError = DefaultErrors;

export const exportProjectsKnowledgeBasesDocuments: API.OperationMethod<
  ExportProjectsKnowledgeBasesDocumentsRequest,
  ExportProjectsKnowledgeBasesDocumentsResponse,
  ExportProjectsKnowledgeBasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportProjectsKnowledgeBasesDocumentsRequest,
  output: ExportProjectsKnowledgeBasesDocumentsResponse,
  errors: [],
}));
