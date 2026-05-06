// ==========================================================================
// Web Security Scanner API (websecurityscanner v1alpha)
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
  name: "websecurityscanner",
  version: "v1alpha",
  rootUrl: "https://websecurityscanner.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface CustomAccount {
  /** Required. Input only. The password of the custom account. The credential is stored encrypted and not returned in any response nor included in audit logs. */
  password?: string;
  /** Required. The login form URL of the website. */
  loginUrl?: string;
  /** Required. The user name of the custom account. */
  username?: string;
}

export const CustomAccount = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  password: Schema.optional(Schema.String),
  loginUrl: Schema.optional(Schema.String),
  username: Schema.optional(Schema.String),
}).annotate({ identifier: "CustomAccount" });

export interface StopScanRunRequest {}

export const StopScanRunRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "StopScanRunRequest" });

export interface Header {
  /** Header name. */
  name?: string;
  /** Header value. */
  value?: string;
}

export const Header = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
}).annotate({ identifier: "Header" });

export interface VulnerableHeaders {
  /** List of vulnerable headers. */
  headers?: ReadonlyArray<Header>;
  /** List of missing headers. */
  missingHeaders?: ReadonlyArray<Header>;
}

export const VulnerableHeaders = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  headers: Schema.optional(Schema.Array(Header)),
  missingHeaders: Schema.optional(Schema.Array(Header)),
}).annotate({ identifier: "VulnerableHeaders" });

export interface GoogleAccount {
  /** Required. Input only. The password of the Google account. The credential is stored encrypted and not returned in any response nor included in audit logs. */
  password?: string;
  /** Required. The user name of the Google account. */
  username?: string;
}

export const GoogleAccount = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  password: Schema.optional(Schema.String),
  username: Schema.optional(Schema.String),
}).annotate({ identifier: "GoogleAccount" });

export interface FindingTypeStats {
  /** The finding type associated with the stats. */
  findingType?:
    | "FINDING_TYPE_UNSPECIFIED"
    | "MIXED_CONTENT"
    | "OUTDATED_LIBRARY"
    | "ROSETTA_FLASH"
    | "XSS_CALLBACK"
    | "XSS_ERROR"
    | "CLEAR_TEXT_PASSWORD"
    | "INVALID_CONTENT_TYPE"
    | "XSS_ANGULAR_CALLBACK"
    | "INVALID_HEADER"
    | "MISSPELLED_SECURITY_HEADER_NAME"
    | "MISMATCHING_SECURITY_HEADER_VALUES"
    | "ACCESSIBLE_GIT_REPOSITORY"
    | "ACCESSIBLE_SVN_REPOSITORY"
    | "ACCESSIBLE_ENV_FILE"
    | (string & {});
  /** The count of findings belonging to this finding type. */
  findingCount?: number;
}

export const FindingTypeStats = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  findingType: Schema.optional(Schema.String),
  findingCount: Schema.optional(Schema.Number),
}).annotate({ identifier: "FindingTypeStats" });

export interface ListFindingTypeStatsResponse {
  /** The list of FindingTypeStats returned. */
  findingTypeStats?: ReadonlyArray<FindingTypeStats>;
}

export const ListFindingTypeStatsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    findingTypeStats: Schema.optional(Schema.Array(FindingTypeStats)),
  }).annotate({ identifier: "ListFindingTypeStatsResponse" });

export interface ScanRun {
  /** The number of URLs tested during this ScanRun. If the scan is in progress, the value represents the number of URLs tested up to now. The number of URLs tested is usually larger than the number URLS crawled because typically a crawled URL is tested with multiple test payloads. */
  urlsTestedCount?: string;
  /** The result state of the ScanRun. This field is only available after the execution state reaches "FINISHED". */
  resultState?:
    | "RESULT_STATE_UNSPECIFIED"
    | "SUCCESS"
    | "ERROR"
    | "KILLED"
    | (string & {});
  /** The execution state of the ScanRun. */
  executionState?:
    | "EXECUTION_STATE_UNSPECIFIED"
    | "QUEUED"
    | "SCANNING"
    | "FINISHED"
    | (string & {});
  /** The resource name of the ScanRun. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'. The ScanRun IDs are generated by the system. */
  name?: string;
  /** The number of URLs crawled during this ScanRun. If the scan is in progress, the value represents the number of URLs crawled up to now. */
  urlsCrawledCount?: string;
  /** The time at which the ScanRun started. */
  startTime?: string;
  /** The time at which the ScanRun reached termination state - that the ScanRun is either finished or stopped by user. */
  endTime?: string;
  /** Whether the scan run has found any vulnerabilities. */
  hasVulnerabilities?: boolean;
  /** The percentage of total completion ranging from 0 to 100. If the scan is in queue, the value is 0. If the scan is running, the value ranges from 0 to 100. If the scan is finished, the value is 100. */
  progressPercent?: number;
}

