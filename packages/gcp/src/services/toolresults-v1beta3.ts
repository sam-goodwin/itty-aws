// ==========================================================================
// Cloud Tool Results API (toolresults v1beta3)
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
  name: "toolresults",
  version: "v1beta3",
  rootUrl: "https://toolresults.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface LogcatCollectionError {}

export const LogcatCollectionError = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "LogcatCollectionError" });

export interface Duration {
  /** Signed seconds of the span of time. Must be from -315,576,000,000 to +315,576,000,000 inclusive. Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years */
  seconds?: string;
  /** Signed fractions of a second at nanosecond resolution of the span of time. Durations less than one second are represented with a 0 `seconds` field and a positive or negative `nanos` field. For durations of one second or more, a non-zero value for the `nanos` field must be of the same sign as the `seconds` field. Must be from -999,999,999 to +999,999,999 inclusive. */
  nanos?: number;
}

export const Duration = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  seconds: Schema.optional(Schema.String),
  nanos: Schema.optional(Schema.Number),
}).annotate({ identifier: "Duration" });

export interface StackTrace {
  /** The stack trace message. Required */
  exception?: string;
}

export const StackTrace = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  exception: Schema.optional(Schema.String),
}).annotate({ identifier: "StackTrace" });

export interface IosAppCrashed {
  /** The stack trace, if one is available. Optional. */
  stackTrace?: StackTrace;
}

export const IosAppCrashed = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  stackTrace: Schema.optional(StackTrace),
}).annotate({ identifier: "IosAppCrashed" });

export interface Timestamp {
  /** Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive. */
  seconds?: string;
  /** Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive. */
  nanos?: number;
}

export const Timestamp = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  seconds: Schema.optional(Schema.String),
  nanos: Schema.optional(Schema.Number),
}).annotate({ identifier: "Timestamp" });

export interface PerfSample {
  /** Timestamp of collection. */
  sampleTime?: Timestamp;
  /** Value observed */
  value?: number;
}

export const PerfSample = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sampleTime: Schema.optional(Timestamp),
  value: Schema.optional(Schema.Number),
}).annotate({ identifier: "PerfSample" });

export interface LauncherActivityNotFound {}

export const LauncherActivityNotFound =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "LauncherActivityNotFound",
  });

export interface FailureDetail {
  /** If the failure was severe because the system (app) under test crashed. */
  crashed?: boolean;
  /** If the robo was unable to crawl the app; perhaps because the app did not start. */
  unableToCrawl?: boolean;
  /** If the Roboscript failed to complete successfully, e.g., because a Roboscript action or assertion failed or a Roboscript action could not be matched during the entire crawl. */
  failedRoboscript?: boolean;
  /** If an app is not installed and thus no test can be run with the app. This might be caused by trying to run a test on an unsupported platform. */
  notInstalled?: boolean;
  /** If the test overran some time limit, and that is why it failed. */
  timedOut?: boolean;
  /** If a native process (including any other than the app) crashed. */
  otherNativeCrash?: boolean;
  /** If the device ran out of memory during a test, causing the test to crash. */
  deviceOutOfMemory?: boolean;
}

export const FailureDetail = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  crashed: Schema.optional(Schema.Boolean),
  unableToCrawl: Schema.optional(Schema.Boolean),
  failedRoboscript: Schema.optional(Schema.Boolean),
  notInstalled: Schema.optional(Schema.Boolean),
  timedOut: Schema.optional(Schema.Boolean),
  otherNativeCrash: Schema.optional(Schema.Boolean),
  deviceOutOfMemory: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "FailureDetail" });

export interface UpgradeInsight {
  /** The name of the package to be upgraded. */
  packageName?: string;
  /** The suggested version to upgrade to. Optional: In case we are not sure which version solves this problem */
  upgradeToVersion?: string;
}

export const UpgradeInsight = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  packageName: Schema.optional(Schema.String),
  upgradeToVersion: Schema.optional(Schema.String),
}).annotate({ identifier: "UpgradeInsight" });

export interface PendingGoogleUpdateInsight {
  /** The name of the Google-provided library with the non-SDK API dependency. */
  nameOfGoogleLibrary?: string;
}

export const PendingGoogleUpdateInsight =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameOfGoogleLibrary: Schema.optional(Schema.String),
  }).annotate({ identifier: "PendingGoogleUpdateInsight" });

export interface NonSdkApiInsight {
  /** An insight indicating that the hidden API usage originates from the use of a library that needs to be upgraded. */
  upgradeInsight?: UpgradeInsight;
  /** Optional sample stack traces, for which this insight applies (there should be at least one). */
  exampleTraceMessages?: ReadonlyArray<string>;
  /** A unique ID, to be used for determining the effectiveness of this particular insight in the context of a matcher. (required) */
  matcherId?: string;
  /** An insight indicating that the hidden API usage originates from a Google-provided library. */
  pendingGoogleUpdateInsight?: PendingGoogleUpdateInsight;
}

export const NonSdkApiInsight = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  upgradeInsight: Schema.optional(UpgradeInsight),
  exampleTraceMessages: Schema.optional(Schema.Array(Schema.String)),
  matcherId: Schema.optional(Schema.String),
  pendingGoogleUpdateInsight: Schema.optional(PendingGoogleUpdateInsight),
}).annotate({ identifier: "NonSdkApiInsight" });

export interface NonSdkApi {
  /** The total number of times this API was observed to have been called. */
  invocationCount?: number;
  /** Which list this API appears on */
  list?:
    | "NONE"
    | "WHITE"
    | "BLACK"
    | "GREY"
    | "GREY_MAX_O"
    | "GREY_MAX_P"
    | "GREY_MAX_Q"
    | "GREY_MAX_R"
    | "GREY_MAX_S"
    | (string & {});
  /** The signature of the Non-SDK API */
  apiSignature?: string;
  /** Example stack traces of this API being called. */
  exampleStackTraces?: ReadonlyArray<string>;
  /** Optional debugging insights for non-SDK API violations. */
  insights?: ReadonlyArray<NonSdkApiInsight>;
}

export const NonSdkApi = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  invocationCount: Schema.optional(Schema.Number),
  list: Schema.optional(Schema.String),
  apiSignature: Schema.optional(Schema.String),
  exampleStackTraces: Schema.optional(Schema.Array(Schema.String)),
  insights: Schema.optional(Schema.Array(NonSdkApiInsight)),
}).annotate({ identifier: "NonSdkApi" });

export interface NativeCrash {
  /** The stack trace of the native crash. Optional. */
  stackTrace?: StackTrace;
}

export const NativeCrash = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  stackTrace: Schema.optional(StackTrace),
}).annotate({ identifier: "NativeCrash" });

export interface TestCaseReference {
  /** The name of the class. */
  className?: string;
  /** The name of the test case. Required. */
  name?: string;
  /** The name of the test suite to which this test case belongs. */
  testSuiteName?: string;
}

export const TestCaseReference = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  className: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  testSuiteName: Schema.optional(Schema.String),
}).annotate({ identifier: "TestCaseReference" });

export interface StepDimensionValueEntry {
  value?: string;
  key?: string;
}

export const StepDimensionValueEntry =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
  }).annotate({ identifier: "StepDimensionValueEntry" });

export interface FileReference {
  /** The URI of a file stored in Google Cloud Storage. For example: `http://storage.googleapis.com/mybucket/path/to/test.xml` or in Cloud Storage URI format: `gs://mybucket/path/to/test.xml` with version-specific info, `gs://mybucket/path/to/test.xml#1360383693690000` An INVALID_ARGUMENT error will be returned if the URI format is not supported. - In response: always set - In create/update request: always set */
  fileUri?: string;
}

export const FileReference = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileUri: Schema.optional(Schema.String),
}).annotate({ identifier: "FileReference" });

export interface ToolOutputReference {
  /** The creation time of the file. - In response: present if set by create/update request - In create/update request: optional */
  creationTime?: Timestamp;
  /** The test case to which this output file belongs. - In response: present if set by create/update request - In create/update request: optional */
  testCase?: TestCaseReference;
  /** A FileReference to an output file. - In response: always set - In create/update request: always set */
  output?: FileReference;
}

export const ToolOutputReference = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  creationTime: Schema.optional(Timestamp),
  testCase: Schema.optional(TestCaseReference),
  output: Schema.optional(FileReference),
}).annotate({ identifier: "ToolOutputReference" });

export interface DeviceOutOfMemory {}

export const DeviceOutOfMemory = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "DeviceOutOfMemory" });

export interface Any {
  /** A URL/resource name that uniquely identifies the type of the serialized protocol buffer message. This string must contain at least one "/" character. The last segment of the URL's path must represent the fully qualified name of the type (as in `path/google.protobuf.Duration`). The name should be in a canonical form (e.g., leading "." is not accepted). In practice, teams usually precompile into the binary all types that they expect it to use in the context of Any. However, for URLs which use the scheme `http`, `https`, or no scheme, one can optionally set up a type server that maps type URLs to message definitions as follows: * If no scheme is provided, `https` is assumed. * An HTTP GET on the URL must yield a google.protobuf.Type value in binary format, or produce an error. * Applications are allowed to cache lookup results based on the URL, or have them precompiled into a binary to avoid any lookup. Therefore, binary compatibility needs to be preserved on changes to types. (Use versioned type names to manage breaking changes.) Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com. Schemes other than `http`, `https` (or the empty scheme) might be used with implementation specific semantics. */
  typeUrl?: string;
  /** Must be a valid serialized protocol buffer of the above specified type. */
  value?: string;
}

export const Any = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  typeUrl: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
}).annotate({ identifier: "Any" });

export interface TestIssue {
  /** Type of issue. Required. */
  type?:
    | "unspecifiedType"
    | "fatalException"
    | "nativeCrash"
    | "anr"
    | "unusedRoboDirective"
    | "compatibleWithOrchestrator"
    | "launcherActivityNotFound"
    | "startActivityNotFound"
    | "incompleteRoboScriptExecution"
    | "completeRoboScriptExecution"
    | "failedToInstall"
    | "availableDeepLinks"
    | "nonSdkApiUsageViolation"
    | "nonSdkApiUsageReport"
    | "encounteredNonAndroidUiWidgetScreen"
    | "encounteredLoginScreen"
    | "performedGoogleLogin"
    | "iosException"
    | "iosCrash"
    | "performedMonkeyActions"
    | "usedRoboDirective"
    | "usedRoboIgnoreDirective"
    | "insufficientCoverage"
    | "inAppPurchases"
    | "crashDialogError"
    | "uiElementsTooDeep"
    | "blankScreen"
    | "overlappingUiElements"
    | "unityException"
    | "deviceOutOfMemory"
    | "logcatCollectionError"
    | "detectedAppSplashScreen"
    | "assetIssue"
    | (string & {});
  /** A brief human-readable message describing the issue. Required. */
  errorMessage?: string;
  /** Warning message with additional details of the issue. Should always be a message from com.google.devtools.toolresults.v1.warnings */
  warning_migration?: Any;
  /** Severity of issue. Required. */
  severity?:
    | "unspecifiedSeverity"
    | "info"
    | "suggestion"
    | "warning"
    | "severe"
    | (string & {});
  /** Category of issue. Required. */
  category?: "unspecifiedCategory" | "common" | "robo" | (string & {});
  /** Deprecated in favor of stack trace fields inside specific warnings. */
  stackTrace?: StackTrace;
}

export const TestIssue = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  errorMessage: Schema.optional(Schema.String),
  warning_migration: Schema.optional(Any),
  severity: Schema.optional(Schema.String),
  category: Schema.optional(Schema.String),
  stackTrace: Schema.optional(StackTrace),
}).annotate({ identifier: "TestIssue" });

export interface AndroidInstrumentationTest {
  /** The java package for the test to be executed. Required */
  testPackageId?: string;
  /** The InstrumentationTestRunner class. Required */
  testRunnerClass?: string;
  /** The flag indicates whether Android Test Orchestrator will be used to run test or not. */
  useOrchestrator?: boolean;
  /** Each target must be fully qualified with the package name or class name, in one of these formats: - "package package_name" - "class package_name.class_name" - "class package_name.class_name#method_name" If empty, all targets in the module will be run. */
  testTargets?: ReadonlyArray<string>;
}

export const AndroidInstrumentationTest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testPackageId: Schema.optional(Schema.String),
    testRunnerClass: Schema.optional(Schema.String),
    useOrchestrator: Schema.optional(Schema.Boolean),
    testTargets: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AndroidInstrumentationTest" });

export interface TestCase {
  /** The start time of the test case. */
  startTime?: Timestamp;
  /** A unique identifier within a Step for this Test Case. */
  testCaseId?: string;
  /** The status of the test case. Required. */
  status?: "passed" | "failed" | "error" | "skipped" | "flaky" | (string & {});
  /** The end time of the test case. */
  endTime?: Timestamp;
  /** The elapsed run time of the test case. Required. */
  elapsedTime?: Duration;
  /** Why the test case was skipped. Present only for skipped test case */
  skippedMessage?: string;
  /** Test case reference, e.g. name, class name and test suite name. Required. */
  testCaseReference?: TestCaseReference;
  /** References to opaque files of any format output by the tool execution. @OutputOnly */
  toolOutputs?: ReadonlyArray<ToolOutputReference>;
  /** The stack trace details if the test case failed or encountered an error. The maximum size of the stack traces is 100KiB, beyond which the stack track will be truncated. Zero if the test case passed. */
  stackTraces?: ReadonlyArray<StackTrace>;
}

export const TestCase = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startTime: Schema.optional(Timestamp),
  testCaseId: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  endTime: Schema.optional(Timestamp),
  elapsedTime: Schema.optional(Duration),
  skippedMessage: Schema.optional(Schema.String),
  testCaseReference: Schema.optional(TestCaseReference),
  toolOutputs: Schema.optional(Schema.Array(ToolOutputReference)),
  stackTraces: Schema.optional(Schema.Array(StackTrace)),
}).annotate({ identifier: "TestCase" });

