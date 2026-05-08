// ==========================================================================
// Apps Script API (script v1)
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
  name: "script",
  version: "v1",
  rootUrl: "https://script.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleAppsScriptTypeFunction {
  /** The function name in the script project. */
  name?: string;
  /** The ordered list of parameter names of the function in the script project. */
  parameters?: ReadonlyArray<string>;
}

export const GoogleAppsScriptTypeFunction: Schema.Schema<GoogleAppsScriptTypeFunction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleAppsScriptTypeFunction" });

export interface GoogleAppsScriptTypeWebAppConfig {
  /** Who has permission to run the web app. */
  access?:
    | "UNKNOWN_ACCESS"
    | "MYSELF"
    | "DOMAIN"
    | "ANYONE"
    | "ANYONE_ANONYMOUS"
    | (string & {});
  /** Who to execute the web app as. */
  executeAs?:
    | "UNKNOWN_EXECUTE_AS"
    | "USER_ACCESSING"
    | "USER_DEPLOYING"
    | (string & {});
}

export const GoogleAppsScriptTypeWebAppConfig: Schema.Schema<GoogleAppsScriptTypeWebAppConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    access: Schema.optional(Schema.String),
    executeAs: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsScriptTypeWebAppConfig" });

export interface GoogleAppsScriptTypeWebAppEntryPoint {
  /** The entry point's configuration. */
  entryPointConfig?: GoogleAppsScriptTypeWebAppConfig;
  /** The URL for the web application. */
  url?: string;
}

export const GoogleAppsScriptTypeWebAppEntryPoint: Schema.Schema<GoogleAppsScriptTypeWebAppEntryPoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entryPointConfig: Schema.optional(GoogleAppsScriptTypeWebAppConfig),
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsScriptTypeWebAppEntryPoint" });

export interface GoogleAppsScriptTypeExecutionApiConfig {
  /** Who has permission to run the API executable. */
  access?:
    | "UNKNOWN_ACCESS"
    | "MYSELF"
    | "DOMAIN"
    | "ANYONE"
    | "ANYONE_ANONYMOUS"
    | (string & {});
}

export const GoogleAppsScriptTypeExecutionApiConfig: Schema.Schema<GoogleAppsScriptTypeExecutionApiConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    access: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsScriptTypeExecutionApiConfig" });

export interface GoogleAppsScriptTypeExecutionApiEntryPoint {
  /** The entry point's configuration. */
  entryPointConfig?: GoogleAppsScriptTypeExecutionApiConfig;
}

export const GoogleAppsScriptTypeExecutionApiEntryPoint: Schema.Schema<GoogleAppsScriptTypeExecutionApiEntryPoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entryPointConfig: Schema.optional(GoogleAppsScriptTypeExecutionApiConfig),
  }).annotate({ identifier: "GoogleAppsScriptTypeExecutionApiEntryPoint" });

export interface GoogleAppsScriptTypeAddOnEntryPoint {
  /** The add-on's optional report issue URL. */
  reportIssueUrl?: string;
  /** The add-on's optional description. */
  description?: string;
  /** The add-on's required title. */
  title?: string;
  /** The add-on's optional help URL. */
  helpUrl?: string;
  /** The add-on's required list of supported container types. */
  addOnType?: "UNKNOWN_ADDON_TYPE" | "GMAIL" | "DATA_STUDIO" | (string & {});
  /** The add-on's required post install tip URL. */
  postInstallTipUrl?: string;
}

export const GoogleAppsScriptTypeAddOnEntryPoint: Schema.Schema<GoogleAppsScriptTypeAddOnEntryPoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reportIssueUrl: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    helpUrl: Schema.optional(Schema.String),
    addOnType: Schema.optional(Schema.String),
    postInstallTipUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsScriptTypeAddOnEntryPoint" });

export interface EntryPoint {
  /** An entry point specification for web apps. */
  webApp?: GoogleAppsScriptTypeWebAppEntryPoint;
  /** The type of the entry point. */
  entryPointType?:
    | "ENTRY_POINT_TYPE_UNSPECIFIED"
    | "WEB_APP"
    | "EXECUTION_API"
    | "ADD_ON"
    | (string & {});
  /** An entry point specification for Apps Script API execution calls. */
  executionApi?: GoogleAppsScriptTypeExecutionApiEntryPoint;
  /** Add-on properties. */
  addOn?: GoogleAppsScriptTypeAddOnEntryPoint;
}

export const EntryPoint: Schema.Schema<EntryPoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webApp: Schema.optional(GoogleAppsScriptTypeWebAppEntryPoint),
    entryPointType: Schema.optional(Schema.String),
    executionApi: Schema.optional(GoogleAppsScriptTypeExecutionApiEntryPoint),
    addOn: Schema.optional(GoogleAppsScriptTypeAddOnEntryPoint),
  }).annotate({ identifier: "EntryPoint" });

