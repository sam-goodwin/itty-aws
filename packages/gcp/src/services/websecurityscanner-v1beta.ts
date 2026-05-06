// ==========================================================================
// Web Security Scanner API (websecurityscanner v1beta)
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
  version: "v1beta",
  rootUrl: "https://websecurityscanner.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface ScanConfigError {
  /** Indicates the full name of the ScanConfig field that triggers this error, for example "scan_config.max_qps". This field is provided for troubleshooting purposes only and its actual value can change in the future. */
  fieldName?: string;
  /** Indicates the reason code for a configuration failure. */
  code?:
    | "CODE_UNSPECIFIED"
    | "OK"
    | "INTERNAL_ERROR"
    | "APPENGINE_API_BACKEND_ERROR"
    | "APPENGINE_API_NOT_ACCESSIBLE"
    | "APPENGINE_DEFAULT_HOST_MISSING"
    | "CANNOT_USE_GOOGLE_COM_ACCOUNT"
    | "CANNOT_USE_OWNER_ACCOUNT"
    | "COMPUTE_API_BACKEND_ERROR"
    | "COMPUTE_API_NOT_ACCESSIBLE"
    | "CUSTOM_LOGIN_URL_DOES_NOT_BELONG_TO_CURRENT_PROJECT"
    | "CUSTOM_LOGIN_URL_MALFORMED"
    | "CUSTOM_LOGIN_URL_MAPPED_TO_NON_ROUTABLE_ADDRESS"
    | "CUSTOM_LOGIN_URL_MAPPED_TO_UNRESERVED_ADDRESS"
    | "CUSTOM_LOGIN_URL_HAS_NON_ROUTABLE_IP_ADDRESS"
    | "CUSTOM_LOGIN_URL_HAS_UNRESERVED_IP_ADDRESS"
    | "DUPLICATE_SCAN_NAME"
    | "INVALID_FIELD_VALUE"
    | "FAILED_TO_AUTHENTICATE_TO_TARGET"
    | "FINDING_TYPE_UNSPECIFIED"
    | "FORBIDDEN_TO_SCAN_COMPUTE"
    | "FORBIDDEN_UPDATE_TO_MANAGED_SCAN"
    | "MALFORMED_FILTER"
    | "MALFORMED_RESOURCE_NAME"
    | "PROJECT_INACTIVE"
    | "REQUIRED_FIELD"
    | "RESOURCE_NAME_INCONSISTENT"
    | "SCAN_ALREADY_RUNNING"
    | "SCAN_NOT_RUNNING"
    | "SEED_URL_DOES_NOT_BELONG_TO_CURRENT_PROJECT"
    | "SEED_URL_MALFORMED"
    | "SEED_URL_MAPPED_TO_NON_ROUTABLE_ADDRESS"
    | "SEED_URL_MAPPED_TO_UNRESERVED_ADDRESS"
    | "SEED_URL_HAS_NON_ROUTABLE_IP_ADDRESS"
    | "SEED_URL_HAS_UNRESERVED_IP_ADDRESS"
    | "SERVICE_ACCOUNT_NOT_CONFIGURED"
    | "TOO_MANY_SCANS"
    | "UNABLE_TO_RESOLVE_PROJECT_INFO"
    | "UNSUPPORTED_BLACKLIST_PATTERN_FORMAT"
    | "UNSUPPORTED_FILTER"
    | "UNSUPPORTED_FINDING_TYPE"
    | "UNSUPPORTED_URL_SCHEME"
    | "CLOUD_ASSET_INVENTORY_ASSET_NOT_FOUND"
    | (string & {});
}

export const ScanConfigError = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fieldName: Schema.optional(Schema.String),
  code: Schema.optional(Schema.String),
}).annotate({ identifier: "ScanConfigError" });

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

