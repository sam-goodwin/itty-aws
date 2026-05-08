// ==========================================================================
// Agent Registry API (agentregistry v1alpha)
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
  name: "agentregistry",
  version: "v1alpha",
  rootUrl: "https://agentregistry.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface OperationMetadata {
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have google.longrunning.Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    verb: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    apiVersion: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface Skill {
  /** Output only. A more detailed description of the skill. */
  description?: string;
  /** Output only. A unique identifier for the agent's skill. */
  id?: string;
  /** Output only. A human-readable name for the agent's skill. */
  name?: string;
  /** Output only. Keywords describing the skill. */
  tags?: ReadonlyArray<string>;
  /** Output only. Example prompts or scenarios this skill can handle. */
  examples?: ReadonlyArray<string>;
}

export const Skill: Schema.Schema<Skill> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.String)),
    examples: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Skill" });

export interface Interface {
  /** Required. The protocol binding of the interface. */
  protocolBinding?:
    | "PROTOCOL_BINDING_UNSPECIFIED"
    | "JSONRPC"
    | "GRPC"
    | "HTTP_JSON"
    | (string & {});
  /** Required. The destination URL. */
  url?: string;
}

export const Interface: Schema.Schema<Interface> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    protocolBinding: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "Interface" });

export interface Protocol {
  /** Output only. The type of the protocol. */
  type?: "TYPE_UNSPECIFIED" | "A2A_AGENT" | "CUSTOM" | (string & {});
  /** Output only. The connection details for the Agent. */
  interfaces?: ReadonlyArray<Interface>;
  /** Output only. The version of the protocol, for example, the A2A Agent Card version. */
  protocolVersion?: string;
}

export const Protocol: Schema.Schema<Protocol> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    interfaces: Schema.optional(Schema.Array(Interface)),
    protocolVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "Protocol" });

export interface Card {
  /** Output only. The type of agent card. */
  type?: "TYPE_UNSPECIFIED" | "A2A_AGENT_CARD" | (string & {});
  /** Output only. The content of the agent card. */
  content?: Record<string, unknown>;
}

export const Card: Schema.Schema<Card> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    content: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Card" });

export interface Agent {
  /** Output only. Update time. */
  updateTime?: string;
  /** Identifier. The resource name of an Agent. Format: `projects/{project}/locations/{location}/agents/{agent}`. */
  name?: string;
  /** Output only. The version of the Agent, often obtained from the A2A Agent Card. Empty if Agent Card has no version or agent is not an A2A Agent. */
  version?: string;
  /** Output only. Create time. */
  createTime?: string;
  /** Output only. Attributes of the Agent. Valid values: * `agentregistry.googleapis.com/system/Framework`: {"framework": "google-adk"} - the agent framework used to develop the Agent. Example values: "google-adk", "langchain", "custom". * `agentregistry.googleapis.com/system/RuntimeIdentity`: {"principal": "principal://..."} - the runtime identity associated with the Agent. * `agentregistry.googleapis.com/system/RuntimeReference`: {"uri": "//..."} - the URI of the underlying resource hosting the Agent, for example, the Reasoning Engine URI. */
  attributes?: Record<string, Record<string, unknown>>;
  /** Output only. Skills the agent possesses, often obtained from the A2A Agent Card. */
  skills?: ReadonlyArray<Skill>;
  /** Output only. The connection details for the Agent. */
  protocols?: ReadonlyArray<Protocol>;
  /** Output only. A stable, globally unique identifier for agents. */
  agentId?: string;
  /** Output only. The location where agent is hosted. The value is defined by the hosting environment (i.e. cloud provider). */
  location?: string;
  /** Output only. A universally unique identifier for the Agent. */
  uid?: string;
  /** Output only. The display name of the agent, often obtained from the A2A Agent Card. */
  displayName?: string;
  /** Output only. Full Agent Card payload, when available. */
  card?: Card;
  /** Output only. The description of the Agent, often obtained from the A2A Agent Card. Empty if Agent Card has no description. */
  description?: string;
}

export const Agent: Schema.Schema<Agent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    attributes: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Record(Schema.String, Schema.Unknown),
      ),
    ),
    skills: Schema.optional(Schema.Array(Skill)),
    protocols: Schema.optional(Schema.Array(Protocol)),
    agentId: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    card: Schema.optional(Card),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "Agent" });

