// ==========================================================================
// Firebase Dynamic Links API (firebasedynamiclinks v1)
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
  name: "firebasedynamiclinks",
  version: "v1",
  rootUrl: "https://firebasedynamiclinks.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GetIosPostInstallAttributionResponse {
  /** Invitation ID attributed post-install via one of several techniques (device heuristics, copy unique). */
  invitationId?: string;
  /** The link to navigate to update the app if min version is not met. This is either (in order): 1) fallback link (from ?ifl= parameter, if specified by developer) or 2) AppStore URL (from ?isi= parameter, if specified), or 3) the payload link (from required link= parameter). */
  fallbackLink?: string;
  /** Scion campaign value to be propagated by iSDK to Scion at post-install. */
  utmCampaign?: string;
  /** Entire FDL (short or long) attributed post-install via one of several techniques (device heuristics, copy unique). */
  requestedLink?: string;
  /** Which IP version the request was made from. */
  requestIpVersion?: "UNKNOWN_IP_VERSION" | "IP_V4" | "IP_V6" | (string & {});
  /** User-agent specific custom-scheme URIs for iSDK to open. This will be set according to the user-agent tha the click was originally made in. There is no Safari-equivalent custom-scheme open URLs. ie: googlechrome://www.example.com ie: firefox://open-url?url=http://www.example.com ie: opera-http://example.com */
  externalBrowserDestinationLink?: string;
  /** Scion medium value to be propagated by iSDK to Scion at post-install. */
  utmMedium?: string;
  /** The confidence of the returned attribution. */
  attributionConfidence?:
    | "UNKNOWN_ATTRIBUTION_CONFIDENCE"
    | "WEAK"
    | "DEFAULT"
    | "UNIQUE"
    | (string & {});
  /** Scion term value to be propagated by iSDK to Scion at app-reopen. */
  utmTerm?: string;
  /** The deep-link attributed post-install via one of several techniques (device heuristics, copy unique). */
  deepLink?: string;
  /** Scion content value to be propagated by iSDK to Scion at app-reopen. */
  utmContent?: string;
  /** Describes why match failed, ie: "discarded due to low confidence". This message will be publicly visible. */
  matchMessage?: string;
  /** Instruction for iSDK to attemmpt to perform strong match. For instance, if browser does not support/allow cookie or outside of support browsers, this will be false. */
  isStrongMatchExecutable?: boolean;
  /** Scion source value to be propagated by iSDK to Scion at post-install. */
  utmSource?: string;
  /** The minimum version for app, specified by dev through ?imv= parameter. Return to iSDK to allow app to evaluate if current version meets this. */
  appMinimumVersion?: string;
  /** The entire FDL, expanded from a short link. It is the same as the requested_link, if it is long. Parameters from this should not be used directly (ie: server can default utm_[campaign|medium|source] to a value when requested_link lack them, server determine the best fallback_link when requested_link specifies >1 fallback links). */
  resolvedLink?: string;
}

export const GetIosPostInstallAttributionResponse: Schema.Schema<GetIosPostInstallAttributionResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    invitationId: Schema.optional(Schema.String),
    fallbackLink: Schema.optional(Schema.String),
    utmCampaign: Schema.optional(Schema.String),
    requestedLink: Schema.optional(Schema.String),
    requestIpVersion: Schema.optional(Schema.String),
    externalBrowserDestinationLink: Schema.optional(Schema.String),
    utmMedium: Schema.optional(Schema.String),
    attributionConfidence: Schema.optional(Schema.String),
    utmTerm: Schema.optional(Schema.String),
    deepLink: Schema.optional(Schema.String),
    utmContent: Schema.optional(Schema.String),
    matchMessage: Schema.optional(Schema.String),
    isStrongMatchExecutable: Schema.optional(Schema.Boolean),
    utmSource: Schema.optional(Schema.String),
    appMinimumVersion: Schema.optional(Schema.String),
    resolvedLink: Schema.optional(Schema.String),
  }).annotate({ identifier: "GetIosPostInstallAttributionResponse" });

