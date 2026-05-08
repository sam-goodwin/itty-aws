// ==========================================================================
// Google Play EMM API (androidenterprise v1)
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
  name: "androidenterprise",
  version: "v1",
  rootUrl: "https://androidenterprise.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface VariableSet {
  /** The placeholder string; defined by EMM. */
  placeholder?: string;
  /** The value of the placeholder, specific to the user. */
  userValue?: string;
}

export const VariableSet: Schema.Schema<VariableSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    placeholder: Schema.optional(Schema.String),
    userValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "VariableSet" });

export interface ConfigurationVariables {
  /** The ID of the managed configurations settings. */
  mcmId?: string;
  /** The variable set that is attributed to the user. */
  variableSet?: ReadonlyArray<VariableSet>;
}

export const ConfigurationVariables: Schema.Schema<ConfigurationVariables> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mcmId: Schema.optional(Schema.String),
    variableSet: Schema.optional(Schema.Array(VariableSet)),
  }).annotate({ identifier: "ConfigurationVariables" });

export interface WebAppIcon {
  /** The actual bytes of the image in a base64url encoded string (c.f. RFC4648, section 5 "Base 64 Encoding with URL and Filename Safe Alphabet"). - The image type can be png or jpg. - The image should ideally be square. - The image should ideally have a size of 512x512. */
  imageData?: string;
}

export const WebAppIcon: Schema.Schema<WebAppIcon> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageData: Schema.optional(Schema.String),
  }).annotate({ identifier: "WebAppIcon" });

export interface WebApp {
  /** The current version of the app. Note that the version can automatically increase during the lifetime of the web app, while Google does internal housekeeping to keep the web app up-to-date. */
  versionCode?: string;
  /** A list of icons representing this website. If absent, a default icon (for create) or the current icon (for update) will be used. */
  icons?: ReadonlyArray<WebAppIcon>;
  /** The start URL, i.e. the URL that should load when the user opens the application. */
  startUrl?: string;
  /** The ID of the application. A string of the form "app:<package name>" where the package name always starts with the prefix "com.google.enterprise.webapp." followed by a random id. */
  webAppId?: string;
  /** The display mode of the web app. Possible values include: - "minimalUi", the device's status bar, navigation bar, the app's URL, and a refresh button are visible when the app is open. For HTTP URLs, you can only select this option. - "standalone", the device's status bar and navigation bar are visible when the app is open. - "fullScreen", the app opens in full screen mode, hiding the device's status and navigation bars. All browser UI elements, page URL, system status bar and back button are not visible, and the web app takes up the entirety of the available display area. */
  displayMode?:
    | "displayModeUnspecified"
    | "minimalUi"
    | "standalone"
    | "fullScreen"
    | (string & {});
  /** The title of the web app as displayed to the user (e.g., amongst a list of other applications, or as a label for an icon). */
  title?: string;
  /** A flag whether the app has been published to the Play store yet. */
  isPublished?: boolean;
}

export const WebApp: Schema.Schema<WebApp> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versionCode: Schema.optional(Schema.String),
    icons: Schema.optional(Schema.Array(WebAppIcon)),
    startUrl: Schema.optional(Schema.String),
    webAppId: Schema.optional(Schema.String),
    displayMode: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    isPublished: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "WebApp" });

export interface ManagedPropertyBundle {
  /** The list of managed properties. */
  managedProperty?: ReadonlyArray<ManagedProperty>;
}

export const ManagedPropertyBundle: Schema.Schema<ManagedPropertyBundle> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      managedProperty: Schema.optional(Schema.Array(ManagedProperty)),
    }),
  ).annotate({
    identifier: "ManagedPropertyBundle",
  }) as any as Schema.Schema<ManagedPropertyBundle>;

export interface ManagedProperty {
  /** The unique key that identifies the property. */
  key?: string;
  /** The list of string values - this will only be present if type of the property is multiselect. */
  valueStringArray?: ReadonlyArray<string>;
  /** The bundle of managed properties - this will only be present if type of the property is bundle. */
  valueBundle?: ManagedPropertyBundle;
  /** The integer value - this will only be present if type of the property is integer. */
  valueInteger?: number;
  /** The string value - this will only be present if type of the property is string, choice or hidden. */
  valueString?: string;
  /** The list of bundles of properties - this will only be present if type of the property is bundle_array. */
  valueBundleArray?: ReadonlyArray<ManagedPropertyBundle>;
  /** The boolean value - this will only be present if type of the property is bool. */
  valueBool?: boolean;
}

export const ManagedProperty: Schema.Schema<ManagedProperty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      key: Schema.optional(Schema.String),
      valueStringArray: Schema.optional(Schema.Array(Schema.String)),
      valueBundle: Schema.optional(ManagedPropertyBundle),
      valueInteger: Schema.optional(Schema.Number),
      valueString: Schema.optional(Schema.String),
      valueBundleArray: Schema.optional(Schema.Array(ManagedPropertyBundle)),
      valueBool: Schema.optional(Schema.Boolean),
    }),
  ).annotate({
    identifier: "ManagedProperty",
  }) as any as Schema.Schema<ManagedProperty>;

export interface ManagedConfiguration {
  /** The ID of the product that the managed configuration is for, e.g. "app:com.google.android.gm". */
  productId?: string;
  /** Contains the ID of the managed configuration profile and the set of configuration variables (if any) defined for the user. */
  configurationVariables?: ConfigurationVariables;
  /** Deprecated. */
  kind?: string;
  /** The set of managed properties for this configuration. */
  managedProperty?: ReadonlyArray<ManagedProperty>;
}

export const ManagedConfiguration: Schema.Schema<ManagedConfiguration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productId: Schema.optional(Schema.String),
    configurationVariables: Schema.optional(ConfigurationVariables),
    kind: Schema.optional(Schema.String),
    managedProperty: Schema.optional(Schema.Array(ManagedProperty)),
  }).annotate({ identifier: "ManagedConfiguration" });

export interface ManagedConfigurationsForUserListResponse {
  /** A managed configuration for an app for a specific user. */
  managedConfigurationForUser?: ReadonlyArray<ManagedConfiguration>;
}

export const ManagedConfigurationsForUserListResponse: Schema.Schema<ManagedConfigurationsForUserListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    managedConfigurationForUser: Schema.optional(
      Schema.Array(ManagedConfiguration),
    ),
  }).annotate({ identifier: "ManagedConfigurationsForUserListResponse" });

export interface ProductsGenerateApprovalUrlResponse {
  /** A URL that can be rendered in an iframe to display the permissions (if any) of a product. This URL can be used to approve the product only once and only within 24 hours of being generated, using the Products.approve call. If the product is currently unapproved and has no permissions, this URL will point to an empty page. If the product is currently approved, a URL will only be generated if that product has added permissions since it was last approved, and the URL will only display those new permissions that have not yet been accepted. */
  url?: string;
}

export const ProductsGenerateApprovalUrlResponse: Schema.Schema<ProductsGenerateApprovalUrlResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductsGenerateApprovalUrlResponse" });

export interface KeyedAppState {
  /** Severity of the app state. This field will always be present. */
  severity?:
    | "severityUnknown"
    | "severityInfo"
    | "severityError"
    | (string & {});
  /** Key indicating what the app is providing a state for. The content of the key is set by the app's developer. To prevent XSS, we recommend removing any HTML from the key before displaying it. This field will always be present. */
  key?: string;
  /** Timestamp of when the app set the state in milliseconds since epoch. This field will always be present. */
  stateTimestampMillis?: string;
  /** Free-form, human-readable message describing the app state. For example, an error message. To prevent XSS, we recommend removing any HTML from the message before displaying it. */
  message?: string;
  /** Additional field intended for machine-readable data. For example, a number or JSON object. To prevent XSS, we recommend removing any HTML from the data before displaying it. */
  data?: string;
}

export const KeyedAppState: Schema.Schema<KeyedAppState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    severity: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
    stateTimestampMillis: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    data: Schema.optional(Schema.String),
  }).annotate({ identifier: "KeyedAppState" });

export interface DeviceState {
  /** The state of the Google account on the device. "enabled" indicates that the Google account on the device can be used to access Google services (including Google Play), while "disabled" means that it cannot. A new device is initially in the "disabled" state. */
  accountState?: "enabled" | "disabled" | (string & {});
}

export const DeviceState: Schema.Schema<DeviceState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountState: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeviceState" });

export interface MaintenanceWindow {
  /** Start time of the maintenance window, in milliseconds after midnight on the device. Windows can span midnight. */
  startTimeAfterMidnightMs?: string;
  /** Duration of the maintenance window, in milliseconds. The duration must be between 30 minutes and 24 hours (inclusive). */
  durationMs?: string;
}

export const MaintenanceWindow: Schema.Schema<MaintenanceWindow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTimeAfterMidnightMs: Schema.optional(Schema.String),
    durationMs: Schema.optional(Schema.String),
  }).annotate({ identifier: "MaintenanceWindow" });

export interface ManagedConfigurationsSettings {
  /** The ID of the managed configurations settings. */
  mcmId?: string;
  /** The name of the managed configurations settings. */
  name?: string;
  /** The last updated time of the managed configuration settings in milliseconds since 1970-01-01T00:00:00Z. */
  lastUpdatedTimestampMillis?: string;
}

export const ManagedConfigurationsSettings: Schema.Schema<ManagedConfigurationsSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mcmId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    lastUpdatedTimestampMillis: Schema.optional(Schema.String),
  }).annotate({ identifier: "ManagedConfigurationsSettings" });

export interface ManagedConfigurationsSettingsListResponse {
  /** A managed configurations settings for an app that may be assigned to a group of users in an enterprise. */
  managedConfigurationsSettings?: ReadonlyArray<ManagedConfigurationsSettings>;
}

export const ManagedConfigurationsSettingsListResponse: Schema.Schema<ManagedConfigurationsSettingsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    managedConfigurationsSettings: Schema.optional(
      Schema.Array(ManagedConfigurationsSettings),
    ),
  }).annotate({ identifier: "ManagedConfigurationsSettingsListResponse" });

export interface EnrollmentTokenGoogleAuthenticationOptions {
  /** [Optional] Specifies whether user should authenticate with Google during enrollment. This setting, if specified,`GoogleAuthenticationSettings` specified for the enterprise resource is ignored for devices enrolled with this token. */
  authenticationRequirement?:
    | "authenticationRequirementUnspecified"
    | "optional"
    | "required"
    | (string & {});
  /** [Optional] Specifies the managed Google account that the user must use during enrollment.`AuthenticationRequirement` must be set to`REQUIRED` if this field is set. */
  requiredAccountEmail?: string;
}

export const EnrollmentTokenGoogleAuthenticationOptions: Schema.Schema<EnrollmentTokenGoogleAuthenticationOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authenticationRequirement: Schema.optional(Schema.String),
    requiredAccountEmail: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnrollmentTokenGoogleAuthenticationOptions" });

export interface InstallFailureEvent {
  /** Additional details on the failure if applicable. */
  failureDetails?: string;
  /** The reason for the installation failure. This field will always be present. */
  failureReason?: "unknown" | "timeout" | (string & {});
  /** The Android ID of the device. This field will always be present. */
  deviceId?: string;
  /** The ID of the user. This field will always be present. */
  userId?: string;
  /** The id of the product (e.g. "app:com.google.android.gm") for which the install failure event occured. This field will always be present. */
  productId?: string;
}

export const InstallFailureEvent: Schema.Schema<InstallFailureEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    failureDetails: Schema.optional(Schema.String),
    failureReason: Schema.optional(Schema.String),
    deviceId: Schema.optional(Schema.String),
    userId: Schema.optional(Schema.String),
    productId: Schema.optional(Schema.String),
  }).annotate({ identifier: "InstallFailureEvent" });

export interface AdministratorWebTokenSpecPlaySearch {
  /** Whether the managed Play Search apps page is displayed. Default is true. */
  enabled?: boolean;
  /** Allow access to the iframe in approve mode. Default is false. */
  approveApps?: boolean;
}

export const AdministratorWebTokenSpecPlaySearch: Schema.Schema<AdministratorWebTokenSpecPlaySearch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    approveApps: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AdministratorWebTokenSpecPlaySearch" });

export interface SignupInfo {
  /** Deprecated. */
  kind?: string;
  /** A URL under which the Admin can sign up for an enterprise. The page pointed to cannot be rendered in an iframe. */
  url?: string;
  /** An opaque token that will be required, along with the Enterprise Token, for obtaining the enterprise resource from CompleteSignup. */
  completionToken?: string;
}

export const SignupInfo: Schema.Schema<SignupInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    completionToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "SignupInfo" });

export interface AppState {
  /** The package name of the app. This field will always be present. */
  packageName?: string;
  /** List of keyed app states. This field will always be present. */
  keyedAppState?: ReadonlyArray<KeyedAppState>;
}

export const AppState: Schema.Schema<AppState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    packageName: Schema.optional(Schema.String),
    keyedAppState: Schema.optional(Schema.Array(KeyedAppState)),
  }).annotate({ identifier: "AppState" });

export interface LocalizedText {
  /** The BCP47 tag for a locale. (e.g. "en-US", "de"). */
  locale?: string;
  /** The text localized in the associated locale. */
  text?: string;
}

export const LocalizedText: Schema.Schema<LocalizedText> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locale: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "LocalizedText" });

export interface StorePage {
  /** Unique ID of this page. Assigned by the server. Immutable once assigned. */
  id?: string;
  /** Ordered list of localized strings giving the name of this page. The text displayed is the one that best matches the user locale, or the first entry if there is no good match. There needs to be at least one entry. */
  name?: ReadonlyArray<LocalizedText>;
  /** Ordered list of pages a user should be able to reach from this page. The list can't include this page. It is recommended that the basic pages are created first, before adding the links between pages. The API doesn't verify that the pages exist or the pages are reachable. */
  link?: ReadonlyArray<string>;
}

export const StorePage: Schema.Schema<StorePage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.Array(LocalizedText)),
    link: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "StorePage" });

export interface AutoInstallConstraint {
  /** Network type constraint. */
  networkTypeConstraint?:
    | "networkTypeConstraintUnspecified"
    | "anyNetwork"
    | "unmeteredNetwork"
    | (string & {});
  /** Device idle state constraint. */
  deviceIdleStateConstraint?:
    | "deviceIdleStateConstraintUnspecified"
    | "deviceIdleNotRequired"
    | "deviceIdleRequired"
    | (string & {});
  /** Charging state constraint. */
  chargingStateConstraint?:
    | "chargingStateConstraintUnspecified"
    | "chargingNotRequired"
    | "chargingRequired"
    | (string & {});
}

export const AutoInstallConstraint: Schema.Schema<AutoInstallConstraint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    networkTypeConstraint: Schema.optional(Schema.String),
    deviceIdleStateConstraint: Schema.optional(Schema.String),
    chargingStateConstraint: Schema.optional(Schema.String),
  }).annotate({ identifier: "AutoInstallConstraint" });

export interface AutoInstallPolicy {
  /** The priority of the install, as an unsigned integer. A lower number means higher priority. */
  autoInstallPriority?: number;
  /** The auto-install mode. If unset, defaults to "doNotAutoInstall". An app is automatically installed regardless of a set maintenance window. */
  autoInstallMode?:
    | "autoInstallModeUnspecified"
    | "doNotAutoInstall"
    | "autoInstallOnce"
    | "forceAutoInstall"
    | (string & {});
  /** The constraints for auto-installing the app. You can specify a maximum of one constraint. */
  autoInstallConstraint?: ReadonlyArray<AutoInstallConstraint>;
  /** The minimum version of the app. If a lower version of the app is installed, then the app will be auto-updated according to the auto-install constraints, instead of waiting for the regular auto-update. You can set a minimum version code for at most 20 apps per device. */
  minimumVersionCode?: number;
}

export const AutoInstallPolicy: Schema.Schema<AutoInstallPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    autoInstallPriority: Schema.optional(Schema.Number),
    autoInstallMode: Schema.optional(Schema.String),
    autoInstallConstraint: Schema.optional(Schema.Array(AutoInstallConstraint)),
    minimumVersionCode: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AutoInstallPolicy" });

export interface EnterpriseAuthenticationAppLinkConfig {
  /** An authentication url. */
  uri?: string;
}

export const EnterpriseAuthenticationAppLinkConfig: Schema.Schema<EnterpriseAuthenticationAppLinkConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnterpriseAuthenticationAppLinkConfig" });

export interface ProductPolicy {
  /** Deprecated. Use trackIds instead. */
  tracks?: ReadonlyArray<
    "appTrackUnspecified" | "production" | "beta" | "alpha" | (string & {})
  >;
  /** The auto-install policy for the product. */
  autoInstallPolicy?: AutoInstallPolicy;
  /** The ID of the product. For example, "app:com.google.android.gm". */
  productId?: string;
  /** The managed configuration for the product. */
  managedConfiguration?: ManagedConfiguration;
  /** The auto-update mode for the product. When autoUpdateMode is used, it always takes precedence over the user's choice. So when a user makes changes to the device settings manually, these changes are ignored. */
  autoUpdateMode?:
    | "autoUpdateModeUnspecified"
    | "autoUpdateDefault"
    | "autoUpdatePostponed"
    | "autoUpdateHighPriority"
    | (string & {});
  /** An authentication URL configuration for the authenticator app of an identity provider. This helps to launch the identity provider's authenticator app during the authentication happening in a private app using Android WebView. Authenticator app should already be the default handler for the authentication url on the device. */
  enterpriseAuthenticationAppLinkConfigs?: ReadonlyArray<EnterpriseAuthenticationAppLinkConfig>;
  /** Grants the device visibility to the specified product release track(s), identified by trackIds. The list of release tracks of a product can be obtained by calling Products.Get. */
  trackIds?: ReadonlyArray<string>;
}