export interface ScanRunWarningTrace {
  /** Indicates the warning code. */
  code?:
    | "CODE_UNSPECIFIED"
    | "INSUFFICIENT_CRAWL_RESULTS"
    | "TOO_MANY_CRAWL_RESULTS"
    | "TOO_MANY_FUZZ_TASKS"
    | "BLOCKED_BY_IAP"
    | "NO_STARTING_URL_FOUND_FOR_MANAGED_SCAN"
    | (string & {});
}

export const ScanRunWarningTrace = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.optional(Schema.String),
}).annotate({ identifier: "ScanRunWarningTrace" });

export interface CrawledUrl {
  /** The http method of the request that was used to visit the URL, in uppercase. */
  httpMethod?: string;
  /** The body of the request that was used to visit the URL. */
  body?: string;
  /** The URL that was crawled. */
  url?: string;
}

export const CrawledUrl = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  httpMethod: Schema.optional(Schema.String),
  body: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
}).annotate({ identifier: "CrawledUrl" });

export interface ListCrawledUrlsResponse {
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** The list of CrawledUrls returned. */
  crawledUrls?: ReadonlyArray<CrawledUrl>;
}

export const ListCrawledUrlsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    crawledUrls: Schema.optional(Schema.Array(CrawledUrl)),
  }).annotate({ identifier: "ListCrawledUrlsResponse" });

export interface ScanRunErrorTrace {
  /** If the scan encounters TOO_MANY_HTTP_ERRORS, this field indicates the most common HTTP error code, if such is available. For example, if this code is 404, the scan has encountered too many NOT_FOUND responses. */
  mostCommonHttpErrorCode?: number;
  /** If the scan encounters SCAN_CONFIG_ISSUE error, this field has the error message encountered during scan configuration validation that is performed before each scan run. */
  scanConfigError?: ScanConfigError;
  /** Indicates the error reason code. */
  code?:
    | "CODE_UNSPECIFIED"
    | "INTERNAL_ERROR"
    | "SCAN_CONFIG_ISSUE"
    | "AUTHENTICATION_CONFIG_ISSUE"
    | "TIMED_OUT_WHILE_SCANNING"
    | "TOO_MANY_REDIRECTS"
    | "TOO_MANY_HTTP_ERRORS"
    | "STARTING_URLS_CRAWL_HTTP_ERRORS"
    | (string & {});
}

export const ScanRunErrorTrace = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mostCommonHttpErrorCode: Schema.optional(Schema.Number),
  scanConfigError: Schema.optional(ScanConfigError),
  code: Schema.optional(Schema.String),
}).annotate({ identifier: "ScanRunErrorTrace" });

export interface ScanRun {
  /** If result_state is an ERROR, this field provides the primary reason for scan's termination and more details, if such are available. */
  errorTrace?: ScanRunErrorTrace;
  /** The number of URLs tested during this ScanRun. If the scan is in progress, the value represents the number of URLs tested up to now. The number of URLs tested is usually larger than the number URLS crawled because typically a crawled URL is tested with multiple test payloads. */
  urlsTestedCount?: string;
  /** The time at which the ScanRun started. */
  startTime?: string;
  /** The time at which the ScanRun reached termination state - that the ScanRun is either finished or stopped by user. */
  endTime?: string;
  /** A list of warnings, if such are encountered during this scan run. */
  warningTraces?: ReadonlyArray<ScanRunWarningTrace>;
  /** The execution state of the ScanRun. */
  executionState?:
    | "EXECUTION_STATE_UNSPECIFIED"
    | "QUEUED"
    | "SCANNING"
    | "FINISHED"
    | (string & {});
  /** The percentage of total completion ranging from 0 to 100. If the scan is in queue, the value is 0. If the scan is running, the value ranges from 0 to 100. If the scan is finished, the value is 100. */
  progressPercent?: number;
  /** Whether the scan run has found any vulnerabilities. */
  hasVulnerabilities?: boolean;
  /** The number of URLs crawled during this ScanRun. If the scan is in progress, the value represents the number of URLs crawled up to now. */
  urlsCrawledCount?: string;
  /** The resource name of the ScanRun. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'. The ScanRun IDs are generated by the system. */
  name?: string;
  /** The result state of the ScanRun. This field is only available after the execution state reaches "FINISHED". */
  resultState?:
    | "RESULT_STATE_UNSPECIFIED"
    | "SUCCESS"
    | "ERROR"
    | "KILLED"
    | (string & {});
}