export const ScanRun = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  urlsTestedCount: Schema.optional(Schema.String),
  resultState: Schema.optional(Schema.String),
  executionState: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  urlsCrawledCount: Schema.optional(Schema.String),
  startTime: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  hasVulnerabilities: Schema.optional(Schema.Boolean),
  progressPercent: Schema.optional(Schema.Number),
}).annotate({ identifier: "ScanRun" });

export interface Schedule {
  /** A timestamp indicates when the next run will be scheduled. The value is refreshed by the server after each run. If unspecified, it will default to current server time, which means the scan will be scheduled to start immediately. */
  scheduleTime?: string;
  /** Required. The duration of time between executions in days. */
  intervalDurationDays?: number;
}

export const Schedule = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  scheduleTime: Schema.optional(Schema.String),
  intervalDurationDays: Schema.optional(Schema.Number),
}).annotate({ identifier: "Schedule" });

export interface Authentication {
  /** Authentication using a custom account. */
  customAccount?: CustomAccount;
  /** Authentication using a Google account. */
  googleAccount?: GoogleAccount;
}

export const Authentication = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customAccount: Schema.optional(CustomAccount),
  googleAccount: Schema.optional(GoogleAccount),
}).annotate({ identifier: "Authentication" });

export interface ScanConfig {
  /** Set of Google Cloud platforms targeted by the scan. If empty, APP_ENGINE will be used as a default. */
  targetPlatforms?: ReadonlyArray<
    | "TARGET_PLATFORM_UNSPECIFIED"
    | "APP_ENGINE"
    | "COMPUTE"
    | "CLOUD_RUN"
    | "CLOUD_FUNCTIONS"
    | (string & {})
  >;
  /** Latest ScanRun if available. */
  latestRun?: ScanRun;
  /** The schedule of the ScanConfig. */
  schedule?: Schedule;
  /** The resource name of the ScanConfig. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'. The ScanConfig IDs are generated by the system. */
  name?: string;
  /** The authentication configuration. If specified, service will use the authentication configuration during scanning. */
  authentication?: Authentication;
  /** The user agent used during scanning. */
  userAgent?:
    | "USER_AGENT_UNSPECIFIED"
    | "CHROME_LINUX"
    | "CHROME_ANDROID"
    | "SAFARI_IPHONE"
    | (string & {});
  /** The maximum QPS during scanning. A valid value ranges from 5 to 20 inclusively. If the field is unspecified or its value is set 0, server will default to 15. Other values outside of [5, 20] range will be rejected with INVALID_ARGUMENT error. */
  maxQps?: number;
  /** Required. The user provided display name of the ScanConfig. */
  displayName?: string;
  /** Required. The starting URLs from which the scanner finds site pages. */
  startingUrls?: ReadonlyArray<string>;
  /** The excluded URL patterns as described in https://cloud.google.com/security-command-center/docs/how-to-use-web-security-scanner#excluding_urls */
  blacklistPatterns?: ReadonlyArray<string>;
}

export const ScanConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  targetPlatforms: Schema.optional(Schema.Array(Schema.String)),
  latestRun: Schema.optional(ScanRun),
  schedule: Schema.optional(Schedule),
  name: Schema.optional(Schema.String),
  authentication: Schema.optional(Authentication),
  userAgent: Schema.optional(Schema.String),
  maxQps: Schema.optional(Schema.Number),
  displayName: Schema.optional(Schema.String),
  startingUrls: Schema.optional(Schema.Array(Schema.String)),
  blacklistPatterns: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "ScanConfig" });

export interface ListScanConfigsResponse {
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** The list of ScanConfigs returned. */
  scanConfigs?: ReadonlyArray<ScanConfig>;
}

export const ListScanConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    scanConfigs: Schema.optional(Schema.Array(ScanConfig)),
  }).annotate({ identifier: "ListScanConfigsResponse" });

export interface VulnerableParameters {
  /** The vulnerable parameter names. */
  parameterNames?: ReadonlyArray<string>;
}

export const VulnerableParameters = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  parameterNames: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "VulnerableParameters" });

