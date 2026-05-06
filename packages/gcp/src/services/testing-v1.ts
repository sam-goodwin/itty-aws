// ==========================================================================
// Cloud Testing API (testing v1)
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
  name: "testing",
  version: "v1",
  rootUrl: "https://testing.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface SessionStateEvent {
  /** Output only. The session_state tracked by this event */
  sessionState?:
    | "SESSION_STATE_UNSPECIFIED"
    | "REQUESTED"
    | "PENDING"
    | "ACTIVE"
    | "EXPIRED"
    | "FINISHED"
    | "UNAVAILABLE"
    | "ERROR"
    | (string & {});
  /** Output only. The time that the session_state first encountered that state. */
  eventTime?: string;
  /** Output only. A human-readable message to explain the state. */
  stateMessage?: string;
}

export const SessionStateEvent = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sessionState: Schema.optional(Schema.String),
  eventTime: Schema.optional(Schema.String),
  stateMessage: Schema.optional(Schema.String),
}).annotate({ identifier: "SessionStateEvent" });

export interface AndroidDevice {
  /** Required. The id of the Android device to be used. Use the TestEnvironmentDiscoveryService to get supported options. */
  androidModelId?: string;
  /** Required. The locale the test device used for testing. Use the TestEnvironmentDiscoveryService to get supported options. */
  locale?: string;
  /** Required. How the device is oriented during the test. Use the TestEnvironmentDiscoveryService to get supported options. */
  orientation?: string;
  /** Required. The id of the Android OS version to be used. Use the TestEnvironmentDiscoveryService to get supported options. */
  androidVersionId?: string;
}

export const AndroidDevice = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  androidModelId: Schema.optional(Schema.String),
  locale: Schema.optional(Schema.String),
  orientation: Schema.optional(Schema.String),
  androidVersionId: Schema.optional(Schema.String),
}).annotate({ identifier: "AndroidDevice" });

export interface DeviceSession {
  /** Output only. The historical state transitions of the session_state message including the current session state. */
  stateHistories?: ReadonlyArray<SessionStateEvent>;
  /** Output only. The interval of time that this device must be interacted with before it transitions from ACTIVE to TIMEOUT_INACTIVITY. */
  inactivityTimeout?: string;
  /** Required. The requested device */
  androidDevice?: AndroidDevice;
  /** Output only. The time that the Session was created. */
  createTime?: string;
  /** Optional. If the device is still in use at this time, any connections will be ended and the SessionState will transition from ACTIVE to FINISHED. */
  expireTime?: string;
  /** Optional. The amount of time that a device will be initially allocated for. This can eventually be extended with the UpdateDeviceSession RPC. Default: 15 minutes. */
  ttl?: string;
  /** Output only. Current state of the DeviceSession. */
  state?:
    | "SESSION_STATE_UNSPECIFIED"
    | "REQUESTED"
    | "PENDING"
    | "ACTIVE"
    | "EXPIRED"
    | "FINISHED"
    | "UNAVAILABLE"
    | "ERROR"
    | (string & {});
  /** Output only. The title of the DeviceSession to be presented in the UI. */
  displayName?: string;
  /** Output only. The timestamp that the session first became ACTIVE. */
  activeStartTime?: string;
  /** Optional. Name of the DeviceSession, e.g. "projects/{project_id}/deviceSessions/{session_id}" */
  name?: string;
}

export const DeviceSession = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  stateHistories: Schema.optional(Schema.Array(SessionStateEvent)),
  inactivityTimeout: Schema.optional(Schema.String),
  androidDevice: Schema.optional(AndroidDevice),
  createTime: Schema.optional(Schema.String),
  expireTime: Schema.optional(Schema.String),
  ttl: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  activeStartTime: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "DeviceSession" });

export interface EnvironmentVariable {
  /** Key for the environment variable. */
  key?: string;
  /** Value for the environment variable. */
  value?: string;
}

export const EnvironmentVariable = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  key: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
}).annotate({ identifier: "EnvironmentVariable" });

export interface LabInfo {
  /** Lab name where the device is hosted. If empty, the device is hosted in a Google owned lab. */
  name?: string;
  /** The Unicode country/region code (CLDR) of the lab where the device is hosted. E.g. "US" for United States, "CH" for Switzerland. */
  regionCode?: string;
}

export const LabInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  regionCode: Schema.optional(Schema.String),
}).annotate({ identifier: "LabInfo" });

export interface DirectAccessVersionInfo {
  /** Whether direct access is supported at all. Clients are expected to filter down the device list to only android models and versions which support Direct Access when that is the user intent. */
  directAccessSupported?: boolean;
  /** Output only. Indicates client-device compatibility, where a device is known to work only with certain workarounds implemented in the Android Studio client. Expected format "major.minor.micro.patch", e.g. "5921.22.2211.8881706". */
  minimumAndroidStudioVersion?: string;
}

export const DirectAccessVersionInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    directAccessSupported: Schema.optional(Schema.Boolean),
    minimumAndroidStudioVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "DirectAccessVersionInfo" });

export interface PerAndroidVersionInfo {
  /** The number of online devices for an Android version. */
  deviceCapacity?:
    | "DEVICE_CAPACITY_UNSPECIFIED"
    | "DEVICE_CAPACITY_HIGH"
    | "DEVICE_CAPACITY_MEDIUM"
    | "DEVICE_CAPACITY_LOW"
    | "DEVICE_CAPACITY_NONE"
    | (string & {});
  /** An Android version. */
  versionId?: string;
  /** Output only. Identifies supported clients for DirectAccess for this Android version. */
  directAccessVersionInfo?: DirectAccessVersionInfo;
  /** Output only. The estimated wait time for a single interactive device session using Direct Access. */
  interactiveDeviceAvailabilityEstimate?: string;
}

export const PerAndroidVersionInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  deviceCapacity: Schema.optional(Schema.String),
  versionId: Schema.optional(Schema.String),
  directAccessVersionInfo: Schema.optional(DirectAccessVersionInfo),
  interactiveDeviceAvailabilityEstimate: Schema.optional(Schema.String),
}).annotate({ identifier: "PerAndroidVersionInfo" });

export interface AndroidModel {
  /** Output only. Lab info of this device. */
  labInfo?: LabInfo;
  /** The name of the industrial design. This corresponds to android.os.Build.DEVICE. */
  codename?: string;
  /** The human-readable marketing name for this device model. Examples: "Nexus 5", "Galaxy S5". */
  name?: string;
  /** The company that this device is branded with. Example: "Google", "Samsung". */
  brand?: string;
  /** The unique opaque id for this model. Use this for invoking the TestExecutionService. */
  id?: string;
  /** Screen density in DPI. This corresponds to ro.sf.lcd_density */
  screenDensity?: number;
  /** Tags for this dimension. Examples: "default", "preview", "deprecated". */
  tags?: ReadonlyArray<string>;
  /** The manufacturer of this device. */
  manufacturer?: string;
  /** Whether this device is a phone, tablet, wearable, etc. */
  formFactor?:
    | "DEVICE_FORM_FACTOR_UNSPECIFIED"
    | "PHONE"
    | "TABLET"
    | "WEARABLE"
    | "TV"
    | "AUTOMOTIVE"
    | "DESKTOP"
    | "XR"
    | (string & {});
  /** True if and only if tests with this model are recorded by stitching together screenshots. See use_low_spec_video_recording in device config. */
  lowFpsVideoRecording?: boolean;
  /** URL of a thumbnail image (photo) of the device. */
  thumbnailUrl?: string;
  /** Whether this device is virtual or physical. */
  form?:
    | "DEVICE_FORM_UNSPECIFIED"
    | "VIRTUAL"
    | "PHYSICAL"
    | "EMULATOR"
    | (string & {});
  /** The list of supported ABIs for this device. This corresponds to either android.os.Build.SUPPORTED_ABIS (for API level 21 and above) or android.os.Build.CPU_ABI/CPU_ABI2. The most preferred ABI is the first element in the list. Elements are optionally prefixed by "version_id:" (where version_id is the id of an AndroidVersion), denoting an ABI that is supported only on a particular version. */
  supportedAbis?: ReadonlyArray<string>;
  /** Version-specific information of an Android model. */
  perVersionInfo?: ReadonlyArray<PerAndroidVersionInfo>;
  /** The set of Android versions this device supports. */
  supportedVersionIds?: ReadonlyArray<string>;
  /** Reasons for access denial. This model is accessible if this list is empty, otherwise the model is viewable only. */
  accessDeniedReasons?: ReadonlyArray<
    "ACCESS_DENIED_REASON_UNSPECIFIED" | "EULA_NOT_ACCEPTED" | (string & {})
  >;
  /** Screen size in the horizontal (X) dimension measured in pixels. */
  screenX?: number;
  /** Screen size in the vertical (Y) dimension measured in pixels. */
  screenY?: number;
}

export const AndroidModel = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  labInfo: Schema.optional(LabInfo),
  codename: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  brand: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  screenDensity: Schema.optional(Schema.Number),
  tags: Schema.optional(Schema.Array(Schema.String)),
  manufacturer: Schema.optional(Schema.String),
  formFactor: Schema.optional(Schema.String),
  lowFpsVideoRecording: Schema.optional(Schema.Boolean),
  thumbnailUrl: Schema.optional(Schema.String),
  form: Schema.optional(Schema.String),
  supportedAbis: Schema.optional(Schema.Array(Schema.String)),
  perVersionInfo: Schema.optional(Schema.Array(PerAndroidVersionInfo)),
  supportedVersionIds: Schema.optional(Schema.Array(Schema.String)),
  accessDeniedReasons: Schema.optional(Schema.Array(Schema.String)),
  screenX: Schema.optional(Schema.Number),
  screenY: Schema.optional(Schema.Number),
}).annotate({ identifier: "AndroidModel" });

