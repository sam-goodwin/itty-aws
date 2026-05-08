// ==========================================================================
// Gemini Enterprise for Customer Experience API (ces v1)
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
  version: "v1",
  rootUrl: "https://ces.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface CitationsCitedChunk {
  /** URI used for citation. */
  uri?: string;
  /** Title of the cited document. */
  title?: string;
  /** Text used for citation. */
  text?: string;
}

export const CitationsCitedChunk: Schema.Schema<CitationsCitedChunk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "CitationsCitedChunk" });

export interface FileSearchTool {
  /** Optional. The type of the corpus. Default is FULLY_MANAGED. */
  corpusType?:
    | "CORPUS_TYPE_UNSPECIFIED"
    | "USER_OWNED"
    | "FULLY_MANAGED"
    | (string & {});
  /** Optional. The tool description. */
  description?: string;
  /** Required. The tool name. */
  name?: string;
  /** Optional. The corpus where files are stored. Format: projects/{project}/locations/{location}/ragCorpora/{rag_corpus} */
  fileCorpus?: string;
}

export const FileSearchTool: Schema.Schema<FileSearchTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    corpusType: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    fileCorpus: Schema.optional(Schema.String),
  }).annotate({ identifier: "FileSearchTool" });

export interface AgentTool {
  /** Optional. Description of the tool's purpose. */
  description?: string;
  /** Optional. The resource name of the agent that is the entry point of the tool. Format: `projects/{project}/locations/{location}/agents/{agent}` */
  agent?: string;
  /** Required. The name of the agent tool. */
  name?: string;
  /** Optional. Deprecated: Use `agent` instead. The resource name of the root agent that is the entry point of the tool. Format: `projects/{project}/locations/{location}/agents/{agent}` */
  rootAgent?: string;
}

export const AgentTool: Schema.Schema<AgentTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    agent: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    rootAgent: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentTool" });

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

export interface AgentInterface {
  /** Required. The protocol binding supported at this URL. This is an open form string, to be easily extended for other protocol bindings. The core ones officially supported are `JSONRPC`, `GRPC` and `HTTP+JSON`. */
  protocolBinding?: string;
  /** Tenant ID to be used in the request when calling the agent. */
  tenant?: string;
  /** Required. The URL where this interface is available. Must be a valid absolute HTTPS URL in production. Example: "https://api.example.com/a2a/v1", "https://grpc.example.com/a2a" */
  url?: string;
  /** Required. The version of the A2A protocol this interface exposes. Use the latest supported minor version per major version. Examples: "0.3", "1.0" */
  protocolVersion?: string;
}

export const AgentInterface: Schema.Schema<AgentInterface> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    protocolBinding: Schema.optional(Schema.String),
    tenant: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    protocolVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentInterface" });

export interface AgentSkill {
  /** Required. A unique identifier for the agent's skill. */
  id?: string;
  /** Example prompts or scenarios that this skill can handle. */
  examples?: ReadonlyArray<string>;
  /** Required. A detailed description of the skill. */
  description?: string;
  /** The set of supported output media types for this skill, overriding the agent's defaults. */
  outputModes?: ReadonlyArray<string>;
  /** Required. A human-readable name for the skill. */
  name?: string;
  /** The set of supported input media types for this skill, overriding the agent's defaults. */
  inputModes?: ReadonlyArray<string>;
  /** Required. A set of keywords describing the skill's capabilities. */
  tags?: ReadonlyArray<string>;
}

export const AgentSkill: Schema.Schema<AgentSkill> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    examples: Schema.optional(Schema.Array(Schema.String)),
    description: Schema.optional(Schema.String),
    outputModes: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    inputModes: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AgentSkill" });

export interface AgentCard {
  /** Required. A description of the agent's domain of action/solution space. */
  description?: string;
  /** Required. Ordered list of supported interfaces. The first entry is preferred. */
  supportedInterfaces?: ReadonlyArray<AgentInterface>;
  /** Required. Skills represent a unit of ability an agent can perform. This may somewhat abstract but represents a more focused set of actions that the agent is highly likely to succeed at. */
  skills?: ReadonlyArray<AgentSkill>;
  /** Required. A human-readable name for the agent. */
  name?: string;
  /** Required. The version of the agent. */
  version?: string;
}

export const AgentCard: Schema.Schema<AgentCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    supportedInterfaces: Schema.optional(Schema.Array(AgentInterface)),
    skills: Schema.optional(Schema.Array(AgentSkill)),
    name: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentCard" });

export interface RemoteAgentTool {
  /** Required. The agent card of the remote agent that this tool invokes. */
  agentCard?: AgentCard;
  /** Required. The description of the tool. */
  description?: string;
  /** Required. The name of the tool. */
  name?: string;
}

export const RemoteAgentTool: Schema.Schema<RemoteAgentTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentCard: Schema.optional(AgentCard),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "RemoteAgentTool" });

export interface Ces_Schema {
  /** Optional. Indicates if the value may be null. */
  nullable?: boolean;
  /** Optional. Default value of the data. */
  default?: unknown;
  /** Optional. Maximum number of the elements for Type.ARRAY. */
  maxItems?: string;
  /** Optional. Properties of Type.OBJECT. */
  properties?: Record<string, Ces_Schema>;
  /** Optional. Can either be a boolean or an object, controls the presence of additional properties. */
  additionalProperties?: Ces_Schema;
  /** Optional. Minimum value for Type.INTEGER and Type.NUMBER. */
  minimum?: number;
  /** Optional. The description of the data. */
  description?: string;
  /** Optional. Maximum value for Type.INTEGER and Type.NUMBER. */
  maximum?: number;
  /** Optional. Schema of the elements of Type.ARRAY. */
  items?: Ces_Schema;
  /** Optional. The value should be validated against any (one or more) of the subschemas in the list. */
  anyOf?: ReadonlyArray<Ces_Schema>;
  /** Optional. The title of the schema. */
  title?: string;
  /** Optional. Schemas of initial elements of Type.ARRAY. */
  prefixItems?: ReadonlyArray<Ces_Schema>;
  /** Optional. Possible values of the element of primitive type with enum format. Examples: 1. We can define direction as : {type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]} 2. We can define apartment number as : {type:INTEGER, format:enum, enum:["101", "201", "301"]} */
  enum?: ReadonlyArray<string>;
  /** Optional. Allows indirect references between schema nodes. The value should be a valid reference to a child of the root `defs`. For example, the following schema defines a reference to a schema node named "Pet": ``` type: object properties: pet: ref: #/defs/Pet defs: Pet: type: object properties: name: type: string ``` The value of the "pet" property is a reference to the schema node named "Pet". See details in https://json-schema.org/understanding-json-schema/structuring. */
  ref?: string;
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
  /** Optional. A map of definitions for use by `ref`. Only allowed at the root of the schema. */
  defs?: Record<string, Ces_Schema>;
  /** Optional. Indicate the items in the array must be unique. Only applies to TYPE.ARRAY. */
  uniqueItems?: boolean;
  /** Optional. Required properties of Type.OBJECT. */
  required?: ReadonlyArray<string>;
  /** Optional. Minimum number of the elements for Type.ARRAY. */
  minItems?: string;
}

export const Ces_Schema: Schema.Schema<Ces_Schema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      nullable: Schema.optional(Schema.Boolean),
      default: Schema.optional(Schema.Unknown),
      maxItems: Schema.optional(Schema.String),
      properties: Schema.optional(Schema.Record(Schema.String, Ces_Schema)),
      additionalProperties: Schema.optional(Ces_Schema),
      minimum: Schema.optional(Schema.Number),
      description: Schema.optional(Schema.String),
      maximum: Schema.optional(Schema.Number),
      items: Schema.optional(Ces_Schema),
      anyOf: Schema.optional(Schema.Array(Ces_Schema)),
      title: Schema.optional(Schema.String),
      prefixItems: Schema.optional(Schema.Array(Ces_Schema)),
      enum: Schema.optional(Schema.Array(Schema.String)),
      ref: Schema.optional(Schema.String),
      type: Schema.optional(Schema.String),
      defs: Schema.optional(Schema.Record(Schema.String, Ces_Schema)),
      uniqueItems: Schema.optional(Schema.Boolean),
      required: Schema.optional(Schema.Array(Schema.String)),
      minItems: Schema.optional(Schema.String),
    }),
  ).annotate({ identifier: "Ces_Schema" }) as any as Schema.Schema<Ces_Schema>;

export interface ServiceDirectoryConfig {
  /** Required. The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: `projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}`. Location of the service directory must be the same as the location of the app. */
  service?: string;
}

export const ServiceDirectoryConfig: Schema.Schema<ServiceDirectoryConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceDirectoryConfig" });

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

export interface BearerTokenConfig {
  /** Required. The bearer token. Must be in the format `$context.variables.`. */
  token?: string;
}

export const BearerTokenConfig: Schema.Schema<BearerTokenConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String),
  }).annotate({ identifier: "BearerTokenConfig" });

export interface OAuthConfig {
  /** Required. OAuth grant types. */
  oauthGrantType?:
    | "OAUTH_GRANT_TYPE_UNSPECIFIED"
    | "CLIENT_CREDENTIAL"
    | (string & {});
  /** Optional. The OAuth scopes to grant. */
  scopes?: ReadonlyArray<string>;
  /** Required. The client ID from the OAuth provider. */
  clientId?: string;
  /** Required. The token endpoint in the OAuth provider to exchange for an access token. */
  tokenEndpoint?: string;
  /** Required. The name of the SecretManager secret version resource storing the client secret. Format: `projects/{project}/secrets/{secret}/versions/{version}` Note: You should grant `roles/secretmanager.secretAccessor` role to the CES service agent `service-@gcp-sa-ces.iam.gserviceaccount.com`. */
  clientSecretVersion?: string;
}

export const OAuthConfig: Schema.Schema<OAuthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oauthGrantType: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Schema.String)),
    clientId: Schema.optional(Schema.String),
    tokenEndpoint: Schema.optional(Schema.String),
    clientSecretVersion: Schema.optional(Schema.String),
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

export interface ServiceAgentIdTokenAuthConfig {}

export const ServiceAgentIdTokenAuthConfig: Schema.Schema<ServiceAgentIdTokenAuthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ServiceAgentIdTokenAuthConfig",
  });

export interface ApiAuthentication {
  /** Optional. Config for bearer token auth. */
  bearerTokenConfig?: BearerTokenConfig;
  /** Optional. Config for OAuth. */
  oauthConfig?: OAuthConfig;
  /** Optional. Config for service account authentication. */
  serviceAccountAuthConfig?: ServiceAccountAuthConfig;
  /** Optional. Config for API key auth. */
  apiKeyConfig?: ApiKeyConfig;
  /** Optional. Config for ID token auth generated from CES service agent. */
  serviceAgentIdTokenAuthConfig?: ServiceAgentIdTokenAuthConfig;
}

export const ApiAuthentication: Schema.Schema<ApiAuthentication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bearerTokenConfig: Schema.optional(BearerTokenConfig),
    oauthConfig: Schema.optional(OAuthConfig),
    serviceAccountAuthConfig: Schema.optional(ServiceAccountAuthConfig),
    apiKeyConfig: Schema.optional(ApiKeyConfig),
    serviceAgentIdTokenAuthConfig: Schema.optional(
      ServiceAgentIdTokenAuthConfig,
    ),
  }).annotate({ identifier: "ApiAuthentication" });

export interface McpTool {
  /** Required. The name of the MCP tool. */
  name?: string;
  /** Optional. The schema of the input arguments of the MCP tool. */
  inputSchema?: Ces_Schema;
  /** Optional. The schema of the output arguments of the MCP tool. */
  outputSchema?: Ces_Schema;
  /** Required. The server address of the MCP server, e.g., "https://example.com/mcp/". If the server is built with the MCP SDK, the url should be suffixed with "/mcp/". Only Streamable HTTP transport based servers are supported. This is the same as the server_address in the McpToolset. See https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#streamable-http for more details. */
  serverAddress?: string;
  /** Optional. Service Directory configuration for VPC-SC, used to resolve service names within a perimeter. */
  serviceDirectoryConfig?: ServiceDirectoryConfig;
  /** Optional. The TLS configuration. Includes the custom server certificates that the client should trust. */
  tlsConfig?: TlsConfig;
  /** Optional. The description of the MCP tool. */
  description?: string;
  /** Optional. Authentication information required to execute the tool against the MCP server. For bearer token authentication, the token applies only to tool execution, not to listing tools. This requires that tools can be listed without authentication. */
  apiAuthentication?: ApiAuthentication;
  /** Optional. The custom headers to send in the request to the MCP server. The values must be in the format `$context.variables.` and can be set in the session variables. See https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/tool/open-api#openapi-injection for more details. */
  customHeaders?: Record<string, string>;
}

export const McpTool: Schema.Schema<McpTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    inputSchema: Schema.optional(Ces_Schema),
    outputSchema: Schema.optional(Ces_Schema),
    serverAddress: Schema.optional(Schema.String),
    serviceDirectoryConfig: Schema.optional(ServiceDirectoryConfig),
    tlsConfig: Schema.optional(TlsConfig),
    description: Schema.optional(Schema.String),
    apiAuthentication: Schema.optional(ApiAuthentication),
    customHeaders: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "McpTool" });

export interface GoogleSearchToolPromptConfig {
  /** Optional. Defines the prompt used for the system instructions when interacting with the agent in chat conversations. If not set, default prompt will be used. */
  textPrompt?: string;
  /** Optional. Defines the prompt used for the system instructions when interacting with the agent in voice conversations. If not set, default prompt will be used. */
  voicePrompt?: string;
}

export const GoogleSearchToolPromptConfig: Schema.Schema<GoogleSearchToolPromptConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    textPrompt: Schema.optional(Schema.String),
    voicePrompt: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleSearchToolPromptConfig" });

export interface GoogleSearchTool {
  /** Required. The name of the tool. */
  name?: string;
  /** Optional. Content will be fetched directly from these URLs for context and grounding. Example: "https://example.com/path.html". A maximum of 20 URLs are allowed. */
  contextUrls?: ReadonlyArray<string>;
  /** Optional. Specifies domains to restrict search results to. Example: "example.com", "another.site". A maximum of 20 domains can be specified. */
  preferredDomains?: ReadonlyArray<string>;
  /** Optional. List of domains to be excluded from the search results. Example: "example.com". A maximum of 2000 domains can be excluded. */
  excludeDomains?: ReadonlyArray<string>;
  /** Optional. Description of the tool's purpose. */
  description?: string;
  /** Optional. Prompt instructions passed to planner on how the search results should be processed for text and voice. */
  promptConfig?: GoogleSearchToolPromptConfig;
}

export const GoogleSearchTool: Schema.Schema<GoogleSearchTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    contextUrls: Schema.optional(Schema.Array(Schema.String)),
    preferredDomains: Schema.optional(Schema.Array(Schema.String)),
    excludeDomains: Schema.optional(Schema.Array(Schema.String)),
    description: Schema.optional(Schema.String),
    promptConfig: Schema.optional(GoogleSearchToolPromptConfig),
  }).annotate({ identifier: "GoogleSearchTool" });

export interface PythonFunction {
  /** Optional. The name of the Python function to execute. Must match a Python function name defined in the python code. Case sensitive. If the name is not provided, the first function defined in the python code will be used. */
  name?: string;
  /** Optional. The Python code to execute for the tool. */
  pythonCode?: string;
  /** Output only. The description of the Python function, parsed from the python code's docstring. */
  description?: string;
}

export const PythonFunction: Schema.Schema<PythonFunction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    pythonCode: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "PythonFunction" });

export interface ClientFunction {
  /** Optional. The function description. */
  description?: string;
  /** Required. The function name. */
  name?: string;
  /** Optional. The schema of the function parameters. */
  parameters?: Ces_Schema;
  /** Optional. The schema of the function response. */
  response?: Ces_Schema;
}

export const ClientFunction: Schema.Schema<ClientFunction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    parameters: Schema.optional(Ces_Schema),
    response: Schema.optional(Ces_Schema),
  }).annotate({ identifier: "ClientFunction" });

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
  /** Output only. The display name of the data store. */
  displayName?: string;
  /** Output only. Timestamp when the data store was created. */
  createTime?: string;
}

