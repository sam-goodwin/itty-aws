// ==========================================================================
// Firebase App Distribution API (firebaseappdistribution v1alpha)
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
  name: "firebaseappdistribution",
  version: "v1alpha",
  rootUrl: "https://firebaseappdistribution.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleFirebaseAppdistroV1alphaRoboStats {
  /** Output only. Whether the main activity crawl timed out. */
  mainActivityCrawlTimedOut?: boolean;
  /** Output only. Number of distinct screens visited. */
  distinctVisitedScreens?: number;
  /** Output only. Duration of crawl. */
  crawlDuration?: string;
  /** Output only. Number of actions that crawler performed. */
  actionsPerformed?: number;
}

export const GoogleFirebaseAppdistroV1alphaRoboStats: Schema.Schema<GoogleFirebaseAppdistroV1alphaRoboStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mainActivityCrawlTimedOut: Schema.optional(Schema.Boolean),
    distinctVisitedScreens: Schema.optional(Schema.Number),
    crawlDuration: Schema.optional(Schema.String),
    actionsPerformed: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleFirebaseAppdistroV1alphaRoboStats" });

export interface GoogleFirebaseAppdistroV1alphaAiStep {
  /** A goal to be accomplished by the AI */
  goal?: string;
  /** Optional. Hint text containing suggestions to help the agent accomplish the goal */
  hint?: string;
  /** Optional. A visual description of the screen's expected state after the step has been successfully completed. This is referred to as the "final screen assertion" in the Firebase console and CLI tools. This field must be provided for the last step in a test case, and is optional for all other steps. */
  successCriteria?: string;
  /** An assertion to be checked by the AI */
  assertion?: string;
  /** Output only. The test case that contained this step. Note: The test case may have changed or been deleted since this step was created. Format: `projects/{project_number}/apps/{app}/testCases/{test_case}` */
  testCase?: string;
}

export const GoogleFirebaseAppdistroV1alphaAiStep: Schema.Schema<GoogleFirebaseAppdistroV1alphaAiStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    goal: Schema.optional(Schema.String),
    hint: Schema.optional(Schema.String),
    successCriteria: Schema.optional(Schema.String),
    assertion: Schema.optional(Schema.String),
    testCase: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirebaseAppdistroV1alphaAiStep" });

export interface GoogleFirebaseAppdistroV1alphaAiInstructions {
  /** Required. Steps to be accomplished by the AI */
  steps?: ReadonlyArray<GoogleFirebaseAppdistroV1alphaAiStep>;
}

export const GoogleFirebaseAppdistroV1alphaAiInstructions: Schema.Schema<GoogleFirebaseAppdistroV1alphaAiInstructions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    steps: Schema.optional(Schema.Array(GoogleFirebaseAppdistroV1alphaAiStep)),
  }).annotate({ identifier: "GoogleFirebaseAppdistroV1alphaAiInstructions" });

export interface GoogleFirebaseAppdistroV1alphaTestCase {
  /** Output only. Timestamp when the test case was created */
  createTime?: string;
  /** Output only. Other test cases that depend on this test case as a prerequisite. */
  dependentTestCases?: ReadonlyArray<string>;
  /** Identifier. The name of the test case resource. Format: `projects/{project_number}/apps/{app}/testCases/{test_case}` */
  name?: string;
  /** Required. Display name of the test case. */
  displayName?: string;
  /** Optional. Test case that must be run before this test case. */
  prerequisiteTestCase?: string;
  /** Optional. Instructions for AI driven test. */
  aiInstructions?: GoogleFirebaseAppdistroV1alphaAiInstructions;
}

export const GoogleFirebaseAppdistroV1alphaTestCase: Schema.Schema<GoogleFirebaseAppdistroV1alphaTestCase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    dependentTestCases: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    prerequisiteTestCase: Schema.optional(Schema.String),
    aiInstructions: Schema.optional(
      GoogleFirebaseAppdistroV1alphaAiInstructions,
    ),
  }).annotate({ identifier: "GoogleFirebaseAppdistroV1alphaTestCase" });

export interface GoogleFirebaseAppdistroV1alphaUpdateTestCaseRequest {
  /** Required. The test case to update. The test case's `name` field is used to identify the test case to update. Format: `projects/{project_number}/apps/{app}/testCases/{test_case}` */
  testCase?: GoogleFirebaseAppdistroV1alphaTestCase;
  /** Optional. If set to true, and the test case is not found, a new test case will be created. */
  allowMissing?: boolean;
}

export const GoogleFirebaseAppdistroV1alphaUpdateTestCaseRequest: Schema.Schema<GoogleFirebaseAppdistroV1alphaUpdateTestCaseRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testCase: Schema.optional(GoogleFirebaseAppdistroV1alphaTestCase),
    allowMissing: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleFirebaseAppdistroV1alphaUpdateTestCaseRequest",
  });

export interface GoogleFirebaseAppdistroV1alphaBatchUpdateTestCasesRequest {
  /** Required. The update requests. A maximum number of 1000 test cases can be updated in one batch */
  requests?: ReadonlyArray<GoogleFirebaseAppdistroV1alphaUpdateTestCaseRequest>;
}

export const GoogleFirebaseAppdistroV1alphaBatchUpdateTestCasesRequest: Schema.Schema<GoogleFirebaseAppdistroV1alphaBatchUpdateTestCasesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requests: Schema.optional(
      Schema.Array(GoogleFirebaseAppdistroV1alphaUpdateTestCaseRequest),
    ),
  }).annotate({
    identifier: "GoogleFirebaseAppdistroV1alphaBatchUpdateTestCasesRequest",
  });

export interface GoogleFirebaseAppdistroV1alphaScreenshot {
  /** Output only. The height of the screenshot, in pixels. */
  height?: number;
  /** Output only. The URI of the screenshot. */
  uri?: string;
  /** Output only. The width of the screenshot, in pixels. */
  width?: number;
}

export const GoogleFirebaseAppdistroV1alphaScreenshot: Schema.Schema<GoogleFirebaseAppdistroV1alphaScreenshot> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    height: Schema.optional(Schema.Number),
    uri: Schema.optional(Schema.String),
    width: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleFirebaseAppdistroV1alphaScreenshot" });

export interface GoogleFirebaseAppdistroV1alphaAssertionDetails {
  /** Output only. The screenshot used in the context of this assertion. */
  screenshot?: GoogleFirebaseAppdistroV1alphaScreenshot;
  /** Output only. The result of the assertion. */
  result?: boolean;
  /** Output only. An explanation justifying the assertion result. */
  explanation?: string;
}

export const GoogleFirebaseAppdistroV1alphaAssertionDetails: Schema.Schema<GoogleFirebaseAppdistroV1alphaAssertionDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    screenshot: Schema.optional(GoogleFirebaseAppdistroV1alphaScreenshot),
    result: Schema.optional(Schema.Boolean),
    explanation: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirebaseAppdistroV1alphaAssertionDetails" });

export interface GoogleFirebaseAppdistroV1alphaAabCertificate {
  /** SHA256 hash of the certificate used to resign the AAB */
  certificateHashSha256?: string;
  /** SHA1 hash of the certificate used to resign the AAB */
  certificateHashSha1?: string;
  /** MD5 hash of the certificate used to resign the AAB */
  certificateHashMd5?: string;
}

export const GoogleFirebaseAppdistroV1alphaAabCertificate: Schema.Schema<GoogleFirebaseAppdistroV1alphaAabCertificate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificateHashSha256: Schema.optional(Schema.String),
    certificateHashSha1: Schema.optional(Schema.String),
    certificateHashMd5: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirebaseAppdistroV1alphaAabCertificate" });

export interface GoogleProtobufEmpty {}

export const GoogleProtobufEmpty: Schema.Schema<GoogleProtobufEmpty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleProtobufEmpty",
  });

export interface GoogleFirebaseAppdistroV1alphaAppCrash {
  /** Output only. The message associated with the crash. */
  message?: string;
  /** Output only. The raw stack trace. */
  stackTrace?: string;
}

export const GoogleFirebaseAppdistroV1alphaAppCrash: Schema.Schema<GoogleFirebaseAppdistroV1alphaAppCrash> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    stackTrace: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirebaseAppdistroV1alphaAppCrash" });

export interface AndroidxCrawlerOutputPoint {
  yCoordinate?: number;
  xCoordinate?: number;
}

export const AndroidxCrawlerOutputPoint: Schema.Schema<AndroidxCrawlerOutputPoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    yCoordinate: Schema.optional(Schema.Number),
    xCoordinate: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AndroidxCrawlerOutputPoint" });

export interface GoogleFirebaseAppdistroV1alphaDeviceInteractionWait {
  /** Output only. The duration of the wait. */
  duration?: string;
}

export const GoogleFirebaseAppdistroV1alphaDeviceInteractionWait: Schema.Schema<GoogleFirebaseAppdistroV1alphaDeviceInteractionWait> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    duration: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleFirebaseAppdistroV1alphaDeviceInteractionWait",
  });

export interface GoogleFirebaseAppdistroV1alphaDeviceInteractionBack {}

export const GoogleFirebaseAppdistroV1alphaDeviceInteractionBack: Schema.Schema<GoogleFirebaseAppdistroV1alphaDeviceInteractionBack> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleFirebaseAppdistroV1alphaDeviceInteractionBack",
  });