export interface Locale {
  /** A human-friendly name for this language/locale. Example: "English". */
  name?: string;
  /** Tags for this dimension. Example: "default". */
  tags?: ReadonlyArray<string>;
  /** The id for this locale. Example: "en_US". */
  id?: string;
  /** A human-friendly string representing the region for this locale. Example: "United States". Not present for every locale. */
  region?: string;
}

export const Locale = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Array(Schema.String)),
  id: Schema.optional(Schema.String),
  region: Schema.optional(Schema.String),
}).annotate({ identifier: "Locale" });

export interface Orientation {
  /** A human-friendly name for this orientation. Example: "portrait". */
  name?: string;
  /** Tags for this dimension. Example: "default". */
  tags?: ReadonlyArray<string>;
  /** The id for this orientation. Example: "portrait". */
  id?: string;
}

export const Orientation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Array(Schema.String)),
  id: Schema.optional(Schema.String),
}).annotate({ identifier: "Orientation" });

export interface AndroidRuntimeConfiguration {
  /** The set of available locales. */
  locales?: ReadonlyArray<Locale>;
  /** The set of available orientations. */
  orientations?: ReadonlyArray<Orientation>;
}

export const AndroidRuntimeConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locales: Schema.optional(Schema.Array(Locale)),
    orientations: Schema.optional(Schema.Array(Orientation)),
  }).annotate({ identifier: "AndroidRuntimeConfiguration" });

export interface Testing_Date {
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  month?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  day?: number;
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  year?: number;
}

export const Testing_Date = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  month: Schema.optional(Schema.Number),
  day: Schema.optional(Schema.Number),
  year: Schema.optional(Schema.Number),
}).annotate({ identifier: "Testing_Date" });

export interface Distribution {
  /** Output only. The estimated fraction (0-1) of the total market with this configuration. */
  marketShare?: number;
  /** Output only. The time this distribution was measured. */
  measurementTime?: string;
}

export const Distribution = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  marketShare: Schema.optional(Schema.Number),
  measurementTime: Schema.optional(Schema.String),
}).annotate({ identifier: "Distribution" });

export interface AndroidVersion {
  /** A string representing this version of the Android OS. Examples: "4.3", "4.4". */
  versionString?: string;
  /** The API level for this Android version. Examples: 18, 19. */
  apiLevel?: number;
  /** The date this Android version became available in the market. */
  releaseDate?: Testing_Date;
  /** The code name for this Android version. Examples: "JellyBean", "KitKat". */
  codeName?: string;
  /** Tags for this dimension. Examples: "default", "preview", "deprecated". */
  tags?: ReadonlyArray<string>;
  /** An opaque id for this Android version. Use this id to invoke the TestExecutionService. */
  id?: string;
  /** Market share for this version. */
  distribution?: Distribution;
}

export const AndroidVersion = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  versionString: Schema.optional(Schema.String),
  apiLevel: Schema.optional(Schema.Number),
  releaseDate: Schema.optional(Testing_Date),
  codeName: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Array(Schema.String)),
  id: Schema.optional(Schema.String),
  distribution: Schema.optional(Distribution),
}).annotate({ identifier: "AndroidVersion" });

export interface AndroidDeviceCatalog {
  /** The set of supported Android device models. */
  models?: ReadonlyArray<AndroidModel>;
  /** The set of supported runtime configurations. */
  runtimeConfiguration?: AndroidRuntimeConfiguration;
  /** The set of supported Android OS versions. */
  versions?: ReadonlyArray<AndroidVersion>;
}

export const AndroidDeviceCatalog = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  models: Schema.optional(Schema.Array(AndroidModel)),
  runtimeConfiguration: Schema.optional(AndroidRuntimeConfiguration),
  versions: Schema.optional(Schema.Array(AndroidVersion)),
}).annotate({ identifier: "AndroidDeviceCatalog" });

export interface MatrixErrorDetail {
  /** Output only. The reason for the error. This is a constant value in UPPER_SNAKE_CASE that identifies the cause of the error. */
  reason?: string;
  /** Output only. A human-readable message about how the error in the TestMatrix. Expands on the `reason` field with additional details and possible options to fix the issue. */
  message?: string;
}

export const MatrixErrorDetail = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reason: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
}).annotate({ identifier: "MatrixErrorDetail" });

export interface CancelTestMatrixResponse {
  /** The current rolled-up state of the test matrix. If this state is already final, then the cancelation request will have no effect. */
  testState?:
    | "TEST_STATE_UNSPECIFIED"
    | "VALIDATING"
    | "PENDING"
    | "RUNNING"
    | "FINISHED"
    | "ERROR"
    | "UNSUPPORTED_ENVIRONMENT"
    | "INCOMPATIBLE_ENVIRONMENT"
    | "INCOMPATIBLE_ARCHITECTURE"
    | "CANCELLED"
    | "INVALID"
    | (string & {});
}

export const CancelTestMatrixResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testState: Schema.optional(Schema.String),
  }).annotate({ identifier: "CancelTestMatrixResponse" });

export interface IosVersion {
  /** The available Xcode versions for this version. */
  supportedXcodeVersionIds?: ReadonlyArray<string>;
  /** An integer representing the minor iOS version. Examples: "1", "2". */
  minorVersion?: number;
  /** Tags for this dimension. Examples: "default", "preview", "deprecated". */
  tags?: ReadonlyArray<string>;
  /** An integer representing the major iOS version. Examples: "8", "9". */
  majorVersion?: number;
  /** An opaque id for this iOS version. Use this id to invoke the TestExecutionService. */
  id?: string;
}

export const IosVersion = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  supportedXcodeVersionIds: Schema.optional(Schema.Array(Schema.String)),
  minorVersion: Schema.optional(Schema.Number),
  tags: Schema.optional(Schema.Array(Schema.String)),
  majorVersion: Schema.optional(Schema.Number),
  id: Schema.optional(Schema.String),
}).annotate({ identifier: "IosVersion" });

export interface FileReference {
  /** A path to a file in Google Cloud Storage. Example: gs://build-app-1414623860166/app%40debug-unaligned.apk These paths are expected to be url encoded (percent encoding) */
  gcsPath?: string;
}

export const FileReference = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  gcsPath: Schema.optional(Schema.String),
}).annotate({ identifier: "FileReference" });

export interface Apk {
  /** The path to an APK to be installed on the device before the test begins. */
  location?: FileReference;
  /** The java package for the APK to be installed. Value is determined by examining the application's manifest. */
  packageName?: string;
}

export const Apk = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  location: Schema.optional(FileReference),
  packageName: Schema.optional(Schema.String),
}).annotate({ identifier: "Apk" });

export interface GoogleCloudStorage {
  /** Required. The path to a directory in GCS that will eventually contain the results for this test. The requesting user must have write access on the bucket in the supplied path. */
  gcsPath?: string;
}

export const GoogleCloudStorage = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  gcsPath: Schema.optional(Schema.String),
}).annotate({ identifier: "GoogleCloudStorage" });

export interface ToolResultsExecution {
  /** Output only. A tool results execution ID. */
  executionId?: string;
  /** Output only. The cloud project that owns the tool results execution. */
  projectId?: string;
  /** Output only. A tool results history ID. */
  historyId?: string;
}

export const ToolResultsExecution = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  executionId: Schema.optional(Schema.String),
  projectId: Schema.optional(Schema.String),
  historyId: Schema.optional(Schema.String),
}).annotate({ identifier: "ToolResultsExecution" });

export interface ToolResultsHistory {
  /** Required. The cloud project that owns the tool results history. */
  projectId?: string;
  /** Required. A tool results history ID. */
  historyId?: string;
}

export const ToolResultsHistory = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  projectId: Schema.optional(Schema.String),
  historyId: Schema.optional(Schema.String),
}).annotate({ identifier: "ToolResultsHistory" });

export interface ResultStorage {
  /** Required. */
  googleCloudStorage?: GoogleCloudStorage;
  /** Output only. The tool results execution that results are written to. */
  toolResultsExecution?: ToolResultsExecution;
  /** Output only. URL to the results in the Firebase Web Console. */
  resultsUrl?: string;
  /** The tool results history that contains the tool results execution that results are written to. If not provided, the service will choose an appropriate value. */
  toolResultsHistory?: ToolResultsHistory;
}

export const ResultStorage = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  googleCloudStorage: Schema.optional(GoogleCloudStorage),
  toolResultsExecution: Schema.optional(ToolResultsExecution),
  resultsUrl: Schema.optional(Schema.String),
  toolResultsHistory: Schema.optional(ToolResultsHistory),
}).annotate({ identifier: "ResultStorage" });

export interface AndroidDeviceList {
  /** Required. A list of Android devices. */
  androidDevices?: ReadonlyArray<AndroidDevice>;
}

export const AndroidDeviceList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  androidDevices: Schema.optional(Schema.Array(AndroidDevice)),
}).annotate({ identifier: "AndroidDeviceList" });

export interface AndroidMatrix {
  /** Required. The ids of the set of Android OS version to be used. Use the TestEnvironmentDiscoveryService to get supported options. */
  androidVersionIds?: ReadonlyArray<string>;
  /** Required. The set of orientations to test with. Use the TestEnvironmentDiscoveryService to get supported options. */
  orientations?: ReadonlyArray<string>;
  /** Required. The ids of the set of Android device to be used. Use the TestEnvironmentDiscoveryService to get supported options. */
  androidModelIds?: ReadonlyArray<string>;
  /** Required. The set of locales the test device will enable for testing. Use the TestEnvironmentDiscoveryService to get supported options. */
  locales?: ReadonlyArray<string>;
}

export const AndroidMatrix = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  androidVersionIds: Schema.optional(Schema.Array(Schema.String)),
  orientations: Schema.optional(Schema.Array(Schema.String)),
  androidModelIds: Schema.optional(Schema.Array(Schema.String)),
  locales: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "AndroidMatrix" });

