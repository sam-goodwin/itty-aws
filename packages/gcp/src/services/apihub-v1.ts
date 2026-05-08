// ==========================================================================
// API hub API (apihub v1)
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
  name: "apihub",
  version: "v1",
  rootUrl: "https://apihub.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleCloudApihubV1PathParam {
  /** Optional. Segment location in the path, 1-indexed */
  position?: number;
  /** Optional. Data type of path param */
  dataType?:
    | "DATA_TYPE_UNSPECIFIED"
    | "BOOL"
    | "INTEGER"
    | "FLOAT"
    | "STRING"
    | "UUID"
    | (string & {});
}

export const GoogleCloudApihubV1PathParam: Schema.Schema<GoogleCloudApihubV1PathParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    position: Schema.optional(Schema.Number),
    dataType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1PathParam" });

export interface GoogleCloudApihubV1Header {
  /** Data type of header */
  dataType?:
    | "DATA_TYPE_UNSPECIFIED"
    | "BOOL"
    | "INTEGER"
    | "FLOAT"
    | "STRING"
    | "UUID"
    | (string & {});
  /** The number of occurrences of this Header across transactions. */
  count?: string;
  /** Header name. */
  name?: string;
}

export const GoogleCloudApihubV1Header: Schema.Schema<GoogleCloudApihubV1Header> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataType: Schema.optional(Schema.String),
    count: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1Header" });

export interface GoogleCloudApihubV1HttpRequest {
  /** Optional. Unordered map from header name to header metadata */
  headers?: Record<string, GoogleCloudApihubV1Header>;
}

export const GoogleCloudApihubV1HttpRequest: Schema.Schema<GoogleCloudApihubV1HttpRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    headers: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudApihubV1Header),
    ),
  }).annotate({ identifier: "GoogleCloudApihubV1HttpRequest" });

export interface GoogleCloudApihubV1QueryParam {
  /** Optional. Data type of path param */
  dataType?:
    | "DATA_TYPE_UNSPECIFIED"
    | "BOOL"
    | "INTEGER"
    | "FLOAT"
    | "STRING"
    | "UUID"
    | (string & {});
  /** Optional. The number of occurrences of this query parameter across transactions. */
  count?: string;
  /** Required. Name of query param */
  name?: string;
}

export const GoogleCloudApihubV1QueryParam: Schema.Schema<GoogleCloudApihubV1QueryParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataType: Schema.optional(Schema.String),
    count: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1QueryParam" });

export interface GoogleCloudApihubV1Path {
  /** Optional. Complete path relative to server endpoint. Note: Even though this field is optional, it is required for CreateApiOperation API and we will fail the request if not provided. */
  path?: string;
  /** Optional. A short description for the path applicable to all operations. */
  description?: string;
}

export const GoogleCloudApihubV1Path: Schema.Schema<GoogleCloudApihubV1Path> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1Path" });

export interface GoogleCloudApihubV1HttpOperation {
  /** Optional. Operation method Note: Even though this field is optional, it is required for CreateApiOperation API and we will fail the request if not provided. */
  method?:
    | "METHOD_UNSPECIFIED"
    | "GET"
    | "PUT"
    | "POST"
    | "DELETE"
    | "OPTIONS"
    | "HEAD"
    | "PATCH"
    | "TRACE"
    | (string & {});
  /** Optional. The path details for the Operation. Note: Even though this field is optional, it is required for CreateApiOperation API and we will fail the request if not provided. */
  path?: GoogleCloudApihubV1Path;
}

export const GoogleCloudApihubV1HttpOperation: Schema.Schema<GoogleCloudApihubV1HttpOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    method: Schema.optional(Schema.String),
    path: Schema.optional(GoogleCloudApihubV1Path),
  }).annotate({ identifier: "GoogleCloudApihubV1HttpOperation" });

export interface GoogleCloudApihubV1HttpResponse {
  /** Optional. Unordered map from header name to header metadata */
  headers?: Record<string, GoogleCloudApihubV1Header>;
  /** Optional. Map of status code to observed count */
  responseCodes?: Record<string, string>;
}

export const GoogleCloudApihubV1HttpResponse: Schema.Schema<GoogleCloudApihubV1HttpResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    headers: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudApihubV1Header),
    ),
    responseCodes: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GoogleCloudApihubV1HttpResponse" });

export interface GoogleCloudApihubV1HttpOperationDetails {
  /** Optional. Path params of HttpOperation */
  pathParams?: ReadonlyArray<GoogleCloudApihubV1PathParam>;
  /** Optional. Request metadata. */
  request?: GoogleCloudApihubV1HttpRequest;
  /** Optional. Query params of HttpOperation */
  queryParams?: Record<string, GoogleCloudApihubV1QueryParam>;
  /** Required. An HTTP Operation. */
  httpOperation?: GoogleCloudApihubV1HttpOperation;
  /** Optional. Response metadata. */
  response?: GoogleCloudApihubV1HttpResponse;
}

export const GoogleCloudApihubV1HttpOperationDetails: Schema.Schema<GoogleCloudApihubV1HttpOperationDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pathParams: Schema.optional(Schema.Array(GoogleCloudApihubV1PathParam)),
    request: Schema.optional(GoogleCloudApihubV1HttpRequest),
    queryParams: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudApihubV1QueryParam),
    ),
    httpOperation: Schema.optional(GoogleCloudApihubV1HttpOperation),
    response: Schema.optional(GoogleCloudApihubV1HttpResponse),
  }).annotate({ identifier: "GoogleCloudApihubV1HttpOperationDetails" });

export interface GoogleCloudApihubV1GoogleServiceAccountConfig {
  /** Required. The service account to be used for authenticating request. The `iam.serviceAccounts.getAccessToken` permission should be granted on this service account to the impersonator service account. */
  serviceAccount?: string;
}

export const GoogleCloudApihubV1GoogleServiceAccountConfig: Schema.Schema<GoogleCloudApihubV1GoogleServiceAccountConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAccount: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1GoogleServiceAccountConfig" });

export interface GoogleCloudApihubV1AuthConfigTemplate {
  /** Required. The list of authentication types supported by the plugin. */
  supportedAuthTypes?: ReadonlyArray<
    | "AUTH_TYPE_UNSPECIFIED"
    | "NO_AUTH"
    | "GOOGLE_SERVICE_ACCOUNT"
    | "USER_PASSWORD"
    | "API_KEY"
    | "OAUTH2_CLIENT_CREDENTIALS"
    | (string & {})
  >;
  /** Optional. The service account of the plugin hosting service. This service account should be granted the required permissions on the Auth Config parameters provided while creating the plugin instances corresponding to this plugin. For example, if the plugin instance auth config requires a secret manager secret, the service account should be granted the secretmanager.versions.access permission on the corresponding secret, if the plugin instance auth config contains a service account, the service account should be granted the iam.serviceAccounts.getAccessToken permission on the corresponding service account. */
  serviceAccount?: GoogleCloudApihubV1GoogleServiceAccountConfig;
}

export const GoogleCloudApihubV1AuthConfigTemplate: Schema.Schema<GoogleCloudApihubV1AuthConfigTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    supportedAuthTypes: Schema.optional(Schema.Array(Schema.String)),
    serviceAccount: Schema.optional(
      GoogleCloudApihubV1GoogleServiceAccountConfig,
    ),
  }).annotate({ identifier: "GoogleCloudApihubV1AuthConfigTemplate" });

export interface GoogleCloudApihubV1ConfigValueOption {
  /** Required. Id of the option. */
  id?: string;
  /** Required. Display name of the option. */
  displayName?: string;
  /** Optional. Description of the option. */
  description?: string;
}

export const GoogleCloudApihubV1ConfigValueOption: Schema.Schema<GoogleCloudApihubV1ConfigValueOption> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1ConfigValueOption" });

export interface GoogleCloudApihubV1ConfigVariableTemplate {
  /** Optional. Multi select options. To be populated if `ValueType` is `MULTI_SELECT`. */
  multiSelectOptions?: ReadonlyArray<GoogleCloudApihubV1ConfigValueOption>;
  /** Optional. Description. */
  description?: string;
  /** Required. ID of the config variable. Must be unique within the configuration. */
  id?: string;
  /** Required. Type of the parameter: string, int, bool etc. */
  valueType?:
    | "VALUE_TYPE_UNSPECIFIED"
    | "STRING"
    | "INT"
    | "BOOL"
    | "SECRET"
    | "ENUM"
    | "MULTI_SELECT"
    | "MULTI_STRING"
    | "MULTI_INT"
    | (string & {});
  /** Optional. Regular expression in RE2 syntax used for validating the `value` of a `ConfigVariable`. */
  validationRegex?: string;
  /** Optional. Flag represents that this `ConfigVariable` must be provided for a PluginInstance. */
  required?: boolean;
  /** Optional. Enum options. To be populated if `ValueType` is `ENUM`. */
  enumOptions?: ReadonlyArray<GoogleCloudApihubV1ConfigValueOption>;
}

export const GoogleCloudApihubV1ConfigVariableTemplate: Schema.Schema<GoogleCloudApihubV1ConfigVariableTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    multiSelectOptions: Schema.optional(
      Schema.Array(GoogleCloudApihubV1ConfigValueOption),
    ),
    description: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    valueType: Schema.optional(Schema.String),
    validationRegex: Schema.optional(Schema.String),
    required: Schema.optional(Schema.Boolean),
    enumOptions: Schema.optional(
      Schema.Array(GoogleCloudApihubV1ConfigValueOption),
    ),
  }).annotate({ identifier: "GoogleCloudApihubV1ConfigVariableTemplate" });

export interface GoogleCloudApihubV1ConfigTemplate {
  /** Optional. The authentication template for the plugin. */
  authConfigTemplate?: GoogleCloudApihubV1AuthConfigTemplate;
  /** Optional. The list of additional configuration variables for the plugin's configuration. */
  additionalConfigTemplate?: ReadonlyArray<GoogleCloudApihubV1ConfigVariableTemplate>;
}

export const GoogleCloudApihubV1ConfigTemplate: Schema.Schema<GoogleCloudApihubV1ConfigTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authConfigTemplate: Schema.optional(GoogleCloudApihubV1AuthConfigTemplate),
    additionalConfigTemplate: Schema.optional(
      Schema.Array(GoogleCloudApihubV1ConfigVariableTemplate),
    ),
  }).annotate({ identifier: "GoogleCloudApihubV1ConfigTemplate" });

export interface GoogleCloudApihubV1PluginInstanceActionSource {
  /** Output only. The resource name of the source plugin instance. Format is `projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}` */
  pluginInstance?: string;
  /** Output only. The id of the plugin instance action. */
  actionId?: string;
}

export const GoogleCloudApihubV1PluginInstanceActionSource: Schema.Schema<GoogleCloudApihubV1PluginInstanceActionSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pluginInstance: Schema.optional(Schema.String),
    actionId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1PluginInstanceActionSource" });

export interface GoogleCloudApihubV1SourceMetadata {
  /** Output only. The source of the resource is a plugin instance action. */
  pluginInstanceActionSource?: GoogleCloudApihubV1PluginInstanceActionSource;
  /** Output only. The type of the source. */
  sourceType?: "SOURCE_TYPE_UNSPECIFIED" | "PLUGIN" | (string & {});
  /** Output only. The time at which the resource was last updated at the source. */
  originalResourceUpdateTime?: string;
  /** Output only. The time at which the resource was created at the source. */
  originalResourceCreateTime?: string;
  /** Output only. The unique identifier of the resource at the source. */
  originalResourceId?: string;
}

export const GoogleCloudApihubV1SourceMetadata: Schema.Schema<GoogleCloudApihubV1SourceMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pluginInstanceActionSource: Schema.optional(
      GoogleCloudApihubV1PluginInstanceActionSource,
    ),
    sourceType: Schema.optional(Schema.String),
    originalResourceUpdateTime: Schema.optional(Schema.String),
    originalResourceCreateTime: Schema.optional(Schema.String),
    originalResourceId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1SourceMetadata" });

export interface GoogleCloudApihubV1DiscoveredApiObservation {
  /** Optional. The location of the observation source. */
  sourceLocations?: ReadonlyArray<string>;
  /** Output only. Update time stamp of the observation in API Hub. */
  updateTime?: string;
  /** Optional. For an observation pushed from a Google Cloud resource, this would be the Google Cloud project id. */
  origin?: string;
  /** Output only. Create time stamp of the observation in API Hub. */
  createTime?: string;
  /** Optional. Style of ApiObservation */
  style?: "STYLE_UNSPECIFIED" | "REST" | "GRPC" | "GRAPHQL" | (string & {});
  /** Optional. The number of observed API Operations. */
  apiOperationCount?: string;
  /** Output only. The metadata of the source from which the observation was collected. */
  sourceMetadata?: GoogleCloudApihubV1SourceMetadata;
  /** Identifier. The name of the discovered API Observation. Format: `projects/{project}/locations/{location}/discoveredApiObservations/{discovered_api_observation}` */
  name?: string;
  /** Output only. The number of known API Operations. */
  knownOperationsCount?: string;
  /** Optional. The IP address (IPv4 or IPv6) of the origin server that the request was sent to. This field can include port information. Examples: `"192.168.1.1"`, `"10.0.0.1:80"`, `"FE80::0202:B3FF:FE1E:8329"`. */
  serverIps?: ReadonlyArray<string>;
  /** Optional. Last event detected time stamp */
  lastEventDetectedTime?: string;
  /** Output only. The number of unknown API Operations. */
  unknownOperationsCount?: string;
  /** Optional. The hostname of requests processed for this Observation. */
  hostname?: string;
  /** Optional. The type of the source from which the observation was collected. */
  sourceTypes?: ReadonlyArray<
    "SOURCE_TYPE_UNSPECIFIED" | "GCP_XLB" | "GCP_ILB" | (string & {})
  >;
}

export const GoogleCloudApihubV1DiscoveredApiObservation: Schema.Schema<GoogleCloudApihubV1DiscoveredApiObservation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceLocations: Schema.optional(Schema.Array(Schema.String)),
    updateTime: Schema.optional(Schema.String),
    origin: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    style: Schema.optional(Schema.String),
    apiOperationCount: Schema.optional(Schema.String),
    sourceMetadata: Schema.optional(GoogleCloudApihubV1SourceMetadata),
    name: Schema.optional(Schema.String),
    knownOperationsCount: Schema.optional(Schema.String),
    serverIps: Schema.optional(Schema.Array(Schema.String)),
    lastEventDetectedTime: Schema.optional(Schema.String),
    unknownOperationsCount: Schema.optional(Schema.String),
    hostname: Schema.optional(Schema.String),
    sourceTypes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudApihubV1DiscoveredApiObservation" });

export interface GoogleCloudApihubV1ListDiscoveredApiObservationsResponse {
  /** The DiscoveredApiObservation from the specified project and location. */
  discoveredApiObservations?: ReadonlyArray<GoogleCloudApihubV1DiscoveredApiObservation>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleCloudApihubV1ListDiscoveredApiObservationsResponse: Schema.Schema<GoogleCloudApihubV1ListDiscoveredApiObservationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    discoveredApiObservations: Schema.optional(
      Schema.Array(GoogleCloudApihubV1DiscoveredApiObservation),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudApihubV1ListDiscoveredApiObservationsResponse",
  });

export interface GoogleCloudApihubV1LastExecution {
  /** Output only. The last execution start time of the plugin instance. */
  startTime?: string;
  /** Output only. The result metadata of the last execution of the plugin instance. This will be a string representation of a JSON object and will be available on successful execution. */
  resultMetadata?: string;
  /** Output only. Error message describing the failure, if any, during the last execution. */
  errorMessage?: string;
  /** Output only. The result of the last execution of the plugin instance. */
  result?: "RESULT_UNSPECIFIED" | "SUCCEEDED" | "FAILED" | (string & {});
  /** Output only. The last execution end time of the plugin instance. */
  endTime?: string;
}

export const GoogleCloudApihubV1LastExecution: Schema.Schema<GoogleCloudApihubV1LastExecution> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    resultMetadata: Schema.optional(Schema.String),
    errorMessage: Schema.optional(Schema.String),
    result: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1LastExecution" });

export interface GoogleCloudApihubV1ExecutionStatus {
  /** Output only. The current state of the execution. */
  currentExecutionState?:
    | "CURRENT_EXECUTION_STATE_UNSPECIFIED"
    | "RUNNING"
    | "NOT_RUNNING"
    | (string & {});
  /** Output only. The last execution of the plugin instance. */
  lastExecution?: GoogleCloudApihubV1LastExecution;
}

export const GoogleCloudApihubV1ExecutionStatus: Schema.Schema<GoogleCloudApihubV1ExecutionStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currentExecutionState: Schema.optional(Schema.String),
    lastExecution: Schema.optional(GoogleCloudApihubV1LastExecution),
  }).annotate({ identifier: "GoogleCloudApihubV1ExecutionStatus" });

export interface GoogleCloudApihubV1ResourceConfig {
  /** Output only. The pubsub topic to publish the data to. Format is projects/{project}/topics/{topic} */
  pubsubTopic?: string;
  /** Output only. The type of the action. */
  actionType?:
    | "ACTION_TYPE_UNSPECIFIED"
    | "SYNC_METADATA"
    | "SYNC_RUNTIME_DATA"
    | (string & {});
}

export const GoogleCloudApihubV1ResourceConfig: Schema.Schema<GoogleCloudApihubV1ResourceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pubsubTopic: Schema.optional(Schema.String),
    actionType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1ResourceConfig" });

export interface GoogleCloudApihubV1CustomCuration {
  /** Required. The unique name of the curation resource. This will be the name of the curation resource in the format: `projects/{project}/locations/{location}/curations/{curation}` */
  curation?: string;
}

export const GoogleCloudApihubV1CustomCuration: Schema.Schema<GoogleCloudApihubV1CustomCuration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    curation: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1CustomCuration" });

export interface GoogleCloudApihubV1CurationConfig {
  /** Required. The curation type for this plugin instance. */
  curationType?:
    | "CURATION_TYPE_UNSPECIFIED"
    | "DEFAULT_CURATION_FOR_API_METADATA"
    | "CUSTOM_CURATION_FOR_API_METADATA"
    | (string & {});
  /** Optional. Custom curation information for this plugin instance. */
  customCuration?: GoogleCloudApihubV1CustomCuration;
}

export const GoogleCloudApihubV1CurationConfig: Schema.Schema<GoogleCloudApihubV1CurationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    curationType: Schema.optional(Schema.String),
    customCuration: Schema.optional(GoogleCloudApihubV1CustomCuration),
  }).annotate({ identifier: "GoogleCloudApihubV1CurationConfig" });

export interface GoogleCloudApihubV1PluginInstanceAction {
  /** Optional. The execution information for the plugin instance action done corresponding to an API hub instance. */
  hubInstanceAction?: GoogleCloudApihubV1ExecutionStatus;
  /** Output only. The current state of the plugin action in the plugin instance. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ENABLED"
    | "DISABLED"
    | "ENABLING"
    | "DISABLING"
    | "ERROR"
    | (string & {});
  /** Optional. The service account used to publish data. Note, the service account will only be accepted for non-Google Cloud plugins like OPDK. */
  serviceAccount?: string;
  /** Required. This should map to one of the action id specified in actions_config in the plugin. */
  actionId?: string;
  /** Output only. The configuration of resources created for a given plugin instance action. Note these will be returned only in case of non-Google Cloud plugins like OPDK. */
  resourceConfig?: GoogleCloudApihubV1ResourceConfig;
  /** Optional. The schedule for this plugin instance action. This can only be set if the plugin supports API_HUB_SCHEDULE_TRIGGER mode for this action. */
  scheduleCronExpression?: string;
  /** Optional. This configuration should be provided if the plugin action is publishing data to API hub curate layer. */
  curationConfig?: GoogleCloudApihubV1CurationConfig;
  /** Optional. The time zone for the schedule cron expression. If not provided, UTC will be used. */
  scheduleTimeZone?: string;
}

export const GoogleCloudApihubV1PluginInstanceAction: Schema.Schema<GoogleCloudApihubV1PluginInstanceAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hubInstanceAction: Schema.optional(GoogleCloudApihubV1ExecutionStatus),
    state: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
    actionId: Schema.optional(Schema.String),
    resourceConfig: Schema.optional(GoogleCloudApihubV1ResourceConfig),
    scheduleCronExpression: Schema.optional(Schema.String),
    curationConfig: Schema.optional(GoogleCloudApihubV1CurationConfig),
    scheduleTimeZone: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1PluginInstanceAction" });

export interface GoogleCloudApihubV1ActionExecutionDetail {
  /** Required. The action id of the plugin to execute. */
  actionId?: string;
}

export const GoogleCloudApihubV1ActionExecutionDetail: Schema.Schema<GoogleCloudApihubV1ActionExecutionDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    actionId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1ActionExecutionDetail" });

export interface GoogleCloudApihubV1ExecutePluginInstanceActionRequest {
  /** Required. The execution details for the action to execute. */
  actionExecutionDetail?: GoogleCloudApihubV1ActionExecutionDetail;
}

export const GoogleCloudApihubV1ExecutePluginInstanceActionRequest: Schema.Schema<GoogleCloudApihubV1ExecutePluginInstanceActionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    actionExecutionDetail: Schema.optional(
      GoogleCloudApihubV1ActionExecutionDetail,
    ),
  }).annotate({
    identifier: "GoogleCloudApihubV1ExecutePluginInstanceActionRequest",
  });

export interface GoogleCloudCommonOperationMetadata {
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have google.longrunning.Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
  cancelRequested?: boolean;
  /** Output only. Human-readable status of the operation, if any. */
  statusDetail?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
}

export const GoogleCloudCommonOperationMetadata: Schema.Schema<GoogleCloudCommonOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    cancelRequested: Schema.optional(Schema.Boolean),
    statusDetail: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudCommonOperationMetadata" });

export interface GoogleCloudApihubV1SpecContents {
  /** Required. The contents of the spec. */
  contents?: string;
  /** Required. The mime type of the content for example application/json, application/yaml, application/wsdl etc. */
  mimeType?: string;
}

export const GoogleCloudApihubV1SpecContents: Schema.Schema<GoogleCloudApihubV1SpecContents> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contents: Schema.optional(Schema.String),
    mimeType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1SpecContents" });

export interface GoogleCloudApihubV1OperationSchema {
  /** The JSON schema. Only valid JSON is accepted but semantic validation of schema is not supported right now. */
  jsonSchema?: Record<string, unknown>;
}

export const GoogleCloudApihubV1OperationSchema: Schema.Schema<GoogleCloudApihubV1OperationSchema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jsonSchema: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudApihubV1OperationSchema" });

export interface GoogleCloudApihubV1EnablePluginInstanceActionRequest {
  /** Required. The action id to enable. */
  actionId?: string;
}

export const GoogleCloudApihubV1EnablePluginInstanceActionRequest: Schema.Schema<GoogleCloudApihubV1EnablePluginInstanceActionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    actionId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudApihubV1EnablePluginInstanceActionRequest",
  });

export interface GoogleCloudApihubV1PluginActionConfig {
  /** Required. The display name of the action. */
  displayName?: string;
  /** Required. The description of the operation performed by the action. */
  description?: string;
  /** Required. The trigger mode supported by the action. */
  triggerMode?:
    | "TRIGGER_MODE_UNSPECIFIED"
    | "API_HUB_ON_DEMAND_TRIGGER"
    | "API_HUB_SCHEDULE_TRIGGER"
    | "NON_API_HUB_MANAGED"
    | (string & {});
  /** Required. The id of the action. */
  id?: string;
}

export const GoogleCloudApihubV1PluginActionConfig: Schema.Schema<GoogleCloudApihubV1PluginActionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    triggerMode: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1PluginActionConfig" });

export interface GoogleCloudApihubV1HostingService {
  /** Optional. The URI of the service implemented by the plugin developer, used to invoke the plugin's functionality. This information is only required for user defined plugins. */
  serviceUri?: string;
}

export const GoogleCloudApihubV1HostingService: Schema.Schema<GoogleCloudApihubV1HostingService> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1HostingService" });

export interface GoogleCloudApihubV1StringAttributeValues {
  /** Required. The attribute values in case attribute data type is string or JSON. */
  values?: ReadonlyArray<string>;
}

export const GoogleCloudApihubV1StringAttributeValues: Schema.Schema<GoogleCloudApihubV1StringAttributeValues> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudApihubV1StringAttributeValues" });

export interface GoogleCloudApihubV1AllowedValue {
  /** Required. The ID of the allowed value. * If provided, the same will be used. The service will throw an error if the specified id is already used by another allowed value in the same attribute resource. * If not provided, a system generated id derived from the display name will be used. In this case, the service will handle conflict resolution by adding a system generated suffix in case of duplicates. This value should be 4-63 characters, and valid characters are /a-z-/. */
  id?: string;
  /** Required. The display name of the allowed value. */
  displayName?: string;
  /** Optional. The detailed description of the allowed value. */
  description?: string;
  /** Optional. When set to true, the allowed value cannot be updated or deleted by the user. It can only be true for System defined attributes. */
  immutable?: boolean;
}

export const GoogleCloudApihubV1AllowedValue: Schema.Schema<GoogleCloudApihubV1AllowedValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    immutable: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudApihubV1AllowedValue" });

export interface GoogleCloudApihubV1EnumAttributeValues {
  /** Required. The attribute values in case attribute data type is enum. */
  values?: ReadonlyArray<GoogleCloudApihubV1AllowedValue>;
}

export const GoogleCloudApihubV1EnumAttributeValues: Schema.Schema<GoogleCloudApihubV1EnumAttributeValues> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(GoogleCloudApihubV1AllowedValue)),
  }).annotate({ identifier: "GoogleCloudApihubV1EnumAttributeValues" });

export interface GoogleCloudApihubV1AttributeValues {
  /** The attribute values associated with a resource in case attribute data type is URL, URI or IP, like gs://bucket-name/object-name. */
  uriValues?: GoogleCloudApihubV1StringAttributeValues;
  /** The attribute values associated with a resource in case attribute data type is string. */
  stringValues?: GoogleCloudApihubV1StringAttributeValues;
  /** The attribute values associated with a resource in case attribute data type is enum. */
  enumValues?: GoogleCloudApihubV1EnumAttributeValues;
  /** Output only. The name of the attribute. Format: projects/{project}/locations/{location}/attributes/{attribute} */
  attribute?: string;
  /** The attribute values associated with a resource in case attribute data type is JSON. */
  jsonValues?: GoogleCloudApihubV1StringAttributeValues;
}

export const GoogleCloudApihubV1AttributeValues: Schema.Schema<GoogleCloudApihubV1AttributeValues> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uriValues: Schema.optional(GoogleCloudApihubV1StringAttributeValues),
    stringValues: Schema.optional(GoogleCloudApihubV1StringAttributeValues),
    enumValues: Schema.optional(GoogleCloudApihubV1EnumAttributeValues),
    attribute: Schema.optional(Schema.String),
    jsonValues: Schema.optional(GoogleCloudApihubV1StringAttributeValues),
  }).annotate({ identifier: "GoogleCloudApihubV1AttributeValues" });

export interface GoogleCloudApihubV1Documentation {
  /** Optional. The uri of the externally hosted documentation. */
  externalUri?: string;
}

export const GoogleCloudApihubV1Documentation: Schema.Schema<GoogleCloudApihubV1Documentation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    externalUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1Documentation" });

export interface GoogleCloudApihubV1Plugin {
  /** Optional. The configuration template for the plugin. */
  configTemplate?: GoogleCloudApihubV1ConfigTemplate;
  /** Output only. Represents the state of the plugin. Note this field will not be set for plugins developed via plugin framework as the state will be managed at plugin instance level. */
  state?: "STATE_UNSPECIFIED" | "ENABLED" | "DISABLED" | (string & {});
  /** Optional. The category of the plugin, identifying its primary category or purpose. This field is required for all plugins. */
  pluginCategory?:
    | "PLUGIN_CATEGORY_UNSPECIFIED"
    | "API_GATEWAY"
    | "API_PRODUCER"
    | (string & {});
  /** Optional. The type of the gateway. */
  gatewayType?:
    | "GATEWAY_TYPE_UNSPECIFIED"
    | "APIGEE_X_AND_HYBRID"
    | "APIGEE_EDGE_PUBLIC_CLOUD"
    | "APIGEE_EDGE_PRIVATE_CLOUD"
    | "CLOUD_API_GATEWAY"
    | "CLOUD_ENDPOINTS"
    | "API_DISCOVERY"
    | "OTHERS"
    | (string & {});
  /** Output only. Timestamp indicating when the plugin was created. */
  createTime?: string;
  /** Output only. The type of the plugin, indicating whether it is 'SYSTEM_OWNED' or 'USER_OWNED'. */
  ownershipType?:
    | "OWNERSHIP_TYPE_UNSPECIFIED"
    | "SYSTEM_OWNED"
    | "USER_OWNED"
    | (string & {});
  /** Optional. The configuration of actions supported by the plugin. **REQUIRED**: This field must be provided when creating or updating a Plugin. The server will reject requests if this field is missing. */
  actionsConfig?: ReadonlyArray<GoogleCloudApihubV1PluginActionConfig>;
  /** Output only. Timestamp indicating when the plugin was last updated. */
  updateTime?: string;
  /** Optional. This field is optional. It is used to notify the plugin hosting service for any lifecycle changes of the plugin instance and trigger execution of plugin instance actions in case of API hub managed actions. This field should be provided if the plugin instance lifecycle of the developed plugin needs to be managed from API hub. Also, in this case the plugin hosting service interface needs to be implemented. This field should not be provided if the plugin wants to manage plugin instance lifecycle events outside of hub interface and use plugin framework for only registering of plugin and plugin instances to capture the source of data into hub. Note, in this case the plugin hosting service interface is not required to be implemented. Also, the plugin instance lifecycle actions will be disabled from API hub's UI. */
  hostingService?: GoogleCloudApihubV1HostingService;
  /** Optional. The type of the API. This maps to the following system defined attribute: `projects/{project}/locations/{location}/attributes/system-plugin-type` attribute. The number of allowed values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should be from the list of allowed values defined for the attribute. Note this field is not required for plugins developed via plugin framework. */
  type?: GoogleCloudApihubV1AttributeValues;
  /** Required. The display name of the plugin. Max length is 50 characters (Unicode code points). */
  displayName?: string;
  /** Optional. The plugin description. Max length is 2000 characters (Unicode code points). */
  description?: string;
  /** Identifier. The name of the plugin. Format: `projects/{project}/locations/{location}/plugins/{plugin}` */
  name?: string;
  /** Optional. The documentation of the plugin, that explains how to set up and use the plugin. */
  documentation?: GoogleCloudApihubV1Documentation;
}