export interface DeploymentConfig {
  /** The script project's Drive ID. */
  scriptId?: string;
  /** The version number on which this deployment is based. */
  versionNumber?: number;
  /** The manifest file name for this deployment. */
  manifestFileName?: string;
  /** The description for this deployment. */
  description?: string;
}

export const DeploymentConfig: Schema.Schema<DeploymentConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scriptId: Schema.optional(Schema.String),
    versionNumber: Schema.optional(Schema.Number),
    manifestFileName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeploymentConfig" });

export interface UpdateDeploymentRequest {
  /** The deployment configuration. */
  deploymentConfig?: DeploymentConfig;
}

export const UpdateDeploymentRequest: Schema.Schema<UpdateDeploymentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deploymentConfig: Schema.optional(DeploymentConfig),
  }).annotate({ identifier: "UpdateDeploymentRequest" });

export interface Status {
  /** The status code. For this API, this value either: - 10, indicating a `SCRIPT_TIMEOUT` error, - 3, indicating an `INVALID_ARGUMENT` error, or - 1, indicating a `CANCELLED` execution. */
  code?: number;
  /** A developer-facing error message, which is in English. Any user-facing error message is localized and sent in the details field, or localized by the client. */
  message?: string;
  /** An array that contains a single ExecutionError object that provides information about the nature of the error. */
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
  /** This field indicates whether the script execution has completed. A completed execution has a populated `response` field containing the ExecutionResponse from function that was executed. */
  done?: boolean;
  /** If the script function returns successfully, this field contains an ExecutionResponse object with the function's return value. */
  response?: Record<string, unknown>;
  /** If a `run` call succeeds but the script function (or Apps Script itself) throws an exception, this field contains a Status object. The `Status` object's `details` field contains an array with a single ExecutionError object that provides information about the nature of the error. */
  error?: Status;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    done: Schema.optional(Schema.Boolean),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(Status),
  }).annotate({ identifier: "Operation" });

export interface GoogleAppsScriptTypeUser {
  /** The user's identifying email address. */
  email?: string;
  /** The user's display name. */
  name?: string;
  /** The user's domain. */
  domain?: string;
  /** The user's photo. */
  photoUrl?: string;
}

export const GoogleAppsScriptTypeUser: Schema.Schema<GoogleAppsScriptTypeUser> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    photoUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsScriptTypeUser" });

export interface Project {
  /** The title for the project. */
  title?: string;
  /** The parent's Drive ID that the script will be attached to. This is usually the ID of a Google Document or Google Sheet. This field is optional, and if not set, a stand-alone script will be created. */
  parentId?: string;
  /** The script project's Drive ID. */
  scriptId?: string;
  /** When the script was created. */
  createTime?: string;
  /** User who originally created the script. */
  creator?: GoogleAppsScriptTypeUser;
  /** User who last modified the script. */
  lastModifyUser?: GoogleAppsScriptTypeUser;
  /** When the script was last updated. */
  updateTime?: string;
}

export const Project: Schema.Schema<Project> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    parentId: Schema.optional(Schema.String),
    scriptId: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    creator: Schema.optional(GoogleAppsScriptTypeUser),
    lastModifyUser: Schema.optional(GoogleAppsScriptTypeUser),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Project" });

export interface ScriptStackTraceElement {
  /** The name of the function that failed. */
  function?: string;
  /** The line number where the script failed. */
  lineNumber?: number;
}

export const ScriptStackTraceElement: Schema.Schema<ScriptStackTraceElement> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    function: Schema.optional(Schema.String),
    lineNumber: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ScriptStackTraceElement" });

export interface Deployment {
  /** Last modified date time stamp. */
  updateTime?: string;
  /** The deployment's entry points. */
  entryPoints?: ReadonlyArray<EntryPoint>;
  /** The deployment ID for this deployment. */
  deploymentId?: string;
  /** The deployment configuration. */
  deploymentConfig?: DeploymentConfig;
}

export const Deployment: Schema.Schema<Deployment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    entryPoints: Schema.optional(Schema.Array(EntryPoint)),
    deploymentId: Schema.optional(Schema.String),
    deploymentConfig: Schema.optional(DeploymentConfig),
  }).annotate({ identifier: "Deployment" });

export interface ListDeploymentsResponse {
  /** The list of deployments. */
  deployments?: ReadonlyArray<Deployment>;
  /** The token that can be used in the next call to get the next page of results. */
  nextPageToken?: string;
}