export interface GoogleFirebaseAppdistroV1alphaDeviceInteractionDragAndDrop {
  /** Output only. The start point of the drag and drop. */
  start?: AndroidxCrawlerOutputPoint;
  /** Output only. The end point of the drag and drop. */
  end?: AndroidxCrawlerOutputPoint;
}

export const GoogleFirebaseAppdistroV1alphaDeviceInteractionDragAndDrop: Schema.Schema<GoogleFirebaseAppdistroV1alphaDeviceInteractionDragAndDrop> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    start: Schema.optional(AndroidxCrawlerOutputPoint),
    end: Schema.optional(AndroidxCrawlerOutputPoint),
  }).annotate({
    identifier: "GoogleFirebaseAppdistroV1alphaDeviceInteractionDragAndDrop",
  });

export interface GoogleFirebaseAppdistroV1alphaDeviceInteractionSwipe {
  /** Output only. The start point of the swipe. */
  start?: AndroidxCrawlerOutputPoint;
  /** Output only. The end point of the swipe. */
  end?: AndroidxCrawlerOutputPoint;
}

export const GoogleFirebaseAppdistroV1alphaDeviceInteractionSwipe: Schema.Schema<GoogleFirebaseAppdistroV1alphaDeviceInteractionSwipe> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    start: Schema.optional(AndroidxCrawlerOutputPoint),
    end: Schema.optional(AndroidxCrawlerOutputPoint),
  }).annotate({
    identifier: "GoogleFirebaseAppdistroV1alphaDeviceInteractionSwipe",
  });

export interface AndroidxCrawlerOutputRectangle {
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
}

export const AndroidxCrawlerOutputRectangle: Schema.Schema<AndroidxCrawlerOutputRectangle> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    top: Schema.optional(Schema.Number),
    bottom: Schema.optional(Schema.Number),
    right: Schema.optional(Schema.Number),
    left: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AndroidxCrawlerOutputRectangle" });

export interface GoogleFirebaseAppdistroV1alphaDeviceInteractionEnterText {
  /** Output only. The visible bounds of the element to enter text into. */
  elementBounds?: AndroidxCrawlerOutputRectangle;
  /** Output only. The text to enter. */
  text?: string;
}

export const GoogleFirebaseAppdistroV1alphaDeviceInteractionEnterText: Schema.Schema<GoogleFirebaseAppdistroV1alphaDeviceInteractionEnterText> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    elementBounds: Schema.optional(AndroidxCrawlerOutputRectangle),
    text: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleFirebaseAppdistroV1alphaDeviceInteractionEnterText",
  });

export interface GoogleFirebaseAppdistroV1alphaDeviceInteraction {
  /** Output only. The target folded state of the device in a set folded state action. The valid string values are device-dependent, and can be found using `adb shell cmd device_state print-states`. */
  targetFoldedState?: string;
  /** Output only. A tap action. */
  tap?: AndroidxCrawlerOutputPoint;
  /** Output only. A wait action. */
  wait?: GoogleFirebaseAppdistroV1alphaDeviceInteractionWait;
  /** Output only. The target orientation of the device in a set orientation action. */
  targetOrientation?:
    | "ORIENTATION_UNSPECIFIED"
    | "PORTRAIT"
    | "LANDSCAPE"
    | (string & {});
  /** Output only. A back action. */
  backAction?: GoogleFirebaseAppdistroV1alphaDeviceInteractionBack;
  /** Output only. The screenshot used in the context of this action. The screen may have changed before the action was actually taken. */
  screenshot?: GoogleFirebaseAppdistroV1alphaScreenshot;
  /** Output only. A text input action, that types some text into whatever field is currently focused, if any. Unlike `enter_text` this action requires that the field be brought into focus first, for example by emitting a tap action before this one. */
  textInput?: string;
  /** Output only. A drag and drop action. */
  dragAndDrop?: GoogleFirebaseAppdistroV1alphaDeviceInteractionDragAndDrop;
  /** Output only. A swipe action. */
  swipe?: GoogleFirebaseAppdistroV1alphaDeviceInteractionSwipe;
  /** Output only. A text entry action, that enters text into a particular text field, clearing any existing text in the field. Unlike `text_input` this action does not require any other actions such as a tap to be performed before it can enter the text. */
  enterText?: GoogleFirebaseAppdistroV1alphaDeviceInteractionEnterText;
  /** Output only. Key code for a key event action. */
  keyCode?: string;
  /** Output only. A long press (tap and hold) action. */
  longPress?: AndroidxCrawlerOutputPoint;
}

export const GoogleFirebaseAppdistroV1alphaDeviceInteraction: Schema.Schema<GoogleFirebaseAppdistroV1alphaDeviceInteraction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetFoldedState: Schema.optional(Schema.String),
    tap: Schema.optional(AndroidxCrawlerOutputPoint),
    wait: Schema.optional(GoogleFirebaseAppdistroV1alphaDeviceInteractionWait),
    targetOrientation: Schema.optional(Schema.String),
    backAction: Schema.optional(
      GoogleFirebaseAppdistroV1alphaDeviceInteractionBack,
    ),
    screenshot: Schema.optional(GoogleFirebaseAppdistroV1alphaScreenshot),
    textInput: Schema.optional(Schema.String),
    dragAndDrop: Schema.optional(
      GoogleFirebaseAppdistroV1alphaDeviceInteractionDragAndDrop,
    ),
    swipe: Schema.optional(
      GoogleFirebaseAppdistroV1alphaDeviceInteractionSwipe,
    ),
    enterText: Schema.optional(
      GoogleFirebaseAppdistroV1alphaDeviceInteractionEnterText,
    ),
    keyCode: Schema.optional(Schema.String),
    longPress: Schema.optional(AndroidxCrawlerOutputPoint),
  }).annotate({
    identifier: "GoogleFirebaseAppdistroV1alphaDeviceInteraction",
  });

export interface GoogleFirebaseAppdistroV1alphaDeviceAction {
  /** Output only. The interactions made with the device as part of this higher level action taken by the agent, such as taps, text entries, waits, etc. */
  deviceInteractions?: ReadonlyArray<GoogleFirebaseAppdistroV1alphaDeviceInteraction>;
  /** Output only. A short description of the high level action taken by the AI agent. */
  description?: string;
}

export const GoogleFirebaseAppdistroV1alphaDeviceAction: Schema.Schema<GoogleFirebaseAppdistroV1alphaDeviceAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceInteractions: Schema.optional(
      Schema.Array(GoogleFirebaseAppdistroV1alphaDeviceInteraction),
    ),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirebaseAppdistroV1alphaDeviceAction" });

export interface GoogleFirebaseAppdistroV1alphaGoalActionDebugInfo {
  /** Output only. Structured data explaining the agent's choice. */
  jsonUri?: string;
  /** Output only. URI of the screenshot with elements labeled which was used by the agent. */
  annotatedScreenshotUri?: string;
}

export const GoogleFirebaseAppdistroV1alphaGoalActionDebugInfo: Schema.Schema<GoogleFirebaseAppdistroV1alphaGoalActionDebugInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jsonUri: Schema.optional(Schema.String),
    annotatedScreenshotUri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleFirebaseAppdistroV1alphaGoalActionDebugInfo",
  });

export interface GoogleFirebaseAppdistroV1alphaTerminalAction {
  /** Output only. The reason why this goal was ended. */
  reason?:
    | "REASON_UNSPECIFIED"
    | "GOAL_IMPOSSIBLE"
    | "GOAL_COMPLETE"
    | (string & {});
  /** Output only. The screenshot used in the context of this terminal action. */
  screenshot?: GoogleFirebaseAppdistroV1alphaScreenshot;
}

export const GoogleFirebaseAppdistroV1alphaTerminalAction: Schema.Schema<GoogleFirebaseAppdistroV1alphaTerminalAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reason: Schema.optional(Schema.String),
    screenshot: Schema.optional(GoogleFirebaseAppdistroV1alphaScreenshot),
  }).annotate({ identifier: "GoogleFirebaseAppdistroV1alphaTerminalAction" });

export interface GoogleFirebaseAppdistroV1alphaGoalAction {
  /** Output only. A high level action taken by the AI on the device. */
  deviceAction?: GoogleFirebaseAppdistroV1alphaDeviceAction;
  /** Output only. The time at which the action started. */
  startTime?: string;
  /** Output only. Debug information explaining why the agent to the specific action. */
  debugInfo?: GoogleFirebaseAppdistroV1alphaGoalActionDebugInfo;
  /** Output only. The type of caching used to determine the action. */
  cachingType?:
    | "CACHING_TYPE_UNSPECIFIED"
    | "NO_CACHING"
    | "CACHE_AND_MODEL"
    | "CACHE_ONLY"
    | (string & {});
  /** Output only. An explanation justifying why the action was taken. */
  explanation?: string;
  /** Output only. An action taken by the AI to end the goal. */
  terminalAction?: GoogleFirebaseAppdistroV1alphaTerminalAction;
}