export interface IndividualOutcome {
  outcomeSummary?:
    | "unset"
    | "success"
    | "failure"
    | "inconclusive"
    | "skipped"
    | "flaky"
    | (string & {});
  /** Unique int given to each step. Ranges from 0(inclusive) to total number of steps(exclusive). The primary step is 0. */
  multistepNumber?: number;
  stepId?: string;
  /** How long it took for this step to run. */
  runDuration?: Duration;
}

export const IndividualOutcome = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  outcomeSummary: Schema.optional(Schema.String),
  multistepNumber: Schema.optional(Schema.Number),
  stepId: Schema.optional(Schema.String),
  runDuration: Schema.optional(Duration),
}).annotate({ identifier: "IndividualOutcome" });

export interface ToolExitCode {
  /** Tool execution exit code. A value of 0 means that the execution was successful. - In response: always set - In create/update request: always set */
  number?: number;
}

export const ToolExitCode = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  number: Schema.optional(Schema.Number),
}).annotate({ identifier: "ToolExitCode" });

export interface ToolExecution {
  /** Tool execution exit code. This field will be set once the tool has exited. - In response: present if set by create/update request - In create request: optional - In update request: optional, a FAILED_PRECONDITION error will be returned if an exit_code is already set. */
  exitCode?: ToolExitCode;
  /** References to opaque files of any format output by the tool execution. The maximum allowed number of tool outputs per step is 1000. - In response: present if set by create/update request - In create request: optional - In update request: optional, any value provided will be appended to the existing list */
  toolOutputs?: ReadonlyArray<ToolOutputReference>;
  /** The full tokenized command line including the program name (equivalent to argv in a C program). - In response: present if set by create request - In create request: optional - In update request: never set */
  commandLineArguments?: ReadonlyArray<string>;
  /** References to any plain text logs output the tool execution. This field can be set before the tool has exited in order to be able to have access to a live view of the logs while the tool is running. The maximum allowed number of tool logs per step is 1000. - In response: present if set by create/update request - In create request: optional - In update request: optional, any value provided will be appended to the existing list */
  toolLogs?: ReadonlyArray<FileReference>;
}

export const ToolExecution = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  exitCode: Schema.optional(ToolExitCode),
  toolOutputs: Schema.optional(Schema.Array(ToolOutputReference)),
  commandLineArguments: Schema.optional(Schema.Array(Schema.String)),
  toolLogs: Schema.optional(Schema.Array(FileReference)),
}).annotate({ identifier: "ToolExecution" });

export interface ToolExecutionStep {
  /** A Tool execution. - In response: present if set by create/update request - In create/update request: optional */
  toolExecution?: ToolExecution;
}

export const ToolExecutionStep = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  toolExecution: Schema.optional(ToolExecution),
}).annotate({ identifier: "ToolExecutionStep" });

export interface PrimaryStep {
  /** Rollup test status of multiple steps that were run with the same configuration as a group. */
  rollUp?:
    | "unset"
    | "success"
    | "failure"
    | "inconclusive"
    | "skipped"
    | "flaky"
    | (string & {});
  /** Step Id and outcome of each individual step. */
  individualOutcome?: ReadonlyArray<IndividualOutcome>;
}

export const PrimaryStep = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rollUp: Schema.optional(Schema.String),
  individualOutcome: Schema.optional(Schema.Array(IndividualOutcome)),
}).annotate({ identifier: "PrimaryStep" });

export interface MultiStep {
  /** Step Id of the primary (original) step, which might be this step. */
  primaryStepId?: string;
  /** Unique int given to each step. Ranges from 0(inclusive) to total number of steps(exclusive). The primary step is 0. */
  multistepNumber?: number;
  /** Present if it is a primary (original) step. */
  primaryStep?: PrimaryStep;
}

export const MultiStep = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  primaryStepId: Schema.optional(Schema.String),
  multistepNumber: Schema.optional(Schema.Number),
  primaryStep: Schema.optional(PrimaryStep),
}).annotate({ identifier: "MultiStep" });

export interface StepLabelsEntry {
  key?: string;
  value?: string;
}

export const StepLabelsEntry = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  key: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
}).annotate({ identifier: "StepLabelsEntry" });

export interface InconclusiveDetail {
  /** If the end user aborted the test execution before a pass or fail could be determined. For example, the user pressed ctrl-c which sent a kill signal to the test runner while the test was running. */
  abortedByUser?: boolean;
  /** If results are being provided to the user in certain cases of infrastructure failures */
  hasErrorLogs?: boolean;
  /** If the test runner could not determine success or failure because the test depends on a component other than the system under test which failed. For example, a mobile test requires provisioning a device where the test executes, and that provisioning can fail. */
  infrastructureFailure?: boolean;
}

export const InconclusiveDetail = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  abortedByUser: Schema.optional(Schema.Boolean),
  hasErrorLogs: Schema.optional(Schema.Boolean),
  infrastructureFailure: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "InconclusiveDetail" });

export interface SkippedDetail {
  /** Indicates that the test could not be scheduled in the requested time because no suitable device was available. */
  pendingTimeout?: boolean;
  /** If the requested OS version doesn't run on the specific device model. */
  incompatibleDevice?: boolean;
  /** If the App doesn't support the specific API level. */
  incompatibleAppVersion?: boolean;
  /** If the App doesn't run on the specific architecture, for example, x86. */
  incompatibleArchitecture?: boolean;
}

export const SkippedDetail = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pendingTimeout: Schema.optional(Schema.Boolean),
  incompatibleDevice: Schema.optional(Schema.Boolean),
  incompatibleAppVersion: Schema.optional(Schema.Boolean),
  incompatibleArchitecture: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "SkippedDetail" });

export interface SuccessDetail {
  /** If a native process other than the app crashed. */
  otherNativeCrash?: boolean;
}

export const SuccessDetail = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  otherNativeCrash: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "SuccessDetail" });

export interface Outcome {
  /** More information about an INCONCLUSIVE outcome. Returns INVALID_ARGUMENT if this field is set but the summary is not INCONCLUSIVE. Optional */
  inconclusiveDetail?: InconclusiveDetail;
  /** More information about a SKIPPED outcome. Returns INVALID_ARGUMENT if this field is set but the summary is not SKIPPED. Optional */
  skippedDetail?: SkippedDetail;
  /** More information about a SUCCESS outcome. Returns INVALID_ARGUMENT if this field is set but the summary is not SUCCESS. Optional */
  successDetail?: SuccessDetail;
  /** More information about a FAILURE outcome. Returns INVALID_ARGUMENT if this field is set but the summary is not FAILURE. Optional */
  failureDetail?: FailureDetail;
  /** The simplest way to interpret a result. Required */
  summary?:
    | "unset"
    | "success"
    | "failure"
    | "inconclusive"
    | "skipped"
    | "flaky"
    | (string & {});
}

export const Outcome = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  inconclusiveDetail: Schema.optional(InconclusiveDetail),
  skippedDetail: Schema.optional(SkippedDetail),
  successDetail: Schema.optional(SuccessDetail),
  failureDetail: Schema.optional(FailureDetail),
  summary: Schema.optional(Schema.String),
}).annotate({ identifier: "Outcome" });

export interface TestTiming {
  /** How long it took to run the test process. - In response: present if previously set. - In create/update request: optional */
  testProcessDuration?: Duration;
}

export const TestTiming = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  testProcessDuration: Schema.optional(Duration),
}).annotate({ identifier: "TestTiming" });

export interface TestSuiteOverview {
  /** Number of test cases in error, typically set by the service by parsing the xml_source. - In create/response: always set - In update request: never */
  errorCount?: number;
  /** Elapsed time of test suite. */
  elapsedTime?: Duration;
  /** The name of the test suite. - In create/response: always set - In update request: never */
  name?: string;
  /** Number of failed test cases, typically set by the service by parsing the xml_source. May also be set by the user. - In create/response: always set - In update request: never */
  failureCount?: number;
  /** Number of test cases not run, typically set by the service by parsing the xml_source. - In create/response: always set - In update request: never */
  skippedCount?: number;
  /** If this test suite was parsed from XML, this is the URI where the original XML file is stored. Note: Multiple test suites can share the same xml_source Returns INVALID_ARGUMENT if the uri format is not supported. - In create/response: optional - In update request: never */
  xmlSource?: FileReference;
  /** Number of test cases, typically set by the service by parsing the xml_source. - In create/response: always set - In update request: never */
  totalCount?: number;
  /** Number of flaky test cases, set by the service by rolling up flaky test attempts. Present only for rollup test suite overview at environment level. A step cannot have flaky test cases. */
  flakyCount?: number;
}

export const TestSuiteOverview = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  errorCount: Schema.optional(Schema.Number),
  elapsedTime: Schema.optional(Duration),
  name: Schema.optional(Schema.String),
  failureCount: Schema.optional(Schema.Number),
  skippedCount: Schema.optional(Schema.Number),
  xmlSource: Schema.optional(FileReference),
  totalCount: Schema.optional(Schema.Number),
  flakyCount: Schema.optional(Schema.Number),
}).annotate({ identifier: "TestSuiteOverview" });

export interface TestExecutionStep {
  /** Represents the execution of the test runner. The exit code of this tool will be used to determine if the test passed. - In response: always set - In create/update request: optional */
  toolExecution?: ToolExecution;
  /** The timing break down of the test execution. - In response: present if set by create or update - In create/update request: optional */
  testTiming?: TestTiming;
  /** List of test suite overview contents. This could be parsed from xUnit XML log by server, or uploaded directly by user. This references should only be called when test suites are fully parsed or uploaded. The maximum allowed number of test suite overviews per step is 1000. - In response: always set - In create request: optional - In update request: never (use publishXunitXmlFiles custom method instead) */
  testSuiteOverviews?: ReadonlyArray<TestSuiteOverview>;
  /** Issues observed during the test execution. For example, if the mobile app under test crashed during the test, the error message and the stack trace content can be recorded here to assist debugging. - In response: present if set by create or update - In create/update request: optional */
  testIssues?: ReadonlyArray<TestIssue>;
}

export const TestExecutionStep = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  toolExecution: Schema.optional(ToolExecution),
  testTiming: Schema.optional(TestTiming),
  testSuiteOverviews: Schema.optional(Schema.Array(TestSuiteOverview)),
  testIssues: Schema.optional(Schema.Array(TestIssue)),
}).annotate({ identifier: "TestExecutionStep" });

export interface Step {
  /** An execution of a tool (used for steps we don't explicitly support). */
  toolExecutionStep?: ToolExecutionStep;
  /** Whether any of the outputs of this step are images whose thumbnails can be fetched with ListThumbnails. - In response: always set - In create/update request: never set */
  hasImages?: boolean;
  /** The time when the step status was set to complete. This value will be set automatically when state transitions to COMPLETE. - In response: set if the execution state is COMPLETE. - In create/update request: never set */
  completionTime?: Timestamp;
  /** If the execution containing this step has any dimension_definition set, then this field allows the child to specify the values of the dimensions. The keys must exactly match the dimension_definition of the execution. For example, if the execution has `dimension_definition = ['attempt', 'device']` then a step must define values for those dimensions, eg. `dimension_value = ['attempt': '1', 'device': 'Nexus 6']` If a step does not participate in one dimension of the matrix, the value for that dimension should be empty string. For example, if one of the tests is executed by a runner which does not support retries, the step could have `dimension_value = ['attempt': '', 'device': 'Nexus 6']` If the step does not participate in any dimensions of the matrix, it may leave dimension_value unset. A PRECONDITION_FAILED will be returned if any of the keys do not exist in the dimension_definition of the execution. A PRECONDITION_FAILED will be returned if another step in this execution already has the same name and dimension_value, but differs on other data fields, for example, step field is different. A PRECONDITION_FAILED will be returned if dimension_value is set, and there is a dimension_definition in the execution which is not specified as one of the keys. - In response: present if set by create - In create request: optional - In update request: never set */
  dimensionValue?: ReadonlyArray<StepDimensionValueEntry>;
  /** Details when multiple steps are run with the same configuration as a group. These details can be used identify which group this step is part of. It also identifies the groups 'primary step' which indexes all the group members. - In response: present if previously set. - In create request: optional, set iff this step was performed more than once. - In update request: optional */
  multiStep?: MultiStep;
  /** Arbitrary user-supplied key/value pairs that are associated with the step. Users are responsible for managing the key namespace such that keys don't accidentally collide. An INVALID_ARGUMENT will be returned if the number of labels exceeds 100 or if the length of any of the keys or values exceeds 100 characters. - In response: always set - In create request: optional - In update request: optional; any new key/value pair will be added to the map, and any new value for an existing key will update that key's value */
  labels?: ReadonlyArray<StepLabelsEntry>;
  /** The time when the step was created. - In response: always set - In create/update request: never set */
  creationTime?: Timestamp;
  /** A unique identifier within a Execution for this Step. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response: always set - In create/update request: never set */
  stepId?: string;
  /** How long it took for this step to run. If unset, this is set to the difference between creation_time and completion_time when the step is set to the COMPLETE state. In some cases, it is appropriate to set this value separately: For instance, if a step is created, but the operation it represents is queued for a few minutes before it executes, it would be appropriate not to include the time spent queued in its run_duration. PRECONDITION_FAILED will be returned if one attempts to set a run_duration on a step which already has this field set. - In response: present if previously set; always present on COMPLETE step - In create request: optional - In update request: optional */
  runDuration?: Duration;
  /** Classification of the result, for example into SUCCESS or FAILURE - In response: present if set by create/update request - In create/update request: optional */
  outcome?: Outcome;
  /** A short human-readable name to display in the UI. Maximum of 100 characters. For example: Clean build A PRECONDITION_FAILED will be returned upon creating a new step if it shares its name and dimension_value with an existing step. If two steps represent a similar action, but have different dimension values, they should share the same name. For instance, if the same set of tests is run on two different platforms, the two steps should have the same name. - In response: always set - In create request: always set - In update request: never set */
  name?: string;
  /** A description of this tool For example: mvn clean package -D skipTests=true - In response: present if set by create/update request - In create/update request: optional */
  description?: string;
  /** How much the device resource is used to perform the test. This is the device usage used for billing purpose, which is different from the run_duration, for example, infrastructure failure won't be charged for device usage. PRECONDITION_FAILED will be returned if one attempts to set a device_usage on a step which already has this field set. - In response: present if previously set. - In create request: optional - In update request: optional */
  deviceUsageDuration?: Duration;
  /** The initial state is IN_PROGRESS. The only legal state transitions are * IN_PROGRESS -> COMPLETE A PRECONDITION_FAILED will be returned if an invalid transition is requested. It is valid to create Step with a state set to COMPLETE. The state can only be set to COMPLETE once. A PRECONDITION_FAILED will be returned if the state is set to COMPLETE multiple times. - In response: always set - In create/update request: optional */
  state?:
    | "unknownState"
    | "pending"
    | "inProgress"
    | "complete"
    | (string & {});
  /** An execution of a test runner. */
  testExecutionStep?: TestExecutionStep;
}

