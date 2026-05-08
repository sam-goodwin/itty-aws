// ==========================================================================
// Firebase Data Connect API (firebasedataconnect v1beta)
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
  name: "firebasedataconnect",
  version: "v1beta",
  rootUrl: "https://firebasedataconnect.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Service {
  /** Optional. Stores small amounts of arbitrary data. */
  annotations?: Record<string, string>;
  /** Output only. System-assigned, unique identifier. */
  uid?: string;
  /** Identifier. The relative resource name of the Firebase SQL Connect service, in the format: ``` projects/{project}/locations/{location}/services/{service} ``` Note that the service ID is specific to Firebase SQL Connect and does not correspond to any of the instance IDs of the underlying data source connections. */
  name?: string;
  /** Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. [AIP-154](https://google.aip.dev/154) */
  etag?: string;
  /** Output only. [Output only] Create time stamp. */
  createTime?: string;
  /** Output only. [Output only] Update time stamp. */
  updateTime?: string;
  /** Output only. A field that if true, indicates that the system is working update the service. */
  reconciling?: boolean;
  /** Optional. Labels as key value pairs. */
  labels?: Record<string, string>;
  /** Optional. Mutable human-readable name. 63 character limit. */
  displayName?: string;
}

export const Service: Schema.Schema<Service> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    uid: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    reconciling: Schema.optional(Schema.Boolean),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Service" });

export interface GenerationStatus {
  /** Output only. A message providing more details about the state. */
  message?: string;
  /** Output only. The state of generation. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ANALYZING_CODE"
    | "GENERATING_CODE"
    | "COMPLETED"
    | (string & {});
}

export const GenerationStatus: Schema.Schema<GenerationStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerationStatus" });

export interface Workaround {
  /** Description of this workaround. */
  description?: string;
  /** Why would this workaround address the error and warning. */
  reason?: string;
  /** A suggested code snippet to fix the error and warning. */
  replace?: string;
}

export const Workaround: Schema.Schema<Workaround> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    replace: Schema.optional(Schema.String),
  }).annotate({ identifier: "Workaround" });

export interface GraphqlErrorExtensions {
  /** Maps to canonical gRPC codes. If not specified, it represents `Code.INTERNAL`. */
  code?:
    | "OK"
    | "CANCELLED"
    | "UNKNOWN"
    | "INVALID_ARGUMENT"
    | "DEADLINE_EXCEEDED"
    | "NOT_FOUND"
    | "ALREADY_EXISTS"
    | "PERMISSION_DENIED"
    | "UNAUTHENTICATED"
    | "RESOURCE_EXHAUSTED"
    | "FAILED_PRECONDITION"
    | "ABORTED"
    | "OUT_OF_RANGE"
    | "UNIMPLEMENTED"
    | "INTERNAL"
    | "UNAVAILABLE"
    | "DATA_LOSS"
    | (string & {});
  /** More detailed error message to assist debugging. It contains application business logic that are inappropriate to leak publicly. In the emulator, SQL Connect API always includes it to assist local development and debugging. In the backend, ConnectorService always hides it. GraphqlService without impersonation always include it. GraphqlService with impersonation includes it only if explicitly opted-in with `include_debug_details` in `GraphqlRequestExtensions`. */
  debugDetails?: string;
  /** Warning level describes the severity and required action to suppress this warning when Firebase CLI run into it. */
  warningLevel?:
    | "WARNING_LEVEL_UNKNOWN"
    | "LOG_ONLY"
    | "INTERACTIVE_ACK"
    | "REQUIRE_ACK"
    | "REQUIRE_FORCE"
    | (string & {});
  /** Workarounds provide suggestions to address the compile errors or warnings. */
  workarounds?: ReadonlyArray<Workaround>;
  /** The source file name where the error occurred. Included only for `UpdateSchema` and `UpdateConnector`, it corresponds to `File.path` of the provided `Source`. */
  file?: string;
}

export const GraphqlErrorExtensions: Schema.Schema<GraphqlErrorExtensions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
    debugDetails: Schema.optional(Schema.String),
    warningLevel: Schema.optional(Schema.String),
    workarounds: Schema.optional(Schema.Array(Workaround)),
    file: Schema.optional(Schema.String),
  }).annotate({ identifier: "GraphqlErrorExtensions" });

export interface Impersonation {
  /** Optional. If set, include debug details in GraphQL error extensions. */
  includeDebugDetails?: boolean;
  /** Evaluate the auth policy with a customized JWT auth token. Should follow the Firebase Auth token format. https://firebase.google.com/docs/rules/rules-and-auth For example: a verified user may have auth_claims of {"sub": , "email_verified": true} */
  authClaims?: Record<string, unknown>;
  /** Evaluate the auth policy as an unauthenticated request. Can only be set to true. */
  unauthenticated?: boolean;
}

export const Impersonation: Schema.Schema<Impersonation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includeDebugDetails: Schema.optional(Schema.Boolean),
    authClaims: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    unauthenticated: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Impersonation" });

export interface GraphqlRequestExtensions {
  /** Optional. If set, impersonate a request with given Firebase Auth context and evaluate the auth policies on the operation. If omitted, bypass any defined auth policies. */
  impersonate?: Impersonation;
}

export const GraphqlRequestExtensions: Schema.Schema<GraphqlRequestExtensions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    impersonate: Schema.optional(Impersonation),
  }).annotate({ identifier: "GraphqlRequestExtensions" });

export interface GraphqlRequest {
  /** Optional. Values for GraphQL variables provided in this request. */
  variables?: Record<string, unknown>;
  /** Required. The GraphQL query document source. */
  query?: string;
  /** Optional. Additional GraphQL request information. */
  extensions?: GraphqlRequestExtensions;
  /** Optional. The name of the GraphQL operation name. Required only if `query` contains multiple operations. See https://graphql.org/learn/queries/#operation-name. */
  operationName?: string;
}

export const GraphqlRequest: Schema.Schema<GraphqlRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    variables: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    query: Schema.optional(Schema.String),
    extensions: Schema.optional(GraphqlRequestExtensions),
    operationName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GraphqlRequest" });