export const GoogleFirebaseAppdistroV1alphaGoalAction: Schema.Schema<GoogleFirebaseAppdistroV1alphaGoalAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceAction: Schema.optional(GoogleFirebaseAppdistroV1alphaDeviceAction),
    startTime: Schema.optional(Schema.String),
    debugInfo: Schema.optional(
      GoogleFirebaseAppdistroV1alphaGoalActionDebugInfo,
    ),
    cachingType: Schema.optional(Schema.String),
    explanation: Schema.optional(Schema.String),
    terminalAction: Schema.optional(
      GoogleFirebaseAppdistroV1alphaTerminalAction,
    ),
  }).annotate({ identifier: "GoogleFirebaseAppdistroV1alphaGoalAction" });

export interface GoogleFirebaseAppdistroV1alphaGoalDetails {
  /** Output only. The actions taken by the AI while attempting to accomplish the goal. */
  goalActions?: ReadonlyArray<GoogleFirebaseAppdistroV1alphaGoalAction>;
}

export const GoogleFirebaseAppdistroV1alphaGoalDetails: Schema.Schema<GoogleFirebaseAppdistroV1alphaGoalDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    goalActions: Schema.optional(
      Schema.Array(GoogleFirebaseAppdistroV1alphaGoalAction),
    ),
  }).annotate({ identifier: "GoogleFirebaseAppdistroV1alphaGoalDetails" });

export interface GoogleFirebaseAppdistroV1alphaAiStepResult {
  /** Output only. The current state of the step */
  state?:
    | "STEP_STATE_UNSPECIFIED"
    | "IN_PROGRESS"
    | "PASSED"
    | "FAILED"
    | "TIMED_OUT"
    | "GOAL_ACTION_LIMIT_REACHED"
    | (string & {});
  /** Required. The step performed by the AI */
  step?: GoogleFirebaseAppdistroV1alphaAiStep;
  /** Output only. Details for a goal step. */
  goalDetails?: GoogleFirebaseAppdistroV1alphaGoalDetails;
  /** Output only. Details for an assertion step. */
  assertionDetails?: GoogleFirebaseAppdistroV1alphaAssertionDetails;
}

export const GoogleFirebaseAppdistroV1alphaAiStepResult: Schema.Schema<GoogleFirebaseAppdistroV1alphaAiStepResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    step: Schema.optional(GoogleFirebaseAppdistroV1alphaAiStep),
    goalDetails: Schema.optional(GoogleFirebaseAppdistroV1alphaGoalDetails),
    assertionDetails: Schema.optional(
      GoogleFirebaseAppdistroV1alphaAssertionDetails,
    ),
  }).annotate({ identifier: "GoogleFirebaseAppdistroV1alphaAiStepResult" });

export interface GoogleFirebaseAppdistroV1alphaTestDevice {
  /** Optional. The orientation of the device during the test. */
  orientation?: string;
  /** Optional. The locale of the device (e.g. "en_US" for US English) during the test. */
  locale?: string;
  /** Required. The device model. */
  model?: string;
  /** Required. The version of the device (API level on Android). */
  version?: string;
}

export const GoogleFirebaseAppdistroV1alphaTestDevice: Schema.Schema<GoogleFirebaseAppdistroV1alphaTestDevice> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orientation: Schema.optional(Schema.String),
    locale: Schema.optional(Schema.String),
    model: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirebaseAppdistroV1alphaTestDevice" });

export interface GoogleFirebaseAppdistroV1alphaDeviceExecution {
  /** Output only. A URI to a video of the test run. */
  videoUri?: string;
  /** Identifier. The name of the device execution resource. Format: `projects/{project_number}/apps/{app}/releases/{release}/tests/{test}/deviceExecutions/{device_execution}` */
  name?: string;
  /** Output only. Results of the AI steps if passed in */
  aiStepResults?: ReadonlyArray<GoogleFirebaseAppdistroV1alphaAiStepResult>;
  /** Output only. A list of screenshot image URIs taken from the Robo crawl. The file names are numbered by the order in which they were taken. */
  screenshotUris?: ReadonlyArray<string>;
  /** Output only. The reason why the test failed. */
  failedReason?:
    | "FAILED_REASON_UNSPECIFIED"
    | "CRASHED"
    | "NOT_INSTALLED"
    | "UNABLE_TO_CRAWL"
    | "DEVICE_OUT_OF_MEMORY"
    | "FAILED_AI_STEP"
    | "TIMED_OUT"
    | (string & {});
  /** Output only. The device execution from which cached steps were used during this execution. Note: This field is only populated for ACTION_BASED_REPLAY executions. If the original device execution no longer exists, this field will be empty. Format: `projects/{project_number}/apps/{app}/releases/{release}/tests/{test}/deviceExecutions/{device_execution}` */
  originDeviceExecution?: string;
  /** Output only. The time at which the video started recording. */
  videoStartTime?: string;
  /** Output only. The state of the test. */
  state?:
    | "TEST_STATE_UNSPECIFIED"
    | "IN_PROGRESS"
    | "PASSED"
    | "FAILED"
    | "INCONCLUSIVE"
    | (string & {});
  /** Output only. A URI to an image of the Robo crawl graph. */
  crawlGraphUri?: string;
  /** Output only. The type of execution for the test. */
  executionType?:
    | "EXECUTION_TYPE_UNSPECIFIED"
    | "AI"
    | "ACTION_BASED_REPLAY"
    | "AI_REPLAY"
    | "RANDOM_CRAWL"
    | (string & {});
  /** Output only. The statistics collected during the Robo test. */
  roboStats?: GoogleFirebaseAppdistroV1alphaRoboStats;
  /** Required. The device that the test was run on. */
  device?: GoogleFirebaseAppdistroV1alphaTestDevice;
  /** Output only. The path to a directory in Cloud Storage that will eventually contain the results for this execution. For example, gs://bucket/Nexus5-18-en-portrait. */
  resultsStoragePath?: string;
  /** Output only. Indicates that the test replayed saved actions and concluded without a final AI assertion. */
  finalAiAssertionMissing?: boolean;
  /** Output only. The reason why the test was inconclusive. */
  inconclusiveReason?:
    | "INCONCLUSIVE_REASON_UNSPECIFIED"
    | "QUOTA_EXCEEDED"
    | "INFRASTRUCTURE_FAILURE"
    | "SERVICE_NOT_ACTIVATED"
    | "NO_SIGNATURE"
    | "NO_LAUNCHER_ACTIVITY"
    | "FORBIDDEN_PERMISSIONS"
    | "DEVICE_ADMIN_RECEIVER"
    | "NO_CODE_APK"
    | "INVALID_APK_PREVIEW_SDK"
    | (string & {});
  /** Output only. An app crash, if any occurred during the test. */
  appCrash?: GoogleFirebaseAppdistroV1alphaAppCrash;
}

export const GoogleFirebaseAppdistroV1alphaDeviceExecution: Schema.Schema<GoogleFirebaseAppdistroV1alphaDeviceExecution> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    videoUri: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    aiStepResults: Schema.optional(
      Schema.Array(GoogleFirebaseAppdistroV1alphaAiStepResult),
    ),
    screenshotUris: Schema.optional(Schema.Array(Schema.String)),
    failedReason: Schema.optional(Schema.String),
    originDeviceExecution: Schema.optional(Schema.String),
    videoStartTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    crawlGraphUri: Schema.optional(Schema.String),
    executionType: Schema.optional(Schema.String),
    roboStats: Schema.optional(GoogleFirebaseAppdistroV1alphaRoboStats),
    device: Schema.optional(GoogleFirebaseAppdistroV1alphaTestDevice),
    resultsStoragePath: Schema.optional(Schema.String),
    finalAiAssertionMissing: Schema.optional(Schema.Boolean),
    inconclusiveReason: Schema.optional(Schema.String),
    appCrash: Schema.optional(GoogleFirebaseAppdistroV1alphaAppCrash),
  }).annotate({ identifier: "GoogleFirebaseAppdistroV1alphaDeviceExecution" });

export interface GoogleFirebaseAppdistroV1alphaLoginCredentialFieldHints {
  /** Required. The Android resource name of the password UI element. For example, in Java: R.string.foo in xml: @string/foo Only the "foo" part is needed. Reference doc: https://developer.android.com/guide/topics/resources/accessing-resources.html */
  passwordResourceName?: string;
  /** Required. The Android resource name of the username UI element. For example, in Java: R.string.foo in xml: @string/foo Only the "foo" part is needed. Reference doc: https://developer.android.com/guide/topics/resources/accessing-resources.html */
  usernameResourceName?: string;
}

export const GoogleFirebaseAppdistroV1alphaLoginCredentialFieldHints: Schema.Schema<GoogleFirebaseAppdistroV1alphaLoginCredentialFieldHints> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    passwordResourceName: Schema.optional(Schema.String),
    usernameResourceName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleFirebaseAppdistroV1alphaLoginCredentialFieldHints",
  });

export interface GoogleFirebaseAppdistroV1alphaLoginCredential {
  /** Optional. Username for automated tests */
  username?: string;
  /** Optional. Hints to the crawler for identifying input fields */
  fieldHints?: GoogleFirebaseAppdistroV1alphaLoginCredentialFieldHints;
  /** Optional. Password for automated tests */
  password?: string;
  /** Optional. Are these credentials for Google? */
  google?: boolean;
}