export const ListDeploymentsResponse: Schema.Schema<ListDeploymentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deployments: Schema.optional(Schema.Array(Deployment)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDeploymentsResponse" });

export interface CreateProjectRequest {
  /** The title for the project. */
  title?: string;
  /** The Drive ID of a parent file that the created script project is bound to. This is usually the ID of a Google Doc, Google Sheet, Google Form, or Google Slides file. If not set, a standalone script project is created. */
  parentId?: string;
}

export const CreateProjectRequest: Schema.Schema<CreateProjectRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    parentId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreateProjectRequest" });

export interface GoogleAppsScriptTypeProcess {
  /** The executions type. */
  processType?:
    | "PROCESS_TYPE_UNSPECIFIED"
    | "ADD_ON"
    | "EXECUTION_API"
    | "TIME_DRIVEN"
    | "TRIGGER"
    | "WEBAPP"
    | "EDITOR"
    | "SIMPLE_TRIGGER"
    | "MENU"
    | "BATCH_TASK"
    | (string & {});
  /** Time the execution started. */
  startTime?: string;
  /** Which version of maestro to use to execute the script. */
  runtimeVersion?:
    | "RUNTIME_VERSION_UNSPECIFIED"
    | "DEPRECATED_ES5"
    | "V8"
    | (string & {});
  /** Duration the execution spent executing. */
  duration?: string;
  /** The executing users access level to the script. */
  userAccessLevel?:
    | "USER_ACCESS_LEVEL_UNSPECIFIED"
    | "NONE"
    | "READ"
    | "WRITE"
    | "OWNER"
    | (string & {});
  /** Name of the script being executed. */
  projectName?: string;
  /** Name of the function the started the execution. */
  functionName?: string;
  /** The executions status. */
  processStatus?:
    | "PROCESS_STATUS_UNSPECIFIED"
    | "RUNNING"
    | "PAUSED"
    | "COMPLETED"
    | "CANCELED"
    | "FAILED"
    | "TIMED_OUT"
    | "UNKNOWN"
    | "DELAYED"
    | "EXECUTION_DISABLED"
    | (string & {});
}

export const GoogleAppsScriptTypeProcess: Schema.Schema<GoogleAppsScriptTypeProcess> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    processType: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    runtimeVersion: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
    userAccessLevel: Schema.optional(Schema.String),
    projectName: Schema.optional(Schema.String),
    functionName: Schema.optional(Schema.String),
    processStatus: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsScriptTypeProcess" });

export interface ListUserProcessesResponse {
  /** List of processes matching request parameters. */
  processes?: ReadonlyArray<GoogleAppsScriptTypeProcess>;
  /** Token for the next page of results. If empty, there are no more pages remaining. */
  nextPageToken?: string;
}

export const ListUserProcessesResponse: Schema.Schema<ListUserProcessesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    processes: Schema.optional(Schema.Array(GoogleAppsScriptTypeProcess)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListUserProcessesResponse" });

export interface ListScriptProcessesResponse {
  /** Token for the next page of results. If empty, there are no more pages remaining. */
  nextPageToken?: string;
  /** List of processes matching request parameters. */
  processes?: ReadonlyArray<GoogleAppsScriptTypeProcess>;
}

export const ListScriptProcessesResponse: Schema.Schema<ListScriptProcessesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    processes: Schema.optional(Schema.Array(GoogleAppsScriptTypeProcess)),
  }).annotate({ identifier: "ListScriptProcessesResponse" });

export interface Version {
  /** The script project's Drive ID. */
  scriptId?: string;
  /** The incremental ID that is created by Apps Script when a version is created. This is system assigned number and is immutable once created. */
  versionNumber?: number;
  /** When the version was created. */
  createTime?: string;
  /** The description for this version. */
  description?: string;
}

export const Version: Schema.Schema<Version> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scriptId: Schema.optional(Schema.String),
    versionNumber: Schema.optional(Schema.Number),
    createTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "Version" });

export interface ExecutionRequest {
  /** The name of the function to execute in the given script. The name does not include parentheses or parameters. It can reference a function in an included library such as `Library.libFunction1`. */
  function?: string;
  /** *Deprecated*. For use with Android add-ons only. An ID that represents the user's current session in the Android app for Google Docs or Sheets, included as extra data in the [Intent](https://developer.android.com/guide/components/intents-filters.html) that launches the add-on. When an Android add-on is run with a session state, it gains the privileges of a [bound](https://developers.google.com/apps-script/guides/bound) script—that is, it can access information like the user's current cursor position (in Docs) or selected cell (in Sheets). To retrieve the state, call `Intent.getStringExtra("com.google.android.apps.docs.addons.SessionState")`. Optional. */
  sessionState?: string;
  /** The parameters to be passed to the function being executed. The object type for each parameter should match the expected type in Apps Script. Parameters cannot be Apps Script-specific object types (such as a `Document` or a `Calendar`); they can only be primitive types such as `string`, `number`, `array`, `object`, or `boolean`. Optional. */
  parameters?: ReadonlyArray<unknown>;
  /** If `true` and the user is an owner of the script, the script runs at the most recently saved version rather than the version deployed for use with the Apps Script API. Optional; default is `false`. */
  devMode?: boolean;
}

export const ExecutionRequest: Schema.Schema<ExecutionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    function: Schema.optional(Schema.String),
    sessionState: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Array(Schema.Unknown)),
    devMode: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ExecutionRequest" });

export interface ExecutionError {
  /** The error message thrown by Apps Script, usually localized into the user's language. */
  errorMessage?: string;
  /** The error type, for example `TypeError` or `ReferenceError`. If the error type is unavailable, this field is not included. */
  errorType?: string;
  /** An array of objects that provide a stack trace through the script to show where the execution failed, with the deepest call first. */
  scriptStackTraceElements?: ReadonlyArray<ScriptStackTraceElement>;
}