export const DataStore: Schema.Schema<DataStore> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    documentProcessingMode: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    connectorConfig: Schema.optional(DataStoreConnectorConfig),
    displayName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataStore" });

export interface DataStoreToolDataStoreSource {
  /** Optional. Filter specification for the DataStore. See: https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata */
  filter?: string;
  /** Optional. The data store. */
  dataStore?: DataStore;
}

export const DataStoreToolDataStoreSource: Schema.Schema<DataStoreToolDataStoreSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String),
    dataStore: Schema.optional(DataStore),
  }).annotate({ identifier: "DataStoreToolDataStoreSource" });

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

export interface DataStoreToolRewriterConfig {
  /** Optional. Whether the rewriter is disabled. */
  disabled?: boolean;
  /** Required. Configurations for the LLM model. */
  modelSettings?: ModelSettings;
  /** Optional. The prompt definition. If not set, default prompt will be used. */
  prompt?: string;
}

export const DataStoreToolRewriterConfig: Schema.Schema<DataStoreToolRewriterConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disabled: Schema.optional(Schema.Boolean),
    modelSettings: Schema.optional(ModelSettings),
    prompt: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataStoreToolRewriterConfig" });

export interface DataStoreToolSummarizationConfig {
  /** Optional. Configurations for the LLM model. */
  modelSettings?: ModelSettings;
  /** Optional. The prompt definition. If not set, default prompt will be used. */
  prompt?: string;
  /** Optional. Whether summarization is disabled. */
  disabled?: boolean;
}

export const DataStoreToolSummarizationConfig: Schema.Schema<DataStoreToolSummarizationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const DataStoreToolGroundingConfig: Schema.Schema<DataStoreToolGroundingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groundingLevel: Schema.optional(Schema.Number),
    disabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DataStoreToolGroundingConfig" });

export interface DataStoreToolModalityConfig {
  /** Optional. The rewriter config. */
  rewriterConfig?: DataStoreToolRewriterConfig;
  /** Optional. The summarization config. */
  summarizationConfig?: DataStoreToolSummarizationConfig;
  /** Required. The modality type. */
  modalityType?: "MODALITY_TYPE_UNSPECIFIED" | "TEXT" | "AUDIO" | (string & {});
  /** Optional. The grounding configuration. */
  groundingConfig?: DataStoreToolGroundingConfig;
}

export const DataStoreToolModalityConfig: Schema.Schema<DataStoreToolModalityConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rewriterConfig: Schema.optional(DataStoreToolRewriterConfig),
    summarizationConfig: Schema.optional(DataStoreToolSummarizationConfig),
    modalityType: Schema.optional(Schema.String),
    groundingConfig: Schema.optional(DataStoreToolGroundingConfig),
  }).annotate({ identifier: "DataStoreToolModalityConfig" });

export interface DataStoreToolEngineSource {
  /** Required. Full resource name of the Engine. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}` */
  engine?: string;
  /** Optional. Use to target specific DataStores within the Engine. If empty, the search applies to all DataStores associated with the Engine. */
  dataStoreSources?: ReadonlyArray<DataStoreToolDataStoreSource>;
  /** Optional. A filter applied to the search across the Engine. Not relevant and not used if 'data_store_sources' is provided. See: https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata */
  filter?: string;
}

export const DataStoreToolEngineSource: Schema.Schema<DataStoreToolEngineSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    engine: Schema.optional(Schema.String),
    dataStoreSources: Schema.optional(
      Schema.Array(DataStoreToolDataStoreSource),
    ),
    filter: Schema.optional(Schema.String),
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
  /** Optional. Strength of the boost, which should be in [-1, 1]. Negative boost means demotion. Default is 0.0. Setting to 1.0 gives the suggestions a big promotion. However, it does not necessarily mean that the top result will be a boosted suggestion. Setting to -1.0 gives the suggestions a big demotion. However, other suggestions that are relevant might still be shown. Setting to 0.0 means no boost applied. The boosting condition is ignored. */
  boost?: number;
  /** Optional. Complex specification for custom ranking based on customer defined attribute value. */
  boostControlSpec?: DataStoreToolBoostSpecConditionBoostSpecBoostControlSpec;
  /** Required. An expression which specifies a boost condition. The syntax is the same as filter expression syntax. Currently, the only supported condition is a list of BCP-47 lang codes. Example: To boost suggestions in languages en or fr: (lang_code: ANY("en", "fr")) */
  condition?: string;
}

export const DataStoreToolBoostSpecConditionBoostSpec: Schema.Schema<DataStoreToolBoostSpecConditionBoostSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export interface DataStoreTool {
  /** Optional. The tool description. */
  description?: string;
  /** Optional. The filter parameter behavior. */
  filterParameterBehavior?:
    | "FILTER_PARAMETER_BEHAVIOR_UNSPECIFIED"
    | "ALWAYS_INCLUDE"
    | "NEVER_INCLUDE"
    | (string & {});
  /** Optional. Search within a single specific DataStore. */
  dataStoreSource?: DataStoreToolDataStoreSource;
  /** Optional. The modality configs for the data store. */
  modalityConfigs?: ReadonlyArray<DataStoreToolModalityConfig>;
  /** Optional. Search within an Engine (potentially across multiple DataStores). */
  engineSource?: DataStoreToolEngineSource;
  /** Required. The data store tool name. */
  name?: string;
  /** Optional. Boost specification to boost certain documents. */
  boostSpecs?: ReadonlyArray<DataStoreToolBoostSpecs>;
}

export const DataStoreTool: Schema.Schema<DataStoreTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    filterParameterBehavior: Schema.optional(Schema.String),
    dataStoreSource: Schema.optional(DataStoreToolDataStoreSource),
    modalityConfigs: Schema.optional(Schema.Array(DataStoreToolModalityConfig)),
    engineSource: Schema.optional(DataStoreToolEngineSource),
    name: Schema.optional(Schema.String),
    boostSpecs: Schema.optional(Schema.Array(DataStoreToolBoostSpecs)),
  }).annotate({ identifier: "DataStoreTool" });

export interface OpenApiTool {
  /** Optional. Authentication information required by the API. */
  apiAuthentication?: ApiAuthentication;
  /** Optional. The description of the tool. If not provided, the description of the tool will be derived from the OpenAPI schema, from `operation.description` or `operation.summary`. */
  description?: string;
  /** Required. The OpenAPI schema in JSON or YAML format. */
  openApiSchema?: string;
  /** Optional. The name of the tool. If not provided, the name of the tool will be derived from the OpenAPI schema, from `operation.operationId`. */
  name?: string;
  /** Optional. If true, the agent will ignore unknown fields in the API response. */
  ignoreUnknownFields?: boolean;
  /** Optional. The TLS configuration. Includes the custom server certificates that the client will trust. */
  tlsConfig?: TlsConfig;
  /** Optional. Service Directory configuration. */
  serviceDirectoryConfig?: ServiceDirectoryConfig;
  /** Optional. The server URL of the Open API schema. This field is only set in tools in the environment dependencies during the export process if the schema contains a server url. During the import process, if this url is present in the environment dependencies and the schema has the $env_var placeholder, it will replace the placeholder in the schema. */
  url?: string;
}

export const OpenApiTool: Schema.Schema<OpenApiTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiAuthentication: Schema.optional(ApiAuthentication),
    description: Schema.optional(Schema.String),
    openApiSchema: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    ignoreUnknownFields: Schema.optional(Schema.Boolean),
    tlsConfig: Schema.optional(TlsConfig),
    serviceDirectoryConfig: Schema.optional(ServiceDirectoryConfig),
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "OpenApiTool" });

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

export const WidgetToolTextResponseConfig: Schema.Schema<WidgetToolTextResponseConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    staticText: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    textResponseInstruction: Schema.optional(Schema.String),
  }).annotate({ identifier: "WidgetToolTextResponseConfig" });

export interface WidgetToolDataMapping {
  /** Optional. The resource name of the tool that provides the data for the widget (e.g., a search tool or a custom function). Format: `projects/{project}/locations/{location}/agents/{agent}/tools/{tool}` */
  sourceToolName?: string;
  /** Optional. A map of widget input parameter fields to the corresponding output fields of the source tool. */
  fieldMappings?: Record<string, string>;
  /** Optional. Configuration for a Python function used to transform the source tool's output into the widget's input format. */
  pythonFunction?: PythonFunction;
  /** Optional. The mode of the data mapping. */
  mode?: "MODE_UNSPECIFIED" | "FIELD_MAPPING" | "PYTHON_SCRIPT" | (string & {});
  /** Deprecated: Use `python_function` instead. */
  pythonScript?: string;
}

export const WidgetToolDataMapping: Schema.Schema<WidgetToolDataMapping> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceToolName: Schema.optional(Schema.String),
    fieldMappings: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    pythonFunction: Schema.optional(PythonFunction),
    mode: Schema.optional(Schema.String),
    pythonScript: Schema.optional(Schema.String),
  }).annotate({ identifier: "WidgetToolDataMapping" });

export interface WidgetTool {
  /** Optional. The description of the widget tool. */
  description?: string;
  /** Optional. Configuration for rendering the widget. */
  uiConfig?: Record<string, unknown>;
  /** Optional. Configuration for always-included text responses. */
  textResponseConfig?: WidgetToolTextResponseConfig;
  /** Optional. The input parameters of the widget tool. */
  parameters?: Ces_Schema;
  /** Optional. The mapping that defines how data from a source tool is mapped to the widget's input parameters. */
  dataMapping?: WidgetToolDataMapping;
  /** Required. The display name of the widget tool. */
  name?: string;
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
}

export const WidgetTool: Schema.Schema<WidgetTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    uiConfig: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    textResponseConfig: Schema.optional(WidgetToolTextResponseConfig),
    parameters: Schema.optional(Ces_Schema),
    dataMapping: Schema.optional(WidgetToolDataMapping),
    name: Schema.optional(Schema.String),
    widgetType: Schema.optional(Schema.String),
  }).annotate({ identifier: "WidgetTool" });

export interface ActionEntityOperation {
  /** Required. Operation to perform on the entity. */
  operation?:
    | "OPERATION_TYPE_UNSPECIFIED"
    | "LIST"
    | "GET"
    | "CREATE"
    | "UPDATE"
    | "DELETE"
    | (string & {});
  /** Required. ID of the entity. */
  entityId?: string;
}

export const ActionEntityOperation: Schema.Schema<ActionEntityOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operation: Schema.optional(Schema.String),
    entityId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActionEntityOperation" });

export interface Action {
  /** Entity operation configuration for the tool to use. */
  entityOperation?: ActionEntityOperation;
  /** Optional. Entity fields to use as inputs for the operation. If no fields are specified, all fields of the Entity will be used. */
  inputFields?: ReadonlyArray<string>;
  /** ID of a Connection action for the tool to use. */
  connectionActionId?: string;
  /** Optional. Entity fields to return from the operation. If no fields are specified, all fields of the Entity will be returned. */
  outputFields?: ReadonlyArray<string>;
}

export const Action: Schema.Schema<Action> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityOperation: Schema.optional(ActionEntityOperation),
    inputFields: Schema.optional(Schema.Array(Schema.String)),
    connectionActionId: Schema.optional(Schema.String),
    outputFields: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Action" });

export interface EndUserAuthConfigOauth2AuthCodeConfig {
  /** Required. Oauth token parameter name to pass through. Must be in the format `$context.variables.`. */
  oauthToken?: string;
}

export const EndUserAuthConfigOauth2AuthCodeConfig: Schema.Schema<EndUserAuthConfigOauth2AuthCodeConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oauthToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "EndUserAuthConfigOauth2AuthCodeConfig" });

export interface EndUserAuthConfigOauth2JwtBearerConfig {
  /** Required. Subject parameter name to pass through. Must be in the format `$context.variables.`. */
  subject?: string;
  /** Required. Issuer parameter name to pass through. Must be in the format `$context.variables.`. */
  issuer?: string;
  /** Required. Client parameter name to pass through. Must be in the format `$context.variables.`. */
  clientKey?: string;
}

export const EndUserAuthConfigOauth2JwtBearerConfig: Schema.Schema<EndUserAuthConfigOauth2JwtBearerConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subject: Schema.optional(Schema.String),
    issuer: Schema.optional(Schema.String),
    clientKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "EndUserAuthConfigOauth2JwtBearerConfig" });

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

export interface ConnectorTool {
  /** Required. The full resource name of the referenced Integration Connectors Connection. Format: `projects/{project}/locations/{location}/connections/{connection}` */
  connection?: string;
  /** Optional. The description of the tool that can be used by the Agent to decide whether to call this ConnectorTool. */
  description?: string;
  /** Optional. The name of the tool that can be used by the Agent to decide whether to call this ConnectorTool. */
  name?: string;
  /** Required. Action for the tool to use. */
  action?: Action;
  /** Optional. Configures how authentication is handled in Integration Connectors. By default, an admin authentication is passed in the Integration Connectors API requests. You can override it with a different end-user authentication config. **Note**: The Connection must have authentication override enabled in order to specify an EUC configuration here - otherwise, the ConnectorTool creation will fail. See https://cloud.google.com/application-integration/docs/configure-connectors-task#configure-authentication-override for details. */
  authConfig?: EndUserAuthConfig;
}

export const ConnectorTool: Schema.Schema<ConnectorTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connection: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    action: Schema.optional(Action),
    authConfig: Schema.optional(EndUserAuthConfig),
  }).annotate({ identifier: "ConnectorTool" });

export interface Tool {
  /** Identifier. The resource name of the tool. Format: * `projects/{project}/locations/{location}/apps/{app}/tools/{tool}` for standalone tools. * `projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}/tools/{tool}` for tools retrieved from a toolset. These tools are dynamic and output-only; they cannot be referenced directly where a tool is expected. */
  name?: string;
  /** Output only. The display name of the tool, derived based on the tool's type. For example, display name of a ClientFunction is derived from its `name` property. */
  displayName?: string;
  /** Optional. The timeout for the tool execution. If not set, the default timeout is 30 seconds for `SYNCHRONOUS` tools and 60 seconds for `ASYNCHRONOUS` tools. */
  timeout?: string;
  /** Optional. The file search tool. */
  fileSearchTool?: FileSearchTool;
  /** Output only. If the tool is generated by the LLM assistant, this field contains a descriptive summary of the generation. */
  generatedSummary?: string;
  /** Optional. The agent tool. */
  agentTool?: AgentTool;
  /** Optional. Configuration for tool behavior in fake mode. */
  toolFakeConfig?: ToolFakeConfig;
  /** Optional. The system tool. */
  systemTool?: SystemTool;
  /** Optional. The remote agent tool. */
  remoteAgentTool?: RemoteAgentTool;
  /** Output only. Timestamp when the tool was last updated. */
  updateTime?: string;
  /** Output only. Timestamp when the tool was created. */
  createTime?: string;
  /** Optional. The MCP tool. An MCP tool cannot be created or updated directly and is managed by the MCP toolset. */
  mcpTool?: McpTool;
  /** Optional. The google search tool. */
  googleSearchTool?: GoogleSearchTool;
  /** Optional. The python function tool. */
  pythonFunction?: PythonFunction;
  /** Optional. The client function. */
  clientFunction?: ClientFunction;
  /** Optional. The data store tool. */
  dataStoreTool?: DataStoreTool;
  /** Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes. */
  etag?: string;
  /** Optional. The open API tool. */
  openApiTool?: OpenApiTool;
  /** Optional. The execution type of the tool. */
  executionType?:
    | "EXECUTION_TYPE_UNSPECIFIED"
    | "SYNCHRONOUS"
    | "ASYNCHRONOUS"
    | (string & {});
  /** Optional. The widget tool. */
  widgetTool?: WidgetTool;
  /** Optional. The Integration Connector tool. */
  connectorTool?: ConnectorTool;
}