export interface ListAgentsResponse {
  /** The list of Agents. */
  agents?: ReadonlyArray<Agent>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListAgentsResponse: Schema.Schema<ListAgentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agents: Schema.optional(Schema.Array(Agent)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAgentsResponse" });

export interface Annotations {
  /** Output only. A human-readable title for the tool. */
  title?: string;
  /** Output only. If true, calling the tool repeatedly with the same arguments will have no additional effect on its environment. NOTE: This property is meaningful only when `read_only_hint == false` Default: false */
  idempotentHint?: boolean;
  /** Output only. If true, this tool may interact with an "open world" of external entities. If false, the tool's domain of interaction is closed. For example, the world of a web search tool is open, whereas that of a memory tool is not. Default: true */
  openWorldHint?: boolean;
  /** Output only. If true, the tool does not modify its environment. Default: false */
  readOnlyHint?: boolean;
  /** Output only. If true, the tool may perform destructive updates to its environment. If false, the tool performs only additive updates. NOTE: This property is meaningful only when `read_only_hint == false` Default: true */
  destructiveHint?: boolean;
}

export const Annotations: Schema.Schema<Annotations> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    idempotentHint: Schema.optional(Schema.Boolean),
    openWorldHint: Schema.optional(Schema.Boolean),
    readOnlyHint: Schema.optional(Schema.Boolean),
    destructiveHint: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Annotations" });

export interface Tool {
  /** Output only. Description of what the tool does. */
  description?: string;
  /** Output only. Annotations associated with the tool. */
  annotations?: Annotations;
  /** Output only. Human-readable name of the tool. */
  name?: string;
}

export const Tool: Schema.Schema<Tool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    annotations: Schema.optional(Annotations),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Tool" });

export interface McpServer {
  /** Output only. The description of the MCP Server. */
  description?: string;
  /** Output only. Tools provided by the MCP Server. */
  tools?: ReadonlyArray<Tool>;
  /** Output only. Update time. */
  updateTime?: string;
  /** Output only. A stable, globally unique identifier for MCP Servers. */
  mcpServerId?: string;
  /** Output only. The connection details for the MCP Server. */
  interfaces?: ReadonlyArray<Interface>;
  /** Identifier. The resource name of the MCP Server. Format: `projects/{project}/locations/{location}/mcpServers/{mcp_server}`. */
  name?: string;
  /** Output only. Create time. */
  createTime?: string;
  /** Output only. The display name of the MCP Server. */
  displayName?: string;
  /** Output only. Attributes of the MCP Server. Valid values: * `agentregistry.googleapis.com/system/RuntimeIdentity`: {"principal": "principal://..."} - the runtime identity associated with the MCP Server. * `agentregistry.googleapis.com/system/RuntimeReference`: {"uri": "//..."} - the URI of the underlying resource hosting the MCP Server, for example, the GKE Deployment. */
  attributes?: Record<string, Record<string, unknown>>;
}

export const McpServer: Schema.Schema<McpServer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    tools: Schema.optional(Schema.Array(Tool)),
    updateTime: Schema.optional(Schema.String),
    mcpServerId: Schema.optional(Schema.String),
    interfaces: Schema.optional(Schema.Array(Interface)),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    attributes: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Record(Schema.String, Schema.Unknown),
      ),
    ),
  }).annotate({ identifier: "McpServer" });

export interface ListMcpServersResponse {
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** The list of McpServers. */
  mcpServers?: ReadonlyArray<McpServer>;
}

export const ListMcpServersResponse: Schema.Schema<ListMcpServersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    mcpServers: Schema.optional(Schema.Array(McpServer)),
  }).annotate({ identifier: "ListMcpServersResponse" });

export interface AuthProviderBinding {
  /** Required. The resource name of the target AuthProvider. Format: * `projects/{project}/locations/{location}/authProviders/{auth_provider}` */
  authProvider?: string;
  /** Optional. The list of OAuth2 scopes of the AuthProvider. */
  scopes?: ReadonlyArray<string>;
  /** Optional. The continue URI of the AuthProvider. The URI is used to reauthenticate the user and finalize the managed OAuth flow. */
  continueUri?: string;
}