export const ProductPolicy: Schema.Schema<ProductPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tracks: Schema.optional(Schema.Array(Schema.String)),
    autoInstallPolicy: Schema.optional(AutoInstallPolicy),
    productId: Schema.optional(Schema.String),
    managedConfiguration: Schema.optional(ManagedConfiguration),
    autoUpdateMode: Schema.optional(Schema.String),
    enterpriseAuthenticationAppLinkConfigs: Schema.optional(
      Schema.Array(EnterpriseAuthenticationAppLinkConfig),
    ),
    trackIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ProductPolicy" });

export interface Policy {
  /** Controls when automatic app updates on the device can be applied. Recommended alternative: autoUpdateMode which is set per app, provides greater flexibility around update frequency. When autoUpdateMode is set to AUTO_UPDATE_POSTPONED or AUTO_UPDATE_HIGH_PRIORITY, autoUpdatePolicy has no effect. - choiceToTheUser allows the device's user to configure the app update policy. - always enables auto updates. - never disables auto updates. - wifiOnly enables auto updates only when the device is connected to wifi. *Important:* Changes to app update policies don't affect updates that are in progress. Any policy changes will apply to subsequent app updates. */
  autoUpdatePolicy?:
    | "autoUpdatePolicyUnspecified"
    | "choiceToTheUser"
    | "never"
    | "wifiOnly"
    | "always"
    | (string & {});
  /** The list of product policies. The productAvailabilityPolicy needs to be set to WHITELIST or ALL for the product policies to be applied. */
  productPolicy?: ReadonlyArray<ProductPolicy>;
  /** Whether the device reports app states to the EMM. The default value is "deviceReportDisabled". */
  deviceReportPolicy?:
    | "deviceReportPolicyUnspecified"
    | "deviceReportDisabled"
    | "deviceReportEnabled"
    | (string & {});
  /** An identifier for the policy that will be passed with the app install feedback sent from the Play Store. */
  policyId?: string;
  /** The availability granted to the device for the specified products. "all" gives the device access to all products, regardless of approval status. "all" does not enable automatic visibility of "alpha" or "beta" tracks. "whitelist" grants the device access the products specified in productPolicy[]. Only products that are approved or products that were previously approved (products with revoked approval) by the enterprise can be whitelisted. If no value is provided, the availability set at the user level is applied by default. */
  productAvailabilityPolicy?:
    | "productAvailabilityPolicyUnspecified"
    | "whitelist"
    | "all"
    | (string & {});
  /** The maintenance window defining when apps running in the foreground should be updated. */
  maintenanceWindow?: MaintenanceWindow;
}

export const Policy: Schema.Schema<Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    autoUpdatePolicy: Schema.optional(Schema.String),
    productPolicy: Schema.optional(Schema.Array(ProductPolicy)),
    deviceReportPolicy: Schema.optional(Schema.String),
    policyId: Schema.optional(Schema.String),
    productAvailabilityPolicy: Schema.optional(Schema.String),
    maintenanceWindow: Schema.optional(MaintenanceWindow),
  }).annotate({ identifier: "Policy" });

export interface DeviceReport {
  /** List of app states set by managed apps on the device. App states are defined by the app's developers. This field will always be present. */
  appState?: ReadonlyArray<AppState>;
  /** The timestamp of the last report update in milliseconds since epoch. This field will always be present. */
  lastUpdatedTimestampMillis?: string;
}

export const DeviceReport: Schema.Schema<DeviceReport> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appState: Schema.optional(Schema.Array(AppState)),
    lastUpdatedTimestampMillis: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeviceReport" });

export interface Device {
  /** The policy enforced on the device. */
  policy?: Policy;
  /** The build fingerprint of the device if known. */
  latestBuildFingerprint?: string;
  /** The Google Play Services Android ID for the device encoded as a lowercase hex string. For example, "123456789abcdef0". */
  androidId?: string;
  /** The internal hardware codename of the device. This comes from android.os.Build.DEVICE. (field named "device" per logs/wireless/android/android_checkin.proto) */
  device?: string;
  /** The device report updated with the latest app states. */
  report?: DeviceReport;
  /** Identifies the extent to which the device is controlled by a managed Google Play EMM in various deployment configurations. Possible values include: - "managedDevice", a device that has the EMM's device policy controller (DPC) as the device owner. - "managedProfile", a device that has a profile managed by the DPC (DPC is profile owner) in addition to a separate, personal profile that is unavailable to the DPC. - "containerApp", no longer used (deprecated). - "unmanagedProfile", a device that has been allowed (by the domain's admin, using the Admin Console to enable the privilege) to use managed Google Play, but the profile is itself not owned by a DPC. */
  managementType?:
    | "managedDevice"
    | "managedProfile"
    | "containerApp"
    | "unmanagedProfile"
    | (string & {});
  /** The product name of the device. This comes from android.os.Build.PRODUCT. */
  product?: string;
  /** Retail brand for the device, if set. See android.os.Build.BRAND */
  retailBrand?: string;
  /** The manufacturer of the device. This comes from android.os.Build.MANUFACTURER. */
  maker?: string;
  /** The model name of the device. This comes from android.os.Build.MODEL. */
  model?: string;
  /** API compatibility version. */
  sdkVersion?: number;
}

export const Device: Schema.Schema<Device> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy: Schema.optional(Policy),
    latestBuildFingerprint: Schema.optional(Schema.String),
    androidId: Schema.optional(Schema.String),
    device: Schema.optional(Schema.String),
    report: Schema.optional(DeviceReport),
    managementType: Schema.optional(Schema.String),
    product: Schema.optional(Schema.String),
    retailBrand: Schema.optional(Schema.String),
    maker: Schema.optional(Schema.String),
    model: Schema.optional(Schema.String),
    sdkVersion: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Device" });

export interface Administrator {
  /** The admin's email address. */
  email?: string;
}

export const Administrator: Schema.Schema<Administrator> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "Administrator" });

export interface GoogleAuthenticationSettings {
  /** Whether Google authentication is required. */
  googleAuthenticationRequired?:
    | "googleAuthenticationRequiredUnspecified"
    | "notRequired"
    | "required"
    | (string & {});
  /** Whether dedicated devices are allowed. */
  dedicatedDevicesAllowed?:
    | "dedicatedDevicesAllowedUnspecified"
    | "disallowed"
    | "allowed"
    | (string & {});
}

export const GoogleAuthenticationSettings: Schema.Schema<GoogleAuthenticationSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    googleAuthenticationRequired: Schema.optional(Schema.String),
    dedicatedDevicesAllowed: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAuthenticationSettings" });

export interface Enterprise {
  /** The name of the enterprise, for example, "Example, Inc". */
  name?: string;
  /** Admins of the enterprise. This is only supported for enterprises created via the EMM-initiated flow. */
  administrator?: ReadonlyArray<Administrator>;
  /** The type of managed Google domain */
  managedGoogleDomainType?:
    | "managedGoogleDomainTypeUnspecified"
    | "typeTeam"
    | "typeDomain"
    | (string & {});
  /** The enterprise's primary domain, such as "example.com". */
  primaryDomain?: string;
  /** The unique ID for the enterprise. */
  id?: string;
  /** Output only. Settings for Google-provided user authentication. */
  googleAuthenticationSettings?: GoogleAuthenticationSettings;
  /** The type of the enterprise. */
  enterpriseType?:
    | "enterpriseTypeUnspecified"
    | "managedGoogleDomain"
    | "managedGooglePlayAccountsEnterprise"
    | (string & {});
}

export const Enterprise: Schema.Schema<Enterprise> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    administrator: Schema.optional(Schema.Array(Administrator)),
    managedGoogleDomainType: Schema.optional(Schema.String),
    primaryDomain: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    googleAuthenticationSettings: Schema.optional(GoogleAuthenticationSettings),
    enterpriseType: Schema.optional(Schema.String),
  }).annotate({ identifier: "Enterprise" });

export interface AppRestrictionsSchemaRestrictionRestrictionValue {
  /** The boolean value - this will only be present if type is bool. */
  valueBool?: boolean;
  /** The list of string values - this will only be present if type is multiselect. */
  valueMultiselect?: ReadonlyArray<string>;
  /** The string value - this will be present for types string, choice and hidden. */
  valueString?: string;
  /** The integer value - this will only be present if type is integer. */
  valueInteger?: number;
  /** The type of the value being provided. */
  type?:
    | "bool"
    | "string"
    | "integer"
    | "choice"
    | "multiselect"
    | "hidden"
    | "bundle"
    | "bundleArray"
    | (string & {});
}

export const AppRestrictionsSchemaRestrictionRestrictionValue: Schema.Schema<AppRestrictionsSchemaRestrictionRestrictionValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    valueBool: Schema.optional(Schema.Boolean),
    valueMultiselect: Schema.optional(Schema.Array(Schema.String)),
    valueString: Schema.optional(Schema.String),
    valueInteger: Schema.optional(Schema.Number),
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier: "AppRestrictionsSchemaRestrictionRestrictionValue",
  });

export interface StoreCluster {
  /** Unique ID of this cluster. Assigned by the server. Immutable once assigned. */
  id?: string;
  /** Ordered list of localized strings giving the name of this page. The text displayed is the one that best matches the user locale, or the first entry if there is no good match. There needs to be at least one entry. */
  name?: ReadonlyArray<LocalizedText>;
  /** List of products in the order they are displayed in the cluster. There should not be duplicates within a cluster. */
  productId?: ReadonlyArray<string>;
  /** String (US-ASCII only) used to determine order of this cluster within the parent page's elements. Page elements are sorted in lexicographic order of this field. Duplicated values are allowed, but ordering between elements with duplicate order is undefined. The value of this field is never visible to a user, it is used solely for the purpose of defining an ordering. Maximum length is 256 characters. */
  orderInPage?: string;
}

export const StoreCluster: Schema.Schema<StoreCluster> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.Array(LocalizedText)),
    productId: Schema.optional(Schema.Array(Schema.String)),
    orderInPage: Schema.optional(Schema.String),
  }).annotate({ identifier: "StoreCluster" });

export interface EnterprisesListResponse {
  /** An enterprise. */
  enterprise?: ReadonlyArray<Enterprise>;
}

export const EnterprisesListResponse: Schema.Schema<EnterprisesListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterprise: Schema.optional(Schema.Array(Enterprise)),
  }).annotate({ identifier: "EnterprisesListResponse" });

export interface ApprovalUrlInfo {
  /** A URL that displays a product's permissions and that can also be used to approve the product with the Products.approve call. */
  approvalUrl?: string;
}

export const ApprovalUrlInfo: Schema.Schema<ApprovalUrlInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    approvalUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "ApprovalUrlInfo" });

export interface ProductsApproveRequest {
  /** Sets how new permission requests for the product are handled. "allPermissions" automatically approves all current and future permissions for the product. "currentPermissionsOnly" approves the current set of permissions for the product, but any future permissions added through updates will require manual reapproval. If not specified, only the current set of permissions will be approved. */
  approvedPermissions?:
    | "currentPermissionsOnly"
    | "allPermissions"
    | (string & {});
  /** The approval URL that was shown to the user. Only the permissions shown to the user with that URL will be accepted, which may not be the product's entire set of permissions. For example, the URL may only display new permissions from an update after the product was approved, or not include new permissions if the product was updated since the URL was generated. */
  approvalUrlInfo?: ApprovalUrlInfo;
}

export const ProductsApproveRequest: Schema.Schema<ProductsApproveRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    approvedPermissions: Schema.optional(Schema.String),
    approvalUrlInfo: Schema.optional(ApprovalUrlInfo),
  }).annotate({ identifier: "ProductsApproveRequest" });

export interface AdministratorWebTokenSpecWebApps {
  /** Whether the Web Apps page is displayed. Default is true. */
  enabled?: boolean;
}

export const AdministratorWebTokenSpecWebApps: Schema.Schema<AdministratorWebTokenSpecWebApps> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AdministratorWebTokenSpecWebApps" });

export interface AdministratorWebTokenSpecManagedConfigurations {
  /** Whether the Managed Configuration page is displayed. Default is true. */
  enabled?: boolean;
}

export const AdministratorWebTokenSpecManagedConfigurations: Schema.Schema<AdministratorWebTokenSpecManagedConfigurations> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AdministratorWebTokenSpecManagedConfigurations" });

export interface AdministratorWebTokenSpecStoreBuilder {
  /** Whether the Organize apps page is displayed. Default is true. */
  enabled?: boolean;
}

export const AdministratorWebTokenSpecStoreBuilder: Schema.Schema<AdministratorWebTokenSpecStoreBuilder> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AdministratorWebTokenSpecStoreBuilder" });

export interface AdministratorWebTokenSpecPrivateApps {
  /** Whether the Private Apps page is displayed. Default is true. */
  enabled?: boolean;
}

export const AdministratorWebTokenSpecPrivateApps: Schema.Schema<AdministratorWebTokenSpecPrivateApps> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AdministratorWebTokenSpecPrivateApps" });

export interface AdministratorWebTokenSpecZeroTouch {
  /** Whether zero-touch embedded UI is usable with this token. If enabled, the admin can link zero-touch customers to this enterprise. */
  enabled?: boolean;
}

export const AdministratorWebTokenSpecZeroTouch: Schema.Schema<AdministratorWebTokenSpecZeroTouch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AdministratorWebTokenSpecZeroTouch" });

export interface AdministratorWebTokenSpec {
  /** Options for displaying the Web Apps page. */
  webApps?: AdministratorWebTokenSpecWebApps;
  /** Options for displaying the Managed Configuration page. */
  managedConfigurations?: AdministratorWebTokenSpecManagedConfigurations;
  /** Options for displaying the Organize apps page. */
  storeBuilder?: AdministratorWebTokenSpecStoreBuilder;
  /** The URI of the parent frame hosting the iframe. To prevent XSS, the iframe may not be hosted at other URIs. This URI must be https. Use whitespaces to separate multiple parent URIs. */
  parent?: string;
  /** Options for displaying the Private Apps page. */
  privateApps?: AdministratorWebTokenSpecPrivateApps;
  /** Deprecated. Use PlaySearch.approveApps. */
  permission?: ReadonlyArray<
    "unknown" | "approveApps" | "manageMcm" | (string & {})
  >;
  /** Options for displaying the managed Play Search apps page. */
  playSearch?: AdministratorWebTokenSpecPlaySearch;
  /** Options for displaying the Zero Touch page. */
  zeroTouch?: AdministratorWebTokenSpecZeroTouch;
}

export const AdministratorWebTokenSpec: Schema.Schema<AdministratorWebTokenSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webApps: Schema.optional(AdministratorWebTokenSpecWebApps),
    managedConfigurations: Schema.optional(
      AdministratorWebTokenSpecManagedConfigurations,
    ),
    storeBuilder: Schema.optional(AdministratorWebTokenSpecStoreBuilder),
    parent: Schema.optional(Schema.String),
    privateApps: Schema.optional(AdministratorWebTokenSpecPrivateApps),
    permission: Schema.optional(Schema.Array(Schema.String)),
    playSearch: Schema.optional(AdministratorWebTokenSpecPlaySearch),
    zeroTouch: Schema.optional(AdministratorWebTokenSpecZeroTouch),
  }).annotate({ identifier: "AdministratorWebTokenSpec" });

export interface DevicesListResponse {
  /** A managed device. */
  device?: ReadonlyArray<Device>;
}

export const DevicesListResponse: Schema.Schema<DevicesListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    device: Schema.optional(Schema.Array(Device)),
  }).annotate({ identifier: "DevicesListResponse" });

export interface TokenPagination {
  /** Tokens to pass to the standard list field 'page_token'. Whenever available, tokens are preferred over manipulating start_index. */
  nextPageToken?: string;
  previousPageToken?: string;
}

export const TokenPagination: Schema.Schema<TokenPagination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    previousPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "TokenPagination" });

export interface ProductAvailabilityChangeEvent {
  /** The id of the product (e.g. "app:com.google.android.gm") for which the product availability changed. This field will always be present. */
  productId?: string;
  /** The new state of the product. This field will always be present. */
  availabilityStatus?:
    | "unknown"
    | "available"
    | "removed"
    | "unpublished"
    | (string & {});
}

export const ProductAvailabilityChangeEvent: Schema.Schema<ProductAvailabilityChangeEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productId: Schema.optional(Schema.String),
    availabilityStatus: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductAvailabilityChangeEvent" });

export interface StoreLayoutPagesListResponse {
  /** A store page of an enterprise. */
  page?: ReadonlyArray<StorePage>;
}

export const StoreLayoutPagesListResponse: Schema.Schema<StoreLayoutPagesListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    page: Schema.optional(Schema.Array(StorePage)),
  }).annotate({ identifier: "StoreLayoutPagesListResponse" });

export interface EnterpriseUpgradeEvent {
  /** The upgrade state. */
  upgradeState?:
    | "upgradeStateUnspecified"
    | "upgradeStateSucceeded"
    | (string & {});
}

export const EnterpriseUpgradeEvent: Schema.Schema<EnterpriseUpgradeEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    upgradeState: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnterpriseUpgradeEvent" });

export interface NewPermissionsEvent {
  /** The id of the product (e.g. "app:com.google.android.gm") for which new permissions were added. This field will always be present. */
  productId?: string;
  /** The set of permissions that the app is currently requesting. Use Permissions.Get on the EMM API to retrieve details about these permissions. */
  requestedPermissions?: ReadonlyArray<string>;
  /** The set of permissions that the enterprise admin has already approved for this application. Use Permissions.Get on the EMM API to retrieve details about these permissions. */
  approvedPermissions?: ReadonlyArray<string>;
}

