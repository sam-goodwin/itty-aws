// ==========================================================================
// Gemini Enterprise for Customer Experience API (ces v1)
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
  name: "ces",
  version: "v1",
  rootUrl: "https://ces.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface ServiceDirectoryConfig {
  /** Required. The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: `projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}`. Location of the service directory must be the same as the location of the app. */
  service?: string;
}

export const ServiceDirectoryConfig: Schema.Codec<ServiceDirectoryConfig> =
  /*@__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceDirectoryConfig" });

export interface PythonFunction {
  /** Optional. The name of the Python function to execute. Must match a Python function name defined in the python code. Case sensitive. If the name is not provided, the first function defined in the python code will be used. */
  name?: string;
  /** Optional. The Python code to execute for the tool. */
  pythonCode?: string;
  /** Output only. The description of the Python function, parsed from the python code's docstring. */
  description?: string;
  /** Optional. Service Directory configuration for the tool. */
  serviceDirectoryConfig?: ServiceDirectoryConfig;
}

export const PythonFunction: Schema.Codec<PythonFunction> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    pythonCode: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    serviceDirectoryConfig: Schema.optional(ServiceDirectoryConfig),
  }).annotate({ identifier: "PythonFunction" });

export interface WidgetToolDataMapping {
  /** Optional. The resource name of the tool that provides the data for the widget (e.g., a search tool or a custom function). Format: `projects/{project}/locations/{location}/agents/{agent}/tools/{tool}` */
  sourceToolName?: string;
  /** Optional. A map of widget input parameter fields to the corresponding output fields of the source tool. */
  fieldMappings?: Record<string, string>;
  /** Optional. Configuration for a Python function used to transform the source tool's output into the widget's input format. */
  pythonFunction?: PythonFunction;
  /** Deprecated: Use `python_function` instead. */
  pythonScript?: string;
  /** Optional. The mode of the data mapping. */
  mode?: "MODE_UNSPECIFIED" | "FIELD_MAPPING" | "PYTHON_SCRIPT" | (string & {});
}

export const WidgetToolDataMapping: Schema.Codec<WidgetToolDataMapping> =
  /*@__PURE__*/ Schema.Struct({
    sourceToolName: Schema.optional(Schema.String),
    fieldMappings: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    pythonFunction: Schema.optional(PythonFunction),
    pythonScript: Schema.optional(Schema.String),
    mode: Schema.optional(Schema.String),
  }).annotate({ identifier: "WidgetToolDataMapping" });

export interface ToolsetTool {
  /** Required. The resource name of the Toolset from which this tool is derived. Format: `projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}` */
  toolset?: string;
  /** Optional. The tool ID to filter the tools to retrieve the schema for. */
  toolId?: string;
}

export const ToolsetTool: Schema.Codec<ToolsetTool> =
  /*@__PURE__*/ Schema.Struct({
    toolset: Schema.optional(Schema.String),
    toolId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ToolsetTool" });

export interface MockedToolCall {
  /** Optional. The name of the tool to mock. Format: `projects/{project}/locations/{location}/apps/{app}/tools/{tool}` */
  toolId?: string;
  /** Optional. The mock response / output to return if the tool call args / inputs match the pattern. */
  mockResponse?: Record<string, unknown>;
  /** Required. A pattern to match against the args / inputs of all dispatched tool calls. If the tool call inputs match this pattern, then mock output will be returned. */
  expectedArgsPattern?: Record<string, unknown>;
  /** Optional. The toolset to mock. */
  toolset?: ToolsetTool;
  /** Optional. Deprecated. Use tool_identifier instead. */
  tool?: string;
}

export const MockedToolCall: Schema.Codec<MockedToolCall> =
  /*@__PURE__*/ Schema.Struct({
    toolId: Schema.optional(Schema.String),
    mockResponse: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    expectedArgsPattern: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    toolset: Schema.optional(ToolsetTool),
    tool: Schema.optional(Schema.String),
  }).annotate({ identifier: "MockedToolCall" });

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

export const MockConfig: Schema.Codec<MockConfig> =
  /*@__PURE__*/ Schema.Struct({
    mockedToolCalls: Schema.optional(Schema.Array(MockedToolCall)),
    unmatchedToolCallBehavior: Schema.optional(Schema.String),
  }).annotate({ identifier: "MockConfig" });

export interface FileSearchTool {
  /** Optional. The type of the corpus. Default is FULLY_MANAGED. */
  corpusType?:
    | "CORPUS_TYPE_UNSPECIFIED"
    | "USER_OWNED"
    | "FULLY_MANAGED"
    | (string & {});
  /** Required. The tool name. */
  name?: string;
  /** Optional. The tool description. */
  description?: string;
  /** Optional. The corpus where files are stored. Format: projects/{project}/locations/{location}/ragCorpora/{rag_corpus} */
  fileCorpus?: string;
}

export const FileSearchTool: Schema.Codec<FileSearchTool> =
  /*@__PURE__*/ Schema.Struct({
    corpusType: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    fileCorpus: Schema.optional(Schema.String),
  }).annotate({ identifier: "FileSearchTool" });

export interface CodeBlock {
  /** Required. Python code which will be invoked in tool fake mode. Expected Python function signature - To catch all tool calls: def fake_tool_call(tool: Tool, input: dict[str, Any], callback_context: CallbackContext) -> Optional[dict[str, Any]]: To catch a specific tool call: def fake_{tool_id}(tool: Tool, input: dict[str, Any], callback_context: CallbackContext) -> Optional[dict[str, Any]]: If the function returns None, the real tool will be invoked instead. */
  pythonCode?: string;
}

export const CodeBlock: Schema.Codec<CodeBlock> =
  /*@__PURE__*/ Schema.Struct({
    pythonCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "CodeBlock" });

export interface ToolFakeConfig {
  /** Optional. Code block which will be executed instead of a real tool call. */
  codeBlock?: CodeBlock;
  /** Optional. Whether the tool is using fake mode. */
  enableFakeMode?: boolean;
}

export const ToolFakeConfig: Schema.Codec<ToolFakeConfig> =
  /*@__PURE__*/ Schema.Struct({
    codeBlock: Schema.optional(CodeBlock),
    enableFakeMode: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ToolFakeConfig" });

export interface GoogleSearchToolPromptConfig {
  /** Optional. Defines the prompt used for the system instructions when interacting with the agent in voice conversations. If not set, default prompt will be used. */
  voicePrompt?: string;
  /** Optional. Defines the prompt used for the system instructions when interacting with the agent in chat conversations. If not set, default prompt will be used. */
  textPrompt?: string;
}

export const GoogleSearchToolPromptConfig: Schema.Codec<GoogleSearchToolPromptConfig> =
  /*@__PURE__*/ Schema.Struct({
    voicePrompt: Schema.optional(Schema.String),
    textPrompt: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleSearchToolPromptConfig" });

export interface GoogleSearchTool {
  /** Required. The name of the tool. */
  name?: string;
  /** Optional. Description of the tool's purpose. */
  description?: string;
  /** Optional. Specifies domains to restrict search results to. Example: "example.com", "another.site". A maximum of 20 domains can be specified. */
  preferredDomains?: ReadonlyArray<string>;
  /** Optional. Content will be fetched directly from these URLs for context and grounding. Example: "https://example.com/path.html". A maximum of 20 URLs are allowed. */
  contextUrls?: ReadonlyArray<string>;
  /** Optional. List of domains to be excluded from the search results. Example: "example.com". A maximum of 2000 domains can be excluded. */
  excludeDomains?: ReadonlyArray<string>;
  /** Optional. Prompt instructions passed to planner on how the search results should be processed for text and voice. */
  promptConfig?: GoogleSearchToolPromptConfig;
}

export const GoogleSearchTool: Schema.Codec<GoogleSearchTool> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    preferredDomains: Schema.optional(Schema.Array(Schema.String)),
    contextUrls: Schema.optional(Schema.Array(Schema.String)),
    excludeDomains: Schema.optional(Schema.Array(Schema.String)),
    promptConfig: Schema.optional(GoogleSearchToolPromptConfig),
  }).annotate({ identifier: "GoogleSearchTool" });

export interface TlsConfigCaCert {
  /** Required. The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates. */
  displayName?: string;
  /** Required. The allowed custom CA certificates (in DER format) for HTTPS verification. This overrides the default SSL trust store. If this is empty or unspecified, CES will use Google's default trust store to verify certificates. N.B. Make sure the HTTPS server certificates are signed with "subject alt name". For instance a certificate can be self-signed using the following command: ``` openssl x509 -req -days 200 -in example.com.csr \ -signkey example.com.key \ -out example.com.crt \ -extfile <(printf "\nsubjectAltName='DNS:www.example.com'") ``` */
  cert?: string;
}

export const TlsConfigCaCert: Schema.Codec<TlsConfigCaCert> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    cert: Schema.optional(Schema.String),
  }).annotate({ identifier: "TlsConfigCaCert" });

export interface TlsConfig {
  /** Required. Specifies a list of allowed custom CA certificates for HTTPS verification. */
  caCerts?: ReadonlyArray<TlsConfigCaCert>;
}

export const TlsConfig: Schema.Codec<TlsConfig> =
  /*@__PURE__*/ Schema.Struct({
    caCerts: Schema.optional(Schema.Array(TlsConfigCaCert)),
  }).annotate({ identifier: "TlsConfig" });

export interface OAuthConfig {
  /** Required. OAuth grant types. */
  oauthGrantType?:
    | "OAUTH_GRANT_TYPE_UNSPECIFIED"
    | "CLIENT_CREDENTIAL"
    | (string & {});
  /** Required. The token endpoint in the OAuth provider to exchange for an access token. */
  tokenEndpoint?: string;
  /** Required. The name of the SecretManager secret version resource storing the client secret. Format: `projects/{project}/secrets/{secret}/versions/{version}` Note: You should grant `roles/secretmanager.secretAccessor` role to the CES service agent `service-@gcp-sa-ces.iam.gserviceaccount.com`. */
  clientSecretVersion?: string;
  /** Optional. The OAuth scopes to grant. */
  scopes?: ReadonlyArray<string>;
  /** Required. The client ID from the OAuth provider. */
  clientId?: string;
}

export const OAuthConfig: Schema.Codec<OAuthConfig> =
  /*@__PURE__*/ Schema.Struct({
    oauthGrantType: Schema.optional(Schema.String),
    tokenEndpoint: Schema.optional(Schema.String),
    clientSecretVersion: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Schema.String)),
    clientId: Schema.optional(Schema.String),
  }).annotate({ identifier: "OAuthConfig" });

export interface ServiceAgentIdTokenAuthConfig {}

export const ServiceAgentIdTokenAuthConfig: Schema.Codec<ServiceAgentIdTokenAuthConfig> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ServiceAgentIdTokenAuthConfig",
  });

export interface ServiceAccountAuthConfig {
  /** Required. The email address of the service account used for authentication. CES uses this service account to exchange an access token and the access token is then sent in the `Authorization` header of the request. The service account must have the `roles/iam.serviceAccountTokenCreator` role granted to the CES service agent `service-@gcp-sa-ces.iam.gserviceaccount.com`. */
  serviceAccount?: string;
  /** Optional. The OAuth scopes to grant. If not specified, the default scope `https://www.googleapis.com/auth/cloud-platform` is used. */
  scopes?: ReadonlyArray<string>;
}

export const ServiceAccountAuthConfig: Schema.Codec<ServiceAccountAuthConfig> =
  /*@__PURE__*/ Schema.Struct({
    serviceAccount: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ServiceAccountAuthConfig" });

export interface BearerTokenConfig {
  /** Required. The bearer token. Must be in the format `$context.variables.`. */
  token?: string;
}

export const BearerTokenConfig: Schema.Codec<BearerTokenConfig> =
  /*@__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String),
  }).annotate({ identifier: "BearerTokenConfig" });

export interface ApiKeyConfig {
  /** Required. The name of the SecretManager secret version resource storing the API key. Format: `projects/{project}/secrets/{secret}/versions/{version}` Note: You should grant `roles/secretmanager.secretAccessor` role to the CES service agent `service-@gcp-sa-ces.iam.gserviceaccount.com`. */
  apiKeySecretVersion?: string;
  /** Required. The parameter name or the header name of the API key. E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name. */
  keyName?: string;
  /** Required. Key location in the request. */
  requestLocation?:
    | "REQUEST_LOCATION_UNSPECIFIED"
    | "HEADER"
    | "QUERY_STRING"
    | (string & {});
}

export const ApiKeyConfig: Schema.Codec<ApiKeyConfig> =
  /*@__PURE__*/ Schema.Struct({
    apiKeySecretVersion: Schema.optional(Schema.String),
    keyName: Schema.optional(Schema.String),
    requestLocation: Schema.optional(Schema.String),
  }).annotate({ identifier: "ApiKeyConfig" });

export interface ApiAuthentication {
  /** Optional. Config for OAuth. */
  oauthConfig?: OAuthConfig;
  /** Optional. Config for ID token auth generated from CES service agent. */
  serviceAgentIdTokenAuthConfig?: ServiceAgentIdTokenAuthConfig;
  /** Optional. Config for service account authentication. */
  serviceAccountAuthConfig?: ServiceAccountAuthConfig;
  /** Optional. Config for bearer token auth. */
  bearerTokenConfig?: BearerTokenConfig;
  /** Optional. Config for API key auth. */
  apiKeyConfig?: ApiKeyConfig;
}

export const ApiAuthentication: Schema.Codec<ApiAuthentication> =
  /*@__PURE__*/ Schema.Struct({
    oauthConfig: Schema.optional(OAuthConfig),
    serviceAgentIdTokenAuthConfig: Schema.optional(
      ServiceAgentIdTokenAuthConfig,
    ),
    serviceAccountAuthConfig: Schema.optional(ServiceAccountAuthConfig),
    bearerTokenConfig: Schema.optional(BearerTokenConfig),
    apiKeyConfig: Schema.optional(ApiKeyConfig),
  }).annotate({ identifier: "ApiAuthentication" });

export interface Ces_Schema {
  /** Optional. Properties of Type.OBJECT. */
  properties?: Record<string, Ces_Schema>;
  /** Optional. Indicate the items in the array must be unique. Only applies to TYPE.ARRAY. */
  uniqueItems?: boolean;
  /** Optional. Required properties of Type.OBJECT. */
  required?: ReadonlyArray<string>;
  /** Optional. Schema of the elements of Type.ARRAY. */
  items?: Ces_Schema;
  /** Optional. Minimum value for Type.INTEGER and Type.NUMBER. */
  minimum?: number;
  /** Optional. Default value of the data. */
  default?: unknown;
  /** Optional. Allows indirect references between schema nodes. The value should be a valid reference to a child of the root `defs`. For example, the following schema defines a reference to a schema node named "Pet": ``` type: object properties: pet: ref: #/defs/Pet defs: Pet: type: object properties: name: type: string ``` The value of the "pet" property is a reference to the schema node named "Pet". See details in https://json-schema.org/understanding-json-schema/structuring. */
  ref?: string;
  /** Optional. Minimum number of the elements for Type.ARRAY. */
  minItems?: string;
  /** Optional. Indicates if the value may be null. */
  nullable?: boolean;
  /** Optional. The description of the data. */
  description?: string;
  /** Optional. Schemas of initial elements of Type.ARRAY. */
  prefixItems?: ReadonlyArray<Ces_Schema>;
  /** Optional. The value should be validated against any (one or more) of the subschemas in the list. */
  anyOf?: ReadonlyArray<Ces_Schema>;
  /** Optional. The title of the schema. */
  title?: string;
  /** Optional. Possible values of the element of primitive type with enum format. Examples: 1. We can define direction as : {type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]} 2. We can define apartment number as : {type:INTEGER, format:enum, enum:["101", "201", "301"]} */
  enum?: ReadonlyArray<string>;
  /** Optional. Can either be a boolean or an object, controls the presence of additional properties. */
  additionalProperties?: Ces_Schema;
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
  /** Optional. Maximum number of the elements for Type.ARRAY. */
  maxItems?: string;
  /** Optional. A map of definitions for use by `ref`. Only allowed at the root of the schema. */
  defs?: Record<string, Ces_Schema>;
  /** Optional. Maximum value for Type.INTEGER and Type.NUMBER. */
  maximum?: number;
}

export const Ces_Schema: Schema.Codec<Ces_Schema> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      properties: Schema.optional(Schema.Record(Schema.String, Ces_Schema)),
      uniqueItems: Schema.optional(Schema.Boolean),
      required: Schema.optional(Schema.Array(Schema.String)),
      items: Schema.optional(Ces_Schema),
      minimum: Schema.optional(Schema.Number),
      default: Schema.optional(Schema.Unknown),
      ref: Schema.optional(Schema.String),
      minItems: Schema.optional(Schema.String),
      nullable: Schema.optional(Schema.Boolean),
      description: Schema.optional(Schema.String),
      prefixItems: Schema.optional(Schema.Array(Ces_Schema)),
      anyOf: Schema.optional(Schema.Array(Ces_Schema)),
      title: Schema.optional(Schema.String),
      enum: Schema.optional(Schema.Array(Schema.String)),
      additionalProperties: Schema.optional(Ces_Schema),
      type: Schema.optional(Schema.String),
      maxItems: Schema.optional(Schema.String),
      defs: Schema.optional(Schema.Record(Schema.String, Ces_Schema)),
      maximum: Schema.optional(Schema.Number),
    }),
  ).annotate({ identifier: "Ces_Schema" }) as any as Schema.Codec<Ces_Schema>;

export interface McpTool {
  /** Optional. Service Directory configuration for VPC-SC, used to resolve service names within a perimeter. */
  serviceDirectoryConfig?: ServiceDirectoryConfig;
  /** Output only. The dynamic availability state of the tool on the external server. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | "STALE" | (string & {});
  /** Optional. The TLS configuration. Includes the custom server certificates that the client should trust. */
  tlsConfig?: TlsConfig;
  /** Required. The name of the MCP tool. */
  name?: string;
  /** Optional. The name override of the MCP tool. This is populated if the name was overridden by a Toolset override. */
  nameOverride?: string;
  /** Optional. Authentication information required to execute the tool against the MCP server. For bearer token authentication, the token applies only to tool execution, not to listing tools. This requires that tools can be listed without authentication. */
  apiAuthentication?: ApiAuthentication;
  /** Required. The server address of the MCP server, e.g., "https://example.com/mcp/". If the server is built with the MCP SDK, the url should be suffixed with "/mcp/". Only Streamable HTTP transport based servers are supported. This is the same as the server_address in the McpToolset. See https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#streamable-http for more details. */
  serverAddress?: string;
  /** Optional. The description of the MCP tool. */
  description?: string;
  /** Optional. The schema of the output arguments of the MCP tool. */
  outputSchema?: Ces_Schema;
  /** Optional. The custom headers to send in the request to the MCP server. The values must be in the format `$context.variables.` and can be set in the session variables. See https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/tool/open-api#openapi-injection for more details. */
  customHeaders?: Record<string, string>;
  /** Optional. The schema of the input arguments of the MCP tool. */
  inputSchema?: Ces_Schema;
}

export const McpTool: Schema.Codec<McpTool> =
  /*@__PURE__*/ Schema.Struct({
    serviceDirectoryConfig: Schema.optional(ServiceDirectoryConfig),
    state: Schema.optional(Schema.String),
    tlsConfig: Schema.optional(TlsConfig),
    name: Schema.optional(Schema.String),
    nameOverride: Schema.optional(Schema.String),
    apiAuthentication: Schema.optional(ApiAuthentication),
    serverAddress: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    outputSchema: Schema.optional(Ces_Schema),
    customHeaders: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    inputSchema: Schema.optional(Ces_Schema),
  }).annotate({ identifier: "McpTool" });

export interface AgentInterface {
  /** Required. The protocol binding supported at this URL. This is an open form string, to be easily extended for other protocol bindings. The core ones officially supported are `JSONRPC`, `GRPC` and `HTTP+JSON`. */
  protocolBinding?: string;
  /** Tenant ID to be used in the request when calling the agent. */
  tenant?: string;
  /** Required. The version of the A2A protocol this interface exposes. Use the latest supported minor version per major version. Examples: "0.3", "1.0" */
  protocolVersion?: string;
  /** Required. The URL where this interface is available. Must be a valid absolute HTTPS URL in production. Example: "https://api.example.com/a2a/v1", "https://grpc.example.com/a2a" */
  url?: string;
}