export interface OutdatedLibrary {
  /** The version number. */
  version?: string;
  /** The name of the outdated library. */
  libraryName?: string;
  /** URLs to learn more information about the vulnerabilities in the library. */
  learnMoreUrls?: ReadonlyArray<string>;
}

export const OutdatedLibrary = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  version: Schema.optional(Schema.String),
  libraryName: Schema.optional(Schema.String),
  learnMoreUrls: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "OutdatedLibrary" });

export interface Xss {
  /** Stack traces leading to the point where the XSS occurred. */
  stackTraces?: ReadonlyArray<string>;
  /** An error message generated by a javascript breakage. */
  errorMessage?: string;
}

export const Xss = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  stackTraces: Schema.optional(Schema.Array(Schema.String)),
  errorMessage: Schema.optional(Schema.String),
}).annotate({ identifier: "Xss" });

export interface ViolatingResource {
  /** The MIME type of this resource. */
  contentType?: string;
  /** URL of this violating resource. */
  resourceUrl?: string;
}

export const ViolatingResource = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  contentType: Schema.optional(Schema.String),
  resourceUrl: Schema.optional(Schema.String),
}).annotate({ identifier: "ViolatingResource" });

export interface Finding {
  /** The URL produced by the server-side fuzzer and used in the request that triggered the vulnerability. */
  fuzzedUrl?: string;
  /** An addon containing information about outdated libraries. */
  outdatedLibrary?: OutdatedLibrary;
  /** The URL containing human-readable payload that user can leverage to reproduce the vulnerability. */
  reproductionUrl?: string;
  /** The http method of the request that triggered the vulnerability, in uppercase. */
  httpMethod?: string;
  /** The body of the request that triggered the vulnerability. */
  body?: string;
  /** The type of the Finding. */
  findingType?:
    | "FINDING_TYPE_UNSPECIFIED"
    | "MIXED_CONTENT"
    | "OUTDATED_LIBRARY"
    | "ROSETTA_FLASH"
    | "XSS_CALLBACK"
    | "XSS_ERROR"
    | "CLEAR_TEXT_PASSWORD"
    | "INVALID_CONTENT_TYPE"
    | "XSS_ANGULAR_CALLBACK"
    | "INVALID_HEADER"
    | "MISSPELLED_SECURITY_HEADER_NAME"
    | "MISMATCHING_SECURITY_HEADER_VALUES"
    | "ACCESSIBLE_GIT_REPOSITORY"
    | "ACCESSIBLE_SVN_REPOSITORY"
    | "ACCESSIBLE_ENV_FILE"
    | (string & {});
  /** The URL where the browser lands when the vulnerability is detected. */
  finalUrl?: string;
  /** An addon containing information reported for an XSS, if any. */
  xss?: Xss;
  /** An addon containing detailed information regarding any resource causing the vulnerability such as JavaScript sources, image, audio files, etc. */
  violatingResource?: ViolatingResource;
  /** An addon containing information about request parameters which were found to be vulnerable. */
  vulnerableParameters?: VulnerableParameters;
  /** The tracking ID uniquely identifies a vulnerability instance across multiple ScanRuns. */
  trackingId?: string;
  /** If the vulnerability was originated from nested IFrame, the immediate parent IFrame is reported. */
  frameUrl?: string;
  /** The resource name of the Finding. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanruns/{scanRunId}/findings/{findingId}'. The finding IDs are generated by the system. */
  name?: string;
  /** An addon containing information about vulnerable or missing HTTP headers. */
  vulnerableHeaders?: VulnerableHeaders;
  /** The description of the vulnerability. */
  description?: string;
}

export const Finding = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fuzzedUrl: Schema.optional(Schema.String),
  outdatedLibrary: Schema.optional(OutdatedLibrary),
  reproductionUrl: Schema.optional(Schema.String),
  httpMethod: Schema.optional(Schema.String),
  body: Schema.optional(Schema.String),
  findingType: Schema.optional(Schema.String),
  finalUrl: Schema.optional(Schema.String),
  xss: Schema.optional(Xss),
  violatingResource: Schema.optional(ViolatingResource),
  vulnerableParameters: Schema.optional(VulnerableParameters),
  trackingId: Schema.optional(Schema.String),
  frameUrl: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  vulnerableHeaders: Schema.optional(VulnerableHeaders),
  description: Schema.optional(Schema.String),
}).annotate({ identifier: "Finding" });

export interface ListFindingsResponse {
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** The list of Findings returned. */
  findings?: ReadonlyArray<Finding>;
}