export const NewPermissionsEvent: Schema.Schema<NewPermissionsEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productId: Schema.optional(Schema.String),
    requestedPermissions: Schema.optional(Schema.Array(Schema.String)),
    approvedPermissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "NewPermissionsEvent" });

export interface NewDeviceEvent {
  /** The Android ID of the device. This field will always be present. */
  deviceId?: string;
  /** Policy app on the device. */
  dpcPackageName?: string;
  /** The ID of the user. This field will always be present. */
  userId?: string;
  /** Identifies the extent to which the device is controlled by an Android EMM in various deployment configurations. Possible values include: - "managedDevice", a device where the DPC is set as device owner, - "managedProfile", a device where the DPC is set as profile owner. */
  managementType?: "managedDevice" | "managedProfile" | (string & {});
}

export const NewDeviceEvent: Schema.Schema<NewDeviceEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceId: Schema.optional(Schema.String),
    dpcPackageName: Schema.optional(Schema.String),
    userId: Schema.optional(Schema.String),
    managementType: Schema.optional(Schema.String),
  }).annotate({ identifier: "NewDeviceEvent" });

export interface ProductApprovalEvent {
  /** The id of the product (e.g. "app:com.google.android.gm") for which the approval status has changed. This field will always be present. */
  productId?: string;
  /** Whether the product was approved or unapproved. This field will always be present. */
  approved?: "unknown" | "approved" | "unapproved" | (string & {});
}

export const ProductApprovalEvent: Schema.Schema<ProductApprovalEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productId: Schema.optional(Schema.String),
    approved: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductApprovalEvent" });

export interface AppRestrictionsSchemaChangeEvent {
  /** The id of the product (e.g. "app:com.google.android.gm") for which the app restriction schema changed. This field will always be present. */
  productId?: string;
}

export const AppRestrictionsSchemaChangeEvent: Schema.Schema<AppRestrictionsSchemaChangeEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productId: Schema.optional(Schema.String),
  }).annotate({ identifier: "AppRestrictionsSchemaChangeEvent" });

export interface AppUpdateEvent {
  /** The id of the product (e.g. "app:com.google.android.gm") that was updated. This field will always be present. */
  productId?: string;
}

export const AppUpdateEvent: Schema.Schema<AppUpdateEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productId: Schema.optional(Schema.String),
  }).annotate({ identifier: "AppUpdateEvent" });

export interface DeviceReportUpdateEvent {
  /** The ID of the user. This field will always be present. */
  userId?: string;
  /** The Android ID of the device. This field will always be present. */
  deviceId?: string;
  /** The device report updated with the latest app states. This field will always be present. */
  report?: DeviceReport;
}

export const DeviceReportUpdateEvent: Schema.Schema<DeviceReportUpdateEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userId: Schema.optional(Schema.String),
    deviceId: Schema.optional(Schema.String),
    report: Schema.optional(DeviceReport),
  }).annotate({ identifier: "DeviceReportUpdateEvent" });

export interface Notification {
  /** Type of the notification. */
  notificationType?:
    | "unknown"
    | "testNotification"
    | "productApproval"
    | "installFailure"
    | "appUpdate"
    | "newPermissions"
    | "appRestricionsSchemaChange"
    | "productAvailabilityChange"
    | "newDevice"
    | "deviceReportUpdate"
    | "enterpriseUpgrade"
    | (string & {});
  /** The ID of the enterprise for which the notification is sent. This will always be present. */
  enterpriseId?: string;
  /** Notifications about enterprise upgrade. */
  enterpriseUpgradeEvent?: EnterpriseUpgradeEvent;
  /** The time when the notification was published in milliseconds since 1970-01-01T00:00:00Z. This will always be present. */
  timestampMillis?: string;
  /** Notifications about an app installation failure. */
  installFailureEvent?: InstallFailureEvent;
  /** Notifications about new app permissions. */
  newPermissionsEvent?: NewPermissionsEvent;
  /** Notifications about product availability changes. */
  productAvailabilityChangeEvent?: ProductAvailabilityChangeEvent;
  /** Notifications about new devices. */
  newDeviceEvent?: NewDeviceEvent;
  /** Notifications about changes to a product's approval status. */
  productApprovalEvent?: ProductApprovalEvent;
  /** Notifications about new app restrictions schema changes. */
  appRestrictionsSchemaChangeEvent?: AppRestrictionsSchemaChangeEvent;
  /** Notifications about app updates. */
  appUpdateEvent?: AppUpdateEvent;
  /** Notifications about device report updates. */
  deviceReportUpdateEvent?: DeviceReportUpdateEvent;
}

export const Notification: Schema.Schema<Notification> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notificationType: Schema.optional(Schema.String),
    enterpriseId: Schema.optional(Schema.String),
    enterpriseUpgradeEvent: Schema.optional(EnterpriseUpgradeEvent),
    timestampMillis: Schema.optional(Schema.String),
    installFailureEvent: Schema.optional(InstallFailureEvent),
    newPermissionsEvent: Schema.optional(NewPermissionsEvent),
    productAvailabilityChangeEvent: Schema.optional(
      ProductAvailabilityChangeEvent,
    ),
    newDeviceEvent: Schema.optional(NewDeviceEvent),
    productApprovalEvent: Schema.optional(ProductApprovalEvent),
    appRestrictionsSchemaChangeEvent: Schema.optional(
      AppRestrictionsSchemaChangeEvent,
    ),
    appUpdateEvent: Schema.optional(AppUpdateEvent),
    deviceReportUpdateEvent: Schema.optional(DeviceReportUpdateEvent),
  }).annotate({ identifier: "Notification" });

export interface Install {
  /** The version of the installed product. Guaranteed to be set only if the install state is "installed". */
  versionCode?: number;
  /** Install state. The state "installPending" means that an install request has recently been made and download to the device is in progress. The state "installed" means that the app has been installed. This field is read-only. */
  installState?: "installed" | "installPending" | (string & {});
  /** The ID of the product that the install is for. For example, "app:com.google.android.gm". */
  productId?: string;
}

export const Install: Schema.Schema<Install> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versionCode: Schema.optional(Schema.Number),
    installState: Schema.optional(Schema.String),
    productId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Install" });

export interface EnrollmentToken {
  /** The token value that's passed to the device and authorizes the device to enroll. This is a read-only field generated by the server. */
  token?: string;
  /** [Required] The type of the enrollment token. */
  enrollmentTokenType?:
    | "enrollmentTokenTypeUnspecified"
    | "userlessDevice"
    | "userDevice"
    | (string & {});
  /** [Optional] Provides options related to Google authentication during the enrollment. */
  googleAuthenticationOptions?: EnrollmentTokenGoogleAuthenticationOptions;
  /** [Optional] The length of time the enrollment token is valid, ranging from 1 minute to [`Durations.MAX_VALUE`](https://developers.google.com/protocol-buffers/docs/reference/java/com/google/protobuf/util/Durations.html#MAX_VALUE), approximately 10,000 years. If not specified, the default duration is 1 hour. */
  duration?: string;
}

export const EnrollmentToken: Schema.Schema<EnrollmentToken> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String),
    enrollmentTokenType: Schema.optional(Schema.String),
    googleAuthenticationOptions: Schema.optional(
      EnrollmentTokenGoogleAuthenticationOptions,
    ),
    duration: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnrollmentToken" });

export interface ProductSigningCertificate {
  /** The base64 urlsafe encoded SHA2-256 hash of the certificate. */
  certificateHashSha256?: string;
  /** The base64 urlsafe encoded SHA1 hash of the certificate. (This field is deprecated in favor of SHA2-256. It should not be used and may be removed at any time.) */
  certificateHashSha1?: string;
}

export const ProductSigningCertificate: Schema.Schema<ProductSigningCertificate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificateHashSha256: Schema.optional(Schema.String),
    certificateHashSha1: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductSigningCertificate" });

export interface WebAppsListResponse {
  /** The manifest describing a web app. */
  webApp?: ReadonlyArray<WebApp>;
}

export const WebAppsListResponse: Schema.Schema<WebAppsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webApp: Schema.optional(Schema.Array(WebApp)),
  }).annotate({ identifier: "WebAppsListResponse" });

export interface ProductPermission {
  /** An opaque string uniquely identifying the permission. */
  permissionId?: string;
  /** Whether the permission has been accepted or not. */
  state?: "required" | "accepted" | (string & {});
}

export const ProductPermission: Schema.Schema<ProductPermission> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissionId: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductPermission" });

export interface AppVersion {
  /** True if this version is a production APK. */
  isProduction?: boolean;
  /** The string used in the Play store by the app developer to identify the version. The string is not necessarily unique or localized (for example, the string could be "1.4"). */
  versionString?: string;
  /** Deprecated, use trackId instead. */
  track?:
    | "appTrackUnspecified"
    | "production"
    | "beta"
    | "alpha"
    | (string & {});
  /** The SDK version this app targets, as specified in the manifest of the APK. See http://developer.android.com/guide/topics/manifest/uses-sdk-element.html */
  targetSdkVersion?: number;
  /** Unique increasing identifier for the app version. */
  versionCode?: number;
  /** Track ids that the app version is published in. Replaces the track field (deprecated), but doesn't include the production track (see isProduction instead). */
  trackId?: ReadonlyArray<string>;
}

export const AppVersion: Schema.Schema<AppVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isProduction: Schema.optional(Schema.Boolean),
    versionString: Schema.optional(Schema.String),
    track: Schema.optional(Schema.String),
    targetSdkVersion: Schema.optional(Schema.Number),
    versionCode: Schema.optional(Schema.Number),
    trackId: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AppVersion" });

export interface TrackInfo {
  /** Unmodifiable, unique track identifier. This identifier is the releaseTrackId in the url of the play developer console page that displays the track information. */
  trackId?: string;
  /** A modifiable name for a track. This is the visible name in the play developer console. */
  trackAlias?: string;
}

export const TrackInfo: Schema.Schema<TrackInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trackId: Schema.optional(Schema.String),
    trackAlias: Schema.optional(Schema.String),
  }).annotate({ identifier: "TrackInfo" });

export interface AppRestrictionsSchemaRestriction {
  /** The type of the restriction. */
  restrictionType?:
    | "bool"
    | "string"
    | "integer"
    | "choice"
    | "multiselect"
    | "hidden"
    | "bundle"
    | "bundleArray"
    | (string & {});
  /** For choice or multiselect restrictions, the list of possible entries' machine-readable values. These values should be used in the configuration, either as a single string value for a choice restriction or in a stringArray for a multiselect restriction. */
  entryValue?: ReadonlyArray<string>;
  /** A longer description of the restriction, giving more detail of what it affects. */
  description?: string;
  /** For choice or multiselect restrictions, the list of possible entries' human-readable names. */
  entry?: ReadonlyArray<string>;
  /** The unique key that the product uses to identify the restriction, e.g. "com.google.android.gm.fieldname". */
  key?: string;
  /** For bundle or bundleArray restrictions, the list of nested restrictions. A bundle restriction is always nested within a bundleArray restriction, and a bundleArray restriction is at most two levels deep. */
  nestedRestriction?: ReadonlyArray<AppRestrictionsSchemaRestriction>;
  /** The default value of the restriction. bundle and bundleArray restrictions never have a default value. */
  defaultValue?: AppRestrictionsSchemaRestrictionRestrictionValue;
  /** The name of the restriction. */
  title?: string;
}

export const AppRestrictionsSchemaRestriction: Schema.Schema<AppRestrictionsSchemaRestriction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      restrictionType: Schema.optional(Schema.String),
      entryValue: Schema.optional(Schema.Array(Schema.String)),
      description: Schema.optional(Schema.String),
      entry: Schema.optional(Schema.Array(Schema.String)),
      key: Schema.optional(Schema.String),
      nestedRestriction: Schema.optional(
        Schema.Array(AppRestrictionsSchemaRestriction),
      ),
      defaultValue: Schema.optional(
        AppRestrictionsSchemaRestrictionRestrictionValue,
      ),
      title: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "AppRestrictionsSchemaRestriction",
  }) as any as Schema.Schema<AppRestrictionsSchemaRestriction>;

export interface AppRestrictionsSchema {
  /** Deprecated. */
  kind?: string;
  /** The set of restrictions that make up this schema. */
  restrictions?: ReadonlyArray<AppRestrictionsSchemaRestriction>;
}

export const AppRestrictionsSchema: Schema.Schema<AppRestrictionsSchema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    restrictions: Schema.optional(
      Schema.Array(AppRestrictionsSchemaRestriction),
    ),
  }).annotate({ identifier: "AppRestrictionsSchema" });

export interface Product {
  /** The minimum Android SDK necessary to run the app. */
  minAndroidSdkVersion?: number;
  /** The name of the author of the product (for example, the app developer). */
  authorName?: string;
  /** App versions currently available for this product. */
  appVersion?: ReadonlyArray<AppVersion>;
  /** A list of screenshot links representing the app. */
  screenshotUrls?: ReadonlyArray<string>;
  /** The app category (e.g. RACING, SOCIAL, etc.) */
  category?: string;
  /** The content rating for this app. */
  contentRating?:
    | "ratingUnknown"
    | "all"
    | "preTeen"
    | "teen"
    | "mature"
    | (string & {});
  /** The name of the product. */
  title?: string;
  /** The tracks visible to the enterprise. */
  appTracks?: ReadonlyArray<TrackInfo>;
  /** A link to the (consumer) Google Play details page for the product. */
  detailsUrl?: string;
  /** The localized promotional description, if available. */
  description?: string;
  /** Deprecated. */
  requiresContainerApp?: boolean;
  /** The certificate used to sign this product. */
  signingCertificate?: ProductSigningCertificate;
  /** The app restriction schema */
  appRestrictionsSchema?: AppRestrictionsSchema;
  /** Deprecated, use appTracks instead. */
  availableTracks?: ReadonlyArray<
    "appTrackUnspecified" | "production" | "beta" | "alpha" | (string & {})
  >;
  /** A link to the managed Google Play details page for the product, for use by an Enterprise admin. */
  workDetailsUrl?: string;
  /** The localized full app store description, if available. */
  fullDescription?: string;
  /** A link to an image that can be used as an icon for the product. This image is suitable for use at up to 512px x 512px. */
  iconUrl?: string;
  /** A link to a smaller image that can be used as an icon for the product. This image is suitable for use at up to 128px x 128px. */
  smallIconUrl?: string;
  /** Whether this product is free, free with in-app purchases, or paid. If the pricing is unknown, this means the product is not generally available anymore (even though it might still be available to people who own it). */
  productPricing?:
    | "unknown"
    | "free"
    | "freeWithInAppPurchase"
    | "paid"
    | (string & {});
  /** A list of permissions required by the app. */
  permissions?: ReadonlyArray<ProductPermission>;
  /** Noteworthy features (if any) of this product. */
  features?: ReadonlyArray<"featureUnknown" | "vpnApp" | (string & {})>;
  /** A description of the recent changes made to the app. */
  recentChanges?: string;
  /** The approximate time (within 7 days) the app was last published, expressed in milliseconds since epoch. */
  lastUpdatedTimestampMillis?: string;
  /** A string of the form *app:<package name>*. For example, app:com.google.android.gm represents the Gmail app. */
  productId?: string;
  /** How and to whom the package is made available. The value publicGoogleHosted means that the package is available through the Play store and not restricted to a specific enterprise. The value privateGoogleHosted means that the package is a private app (restricted to an enterprise) but hosted by Google. The value privateSelfHosted means that the package is a private app (restricted to an enterprise) and is privately hosted. */
  distributionChannel?:
    | "publicGoogleHosted"
    | "privateGoogleHosted"
    | "privateSelfHosted"
    | (string & {});
  /** The countries which this app is available in. */
  availableCountries?: ReadonlyArray<string>;
}

export const Product: Schema.Schema<Product> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minAndroidSdkVersion: Schema.optional(Schema.Number),
    authorName: Schema.optional(Schema.String),
    appVersion: Schema.optional(Schema.Array(AppVersion)),
    screenshotUrls: Schema.optional(Schema.Array(Schema.String)),
    category: Schema.optional(Schema.String),
    contentRating: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    appTracks: Schema.optional(Schema.Array(TrackInfo)),
    detailsUrl: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    requiresContainerApp: Schema.optional(Schema.Boolean),
    signingCertificate: Schema.optional(ProductSigningCertificate),
    appRestrictionsSchema: Schema.optional(AppRestrictionsSchema),
    availableTracks: Schema.optional(Schema.Array(Schema.String)),
    workDetailsUrl: Schema.optional(Schema.String),
    fullDescription: Schema.optional(Schema.String),
    iconUrl: Schema.optional(Schema.String),
    smallIconUrl: Schema.optional(Schema.String),
    productPricing: Schema.optional(Schema.String),
    permissions: Schema.optional(Schema.Array(ProductPermission)),
    features: Schema.optional(Schema.Array(Schema.String)),
    recentChanges: Schema.optional(Schema.String),
    lastUpdatedTimestampMillis: Schema.optional(Schema.String),
    productId: Schema.optional(Schema.String),
    distributionChannel: Schema.optional(Schema.String),
    availableCountries: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Product" });

export interface PageInfo {
  /** Total number of results available on the backend ! The total number of results in the result set. */
  totalResults?: number;
  /** Maximum number of results returned in one page. ! The number of results included in the API response. */
  resultPerPage?: number;
  /** Index of the first result returned in the current page. */
  startIndex?: number;
}

