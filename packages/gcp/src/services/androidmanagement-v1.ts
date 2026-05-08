// ==========================================================================
// Android Management API (androidmanagement v1)
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
  name: "androidmanagement",
  version: "v1",
  rootUrl: "https://androidmanagement.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface WebAppIcon {
  /** The actual bytes of the image in a base64url encoded string (c.f. RFC4648, section 5 "Base 64 Encoding with URL and Filename Safe Alphabet"). - The image type can be png or jpg. - The image should ideally be square. - The image should ideally have a size of 512x512. */
  imageData?: string;
}

export const WebAppIcon: Schema.Schema<WebAppIcon> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageData: Schema.optional(Schema.String),
  }).annotate({ identifier: "WebAppIcon" });

export interface AppProcessInfo {
  /** Process name. */
  processName?: string;
  /** Process ID. */
  pid?: number;
  /** UID of the package. */
  uid?: number;
  /** Package names of all packages that are associated with the particular user ID. In most cases, this will be a single package name, the package that has been assigned that user ID. If multiple application share a UID then all packages sharing UID will be included. */
  packageNames?: ReadonlyArray<string>;
  /** Process start time. */
  startTime?: string;
  /** SELinux policy info. */
  seinfo?: string;
  /** SHA-256 hash of the base APK, in hexadecimal format. */
  apkSha256Hash?: string;
}

export const AppProcessInfo: Schema.Schema<AppProcessInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    processName: Schema.optional(Schema.String),
    pid: Schema.optional(Schema.Number),
    uid: Schema.optional(Schema.Number),
    packageNames: Schema.optional(Schema.Array(Schema.String)),
    startTime: Schema.optional(Schema.String),
    seinfo: Schema.optional(Schema.String),
    apkSha256Hash: Schema.optional(Schema.String),
  }).annotate({ identifier: "AppProcessInfo" });

export interface AppProcessStartEvent {
  /** Information about a process. */
  processInfo?: AppProcessInfo;
}

export const AppProcessStartEvent: Schema.Schema<AppProcessStartEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    processInfo: Schema.optional(AppProcessInfo),
  }).annotate({ identifier: "AppProcessStartEvent" });

export interface AppTrackInfo {
  /** The unmodifiable unique track identifier, taken from the releaseTrackId in the URL of the Play Console page that displays the app’s track information. */
  trackId?: string;
  /** The track name associated with the trackId, set in the Play Console. The name is modifiable from Play Console. */
  trackAlias?: string;
}

export const AppTrackInfo: Schema.Schema<AppTrackInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trackId: Schema.optional(Schema.String),
    trackAlias: Schema.optional(Schema.String),
  }).annotate({ identifier: "AppTrackInfo" });

export interface KeyguardSecuredEvent {}

export const KeyguardSecuredEvent: Schema.Schema<KeyguardSecuredEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "KeyguardSecuredEvent",
  });

export interface EuiccChipInfo {
  /** Output only. The Embedded Identity Document (EID) that identifies the eUICC chip for each eUICC chip on the device. This is available on company owned devices running Android 13 and above. */
  eid?: string;
}

export const EuiccChipInfo: Schema.Schema<EuiccChipInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eid: Schema.optional(Schema.String),
  }).annotate({ identifier: "EuiccChipInfo" });

export interface HardwareInfo {
  /** Baseband version. For example, MDM9625_104662.22.05.34p. */
  deviceBasebandVersion?: string;
  /** Name of the hardware. For example, Angler. */
  hardware?: string;
  /** Output only. Information related to the eUICC chip. */
  euiccChipInfo?: ReadonlyArray<EuiccChipInfo>;
  /** Battery throttling temperature thresholds in Celsius for each battery on the device. */
  batteryThrottlingTemperatures?: ReadonlyArray<number>;
  /** The model of the device. For example, Asus Nexus 7. */
  model?: string;
  /** Manufacturer. For example, Motorola. */
  manufacturer?: string;
  /** Brand of the device. For example, Google. */
  brand?: string;
  /** Device skin shutdown temperature thresholds in Celsius. */
  skinShutdownTemperatures?: ReadonlyArray<number>;
  /** CPU shutdown temperature thresholds in Celsius for each CPU on the device. */
  cpuShutdownTemperatures?: ReadonlyArray<number>;
  /** Device skin throttling temperature thresholds in Celsius. */
  skinThrottlingTemperatures?: ReadonlyArray<number>;
  /** GPU shutdown temperature thresholds in Celsius for each GPU on the device. */
  gpuShutdownTemperatures?: ReadonlyArray<number>;
  /** Battery shutdown temperature thresholds in Celsius for each battery on the device. */
  batteryShutdownTemperatures?: ReadonlyArray<number>;
  /** CPU throttling temperature thresholds in Celsius for each CPU on the device. */
  cpuThrottlingTemperatures?: ReadonlyArray<number>;
  /** The device serial number. However, for personally-owned devices running Android 12 and above, this is the same as the enterpriseSpecificId. */
  serialNumber?: string;
  /** GPU throttling temperature thresholds in Celsius for each GPU on the device. */
  gpuThrottlingTemperatures?: ReadonlyArray<number>;
  /** Output only. ID that uniquely identifies a personally-owned device in a particular organization. On the same physical device when enrolled with the same organization, this ID persists across setups and even factory resets. This ID is available on personally-owned devices with a work profile on devices running Android 12 and above. */
  enterpriseSpecificId?: string;
}

export const HardwareInfo: Schema.Schema<HardwareInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceBasebandVersion: Schema.optional(Schema.String),
    hardware: Schema.optional(Schema.String),
    euiccChipInfo: Schema.optional(Schema.Array(EuiccChipInfo)),
    batteryThrottlingTemperatures: Schema.optional(Schema.Array(Schema.Number)),
    model: Schema.optional(Schema.String),
    manufacturer: Schema.optional(Schema.String),
    brand: Schema.optional(Schema.String),
    skinShutdownTemperatures: Schema.optional(Schema.Array(Schema.Number)),
    cpuShutdownTemperatures: Schema.optional(Schema.Array(Schema.Number)),
    skinThrottlingTemperatures: Schema.optional(Schema.Array(Schema.Number)),
    gpuShutdownTemperatures: Schema.optional(Schema.Array(Schema.Number)),
    batteryShutdownTemperatures: Schema.optional(Schema.Array(Schema.Number)),
    cpuThrottlingTemperatures: Schema.optional(Schema.Array(Schema.Number)),
    serialNumber: Schema.optional(Schema.String),
    gpuThrottlingTemperatures: Schema.optional(Schema.Array(Schema.Number)),
    enterpriseSpecificId: Schema.optional(Schema.String),
  }).annotate({ identifier: "HardwareInfo" });

export interface Location {
  /** The latitude position of the location */
  latitude?: number;
  /** The longitude position of the location */
  longitude?: number;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latitude: Schema.optional(Schema.Number),
    longitude: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Location" });

export interface ApiLevelCondition {
  /** The minimum desired Android Framework API level. If the device doesn't meet the minimum requirement, this condition is satisfied. Must be greater than zero. */
  minApiLevel?: number;
}

export const ApiLevelCondition: Schema.Schema<ApiLevelCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minApiLevel: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ApiLevelCondition" });

export interface NonComplianceDetailCondition {
  /** The reason the device is not in compliance with the setting. If not set, then this condition matches any reason. */
  nonComplianceReason?:
    | "NON_COMPLIANCE_REASON_UNSPECIFIED"
    | "API_LEVEL"
    | "MANAGEMENT_MODE"
    | "USER_ACTION"
    | "INVALID_VALUE"
    | "APP_NOT_INSTALLED"
    | "UNSUPPORTED"
    | "APP_INSTALLED"
    | "PENDING"
    | "APP_INCOMPATIBLE"
    | "APP_NOT_UPDATED"
    | "DEVICE_INCOMPATIBLE"
    | "APP_SIGNING_CERT_MISMATCH"
    | "PROJECT_NOT_PERMITTED"
    | (string & {});
  /** The name of the policy setting. This is the JSON field name of a top-level Policy field. If not set, then this condition matches any setting name. */
  settingName?: string;
  /** The package name of the app that's out of compliance. If not set, then this condition matches any package name. */
  packageName?: string;
}

export const NonComplianceDetailCondition: Schema.Schema<NonComplianceDetailCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nonComplianceReason: Schema.optional(Schema.String),
    settingName: Schema.optional(Schema.String),
    packageName: Schema.optional(Schema.String),
  }).annotate({ identifier: "NonComplianceDetailCondition" });

export interface ComplianceRule {
  /** A condition which is satisfied if the Android Framework API level on the device doesn't meet a minimum requirement. */
  apiLevelCondition?: ApiLevelCondition;
  /** If set to true, the rule includes a mitigating action to disable apps so that the device is effectively disabled, but app data is preserved. If the device is running an app in locked task mode, the app will be closed and a UI showing the reason for non-compliance will be displayed. */
  disableApps?: boolean;
  /** A condition which is satisfied if there exists any matching NonComplianceDetail for the device. */
  nonComplianceDetailCondition?: NonComplianceDetailCondition;
  /** If set, the rule includes a mitigating action to disable apps specified in the list, but app data is preserved. */
  packageNamesToDisable?: ReadonlyArray<string>;
}

export const ComplianceRule: Schema.Schema<ComplianceRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiLevelCondition: Schema.optional(ApiLevelCondition),
    disableApps: Schema.optional(Schema.Boolean),
    nonComplianceDetailCondition: Schema.optional(NonComplianceDetailCondition),
    packageNamesToDisable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ComplianceRule" });

export interface LostModeLocationEvent {
  /** The battery level as a number between 0 and 100 inclusive */
  batteryLevel?: number;
  /** The device location */
  location?: Location;
}

export const LostModeLocationEvent: Schema.Schema<LostModeLocationEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    batteryLevel: Schema.optional(Schema.Number),
    location: Schema.optional(Location),
  }).annotate({ identifier: "LostModeLocationEvent" });

export interface ApplicationEvent {
  /** App event type. */
  eventType?:
    | "APPLICATION_EVENT_TYPE_UNSPECIFIED"
    | "INSTALLED"
    | "CHANGED"
    | "DATA_CLEARED"
    | "REMOVED"
    | "REPLACED"
    | "RESTARTED"
    | "PINNED"
    | "UNPINNED"
    | (string & {});
  /** The creation time of the event. */
  createTime?: string;
}

export const ApplicationEvent: Schema.Schema<ApplicationEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventType: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ApplicationEvent" });

export interface KeyedAppState {
  /** Optionally, a machine-readable value to be read by the EMM. For example, setting values that the admin can choose to query against in the EMM console (e.g. “notify me if the battery_warning data < 10”). */
  data?: string;
  /** The time the app state was most recently updated. */
  lastUpdateTime?: string;
  /** The creation time of the app state on the device. */
  createTime?: string;
  /** The key for the app state. Acts as a point of reference for what the app is providing state for. For example, when providing managed configuration feedback, this key could be the managed configuration key. */
  key?: string;
  /** The severity of the app state. */
  severity?: "SEVERITY_UNSPECIFIED" | "INFO" | "ERROR" | (string & {});
  /** Optionally, a free-form message string to explain the app state. If the state was triggered by a particular value (e.g. a managed configuration value), it should be included in the message. */
  message?: string;
}

export const KeyedAppState: Schema.Schema<KeyedAppState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.optional(Schema.String),
    lastUpdateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "KeyedAppState" });

export interface ApplicationReport {
  /** The list of app events which have occurred in the last 30 hours. */
  events?: ReadonlyArray<ApplicationEvent>;
  /** The app version as displayed to the user. */
  versionName?: string;
  /** The package name of the app that installed this app. */
  installerPackageName?: string;
  /** The app version code, which can be used to determine whether one version is more recent than another. */
  versionCode?: number;
  /** Whether the app is user facing. */
  userFacingType?:
    | "USER_FACING_TYPE_UNSPECIFIED"
    | "NOT_USER_FACING"
    | "USER_FACING"
    | (string & {});
  /** Application state. */
  state?:
    | "APPLICATION_STATE_UNSPECIFIED"
    | "REMOVED"
    | "INSTALLED"
    | (string & {});
  /** Package name of the app. */
  packageName?: string;
  /** The display name of the app. */
  displayName?: string;
  /** List of keyed app states reported by the app. */
  keyedAppStates?: ReadonlyArray<KeyedAppState>;
  /** The SHA-1 hash of each android.content.pm.Signature (https://developer.android.com/reference/android/content/pm/Signature.html) associated with the app package. Each byte of each hash value is represented as a two-digit hexadecimal number. */
  signingKeyCertFingerprints?: ReadonlyArray<string>;
  /** The source of the package. */
  applicationSource?:
    | "APPLICATION_SOURCE_UNSPECIFIED"
    | "SYSTEM_APP_FACTORY_VERSION"
    | "SYSTEM_APP_UPDATED_VERSION"
    | "INSTALLED_FROM_PLAY_STORE"
    | "CUSTOM"
    | (string & {});
  /** The SHA-256 hash of the app's APK file, which can be used to verify the app hasn't been modified. Each byte of the hash value is represented as a two-digit hexadecimal number. */
  packageSha256Hash?: string;
}

export const ApplicationReport: Schema.Schema<ApplicationReport> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    events: Schema.optional(Schema.Array(ApplicationEvent)),
    versionName: Schema.optional(Schema.String),
    installerPackageName: Schema.optional(Schema.String),
    versionCode: Schema.optional(Schema.Number),
    userFacingType: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    packageName: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    keyedAppStates: Schema.optional(Schema.Array(KeyedAppState)),
    signingKeyCertFingerprints: Schema.optional(Schema.Array(Schema.String)),
    applicationSource: Schema.optional(Schema.String),
    packageSha256Hash: Schema.optional(Schema.String),
  }).annotate({ identifier: "ApplicationReport" });

export interface ExternalData {
  /** The absolute URL to the data, which must use either the http or https scheme. Android Device Policy doesn't provide any credentials in the GET request, so the URL must be publicly accessible. Including a long, random component in the URL may be used to prevent attackers from discovering the URL. */
  url?: string;
  /** The base-64 encoded SHA-256 hash of the content hosted at url. If the content doesn't match this hash, Android Device Policy won't use the data. */
  sha256Hash?: string;
}

export const ExternalData: Schema.Schema<ExternalData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    sha256Hash: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExternalData" });

export interface ManagedPropertyEntry {
  /** The human-readable name of the value. Localized. */
  name?: string;
  /** The machine-readable value of the entry, which should be used in the configuration. Not localized. */
  value?: string;
}

export const ManagedPropertyEntry: Schema.Schema<ManagedPropertyEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "ManagedPropertyEntry" });

export interface ManagedProperty {
  /** For CHOICE or MULTISELECT properties, the list of possible entries. */
  entries?: ReadonlyArray<ManagedPropertyEntry>;
  /** For BUNDLE_ARRAY properties, the list of nested properties. A BUNDLE_ARRAY property is at most two levels deep. */
  nestedProperties?: ReadonlyArray<ManagedProperty>;
  /** The unique key that the app uses to identify the property, e.g. "com.google.android.gm.fieldname". */
  key?: string;
  /** The default value of the property. BUNDLE_ARRAY properties don't have a default value. */
  defaultValue?: unknown;
  /** The name of the property. Localized. */
  title?: string;
  /** A longer description of the property, providing more detail of what it affects. Localized. */
  description?: string;
  /** The type of the property. */
  type?:
    | "MANAGED_PROPERTY_TYPE_UNSPECIFIED"
    | "BOOL"
    | "STRING"
    | "INTEGER"
    | "CHOICE"
    | "MULTISELECT"
    | "HIDDEN"
    | "BUNDLE"
    | "BUNDLE_ARRAY"
    | (string & {});
}

export const ManagedProperty: Schema.Schema<ManagedProperty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      entries: Schema.optional(Schema.Array(ManagedPropertyEntry)),
      nestedProperties: Schema.optional(Schema.Array(ManagedProperty)),
      key: Schema.optional(Schema.String),
      defaultValue: Schema.optional(Schema.Unknown),
      title: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      type: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "ManagedProperty",
  }) as any as Schema.Schema<ManagedProperty>;

export interface KeyIntegrityViolationEvent {
  /** Alias of the key. */
  keyAlias?: string;
  /** UID of the application which owns the key */
  applicationUid?: number;
}

export const KeyIntegrityViolationEvent: Schema.Schema<KeyIntegrityViolationEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyAlias: Schema.optional(Schema.String),
    applicationUid: Schema.optional(Schema.Number),
  }).annotate({ identifier: "KeyIntegrityViolationEvent" });

export interface Eid {
  /** Output only. The EID */
  eid?: string;
}

export const Eid: Schema.Schema<Eid> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eid: Schema.optional(Schema.String),
  }).annotate({ identifier: "Eid" });

export interface EidInfo {
  /** Output only. EID information for each eUICC chip. */
  eids?: ReadonlyArray<Eid>;
}

export const EidInfo: Schema.Schema<EidInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eids: Schema.optional(Schema.Array(Eid)),
  }).annotate({ identifier: "EidInfo" });

export interface CryptoSelfTestCompletedEvent {
  /** Whether the test succeeded. */
  success?: boolean;
}

export const CryptoSelfTestCompletedEvent: Schema.Schema<CryptoSelfTestCompletedEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    success: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "CryptoSelfTestCompletedEvent" });

export interface HardwareStatus {
  /** Current GPU temperatures in Celsius for each GPU on the device. */
  gpuTemperatures?: ReadonlyArray<number>;
  /** Current CPU temperatures in Celsius for each CPU on the device. */
  cpuTemperatures?: ReadonlyArray<number>;
  /** Current battery temperatures in Celsius for each battery on the device. */
  batteryTemperatures?: ReadonlyArray<number>;
  /** Current device skin temperatures in Celsius. */
  skinTemperatures?: ReadonlyArray<number>;
  /** Fan speeds in RPM for each fan on the device. Empty array means that there are no fans or fan speed is not supported on the system. */
  fanSpeeds?: ReadonlyArray<number>;
  /** CPU usages in percentage for each core available on the device. Usage is 0 for each unplugged core. Empty array implies that CPU usage is not supported in the system. */
  cpuUsages?: ReadonlyArray<number>;
  /** The time the measurements were taken. */
  createTime?: string;
}

export const HardwareStatus: Schema.Schema<HardwareStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gpuTemperatures: Schema.optional(Schema.Array(Schema.Number)),
    cpuTemperatures: Schema.optional(Schema.Array(Schema.Number)),
    batteryTemperatures: Schema.optional(Schema.Array(Schema.Number)),
    skinTemperatures: Schema.optional(Schema.Array(Schema.Number)),
    fanSpeeds: Schema.optional(Schema.Array(Schema.Number)),
    cpuUsages: Schema.optional(Schema.Array(Schema.Number)),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "HardwareStatus" });

export interface CertAuthorityInstalledEvent {
  /** The user in which the certificate install event happened. Only available for devices running Android 11 and above. */
  userId?: number;
  /** Whether the installation event succeeded. */
  success?: boolean;
  /** Subject of the certificate. */
  certificate?: string;
}

export const CertAuthorityInstalledEvent: Schema.Schema<CertAuthorityInstalledEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userId: Schema.optional(Schema.Number),
    success: Schema.optional(Schema.Boolean),
    certificate: Schema.optional(Schema.String),
  }).annotate({ identifier: "CertAuthorityInstalledEvent" });

export interface WifiSsid {
  /** Required. Wi-Fi SSID represented as a string. */
  wifiSsid?: string;
}

export const WifiSsid: Schema.Schema<WifiSsid> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    wifiSsid: Schema.optional(Schema.String),
  }).annotate({ identifier: "WifiSsid" });

export interface WifiSsidPolicy {
  /** Type of the Wi-Fi SSID policy to be applied. */
  wifiSsidPolicyType?:
    | "WIFI_SSID_POLICY_TYPE_UNSPECIFIED"
    | "WIFI_SSID_DENYLIST"
    | "WIFI_SSID_ALLOWLIST"
    | (string & {});
  /** Optional. List of Wi-Fi SSIDs that should be applied in the policy. This field must be non-empty when WifiSsidPolicyType is set to WIFI_SSID_ALLOWLIST. If this is set to a non-empty list, then a NonComplianceDetail detail with API_LEVEL is reported if the Android version is less than 13 and a NonComplianceDetail with MANAGEMENT_MODE is reported for non-company-owned devices. */
  wifiSsids?: ReadonlyArray<WifiSsid>;
}

export const WifiSsidPolicy: Schema.Schema<WifiSsidPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    wifiSsidPolicyType: Schema.optional(Schema.String),
    wifiSsids: Schema.optional(Schema.Array(WifiSsid)),
  }).annotate({ identifier: "WifiSsidPolicy" });

export interface EnterpriseUpgradeEvent {
  /** Output only. The upgrade state of the enterprise. */
  upgradeState?:
    | "UPGRADE_STATE_UNSPECIFIED"
    | "UPGRADE_STATE_SUCCEEDED"
    | (string & {});
  /** The name of upgraded enterprise in the format "enterprises/{enterprise}" */
  enterprise?: string;
}

export const EnterpriseUpgradeEvent: Schema.Schema<EnterpriseUpgradeEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    upgradeState: Schema.optional(Schema.String),
    enterprise: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnterpriseUpgradeEvent" });

export interface PasswordRequirements {
  /** The length of time after a device or work profile is unlocked using a strong form of authentication (password, PIN, pattern) that it can be unlocked using any other authentication method (e.g. fingerprint, trust agents, face). After the specified time period elapses, only strong forms of authentication can be used to unlock the device or work profile. */
  requirePasswordUnlock?:
    | "REQUIRE_PASSWORD_UNLOCK_UNSPECIFIED"
    | "USE_DEFAULT_DEVICE_TIMEOUT"
    | "REQUIRE_EVERY_DAY"
    | (string & {});
  /** Minimum number of symbols required in the password. Only enforced when password_quality is COMPLEX. */
  passwordMinimumSymbols?: number;
  /** The scope that the password requirement applies to. */
  passwordScope?:
    | "SCOPE_UNSPECIFIED"
    | "SCOPE_DEVICE"
    | "SCOPE_PROFILE"
    | (string & {});
  /** The minimum allowed password length. A value of 0 means there is no restriction. Only enforced when password_quality is NUMERIC, NUMERIC_COMPLEX, ALPHABETIC, ALPHANUMERIC, or COMPLEX. */
  passwordMinimumLength?: number;
  /** The length of the password history. After setting this field, the user won't be able to enter a new password that is the same as any password in the history. A value of 0 means there is no restriction. */
  passwordHistoryLength?: number;
  /** Minimum number of numerical digits required in the password. Only enforced when password_quality is COMPLEX. */
  passwordMinimumNumeric?: number;
  /** Minimum number of non-letter characters (numerical digits or symbols) required in the password. Only enforced when password_quality is COMPLEX. */
  passwordMinimumNonLetter?: number;
  /** Minimum number of upper case letters required in the password. Only enforced when password_quality is COMPLEX. */
  passwordMinimumUpperCase?: number;
  /** Controls whether a unified lock is allowed for the device and the work profile, on devices running Android 9 and above with a work profile. This can be set only if password_scope is set to SCOPE_PROFILE, the policy will be rejected otherwise. If user has not set a separate work lock and this field is set to REQUIRE_SEPARATE_WORK_LOCK, a NonComplianceDetail is reported with nonComplianceReason set to USER_ACTION. */
  unifiedLockSettings?:
    | "UNIFIED_LOCK_SETTINGS_UNSPECIFIED"
    | "ALLOW_UNIFIED_WORK_AND_PERSONAL_LOCK"
    | "REQUIRE_SEPARATE_WORK_LOCK"
    | (string & {});
  /** Minimum number of letters required in the password. Only enforced when password_quality is COMPLEX. */
  passwordMinimumLetters?: number;
  /** The required password quality. */
  passwordQuality?:
    | "PASSWORD_QUALITY_UNSPECIFIED"
    | "BIOMETRIC_WEAK"
    | "SOMETHING"
    | "NUMERIC"
    | "NUMERIC_COMPLEX"
    | "ALPHABETIC"
    | "ALPHANUMERIC"
    | "COMPLEX"
    | "COMPLEXITY_LOW"
    | "COMPLEXITY_MEDIUM"
    | "COMPLEXITY_HIGH"
    | (string & {});
  /** Number of incorrect device-unlock passwords that can be entered before a device is wiped. A value of 0 means there is no restriction. */
  maximumFailedPasswordsForWipe?: number;
  /** Password expiration timeout. */
  passwordExpirationTimeout?: string;
  /** Minimum number of lower case letters required in the password. Only enforced when password_quality is COMPLEX. */
  passwordMinimumLowerCase?: number;
}

export const PasswordRequirements: Schema.Schema<PasswordRequirements> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requirePasswordUnlock: Schema.optional(Schema.String),
    passwordMinimumSymbols: Schema.optional(Schema.Number),
    passwordScope: Schema.optional(Schema.String),
    passwordMinimumLength: Schema.optional(Schema.Number),
    passwordHistoryLength: Schema.optional(Schema.Number),
    passwordMinimumNumeric: Schema.optional(Schema.Number),
    passwordMinimumNonLetter: Schema.optional(Schema.Number),
    passwordMinimumUpperCase: Schema.optional(Schema.Number),
    unifiedLockSettings: Schema.optional(Schema.String),
    passwordMinimumLetters: Schema.optional(Schema.Number),
    passwordQuality: Schema.optional(Schema.String),
    maximumFailedPasswordsForWipe: Schema.optional(Schema.Number),
    passwordExpirationTimeout: Schema.optional(Schema.String),
    passwordMinimumLowerCase: Schema.optional(Schema.Number),
  }).annotate({ identifier: "PasswordRequirements" });

export interface ChoosePrivateKeyRule {
  /** The alias of the private key to be used. */
  privateKeyAlias?: string;
  /** The URL pattern to match against the URL of the request. If not set or empty, it matches all URLs. This uses the regular expression syntax of java.util.regex.Pattern. */
  urlPattern?: string;
  /** The package names to which this rule applies. The signing key certificate fingerprint of the app is verified against the signing key certificate fingerprints provided by Play Store and ApplicationPolicy.signingKeyCerts . If no package names are specified, then the alias is provided to all apps that call KeyChain.choosePrivateKeyAlias (https://developer.android.com/reference/android/security/KeyChain#choosePrivateKeyAlias%28android.app.Activity,%20android.security.KeyChainAliasCallback,%20java.lang.String[],%20java.security.Principal[],%20java.lang.String,%20int,%20java.lang.String%29) or any overloads (but not without calling KeyChain.choosePrivateKeyAlias, even on Android 11 and above). Any app with the same Android UID as a package specified here will have access when they call KeyChain.choosePrivateKeyAlias. */
  packageNames?: ReadonlyArray<string>;
}

export const ChoosePrivateKeyRule: Schema.Schema<ChoosePrivateKeyRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateKeyAlias: Schema.optional(Schema.String),
    urlPattern: Schema.optional(Schema.String),
    packageNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ChoosePrivateKeyRule" });

export interface ContentProviderEndpoint {
  /** This feature is not generally available. */
  uri?: string;
  /** This feature is not generally available. */
  packageName?: string;
  /** Required. This feature is not generally available. */
  signingCertsSha256?: ReadonlyArray<string>;
}

export const ContentProviderEndpoint: Schema.Schema<ContentProviderEndpoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    packageName: Schema.optional(Schema.String),
    signingCertsSha256: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ContentProviderEndpoint" });

export interface OncCertificateProvider {
  /** This feature is not generally available. */
  contentProviderEndpoint?: ContentProviderEndpoint;
  /** This feature is not generally available. */
  certificateReferences?: ReadonlyArray<string>;
}

export const OncCertificateProvider: Schema.Schema<OncCertificateProvider> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contentProviderEndpoint: Schema.optional(ContentProviderEndpoint),
    certificateReferences: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "OncCertificateProvider" });

export interface AlwaysOnVpnPackage {
  /** Disallows networking when the VPN is not connected. */
  lockdownEnabled?: boolean;
  /** The package name of the VPN app. */
  packageName?: string;
}

export const AlwaysOnVpnPackage: Schema.Schema<AlwaysOnVpnPackage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lockdownEnabled: Schema.optional(Schema.Boolean),
    packageName: Schema.optional(Schema.String),
  }).annotate({ identifier: "AlwaysOnVpnPackage" });

export interface KioskCustomization {
  /** Specifies whether system info and notifications are disabled in kiosk mode. */
  statusBar?:
    | "STATUS_BAR_UNSPECIFIED"
    | "NOTIFICATIONS_AND_SYSTEM_INFO_ENABLED"
    | "NOTIFICATIONS_AND_SYSTEM_INFO_DISABLED"
    | "SYSTEM_INFO_ONLY"
    | (string & {});
  /** Specifies whether the Settings app is allowed in kiosk mode. */
  deviceSettings?:
    | "DEVICE_SETTINGS_UNSPECIFIED"
    | "SETTINGS_ACCESS_ALLOWED"
    | "SETTINGS_ACCESS_BLOCKED"
    | (string & {});
  /** Specifies which navigation features are enabled (e.g. Home, Overview buttons) in kiosk mode. */
  systemNavigation?:
    | "SYSTEM_NAVIGATION_UNSPECIFIED"
    | "NAVIGATION_ENABLED"
    | "NAVIGATION_DISABLED"
    | "HOME_BUTTON_ONLY"
    | (string & {});
  /** Specifies whether system error dialogs for crashed or unresponsive apps are blocked in kiosk mode. When blocked, the system will force-stop the app as if the user chooses the "close app" option on the UI. */
  systemErrorWarnings?:
    | "SYSTEM_ERROR_WARNINGS_UNSPECIFIED"
    | "ERROR_AND_WARNINGS_ENABLED"
    | "ERROR_AND_WARNINGS_MUTED"
    | (string & {});
  /** Sets the behavior of a device in kiosk mode when a user presses and holds (long-presses) the Power button. */
  powerButtonActions?:
    | "POWER_BUTTON_ACTIONS_UNSPECIFIED"
    | "POWER_BUTTON_AVAILABLE"
    | "POWER_BUTTON_BLOCKED"
    | (string & {});
}

export const KioskCustomization: Schema.Schema<KioskCustomization> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    statusBar: Schema.optional(Schema.String),
    deviceSettings: Schema.optional(Schema.String),
    systemNavigation: Schema.optional(Schema.String),
    systemErrorWarnings: Schema.optional(Schema.String),
    powerButtonActions: Schema.optional(Schema.String),
  }).annotate({ identifier: "KioskCustomization" });

export interface UsageLog {
  /** Specifies which of the enabled log types can be uploaded over mobile data. By default logs are queued for upload when the device connects to WiFi. */
  uploadOnCellularAllowed?: ReadonlyArray<
    | "LOG_TYPE_UNSPECIFIED"
    | "SECURITY_LOGS"
    | "NETWORK_ACTIVITY_LOGS"
    | (string & {})
  >;
  /** Specifies which log types are enabled. Note that users will receive on-device messaging when usage logging is enabled. */
  enabledLogTypes?: ReadonlyArray<
    | "LOG_TYPE_UNSPECIFIED"
    | "SECURITY_LOGS"
    | "NETWORK_ACTIVITY_LOGS"
    | (string & {})
  >;
}

export const UsageLog: Schema.Schema<UsageLog> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uploadOnCellularAllowed: Schema.optional(Schema.Array(Schema.String)),
    enabledLogTypes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "UsageLog" });

export interface PackageNameList {
  /** A list of package names. */
  packageNames?: ReadonlyArray<string>;
}

export const PackageNameList: Schema.Schema<PackageNameList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    packageNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "PackageNameList" });

export interface PermissionGrant {
  /** The Android permission or group, e.g. android.permission.READ_CALENDAR or android.permission_group.CALENDAR. */
  permission?: string;
  /** The policy for granting the permission. */
  policy?:
    | "PERMISSION_POLICY_UNSPECIFIED"
    | "PROMPT"
    | "GRANT"
    | "DENY"
    | (string & {});
}

export const PermissionGrant: Schema.Schema<PermissionGrant> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permission: Schema.optional(Schema.String),
    policy: Schema.optional(Schema.String),
  }).annotate({ identifier: "PermissionGrant" });

export interface UserFacingMessage {
  /** A map containing pairs, where locale is a well-formed BCP 47 language (https://www.w3.org/International/articles/language-tags/) code, such as en-US, es-ES, or fr. */
  localizedMessages?: Record<string, string>;
  /** The default message displayed if no localized message is specified or the user's locale doesn't match with any of the localized messages. A default message must be provided if any localized messages are provided. */
  defaultMessage?: string;
}