export interface HttpGraphql {
  /** Required. The endpoint of the HTTP GraphQL server. */
  uri?: string;
  /** Optional. Timeout duration for the HTTP request. */
  timeout?: string;
}

export const HttpGraphql: Schema.Schema<HttpGraphql> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    timeout: Schema.optional(Schema.String),
  }).annotate({ identifier: "HttpGraphql" });

export interface CloudSqlInstance {
  /** Required. Name of the CloudSQL instance, in the format: ``` projects/{project}/locations/{location}/instances/{instance} ``` */
  instance?: string;
}

export const CloudSqlInstance: Schema.Schema<CloudSqlInstance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instance: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudSqlInstance" });

export interface PostgreSql {
  /** Required. Name of the PostgreSQL database. */
  database?: string;
  /** Output only. Ephemeral is true if this SQL Connect service is served from temporary in-memory emulation of Postgres. While Cloud SQL is being provisioned, the SQL Connect service provides the ephemeral service to help developers get started. Once the Cloud SQL is provisioned, SQL Connect service will transfer its data on a best-effort basis to the Cloud SQL instance. WARNING: Ephemeral data sources will expire after 24 hour. The data will be lost if they aren't transferred to the Cloud SQL instance. WARNING: When `ephemeral=true`, mutations to the database are not guaranteed to be durably persisted, even if an OK status code is returned. All or parts of the data may be lost or reverted to earlier versions. */
  ephemeral?: boolean;
  /** Optional. Configure how much PostgreSQL schema validation to perform against the live database before deploying the FDC schema. */
  schemaValidation?:
    | "SQL_SCHEMA_VALIDATION_UNSPECIFIED"
    | "NONE"
    | "STRICT"
    | "COMPATIBLE"
    | (string & {});
  /** No Postgres data source is linked. If set, don't allow `database` and `schema_validation` to be configured. */
  unlinked?: boolean;
  /** Cloud SQL configurations. */
  cloudSql?: CloudSqlInstance;
  /** Optional. User-configured PostgreSQL schema. Defaults to "public" if not specified. */
  schema?: string;
  /** Optional. Configure how to perform automatic PostgreSQL schema migration before deploying the FDC schema. This is an additive-only operation. */
  schemaMigration?:
    | "SQL_SCHEMA_MIGRATION_UNSPECIFIED"
    | "MIGRATE_COMPATIBLE"
    | (string & {});
}

export const PostgreSql: Schema.Schema<PostgreSql> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    database: Schema.optional(Schema.String),
    ephemeral: Schema.optional(Schema.Boolean),
    schemaValidation: Schema.optional(Schema.String),
    unlinked: Schema.optional(Schema.Boolean),
    cloudSql: Schema.optional(CloudSqlInstance),
    schema: Schema.optional(Schema.String),
    schemaMigration: Schema.optional(Schema.String),
  }).annotate({ identifier: "PostgreSql" });

export interface Datasource {
  /** HTTP GraphQL server webhook configurations. */
  httpGraphql?: HttpGraphql;
  /** PostgreSQL configurations. */
  postgresql?: PostgreSql;
}

export const Datasource: Schema.Schema<Datasource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    httpGraphql: Schema.optional(HttpGraphql),
    postgresql: Schema.optional(PostgreSql),
  }).annotate({ identifier: "Datasource" });

export interface File {
  /** Required. The file name including folder path, if applicable. The path should be relative to a local workspace (e.g. dataconnect/(schema|connector)/*.gql) and not an absolute path (e.g. /absolute/path/(schema|connector)/*.gql). */
  path?: string;
  /** Required. The file's textual content. */
  content?: string;
}

export const File: Schema.Schema<File> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
  }).annotate({ identifier: "File" });

export interface Source {
  /** Required. The files that comprise the source set. */
  files?: ReadonlyArray<File>;
}

export const Source: Schema.Schema<Source> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    files: Schema.optional(Schema.Array(File)),
  }).annotate({ identifier: "Source" });

export interface Firebasedataconnect_Schema {
  /** Optional. Labels as key value pairs. */
  labels?: Record<string, string>;
  /** Optional. Mutable human-readable name. 63 character limit. */
  displayName?: string;
  /** Required. The data sources linked in the schema. */
  datasources?: ReadonlyArray<Datasource>;
  /** Output only. A field that if true, indicates that the system is working to compile and deploy the schema. */
  reconciling?: boolean;
  /** Output only. [Output only] Create time stamp. */
  createTime?: string;
  /** Output only. [Output only] Update time stamp. */
  updateTime?: string;
  /** Required. The source files that comprise the application schema. */
  source?: Source;
  /** Optional. Stores small amounts of arbitrary data. */
  annotations?: Record<string, string>;
  /** Output only. System-assigned, unique identifier. */
  uid?: string;
  /** Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. [AIP-154](https://google.aip.dev/154) */
  etag?: string;
  /** Identifier. The relative resource name of the schema, in the format: ``` projects/{project}/locations/{location}/services/{service}/schemas/{schema} ``` Right now, the only supported schema is "main". */
  name?: string;
}

export const Firebasedataconnect_Schema: Schema.Schema<Firebasedataconnect_Schema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    displayName: Schema.optional(Schema.String),
    datasources: Schema.optional(Schema.Array(Datasource)),
    reconciling: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    source: Schema.optional(Source),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    uid: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Firebasedataconnect_Schema" });

export interface TextChunk {
  /** Required. The text content string. */
  text?: string;
}

export const TextChunk: Schema.Schema<TextChunk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "TextChunk" });

export interface CodeChunk {
  /** Optional. Specifies the language if we expand support beyond GraphQL (e.g., SQL or JSON) The standard is BCP-47 language code. */
  languageCode?: string;
  /** Required. The code content string. */
  code?: string;
}

export const CodeChunk: Schema.Schema<CodeChunk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
  }).annotate({ identifier: "CodeChunk" });

export interface Part {
  /** Optional. A chunk of text. */
  textChunk?: TextChunk;
  /** Optional. A chunk of code. */
  codeChunk?: CodeChunk;
}

export const Part: Schema.Schema<Part> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    textChunk: Schema.optional(TextChunk),
    codeChunk: Schema.optional(CodeChunk),
  }).annotate({ identifier: "Part" });