export const PageInfo: Schema.Schema<PageInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalResults: Schema.optional(Schema.Number),
    resultPerPage: Schema.optional(Schema.Number),
    startIndex: Schema.optional(Schema.Number),
  }).annotate({ identifier: "PageInfo" });

export interface ProductsListResponse {
  /** Pagination information for token pagination. */
  tokenPagination?: TokenPagination;
  /** Information about a product (e.g. an app) in the Google Play store, for display to an enterprise admin. */
  product?: ReadonlyArray<Product>;
  /** General pagination information. */
  pageInfo?: PageInfo;
}

export const ProductsListResponse: Schema.Schema<ProductsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tokenPagination: Schema.optional(TokenPagination),
    product: Schema.optional(Schema.Array(Product)),
    pageInfo: Schema.optional(PageInfo),
  }).annotate({ identifier: "ProductsListResponse" });

export interface User {
  /** The user's primary email address, for example, "jsmith@example.com". Will always be set for Google managed users and not set for EMM managed users. */
  primaryEmail?: string;
  /** The type of account that this user represents. A userAccount can be installed on multiple devices, but a deviceAccount is specific to a single device. An EMM-managed user (emmManaged) can be either type (userAccount, deviceAccount), but a Google-managed user (googleManaged) is always a userAccount. */
  accountType?: "deviceAccount" | "userAccount" | (string & {});
  /** A unique identifier you create for this user, such as "user342" or "asset#44418". Do not use personally identifiable information (PII) for this property. Must always be set for EMM-managed users. Not set for Google-managed users. */
  accountIdentifier?: string;
  /** The name that will appear in user interfaces. Setting this property is optional when creating EMM-managed users. If you do set this property, use something generic about the organization (such as "Example, Inc.") or your name (as EMM). Not used for Google-managed user accounts. @mutable androidenterprise.users.update */
  displayName?: string;
  /** The entity that manages the user. With googleManaged users, the source of truth is Google so EMMs have to make sure a Google Account exists for the user. With emmManaged users, the EMM is in charge. */
  managementType?: "googleManaged" | "emmManaged" | (string & {});
  /** The unique ID for the user. */
  id?: string;
}

export const User: Schema.Schema<User> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primaryEmail: Schema.optional(Schema.String),
    accountType: Schema.optional(Schema.String),
    accountIdentifier: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    managementType: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "User" });

export interface UsersListResponse {
  /** A user of an enterprise. */
  user?: ReadonlyArray<User>;
}

export const UsersListResponse: Schema.Schema<UsersListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user: Schema.optional(Schema.Array(User)),
  }).annotate({ identifier: "UsersListResponse" });

export interface GroupLicense {
  /** The ID of the product that the license is for. For example, "app:com.google.android.gm". */
  productId?: string;
  /** How this group license was acquired. "bulkPurchase" means that this Grouplicenses resource was created because the enterprise purchased licenses for this product; otherwise, the value is "free" (for free products). */
  acquisitionKind?: "free" | "bulkPurchase" | (string & {});
  /** Whether the product to which this group license relates is currently approved by the enterprise. Products are approved when a group license is first created, but this approval may be revoked by an enterprise admin via Google Play. Unapproved products will not be visible to end users in collections, and new entitlements to them should not normally be created. */
  approval?: "approved" | "unapproved" | (string & {});
  /** The permission approval status of the product. This field is only set if the product is approved. Possible states are: - "currentApproved", the current set of permissions is approved, but additional permissions will require the administrator to reapprove the product (If the product was approved without specifying the approved permissions setting, then this is the default behavior.), - "needsReapproval", the product has unapproved permissions. No additional product licenses can be assigned until the product is reapproved, - "allCurrentAndFutureApproved", the current permissions are approved and any future permission updates will be automatically approved without administrator review. */
  permissions?:
    | "currentApproved"
    | "needsReapproval"
    | "allCurrentAndFutureApproved"
    | (string & {});
  /** The number of purchased licenses (possibly in multiple purchases). If this field is omitted, then there is no limit on the number of licenses that can be provisioned (for example, if the acquisition kind is "free"). */
  numPurchased?: number;
  /** The total number of provisioned licenses for this product. Returned by read operations, but ignored in write operations. */
  numProvisioned?: number;
}

export const GroupLicense: Schema.Schema<GroupLicense> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productId: Schema.optional(Schema.String),
    acquisitionKind: Schema.optional(Schema.String),
    approval: Schema.optional(Schema.String),
    permissions: Schema.optional(Schema.String),
    numPurchased: Schema.optional(Schema.Number),
    numProvisioned: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GroupLicense" });

export interface GroupLicensesListResponse {
  /** A group license for a product approved for use in the enterprise. */
  groupLicense?: ReadonlyArray<GroupLicense>;
}

export const GroupLicensesListResponse: Schema.Schema<GroupLicensesListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupLicense: Schema.optional(Schema.Array(GroupLicense)),
  }).annotate({ identifier: "GroupLicensesListResponse" });

export interface InstallsListResponse {
  /** An installation of an app for a user on a specific device. The existence of an install implies that the user must have an entitlement to the app. */
  install?: ReadonlyArray<Install>;
}

export const InstallsListResponse: Schema.Schema<InstallsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    install: Schema.optional(Schema.Array(Install)),
  }).annotate({ identifier: "InstallsListResponse" });

export interface Entitlement {
  /** The ID of the product that the entitlement is for. For example, "app:com.google.android.gm". */
  productId?: string;
  /** The reason for the entitlement. For example, "free" for free apps. This property is temporary: it will be replaced by the acquisition kind field of group licenses. */
  reason?: "free" | "groupLicense" | "userPurchase" | (string & {});
}

export const Entitlement: Schema.Schema<Entitlement> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productId: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
  }).annotate({ identifier: "Entitlement" });

export interface EntitlementsListResponse {
  /** An entitlement of a user to a product (e.g. an app). For example, a free app that they have installed, or a paid app that they have been allocated a license to. */
  entitlement?: ReadonlyArray<Entitlement>;
}

export const EntitlementsListResponse: Schema.Schema<EntitlementsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entitlement: Schema.optional(Schema.Array(Entitlement)),
  }).annotate({ identifier: "EntitlementsListResponse" });

export interface ProductVisibility {
  /** Deprecated. Use trackIds instead. */
  tracks?: ReadonlyArray<
    "appTrackUnspecified" | "production" | "beta" | "alpha" | (string & {})
  >;
  /** Grants the user visibility to the specified product track(s), identified by trackIds. */
  trackIds?: ReadonlyArray<string>;
  /** The product ID to make visible to the user. Required for each item in the productVisibility list. */
  productId?: string;
}

export const ProductVisibility: Schema.Schema<ProductVisibility> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tracks: Schema.optional(Schema.Array(Schema.String)),
    trackIds: Schema.optional(Schema.Array(Schema.String)),
    productId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductVisibility" });

export interface ProductSet {
  /** The list of product IDs making up the set of products. */
  productId?: ReadonlyArray<string>;
  /** The interpretation of this product set. "unknown" should never be sent and is ignored if received. "whitelist" means that the user is entitled to access the product set. "includeAll" means that all products are accessible, including products that are approved, products with revoked approval, and products that have never been approved. "allApproved" means that the user is entitled to access all products that are approved for the enterprise. If the value is "allApproved" or "includeAll", the productId field is ignored. If no value is provided, it is interpreted as "whitelist" for backwards compatibility. Further "allApproved" or "includeAll" does not enable automatic visibility of "alpha" or "beta" tracks for Android app. Use ProductVisibility to enable "alpha" or "beta" tracks per user. */
  productSetBehavior?:
    | "unknown"
    | "whitelist"
    | "includeAll"
    | "allApproved"
    | (string & {});
  /** Additional list of product IDs making up the product set. Unlike the productID array, in this list It's possible to specify which tracks (alpha, beta, production) of a product are visible to the user. See ProductVisibility and its fields for more information. Specifying the same product ID both here and in the productId array is not allowed and it will result in an error. */
  productVisibility?: ReadonlyArray<ProductVisibility>;
}

export const ProductSet: Schema.Schema<ProductSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productId: Schema.optional(Schema.Array(Schema.String)),
    productSetBehavior: Schema.optional(Schema.String),
    productVisibility: Schema.optional(Schema.Array(ProductVisibility)),
  }).annotate({ identifier: "ProductSet" });

export interface ProductPermissions {
  /** The ID of the app that the permissions relate to, e.g. "app:com.google.android.gm". */
  productId?: string;
  /** The permissions required by the app. */
  permission?: ReadonlyArray<ProductPermission>;
}

export const ProductPermissions: Schema.Schema<ProductPermissions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productId: Schema.optional(Schema.String),
    permission: Schema.optional(Schema.Array(ProductPermission)),
  }).annotate({ identifier: "ProductPermissions" });

export interface GroupLicenseUsersListResponse {
  /** A user of an enterprise. */
  user?: ReadonlyArray<User>;
}

export const GroupLicenseUsersListResponse: Schema.Schema<GroupLicenseUsersListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user: Schema.optional(Schema.Array(User)),
  }).annotate({ identifier: "GroupLicenseUsersListResponse" });

export interface StoreLayoutClustersListResponse {
  /** A store cluster of an enterprise. */
  cluster?: ReadonlyArray<StoreCluster>;
}

export const StoreLayoutClustersListResponse: Schema.Schema<StoreLayoutClustersListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cluster: Schema.optional(Schema.Array(StoreCluster)),
  }).annotate({ identifier: "StoreLayoutClustersListResponse" });

export interface ServiceAccountKey {
  /** The file format of the generated key data. */
  type?: "googleCredentials" | "pkcs12" | (string & {});
  /** An opaque, unique identifier for this ServiceAccountKey. Assigned by the server. */
  id?: string;
  /** Public key data for the credentials file. This is an X.509 cert. If you are using the googleCredentials key type, this is identical to the cert that can be retrieved by using the X.509 cert url inside of the credentials file. */
  publicData?: string;
  /** The body of the private key credentials file, in string format. This is only populated when the ServiceAccountKey is created, and is not stored by Google. When type is "pkcs12", the contents of the data field is base64 encoded and has the password "notasecret". */
  data?: string;
}

export const ServiceAccountKey: Schema.Schema<ServiceAccountKey> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    publicData: Schema.optional(Schema.String),
    data: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceAccountKey" });

export interface ServiceAccount {
  /** Credentials that can be used to authenticate as this ServiceAccount. */
  key?: ServiceAccountKey;
  /** The account name of the service account, in the form of an email address. Assigned by the server. */
  name?: string;
}

export const ServiceAccount: Schema.Schema<ServiceAccount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(ServiceAccountKey),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceAccount" });

export interface ServiceAccountKeysListResponse {
  /** The service account credentials. */
  serviceAccountKey?: ReadonlyArray<ServiceAccountKey>;
}

export const ServiceAccountKeysListResponse: Schema.Schema<ServiceAccountKeysListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAccountKey: Schema.optional(Schema.Array(ServiceAccountKey)),
  }).annotate({ identifier: "ServiceAccountKeysListResponse" });

export interface NotificationSet {
  /** The notification set ID, required to mark the notification as received with the Enterprises.AcknowledgeNotification API. This will be omitted if no notifications are present. */
  notificationSetId?: string;
  /** The notifications received, or empty if no notifications are present. */
  notification?: ReadonlyArray<Notification>;
}

export const NotificationSet: Schema.Schema<NotificationSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notificationSetId: Schema.optional(Schema.String),
    notification: Schema.optional(Schema.Array(Notification)),
  }).annotate({ identifier: "NotificationSet" });

export interface Permission {
  /** An opaque string uniquely identifying the permission. */
  permissionId?: string;
  /** The name of the permission. */
  name?: string;
  /** A longer description of the Permissions resource, giving more details of what it affects. */
  description?: string;
}

export const Permission: Schema.Schema<Permission> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissionId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "Permission" });

export interface StoreLayout {
  /** The ID of the store page to be used as the homepage. The homepage is the first page shown in the managed Google Play Store. Not specifying a homepage is equivalent to setting the store layout type to "basic". */
  homepageId?: string;
  /** The store layout type. By default, this value is set to "basic" if the homepageId field is not set, and to "custom" otherwise. If set to "basic", the layout will consist of all approved apps that have been whitelisted for the user. */
  storeLayoutType?: "unknown" | "basic" | "custom" | (string & {});
}

export const StoreLayout: Schema.Schema<StoreLayout> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    homepageId: Schema.optional(Schema.String),
    storeLayoutType: Schema.optional(Schema.String),
  }).annotate({ identifier: "StoreLayout" });

export interface AuthenticationToken {
  /** The authentication token to be passed to the device policy client on the device where it can be used to provision the account for which this token was generated. */
  token?: string;
}

export const AuthenticationToken: Schema.Schema<AuthenticationToken> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String),
  }).annotate({ identifier: "AuthenticationToken" });

export interface ManagedConfigurationsForDeviceListResponse {
  /** A managed configuration for an app on a specific device. */
  managedConfigurationForDevice?: ReadonlyArray<ManagedConfiguration>;
}

export const ManagedConfigurationsForDeviceListResponse: Schema.Schema<ManagedConfigurationsForDeviceListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    managedConfigurationForDevice: Schema.optional(
      Schema.Array(ManagedConfiguration),
    ),
  }).annotate({ identifier: "ManagedConfigurationsForDeviceListResponse" });

export interface EnterprisesSendTestPushNotificationResponse {
  /** The name of the Cloud Pub/Sub topic to which notifications for this enterprise's enrolled account will be sent. */
  topicName?: string;
  /** The message ID of the test push notification that was sent. */
  messageId?: string;
}

export const EnterprisesSendTestPushNotificationResponse: Schema.Schema<EnterprisesSendTestPushNotificationResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    topicName: Schema.optional(Schema.String),
    messageId: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnterprisesSendTestPushNotificationResponse" });

export interface GenerateEnterpriseUpgradeUrlResponse {
  /** A URL for an enterprise admin to upgrade their enterprise. The page can't be rendered in an iframe. */
  url?: string;
}

export const GenerateEnterpriseUpgradeUrlResponse: Schema.Schema<GenerateEnterpriseUpgradeUrlResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerateEnterpriseUpgradeUrlResponse" });

export interface AdministratorWebToken {
  /** An opaque token to be passed to the Play front-end to generate an iframe. */
  token?: string;
}

export const AdministratorWebToken: Schema.Schema<AdministratorWebToken> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdministratorWebToken" });

export interface EnterpriseAccount {
  /** The email address of the service account. */
  accountEmail?: string;
}

export const EnterpriseAccount: Schema.Schema<EnterpriseAccount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountEmail: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnterpriseAccount" });

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

export interface ListDevicesRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the user. */
  userId: string;
}

export const ListDevicesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
  userId: Schema.String.pipe(T.HttpPath("userId")),
}).pipe(
  T.Http({
    method: "GET",
    path: "androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices",
  }),
  svc,
) as unknown as Schema.Schema<ListDevicesRequest>;

export type ListDevicesResponse = DevicesListResponse;
export const ListDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DevicesListResponse;

export type ListDevicesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves the IDs of all of a user's devices. */
export const listDevices: API.OperationMethod<
  ListDevicesRequest,
  ListDevicesResponse,
  ListDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListDevicesRequest,
  output: ListDevicesResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateDevicesRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the user. */
  userId: string;
  /** Mask that identifies which fields to update. If not set, all modifiable fields will be modified. When set in a query parameter, this field should be specified as updateMask=<field1>,<field2>,... */
  updateMask?: string;
  /** The ID of the device. */
  deviceId: string;
  /** Request body */
  body?: Device;
}

export const UpdateDevicesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
  userId: Schema.String.pipe(T.HttpPath("userId")),
  updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
  deviceId: Schema.String.pipe(T.HttpPath("deviceId")),
  body: Schema.optional(Device).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PUT",
    path: "androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateDevicesRequest>;

export type UpdateDevicesResponse = Device;
export const UpdateDevicesResponse = /*@__PURE__*/ /*#__PURE__*/ Device;

export type UpdateDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the device policy. To ensure the policy is properly enforced, you need to prevent unmanaged accounts from accessing Google Play by setting the allowed_accounts in the managed configuration for the Google Play package. See restrict accounts in Google Play. When provisioning a new device, you should set the device policy using this method before adding the managed Google Play Account to the device, otherwise the policy will not be applied for a short period of time after adding the account to the device. */
export const updateDevices: API.OperationMethod<
  UpdateDevicesRequest,
  UpdateDevicesResponse,
  UpdateDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateDevicesRequest,
  output: UpdateDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetStateDevicesRequest {
  /** The ID of the device. */
  deviceId: string;
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the user. */
  userId: string;
  /** Request body */
  body?: DeviceState;
}