export const UserFacingMessage: Schema.Schema<UserFacingMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    localizedMessages: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    defaultMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserFacingMessage" });

export interface DeviceRadioState {
  /** Optional. Controls whether the user is allowed to add eSIM profiles. */
  userInitiatedAddEsimSettings?:
    | "USER_INITIATED_ADD_ESIM_SETTINGS_UNSPECIFIED"
    | "USER_INITIATED_ADD_ESIM_ALLOWED"
    | "USER_INITIATED_ADD_ESIM_DISALLOWED"
    | (string & {});
  /** Controls current state of Wi-Fi and if user can change its state. */
  wifiState?:
    | "WIFI_STATE_UNSPECIFIED"
    | "WIFI_STATE_USER_CHOICE"
    | "WIFI_ENABLED"
    | "WIFI_DISABLED"
    | (string & {});
  /** Controls whether cellular 2G setting can be toggled by the user or not. */
  cellularTwoGState?:
    | "CELLULAR_TWO_G_STATE_UNSPECIFIED"
    | "CELLULAR_TWO_G_USER_CHOICE"
    | "CELLULAR_TWO_G_DISABLED"
    | (string & {});
  /** The minimum required security level of Wi-Fi networks that the device can connect to. */
  minimumWifiSecurityLevel?:
    | "MINIMUM_WIFI_SECURITY_LEVEL_UNSPECIFIED"
    | "OPEN_NETWORK_SECURITY"
    | "PERSONAL_NETWORK_SECURITY"
    | "ENTERPRISE_NETWORK_SECURITY"
    | "ENTERPRISE_BIT192_NETWORK_SECURITY"
    | (string & {});
  /** Controls whether airplane mode can be toggled by the user or not. */
  airplaneModeState?:
    | "AIRPLANE_MODE_STATE_UNSPECIFIED"
    | "AIRPLANE_MODE_USER_CHOICE"
    | "AIRPLANE_MODE_DISABLED"
    | (string & {});
  /** Controls the state of the ultra wideband setting and whether the user can toggle it on or off. */
  ultraWidebandState?:
    | "ULTRA_WIDEBAND_STATE_UNSPECIFIED"
    | "ULTRA_WIDEBAND_USER_CHOICE"
    | "ULTRA_WIDEBAND_DISABLED"
    | (string & {});
}

export const DeviceRadioState: Schema.Schema<DeviceRadioState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userInitiatedAddEsimSettings: Schema.optional(Schema.String),
    wifiState: Schema.optional(Schema.String),
    cellularTwoGState: Schema.optional(Schema.String),
    minimumWifiSecurityLevel: Schema.optional(Schema.String),
    airplaneModeState: Schema.optional(Schema.String),
    ultraWidebandState: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeviceRadioState" });

export interface CrossProfilePolicies {
  /** List of apps which are excluded from the ShowWorkContactsInPersonalProfile setting. For this to be set, ShowWorkContactsInPersonalProfile must be set to one of the following values: SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_ALLOWED. In this case, these exemptions act as a blocklist. SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_DISALLOWED. In this case, these exemptions act as an allowlist. SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_DISALLOWED_EXCEPT_SYSTEM. In this case, these exemptions act as an allowlist, in addition to the already allowlisted system apps.Supported on Android 14 and above. A NonComplianceDetail with API_LEVEL is reported if the Android version is less than 14. */
  exemptionsToShowWorkContactsInPersonalProfile?: PackageNameList;
  /** Whether text copied from one profile (personal or work) can be pasted in the other profile. */
  crossProfileCopyPaste?:
    | "CROSS_PROFILE_COPY_PASTE_UNSPECIFIED"
    | "COPY_FROM_WORK_TO_PERSONAL_DISALLOWED"
    | "CROSS_PROFILE_COPY_PASTE_ALLOWED"
    | (string & {});
  /** Whether data from one profile (personal or work) can be shared with apps in the other profile. Specifically controls simple data sharing via intents. Management of other cross-profile communication channels, such as contact search, copy/paste, or connected work & personal apps, are configured separately. */
  crossProfileDataSharing?:
    | "CROSS_PROFILE_DATA_SHARING_UNSPECIFIED"
    | "CROSS_PROFILE_DATA_SHARING_DISALLOWED"
    | "DATA_SHARING_FROM_WORK_TO_PERSONAL_DISALLOWED"
    | "CROSS_PROFILE_DATA_SHARING_ALLOWED"
    | (string & {});
  /** Optional. Controls whether personal profile apps can invoke app functions exposed by apps in the work profile. */
  crossProfileAppFunctions?:
    | "CROSS_PROFILE_APP_FUNCTIONS_UNSPECIFIED"
    | "CROSS_PROFILE_APP_FUNCTIONS_DISALLOWED"
    | "CROSS_PROFILE_APP_FUNCTIONS_ALLOWED"
    | (string & {});
  /** Whether personal apps can access contacts stored in the work profile.See also exemptions_to_show_work_contacts_in_personal_profile. */
  showWorkContactsInPersonalProfile?:
    | "SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_UNSPECIFIED"
    | "SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_DISALLOWED"
    | "SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_ALLOWED"
    | "SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_DISALLOWED_EXCEPT_SYSTEM"
    | (string & {});
  /** Specifies the default behaviour for work profile widgets. If the policy does not specify work_profile_widgets for a specific application, it will behave according to the value specified here. */
  workProfileWidgetsDefault?:
    | "WORK_PROFILE_WIDGETS_DEFAULT_UNSPECIFIED"
    | "WORK_PROFILE_WIDGETS_DEFAULT_ALLOWED"
    | "WORK_PROFILE_WIDGETS_DEFAULT_DISALLOWED"
    | (string & {});
}

export const CrossProfilePolicies: Schema.Schema<CrossProfilePolicies> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exemptionsToShowWorkContactsInPersonalProfile:
      Schema.optional(PackageNameList),
    crossProfileCopyPaste: Schema.optional(Schema.String),
    crossProfileDataSharing: Schema.optional(Schema.String),
    crossProfileAppFunctions: Schema.optional(Schema.String),
    showWorkContactsInPersonalProfile: Schema.optional(Schema.String),
    workProfileWidgetsDefault: Schema.optional(Schema.String),
  }).annotate({ identifier: "CrossProfilePolicies" });

export interface ApplicationReportingSettings {
  /** Whether removed apps are included in application reports. */
  includeRemovedApps?: boolean;
}

export const ApplicationReportingSettings: Schema.Schema<ApplicationReportingSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includeRemovedApps: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ApplicationReportingSettings" });

export interface StatusReportingSettings {
  /** Application reporting settings. Only applicable if application_reports_enabled is true. */
  applicationReportingSettings?: ApplicationReportingSettings;
  /** Whether power management event reporting is enabled. Report data is not available for personally owned devices with work profiles. */
  powerManagementEventsEnabled?: boolean;
  /** Whether network info reporting is enabled. */
  networkInfoEnabled?: boolean;
  /** Whether software info reporting is enabled. */
  softwareInfoEnabled?: boolean;
  /** Whether Common Criteria Mode reporting is enabled. This is supported only on company-owned devices. */
  commonCriteriaModeEnabled?: boolean;
  /** Whether system properties reporting is enabled. */
  systemPropertiesEnabled?: boolean;
  /** Optional. Whether defaultApplicationInfo reporting is enabled. */
  defaultApplicationInfoReportingEnabled?: boolean;
  /** Whether device settings reporting is enabled. */
  deviceSettingsEnabled?: boolean;
  /** Whether app reports are enabled. */
  applicationReportsEnabled?: boolean;
  /** Whether memory event reporting is enabled. */
  memoryInfoEnabled?: boolean;
  /** Whether hardware status reporting is enabled. Report data is not available for personally owned devices with work profiles. */
  hardwareStatusEnabled?: boolean;
  /** Whether displays reporting is enabled. Report data is not available for personally owned devices with work profiles. */
  displayInfoEnabled?: boolean;
}

export const StatusReportingSettings: Schema.Schema<StatusReportingSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationReportingSettings: Schema.optional(ApplicationReportingSettings),
    powerManagementEventsEnabled: Schema.optional(Schema.Boolean),
    networkInfoEnabled: Schema.optional(Schema.Boolean),
    softwareInfoEnabled: Schema.optional(Schema.Boolean),
    commonCriteriaModeEnabled: Schema.optional(Schema.Boolean),
    systemPropertiesEnabled: Schema.optional(Schema.Boolean),
    defaultApplicationInfoReportingEnabled: Schema.optional(Schema.Boolean),
    deviceSettingsEnabled: Schema.optional(Schema.Boolean),
    applicationReportsEnabled: Schema.optional(Schema.Boolean),
    memoryInfoEnabled: Schema.optional(Schema.Boolean),
    hardwareStatusEnabled: Schema.optional(Schema.Boolean),
    displayInfoEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "StatusReportingSettings" });

export interface ExtensionConfig {
  /** Fully qualified class name of the receiver service class for Android Device Policy to notify the extension app of any local command status updates. The service must be exported in the extension app's AndroidManifest.xml and extend NotificationReceiverService (https://developers.google.com/android/management/reference/amapi/com/google/android/managementapi/notification/NotificationReceiverService) (see Integrate with the AMAPI SDK (https://developers.google.com/android/management/sdk-integration) guide for more details). */
  notificationReceiver?: string;
  /** Hex-encoded SHA-256 hashes of the signing key certificates of the extension app. Only hexadecimal string representations of 64 characters are valid.The signing key certificate fingerprints are always obtained from the Play Store and this field is used to provide additional signing key certificate fingerprints. However, if the application is not available on the Play Store, this field needs to be set. A NonComplianceDetail with INVALID_VALUE is reported if this field is not set when the application is not available on the Play Store.The signing key certificate fingerprint of the extension app on the device must match one of the signing key certificate fingerprints obtained from the Play Store or the ones provided in this field for the app to be able to communicate with Android Device Policy.In production use cases, it is recommended to leave this empty. */
  signingKeyFingerprintsSha256?: ReadonlyArray<string>;
}

export const ExtensionConfig: Schema.Schema<ExtensionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notificationReceiver: Schema.optional(Schema.String),
    signingKeyFingerprintsSha256: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ExtensionConfig" });

export interface ManagedConfigurationTemplate {
  /** The ID of the managed configurations template. */
  templateId?: string;
  /** Optional, a map containing configuration variables defined for the configuration. */
  configurationVariables?: Record<string, string>;
}

export const ManagedConfigurationTemplate: Schema.Schema<ManagedConfigurationTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    templateId: Schema.optional(Schema.String),
    configurationVariables: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({ identifier: "ManagedConfigurationTemplate" });

export interface ApplicationSigningKeyCert {
  /** Required. The SHA-256 hash value of the signing key certificate of the app. This must be a valid SHA-256 hash value, i.e. 32 bytes. */
  signingKeyCertFingerprintSha256?: string;
}

export const ApplicationSigningKeyCert: Schema.Schema<ApplicationSigningKeyCert> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    signingKeyCertFingerprintSha256: Schema.optional(Schema.String),
  }).annotate({ identifier: "ApplicationSigningKeyCert" });

export interface InstallConstraint {
  /** Optional. Network type constraint. */
  networkTypeConstraint?:
    | "NETWORK_TYPE_CONSTRAINT_UNSPECIFIED"
    | "INSTALL_ON_ANY_NETWORK"
    | "INSTALL_ONLY_ON_UNMETERED_NETWORK"
    | (string & {});
  /** Optional. Device idle constraint. */
  deviceIdleConstraint?:
    | "DEVICE_IDLE_CONSTRAINT_UNSPECIFIED"
    | "DEVICE_IDLE_NOT_REQUIRED"
    | "INSTALL_ONLY_WHEN_DEVICE_IDLE"
    | (string & {});
  /** Optional. Charging constraint. */
  chargingConstraint?:
    | "CHARGING_CONSTRAINT_UNSPECIFIED"
    | "CHARGING_NOT_REQUIRED"
    | "INSTALL_ONLY_WHEN_CHARGING"
    | (string & {});
}

export const InstallConstraint: Schema.Schema<InstallConstraint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    networkTypeConstraint: Schema.optional(Schema.String),
    deviceIdleConstraint: Schema.optional(Schema.String),
    chargingConstraint: Schema.optional(Schema.String),
  }).annotate({ identifier: "InstallConstraint" });

export interface CustomAppConfig {
  /** Optional. User uninstall settings of the custom app. */
  userUninstallSettings?:
    | "USER_UNINSTALL_SETTINGS_UNSPECIFIED"
    | "DISALLOW_UNINSTALL_BY_USER"
    | "ALLOW_UNINSTALL_BY_USER"
    | (string & {});
}

export const CustomAppConfig: Schema.Schema<CustomAppConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userUninstallSettings: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomAppConfig" });

export interface Role {
  /** Required. The type of the role an app can have. */
  roleType?:
    | "ROLE_TYPE_UNSPECIFIED"
    | "COMPANION_APP"
    | "KIOSK"
    | "MOBILE_THREAT_DEFENSE_ENDPOINT_DETECTION_RESPONSE"
    | "SYSTEM_HEALTH_MONITORING"
    | (string & {});
}

export const Role: Schema.Schema<Role> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    roleType: Schema.optional(Schema.String),
  }).annotate({ identifier: "Role" });

export interface ApplicationPolicy {
  /** The default policy for all permissions requested by the app. If specified, this overrides the policy-level default_permission_policy which applies to all apps. It does not override the permission_grants which applies to all apps. */
  defaultPermissionPolicy?:
    | "PERMISSION_POLICY_UNSPECIFIED"
    | "PROMPT"
    | "GRANT"
    | "DENY"
    | (string & {});
  /** Configuration to enable this app as an extension app, with the capability of interacting with Android Device Policy offline.This field can be set for at most one app. If there is any app with COMPANION_APP role, this field cannot be set.The signing key certificate fingerprint of the app on the device must match one of the entries in ApplicationPolicy.signingKeyCerts or ExtensionConfig.signingKeyFingerprintsSha256 (deprecated) or the signing key certificate fingerprints obtained from Play Store for the app to be able to communicate with Android Device Policy. If the app is not on Play Store and if ApplicationPolicy.signingKeyCerts and ExtensionConfig.signingKeyFingerprintsSha256 (deprecated) are not set, a NonComplianceDetail with INVALID_VALUE is reported. */
  extensionConfig?: ExtensionConfig;
  /** List of the app’s track IDs that a device belonging to the enterprise can access. If the list contains multiple track IDs, devices receive the latest version among all accessible tracks. If the list contains no track IDs, devices only have access to the app’s production track. More details about each track are available in AppTrackInfo. */
  accessibleTrackIds?: ReadonlyArray<string>;
  /** Whether the app is disabled. When disabled, the app data is still preserved. */
  disabled?: boolean;
  /** Optional. Specifies whether user control is permitted for the app. User control includes user actions like force-stopping and clearing app data. Certain types of apps have special treatment, see USER_CONTROL_SETTINGS_UNSPECIFIED and USER_CONTROL_ALLOWED for more details. */
  userControlSettings?:
    | "USER_CONTROL_SETTINGS_UNSPECIFIED"
    | "USER_CONTROL_ALLOWED"
    | "USER_CONTROL_DISALLOWED"
    | (string & {});
  /** Controls whether the app can communicate with itself across a device’s work and personal profiles, subject to user consent. */
  connectedWorkAndPersonalApp?:
    | "CONNECTED_WORK_AND_PERSONAL_APP_UNSPECIFIED"
    | "CONNECTED_WORK_AND_PERSONAL_APP_DISALLOWED"
    | "CONNECTED_WORK_AND_PERSONAL_APP_ALLOWED"
    | (string & {});
  /** The type of installation to perform. */
  installType?:
    | "INSTALL_TYPE_UNSPECIFIED"
    | "PREINSTALLED"
    | "FORCE_INSTALLED"
    | "BLOCKED"
    | "AVAILABLE"
    | "REQUIRED_FOR_SETUP"
    | "KIOSK"
    | "CUSTOM"
    | (string & {});
  /** Specifies whether the app installed in the work profile is allowed to add widgets to the home screen. */
  workProfileWidgets?:
    | "WORK_PROFILE_WIDGETS_UNSPECIFIED"
    | "WORK_PROFILE_WIDGETS_ALLOWED"
    | "WORK_PROFILE_WIDGETS_DISALLOWED"
    | (string & {});
  /** Controls the auto-update mode for the app. */
  autoUpdateMode?:
    | "AUTO_UPDATE_MODE_UNSPECIFIED"
    | "AUTO_UPDATE_DEFAULT"
    | "AUTO_UPDATE_POSTPONED"
    | "AUTO_UPDATE_HIGH_PRIORITY"
    | (string & {});
  /** The managed configurations template for the app, saved from the managed configurations iframe. This field is ignored if managed_configuration is set. */
  managedConfigurationTemplate?: ManagedConfigurationTemplate;
  /** Optional. Whether the app is allowed to act as a credential provider on Android 14 and above. */
  credentialProviderPolicy?:
    | "CREDENTIAL_PROVIDER_POLICY_UNSPECIFIED"
    | "CREDENTIAL_PROVIDER_ALLOWED"
    | (string & {});
  /** Optional. Amongst apps with installType set to: FORCE_INSTALLED PREINSTALLEDthis controls the relative priority of installation. A value of 0 (default) means this app has no priority over other apps. For values between 1 and 10,000, a lower value means a higher priority. Values outside of the range 0 to 10,000 inclusive are rejected. */
  installPriority?: number;
  /** Whether the app is allowed to lock itself in full-screen mode. DEPRECATED. Use InstallType KIOSK or kioskCustomLauncherEnabled to configure a dedicated device. */
  lockTaskAllowed?: boolean;
  /** Optional. Signing key certificates of the app.This field is required in the following cases: The app has installType set to CUSTOM (i.e. a custom app). The app has roles set to a nonempty list and the app does not exist on the Play Store. The app has extensionConfig set (i.e. an extension app) but ExtensionConfig.signingKeyFingerprintsSha256 (deprecated) is not set and the app does not exist on the Play Store.If this field is not set for a custom app, the policy is rejected. If it is not set when required for a non-custom app, a NonComplianceDetail with INVALID_VALUE is reported.For other cases, this field is optional and the signing key certificates obtained from Play Store are used.See following policy settings to see how this field is used: choosePrivateKeyRules ApplicationPolicy.InstallType.CUSTOM ApplicationPolicy.extensionConfig ApplicationPolicy.roles */
  signingKeyCerts?: ReadonlyArray<ApplicationSigningKeyCert>;
  /** The scopes delegated to the app from Android Device Policy. These provide additional privileges for the applications they are applied to. */
  delegatedScopes?: ReadonlyArray<
    | "DELEGATED_SCOPE_UNSPECIFIED"
    | "CERT_INSTALL"
    | "MANAGED_CONFIGURATIONS"
    | "BLOCK_UNINSTALL"
    | "PERMISSION_GRANT"
    | "PACKAGE_ACCESS"
    | "ENABLE_SYSTEM_APP"
    | "NETWORK_ACTIVITY_LOGS"
    | "SECURITY_LOGS"
    | "CERT_SELECTION"
    | (string & {})
  >;
  /** Explicit permission grants or denials for the app. These values override the default_permission_policy and permission_grants which apply to all apps. */
  permissionGrants?: ReadonlyArray<PermissionGrant>;
  /** Optional. ID of the preferential network the application uses. There must be a configuration for the specified network ID in preferentialNetworkServiceConfigs. If set to PREFERENTIAL_NETWORK_ID_UNSPECIFIED, the application will use the default network ID specified in defaultPreferentialNetworkId. See the documentation of defaultPreferentialNetworkId for the list of apps excluded from this defaulting. This applies on both work profiles and fully managed devices on Android 13 and above. */
  preferentialNetworkId?:
    | "PREFERENTIAL_NETWORK_ID_UNSPECIFIED"
    | "NO_PREFERENTIAL_NETWORK"
    | "PREFERENTIAL_NETWORK_ID_ONE"
    | "PREFERENTIAL_NETWORK_ID_TWO"
    | "PREFERENTIAL_NETWORK_ID_THREE"
    | "PREFERENTIAL_NETWORK_ID_FOUR"
    | "PREFERENTIAL_NETWORK_ID_FIVE"
    | (string & {});
  /** The minimum version of the app that runs on the device. If set, the device attempts to update the app to at least this version code. If the app is not up-to-date, the device will contain a NonComplianceDetail with non_compliance_reason set to APP_NOT_UPDATED. The app must already be published to Google Play with a version code greater than or equal to this value. At most 20 apps may specify a minimum version code per policy. */
  minimumVersionCode?: number;
  /** Specifies whether the app is allowed networking when the VPN is not connected and alwaysOnVpnPackage.lockdownEnabled is enabled. If set to VPN_LOCKDOWN_ENFORCED, the app is not allowed networking, and if set to VPN_LOCKDOWN_EXEMPTION, the app is allowed networking. Only supported on devices running Android 10 and above. If this is not supported by the device, the device will contain a NonComplianceDetail with non_compliance_reason set to API_LEVEL and a fieldPath. If this is not applicable to the app, the device will contain a NonComplianceDetail with non_compliance_reason set to UNSUPPORTED and a fieldPath. The fieldPath is set to applications[i].alwaysOnVpnLockdownExemption, where i is the index of the package in the applications policy. */
  alwaysOnVpnLockdownExemption?:
    | "ALWAYS_ON_VPN_LOCKDOWN_EXEMPTION_UNSPECIFIED"
    | "VPN_LOCKDOWN_ENFORCED"
    | "VPN_LOCKDOWN_EXEMPTION"
    | (string & {});
  /** Optional. The constraints for installing the app. You can specify a maximum of one InstallConstraint. Multiple constraints are rejected. */
  installConstraint?: ReadonlyArray<InstallConstraint>;
  /** Managed configuration applied to the app. The format for the configuration is dictated by the ManagedProperty values supported by the app. Each field name in the managed configuration must match the key field of the ManagedProperty. The field value must be compatible with the type of the ManagedProperty: *type* *JSON value* BOOL true or false STRING string INTEGER number CHOICE string MULTISELECT array of strings HIDDEN string BUNDLE_ARRAY array of objects Note: string values cannot be longer than 65535 characters. */
  managedConfiguration?: Record<string, unknown>;
  /** Optional. Configuration for this custom app.install_type must be set to CUSTOM for this to be set. */
  customAppConfig?: CustomAppConfig;
  /** Optional. Roles the app has.Apps having certain roles can be exempted from power and background execution restrictions, suspension and hibernation on Android 14 and above. The user control can also be disallowed for apps with certain roles on Android 11 and above. Refer to the documentation of each RoleType for more details.The app is notified about the roles that are set for it if the app has a notification receiver service with . The app is notified whenever its roles are updated or after the app is installed when it has nonempty list of roles. The app can use this notification to bootstrap itself after the installation. See Integrate with the AMAPI SDK (https://developers.google.com/android/management/sdk-integration) and Manage app roles (https://developers.google.com/android/management/app-roles) guides for more details on the requirements for the service.For the exemptions to be applied and the app to be notified about the roles, the signing key certificate fingerprint of the app on the device must match one of the signing key certificate fingerprints obtained from Play Store or one of the entries in ApplicationPolicy.signingKeyCerts. Otherwise, a NonComplianceDetail with APP_SIGNING_CERT_MISMATCH is reported.There must not be duplicate roles with the same roleType. Multiple apps cannot hold a role with the same roleType. A role with type ROLE_TYPE_UNSPECIFIED is not allowed. */
  roles?: ReadonlyArray<Role>;
  /** The package name of the app. For example, com.google.android.youtube for the YouTube app. */
  packageName?: string;
}

export const ApplicationPolicy: Schema.Schema<ApplicationPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultPermissionPolicy: Schema.optional(Schema.String),
    extensionConfig: Schema.optional(ExtensionConfig),
    accessibleTrackIds: Schema.optional(Schema.Array(Schema.String)),
    disabled: Schema.optional(Schema.Boolean),
    userControlSettings: Schema.optional(Schema.String),
    connectedWorkAndPersonalApp: Schema.optional(Schema.String),
    installType: Schema.optional(Schema.String),
    workProfileWidgets: Schema.optional(Schema.String),
    autoUpdateMode: Schema.optional(Schema.String),
    managedConfigurationTemplate: Schema.optional(ManagedConfigurationTemplate),
    credentialProviderPolicy: Schema.optional(Schema.String),
    installPriority: Schema.optional(Schema.Number),
    lockTaskAllowed: Schema.optional(Schema.Boolean),
    signingKeyCerts: Schema.optional(Schema.Array(ApplicationSigningKeyCert)),
    delegatedScopes: Schema.optional(Schema.Array(Schema.String)),
    permissionGrants: Schema.optional(Schema.Array(PermissionGrant)),
    preferentialNetworkId: Schema.optional(Schema.String),
    minimumVersionCode: Schema.optional(Schema.Number),
    alwaysOnVpnLockdownExemption: Schema.optional(Schema.String),
    installConstraint: Schema.optional(Schema.Array(InstallConstraint)),
    managedConfiguration: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    customAppConfig: Schema.optional(CustomAppConfig),
    roles: Schema.optional(Schema.Array(Role)),
    packageName: Schema.optional(Schema.String),
  }).annotate({ identifier: "ApplicationPolicy" });

export interface LaunchAppAction {
  /** Package name of app to be launched */
  packageName?: string;
}

export const LaunchAppAction: Schema.Schema<LaunchAppAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    packageName: Schema.optional(Schema.String),
  }).annotate({ identifier: "LaunchAppAction" });

export interface SetupAction {
  /** Title of this action. */
  title?: UserFacingMessage;
  /** Description of this action. */
  description?: UserFacingMessage;
  /** An action to launch an app. The app will be launched with an intent containing an extra with key com.google.android.apps.work.clouddpc.EXTRA_LAUNCHED_AS_SETUP_ACTION set to the boolean value true to indicate that this is a setup action flow. If SetupAction references an app, the corresponding installType in the application policy must be set as REQUIRED_FOR_SETUP or said setup will fail. */
  launchApp?: LaunchAppAction;
}

export const SetupAction: Schema.Schema<SetupAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(UserFacingMessage),
    description: Schema.optional(UserFacingMessage),
    launchApp: Schema.optional(LaunchAppAction),
  }).annotate({ identifier: "SetupAction" });

export interface ProxyInfo {
  /** The host of the direct proxy. */
  host?: string;
  /** The URI of the PAC script used to configure the proxy. */
  pacUri?: string;
  /** The port of the direct proxy. */
  port?: number;
  /** For a direct proxy, the hosts for which the proxy is bypassed. The host names may contain wildcards such as *.example.com. */
  excludedHosts?: ReadonlyArray<string>;
}

export const ProxyInfo: Schema.Schema<ProxyInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    host: Schema.optional(Schema.String),
    pacUri: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
    excludedHosts: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ProxyInfo" });

export interface PreferentialNetworkServiceConfig {
  /** Optional. Whether fallback to the device-wide default network is allowed. If this is set to FALLBACK_TO_DEFAULT_CONNECTION_ALLOWED, then nonMatchingNetworks must not be set to NON_MATCHING_NETWORKS_DISALLOWED, the policy will be rejected otherwise. Note: If this is set to FALLBACK_TO_DEFAULT_CONNECTION_DISALLOWED, applications are not able to access the internet if the 5G slice is not available. */
  fallbackToDefaultConnection?:
    | "FALLBACK_TO_DEFAULT_CONNECTION_UNSPECIFIED"
    | "FALLBACK_TO_DEFAULT_CONNECTION_ALLOWED"
    | "FALLBACK_TO_DEFAULT_CONNECTION_DISALLOWED"
    | (string & {});
  /** Optional. Whether apps this configuration applies to are blocked from using networks other than the preferential service. If this is set to NON_MATCHING_NETWORKS_DISALLOWED, then fallbackToDefaultConnection must be set to FALLBACK_TO_DEFAULT_CONNECTION_DISALLOWED. */
  nonMatchingNetworks?:
    | "NON_MATCHING_NETWORKS_UNSPECIFIED"
    | "NON_MATCHING_NETWORKS_ALLOWED"
    | "NON_MATCHING_NETWORKS_DISALLOWED"
    | (string & {});
  /** Required. Preferential network identifier. This must not be set to NO_PREFERENTIAL_NETWORK or PREFERENTIAL_NETWORK_ID_UNSPECIFIED, the policy will be rejected otherwise. */
  preferentialNetworkId?:
    | "PREFERENTIAL_NETWORK_ID_UNSPECIFIED"
    | "NO_PREFERENTIAL_NETWORK"
    | "PREFERENTIAL_NETWORK_ID_ONE"
    | "PREFERENTIAL_NETWORK_ID_TWO"
    | "PREFERENTIAL_NETWORK_ID_THREE"
    | "PREFERENTIAL_NETWORK_ID_FOUR"
    | "PREFERENTIAL_NETWORK_ID_FIVE"
    | (string & {});
}

export const PreferentialNetworkServiceConfig: Schema.Schema<PreferentialNetworkServiceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fallbackToDefaultConnection: Schema.optional(Schema.String),
    nonMatchingNetworks: Schema.optional(Schema.String),
    preferentialNetworkId: Schema.optional(Schema.String),
  }).annotate({ identifier: "PreferentialNetworkServiceConfig" });

export interface PreferentialNetworkServiceSettings {
  /** Required. Default preferential network ID for the applications that are not in applications or if ApplicationPolicy.preferentialNetworkId is set to PREFERENTIAL_NETWORK_ID_UNSPECIFIED. There must be a configuration for the specified network ID in preferentialNetworkServiceConfigs, unless this is set to NO_PREFERENTIAL_NETWORK. If set to PREFERENTIAL_NETWORK_ID_UNSPECIFIED or unset, this defaults to NO_PREFERENTIAL_NETWORK. Note: If the default preferential network is misconfigured, applications with no ApplicationPolicy.preferentialNetworkId set are not able to access the internet. This setting does not apply to the following critical apps: com.google.android.apps.work.clouddpc com.google.android.gmsApplicationPolicy.preferentialNetworkId can still be used to configure the preferential network for them. */
  defaultPreferentialNetworkId?:
    | "PREFERENTIAL_NETWORK_ID_UNSPECIFIED"
    | "NO_PREFERENTIAL_NETWORK"
    | "PREFERENTIAL_NETWORK_ID_ONE"
    | "PREFERENTIAL_NETWORK_ID_TWO"
    | "PREFERENTIAL_NETWORK_ID_THREE"
    | "PREFERENTIAL_NETWORK_ID_FOUR"
    | "PREFERENTIAL_NETWORK_ID_FIVE"
    | (string & {});
  /** Required. Preferential network service configurations which enables having multiple enterprise slices. There must not be multiple configurations with the same preferentialNetworkId. If a configuration is not referenced by any application by setting ApplicationPolicy.preferentialNetworkId or by setting defaultPreferentialNetworkId, it will be ignored. For devices on 4G networks, enterprise APN needs to be configured additionally to set up data call for preferential network service. These APNs can be added using apnPolicy. */
  preferentialNetworkServiceConfigs?: ReadonlyArray<PreferentialNetworkServiceConfig>;
}

export const PreferentialNetworkServiceSettings: Schema.Schema<PreferentialNetworkServiceSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultPreferentialNetworkId: Schema.optional(Schema.String),
    preferentialNetworkServiceConfigs: Schema.optional(
      Schema.Array(PreferentialNetworkServiceConfig),
    ),
  }).annotate({ identifier: "PreferentialNetworkServiceSettings" });

export interface WifiRoamingSetting {
  /** Required. Wi-Fi roaming mode for the specified SSID. */
  wifiRoamingMode?:
    | "WIFI_ROAMING_MODE_UNSPECIFIED"
    | "WIFI_ROAMING_DISABLED"
    | "WIFI_ROAMING_DEFAULT"
    | "WIFI_ROAMING_AGGRESSIVE"
    | (string & {});
  /** Required. SSID of the Wi-Fi network. */
  wifiSsid?: string;
}

export const WifiRoamingSetting: Schema.Schema<WifiRoamingSetting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    wifiRoamingMode: Schema.optional(Schema.String),
    wifiSsid: Schema.optional(Schema.String),
  }).annotate({ identifier: "WifiRoamingSetting" });

export interface WifiRoamingPolicy {
  /** Optional. Wi-Fi roaming settings. SSIDs provided in this list must be unique, the policy will be rejected otherwise. */
  wifiRoamingSettings?: ReadonlyArray<WifiRoamingSetting>;
}

export const WifiRoamingPolicy: Schema.Schema<WifiRoamingPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    wifiRoamingSettings: Schema.optional(Schema.Array(WifiRoamingSetting)),
  }).annotate({ identifier: "WifiRoamingPolicy" });