export const GoogleFirebaseAppdistroV1alphaLoginCredential: Schema.Schema<GoogleFirebaseAppdistroV1alphaLoginCredential> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.optional(Schema.String),
    fieldHints: Schema.optional(
      GoogleFirebaseAppdistroV1alphaLoginCredentialFieldHints,
    ),
    password: Schema.optional(Schema.String),
    google: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleFirebaseAppdistroV1alphaLoginCredential" });

export interface GoogleFirebaseAppdistroV1alphaReleaseTest {
  /** Optional. The test case that was used to generate this release test. Note: The test case may have changed or been deleted since the release test was created. Format: `projects/{project_number}/apps/{app}/testCases/{test_case}` */
  testCase?: string;
  /** Required. The results of the test on each device. */
  deviceExecutions?: ReadonlyArray<GoogleFirebaseAppdistroV1alphaDeviceExecution>;
  /** Optional. Input only. The custom Cloud Storage bucket where test results are stored. Format: `projects/{project_number}/buckets/{bucket}` If not provided, the default test lab bucket is used. */
  resultsBucket?: string;
  /** Output only. Timestamp when the test was run. */
  createTime?: string;
  /** Optional. Input only. Login credentials for the test. Input only. */
  loginCredential?: GoogleFirebaseAppdistroV1alphaLoginCredential;
  /** Optional. Display name of the release test. Required if the release test is created with multiple goals. */
  displayName?: string;
  /** Optional. Instructions for AI driven test. */
  aiInstructions?: GoogleFirebaseAppdistroV1alphaAiInstructions;
  /** Output only. The state of the release test. */
  testState?:
    | "TEST_STATE_UNSPECIFIED"
    | "IN_PROGRESS"
    | "PASSED"
    | "FAILED"
    | "INCONCLUSIVE"
    | (string & {});
  /** The name of the release test resource. Format: `projects/{project_number}/apps/{app}/releases/{release}/tests/{test}` */
  name?: string;
}

export const GoogleFirebaseAppdistroV1alphaReleaseTest: Schema.Schema<GoogleFirebaseAppdistroV1alphaReleaseTest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testCase: Schema.optional(Schema.String),
    deviceExecutions: Schema.optional(
      Schema.Array(GoogleFirebaseAppdistroV1alphaDeviceExecution),
    ),
    resultsBucket: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    loginCredential: Schema.optional(
      GoogleFirebaseAppdistroV1alphaLoginCredential,
    ),
    displayName: Schema.optional(Schema.String),
    aiInstructions: Schema.optional(
      GoogleFirebaseAppdistroV1alphaAiInstructions,
    ),
    testState: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirebaseAppdistroV1alphaReleaseTest" });

export interface GoogleFirebaseAppdistroV1ReleaseNotes {
  /** The text of the release notes. */
  text?: string;
}

export const GoogleFirebaseAppdistroV1ReleaseNotes: Schema.Schema<GoogleFirebaseAppdistroV1ReleaseNotes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirebaseAppdistroV1ReleaseNotes" });

export interface GoogleFirebaseAppdistroV1alphaTestQuota {
  /** Output only. Number of `ReleaseTests` run in the current month */
  usage?: string;
  /** Output only. Maximum number of `ReleaseTests` allotted for the current month. */
  limit?: string;
  /** Identifier. The name of the `TestQuota` resource. Format: `projects/{project_number}/testQuota` */
  name?: string;
}

export const GoogleFirebaseAppdistroV1alphaTestQuota: Schema.Schema<GoogleFirebaseAppdistroV1alphaTestQuota> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    usage: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirebaseAppdistroV1alphaTestQuota" });

export interface GoogleFirebaseAppdistroV1alphaRoboCrawler {
  /** Optional. Login credential for automated tests */
  loginCredential?: GoogleFirebaseAppdistroV1alphaLoginCredential;
  /** Optional. Instructions for AI driven test */
  aiInstructions?: GoogleFirebaseAppdistroV1alphaAiInstructions;
}

export const GoogleFirebaseAppdistroV1alphaRoboCrawler: Schema.Schema<GoogleFirebaseAppdistroV1alphaRoboCrawler> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loginCredential: Schema.optional(
      GoogleFirebaseAppdistroV1alphaLoginCredential,
    ),
    aiInstructions: Schema.optional(
      GoogleFirebaseAppdistroV1alphaAiInstructions,
    ),
  }).annotate({ identifier: "GoogleFirebaseAppdistroV1alphaRoboCrawler" });

export interface GoogleFirebaseAppdistroV1alphaReleaseNotes {
  /** The actual release notes text from the user. */
  releaseNotes?: string;
}

export const GoogleFirebaseAppdistroV1alphaReleaseNotes: Schema.Schema<GoogleFirebaseAppdistroV1alphaReleaseNotes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    releaseNotes: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirebaseAppdistroV1alphaReleaseNotes" });

export interface GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseResponse {}

export const GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseResponse: Schema.Schema<GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseResponse",
  });

export interface GoogleFirebaseAppdistroV1alphaCreateReleaseNotesResponse {}

export const GoogleFirebaseAppdistroV1alphaCreateReleaseNotesResponse: Schema.Schema<GoogleFirebaseAppdistroV1alphaCreateReleaseNotesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleFirebaseAppdistroV1alphaCreateReleaseNotesResponse",
  });

export interface GoogleFirebaseAppdistroV1UploadReleaseMetadata {}

export const GoogleFirebaseAppdistroV1UploadReleaseMetadata: Schema.Schema<GoogleFirebaseAppdistroV1UploadReleaseMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleFirebaseAppdistroV1UploadReleaseMetadata",
  });

export interface GoogleFirebaseAppdistroV1alphaClearTestCaseCacheRequest {
  /** Optional. The list of devices for which to clear the cache. If not present, clear all of them. */
  testDevices?: ReadonlyArray<GoogleFirebaseAppdistroV1alphaTestDevice>;
}

export const GoogleFirebaseAppdistroV1alphaClearTestCaseCacheRequest: Schema.Schema<GoogleFirebaseAppdistroV1alphaClearTestCaseCacheRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testDevices: Schema.optional(
      Schema.Array(GoogleFirebaseAppdistroV1alphaTestDevice),
    ),
  }).annotate({
    identifier: "GoogleFirebaseAppdistroV1alphaClearTestCaseCacheRequest",
  });

export interface GoogleFirebaseAppdistroV1alphaJwt {
  /** The JWT token (three Base64URL-encoded strings joined by dots). */
  token?: string;
}

export const GoogleFirebaseAppdistroV1alphaJwt: Schema.Schema<GoogleFirebaseAppdistroV1alphaJwt> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirebaseAppdistroV1alphaJwt" });

export interface GoogleFirebaseAppdistroV1alphaTestConfig {
  /** Optional. Tests will be run on this list of devices */
  testDevices?: ReadonlyArray<GoogleFirebaseAppdistroV1alphaTestDevice>;
  /** Optional. The custom Cloud Storage bucket where test results are stored. Format: `projects/{project_number}/buckets/{bucket}` If not provided, the default test lab bucket is used. */
  resultsBucket?: string;
  /** Optional. Display name of the AI driven test. Required if the release test is created with multiple goals. */
  displayName?: string;
  /** Identifier. The name of the test configuration resource. Format: `projects/{project_number}/apps/{app}/testConfig` */
  name?: string;
  /** Optional. Configuration for Robo crawler */
  roboCrawler?: GoogleFirebaseAppdistroV1alphaRoboCrawler;
}

export const GoogleFirebaseAppdistroV1alphaTestConfig: Schema.Schema<GoogleFirebaseAppdistroV1alphaTestConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testDevices: Schema.optional(
      Schema.Array(GoogleFirebaseAppdistroV1alphaTestDevice),
    ),
    resultsBucket: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    roboCrawler: Schema.optional(GoogleFirebaseAppdistroV1alphaRoboCrawler),
  }).annotate({ identifier: "GoogleFirebaseAppdistroV1alphaTestConfig" });

export interface GoogleFirebaseAppdistroV1alphaTesterUdid {
  /** The UDID of the tester's device */
  udid?: string;
  /** The name of the tester's device */
  name?: string;
  /** The platform of the tester's device */
  platform?: string;
}

export const GoogleFirebaseAppdistroV1alphaTesterUdid: Schema.Schema<GoogleFirebaseAppdistroV1alphaTesterUdid> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    udid: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    platform: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirebaseAppdistroV1alphaTesterUdid" });

export interface GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse {
  /** The UDIDs of tester iOS devices in a project */
  testerUdids?: ReadonlyArray<GoogleFirebaseAppdistroV1alphaTesterUdid>;
}

export const GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse: Schema.Schema<GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testerUdids: Schema.optional(
      Schema.Array(GoogleFirebaseAppdistroV1alphaTesterUdid),
    ),
  }).annotate({
    identifier: "GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse",
  });