export interface DataConnectProperties {
  /** A single Entity ID. Set if the path points to a single entity. */
  entityId?: string;
  /** A list of Entity IDs. Set if the path points to an array of entities. An ID is present for each element of the array at the corresponding index. */
  entityIds?: ReadonlyArray<string>;
  /** The path under response.data where the rest of the fields apply. Each element may be a string (field name) or number (array index). The root of response.data is denoted by the empty list `[]`. */
  path?: ReadonlyArray<unknown>;
  /** The server-suggested duration before data under path is considered stale. */
  maxAge?: string;
}

export const DataConnectProperties: Schema.Schema<DataConnectProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityId: Schema.optional(Schema.String),
    entityIds: Schema.optional(Schema.Array(Schema.String)),
    path: Schema.optional(Schema.Array(Schema.Unknown)),
    maxAge: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataConnectProperties" });

export interface GraphqlResponseExtensions {
  /** SQL Connect specific GraphQL extension, a list of paths and properties. */
  dataConnect?: ReadonlyArray<DataConnectProperties>;
}

export const GraphqlResponseExtensions: Schema.Schema<GraphqlResponseExtensions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataConnect: Schema.optional(Schema.Array(DataConnectProperties)),
  }).annotate({ identifier: "GraphqlResponseExtensions" });

export interface SourceLocation {
  /** Line number starting at 1. */
  line?: number;
  /** Column number starting at 1. */
  column?: number;
}

export const SourceLocation: Schema.Schema<SourceLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    line: Schema.optional(Schema.Number),
    column: Schema.optional(Schema.Number),
  }).annotate({ identifier: "SourceLocation" });

export interface GraphqlError {
  /** The detailed error message. The message should help developer understand the underlying problem without leaking internal data. */
  message?: string;
  /** The source locations where the error occurred. Locations should help developers and toolings identify the source of error quickly. Included in admin endpoints (`ExecuteGraphql`, `ExecuteGraphqlRead`, `IntrospectGraphql`, `ImpersonateQuery`, `ImpersonateMutation`, `UpdateSchema` and `UpdateConnector`) to reference the provided GraphQL GQL document. Omitted in `ExecuteMutation` and `ExecuteQuery` since the caller shouldn't have access access the underlying GQL source. */
  locations?: ReadonlyArray<SourceLocation>;
  /** The result field which could not be populated due to error. Clients can use path to identify whether a null result is intentional or caused by a runtime error. It should be a list of string or index from the root of GraphQL query document. */
  path?: ReadonlyArray<unknown>;
  /** Additional error information. */
  extensions?: GraphqlErrorExtensions;
}

export const GraphqlError: Schema.Schema<GraphqlError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(SourceLocation)),
    path: Schema.optional(Schema.Array(Schema.Unknown)),
    extensions: Schema.optional(GraphqlErrorExtensions),
  }).annotate({ identifier: "GraphqlError" });

export interface ExecuteQueryResponse {
  /** Additional response information. */
  extensions?: GraphqlResponseExtensions;
  /** The result of executing the requested operation. */
  data?: Record<string, unknown>;
  /** Errors of this response. */
  errors?: ReadonlyArray<GraphqlError>;
}

export const ExecuteQueryResponse: Schema.Schema<ExecuteQueryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    extensions: Schema.optional(GraphqlResponseExtensions),
    data: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    errors: Schema.optional(Schema.Array(GraphqlError)),
  }).annotate({ identifier: "ExecuteQueryResponse" });

export interface ClientCache {
  /** Optional. A field that, if true, enables stricter validation on the connector source code to make sure the operation response shapes are suitable for client-side caching. This can include additional errors and warnings. For example, using the same alias for different fields is disallowed, as it may cause conflicts or confusion with normalized caching. (This field is off by default for compatibility, but enabling it is highly recommended to catch common caching pitfalls.) */
  strictValidationEnabled?: boolean;
  /** Optional. A field that, if true, means that responses served by this connector will include entityIds in GraphQL response extensions. This helps the client SDK cache responses in an improved way, known as "normalized caching", if caching is enabled on the client. Each entityId is a stable key based on primary key values. Therefore, this field should only be set to true if the primary keys of accessed tables do not contain sensitive information. */
  entityIdIncluded?: boolean;
}

export const ClientCache: Schema.Schema<ClientCache> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    strictValidationEnabled: Schema.optional(Schema.Boolean),
    entityIdIncluded: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ClientCache" });

export interface Connector {
  /** Required. The source files that comprise the connector. */
  source?: Source;
  /** Optional. Stores small amounts of arbitrary data. */
  annotations?: Record<string, string>;
  /** Output only. System-assigned, unique identifier. */
  uid?: string;
  /** Optional. The client cache settings of the connector. */
  clientCache?: ClientCache;
  /** Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. [AIP-154](https://google.aip.dev/154) */
  etag?: string;
  /** Identifier. The relative resource name of the connector, in the format: ``` projects/{project}/locations/{location}/services/{service}/connectors/{connector} ``` */
  name?: string;
  /** Optional. Labels as key value pairs. */
  labels?: Record<string, string>;
  /** Optional. Mutable human-readable name. 63 character limit. */
  displayName?: string;
  /** Output only. A field that if true, indicates that the system is working to compile and deploy the connector. */
  reconciling?: boolean;
  /** Output only. [Output only] Create time stamp. */
  createTime?: string;
  /** Output only. [Output only] Update time stamp. */
  updateTime?: string;
}

export const Connector: Schema.Schema<Connector> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Source),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    uid: Schema.optional(Schema.String),
    clientCache: Schema.optional(ClientCache),
    etag: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    displayName: Schema.optional(Schema.String),
    reconciling: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Connector" });

export interface GenerateQueryResponse {
  /** Essential for providing responsive UI feedback (e.g., a spinner or "Analyzing schema..." step). */
  status?: GenerationStatus;
  /** Required. The content from the current conversational turn. */
  part?: Part;
}

export const GenerateQueryResponse: Schema.Schema<GenerateQueryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(GenerationStatus),
    part: Schema.optional(Part),
  }).annotate({ identifier: "GenerateQueryResponse" });

