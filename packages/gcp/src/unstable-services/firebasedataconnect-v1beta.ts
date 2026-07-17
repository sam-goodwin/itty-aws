// ==========================================================================
// Firebase SQL Connect API (firebasedataconnect v1beta)
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
  name: "firebasedataconnect",
  version: "v1beta",
  rootUrl: "https://firebasedataconnect.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface File {
  /** Required. The file name including folder path, if applicable. The path should be relative to a local workspace (e.g. dataconnect/(schema|connector)/*.gql) and not an absolute path (e.g. /absolute/path/(schema|connector)/*.gql). */
  path?: string;
  /** Required. The file's textual content. */
  content?: string;
}

export const File: Schema.Codec<File> =
  /*@__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
  }).annotate({ identifier: "File" });

export interface Source {
  /** Required. The files that comprise the source set. */
  files?: ReadonlyArray<File>;
}

export const Source: Schema.Codec<Source> =
  /*@__PURE__*/ Schema.Struct({
    files: Schema.optional(Schema.Array(File)),
  }).annotate({ identifier: "Source" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status: Schema.Codec<Status> =
  /*@__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "Status" });

export interface TextChunk {
  /** Required. The text content string. */
  text?: string;
}

export const TextChunk: Schema.Codec<TextChunk> =
  /*@__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "TextChunk" });

export interface CodeChunk {
  /** Optional. Specifies the language if we expand support beyond GraphQL (e.g., SQL or JSON) The standard is BCP-47 language code. */
  languageCode?: string;
  /** Required. The code content string. */
  code?: string;
}

export const CodeChunk: Schema.Codec<CodeChunk> =
  /*@__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
  }).annotate({ identifier: "CodeChunk" });

export interface Part {
  /** Optional. A chunk of text. */
  textChunk?: TextChunk;
  /** Optional. A chunk of code. */
  codeChunk?: CodeChunk;
}

export const Part: Schema.Codec<Part> =
  /*@__PURE__*/ Schema.Struct({
    textChunk: Schema.optional(TextChunk),
    codeChunk: Schema.optional(CodeChunk),
  }).annotate({ identifier: "Part" });

export interface GenerationStatus {
  /** Output only. The state of generation. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ANALYZING_CODE"
    | "GENERATING_CODE"
    | "COMPLETED"
    | (string & {});
  /** Output only. A message providing more details about the state. */
  message?: string;
}

export const GenerationStatus: Schema.Codec<GenerationStatus> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerationStatus" });

export interface GenerateSchemaResponse {
  /** The content from the current conversational turn. */
  part?: Part;
  /** Essential for providing responsive UI feedback (e.g., a spinner or "Analyzing schema..." step). */
  status?: GenerationStatus;
}

export const GenerateSchemaResponse: Schema.Codec<GenerateSchemaResponse> =
  /*@__PURE__*/ Schema.Struct({
    part: Schema.optional(Part),
    status: Schema.optional(GenerationStatus),
  }).annotate({ identifier: "GenerateSchemaResponse" });

export interface Impersonation {
  /** Evaluate the auth policy with a customized JWT auth token. Should follow the Firebase Auth token format. https://firebase.google.com/docs/rules/rules-and-auth For example: a verified user may have auth_claims of {"sub": , "email_verified": true} */
  authClaims?: Record<string, unknown>;
  /** Evaluate the auth policy as an unauthenticated request. Can only be set to true. */
  unauthenticated?: boolean;
  /** Optional. If set, include debug details in GraphQL error extensions. */
  includeDebugDetails?: boolean;
}