export const ScanRun = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  errorTrace: Schema.optional(ScanRunErrorTrace),
  urlsTestedCount: Schema.optional(Schema.String),
  startTime: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  warningTraces: Schema.optional(Schema.Array(ScanRunWarningTrace)),
  executionState: Schema.optional(Schema.String),
  progressPercent: Schema.optional(Schema.Number),
  hasVulnerabilities: Schema.optional(Schema.Boolean),
  urlsCrawledCount: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  resultState: Schema.optional(Schema.String),
}).annotate({ identifier: "ScanRun" });

export interface ViolatingResource {
  /** URL of this violating resource. */
  resourceUrl?: string;
  /** The MIME type of this resource. */
  contentType?: string;
}

export const ViolatingResource = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceUrl: Schema.optional(Schema.String),
  contentType: Schema.optional(Schema.String),
}).annotate({ identifier: "ViolatingResource" });

export interface StopScanRunRequest {}

export const StopScanRunRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "StopScanRunRequest" });

export interface Xxe {
  /** The XML string that triggered the XXE vulnerability. Non-payload values might be redacted. */
  payloadValue?: string;
  /** Location within the request where the payload was placed. */
  payloadLocation?:
    | "LOCATION_UNSPECIFIED"
    | "COMPLETE_REQUEST_BODY"
    | (string & {});
}

export const Xxe = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  payloadValue: Schema.optional(Schema.String),
  payloadLocation: Schema.optional(Schema.String),
}).annotate({ identifier: "Xxe" });

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

export interface OutdatedLibrary {
  /** The name of the outdated library. */
  libraryName?: string;
  /** URLs to learn more information about the vulnerabilities in the library. */
  learnMoreUrls?: ReadonlyArray<string>;
  /** The version number. */
  version?: string;
}

export const OutdatedLibrary = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  libraryName: Schema.optional(Schema.String),
  learnMoreUrls: Schema.optional(Schema.Array(Schema.String)),
  version: Schema.optional(Schema.String),
}).annotate({ identifier: "OutdatedLibrary" });

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
  /** List of missing headers. */
  missingHeaders?: ReadonlyArray<Header>;
  /** List of vulnerable headers. */
  headers?: ReadonlyArray<Header>;
}

export const VulnerableHeaders = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  missingHeaders: Schema.optional(Schema.Array(Header)),
  headers: Schema.optional(Schema.Array(Header)),
}).annotate({ identifier: "VulnerableHeaders" });

export interface Form {
  /** ! The URI where to send the form when it's submitted. */
  actionUri?: string;
  /** ! The names of form fields related to the vulnerability. */
  fields?: ReadonlyArray<string>;
}

export const Form = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  actionUri: Schema.optional(Schema.String),
  fields: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "Form" });

export interface VulnerableParameters {
  /** The vulnerable parameter names. */
  parameterNames?: ReadonlyArray<string>;
}

export const VulnerableParameters = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  parameterNames: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "VulnerableParameters" });