export interface GoogleFirebaseAppdistroV1Release {
  /** The name of the release resource. Format: `projects/{project_number}/apps/{app}/releases/{release}` */
  name?: string;
  /** Notes of the release. */
  releaseNotes?: GoogleFirebaseAppdistroV1ReleaseNotes;
  /** Output only. The time the release was last updated. */
  updateTime?: string;
  /** Output only. Build version of the release. For an Android release, the build version is the `versionCode`. For an iOS release, the build version is the `CFBundleVersion`. */
  buildVersion?: string;
  /** Output only. The time the release was created. */
  createTime?: string;
  /** Output only. A link to the Firebase console displaying a single release. */
  firebaseConsoleUri?: string;
  /** Output only. A signed link (which expires in one hour) to directly download the app binary (IPA/APK/AAB) file. */
  binaryDownloadUri?: string;
  /** Output only. Display version of the release. For an Android release, the display version is the `versionName`. For an iOS release, the display version is the `CFBundleShortVersionString`. */
  displayVersion?: string;
  /** Output only. A link to the release in the tester web clip or Android app that lets testers (which were granted access to the app) view release notes and install the app onto their devices. */
  testingUri?: string;
  /** Output only. The time the release will expire. */
  expireTime?: string;
}

export const GoogleFirebaseAppdistroV1Release: Schema.Schema<GoogleFirebaseAppdistroV1Release> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    releaseNotes: Schema.optional(GoogleFirebaseAppdistroV1ReleaseNotes),
    updateTime: Schema.optional(Schema.String),
    buildVersion: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    firebaseConsoleUri: Schema.optional(Schema.String),
    binaryDownloadUri: Schema.optional(Schema.String),
    displayVersion: Schema.optional(Schema.String),
    testingUri: Schema.optional(Schema.String),
    expireTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirebaseAppdistroV1Release" });

export interface GoogleFirebaseAppdistroV1alphaCancelReleaseTestResponse {}

export const GoogleFirebaseAppdistroV1alphaCancelReleaseTestResponse: Schema.Schema<GoogleFirebaseAppdistroV1alphaCancelReleaseTestResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleFirebaseAppdistroV1alphaCancelReleaseTestResponse",
  });

export interface GoogleFirebaseAppdistroV1UploadReleaseResponse {
  /** Result of upload release. */
  result?:
    | "UPLOAD_RELEASE_RESULT_UNSPECIFIED"
    | "RELEASE_CREATED"
    | "RELEASE_UPDATED"
    | "RELEASE_UNMODIFIED"
    | (string & {});
  /** Release associated with the uploaded binary. */
  release?: GoogleFirebaseAppdistroV1Release;
}

export const GoogleFirebaseAppdistroV1UploadReleaseResponse: Schema.Schema<GoogleFirebaseAppdistroV1UploadReleaseResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.optional(Schema.String),
    release: Schema.optional(GoogleFirebaseAppdistroV1Release),
  }).annotate({ identifier: "GoogleFirebaseAppdistroV1UploadReleaseResponse" });

export interface GoogleFirebaseAppdistroV1alphaCreateReleaseNotesRequest {
  /** The actual release notes body from the user */
  releaseNotes?: GoogleFirebaseAppdistroV1alphaReleaseNotes;
}

export const GoogleFirebaseAppdistroV1alphaCreateReleaseNotesRequest: Schema.Schema<GoogleFirebaseAppdistroV1alphaCreateReleaseNotesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    releaseNotes: Schema.optional(GoogleFirebaseAppdistroV1alphaReleaseNotes),
  }).annotate({
    identifier: "GoogleFirebaseAppdistroV1alphaCreateReleaseNotesRequest",
  });

export interface GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse {
  /** The tests listed. */
  releaseTests?: ReadonlyArray<GoogleFirebaseAppdistroV1alphaReleaseTest>;
  /** A short-lived token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse: Schema.Schema<GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    releaseTests: Schema.optional(
      Schema.Array(GoogleFirebaseAppdistroV1alphaReleaseTest),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse",
  });

export interface GoogleFirebaseAppdistroV1alphaRelease {
  /** Release notes summary */
  releaseNotesSummary?: string;
  /** Release version */
  displayVersion?: string;
  /** Number of testers who have installed the release */
  testerWithInstallCount?: number;
  /** Release build version */
  buildVersion?: string;
  /** Release Id */
  id?: string;
  /** Last activity timestamp */
  lastActivityAt?: string;
  /** Timestamp when the release was created */
  distributedAt?: string;
  /** unused. */
  receivedAt?: string;
  /** Instance id of the release */
  instanceId?: string;
  /** Number of testers who have open invitations for the release */
  openInvitationCount?: number;
  /** Count of testers added to the release */
  testerCount?: number;
}

export const GoogleFirebaseAppdistroV1alphaRelease: Schema.Schema<GoogleFirebaseAppdistroV1alphaRelease> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    releaseNotesSummary: Schema.optional(Schema.String),
    displayVersion: Schema.optional(Schema.String),
    testerWithInstallCount: Schema.optional(Schema.Number),
    buildVersion: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    lastActivityAt: Schema.optional(Schema.String),
    distributedAt: Schema.optional(Schema.String),
    receivedAt: Schema.optional(Schema.String),
    instanceId: Schema.optional(Schema.String),
    openInvitationCount: Schema.optional(Schema.Number),
    testerCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleFirebaseAppdistroV1alphaRelease" });

export interface GoogleFirebaseAppdistroV1alphaGetUploadStatusResponse {
  /** Any additional context for the given upload status (e.g. error message) Meant to be displayed to the client */
  message?: string;
  /** The release that was created from the upload (only set on "SUCCESS") */
  release?: GoogleFirebaseAppdistroV1alphaRelease;
  /** The status of the upload */
  status?:
    | "STATUS_UNSPECIFIED"
    | "IN_PROGRESS"
    | "ALREADY_UPLOADED"
    | "SUCCESS"
    | "ERROR"
    | (string & {});
  /** The error code associated with (only set on "FAILURE") */
  errorCode?:
    | "ERROR_UNSPECIFIED"
    | "INVALID_ZIP"
    | "MISSING_PLIST"
    | "MISSING_PROFILE"
    | "VERSION_TOO_LONG"
    | "MISSING_UUIDS"
    | "MISSING_RESOURCES"
    | "MISSING_MANIFEST"
    | "IOS_METADATA_ERROR"
    | "ANDROID_METADATA_ERROR"
    | "UNSUPPORTED_PLATFORM_TYPE"
    | "BUNDLE_ID_MISMATCH"
    | "APK_NOT_ZIP_ALIGNED"
    | "INVALID_CERTIFICATE"
    | "APK_TOO_LARGE"
    | "AAB_NOT_PUBLISHED"
    | "INVALID_PLIST_DEVICE_FAMILIES"
    | "AAB_TOS_NOT_ACCEPTED"
    | "APP_NAME_TOO_LONG"
    | "AAB_DEVELOPER_ACCOUNT_NOT_LINKED"
    | "AAB_NO_APP_WITH_GIVEN_PACKAGE_NAME_IN_ACCOUNT"
    | "AAB_UPLOAD_ERROR"
    | "APP_NOT_FOUND"
    | "AAB_ADHOC_SHARING_KEY_NOT_REGISTERED"
    | (string & {});
}

export const GoogleFirebaseAppdistroV1alphaGetUploadStatusResponse: Schema.Schema<GoogleFirebaseAppdistroV1alphaGetUploadStatusResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    release: Schema.optional(GoogleFirebaseAppdistroV1alphaRelease),
    status: Schema.optional(Schema.String),
    errorCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleFirebaseAppdistroV1alphaGetUploadStatusResponse",
  });

export interface GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseRequest {
  /** Optional. Ignored. Used to be build version of the app release if an instance identifier was provided for the release_id. */
  buildVersion?: string;
  /** Optional. An email address which should get access to this release, for example rebeccahe@google.com */
  emails?: ReadonlyArray<string>;
  /** Optional. Ignored. Used to be display version of the app release if an instance identifier was provided for the release_id. */
  displayVersion?: string;
  /** Optional. A repeated list of group aliases to enable access to a release for Note: This field is misnamed, but can't be changed because we need to maintain compatibility with old build tools */
  groupIds?: ReadonlyArray<string>;
}

export const GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseRequest: Schema.Schema<GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    buildVersion: Schema.optional(Schema.String),
    emails: Schema.optional(Schema.Array(Schema.String)),
    displayVersion: Schema.optional(Schema.String),
    groupIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseRequest",
  });

export interface GoogleFirebaseAppdistroV1alphaListTestCasesResponse {
  /** The test cases from the specified app. */
  testCases?: ReadonlyArray<GoogleFirebaseAppdistroV1alphaTestCase>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleFirebaseAppdistroV1alphaListTestCasesResponse: Schema.Schema<GoogleFirebaseAppdistroV1alphaListTestCasesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testCases: Schema.optional(
      Schema.Array(GoogleFirebaseAppdistroV1alphaTestCase),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleFirebaseAppdistroV1alphaListTestCasesResponse",
  });

export interface GoogleFirebaseAppdistroV1alphaClearTestCaseCacheResponse {}

export const GoogleFirebaseAppdistroV1alphaClearTestCaseCacheResponse: Schema.Schema<GoogleFirebaseAppdistroV1alphaClearTestCaseCacheResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleFirebaseAppdistroV1alphaClearTestCaseCacheResponse",
  });

export interface GoogleFirebaseAppdistroV1alphaBatchDeleteTestCasesRequest {
  /** Required. The name of the test cases to delete. A maximum number of 1000 test cases can be deleted in one batch Format: `projects/{project_number}/apps/{app}/testCases/{test_case}` */
  names?: ReadonlyArray<string>;
}