export interface PrivateDnsSettings {
  /** Optional. The configuration mode for device's global private DNS settings. If this is set to PRIVATE_DNS_SPECIFIED_HOST, then private_dns_host must be set. */
  privateDnsMode?:
    | "PRIVATE_DNS_MODE_UNSPECIFIED"
    | "PRIVATE_DNS_USER_CHOICE"
    | "PRIVATE_DNS_AUTOMATIC"
    | "PRIVATE_DNS_SPECIFIED_HOST"
    | (string & {});
  /** Optional. The hostname of the DNS server. This must be set if and only if private_dns_mode is set to PRIVATE_DNS_SPECIFIED_HOST. Supported on Android 10 and above on fully managed devices. A NonComplianceDetail with MANAGEMENT_MODE is reported on other management modes. A NonComplianceDetail with API_LEVEL is reported if the Android version is less than 10. A NonComplianceDetail with PENDING is reported if the device is not connected to a network. A NonComplianceDetail with nonComplianceReason INVALID_VALUE and specificNonComplianceReason PRIVATE_DNS_HOST_NOT_SERVING is reported if the specified host is not a DNS server or not supported on Android. A NonComplianceDetail with INVALID_VALUE is reported if applying this setting fails for any other reason. */
  privateDnsHost?: string;
}

export const PrivateDnsSettings: Schema.Schema<PrivateDnsSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateDnsMode: Schema.optional(Schema.String),
    privateDnsHost: Schema.optional(Schema.String),
  }).annotate({ identifier: "PrivateDnsSettings" });

export interface ApnSetting {
  /** Optional. Authentication type of the APN. */
  authType?:
    | "AUTH_TYPE_UNSPECIFIED"
    | "NONE"
    | "PAP"
    | "CHAP"
    | "PAP_OR_CHAP"
    | (string & {});
  /** Required. Name of the APN. Policy will be rejected if this field is empty. */
  apn?: string;
  /** Optional. MMS (Multimedia Messaging Service) proxy port of the APN. A value of 0 (default) means not set and negative values are rejected. */
  mmsProxyPort?: number;
  /** Optional. The protocol to use to connect to this APN while the device is roaming. */
  roamingProtocol?:
    | "PROTOCOL_UNSPECIFIED"
    | "IP"
    | "IPV4V6"
    | "IPV6"
    | "NON_IP"
    | "PPP"
    | "UNSTRUCTURED"
    | (string & {});
  /** Optional. MVNO match type for the APN. */
  mvnoType?:
    | "MVNO_TYPE_UNSPECIFIED"
    | "GID"
    | "ICCID"
    | "IMSI"
    | "SPN"
    | (string & {});
  /** Required. Usage categories for the APN. Policy will be rejected if this field is empty or contains APN_TYPE_UNSPECIFIED or duplicates. Multiple APN types can be set on fully managed devices. ENTERPRISE is the only allowed APN type on work profiles. A NonComplianceDetail with MANAGEMENT_MODE is reported for any other value on work profiles. APN types that are not supported on the device or management mode will be ignored. If this results in the empty list, the APN setting will be ignored, because apnTypes is a required field. A NonComplianceDetail with INVALID_VALUE is reported if none of the APN types are supported on the device or management mode. */
  apnTypes?: ReadonlyArray<
    | "APN_TYPE_UNSPECIFIED"
    | "ENTERPRISE"
    | "BIP"
    | "CBS"
    | "DEFAULT"
    | "DUN"
    | "EMERGENCY"
    | "FOTA"
    | "HIPRI"
    | "IA"
    | "IMS"
    | "MCX"
    | "MMS"
    | "RCS"
    | "SUPL"
    | "VSIM"
    | "XCAP"
    | (string & {})
  >;
  /** Optional. Whether User Plane resources have to be activated during every transition from CM-IDLE mode to CM-CONNECTED state for this APN. See 3GPP TS 23.501 section 5.6.13. */
  alwaysOnSetting?:
    | "ALWAYS_ON_SETTING_UNSPECIFIED"
    | "NOT_ALWAYS_ON"
    | "ALWAYS_ON"
    | (string & {});
  /** Required. Human-readable name that describes the APN. Policy will be rejected if this field is empty. */
  displayName?: string;
  /** Optional. Radio technologies (network types) the APN may use. Policy will be rejected if this field contains NETWORK_TYPE_UNSPECIFIED or duplicates. */
  networkTypes?: ReadonlyArray<
    | "NETWORK_TYPE_UNSPECIFIED"
    | "EDGE"
    | "GPRS"
    | "GSM"
    | "HSDPA"
    | "HSPA"
    | "HSPAP"
    | "HSUPA"
    | "IWLAN"
    | "LTE"
    | "NR"
    | "TD_SCDMA"
    | "UMTS"
    | (string & {})
  >;
  /** Optional. The default MTU (Maximum Transmission Unit) size in bytes of the IPv4 routes brought up by this APN setting. A value of 0 (default) means not set and negative values are rejected. Supported on Android 13 and above. A NonComplianceDetail with API_LEVEL is reported if the Android version is less than 13. */
  mtuV4?: number;
  /** Optional. The proxy address of the APN. */
  proxyAddress?: string;
  /** Optional. The MTU (Maximum Transmission Unit) size of the IPv6 mobile interface to which the APN connected. A value of 0 (default) means not set and negative values are rejected. Supported on Android 13 and above. A NonComplianceDetail with API_LEVEL is reported if the Android version is less than 13. */
  mtuV6?: number;
  /** Optional. The numeric operator ID of the APN. Numeric operator ID is defined as MCC (Mobile Country Code) + MNC (Mobile Network Code). */
  numericOperatorId?: string;
  /** Optional. APN password of the APN. */
  password?: string;
  /** Optional. MMSC (Multimedia Messaging Service Center) URI of the APN. */
  mmsc?: string;
  /** Optional. The proxy port of the APN. A value of 0 (default) means not set and negative values are rejected. */
  proxyPort?: number;
  /** Optional. The protocol to use to connect to this APN. */
  protocol?:
    | "PROTOCOL_UNSPECIFIED"
    | "IP"
    | "IPV4V6"
    | "IPV6"
    | "NON_IP"
    | "PPP"
    | "UNSTRUCTURED"
    | (string & {});
  /** Optional. Carrier ID for the APN. A value of 0 (default) means not set and negative values are rejected. */
  carrierId?: number;
  /** Optional. APN username of the APN. */
  username?: string;
  /** Optional. MMS (Multimedia Messaging Service) proxy address of the APN which can be an IP address or hostname (not a URL). */
  mmsProxyAddress?: string;
}

export const ApnSetting: Schema.Schema<ApnSetting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authType: Schema.optional(Schema.String),
    apn: Schema.optional(Schema.String),
    mmsProxyPort: Schema.optional(Schema.Number),
    roamingProtocol: Schema.optional(Schema.String),
    mvnoType: Schema.optional(Schema.String),
    apnTypes: Schema.optional(Schema.Array(Schema.String)),
    alwaysOnSetting: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    networkTypes: Schema.optional(Schema.Array(Schema.String)),
    mtuV4: Schema.optional(Schema.Number),
    proxyAddress: Schema.optional(Schema.String),
    mtuV6: Schema.optional(Schema.Number),
    numericOperatorId: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    mmsc: Schema.optional(Schema.String),
    proxyPort: Schema.optional(Schema.Number),
    protocol: Schema.optional(Schema.String),
    carrierId: Schema.optional(Schema.Number),
    username: Schema.optional(Schema.String),
    mmsProxyAddress: Schema.optional(Schema.String),
  }).annotate({ identifier: "ApnSetting" });

export interface ApnPolicy {
  /** Optional. Whether override APNs are disabled or enabled. See DevicePolicyManager.setOverrideApnsEnabled (https://developer.android.com/reference/android/app/admin/DevicePolicyManager#setOverrideApnsEnabled) for more details. */
  overrideApns?:
    | "OVERRIDE_APNS_UNSPECIFIED"
    | "OVERRIDE_APNS_DISABLED"
    | "OVERRIDE_APNS_ENABLED"
    | (string & {});
  /** Optional. APN settings for override APNs. There must not be any conflict between any of APN settings provided, otherwise the policy will be rejected. Two ApnSettings are considered to conflict when all of the following fields match on both: numericOperatorId, apn, proxyAddress, proxyPort, mmsProxyAddress, mmsProxyPort, mmsc, mvnoType, protocol, roamingProtocol. If some of the APN settings result in non-compliance of INVALID_VALUE , they will be ignored. This can be set on fully managed devices on Android 10 and above. This can also be set on work profiles on Android 13 and above and only with ApnSetting's with ENTERPRISE APN type. A NonComplianceDetail with API_LEVEL is reported if the Android version is less than 10. A NonComplianceDetail with MANAGEMENT_MODE is reported for work profiles on Android versions less than 13. */
  apnSettings?: ReadonlyArray<ApnSetting>;
}

export const ApnPolicy: Schema.Schema<ApnPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    overrideApns: Schema.optional(Schema.String),
    apnSettings: Schema.optional(Schema.Array(ApnSetting)),
  }).annotate({ identifier: "ApnPolicy" });

export interface DeviceConnectivityManagement {
  /** Controls Wi-Fi configuring privileges. Based on the option set, user will have either full or limited or no control in configuring Wi-Fi networks. */
  configureWifi?:
    | "CONFIGURE_WIFI_UNSPECIFIED"
    | "ALLOW_CONFIGURING_WIFI"
    | "DISALLOW_ADD_WIFI_CONFIG"
    | "DISALLOW_CONFIGURING_WIFI"
    | (string & {});
  /** Controls tethering settings. Based on the value set, the user is partially or fully disallowed from using different forms of tethering. */
  tetheringSettings?:
    | "TETHERING_SETTINGS_UNSPECIFIED"
    | "ALLOW_ALL_TETHERING"
    | "DISALLOW_WIFI_TETHERING"
    | "DISALLOW_ALL_TETHERING"
    | (string & {});
  /** Optional. Preferential network service configuration. Setting this field will override preferentialNetworkService. This can be set on both work profiles and fully managed devices on Android 13 and above. See 5G network slicing (https://developers.google.com/android/management/5g-network-slicing) guide for more details. */
  preferentialNetworkServiceSettings?: PreferentialNetworkServiceSettings;
  /** Optional. Wi-Fi roaming policy. */
  wifiRoamingPolicy?: WifiRoamingPolicy;
  /** Optional. Controls whether Bluetooth sharing is allowed. */
  bluetoothSharing?:
    | "BLUETOOTH_SHARING_UNSPECIFIED"
    | "BLUETOOTH_SHARING_ALLOWED"
    | "BLUETOOTH_SHARING_DISALLOWED"
    | (string & {});
  /** Controls configuring and using Wi-Fi direct settings. Supported on company-owned devices running Android 13 and above. */
  wifiDirectSettings?:
    | "WIFI_DIRECT_SETTINGS_UNSPECIFIED"
    | "ALLOW_WIFI_DIRECT"
    | "DISALLOW_WIFI_DIRECT"
    | (string & {});
  /** Controls what files and/or data can be transferred via USB. Supported only on company-owned devices. */
  usbDataAccess?:
    | "USB_DATA_ACCESS_UNSPECIFIED"
    | "ALLOW_USB_DATA_TRANSFER"
    | "DISALLOW_USB_FILE_TRANSFER"
    | "DISALLOW_USB_DATA_TRANSFER"
    | (string & {});
  /** Restrictions on which Wi-Fi SSIDs the device can connect to. Note that this does not affect which networks can be configured on the device. Supported on company-owned devices running Android 13 and above. */
  wifiSsidPolicy?: WifiSsidPolicy;
  /** Optional. The global private DNS settings. */
  privateDnsSettings?: PrivateDnsSettings;
  /** Optional. Access Point Name (APN) policy. Configuration for Access Point Names (APNs) which may override any other APNs on the device. See OVERRIDE_APNS_ENABLED and overrideApns for details. */
  apnPolicy?: ApnPolicy;
}

export const DeviceConnectivityManagement: Schema.Schema<DeviceConnectivityManagement> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configureWifi: Schema.optional(Schema.String),
    tetheringSettings: Schema.optional(Schema.String),
    preferentialNetworkServiceSettings: Schema.optional(
      PreferentialNetworkServiceSettings,
    ),
    wifiRoamingPolicy: Schema.optional(WifiRoamingPolicy),
    bluetoothSharing: Schema.optional(Schema.String),
    wifiDirectSettings: Schema.optional(Schema.String),
    usbDataAccess: Schema.optional(Schema.String),
    wifiSsidPolicy: Schema.optional(WifiSsidPolicy),
    privateDnsSettings: Schema.optional(PrivateDnsSettings),
    apnPolicy: Schema.optional(ApnPolicy),
  }).annotate({ identifier: "DeviceConnectivityManagement" });

export interface PersistentPreferredActivity {
  /** The intent actions to match in the filter. If any actions are included in the filter, then an intent's action must be one of those values for it to match. If no actions are included, the intent action is ignored. */
  actions?: ReadonlyArray<string>;
  /** The intent categories to match in the filter. An intent includes the categories that it requires, all of which must be included in the filter in order to match. In other words, adding a category to the filter has no impact on matching unless that category is specified in the intent. */
  categories?: ReadonlyArray<string>;
  /** The activity that should be the default intent handler. This should be an Android component name, e.g. com.android.enterprise.app/.MainActivity. Alternatively, the value may be the package name of an app, which causes Android Device Policy to choose an appropriate activity from the app to handle the intent. */
  receiverActivity?: string;
}

export const PersistentPreferredActivity: Schema.Schema<PersistentPreferredActivity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    actions: Schema.optional(Schema.Array(Schema.String)),
    categories: Schema.optional(Schema.Array(Schema.String)),
    receiverActivity: Schema.optional(Schema.String),
  }).annotate({ identifier: "PersistentPreferredActivity" });

export interface DefaultApplication {
  /** Required. The package name that should be set as the default application. The policy is rejected if the package name is invalid. */
  packageName?: string;
}

export const DefaultApplication: Schema.Schema<DefaultApplication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    packageName: Schema.optional(Schema.String),
  }).annotate({ identifier: "DefaultApplication" });

export interface DefaultApplicationSetting {
  /** Required. The app type to set the default application. */
  defaultApplicationType?:
    | "DEFAULT_APPLICATION_TYPE_UNSPECIFIED"
    | "DEFAULT_ASSISTANT"
    | "DEFAULT_BROWSER"
    | "DEFAULT_CALL_REDIRECTION"
    | "DEFAULT_CALL_SCREENING"
    | "DEFAULT_DIALER"
    | "DEFAULT_HOME"
    | "DEFAULT_SMS"
    | "DEFAULT_WALLET"
    | (string & {});
  /** Required. The list of applications that can be set as the default app for a given type. This list must not be empty or contain duplicates. The first app in the list that is installed and qualified for the defaultApplicationType (e.g. SMS app for DEFAULT_SMS) is set as the default app. The signing key certificate fingerprint of the app on the device must also match one of the signing key certificate fingerprints obtained from Play Store or one of the entries in ApplicationPolicy.signingKeyCerts in order to be set as the default.If the defaultApplicationScopes contains SCOPE_FULLY_MANAGED or SCOPE_WORK_PROFILE, the app must have an entry in applications with installType set to a value other than BLOCKED.A NonComplianceDetail with APP_NOT_INSTALLED reason and DEFAULT_APPLICATION_SETTING_FAILED_FOR_SCOPE specific reason is reported if none of the apps in the list are installed. A NonComplianceDetail with INVALID_VALUE reason and DEFAULT_APPLICATION_SETTING_FAILED_FOR_SCOPE specific reason is reported if at least one app is installed but the policy fails to apply due to other reasons (e.g. the app is not of the right type).When applying to SCOPE_PERSONAL_PROFILE on a company-owned device with a work profile, only pre-installed system apps can be set as the default. A NonComplianceDetail with INVALID_VALUE reason and DEFAULT_APPLICATION_SETTING_FAILED_FOR_SCOPE specific reason is reported if the policy fails to apply to the personal profile. */
  defaultApplications?: ReadonlyArray<DefaultApplication>;
  /** Required. The scopes to which the policy should be applied. This list must not be empty or contain duplicates.A NonComplianceDetail with MANAGEMENT_MODE reason and DEFAULT_APPLICATION_SETTING_UNSUPPORTED_SCOPES specific reason is reported if none of the specified scopes can be applied to the management mode (e.g. a fully managed device receives a policy with only SCOPE_PERSONAL_PROFILE in the list). */
  defaultApplicationScopes?: ReadonlyArray<
    | "DEFAULT_APPLICATION_SCOPE_UNSPECIFIED"
    | "SCOPE_FULLY_MANAGED"
    | "SCOPE_WORK_PROFILE"
    | "SCOPE_PERSONAL_PROFILE"
    | (string & {})
  >;
}

export const DefaultApplicationSetting: Schema.Schema<DefaultApplicationSetting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultApplicationType: Schema.optional(Schema.String),
    defaultApplications: Schema.optional(Schema.Array(DefaultApplication)),
    defaultApplicationScopes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "DefaultApplicationSetting" });

export interface ScreenBrightnessSettings {
  /** Optional. Controls the screen brightness mode. */
  screenBrightnessMode?:
    | "SCREEN_BRIGHTNESS_MODE_UNSPECIFIED"
    | "BRIGHTNESS_USER_CHOICE"
    | "BRIGHTNESS_AUTOMATIC"
    | "BRIGHTNESS_FIXED"
    | (string & {});
  /** Optional. The screen brightness between 1 and 255 where 1 is the lowest and 255 is the highest brightness. A value of 0 (default) means no screen brightness set. Any other value is rejected. screenBrightnessMode must be either BRIGHTNESS_AUTOMATIC or BRIGHTNESS_FIXED to set this. Supported on Android 9 and above on fully managed devices. A NonComplianceDetail with API_LEVEL is reported if the Android version is less than 9. Supported on work profiles on company-owned devices on Android 15 and above. */
  screenBrightness?: number;
}

export const ScreenBrightnessSettings: Schema.Schema<ScreenBrightnessSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    screenBrightnessMode: Schema.optional(Schema.String),
    screenBrightness: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ScreenBrightnessSettings" });

export interface ScreenTimeoutSettings {
  /** Optional. Controls whether the user is allowed to configure the screen timeout. */
  screenTimeoutMode?:
    | "SCREEN_TIMEOUT_MODE_UNSPECIFIED"
    | "SCREEN_TIMEOUT_USER_CHOICE"
    | "SCREEN_TIMEOUT_ENFORCED"
    | (string & {});
  /** Optional. Controls the screen timeout duration. The screen timeout duration must be greater than 0, otherwise it is rejected. Additionally, it should not be greater than maximumTimeToLock, otherwise the screen timeout is set to maximumTimeToLock and a NonComplianceDetail with INVALID_VALUE reason and SCREEN_TIMEOUT_GREATER_THAN_MAXIMUM_TIME_TO_LOCK specific reason is reported. If the screen timeout is less than a certain lower bound, it is set to the lower bound. The lower bound may vary across devices. If this is set, screenTimeoutMode must be SCREEN_TIMEOUT_ENFORCED. Supported on Android 9 and above on fully managed devices. A NonComplianceDetail with API_LEVEL is reported if the Android version is less than 9. Supported on work profiles on company-owned devices on Android 15 and above. */
  screenTimeout?: string;
}

export const ScreenTimeoutSettings: Schema.Schema<ScreenTimeoutSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    screenTimeoutMode: Schema.optional(Schema.String),
    screenTimeout: Schema.optional(Schema.String),
  }).annotate({ identifier: "ScreenTimeoutSettings" });

export interface DisplaySettings {
  /** Optional. Controls the screen brightness settings. */
  screenBrightnessSettings?: ScreenBrightnessSettings;
  /** Optional. Controls the screen timeout settings. */
  screenTimeoutSettings?: ScreenTimeoutSettings;
}

export const DisplaySettings: Schema.Schema<DisplaySettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    screenBrightnessSettings: Schema.optional(ScreenBrightnessSettings),
    screenTimeoutSettings: Schema.optional(ScreenTimeoutSettings),
  }).annotate({ identifier: "DisplaySettings" });

export interface Androidmanagement_Date {
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  year?: number;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  month?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  day?: number;
}

export const Androidmanagement_Date: Schema.Schema<Androidmanagement_Date> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    year: Schema.optional(Schema.Number),
    month: Schema.optional(Schema.Number),
    day: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Androidmanagement_Date" });

export interface FreezePeriod {
  /** The end date (inclusive) of the freeze period. Must be no later than 90 days from the start date. If the end date is earlier than the start date, the freeze period is considered wrapping year-end. Note: day and month must be set. year should not be set as it is not used. For example, {"month": 1,"date": 30}. */
  endDate?: Androidmanagement_Date;
  /** The start date (inclusive) of the freeze period. Note: day and month must be set. year should not be set as it is not used. For example, {"month": 1,"date": 30}. */
  startDate?: Androidmanagement_Date;
}

export const FreezePeriod: Schema.Schema<FreezePeriod> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endDate: Schema.optional(Androidmanagement_Date),
    startDate: Schema.optional(Androidmanagement_Date),
  }).annotate({ identifier: "FreezePeriod" });

export interface SystemUpdate {
  /** If the type is WINDOWED, the end of the maintenance window, measured as the number of minutes after midnight in device's local time. This value must be between 0 and 1439, inclusive. If this value is less than start_minutes, then the maintenance window spans midnight. If the maintenance window specified is smaller than 30 minutes, the actual window is extended to 30 minutes beyond the start time. */
  endMinutes?: number;
  /** If the type is WINDOWED, the start of the maintenance window, measured as the number of minutes after midnight in the device's local time. This value must be between 0 and 1439, inclusive. */
  startMinutes?: number;
  /** The type of system update to configure. */
  type?:
    | "SYSTEM_UPDATE_TYPE_UNSPECIFIED"
    | "AUTOMATIC"
    | "WINDOWED"
    | "POSTPONE"
    | (string & {});
  /** An annually repeating time period in which over-the-air (OTA) system updates are postponed to freeze the OS version running on a device. To prevent freezing the device indefinitely, each freeze period must be separated by at least 60 days. */
  freezePeriods?: ReadonlyArray<FreezePeriod>;
}

export const SystemUpdate: Schema.Schema<SystemUpdate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endMinutes: Schema.optional(Schema.Number),
    startMinutes: Schema.optional(Schema.Number),
    type: Schema.optional(Schema.String),
    freezePeriods: Schema.optional(Schema.Array(FreezePeriod)),
  }).annotate({ identifier: "SystemUpdate" });

export interface BlockAction {
  /** Number of days the policy is non-compliant before the device or work profile is blocked. To block access immediately, set to 0. blockAfterDays must be less than wipeAfterDays. */
  blockAfterDays?: number;
  /** Specifies the scope of this BlockAction. Only applicable to devices that are company-owned. */
  blockScope?:
    | "BLOCK_SCOPE_UNSPECIFIED"
    | "BLOCK_SCOPE_WORK_PROFILE"
    | "BLOCK_SCOPE_DEVICE"
    | (string & {});
}

export const BlockAction: Schema.Schema<BlockAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    blockAfterDays: Schema.optional(Schema.Number),
    blockScope: Schema.optional(Schema.String),
  }).annotate({ identifier: "BlockAction" });

export interface WipeAction {
  /** Number of days the policy is non-compliant before the device or work profile is wiped. wipeAfterDays must be greater than blockAfterDays. */
  wipeAfterDays?: number;
  /** Whether the factory-reset protection data is preserved on the device. This setting doesn’t apply to work profiles. */
  preserveFrp?: boolean;
}

export const WipeAction: Schema.Schema<WipeAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    wipeAfterDays: Schema.optional(Schema.Number),
    preserveFrp: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "WipeAction" });

export interface PolicyEnforcementRule {
  /** An action to block access to apps and data on a company owned device or in a work profile. This action also triggers a user-facing notification with information (where possible) on how to correct the compliance issue. Note: wipeAction must also be specified. */
  blockAction?: BlockAction;
  /** An action to reset a company owned device or delete a work profile. Note: blockAction must also be specified. */
  wipeAction?: WipeAction;
  /** The top-level policy to enforce. For example, applications or passwordPolicies. */
  settingName?: string;
}

export const PolicyEnforcementRule: Schema.Schema<PolicyEnforcementRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    blockAction: Schema.optional(BlockAction),
    wipeAction: Schema.optional(WipeAction),
    settingName: Schema.optional(Schema.String),
  }).annotate({ identifier: "PolicyEnforcementRule" });

export interface WorkAccountSetupConfig {
  /** Optional. The authentication type of the user on the device. */
  authenticationType?:
    | "AUTHENTICATION_TYPE_UNSPECIFIED"
    | "AUTHENTICATION_TYPE_NOT_ENFORCED"
    | "GOOGLE_AUTHENTICATED"
    | (string & {});
  /** Optional. The specific google work account email address to be added. This field is only relevant if authenticationType is GOOGLE_AUTHENTICATED. This must be an enterprise account and not a consumer account. Once set and a Google authenticated account is added to the device, changing this field will have no effect, and thus recommended to be set only once. */
  requiredAccountEmail?: string;
}

export const WorkAccountSetupConfig: Schema.Schema<WorkAccountSetupConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authenticationType: Schema.optional(Schema.String),
    requiredAccountEmail: Schema.optional(Schema.String),
  }).annotate({ identifier: "WorkAccountSetupConfig" });

export interface PersonalApplicationPolicy {
  /** The package name of the application. */
  packageName?: string;
  /** The type of installation to perform. */
  installType?:
    | "INSTALL_TYPE_UNSPECIFIED"
    | "BLOCKED"
    | "AVAILABLE"
    | (string & {});
}

export const PersonalApplicationPolicy: Schema.Schema<PersonalApplicationPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    packageName: Schema.optional(Schema.String),
    installType: Schema.optional(Schema.String),
  }).annotate({ identifier: "PersonalApplicationPolicy" });

export interface PersonalUsagePolicies {
  /** If true, the camera is disabled on the personal profile. */
  cameraDisabled?: boolean;
  /** Policy applied to applications in the personal profile. */
  personalApplications?: ReadonlyArray<PersonalApplicationPolicy>;
  /** Optional. Whether bluetooth sharing is allowed. */
  bluetoothSharing?:
    | "BLUETOOTH_SHARING_UNSPECIFIED"
    | "BLUETOOTH_SHARING_ALLOWED"
    | "BLUETOOTH_SHARING_DISALLOWED"
    | (string & {});
  /** Account types that can't be managed by the user. */
  accountTypesWithManagementDisabled?: ReadonlyArray<string>;
  /** If true, screen capture is disabled for all users. This also blocks Circle to Search (https://support.google.com/android/answer/14508957). */
  screenCaptureDisabled?: boolean;
  /** Optional. Controls whether a private space is allowed on the device. */
  privateSpacePolicy?:
    | "PRIVATE_SPACE_POLICY_UNSPECIFIED"
    | "PRIVATE_SPACE_ALLOWED"
    | "PRIVATE_SPACE_DISALLOWED"
    | (string & {});
  /** Used together with personalApplications to control how apps in the personal profile are allowed or blocked. */
  personalPlayStoreMode?:
    | "PLAY_STORE_MODE_UNSPECIFIED"
    | "BLACKLIST"
    | "BLOCKLIST"
    | "ALLOWLIST"
    | (string & {});
  /** Controls how long the work profile can stay off. The minimum duration must be at least 3 days. Other details are as follows: - If the duration is set to 0, the feature is turned off. - If the duration is set to a value smaller than the minimum duration, the feature returns an error. *Note:* If you want to avoid personal profiles being suspended during long periods of off-time, you can temporarily set a large value for this parameter. */
  maxDaysWithWorkOff?: number;
}

export const PersonalUsagePolicies: Schema.Schema<PersonalUsagePolicies> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cameraDisabled: Schema.optional(Schema.Boolean),
    personalApplications: Schema.optional(
      Schema.Array(PersonalApplicationPolicy),
    ),
    bluetoothSharing: Schema.optional(Schema.String),
    accountTypesWithManagementDisabled: Schema.optional(
      Schema.Array(Schema.String),
    ),
    screenCaptureDisabled: Schema.optional(Schema.Boolean),
    privateSpacePolicy: Schema.optional(Schema.String),
    personalPlayStoreMode: Schema.optional(Schema.String),
    maxDaysWithWorkOff: Schema.optional(Schema.Number),
  }).annotate({ identifier: "PersonalUsagePolicies" });

export interface AdvancedSecurityOverrides {
  /** Controls Common Criteria Mode—security standards defined in the Common Criteria for Information Technology Security Evaluation (https://www.commoncriteriaportal.org/) (CC). Enabling Common Criteria Mode increases certain security components on a device, see CommonCriteriaMode for details.Warning: Common Criteria Mode enforces a strict security model typically only required for IT products used in national security systems and other highly sensitive organizations. Standard device use may be affected. Only enabled if required. If Common Criteria Mode is turned off after being enabled previously, all user-configured Wi-Fi networks may be lost and any enterprise-configured Wi-Fi networks that require user input may need to be reconfigured. */
  commonCriteriaMode?:
    | "COMMON_CRITERIA_MODE_UNSPECIFIED"
    | "COMMON_CRITERIA_MODE_DISABLED"
    | "COMMON_CRITERIA_MODE_ENABLED"
    | (string & {});
  /** The policy for untrusted apps (apps from unknown sources) enforced on the device. Replaces install_unknown_sources_allowed (deprecated). */
  untrustedAppsPolicy?:
    | "UNTRUSTED_APPS_POLICY_UNSPECIFIED"
    | "DISALLOW_INSTALL"
    | "ALLOW_INSTALL_IN_PERSONAL_PROFILE_ONLY"
    | "ALLOW_INSTALL_DEVICE_WIDE"
    | (string & {});
  /** Optional. Controls Memory Tagging Extension (MTE) (https://source.android.com/docs/security/test/memory-safety/arm-mte) on the device. The device needs to be rebooted to apply changes to the MTE policy. On Android 15 and above, a NonComplianceDetail with PENDING is reported if the policy change is pending a device reboot. */
  mtePolicy?:
    | "MTE_POLICY_UNSPECIFIED"
    | "MTE_USER_CHOICE"
    | "MTE_ENFORCED"
    | "MTE_DISABLED"
    | (string & {});
  /** Whether Google Play Protect verification (https://support.google.com/accounts/answer/2812853) is enforced. Replaces ensureVerifyAppsEnabled (deprecated). */
  googlePlayProtectVerifyApps?:
    | "GOOGLE_PLAY_PROTECT_VERIFY_APPS_UNSPECIFIED"
    | "VERIFY_APPS_ENFORCED"
    | "VERIFY_APPS_USER_CHOICE"
    | (string & {});
  /** Controls access to developer settings: developer options and safe boot. Replaces safeBootDisabled (deprecated) and debuggingFeaturesAllowed (deprecated). On personally-owned devices with a work profile, setting this policy will not disable safe boot. In this case, a NonComplianceDetail with MANAGEMENT_MODE is reported. */
  developerSettings?:
    | "DEVELOPER_SETTINGS_UNSPECIFIED"
    | "DEVELOPER_SETTINGS_DISABLED"
    | "DEVELOPER_SETTINGS_ALLOWED"
    | (string & {});
  /** Optional. Controls whether content protection, which scans for deceptive apps, is enabled. This is supported on Android 15 and above. */
  contentProtectionPolicy?:
    | "CONTENT_PROTECTION_POLICY_UNSPECIFIED"
    | "CONTENT_PROTECTION_DISABLED"
    | "CONTENT_PROTECTION_ENFORCED"
    | "CONTENT_PROTECTION_USER_CHOICE"
    | (string & {});
  /** Personal apps that can read work profile notifications using a NotificationListenerService (https://developer.android.com/reference/android/service/notification/NotificationListenerService). By default, no personal apps (aside from system apps) can read work notifications. Each value in the list must be a package name. */
  personalAppsThatCanReadWorkNotifications?: ReadonlyArray<string>;
}

export const AdvancedSecurityOverrides: Schema.Schema<AdvancedSecurityOverrides> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    commonCriteriaMode: Schema.optional(Schema.String),
    untrustedAppsPolicy: Schema.optional(Schema.String),
    mtePolicy: Schema.optional(Schema.String),
    googlePlayProtectVerifyApps: Schema.optional(Schema.String),
    developerSettings: Schema.optional(Schema.String),
    contentProtectionPolicy: Schema.optional(Schema.String),
    personalAppsThatCanReadWorkNotifications: Schema.optional(
      Schema.Array(Schema.String),
    ),
  }).annotate({ identifier: "AdvancedSecurityOverrides" });