export interface Finding {
  /** An addon containing information reported for an XXE, if any. */
  xxe?: Xxe;
  /** The body of the request that triggered the vulnerability. */
  body?: string;
  /** The severity level of the reported vulnerability. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
  /** An addon containing information reported for an XSS, if any. */
  xss?: Xss;
  /** An addon containing information about outdated libraries. */
  outdatedLibrary?: OutdatedLibrary;
  /** The tracking ID uniquely identifies a vulnerability instance across multiple ScanRuns. */
  trackingId?: string;
  /** The URL produced by the server-side fuzzer and used in the request that triggered the vulnerability. */
  fuzzedUrl?: string;
  /** The type of the Finding. Detailed and up-to-date information on findings can be found here: https://cloud.google.com/security-command-center/docs/how-to-remediate-web-security-scanner */
  findingType?: string;
  /** An addon containing information about vulnerable or missing HTTP headers. */
  vulnerableHeaders?: VulnerableHeaders;
  /** An addon containing detailed information regarding any resource causing the vulnerability such as JavaScript sources, image, audio files, etc. */
  violatingResource?: ViolatingResource;
  /** The description of the vulnerability. */
  description?: string;
  /** The URL where the browser lands when the vulnerability is detected. */
  finalUrl?: string;
  /** The URL containing human-readable payload that user can leverage to reproduce the vulnerability. */
  reproductionUrl?: string;
  /** The http method of the request that triggered the vulnerability, in uppercase. */
  httpMethod?: string;
  /** The resource name of the Finding. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanruns/{scanRunId}/findings/{findingId}'. The finding IDs are generated by the system. */
  name?: string;
  /** An addon containing information reported for a vulnerability with an HTML form, if any. */
  form?: Form;
  /** If the vulnerability was originated from nested IFrame, the immediate parent IFrame is reported. */
  frameUrl?: string;
  /** An addon containing information about request parameters which were found to be vulnerable. */
  vulnerableParameters?: VulnerableParameters;
}

export const Finding = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  xxe: Schema.optional(Xxe),
  body: Schema.optional(Schema.String),
  severity: Schema.optional(Schema.String),
  xss: Schema.optional(Xss),
  outdatedLibrary: Schema.optional(OutdatedLibrary),
  trackingId: Schema.optional(Schema.String),
  fuzzedUrl: Schema.optional(Schema.String),
  findingType: Schema.optional(Schema.String),
  vulnerableHeaders: Schema.optional(VulnerableHeaders),
  violatingResource: Schema.optional(ViolatingResource),
  description: Schema.optional(Schema.String),
  finalUrl: Schema.optional(Schema.String),
  reproductionUrl: Schema.optional(Schema.String),
  httpMethod: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  form: Schema.optional(Form),
  frameUrl: Schema.optional(Schema.String),
  vulnerableParameters: Schema.optional(VulnerableParameters),
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

export interface ListScanRunsResponse {
  /** The list of ScanRuns returned. */
  scanRuns?: ReadonlyArray<ScanRun>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const ListScanRunsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  scanRuns: Schema.optional(Schema.Array(ScanRun)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListScanRunsResponse" });

export interface StartScanRunRequest {}

export const StartScanRunRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "StartScanRunRequest" });

export interface IapTestServiceAccountInfo {
  /** Required. Describes OAuth2 Client ID of resources protected by Identity-Aware-Proxy(IAP). */
  targetAudienceClientId?: string;
}

export const IapTestServiceAccountInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetAudienceClientId: Schema.optional(Schema.String),
  }).annotate({ identifier: "IapTestServiceAccountInfo" });

export interface IapCredential {
  /** Authentication configuration when Web-Security-Scanner service account is added in Identity-Aware-Proxy (IAP) access policies. */
  iapTestServiceAccountInfo?: IapTestServiceAccountInfo;
}

export const IapCredential = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  iapTestServiceAccountInfo: Schema.optional(IapTestServiceAccountInfo),
}).annotate({ identifier: "IapCredential" });

export interface Empty {}

export const Empty = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
  identifier: "Empty",
});

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

export interface CustomAccount {
  /** Required. The user name of the custom account. */
  username?: string;
  /** Required. Input only. The password of the custom account. The credential is stored encrypted and not returned in any response nor included in audit logs. */
  password?: string;
  /** Required. The login form URL of the website. */
  loginUrl?: string;
}