export const AuthProviderBinding: Schema.Schema<AuthProviderBinding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authProvider: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Schema.String)),
    continueUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "AuthProviderBinding" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface Location {
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    displayName: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    locationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Location" });

export interface SearchAgentsRequest {
  /** Optional. Search criteria used to select the Agents to return. If no search criteria is specified then all accessible Agents will be returned. Search expressions can be used to restrict results based upon searchable fields, where the operators can be used along with the suffix wildcard symbol `*`. See [instructions](https://docs.cloud.google.com/agent-registry/search-agents-and-tools) for more details. Allowed operators: `=`, `:`, `NOT`, `AND`, `OR`, and `()`. Searchable fields: | Field | `=` | `:` | `*` | Keyword Search | |--------------------|-----|-----|-----|----------------| | agentId | Yes | Yes | Yes | Included | | name | No | Yes | Yes | Included | | displayName | No | Yes | Yes | Included | | description | No | Yes | No | Included | | skills | No | Yes | No | Included | | skills.id | No | Yes | No | Included | | skills.name | No | Yes | No | Included | | skills.description | No | Yes | No | Included | | skills.tags | No | Yes | No | Included | | skills.examples | No | Yes | No | Included | Examples: * `agentId="urn:agent:projects-123:projects:123:locations:us-central1:reasoningEngines:1234"` to find the agent with the specified agent ID. * `name:important` to find agents whose name contains `important` as a word. * `displayName:works*` to find agents whose display name contains words that start with `works`. * `skills.tags:test` to find agents whose skills tags contain `test`. * `planner OR booking` to find agents whose metadata contains the words `planner` or `booking`. */
  searchString?: string;
  /** Optional. The maximum number of search results to return per page. The page size is capped at `100`, even if a larger value is specified. A negative value will result in an `INVALID_ARGUMENT` error. If unspecified or set to `0`, a default value of `20` will be used. The server may return fewer results than requested. */
  pageSize?: number;
  /** Optional. If present, retrieve the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of all other method parameters, must be identical to those in the previous call. */
  pageToken?: string;
}

export const SearchAgentsRequest: Schema.Schema<SearchAgentsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    searchString: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    pageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchAgentsRequest" });

export interface SearchAgentsResponse {
  /** A list of Agents that match the `search_string`. */
  agents?: ReadonlyArray<Agent>;
  /** If there are more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
}

export const SearchAgentsResponse: Schema.Schema<SearchAgentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agents: Schema.optional(Schema.Array(Agent)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchAgentsResponse" });

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

export interface Endpoint {
  /** Output only. Display name for the Endpoint. */
  displayName?: string;
  /** Output only. Attributes of the Endpoint. Valid values: * `agentregistry.googleapis.com/system/RuntimeReference`: {"uri": "//..."} - the URI of the underlying resource hosting the Endpoint, for example, the GKE Deployment. */
  attributes?: Record<string, Record<string, unknown>>;
  /** Identifier. The resource name of the Endpoint. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`. */
  name?: string;
  /** Output only. Create time. */
  createTime?: string;
  /** Output only. A stable, globally unique identifier for Endpoint. */
  endpointId?: string;
  /** Output only. Description of an Endpoint. */
  description?: string;
  /** Required. The connection details for the Endpoint. */
  interfaces?: ReadonlyArray<Interface>;
  /** Output only. Update time. */
  updateTime?: string;
}

export const Endpoint: Schema.Schema<Endpoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    attributes: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Record(Schema.String, Schema.Unknown),
      ),
    ),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    endpointId: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    interfaces: Schema.optional(Schema.Array(Interface)),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Endpoint" });

export interface Operation {
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    error: Schema.optional(Status),
    done: Schema.optional(Schema.Boolean),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Operation" });

export interface AgentSpec {
  /** Required. The type of the agent spec content. */
  type?: "TYPE_UNSPECIFIED" | "NO_SPEC" | "A2A_AGENT_CARD" | (string & {});
  /** Optional. The content of the Agent spec in the JSON format. This payload is validated against the schema for the specified type. The content size is limited to `10KB`. */
  content?: Record<string, unknown>;
}

export const AgentSpec: Schema.Schema<AgentSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    content: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "AgentSpec" });

export interface EndpointSpec {
  /** Required. The type of the endpoint spec content. */
  type?: "TYPE_UNSPECIFIED" | "NO_SPEC" | (string & {});
  /** Optional. The content of the endpoint spec. Reserved for future use. */
  content?: Record<string, unknown>;
}

export const EndpointSpec: Schema.Schema<EndpointSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    content: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "EndpointSpec" });

export interface McpServerSpec {
  /** Required. The type of the MCP Server spec content. */
  type?: "TYPE_UNSPECIFIED" | "NO_SPEC" | "TOOL_SPEC" | (string & {});
  /** Optional. The content of the MCP Server spec. This payload is validated against the schema for the specified type. The content size is limited to `10KB`. */
  content?: Record<string, unknown>;
}

export const McpServerSpec: Schema.Schema<McpServerSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    content: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "McpServerSpec" });