export interface Location {
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Location" });

export interface ListLocationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
}

export const ListLocationsResponse: Schema.Schema<ListLocationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(Location)),
  }).annotate({ identifier: "ListLocationsResponse" });

export interface ExecuteQueryRequest {
  /** Required. The name of the GraphQL operation name. Required because all Connector operations must be named. See https://graphql.org/learn/queries/#operation-name. */
  operationName?: string;
  /** Optional. Values for GraphQL variables provided in this request. */
  variables?: Record<string, unknown>;
}

export const ExecuteQueryRequest: Schema.Schema<ExecuteQueryRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operationName: Schema.optional(Schema.String),
    variables: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "ExecuteQueryRequest" });

export interface GenerateSchemaRequest {
  /** Required. The natural language description of the data model to generate. Example: "A blog system with Users, Posts, and Comments. Users can have multiple posts." */
  prompt?: string;
}

export const GenerateSchemaRequest: Schema.Schema<GenerateSchemaRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    prompt: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerateSchemaRequest" });

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

export interface ExecuteMutationResponse {
  /** The result of executing the requested operation. */
  data?: Record<string, unknown>;
  /** Errors of this response. */
  errors?: ReadonlyArray<GraphqlError>;
  /** Additional response information. */
  extensions?: GraphqlResponseExtensions;
}

export const ExecuteMutationResponse: Schema.Schema<ExecuteMutationResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    errors: Schema.optional(Schema.Array(GraphqlError)),
    extensions: Schema.optional(GraphqlResponseExtensions),
  }).annotate({ identifier: "ExecuteMutationResponse" });

export interface Operation {
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(Status),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Operation" });

export interface GraphqlResponse {
  /** Additional response information. It conforms to https://spec.graphql.org/draft/#sec-Extensions . */
  extensions?: GraphqlResponseExtensions;
  /** The result of the execution of the requested operation. If an error was raised before execution begins, the data entry should not be present in the result. (a request error: https://spec.graphql.org/draft/#sec-Errors.Request-Errors) If an error was raised during the execution that prevented a valid response, the data entry in the response should be null. (a field error: https://spec.graphql.org/draft/#sec-Errors.Error-Result-Format) */
  data?: Record<string, unknown>;
  /** Errors of this response. If the data entry in the response is not present, the errors entry must be present. It conforms to https://spec.graphql.org/draft/#sec-Errors . */
  errors?: ReadonlyArray<GraphqlError>;
}

export const GraphqlResponse: Schema.Schema<GraphqlResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    extensions: Schema.optional(GraphqlResponseExtensions),
    data: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    errors: Schema.optional(Schema.Array(GraphqlError)),
  }).annotate({ identifier: "GraphqlResponse" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface ExecuteMutationRequest {
  /** Optional. Values for GraphQL variables provided in this request. */
  variables?: Record<string, unknown>;
  /** Required. The name of the GraphQL operation name. Required because all Connector operations must be named. See https://graphql.org/learn/queries/#operation-name. */
  operationName?: string;
}

export const ExecuteMutationRequest: Schema.Schema<ExecuteMutationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    variables: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    operationName: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExecuteMutationRequest" });

export interface ImpersonateRequest {
  /** Required. The name of the GraphQL operation name. Required because all Connector operations must be named. See https://graphql.org/learn/queries/#operation-name. */
  operationName?: string;
  /** Optional. Additional GraphQL request information. */
  extensions?: GraphqlRequestExtensions;
  /** Optional. Values for GraphQL variables provided in this request. */
  variables?: Record<string, unknown>;
}

export const ImpersonateRequest: Schema.Schema<ImpersonateRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operationName: Schema.optional(Schema.String),
    extensions: Schema.optional(GraphqlRequestExtensions),
    variables: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "ImpersonateRequest" });

export interface ListSchemasResponse {
  /** The list of Schemas. */
  schemas?: ReadonlyArray<Firebasedataconnect_Schema>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListSchemasResponse: Schema.Schema<ListSchemasResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schemas: Schema.optional(Schema.Array(Firebasedataconnect_Schema)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListSchemasResponse" });

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

export interface GenerateQueryRequest {
  /** Required. The natural language description of the desired query. Example: "Find all users who signed up in the last 7 days." */
  prompt?: string;
  /** Optional. The user's locally defined FDC Schema(s). If not defined, the backend will fetch the user's deployed schema. */
  schemas?: ReadonlyArray<Firebasedataconnect_Schema>;
}

export const GenerateQueryRequest: Schema.Schema<GenerateQueryRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    prompt: Schema.optional(Schema.String),
    schemas: Schema.optional(Schema.Array(Firebasedataconnect_Schema)),
  }).annotate({ identifier: "GenerateQueryRequest" });

export interface GenerateSchemaResponse {
  /** Essential for providing responsive UI feedback (e.g., a spinner or "Analyzing schema..." step). */
  status?: GenerationStatus;
  /** The content from the current conversational turn. */
  part?: Part;
}

export const GenerateSchemaResponse: Schema.Schema<GenerateSchemaResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(GenerationStatus),
    part: Schema.optional(Part),
  }).annotate({ identifier: "GenerateSchemaResponse" });