export interface DesktopInfo {
  /** Link to open on desktop. */
  desktopFallbackLink?: string;
}

export const DesktopInfo: Schema.Schema<DesktopInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    desktopFallbackLink: Schema.optional(Schema.String),
  }).annotate({ identifier: "DesktopInfo" });

export interface AndroidInfo {
  /** If specified, this overrides the ‘link’ parameter on Android. */
  androidLink?: string;
  /** Link to open on Android if the app is not installed. */
  androidFallbackLink?: string;
  /** Android package name of the app. */
  androidPackageName?: string;
  /** Minimum version code for the Android app. If the installed app’s version code is lower, then the user is taken to the Play Store. */
  androidMinPackageVersionCode?: string;
}

export const AndroidInfo: Schema.Schema<AndroidInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    androidLink: Schema.optional(Schema.String),
    androidFallbackLink: Schema.optional(Schema.String),
    androidPackageName: Schema.optional(Schema.String),
    androidMinPackageVersionCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "AndroidInfo" });

export interface ITunesConnectAnalytics {
  /** Affiliate token used to create affiliate-coded links. */
  at?: string;
  /** Provider token that enables analytics for Dynamic Links from within iTunes Connect. */
  pt?: string;
  /** Campaign text that developers can optionally add to any link in order to track sales from a specific marketing campaign. */
  ct?: string;
  /** iTune media types, including music, podcasts, audiobooks and so on. */
  mt?: string;
}

export const ITunesConnectAnalytics: Schema.Schema<ITunesConnectAnalytics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    at: Schema.optional(Schema.String),
    pt: Schema.optional(Schema.String),
    ct: Schema.optional(Schema.String),
    mt: Schema.optional(Schema.String),
  }).annotate({ identifier: "ITunesConnectAnalytics" });

export interface GooglePlayAnalytics {
  /** Deprecated; FDL SDK does not process nor log it. */
  gclid?: string;
  /** Campaign term; used with paid search to supply the keywords for ads. */
  utmTerm?: string;
  /** Campaign source; used to identify a search engine, newsletter, or other source. */
  utmSource?: string;
  /** Campaign medium; used to identify a medium such as email or cost-per-click. */
  utmMedium?: string;
  /** Campaign name; used for keyword analysis to identify a specific product promotion or strategic campaign. */
  utmCampaign?: string;
  /** Campaign content; used for A/B testing and content-targeted ads to differentiate ads or links that point to the same URL. */
  utmContent?: string;
}

export const GooglePlayAnalytics: Schema.Schema<GooglePlayAnalytics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gclid: Schema.optional(Schema.String),
    utmTerm: Schema.optional(Schema.String),
    utmSource: Schema.optional(Schema.String),
    utmMedium: Schema.optional(Schema.String),
    utmCampaign: Schema.optional(Schema.String),
    utmContent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePlayAnalytics" });

export interface AnalyticsInfo {
  /** iTunes Connect App Analytics. */
  itunesConnectAnalytics?: ITunesConnectAnalytics;
  /** Google Play Campaign Measurements. */
  googlePlayAnalytics?: GooglePlayAnalytics;
}

export const AnalyticsInfo: Schema.Schema<AnalyticsInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    itunesConnectAnalytics: Schema.optional(ITunesConnectAnalytics),
    googlePlayAnalytics: Schema.optional(GooglePlayAnalytics),
  }).annotate({ identifier: "AnalyticsInfo" });