export interface IosDevice {
  /** Required. The id of the iOS device to be used. Use the TestEnvironmentDiscoveryService to get supported options. */
  iosModelId?: string;
  /** Required. The locale the test device used for testing. Use the TestEnvironmentDiscoveryService to get supported options. */
  locale?: string;
  /** Required. How the device is oriented during the test. Use the TestEnvironmentDiscoveryService to get supported options. */
  orientation?: string;
  /** Required. The id of the iOS major software version to be used. Use the TestEnvironmentDiscoveryService to get supported options. */
  iosVersionId?: string;
}

export const IosDevice = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  iosModelId: Schema.optional(Schema.String),
  locale: Schema.optional(Schema.String),
  orientation: Schema.optional(Schema.String),
  iosVersionId: Schema.optional(Schema.String),
}).annotate({ identifier: "IosDevice" });

export interface IosDeviceList {
  /** Required. A list of iOS devices. */
  iosDevices?: ReadonlyArray<IosDevice>;
}

export const IosDeviceList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  iosDevices: Schema.optional(Schema.Array(IosDevice)),
}).annotate({ identifier: "IosDeviceList" });

export interface EnvironmentMatrix {
  /** A list of Android devices; the test will be run only on the specified devices. */
  androidDeviceList?: AndroidDeviceList;
  /** A matrix of Android devices. */
  androidMatrix?: AndroidMatrix;
  /** A list of iOS devices. */
  iosDeviceList?: IosDeviceList;
}

export const EnvironmentMatrix = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  androidDeviceList: Schema.optional(AndroidDeviceList),
  androidMatrix: Schema.optional(AndroidMatrix),
  iosDeviceList: Schema.optional(IosDeviceList),
}).annotate({ identifier: "EnvironmentMatrix" });

export interface ClientInfoDetail {
  /** Required. The key of detailed client information. */
  key?: string;
  /** Required. The value of detailed client information. */
  value?: string;
}

export const ClientInfoDetail = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  key: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
}).annotate({ identifier: "ClientInfoDetail" });

export interface ClientInfo {
  /** Required. Client name, such as gcloud. */
  name?: string;
  /** The list of detailed information about client. */
  clientInfoDetails?: ReadonlyArray<ClientInfoDetail>;
}

export const ClientInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  clientInfoDetails: Schema.optional(Schema.Array(ClientInfoDetail)),
}).annotate({ identifier: "ClientInfo" });

export interface RoboDirective {
  /** The text that Robo is directed to set. If left empty, the directive will be treated as a CLICK on the element matching the resource_name. */
  inputText?: string;
  /** Required. The type of action that Robo should perform on the specified element. */
  actionType?:
    | "ACTION_TYPE_UNSPECIFIED"
    | "SINGLE_CLICK"
    | "ENTER_TEXT"
    | "IGNORE"
    | (string & {});
  /** Required. The android resource name of the target UI element. For example, in Java: R.string.foo in xml: @string/foo Only the "foo" part is needed. Reference doc: https://developer.android.com/guide/topics/resources/accessing-resources.html */
  resourceName?: string;
}

export const RoboDirective = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  inputText: Schema.optional(Schema.String),
  actionType: Schema.optional(Schema.String),
  resourceName: Schema.optional(Schema.String),
}).annotate({ identifier: "RoboDirective" });

export interface LauncherActivityIntent {}

export const LauncherActivityIntent = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "LauncherActivityIntent" });

export interface StartActivityIntent {
  /** URI for the action. */
  uri?: string;
  /** Action name. Required for START_ACTIVITY. */
  action?: string;
  /** Intent categories to set on the intent. */
  categories?: ReadonlyArray<string>;
}

export const StartActivityIntent = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uri: Schema.optional(Schema.String),
  action: Schema.optional(Schema.String),
  categories: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "StartActivityIntent" });

export interface NoActivityIntent {}

export const NoActivityIntent = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "NoActivityIntent" });

export interface RoboStartingIntent {
  /** An intent that starts the main launcher activity. */
  launcherActivity?: LauncherActivityIntent;
  /** An intent that starts an activity with specific details. */
  startActivity?: StartActivityIntent;
  /** Skips the starting activity */
  noActivity?: NoActivityIntent;
  /** Timeout in seconds for each intent. */
  timeout?: string;
}

export const RoboStartingIntent = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  launcherActivity: Schema.optional(LauncherActivityIntent),
  startActivity: Schema.optional(StartActivityIntent),
  noActivity: Schema.optional(NoActivityIntent),
  timeout: Schema.optional(Schema.String),
}).annotate({ identifier: "RoboStartingIntent" });

export interface ApkSplits {
  /** A list of .apk files generated by bundletool to install to the device under test as a single android app with adb install-multiple. If specified, requires one or more bundle_splits. The first split specified represents the base APK, while subsequent splits represent feature apks. */
  bundleSplits?: ReadonlyArray<FileReference>;
}

export const ApkSplits = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bundleSplits: Schema.optional(Schema.Array(FileReference)),
}).annotate({ identifier: "ApkSplits" });

export interface AppBundle {
  /** .aab file representing the app bundle under test. */
  bundleLocation?: FileReference;
  /** .apk files generated by bundletool to install as a single android app. */
  apks?: ApkSplits;
}

export const AppBundle = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bundleLocation: Schema.optional(FileReference),
  apks: Schema.optional(ApkSplits),
}).annotate({ identifier: "AppBundle" });

export interface AndroidRoboTest {
  /** A set of directives Robo should apply during the crawl. This allows users to customize the crawl. For example, the username and password for a test account can be provided. */
  roboDirectives?: ReadonlyArray<RoboDirective>;
  /** The mode in which Robo should run. Most clients should allow the server to populate this field automatically. */
  roboMode?:
    | "ROBO_MODE_UNSPECIFIED"
    | "ROBO_VERSION_1"
    | "ROBO_VERSION_2"
    | (string & {});
  /** The java package for the application under test. The default value is determined by examining the application's manifest. */
  appPackageId?: string;
  /** The intents used to launch the app for the crawl. If none are provided, then the main launcher activity is launched. If some are provided, then only those provided are launched (the main launcher activity must be provided explicitly). */
  startingIntents?: ReadonlyArray<RoboStartingIntent>;
  /** The initial activity that should be used to start the app. */
  appInitialActivity?: string;
  /** The max depth of the traversal stack Robo can explore. Needs to be at least 2 to make Robo explore the app beyond the first activity. Default is 50. */
  maxDepth?: number;
  /** The APK for the application under test. */
  appApk?: FileReference;
  /** A multi-apk app bundle for the application under test. */
  appBundle?: AppBundle;
  /** A JSON file with a sequence of actions Robo should perform as a prologue for the crawl. */
  roboScript?: FileReference;
  /** The max number of steps Robo can execute. Default is no limit. */
  maxSteps?: number;
}

export const AndroidRoboTest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  roboDirectives: Schema.optional(Schema.Array(RoboDirective)),
  roboMode: Schema.optional(Schema.String),
  appPackageId: Schema.optional(Schema.String),
  startingIntents: Schema.optional(Schema.Array(RoboStartingIntent)),
  appInitialActivity: Schema.optional(Schema.String),
  maxDepth: Schema.optional(Schema.Number),
  appApk: Schema.optional(FileReference),
  appBundle: Schema.optional(AppBundle),
  roboScript: Schema.optional(FileReference),
  maxSteps: Schema.optional(Schema.Number),
}).annotate({ identifier: "AndroidRoboTest" });

export interface IosDeviceFile {
  /** The bundle id of the app where this file lives. iOS apps sandbox their own filesystem, so app files must specify which app installed on the device. */
  bundleId?: string;
  /** The source file */
  content?: FileReference;
  /** Location of the file on the device, inside the app's sandboxed filesystem */
  devicePath?: string;
}

export const IosDeviceFile = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bundleId: Schema.optional(Schema.String),
  content: Schema.optional(FileReference),
  devicePath: Schema.optional(Schema.String),
}).annotate({ identifier: "IosDeviceFile" });

export interface IosTestSetup {
  /** List of directories on the device to upload to Cloud Storage at the end of the test. Directories should either be in a shared directory (such as /private/var/mobile/Media) or within an accessible directory inside the app's filesystem (such as /Documents) by specifying the bundle ID. */
  pullDirectories?: ReadonlyArray<IosDeviceFile>;
  /** iOS apps to install in addition to those being directly tested. */
  additionalIpas?: ReadonlyArray<FileReference>;
  /** The network traffic profile used for running the test. Available network profiles can be queried by using the NETWORK_CONFIGURATION environment type when calling TestEnvironmentDiscoveryService.GetTestEnvironmentCatalog. */
  networkProfile?: string;
  /** List of files to push to the device before starting the test. */
  pushFiles?: ReadonlyArray<IosDeviceFile>;
}

export const IosTestSetup = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pullDirectories: Schema.optional(Schema.Array(IosDeviceFile)),
  additionalIpas: Schema.optional(Schema.Array(FileReference)),
  networkProfile: Schema.optional(Schema.String),
  pushFiles: Schema.optional(Schema.Array(IosDeviceFile)),
}).annotate({ identifier: "IosTestSetup" });

export interface SystraceSetup {
  /** Systrace duration in seconds. Should be between 1 and 30 seconds. 0 disables systrace. */
  durationSeconds?: number;
}

export const SystraceSetup = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  durationSeconds: Schema.optional(Schema.Number),
}).annotate({ identifier: "SystraceSetup" });

export interface GoogleAuto {}

export const GoogleAuto = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "GoogleAuto" });

export interface Account {
  /** An automatic google login account. */
  googleAuto?: GoogleAuto;
}