export interface Policy {
  /** The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}. */
  name?: string;
  /** This mode controls which apps are available to the user in the Play Store and the behavior on the device when apps are removed from the policy. */
  playStoreMode?:
    | "PLAY_STORE_MODE_UNSPECIFIED"
    | "WHITELIST"
    | "BLACKLIST"
    | (string & {});
  /** If true, this disables the Lock Screen (https://source.android.com/docs/core/display/multi_display/lock-screen) for primary and/or secondary displays. This policy is supported only in dedicated device management mode. */
  keyguardDisabled?: boolean;
  /** The default permission policy for runtime permission requests. */
  defaultPermissionPolicy?:
    | "PERMISSION_POLICY_UNSPECIFIED"
    | "PROMPT"
    | "GRANT"
    | "DENY"
    | (string & {});
  /** Password requirements. The field password_requirements.require_password_unlock must not be set. DEPRECATED - Use passwordPolicies.Note:Complexity-based values of PasswordQuality, that is, COMPLEXITY_LOW, COMPLEXITY_MEDIUM, and COMPLEXITY_HIGH, cannot be used here. unified_lock_settings cannot be used here. */
  passwordRequirements?: PasswordRequirements;
  /** Rules for determining apps' access to private keys. See ChoosePrivateKeyRule for details. This must be empty if any application has CERT_SELECTION delegation scope. */
  choosePrivateKeyRules?: ReadonlyArray<ChoosePrivateKeyRule>;
  /** This feature is not generally available. */
  oncCertificateProviders?: ReadonlyArray<OncCertificateProvider>;
  /** This field has no effect. */
  installUnknownSourcesAllowed?: boolean;
  /** Configuration for an always-on VPN connection. Use with vpn_config_disabled to prevent modification of this setting. */
  alwaysOnVpnPackage?: AlwaysOnVpnPackage;
  /** Settings controlling the behavior of a device in kiosk mode. To enable kiosk mode, set kioskCustomLauncherEnabled to true or specify an app in the policy with installType KIOSK. */
  kioskCustomization?: KioskCustomization;
  /** The version of the policy. This is a read-only field. The version is incremented each time the policy is updated. */
  version?: string;
  /** Configuration of device activity logging. */
  usageLog?: UsageLog;
  /** Whether the user mounting physical external media is disabled. */
  mountPhysicalMediaDisabled?: boolean;
  /** Controls the use of the microphone and whether the user has access to the microphone access toggle. This applies only on fully managed devices. */
  microphoneAccess?:
    | "MICROPHONE_ACCESS_UNSPECIFIED"
    | "MICROPHONE_ACCESS_USER_CHOICE"
    | "MICROPHONE_ACCESS_DISABLED"
    | "MICROPHONE_ACCESS_ENFORCED"
    | (string & {});
  /** The minimum allowed Android API level. */
  minimumApiLevel?: number;
  /** Specifies permitted accessibility services. If the field is not set, any accessibility service can be used. If the field is set, only the accessibility services in this list and the system's built-in accessibility service can be used. In particular, if the field is set to empty, only the system's built-in accessibility servicess can be used. This can be set on fully managed devices and on work profiles. When applied to a work profile, this affects both the personal profile and the work profile. */
  permittedAccessibilityServices?: PackageNameList;
  /** The degree of location detection enabled. */
  locationMode?:
    | "LOCATION_MODE_UNSPECIFIED"
    | "HIGH_ACCURACY"
    | "SENSORS_ONLY"
    | "BATTERY_SAVING"
    | "OFF"
    | "LOCATION_USER_CHOICE"
    | "LOCATION_ENFORCED"
    | "LOCATION_DISABLED"
    | (string & {});
  /** This setting is not supported. Any value is ignored. */
  androidDevicePolicyTracks?: ReadonlyArray<
    "APP_TRACK_UNSPECIFIED" | "PRODUCTION" | "BETA" | (string & {})
  >;
  /** Explicit permission or group grants or denials for all apps. These values override the default_permission_policy. */
  permissionGrants?: ReadonlyArray<PermissionGrant>;
  /** Whether resetting network settings is disabled. This applies only on fully managed devices. A NonComplianceDetail with MANAGEMENT_MODE is reported for other management modes. */
  networkResetDisabled?: boolean;
  /** If present, only the input methods provided by packages in this list are permitted. If this field is present, but the list is empty, then only system input methods are permitted. */
  permittedInputMethods?: PackageNameList;
  /** Optional. Controls which apps are allowed to act as credential providers on Android 14 and above. These apps store credentials, see this (https://developer.android.com/training/sign-in/passkeys) and this (https://developer.android.com/reference/androidx/credentials/CredentialManager) for details. See also credentialProviderPolicy. */
  credentialProviderPolicyDefault?:
    | "CREDENTIAL_PROVIDER_POLICY_DEFAULT_UNSPECIFIED"
    | "CREDENTIAL_PROVIDER_DEFAULT_DISALLOWED"
    | "CREDENTIAL_PROVIDER_DEFAULT_DISALLOWED_EXCEPT_SYSTEM"
    | (string & {});
  /** Flag to skip hints on the first use. Enterprise admin can enable the system recommendation for apps to skip their user tutorial and other introductory hints on first start-up. */
  skipFirstUseHintsEnabled?: boolean;
  /** The device owner information to be shown on the lock screen. */
  deviceOwnerLockScreenInfo?: UserFacingMessage;
  /** The battery plugged in modes for which the device stays on. When using this setting, it is recommended to clear maximum_time_to_lock so that the device doesn't lock itself while it stays on. */
  stayOnPluggedModes?: ReadonlyArray<
    | "BATTERY_PLUGGED_MODE_UNSPECIFIED"
    | "AC"
    | "USB"
    | "WIRELESS"
    | (string & {})
  >;
  /** A message displayed to the user in the device administators settings screen. */
  longSupportMessage?: UserFacingMessage;
  /** Whether auto date, time, and time zone are enabled on a company-owned device. If this is set, then autoTimeRequired is ignored. */
  autoDateAndTimeZone?:
    | "AUTO_DATE_AND_TIME_ZONE_UNSPECIFIED"
    | "AUTO_DATE_AND_TIME_ZONE_USER_CHOICE"
    | "AUTO_DATE_AND_TIME_ZONE_ENFORCED"
    | (string & {});
  /** Optional. Controls whether printing is allowed. This is supported on devices running Android 9 and above. . */
  printingPolicy?:
    | "PRINTING_POLICY_UNSPECIFIED"
    | "PRINTING_DISALLOWED"
    | "PRINTING_ALLOWED"
    | (string & {});
  /** Rules declaring which mitigating actions to take when a device is not compliant with its policy. When the conditions for multiple rules are satisfied, all of the mitigating actions for the rules are taken. There is a maximum limit of 100 rules. Use policy enforcement rules instead. */
  complianceRules?: ReadonlyArray<ComplianceRule>;
  /** Whether location sharing is disabled. */
  shareLocationDisabled?: boolean;
  /** Whether transferring files over USB is disabled. This is supported only on company-owned devices. */
  usbFileTransferDisabled?: boolean;
  /** Whether configuring mobile networks is disabled. */
  mobileNetworksConfigDisabled?: boolean;
  /** Optional. Controls whether the enterpriseDisplayName is visible on the device (e.g. lock screen message on company-owned devices). */
  enterpriseDisplayNameVisibility?:
    | "ENTERPRISE_DISPLAY_NAME_VISIBILITY_UNSPECIFIED"
    | "ENTERPRISE_DISPLAY_NAME_VISIBLE"
    | "ENTERPRISE_DISPLAY_NAME_HIDDEN"
    | (string & {});
  /** Whether user installation of apps is disabled. */
  installAppsDisabled?: boolean;
  /** Whether adding or removing accounts is disabled. */
  modifyAccountsDisabled?: boolean;
  /** Whether USB storage is enabled. Deprecated. */
  usbMassStorageEnabled?: boolean;
  /** Covers controls for radio state such as Wi-Fi, bluetooth, and more. */
  deviceRadioState?: DeviceRadioState;
  /** Whether factory resetting from settings is disabled. */
  factoryResetDisabled?: boolean;
  /** Cross-profile policies applied on the device. */
  crossProfilePolicies?: CrossProfilePolicies;
  /** Maximum time in milliseconds for user activity until the device locks. A value of 0 means there is no restriction. */
  maximumTimeToLock?: string;
  /** Whether changing the wallpaper is disabled. */
  setWallpaperDisabled?: boolean;
  /** Whether sending and receiving SMS messages is disabled. */
  smsDisabled?: boolean;
  /** Optional. Controls whether apps on the device for fully managed devices or in the work profile for devices with work profiles are allowed to expose app functions. */
  appFunctions?:
    | "APP_FUNCTIONS_UNSPECIFIED"
    | "APP_FUNCTIONS_DISALLOWED"
    | "APP_FUNCTIONS_ALLOWED"
    | (string & {});
  /** Status reporting settings */
  statusReportingSettings?: StatusReportingSettings;
  /** Account types that can't be managed by the user. */
  accountTypesWithManagementDisabled?: ReadonlyArray<string>;
  /** Whether using NFC to beam data from apps is disabled. */
  outgoingBeamDisabled?: boolean;
  /** Whether removing other users is disabled. */
  removeUserDisabled?: boolean;
  /** If camera_access is set to any value other than CAMERA_ACCESS_UNSPECIFIED, this has no effect. Otherwise this field controls whether cameras are disabled: If true, all cameras are disabled, otherwise they are available. For fully managed devices this field applies for all apps on the device. For work profiles, this field applies only to apps in the work profile, and the camera access of apps outside the work profile is unaffected. */
  cameraDisabled?: boolean;
  /** Whether roaming data services are disabled. */
  dataRoamingDisabled?: boolean;
  /** Policy applied to apps. This can have at most 3,000 elements. */
  applications?: ReadonlyArray<ApplicationPolicy>;
  /** Whether the user is allowed to enable debugging features. */
  debuggingFeaturesAllowed?: boolean;
  /** Whether the kiosk custom launcher is enabled. This replaces the home screen with a launcher that locks down the device to the apps installed via the applications setting. Apps appear on a single page in alphabetical order. Use kioskCustomization to further configure the kiosk device behavior. */
  kioskCustomLauncherEnabled?: boolean;
  /** Whether bluetooth contact sharing is disabled. */
  bluetoothContactSharingDisabled?: boolean;
  /** Action to take during the setup process. At most one action may be specified. */
  setupActions?: ReadonlyArray<SetupAction>;
  /** Password requirement policies. Different policies can be set for work profile or fully managed devices by setting the password_scope field in the policy. */
  passwordPolicies?: ReadonlyArray<PasswordRequirements>;
  /** Network configuration for the device. See configure networks for more information. */
  openNetworkConfiguration?: Record<string, unknown>;
  /** Whether configuring bluetooth is disabled. */
  bluetoothConfigDisabled?: boolean;
  /** Optional. Wipe flags to indicate what data is wiped when a device or profile wipe is triggered due to any reason (for example, non-compliance). This does not apply to the enterprises.devices.delete method. . This list must not have duplicates. */
  wipeDataFlags?: ReadonlyArray<
    "WIPE_DATA_FLAG_UNSPECIFIED" | "WIPE_ESIMS" | (string & {})
  >;
  /** The network-independent global HTTP proxy. Typically proxies should be configured per-network in open_network_configuration. However for unusual configurations like general internal filtering a global HTTP proxy may be useful. If the proxy is not accessible, network access may break. The global proxy is only a recommendation and some apps may ignore it. */
  recommendedGlobalProxy?: ProxyInfo;
  /** Allows showing UI on a device for a user to choose a private key alias if there are no matching rules in ChoosePrivateKeyRules. For devices below Android P, setting this may leave enterprise keys vulnerable. This value will have no effect if any application has CERT_SELECTION delegation scope. */
  privateKeySelectionEnabled?: boolean;
  /** Whether rebooting the device into safe boot is disabled. */
  safeBootDisabled?: boolean;
  /** Whether screen capture is disabled. This also blocks Circle to Search (https://support.google.com/android/answer/14508957). */
  screenCaptureDisabled?: boolean;
  /** Covers controls for device connectivity such as Wi-Fi, USB data access, keyboard/mouse connections, and more. */
  deviceConnectivityManagement?: DeviceConnectivityManagement;
  /** A message displayed to the user in the settings screen wherever functionality has been disabled by the admin. If the message is longer than 200 characters it may be truncated. */
  shortSupportMessage?: UserFacingMessage;
  /** Whether bluetooth is disabled. Prefer this setting over bluetooth_config_disabled because bluetooth_config_disabled can be bypassed by the user. */
  bluetoothDisabled?: boolean;
  /** Whether configuring Wi-Fi networks is disabled. Supported on fully managed devices and work profiles on company-owned devices. For fully managed devices, setting this to true removes all configured networks and retains only the networks configured using openNetworkConfiguration. For work profiles on company-owned devices, existing configured networks are not affected and the user is not allowed to add, remove, or modify Wi-Fi networks. If configureWifi is set to anything other than CONFIGURE_WIFI_UNSPECIFIED, this setting is ignored. Note: If a network connection can't be made at boot time and configuring Wi-Fi is disabled then network escape hatch will be shown in order to refresh the device policy (see networkEscapeHatchEnabled). */
  wifiConfigDisabled?: boolean;
  /** Optional. Controls whether AssistContent (https://developer.android.com/reference/android/app/assist/AssistContent) is allowed to be sent to a privileged app such as an assistant app. AssistContent includes screenshots and information about an app, such as package name. This is supported on Android 15 and above. */
  assistContentPolicy?:
    | "ASSIST_CONTENT_POLICY_UNSPECIFIED"
    | "ASSIST_CONTENT_DISALLOWED"
    | "ASSIST_CONTENT_ALLOWED"
    | (string & {});
  /** If microphone_access is set to any value other than MICROPHONE_ACCESS_UNSPECIFIED, this has no effect. Otherwise this field controls whether microphones are disabled: If true, all microphones are disabled, otherwise they are available. This is available only on fully managed devices. */
  unmuteMicrophoneDisabled?: boolean;
  /** Default intent handler activities. */
  persistentPreferredActivities?: ReadonlyArray<PersistentPreferredActivity>;
  /** Whether configuring VPN is disabled. */
  vpnConfigDisabled?: boolean;
  /** Controls whether preferential network service is enabled on the work profile or on fully managed devices. For example, an organization may have an agreement with a carrier that all of the work data from its employees' devices will be sent via a network service dedicated for enterprise use. An example of a supported preferential network service is the enterprise slice on 5G networks. This policy has no effect if preferentialNetworkServiceSettings or ApplicationPolicy.preferentialNetworkId is set on devices running Android 13 or above. */
  preferentialNetworkService?:
    | "PREFERENTIAL_NETWORK_SERVICE_UNSPECIFIED"
    | "PREFERENTIAL_NETWORK_SERVICE_DISABLED"
    | "PREFERENTIAL_NETWORK_SERVICE_ENABLED"
    | (string & {});
  /** Recommended alternative: autoUpdateMode which is set per app, provides greater flexibility around update frequency.When autoUpdateMode is set to AUTO_UPDATE_POSTPONED or AUTO_UPDATE_HIGH_PRIORITY, this field has no effect.The app auto update policy, which controls when automatic app updates can be applied. */
  appAutoUpdatePolicy?:
    | "APP_AUTO_UPDATE_POLICY_UNSPECIFIED"
    | "CHOICE_TO_THE_USER"
    | "NEVER"
    | "WIFI_ONLY"
    | "ALWAYS"
    | (string & {});
  /** Optional. The default application setting for supported types. If the default application is successfully set for at least one app type on a profile, users are prevented from changing any default applications on that profile.Only one DefaultApplicationSetting is allowed for each DefaultApplicationType.See Default application settings (https://developers.google.com/android/management/default-application-settings) guide for more details. */
  defaultApplicationSettings?: ReadonlyArray<DefaultApplicationSetting>;
  /** Whether configuring user credentials is disabled. */
  credentialsConfigDisabled?: boolean;
  /** Optional. Controls for the display settings. */
  displaySettings?: DisplaySettings;
  /** Whether auto time is required, which prevents the user from manually setting the date and time. If autoDateAndTimeZone is set, this field is ignored. */
  autoTimeRequired?: boolean;
  /** Whether app verification is force-enabled. */
  ensureVerifyAppsEnabled?: boolean;
  /** The system update policy, which controls how OS updates are applied. If the update type is WINDOWED, the update window will automatically apply to Play app updates as well.Note: Google Play system updates (https://source.android.com/docs/core/ota/modular-system) (also called Mainline updates) are automatically downloaded and require a device reboot to be installed. Refer to the mainline section in Manage system updates (https://developer.android.com/work/dpc/system-updates#mainline) for further details. */
  systemUpdate?: SystemUpdate;
  /** Rules that define the behavior when a particular policy can not be applied on device */
  policyEnforcementRules?: ReadonlyArray<PolicyEnforcementRule>;
  /** Whether creating windows besides app windows is disabled. */
  createWindowsDisabled?: boolean;
  /** Whether user uninstallation of applications is disabled. This prevents apps from being uninstalled, even those removed using applications */
  uninstallAppsDisabled?: boolean;
  /** Whether adding new users and profiles is disabled. For devices where managementMode is DEVICE_OWNER this field is ignored and the user is never allowed to add or remove users. */
  addUserDisabled?: boolean;
  /** Whether configuring cell broadcast is disabled. */
  cellBroadcastsConfigDisabled?: boolean;
  /** Whether adjusting the master volume is disabled. Also mutes the device. The setting has effect only on fully managed devices. */
  adjustVolumeDisabled?: boolean;
  /** Whether the status bar is disabled. This disables notifications, quick settings, and other screen overlays that allow escape from full-screen mode. DEPRECATED. To disable the status bar on a kiosk device, use InstallType KIOSK or kioskCustomLauncherEnabled. */
  statusBarDisabled?: boolean;
  /** This is deprecated. */
  wifiConfigsLockdownEnabled?: boolean;
  /** Whether encryption is enabled */
  encryptionPolicy?:
    | "ENCRYPTION_POLICY_UNSPECIFIED"
    | "ENABLED_WITHOUT_PASSWORD"
    | "ENABLED_WITH_PASSWORD"
    | (string & {});
  /** Optional. Controls the work account setup configuration, such as details of whether a Google authenticated account is required. */
  workAccountSetupConfig?: WorkAccountSetupConfig;
  /** Whether the user is allowed to have fun. Controls whether the Easter egg game in Settings is disabled. */
  funDisabled?: boolean;
  /** Whether configuring tethering and portable hotspots is disabled. If tetheringSettings is set to anything other than TETHERING_SETTINGS_UNSPECIFIED, this setting is ignored. */
  tetheringConfigDisabled?: boolean;
  /** Whether the network escape hatch is enabled. If a network connection can't be made at boot time, the escape hatch prompts the user to temporarily connect to a network in order to refresh the device policy. After applying policy, the temporary network will be forgotten and the device will continue booting. This prevents being unable to connect to a network if there is no suitable network in the last policy and the device boots into an app in lock task mode, or the user is otherwise unable to reach device settings.Note: Setting wifiConfigDisabled to true will override this setting under specific circumstances. Please see wifiConfigDisabled for further details. Setting configureWifi to DISALLOW_CONFIGURING_WIFI will override this setting under specific circumstances. Please see DISALLOW_CONFIGURING_WIFI for further details. */
  networkEscapeHatchEnabled?: boolean;
  /** Email addresses of device administrators for factory reset protection. When the device is factory reset, it will require one of these admins to log in with the Google account email and password to unlock the device. If no admins are specified, the device won't provide factory reset protection. */
  frpAdminEmails?: ReadonlyArray<string>;
  /** Whether outgoing calls are disabled. */
  outgoingCallsDisabled?: boolean;
  /** Disabled keyguard customizations, such as widgets. */
  keyguardDisabledFeatures?: ReadonlyArray<
    | "KEYGUARD_DISABLED_FEATURE_UNSPECIFIED"
    | "CAMERA"
    | "NOTIFICATIONS"
    | "UNREDACTED_NOTIFICATIONS"
    | "TRUST_AGENTS"
    | "DISABLE_FINGERPRINT"
    | "DISABLE_REMOTE_INPUT"
    | "FACE"
    | "IRIS"
    | "BIOMETRICS"
    | "SHORTCUTS"
    | "ALL_FEATURES"
    | (string & {})
  >;
  /** This field has no effect. */
  blockApplicationsEnabled?: boolean;
  /** Controls the use of the camera and whether the user has access to the camera access toggle. */
  cameraAccess?:
    | "CAMERA_ACCESS_UNSPECIFIED"
    | "CAMERA_ACCESS_USER_CHOICE"
    | "CAMERA_ACCESS_DISABLED"
    | "CAMERA_ACCESS_ENFORCED"
    | (string & {});
  /** Policies managing personal usage on a company-owned device. */
  personalUsagePolicies?: PersonalUsagePolicies;
  /** Whether changing the user icon is disabled. This applies only on devices running Android 7 and above. */
  setUserIconDisabled?: boolean;
  /** Advanced security settings. In most cases, setting these is not needed. */
  advancedSecurityOverrides?: AdvancedSecurityOverrides;
  /** Optional. The policy for the autofill service. */
  autofillPolicy?:
    | "AUTOFILL_POLICY_UNSPECIFIED"
    | "AUTOFILL_USER_CHOICE"
    | "AUTOFILL_DISABLED"
    | (string & {});
}

export const Policy: Schema.Schema<Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    playStoreMode: Schema.optional(Schema.String),
    keyguardDisabled: Schema.optional(Schema.Boolean),
    defaultPermissionPolicy: Schema.optional(Schema.String),
    passwordRequirements: Schema.optional(PasswordRequirements),
    choosePrivateKeyRules: Schema.optional(Schema.Array(ChoosePrivateKeyRule)),
    oncCertificateProviders: Schema.optional(
      Schema.Array(OncCertificateProvider),
    ),
    installUnknownSourcesAllowed: Schema.optional(Schema.Boolean),
    alwaysOnVpnPackage: Schema.optional(AlwaysOnVpnPackage),
    kioskCustomization: Schema.optional(KioskCustomization),
    version: Schema.optional(Schema.String),
    usageLog: Schema.optional(UsageLog),
    mountPhysicalMediaDisabled: Schema.optional(Schema.Boolean),
    microphoneAccess: Schema.optional(Schema.String),
    minimumApiLevel: Schema.optional(Schema.Number),
    permittedAccessibilityServices: Schema.optional(PackageNameList),
    locationMode: Schema.optional(Schema.String),
    androidDevicePolicyTracks: Schema.optional(Schema.Array(Schema.String)),
    permissionGrants: Schema.optional(Schema.Array(PermissionGrant)),
    networkResetDisabled: Schema.optional(Schema.Boolean),
    permittedInputMethods: Schema.optional(PackageNameList),
    credentialProviderPolicyDefault: Schema.optional(Schema.String),
    skipFirstUseHintsEnabled: Schema.optional(Schema.Boolean),
    deviceOwnerLockScreenInfo: Schema.optional(UserFacingMessage),
    stayOnPluggedModes: Schema.optional(Schema.Array(Schema.String)),
    longSupportMessage: Schema.optional(UserFacingMessage),
    autoDateAndTimeZone: Schema.optional(Schema.String),
    printingPolicy: Schema.optional(Schema.String),
    complianceRules: Schema.optional(Schema.Array(ComplianceRule)),
    shareLocationDisabled: Schema.optional(Schema.Boolean),
    usbFileTransferDisabled: Schema.optional(Schema.Boolean),
    mobileNetworksConfigDisabled: Schema.optional(Schema.Boolean),
    enterpriseDisplayNameVisibility: Schema.optional(Schema.String),
    installAppsDisabled: Schema.optional(Schema.Boolean),
    modifyAccountsDisabled: Schema.optional(Schema.Boolean),
    usbMassStorageEnabled: Schema.optional(Schema.Boolean),
    deviceRadioState: Schema.optional(DeviceRadioState),
    factoryResetDisabled: Schema.optional(Schema.Boolean),
    crossProfilePolicies: Schema.optional(CrossProfilePolicies),
    maximumTimeToLock: Schema.optional(Schema.String),
    setWallpaperDisabled: Schema.optional(Schema.Boolean),
    smsDisabled: Schema.optional(Schema.Boolean),
    appFunctions: Schema.optional(Schema.String),
    statusReportingSettings: Schema.optional(StatusReportingSettings),
    accountTypesWithManagementDisabled: Schema.optional(
      Schema.Array(Schema.String),
    ),
    outgoingBeamDisabled: Schema.optional(Schema.Boolean),
    removeUserDisabled: Schema.optional(Schema.Boolean),
    cameraDisabled: Schema.optional(Schema.Boolean),
    dataRoamingDisabled: Schema.optional(Schema.Boolean),
    applications: Schema.optional(Schema.Array(ApplicationPolicy)),
    debuggingFeaturesAllowed: Schema.optional(Schema.Boolean),
    kioskCustomLauncherEnabled: Schema.optional(Schema.Boolean),
    bluetoothContactSharingDisabled: Schema.optional(Schema.Boolean),
    setupActions: Schema.optional(Schema.Array(SetupAction)),
    passwordPolicies: Schema.optional(Schema.Array(PasswordRequirements)),
    openNetworkConfiguration: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    bluetoothConfigDisabled: Schema.optional(Schema.Boolean),
    wipeDataFlags: Schema.optional(Schema.Array(Schema.String)),
    recommendedGlobalProxy: Schema.optional(ProxyInfo),
    privateKeySelectionEnabled: Schema.optional(Schema.Boolean),
    safeBootDisabled: Schema.optional(Schema.Boolean),
    screenCaptureDisabled: Schema.optional(Schema.Boolean),
    deviceConnectivityManagement: Schema.optional(DeviceConnectivityManagement),
    shortSupportMessage: Schema.optional(UserFacingMessage),
    bluetoothDisabled: Schema.optional(Schema.Boolean),
    wifiConfigDisabled: Schema.optional(Schema.Boolean),
    assistContentPolicy: Schema.optional(Schema.String),
    unmuteMicrophoneDisabled: Schema.optional(Schema.Boolean),
    persistentPreferredActivities: Schema.optional(
      Schema.Array(PersistentPreferredActivity),
    ),
    vpnConfigDisabled: Schema.optional(Schema.Boolean),
    preferentialNetworkService: Schema.optional(Schema.String),
    appAutoUpdatePolicy: Schema.optional(Schema.String),
    defaultApplicationSettings: Schema.optional(
      Schema.Array(DefaultApplicationSetting),
    ),
    credentialsConfigDisabled: Schema.optional(Schema.Boolean),
    displaySettings: Schema.optional(DisplaySettings),
    autoTimeRequired: Schema.optional(Schema.Boolean),
    ensureVerifyAppsEnabled: Schema.optional(Schema.Boolean),
    systemUpdate: Schema.optional(SystemUpdate),
    policyEnforcementRules: Schema.optional(
      Schema.Array(PolicyEnforcementRule),
    ),
    createWindowsDisabled: Schema.optional(Schema.Boolean),
    uninstallAppsDisabled: Schema.optional(Schema.Boolean),
    addUserDisabled: Schema.optional(Schema.Boolean),
    cellBroadcastsConfigDisabled: Schema.optional(Schema.Boolean),
    adjustVolumeDisabled: Schema.optional(Schema.Boolean),
    statusBarDisabled: Schema.optional(Schema.Boolean),
    wifiConfigsLockdownEnabled: Schema.optional(Schema.Boolean),
    encryptionPolicy: Schema.optional(Schema.String),
    workAccountSetupConfig: Schema.optional(WorkAccountSetupConfig),
    funDisabled: Schema.optional(Schema.Boolean),
    tetheringConfigDisabled: Schema.optional(Schema.Boolean),
    networkEscapeHatchEnabled: Schema.optional(Schema.Boolean),
    frpAdminEmails: Schema.optional(Schema.Array(Schema.String)),
    outgoingCallsDisabled: Schema.optional(Schema.Boolean),
    keyguardDisabledFeatures: Schema.optional(Schema.Array(Schema.String)),
    blockApplicationsEnabled: Schema.optional(Schema.Boolean),
    cameraAccess: Schema.optional(Schema.String),
    personalUsagePolicies: Schema.optional(PersonalUsagePolicies),
    setUserIconDisabled: Schema.optional(Schema.Boolean),
    advancedSecurityOverrides: Schema.optional(AdvancedSecurityOverrides),
    autofillPolicy: Schema.optional(Schema.String),
  }).annotate({ identifier: "Policy" });

export interface ModifyPolicyApplicationsResponse {
  /** The updated policy. */
  policy?: Policy;
}

export const ModifyPolicyApplicationsResponse: Schema.Schema<ModifyPolicyApplicationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy: Schema.optional(Policy),
  }).annotate({ identifier: "ModifyPolicyApplicationsResponse" });

export interface OsStartupEvent {
  /** Verified Boot state. */
  verifiedBootState?:
    | "VERIFIED_BOOT_STATE_UNSPECIFIED"
    | "GREEN"
    | "YELLOW"
    | "ORANGE"
    | (string & {});
  /** dm-verity mode. */
  verityMode?:
    | "DM_VERITY_MODE_UNSPECIFIED"
    | "ENFORCING"
    | "IO_ERROR"
    | "DISABLED"
    | (string & {});
}

export const OsStartupEvent: Schema.Schema<OsStartupEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    verifiedBootState: Schema.optional(Schema.String),
    verityMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "OsStartupEvent" });

export interface PostureDetail {
  /** A specific security risk that negatively affects the security posture of the device. */
  securityRisk?:
    | "SECURITY_RISK_UNSPECIFIED"
    | "UNKNOWN_OS"
    | "COMPROMISED_OS"
    | "HARDWARE_BACKED_EVALUATION_FAILED"
    | (string & {});
  /** Corresponding admin-facing advice to mitigate this security risk and improve the security posture of the device. */
  advice?: ReadonlyArray<UserFacingMessage>;
}

export const PostureDetail: Schema.Schema<PostureDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    securityRisk: Schema.optional(Schema.String),
    advice: Schema.optional(Schema.Array(UserFacingMessage)),
  }).annotate({ identifier: "PostureDetail" });

export interface Status {
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "Status" });

export interface StopLostModeStatus {
  /** The status. See StopLostModeStatus. */
  status?:
    | "STATUS_UNSPECIFIED"
    | "SUCCESS"
    | "NOT_IN_LOST_MODE"
    | (string & {});
}

export const StopLostModeStatus: Schema.Schema<StopLostModeStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
  }).annotate({ identifier: "StopLostModeStatus" });

export interface RequestDeviceInfoStatus {
  /** Information related to the EIDs of the device. */
  eidInfo?: EidInfo;
  /** Output only. Status of a REQUEST_DEVICE_INFO command. */
  status?:
    | "STATUS_UNSPECIFIED"
    | "SUCCEEDED"
    | "PENDING_USER_ACTION"
    | "USER_DECLINED"
    | "UNSUPPORTED"
    | (string & {});
}

export const RequestDeviceInfoStatus: Schema.Schema<RequestDeviceInfoStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eidInfo: Schema.optional(EidInfo),
    status: Schema.optional(Schema.String),
  }).annotate({ identifier: "RequestDeviceInfoStatus" });

export interface StartLostModeStatus {
  /** The status. See StartLostModeStatus. */
  status?:
    | "STATUS_UNSPECIFIED"
    | "SUCCESS"
    | "RESET_PASSWORD_RECENTLY"
    | "USER_EXIT_LOST_MODE_RECENTLY"
    | "ALREADY_IN_LOST_MODE"
    | (string & {});
}

export const StartLostModeStatus: Schema.Schema<StartLostModeStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
  }).annotate({ identifier: "StartLostModeStatus" });

export interface ListPoliciesResponse {
  /** The list of policies. */
  policies?: ReadonlyArray<Policy>;
  /** If there are more results, a token to retrieve next page of results. */
  nextPageToken?: string;
}