export interface DynamicLinkWarning {
  /** The warning message to help developers improve their requests. */
  warningMessage?: string;
  /** The warning code. */
  warningCode?:
    | "CODE_UNSPECIFIED"
    | "NOT_IN_PROJECT_ANDROID_PACKAGE_NAME"
    | "NOT_INTEGER_ANDROID_PACKAGE_MIN_VERSION"
    | "UNNECESSARY_ANDROID_PACKAGE_MIN_VERSION"
    | "NOT_URI_ANDROID_LINK"
    | "UNNECESSARY_ANDROID_LINK"
    | "NOT_URI_ANDROID_FALLBACK_LINK"
    | "BAD_URI_SCHEME_ANDROID_FALLBACK_LINK"
    | "NOT_IN_PROJECT_IOS_BUNDLE_ID"
    | "NOT_IN_PROJECT_IPAD_BUNDLE_ID"
    | "UNNECESSARY_IOS_URL_SCHEME"
    | "NOT_NUMERIC_IOS_APP_STORE_ID"
    | "UNNECESSARY_IOS_APP_STORE_ID"
    | "NOT_URI_IOS_FALLBACK_LINK"
    | "BAD_URI_SCHEME_IOS_FALLBACK_LINK"
    | "NOT_URI_IPAD_FALLBACK_LINK"
    | "BAD_URI_SCHEME_IPAD_FALLBACK_LINK"
    | "BAD_DEBUG_PARAM"
    | "BAD_AD_PARAM"
    | "DEPRECATED_PARAM"
    | "UNRECOGNIZED_PARAM"
    | "TOO_LONG_PARAM"
    | "NOT_URI_SOCIAL_IMAGE_LINK"
    | "BAD_URI_SCHEME_SOCIAL_IMAGE_LINK"
    | "NOT_URI_SOCIAL_URL"
    | "BAD_URI_SCHEME_SOCIAL_URL"
    | "LINK_LENGTH_TOO_LONG"
    | "LINK_WITH_FRAGMENTS"
    | "NOT_MATCHING_IOS_BUNDLE_ID_AND_STORE_ID"
    | "API_DEPRECATED"
    | (string & {});
  /** The document describing the warning, and helps resolve. */
  warningDocumentLink?: string;
}

export const DynamicLinkWarning: Schema.Schema<DynamicLinkWarning> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    warningMessage: Schema.optional(Schema.String),
    warningCode: Schema.optional(Schema.String),
    warningDocumentLink: Schema.optional(Schema.String),
  }).annotate({ identifier: "DynamicLinkWarning" });

export interface CreateShortDynamicLinkResponse {
  /** Preview link to show the link flow chart. (debug info.) */
  previewLink?: string;
  /** Short Dynamic Link value. e.g. https://abcd.app.goo.gl/wxyz */
  shortLink?: string;
  /** Information about potential warnings on link creation. */
  warning?: ReadonlyArray<DynamicLinkWarning>;
}

export const CreateShortDynamicLinkResponse: Schema.Schema<CreateShortDynamicLinkResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    previewLink: Schema.optional(Schema.String),
    shortLink: Schema.optional(Schema.String),
    warning: Schema.optional(Schema.Array(DynamicLinkWarning)),
  }).annotate({ identifier: "CreateShortDynamicLinkResponse" });

export interface NavigationInfo {
  /** If this option is on, FDL click will be forced to redirect rather than show an interstitial page. */
  enableForcedRedirect?: boolean;
}

export const NavigationInfo: Schema.Schema<NavigationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableForcedRedirect: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "NavigationInfo" });

export interface IosInfo {
  /** iOS App Store ID. */
  iosAppStoreId?: string;
  /** iOS bundle ID of the app. */
  iosBundleId?: string;
  /** If specified, this overrides the ios_fallback_link value on iPads. */
  iosIpadFallbackLink?: string;
  /** iOS minimum version. */
  iosMinimumVersion?: string;
  /** Custom (destination) scheme to use for iOS. By default, we’ll use the bundle ID as the custom scheme. Developer can override this behavior using this param. */
  iosCustomScheme?: string;
  /** Link to open on iOS if the app is not installed. */
  iosFallbackLink?: string;
  /** iPad bundle ID of the app. */
  iosIpadBundleId?: string;
}

export const IosInfo: Schema.Schema<IosInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    iosAppStoreId: Schema.optional(Schema.String),
    iosBundleId: Schema.optional(Schema.String),
    iosIpadFallbackLink: Schema.optional(Schema.String),
    iosMinimumVersion: Schema.optional(Schema.String),
    iosCustomScheme: Schema.optional(Schema.String),
    iosFallbackLink: Schema.optional(Schema.String),
    iosIpadBundleId: Schema.optional(Schema.String),
  }).annotate({ identifier: "IosInfo" });