export const CustomAccount = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  username: Schema.optional(Schema.String),
  password: Schema.optional(Schema.String),
  loginUrl: Schema.optional(Schema.String),
}).annotate({ identifier: "CustomAccount" });

export interface Authentication {
  /** Authentication using a Google account. */
  googleAccount?: GoogleAccount;
  /** Authentication using a custom account. */
  customAccount?: CustomAccount;
  /** Authentication using Identity-Aware-Proxy (IAP). */
  iapCredential?: IapCredential;
}

export const Authentication = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  googleAccount: Schema.optional(GoogleAccount),
  customAccount: Schema.optional(CustomAccount),
  iapCredential: Schema.optional(IapCredential),
}).annotate({ identifier: "Authentication" });

export interface FindingTypeStats {
  /** The finding type associated with the stats. */
  findingType?: string;
  /** The count of findings belonging to this finding type. */
  findingCount?: number;
}

export const FindingTypeStats = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  findingType: Schema.optional(Schema.String),
  findingCount: Schema.optional(Schema.Number),
}).annotate({ identifier: "FindingTypeStats" });

export interface ScanConfig {
  /** Whether the scan config is managed by Web Security Scanner, output only. */
  managedScan?: boolean;
  /** Whether the scan configuration has enabled static IP address scan feature. If enabled, the scanner will access applications from static IP addresses. */
  staticIpScan?: boolean;
  /** Controls export of scan configurations and results to Security Command Center. */
  exportToSecurityCommandCenter?:
    | "EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED"
    | "ENABLED"
    | "DISABLED"
    | (string & {});
  /** The authentication configuration. If specified, service will use the authentication configuration during scanning. */
  authentication?: Authentication;
  /** The resource name of the ScanConfig. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'. The ScanConfig IDs are generated by the system. */
  name?: string;
  /** The maximum QPS during scanning. A valid value ranges from 5 to 20 inclusively. If the field is unspecified or its value is set 0, server will default to 15. Other values outside of [5, 20] range will be rejected with INVALID_ARGUMENT error. */
  maxQps?: number;
  /** The risk level selected for the scan */
  riskLevel?: "RISK_LEVEL_UNSPECIFIED" | "NORMAL" | "LOW" | (string & {});
  /** Required. The user provided display name of the ScanConfig. */
  displayName?: string;
  /** The excluded URL patterns as described in https://cloud.google.com/security-command-center/docs/how-to-use-web-security-scanner#excluding_urls */
  blacklistPatterns?: ReadonlyArray<string>;
  /** Latest ScanRun if available. */
  latestRun?: ScanRun;
  /** The schedule of the ScanConfig. */
  schedule?: Schedule;
  /** Whether to keep scanning even if most requests return HTTP error codes. */
  ignoreHttpStatusErrors?: boolean;
  /** The user agent used during scanning. */
  userAgent?:
    | "USER_AGENT_UNSPECIFIED"
    | "CHROME_LINUX"
    | "CHROME_ANDROID"
    | "SAFARI_IPHONE"
    | (string & {});
  /** Set of Google Cloud platforms targeted by the scan. If empty, APP_ENGINE will be used as a default. */
  targetPlatforms?: ReadonlyArray<
    | "TARGET_PLATFORM_UNSPECIFIED"
    | "APP_ENGINE"
    | "COMPUTE"
    | "CLOUD_RUN"
    | "CLOUD_FUNCTIONS"
    | (string & {})
  >;
  /** Required. The starting URLs from which the scanner finds site pages. */
  startingUrls?: ReadonlyArray<string>;
}