export const ListPoliciesResponse: Schema.Schema<ListPoliciesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policies: Schema.optional(Schema.Array(Policy)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListPoliciesResponse" });

export interface StartLostModeParams {
  /** The message displayed to the user when the device is in lost mode. */
  lostMessage?: UserFacingMessage;
  /** The email address displayed to the user when the device is in lost mode. */
  lostEmailAddress?: string;
  /** The phone number that will be called when the device is in lost mode and the call owner button is tapped. */
  lostPhoneNumber?: UserFacingMessage;
  /** The street address displayed to the user when the device is in lost mode. */
  lostStreetAddress?: UserFacingMessage;
  /** The organization name displayed to the user when the device is in lost mode. */
  lostOrganization?: UserFacingMessage;
}

export const StartLostModeParams: Schema.Schema<StartLostModeParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lostMessage: Schema.optional(UserFacingMessage),
    lostEmailAddress: Schema.optional(Schema.String),
    lostPhoneNumber: Schema.optional(UserFacingMessage),
    lostStreetAddress: Schema.optional(UserFacingMessage),
    lostOrganization: Schema.optional(UserFacingMessage),
  }).annotate({ identifier: "StartLostModeParams" });

export interface ApplicationPermission {
  /** An opaque string uniquely identifying the permission. Not localized. */
  permissionId?: string;
  /** The name of the permission. Localized. */
  name?: string;
  /** A longer description of the permission, providing more detail on what it affects. Localized. */
  description?: string;
}

export const ApplicationPermission: Schema.Schema<ApplicationPermission> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissionId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "ApplicationPermission" });

export interface AppVersion {
  /** Track identifiers that the app version is published in. This does not include the production track (see production instead). */
  trackIds?: ReadonlyArray<string>;
  /** Unique increasing identifier for the app version. */
  versionCode?: number;
  /** The string used in the Play store by the app developer to identify the version. The string is not necessarily unique or localized (for example, the string could be "1.4"). */
  versionString?: string;
  /** If the value is True, it indicates that this version is a production track. */
  production?: boolean;
}

export const AppVersion: Schema.Schema<AppVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trackIds: Schema.optional(Schema.Array(Schema.String)),
    versionCode: Schema.optional(Schema.Number),
    versionString: Schema.optional(Schema.String),
    production: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AppVersion" });

export interface Application {
  /** A list of screenshot links representing the app. */
  screenshotUrls?: ReadonlyArray<string>;
  /** Noteworthy features (if any) of this app. */
  features?: ReadonlyArray<
    "APP_FEATURE_UNSPECIFIED" | "VPN_APP" | (string & {})
  >;
  /** The name of the author of the apps (for example, the app developer). */
  author?: string;
  /** The countries which this app is available in as per ISO 3166-1 alpha-2. */
  availableCountries?: ReadonlyArray<string>;
  /** A link to the (consumer) Google Play details page for the app. */
  playStoreUrl?: string;
  /** The minimum Android SDK necessary to run the app. */
  minAndroidSdkVersion?: number;
  /** Application tracks visible to the enterprise. */
  appTracks?: ReadonlyArray<AppTrackInfo>;
  /** Output only. The approximate time (within 7 days) the app was last published. */
  updateTime?: string;
  /** A link to a smaller image that can be used as an icon for the app. This image is suitable for use up to a pixel size of 128 x 128. */
  smallIconUrl?: string;
  /** Whether this app is free, free with in-app purchases, or paid. If the pricing is unspecified, this means the app is not generally available anymore (even though it might still be available to people who own it). */
  appPricing?:
    | "APP_PRICING_UNSPECIFIED"
    | "FREE"
    | "FREE_WITH_IN_APP_PURCHASE"
    | "PAID"
    | (string & {});
  /** The name of the app in the form enterprises/{enterprise}/applications/{package_name}. */
  name?: string;
  /** A link to an image that can be used as an icon for the app. This image is suitable for use up to a pixel size of 512 x 512. */
  iconUrl?: string;
  /** The permissions required by the app. */
  permissions?: ReadonlyArray<ApplicationPermission>;
  /** A localised description of the recent changes made to the app. */
  recentChanges?: string;
  /** Full app description, if available. */
  fullDescription?: string;
  /** The set of managed properties available to be pre-configured for the app. */
  managedProperties?: ReadonlyArray<ManagedProperty>;
  /** How and to whom the package is made available. */
  distributionChannel?:
    | "DISTRIBUTION_CHANNEL_UNSPECIFIED"
    | "PUBLIC_GOOGLE_HOSTED"
    | "PRIVATE_GOOGLE_HOSTED"
    | "PRIVATE_SELF_HOSTED"
    | (string & {});
  /** The title of the app. Localized. */
  title?: string;
  /** The localized promotional description, if available. */
  description?: string;
  /** The app category (e.g. RACING, SOCIAL, etc.) */
  category?: string;
  /** The content rating for this app. */
  contentRating?:
    | "CONTENT_RATING_UNSPECIFIED"
    | "THREE_YEARS"
    | "SEVEN_YEARS"
    | "TWELVE_YEARS"
    | "SIXTEEN_YEARS"
    | "EIGHTEEN_YEARS"
    | (string & {});
  /** Versions currently available for this app. */
  appVersions?: ReadonlyArray<AppVersion>;
}

export const Application: Schema.Schema<Application> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    screenshotUrls: Schema.optional(Schema.Array(Schema.String)),
    features: Schema.optional(Schema.Array(Schema.String)),
    author: Schema.optional(Schema.String),
    availableCountries: Schema.optional(Schema.Array(Schema.String)),
    playStoreUrl: Schema.optional(Schema.String),
    minAndroidSdkVersion: Schema.optional(Schema.Number),
    appTracks: Schema.optional(Schema.Array(AppTrackInfo)),
    updateTime: Schema.optional(Schema.String),
    smallIconUrl: Schema.optional(Schema.String),
    appPricing: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    iconUrl: Schema.optional(Schema.String),
    permissions: Schema.optional(Schema.Array(ApplicationPermission)),
    recentChanges: Schema.optional(Schema.String),
    fullDescription: Schema.optional(Schema.String),
    managedProperties: Schema.optional(Schema.Array(ManagedProperty)),
    distributionChannel: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
    contentRating: Schema.optional(Schema.String),
    appVersions: Schema.optional(Schema.Array(AppVersion)),
  }).annotate({ identifier: "Application" });

export interface MediaMountEvent {
  /** Mount point. */
  mountPoint?: string;
  /** Volume label. Redacted to empty string on organization-owned managed profile devices. */
  volumeLabel?: string;
}

export const MediaMountEvent: Schema.Schema<MediaMountEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mountPoint: Schema.optional(Schema.String),
    volumeLabel: Schema.optional(Schema.String),
  }).annotate({ identifier: "MediaMountEvent" });

export interface MediaUnmountEvent {
  /** Mount point. */
  mountPoint?: string;
  /** Volume label. Redacted to empty string on organization-owned managed profile devices. */
  volumeLabel?: string;
}

export const MediaUnmountEvent: Schema.Schema<MediaUnmountEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mountPoint: Schema.optional(Schema.String),
    volumeLabel: Schema.optional(Schema.String),
  }).annotate({ identifier: "MediaUnmountEvent" });

export interface SecurityPosture {
  /** Device's security posture value. */
  devicePosture?:
    | "POSTURE_UNSPECIFIED"
    | "SECURE"
    | "AT_RISK"
    | "POTENTIALLY_COMPROMISED"
    | (string & {});
  /** Additional details regarding the security posture of the device. */
  postureDetails?: ReadonlyArray<PostureDetail>;
}

export const SecurityPosture: Schema.Schema<SecurityPosture> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    devicePosture: Schema.optional(Schema.String),
    postureDetails: Schema.optional(Schema.Array(PostureDetail)),
  }).annotate({ identifier: "SecurityPosture" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface StopLostModeParams {}

export const StopLostModeParams: Schema.Schema<StopLostModeParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "StopLostModeParams",
  });

export interface AdbShellInteractiveEvent {}

export const AdbShellInteractiveEvent: Schema.Schema<AdbShellInteractiveEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AdbShellInteractiveEvent",
  });

export interface GoogleAuthenticationSettings {
  /** Output only. Whether users need to be authenticated by Google during the enrollment process. IT admin can specify if Google authentication is enabled for the enterprise for knowledge worker devices. This value can be set only via the Google Admin Console. Google authentication can be used with signin_url In the case where Google authentication is required and a signin_url is specified, Google authentication will be launched before signin_url. This value is overridden by EnrollmentToken.googleAuthenticationOptions and SigninDetail.googleAuthenticationOptions, if they are set. */
  googleAuthenticationRequired?:
    | "GOOGLE_AUTHENTICATION_REQUIRED_UNSPECIFIED"
    | "NOT_REQUIRED"
    | "REQUIRED"
    | (string & {});
}

export const GoogleAuthenticationSettings: Schema.Schema<GoogleAuthenticationSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    googleAuthenticationRequired: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAuthenticationSettings" });

export interface SigninDetail {
  /** An enterprise wide enrollment token used to trigger custom sign-in flow. This is a read-only field generated by the server. */
  signinEnrollmentToken?: string;
  /** Controls whether personal usage is allowed on a device provisioned with this enrollment token.For company-owned devices: Enabling personal usage allows the user to set up a work profile on the device. Disabling personal usage requires the user provision the device as a fully managed device.For personally-owned devices: Enabling personal usage allows the user to set up a work profile on the device. Disabling personal usage will prevent the device from provisioning. Personal usage cannot be disabled on personally-owned device. */
  allowPersonalUsage?:
    | "ALLOW_PERSONAL_USAGE_UNSPECIFIED"
    | "PERSONAL_USAGE_ALLOWED"
    | "PERSONAL_USAGE_DISALLOWED"
    | "PERSONAL_USAGE_DISALLOWED_USERLESS"
    | (string & {});
  /** Optional. Whether the sign-in URL should be used by default for the enterprise. The SigninDetail with defaultStatus set to SIGNIN_DETAIL_IS_DEFAULT is used for Google account enrollment method. Only one of an enterprise's signinDetails can have defaultStatus set to SIGNIN_DETAIL_IS_DEFAULT. If an Enterprise has at least one signinDetails and none of them have defaultStatus set to SIGNIN_DETAIL_IS_DEFAULT then the first one from the list is selected and has set defaultStatus to SIGNIN_DETAIL_IS_DEFAULT. If no signinDetails specified for the Enterprise then the Google Account device enrollment will fail. */
  defaultStatus?:
    | "SIGNIN_DETAIL_DEFAULT_STATUS_UNSPECIFIED"
    | "SIGNIN_DETAIL_IS_DEFAULT"
    | "SIGNIN_DETAIL_IS_NOT_DEFAULT"
    | (string & {});
  /** An EMM-specified metadata to distinguish between instances of SigninDetail. */
  tokenTag?: string;
  /** Sign-in URL for authentication when device is provisioned with a sign-in enrollment token. The sign-in endpoint should finish authentication flow with a URL in the form of https://enterprise.google.com/android/enroll?et= for a successful login, or https://enterprise.google.com/android/enroll/invalid for a failed login. */
  signinUrl?: string;
  /** A JSON string whose UTF-8 representation can be used to generate a QR code to enroll a device with this enrollment token. To enroll a device using NFC, the NFC record must contain a serialized java.util.Properties representation of the properties in the JSON. This is a read-only field generated by the server. */
  qrCode?: string;
}

export const SigninDetail: Schema.Schema<SigninDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    signinEnrollmentToken: Schema.optional(Schema.String),
    allowPersonalUsage: Schema.optional(Schema.String),
    defaultStatus: Schema.optional(Schema.String),
    tokenTag: Schema.optional(Schema.String),
    signinUrl: Schema.optional(Schema.String),
    qrCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "SigninDetail" });

export interface TermsAndConditions {
  /** A short header which appears above the HTML content. */
  header?: UserFacingMessage;
  /** A well-formatted HTML string. It will be parsed on the client with android.text.Html#fromHtml. */
  content?: UserFacingMessage;
}

export const TermsAndConditions: Schema.Schema<TermsAndConditions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    header: Schema.optional(UserFacingMessage),
    content: Schema.optional(UserFacingMessage),
  }).annotate({ identifier: "TermsAndConditions" });

export interface ContactInfo {
  /** Email address for a point of contact, which will be used to send important announcements related to managed Google Play. */
  contactEmail?: string;
  /** The name of the data protection officer. */
  dataProtectionOfficerName?: string;
  /** The name of the EU representative. */
  euRepresentativeName?: string;
  /** The email of the EU representative. The email is validated but not verified. */
  euRepresentativeEmail?: string;
  /** The phone number of the EU representative. The phone number is validated but not verified. */
  euRepresentativePhone?: string;
  /** The email of the data protection officer. The email is validated but not verified. */
  dataProtectionOfficerEmail?: string;
  /** The phone number of the data protection officer The phone number is validated but not verified. */
  dataProtectionOfficerPhone?: string;
}

export const ContactInfo: Schema.Schema<ContactInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contactEmail: Schema.optional(Schema.String),
    dataProtectionOfficerName: Schema.optional(Schema.String),
    euRepresentativeName: Schema.optional(Schema.String),
    euRepresentativeEmail: Schema.optional(Schema.String),
    euRepresentativePhone: Schema.optional(Schema.String),
    dataProtectionOfficerEmail: Schema.optional(Schema.String),
    dataProtectionOfficerPhone: Schema.optional(Schema.String),
  }).annotate({ identifier: "ContactInfo" });

export interface Enterprise {
  /** A color in RGB format that indicates the predominant color to display in the device management app UI. The color components are stored as follows: (red << 16) | (green << 8) | blue, where the value of each component is between 0 and 255, inclusive. */
  primaryColor?: number;
  /** Output only. The type of the enterprise. */
  enterpriseType?:
    | "ENTERPRISE_TYPE_UNSPECIFIED"
    | "MANAGED_GOOGLE_DOMAIN"
    | "MANAGED_GOOGLE_PLAY_ACCOUNTS_ENTERPRISE"
    | (string & {});
  /** Settings for Google-provided user authentication. */
  googleAuthenticationSettings?: GoogleAuthenticationSettings;
  /** The name of the enterprise which is generated by the server during creation, in the form enterprises/{enterpriseId}. */
  name?: string;
  /** The types of Google Pub/Sub notifications enabled for the enterprise. */
  enabledNotificationTypes?: ReadonlyArray<
    | "NOTIFICATION_TYPE_UNSPECIFIED"
    | "ENROLLMENT"
    | "COMPLIANCE_REPORT"
    | "STATUS_REPORT"
    | "COMMAND"
    | "USAGE_LOGS"
    | "ENTERPRISE_UPGRADE"
    | (string & {})
  >;
  /** Sign-in details of the enterprise. */
  signinDetails?: ReadonlyArray<SigninDetail>;
  /** An image displayed as a logo during device provisioning. Supported types are: image/bmp, image/gif, image/x-ico, image/jpeg, image/png, image/webp, image/vnd.wap.wbmp, image/x-adobe-dng. */
  logo?: ExternalData;
  /** Terms and conditions that must be accepted when provisioning a device for this enterprise. A page of terms is generated for each value in this list. */
  termsAndConditions?: ReadonlyArray<TermsAndConditions>;
  /** Output only. The type of a managed Google Play Accounts enterprise. */
  managedGooglePlayAccountsEnterpriseType?:
    | "MANAGED_GOOGLE_PLAY_ACCOUNTS_ENTERPRISE_TYPE_UNSPECIFIED"
    | "CUSTOMER_MANAGED"
    | "EMM_MANAGED"
    | (string & {});
  /** The enterprise contact info of an EMM-managed enterprise. */
  contactInfo?: ContactInfo;
  /** Deprecated and unused. */
  appAutoApprovalEnabled?: boolean;
  /** Output only. The type of managed Google domain. */
  managedGoogleDomainType?:
    | "MANAGED_GOOGLE_DOMAIN_TYPE_UNSPECIFIED"
    | "TYPE_TEAM"
    | "TYPE_DOMAIN"
    | (string & {});
  /** The name of the enterprise displayed to users. This field has a maximum length of 100 characters. */
  enterpriseDisplayName?: string;
  /** The topic which Pub/Sub notifications are published to, in the form projects/{project}/topics/{topic}. This field is only required if Pub/Sub notifications are enabled. */
  pubsubTopic?: string;
}

export const Enterprise: Schema.Schema<Enterprise> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primaryColor: Schema.optional(Schema.Number),
    enterpriseType: Schema.optional(Schema.String),
    googleAuthenticationSettings: Schema.optional(GoogleAuthenticationSettings),
    name: Schema.optional(Schema.String),
    enabledNotificationTypes: Schema.optional(Schema.Array(Schema.String)),
    signinDetails: Schema.optional(Schema.Array(SigninDetail)),
    logo: Schema.optional(ExternalData),
    termsAndConditions: Schema.optional(Schema.Array(TermsAndConditions)),
    managedGooglePlayAccountsEnterpriseType: Schema.optional(Schema.String),
    contactInfo: Schema.optional(ContactInfo),
    appAutoApprovalEnabled: Schema.optional(Schema.Boolean),
    managedGoogleDomainType: Schema.optional(Schema.String),
    enterpriseDisplayName: Schema.optional(Schema.String),
    pubsubTopic: Schema.optional(Schema.String),
  }).annotate({ identifier: "Enterprise" });

export interface RemoveEsimParams {
  /** Required. ICC ID of the eSIM profile to be deleted. */
  iccId?: string;
}

export const RemoveEsimParams: Schema.Schema<RemoveEsimParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    iccId: Schema.optional(Schema.String),
  }).annotate({ identifier: "RemoveEsimParams" });

export interface PerAppResult {
  /** The result of an attempt to clear the data of a single app. */
  clearingResult?:
    | "CLEARING_RESULT_UNSPECIFIED"
    | "SUCCESS"
    | "APP_NOT_FOUND"
    | "APP_PROTECTED"
    | "API_LEVEL"
    | (string & {});
}

export const PerAppResult: Schema.Schema<PerAppResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clearingResult: Schema.optional(Schema.String),
  }).annotate({ identifier: "PerAppResult" });

export interface ClearAppsDataStatus {
  /** The per-app results, a mapping from package names to the respective clearing result. */
  results?: Record<string, PerAppResult>;
}

export const ClearAppsDataStatus: Schema.Schema<ClearAppsDataStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(Schema.Record(Schema.String, PerAppResult)),
  }).annotate({ identifier: "ClearAppsDataStatus" });

export interface WipeParams {
  /** Optional. Flags to determine what data to wipe. */
  wipeDataFlags?: ReadonlyArray<
    | "WIPE_DATA_FLAG_UNSPECIFIED"
    | "PRESERVE_RESET_PROTECTION_DATA"
    | "WIPE_EXTERNAL_STORAGE"
    | "WIPE_ESIMS"
    | (string & {})
  >;
  /** Optional. A short message displayed to the user before wiping the work profile on personal devices. This has no effect on company owned devices. The maximum message length is 200 characters. */
  wipeReason?: UserFacingMessage;
}

export const WipeParams: Schema.Schema<WipeParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    wipeDataFlags: Schema.optional(Schema.Array(Schema.String)),
    wipeReason: Schema.optional(UserFacingMessage),
  }).annotate({ identifier: "WipeParams" });

export interface InternalErrorDetails {
  /** Output only. The error code detail corresponding to the error_code. */
  errorCodeDetail?:
    | "ERROR_CODE_DETAIL_UNSPECIFIED"
    | "ERROR_TIME_OUT"
    | "ERROR_EUICC_MISSING"
    | "ERROR_UNSUPPORTED_VERSION"
    | "ERROR_ADDRESS_MISSING"
    | "ERROR_INVALID_CONFIRMATION_CODE"
    | "ERROR_CERTIFICATE_ERROR"
    | "ERROR_NO_PROFILES_AVAILABLE"
    | "ERROR_CONNECTION_ERROR"
    | "ERROR_INVALID_RESPONSE"
    | "ERROR_CARRIER_LOCKED"
    | "ERROR_DISALLOWED_BY_PPR"
    | "ERROR_INVALID_ACTIVATION_CODE"
    | "ERROR_INCOMPATIBLE_CARRIER"
    | "ERROR_OPERATION_BUSY"
    | "ERROR_INSTALL_PROFILE"
    | "ERROR_EUICC_INSUFFICIENT_MEMORY"
    | "ERROR_INVALID_PORT"
    | "ERROR_SIM_MISSING"
    | (string & {});
  /** Output only. Integer representation of the operation code as specified here (https://developer.android.com/reference/android/telephony/euicc/EuiccManager#EXTRA_EMBEDDED_SUBSCRIPTION_DETAILED_CODE). See operation_code_detail for more details. */
  operationCode?: string;
  /** Output only. Integer representation of the error code as specified here (https://developer.android.com/reference/android/telephony/euicc/EuiccManager#EXTRA_EMBEDDED_SUBSCRIPTION_DETAILED_CODE). See also, OPERATION_SMDX_SUBJECT_REASON_CODE. See error_code_detail for more details. */
  errorCode?: string;
  /** Output only. The operation code detail corresponding to the operation_code. */
  operationCodeDetail?:
    | "OPERATION_CODE_DETAIL_UNSPECIFIED"
    | "OPERATION_SYSTEM"
    | "OPERATION_SIM_SLOT"
    | "OPERATION_EUICC_CARD"
    | "OPERATION_SMDX"
    | "OPERATION_SWITCH"
    | "OPERATION_DOWNLOAD"
    | "OPERATION_METADATA"
    | "OPERATION_EUICC_GSMA"
    | "OPERATION_APDU"
    | "OPERATION_SMDX_SUBJECT_REASON_CODE"
    | "OPERATION_HTTP"
    | (string & {});
}

export const InternalErrorDetails: Schema.Schema<InternalErrorDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorCodeDetail: Schema.optional(Schema.String),
    operationCode: Schema.optional(Schema.String),
    errorCode: Schema.optional(Schema.String),
    operationCodeDetail: Schema.optional(Schema.String),
  }).annotate({ identifier: "InternalErrorDetails" });

export interface EsimInfo {
  /** Output only. ICC ID of the eSIM. */
  iccId?: string;
}

export const EsimInfo: Schema.Schema<EsimInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    iccId: Schema.optional(Schema.String),
  }).annotate({ identifier: "EsimInfo" });

export interface EsimCommandStatus {
  /** Output only. Status of an ADD_ESIM or REMOVE_ESIM command. */
  status?:
    | "STATUS_UNSPECIFIED"
    | "SUCCESS"
    | "IN_PROGRESS"
    | "PENDING_USER_ACTION"
    | "ERROR_SETUP_IN_PROGRESS"
    | "ERROR_USER_DENIED"
    | "INTERNAL_ERROR"
    | "ERROR_ICC_ID_NOT_FOUND"
    | "ERROR_MULTIPLE_ACTIVE_ESIMS_NO_AVAILABLE_SLOT"
    | (string & {});
  /** Output only. Details of the error if the status is set to INTERNAL_ERROR. */
  internalErrorDetails?: InternalErrorDetails;
  /** Output only. Information about the eSIM added or removed. This is populated only when the eSIM operation status is SUCCESS. */
  esimInfo?: EsimInfo;
}

export const EsimCommandStatus: Schema.Schema<EsimCommandStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    internalErrorDetails: Schema.optional(InternalErrorDetails),
    esimInfo: Schema.optional(EsimInfo),
  }).annotate({ identifier: "EsimCommandStatus" });

export interface AddEsimParams {
  /** Required. The activation code for the eSIM profile. */
  activationCode?: string;
  /** Required. The activation state of the eSIM profile once it is downloaded. */
  activationState?:
    | "ACTIVATION_STATE_UNSPECIFIED"
    | "ACTIVATED"
    | "NOT_ACTIVATED"
    | (string & {});
}

export const AddEsimParams: Schema.Schema<AddEsimParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    activationCode: Schema.optional(Schema.String),
    activationState: Schema.optional(Schema.String),
  }).annotate({ identifier: "AddEsimParams" });

export interface RequestDeviceInfoParams {
  /** Required. Type of device information to be requested. */
  deviceInfo?: "DEVICE_INFO_UNSPECIFIED" | "EID" | (string & {});
}

export const RequestDeviceInfoParams: Schema.Schema<RequestDeviceInfoParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceInfo: Schema.optional(Schema.String),
  }).annotate({ identifier: "RequestDeviceInfoParams" });

export interface ClearAppsDataParams {
  /** The package names of the apps whose data will be cleared when the command is executed. */
  packageNames?: ReadonlyArray<string>;
}

export const ClearAppsDataParams: Schema.Schema<ClearAppsDataParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    packageNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ClearAppsDataParams" });

export interface Command {
  /** The type of the command. */
  type?:
    | "COMMAND_TYPE_UNSPECIFIED"
    | "LOCK"
    | "RESET_PASSWORD"
    | "REBOOT"
    | "RELINQUISH_OWNERSHIP"
    | "CLEAR_APP_DATA"
    | "START_LOST_MODE"
    | "STOP_LOST_MODE"
    | "ADD_ESIM"
    | "REMOVE_ESIM"
    | "REQUEST_DEVICE_INFO"
    | "WIPE"
    | (string & {});
  /** Optional. Parameters for the REMOVE_ESIM command to remove an eSIM profile from the device. If this is set, then it is suggested that type should not be set. In this case, the server automatically sets it to REMOVE_ESIM. It is also acceptable to explicitly set type to REMOVE_ESIM. */
  removeEsimParams?: RemoveEsimParams;
  /** Output only. Status of the CLEAR_APP_DATA command to clear the data of specified apps from the device. See ClearAppsDataStatus. */
  clearAppsDataStatus?: ClearAppsDataStatus;
  /** For commands of type RESET_PASSWORD, optionally specifies the new password. Note: The new password must be at least 6 characters long if it is numeric in case of Android 14 devices. Else the command will fail with INVALID_VALUE. */
  newPassword?: string;
  /** Output only. Status of the REQUEST_DEVICE_INFO command. */
  requestDeviceInfoStatus?: RequestDeviceInfoStatus;
  /** Parameters for the START_LOST_MODE command to put the device into lost mode. See StartLostModeParams. If this is set, then it is suggested that type should not be set. In this case, the server automatically sets it to START_LOST_MODE. It is also acceptable to explicitly set type to START_LOST_MODE. */
  startLostModeParams?: StartLostModeParams;
  /** If the command failed, an error code explaining the failure. This is not set when the command is cancelled by the caller. For reasoning about command errors, prefer fields in the following order (most preferred first): 1. Command-specific fields like clearAppsDataStatus, startLostModeStatus, or similar, if they exist. 2. This field, if set. 3. The generic error field in the Operation that wraps the command. */
  errorCode?:
    | "COMMAND_ERROR_CODE_UNSPECIFIED"
    | "UNKNOWN"
    | "API_LEVEL"
    | "MANAGEMENT_MODE"
    | "INVALID_VALUE"
    | "UNSUPPORTED"
    | (string & {});
  /** Optional. Parameters for the WIPE command to wipe the device. If this is set, then it is suggested that type should not be set. In this case, the server automatically sets it to WIPE. It is also acceptable to explicitly set type to WIPE. */
  wipeParams?: WipeParams;
  /** Output only. Status of an ADD_ESIM or REMOVE_ESIM command. */
  esimStatus?: EsimCommandStatus;
  /** Optional. Parameters for the ADD_ESIM command to add an eSIM profile to the device. If this is set, then it is suggested that type should not be set. In this case, the server automatically sets it to ADD_ESIM. It is also acceptable to explicitly set type to ADD_ESIM. */
  addEsimParams?: AddEsimParams;
  /** For commands of type RESET_PASSWORD, optionally specifies flags. */
  resetPasswordFlags?: ReadonlyArray<
    | "RESET_PASSWORD_FLAG_UNSPECIFIED"
    | "REQUIRE_ENTRY"
    | "DO_NOT_ASK_CREDENTIALS_ON_BOOT"
    | "LOCK_NOW"
    | (string & {})
  >;
  /** The timestamp at which the command was created. The timestamp is automatically generated by the server. */
  createTime?: string;
  /** Output only. Status of the STOP_LOST_MODE command to take the device out of lost mode. See StopLostModeStatus. */
  stopLostModeStatus?: StopLostModeStatus;
  /** Parameters for the STOP_LOST_MODE command to take the device out of lost mode. See StopLostModeParams. If this is set, then it is suggested that type should not be set. In this case, the server automatically sets it to STOP_LOST_MODE. It is also acceptable to explicitly set type to STOP_LOST_MODE. */
  stopLostModeParams?: StopLostModeParams;
  /** Optional. Parameters for the REQUEST_DEVICE_INFO command to get device related information. If this is set, then it is suggested that type should not be set. In this case, the server automatically sets it to REQUEST_DEVICE_INFO . It is also acceptable to explicitly set type to REQUEST_DEVICE_INFO. */
  requestDeviceInfoParams?: RequestDeviceInfoParams;
  /** The resource name of the user that owns the device in the form enterprises/{enterpriseId}/users/{userId}. This is automatically generated by the server based on the device the command is sent to. */
  userName?: string;
  /** Output only. Status of the START_LOST_MODE command to put the device into lost mode. See StartLostModeStatus. */
  startLostModeStatus?: StartLostModeStatus;
  /** The duration for which the command is valid. The command will expire if not executed by the device during this time. The default duration if unspecified is ten minutes. There is no maximum duration. */
  duration?: string;
  /** Parameters for the CLEAR_APP_DATA command to clear the data of specified apps from the device. See ClearAppsDataParams. If this is set, then it is suggested that type should not be set. In this case, the server automatically sets it to CLEAR_APP_DATA. It is also acceptable to explicitly set type to CLEAR_APP_DATA. */
  clearAppsDataParams?: ClearAppsDataParams;
}

export const Command: Schema.Schema<Command> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    removeEsimParams: Schema.optional(RemoveEsimParams),
    clearAppsDataStatus: Schema.optional(ClearAppsDataStatus),
    newPassword: Schema.optional(Schema.String),
    requestDeviceInfoStatus: Schema.optional(RequestDeviceInfoStatus),
    startLostModeParams: Schema.optional(StartLostModeParams),
    errorCode: Schema.optional(Schema.String),
    wipeParams: Schema.optional(WipeParams),
    esimStatus: Schema.optional(EsimCommandStatus),
    addEsimParams: Schema.optional(AddEsimParams),
    resetPasswordFlags: Schema.optional(Schema.Array(Schema.String)),
    createTime: Schema.optional(Schema.String),
    stopLostModeStatus: Schema.optional(StopLostModeStatus),
    stopLostModeParams: Schema.optional(StopLostModeParams),
    requestDeviceInfoParams: Schema.optional(RequestDeviceInfoParams),
    userName: Schema.optional(Schema.String),
    startLostModeStatus: Schema.optional(StartLostModeStatus),
    duration: Schema.optional(Schema.String),
    clearAppsDataParams: Schema.optional(ClearAppsDataParams),
  }).annotate({ identifier: "Command" });

export interface ApplicationPolicyChange {
  /** The field mask indicating the fields to update. If omitted, all modifiable fields are updated. */
  updateMask?: string;
  /** If ApplicationPolicy.packageName matches an existing ApplicationPolicy object within the Policy being modified, then that object will be updated. Otherwise, it will be added to the end of the Policy.applications. */
  application?: ApplicationPolicy;
}

export const ApplicationPolicyChange: Schema.Schema<ApplicationPolicyChange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String),
    application: Schema.optional(ApplicationPolicy),
  }).annotate({ identifier: "ApplicationPolicyChange" });

export interface ModifyPolicyApplicationsRequest {
  /** Required. The changes to be made to the ApplicationPolicy objects. There must be at least one ApplicationPolicyChange. */
  changes?: ReadonlyArray<ApplicationPolicyChange>;
}

export const ModifyPolicyApplicationsRequest: Schema.Schema<ModifyPolicyApplicationsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    changes: Schema.optional(Schema.Array(ApplicationPolicyChange)),
  }).annotate({ identifier: "ModifyPolicyApplicationsRequest" });

export interface KeyDestructionEvent {
  /** Alias of the key. */
  keyAlias?: string;
  /** UID of the application which owns the key. */
  applicationUid?: number;
  /** Whether the operation was successful. */
  success?: boolean;
}

export const KeyDestructionEvent: Schema.Schema<KeyDestructionEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyAlias: Schema.optional(Schema.String),
    applicationUid: Schema.optional(Schema.Number),
    success: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "KeyDestructionEvent" });

export interface RemoteLockEvent {
  /** User ID of the admin app from the which the change was requested. */
  adminUserId?: number;
  /** User ID in which the change was requested in. */
  targetUserId?: number;
  /** Package name of the admin app requesting the change. */
  adminPackageName?: string;
}

export const RemoteLockEvent: Schema.Schema<RemoteLockEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adminUserId: Schema.optional(Schema.Number),
    targetUserId: Schema.optional(Schema.Number),
    adminPackageName: Schema.optional(Schema.String),
  }).annotate({ identifier: "RemoteLockEvent" });