export const Tool: Schema.Schema<Tool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    timeout: Schema.optional(Schema.String),
    fileSearchTool: Schema.optional(FileSearchTool),
    generatedSummary: Schema.optional(Schema.String),
    agentTool: Schema.optional(AgentTool),
    toolFakeConfig: Schema.optional(ToolFakeConfig),
    systemTool: Schema.optional(SystemTool),
    remoteAgentTool: Schema.optional(RemoteAgentTool),
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    mcpTool: Schema.optional(McpTool),
    googleSearchTool: Schema.optional(GoogleSearchTool),
    pythonFunction: Schema.optional(PythonFunction),
    clientFunction: Schema.optional(ClientFunction),
    dataStoreTool: Schema.optional(DataStoreTool),
    etag: Schema.optional(Schema.String),
    openApiTool: Schema.optional(OpenApiTool),
    executionType: Schema.optional(Schema.String),
    widgetTool: Schema.optional(WidgetTool),
    connectorTool: Schema.optional(ConnectorTool),
  }).annotate({ identifier: "Tool" });

export interface RetrieveToolsResponse {
  /** The list of tools that are included in the specified toolset. */
  tools?: ReadonlyArray<Tool>;
}

export const RetrieveToolsResponse: Schema.Schema<RetrieveToolsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tools: Schema.optional(Schema.Array(Tool)),
  }).annotate({ identifier: "RetrieveToolsResponse" });

export interface MetricAnalysisSettings {
  /** Optional. Whether to collect conversation data for llm analysis metrics. If true, conversation data will not be collected for llm analysis metrics; otherwise, conversation data will be collected. */
  llmMetricsOptedOut?: boolean;
}

export const MetricAnalysisSettings: Schema.Schema<MetricAnalysisSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    llmMetricsOptedOut: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "MetricAnalysisSettings" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface ToolsetTool {
  /** Required. The resource name of the Toolset from which this tool is derived. Format: `projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}` */
  toolset?: string;
  /** Optional. The tool ID to filter the tools to retrieve the schema for. */
  toolId?: string;
}

export const ToolsetTool: Schema.Schema<ToolsetTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolset: Schema.optional(Schema.String),
    toolId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ToolsetTool" });

export interface ToolCall {
  /** Optional. The toolset tool to execute. */
  toolsetTool?: ToolsetTool;
  /** Output only. Display name of the tool. */
  displayName?: string;
  /** Optional. The unique identifier of the tool call. If populated, the client should return the execution result with the matching ID in ToolResponse. */
  id?: string;
  /** Optional. The name of the tool to execute. Format: `projects/{project}/locations/{location}/apps/{app}/tools/{tool}` */
  tool?: string;
  /** Optional. The input parameters and values for the tool in JSON object format. */
  args?: Record<string, unknown>;
}

export const ToolCall: Schema.Schema<ToolCall> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolsetTool: Schema.optional(ToolsetTool),
    displayName: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    tool: Schema.optional(Schema.String),
    args: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "ToolCall" });

export interface Blob {
  /** Required. The IANA standard MIME type of the source data. */
  mimeType?: string;
  /** Required. Raw bytes of the blob. */
  data?: string;
}

export const Blob: Schema.Schema<Blob> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mimeType: Schema.optional(Schema.String),
    data: Schema.optional(Schema.String),
  }).annotate({ identifier: "Blob" });

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

export interface ToolResponse {
  /** Optional. The toolset tool that got executed. */
  toolsetTool?: ToolsetTool;
  /** Output only. Display name of the tool. */
  displayName?: string;
  /** Optional. The matching ID of the tool call the response is for. */
  id?: string;
  /** Optional. The name of the tool to execute. Format: `projects/{project}/locations/{location}/apps/{app}/tools/{tool}` */
  tool?: string;
  /** Required. The tool execution result in JSON object format. Use "output" key to specify tool response and "error" key to specify error details (if any). If "output" and "error" keys are not specified, then whole "response" is treated as tool execution result. */
  response?: Record<string, unknown>;
}

export const ToolResponse: Schema.Schema<ToolResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolsetTool: Schema.optional(ToolsetTool),
    displayName: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    tool: Schema.optional(Schema.String),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "ToolResponse" });

export interface Chunk {
  /** Optional. Text data. */
  text?: string;
  /** Optional. Transcript associated with the audio. */
  transcript?: string;
  /** Optional. Tool execution request. */
  toolCall?: ToolCall;
  /** A struct represents default variables at the start of the conversation, keyed by variable names. */
  defaultVariables?: Record<string, unknown>;
  /** Optional. Blob data. */
  blob?: Blob;
  /** Optional. Custom payload data. */
  payload?: Record<string, unknown>;
  /** Optional. Image data. */
  image?: Image;
  /** A struct represents variables that were updated in the conversation, keyed by variable names. */
  updatedVariables?: Record<string, unknown>;
  /** Optional. Agent transfer event. */
  agentTransfer?: AgentTransfer;
  /** Optional. Tool execution response. */
  toolResponse?: ToolResponse;
}

export const Chunk: Schema.Schema<Chunk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    transcript: Schema.optional(Schema.String),
    toolCall: Schema.optional(ToolCall),
    defaultVariables: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    blob: Schema.optional(Blob),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    image: Schema.optional(Image),
    updatedVariables: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    agentTransfer: Schema.optional(AgentTransfer),
    toolResponse: Schema.optional(ToolResponse),
  }).annotate({ identifier: "Chunk" });

export interface Message {
  /** Optional. Content of the message as a series of chunks. */
  chunks?: ReadonlyArray<Chunk>;
  /** Optional. The role within the conversation, e.g., user, agent. */
  role?: string;
  /** Optional. Timestamp when the message was sent or received. Should not be used if the message is part of an example. */
  eventTime?: string;
}

export const Message: Schema.Schema<Message> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    chunks: Schema.optional(Schema.Array(Chunk)),
    role: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Message" });

export interface OutputAudioConfig {
  /** Required. The sample rate (in Hertz) of the output audio data. */
  sampleRateHertz?: number;
  /** Required. The encoding of the output audio data. */
  audioEncoding?:
    | "AUDIO_ENCODING_UNSPECIFIED"
    | "LINEAR16"
    | "MULAW"
    | "ALAW"
    | (string & {});
}

export const OutputAudioConfig: Schema.Schema<OutputAudioConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sampleRateHertz: Schema.optional(Schema.Number),
    audioEncoding: Schema.optional(Schema.String),
  }).annotate({ identifier: "OutputAudioConfig" });

export interface InputAudioConfig {
  /** Optional. Whether to enable noise suppression on the input audio. Available values are "low", "moderate", "high", "very_high". */
  noiseSuppressionLevel?: string;
  /** Required. The encoding of the input audio data. */
  audioEncoding?:
    | "AUDIO_ENCODING_UNSPECIFIED"
    | "LINEAR16"
    | "MULAW"
    | "ALAW"
    | (string & {});
  /** Required. The sample rate (in Hertz) of the input audio data. */
  sampleRateHertz?: number;
}

export const InputAudioConfig: Schema.Schema<InputAudioConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    noiseSuppressionLevel: Schema.optional(Schema.String),
    audioEncoding: Schema.optional(Schema.String),
    sampleRateHertz: Schema.optional(Schema.Number),
  }).annotate({ identifier: "InputAudioConfig" });

export interface SessionConfigRemoteDialogflowQueryParameters {
  /** Optional. The end user metadata to be sent in [QueryParameters](https://cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#queryparameters). */
  endUserMetadata?: Record<string, unknown>;
  /** Optional. The HTTP headers to be sent as webhook_headers in [QueryParameters](https://cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#queryparameters). */
  webhookHeaders?: Record<string, string>;
  /** Optional. The payload to be sent in [QueryParameters](https://cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#queryparameters). */
  payload?: Record<string, unknown>;
}

export const SessionConfigRemoteDialogflowQueryParameters: Schema.Schema<SessionConfigRemoteDialogflowQueryParameters> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endUserMetadata: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    webhookHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "SessionConfigRemoteDialogflowQueryParameters" });

export interface SessionConfig {
  /** Optional. Whether to enable streaming text outputs from the model. By default, text outputs from the model are collected before sending to the client. NOTE: This is only supported for text (non-voice) sessions via StreamRunSession or BidiRunSession. */
  enableTextStreaming?: boolean;
  /** Optional. The historical context of the session, including user inputs, agent responses, and other messages. Typically, CES agent would manage session automatically so client doesn't need to explicitly populate this field. However, client can optionally override the historical contexts to force the session start from certain state. */
  historicalContexts?: ReadonlyArray<Message>;
  /** Optional. The deployment of the app to use for the session. Format: `projects/{project}/locations/{location}/apps/{app}/deployments/{deployment}` */
  deployment?: string;
  /** Optional. Configuration for generating the output audio. */
  outputAudioConfig?: OutputAudioConfig;
  /** Optional. The entry agent to handle the session. If not specified, the session will be handled by the root agent of the app. Format: `projects/{project}/locations/{location}/apps/{app}/agents/{agent}` */
  entryAgent?: string;
  /** Optional. Configuration for processing the input audio. */
  inputAudioConfig?: InputAudioConfig;
  /** Optional. Whether to use tool fakes for the session. If this field is set, the agent will attempt use tool fakes instead of calling the real tools. */
  useToolFakes?: boolean;
  /** Optional. [QueryParameters](https://cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#queryparameters) to send to the remote [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents) agent when the session control is transferred to the remote agent. */
  remoteDialogflowQueryParameters?: SessionConfigRemoteDialogflowQueryParameters;
  /** Optional. The time zone of the user. If provided, the agent will use the time zone for date and time related variables. Otherwise, the agent will use the time zone specified in the App.time_zone_settings. The format is the IANA Time Zone Database time zone, e.g. "America/Los_Angeles". */
  timeZone?: string;
}

export const SessionConfig: Schema.Schema<SessionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableTextStreaming: Schema.optional(Schema.Boolean),
    historicalContexts: Schema.optional(Schema.Array(Message)),
    deployment: Schema.optional(Schema.String),
    outputAudioConfig: Schema.optional(OutputAudioConfig),
    entryAgent: Schema.optional(Schema.String),
    inputAudioConfig: Schema.optional(InputAudioConfig),
    useToolFakes: Schema.optional(Schema.Boolean),
    remoteDialogflowQueryParameters: Schema.optional(
      SessionConfigRemoteDialogflowQueryParameters,
    ),
    timeZone: Schema.optional(Schema.String),
  }).annotate({ identifier: "SessionConfig" });

export interface VpcScSettings {
  /** Optional. The allowed HTTP(s) origins that OpenAPI tools in the App are able to directly call when VPC Service Controls are enabled. These strings must match the origin exactly, including the port if specified. For example, "https://example.com" or "https://example.com:443". This list does not yet apply to Python tools that may make direct HTTP calls. */
  allowedOrigins?: ReadonlyArray<string>;
}

export const VpcScSettings: Schema.Schema<VpcScSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowedOrigins: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "VpcScSettings" });

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

export const ChannelProfileWebWidgetConfigSecuritySettings: Schema.Schema<ChannelProfileWebWidgetConfigSecuritySettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enablePublicAccess: Schema.optional(Schema.Boolean),
    enableRecaptcha: Schema.optional(Schema.Boolean),
    enableOriginCheck: Schema.optional(Schema.Boolean),
    allowedOrigins: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ChannelProfileWebWidgetConfigSecuritySettings" });

export interface ChannelProfileWebWidgetConfig {
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
  /** Optional. The security settings of the web widget. */
  securitySettings?: ChannelProfileWebWidgetConfigSecuritySettings;
  /** Optional. The title of the web widget. */
  webWidgetTitle?: string;
}

export const ChannelProfileWebWidgetConfig: Schema.Schema<ChannelProfileWebWidgetConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    modality: Schema.optional(Schema.String),
    theme: Schema.optional(Schema.String),
    securitySettings: Schema.optional(
      ChannelProfileWebWidgetConfigSecuritySettings,
    ),
    webWidgetTitle: Schema.optional(Schema.String),
  }).annotate({ identifier: "ChannelProfileWebWidgetConfig" });

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

export interface OmnichannelIntegrationConfigWhatsappConfig {
  /** The customer's WhatsApp Business Account (WABA) ID. */
  whatsappBusinessAccountId?: string;
  /** The access token for authenticating API calls to the WhatsApp Cloud API. https://developers.facebook.com/docs/whatsapp/business-management-api/get-started/#business-integration-system-user-access-tokens */
  whatsappBusinessToken?: string;
  /** The Phone Number ID associated with the WhatsApp Business Account. */
  phoneNumberId?: string;
  /** The phone number used for sending/receiving messages. */
  phoneNumber?: string;
  /** The Meta Business Portfolio (MBP) ID. https://www.facebook.com/business/help/1710077379203657 */
  metaBusinessPortfolioId?: string;
  /** The verify token configured in the Meta App Dashboard for webhook verification. */
  webhookVerifyToken?: string;
}

export const OmnichannelIntegrationConfigWhatsappConfig: Schema.Schema<OmnichannelIntegrationConfigWhatsappConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    whatsappBusinessAccountId: Schema.optional(Schema.String),
    whatsappBusinessToken: Schema.optional(Schema.String),
    phoneNumberId: Schema.optional(Schema.String),
    phoneNumber: Schema.optional(Schema.String),
    metaBusinessPortfolioId: Schema.optional(Schema.String),
    webhookVerifyToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "OmnichannelIntegrationConfigWhatsappConfig" });

export interface OmnichannelIntegrationConfigChannelConfig {
  /** WhatsApp config. */
  whatsappConfig?: OmnichannelIntegrationConfigWhatsappConfig;
}

export const OmnichannelIntegrationConfigChannelConfig: Schema.Schema<OmnichannelIntegrationConfigChannelConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    whatsappConfig: Schema.optional(OmnichannelIntegrationConfigWhatsappConfig),
  }).annotate({ identifier: "OmnichannelIntegrationConfigChannelConfig" });

export interface OmnichannelIntegrationConfigRoutingConfig {
  /** The key of the subscriber. */
  subscriberKey?: string;
}

export const OmnichannelIntegrationConfigRoutingConfig: Schema.Schema<OmnichannelIntegrationConfigRoutingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriberKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "OmnichannelIntegrationConfigRoutingConfig" });

export interface OmnichannelIntegrationConfigCesAppConfig {
  /** The unique identifier of the CES app. Format: `projects/{project}/locations/{location}/apps/{app}` */
  app?: string;
}

export const OmnichannelIntegrationConfigCesAppConfig: Schema.Schema<OmnichannelIntegrationConfigCesAppConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    app: Schema.optional(Schema.String),
  }).annotate({ identifier: "OmnichannelIntegrationConfigCesAppConfig" });

export interface OmnichannelIntegrationConfigSubscriberConfig {
  /** Ces app config. */
  cesAppConfig?: OmnichannelIntegrationConfigCesAppConfig;
}

export const OmnichannelIntegrationConfigSubscriberConfig: Schema.Schema<OmnichannelIntegrationConfigSubscriberConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cesAppConfig: Schema.optional(OmnichannelIntegrationConfigCesAppConfig),
  }).annotate({ identifier: "OmnichannelIntegrationConfigSubscriberConfig" });

export interface OmnichannelIntegrationConfig {
  /** Optional. Various of configuration for handling App events. */
  channelConfigs?: Record<string, OmnichannelIntegrationConfigChannelConfig>;
  /** Optional. The key of routing_configs is a key of `app_configs`, value is a `RoutingConfig`, which contains subscriber's key. */
  routingConfigs?: Record<string, OmnichannelIntegrationConfigRoutingConfig>;
  /** Optional. Various of subscribers configs. */
  subscriberConfigs?: Record<
    string,
    OmnichannelIntegrationConfigSubscriberConfig
  >;
}

export const OmnichannelIntegrationConfig: Schema.Schema<OmnichannelIntegrationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channelConfigs: Schema.optional(
      Schema.Record(Schema.String, OmnichannelIntegrationConfigChannelConfig),
    ),
    routingConfigs: Schema.optional(
      Schema.Record(Schema.String, OmnichannelIntegrationConfigRoutingConfig),
    ),
    subscriberConfigs: Schema.optional(
      Schema.Record(
        Schema.String,
        OmnichannelIntegrationConfigSubscriberConfig,
      ),
    ),
  }).annotate({ identifier: "OmnichannelIntegrationConfig" });