export const ScanConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  managedScan: Schema.optional(Schema.Boolean),
  staticIpScan: Schema.optional(Schema.Boolean),
  exportToSecurityCommandCenter: Schema.optional(Schema.String),
  authentication: Schema.optional(Authentication),
  name: Schema.optional(Schema.String),
  maxQps: Schema.optional(Schema.Number),
  riskLevel: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  blacklistPatterns: Schema.optional(Schema.Array(Schema.String)),
  latestRun: Schema.optional(ScanRun),
  schedule: Schema.optional(Schedule),
  ignoreHttpStatusErrors: Schema.optional(Schema.Boolean),
  userAgent: Schema.optional(Schema.String),
  targetPlatforms: Schema.optional(Schema.Array(Schema.String)),
  startingUrls: Schema.optional(Schema.Array(Schema.String)),
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

export interface ListFindingTypeStatsResponse {
  /** The list of FindingTypeStats returned. */
  findingTypeStats?: ReadonlyArray<FindingTypeStats>;
}

export const ListFindingTypeStatsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    findingTypeStats: Schema.optional(Schema.Array(FindingTypeStats)),
  }).annotate({ identifier: "ListFindingTypeStatsResponse" });

// ==========================================================================
// Operations
// ==========================================================================

export interface GetProjectsScanConfigsRequest {
  /** Required. The resource name of the ScanConfig to be returned. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'. */
  name: string;
}

export const GetProjectsScanConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsScanConfigsRequest>;

export type GetProjectsScanConfigsResponse = ScanConfig;
export const GetProjectsScanConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ScanConfig;

export type GetProjectsScanConfigsError = DefaultErrors;

/** Gets a ScanConfig. */
export const getProjectsScanConfigs: API.OperationMethod<
  GetProjectsScanConfigsRequest,
  GetProjectsScanConfigsResponse,
  GetProjectsScanConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsScanConfigsRequest,
  output: GetProjectsScanConfigsResponse,
  errors: [],
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
      path: "v1beta/{parent}/scanConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsScanConfigsRequest>;

export type CreateProjectsScanConfigsResponse = ScanConfig;
export const CreateProjectsScanConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ScanConfig;

export type CreateProjectsScanConfigsError = DefaultErrors;

/** Creates a new ScanConfig. */
export const createProjectsScanConfigs: API.OperationMethod<
  CreateProjectsScanConfigsRequest,
  CreateProjectsScanConfigsResponse,
  CreateProjectsScanConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsScanConfigsRequest,
  output: CreateProjectsScanConfigsResponse,
  errors: [],
}));

export interface ListProjectsScanConfigsRequest {
  /** Required. The parent resource name, which should be a project resource name in the format 'projects/{projectId}'. */
  parent: string;
  /** The maximum number of ScanConfigs to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value. */
  pageSize?: number;
  /** A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned. */
  pageToken?: string;
}

export const ListProjectsScanConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{parent}/scanConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsScanConfigsRequest>;

export type ListProjectsScanConfigsResponse = ListScanConfigsResponse;
export const ListProjectsScanConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListScanConfigsResponse;

export type ListProjectsScanConfigsError = DefaultErrors;

/** Lists ScanConfigs under a given project. */
export const listProjectsScanConfigs: API.PaginatedOperationMethod<
  ListProjectsScanConfigsRequest,
  ListProjectsScanConfigsResponse,
  ListProjectsScanConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsScanConfigsRequest,
  output: ListProjectsScanConfigsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsScanConfigsRequest {
  /** Required. The resource name of the ScanConfig to be deleted. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'. */
  name: string;
}

export const DeleteProjectsScanConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsScanConfigsRequest>;

export type DeleteProjectsScanConfigsResponse = Empty;
export const DeleteProjectsScanConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsScanConfigsError = DefaultErrors;

/** Deletes an existing ScanConfig and its child resources. */
export const deleteProjectsScanConfigs: API.OperationMethod<
  DeleteProjectsScanConfigsRequest,
  DeleteProjectsScanConfigsResponse,
  DeleteProjectsScanConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsScanConfigsRequest,
  output: DeleteProjectsScanConfigsResponse,
  errors: [],
}));