export interface SocialMetaTagInfo {
  /** An image url string. Optional. */
  socialImageLink?: string;
  /** Title to be displayed. Optional. */
  socialTitle?: string;
  /** A short description of the link. Optional. */
  socialDescription?: string;
}

export const SocialMetaTagInfo: Schema.Schema<SocialMetaTagInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    socialImageLink: Schema.optional(Schema.String),
    socialTitle: Schema.optional(Schema.String),
    socialDescription: Schema.optional(Schema.String),
  }).annotate({ identifier: "SocialMetaTagInfo" });

export interface DynamicLinkInfo {
  /** Parameters used for tracking. See all tracking parameters in the [documentation](https://firebase.google.com/docs/dynamic-links/create-manually). */
  analyticsInfo?: AnalyticsInfo;
  /** Information of navigation behavior of a Firebase Dynamic Links. */
  navigationInfo?: NavigationInfo;
  /** Desktop related information. See desktop related parameters in the [documentation](https://firebase.google.com/docs/dynamic-links/create-manually). */
  desktopInfo?: DesktopInfo;
  /** iOS related information. See iOS related parameters in the [documentation](https://firebase.google.com/docs/dynamic-links/create-manually). */
  iosInfo?: IosInfo;
  /** E.g. https://maps.app.goo.gl, https://maps.page.link, https://g.co/maps More examples can be found in description of getNormalizedUriPrefix in j/c/g/firebase/dynamiclinks/uri/DdlDomain.java Will fallback to dynamic_link_domain is this field is missing */
  domainUriPrefix?: string;
  /** Dynamic Links domain that the project owns, e.g. abcd.app.goo.gl [Learn more](https://firebase.google.com/docs/dynamic-links/android/receive) on how to set up Dynamic Link domain associated with your Firebase project. Required if missing domain_uri_prefix. */
  dynamicLinkDomain?: string;
  /** The link your app will open, You can specify any URL your app can handle. This link must be a well-formatted URL, be properly URL-encoded, and use the HTTP or HTTPS scheme. See 'link' parameters in the [documentation](https://firebase.google.com/docs/dynamic-links/create-manually). Required. */
  link?: string;
  /** Android related information. See Android related parameters in the [documentation](https://firebase.google.com/docs/dynamic-links/create-manually). */
  androidInfo?: AndroidInfo;
  /** Parameters for social meta tag params. Used to set meta tag data for link previews on social sites. */
  socialMetaTagInfo?: SocialMetaTagInfo;
}

export const DynamicLinkInfo: Schema.Schema<DynamicLinkInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    analyticsInfo: Schema.optional(AnalyticsInfo),
    navigationInfo: Schema.optional(NavigationInfo),
    desktopInfo: Schema.optional(DesktopInfo),
    iosInfo: Schema.optional(IosInfo),
    domainUriPrefix: Schema.optional(Schema.String),
    dynamicLinkDomain: Schema.optional(Schema.String),
    link: Schema.optional(Schema.String),
    androidInfo: Schema.optional(AndroidInfo),
    socialMetaTagInfo: Schema.optional(SocialMetaTagInfo),
  }).annotate({ identifier: "DynamicLinkInfo" });

export interface ManagedShortLink {
  /** Attributes that have been flagged about this short url. */
  flaggedAttribute?: ReadonlyArray<
    "UNSPECIFIED_ATTRIBUTE" | "SPAM" | (string & {})
  >;
  /** Link name defined by the creator. Required. */
  linkName?: string;
  /** Full Dyamic Link info */
  info?: DynamicLinkInfo;
  /** Short durable link url, for example, "https://sample.app.goo.gl/xyz123". Required. */
  link?: string;
  /** Creation timestamp of the short link. */
  creationTime?: string;
  /** Visibility status of link. */
  visibility?:
    | "UNSPECIFIED_VISIBILITY"
    | "UNARCHIVED"
    | "ARCHIVED"
    | "NEVER_SHOWN"
    | (string & {});
}