export interface RetrieveToolSchemaRequest {
  /** Optional. The name of the tool to retrieve the schema for. Format: projects/{project}/locations/{location}/apps/{app}/tools/{tool} */
  tool?: string;
  /** Optional. The toolset tool to retrieve the schema for. Only one tool should match the predicate from the toolset. Otherwise, an error will be returned. */
  toolsetTool?: ToolsetTool;
}

export const RetrieveToolSchemaRequest: Schema.Schema<RetrieveToolSchemaRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tool: Schema.optional(Schema.String),
    toolsetTool: Schema.optional(ToolsetTool),
  }).annotate({ identifier: "RetrieveToolSchemaRequest" });

export interface GuardrailModelSafetySafetySetting {
  /** Required. The harm block threshold. */
  threshold?:
    | "HARM_BLOCK_THRESHOLD_UNSPECIFIED"
    | "BLOCK_LOW_AND_ABOVE"
    | "BLOCK_MEDIUM_AND_ABOVE"
    | "BLOCK_ONLY_HIGH"
    | "BLOCK_NONE"
    | "OFF"
    | (string & {});
  /** Required. The harm category. */
  category?:
    | "HARM_CATEGORY_UNSPECIFIED"
    | "HARM_CATEGORY_HATE_SPEECH"
    | "HARM_CATEGORY_DANGEROUS_CONTENT"
    | "HARM_CATEGORY_HARASSMENT"
    | "HARM_CATEGORY_SEXUALLY_EXPLICIT"
    | (string & {});
}

export const GuardrailModelSafetySafetySetting: Schema.Schema<GuardrailModelSafetySafetySetting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    threshold: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
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

export interface BigQueryExportSettings {
  /** Optional. The **project ID** of the BigQuery dataset to export the data to. Note: If the BigQuery dataset is in a different project from the app, you should grant `roles/bigquery.admin` role to the CES service agent `service-@gcp-sa-ces.iam.gserviceaccount.com`. */
  project?: string;
  /** Optional. The BigQuery **dataset ID** to export the data to. */
  dataset?: string;
  /** Optional. Indicates whether the BigQuery export is enabled. */
  enabled?: boolean;
}

export const BigQueryExportSettings: Schema.Schema<BigQueryExportSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.optional(Schema.String),
    dataset: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "BigQueryExportSettings" });

export interface Callback {
  /** Required. The python code to execute for the callback. */
  pythonCode?: string;
  /** Optional. If enabled, the callback will also be executed on intermediate model outputs. This setting only affects after model callback. **ENABLE WITH CAUTION**. Typically after model callback only needs to be executed after receiving all model responses. Enabling proactive execution may have negative implication on the execution cost and latency, and should only be enabled in rare situations. */
  proactiveExecutionEnabled?: boolean;
  /** Optional. Human-readable description of the callback. */
  description?: string;
  /** Optional. Whether the callback is disabled. Disabled callbacks are ignored by the agent. */
  disabled?: boolean;
}

export const Callback: Schema.Schema<Callback> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pythonCode: Schema.optional(Schema.String),
    proactiveExecutionEnabled: Schema.optional(Schema.Boolean),
    description: Schema.optional(Schema.String),
    disabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Callback" });

export interface ExpressionCondition {
  /** Required. The string representation of cloud.api.Expression condition. */
  expression?: string;
}

export const ExpressionCondition: Schema.Schema<ExpressionCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExpressionCondition" });

export interface PythonCodeCondition {
  /** Required. The python code to execute. */
  pythonCode?: string;
}

export const PythonCodeCondition: Schema.Schema<PythonCodeCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pythonCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "PythonCodeCondition" });

export interface TransferRuleDeterministicTransfer {
  /** Optional. A rule that evaluates a session state condition. If the condition evaluates to true, the transfer occurs. */
  expressionCondition?: ExpressionCondition;
  /** Optional. A rule that uses Python code block to evaluate the conditions. If the condition evaluates to true, the transfer occurs. */
  pythonCodeCondition?: PythonCodeCondition;
}

export const TransferRuleDeterministicTransfer: Schema.Schema<TransferRuleDeterministicTransfer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expressionCondition: Schema.optional(ExpressionCondition),
    pythonCodeCondition: Schema.optional(PythonCodeCondition),
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

export interface AgentRemoteDialogflowAgent {
  /** Optional. The environment ID of the Dialogflow agent to be used for the agent execution. If not specified, the draft environment will be used. */
  environmentId?: string;
  /** Optional. The flow ID of the flow in the Dialogflow agent. */
  flowId?: string;
  /** Optional. The mapping of the Dialogflow session parameters names to the app variables names to be sent back to the CES agent after the Dialogflow agent execution ends. */
  outputVariableMapping?: Record<string, string>;
  /** Optional. The mapping of the app variables names to the Dialogflow session parameters names to be sent to the Dialogflow agent as input. */
  inputVariableMapping?: Record<string, string>;
  /** Optional. Indicates whether to respect the message-level interruption settings configured in the Dialogflow agent. * If false: all response messages from the Dialogflow agent follow the app-level barge-in settings. * If true: only response messages with [`allow_playback_interruption`](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#text) set to true will be interruptable, all other messages follow the app-level barge-in settings. */
  respectResponseInterruptionSettings?: boolean;
  /** Required. The [Dialogflow](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent) agent resource name. Format: `projects/{project}/locations/{location}/agents/{agent}` */
  agent?: string;
}

export const AgentRemoteDialogflowAgent: Schema.Schema<AgentRemoteDialogflowAgent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    environmentId: Schema.optional(Schema.String),
    flowId: Schema.optional(Schema.String),
    outputVariableMapping: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    inputVariableMapping: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    respectResponseInterruptionSettings: Schema.optional(Schema.Boolean),
    agent: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentRemoteDialogflowAgent" });

export interface AgentLlmAgent {}

export const AgentLlmAgent: Schema.Schema<AgentLlmAgent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AgentLlmAgent",
  });

export interface AgentAgentToolset {
  /** Optional. The tools IDs to filter the toolset. */
  toolIds?: ReadonlyArray<string>;
  /** Required. The resource name of the toolset. Format: `projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}` */
  toolset?: string;
}

export const AgentAgentToolset: Schema.Schema<AgentAgentToolset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolIds: Schema.optional(Schema.Array(Schema.String)),
    toolset: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentAgentToolset" });

export interface Agent {
  /** Output only. Timestamp when the agent was last updated. */
  updateTime?: string;
  /** Optional. The callbacks to execute before the tool is invoked. If there are multiple tool invocations, the callback will be executed multiple times. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped. */
  beforeToolCallbacks?: ReadonlyArray<Callback>;
  /** Optional. Configurations for the LLM model. */
  modelSettings?: ModelSettings;
  /** Output only. Timestamp when the agent was created. */
  createTime?: string;
  /** Optional. The callbacks to execute before the model is called. If there are multiple calls to the model, the callback will be executed multiple times. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped. */
  beforeModelCallbacks?: ReadonlyArray<Callback>;
  /** Optional. Agent transfer rules. If multiple rules match, the first one in the list will be used. */
  transferRules?: ReadonlyArray<TransferRule>;
  /** Optional. List of available tools for the agent. Format: `projects/{project}/locations/{location}/apps/{app}/tools/{tool}` */
  tools?: ReadonlyArray<string>;
  /** Identifier. The unique identifier of the agent. Format: `projects/{project}/locations/{location}/apps/{app}/agents/{agent}` */
  name?: string;
  /** Optional. Instructions for the LLM model to guide the agent's behavior. */
  instruction?: string;
  /** Optional. The callbacks to execute after the model is called. If there are multiple calls to the model, the callback will be executed multiple times. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped. */
  afterModelCallbacks?: ReadonlyArray<Callback>;
  /** Required. Display name of the agent. */
  displayName?: string;
  /** Optional. The callbacks to execute after the tool is invoked. If there are multiple tool invocations, the callback will be executed multiple times. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped. */
  afterToolCallbacks?: ReadonlyArray<Callback>;
  /** Optional. List of guardrails for the agent. Format: `projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}` */
  guardrails?: ReadonlyArray<string>;
  /** Optional. The remote [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents) agent to be used for the agent execution. If this field is set, all other agent level properties will be ignored. Note: If the Dialogflow agent is in a different project from the app, you should grant `roles/dialogflow.client` to the CES service agent `service-@gcp-sa-ces.iam.gserviceaccount.com`. */
  remoteDialogflowAgent?: AgentRemoteDialogflowAgent;
  /** Output only. If the agent is generated by the LLM assistant, this field contains a descriptive summary of the generation. */
  generatedSummary?: string;
  /** Optional. The callbacks to execute before the agent is called. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped. */
  beforeAgentCallbacks?: ReadonlyArray<Callback>;
  /** Optional. The callbacks to execute after the agent is called. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped. */
  afterAgentCallbacks?: ReadonlyArray<Callback>;
  /** Optional. Human-readable description of the agent. */
  description?: string;
  /** Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes. */
  etag?: string;
  /** Optional. The default agent type. */
  llmAgent?: AgentLlmAgent;
  /** Output only. Misconfigurations or errors in the agent that may affect agent quality. */
  validationErrors?: ReadonlyArray<string>;
  /** Optional. List of toolsets for the agent. */
  toolsets?: ReadonlyArray<AgentAgentToolset>;
  /** Optional. List of child agents in the agent tree. Format: `projects/{project}/locations/{location}/apps/{app}/agents/{agent}` */
  childAgents?: ReadonlyArray<string>;
}

export const Agent: Schema.Schema<Agent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    beforeToolCallbacks: Schema.optional(Schema.Array(Callback)),
    modelSettings: Schema.optional(ModelSettings),
    createTime: Schema.optional(Schema.String),
    beforeModelCallbacks: Schema.optional(Schema.Array(Callback)),
    transferRules: Schema.optional(Schema.Array(TransferRule)),
    tools: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    instruction: Schema.optional(Schema.String),
    afterModelCallbacks: Schema.optional(Schema.Array(Callback)),
    displayName: Schema.optional(Schema.String),
    afterToolCallbacks: Schema.optional(Schema.Array(Callback)),
    guardrails: Schema.optional(Schema.Array(Schema.String)),
    remoteDialogflowAgent: Schema.optional(AgentRemoteDialogflowAgent),
    generatedSummary: Schema.optional(Schema.String),
    beforeAgentCallbacks: Schema.optional(Schema.Array(Callback)),
    afterAgentCallbacks: Schema.optional(Schema.Array(Callback)),
    description: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    llmAgent: Schema.optional(AgentLlmAgent),
    validationErrors: Schema.optional(Schema.Array(Schema.String)),
    toolsets: Schema.optional(Schema.Array(AgentAgentToolset)),
    childAgents: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Agent" });

export interface ListAgentsResponse {
  /** The list of agents. */
  agents?: ReadonlyArray<Agent>;
  /** A token that can be sent as ListAgentsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListAgentsResponse: Schema.Schema<ListAgentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agents: Schema.optional(Schema.Array(Agent)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAgentsResponse" });

export interface Span {
  /** Output only. The start time of the span. */
  startTime?: string;
  /** Output only. The duration of the span. */
  duration?: string;
  /** Output only. Key-value attributes associated with the span. */
  attributes?: Record<string, unknown>;
  /** Output only. The name of the span. */
  name?: string;
  /** Output only. The child spans that are nested under this span. */
  childSpans?: ReadonlyArray<Span>;
  /** Output only. The end time of the span. */
  endTime?: string;
}

export const Span: Schema.Schema<Span> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      startTime: Schema.optional(Schema.String),
      duration: Schema.optional(Schema.String),
      attributes: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      name: Schema.optional(Schema.String),
      childSpans: Schema.optional(Schema.Array(Span)),
      endTime: Schema.optional(Schema.String),
    }),
  ).annotate({ identifier: "Span" }) as any as Schema.Schema<Span>;

export interface ConversationTurn {
  /** Optional. List of messages in the conversation turn, including user input, agent responses and intermediate events during the processing. */
  messages?: ReadonlyArray<Message>;
  /** Optional. The root span of the action processing. */
  rootSpan?: Span;
}

export const ConversationTurn: Schema.Schema<ConversationTurn> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messages: Schema.optional(Schema.Array(Message)),
    rootSpan: Schema.optional(Span),
  }).annotate({ identifier: "ConversationTurn" });

export interface Conversation {
  /** Required. The turns in the conversation. */
  turns?: ReadonlyArray<ConversationTurn>;
  /** DEPRECATED. Please use input_types instead. */
  channelType?:
    | "CHANNEL_TYPE_UNSPECIFIED"
    | "TEXT"
    | "AUDIO"
    | "MULTIMODAL"
    | (string & {});
  /** Output only. Timestamp when the conversation was completed. */
  endTime?: string;
  /** Output only. Timestamp when the conversation was created. */
  startTime?: string;
  /** Identifier. The unique identifier of the conversation. Format: `projects/{project}/locations/{location}/apps/{app}/conversations/{conversation}` */
  name?: string;
  /** Output only. The language code of the conversation. */
  languageCode?: string;
  /** Output only. The agent that initially handles the conversation. If not specified, the conversation is handled by the root agent. Format: `projects/{project}/locations/{location}/apps/{app}/agents/{agent}` */
  entryAgent?: string;
  /** Output only. The deployment of the app used for processing the conversation. Format: `projects/{project}/locations/{location}/apps/{app}/deployments/{deployment}` */
  deployment?: string;
  /** Output only. The version of the app used for processing the conversation. Format: `projects/{project}/locations/{location}/apps/{app}/versions/{version}` */
  appVersion?: string;
  /** Output only. The number of turns in the conversation. */
  turnCount?: number;
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
  /** Deprecated. Use turns instead. */
  messages?: ReadonlyArray<Message>;
  /** Output only. Indicate the source of the conversation. */
  source?:
    | "SOURCE_UNSPECIFIED"
    | "LIVE"
    | "SIMULATOR"
    | "EVAL"
    | "AGENT_TOOL"
    | (string & {});
}

export const Conversation: Schema.Schema<Conversation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    turns: Schema.optional(Schema.Array(ConversationTurn)),
    channelType: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    entryAgent: Schema.optional(Schema.String),
    deployment: Schema.optional(Schema.String),
    appVersion: Schema.optional(Schema.String),
    turnCount: Schema.optional(Schema.Number),
    inputTypes: Schema.optional(Schema.Array(Schema.String)),
    messages: Schema.optional(Schema.Array(Message)),
    source: Schema.optional(Schema.String),
  }).annotate({ identifier: "Conversation" });

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

export interface EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds {
  /** Optional. The tool matching settings. An extra tool call is a tool call that is present in the execution but does not match any tool call in the golden expectation. */
  toolMatchingSettings?: EvaluationMetricsThresholdsToolMatchingSettings;
  /** Optional. The turn level metrics thresholds. */
  turnLevelMetricsThresholds?: EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds;
  /** Optional. The expectation level metrics thresholds. */
  expectationLevelMetricsThresholds?: EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds;
}

export const EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds: Schema.Schema<EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolMatchingSettings: Schema.optional(
      EvaluationMetricsThresholdsToolMatchingSettings,
    ),
    turnLevelMetricsThresholds: Schema.optional(
      EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds,
    ),
    expectationLevelMetricsThresholds: Schema.optional(
      EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds,
    ),
  }).annotate({
    identifier: "EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds",
  });

export interface EvaluationMetricsThresholds {
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
  /** Optional. The golden evaluation metrics thresholds. */
  goldenEvaluationMetricsThresholds?: EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds;
  /** Optional. Deprecated: Use `golden_hallucination_metric_behavior` instead. The hallucination metric behavior is currently used for golden evaluations. */
  hallucinationMetricBehavior?:
    | "HALLUCINATION_METRIC_BEHAVIOR_UNSPECIFIED"
    | "DISABLED"
    | "ENABLED"
    | (string & {});
}

export const EvaluationMetricsThresholds: Schema.Schema<EvaluationMetricsThresholds> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    goldenHallucinationMetricBehavior: Schema.optional(Schema.String),
    scenarioHallucinationMetricBehavior: Schema.optional(Schema.String),
    goldenEvaluationMetricsThresholds: Schema.optional(
      EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds,
    ),
    hallucinationMetricBehavior: Schema.optional(Schema.String),
  }).annotate({ identifier: "EvaluationMetricsThresholds" });