export interface PatchProjectsScanConfigsRequest {
  /** The resource name of the ScanConfig. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'. The ScanConfig IDs are generated by the system. */
  name: string;
  /** Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask */
  updateMask?: string;
  /** Request body */
  body?: ScanConfig;
}

export const PatchProjectsScanConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(ScanConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsScanConfigsRequest>;

export type PatchProjectsScanConfigsResponse = ScanConfig;
export const PatchProjectsScanConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ScanConfig;

export type PatchProjectsScanConfigsError = DefaultErrors;

/** Updates a ScanConfig. This method support partial update of a ScanConfig. */
export const patchProjectsScanConfigs: API.OperationMethod<
  PatchProjectsScanConfigsRequest,
  PatchProjectsScanConfigsResponse,
  PatchProjectsScanConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsScanConfigsRequest,
  output: PatchProjectsScanConfigsResponse,
  errors: [],
}));

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
    T.Http({ method: "POST", path: "v1beta/{name}:start", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<StartProjectsScanConfigsRequest>;

export type StartProjectsScanConfigsResponse = ScanRun;
export const StartProjectsScanConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ScanRun;

export type StartProjectsScanConfigsError = DefaultErrors;

/** Start a ScanRun according to the given ScanConfig. */
export const startProjectsScanConfigs: API.OperationMethod<
  StartProjectsScanConfigsRequest,
  StartProjectsScanConfigsResponse,
  StartProjectsScanConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StartProjectsScanConfigsRequest,
  output: StartProjectsScanConfigsResponse,
  errors: [],
}));

export interface GetProjectsScanConfigsScanRunsRequest {
  /** Required. The resource name of the ScanRun to be returned. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'. */
  name: string;
}

export const GetProjectsScanConfigsScanRunsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsScanConfigsScanRunsRequest>;

export type GetProjectsScanConfigsScanRunsResponse = ScanRun;
export const GetProjectsScanConfigsScanRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ScanRun;

export type GetProjectsScanConfigsScanRunsError = DefaultErrors;

/** Gets a ScanRun. */
export const getProjectsScanConfigsScanRuns: API.OperationMethod<
  GetProjectsScanConfigsScanRunsRequest,
  GetProjectsScanConfigsScanRunsResponse,
  GetProjectsScanConfigsScanRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsScanConfigsScanRunsRequest,
  output: GetProjectsScanConfigsScanRunsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v1beta/{name}:stop", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<StopProjectsScanConfigsScanRunsRequest>;

export type StopProjectsScanConfigsScanRunsResponse = ScanRun;
export const StopProjectsScanConfigsScanRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ScanRun;

export type StopProjectsScanConfigsScanRunsError = DefaultErrors;

/** Stops a ScanRun. The stopped ScanRun is returned. */
export const stopProjectsScanConfigsScanRuns: API.OperationMethod<
  StopProjectsScanConfigsScanRunsRequest,
  StopProjectsScanConfigsScanRunsResponse,
  StopProjectsScanConfigsScanRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StopProjectsScanConfigsScanRunsRequest,
  output: StopProjectsScanConfigsScanRunsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v1beta/{parent}/scanRuns" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsScanConfigsScanRunsRequest>;

export type ListProjectsScanConfigsScanRunsResponse = ListScanRunsResponse;
export const ListProjectsScanConfigsScanRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListScanRunsResponse;

export type ListProjectsScanConfigsScanRunsError = DefaultErrors;

/** Lists ScanRuns under a given ScanConfig, in descending order of ScanRun stop time. */
export const listProjectsScanConfigsScanRuns: API.PaginatedOperationMethod<
  ListProjectsScanConfigsScanRunsRequest,
  ListProjectsScanConfigsScanRunsResponse,
  ListProjectsScanConfigsScanRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsScanConfigsScanRunsRequest,
  output: ListProjectsScanConfigsScanRunsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v1beta/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsScanConfigsScanRunsFindingsRequest>;