export const GoogleCloudApihubV1Plugin: Schema.Schema<GoogleCloudApihubV1Plugin> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configTemplate: Schema.optional(GoogleCloudApihubV1ConfigTemplate),
    state: Schema.optional(Schema.String),
    pluginCategory: Schema.optional(Schema.String),
    gatewayType: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    ownershipType: Schema.optional(Schema.String),
    actionsConfig: Schema.optional(
      Schema.Array(GoogleCloudApihubV1PluginActionConfig),
    ),
    updateTime: Schema.optional(Schema.String),
    hostingService: Schema.optional(GoogleCloudApihubV1HostingService),
    type: Schema.optional(GoogleCloudApihubV1AttributeValues),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    documentation: Schema.optional(GoogleCloudApihubV1Documentation),
  }).annotate({ identifier: "GoogleCloudApihubV1Plugin" });

export interface GoogleCloudApihubV1ListPluginsResponse {
  /** The plugins from the specified parent resource. */
  plugins?: ReadonlyArray<GoogleCloudApihubV1Plugin>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleCloudApihubV1ListPluginsResponse: Schema.Schema<GoogleCloudApihubV1ListPluginsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    plugins: Schema.optional(Schema.Array(GoogleCloudApihubV1Plugin)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1ListPluginsResponse" });

export interface GoogleCloudApihubV1ApplicationIntegrationEndpointDetails {
  /** Required. The endpoint URI should be a valid REST URI for triggering an Application Integration. Format: `https://integrations.googleapis.com/v1/{name=projects/* /locations/* /integrations/*}:execute` or `https://{location}-integrations.googleapis.com/v1/{name=projects/* /locations/* /integrations/*}:execute` */
  uri?: string;
  /** Required. The API trigger ID of the Application Integration workflow. */
  triggerId?: string;
}

export const GoogleCloudApihubV1ApplicationIntegrationEndpointDetails: Schema.Schema<GoogleCloudApihubV1ApplicationIntegrationEndpointDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    triggerId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudApihubV1ApplicationIntegrationEndpointDetails",
  });

export interface GoogleCloudApihubV1Endpoint {
  /** Required. The details of the Application Integration endpoint to be triggered for curation. */
  applicationIntegrationEndpointDetails?: GoogleCloudApihubV1ApplicationIntegrationEndpointDetails;
}

export const GoogleCloudApihubV1Endpoint: Schema.Schema<GoogleCloudApihubV1Endpoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationIntegrationEndpointDetails: Schema.optional(
      GoogleCloudApihubV1ApplicationIntegrationEndpointDetails,
    ),
  }).annotate({ identifier: "GoogleCloudApihubV1Endpoint" });

export interface GoogleCloudApihubV1PluginInstanceActionID {
  /** Output only. Plugin instance that is using the curation. Format is `projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}` */
  pluginInstance?: string;
  /** Output only. The action ID that is using the curation. This should map to one of the action IDs specified in action configs in the plugin. */
  actionId?: string;
}

export const GoogleCloudApihubV1PluginInstanceActionID: Schema.Schema<GoogleCloudApihubV1PluginInstanceActionID> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pluginInstance: Schema.optional(Schema.String),
    actionId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1PluginInstanceActionID" });

export interface GoogleCloudApihubV1Curation {
  /** Output only. Error message describing the failure, if any, during the last execution of the curation. */
  lastExecutionErrorMessage?: string;
  /** Output only. The time at which the curation was last updated. */
  updateTime?: string;
  /** Identifier. The name of the curation. Format: `projects/{project}/locations/{location}/curations/{curation}` */
  name?: string;
  /** Output only. The error code of the last execution of the curation. The error code is populated only when the last execution state is failed. */
  lastExecutionErrorCode?:
    | "ERROR_CODE_UNSPECIFIED"
    | "INTERNAL_ERROR"
    | "UNAUTHORIZED"
    | (string & {});
  /** Required. The display name of the curation. */
  displayName?: string;
  /** Optional. The description of the curation. */
  description?: string;
  /** Required. The endpoint to be triggered for curation. */
  endpoint?: GoogleCloudApihubV1Endpoint;
  /** Output only. The time at which the curation was created. */
  createTime?: string;
  /** Output only. The plugin instances and associated actions that are using the curation. Note: A particular curation could be used by multiple plugin instances or multiple actions in a plugin instance. */
  pluginInstanceActions?: ReadonlyArray<GoogleCloudApihubV1PluginInstanceActionID>;
  /** Output only. The last execution state of the curation. */
  lastExecutionState?:
    | "LAST_EXECUTION_STATE_UNSPECIFIED"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
}

export const GoogleCloudApihubV1Curation: Schema.Schema<GoogleCloudApihubV1Curation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastExecutionErrorMessage: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    lastExecutionErrorCode: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    endpoint: Schema.optional(GoogleCloudApihubV1Endpoint),
    createTime: Schema.optional(Schema.String),
    pluginInstanceActions: Schema.optional(
      Schema.Array(GoogleCloudApihubV1PluginInstanceActionID),
    ),
    lastExecutionState: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1Curation" });

export interface GoogleCloudApihubV1ListCurationsResponse {
  /** The curation resources present in the API hub. */
  curations?: ReadonlyArray<GoogleCloudApihubV1Curation>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleCloudApihubV1ListCurationsResponse: Schema.Schema<GoogleCloudApihubV1ListCurationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    curations: Schema.optional(Schema.Array(GoogleCloudApihubV1Curation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1ListCurationsResponse" });

export interface GoogleCloudApihubV1Owner {
  /** Optional. The name of the owner. */
  displayName?: string;
  /** Required. The email of the owner. */
  email?: string;
}

export const GoogleCloudApihubV1Owner: Schema.Schema<GoogleCloudApihubV1Owner> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1Owner" });

export interface GoogleCloudApihubV1OpenApiSpecDetails {
  /** Output only. Owner details for the spec. This maps to `info.contact` in OpenAPI spec. */
  owner?: GoogleCloudApihubV1Owner;
  /** Output only. The version in the spec. This maps to `info.version` in OpenAPI spec. */
  version?: string;
  /** Output only. The format of the spec. */
  format?:
    | "FORMAT_UNSPECIFIED"
    | "OPEN_API_SPEC_2_0"
    | "OPEN_API_SPEC_3_0"
    | "OPEN_API_SPEC_3_1"
    | (string & {});
}

export const GoogleCloudApihubV1OpenApiSpecDetails: Schema.Schema<GoogleCloudApihubV1OpenApiSpecDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    owner: Schema.optional(GoogleCloudApihubV1Owner),
    version: Schema.optional(Schema.String),
    format: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1OpenApiSpecDetails" });

export interface GoogleCloudApihubV1SpecDetails {
  /** Output only. Additional details apart from `OperationDetails` parsed from an OpenAPI spec. The OperationDetails parsed from the spec can be obtained by using ListAPIOperations method. */
  openApiSpecDetails?: GoogleCloudApihubV1OpenApiSpecDetails;
  /** Output only. The description of the spec. */
  description?: string;
}

export const GoogleCloudApihubV1SpecDetails: Schema.Schema<GoogleCloudApihubV1SpecDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    openApiSpecDetails: Schema.optional(GoogleCloudApihubV1OpenApiSpecDetails),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1SpecDetails" });

export interface GoogleCloudApihubV1Point {
  /** Required. Character position within the line (zero-indexed). */
  character?: number;
  /** Required. Line number (zero-indexed). */
  line?: number;
}

export const GoogleCloudApihubV1Point: Schema.Schema<GoogleCloudApihubV1Point> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    character: Schema.optional(Schema.Number),
    line: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudApihubV1Point" });

export interface GoogleCloudApihubV1Range {
  /** Required. Start of the issue. */
  start?: GoogleCloudApihubV1Point;
  /** Required. End of the issue. */
  end?: GoogleCloudApihubV1Point;
}

export const GoogleCloudApihubV1Range: Schema.Schema<GoogleCloudApihubV1Range> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    start: Schema.optional(GoogleCloudApihubV1Point),
    end: Schema.optional(GoogleCloudApihubV1Point),
  }).annotate({ identifier: "GoogleCloudApihubV1Range" });

export interface GoogleCloudApihubV1Issue {
  /** Required. Rule code unique to each rule defined in linter. */
  code?: string;
  /** Required. Severity level of the rule violation. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "SEVERITY_ERROR"
    | "SEVERITY_WARNING"
    | "SEVERITY_INFO"
    | "SEVERITY_HINT"
    | (string & {});
  /** Required. An array of strings indicating the location in the analyzed document where the rule was triggered. */
  path?: ReadonlyArray<string>;
  /** Required. Human-readable message describing the issue found by the linter. */
  message?: string;
  /** Required. Object describing where in the file the issue was found. */
  range?: GoogleCloudApihubV1Range;
}

export const GoogleCloudApihubV1Issue: Schema.Schema<GoogleCloudApihubV1Issue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    path: Schema.optional(Schema.Array(Schema.String)),
    message: Schema.optional(Schema.String),
    range: Schema.optional(GoogleCloudApihubV1Range),
  }).annotate({ identifier: "GoogleCloudApihubV1Issue" });

export interface GoogleCloudApihubV1SummaryEntry {
  /** Required. Count of issues with the given severity. */
  count?: number;
  /** Required. Severity of the issue. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "SEVERITY_ERROR"
    | "SEVERITY_WARNING"
    | "SEVERITY_INFO"
    | "SEVERITY_HINT"
    | (string & {});
}

export const GoogleCloudApihubV1SummaryEntry: Schema.Schema<GoogleCloudApihubV1SummaryEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    severity: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1SummaryEntry" });

export interface GoogleCloudApihubV1LintResponse {
  /** Optional. Array of issues found in the analyzed document. */
  issues?: ReadonlyArray<GoogleCloudApihubV1Issue>;
  /** Optional. Summary of all issue types and counts for each severity level. */
  summary?: ReadonlyArray<GoogleCloudApihubV1SummaryEntry>;
  /** Required. Lint state represents success or failure for linting. */
  state?:
    | "LINT_STATE_UNSPECIFIED"
    | "LINT_STATE_SUCCESS"
    | "LINT_STATE_ERROR"
    | (string & {});
  /** Required. Name of the linter used. */
  linter?: "LINTER_UNSPECIFIED" | "SPECTRAL" | "OTHER" | (string & {});
  /** Required. Name of the linting application. */
  source?: string;
  /** Required. Timestamp when the linting response was generated. */
  createTime?: string;
}

export const GoogleCloudApihubV1LintResponse: Schema.Schema<GoogleCloudApihubV1LintResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    issues: Schema.optional(Schema.Array(GoogleCloudApihubV1Issue)),
    summary: Schema.optional(Schema.Array(GoogleCloudApihubV1SummaryEntry)),
    state: Schema.optional(Schema.String),
    linter: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1LintResponse" });

export interface GoogleCloudApihubV1AdditionalSpecContent {
  /** Output only. The time at which the spec content was created. */
  createTime?: string;
  /** Output only. The time at which the spec content was last updated. */
  updateTime?: string;
  /** Optional. The labels of the spec content e.g. specboost addon version. */
  labels?: Record<string, string>;
  /** Optional. The additional spec contents. */
  specContents?: GoogleCloudApihubV1SpecContents;
  /** Required. The type of the spec content. */
  specContentType?:
    | "SPEC_CONTENT_TYPE_UNSPECIFIED"
    | "BOOSTED_SPEC_CONTENT"
    | "GATEWAY_OPEN_API_SPEC"
    | (string & {});
}

export const GoogleCloudApihubV1AdditionalSpecContent: Schema.Schema<GoogleCloudApihubV1AdditionalSpecContent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    specContents: Schema.optional(GoogleCloudApihubV1SpecContents),
    specContentType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1AdditionalSpecContent" });

export interface GoogleCloudApihubV1Spec {
  /** Required. The display name of the spec. This can contain the file name of the spec. */
  displayName?: string;
  /** Output only. The list of sources and metadata from the sources of the spec. */
  sourceMetadata?: ReadonlyArray<GoogleCloudApihubV1SourceMetadata>;
  /** Identifier. The name of the spec. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}` */
  name?: string;
  /** Optional. The documentation of the spec. For OpenAPI spec, this will be populated from `externalDocs` in OpenAPI spec. */
  documentation?: GoogleCloudApihubV1Documentation;
  /** Output only. Details parsed from the spec. */
  details?: GoogleCloudApihubV1SpecDetails;
  /** Optional. Input only. Enum specifying the parsing mode for OpenAPI Specification (OAS) parsing. */
  parsingMode?:
    | "PARSING_MODE_UNSPECIFIED"
    | "RELAXED"
    | "STRICT"
    | (string & {});
  /** Optional. The lint response for the spec. */
  lintResponse?: GoogleCloudApihubV1LintResponse;
  /** Optional. Input only. The contents of the uploaded spec. */
  contents?: GoogleCloudApihubV1SpecContents;
  /** Output only. The time at which the spec was last updated. */
  updateTime?: string;
  /** Optional. The URI of the spec source in case file is uploaded from an external version control system. */
  sourceUri?: string;
  /** Optional. The list of user defined attributes associated with the spec. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource. */
  attributes?: Record<string, GoogleCloudApihubV1AttributeValues>;
  /** Output only. The additional spec contents for the spec. */
  additionalSpecContents?: ReadonlyArray<GoogleCloudApihubV1AdditionalSpecContent>;
  /** Output only. The time at which the spec was created. */
  createTime?: string;
  /** Required. The type of spec. The value should be one of the allowed values defined for `projects/{project}/locations/{location}/attributes/system-spec-type` attribute. The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. Note, this field is mandatory if content is provided. */
  specType?: GoogleCloudApihubV1AttributeValues;
}

export const GoogleCloudApihubV1Spec: Schema.Schema<GoogleCloudApihubV1Spec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    sourceMetadata: Schema.optional(
      Schema.Array(GoogleCloudApihubV1SourceMetadata),
    ),
    name: Schema.optional(Schema.String),
    documentation: Schema.optional(GoogleCloudApihubV1Documentation),
    details: Schema.optional(GoogleCloudApihubV1SpecDetails),
    parsingMode: Schema.optional(Schema.String),
    lintResponse: Schema.optional(GoogleCloudApihubV1LintResponse),
    contents: Schema.optional(GoogleCloudApihubV1SpecContents),
    updateTime: Schema.optional(Schema.String),
    sourceUri: Schema.optional(Schema.String),
    attributes: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudApihubV1AttributeValues),
    ),
    additionalSpecContents: Schema.optional(
      Schema.Array(GoogleCloudApihubV1AdditionalSpecContent),
    ),
    createTime: Schema.optional(Schema.String),
    specType: Schema.optional(GoogleCloudApihubV1AttributeValues),
  }).annotate({ identifier: "GoogleCloudApihubV1Spec" });

export interface GoogleCloudApihubV1SpecMetadata {
  /** Required. The spec resource to be pushed to Hub's collect layer. The ID of the spec will be generated by Hub. */
  spec?: GoogleCloudApihubV1Spec;
  /** Required. Timestamp indicating when the spec was last updated at the source. */
  originalUpdateTime?: string;
  /** Optional. Timestamp indicating when the spec was created at the source. */
  originalCreateTime?: string;
  /** Optional. The unique identifier of the spec in the system where it was originally created. */
  originalId?: string;
}

export const GoogleCloudApihubV1SpecMetadata: Schema.Schema<GoogleCloudApihubV1SpecMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spec: Schema.optional(GoogleCloudApihubV1Spec),
    originalUpdateTime: Schema.optional(Schema.String),
    originalCreateTime: Schema.optional(Schema.String),
    originalId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1SpecMetadata" });

export interface GoogleCloudApihubV1Secret {
  /** Required. The resource name of the secret version in the format, format as: `projects/* /secrets/* /versions/*`. */
  secretVersion?: string;
}

export const GoogleCloudApihubV1Secret: Schema.Schema<GoogleCloudApihubV1Secret> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    secretVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1Secret" });

export interface GoogleCloudApihubV1UserPasswordConfig {
  /** Required. Username. */
  username?: string;
  /** Required. Secret version reference containing the password. The `secretmanager.versions.access` permission should be granted to the service account accessing the secret. */
  password?: GoogleCloudApihubV1Secret;
}

export const GoogleCloudApihubV1UserPasswordConfig: Schema.Schema<GoogleCloudApihubV1UserPasswordConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.optional(Schema.String),
    password: Schema.optional(GoogleCloudApihubV1Secret),
  }).annotate({ identifier: "GoogleCloudApihubV1UserPasswordConfig" });

export interface GoogleCloudApihubV1MultiSelectValues {
  /** Optional. The config variable value of data type multi select. */
  values?: ReadonlyArray<GoogleCloudApihubV1ConfigValueOption>;
}

export const GoogleCloudApihubV1MultiSelectValues: Schema.Schema<GoogleCloudApihubV1MultiSelectValues> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(GoogleCloudApihubV1ConfigValueOption)),
  }).annotate({ identifier: "GoogleCloudApihubV1MultiSelectValues" });

export interface GoogleCloudApihubV1MultiStringValues {
  /** Optional. The config variable value of data type multi string. */
  values?: ReadonlyArray<string>;
}

export const GoogleCloudApihubV1MultiStringValues: Schema.Schema<GoogleCloudApihubV1MultiStringValues> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudApihubV1MultiStringValues" });

export interface GoogleCloudApihubV1MultiIntValues {
  /** Optional. The config variable value of data type multi int. */
  values?: ReadonlyArray<number>;
}

export const GoogleCloudApihubV1MultiIntValues: Schema.Schema<GoogleCloudApihubV1MultiIntValues> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Schema.Number)),
  }).annotate({ identifier: "GoogleCloudApihubV1MultiIntValues" });

export interface GoogleCloudApihubV1ConfigVariable {
  /** Optional. The config variable value in case of config variable of type secret. */
  secretValue?: GoogleCloudApihubV1Secret;
  /** Optional. The config variable value in case of config variable of type string. */
  stringValue?: string;
  /** Optional. The config variable value in case of config variable of type integer. */
  intValue?: string;
  /** Optional. The config variable value in case of config variable of type multi select. */
  multiSelectValues?: GoogleCloudApihubV1MultiSelectValues;
  /** Output only. Key will be the id to uniquely identify the config variable. */
  key?: string;
  /** Optional. The config variable value in case of config variable of type boolean. */
  boolValue?: boolean;
  /** Optional. The config variable value in case of config variable of type enum. */
  enumValue?: GoogleCloudApihubV1ConfigValueOption;
  /** Optional. The config variable value in case of config variable of type multi string. */
  multiStringValues?: GoogleCloudApihubV1MultiStringValues;
  /** Optional. The config variable value in case of config variable of type multi integer. */
  multiIntValues?: GoogleCloudApihubV1MultiIntValues;
}

export const GoogleCloudApihubV1ConfigVariable: Schema.Schema<GoogleCloudApihubV1ConfigVariable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    secretValue: Schema.optional(GoogleCloudApihubV1Secret),
    stringValue: Schema.optional(Schema.String),
    intValue: Schema.optional(Schema.String),
    multiSelectValues: Schema.optional(GoogleCloudApihubV1MultiSelectValues),
    key: Schema.optional(Schema.String),
    boolValue: Schema.optional(Schema.Boolean),
    enumValue: Schema.optional(GoogleCloudApihubV1ConfigValueOption),
    multiStringValues: Schema.optional(GoogleCloudApihubV1MultiStringValues),
    multiIntValues: Schema.optional(GoogleCloudApihubV1MultiIntValues),
  }).annotate({ identifier: "GoogleCloudApihubV1ConfigVariable" });

export interface GoogleCloudApihubV1ExternalApi {
  /** Identifier. Format: `projects/{project}/locations/{location}/externalApi/{externalApi}`. */
  name?: string;
  /** Optional. Documentation of the external API. */
  documentation?: GoogleCloudApihubV1Documentation;
  /** Output only. Last update timestamp. */
  updateTime?: string;
  /** Optional. List of endpoints on which this API is accessible. */
  endpoints?: ReadonlyArray<string>;
  /** Required. Display name of the external API. Max length is 63 characters (Unicode Code Points). */
  displayName?: string;
  /** Optional. Description of the external API. Max length is 2000 characters (Unicode Code Points). */
  description?: string;
  /** Optional. List of paths served by this API. */
  paths?: ReadonlyArray<string>;
  /** Optional. The list of user defined attributes associated with the Version resource. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource. */
  attributes?: Record<string, GoogleCloudApihubV1AttributeValues>;
  /** Output only. Creation timestamp. */
  createTime?: string;
}

export const GoogleCloudApihubV1ExternalApi: Schema.Schema<GoogleCloudApihubV1ExternalApi> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    documentation: Schema.optional(GoogleCloudApihubV1Documentation),
    updateTime: Schema.optional(Schema.String),
    endpoints: Schema.optional(Schema.Array(Schema.String)),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    paths: Schema.optional(Schema.Array(Schema.String)),
    attributes: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudApihubV1AttributeValues),
    ),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1ExternalApi" });

export interface GoogleCloudApihubV1Api {
  /** Optional. Fingerprint of the API resource. This must be unique for each API resource. It can neither be unset nor be updated to an existing fingerprint of another API resource. */
  fingerprint?: string;
  /** Optional. The selected version for an API resource. This can be used when special handling is needed on client side for particular version of the API. Format is `projects/{project}/locations/{location}/apis/{api}/versions/{version}` */
  selectedVersion?: string;
  /** Required. The display name of the API resource. */
  displayName?: string;
  /** Optional. The description of the API resource. */
  description?: string;
  /** Optional. The business unit owning the API. This maps to the following system defined attribute: `projects/{project}/locations/{location}/attributes/system-business-unit` attribute. The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should be from the list of allowed values defined for the attribute. */
  businessUnit?: GoogleCloudApihubV1AttributeValues;
  /** Optional. The style of the API. This maps to the following system defined attribute: `projects/{project}/locations/{location}/attributes/system-api-style` attribute. The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should be from the list of allowed values defined for the attribute. */
  apiStyle?: GoogleCloudApihubV1AttributeValues;
  /** Optional. The target users for the API. This maps to the following system defined attribute: `projects/{project}/locations/{location}/attributes/system-target-user` attribute. The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should be from the list of allowed values defined for the attribute. */
  targetUser?: GoogleCloudApihubV1AttributeValues;
  /** Optional. The maturity level of the API. This maps to the following system defined attribute: `projects/{project}/locations/{location}/attributes/system-maturity-level` attribute. The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should be from the list of allowed values defined for the attribute. */
  maturityLevel?: GoogleCloudApihubV1AttributeValues;
  /** Optional. The api functional requirements associated with the API resource. Carinality is 1 for this attribute. This maps to the following system defined attribute: `projects/{project}/locations/{location}/attributes/system-api-functional-requirements` attribute. The value of the attribute should be a proper URI, and in case of Cloud Storage URI, it should point to a Cloud Storage object, not a directory. */
  apiFunctionalRequirements?: GoogleCloudApihubV1AttributeValues;
  /** Identifier. The name of the API resource in the API Hub. Format: `projects/{project}/locations/{location}/apis/{api}` */
  name?: string;
  /** Output only. The list of sources and metadata from the sources of the API resource. */
  sourceMetadata?: ReadonlyArray<GoogleCloudApihubV1SourceMetadata>;
  /** Optional. The documentation for the API resource. */
  documentation?: GoogleCloudApihubV1Documentation;
  /** Optional. The api technical requirements associated with the API resource. Carinality is 1 for this attribute. This maps to the following system defined attribute: `projects/{project}/locations/{location}/attributes/system-api-technical-requirements` attribute. The value of the attribute should be a proper URI, and in case of Cloud Storage URI, it should point to a Cloud Storage object, not a directory. */
  apiTechnicalRequirements?: GoogleCloudApihubV1AttributeValues;
  /** Optional. The api requirement doc associated with the API resource. Carinality is 1 for this attribute. This maps to the following system defined attribute: `projects/{project}/locations/{location}/attributes/system-api-requirements` attribute. The value of the attribute should be a proper URI, and in case of Cloud Storage URI, it should point to a Cloud Storage object, not a directory. */
  apiRequirements?: GoogleCloudApihubV1AttributeValues;
  /** Optional. The list of user defined attributes associated with the API resource. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource. */
  attributes?: Record<string, GoogleCloudApihubV1AttributeValues>;
  /** Output only. The time at which the API resource was created. */
  createTime?: string;
  /** Optional. Owner details for the API resource. */
  owner?: GoogleCloudApihubV1Owner;
  /** Output only. The list of versions present in an API resource. Note: An API resource can be associated with more than 1 version. Format is `projects/{project}/locations/{location}/apis/{api}/versions/{version}` */
  versions?: ReadonlyArray<string>;
  /** Output only. The time at which the API resource was last updated. */
  updateTime?: string;
  /** Optional. The team owning the API. This maps to the following system defined attribute: `projects/{project}/locations/{location}/attributes/system-team` attribute. The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should be from the list of allowed values defined for the attribute. */
  team?: GoogleCloudApihubV1AttributeValues;
}

export const GoogleCloudApihubV1Api: Schema.Schema<GoogleCloudApihubV1Api> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fingerprint: Schema.optional(Schema.String),
    selectedVersion: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    businessUnit: Schema.optional(GoogleCloudApihubV1AttributeValues),
    apiStyle: Schema.optional(GoogleCloudApihubV1AttributeValues),
    targetUser: Schema.optional(GoogleCloudApihubV1AttributeValues),
    maturityLevel: Schema.optional(GoogleCloudApihubV1AttributeValues),
    apiFunctionalRequirements: Schema.optional(
      GoogleCloudApihubV1AttributeValues,
    ),
    name: Schema.optional(Schema.String),
    sourceMetadata: Schema.optional(
      Schema.Array(GoogleCloudApihubV1SourceMetadata),
    ),
    documentation: Schema.optional(GoogleCloudApihubV1Documentation),
    apiTechnicalRequirements: Schema.optional(
      GoogleCloudApihubV1AttributeValues,
    ),
    apiRequirements: Schema.optional(GoogleCloudApihubV1AttributeValues),
    attributes: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudApihubV1AttributeValues),
    ),
    createTime: Schema.optional(Schema.String),
    owner: Schema.optional(GoogleCloudApihubV1Owner),
    versions: Schema.optional(Schema.Array(Schema.String)),
    updateTime: Schema.optional(Schema.String),
    team: Schema.optional(GoogleCloudApihubV1AttributeValues),
  }).annotate({ identifier: "GoogleCloudApihubV1Api" });

export interface GoogleCloudApihubV1Version {
  /** Optional. The list of user defined attributes associated with the Version resource. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource. */
  attributes?: Record<string, GoogleCloudApihubV1AttributeValues>;
  /** Output only. The definitions contained in the API version. These definitions will be added to the version when a new spec is added or when an existing spec is updated. Format is `projects/{project}/locations/{location}/apis/{api}/versions/{version}/definitions/{definition}` */
  definitions?: ReadonlyArray<string>;
  /** Output only. The time at which the version was created. */
  createTime?: string;
  /** Output only. The specs associated with this version. Note that an API version can be associated with multiple specs. Format is `projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}` */
  specs?: ReadonlyArray<string>;
  /** Optional. The lifecycle of the API version. This maps to the following system defined attribute: `projects/{project}/locations/{location}/attributes/system-lifecycle` attribute. The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should be from the list of allowed values defined for the attribute. */
  lifecycle?: GoogleCloudApihubV1AttributeValues;
  /** Output only. The time at which the version was last updated. */
  updateTime?: string;
  /** Optional. The compliance associated with the API version. This maps to the following system defined attribute: `projects/{project}/locations/{location}/attributes/system-compliance` attribute. The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should be from the list of allowed values defined for the attribute. */
  compliance?: GoogleCloudApihubV1AttributeValues;
  /** Optional. The deployments linked to this API version. Note: A particular API version could be deployed to multiple deployments (for dev deployment, UAT deployment, etc) Format is `projects/{project}/locations/{location}/deployments/{deployment}` */
  deployments?: ReadonlyArray<string>;
  /** Required. The display name of the version. */
  displayName?: string;
  /** Optional. The description of the version. */
  description?: string;
  /** Output only. The operations contained in the API version. These operations will be added to the version when a new spec is added or when an existing spec is updated. Format is `projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}` */
  apiOperations?: ReadonlyArray<string>;
  /** Optional. The selected deployment for a Version resource. This can be used when special handling is needed on client side for a particular deployment linked to the version. Format is `projects/{project}/locations/{location}/deployments/{deployment}` */
  selectedDeployment?: string;
  /** Output only. The list of sources and metadata from the sources of the version. */
  sourceMetadata?: ReadonlyArray<GoogleCloudApihubV1SourceMetadata>;
  /** Identifier. The name of the version. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}` */
  name?: string;
  /** Optional. The documentation of the version. */
  documentation?: GoogleCloudApihubV1Documentation;
  /** Optional. The accreditations associated with the API version. This maps to the following system defined attribute: `projects/{project}/locations/{location}/attributes/system-accreditation` attribute. The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should be from the list of allowed values defined for the attribute. */
  accreditation?: GoogleCloudApihubV1AttributeValues;
}