export const SetStateDevicesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    deviceId: Schema.String.pipe(T.HttpPath("deviceId")),
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    userId: Schema.String.pipe(T.HttpPath("userId")),
    body: Schema.optional(DeviceState).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({
    method: "PUT",
    path: "androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/state",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<SetStateDevicesRequest>;

export type SetStateDevicesResponse = DeviceState;
export const SetStateDevicesResponse = /*@__PURE__*/ /*#__PURE__*/ DeviceState;

export type SetStateDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets whether a device's access to Google services (including Google Play) is enabled or disabled for the specified user. Setting the state to "enabled" allows the Google Account to access Google services, while "disabled" blocks access by preventing OAuth token issuance. Preconditions for Enforcement: 1. This setting is only effective for Google-managed users. 2. The enterprise must be linked to a Google Managed Domain. 3. Enforcement requires third-party Android mobile management to be enabled within the Google Admin Console for the user's Organizational Unit. If these preconditions are not met, changes to this state may be ignored. */
export const setStateDevices: API.OperationMethod<
  SetStateDevicesRequest,
  SetStateDevicesResponse,
  SetStateDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetStateDevicesRequest,
  output: SetStateDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ForceReportUploadDevicesRequest {
  /** The ID of the device. */
  deviceId: string;
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the user. */
  userId: string;
}

export const ForceReportUploadDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceId: Schema.String.pipe(T.HttpPath("deviceId")),
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    userId: Schema.String.pipe(T.HttpPath("userId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/forceReportUpload",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ForceReportUploadDevicesRequest>;

export interface ForceReportUploadDevicesResponse {}
export const ForceReportUploadDevicesResponse: Schema.Schema<ForceReportUploadDevicesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<ForceReportUploadDevicesResponse>;

export type ForceReportUploadDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Uploads a report containing any changes in app states on the device since the last report was generated. You can call this method up to 3 times every 24 hours for a given device. If you exceed the quota, then the Google Play EMM API returns HTTP 429 Too Many Requests. */
export const forceReportUploadDevices: API.OperationMethod<
  ForceReportUploadDevicesRequest,
  ForceReportUploadDevicesResponse,
  ForceReportUploadDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ForceReportUploadDevicesRequest,
  output: ForceReportUploadDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetDevicesRequest {
  /** The ID of the device. */
  deviceId: string;
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the user. */
  userId: string;
}

export const GetDevicesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  deviceId: Schema.String.pipe(T.HttpPath("deviceId")),
  enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
  userId: Schema.String.pipe(T.HttpPath("userId")),
}).pipe(
  T.Http({
    method: "GET",
    path: "androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}",
  }),
  svc,
) as unknown as Schema.Schema<GetDevicesRequest>;

export type GetDevicesResponse = Device;
export const GetDevicesResponse = /*@__PURE__*/ /*#__PURE__*/ Device;

export type GetDevicesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves the details of a device. */
export const getDevices: API.OperationMethod<
  GetDevicesRequest,
  GetDevicesResponse,
  GetDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDevicesRequest,
  output: GetDevicesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetStateDevicesRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the user. */
  userId: string;
  /** The ID of the device. */
  deviceId: string;
}

export const GetStateDevicesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    userId: Schema.String.pipe(T.HttpPath("userId")),
    deviceId: Schema.String.pipe(T.HttpPath("deviceId")),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/state",
  }),
  svc,
) as unknown as Schema.Schema<GetStateDevicesRequest>;

export type GetStateDevicesResponse = DeviceState;
export const GetStateDevicesResponse = /*@__PURE__*/ /*#__PURE__*/ DeviceState;

export type GetStateDevicesError = DefaultErrors | NotFound | Forbidden;

/** Checks if a device can access Google apps and services for a user. Returns whether access is "enabled" or "disabled". A "disabled" state prevents the user's Managed Google Account on the device from successfully authenticating with Google. This blocks access to most Google applications and services, including Google Play, as the device cannot prove its entitlement to access them. New devices default to "disabled". Important: Enforcement of this state depends on the following conditions: * The user must be a managed google account. * The enterprise must be a managed google domain. * Third-party Android mobile management must be active in the Google Admin Console for the user's Organizational Unit. If these conditions aren't met, access may still be possible even in a "disabled" state. */
export const getStateDevices: API.OperationMethod<
  GetStateDevicesRequest,
  GetStateDevicesResponse,
  GetStateDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetStateDevicesRequest,
  output: GetStateDevicesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetStorelayoutclustersRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the page. */
  pageId: string;
  /** The ID of the cluster. */
  clusterId: string;
}

export const GetStorelayoutclustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    pageId: Schema.String.pipe(T.HttpPath("pageId")),
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetStorelayoutclustersRequest>;

export type GetStorelayoutclustersResponse = StoreCluster;
export const GetStorelayoutclustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ StoreCluster;

export type GetStorelayoutclustersError = DefaultErrors | NotFound | Forbidden;

/** Retrieves details of a cluster. */
export const getStorelayoutclusters: API.OperationMethod<
  GetStorelayoutclustersRequest,
  GetStorelayoutclustersResponse,
  GetStorelayoutclustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetStorelayoutclustersRequest,
  output: GetStorelayoutclustersResponse,
  errors: [NotFound, Forbidden],
}));

export interface InsertStorelayoutclustersRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the page. */
  pageId: string;
  /** Request body */
  body?: StoreCluster;
}

export const InsertStorelayoutclustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    pageId: Schema.String.pipe(T.HttpPath("pageId")),
    body: Schema.optional(StoreCluster).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertStorelayoutclustersRequest>;

export type InsertStorelayoutclustersResponse = StoreCluster;
export const InsertStorelayoutclustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ StoreCluster;

export type InsertStorelayoutclustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new cluster in a page. */
export const insertStorelayoutclusters: API.OperationMethod<
  InsertStorelayoutclustersRequest,
  InsertStorelayoutclustersResponse,
  InsertStorelayoutclustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertStorelayoutclustersRequest,
  output: InsertStorelayoutclustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateStorelayoutclustersRequest {
  /** The ID of the cluster. */
  clusterId: string;
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the page. */
  pageId: string;
  /** Request body */
  body?: StoreCluster;
}

export const UpdateStorelayoutclustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    pageId: Schema.String.pipe(T.HttpPath("pageId")),
    body: Schema.optional(StoreCluster).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateStorelayoutclustersRequest>;

export type UpdateStorelayoutclustersResponse = StoreCluster;
export const UpdateStorelayoutclustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ StoreCluster;

export type UpdateStorelayoutclustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a cluster. */
export const updateStorelayoutclusters: API.OperationMethod<
  UpdateStorelayoutclustersRequest,
  UpdateStorelayoutclustersResponse,
  UpdateStorelayoutclustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateStorelayoutclustersRequest,
  output: UpdateStorelayoutclustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteStorelayoutclustersRequest {
  /** The ID of the cluster. */
  clusterId: string;
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the page. */
  pageId: string;
}

export const DeleteStorelayoutclustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterId: Schema.String.pipe(T.HttpPath("clusterId")),
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    pageId: Schema.String.pipe(T.HttpPath("pageId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteStorelayoutclustersRequest>;

export interface DeleteStorelayoutclustersResponse {}
export const DeleteStorelayoutclustersResponse: Schema.Schema<DeleteStorelayoutclustersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteStorelayoutclustersResponse>;

export type DeleteStorelayoutclustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a cluster. */
export const deleteStorelayoutclusters: API.OperationMethod<
  DeleteStorelayoutclustersRequest,
  DeleteStorelayoutclustersResponse,
  DeleteStorelayoutclustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteStorelayoutclustersRequest,
  output: DeleteStorelayoutclustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListStorelayoutclustersRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the page. */
  pageId: string;
}

export const ListStorelayoutclustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    pageId: Schema.String.pipe(T.HttpPath("pageId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters",
    }),
    svc,
  ) as unknown as Schema.Schema<ListStorelayoutclustersRequest>;

export type ListStorelayoutclustersResponse = StoreLayoutClustersListResponse;
export const ListStorelayoutclustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ StoreLayoutClustersListResponse;

export type ListStorelayoutclustersError = DefaultErrors | NotFound | Forbidden;

/** Retrieves the details of all clusters on the specified page. */
export const listStorelayoutclusters: API.OperationMethod<
  ListStorelayoutclustersRequest,
  ListStorelayoutclustersResponse,
  ListStorelayoutclustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListStorelayoutclustersRequest,
  output: ListStorelayoutclustersResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetManagedconfigurationsforuserRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the user. */
  userId: string;
  /** The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm". */
  managedConfigurationForUserId: string;
}

export const GetManagedconfigurationsforuserRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    userId: Schema.String.pipe(T.HttpPath("userId")),
    managedConfigurationForUserId: Schema.String.pipe(
      T.HttpPath("managedConfigurationForUserId"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetManagedconfigurationsforuserRequest>;

export type GetManagedconfigurationsforuserResponse = ManagedConfiguration;
export const GetManagedconfigurationsforuserResponse =
  /*@__PURE__*/ /*#__PURE__*/ ManagedConfiguration;

export type GetManagedconfigurationsforuserError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves details of a per-user managed configuration for an app for the specified user. */
export const getManagedconfigurationsforuser: API.OperationMethod<
  GetManagedconfigurationsforuserRequest,
  GetManagedconfigurationsforuserResponse,
  GetManagedconfigurationsforuserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetManagedconfigurationsforuserRequest,
  output: GetManagedconfigurationsforuserResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateManagedconfigurationsforuserRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the user. */
  userId: string;
  /** The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm". */
  managedConfigurationForUserId: string;
  /** Request body */
  body?: ManagedConfiguration;
}

export const UpdateManagedconfigurationsforuserRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    userId: Schema.String.pipe(T.HttpPath("userId")),
    managedConfigurationForUserId: Schema.String.pipe(
      T.HttpPath("managedConfigurationForUserId"),
    ),
    body: Schema.optional(ManagedConfiguration).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateManagedconfigurationsforuserRequest>;

export type UpdateManagedconfigurationsforuserResponse = ManagedConfiguration;
export const UpdateManagedconfigurationsforuserResponse =
  /*@__PURE__*/ /*#__PURE__*/ ManagedConfiguration;

export type UpdateManagedconfigurationsforuserError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds or updates the managed configuration settings for an app for the specified user. If you support the Managed configurations iframe, you can apply managed configurations to a user by specifying an mcmId and its associated configuration variables (if any) in the request. Alternatively, all EMMs can apply managed configurations by passing a list of managed properties. */
export const updateManagedconfigurationsforuser: API.OperationMethod<
  UpdateManagedconfigurationsforuserRequest,
  UpdateManagedconfigurationsforuserResponse,
  UpdateManagedconfigurationsforuserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateManagedconfigurationsforuserRequest,
  output: UpdateManagedconfigurationsforuserResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteManagedconfigurationsforuserRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the user. */
  userId: string;
  /** The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm". */
  managedConfigurationForUserId: string;
}

export const DeleteManagedconfigurationsforuserRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    userId: Schema.String.pipe(T.HttpPath("userId")),
    managedConfigurationForUserId: Schema.String.pipe(
      T.HttpPath("managedConfigurationForUserId"),
    ),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteManagedconfigurationsforuserRequest>;

export interface DeleteManagedconfigurationsforuserResponse {}
export const DeleteManagedconfigurationsforuserResponse: Schema.Schema<DeleteManagedconfigurationsforuserResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteManagedconfigurationsforuserResponse>;

export type DeleteManagedconfigurationsforuserError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes a per-user managed configuration for an app for the specified user. */
export const deleteManagedconfigurationsforuser: API.OperationMethod<
  DeleteManagedconfigurationsforuserRequest,
  DeleteManagedconfigurationsforuserResponse,
  DeleteManagedconfigurationsforuserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteManagedconfigurationsforuserRequest,
  output: DeleteManagedconfigurationsforuserResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListManagedconfigurationsforuserRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the user. */
  userId: string;
}

export const ListManagedconfigurationsforuserRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    userId: Schema.String.pipe(T.HttpPath("userId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser",
    }),
    svc,
  ) as unknown as Schema.Schema<ListManagedconfigurationsforuserRequest>;

export type ListManagedconfigurationsforuserResponse =
  ManagedConfigurationsForUserListResponse;
export const ListManagedconfigurationsforuserResponse =
  /*@__PURE__*/ /*#__PURE__*/ ManagedConfigurationsForUserListResponse;

export type ListManagedconfigurationsforuserError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the per-user managed configurations for the specified user. Only the ID is set. */
export const listManagedconfigurationsforuser: API.OperationMethod<
  ListManagedconfigurationsforuserRequest,
  ListManagedconfigurationsforuserResponse,
  ListManagedconfigurationsforuserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagedconfigurationsforuserRequest,
  output: ListManagedconfigurationsforuserResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListGrouplicenseusersRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the product the group license is for, e.g. "app:com.google.android.gm". */
  groupLicenseId: string;
}

export const ListGrouplicenseusersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    groupLicenseId: Schema.String.pipe(T.HttpPath("groupLicenseId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses/{groupLicenseId}/users",
    }),
    svc,
  ) as unknown as Schema.Schema<ListGrouplicenseusersRequest>;

export type ListGrouplicenseusersResponse = GroupLicenseUsersListResponse;
export const ListGrouplicenseusersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GroupLicenseUsersListResponse;

export type ListGrouplicenseusersError = DefaultErrors | NotFound | Forbidden;

/** Retrieves the IDs of the users who have been granted entitlements under the license. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. */
export const listGrouplicenseusers: API.OperationMethod<
  ListGrouplicenseusersRequest,
  ListGrouplicenseusersResponse,
  ListGrouplicenseusersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListGrouplicenseusersRequest,
  output: ListGrouplicenseusersResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListManagedconfigurationssettingsRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the product for which the managed configurations settings applies to. */
  productId: string;
}

export const ListManagedconfigurationssettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/managedConfigurationsSettings",
    }),
    svc,
  ) as unknown as Schema.Schema<ListManagedconfigurationssettingsRequest>;

export type ListManagedconfigurationssettingsResponse =
  ManagedConfigurationsSettingsListResponse;
export const ListManagedconfigurationssettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ManagedConfigurationsSettingsListResponse;

export type ListManagedconfigurationssettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the managed configurations settings for the specified app. */
export const listManagedconfigurationssettings: API.OperationMethod<
  ListManagedconfigurationssettingsRequest,
  ListManagedconfigurationssettingsResponse,
  ListManagedconfigurationssettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagedconfigurationssettingsRequest,
  output: ListManagedconfigurationssettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateEnrollmentTokensRequest {
  /** Required. The ID of the enterprise. */
  enterpriseId: string;
  /** Request body */
  body?: EnrollmentToken;
}

export const CreateEnrollmentTokensRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    body: Schema.optional(EnrollmentToken).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/enrollmentTokens",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateEnrollmentTokensRequest>;

export type CreateEnrollmentTokensResponse = EnrollmentToken;
export const CreateEnrollmentTokensResponse =
  /*@__PURE__*/ /*#__PURE__*/ EnrollmentToken;

export type CreateEnrollmentTokensError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns a token for device enrollment. The DPC can encode this token within the QR/NFC/zero-touch enrollment payload or fetch it before calling the on-device API to authenticate the user. The token can be generated for each device or reused across multiple devices. */
export const createEnrollmentTokens: API.OperationMethod<
  CreateEnrollmentTokensRequest,
  CreateEnrollmentTokensResponse,
  CreateEnrollmentTokensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateEnrollmentTokensRequest,
  output: CreateEnrollmentTokensResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetManagedconfigurationsfordeviceRequest {
  /** The Android ID of the device. */
  deviceId: string;
  /** The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm". */
  managedConfigurationForDeviceId: string;
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the user. */
  userId: string;
}

export const GetManagedconfigurationsfordeviceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceId: Schema.String.pipe(T.HttpPath("deviceId")),
    managedConfigurationForDeviceId: Schema.String.pipe(
      T.HttpPath("managedConfigurationForDeviceId"),
    ),
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    userId: Schema.String.pipe(T.HttpPath("userId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetManagedconfigurationsfordeviceRequest>;

export type GetManagedconfigurationsfordeviceResponse = ManagedConfiguration;
export const GetManagedconfigurationsfordeviceResponse =
  /*@__PURE__*/ /*#__PURE__*/ ManagedConfiguration;

export type GetManagedconfigurationsfordeviceError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves details of a per-device managed configuration. */
export const getManagedconfigurationsfordevice: API.OperationMethod<
  GetManagedconfigurationsfordeviceRequest,
  GetManagedconfigurationsfordeviceResponse,
  GetManagedconfigurationsfordeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetManagedconfigurationsfordeviceRequest,
  output: GetManagedconfigurationsfordeviceResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateManagedconfigurationsfordeviceRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the user. */
  userId: string;
  /** The Android ID of the device. */
  deviceId: string;
  /** The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm". */
  managedConfigurationForDeviceId: string;
  /** Request body */
  body?: ManagedConfiguration;
}

export const UpdateManagedconfigurationsfordeviceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    userId: Schema.String.pipe(T.HttpPath("userId")),
    deviceId: Schema.String.pipe(T.HttpPath("deviceId")),
    managedConfigurationForDeviceId: Schema.String.pipe(
      T.HttpPath("managedConfigurationForDeviceId"),
    ),
    body: Schema.optional(ManagedConfiguration).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateManagedconfigurationsfordeviceRequest>;

export type UpdateManagedconfigurationsfordeviceResponse = ManagedConfiguration;
export const UpdateManagedconfigurationsfordeviceResponse =
  /*@__PURE__*/ /*#__PURE__*/ ManagedConfiguration;

export type UpdateManagedconfigurationsfordeviceError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds or updates a per-device managed configuration for an app for the specified device. */
export const updateManagedconfigurationsfordevice: API.OperationMethod<
  UpdateManagedconfigurationsfordeviceRequest,
  UpdateManagedconfigurationsfordeviceResponse,
  UpdateManagedconfigurationsfordeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateManagedconfigurationsfordeviceRequest,
  output: UpdateManagedconfigurationsfordeviceResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteManagedconfigurationsfordeviceRequest {
  /** The Android ID of the device. */
  deviceId: string;
  /** The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm". */
  managedConfigurationForDeviceId: string;
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the user. */
  userId: string;
}

export const DeleteManagedconfigurationsfordeviceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceId: Schema.String.pipe(T.HttpPath("deviceId")),
    managedConfigurationForDeviceId: Schema.String.pipe(
      T.HttpPath("managedConfigurationForDeviceId"),
    ),
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    userId: Schema.String.pipe(T.HttpPath("userId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteManagedconfigurationsfordeviceRequest>;

export interface DeleteManagedconfigurationsfordeviceResponse {}
export const DeleteManagedconfigurationsfordeviceResponse: Schema.Schema<DeleteManagedconfigurationsfordeviceResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteManagedconfigurationsfordeviceResponse>;

export type DeleteManagedconfigurationsfordeviceError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes a per-device managed configuration for an app for the specified device. */
export const deleteManagedconfigurationsfordevice: API.OperationMethod<
  DeleteManagedconfigurationsfordeviceRequest,
  DeleteManagedconfigurationsfordeviceResponse,
  DeleteManagedconfigurationsfordeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteManagedconfigurationsfordeviceRequest,
  output: DeleteManagedconfigurationsfordeviceResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListManagedconfigurationsfordeviceRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the user. */
  userId: string;
  /** The Android ID of the device. */
  deviceId: string;
}

export const ListManagedconfigurationsfordeviceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    userId: Schema.String.pipe(T.HttpPath("userId")),
    deviceId: Schema.String.pipe(T.HttpPath("deviceId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice",
    }),
    svc,
  ) as unknown as Schema.Schema<ListManagedconfigurationsfordeviceRequest>;

export type ListManagedconfigurationsfordeviceResponse =
  ManagedConfigurationsForDeviceListResponse;
export const ListManagedconfigurationsfordeviceResponse =
  /*@__PURE__*/ /*#__PURE__*/ ManagedConfigurationsForDeviceListResponse;

export type ListManagedconfigurationsfordeviceError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the per-device managed configurations for the specified device. Only the ID is set. */
export const listManagedconfigurationsfordevice: API.OperationMethod<
  ListManagedconfigurationsfordeviceRequest,
  ListManagedconfigurationsfordeviceResponse,
  ListManagedconfigurationsfordeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagedconfigurationsfordeviceRequest,
  output: ListManagedconfigurationsfordeviceResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetPermissionsRequest {
  /** The ID of the permission. */
  permissionId: string;
  /** The BCP47 tag for the user's preferred language (e.g. "en-US", "de") */
  language?: string;
}

export const GetPermissionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  permissionId: Schema.String.pipe(T.HttpPath("permissionId")),
  language: Schema.optional(Schema.String).pipe(T.HttpQuery("language")),
}).pipe(
  T.Http({
    method: "GET",
    path: "androidenterprise/v1/permissions/{permissionId}",
  }),
  svc,
) as unknown as Schema.Schema<GetPermissionsRequest>;