export const Step = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  toolExecutionStep: Schema.optional(ToolExecutionStep),
  hasImages: Schema.optional(Schema.Boolean),
  completionTime: Schema.optional(Timestamp),
  dimensionValue: Schema.optional(Schema.Array(StepDimensionValueEntry)),
  multiStep: Schema.optional(MultiStep),
  labels: Schema.optional(Schema.Array(StepLabelsEntry)),
  creationTime: Schema.optional(Timestamp),
  stepId: Schema.optional(Schema.String),
  runDuration: Schema.optional(Duration),
  outcome: Schema.optional(Outcome),
  name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  deviceUsageDuration: Schema.optional(Duration),
  state: Schema.optional(Schema.String),
  testExecutionStep: Schema.optional(TestExecutionStep),
}).annotate({ identifier: "Step" });

export interface ListStepsResponse {
  /** Steps. */
  steps?: ReadonlyArray<Step>;
  /** A continuation token to resume the query at the next item. If set, indicates that there are more steps to read, by calling list again with this value in the page_token field. */
  nextPageToken?: string;
}

export const ListStepsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  steps: Schema.optional(Schema.Array(Step)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListStepsResponse" });

export interface SafeHtmlProto {
  /** IMPORTANT: Never set or read this field, even from tests, it is private. See documentation at the top of .proto file for programming language packages with which to create or read this message. */
  privateDoNotAccessOrElseSafeHtmlWrappedValue?: string;
}

export const SafeHtmlProto = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  privateDoNotAccessOrElseSafeHtmlWrappedValue: Schema.optional(Schema.String),
}).annotate({ identifier: "SafeHtmlProto" });

export interface UnspecifiedWarning {}

export const UnspecifiedWarning = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "UnspecifiedWarning" });

export interface EnvironmentDimensionValueEntry {
  key?: string;
  value?: string;
}

export const EnvironmentDimensionValueEntry =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnvironmentDimensionValueEntry" });

export interface RegionProto {
  /** The left side of the rectangle, in pixels. Always set. */
  leftPx?: number;
  /** The height, in pixels. Always set. */
  heightPx?: number;
  /** The width, in pixels. Always set. */
  widthPx?: number;
  /** The top of the rectangle, in pixels. Always set. */
  topPx?: number;
}

export const RegionProto = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  leftPx: Schema.optional(Schema.Number),
  heightPx: Schema.optional(Schema.Number),
  widthPx: Schema.optional(Schema.Number),
  topPx: Schema.optional(Schema.Number),
}).annotate({ identifier: "RegionProto" });

export interface SuggestionProto {
  /** General title for the suggestion, in the user's language, without markup. Always set. */
  title?: string;
  /** Message, in the user's language, explaining the suggestion, which may contain markup. Always set. */
  longMessage?: SafeHtmlProto;
  /** Relative importance of a suggestion. Always set. */
  priority?: "unknownPriority" | "error" | "warning" | "info" | (string & {});
  /** A somewhat human readable identifier of the source view, if it does not have a resource_name. This is a path within the accessibility hierarchy, an element with resource name; similar to an XPath. */
  pseudoResourceId?: string;
  /** Region within the screenshot that is relevant to this suggestion. Optional. */
  region?: RegionProto;
  /** ID of the screen for the suggestion. It is used for getting the corresponding screenshot path. For example, screen_id "1" corresponds to "1.png" file in GCS. Always set. */
  screenId?: string;
  /** Concise message, in the user's language, representing the suggestion, which may contain markup. Always set. */
  shortMessage?: SafeHtmlProto;
  /** Reference to a view element, identified by its resource name, if it has one. */
  resourceName?: string;
  /** Reference to a help center article concerning this type of suggestion. Always set. */
  helpUrl?: string;
  /** Relative importance of a suggestion as compared with other suggestions that have the same priority and category. This is a meaningless value that can be used to order suggestions that are in the same category and have the same priority. The larger values have higher priority (i.e., are more important). Optional. */
  secondaryPriority?: number;
}

export const SuggestionProto = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  title: Schema.optional(Schema.String),
  longMessage: Schema.optional(SafeHtmlProto),
  priority: Schema.optional(Schema.String),
  pseudoResourceId: Schema.optional(Schema.String),
  region: Schema.optional(RegionProto),
  screenId: Schema.optional(Schema.String),
  shortMessage: Schema.optional(SafeHtmlProto),
  resourceName: Schema.optional(Schema.String),
  helpUrl: Schema.optional(Schema.String),
  secondaryPriority: Schema.optional(Schema.Number),
}).annotate({ identifier: "SuggestionProto" });

export interface SuggestionClusterProto {
  /** A sequence of suggestions. All of the suggestions within a cluster must have the same SuggestionPriority and belong to the same SuggestionCategory. Suggestions with the same screenshot URL should be adjacent. */
  suggestions?: ReadonlyArray<SuggestionProto>;
  /** Category in which these types of suggestions should appear. Always set. */
  category?:
    | "unknownCategory"
    | "contentLabeling"
    | "touchTargetSize"
    | "lowContrast"
    | "implementation"
    | (string & {});
}

export const SuggestionClusterProto = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    suggestions: Schema.optional(Schema.Array(SuggestionProto)),
    category: Schema.optional(Schema.String),
  },
).annotate({ identifier: "SuggestionClusterProto" });

export interface ListStepAccessibilityClustersResponse {
  /** A sequence of accessibility suggestions, grouped into clusters. Within the sequence, clusters that belong to the same SuggestionCategory should be adjacent. Within each category, clusters should be ordered by their SuggestionPriority (ERRORs first). The categories should be ordered by their highest priority cluster. */
  clusters?: ReadonlyArray<SuggestionClusterProto>;
  /** A full resource name of the step. For example, projects/my-project/histories/bh.1234567890abcdef/executions/ 1234567890123456789/steps/bs.1234567890abcdef Always presents. */
  name?: string;
}

export const ListStepAccessibilityClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusters: Schema.optional(Schema.Array(SuggestionClusterProto)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListStepAccessibilityClustersResponse" });

export interface ListPerfSamplesResponse {
  perfSamples?: ReadonlyArray<PerfSample>;
  /** Optional, returned if result size exceeds the page size specified in the request (or the default page size, 500, if unspecified). It indicates the last sample timestamp to be used as page_token in subsequent request */
  nextPageToken?: string;
}

export const ListPerfSamplesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    perfSamples: Schema.optional(Schema.Array(PerfSample)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListPerfSamplesResponse" });

export interface UsedRoboIgnoreDirective {
  /** The name of the resource that was ignored. */
  resourceName?: string;
}

export const UsedRoboIgnoreDirective =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "UsedRoboIgnoreDirective" });

export interface ResultsStorage {
  /** The root directory for test results. */
  resultsStoragePath?: FileReference;
  /** The path to the Xunit XML file. */
  xunitXmlFile?: FileReference;
}

export const ResultsStorage = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resultsStoragePath: Schema.optional(FileReference),
  xunitXmlFile: Schema.optional(FileReference),
}).annotate({ identifier: "ResultsStorage" });

export interface StepSummary {}

export const StepSummary = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "StepSummary" });

export interface MergedResult {
  /** The combined and rolled-up result of each test suite that was run as part of this environment. Combining: When the test cases from a suite are run in different steps (sharding), the results are added back together in one overview. (e.g., if shard1 has 2 failures and shard2 has 1 failure than the overview failure_count = 3). Rollup: When test cases from the same suite are run multiple times (flaky), the results are combined (e.g., if testcase1.run1 fails, testcase1.run2 passes, and both testcase2.run1 and testcase2.run2 fail then the overview flaky_count = 1 and failure_count = 1). */
  testSuiteOverviews?: ReadonlyArray<TestSuiteOverview>;
  /** State of the resource */
  state?:
    | "unknownState"
    | "pending"
    | "inProgress"
    | "complete"
    | (string & {});
  /** Outcome of the resource */
  outcome?: Outcome;
}

export const MergedResult = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  testSuiteOverviews: Schema.optional(Schema.Array(TestSuiteOverview)),
  state: Schema.optional(Schema.String),
  outcome: Schema.optional(Outcome),
}).annotate({ identifier: "MergedResult" });

export interface ShardSummary {
  /** Summaries of the steps belonging to the shard. With flaky_test_attempts enabled from TestExecutionService, more than one run (Step) can present. And the runs will be sorted by multistep_number. */
  runs?: ReadonlyArray<StepSummary>;
  /** Merged result of the shard. */
  shardResult?: MergedResult;
}

export const ShardSummary = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  runs: Schema.optional(Schema.Array(StepSummary)),
  shardResult: Schema.optional(MergedResult),
}).annotate({ identifier: "ShardSummary" });

export interface Environment {
  /** Output only. A Project id. */
  projectId?: string;
  /** Output only. An Execution id. */
  executionId?: string;
  /** Output only. The time when the Environment was created. */
  creationTime?: Timestamp;
  /** The location where output files are stored in the user bucket. */
  resultsStorage?: ResultsStorage;
  /** Output only. An Environment id. */
  environmentId?: string;
  /** Output only. The time when the Environment status was set to complete. This value will be set automatically when state transitions to COMPLETE. */
  completionTime?: Timestamp;
  /** Output only. A History id. */
  historyId?: string;
  /** Dimension values describing the environment. Dimension values always consist of "Model", "Version", "Locale", and "Orientation". - In response: always set - In create request: always set - In update request: never set */
  dimensionValue?: ReadonlyArray<EnvironmentDimensionValueEntry>;
  /** Output only. Summaries of shards. Only one shard will present unless sharding feature is enabled in TestExecutionService. */
  shardSummaries?: ReadonlyArray<ShardSummary>;
  /** Merged result of the environment. */
  environmentResult?: MergedResult;
  /** A short human-readable name to display in the UI. Maximum of 100 characters. For example: Nexus 5, API 27. */
  displayName?: string;
}

export const Environment = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  projectId: Schema.optional(Schema.String),
  executionId: Schema.optional(Schema.String),
  creationTime: Schema.optional(Timestamp),
  resultsStorage: Schema.optional(ResultsStorage),
  environmentId: Schema.optional(Schema.String),
  completionTime: Schema.optional(Timestamp),
  historyId: Schema.optional(Schema.String),
  dimensionValue: Schema.optional(Schema.Array(EnvironmentDimensionValueEntry)),
  shardSummaries: Schema.optional(Schema.Array(ShardSummary)),
  environmentResult: Schema.optional(MergedResult),
  displayName: Schema.optional(Schema.String),
}).annotate({ identifier: "Environment" });

export interface ListEnvironmentsResponse {
  /** A History id. Always set. */
  historyId?: string;
  /** A Execution id Always set. */
  executionId?: string;
  /** A Project id. Always set. */
  projectId?: string;
  /** Environments. Always set. */
  environments?: ReadonlyArray<Environment>;
  /** A continuation token to resume the query at the next item. Will only be set if there are more Environments to fetch. */
  nextPageToken?: string;
}

export const ListEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    historyId: Schema.optional(Schema.String),
    executionId: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    environments: Schema.optional(Schema.Array(Environment)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListEnvironmentsResponse" });

export interface ANR {
  /** The stack trace of the ANR crash. Optional. */
  stackTrace?: StackTrace;
}

export const ANR = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  stackTrace: Schema.optional(StackTrace),
}).annotate({ identifier: "ANR" });

export interface PublishXunitXmlFilesRequest {
  /** URI of the Xunit XML files to publish. The maximum size of the file this reference is pointing to is 50MB. Required. */
  xunitXmlFiles?: ReadonlyArray<FileReference>;
}

export const PublishXunitXmlFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    xunitXmlFiles: Schema.optional(Schema.Array(FileReference)),
  }).annotate({ identifier: "PublishXunitXmlFilesRequest" });

export interface CPUInfo {
  /** description of the device processor ie '1.8 GHz hexa core 64-bit ARMv8-A' */
  cpuProcessor?: string;
  /** the CPU clock speed in GHz */
  cpuSpeedInGhz?: number;
  /** the number of CPU cores */
  numberOfCores?: number;
}

export const CPUInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cpuProcessor: Schema.optional(Schema.String),
  cpuSpeedInGhz: Schema.optional(Schema.Number),
  numberOfCores: Schema.optional(Schema.Number),
}).annotate({ identifier: "CPUInfo" });

export interface Thumbnail {
  /** The thumbnail's content type, i.e. "image/png". Always set. */
  contentType?: string;
  /** The height of the thumbnail, in pixels. Always set. */
  heightPx?: number;
  /** The width of the thumbnail, in pixels. Always set. */
  widthPx?: number;
  /** The thumbnail file itself. That is, the bytes here are precisely the bytes that make up the thumbnail file; they can be served as an image as-is (with the appropriate content type.) Always set. */
  data?: string;
}