export const GoogleFirebaseAppdistroV1alphaBatchDeleteTestCasesRequest: Schema.Schema<GoogleFirebaseAppdistroV1alphaBatchDeleteTestCasesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleFirebaseAppdistroV1alphaBatchDeleteTestCasesRequest",
  });

export interface GoogleFirebaseAppdistroV1alphaGetReleaseByUploadHashResponse {
  /** Release object */
  release?: GoogleFirebaseAppdistroV1alphaRelease;
}

export const GoogleFirebaseAppdistroV1alphaGetReleaseByUploadHashResponse: Schema.Schema<GoogleFirebaseAppdistroV1alphaGetReleaseByUploadHashResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    release: Schema.optional(GoogleFirebaseAppdistroV1alphaRelease),
  }).annotate({
    identifier: "GoogleFirebaseAppdistroV1alphaGetReleaseByUploadHashResponse",
  });

export interface GoogleFirebaseAppdistroV1alphaApp {
  /** iOS or Android */
  platform?: string;
  /** App bundle test certificate generated for the app. */
  aabCertificate?: GoogleFirebaseAppdistroV1alphaAabCertificate;
  /** Firebase gmp app id */
  appId?: string;
  /** Project number of the Firebase project, for example 300830567303. */
  projectNumber?: string;
  /** Bundle identifier */
  bundleId?: string;
  /** Developer contact email for testers to reach out to about privacy or support issues. */
  contactEmail?: string;
  /** App bundle state. Only valid for android apps. The app_view field in the request must be set to FULL in order for this to be populated. */
  aabState?:
    | "AAB_STATE_UNSPECIFIED"
    | "ACTIVE"
    | "PLAY_ACCOUNT_NOT_LINKED"
    | "NO_APP_WITH_GIVEN_BUNDLE_ID_IN_PLAY_ACCOUNT"
    | "APP_NOT_PUBLISHED"
    | "AAB_STATE_UNAVAILABLE"
    | "PLAY_IAS_TERMS_NOT_ACCEPTED"
    | (string & {});
}

export const GoogleFirebaseAppdistroV1alphaApp: Schema.Schema<GoogleFirebaseAppdistroV1alphaApp> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    platform: Schema.optional(Schema.String),
    aabCertificate: Schema.optional(
      GoogleFirebaseAppdistroV1alphaAabCertificate,
    ),
    appId: Schema.optional(Schema.String),
    projectNumber: Schema.optional(Schema.String),
    bundleId: Schema.optional(Schema.String),
    contactEmail: Schema.optional(Schema.String),
    aabState: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirebaseAppdistroV1alphaApp" });

export interface GoogleFirebaseAppdistroV1alphaBatchUpdateTestCasesResponse {
  /** The updated test cases. */
  testCases?: ReadonlyArray<GoogleFirebaseAppdistroV1alphaTestCase>;
}

export const GoogleFirebaseAppdistroV1alphaBatchUpdateTestCasesResponse: Schema.Schema<GoogleFirebaseAppdistroV1alphaBatchUpdateTestCasesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testCases: Schema.optional(
      Schema.Array(GoogleFirebaseAppdistroV1alphaTestCase),
    ),
  }).annotate({
    identifier: "GoogleFirebaseAppdistroV1alphaBatchUpdateTestCasesResponse",
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

export interface GetJwtAppsRequest {
  /** Required. Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289 */
  mobilesdkAppId: string;
}

export const GetJwtAppsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mobilesdkAppId: Schema.String.pipe(T.HttpPath("mobilesdkAppId")),
}).pipe(
  T.Http({ method: "GET", path: "v1alpha/apps/{mobilesdkAppId}/jwt" }),
  svc,
) as unknown as Schema.Schema<GetJwtAppsRequest>;

export type GetJwtAppsResponse = GoogleFirebaseAppdistroV1alphaJwt;
export const GetJwtAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppdistroV1alphaJwt;

export type GetJwtAppsError = DefaultErrors | NotFound | Forbidden;

/** Get a JWT token */
export const getJwtApps: API.OperationMethod<
  GetJwtAppsRequest,
  GetJwtAppsResponse,
  GetJwtAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetJwtAppsRequest,
  output: GetJwtAppsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetAppsRequest {
  /** Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289 */
  mobilesdkAppId: string;
  /** App view. When unset or set to BASIC, returns an App with everything set except for aab_state. When set to FULL, returns an App with aab_state set. */
  appView?: "APP_VIEW_UNSPECIFIED" | "BASIC" | "FULL" | (string & {});
}

export const GetAppsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mobilesdkAppId: Schema.String.pipe(T.HttpPath("mobilesdkAppId")),
  appView: Schema.optional(Schema.String).pipe(T.HttpQuery("appView")),
}).pipe(
  T.Http({ method: "GET", path: "v1alpha/apps/{mobilesdkAppId}" }),
  svc,
) as unknown as Schema.Schema<GetAppsRequest>;

export type GetAppsResponse = GoogleFirebaseAppdistroV1alphaApp;
export const GetAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppdistroV1alphaApp;

export type GetAppsError = DefaultErrors | NotFound | Forbidden;

/** Get the app, if it exists */
export const getApps: API.OperationMethod<
  GetAppsRequest,
  GetAppsResponse,
  GetAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAppsRequest,
  output: GetAppsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetTesterUdidsAppsTestersRequest {
  /** The name of the project, which is the parent of testers Format: `projects/{project_number}` */
  project?: string;
  /** Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289 */
  mobilesdkAppId: string;
}

export const GetTesterUdidsAppsTestersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.optional(Schema.String).pipe(T.HttpQuery("project")),
    mobilesdkAppId: Schema.String.pipe(T.HttpPath("mobilesdkAppId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1alpha/apps/{mobilesdkAppId}/testers:getTesterUdids",
    }),
    svc,
  ) as unknown as Schema.Schema<GetTesterUdidsAppsTestersRequest>;

export type GetTesterUdidsAppsTestersResponse =
  GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse;
export const GetTesterUdidsAppsTestersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse;

export type GetTesterUdidsAppsTestersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get UDIDs of tester iOS devices in a project */
export const getTesterUdidsAppsTesters: API.OperationMethod<
  GetTesterUdidsAppsTestersRequest,
  GetTesterUdidsAppsTestersResponse,
  GetTesterUdidsAppsTestersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetTesterUdidsAppsTestersRequest,
  output: GetTesterUdidsAppsTestersResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetAppsRelease_by_hashRequest {
  /** Required. The hash for the upload */
  uploadHash: string;
  /** Required. Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289 */
  mobilesdkAppId: string;
}

export const GetAppsRelease_by_hashRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uploadHash: Schema.String.pipe(T.HttpPath("uploadHash")),
    mobilesdkAppId: Schema.String.pipe(T.HttpPath("mobilesdkAppId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1alpha/apps/{mobilesdkAppId}/release_by_hash/{uploadHash}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetAppsRelease_by_hashRequest>;

export type GetAppsRelease_by_hashResponse =
  GoogleFirebaseAppdistroV1alphaGetReleaseByUploadHashResponse;
export const GetAppsRelease_by_hashResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppdistroV1alphaGetReleaseByUploadHashResponse;

export type GetAppsRelease_by_hashError = DefaultErrors | NotFound | Forbidden;

/** GET Release by binary upload hash */
export const getAppsRelease_by_hash: API.OperationMethod<
  GetAppsRelease_by_hashRequest,
  GetAppsRelease_by_hashResponse,
  GetAppsRelease_by_hashError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAppsRelease_by_hashRequest,
  output: GetAppsRelease_by_hashResponse,
  errors: [NotFound, Forbidden],
}));

export interface Enable_accessAppsReleasesRequest {
  /** Required. Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289 */
  mobilesdkAppId: string;
  /** Required. Release identifier */
  releaseId: string;
  /** Request body */
  body?: GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseRequest;
}