export interface DefaultApplicationSettingAttempt {
  /** Output only. The outcome of setting the app as the default. */
  attemptOutcome?:
    | "ATTEMPT_OUTCOME_UNSPECIFIED"
    | "SUCCESS"
    | "APP_NOT_INSTALLED"
    | "APP_SIGNING_CERT_MISMATCH"
    | "OTHER_FAILURE"
    | (string & {});
  /** Output only. The package name of the attempted application. */
  packageName?: string;
}

export const DefaultApplicationSettingAttempt: Schema.Schema<DefaultApplicationSettingAttempt> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attemptOutcome: Schema.optional(Schema.String),
    packageName: Schema.optional(Schema.String),
  }).annotate({ identifier: "DefaultApplicationSettingAttempt" });

export interface DefaultApplicationInfo {
  /** Output only. The default application type. */
  defaultApplicationType?:
    | "DEFAULT_APPLICATION_TYPE_UNSPECIFIED"
    | "DEFAULT_ASSISTANT"
    | "DEFAULT_BROWSER"
    | "DEFAULT_CALL_REDIRECTION"
    | "DEFAULT_CALL_SCREENING"
    | "DEFAULT_DIALER"
    | "DEFAULT_HOME"
    | "DEFAULT_SMS"
    | "DEFAULT_WALLET"
    | (string & {});
  /** Output only. The package name of the current default application. */
  packageName?: string;
  /** Output only. Details on the default application setting attempts, in the same order as listed in defaultApplications. */
  defaultApplicationSettingAttempts?: ReadonlyArray<DefaultApplicationSettingAttempt>;
}

export const DefaultApplicationInfo: Schema.Schema<DefaultApplicationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultApplicationType: Schema.optional(Schema.String),
    packageName: Schema.optional(Schema.String),
    defaultApplicationSettingAttempts: Schema.optional(
      Schema.Array(DefaultApplicationSettingAttempt),
    ),
  }).annotate({ identifier: "DefaultApplicationInfo" });

export interface SystemUpdateInfo {
  /** The time when the update was first available. A zero value indicates that this field is not set. This field is set only if an update is available (that is, updateStatus is neither UPDATE_STATUS_UNKNOWN nor UP_TO_DATE). */
  updateReceivedTime?: string;
  /** The status of an update: whether an update exists and what type it is. */
  updateStatus?:
    | "UPDATE_STATUS_UNKNOWN"
    | "UP_TO_DATE"
    | "UNKNOWN_UPDATE_AVAILABLE"
    | "SECURITY_UPDATE_AVAILABLE"
    | "OS_UPDATE_AVAILABLE"
    | (string & {});
}

export const SystemUpdateInfo: Schema.Schema<SystemUpdateInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateReceivedTime: Schema.optional(Schema.String),
    updateStatus: Schema.optional(Schema.String),
  }).annotate({ identifier: "SystemUpdateInfo" });

export interface SoftwareInfo {
  /** Information about a potential pending system update. */
  systemUpdateInfo?: SystemUpdateInfo;
  /** The system bootloader version number, e.g. 0.6.7. */
  bootloaderVersion?: string;
  /** The Android Device Policy app version code. */
  androidDevicePolicyVersionCode?: number;
  /** The Android Device Policy app version as displayed to the user. */
  androidDevicePolicyVersionName?: string;
  /** Kernel version, for example, 2.6.32.9-g103d848. */
  deviceKernelVersion?: string;
  /** SHA-256 hash of android.content.pm.Signature (https://developer.android.com/reference/android/content/pm/Signature.html) associated with the system package, which can be used to verify that the system build hasn't been modified. */
  deviceBuildSignature?: string;
  /** An IETF BCP 47 language code for the primary locale on the device. */
  primaryLanguageCode?: string;
  /** The user-visible Android version string. For example, 6.0.1. */
  androidVersion?: string;
  /** Android build ID string meant for displaying to the user. For example, shamu-userdebug 6.0.1 MOB30I 2756745 dev-keys. */
  androidBuildNumber?: string;
  /** Build time. */
  androidBuildTime?: string;
  /** Security patch level, e.g. 2016-05-01. */
  securityPatchLevel?: string;
}

export const SoftwareInfo: Schema.Schema<SoftwareInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    systemUpdateInfo: Schema.optional(SystemUpdateInfo),
    bootloaderVersion: Schema.optional(Schema.String),
    androidDevicePolicyVersionCode: Schema.optional(Schema.Number),
    androidDevicePolicyVersionName: Schema.optional(Schema.String),
    deviceKernelVersion: Schema.optional(Schema.String),
    deviceBuildSignature: Schema.optional(Schema.String),
    primaryLanguageCode: Schema.optional(Schema.String),
    androidVersion: Schema.optional(Schema.String),
    androidBuildNumber: Schema.optional(Schema.String),
    androidBuildTime: Schema.optional(Schema.String),
    securityPatchLevel: Schema.optional(Schema.String),
  }).annotate({ identifier: "SoftwareInfo" });

export interface OncWifiContext {
  /** The GUID of non-compliant Wi-Fi configuration. */
  wifiGuid?: string;
}

export const OncWifiContext: Schema.Schema<OncWifiContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    wifiGuid: Schema.optional(Schema.String),
  }).annotate({ identifier: "OncWifiContext" });

export interface PasswordPoliciesContext {
  /** The scope of non-compliant password. */
  passwordPolicyScope?:
    | "SCOPE_UNSPECIFIED"
    | "SCOPE_DEVICE"
    | "SCOPE_PROFILE"
    | (string & {});
}

export const PasswordPoliciesContext: Schema.Schema<PasswordPoliciesContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    passwordPolicyScope: Schema.optional(Schema.String),
  }).annotate({ identifier: "PasswordPoliciesContext" });

export interface DefaultApplicationContext {
  /** Output only. The scope of non-compliant default application setting. */
  defaultApplicationScope?:
    | "DEFAULT_APPLICATION_SCOPE_UNSPECIFIED"
    | "SCOPE_FULLY_MANAGED"
    | "SCOPE_WORK_PROFILE"
    | "SCOPE_PERSONAL_PROFILE"
    | (string & {});
}

export const DefaultApplicationContext: Schema.Schema<DefaultApplicationContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultApplicationScope: Schema.optional(Schema.String),
  }).annotate({ identifier: "DefaultApplicationContext" });

export interface SpecificNonComplianceContext {
  /** Additional context for non-compliance related to Wi-Fi configuration. See ONC_WIFI_INVALID_VALUE and ONC_WIFI_API_LEVEL */
  oncWifiContext?: OncWifiContext;
  /** Additional context for non-compliance related to password policies. See PASSWORD_POLICIES_PASSWORD_EXPIRED and PASSWORD_POLICIES_PASSWORD_NOT_SUFFICIENT. */
  passwordPoliciesContext?: PasswordPoliciesContext;
  /** Output only. Additional context for non-compliance related to default application settings. See DEFAULT_APPLICATION_SETTING_FAILED_FOR_SCOPE. */
  defaultApplicationContext?: DefaultApplicationContext;
}

export const SpecificNonComplianceContext: Schema.Schema<SpecificNonComplianceContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oncWifiContext: Schema.optional(OncWifiContext),
    passwordPoliciesContext: Schema.optional(PasswordPoliciesContext),
    defaultApplicationContext: Schema.optional(DefaultApplicationContext),
  }).annotate({ identifier: "SpecificNonComplianceContext" });

export interface NonComplianceDetail {
  /** The reason the device is not in compliance with the setting. */
  nonComplianceReason?:
    | "NON_COMPLIANCE_REASON_UNSPECIFIED"
    | "API_LEVEL"
    | "MANAGEMENT_MODE"
    | "USER_ACTION"
    | "INVALID_VALUE"
    | "APP_NOT_INSTALLED"
    | "UNSUPPORTED"
    | "APP_INSTALLED"
    | "PENDING"
    | "APP_INCOMPATIBLE"
    | "APP_NOT_UPDATED"
    | "DEVICE_INCOMPATIBLE"
    | "APP_SIGNING_CERT_MISMATCH"
    | "PROJECT_NOT_PERMITTED"
    | (string & {});
  /** Additional context for specific_non_compliance_reason. */
  specificNonComplianceContext?: SpecificNonComplianceContext;
  /** The policy-specific reason the device is not in compliance with the setting. */
  specificNonComplianceReason?:
    | "SPECIFIC_NON_COMPLIANCE_REASON_UNSPECIFIED"
    | "PASSWORD_POLICIES_USER_CREDENTIALS_CONFIRMATION_REQUIRED"
    | "PASSWORD_POLICIES_PASSWORD_EXPIRED"
    | "PASSWORD_POLICIES_PASSWORD_NOT_SUFFICIENT"
    | "ONC_WIFI_INVALID_VALUE"
    | "ONC_WIFI_API_LEVEL"
    | "ONC_WIFI_INVALID_ENTERPRISE_CONFIG"
    | "ONC_WIFI_USER_SHOULD_REMOVE_NETWORK"
    | "ONC_WIFI_KEY_PAIR_ALIAS_NOT_CORRESPONDING_TO_EXISTING_KEY"
    | "PERMISSIBLE_USAGE_RESTRICTION"
    | "REQUIRED_ACCOUNT_NOT_IN_ENTERPRISE"
    | "NEW_ACCOUNT_NOT_IN_ENTERPRISE"
    | "DEFAULT_APPLICATION_SETTING_UNSUPPORTED_SCOPES"
    | "DEFAULT_APPLICATION_SETTING_FAILED_FOR_SCOPE"
    | "PRIVATE_DNS_HOST_NOT_SERVING"
    | (string & {});
  /** The name of the policy setting. This is the JSON field name of a top-level Policy field. */
  settingName?: string;
  /** The package name indicating which app is out of compliance, if applicable. */
  packageName?: string;
  /** For settings with nested fields, if a particular nested field is out of compliance, this specifies the full path to the offending field. The path is formatted in the same way the policy JSON field would be referenced in JavaScript, that is: 1) For object-typed fields, the field name is followed by a dot then by a subfield name. 2) For array-typed fields, the field name is followed by the array index enclosed in brackets. For example, to indicate a problem with the url field in the externalData field in the 3rd application, the path would be applications[2].externalData.url */
  fieldPath?: string;
  /** If package_name is set and the non-compliance reason is APP_NOT_INSTALLED or APP_NOT_UPDATED, the detailed reason the app can't be installed or updated. */
  installationFailureReason?:
    | "INSTALLATION_FAILURE_REASON_UNSPECIFIED"
    | "INSTALLATION_FAILURE_REASON_UNKNOWN"
    | "IN_PROGRESS"
    | "NOT_FOUND"
    | "NOT_COMPATIBLE_WITH_DEVICE"
    | "NOT_APPROVED"
    | "PERMISSIONS_NOT_ACCEPTED"
    | "NOT_AVAILABLE_IN_COUNTRY"
    | "NO_LICENSES_REMAINING"
    | "NOT_ENROLLED"
    | "USER_INVALID"
    | "NETWORK_ERROR_UNRELIABLE_CONNECTION"
    | "INSUFFICIENT_STORAGE"
    | (string & {});
  /** If the policy setting could not be applied, the current value of the setting on the device. */
  currentValue?: unknown;
}

export const NonComplianceDetail: Schema.Schema<NonComplianceDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nonComplianceReason: Schema.optional(Schema.String),
    specificNonComplianceContext: Schema.optional(SpecificNonComplianceContext),
    specificNonComplianceReason: Schema.optional(Schema.String),
    settingName: Schema.optional(Schema.String),
    packageName: Schema.optional(Schema.String),
    fieldPath: Schema.optional(Schema.String),
    installationFailureReason: Schema.optional(Schema.String),
    currentValue: Schema.optional(Schema.Unknown),
  }).annotate({ identifier: "NonComplianceDetail" });

export interface TelephonyInfo {
  /** The phone number associated with this SIM card. */
  phoneNumber?: string;
  /** The carrier name associated with this SIM card. */
  carrierName?: string;
  /** Output only. Activation state of the SIM card on the device. This is applicable for eSIMs only. This is supported on all devices for Android 15 and above. This is always ACTIVATION_STATE_UNSPECIFIED for physical SIMs and for devices below Android 15. */
  activationState?:
    | "ACTIVATION_STATE_UNSPECIFIED"
    | "ACTIVATED"
    | "NOT_ACTIVATED"
    | (string & {});
  /** Output only. The configuration mode of the SIM card on the device. This is applicable for eSIMs only. This is supported on all devices for Android 15 and above. This is always CONFIG_MODE_UNSPECIFIED for physical SIMs and for devices below Android 15. */
  configMode?:
    | "CONFIG_MODE_UNSPECIFIED"
    | "ADMIN_CONFIGURED"
    | "USER_CONFIGURED"
    | (string & {});
  /** Output only. The ICCID associated with this SIM card. */
  iccId?: string;
}

export const TelephonyInfo: Schema.Schema<TelephonyInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    phoneNumber: Schema.optional(Schema.String),
    carrierName: Schema.optional(Schema.String),
    activationState: Schema.optional(Schema.String),
    configMode: Schema.optional(Schema.String),
    iccId: Schema.optional(Schema.String),
  }).annotate({ identifier: "TelephonyInfo" });

export interface NetworkInfo {
  /** MEID number of the CDMA device. For example, A00000292788E1. */
  meid?: string;
  /** IMEI number of the GSM device. For example, A1000031212. */
  imei?: string;
  /** Alphabetic name of current registered operator. For example, Vodafone. */
  networkOperatorName?: string;
  /** Wi-Fi MAC address of the device. For example, 7c:11:11:11:11:11. */
  wifiMacAddress?: string;
  /** Provides telephony information associated with each SIM card on the device. Only supported on fully managed devices starting from Android 6. */
  telephonyInfos?: ReadonlyArray<TelephonyInfo>;
}

export const NetworkInfo: Schema.Schema<NetworkInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    meid: Schema.optional(Schema.String),
    imei: Schema.optional(Schema.String),
    networkOperatorName: Schema.optional(Schema.String),
    wifiMacAddress: Schema.optional(Schema.String),
    telephonyInfos: Schema.optional(Schema.Array(TelephonyInfo)),
  }).annotate({ identifier: "NetworkInfo" });

export interface CommonCriteriaModeInfo {
  /** Whether Common Criteria Mode is enabled. */
  commonCriteriaModeStatus?:
    | "COMMON_CRITERIA_MODE_STATUS_UNKNOWN"
    | "COMMON_CRITERIA_MODE_DISABLED"
    | "COMMON_CRITERIA_MODE_ENABLED"
    | (string & {});
  /** Output only. The status of policy signature verification. */
  policySignatureVerificationStatus?:
    | "POLICY_SIGNATURE_VERIFICATION_STATUS_UNSPECIFIED"
    | "POLICY_SIGNATURE_VERIFICATION_DISABLED"
    | "POLICY_SIGNATURE_VERIFICATION_SUCCEEDED"
    | "POLICY_SIGNATURE_VERIFICATION_NOT_SUPPORTED"
    | "POLICY_SIGNATURE_VERIFICATION_FAILED"
    | (string & {});
}

export const CommonCriteriaModeInfo: Schema.Schema<CommonCriteriaModeInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    commonCriteriaModeStatus: Schema.optional(Schema.String),
    policySignatureVerificationStatus: Schema.optional(Schema.String),
  }).annotate({ identifier: "CommonCriteriaModeInfo" });

export interface Display {
  /** Name of the display. */
  name?: string;
  /** State of the display. */
  state?:
    | "DISPLAY_STATE_UNSPECIFIED"
    | "OFF"
    | "ON"
    | "DOZE"
    | "SUSPENDED"
    | (string & {});
  /** Refresh rate of the display in frames per second. */
  refreshRate?: number;
  /** Unique display id. */
  displayId?: number;
  /** Display density expressed as dots-per-inch. */
  density?: number;
  /** Display height in pixels. */
  height?: number;
  /** Display width in pixels. */
  width?: number;
}

export const Display: Schema.Schema<Display> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    refreshRate: Schema.optional(Schema.Number),
    displayId: Schema.optional(Schema.Number),
    density: Schema.optional(Schema.Number),
    height: Schema.optional(Schema.Number),
    width: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Display" });

export interface MemoryInfo {
  /** Total RAM on device in bytes. */
  totalRam?: string;
  /** Total internal storage on device in bytes. */
  totalInternalStorage?: string;
}

export const MemoryInfo: Schema.Schema<MemoryInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalRam: Schema.optional(Schema.String),
    totalInternalStorage: Schema.optional(Schema.String),
  }).annotate({ identifier: "MemoryInfo" });

export interface DpcMigrationInfo {
  /** Output only. If this device was migrated from another DPC, this is its package name. Not populated otherwise. */
  previousDpc?: string;
  /** Output only. If this device was migrated from another DPC, the additionalData field of the migration token is populated here. */
  additionalData?: string;
}

export const DpcMigrationInfo: Schema.Schema<DpcMigrationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    previousDpc: Schema.optional(Schema.String),
    additionalData: Schema.optional(Schema.String),
  }).annotate({ identifier: "DpcMigrationInfo" });

export interface DeviceSettings {
  /** Whether ADB (https://developer.android.com/studio/command-line/adb.html) is enabled on the device. */
  adbEnabled?: boolean;
  /** Whether installing apps from unknown sources is enabled. */
  unknownSourcesEnabled?: boolean;
  /** Whether the device is secured with PIN/password. */
  isDeviceSecure?: boolean;
  /** Encryption status from DevicePolicyManager. */
  encryptionStatus?:
    | "ENCRYPTION_STATUS_UNSPECIFIED"
    | "UNSUPPORTED"
    | "INACTIVE"
    | "ACTIVATING"
    | "ACTIVE"
    | "ACTIVE_DEFAULT_KEY"
    | "ACTIVE_PER_USER"
    | (string & {});
  /** Whether Google Play Protect verification (https://support.google.com/accounts/answer/2812853) is enforced on the device. */
  verifyAppsEnabled?: boolean;
  /** Whether developer mode is enabled on the device. */
  developmentSettingsEnabled?: boolean;
  /** Whether the storage encryption is enabled. */
  isEncrypted?: boolean;
}

export const DeviceSettings: Schema.Schema<DeviceSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adbEnabled: Schema.optional(Schema.Boolean),
    unknownSourcesEnabled: Schema.optional(Schema.Boolean),
    isDeviceSecure: Schema.optional(Schema.Boolean),
    encryptionStatus: Schema.optional(Schema.String),
    verifyAppsEnabled: Schema.optional(Schema.Boolean),
    developmentSettingsEnabled: Schema.optional(Schema.Boolean),
    isEncrypted: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DeviceSettings" });

export interface User {
  /** A unique identifier you create for this user, such as user342 or asset#44418. This field must be set when the user is created and can't be updated. This field must not contain personally identifiable information (PII). This identifier must be 1024 characters or less; otherwise, the update policy request will fail. */
  accountIdentifier?: string;
}

export const User: Schema.Schema<User> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountIdentifier: Schema.optional(Schema.String),
  }).annotate({ identifier: "User" });

export interface MemoryEvent {
  /** Event type. */
  eventType?:
    | "MEMORY_EVENT_TYPE_UNSPECIFIED"
    | "RAM_MEASURED"
    | "INTERNAL_STORAGE_MEASURED"
    | "EXTERNAL_STORAGE_DETECTED"
    | "EXTERNAL_STORAGE_REMOVED"
    | "EXTERNAL_STORAGE_MEASURED"
    | (string & {});
  /** The creation time of the event. */
  createTime?: string;
  /** The number of free bytes in the medium, or for EXTERNAL_STORAGE_DETECTED, the total capacity in bytes of the storage medium. */
  byteCount?: string;
}

export const MemoryEvent: Schema.Schema<MemoryEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventType: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    byteCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "MemoryEvent" });

export interface PowerManagementEvent {
  /** Event type. */
  eventType?:
    | "POWER_MANAGEMENT_EVENT_TYPE_UNSPECIFIED"
    | "BATTERY_LEVEL_COLLECTED"
    | "POWER_CONNECTED"
    | "POWER_DISCONNECTED"
    | "BATTERY_LOW"
    | "BATTERY_OKAY"
    | "BOOT_COMPLETED"
    | "SHUTDOWN"
    | (string & {});
  /** The creation time of the event. */
  createTime?: string;
  /** For BATTERY_LEVEL_COLLECTED events, the battery level as a percentage. */
  batteryLevel?: number;
}

export const PowerManagementEvent: Schema.Schema<PowerManagementEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventType: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    batteryLevel: Schema.optional(Schema.Number),
  }).annotate({ identifier: "PowerManagementEvent" });

export interface Device {
  /** Output only. The default application information for the DefaultApplicationType. This information is only available if defaultApplicationInfoReportingEnabled is true in the device's policy. Available on Android 16 and above.All app types are reported on fully managed devices. DEFAULT_BROWSER, DEFAULT_CALL_REDIRECTION, DEFAULT_CALL_SCREENING and DEFAULT_DIALER types are reported for the work profiles on company-owned devices with a work profile and personally-owned devices. DEFAULT_WALLET is also reported for company-owned devices with a work profile, but will only include work profile information. */
  defaultApplicationInfo?: ReadonlyArray<DefaultApplicationInfo>;
  /** Reports for apps installed on the device. This information is only available when application_reports_enabled is true in the device's policy. */
  applicationReports?: ReadonlyArray<ApplicationReport>;
  /** The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}. */
  name?: string;
  /** Detailed information about the device software. This information is only available if softwareInfoEnabled is true in the device's policy. */
  softwareInfo?: SoftwareInfo;
  /** Details about policy settings that the device is not compliant with. */
  nonComplianceDetails?: ReadonlyArray<NonComplianceDetail>;
  /** Whether the device is compliant with its policy. */
  policyCompliant?: boolean;
  /** Device network information. This information is only available if networkInfoEnabled is true in the device's policy. */
  networkInfo?: NetworkInfo;
  /** The name of the policy currently applied to the device. */
  appliedPolicyName?: string;
  /** Device's security posture value that reflects how secure the device is. */
  securityPosture?: SecurityPosture;
  /** The time of device enrollment. */
  enrollmentTime?: string;
  /** Deprecated. */
  lastPolicyComplianceReportTime?: string;
  /** Ownership of the managed device. */
  ownership?:
    | "OWNERSHIP_UNSPECIFIED"
    | "COMPANY_OWNED"
    | "PERSONALLY_OWNED"
    | (string & {});
  /** Information about Common Criteria Mode—security standards defined in the Common Criteria for Information Technology Security Evaluation (https://www.commoncriteriaportal.org/) (CC).This information is only available if statusReportingSettings.commonCriteriaModeEnabled is true in the device's policy the device is company-owned. */
  commonCriteriaModeInfo?: CommonCriteriaModeInfo;
  /** The API level of the Android platform version running on the device. */
  apiLevel?: number;
  /** Detailed information about displays on the device. This information is only available if displayInfoEnabled is true in the device's policy. */
  displays?: ReadonlyArray<Display>;
  /** Memory information: contains information about device memory and storage. */
  memoryInfo?: MemoryInfo;
  /** If the device state is DISABLED, an optional message that is displayed on the device indicating the reason the device is disabled. This field can be modified by a patch request. */
  disabledReason?: UserFacingMessage;
  /** The last time the device sent a status report. */
  lastStatusReportTime?: string;
  /** Output only. Information related to whether this device was migrated from being managed by another Device Policy Controller (DPC). */
  dpcMigrationInfo?: DpcMigrationInfo;
  /** The state currently applied to the device. */
  appliedState?:
    | "DEVICE_STATE_UNSPECIFIED"
    | "ACTIVE"
    | "DISABLED"
    | "DELETED"
    | "PROVISIONING"
    | "LOST"
    | "PREPARING_FOR_MIGRATION"
    | "DEACTIVATED_BY_DEVICE_FINANCE"
    | (string & {});
  /** Map of selected system properties name and value related to the device. This information is only available if systemPropertiesEnabled is true in the device's policy. */
  systemProperties?: Record<string, string>;
  /** The resource name of the user that owns this device in the form enterprises/{enterpriseId}/users/{userId}. */
  userName?: string;
  /** If the device was enrolled with an enrollment token with additional data provided, this field contains that data. */
  enrollmentTokenData?: string;
  /** The state to be applied to the device. This field can be modified by a patch request. Note that when calling enterprises.devices.patch, ACTIVE and DISABLED are the only allowable values. To enter the device into a DELETED state, call enterprises.devices.delete. */
  state?:
    | "DEVICE_STATE_UNSPECIFIED"
    | "ACTIVE"
    | "DISABLED"
    | "DELETED"
    | "PROVISIONING"
    | "LOST"
    | "PREPARING_FOR_MIGRATION"
    | "DEACTIVATED_BY_DEVICE_FINANCE"
    | (string & {});
  /** The name of the policy applied to the device, in the form enterprises/{enterpriseId}/policies/{policyId}. If not specified, the policy_name for the device's user is applied. This field can be modified by a patch request. You can specify only the policyId when calling enterprises.devices.patch, as long as the policyId doesn’t contain any slashes. The rest of the policy name is inferred. */
  policyName?: string;
  /** The version of the policy currently applied to the device. */
  appliedPolicyVersion?: string;
  /** Detailed information about the device hardware. */
  hardwareInfo?: HardwareInfo;
  /** Hardware status samples in chronological order. This information is only available if hardwareStatusEnabled is true in the device's policy. */
  hardwareStatusSamples?: ReadonlyArray<HardwareStatus>;
  /** The last time the device fetched its policy. */
  lastPolicySyncTime?: string;
  /** Device settings information. This information is only available if deviceSettingsEnabled is true in the device's policy. */
  deviceSettings?: DeviceSettings;
  /** The user who owns the device. */
  user?: User;
  /** Events related to memory and storage measurements in chronological order. This information is only available if memoryInfoEnabled is true in the device's policy.Events are retained for a certain period of time and old events are deleted. */
  memoryEvents?: ReadonlyArray<MemoryEvent>;
  /** If the same physical device has been enrolled multiple times, this field contains its previous device names. The serial number is used as the unique identifier to determine if the same physical device has enrolled previously. The names are in chronological order. */
  previousDeviceNames?: ReadonlyArray<string>;
  /** The password requirements currently applied to the device. This field exists because the applied requirements may be slightly different from those specified in passwordPolicies in some cases. Note that this field does not provide information about password compliance. For non-compliance information, see nonComplianceDetails. NonComplianceDetail.fieldPath, is set based on passwordPolicies, not based on this field. */
  appliedPasswordPolicies?: ReadonlyArray<PasswordRequirements>;
  /** The type of management mode Android Device Policy takes on the device. This influences which policy settings are supported. */
  managementMode?:
    | "MANAGEMENT_MODE_UNSPECIFIED"
    | "DEVICE_OWNER"
    | "PROFILE_OWNER"
    | (string & {});
  /** Power management events on the device in chronological order. This information is only available if powerManagementEventsEnabled is true in the device's policy. */
  powerManagementEvents?: ReadonlyArray<PowerManagementEvent>;
  /** If the device was enrolled with an enrollment token, this field contains the name of the token. */
  enrollmentTokenName?: string;
}

export const Device: Schema.Schema<Device> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultApplicationInfo: Schema.optional(
      Schema.Array(DefaultApplicationInfo),
    ),
    applicationReports: Schema.optional(Schema.Array(ApplicationReport)),
    name: Schema.optional(Schema.String),
    softwareInfo: Schema.optional(SoftwareInfo),
    nonComplianceDetails: Schema.optional(Schema.Array(NonComplianceDetail)),
    policyCompliant: Schema.optional(Schema.Boolean),
    networkInfo: Schema.optional(NetworkInfo),
    appliedPolicyName: Schema.optional(Schema.String),
    securityPosture: Schema.optional(SecurityPosture),
    enrollmentTime: Schema.optional(Schema.String),
    lastPolicyComplianceReportTime: Schema.optional(Schema.String),
    ownership: Schema.optional(Schema.String),
    commonCriteriaModeInfo: Schema.optional(CommonCriteriaModeInfo),
    apiLevel: Schema.optional(Schema.Number),
    displays: Schema.optional(Schema.Array(Display)),
    memoryInfo: Schema.optional(MemoryInfo),
    disabledReason: Schema.optional(UserFacingMessage),
    lastStatusReportTime: Schema.optional(Schema.String),
    dpcMigrationInfo: Schema.optional(DpcMigrationInfo),
    appliedState: Schema.optional(Schema.String),
    systemProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    userName: Schema.optional(Schema.String),
    enrollmentTokenData: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    policyName: Schema.optional(Schema.String),
    appliedPolicyVersion: Schema.optional(Schema.String),
    hardwareInfo: Schema.optional(HardwareInfo),
    hardwareStatusSamples: Schema.optional(Schema.Array(HardwareStatus)),
    lastPolicySyncTime: Schema.optional(Schema.String),
    deviceSettings: Schema.optional(DeviceSettings),
    user: Schema.optional(User),
    memoryEvents: Schema.optional(Schema.Array(MemoryEvent)),
    previousDeviceNames: Schema.optional(Schema.Array(Schema.String)),
    appliedPasswordPolicies: Schema.optional(
      Schema.Array(PasswordRequirements),
    ),
    managementMode: Schema.optional(Schema.String),
    powerManagementEvents: Schema.optional(Schema.Array(PowerManagementEvent)),
    enrollmentTokenName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Device" });

export interface ListDevicesResponse {
  /** If there are more results, a token to retrieve next page of results. */
  nextPageToken?: string;
  /** The list of devices. */
  devices?: ReadonlyArray<Device>;
}

export const ListDevicesResponse: Schema.Schema<ListDevicesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    devices: Schema.optional(Schema.Array(Device)),
  }).annotate({ identifier: "ListDevicesResponse" });

export interface DnsEvent {
  /** The (possibly truncated) list of the IP addresses returned for DNS lookup (max 10 IPv4 or IPv6 addresses). */
  ipAddresses?: ReadonlyArray<string>;
  /** The hostname that was looked up. */
  hostname?: string;
  /** The number of IP addresses returned from the DNS lookup event. May be higher than the amount of ip_addresses if there were too many addresses to log. */
  totalIpAddressesReturned?: string;
  /** The package name of the UID that performed the DNS lookup. */
  packageName?: string;
}

export const DnsEvent: Schema.Schema<DnsEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ipAddresses: Schema.optional(Schema.Array(Schema.String)),
    hostname: Schema.optional(Schema.String),
    totalIpAddressesReturned: Schema.optional(Schema.String),
    packageName: Schema.optional(Schema.String),
  }).annotate({ identifier: "DnsEvent" });

export interface AdbShellCommandEvent {
  /** Shell command that was issued over ADB via "adb shell command". Redacted to empty string on organization-owned managed profile devices. */
  shellCmd?: string;
}

export const AdbShellCommandEvent: Schema.Schema<AdbShellCommandEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    shellCmd: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdbShellCommandEvent" });

export interface FilePushedEvent {
  /** The path of the file being pushed. */
  filePath?: string;
}

export const FilePushedEvent: Schema.Schema<FilePushedEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filePath: Schema.optional(Schema.String),
  }).annotate({ identifier: "FilePushedEvent" });

export interface KeyGeneratedEvent {
  /** Alias of the key. */
  keyAlias?: string;
  /** UID of the application which generated the key. */
  applicationUid?: number;
  /** Whether the operation was successful. */
  success?: boolean;
}

export const KeyGeneratedEvent: Schema.Schema<KeyGeneratedEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyAlias: Schema.optional(Schema.String),
    applicationUid: Schema.optional(Schema.Number),
    success: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "KeyGeneratedEvent" });

export interface StopLostModeUserAttemptEvent {
  /** The status of the attempt to stop lost mode. */
  status?:
    | "STATUS_UNSPECIFIED"
    | "ATTEMPT_SUCCEEDED"
    | "ATTEMPT_FAILED"
    | (string & {});
}

export const StopLostModeUserAttemptEvent: Schema.Schema<StopLostModeUserAttemptEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
  }).annotate({ identifier: "StopLostModeUserAttemptEvent" });

export interface LoggingStoppedEvent {}

export const LoggingStoppedEvent: Schema.Schema<LoggingStoppedEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "LoggingStoppedEvent",
  });

export interface CertValidationFailureEvent {
  /** The reason why certification validation failed. */
  failureReason?: string;
}

export const CertValidationFailureEvent: Schema.Schema<CertValidationFailureEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    failureReason: Schema.optional(Schema.String),
  }).annotate({ identifier: "CertValidationFailureEvent" });

export interface KeyImportEvent {
  /** Alias of the key. */
  keyAlias?: string;
  /** UID of the application which imported the key */
  applicationUid?: number;
  /** Whether the operation was successful. */
  success?: boolean;
}