export interface OperationMetadata {
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    statusMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface ListConnectorsResponse {
  /** The list of Connectors. */
  connectors?: ReadonlyArray<Connector>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListConnectorsResponse: Schema.Schema<ListConnectorsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connectors: Schema.optional(Schema.Array(Connector)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListConnectorsResponse" });

export interface ListServicesResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The list of Services. */
  services?: ReadonlyArray<Service>;
}

export const ListServicesResponse: Schema.Schema<ListServicesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    services: Schema.optional(Schema.Array(Service)),
  }).annotate({ identifier: "ListServicesResponse" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
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
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
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

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list filter. */
  filter?: string;
  /** The standard list page token. */
  pageToken?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page size. */
  pageSize?: number;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
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

export interface DeleteProjectsLocationsServicesRequest {
  /** Optional. If set to true, any child resources (i.e. Schema, SchemaRevisions, Connectors, and ConnectorRevisions) will also be deleted. Otherwise, the request will only work if the Service has no child resources. */
  force?: boolean;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If true and the Service is not found, the request will succeed but no action will be taken on the server. */
  allowMissing?: boolean;
  /** Optional. If set, validate the request and preview the Service, but do not actually delete it. */
  validateOnly?: boolean;
  /** Optional. The etag of the Service. If this is provided, it must match the server's etag. */
  etag?: string;
  /** Required. The name of the service to delete, in the format: ``` projects/{project}/locations/{location}/services/{service} ``` */
  name: string;
}

export const DeleteProjectsLocationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{+name}" }),
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

export interface ListProjectsLocationsServicesRequest {
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListServices` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListServices` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Filtering results. */
  filter?: string;
  /** Required. Value of parent. */
  parent: string;
}

export const ListProjectsLocationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/services" }),
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

export interface ExecuteGraphqlProjectsLocationsServicesRequest {
  /** Required. The relative resource name of Firebase SQL Connect service, in the format: ``` projects/{project}/locations/{location}/services/{service} ``` */
  name: string;
  /** Request body */
  body?: GraphqlRequest;
}

export const ExecuteGraphqlProjectsLocationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GraphqlRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+name}:executeGraphql",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExecuteGraphqlProjectsLocationsServicesRequest>;

export type ExecuteGraphqlProjectsLocationsServicesResponse = GraphqlResponse;
export const ExecuteGraphqlProjectsLocationsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GraphqlResponse;

export type ExecuteGraphqlProjectsLocationsServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Execute any GraphQL query or mutation against the Firebase SQL Connect's generated GraphQL schema. Grants full read and write access to the connected data sources. Note: Use introspection query to explore the generated GraphQL schema. */
export const executeGraphqlProjectsLocationsServices: API.OperationMethod<
  ExecuteGraphqlProjectsLocationsServicesRequest,
  ExecuteGraphqlProjectsLocationsServicesResponse,
  ExecuteGraphqlProjectsLocationsServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExecuteGraphqlProjectsLocationsServicesRequest,
  output: ExecuteGraphqlProjectsLocationsServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExecuteGraphqlReadProjectsLocationsServicesRequest {
  /** Required. The relative resource name of Firebase SQL Connect service, in the format: ``` projects/{project}/locations/{location}/services/{service} ``` */
  name: string;
  /** Request body */
  body?: GraphqlRequest;
}

export const ExecuteGraphqlReadProjectsLocationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GraphqlRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+name}:executeGraphqlRead",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExecuteGraphqlReadProjectsLocationsServicesRequest>;

export type ExecuteGraphqlReadProjectsLocationsServicesResponse =
  GraphqlResponse;
export const ExecuteGraphqlReadProjectsLocationsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GraphqlResponse;

export type ExecuteGraphqlReadProjectsLocationsServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Execute any GraphQL query against the Firebase SQL Connect's generated GraphQL schema. Grants full read to the connected data sources. `ExecuteGraphqlRead` is identical to `ExecuteGraphql` except it only accepts read-only query. */
export const executeGraphqlReadProjectsLocationsServices: API.OperationMethod<
  ExecuteGraphqlReadProjectsLocationsServicesRequest,
  ExecuteGraphqlReadProjectsLocationsServicesResponse,
  ExecuteGraphqlReadProjectsLocationsServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExecuteGraphqlReadProjectsLocationsServicesRequest,
  output: ExecuteGraphqlReadProjectsLocationsServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsServicesRequest {
  /** Optional. If set, validate the request and preview the Service, but do not actually update it. */
  validateOnly?: boolean;
  /** Identifier. The relative resource name of the Firebase SQL Connect service, in the format: ``` projects/{project}/locations/{location}/services/{service} ``` Note that the service ID is specific to Firebase SQL Connect and does not correspond to any of the instance IDs of the underlying data source connections. */
  name: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the Service resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If true and the Service is not found, a new Service will be created. In this case, `update_mask` is ignored. */
  allowMissing?: boolean;
  /** Request body */
  body?: Service;
}

export const PatchProjectsLocationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    body: Schema.optional(Service).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{+name}", hasBody: true }),
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

export interface GenerateSchemaProjectsLocationsServicesRequest {
  /** Required. The resource name of the service in which to generate the schema. Format: projects/{project}/locations/{location}/services/{service} */
  name: string;
  /** Request body */
  body?: GenerateSchemaRequest;
}

export const GenerateSchemaProjectsLocationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GenerateSchemaRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+name}:generateSchema",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateSchemaProjectsLocationsServicesRequest>;

export type GenerateSchemaProjectsLocationsServicesResponse =
  GenerateSchemaResponse;
export const GenerateSchemaProjectsLocationsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GenerateSchemaResponse;

export type GenerateSchemaProjectsLocationsServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generates GraphQL schema based on a natural language prompt or data description. This allows users to scaffold new types and tables quickly. Streams results with real-time status and output chunks. */
export const generateSchemaProjectsLocationsServices: API.OperationMethod<
  GenerateSchemaProjectsLocationsServicesRequest,
  GenerateSchemaProjectsLocationsServicesResponse,
  GenerateSchemaProjectsLocationsServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateSchemaProjectsLocationsServicesRequest,
  output: GenerateSchemaProjectsLocationsServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsServicesRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set, validate the request and preview the Service, but do not actually create it. */
  validateOnly?: boolean;
  /** Required. Value of parent. */
  parent: string;
  /** Required. The ID to use for the service, which will become the final component of the service's resource name. */
  serviceId?: string;
  /** Request body */
  body?: Service;
}

export const CreateProjectsLocationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    serviceId: Schema.optional(Schema.String).pipe(T.HttpQuery("serviceId")),
    body: Schema.optional(Service).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}/services",
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

export interface GetProjectsLocationsServicesRequest {
  /** Required. The name of the service to retrieve, in the format: ``` projects/{project}/locations/{location}/services/{service} ``` */
  name: string;
}

export const GetProjectsLocationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
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

export interface GenerateQueryProjectsLocationsServicesRequest {
  /** Required. The resource name of the service in which to generate the query. Format: projects/{project}/locations/{location}/services/{service} */
  name: string;
  /** Request body */
  body?: GenerateQueryRequest;
}

export const GenerateQueryProjectsLocationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GenerateQueryRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+name}:generateQuery",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateQueryProjectsLocationsServicesRequest>;

export type GenerateQueryProjectsLocationsServicesResponse =
  GenerateQueryResponse;
export const GenerateQueryProjectsLocationsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GenerateQueryResponse;

export type GenerateQueryProjectsLocationsServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generates a GraphQL query based on a natural language prompt and the provided schema context. This is a stateless method; the schema is provided per request to support local development states. Streams results with real-time status and output chunks. */
export const generateQueryProjectsLocationsServices: API.OperationMethod<
  GenerateQueryProjectsLocationsServicesRequest,
  GenerateQueryProjectsLocationsServicesResponse,
  GenerateQueryProjectsLocationsServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateQueryProjectsLocationsServicesRequest,
  output: GenerateQueryProjectsLocationsServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface IntrospectGraphqlProjectsLocationsServicesRequest {
  /** Required. The relative resource name of Firebase SQL Connect service, in the format: ``` projects/{project}/locations/{location}/services/{service} ``` */
  name: string;
  /** Request body */
  body?: GraphqlRequest;
}

export const IntrospectGraphqlProjectsLocationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GraphqlRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+name}:introspectGraphql",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<IntrospectGraphqlProjectsLocationsServicesRequest>;

export type IntrospectGraphqlProjectsLocationsServicesResponse =
  GraphqlResponse;
export const IntrospectGraphqlProjectsLocationsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GraphqlResponse;

export type IntrospectGraphqlProjectsLocationsServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Execute introspection query against the Firebase SQL Connect's generated GraphQL schema. GraphQL introspection query provides metadata such as what tables the schema have, what queries and mutations can be performed on the schema, and so on. Read more at https://graphql.org/learn/introspection. IntrospectGraphql can read schema metadata but cannot read rows from Cloud SQL instance, which can be done via ExecuteGraphqlRead. */
export const introspectGraphqlProjectsLocationsServices: API.OperationMethod<
  IntrospectGraphqlProjectsLocationsServicesRequest,
  IntrospectGraphqlProjectsLocationsServicesResponse,
  IntrospectGraphqlProjectsLocationsServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: IntrospectGraphqlProjectsLocationsServicesRequest,
  output: IntrospectGraphqlProjectsLocationsServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsServicesConnectorsRequest {
  /** Optional. If true and the Connector is not found, the request will succeed but no action will be taken on the server. */
  allowMissing?: boolean;
  /** Optional. If set to true, any child resources (i.e. ConnectorRevisions) will also be deleted. Otherwise, the request will only work if the Connector has no child resources. */
  force?: boolean;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The name of the connector to delete, in the format: ``` projects/{project}/locations/{location}/services/{service}/connectors/{connector} ``` */
  name: string;
  /** Optional. The etag of the Connector. If this is provided, it must match the server's etag. */
  etag?: string;
  /** Optional. If set, validate the request and preview the Connector, but do not actually delete it. */
  validateOnly?: boolean;
}

export const DeleteProjectsLocationsServicesConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsServicesConnectorsRequest>;

export type DeleteProjectsLocationsServicesConnectorsResponse = Operation;
export const DeleteProjectsLocationsServicesConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsServicesConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Connector. */
export const deleteProjectsLocationsServicesConnectors: API.OperationMethod<
  DeleteProjectsLocationsServicesConnectorsRequest,
  DeleteProjectsLocationsServicesConnectorsResponse,
  DeleteProjectsLocationsServicesConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsServicesConnectorsRequest,
  output: DeleteProjectsLocationsServicesConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ImpersonateMutationProjectsLocationsServicesConnectorsRequest {
  /** Required. The resource name of the connector to find the predefined query/mutation, in the format: ``` projects/{project}/locations/{location}/services/{service}/connectors/{connector} ``` */
  name: string;
  /** Request body */
  body?: ImpersonateRequest;
}

export const ImpersonateMutationProjectsLocationsServicesConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ImpersonateRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+name}:impersonateMutation",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ImpersonateMutationProjectsLocationsServicesConnectorsRequest>;

export type ImpersonateMutationProjectsLocationsServicesConnectorsResponse =
  GraphqlResponse;
export const ImpersonateMutationProjectsLocationsServicesConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GraphqlResponse;

export type ImpersonateMutationProjectsLocationsServicesConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Impersonate a mutation defined on a Firebase SQL Connect connector. It grants the admin SDK access to mutations defined in the given connector. The caller can choose to impersonate a particular Firebase Auth user, or skip @auth completely. */
export const impersonateMutationProjectsLocationsServicesConnectors: API.OperationMethod<
  ImpersonateMutationProjectsLocationsServicesConnectorsRequest,
  ImpersonateMutationProjectsLocationsServicesConnectorsResponse,
  ImpersonateMutationProjectsLocationsServicesConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImpersonateMutationProjectsLocationsServicesConnectorsRequest,
  output: ImpersonateMutationProjectsLocationsServicesConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsServicesConnectorsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If true and the Connector is not found, a new Connector will be created. In this case, `update_mask` is ignored. */
  allowMissing?: boolean;
  /** Optional. If set, validate the request and preview the Connector, but do not actually update it. */
  validateOnly?: boolean;
  /** Identifier. The relative resource name of the connector, in the format: ``` projects/{project}/locations/{location}/services/{service}/connectors/{connector} ``` */
  name: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the Connector resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: Connector;
}

export const PatchProjectsLocationsServicesConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Connector).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsServicesConnectorsRequest>;

export type PatchProjectsLocationsServicesConnectorsResponse = Operation;
export const PatchProjectsLocationsServicesConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsServicesConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single Connector, and creates a new ConnectorRevision with the updated Connector. The operations are validated against and must be compatible with the live schema. If the operations and schema are not compatible or if the schema is not present, this will result in an error. */
export const patchProjectsLocationsServicesConnectors: API.OperationMethod<
  PatchProjectsLocationsServicesConnectorsRequest,
  PatchProjectsLocationsServicesConnectorsResponse,
  PatchProjectsLocationsServicesConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsServicesConnectorsRequest,
  output: PatchProjectsLocationsServicesConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExecuteMutationProjectsLocationsServicesConnectorsRequest {
  /** Required. The resource name of the connector to find the predefined mutation, in the format: ``` projects/{project}/locations/{location}/services/{service}/connectors/{connector} ``` */
  name: string;
  /** Request body */
  body?: ExecuteMutationRequest;
}