export const GoogleCloudApihubV1Version: Schema.Schema<GoogleCloudApihubV1Version> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attributes: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudApihubV1AttributeValues),
    ),
    definitions: Schema.optional(Schema.Array(Schema.String)),
    createTime: Schema.optional(Schema.String),
    specs: Schema.optional(Schema.Array(Schema.String)),
    lifecycle: Schema.optional(GoogleCloudApihubV1AttributeValues),
    updateTime: Schema.optional(Schema.String),
    compliance: Schema.optional(GoogleCloudApihubV1AttributeValues),
    deployments: Schema.optional(Schema.Array(Schema.String)),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    apiOperations: Schema.optional(Schema.Array(Schema.String)),
    selectedDeployment: Schema.optional(Schema.String),
    sourceMetadata: Schema.optional(
      Schema.Array(GoogleCloudApihubV1SourceMetadata),
    ),
    name: Schema.optional(Schema.String),
    documentation: Schema.optional(GoogleCloudApihubV1Documentation),
    accreditation: Schema.optional(GoogleCloudApihubV1AttributeValues),
  }).annotate({ identifier: "GoogleCloudApihubV1Version" });

export interface GoogleCloudApihubV1Deployment {
  /** Optional. The environment at source for the deployment. For example: prod, dev, staging, etc. */
  sourceEnvironment?: string;
  /** Required. The display name of the deployment. */
  displayName?: string;
  /** Optional. The description of the deployment. */
  description?: string;
  /** Optional. The SLO for this deployment. This maps to the following system defined attribute: `projects/{project}/locations/{location}/attributes/system-slo` attribute. The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should be from the list of allowed values defined for the attribute. */
  slo?: GoogleCloudApihubV1AttributeValues;
  /** Optional. The documentation of the deployment. */
  documentation?: GoogleCloudApihubV1Documentation;
  /** Required. The endpoints at which this deployment resource is listening for API requests. This could be a list of complete URIs, hostnames or an IP addresses. */
  endpoints?: ReadonlyArray<string>;
  /** Required. The resource URI identifies the deployment within its gateway. For Apigee gateways, its recommended to use the format: organizations/{org}/environments/{env}/apis/{api}. For ex: if a proxy with name `orders` is deployed in `staging` environment of `cymbal` organization, the resource URI would be: `organizations/cymbal/environments/staging/apis/orders`. */
  resourceUri?: string;
  /** Output only. The list of sources and metadata from the sources of the deployment. */
  sourceMetadata?: ReadonlyArray<GoogleCloudApihubV1SourceMetadata>;
  /** Identifier. The name of the deployment. Format: `projects/{project}/locations/{location}/deployments/{deployment}` */
  name?: string;
  /** Output only. The API versions linked to this deployment. Note: A particular deployment could be linked to multiple different API versions (of same or different APIs). */
  apiVersions?: ReadonlyArray<string>;
  /** Optional. The environment mapping to this deployment. This maps to the following system defined attribute: `projects/{project}/locations/{location}/attributes/system-environment` attribute. The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should be from the list of allowed values defined for the attribute. */
  environment?: GoogleCloudApihubV1AttributeValues;
  /** Optional. The uri where users can navigate to for the management of the deployment. This maps to the following system defined attribute: `projects/{project}/locations/{location}/attributes/system-management-url` The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. The value of the attribute should be a valid URL. */
  managementUrl?: GoogleCloudApihubV1AttributeValues;
  /** Optional. The uri where additional source specific information for this deployment can be found. This maps to the following system defined attribute: `projects/{project}/locations/{location}/attributes/system-source-uri` The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. The value of the attribute should be a valid URI, and in case of Cloud Storage URI, it should point to a Cloud Storage object, not a directory. */
  sourceUri?: GoogleCloudApihubV1AttributeValues;
  /** Output only. The time at which the deployment was created. */
  createTime?: string;
  /** Optional. The list of user defined attributes associated with the deployment resource. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource. */
  attributes?: Record<string, GoogleCloudApihubV1AttributeValues>;
  /** Optional. The project to which the deployment belongs. For Google Cloud gateways, this will refer to the project identifier. For others like Edge/OPDK, this will refer to the org identifier. */
  sourceProject?: string;
  /** Required. The type of deployment. This maps to the following system defined attribute: `projects/{project}/locations/{location}/attributes/system-deployment-type` attribute. The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should be from the list of allowed values defined for the attribute. */
  deploymentType?: GoogleCloudApihubV1AttributeValues;
  /** Output only. The time at which the deployment was last updated. */
  updateTime?: string;
}

export const GoogleCloudApihubV1Deployment: Schema.Schema<GoogleCloudApihubV1Deployment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceEnvironment: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    slo: Schema.optional(GoogleCloudApihubV1AttributeValues),
    documentation: Schema.optional(GoogleCloudApihubV1Documentation),
    endpoints: Schema.optional(Schema.Array(Schema.String)),
    resourceUri: Schema.optional(Schema.String),
    sourceMetadata: Schema.optional(
      Schema.Array(GoogleCloudApihubV1SourceMetadata),
    ),
    name: Schema.optional(Schema.String),
    apiVersions: Schema.optional(Schema.Array(Schema.String)),
    environment: Schema.optional(GoogleCloudApihubV1AttributeValues),
    managementUrl: Schema.optional(GoogleCloudApihubV1AttributeValues),
    sourceUri: Schema.optional(GoogleCloudApihubV1AttributeValues),
    createTime: Schema.optional(Schema.String),
    attributes: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudApihubV1AttributeValues),
    ),
    sourceProject: Schema.optional(Schema.String),
    deploymentType: Schema.optional(GoogleCloudApihubV1AttributeValues),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1Deployment" });

export interface GoogleCloudApihubV1DeploymentMetadata {
  /** Optional. The unique identifier of the deployment in the system where it was originally created. */
  originalId?: string;
  /** Optional. Timestamp indicating when the deployment was created at the source. */
  originalCreateTime?: string;
  /** Required. Timestamp indicating when the deployment was last updated at the source. */
  originalUpdateTime?: string;
  /** Required. The deployment resource to be pushed to Hub's collect layer. The ID of the deployment will be generated by Hub. */
  deployment?: GoogleCloudApihubV1Deployment;
}

export const GoogleCloudApihubV1DeploymentMetadata: Schema.Schema<GoogleCloudApihubV1DeploymentMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    originalId: Schema.optional(Schema.String),
    originalCreateTime: Schema.optional(Schema.String),
    originalUpdateTime: Schema.optional(Schema.String),
    deployment: Schema.optional(GoogleCloudApihubV1Deployment),
  }).annotate({ identifier: "GoogleCloudApihubV1DeploymentMetadata" });

export interface GoogleCloudApihubV1VersionMetadata {
  /** Required. Represents a version of the API resource in API hub. The ID of the version will be generated by Hub. */
  version?: GoogleCloudApihubV1Version;
  /** Required. Timestamp indicating when the version was last updated at the source. */
  originalUpdateTime?: string;
  /** Optional. The unique identifier of the version in the system where it was originally created. */
  originalId?: string;
  /** Optional. The deployments linked to this API version. Note: A particular API version could be deployed to multiple deployments (for dev deployment, UAT deployment, etc.) */
  deployments?: ReadonlyArray<GoogleCloudApihubV1DeploymentMetadata>;
  /** Optional. Timestamp indicating when the version was created at the source. */
  originalCreateTime?: string;
  /** Optional. The specs associated with this version. Note that an API version can be associated with multiple specs. */
  specs?: ReadonlyArray<GoogleCloudApihubV1SpecMetadata>;
}

export const GoogleCloudApihubV1VersionMetadata: Schema.Schema<GoogleCloudApihubV1VersionMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(GoogleCloudApihubV1Version),
    originalUpdateTime: Schema.optional(Schema.String),
    originalId: Schema.optional(Schema.String),
    deployments: Schema.optional(
      Schema.Array(GoogleCloudApihubV1DeploymentMetadata),
    ),
    originalCreateTime: Schema.optional(Schema.String),
    specs: Schema.optional(Schema.Array(GoogleCloudApihubV1SpecMetadata)),
  }).annotate({ identifier: "GoogleCloudApihubV1VersionMetadata" });

export interface GoogleCloudApihubV1APIMetadata {
  /** Optional. Timestamp indicating when the API was created at the source. */
  originalCreateTime?: string;
  /** Required. The API resource to be pushed to Hub's collect layer. The ID of the API resource will be generated by Hub to ensure uniqueness across all APIs across systems. */
  api?: GoogleCloudApihubV1Api;
  /** Optional. The unique identifier of the API in the system where it was originally created. */
  originalId?: string;
  /** Optional. The list of versions present in an API resource. */
  versions?: ReadonlyArray<GoogleCloudApihubV1VersionMetadata>;
  /** Required. Timestamp indicating when the API was last updated at the source. */
  originalUpdateTime?: string;
}

export const GoogleCloudApihubV1APIMetadata: Schema.Schema<GoogleCloudApihubV1APIMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    originalCreateTime: Schema.optional(Schema.String),
    api: Schema.optional(GoogleCloudApihubV1Api),
    originalId: Schema.optional(Schema.String),
    versions: Schema.optional(Schema.Array(GoogleCloudApihubV1VersionMetadata)),
    originalUpdateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1APIMetadata" });

export interface GoogleCloudApihubV1ApiMetadataList {
  /** Required. The list of API metadata. */
  apiMetadata?: ReadonlyArray<GoogleCloudApihubV1APIMetadata>;
}

export const GoogleCloudApihubV1ApiMetadataList: Schema.Schema<GoogleCloudApihubV1ApiMetadataList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiMetadata: Schema.optional(Schema.Array(GoogleCloudApihubV1APIMetadata)),
  }).annotate({ identifier: "GoogleCloudApihubV1ApiMetadataList" });

export interface GoogleCloudApihubV1ApiData {
  /** Optional. The list of API metadata. */
  apiMetadataList?: GoogleCloudApihubV1ApiMetadataList;
}

export const GoogleCloudApihubV1ApiData: Schema.Schema<GoogleCloudApihubV1ApiData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiMetadataList: Schema.optional(GoogleCloudApihubV1ApiMetadataList),
  }).annotate({ identifier: "GoogleCloudApihubV1ApiData" });

export interface GoogleCloudApihubV1CollectApiDataRequest {
  /** Required. The plugin instance collecting the API data. Format: `projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}`. */
  pluginInstance?: string;
  /** Required. The type of collection. Applies to all entries in api_data. */
  collectionType?:
    | "COLLECTION_TYPE_UNSPECIFIED"
    | "COLLECTION_TYPE_UPSERT"
    | "COLLECTION_TYPE_DELETE"
    | (string & {});
  /** Required. The action ID to be used for collecting the API data. This should map to one of the action IDs specified in action configs in the plugin. */
  actionId?: string;
  /** Required. The API data to be collected. */
  apiData?: GoogleCloudApihubV1ApiData;
}

export const GoogleCloudApihubV1CollectApiDataRequest: Schema.Schema<GoogleCloudApihubV1CollectApiDataRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pluginInstance: Schema.optional(Schema.String),
    collectionType: Schema.optional(Schema.String),
    actionId: Schema.optional(Schema.String),
    apiData: Schema.optional(GoogleCloudApihubV1ApiData),
  }).annotate({ identifier: "GoogleCloudApihubV1CollectApiDataRequest" });

export interface GoogleCloudApihubV1EnvironmentFilter {
  /** Optional. Indicates if this filter should match all environments or only a subset of environments. If set to true, all environments are matched. */
  allEnvironments?: boolean;
  /** Optional. If provided, only environments in this list are matched. This field is ignored if `all_environments` is true. */
  environments?: ReadonlyArray<string>;
}

export const GoogleCloudApihubV1EnvironmentFilter: Schema.Schema<GoogleCloudApihubV1EnvironmentFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allEnvironments: Schema.optional(Schema.Boolean),
    environments: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudApihubV1EnvironmentFilter" });

export interface GoogleCloudApihubV1ApigeeOPDKConfig {
  /** Optional. The filter to apply on the resources managed by the gateway plugin instance. If provided this filter applies environment specific filtering. */
  environmentFilter?: GoogleCloudApihubV1EnvironmentFilter;
}

export const GoogleCloudApihubV1ApigeeOPDKConfig: Schema.Schema<GoogleCloudApihubV1ApigeeOPDKConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    environmentFilter: Schema.optional(GoogleCloudApihubV1EnvironmentFilter),
  }).annotate({ identifier: "GoogleCloudApihubV1ApigeeOPDKConfig" });

export interface GoogleCloudApihubV1ApiKeyConfig {
  /** Required. The location of the API key. The default value is QUERY. */
  httpElementLocation?:
    | "HTTP_ELEMENT_LOCATION_UNSPECIFIED"
    | "QUERY"
    | "HEADER"
    | "PATH"
    | "BODY"
    | "COOKIE"
    | (string & {});
  /** Required. The parameter name of the API key. E.g. If the API request is "https://example.com/act?api_key=", "api_key" would be the parameter name. */
  name?: string;
  /** Required. The name of the SecretManager secret version resource storing the API key. Format: `projects/{project}/secrets/{secrete}/versions/{version}`. The `secretmanager.versions.access` permission should be granted to the service account accessing the secret. */
  apiKey?: GoogleCloudApihubV1Secret;
}

export const GoogleCloudApihubV1ApiKeyConfig: Schema.Schema<GoogleCloudApihubV1ApiKeyConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    httpElementLocation: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    apiKey: Schema.optional(GoogleCloudApihubV1Secret),
  }).annotate({ identifier: "GoogleCloudApihubV1ApiKeyConfig" });

export interface GoogleCloudApihubV1Oauth2ClientCredentialsConfig {
  /** Required. The client identifier. */
  clientId?: string;
  /** Required. Secret version reference containing the client secret. The `secretmanager.versions.access` permission should be granted to the service account accessing the secret. */
  clientSecret?: GoogleCloudApihubV1Secret;
}

export const GoogleCloudApihubV1Oauth2ClientCredentialsConfig: Schema.Schema<GoogleCloudApihubV1Oauth2ClientCredentialsConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientId: Schema.optional(Schema.String),
    clientSecret: Schema.optional(GoogleCloudApihubV1Secret),
  }).annotate({
    identifier: "GoogleCloudApihubV1Oauth2ClientCredentialsConfig",
  });

export interface GoogleCloudApihubV1AuthConfig {
  /** Api Key Config. */
  apiKeyConfig?: GoogleCloudApihubV1ApiKeyConfig;
  /** Google Service Account. */
  googleServiceAccountConfig?: GoogleCloudApihubV1GoogleServiceAccountConfig;
  /** Oauth2.0 Client Credentials. */
  oauth2ClientCredentialsConfig?: GoogleCloudApihubV1Oauth2ClientCredentialsConfig;
  /** User Password. */
  userPasswordConfig?: GoogleCloudApihubV1UserPasswordConfig;
  /** Required. The authentication type. */
  authType?:
    | "AUTH_TYPE_UNSPECIFIED"
    | "NO_AUTH"
    | "GOOGLE_SERVICE_ACCOUNT"
    | "USER_PASSWORD"
    | "API_KEY"
    | "OAUTH2_CLIENT_CREDENTIALS"
    | (string & {});
}

export const GoogleCloudApihubV1AuthConfig: Schema.Schema<GoogleCloudApihubV1AuthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiKeyConfig: Schema.optional(GoogleCloudApihubV1ApiKeyConfig),
    googleServiceAccountConfig: Schema.optional(
      GoogleCloudApihubV1GoogleServiceAccountConfig,
    ),
    oauth2ClientCredentialsConfig: Schema.optional(
      GoogleCloudApihubV1Oauth2ClientCredentialsConfig,
    ),
    userPasswordConfig: Schema.optional(GoogleCloudApihubV1UserPasswordConfig),
    authType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1AuthConfig" });

export interface GoogleCloudApihubV1Attribute {
  /** Identifier. The name of the attribute in the API Hub. Format: `projects/{project}/locations/{location}/attributes/{attribute}` */
  name?: string;
  /** Output only. When mandatory is true, the attribute is mandatory for the resource specified in the scope. Only System defined attributes can be mandatory. */
  mandatory?: boolean;
  /** Optional. The list of allowed values when the attribute value is of type enum. This is required when the data_type of the attribute is ENUM. The maximum number of allowed values of an attribute will be 1000. */
  allowedValues?: ReadonlyArray<GoogleCloudApihubV1AllowedValue>;
  /** Output only. The time at which the attribute was last updated. */
  updateTime?: string;
  /** Required. The display name of the attribute. */
  displayName?: string;
  /** Optional. The description of the attribute. */
  description?: string;
  /** Required. The type of the data of the attribute. */
  dataType?:
    | "DATA_TYPE_UNSPECIFIED"
    | "ENUM"
    | "JSON"
    | "STRING"
    | "URI"
    | (string & {});
  /** Required. The scope of the attribute. It represents the resource in the API Hub to which the attribute can be linked. */
  scope?:
    | "SCOPE_UNSPECIFIED"
    | "API"
    | "VERSION"
    | "SPEC"
    | "API_OPERATION"
    | "DEPLOYMENT"
    | "DEPENDENCY"
    | "DEFINITION"
    | "EXTERNAL_API"
    | "PLUGIN"
    | (string & {});
  /** Output only. The time at which the attribute was created. */
  createTime?: string;
  /** Optional. The maximum number of values that the attribute can have when associated with an API Hub resource. Cardinality 1 would represent a single-valued attribute. It must not be less than 1 or greater than 20. If not specified, the cardinality would be set to 1 by default and represent a single-valued attribute. */
  cardinality?: number;
  /** Output only. The definition type of the attribute. */
  definitionType?:
    | "DEFINITION_TYPE_UNSPECIFIED"
    | "SYSTEM_DEFINED"
    | "USER_DEFINED"
    | (string & {});
}

export const GoogleCloudApihubV1Attribute: Schema.Schema<GoogleCloudApihubV1Attribute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    mandatory: Schema.optional(Schema.Boolean),
    allowedValues: Schema.optional(
      Schema.Array(GoogleCloudApihubV1AllowedValue),
    ),
    updateTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    dataType: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    cardinality: Schema.optional(Schema.Number),
    definitionType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1Attribute" });

export interface GoogleCloudApihubV1ListSpecsResponse {
  /** The specs corresponding to an API Version. */
  specs?: ReadonlyArray<GoogleCloudApihubV1Spec>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleCloudApihubV1ListSpecsResponse: Schema.Schema<GoogleCloudApihubV1ListSpecsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    specs: Schema.optional(Schema.Array(GoogleCloudApihubV1Spec)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1ListSpecsResponse" });

export interface GoogleCloudApihubV1Schema {
  /** Output only. The raw value of the schema definition corresponding to the schema name in the spec. */
  rawValue?: string;
  /** Output only. The display name of the schema. This will map to the name of the schema in the spec. */
  displayName?: string;
}

export const GoogleCloudApihubV1Schema: Schema.Schema<GoogleCloudApihubV1Schema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rawValue: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1Schema" });

export interface GoogleCloudApihubV1RuntimeProjectAttachment {
  /** Output only. Create time. */
  createTime?: string;
  /** Identifier. The resource name of a runtime project attachment. Format: "projects/{project}/locations/{location}/runtimeProjectAttachments/{runtime_project_attachment}". */
  name?: string;
  /** Required. Immutable. Google cloud project name in the format: "projects/abc" or "projects/123". As input, project name with either project id or number are accepted. As output, this field will contain project number. */
  runtimeProject?: string;
}

export const GoogleCloudApihubV1RuntimeProjectAttachment: Schema.Schema<GoogleCloudApihubV1RuntimeProjectAttachment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    runtimeProject: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1RuntimeProjectAttachment" });

export interface GoogleCloudLocationLocation {
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
}

export const GoogleCloudLocationLocation: Schema.Schema<GoogleCloudLocationLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudLocationLocation" });

export interface GoogleCloudLocationListLocationsResponse {
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<GoogleCloudLocationLocation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const GoogleCloudLocationListLocationsResponse: Schema.Schema<GoogleCloudLocationListLocationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locations: Schema.optional(Schema.Array(GoogleCloudLocationLocation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudLocationListLocationsResponse" });

export interface GoogleCloudApihubV1ListApisResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** The API resources present in the API hub. */
  apis?: ReadonlyArray<GoogleCloudApihubV1Api>;
}

export const GoogleCloudApihubV1ListApisResponse: Schema.Schema<GoogleCloudApihubV1ListApisResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    apis: Schema.optional(Schema.Array(GoogleCloudApihubV1Api)),
  }).annotate({ identifier: "GoogleCloudApihubV1ListApisResponse" });

export interface GoogleCloudApihubV1ListExternalApisResponse {
  /** The External API resources present in the API hub. */
  externalApis?: ReadonlyArray<GoogleCloudApihubV1ExternalApi>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleCloudApihubV1ListExternalApisResponse: Schema.Schema<GoogleCloudApihubV1ListExternalApisResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    externalApis: Schema.optional(Schema.Array(GoogleCloudApihubV1ExternalApi)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1ListExternalApisResponse" });

export interface GoogleCloudApihubV1DisablePluginInstanceActionRequest {
  /** Required. The action id to disable. */
  actionId?: string;
}

export const GoogleCloudApihubV1DisablePluginInstanceActionRequest: Schema.Schema<GoogleCloudApihubV1DisablePluginInstanceActionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    actionId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudApihubV1DisablePluginInstanceActionRequest",
  });

export interface GoogleCloudApihubV1ToolAnnotations {
  /** Optional. A human-readable title for the tool (if different from Tool.title). */
  title?: string;
  /** Optional. Hint indicating if the tool interacts with the open world (e.g., internet). */
  openWorldHint?: boolean;
  /** Optional. Hint indicating if the tool is idempotent. */
  idempotentHint?: boolean;
  /** Optional. Hint indicating if the tool may have destructive side effects. */
  destructiveHint?: boolean;
  /** Optional. Hint indicating if the tool is read-only. */
  readOnlyHint?: boolean;
  /** Optional. Additional hints which may help tools and not covered in defaults. */
  additionalHints?: Record<string, string>;
}

export const GoogleCloudApihubV1ToolAnnotations: Schema.Schema<GoogleCloudApihubV1ToolAnnotations> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    openWorldHint: Schema.optional(Schema.Boolean),
    idempotentHint: Schema.optional(Schema.Boolean),
    destructiveHint: Schema.optional(Schema.Boolean),
    readOnlyHint: Schema.optional(Schema.Boolean),
    additionalHints: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({ identifier: "GoogleCloudApihubV1ToolAnnotations" });

export interface GoogleCloudApihubV1McpTool {
  /** Required. The name of the tool, unique within its parent scope (version). */
  name?: string;
  /** Optional. Optional title for the tool. */
  title?: string;
  /** Optional. Optional annotations for the tool. */
  annotations?: GoogleCloudApihubV1ToolAnnotations;
  /** Optional. Input schema for the operation. This can be parsed only from MCP schema type. */
  inputSchema?: GoogleCloudApihubV1OperationSchema;
  /** Optional. Description of what the tool does. */
  description?: string;
  /** Optional. Output schema for the operation. This can be parsed only from MCP schema type. */
  outputSchema?: GoogleCloudApihubV1OperationSchema;
}

export const GoogleCloudApihubV1McpTool: Schema.Schema<GoogleCloudApihubV1McpTool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    annotations: Schema.optional(GoogleCloudApihubV1ToolAnnotations),
    inputSchema: Schema.optional(GoogleCloudApihubV1OperationSchema),
    description: Schema.optional(Schema.String),
    outputSchema: Schema.optional(GoogleCloudApihubV1OperationSchema),
  }).annotate({ identifier: "GoogleCloudApihubV1McpTool" });

export interface GoogleCloudApihubV1OperationDetails {
  /** The MCP Tool Operation. */
  mcpTool?: GoogleCloudApihubV1McpTool;
  /** The HTTP Operation. */
  httpOperation?: GoogleCloudApihubV1HttpOperation;
  /** Optional. Additional external documentation for this operation. For OpenAPI spec, this will map to `operation.documentation` in the spec. */
  documentation?: GoogleCloudApihubV1Documentation;
  /** Optional. Description of the operation behavior. For OpenAPI spec, this will map to `operation.description` in the spec, in case description is empty, `operation.summary` will be used. */
  description?: string;
  /** Optional. For OpenAPI spec, this will be set if `operation.deprecated`is marked as `true` in the spec. */
  deprecated?: boolean;
}

export const GoogleCloudApihubV1OperationDetails: Schema.Schema<GoogleCloudApihubV1OperationDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mcpTool: Schema.optional(GoogleCloudApihubV1McpTool),
    httpOperation: Schema.optional(GoogleCloudApihubV1HttpOperation),
    documentation: Schema.optional(GoogleCloudApihubV1Documentation),
    description: Schema.optional(Schema.String),
    deprecated: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudApihubV1OperationDetails" });

export interface GoogleCloudApihubV1ApiOperation {
  /** Optional. The list of user defined attributes associated with the API operation resource. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource. */
  attributes?: Record<string, GoogleCloudApihubV1AttributeValues>;
  /** Output only. The list of sources and metadata from the sources of the API operation. */
  sourceMetadata?: ReadonlyArray<GoogleCloudApihubV1SourceMetadata>;
  /** Identifier. The name of the operation. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}` */
  name?: string;
  /** Output only. The time at which the operation was created. */
  createTime?: string;
  /** Output only. The time at which the operation was last updated. */
  updateTime?: string;
  /** Output only. The name of the spec will be of the format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}` Note:The name of the spec will be empty if the operation is created via CreateApiOperation API. */
  spec?: string;
  /** Optional. Operation details. Note: Even though this field is optional, it is required for CreateApiOperation API and we will fail the request if not provided. */
  details?: GoogleCloudApihubV1OperationDetails;
}

export const GoogleCloudApihubV1ApiOperation: Schema.Schema<GoogleCloudApihubV1ApiOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attributes: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudApihubV1AttributeValues),
    ),
    sourceMetadata: Schema.optional(
      Schema.Array(GoogleCloudApihubV1SourceMetadata),
    ),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    spec: Schema.optional(Schema.String),
    details: Schema.optional(GoogleCloudApihubV1OperationDetails),
  }).annotate({ identifier: "GoogleCloudApihubV1ApiOperation" });

export interface GoogleCloudApihubV1ListApiOperationsResponse {
  /** The operations corresponding to an API version. */
  apiOperations?: ReadonlyArray<GoogleCloudApihubV1ApiOperation>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleCloudApihubV1ListApiOperationsResponse: Schema.Schema<GoogleCloudApihubV1ListApiOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiOperations: Schema.optional(
      Schema.Array(GoogleCloudApihubV1ApiOperation),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1ListApiOperationsResponse" });

export interface GoogleCloudApihubV1AgentRegistrySyncConfig {
  /** Optional. If true, the MCP data sync to the Agent Registry will be disabled. The default value is false. */
  disabled?: boolean;
}

export const GoogleCloudApihubV1AgentRegistrySyncConfig: Schema.Schema<GoogleCloudApihubV1AgentRegistrySyncConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudApihubV1AgentRegistrySyncConfig" });

export interface GoogleCloudApihubV1Config {
  /** Optional. If true, the search will be disabled for the instance. The default value is false. */
  disableSearch?: boolean;
  /** Optional. The name of the Vertex AI location where the data store is stored. */
  vertexLocation?: string;
  /** Optional. Encryption type for the region. If the encryption type is CMEK, the cmek_key_name must be provided. If no encryption type is provided, GMEK will be used. */
  encryptionType?:
    | "ENCRYPTION_TYPE_UNSPECIFIED"
    | "GMEK"
    | "CMEK"
    | (string & {});
  /** Optional. The configuration for syncing MCP data in the API Hub instance to the Agent Registry. */
  agentRegistrySyncConfig?: GoogleCloudApihubV1AgentRegistrySyncConfig;
  /** Optional. The Customer Managed Encryption Key (CMEK) used for data encryption. The CMEK name should follow the format of `projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)`, where the location must match the instance location. If the CMEK is not provided, a GMEK will be created for the instance. */
  cmekKeyName?: string;
}

export const GoogleCloudApihubV1Config: Schema.Schema<GoogleCloudApihubV1Config> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disableSearch: Schema.optional(Schema.Boolean),
    vertexLocation: Schema.optional(Schema.String),
    encryptionType: Schema.optional(Schema.String),
    agentRegistrySyncConfig: Schema.optional(
      GoogleCloudApihubV1AgentRegistrySyncConfig,
    ),
    cmekKeyName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1Config" });

export interface GoogleCloudApihubV1ApiHubInstance {
  /** Output only. The current state of the ApiHub instance. */
  state?:
    | "STATE_UNSPECIFIED"
    | "INACTIVE"
    | "CREATING"
    | "ACTIVE"
    | "UPDATING"
    | "DELETING"
    | "FAILED"
    | (string & {});
  /** Output only. Extra information about ApiHub instance state. Currently the message would be populated when state is `FAILED`. */
  stateMessage?: string;
  /** Required. Config of the ApiHub instance. */
  config?: GoogleCloudApihubV1Config;
  /** Optional. Description of the ApiHub instance. */
  description?: string;
  /** Output only. Creation timestamp. */
  createTime?: string;
  /** Output only. Last update timestamp. */
  updateTime?: string;
  /** Optional. Instance labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
  labels?: Record<string, string>;
  /** Identifier. Format: `projects/{project}/locations/{location}/apiHubInstances/{apiHubInstance}`. */
  name?: string;
}

export const GoogleCloudApihubV1ApiHubInstance: Schema.Schema<GoogleCloudApihubV1ApiHubInstance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    stateMessage: Schema.optional(Schema.String),
    config: Schema.optional(GoogleCloudApihubV1Config),
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1ApiHubInstance" });

export interface GoogleCloudApihubV1LookupApiHubInstanceResponse {
  /** API Hub instance for a project if it exists, empty otherwise. */
  apiHubInstance?: GoogleCloudApihubV1ApiHubInstance;
}

export const GoogleCloudApihubV1LookupApiHubInstanceResponse: Schema.Schema<GoogleCloudApihubV1LookupApiHubInstanceResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiHubInstance: Schema.optional(GoogleCloudApihubV1ApiHubInstance),
  }).annotate({
    identifier: "GoogleCloudApihubV1LookupApiHubInstanceResponse",
  });