export const ExecutionError: Schema.Schema<ExecutionError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorMessage: Schema.optional(Schema.String),
    errorType: Schema.optional(Schema.String),
    scriptStackTraceElements: Schema.optional(
      Schema.Array(ScriptStackTraceElement),
    ),
  }).annotate({ identifier: "ExecutionError" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface MetricsValue {
  /** Required field indicating the start time of the interval. */
  startTime?: string;
  /** Indicates the number of executions counted. */
  value?: string;
  /** Required field indicating the end time of the interval. */
  endTime?: string;
}

export const MetricsValue: Schema.Schema<MetricsValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "MetricsValue" });

export interface ListVersionsResponse {
  /** The token use to fetch the next page of records. if not exist in the response, that means no more versions to list. */
  nextPageToken?: string;
  /** The list of versions. */
  versions?: ReadonlyArray<Version>;
}

export const ListVersionsResponse: Schema.Schema<ListVersionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    versions: Schema.optional(Schema.Array(Version)),
  }).annotate({ identifier: "ListVersionsResponse" });

export interface GoogleAppsScriptTypeFunctionSet {
  /** A list of functions composing the set. */
  values?: ReadonlyArray<GoogleAppsScriptTypeFunction>;
}

export const GoogleAppsScriptTypeFunctionSet: Schema.Schema<GoogleAppsScriptTypeFunctionSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(GoogleAppsScriptTypeFunction)),
  }).annotate({ identifier: "GoogleAppsScriptTypeFunctionSet" });

export interface File {
  /** The file content. */
  source?: string;
  /** The type of the file. */
  type?:
    | "ENUM_TYPE_UNSPECIFIED"
    | "SERVER_JS"
    | "HTML"
    | "JSON"
    | (string & {});
  /** The defined set of functions in the script file, if any. */
  functionSet?: GoogleAppsScriptTypeFunctionSet;
  /** The name of the file. The file extension is not part of the file name, which can be identified from the type field. */
  name?: string;
  /** Last modified date timestamp. */
  updateTime?: string;
  /** The user who modified the file most recently. The details visible in this object are controlled by the profile visibility settings of the last modifying user. */
  lastModifyUser?: GoogleAppsScriptTypeUser;
  /** Creation date timestamp. */
  createTime?: string;
}

export const File: Schema.Schema<File> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    functionSet: Schema.optional(GoogleAppsScriptTypeFunctionSet),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    lastModifyUser: Schema.optional(GoogleAppsScriptTypeUser),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "File" });

export interface Content {
  /** The list of script project files. One of the files is a script manifest; it must be named "appsscript", must have type of JSON, and include the manifest configurations for the project. */
  files?: ReadonlyArray<File>;
  /** The script project's Drive ID. */
  scriptId?: string;
}

export const Content: Schema.Schema<Content> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    files: Schema.optional(Schema.Array(File)),
    scriptId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Content" });

export interface Metrics {
  /** Number of active users. */
  activeUsers?: ReadonlyArray<MetricsValue>;
  /** Number of failed executions. */
  failedExecutions?: ReadonlyArray<MetricsValue>;
  /** Number of total executions. */
  totalExecutions?: ReadonlyArray<MetricsValue>;
}

export const Metrics: Schema.Schema<Metrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    activeUsers: Schema.optional(Schema.Array(MetricsValue)),
    failedExecutions: Schema.optional(Schema.Array(MetricsValue)),
    totalExecutions: Schema.optional(Schema.Array(MetricsValue)),
  }).annotate({ identifier: "Metrics" });

export interface ExecutionResponse {
  /** The return value of the script function. The type matches the object type returned in Apps Script. Functions called using the Apps Script API cannot return Apps Script-specific objects (such as a `Document` or a `Calendar`); they can only return primitive types such as a `string`, `number`, `array`, `object`, or `boolean`. */
  result?: unknown;
}

export const ExecutionResponse: Schema.Schema<ExecutionResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.optional(Schema.Unknown),
  }).annotate({ identifier: "ExecutionResponse" });

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

export interface GetMetricsProjectsRequest {
  /** Required field indicating the script to get metrics for. */
  scriptId: string;
  /** Required field indicating what granularity of metrics are returned. */
  metricsGranularity?:
    | "UNSPECIFIED_GRANULARITY"
    | "WEEKLY"
    | "DAILY"
    | (string & {});
  /** Optional field indicating a specific deployment to retrieve metrics from. */
  "metricsFilter.deploymentId"?: string;
}