export type GetProjectsScanConfigsScanRunsFindingsResponse = Finding;
export const GetProjectsScanConfigsScanRunsFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Finding;

export type GetProjectsScanConfigsScanRunsFindingsError = DefaultErrors;

/** Gets a Finding. */
export const getProjectsScanConfigsScanRunsFindings: API.OperationMethod<
  GetProjectsScanConfigsScanRunsFindingsRequest,
  GetProjectsScanConfigsScanRunsFindingsResponse,
  GetProjectsScanConfigsScanRunsFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsScanConfigsScanRunsFindingsRequest,
  output: GetProjectsScanConfigsScanRunsFindingsResponse,
  errors: [],
}));

export interface ListProjectsScanConfigsScanRunsFindingsRequest {
  /** The maximum number of Findings to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value. */
  pageSize?: number;
  /** A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned. */
  pageToken?: string;
  /** Required. The filter expression. The expression must be in the format: . Supported field: 'finding_type'. Supported operator: '='. */
  filter?: string;
  /** Required. The parent resource name, which should be a scan run resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'. */
  parent: string;
}

export const ListProjectsScanConfigsScanRunsFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{parent}/findings" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsScanConfigsScanRunsFindingsRequest>;

export type ListProjectsScanConfigsScanRunsFindingsResponse =
  ListFindingsResponse;
export const ListProjectsScanConfigsScanRunsFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListFindingsResponse;

export type ListProjectsScanConfigsScanRunsFindingsError = DefaultErrors;

/** List Findings under a given ScanRun. */
export const listProjectsScanConfigsScanRunsFindings: API.PaginatedOperationMethod<
  ListProjectsScanConfigsScanRunsFindingsRequest,
  ListProjectsScanConfigsScanRunsFindingsResponse,
  ListProjectsScanConfigsScanRunsFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsScanConfigsScanRunsFindingsRequest,
  output: ListProjectsScanConfigsScanRunsFindingsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v1beta/{parent}/findingTypeStats" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsScanConfigsScanRunsFindingTypeStatsRequest>;

export type ListProjectsScanConfigsScanRunsFindingTypeStatsResponse =
  ListFindingTypeStatsResponse;
export const ListProjectsScanConfigsScanRunsFindingTypeStatsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListFindingTypeStatsResponse;

export type ListProjectsScanConfigsScanRunsFindingTypeStatsError =
  DefaultErrors;

/** List all FindingTypeStats under a given ScanRun. */
export const listProjectsScanConfigsScanRunsFindingTypeStats: API.OperationMethod<
  ListProjectsScanConfigsScanRunsFindingTypeStatsRequest,
  ListProjectsScanConfigsScanRunsFindingTypeStatsResponse,
  ListProjectsScanConfigsScanRunsFindingTypeStatsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsScanConfigsScanRunsFindingTypeStatsRequest,
  output: ListProjectsScanConfigsScanRunsFindingTypeStatsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v1beta/{parent}/crawledUrls" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsScanConfigsScanRunsCrawledUrlsRequest>;

export type ListProjectsScanConfigsScanRunsCrawledUrlsResponse =
  ListCrawledUrlsResponse;
export const ListProjectsScanConfigsScanRunsCrawledUrlsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListCrawledUrlsResponse;

export type ListProjectsScanConfigsScanRunsCrawledUrlsError = DefaultErrors;

/** List CrawledUrls under a given ScanRun. */
export const listProjectsScanConfigsScanRunsCrawledUrls: API.PaginatedOperationMethod<
  ListProjectsScanConfigsScanRunsCrawledUrlsRequest,
  ListProjectsScanConfigsScanRunsCrawledUrlsResponse,
  ListProjectsScanConfigsScanRunsCrawledUrlsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsScanConfigsScanRunsCrawledUrlsRequest,
  output: ListProjectsScanConfigsScanRunsCrawledUrlsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