export const ManagedShortLink: Schema.Schema<ManagedShortLink> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flaggedAttribute: Schema.optional(Schema.Array(Schema.String)),
    linkName: Schema.optional(Schema.String),
    info: Schema.optional(DynamicLinkInfo),
    link: Schema.optional(Schema.String),
    creationTime: Schema.optional(Schema.String),
    visibility: Schema.optional(Schema.String),
  }).annotate({ identifier: "ManagedShortLink" });

export interface CreateManagedShortLinkResponse {
  /** Short Dynamic Link value. e.g. https://abcd.app.goo.gl/wxyz */
  managedShortLink?: ManagedShortLink;
  /** Information about potential warnings on link creation. */
  warning?: ReadonlyArray<DynamicLinkWarning>;
  /** Preview link to show the link flow chart. (debug info.) */
  previewLink?: string;
}

export const CreateManagedShortLinkResponse: Schema.Schema<CreateManagedShortLinkResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    managedShortLink: Schema.optional(ManagedShortLink),
    warning: Schema.optional(Schema.Array(DynamicLinkWarning)),
    previewLink: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreateManagedShortLinkResponse" });

export interface DynamicLinkEventStat {
  /** The number of times this event occurred. */
  count?: string;
  /** Requested platform. */
  platform?:
    | "DYNAMIC_LINK_PLATFORM_UNSPECIFIED"
    | "ANDROID"
    | "IOS"
    | "DESKTOP"
    | "OTHER"
    | (string & {});
  /** Link event. */
  event?:
    | "DYNAMIC_LINK_EVENT_UNSPECIFIED"
    | "CLICK"
    | "REDIRECT"
    | "APP_INSTALL"
    | "APP_FIRST_OPEN"
    | "APP_RE_OPEN"
    | (string & {});
}

export const DynamicLinkEventStat: Schema.Schema<DynamicLinkEventStat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.String),
    platform: Schema.optional(Schema.String),
    event: Schema.optional(Schema.String),
  }).annotate({ identifier: "DynamicLinkEventStat" });

export interface DynamicLinkStats {
  /** Dynamic Link event stats. */
  linkEventStats?: ReadonlyArray<DynamicLinkEventStat>;
  /** Optional warnings associated this API request. */
  warnings?: ReadonlyArray<DynamicLinkWarning>;
}

export const DynamicLinkStats: Schema.Schema<DynamicLinkStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    linkEventStats: Schema.optional(Schema.Array(DynamicLinkEventStat)),
    warnings: Schema.optional(Schema.Array(DynamicLinkWarning)),
  }).annotate({ identifier: "DynamicLinkStats" });

export interface DeviceInfo {
  /** Device display resolution height. */
  screenResolutionHeight?: string;
  /** Device timezone setting. */
  timezone?: string;
  /** Device display resolution width. */
  screenResolutionWidth?: string;
  /** Device model name. */
  deviceModelName?: string;
  /** Device language code setting obtained by executing JavaScript code in WebView. */
  languageCodeFromWebview?: string;
  /** Device language code setting. */
  languageCode?: string;
  /** Device language code raw setting. iOS does returns language code in different format than iOS WebView. For example WebView returns en_US, but iOS returns en-US. Field below will return raw value returned by iOS. */
  languageCodeRaw?: string;
}

export const DeviceInfo: Schema.Schema<DeviceInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    screenResolutionHeight: Schema.optional(Schema.String),
    timezone: Schema.optional(Schema.String),
    screenResolutionWidth: Schema.optional(Schema.String),
    deviceModelName: Schema.optional(Schema.String),
    languageCodeFromWebview: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    languageCodeRaw: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeviceInfo" });