export const Enable_accessAppsReleasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mobilesdkAppId: Schema.String.pipe(T.HttpPath("mobilesdkAppId")),
    releaseId: Schema.String.pipe(T.HttpPath("releaseId")),
    body: Schema.optional(
      GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/apps/{mobilesdkAppId}/releases/{releaseId}/enable_access",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<Enable_accessAppsReleasesRequest>;

export type Enable_accessAppsReleasesResponse =
  GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseResponse;
export const Enable_accessAppsReleasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseResponse;

export type Enable_accessAppsReleasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Enable access on a release for testers. */
export const enable_accessAppsReleases: API.OperationMethod<
  Enable_accessAppsReleasesRequest,
  Enable_accessAppsReleasesResponse,
  Enable_accessAppsReleasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: Enable_accessAppsReleasesRequest,
  output: Enable_accessAppsReleasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateAppsReleasesNotesRequest {
  /** Required. Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289 */
  mobilesdkAppId: string;
  /** Required. Release identifier */
  releaseId: string;
  /** Request body */
  body?: GoogleFirebaseAppdistroV1alphaCreateReleaseNotesRequest;
}

export const CreateAppsReleasesNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mobilesdkAppId: Schema.String.pipe(T.HttpPath("mobilesdkAppId")),
    releaseId: Schema.String.pipe(T.HttpPath("releaseId")),
    body: Schema.optional(
      GoogleFirebaseAppdistroV1alphaCreateReleaseNotesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/apps/{mobilesdkAppId}/releases/{releaseId}/notes",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateAppsReleasesNotesRequest>;

export type CreateAppsReleasesNotesResponse =
  GoogleFirebaseAppdistroV1alphaCreateReleaseNotesResponse;
export const CreateAppsReleasesNotesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppdistroV1alphaCreateReleaseNotesResponse;

export type CreateAppsReleasesNotesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create release notes on a release. */
export const createAppsReleasesNotes: API.OperationMethod<
  CreateAppsReleasesNotesRequest,
  CreateAppsReleasesNotesResponse,
  CreateAppsReleasesNotesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAppsReleasesNotesRequest,
  output: CreateAppsReleasesNotesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetAppsUpload_statusRequest {
  /** Required. Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289 */
  mobilesdkAppId: string;
  /** Required. The token for the upload */
  uploadToken: string;
}

export const GetAppsUpload_statusRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mobilesdkAppId: Schema.String.pipe(T.HttpPath("mobilesdkAppId")),
    uploadToken: Schema.String.pipe(T.HttpPath("uploadToken")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1alpha/apps/{mobilesdkAppId}/upload_status/{uploadToken}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetAppsUpload_statusRequest>;

export type GetAppsUpload_statusResponse =
  GoogleFirebaseAppdistroV1alphaGetUploadStatusResponse;
export const GetAppsUpload_statusResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppdistroV1alphaGetUploadStatusResponse;

export type GetAppsUpload_statusError = DefaultErrors | NotFound | Forbidden;

/** GET Binary upload status by token */
export const getAppsUpload_status: API.OperationMethod<
  GetAppsUpload_statusRequest,
  GetAppsUpload_statusResponse,
  GetAppsUpload_statusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAppsUpload_statusRequest,
  output: GetAppsUpload_statusResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetTestQuotaProjectsRequest {
  /** Required. The name of the `TestQuota` resource to retrieve. Format: `projects/{project_number}/testQuota` */
  name: string;
}

export const GetTestQuotaProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetTestQuotaProjectsRequest>;

export type GetTestQuotaProjectsResponse =
  GoogleFirebaseAppdistroV1alphaTestQuota;
export const GetTestQuotaProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppdistroV1alphaTestQuota;

export type GetTestQuotaProjectsError = DefaultErrors | NotFound | Forbidden;

/** Get information about the quota for `ReleaseTests`. */
export const getTestQuotaProjects: API.OperationMethod<
  GetTestQuotaProjectsRequest,
  GetTestQuotaProjectsResponse,
  GetTestQuotaProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetTestQuotaProjectsRequest,
  output: GetTestQuotaProjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetUdidsProjectsTestersRequest {
  /** Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289 */
  mobilesdkAppId?: string;
  /** The name of the project, which is the parent of testers Format: `projects/{project_number}` */
  project: string;
}

export const GetUdidsProjectsTestersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mobilesdkAppId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("mobilesdkAppId"),
    ),
    project: Schema.String.pipe(T.HttpPath("project")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+project}/testers:udids" }),
    svc,
  ) as unknown as Schema.Schema<GetUdidsProjectsTestersRequest>;

export type GetUdidsProjectsTestersResponse =
  GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse;
export const GetUdidsProjectsTestersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse;

export type GetUdidsProjectsTestersError = DefaultErrors | NotFound | Forbidden;

/** Get UDIDs of tester iOS devices in a project */
export const getUdidsProjectsTesters: API.OperationMethod<
  GetUdidsProjectsTestersRequest,
  GetUdidsProjectsTestersResponse,
  GetUdidsProjectsTestersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetUdidsProjectsTestersRequest,
  output: GetUdidsProjectsTestersResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetTestConfigProjectsAppsRequest {
  /** Required. The name of the `TestConfig` resource to retrieve. Format: `projects/{project_number}/apps/{app}/testConfig` */
  name: string;
}

export const GetTestConfigProjectsAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetTestConfigProjectsAppsRequest>;

export type GetTestConfigProjectsAppsResponse =
  GoogleFirebaseAppdistroV1alphaTestConfig;
export const GetTestConfigProjectsAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppdistroV1alphaTestConfig;

export type GetTestConfigProjectsAppsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets configuration for automated tests. */
export const getTestConfigProjectsApps: API.OperationMethod<
  GetTestConfigProjectsAppsRequest,
  GetTestConfigProjectsAppsResponse,
  GetTestConfigProjectsAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetTestConfigProjectsAppsRequest,
  output: GetTestConfigProjectsAppsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateTestConfigProjectsAppsRequest {
  /** Identifier. The name of the test configuration resource. Format: `projects/{project_number}/apps/{app}/testConfig` */
  name: string;
  /** Optional. The list of fields to update. */
  updateMask?: string;
  /** Request body */
  body?: GoogleFirebaseAppdistroV1alphaTestConfig;
}

export const UpdateTestConfigProjectsAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleFirebaseAppdistroV1alphaTestConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateTestConfigProjectsAppsRequest>;

export type UpdateTestConfigProjectsAppsResponse =
  GoogleFirebaseAppdistroV1alphaTestConfig;
export const UpdateTestConfigProjectsAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppdistroV1alphaTestConfig;

export type UpdateTestConfigProjectsAppsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates automated test configuration. */
export const updateTestConfigProjectsApps: API.OperationMethod<
  UpdateTestConfigProjectsAppsRequest,
  UpdateTestConfigProjectsAppsResponse,
  UpdateTestConfigProjectsAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateTestConfigProjectsAppsRequest,
  output: UpdateTestConfigProjectsAppsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CancelProjectsAppsReleasesTestsRequest {
  /** Required. The name of the release test resource. Format: `projects/{project_number}/apps/{app}/releases/{release}/tests/{test}` */
  name: string;
}

export const CancelProjectsAppsReleasesTestsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}:cancel" }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsAppsReleasesTestsRequest>;

export type CancelProjectsAppsReleasesTestsResponse =
  GoogleFirebaseAppdistroV1alphaCancelReleaseTestResponse;
export const CancelProjectsAppsReleasesTestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppdistroV1alphaCancelReleaseTestResponse;

export type CancelProjectsAppsReleasesTestsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Abort automated test run on release. */
export const cancelProjectsAppsReleasesTests: API.OperationMethod<
  CancelProjectsAppsReleasesTestsRequest,
  CancelProjectsAppsReleasesTestsResponse,
  CancelProjectsAppsReleasesTestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsAppsReleasesTestsRequest,
  output: CancelProjectsAppsReleasesTestsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsAppsReleasesTestsRequest {
  /** Optional. The requested view on the returned ReleaseTests. Defaults to the basic view. */
  view?:
    | "RELEASE_TEST_VIEW_UNSPECIFIED"
    | "RELEASE_TEST_VIEW_BASIC"
    | "RELEASE_TEST_VIEW_FULL"
    | (string & {});
  /** Optional. The maximum number of tests to return. The service may return fewer than this value. */
  pageSize?: number;
  /** Required. The name of the release resource, which is the parent of the tests Format: `projects/{project_number}/apps/{app}/releases/{release}` */
  parent: string;
  /** Optional. A page token, received from a previous `ListReleaseTests` call. Provide this to retrieve the subsequent page. */
  pageToken?: string;
}

export const ListProjectsAppsReleasesTestsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/tests" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAppsReleasesTestsRequest>;

export type ListProjectsAppsReleasesTestsResponse =
  GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse;
export const ListProjectsAppsReleasesTestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse;

export type ListProjectsAppsReleasesTestsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List results for automated tests run on release. */
export const listProjectsAppsReleasesTests: API.PaginatedOperationMethod<
  ListProjectsAppsReleasesTestsRequest,
  ListProjectsAppsReleasesTestsResponse,
  ListProjectsAppsReleasesTestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAppsReleasesTestsRequest,
  output: ListProjectsAppsReleasesTestsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsAppsReleasesTestsRequest {
  /** Optional. The ID to use for the test, which will become the final component of the test's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. If it is not provided one will be automatically generated. */
  releaseTestId?: string;
  /** Required. The name of the release resource, which is the parent of the test Format: `projects/{project_number}/apps/{app}/releases/{release}` */
  parent: string;
  /** Request body */
  body?: GoogleFirebaseAppdistroV1alphaReleaseTest;
}

export const CreateProjectsAppsReleasesTestsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    releaseTestId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("releaseTestId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleFirebaseAppdistroV1alphaReleaseTest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha/{+parent}/tests", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAppsReleasesTestsRequest>;

export type CreateProjectsAppsReleasesTestsResponse =
  GoogleFirebaseAppdistroV1alphaReleaseTest;
export const CreateProjectsAppsReleasesTestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppdistroV1alphaReleaseTest;

export type CreateProjectsAppsReleasesTestsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Run automated test(s) on release. */
export const createProjectsAppsReleasesTests: API.OperationMethod<
  CreateProjectsAppsReleasesTestsRequest,
  CreateProjectsAppsReleasesTestsResponse,
  CreateProjectsAppsReleasesTestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsAppsReleasesTestsRequest,
  output: CreateProjectsAppsReleasesTestsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsAppsReleasesTestsRequest {
  /** Required. The name of the release test resource. Format: `projects/{project_number}/apps/{app}/releases/{release}/tests/{test}` */
  name: string;
}

export const GetProjectsAppsReleasesTestsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAppsReleasesTestsRequest>;

export type GetProjectsAppsReleasesTestsResponse =
  GoogleFirebaseAppdistroV1alphaReleaseTest;
export const GetProjectsAppsReleasesTestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppdistroV1alphaReleaseTest;

export type GetProjectsAppsReleasesTestsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get results for automated test run on release. */
export const getProjectsAppsReleasesTests: API.OperationMethod<
  GetProjectsAppsReleasesTestsRequest,
  GetProjectsAppsReleasesTestsResponse,
  GetProjectsAppsReleasesTestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAppsReleasesTestsRequest,
  output: GetProjectsAppsReleasesTestsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsAppsTestCasesRequest {
  /** Required. The parent resource from which to list test cases. Format: `projects/{project_number}/apps/{app}` */
  parent: string;
  /** Optional. A page token, received from a previous `ListTestCases` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTestCases` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The maximum number of test cases to return. The service may return fewer than this value. If unspecified, at most 50 test cases will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsAppsTestCasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/testCases" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAppsTestCasesRequest>;

export type ListProjectsAppsTestCasesResponse =
  GoogleFirebaseAppdistroV1alphaListTestCasesResponse;
export const ListProjectsAppsTestCasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppdistroV1alphaListTestCasesResponse;

export type ListProjectsAppsTestCasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List test cases. */
export const listProjectsAppsTestCases: API.PaginatedOperationMethod<
  ListProjectsAppsTestCasesRequest,
  ListProjectsAppsTestCasesResponse,
  ListProjectsAppsTestCasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAppsTestCasesRequest,
  output: ListProjectsAppsTestCasesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ClearTestCaseCacheProjectsAppsTestCasesRequest {
  /** Required. The name of the test case resource for which to clear the cache. Format: `projects/{project_number}/apps/{app}/testCases/{test_case}` */
  testCase: string;
  /** Request body */
  body?: GoogleFirebaseAppdistroV1alphaClearTestCaseCacheRequest;
}

export const ClearTestCaseCacheProjectsAppsTestCasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testCase: Schema.String.pipe(T.HttpPath("testCase")),
    body: Schema.optional(
      GoogleFirebaseAppdistroV1alphaClearTestCaseCacheRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+testCase}:clearTestCaseCache",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ClearTestCaseCacheProjectsAppsTestCasesRequest>;

export type ClearTestCaseCacheProjectsAppsTestCasesResponse =
  GoogleFirebaseAppdistroV1alphaClearTestCaseCacheResponse;
export const ClearTestCaseCacheProjectsAppsTestCasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppdistroV1alphaClearTestCaseCacheResponse;

export type ClearTestCaseCacheProjectsAppsTestCasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Clears cached test runs for a specific test case and device(s). */
export const clearTestCaseCacheProjectsAppsTestCases: API.OperationMethod<
  ClearTestCaseCacheProjectsAppsTestCasesRequest,
  ClearTestCaseCacheProjectsAppsTestCasesResponse,
  ClearTestCaseCacheProjectsAppsTestCasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ClearTestCaseCacheProjectsAppsTestCasesRequest,
  output: ClearTestCaseCacheProjectsAppsTestCasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsAppsTestCasesRequest {
  /** Required. The parent resource where this test case will be created. Format: `projects/{project_number}/apps/{app}` */
  parent: string;
  /** Optional. The ID to use for the test case, which will become the final component of the test case's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. */
  testCaseId?: string;
  /** Request body */
  body?: GoogleFirebaseAppdistroV1alphaTestCase;
}

export const CreateProjectsAppsTestCasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    testCaseId: Schema.optional(Schema.String).pipe(T.HttpQuery("testCaseId")),
    body: Schema.optional(GoogleFirebaseAppdistroV1alphaTestCase).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/testCases",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAppsTestCasesRequest>;

export type CreateProjectsAppsTestCasesResponse =
  GoogleFirebaseAppdistroV1alphaTestCase;
export const CreateProjectsAppsTestCasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppdistroV1alphaTestCase;

export type CreateProjectsAppsTestCasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new test case. */
export const createProjectsAppsTestCases: API.OperationMethod<
  CreateProjectsAppsTestCasesRequest,
  CreateProjectsAppsTestCasesResponse,
  CreateProjectsAppsTestCasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsAppsTestCasesRequest,
  output: CreateProjectsAppsTestCasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsAppsTestCasesRequest {
  /** Required. The name of the test case resource to retrieve. Format: `projects/{project_number}/apps/{app}/testCases/{test_case}` */
  name: string;
}

export const GetProjectsAppsTestCasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAppsTestCasesRequest>;

export type GetProjectsAppsTestCasesResponse =
  GoogleFirebaseAppdistroV1alphaTestCase;
export const GetProjectsAppsTestCasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppdistroV1alphaTestCase;

export type GetProjectsAppsTestCasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a test case. */
export const getProjectsAppsTestCases: API.OperationMethod<
  GetProjectsAppsTestCasesRequest,
  GetProjectsAppsTestCasesResponse,
  GetProjectsAppsTestCasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAppsTestCasesRequest,
  output: GetProjectsAppsTestCasesResponse,
  errors: [NotFound, Forbidden],
}));

export interface BatchDeleteProjectsAppsTestCasesRequest {
  /** Required. The parent resource of the test cases being deleted. Format: `projects/{project_number}/apps/{app}` */
  parent: string;
  /** Request body */
  body?: GoogleFirebaseAppdistroV1alphaBatchDeleteTestCasesRequest;
}

export const BatchDeleteProjectsAppsTestCasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleFirebaseAppdistroV1alphaBatchDeleteTestCasesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/testCases:batchDelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchDeleteProjectsAppsTestCasesRequest>;

export type BatchDeleteProjectsAppsTestCasesResponse = GoogleProtobufEmpty;
export const BatchDeleteProjectsAppsTestCasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type BatchDeleteProjectsAppsTestCasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes multiple test cases. */
export const batchDeleteProjectsAppsTestCases: API.OperationMethod<
  BatchDeleteProjectsAppsTestCasesRequest,
  BatchDeleteProjectsAppsTestCasesResponse,
  BatchDeleteProjectsAppsTestCasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchDeleteProjectsAppsTestCasesRequest,
  output: BatchDeleteProjectsAppsTestCasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsAppsTestCasesRequest {
  /** Required. The name of the test case resource to delete. Format: `projects/{project_number}/apps/{app}/testCases/{test_case}` */
  name: string;
}

export const DeleteProjectsAppsTestCasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsAppsTestCasesRequest>;

export type DeleteProjectsAppsTestCasesResponse = GoogleProtobufEmpty;
export const DeleteProjectsAppsTestCasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsAppsTestCasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a test case. */
export const deleteProjectsAppsTestCases: API.OperationMethod<
  DeleteProjectsAppsTestCasesRequest,
  DeleteProjectsAppsTestCasesResponse,
  DeleteProjectsAppsTestCasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsAppsTestCasesRequest,
  output: DeleteProjectsAppsTestCasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsAppsTestCasesRequest {
  /** Optional. If set to true, and the test case is not found, a new test case will be created. */
  allowMissing?: boolean;
  /** Identifier. The name of the test case resource. Format: `projects/{project_number}/apps/{app}/testCases/{test_case}` */
  name: string;
  /** Request body */
  body?: GoogleFirebaseAppdistroV1alphaTestCase;
}

export const PatchProjectsAppsTestCasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleFirebaseAppdistroV1alphaTestCase).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAppsTestCasesRequest>;

export type PatchProjectsAppsTestCasesResponse =
  GoogleFirebaseAppdistroV1alphaTestCase;
export const PatchProjectsAppsTestCasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppdistroV1alphaTestCase;

export type PatchProjectsAppsTestCasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a test case. */
export const patchProjectsAppsTestCases: API.OperationMethod<
  PatchProjectsAppsTestCasesRequest,
  PatchProjectsAppsTestCasesResponse,
  PatchProjectsAppsTestCasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsAppsTestCasesRequest,
  output: PatchProjectsAppsTestCasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchUpdateProjectsAppsTestCasesRequest {
  /** Required. The parent resource of the test cases being updated. Format: `projects/{project_number}/apps/{app}` */
  parent: string;
  /** Request body */
  body?: GoogleFirebaseAppdistroV1alphaBatchUpdateTestCasesRequest;
}

export const BatchUpdateProjectsAppsTestCasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleFirebaseAppdistroV1alphaBatchUpdateTestCasesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/testCases:batchUpdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchUpdateProjectsAppsTestCasesRequest>;

export type BatchUpdateProjectsAppsTestCasesResponse =
  GoogleFirebaseAppdistroV1alphaBatchUpdateTestCasesResponse;
export const BatchUpdateProjectsAppsTestCasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppdistroV1alphaBatchUpdateTestCasesResponse;

export type BatchUpdateProjectsAppsTestCasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates multiple test cases. */
export const batchUpdateProjectsAppsTestCases: API.OperationMethod<
  BatchUpdateProjectsAppsTestCasesRequest,
  BatchUpdateProjectsAppsTestCasesResponse,
  BatchUpdateProjectsAppsTestCasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchUpdateProjectsAppsTestCasesRequest,
  output: BatchUpdateProjectsAppsTestCasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