export const Impersonation: Schema.Codec<Impersonation> =
  /*@__PURE__*/ Schema.Struct({
    authClaims: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    unauthenticated: Schema.optional(Schema.Boolean),
    includeDebugDetails: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Impersonation" });

export interface GraphqlRequestExtensions {
  /** Optional. If set, impersonate a request with given Firebase Auth context and evaluate the auth policies on the operation. If omitted, bypass any defined auth policies. */
  impersonate?: Impersonation;
}

export const GraphqlRequestExtensions: Schema.Codec<GraphqlRequestExtensions> =
  /*@__PURE__*/ Schema.Struct({
    impersonate: Schema.optional(Impersonation),
  }).annotate({ identifier: "GraphqlRequestExtensions" });

export interface GraphqlRequest {
  /** Required. The GraphQL query document source. */
  query?: string;
  /** Optional. Values for GraphQL variables provided in this request. */
  variables?: Record<string, unknown>;
  /** Optional. The name of the GraphQL operation name. Required only if `query` contains multiple operations. See https://graphql.org/learn/queries/#operation-name. */
  operationName?: string;
  /** Optional. Additional GraphQL request information. */
  extensions?: GraphqlRequestExtensions;
}

export const GraphqlRequest: Schema.Codec<GraphqlRequest> =
  /*@__PURE__*/ Schema.Struct({
    query: Schema.optional(Schema.String),
    variables: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    operationName: Schema.optional(Schema.String),
    extensions: Schema.optional(GraphqlRequestExtensions),
  }).annotate({ identifier: "GraphqlRequest" });

export interface ClientCache {
  /** Optional. A field that, if true, enables stricter validation on the connector source code to make sure the operation response shapes are suitable for client-side caching. This can include additional errors and warnings. For example, using the same alias for different fields is disallowed, as it may cause conflicts or confusion with normalized caching. (This field is off by default for compatibility, but enabling it is highly recommended to catch common caching pitfalls.) */
  strictValidationEnabled?: boolean;
  /** Optional. A field that, if true, means that responses served by this connector will include entityIds in GraphQL response extensions. This helps the client SDK cache responses in an improved way, known as "normalized caching", if caching is enabled on the client. Each entityId is a stable key based on primary key values. Therefore, this field should only be set to true if the primary keys of accessed tables do not contain sensitive information. */
  entityIdIncluded?: boolean;
}

export const ClientCache: Schema.Codec<ClientCache> =
  /*@__PURE__*/ Schema.Struct({
    strictValidationEnabled: Schema.optional(Schema.Boolean),
    entityIdIncluded: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ClientCache" });

export interface Connector {
  /** Identifier. The relative resource name of the connector, in the format: ``` projects/{project}/locations/{location}/services/{service}/connectors/{connector} ``` */
  name?: string;
  /** Required. The source files that comprise the connector. */
  source?: Source;
  /** Output only. A field that if true, indicates that the system is working to compile and deploy the connector. */
  reconciling?: boolean;
  /** Output only. [Output only] Create time stamp. */
  createTime?: string;
  /** Output only. System-assigned, unique identifier. */
  uid?: string;
  /** Optional. Stores small amounts of arbitrary data. */
  annotations?: Record<string, string>;
  /** Output only. [Output only] Update time stamp. */
  updateTime?: string;
  /** Optional. Labels as key value pairs. */
  labels?: Record<string, string>;
  /** Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. [AIP-154](https://google.aip.dev/154) */
  etag?: string;
  /** Optional. Mutable human-readable name. 63 character limit. */
  displayName?: string;
  /** Optional. The client cache settings of the connector. */
  clientCache?: ClientCache;
}

export const Connector: Schema.Codec<Connector> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    source: Schema.optional(Source),
    reconciling: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    updateTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    clientCache: Schema.optional(ClientCache),
  }).annotate({ identifier: "Connector" });

export interface ListConnectorsResponse {
  /** The list of Connectors. */
  connectors?: ReadonlyArray<Connector>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListConnectorsResponse: Schema.Codec<ListConnectorsResponse> =
  /*@__PURE__*/ Schema.Struct({
    connectors: Schema.optional(Schema.Array(Connector)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListConnectorsResponse" });

export interface Location {
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
}

export const Location: Schema.Codec<Location> =
  /*@__PURE__*/ Schema.Struct({
    locationId: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Location" });

export interface Empty {}

export const Empty: Schema.Codec<Empty> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface Workaround {
  /** Why would this workaround address the error and warning. */
  reason?: string;
  /** A suggested code snippet to fix the error and warning. */
  replace?: string;
  /** Description of this workaround. */
  description?: string;
}

export const Workaround: Schema.Codec<Workaround> =
  /*@__PURE__*/ Schema.Struct({
    reason: Schema.optional(Schema.String),
    replace: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "Workaround" });

export interface GraphqlErrorExtensions {
  /** Warning level describes the severity and required action to suppress this warning when Firebase CLI run into it. */
  warningLevel?:
    | "WARNING_LEVEL_UNKNOWN"
    | "LOG_ONLY"
    | "INTERACTIVE_ACK"
    | "REQUIRE_ACK"
    | "REQUIRE_FORCE"
    | (string & {});
  /** The source file name where the error occurred. Included only for `UpdateSchema` and `UpdateConnector`, it corresponds to `File.path` of the provided `Source`. */
  file?: string;
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
  /** Workarounds provide suggestions to address the compile errors or warnings. */
  workarounds?: ReadonlyArray<Workaround>;
}

export const GraphqlErrorExtensions: Schema.Codec<GraphqlErrorExtensions> =
  /*@__PURE__*/ Schema.Struct({
    warningLevel: Schema.optional(Schema.String),
    file: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
    debugDetails: Schema.optional(Schema.String),
    workarounds: Schema.optional(Schema.Array(Workaround)),
  }).annotate({ identifier: "GraphqlErrorExtensions" });

export interface Service {
  /** Optional. Mutable human-readable name. 63 character limit. */
  displayName?: string;
  /** Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. [AIP-154](https://google.aip.dev/154) */
  etag?: string;
  /** Output only. [Output only] Update time stamp. */
  updateTime?: string;
  /** Optional. Labels as key value pairs. */
  labels?: Record<string, string>;
  /** Optional. Stores small amounts of arbitrary data. */
  annotations?: Record<string, string>;
  /** Output only. System-assigned, unique identifier. */
  uid?: string;
  /** Output only. [Output only] Create time stamp. */
  createTime?: string;
  /** Output only. A field that if true, indicates that the system is working update the service. */
  reconciling?: boolean;
  /** Identifier. The relative resource name of the Firebase SQL Connect service, in the format: ``` projects/{project}/locations/{location}/services/{service} ``` Note that the service ID is specific to Firebase SQL Connect and does not correspond to any of the instance IDs of the underlying data source connections. */
  name?: string;
}

export const Service: Schema.Codec<Service> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    uid: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    reconciling: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Service" });

export interface CloudSqlInstance {
  /** Required. Name of the CloudSQL instance, in the format: ``` projects/{project}/locations/{location}/instances/{instance} ``` */
  instance?: string;
}

export const CloudSqlInstance: Schema.Codec<CloudSqlInstance> =
  /*@__PURE__*/ Schema.Struct({
    instance: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudSqlInstance" });

export interface PostgreSql {
  /** Required. Name of the PostgreSQL database. */
  database?: string;
  /** Optional. Configure how much PostgreSQL schema validation to perform against the live database before deploying the FDC schema. */
  schemaValidation?:
    | "SQL_SCHEMA_VALIDATION_UNSPECIFIED"
    | "NONE"
    | "STRICT"
    | "COMPATIBLE"
    | (string & {});
  /** Optional. Configure how to perform automatic PostgreSQL schema migration before deploying the FDC schema. This is an additive-only operation. */
  schemaMigration?:
    | "SQL_SCHEMA_MIGRATION_UNSPECIFIED"
    | "MIGRATE_COMPATIBLE"
    | (string & {});
  /** Optional. User-configured PostgreSQL schema. Defaults to "public" if not specified. */
  schema?: string;
  /** Cloud SQL configurations. */
  cloudSql?: CloudSqlInstance;
  /** No Postgres data source is linked. If set, don't allow `database` and `schema_validation` to be configured. */
  unlinked?: boolean;
  /** Output only. Ephemeral is true if this SQL Connect service is served from temporary in-memory emulation of Postgres. While Cloud SQL is being provisioned, the SQL Connect service provides the ephemeral service to help developers get started. Once the Cloud SQL is provisioned, SQL Connect service will transfer its data on a best-effort basis to the Cloud SQL instance. WARNING: Ephemeral data sources will expire after 24 hour. The data will be lost if they aren't transferred to the Cloud SQL instance. WARNING: When `ephemeral=true`, mutations to the database are not guaranteed to be durably persisted, even if an OK status code is returned. All or parts of the data may be lost or reverted to earlier versions. */
  ephemeral?: boolean;
}

export const PostgreSql: Schema.Codec<PostgreSql> =
  /*@__PURE__*/ Schema.Struct({
    database: Schema.optional(Schema.String),
    schemaValidation: Schema.optional(Schema.String),
    schemaMigration: Schema.optional(Schema.String),
    schema: Schema.optional(Schema.String),
    cloudSql: Schema.optional(CloudSqlInstance),
    unlinked: Schema.optional(Schema.Boolean),
    ephemeral: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "PostgreSql" });

export interface HttpGraphql {
  /** Required. The endpoint of the HTTP GraphQL server. */
  uri?: string;
  /** Optional. Timeout duration for the HTTP request. */
  timeout?: string;
}

export const HttpGraphql: Schema.Codec<HttpGraphql> =
  /*@__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    timeout: Schema.optional(Schema.String),
  }).annotate({ identifier: "HttpGraphql" });

export interface Datasource {
  /** PostgreSQL configurations. */
  postgresql?: PostgreSql;
  /** HTTP GraphQL server webhook configurations. */
  httpGraphql?: HttpGraphql;
}

export const Datasource: Schema.Codec<Datasource> =
  /*@__PURE__*/ Schema.Struct({
    postgresql: Schema.optional(PostgreSql),
    httpGraphql: Schema.optional(HttpGraphql),
  }).annotate({ identifier: "Datasource" });

export interface SourceLocation {
  /** Column number starting at 1. */
  column?: number;
  /** Line number starting at 1. */
  line?: number;
}

export const SourceLocation: Schema.Codec<SourceLocation> =
  /*@__PURE__*/ Schema.Struct({
    column: Schema.optional(Schema.Number),
    line: Schema.optional(Schema.Number),
  }).annotate({ identifier: "SourceLocation" });

export interface GraphqlError {
  /** The detailed error message. The message should help developer understand the underlying problem without leaking internal data. */
  message?: string;
  /** The result field which could not be populated due to error. Clients can use path to identify whether a null result is intentional or caused by a runtime error. It should be a list of string or index from the root of GraphQL query document. */
  path?: ReadonlyArray<unknown>;
  /** Additional error information. */
  extensions?: GraphqlErrorExtensions;
  /** The source locations where the error occurred. Locations should help developers and toolings identify the source of error quickly. Included in admin endpoints (`ExecuteGraphql`, `ExecuteGraphqlRead`, `IntrospectGraphql`, `ImpersonateQuery`, `ImpersonateMutation`, `UpdateSchema` and `UpdateConnector`) to reference the provided GraphQL GQL document. Omitted in `ExecuteMutation` and `ExecuteQuery` since the caller shouldn't have access access the underlying GQL source. */
  locations?: ReadonlyArray<SourceLocation>;
}

export const GraphqlError: Schema.Codec<GraphqlError> =
  /*@__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    path: Schema.optional(Schema.Array(Schema.Unknown)),
    extensions: Schema.optional(GraphqlErrorExtensions),
    locations: Schema.optional(Schema.Array(SourceLocation)),
  }).annotate({ identifier: "GraphqlError" });

export interface DataConnectProperties {
  /** The path under response.data where the rest of the fields apply. Each element may be a string (field name) or number (array index). The root of response.data is denoted by the empty list `[]`. */
  path?: ReadonlyArray<unknown>;
  /** A single Entity ID. Set if the path points to a single entity. */
  entityId?: string;
  /** A list of Entity IDs. Set if the path points to an array of entities. An ID is present for each element of the array at the corresponding index. */
  entityIds?: ReadonlyArray<string>;
  /** The server-suggested duration before data under path is considered stale. */
  maxAge?: string;
}

export const DataConnectProperties: Schema.Codec<DataConnectProperties> =
  /*@__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.Array(Schema.Unknown)),
    entityId: Schema.optional(Schema.String),
    entityIds: Schema.optional(Schema.Array(Schema.String)),
    maxAge: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataConnectProperties" });

export interface GraphqlResponseExtensions {
  /** SQL Connect specific GraphQL extension, a list of paths and properties. */
  dataConnect?: ReadonlyArray<DataConnectProperties>;
}

export const GraphqlResponseExtensions: Schema.Codec<GraphqlResponseExtensions> =
  /*@__PURE__*/ Schema.Struct({
    dataConnect: Schema.optional(Schema.Array(DataConnectProperties)),
  }).annotate({ identifier: "GraphqlResponseExtensions" });

export interface ExecuteMutationResponse {
  /** The result of executing the requested operation. */
  data?: Record<string, unknown>;
  /** Errors of this response. */
  errors?: ReadonlyArray<GraphqlError>;
  /** Additional response information. */
  extensions?: GraphqlResponseExtensions;
}

export const ExecuteMutationResponse: Schema.Codec<ExecuteMutationResponse> =
  /*@__PURE__*/ Schema.Struct({
    data: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    errors: Schema.optional(Schema.Array(GraphqlError)),
    extensions: Schema.optional(GraphqlResponseExtensions),
  }).annotate({ identifier: "ExecuteMutationResponse" });

export interface ImpersonateRequest {
  /** Optional. Values for GraphQL variables provided in this request. */
  variables?: Record<string, unknown>;
  /** Required. The name of the GraphQL operation name. Required because all Connector operations must be named. See https://graphql.org/learn/queries/#operation-name. */
  operationName?: string;
  /** Optional. Additional GraphQL request information. */
  extensions?: GraphqlRequestExtensions;
}

export const ImpersonateRequest: Schema.Codec<ImpersonateRequest> =
  /*@__PURE__*/ Schema.Struct({
    variables: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    operationName: Schema.optional(Schema.String),
    extensions: Schema.optional(GraphqlRequestExtensions),
  }).annotate({ identifier: "ImpersonateRequest" });

export interface GenerateSchemaRequest {
  /** Required. The natural language description of the data model to generate. Example: "A blog system with Users, Posts, and Comments. Users can have multiple posts." */
  prompt?: string;
}

export const GenerateSchemaRequest: Schema.Codec<GenerateSchemaRequest> =
  /*@__PURE__*/ Schema.Struct({
    prompt: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerateSchemaRequest" });

export interface GenerateQueryResponse {
  /** Required. The content from the current conversational turn. */
  part?: Part;
  /** Essential for providing responsive UI feedback (e.g., a spinner or "Analyzing schema..." step). */
  status?: GenerationStatus;
}

export const GenerateQueryResponse: Schema.Codec<GenerateQueryResponse> =
  /*@__PURE__*/ Schema.Struct({
    part: Schema.optional(Part),
    status: Schema.optional(GenerationStatus),
  }).annotate({ identifier: "GenerateQueryResponse" });

export interface ExecuteMutationRequest {
  /** Required. The name of the GraphQL operation name. Required because all Connector operations must be named. See https://graphql.org/learn/queries/#operation-name. */
  operationName?: string;
  /** Optional. Values for GraphQL variables provided in this request. */
  variables?: Record<string, unknown>;
}

export const ExecuteMutationRequest: Schema.Codec<ExecuteMutationRequest> =
  /*@__PURE__*/ Schema.Struct({
    operationName: Schema.optional(Schema.String),
    variables: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "ExecuteMutationRequest" });

export interface Operation {
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
}

export const Operation: Schema.Codec<Operation> =
  /*@__PURE__*/ Schema.Struct({
    error: Schema.optional(Status),
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Operation" });

export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListOperationsResponse: Schema.Codec<ListOperationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(Operation)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface Firebasedataconnect_Schema {
  /** Identifier. The relative resource name of the schema, in the format: ``` projects/{project}/locations/{location}/services/{service}/schemas/{schema} ``` Right now, the only supported schema is "main". */
  name?: string;
  /** Required. The source files that comprise the application schema. */
  source?: Source;
  /** Output only. A field that if true, indicates that the system is working to compile and deploy the schema. */
  reconciling?: boolean;
  /** Output only. [Output only] Create time stamp. */
  createTime?: string;
  /** Output only. System-assigned, unique identifier. */
  uid?: string;
  /** Optional. Stores small amounts of arbitrary data. */
  annotations?: Record<string, string>;
  /** Required. The data sources linked in the schema. */
  datasources?: ReadonlyArray<Datasource>;
  /** Output only. [Output only] Update time stamp. */
  updateTime?: string;
  /** Optional. Labels as key value pairs. */
  labels?: Record<string, string>;
  /** Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. [AIP-154](https://google.aip.dev/154) */
  etag?: string;
  /** Optional. Mutable human-readable name. 63 character limit. */
  displayName?: string;
}

export const Firebasedataconnect_Schema: Schema.Codec<Firebasedataconnect_Schema> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    source: Schema.optional(Source),
    reconciling: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    datasources: Schema.optional(Schema.Array(Datasource)),
    updateTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Firebasedataconnect_Schema" });

export interface ListSchemasResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** The list of Schemas. */
  schemas?: ReadonlyArray<Firebasedataconnect_Schema>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListSchemasResponse: Schema.Codec<ListSchemasResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    schemas: Schema.optional(Schema.Array(Firebasedataconnect_Schema)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListSchemasResponse" });

export interface OperationMetadata {
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
}

export const OperationMetadata: Schema.Codec<OperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    statusMessage: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface ExecuteQueryResponse {
  /** Errors of this response. */
  errors?: ReadonlyArray<GraphqlError>;
  /** Additional response information. */
  extensions?: GraphqlResponseExtensions;
  /** The result of executing the requested operation. */
  data?: Record<string, unknown>;
}

export const ExecuteQueryResponse: Schema.Codec<ExecuteQueryResponse> =
  /*@__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(GraphqlError)),
    extensions: Schema.optional(GraphqlResponseExtensions),
    data: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "ExecuteQueryResponse" });

export interface ExecuteQueryRequest {
  /** Required. The name of the GraphQL operation name. Required because all Connector operations must be named. See https://graphql.org/learn/queries/#operation-name. */
  operationName?: string;
  /** Optional. Values for GraphQL variables provided in this request. */
  variables?: Record<string, unknown>;
}

export const ExecuteQueryRequest: Schema.Codec<ExecuteQueryRequest> =
  /*@__PURE__*/ Schema.Struct({
    operationName: Schema.optional(Schema.String),
    variables: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "ExecuteQueryRequest" });

export interface GenerateQueryRequest {
  /** Required. The natural language description of the desired query. Example: "Find all users who signed up in the last 7 days." */
  prompt?: string;
  /** Optional. The user's locally defined FDC Schema(s). If not defined, the backend will fetch the user's deployed schema. */
  schemas?: ReadonlyArray<Firebasedataconnect_Schema>;
}

export const GenerateQueryRequest: Schema.Codec<GenerateQueryRequest> =
  /*@__PURE__*/ Schema.Struct({
    prompt: Schema.optional(Schema.String),
    schemas: Schema.optional(Schema.Array(Firebasedataconnect_Schema)),
  }).annotate({ identifier: "GenerateQueryRequest" });

export interface GraphqlResponse {
  /** Errors of this response. If the data entry in the response is not present, the errors entry must be present. It conforms to https://spec.graphql.org/draft/#sec-Errors . */
  errors?: ReadonlyArray<GraphqlError>;
  /** Additional response information. It conforms to https://spec.graphql.org/draft/#sec-Extensions . */
  extensions?: GraphqlResponseExtensions;
  /** The result of the execution of the requested operation. If an error was raised before execution begins, the data entry should not be present in the result. (a request error: https://spec.graphql.org/draft/#sec-Errors.Request-Errors) If an error was raised during the execution that prevented a valid response, the data entry in the response should be null. (a field error: https://spec.graphql.org/draft/#sec-Errors.Error-Result-Format) */
  data?: Record<string, unknown>;
}

export const GraphqlResponse: Schema.Codec<GraphqlResponse> =
  /*@__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(GraphqlError)),
    extensions: Schema.optional(GraphqlResponseExtensions),
    data: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GraphqlResponse" });

export interface ListServicesResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** The list of Services. */
  services?: ReadonlyArray<Service>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListServicesResponse: Schema.Codec<ListServicesResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    services: Schema.optional(Schema.Array(Service)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListServicesResponse" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Codec<CancelOperationRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface ListLocationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
}

export const ListLocationsResponse: Schema.Codec<ListLocationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(Location)),
  }).annotate({ identifier: "ListLocationsResponse" });

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
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}/locations" }),
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

export interface GetProjectsLocationsRequest {
  /** Resource name for the location. */
  name: string;
}

export const GetProjectsLocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
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

export interface GetProjectsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
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

export interface DeleteProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{+name}" }),
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
    T.Http({ method: "POST", path: "v1beta/{+name}:cancel", hasBody: true }),
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
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page size. */
  pageSize?: number;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}/operations" }),
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

export interface CreateProjectsLocationsServicesRequest {
  /** Required. The ID to use for the service, which will become the final component of the service's resource name. */
  serviceId?: string;
  /** Optional. If set, validate the request and preview the Service, but do not actually create it. */
  validateOnly?: boolean;
  /** Required. Value of parent. */
  parent: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Service;
}

export const CreateProjectsLocationsServicesRequest =
  /*@__PURE__*/ Schema.Struct({
    serviceId: Schema.optional(Schema.String).pipe(T.HttpQuery("serviceId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Service).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}/services",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsServicesRequest>;

export type CreateProjectsLocationsServicesResponse = Operation;
export const CreateProjectsLocationsServicesResponse = /*@__PURE__*/ Operation;

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
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsServicesRequest,
  output: CreateProjectsLocationsServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GenerateQueryProjectsLocationsServicesRequest {
  /** Required. The resource name of the service in which to generate the query. Format: projects/{project}/locations/{location}/services/{service} */
  name: string;
  /** Request body */
  body?: GenerateQueryRequest;
}

export const GenerateQueryProjectsLocationsServicesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GenerateQueryRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+name}:generateQuery",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<GenerateQueryProjectsLocationsServicesRequest>;

export type GenerateQueryProjectsLocationsServicesResponse =
  GenerateQueryResponse;
export const GenerateQueryProjectsLocationsServicesResponse =
  /*@__PURE__*/ GenerateQueryResponse;

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
> = /*@__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GraphqlRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+name}:introspectGraphql",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<IntrospectGraphqlProjectsLocationsServicesRequest>;

export type IntrospectGraphqlProjectsLocationsServicesResponse =
  GraphqlResponse;
export const IntrospectGraphqlProjectsLocationsServicesResponse =
  /*@__PURE__*/ GraphqlResponse;

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
> = /*@__PURE__*/ API.make(() => ({
  input: IntrospectGraphqlProjectsLocationsServicesRequest,
  output: IntrospectGraphqlProjectsLocationsServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GenerateSchemaProjectsLocationsServicesRequest {
  /** Required. The resource name of the service in which to generate the schema. Format: projects/{project}/locations/{location}/services/{service} */
  name: string;
  /** Request body */
  body?: GenerateSchemaRequest;
}

export const GenerateSchemaProjectsLocationsServicesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GenerateSchemaRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+name}:generateSchema",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<GenerateSchemaProjectsLocationsServicesRequest>;

export type GenerateSchemaProjectsLocationsServicesResponse =
  GenerateSchemaResponse;
export const GenerateSchemaProjectsLocationsServicesResponse =
  /*@__PURE__*/ GenerateSchemaResponse;

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
> = /*@__PURE__*/ API.make(() => ({
  input: GenerateSchemaProjectsLocationsServicesRequest,
  output: GenerateSchemaProjectsLocationsServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsServicesRequest {
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Filtering results. */
  filter?: string;
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
  /** Optional. A page token, received from a previous `ListServices` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListServices` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. Value of parent. */
  parent: string;
}

export const ListProjectsLocationsServicesRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/services" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsServicesRequest>;

export type ListProjectsLocationsServicesResponse = ListServicesResponse;
export const ListProjectsLocationsServicesResponse =
  /*@__PURE__*/ ListServicesResponse;

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
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsServicesRequest,
  output: ListProjectsLocationsServicesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsServicesRequest {
  /** Optional. The etag of the Service. If this is provided, it must match the server's etag. */
  etag?: string;
  /** Required. The name of the service to delete, in the format: ``` projects/{project}/locations/{location}/services/{service} ``` */
  name: string;
  /** Optional. If true and the Service is not found, the request will succeed but no action will be taken on the server. */
  allowMissing?: boolean;
  /** Optional. If set, validate the request and preview the Service, but do not actually delete it. */
  validateOnly?: boolean;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set to true, any child resources (i.e. Schema, SchemaRevisions, Connectors, and ConnectorRevisions) will also be deleted. Otherwise, the request will only work if the Service has no child resources. */
  force?: boolean;
}

export const DeleteProjectsLocationsServicesRequest =
  /*@__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    name: Schema.String.pipe(T.HttpPath("name")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsServicesRequest>;

export type DeleteProjectsLocationsServicesResponse = Operation;
export const DeleteProjectsLocationsServicesResponse = /*@__PURE__*/ Operation;

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
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsServicesRequest,
  output: DeleteProjectsLocationsServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExecuteGraphqlReadProjectsLocationsServicesRequest {
  /** Required. The relative resource name of Firebase SQL Connect service, in the format: ``` projects/{project}/locations/{location}/services/{service} ``` */
  name: string;
  /** Request body */
  body?: GraphqlRequest;
}

export const ExecuteGraphqlReadProjectsLocationsServicesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GraphqlRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+name}:executeGraphqlRead",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ExecuteGraphqlReadProjectsLocationsServicesRequest>;

export type ExecuteGraphqlReadProjectsLocationsServicesResponse =
  GraphqlResponse;
export const ExecuteGraphqlReadProjectsLocationsServicesResponse =
  /*@__PURE__*/ GraphqlResponse;

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
> = /*@__PURE__*/ API.make(() => ({
  input: ExecuteGraphqlReadProjectsLocationsServicesRequest,
  output: ExecuteGraphqlReadProjectsLocationsServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsServicesRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Identifier. The relative resource name of the Firebase SQL Connect service, in the format: ``` projects/{project}/locations/{location}/services/{service} ``` Note that the service ID is specific to Firebase SQL Connect and does not correspond to any of the instance IDs of the underlying data source connections. */
  name: string;
  /** Optional. If true and the Service is not found, a new Service will be created. In this case, `update_mask` is ignored. */
  allowMissing?: boolean;
  /** Optional. If set, validate the request and preview the Service, but do not actually update it. */
  validateOnly?: boolean;
  /** Optional. Field mask is used to specify the fields to be overwritten in the Service resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: Service;
}

export const PatchProjectsLocationsServicesRequest =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Service).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsServicesRequest>;

export type PatchProjectsLocationsServicesResponse = Operation;
export const PatchProjectsLocationsServicesResponse = /*@__PURE__*/ Operation;

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
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsServicesRequest,
  output: PatchProjectsLocationsServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsServicesRequest {
  /** Required. The name of the service to retrieve, in the format: ``` projects/{project}/locations/{location}/services/{service} ``` */
  name: string;
}

export const GetProjectsLocationsServicesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsServicesRequest>;

export type GetProjectsLocationsServicesResponse = Service;
export const GetProjectsLocationsServicesResponse = /*@__PURE__*/ Service;

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
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsServicesRequest,
  output: GetProjectsLocationsServicesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ExecuteGraphqlProjectsLocationsServicesRequest {
  /** Required. The relative resource name of Firebase SQL Connect service, in the format: ``` projects/{project}/locations/{location}/services/{service} ``` */
  name: string;
  /** Request body */
  body?: GraphqlRequest;
}

export const ExecuteGraphqlProjectsLocationsServicesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GraphqlRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+name}:executeGraphql",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ExecuteGraphqlProjectsLocationsServicesRequest>;

export type ExecuteGraphqlProjectsLocationsServicesResponse = GraphqlResponse;
export const ExecuteGraphqlProjectsLocationsServicesResponse =
  /*@__PURE__*/ GraphqlResponse;

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
> = /*@__PURE__*/ API.make(() => ({
  input: ExecuteGraphqlProjectsLocationsServicesRequest,
  output: ExecuteGraphqlProjectsLocationsServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsServicesSchemasRequest {
  /** Optional. The etag of the Schema. If this is provided, it must match the server's etag. */
  etag?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set to true, any child resources (i.e. SchemaRevisions) will also be deleted. */
  force?: boolean;
  /** Required. The name of the schema to delete, in the format: ``` projects/{project}/locations/{location}/services/{service}/schemas/{schema} ``` */
  name: string;
  /** Optional. If true and the Schema is not found, the request will succeed but no action will be taken on the server. */
  allowMissing?: boolean;
  /** Optional. If set, validate the request and preview the Schema, but do not actually delete it. */
  validateOnly?: boolean;
}

export const DeleteProjectsLocationsServicesSchemasRequest =
  /*@__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    name: Schema.String.pipe(T.HttpPath("name")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsServicesSchemasRequest>;

export type DeleteProjectsLocationsServicesSchemasResponse = Operation;
export const DeleteProjectsLocationsServicesSchemasResponse =
  /*@__PURE__*/ Operation;

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
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsServicesSchemasRequest,
  output: DeleteProjectsLocationsServicesSchemasResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsServicesSchemasRequest {
  /** Optional. If set, validate the request and preview the Schema, but do not actually update it. */
  validateOnly?: boolean;
  /** Required. The ID to use for the schema, which will become the final component of the schema's resource name. Currently, only `main` is supported and any other schema ID will result in an error. */
  schemaId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Value for parent. */
  parent: string;
  /** Request body */
  body?: Firebasedataconnect_Schema;
}

export const CreateProjectsLocationsServicesSchemasRequest =
  /*@__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    schemaId: Schema.optional(Schema.String).pipe(T.HttpQuery("schemaId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Firebasedataconnect_Schema).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta/{+parent}/schemas", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsServicesSchemasRequest>;

export type CreateProjectsLocationsServicesSchemasResponse = Operation;
export const CreateProjectsLocationsServicesSchemasResponse =
  /*@__PURE__*/ Operation;

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
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsServicesSchemasRequest,
  output: CreateProjectsLocationsServicesSchemasResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsServicesSchemasRequest {
  /** Required. Value of parent. */
  parent: string;
  /** Optional. A page token, received from a previous `ListSchemas` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSchemas` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Filtering results. */
  filter?: string;
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsServicesSchemasRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/schemas" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsServicesSchemasRequest>;

export type ListProjectsLocationsServicesSchemasResponse = ListSchemasResponse;
export const ListProjectsLocationsServicesSchemasResponse =
  /*@__PURE__*/ ListSchemasResponse;

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
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsServicesSchemasRequest,
  output: ListProjectsLocationsServicesSchemasResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsServicesSchemasRequest {
  /** Required. The name of the schema to retrieve, in the format: ``` projects/{project}/locations/{location}/services/{service}/schemas/{schema} ``` */
  name: string;
}

export const GetProjectsLocationsServicesSchemasRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsServicesSchemasRequest>;

export type GetProjectsLocationsServicesSchemasResponse =
  Firebasedataconnect_Schema;
export const GetProjectsLocationsServicesSchemasResponse =
  /*@__PURE__*/ Firebasedataconnect_Schema;

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
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsServicesSchemasRequest,
  output: GetProjectsLocationsServicesSchemasResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsServicesSchemasRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Identifier. The relative resource name of the schema, in the format: ``` projects/{project}/locations/{location}/services/{service}/schemas/{schema} ``` Right now, the only supported schema is "main". */
  name: string;
  /** Optional. If true and the Schema is not found, a new Schema will be created. In this case, `update_mask` is ignored. */
  allowMissing?: boolean;
  /** Optional. If set, validate the request and preview the Schema, but do not actually update it. */
  validateOnly?: boolean;
  /** Optional. Field mask is used to specify the fields to be overwritten in the Schema resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: Firebasedataconnect_Schema;
}

export const PatchProjectsLocationsServicesSchemasRequest =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Firebasedataconnect_Schema).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsServicesSchemasRequest>;

export type PatchProjectsLocationsServicesSchemasResponse = Operation;
export const PatchProjectsLocationsServicesSchemasResponse =
  /*@__PURE__*/ Operation;

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
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsServicesSchemasRequest,
  output: PatchProjectsLocationsServicesSchemasResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsServicesConnectorsRequest {
  /** Required. The name of the connector to retrieve, in the format: ``` projects/{project}/locations/{location}/services/{service}/connectors/{connector} ``` */
  name: string;
}

export const GetProjectsLocationsServicesConnectorsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsServicesConnectorsRequest>;

export type GetProjectsLocationsServicesConnectorsResponse = Connector;
export const GetProjectsLocationsServicesConnectorsResponse =
  /*@__PURE__*/ Connector;

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
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsServicesConnectorsRequest,
  output: GetProjectsLocationsServicesConnectorsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsServicesConnectorsRequest {
  /** Optional. Field mask is used to specify the fields to be overwritten in the Connector resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Identifier. The relative resource name of the connector, in the format: ``` projects/{project}/locations/{location}/services/{service}/connectors/{connector} ``` */
  name: string;
  /** Optional. If true and the Connector is not found, a new Connector will be created. In this case, `update_mask` is ignored. */
  allowMissing?: boolean;
  /** Optional. If set, validate the request and preview the Connector, but do not actually update it. */
  validateOnly?: boolean;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Connector;
}

export const PatchProjectsLocationsServicesConnectorsRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Connector).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsServicesConnectorsRequest>;

export type PatchProjectsLocationsServicesConnectorsResponse = Operation;
export const PatchProjectsLocationsServicesConnectorsResponse =
  /*@__PURE__*/ Operation;

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
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsServicesConnectorsRequest,
  output: PatchProjectsLocationsServicesConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsServicesConnectorsRequest {
  /** Optional. The etag of the Connector. If this is provided, it must match the server's etag. */
  etag?: string;
  /** Required. The name of the connector to delete, in the format: ``` projects/{project}/locations/{location}/services/{service}/connectors/{connector} ``` */
  name: string;
  /** Optional. If true and the Connector is not found, the request will succeed but no action will be taken on the server. */
  allowMissing?: boolean;
  /** Optional. If set, validate the request and preview the Connector, but do not actually delete it. */
  validateOnly?: boolean;
  /** Optional. If set to true, any child resources (i.e. ConnectorRevisions) will also be deleted. Otherwise, the request will only work if the Connector has no child resources. */
  force?: boolean;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsServicesConnectorsRequest =
  /*@__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    name: Schema.String.pipe(T.HttpPath("name")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsServicesConnectorsRequest>;

export type DeleteProjectsLocationsServicesConnectorsResponse = Operation;
export const DeleteProjectsLocationsServicesConnectorsResponse =
  /*@__PURE__*/ Operation;

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
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsServicesConnectorsRequest,
  output: DeleteProjectsLocationsServicesConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExecuteQueryProjectsLocationsServicesConnectorsRequest {
  /** Required. The resource name of the connector to find the predefined query, in the format: ``` projects/{project}/locations/{location}/services/{service}/connectors/{connector} ``` */
  name: string;
  /** Request body */
  body?: ExecuteQueryRequest;
}

export const ExecuteQueryProjectsLocationsServicesConnectorsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ExecuteQueryRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+name}:executeQuery",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ExecuteQueryProjectsLocationsServicesConnectorsRequest>;

export type ExecuteQueryProjectsLocationsServicesConnectorsResponse =
  ExecuteQueryResponse;
export const ExecuteQueryProjectsLocationsServicesConnectorsResponse =
  /*@__PURE__*/ ExecuteQueryResponse;

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
> = /*@__PURE__*/ API.make(() => ({
  input: ExecuteQueryProjectsLocationsServicesConnectorsRequest,
  output: ExecuteQueryProjectsLocationsServicesConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsServicesConnectorsRequest {
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Filtering results. */
  filter?: string;
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
  /** Optional. A page token, received from a previous `ListConnectors` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectors` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. Value of parent. */
  parent: string;
}

export const ListProjectsLocationsServicesConnectorsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/connectors" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsServicesConnectorsRequest>;

export type ListProjectsLocationsServicesConnectorsResponse =
  ListConnectorsResponse;
export const ListProjectsLocationsServicesConnectorsResponse =
  /*@__PURE__*/ ListConnectorsResponse;

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
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsServicesConnectorsRequest,
  output: ListProjectsLocationsServicesConnectorsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ExecuteMutationProjectsLocationsServicesConnectorsRequest {
  /** Required. The resource name of the connector to find the predefined mutation, in the format: ``` projects/{project}/locations/{location}/services/{service}/connectors/{connector} ``` */
  name: string;
  /** Request body */
  body?: ExecuteMutationRequest;
}

export const ExecuteMutationProjectsLocationsServicesConnectorsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ExecuteMutationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+name}:executeMutation",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ExecuteMutationProjectsLocationsServicesConnectorsRequest>;

export type ExecuteMutationProjectsLocationsServicesConnectorsResponse =
  ExecuteMutationResponse;
export const ExecuteMutationProjectsLocationsServicesConnectorsResponse =
  /*@__PURE__*/ ExecuteMutationResponse;

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
> = /*@__PURE__*/ API.make(() => ({
  input: ExecuteMutationProjectsLocationsServicesConnectorsRequest,
  output: ExecuteMutationProjectsLocationsServicesConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ImpersonateQueryProjectsLocationsServicesConnectorsRequest {
  /** Required. The resource name of the connector to find the predefined query/mutation, in the format: ``` projects/{project}/locations/{location}/services/{service}/connectors/{connector} ``` */
  name: string;
  /** Request body */
  body?: ImpersonateRequest;
}

export const ImpersonateQueryProjectsLocationsServicesConnectorsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ImpersonateRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+name}:impersonateQuery",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ImpersonateQueryProjectsLocationsServicesConnectorsRequest>;

export type ImpersonateQueryProjectsLocationsServicesConnectorsResponse =
  GraphqlResponse;
export const ImpersonateQueryProjectsLocationsServicesConnectorsResponse =
  /*@__PURE__*/ GraphqlResponse;

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
> = /*@__PURE__*/ API.make(() => ({
  input: ImpersonateQueryProjectsLocationsServicesConnectorsRequest,
  output: ImpersonateQueryProjectsLocationsServicesConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ImpersonateMutationProjectsLocationsServicesConnectorsRequest {
  /** Required. The resource name of the connector to find the predefined query/mutation, in the format: ``` projects/{project}/locations/{location}/services/{service}/connectors/{connector} ``` */
  name: string;
  /** Request body */
  body?: ImpersonateRequest;
}

export const ImpersonateMutationProjectsLocationsServicesConnectorsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ImpersonateRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+name}:impersonateMutation",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ImpersonateMutationProjectsLocationsServicesConnectorsRequest>;

export type ImpersonateMutationProjectsLocationsServicesConnectorsResponse =
  GraphqlResponse;
export const ImpersonateMutationProjectsLocationsServicesConnectorsResponse =
  /*@__PURE__*/ GraphqlResponse;

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
> = /*@__PURE__*/ API.make(() => ({
  input: ImpersonateMutationProjectsLocationsServicesConnectorsRequest,
  output: ImpersonateMutationProjectsLocationsServicesConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsServicesConnectorsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Value for parent. */
  parent: string;
  /** Optional. If set, validate the request and preview the Connector, but do not actually create it. */
  validateOnly?: boolean;
  /** Required. The ID to use for the connector, which will become the final component of the connector's resource name. */
  connectorId?: string;
  /** Request body */
  body?: Connector;
}

export const CreateProjectsLocationsServicesConnectorsRequest =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    connectorId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("connectorId"),
    ),
    body: Schema.optional(Connector).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}/connectors",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsServicesConnectorsRequest>;

export type CreateProjectsLocationsServicesConnectorsResponse = Operation;
export const CreateProjectsLocationsServicesConnectorsResponse =
  /*@__PURE__*/ Operation;

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
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsServicesConnectorsRequest,
  output: CreateProjectsLocationsServicesConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