export const ListFindingsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextPageToken: Schema.optional(Schema.String),
  findings: Schema.optional(Schema.Array(Finding)),
}).annotate({ identifier: "ListFindingsResponse" });

export interface CrawledUrl {
  /** Output only. The body of the request that was used to visit the URL. */
  body?: string;
  /** Output only. The URL that was crawled. */
  url?: string;
  /** Output only. The http method of the request that was used to visit the URL, in uppercase. */
  httpMethod?: string;
}

export const CrawledUrl = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
  httpMethod: Schema.optional(Schema.String),
}).annotate({ identifier: "CrawledUrl" });

export interface ListCrawledUrlsResponse {
  /** The list of CrawledUrls returned. */
  crawledUrls?: ReadonlyArray<CrawledUrl>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const ListCrawledUrlsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    crawledUrls: Schema.optional(Schema.Array(CrawledUrl)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListCrawledUrlsResponse" });

export interface StartScanRunRequest {}

export const StartScanRunRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "StartScanRunRequest" });

export interface ListScanRunsResponse {
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** The list of ScanRuns returned. */
  scanRuns?: ReadonlyArray<ScanRun>;
}

export const ListScanRunsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextPageToken: Schema.optional(Schema.String),
  scanRuns: Schema.optional(Schema.Array(ScanRun)),
}).annotate({ identifier: "ListScanRunsResponse" });

export interface Empty {}

export const Empty = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
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
  },
) {}
T.applyErrorMatchers(BadRequest, [{ httpStatus: 400 }]);

export class Conflict extends Schema.TaggedErrorClass<Conflict>()("Conflict", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
}) {}
T.applyErrorMatchers(Conflict, [{ httpStatus: 409 }]);

// ==========================================================================
// Operations
// ==========================================================================

export interface StartProjectsScanConfigsRequest {
  /** Required. The resource name of the ScanConfig to be used. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'. */
  name: string;
  /** Request body */
  body?: StartScanRunRequest;
}

export const StartProjectsScanConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(StartScanRunRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha/{+name}:start", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<StartProjectsScanConfigsRequest>;

export type StartProjectsScanConfigsResponse = ScanRun;
export const StartProjectsScanConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ScanRun;

export type StartProjectsScanConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Start a ScanRun according to the given ScanConfig. */
export const startProjectsScanConfigs: API.OperationMethod<
  StartProjectsScanConfigsRequest,
  StartProjectsScanConfigsResponse,
  StartProjectsScanConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StartProjectsScanConfigsRequest,
  output: StartProjectsScanConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsScanConfigsRequest {
  /** Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask */
  updateMask?: string;
  /** The resource name of the ScanConfig. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'. The ScanConfig IDs are generated by the system. */
  name: string;
  /** Request body */
  body?: ScanConfig;
}

export const PatchProjectsScanConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ScanConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsScanConfigsRequest>;

export type PatchProjectsScanConfigsResponse = ScanConfig;
export const PatchProjectsScanConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ScanConfig;

export type PatchProjectsScanConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a ScanConfig. This method support partial update of a ScanConfig. */
export const patchProjectsScanConfigs: API.OperationMethod<
  PatchProjectsScanConfigsRequest,
  PatchProjectsScanConfigsResponse,
  PatchProjectsScanConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsScanConfigsRequest,
  output: PatchProjectsScanConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsScanConfigsRequest {
  /** Required. The resource name of the ScanConfig to be deleted. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'. */
  name: string;
}

export const DeleteProjectsScanConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsScanConfigsRequest>;

export type DeleteProjectsScanConfigsResponse = Empty;
export const DeleteProjectsScanConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsScanConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an existing ScanConfig and its child resources. */
export const deleteProjectsScanConfigs: API.OperationMethod<
  DeleteProjectsScanConfigsRequest,
  DeleteProjectsScanConfigsResponse,
  DeleteProjectsScanConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsScanConfigsRequest,
  output: DeleteProjectsScanConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsScanConfigsRequest {
  /** Required. The resource name of the ScanConfig to be returned. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'. */
  name: string;
}

export const GetProjectsScanConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsScanConfigsRequest>;

export type GetProjectsScanConfigsResponse = ScanConfig;
export const GetProjectsScanConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ScanConfig;

export type GetProjectsScanConfigsError = DefaultErrors | NotFound | Forbidden;

/** Gets a ScanConfig. */
export const getProjectsScanConfigs: API.OperationMethod<
  GetProjectsScanConfigsRequest,
  GetProjectsScanConfigsResponse,
  GetProjectsScanConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsScanConfigsRequest,
  output: GetProjectsScanConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsScanConfigsRequest {
  /** A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned. */
  pageToken?: string;
  /** Required. The parent resource name, which should be a project resource name in the format 'projects/{projectId}'. */
  parent: string;
  /** The maximum number of ScanConfigs to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value. */
  pageSize?: number;
}

export const ListProjectsScanConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/scanConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsScanConfigsRequest>;

export type ListProjectsScanConfigsResponse = ListScanConfigsResponse;
export const ListProjectsScanConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListScanConfigsResponse;

export type ListProjectsScanConfigsError = DefaultErrors | NotFound | Forbidden;

/** Lists ScanConfigs under a given project. */
export const listProjectsScanConfigs: API.PaginatedOperationMethod<
  ListProjectsScanConfigsRequest,
  ListProjectsScanConfigsResponse,
  ListProjectsScanConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsScanConfigsRequest,
  output: ListProjectsScanConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsScanConfigsRequest {
  /** Required. The parent resource name where the scan is created, which should be a project resource name in the format 'projects/{projectId}'. */
  parent: string;
  /** Request body */
  body?: ScanConfig;
}

export const CreateProjectsScanConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ScanConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/scanConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsScanConfigsRequest>;

export type CreateProjectsScanConfigsResponse = ScanConfig;
export const CreateProjectsScanConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ScanConfig;

export type CreateProjectsScanConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new ScanConfig. */
export const createProjectsScanConfigs: API.OperationMethod<
  CreateProjectsScanConfigsRequest,
  CreateProjectsScanConfigsResponse,
  CreateProjectsScanConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsScanConfigsRequest,
  output: CreateProjectsScanConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsScanConfigsScanRunsRequest {
  /** Required. The resource name of the ScanRun to be returned. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'. */
  name: string;
}

export const GetProjectsScanConfigsScanRunsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsScanConfigsScanRunsRequest>;

export type GetProjectsScanConfigsScanRunsResponse = ScanRun;
export const GetProjectsScanConfigsScanRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ScanRun;

export type GetProjectsScanConfigsScanRunsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a ScanRun. */
export const getProjectsScanConfigsScanRuns: API.OperationMethod<
  GetProjectsScanConfigsScanRunsRequest,
  GetProjectsScanConfigsScanRunsResponse,
  GetProjectsScanConfigsScanRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsScanConfigsScanRunsRequest,
  output: GetProjectsScanConfigsScanRunsResponse,
  errors: [NotFound, Forbidden],
}));