export type GetPermissionsResponse = Permission;
export const GetPermissionsResponse = /*@__PURE__*/ /*#__PURE__*/ Permission;

export type GetPermissionsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves details of an Android app permission for display to an enterprise admin. */
export const getPermissions: API.OperationMethod<
  GetPermissionsRequest,
  GetPermissionsResponse,
  GetPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPermissionsRequest,
  output: GetPermissionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetWebappsRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the web app. */
  webAppId: string;
}

export const GetWebappsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
  webAppId: Schema.String.pipe(T.HttpPath("webAppId")),
}).pipe(
  T.Http({
    method: "GET",
    path: "androidenterprise/v1/enterprises/{enterpriseId}/webApps/{webAppId}",
  }),
  svc,
) as unknown as Schema.Schema<GetWebappsRequest>;

export type GetWebappsResponse = WebApp;
export const GetWebappsResponse = /*@__PURE__*/ /*#__PURE__*/ WebApp;

export type GetWebappsError = DefaultErrors | NotFound | Forbidden;

/** Gets an existing web app. */
export const getWebapps: API.OperationMethod<
  GetWebappsRequest,
  GetWebappsResponse,
  GetWebappsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetWebappsRequest,
  output: GetWebappsResponse,
  errors: [NotFound, Forbidden],
}));

export interface InsertWebappsRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** Request body */
  body?: WebApp;
}

export const InsertWebappsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
  body: Schema.optional(WebApp).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "androidenterprise/v1/enterprises/{enterpriseId}/webApps",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<InsertWebappsRequest>;

export type InsertWebappsResponse = WebApp;
export const InsertWebappsResponse = /*@__PURE__*/ /*#__PURE__*/ WebApp;

export type InsertWebappsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new web app for the enterprise. */
export const insertWebapps: API.OperationMethod<
  InsertWebappsRequest,
  InsertWebappsResponse,
  InsertWebappsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertWebappsRequest,
  output: InsertWebappsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateWebappsRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the web app. */
  webAppId: string;
  /** Request body */
  body?: WebApp;
}

export const UpdateWebappsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
  webAppId: Schema.String.pipe(T.HttpPath("webAppId")),
  body: Schema.optional(WebApp).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PUT",
    path: "androidenterprise/v1/enterprises/{enterpriseId}/webApps/{webAppId}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateWebappsRequest>;

export type UpdateWebappsResponse = WebApp;
export const UpdateWebappsResponse = /*@__PURE__*/ /*#__PURE__*/ WebApp;

export type UpdateWebappsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing web app. */
export const updateWebapps: API.OperationMethod<
  UpdateWebappsRequest,
  UpdateWebappsResponse,
  UpdateWebappsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateWebappsRequest,
  output: UpdateWebappsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteWebappsRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the web app. */
  webAppId: string;
}

export const DeleteWebappsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
  webAppId: Schema.String.pipe(T.HttpPath("webAppId")),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "androidenterprise/v1/enterprises/{enterpriseId}/webApps/{webAppId}",
  }),
  svc,
) as unknown as Schema.Schema<DeleteWebappsRequest>;

export interface DeleteWebappsResponse {}
export const DeleteWebappsResponse: Schema.Schema<DeleteWebappsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteWebappsResponse>;

export type DeleteWebappsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an existing web app. */
export const deleteWebapps: API.OperationMethod<
  DeleteWebappsRequest,
  DeleteWebappsResponse,
  DeleteWebappsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteWebappsRequest,
  output: DeleteWebappsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListWebappsRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
}

export const ListWebappsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
}).pipe(
  T.Http({
    method: "GET",
    path: "androidenterprise/v1/enterprises/{enterpriseId}/webApps",
  }),
  svc,
) as unknown as Schema.Schema<ListWebappsRequest>;

export type ListWebappsResponse = WebAppsListResponse;
export const ListWebappsResponse =
  /*@__PURE__*/ /*#__PURE__*/ WebAppsListResponse;

export type ListWebappsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves the details of all web apps for a given enterprise. */
export const listWebapps: API.OperationMethod<
  ListWebappsRequest,
  ListWebappsResponse,
  ListWebappsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListWebappsRequest,
  output: ListWebappsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetInstallsRequest {
  /** The Android ID of the device. */
  deviceId: string;
  /** The ID of the product represented by the install, e.g. "app:com.google.android.gm". */
  installId: string;
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the user. */
  userId: string;
}

export const GetInstallsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  deviceId: Schema.String.pipe(T.HttpPath("deviceId")),
  installId: Schema.String.pipe(T.HttpPath("installId")),
  enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
  userId: Schema.String.pipe(T.HttpPath("userId")),
}).pipe(
  T.Http({
    method: "GET",
    path: "androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}",
  }),
  svc,
) as unknown as Schema.Schema<GetInstallsRequest>;

export type GetInstallsResponse = Install;
export const GetInstallsResponse = /*@__PURE__*/ /*#__PURE__*/ Install;

export type GetInstallsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves details of an installation of an app on a device. */
export const getInstalls: API.OperationMethod<
  GetInstallsRequest,
  GetInstallsResponse,
  GetInstallsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetInstallsRequest,
  output: GetInstallsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateInstallsRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the user. */
  userId: string;
  /** The ID of the product represented by the install, e.g. "app:com.google.android.gm". */
  installId: string;
  /** The Android ID of the device. */
  deviceId: string;
  /** Request body */
  body?: Install;
}

export const UpdateInstallsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
  userId: Schema.String.pipe(T.HttpPath("userId")),
  installId: Schema.String.pipe(T.HttpPath("installId")),
  deviceId: Schema.String.pipe(T.HttpPath("deviceId")),
  body: Schema.optional(Install).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PUT",
    path: "androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateInstallsRequest>;

export type UpdateInstallsResponse = Install;
export const UpdateInstallsResponse = /*@__PURE__*/ /*#__PURE__*/ Install;

export type UpdateInstallsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Requests to install the latest version of an app to a device. If the app is already installed, then it is updated to the latest version if necessary. */
export const updateInstalls: API.OperationMethod<
  UpdateInstallsRequest,
  UpdateInstallsResponse,
  UpdateInstallsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateInstallsRequest,
  output: UpdateInstallsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteInstallsRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the user. */
  userId: string;
  /** The ID of the product represented by the install, e.g. "app:com.google.android.gm". */
  installId: string;
  /** The Android ID of the device. */
  deviceId: string;
}

export const DeleteInstallsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
  userId: Schema.String.pipe(T.HttpPath("userId")),
  installId: Schema.String.pipe(T.HttpPath("installId")),
  deviceId: Schema.String.pipe(T.HttpPath("deviceId")),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}",
  }),
  svc,
) as unknown as Schema.Schema<DeleteInstallsRequest>;

export interface DeleteInstallsResponse {}
export const DeleteInstallsResponse: Schema.Schema<DeleteInstallsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteInstallsResponse>;

export type DeleteInstallsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Requests to remove an app from a device. A call to get or list will still show the app as installed on the device until it is actually removed. A successful response indicates that a removal request has been sent to the device. The call will be considered successful even if the app is not present on the device (e.g. it was never installed, or was removed by the user). */
export const deleteInstalls: API.OperationMethod<
  DeleteInstallsRequest,
  DeleteInstallsResponse,
  DeleteInstallsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteInstallsRequest,
  output: DeleteInstallsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListInstallsRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the user. */
  userId: string;
  /** The Android ID of the device. */
  deviceId: string;
}

export const ListInstallsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
  userId: Schema.String.pipe(T.HttpPath("userId")),
  deviceId: Schema.String.pipe(T.HttpPath("deviceId")),
}).pipe(
  T.Http({
    method: "GET",
    path: "androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs",
  }),
  svc,
) as unknown as Schema.Schema<ListInstallsRequest>;

export type ListInstallsResponse = InstallsListResponse;
export const ListInstallsResponse =
  /*@__PURE__*/ /*#__PURE__*/ InstallsListResponse;

export type ListInstallsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves the details of all apps installed on the specified device. */
export const listInstalls: API.OperationMethod<
  ListInstallsRequest,
  ListInstallsResponse,
  ListInstallsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListInstallsRequest,
  output: ListInstallsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetEnterprisesRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
}

export const GetEnterprisesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
}).pipe(
  T.Http({
    method: "GET",
    path: "androidenterprise/v1/enterprises/{enterpriseId}",
  }),
  svc,
) as unknown as Schema.Schema<GetEnterprisesRequest>;

export type GetEnterprisesResponse = Enterprise;
export const GetEnterprisesResponse = /*@__PURE__*/ /*#__PURE__*/ Enterprise;

export type GetEnterprisesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves the name and domain of an enterprise. */
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

export interface EnrollEnterprisesRequest {
  /** Required. The token provided by the enterprise to register the EMM. */
  token: string;
  /** Request body */
  body?: Enterprise;
}

export const EnrollEnterprisesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.String.pipe(T.HttpQuery("token")),
    body: Schema.optional(Enterprise).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidenterprise/v1/enterprises/enroll",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<EnrollEnterprisesRequest>;

export type EnrollEnterprisesResponse = Enterprise;
export const EnrollEnterprisesResponse = /*@__PURE__*/ /*#__PURE__*/ Enterprise;

export type EnrollEnterprisesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Enrolls an enterprise with the calling EMM. */
export const enrollEnterprises: API.OperationMethod<
  EnrollEnterprisesRequest,
  EnrollEnterprisesResponse,
  EnrollEnterprisesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: EnrollEnterprisesRequest,
  output: EnrollEnterprisesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PullNotificationSetEnterprisesRequest {
  /** The request mode for pulling notifications. Specifying waitForNotifications will cause the request to block and wait until one or more notifications are present, or return an empty notification list if no notifications are present after some time. Specifying returnImmediately will cause the request to immediately return the pending notifications, or an empty list if no notifications are present. If omitted, defaults to waitForNotifications. */
  requestMode?: "waitForNotifications" | "returnImmediately" | (string & {});
}

export const PullNotificationSetEnterprisesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestMode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("requestMode"),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidenterprise/v1/enterprises/pullNotificationSet",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PullNotificationSetEnterprisesRequest>;

export type PullNotificationSetEnterprisesResponse = NotificationSet;
export const PullNotificationSetEnterprisesResponse =
  /*@__PURE__*/ /*#__PURE__*/ NotificationSet;

export type PullNotificationSetEnterprisesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Pulls and returns a notification set for the enterprises associated with the service account authenticated for the request. The notification set may be empty if no notification are pending. A notification set returned needs to be acknowledged within 20 seconds by calling Enterprises.AcknowledgeNotificationSet, unless the notification set is empty. Notifications that are not acknowledged within the 20 seconds will eventually be included again in the response to another PullNotificationSet request, and those that are never acknowledged will ultimately be deleted according to the Google Cloud Platform Pub/Sub system policy. Multiple requests might be performed concurrently to retrieve notifications, in which case the pending notifications (if any) will be split among each caller, if any are pending. If no notifications are present, an empty notification list is returned. Subsequent requests may return more notifications once they become available. */
export const pullNotificationSetEnterprises: API.OperationMethod<
  PullNotificationSetEnterprisesRequest,
  PullNotificationSetEnterprisesResponse,
  PullNotificationSetEnterprisesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PullNotificationSetEnterprisesRequest,
  output: PullNotificationSetEnterprisesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateWebTokenEnterprisesRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** Request body */
  body?: AdministratorWebTokenSpec;
}

export const CreateWebTokenEnterprisesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    body: Schema.optional(AdministratorWebTokenSpec).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/createWebToken",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateWebTokenEnterprisesRequest>;

export type CreateWebTokenEnterprisesResponse = AdministratorWebToken;
export const CreateWebTokenEnterprisesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AdministratorWebToken;

export type CreateWebTokenEnterprisesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns a unique token to access an embeddable UI. To generate a web UI, pass the generated token into the managed Google Play javascript API. Each token may only be used to start one UI session. See the JavaScript API documentation for further information. */
export const createWebTokenEnterprises: API.OperationMethod<
  CreateWebTokenEnterprisesRequest,
  CreateWebTokenEnterprisesResponse,
  CreateWebTokenEnterprisesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateWebTokenEnterprisesRequest,
  output: CreateWebTokenEnterprisesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CompleteSignupEnterprisesRequest {
  /** The Enterprise token appended to the Callback URL. */
  enterpriseToken?: string;
  /** The Completion token initially returned by GenerateSignupUrl. */
  completionToken?: string;
}

export const CompleteSignupEnterprisesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseToken: Schema.optional(Schema.String).pipe(
      T.HttpQuery("enterpriseToken"),
    ),
    completionToken: Schema.optional(Schema.String).pipe(
      T.HttpQuery("completionToken"),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidenterprise/v1/enterprises/completeSignup",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CompleteSignupEnterprisesRequest>;

export type CompleteSignupEnterprisesResponse = Enterprise;
export const CompleteSignupEnterprisesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Enterprise;

export type CompleteSignupEnterprisesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Completes the signup flow, by specifying the Completion token and Enterprise token. This request must not be called multiple times for a given Enterprise Token. */
export const completeSignupEnterprises: API.OperationMethod<
  CompleteSignupEnterprisesRequest,
  CompleteSignupEnterprisesResponse,
  CompleteSignupEnterprisesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CompleteSignupEnterprisesRequest,
  output: CompleteSignupEnterprisesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetStoreLayoutEnterprisesRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
}

export const GetStoreLayoutEnterprisesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/storeLayout",
    }),
    svc,
  ) as unknown as Schema.Schema<GetStoreLayoutEnterprisesRequest>;

export type GetStoreLayoutEnterprisesResponse = StoreLayout;
export const GetStoreLayoutEnterprisesResponse =
  /*@__PURE__*/ /*#__PURE__*/ StoreLayout;

export type GetStoreLayoutEnterprisesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the store layout for the enterprise. If the store layout has not been set, returns "basic" as the store layout type and no homepage. */
export const getStoreLayoutEnterprises: API.OperationMethod<
  GetStoreLayoutEnterprisesRequest,
  GetStoreLayoutEnterprisesResponse,
  GetStoreLayoutEnterprisesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetStoreLayoutEnterprisesRequest,
  output: GetStoreLayoutEnterprisesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GenerateSignupUrlEnterprisesRequest {
  /** The callback URL to which the Admin will be redirected after successfully creating an enterprise. Before redirecting there the system will add a single query parameter to this URL named "enterpriseToken" which will contain an opaque token to be used for the CompleteSignup request. Beware that this means that the URL will be parsed, the parameter added and then a new URL formatted, i.e. there may be some minor formatting changes and, more importantly, the URL must be well-formed so that it can be parsed. */
  callbackUrl?: string;
  /** Optional. A list of domains that are permitted for the admin email. The IT admin cannot enter an email address with a domain name that is not in this list. Subdomains of domains in this list are not allowed but can be allowed by adding a second entry which has `*.` prefixed to the domain name (e.g. *.example.com). If the field is not present or is an empty list then the IT admin is free to use any valid domain name. Personal email domains are always allowed, but will result in the creation of a managed Google Play Accounts enterprise. */
  allowedDomains?: string[];
  /** Optional. Email address used to prefill the admin field of the enterprise signup form. This value is a hint only and can be altered by the user. If `allowedDomains` is non-empty then this must belong to one of the `allowedDomains`. */
  adminEmail?: string;
}

export const GenerateSignupUrlEnterprisesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    callbackUrl: Schema.optional(Schema.String).pipe(
      T.HttpQuery("callbackUrl"),
    ),
    allowedDomains: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("allowedDomains"),
    ),
    adminEmail: Schema.optional(Schema.String).pipe(T.HttpQuery("adminEmail")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidenterprise/v1/enterprises/signupUrl",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateSignupUrlEnterprisesRequest>;

export type GenerateSignupUrlEnterprisesResponse = SignupInfo;
export const GenerateSignupUrlEnterprisesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SignupInfo;

export type GenerateSignupUrlEnterprisesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generates a sign-up URL. */
export const generateSignupUrlEnterprises: API.OperationMethod<
  GenerateSignupUrlEnterprisesRequest,
  GenerateSignupUrlEnterprisesResponse,
  GenerateSignupUrlEnterprisesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateSignupUrlEnterprisesRequest,
  output: GenerateSignupUrlEnterprisesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetServiceAccountEnterprisesRequest {
  /** The type of credential to return with the service account. Required. */
  keyType?: "googleCredentials" | "pkcs12" | (string & {});
  /** The ID of the enterprise. */
  enterpriseId: string;
}

export const GetServiceAccountEnterprisesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyType: Schema.optional(Schema.String).pipe(T.HttpQuery("keyType")),
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/serviceAccount",
    }),
    svc,
  ) as unknown as Schema.Schema<GetServiceAccountEnterprisesRequest>;

export type GetServiceAccountEnterprisesResponse = ServiceAccount;
export const GetServiceAccountEnterprisesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ServiceAccount;

export type GetServiceAccountEnterprisesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns a service account and credentials. The service account can be bound to the enterprise by calling setAccount. The service account is unique to this enterprise and EMM, and will be deleted if the enterprise is unbound. The credentials contain private key data and are not stored server-side. This method can only be called after calling Enterprises.Enroll or Enterprises.CompleteSignup, and before Enterprises.SetAccount; at other times it will return an error. Subsequent calls after the first will generate a new, unique set of credentials, and invalidate the previously generated credentials. Once the service account is bound to the enterprise, it can be managed using the serviceAccountKeys resource. *Note:* After you create a key, you might need to wait for 60 seconds or more before you perform another operation with the key. If you try to perform an operation with the key immediately after you create the key, and you receive an error, you can retry the request with exponential backoff . */
export const getServiceAccountEnterprises: API.OperationMethod<
  GetServiceAccountEnterprisesRequest,
  GetServiceAccountEnterprisesResponse,
  GetServiceAccountEnterprisesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetServiceAccountEnterprisesRequest,
  output: GetServiceAccountEnterprisesResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetStoreLayoutEnterprisesRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** Request body */
  body?: StoreLayout;
}

export const SetStoreLayoutEnterprisesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    body: Schema.optional(StoreLayout).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/storeLayout",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetStoreLayoutEnterprisesRequest>;

export type SetStoreLayoutEnterprisesResponse = StoreLayout;
export const SetStoreLayoutEnterprisesResponse =
  /*@__PURE__*/ /*#__PURE__*/ StoreLayout;

export type SetStoreLayoutEnterprisesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the store layout for the enterprise. By default, storeLayoutType is set to "basic" and the basic store layout is enabled. The basic layout only contains apps approved by the admin, and that have been added to the available product set for a user (using the setAvailableProductSet call). Apps on the page are sorted in order of their product ID value. If you create a custom store layout (by setting storeLayoutType = "custom" and setting a homepage), the basic store layout is disabled. */
export const setStoreLayoutEnterprises: API.OperationMethod<
  SetStoreLayoutEnterprisesRequest,
  SetStoreLayoutEnterprisesResponse,
  SetStoreLayoutEnterprisesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetStoreLayoutEnterprisesRequest,
  output: SetStoreLayoutEnterprisesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GenerateEnterpriseUpgradeUrlEnterprisesRequest {
  /** Required. The ID of the enterprise. */
  enterpriseId: string;
  /** Optional. Email address used to prefill the admin field of the enterprise signup form as part of the upgrade process. This value is a hint only and can be altered by the user. Personal email addresses are not allowed. If `allowedDomains` is non-empty then this must belong to one of the `allowedDomains`. */
  adminEmail?: string;
  /** Optional. A list of domains that are permitted for the admin email. The IT admin cannot enter an email address with a domain name that is not in this list. Subdomains of domains in this list are not allowed but can be allowed by adding a second entry which has `*.` prefixed to the domain name (e.g. *.example.com). If the field is not present or is an empty list then the IT admin is free to use any valid domain name. Personal email domains are not allowed. */
  allowedDomains?: string[];
}

export const GenerateEnterpriseUpgradeUrlEnterprisesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    adminEmail: Schema.optional(Schema.String).pipe(T.HttpQuery("adminEmail")),
    allowedDomains: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("allowedDomains"),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/generateEnterpriseUpgradeUrl",
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

/** Generates an enterprise upgrade URL to upgrade an existing managed Google Play Accounts enterprise to a managed Google domain. See the guide to upgrading an enterprise for more details. */
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

export interface ListEnterprisesRequest {
  /** Required. The exact primary domain name of the enterprise to look up. */
  domain: string;
}

export const ListEnterprisesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    domain: Schema.String.pipe(T.HttpQuery("domain")),
  },
).pipe(
  T.Http({ method: "GET", path: "androidenterprise/v1/enterprises" }),
  svc,
) as unknown as Schema.Schema<ListEnterprisesRequest>;

export type ListEnterprisesResponse = EnterprisesListResponse;
export const ListEnterprisesResponse =
  /*@__PURE__*/ /*#__PURE__*/ EnterprisesListResponse;

export type ListEnterprisesError = DefaultErrors | NotFound | Forbidden;

/** Looks up an enterprise by domain name. This is only supported for enterprises created via the Google-initiated creation flow. Lookup of the id is not needed for enterprises created via the EMM-initiated flow since the EMM learns the enterprise ID in the callback specified in the Enterprises.generateSignupUrl call. */
export const listEnterprises: API.OperationMethod<
  ListEnterprisesRequest,
  ListEnterprisesResponse,
  ListEnterprisesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListEnterprisesRequest,
  output: ListEnterprisesResponse,
  errors: [NotFound, Forbidden],
}));

export interface SendTestPushNotificationEnterprisesRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
}

export const SendTestPushNotificationEnterprisesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/sendTestPushNotification",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SendTestPushNotificationEnterprisesRequest>;

export type SendTestPushNotificationEnterprisesResponse =
  EnterprisesSendTestPushNotificationResponse;
export const SendTestPushNotificationEnterprisesResponse =
  /*@__PURE__*/ /*#__PURE__*/ EnterprisesSendTestPushNotificationResponse;

export type SendTestPushNotificationEnterprisesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sends a test notification to validate the EMM integration with the Google Cloud Pub/Sub service for this enterprise. */
export const sendTestPushNotificationEnterprises: API.OperationMethod<
  SendTestPushNotificationEnterprisesRequest,
  SendTestPushNotificationEnterprisesResponse,
  SendTestPushNotificationEnterprisesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SendTestPushNotificationEnterprisesRequest,
  output: SendTestPushNotificationEnterprisesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetAccountEnterprisesRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** Request body */
  body?: EnterpriseAccount;
}

export const SetAccountEnterprisesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    body: Schema.optional(EnterpriseAccount).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/account",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetAccountEnterprisesRequest>;

export type SetAccountEnterprisesResponse = EnterpriseAccount;
export const SetAccountEnterprisesResponse =
  /*@__PURE__*/ /*#__PURE__*/ EnterpriseAccount;

export type SetAccountEnterprisesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the account that will be used to authenticate to the API as the enterprise. */
export const setAccountEnterprises: API.OperationMethod<
  SetAccountEnterprisesRequest,
  SetAccountEnterprisesResponse,
  SetAccountEnterprisesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetAccountEnterprisesRequest,
  output: SetAccountEnterprisesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UnenrollEnterprisesRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
}

export const UnenrollEnterprisesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/unenroll",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UnenrollEnterprisesRequest>;

export interface UnenrollEnterprisesResponse {}
export const UnenrollEnterprisesResponse: Schema.Schema<UnenrollEnterprisesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<UnenrollEnterprisesResponse>;

export type UnenrollEnterprisesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Unenrolls an enterprise from the calling EMM. */
export const unenrollEnterprises: API.OperationMethod<
  UnenrollEnterprisesRequest,
  UnenrollEnterprisesResponse,
  UnenrollEnterprisesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UnenrollEnterprisesRequest,
  output: UnenrollEnterprisesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AcknowledgeNotificationSetEnterprisesRequest {
  /** The notification set ID as returned by Enterprises.PullNotificationSet. This must be provided. */
  notificationSetId?: string;
}

export const AcknowledgeNotificationSetEnterprisesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notificationSetId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("notificationSetId"),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidenterprise/v1/enterprises/acknowledgeNotificationSet",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AcknowledgeNotificationSetEnterprisesRequest>;

export interface AcknowledgeNotificationSetEnterprisesResponse {}
export const AcknowledgeNotificationSetEnterprisesResponse: Schema.Schema<AcknowledgeNotificationSetEnterprisesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<AcknowledgeNotificationSetEnterprisesResponse>;

export type AcknowledgeNotificationSetEnterprisesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Acknowledges notifications that were received from Enterprises.PullNotificationSet to prevent subsequent calls from returning the same notifications. */
export const acknowledgeNotificationSetEnterprises: API.OperationMethod<
  AcknowledgeNotificationSetEnterprisesRequest,
  AcknowledgeNotificationSetEnterprisesResponse,
  AcknowledgeNotificationSetEnterprisesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AcknowledgeNotificationSetEnterprisesRequest,
  output: AcknowledgeNotificationSetEnterprisesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetEntitlementsRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the user. */
  userId: string;
  /** The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm". */
  entitlementId: string;
}

export const GetEntitlementsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    userId: Schema.String.pipe(T.HttpPath("userId")),
    entitlementId: Schema.String.pipe(T.HttpPath("entitlementId")),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}",
  }),
  svc,
) as unknown as Schema.Schema<GetEntitlementsRequest>;

export type GetEntitlementsResponse = Entitlement;
export const GetEntitlementsResponse = /*@__PURE__*/ /*#__PURE__*/ Entitlement;

export type GetEntitlementsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves details of an entitlement. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. */
export const getEntitlements: API.OperationMethod<
  GetEntitlementsRequest,
  GetEntitlementsResponse,
  GetEntitlementsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetEntitlementsRequest,
  output: GetEntitlementsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateEntitlementsRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the user. */
  userId: string;
  /** The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm". */
  entitlementId: string;
  /** Set to true to also install the product on all the user's devices where possible. Failure to install on one or more devices will not prevent this operation from returning successfully, as long as the entitlement was successfully assigned to the user. */
  install?: boolean;
  /** Request body */
  body?: Entitlement;
}

export const UpdateEntitlementsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    userId: Schema.String.pipe(T.HttpPath("userId")),
    entitlementId: Schema.String.pipe(T.HttpPath("entitlementId")),
    install: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("install")),
    body: Schema.optional(Entitlement).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateEntitlementsRequest>;

export type UpdateEntitlementsResponse = Entitlement;
export const UpdateEntitlementsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Entitlement;

export type UpdateEntitlementsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds or updates an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. */
export const updateEntitlements: API.OperationMethod<
  UpdateEntitlementsRequest,
  UpdateEntitlementsResponse,
  UpdateEntitlementsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateEntitlementsRequest,
  output: UpdateEntitlementsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteEntitlementsRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the user. */
  userId: string;
  /** The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm". */
  entitlementId: string;
}

export const DeleteEntitlementsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    userId: Schema.String.pipe(T.HttpPath("userId")),
    entitlementId: Schema.String.pipe(T.HttpPath("entitlementId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteEntitlementsRequest>;

export interface DeleteEntitlementsResponse {}
export const DeleteEntitlementsResponse: Schema.Schema<DeleteEntitlementsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteEntitlementsResponse>;

export type DeleteEntitlementsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. */
export const deleteEntitlements: API.OperationMethod<
  DeleteEntitlementsRequest,
  DeleteEntitlementsResponse,
  DeleteEntitlementsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteEntitlementsRequest,
  output: DeleteEntitlementsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListEntitlementsRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the user. */
  userId: string;
}

export const ListEntitlementsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    userId: Schema.String.pipe(T.HttpPath("userId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements",
    }),
    svc,
  ) as unknown as Schema.Schema<ListEntitlementsRequest>;

export type ListEntitlementsResponse = EntitlementsListResponse;
export const ListEntitlementsResponse =
  /*@__PURE__*/ /*#__PURE__*/ EntitlementsListResponse;

export type ListEntitlementsError = DefaultErrors | NotFound | Forbidden;

/** Lists all entitlements for the specified user. Only the ID is set. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. */
export const listEntitlements: API.OperationMethod<
  ListEntitlementsRequest,
  ListEntitlementsResponse,
  ListEntitlementsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListEntitlementsRequest,
  output: ListEntitlementsResponse,
  errors: [NotFound, Forbidden],
}));

export interface InsertServiceaccountkeysRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** Request body */
  body?: ServiceAccountKey;
}

export const InsertServiceaccountkeysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    body: Schema.optional(ServiceAccountKey).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/serviceAccountKeys",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertServiceaccountkeysRequest>;

export type InsertServiceaccountkeysResponse = ServiceAccountKey;
export const InsertServiceaccountkeysResponse =
  /*@__PURE__*/ /*#__PURE__*/ ServiceAccountKey;

export type InsertServiceaccountkeysError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generates new credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount. Only the type of the key should be populated in the resource to be inserted. */
export const insertServiceaccountkeys: API.OperationMethod<
  InsertServiceaccountkeysRequest,
  InsertServiceaccountkeysResponse,
  InsertServiceaccountkeysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertServiceaccountkeysRequest,
  output: InsertServiceaccountkeysResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteServiceaccountkeysRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the key. */
  keyId: string;
}

export const DeleteServiceaccountkeysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    keyId: Schema.String.pipe(T.HttpPath("keyId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/serviceAccountKeys/{keyId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteServiceaccountkeysRequest>;

export interface DeleteServiceaccountkeysResponse {}
export const DeleteServiceaccountkeysResponse: Schema.Schema<DeleteServiceaccountkeysResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteServiceaccountkeysResponse>;

export type DeleteServiceaccountkeysError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes and invalidates the specified credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount. */
export const deleteServiceaccountkeys: API.OperationMethod<
  DeleteServiceaccountkeysRequest,
  DeleteServiceaccountkeysResponse,
  DeleteServiceaccountkeysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteServiceaccountkeysRequest,
  output: DeleteServiceaccountkeysResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListServiceaccountkeysRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
}

export const ListServiceaccountkeysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/serviceAccountKeys",
    }),
    svc,
  ) as unknown as Schema.Schema<ListServiceaccountkeysRequest>;

export type ListServiceaccountkeysResponse = ServiceAccountKeysListResponse;
export const ListServiceaccountkeysResponse =
  /*@__PURE__*/ /*#__PURE__*/ ServiceAccountKeysListResponse;

export type ListServiceaccountkeysError = DefaultErrors | NotFound | Forbidden;

/** Lists all active credentials for the service account associated with this enterprise. Only the ID and key type are returned. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount. */
export const listServiceaccountkeys: API.OperationMethod<
  ListServiceaccountkeysRequest,
  ListServiceaccountkeysResponse,
  ListServiceaccountkeysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListServiceaccountkeysRequest,
  output: ListServiceaccountkeysResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProductsRequest {
  /** The ID of the product, e.g. "app:com.google.android.gm". */
  productId: string;
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The BCP47 tag for the user's preferred language (e.g. "en-US", "de"). */
  language?: string;
}

export const GetProductsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  productId: Schema.String.pipe(T.HttpPath("productId")),
  enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
  language: Schema.optional(Schema.String).pipe(T.HttpQuery("language")),
}).pipe(
  T.Http({
    method: "GET",
    path: "androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}",
  }),
  svc,
) as unknown as Schema.Schema<GetProductsRequest>;

export type GetProductsResponse = Product;
export const GetProductsResponse = /*@__PURE__*/ /*#__PURE__*/ Product;

export type GetProductsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves details of a product for display to an enterprise admin. */
export const getProducts: API.OperationMethod<
  GetProductsRequest,
  GetProductsResponse,
  GetProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProductsRequest,
  output: GetProductsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetPermissionsProductsRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the product. */
  productId: string;
}

export const GetPermissionsProductsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/permissions",
    }),
    svc,
  ) as unknown as Schema.Schema<GetPermissionsProductsRequest>;

export type GetPermissionsProductsResponse = ProductPermissions;
export const GetPermissionsProductsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProductPermissions;

export type GetPermissionsProductsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves the Android app permissions required by this app. */
export const getPermissionsProducts: API.OperationMethod<
  GetPermissionsProductsRequest,
  GetPermissionsProductsResponse,
  GetPermissionsProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPermissionsProductsRequest,
  output: GetPermissionsProductsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ApproveProductsRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the product. */
  productId: string;
  /** Request body */
  body?: ProductsApproveRequest;
}

export const ApproveProductsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
    body: Schema.optional(ProductsApproveRequest).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/approve",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<ApproveProductsRequest>;

export interface ApproveProductsResponse {}
export const ApproveProductsResponse: Schema.Schema<ApproveProductsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<ApproveProductsResponse>;