export const KeyImportEvent: Schema.Schema<KeyImportEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyAlias: Schema.optional(Schema.String),
    applicationUid: Schema.optional(Schema.Number),
    success: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "KeyImportEvent" });

export interface KeyguardDismissedEvent {}

export const KeyguardDismissedEvent: Schema.Schema<KeyguardDismissedEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "KeyguardDismissedEvent",
  });

export interface BackupServiceToggledEvent {
  /** Whether the backup service is enabled */
  backupServiceState?:
    | "BACKUP_SERVICE_STATE_UNSPECIFIED"
    | "BACKUP_SERVICE_DISABLED"
    | "BACKUP_SERVICE_ENABLED"
    | (string & {});
  /** Package name of the admin app requesting the change. */
  adminPackageName?: string;
  /** User ID of the admin app from the which the change was requested. */
  adminUserId?: number;
}

export const BackupServiceToggledEvent: Schema.Schema<BackupServiceToggledEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backupServiceState: Schema.optional(Schema.String),
    adminPackageName: Schema.optional(Schema.String),
    adminUserId: Schema.optional(Schema.Number),
  }).annotate({ identifier: "BackupServiceToggledEvent" });

export interface LoggingStartedEvent {}

export const LoggingStartedEvent: Schema.Schema<LoggingStartedEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "LoggingStartedEvent",
  });

export interface CertAuthorityRemovedEvent {
  /** Subject of the certificate. */
  certificate?: string;
  /** Whether the removal succeeded. */
  success?: boolean;
  /** The user in which the certificate removal event occurred. Only available for devices running Android 11 and above. */
  userId?: number;
}

export const CertAuthorityRemovedEvent: Schema.Schema<CertAuthorityRemovedEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificate: Schema.optional(Schema.String),
    success: Schema.optional(Schema.Boolean),
    userId: Schema.optional(Schema.Number),
  }).annotate({ identifier: "CertAuthorityRemovedEvent" });

export interface ConnectEvent {
  /** The destination IP address of the connect call. */
  destinationIpAddress?: string;
  /** The destination port of the connect call. */
  destinationPort?: number;
  /** The package name of the UID that performed the connect call. */
  packageName?: string;
}

export const ConnectEvent: Schema.Schema<ConnectEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destinationIpAddress: Schema.optional(Schema.String),
    destinationPort: Schema.optional(Schema.Number),
    packageName: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConnectEvent" });

export interface FilePulledEvent {
  /** The path of the file being pulled. */
  filePath?: string;
}

export const FilePulledEvent: Schema.Schema<FilePulledEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filePath: Schema.optional(Schema.String),
  }).annotate({ identifier: "FilePulledEvent" });

export interface WipeFailureEvent {}

export const WipeFailureEvent: Schema.Schema<WipeFailureEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "WipeFailureEvent",
  });

export interface LostModeOutgoingPhoneCallEvent {}

export const LostModeOutgoingPhoneCallEvent: Schema.Schema<LostModeOutgoingPhoneCallEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "LostModeOutgoingPhoneCallEvent",
  });

export interface EnrollmentCompleteEvent {}

export const EnrollmentCompleteEvent: Schema.Schema<EnrollmentCompleteEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "EnrollmentCompleteEvent",
  });

export interface KeyguardDismissAuthAttemptEvent {
  /** Whether the unlock attempt was successful. */
  success?: boolean;
  /** Whether a strong form of authentication (password, PIN, or pattern) was used to unlock device. */
  strongAuthMethodUsed?: boolean;
}

export const KeyguardDismissAuthAttemptEvent: Schema.Schema<KeyguardDismissAuthAttemptEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    success: Schema.optional(Schema.Boolean),
    strongAuthMethodUsed: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "KeyguardDismissAuthAttemptEvent" });

export interface OsShutdownEvent {}

export const OsShutdownEvent: Schema.Schema<OsShutdownEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "OsShutdownEvent",
  });

export interface LogBufferSizeCriticalEvent {}

export const LogBufferSizeCriticalEvent: Schema.Schema<LogBufferSizeCriticalEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "LogBufferSizeCriticalEvent",
  });

export interface UsageLogEvent {
  /** A shell command was issued over ADB via “adb shell command”. Part of SECURITY_LOGS. */
  adbShellCommandEvent?: AdbShellCommandEvent;
  /** Unique id of the event. */
  eventId?: string;
  /** A file was uploaded onto the device. Part of SECURITY_LOGS. */
  filePushedEvent?: FilePushedEvent;
  /** A new root certificate was installed into the system's trusted credential storage. Part of SECURITY_LOGS. */
  certAuthorityInstalledEvent?: CertAuthorityInstalledEvent;
  /** A cryptographic key including user installed, admin installed and system maintained private key is installed on the device either by the user or management. Part of SECURITY_LOGS. */
  keyGeneratedEvent?: KeyGeneratedEvent;
  /** An attempt to take a device out of lost mode. */
  stopLostModeUserAttemptEvent?: StopLostModeUserAttemptEvent;
  /** usageLog policy has been disabled. Part of SECURITY_LOGS. */
  loggingStoppedEvent?: LoggingStoppedEvent;
  /** An X.509v3 certificate failed to validate, currently this validation is performed on the Wi-FI access point and failure may be due to a mismatch upon server certificate validation. However it may in the future include other validation events of an X.509v3 certificate. Part of SECURITY_LOGS. */
  certValidationFailureEvent?: CertValidationFailureEvent;
  /** A cryptographic key including user installed, admin installed and system maintained private key is removed from the device either by the user or management. Part of SECURITY_LOGS. */
  keyDestructionEvent?: KeyDestructionEvent;
  /** A cryptographic key including user installed, admin installed and system maintained private key is determined to be corrupted due to storage corruption, hardware failure or some OS issue. Part of SECURITY_LOGS. */
  keyIntegrityViolationEvent?: KeyIntegrityViolationEvent;
  /** A cryptographic key including user installed, admin installed and system maintained private key is imported on the device either by the user or management. Part of SECURITY_LOGS. */
  keyImportEvent?: KeyImportEvent;
  /** A lost mode location update when a device in lost mode. */
  lostModeLocationEvent?: LostModeLocationEvent;
  /** Removable media was unmounted. Part of SECURITY_LOGS. */
  mediaUnmountEvent?: MediaUnmountEvent;
  /** The keyguard was dismissed. Part of SECURITY_LOGS. */
  keyguardDismissedEvent?: KeyguardDismissedEvent;
  /** An ADB interactive shell was opened via “adb shell”. Part of SECURITY_LOGS. */
  adbShellInteractiveEvent?: AdbShellInteractiveEvent;
  /** An admin has enabled or disabled backup service. Part of SECURITY_LOGS. */
  backupServiceToggledEvent?: BackupServiceToggledEvent;
  /** The particular usage log event type that was reported on the device. Use this to determine which event field to access. */
  eventType?:
    | "EVENT_TYPE_UNSPECIFIED"
    | "ADB_SHELL_COMMAND"
    | "ADB_SHELL_INTERACTIVE"
    | "APP_PROCESS_START"
    | "KEYGUARD_DISMISSED"
    | "KEYGUARD_DISMISS_AUTH_ATTEMPT"
    | "KEYGUARD_SECURED"
    | "FILE_PULLED"
    | "FILE_PUSHED"
    | "CERT_AUTHORITY_INSTALLED"
    | "CERT_AUTHORITY_REMOVED"
    | "CERT_VALIDATION_FAILURE"
    | "CRYPTO_SELF_TEST_COMPLETED"
    | "KEY_DESTRUCTION"
    | "KEY_GENERATED"
    | "KEY_IMPORT"
    | "KEY_INTEGRITY_VIOLATION"
    | "LOGGING_STARTED"
    | "LOGGING_STOPPED"
    | "LOG_BUFFER_SIZE_CRITICAL"
    | "MEDIA_MOUNT"
    | "MEDIA_UNMOUNT"
    | "OS_SHUTDOWN"
    | "OS_STARTUP"
    | "REMOTE_LOCK"
    | "WIPE_FAILURE"
    | "CONNECT"
    | "DNS"
    | "STOP_LOST_MODE_USER_ATTEMPT"
    | "LOST_MODE_OUTGOING_PHONE_CALL"
    | "LOST_MODE_LOCATION"
    | "ENROLLMENT_COMPLETE"
    | "BACKUP_SERVICE_TOGGLED"
    | (string & {});
  /** usageLog policy has been enabled. Part of SECURITY_LOGS. */
  loggingStartedEvent?: LoggingStartedEvent;
  /** A root certificate was removed from the system's trusted credential storage. Part of SECURITY_LOGS. */
  certAuthorityRemovedEvent?: CertAuthorityRemovedEvent;
  /** A TCP connect event was initiated through the standard network stack. Part of NETWORK_ACTIVITY_LOGS. */
  connectEvent?: ConnectEvent;
  /** A file was downloaded from the device. Part of SECURITY_LOGS. */
  filePulledEvent?: FilePulledEvent;
  /** Device timestamp when the event was logged. */
  eventTime?: string;
  /** The work profile or company-owned device failed to wipe when requested. This could be user initiated or admin initiated e.g. delete was received. Part of SECURITY_LOGS. */
  wipeFailureEvent?: WipeFailureEvent;
  /** The device or profile has been remotely locked via the LOCK command. Part of SECURITY_LOGS. */
  remoteLockEvent?: RemoteLockEvent;
  /** Validates whether Android’s built-in cryptographic library (BoringSSL) is valid. Should always succeed on device boot, if it fails, the device should be considered untrusted. Part of SECURITY_LOGS. */
  cryptoSelfTestCompletedEvent?: CryptoSelfTestCompletedEvent;
  /** Device was started. Part of SECURITY_LOGS. */
  osStartupEvent?: OsStartupEvent;
  /** Removable media was mounted. Part of SECURITY_LOGS. */
  mediaMountEvent?: MediaMountEvent;
  /** The device was locked either by user or timeout. Part of SECURITY_LOGS. */
  keyguardSecuredEvent?: KeyguardSecuredEvent;
  /** An outgoing phone call has been made when a device in lost mode. */
  lostModeOutgoingPhoneCallEvent?: LostModeOutgoingPhoneCallEvent;
  /** An app process was started. Part of SECURITY_LOGS. */
  appProcessStartEvent?: AppProcessStartEvent;
  /** Device has completed enrollment. Part of AMAPI_LOGS. */
  enrollmentCompleteEvent?: EnrollmentCompleteEvent;
  /** An attempt was made to unlock the device. Part of SECURITY_LOGS. */
  keyguardDismissAuthAttemptEvent?: KeyguardDismissAuthAttemptEvent;
  /** Device was shutdown. Part of SECURITY_LOGS. */
  osShutdownEvent?: OsShutdownEvent;
  /** The audit log buffer has reached 90% of its capacity, therefore older events may be dropped. Part of SECURITY_LOGS. */
  logBufferSizeCriticalEvent?: LogBufferSizeCriticalEvent;
  /** A DNS lookup event was initiated through the standard network stack. Part of NETWORK_ACTIVITY_LOGS. */
  dnsEvent?: DnsEvent;
}

export const UsageLogEvent: Schema.Schema<UsageLogEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adbShellCommandEvent: Schema.optional(AdbShellCommandEvent),
    eventId: Schema.optional(Schema.String),
    filePushedEvent: Schema.optional(FilePushedEvent),
    certAuthorityInstalledEvent: Schema.optional(CertAuthorityInstalledEvent),
    keyGeneratedEvent: Schema.optional(KeyGeneratedEvent),
    stopLostModeUserAttemptEvent: Schema.optional(StopLostModeUserAttemptEvent),
    loggingStoppedEvent: Schema.optional(LoggingStoppedEvent),
    certValidationFailureEvent: Schema.optional(CertValidationFailureEvent),
    keyDestructionEvent: Schema.optional(KeyDestructionEvent),
    keyIntegrityViolationEvent: Schema.optional(KeyIntegrityViolationEvent),
    keyImportEvent: Schema.optional(KeyImportEvent),
    lostModeLocationEvent: Schema.optional(LostModeLocationEvent),
    mediaUnmountEvent: Schema.optional(MediaUnmountEvent),
    keyguardDismissedEvent: Schema.optional(KeyguardDismissedEvent),
    adbShellInteractiveEvent: Schema.optional(AdbShellInteractiveEvent),
    backupServiceToggledEvent: Schema.optional(BackupServiceToggledEvent),
    eventType: Schema.optional(Schema.String),
    loggingStartedEvent: Schema.optional(LoggingStartedEvent),
    certAuthorityRemovedEvent: Schema.optional(CertAuthorityRemovedEvent),
    connectEvent: Schema.optional(ConnectEvent),
    filePulledEvent: Schema.optional(FilePulledEvent),
    eventTime: Schema.optional(Schema.String),
    wipeFailureEvent: Schema.optional(WipeFailureEvent),
    remoteLockEvent: Schema.optional(RemoteLockEvent),
    cryptoSelfTestCompletedEvent: Schema.optional(CryptoSelfTestCompletedEvent),
    osStartupEvent: Schema.optional(OsStartupEvent),
    mediaMountEvent: Schema.optional(MediaMountEvent),
    keyguardSecuredEvent: Schema.optional(KeyguardSecuredEvent),
    lostModeOutgoingPhoneCallEvent: Schema.optional(
      LostModeOutgoingPhoneCallEvent,
    ),
    appProcessStartEvent: Schema.optional(AppProcessStartEvent),
    enrollmentCompleteEvent: Schema.optional(EnrollmentCompleteEvent),
    keyguardDismissAuthAttemptEvent: Schema.optional(
      KeyguardDismissAuthAttemptEvent,
    ),
    osShutdownEvent: Schema.optional(OsShutdownEvent),
    logBufferSizeCriticalEvent: Schema.optional(LogBufferSizeCriticalEvent),
    dnsEvent: Schema.optional(DnsEvent),
  }).annotate({ identifier: "UsageLogEvent" });

export interface BatchUsageLogEvents {
  /** If present, the name of the device in the form ‘enterprises/{enterpriseId}/devices/{deviceId}’ */
  device?: string;
  /** The device timestamp when the batch of events were collected from the device. */
  retrievalTime?: string;
  /** The list of UsageLogEvent that were reported by the device, sorted chronologically by the event time. */
  usageLogEvents?: ReadonlyArray<UsageLogEvent>;
  /** If present, the resource name of the user that owns this device in the form ‘enterprises/{enterpriseId}/users/{userId}’. */
  user?: string;
}

export const BatchUsageLogEvents: Schema.Schema<BatchUsageLogEvents> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    device: Schema.optional(Schema.String),
    retrievalTime: Schema.optional(Schema.String),
    usageLogEvents: Schema.optional(Schema.Array(UsageLogEvent)),
    user: Schema.optional(Schema.String),
  }).annotate({ identifier: "BatchUsageLogEvents" });

export interface WebApp {
  /** The current version of the app.Note that the version can automatically increase during the lifetime of the web app, while Google does internal housekeeping to keep the web app up-to-date. */
  versionCode?: string;
  /** The start URL, i.e. the URL that should load when the user opens the application. */
  startUrl?: string;
  /** The display mode of the web app. */
  displayMode?:
    | "DISPLAY_MODE_UNSPECIFIED"
    | "MINIMAL_UI"
    | "STANDALONE"
    | "FULL_SCREEN"
    | (string & {});
  /** The title of the web app as displayed to the user (e.g., amongst a list of other applications, or as a label for an icon). */
  title?: string;
  /** A list of icons for the web app. Must have at least one element. */
  icons?: ReadonlyArray<WebAppIcon>;
  /** The name of the web app, which is generated by the server during creation in the form enterprises/{enterpriseId}/webApps/{packageName}. */
  name?: string;
}

export const WebApp: Schema.Schema<WebApp> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versionCode: Schema.optional(Schema.String),
    startUrl: Schema.optional(Schema.String),
    displayMode: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    icons: Schema.optional(Schema.Array(WebAppIcon)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "WebApp" });

export interface ListWebAppsResponse {
  /** The list of web apps. */
  webApps?: ReadonlyArray<WebApp>;
  /** If there are more results, a token to retrieve next page of results. */
  nextPageToken?: string;
}

export const ListWebAppsResponse: Schema.Schema<ListWebAppsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webApps: Schema.optional(Schema.Array(WebApp)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListWebAppsResponse" });

export interface MigrationToken {
  /** Output only. The value of the migration token. */
  value?: string;
  /** Immutable. Optional EMM-specified additional data. Once the device is migrated this will be populated in the migrationAdditionalData field of the Device resource. This must be at most 1024 characters. */
  additionalData?: string;
  /** Immutable. The time when this migration token expires. This can be at most seven days from the time of creation. The migration token is deleted seven days after it expires. */
  expireTime?: string;
  /** Output only. The name of the migration token, which is generated by the server during creation, in the form enterprises/{enterprise}/migrationTokens/{migration_token}. */
  name?: string;
  /** Input only. The time that this migration token is valid for. This is input-only, and for returning a migration token the server will populate the expireTime field. This can be at most seven days. The default is seven days. */
  ttl?: string;
  /** Required. Immutable. The user id of the Managed Google Play account on the device, as in the Play EMM API. This corresponds to the userId parameter in Play EMM API's Devices.get (https://developers.google.com/android/work/play/emm-api/v1/devices/get#parameters) call. */
  userId?: string;
  /** Required. Immutable. The management mode of the device or profile being migrated. */
  managementMode?:
    | "MANAGEMENT_MODE_UNSPECIFIED"
    | "WORK_PROFILE_PERSONALLY_OWNED"
    | "WORK_PROFILE_COMPANY_OWNED"
    | "FULLY_MANAGED"
    | (string & {});
  /** Output only. Time when this migration token was created. */
  createTime?: string;
  /** Required. Immutable. The id of the device, as in the Play EMM API. This corresponds to the deviceId parameter in Play EMM API's Devices.get (https://developers.google.com/android/work/play/emm-api/v1/devices/get#parameters) call. */
  deviceId?: string;
  /** Required. Immutable. The name of the policy initially applied to the enrolled device, in the form enterprises/{enterprise}/policies/{policy}. */
  policy?: string;
  /** Output only. Once this migration token is used to migrate a device, the name of the resulting Device resource will be populated here, in the form enterprises/{enterprise}/devices/{device}. */
  device?: string;
}

export const MigrationToken: Schema.Schema<MigrationToken> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    additionalData: Schema.optional(Schema.String),
    expireTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    ttl: Schema.optional(Schema.String),
    userId: Schema.optional(Schema.String),
    managementMode: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    deviceId: Schema.optional(Schema.String),
    policy: Schema.optional(Schema.String),
    device: Schema.optional(Schema.String),
  }).annotate({ identifier: "MigrationToken" });

export interface ListMigrationTokensResponse {
  /** The migration tokens from the specified enterprise. */
  migrationTokens?: ReadonlyArray<MigrationToken>;
  /** A token, which can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListMigrationTokensResponse: Schema.Schema<ListMigrationTokensResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    migrationTokens: Schema.optional(Schema.Array(MigrationToken)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListMigrationTokensResponse" });

export interface EnrollmentToken {
  /** The token value that's passed to the device and authorizes the device to enroll. This is a read-only field generated by the server. */
  value?: string;
  /** Optional, arbitrary data associated with the enrollment token. This could contain, for example, the ID of an org unit the device is assigned to after enrollment. After a device enrolls with the token, this data will be exposed in the enrollment_token_data field of the Device resource. The data must be 1024 characters or less; otherwise, the creation request will fail. */
  additionalData?: string;
  /** The length of time the enrollment token is valid, ranging from 1 minute to Durations.MAX_VALUE (https://developers.google.com/protocol-buffers/docs/reference/java/com/google/protobuf/util/Durations.html#MAX_VALUE), approximately 10,000 years. If not specified, the default duration is 1 hour. Please note that if requested duration causes the resulting expiration_timestamp to exceed Timestamps.MAX_VALUE (https://developers.google.com/protocol-buffers/docs/reference/java/com/google/protobuf/util/Timestamps.html#MAX_VALUE), then expiration_timestamp is coerced to Timestamps.MAX_VALUE. */
  duration?: string;
  /** Controls whether personal usage is allowed on a device provisioned with this enrollment token.For company-owned devices: Enabling personal usage allows the user to set up a work profile on the device. Disabling personal usage requires the user provision the device as a fully managed device.For personally-owned devices: Enabling personal usage allows the user to set up a work profile on the device. Disabling personal usage will prevent the device from provisioning. Personal usage cannot be disabled on personally-owned device. */
  allowPersonalUsage?:
    | "ALLOW_PERSONAL_USAGE_UNSPECIFIED"
    | "PERSONAL_USAGE_ALLOWED"
    | "PERSONAL_USAGE_DISALLOWED"
    | "PERSONAL_USAGE_DISALLOWED_USERLESS"
    | (string & {});
  /** The expiration time of the token. This is a read-only field generated by the server. */
  expirationTimestamp?: string;
  /** The name of the enrollment token, which is generated by the server during creation, in the form enterprises/{enterpriseId}/enrollmentTokens/{enrollmentTokenId}. */
  name?: string;
  /** Whether the enrollment token is for one time use only. If the flag is set to true, only one device can use it for registration. */
  oneTimeOnly?: boolean;
  /** A JSON string whose UTF-8 representation can be used to generate a QR code to enroll a device with this enrollment token. To enroll a device using NFC, the NFC record must contain a serialized java.util.Properties representation of the properties in the JSON. */
  qrCode?: string;
  /** The name of the policy initially applied to the enrolled device, in the form enterprises/{enterpriseId}/policies/{policyId}. If not specified, the policy_name for the device’s user is applied. If user_name is also not specified, enterprises/{enterpriseId}/policies/default is applied by default. When updating this field, you can specify only the policyId as long as the policyId doesn’t contain any slashes. The rest of the policy name will be inferred. */
  policyName?: string;
  /** This field is deprecated and the value is ignored. */
  user?: User;
}

export const EnrollmentToken: Schema.Schema<EnrollmentToken> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    additionalData: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
    allowPersonalUsage: Schema.optional(Schema.String),
    expirationTimestamp: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    oneTimeOnly: Schema.optional(Schema.Boolean),
    qrCode: Schema.optional(Schema.String),
    policyName: Schema.optional(Schema.String),
    user: Schema.optional(User),
  }).annotate({ identifier: "EnrollmentToken" });

export interface ListEnrollmentTokensResponse {
  /** If there are more results, a token to retrieve next page of results. */
  nextPageToken?: string;
  /** The list of enrollment tokens. */
  enrollmentTokens?: ReadonlyArray<EnrollmentToken>;
}

export const ListEnrollmentTokensResponse: Schema.Schema<ListEnrollmentTokensResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    enrollmentTokens: Schema.optional(Schema.Array(EnrollmentToken)),
  }).annotate({ identifier: "ListEnrollmentTokensResponse" });

export interface Operation {
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}. */
  name?: string;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available. */
  done?: boolean;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse. */
  response?: Record<string, unknown>;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    error: Schema.optional(Status),
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Operation" });

export interface ListOperationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** Unordered list. Unreachable resources. Populated when the request sets ListOperationsRequest.return_partial_success and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    operations: Schema.optional(Schema.Array(Operation)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface GenerateEnterpriseUpgradeUrlRequest {
  /** Optional. A list of domains that are permitted for the admin email. The IT admin cannot enter an email address with a domain name that is not in this list. Subdomains of domains in this list are not allowed but can be allowed by adding a second entry which has *. prefixed to the domain name (e.g. *.example.com). If the field is not present or is an empty list then the IT admin is free to use any valid domain name. Personal email domains are not allowed. */
  allowedDomains?: ReadonlyArray<string>;
  /** Optional. Email address used to prefill the admin field of the enterprise signup form as part of the upgrade process. This value is a hint only and can be altered by the user. Personal email addresses are not allowed. If allowedDomains is non-empty then this must belong to one of the allowedDomains. */
  adminEmail?: string;
}

export const GenerateEnterpriseUpgradeUrlRequest: Schema.Schema<GenerateEnterpriseUpgradeUrlRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowedDomains: Schema.optional(Schema.Array(Schema.String)),
    adminEmail: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerateEnterpriseUpgradeUrlRequest" });

export interface WebToken {
  /** The name of the web token, which is generated by the server during creation in the form enterprises/{enterpriseId}/webTokens/{webTokenId}. */
  name?: string;
  /** The URL of the parent frame hosting the iframe with the embedded UI. To prevent XSS, the iframe may not be hosted at other URLs. The URL must use the https scheme. */
  parentFrameUrl?: string;
  /** The token value which is used in the hosting page to generate the iframe with the embedded UI. This is a read-only field generated by the server. */
  value?: string;
  /** Permissions available to an admin in the embedded UI. An admin must have all of these permissions in order to view the UI. This field is deprecated. */
  permissions?: ReadonlyArray<
    "WEB_TOKEN_PERMISSION_UNSPECIFIED" | "APPROVE_APPS" | (string & {})
  >;
  /** The features to enable. Use this if you want to control exactly which feature(s) will be activated; leave empty to allow all features.Restrictions / things to note: - If no features are listed here, all features are enabled — this is the default behavior where you give access to all features to your admins. - This must not contain any FEATURE_UNSPECIFIED values. - Repeated values are ignored */
  enabledFeatures?: ReadonlyArray<
    | "FEATURE_UNSPECIFIED"
    | "PLAY_SEARCH"
    | "PRIVATE_APPS"
    | "WEB_APPS"
    | "STORE_BUILDER"
    | "MANAGED_CONFIGURATIONS"
    | "ZERO_TOUCH_CUSTOMER_MANAGEMENT"
    | (string & {})
  >;
}

export const WebToken: Schema.Schema<WebToken> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    parentFrameUrl: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    permissions: Schema.optional(Schema.Array(Schema.String)),
    enabledFeatures: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "WebToken" });

export interface GenerateEnterpriseUpgradeUrlResponse {
  /** A URL for an enterprise admin to upgrade their enterprise. The page can't be rendered in an iframe. */
  url?: string;
}

export const GenerateEnterpriseUpgradeUrlResponse: Schema.Schema<GenerateEnterpriseUpgradeUrlResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerateEnterpriseUpgradeUrlResponse" });

export interface SignupUrl {
  /** The name of the resource. Use this value in the signupUrl field when calling enterprises.create to complete the enterprise signup flow. */
  name?: string;
  /** A URL where an enterprise admin can register their enterprise. The page can't be rendered in an iframe. */
  url?: string;
}

export const SignupUrl: Schema.Schema<SignupUrl> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "SignupUrl" });

export interface RemovePolicyApplicationsResponse {
  /** The updated policy after ApplicationPolicy objects have been removed. */
  policy?: Policy;
}

export const RemovePolicyApplicationsResponse: Schema.Schema<RemovePolicyApplicationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy: Schema.optional(Policy),
  }).annotate({ identifier: "RemovePolicyApplicationsResponse" });

export interface ProvisioningInfo {
  /** The management mode of the device or profile. */
  managementMode?:
    | "MANAGEMENT_MODE_UNSPECIFIED"
    | "DEVICE_OWNER"
    | "PROFILE_OWNER"
    | (string & {});
  /** The API level of the Android platform version running on the device. */
  apiLevel?: number;
  /** For corporate-owned devices, IMEI number of the GSM device. For example, A1000031212. */
  imei?: string;
  /** The brand of the device. For example, Google. */
  brand?: string;
  /** The email address of the authenticated user (only present for Google Account provisioning method). */
  authenticatedUserEmail?: string;
  /** Ownership of the managed device. */
  ownership?:
    | "OWNERSHIP_UNSPECIFIED"
    | "COMPANY_OWNED"
    | "PERSONALLY_OWNED"
    | (string & {});
  /** For corporate-owned devices, The device serial number. */
  serialNumber?: string;
  /** For corporate-owned devices, MEID number of the CDMA device. For example, A00000292788E1. */
  meid?: string;
  /** The model of the device. For example, Asus Nexus 7. */
  model?: string;
  /** The name of this resource in the form provisioningInfo/{provisioning_info}. */
  name?: string;
  /** The name of the enterprise in the form enterprises/{enterprise}. */
  enterprise?: string;
}

export const ProvisioningInfo: Schema.Schema<ProvisioningInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    managementMode: Schema.optional(Schema.String),
    apiLevel: Schema.optional(Schema.Number),
    imei: Schema.optional(Schema.String),
    brand: Schema.optional(Schema.String),
    authenticatedUserEmail: Schema.optional(Schema.String),
    ownership: Schema.optional(Schema.String),
    serialNumber: Schema.optional(Schema.String),
    meid: Schema.optional(Schema.String),
    model: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    enterprise: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProvisioningInfo" });

export interface ListEnterprisesResponse {
  /** If there are more results, a token to retrieve next page of results. */
  nextPageToken?: string;
  /** The list of enterprises. */
  enterprises?: ReadonlyArray<Enterprise>;
}

export const ListEnterprisesResponse: Schema.Schema<ListEnterprisesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    enterprises: Schema.optional(Schema.Array(Enterprise)),
  }).annotate({ identifier: "ListEnterprisesResponse" });

export interface IssueCommandResponse {}

export const IssueCommandResponse: Schema.Schema<IssueCommandResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "IssueCommandResponse",
  });

export interface RemovePolicyApplicationsRequest {
  /** Required. Package names to be removed. Entries that are not found are ignored. There must be at least one entry in package_names. */
  packageNames?: ReadonlyArray<string>;
}

export const RemovePolicyApplicationsRequest: Schema.Schema<RemovePolicyApplicationsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    packageNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "RemovePolicyApplicationsRequest" });

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

export interface CreateSignupUrlsRequest {
  /** The ID of the Google Cloud Platform project which will own the enterprise. */
  projectId?: string;
  /** Optional. Email address used to prefill the admin field of the enterprise signup form. This value is a hint only and can be altered by the user. If allowedDomains is non-empty then this must belong to one of the allowedDomains. */
  adminEmail?: string;
  /** The callback URL that the admin will be redirected to after successfully creating an enterprise. Before redirecting there the system will add a query parameter to this URL named enterpriseToken which will contain an opaque token to be used for the create enterprise request. The URL will be parsed then reformatted in order to add the enterpriseToken parameter, so there may be some minor formatting changes. */
  callbackUrl?: string;
  /** Optional. A list of domains that are permitted for the admin email. The IT admin cannot enter an email address with a domain name that is not in this list. Subdomains of domains in this list are not allowed but can be allowed by adding a second entry which has *. prefixed to the domain name (e.g. *.example.com). If the field is not present or is an empty list then the IT admin is free to use any valid domain name. Personal email domains are always allowed, but will result in the creation of a managed Google Play Accounts enterprise. */
  allowedDomains?: string[];
}

export const CreateSignupUrlsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String).pipe(T.HttpQuery("projectId")),
    adminEmail: Schema.optional(Schema.String).pipe(T.HttpQuery("adminEmail")),
    callbackUrl: Schema.optional(Schema.String).pipe(
      T.HttpQuery("callbackUrl"),
    ),
    allowedDomains: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("allowedDomains"),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/signupUrls", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateSignupUrlsRequest>;

export type CreateSignupUrlsResponse = SignupUrl;
export const CreateSignupUrlsResponse = /*@__PURE__*/ /*#__PURE__*/ SignupUrl;

export type CreateSignupUrlsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an enterprise signup URL. */
export const createSignupUrls: API.OperationMethod<
  CreateSignupUrlsRequest,
  CreateSignupUrlsResponse,
  CreateSignupUrlsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateSignupUrlsRequest,
  output: CreateSignupUrlsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProvisioningInfoRequest {
  /** Required. The identifier that Android Device Policy passes to the 3P sign-in page in the form of provisioningInfo/{provisioning_info}. */
  name: string;
}

export const GetProvisioningInfoRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProvisioningInfoRequest>;

export type GetProvisioningInfoResponse = ProvisioningInfo;
export const GetProvisioningInfoResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProvisioningInfo;

export type GetProvisioningInfoError = DefaultErrors | NotFound | Forbidden;

/** Get the device provisioning information by the identifier provided in the sign-in url. */
export const getProvisioningInfo: API.OperationMethod<
  GetProvisioningInfoRequest,
  GetProvisioningInfoResponse,
  GetProvisioningInfoError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProvisioningInfoRequest,
  output: GetProvisioningInfoResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetEnterprisesRequest {
  /** The name of the enterprise in the form enterprises/{enterpriseId}. */
  name: string;
}

export const GetEnterprisesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "GET", path: "v1/{+name}" }),
  svc,
) as unknown as Schema.Schema<GetEnterprisesRequest>;

export type GetEnterprisesResponse = Enterprise;
export const GetEnterprisesResponse = /*@__PURE__*/ /*#__PURE__*/ Enterprise;