export interface Service {
  /** Output only. The resource name of the resulting Agent, MCP Server, or Endpoint. Format: * `projects/{project}/locations/{location}/mcpServers/{mcp_server}` * `projects/{project}/locations/{location}/agents/{agent}` * `projects/{project}/locations/{location}/endpoints/{endpoint}` */
  registryResource?: string;
  /** Output only. Update time. */
  updateTime?: string;
  /** Optional. User-defined display name for the Service. Can have a maximum length of `63` characters. */
  displayName?: string;
  /** Optional. The connection details for the Service. */
  interfaces?: ReadonlyArray<Interface>;
  /** Identifier. The resource name of the Service. Format: `projects/{project}/locations/{location}/services/{service}`. */
  name?: string;
  /** Output only. Create time. */
  createTime?: string;
  /** Optional. The spec of the Agent. When `agent_spec` is set, the type of the service is Agent. */
  agentSpec?: AgentSpec;
  /** Optional. The spec of the Endpoint. When `endpoint_spec` is set, the type of the service is Endpoint. */
  endpointSpec?: EndpointSpec;
  /** Optional. The spec of the MCP Server. When `mcp_server_spec` is set, the type of the service is MCP Server. */
  mcpServerSpec?: McpServerSpec;
  /** Optional. User-defined description of an Service. Can have a maximum length of `2048` characters. */
  description?: string;
}

export const Service: Schema.Schema<Service> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    registryResource: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    interfaces: Schema.optional(Schema.Array(Interface)),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    agentSpec: Schema.optional(AgentSpec),
    endpointSpec: Schema.optional(EndpointSpec),
    mcpServerSpec: Schema.optional(McpServerSpec),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "Service" });

export interface ListServicesResponse {
  /** The list of Service resources matching the parent and filter criteria in the request. Each Service resource follows the format: `projects/{project}/locations/{location}/services/{service}`. */
  services?: ReadonlyArray<Service>;
  /** A token identifying a page of results the server should return. Used in page_token. */
  nextPageToken?: string;
}

export const ListServicesResponse: Schema.Schema<ListServicesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    services: Schema.optional(Schema.Array(Service)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListServicesResponse" });

export interface Target {
  /** The identifier of the target Agent, MCP Server, or Endpoint. Format: * `urn:agent:{publisher}:{namespace}:{name}` * `urn:mcp:{publisher}:{namespace}:{name}` * `urn:endpoint:{publisher}:{namespace}:{name}` */
  identifier?: string;
}

export const Target: Schema.Schema<Target> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    identifier: Schema.optional(Schema.String),
  }).annotate({ identifier: "Target" });

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

export interface SearchMcpServersResponse {
  /** A list of McpServers that match the `search_string`. */
  mcpServers?: ReadonlyArray<McpServer>;
  /** If there are more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
}

export const SearchMcpServersResponse: Schema.Schema<SearchMcpServersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mcpServers: Schema.optional(Schema.Array(McpServer)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchMcpServersResponse" });

export interface Source {
  /** The identifier of the source Agent. Format: * `urn:agent:{publisher}:{namespace}:{name}` */
  identifier?: string;
}

export const Source: Schema.Schema<Source> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    identifier: Schema.optional(Schema.String),
  }).annotate({ identifier: "Source" });

export interface Binding {
  /** The binding for AuthProvider. */
  authProviderBinding?: AuthProviderBinding;
  /** Output only. Timestamp when this binding was last updated. */
  updateTime?: string;
  /** Required. Identifier. The resource name of the Binding. Format: `projects/{project}/locations/{location}/bindings/{binding}`. */
  name?: string;
  /** Required. The target Agent Registry Resource of the Binding. */
  target?: Target;
  /** Output only. Timestamp when this binding was created. */
  createTime?: string;
  /** Optional. User-defined description of a Binding. Can have a maximum length of `2048` characters. */
  description?: string;
  /** Required. The target Agent of the Binding. */
  source?: Source;
  /** Optional. User-defined display name for the Binding. Can have a maximum length of `63` characters. */
  displayName?: string;
}

export const Binding: Schema.Schema<Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authProviderBinding: Schema.optional(AuthProviderBinding),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    target: Schema.optional(Target),
    createTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    source: Schema.optional(Source),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Binding" });

export interface FetchAvailableBindingsResponse {
  /** The list of Bindings. */
  bindings?: ReadonlyArray<Binding>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const FetchAvailableBindingsResponse: Schema.Schema<FetchAvailableBindingsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bindings: Schema.optional(Schema.Array(Binding)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "FetchAvailableBindingsResponse" });

export interface ListBindingsResponse {
  /** The list of Binding resources matching the parent and filter criteria in the request. Each Binding resource follows the format: `projects/{project}/locations/{location}/bindings/{binding}`. */
  bindings?: ReadonlyArray<Binding>;
  /** A token identifying a page of results the server should return. Used in page_token. */
  nextPageToken?: string;
}