export interface GetIosPostInstallAttributionRequest {
  /** Device information. */
  device?: DeviceInfo;
  /** App installation epoch time (https://en.wikipedia.org/wiki/Unix_time). This is a client signal for a more accurate weak match. */
  appInstallationTime?: string;
  /** Google SDK version. Version takes the form "$major.$minor.$patch" */
  sdkVersion?: string;
  /** App post install attribution retrieval information. Disambiguates mechanism (iSDK or developer invoked) to retrieve payload from clicked link. */
  retrievalMethod?:
    | "UNKNOWN_PAYLOAD_RETRIEVAL_METHOD"
    | "IMPLICIT_WEAK_MATCH"
    | "EXPLICIT_WEAK_MATCH"
    | "EXPLICIT_STRONG_AFTER_WEAK_MATCH"
    | (string & {});
  /** Strong match page information. Disambiguates between default UI and custom page to present when strong match succeeds/fails to find cookie. */
  visualStyle?:
    | "UNKNOWN_VISUAL_STYLE"
    | "DEFAULT_STYLE"
    | "CUSTOM_STYLE"
    | (string & {});
  /** APP bundle ID. */
  bundleId?: string;
  /** iOS version, ie: 9.3.5. Consider adding "build". */
  iosVersion?: string;
  /** Possible unique matched link that server need to check before performing device heuristics match. If passed link is short server need to expand the link. If link is long server need to vslidate the link. */
  uniqueMatchLinkToCheck?: string;
}

export const GetIosPostInstallAttributionRequest: Schema.Schema<GetIosPostInstallAttributionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    device: Schema.optional(DeviceInfo),
    appInstallationTime: Schema.optional(Schema.String),
    sdkVersion: Schema.optional(Schema.String),
    retrievalMethod: Schema.optional(Schema.String),
    visualStyle: Schema.optional(Schema.String),
    bundleId: Schema.optional(Schema.String),
    iosVersion: Schema.optional(Schema.String),
    uniqueMatchLinkToCheck: Schema.optional(Schema.String),
  }).annotate({ identifier: "GetIosPostInstallAttributionRequest" });

export interface Suffix {
  /** Suffix option. */
  option?:
    | "OPTION_UNSPECIFIED"
    | "UNGUESSABLE"
    | "SHORT"
    | "CUSTOM"
    | (string & {});
  /** Only applies to Option.CUSTOM. */
  customSuffix?: string;
}

export const Suffix: Schema.Schema<Suffix> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    option: Schema.optional(Schema.String),
    customSuffix: Schema.optional(Schema.String),
  }).annotate({ identifier: "Suffix" });

export interface CreateManagedShortLinkRequest {
  /** Information about the Dynamic Link to be shortened. [Learn more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener). */
  dynamicLinkInfo?: DynamicLinkInfo;
  /** Short Dynamic Link suffix. Optional. */
  suffix?: Suffix;
  /** Google SDK version. Version takes the form "$major.$minor.$patch" */
  sdkVersion?: string;
  /** Full long Dynamic Link URL with desired query parameters specified. For example, "https://sample.app.goo.gl/?link=http://www.google.com&apn=com.sample", [Learn more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener). */
  longDynamicLink?: string;
  /** Link name to associate with the link. It's used for marketer to identify manually-created links in the Firebase console (https://console.firebase.google.com/). Links must be named to be tracked. */
  name?: string;
}

export const CreateManagedShortLinkRequest: Schema.Schema<CreateManagedShortLinkRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dynamicLinkInfo: Schema.optional(DynamicLinkInfo),
    suffix: Schema.optional(Suffix),
    sdkVersion: Schema.optional(Schema.String),
    longDynamicLink: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreateManagedShortLinkRequest" });

export interface GetIosReopenAttributionRequest {
  /** FDL link to be verified from an app universal link open. The FDL link can be one of: 1) short FDL. e.g. .page.link/, or 2) long FDL. e.g. .page.link/?{query params}, or 3) Invite FDL. e.g. .page.link/i/ */
  requestedLink?: string;
  /** APP bundle ID. */
  bundleId?: string;
  /** Google SDK version. Version takes the form "$major.$minor.$patch" */
  sdkVersion?: string;
}