export const GetMetricsProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scriptId: Schema.String.pipe(T.HttpPath("scriptId")),
    metricsGranularity: Schema.optional(Schema.String).pipe(
      T.HttpQuery("metricsGranularity"),
    ),
    "metricsFilter.deploymentId": Schema.optional(Schema.String).pipe(
      T.HttpQuery("metricsFilter.deploymentId"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/projects/{scriptId}/metrics" }),
    svc,
  ) as unknown as Schema.Schema<GetMetricsProjectsRequest>;

export type GetMetricsProjectsResponse = Metrics;
export const GetMetricsProjectsResponse = /*@__PURE__*/ /*#__PURE__*/ Metrics;

export type GetMetricsProjectsError = DefaultErrors | NotFound | Forbidden;

/** Get metrics data for scripts, such as number of executions and active users. */
export const getMetricsProjects: API.OperationMethod<
  GetMetricsProjectsRequest,
  GetMetricsProjectsResponse,
  GetMetricsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetMetricsProjectsRequest,
  output: GetMetricsProjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetContentProjectsRequest {
  /** The script project's Drive ID. */
  scriptId: string;
  /** The version number of the project to retrieve. If not provided, the project's HEAD version is returned. */
  versionNumber?: number;
}

export const GetContentProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scriptId: Schema.String.pipe(T.HttpPath("scriptId")),
    versionNumber: Schema.optional(Schema.Number).pipe(
      T.HttpQuery("versionNumber"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/projects/{scriptId}/content" }),
    svc,
  ) as unknown as Schema.Schema<GetContentProjectsRequest>;

export type GetContentProjectsResponse = Content;
export const GetContentProjectsResponse = /*@__PURE__*/ /*#__PURE__*/ Content;

export type GetContentProjectsError = DefaultErrors | NotFound | Forbidden;

/** Gets the content of the script project, including the code source and metadata for each script file. */
export const getContentProjects: API.OperationMethod<
  GetContentProjectsRequest,
  GetContentProjectsResponse,
  GetContentProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetContentProjectsRequest,
  output: GetContentProjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsRequest {
  /** Request body */
  body?: CreateProjectRequest;
}

export const CreateProjectsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(CreateProjectRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v1/projects", hasBody: true }),
  svc,
) as unknown as Schema.Schema<CreateProjectsRequest>;

export type CreateProjectsResponse = Project;
export const CreateProjectsResponse = /*@__PURE__*/ /*#__PURE__*/ Project;

export type CreateProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new, empty script project with no script files and a base manifest file. */
export const createProjects: API.OperationMethod<
  CreateProjectsRequest,
  CreateProjectsResponse,
  CreateProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsRequest,
  output: CreateProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsRequest {
  /** The script project's Drive ID. */
  scriptId: string;
}

export const GetProjectsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  scriptId: Schema.String.pipe(T.HttpPath("scriptId")),
}).pipe(
  T.Http({ method: "GET", path: "v1/projects/{scriptId}" }),
  svc,
) as unknown as Schema.Schema<GetProjectsRequest>;

export type GetProjectsResponse = Project;
export const GetProjectsResponse = /*@__PURE__*/ /*#__PURE__*/ Project;

export type GetProjectsError = DefaultErrors | NotFound | Forbidden;

/** Gets a script project's metadata. */
export const getProjects: API.OperationMethod<
  GetProjectsRequest,
  GetProjectsResponse,
  GetProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsRequest,
  output: GetProjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateContentProjectsRequest {
  /** The script project's Drive ID. */
  scriptId: string;
  /** Request body */
  body?: Content;
}

export const UpdateContentProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scriptId: Schema.String.pipe(T.HttpPath("scriptId")),
    body: Schema.optional(Content).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "v1/projects/{scriptId}/content",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateContentProjectsRequest>;

export type UpdateContentProjectsResponse = Content;
export const UpdateContentProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Content;

export type UpdateContentProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the content of the specified script project. This content is stored as the HEAD version, and is used when the script is executed as a trigger, in the script editor, in add-on preview mode, or as a web app or Apps Script API in development mode. This clears all the existing files in the project. */
export const updateContentProjects: API.OperationMethod<
  UpdateContentProjectsRequest,
  UpdateContentProjectsResponse,
  UpdateContentProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateContentProjectsRequest,
  output: UpdateContentProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsVersionsRequest {
  /** The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response. */
  pageToken?: string;
  /** The script project's Drive ID. */
  scriptId: string;
  /** The maximum number of versions on each returned page. Defaults to 50. */
  pageSize?: number;
}