export const ListBindingsResponse: Schema.Schema<ListBindingsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bindings: Schema.optional(Schema.Array(Binding)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListBindingsResponse" });

export interface SearchMcpServersRequest {
  /** Optional. The maximum number of search results to return per page. The page size is capped at `100`, even if a larger value is specified. A negative value will result in an `INVALID_ARGUMENT` error. If unspecified or set to `0`, a default value of `20` will be used. The server may return fewer results than requested. */
  pageSize?: number;
  /** Optional. If present, retrieve the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of all other method parameters, must be identical to those in the previous call. */
  pageToken?: string;
  /** Optional. Search criteria used to select the MCP Servers to return. If no search criteria is specified then all accessible MCP Servers will be returned. Search expressions can be used to restrict results based upon searchable fields, where the operators can be used along with the suffix wildcard symbol `*`. See [instructions](https://docs.cloud.google.com/agent-registry/search-agents-and-tools) for more details. Allowed operators: `=`, `:`, `NOT`, `AND`, `OR`, and `()`. Searchable fields: | Field | `=` | `:` | `*` | Keyword Search | |--------------------|-----|-----|-----|----------------| | mcpServerId | Yes | Yes | Yes | Included | | name | No | Yes | Yes | Included | | displayName | No | Yes | Yes | Included | Examples: * `mcpServerId="urn:mcp:projects-123:projects:123:locations:us-central1:agentregistry:services:service-id"` to find the MCP Server with the specified MCP Server ID. * `name:important` to find MCP Servers whose name contains `important` as a word. * `displayName:works*` to find MCP Servers whose display name contains words that start with `works`. * `planner OR booking` to find MCP Servers whose metadata contains the words `planner` or `booking`. * `mcpServerId:service-id AND (displayName:planner OR displayName:booking)` to find MCP Servers whose MCP Server ID contains `service-id` and whose display name contains `planner` or `booking`. */
  searchString?: string;
}

export const SearchMcpServersRequest: Schema.Schema<SearchMcpServersRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number),
    pageToken: Schema.optional(Schema.String),
    searchString: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchMcpServersRequest" });

export interface ListEndpointsResponse {
  /** The list of Endpoint resources matching the parent and filter criteria in the request. Each Endpoint resource follows the format: `projects/{project}/locations/{location}/endpoints/{endpoint}`. */
  endpoints?: ReadonlyArray<Endpoint>;
  /** A token identifying a page of results the server should return. Used in page_token. */
  nextPageToken?: string;
}

export const ListEndpointsResponse: Schema.Schema<ListEndpointsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpoints: Schema.optional(Schema.Array(Endpoint)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListEndpointsResponse" });

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

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
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
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}/locations" }),
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
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
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

export interface ListProjectsLocationsBindingsRequest {
  /** Optional. A query string used to filter the list of bindings returned. The filter expression must follow AIP-160 syntax. */
  filter?: string;
  /** Optional. Hint for how to order the results */
  orderBy?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. Page size is 500 if unspecified and is capped at `500` even if a larger value is given. */
  pageSize?: number;
  /** Required. The project and location to list bindings in. Expected format: `projects/{project}/locations/{location}`. */
  parent: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
}

export const ListProjectsLocationsBindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/bindings" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsBindingsRequest>;

export type ListProjectsLocationsBindingsResponse = ListBindingsResponse;
export const ListProjectsLocationsBindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListBindingsResponse;

export type ListProjectsLocationsBindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Bindings in a given project and location. */
export const listProjectsLocationsBindings: API.PaginatedOperationMethod<
  ListProjectsLocationsBindingsRequest,
  ListProjectsLocationsBindingsResponse,
  ListProjectsLocationsBindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsBindingsRequest,
  output: ListProjectsLocationsBindingsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsBindingsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The name of the Binding. Format: `projects/{project}/locations/{location}/bindings/{binding}`. */
  name: string;
}

export const DeleteProjectsLocationsBindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsBindingsRequest>;

export type DeleteProjectsLocationsBindingsResponse = Operation;
export const DeleteProjectsLocationsBindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsBindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Binding. */
export const deleteProjectsLocationsBindings: API.OperationMethod<
  DeleteProjectsLocationsBindingsRequest,
  DeleteProjectsLocationsBindingsResponse,
  DeleteProjectsLocationsBindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsBindingsRequest,
  output: DeleteProjectsLocationsBindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsBindingsRequest {
  /** Required. The name of the Binding. Format: `projects/{project}/locations/{location}/bindings/{binding}`. */
  name: string;
}

export const GetProjectsLocationsBindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsBindingsRequest>;

export type GetProjectsLocationsBindingsResponse = Binding;
export const GetProjectsLocationsBindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Binding;