export const GetIosReopenAttributionRequest: Schema.Schema<GetIosReopenAttributionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestedLink: Schema.optional(Schema.String),
    bundleId: Schema.optional(Schema.String),
    sdkVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "GetIosReopenAttributionRequest" });

export interface GetIosReopenAttributionResponse {
  /** Scion campaign value to be propagated by iSDK to Scion at app-reopen. */
  utmCampaign?: string;
  /** Scion content value to be propagated by iSDK to Scion at app-reopen. */
  utmContent?: string;
  /** Optional warnings associated this API request. */
  warning?: ReadonlyArray<DynamicLinkWarning>;
  /** Optional invitation ID, for only invite typed requested FDL links. */
  invitationId?: string;
  /** FDL input value of the "&imv=" parameter, minimum app version to be returned to Google Firebase SDK running on iOS-9. */
  iosMinAppVersion?: string;
  /** The deep-link attributed the app universal link open. For both regular FDL links and invite FDL links. */
  deepLink?: string;
  /** Scion medium value to be propagated by iSDK to Scion at app-reopen. */
  utmMedium?: string;
  /** Scion source value to be propagated by iSDK to Scion at app-reopen. */
  utmSource?: string;
  /** Scion term value to be propagated by iSDK to Scion at app-reopen. */
  utmTerm?: string;
  /** The entire FDL, expanded from a short link. It is the same as the requested_link, if it is long. */
  resolvedLink?: string;
}

export const GetIosReopenAttributionResponse: Schema.Schema<GetIosReopenAttributionResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    utmCampaign: Schema.optional(Schema.String),
    utmContent: Schema.optional(Schema.String),
    warning: Schema.optional(Schema.Array(DynamicLinkWarning)),
    invitationId: Schema.optional(Schema.String),
    iosMinAppVersion: Schema.optional(Schema.String),
    deepLink: Schema.optional(Schema.String),
    utmMedium: Schema.optional(Schema.String),
    utmSource: Schema.optional(Schema.String),
    utmTerm: Schema.optional(Schema.String),
    resolvedLink: Schema.optional(Schema.String),
  }).annotate({ identifier: "GetIosReopenAttributionResponse" });

export interface CreateShortDynamicLinkRequest {
  /** Short Dynamic Link suffix. Optional. */
  suffix?: Suffix;
  /** Full long Dynamic Link URL with desired query parameters specified. For example, "https://sample.app.goo.gl/?link=http://www.google.com&apn=com.sample", [Learn more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener). */
  longDynamicLink?: string;
  /** Information about the Dynamic Link to be shortened. [Learn more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener). */
  dynamicLinkInfo?: DynamicLinkInfo;
  /** Google SDK version. Version takes the form "$major.$minor.$patch" */
  sdkVersion?: string;
}

export const CreateShortDynamicLinkRequest: Schema.Schema<CreateShortDynamicLinkRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suffix: Schema.optional(Suffix),
    longDynamicLink: Schema.optional(Schema.String),
    dynamicLinkInfo: Schema.optional(DynamicLinkInfo),
    sdkVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreateShortDynamicLinkRequest" });

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

export interface CreateShortLinksRequest {
  /** Request body */
  body?: CreateShortDynamicLinkRequest;
}