export interface McpToolset {
  /** Optional. Authentication information required to access tools and execute a tool against the MCP server. For bearer token authentication, the token applies only to tool execution, not to listing tools. This requires that tools can be listed without authentication. */
  apiAuthentication?: ApiAuthentication;
  /** Optional. The custom headers to send in the request to the MCP server. The values must be in the format `$context.variables.` and can be set in the session variables. See https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/tool/open-api#openapi-injection for more details. */
  customHeaders?: Record<string, string>;
  /** Optional. The TLS configuration. Includes the custom server certificates that the client should trust. */
  tlsConfig?: TlsConfig;
  /** Required. The address of the MCP server, for example, "https://example.com/mcp/". If the server is built with the MCP SDK, the url should be suffixed with "/mcp/". Only Streamable HTTP transport based servers are supported. See https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#streamable-http for more details. */
  serverAddress?: string;
  /** Optional. Service Directory configuration for VPC-SC, used to resolve service names within a perimeter. */
  serviceDirectoryConfig?: ServiceDirectoryConfig;
}

export const McpToolset: Schema.Schema<McpToolset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiAuthentication: Schema.optional(ApiAuthentication),
    customHeaders: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    tlsConfig: Schema.optional(TlsConfig),
    serverAddress: Schema.optional(Schema.String),
    serviceDirectoryConfig: Schema.optional(ServiceDirectoryConfig),
  }).annotate({ identifier: "McpToolset" });

export interface ConnectorToolset {
  /** Required. The full resource name of the referenced Integration Connectors Connection. Format: `projects/{project}/locations/{location}/connections/{connection}` */
  connection?: string;
  /** Optional. Configures how authentication is handled in Integration Connectors. By default, an admin authentication is passed in the Integration Connectors API requests. You can override it with a different end-user authentication config. **Note**: The Connection must have authentication override enabled in order to specify an EUC configuration here - otherwise, the Toolset creation will fail. See: https://cloud.google.com/application-integration/docs/configure-connectors-task#configure-authentication-override */
  authConfig?: EndUserAuthConfig;
  /** Required. The list of connector actions/entity operations to generate tools for. */
  connectorActions?: ReadonlyArray<Action>;
}

export const ConnectorToolset: Schema.Schema<ConnectorToolset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connection: Schema.optional(Schema.String),
    authConfig: Schema.optional(EndUserAuthConfig),
    connectorActions: Schema.optional(Schema.Array(Action)),
  }).annotate({ identifier: "ConnectorToolset" });

export interface OpenApiToolset {
  /** Optional. If true, the agent will ignore unknown fields in the API response for all operations defined in the OpenAPI schema. */
  ignoreUnknownFields?: boolean;
  /** Optional. The TLS configuration. Includes the custom server certificates */
  tlsConfig?: TlsConfig;
  /** Optional. Service Directory configuration. */
  serviceDirectoryConfig?: ServiceDirectoryConfig;
  /** Optional. The server URL of the Open API schema. This field is only set in toolsets in the environment dependencies during the export process if the schema contains a server url. During the import process, if this url is present in the environment dependencies and the schema has the $env_var placeholder, it will replace the placeholder in the schema. */
  url?: string;
  /** Optional. Authentication information required by the API. */
  apiAuthentication?: ApiAuthentication;
  /** Required. The OpenAPI schema of the toolset. */
  openApiSchema?: string;
}

export const OpenApiToolset: Schema.Schema<OpenApiToolset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ignoreUnknownFields: Schema.optional(Schema.Boolean),
    tlsConfig: Schema.optional(TlsConfig),
    serviceDirectoryConfig: Schema.optional(ServiceDirectoryConfig),
    url: Schema.optional(Schema.String),
    apiAuthentication: Schema.optional(ApiAuthentication),
    openApiSchema: Schema.optional(Schema.String),
  }).annotate({ identifier: "OpenApiToolset" });

export interface Toolset {
  /** Optional. A toolset that contains a list of tools that are offered by the MCP server. */
  mcpToolset?: McpToolset;
  /** Optional. The description of the toolset. */
  description?: string;
  /** Output only. Timestamp when the toolset was last updated. */
  updateTime?: string;
  /** Output only. Timestamp when the toolset was created. */
  createTime?: string;
  /** Optional. A toolset that generates tools from an Integration Connectors Connection. */
  connectorToolset?: ConnectorToolset;
  /** Optional. A toolset that contains a list of tools that are defined by an OpenAPI schema. */
  openApiToolset?: OpenApiToolset;
  /** Optional. Configuration for tools behavior in fake mode. */
  toolFakeConfig?: ToolFakeConfig;
  /** Identifier. The unique identifier of the toolset. Format: `projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}` */
  name?: string;
  /** ETag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes. */
  etag?: string;
  /** Optional. The display name of the toolset. Must be unique within the same app. */
  displayName?: string;
  /** Optional. The execution type of the tools in the toolset. */
  executionType?:
    | "EXECUTION_TYPE_UNSPECIFIED"
    | "SYNCHRONOUS"
    | "ASYNCHRONOUS"
    | (string & {});
}

export const Toolset: Schema.Schema<Toolset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mcpToolset: Schema.optional(McpToolset),
    description: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    connectorToolset: Schema.optional(ConnectorToolset),
    openApiToolset: Schema.optional(OpenApiToolset),
    toolFakeConfig: Schema.optional(ToolFakeConfig),
    name: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    executionType: Schema.optional(Schema.String),
  }).annotate({ identifier: "Toolset" });

export interface ListToolsetsResponse {
  /** The list of toolsets. */
  toolsets?: ReadonlyArray<Toolset>;
  /** A token that can be sent as ListToolsetsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListToolsetsResponse: Schema.Schema<ListToolsetsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolsets: Schema.optional(Schema.Array(Toolset)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListToolsetsResponse" });

export interface RestoreAppVersionRequest {}

export const RestoreAppVersionRequest: Schema.Schema<RestoreAppVersionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RestoreAppVersionRequest",
  });

export interface Location {
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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

export interface RetrieveToolsRequest {
  /** Optional. The identifiers of the tools to retrieve from the toolset. If empty, all tools in the toolset will be returned. */
  toolIds?: ReadonlyArray<string>;
}

export const RetrieveToolsRequest: Schema.Schema<RetrieveToolsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "RetrieveToolsRequest" });

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

export interface EndSession {
  /** Optional. Provides additional information about the end session signal, such as the reason for ending the session. */
  metadata?: Record<string, unknown>;
}

export const EndSession: Schema.Schema<EndSession> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const ImportAppRequestImportOptions: Schema.Schema<ImportAppRequestImportOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conflictResolutionStrategy: Schema.optional(Schema.String),
  }).annotate({ identifier: "ImportAppRequestImportOptions" });

export interface TimeZoneSettings {
  /** Optional. The time zone of the app from the [time zone database](https://www.iana.org/time-zones), e.g., America/Los_Angeles, Europe/Paris. */
  timeZone?: string;
}

export const TimeZoneSettings: Schema.Schema<TimeZoneSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timeZone: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimeZoneSettings" });

export interface Changelog {
  /** Output only. The action that was performed on the resource. */
  action?: string;
  /** Output only. The time when the change was made. */
  createTime?: string;
  /** Output only. The dependent resources that were changed. */
  dependentResources?: ReadonlyArray<Record<string, unknown>>;
  /** Output only. The new resource after the change. */
  newResource?: Record<string, unknown>;
  /** Output only. Description of the change. which typically captures the changed fields in the resource. */
  description?: string;
  /** Output only. The original resource before the change. */
  originalResource?: Record<string, unknown>;
  /** Identifier. The unique identifier of the changelog. Format: `projects/{project}/locations/{location}/apps/{app}/changelogs/{changelog}` */
  name?: string;
  /** Output only. Email address of the change author. */
  author?: string;
  /** Output only. Display name of the change. It typically should be the display name of the resource that was changed. */
  displayName?: string;
  /** Output only. The resource that was changed. */
  resource?: string;
  /** Output only. The type of the resource that was changed. */
  resourceType?: string;
  /** Output only. The monotonically increasing sequence number of the changelog. */
  sequenceNumber?: string;
}

export const Changelog: Schema.Schema<Changelog> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    dependentResources: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    newResource: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    description: Schema.optional(Schema.String),
    originalResource: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    name: Schema.optional(Schema.String),
    author: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
    sequenceNumber: Schema.optional(Schema.String),
  }).annotate({ identifier: "Changelog" });

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

export interface GoogleSearchSuggestions {
  /** Compliant HTML and CSS styling for search suggestions. The provided HTML and CSS automatically adapts to your device settings, displaying in either light or dark mode indicated by `@media(prefers-color-scheme)`. */
  htmls?: ReadonlyArray<string>;
  /** List of queries used to perform the google search along with the search result URIs forming the search suggestions. */
  webSearchQueries?: ReadonlyArray<WebSearchQuery>;
}

export const GoogleSearchSuggestions: Schema.Schema<GoogleSearchSuggestions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    htmls: Schema.optional(Schema.Array(Schema.String)),
    webSearchQueries: Schema.optional(Schema.Array(WebSearchQuery)),
  }).annotate({ identifier: "GoogleSearchSuggestions" });

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

export interface TriggerActionTransferAgent {
  /** Required. The name of the agent to transfer the conversation to. The agent must be in the same app as the current agent. Format: `projects/{project}/locations/{location}/apps/{app}/agents/{agent}` */
  agent?: string;
}

export const TriggerActionTransferAgent: Schema.Schema<TriggerActionTransferAgent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agent: Schema.optional(Schema.String),
  }).annotate({ identifier: "TriggerActionTransferAgent" });

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

export interface TriggerActionGenerativeAnswer {
  /** Required. The prompt to use for the generative answer. */
  prompt?: string;
}

export const TriggerActionGenerativeAnswer: Schema.Schema<TriggerActionGenerativeAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    prompt: Schema.optional(Schema.String),
  }).annotate({ identifier: "TriggerActionGenerativeAnswer" });

export interface TriggerAction {
  /** Optional. Transfer the conversation to a different agent. */
  transferAgent?: TriggerActionTransferAgent;
  /** Optional. Immediately respond with a preconfigured response. */
  respondImmediately?: TriggerActionRespondImmediately;
  /** Optional. Respond with a generative answer. */
  generativeAnswer?: TriggerActionGenerativeAnswer;
}

export const TriggerAction: Schema.Schema<TriggerAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transferAgent: Schema.optional(TriggerActionTransferAgent),
    respondImmediately: Schema.optional(TriggerActionRespondImmediately),
    generativeAnswer: Schema.optional(TriggerActionGenerativeAnswer),
  }).annotate({ identifier: "TriggerAction" });

export interface ErrorHandlingSettingsEndSessionConfig {
  /** Optional. Whether to escalate the session in EndSession. If session is escalated, metadata in EndSession will contain `session_escalated = true`. See https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/deploy/google-telephony-platform#transfer_a_call_to_a_human_agent for details. */
  escalateSession?: boolean;
}

export const ErrorHandlingSettingsEndSessionConfig: Schema.Schema<ErrorHandlingSettingsEndSessionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    escalateSession: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ErrorHandlingSettingsEndSessionConfig" });

export interface ExperimentConfigVersionReleaseTrafficAllocation {
  /** Optional. Id of the traffic allocation. Free format string, up to 128 characters. */
  id?: string;
  /** Optional. Traffic percentage of the traffic allocation. Must be between 0 and 100. */
  trafficPercentage?: number;
  /** Optional. App version of the traffic allocation. Format: `projects/{project}/locations/{location}/apps/{app}/versions/{version}` */
  appVersion?: string;
}

export const ExperimentConfigVersionReleaseTrafficAllocation: Schema.Schema<ExperimentConfigVersionReleaseTrafficAllocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export interface GuardrailContentFilter {
  /** Optional. List of banned phrases. Applies only to agent responses. */
  bannedContentsInAgentResponse?: ReadonlyArray<string>;
  /** Optional. If true, diacritics are ignored during matching. */
  disregardDiacritics?: boolean;
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
    bannedContentsInAgentResponse: Schema.optional(Schema.Array(Schema.String)),
    disregardDiacritics: Schema.optional(Schema.Boolean),
    bannedContents: Schema.optional(Schema.Array(Schema.String)),
    bannedContentsInUserInput: Schema.optional(Schema.Array(Schema.String)),
    matchType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GuardrailContentFilter" });

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

export interface RedactionConfig {
  /** Optional. [DLP](https://cloud.google.com/dlp/docs) inspect template name to configure detection of sensitive data types. Format: `projects/{project}/locations/{location}/inspectTemplates/{inspect_template}` */
  inspectTemplate?: string;
  /** Optional. [DLP](https://cloud.google.com/dlp/docs) deidentify template name to instruct on how to de-identify content. Format: `projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}` */
  deidentifyTemplate?: string;
  /** Optional. If true, redaction will be applied in various logging scenarios, including conversation history, Cloud Logging and audio recording. */
  enableRedaction?: boolean;
}

export const RedactionConfig: Schema.Schema<RedactionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inspectTemplate: Schema.optional(Schema.String),
    deidentifyTemplate: Schema.optional(Schema.String),
    enableRedaction: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "RedactionConfig" });

export interface CloudLoggingSettings {
  /** Optional. Whether to enable Cloud Logging for the sessions. */
  enableCloudLogging?: boolean;
}

export const CloudLoggingSettings: Schema.Schema<CloudLoggingSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableCloudLogging: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "CloudLoggingSettings" });

export interface LoggingSettings {
  /** Optional. Settings to describe the conversation logging behaviors for the app. */
  conversationLoggingSettings?: ConversationLoggingSettings;
  /** Optional. Configuration for how audio interactions should be recorded. */
  audioRecordingConfig?: AudioRecordingConfig;
  /** Optional. Settings to describe the BigQuery export behaviors for the app. The conversation data will be exported to BigQuery tables if it is enabled. */
  bigqueryExportSettings?: BigQueryExportSettings;
  /** Optional. Settings to describe the conversation data collection behaviors for the LLM analysis pipeline for the app. */
  metricAnalysisSettings?: MetricAnalysisSettings;
  /** Optional. Configuration for how audio interactions should be recorded for the evaluation. By default, audio recording is not enabled for evaluation sessions. */
  evaluationAudioRecordingConfig?: AudioRecordingConfig;
  /** Optional. Configuration for how sensitive data should be redacted. */
  redactionConfig?: RedactionConfig;
  /** Optional. Settings to describe the Cloud Logging behaviors for the app. */
  cloudLoggingSettings?: CloudLoggingSettings;
  /** Optional. Configures recording of unredacted audio. Use this to maintain a raw backup with restricted access when audio redaction is enabled, typically for auditing or monitoring purposes. */
  unredactedAudioRecordingConfig?: AudioRecordingConfig;
}

export const LoggingSettings: Schema.Schema<LoggingSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversationLoggingSettings: Schema.optional(ConversationLoggingSettings),
    audioRecordingConfig: Schema.optional(AudioRecordingConfig),
    bigqueryExportSettings: Schema.optional(BigQueryExportSettings),
    metricAnalysisSettings: Schema.optional(MetricAnalysisSettings),
    evaluationAudioRecordingConfig: Schema.optional(AudioRecordingConfig),
    redactionConfig: Schema.optional(RedactionConfig),
    cloudLoggingSettings: Schema.optional(CloudLoggingSettings),
    unredactedAudioRecordingConfig: Schema.optional(AudioRecordingConfig),
  }).annotate({ identifier: "LoggingSettings" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "Status" });