export const ExecuteMutationProjectsLocationsServicesConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ExecuteMutationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+name}:executeMutation",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExecuteMutationProjectsLocationsServicesConnectorsRequest>;

export type ExecuteMutationProjectsLocationsServicesConnectorsResponse =
  ExecuteMutationResponse;
export const ExecuteMutationProjectsLocationsServicesConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ExecuteMutationResponse;

export type ExecuteMutationProjectsLocationsServicesConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Execute a predefined mutation in a Connector. */
export const executeMutationProjectsLocationsServicesConnectors: API.OperationMethod<
  ExecuteMutationProjectsLocationsServicesConnectorsRequest,
  ExecuteMutationProjectsLocationsServicesConnectorsResponse,
  ExecuteMutationProjectsLocationsServicesConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExecuteMutationProjectsLocationsServicesConnectorsRequest,
  output: ExecuteMutationProjectsLocationsServicesConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsServicesConnectorsRequest {
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Required. Value of parent. */
  parent: string;
  /** Optional. A page token, received from a previous `ListConnectors` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectors` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Filtering results. */
  filter?: string;
}

export const ListProjectsLocationsServicesConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/connectors" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsServicesConnectorsRequest>;

export type ListProjectsLocationsServicesConnectorsResponse =
  ListConnectorsResponse;
export const ListProjectsLocationsServicesConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListConnectorsResponse;

export type ListProjectsLocationsServicesConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Connectors in a given project and location. */
export const listProjectsLocationsServicesConnectors: API.PaginatedOperationMethod<
  ListProjectsLocationsServicesConnectorsRequest,
  ListProjectsLocationsServicesConnectorsResponse,
  ListProjectsLocationsServicesConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsServicesConnectorsRequest,
  output: ListProjectsLocationsServicesConnectorsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ImpersonateQueryProjectsLocationsServicesConnectorsRequest {
  /** Required. The resource name of the connector to find the predefined query/mutation, in the format: ``` projects/{project}/locations/{location}/services/{service}/connectors/{connector} ``` */
  name: string;
  /** Request body */
  body?: ImpersonateRequest;
}

export const ImpersonateQueryProjectsLocationsServicesConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ImpersonateRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+name}:impersonateQuery",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ImpersonateQueryProjectsLocationsServicesConnectorsRequest>;

export type ImpersonateQueryProjectsLocationsServicesConnectorsResponse =
  GraphqlResponse;
export const ImpersonateQueryProjectsLocationsServicesConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GraphqlResponse;

export type ImpersonateQueryProjectsLocationsServicesConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Impersonate a query defined on a Firebase SQL Connect connector. It grants the admin SDK access to queries defined in the given connector. The caller can choose to impersonate a particular Firebase Auth user, or skip @auth completely. */
export const impersonateQueryProjectsLocationsServicesConnectors: API.OperationMethod<
  ImpersonateQueryProjectsLocationsServicesConnectorsRequest,
  ImpersonateQueryProjectsLocationsServicesConnectorsResponse,
  ImpersonateQueryProjectsLocationsServicesConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImpersonateQueryProjectsLocationsServicesConnectorsRequest,
  output: ImpersonateQueryProjectsLocationsServicesConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsServicesConnectorsRequest {
  /** Required. Value for parent. */
  parent: string;
  /** Required. The ID to use for the connector, which will become the final component of the connector's resource name. */
  connectorId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set, validate the request and preview the Connector, but do not actually create it. */
  validateOnly?: boolean;
  /** Request body */
  body?: Connector;
}

export const CreateProjectsLocationsServicesConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    connectorId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("connectorId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(Connector).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}/connectors",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsServicesConnectorsRequest>;

export type CreateProjectsLocationsServicesConnectorsResponse = Operation;
export const CreateProjectsLocationsServicesConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsServicesConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Connector in a given project and location. The operations are validated against and must be compatible with the active schema. If the operations and schema are not compatible or if the schema is not present, this will result in an error. */
export const createProjectsLocationsServicesConnectors: API.OperationMethod<
  CreateProjectsLocationsServicesConnectorsRequest,
  CreateProjectsLocationsServicesConnectorsResponse,
  CreateProjectsLocationsServicesConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsServicesConnectorsRequest,
  output: CreateProjectsLocationsServicesConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExecuteQueryProjectsLocationsServicesConnectorsRequest {
  /** Required. The resource name of the connector to find the predefined query, in the format: ``` projects/{project}/locations/{location}/services/{service}/connectors/{connector} ``` */
  name: string;
  /** Request body */
  body?: ExecuteQueryRequest;
}

export const ExecuteQueryProjectsLocationsServicesConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ExecuteQueryRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+name}:executeQuery",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExecuteQueryProjectsLocationsServicesConnectorsRequest>;

export type ExecuteQueryProjectsLocationsServicesConnectorsResponse =
  ExecuteQueryResponse;
export const ExecuteQueryProjectsLocationsServicesConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ExecuteQueryResponse;

export type ExecuteQueryProjectsLocationsServicesConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Execute a predefined query in a Connector. */
export const executeQueryProjectsLocationsServicesConnectors: API.OperationMethod<
  ExecuteQueryProjectsLocationsServicesConnectorsRequest,
  ExecuteQueryProjectsLocationsServicesConnectorsResponse,
  ExecuteQueryProjectsLocationsServicesConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExecuteQueryProjectsLocationsServicesConnectorsRequest,
  output: ExecuteQueryProjectsLocationsServicesConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsServicesConnectorsRequest {
  /** Required. The name of the connector to retrieve, in the format: ``` projects/{project}/locations/{location}/services/{service}/connectors/{connector} ``` */
  name: string;
}

export const GetProjectsLocationsServicesConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsServicesConnectorsRequest>;