export const Thumbnail = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  contentType: Schema.optional(Schema.String),
  heightPx: Schema.optional(Schema.Number),
  widthPx: Schema.optional(Schema.Number),
  data: Schema.optional(Schema.String),
}).annotate({ identifier: "Thumbnail" });

export interface AvailableDeepLinks {}

export const AvailableDeepLinks = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "AvailableDeepLinks" });

export interface FatalException {
  /** The stack trace of the fatal exception. Optional. */
  stackTrace?: StackTrace;
}

export const FatalException = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  stackTrace: Schema.optional(StackTrace),
}).annotate({ identifier: "FatalException" });

export interface Status {
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
}

export const Status = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  details: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  message: Schema.optional(Schema.String),
  code: Schema.optional(Schema.Number),
}).annotate({ identifier: "Status" });

export interface DetectedAppSplashScreen {}

export const DetectedAppSplashScreen =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DetectedAppSplashScreen",
  });

export interface AndroidRoboTest {
  /** The initial activity that should be used to start the app. Optional */
  appInitialActivity?: string;
  /** The java package for the bootstrap. Optional */
  bootstrapPackageId?: string;
  /** The max number of steps/actions Robo can execute. Default is no limit (0). Optional */
  maxSteps?: number;
  /** The runner class for the bootstrap. Optional */
  bootstrapRunnerClass?: string;
  /** The max depth of the traversal stack Robo can explore. Optional */
  maxDepth?: number;
}

export const AndroidRoboTest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  appInitialActivity: Schema.optional(Schema.String),
  bootstrapPackageId: Schema.optional(Schema.String),
  maxSteps: Schema.optional(Schema.Number),
  bootstrapRunnerClass: Schema.optional(Schema.String),
  maxDepth: Schema.optional(Schema.Number),
}).annotate({ identifier: "AndroidRoboTest" });

export interface CrashDialogError {
  /** The name of the package that caused the dialog. */
  crashPackage?: string;
}

export const CrashDialogError = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  crashPackage: Schema.optional(Schema.String),
}).annotate({ identifier: "CrashDialogError" });

export interface NonSdkApiUsageViolationReport {
  /** Minimum API level required for the application to run. */
  minSdkVersion?: number;
  /** Examples of the detected API usages. */
  exampleApis?: ReadonlyArray<NonSdkApi>;
  /** Total number of unique Non-SDK API's accessed. */
  uniqueApis?: number;
  /** Specifies the API Level on which the application is designed to run. */
  targetSdkVersion?: number;
}

export const NonSdkApiUsageViolationReport =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minSdkVersion: Schema.optional(Schema.Number),
    exampleApis: Schema.optional(Schema.Array(NonSdkApi)),
    uniqueApis: Schema.optional(Schema.Number),
    targetSdkVersion: Schema.optional(Schema.Number),
  }).annotate({ identifier: "NonSdkApiUsageViolationReport" });

export interface MemoryInfo {
  /** Total memory available on the device in KiB */
  memoryTotalInKibibyte?: string;
  /** Maximum memory that can be allocated to the process in KiB */
  memoryCapInKibibyte?: string;
}

export const MemoryInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  memoryTotalInKibibyte: Schema.optional(Schema.String),
  memoryCapInKibibyte: Schema.optional(Schema.String),
}).annotate({ identifier: "MemoryInfo" });

export interface PerfEnvironment {
  /** CPU related environment info */
  cpuInfo?: CPUInfo;
  /** Memory related environment info */
  memoryInfo?: MemoryInfo;
}

export const PerfEnvironment = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cpuInfo: Schema.optional(CPUInfo),
  memoryInfo: Schema.optional(MemoryInfo),
}).annotate({ identifier: "PerfEnvironment" });

export interface IosTestLoop {
  /** Bundle ID of the app. */
  bundleId?: string;
}

export const IosTestLoop = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bundleId: Schema.optional(Schema.String),
}).annotate({ identifier: "IosTestLoop" });

export interface BasicPerfSampleSeries {
  sampleSeriesLabel?:
    | "sampleSeriesTypeUnspecified"
    | "memoryRssPrivate"
    | "memoryRssShared"
    | "memoryRssTotal"
    | "memoryTotal"
    | "cpuUser"
    | "cpuKernel"
    | "cpuTotal"
    | "ntBytesTransferred"
    | "ntBytesReceived"
    | "networkSent"
    | "networkReceived"
    | "graphicsFrameRate"
    | (string & {});
  perfMetricType?:
    | "perfMetricTypeUnspecified"
    | "memory"
    | "cpu"
    | "network"
    | "graphics"
    | (string & {});
  perfUnit?:
    | "perfUnitUnspecified"
    | "kibibyte"
    | "percent"
    | "bytesPerSecond"
    | "framesPerSecond"
    | "byte"
    | (string & {});
}

export const BasicPerfSampleSeries = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sampleSeriesLabel: Schema.optional(Schema.String),
  perfMetricType: Schema.optional(Schema.String),
  perfUnit: Schema.optional(Schema.String),
}).annotate({ identifier: "BasicPerfSampleSeries" });

export interface PerfSampleSeries {
  /** A sample series id @OutputOnly */
  sampleSeriesId?: string;
  /** The cloud project @OutputOnly */
  projectId?: string;
  /** Basic series represented by a line chart */
  basicPerfSampleSeries?: BasicPerfSampleSeries;
  /** A tool results history ID. @OutputOnly */
  historyId?: string;
  /** A tool results step ID. @OutputOnly */
  stepId?: string;
  /** A tool results execution ID. @OutputOnly */
  executionId?: string;
}

export const PerfSampleSeries = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sampleSeriesId: Schema.optional(Schema.String),
  projectId: Schema.optional(Schema.String),
  basicPerfSampleSeries: Schema.optional(BasicPerfSampleSeries),
  historyId: Schema.optional(Schema.String),
  stepId: Schema.optional(Schema.String),
  executionId: Schema.optional(Schema.String),
}).annotate({ identifier: "PerfSampleSeries" });

export interface ListPerfSampleSeriesResponse {
  /** The resulting PerfSampleSeries sorted by id */
  perfSampleSeries?: ReadonlyArray<PerfSampleSeries>;
}

export const ListPerfSampleSeriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    perfSampleSeries: Schema.optional(Schema.Array(PerfSampleSeries)),
  }).annotate({ identifier: "ListPerfSampleSeriesResponse" });

export interface RoboScriptExecution {
  /** The total number of actions in the Robo script. */
  totalActions?: number;
  /** The number of Robo script actions executed successfully. */
  successfulActions?: number;
}

export const RoboScriptExecution = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  totalActions: Schema.optional(Schema.Number),
  successfulActions: Schema.optional(Schema.Number),
}).annotate({ identifier: "RoboScriptExecution" });

export interface NonSdkApiUsageViolation {
  /** Total number of unique hidden API's accessed. */
  uniqueApis?: number;
  /** Signatures of a subset of those hidden API's. */
  apiSignatures?: ReadonlyArray<string>;
}

export const NonSdkApiUsageViolation =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uniqueApis: Schema.optional(Schema.Number),
    apiSignatures: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "NonSdkApiUsageViolation" });

export interface AndroidAppInfo {
  /** The internal version code of the app. Optional. */
  versionCode?: string;
  /** The version name of the app. Optional. */
  versionName?: string;
  /** The package name of the app. Required. */
  packageName?: string;
  /** The name of the app. Optional */
  name?: string;
}

export const AndroidAppInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  versionCode: Schema.optional(Schema.String),
  versionName: Schema.optional(Schema.String),
  packageName: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "AndroidAppInfo" });

export interface AndroidTestLoop {}

export const AndroidTestLoop = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "AndroidTestLoop" });

export interface AndroidTest {
  /** Max time a test is allowed to run before it is automatically cancelled. */
  testTimeout?: Duration;
  /** An Android robo test. */
  androidRoboTest?: AndroidRoboTest;
  /** An Android instrumentation test. */
  androidInstrumentationTest?: AndroidInstrumentationTest;
  /** Information about the application under test. */
  androidAppInfo?: AndroidAppInfo;
  /** An Android test loop. */
  androidTestLoop?: AndroidTestLoop;
}

export const AndroidTest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  testTimeout: Schema.optional(Duration),
  androidRoboTest: Schema.optional(AndroidRoboTest),
  androidInstrumentationTest: Schema.optional(AndroidInstrumentationTest),
  androidAppInfo: Schema.optional(AndroidAppInfo),
  androidTestLoop: Schema.optional(AndroidTestLoop),
}).annotate({ identifier: "AndroidTest" });

export interface IosRoboTest {}

export const IosRoboTest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "IosRoboTest" });

export interface IosXcTest {
  /** Bundle ID of the app. */
  bundleId?: string;
  /** Xcode version that the test was run with. */
  xcodeVersion?: string;
}

export const IosXcTest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bundleId: Schema.optional(Schema.String),
  xcodeVersion: Schema.optional(Schema.String),
}).annotate({ identifier: "IosXcTest" });

export interface IosAppInfo {
  /** The name of the app. Required */
  name?: string;
}

export const IosAppInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "IosAppInfo" });

export interface IosTest {
  /** An iOS test loop. */
  iosTestLoop?: IosTestLoop;
  /** An iOS Robo test. */
  iosRoboTest?: IosRoboTest;
  /** An iOS XCTest. */
  iosXcTest?: IosXcTest;
  /** Information about the application under test. */
  iosAppInfo?: IosAppInfo;
  /** Max time a test is allowed to run before it is automatically cancelled. */
  testTimeout?: Duration;
}

export const IosTest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  iosTestLoop: Schema.optional(IosTestLoop),
  iosRoboTest: Schema.optional(IosRoboTest),
  iosXcTest: Schema.optional(IosXcTest),
  iosAppInfo: Schema.optional(IosAppInfo),
  testTimeout: Schema.optional(Duration),
}).annotate({ identifier: "IosTest" });

export interface Specification {
  /** An Android mobile test execution specification. */
  androidTest?: AndroidTest;
  /** An iOS mobile test execution specification. */
  iosTest?: IosTest;
}

export const Specification = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  androidTest: Schema.optional(AndroidTest),
  iosTest: Schema.optional(IosTest),
}).annotate({ identifier: "Specification" });

export interface PerformedGoogleLogin {}

export const PerformedGoogleLogin = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "PerformedGoogleLogin" });

export interface AppStartTime {
  /** The time from app start to the first displayed activity being drawn, as reported in Logcat. See https://developer.android.com/topic/performance/launch-time.html#time-initial */
  initialDisplayTime?: Duration;
  /** Optional. The time from app start to reaching the developer-reported "fully drawn" time. This is only stored if the app includes a call to Activity.reportFullyDrawn(). See https://developer.android.com/topic/performance/launch-time.html#time-full */
  fullyDrawnTime?: Duration;
}

export const AppStartTime = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  initialDisplayTime: Schema.optional(Duration),
  fullyDrawnTime: Schema.optional(Duration),
}).annotate({ identifier: "AppStartTime" });

export interface GraphicsStatsBucket {
  /** Number of frames in the bucket. */
  frameCount?: string;
  /** Lower bound of render time in milliseconds. */
  renderMillis?: string;
}

export const GraphicsStatsBucket = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  frameCount: Schema.optional(Schema.String),
  renderMillis: Schema.optional(Schema.String),
}).annotate({ identifier: "GraphicsStatsBucket" });

export interface GraphicsStats {
  /** 90th percentile frame render time in milliseconds. */
  p90Millis?: string;
  /** Total "slow UI thread" events. */
  slowUiThreadCount?: string;
  /** 99th percentile frame render time in milliseconds. */
  p99Millis?: string;
  /** Total frames rendered by package. */
  totalFrames?: string;
  /** Total frames with slow render time. Should be <= total_frames. */
  jankyFrames?: string;
  /** 95th percentile frame render time in milliseconds. */
  p95Millis?: string;
  /** Histogram of frame render times. There should be 154 buckets ranging from [5ms, 6ms) to [4950ms, infinity) */
  buckets?: ReadonlyArray<GraphicsStatsBucket>;
  /** Total "high input latency" events. */
  highInputLatencyCount?: string;
  /** 50th percentile frame render time in milliseconds. */
  p50Millis?: string;
  /** Total "slow bitmap upload" events. */
  slowBitmapUploadCount?: string;
  /** Total "slow draw" events. */
  slowDrawCount?: string;
  /** Total "missed vsync" events. */
  missedVsyncCount?: string;
}

export const GraphicsStats = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  p90Millis: Schema.optional(Schema.String),
  slowUiThreadCount: Schema.optional(Schema.String),
  p99Millis: Schema.optional(Schema.String),
  totalFrames: Schema.optional(Schema.String),
  jankyFrames: Schema.optional(Schema.String),
  p95Millis: Schema.optional(Schema.String),
  buckets: Schema.optional(Schema.Array(GraphicsStatsBucket)),
  highInputLatencyCount: Schema.optional(Schema.String),
  p50Millis: Schema.optional(Schema.String),
  slowBitmapUploadCount: Schema.optional(Schema.String),
  slowDrawCount: Schema.optional(Schema.String),
  missedVsyncCount: Schema.optional(Schema.String),
}).annotate({ identifier: "GraphicsStats" });

export interface PerfMetricsSummary {
  /** Set of resource collected */
  perfMetrics?: ReadonlyArray<
    | "perfMetricTypeUnspecified"
    | "memory"
    | "cpu"
    | "network"
    | "graphics"
    | (string & {})
  >;
  /** The cloud project @OutputOnly */
  projectId?: string;
  /** A tool results history ID. @OutputOnly */
  historyId?: string;
  /** A tool results step ID. @OutputOnly */
  stepId?: string;
  /** A tool results execution ID. @OutputOnly */
  executionId?: string;
  appStartTime?: AppStartTime;
  /** Describes the environment in which the performance metrics were collected */
  perfEnvironment?: PerfEnvironment;
  /** Graphics statistics for the entire run. Statistics are reset at the beginning of the run and collected at the end of the run. */
  graphicsStats?: GraphicsStats;
}