export type ApproveProductsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Approves the specified product and the relevant app permissions, if any. The maximum number of products that you can approve per enterprise customer is 1,000. To learn how to use managed Google Play to design and create a store layout to display approved products to your users, see Store Layout Design. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. */
export const approveProducts: API.OperationMethod<
  ApproveProductsRequest,
  ApproveProductsResponse,
  ApproveProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ApproveProductsRequest,
  output: ApproveProductsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetAppRestrictionsSchemaProductsRequest {
  /** The ID of the product. */
  productId: string;
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The BCP47 tag for the user's preferred language (e.g. "en-US", "de"). */
  language?: string;
}

export const GetAppRestrictionsSchemaProductsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productId: Schema.String.pipe(T.HttpPath("productId")),
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    language: Schema.optional(Schema.String).pipe(T.HttpQuery("language")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/appRestrictionsSchema",
    }),
    svc,
  ) as unknown as Schema.Schema<GetAppRestrictionsSchemaProductsRequest>;

export type GetAppRestrictionsSchemaProductsResponse = AppRestrictionsSchema;
export const GetAppRestrictionsSchemaProductsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AppRestrictionsSchema;

export type GetAppRestrictionsSchemaProductsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves the schema that defines the configurable properties for this product. All products have a schema, but this schema may be empty if no managed configurations have been defined. This schema can be used to populate a UI that allows an admin to configure the product. To apply a managed configuration based on the schema obtained using this API, see Managed Configurations through Play. */
export const getAppRestrictionsSchemaProducts: API.OperationMethod<
  GetAppRestrictionsSchemaProductsRequest,
  GetAppRestrictionsSchemaProductsResponse,
  GetAppRestrictionsSchemaProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAppRestrictionsSchemaProductsRequest,
  output: GetAppRestrictionsSchemaProductsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProductsRequest {
  /** Specifies whether to search among all products (false) or among only products that have been approved (true). Only "true" is supported, and should be specified. */
  approved?: boolean;
  /** The search query as typed in the Google Play store search box. If omitted, all approved apps will be returned (using the pagination parameters), including apps that are not available in the store (e.g. unpublished apps). */
  query?: string;
  /** Defines the token of the page to return, usually taken from TokenPagination. This can only be used if token paging is enabled. */
  token?: string;
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The BCP47 tag for the user's preferred language (e.g. "en-US", "de"). Results are returned in the language best matching the preferred language. */
  language?: string;
  /** Defines how many results the list operation should return. The default number depends on the resource collection. */
  maxResults?: number;
}

export const ListProductsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  approved: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("approved")),
  query: Schema.optional(Schema.String).pipe(T.HttpQuery("query")),
  token: Schema.optional(Schema.String).pipe(T.HttpQuery("token")),
  enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
  language: Schema.optional(Schema.String).pipe(T.HttpQuery("language")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
}).pipe(
  T.Http({
    method: "GET",
    path: "androidenterprise/v1/enterprises/{enterpriseId}/products",
  }),
  svc,
) as unknown as Schema.Schema<ListProductsRequest>;

export type ListProductsResponse = ProductsListResponse;
export const ListProductsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProductsListResponse;

export type ListProductsError = DefaultErrors | NotFound | Forbidden;

/** Finds approved products that match a query, or all approved products if there is no query. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. */
export const listProducts: API.OperationMethod<
  ListProductsRequest,
  ListProductsResponse,
  ListProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProductsRequest,
  output: ListProductsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GenerateApprovalUrlProductsRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the product. */
  productId: string;
  /** The BCP 47 language code used for permission names and descriptions in the returned iframe, for instance "en-US". */
  languageCode?: string;
}

export const GenerateApprovalUrlProductsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/generateApprovalUrl",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateApprovalUrlProductsRequest>;

export type GenerateApprovalUrlProductsResponse =
  ProductsGenerateApprovalUrlResponse;
export const GenerateApprovalUrlProductsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProductsGenerateApprovalUrlResponse;

export type GenerateApprovalUrlProductsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generates a URL that can be rendered in an iframe to display the permissions (if any) of a product. An enterprise admin must view these permissions and accept them on behalf of their organization in order to approve that product. Admins should accept the displayed permissions by interacting with a separate UI element in the EMM console, which in turn should trigger the use of this URL as the approvalUrlInfo.approvalUrl property in a Products.approve call to approve the product. This URL can only be used to display permissions for up to 1 day. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. */
export const generateApprovalUrlProducts: API.OperationMethod<
  GenerateApprovalUrlProductsRequest,
  GenerateApprovalUrlProductsResponse,
  GenerateApprovalUrlProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateApprovalUrlProductsRequest,
  output: GenerateApprovalUrlProductsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UnapproveProductsRequest {
  /** The ID of the product. */
  productId: string;
  /** The ID of the enterprise. */
  enterpriseId: string;
}

export const UnapproveProductsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productId: Schema.String.pipe(T.HttpPath("productId")),
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/unapprove",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UnapproveProductsRequest>;

export interface UnapproveProductsResponse {}
export const UnapproveProductsResponse: Schema.Schema<UnapproveProductsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<UnapproveProductsResponse>;

export type UnapproveProductsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Unapproves the specified product (and the relevant app permissions, if any) **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. */
export const unapproveProducts: API.OperationMethod<
  UnapproveProductsRequest,
  UnapproveProductsResponse,
  UnapproveProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UnapproveProductsRequest,
  output: UnapproveProductsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InsertUsersRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** Request body */
  body?: User;
}

export const InsertUsersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
  body: Schema.optional(User).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "androidenterprise/v1/enterprises/{enterpriseId}/users",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<InsertUsersRequest>;

export type InsertUsersResponse = User;
export const InsertUsersResponse = /*@__PURE__*/ /*#__PURE__*/ User;

export type InsertUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new EMM-managed user. The Users resource passed in the body of the request should include an accountIdentifier and an accountType. If a corresponding user already exists with the same account identifier, the user will be updated with the resource. In this case only the displayName field can be changed. */
export const insertUsers: API.OperationMethod<
  InsertUsersRequest,
  InsertUsersResponse,
  InsertUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertUsersRequest,
  output: InsertUsersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateUsersRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the user. */
  userId: string;
  /** Request body */
  body?: User;
}

export const UpdateUsersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
  userId: Schema.String.pipe(T.HttpPath("userId")),
  body: Schema.optional(User).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PUT",
    path: "androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateUsersRequest>;

export type UpdateUsersResponse = User;
export const UpdateUsersResponse = /*@__PURE__*/ /*#__PURE__*/ User;

export type UpdateUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the details of an EMM-managed user. Can be used with EMM-managed users only (not Google managed users). Pass the new details in the Users resource in the request body. Only the displayName field can be changed. Other fields must either be unset or have the currently active value. */
export const updateUsers: API.OperationMethod<
  UpdateUsersRequest,
  UpdateUsersResponse,
  UpdateUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateUsersRequest,
  output: UpdateUsersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteUsersRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the user. */
  userId: string;
}

export const DeleteUsersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
  userId: Schema.String.pipe(T.HttpPath("userId")),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}",
  }),
  svc,
) as unknown as Schema.Schema<DeleteUsersRequest>;

export interface DeleteUsersResponse {}
export const DeleteUsersResponse: Schema.Schema<DeleteUsersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteUsersResponse>;

export type DeleteUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deleted an EMM-managed user. */
export const deleteUsers: API.OperationMethod<
  DeleteUsersRequest,
  DeleteUsersResponse,
  DeleteUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteUsersRequest,
  output: DeleteUsersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListUsersRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** Required. The exact primary email address of the user to look up. */
  email: string;
}

export const ListUsersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
  email: Schema.String.pipe(T.HttpQuery("email")),
}).pipe(
  T.Http({
    method: "GET",
    path: "androidenterprise/v1/enterprises/{enterpriseId}/users",
  }),
  svc,
) as unknown as Schema.Schema<ListUsersRequest>;

export type ListUsersResponse = UsersListResponse;
export const ListUsersResponse = /*@__PURE__*/ /*#__PURE__*/ UsersListResponse;

export type ListUsersError = DefaultErrors | NotFound | Forbidden;

/** Looks up a user by primary email address. This is only supported for Google-managed users. Lookup of the id is not needed for EMM-managed users because the id is already returned in the result of the Users.insert call. */
export const listUsers: API.OperationMethod<
  ListUsersRequest,
  ListUsersResponse,
  ListUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListUsersRequest,
  output: ListUsersResponse,
  errors: [NotFound, Forbidden],
}));

export interface GenerateAuthenticationTokenUsersRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the user. */
  userId: string;
}

export const GenerateAuthenticationTokenUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    userId: Schema.String.pipe(T.HttpPath("userId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/authenticationToken",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateAuthenticationTokenUsersRequest>;

export type GenerateAuthenticationTokenUsersResponse = AuthenticationToken;
export const GenerateAuthenticationTokenUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ AuthenticationToken;

export type GenerateAuthenticationTokenUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generates an authentication token which the device policy client can use to provision the given EMM-managed user account on a device. The generated token is single-use and expires after a few minutes. You can provision a maximum of 10 devices per user. This call only works with EMM-managed accounts. */
export const generateAuthenticationTokenUsers: API.OperationMethod<
  GenerateAuthenticationTokenUsersRequest,
  GenerateAuthenticationTokenUsersResponse,
  GenerateAuthenticationTokenUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateAuthenticationTokenUsersRequest,
  output: GenerateAuthenticationTokenUsersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetUsersRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the user. */
  userId: string;
}

export const GetUsersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
  userId: Schema.String.pipe(T.HttpPath("userId")),
}).pipe(
  T.Http({
    method: "GET",
    path: "androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}",
  }),
  svc,
) as unknown as Schema.Schema<GetUsersRequest>;

export type GetUsersResponse = User;
export const GetUsersResponse = /*@__PURE__*/ /*#__PURE__*/ User;

export type GetUsersError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a user's details. */
export const getUsers: API.OperationMethod<
  GetUsersRequest,
  GetUsersResponse,
  GetUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetUsersRequest,
  output: GetUsersResponse,
  errors: [NotFound, Forbidden],
}));

export interface RevokeDeviceAccessUsersRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the user. */
  userId: string;
}

export const RevokeDeviceAccessUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    userId: Schema.String.pipe(T.HttpPath("userId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/deviceAccess",
    }),
    svc,
  ) as unknown as Schema.Schema<RevokeDeviceAccessUsersRequest>;

export interface RevokeDeviceAccessUsersResponse {}
export const RevokeDeviceAccessUsersResponse: Schema.Schema<RevokeDeviceAccessUsersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<RevokeDeviceAccessUsersResponse>;

export type RevokeDeviceAccessUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Revokes access to all devices currently provisioned to the user. The user will no longer be able to use the managed Play store on any of their managed devices. This call only works with EMM-managed accounts. */
export const revokeDeviceAccessUsers: API.OperationMethod<
  RevokeDeviceAccessUsersRequest,
  RevokeDeviceAccessUsersResponse,
  RevokeDeviceAccessUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RevokeDeviceAccessUsersRequest,
  output: RevokeDeviceAccessUsersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetAvailableProductSetUsersRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the user. */
  userId: string;
  /** Request body */
  body?: ProductSet;
}

export const SetAvailableProductSetUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    userId: Schema.String.pipe(T.HttpPath("userId")),
    body: Schema.optional(ProductSet).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/availableProductSet",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetAvailableProductSetUsersRequest>;

export type SetAvailableProductSetUsersResponse = ProductSet;
export const SetAvailableProductSetUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProductSet;

export type SetAvailableProductSetUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Modifies the set of products that a user is entitled to access (referred to as *whitelisted* products). Only products that are approved or products that were previously approved (products with revoked approval) can be whitelisted. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. */
export const setAvailableProductSetUsers: API.OperationMethod<
  SetAvailableProductSetUsersRequest,
  SetAvailableProductSetUsersResponse,
  SetAvailableProductSetUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetAvailableProductSetUsersRequest,
  output: SetAvailableProductSetUsersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetAvailableProductSetUsersRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the user. */
  userId: string;
}

export const GetAvailableProductSetUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    userId: Schema.String.pipe(T.HttpPath("userId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/availableProductSet",
    }),
    svc,
  ) as unknown as Schema.Schema<GetAvailableProductSetUsersRequest>;

export type GetAvailableProductSetUsersResponse = ProductSet;
export const GetAvailableProductSetUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProductSet;

export type GetAvailableProductSetUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves the set of products a user is entitled to access. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. */
export const getAvailableProductSetUsers: API.OperationMethod<
  GetAvailableProductSetUsersRequest,
  GetAvailableProductSetUsersResponse,
  GetAvailableProductSetUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAvailableProductSetUsersRequest,
  output: GetAvailableProductSetUsersResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetGrouplicensesRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the product the group license is for, e.g. "app:com.google.android.gm". */
  groupLicenseId: string;
}

export const GetGrouplicensesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    groupLicenseId: Schema.String.pipe(T.HttpPath("groupLicenseId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses/{groupLicenseId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetGrouplicensesRequest>;

export type GetGrouplicensesResponse = GroupLicense;
export const GetGrouplicensesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GroupLicense;

export type GetGrouplicensesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves details of an enterprise's group license for a product. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. */
export const getGrouplicenses: API.OperationMethod<
  GetGrouplicensesRequest,
  GetGrouplicensesResponse,
  GetGrouplicensesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetGrouplicensesRequest,
  output: GetGrouplicensesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListGrouplicensesRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
}

export const ListGrouplicensesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses",
    }),
    svc,
  ) as unknown as Schema.Schema<ListGrouplicensesRequest>;

export type ListGrouplicensesResponse = GroupLicensesListResponse;
export const ListGrouplicensesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GroupLicensesListResponse;

export type ListGrouplicensesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves IDs of all products for which the enterprise has a group license. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. */
export const listGrouplicenses: API.OperationMethod<
  ListGrouplicensesRequest,
  ListGrouplicensesResponse,
  ListGrouplicensesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListGrouplicensesRequest,
  output: ListGrouplicensesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetStorelayoutpagesRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the page. */
  pageId: string;
}

export const GetStorelayoutpagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    pageId: Schema.String.pipe(T.HttpPath("pageId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetStorelayoutpagesRequest>;

export type GetStorelayoutpagesResponse = StorePage;
export const GetStorelayoutpagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ StorePage;

export type GetStorelayoutpagesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves details of a store page. */
export const getStorelayoutpages: API.OperationMethod<
  GetStorelayoutpagesRequest,
  GetStorelayoutpagesResponse,
  GetStorelayoutpagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetStorelayoutpagesRequest,
  output: GetStorelayoutpagesResponse,
  errors: [NotFound, Forbidden],
}));

export interface InsertStorelayoutpagesRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** Request body */
  body?: StorePage;
}

export const InsertStorelayoutpagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    body: Schema.optional(StorePage).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertStorelayoutpagesRequest>;

export type InsertStorelayoutpagesResponse = StorePage;
export const InsertStorelayoutpagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ StorePage;

export type InsertStorelayoutpagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new store page. */
export const insertStorelayoutpages: API.OperationMethod<
  InsertStorelayoutpagesRequest,
  InsertStorelayoutpagesResponse,
  InsertStorelayoutpagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertStorelayoutpagesRequest,
  output: InsertStorelayoutpagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateStorelayoutpagesRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the page. */
  pageId: string;
  /** Request body */
  body?: StorePage;
}

export const UpdateStorelayoutpagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    pageId: Schema.String.pipe(T.HttpPath("pageId")),
    body: Schema.optional(StorePage).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateStorelayoutpagesRequest>;

export type UpdateStorelayoutpagesResponse = StorePage;
export const UpdateStorelayoutpagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ StorePage;

export type UpdateStorelayoutpagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the content of a store page. */
export const updateStorelayoutpages: API.OperationMethod<
  UpdateStorelayoutpagesRequest,
  UpdateStorelayoutpagesResponse,
  UpdateStorelayoutpagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateStorelayoutpagesRequest,
  output: UpdateStorelayoutpagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteStorelayoutpagesRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
  /** The ID of the page. */
  pageId: string;
}

export const DeleteStorelayoutpagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
    pageId: Schema.String.pipe(T.HttpPath("pageId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteStorelayoutpagesRequest>;

export interface DeleteStorelayoutpagesResponse {}
export const DeleteStorelayoutpagesResponse: Schema.Schema<DeleteStorelayoutpagesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteStorelayoutpagesResponse>;

export type DeleteStorelayoutpagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a store page. */
export const deleteStorelayoutpages: API.OperationMethod<
  DeleteStorelayoutpagesRequest,
  DeleteStorelayoutpagesResponse,
  DeleteStorelayoutpagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteStorelayoutpagesRequest,
  output: DeleteStorelayoutpagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListStorelayoutpagesRequest {
  /** The ID of the enterprise. */
  enterpriseId: string;
}

export const ListStorelayoutpagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterpriseId: Schema.String.pipe(T.HttpPath("enterpriseId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages",
    }),
    svc,
  ) as unknown as Schema.Schema<ListStorelayoutpagesRequest>;

export type ListStorelayoutpagesResponse = StoreLayoutPagesListResponse;
export const ListStorelayoutpagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ StoreLayoutPagesListResponse;

export type ListStorelayoutpagesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves the details of all pages in the store. */
export const listStorelayoutpages: API.OperationMethod<
  ListStorelayoutpagesRequest,
  ListStorelayoutpagesResponse,
  ListStorelayoutpagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListStorelayoutpagesRequest,
  output: ListStorelayoutpagesResponse,
  errors: [NotFound, Forbidden],
}));