export interface Operation {
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    done: Schema.optional(Schema.Boolean),
    error: Schema.optional(Status),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Operation" });

export interface GuardrailLlmPolicy {
  /** Optional. By default, the LLM policy check is bypassed for short utterances. Enabling this setting applies the policy check to all utterances, including those that would normally be skipped. */
  allowShortUtterance?: boolean;
  /** Required. Defines when to apply the policy check during the conversation. If set to `POLICY_SCOPE_UNSPECIFIED`, the policy will be applied to the user input. When applying the policy to the agent response, additional latency will be introduced before the agent can respond. */
  policyScope?:
    | "POLICY_SCOPE_UNSPECIFIED"
    | "USER_QUERY"
    | "AGENT_RESPONSE"
    | "USER_QUERY_AND_AGENT_RESPONSE"
    | (string & {});
  /** Optional. If an error occurs during the policy check, fail open and do not trigger the guardrail. */
  failOpen?: boolean;
  /** Optional. When checking this policy, consider the last 'n' messages in the conversation. When not set a default value of 10 will be used. */
  maxConversationMessages?: number;
  /** Optional. Model settings. */
  modelSettings?: ModelSettings;
  /** Required. Policy prompt. */
  prompt?: string;
}

export const GuardrailLlmPolicy: Schema.Schema<GuardrailLlmPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowShortUtterance: Schema.optional(Schema.Boolean),
    policyScope: Schema.optional(Schema.String),
    failOpen: Schema.optional(Schema.Boolean),
    maxConversationMessages: Schema.optional(Schema.Number),
    modelSettings: Schema.optional(ModelSettings),
    prompt: Schema.optional(Schema.String),
  }).annotate({ identifier: "GuardrailLlmPolicy" });

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

export interface GuardrailLlmPromptSecurity {
  /** Optional. Use a user-defined LlmPolicy to configure the security guardrail. */
  customPolicy?: GuardrailLlmPolicy;
  /** Optional. Determines the behavior when the guardrail encounters an LLM error. - If true: the guardrail is bypassed. - If false (default): the guardrail triggers/blocks. Note: If a custom policy is provided, this field is ignored in favor of the policy's 'fail_open' configuration. */
  failOpen?: boolean;
  /** Optional. Use the system's predefined default security settings. To select this mode, include an empty 'default_settings' message in the request. The 'default_prompt_template' field within will be populated by the server in the response. */
  defaultSettings?: GuardrailLlmPromptSecurityDefaultSecuritySettings;
}

export const GuardrailLlmPromptSecurity: Schema.Schema<GuardrailLlmPromptSecurity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customPolicy: Schema.optional(GuardrailLlmPolicy),
    failOpen: Schema.optional(Schema.Boolean),
    defaultSettings: Schema.optional(
      GuardrailLlmPromptSecurityDefaultSecuritySettings,
    ),
  }).annotate({ identifier: "GuardrailLlmPromptSecurity" });

export interface GuardrailCodeCallback {
  /** Optional. The callback to execute after the agent is called. Each callback function is expected to return a structure (e.g., a dict or object) containing at least: - 'decision': Either 'OK' or 'TRIGGER'. - 'reason': A string explaining the decision. A 'TRIGGER' decision may halt further processing. */
  afterAgentCallback?: Callback;
  /** Optional. The callback to execute before the model is called. If there are multiple calls to the model, the callback will be executed multiple times. Each callback function is expected to return a structure (e.g., a dict or object) containing at least: - 'decision': Either 'OK' or 'TRIGGER'. - 'reason': A string explaining the decision. A 'TRIGGER' decision may halt further processing. */
  beforeModelCallback?: Callback;
  /** Optional. The callback to execute after the model is called. If there are multiple calls to the model, the callback will be executed multiple times. Each callback function is expected to return a structure (e.g., a dict or object) containing at least: - 'decision': Either 'OK' or 'TRIGGER'. - 'reason': A string explaining the decision. A 'TRIGGER' decision may halt further processing. */
  afterModelCallback?: Callback;
  /** Optional. The callback to execute before the agent is called. Each callback function is expected to return a structure (e.g., a dict or object) containing at least: - 'decision': Either 'OK' or 'TRIGGER'. - 'reason': A string explaining the decision. A 'TRIGGER' decision may halt further processing. */
  beforeAgentCallback?: Callback;
}

export const GuardrailCodeCallback: Schema.Schema<GuardrailCodeCallback> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    afterAgentCallback: Schema.optional(Callback),
    beforeModelCallback: Schema.optional(Callback),
    afterModelCallback: Schema.optional(Callback),
    beforeAgentCallback: Schema.optional(Callback),
  }).annotate({ identifier: "GuardrailCodeCallback" });

export interface Guardrail {
  /** Optional. Action to take when the guardrail is triggered. */
  action?: TriggerAction;
  /** Output only. Timestamp when the guardrail was created. */
  createTime?: string;
  /** Output only. Timestamp when the guardrail was last updated. */
  updateTime?: string;
  /** Optional. Guardrail that blocks the conversation if the prompt is considered unsafe based on the LLM classification. */
  llmPromptSecurity?: GuardrailLlmPromptSecurity;
  /** Required. Display name of the guardrail. */
  displayName?: string;
  /** Optional. Guardrail that bans certain content from being used in the conversation. */
  contentFilter?: GuardrailContentFilter;
  /** Identifier. The unique identifier of the guardrail. Format: `projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}` */
  name?: string;
  /** Optional. Guardrail that blocks the conversation if the LLM response is considered violating the policy based on the LLM classification. */
  llmPolicy?: GuardrailLlmPolicy;
  /** Optional. Guardrail that blocks the conversation if the LLM response is considered unsafe based on the model safety settings. */
  modelSafety?: GuardrailModelSafety;
  /** Optional. Description of the guardrail. */
  description?: string;
  /** Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes. */
  etag?: string;
  /** Optional. Whether the guardrail is enabled. */
  enabled?: boolean;
  /** Optional. Guardrail that potentially blocks the conversation based on the result of the callback execution. */
  codeCallback?: GuardrailCodeCallback;
}

export const Guardrail: Schema.Schema<Guardrail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    action: Schema.optional(TriggerAction),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    llmPromptSecurity: Schema.optional(GuardrailLlmPromptSecurity),
    displayName: Schema.optional(Schema.String),
    contentFilter: Schema.optional(GuardrailContentFilter),
    name: Schema.optional(Schema.String),
    llmPolicy: Schema.optional(GuardrailLlmPolicy),
    modelSafety: Schema.optional(GuardrailModelSafety),
    description: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    codeCallback: Schema.optional(GuardrailCodeCallback),
  }).annotate({ identifier: "Guardrail" });

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

export interface BargeInConfig {
  /** Optional. If enabled, the agent will adapt its next response based on the assumption that the user hasn't heard the full preceding agent message. This should not be used in scenarios where agent responses are displayed visually. */
  bargeInAwareness?: boolean;
  /** Optional. Disables user barge-in while the agent is speaking. If true, user input during agent response playback will be ignored. Deprecated: `disable_barge_in` is deprecated in favor of `disable_barge_in_control` in ChannelProfile. */
  disableBargeIn?: boolean;
}

export const BargeInConfig: Schema.Schema<BargeInConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bargeInAwareness: Schema.optional(Schema.Boolean),
    disableBargeIn: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "BargeInConfig" });

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

export interface AudioProcessingConfig {
  /** Optional. Configures the agent behavior for the user barge-in activities. */
  bargeInConfig?: BargeInConfig;
  /** Optional. Configuration for the ambient sound to be played with the synthesized agent response, to enhance the naturalness of the conversation. */
  ambientSoundConfig?: AmbientSoundConfig;
  /** Optional. Configuration of how the agent response should be synthesized, mapping from the language code to SynthesizeSpeechConfig. If the configuration for the specified language code is not found, the configuration for the root language code will be used. For example, if the map contains "en-us" and "en", and the specified language code is "en-gb", then "en" configuration will be used. Note: Language code is case-insensitive. */
  synthesizeSpeechConfigs?: Record<string, SynthesizeSpeechConfig>;
  /** Optional. The duration of user inactivity (no speech or interaction) before the agent prompts the user for reengagement. If not set, the agent will not prompt the user for reengagement. */
  inactivityTimeout?: string;
}

export const AudioProcessingConfig: Schema.Schema<AudioProcessingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bargeInConfig: Schema.optional(BargeInConfig),
    ambientSoundConfig: Schema.optional(AmbientSoundConfig),
    synthesizeSpeechConfigs: Schema.optional(
      Schema.Record(Schema.String, SynthesizeSpeechConfig),
    ),
    inactivityTimeout: Schema.optional(Schema.String),
  }).annotate({ identifier: "AudioProcessingConfig" });

export interface ErrorHandlingSettings {
  /** Optional. Configuration for ending the session in case of system errors (e.g. LLM errors). */
  endSessionConfig?: ErrorHandlingSettingsEndSessionConfig;
  /** Optional. The strategy to use for error handling. */
  errorHandlingStrategy?:
    | "ERROR_HANDLING_STRATEGY_UNSPECIFIED"
    | "NONE"
    | "FALLBACK_RESPONSE"
    | "END_SESSION"
    | (string & {});
  /** Optional. Configuration for handling fallback responses. */
  fallbackResponseConfig?: ErrorHandlingSettingsFallbackResponseConfig;
}

export const ErrorHandlingSettings: Schema.Schema<ErrorHandlingSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endSessionConfig: Schema.optional(ErrorHandlingSettingsEndSessionConfig),
    errorHandlingStrategy: Schema.optional(Schema.String),
    fallbackResponseConfig: Schema.optional(
      ErrorHandlingSettingsFallbackResponseConfig,
    ),
  }).annotate({ identifier: "ErrorHandlingSettings" });

export interface AppVariableDeclaration {
  /** Required. The description of the variable. */
  description?: string;
  /** Required. The schema of the variable. */
  schema?: Ces_Schema;
  /** Required. The name of the variable. The name must start with a letter or underscore and contain only letters, numbers, or underscores. */
  name?: string;
}

export const AppVariableDeclaration: Schema.Schema<AppVariableDeclaration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    schema: Schema.optional(Ces_Schema),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AppVariableDeclaration" });

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
  /** Optional. The persona property of the channel profile. */
  personaProperty?: ChannelProfilePersonaProperty;
  /** Optional. Whether to disable DTMF (dual-tone multi-frequency). */
  disableDtmf?: boolean;
  /** Optional. The unique identifier of the channel profile. */
  profileId?: string;
  /** Optional. The configuration for the web widget. */
  webWidgetConfig?: ChannelProfileWebWidgetConfig;
}

export const ChannelProfile: Schema.Schema<ChannelProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disableBargeInControl: Schema.optional(Schema.Boolean),
    noiseSuppressionLevel: Schema.optional(Schema.String),
    channelType: Schema.optional(Schema.String),
    personaProperty: Schema.optional(ChannelProfilePersonaProperty),
    disableDtmf: Schema.optional(Schema.Boolean),
    profileId: Schema.optional(Schema.String),
    webWidgetConfig: Schema.optional(ChannelProfileWebWidgetConfig),
  }).annotate({ identifier: "ChannelProfile" });

export interface LanguageSettings {
  /** Optional. The default language code of the app. */
  defaultLanguageCode?: string;
  /** Optional. Enables multilingual support. If true, agents in the app will use pre-built instructions to improve handling of multilingual input. */
  enableMultilingualSupport?: boolean;
  /** Optional. List of languages codes supported by the app, in addition to the `default_language_code`. */
  supportedLanguageCodes?: ReadonlyArray<string>;
  /** Optional. Deprecated: This feature is no longer supported. Use `enable_multilingual_support` instead to improve handling of multilingual input. The action to perform when an agent receives input in an unsupported language. This can be a predefined action or a custom tool call. Valid values are: - A tool's full resource name, which triggers a specific tool execution. - A predefined system action, such as "escalate" or "exit", which triggers an EndSession signal with corresponding metadata to terminate the conversation. */
  fallbackAction?: string;
}

export const LanguageSettings: Schema.Schema<LanguageSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultLanguageCode: Schema.optional(Schema.String),
    enableMultilingualSupport: Schema.optional(Schema.Boolean),
    supportedLanguageCodes: Schema.optional(Schema.Array(Schema.String)),
    fallbackAction: Schema.optional(Schema.String),
  }).annotate({ identifier: "LanguageSettings" });

export interface App {
  /** Output only. Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes. */
  etag?: string;
  /** Optional. The default client certificate settings for the app. */
  clientCertificateSettings?: ClientCertificateSettings;
  /** Optional. Whether the app is pinned in the app list. */
  pinned?: boolean;
  /** Optional. The data store settings for the app. */
  dataStoreSettings?: DataStoreSettings;
  /** Optional. Audio processing configuration of the app. */
  audioProcessingConfig?: AudioProcessingConfig;
  /** Optional. Human-readable description of the app. */
  description?: string;
  /** Identifier. The unique identifier of the app. Format: `projects/{project}/locations/{location}/apps/{app}` */
  name?: string;
  /** Optional. Error handling settings of the app. */
  errorHandlingSettings?: ErrorHandlingSettings;
  /** Output only. Number of deployments in the app. */
  deploymentCount?: number;
  /** Optional. Indicates whether the app is locked for changes. If the app is locked, modifications to the app resources will be rejected. */
  locked?: boolean;
  /** Required. Display name of the app. */
  displayName?: string;
  /** Optional. Instructions for all the agents in the app. You can use this instruction to set up a stable identity or personality across all the agents. */
  globalInstruction?: string;
  /** Optional. The tool execution mode for the app. If not provided, will default to PARALLEL. */
  toolExecutionMode?:
    | "TOOL_EXECUTION_MODE_UNSPECIFIED"
    | "PARALLEL"
    | "SEQUENTIAL"
    | (string & {});
  /** Output only. Timestamp when the app was last updated. */
  updateTime?: string;
  /** Optional. Logging settings of the app. */
  loggingSettings?: LoggingSettings;
  /** Optional. TimeZone settings of the app. */
  timeZoneSettings?: TimeZoneSettings;
  /** Optional. The evaluation thresholds for the app. */
  evaluationMetricsThresholds?: EvaluationMetricsThresholds;
  /** Optional. The declarations of the variables. */
  variableDeclarations?: ReadonlyArray<AppVariableDeclaration>;
  /** Optional. The default channel profile used by the app. */
  defaultChannelProfile?: ChannelProfile;
  /** Optional. The root agent is the entry point of the app. Format: `projects/{project}/locations/{location}/apps/{app}/agents/{agent}` */
  rootAgent?: string;
  /** Output only. Misconfigurations or warnings in the app. */
  validationErrors?: ReadonlyArray<string>;
  /** Optional. VPC-SC settings for the app. */
  vpcScSettings?: VpcScSettings;
  /** Optional. List of guardrails for the app. Format: `projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}` */
  guardrails?: ReadonlyArray<string>;
  /** Optional. Language settings of the app. */
  languageSettings?: LanguageSettings;
  /** Optional. The default LLM model settings for the app. Individual resources (e.g. agents, guardrails) can override these configurations as needed. */
  modelSettings?: ModelSettings;
  /** Output only. The declarations of predefined variables for the app. */
  predefinedVariableDeclarations?: ReadonlyArray<AppVariableDeclaration>;
  /** Output only. Timestamp when the app was created. */
  createTime?: string;
  /** Optional. Metadata about the app. This field can be used to store additional information relevant to the app's details or intended usages. */
  metadata?: Record<string, string>;
}

export const App: Schema.Schema<App> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    clientCertificateSettings: Schema.optional(ClientCertificateSettings),
    pinned: Schema.optional(Schema.Boolean),
    dataStoreSettings: Schema.optional(DataStoreSettings),
    audioProcessingConfig: Schema.optional(AudioProcessingConfig),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    errorHandlingSettings: Schema.optional(ErrorHandlingSettings),
    deploymentCount: Schema.optional(Schema.Number),
    locked: Schema.optional(Schema.Boolean),
    displayName: Schema.optional(Schema.String),
    globalInstruction: Schema.optional(Schema.String),
    toolExecutionMode: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    loggingSettings: Schema.optional(LoggingSettings),
    timeZoneSettings: Schema.optional(TimeZoneSettings),
    evaluationMetricsThresholds: Schema.optional(EvaluationMetricsThresholds),
    variableDeclarations: Schema.optional(Schema.Array(AppVariableDeclaration)),
    defaultChannelProfile: Schema.optional(ChannelProfile),
    rootAgent: Schema.optional(Schema.String),
    validationErrors: Schema.optional(Schema.Array(Schema.String)),
    vpcScSettings: Schema.optional(VpcScSettings),
    guardrails: Schema.optional(Schema.Array(Schema.String)),
    languageSettings: Schema.optional(LanguageSettings),
    modelSettings: Schema.optional(ModelSettings),
    predefinedVariableDeclarations: Schema.optional(
      Schema.Array(AppVariableDeclaration),
    ),
    createTime: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "App" });