export const PerfMetricsSummary = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  perfMetrics: Schema.optional(Schema.Array(Schema.String)),
  projectId: Schema.optional(Schema.String),
  historyId: Schema.optional(Schema.String),
  stepId: Schema.optional(Schema.String),
  executionId: Schema.optional(Schema.String),
  appStartTime: Schema.optional(AppStartTime),
  perfEnvironment: Schema.optional(PerfEnvironment),
  graphicsStats: Schema.optional(GraphicsStats),
}).annotate({ identifier: "PerfMetricsSummary" });

export interface Screen {
  /** Model of the device that the screenshot was taken on. Required. */
  model?: string;
  /** Locale of the device that the screenshot was taken on. Required. */
  locale?: string;
  /** OS version of the device that the screenshot was taken on. Required. */
  version?: string;
  /** File reference of the png file. Required. */
  fileReference?: string;
}

export const Screen = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  model: Schema.optional(Schema.String),
  locale: Schema.optional(Schema.String),
  version: Schema.optional(Schema.String),
  fileReference: Schema.optional(Schema.String),
}).annotate({ identifier: "Screen" });

export interface BlankScreen {
  /** The screen id of the element */
  screenId?: string;
}

export const BlankScreen = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  screenId: Schema.optional(Schema.String),
}).annotate({ identifier: "BlankScreen" });

export interface FailedToInstall {}

export const FailedToInstall = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "FailedToInstall" });

export interface BatchCreatePerfSamplesResponse {
  perfSamples?: ReadonlyArray<PerfSample>;
}

export const BatchCreatePerfSamplesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    perfSamples: Schema.optional(Schema.Array(PerfSample)),
  }).annotate({ identifier: "BatchCreatePerfSamplesResponse" });

export interface StartActivityNotFound {
  action?: string;
  uri?: string;
}

export const StartActivityNotFound = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  action: Schema.optional(Schema.String),
  uri: Schema.optional(Schema.String),
}).annotate({ identifier: "StartActivityNotFound" });

export interface EncounteredNonAndroidUiWidgetScreen {
  /** Number of encountered distinct screens with non Android UI widgets. */
  distinctScreens?: number;
  /** Subset of screens which contain non Android UI widgets. */
  screenIds?: ReadonlyArray<string>;
}

export const EncounteredNonAndroidUiWidgetScreen =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    distinctScreens: Schema.optional(Schema.Number),
    screenIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "EncounteredNonAndroidUiWidgetScreen" });

export interface Image {
  /** A reference to the full-size, original image. This is the same as the tool_outputs entry for the image under its Step. Always set. */
  sourceImage?: ToolOutputReference;
  /** The step to which the image is attached. Always set. */
  stepId?: string;
  /** The thumbnail. */
  thumbnail?: Thumbnail;
  /** An error explaining why the thumbnail could not be rendered. */
  error?: Status;
}

export const Image = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sourceImage: Schema.optional(ToolOutputReference),
  stepId: Schema.optional(Schema.String),
  thumbnail: Schema.optional(Thumbnail),
  error: Schema.optional(Status),
}).annotate({ identifier: "Image" });

export interface UsedRoboDirective {
  /** The name of the resource that was used. */
  resourceName?: string;
}

export const UsedRoboDirective = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceName: Schema.optional(Schema.String),
}).annotate({ identifier: "UsedRoboDirective" });

export interface InAppPurchasesFound {
  /** The total number of in-app purchases flows explored: how many times the robo tries to buy a SKU. */
  inAppPurchasesFlowsExplored?: number;
  /** The total number of in-app purchases flows started. */
  inAppPurchasesFlowsStarted?: number;
}

export const InAppPurchasesFound = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  inAppPurchasesFlowsExplored: Schema.optional(Schema.Number),
  inAppPurchasesFlowsStarted: Schema.optional(Schema.Number),
}).annotate({ identifier: "InAppPurchasesFound" });

export interface UIElementTooDeep {
  /** The screen state id of the element */
  screenStateId?: string;
  /** The screen id of the element */
  screenId?: string;
  /** The depth of the screen element */
  depth?: number;
}

export const UIElementTooDeep = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  screenStateId: Schema.optional(Schema.String),
  screenId: Schema.optional(Schema.String),
  depth: Schema.optional(Schema.Number),
}).annotate({ identifier: "UIElementTooDeep" });

export interface ListStepThumbnailsResponse {
  /** A list of image data. Images are returned in a deterministic order; they are ordered by these factors, in order of importance: * First, by their associated test case. Images without a test case are considered greater than images with one. * Second, by their creation time. Images without a creation time are greater than images with one. * Third, by the order in which they were added to the step (by calls to CreateStep or UpdateStep). */
  thumbnails?: ReadonlyArray<Image>;
  /** A continuation token to resume the query at the next item. If set, indicates that there are more thumbnails to read, by calling list again with this value in the page_token field. */
  nextPageToken?: string;
}

export const ListStepThumbnailsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    thumbnails: Schema.optional(Schema.Array(Image)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListStepThumbnailsResponse" });

export interface BatchCreatePerfSamplesRequest {
  /** The set of PerfSamples to create should not include existing timestamps */
  perfSamples?: ReadonlyArray<PerfSample>;
}

export const BatchCreatePerfSamplesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    perfSamples: Schema.optional(Schema.Array(PerfSample)),
  }).annotate({ identifier: "BatchCreatePerfSamplesRequest" });

export interface UnusedRoboDirective {
  /** The name of the resource that was unused. */
  resourceName?: string;
}

export const UnusedRoboDirective = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceName: Schema.optional(Schema.String),
}).annotate({ identifier: "UnusedRoboDirective" });

export interface ProjectSettings {
  /** The name of the project's settings. Always of the form: projects/{project-id}/settings In update request: never set In response: always set */
  name?: string;
  /** The name of the Google Cloud Storage bucket to which results are written. By default, this is unset. In update request: optional In response: optional */
  defaultBucket?: string;
}

export const ProjectSettings = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  defaultBucket: Schema.optional(Schema.String),
}).annotate({ identifier: "ProjectSettings" });

export interface MatrixDimensionDefinition {}

export const MatrixDimensionDefinition =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "MatrixDimensionDefinition",
  });

export interface Execution {
  /** A unique identifier within a History for this Execution. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response always set - In create/update request: never set */
  executionId?: string;
  /** The initial state is IN_PROGRESS. The only legal state transitions is from IN_PROGRESS to COMPLETE. A PRECONDITION_FAILED will be returned if an invalid transition is requested. The state can only be set to COMPLETE once. A FAILED_PRECONDITION will be returned if the state is set to COMPLETE multiple times. If the state is set to COMPLETE, all the in-progress steps within the execution will be set as COMPLETE. If the outcome of the step is not set, the outcome will be set to INCONCLUSIVE. - In response always set - In create/update request: optional */
  state?:
    | "unknownState"
    | "pending"
    | "inProgress"
    | "complete"
    | (string & {});
  /** The time when the Execution was created. This value will be set automatically when CreateExecution is called. - In response: always set - In create/update request: never set */
  creationTime?: Timestamp;
  /** The time when the Execution status transitioned to COMPLETE. This value will be set automatically when state transitions to COMPLETE. - In response: set if the execution state is COMPLETE. - In create/update request: never set */
  completionTime?: Timestamp;
  /** TestExecution Matrix ID that the TestExecutionService uses. - In response: present if set by create - In create: optional - In update: never set */
  testExecutionMatrixId?: string;
  /** Classify the result, for example into SUCCESS or FAILURE - In response: present if set by create/update request - In create/update request: optional */
  outcome?: Outcome;
  /** The dimensions along which different steps in this execution may vary. This must remain fixed over the life of the execution. Returns INVALID_ARGUMENT if this field is set in an update request. Returns INVALID_ARGUMENT if the same name occurs in more than one dimension_definition. Returns INVALID_ARGUMENT if the size of the list is over 100. - In response: present if set by create - In create request: optional - In update request: never set */
  dimensionDefinitions?: ReadonlyArray<MatrixDimensionDefinition>;
  /** Lightweight information about execution request. - In response: present if set by create - In create: optional - In update: optional */
  specification?: Specification;
}

export const Execution = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  executionId: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  creationTime: Schema.optional(Timestamp),
  completionTime: Schema.optional(Timestamp),
  testExecutionMatrixId: Schema.optional(Schema.String),
  outcome: Schema.optional(Outcome),
  dimensionDefinitions: Schema.optional(
    Schema.Array(MatrixDimensionDefinition),
  ),
  specification: Schema.optional(Specification),
}).annotate({ identifier: "Execution" });

export interface ListExecutionsResponse {
  /** Executions. Always set. */
  executions?: ReadonlyArray<Execution>;
  /** A continuation token to resume the query at the next item. Will only be set if there are more Executions to fetch. */
  nextPageToken?: string;
}

export const ListExecutionsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    executions: Schema.optional(Schema.Array(Execution)),
    nextPageToken: Schema.optional(Schema.String),
  },
).annotate({ identifier: "ListExecutionsResponse" });

export interface AssetIssue {}

export const AssetIssue = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "AssetIssue" });

export interface OverlappingUIElements {
  /** The screen id of the elements */
  screenId?: string;
  /** Resource names of the overlapping screen elements */
  resourceName?: ReadonlyArray<string>;
}

export const OverlappingUIElements = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  screenId: Schema.optional(Schema.String),
  resourceName: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "OverlappingUIElements" });

export interface EncounteredLoginScreen {
  /** Number of encountered distinct login screens. */
  distinctScreens?: number;
  /** Subset of login screens. */
  screenIds?: ReadonlyArray<string>;
}

export const EncounteredLoginScreen = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    distinctScreens: Schema.optional(Schema.Number),
    screenIds: Schema.optional(Schema.Array(Schema.String)),
  },
).annotate({ identifier: "EncounteredLoginScreen" });

export interface ListTestCasesResponse {
  /** List of test cases. */
  testCases?: ReadonlyArray<TestCase>;
  nextPageToken?: string;
}

export const ListTestCasesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  testCases: Schema.optional(Schema.Array(TestCase)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListTestCasesResponse" });

export interface History {
  /** A unique identifier within a project for this History. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response always set - In create request: never set */
  historyId?: string;
  /** A name to uniquely identify a history within a project. Maximum of 200 characters. - In response always set - In create request: always set */
  name?: string;
  /** The platform of the test history. - In response: always set. Returns the platform of the last execution if unknown. */
  testPlatform?: "unknownPlatform" | "android" | "ios" | (string & {});
  /** A short human-readable (plain text) name to display in the UI. Maximum of 100 characters. - In response: present if set during create. - In create request: optional */
  displayName?: string;
}

export const History = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  historyId: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  testPlatform: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
}).annotate({ identifier: "History" });

export interface PerformedMonkeyActions {
  /** The total number of monkey actions performed during the crawl. */
  totalActions?: number;
}

export const PerformedMonkeyActions = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    totalActions: Schema.optional(Schema.Number),
  },
).annotate({ identifier: "PerformedMonkeyActions" });

export interface ListHistoriesResponse {
  /** A continuation token to resume the query at the next item. Will only be set if there are more histories to fetch. Tokens are valid for up to one hour from the time of the first list request. For instance, if you make a list request at 1PM and use the token from this first request 10 minutes later, the token from this second response will only be valid for 50 minutes. */
  nextPageToken?: string;
  /** Histories. */
  histories?: ReadonlyArray<History>;
}

export const ListHistoriesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextPageToken: Schema.optional(Schema.String),
  histories: Schema.optional(Schema.Array(History)),
}).annotate({ identifier: "ListHistoriesResponse" });

export interface ScreenshotCluster {
  /** A string that describes the activity of every screen in the cluster. */
  activity?: string;
  /** Full list of screens. */
  screens?: ReadonlyArray<Screen>;
  /** A unique identifier for the cluster. @OutputOnly */
  clusterId?: string;
  /** A singular screen that represents the cluster as a whole. This screen will act as the "cover" of the entire cluster. When users look at the clusters, only the key screen from each cluster will be shown. Which screen is the key screen is determined by the ClusteringAlgorithm */
  keyScreen?: Screen;
}

export const ScreenshotCluster = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  activity: Schema.optional(Schema.String),
  screens: Schema.optional(Schema.Array(Screen)),
  clusterId: Schema.optional(Schema.String),
  keyScreen: Schema.optional(Screen),
}).annotate({ identifier: "ScreenshotCluster" });

export interface ListScreenshotClustersResponse {
  /** The set of clusters associated with an execution Always set */
  clusters?: ReadonlyArray<ScreenshotCluster>;
}

export const ListScreenshotClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusters: Schema.optional(Schema.Array(ScreenshotCluster)),
  }).annotate({ identifier: "ListScreenshotClustersResponse" });

export interface InsufficientCoverage {}

export const InsufficientCoverage = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "InsufficientCoverage" });

// ==========================================================================
// Operations
// ==========================================================================

export interface GetSettingsProjectsRequest {
  /** A Project id. Required. */
  projectId: string;
}

export const GetSettingsProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "toolresults/v1beta3/projects/{projectId}/settings",
    }),
    svc,
  ) as unknown as Schema.Schema<GetSettingsProjectsRequest>;

export type GetSettingsProjectsResponse = ProjectSettings;
export const GetSettingsProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProjectSettings;

export type GetSettingsProjectsError = DefaultErrors;

/** Gets the Tool Results settings for a project. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from project */
export const getSettingsProjects: API.OperationMethod<
  GetSettingsProjectsRequest,
  GetSettingsProjectsResponse,
  GetSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSettingsProjectsRequest,
  output: GetSettingsProjectsResponse,
  errors: [],
}));