export type GetProjectsLocationsBindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Binding. */
export const getProjectsLocationsBindings: API.OperationMethod<
  GetProjectsLocationsBindingsRequest,
  GetProjectsLocationsBindingsResponse,
  GetProjectsLocationsBindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsBindingsRequest,
  output: GetProjectsLocationsBindingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsBindingsRequest {
  /** Optional. Field mask is used to specify the fields to be overwritten in the Binding resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields present in the request will be overwritten. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Identifier. The resource name of the Binding. Format: `projects/{project}/locations/{location}/bindings/{binding}`. */
  name: string;
  /** Request body */
  body?: Binding;
}

export const PatchProjectsLocationsBindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Binding).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsBindingsRequest>;

export type PatchProjectsLocationsBindingsResponse = Operation;
export const PatchProjectsLocationsBindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsBindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single Binding. */
export const patchProjectsLocationsBindings: API.OperationMethod<
  PatchProjectsLocationsBindingsRequest,
  PatchProjectsLocationsBindingsResponse,
  PatchProjectsLocationsBindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsBindingsRequest,
  output: PatchProjectsLocationsBindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsBindingsRequest {
  /** Required. The project and location to create the Binding in. Expected format: `projects/{project}/locations/{location}`. */
  parent: string;
  /** Required. The ID to use for the binding, which will become the final component of the binding's resource name. This value should be 4-63 characters, and must conform to RFC-1034. Specifically, it must match the regular expression `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. */
  bindingId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Binding;
}

export const CreateProjectsLocationsBindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    bindingId: Schema.optional(Schema.String).pipe(T.HttpQuery("bindingId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Binding).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/bindings",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsBindingsRequest>;

export type CreateProjectsLocationsBindingsResponse = Operation;
export const CreateProjectsLocationsBindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsBindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Binding in a given project and location. */
export const createProjectsLocationsBindings: API.OperationMethod<
  CreateProjectsLocationsBindingsRequest,
  CreateProjectsLocationsBindingsResponse,
  CreateProjectsLocationsBindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsBindingsRequest,
  output: CreateProjectsLocationsBindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FetchAvailableProjectsLocationsBindingsRequest {
  /** Required. The parent, in the format `projects/{project}/locations/{location}`. */
  parent: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** The identifier of the source Agent. Format: * `urn:agent:{publisher}:{namespace}:{name}` */
  sourceIdentifier?: string;
  /** Optional. The identifier of the target Agent, MCP Server, or Endpoint. Format: * `urn:agent:{publisher}:{namespace}:{name}` * `urn:mcp:{publisher}:{namespace}:{name}` * `urn:endpoint:{publisher}:{namespace}:{name}` */
  targetIdentifier?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. Page size is 500 if unspecified and is capped at `500` even if a larger value is given. */
  pageSize?: number;
}

export const FetchAvailableProjectsLocationsBindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    sourceIdentifier: Schema.optional(Schema.String).pipe(
      T.HttpQuery("sourceIdentifier"),
    ),
    targetIdentifier: Schema.optional(Schema.String).pipe(
      T.HttpQuery("targetIdentifier"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1alpha/{+parent}/bindings:fetchAvailable",
    }),
    svc,
  ) as unknown as Schema.Schema<FetchAvailableProjectsLocationsBindingsRequest>;

export type FetchAvailableProjectsLocationsBindingsResponse =
  FetchAvailableBindingsResponse;
export const FetchAvailableProjectsLocationsBindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchAvailableBindingsResponse;

export type FetchAvailableProjectsLocationsBindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Fetches available Bindings. */
export const fetchAvailableProjectsLocationsBindings: API.PaginatedOperationMethod<
  FetchAvailableProjectsLocationsBindingsRequest,
  FetchAvailableProjectsLocationsBindingsResponse,
  FetchAvailableProjectsLocationsBindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: FetchAvailableProjectsLocationsBindingsRequest,
  output: FetchAvailableProjectsLocationsBindingsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsAgentsRequest {
  /** Required. Parent value for ListAgentsRequest */
  parent: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. Filtering results */
  filter?: string;
  /** Optional. Hint for how to order the results */
  orderBy?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsAgentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/agents" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAgentsRequest>;

export type ListProjectsLocationsAgentsResponse = ListAgentsResponse;
export const ListProjectsLocationsAgentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAgentsResponse;

export type ListProjectsLocationsAgentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Agents in a given project and location. */
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

export interface SearchProjectsLocationsAgentsRequest {
  /** Required. Parent value for SearchAgentsRequest. Format: `projects/{project}/locations/{location}`. */
  parent: string;
  /** Request body */
  body?: SearchAgentsRequest;
}

export const SearchProjectsLocationsAgentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SearchAgentsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/agents:search",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SearchProjectsLocationsAgentsRequest>;

export type SearchProjectsLocationsAgentsResponse = SearchAgentsResponse;
export const SearchProjectsLocationsAgentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchAgentsResponse;

export type SearchProjectsLocationsAgentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Searches Agents in a given project and location. */
export const searchProjectsLocationsAgents: API.OperationMethod<
  SearchProjectsLocationsAgentsRequest,
  SearchProjectsLocationsAgentsResponse,
  SearchProjectsLocationsAgentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchProjectsLocationsAgentsRequest,
  output: SearchProjectsLocationsAgentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAgentsRequest {
  /** Required. Name of the resource */
  name: string;
}

export const GetProjectsLocationsAgentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAgentsRequest>;

export type GetProjectsLocationsAgentsResponse = Agent;
export const GetProjectsLocationsAgentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Agent;

export type GetProjectsLocationsAgentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Agent. */
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

export interface ListProjectsLocationsEndpointsRequest {
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Required. The project and location to list endpoints in. Expected format: `projects/{project}/locations/{location}`. */
  parent: string;
  /** Optional. A query string used to filter the list of endpoints returned. The filter expression must follow AIP-160 syntax. Filtering is supported on the `name`, `display_name`, `description`, `version`, and `interfaces` fields. Some examples: * `name = "projects/p1/locations/l1/endpoints/e1"` * `display_name = "my-endpoint"` * `description = "my-endpoint-description"` * `version = "v1"` * `interfaces.transport = "HTTP_JSON"` */
  filter?: string;
}

export const ListProjectsLocationsEndpointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/endpoints" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsEndpointsRequest>;

export type ListProjectsLocationsEndpointsResponse = ListEndpointsResponse;
export const ListProjectsLocationsEndpointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListEndpointsResponse;

export type ListProjectsLocationsEndpointsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Endpoints in a given project and location. */
export const listProjectsLocationsEndpoints: API.PaginatedOperationMethod<
  ListProjectsLocationsEndpointsRequest,
  ListProjectsLocationsEndpointsResponse,
  ListProjectsLocationsEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsEndpointsRequest,
  output: ListProjectsLocationsEndpointsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsEndpointsRequest {
  /** Required. The name of the endpoint to retrieve. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` */
  name: string;
}

export const GetProjectsLocationsEndpointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsEndpointsRequest>;

export type GetProjectsLocationsEndpointsResponse = Endpoint;
export const GetProjectsLocationsEndpointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Endpoint;

export type GetProjectsLocationsEndpointsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Endpoint. */
export const getProjectsLocationsEndpoints: API.OperationMethod<
  GetProjectsLocationsEndpointsRequest,
  GetProjectsLocationsEndpointsResponse,
  GetProjectsLocationsEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsEndpointsRequest,
  output: GetProjectsLocationsEndpointsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsServicesRequest {
  /** Required. The project and location to create the Service in. Expected format: `projects/{project}/locations/{location}`. */
  parent: string;
  /** Required. The ID to use for the service, which will become the final component of the service's resource name. This value should be 4-63 characters, and valid characters are `/a-z-/`. */
  serviceId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Service;
}

export const CreateProjectsLocationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    serviceId: Schema.optional(Schema.String).pipe(T.HttpQuery("serviceId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Service).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/services",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsServicesRequest>;

export type CreateProjectsLocationsServicesResponse = Operation;
export const CreateProjectsLocationsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Service in a given project and location. */
export const createProjectsLocationsServices: API.OperationMethod<
  CreateProjectsLocationsServicesRequest,
  CreateProjectsLocationsServicesResponse,
  CreateProjectsLocationsServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsServicesRequest,
  output: CreateProjectsLocationsServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsServicesRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Identifier. The resource name of the Service. Format: `projects/{project}/locations/{location}/services/{service}`. */
  name: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the Service resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields present in the request will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: Service;
}

export const PatchProjectsLocationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Service).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsServicesRequest>;

export type PatchProjectsLocationsServicesResponse = Operation;
export const PatchProjectsLocationsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single Service. */
export const patchProjectsLocationsServices: API.OperationMethod<
  PatchProjectsLocationsServicesRequest,
  PatchProjectsLocationsServicesResponse,
  PatchProjectsLocationsServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsServicesRequest,
  output: PatchProjectsLocationsServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsServicesRequest {
  /** Required. The name of the Service. Format: `projects/{project}/locations/{location}/services/{service}`. */
  name: string;
}

export const GetProjectsLocationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsServicesRequest>;

export type GetProjectsLocationsServicesResponse = Service;
export const GetProjectsLocationsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Service;

export type GetProjectsLocationsServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Service. */
export const getProjectsLocationsServices: API.OperationMethod<
  GetProjectsLocationsServicesRequest,
  GetProjectsLocationsServicesResponse,
  GetProjectsLocationsServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsServicesRequest,
  output: GetProjectsLocationsServicesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsServicesRequest {
  /** Required. The project and location to list services in. Expected format: `projects/{project}/locations/{location}`. */
  parent: string;
  /** Optional. A query string used to filter the list of services returned. The filter expression must follow AIP-160 syntax. Filtering is supported on the `name`, `display_name`, `description`, and `labels` fields. Some examples: * `name = "projects/p1/locations/l1/services/s1"` * `display_name = "my-service"` * `description : "myservice description"` * `labels.env = "prod"` */
  filter?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
}

export const ListProjectsLocationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/services" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsServicesRequest>;

export type ListProjectsLocationsServicesResponse = ListServicesResponse;
export const ListProjectsLocationsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListServicesResponse;

export type ListProjectsLocationsServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Services in a given project and location. */
export const listProjectsLocationsServices: API.PaginatedOperationMethod<
  ListProjectsLocationsServicesRequest,
  ListProjectsLocationsServicesResponse,
  ListProjectsLocationsServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsServicesRequest,
  output: ListProjectsLocationsServicesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsServicesRequest {
  /** Required. The name of the Service. Format: `projects/{project}/locations/{location}/services/{service}`. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsServicesRequest>;

export type DeleteProjectsLocationsServicesResponse = Operation;
export const DeleteProjectsLocationsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Service. */
export const deleteProjectsLocationsServices: API.OperationMethod<
  DeleteProjectsLocationsServicesRequest,
  DeleteProjectsLocationsServicesResponse,
  DeleteProjectsLocationsServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsServicesRequest,
  output: DeleteProjectsLocationsServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
    T.Http({ method: "POST", path: "v1alpha/{+name}:cancel", hasBody: true }),
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

export interface ListProjectsLocationsOperationsRequest {
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page token. */
  pageToken?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list filter. */
  filter?: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}/operations" }),
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

export interface DeleteProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
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

export interface GetProjectsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
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

export interface SearchProjectsLocationsMcpServersRequest {
  /** Required. Parent value for SearchMcpServersRequest. Format: `projects/{project}/locations/{location}`. */
  parent: string;
  /** Request body */
  body?: SearchMcpServersRequest;
}

export const SearchProjectsLocationsMcpServersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SearchMcpServersRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/mcpServers:search",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SearchProjectsLocationsMcpServersRequest>;

export type SearchProjectsLocationsMcpServersResponse =
  SearchMcpServersResponse;
export const SearchProjectsLocationsMcpServersResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchMcpServersResponse;

export type SearchProjectsLocationsMcpServersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Searches McpServers in a given project and location. */
export const searchProjectsLocationsMcpServers: API.OperationMethod<
  SearchProjectsLocationsMcpServersRequest,
  SearchProjectsLocationsMcpServersResponse,
  SearchProjectsLocationsMcpServersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchProjectsLocationsMcpServersRequest,
  output: SearchProjectsLocationsMcpServersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsMcpServersRequest {
  /** Required. Name of the resource */
  name: string;
}

export const GetProjectsLocationsMcpServersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsMcpServersRequest>;

export type GetProjectsLocationsMcpServersResponse = McpServer;
export const GetProjectsLocationsMcpServersResponse =
  /*@__PURE__*/ /*#__PURE__*/ McpServer;

export type GetProjectsLocationsMcpServersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single McpServer. */
export const getProjectsLocationsMcpServers: API.OperationMethod<
  GetProjectsLocationsMcpServersRequest,
  GetProjectsLocationsMcpServersResponse,
  GetProjectsLocationsMcpServersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsMcpServersRequest,
  output: GetProjectsLocationsMcpServersResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsMcpServersRequest {
  /** Required. Parent value for ListMcpServersRequest. Format: `projects/{project}/locations/{location}`. */
  parent: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. Filtering results */
  filter?: string;
  /** Optional. Hint for how to order the results */
  orderBy?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsMcpServersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/mcpServers" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsMcpServersRequest>;

export type ListProjectsLocationsMcpServersResponse = ListMcpServersResponse;
export const ListProjectsLocationsMcpServersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListMcpServersResponse;

export type ListProjectsLocationsMcpServersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists McpServers in a given project and location. */
export const listProjectsLocationsMcpServers: API.PaginatedOperationMethod<
  ListProjectsLocationsMcpServersRequest,
  ListProjectsLocationsMcpServersResponse,
  ListProjectsLocationsMcpServersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsMcpServersRequest,
  output: ListProjectsLocationsMcpServersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