export const Account = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  googleAuto: Schema.optional(GoogleAuto),
}).annotate({ identifier: "Account" });

export interface ObbFile {
  /** Required. OBB file name which must conform to the format as specified by Android e.g. [main|patch].0300110.com.example.android.obb which will be installed into \/Android/obb/\/ on the device. */
  obbFileName?: string;
  /** Required. Opaque Binary Blob (OBB) file(s) to install on the device. */
  obb?: FileReference;
}

export const ObbFile = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  obbFileName: Schema.optional(Schema.String),
  obb: Schema.optional(FileReference),
}).annotate({ identifier: "ObbFile" });

export interface RegularFile {
  /** Required. The source file. */
  content?: FileReference;
  /** Required. Where to put the content on the device. Must be an absolute, allowlisted path. If the file exists, it will be replaced. The following device-side directories and any of their subdirectories are allowlisted: ${EXTERNAL_STORAGE}, /sdcard ${ANDROID_DATA}/local/tmp, or /data/local/tmp Specifying a path outside of these directory trees is invalid. The paths /sdcard and /data will be made available and treated as implicit path substitutions. E.g. if /sdcard on a particular device does not map to external storage, the system will replace it with the external storage path prefix for that device and copy the file there. It is strongly advised to use the Environment API in app and test code to access files on the device in a portable way. */
  devicePath?: string;
}

export const RegularFile = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  content: Schema.optional(FileReference),
  devicePath: Schema.optional(Schema.String),
}).annotate({ identifier: "RegularFile" });

export interface DeviceFile {
  /** A reference to an opaque binary blob file. */
  obbFile?: ObbFile;
  /** A reference to a regular file. */
  regularFile?: RegularFile;
}

export const DeviceFile = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  obbFile: Schema.optional(ObbFile),
  regularFile: Schema.optional(RegularFile),
}).annotate({ identifier: "DeviceFile" });

export interface TestSetup {
  /** Optional. Initial setup APKs to install before the app under test is installed. Limited to a combined total of 100 initial setup and additional files. */
  initialSetupApks?: ReadonlyArray<Apk>;
  /** Whether to prevent all runtime permissions to be granted at app install */
  dontAutograntPermissions?: boolean;
  /** The network traffic profile used for running the test. Available network profiles can be queried by using the NETWORK_CONFIGURATION environment type when calling TestEnvironmentDiscoveryService.GetTestEnvironmentCatalog. */
  networkProfile?: string;
  /** Systrace configuration for the run. Deprecated: Systrace used Python 2 which was sunsetted on 2020-01-01. Systrace is no longer supported in the Cloud Testing API, and no Systrace file will be provided in the results. */
  systrace?: SystraceSetup;
  /** The device will be logged in on this account for the duration of the test. */
  account?: Account;
  /** List of files to push to the device before starting the test. */
  filesToPush?: ReadonlyArray<DeviceFile>;
  /** APKs to install in addition to those being directly tested. These will be installed after the app under test. Limited to a combined total of 100 initial setup and additional files. */
  additionalApks?: ReadonlyArray<Apk>;
  /** Environment variables to set for the test (only applicable for instrumentation tests). */
  environmentVariables?: ReadonlyArray<EnvironmentVariable>;
  /** List of directories on the device to upload to GCS at the end of the test; they must be absolute paths under /sdcard, /storage or /data/local/tmp. Path names are restricted to characters a-z A-Z 0-9 _ - . + and / Note: The paths /sdcard and /data will be made available and treated as implicit path substitutions. E.g. if /sdcard on a particular device does not map to external storage, the system will replace it with the external storage path prefix for that device. */
  directoriesToPull?: ReadonlyArray<string>;
}

export const TestSetup = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  initialSetupApks: Schema.optional(Schema.Array(Apk)),
  dontAutograntPermissions: Schema.optional(Schema.Boolean),
  networkProfile: Schema.optional(Schema.String),
  systrace: Schema.optional(SystraceSetup),
  account: Schema.optional(Account),
  filesToPush: Schema.optional(Schema.Array(DeviceFile)),
  additionalApks: Schema.optional(Schema.Array(Apk)),
  environmentVariables: Schema.optional(Schema.Array(EnvironmentVariable)),
  directoriesToPull: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "TestSetup" });

export interface IosTestLoop {
  /** The list of scenarios that should be run during the test. Defaults to the single scenario 0 if unspecified. */
  scenarios?: ReadonlyArray<number>;
  /** Output only. The bundle id for the application under test. */
  appBundleId?: string;
  /** Required. The .ipa of the application to test. */
  appIpa?: FileReference;
}

export const IosTestLoop = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  scenarios: Schema.optional(Schema.Array(Schema.Number)),
  appBundleId: Schema.optional(Schema.String),
  appIpa: Schema.optional(FileReference),
}).annotate({ identifier: "IosTestLoop" });

export interface IosXcTest {
  /** The Xcode version that should be used for the test. Use the TestEnvironmentDiscoveryService to get supported options. Defaults to the latest Xcode version Firebase Test Lab supports. */
  xcodeVersion?: string;
  /** The option to test special app entitlements. Setting this would re-sign the app having special entitlements with an explicit application-identifier. Currently supports testing aps-environment entitlement. */
  testSpecialEntitlements?: boolean;
  /** An .xctestrun file that will override the .xctestrun file in the tests zip. Because the .xctestrun file contains environment variables along with test methods to run and/or ignore, this can be useful for sharding tests. Default is taken from the tests zip. */
  xctestrun?: FileReference;
  /** Output only. The bundle id for the application under test. */
  appBundleId?: string;
  /** Required. The .zip containing the .xctestrun file and the contents of the DerivedData/Build/Products directory. The .xctestrun file in this zip is ignored if the xctestrun field is specified. */
  testsZip?: FileReference;
}

export const IosXcTest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  xcodeVersion: Schema.optional(Schema.String),
  testSpecialEntitlements: Schema.optional(Schema.Boolean),
  xctestrun: Schema.optional(FileReference),
  appBundleId: Schema.optional(Schema.String),
  testsZip: Schema.optional(FileReference),
}).annotate({ identifier: "IosXcTest" });

export interface UniformSharding {
  /** Required. The total number of shards to create. This must always be a positive number that is no greater than the total number of test cases. When you select one or more physical devices, the number of shards must be <= 50. When you select one or more ARM virtual devices, it must be <= 200. When you select only x86 virtual devices, it must be <= 500. */
  numShards?: number;
}

export const UniformSharding = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  numShards: Schema.optional(Schema.Number),
}).annotate({ identifier: "UniformSharding" });

export interface SmartSharding {
  /** The amount of time tests within a shard should take. Default: 300 seconds (5 minutes). The minimum allowed: 120 seconds (2 minutes). The shard count is dynamically set based on time, up to the maximum shard limit (described below). To guarantee at least one test case for each shard, the number of shards will not exceed the number of test cases. Shard duration will be exceeded if: - The maximum shard limit is reached and there is more calculated test time remaining to allocate into shards. - Any individual test is estimated to be longer than the targeted shard duration. Shard duration is not guaranteed because smart sharding uses test case history and default durations which may not be accurate. The rules for finding the test case timing records are: - If the service has processed a test case in the last 30 days, the record of the latest successful test case will be used. - For new test cases, the average duration of other known test cases will be used. - If there are no previous test case timing records available, the default test case duration is 15 seconds. Because the actual shard duration can exceed the targeted shard duration, we recommend that you set the targeted value at least 5 minutes less than the maximum allowed test timeout (45 minutes for physical devices and 60 minutes for virtual), or that you use the custom test timeout value that you set. This approach avoids cancelling the shard before all tests can finish. Note that there is a limit for maximum number of shards. When you select one or more physical devices, the number of shards must be <= 50. When you select one or more ARM virtual devices, it must be <= 200. When you select only x86 virtual devices, it must be <= 500. To guarantee at least one test case for per shard, the number of shards will not exceed the number of test cases. Each shard created counts toward daily test quota. */
  targetedShardDuration?: string;
}

export const SmartSharding = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  targetedShardDuration: Schema.optional(Schema.String),
}).annotate({ identifier: "SmartSharding" });

export interface TestTargetsForShard {
  /** Group of packages, classes, and/or test methods to be run for each shard. The targets need to be specified in AndroidJUnitRunner argument format. For example, "package com.my.packages" "class com.my.package.MyClass". The number of test_targets must be greater than 0. */
  testTargets?: ReadonlyArray<string>;
}

export const TestTargetsForShard = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  testTargets: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "TestTargetsForShard" });

export interface ManualSharding {
  /** Required. Group of packages, classes, and/or test methods to be run for each manually-created shard. You must specify at least one shard if this field is present. When you select one or more physical devices, the number of repeated test_targets_for_shard must be <= 50. When you select one or more ARM virtual devices, it must be <= 200. When you select only x86 virtual devices, it must be <= 500. */
  testTargetsForShard?: ReadonlyArray<TestTargetsForShard>;
}

export const ManualSharding = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  testTargetsForShard: Schema.optional(Schema.Array(TestTargetsForShard)),
}).annotate({ identifier: "ManualSharding" });

export interface ShardingOption {
  /** Uniformly shards test cases given a total number of shards. */
  uniformSharding?: UniformSharding;
  /** Shards test based on previous test case timing records. */
  smartSharding?: SmartSharding;
  /** Shards test cases into the specified groups of packages, classes, and/or methods. */
  manualSharding?: ManualSharding;
}

export const ShardingOption = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uniformSharding: Schema.optional(UniformSharding),
  smartSharding: Schema.optional(SmartSharding),
  manualSharding: Schema.optional(ManualSharding),
}).annotate({ identifier: "ShardingOption" });