export interface InitializeSettingsProjectsRequest {
  /** A Project id. Required. */
  projectId: string;
}

export const InitializeSettingsProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "toolresults/v1beta3/projects/{projectId}:initializeSettings",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InitializeSettingsProjectsRequest>;

export type InitializeSettingsProjectsResponse = ProjectSettings;
export const InitializeSettingsProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProjectSettings;

export type InitializeSettingsProjectsError = DefaultErrors;

/** Creates resources for settings which have not yet been set. Currently, this creates a single resource: a Google Cloud Storage bucket, to be used as the default bucket for this project. The bucket is created in an FTL-own storage project. Except for in rare cases, calling this method in parallel from multiple clients will only create a single bucket. In order to avoid unnecessary storage charges, the bucket is configured to automatically delete objects older than 60 days. The bucket is created with the following permissions: - Owner access for owners of central storage project (FTL-owned) - Writer access for owners/editors of customer project - Reader access for viewers of customer project The default ACL on objects created in the bucket is: - Owner access for owners of central storage project - Reader access for owners/editors/viewers of customer project See Google Cloud Storage documentation for more details. If there is already a default bucket set and the project can access the bucket, this call does nothing. However, if the project doesn't have the permission to access the bucket or the bucket is deleted, a new bucket will be created. May return any canonical error codes, including the following: - PERMISSION_DENIED - if the user is not authorized to write to project - Any error code raised by Google Cloud Storage */
export const initializeSettingsProjects: API.OperationMethod<
  InitializeSettingsProjectsRequest,
  InitializeSettingsProjectsResponse,
  InitializeSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InitializeSettingsProjectsRequest,
  output: InitializeSettingsProjectsResponse,
  errors: [],
}));

export interface CreateProjectsHistoriesRequest {
  /** A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended. */
  requestId?: string;
  /** A Project id. Required. */
  projectId: string;
  /** Request body */
  body?: History;
}

export const CreateProjectsHistoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    body: Schema.optional(History).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "toolresults/v1beta3/projects/{projectId}/histories",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsHistoriesRequest>;

export type CreateProjectsHistoriesResponse = History;
export const CreateProjectsHistoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ History;

export type CreateProjectsHistoriesError = DefaultErrors;

/** Creates a History. The returned History will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing project does not exist */
export const createProjectsHistories: API.OperationMethod<
  CreateProjectsHistoriesRequest,
  CreateProjectsHistoriesResponse,
  CreateProjectsHistoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsHistoriesRequest,
  output: CreateProjectsHistoriesResponse,
  errors: [],
}));

export interface GetProjectsHistoriesRequest {
  /** A Project id. Required. */
  projectId: string;
  /** A History id. Required. */
  historyId: string;
}

export const GetProjectsHistoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    historyId: Schema.String.pipe(T.HttpPath("historyId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "toolresults/v1beta3/projects/{projectId}/histories/{historyId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsHistoriesRequest>;

export type GetProjectsHistoriesResponse = History;
export const GetProjectsHistoriesResponse = /*@__PURE__*/ /*#__PURE__*/ History;

export type GetProjectsHistoriesError = DefaultErrors;

/** Gets a History. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist */
export const getProjectsHistories: API.OperationMethod<
  GetProjectsHistoriesRequest,
  GetProjectsHistoriesResponse,
  GetProjectsHistoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsHistoriesRequest,
  output: GetProjectsHistoriesResponse,
  errors: [],
}));

export interface ListProjectsHistoriesRequest {
  /** A Project id. Required. */
  projectId: string;
  /** If set, only return histories with the given name. Optional. */
  filterByName?: string;
  /** A continuation token to resume the query at the next item. Optional. */
  pageToken?: string;
  /** The maximum number of Histories to fetch. Default value: 20. The server will use this default if the field is not set or has a value of 0. Any value greater than 100 will be treated as 100. Optional. */
  pageSize?: number;
}

export const ListProjectsHistoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    filterByName: Schema.optional(Schema.String).pipe(
      T.HttpQuery("filterByName"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "toolresults/v1beta3/projects/{projectId}/histories",
    }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsHistoriesRequest>;

export type ListProjectsHistoriesResponse = ListHistoriesResponse;
export const ListProjectsHistoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListHistoriesResponse;

export type ListProjectsHistoriesError = DefaultErrors;

/** Lists Histories for a given Project. The histories are sorted by modification time in descending order. The history_id key will be used to order the history with the same modification time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist */
export const listProjectsHistories: API.PaginatedOperationMethod<
  ListProjectsHistoriesRequest,
  ListProjectsHistoriesResponse,
  ListProjectsHistoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsHistoriesRequest,
  output: ListProjectsHistoriesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsHistoriesExecutionsRequest {
  /** A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended. */
  requestId?: string;
  /** A History id. Required. */
  historyId: string;
  /** A Project id. Required. */
  projectId: string;
  /** Request body */
  body?: Execution;
}

export const CreateProjectsHistoriesExecutionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    historyId: Schema.String.pipe(T.HttpPath("historyId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    body: Schema.optional(Execution).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsHistoriesExecutionsRequest>;

export type CreateProjectsHistoriesExecutionsResponse = Execution;
export const CreateProjectsHistoriesExecutionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Execution;

export type CreateProjectsHistoriesExecutionsError = DefaultErrors;

/** Creates an Execution. The returned Execution will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist */
export const createProjectsHistoriesExecutions: API.OperationMethod<
  CreateProjectsHistoriesExecutionsRequest,
  CreateProjectsHistoriesExecutionsResponse,
  CreateProjectsHistoriesExecutionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsHistoriesExecutionsRequest,
  output: CreateProjectsHistoriesExecutionsResponse,
  errors: [],
}));

export interface ListProjectsHistoriesExecutionsRequest {
  /** A continuation token to resume the query at the next item. Optional. */
  pageToken?: string;
  /** The maximum number of Executions to fetch. Default value: 25. The server will use this default if the field is not set or has a value of 0. Optional. */
  pageSize?: number;
  /** A Project id. Required. */
  projectId: string;
  /** A History id. Required. */
  historyId: string;
}

export const ListProjectsHistoriesExecutionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    historyId: Schema.String.pipe(T.HttpPath("historyId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions",
    }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsHistoriesExecutionsRequest>;

export type ListProjectsHistoriesExecutionsResponse = ListExecutionsResponse;
export const ListProjectsHistoriesExecutionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListExecutionsResponse;

export type ListProjectsHistoriesExecutionsError = DefaultErrors;

/** Lists Executions for a given History. The executions are sorted by creation_time in descending order. The execution_id key will be used to order the executions with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist */
export const listProjectsHistoriesExecutions: API.PaginatedOperationMethod<
  ListProjectsHistoriesExecutionsRequest,
  ListProjectsHistoriesExecutionsResponse,
  ListProjectsHistoriesExecutionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsHistoriesExecutionsRequest,
  output: ListProjectsHistoriesExecutionsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsHistoriesExecutionsRequest {
  /** A History id. Required. */
  historyId: string;
  /** A Project id. Required. */
  projectId: string;
  /** An Execution id. Required. */
  executionId: string;
}

export const GetProjectsHistoriesExecutionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    historyId: Schema.String.pipe(T.HttpPath("historyId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    executionId: Schema.String.pipe(T.HttpPath("executionId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsHistoriesExecutionsRequest>;

export type GetProjectsHistoriesExecutionsResponse = Execution;
export const GetProjectsHistoriesExecutionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Execution;

export type GetProjectsHistoriesExecutionsError = DefaultErrors;

/** Gets an Execution. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Execution does not exist */
export const getProjectsHistoriesExecutions: API.OperationMethod<
  GetProjectsHistoriesExecutionsRequest,
  GetProjectsHistoriesExecutionsResponse,
  GetProjectsHistoriesExecutionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsHistoriesExecutionsRequest,
  output: GetProjectsHistoriesExecutionsResponse,
  errors: [],
}));

export interface PatchProjectsHistoriesExecutionsRequest {
  /** A Project id. Required. */
  projectId: string;
  /** Required. */
  executionId: string;
  /** Required. */
  historyId: string;
  /** A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended. */
  requestId?: string;
  /** Request body */
  body?: Execution;
}

export const PatchProjectsHistoriesExecutionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    executionId: Schema.String.pipe(T.HttpPath("executionId")),
    historyId: Schema.String.pipe(T.HttpPath("historyId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Execution).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsHistoriesExecutionsRequest>;

export type PatchProjectsHistoriesExecutionsResponse = Execution;
export const PatchProjectsHistoriesExecutionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Execution;

export type PatchProjectsHistoriesExecutionsError = DefaultErrors;

/** Updates an existing Execution with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal - NOT_FOUND - if the containing History does not exist */
export const patchProjectsHistoriesExecutions: API.OperationMethod<
  PatchProjectsHistoriesExecutionsRequest,
  PatchProjectsHistoriesExecutionsResponse,
  PatchProjectsHistoriesExecutionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsHistoriesExecutionsRequest,
  output: PatchProjectsHistoriesExecutionsResponse,
  errors: [],
}));

export interface CreateProjectsHistoriesExecutionsStepsRequest {
  /** Required. A History id. */
  historyId: string;
  /** Required. A Project id. */
  projectId: string;
  /** Required. An Execution id. */
  executionId: string;
  /** A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended. */
  requestId?: string;
  /** Request body */
  body?: Step;
}

export const CreateProjectsHistoriesExecutionsStepsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    historyId: Schema.String.pipe(T.HttpPath("historyId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    executionId: Schema.String.pipe(T.HttpPath("executionId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Step).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsHistoriesExecutionsStepsRequest>;

export type CreateProjectsHistoriesExecutionsStepsResponse = Step;
export const CreateProjectsHistoriesExecutionsStepsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Step;

export type CreateProjectsHistoriesExecutionsStepsError = DefaultErrors;

/** Creates a Step. The returned Step will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist */
export const createProjectsHistoriesExecutionsSteps: API.OperationMethod<
  CreateProjectsHistoriesExecutionsStepsRequest,
  CreateProjectsHistoriesExecutionsStepsResponse,
  CreateProjectsHistoriesExecutionsStepsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsHistoriesExecutionsStepsRequest,
  output: CreateProjectsHistoriesExecutionsStepsResponse,
  errors: [],
}));

export interface AccessibilityClustersProjectsHistoriesExecutionsStepsRequest {
  /** A full resource name of the step. For example, projects/my-project/histories/bh.1234567890abcdef/executions/ 1234567890123456789/steps/bs.1234567890abcdef Required. */
  name: string;
  /** The accepted format is the canonical Unicode format with hyphen as a delimiter. Language must be lowercase, Language Script - Capitalized, Region - UPPERCASE. See http://www.unicode.org/reports/tr35/#Unicode_locale_identifier for details. Required. */
  locale?: string;
}

export const AccessibilityClustersProjectsHistoriesExecutionsStepsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    locale: Schema.optional(Schema.String).pipe(T.HttpQuery("locale")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "toolresults/v1beta3/{name}:accessibilityClusters",
    }),
    svc,
  ) as unknown as Schema.Schema<AccessibilityClustersProjectsHistoriesExecutionsStepsRequest>;

export type AccessibilityClustersProjectsHistoriesExecutionsStepsResponse =
  ListStepAccessibilityClustersResponse;
export const AccessibilityClustersProjectsHistoriesExecutionsStepsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListStepAccessibilityClustersResponse;

export type AccessibilityClustersProjectsHistoriesExecutionsStepsError =
  DefaultErrors;

/** Lists accessibility clusters for a given Step May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if the locale format is incorrect - NOT_FOUND - if the containing Step does not exist */
export const accessibilityClustersProjectsHistoriesExecutionsSteps: API.OperationMethod<
  AccessibilityClustersProjectsHistoriesExecutionsStepsRequest,
  AccessibilityClustersProjectsHistoriesExecutionsStepsResponse,
  AccessibilityClustersProjectsHistoriesExecutionsStepsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AccessibilityClustersProjectsHistoriesExecutionsStepsRequest,
  output: AccessibilityClustersProjectsHistoriesExecutionsStepsResponse,
  errors: [],
}));

export interface GetPerfMetricsSummaryProjectsHistoriesExecutionsStepsRequest {
  /** A tool results history ID. */
  historyId: string;
  /** A tool results step ID. */
  stepId: string;
  /** The cloud project */
  projectId: string;
  /** A tool results execution ID. */
  executionId: string;
}

export const GetPerfMetricsSummaryProjectsHistoriesExecutionsStepsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    historyId: Schema.String.pipe(T.HttpPath("historyId")),
    stepId: Schema.String.pipe(T.HttpPath("stepId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    executionId: Schema.String.pipe(T.HttpPath("executionId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfMetricsSummary",
    }),
    svc,
  ) as unknown as Schema.Schema<GetPerfMetricsSummaryProjectsHistoriesExecutionsStepsRequest>;

export type GetPerfMetricsSummaryProjectsHistoriesExecutionsStepsResponse =
  PerfMetricsSummary;
export const GetPerfMetricsSummaryProjectsHistoriesExecutionsStepsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PerfMetricsSummary;

export type GetPerfMetricsSummaryProjectsHistoriesExecutionsStepsError =
  DefaultErrors;

/** Retrieves a PerfMetricsSummary. May return any of the following error code(s): - NOT_FOUND - The specified PerfMetricsSummary does not exist */
export const getPerfMetricsSummaryProjectsHistoriesExecutionsSteps: API.OperationMethod<
  GetPerfMetricsSummaryProjectsHistoriesExecutionsStepsRequest,
  GetPerfMetricsSummaryProjectsHistoriesExecutionsStepsResponse,
  GetPerfMetricsSummaryProjectsHistoriesExecutionsStepsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPerfMetricsSummaryProjectsHistoriesExecutionsStepsRequest,
  output: GetPerfMetricsSummaryProjectsHistoriesExecutionsStepsResponse,
  errors: [],
}));