export const ListProjectsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    scriptId: Schema.String.pipe(T.HttpPath("scriptId")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/projects/{scriptId}/versions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsVersionsRequest>;

export type ListProjectsVersionsResponse = ListVersionsResponse;
export const ListProjectsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListVersionsResponse;

export type ListProjectsVersionsError = DefaultErrors | NotFound | Forbidden;

/** List the versions of a script project. */
export const listProjectsVersions: API.PaginatedOperationMethod<
  ListProjectsVersionsRequest,
  ListProjectsVersionsResponse,
  ListProjectsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsVersionsRequest,
  output: ListProjectsVersionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsVersionsRequest {
  /** The script project's Drive ID. */
  scriptId: string;
  /** Request body */
  body?: Version;
}

export const CreateProjectsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scriptId: Schema.String.pipe(T.HttpPath("scriptId")),
    body: Schema.optional(Version).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/projects/{scriptId}/versions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsVersionsRequest>;

export type CreateProjectsVersionsResponse = Version;
export const CreateProjectsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Version;

export type CreateProjectsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new immutable version using the current code, with a unique version number. */
export const createProjectsVersions: API.OperationMethod<
  CreateProjectsVersionsRequest,
  CreateProjectsVersionsResponse,
  CreateProjectsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsVersionsRequest,
  output: CreateProjectsVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsVersionsRequest {
  /** The script project's Drive ID. */
  scriptId: string;
  /** The version number. */
  versionNumber: number;
}

export const GetProjectsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scriptId: Schema.String.pipe(T.HttpPath("scriptId")),
    versionNumber: Schema.Number.pipe(T.HttpPath("versionNumber")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/projects/{scriptId}/versions/{versionNumber}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsVersionsRequest>;

export type GetProjectsVersionsResponse = Version;
export const GetProjectsVersionsResponse = /*@__PURE__*/ /*#__PURE__*/ Version;

export type GetProjectsVersionsError = DefaultErrors | NotFound | Forbidden;

/** Gets a version of a script project. */
export const getProjectsVersions: API.OperationMethod<
  GetProjectsVersionsRequest,
  GetProjectsVersionsResponse,
  GetProjectsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsVersionsRequest,
  output: GetProjectsVersionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateProjectsDeploymentsRequest {
  /** The script project's Drive ID. */
  scriptId: string;
  /** The deployment ID for this deployment. */
  deploymentId: string;
  /** Request body */
  body?: UpdateDeploymentRequest;
}

export const UpdateProjectsDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scriptId: Schema.String.pipe(T.HttpPath("scriptId")),
    deploymentId: Schema.String.pipe(T.HttpPath("deploymentId")),
    body: Schema.optional(UpdateDeploymentRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "v1/projects/{scriptId}/deployments/{deploymentId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateProjectsDeploymentsRequest>;

export type UpdateProjectsDeploymentsResponse = Deployment;
export const UpdateProjectsDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Deployment;

export type UpdateProjectsDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a deployment of an Apps Script project. */
export const updateProjectsDeployments: API.OperationMethod<
  UpdateProjectsDeploymentsRequest,
  UpdateProjectsDeploymentsResponse,
  UpdateProjectsDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateProjectsDeploymentsRequest,
  output: UpdateProjectsDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsDeploymentsRequest {
  /** The deployment ID to be undeployed. */
  deploymentId: string;
  /** The script project's Drive ID. */
  scriptId: string;
}

export const DeleteProjectsDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deploymentId: Schema.String.pipe(T.HttpPath("deploymentId")),
    scriptId: Schema.String.pipe(T.HttpPath("scriptId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "v1/projects/{scriptId}/deployments/{deploymentId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsDeploymentsRequest>;

export type DeleteProjectsDeploymentsResponse = Empty;
export const DeleteProjectsDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a deployment of an Apps Script project. */
export const deleteProjectsDeployments: API.OperationMethod<
  DeleteProjectsDeploymentsRequest,
  DeleteProjectsDeploymentsResponse,
  DeleteProjectsDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsDeploymentsRequest,
  output: DeleteProjectsDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsDeploymentsRequest {
  /** The script project's Drive ID. */
  scriptId: string;
  /** Request body */
  body?: DeploymentConfig;
}

export const CreateProjectsDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scriptId: Schema.String.pipe(T.HttpPath("scriptId")),
    body: Schema.optional(DeploymentConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/projects/{scriptId}/deployments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsDeploymentsRequest>;

export type CreateProjectsDeploymentsResponse = Deployment;
export const CreateProjectsDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Deployment;

export type CreateProjectsDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a deployment of an Apps Script project. */
export const createProjectsDeployments: API.OperationMethod<
  CreateProjectsDeploymentsRequest,
  CreateProjectsDeploymentsResponse,
  CreateProjectsDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsDeploymentsRequest,
  output: CreateProjectsDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsDeploymentsRequest {
  /** The script project's Drive ID. */
  scriptId: string;
  /** The deployment ID. */
  deploymentId: string;
}

export const GetProjectsDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scriptId: Schema.String.pipe(T.HttpPath("scriptId")),
    deploymentId: Schema.String.pipe(T.HttpPath("deploymentId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/projects/{scriptId}/deployments/{deploymentId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsDeploymentsRequest>;

export type GetProjectsDeploymentsResponse = Deployment;
export const GetProjectsDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Deployment;

export type GetProjectsDeploymentsError = DefaultErrors | NotFound | Forbidden;

/** Gets a deployment of an Apps Script project. */
export const getProjectsDeployments: API.OperationMethod<
  GetProjectsDeploymentsRequest,
  GetProjectsDeploymentsResponse,
  GetProjectsDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsDeploymentsRequest,
  output: GetProjectsDeploymentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsDeploymentsRequest {
  /** The script project's Drive ID. */
  scriptId: string;
  /** The maximum number of deployments on each returned page. Defaults to 50. */
  pageSize?: number;
  /** The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response. */
  pageToken?: string;
}

export const ListProjectsDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scriptId: Schema.String.pipe(T.HttpPath("scriptId")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/projects/{scriptId}/deployments" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsDeploymentsRequest>;

export type ListProjectsDeploymentsResponse = ListDeploymentsResponse;
export const ListProjectsDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDeploymentsResponse;

export type ListProjectsDeploymentsError = DefaultErrors | NotFound | Forbidden;

/** Lists the deployments of an Apps Script project. */
export const listProjectsDeployments: API.PaginatedOperationMethod<
  ListProjectsDeploymentsRequest,
  ListProjectsDeploymentsResponse,
  ListProjectsDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsDeploymentsRequest,
  output: ListProjectsDeploymentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListScriptProcessesProcessesRequest {
  /** Optional field used to limit returned processes to those that were started on or after the given timestamp. */
  "scriptProcessFilter.startTime"?: string;
  /** Optional field used to limit returned processes to those originating from projects with a specific deployment ID. */
  "scriptProcessFilter.deploymentId"?: string;
  /** Optional field used to limit returned processes to those having one of the specified user access levels. */
  "scriptProcessFilter.userAccessLevels"?:
    | "USER_ACCESS_LEVEL_UNSPECIFIED"
    | "NONE"
    | "READ"
    | "WRITE"
    | "OWNER"
    | (string & {})[];
  /** Optional field used to limit returned processes to those originating from a script function with the given function name. */
  "scriptProcessFilter.functionName"?: string;
  /** The script ID of the project whose processes are listed. */
  scriptId?: string;
  /** Optional field used to limit returned processes to those having one of the specified process types. */
  "scriptProcessFilter.types"?:
    | "PROCESS_TYPE_UNSPECIFIED"
    | "ADD_ON"
    | "EXECUTION_API"
    | "TIME_DRIVEN"
    | "TRIGGER"
    | "WEBAPP"
    | "EDITOR"
    | "SIMPLE_TRIGGER"
    | "MENU"
    | "BATCH_TASK"
    | (string & {})[];
  /** Optional field used to limit returned processes to those having one of the specified process statuses. */
  "scriptProcessFilter.statuses"?:
    | "PROCESS_STATUS_UNSPECIFIED"
    | "RUNNING"
    | "PAUSED"
    | "COMPLETED"
    | "CANCELED"
    | "FAILED"
    | "TIMED_OUT"
    | "UNKNOWN"
    | "DELAYED"
    | "EXECUTION_DISABLED"
    | (string & {})[];
  /** Optional field used to limit returned processes to those that completed on or before the given timestamp. */
  "scriptProcessFilter.endTime"?: string;
  /** The maximum number of returned processes per page of results. Defaults to 50. */
  pageSize?: number;
  /** The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response. */
  pageToken?: string;
}

export const ListScriptProcessesProcessesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "scriptProcessFilter.startTime": Schema.optional(Schema.String).pipe(
      T.HttpQuery("scriptProcessFilter.startTime"),
    ),
    "scriptProcessFilter.deploymentId": Schema.optional(Schema.String).pipe(
      T.HttpQuery("scriptProcessFilter.deploymentId"),
    ),
    "scriptProcessFilter.userAccessLevels": Schema.optional(
      Schema.Array(Schema.String),
    ).pipe(T.HttpQuery("scriptProcessFilter.userAccessLevels")),
    "scriptProcessFilter.functionName": Schema.optional(Schema.String).pipe(
      T.HttpQuery("scriptProcessFilter.functionName"),
    ),
    scriptId: Schema.optional(Schema.String).pipe(T.HttpQuery("scriptId")),
    "scriptProcessFilter.types": Schema.optional(
      Schema.Array(Schema.String),
    ).pipe(T.HttpQuery("scriptProcessFilter.types")),
    "scriptProcessFilter.statuses": Schema.optional(
      Schema.Array(Schema.String),
    ).pipe(T.HttpQuery("scriptProcessFilter.statuses")),
    "scriptProcessFilter.endTime": Schema.optional(Schema.String).pipe(
      T.HttpQuery("scriptProcessFilter.endTime"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/processes:listScriptProcesses" }),
    svc,
  ) as unknown as Schema.Schema<ListScriptProcessesProcessesRequest>;

export type ListScriptProcessesProcessesResponse = ListScriptProcessesResponse;
export const ListScriptProcessesProcessesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListScriptProcessesResponse;

export type ListScriptProcessesProcessesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List information about a script's executed processes, such as process type and current status. */
export const listScriptProcessesProcesses: API.PaginatedOperationMethod<
  ListScriptProcessesProcessesRequest,
  ListScriptProcessesProcessesResponse,
  ListScriptProcessesProcessesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListScriptProcessesProcessesRequest,
  output: ListScriptProcessesProcessesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProcessesRequest {
  /** Optional field used to limit returned processes to those originating from projects with a specific script ID. */
  "userProcessFilter.scriptId"?: string;
  /** Optional field used to limit returned processes to those having one of the specified user access levels. */
  "userProcessFilter.userAccessLevels"?:
    | "USER_ACCESS_LEVEL_UNSPECIFIED"
    | "NONE"
    | "READ"
    | "WRITE"
    | "OWNER"
    | (string & {})[];
  /** The maximum number of returned processes per page of results. Defaults to 50. */
  pageSize?: number;
  /** Optional field used to limit returned processes to those originating from projects with a specific deployment ID. */
  "userProcessFilter.deploymentId"?: string;
  /** Optional field used to limit returned processes to those originating from projects with project names containing a specific string. */
  "userProcessFilter.projectName"?: string;
  /** Optional field used to limit returned processes to those originating from a script function with the given function name. */
  "userProcessFilter.functionName"?: string;
  /** The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response. */
  pageToken?: string;
  /** Optional field used to limit returned processes to those that completed on or before the given timestamp. */
  "userProcessFilter.endTime"?: string;
  /** Optional field used to limit returned processes to those having one of the specified process statuses. */
  "userProcessFilter.statuses"?:
    | "PROCESS_STATUS_UNSPECIFIED"
    | "RUNNING"
    | "PAUSED"
    | "COMPLETED"
    | "CANCELED"
    | "FAILED"
    | "TIMED_OUT"
    | "UNKNOWN"
    | "DELAYED"
    | "EXECUTION_DISABLED"
    | (string & {})[];
  /** Optional field used to limit returned processes to those that were started on or after the given timestamp. */
  "userProcessFilter.startTime"?: string;
  /** Optional field used to limit returned processes to those having one of the specified process types. */
  "userProcessFilter.types"?:
    | "PROCESS_TYPE_UNSPECIFIED"
    | "ADD_ON"
    | "EXECUTION_API"
    | "TIME_DRIVEN"
    | "TRIGGER"
    | "WEBAPP"
    | "EDITOR"
    | "SIMPLE_TRIGGER"
    | "MENU"
    | "BATCH_TASK"
    | (string & {})[];
}

export const ListProcessesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  "userProcessFilter.scriptId": Schema.optional(Schema.String).pipe(
    T.HttpQuery("userProcessFilter.scriptId"),
  ),
  "userProcessFilter.userAccessLevels": Schema.optional(
    Schema.Array(Schema.String),
  ).pipe(T.HttpQuery("userProcessFilter.userAccessLevels")),
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  "userProcessFilter.deploymentId": Schema.optional(Schema.String).pipe(
    T.HttpQuery("userProcessFilter.deploymentId"),
  ),
  "userProcessFilter.projectName": Schema.optional(Schema.String).pipe(
    T.HttpQuery("userProcessFilter.projectName"),
  ),
  "userProcessFilter.functionName": Schema.optional(Schema.String).pipe(
    T.HttpQuery("userProcessFilter.functionName"),
  ),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  "userProcessFilter.endTime": Schema.optional(Schema.String).pipe(
    T.HttpQuery("userProcessFilter.endTime"),
  ),
  "userProcessFilter.statuses": Schema.optional(
    Schema.Array(Schema.String),
  ).pipe(T.HttpQuery("userProcessFilter.statuses")),
  "userProcessFilter.startTime": Schema.optional(Schema.String).pipe(
    T.HttpQuery("userProcessFilter.startTime"),
  ),
  "userProcessFilter.types": Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("userProcessFilter.types"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "v1/processes" }),
  svc,
) as unknown as Schema.Schema<ListProcessesRequest>;

export type ListProcessesResponse = ListUserProcessesResponse;
export const ListProcessesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListUserProcessesResponse;

export type ListProcessesError = DefaultErrors | NotFound | Forbidden;

/** List information about processes made by or on behalf of a user, such as process type and current status. */
export const listProcesses: API.PaginatedOperationMethod<
  ListProcessesRequest,
  ListProcessesResponse,
  ListProcessesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProcessesRequest,
  output: ListProcessesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface RunScriptsRequest {
  /** The script ID of the script to be executed. Find the script ID on the **Project settings** page under "IDs." As multiple executable APIs can be deployed in new IDE for same script, this field should be populated with DeploymentID generated while deploying in new IDE instead of script ID. */
  scriptId: string;
  /** Request body */
  body?: ExecutionRequest;
}

export const RunScriptsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  scriptId: Schema.String.pipe(T.HttpPath("scriptId")),
  body: Schema.optional(ExecutionRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v1/scripts/{scriptId}:run", hasBody: true }),
  svc,
) as unknown as Schema.Schema<RunScriptsRequest>;

export type RunScriptsResponse = Operation;
export const RunScriptsResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RunScriptsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const runScripts: API.OperationMethod<
  RunScriptsRequest,
  RunScriptsResponse,
  RunScriptsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RunScriptsRequest,
  output: RunScriptsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