export const CreateShortLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(CreateShortDynamicLinkRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/shortLinks", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateShortLinksRequest>;

export type CreateShortLinksResponse = CreateShortDynamicLinkResponse;
export const CreateShortLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreateShortDynamicLinkResponse;

export type CreateShortLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. Repeated calls with the same long Dynamic Link or Dynamic Link information will produce the same short Dynamic Link. The Dynamic Link domain in the request must be owned by requester's Firebase project. */
export const createShortLinks: API.OperationMethod<
  CreateShortLinksRequest,
  CreateShortLinksResponse,
  CreateShortLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateShortLinksRequest,
  output: CreateShortLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateManagedShortLinksRequest {
  /** Request body */
  body?: CreateManagedShortLinkRequest;
}

export const CreateManagedShortLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(CreateManagedShortLinkRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/managedShortLinks:create",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateManagedShortLinksRequest>;

export type CreateManagedShortLinksResponse = CreateManagedShortLinkResponse;
export const CreateManagedShortLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreateManagedShortLinkResponse;

export type CreateManagedShortLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a managed short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. This differs from CreateShortDynamicLink in the following ways: - The request will also contain a name for the link (non unique name for the front end). - The response must be authenticated with an auth token (generated with the admin service account). - The link will appear in the FDL list of links in the console front end. The Dynamic Link domain in the request must be owned by requester's Firebase project. */
export const createManagedShortLinks: API.OperationMethod<
  CreateManagedShortLinksRequest,
  CreateManagedShortLinksResponse,
  CreateManagedShortLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateManagedShortLinksRequest,
  output: CreateManagedShortLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetLinkStatsV1Request {
  /** Dynamic Link URL. e.g. https://abcd.app.goo.gl/wxyz */
  dynamicLink: string;
  /** The span of time requested in days. */
  durationDays?: string;
  /** Google SDK version. Version takes the form "$major.$minor.$patch" */
  sdkVersion?: string;
}

export const GetLinkStatsV1Request = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dynamicLink: Schema.String.pipe(T.HttpPath("dynamicLink")),
  durationDays: Schema.optional(Schema.String).pipe(
    T.HttpQuery("durationDays"),
  ),
  sdkVersion: Schema.optional(Schema.String).pipe(T.HttpQuery("sdkVersion")),
}).pipe(
  T.Http({ method: "GET", path: "v1/{dynamicLink}/linkStats" }),
  svc,
) as unknown as Schema.Schema<GetLinkStatsV1Request>;

export type GetLinkStatsV1Response = DynamicLinkStats;
export const GetLinkStatsV1Response =
  /*@__PURE__*/ /*#__PURE__*/ DynamicLinkStats;

export type GetLinkStatsV1Error = DefaultErrors | NotFound | Forbidden;

/** Fetches analytics stats of a short Dynamic Link for a given duration. Metrics include number of clicks, redirects, installs, app first opens, and app reopens. */
export const getLinkStatsV1: API.OperationMethod<
  GetLinkStatsV1Request,
  GetLinkStatsV1Response,
  GetLinkStatsV1Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetLinkStatsV1Request,
  output: GetLinkStatsV1Response,
  errors: [NotFound, Forbidden],
}));

export interface ReopenAttributionV1Request {
  /** Request body */
  body?: GetIosReopenAttributionRequest;
}

export const ReopenAttributionV1Request =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(GetIosReopenAttributionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/reopenAttribution", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ReopenAttributionV1Request>;

export type ReopenAttributionV1Response = GetIosReopenAttributionResponse;
export const ReopenAttributionV1Response =
  /*@__PURE__*/ /*#__PURE__*/ GetIosReopenAttributionResponse;

export type ReopenAttributionV1Error =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Get iOS reopen attribution for app universal link open deeplinking. */
export const reopenAttributionV1: API.OperationMethod<
  ReopenAttributionV1Request,
  ReopenAttributionV1Response,
  ReopenAttributionV1Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReopenAttributionV1Request,
  output: ReopenAttributionV1Response,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InstallAttributionV1Request {
  /** Request body */
  body?: GetIosPostInstallAttributionRequest;
}

export const InstallAttributionV1Request =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(GetIosPostInstallAttributionRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/installAttribution", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<InstallAttributionV1Request>;

export type InstallAttributionV1Response = GetIosPostInstallAttributionResponse;
export const InstallAttributionV1Response =
  /*@__PURE__*/ /*#__PURE__*/ GetIosPostInstallAttributionResponse;

export type InstallAttributionV1Error =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Get iOS strong/weak-match info for post-install attribution. */
export const installAttributionV1: API.OperationMethod<
  InstallAttributionV1Request,
  InstallAttributionV1Response,
  InstallAttributionV1Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InstallAttributionV1Request,
  output: InstallAttributionV1Response,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