export interface ListProjectsHistoriesExecutionsStepsRequest {
  /** A continuation token to resume the query at the next item. Optional. */
  pageToken?: string;
  /** A History id. Required. */
  historyId: string;
  /** A Execution id. Required. */
  executionId: string;
  /** The maximum number of Steps to fetch. Default value: 25. The server will use this default if the field is not set or has a value of 0. Optional. */
  pageSize?: number;
  /** A Project id. Required. */
  projectId: string;
}

export const ListProjectsHistoriesExecutionsStepsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    historyId: Schema.String.pipe(T.HttpPath("historyId")),
    executionId: Schema.String.pipe(T.HttpPath("executionId")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps",
    }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsHistoriesExecutionsStepsRequest>;

export type ListProjectsHistoriesExecutionsStepsResponse = ListStepsResponse;
export const ListProjectsHistoriesExecutionsStepsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListStepsResponse;

export type ListProjectsHistoriesExecutionsStepsError = DefaultErrors;

/** Lists Steps for a given Execution. The steps are sorted by creation_time in descending order. The step_id key will be used to order the steps with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if an attempt is made to list the children of a nonexistent Step - NOT_FOUND - if the containing Execution does not exist */
export const listProjectsHistoriesExecutionsSteps: API.PaginatedOperationMethod<
  ListProjectsHistoriesExecutionsStepsRequest,
  ListProjectsHistoriesExecutionsStepsResponse,
  ListProjectsHistoriesExecutionsStepsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsHistoriesExecutionsStepsRequest,
  output: ListProjectsHistoriesExecutionsStepsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PublishXunitXmlFilesProjectsHistoriesExecutionsStepsRequest {
  /** A Project id. Required. */
  projectId: string;
  /** A Execution id. Required. */
  executionId: string;
  /** A History id. Required. */
  historyId: string;
  /** A Step id. Note: This step must include a TestExecutionStep. Required. */
  stepId: string;
  /** Request body */
  body?: PublishXunitXmlFilesRequest;
}

export const PublishXunitXmlFilesProjectsHistoriesExecutionsStepsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    executionId: Schema.String.pipe(T.HttpPath("executionId")),
    historyId: Schema.String.pipe(T.HttpPath("historyId")),
    stepId: Schema.String.pipe(T.HttpPath("stepId")),
    body: Schema.optional(PublishXunitXmlFilesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}:publishXunitXmlFiles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PublishXunitXmlFilesProjectsHistoriesExecutionsStepsRequest>;

export type PublishXunitXmlFilesProjectsHistoriesExecutionsStepsResponse = Step;
export const PublishXunitXmlFilesProjectsHistoriesExecutionsStepsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Step;

export type PublishXunitXmlFilesProjectsHistoriesExecutionsStepsError =
  DefaultErrors;

/** Publish xml files to an existing Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal, e.g. try to upload a duplicate xml file or a file too large. - NOT_FOUND - if the containing Execution does not exist */
export const publishXunitXmlFilesProjectsHistoriesExecutionsSteps: API.OperationMethod<
  PublishXunitXmlFilesProjectsHistoriesExecutionsStepsRequest,
  PublishXunitXmlFilesProjectsHistoriesExecutionsStepsResponse,
  PublishXunitXmlFilesProjectsHistoriesExecutionsStepsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PublishXunitXmlFilesProjectsHistoriesExecutionsStepsRequest,
  output: PublishXunitXmlFilesProjectsHistoriesExecutionsStepsResponse,
  errors: [],
}));

export interface GetProjectsHistoriesExecutionsStepsRequest {
  /** A Project id. Required. */
  projectId: string;
  /** A Execution id. Required. */
  executionId: string;
  /** A History id. Required. */
  historyId: string;
  /** A Step id. Required. */
  stepId: string;
}

export const GetProjectsHistoriesExecutionsStepsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    executionId: Schema.String.pipe(T.HttpPath("executionId")),
    historyId: Schema.String.pipe(T.HttpPath("historyId")),
    stepId: Schema.String.pipe(T.HttpPath("stepId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsHistoriesExecutionsStepsRequest>;

export type GetProjectsHistoriesExecutionsStepsResponse = Step;
export const GetProjectsHistoriesExecutionsStepsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Step;

export type GetProjectsHistoriesExecutionsStepsError = DefaultErrors;

/** Gets a Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Step does not exist */
export const getProjectsHistoriesExecutionsSteps: API.OperationMethod<
  GetProjectsHistoriesExecutionsStepsRequest,
  GetProjectsHistoriesExecutionsStepsResponse,
  GetProjectsHistoriesExecutionsStepsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsHistoriesExecutionsStepsRequest,
  output: GetProjectsHistoriesExecutionsStepsResponse,
  errors: [],
}));

export interface PatchProjectsHistoriesExecutionsStepsRequest {
  /** A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended. */
  requestId?: string;
  /** A History id. Required. */
  historyId: string;
  /** A Step id. Required. */
  stepId: string;
  /** A Execution id. Required. */
  executionId: string;
  /** A Project id. Required. */
  projectId: string;
  /** Request body */
  body?: Step;
}

export const PatchProjectsHistoriesExecutionsStepsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    historyId: Schema.String.pipe(T.HttpPath("historyId")),
    stepId: Schema.String.pipe(T.HttpPath("stepId")),
    executionId: Schema.String.pipe(T.HttpPath("executionId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    body: Schema.optional(Step).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsHistoriesExecutionsStepsRequest>;

export type PatchProjectsHistoriesExecutionsStepsResponse = Step;
export const PatchProjectsHistoriesExecutionsStepsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Step;

export type PatchProjectsHistoriesExecutionsStepsError = DefaultErrors;

/** Updates an existing Step with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal (e.g try to upload a duplicate xml file), if the updated step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist */
export const patchProjectsHistoriesExecutionsSteps: API.OperationMethod<
  PatchProjectsHistoriesExecutionsStepsRequest,
  PatchProjectsHistoriesExecutionsStepsResponse,
  PatchProjectsHistoriesExecutionsStepsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsHistoriesExecutionsStepsRequest,
  output: PatchProjectsHistoriesExecutionsStepsResponse,
  errors: [],
}));

export interface ListProjectsHistoriesExecutionsStepsThumbnailsRequest {
  /** The maximum number of thumbnails to fetch. Default value: 50. The server will use this default if the field is not set or has a value of 0. Optional. */
  pageSize?: number;
  /** A Project id. Required. */
  projectId: string;
  /** A continuation token to resume the query at the next item. Optional. */
  pageToken?: string;
  /** A History id. Required. */
  historyId: string;
  /** A Step id. Required. */
  stepId: string;
  /** An Execution id. Required. */
  executionId: string;
}

export const ListProjectsHistoriesExecutionsStepsThumbnailsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    historyId: Schema.String.pipe(T.HttpPath("historyId")),
    stepId: Schema.String.pipe(T.HttpPath("stepId")),
    executionId: Schema.String.pipe(T.HttpPath("executionId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/thumbnails",
    }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsHistoriesExecutionsStepsThumbnailsRequest>;

export type ListProjectsHistoriesExecutionsStepsThumbnailsResponse =
  ListStepThumbnailsResponse;
export const ListProjectsHistoriesExecutionsStepsThumbnailsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListStepThumbnailsResponse;

export type ListProjectsHistoriesExecutionsStepsThumbnailsError = DefaultErrors;

/** Lists thumbnails of images attached to a step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from the project, or from any of the images - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the step does not exist, or if any of the images do not exist */
export const listProjectsHistoriesExecutionsStepsThumbnails: API.PaginatedOperationMethod<
  ListProjectsHistoriesExecutionsStepsThumbnailsRequest,
  ListProjectsHistoriesExecutionsStepsThumbnailsResponse,
  ListProjectsHistoriesExecutionsStepsThumbnailsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsHistoriesExecutionsStepsThumbnailsRequest,
  output: ListProjectsHistoriesExecutionsStepsThumbnailsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsHistoriesExecutionsStepsTestCasesRequest {
  /** A Execution id Required. */
  executionId: string;
  /** A History id. Required. */
  historyId: string;
  /** A Step id. Note: This step must include a TestExecutionStep. Required. */
  stepId: string;
  /** A Project id. Required. */
  projectId: string;
  /** A Test Case id. Required. */
  testCaseId: string;
}

export const GetProjectsHistoriesExecutionsStepsTestCasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    executionId: Schema.String.pipe(T.HttpPath("executionId")),
    historyId: Schema.String.pipe(T.HttpPath("historyId")),
    stepId: Schema.String.pipe(T.HttpPath("stepId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    testCaseId: Schema.String.pipe(T.HttpPath("testCaseId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/testCases/{testCaseId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsHistoriesExecutionsStepsTestCasesRequest>;

export type GetProjectsHistoriesExecutionsStepsTestCasesResponse = TestCase;
export const GetProjectsHistoriesExecutionsStepsTestCasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestCase;

export type GetProjectsHistoriesExecutionsStepsTestCasesError = DefaultErrors;

/** Gets details of a Test Case for a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Test Case does not exist */
export const getProjectsHistoriesExecutionsStepsTestCases: API.OperationMethod<
  GetProjectsHistoriesExecutionsStepsTestCasesRequest,
  GetProjectsHistoriesExecutionsStepsTestCasesResponse,
  GetProjectsHistoriesExecutionsStepsTestCasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsHistoriesExecutionsStepsTestCasesRequest,
  output: GetProjectsHistoriesExecutionsStepsTestCasesResponse,
  errors: [],
}));

export interface ListProjectsHistoriesExecutionsStepsTestCasesRequest {
  /** A History id. Required. */
  historyId: string;
  /** A Step id. Note: This step must include a TestExecutionStep. Required. */
  stepId: string;
  /** A Execution id Required. */
  executionId: string;
  /** A continuation token to resume the query at the next item. Optional. */
  pageToken?: string;
  /** A Project id. Required. */
  projectId: string;
  /** The maximum number of TestCases to fetch. Default value: 100. The server will use this default if the field is not set or has a value of 0. Optional. */
  pageSize?: number;
}

export const ListProjectsHistoriesExecutionsStepsTestCasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    historyId: Schema.String.pipe(T.HttpPath("historyId")),
    stepId: Schema.String.pipe(T.HttpPath("stepId")),
    executionId: Schema.String.pipe(T.HttpPath("executionId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/testCases",
    }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsHistoriesExecutionsStepsTestCasesRequest>;

export type ListProjectsHistoriesExecutionsStepsTestCasesResponse =
  ListTestCasesResponse;
export const ListProjectsHistoriesExecutionsStepsTestCasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTestCasesResponse;

export type ListProjectsHistoriesExecutionsStepsTestCasesError = DefaultErrors;

/** Lists Test Cases attached to a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Step does not exist */
export const listProjectsHistoriesExecutionsStepsTestCases: API.PaginatedOperationMethod<
  ListProjectsHistoriesExecutionsStepsTestCasesRequest,
  ListProjectsHistoriesExecutionsStepsTestCasesResponse,
  ListProjectsHistoriesExecutionsStepsTestCasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsHistoriesExecutionsStepsTestCasesRequest,
  output: ListProjectsHistoriesExecutionsStepsTestCasesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsHistoriesExecutionsStepsPerfMetricsSummaryRequest {
  /** The cloud project */
  projectId: string;
  /** A tool results execution ID. */
  executionId: string;
  /** A tool results history ID. */
  historyId: string;
  /** A tool results step ID. */
  stepId: string;
  /** Request body */
  body?: PerfMetricsSummary;
}

export const CreateProjectsHistoriesExecutionsStepsPerfMetricsSummaryRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    executionId: Schema.String.pipe(T.HttpPath("executionId")),
    historyId: Schema.String.pipe(T.HttpPath("historyId")),
    stepId: Schema.String.pipe(T.HttpPath("stepId")),
    body: Schema.optional(PerfMetricsSummary).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfMetricsSummary",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsHistoriesExecutionsStepsPerfMetricsSummaryRequest>;

export type CreateProjectsHistoriesExecutionsStepsPerfMetricsSummaryResponse =
  PerfMetricsSummary;
export const CreateProjectsHistoriesExecutionsStepsPerfMetricsSummaryResponse =
  /*@__PURE__*/ /*#__PURE__*/ PerfMetricsSummary;

export type CreateProjectsHistoriesExecutionsStepsPerfMetricsSummaryError =
  DefaultErrors;

/** Creates a PerfMetricsSummary resource. Returns the existing one if it has already been created. May return any of the following error code(s): - NOT_FOUND - The containing Step does not exist */
export const createProjectsHistoriesExecutionsStepsPerfMetricsSummary: API.OperationMethod<
  CreateProjectsHistoriesExecutionsStepsPerfMetricsSummaryRequest,
  CreateProjectsHistoriesExecutionsStepsPerfMetricsSummaryResponse,
  CreateProjectsHistoriesExecutionsStepsPerfMetricsSummaryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsHistoriesExecutionsStepsPerfMetricsSummaryRequest,
  output: CreateProjectsHistoriesExecutionsStepsPerfMetricsSummaryResponse,
  errors: [],
}));

export interface CreateProjectsHistoriesExecutionsStepsPerfSampleSeriesRequest {
  /** A tool results history ID. */
  historyId: string;
  /** A tool results step ID. */
  stepId: string;
  /** The cloud project */
  projectId: string;
  /** A tool results execution ID. */
  executionId: string;
  /** Request body */
  body?: PerfSampleSeries;
}