export interface Example {
  /** Required. Display name of the example. */
  displayName?: string;
  /** Optional. The collection of messages that make up the conversation. */
  messages?: ReadonlyArray<Message>;
  /** Identifier. The unique identifier of the example. Format: `projects/{project}/locations/{location}/apps/{app}/examples/{example}` */
  name?: string;
  /** Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes. */
  etag?: string;
  /** Output only. Timestamp when the example was created. */
  createTime?: string;
  /** Optional. The agent that initially handles the conversation. If not specified, the example represents a conversation that is handled by the root agent. Format: `projects/{project}/locations/{location}/apps/{app}/agents/{agent}` */
  entryAgent?: string;
  /** Output only. Timestamp when the example was last updated. */
  updateTime?: string;
  /** Output only. The example may become invalid if referencing resources are deleted. Invalid examples will not be used as few-shot examples. */
  invalid?: boolean;
  /** Optional. Human-readable description of the example. */
  description?: string;
}

export const Example: Schema.Schema<Example> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    messages: Schema.optional(Schema.Array(Message)),
    name: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    entryAgent: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    invalid: Schema.optional(Schema.Boolean),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "Example" });

export interface AppSnapshot {
  /** Optional. List of guardrails in the app. */
  guardrails?: ReadonlyArray<Guardrail>;
  /** Optional. The basic settings for the app. */
  app?: App;
  /** Optional. List of agents in the app. */
  agents?: ReadonlyArray<Agent>;
  /** Optional. List of tools in the app. */
  tools?: ReadonlyArray<Tool>;
  /** Optional. List of toolsets in the app. */
  toolsets?: ReadonlyArray<Toolset>;
  /** Optional. List of examples in the app. */
  examples?: ReadonlyArray<Example>;
}

export const AppSnapshot: Schema.Schema<AppSnapshot> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guardrails: Schema.optional(Schema.Array(Guardrail)),
    app: Schema.optional(App),
    agents: Schema.optional(Schema.Array(Agent)),
    tools: Schema.optional(Schema.Array(Tool)),
    toolsets: Schema.optional(Schema.Array(Toolset)),
    examples: Schema.optional(Schema.Array(Example)),
  }).annotate({ identifier: "AppSnapshot" });

export interface AppVersion {
  /** Optional. The description of the app version. */
  description?: string;
  /** Output only. Email of the user who created the app version. */
  creator?: string;
  /** Identifier. The unique identifier of the app version. Format: `projects/{project}/locations/{location}/apps/{app}/versions/{version}` */
  name?: string;
  /** Output only. Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes. */
  etag?: string;
  /** Output only. The snapshot of the app when the version is created. */
  snapshot?: AppSnapshot;
  /** Optional. The display name of the app version. */
  displayName?: string;
  /** Output only. Timestamp when the app version was created. */
  createTime?: string;
}

export const AppVersion: Schema.Schema<AppVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    creator: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    snapshot: Schema.optional(AppSnapshot),
    displayName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "AppVersion" });

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

export interface ToolCalls {
  /** Optional. The list of tool calls to execute. */
  toolCalls?: ReadonlyArray<ToolCall>;
}

export const ToolCalls: Schema.Schema<ToolCalls> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolCalls: Schema.optional(Schema.Array(ToolCall)),
  }).annotate({ identifier: "ToolCalls" });

export interface SessionOutputDiagnosticInfo {
  /** List of the messages that happened during the processing. */
  messages?: ReadonlyArray<Message>;
  /** A trace of the entire request processing, represented as a root span. This span can contain nested child spans for specific operations. */
  rootSpan?: Span;
}

export const SessionOutputDiagnosticInfo: Schema.Schema<SessionOutputDiagnosticInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messages: Schema.optional(Schema.Array(Message)),
    rootSpan: Schema.optional(Span),
  }).annotate({ identifier: "SessionOutputDiagnosticInfo" });

export interface Citations {
  /** List of cited pieces of information. */
  citedChunks?: ReadonlyArray<CitationsCitedChunk>;
}

export const Citations: Schema.Schema<Citations> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    citedChunks: Schema.optional(Schema.Array(CitationsCitedChunk)),
  }).annotate({ identifier: "Citations" });

export interface SessionOutput {
  /** The suggestions returned from Google Search as a result of invoking the GoogleSearchTool. */
  googleSearchSuggestions?: GoogleSearchSuggestions;
  /** Request for the client to execute the tools. */
  toolCalls?: ToolCalls;
  /** Indicates the session has ended. */
  endSession?: EndSession;
  /** Optional. Diagnostic information contains execution details during the processing of the input. Only populated in the last SessionOutput (with `turn_completed=true`) for each turn. */
  diagnosticInfo?: SessionOutputDiagnosticInfo;
  /** Output text from the CES agent. */
  text?: string;
  /** Citations that provide the source information for the agent's generated text. */
  citations?: Citations;
  /** If true, the CES agent has detected the end of the current conversation turn and will provide no further output for this turn. */
  turnCompleted?: boolean;
  /** Indicates the sequential order of conversation turn to which this output belongs to, starting from 1. */
  turnIndex?: number;
  /** Output audio from the CES agent. */
  audio?: string;
  /** Custom payload with structured output from the CES agent. */
  payload?: Record<string, unknown>;
}

export const SessionOutput: Schema.Schema<SessionOutput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    googleSearchSuggestions: Schema.optional(GoogleSearchSuggestions),
    toolCalls: Schema.optional(ToolCalls),
    endSession: Schema.optional(EndSession),
    diagnosticInfo: Schema.optional(SessionOutputDiagnosticInfo),
    text: Schema.optional(Schema.String),
    citations: Schema.optional(Citations),
    turnCompleted: Schema.optional(Schema.Boolean),
    turnIndex: Schema.optional(Schema.Number),
    audio: Schema.optional(Schema.String),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "SessionOutput" });

export interface ExportAppRequest {
  /** Optional. The resource name of the app version to export. Format: `projects/{project}/locations/{location}/apps/{app}/versions/{version}`. */
  appVersion?: string;
  /** Optional. The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to which to export the app. The format of this URI must be `gs:///`. The exported app archive will be written directly to the specified GCS object. */
  gcsUri?: string;
  /** Required. The format to export the app in. */
  exportFormat?: "EXPORT_FORMAT_UNSPECIFIED" | "JSON" | "YAML" | (string & {});
}

export const ExportAppRequest: Schema.Schema<ExportAppRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appVersion: Schema.optional(Schema.String),
    gcsUri: Schema.optional(Schema.String),
    exportFormat: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExportAppRequest" });

export interface MockedToolCall {
  /** Optional. The name of the tool to mock. Format: `projects/{project}/locations/{location}/apps/{app}/tools/{tool}` */
  toolId?: string;
  /** Required. A pattern to match against the args / inputs of all dispatched tool calls. If the tool call inputs match this pattern, then mock output will be returned. */
  expectedArgsPattern?: Record<string, unknown>;
  /** Optional. The mock response / output to return if the tool call args / inputs match the pattern. */
  mockResponse?: Record<string, unknown>;
  /** Optional. The toolset to mock. */
  toolset?: ToolsetTool;
  /** Optional. Deprecated. Use tool_identifier instead. */
  tool?: string;
}

export const MockedToolCall: Schema.Schema<MockedToolCall> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolId: Schema.optional(Schema.String),
    expectedArgsPattern: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    mockResponse: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
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

export const MockConfig: Schema.Schema<MockConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mockedToolCalls: Schema.optional(Schema.Array(MockedToolCall)),
    unmatchedToolCallBehavior: Schema.optional(Schema.String),
  }).annotate({ identifier: "MockConfig" });

export interface GenerateChatTokenRequest {
  /** Required. The deployment of the app to use for the session. Format: projects/{project}/locations/{location}/apps/{app}/deployments/{deployment} */
  deployment?: string;
  /** Optional. The reCAPTCHA token generated by the client-side chat widget. */
  recaptchaToken?: string;
  /** Optional. Indicates if live handoff is enabled for the session. */
  liveHandoffEnabled?: boolean;
}

export const GenerateChatTokenRequest: Schema.Schema<GenerateChatTokenRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deployment: Schema.optional(Schema.String),
    recaptchaToken: Schema.optional(Schema.String),
    liveHandoffEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GenerateChatTokenRequest" });

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

export const RetrieveToolSchemaResponse: Schema.Schema<RetrieveToolSchemaResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tool: Schema.optional(Schema.String),
    inputSchema: Schema.optional(Ces_Schema),
    toolsetTool: Schema.optional(ToolsetTool),
    outputSchema: Schema.optional(Ces_Schema),
  }).annotate({ identifier: "RetrieveToolSchemaResponse" });

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

export interface Deployment {
  /** Required. The channel profile used in the deployment. */
  channelProfile?: ChannelProfile;
  /** Required. Display name of the deployment. */
  displayName?: string;
  /** Output only. Timestamp when this deployment was created. */
  createTime?: string;
  /** Identifier. The resource name of the deployment. Format: `projects/{project}/locations/{location}/apps/{app}/deployments/{deployment}` */
  name?: string;
  /** Output only. Timestamp when this deployment was last updated. */
  updateTime?: string;
  /** Output only. Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes. */
  etag?: string;
  /** Optional. The resource name of the app version to deploy. Format: `projects/{project}/locations/{location}/apps/{app}/versions/{version}` Use `projects/{project}/locations/{location}/apps/{app}/versions/-` to use the draft app. */
  appVersion?: string;
  /** Optional. Experiment configuration for the deployment. */
  experimentConfig?: ExperimentConfig;
}

export const Deployment: Schema.Schema<Deployment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channelProfile: Schema.optional(ChannelProfile),
    displayName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    appVersion: Schema.optional(Schema.String),
    experimentConfig: Schema.optional(ExperimentConfig),
  }).annotate({ identifier: "Deployment" });

export interface ExecuteToolRequest {
  /** Optional. The toolset tool to execute. Only one tool should match the predicate from the toolset. Otherwise, an error will be returned. */
  toolsetTool?: ToolsetTool;
  /** Optional. The [ToolCallContext](https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/tool/python#environment for details) to be passed to the Python tool. */
  context?: Record<string, unknown>;
  /** Optional. Mock configuration for the tool execution. If this field is set, tools that call other tools will be mocked based on the provided patterns and responses. */
  mockConfig?: MockConfig;
  /** Optional. The name of the tool to execute. Format: projects/{project}/locations/{location}/apps/{app}/tools/{tool} */
  tool?: string;
  /** Optional. The input parameters and values for the tool in JSON object format. */
  args?: Record<string, unknown>;
  /** Optional. The variables that are available for the tool execution. */
  variables?: Record<string, unknown>;
}

export const ExecuteToolRequest: Schema.Schema<ExecuteToolRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolsetTool: Schema.optional(ToolsetTool),
    context: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    mockConfig: Schema.optional(MockConfig),
    tool: Schema.optional(Schema.String),
    args: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    variables: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "ExecuteToolRequest" });

export interface RunSessionResponse {
  /** Outputs for the session. */
  outputs?: ReadonlyArray<SessionOutput>;
}

export const RunSessionResponse: Schema.Schema<RunSessionResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputs: Schema.optional(Schema.Array(SessionOutput)),
  }).annotate({ identifier: "RunSessionResponse" });

export interface ImportAppRequest {
  /** Raw bytes representing the compressed zip file with the app folder structure. */
  appContent?: string;
  /** Optional. The ID to use for the imported app. * If not specified, a unique ID will be automatically assigned for the app. * Otherwise, the imported app will use this ID as the final component of its resource name. If an app with the same ID already exists at the specified location in the project, the content of the existing app will be replaced. */
  appId?: string;
  /** Optional. Options governing the import process for the app. */
  importOptions?: ImportAppRequestImportOptions;
  /** The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI from which to import app. The format of this URI must be `gs:///`. */
  gcsUri?: string;
  /** Optional. The display name of the app to import. * If the app is created on import, and the display name is specified, the imported app will use this display name. If a conflict is detected with an existing app, a timestamp will be appended to the display name to make it unique. * If the app is a reimport, this field should not be set. Providing a display name during reimport will result in an INVALID_ARGUMENT error. */
  displayName?: string;
  /** Optional. Flag for overriding the app lock during import. If set to true, the import process will ignore the app lock. */
  ignoreAppLock?: boolean;
}

export const ImportAppRequest: Schema.Schema<ImportAppRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appContent: Schema.optional(Schema.String),
    appId: Schema.optional(Schema.String),
    importOptions: Schema.optional(ImportAppRequestImportOptions),
    gcsUri: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    ignoreAppLock: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ImportAppRequest" });

export interface ToolResponses {
  /** Optional. The list of tool execution results. */
  toolResponses?: ReadonlyArray<ToolResponse>;
}

export const ToolResponses: Schema.Schema<ToolResponses> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolResponses: Schema.optional(Schema.Array(ToolResponse)),
  }).annotate({ identifier: "ToolResponses" });

export interface Event {
  /** Required. The name of the event. */
  event?: string;
}

export const Event: Schema.Schema<Event> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    event: Schema.optional(Schema.String),
  }).annotate({ identifier: "Event" });

export interface ListToolsResponse {
  /** A token that can be sent as ListToolsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages. */
  nextPageToken?: string;
  /** The list of tools. */
  tools?: ReadonlyArray<Tool>;
}

export const ListToolsResponse: Schema.Schema<ListToolsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    tools: Schema.optional(Schema.Array(Tool)),
  }).annotate({ identifier: "ListToolsResponse" });

export interface ListOperationsResponse {
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    operations: Schema.optional(Schema.Array(Operation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListOperationsResponse" });

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

export const EndpointControlPolicy: Schema.Schema<EndpointControlPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enforcementScope: Schema.optional(Schema.String),
    allowedOrigins: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "EndpointControlPolicy" });

export interface SecuritySettings {
  /** Optional. Endpoint control related settings. */
  endpointControlPolicy?: EndpointControlPolicy;
  /** Identifier. The unique identifier of the security settings. Format: `projects/{project}/locations/{location}/securitySettings` */
  name?: string;
  /** Output only. Last update time of the security settings. */
  updateTime?: string;
  /** Output only. Etag of the security settings. */
  etag?: string;
  /** Output only. Create time of the security settings. */
  createTime?: string;
}

export const SecuritySettings: Schema.Schema<SecuritySettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpointControlPolicy: Schema.optional(EndpointControlPolicy),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecuritySettings" });

export interface SessionInput {
  /** Optional. Contextual variables for the session, keyed by name. Only variables declared in the app will be used by the CES agent. Unrecognized variables will still be sent to the Dialogflow agent as additional session parameters. */
  variables?: Record<string, unknown>;
  /** Optional. Audio data from the end user. */
  audio?: string;
  /** Optional. Image data from the end user. */
  image?: Image;
  /** Optional. Execution results for the tool calls from the client. */
  toolResponses?: ToolResponses;
  /** Optional. Event input. */
  event?: Event;
  /** Optional. Blob data from the end user. */
  blob?: Blob;
  /** Optional. Text data from the end user. */
  text?: string;
  /** Optional. A flag to indicate if the current message is a fragment of a larger input in the bidi streaming session. When set to `true`, the agent defers processing until it receives a subsequent message where `will_continue` is `false`, or until the system detects an endpoint in the audio input. NOTE: This field does not apply to audio and DTMF inputs, as they are always processed automatically based on the endpointing signal. */
  willContinue?: boolean;
  /** Optional. DTMF digits from the end user. */
  dtmf?: string;
}

export const SessionInput: Schema.Schema<SessionInput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    variables: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    audio: Schema.optional(Schema.String),
    image: Schema.optional(Image),
    toolResponses: Schema.optional(ToolResponses),
    event: Schema.optional(Event),
    blob: Schema.optional(Blob),
    text: Schema.optional(Schema.String),
    willContinue: Schema.optional(Schema.Boolean),
    dtmf: Schema.optional(Schema.String),
  }).annotate({ identifier: "SessionInput" });

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