export interface GoogleCloudApihubV1Definition {
  /** Output only. The type of the definition. */
  type?: "TYPE_UNSPECIFIED" | "SCHEMA" | (string & {});
  /** Output only. The time at which the definition was created. */
  createTime?: string;
  /** Output only. The time at which the definition was last updated. */
  updateTime?: string;
  /** Output only. The value of a schema definition. */
  schema?: GoogleCloudApihubV1Schema;
  /** Output only. The name of the spec from where the definition was parsed. Format is `projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}` */
  spec?: string;
  /** Optional. The list of user defined attributes associated with the definition resource. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource. */
  attributes?: Record<string, GoogleCloudApihubV1AttributeValues>;
  /** Identifier. The name of the definition. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}/definitions/{definition}` */
  name?: string;
}

export const GoogleCloudApihubV1Definition: Schema.Schema<GoogleCloudApihubV1Definition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    schema: Schema.optional(GoogleCloudApihubV1Schema),
    spec: Schema.optional(Schema.String),
    attributes: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudApihubV1AttributeValues),
    ),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1Definition" });

export interface GoogleCloudApihubV1ApiHubResource {
  /** This represents ApiOperation resource in search results. Only name, description, spec and details fields are populated in search results. */
  operation?: GoogleCloudApihubV1ApiOperation;
  /** This represents Version resource in search results. Only name, display_name, description, lifecycle, compliance and accreditation fields are populated in search results. */
  version?: GoogleCloudApihubV1Version;
  /** This represents Spec resource in search results. Only name, display_name, description, spec_type and documentation fields are populated in search results. */
  spec?: GoogleCloudApihubV1Spec;
  /** This represents Deployment resource in search results. Only name, display_name, description, deployment_type and api_versions fields are populated in search results. */
  deployment?: GoogleCloudApihubV1Deployment;
  /** This represents Api resource in search results. Only name, display_name, description and owner fields are populated in search results. */
  api?: GoogleCloudApihubV1Api;
  /** This represents Definition resource in search results. Only name field is populated in search results. */
  definition?: GoogleCloudApihubV1Definition;
}

export const GoogleCloudApihubV1ApiHubResource: Schema.Schema<GoogleCloudApihubV1ApiHubResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operation: Schema.optional(GoogleCloudApihubV1ApiOperation),
    version: Schema.optional(GoogleCloudApihubV1Version),
    spec: Schema.optional(GoogleCloudApihubV1Spec),
    deployment: Schema.optional(GoogleCloudApihubV1Deployment),
    api: Schema.optional(GoogleCloudApihubV1Api),
    definition: Schema.optional(GoogleCloudApihubV1Definition),
  }).annotate({ identifier: "GoogleCloudApihubV1ApiHubResource" });

export interface GoogleCloudApihubV1ListAttributesResponse {
  /** The list of all attributes. */
  attributes?: ReadonlyArray<GoogleCloudApihubV1Attribute>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleCloudApihubV1ListAttributesResponse: Schema.Schema<GoogleCloudApihubV1ListAttributesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attributes: Schema.optional(Schema.Array(GoogleCloudApihubV1Attribute)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1ListAttributesResponse" });

export interface GoogleCloudApihubV1ManagePluginInstanceSourceDataResponse {}

export const GoogleCloudApihubV1ManagePluginInstanceSourceDataResponse: Schema.Schema<GoogleCloudApihubV1ManagePluginInstanceSourceDataResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudApihubV1ManagePluginInstanceSourceDataResponse",
  });

export interface GoogleCloudApihubV1FlattenedApiVersionOperationDeploymentView {
  /** Optional. The deployment. */
  deployment?: GoogleCloudApihubV1Deployment;
  /** Optional. The API. */
  api?: GoogleCloudApihubV1Api;
  /** Optional. The API operation. */
  apiOperation?: GoogleCloudApihubV1ApiOperation;
  /** Optional. The version. */
  version?: GoogleCloudApihubV1Version;
}

export const GoogleCloudApihubV1FlattenedApiVersionOperationDeploymentView: Schema.Schema<GoogleCloudApihubV1FlattenedApiVersionOperationDeploymentView> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deployment: Schema.optional(GoogleCloudApihubV1Deployment),
    api: Schema.optional(GoogleCloudApihubV1Api),
    apiOperation: Schema.optional(GoogleCloudApihubV1ApiOperation),
    version: Schema.optional(GoogleCloudApihubV1Version),
  }).annotate({
    identifier: "GoogleCloudApihubV1FlattenedApiVersionOperationDeploymentView",
  });

export interface GoogleCloudApihubV1DependencyEntityReference {
  /** Output only. Display name of the entity. */
  displayName?: string;
  /** The resource name of an external API in the API Hub. Format: `projects/{project}/locations/{location}/externalApis/{external_api}` */
  externalApiResourceName?: string;
  /** The resource name of an operation in the API Hub. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}` */
  operationResourceName?: string;
}

export const GoogleCloudApihubV1DependencyEntityReference: Schema.Schema<GoogleCloudApihubV1DependencyEntityReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    externalApiResourceName: Schema.optional(Schema.String),
    operationResourceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1DependencyEntityReference" });

export interface GoogleCloudApihubV1DependencyErrorDetail {
  /** Optional. Timestamp at which the error was found. */
  errorTime?: string;
  /** Optional. Error in the dependency. */
  error?:
    | "ERROR_UNSPECIFIED"
    | "SUPPLIER_NOT_FOUND"
    | "SUPPLIER_RECREATED"
    | (string & {});
}

export const GoogleCloudApihubV1DependencyErrorDetail: Schema.Schema<GoogleCloudApihubV1DependencyErrorDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorTime: Schema.optional(Schema.String),
    error: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1DependencyErrorDetail" });

export interface GoogleCloudApihubV1Dependency {
  /** Optional. Human readable description corresponding of the dependency. */
  description?: string;
  /** Output only. The time at which the dependency was last updated. */
  updateTime?: string;
  /** Identifier. The name of the dependency in the API Hub. Format: `projects/{project}/locations/{location}/dependencies/{dependency}` */
  name?: string;
  /** Output only. State of the dependency. */
  state?: "STATE_UNSPECIFIED" | "PROPOSED" | "VALIDATED" | (string & {});
  /** Required. Immutable. The entity acting as the consumer in the dependency. */
  consumer?: GoogleCloudApihubV1DependencyEntityReference;
  /** Output only. Error details of a dependency if the system has detected it internally. */
  errorDetail?: GoogleCloudApihubV1DependencyErrorDetail;
  /** Output only. The time at which the dependency was created. */
  createTime?: string;
  /** Required. Immutable. The entity acting as the supplier in the dependency. */
  supplier?: GoogleCloudApihubV1DependencyEntityReference;
  /** Output only. Discovery mode of the dependency. */
  discoveryMode?: "DISCOVERY_MODE_UNSPECIFIED" | "MANUAL" | (string & {});
  /** Optional. The list of user defined attributes associated with the dependency resource. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource. */
  attributes?: Record<string, GoogleCloudApihubV1AttributeValues>;
}

export const GoogleCloudApihubV1Dependency: Schema.Schema<GoogleCloudApihubV1Dependency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    consumer: Schema.optional(GoogleCloudApihubV1DependencyEntityReference),
    errorDetail: Schema.optional(GoogleCloudApihubV1DependencyErrorDetail),
    createTime: Schema.optional(Schema.String),
    supplier: Schema.optional(GoogleCloudApihubV1DependencyEntityReference),
    discoveryMode: Schema.optional(Schema.String),
    attributes: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudApihubV1AttributeValues),
    ),
  }).annotate({ identifier: "GoogleCloudApihubV1Dependency" });

export interface GoogleCloudApihubV1ListDependenciesResponse {
  /** The dependency resources present in the API hub. */
  dependencies?: ReadonlyArray<GoogleCloudApihubV1Dependency>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleCloudApihubV1ListDependenciesResponse: Schema.Schema<GoogleCloudApihubV1ListDependenciesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dependencies: Schema.optional(Schema.Array(GoogleCloudApihubV1Dependency)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1ListDependenciesResponse" });

export interface GoogleCloudApihubV1SourceEnvironment {
  /** Required. The name of the environment at the source. This should map to Deployment. */
  sourceEnvironment?: string;
  /** The location where additional information about source environments can be found. The location should be relative path of the environment manifest with respect to a plugin instance. */
  sourceEnvironmentUri?: string;
  /** Optional. The time at which the environment was created at the source. */
  createTime?: string;
  /** Optional. The time at which the environment was last updated at the source. */
  updateTime?: string;
}

export const GoogleCloudApihubV1SourceEnvironment: Schema.Schema<GoogleCloudApihubV1SourceEnvironment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceEnvironment: Schema.optional(Schema.String),
    sourceEnvironmentUri: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1SourceEnvironment" });

export interface GoogleCloudApihubV1PluginInstance {
  /** Output only. The current state of the plugin instance (e.g., enabled, disabled, provisioning). */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "APPLYING_CONFIG"
    | "ERROR"
    | "FAILED"
    | "DELETING"
    | (string & {});
  /** Optional. The source environment's config present in the gateway instance linked to the plugin instance. The key is the `source_environment` name from the SourceEnvironment message. */
  sourceEnvironmentsConfig?: Record<
    string,
    GoogleCloudApihubV1SourceEnvironment
  >;
  /** Optional. The authentication information for this plugin instance. */
  authConfig?: GoogleCloudApihubV1AuthConfig;
  /** Optional. The source project id of the plugin instance. This will be the id of runtime project in case of Google Cloud based plugins and org id in case of non-Google Cloud based plugins. This field will be a required field for Google provided on-ramp plugins. */
  sourceProjectId?: string;
  /** Optional. The additional information for this plugin instance corresponding to the additional config template of the plugin. This information will be sent to plugin hosting service on each call to plugin hosted service. The key will be the config_variable_template.display_name to uniquely identify the config variable. */
  additionalConfig?: Record<string, GoogleCloudApihubV1ConfigVariable>;
  /** Output only. Timestamp indicating when the plugin instance was created. */
  createTime?: string;
  /** Required. The display name for this plugin instance. Max length is 255 characters. */
  displayName?: string;
  /** Required. The action status for the plugin instance. */
  actions?: ReadonlyArray<GoogleCloudApihubV1PluginInstanceAction>;
  /** Identifier. The unique name of the plugin instance resource. Format: `projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}` */
  name?: string;
  /** Output only. Error message describing the failure, if any, during Create, Delete or ApplyConfig operation corresponding to the plugin instance.This field will only be populated if the plugin instance is in the ERROR or FAILED state. */
  errorMessage?: string;
  /** Output only. Timestamp indicating when the plugin instance was last updated. */
  updateTime?: string;
}

export const GoogleCloudApihubV1PluginInstance: Schema.Schema<GoogleCloudApihubV1PluginInstance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    sourceEnvironmentsConfig: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudApihubV1SourceEnvironment),
    ),
    authConfig: Schema.optional(GoogleCloudApihubV1AuthConfig),
    sourceProjectId: Schema.optional(Schema.String),
    additionalConfig: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudApihubV1ConfigVariable),
    ),
    createTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    actions: Schema.optional(
      Schema.Array(GoogleCloudApihubV1PluginInstanceAction),
    ),
    name: Schema.optional(Schema.String),
    errorMessage: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1PluginInstance" });

export interface GoogleCloudApihubV1ApigeeEdgeConfig {
  /** Optional. The filter to apply on the resources managed by the gateway plugin instance. If provided this filter applies environment specific filtering. */
  environmentFilter?: GoogleCloudApihubV1EnvironmentFilter;
}

export const GoogleCloudApihubV1ApigeeEdgeConfig: Schema.Schema<GoogleCloudApihubV1ApigeeEdgeConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    environmentFilter: Schema.optional(GoogleCloudApihubV1EnvironmentFilter),
  }).annotate({ identifier: "GoogleCloudApihubV1ApigeeEdgeConfig" });

export interface GoogleCloudApihubV1ApigeeXHybridConfig {
  /** Optional. The filter to apply on the resources managed by the gateway plugin instance. If provided this filter applies environment specific filtering. */
  environmentFilter?: GoogleCloudApihubV1EnvironmentFilter;
}

export const GoogleCloudApihubV1ApigeeXHybridConfig: Schema.Schema<GoogleCloudApihubV1ApigeeXHybridConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    environmentFilter: Schema.optional(GoogleCloudApihubV1EnvironmentFilter),
  }).annotate({ identifier: "GoogleCloudApihubV1ApigeeXHybridConfig" });

export interface GoogleCloudApihubV1GatewayPluginConfig {
  /** Required. The name of the gateway plugin instance for which the config is to be specified. Format: projects/{project}/locations/{location}/plugins/{plugin}/pluginInstances/{plugin_instance} */
  pluginInstance?: string;
  /** Configuration for Apigee Edge gateways. */
  apigeeEdgeConfig?: GoogleCloudApihubV1ApigeeEdgeConfig;
  /** Configuration for Apigee OPDK gateways. */
  apigeeOpdkConfig?: GoogleCloudApihubV1ApigeeOPDKConfig;
  /** Configuration for Apigee X and Apigee Hybrid gateways. */
  apigeeXHybridConfig?: GoogleCloudApihubV1ApigeeXHybridConfig;
}

export const GoogleCloudApihubV1GatewayPluginConfig: Schema.Schema<GoogleCloudApihubV1GatewayPluginConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pluginInstance: Schema.optional(Schema.String),
    apigeeEdgeConfig: Schema.optional(GoogleCloudApihubV1ApigeeEdgeConfig),
    apigeeOpdkConfig: Schema.optional(GoogleCloudApihubV1ApigeeOPDKConfig),
    apigeeXHybridConfig: Schema.optional(
      GoogleCloudApihubV1ApigeeXHybridConfig,
    ),
  }).annotate({ identifier: "GoogleCloudApihubV1GatewayPluginConfig" });

export interface GoogleCloudApihubV1GatewayPluginAddonConfig {
  /** Required. The list of gateway plugin configs for which the addon is enabled. Each gateway plugin config should have a unique plugin instance. */
  gatewayPluginConfigs?: ReadonlyArray<GoogleCloudApihubV1GatewayPluginConfig>;
}

export const GoogleCloudApihubV1GatewayPluginAddonConfig: Schema.Schema<GoogleCloudApihubV1GatewayPluginAddonConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gatewayPluginConfigs: Schema.optional(
      Schema.Array(GoogleCloudApihubV1GatewayPluginConfig),
    ),
  }).annotate({ identifier: "GoogleCloudApihubV1GatewayPluginAddonConfig" });

export interface GoogleRpcStatus {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
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

export interface GoogleCloudApihubV1SearchResourcesRequest {
  /** Optional. A page token, received from a previous SearchResources call. Specify this parameter to retrieve the next page of transactions. When paginating, you must specify the `page_token` parameter and all the other parameters except page_size should be specified with the same value which was used in the previous call. If the other fields are set with a different value than the previous call then `INVALID_ARGUMENT` error is returned. */
  pageToken?: string;
  /** Required. The free text search query. This query can contain keywords which could be related to any detail of the API-Hub resources such display names, descriptions, attributes etc. */
  query?: string;
  /** Optional. The maximum number of search results to return. The service may return fewer than this value. If unspecified at most 10 search results will be returned. If value is negative then `INVALID_ARGUMENT` error is returned. The maximum value is 25; values above 25 will be coerced to 25. While paginating, you can specify a new page size parameter for each page of search results to be listed. */
  pageSize?: number;
  /** Optional. An expression that filters the list of search results. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`. Filters are not case sensitive. The following field names are eligible for filtering: * `resource_type` - The type of resource in the search results. Must be one of the following: `Api`, `ApiOperation`, `Deployment`, `Definition`, `Spec` or `Version`. This field can only be specified once in the filter. Here are is an example: * `resource_type = Api` - The resource_type is _Api_. */
  filter?: string;
}

export const GoogleCloudApihubV1SearchResourcesRequest: Schema.Schema<GoogleCloudApihubV1SearchResourcesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String),
    query: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    filter: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1SearchResourcesRequest" });

export interface GoogleCloudApihubV1StyleGuideContents {
  /** Required. The contents of the style guide. */
  contents?: string;
  /** Required. The mime type of the content. */
  mimeType?: string;
}

export const GoogleCloudApihubV1StyleGuideContents: Schema.Schema<GoogleCloudApihubV1StyleGuideContents> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contents: Schema.optional(Schema.String),
    mimeType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1StyleGuideContents" });

export interface GoogleCloudApihubV1StyleGuide {
  /** Identifier. The name of the style guide. Format: `projects/{project}/locations/{location}/plugins/{plugin}/styleGuide` */
  name?: string;
  /** Required. Input only. The contents of the uploaded style guide. */
  contents?: GoogleCloudApihubV1StyleGuideContents;
  /** Required. Target linter for the style guide. */
  linter?: "LINTER_UNSPECIFIED" | "SPECTRAL" | "OTHER" | (string & {});
}

export const GoogleCloudApihubV1StyleGuide: Schema.Schema<GoogleCloudApihubV1StyleGuide> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    contents: Schema.optional(GoogleCloudApihubV1StyleGuideContents),
    linter: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1StyleGuide" });

export interface GoogleCloudApihubV1AllDataAddonConfig {
  /** Required. If true, the addon is enabled for all data in the API hub. */
  enabled?: boolean;
}

export const GoogleCloudApihubV1AllDataAddonConfig: Schema.Schema<GoogleCloudApihubV1AllDataAddonConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudApihubV1AllDataAddonConfig" });

export interface GoogleCloudApihubV1ListDeploymentsResponse {
  /** The deployment resources present in the API hub. */
  deployments?: ReadonlyArray<GoogleCloudApihubV1Deployment>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleCloudApihubV1ListDeploymentsResponse: Schema.Schema<GoogleCloudApihubV1ListDeploymentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deployments: Schema.optional(Schema.Array(GoogleCloudApihubV1Deployment)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1ListDeploymentsResponse" });

export interface GoogleLongrunningOperation {
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The error result of the operation in case of failure or cancellation. */
  error?: GoogleRpcStatus;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
}

export const GoogleLongrunningOperation: Schema.Schema<GoogleLongrunningOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    error: Schema.optional(GoogleRpcStatus),
    done: Schema.optional(Schema.Boolean),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleLongrunningOperation" });

export interface GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse {
  /** Runtime project attachment for a project if exists, empty otherwise. */
  runtimeProjectAttachment?: GoogleCloudApihubV1RuntimeProjectAttachment;
}

export const GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse: Schema.Schema<GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    runtimeProjectAttachment: Schema.optional(
      GoogleCloudApihubV1RuntimeProjectAttachment,
    ),
  }).annotate({
    identifier: "GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse",
  });

export interface GoogleCloudApihubV1SearchResult {
  /** This represents the ApiHubResource. Note: Only selected fields of the resources are populated in response. */
  resource?: GoogleCloudApihubV1ApiHubResource;
}

export const GoogleCloudApihubV1SearchResult: Schema.Schema<GoogleCloudApihubV1SearchResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(GoogleCloudApihubV1ApiHubResource),
  }).annotate({ identifier: "GoogleCloudApihubV1SearchResult" });

export interface GoogleCloudApihubV1SearchResourcesResponse {
  /** List of search results according to the filter and search query specified. The order of search results represents the ranking. */
  searchResults?: ReadonlyArray<GoogleCloudApihubV1SearchResult>;
  /** Pass this token in the SearchResourcesRequest to continue to list results. If all results have been returned, this field is an empty string or not present in the response. */
  nextPageToken?: string;
}

export const GoogleCloudApihubV1SearchResourcesResponse: Schema.Schema<GoogleCloudApihubV1SearchResourcesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    searchResults: Schema.optional(
      Schema.Array(GoogleCloudApihubV1SearchResult),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1SearchResourcesResponse" });

export interface GoogleCloudApihubV1MatchResult {
  /** Output only. The name of the matched API Operation. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}` */
  name?: string;
}

export const GoogleCloudApihubV1MatchResult: Schema.Schema<GoogleCloudApihubV1MatchResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1MatchResult" });

export interface GoogleCloudApihubV1ManagePluginInstanceSourceDataRequest {
  /** Required. Type of data to be managed. */
  dataType?:
    | "DATA_TYPE_UNSPECIFIED"
    | "PROXY_DEPLOYMENT_MANIFEST"
    | "ENVIRONMENT_MANIFEST"
    | "PROXY_BUNDLE"
    | "SHARED_FLOW_BUNDLE"
    | (string & {});
  /** Required. Data to be managed. */
  data?: string;
  /** Required. Relative path of data being managed for a given plugin instance. */
  relativePath?: string;
  /** Required. Action to be performed. */
  action?: "ACTION_UNSPECIFIED" | "UPLOAD" | "DELETE" | (string & {});
}

export const GoogleCloudApihubV1ManagePluginInstanceSourceDataRequest: Schema.Schema<GoogleCloudApihubV1ManagePluginInstanceSourceDataRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataType: Schema.optional(Schema.String),
    data: Schema.optional(Schema.String),
    relativePath: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudApihubV1ManagePluginInstanceSourceDataRequest",
  });

export interface GoogleLongrunningListOperationsResponse {
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<GoogleLongrunningOperation>;
}

export const GoogleLongrunningListOperationsResponse: Schema.Schema<GoogleLongrunningListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    operations: Schema.optional(Schema.Array(GoogleLongrunningOperation)),
  }).annotate({ identifier: "GoogleLongrunningListOperationsResponse" });

export interface GoogleCloudApihubV1FlattenedApiVersionDeploymentView {
  /** Optional. The API. */
  api?: GoogleCloudApihubV1Api;
  /** Optional. The version. */
  version?: GoogleCloudApihubV1Version;
  /** Optional. The deployment. */
  deployment?: GoogleCloudApihubV1Deployment;
}

export const GoogleCloudApihubV1FlattenedApiVersionDeploymentView: Schema.Schema<GoogleCloudApihubV1FlattenedApiVersionDeploymentView> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    api: Schema.optional(GoogleCloudApihubV1Api),
    version: Schema.optional(GoogleCloudApihubV1Version),
    deployment: Schema.optional(GoogleCloudApihubV1Deployment),
  }).annotate({
    identifier: "GoogleCloudApihubV1FlattenedApiVersionDeploymentView",
  });

export interface GoogleCloudApihubV1ApiView {
  /** MCP server view. */
  mcpServerView?: GoogleCloudApihubV1FlattenedApiVersionDeploymentView;
  /** MCP tools view. */
  mcpToolView?: GoogleCloudApihubV1FlattenedApiVersionOperationDeploymentView;
}

export const GoogleCloudApihubV1ApiView: Schema.Schema<GoogleCloudApihubV1ApiView> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mcpServerView: Schema.optional(
      GoogleCloudApihubV1FlattenedApiVersionDeploymentView,
    ),
    mcpToolView: Schema.optional(
      GoogleCloudApihubV1FlattenedApiVersionOperationDeploymentView,
    ),
  }).annotate({ identifier: "GoogleCloudApihubV1ApiView" });

export interface GoogleCloudApihubV1RetrieveApiViewsResponse {
  /** Output only. The list of API views. */
  apiViews?: ReadonlyArray<GoogleCloudApihubV1ApiView>;
  /** Next page token. */
  nextPageToken?: string;
}

export const GoogleCloudApihubV1RetrieveApiViewsResponse: Schema.Schema<GoogleCloudApihubV1RetrieveApiViewsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiViews: Schema.optional(Schema.Array(GoogleCloudApihubV1ApiView)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1RetrieveApiViewsResponse" });

export interface GoogleCloudApihubV1AddonConfig {
  /** Configuration for gateway plugin addons. */
  gatewayPluginAddonConfig?: GoogleCloudApihubV1GatewayPluginAddonConfig;
  /** Configuration for addons which act on all data in the API hub. */
  allDataAddonConfig?: GoogleCloudApihubV1AllDataAddonConfig;
}

export const GoogleCloudApihubV1AddonConfig: Schema.Schema<GoogleCloudApihubV1AddonConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gatewayPluginAddonConfig: Schema.optional(
      GoogleCloudApihubV1GatewayPluginAddonConfig,
    ),
    allDataAddonConfig: Schema.optional(GoogleCloudApihubV1AllDataAddonConfig),
  }).annotate({ identifier: "GoogleCloudApihubV1AddonConfig" });

export interface GoogleCloudApihubV1ManageAddonConfigRequest {
  /** Required. The config of the addon to be managed. This config will replace the config present in the addon. The type of the config should match the config type already present in the addon. */
  config?: GoogleCloudApihubV1AddonConfig;
}

export const GoogleCloudApihubV1ManageAddonConfigRequest: Schema.Schema<GoogleCloudApihubV1ManageAddonConfigRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    config: Schema.optional(GoogleCloudApihubV1AddonConfig),
  }).annotate({ identifier: "GoogleCloudApihubV1ManageAddonConfigRequest" });

export interface GoogleCloudApihubV1FetchAdditionalSpecContentResponse {
  /** The additional spec content. */
  additionalSpecContent?: GoogleCloudApihubV1AdditionalSpecContent;
}

export const GoogleCloudApihubV1FetchAdditionalSpecContentResponse: Schema.Schema<GoogleCloudApihubV1FetchAdditionalSpecContentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    additionalSpecContent: Schema.optional(
      GoogleCloudApihubV1AdditionalSpecContent,
    ),
  }).annotate({
    identifier: "GoogleCloudApihubV1FetchAdditionalSpecContentResponse",
  });

export interface GoogleCloudApihubV1HostProjectRegistration {
  /** Required. Immutable. Google cloud project name in the format: "projects/abc" or "projects/123". As input, project name with either project id or number are accepted. As output, this field will contain project number. */
  gcpProject?: string;
  /** Output only. The time at which the host project registration was created. */
  createTime?: string;
  /** Identifier. The name of the host project registration. Format: "projects/{project}/locations/{location}/hostProjectRegistrations/{host_project_registration}". */
  name?: string;
}

export const GoogleCloudApihubV1HostProjectRegistration: Schema.Schema<GoogleCloudApihubV1HostProjectRegistration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcpProject: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1HostProjectRegistration" });

export interface GoogleCloudApihubV1ListHostProjectRegistrationsResponse {
  /** The list of host project registrations. */
  hostProjectRegistrations?: ReadonlyArray<GoogleCloudApihubV1HostProjectRegistration>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleCloudApihubV1ListHostProjectRegistrationsResponse: Schema.Schema<GoogleCloudApihubV1ListHostProjectRegistrationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hostProjectRegistrations: Schema.optional(
      Schema.Array(GoogleCloudApihubV1HostProjectRegistration),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudApihubV1ListHostProjectRegistrationsResponse",
  });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface GoogleCloudApihubV1LintSpecRequest {}

export const GoogleCloudApihubV1LintSpecRequest: Schema.Schema<GoogleCloudApihubV1LintSpecRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudApihubV1LintSpecRequest",
  });

export interface GoogleCloudApihubV1Addon {
  /** Output only. The state of the addon. */
  state?:
    | "ADDON_STATE_UNSPECIFIED"
    | "ACTIVE"
    | "UPDATING"
    | "ERROR"
    | "INACTIVE"
    | (string & {});
  /** Required. The configuration of the addon. */
  config?: GoogleCloudApihubV1AddonConfig;
  /** Required. The display name of the addon. */
  displayName?: string;
  /** Optional. The description of the addon. */
  description?: string;
  /** Output only. The time at which the addon was created. */
  createTime?: string;
  /** Output only. The time at which the addon was last updated. */
  updateTime?: string;
  /** Required. The data source on which the addon operates. This determines which field in the `config` oneof is used. */
  dataSource?:
    | "DATA_SOURCE_UNSPECIFIED"
    | "PLUGIN_INSTANCE"
    | "ALL_DATA"
    | (string & {});
  /** Identifier. The name of the addon to enable. Format: `projects/{project}/locations/{location}/addons/{addon}`. */
  name?: string;
}

export const GoogleCloudApihubV1Addon: Schema.Schema<GoogleCloudApihubV1Addon> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    config: Schema.optional(GoogleCloudApihubV1AddonConfig),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    dataSource: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1Addon" });

export interface GoogleCloudApihubV1ListAddonsResponse {
  /** The list of addons. */
  addons?: ReadonlyArray<GoogleCloudApihubV1Addon>;
  /** A token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const GoogleCloudApihubV1ListAddonsResponse: Schema.Schema<GoogleCloudApihubV1ListAddonsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    addons: Schema.optional(Schema.Array(GoogleCloudApihubV1Addon)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1ListAddonsResponse" });

export interface GoogleCloudApihubV1EnablePluginRequest {}

export const GoogleCloudApihubV1EnablePluginRequest: Schema.Schema<GoogleCloudApihubV1EnablePluginRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudApihubV1EnablePluginRequest",
  });

export interface GoogleCloudApihubV1OperationMetadata {
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
}

export const GoogleCloudApihubV1OperationMetadata: Schema.Schema<GoogleCloudApihubV1OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    endTime: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1OperationMetadata" });

export interface GoogleCloudApihubV1ListVersionsResponse {
  /** The versions corresponding to an API. */
  versions?: ReadonlyArray<GoogleCloudApihubV1Version>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleCloudApihubV1ListVersionsResponse: Schema.Schema<GoogleCloudApihubV1ListVersionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versions: Schema.optional(Schema.Array(GoogleCloudApihubV1Version)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1ListVersionsResponse" });

export interface GoogleCloudApihubV1DiscoveredApiOperation {
  /** Output only. Update time stamp of the discovered API operation in API Hub. */
  updateTime?: string;
  /** Optional. An HTTP Operation. */
  httpOperation?: GoogleCloudApihubV1HttpOperationDetails;
  /** Output only. The metadata of the source from which the api operation was collected. */
  sourceMetadata?: GoogleCloudApihubV1SourceMetadata;
  /** Identifier. The name of the discovered API Operation. Format: `projects/{project}/locations/{location}/discoveredApiObservations/{discovered_api_observation}/discoveredApiOperations/{discovered_api_operation}` */
  name?: string;
  /** Output only. The classification of the discovered API operation. */
  classification?:
    | "CLASSIFICATION_UNSPECIFIED"
    | "KNOWN"
    | "UNKNOWN"
    | (string & {});
  /** Optional. First seen time stamp */
  firstSeenTime?: string;
  /** Output only. Create time stamp of the discovered API operation in API Hub. */
  createTime?: string;
  /** Optional. The number of occurrences of this API Operation. */
  count?: string;
  /** Optional. Last seen time stamp */
  lastSeenTime?: string;
  /** Output only. The list of matched results for the discovered API operation. This will be populated only if the classification is known. The current usecase is for a single match. Keeping it repeated to support multiple matches in future. */
  matchResults?: ReadonlyArray<GoogleCloudApihubV1MatchResult>;
}

export const GoogleCloudApihubV1DiscoveredApiOperation: Schema.Schema<GoogleCloudApihubV1DiscoveredApiOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    httpOperation: Schema.optional(GoogleCloudApihubV1HttpOperationDetails),
    sourceMetadata: Schema.optional(GoogleCloudApihubV1SourceMetadata),
    name: Schema.optional(Schema.String),
    classification: Schema.optional(Schema.String),
    firstSeenTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    count: Schema.optional(Schema.String),
    lastSeenTime: Schema.optional(Schema.String),
    matchResults: Schema.optional(Schema.Array(GoogleCloudApihubV1MatchResult)),
  }).annotate({ identifier: "GoogleCloudApihubV1DiscoveredApiOperation" });