export interface StopProjectsScanConfigsScanRunsRequest {
  /** Required. The resource name of the ScanRun to be stopped. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'. */
  name: string;
  /** Request body */
  body?: StopScanRunRequest;
}

export const StopProjectsScanConfigsScanRunsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(StopScanRunRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha/{+name}:stop", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<StopProjectsScanConfigsScanRunsRequest>;

export type StopProjectsScanConfigsScanRunsResponse = ScanRun;
export const StopProjectsScanConfigsScanRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ScanRun;

export type StopProjectsScanConfigsScanRunsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Stops a ScanRun. The stopped ScanRun is returned. */
export const stopProjectsScanConfigsScanRuns: API.OperationMethod<
  StopProjectsScanConfigsScanRunsRequest,
  StopProjectsScanConfigsScanRunsResponse,
  StopProjectsScanConfigsScanRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StopProjectsScanConfigsScanRunsRequest,
  output: StopProjectsScanConfigsScanRunsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsScanConfigsScanRunsRequest {
  /** Required. The parent resource name, which should be a scan resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}'. */
  parent: string;
  /** A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned. */
  pageToken?: string;
  /** The maximum number of ScanRuns to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value. */
  pageSize?: number;
}

export const ListProjectsScanConfigsScanRunsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/scanRuns" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsScanConfigsScanRunsRequest>;

export type ListProjectsScanConfigsScanRunsResponse = ListScanRunsResponse;
export const ListProjectsScanConfigsScanRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListScanRunsResponse;

export type ListProjectsScanConfigsScanRunsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists ScanRuns under a given ScanConfig, in descending order of ScanRun stop time. */
export const listProjectsScanConfigsScanRuns: API.PaginatedOperationMethod<
  ListProjectsScanConfigsScanRunsRequest,
  ListProjectsScanConfigsScanRunsResponse,
  ListProjectsScanConfigsScanRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsScanConfigsScanRunsRequest,
  output: ListProjectsScanConfigsScanRunsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsScanConfigsScanRunsCrawledUrlsRequest {
  /** Required. The parent resource name, which should be a scan run resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'. */
  parent: string;
  /** A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned. */
  pageToken?: string;
  /** The maximum number of CrawledUrls to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value. */
  pageSize?: number;
}

export const ListProjectsScanConfigsScanRunsCrawledUrlsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/crawledUrls" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsScanConfigsScanRunsCrawledUrlsRequest>;

export type ListProjectsScanConfigsScanRunsCrawledUrlsResponse =
  ListCrawledUrlsResponse;
export const ListProjectsScanConfigsScanRunsCrawledUrlsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListCrawledUrlsResponse;

export type ListProjectsScanConfigsScanRunsCrawledUrlsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List CrawledUrls under a given ScanRun. */
export const listProjectsScanConfigsScanRunsCrawledUrls: API.PaginatedOperationMethod<
  ListProjectsScanConfigsScanRunsCrawledUrlsRequest,
  ListProjectsScanConfigsScanRunsCrawledUrlsResponse,
  ListProjectsScanConfigsScanRunsCrawledUrlsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsScanConfigsScanRunsCrawledUrlsRequest,
  output: ListProjectsScanConfigsScanRunsCrawledUrlsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsScanConfigsScanRunsFindingTypeStatsRequest {
  /** Required. The parent resource name, which should be a scan run resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'. */
  parent: string;
}

export const ListProjectsScanConfigsScanRunsFindingTypeStatsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/findingTypeStats" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsScanConfigsScanRunsFindingTypeStatsRequest>;

export type ListProjectsScanConfigsScanRunsFindingTypeStatsResponse =
  ListFindingTypeStatsResponse;
export const ListProjectsScanConfigsScanRunsFindingTypeStatsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListFindingTypeStatsResponse;

export type ListProjectsScanConfigsScanRunsFindingTypeStatsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List all FindingTypeStats under a given ScanRun. */
export const listProjectsScanConfigsScanRunsFindingTypeStats: API.OperationMethod<
  ListProjectsScanConfigsScanRunsFindingTypeStatsRequest,
  ListProjectsScanConfigsScanRunsFindingTypeStatsResponse,
  ListProjectsScanConfigsScanRunsFindingTypeStatsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsScanConfigsScanRunsFindingTypeStatsRequest,
  output: ListProjectsScanConfigsScanRunsFindingTypeStatsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsScanConfigsScanRunsFindingsRequest {
  /** The maximum number of Findings to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value. */
  pageSize?: number;
  /** Required. The filter expression. The expression must be in the format: . Supported field: 'finding_type'. Supported operator: '='. */
  filter?: string;
  /** Required. The parent resource name, which should be a scan run resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'. */
  parent: string;
  /** A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned. */
  pageToken?: string;
}

export const ListProjectsScanConfigsScanRunsFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/findings" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsScanConfigsScanRunsFindingsRequest>;

export type ListProjectsScanConfigsScanRunsFindingsResponse =
  ListFindingsResponse;
export const ListProjectsScanConfigsScanRunsFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListFindingsResponse;

export type ListProjectsScanConfigsScanRunsFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List Findings under a given ScanRun. */
export const listProjectsScanConfigsScanRunsFindings: API.PaginatedOperationMethod<
  ListProjectsScanConfigsScanRunsFindingsRequest,
  ListProjectsScanConfigsScanRunsFindingsResponse,
  ListProjectsScanConfigsScanRunsFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsScanConfigsScanRunsFindingsRequest,
  output: ListProjectsScanConfigsScanRunsFindingsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsScanConfigsScanRunsFindingsRequest {
  /** Required. The resource name of the Finding to be returned. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}/findings/{findingId}'. */
  name: string;
}

export const GetProjectsScanConfigsScanRunsFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsScanConfigsScanRunsFindingsRequest>;

export type GetProjectsScanConfigsScanRunsFindingsResponse = Finding;
export const GetProjectsScanConfigsScanRunsFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Finding;

export type GetProjectsScanConfigsScanRunsFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a Finding. */
export const getProjectsScanConfigsScanRunsFindings: API.OperationMethod<
  GetProjectsScanConfigsScanRunsFindingsRequest,
  GetProjectsScanConfigsScanRunsFindingsResponse,
  GetProjectsScanConfigsScanRunsFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsScanConfigsScanRunsFindingsRequest,
  output: GetProjectsScanConfigsScanRunsFindingsResponse,
  errors: [NotFound, Forbidden],
}));