export interface Omnichannel {
  /** Optional. Human-readable description of the omnichannel resource. */
  description?: string;
  /** Optional. The integration config for the omnichannel resource. */
  integrationConfig?: OmnichannelIntegrationConfig;
  /** Required. Display name of the omnichannel resource. */
  displayName?: string;
  /** Output only. Timestamp when the omnichannel resource was created. */
  createTime?: string;
  /** Identifier. The unique identifier of the omnichannel resource. Format: `projects/{project}/locations/{location}/omnichannels/{omnichannel}` */
  name?: string;
  /** Output only. Timestamp when the omnichannel resource was last updated. */
  updateTime?: string;
  /** Output only. Etag used to ensure the object hasn't changed during a read-modify-write operation. */
  etag?: string;
}

export const Omnichannel: Schema.Schema<Omnichannel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    integrationConfig: Schema.optional(OmnichannelIntegrationConfig),
    displayName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "Omnichannel" });

export interface ExecuteToolResponse {
  /** The variable values at the end of the tool execution. */
  variables?: Record<string, unknown>;
  /** The name of the tool that got executed. Format: `projects/{project}/locations/{location}/apps/{app}/tools/{tool}` */
  tool?: string;
  /** The tool execution result in JSON object format. Use "output" key to specify tool response and "error" key to specify error details (if any). If "output" and "error" keys are not specified, then whole "response" is treated as tool execution result. */
  response?: Record<string, unknown>;
  /** The toolset tool that got executed. */
  toolsetTool?: ToolsetTool;
}

export const ExecuteToolResponse: Schema.Schema<ExecuteToolResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    variables: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    tool: Schema.optional(Schema.String),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    toolsetTool: Schema.optional(ToolsetTool),
  }).annotate({ identifier: "ExecuteToolResponse" });

export interface OmnichannelOperationMetadata {
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. */
  requestedCancellation?: boolean;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
}

export const OmnichannelOperationMetadata: Schema.Schema<OmnichannelOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "OmnichannelOperationMetadata" });

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

export interface ListGuardrailsResponse {
  /** The list of guardrails. */
  guardrails?: ReadonlyArray<Guardrail>;
  /** A token that can be sent as ListGuardrailsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListGuardrailsResponse: Schema.Schema<ListGuardrailsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guardrails: Schema.optional(Schema.Array(Guardrail)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListGuardrailsResponse" });

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

export interface GenerateChatTokenResponse {
  /** The time at which the chat token expires. */
  expireTime?: string;
  /** The session scoped token for chat widget to authenticate with Session APIs. */
  chatToken?: string;
}

export const GenerateChatTokenResponse: Schema.Schema<GenerateChatTokenResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expireTime: Schema.optional(Schema.String),
    chatToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerateChatTokenResponse" });

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

export interface BatchDeleteConversationsRequest {
  /** Required. The resource names of the conversations to delete. */
  conversations?: ReadonlyArray<string>;
}

export const BatchDeleteConversationsRequest: Schema.Schema<BatchDeleteConversationsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversations: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BatchDeleteConversationsRequest" });

export interface ListAppsResponse {
  /** Unordered list. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token that can be sent as ListAppsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages. */
  nextPageToken?: string;
  /** The list of apps. */
  apps?: ReadonlyArray<App>;
}

export const ListAppsResponse: Schema.Schema<ListAppsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    apps: Schema.optional(Schema.Array(App)),
  }).annotate({ identifier: "ListAppsResponse" });

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
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

export interface ListProjectsLocationsRequest {
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/locations" }),
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
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
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
    T.Http({ method: "GET", path: "v1/{+name}" }),
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
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
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
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page token. */
  pageToken?: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/operations" }),
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

export interface ListProjectsLocationsAppsRequest {
  /** Optional. The next_page_token value returned from a previous list AgentService.ListApps call. */
  pageToken?: string;
  /** Optional. Filter to be applied when listing the apps. See https://google.aip.dev/160 for more details. */
  filter?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Required. The resource name of the location to list apps from. */
  parent: string;
}

export const ListProjectsLocationsAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/apps" }),
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
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
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
      path: "v1/{+parent}:retrieveToolSchema",
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
    T.Http({ method: "POST", path: "v1/{+parent}:executeTool", hasBody: true }),
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
    T.Http({ method: "POST", path: "v1/{+name}:exportApp", hasBody: true }),
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
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
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

export interface GetProjectsLocationsAppsRequest {
  /** Required. The resource name of the app to retrieve. */
  name: string;
}

export const GetProjectsLocationsAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
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
    T.Http({ method: "POST", path: "v1/{+parent}/apps", hasBody: true }),
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
      path: "v1/{+parent}/apps:importApp",
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
    T.Http({ method: "GET", path: "v1/{+parent}/deployments" }),
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
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
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

export interface PatchProjectsLocationsAppsDeploymentsRequest {
  /** Optional. The list of fields to update. */
  updateMask?: string;
  /** Identifier. The resource name of the deployment. Format: `projects/{project}/locations/{location}/apps/{app}/deployments/{deployment}` */
  name: string;
  /** Request body */
  body?: Deployment;
}

export const PatchProjectsLocationsAppsDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Deployment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
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
    T.Http({ method: "GET", path: "v1/{+name}" }),
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

export interface CreateProjectsLocationsAppsDeploymentsRequest {
  /** Required. The parent app. Format: `projects/{project}/locations/{location}/apps/{app}` */
  parent: string;
  /** Optional. The ID to use for the deployment, which will become the final component of the deployment's resource name. If not provided, a unique ID will be automatically assigned for the deployment. */
  deploymentId?: string;
  /** Request body */
  body?: Deployment;
}

export const CreateProjectsLocationsAppsDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    deploymentId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("deploymentId"),
    ),
    body: Schema.optional(Deployment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/deployments", hasBody: true }),
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

export interface ListProjectsLocationsAppsChangelogsRequest {
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Required. The resource name of the app to list changelogs from. */
  parent: string;
  /** Optional. The next_page_token value returned from a previous list AgentService.ListChangelogs call. */
  pageToken?: string;
  /** Optional. Filter to be applied when listing the changelogs. See https://google.aip.dev/160 for more details. The filter string can be used to filter by `action`, `resource_type`, `resource_name`, `author`, and `create_time`. The `:` comparator can be used for case-insensitive partial matching on string fields, while `=` performs an exact case-sensitive match. Examples: * `action:update` (case-insensitive partial match) * `action="Create"` (case-sensitive exact match) * `resource_type:agent` * `resource_name:my-agent` * `author:me@example.com` * `create_time > "2025-01-01T00:00:00Z"` * `create_time <= "2025-01-01T00:00:00Z" AND resource_type:tool` */
  filter?: string;
}

export const ListProjectsLocationsAppsChangelogsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/changelogs" }),
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
    T.Http({ method: "GET", path: "v1/{+name}" }),
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

export interface ListProjectsLocationsAppsAgentsRequest {
  /** Optional. The next_page_token value returned from a previous list AgentService.ListAgents call. */
  pageToken?: string;
  /** Optional. Filter to be applied when listing the agents. See https://google.aip.dev/160 for more details. */
  filter?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Required. The resource name of the app to list agents from. */
  parent: string;
}

export const ListProjectsLocationsAppsAgentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/agents" }),
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
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
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

export interface PatchProjectsLocationsAppsAgentsRequest {
  /** Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated. */
  updateMask?: string;
  /** Identifier. The unique identifier of the agent. Format: `projects/{project}/locations/{location}/apps/{app}/agents/{agent}` */
  name: string;
  /** Request body */
  body?: Agent;
}

export const PatchProjectsLocationsAppsAgentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Agent).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
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
    T.Http({ method: "GET", path: "v1/{+name}" }),
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
    T.Http({ method: "POST", path: "v1/{+parent}/agents", hasBody: true }),
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

export interface ListProjectsLocationsAppsToolsRequest {
  /** Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Required. The resource name of the app to list tools from. */
  parent: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. The next_page_token value returned from a previous list AgentService.ListTools call. */
  pageToken?: string;
  /** Optional. Filter to be applied when listing the tools. Use "include_system_tools=true" to include system tools in the response. See https://google.aip.dev/160 for more details. */
  filter?: string;
}

export const ListProjectsLocationsAppsToolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/tools" }),
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
  /** Required. The resource name of the tool to delete. */
  name: string;
  /** Optional. The current etag of the tool. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the tool, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
  /** Optional. Indicates whether to forcefully delete the tool, even if it is still referenced by agents/examples. * If `force = false`, the deletion will fail if any agents still reference the tool. * If `force = true`, all existing references from agents will be removed and the tool will be deleted. */
  force?: boolean;
}

export const DeleteProjectsLocationsAppsToolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
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

export interface PatchProjectsLocationsAppsToolsRequest {
  /** Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated. */
  updateMask?: string;
  /** Identifier. The resource name of the tool. Format: * `projects/{project}/locations/{location}/apps/{app}/tools/{tool}` for standalone tools. * `projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}/tools/{tool}` for tools retrieved from a toolset. These tools are dynamic and output-only; they cannot be referenced directly where a tool is expected. */
  name: string;
  /** Request body */
  body?: Tool;
}

export const PatchProjectsLocationsAppsToolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Tool).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
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

export interface GetProjectsLocationsAppsToolsRequest {
  /** Required. The resource name of the tool to retrieve. */
  name: string;
}

export const GetProjectsLocationsAppsToolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
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
    T.Http({ method: "POST", path: "v1/{+parent}/tools", hasBody: true }),
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
      path: "v1/{+name}:generateChatToken",
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
      path: "v1/{+session}:streamRunSession",
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
    T.Http({ method: "POST", path: "v1/{+session}:runSession", hasBody: true }),
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

export interface GetProjectsLocationsAppsGuardrailsRequest {
  /** Required. The resource name of the guardrail to retrieve. */
  name: string;
}

export const GetProjectsLocationsAppsGuardrailsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
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

export interface CreateProjectsLocationsAppsGuardrailsRequest {
  /** Required. The resource name of the app to create a guardrail in. */
  parent: string;
  /** Optional. The ID to use for the guardrail, which will become the final component of the guardrail's resource name. If not provided, a unique ID will be automatically assigned for the guardrail. */
  guardrailId?: string;
  /** Request body */
  body?: Guardrail;
}

export const CreateProjectsLocationsAppsGuardrailsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    guardrailId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("guardrailId"),
    ),
    body: Schema.optional(Guardrail).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/guardrails", hasBody: true }),
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

export interface PatchProjectsLocationsAppsGuardrailsRequest {
  /** Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated. */
  updateMask?: string;
  /** Identifier. The unique identifier of the guardrail. Format: `projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}` */
  name: string;
  /** Request body */
  body?: Guardrail;
}

export const PatchProjectsLocationsAppsGuardrailsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Guardrail).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
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

export interface DeleteProjectsLocationsAppsGuardrailsRequest {
  /** Required. The resource name of the guardrail to delete. */
  name: string;
  /** Optional. The current etag of the guardrail. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the guardrail, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
  /** Optional. Indicates whether to forcefully delete the guardrail, even if it is still referenced by app/agents. * If `force = false`, the deletion fails if any apps/agents still reference the guardrail. * If `force = true`, all existing references from apps/agents will be removed and the guardrail will be deleted. */
  force?: boolean;
}

export const DeleteProjectsLocationsAppsGuardrailsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
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

export interface ListProjectsLocationsAppsGuardrailsRequest {
  /** Optional. The next_page_token value returned from a previous list AgentService.ListGuardrails call. */
  pageToken?: string;
  /** Optional. Filter to be applied when listing the guardrails. See https://google.aip.dev/160 for more details. */
  filter?: string;
  /** Required. The resource name of the app to list guardrails from. */
  parent: string;
  /** Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsAppsGuardrailsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/guardrails" }),
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

export interface ListProjectsLocationsAppsConversationsRequest {
  /** Optional. Indicate the sources of the conversations. If not set, all available sources will be applied by default. */
  sources?:
    | "SOURCE_UNSPECIFIED"
    | "LIVE"
    | "SIMULATOR"
    | "EVAL"
    | "AGENT_TOOL"
    | (string & {})[];
  /** Optional. Indicate the source of the conversation. If not set, Source.Live will be applied by default. Will be deprecated in favor of `sources` field. */
  source?:
    | "SOURCE_UNSPECIFIED"
    | "LIVE"
    | "SIMULATOR"
    | "EVAL"
    | "AGENT_TOOL"
    | (string & {});
  /** Optional. The next_page_token value returned from a previous list AgentService.ListConversations call. */
  pageToken?: string;
  /** Optional. Filter to be applied when listing the conversations. See https://google.aip.dev/160 for more details. */
  filter?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Required. The resource name of the app to list conversations from. */
  parent: string;
}

export const ListProjectsLocationsAppsConversationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sources: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("sources"),
    ),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/conversations" }),
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
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
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
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
      path: "v1/{+parent}/conversations:batchDelete",
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

export interface GetProjectsLocationsAppsExamplesRequest {
  /** Required. The resource name of the example to retrieve. */
  name: string;
}

export const GetProjectsLocationsAppsExamplesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
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
    T.Http({ method: "POST", path: "v1/{+parent}/examples", hasBody: true }),
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
  /** Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated. */
  updateMask?: string;
  /** Identifier. The unique identifier of the example. Format: `projects/{project}/locations/{location}/apps/{app}/examples/{example}` */
  name: string;
  /** Request body */
  body?: Example;
}

export const PatchProjectsLocationsAppsExamplesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Example).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
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
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
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
  /** Required. The resource name of the app to list examples from. */
  parent: string;
  /** Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. The next_page_token value returned from a previous list AgentService.ListExamples call. */
  pageToken?: string;
  /** Optional. Filter to be applied when listing the examples. See https://google.aip.dev/160 for more details. */
  filter?: string;
}

export const ListProjectsLocationsAppsExamplesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/examples" }),
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
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
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
      path: "v1/{+toolset}:retrieveTools",
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

export interface GetProjectsLocationsAppsToolsetsRequest {
  /** Required. The resource name of the toolset to retrieve. */
  name: string;
}

export const GetProjectsLocationsAppsToolsetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
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

export interface CreateProjectsLocationsAppsToolsetsRequest {
  /** Required. The resource name of the app to create a toolset in. */
  parent: string;
  /** Optional. The ID to use for the toolset, which will become the final component of the toolset's resource name. If not provided, a unique ID will be automatically assigned for the toolset. */
  toolsetId?: string;
  /** Request body */
  body?: Toolset;
}

export const CreateProjectsLocationsAppsToolsetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    toolsetId: Schema.optional(Schema.String).pipe(T.HttpQuery("toolsetId")),
    body: Schema.optional(Toolset).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/toolsets", hasBody: true }),
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

export interface ListProjectsLocationsAppsToolsetsRequest {
  /** Optional. The next_page_token value returned from a previous list AgentService.ListToolsets call. */
  pageToken?: string;
  /** Optional. Filter to be applied when listing the toolsets. See https://google.aip.dev/160 for more details. */
  filter?: string;
  /** Required. The resource name of the app to list toolsets from. */
  parent: string;
  /** Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsAppsToolsetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/toolsets" }),
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
  /** Optional. The current etag of the toolset. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the toolset, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
  /** Optional. Indicates whether to forcefully delete the toolset, even if it is still referenced by app/agents. * If `force = false`, the deletion fails if any agents still reference the toolset. * If `force = true`, all existing references from agents will be removed and the toolset will be deleted. */
  force?: boolean;
}

export const DeleteProjectsLocationsAppsToolsetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
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

export interface ListProjectsLocationsAppsVersionsRequest {
  /** Optional. The next_page_token value returned from a previous list AgentService.ListAppVersions call. */
  pageToken?: string;
  /** Optional. Filter to be applied when listing the app versions. See https://google.aip.dev/160 for more details. */
  filter?: string;
  /** Required. The resource name of the app to list app versions from. */
  parent: string;
  /** Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsAppsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/versions" }),
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
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
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
    T.Http({ method: "POST", path: "v1/{+name}:restore", hasBody: true }),
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

export interface GetProjectsLocationsAppsVersionsRequest {
  /** Required. The resource name of the app version to retrieve. */
  name: string;
}

export const GetProjectsLocationsAppsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
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
    T.Http({ method: "POST", path: "v1/{+parent}/versions", hasBody: true }),
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