export interface AndroidInstrumentationTest {
  /** Required. The APK containing the test code to be executed. */
  testApk?: FileReference;
  /** The java package for the test to be executed. The default value is determined by examining the application's manifest. */
  testPackageId?: string;
  /** The APK for the application under test. */
  appApk?: FileReference;
  /** A multi-apk app bundle for the application under test. */
  appBundle?: AppBundle;
  /** The InstrumentationTestRunner class. The default value is determined by examining the application's manifest. */
  testRunnerClass?: string;
  /** Each target must be fully qualified with the package name or class name, in one of these formats: - "package package_name" - "class package_name.class_name" - "class package_name.class_name#method_name" If empty, all targets in the module will be run. */
  testTargets?: ReadonlyArray<string>;
  /** The option of whether running each test within its own invocation of instrumentation with Android Test Orchestrator or not. ** Orchestrator is only compatible with AndroidJUnitRunner version 1.1 or higher! ** Orchestrator offers the following benefits: - No shared state - Crashes are isolated - Logs are scoped per test See for more information about Android Test Orchestrator. If not set, the test will be run without the orchestrator. */
  orchestratorOption?:
    | "ORCHESTRATOR_OPTION_UNSPECIFIED"
    | "USE_ORCHESTRATOR"
    | "DO_NOT_USE_ORCHESTRATOR"
    | (string & {});
  /** The option to run tests in multiple shards in parallel. */
  shardingOption?: ShardingOption;
  /** The java package for the application under test. The default value is determined by examining the application's manifest. */
  appPackageId?: string;
}

export const AndroidInstrumentationTest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testApk: Schema.optional(FileReference),
    testPackageId: Schema.optional(Schema.String),
    appApk: Schema.optional(FileReference),
    appBundle: Schema.optional(AppBundle),
    testRunnerClass: Schema.optional(Schema.String),
    testTargets: Schema.optional(Schema.Array(Schema.String)),
    orchestratorOption: Schema.optional(Schema.String),
    shardingOption: Schema.optional(ShardingOption),
    appPackageId: Schema.optional(Schema.String),
  }).annotate({ identifier: "AndroidInstrumentationTest" });

export interface AndroidTestLoop {
  /** The java package for the application under test. The default is determined by examining the application's manifest. */
  appPackageId?: string;
  /** The list of scenario labels that should be run during the test. The scenario labels should map to labels defined in the application's manifest. For example, player_experience and com.google.test.loops.player_experience add all of the loops labeled in the manifest with the com.google.test.loops.player_experience name to the execution. Scenarios can also be specified in the scenarios field. */
  scenarioLabels?: ReadonlyArray<string>;
  /** The APK for the application under test. */
  appApk?: FileReference;
  /** A multi-apk app bundle for the application under test. */
  appBundle?: AppBundle;
  /** The list of scenarios that should be run during the test. The default is all test loops, derived from the application's manifest. */
  scenarios?: ReadonlyArray<number>;
}

export const AndroidTestLoop = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  appPackageId: Schema.optional(Schema.String),
  scenarioLabels: Schema.optional(Schema.Array(Schema.String)),
  appApk: Schema.optional(FileReference),
  appBundle: Schema.optional(AppBundle),
  scenarios: Schema.optional(Schema.Array(Schema.Number)),
}).annotate({ identifier: "AndroidTestLoop" });

export interface IosRoboTest {
  /** Required. The ipa stored at this file should be used to run the test. */
  appIpa?: FileReference;
  /** The bundle ID for the app-under-test. This is determined by examining the application's "Info.plist" file. */
  appBundleId?: string;
  /** An optional Roboscript to customize the crawl. See https://firebase.google.com/docs/test-lab/android/robo-scripts-reference for more information about Roboscripts. The maximum allowed file size of the roboscript is 10MiB. */
  roboScript?: FileReference;
}

export const IosRoboTest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  appIpa: Schema.optional(FileReference),
  appBundleId: Schema.optional(Schema.String),
  roboScript: Schema.optional(FileReference),
}).annotate({ identifier: "IosRoboTest" });

export interface TestSpecification {
  /** An Android robo test. */
  androidRoboTest?: AndroidRoboTest;
  /** Disables performance metrics recording. May reduce test latency. */
  disablePerformanceMetrics?: boolean;
  /** Test setup requirements for iOS. */
  iosTestSetup?: IosTestSetup;
  /** Test setup requirements for Android e.g. files to install, bootstrap scripts. */
  testSetup?: TestSetup;
  /** An iOS application with a test loop. */
  iosTestLoop?: IosTestLoop;
  /** An iOS XCTest, via an .xctestrun file. */
  iosXcTest?: IosXcTest;
  /** Max time a test execution is allowed to run before it is automatically cancelled. The default value is 5 min. */
  testTimeout?: string;
  /** An Android instrumentation test. */
  androidInstrumentationTest?: AndroidInstrumentationTest;
  /** Disables video recording. May reduce test latency. */
  disableVideoRecording?: boolean;
  /** An Android Application with a Test Loop. */
  androidTestLoop?: AndroidTestLoop;
  /** An iOS Robo test. */
  iosRoboTest?: IosRoboTest;
}

export const TestSpecification = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  androidRoboTest: Schema.optional(AndroidRoboTest),
  disablePerformanceMetrics: Schema.optional(Schema.Boolean),
  iosTestSetup: Schema.optional(IosTestSetup),
  testSetup: Schema.optional(TestSetup),
  iosTestLoop: Schema.optional(IosTestLoop),
  iosXcTest: Schema.optional(IosXcTest),
  testTimeout: Schema.optional(Schema.String),
  androidInstrumentationTest: Schema.optional(AndroidInstrumentationTest),
  disableVideoRecording: Schema.optional(Schema.Boolean),
  androidTestLoop: Schema.optional(AndroidTestLoop),
  iosRoboTest: Schema.optional(IosRoboTest),
}).annotate({ identifier: "TestSpecification" });

export interface Environment {
  /** An Android device which must be used with an Android test. */
  androidDevice?: AndroidDevice;
  /** An iOS device which must be used with an iOS test. */
  iosDevice?: IosDevice;
}

export const Environment = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  androidDevice: Schema.optional(AndroidDevice),
  iosDevice: Schema.optional(IosDevice),
}).annotate({ identifier: "Environment" });

export interface Shard {
  /** Output only. The index of the shard among all the shards. */
  shardIndex?: number;
  /** Output only. Test targets for each shard. Only set for manual sharding. */
  testTargetsForShard?: TestTargetsForShard;
  /** Output only. The estimated shard duration based on previous test case timing records, if available. */
  estimatedShardDuration?: string;
  /** Output only. The total number of shards. */
  numShards?: number;
}

export const Shard = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  shardIndex: Schema.optional(Schema.Number),
  testTargetsForShard: Schema.optional(TestTargetsForShard),
  estimatedShardDuration: Schema.optional(Schema.String),
  numShards: Schema.optional(Schema.Number),
}).annotate({ identifier: "Shard" });

export interface ToolResultsStep {
  /** Output only. A tool results step ID. */
  stepId?: string;
  /** Output only. The cloud project that owns the tool results step. */
  projectId?: string;
  /** Output only. A tool results history ID. */
  historyId?: string;
  /** Output only. A tool results execution ID. */
  executionId?: string;
}

export const ToolResultsStep = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  stepId: Schema.optional(Schema.String),
  projectId: Schema.optional(Schema.String),
  historyId: Schema.optional(Schema.String),
  executionId: Schema.optional(Schema.String),
}).annotate({ identifier: "ToolResultsStep" });

export interface TestDetails {
  /** Output only. Human-readable, detailed descriptions of the test's progress. For example: "Provisioning a device", "Starting Test". During the course of execution new data may be appended to the end of progress_messages. */
  progressMessages?: ReadonlyArray<string>;
  /** Output only. If the TestState is ERROR, then this string will contain human-readable details about the error. */
  errorMessage?: string;
}

export const TestDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  progressMessages: Schema.optional(Schema.Array(Schema.String)),
  errorMessage: Schema.optional(Schema.String),
}).annotate({ identifier: "TestDetails" });

export interface TestExecution {
  /** Output only. Unique id set by the service. */
  id?: string;
  /** Output only. How the host machine(s) are configured. */
  environment?: Environment;
  /** Output only. Id of the containing TestMatrix. */
  matrixId?: string;
  /** Output only. Details about the shard. */
  shard?: Shard;
  /** Output only. How to run the test. */
  testSpecification?: TestSpecification;
  /** Output only. Where the results for this execution are written. */
  toolResultsStep?: ToolResultsStep;
  /** Output only. The time this test execution was initially created. */
  timestamp?: string;
  /** Output only. Indicates the current progress of the test execution (e.g., FINISHED). */
  state?:
    | "TEST_STATE_UNSPECIFIED"
    | "VALIDATING"
    | "PENDING"
    | "RUNNING"
    | "FINISHED"
    | "ERROR"
    | "UNSUPPORTED_ENVIRONMENT"
    | "INCOMPATIBLE_ENVIRONMENT"
    | "INCOMPATIBLE_ARCHITECTURE"
    | "CANCELLED"
    | "INVALID"
    | (string & {});
  /** Output only. Additional details about the running test. */
  testDetails?: TestDetails;
  /** Output only. The cloud project that owns the test execution. */
  projectId?: string;
}

export const TestExecution = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  environment: Schema.optional(Environment),
  matrixId: Schema.optional(Schema.String),
  shard: Schema.optional(Shard),
  testSpecification: Schema.optional(TestSpecification),
  toolResultsStep: Schema.optional(ToolResultsStep),
  timestamp: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  testDetails: Schema.optional(TestDetails),
  projectId: Schema.optional(Schema.String),
}).annotate({ identifier: "TestExecution" });