export interface GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse {
  /** List of runtime project attachments. */
  runtimeProjectAttachments?: ReadonlyArray<GoogleCloudApihubV1RuntimeProjectAttachment>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse: Schema.Schema<GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    runtimeProjectAttachments: Schema.optional(
      Schema.Array(GoogleCloudApihubV1RuntimeProjectAttachment),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse",
  });

export interface GoogleCloudApihubV1ListPluginInstancesResponse {
  /** The plugin instances from the specified parent resource. */
  pluginInstances?: ReadonlyArray<GoogleCloudApihubV1PluginInstance>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleCloudApihubV1ListPluginInstancesResponse: Schema.Schema<GoogleCloudApihubV1ListPluginInstancesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pluginInstances: Schema.optional(
      Schema.Array(GoogleCloudApihubV1PluginInstance),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudApihubV1ListPluginInstancesResponse" });

export interface GoogleCloudApihubV1ListDiscoveredApiOperationsResponse {
  /** The DiscoveredApiOperations from the specified project, location and DiscoveredApiObservation. */
  discoveredApiOperations?: ReadonlyArray<GoogleCloudApihubV1DiscoveredApiOperation>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleCloudApihubV1ListDiscoveredApiOperationsResponse: Schema.Schema<GoogleCloudApihubV1ListDiscoveredApiOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    discoveredApiOperations: Schema.optional(
      Schema.Array(GoogleCloudApihubV1DiscoveredApiOperation),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudApihubV1ListDiscoveredApiOperationsResponse",
  });

export interface GoogleCloudApihubV1DisablePluginRequest {}

export const GoogleCloudApihubV1DisablePluginRequest: Schema.Schema<GoogleCloudApihubV1DisablePluginRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudApihubV1DisablePluginRequest",
  });

export interface GoogleLongrunningCancelOperationRequest {}

export const GoogleLongrunningCancelOperationRequest: Schema.Schema<GoogleLongrunningCancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleLongrunningCancelOperationRequest",
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRequest>;

export type GetProjectsLocationsResponse = GoogleCloudLocationLocation;
export const GetProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudLocationLocation;

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

export interface SearchResourcesProjectsLocationsRequest {
  /** Required. The resource name of the location which will be of the type `projects/{project_id}/locations/{location_id}`. This field is used to identify the instance of API-Hub in which resources should be searched. */
  location: string;
  /** Request body */
  body?: GoogleCloudApihubV1SearchResourcesRequest;
}

export const SearchResourcesProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.HttpPath("location")),
    body: Schema.optional(GoogleCloudApihubV1SearchResourcesRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+location}:searchResources",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SearchResourcesProjectsLocationsRequest>;

export type SearchResourcesProjectsLocationsResponse =
  GoogleCloudApihubV1SearchResourcesResponse;
export const SearchResourcesProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1SearchResourcesResponse;

export type SearchResourcesProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Search across API-Hub resources. */
export const searchResourcesProjectsLocations: API.OperationMethod<
  SearchResourcesProjectsLocationsRequest,
  SearchResourcesProjectsLocationsResponse,
  SearchResourcesProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchResourcesProjectsLocationsRequest,
  output: SearchResourcesProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RetrieveApiViewsProjectsLocationsRequest {
  /** Optional. A page token, received from a previous `RetrieveApiViews` call. Provide this to retrieve the subsequent page. */
  pageToken?: string;
  /** Optional. The filter expression. */
  filter?: string;
  /** Optional. The maximum number of results to return. Default to 100. */
  pageSize?: number;
  /** Required. The parent resource name. Format: `projects/{project}/locations/{location}`. */
  parent: string;
  /** Required. The view type to return. */
  view?:
    | "API_VIEW_TYPE_UNSPECIFIED"
    | "MCP_SERVER"
    | "MCP_TOOL"
    | (string & {});
}

export const RetrieveApiViewsProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}:retrieveApiViews" }),
    svc,
  ) as unknown as Schema.Schema<RetrieveApiViewsProjectsLocationsRequest>;

export type RetrieveApiViewsProjectsLocationsResponse =
  GoogleCloudApihubV1RetrieveApiViewsResponse;
export const RetrieveApiViewsProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1RetrieveApiViewsResponse;

export type RetrieveApiViewsProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve API views. */
export const retrieveApiViewsProjectsLocations: API.PaginatedOperationMethod<
  RetrieveApiViewsProjectsLocationsRequest,
  RetrieveApiViewsProjectsLocationsResponse,
  RetrieveApiViewsProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: RetrieveApiViewsProjectsLocationsRequest,
  output: RetrieveApiViewsProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CollectApiDataProjectsLocationsRequest {
  /** Required. The regional location of the API hub instance and its resources. Format: `projects/{project}/locations/{location}` */
  location: string;
  /** Request body */
  body?: GoogleCloudApihubV1CollectApiDataRequest;
}

export const CollectApiDataProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.HttpPath("location")),
    body: Schema.optional(GoogleCloudApihubV1CollectApiDataRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+location}:collectApiData",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CollectApiDataProjectsLocationsRequest>;

export type CollectApiDataProjectsLocationsResponse =
  GoogleLongrunningOperation;
export const CollectApiDataProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CollectApiDataProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Collect API data from a source and push it to Hub's collect layer. */
export const collectApiDataProjectsLocations: API.OperationMethod<
  CollectApiDataProjectsLocationsRequest,
  CollectApiDataProjectsLocationsResponse,
  CollectApiDataProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CollectApiDataProjectsLocationsRequest,
  output: CollectApiDataProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface LookupRuntimeProjectAttachmentProjectsLocationsRequest {
  /** Required. Runtime project ID to look up runtime project attachment for. Lookup happens across all regions. Expected format: `projects/{project}/locations/{location}`. */
  name: string;
}

export const LookupRuntimeProjectAttachmentProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+name}:lookupRuntimeProjectAttachment",
    }),
    svc,
  ) as unknown as Schema.Schema<LookupRuntimeProjectAttachmentProjectsLocationsRequest>;

export type LookupRuntimeProjectAttachmentProjectsLocationsResponse =
  GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse;
export const LookupRuntimeProjectAttachmentProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse;

export type LookupRuntimeProjectAttachmentProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Look up a runtime project attachment. This API can be called in the context of any project. */
export const lookupRuntimeProjectAttachmentProjectsLocations: API.OperationMethod<
  LookupRuntimeProjectAttachmentProjectsLocationsRequest,
  LookupRuntimeProjectAttachmentProjectsLocationsResponse,
  LookupRuntimeProjectAttachmentProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LookupRuntimeProjectAttachmentProjectsLocationsRequest,
  output: LookupRuntimeProjectAttachmentProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsRequest {
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse =
  GoogleCloudLocationListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudLocationListLocationsResponse;

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

export interface DeleteProjectsLocationsExternalApisRequest {
  /** Required. The name of the External API resource to delete. Format: `projects/{project}/locations/{location}/externalApis/{externalApi}` */
  name: string;
}

export const DeleteProjectsLocationsExternalApisRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsExternalApisRequest>;

export type DeleteProjectsLocationsExternalApisResponse = Empty;
export const DeleteProjectsLocationsExternalApisResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsExternalApisError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete an External API resource in the API hub. */
export const deleteProjectsLocationsExternalApis: API.OperationMethod<
  DeleteProjectsLocationsExternalApisRequest,
  DeleteProjectsLocationsExternalApisResponse,
  DeleteProjectsLocationsExternalApisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsExternalApisRequest,
  output: DeleteProjectsLocationsExternalApisResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsExternalApisRequest {
  /** Optional. The ID to use for the External API resource, which will become the final component of the External API's resource name. This field is optional. * If provided, the same will be used. The service will throw an error if the specified id is already used by another External API resource in the API hub. * If not provided, a system generated id will be used. This value should be 4-500 characters, and valid characters are /a-z[0-9]-_/. */
  externalApiId?: string;
  /** Required. The parent resource for the External API resource. Format: `projects/{project}/locations/{location}` */
  parent: string;
  /** Request body */
  body?: GoogleCloudApihubV1ExternalApi;
}

export const CreateProjectsLocationsExternalApisRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    externalApiId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("externalApiId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudApihubV1ExternalApi).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/externalApis",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsExternalApisRequest>;

export type CreateProjectsLocationsExternalApisResponse =
  GoogleCloudApihubV1ExternalApi;
export const CreateProjectsLocationsExternalApisResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1ExternalApi;

export type CreateProjectsLocationsExternalApisError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create an External API resource in the API hub. */
export const createProjectsLocationsExternalApis: API.OperationMethod<
  CreateProjectsLocationsExternalApisRequest,
  CreateProjectsLocationsExternalApisResponse,
  CreateProjectsLocationsExternalApisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsExternalApisRequest,
  output: CreateProjectsLocationsExternalApisResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsExternalApisRequest {
  /** Required. The list of fields to update. */
  updateMask?: string;
  /** Identifier. Format: `projects/{project}/locations/{location}/externalApi/{externalApi}`. */
  name: string;
  /** Request body */
  body?: GoogleCloudApihubV1ExternalApi;
}

export const PatchProjectsLocationsExternalApisRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudApihubV1ExternalApi).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsExternalApisRequest>;

export type PatchProjectsLocationsExternalApisResponse =
  GoogleCloudApihubV1ExternalApi;
export const PatchProjectsLocationsExternalApisResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1ExternalApi;

export type PatchProjectsLocationsExternalApisError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update an External API resource in the API hub. The following fields can be updated: * display_name * description * documentation * endpoints * paths The update_mask should be used to specify the fields being updated. */
export const patchProjectsLocationsExternalApis: API.OperationMethod<
  PatchProjectsLocationsExternalApisRequest,
  PatchProjectsLocationsExternalApisResponse,
  PatchProjectsLocationsExternalApisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsExternalApisRequest,
  output: PatchProjectsLocationsExternalApisResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsExternalApisRequest {
  /** Optional. The maximum number of External API resources to return. The service may return fewer than this value. If unspecified, at most 50 ExternalApis will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListExternalApis` call. Provide this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to `ListExternalApis` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The parent, which owns this collection of External API resources. Format: `projects/{project}/locations/{location}` */
  parent: string;
}

export const ListProjectsLocationsExternalApisRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/externalApis" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsExternalApisRequest>;

export type ListProjectsLocationsExternalApisResponse =
  GoogleCloudApihubV1ListExternalApisResponse;
export const ListProjectsLocationsExternalApisResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1ListExternalApisResponse;

export type ListProjectsLocationsExternalApisError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List External API resources in the API hub. */
export const listProjectsLocationsExternalApis: API.PaginatedOperationMethod<
  ListProjectsLocationsExternalApisRequest,
  ListProjectsLocationsExternalApisResponse,
  ListProjectsLocationsExternalApisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsExternalApisRequest,
  output: ListProjectsLocationsExternalApisResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsExternalApisRequest {
  /** Required. The name of the External API resource to retrieve. Format: `projects/{project}/locations/{location}/externalApis/{externalApi}` */
  name: string;
}

export const GetProjectsLocationsExternalApisRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsExternalApisRequest>;

export type GetProjectsLocationsExternalApisResponse =
  GoogleCloudApihubV1ExternalApi;
export const GetProjectsLocationsExternalApisResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1ExternalApi;

export type GetProjectsLocationsExternalApisError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get details about an External API resource in the API hub. */
export const getProjectsLocationsExternalApis: API.OperationMethod<
  GetProjectsLocationsExternalApisRequest,
  GetProjectsLocationsExternalApisResponse,
  GetProjectsLocationsExternalApisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsExternalApisRequest,
  output: GetProjectsLocationsExternalApisResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsPluginsRequest {
  /** Optional. The ID to use for the Plugin resource, which will become the final component of the Plugin's resource name. This field is optional. * If provided, the same will be used. The service will throw an error if the specified id is already used by another Plugin resource in the API hub instance. * If not provided, a system generated id will be used. This value should be 4-63 characters, overall resource name which will be of format `projects/{project}/locations/{location}/plugins/{plugin}`, its length is limited to 1000 characters and valid characters are /a-z[0-9]-_/. */
  pluginId?: string;
  /** Required. The parent resource where this plugin will be created. Format: `projects/{project}/locations/{location}`. */
  parent: string;
  /** Request body */
  body?: GoogleCloudApihubV1Plugin;
}

export const CreateProjectsLocationsPluginsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pluginId: Schema.optional(Schema.String).pipe(T.HttpQuery("pluginId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudApihubV1Plugin).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/plugins", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsPluginsRequest>;

export type CreateProjectsLocationsPluginsResponse = GoogleCloudApihubV1Plugin;
export const CreateProjectsLocationsPluginsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1Plugin;

export type CreateProjectsLocationsPluginsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create an API Hub plugin resource in the API hub. Once a plugin is created, it can be used to create plugin instances. */
export const createProjectsLocationsPlugins: API.OperationMethod<
  CreateProjectsLocationsPluginsRequest,
  CreateProjectsLocationsPluginsResponse,
  CreateProjectsLocationsPluginsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsPluginsRequest,
  output: CreateProjectsLocationsPluginsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsPluginsRequest {
  /** Optional. The maximum number of hub plugins to return. The service may return fewer than this value. If unspecified, at most 50 hub plugins will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListPlugins` call. Provide this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to `ListPlugins` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The parent resource where this plugin will be created. Format: `projects/{project}/locations/{location}`. */
  parent: string;
  /** Optional. An expression that filters the list of plugins. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string. The comparison operator must be one of: `<`, `>` or `=`. Filters are not case sensitive. The following fields in the `Plugins` are eligible for filtering: * `plugin_category` - The category of the Plugin. Allowed comparison operators: `=`. Expressions are combined with either `AND` logic operator or `OR` logical operator but not both of them together i.e. only one of the `AND` or `OR` operator can be used throughout the filter string and both the operators cannot be used together. No other logical operators are supported. At most three filter fields are allowed in the filter string and if provided more than that then `INVALID_ARGUMENT` error is returned by the API. Here are a few examples: * `plugin_category = ON_RAMP` - The plugin is of category on ramp. */
  filter?: string;
}

export const ListProjectsLocationsPluginsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/plugins" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsPluginsRequest>;

export type ListProjectsLocationsPluginsResponse =
  GoogleCloudApihubV1ListPluginsResponse;
export const ListProjectsLocationsPluginsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1ListPluginsResponse;

export type ListProjectsLocationsPluginsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List all the plugins in a given project and location. */
export const listProjectsLocationsPlugins: API.PaginatedOperationMethod<
  ListProjectsLocationsPluginsRequest,
  ListProjectsLocationsPluginsResponse,
  ListProjectsLocationsPluginsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsPluginsRequest,
  output: ListProjectsLocationsPluginsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsPluginsRequest {
  /** Required. The name of the Plugin resource to delete. Format: `projects/{project}/locations/{location}/plugins/{plugin}` */
  name: string;
}

export const DeleteProjectsLocationsPluginsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsPluginsRequest>;

export type DeleteProjectsLocationsPluginsResponse = GoogleLongrunningOperation;
export const DeleteProjectsLocationsPluginsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsPluginsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a Plugin in API hub. Note, only user owned plugins can be deleted via this method. */
export const deleteProjectsLocationsPlugins: API.OperationMethod<
  DeleteProjectsLocationsPluginsRequest,
  DeleteProjectsLocationsPluginsResponse,
  DeleteProjectsLocationsPluginsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsPluginsRequest,
  output: DeleteProjectsLocationsPluginsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateStyleGuideProjectsLocationsPluginsRequest {
  /** Identifier. The name of the style guide. Format: `projects/{project}/locations/{location}/plugins/{plugin}/styleGuide` */
  name: string;
  /** Optional. The list of fields to update. */
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudApihubV1StyleGuide;
}

export const UpdateStyleGuideProjectsLocationsPluginsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudApihubV1StyleGuide).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateStyleGuideProjectsLocationsPluginsRequest>;

export type UpdateStyleGuideProjectsLocationsPluginsResponse =
  GoogleCloudApihubV1StyleGuide;
export const UpdateStyleGuideProjectsLocationsPluginsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1StyleGuide;

export type UpdateStyleGuideProjectsLocationsPluginsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the styleGuide to be used for liniting in by API hub. */
export const updateStyleGuideProjectsLocationsPlugins: API.OperationMethod<
  UpdateStyleGuideProjectsLocationsPluginsRequest,
  UpdateStyleGuideProjectsLocationsPluginsResponse,
  UpdateStyleGuideProjectsLocationsPluginsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateStyleGuideProjectsLocationsPluginsRequest,
  output: UpdateStyleGuideProjectsLocationsPluginsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface EnableProjectsLocationsPluginsRequest {
  /** Required. The name of the plugin to enable. Format: `projects/{project}/locations/{location}/plugins/{plugin}`. */
  name: string;
  /** Request body */
  body?: GoogleCloudApihubV1EnablePluginRequest;
}

export const EnableProjectsLocationsPluginsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudApihubV1EnablePluginRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:enable", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<EnableProjectsLocationsPluginsRequest>;

export type EnableProjectsLocationsPluginsResponse = GoogleCloudApihubV1Plugin;
export const EnableProjectsLocationsPluginsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1Plugin;

export type EnableProjectsLocationsPluginsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Enables a plugin. The `state` of the plugin after enabling is `ENABLED` */
export const enableProjectsLocationsPlugins: API.OperationMethod<
  EnableProjectsLocationsPluginsRequest,
  EnableProjectsLocationsPluginsResponse,
  EnableProjectsLocationsPluginsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: EnableProjectsLocationsPluginsRequest,
  output: EnableProjectsLocationsPluginsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DisableProjectsLocationsPluginsRequest {
  /** Required. The name of the plugin to disable. Format: `projects/{project}/locations/{location}/plugins/{plugin}`. */
  name: string;
  /** Request body */
  body?: GoogleCloudApihubV1DisablePluginRequest;
}

export const DisableProjectsLocationsPluginsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudApihubV1DisablePluginRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:disable", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<DisableProjectsLocationsPluginsRequest>;

export type DisableProjectsLocationsPluginsResponse = GoogleCloudApihubV1Plugin;
export const DisableProjectsLocationsPluginsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1Plugin;

export type DisableProjectsLocationsPluginsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Disables a plugin. The `state` of the plugin after disabling is `DISABLED` */
export const disableProjectsLocationsPlugins: API.OperationMethod<
  DisableProjectsLocationsPluginsRequest,
  DisableProjectsLocationsPluginsResponse,
  DisableProjectsLocationsPluginsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DisableProjectsLocationsPluginsRequest,
  output: DisableProjectsLocationsPluginsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsPluginsRequest {
  /** Required. The name of the plugin to retrieve. Format: `projects/{project}/locations/{location}/plugins/{plugin}`. */
  name: string;
}

export const GetProjectsLocationsPluginsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsPluginsRequest>;

export type GetProjectsLocationsPluginsResponse = GoogleCloudApihubV1Plugin;
export const GetProjectsLocationsPluginsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1Plugin;

export type GetProjectsLocationsPluginsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get an API Hub plugin. */
export const getProjectsLocationsPlugins: API.OperationMethod<
  GetProjectsLocationsPluginsRequest,
  GetProjectsLocationsPluginsResponse,
  GetProjectsLocationsPluginsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsPluginsRequest,
  output: GetProjectsLocationsPluginsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetStyleGuideProjectsLocationsPluginsRequest {
  /** Required. The name of the spec to retrieve. Format: `projects/{project}/locations/{location}/plugins/{plugin}/styleGuide`. */
  name: string;
}

export const GetStyleGuideProjectsLocationsPluginsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetStyleGuideProjectsLocationsPluginsRequest>;

export type GetStyleGuideProjectsLocationsPluginsResponse =
  GoogleCloudApihubV1StyleGuide;
export const GetStyleGuideProjectsLocationsPluginsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1StyleGuide;

export type GetStyleGuideProjectsLocationsPluginsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the style guide being used for linting. */
export const getStyleGuideProjectsLocationsPlugins: API.OperationMethod<
  GetStyleGuideProjectsLocationsPluginsRequest,
  GetStyleGuideProjectsLocationsPluginsResponse,
  GetStyleGuideProjectsLocationsPluginsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetStyleGuideProjectsLocationsPluginsRequest,
  output: GetStyleGuideProjectsLocationsPluginsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ExecuteActionProjectsLocationsPluginsInstancesRequest {
  /** Required. The name of the plugin instance to execute. Format: `projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}` */
  name: string;
  /** Request body */
  body?: GoogleCloudApihubV1ExecutePluginInstanceActionRequest;
}

export const ExecuteActionProjectsLocationsPluginsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudApihubV1ExecutePluginInstanceActionRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:executeAction", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ExecuteActionProjectsLocationsPluginsInstancesRequest>;

export type ExecuteActionProjectsLocationsPluginsInstancesResponse =
  GoogleLongrunningOperation;
export const ExecuteActionProjectsLocationsPluginsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ExecuteActionProjectsLocationsPluginsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Executes a plugin instance in the API hub. */
export const executeActionProjectsLocationsPluginsInstances: API.OperationMethod<
  ExecuteActionProjectsLocationsPluginsInstancesRequest,
  ExecuteActionProjectsLocationsPluginsInstancesResponse,
  ExecuteActionProjectsLocationsPluginsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExecuteActionProjectsLocationsPluginsInstancesRequest,
  output: ExecuteActionProjectsLocationsPluginsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsPluginsInstancesRequest {
  /** Required. The parent resource where this plugin will be created. Format: `projects/{project}/locations/{location}/plugins/{plugin}`. To list plugin instances for multiple plugins, use the - character instead of the plugin ID. */
  parent: string;
  /** Optional. An expression that filters the list of plugin instances. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string. The comparison operator must be one of: `<`, `>` or `=`. Filters are not case sensitive. The following fields in the `PluginInstances` are eligible for filtering: * `state` - The state of the Plugin Instance. Allowed comparison operators: `=`. * `source_project_id` - The source project id of the Plugin Instance. Allowed comparison operators: `=`. A filter function is also supported in the filter string. The filter function is `id(name)`. The `id(name)` function returns the id of the resource name. For example, `id(name) = \"plugin-instance-1\"` is equivalent to `name = \"projects/test-project-id/locations/test-location-id/plugins/plugin-1/instances/plugin-instance-1\"` provided the parent is `projects/test-project-id/locations/test-location-id/plugins/plugin-1`. Expressions are combined with either `AND` logic operator or `OR` logical operator but not both of them together i.e. only one of the `AND` or `OR` operator can be used throughout the filter string and both the operators cannot be used together. No other logical operators are supported. At most three filter fields are allowed in the filter string and if provided more than that then `INVALID_ARGUMENT` error is returned by the API. Here are a few examples: * `state = ENABLED` - The plugin instance is in enabled state. */
  filter?: string;
  /** Optional. The maximum number of hub plugins to return. The service may return fewer than this value. If unspecified, at most 50 hub plugins will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListPluginInstances` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPluginInstances` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsPluginsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/instances" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsPluginsInstancesRequest>;

export type ListProjectsLocationsPluginsInstancesResponse =
  GoogleCloudApihubV1ListPluginInstancesResponse;
export const ListProjectsLocationsPluginsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1ListPluginInstancesResponse;

export type ListProjectsLocationsPluginsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List all the plugins in a given project and location. `-` can be used as wildcard value for {plugin_id} */
export const listProjectsLocationsPluginsInstances: API.PaginatedOperationMethod<
  ListProjectsLocationsPluginsInstancesRequest,
  ListProjectsLocationsPluginsInstancesResponse,
  ListProjectsLocationsPluginsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsPluginsInstancesRequest,
  output: ListProjectsLocationsPluginsInstancesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsPluginsInstancesRequest {
  /** Required. The parent of the plugin instance resource. Format: `projects/{project}/locations/{location}/plugins/{plugin}` */
  parent: string;
  /** Optional. The ID to use for the plugin instance, which will become the final component of the plugin instance's resource name. This field is optional. * If provided, the same will be used. The service will throw an error if the specified id is already used by another plugin instance in the plugin resource. * If not provided, a system generated id will be used. This value should be 4-63 characters, and valid characters are /a-z[0-9]-_/. */
  pluginInstanceId?: string;
  /** Request body */
  body?: GoogleCloudApihubV1PluginInstance;
}

export const CreateProjectsLocationsPluginsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pluginInstanceId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("pluginInstanceId"),
    ),
    body: Schema.optional(GoogleCloudApihubV1PluginInstance).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/instances", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsPluginsInstancesRequest>;

export type CreateProjectsLocationsPluginsInstancesResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsPluginsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsPluginsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a Plugin instance in the API hub. */
export const createProjectsLocationsPluginsInstances: API.OperationMethod<
  CreateProjectsLocationsPluginsInstancesRequest,
  CreateProjectsLocationsPluginsInstancesResponse,
  CreateProjectsLocationsPluginsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsPluginsInstancesRequest,
  output: CreateProjectsLocationsPluginsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsPluginsInstancesRequest {
  /** Optional. The list of fields to update. */
  updateMask?: string;
  /** Identifier. The unique name of the plugin instance resource. Format: `projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}` */
  name: string;
  /** Request body */
  body?: GoogleCloudApihubV1PluginInstance;
}

export const PatchProjectsLocationsPluginsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudApihubV1PluginInstance).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsPluginsInstancesRequest>;

export type PatchProjectsLocationsPluginsInstancesResponse =
  GoogleCloudApihubV1PluginInstance;
export const PatchProjectsLocationsPluginsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1PluginInstance;

export type PatchProjectsLocationsPluginsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a plugin instance in the API hub. The following fields in the plugin_instance can be updated currently: * display_name * schedule_cron_expression The update_mask should be used to specify the fields being updated. To update the auth_config and additional_config of the plugin instance, use the ApplyPluginInstanceConfig method. */
export const patchProjectsLocationsPluginsInstances: API.OperationMethod<
  PatchProjectsLocationsPluginsInstancesRequest,
  PatchProjectsLocationsPluginsInstancesResponse,
  PatchProjectsLocationsPluginsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsPluginsInstancesRequest,
  output: PatchProjectsLocationsPluginsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DisableActionProjectsLocationsPluginsInstancesRequest {
  /** Required. The name of the plugin instance to disable. Format: `projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}` */
  name: string;
  /** Request body */
  body?: GoogleCloudApihubV1DisablePluginInstanceActionRequest;
}

export const DisableActionProjectsLocationsPluginsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudApihubV1DisablePluginInstanceActionRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:disableAction", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<DisableActionProjectsLocationsPluginsInstancesRequest>;

export type DisableActionProjectsLocationsPluginsInstancesResponse =
  GoogleLongrunningOperation;
export const DisableActionProjectsLocationsPluginsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DisableActionProjectsLocationsPluginsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Disables a plugin instance in the API hub. */
export const disableActionProjectsLocationsPluginsInstances: API.OperationMethod<
  DisableActionProjectsLocationsPluginsInstancesRequest,
  DisableActionProjectsLocationsPluginsInstancesResponse,
  DisableActionProjectsLocationsPluginsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DisableActionProjectsLocationsPluginsInstancesRequest,
  output: DisableActionProjectsLocationsPluginsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsPluginsInstancesRequest {
  /** Required. The name of the plugin instance to delete. Format: `projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}`. */
  name: string;
}

export const DeleteProjectsLocationsPluginsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsPluginsInstancesRequest>;

export type DeleteProjectsLocationsPluginsInstancesResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsPluginsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsPluginsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a plugin instance in the API hub. */
export const deleteProjectsLocationsPluginsInstances: API.OperationMethod<
  DeleteProjectsLocationsPluginsInstancesRequest,
  DeleteProjectsLocationsPluginsInstancesResponse,
  DeleteProjectsLocationsPluginsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsPluginsInstancesRequest,
  output: DeleteProjectsLocationsPluginsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsPluginsInstancesRequest {
  /** Required. The name of the plugin instance to retrieve. Format: `projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}` */
  name: string;
}

export const GetProjectsLocationsPluginsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsPluginsInstancesRequest>;

export type GetProjectsLocationsPluginsInstancesResponse =
  GoogleCloudApihubV1PluginInstance;
export const GetProjectsLocationsPluginsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1PluginInstance;

export type GetProjectsLocationsPluginsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get an API Hub plugin instance. */
export const getProjectsLocationsPluginsInstances: API.OperationMethod<
  GetProjectsLocationsPluginsInstancesRequest,
  GetProjectsLocationsPluginsInstancesResponse,
  GetProjectsLocationsPluginsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsPluginsInstancesRequest,
  output: GetProjectsLocationsPluginsInstancesResponse,
  errors: [NotFound, Forbidden],
}));

export interface EnableActionProjectsLocationsPluginsInstancesRequest {
  /** Required. The name of the plugin instance to enable. Format: `projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}` */
  name: string;
  /** Request body */
  body?: GoogleCloudApihubV1EnablePluginInstanceActionRequest;
}

export const EnableActionProjectsLocationsPluginsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudApihubV1EnablePluginInstanceActionRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:enableAction", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<EnableActionProjectsLocationsPluginsInstancesRequest>;

export type EnableActionProjectsLocationsPluginsInstancesResponse =
  GoogleLongrunningOperation;
export const EnableActionProjectsLocationsPluginsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type EnableActionProjectsLocationsPluginsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Enables a plugin instance in the API hub. */
export const enableActionProjectsLocationsPluginsInstances: API.OperationMethod<
  EnableActionProjectsLocationsPluginsInstancesRequest,
  EnableActionProjectsLocationsPluginsInstancesResponse,
  EnableActionProjectsLocationsPluginsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: EnableActionProjectsLocationsPluginsInstancesRequest,
  output: EnableActionProjectsLocationsPluginsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ManageSourceDataProjectsLocationsPluginsInstancesRequest {
  /** Required. The name of the plugin instance for which data needs to be managed. Format: `projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}` */
  name: string;
  /** Request body */
  body?: GoogleCloudApihubV1ManagePluginInstanceSourceDataRequest;
}

export const ManageSourceDataProjectsLocationsPluginsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudApihubV1ManagePluginInstanceSourceDataRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:manageSourceData",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ManageSourceDataProjectsLocationsPluginsInstancesRequest>;

export type ManageSourceDataProjectsLocationsPluginsInstancesResponse =
  GoogleCloudApihubV1ManagePluginInstanceSourceDataResponse;
export const ManageSourceDataProjectsLocationsPluginsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1ManagePluginInstanceSourceDataResponse;

export type ManageSourceDataProjectsLocationsPluginsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Manages data for a given plugin instance. */
export const manageSourceDataProjectsLocationsPluginsInstances: API.OperationMethod<
  ManageSourceDataProjectsLocationsPluginsInstancesRequest,
  ManageSourceDataProjectsLocationsPluginsInstancesResponse,
  ManageSourceDataProjectsLocationsPluginsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ManageSourceDataProjectsLocationsPluginsInstancesRequest,
  output: ManageSourceDataProjectsLocationsPluginsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetContentsProjectsLocationsPluginsStyleGuideRequest {
  /** Required. The name of the StyleGuide whose contents need to be retrieved. There is exactly one style guide resource per project per location. The expected format is `projects/{project}/locations/{location}/plugins/{plugin}/styleGuide`. */
  name: string;
}

export const GetContentsProjectsLocationsPluginsStyleGuideRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:contents" }),
    svc,
  ) as unknown as Schema.Schema<GetContentsProjectsLocationsPluginsStyleGuideRequest>;

export type GetContentsProjectsLocationsPluginsStyleGuideResponse =
  GoogleCloudApihubV1StyleGuideContents;
export const GetContentsProjectsLocationsPluginsStyleGuideResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1StyleGuideContents;

export type GetContentsProjectsLocationsPluginsStyleGuideError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the contents of the style guide. */
export const getContentsProjectsLocationsPluginsStyleGuide: API.OperationMethod<
  GetContentsProjectsLocationsPluginsStyleGuideRequest,
  GetContentsProjectsLocationsPluginsStyleGuideResponse,
  GetContentsProjectsLocationsPluginsStyleGuideError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetContentsProjectsLocationsPluginsStyleGuideRequest,
  output: GetContentsProjectsLocationsPluginsStyleGuideResponse,
  errors: [NotFound, Forbidden],
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

export type GetProjectsLocationsOperationsResponse = GoogleLongrunningOperation;
export const GetProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

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

export interface CancelProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: GoogleLongrunningCancelOperationRequest;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleLongrunningCancelOperationRequest).pipe(
      T.HttpBody(),
    ),
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

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list page token. */
  pageToken?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The name of the operation's parent resource. */
  name: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/operations" }),
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

export interface GetProjectsLocationsDeploymentsRequest {
  /** Required. The name of the deployment resource to retrieve. Format: `projects/{project}/locations/{location}/deployments/{deployment}` */
  name: string;
}

export const GetProjectsLocationsDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDeploymentsRequest>;

export type GetProjectsLocationsDeploymentsResponse =
  GoogleCloudApihubV1Deployment;
export const GetProjectsLocationsDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1Deployment;

export type GetProjectsLocationsDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get details about a deployment and the API versions linked to it. */
export const getProjectsLocationsDeployments: API.OperationMethod<
  GetProjectsLocationsDeploymentsRequest,
  GetProjectsLocationsDeploymentsResponse,
  GetProjectsLocationsDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDeploymentsRequest,
  output: GetProjectsLocationsDeploymentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsDeploymentsRequest {
  /** Required. The name of the deployment resource to delete. Format: `projects/{project}/locations/{location}/deployments/{deployment}` */
  name: string;
}

export const DeleteProjectsLocationsDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsDeploymentsRequest>;

export type DeleteProjectsLocationsDeploymentsResponse = Empty;
export const DeleteProjectsLocationsDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a deployment resource in the API hub. */
export const deleteProjectsLocationsDeployments: API.OperationMethod<
  DeleteProjectsLocationsDeploymentsRequest,
  DeleteProjectsLocationsDeploymentsResponse,
  DeleteProjectsLocationsDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsDeploymentsRequest,
  output: DeleteProjectsLocationsDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsDeploymentsRequest {
  /** Required. The parent resource for the deployment resource. Format: `projects/{project}/locations/{location}` */
  parent: string;
  /** Optional. The ID to use for the deployment resource, which will become the final component of the deployment's resource name. This field is optional. * If provided, the same will be used. The service will throw an error if the specified id is already used by another deployment resource in the API hub. * If not provided, a system generated id will be used. This value should be 4-500 characters, and valid characters are /a-z[0-9]-_/. */
  deploymentId?: string;
  /** Request body */
  body?: GoogleCloudApihubV1Deployment;
}

export const CreateProjectsLocationsDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    deploymentId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("deploymentId"),
    ),
    body: Schema.optional(GoogleCloudApihubV1Deployment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/deployments", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsDeploymentsRequest>;

export type CreateProjectsLocationsDeploymentsResponse =
  GoogleCloudApihubV1Deployment;
export const CreateProjectsLocationsDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1Deployment;

export type CreateProjectsLocationsDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a deployment resource in the API hub. Once a deployment resource is created, it can be associated with API versions. */
export const createProjectsLocationsDeployments: API.OperationMethod<
  CreateProjectsLocationsDeploymentsRequest,
  CreateProjectsLocationsDeploymentsResponse,
  CreateProjectsLocationsDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsDeploymentsRequest,
  output: CreateProjectsLocationsDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsDeploymentsRequest {
  /** Identifier. The name of the deployment. Format: `projects/{project}/locations/{location}/deployments/{deployment}` */
  name: string;
  /** Required. The list of fields to update. */
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudApihubV1Deployment;
}

export const PatchProjectsLocationsDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudApihubV1Deployment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsDeploymentsRequest>;

export type PatchProjectsLocationsDeploymentsResponse =
  GoogleCloudApihubV1Deployment;
export const PatchProjectsLocationsDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1Deployment;

export type PatchProjectsLocationsDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a deployment resource in the API hub. The following fields in the deployment resource can be updated: * display_name * description * documentation * deployment_type * resource_uri * endpoints * slo * environment * attributes * source_project * source_environment * management_url * source_uri The update_mask should be used to specify the fields being updated. */
export const patchProjectsLocationsDeployments: API.OperationMethod<
  PatchProjectsLocationsDeploymentsRequest,
  PatchProjectsLocationsDeploymentsResponse,
  PatchProjectsLocationsDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsDeploymentsRequest,
  output: PatchProjectsLocationsDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsDeploymentsRequest {
  /** Optional. A page token, received from a previous `ListDeployments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to `ListDeployments` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The maximum number of deployment resources to return. The service may return fewer than this value. If unspecified, at most 50 deployments will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent, which owns this collection of deployment resources. Format: `projects/{project}/locations/{location}` */
  parent: string;
  /** Optional. An expression that filters the list of Deployments. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string. The comparison operator must be one of: `<`, `>` or `=`. Filters are not case sensitive. The following fields in the `Deployments` are eligible for filtering: * `display_name` - The display name of the Deployment. Allowed comparison operators: `=`. * `create_time` - The time at which the Deployment was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators: `>` and `<`. * `resource_uri` - A URI to the deployment resource. Allowed comparison operators: `=`. * `api_versions` - The API versions linked to this deployment. Allowed comparison operators: `:`. * `source_project` - The project/organization at source for the deployment. Allowed comparison operators: `=`. * `source_environment` - The environment at source for the deployment. Allowed comparison operators: `=`. * `deployment_type.enum_values.values.id` - The allowed value id of the deployment_type attribute associated with the Deployment. Allowed comparison operators: `:`. * `deployment_type.enum_values.values.display_name` - The allowed value display name of the deployment_type attribute associated with the Deployment. Allowed comparison operators: `:`. * `slo.string_values.values` -The allowed string value of the slo attribute associated with the deployment. Allowed comparison operators: `:`. * `environment.enum_values.values.id` - The allowed value id of the environment attribute associated with the deployment. Allowed comparison operators: `:`. * `environment.enum_values.values.display_name` - The allowed value display name of the environment attribute associated with the deployment. Allowed comparison operators: `:`. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.enum_values.values.id` - The allowed value id of the user defined enum attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-enum-id is a placeholder that can be replaced with any user defined enum attribute name. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.enum_values.values.display_name` - The allowed value display name of the user defined enum attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-enum-display-name is a placeholder that can be replaced with any user defined enum attribute enum name. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.string_values.values` - The allowed value of the user defined string attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-string is a placeholder that can be replaced with any user defined string attribute name. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.json_values.values` - The allowed value of the user defined JSON attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON attribute name. A filter function is also supported in the filter string. The filter function is `id(name)`. The `id(name)` function returns the id of the resource name. For example, `id(name) = \"deployment-1\"` is equivalent to `name = \"projects/test-project-id/locations/test-location-id/deployments/deployment-1\"` provided the parent is `projects/test-project-id/locations/test-location-id`. Expressions are combined with either `AND` logic operator or `OR` logical operator but not both of them together i.e. only one of the `AND` or `OR` operator can be used throughout the filter string and both the operators cannot be used together. No other logical operators are supported. At most three filter fields are allowed in the filter string and if provided more than that then `INVALID_ARGUMENT` error is returned by the API. Here are a few examples: * `environment.enum_values.values.id: staging-id` - The allowed value id of the environment attribute associated with the Deployment is _staging-id_. * `environment.enum_values.values.display_name: \"Staging Deployment\"` - The allowed value display name of the environment attribute associated with the Deployment is `Staging Deployment`. * `environment.enum_values.values.id: production-id AND create_time < \"2021-08-15T14:50:00Z\" AND create_time > \"2021-08-10T12:00:00Z\"` - The allowed value id of the environment attribute associated with the Deployment is _production-id_ and Deployment was created before _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_. * `environment.enum_values.values.id: production-id OR slo.string_values.values: \"99.99%\"` - The allowed value id of the environment attribute Deployment is _production-id_ or string value of the slo attribute is _99.99%_. * `environment.enum_values.values.id: staging-id AND attributes.projects/test-project-id/locations/test-location-id/ attributes/17650f90-4a29-4971-b3c0-d5532da3764b.string_values.values: test` - The filter string specifies that the allowed value id of the environment attribute associated with the Deployment is _staging-id_ and the value of the user defined attribute of type string is _test_. */
  filter?: string;
}

export const ListProjectsLocationsDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/deployments" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDeploymentsRequest>;

export type ListProjectsLocationsDeploymentsResponse =
  GoogleCloudApihubV1ListDeploymentsResponse;
export const ListProjectsLocationsDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1ListDeploymentsResponse;

export type ListProjectsLocationsDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List deployment resources in the API hub. */
export const listProjectsLocationsDeployments: API.PaginatedOperationMethod<
  ListProjectsLocationsDeploymentsRequest,
  ListProjectsLocationsDeploymentsResponse,
  ListProjectsLocationsDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDeploymentsRequest,
  output: ListProjectsLocationsDeploymentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsHostProjectRegistrationsRequest {
  /** Required. Host project registration resource name. projects/{project}/locations/{location}/hostProjectRegistrations/{host_project_registration_id} */
  name: string;
}

export const GetProjectsLocationsHostProjectRegistrationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsHostProjectRegistrationsRequest>;

export type GetProjectsLocationsHostProjectRegistrationsResponse =
  GoogleCloudApihubV1HostProjectRegistration;
export const GetProjectsLocationsHostProjectRegistrationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1HostProjectRegistration;

export type GetProjectsLocationsHostProjectRegistrationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a host project registration. */
export const getProjectsLocationsHostProjectRegistrations: API.OperationMethod<
  GetProjectsLocationsHostProjectRegistrationsRequest,
  GetProjectsLocationsHostProjectRegistrationsResponse,
  GetProjectsLocationsHostProjectRegistrationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsHostProjectRegistrationsRequest,
  output: GetProjectsLocationsHostProjectRegistrationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsHostProjectRegistrationsRequest {
  /** Required. The parent, which owns this collection of host projects. Format: `projects/* /locations/*` */
  parent: string;
  /** Optional. The maximum number of host project registrations to return. The service may return fewer than this value. If unspecified, at most 50 host project registrations will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
  /** Optional. An expression that filters the list of HostProjectRegistrations. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string. All standard operators as documented at https://google.aip.dev/160 are supported. The following fields in the `HostProjectRegistration` are eligible for filtering: * `name` - The name of the HostProjectRegistration. * `create_time` - The time at which the HostProjectRegistration was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. * `gcp_project` - The Google cloud project associated with the HostProjectRegistration. */
  filter?: string;
  /** Optional. A page token, received from a previous `ListHostProjectRegistrations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to `ListHostProjectRegistrations` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsHostProjectRegistrationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/hostProjectRegistrations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsHostProjectRegistrationsRequest>;

export type ListProjectsLocationsHostProjectRegistrationsResponse =
  GoogleCloudApihubV1ListHostProjectRegistrationsResponse;
export const ListProjectsLocationsHostProjectRegistrationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1ListHostProjectRegistrationsResponse;

export type ListProjectsLocationsHostProjectRegistrationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists host project registrations. */
export const listProjectsLocationsHostProjectRegistrations: API.PaginatedOperationMethod<
  ListProjectsLocationsHostProjectRegistrationsRequest,
  ListProjectsLocationsHostProjectRegistrationsResponse,
  ListProjectsLocationsHostProjectRegistrationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsHostProjectRegistrationsRequest,
  output: ListProjectsLocationsHostProjectRegistrationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsHostProjectRegistrationsRequest {
  /** Required. The parent resource for the host project. Format: `projects/{project}/locations/{location}` */
  parent: string;
  /** Required. The ID to use for the Host Project Registration, which will become the final component of the host project registration's resource name. The ID must be the same as the Google cloud project specified in the host_project_registration.gcp_project field. */
  hostProjectRegistrationId?: string;
  /** Request body */
  body?: GoogleCloudApihubV1HostProjectRegistration;
}

export const CreateProjectsLocationsHostProjectRegistrationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    hostProjectRegistrationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("hostProjectRegistrationId"),
    ),
    body: Schema.optional(GoogleCloudApihubV1HostProjectRegistration).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/hostProjectRegistrations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsHostProjectRegistrationsRequest>;

export type CreateProjectsLocationsHostProjectRegistrationsResponse =
  GoogleCloudApihubV1HostProjectRegistration;
export const CreateProjectsLocationsHostProjectRegistrationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1HostProjectRegistration;

export type CreateProjectsLocationsHostProjectRegistrationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a host project registration. A Google cloud project can be registered as a host project if it is not attached as a runtime project to another host project. A project can be registered as a host project only once. Subsequent register calls for the same project will fail. */
export const createProjectsLocationsHostProjectRegistrations: API.OperationMethod<
  CreateProjectsLocationsHostProjectRegistrationsRequest,
  CreateProjectsLocationsHostProjectRegistrationsResponse,
  CreateProjectsLocationsHostProjectRegistrationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsHostProjectRegistrationsRequest,
  output: CreateProjectsLocationsHostProjectRegistrationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsApisRequest {
  /** Required. The parent resource for the API resource. Format: `projects/{project}/locations/{location}` */
  parent: string;
  /** Optional. The ID to use for the API resource, which will become the final component of the API's resource name. This field is optional. * If provided, the same will be used. The service will throw an error if the specified id is already used by another API resource in the API hub. * If not provided, a system generated id will be used. This value should be 4-500 characters, and valid characters are /a-z[0-9]-_/. */
  apiId?: string;
  /** Request body */
  body?: GoogleCloudApihubV1Api;
}

export const CreateProjectsLocationsApisRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    apiId: Schema.optional(Schema.String).pipe(T.HttpQuery("apiId")),
    body: Schema.optional(GoogleCloudApihubV1Api).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/apis", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsApisRequest>;

export type CreateProjectsLocationsApisResponse = GoogleCloudApihubV1Api;
export const CreateProjectsLocationsApisResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1Api;

export type CreateProjectsLocationsApisError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create an API resource in the API hub. Once an API resource is created, versions can be added to it. */
export const createProjectsLocationsApis: API.OperationMethod<
  CreateProjectsLocationsApisRequest,
  CreateProjectsLocationsApisResponse,
  CreateProjectsLocationsApisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsApisRequest,
  output: CreateProjectsLocationsApisResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsApisRequest {
  /** Required. The list of fields to update. */
  updateMask?: string;
  /** Identifier. The name of the API resource in the API Hub. Format: `projects/{project}/locations/{location}/apis/{api}` */
  name: string;
  /** Request body */
  body?: GoogleCloudApihubV1Api;
}

export const PatchProjectsLocationsApisRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudApihubV1Api).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsApisRequest>;

export type PatchProjectsLocationsApisResponse = GoogleCloudApihubV1Api;
export const PatchProjectsLocationsApisResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1Api;

export type PatchProjectsLocationsApisError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update an API resource in the API hub. The following fields in the API can be updated: * display_name * description * owner * documentation * target_user * team * business_unit * maturity_level * api_style * attributes * fingerprint The update_mask should be used to specify the fields being updated. Updating the owner field requires complete owner message and updates both owner and email fields. */
export const patchProjectsLocationsApis: API.OperationMethod<
  PatchProjectsLocationsApisRequest,
  PatchProjectsLocationsApisResponse,
  PatchProjectsLocationsApisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsApisRequest,
  output: PatchProjectsLocationsApisResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsApisRequest {
  /** Required. The parent, which owns this collection of API resources. Format: `projects/{project}/locations/{location}` */
  parent: string;
  /** Optional. An expression that filters the list of ApiResources. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string. The comparison operator must be one of: `<`, `>`, `:` or `=`. Filters are not case sensitive. The following fields in the `ApiResource` are eligible for filtering: * `owner.email` - The email of the team which owns the ApiResource. Allowed comparison operators: `=`. * `create_time` - The time at which the ApiResource was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators: `>` and `<`. * `display_name` - The display name of the ApiResource. Allowed comparison operators: `=`. * `target_user.enum_values.values.id` - The allowed value id of the target users attribute associated with the ApiResource. Allowed comparison operator is `:`. * `target_user.enum_values.values.display_name` - The allowed value display name of the target users attribute associated with the ApiResource. Allowed comparison operator is `:`. * `team.enum_values.values.id` - The allowed value id of the team attribute associated with the ApiResource. Allowed comparison operator is `:`. * `team.enum_values.values.display_name` - The allowed value display name of the team attribute associated with the ApiResource. Allowed comparison operator is `:`. * `business_unit.enum_values.values.id` - The allowed value id of the business unit attribute associated with the ApiResource. Allowed comparison operator is `:`. * `business_unit.enum_values.values.display_name` - The allowed value display name of the business unit attribute associated with the ApiResource. Allowed comparison operator is `:`. * `maturity_level.enum_values.values.id` - The allowed value id of the maturity level attribute associated with the ApiResource. Allowed comparison operator is `:`. * `maturity_level.enum_values.values.display_name` - The allowed value display name of the maturity level attribute associated with the ApiResource. Allowed comparison operator is `:`. * `api_style.enum_values.values.id` - The allowed value id of the api style attribute associated with the ApiResource. Allowed comparison operator is `:`. * `api_style.enum_values.values.display_name` - The allowed value display name of the api style attribute associated with the ApiResource. Allowed comparison operator is `:`. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.enum_values.values.id` - The allowed value id of the user defined enum attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-enum-id is a placeholder that can be replaced with any user defined enum attribute name. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.enum_values.values.display_name` - The allowed value display name of the user defined enum attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-enum-display-name is a placeholder that can be replaced with any user defined enum attribute enum name. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.string_values.values` - The allowed value of the user defined string attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-string is a placeholder that can be replaced with any user defined string attribute name. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.json_values.values` - The allowed value of the user defined JSON attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON attribute name. A filter function is also supported in the filter string. The filter function is `id(name)`. The `id(name)` function returns the id of the resource name. For example, `id(name) = \"api-1\"` is equivalent to `name = \"projects/test-project-id/locations/test-location-id/apis/api-1\"` provided the parent is `projects/test-project-id/locations/test-location-id`. Another supported filter function is `plugins(source_metadata)`. This function filters for resources that are associated with a specific plugin. For example, `plugins(source_metadata) : "projects/test-project-id/locations/test-location-id/plugins/test-plugin-id"` will return resources sourced from the given plugin. Expressions are combined with either `AND` logic operator or `OR` logical operator but not both of them together i.e. only one of the `AND` or `OR` operator can be used throughout the filter string and both the operators cannot be used together. No other logical operators are supported. At most three filter fields are allowed in the filter string and if provided more than that then `INVALID_ARGUMENT` error is returned by the API. Here are a few examples: * `owner.email = \"apihub@google.com\"` - - The owner team email is _apihub@google.com_. * `owner.email = \"apihub@google.com\" AND create_time < \"2021-08-15T14:50:00Z\" AND create_time > \"2021-08-10T12:00:00Z\"` - The owner team email is _apihub@google.com_ and the api was created before _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_. * `owner.email = \"apihub@google.com\" OR team.enum_values.values.id: apihub-team-id` - The filter string specifies the APIs where the owner team email is _apihub@google.com_ or the id of the allowed value associated with the team attribute is _apihub-team-id_. * `owner.email = \"apihub@google.com\" OR team.enum_values.values.display_name: ApiHub Team` - The filter string specifies the APIs where the owner team email is _apihub@google.com_ or the display name of the allowed value associated with the team attribute is `ApiHub Team`. * `owner.email = \"apihub@google.com\" AND attributes.projects/test-project-id/locations/test-location-id/ attributes/17650f90-4a29-4971-b3c0-d5532da3764b.enum_values.values.id: test_enum_id AND attributes.projects/test-project-id/locations/test-location-id/ attributes/1765\0f90-4a29-5431-b3d0-d5532da3764c.string_values.values: test_string_value` - The filter string specifies the APIs where the owner team email is _apihub@google.com_ and the id of the allowed value associated with the user defined attribute of type enum is _test_enum_id_ and the value of the user defined attribute of type string is _test_.. */
  filter?: string;
  /** Optional. A page token, received from a previous `ListApis` call. Provide this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to `ListApis` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The maximum number of API resources to return. The service may return fewer than this value. If unspecified, at most 50 Apis will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsLocationsApisRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/apis" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsApisRequest>;

export type ListProjectsLocationsApisResponse =
  GoogleCloudApihubV1ListApisResponse;
export const ListProjectsLocationsApisResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1ListApisResponse;

export type ListProjectsLocationsApisError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List API resources in the API hub. */
export const listProjectsLocationsApis: API.PaginatedOperationMethod<
  ListProjectsLocationsApisRequest,
  ListProjectsLocationsApisResponse,
  ListProjectsLocationsApisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsApisRequest,
  output: ListProjectsLocationsApisResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsApisRequest {
  /** Required. The name of the API resource to delete. Format: `projects/{project}/locations/{location}/apis/{api}` */
  name: string;
  /** Optional. If set to true, any versions from this API will also be deleted. Otherwise, the request will only work if the API has no versions. */
  force?: boolean;
}

export const DeleteProjectsLocationsApisRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsApisRequest>;

export type DeleteProjectsLocationsApisResponse = Empty;
export const DeleteProjectsLocationsApisResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsApisError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete an API resource in the API hub. API can only be deleted if all underlying versions are deleted. */
export const deleteProjectsLocationsApis: API.OperationMethod<
  DeleteProjectsLocationsApisRequest,
  DeleteProjectsLocationsApisResponse,
  DeleteProjectsLocationsApisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsApisRequest,
  output: DeleteProjectsLocationsApisResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsApisRequest {
  /** Required. The name of the API resource to retrieve. Format: `projects/{project}/locations/{location}/apis/{api}` */
  name: string;
}

export const GetProjectsLocationsApisRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsApisRequest>;

export type GetProjectsLocationsApisResponse = GoogleCloudApihubV1Api;
export const GetProjectsLocationsApisResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1Api;

export type GetProjectsLocationsApisError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get API resource details including the API versions contained in it. */
export const getProjectsLocationsApis: API.OperationMethod<
  GetProjectsLocationsApisRequest,
  GetProjectsLocationsApisResponse,
  GetProjectsLocationsApisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsApisRequest,
  output: GetProjectsLocationsApisResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsApisVersionsRequest {
  /** Optional. If set to true, any specs from this version will also be deleted. Otherwise, the request will only work if the version has no specs. */
  force?: boolean;
  /** Required. The name of the version to delete. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}` */
  name: string;
}

export const DeleteProjectsLocationsApisVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsApisVersionsRequest>;

export type DeleteProjectsLocationsApisVersionsResponse = Empty;
export const DeleteProjectsLocationsApisVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsApisVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete an API version. Version can only be deleted if all underlying specs, operations, definitions and linked deployments are deleted. */
export const deleteProjectsLocationsApisVersions: API.OperationMethod<
  DeleteProjectsLocationsApisVersionsRequest,
  DeleteProjectsLocationsApisVersionsResponse,
  DeleteProjectsLocationsApisVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsApisVersionsRequest,
  output: DeleteProjectsLocationsApisVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsApisVersionsRequest {
  /** Required. The parent resource for API version. Format: `projects/{project}/locations/{location}/apis/{api}` */
  parent: string;
  /** Optional. The ID to use for the API version, which will become the final component of the version's resource name. This field is optional. * If provided, the same will be used. The service will throw an error if the specified id is already used by another version in the API resource. * If not provided, a system generated id will be used. This value should be 4-500 characters, overall resource name which will be of format `projects/{project}/locations/{location}/apis/{api}/versions/{version}`, its length is limited to 700 characters and valid characters are /a-z[0-9]-_/. */
  versionId?: string;
  /** Request body */
  body?: GoogleCloudApihubV1Version;
}

export const CreateProjectsLocationsApisVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    versionId: Schema.optional(Schema.String).pipe(T.HttpQuery("versionId")),
    body: Schema.optional(GoogleCloudApihubV1Version).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/versions", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsApisVersionsRequest>;

export type CreateProjectsLocationsApisVersionsResponse =
  GoogleCloudApihubV1Version;
export const CreateProjectsLocationsApisVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1Version;

export type CreateProjectsLocationsApisVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create an API version for an API resource in the API hub. */
export const createProjectsLocationsApisVersions: API.OperationMethod<
  CreateProjectsLocationsApisVersionsRequest,
  CreateProjectsLocationsApisVersionsResponse,
  CreateProjectsLocationsApisVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsApisVersionsRequest,
  output: CreateProjectsLocationsApisVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsApisVersionsRequest {
  /** Required. The list of fields to update. */
  updateMask?: string;
  /** Identifier. The name of the version. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}` */
  name: string;
  /** Request body */
  body?: GoogleCloudApihubV1Version;
}

export const PatchProjectsLocationsApisVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudApihubV1Version).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsApisVersionsRequest>;

export type PatchProjectsLocationsApisVersionsResponse =
  GoogleCloudApihubV1Version;
export const PatchProjectsLocationsApisVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1Version;

export type PatchProjectsLocationsApisVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update API version. The following fields in the version can be updated currently: * display_name * description * documentation * deployments * lifecycle * compliance * accreditation * attributes The update_mask should be used to specify the fields being updated. */
export const patchProjectsLocationsApisVersions: API.OperationMethod<
  PatchProjectsLocationsApisVersionsRequest,
  PatchProjectsLocationsApisVersionsResponse,
  PatchProjectsLocationsApisVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsApisVersionsRequest,
  output: PatchProjectsLocationsApisVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsApisVersionsRequest {
  /** Required. The parent which owns this collection of API versions i.e., the API resource Format: `projects/{project}/locations/{location}/apis/{api}` */
  parent: string;
  /** Optional. An expression that filters the list of Versions. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string, a number, or a boolean. The comparison operator must be one of: `<`, `>` or `=`. Filters are not case sensitive. The following fields in the `Version` are eligible for filtering: * `display_name` - The display name of the Version. Allowed comparison operators: `=`. * `create_time` - The time at which the Version was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators: `>` and `<`. * `lifecycle.enum_values.values.id` - The allowed value id of the lifecycle attribute associated with the Version. Allowed comparison operators: `:`. * `lifecycle.enum_values.values.display_name` - The allowed value display name of the lifecycle attribute associated with the Version. Allowed comparison operators: `:`. * `compliance.enum_values.values.id` - The allowed value id of the compliances attribute associated with the Version. Allowed comparison operators: `:`. * `compliance.enum_values.values.display_name` - The allowed value display name of the compliances attribute associated with the Version. Allowed comparison operators: `:`. * `accreditation.enum_values.values.id` - The allowed value id of the accreditations attribute associated with the Version. Allowed comparison operators: `:`. * `accreditation.enum_values.values.display_name` - The allowed value display name of the accreditations attribute associated with the Version. Allowed comparison operators: `:`. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.enum_values.values.id` - The allowed value id of the user defined enum attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-enum-id is a placeholder that can be replaced with any user defined enum attribute name. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.enum_values.values.display_name` - The allowed value display name of the user defined enum attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-enum-display-name is a placeholder that can be replaced with any user defined enum attribute enum name. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.string_values.values` - The allowed value of the user defined string attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-string is a placeholder that can be replaced with any user defined string attribute name. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.json_values.values` - The allowed value of the user defined JSON attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON attribute name. Expressions are combined with either `AND` logic operator or `OR` logical operator but not both of them together i.e. only one of the `AND` or `OR` operator can be used throughout the filter string and both the operators cannot be used together. No other logical operators are supported. At most three filter fields are allowed in the filter string and if provided more than that then `INVALID_ARGUMENT` error is returned by the API. Here are a few examples: * `lifecycle.enum_values.values.id: preview-id` - The filter string specifies that the id of the allowed value associated with the lifecycle attribute of the Version is _preview-id_. * `lifecycle.enum_values.values.display_name: \"Preview Display Name\"` - The filter string specifies that the display name of the allowed value associated with the lifecycle attribute of the Version is `Preview Display Name`. * `lifecycle.enum_values.values.id: preview-id AND create_time < \"2021-08-15T14:50:00Z\" AND create_time > \"2021-08-10T12:00:00Z\"` - The id of the allowed value associated with the lifecycle attribute of the Version is _preview-id_ and it was created before _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_. * `compliance.enum_values.values.id: gdpr-id OR compliance.enum_values.values.id: pci-dss-id` - The id of the allowed value associated with the compliance attribute is _gdpr-id_ or _pci-dss-id_. * `lifecycle.enum_values.values.id: preview-id AND attributes.projects/test-project-id/locations/test-location-id/ attributes/17650f90-4a29-4971-b3c0-d5532da3764b.string_values.values: test` - The filter string specifies that the id of the allowed value associated with the lifecycle attribute of the Version is _preview-id_ and the value of the user defined attribute of type string is _test_. */
  filter?: string;
  /** Optional. A page token, received from a previous `ListVersions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to `ListVersions` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The maximum number of versions to return. The service may return fewer than this value. If unspecified, at most 50 versions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsLocationsApisVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/versions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsApisVersionsRequest>;

export type ListProjectsLocationsApisVersionsResponse =
  GoogleCloudApihubV1ListVersionsResponse;
export const ListProjectsLocationsApisVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1ListVersionsResponse;

export type ListProjectsLocationsApisVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List API versions of an API resource in the API hub. */
export const listProjectsLocationsApisVersions: API.PaginatedOperationMethod<
  ListProjectsLocationsApisVersionsRequest,
  ListProjectsLocationsApisVersionsResponse,
  ListProjectsLocationsApisVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsApisVersionsRequest,
  output: ListProjectsLocationsApisVersionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsApisVersionsRequest {
  /** Required. The name of the API version to retrieve. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}` */
  name: string;
}

export const GetProjectsLocationsApisVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsApisVersionsRequest>;

export type GetProjectsLocationsApisVersionsResponse =
  GoogleCloudApihubV1Version;
export const GetProjectsLocationsApisVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1Version;

export type GetProjectsLocationsApisVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get details about the API version of an API resource. This will include information about the specs and operations present in the API version as well as the deployments linked to it. */
export const getProjectsLocationsApisVersions: API.OperationMethod<
  GetProjectsLocationsApisVersionsRequest,
  GetProjectsLocationsApisVersionsResponse,
  GetProjectsLocationsApisVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsApisVersionsRequest,
  output: GetProjectsLocationsApisVersionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsApisVersionsDefinitionsRequest {
  /** Required. The name of the definition to retrieve. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}/definitions/{definition}` */
  name: string;
}

export const GetProjectsLocationsApisVersionsDefinitionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsApisVersionsDefinitionsRequest>;

export type GetProjectsLocationsApisVersionsDefinitionsResponse =
  GoogleCloudApihubV1Definition;
export const GetProjectsLocationsApisVersionsDefinitionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1Definition;

export type GetProjectsLocationsApisVersionsDefinitionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get details about a definition in an API version. */
export const getProjectsLocationsApisVersionsDefinitions: API.OperationMethod<
  GetProjectsLocationsApisVersionsDefinitionsRequest,
  GetProjectsLocationsApisVersionsDefinitionsResponse,
  GetProjectsLocationsApisVersionsDefinitionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsApisVersionsDefinitionsRequest,
  output: GetProjectsLocationsApisVersionsDefinitionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsApisVersionsSpecsRequest {
  /** Required. The name of the spec to delete. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}` */
  name: string;
}

export const DeleteProjectsLocationsApisVersionsSpecsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsApisVersionsSpecsRequest>;

export type DeleteProjectsLocationsApisVersionsSpecsResponse = Empty;
export const DeleteProjectsLocationsApisVersionsSpecsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsApisVersionsSpecsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a spec. Deleting a spec will also delete the associated operations from the version. */
export const deleteProjectsLocationsApisVersionsSpecs: API.OperationMethod<
  DeleteProjectsLocationsApisVersionsSpecsRequest,
  DeleteProjectsLocationsApisVersionsSpecsResponse,
  DeleteProjectsLocationsApisVersionsSpecsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsApisVersionsSpecsRequest,
  output: DeleteProjectsLocationsApisVersionsSpecsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsApisVersionsSpecsRequest {
  /** Required. The parent resource for Spec. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}` */
  parent: string;
  /** Optional. The ID to use for the spec, which will become the final component of the spec's resource name. This field is optional. * If provided, the same will be used. The service will throw an error if the specified id is already used by another spec in the API resource. * If not provided, a system generated id will be used. This value should be 4-500 characters, overall resource name which will be of format `projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}`, its length is limited to 1000 characters and valid characters are /a-z[0-9]-_/. */
  specId?: string;
  /** Request body */
  body?: GoogleCloudApihubV1Spec;
}

export const CreateProjectsLocationsApisVersionsSpecsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    specId: Schema.optional(Schema.String).pipe(T.HttpQuery("specId")),
    body: Schema.optional(GoogleCloudApihubV1Spec).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/specs", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsApisVersionsSpecsRequest>;

export type CreateProjectsLocationsApisVersionsSpecsResponse =
  GoogleCloudApihubV1Spec;
export const CreateProjectsLocationsApisVersionsSpecsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1Spec;

export type CreateProjectsLocationsApisVersionsSpecsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Add a spec to an API version in the API hub. Multiple specs can be added to an API version. Note, while adding a spec, at least one of `contents` or `source_uri` must be provided. If `contents` is provided, then `spec_type` must also be provided. On adding a spec with contents to the version, the operations present in it will be added to the version.Note that the file contents in the spec should be of the same type as defined in the `projects/{project}/locations/{location}/attributes/system-spec-type` attribute associated with spec resource. Note that specs of various types can be uploaded, however parsing of details is supported for OpenAPI spec currently. In order to access the information parsed from the spec, use the GetSpec method. In order to access the raw contents for a particular spec, use the GetSpecContents method. In order to access the operations parsed from the spec, use the ListAPIOperations method. */
export const createProjectsLocationsApisVersionsSpecs: API.OperationMethod<
  CreateProjectsLocationsApisVersionsSpecsRequest,
  CreateProjectsLocationsApisVersionsSpecsResponse,
  CreateProjectsLocationsApisVersionsSpecsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsApisVersionsSpecsRequest,
  output: CreateProjectsLocationsApisVersionsSpecsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FetchAdditionalSpecContentProjectsLocationsApisVersionsSpecsRequest {
  /** Required. The name of the spec whose contents need to be retrieved. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}` */
  name: string;
  /** Optional. The type of the spec contents to be retrieved. */
  specContentType?:
    | "SPEC_CONTENT_TYPE_UNSPECIFIED"
    | "BOOSTED_SPEC_CONTENT"
    | "GATEWAY_OPEN_API_SPEC"
    | (string & {});
}

export const FetchAdditionalSpecContentProjectsLocationsApisVersionsSpecsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    specContentType: Schema.optional(Schema.String).pipe(
      T.HttpQuery("specContentType"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:fetchAdditionalSpecContent" }),
    svc,
  ) as unknown as Schema.Schema<FetchAdditionalSpecContentProjectsLocationsApisVersionsSpecsRequest>;

export type FetchAdditionalSpecContentProjectsLocationsApisVersionsSpecsResponse =
  GoogleCloudApihubV1FetchAdditionalSpecContentResponse;
export const FetchAdditionalSpecContentProjectsLocationsApisVersionsSpecsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1FetchAdditionalSpecContentResponse;

export type FetchAdditionalSpecContentProjectsLocationsApisVersionsSpecsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Fetch additional spec content. */
export const fetchAdditionalSpecContentProjectsLocationsApisVersionsSpecs: API.OperationMethod<
  FetchAdditionalSpecContentProjectsLocationsApisVersionsSpecsRequest,
  FetchAdditionalSpecContentProjectsLocationsApisVersionsSpecsResponse,
  FetchAdditionalSpecContentProjectsLocationsApisVersionsSpecsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FetchAdditionalSpecContentProjectsLocationsApisVersionsSpecsRequest,
  output: FetchAdditionalSpecContentProjectsLocationsApisVersionsSpecsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsApisVersionsSpecsRequest {
  /** Required. The list of fields to update. */
  updateMask?: string;
  /** Identifier. The name of the spec. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}` */
  name: string;
  /** Request body */
  body?: GoogleCloudApihubV1Spec;
}

export const PatchProjectsLocationsApisVersionsSpecsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudApihubV1Spec).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsApisVersionsSpecsRequest>;

export type PatchProjectsLocationsApisVersionsSpecsResponse =
  GoogleCloudApihubV1Spec;
export const PatchProjectsLocationsApisVersionsSpecsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1Spec;

export type PatchProjectsLocationsApisVersionsSpecsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update spec. The following fields in the spec can be updated: * display_name * source_uri * lint_response * attributes * contents * spec_type In case of an OAS spec, updating spec contents can lead to: 1. Creation, deletion and update of operations. 2. Creation, deletion and update of definitions. 3. Update of other info parsed out from the new spec. In case of contents or source_uri being present in update mask, spec_type must also be present. Also, spec_type can not be present in update mask if contents or source_uri is not present. The update_mask should be used to specify the fields being updated. */
export const patchProjectsLocationsApisVersionsSpecs: API.OperationMethod<
  PatchProjectsLocationsApisVersionsSpecsRequest,
  PatchProjectsLocationsApisVersionsSpecsResponse,
  PatchProjectsLocationsApisVersionsSpecsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsApisVersionsSpecsRequest,
  output: PatchProjectsLocationsApisVersionsSpecsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsApisVersionsSpecsRequest {
  /** Optional. A page token, received from a previous `ListSpecs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSpecs` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The maximum number of specs to return. The service may return fewer than this value. If unspecified, at most 50 specs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent, which owns this collection of specs. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}` */
  parent: string;
  /** Optional. An expression that filters the list of Specs. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string. The comparison operator must be one of: `<`, `>`, `:` or `=`. Filters are not case sensitive. The following fields in the `Spec` are eligible for filtering: * `display_name` - The display name of the Spec. Allowed comparison operators: `=`. * `create_time` - The time at which the Spec was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators: `>` and `<`. * `spec_type.enum_values.values.id` - The allowed value id of the spec_type attribute associated with the Spec. Allowed comparison operators: `:`. * `spec_type.enum_values.values.display_name` - The allowed value display name of the spec_type attribute associated with the Spec. Allowed comparison operators: `:`. * `lint_response.json_values.values` - The json value of the lint_response attribute associated with the Spec. Allowed comparison operators: `:`. * `mime_type` - The MIME type of the Spec. Allowed comparison operators: `=`. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.enum_values.values.id` - The allowed value id of the user defined enum attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-enum-id is a placeholder that can be replaced with any user defined enum attribute name. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.enum_values.values.display_name` - The allowed value display name of the user defined enum attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-enum-display-name is a placeholder that can be replaced with any user defined enum attribute enum name. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.string_values.values` - The allowed value of the user defined string attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-string is a placeholder that can be replaced with any user defined string attribute name. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.json_values.values` - The allowed value of the user defined JSON attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON attribute name. Expressions are combined with either `AND` logic operator or `OR` logical operator but not both of them together i.e. only one of the `AND` or `OR` operator can be used throughout the filter string and both the operators cannot be used together. No other logical operators are supported. At most three filter fields are allowed in the filter string and if provided more than that then `INVALID_ARGUMENT` error is returned by the API. Here are a few examples: * `spec_type.enum_values.values.id: rest-id` - The filter string specifies that the id of the allowed value associated with the spec_type attribute is _rest-id_. * `spec_type.enum_values.values.display_name: \"Rest Display Name\"` - The filter string specifies that the display name of the allowed value associated with the spec_type attribute is `Rest Display Name`. * `spec_type.enum_values.values.id: grpc-id AND create_time < \"2021-08-15T14:50:00Z\" AND create_time > \"2021-08-10T12:00:00Z\"` - The id of the allowed value associated with the spec_type attribute is _grpc-id_ and the spec was created before _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_. * `spec_type.enum_values.values.id: rest-id OR spec_type.enum_values.values.id: grpc-id` - The id of the allowed value associated with the spec_type attribute is _rest-id_ or _grpc-id_. * `spec_type.enum_values.values.id: rest-id AND attributes.projects/test-project-id/locations/test-location-id/ attributes/17650f90-4a29-4971-b3c0-d5532da3764b.enum_values.values.id: test` - The filter string specifies that the id of the allowed value associated with the spec_type attribute is _rest-id_ and the id of the allowed value associated with the user defined attribute of type enum is _test_. */
  filter?: string;
}

export const ListProjectsLocationsApisVersionsSpecsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/specs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsApisVersionsSpecsRequest>;

export type ListProjectsLocationsApisVersionsSpecsResponse =
  GoogleCloudApihubV1ListSpecsResponse;
export const ListProjectsLocationsApisVersionsSpecsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1ListSpecsResponse;

export type ListProjectsLocationsApisVersionsSpecsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List specs corresponding to a particular API resource. */
export const listProjectsLocationsApisVersionsSpecs: API.PaginatedOperationMethod<
  ListProjectsLocationsApisVersionsSpecsRequest,
  ListProjectsLocationsApisVersionsSpecsResponse,
  ListProjectsLocationsApisVersionsSpecsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsApisVersionsSpecsRequest,
  output: ListProjectsLocationsApisVersionsSpecsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsApisVersionsSpecsRequest {
  /** Required. The name of the spec to retrieve. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}` */
  name: string;
}

export const GetProjectsLocationsApisVersionsSpecsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsApisVersionsSpecsRequest>;

export type GetProjectsLocationsApisVersionsSpecsResponse =
  GoogleCloudApihubV1Spec;
export const GetProjectsLocationsApisVersionsSpecsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1Spec;

export type GetProjectsLocationsApisVersionsSpecsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get details about the information parsed from a spec. Note that this method does not return the raw spec contents. Use GetSpecContents method to retrieve the same. */
export const getProjectsLocationsApisVersionsSpecs: API.OperationMethod<
  GetProjectsLocationsApisVersionsSpecsRequest,
  GetProjectsLocationsApisVersionsSpecsResponse,
  GetProjectsLocationsApisVersionsSpecsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsApisVersionsSpecsRequest,
  output: GetProjectsLocationsApisVersionsSpecsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetContentsProjectsLocationsApisVersionsSpecsRequest {
  /** Required. The name of the spec whose contents need to be retrieved. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}` */
  name: string;
}

export const GetContentsProjectsLocationsApisVersionsSpecsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:contents" }),
    svc,
  ) as unknown as Schema.Schema<GetContentsProjectsLocationsApisVersionsSpecsRequest>;

export type GetContentsProjectsLocationsApisVersionsSpecsResponse =
  GoogleCloudApihubV1SpecContents;
export const GetContentsProjectsLocationsApisVersionsSpecsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1SpecContents;

export type GetContentsProjectsLocationsApisVersionsSpecsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get spec contents. */
export const getContentsProjectsLocationsApisVersionsSpecs: API.OperationMethod<
  GetContentsProjectsLocationsApisVersionsSpecsRequest,
  GetContentsProjectsLocationsApisVersionsSpecsResponse,
  GetContentsProjectsLocationsApisVersionsSpecsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetContentsProjectsLocationsApisVersionsSpecsRequest,
  output: GetContentsProjectsLocationsApisVersionsSpecsResponse,
  errors: [NotFound, Forbidden],
}));

export interface LintProjectsLocationsApisVersionsSpecsRequest {
  /** Required. The name of the spec to be linted. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}` */
  name: string;
  /** Request body */
  body?: GoogleCloudApihubV1LintSpecRequest;
}

export const LintProjectsLocationsApisVersionsSpecsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudApihubV1LintSpecRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:lint", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<LintProjectsLocationsApisVersionsSpecsRequest>;

export type LintProjectsLocationsApisVersionsSpecsResponse = Empty;
export const LintProjectsLocationsApisVersionsSpecsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type LintProjectsLocationsApisVersionsSpecsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Lints the requested spec and updates the corresponding API Spec with the lint response. This lint response will be available in all subsequent Get and List Spec calls to Core service. */
export const lintProjectsLocationsApisVersionsSpecs: API.OperationMethod<
  LintProjectsLocationsApisVersionsSpecsRequest,
  LintProjectsLocationsApisVersionsSpecsResponse,
  LintProjectsLocationsApisVersionsSpecsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LintProjectsLocationsApisVersionsSpecsRequest,
  output: LintProjectsLocationsApisVersionsSpecsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsApisVersionsOperationsRequest {
  /** Required. The name of the operation to retrieve. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}` */
  name: string;
}

export const GetProjectsLocationsApisVersionsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsApisVersionsOperationsRequest>;

export type GetProjectsLocationsApisVersionsOperationsResponse =
  GoogleCloudApihubV1ApiOperation;
export const GetProjectsLocationsApisVersionsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1ApiOperation;

export type GetProjectsLocationsApisVersionsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get details about a particular operation in API version. */
export const getProjectsLocationsApisVersionsOperations: API.OperationMethod<
  GetProjectsLocationsApisVersionsOperationsRequest,
  GetProjectsLocationsApisVersionsOperationsResponse,
  GetProjectsLocationsApisVersionsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsApisVersionsOperationsRequest,
  output: GetProjectsLocationsApisVersionsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsApisVersionsOperationsRequest {
  /** Optional. A page token, received from a previous `ListApiOperations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to `ListApiOperations` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The maximum number of operations to return. The service may return fewer than this value. If unspecified, at most 50 operations will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent which owns this collection of operations i.e., the API version. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}` */
  parent: string;
  /** Optional. An expression that filters the list of ApiOperations. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string or a boolean. The comparison operator must be one of: `<`, `>` or `=`. Filters are not case sensitive. The following fields in the `ApiOperation` are eligible for filtering: * `name` - The ApiOperation resource name. Allowed comparison operators: `=`. * `details.http_operation.path.path` - The http operation's complete path relative to server endpoint. Allowed comparison operators: `=`. * `details.http_operation.method` - The http operation method type. Allowed comparison operators: `=`. * `details.deprecated` - Indicates if the ApiOperation is deprecated. Allowed values are True / False indicating the deprycation status of the ApiOperation. Allowed comparison operators: `=`. * `create_time` - The time at which the ApiOperation was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators: `>` and `<`. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.enum_values.values.id` - The allowed value id of the user defined enum attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-enum-id is a placeholder that can be replaced with any user defined enum attribute name. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.enum_values.values.display_name` - The allowed value display name of the user defined enum attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-enum-display-name is a placeholder that can be replaced with any user defined enum attribute enum name. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.string_values.values` - The allowed value of the user defined string attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-string is a placeholder that can be replaced with any user defined string attribute name. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.json_values.values` - The allowed value of the user defined JSON attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON attribute name. Expressions are combined with either `AND` logic operator or `OR` logical operator but not both of them together i.e. only one of the `AND` or `OR` operator can be used throughout the filter string and both the operators cannot be used together. No other logical operators are supported. At most three filter fields are allowed in the filter string and if provided more than that then `INVALID_ARGUMENT` error is returned by the API. Here are a few examples: * `details.deprecated = True` - The ApiOperation is deprecated. * `details.http_operation.method = GET AND create_time < \"2021-08-15T14:50:00Z\" AND create_time > \"2021-08-10T12:00:00Z\"` - The method of the http operation of the ApiOperation is _GET_ and the spec was created before _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_. * `details.http_operation.method = GET OR details.http_operation.method = POST`. - The http operation of the method of ApiOperation is _GET_ or _POST_. * `details.deprecated = True AND attributes.projects/test-project-id/locations/test-location-id/ attributes/17650f90-4a29-4971-b3c0-d5532da3764b.string_values.values: test` - The filter string specifies that the ApiOperation is deprecated and the value of the user defined attribute of type string is _test_. */
  filter?: string;
}

export const ListProjectsLocationsApisVersionsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsApisVersionsOperationsRequest>;

export type ListProjectsLocationsApisVersionsOperationsResponse =
  GoogleCloudApihubV1ListApiOperationsResponse;
export const ListProjectsLocationsApisVersionsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1ListApiOperationsResponse;

export type ListProjectsLocationsApisVersionsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List operations in an API version. */
export const listProjectsLocationsApisVersionsOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsApisVersionsOperationsRequest,
  ListProjectsLocationsApisVersionsOperationsResponse,
  ListProjectsLocationsApisVersionsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsApisVersionsOperationsRequest,
  output: ListProjectsLocationsApisVersionsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsApisVersionsOperationsRequest {
  /** Optional. The ID to use for the operation resource, which will become the final component of the operation's resource name. This field is optional. * If provided, the same will be used. The service will throw an error if the specified id is already used by another operation resource in the API hub. * If not provided, a system generated id will be used. This value should be 4-500 characters, overall resource name which will be of format `projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}`, its length is limited to 700 characters, and valid characters are /a-z[0-9]-_/. */
  apiOperationId?: string;
  /** Required. The parent resource for the operation resource. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}` */
  parent: string;
  /** Request body */
  body?: GoogleCloudApihubV1ApiOperation;
}

export const CreateProjectsLocationsApisVersionsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiOperationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("apiOperationId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudApihubV1ApiOperation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/operations", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsApisVersionsOperationsRequest>;

export type CreateProjectsLocationsApisVersionsOperationsResponse =
  GoogleCloudApihubV1ApiOperation;
export const CreateProjectsLocationsApisVersionsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1ApiOperation;

export type CreateProjectsLocationsApisVersionsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create an apiOperation in an API version. An apiOperation can be created only if the version has no apiOperations which were created by parsing a spec. */
export const createProjectsLocationsApisVersionsOperations: API.OperationMethod<
  CreateProjectsLocationsApisVersionsOperationsRequest,
  CreateProjectsLocationsApisVersionsOperationsResponse,
  CreateProjectsLocationsApisVersionsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsApisVersionsOperationsRequest,
  output: CreateProjectsLocationsApisVersionsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsApisVersionsOperationsRequest {
  /** Identifier. The name of the operation. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}` */
  name: string;
  /** Required. The list of fields to update. */
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudApihubV1ApiOperation;
}

export const PatchProjectsLocationsApisVersionsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudApihubV1ApiOperation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsApisVersionsOperationsRequest>;

export type PatchProjectsLocationsApisVersionsOperationsResponse =
  GoogleCloudApihubV1ApiOperation;
export const PatchProjectsLocationsApisVersionsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1ApiOperation;

export type PatchProjectsLocationsApisVersionsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update an operation in an API version. The following fields in the ApiOperation resource can be updated: * details.description * details.documentation * details.http_operation.path * details.http_operation.method * details.deprecated * attributes * details.mcp_tool.title * details.mcp_tool.description * details.mcp_tool.input_schema * details.mcp_tool.output_schema * details.input_schema * details.output_schema * details.mcp_tool.annotations.title * details.mcp_tool.annotations.read_only_hint * details.mcp_tool.annotations.destructive_hint * details.mcp_tool.annotations.idempotent_hint * details.mcp_tool.annotations.open_world_hint * details.mcp_tool.annotations.additional_hints The update_mask should be used to specify the fields being updated. An operation can be updated only if the operation was created via CreateApiOperation API. If the operation was created by parsing the spec, then it can be edited by updating the spec. */
export const patchProjectsLocationsApisVersionsOperations: API.OperationMethod<
  PatchProjectsLocationsApisVersionsOperationsRequest,
  PatchProjectsLocationsApisVersionsOperationsResponse,
  PatchProjectsLocationsApisVersionsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsApisVersionsOperationsRequest,
  output: PatchProjectsLocationsApisVersionsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsApisVersionsOperationsRequest {
  /** Required. The name of the operation resource to delete. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}` */
  name: string;
}

export const DeleteProjectsLocationsApisVersionsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsApisVersionsOperationsRequest>;

export type DeleteProjectsLocationsApisVersionsOperationsResponse = Empty;
export const DeleteProjectsLocationsApisVersionsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsApisVersionsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete an operation in an API version and we can delete only the operations created via create API. If the operation was created by parsing the spec, then it can be deleted by editing or deleting the spec. */
export const deleteProjectsLocationsApisVersionsOperations: API.OperationMethod<
  DeleteProjectsLocationsApisVersionsOperationsRequest,
  DeleteProjectsLocationsApisVersionsOperationsResponse,
  DeleteProjectsLocationsApisVersionsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsApisVersionsOperationsRequest,
  output: DeleteProjectsLocationsApisVersionsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsRuntimeProjectAttachmentsRequest {
  /** Required. The parent resource for the Runtime Project Attachment. Format: `projects/{project}/locations/{location}` */
  parent: string;
  /** Required. The ID to use for the Runtime Project Attachment, which will become the final component of the Runtime Project Attachment's name. The ID must be the same as the project ID of the Google cloud project specified in the runtime_project_attachment.runtime_project field. */
  runtimeProjectAttachmentId?: string;
  /** Request body */
  body?: GoogleCloudApihubV1RuntimeProjectAttachment;
}

export const CreateProjectsLocationsRuntimeProjectAttachmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    runtimeProjectAttachmentId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("runtimeProjectAttachmentId"),
    ),
    body: Schema.optional(GoogleCloudApihubV1RuntimeProjectAttachment).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/runtimeProjectAttachments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsRuntimeProjectAttachmentsRequest>;

export type CreateProjectsLocationsRuntimeProjectAttachmentsResponse =
  GoogleCloudApihubV1RuntimeProjectAttachment;
export const CreateProjectsLocationsRuntimeProjectAttachmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1RuntimeProjectAttachment;

export type CreateProjectsLocationsRuntimeProjectAttachmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Attaches a runtime project to the host project. */
export const createProjectsLocationsRuntimeProjectAttachments: API.OperationMethod<
  CreateProjectsLocationsRuntimeProjectAttachmentsRequest,
  CreateProjectsLocationsRuntimeProjectAttachmentsResponse,
  CreateProjectsLocationsRuntimeProjectAttachmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsRuntimeProjectAttachmentsRequest,
  output: CreateProjectsLocationsRuntimeProjectAttachmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsRuntimeProjectAttachmentsRequest {
  /** Optional. An expression that filters the list of RuntimeProjectAttachments. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string. All standard operators as documented at https://google.aip.dev/160 are supported. The following fields in the `RuntimeProjectAttachment` are eligible for filtering: * `name` - The name of the RuntimeProjectAttachment. * `create_time` - The time at which the RuntimeProjectAttachment was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. * `runtime_project` - The Google cloud project associated with the RuntimeProjectAttachment. */
  filter?: string;
  /** Optional. A page token, received from a previous `ListRuntimeProjectAttachments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to `ListRuntimeProjectAttachments` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The parent, which owns this collection of runtime project attachments. Format: `projects/{project}/locations/{location}` */
  parent: string;
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
  /** Optional. The maximum number of runtime project attachments to return. The service may return fewer than this value. If unspecified, at most 50 runtime project attachments will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsLocationsRuntimeProjectAttachmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/runtimeProjectAttachments" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRuntimeProjectAttachmentsRequest>;

export type ListProjectsLocationsRuntimeProjectAttachmentsResponse =
  GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse;
export const ListProjectsLocationsRuntimeProjectAttachmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse;

export type ListProjectsLocationsRuntimeProjectAttachmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List runtime projects attached to the host project. */
export const listProjectsLocationsRuntimeProjectAttachments: API.PaginatedOperationMethod<
  ListProjectsLocationsRuntimeProjectAttachmentsRequest,
  ListProjectsLocationsRuntimeProjectAttachmentsResponse,
  ListProjectsLocationsRuntimeProjectAttachmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRuntimeProjectAttachmentsRequest,
  output: ListProjectsLocationsRuntimeProjectAttachmentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsRuntimeProjectAttachmentsRequest {
  /** Required. The name of the API resource to retrieve. Format: `projects/{project}/locations/{location}/runtimeProjectAttachments/{runtime_project_attachment}` */
  name: string;
}

export const GetProjectsLocationsRuntimeProjectAttachmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRuntimeProjectAttachmentsRequest>;

export type GetProjectsLocationsRuntimeProjectAttachmentsResponse =
  GoogleCloudApihubV1RuntimeProjectAttachment;
export const GetProjectsLocationsRuntimeProjectAttachmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1RuntimeProjectAttachment;

export type GetProjectsLocationsRuntimeProjectAttachmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a runtime project attachment. */
export const getProjectsLocationsRuntimeProjectAttachments: API.OperationMethod<
  GetProjectsLocationsRuntimeProjectAttachmentsRequest,
  GetProjectsLocationsRuntimeProjectAttachmentsResponse,
  GetProjectsLocationsRuntimeProjectAttachmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRuntimeProjectAttachmentsRequest,
  output: GetProjectsLocationsRuntimeProjectAttachmentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsRuntimeProjectAttachmentsRequest {
  /** Required. The name of the Runtime Project Attachment to delete. Format: `projects/{project}/locations/{location}/runtimeProjectAttachments/{runtime_project_attachment}` */
  name: string;
}

export const DeleteProjectsLocationsRuntimeProjectAttachmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsRuntimeProjectAttachmentsRequest>;

export type DeleteProjectsLocationsRuntimeProjectAttachmentsResponse = Empty;
export const DeleteProjectsLocationsRuntimeProjectAttachmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsRuntimeProjectAttachmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a runtime project attachment in the API Hub. This call will detach the runtime project from the host project. */
export const deleteProjectsLocationsRuntimeProjectAttachments: API.OperationMethod<
  DeleteProjectsLocationsRuntimeProjectAttachmentsRequest,
  DeleteProjectsLocationsRuntimeProjectAttachmentsResponse,
  DeleteProjectsLocationsRuntimeProjectAttachmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsRuntimeProjectAttachmentsRequest,
  output: DeleteProjectsLocationsRuntimeProjectAttachmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsApiHubInstancesRequest {
  /** Required. The parent resource for the Api Hub instance resource. Format: `projects/{project}/locations/{location}` */
  parent: string;
  /** Optional. Identifier to assign to the Api Hub instance. Must be unique within scope of the parent resource. If the field is not provided, system generated id will be used. This value should be 4-40 characters, and valid characters are `/a-z[0-9]-_/`. */
  apiHubInstanceId?: string;
  /** Request body */
  body?: GoogleCloudApihubV1ApiHubInstance;
}

export const CreateProjectsLocationsApiHubInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    apiHubInstanceId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("apiHubInstanceId"),
    ),
    body: Schema.optional(GoogleCloudApihubV1ApiHubInstance).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/apiHubInstances",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsApiHubInstancesRequest>;