export const AgentInterface: Schema.Codec<AgentInterface> =
  /*@__PURE__*/ Schema.Struct({
    protocolBinding: Schema.optional(Schema.String),
    tenant: Schema.optional(Schema.String),
    protocolVersion: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentInterface" });

export interface AgentSkill {
  /** The set of supported input media types for this skill, overriding the agent's defaults. */
  inputModes?: ReadonlyArray<string>;
  /** Required. A unique identifier for the agent's skill. */
  id?: string;
  /** Required. A human-readable name for the skill. */
  name?: string;
  /** Required. A detailed description of the skill. */
  description?: string;
  /** Required. A set of keywords describing the skill's capabilities. */
  tags?: ReadonlyArray<string>;
  /** Example prompts or scenarios that this skill can handle. */
  examples?: ReadonlyArray<string>;
  /** The set of supported output media types for this skill, overriding the agent's defaults. */
  outputModes?: ReadonlyArray<string>;
}

export const AgentSkill: Schema.Codec<AgentSkill> =
  /*@__PURE__*/ Schema.Struct({
    inputModes: Schema.optional(Schema.Array(Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.String)),
    examples: Schema.optional(Schema.Array(Schema.String)),
    outputModes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AgentSkill" });

export interface AgentCard {
  /** Required. Ordered list of supported interfaces. The first entry is preferred. */
  supportedInterfaces?: ReadonlyArray<AgentInterface>;
  /** Required. A human-readable name for the agent. */
  name?: string;
  /** Required. A description of the agent's domain of action/solution space. */
  description?: string;
  /** Required. Skills represent a unit of ability an agent can perform. This may somewhat abstract but represents a more focused set of actions that the agent is highly likely to succeed at. */
  skills?: ReadonlyArray<AgentSkill>;
  /** Required. The version of the agent. */
  version?: string;
}

export const AgentCard: Schema.Codec<AgentCard> =
  /*@__PURE__*/ Schema.Struct({
    supportedInterfaces: Schema.optional(Schema.Array(AgentInterface)),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    skills: Schema.optional(Schema.Array(AgentSkill)),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentCard" });

export interface RemoteAgentTool {
  /** Required. The name of the tool. */
  name?: string;
  /** Required. The description of the tool. */
  description?: string;
  /** Required. The agent card of the remote agent that this tool invokes. */
  agentCard?: AgentCard;
}

export const RemoteAgentTool: Schema.Codec<RemoteAgentTool> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    agentCard: Schema.optional(AgentCard),
  }).annotate({ identifier: "RemoteAgentTool" });

export interface WidgetToolTextResponseConfig {
  /** Optional. The static text response to return when type is STATIC. */
  staticText?: string;
  /** Optional. The strategy for providing the text response. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "NONE"
    | "LLM_GENERATED"
    | "STATIC"
    | (string & {});
  /** Optional. Instruction for the LLM on how to generate the text response. Used as the description for the text response parameter if type is LLM_GENERATED. */
  textResponseInstruction?: string;
}

export const WidgetToolTextResponseConfig: Schema.Codec<WidgetToolTextResponseConfig> =
  /*@__PURE__*/ Schema.Struct({
    staticText: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    textResponseInstruction: Schema.optional(Schema.String),
  }).annotate({ identifier: "WidgetToolTextResponseConfig" });

export interface WidgetTool {
  /** Optional. The input parameters of the widget tool. */
  parameters?: Ces_Schema;
  /** Optional. Configuration for always-included text responses. */
  textResponseConfig?: WidgetToolTextResponseConfig;
  /** Optional. The mapping that defines how data from a source tool is mapped to the widget's input parameters. */
  dataMapping?: WidgetToolDataMapping;
  /** Required. The display name of the widget tool. */
  name?: string;
  /** Optional. The description of the widget tool. */
  description?: string;
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
  /** Optional. Configuration for rendering the widget. */
  uiConfig?: Record<string, unknown>;
}

export const WidgetTool: Schema.Codec<WidgetTool> =
  /*@__PURE__*/ Schema.Struct({
    parameters: Schema.optional(Ces_Schema),
    textResponseConfig: Schema.optional(WidgetToolTextResponseConfig),
    dataMapping: Schema.optional(WidgetToolDataMapping),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    widgetType: Schema.optional(Schema.String),
    uiConfig: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "WidgetTool" });

export interface SystemTool {
  /** Required. The name of the system tool. */
  name?: string;
  /** Output only. The description of the system tool. */
  description?: string;
}

export const SystemTool: Schema.Codec<SystemTool> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "SystemTool" });

export interface OpenApiTool {
  /** Optional. Service Directory configuration. */
  serviceDirectoryConfig?: ServiceDirectoryConfig;
  /** Optional. If true, the agent will ignore unknown fields in the API response. */
  ignoreUnknownFields?: boolean;
  /** Optional. The TLS configuration. Includes the custom server certificates that the client will trust. */
  tlsConfig?: TlsConfig;
  /** Optional. The server URL of the Open API schema. This field is only set in tools in the environment dependencies during the export process if the schema contains a server url. During the import process, if this url is present in the environment dependencies and the schema has the $env_var placeholder, it will replace the placeholder in the schema. */
  url?: string;
  /** Optional. The name of the tool. If not provided, the name of the tool will be derived from the OpenAPI schema, from `operation.operationId`. */
  name?: string;
  /** Optional. The description of the tool. If not provided, the description of the tool will be derived from the OpenAPI schema, from `operation.description` or `operation.summary`. */
  description?: string;
  /** Optional. Authentication information required by the API. */
  apiAuthentication?: ApiAuthentication;
  /** Required. The OpenAPI schema in JSON or YAML format. */
  openApiSchema?: string;
}

export const OpenApiTool: Schema.Codec<OpenApiTool> =
  /*@__PURE__*/ Schema.Struct({
    serviceDirectoryConfig: Schema.optional(ServiceDirectoryConfig),
    ignoreUnknownFields: Schema.optional(Schema.Boolean),
    tlsConfig: Schema.optional(TlsConfig),
    url: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    apiAuthentication: Schema.optional(ApiAuthentication),
    openApiSchema: Schema.optional(Schema.String),
  }).annotate({ identifier: "OpenApiTool" });

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

export const ActionEntityOperation: Schema.Codec<ActionEntityOperation> =
  /*@__PURE__*/ Schema.Struct({
    entityId: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActionEntityOperation" });

export interface Action {
  /** Optional. Entity fields to use as inputs for the operation. If no fields are specified, all fields of the Entity will be used. */
  inputFields?: ReadonlyArray<string>;
  /** Optional. Entity fields to return from the operation. If no fields are specified, all fields of the Entity will be returned. */
  outputFields?: ReadonlyArray<string>;
  /** ID of a Connection action for the tool to use. */
  connectionActionId?: string;
  /** Entity operation configuration for the tool to use. */
  entityOperation?: ActionEntityOperation;
}

export const Action: Schema.Codec<Action> =
  /*@__PURE__*/ Schema.Struct({
    inputFields: Schema.optional(Schema.Array(Schema.String)),
    outputFields: Schema.optional(Schema.Array(Schema.String)),
    connectionActionId: Schema.optional(Schema.String),
    entityOperation: Schema.optional(ActionEntityOperation),
  }).annotate({ identifier: "Action" });

export interface EndUserAuthConfigOauth2JwtBearerConfig {
  /** Required. Subject parameter name to pass through. Must be in the format `$context.variables.`. */
  subject?: string;
  /** Required. Client parameter name to pass through. Must be in the format `$context.variables.`. */
  clientKey?: string;
  /** Required. Issuer parameter name to pass through. Must be in the format `$context.variables.`. */
  issuer?: string;
}

export const EndUserAuthConfigOauth2JwtBearerConfig: Schema.Codec<EndUserAuthConfigOauth2JwtBearerConfig> =
  /*@__PURE__*/ Schema.Struct({
    subject: Schema.optional(Schema.String),
    clientKey: Schema.optional(Schema.String),
    issuer: Schema.optional(Schema.String),
  }).annotate({ identifier: "EndUserAuthConfigOauth2JwtBearerConfig" });

export interface EndUserAuthConfigOauth2AuthCodeConfig {
  /** Required. Oauth token parameter name to pass through. Must be in the format `$context.variables.`. */
  oauthToken?: string;
}

export const EndUserAuthConfigOauth2AuthCodeConfig: Schema.Codec<EndUserAuthConfigOauth2AuthCodeConfig> =
  /*@__PURE__*/ Schema.Struct({
    oauthToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "EndUserAuthConfigOauth2AuthCodeConfig" });

export interface EndUserAuthConfig {
  /** JWT Profile Oauth 2.0 Authorization Grant authentication. */
  oauth2JwtBearerConfig?: EndUserAuthConfigOauth2JwtBearerConfig;
  /** Oauth 2.0 Authorization Code authentication. */
  oauth2AuthCodeConfig?: EndUserAuthConfigOauth2AuthCodeConfig;
}

export const EndUserAuthConfig: Schema.Codec<EndUserAuthConfig> =
  /*@__PURE__*/ Schema.Struct({
    oauth2JwtBearerConfig: Schema.optional(
      EndUserAuthConfigOauth2JwtBearerConfig,
    ),
    oauth2AuthCodeConfig: Schema.optional(
      EndUserAuthConfigOauth2AuthCodeConfig,
    ),
  }).annotate({ identifier: "EndUserAuthConfig" });

export interface ConnectorTool {
  /** Optional. The name of the tool that can be used by the Agent to decide whether to call this ConnectorTool. */
  name?: string;
  /** Optional. The description of the tool that can be used by the Agent to decide whether to call this ConnectorTool. */
  description?: string;
  /** Required. The full resource name of the referenced Integration Connectors Connection. Format: `projects/{project}/locations/{location}/connections/{connection}` */
  connection?: string;
  /** Required. Action for the tool to use. */
  action?: Action;
  /** Optional. Configures how authentication is handled in Integration Connectors. By default, an admin authentication is passed in the Integration Connectors API requests. You can override it with a different end-user authentication config. **Note**: The Connection must have authentication override enabled in order to specify an EUC configuration here - otherwise, the ConnectorTool creation will fail. See https://cloud.google.com/application-integration/docs/configure-connectors-task#configure-authentication-override for details. */
  authConfig?: EndUserAuthConfig;
}

export const ConnectorTool: Schema.Codec<ConnectorTool> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    connection: Schema.optional(Schema.String),
    action: Schema.optional(Action),
    authConfig: Schema.optional(EndUserAuthConfig),
  }).annotate({ identifier: "ConnectorTool" });

export interface DataStoreConnectorConfig {
  /** Display name of the collection the data store belongs to. */
  collectionDisplayName?: string;
  /** The name of the data source. Example: `salesforce`, `jira`, `confluence`, `bigquery`. */
  dataSource?: string;
  /** Resource name of the collection the data store belongs to. */
  collection?: string;
}

export const DataStoreConnectorConfig: Schema.Codec<DataStoreConnectorConfig> =
  /*@__PURE__*/ Schema.Struct({
    collectionDisplayName: Schema.optional(Schema.String),
    dataSource: Schema.optional(Schema.String),
    collection: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataStoreConnectorConfig" });

export interface DataStore {
  /** Required. Full resource name of the DataStore. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore}` */
  name?: string;
  /** Output only. The type of the data store. This field is readonly and populated by the server. */
  type?:
    | "DATA_STORE_TYPE_UNSPECIFIED"
    | "PUBLIC_WEB"
    | "UNSTRUCTURED"
    | "FAQ"
    | "CONNECTOR"
    | (string & {});
  /** Output only. The document processing mode for the data store connection. Only set for PUBLIC_WEB and UNSTRUCTURED data stores. */
  documentProcessingMode?:
    | "DOCUMENT_PROCESSING_MODE_UNSPECIFIED"
    | "DOCUMENTS"
    | "CHUNKS"
    | (string & {});
  /** Output only. The display name of the data store. */
  displayName?: string;
  /** Output only. The connector config for the data store connection. */
  connectorConfig?: DataStoreConnectorConfig;
  /** Output only. Timestamp when the data store was created. */
  createTime?: string;
}

export const DataStore: Schema.Codec<DataStore> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    documentProcessingMode: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    connectorConfig: Schema.optional(DataStoreConnectorConfig),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataStore" });

export interface DataStoreToolDataStoreSource {
  /** Optional. Filter specification for the DataStore. See: https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata */
  filter?: string;
  /** Optional. The data store. */
  dataStore?: DataStore;
}

export const DataStoreToolDataStoreSource: Schema.Codec<DataStoreToolDataStoreSource> =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String),
    dataStore: Schema.optional(DataStore),
  }).annotate({ identifier: "DataStoreToolDataStoreSource" });

export interface DataStoreToolEngineSource {
  /** Required. Full resource name of the Engine. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}` */
  engine?: string;
  /** Optional. Use to target specific DataStores within the Engine. If empty, the search applies to all DataStores associated with the Engine. */
  dataStoreSources?: ReadonlyArray<DataStoreToolDataStoreSource>;
  /** Optional. A filter applied to the search across the Engine. Not relevant and not used if 'data_store_sources' is provided. See: https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata */
  filter?: string;
}

export const DataStoreToolEngineSource: Schema.Codec<DataStoreToolEngineSource> =
  /*@__PURE__*/ Schema.Struct({
    engine: Schema.optional(Schema.String),
    dataStoreSources: Schema.optional(
      Schema.Array(DataStoreToolDataStoreSource),
    ),
    filter: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataStoreToolEngineSource" });

export interface ModelSettings {
  /** Optional. The LLM model that the agent should use. If not set, the agent will inherit the model from its parent agent. */
  model?: string;
  /** Optional. If set, this temperature will be used for the LLM model. Temperature controls the randomness of the model's responses. Lower temperatures produce responses that are more predictable. Higher temperatures produce responses that are more creative. */
  temperature?: number;
}

export const ModelSettings: Schema.Codec<ModelSettings> =
  /*@__PURE__*/ Schema.Struct({
    model: Schema.optional(Schema.String),
    temperature: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ModelSettings" });

export interface DataStoreToolRewriterConfig {
  /** Required. Configurations for the LLM model. */
  modelSettings?: ModelSettings;
  /** Optional. The prompt definition. If not set, default prompt will be used. */
  prompt?: string;
  /** Optional. Whether the rewriter is disabled. */
  disabled?: boolean;
}

export const DataStoreToolRewriterConfig: Schema.Codec<DataStoreToolRewriterConfig> =
  /*@__PURE__*/ Schema.Struct({
    modelSettings: Schema.optional(ModelSettings),
    prompt: Schema.optional(Schema.String),
    disabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DataStoreToolRewriterConfig" });

export interface DataStoreToolSummarizationConfig {
  /** Optional. Configurations for the LLM model. */
  modelSettings?: ModelSettings;
  /** Optional. The prompt definition. If not set, default prompt will be used. */
  prompt?: string;
  /** Optional. Whether summarization is disabled. */
  disabled?: boolean;
}

export const DataStoreToolSummarizationConfig: Schema.Codec<DataStoreToolSummarizationConfig> =
  /*@__PURE__*/ Schema.Struct({
    modelSettings: Schema.optional(ModelSettings),
    prompt: Schema.optional(Schema.String),
    disabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DataStoreToolSummarizationConfig" });

export interface DataStoreToolGroundingConfig {
  /** Optional. The groundedness threshold of the answer based on the retrieved sources. The value has a configurable range of [1, 5]. The level is used to threshold the groundedness of the answer, meaning that all responses with a groundedness score below the threshold will fall back to returning relevant snippets only. For example, a level of 3 means that the groundedness score must be 3 or higher for the response to be returned. */
  groundingLevel?: number;
  /** Optional. Whether grounding is disabled. */
  disabled?: boolean;
}

export const DataStoreToolGroundingConfig: Schema.Codec<DataStoreToolGroundingConfig> =
  /*@__PURE__*/ Schema.Struct({
    groundingLevel: Schema.optional(Schema.Number),
    disabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DataStoreToolGroundingConfig" });

export interface DataStoreToolModalityConfig {
  /** Required. The modality type. */
  modalityType?: "MODALITY_TYPE_UNSPECIFIED" | "TEXT" | "AUDIO" | (string & {});
  /** Optional. The rewriter config. */
  rewriterConfig?: DataStoreToolRewriterConfig;
  /** Optional. The summarization config. */
  summarizationConfig?: DataStoreToolSummarizationConfig;
  /** Optional. The grounding configuration. */
  groundingConfig?: DataStoreToolGroundingConfig;
}

export const DataStoreToolModalityConfig: Schema.Codec<DataStoreToolModalityConfig> =
  /*@__PURE__*/ Schema.Struct({
    modalityType: Schema.optional(Schema.String),
    rewriterConfig: Schema.optional(DataStoreToolRewriterConfig),
    summarizationConfig: Schema.optional(DataStoreToolSummarizationConfig),
    groundingConfig: Schema.optional(DataStoreToolGroundingConfig),
  }).annotate({ identifier: "DataStoreToolModalityConfig" });

export interface DataStoreToolBoostSpecConditionBoostSpecBoostControlSpecControlPoint {
  /** Optional. The value between -1 to 1 by which to boost the score if the attribute_value evaluates to the value specified above. */
  boostAmount?: number;
  /** Optional. Can be one of: 1. The numerical field value. 2. The duration spec for freshness: The value must be formatted as an XSD `dayTimeDuration` value (a restricted subset of an ISO 8601 duration value). The pattern for this is: `nDnM]`. */
  attributeValue?: string;
}

export const DataStoreToolBoostSpecConditionBoostSpecBoostControlSpecControlPoint: Schema.Codec<DataStoreToolBoostSpecConditionBoostSpecBoostControlSpecControlPoint> =
  /*@__PURE__*/ Schema.Struct({
    boostAmount: Schema.optional(Schema.Number),
    attributeValue: Schema.optional(Schema.String),
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
  /** Optional. The control points used to define the curve. The monotonic function (defined through the interpolation_type above) passes through the control points listed here. */
  controlPoints?: ReadonlyArray<DataStoreToolBoostSpecConditionBoostSpecBoostControlSpecControlPoint>;
  /** Optional. The name of the field whose value will be used to determine the boost amount. */
  fieldName?: string;
  /** Optional. The attribute type to be used to determine the boost amount. The attribute value can be derived from the field value of the specified field_name. In the case of numerical it is straightforward i.e. attribute_value = numerical_field_value. In the case of freshness however, attribute_value = (time.now() - datetime_field_value). */
  attributeType?:
    | "ATTRIBUTE_TYPE_UNSPECIFIED"
    | "NUMERICAL"
    | "FRESHNESS"
    | (string & {});
}

export const DataStoreToolBoostSpecConditionBoostSpecBoostControlSpec: Schema.Codec<DataStoreToolBoostSpecConditionBoostSpecBoostControlSpec> =
  /*@__PURE__*/ Schema.Struct({
    interpolationType: Schema.optional(Schema.String),
    controlPoints: Schema.optional(
      Schema.Array(
        DataStoreToolBoostSpecConditionBoostSpecBoostControlSpecControlPoint,
      ),
    ),
    fieldName: Schema.optional(Schema.String),
    attributeType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "DataStoreToolBoostSpecConditionBoostSpecBoostControlSpec",
  });

export interface DataStoreToolBoostSpecConditionBoostSpec {
  /** Optional. Strength of the boost, which should be in [-1, 1]. Negative boost means demotion. Default is 0.0. Setting to 1.0 gives the suggestions a big promotion. However, it does not necessarily mean that the top result will be a boosted suggestion. Setting to -1.0 gives the suggestions a big demotion. However, other suggestions that are relevant might still be shown. Setting to 0.0 means no boost applied. The boosting condition is ignored. */
  boost?: number;
  /** Optional. Complex specification for custom ranking based on customer defined attribute value. */
  boostControlSpec?: DataStoreToolBoostSpecConditionBoostSpecBoostControlSpec;
  /** Required. An expression which specifies a boost condition. The syntax is the same as filter expression syntax. Currently, the only supported condition is a list of BCP-47 lang codes. Example: To boost suggestions in languages en or fr: (lang_code: ANY("en", "fr")) */
  condition?: string;
}

export const DataStoreToolBoostSpecConditionBoostSpec: Schema.Codec<DataStoreToolBoostSpecConditionBoostSpec> =
  /*@__PURE__*/ Schema.Struct({
    boost: Schema.optional(Schema.Number),
    boostControlSpec: Schema.optional(
      DataStoreToolBoostSpecConditionBoostSpecBoostControlSpec,
    ),
    condition: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataStoreToolBoostSpecConditionBoostSpec" });

export interface DataStoreToolBoostSpec {
  /** Required. A list of boosting specifications. */
  conditionBoostSpecs?: ReadonlyArray<DataStoreToolBoostSpecConditionBoostSpec>;
}

export const DataStoreToolBoostSpec: Schema.Codec<DataStoreToolBoostSpec> =
  /*@__PURE__*/ Schema.Struct({
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

export const DataStoreToolBoostSpecs: Schema.Codec<DataStoreToolBoostSpecs> =
  /*@__PURE__*/ Schema.Struct({
    dataStores: Schema.optional(Schema.Array(Schema.String)),
    spec: Schema.optional(Schema.Array(DataStoreToolBoostSpec)),
  }).annotate({ identifier: "DataStoreToolBoostSpecs" });

export interface DataStoreTool {
  /** Optional. Search within an Engine (potentially across multiple DataStores). */
  engineSource?: DataStoreToolEngineSource;
  /** Required. The data store tool name. */
  name?: string;
  /** Optional. The tool description. */
  description?: string;
  /** Optional. Search within a single specific DataStore. */
  dataStoreSource?: DataStoreToolDataStoreSource;
  /** Optional. The modality configs for the data store. */
  modalityConfigs?: ReadonlyArray<DataStoreToolModalityConfig>;
  /** Optional. Boost specification to boost certain documents. */
  boostSpecs?: ReadonlyArray<DataStoreToolBoostSpecs>;
  /** Optional. The filter parameter behavior. */
  filterParameterBehavior?:
    | "FILTER_PARAMETER_BEHAVIOR_UNSPECIFIED"
    | "ALWAYS_INCLUDE"
    | "NEVER_INCLUDE"
    | (string & {});
}

export const DataStoreTool: Schema.Codec<DataStoreTool> =
  /*@__PURE__*/ Schema.Struct({
    engineSource: Schema.optional(DataStoreToolEngineSource),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    dataStoreSource: Schema.optional(DataStoreToolDataStoreSource),
    modalityConfigs: Schema.optional(Schema.Array(DataStoreToolModalityConfig)),
    boostSpecs: Schema.optional(Schema.Array(DataStoreToolBoostSpecs)),
    filterParameterBehavior: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataStoreTool" });

export interface AgentTool {
  /** Required. The name of the agent tool. */
  name?: string;
  /** Optional. Description of the tool's purpose. */
  description?: string;
  /** Optional. The resource name of the agent that is the entry point of the tool. Format: `projects/{project}/locations/{location}/agents/{agent}` */
  agent?: string;
  /** Optional. Deprecated: Use `agent` instead. The resource name of the root agent that is the entry point of the tool. Format: `projects/{project}/locations/{location}/agents/{agent}` */
  rootAgent?: string;
}

export const AgentTool: Schema.Codec<AgentTool> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    agent: Schema.optional(Schema.String),
    rootAgent: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentTool" });

export interface ClientFunction {
  /** Required. The function name. */
  name?: string;
  /** Optional. The function description. */
  description?: string;
  /** Optional. The schema of the function parameters. */
  parameters?: Ces_Schema;
  /** Optional. The schema of the function response. */
  response?: Ces_Schema;
}

export const ClientFunction: Schema.Codec<ClientFunction> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    parameters: Schema.optional(Ces_Schema),
    response: Schema.optional(Ces_Schema),
  }).annotate({ identifier: "ClientFunction" });

export interface Tool {
  /** Optional. The file search tool. */
  fileSearchTool?: FileSearchTool;
  /** Optional. Configuration for tool behavior in fake mode. */
  toolFakeConfig?: ToolFakeConfig;
  /** Optional. The python function tool. */
  pythonFunction?: PythonFunction;
  /** Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes. */
  etag?: string;
  /** Optional. The google search tool. */
  googleSearchTool?: GoogleSearchTool;
  /** Optional. The MCP tool. An MCP tool cannot be created or updated directly and is managed by the MCP toolset. */
  mcpTool?: McpTool;
  /** Optional. The remote agent tool. */
  remoteAgentTool?: RemoteAgentTool;
  /** Output only. If the tool is generated by the LLM assistant, this field contains a descriptive summary of the generation. */
  generatedSummary?: string;
  /** Optional. The widget tool. */
  widgetTool?: WidgetTool;
  /** Output only. The display name of the tool, derived based on the tool's type. For example, display name of a ClientFunction is derived from its `name` property. */
  displayName?: string;
  /** Optional. The system tool. */
  systemTool?: SystemTool;
  /** Optional. The execution type of the tool. */
  executionType?:
    | "EXECUTION_TYPE_UNSPECIFIED"
    | "SYNCHRONOUS"
    | "ASYNCHRONOUS"
    | (string & {});
  /** Optional. The open API tool. */
  openApiTool?: OpenApiTool;
  /** Optional. The Integration Connector tool. */
  connectorTool?: ConnectorTool;
  /** Optional. The data store tool. */
  dataStoreTool?: DataStoreTool;
  /** Optional. The timeout for the tool execution. If not set, the default timeout is 30 seconds for `SYNCHRONOUS` tools and 60 seconds for `ASYNCHRONOUS` tools. */
  timeout?: string;
  /** Output only. Timestamp when the tool was created. */
  createTime?: string;
  /** Output only. Timestamp when the tool was last updated. */
  updateTime?: string;
  /** Optional. The agent tool. */
  agentTool?: AgentTool;
  /** Optional. The client function. */
  clientFunction?: ClientFunction;
  /** Identifier. The resource name of the tool. Format: * `projects/{project}/locations/{location}/apps/{app}/tools/{tool}` for standalone tools. * `projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}/tools/{tool}` for tools retrieved from a toolset. These tools are dynamic and output-only; they cannot be referenced directly where a tool is expected. */
  name?: string;
}

export const Tool: Schema.Codec<Tool> =
  /*@__PURE__*/ Schema.Struct({
    fileSearchTool: Schema.optional(FileSearchTool),
    toolFakeConfig: Schema.optional(ToolFakeConfig),
    pythonFunction: Schema.optional(PythonFunction),
    etag: Schema.optional(Schema.String),
    googleSearchTool: Schema.optional(GoogleSearchTool),
    mcpTool: Schema.optional(McpTool),
    remoteAgentTool: Schema.optional(RemoteAgentTool),
    generatedSummary: Schema.optional(Schema.String),
    widgetTool: Schema.optional(WidgetTool),
    displayName: Schema.optional(Schema.String),
    systemTool: Schema.optional(SystemTool),
    executionType: Schema.optional(Schema.String),
    openApiTool: Schema.optional(OpenApiTool),
    connectorTool: Schema.optional(ConnectorTool),
    dataStoreTool: Schema.optional(DataStoreTool),
    timeout: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    agentTool: Schema.optional(AgentTool),
    clientFunction: Schema.optional(ClientFunction),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Tool" });

export interface RetrieveToolsResponse {
  /** The list of tools that are included in the specified toolset. */
  tools?: ReadonlyArray<Tool>;
}

export const RetrieveToolsResponse: Schema.Codec<RetrieveToolsResponse> =
  /*@__PURE__*/ Schema.Struct({
    tools: Schema.optional(Schema.Array(Tool)),
  }).annotate({ identifier: "RetrieveToolsResponse" });

export interface LfA2aV1Part {
  /** The `media_type` (MIME type) of the part content (e.g., "text/plain", "application/json", "image/png"). This field is available for all part types. */
  mediaType?: string;
  /** Optional. metadata associated with this part. */
  metadata?: Record<string, unknown>;
  /** A `url` pointing to the file's content. */
  url?: string;
  /** Arbitrary structured `data` as a JSON value (object, array, string, number, boolean, or null). */
  data?: unknown;
  /** An optional `filename` for the file (e.g., "document.pdf"). */
  filename?: string;
  /** The string content of the `text` part. */
  text?: string;
  /** The `raw` byte content of a file. In JSON serialization, this is encoded as a base64 string. */
  raw?: string;
}

export const LfA2aV1Part: Schema.Codec<LfA2aV1Part> =
  /*@__PURE__*/ Schema.Struct({
    mediaType: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    url: Schema.optional(Schema.String),
    data: Schema.optional(Schema.Unknown),
    filename: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
    raw: Schema.optional(Schema.String),
  }).annotate({ identifier: "LfA2aV1Part" });

export interface LfA2aV1AuthenticationInfo {
  /** Required. HTTP Authentication Scheme from the [IANA registry](https://www.iana.org/assignments/http-authschemes/). Examples: `Bearer`, `Basic`, `Digest`. Scheme names are case-insensitive per [RFC 9110 Section 11.1](https://www.rfc-editor.org/rfc/rfc9110#section-11.1). */
  scheme?: string;
  /** Push Notification credentials. Format depends on the scheme (e.g., token for Bearer). */
  credentials?: string;
}

export const LfA2aV1AuthenticationInfo: Schema.Codec<LfA2aV1AuthenticationInfo> =
  /*@__PURE__*/ Schema.Struct({
    scheme: Schema.optional(Schema.String),
    credentials: Schema.optional(Schema.String),
  }).annotate({ identifier: "LfA2aV1AuthenticationInfo" });

export interface TriggerActionTransferAgent {
  /** Required. The name of the agent to transfer the conversation to. The agent must be in the same app as the current agent. Format: `projects/{project}/locations/{location}/apps/{app}/agents/{agent}` */
  agent?: string;
}

export const TriggerActionTransferAgent: Schema.Codec<TriggerActionTransferAgent> =
  /*@__PURE__*/ Schema.Struct({
    agent: Schema.optional(Schema.String),
  }).annotate({ identifier: "TriggerActionTransferAgent" });

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
  /** Optional. Volume gain (in dB) of the normal native volume supported by ambient noise, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. We strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that. */
  volumeGainDb?: number;
  /** Optional. Name of the prebuilt ambient sound. Valid values are: - "coffee_shop" - "keyboard" - "keypad" - "hum" - "office_1" - "office_2" - "office_3" - "room_1" - "room_2" - "room_3" - "room_4" - "room_5" - "air_conditioner" */
  prebuiltAmbientSound?: string;
}

export const AmbientSoundConfig: Schema.Codec<AmbientSoundConfig> =
  /*@__PURE__*/ Schema.Struct({
    prebuiltAmbientNoise: Schema.optional(Schema.String),
    gcsUri: Schema.optional(Schema.String),
    volumeGainDb: Schema.optional(Schema.Number),
    prebuiltAmbientSound: Schema.optional(Schema.String),
  }).annotate({ identifier: "AmbientSoundConfig" });

export interface TimeZoneSettings {
  /** Optional. The time zone of the app from the [time zone database](https://www.iana.org/time-zones), e.g., America/Los_Angeles, Europe/Paris. */
  timeZone?: string;
}

export const TimeZoneSettings: Schema.Codec<TimeZoneSettings> =
  /*@__PURE__*/ Schema.Struct({
    timeZone: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimeZoneSettings" });

export interface ChannelProfileWebWidgetConfigSecuritySettings {
  /** Optional. Indicates whether public access to the web widget is enabled. If `true`, the web widget will be publicly accessible. If `false`, the web widget must be integrated with your own authentication and authorization system to return valid credentials for accessing the CES agent. */
  enablePublicAccess?: boolean;
  /** Optional. Indicates whether reCAPTCHA verification for the web widget is enabled. */
  enableRecaptcha?: boolean;
  /** Optional. Indicates whether origin check for the web widget is enabled. If `true`, the web widget will check the origin of the website that loads the web widget and only allow it to be loaded in the same origin or any of the allowed origins. */
  enableOriginCheck?: boolean;
  /** Optional. The origins that are allowed to host the web widget. An origin is defined by RFC 6454. If empty, all origins are allowed. A maximum of 100 origins is allowed. Example: "https://example.com" */
  allowedOrigins?: ReadonlyArray<string>;
}

export const ChannelProfileWebWidgetConfigSecuritySettings: Schema.Codec<ChannelProfileWebWidgetConfigSecuritySettings> =
  /*@__PURE__*/ Schema.Struct({
    enablePublicAccess: Schema.optional(Schema.Boolean),
    enableRecaptcha: Schema.optional(Schema.Boolean),
    enableOriginCheck: Schema.optional(Schema.Boolean),
    allowedOrigins: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ChannelProfileWebWidgetConfigSecuritySettings" });

export interface ChannelProfileWebWidgetConfig {
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
  /** Optional. The theme of the web widget. */
  theme?: "THEME_UNSPECIFIED" | "LIGHT" | "DARK" | (string & {});
  /** Optional. The title of the web widget. */
  webWidgetTitle?: string;
}

export const ChannelProfileWebWidgetConfig: Schema.Codec<ChannelProfileWebWidgetConfig> =
  /*@__PURE__*/ Schema.Struct({
    securitySettings: Schema.optional(
      ChannelProfileWebWidgetConfigSecuritySettings,
    ),
    modality: Schema.optional(Schema.String),
    theme: Schema.optional(Schema.String),
    webWidgetTitle: Schema.optional(Schema.String),
  }).annotate({ identifier: "ChannelProfileWebWidgetConfig" });

export interface ChannelProfilePersonaProperty {
  /** Optional. The persona of the channel. */
  persona?: "UNKNOWN" | "CONCISE" | "CHATTY" | (string & {});
}

export const ChannelProfilePersonaProperty: Schema.Codec<ChannelProfilePersonaProperty> =
  /*@__PURE__*/ Schema.Struct({
    persona: Schema.optional(Schema.String),
  }).annotate({ identifier: "ChannelProfilePersonaProperty" });

export interface ChannelProfile {
  /** Optional. The configuration for the web widget. */
  webWidgetConfig?: ChannelProfileWebWidgetConfig;
  /** Optional. The noise suppression level of the channel profile. Available values are "low", "moderate", "high", "very_high". */
  noiseSuppressionLevel?: string;
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
  /** Optional. Whether to disable user barge-in control in the conversation. - **true**: User interruptions are disabled while the agent is speaking. - **false**: The agent retains automatic control over when the user can interrupt. */
  disableBargeInControl?: boolean;
  /** Optional. The unique identifier of the channel profile. */
  profileId?: string;
  /** Optional. The persona property of the channel profile. */
  personaProperty?: ChannelProfilePersonaProperty;
  /** Optional. Whether to disable DTMF (dual-tone multi-frequency). */
  disableDtmf?: boolean;
}

export const ChannelProfile: Schema.Codec<ChannelProfile> =
  /*@__PURE__*/ Schema.Struct({
    webWidgetConfig: Schema.optional(ChannelProfileWebWidgetConfig),
    noiseSuppressionLevel: Schema.optional(Schema.String),
    channelType: Schema.optional(Schema.String),
    disableBargeInControl: Schema.optional(Schema.Boolean),
    profileId: Schema.optional(Schema.String),
    personaProperty: Schema.optional(ChannelProfilePersonaProperty),
    disableDtmf: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ChannelProfile" });

export interface ExperimentConfigVersionReleaseTrafficAllocation {
  /** Optional. Id of the traffic allocation. Free format string, up to 128 characters. */
  id?: string;
  /** Optional. Traffic percentage of the traffic allocation. Must be between 0 and 100. */
  trafficPercentage?: number;
  /** Optional. App version of the traffic allocation. Format: `projects/{project}/locations/{location}/apps/{app}/versions/{version}` */
  appVersion?: string;
}

export const ExperimentConfigVersionReleaseTrafficAllocation: Schema.Codec<ExperimentConfigVersionReleaseTrafficAllocation> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    trafficPercentage: Schema.optional(Schema.Number),
    appVersion: Schema.optional(Schema.String),
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

export const ExperimentConfigVersionRelease: Schema.Codec<ExperimentConfigVersionRelease> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    trafficAllocations: Schema.optional(
      Schema.Array(ExperimentConfigVersionReleaseTrafficAllocation),
    ),
  }).annotate({ identifier: "ExperimentConfigVersionRelease" });

export interface ExperimentConfig {
  /** Optional. Version release for the experiment. */
  versionRelease?: ExperimentConfigVersionRelease;
}

export const ExperimentConfig: Schema.Codec<ExperimentConfig> =
  /*@__PURE__*/ Schema.Struct({
    versionRelease: Schema.optional(ExperimentConfigVersionRelease),
  }).annotate({ identifier: "ExperimentConfig" });

export interface Deployment {
  /** Output only. Timestamp when this deployment was last updated. */
  updateTime?: string;
  /** Output only. Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes. */
  etag?: string;
  /** Output only. Timestamp when this deployment was created. */
  createTime?: string;
  /** Identifier. The resource name of the deployment. Format: `projects/{project}/locations/{location}/apps/{app}/deployments/{deployment}` */
  name?: string;
  /** Required. The channel profile used in the deployment. */
  channelProfile?: ChannelProfile;
  /** Optional. Experiment configuration for the deployment. */
  experimentConfig?: ExperimentConfig;
  /** Optional. The resource name of the app version to deploy. Format: `projects/{project}/locations/{location}/apps/{app}/versions/{version}` Use `projects/{project}/locations/{location}/apps/{app}/versions/-` to use the draft app. */
  appVersion?: string;
  /** Required. Display name of the deployment. */
  displayName?: string;
}

export const Deployment: Schema.Codec<Deployment> =
  /*@__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    channelProfile: Schema.optional(ChannelProfile),
    experimentConfig: Schema.optional(ExperimentConfig),
    appVersion: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Deployment" });

export interface GuardrailContentFilter {
  /** Optional. List of banned phrases. Applies only to user inputs. */
  bannedContentsInUserInput?: ReadonlyArray<string>;
  /** Required. Match type for the content filter. */
  matchType?:
    | "MATCH_TYPE_UNSPECIFIED"
    | "SIMPLE_STRING_MATCH"
    | "WORD_BOUNDARY_STRING_MATCH"
    | "REGEXP_MATCH"
    | (string & {});
  /** Optional. List of banned phrases. Applies only to agent responses. */
  bannedContentsInAgentResponse?: ReadonlyArray<string>;
  /** Optional. If true, diacritics are ignored during matching. */
  disregardDiacritics?: boolean;
  /** Optional. List of banned phrases. Applies to both user inputs and agent responses. */
  bannedContents?: ReadonlyArray<string>;
}

export const GuardrailContentFilter: Schema.Codec<GuardrailContentFilter> =
  /*@__PURE__*/ Schema.Struct({
    bannedContentsInUserInput: Schema.optional(Schema.Array(Schema.String)),
    matchType: Schema.optional(Schema.String),
    bannedContentsInAgentResponse: Schema.optional(Schema.Array(Schema.String)),
    disregardDiacritics: Schema.optional(Schema.Boolean),
    bannedContents: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GuardrailContentFilter" });

export interface ToolResponse {
  /** Output only. Display name of the tool. */
  displayName?: string;
  /** Optional. The toolset tool that got executed. */
  toolsetTool?: ToolsetTool;
  /** Optional. The name of the tool to execute. Format: `projects/{project}/locations/{location}/apps/{app}/tools/{tool}` */
  tool?: string;
  /** Optional. The matching ID of the tool call the response is for. */
  id?: string;
  /** Required. The tool execution result in JSON object format. Use "output" key to specify tool response and "error" key to specify error details (if any). If "output" and "error" keys are not specified, then whole "response" is treated as tool execution result. */
  response?: Record<string, unknown>;
}

export const ToolResponse: Schema.Codec<ToolResponse> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    toolsetTool: Schema.optional(ToolsetTool),
    tool: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "ToolResponse" });

export interface ToolResponses {
  /** Optional. The list of tool execution results. */
  toolResponses?: ReadonlyArray<ToolResponse>;
}

export const ToolResponses: Schema.Codec<ToolResponses> =
  /*@__PURE__*/ Schema.Struct({
    toolResponses: Schema.optional(Schema.Array(ToolResponse)),
  }).annotate({ identifier: "ToolResponses" });

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

export const OutputAudioConfig: Schema.Codec<OutputAudioConfig> =
  /*@__PURE__*/ Schema.Struct({
    audioEncoding: Schema.optional(Schema.String),
    sampleRateHertz: Schema.optional(Schema.Number),
  }).annotate({ identifier: "OutputAudioConfig" });

export interface Blob {
  /** Required. The IANA standard MIME type of the source data. */
  mimeType?: string;
  /** Required. Raw bytes of the blob. */
  data?: string;
}

export const Blob: Schema.Codec<Blob> =
  /*@__PURE__*/ Schema.Struct({
    mimeType: Schema.optional(Schema.String),
    data: Schema.optional(Schema.String),
  }).annotate({ identifier: "Blob" });

export interface ToolCall {
  /** Optional. The toolset tool to execute. */
  toolsetTool?: ToolsetTool;
  /** Output only. Display name of the tool. */
  displayName?: string;
  /** Optional. The unique identifier of the tool call. If populated, the client should return the execution result with the matching ID in ToolResponse. */
  id?: string;
  /** Optional. The input parameters and values for the tool in JSON object format. */
  args?: Record<string, unknown>;
  /** Optional. The name of the tool to execute. Format: `projects/{project}/locations/{location}/apps/{app}/tools/{tool}` */
  tool?: string;
}

export const ToolCall: Schema.Codec<ToolCall> =
  /*@__PURE__*/ Schema.Struct({
    toolsetTool: Schema.optional(ToolsetTool),
    displayName: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    args: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    tool: Schema.optional(Schema.String),
  }).annotate({ identifier: "ToolCall" });

export interface Image {
  /** Required. The IANA standard MIME type of the source data. Supported image types includes: * image/png * image/jpeg * image/webp */
  mimeType?: string;
  /** Required. Raw bytes of the image. */
  data?: string;
}

export const Image: Schema.Codec<Image> =
  /*@__PURE__*/ Schema.Struct({
    mimeType: Schema.optional(Schema.String),
    data: Schema.optional(Schema.String),
  }).annotate({ identifier: "Image" });

export interface AgentTransfer {
  /** Output only. Display name of the agent. */
  displayName?: string;
  /** Required. The agent to which the conversation is being transferred. The agent will handle the conversation from this point forward. Format: `projects/{project}/locations/{location}/apps/{app}/agents/{agent}` */
  targetAgent?: string;
}

export const AgentTransfer: Schema.Codec<AgentTransfer> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    targetAgent: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentTransfer" });

export interface Chunk {
  /** A struct represents default variables at the start of the conversation, keyed by variable names. */
  defaultVariables?: Record<string, unknown>;
  /** Optional. Transcript associated with the audio. */
  transcript?: string;
  /** Optional. Blob data. */
  blob?: Blob;
  /** Optional. Tool execution response. */
  toolResponse?: ToolResponse;
  /** Optional. Tool execution request. */
  toolCall?: ToolCall;
  /** Optional. Custom payload data. */
  payload?: Record<string, unknown>;
  /** A struct represents variables that were updated in the conversation, keyed by variable names. */
  updatedVariables?: Record<string, unknown>;
  /** Optional. Text data. */
  text?: string;
  /** Optional. Image data. */
  image?: Image;
  /** Optional. Agent transfer event. */
  agentTransfer?: AgentTransfer;
}

export const Chunk: Schema.Codec<Chunk> =
  /*@__PURE__*/ Schema.Struct({
    defaultVariables: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    transcript: Schema.optional(Schema.String),
    blob: Schema.optional(Blob),
    toolResponse: Schema.optional(ToolResponse),
    toolCall: Schema.optional(ToolCall),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    updatedVariables: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    text: Schema.optional(Schema.String),
    image: Schema.optional(Image),
    agentTransfer: Schema.optional(AgentTransfer),
  }).annotate({ identifier: "Chunk" });

export interface Message {
  /** Optional. The role within the conversation, e.g., user, agent. */
  role?: string;
  /** Optional. Content of the message as a series of chunks. */
  chunks?: ReadonlyArray<Chunk>;
  /** Optional. Timestamp when the message was sent or received. Should not be used if the message is part of an example. */
  eventTime?: string;
}

export const Message: Schema.Codec<Message> =
  /*@__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
    chunks: Schema.optional(Schema.Array(Chunk)),
    eventTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Message" });

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

export const InputAudioConfig: Schema.Codec<InputAudioConfig> =
  /*@__PURE__*/ Schema.Struct({
    audioEncoding: Schema.optional(Schema.String),
    noiseSuppressionLevel: Schema.optional(Schema.String),
    sampleRateHertz: Schema.optional(Schema.Number),
  }).annotate({ identifier: "InputAudioConfig" });

export interface SessionConfigRemoteDialogflowQueryParameters {
  /** Optional. The payload to be sent in [QueryParameters](https://cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#queryparameters). */
  payload?: Record<string, unknown>;
  /** Optional. The end user metadata to be sent in [QueryParameters](https://cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#queryparameters). */
  endUserMetadata?: Record<string, unknown>;
  /** Optional. The HTTP headers to be sent as webhook_headers in [QueryParameters](https://cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#queryparameters). */
  webhookHeaders?: Record<string, string>;
}

export const SessionConfigRemoteDialogflowQueryParameters: Schema.Codec<SessionConfigRemoteDialogflowQueryParameters> =
  /*@__PURE__*/ Schema.Struct({
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    endUserMetadata: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    webhookHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({ identifier: "SessionConfigRemoteDialogflowQueryParameters" });

export interface SessionConfig {
  /** Optional. The time zone of the user. If provided, the agent will use the time zone for date and time related variables. Otherwise, the agent will use the time zone specified in the App.time_zone_settings. The format is the IANA Time Zone Database time zone, e.g. "America/Los_Angeles". */
  timeZone?: string;
  /** Optional. Configuration for generating the output audio. */
  outputAudioConfig?: OutputAudioConfig;
  /** Optional. The deployment of the app to use for the session. Format: `projects/{project}/locations/{location}/apps/{app}/deployments/{deployment}` */
  deployment?: string;
  /** Optional. Whether to use tool fakes for the session. If this field is set, the agent will attempt use tool fakes instead of calling the real tools. */
  useToolFakes?: boolean;
  /** Optional. Whether to enable streaming text outputs from the model. By default, text outputs from the model are collected before sending to the client. NOTE: This is only supported for text (non-voice) sessions via StreamRunSession or BidiRunSession. */
  enableTextStreaming?: boolean;
  /** Optional. The entry agent to handle the session. If not specified, the session will be handled by the root agent of the app. Format: `projects/{project}/locations/{location}/apps/{app}/agents/{agent}` */
  entryAgent?: string;
  /** Optional. The historical context of the session, including user inputs, agent responses, and other messages. Typically, CES agent would manage session automatically so client doesn't need to explicitly populate this field. However, client can optionally override the historical contexts to force the session start from certain state. */
  historicalContexts?: ReadonlyArray<Message>;
  /** Optional. Configuration for processing the input audio. */
  inputAudioConfig?: InputAudioConfig;
  /** Optional. [QueryParameters](https://cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#queryparameters) to send to the remote [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents) agent when the session control is transferred to the remote agent. */
  remoteDialogflowQueryParameters?: SessionConfigRemoteDialogflowQueryParameters;
}

export const SessionConfig: Schema.Codec<SessionConfig> =
  /*@__PURE__*/ Schema.Struct({
    timeZone: Schema.optional(Schema.String),
    outputAudioConfig: Schema.optional(OutputAudioConfig),
    deployment: Schema.optional(Schema.String),
    useToolFakes: Schema.optional(Schema.Boolean),
    enableTextStreaming: Schema.optional(Schema.Boolean),
    entryAgent: Schema.optional(Schema.String),
    historicalContexts: Schema.optional(Schema.Array(Message)),
    inputAudioConfig: Schema.optional(InputAudioConfig),
    remoteDialogflowQueryParameters: Schema.optional(
      SessionConfigRemoteDialogflowQueryParameters,
    ),
  }).annotate({ identifier: "SessionConfig" });

export interface Event {
  /** Required. The name of the event. */
  event?: string;
}

export const Event: Schema.Codec<Event> =
  /*@__PURE__*/ Schema.Struct({
    event: Schema.optional(Schema.String),
  }).annotate({ identifier: "Event" });

export interface SessionInput {
  /** Optional. Audio data from the end user. */
  audio?: string;
  /** Optional. Contextual variables for the session, keyed by name. Only variables declared in the app will be used by the CES agent. Unrecognized variables will still be sent to the Dialogflow agent as additional session parameters. */
  variables?: Record<string, unknown>;
  /** Optional. DTMF digits from the end user. */
  dtmf?: string;
  /** Optional. Image data from the end user. */
  image?: Image;
  /** Optional. Event input. */
  event?: Event;
  /** Optional. Text data from the end user. */
  text?: string;
  /** Optional. Execution results for the tool calls from the client. */
  toolResponses?: ToolResponses;
  /** Optional. A flag to indicate if the current message is a fragment of a larger input in the bidi streaming session. When set to `true`, the agent defers processing until it receives a subsequent message where `will_continue` is `false`, or until the system detects an endpoint in the audio input. NOTE: This field does not apply to audio and DTMF inputs, as they are always processed automatically based on the endpointing signal. */
  willContinue?: boolean;
  /** Optional. Blob data from the end user. */
  blob?: Blob;
}

export const SessionInput: Schema.Codec<SessionInput> =
  /*@__PURE__*/ Schema.Struct({
    audio: Schema.optional(Schema.String),
    variables: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    dtmf: Schema.optional(Schema.String),
    image: Schema.optional(Image),
    event: Schema.optional(Event),
    text: Schema.optional(Schema.String),
    toolResponses: Schema.optional(ToolResponses),
    willContinue: Schema.optional(Schema.Boolean),
    blob: Schema.optional(Blob),
  }).annotate({ identifier: "SessionInput" });

export interface RunSessionRequest {
  /** Required. The configuration for the session. */
  config?: SessionConfig;
  /** Required. Inputs for the session. */
  inputs?: ReadonlyArray<SessionInput>;
}

export const RunSessionRequest: Schema.Codec<RunSessionRequest> =
  /*@__PURE__*/ Schema.Struct({
    config: Schema.optional(SessionConfig),
    inputs: Schema.optional(Schema.Array(SessionInput)),
  }).annotate({ identifier: "RunSessionRequest" });

export interface ConversationLoggingSettings {
  /** Optional. Whether to disable conversation logging for the sessions. */
  disableConversationLogging?: boolean;
  /** Optional. Controls the retention window for the conversation. If not set, the conversation will be retained for 365 days. */
  retentionWindow?: string;
}

export const ConversationLoggingSettings: Schema.Codec<ConversationLoggingSettings> =
  /*@__PURE__*/ Schema.Struct({
    disableConversationLogging: Schema.optional(Schema.Boolean),
    retentionWindow: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConversationLoggingSettings" });

export interface BatchDeleteConversationsRequest {
  /** Required. The resource names of the conversations to delete. */
  conversations?: ReadonlyArray<string>;
}

export const BatchDeleteConversationsRequest: Schema.Codec<BatchDeleteConversationsRequest> =
  /*@__PURE__*/ Schema.Struct({
    conversations: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BatchDeleteConversationsRequest" });

export interface Span {
  /** Output only. The duration of the span. */
  duration?: string;
  /** Output only. The name of the span. */
  name?: string;
  /** Output only. The end time of the span. */
  endTime?: string;
  /** Output only. The child spans that are nested under this span. */
  childSpans?: ReadonlyArray<Span>;
  /** Output only. The start time of the span. */
  startTime?: string;
  /** Output only. Key-value attributes associated with the span. */
  attributes?: Record<string, unknown>;
}

export const Span: Schema.Codec<Span> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      duration: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      endTime: Schema.optional(Schema.String),
      childSpans: Schema.optional(Schema.Array(Span)),
      startTime: Schema.optional(Schema.String),
      attributes: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    }),
  ).annotate({ identifier: "Span" }) as any as Schema.Codec<Span>;

export interface AppVariableDeclaration {
  /** Required. The schema of the variable. */
  schema?: Ces_Schema;
  /** Required. The name of the variable. The name must start with a letter or underscore and contain only letters, numbers, or underscores. */
  name?: string;
  /** Required. The description of the variable. */
  description?: string;
}

export const AppVariableDeclaration: Schema.Codec<AppVariableDeclaration> =
  /*@__PURE__*/ Schema.Struct({
    schema: Schema.optional(Ces_Schema),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "AppVariableDeclaration" });

export interface DataStoreSettingsEngine {
  /** Output only. The type of the engine. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "ENGINE_TYPE_SEARCH"
    | "ENGINE_TYPE_CHAT"
    | (string & {});
  /** Output only. The resource name of the engine. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}` */
  name?: string;
}

export const DataStoreSettingsEngine: Schema.Codec<DataStoreSettingsEngine> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataStoreSettingsEngine" });

export interface DataStoreSettings {
  /** Output only. The engines for the app. */
  engines?: ReadonlyArray<DataStoreSettingsEngine>;
}

export const DataStoreSettings: Schema.Codec<DataStoreSettings> =
  /*@__PURE__*/ Schema.Struct({
    engines: Schema.optional(Schema.Array(DataStoreSettingsEngine)),
  }).annotate({ identifier: "DataStoreSettings" });

export interface LanguageSettings {
  /** Optional. Enables multilingual support. If true, agents in the app will use pre-built instructions to improve handling of multilingual input. */
  enableMultilingualSupport?: boolean;
  /** Optional. The default language code of the app. */
  defaultLanguageCode?: string;
  /** Optional. List of languages codes supported by the app, in addition to the `default_language_code`. */
  supportedLanguageCodes?: ReadonlyArray<string>;
  /** Optional. Deprecated: This feature is no longer supported. Use `enable_multilingual_support` instead to improve handling of multilingual input. The action to perform when an agent receives input in an unsupported language. This can be a predefined action or a custom tool call. Valid values are: - A tool's full resource name, which triggers a specific tool execution. - A predefined system action, such as "escalate" or "exit", which triggers an EndSession signal with corresponding metadata to terminate the conversation. */
  fallbackAction?: string;
}

export const LanguageSettings: Schema.Codec<LanguageSettings> =
  /*@__PURE__*/ Schema.Struct({
    enableMultilingualSupport: Schema.optional(Schema.Boolean),
    defaultLanguageCode: Schema.optional(Schema.String),
    supportedLanguageCodes: Schema.optional(Schema.Array(Schema.String)),
    fallbackAction: Schema.optional(Schema.String),
  }).annotate({ identifier: "LanguageSettings" });

export interface RedactionConfig {
  /** Optional. If true, redaction will be applied in various logging scenarios, including conversation history, Cloud Logging and audio recording. */
  enableRedaction?: boolean;
  /** Optional. [DLP](https://cloud.google.com/dlp/docs) inspect template name to configure detection of sensitive data types. Format: `projects/{project}/locations/{location}/inspectTemplates/{inspect_template}` */
  inspectTemplate?: string;
  /** Optional. [DLP](https://cloud.google.com/dlp/docs) deidentify template name to instruct on how to de-identify content. Format: `projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}` */
  deidentifyTemplate?: string;
}

export const RedactionConfig: Schema.Codec<RedactionConfig> =
  /*@__PURE__*/ Schema.Struct({
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

export const AudioRecordingConfig: Schema.Codec<AudioRecordingConfig> =
  /*@__PURE__*/ Schema.Struct({
    gcsBucket: Schema.optional(Schema.String),
    gcsPathPrefix: Schema.optional(Schema.String),
  }).annotate({ identifier: "AudioRecordingConfig" });

export interface MetricAnalysisSettings {
  /** Optional. Whether to collect conversation data for llm analysis metrics. If true, conversation data will not be collected for llm analysis metrics; otherwise, conversation data will be collected. */
  llmMetricsOptedOut?: boolean;
}

export const MetricAnalysisSettings: Schema.Codec<MetricAnalysisSettings> =
  /*@__PURE__*/ Schema.Struct({
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

export const BigQueryExportSettings: Schema.Codec<BigQueryExportSettings> =
  /*@__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    project: Schema.optional(Schema.String),
    dataset: Schema.optional(Schema.String),
  }).annotate({ identifier: "BigQueryExportSettings" });

export interface CloudLoggingSettings {
  /** Optional. Whether to enable Cloud Logging for the sessions. */
  enableCloudLogging?: boolean;
}

export const CloudLoggingSettings: Schema.Codec<CloudLoggingSettings> =
  /*@__PURE__*/ Schema.Struct({
    enableCloudLogging: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "CloudLoggingSettings" });

export interface LoggingSettings {
  /** Optional. Configuration for how sensitive data should be redacted. */
  redactionConfig?: RedactionConfig;
  /** Optional. Configuration for how audio interactions should be recorded for the evaluation. By default, audio recording is not enabled for evaluation sessions. */
  evaluationAudioRecordingConfig?: AudioRecordingConfig;
  /** Optional. Settings to describe the conversation data collection behaviors for the LLM analysis pipeline for the app. */
  metricAnalysisSettings?: MetricAnalysisSettings;
  /** Optional. Configuration for how audio interactions should be recorded. The audio is subject to redaction as configured in RedactionConfig. */
  audioRecordingConfig?: AudioRecordingConfig;
  /** Optional. Configures the BigQuery export behaviors for the app. The conversation data is subject to redaction as configured in RedactionConfig. */
  bigqueryExportSettings?: BigQueryExportSettings;
  /** Optional. Settings to describe the Cloud Logging behaviors for the app. */
  cloudLoggingSettings?: CloudLoggingSettings;
  /** Optional. Configures an additional recording of unredacted audio. This can be used to maintain a raw audio copy when audio redaction is enabled, typically for auditing or monitoring purposes. */
  unredactedAudioRecordingConfig?: AudioRecordingConfig;
  /** Optional. Settings to describe the conversation logging behaviors for the app. */
  conversationLoggingSettings?: ConversationLoggingSettings;
}

export const LoggingSettings: Schema.Codec<LoggingSettings> =
  /*@__PURE__*/ Schema.Struct({
    redactionConfig: Schema.optional(RedactionConfig),
    evaluationAudioRecordingConfig: Schema.optional(AudioRecordingConfig),
    metricAnalysisSettings: Schema.optional(MetricAnalysisSettings),
    audioRecordingConfig: Schema.optional(AudioRecordingConfig),
    bigqueryExportSettings: Schema.optional(BigQueryExportSettings),
    cloudLoggingSettings: Schema.optional(CloudLoggingSettings),
    unredactedAudioRecordingConfig: Schema.optional(AudioRecordingConfig),
    conversationLoggingSettings: Schema.optional(ConversationLoggingSettings),
  }).annotate({ identifier: "LoggingSettings" });

export interface EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds {
  /** Optional. The success threshold for individual tool invocation parameter correctness. Must be a float between 0 and 1. Default is 1.0. */
  toolInvocationParameterCorrectnessThreshold?: number;
}

export const EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds: Schema.Codec<EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds> =
  /*@__PURE__*/ Schema.Struct({
    toolInvocationParameterCorrectnessThreshold: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds",
  });

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

export const EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds: Schema.Codec<EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds> =
  /*@__PURE__*/ Schema.Struct({
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

export const EvaluationMetricsThresholdsToolMatchingSettings: Schema.Codec<EvaluationMetricsThresholdsToolMatchingSettings> =
  /*@__PURE__*/ Schema.Struct({
    extraToolCallBehavior: Schema.optional(Schema.String),
  }).annotate({
    identifier: "EvaluationMetricsThresholdsToolMatchingSettings",
  });

export interface EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds {
  /** Optional. The expectation level metrics thresholds. */
  expectationLevelMetricsThresholds?: EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds;
  /** Optional. The turn level metrics thresholds. */
  turnLevelMetricsThresholds?: EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds;
  /** Optional. The tool matching settings. An extra tool call is a tool call that is present in the execution but does not match any tool call in the golden expectation. */
  toolMatchingSettings?: EvaluationMetricsThresholdsToolMatchingSettings;
}

export const EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds: Schema.Codec<EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds> =
  /*@__PURE__*/ Schema.Struct({
    expectationLevelMetricsThresholds: Schema.optional(
      EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds,
    ),
    turnLevelMetricsThresholds: Schema.optional(
      EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds,
    ),
    toolMatchingSettings: Schema.optional(
      EvaluationMetricsThresholdsToolMatchingSettings,
    ),
  }).annotate({
    identifier: "EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds",
  });

export interface EvaluationMetricsThresholds {
  /** Optional. The golden evaluation metrics thresholds. */
  goldenEvaluationMetricsThresholds?: EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds;
  /** Optional. The hallucination metric behavior for golden evaluations. */
  goldenHallucinationMetricBehavior?:
    | "HALLUCINATION_METRIC_BEHAVIOR_UNSPECIFIED"
    | "DISABLED"
    | "ENABLED"
    | (string & {});
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
}

export const EvaluationMetricsThresholds: Schema.Codec<EvaluationMetricsThresholds> =
  /*@__PURE__*/ Schema.Struct({
    goldenEvaluationMetricsThresholds: Schema.optional(
      EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds,
    ),
    goldenHallucinationMetricBehavior: Schema.optional(Schema.String),
    scenarioHallucinationMetricBehavior: Schema.optional(Schema.String),
    hallucinationMetricBehavior: Schema.optional(Schema.String),
  }).annotate({ identifier: "EvaluationMetricsThresholds" });

export interface SynthesizeSpeechConfig {
  /** Optional. The name of the voice. If not set, the service will choose a voice based on the other parameters such as language_code. For the list of available voices, please refer to [Supported voices and languages](https://cloud.google.com/text-to-speech/docs/voices) from Cloud Text-to-Speech. */
  voice?: string;
  /** Optional. The speaking rate/speed in the range [0.25, 2.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. Values outside of the range [0.25, 2.0] will return an error. */
  speakingRate?: number;
}

export const SynthesizeSpeechConfig: Schema.Codec<SynthesizeSpeechConfig> =
  /*@__PURE__*/ Schema.Struct({
    voice: Schema.optional(Schema.String),
    speakingRate: Schema.optional(Schema.Number),
  }).annotate({ identifier: "SynthesizeSpeechConfig" });

export interface BargeInConfig {
  /** Optional. Disables user barge-in while the agent is speaking. If true, user input during agent response playback will be ignored. Deprecated: `disable_barge_in` is deprecated in favor of `disable_barge_in_control` in ChannelProfile. */
  disableBargeIn?: boolean;
  /** Optional. If enabled, the agent will adapt its next response based on the assumption that the user hasn't heard the full preceding agent message. This should not be used in scenarios where agent responses are displayed visually. */
  bargeInAwareness?: boolean;
}

export const BargeInConfig: Schema.Codec<BargeInConfig> =
  /*@__PURE__*/ Schema.Struct({
    disableBargeIn: Schema.optional(Schema.Boolean),
    bargeInAwareness: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "BargeInConfig" });

export interface AudioProcessingConfig {
  /** Optional. Configuration of how the agent response should be synthesized, mapping from the language code to SynthesizeSpeechConfig. If the configuration for the specified language code is not found, the configuration for the root language code will be used. For example, if the map contains "en-us" and "en", and the specified language code is "en-gb", then "en" configuration will be used. Note: Language code is case-insensitive. */
  synthesizeSpeechConfigs?: Record<string, SynthesizeSpeechConfig>;
  /** Optional. The duration of user inactivity (no speech or interaction) before the agent prompts the user for reengagement. If not set, the agent will not prompt the user for reengagement. */
  inactivityTimeout?: string;
  /** Optional. Configures the agent behavior for the user barge-in activities. */
  bargeInConfig?: BargeInConfig;
  /** Optional. Configuration for the ambient sound to be played with the synthesized agent response, to enhance the naturalness of the conversation. */
  ambientSoundConfig?: AmbientSoundConfig;
}

export const AudioProcessingConfig: Schema.Codec<AudioProcessingConfig> =
  /*@__PURE__*/ Schema.Struct({
    synthesizeSpeechConfigs: Schema.optional(
      Schema.Record(Schema.String, SynthesizeSpeechConfig),
    ),
    inactivityTimeout: Schema.optional(Schema.String),
    bargeInConfig: Schema.optional(BargeInConfig),
    ambientSoundConfig: Schema.optional(AmbientSoundConfig),
  }).annotate({ identifier: "AudioProcessingConfig" });

export interface ErrorHandlingSettingsEndSessionConfig {
  /** Optional. Whether to escalate the session in EndSession. If session is escalated, metadata in EndSession will contain `session_escalated = true`. See https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/deploy/google-telephony-platform#transfer_a_call_to_a_human_agent for details. */
  escalateSession?: boolean;
}

export const ErrorHandlingSettingsEndSessionConfig: Schema.Codec<ErrorHandlingSettingsEndSessionConfig> =
  /*@__PURE__*/ Schema.Struct({
    escalateSession: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ErrorHandlingSettingsEndSessionConfig" });

export interface ErrorHandlingSettingsFallbackResponseConfig {
  /** Optional. The maximum number of fallback attempts to make before the agent emitting EndSession Signal. */
  maxFallbackAttempts?: number;
  /** Optional. The fallback messages in case of system errors (e.g. LLM errors), mapped by [supported language code](https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/reference/language). */
  customFallbackMessages?: Record<string, string>;
}

export const ErrorHandlingSettingsFallbackResponseConfig: Schema.Codec<ErrorHandlingSettingsFallbackResponseConfig> =
  /*@__PURE__*/ Schema.Struct({
    maxFallbackAttempts: Schema.optional(Schema.Number),
    customFallbackMessages: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({ identifier: "ErrorHandlingSettingsFallbackResponseConfig" });

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

export const ErrorHandlingSettings: Schema.Codec<ErrorHandlingSettings> =
  /*@__PURE__*/ Schema.Struct({
    errorHandlingStrategy: Schema.optional(Schema.String),
    endSessionConfig: Schema.optional(ErrorHandlingSettingsEndSessionConfig),
    fallbackResponseConfig: Schema.optional(
      ErrorHandlingSettingsFallbackResponseConfig,
    ),
  }).annotate({ identifier: "ErrorHandlingSettings" });

export interface VpcScSettings {
  /** Optional. The allowed HTTP(s) origins that OpenAPI tools in the App are able to directly call when VPC Service Controls are enabled. These strings must match the origin exactly, including the port if specified. For example, "https://example.com" or "https://example.com:443". This list does not yet apply to Python tools that may make direct HTTP calls. */
  allowedOrigins?: ReadonlyArray<string>;
}

export const VpcScSettings: Schema.Codec<VpcScSettings> =
  /*@__PURE__*/ Schema.Struct({
    allowedOrigins: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "VpcScSettings" });

export interface ClientCertificateSettings {
  /** Optional. The name of the SecretManager secret version resource storing the passphrase to decrypt the private key. Should be left unset if the private key is not encrypted. Format: `projects/{project}/secrets/{secret}/versions/{version}` */
  passphrase?: string;
  /** Required. The TLS certificate encoded in PEM format. This string must include the begin header and end footer lines. */
  tlsCertificate?: string;
  /** Required. The name of the SecretManager secret version resource storing the private key encoded in PEM format. Format: `projects/{project}/secrets/{secret}/versions/{version}` */
  privateKey?: string;
}

export const ClientCertificateSettings: Schema.Codec<ClientCertificateSettings> =
  /*@__PURE__*/ Schema.Struct({
    passphrase: Schema.optional(Schema.String),
    tlsCertificate: Schema.optional(Schema.String),
    privateKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClientCertificateSettings" });

export interface App {
  /** Optional. The root agent is the entry point of the app. Format: `projects/{project}/locations/{location}/apps/{app}/agents/{agent}` */
  rootAgent?: string;
  /** Optional. TimeZone settings of the app. */
  timeZoneSettings?: TimeZoneSettings;
  /** Output only. Timestamp when the app was last updated. */
  updateTime?: string;
  /** Optional. The tool execution mode for the app. If not provided, will default to PARALLEL. */
  toolExecutionMode?:
    | "TOOL_EXECUTION_MODE_UNSPECIFIED"
    | "PARALLEL"
    | "SEQUENTIAL"
    | (string & {});
  /** Optional. The declarations of the variables. */
  variableDeclarations?: ReadonlyArray<AppVariableDeclaration>;
  /** Optional. The data store settings for the app. */
  dataStoreSettings?: DataStoreSettings;
  /** Optional. Metadata about the app. This field can be used to store additional information relevant to the app's details or intended usages. */
  metadata?: Record<string, string>;
  /** Optional. Language settings of the app. */
  languageSettings?: LanguageSettings;
  /** Optional. Logging settings of the app. */
  loggingSettings?: LoggingSettings;
  /** Optional. The evaluation thresholds for the app. */
  evaluationMetricsThresholds?: EvaluationMetricsThresholds;
  /** Optional. Human-readable description of the app. */
  description?: string;
  /** Optional. Audio processing configuration of the app. */
  audioProcessingConfig?: AudioProcessingConfig;
  /** Output only. Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes. */
  etag?: string;
  /** Optional. Error handling settings of the app. */
  errorHandlingSettings?: ErrorHandlingSettings;
  /** Output only. The declarations of predefined variables for the app. */
  predefinedVariableDeclarations?: ReadonlyArray<AppVariableDeclaration>;
  /** Optional. VPC-SC settings for the app. */
  vpcScSettings?: VpcScSettings;
  /** Output only. Timestamp when the app was created. */
  createTime?: string;
  /** Output only. Number of deployments in the app. */
  deploymentCount?: number;
  /** Optional. The default LLM model settings for the app. Individual resources (e.g. agents, guardrails) can override these configurations as needed. */
  modelSettings?: ModelSettings;
  /** Identifier. The unique identifier of the app. Format: `projects/{project}/locations/{location}/apps/{app}` */
  name?: string;
  /** Optional. Instructions for all the agents in the app. You can use this instruction to set up a stable identity or personality across all the agents. */
  globalInstruction?: string;
  /** Output only. Misconfigurations or warnings in the app. */
  validationErrors?: ReadonlyArray<string>;
  /** Optional. List of guardrails for the app. Format: `projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}` */
  guardrails?: ReadonlyArray<string>;
  /** Optional. Indicates whether the app is locked for changes. If the app is locked, modifications to the app resources will be rejected. */
  locked?: boolean;
  /** Optional. Whether the app is pinned in the app list. */
  pinned?: boolean;
  /** Optional. The default channel profile used by the app. */
  defaultChannelProfile?: ChannelProfile;
  /** Optional. The default client certificate settings for the app. */
  clientCertificateSettings?: ClientCertificateSettings;
  /** Required. Display name of the app. */
  displayName?: string;
}

export const App: Schema.Codec<App> = /*@__PURE__*/ Schema.Struct({
  rootAgent: Schema.optional(Schema.String),
  timeZoneSettings: Schema.optional(TimeZoneSettings),
  updateTime: Schema.optional(Schema.String),
  toolExecutionMode: Schema.optional(Schema.String),
  variableDeclarations: Schema.optional(Schema.Array(AppVariableDeclaration)),
  dataStoreSettings: Schema.optional(DataStoreSettings),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  languageSettings: Schema.optional(LanguageSettings),
  loggingSettings: Schema.optional(LoggingSettings),
  evaluationMetricsThresholds: Schema.optional(EvaluationMetricsThresholds),
  description: Schema.optional(Schema.String),
  audioProcessingConfig: Schema.optional(AudioProcessingConfig),
  etag: Schema.optional(Schema.String),
  errorHandlingSettings: Schema.optional(ErrorHandlingSettings),
  predefinedVariableDeclarations: Schema.optional(
    Schema.Array(AppVariableDeclaration),
  ),
  vpcScSettings: Schema.optional(VpcScSettings),
  createTime: Schema.optional(Schema.String),
  deploymentCount: Schema.optional(Schema.Number),
  modelSettings: Schema.optional(ModelSettings),
  name: Schema.optional(Schema.String),
  globalInstruction: Schema.optional(Schema.String),
  validationErrors: Schema.optional(Schema.Array(Schema.String)),
  guardrails: Schema.optional(Schema.Array(Schema.String)),
  locked: Schema.optional(Schema.Boolean),
  pinned: Schema.optional(Schema.Boolean),
  defaultChannelProfile: Schema.optional(ChannelProfile),
  clientCertificateSettings: Schema.optional(ClientCertificateSettings),
  displayName: Schema.optional(Schema.String),
}).annotate({ identifier: "App" });

export interface ListAppsResponse {
  /** The list of apps. */
  apps?: ReadonlyArray<App>;
  /** A token that can be sent as ListAppsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages. */
  nextPageToken?: string;
  /** Unordered list. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListAppsResponse: Schema.Codec<ListAppsResponse> =
  /*@__PURE__*/ Schema.Struct({
    apps: Schema.optional(Schema.Array(App)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListAppsResponse" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
}

export const Status: Schema.Codec<Status> =
  /*@__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "Status" });

export interface PythonCodeCondition {
  /** Required. The python code to execute. */
  pythonCode?: string;
}

export const PythonCodeCondition: Schema.Codec<PythonCodeCondition> =
  /*@__PURE__*/ Schema.Struct({
    pythonCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "PythonCodeCondition" });

export interface ExpressionCondition {
  /** Required. The string representation of cloud.api.Expression condition. */
  expression?: string;
}

export const ExpressionCondition: Schema.Codec<ExpressionCondition> =
  /*@__PURE__*/ Schema.Struct({
    expression: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExpressionCondition" });

export interface TransferRuleDeterministicTransfer {
  /** Optional. A rule that uses Python code block to evaluate the conditions. If the condition evaluates to true, the transfer occurs. */
  pythonCodeCondition?: PythonCodeCondition;
  /** Optional. A rule that evaluates a session state condition. If the condition evaluates to true, the transfer occurs. */
  expressionCondition?: ExpressionCondition;
}

export const TransferRuleDeterministicTransfer: Schema.Codec<TransferRuleDeterministicTransfer> =
  /*@__PURE__*/ Schema.Struct({
    pythonCodeCondition: Schema.optional(PythonCodeCondition),
    expressionCondition: Schema.optional(ExpressionCondition),
  }).annotate({ identifier: "TransferRuleDeterministicTransfer" });

export interface Example {
  /** Required. Display name of the example. */
  displayName?: string;
  /** Identifier. The unique identifier of the example. Format: `projects/{project}/locations/{location}/apps/{app}/examples/{example}` */
  name?: string;
  /** Optional. The agent that initially handles the conversation. If not specified, the example represents a conversation that is handled by the root agent. Format: `projects/{project}/locations/{location}/apps/{app}/agents/{agent}` */
  entryAgent?: string;
  /** Output only. Timestamp when the example was created. */
  createTime?: string;
  /** Optional. The collection of messages that make up the conversation. */
  messages?: ReadonlyArray<Message>;
  /** Output only. Timestamp when the example was last updated. */
  updateTime?: string;
  /** Optional. Human-readable description of the example. */
  description?: string;
  /** Output only. The example may become invalid if referencing resources are deleted. Invalid examples will not be used as few-shot examples. */
  invalid?: boolean;
  /** Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes. */
  etag?: string;
}

export const Example: Schema.Codec<Example> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    entryAgent: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    messages: Schema.optional(Schema.Array(Message)),
    updateTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    invalid: Schema.optional(Schema.Boolean),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "Example" });

export interface GuardrailLlmPromptSecurityDefaultSecuritySettings {
  /** Output only. The default prompt template used by the system. This field is for display purposes to show the user what prompt the system uses by default. It is OUTPUT_ONLY. */
  defaultPromptTemplate?: string;
}

export const GuardrailLlmPromptSecurityDefaultSecuritySettings: Schema.Codec<GuardrailLlmPromptSecurityDefaultSecuritySettings> =
  /*@__PURE__*/ Schema.Struct({
    defaultPromptTemplate: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GuardrailLlmPromptSecurityDefaultSecuritySettings",
  });

export interface GuardrailLlmPolicy {
  /** Required. Defines when to apply the policy check during the conversation. If set to `POLICY_SCOPE_UNSPECIFIED`, the policy will be applied to the user input. When applying the policy to the agent response, additional latency will be introduced before the agent can respond. */
  policyScope?:
    | "POLICY_SCOPE_UNSPECIFIED"
    | "USER_QUERY"
    | "AGENT_RESPONSE"
    | "USER_QUERY_AND_AGENT_RESPONSE"
    | (string & {});
  /** Optional. When checking this policy, consider the last 'n' messages in the conversation. When not set a default value of 10 will be used. */
  maxConversationMessages?: number;
  /** Optional. Model settings. */
  modelSettings?: ModelSettings;
  /** Required. Policy prompt. */
  prompt?: string;
  /** Optional. If an error occurs during the policy check, fail open and do not trigger the guardrail. */
  failOpen?: boolean;
  /** Optional. By default, the LLM policy check is bypassed for short utterances. Enabling this setting applies the policy check to all utterances, including those that would normally be skipped. */
  allowShortUtterance?: boolean;
}

export const GuardrailLlmPolicy: Schema.Codec<GuardrailLlmPolicy> =
  /*@__PURE__*/ Schema.Struct({
    policyScope: Schema.optional(Schema.String),
    maxConversationMessages: Schema.optional(Schema.Number),
    modelSettings: Schema.optional(ModelSettings),
    prompt: Schema.optional(Schema.String),
    failOpen: Schema.optional(Schema.Boolean),
    allowShortUtterance: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GuardrailLlmPolicy" });

export interface GuardrailLlmPromptSecurity {
  /** Optional. Use the system's predefined default security settings. To select this mode, include an empty 'default_settings' message in the request. The 'default_prompt_template' field within will be populated by the server in the response. */
  defaultSettings?: GuardrailLlmPromptSecurityDefaultSecuritySettings;
  /** Optional. Determines the behavior when the guardrail encounters an LLM error. - If true: the guardrail is bypassed. - If false (default): the guardrail triggers/blocks. Note: If a custom policy is provided, this field is ignored in favor of the policy's 'fail_open' configuration. */
  failOpen?: boolean;
  /** Optional. Use a user-defined LlmPolicy to configure the security guardrail. */
  customPolicy?: GuardrailLlmPolicy;
}

export const GuardrailLlmPromptSecurity: Schema.Codec<GuardrailLlmPromptSecurity> =
  /*@__PURE__*/ Schema.Struct({
    defaultSettings: Schema.optional(
      GuardrailLlmPromptSecurityDefaultSecuritySettings,
    ),
    failOpen: Schema.optional(Schema.Boolean),
    customPolicy: Schema.optional(GuardrailLlmPolicy),
  }).annotate({ identifier: "GuardrailLlmPromptSecurity" });

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

export const GuardrailModelSafetySafetySetting: Schema.Codec<GuardrailModelSafetySafetySetting> =
  /*@__PURE__*/ Schema.Struct({
    category: Schema.optional(Schema.String),
    threshold: Schema.optional(Schema.String),
  }).annotate({ identifier: "GuardrailModelSafetySafetySetting" });

export interface GuardrailModelSafety {
  /** Required. List of safety settings. */
  safetySettings?: ReadonlyArray<GuardrailModelSafetySafetySetting>;
}

export const GuardrailModelSafety: Schema.Codec<GuardrailModelSafety> =
  /*@__PURE__*/ Schema.Struct({
    safetySettings: Schema.optional(
      Schema.Array(GuardrailModelSafetySafetySetting),
    ),
  }).annotate({ identifier: "GuardrailModelSafety" });

export interface Callback {
  /** Required. The python code to execute for the callback. */
  pythonCode?: string;
  /** Optional. Human-readable description of the callback. */
  description?: string;
  /** Optional. If enabled, the callback will also be executed on intermediate model outputs. This setting only affects after model callback. **ENABLE WITH CAUTION**. Typically after model callback only needs to be executed after receiving all model responses. Enabling proactive execution may have negative implication on the execution cost and latency, and should only be enabled in rare situations. */
  proactiveExecutionEnabled?: boolean;
  /** Optional. Whether the callback is disabled. Disabled callbacks are ignored by the agent. */
  disabled?: boolean;
}

export const Callback: Schema.Codec<Callback> =
  /*@__PURE__*/ Schema.Struct({
    pythonCode: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    proactiveExecutionEnabled: Schema.optional(Schema.Boolean),
    disabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Callback" });

export interface GuardrailCodeCallback {
  /** Optional. The callback to execute before the agent is called. Each callback function is expected to return a structure (e.g., a dict or object) containing at least: - 'decision': Either 'OK' or 'TRIGGER'. - 'reason': A string explaining the decision. A 'TRIGGER' decision may halt further processing. */
  beforeAgentCallback?: Callback;
  /** Optional. The callback to execute after the model is called. If there are multiple calls to the model, the callback will be executed multiple times. Each callback function is expected to return a structure (e.g., a dict or object) containing at least: - 'decision': Either 'OK' or 'TRIGGER'. - 'reason': A string explaining the decision. A 'TRIGGER' decision may halt further processing. */
  afterModelCallback?: Callback;
  /** Optional. The callback to execute after the agent is called. Each callback function is expected to return a structure (e.g., a dict or object) containing at least: - 'decision': Either 'OK' or 'TRIGGER'. - 'reason': A string explaining the decision. A 'TRIGGER' decision may halt further processing. */
  afterAgentCallback?: Callback;
  /** Optional. The callback to execute before the model is called. If there are multiple calls to the model, the callback will be executed multiple times. Each callback function is expected to return a structure (e.g., a dict or object) containing at least: - 'decision': Either 'OK' or 'TRIGGER'. - 'reason': A string explaining the decision. A 'TRIGGER' decision may halt further processing. */
  beforeModelCallback?: Callback;
}

export const GuardrailCodeCallback: Schema.Codec<GuardrailCodeCallback> =
  /*@__PURE__*/ Schema.Struct({
    beforeAgentCallback: Schema.optional(Callback),
    afterModelCallback: Schema.optional(Callback),
    afterAgentCallback: Schema.optional(Callback),
    beforeModelCallback: Schema.optional(Callback),
  }).annotate({ identifier: "GuardrailCodeCallback" });

export interface TriggerActionGenerativeAnswer {
  /** Required. The prompt to use for the generative answer. */
  prompt?: string;
}

export const TriggerActionGenerativeAnswer: Schema.Codec<TriggerActionGenerativeAnswer> =
  /*@__PURE__*/ Schema.Struct({
    prompt: Schema.optional(Schema.String),
  }).annotate({ identifier: "TriggerActionGenerativeAnswer" });

export interface TriggerActionResponse {
  /** Optional. Whether the response is disabled. Disabled responses are not used by the agent. */
  disabled?: boolean;
  /** Required. Text for the agent to respond with. */
  text?: string;
}

export const TriggerActionResponse: Schema.Codec<TriggerActionResponse> =
  /*@__PURE__*/ Schema.Struct({
    disabled: Schema.optional(Schema.Boolean),
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "TriggerActionResponse" });

export interface TriggerActionRespondImmediately {
  /** Required. The canned responses for the agent to choose from. The response is chosen randomly. */
  responses?: ReadonlyArray<TriggerActionResponse>;
}

export const TriggerActionRespondImmediately: Schema.Codec<TriggerActionRespondImmediately> =
  /*@__PURE__*/ Schema.Struct({
    responses: Schema.optional(Schema.Array(TriggerActionResponse)),
  }).annotate({ identifier: "TriggerActionRespondImmediately" });

export interface TriggerAction {
  /** Optional. Respond with a generative answer. */
  generativeAnswer?: TriggerActionGenerativeAnswer;
  /** Optional. Transfer the conversation to a different agent. */
  transferAgent?: TriggerActionTransferAgent;
  /** Optional. Immediately respond with a preconfigured response. */
  respondImmediately?: TriggerActionRespondImmediately;
}

export const TriggerAction: Schema.Codec<TriggerAction> =
  /*@__PURE__*/ Schema.Struct({
    generativeAnswer: Schema.optional(TriggerActionGenerativeAnswer),
    transferAgent: Schema.optional(TriggerActionTransferAgent),
    respondImmediately: Schema.optional(TriggerActionRespondImmediately),
  }).annotate({ identifier: "TriggerAction" });

export interface Guardrail {
  /** Optional. Guardrail that blocks the conversation if the prompt is considered unsafe based on the LLM classification. */
  llmPromptSecurity?: GuardrailLlmPromptSecurity;
  /** Optional. Description of the guardrail. */
  description?: string;
  /** Optional. Guardrail that bans certain content from being used in the conversation. */
  contentFilter?: GuardrailContentFilter;
  /** Output only. Timestamp when the guardrail was last updated. */
  updateTime?: string;
  /** Output only. Timestamp when the guardrail was created. */
  createTime?: string;
  /** Optional. Whether the guardrail is enabled. */
  enabled?: boolean;
  /** Optional. Guardrail that blocks the conversation if the LLM response is considered unsafe based on the model safety settings. */
  modelSafety?: GuardrailModelSafety;
  /** Identifier. The unique identifier of the guardrail. Format: `projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}` */
  name?: string;
  /** Optional. Guardrail that blocks the conversation if the LLM response is considered violating the policy based on the LLM classification. */
  llmPolicy?: GuardrailLlmPolicy;
  /** Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes. */
  etag?: string;
  /** Optional. Guardrail that potentially blocks the conversation based on the result of the callback execution. */
  codeCallback?: GuardrailCodeCallback;
  /** Optional. Action to take when the guardrail is triggered. */
  action?: TriggerAction;
  /** Required. Display name of the guardrail. */
  displayName?: string;
}

export const Guardrail: Schema.Codec<Guardrail> =
  /*@__PURE__*/ Schema.Struct({
    llmPromptSecurity: Schema.optional(GuardrailLlmPromptSecurity),
    description: Schema.optional(Schema.String),
    contentFilter: Schema.optional(GuardrailContentFilter),
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    modelSafety: Schema.optional(GuardrailModelSafety),
    name: Schema.optional(Schema.String),
    llmPolicy: Schema.optional(GuardrailLlmPolicy),
    etag: Schema.optional(Schema.String),
    codeCallback: Schema.optional(GuardrailCodeCallback),
    action: Schema.optional(TriggerAction),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Guardrail" });

export interface OpenApiToolset {
  /** Optional. Service Directory configuration. */
  serviceDirectoryConfig?: ServiceDirectoryConfig;
  /** Optional. If true, the agent will ignore unknown fields in the API response for all operations defined in the OpenAPI schema. */
  ignoreUnknownFields?: boolean;
  /** Optional. The TLS configuration. Includes the custom server certificates */
  tlsConfig?: TlsConfig;
  /** Optional. The server URL of the Open API schema. This field is only set in toolsets in the environment dependencies during the export process if the schema contains a server url. During the import process, if this url is present in the environment dependencies and the schema has the $env_var placeholder, it will replace the placeholder in the schema. */
  url?: string;
  /** Required. The OpenAPI schema of the toolset. */
  openApiSchema?: string;
  /** Optional. Authentication information required by the API. */
  apiAuthentication?: ApiAuthentication;
}

export const OpenApiToolset: Schema.Codec<OpenApiToolset> =
  /*@__PURE__*/ Schema.Struct({
    serviceDirectoryConfig: Schema.optional(ServiceDirectoryConfig),
    ignoreUnknownFields: Schema.optional(Schema.Boolean),
    tlsConfig: Schema.optional(TlsConfig),
    url: Schema.optional(Schema.String),
    openApiSchema: Schema.optional(Schema.String),
    apiAuthentication: Schema.optional(ApiAuthentication),
  }).annotate({ identifier: "OpenApiToolset" });

export interface McpToolDefinition {
  /** Output only. The schema of the output arguments of the MCP tool. */
  outputSchema?: Ces_Schema;
  /** Output only. The description of the MCP tool. This can be overridden by `description_override` in `McpToolOverride`. */
  description?: string;
  /** Output only. The schema of the input arguments of the MCP tool. */
  inputSchema?: Ces_Schema;
}

export const McpToolDefinition: Schema.Codec<McpToolDefinition> =
  /*@__PURE__*/ Schema.Struct({
    outputSchema: Schema.optional(Ces_Schema),
    description: Schema.optional(Schema.String),
    inputSchema: Schema.optional(Ces_Schema),
  }).annotate({ identifier: "McpToolDefinition" });

export interface McpToolOverride {
  /** Output only. If present, this tool is "Pinned" and uses the snapshot values as fallbacks if the server becomes temporarily unavailable or if no Override is present. */
  snapshot?: McpToolDefinition;
  /** Required. The original name of the tool as it is emitted by the MCP server. */
  tool?: string;
  /** Optional. If present, this tool uses this name in the Agent instead of the original name. This is primarily used as an alias if the MCP server offers poorly named tools. */
  nameOverride?: string;
  /** Optional. If present, this tool uses this description instead of the original description from the server. */
  descriptionOverride?: string;
}

export const McpToolOverride: Schema.Codec<McpToolOverride> =
  /*@__PURE__*/ Schema.Struct({
    snapshot: Schema.optional(McpToolDefinition),
    tool: Schema.optional(Schema.String),
    nameOverride: Schema.optional(Schema.String),
    descriptionOverride: Schema.optional(Schema.String),
  }).annotate({ identifier: "McpToolOverride" });

export interface McpToolset {
  /** Required. The address of the MCP server, for example, "https://example.com/mcp/". If the server is built with the MCP SDK, the url should be suffixed with "/mcp/". Only Streamable HTTP transport based servers are supported. See https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#streamable-http for more details. */
  serverAddress?: string;
  /** Optional. Overrides for individual tools within this toolset. This allows overriding specific details like descriptions, names, or pinning the tools' states so they aren't fully dynamic. */
  toolOverrides?: ReadonlyArray<McpToolOverride>;
  /** Optional. Authentication information required to access tools and execute a tool against the MCP server. For bearer token authentication, the token applies only to tool execution, not to listing tools. This requires that tools can be listed without authentication. */
  apiAuthentication?: ApiAuthentication;
  /** Optional. The custom headers to send in the request to the MCP server. The values must be in the format `$context.variables.` and can be set in the session variables. See https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/tool/open-api#openapi-injection for more details. */
  customHeaders?: Record<string, string>;
  /** Optional. Service Directory configuration for VPC-SC, used to resolve service names within a perimeter. */
  serviceDirectoryConfig?: ServiceDirectoryConfig;
  /** Optional. The TLS configuration. Includes the custom server certificates that the client should trust. */
  tlsConfig?: TlsConfig;
}

export const McpToolset: Schema.Codec<McpToolset> =
  /*@__PURE__*/ Schema.Struct({
    serverAddress: Schema.optional(Schema.String),
    toolOverrides: Schema.optional(Schema.Array(McpToolOverride)),
    apiAuthentication: Schema.optional(ApiAuthentication),
    customHeaders: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    serviceDirectoryConfig: Schema.optional(ServiceDirectoryConfig),
    tlsConfig: Schema.optional(TlsConfig),
  }).annotate({ identifier: "McpToolset" });

export interface ConnectorToolset {
  /** Required. The list of connector actions/entity operations to generate tools for. */
  connectorActions?: ReadonlyArray<Action>;
  /** Required. The full resource name of the referenced Integration Connectors Connection. Format: `projects/{project}/locations/{location}/connections/{connection}` */
  connection?: string;
  /** Optional. Configures how authentication is handled in Integration Connectors. By default, an admin authentication is passed in the Integration Connectors API requests. You can override it with a different end-user authentication config. **Note**: The Connection must have authentication override enabled in order to specify an EUC configuration here - otherwise, the Toolset creation will fail. See: https://cloud.google.com/application-integration/docs/configure-connectors-task#configure-authentication-override */
  authConfig?: EndUserAuthConfig;
}

export const ConnectorToolset: Schema.Codec<ConnectorToolset> =
  /*@__PURE__*/ Schema.Struct({
    connectorActions: Schema.optional(Schema.Array(Action)),
    connection: Schema.optional(Schema.String),
    authConfig: Schema.optional(EndUserAuthConfig),
  }).annotate({ identifier: "ConnectorToolset" });

export interface Toolset {
  /** Optional. The display name of the toolset. Must be unique within the same app. */
  displayName?: string;
  /** Identifier. The unique identifier of the toolset. Format: `projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}` */
  name?: string;
  /** Output only. Timestamp when the toolset was created. */
  createTime?: string;
  /** Output only. Timestamp when the toolset was last updated. */
  updateTime?: string;
  /** Optional. A toolset that contains a list of tools that are defined by an OpenAPI schema. */
  openApiToolset?: OpenApiToolset;
  /** Optional. A toolset that contains a list of tools that are offered by the MCP server. */
  mcpToolset?: McpToolset;
  /** Optional. The description of the toolset. */
  description?: string;
  /** Optional. The execution type of the tools in the toolset. */
  executionType?:
    | "EXECUTION_TYPE_UNSPECIFIED"
    | "SYNCHRONOUS"
    | "ASYNCHRONOUS"
    | (string & {});
  /** Optional. Configuration for tools behavior in fake mode. */
  toolFakeConfig?: ToolFakeConfig;
  /** ETag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes. */
  etag?: string;
  /** Optional. A toolset that generates tools from an Integration Connectors Connection. */
  connectorToolset?: ConnectorToolset;
}

export const Toolset: Schema.Codec<Toolset> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    openApiToolset: Schema.optional(OpenApiToolset),
    mcpToolset: Schema.optional(McpToolset),
    description: Schema.optional(Schema.String),
    executionType: Schema.optional(Schema.String),
    toolFakeConfig: Schema.optional(ToolFakeConfig),
    etag: Schema.optional(Schema.String),
    connectorToolset: Schema.optional(ConnectorToolset),
  }).annotate({ identifier: "Toolset" });

export interface AgentAgentToolset {
  /** Required. The resource name of the toolset. Format: `projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}` */
  toolset?: string;
  /** Optional. The tools IDs to filter the toolset. */
  toolIds?: ReadonlyArray<string>;
}

export const AgentAgentToolset: Schema.Codec<AgentAgentToolset> =
  /*@__PURE__*/ Schema.Struct({
    toolset: Schema.optional(Schema.String),
    toolIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AgentAgentToolset" });

export interface TransferRuleDisablePlannerTransfer {
  /** Required. If the condition evaluates to true, planner will not be allowed to transfer to the target agent. */
  expressionCondition?: ExpressionCondition;
}

export const TransferRuleDisablePlannerTransfer: Schema.Codec<TransferRuleDisablePlannerTransfer> =
  /*@__PURE__*/ Schema.Struct({
    expressionCondition: Schema.optional(ExpressionCondition),
  }).annotate({ identifier: "TransferRuleDisablePlannerTransfer" });

export interface TransferRule {
  /** Required. The direction of the transfer. */
  direction?:
    | "DIRECTION_UNSPECIFIED"
    | "PARENT_TO_CHILD"
    | "CHILD_TO_PARENT"
    | (string & {});
  /** Optional. A rule that immediately transfers to the target agent when the condition is met. */
  deterministicTransfer?: TransferRuleDeterministicTransfer;
  /** Required. The resource name of the child agent the rule applies to. Format: `projects/{project}/locations/{location}/apps/{app}/agents/{agent}` */
  childAgent?: string;
  /** Optional. Rule that prevents the planner from transferring to the target agent. */
  disablePlannerTransfer?: TransferRuleDisablePlannerTransfer;
}

export const TransferRule: Schema.Codec<TransferRule> =
  /*@__PURE__*/ Schema.Struct({
    direction: Schema.optional(Schema.String),
    deterministicTransfer: Schema.optional(TransferRuleDeterministicTransfer),
    childAgent: Schema.optional(Schema.String),
    disablePlannerTransfer: Schema.optional(TransferRuleDisablePlannerTransfer),
  }).annotate({ identifier: "TransferRule" });

export interface AgentRemoteDialogflowAgent {
  /** Optional. The flow ID of the flow in the Dialogflow agent. */
  flowId?: string;
  /** Optional. The mapping of the Dialogflow session parameters names to the app variables names to be sent back to the CES agent after the Dialogflow agent execution ends. */
  outputVariableMapping?: Record<string, string>;
  /** Optional. The environment ID of the Dialogflow agent to be used for the agent execution. If not specified, the draft environment will be used. */
  environmentId?: string;
  /** Optional. Indicates whether to respect the message-level interruption settings configured in the Dialogflow agent. * If false: all response messages from the Dialogflow agent follow the app-level barge-in settings. * If true: only response messages with [`allow_playback_interruption`](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#text) set to true will be interruptable, all other messages follow the app-level barge-in settings. */
  respectResponseInterruptionSettings?: boolean;
  /** Optional. The name of the variable that contains the language code to be used for the Dialogflow session. If unspecified, the default language code of the Dialogflow agent will be used. */
  languageCodeVariable?: string;
  /** Optional. The mapping of the app variables names to the Dialogflow session parameters names to be sent to the Dialogflow agent as input. */
  inputVariableMapping?: Record<string, string>;
  /** Required. The [Dialogflow](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent) agent resource name. Format: `projects/{project}/locations/{location}/agents/{agent}` */
  agent?: string;
}

export const AgentRemoteDialogflowAgent: Schema.Codec<AgentRemoteDialogflowAgent> =
  /*@__PURE__*/ Schema.Struct({
    flowId: Schema.optional(Schema.String),
    outputVariableMapping: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    environmentId: Schema.optional(Schema.String),
    respectResponseInterruptionSettings: Schema.optional(Schema.Boolean),
    languageCodeVariable: Schema.optional(Schema.String),
    inputVariableMapping: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    agent: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentRemoteDialogflowAgent" });

export interface AgentLlmAgent {}

export const AgentLlmAgent: Schema.Codec<AgentLlmAgent> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AgentLlmAgent",
  });

export interface Agent {
  /** Optional. Configurations for the LLM model. */
  modelSettings?: ModelSettings;
  /** Optional. List of toolsets for the agent. */
  toolsets?: ReadonlyArray<AgentAgentToolset>;
  /** Optional. List of child agents in the agent tree. Format: `projects/{project}/locations/{location}/apps/{app}/agents/{agent}` */
  childAgents?: ReadonlyArray<string>;
  /** Identifier. The unique identifier of the agent. Format: `projects/{project}/locations/{location}/apps/{app}/agents/{agent}` */
  name?: string;
  /** Optional. List of available tools for the agent. Format: `projects/{project}/locations/{location}/apps/{app}/tools/{tool}` */
  tools?: ReadonlyArray<string>;
  /** Optional. Agent transfer rules. If multiple rules match, the first one in the list will be used. */
  transferRules?: ReadonlyArray<TransferRule>;
  /** Output only. Timestamp when the agent was created. */
  createTime?: string;
  /** Output only. Timestamp when the agent was last updated. */
  updateTime?: string;
  /** Optional. The callbacks to execute after the tool is invoked. If there are multiple tool invocations, the callback will be executed multiple times. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped. */
  afterToolCallbacks?: ReadonlyArray<Callback>;
  /** Output only. Misconfigurations or errors in the agent that may affect agent quality. */
  validationErrors?: ReadonlyArray<string>;
  /** Optional. List of guardrails for the agent. Format: `projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}` */
  guardrails?: ReadonlyArray<string>;
  /** Optional. The remote [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents) agent to be used for the agent execution. If this field is set, all other agent level properties will be ignored. Note: If the Dialogflow agent is in a different project from the app, you should grant `roles/dialogflow.client` to the CES service agent `service-@gcp-sa-ces.iam.gserviceaccount.com`. */
  remoteDialogflowAgent?: AgentRemoteDialogflowAgent;
  /** Optional. Human-readable description of the agent. */
  description?: string;
  /** Optional. The callbacks to execute after the agent is called. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped. */
  afterAgentCallbacks?: ReadonlyArray<Callback>;
  /** Optional. The callbacks to execute after the model is called. If there are multiple calls to the model, the callback will be executed multiple times. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped. */
  afterModelCallbacks?: ReadonlyArray<Callback>;
  /** Optional. Instructions for the LLM model to guide the agent's behavior. */
  instruction?: string;
  /** Optional. The callbacks to execute before the model is called. If there are multiple calls to the model, the callback will be executed multiple times. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped. */
  beforeModelCallbacks?: ReadonlyArray<Callback>;
  /** Required. Display name of the agent. */
  displayName?: string;
  /** Output only. If the agent is generated by the LLM assistant, this field contains a descriptive summary of the generation. */
  generatedSummary?: string;
  /** Optional. The callbacks to execute before the agent is called. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped. */
  beforeAgentCallbacks?: ReadonlyArray<Callback>;
  /** Optional. The default agent type. */
  llmAgent?: AgentLlmAgent;
  /** Optional. The callbacks to execute before the tool is invoked. If there are multiple tool invocations, the callback will be executed multiple times. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped. */
  beforeToolCallbacks?: ReadonlyArray<Callback>;
  /** Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes. */
  etag?: string;
}

export const Agent: Schema.Codec<Agent> =
  /*@__PURE__*/ Schema.Struct({
    modelSettings: Schema.optional(ModelSettings),
    toolsets: Schema.optional(Schema.Array(AgentAgentToolset)),
    childAgents: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    tools: Schema.optional(Schema.Array(Schema.String)),
    transferRules: Schema.optional(Schema.Array(TransferRule)),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    afterToolCallbacks: Schema.optional(Schema.Array(Callback)),
    validationErrors: Schema.optional(Schema.Array(Schema.String)),
    guardrails: Schema.optional(Schema.Array(Schema.String)),
    remoteDialogflowAgent: Schema.optional(AgentRemoteDialogflowAgent),
    description: Schema.optional(Schema.String),
    afterAgentCallbacks: Schema.optional(Schema.Array(Callback)),
    afterModelCallbacks: Schema.optional(Schema.Array(Callback)),
    instruction: Schema.optional(Schema.String),
    beforeModelCallbacks: Schema.optional(Schema.Array(Callback)),
    displayName: Schema.optional(Schema.String),
    generatedSummary: Schema.optional(Schema.String),
    beforeAgentCallbacks: Schema.optional(Schema.Array(Callback)),
    llmAgent: Schema.optional(AgentLlmAgent),
    beforeToolCallbacks: Schema.optional(Schema.Array(Callback)),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "Agent" });

export interface AppSnapshot {
  /** Optional. List of tools in the app. */
  tools?: ReadonlyArray<Tool>;
  /** Optional. The basic settings for the app. */
  app?: App;
  /** Optional. List of examples in the app. */
  examples?: ReadonlyArray<Example>;
  /** Optional. List of guardrails in the app. */
  guardrails?: ReadonlyArray<Guardrail>;
  /** Optional. List of toolsets in the app. */
  toolsets?: ReadonlyArray<Toolset>;
  /** Optional. List of agents in the app. */
  agents?: ReadonlyArray<Agent>;
}

export const AppSnapshot: Schema.Codec<AppSnapshot> =
  /*@__PURE__*/ Schema.Struct({
    tools: Schema.optional(Schema.Array(Tool)),
    app: Schema.optional(App),
    examples: Schema.optional(Schema.Array(Example)),
    guardrails: Schema.optional(Schema.Array(Guardrail)),
    toolsets: Schema.optional(Schema.Array(Toolset)),
    agents: Schema.optional(Schema.Array(Agent)),
  }).annotate({ identifier: "AppSnapshot" });

export interface ExportAppResponse {
  /** The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to which the app was exported. */
  appUri?: string;
  /** App folder compressed as a zip file. */
  appContent?: string;
}

export const ExportAppResponse: Schema.Codec<ExportAppResponse> =
  /*@__PURE__*/ Schema.Struct({
    appUri: Schema.optional(Schema.String),
    appContent: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExportAppResponse" });

export interface AppVersion {
  /** Output only. Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes. */
  etag?: string;
  /** Output only. Timestamp when the app version was created. */
  createTime?: string;
  /** Identifier. The unique identifier of the app version. Format: `projects/{project}/locations/{location}/apps/{app}/versions/{version}` */
  name?: string;
  /** Optional. The description of the app version. */
  description?: string;
  /** Output only. Email of the user who created the app version. */
  creator?: string;
  /** Optional. The display name of the app version. */
  displayName?: string;
  /** Output only. The snapshot of the app when the version is created. */
  snapshot?: AppSnapshot;
}

export const AppVersion: Schema.Codec<AppVersion> =
  /*@__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    creator: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    snapshot: Schema.optional(AppSnapshot),
  }).annotate({ identifier: "AppVersion" });

export interface EndSession {
  /** Optional. Provides additional information about the end session signal, such as the reason for ending the session. */
  metadata?: Record<string, unknown>;
}

export const EndSession: Schema.Codec<EndSession> =
  /*@__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "EndSession" });

export interface ImportAppRequestImportOptions {
  /** Optional. The strategy to use when resolving conflicts during import. */
  conflictResolutionStrategy?:
    | "CONFLICT_RESOLUTION_STRATEGY_UNSPECIFIED"
    | "REPLACE"
    | "OVERWRITE"
    | (string & {});
}

export const ImportAppRequestImportOptions: Schema.Codec<ImportAppRequestImportOptions> =
  /*@__PURE__*/ Schema.Struct({
    conflictResolutionStrategy: Schema.optional(Schema.String),
  }).annotate({ identifier: "ImportAppRequestImportOptions" });

export interface ListAgentsResponse {
  /** A token that can be sent as ListAgentsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages. */
  nextPageToken?: string;
  /** The list of agents. */
  agents?: ReadonlyArray<Agent>;
}

export const ListAgentsResponse: Schema.Codec<ListAgentsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    agents: Schema.optional(Schema.Array(Agent)),
  }).annotate({ identifier: "ListAgentsResponse" });

export interface LfA2aV1TaskPushNotificationConfig {
  /** Authentication information required to send the notification. */
  authentication?: LfA2aV1AuthenticationInfo;
  /** The push notification configuration details. A unique identifier (e.g. UUID) for this push notification configuration. */
  id?: string;
  /** The ID of the task this configuration is associated with. */
  taskId?: string;
  /** Required. The URL where the notification should be sent. */
  url?: string;
  /** A token unique for this task or session. */
  token?: string;
  /** Optional. Tenant ID. */
  tenant?: string;
}

export const LfA2aV1TaskPushNotificationConfig: Schema.Codec<LfA2aV1TaskPushNotificationConfig> =
  /*@__PURE__*/ Schema.Struct({
    authentication: Schema.optional(LfA2aV1AuthenticationInfo),
    id: Schema.optional(Schema.String),
    taskId: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    token: Schema.optional(Schema.String),
    tenant: Schema.optional(Schema.String),
  }).annotate({ identifier: "LfA2aV1TaskPushNotificationConfig" });

export interface LfA2aV1Message {
  /** Required. Identifies the sender of the message. */
  role?: "ROLE_UNSPECIFIED" | "ROLE_USER" | "ROLE_AGENT" | (string & {});
  /** The URIs of extensions that are present or contributed to this Message. */
  extensions?: ReadonlyArray<string>;
  /** A list of task IDs that this message references for additional context. */
  referenceTaskIds?: ReadonlyArray<string>;
  /** Required. The unique identifier (e.g. UUID) of the message. This is created by the message creator. */
  messageId?: string;
  /** Optional. The task id of the message. If set, the message will be associated with the given task. */
  taskId?: string;
  /** Optional. The context id of the message. If set, the message will be associated with the given context. */
  contextId?: string;
  /** Required. Parts is the container of the message content. */
  parts?: ReadonlyArray<LfA2aV1Part>;
  /** Optional. Any metadata to provide along with the message. */
  metadata?: Record<string, unknown>;
}

export const LfA2aV1Message: Schema.Codec<LfA2aV1Message> =
  /*@__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
    extensions: Schema.optional(Schema.Array(Schema.String)),
    referenceTaskIds: Schema.optional(Schema.Array(Schema.String)),
    messageId: Schema.optional(Schema.String),
    taskId: Schema.optional(Schema.String),
    contextId: Schema.optional(Schema.String),
    parts: Schema.optional(Schema.Array(LfA2aV1Part)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "LfA2aV1Message" });

export interface LfA2aV1TaskStatus {
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
  /** ISO 8601 Timestamp when the status was recorded. Example: "2023-10-27T10:00:00Z" */
  timestamp?: string;
  /** A message associated with the status. */
  message?: LfA2aV1Message;
}

export const LfA2aV1TaskStatus: Schema.Codec<LfA2aV1TaskStatus> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.String),
    message: Schema.optional(LfA2aV1Message),
  }).annotate({ identifier: "LfA2aV1TaskStatus" });

export interface LfA2aV1Artifact {
  /** A human readable name for the artifact. */
  name?: string;
  /** Optional. A human readable description of the artifact. */
  description?: string;
  /** The URIs of extensions that are present or contributed to this Artifact. */
  extensions?: ReadonlyArray<string>;
  /** Required. Unique identifier (e.g. UUID) for the artifact. It must be unique within a task. */
  artifactId?: string;
  /** Required. The content of the artifact. Must contain at least one part. */
  parts?: ReadonlyArray<LfA2aV1Part>;
  /** Optional. Metadata included with the artifact. */
  metadata?: Record<string, unknown>;
}

export const LfA2aV1Artifact: Schema.Codec<LfA2aV1Artifact> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    extensions: Schema.optional(Schema.Array(Schema.String)),
    artifactId: Schema.optional(Schema.String),
    parts: Schema.optional(Schema.Array(LfA2aV1Part)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "LfA2aV1Artifact" });

export interface LfA2aV1Task {
  /** Required. The current status of a `Task`, including `state` and a `message`. */
  status?: LfA2aV1TaskStatus;
  /** A set of output artifacts for a `Task`. */
  artifacts?: ReadonlyArray<LfA2aV1Artifact>;
  /** protolint:disable REPEATED_FIELD_NAMES_PLURALIZED The history of interactions from a `Task`. */
  history?: ReadonlyArray<LfA2aV1Message>;
  /** Required. Unique identifier (e.g. UUID) for the task, generated by the server for a new task. */
  id?: string;
  /** Unique identifier (e.g. UUID) for the contextual collection of interactions (tasks and messages). */
  contextId?: string;
  /** protolint:enable REPEATED_FIELD_NAMES_PLURALIZED A key/value object to store custom metadata about a task. */
  metadata?: Record<string, unknown>;
}

export const LfA2aV1Task: Schema.Codec<LfA2aV1Task> =
  /*@__PURE__*/ Schema.Struct({
    status: Schema.optional(LfA2aV1TaskStatus),
    artifacts: Schema.optional(Schema.Array(LfA2aV1Artifact)),
    history: Schema.optional(Schema.Array(LfA2aV1Message)),
    id: Schema.optional(Schema.String),
    contextId: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "LfA2aV1Task" });

export interface LfA2aV1SendMessageResponse {
  /** The task created or updated by the message. */
  task?: LfA2aV1Task;
  /** A message from the agent. */
  message?: LfA2aV1Message;
}

export const LfA2aV1SendMessageResponse: Schema.Codec<LfA2aV1SendMessageResponse> =
  /*@__PURE__*/ Schema.Struct({
    task: Schema.optional(LfA2aV1Task),
    message: Schema.optional(LfA2aV1Message),
  }).annotate({ identifier: "LfA2aV1SendMessageResponse" });

export interface Location {
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
}

export const Location: Schema.Codec<Location> =
  /*@__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Location" });

export interface ImportAppRequest {
  /** Optional. Flag for overriding the app lock during import. If set to true, the import process will ignore the app lock. */
  ignoreAppLock?: boolean;
  /** The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI from which to import app. The format of this URI must be `gs:///`. */
  gcsUri?: string;
  /** Optional. Options governing the import process for the app. */
  importOptions?: ImportAppRequestImportOptions;
  /** Raw bytes representing the compressed zip file with the app folder structure. */
  appContent?: string;
  /** Optional. The display name of the app to import. * If the app is created on import, and the display name is specified, the imported app will use this display name. If a conflict is detected with an existing app, a timestamp will be appended to the display name to make it unique. * If the app is a reimport, this field should not be set. Providing a display name during reimport will result in an INVALID_ARGUMENT error. */
  displayName?: string;
  /** Optional. The ID to use for the imported app. * If not specified, a unique ID will be automatically assigned for the app. * Otherwise, the imported app will use this ID as the final component of its resource name. If an app with the same ID already exists at the specified location in the project, the content of the existing app will be replaced. */
  appId?: string;
}

export const ImportAppRequest: Schema.Codec<ImportAppRequest> =
  /*@__PURE__*/ Schema.Struct({
    ignoreAppLock: Schema.optional(Schema.Boolean),
    gcsUri: Schema.optional(Schema.String),
    importOptions: Schema.optional(ImportAppRequestImportOptions),
    appContent: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    appId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ImportAppRequest" });

export interface ExecuteToolResponse {
  /** The tool execution result in JSON object format. Use "output" key to specify tool response and "error" key to specify error details (if any). If "output" and "error" keys are not specified, then whole "response" is treated as tool execution result. */
  response?: Record<string, unknown>;
  /** The toolset tool that got executed. */
  toolsetTool?: ToolsetTool;
  /** The variable values at the end of the tool execution. */
  variables?: Record<string, unknown>;
  /** The name of the tool that got executed. Format: `projects/{project}/locations/{location}/apps/{app}/tools/{tool}` */
  tool?: string;
}

export const ExecuteToolResponse: Schema.Codec<ExecuteToolResponse> =
  /*@__PURE__*/ Schema.Struct({
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    toolsetTool: Schema.optional(ToolsetTool),
    variables: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    tool: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExecuteToolResponse" });

export interface RetrieveToolsRequest {
  /** Optional. The identifiers of the tools to retrieve from the toolset. If empty, all tools in the toolset will be returned. */
  toolIds?: ReadonlyArray<string>;
  /** Optional. If true, the returned tools will contain raw descriptions and schemas directly from the server, bypassing any stored persistence configurations (overrides/snapshots). */
  bypassPersistenceConfig?: boolean;
}

export const RetrieveToolsRequest: Schema.Codec<RetrieveToolsRequest> =
  /*@__PURE__*/ Schema.Struct({
    toolIds: Schema.optional(Schema.Array(Schema.String)),
    bypassPersistenceConfig: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "RetrieveToolsRequest" });

export interface ListAppVersionsResponse {
  /** The list of app versions. */
  appVersions?: ReadonlyArray<AppVersion>;
  /** A token that can be sent as ListAppVersionsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListAppVersionsResponse: Schema.Codec<ListAppVersionsResponse> =
  /*@__PURE__*/ Schema.Struct({
    appVersions: Schema.optional(Schema.Array(AppVersion)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAppVersionsResponse" });

export interface LfA2aV1SendMessageConfiguration {
  /** If `true`, the operation returns immediately after creating the task, even if processing is still in progress. If `false` (default), the operation MUST wait until the task reaches a terminal (`COMPLETED`, `FAILED`, `CANCELED`, `REJECTED`) or interrupted (`INPUT_REQUIRED`, `AUTH_REQUIRED`) state before returning. */
  returnImmediately?: boolean;
  /** Configuration for the agent to send push notifications for task updates. Task id should be empty when sending this configuration in a `SendMessage` request. */
  taskPushNotificationConfig?: LfA2aV1TaskPushNotificationConfig;
  /** The maximum number of most recent messages from the task's history to retrieve in the response. An unset value means the client does not impose any limit. A value of zero is a request to not include any messages. The server MUST NOT return more messages than the provided value, but MAY apply a lower limit. */
  historyLength?: number;
  /** A list of media types the client is prepared to accept for response parts. Agents SHOULD use this to tailor their output. */
  acceptedOutputModes?: ReadonlyArray<string>;
}

export const LfA2aV1SendMessageConfiguration: Schema.Codec<LfA2aV1SendMessageConfiguration> =
  /*@__PURE__*/ Schema.Struct({
    returnImmediately: Schema.optional(Schema.Boolean),
    taskPushNotificationConfig: Schema.optional(
      LfA2aV1TaskPushNotificationConfig,
    ),
    historyLength: Schema.optional(Schema.Number),
    acceptedOutputModes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "LfA2aV1SendMessageConfiguration" });

export interface LfA2aV1SendMessageRequest {
  /** A flexible key-value map for passing additional context or parameters. */
  metadata?: Record<string, unknown>;
  /** Configuration for the send request. */
  configuration?: LfA2aV1SendMessageConfiguration;
  /** Required. The message to send to the agent. */
  message?: LfA2aV1Message;
}

export const LfA2aV1SendMessageRequest: Schema.Codec<LfA2aV1SendMessageRequest> =
  /*@__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    configuration: Schema.optional(LfA2aV1SendMessageConfiguration),
    message: Schema.optional(LfA2aV1Message),
  }).annotate({ identifier: "LfA2aV1SendMessageRequest" });

export interface EndpointControlPolicy {
  /** Optional. The scope in which this policy's allowed_origins list is enforced. */
  enforcementScope?:
    | "ENFORCEMENT_SCOPE_UNSPECIFIED"
    | "VPCSC_ONLY"
    | "ALWAYS"
    | (string & {});
  /** Optional. The allowed HTTP(s) origins that tools in the App are able to directly call. The enforcement depends on the value of enforcement_scope and the VPC-SC status of the project. If a port number is not provided, all ports will be allowed. Otherwise, the port number must match exactly. For example, "https://example.com" will match "https://example.com:443" and any other port. "https://example.com:443" will only match "https://example.com:443". */
  allowedOrigins?: ReadonlyArray<string>;
}

export const EndpointControlPolicy: Schema.Codec<EndpointControlPolicy> =
  /*@__PURE__*/ Schema.Struct({
    enforcementScope: Schema.optional(Schema.String),
    allowedOrigins: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "EndpointControlPolicy" });

export interface SecuritySettings {
  /** Output only. Last update time of the security settings. */
  updateTime?: string;
  /** Output only. Etag of the security settings. */
  etag?: string;
  /** Output only. Create time of the security settings. */
  createTime?: string;
  /** Optional. Endpoint control related settings. */
  endpointControlPolicy?: EndpointControlPolicy;
  /** Identifier. The unique identifier of the security settings. Format: `projects/{project}/locations/{location}/securitySettings` */
  name?: string;
}

export const SecuritySettings: Schema.Codec<SecuritySettings> =
  /*@__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    endpointControlPolicy: Schema.optional(EndpointControlPolicy),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecuritySettings" });

export interface CitationsCitedChunk {
  /** URI used for citation. */
  uri?: string;
  /** Title of the cited document. */
  title?: string;
  /** Text used for citation. */
  text?: string;
}

export const CitationsCitedChunk: Schema.Codec<CitationsCitedChunk> =
  /*@__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "CitationsCitedChunk" });

export interface ImportAppResponse {
  /** The resource name of the app that was imported. */
  name?: string;
  /** Warning messages generated during the import process. If errors occur for specific resources, they will not be included in the imported app and the error will be mentioned here. */
  warnings?: ReadonlyArray<string>;
}

export const ImportAppResponse: Schema.Codec<ImportAppResponse> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    warnings: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ImportAppResponse" });

export interface ConversationTurn {
  /** Optional. List of messages in the conversation turn, including user input, agent responses and intermediate events during the processing. */
  messages?: ReadonlyArray<Message>;
  /** Optional. The root span of the action processing. */
  rootSpan?: Span;
}

export const ConversationTurn: Schema.Codec<ConversationTurn> =
  /*@__PURE__*/ Schema.Struct({
    messages: Schema.optional(Schema.Array(Message)),
    rootSpan: Schema.optional(Span),
  }).annotate({ identifier: "ConversationTurn" });

export interface OperationMetadata {
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have google.longrunning.Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
}

export const OperationMetadata: Schema.Codec<OperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    statusMessage: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface ExecuteToolRequest {
  /** Optional. The input parameters and values for the tool in JSON object format. */
  args?: Record<string, unknown>;
  /** Optional. The variables that are available for the tool execution. */
  variables?: Record<string, unknown>;
  /** Optional. Mock configuration for the tool execution. If this field is set, tools that call other tools will be mocked based on the provided patterns and responses. */
  mockConfig?: MockConfig;
  /** Optional. The name of the tool to execute. Format: projects/{project}/locations/{location}/apps/{app}/tools/{tool} */
  tool?: string;
  /** Optional. The [ToolCallContext](https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/tool/python#environment for details) to be passed to the Python tool. */
  context?: Record<string, unknown>;
  /** Optional. The toolset tool to execute. Only one tool should match the predicate from the toolset. Otherwise, an error will be returned. */
  toolsetTool?: ToolsetTool;
}

export const ExecuteToolRequest: Schema.Codec<ExecuteToolRequest> =
  /*@__PURE__*/ Schema.Struct({
    args: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    variables: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    mockConfig: Schema.optional(MockConfig),
    tool: Schema.optional(Schema.String),
    context: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    toolsetTool: Schema.optional(ToolsetTool),
  }).annotate({ identifier: "ExecuteToolRequest" });

export interface ToolCalls {
  /** Optional. The list of tool calls to execute. */
  toolCalls?: ReadonlyArray<ToolCall>;
}

export const ToolCalls: Schema.Codec<ToolCalls> =
  /*@__PURE__*/ Schema.Struct({
    toolCalls: Schema.optional(Schema.Array(ToolCall)),
  }).annotate({ identifier: "ToolCalls" });

export interface ListToolsetsResponse {
  /** The list of toolsets. */
  toolsets?: ReadonlyArray<Toolset>;
  /** A token that can be sent as ListToolsetsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListToolsetsResponse: Schema.Codec<ListToolsetsResponse> =
  /*@__PURE__*/ Schema.Struct({
    toolsets: Schema.optional(Schema.Array(Toolset)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListToolsetsResponse" });

export interface Conversation {
  /** Output only. Indicate the source of the conversation. */
  source?:
    | "SOURCE_UNSPECIFIED"
    | "LIVE"
    | "SIMULATOR"
    | "EVAL"
    | "AGENT_TOOL"
    | (string & {});
  /** Output only. The deployment of the app used for processing the conversation. Format: `projects/{project}/locations/{location}/apps/{app}/deployments/{deployment}` */
  deployment?: string;
  /** Output only. The version of the app used for processing the conversation. Format: `projects/{project}/locations/{location}/apps/{app}/versions/{version}` */
  appVersion?: string;
  /** Output only. Timestamp when the conversation was completed. */
  endTime?: string;
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
  /** Output only. The agent that initially handles the conversation. If not specified, the conversation is handled by the root agent. Format: `projects/{project}/locations/{location}/apps/{app}/agents/{agent}` */
  entryAgent?: string;
  /** Output only. Timestamp when the conversation was created. */
  startTime?: string;
  /** Deprecated. Use turns instead. */
  messages?: ReadonlyArray<Message>;
  /** Required. The turns in the conversation. */
  turns?: ReadonlyArray<ConversationTurn>;
  /** Identifier. The unique identifier of the conversation. Format: `projects/{project}/locations/{location}/apps/{app}/conversations/{conversation}` */
  name?: string;
  /** Output only. The number of turns in the conversation. */
  turnCount?: number;
  /** Output only. The language code of the conversation. */
  languageCode?: string;
  /** DEPRECATED. Please use input_types instead. */
  channelType?:
    | "CHANNEL_TYPE_UNSPECIFIED"
    | "TEXT"
    | "AUDIO"
    | "MULTIMODAL"
    | (string & {});
}

export const Conversation: Schema.Codec<Conversation> =
  /*@__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
    deployment: Schema.optional(Schema.String),
    appVersion: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    inputTypes: Schema.optional(Schema.Array(Schema.String)),
    entryAgent: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    messages: Schema.optional(Schema.Array(Message)),
    turns: Schema.optional(Schema.Array(ConversationTurn)),
    name: Schema.optional(Schema.String),
    turnCount: Schema.optional(Schema.Number),
    languageCode: Schema.optional(Schema.String),
    channelType: Schema.optional(Schema.String),
  }).annotate({ identifier: "Conversation" });

export interface ListConversationsResponse {
  /** The list of conversations. */
  conversations?: ReadonlyArray<Conversation>;
  /** A token that can be sent as ListConversationsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListConversationsResponse: Schema.Codec<ListConversationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    conversations: Schema.optional(Schema.Array(Conversation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListConversationsResponse" });

export interface Changelog {
  /** Output only. The time when the change was made. */
  createTime?: string;
  /** Output only. The monotonically increasing sequence number of the changelog. */
  sequenceNumber?: string;
  /** Output only. Display name of the change. It typically should be the display name of the resource that was changed. */
  displayName?: string;
  /** Output only. The resource that was changed. */
  resource?: string;
  /** Output only. Email address of the change author. */
  author?: string;
  /** Output only. The dependent resources that were changed. */
  dependentResources?: ReadonlyArray<Record<string, unknown>>;
  /** Identifier. The unique identifier of the changelog. Format: `projects/{project}/locations/{location}/apps/{app}/changelogs/{changelog}` */
  name?: string;
  /** Output only. The type of the resource that was changed. */
  resourceType?: string;
  /** Output only. The original resource before the change. */
  originalResource?: Record<string, unknown>;
  /** Output only. The new resource after the change. */
  newResource?: Record<string, unknown>;
  /** Output only. The action that was performed on the resource. */
  action?: string;
  /** Output only. Description of the change. which typically captures the changed fields in the resource. */
  description?: string;
}

export const Changelog: Schema.Codec<Changelog> =
  /*@__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    sequenceNumber: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
    author: Schema.optional(Schema.String),
    dependentResources: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    name: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
    originalResource: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    newResource: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    action: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "Changelog" });

export interface ListChangelogsResponse {
  /** A token that can be sent as ListChangelogsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages. */
  nextPageToken?: string;
  /** The list of changelogs. */
  changelogs?: ReadonlyArray<Changelog>;
}

export const ListChangelogsResponse: Schema.Codec<ListChangelogsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    changelogs: Schema.optional(Schema.Array(Changelog)),
  }).annotate({ identifier: "ListChangelogsResponse" });

export interface ListExamplesResponse {
  /** A token that can be sent as ListExamplesRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages. */
  nextPageToken?: string;
  /** The list of examples. */
  examples?: ReadonlyArray<Example>;
}

export const ListExamplesResponse: Schema.Codec<ListExamplesResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    examples: Schema.optional(Schema.Array(Example)),
  }).annotate({ identifier: "ListExamplesResponse" });

export interface WebSearchQuery {
  /** The search query text. */
  query?: string;
  /** The URI to the Google Search results page for the query. */
  uri?: string;
}

export const WebSearchQuery: Schema.Codec<WebSearchQuery> =
  /*@__PURE__*/ Schema.Struct({
    query: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "WebSearchQuery" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Codec<CancelOperationRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface SessionOutputDiagnosticInfo {
  /** A trace of the entire request processing, represented as a root span. This span can contain nested child spans for specific operations. */
  rootSpan?: Span;
  /** List of the messages that happened during the processing. */
  messages?: ReadonlyArray<Message>;
}

export const SessionOutputDiagnosticInfo: Schema.Codec<SessionOutputDiagnosticInfo> =
  /*@__PURE__*/ Schema.Struct({
    rootSpan: Schema.optional(Span),
    messages: Schema.optional(Schema.Array(Message)),
  }).annotate({ identifier: "SessionOutputDiagnosticInfo" });

export interface Citations {
  /** List of cited pieces of information. */
  citedChunks?: ReadonlyArray<CitationsCitedChunk>;
}

export const Citations: Schema.Codec<Citations> =
  /*@__PURE__*/ Schema.Struct({
    citedChunks: Schema.optional(Schema.Array(CitationsCitedChunk)),
  }).annotate({ identifier: "Citations" });

export interface GoogleSearchSuggestions {
  /** List of queries used to perform the google search along with the search result URIs forming the search suggestions. */
  webSearchQueries?: ReadonlyArray<WebSearchQuery>;
  /** Compliant HTML and CSS styling for search suggestions. The provided HTML and CSS automatically adapts to your device settings, displaying in either light or dark mode indicated by `@media(prefers-color-scheme)`. */
  htmls?: ReadonlyArray<string>;
}

export const GoogleSearchSuggestions: Schema.Codec<GoogleSearchSuggestions> =
  /*@__PURE__*/ Schema.Struct({
    webSearchQueries: Schema.optional(Schema.Array(WebSearchQuery)),
    htmls: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleSearchSuggestions" });

export interface SessionOutput {
  /** Indicates the session has ended. */
  endSession?: EndSession;
  /** Citations that provide the source information for the agent's generated text. */
  citations?: Citations;
  /** Optional. Diagnostic information contains execution details during the processing of the input. Only populated in the last SessionOutput (with `turn_completed=true`) for each turn. */
  diagnosticInfo?: SessionOutputDiagnosticInfo;
  /** Output text from the CES agent. */
  text?: string;
  /** Request for the client to execute the tools. */
  toolCalls?: ToolCalls;
  /** Custom payload with structured output from the CES agent. */
  payload?: Record<string, unknown>;
  /** Output audio from the CES agent. */
  audio?: string;
  /** Indicates the sequential order of conversation turn to which this output belongs to, starting from 1. */
  turnIndex?: number;
  /** If true, the CES agent has detected the end of the current conversation turn and will provide no further output for this turn. */
  turnCompleted?: boolean;
  /** The suggestions returned from Google Search as a result of invoking the GoogleSearchTool. */
  googleSearchSuggestions?: GoogleSearchSuggestions;
}

export const SessionOutput: Schema.Codec<SessionOutput> =
  /*@__PURE__*/ Schema.Struct({
    endSession: Schema.optional(EndSession),
    citations: Schema.optional(Citations),
    diagnosticInfo: Schema.optional(SessionOutputDiagnosticInfo),
    text: Schema.optional(Schema.String),
    toolCalls: Schema.optional(ToolCalls),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    audio: Schema.optional(Schema.String),
    turnIndex: Schema.optional(Schema.Number),
    turnCompleted: Schema.optional(Schema.Boolean),
    googleSearchSuggestions: Schema.optional(GoogleSearchSuggestions),
  }).annotate({ identifier: "SessionOutput" });

export interface ExportAppRequest {
  /** Required. The format to export the app in. */
  exportFormat?: "EXPORT_FORMAT_UNSPECIFIED" | "JSON" | "YAML" | (string & {});
  /** Optional. The resource name of the app version to export. Format: `projects/{project}/locations/{location}/apps/{app}/versions/{version}`. */
  appVersion?: string;
  /** Optional. The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to which to export the app. The format of this URI must be `gs:///`. The exported app archive will be written directly to the specified GCS object. */
  gcsUri?: string;
}

export const ExportAppRequest: Schema.Codec<ExportAppRequest> =
  /*@__PURE__*/ Schema.Struct({
    exportFormat: Schema.optional(Schema.String),
    appVersion: Schema.optional(Schema.String),
    gcsUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExportAppRequest" });

export interface GenerateChatTokenRequest {
  /** Optional. The reCAPTCHA token generated by the client-side chat widget. */
  recaptchaToken?: string;
  /** Optional. Indicates if live handoff is enabled for the session. */
  liveHandoffEnabled?: boolean;
  /** Required. The deployment of the app to use for the session. Format: projects/{project}/locations/{location}/apps/{app}/deployments/{deployment} */
  deployment?: string;
}

export const GenerateChatTokenRequest: Schema.Codec<GenerateChatTokenRequest> =
  /*@__PURE__*/ Schema.Struct({
    recaptchaToken: Schema.optional(Schema.String),
    liveHandoffEnabled: Schema.optional(Schema.Boolean),
    deployment: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerateChatTokenRequest" });

export interface GenerateChatTokenResponse {
  /** The session scoped token for chat widget to authenticate with Session APIs. */
  chatToken?: string;
  /** The time at which the chat token expires. */
  expireTime?: string;
}

export const GenerateChatTokenResponse: Schema.Codec<GenerateChatTokenResponse> =
  /*@__PURE__*/ Schema.Struct({
    chatToken: Schema.optional(Schema.String),
    expireTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerateChatTokenResponse" });

export interface Empty {}

export const Empty: Schema.Codec<Empty> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface ListLocationsResponse {
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListLocationsResponse: Schema.Codec<ListLocationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    locations: Schema.optional(Schema.Array(Location)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListLocationsResponse" });

export interface RetrieveToolSchemaResponse {
  /** The name of the tool that the schema is for. Format: `projects/{project}/locations/{location}/apps/{app}/tools/{tool}` */
  tool?: string;
  /** The schema of the tool input parameters. */
  inputSchema?: Ces_Schema;
  /** The toolset tool that the schema is for. */
  toolsetTool?: ToolsetTool;
  /** The schema of the tool output parameters. */
  outputSchema?: Ces_Schema;
}

export const RetrieveToolSchemaResponse: Schema.Codec<RetrieveToolSchemaResponse> =
  /*@__PURE__*/ Schema.Struct({
    tool: Schema.optional(Schema.String),
    inputSchema: Schema.optional(Ces_Schema),
    toolsetTool: Schema.optional(ToolsetTool),
    outputSchema: Schema.optional(Ces_Schema),
  }).annotate({ identifier: "RetrieveToolSchemaResponse" });

export interface Operation {
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
}

export const Operation: Schema.Codec<Operation> =
  /*@__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(Status),
    done: Schema.optional(Schema.Boolean),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Operation" });

export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const ListOperationsResponse: Schema.Codec<ListOperationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(Operation)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface ListDeploymentsResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** The list of deployments. */
  deployments?: ReadonlyArray<Deployment>;
}

export const ListDeploymentsResponse: Schema.Codec<ListDeploymentsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    deployments: Schema.optional(Schema.Array(Deployment)),
  }).annotate({ identifier: "ListDeploymentsResponse" });

export interface RunSessionResponse {
  /** Outputs for the session. */
  outputs?: ReadonlyArray<SessionOutput>;
}

export const RunSessionResponse: Schema.Codec<RunSessionResponse> =
  /*@__PURE__*/ Schema.Struct({
    outputs: Schema.optional(Schema.Array(SessionOutput)),
  }).annotate({ identifier: "RunSessionResponse" });

export interface ListToolsResponse {
  /** The list of tools. */
  tools?: ReadonlyArray<Tool>;
  /** A token that can be sent as ListToolsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListToolsResponse: Schema.Codec<ListToolsResponse> =
  /*@__PURE__*/ Schema.Struct({
    tools: Schema.optional(Schema.Array(Tool)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListToolsResponse" });

export interface ListGuardrailsResponse {
  /** The list of guardrails. */
  guardrails?: ReadonlyArray<Guardrail>;
  /** A token that can be sent as ListGuardrailsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListGuardrailsResponse: Schema.Codec<ListGuardrailsResponse> =
  /*@__PURE__*/ Schema.Struct({
    guardrails: Schema.optional(Schema.Array(Guardrail)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListGuardrailsResponse" });

export interface RetrieveToolSchemaRequest {
  /** Optional. The name of the tool to retrieve the schema for. Format: projects/{project}/locations/{location}/apps/{app}/tools/{tool} */
  tool?: string;
  /** Optional. The toolset tool to retrieve the schema for. Only one tool should match the predicate from the toolset. Otherwise, an error will be returned. */
  toolsetTool?: ToolsetTool;
}

export const RetrieveToolSchemaRequest: Schema.Codec<RetrieveToolSchemaRequest> =
  /*@__PURE__*/ Schema.Struct({
    tool: Schema.optional(Schema.String),
    toolsetTool: Schema.optional(ToolsetTool),
  }).annotate({ identifier: "RetrieveToolSchemaRequest" });

export interface RestoreAppVersionRequest {}

export const RestoreAppVersionRequest: Schema.Codec<RestoreAppVersionRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RestoreAppVersionRequest",
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

export interface GetProjectsLocationsRequest {
  /** Resource name for the location. */
  name: string;
}

export const GetProjectsLocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsRequest>;

export type GetProjectsLocationsResponse = Location;
export const GetProjectsLocationsResponse = /*@__PURE__*/ Location;

export type GetProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Gets information about a location. */
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

export interface ListProjectsLocationsRequest {
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse = ListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ ListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
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

export interface DeleteProjectsLocationsAppsRequest {
  /** Required. The resource name of the app to delete. */
  name: string;
  /** Optional. The current etag of the app. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the app, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
}

export const DeleteProjectsLocationsAppsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAppsRequest>;

export type DeleteProjectsLocationsAppsResponse = Operation;
export const DeleteProjectsLocationsAppsResponse = /*@__PURE__*/ Operation;

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
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAppsRequest,
  output: DeleteProjectsLocationsAppsResponse,
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
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    appId: Schema.optional(Schema.String).pipe(T.HttpQuery("appId")),
    body: Schema.optional(App).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/apps", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAppsRequest>;

export type CreateProjectsLocationsAppsResponse = Operation;
export const CreateProjectsLocationsAppsResponse = /*@__PURE__*/ Operation;

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
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAppsRequest,
  output: CreateProjectsLocationsAppsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAppsRequest {
  /** Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated. */
  updateMask?: string;
  /** Identifier. The unique identifier of the app. Format: `projects/{project}/locations/{location}/apps/{app}` */
  name: string;
  /** Request body */
  body?: App;
}

export const PatchProjectsLocationsAppsRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(App).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsAppsRequest>;

export type PatchProjectsLocationsAppsResponse = App;
export const PatchProjectsLocationsAppsResponse = /*@__PURE__*/ App;

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
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAppsRequest,
  output: PatchProjectsLocationsAppsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAppsRequest {
  /** Optional. The next_page_token value returned from a previous list AgentService.ListApps call. */
  pageToken?: string;
  /** Required. The resource name of the location to list apps from. */
  parent: string;
  /** Optional. Filter to be applied when listing the apps. See https://google.aip.dev/160 for more details. */
  filter?: string;
  /** Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsAppsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/apps" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAppsRequest>;

export type ListProjectsLocationsAppsResponse = ListAppsResponse;
export const ListProjectsLocationsAppsResponse = /*@__PURE__*/ ListAppsResponse;

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
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAppsRequest,
  output: ListProjectsLocationsAppsResponse,
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
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAppsRequest>;

export type GetProjectsLocationsAppsResponse = App;
export const GetProjectsLocationsAppsResponse = /*@__PURE__*/ App;

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
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAppsRequest,
  output: GetProjectsLocationsAppsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ImportAppProjectsLocationsAppsRequest {
  /** Required. The parent resource name with the location of the app to import. */
  parent: string;
  /** Request body */
  body?: ImportAppRequest;
}

export const ImportAppProjectsLocationsAppsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ImportAppRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/apps:importApp",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ImportAppProjectsLocationsAppsRequest>;

export type ImportAppProjectsLocationsAppsResponse = Operation;
export const ImportAppProjectsLocationsAppsResponse = /*@__PURE__*/ Operation;

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
> = /*@__PURE__*/ API.make(() => ({
  input: ImportAppProjectsLocationsAppsRequest,
  output: ImportAppProjectsLocationsAppsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExecuteToolProjectsLocationsAppsRequest {
  /** Required. The resource name of the app which the tool/toolset belongs to. Format: `projects/{project}/locations/{location}/apps/{app}` */
  parent: string;
  /** Request body */
  body?: ExecuteToolRequest;
}

export const ExecuteToolProjectsLocationsAppsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ExecuteToolRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}:executeTool", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<ExecuteToolProjectsLocationsAppsRequest>;

export type ExecuteToolProjectsLocationsAppsResponse = ExecuteToolResponse;
export const ExecuteToolProjectsLocationsAppsResponse =
  /*@__PURE__*/ ExecuteToolResponse;

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
> = /*@__PURE__*/ API.make(() => ({
  input: ExecuteToolProjectsLocationsAppsRequest,
  output: ExecuteToolProjectsLocationsAppsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExportAppProjectsLocationsAppsRequest {
  /** Required. The resource name of the app to export. */
  name: string;
  /** Request body */
  body?: ExportAppRequest;
}

export const ExportAppProjectsLocationsAppsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ExportAppRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:exportApp", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<ExportAppProjectsLocationsAppsRequest>;

export type ExportAppProjectsLocationsAppsResponse = Operation;
export const ExportAppProjectsLocationsAppsResponse = /*@__PURE__*/ Operation;

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
> = /*@__PURE__*/ API.make(() => ({
  input: ExportAppProjectsLocationsAppsRequest,
  output: ExportAppProjectsLocationsAppsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RetrieveToolSchemaProjectsLocationsAppsRequest {
  /** Required. The resource name of the app which the tool/toolset belongs to. Format: `projects/{project}/locations/{location}/apps/{app}` */
  parent: string;
  /** Request body */
  body?: RetrieveToolSchemaRequest;
}

export const RetrieveToolSchemaProjectsLocationsAppsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(RetrieveToolSchemaRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}:retrieveToolSchema",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<RetrieveToolSchemaProjectsLocationsAppsRequest>;

export type RetrieveToolSchemaProjectsLocationsAppsResponse =
  RetrieveToolSchemaResponse;
export const RetrieveToolSchemaProjectsLocationsAppsResponse =
  /*@__PURE__*/ RetrieveToolSchemaResponse;

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
> = /*@__PURE__*/ API.make(() => ({
  input: RetrieveToolSchemaProjectsLocationsAppsRequest,
  output: RetrieveToolSchemaProjectsLocationsAppsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAppsToolsRequest {
  /** Optional. The next_page_token value returned from a previous list AgentService.ListTools call. */
  pageToken?: string;
  /** Required. The resource name of the app to list tools from. */
  parent: string;
  /** Optional. Filter to be applied when listing the tools. Use "include_system_tools=true" to include system tools in the response. See https://google.aip.dev/160 for more details. */
  filter?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
}

export const ListProjectsLocationsAppsToolsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/tools" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAppsToolsRequest>;

export type ListProjectsLocationsAppsToolsResponse = ListToolsResponse;
export const ListProjectsLocationsAppsToolsResponse =
  /*@__PURE__*/ ListToolsResponse;

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
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAppsToolsRequest,
  output: ListProjectsLocationsAppsToolsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
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
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    toolId: Schema.optional(Schema.String).pipe(T.HttpQuery("toolId")),
    body: Schema.optional(Tool).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/tools", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAppsToolsRequest>;

export type CreateProjectsLocationsAppsToolsResponse = Tool;
export const CreateProjectsLocationsAppsToolsResponse = /*@__PURE__*/ Tool;

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
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAppsToolsRequest,
  output: CreateProjectsLocationsAppsToolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAppsToolsRequest {
  /** Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated. */
  updateMask?: string;
  /** Identifier. The resource name of the tool. Format: * `projects/{project}/locations/{location}/apps/{app}/tools/{tool}` for standalone tools. * `projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}/tools/{tool}` for tools retrieved from a toolset. These tools are dynamic and output-only; they cannot be referenced directly where a tool is expected. */
  name: string;
  /** Request body */
  body?: Tool;
}

export const PatchProjectsLocationsAppsToolsRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Tool).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsAppsToolsRequest>;

export type PatchProjectsLocationsAppsToolsResponse = Tool;
export const PatchProjectsLocationsAppsToolsResponse = /*@__PURE__*/ Tool;

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
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAppsToolsRequest,
  output: PatchProjectsLocationsAppsToolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAppsToolsRequest {
  /** Optional. Indicates whether to forcefully delete the tool, even if it is still referenced by agents/examples. * If `force = false`, the deletion will fail if any agents still reference the tool. * If `force = true`, all existing references from agents will be removed and the tool will be deleted. */
  force?: boolean;
  /** Required. The resource name of the tool to delete. */
  name: string;
  /** Optional. The current etag of the tool. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the tool, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
}

export const DeleteProjectsLocationsAppsToolsRequest =
  /*@__PURE__*/ Schema.Struct({
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAppsToolsRequest>;

export type DeleteProjectsLocationsAppsToolsResponse = Empty;
export const DeleteProjectsLocationsAppsToolsResponse = /*@__PURE__*/ Empty;

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
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAppsToolsRequest,
  output: DeleteProjectsLocationsAppsToolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAppsToolsRequest {
  /** Required. The resource name of the tool to retrieve. */
  name: string;
}

export const GetProjectsLocationsAppsToolsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAppsToolsRequest>;

export type GetProjectsLocationsAppsToolsResponse = Tool;
export const GetProjectsLocationsAppsToolsResponse = /*@__PURE__*/ Tool;

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
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAppsToolsRequest,
  output: GetProjectsLocationsAppsToolsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsAppsAgentsRequest {
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Optional. The next_page_token value returned from a previous list AgentService.ListAgents call. */
  pageToken?: string;
  /** Required. The resource name of the app to list agents from. */
  parent: string;
  /** Optional. Filter to be applied when listing the agents. See https://google.aip.dev/160 for more details. */
  filter?: string;
}

export const ListProjectsLocationsAppsAgentsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/agents" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAppsAgentsRequest>;

export type ListProjectsLocationsAppsAgentsResponse = ListAgentsResponse;
export const ListProjectsLocationsAppsAgentsResponse =
  /*@__PURE__*/ ListAgentsResponse;

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
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAppsAgentsRequest,
  output: ListProjectsLocationsAppsAgentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsAppsAgentsRequest {
  /** Optional. Indicates whether to forcefully delete the agent, even if it is still referenced by other app/agents/examples. * If `force = false`, the deletion fails if other agents/examples reference it. * If `force = true`, delete the agent and remove it from all referencing apps/agents/examples. */
  force?: boolean;
  /** Required. The resource name of the agent to delete. */
  name: string;
  /** Optional. The current etag of the agent. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the agent, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
}

export const DeleteProjectsLocationsAppsAgentsRequest =
  /*@__PURE__*/ Schema.Struct({
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAppsAgentsRequest>;

export type DeleteProjectsLocationsAppsAgentsResponse = Empty;
export const DeleteProjectsLocationsAppsAgentsResponse = /*@__PURE__*/ Empty;

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
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAppsAgentsRequest,
  output: DeleteProjectsLocationsAppsAgentsResponse,
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
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    agentId: Schema.optional(Schema.String).pipe(T.HttpQuery("agentId")),
    body: Schema.optional(Agent).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/agents", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAppsAgentsRequest>;

export type CreateProjectsLocationsAppsAgentsResponse = Agent;
export const CreateProjectsLocationsAppsAgentsResponse = /*@__PURE__*/ Agent;

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
> = /*@__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Agent).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsAppsAgentsRequest>;

export type PatchProjectsLocationsAppsAgentsResponse = Agent;
export const PatchProjectsLocationsAppsAgentsResponse = /*@__PURE__*/ Agent;

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
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAppsAgentsRequest,
  output: PatchProjectsLocationsAppsAgentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAppsAgentsRequest {
  /** Required. The resource name of the agent to retrieve. */
  name: string;
}

export const GetProjectsLocationsAppsAgentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAppsAgentsRequest>;

export type GetProjectsLocationsAppsAgentsResponse = Agent;
export const GetProjectsLocationsAppsAgentsResponse = /*@__PURE__*/ Agent;

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
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAppsAgentsRequest,
  output: GetProjectsLocationsAppsAgentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SendProjectsLocationsAppsMessageRequest {
  /** Optional. Tenant ID, provided as a path parameter. */
  tenant: string;
  /** Request body */
  body?: LfA2aV1SendMessageRequest;
}

export const SendProjectsLocationsAppsMessageRequest =
  /*@__PURE__*/ Schema.Struct({
    tenant: Schema.String.pipe(T.HttpPath("tenant")),
    body: Schema.optional(LfA2aV1SendMessageRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+tenant}/message:send",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SendProjectsLocationsAppsMessageRequest>;

export type SendProjectsLocationsAppsMessageResponse =
  LfA2aV1SendMessageResponse;
export const SendProjectsLocationsAppsMessageResponse =
  /*@__PURE__*/ LfA2aV1SendMessageResponse;

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
> = /*@__PURE__*/ API.make(() => ({
  input: SendProjectsLocationsAppsMessageRequest,
  output: SendProjectsLocationsAppsMessageResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GenerateChatTokenProjectsLocationsAppsSessionsRequest {
  /** Required. The session name to generate the chat token for. Format: projects/{project}/locations/{location}/apps/{app}/sessions/{session} */
  name: string;
  /** Request body */
  body?: GenerateChatTokenRequest;
}

export const GenerateChatTokenProjectsLocationsAppsSessionsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GenerateChatTokenRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:generateChatToken",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<GenerateChatTokenProjectsLocationsAppsSessionsRequest>;

export type GenerateChatTokenProjectsLocationsAppsSessionsResponse =
  GenerateChatTokenResponse;
export const GenerateChatTokenProjectsLocationsAppsSessionsResponse =
  /*@__PURE__*/ GenerateChatTokenResponse;

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
> = /*@__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.HttpPath("session")),
    body: Schema.optional(RunSessionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+session}:runSession", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<RunSessionProjectsLocationsAppsSessionsRequest>;

export type RunSessionProjectsLocationsAppsSessionsResponse =
  RunSessionResponse;
export const RunSessionProjectsLocationsAppsSessionsResponse =
  /*@__PURE__*/ RunSessionResponse;

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
> = /*@__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.HttpPath("session")),
    body: Schema.optional(RunSessionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+session}:streamRunSession",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<StreamRunSessionProjectsLocationsAppsSessionsRequest>;

export type StreamRunSessionProjectsLocationsAppsSessionsResponse =
  RunSessionResponse;
export const StreamRunSessionProjectsLocationsAppsSessionsResponse =
  /*@__PURE__*/ RunSessionResponse;

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
> = /*@__PURE__*/ API.make(() => ({
  input: StreamRunSessionProjectsLocationsAppsSessionsRequest,
  output: StreamRunSessionProjectsLocationsAppsSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAppsConversationsRequest>;

export type DeleteProjectsLocationsAppsConversationsResponse = Empty;
export const DeleteProjectsLocationsAppsConversationsResponse =
  /*@__PURE__*/ Empty;

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
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAppsConversationsRequest,
  output: DeleteProjectsLocationsAppsConversationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAppsConversationsRequest {
  /** Required. The resource name of the conversation to retrieve. */
  name: string;
  /** Optional. Indicate the source of the conversation. If not set, all source will be searched. */
  source?:
    | "SOURCE_UNSPECIFIED"
    | "LIVE"
    | "SIMULATOR"
    | "EVAL"
    | "AGENT_TOOL"
    | (string & {});
}

export const GetProjectsLocationsAppsConversationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAppsConversationsRequest>;

export type GetProjectsLocationsAppsConversationsResponse = Conversation;
export const GetProjectsLocationsAppsConversationsResponse =
  /*@__PURE__*/ Conversation;

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
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAppsConversationsRequest,
  output: GetProjectsLocationsAppsConversationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface BatchDeleteProjectsLocationsAppsConversationsRequest {
  /** Required. The resource name of the app to delete conversations from. Format: `projects/{project}/locations/{location}/apps/{app}` */
  parent: string;
  /** Request body */
  body?: BatchDeleteConversationsRequest;
}

export const BatchDeleteProjectsLocationsAppsConversationsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BatchDeleteConversationsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/conversations:batchDelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<BatchDeleteProjectsLocationsAppsConversationsRequest>;

export type BatchDeleteProjectsLocationsAppsConversationsResponse = Operation;
export const BatchDeleteProjectsLocationsAppsConversationsResponse =
  /*@__PURE__*/ Operation;

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
> = /*@__PURE__*/ API.make(() => ({
  input: BatchDeleteProjectsLocationsAppsConversationsRequest,
  output: BatchDeleteProjectsLocationsAppsConversationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAppsConversationsRequest {
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Required. The resource name of the app to list conversations from. */
  parent: string;
  /** Optional. Filter to be applied when listing the conversations. See https://google.aip.dev/160 for more details. */
  filter?: string;
  /** Optional. Indicate the source of the conversation. If not set, Source.Live will be applied by default. Will be deprecated in favor of `sources` field. */
  source?:
    | "SOURCE_UNSPECIFIED"
    | "LIVE"
    | "SIMULATOR"
    | "EVAL"
    | "AGENT_TOOL"
    | (string & {});
  /** Optional. Indicate the sources of the conversations. If not set, all available sources will be applied by default. */
  sources?:
    | "SOURCE_UNSPECIFIED"
    | "LIVE"
    | "SIMULATOR"
    | "EVAL"
    | "AGENT_TOOL"
    | (string & {})[];
  /** Optional. The next_page_token value returned from a previous list AgentService.ListConversations call. */
  pageToken?: string;
}

export const ListProjectsLocationsAppsConversationsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
    sources: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("sources"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/conversations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAppsConversationsRequest>;

export type ListProjectsLocationsAppsConversationsResponse =
  ListConversationsResponse;
export const ListProjectsLocationsAppsConversationsResponse =
  /*@__PURE__*/ ListConversationsResponse;

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
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAppsConversationsRequest,
  output: ListProjectsLocationsAppsConversationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsAppsToolsetsRequest {
  /** Required. The resource name of the toolset to retrieve. */
  name: string;
}

export const GetProjectsLocationsAppsToolsetsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAppsToolsetsRequest>;

export type GetProjectsLocationsAppsToolsetsResponse = Toolset;
export const GetProjectsLocationsAppsToolsetsResponse = /*@__PURE__*/ Toolset;

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
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAppsToolsetsRequest,
  output: GetProjectsLocationsAppsToolsetsResponse,
  errors: [NotFound, Forbidden],
}));

export interface RetrieveToolsProjectsLocationsAppsToolsetsRequest {
  /** Required. The name of the toolset to retrieve the tools for. Format: `projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}` */
  toolset: string;
  /** Request body */
  body?: RetrieveToolsRequest;
}

export const RetrieveToolsProjectsLocationsAppsToolsetsRequest =
  /*@__PURE__*/ Schema.Struct({
    toolset: Schema.String.pipe(T.HttpPath("toolset")),
    body: Schema.optional(RetrieveToolsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+toolset}:retrieveTools",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<RetrieveToolsProjectsLocationsAppsToolsetsRequest>;

export type RetrieveToolsProjectsLocationsAppsToolsetsResponse =
  RetrieveToolsResponse;
export const RetrieveToolsProjectsLocationsAppsToolsetsResponse =
  /*@__PURE__*/ RetrieveToolsResponse;

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
> = /*@__PURE__*/ API.make(() => ({
  input: RetrieveToolsProjectsLocationsAppsToolsetsRequest,
  output: RetrieveToolsProjectsLocationsAppsToolsetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAppsToolsetsRequest {
  /** Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. The next_page_token value returned from a previous list AgentService.ListToolsets call. */
  pageToken?: string;
  /** Required. The resource name of the app to list toolsets from. */
  parent: string;
  /** Optional. Filter to be applied when listing the toolsets. See https://google.aip.dev/160 for more details. */
  filter?: string;
}

export const ListProjectsLocationsAppsToolsetsRequest =
  /*@__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/toolsets" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAppsToolsetsRequest>;

export type ListProjectsLocationsAppsToolsetsResponse = ListToolsetsResponse;
export const ListProjectsLocationsAppsToolsetsResponse =
  /*@__PURE__*/ ListToolsetsResponse;

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
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAppsToolsetsRequest,
  output: ListProjectsLocationsAppsToolsetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsAppsToolsetsRequest {
  /** Required. The resource name of the app to create a toolset in. */
  parent: string;
  /** Optional. The ID to use for the toolset, which will become the final component of the toolset's resource name. If not provided, a unique ID will be automatically assigned for the toolset. */
  toolsetId?: string;
  /** Request body */
  body?: Toolset;
}

export const CreateProjectsLocationsAppsToolsetsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    toolsetId: Schema.optional(Schema.String).pipe(T.HttpQuery("toolsetId")),
    body: Schema.optional(Toolset).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/toolsets", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAppsToolsetsRequest>;

export type CreateProjectsLocationsAppsToolsetsResponse = Toolset;
export const CreateProjectsLocationsAppsToolsetsResponse =
  /*@__PURE__*/ Toolset;

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
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAppsToolsetsRequest,
  output: CreateProjectsLocationsAppsToolsetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAppsToolsetsRequest {
  /** Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated. */
  updateMask?: string;
  /** Identifier. The unique identifier of the toolset. Format: `projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}` */
  name: string;
  /** Request body */
  body?: Toolset;
}

export const PatchProjectsLocationsAppsToolsetsRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Toolset).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsAppsToolsetsRequest>;

export type PatchProjectsLocationsAppsToolsetsResponse = Toolset;
export const PatchProjectsLocationsAppsToolsetsResponse = /*@__PURE__*/ Toolset;

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
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAppsToolsetsRequest,
  output: PatchProjectsLocationsAppsToolsetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAppsToolsetsRequest {
  /** Optional. Indicates whether to forcefully delete the toolset, even if it is still referenced by app/agents. * If `force = false`, the deletion fails if any agents still reference the toolset. * If `force = true`, all existing references from agents will be removed and the toolset will be deleted. */
  force?: boolean;
  /** Required. The resource name of the toolset to delete. */
  name: string;
  /** Optional. The current etag of the toolset. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the toolset, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
}

export const DeleteProjectsLocationsAppsToolsetsRequest =
  /*@__PURE__*/ Schema.Struct({
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAppsToolsetsRequest>;

export type DeleteProjectsLocationsAppsToolsetsResponse = Empty;
export const DeleteProjectsLocationsAppsToolsetsResponse = /*@__PURE__*/ Empty;

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
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAppsToolsetsRequest,
  output: DeleteProjectsLocationsAppsToolsetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAppsDeploymentsRequest {
  /** Required. The name of the deployment. Format: `projects/{project}/locations/{location}/apps/{app}/deployments/{deployment}` */
  name: string;
}

export const GetProjectsLocationsAppsDeploymentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAppsDeploymentsRequest>;

export type GetProjectsLocationsAppsDeploymentsResponse = Deployment;
export const GetProjectsLocationsAppsDeploymentsResponse =
  /*@__PURE__*/ Deployment;

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
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAppsDeploymentsRequest,
  output: GetProjectsLocationsAppsDeploymentsResponse,
  errors: [NotFound, Forbidden],
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
  /*@__PURE__*/ Schema.Struct({
    deploymentId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("deploymentId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Deployment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/deployments", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAppsDeploymentsRequest>;

export type CreateProjectsLocationsAppsDeploymentsResponse = Deployment;
export const CreateProjectsLocationsAppsDeploymentsResponse =
  /*@__PURE__*/ Deployment;

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
> = /*@__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Deployment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsAppsDeploymentsRequest>;

export type PatchProjectsLocationsAppsDeploymentsResponse = Deployment;
export const PatchProjectsLocationsAppsDeploymentsResponse =
  /*@__PURE__*/ Deployment;

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
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAppsDeploymentsRequest,
  output: PatchProjectsLocationsAppsDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAppsDeploymentsRequest {
  /** Required. The name of the deployment to delete. Format: `projects/{project}/locations/{location}/apps/{app}/deployments/{deployment}` */
  name: string;
  /** Optional. The etag of the deployment. If an etag is provided and does not match the current etag of the deployment, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
}

export const DeleteProjectsLocationsAppsDeploymentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAppsDeploymentsRequest>;

export type DeleteProjectsLocationsAppsDeploymentsResponse = Empty;
export const DeleteProjectsLocationsAppsDeploymentsResponse =
  /*@__PURE__*/ Empty;

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
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAppsDeploymentsRequest,
  output: DeleteProjectsLocationsAppsDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAppsDeploymentsRequest {
  /** Required. The parent app. Format: `projects/{project}/locations/{location}/apps/{app}` */
  parent: string;
  /** Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Optional. The maximum number of deployments to return. The service may return fewer than this value. If unspecified, at most 50 deployments will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListDeployments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDeployments` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsAppsDeploymentsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/deployments" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAppsDeploymentsRequest>;

export type ListProjectsLocationsAppsDeploymentsResponse =
  ListDeploymentsResponse;
export const ListProjectsLocationsAppsDeploymentsResponse =
  /*@__PURE__*/ ListDeploymentsResponse;

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
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAppsDeploymentsRequest,
  output: ListProjectsLocationsAppsDeploymentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsAppsExamplesRequest {
  /** Required. The resource name of the example to retrieve. */
  name: string;
}

export const GetProjectsLocationsAppsExamplesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAppsExamplesRequest>;

export type GetProjectsLocationsAppsExamplesResponse = Example;
export const GetProjectsLocationsAppsExamplesResponse = /*@__PURE__*/ Example;

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
> = /*@__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAppsExamplesRequest>;

export type DeleteProjectsLocationsAppsExamplesResponse = Empty;
export const DeleteProjectsLocationsAppsExamplesResponse = /*@__PURE__*/ Empty;

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
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAppsExamplesRequest,
  output: DeleteProjectsLocationsAppsExamplesResponse,
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
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    exampleId: Schema.optional(Schema.String).pipe(T.HttpQuery("exampleId")),
    body: Schema.optional(Example).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/examples", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAppsExamplesRequest>;

export type CreateProjectsLocationsAppsExamplesResponse = Example;
export const CreateProjectsLocationsAppsExamplesResponse =
  /*@__PURE__*/ Example;

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
> = /*@__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Example).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsAppsExamplesRequest>;

export type PatchProjectsLocationsAppsExamplesResponse = Example;
export const PatchProjectsLocationsAppsExamplesResponse = /*@__PURE__*/ Example;

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
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAppsExamplesRequest,
  output: PatchProjectsLocationsAppsExamplesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAppsExamplesRequest {
  /** Required. The resource name of the app to list examples from. */
  parent: string;
  /** Optional. Filter to be applied when listing the examples. See https://google.aip.dev/160 for more details. */
  filter?: string;
  /** Optional. The next_page_token value returned from a previous list AgentService.ListExamples call. */
  pageToken?: string;
  /** Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsAppsExamplesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/examples" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAppsExamplesRequest>;

export type ListProjectsLocationsAppsExamplesResponse = ListExamplesResponse;
export const ListProjectsLocationsAppsExamplesResponse =
  /*@__PURE__*/ ListExamplesResponse;

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
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAppsExamplesRequest,
  output: ListProjectsLocationsAppsExamplesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsAppsGuardrailsRequest {
  /** Required. The resource name of the guardrail to retrieve. */
  name: string;
}

export const GetProjectsLocationsAppsGuardrailsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAppsGuardrailsRequest>;

export type GetProjectsLocationsAppsGuardrailsResponse = Guardrail;
export const GetProjectsLocationsAppsGuardrailsResponse =
  /*@__PURE__*/ Guardrail;

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
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAppsGuardrailsRequest,
  output: GetProjectsLocationsAppsGuardrailsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsAppsGuardrailsRequest {
  /** Required. The resource name of the app to create a guardrail in. */
  parent: string;
  /** Optional. The ID to use for the guardrail, which will become the final component of the guardrail's resource name. If not provided, a unique ID will be automatically assigned for the guardrail. */
  guardrailId?: string;
  /** Request body */
  body?: Guardrail;
}

export const CreateProjectsLocationsAppsGuardrailsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    guardrailId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("guardrailId"),
    ),
    body: Schema.optional(Guardrail).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/guardrails", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAppsGuardrailsRequest>;

export type CreateProjectsLocationsAppsGuardrailsResponse = Guardrail;
export const CreateProjectsLocationsAppsGuardrailsResponse =
  /*@__PURE__*/ Guardrail;

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
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAppsGuardrailsRequest,
  output: CreateProjectsLocationsAppsGuardrailsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Guardrail).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsAppsGuardrailsRequest>;

export type PatchProjectsLocationsAppsGuardrailsResponse = Guardrail;
export const PatchProjectsLocationsAppsGuardrailsResponse =
  /*@__PURE__*/ Guardrail;

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
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAppsGuardrailsRequest,
  output: PatchProjectsLocationsAppsGuardrailsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAppsGuardrailsRequest {
  /** Optional. Indicates whether to forcefully delete the guardrail, even if it is still referenced by app/agents. * If `force = false`, the deletion fails if any apps/agents still reference the guardrail. * If `force = true`, all existing references from apps/agents will be removed and the guardrail will be deleted. */
  force?: boolean;
  /** Required. The resource name of the guardrail to delete. */
  name: string;
  /** Optional. The current etag of the guardrail. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the guardrail, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
}

export const DeleteProjectsLocationsAppsGuardrailsRequest =
  /*@__PURE__*/ Schema.Struct({
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAppsGuardrailsRequest>;

export type DeleteProjectsLocationsAppsGuardrailsResponse = Empty;
export const DeleteProjectsLocationsAppsGuardrailsResponse =
  /*@__PURE__*/ Empty;

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
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAppsGuardrailsRequest,
  output: DeleteProjectsLocationsAppsGuardrailsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAppsGuardrailsRequest {
  /** Optional. The next_page_token value returned from a previous list AgentService.ListGuardrails call. */
  pageToken?: string;
  /** Required. The resource name of the app to list guardrails from. */
  parent: string;
  /** Optional. Filter to be applied when listing the guardrails. See https://google.aip.dev/160 for more details. */
  filter?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
}

export const ListProjectsLocationsAppsGuardrailsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/guardrails" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAppsGuardrailsRequest>;

export type ListProjectsLocationsAppsGuardrailsResponse =
  ListGuardrailsResponse;
export const ListProjectsLocationsAppsGuardrailsResponse =
  /*@__PURE__*/ ListGuardrailsResponse;

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
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAppsGuardrailsRequest,
  output: ListProjectsLocationsAppsGuardrailsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsAppsVersionsRequest {
  /** Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Required. The resource name of the app to list app versions from. */
  parent: string;
  /** Optional. Filter to be applied when listing the app versions. See https://google.aip.dev/160 for more details. */
  filter?: string;
  /** Optional. The next_page_token value returned from a previous list AgentService.ListAppVersions call. */
  pageToken?: string;
}

export const ListProjectsLocationsAppsVersionsRequest =
  /*@__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/versions" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAppsVersionsRequest>;

export type ListProjectsLocationsAppsVersionsResponse = ListAppVersionsResponse;
export const ListProjectsLocationsAppsVersionsResponse =
  /*@__PURE__*/ ListAppVersionsResponse;

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
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAppsVersionsRequest,
  output: ListProjectsLocationsAppsVersionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
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
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    appVersionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("appVersionId"),
    ),
    body: Schema.optional(AppVersion).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/versions", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAppsVersionsRequest>;

export type CreateProjectsLocationsAppsVersionsResponse = AppVersion;
export const CreateProjectsLocationsAppsVersionsResponse =
  /*@__PURE__*/ AppVersion;

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
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAppsVersionsRequest,
  output: CreateProjectsLocationsAppsVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAppsVersionsRequest {
  /** Required. The resource name of the app version to delete. */
  name: string;
  /** Optional. The current etag of the app version. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the app version, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
}

export const DeleteProjectsLocationsAppsVersionsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAppsVersionsRequest>;

export type DeleteProjectsLocationsAppsVersionsResponse = Empty;
export const DeleteProjectsLocationsAppsVersionsResponse = /*@__PURE__*/ Empty;

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
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAppsVersionsRequest,
  output: DeleteProjectsLocationsAppsVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAppsVersionsRequest {
  /** Required. The resource name of the app version to retrieve. */
  name: string;
}

export const GetProjectsLocationsAppsVersionsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAppsVersionsRequest>;

export type GetProjectsLocationsAppsVersionsResponse = AppVersion;
export const GetProjectsLocationsAppsVersionsResponse =
  /*@__PURE__*/ AppVersion;

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
> = /*@__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RestoreAppVersionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:restore", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<RestoreProjectsLocationsAppsVersionsRequest>;

export type RestoreProjectsLocationsAppsVersionsResponse = Operation;
export const RestoreProjectsLocationsAppsVersionsResponse =
  /*@__PURE__*/ Operation;

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
> = /*@__PURE__*/ API.make(() => ({
  input: RestoreProjectsLocationsAppsVersionsRequest,
  output: RestoreProjectsLocationsAppsVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAppsChangelogsRequest {
  /** Optional. The next_page_token value returned from a previous list AgentService.ListChangelogs call. */
  pageToken?: string;
  /** Required. The resource name of the app to list changelogs from. */
  parent: string;
  /** Optional. Filter to be applied when listing the changelogs. See https://google.aip.dev/160 for more details. The filter string can be used to filter by `action`, `resource_type`, `resource_name`, `author`, and `create_time`. The `:` comparator can be used for case-insensitive partial matching on string fields, while `=` performs an exact case-sensitive match. Examples: * `action:update` (case-insensitive partial match) * `action="Create"` (case-sensitive exact match) * `resource_type:agent` * `resource_name:my-agent` * `author:me@example.com` * `create_time > "2025-01-01T00:00:00Z"` * `create_time <= "2025-01-01T00:00:00Z" AND resource_type:tool` */
  filter?: string;
  /** Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsAppsChangelogsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/changelogs" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAppsChangelogsRequest>;

export type ListProjectsLocationsAppsChangelogsResponse =
  ListChangelogsResponse;
export const ListProjectsLocationsAppsChangelogsResponse =
  /*@__PURE__*/ ListChangelogsResponse;

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
> = /*@__PURE__*/ API.makePaginated(() => ({
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
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAppsChangelogsRequest>;

export type GetProjectsLocationsAppsChangelogsResponse = Changelog;
export const GetProjectsLocationsAppsChangelogsResponse =
  /*@__PURE__*/ Changelog;

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
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAppsChangelogsRequest,
  output: GetProjectsLocationsAppsChangelogsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsOperationsRequest>;

export type DeleteProjectsLocationsOperationsResponse = Empty;
export const DeleteProjectsLocationsOperationsResponse = /*@__PURE__*/ Empty;

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
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsOperationsRequest,
  output: DeleteProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CancelProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CancelProjectsLocationsOperationsRequest>;

export type CancelProjectsLocationsOperationsResponse = Empty;
export const CancelProjectsLocationsOperationsResponse = /*@__PURE__*/ Empty;

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
> = /*@__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsOperationsRequest,
  output: CancelProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list page token. */
  pageToken?: string;
  /** The standard list filter. */
  filter?: string;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page size. */
  pageSize?: number;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse = ListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ ListOperationsResponse;

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
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOperationsRequest,
  output: ListProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsOperationsRequest>;

export type GetProjectsLocationsOperationsResponse = Operation;
export const GetProjectsLocationsOperationsResponse = /*@__PURE__*/ Operation;

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
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOperationsRequest,
  output: GetProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));