export interface TestMatrix {
  /** Required. Where the results for the matrix are written. */
  resultStorage?: ResultStorage;
  /** Output only. The time this test matrix was initially created. */
  timestamp?: string;
  /** If true, only a single attempt at most will be made to run each execution/shard in the matrix. Flaky test attempts are not affected. Normally, 2 or more attempts are made if a potential infrastructure issue is detected. This feature is for latency sensitive workloads. The incidence of execution failures may be significantly greater for fail-fast matrices and support is more limited because of that expectation. */
  failFast?: boolean;
  /** The number of times a TestExecution should be re-attempted if one or more of its test cases fail for any reason. The maximum number of reruns allowed is 10. Default is 0, which implies no reruns. */
  flakyTestAttempts?: number;
  /** Output only. Unique id set by the service. */
  testMatrixId?: string;
  /** The cloud project that owns the test matrix. */
  projectId?: string;
  /** Required. The devices the tests are being executed on. */
  environmentMatrix?: EnvironmentMatrix;
  /** Output only. Describes why the matrix is considered invalid. Only useful for matrices in the INVALID state. */
  invalidMatrixDetails?:
    | "INVALID_MATRIX_DETAILS_UNSPECIFIED"
    | "DETAILS_UNAVAILABLE"
    | "MALFORMED_APK"
    | "MALFORMED_TEST_APK"
    | "NO_MANIFEST"
    | "NO_PACKAGE_NAME"
    | "INVALID_PACKAGE_NAME"
    | "TEST_SAME_AS_APP"
    | "NO_INSTRUMENTATION"
    | "NO_SIGNATURE"
    | "INSTRUMENTATION_ORCHESTRATOR_INCOMPATIBLE"
    | "NO_TEST_RUNNER_CLASS"
    | "NO_LAUNCHER_ACTIVITY"
    | "FORBIDDEN_PERMISSIONS"
    | "INVALID_ROBO_DIRECTIVES"
    | "INVALID_RESOURCE_NAME"
    | "INVALID_DIRECTIVE_ACTION"
    | "TEST_LOOP_INTENT_FILTER_NOT_FOUND"
    | "SCENARIO_LABEL_NOT_DECLARED"
    | "SCENARIO_LABEL_MALFORMED"
    | "SCENARIO_NOT_DECLARED"
    | "DEVICE_ADMIN_RECEIVER"
    | "MALFORMED_XC_TEST_ZIP"
    | "BUILT_FOR_IOS_SIMULATOR"
    | "NO_TESTS_IN_XC_TEST_ZIP"
    | "USE_DESTINATION_ARTIFACTS"
    | "TEST_NOT_APP_HOSTED"
    | "PLIST_CANNOT_BE_PARSED"
    | "TEST_ONLY_APK"
    | "MALFORMED_IPA"
    | "MISSING_URL_SCHEME"
    | "MALFORMED_APP_BUNDLE"
    | "NO_CODE_APK"
    | "INVALID_INPUT_APK"
    | "INVALID_APK_PREVIEW_SDK"
    | "MATRIX_TOO_LARGE"
    | "TEST_QUOTA_EXCEEDED"
    | "SERVICE_NOT_ACTIVATED"
    | "UNKNOWN_PERMISSION_ERROR"
    | (string & {});
  /** Output Only. The overall outcome of the test. Only set when the test matrix state is FINISHED. */
  outcomeSummary?:
    | "OUTCOME_SUMMARY_UNSPECIFIED"
    | "SUCCESS"
    | "FAILURE"
    | "INCONCLUSIVE"
    | "SKIPPED"
    | (string & {});
  /** Information about the client which invoked the test. */
  clientInfo?: ClientInfo;
  /** Required. How to run the test. */
  testSpecification?: TestSpecification;
  /** Output only. Details about why a matrix was deemed invalid. If multiple checks can be safely performed, they will be reported but no assumptions should be made about the length of this list. */
  extendedInvalidMatrixDetails?: ReadonlyArray<MatrixErrorDetail>;
  /** Output only. The list of test executions that the service creates for this matrix. */
  testExecutions?: ReadonlyArray<TestExecution>;
  /** Output only. Indicates the current progress of the test matrix. */
  state?:
    | "TEST_STATE_UNSPECIFIED"
    | "VALIDATING"
    | "PENDING"
    | "RUNNING"
    | "FINISHED"
    | "ERROR"
    | "UNSUPPORTED_ENVIRONMENT"
    | "INCOMPATIBLE_ENVIRONMENT"
    | "INCOMPATIBLE_ARCHITECTURE"
    | "CANCELLED"
    | "INVALID"
    | (string & {});
}

export const TestMatrix = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resultStorage: Schema.optional(ResultStorage),
  timestamp: Schema.optional(Schema.String),
  failFast: Schema.optional(Schema.Boolean),
  flakyTestAttempts: Schema.optional(Schema.Number),
  testMatrixId: Schema.optional(Schema.String),
  projectId: Schema.optional(Schema.String),
  environmentMatrix: Schema.optional(EnvironmentMatrix),
  invalidMatrixDetails: Schema.optional(Schema.String),
  outcomeSummary: Schema.optional(Schema.String),
  clientInfo: Schema.optional(ClientInfo),
  testSpecification: Schema.optional(TestSpecification),
  extendedInvalidMatrixDetails: Schema.optional(
    Schema.Array(MatrixErrorDetail),
  ),
  testExecutions: Schema.optional(Schema.Array(TestExecution)),
  state: Schema.optional(Schema.String),
}).annotate({ identifier: "TestMatrix" });

export interface ProvidedSoftwareCatalog {
  /** Deprecated: Use AndroidX Test Orchestrator going forward. A string representing the current version of Android Test Orchestrator that is used in the environment. The package is available at https://maven.google.com/web/index.html#com.android.support.test:orchestrator. */
  orchestratorVersion?: string;
  /** A string representing the current version of AndroidX Test Orchestrator that is used in the environment. The package is available at https://maven.google.com/web/index.html#androidx.test:orchestrator. */
  androidxOrchestratorVersion?: string;
}

export const ProvidedSoftwareCatalog =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orchestratorVersion: Schema.optional(Schema.String),
    androidxOrchestratorVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProvidedSoftwareCatalog" });

export interface UsesFeature {
  /** The android:name value */
  name?: string;
  /** The android:required value */
  isRequired?: boolean;
}

export const UsesFeature = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  isRequired: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "UsesFeature" });

export interface Metadata {
  /** The android:value value */
  value?: string;
  /** The android:name value */
  name?: string;
}

export const Metadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "Metadata" });

export interface IntentFilter {
  /** The android:name value of the tag. */
  categoryNames?: ReadonlyArray<string>;
  /** The android:name value of the tag. */
  actionNames?: ReadonlyArray<string>;
  /** The android:mimeType value of the tag. */
  mimeType?: string;
}

export const IntentFilter = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  categoryNames: Schema.optional(Schema.Array(Schema.String)),
  actionNames: Schema.optional(Schema.Array(Schema.String)),
  mimeType: Schema.optional(Schema.String),
}).annotate({ identifier: "IntentFilter" });

export interface Service {
  /** Intent filters in the service */
  intentFilter?: ReadonlyArray<IntentFilter>;
  /** The android:name value */
  name?: string;
}

export const Service = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  intentFilter: Schema.optional(Schema.Array(IntentFilter)),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "Service" });

export interface UsesPermissionTag {
  /** The android:name value */
  name?: string;
  /** The android:name value */
  maxSdkVersion?: number;
}

export const UsesPermissionTag = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  maxSdkVersion: Schema.optional(Schema.Number),
}).annotate({ identifier: "UsesPermissionTag" });

export interface ApkManifest {
  /** Full Java-style package name for this application, e.g. "com.example.foo". */
  packageName?: string;
  /** Version number used internally by the app. */
  versionCode?: string;
  /** Feature usage tags defined in the manifest. */
  usesFeature?: ReadonlyArray<UsesFeature>;
  /** Meta-data tags defined in the manifest. */
  metadata?: ReadonlyArray<Metadata>;
  /** Maximum API level on which the application is designed to run. */
  maxSdkVersion?: number;
  /** Services contained in the tag. */
  services?: ReadonlyArray<Service>;
  /** Version number shown to users. */
  versionName?: string;
  intentFilters?: ReadonlyArray<IntentFilter>;
  /** Minimum API level required for the application to run. */
  minSdkVersion?: number;
  /** User-readable name for the application. */
  applicationLabel?: string;
  /** Specifies the API Level on which the application is designed to run. */
  targetSdkVersion?: number;
  usesPermission?: ReadonlyArray<string>;
  /** Permissions declared to be used by the application */
  usesPermissionTags?: ReadonlyArray<UsesPermissionTag>;
}

export const ApkManifest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  packageName: Schema.optional(Schema.String),
  versionCode: Schema.optional(Schema.String),
  usesFeature: Schema.optional(Schema.Array(UsesFeature)),
  metadata: Schema.optional(Schema.Array(Metadata)),
  maxSdkVersion: Schema.optional(Schema.Number),
  services: Schema.optional(Schema.Array(Service)),
  versionName: Schema.optional(Schema.String),
  intentFilters: Schema.optional(Schema.Array(IntentFilter)),
  minSdkVersion: Schema.optional(Schema.Number),
  applicationLabel: Schema.optional(Schema.String),
  targetSdkVersion: Schema.optional(Schema.Number),
  usesPermission: Schema.optional(Schema.Array(Schema.String)),
  usesPermissionTags: Schema.optional(Schema.Array(UsesPermissionTag)),
}).annotate({ identifier: "ApkManifest" });

export interface ApkDetail {
  apkManifest?: ApkManifest;
}

export const ApkDetail = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  apkManifest: Schema.optional(ApkManifest),
}).annotate({ identifier: "ApkDetail" });

export interface IosRuntimeConfiguration {
  /** The set of available locales. */
  locales?: ReadonlyArray<Locale>;
  /** The set of available orientations. */
  orientations?: ReadonlyArray<Orientation>;
}