export type CreateProjectsLocationsApiHubInstancesResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsApiHubInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsApiHubInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Provisions instance resources for the API Hub. */
export const createProjectsLocationsApiHubInstances: API.OperationMethod<
  CreateProjectsLocationsApiHubInstancesRequest,
  CreateProjectsLocationsApiHubInstancesResponse,
  CreateProjectsLocationsApiHubInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsApiHubInstancesRequest,
  output: CreateProjectsLocationsApiHubInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsApiHubInstancesRequest {
  /** Optional. The list of fields to update. */
  updateMask?: string;
  /** Identifier. Format: `projects/{project}/locations/{location}/apiHubInstances/{apiHubInstance}`. */
  name: string;
  /** Request body */
  body?: GoogleCloudApihubV1ApiHubInstance;
}

export const PatchProjectsLocationsApiHubInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudApihubV1ApiHubInstance).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsApiHubInstancesRequest>;

export type PatchProjectsLocationsApiHubInstancesResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsApiHubInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsApiHubInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update an Api Hub instance. The following fields in the ApiHubInstance can be updated: * disable_search * vertex_location * agent_registry_sync_config The update_mask should be used to specify the fields being updated. */
export const patchProjectsLocationsApiHubInstances: API.OperationMethod<
  PatchProjectsLocationsApiHubInstancesRequest,
  PatchProjectsLocationsApiHubInstancesResponse,
  PatchProjectsLocationsApiHubInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsApiHubInstancesRequest,
  output: PatchProjectsLocationsApiHubInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsApiHubInstancesRequest {
  /** Required. The name of the Api Hub instance to delete. Format: `projects/{project}/locations/{location}/apiHubInstances/{apiHubInstance}`. */
  name: string;
}

export const DeleteProjectsLocationsApiHubInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsApiHubInstancesRequest>;

export type DeleteProjectsLocationsApiHubInstancesResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsApiHubInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsApiHubInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the API hub instance. Deleting the API hub instance will also result in the removal of all associated runtime project attachments and the host project registration. */
export const deleteProjectsLocationsApiHubInstances: API.OperationMethod<
  DeleteProjectsLocationsApiHubInstancesRequest,
  DeleteProjectsLocationsApiHubInstancesResponse,
  DeleteProjectsLocationsApiHubInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsApiHubInstancesRequest,
  output: DeleteProjectsLocationsApiHubInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface LookupProjectsLocationsApiHubInstancesRequest {
  /** Required. There will always be only one Api Hub instance for a Google Cloud project across all locations. The parent resource for the Api Hub instance resource. Format: `projects/{project}/locations/{location}` */
  parent: string;
}

export const LookupProjectsLocationsApiHubInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/apiHubInstances:lookup" }),
    svc,
  ) as unknown as Schema.Schema<LookupProjectsLocationsApiHubInstancesRequest>;

export type LookupProjectsLocationsApiHubInstancesResponse =
  GoogleCloudApihubV1LookupApiHubInstanceResponse;
export const LookupProjectsLocationsApiHubInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1LookupApiHubInstanceResponse;

export type LookupProjectsLocationsApiHubInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Looks up an Api Hub instance in a given Google Cloud project. There will always be only one Api Hub instance for a Google Cloud project across all locations. */
export const lookupProjectsLocationsApiHubInstances: API.OperationMethod<
  LookupProjectsLocationsApiHubInstancesRequest,
  LookupProjectsLocationsApiHubInstancesResponse,
  LookupProjectsLocationsApiHubInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LookupProjectsLocationsApiHubInstancesRequest,
  output: LookupProjectsLocationsApiHubInstancesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsApiHubInstancesRequest {
  /** Required. The name of the Api Hub instance to retrieve. Format: `projects/{project}/locations/{location}/apiHubInstances/{apiHubInstance}`. */
  name: string;
}

export const GetProjectsLocationsApiHubInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsApiHubInstancesRequest>;

export type GetProjectsLocationsApiHubInstancesResponse =
  GoogleCloudApihubV1ApiHubInstance;
export const GetProjectsLocationsApiHubInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1ApiHubInstance;

export type GetProjectsLocationsApiHubInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single API Hub instance. */
export const getProjectsLocationsApiHubInstances: API.OperationMethod<
  GetProjectsLocationsApiHubInstancesRequest,
  GetProjectsLocationsApiHubInstancesResponse,
  GetProjectsLocationsApiHubInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsApiHubInstancesRequest,
  output: GetProjectsLocationsApiHubInstancesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsDiscoveredApiObservationsRequest {
  /** Required. The parent, which owns this collection of ApiObservations. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Optional. A page token, received from a previous `ListApiObservations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApiObservations` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The maximum number of ApiObservations to return. The service may return fewer than this value. If unspecified, at most 10 ApiObservations will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsLocationsDiscoveredApiObservationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/discoveredApiObservations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDiscoveredApiObservationsRequest>;

export type ListProjectsLocationsDiscoveredApiObservationsResponse =
  GoogleCloudApihubV1ListDiscoveredApiObservationsResponse;
export const ListProjectsLocationsDiscoveredApiObservationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1ListDiscoveredApiObservationsResponse;

export type ListProjectsLocationsDiscoveredApiObservationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the DiscoveredAPIObservations in a given project and location. */
export const listProjectsLocationsDiscoveredApiObservations: API.PaginatedOperationMethod<
  ListProjectsLocationsDiscoveredApiObservationsRequest,
  ListProjectsLocationsDiscoveredApiObservationsResponse,
  ListProjectsLocationsDiscoveredApiObservationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDiscoveredApiObservationsRequest,
  output: ListProjectsLocationsDiscoveredApiObservationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsDiscoveredApiObservationsRequest {
  /** Required. The name of the DiscoveredApiObservation to retrieve. Format: projects/{project}/locations/{location}/discoveredApiObservations/{discovered_api_observation} */
  name: string;
}

export const GetProjectsLocationsDiscoveredApiObservationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDiscoveredApiObservationsRequest>;

export type GetProjectsLocationsDiscoveredApiObservationsResponse =
  GoogleCloudApihubV1DiscoveredApiObservation;
export const GetProjectsLocationsDiscoveredApiObservationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1DiscoveredApiObservation;

export type GetProjectsLocationsDiscoveredApiObservationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a DiscoveredAPIObservation in a given project, location and ApiObservation. */
export const getProjectsLocationsDiscoveredApiObservations: API.OperationMethod<
  GetProjectsLocationsDiscoveredApiObservationsRequest,
  GetProjectsLocationsDiscoveredApiObservationsResponse,
  GetProjectsLocationsDiscoveredApiObservationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDiscoveredApiObservationsRequest,
  output: GetProjectsLocationsDiscoveredApiObservationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsRequest {
  /** Optional. A page token, received from a previous `ListDiscoveredApiApiOperations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDiscoveredApiApiOperations` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. DiscoveredApiOperations will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent, which owns this collection of DiscoveredApiOperations. Format: projects/{project}/locations/{location}/discoveredApiObservations/{discovered_api_observation} */
  parent: string;
}

export const ListProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/discoveredApiOperations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsRequest>;

export type ListProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsResponse =
  GoogleCloudApihubV1ListDiscoveredApiOperationsResponse;
export const ListProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1ListDiscoveredApiOperationsResponse;

export type ListProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the DiscoveredAPIOperations in a given project, location and ApiObservation. */
export const listProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsRequest,
  ListProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsResponse,
  ListProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input:
    ListProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsRequest,
  output:
    ListProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsRequest {
  /** Required. The name of the DiscoveredApiOperation to retrieve. Format: projects/{project}/locations/{location}/discoveredApiObservations/{discovered_api_observation}/discoveredApiOperations/{discovered_api_operation} */
  name: string;
}

export const GetProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsRequest>;

export type GetProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsResponse =
  GoogleCloudApihubV1DiscoveredApiOperation;
export const GetProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1DiscoveredApiOperation;

export type GetProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a DiscoveredAPIOperation in a given project, location, ApiObservation and ApiOperation. */
export const getProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperations: API.OperationMethod<
  GetProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsRequest,
  GetProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsResponse,
  GetProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    GetProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsRequest,
  output:
    GetProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsAddonsRequest {
  /** Optional. A page token, received from a previous `ListAddons` call. Provide this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to `ListAddons` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The maximum number of hub addons to return. The service may return fewer than this value. If unspecified, at most 50 hub addons will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent resource where this addon will be created. Format: `projects/{project}/locations/{location}`. */
  parent: string;
  /** Optional. An expression that filters the list of addons. The only supported filter is `plugin_instance_name`. It can be used to filter addons that are enabled for a given plugin instance. The format of the filter is `plugin_instance_name = "projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}"`. */
  filter?: string;
}

export const ListProjectsLocationsAddonsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/addons" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAddonsRequest>;

export type ListProjectsLocationsAddonsResponse =
  GoogleCloudApihubV1ListAddonsResponse;
export const ListProjectsLocationsAddonsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1ListAddonsResponse;

export type ListProjectsLocationsAddonsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List addons. */
export const listProjectsLocationsAddons: API.PaginatedOperationMethod<
  ListProjectsLocationsAddonsRequest,
  ListProjectsLocationsAddonsResponse,
  ListProjectsLocationsAddonsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAddonsRequest,
  output: ListProjectsLocationsAddonsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsAddonsRequest {
  /** Required. The name of the addon to get. Format: `projects/{project}/locations/{location}/addons/{addon}`. */
  name: string;
}

export const GetProjectsLocationsAddonsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAddonsRequest>;

export type GetProjectsLocationsAddonsResponse = GoogleCloudApihubV1Addon;
export const GetProjectsLocationsAddonsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1Addon;

export type GetProjectsLocationsAddonsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get an addon. */
export const getProjectsLocationsAddons: API.OperationMethod<
  GetProjectsLocationsAddonsRequest,
  GetProjectsLocationsAddonsResponse,
  GetProjectsLocationsAddonsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAddonsRequest,
  output: GetProjectsLocationsAddonsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ManageConfigProjectsLocationsAddonsRequest {
  /** Required. The name of the addon for which the config is to be managed. Format: `projects/{project}/locations/{location}/addons/{addon}`. */
  name: string;
  /** Request body */
  body?: GoogleCloudApihubV1ManageAddonConfigRequest;
}

export const ManageConfigProjectsLocationsAddonsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudApihubV1ManageAddonConfigRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:manageConfig", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ManageConfigProjectsLocationsAddonsRequest>;

export type ManageConfigProjectsLocationsAddonsResponse =
  GoogleLongrunningOperation;
export const ManageConfigProjectsLocationsAddonsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ManageConfigProjectsLocationsAddonsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Manage addon config. This RPC is used for managing the config of the addon. Calling this RPC moves the addon into an updating state until the long-running operation succeeds. */
export const manageConfigProjectsLocationsAddons: API.OperationMethod<
  ManageConfigProjectsLocationsAddonsRequest,
  ManageConfigProjectsLocationsAddonsResponse,
  ManageConfigProjectsLocationsAddonsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ManageConfigProjectsLocationsAddonsRequest,
  output: ManageConfigProjectsLocationsAddonsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAttributesRequest {
  /** Required. The name of the attribute to retrieve. Format: `projects/{project}/locations/{location}/attributes/{attribute}` */
  name: string;
}

export const GetProjectsLocationsAttributesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAttributesRequest>;

export type GetProjectsLocationsAttributesResponse =
  GoogleCloudApihubV1Attribute;
export const GetProjectsLocationsAttributesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1Attribute;

export type GetProjectsLocationsAttributesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get details about the attribute. */
export const getProjectsLocationsAttributes: API.OperationMethod<
  GetProjectsLocationsAttributesRequest,
  GetProjectsLocationsAttributesResponse,
  GetProjectsLocationsAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAttributesRequest,
  output: GetProjectsLocationsAttributesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsAttributesRequest {
  /** Required. The name of the attribute to delete. Format: `projects/{project}/locations/{location}/attributes/{attribute}` */
  name: string;
}

export const DeleteProjectsLocationsAttributesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAttributesRequest>;

export type DeleteProjectsLocationsAttributesResponse = Empty;
export const DeleteProjectsLocationsAttributesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsAttributesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete an attribute. Note: System defined attributes cannot be deleted. All associations of the attribute being deleted with any API hub resource will also get deleted. */
export const deleteProjectsLocationsAttributes: API.OperationMethod<
  DeleteProjectsLocationsAttributesRequest,
  DeleteProjectsLocationsAttributesResponse,
  DeleteProjectsLocationsAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAttributesRequest,
  output: DeleteProjectsLocationsAttributesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAttributesRequest {
  /** Required. The parent resource for Attribute. Format: `projects/{project}/locations/{location}` */
  parent: string;
  /** Optional. The ID to use for the attribute, which will become the final component of the attribute's resource name. This field is optional. * If provided, the same will be used. The service will throw an error if the specified id is already used by another attribute resource in the API hub. * If not provided, a system generated id will be used. This value should be 4-500 characters, and valid characters are /a-z[0-9]-_/. */
  attributeId?: string;
  /** Request body */
  body?: GoogleCloudApihubV1Attribute;
}

export const CreateProjectsLocationsAttributesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    attributeId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("attributeId"),
    ),
    body: Schema.optional(GoogleCloudApihubV1Attribute).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/attributes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAttributesRequest>;

export type CreateProjectsLocationsAttributesResponse =
  GoogleCloudApihubV1Attribute;
export const CreateProjectsLocationsAttributesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1Attribute;

export type CreateProjectsLocationsAttributesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a user defined attribute. Certain pre defined attributes are already created by the API hub. These attributes will have type as `SYSTEM_DEFINED` and can be listed via ListAttributes method. Allowed values for the same can be updated via UpdateAttribute method. */
export const createProjectsLocationsAttributes: API.OperationMethod<
  CreateProjectsLocationsAttributesRequest,
  CreateProjectsLocationsAttributesResponse,
  CreateProjectsLocationsAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAttributesRequest,
  output: CreateProjectsLocationsAttributesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAttributesRequest {
  /** Required. The list of fields to update. */
  updateMask?: string;
  /** Identifier. The name of the attribute in the API Hub. Format: `projects/{project}/locations/{location}/attributes/{attribute}` */
  name: string;
  /** Request body */
  body?: GoogleCloudApihubV1Attribute;
}

export const PatchProjectsLocationsAttributesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudApihubV1Attribute).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAttributesRequest>;

export type PatchProjectsLocationsAttributesResponse =
  GoogleCloudApihubV1Attribute;
export const PatchProjectsLocationsAttributesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1Attribute;

export type PatchProjectsLocationsAttributesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the attribute. The following fields in the Attribute resource can be updated: * display_name The display name can be updated for user defined attributes only. * description The description can be updated for user defined attributes only. * allowed_values To update the list of allowed values, clients need to use the fetched list of allowed values and add or remove values to or from the same list. The mutable allowed values can be updated for both user defined and System defined attributes. The immutable allowed values cannot be updated or deleted. The updated list of allowed values cannot be empty. If an allowed value that is already used by some resource's attribute is deleted, then the association between the resource and the attribute value will also be deleted. * cardinality The cardinality can be updated for user defined attributes only. Cardinality can only be increased during an update. The update_mask should be used to specify the fields being updated. */
export const patchProjectsLocationsAttributes: API.OperationMethod<
  PatchProjectsLocationsAttributesRequest,
  PatchProjectsLocationsAttributesResponse,
  PatchProjectsLocationsAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAttributesRequest,
  output: PatchProjectsLocationsAttributesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAttributesRequest {
  /** Optional. The maximum number of attribute resources to return. The service may return fewer than this value. If unspecified, at most 50 attributes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListAttributes` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAttributes` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The parent resource for Attribute. Format: `projects/{project}/locations/{location}` */
  parent: string;
  /** Optional. An expression that filters the list of Attributes. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string or a boolean. The comparison operator must be one of: `<`, `>` or `=`. Filters are not case sensitive. The following fields in the `Attribute` are eligible for filtering: * `display_name` - The display name of the Attribute. Allowed comparison operators: `=`. * `definition_type` - The definition type of the attribute. Allowed comparison operators: `=`. * `scope` - The scope of the attribute. Allowed comparison operators: `=`. * `data_type` - The type of the data of the attribute. Allowed comparison operators: `=`. * `mandatory` - Denotes whether the attribute is mandatory or not. Allowed comparison operators: `=`. * `create_time` - The time at which the Attribute was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators: `>` and `<`. Expressions are combined with either `AND` logic operator or `OR` logical operator but not both of them together i.e. only one of the `AND` or `OR` operator can be used throughout the filter string and both the operators cannot be used together. No other logical operators are supported. At most three filter fields are allowed in the filter string and if provided more than that then `INVALID_ARGUMENT` error is returned by the API. Here are a few examples: * `display_name = production` - - The display name of the attribute is _production_. * `(display_name = production) AND (create_time < \"2021-08-15T14:50:00Z\") AND (create_time > \"2021-08-10T12:00:00Z\")` - The display name of the attribute is _production_ and the attribute was created before _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_. * `display_name = production OR scope = api` - The attribute where the display name is _production_ or the scope is _api_. */
  filter?: string;
}

export const ListProjectsLocationsAttributesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/attributes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAttributesRequest>;

export type ListProjectsLocationsAttributesResponse =
  GoogleCloudApihubV1ListAttributesResponse;
export const ListProjectsLocationsAttributesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1ListAttributesResponse;

export type ListProjectsLocationsAttributesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List all attributes. */
export const listProjectsLocationsAttributes: API.PaginatedOperationMethod<
  ListProjectsLocationsAttributesRequest,
  ListProjectsLocationsAttributesResponse,
  ListProjectsLocationsAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAttributesRequest,
  output: ListProjectsLocationsAttributesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsCurationsRequest {
  /** Required. The name of the curation resource to retrieve. Format: `projects/{project}/locations/{location}/curations/{curation}` */
  name: string;
}

export const GetProjectsLocationsCurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsCurationsRequest>;

export type GetProjectsLocationsCurationsResponse = GoogleCloudApihubV1Curation;
export const GetProjectsLocationsCurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1Curation;

export type GetProjectsLocationsCurationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get curation resource details. */
export const getProjectsLocationsCurations: API.OperationMethod<
  GetProjectsLocationsCurationsRequest,
  GetProjectsLocationsCurationsResponse,
  GetProjectsLocationsCurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsCurationsRequest,
  output: GetProjectsLocationsCurationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsCurationsRequest {
  /** Required. The parent resource for the curation resource. Format: `projects/{project}/locations/{location}` */
  parent: string;
  /** Optional. The ID to use for the curation resource, which will become the final component of the curations's resource name. This field is optional. * If provided, the same will be used. The service will throw an error if the specified ID is already used by another curation resource in the API hub. * If not provided, a system generated ID will be used. This value should be 4-500 characters, and valid characters are /a-z[0-9]-_/. */
  curationId?: string;
  /** Request body */
  body?: GoogleCloudApihubV1Curation;
}

export const CreateProjectsLocationsCurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    curationId: Schema.optional(Schema.String).pipe(T.HttpQuery("curationId")),
    body: Schema.optional(GoogleCloudApihubV1Curation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/curations", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsCurationsRequest>;

export type CreateProjectsLocationsCurationsResponse =
  GoogleCloudApihubV1Curation;
export const CreateProjectsLocationsCurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1Curation;

export type CreateProjectsLocationsCurationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a curation resource in the API hub. Once a curation resource is created, plugin instances can start using it. */
export const createProjectsLocationsCurations: API.OperationMethod<
  CreateProjectsLocationsCurationsRequest,
  CreateProjectsLocationsCurationsResponse,
  CreateProjectsLocationsCurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsCurationsRequest,
  output: CreateProjectsLocationsCurationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsCurationsRequest {
  /** Optional. The list of fields to update. */
  updateMask?: string;
  /** Identifier. The name of the curation. Format: `projects/{project}/locations/{location}/curations/{curation}` */
  name: string;
  /** Request body */
  body?: GoogleCloudApihubV1Curation;
}

export const PatchProjectsLocationsCurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudApihubV1Curation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsCurationsRequest>;

export type PatchProjectsLocationsCurationsResponse =
  GoogleCloudApihubV1Curation;
export const PatchProjectsLocationsCurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1Curation;

export type PatchProjectsLocationsCurationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a curation resource in the API hub. The following fields in the curation can be updated: * display_name * description The update_mask should be used to specify the fields being updated. */
export const patchProjectsLocationsCurations: API.OperationMethod<
  PatchProjectsLocationsCurationsRequest,
  PatchProjectsLocationsCurationsResponse,
  PatchProjectsLocationsCurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsCurationsRequest,
  output: PatchProjectsLocationsCurationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsCurationsRequest {
  /** Optional. A page token, received from a previous `ListCurations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to `ListCurations` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The maximum number of curation resources to return. The service may return fewer than this value. If unspecified, at most 50 curations will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent, which owns this collection of curation resources. Format: `projects/{project}/locations/{location}` */
  parent: string;
  /** Optional. An expression that filters the list of curation resources. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string. The comparison operator must be one of: `<`, `>`, `:` or `=`. Filters are case insensitive. The following fields in the `curation resource` are eligible for filtering: * `create_time` - The time at which the curation was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators: `>` and `<`. * `display_name` - The display name of the curation. Allowed comparison operators: `=`. * `state` - The state of the curation. Allowed comparison operators: `=`. Expressions are combined with either `AND` logic operator or `OR` logical operator but not both of them together i.e. only one of the `AND` or `OR` operator can be used throughout the filter string and both the operators cannot be used together. No other logical operators are supported. At most three filter fields are allowed in the filter string and if provided more than that then `INVALID_ARGUMENT` error is returned by the API. Here are a few examples: * `create_time < \"2021-08-15T14:50:00Z\" AND create_time > \"2021-08-10T12:00:00Z\"` - The curation resource was created before _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_. */
  filter?: string;
}

export const ListProjectsLocationsCurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/curations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsCurationsRequest>;

export type ListProjectsLocationsCurationsResponse =
  GoogleCloudApihubV1ListCurationsResponse;
export const ListProjectsLocationsCurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1ListCurationsResponse;

export type ListProjectsLocationsCurationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List curation resources in the API hub. */
export const listProjectsLocationsCurations: API.PaginatedOperationMethod<
  ListProjectsLocationsCurationsRequest,
  ListProjectsLocationsCurationsResponse,
  ListProjectsLocationsCurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsCurationsRequest,
  output: ListProjectsLocationsCurationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsCurationsRequest {
  /** Required. The name of the curation resource to delete. Format: `projects/{project}/locations/{location}/curations/{curation}` */
  name: string;
}

export const DeleteProjectsLocationsCurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsCurationsRequest>;

export type DeleteProjectsLocationsCurationsResponse = Empty;
export const DeleteProjectsLocationsCurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsCurationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a curation resource in the API hub. A curation can only be deleted if it's not being used by any plugin instance. */
export const deleteProjectsLocationsCurations: API.OperationMethod<
  DeleteProjectsLocationsCurationsRequest,
  DeleteProjectsLocationsCurationsResponse,
  DeleteProjectsLocationsCurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsCurationsRequest,
  output: DeleteProjectsLocationsCurationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsDependenciesRequest {
  /** Required. The name of the dependency resource to retrieve. Format: `projects/{project}/locations/{location}/dependencies/{dependency}` */
  name: string;
}

export const GetProjectsLocationsDependenciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDependenciesRequest>;

export type GetProjectsLocationsDependenciesResponse =
  GoogleCloudApihubV1Dependency;
export const GetProjectsLocationsDependenciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1Dependency;

export type GetProjectsLocationsDependenciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get details about a dependency resource in the API hub. */
export const getProjectsLocationsDependencies: API.OperationMethod<
  GetProjectsLocationsDependenciesRequest,
  GetProjectsLocationsDependenciesResponse,
  GetProjectsLocationsDependenciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDependenciesRequest,
  output: GetProjectsLocationsDependenciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsDependenciesRequest {
  /** Optional. The ID to use for the dependency resource, which will become the final component of the dependency's resource name. This field is optional. * If provided, the same will be used. The service will throw an error if duplicate id is provided by the client. * If not provided, a system generated id will be used. This value should be 4-500 characters, and valid characters are `a-z[0-9]-_`. */
  dependencyId?: string;
  /** Required. The parent resource for the dependency resource. Format: `projects/{project}/locations/{location}` */
  parent: string;
  /** Request body */
  body?: GoogleCloudApihubV1Dependency;
}

export const CreateProjectsLocationsDependenciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dependencyId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("dependencyId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudApihubV1Dependency).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/dependencies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsDependenciesRequest>;

export type CreateProjectsLocationsDependenciesResponse =
  GoogleCloudApihubV1Dependency;
export const CreateProjectsLocationsDependenciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1Dependency;

export type CreateProjectsLocationsDependenciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a dependency between two entities in the API hub. */
export const createProjectsLocationsDependencies: API.OperationMethod<
  CreateProjectsLocationsDependenciesRequest,
  CreateProjectsLocationsDependenciesResponse,
  CreateProjectsLocationsDependenciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsDependenciesRequest,
  output: CreateProjectsLocationsDependenciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsDependenciesRequest {
  /** Identifier. The name of the dependency in the API Hub. Format: `projects/{project}/locations/{location}/dependencies/{dependency}` */
  name: string;
  /** Required. The list of fields to update. */
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudApihubV1Dependency;
}

export const PatchProjectsLocationsDependenciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudApihubV1Dependency).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsDependenciesRequest>;

export type PatchProjectsLocationsDependenciesResponse =
  GoogleCloudApihubV1Dependency;
export const PatchProjectsLocationsDependenciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1Dependency;

export type PatchProjectsLocationsDependenciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a dependency based on the update_mask provided in the request. The following fields in the dependency can be updated: * description */
export const patchProjectsLocationsDependencies: API.OperationMethod<
  PatchProjectsLocationsDependenciesRequest,
  PatchProjectsLocationsDependenciesResponse,
  PatchProjectsLocationsDependenciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsDependenciesRequest,
  output: PatchProjectsLocationsDependenciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsDependenciesRequest {
  /** Optional. The maximum number of dependency resources to return. The service may return fewer than this value. If unspecified, at most 50 dependencies will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListDependencies` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDependencies` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The parent which owns this collection of dependency resources. Format: `projects/{project}/locations/{location}` */
  parent: string;
  /** Optional. An expression that filters the list of Dependencies. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string. Allowed comparison operator is `=`. Filters are not case sensitive. The following fields in the `Dependency` are eligible for filtering: * `consumer.operation_resource_name` - The operation resource name for the consumer entity involved in a dependency. Allowed comparison operators: `=`. * `consumer.external_api_resource_name` - The external api resource name for the consumer entity involved in a dependency. Allowed comparison operators: `=`. * `supplier.operation_resource_name` - The operation resource name for the supplier entity involved in a dependency. Allowed comparison operators: `=`. * `supplier.external_api_resource_name` - The external api resource name for the supplier entity involved in a dependency. Allowed comparison operators: `=`. Expressions are combined with either `AND` logic operator or `OR` logical operator but not both of them together i.e. only one of the `AND` or `OR` operator can be used throughout the filter string and both the operators cannot be used together. No other logical operators are supported. At most three filter fields are allowed in the filter string and if provided more than that then `INVALID_ARGUMENT` error is returned by the API. For example, `consumer.operation_resource_name = \"projects/p1/locations/global/apis/a1/versions/v1/operations/o1\" OR supplier.operation_resource_name = \"projects/p1/locations/global/apis/a1/versions/v1/operations/o1\"` - The dependencies with either consumer or supplier operation resource name as _projects/p1/locations/global/apis/a1/versions/v1/operations/o1_. */
  filter?: string;
}

export const ListProjectsLocationsDependenciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/dependencies" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDependenciesRequest>;

export type ListProjectsLocationsDependenciesResponse =
  GoogleCloudApihubV1ListDependenciesResponse;
export const ListProjectsLocationsDependenciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudApihubV1ListDependenciesResponse;

export type ListProjectsLocationsDependenciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List dependencies based on the provided filter and pagination parameters. */
export const listProjectsLocationsDependencies: API.PaginatedOperationMethod<
  ListProjectsLocationsDependenciesRequest,
  ListProjectsLocationsDependenciesResponse,
  ListProjectsLocationsDependenciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDependenciesRequest,
  output: ListProjectsLocationsDependenciesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsDependenciesRequest {
  /** Required. The name of the dependency resource to delete. Format: `projects/{project}/locations/{location}/dependencies/{dependency}` */
  name: string;
}

export const DeleteProjectsLocationsDependenciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsDependenciesRequest>;

export type DeleteProjectsLocationsDependenciesResponse = Empty;
export const DeleteProjectsLocationsDependenciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsDependenciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete the dependency resource. */
export const deleteProjectsLocationsDependencies: API.OperationMethod<
  DeleteProjectsLocationsDependenciesRequest,
  DeleteProjectsLocationsDependenciesResponse,
  DeleteProjectsLocationsDependenciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsDependenciesRequest,
  output: DeleteProjectsLocationsDependenciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