export type GetProjectsLocationsServicesConnectorsResponse = Connector;
export const GetProjectsLocationsServicesConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Connector;

export type GetProjectsLocationsServicesConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Connector. */
export const getProjectsLocationsServicesConnectors: API.OperationMethod<
  GetProjectsLocationsServicesConnectorsRequest,
  GetProjectsLocationsServicesConnectorsResponse,
  GetProjectsLocationsServicesConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsServicesConnectorsRequest,
  output: GetProjectsLocationsServicesConnectorsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsServicesSchemasRequest {
  /** Required. The ID to use for the schema, which will become the final component of the schema's resource name. Currently, only `main` is supported and any other schema ID will result in an error. */
  schemaId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set, validate the request and preview the Schema, but do not actually update it. */
  validateOnly?: boolean;
  /** Required. Value for parent. */
  parent: string;
  /** Request body */
  body?: Firebasedataconnect_Schema;
}

export const CreateProjectsLocationsServicesSchemasRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schemaId: Schema.optional(Schema.String).pipe(T.HttpQuery("schemaId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Firebasedataconnect_Schema).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta/{+parent}/schemas", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsServicesSchemasRequest>;

export type CreateProjectsLocationsServicesSchemasResponse = Operation;
export const CreateProjectsLocationsServicesSchemasResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsServicesSchemasError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Schema in a given project and location. Only creation of `schemas/main` is supported and calling create with any other schema ID will result in an error. */
export const createProjectsLocationsServicesSchemas: API.OperationMethod<
  CreateProjectsLocationsServicesSchemasRequest,
  CreateProjectsLocationsServicesSchemasResponse,
  CreateProjectsLocationsServicesSchemasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsServicesSchemasRequest,
  output: CreateProjectsLocationsServicesSchemasResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsServicesSchemasRequest {
  /** Required. The name of the schema to delete, in the format: ``` projects/{project}/locations/{location}/services/{service}/schemas/{schema} ``` */
  name: string;
  /** Optional. If set, validate the request and preview the Schema, but do not actually delete it. */
  validateOnly?: boolean;
  /** Optional. The etag of the Schema. If this is provided, it must match the server's etag. */
  etag?: string;
  /** Optional. If true and the Schema is not found, the request will succeed but no action will be taken on the server. */
  allowMissing?: boolean;
  /** Optional. If set to true, any child resources (i.e. SchemaRevisions) will also be deleted. */
  force?: boolean;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsServicesSchemasRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsServicesSchemasRequest>;

export type DeleteProjectsLocationsServicesSchemasResponse = Operation;
export const DeleteProjectsLocationsServicesSchemasResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsServicesSchemasError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Schema. Because the schema and connectors must be compatible at all times, if this is called while any connectors are active, this will result in an error. */
export const deleteProjectsLocationsServicesSchemas: API.OperationMethod<
  DeleteProjectsLocationsServicesSchemasRequest,
  DeleteProjectsLocationsServicesSchemasResponse,
  DeleteProjectsLocationsServicesSchemasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsServicesSchemasRequest,
  output: DeleteProjectsLocationsServicesSchemasResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsServicesSchemasRequest {
  /** Required. The name of the schema to retrieve, in the format: ``` projects/{project}/locations/{location}/services/{service}/schemas/{schema} ``` */
  name: string;
}

export const GetProjectsLocationsServicesSchemasRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsServicesSchemasRequest>;

export type GetProjectsLocationsServicesSchemasResponse =
  Firebasedataconnect_Schema;
export const GetProjectsLocationsServicesSchemasResponse =
  /*@__PURE__*/ /*#__PURE__*/ Firebasedataconnect_Schema;

export type GetProjectsLocationsServicesSchemasError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Schema. */
export const getProjectsLocationsServicesSchemas: API.OperationMethod<
  GetProjectsLocationsServicesSchemasRequest,
  GetProjectsLocationsServicesSchemasResponse,
  GetProjectsLocationsServicesSchemasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsServicesSchemasRequest,
  output: GetProjectsLocationsServicesSchemasResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsServicesSchemasRequest {
  /** Required. Value of parent. */
  parent: string;
  /** Optional. A page token, received from a previous `ListSchemas` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSchemas` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Filtering results. */
  filter?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
}

export const ListProjectsLocationsServicesSchemasRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/schemas" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsServicesSchemasRequest>;

export type ListProjectsLocationsServicesSchemasResponse = ListSchemasResponse;
export const ListProjectsLocationsServicesSchemasResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListSchemasResponse;

export type ListProjectsLocationsServicesSchemasError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Schemas in a given project and location. */
export const listProjectsLocationsServicesSchemas: API.PaginatedOperationMethod<
  ListProjectsLocationsServicesSchemasRequest,
  ListProjectsLocationsServicesSchemasResponse,
  ListProjectsLocationsServicesSchemasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsServicesSchemasRequest,
  output: ListProjectsLocationsServicesSchemasResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsServicesSchemasRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If true and the Schema is not found, a new Schema will be created. In this case, `update_mask` is ignored. */
  allowMissing?: boolean;
  /** Optional. If set, validate the request and preview the Schema, but do not actually update it. */
  validateOnly?: boolean;
  /** Identifier. The relative resource name of the schema, in the format: ``` projects/{project}/locations/{location}/services/{service}/schemas/{schema} ``` Right now, the only supported schema is "main". */
  name: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the Schema resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: Firebasedataconnect_Schema;
}

export const PatchProjectsLocationsServicesSchemasRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Firebasedataconnect_Schema).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsServicesSchemasRequest>;

export type PatchProjectsLocationsServicesSchemasResponse = Operation;
export const PatchProjectsLocationsServicesSchemasResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsServicesSchemasError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single Schema, and creates a new SchemaRevision with the updated Schema. */
export const patchProjectsLocationsServicesSchemas: API.OperationMethod<
  PatchProjectsLocationsServicesSchemasRequest,
  PatchProjectsLocationsServicesSchemasResponse,
  PatchProjectsLocationsServicesSchemasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsServicesSchemasRequest,
  output: PatchProjectsLocationsServicesSchemasResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