export const IosRuntimeConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locales: Schema.optional(Schema.Array(Locale)),
    orientations: Schema.optional(Schema.Array(Orientation)),
  }).annotate({ identifier: "IosRuntimeConfiguration" });

export interface XcodeVersion {
  /** The id for this version. Example: "9.2". */
  version?: string;
  /** Tags for this Xcode version. Example: "default". */
  tags?: ReadonlyArray<string>;
}

export const XcodeVersion = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  version: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "XcodeVersion" });

export interface PerIosVersionInfo {
  /** An iOS version. */
  versionId?: string;
  /** The number of online devices for an iOS version. */
  deviceCapacity?:
    | "DEVICE_CAPACITY_UNSPECIFIED"
    | "DEVICE_CAPACITY_HIGH"
    | "DEVICE_CAPACITY_MEDIUM"
    | "DEVICE_CAPACITY_LOW"
    | "DEVICE_CAPACITY_NONE"
    | (string & {});
}

export const PerIosVersionInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  versionId: Schema.optional(Schema.String),
  deviceCapacity: Schema.optional(Schema.String),
}).annotate({ identifier: "PerIosVersionInfo" });

export interface IosModel {
  /** The set of iOS major software versions this device supports. */
  supportedVersionIds?: ReadonlyArray<string>;
  /** Version-specific information of an iOS model. */
  perVersionInfo?: ReadonlyArray<PerIosVersionInfo>;
  /** The human-readable name for this device model. Examples: "iPhone 4s", "iPad Mini 2". */
  name?: string;
  /** Whether this device is a phone, tablet, wearable, etc. */
  formFactor?:
    | "DEVICE_FORM_FACTOR_UNSPECIFIED"
    | "PHONE"
    | "TABLET"
    | "WEARABLE"
    | "TV"
    | "AUTOMOTIVE"
    | "DESKTOP"
    | "XR"
    | (string & {});
  /** Screen size in the horizontal (X) dimension measured in pixels. */
  screenX?: number;
  /** Screen size in the vertical (Y) dimension measured in pixels. */
  screenY?: number;
  /** The unique opaque id for this model. Use this for invoking the TestExecutionService. */
  id?: string;
  /** Tags for this dimension. Examples: "default", "preview", "deprecated". */
  tags?: ReadonlyArray<string>;
  /** Device capabilities. Copied from https://developer.apple.com/library/archive/documentation/DeviceInformation/Reference/iOSDeviceCompatibility/DeviceCompatibilityMatrix/DeviceCompatibilityMatrix.html */
  deviceCapabilities?: ReadonlyArray<string>;
  /** Screen density in DPI. */
  screenDensity?: number;
}

export const IosModel = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  supportedVersionIds: Schema.optional(Schema.Array(Schema.String)),
  perVersionInfo: Schema.optional(Schema.Array(PerIosVersionInfo)),
  name: Schema.optional(Schema.String),
  formFactor: Schema.optional(Schema.String),
  screenX: Schema.optional(Schema.Number),
  screenY: Schema.optional(Schema.Number),
  id: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Array(Schema.String)),
  deviceCapabilities: Schema.optional(Schema.Array(Schema.String)),
  screenDensity: Schema.optional(Schema.Number),
}).annotate({ identifier: "IosModel" });

export interface IosDeviceCatalog {
  /** The set of supported runtime configurations. */
  runtimeConfiguration?: IosRuntimeConfiguration;
  /** The set of supported iOS software versions. */
  versions?: ReadonlyArray<IosVersion>;
  /** The set of supported Xcode versions. */
  xcodeVersions?: ReadonlyArray<XcodeVersion>;
  /** The set of supported iOS device models. */
  models?: ReadonlyArray<IosModel>;
}

export const IosDeviceCatalog = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  runtimeConfiguration: Schema.optional(IosRuntimeConfiguration),
  versions: Schema.optional(Schema.Array(IosVersion)),
  xcodeVersions: Schema.optional(Schema.Array(XcodeVersion)),
  models: Schema.optional(Schema.Array(IosModel)),
}).annotate({ identifier: "IosDeviceCatalog" });

export interface DeviceIpBlock {
  /** The date this block was added to Firebase Test Lab */
  addedDate?: Testing_Date;
  /** An IP address block in CIDR notation eg: 34.68.194.64/29 */
  block?: string;
  /** Whether this block is used by physical or virtual devices */
  form?:
    | "DEVICE_FORM_UNSPECIFIED"
    | "VIRTUAL"
    | "PHYSICAL"
    | "EMULATOR"
    | (string & {});
}

export const DeviceIpBlock = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  addedDate: Schema.optional(Testing_Date),
  block: Schema.optional(Schema.String),
  form: Schema.optional(Schema.String),
}).annotate({ identifier: "DeviceIpBlock" });

export interface DeviceIpBlockCatalog {
  /** The device IP blocks used by Firebase Test Lab */
  ipBlocks?: ReadonlyArray<DeviceIpBlock>;
}

export const DeviceIpBlockCatalog = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ipBlocks: Schema.optional(Schema.Array(DeviceIpBlock)),
}).annotate({ identifier: "DeviceIpBlockCatalog" });

export interface TrafficRule {
  /** Packet duplication ratio (0.0 - 1.0). */
  packetDuplicationRatio?: number;
  /** Bandwidth in kbits/second. */
  bandwidth?: number;
  /** Packet loss ratio (0.0 - 1.0). */
  packetLossRatio?: number;
  /** Packet delay, must be >= 0. */
  delay?: string;
  /** Burst size in kbits. */
  burst?: number;
}

export const TrafficRule = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  packetDuplicationRatio: Schema.optional(Schema.Number),
  bandwidth: Schema.optional(Schema.Number),
  packetLossRatio: Schema.optional(Schema.Number),
  delay: Schema.optional(Schema.String),
  burst: Schema.optional(Schema.Number),
}).annotate({ identifier: "TrafficRule" });

export interface NetworkConfiguration {
  /** The emulation rule applying to the download traffic. */
  downRule?: TrafficRule;
  /** The unique opaque id for this network traffic configuration. */
  id?: string;
  /** The emulation rule applying to the upload traffic. */
  upRule?: TrafficRule;
}

export const NetworkConfiguration = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  downRule: Schema.optional(TrafficRule),
  id: Schema.optional(Schema.String),
  upRule: Schema.optional(TrafficRule),
}).annotate({ identifier: "NetworkConfiguration" });

export interface NetworkConfigurationCatalog {
  configurations?: ReadonlyArray<NetworkConfiguration>;
}

export const NetworkConfigurationCatalog =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configurations: Schema.optional(Schema.Array(NetworkConfiguration)),
  }).annotate({ identifier: "NetworkConfigurationCatalog" });

export interface TestEnvironmentCatalog {
  /** Supported Android devices. */
  androidDeviceCatalog?: AndroidDeviceCatalog;
  /** The software test environment provided by TestExecutionService. */
  softwareCatalog?: ProvidedSoftwareCatalog;
  /** Supported iOS devices. */
  iosDeviceCatalog?: IosDeviceCatalog;
  /** The IP blocks used by devices in the test environment. */
  deviceIpBlockCatalog?: DeviceIpBlockCatalog;
  /** Supported network configurations. */
  networkConfigurationCatalog?: NetworkConfigurationCatalog;
}

export const TestEnvironmentCatalog = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    androidDeviceCatalog: Schema.optional(AndroidDeviceCatalog),
    softwareCatalog: Schema.optional(ProvidedSoftwareCatalog),
    iosDeviceCatalog: Schema.optional(IosDeviceCatalog),
    deviceIpBlockCatalog: Schema.optional(DeviceIpBlockCatalog),
    networkConfigurationCatalog: Schema.optional(NetworkConfigurationCatalog),
  },
).annotate({ identifier: "TestEnvironmentCatalog" });

export interface ListDeviceSessionsResponse {
  /** The sessions matching the specified filter in the given cloud project. */
  deviceSessions?: ReadonlyArray<DeviceSession>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListDeviceSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceSessions: Schema.optional(Schema.Array(DeviceSession)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDeviceSessionsResponse" });

export interface CancelDeviceSessionRequest {}

export const CancelDeviceSessionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelDeviceSessionRequest",
  });

export interface GetApkDetailsResponse {
  /** Details of the Android App. */
  apkDetail?: ApkDetail;
}

export const GetApkDetailsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  apkDetail: Schema.optional(ApkDetail),
}).annotate({ identifier: "GetApkDetailsResponse" });

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

export interface GetTestEnvironmentCatalogRequest {
  /** Optional. Whether to include viewable only models in the response. This is only applicable for Android models. */
  includeViewableModels?: boolean;
  /** Required. The type of environment that should be listed. */
  environmentType:
    | "ENVIRONMENT_TYPE_UNSPECIFIED"
    | "ANDROID"
    | "IOS"
    | "NETWORK_CONFIGURATION"
    | "PROVIDED_SOFTWARE"
    | "DEVICE_IP_BLOCKS"
    | (string & {});
  /** For authorization, the cloud project requesting the TestEnvironmentCatalog. */
  projectId?: string;
}

export const GetTestEnvironmentCatalogRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includeViewableModels: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("includeViewableModels"),
    ),
    environmentType: Schema.String.pipe(T.HttpPath("environmentType")),
    projectId: Schema.optional(Schema.String).pipe(T.HttpQuery("projectId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/testEnvironmentCatalog/{environmentType}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetTestEnvironmentCatalogRequest>;

export type GetTestEnvironmentCatalogResponse = TestEnvironmentCatalog;
export const GetTestEnvironmentCatalogResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestEnvironmentCatalog;

export type GetTestEnvironmentCatalogError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the catalog of supported test environments. May return any of the following canonical error codes: - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the environment type does not exist - INTERNAL - if an internal error occurred */
export const getTestEnvironmentCatalog: API.OperationMethod<
  GetTestEnvironmentCatalogRequest,
  GetTestEnvironmentCatalogResponse,
  GetTestEnvironmentCatalogError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetTestEnvironmentCatalogRequest,
  output: GetTestEnvironmentCatalogResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetApkDetailsApplicationDetailServiceRequest {
  /** A path to a file in Google Cloud Storage. Example: gs://build-app-1414623860166/app%40debug-unaligned.apk These paths are expected to be url encoded (percent encoding) */
  "bundleLocation.gcsPath"?: string;
  /** Request body */
  body?: FileReference;
}

export const GetApkDetailsApplicationDetailServiceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "bundleLocation.gcsPath": Schema.optional(Schema.String).pipe(
      T.HttpQuery("bundleLocation.gcsPath"),
    ),
    body: Schema.optional(FileReference).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/applicationDetailService/getApkDetails",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GetApkDetailsApplicationDetailServiceRequest>;

export type GetApkDetailsApplicationDetailServiceResponse =
  GetApkDetailsResponse;
export const GetApkDetailsApplicationDetailServiceResponse =
  /*@__PURE__*/ /*#__PURE__*/ GetApkDetailsResponse;

export type GetApkDetailsApplicationDetailServiceError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets the details of an Android application APK. */
export const getApkDetailsApplicationDetailService: API.OperationMethod<
  GetApkDetailsApplicationDetailServiceRequest,
  GetApkDetailsApplicationDetailServiceResponse,
  GetApkDetailsApplicationDetailServiceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetApkDetailsApplicationDetailServiceRequest,
  output: GetApkDetailsApplicationDetailServiceResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsTestMatricesRequest {
  /** Cloud project that owns the test matrix. */
  projectId: string;
  /** Unique test matrix id which was assigned by the service. */
  testMatrixId: string;
}

export const GetProjectsTestMatricesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    testMatrixId: Schema.String.pipe(T.HttpPath("testMatrixId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/projects/{projectId}/testMatrices/{testMatrixId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsTestMatricesRequest>;

export type GetProjectsTestMatricesResponse = TestMatrix;
export const GetProjectsTestMatricesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestMatrix;

export type GetProjectsTestMatricesError = DefaultErrors | NotFound | Forbidden;

/** Checks the status of a test matrix and the executions once they are created. The test matrix will contain the list of test executions to run if and only if the resultStorage.toolResultsExecution fields have been populated. Note: Flaky test executions may be added to the matrix at a later stage. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist */
export const getProjectsTestMatrices: API.OperationMethod<
  GetProjectsTestMatricesRequest,
  GetProjectsTestMatricesResponse,
  GetProjectsTestMatricesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsTestMatricesRequest,
  output: GetProjectsTestMatricesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CancelProjectsTestMatricesRequest {
  /** Cloud project that owns the test. */
  projectId: string;
  /** Test matrix that will be canceled. */
  testMatrixId: string;
}

export const CancelProjectsTestMatricesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    testMatrixId: Schema.String.pipe(T.HttpPath("testMatrixId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/projects/{projectId}/testMatrices/{testMatrixId}:cancel",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsTestMatricesRequest>;

export type CancelProjectsTestMatricesResponse = CancelTestMatrixResponse;
export const CancelProjectsTestMatricesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CancelTestMatrixResponse;

export type CancelProjectsTestMatricesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Cancels unfinished test executions in a test matrix. This call returns immediately and cancellation proceeds asynchronously. If the matrix is already final, this operation will have no effect. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist */
export const cancelProjectsTestMatrices: API.OperationMethod<
  CancelProjectsTestMatricesRequest,
  CancelProjectsTestMatricesResponse,
  CancelProjectsTestMatricesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsTestMatricesRequest,
  output: CancelProjectsTestMatricesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsTestMatricesRequest {
  /** The GCE project under which this job will run. */
  projectId: string;
  /** A string id used to detect duplicated requests. Ids are automatically scoped to a project, so users should ensure the ID is unique per-project. A UUID is recommended. Optional, but strongly recommended. */
  requestId?: string;
  /** Request body */
  body?: TestMatrix;
}

export const CreateProjectsTestMatricesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(TestMatrix).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/projects/{projectId}/testMatrices",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsTestMatricesRequest>;

export type CreateProjectsTestMatricesResponse = TestMatrix;
export const CreateProjectsTestMatricesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestMatrix;

export type CreateProjectsTestMatricesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates and runs a matrix of tests according to the given specifications. Unsupported environments will be returned in the state UNSUPPORTED. A test matrix is limited to use at most 2000 devices in parallel. The returned matrix will not yet contain the executions that will be created for this matrix. Execution creation happens later on and will require a call to GetTestMatrix. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed or if the matrix tries to use too many simultaneous devices. */
export const createProjectsTestMatrices: API.OperationMethod<
  CreateProjectsTestMatricesRequest,
  CreateProjectsTestMatricesResponse,
  CreateProjectsTestMatricesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsTestMatricesRequest,
  output: CreateProjectsTestMatricesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsDeviceSessionsRequest {
  /** Optional. A continuation token for paging. */
  pageToken?: string;
  /** Required. The name of the parent to request, e.g. "projects/{project_id}" */
  parent: string;
  /** Optional. The maximum number of DeviceSessions to return. */
  pageSize?: number;
  /** Optional. If specified, responses will be filtered by the given filter. Allowed fields are: session_state. */
  filter?: string;
}

export const ListProjectsDeviceSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/deviceSessions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsDeviceSessionsRequest>;

export type ListProjectsDeviceSessionsResponse = ListDeviceSessionsResponse;
export const ListProjectsDeviceSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDeviceSessionsResponse;

export type ListProjectsDeviceSessionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** GET /v1/projects/{project_id}/deviceSessions Lists device Sessions owned by the project user. */
export const listProjectsDeviceSessions: API.PaginatedOperationMethod<
  ListProjectsDeviceSessionsRequest,
  ListProjectsDeviceSessionsResponse,
  ListProjectsDeviceSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsDeviceSessionsRequest,
  output: ListProjectsDeviceSessionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsDeviceSessionsRequest {
  /** Required. Name of the DeviceSession, e.g. "projects/{project_id}/deviceSessions/{session_id}" */
  name: string;
}

export const GetProjectsDeviceSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsDeviceSessionsRequest>;

export type GetProjectsDeviceSessionsResponse = DeviceSession;
export const GetProjectsDeviceSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DeviceSession;

export type GetProjectsDeviceSessionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** GET /v1/projects/{project_id}/deviceSessions/{device_session_id} Return a DeviceSession, which documents the allocation status and whether the device is allocated. Clients making requests from this API must poll GetDeviceSession. */
export const getProjectsDeviceSessions: API.OperationMethod<
  GetProjectsDeviceSessionsRequest,
  GetProjectsDeviceSessionsResponse,
  GetProjectsDeviceSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsDeviceSessionsRequest,
  output: GetProjectsDeviceSessionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CancelProjectsDeviceSessionsRequest {
  /** Required. Name of the DeviceSession, e.g. "projects/{project_id}/deviceSessions/{session_id}" */
  name: string;
  /** Request body */
  body?: CancelDeviceSessionRequest;
}

export const CancelProjectsDeviceSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelDeviceSessionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsDeviceSessionsRequest>;

export type CancelProjectsDeviceSessionsResponse = Empty;
export const CancelProjectsDeviceSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelProjectsDeviceSessionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** POST /v1/projects/{project_id}/deviceSessions/{device_session_id}:cancel Changes the DeviceSession to state FINISHED and terminates all connections. Canceled sessions are not deleted and can be retrieved or listed by the user until they expire based on the 28 day deletion policy. */
export const cancelProjectsDeviceSessions: API.OperationMethod<
  CancelProjectsDeviceSessionsRequest,
  CancelProjectsDeviceSessionsResponse,
  CancelProjectsDeviceSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsDeviceSessionsRequest,
  output: CancelProjectsDeviceSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsDeviceSessionsRequest {
  /** Optional. Name of the DeviceSession, e.g. "projects/{project_id}/deviceSessions/{session_id}" */
  name: string;
  /** Required. The list of fields to update. */
  updateMask?: string;
  /** Request body */
  body?: DeviceSession;
}

export const PatchProjectsDeviceSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(DeviceSession).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsDeviceSessionsRequest>;

export type PatchProjectsDeviceSessionsResponse = DeviceSession;
export const PatchProjectsDeviceSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DeviceSession;

export type PatchProjectsDeviceSessionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** PATCH /v1/projects/{projectId}/deviceSessions/deviceSessionId}:updateDeviceSession Updates the current device session to the fields described by the update_mask. */
export const patchProjectsDeviceSessions: API.OperationMethod<
  PatchProjectsDeviceSessionsRequest,
  PatchProjectsDeviceSessionsResponse,
  PatchProjectsDeviceSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsDeviceSessionsRequest,
  output: PatchProjectsDeviceSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsDeviceSessionsRequest {
  /** Required. The Compute Engine project under which this device will be allocated. "projects/{project_id}" */
  parent: string;
  /** Request body */
  body?: DeviceSession;
}

export const CreateProjectsDeviceSessionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(DeviceSession).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{parent}/deviceSessions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsDeviceSessionsRequest>;

export type CreateProjectsDeviceSessionsResponse = DeviceSession;
export const CreateProjectsDeviceSessionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DeviceSession;

export type CreateProjectsDeviceSessionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** POST /v1/projects/{project_id}/deviceSessions */
export const createProjectsDeviceSessions: API.OperationMethod<
  CreateProjectsDeviceSessionsRequest,
  CreateProjectsDeviceSessionsResponse,
  CreateProjectsDeviceSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsDeviceSessionsRequest,
  output: CreateProjectsDeviceSessionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