export type GetEnterprisesError = DefaultErrors | NotFound | Forbidden;

/** Gets an enterprise. */
export const getEnterprises: API.OperationMethod<
  GetEnterprisesRequest,
  GetEnterprisesResponse,
  GetEnterprisesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetEnterprisesRequest,
  output: GetEnterprisesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListEnterprisesRequest {
  /** Required. The Cloud project ID of the EMM managing the enterprises. */
  projectId?: string;
  /** The requested page size. The actual page size may be fixed to a min or max value. */
  pageSize?: number;
  /** A token identifying a page of results returned by the server. */
  pageToken?: string;
  /** Specifies which Enterprise fields to return. This method only supports BASIC. */
  view?: "ENTERPRISE_VIEW_UNSPECIFIED" | "BASIC" | (string & {});
}

export const ListEnterprisesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    projectId: Schema.optional(Schema.String).pipe(T.HttpQuery("projectId")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  },
).pipe(
  T.Http({ method: "GET", path: "v1/enterprises" }),
  svc,
) as unknown as Schema.Schema<ListEnterprisesRequest>;

export type ListEnterprisesResponse_Op = ListEnterprisesResponse;
export const ListEnterprisesResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ ListEnterprisesResponse;

export type ListEnterprisesError = DefaultErrors | NotFound | Forbidden;

/** Lists EMM-managed enterprises. Only BASIC fields are returned. */
export const listEnterprises: API.PaginatedOperationMethod<
  ListEnterprisesRequest,
  ListEnterprisesResponse_Op,
  ListEnterprisesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListEnterprisesRequest,
  output: ListEnterprisesResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GenerateEnterpriseUpgradeUrlEnterprisesRequest {
  /** Required. The name of the enterprise to be upgraded in the form enterprises/{enterpriseId}. */
  name: string;
  /** Request body */
  body?: GenerateEnterpriseUpgradeUrlRequest;
}

export const GenerateEnterpriseUpgradeUrlEnterprisesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GenerateEnterpriseUpgradeUrlRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:generateEnterpriseUpgradeUrl",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateEnterpriseUpgradeUrlEnterprisesRequest>;

export type GenerateEnterpriseUpgradeUrlEnterprisesResponse =
  GenerateEnterpriseUpgradeUrlResponse;
export const GenerateEnterpriseUpgradeUrlEnterprisesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GenerateEnterpriseUpgradeUrlResponse;

export type GenerateEnterpriseUpgradeUrlEnterprisesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generates an enterprise upgrade URL to upgrade an existing managed Google Play Accounts enterprise to a managed Google domain. See the guide (https://developers.google.com/android/management/upgrade-an-enterprise) for more details. */
export const generateEnterpriseUpgradeUrlEnterprises: API.OperationMethod<
  GenerateEnterpriseUpgradeUrlEnterprisesRequest,
  GenerateEnterpriseUpgradeUrlEnterprisesResponse,
  GenerateEnterpriseUpgradeUrlEnterprisesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateEnterpriseUpgradeUrlEnterprisesRequest,
  output: GenerateEnterpriseUpgradeUrlEnterprisesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteEnterprisesRequest {
  /** The name of the enterprise in the form enterprises/{enterpriseId}. */
  name: string;
}

export const DeleteEnterprisesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteEnterprisesRequest>;

export type DeleteEnterprisesResponse = Empty;
export const DeleteEnterprisesResponse = /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteEnterprisesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Permanently deletes an enterprise and all accounts and data associated with it. Warning: this will result in a cascaded deletion of all AM API devices associated with the deleted enterprise. Only available for EMM-managed enterprises. */
export const deleteEnterprises: API.OperationMethod<
  DeleteEnterprisesRequest,
  DeleteEnterprisesResponse,
  DeleteEnterprisesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteEnterprisesRequest,
  output: DeleteEnterprisesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateEnterprisesRequest {
  /** Whether the enterprise admin has seen and agreed to the managed Google Play Agreement (https://www.android.com/enterprise/terms/). Do not set this field for any customer-managed enterprise (https://developers.google.com/android/management/create-enterprise#customer-managed_enterprises). Set this to field to true for all EMM-managed enterprises (https://developers.google.com/android/management/create-enterprise#emm-managed_enterprises). */
  agreementAccepted?: boolean;
  /** The name of the SignupUrl used to sign up for the enterprise. Set this when creating a customer-managed enterprise (https://developers.google.com/android/management/create-enterprise#customer-managed_enterprises) and not when creating a deprecated EMM-managed enterprise (https://developers.google.com/android/management/create-enterprise#emm-managed_enterprises). */
  signupUrlName?: string;
  /** The enterprise token appended to the callback URL. Set this when creating a customer-managed enterprise (https://developers.google.com/android/management/create-enterprise#customer-managed_enterprises) and not when creating a deprecated EMM-managed enterprise (https://developers.google.com/android/management/create-enterprise#emm-managed_enterprises). */
  enterpriseToken?: string;
  /** The ID of the Google Cloud Platform project which will own the enterprise. */
  projectId?: string;
  /** Request body */
  body?: Enterprise;
}

export const CreateEnterprisesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agreementAccepted: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("agreementAccepted"),
    ),
    signupUrlName: Schema.optional(Schema.String).pipe(
      T.HttpQuery("signupUrlName"),
    ),
    enterpriseToken: Schema.optional(Schema.String).pipe(
      T.HttpQuery("enterpriseToken"),
    ),
    projectId: Schema.optional(Schema.String).pipe(T.HttpQuery("projectId")),
    body: Schema.optional(Enterprise).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/enterprises", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateEnterprisesRequest>;

export type CreateEnterprisesResponse = Enterprise;
export const CreateEnterprisesResponse = /*@__PURE__*/ /*#__PURE__*/ Enterprise;

export type CreateEnterprisesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an enterprise. This is the last step in the enterprise signup flow. See also: SigninDetail */
export const createEnterprises: API.OperationMethod<
  CreateEnterprisesRequest,
  CreateEnterprisesResponse,
  CreateEnterprisesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateEnterprisesRequest,
  output: CreateEnterprisesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchEnterprisesRequest {
  /** The name of the enterprise in the form enterprises/{enterpriseId}. */
  name: string;
  /** The field mask indicating the fields to update. If not set, all modifiable fields will be modified. */
  updateMask?: string;
  /** Request body */
  body?: Enterprise;
}

export const PatchEnterprisesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Enterprise).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchEnterprisesRequest>;

export type PatchEnterprisesResponse = Enterprise;
export const PatchEnterprisesResponse = /*@__PURE__*/ /*#__PURE__*/ Enterprise;

export type PatchEnterprisesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an enterprise. See also: SigninDetail */
export const patchEnterprises: API.OperationMethod<
  PatchEnterprisesRequest,
  PatchEnterprisesResponse,
  PatchEnterprisesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchEnterprisesRequest,
  output: PatchEnterprisesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteEnterprisesPoliciesRequest {
  /** The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}. */
  name: string;
}

export const DeleteEnterprisesPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteEnterprisesPoliciesRequest>;

export type DeleteEnterprisesPoliciesResponse = Empty;
export const DeleteEnterprisesPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteEnterprisesPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a policy. This operation is only permitted if no devices are currently referencing the policy. */
export const deleteEnterprisesPolicies: API.OperationMethod<
  DeleteEnterprisesPoliciesRequest,
  DeleteEnterprisesPoliciesResponse,
  DeleteEnterprisesPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteEnterprisesPoliciesRequest,
  output: DeleteEnterprisesPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetEnterprisesPoliciesRequest {
  /** The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}. */
  name: string;
}

export const GetEnterprisesPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetEnterprisesPoliciesRequest>;

export type GetEnterprisesPoliciesResponse = Policy;
export const GetEnterprisesPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetEnterprisesPoliciesError = DefaultErrors | NotFound | Forbidden;

/** Gets a policy. */
export const getEnterprisesPolicies: API.OperationMethod<
  GetEnterprisesPoliciesRequest,
  GetEnterprisesPoliciesResponse,
  GetEnterprisesPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetEnterprisesPoliciesRequest,
  output: GetEnterprisesPoliciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListEnterprisesPoliciesRequest {
  /** The requested page size. The actual page size may be fixed to a min or max value. */
  pageSize?: number;
  /** A token identifying a page of results returned by the server. */
  pageToken?: string;
  /** The name of the enterprise in the form enterprises/{enterpriseId}. */
  parent: string;
}

export const ListEnterprisesPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/policies" }),
    svc,
  ) as unknown as Schema.Schema<ListEnterprisesPoliciesRequest>;

export type ListEnterprisesPoliciesResponse = ListPoliciesResponse;
export const ListEnterprisesPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListPoliciesResponse;

export type ListEnterprisesPoliciesError = DefaultErrors | NotFound | Forbidden;

/** Lists policies for a given enterprise. */
export const listEnterprisesPolicies: API.PaginatedOperationMethod<
  ListEnterprisesPoliciesRequest,
  ListEnterprisesPoliciesResponse,
  ListEnterprisesPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListEnterprisesPoliciesRequest,
  output: ListEnterprisesPoliciesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ModifyPolicyApplicationsEnterprisesPoliciesRequest {
  /** Required. The name of the Policy containing the ApplicationPolicy objects to be updated, in the form enterprises/{enterpriseId}/policies/{policyId}. */
  name: string;
  /** Request body */
  body?: ModifyPolicyApplicationsRequest;
}

export const ModifyPolicyApplicationsEnterprisesPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ModifyPolicyApplicationsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:modifyPolicyApplications",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ModifyPolicyApplicationsEnterprisesPoliciesRequest>;

export type ModifyPolicyApplicationsEnterprisesPoliciesResponse =
  ModifyPolicyApplicationsResponse;
export const ModifyPolicyApplicationsEnterprisesPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ModifyPolicyApplicationsResponse;

export type ModifyPolicyApplicationsEnterprisesPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates or creates applications in a policy. */
export const modifyPolicyApplicationsEnterprisesPolicies: API.OperationMethod<
  ModifyPolicyApplicationsEnterprisesPoliciesRequest,
  ModifyPolicyApplicationsEnterprisesPoliciesResponse,
  ModifyPolicyApplicationsEnterprisesPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ModifyPolicyApplicationsEnterprisesPoliciesRequest,
  output: ModifyPolicyApplicationsEnterprisesPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RemovePolicyApplicationsEnterprisesPoliciesRequest {
  /** Required. The name of the policy containing the ApplicationPolicy objects to be removed, in the form enterprises/{enterpriseId}/policies/{policyId}. */
  name: string;
  /** Request body */
  body?: RemovePolicyApplicationsRequest;
}

export const RemovePolicyApplicationsEnterprisesPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RemovePolicyApplicationsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:removePolicyApplications",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RemovePolicyApplicationsEnterprisesPoliciesRequest>;

export type RemovePolicyApplicationsEnterprisesPoliciesResponse =
  RemovePolicyApplicationsResponse;
export const RemovePolicyApplicationsEnterprisesPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ RemovePolicyApplicationsResponse;

export type RemovePolicyApplicationsEnterprisesPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes applications in a policy. */
export const removePolicyApplicationsEnterprisesPolicies: API.OperationMethod<
  RemovePolicyApplicationsEnterprisesPoliciesRequest,
  RemovePolicyApplicationsEnterprisesPoliciesResponse,
  RemovePolicyApplicationsEnterprisesPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RemovePolicyApplicationsEnterprisesPoliciesRequest,
  output: RemovePolicyApplicationsEnterprisesPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchEnterprisesPoliciesRequest {
  /** The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}. */
  name: string;
  /** The field mask indicating the fields to update. If not set, all modifiable fields will be modified. */
  updateMask?: string;
  /** Request body */
  body?: Policy;
}

export const PatchEnterprisesPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Policy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchEnterprisesPoliciesRequest>;

export type PatchEnterprisesPoliciesResponse = Policy;
export const PatchEnterprisesPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type PatchEnterprisesPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates or creates a policy. */
export const patchEnterprisesPolicies: API.OperationMethod<
  PatchEnterprisesPoliciesRequest,
  PatchEnterprisesPoliciesResponse,
  PatchEnterprisesPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchEnterprisesPoliciesRequest,
  output: PatchEnterprisesPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateEnterprisesWebTokensRequest {
  /** The name of the enterprise in the form enterprises/{enterpriseId}. */
  parent: string;
  /** Request body */
  body?: WebToken;
}

export const CreateEnterprisesWebTokensRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(WebToken).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/webTokens", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateEnterprisesWebTokensRequest>;

export type CreateEnterprisesWebTokensResponse = WebToken;
export const CreateEnterprisesWebTokensResponse =
  /*@__PURE__*/ /*#__PURE__*/ WebToken;

export type CreateEnterprisesWebTokensError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a web token to access an embeddable managed Google Play web UI for a given enterprise. */
export const createEnterprisesWebTokens: API.OperationMethod<
  CreateEnterprisesWebTokensRequest,
  CreateEnterprisesWebTokensResponse,
  CreateEnterprisesWebTokensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateEnterprisesWebTokensRequest,
  output: CreateEnterprisesWebTokensResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateEnterprisesMigrationTokensRequest {
  /** Required. The enterprise in which this migration token is created. This must be the same enterprise which already manages the device in the Play EMM API. Format: enterprises/{enterprise} */
  parent: string;
  /** Request body */
  body?: MigrationToken;
}

export const CreateEnterprisesMigrationTokensRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(MigrationToken).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/migrationTokens",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateEnterprisesMigrationTokensRequest>;

export type CreateEnterprisesMigrationTokensResponse = MigrationToken;
export const CreateEnterprisesMigrationTokensResponse =
  /*@__PURE__*/ /*#__PURE__*/ MigrationToken;

export type CreateEnterprisesMigrationTokensError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a migration token, to migrate an existing device from being managed by the EMM's Device Policy Controller (DPC) to being managed by the Android Management API. See the guide (https://developers.google.com/android/management/dpc-migration) for more details. */
export const createEnterprisesMigrationTokens: API.OperationMethod<
  CreateEnterprisesMigrationTokensRequest,
  CreateEnterprisesMigrationTokensResponse,
  CreateEnterprisesMigrationTokensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateEnterprisesMigrationTokensRequest,
  output: CreateEnterprisesMigrationTokensResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetEnterprisesMigrationTokensRequest {
  /** Required. The name of the migration token to retrieve. Format: enterprises/{enterprise}/migrationTokens/{migration_token} */
  name: string;
}

export const GetEnterprisesMigrationTokensRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetEnterprisesMigrationTokensRequest>;

export type GetEnterprisesMigrationTokensResponse = MigrationToken;
export const GetEnterprisesMigrationTokensResponse =
  /*@__PURE__*/ /*#__PURE__*/ MigrationToken;

export type GetEnterprisesMigrationTokensError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a migration token. */
export const getEnterprisesMigrationTokens: API.OperationMethod<
  GetEnterprisesMigrationTokensRequest,
  GetEnterprisesMigrationTokensResponse,
  GetEnterprisesMigrationTokensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetEnterprisesMigrationTokensRequest,
  output: GetEnterprisesMigrationTokensResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListEnterprisesMigrationTokensRequest {
  /** The maximum number of migration tokens to return. Fewer migration tokens may be returned. If unspecified, at most 100 migration tokens will be returned. The maximum value is 100; values above 100 will be coerced to 100. */
  pageSize?: number;
  /** A page token, received from a previous ListMigrationTokens call. Provide this to retrieve the subsequent page.When paginating, all other parameters provided to ListMigrationTokens must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The enterprise which the migration tokens belong to. Format: enterprises/{enterprise} */
  parent: string;
}

export const ListEnterprisesMigrationTokensRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/migrationTokens" }),
    svc,
  ) as unknown as Schema.Schema<ListEnterprisesMigrationTokensRequest>;

export type ListEnterprisesMigrationTokensResponse =
  ListMigrationTokensResponse;
export const ListEnterprisesMigrationTokensResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListMigrationTokensResponse;

export type ListEnterprisesMigrationTokensError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists migration tokens. */
export const listEnterprisesMigrationTokens: API.PaginatedOperationMethod<
  ListEnterprisesMigrationTokensRequest,
  ListEnterprisesMigrationTokensResponse,
  ListEnterprisesMigrationTokensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListEnterprisesMigrationTokensRequest,
  output: ListEnterprisesMigrationTokensResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteEnterprisesEnrollmentTokensRequest {
  /** The name of the enrollment token in the form enterprises/{enterpriseId}/enrollmentTokens/{enrollmentTokenId}. */
  name: string;
}

export const DeleteEnterprisesEnrollmentTokensRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteEnterprisesEnrollmentTokensRequest>;

export type DeleteEnterprisesEnrollmentTokensResponse = Empty;
export const DeleteEnterprisesEnrollmentTokensResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteEnterprisesEnrollmentTokensError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an enrollment token. This operation invalidates the token, preventing its future use. */
export const deleteEnterprisesEnrollmentTokens: API.OperationMethod<
  DeleteEnterprisesEnrollmentTokensRequest,
  DeleteEnterprisesEnrollmentTokensResponse,
  DeleteEnterprisesEnrollmentTokensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteEnterprisesEnrollmentTokensRequest,
  output: DeleteEnterprisesEnrollmentTokensResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateEnterprisesEnrollmentTokensRequest {
  /** The name of the enterprise in the form enterprises/{enterpriseId}. */
  parent: string;
  /** Request body */
  body?: EnrollmentToken;
}

export const CreateEnterprisesEnrollmentTokensRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(EnrollmentToken).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/enrollmentTokens",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateEnterprisesEnrollmentTokensRequest>;

export type CreateEnterprisesEnrollmentTokensResponse = EnrollmentToken;
export const CreateEnterprisesEnrollmentTokensResponse =
  /*@__PURE__*/ /*#__PURE__*/ EnrollmentToken;

export type CreateEnterprisesEnrollmentTokensError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an enrollment token for a given enterprise. It's up to the caller's responsibility to manage the lifecycle of newly created tokens and deleting them when they're not intended to be used anymore. */
export const createEnterprisesEnrollmentTokens: API.OperationMethod<
  CreateEnterprisesEnrollmentTokensRequest,
  CreateEnterprisesEnrollmentTokensResponse,
  CreateEnterprisesEnrollmentTokensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateEnterprisesEnrollmentTokensRequest,
  output: CreateEnterprisesEnrollmentTokensResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetEnterprisesEnrollmentTokensRequest {
  /** Required. The name of the enrollment token in the form enterprises/{enterpriseId}/enrollmentTokens/{enrollmentTokenId}. */
  name: string;
}

export const GetEnterprisesEnrollmentTokensRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetEnterprisesEnrollmentTokensRequest>;

export type GetEnterprisesEnrollmentTokensResponse = EnrollmentToken;
export const GetEnterprisesEnrollmentTokensResponse =
  /*@__PURE__*/ /*#__PURE__*/ EnrollmentToken;

export type GetEnterprisesEnrollmentTokensError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an active, unexpired enrollment token. A partial view of the enrollment token is returned. Only the following fields are populated: name, expirationTimestamp, allowPersonalUsage, value, qrCode. This method is meant to help manage active enrollment tokens lifecycle. For security reasons, it's recommended to delete active enrollment tokens as soon as they're not intended to be used anymore. */
export const getEnterprisesEnrollmentTokens: API.OperationMethod<
  GetEnterprisesEnrollmentTokensRequest,
  GetEnterprisesEnrollmentTokensResponse,
  GetEnterprisesEnrollmentTokensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetEnterprisesEnrollmentTokensRequest,
  output: GetEnterprisesEnrollmentTokensResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListEnterprisesEnrollmentTokensRequest {
  /** Required. The name of the enterprise in the form enterprises/{enterpriseId}. */
  parent: string;
  /** The requested page size. The service may return fewer than this value. If unspecified, at most 10 items will be returned. The maximum value is 100; values above 100 will be coerced to 100. */
  pageSize?: number;
  /** A token identifying a page of results returned by the server. */
  pageToken?: string;
}

export const ListEnterprisesEnrollmentTokensRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/enrollmentTokens" }),
    svc,
  ) as unknown as Schema.Schema<ListEnterprisesEnrollmentTokensRequest>;

export type ListEnterprisesEnrollmentTokensResponse =
  ListEnrollmentTokensResponse;
export const ListEnterprisesEnrollmentTokensResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListEnrollmentTokensResponse;

export type ListEnterprisesEnrollmentTokensError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists active, unexpired enrollment tokens for a given enterprise. The list items contain only a partial view of EnrollmentToken object. Only the following fields are populated: name, expirationTimestamp, allowPersonalUsage, value, qrCode. This method is meant to help manage active enrollment tokens lifecycle. For security reasons, it's recommended to delete active enrollment tokens as soon as they're not intended to be used anymore. */
export const listEnterprisesEnrollmentTokens: API.PaginatedOperationMethod<
  ListEnterprisesEnrollmentTokensRequest,
  ListEnterprisesEnrollmentTokensResponse,
  ListEnterprisesEnrollmentTokensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListEnterprisesEnrollmentTokensRequest,
  output: ListEnterprisesEnrollmentTokensResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetEnterprisesApplicationsRequest {
  /** The preferred language for localized application info, as a BCP47 tag (e.g. "en-US", "de"). If not specified the default language of the application will be used. */
  languageCode?: string;
  /** The name of the application in the form enterprises/{enterpriseId}/applications/{package_name}. */
  name: string;
}

export const GetEnterprisesApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetEnterprisesApplicationsRequest>;

export type GetEnterprisesApplicationsResponse = Application;
export const GetEnterprisesApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Application;

export type GetEnterprisesApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets info about an application. */
export const getEnterprisesApplications: API.OperationMethod<
  GetEnterprisesApplicationsRequest,
  GetEnterprisesApplicationsResponse,
  GetEnterprisesApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetEnterprisesApplicationsRequest,
  output: GetEnterprisesApplicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateEnterprisesWebAppsRequest {
  /** The name of the enterprise in the form enterprises/{enterpriseId}. */
  parent: string;
  /** Request body */
  body?: WebApp;
}

export const CreateEnterprisesWebAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(WebApp).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/webApps", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateEnterprisesWebAppsRequest>;

export type CreateEnterprisesWebAppsResponse = WebApp;
export const CreateEnterprisesWebAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ WebApp;

export type CreateEnterprisesWebAppsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a web app. */
export const createEnterprisesWebApps: API.OperationMethod<
  CreateEnterprisesWebAppsRequest,
  CreateEnterprisesWebAppsResponse,
  CreateEnterprisesWebAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateEnterprisesWebAppsRequest,
  output: CreateEnterprisesWebAppsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchEnterprisesWebAppsRequest {
  /** The name of the web app in the form enterprises/{enterpriseId}/webApps/{packageName}. */
  name: string;
  /** The field mask indicating the fields to update. If not set, all modifiable fields will be modified. */
  updateMask?: string;
  /** Request body */
  body?: WebApp;
}

export const PatchEnterprisesWebAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(WebApp).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchEnterprisesWebAppsRequest>;

export type PatchEnterprisesWebAppsResponse = WebApp;
export const PatchEnterprisesWebAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ WebApp;

export type PatchEnterprisesWebAppsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a web app. */
export const patchEnterprisesWebApps: API.OperationMethod<
  PatchEnterprisesWebAppsRequest,
  PatchEnterprisesWebAppsResponse,
  PatchEnterprisesWebAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchEnterprisesWebAppsRequest,
  output: PatchEnterprisesWebAppsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetEnterprisesWebAppsRequest {
  /** The name of the web app in the form enterprises/{enterpriseId}/webApps/{packageName}. */
  name: string;
}

export const GetEnterprisesWebAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetEnterprisesWebAppsRequest>;

export type GetEnterprisesWebAppsResponse = WebApp;
export const GetEnterprisesWebAppsResponse = /*@__PURE__*/ /*#__PURE__*/ WebApp;

export type GetEnterprisesWebAppsError = DefaultErrors | NotFound | Forbidden;

/** Gets a web app. */
export const getEnterprisesWebApps: API.OperationMethod<
  GetEnterprisesWebAppsRequest,
  GetEnterprisesWebAppsResponse,
  GetEnterprisesWebAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetEnterprisesWebAppsRequest,
  output: GetEnterprisesWebAppsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListEnterprisesWebAppsRequest {
  /** The requested page size. This is a hint and the actual page size in the response may be different. */
  pageSize?: number;
  /** A token identifying a page of results returned by the server. */
  pageToken?: string;
  /** The name of the enterprise in the form enterprises/{enterpriseId}. */
  parent: string;
}

export const ListEnterprisesWebAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/webApps" }),
    svc,
  ) as unknown as Schema.Schema<ListEnterprisesWebAppsRequest>;

export type ListEnterprisesWebAppsResponse = ListWebAppsResponse;
export const ListEnterprisesWebAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListWebAppsResponse;

export type ListEnterprisesWebAppsError = DefaultErrors | NotFound | Forbidden;

/** Lists web apps for a given enterprise. */
export const listEnterprisesWebApps: API.PaginatedOperationMethod<
  ListEnterprisesWebAppsRequest,
  ListEnterprisesWebAppsResponse,
  ListEnterprisesWebAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListEnterprisesWebAppsRequest,
  output: ListEnterprisesWebAppsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteEnterprisesWebAppsRequest {
  /** The name of the web app in the form enterprises/{enterpriseId}/webApps/{packageName}. */
  name: string;
}

export const DeleteEnterprisesWebAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteEnterprisesWebAppsRequest>;

export type DeleteEnterprisesWebAppsResponse = Empty;
export const DeleteEnterprisesWebAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteEnterprisesWebAppsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a web app. */
export const deleteEnterprisesWebApps: API.OperationMethod<
  DeleteEnterprisesWebAppsRequest,
  DeleteEnterprisesWebAppsResponse,
  DeleteEnterprisesWebAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteEnterprisesWebAppsRequest,
  output: DeleteEnterprisesWebAppsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchEnterprisesDevicesRequest {
  /** The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}. */
  name: string;
  /** The field mask indicating the fields to update. If not set, all modifiable fields will be modified. */
  updateMask?: string;
  /** Request body */
  body?: Device;
}

export const PatchEnterprisesDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Device).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchEnterprisesDevicesRequest>;

export type PatchEnterprisesDevicesResponse = Device;
export const PatchEnterprisesDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Device;

export type PatchEnterprisesDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a device. */
export const patchEnterprisesDevices: API.OperationMethod<
  PatchEnterprisesDevicesRequest,
  PatchEnterprisesDevicesResponse,
  PatchEnterprisesDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchEnterprisesDevicesRequest,
  output: PatchEnterprisesDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteEnterprisesDevicesRequest {
  /** Optional flags that control the device wiping behavior. */
  wipeDataFlags?:
    | "WIPE_DATA_FLAG_UNSPECIFIED"
    | "PRESERVE_RESET_PROTECTION_DATA"
    | "WIPE_EXTERNAL_STORAGE"
    | "WIPE_ESIMS"
    | (string & {})[];
  /** The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}. */
  name: string;
  /** Optional. A short message displayed to the user before wiping the work profile on personal devices. This has no effect on company owned devices. The maximum message length is 200 characters. */
  wipeReasonMessage?: string;
}

export const DeleteEnterprisesDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    wipeDataFlags: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("wipeDataFlags"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    wipeReasonMessage: Schema.optional(Schema.String).pipe(
      T.HttpQuery("wipeReasonMessage"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteEnterprisesDevicesRequest>;

export type DeleteEnterprisesDevicesResponse = Empty;
export const DeleteEnterprisesDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteEnterprisesDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a device. This operation attempts to wipe the device but this is not guaranteed to succeed if the device is offline for an extended period. Deleted devices do not show up in enterprises.devices.list calls and a 404 is returned from enterprises.devices.get. */
export const deleteEnterprisesDevices: API.OperationMethod<
  DeleteEnterprisesDevicesRequest,
  DeleteEnterprisesDevicesResponse,
  DeleteEnterprisesDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteEnterprisesDevicesRequest,
  output: DeleteEnterprisesDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetEnterprisesDevicesRequest {
  /** The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}. */
  name: string;
}

export const GetEnterprisesDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetEnterprisesDevicesRequest>;

export type GetEnterprisesDevicesResponse = Device;
export const GetEnterprisesDevicesResponse = /*@__PURE__*/ /*#__PURE__*/ Device;

export type GetEnterprisesDevicesError = DefaultErrors | NotFound | Forbidden;

/** Gets a device. Deleted devices will respond with a 404 error. */
export const getEnterprisesDevices: API.OperationMethod<
  GetEnterprisesDevicesRequest,
  GetEnterprisesDevicesResponse,
  GetEnterprisesDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetEnterprisesDevicesRequest,
  output: GetEnterprisesDevicesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListEnterprisesDevicesRequest {
  /** The requested page size. If unspecified, at most 10 devices will be returned. The maximum value is 100; values above 100 will be coerced to 100. The limits can change over time. */
  pageSize?: number;
  /** A token identifying a page of results returned by the server. */
  pageToken?: string;
  /** The name of the enterprise in the form enterprises/{enterpriseId}. */
  parent: string;
}

export const ListEnterprisesDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/devices" }),
    svc,
  ) as unknown as Schema.Schema<ListEnterprisesDevicesRequest>;

export type ListEnterprisesDevicesResponse = ListDevicesResponse;
export const ListEnterprisesDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDevicesResponse;

export type ListEnterprisesDevicesError = DefaultErrors | NotFound | Forbidden;

/** Lists devices for a given enterprise. Deleted devices are not returned in the response. */
export const listEnterprisesDevices: API.PaginatedOperationMethod<
  ListEnterprisesDevicesRequest,
  ListEnterprisesDevicesResponse,
  ListEnterprisesDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListEnterprisesDevicesRequest,
  output: ListEnterprisesDevicesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface IssueCommandEnterprisesDevicesRequest {
  /** The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}. */
  name: string;
  /** Request body */
  body?: Command;
}

export const IssueCommandEnterprisesDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Command).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:issueCommand", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<IssueCommandEnterprisesDevicesRequest>;

export type IssueCommandEnterprisesDevicesResponse = Operation;
export const IssueCommandEnterprisesDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type IssueCommandEnterprisesDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Issues a command to a device. The Operation resource returned contains a Command in its metadata field. Use the get operation method to get the status of the command. */
export const issueCommandEnterprisesDevices: API.OperationMethod<
  IssueCommandEnterprisesDevicesRequest,
  IssueCommandEnterprisesDevicesResponse,
  IssueCommandEnterprisesDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: IssueCommandEnterprisesDevicesRequest,
  output: IssueCommandEnterprisesDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListEnterprisesDevicesOperationsRequest {
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list page token. */
  pageToken?: string;
  /** When set to true, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field.This can only be true when reading across collections. For example, when parent is set to "projects/example/locations/-".This field is not supported by default and will result in an UNIMPLEMENTED error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list filter. */
  filter?: string;
}

export const ListEnterprisesDevicesOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<ListEnterprisesDevicesOperationsRequest>;

export type ListEnterprisesDevicesOperationsResponse = ListOperationsResponse;
export const ListEnterprisesDevicesOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListEnterprisesDevicesOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED. */
export const listEnterprisesDevicesOperations: API.PaginatedOperationMethod<
  ListEnterprisesDevicesOperationsRequest,
  ListEnterprisesDevicesOperationsResponse,
  ListEnterprisesDevicesOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListEnterprisesDevicesOperationsRequest,
  output: ListEnterprisesDevicesOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetEnterprisesDevicesOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetEnterprisesDevicesOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetEnterprisesDevicesOperationsRequest>;

export type GetEnterprisesDevicesOperationsResponse = Operation;
export const GetEnterprisesDevicesOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetEnterprisesDevicesOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getEnterprisesDevicesOperations: API.OperationMethod<
  GetEnterprisesDevicesOperationsRequest,
  GetEnterprisesDevicesOperationsResponse,
  GetEnterprisesDevicesOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetEnterprisesDevicesOperationsRequest,
  output: GetEnterprisesDevicesOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CancelEnterprisesDevicesOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
}

export const CancelEnterprisesDevicesOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelEnterprisesDevicesOperationsRequest>;

export type CancelEnterprisesDevicesOperationsResponse = Empty;
export const CancelEnterprisesDevicesOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelEnterprisesDevicesOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED. */
export const cancelEnterprisesDevicesOperations: API.OperationMethod<
  CancelEnterprisesDevicesOperationsRequest,
  CancelEnterprisesDevicesOperationsResponse,
  CancelEnterprisesDevicesOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelEnterprisesDevicesOperationsRequest,
  output: CancelEnterprisesDevicesOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