export const CreateProjectsHistoriesExecutionsStepsPerfSampleSeriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    historyId: Schema.String.pipe(T.HttpPath("historyId")),
    stepId: Schema.String.pipe(T.HttpPath("stepId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    executionId: Schema.String.pipe(T.HttpPath("executionId")),
    body: Schema.optional(PerfSampleSeries).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsHistoriesExecutionsStepsPerfSampleSeriesRequest>;

export type CreateProjectsHistoriesExecutionsStepsPerfSampleSeriesResponse =
  PerfSampleSeries;
export const CreateProjectsHistoriesExecutionsStepsPerfSampleSeriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ PerfSampleSeries;

export type CreateProjectsHistoriesExecutionsStepsPerfSampleSeriesError =
  DefaultErrors;

/** Creates a PerfSampleSeries. May return any of the following error code(s): - ALREADY_EXISTS - PerfMetricSummary already exists for the given Step - NOT_FOUND - The containing Step does not exist */
export const createProjectsHistoriesExecutionsStepsPerfSampleSeries: API.OperationMethod<
  CreateProjectsHistoriesExecutionsStepsPerfSampleSeriesRequest,
  CreateProjectsHistoriesExecutionsStepsPerfSampleSeriesResponse,
  CreateProjectsHistoriesExecutionsStepsPerfSampleSeriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsHistoriesExecutionsStepsPerfSampleSeriesRequest,
  output: CreateProjectsHistoriesExecutionsStepsPerfSampleSeriesResponse,
  errors: [],
}));

export interface GetProjectsHistoriesExecutionsStepsPerfSampleSeriesRequest {
  /** A tool results execution ID. */
  executionId: string;
  /** A tool results history ID. */
  historyId: string;
  /** A tool results step ID. */
  stepId: string;
  /** A sample series id */
  sampleSeriesId: string;
  /** The cloud project */
  projectId: string;
}

export const GetProjectsHistoriesExecutionsStepsPerfSampleSeriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    executionId: Schema.String.pipe(T.HttpPath("executionId")),
    historyId: Schema.String.pipe(T.HttpPath("historyId")),
    stepId: Schema.String.pipe(T.HttpPath("stepId")),
    sampleSeriesId: Schema.String.pipe(T.HttpPath("sampleSeriesId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsHistoriesExecutionsStepsPerfSampleSeriesRequest>;

export type GetProjectsHistoriesExecutionsStepsPerfSampleSeriesResponse =
  PerfSampleSeries;
export const GetProjectsHistoriesExecutionsStepsPerfSampleSeriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ PerfSampleSeries;

export type GetProjectsHistoriesExecutionsStepsPerfSampleSeriesError =
  DefaultErrors;

/** Gets a PerfSampleSeries. May return any of the following error code(s): - NOT_FOUND - The specified PerfSampleSeries does not exist */
export const getProjectsHistoriesExecutionsStepsPerfSampleSeries: API.OperationMethod<
  GetProjectsHistoriesExecutionsStepsPerfSampleSeriesRequest,
  GetProjectsHistoriesExecutionsStepsPerfSampleSeriesResponse,
  GetProjectsHistoriesExecutionsStepsPerfSampleSeriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsHistoriesExecutionsStepsPerfSampleSeriesRequest,
  output: GetProjectsHistoriesExecutionsStepsPerfSampleSeriesResponse,
  errors: [],
}));

export interface ListProjectsHistoriesExecutionsStepsPerfSampleSeriesRequest {
  /** The cloud project */
  projectId: string;
  /** Specify one or more PerfMetricType values such as CPU to filter the result */
  filter?:
    | "perfMetricTypeUnspecified"
    | "memory"
    | "cpu"
    | "network"
    | "graphics"
    | (string & {})[];
  /** A tool results history ID. */
  historyId: string;
  /** A tool results step ID. */
  stepId: string;
  /** A tool results execution ID. */
  executionId: string;
}

export const ListProjectsHistoriesExecutionsStepsPerfSampleSeriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    filter: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("filter"),
    ),
    historyId: Schema.String.pipe(T.HttpPath("historyId")),
    stepId: Schema.String.pipe(T.HttpPath("stepId")),
    executionId: Schema.String.pipe(T.HttpPath("executionId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries",
    }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsHistoriesExecutionsStepsPerfSampleSeriesRequest>;

export type ListProjectsHistoriesExecutionsStepsPerfSampleSeriesResponse =
  ListPerfSampleSeriesResponse;
export const ListProjectsHistoriesExecutionsStepsPerfSampleSeriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListPerfSampleSeriesResponse;

export type ListProjectsHistoriesExecutionsStepsPerfSampleSeriesError =
  DefaultErrors;

/** Lists PerfSampleSeries for a given Step. The request provides an optional filter which specifies one or more PerfMetricsType to include in the result; if none returns all. The resulting PerfSampleSeries are sorted by ids. May return any of the following canonical error codes: - NOT_FOUND - The containing Step does not exist */
export const listProjectsHistoriesExecutionsStepsPerfSampleSeries: API.OperationMethod<
  ListProjectsHistoriesExecutionsStepsPerfSampleSeriesRequest,
  ListProjectsHistoriesExecutionsStepsPerfSampleSeriesResponse,
  ListProjectsHistoriesExecutionsStepsPerfSampleSeriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsHistoriesExecutionsStepsPerfSampleSeriesRequest,
  output: ListProjectsHistoriesExecutionsStepsPerfSampleSeriesResponse,
  errors: [],
}));

export interface ListProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesRequest {
  /** A tool results history ID. */
  historyId: string;
  /** A tool results step ID. */
  stepId: string;
  /** A tool results execution ID. */
  executionId: string;
  /** Optional, the next_page_token returned in the previous response */
  pageToken?: string;
  /** The cloud project */
  projectId: string;
  /** A sample series id */
  sampleSeriesId: string;
  /** The default page size is 500 samples, and the maximum size is 5000. If the page_size is greater than 5000, the effective page size will be 5000 */
  pageSize?: number;
}

export const ListProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    historyId: Schema.String.pipe(T.HttpPath("historyId")),
    stepId: Schema.String.pipe(T.HttpPath("stepId")),
    executionId: Schema.String.pipe(T.HttpPath("executionId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    sampleSeriesId: Schema.String.pipe(T.HttpPath("sampleSeriesId")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}/samples",
    }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesRequest>;

export type ListProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesResponse =
  ListPerfSamplesResponse;
export const ListProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListPerfSamplesResponse;

export type ListProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesError =
  DefaultErrors;

/** Lists the Performance Samples of a given Sample Series - The list results are sorted by timestamps ascending - The default page size is 500 samples; and maximum size allowed 5000 - The response token indicates the last returned PerfSample timestamp - When the results size exceeds the page size, submit a subsequent request including the page token to return the rest of the samples up to the page limit May return any of the following canonical error codes: - OUT_OF_RANGE - The specified request page_token is out of valid range - NOT_FOUND - The containing PerfSampleSeries does not exist */
export const listProjectsHistoriesExecutionsStepsPerfSampleSeriesSamples: API.PaginatedOperationMethod<
  ListProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesRequest,
  ListProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesResponse,
  ListProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesRequest,
  output: ListProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface BatchCreateProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesRequest {
  /** A sample series id */
  sampleSeriesId: string;
  /** The cloud project */
  projectId: string;
  /** A tool results execution ID. */
  executionId: string;
  /** A tool results history ID. */
  historyId: string;
  /** A tool results step ID. */
  stepId: string;
  /** Request body */
  body?: BatchCreatePerfSamplesRequest;
}

export const BatchCreateProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sampleSeriesId: Schema.String.pipe(T.HttpPath("sampleSeriesId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    executionId: Schema.String.pipe(T.HttpPath("executionId")),
    historyId: Schema.String.pipe(T.HttpPath("historyId")),
    stepId: Schema.String.pipe(T.HttpPath("stepId")),
    body: Schema.optional(BatchCreatePerfSamplesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}/samples:batchCreate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchCreateProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesRequest>;

export type BatchCreateProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesResponse =
  BatchCreatePerfSamplesResponse;
export const BatchCreateProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchCreatePerfSamplesResponse;

export type BatchCreateProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesError =
  DefaultErrors;

/** Creates a batch of PerfSamples - a client can submit multiple batches of Perf Samples through repeated calls to this method in order to split up a large request payload - duplicates and existing timestamp entries will be ignored. - the batch operation may partially succeed - the set of elements successfully inserted is returned in the response (omits items which already existed in the database). May return any of the following canonical error codes: - NOT_FOUND - The containing PerfSampleSeries does not exist */
export const batchCreateProjectsHistoriesExecutionsStepsPerfSampleSeriesSamples: API.OperationMethod<
  BatchCreateProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesRequest,
  BatchCreateProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesResponse,
  BatchCreateProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    BatchCreateProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesRequest,
  output:
    BatchCreateProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesResponse,
  errors: [],
}));

export interface ListProjectsHistoriesExecutionsEnvironmentsRequest {
  /** Required. A Project id. */
  projectId: string;
  /** The maximum number of Environments to fetch. Default value: 25. The server will use this default if the field is not set or has a value of 0. */
  pageSize?: number;
  /** Required. An Execution id. */
  executionId: string;
  /** Required. A History id. */
  historyId: string;
  /** A continuation token to resume the query at the next item. */
  pageToken?: string;
}

export const ListProjectsHistoriesExecutionsEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    executionId: Schema.String.pipe(T.HttpPath("executionId")),
    historyId: Schema.String.pipe(T.HttpPath("historyId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/environments",
    }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsHistoriesExecutionsEnvironmentsRequest>;

export type ListProjectsHistoriesExecutionsEnvironmentsResponse =
  ListEnvironmentsResponse;
export const ListProjectsHistoriesExecutionsEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListEnvironmentsResponse;

export type ListProjectsHistoriesExecutionsEnvironmentsError = DefaultErrors;

/** Lists Environments for a given Execution. The Environments are sorted by display name. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Execution does not exist */
export const listProjectsHistoriesExecutionsEnvironments: API.PaginatedOperationMethod<
  ListProjectsHistoriesExecutionsEnvironmentsRequest,
  ListProjectsHistoriesExecutionsEnvironmentsResponse,
  ListProjectsHistoriesExecutionsEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsHistoriesExecutionsEnvironmentsRequest,
  output: ListProjectsHistoriesExecutionsEnvironmentsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsHistoriesExecutionsEnvironmentsRequest {
  /** Required. A Project id. */
  projectId: string;
  /** Required. An Execution id. */
  executionId: string;
  /** Required. A History id. */
  historyId: string;
  /** Required. An Environment id. */
  environmentId: string;
}

export const GetProjectsHistoriesExecutionsEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    executionId: Schema.String.pipe(T.HttpPath("executionId")),
    historyId: Schema.String.pipe(T.HttpPath("historyId")),
    environmentId: Schema.String.pipe(T.HttpPath("environmentId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/environments/{environmentId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsHistoriesExecutionsEnvironmentsRequest>;

export type GetProjectsHistoriesExecutionsEnvironmentsResponse = Environment;
export const GetProjectsHistoriesExecutionsEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Environment;

export type GetProjectsHistoriesExecutionsEnvironmentsError = DefaultErrors;

/** Gets an Environment. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Environment does not exist */
export const getProjectsHistoriesExecutionsEnvironments: API.OperationMethod<
  GetProjectsHistoriesExecutionsEnvironmentsRequest,
  GetProjectsHistoriesExecutionsEnvironmentsResponse,
  GetProjectsHistoriesExecutionsEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsHistoriesExecutionsEnvironmentsRequest,
  output: GetProjectsHistoriesExecutionsEnvironmentsResponse,
  errors: [],
}));

export interface GetProjectsHistoriesExecutionsClustersRequest {
  /** A Cluster id Required. */
  clusterId: string;
  /** A History id. Required. */
  historyId: string;
  /** A Project id. Required. */
  projectId: string;
  /** An Execution id. Required. */
  executionId: string;
}

export const GetProjectsHistoriesExecutionsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    historyId: Schema.String.pipe(T.HttpPath("historyId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    executionId: Schema.String.pipe(T.HttpPath("executionId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/clusters/{clusterId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsHistoriesExecutionsClustersRequest>;

export type GetProjectsHistoriesExecutionsClustersResponse = ScreenshotCluster;
export const GetProjectsHistoriesExecutionsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ScreenshotCluster;

export type GetProjectsHistoriesExecutionsClustersError = DefaultErrors;

/** Retrieves a single screenshot cluster by its ID */
export const getProjectsHistoriesExecutionsClusters: API.OperationMethod<
  GetProjectsHistoriesExecutionsClustersRequest,
  GetProjectsHistoriesExecutionsClustersResponse,
  GetProjectsHistoriesExecutionsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsHistoriesExecutionsClustersRequest,
  output: GetProjectsHistoriesExecutionsClustersResponse,
  errors: [],
}));

export interface ListProjectsHistoriesExecutionsClustersRequest {
  /** A Project id. Required. */
  projectId: string;
  /** An Execution id. Required. */
  executionId: string;
  /** A History id. Required. */
  historyId: string;
}

export const ListProjectsHistoriesExecutionsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    executionId: Schema.String.pipe(T.HttpPath("executionId")),
    historyId: Schema.String.pipe(T.HttpPath("historyId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/clusters",
    }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsHistoriesExecutionsClustersRequest>;

export type ListProjectsHistoriesExecutionsClustersResponse =
  ListScreenshotClustersResponse;
export const ListProjectsHistoriesExecutionsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListScreenshotClustersResponse;

export type ListProjectsHistoriesExecutionsClustersError = DefaultErrors;

/** Lists Screenshot Clusters Returns the list of screenshot clusters corresponding to an execution. Screenshot clusters are created after the execution is finished. Clusters are created from a set of screenshots. Between any two screenshots, a matching score is calculated based off their metadata that determines how similar they are. Screenshots are placed in the cluster that has screens which have the highest matching scores. */
export const listProjectsHistoriesExecutionsClusters: API.OperationMethod<
  ListProjectsHistoriesExecutionsClustersRequest,
  ListProjectsHistoriesExecutionsClustersResponse,
  ListProjectsHistoriesExecutionsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsHistoriesExecutionsClustersRequest,
  output: ListProjectsHistoriesExecutionsClustersResponse,
  errors: [],
}));
