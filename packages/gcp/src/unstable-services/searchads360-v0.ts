// ==========================================================================
// Search Ads 360 Reporting API (searchads360 v0)
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
  name: "searchads360",
  version: "v0",
  rootUrl: "https://searchads360.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleAdsSearchads360V23Common_PolicyTopicEvidence_WebsiteList {
  /** Websites that caused the policy finding. */
  websites?: ReadonlyArray<string>;
}

export const GoogleAdsSearchads360V23Common_PolicyTopicEvidence_WebsiteList: Schema.Schema<GoogleAdsSearchads360V23Common_PolicyTopicEvidence_WebsiteList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    websites: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V23Common_PolicyTopicEvidence_WebsiteList",
  });

export interface GoogleAdsSearchads360V23Common_PolicyTopicEvidence_DestinationTextList {
  /** List of text found in the resource's destination page. */
  destinationTexts?: ReadonlyArray<string>;
}

export const GoogleAdsSearchads360V23Common_PolicyTopicEvidence_DestinationTextList: Schema.Schema<GoogleAdsSearchads360V23Common_PolicyTopicEvidence_DestinationTextList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destinationTexts: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V23Common_PolicyTopicEvidence_DestinationTextList",
  });

export interface GoogleAdsSearchads360V23Common_PolicyTopicEvidence_TextList {
  /** The fragments of text from the resource that caused the policy finding. */
  texts?: ReadonlyArray<string>;
}

export const GoogleAdsSearchads360V23Common_PolicyTopicEvidence_TextList: Schema.Schema<GoogleAdsSearchads360V23Common_PolicyTopicEvidence_TextList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    texts: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleAdsSearchads360V23Common_PolicyTopicEvidence_TextList",
  });

export interface GoogleAdsSearchads360V23Common_PolicyTopicEvidence_DestinationMismatch {
  /** The set of URLs that did not match each other. */
  urlTypes?: ReadonlyArray<
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "DISPLAY_URL"
    | "FINAL_URL"
    | "FINAL_MOBILE_URL"
    | "TRACKING_URL"
    | "MOBILE_TRACKING_URL"
    | (string & {})
  >;
}

export const GoogleAdsSearchads360V23Common_PolicyTopicEvidence_DestinationMismatch: Schema.Schema<GoogleAdsSearchads360V23Common_PolicyTopicEvidence_DestinationMismatch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    urlTypes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V23Common_PolicyTopicEvidence_DestinationMismatch",
  });

export interface GoogleAdsSearchads360V23Common_PolicyTopicEvidence_DestinationNotWorking {
  /** The full URL that didn't work. */
  expandedUrl?: string;
  /** The type of device that failed to load the URL. */
  device?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "DESKTOP"
    | "ANDROID"
    | "IOS"
    | (string & {});
  /** The time the URL was last checked. The format is "YYYY-MM-DD HH:MM:SS". Examples: "2018-03-05 09:15:00" or "2018-02-01 14:34:30" */
  lastCheckedDateTime?: string;
  /** The type of DNS error. */
  dnsErrorType?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "HOSTNAME_NOT_FOUND"
    | "GOOGLE_CRAWLER_DNS_ISSUE"
    | (string & {});
  /** The HTTP error code. */
  httpErrorCode?: string;
}

export const GoogleAdsSearchads360V23Common_PolicyTopicEvidence_DestinationNotWorking: Schema.Schema<GoogleAdsSearchads360V23Common_PolicyTopicEvidence_DestinationNotWorking> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expandedUrl: Schema.optional(Schema.String),
    device: Schema.optional(Schema.String),
    lastCheckedDateTime: Schema.optional(Schema.String),
    dnsErrorType: Schema.optional(Schema.String),
    httpErrorCode: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V23Common_PolicyTopicEvidence_DestinationNotWorking",
  });

export interface GoogleAdsSearchads360V23Common__PolicyTopicEvidence {
  /** List of websites linked with this resource. */
  websiteList?: GoogleAdsSearchads360V23Common_PolicyTopicEvidence_WebsiteList;
  /** The text in the destination of the resource that is causing a policy finding. */
  destinationTextList?: GoogleAdsSearchads360V23Common_PolicyTopicEvidence_DestinationTextList;
  /** List of evidence found in the text of a resource. */
  textList?: GoogleAdsSearchads360V23Common_PolicyTopicEvidence_TextList;
  /** The language the resource was detected to be written in. This is an IETF language tag such as "en-US". */
  languageCode?: string;
  /** Mismatch between the destinations of a resource's URLs. */
  destinationMismatch?: GoogleAdsSearchads360V23Common_PolicyTopicEvidence_DestinationMismatch;
  /** Details when the destination is returning an HTTP error code or isn't functional in all locations for commonly used devices. */
  destinationNotWorking?: GoogleAdsSearchads360V23Common_PolicyTopicEvidence_DestinationNotWorking;
}

export const GoogleAdsSearchads360V23Common__PolicyTopicEvidence: Schema.Schema<GoogleAdsSearchads360V23Common__PolicyTopicEvidence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    websiteList: Schema.optional(
      GoogleAdsSearchads360V23Common_PolicyTopicEvidence_WebsiteList,
    ),
    destinationTextList: Schema.optional(
      GoogleAdsSearchads360V23Common_PolicyTopicEvidence_DestinationTextList,
    ),
    textList: Schema.optional(
      GoogleAdsSearchads360V23Common_PolicyTopicEvidence_TextList,
    ),
    languageCode: Schema.optional(Schema.String),
    destinationMismatch: Schema.optional(
      GoogleAdsSearchads360V23Common_PolicyTopicEvidence_DestinationMismatch,
    ),
    destinationNotWorking: Schema.optional(
      GoogleAdsSearchads360V23Common_PolicyTopicEvidence_DestinationNotWorking,
    ),
  }).annotate({
    identifier: "GoogleAdsSearchads360V23Common__PolicyTopicEvidence",
  });

export interface GoogleAdsSearchads360V0Common__AssetInteractionTarget {
  /** The asset resource name. */
  asset?: string;
  /** Only used with CustomerAsset, CampaignAsset and AdGroupAsset metrics. Indicates whether the interaction metrics occurred on the asset itself or a different asset or ad unit. */
  interactionOnThisAsset?: boolean;
}

export const GoogleAdsSearchads360V0Common__AssetInteractionTarget: Schema.Schema<GoogleAdsSearchads360V0Common__AssetInteractionTarget> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    asset: Schema.optional(Schema.String),
    interactionOnThisAsset: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Common__AssetInteractionTarget",
  });

export interface GoogleAdsSearchads360V0Common__TextAsset {
  /** Text content of the text asset. */
  text?: string;
}

export const GoogleAdsSearchads360V0Common__TextAsset: Schema.Schema<GoogleAdsSearchads360V0Common__TextAsset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Common__TextAsset" });

export interface GoogleAdsSearchads360V0Common__CustomParameter {
  /** The key matching the parameter tag name. */
  key?: string;
  /** The value to be substituted. */
  value?: string;
}

export const GoogleAdsSearchads360V0Common__CustomParameter: Schema.Schema<GoogleAdsSearchads360V0Common__CustomParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Common__CustomParameter" });

export interface GoogleAdsSearchads360V0Common__UnifiedPageFeedAsset {
  /** The webpage that advertisers want to target. */
  pageUrl?: string;
  /** Labels used to group the page urls. */
  labels?: ReadonlyArray<string>;
}

export const GoogleAdsSearchads360V0Common__UnifiedPageFeedAsset: Schema.Schema<GoogleAdsSearchads360V0Common__UnifiedPageFeedAsset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageUrl: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Common__UnifiedPageFeedAsset",
  });

export interface GoogleAdsSearchads360V0Common__BusinessProfileLocation {
  /** Listing ID of this Business Profile location. This is synced from the linked Business Profile account. */
  listingId?: string;
  /** Advertiser specified label for the location on the Business Profile account. This is synced from the Business Profile account. */
  labels?: ReadonlyArray<string>;
  /** Business Profile store code of this location. This is synced from the Business Profile account. */
  storeCode?: string;
}

export const GoogleAdsSearchads360V0Common__BusinessProfileLocation: Schema.Schema<GoogleAdsSearchads360V0Common__BusinessProfileLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    listingId: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Array(Schema.String)),
    storeCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Common__BusinessProfileLocation",
  });

export interface GoogleAdsSearchads360V0Common__UnifiedLocationAsset {
  /** Place IDs uniquely identify a place in the Google Places database and on Google Maps. This field is unique for a given customer ID and asset type. See https://developers.google.com/places/web-service/place-id to learn more about Place ID. */
  placeId?: string;
  /** The list of business locations for the customer. This will only be returned if the Location Asset is syncing from the Business Profile account. It is possible to have multiple Business Profile listings under the same account that point to the same Place ID. */
  businessProfileLocations?: ReadonlyArray<GoogleAdsSearchads360V0Common__BusinessProfileLocation>;
  /** The type of location ownership. If the type is BUSINESS_OWNER, it will be served as a location extension. If the type is AFFILIATE, it will be served as an affiliate location. */
  locationOwnershipType?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "BUSINESS_OWNER"
    | "AFFILIATE"
    | (string & {});
}

export const GoogleAdsSearchads360V0Common__UnifiedLocationAsset: Schema.Schema<GoogleAdsSearchads360V0Common__UnifiedLocationAsset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    placeId: Schema.optional(Schema.String),
    businessProfileLocations: Schema.optional(
      Schema.Array(GoogleAdsSearchads360V0Common__BusinessProfileLocation),
    ),
    locationOwnershipType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Common__UnifiedLocationAsset",
  });

export interface GoogleAdsSearchads360V0Common__MobileAppAsset {
  /** Required. A string that uniquely identifies a mobile application. It should just contain the platform native id, like "com.android.ebay" for Android or "12345689" for iOS. */
  appId?: string;
  /** Required. The application store that distributes this specific app. */
  appStore?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "APPLE_APP_STORE"
    | "GOOGLE_APP_STORE"
    | (string & {});
}

export const GoogleAdsSearchads360V0Common__MobileAppAsset: Schema.Schema<GoogleAdsSearchads360V0Common__MobileAppAsset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appId: Schema.optional(Schema.String),
    appStore: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Common__MobileAppAsset" });

export interface GoogleAdsSearchads360V0Common__ImageDimension {
  /** Height of the image. */
  heightPixels?: string;
  /** Width of the image. */
  widthPixels?: string;
  /** A URL that returns the image with this height and width. */
  url?: string;
}

export const GoogleAdsSearchads360V0Common__ImageDimension: Schema.Schema<GoogleAdsSearchads360V0Common__ImageDimension> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    heightPixels: Schema.optional(Schema.String),
    widthPixels: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Common__ImageDimension" });

export interface GoogleAdsSearchads360V0Common__ImageAsset {
  /** Metadata for this image at its original size. */
  fullSize?: GoogleAdsSearchads360V0Common__ImageDimension;
  /** MIME type of the image asset. */
  mimeType?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "IMAGE_JPEG"
    | "IMAGE_GIF"
    | "IMAGE_PNG"
    | "FLASH"
    | "TEXT_HTML"
    | "PDF"
    | "MSWORD"
    | "MSEXCEL"
    | "RTF"
    | "AUDIO_WAV"
    | "AUDIO_MP3"
    | "HTML5_AD_ZIP"
    | (string & {});
  /** File size of the image asset in bytes. */
  fileSize?: string;
}

export const GoogleAdsSearchads360V0Common__ImageAsset: Schema.Schema<GoogleAdsSearchads360V0Common__ImageAsset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fullSize: Schema.optional(GoogleAdsSearchads360V0Common__ImageDimension),
    mimeType: Schema.optional(Schema.String),
    fileSize: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Common__ImageAsset" });

export interface GoogleAdsSearchads360V0Common__YoutubeVideoAsset {
  /** YouTube video id. This is the 11 character string value used in the YouTube video URL. */
  youtubeVideoId?: string;
  /** YouTube video title. */
  youtubeVideoTitle?: string;
}

export const GoogleAdsSearchads360V0Common__YoutubeVideoAsset: Schema.Schema<GoogleAdsSearchads360V0Common__YoutubeVideoAsset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    youtubeVideoId: Schema.optional(Schema.String),
    youtubeVideoTitle: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Common__YoutubeVideoAsset",
  });

export interface GoogleAdsSearchads360V0Common__AdScheduleInfo {
  /** Minutes after the start hour at which this schedule starts. This field is required for CREATE operations and is prohibited on UPDATE operations. */
  startMinute?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ZERO"
    | "FIFTEEN"
    | "THIRTY"
    | "FORTY_FIVE"
    | (string & {});
  /** Day of the week the schedule applies to. This field is required for CREATE operations and is prohibited on UPDATE operations. */
  dayOfWeek?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY"
    | (string & {});
  /** Ending hour in 24 hour time; 24 signifies end of the day. This field must be between 0 and 24, inclusive. This field is required for CREATE operations and is prohibited on UPDATE operations. */
  endHour?: number;
  /** Minutes after the end hour at which this schedule ends. The schedule is exclusive of the end minute. This field is required for CREATE operations and is prohibited on UPDATE operations. */
  endMinute?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ZERO"
    | "FIFTEEN"
    | "THIRTY"
    | "FORTY_FIVE"
    | (string & {});
  /** Starting hour in 24 hour time. This field must be between 0 and 23, inclusive. This field is required for CREATE operations and is prohibited on UPDATE operations. */
  startHour?: number;
}

export const GoogleAdsSearchads360V0Common__AdScheduleInfo: Schema.Schema<GoogleAdsSearchads360V0Common__AdScheduleInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startMinute: Schema.optional(Schema.String),
    dayOfWeek: Schema.optional(Schema.String),
    endHour: Schema.optional(Schema.Number),
    endMinute: Schema.optional(Schema.String),
    startHour: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Common__AdScheduleInfo" });

export interface GoogleAdsSearchads360V0Common__UnifiedCallAsset {
  /** Whether the call only shows the phone number without a link to the website. Applies to Microsoft Ads. */
  callOnly?: boolean;
  /** Output only. Indicates whether this CallAsset should use its own call conversion setting, follow the account level setting, or disable call conversion. */
  callConversionReportingState?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "DISABLED"
    | "USE_ACCOUNT_LEVEL_CALL_CONVERSION_ACTION"
    | "USE_RESOURCE_LEVEL_CALL_CONVERSION_ACTION"
    | (string & {});
  /** Whether the call should be enabled on call tracking. Applies to Microsoft Ads. */
  callTrackingEnabled?: boolean;
  /** Start date of when this asset is effective and can begin serving, in yyyy-MM-dd format. */
  startDate?: string;
  /** Whether to show the call extension in search user's time zone. Applies to Microsoft Ads. */
  useSearcherTimeZone?: boolean;
  /** List of non-overlapping schedules specifying all time intervals for which the asset may serve. There can be a maximum of 6 schedules per day, 42 in total. */
  adScheduleTargets?: ReadonlyArray<GoogleAdsSearchads360V0Common__AdScheduleInfo>;
  /** The advertiser's raw phone number. Examples: '1234567890', '(123)456-7890' */
  phoneNumber?: string;
  /** The conversion action to attribute a call conversion to. If not set, the default conversion action is used. This field only has effect if call_conversion_reporting_state is set to USE_RESOURCE_LEVEL_CALL_CONVERSION_ACTION. */
  callConversionAction?: string;
  /** Last date of when this asset is effective and still serving, in yyyy-MM-dd format. */
  endDate?: string;
  /** Two-letter country code of the phone number. Examples: 'US', 'us'. */
  countryCode?: string;
}

export const GoogleAdsSearchads360V0Common__UnifiedCallAsset: Schema.Schema<GoogleAdsSearchads360V0Common__UnifiedCallAsset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    callOnly: Schema.optional(Schema.Boolean),
    callConversionReportingState: Schema.optional(Schema.String),
    callTrackingEnabled: Schema.optional(Schema.Boolean),
    startDate: Schema.optional(Schema.String),
    useSearcherTimeZone: Schema.optional(Schema.Boolean),
    adScheduleTargets: Schema.optional(
      Schema.Array(GoogleAdsSearchads360V0Common__AdScheduleInfo),
    ),
    phoneNumber: Schema.optional(Schema.String),
    callConversionAction: Schema.optional(Schema.String),
    endDate: Schema.optional(Schema.String),
    countryCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Common__UnifiedCallAsset",
  });

export interface GoogleAdsSearchads360V0Common__CallToActionAsset {
  /** Call to action. */
  callToAction?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "LEARN_MORE"
    | "GET_QUOTE"
    | "APPLY_NOW"
    | "SIGN_UP"
    | "CONTACT_US"
    | "SUBSCRIBE"
    | "DOWNLOAD"
    | "BOOK_NOW"
    | "SHOP_NOW"
    | "BUY_NOW"
    | "DONATE_NOW"
    | "ORDER_NOW"
    | "PLAY_NOW"
    | "SEE_MORE"
    | "START_NOW"
    | "VISIT_SITE"
    | "WATCH_NOW"
    | (string & {});
}

export const GoogleAdsSearchads360V0Common__CallToActionAsset: Schema.Schema<GoogleAdsSearchads360V0Common__CallToActionAsset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    callToAction: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Common__CallToActionAsset",
  });

export interface GoogleAdsSearchads360V0Common__UnifiedCalloutAsset {
  /** Last date of when this asset is effective and still serving, in yyyy-MM-dd format. */
  endDate?: string;
  /** Start date of when this asset is effective and can begin serving, in yyyy-MM-dd format. */
  startDate?: string;
  /** Whether to show the asset in search user's time zone. Applies to Microsoft Ads. */
  useSearcherTimeZone?: boolean;
  /** The callout text. The length of this string should be between 1 and 25, inclusive. */
  calloutText?: string;
  /** List of non-overlapping schedules specifying all time intervals for which the asset may serve. There can be a maximum of 6 schedules per day, 42 in total. */
  adScheduleTargets?: ReadonlyArray<GoogleAdsSearchads360V0Common__AdScheduleInfo>;
}

export const GoogleAdsSearchads360V0Common__UnifiedCalloutAsset: Schema.Schema<GoogleAdsSearchads360V0Common__UnifiedCalloutAsset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endDate: Schema.optional(Schema.String),
    startDate: Schema.optional(Schema.String),
    useSearcherTimeZone: Schema.optional(Schema.Boolean),
    calloutText: Schema.optional(Schema.String),
    adScheduleTargets: Schema.optional(
      Schema.Array(GoogleAdsSearchads360V0Common__AdScheduleInfo),
    ),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Common__UnifiedCalloutAsset",
  });

export interface GoogleAdsSearchads360V0Common__UnifiedSitelinkAsset {
  /** URL display text for the sitelink. The length of this string should be between 1 and 25, inclusive. */
  linkText?: string;
  /** Whether the preference is for the sitelink asset to be displayed on mobile devices. Applies to Microsoft Ads. */
  mobilePreferred?: boolean;
  /** First line of the description for the sitelink. If set, the length should be between 1 and 35, inclusive, and description2 must also be set. */
  description1?: string;
  /** Second line of the description for the sitelink. If set, the length should be between 1 and 35, inclusive, and description1 must also be set. */
  description2?: string;
  /** Start date of when this asset is effective and can begin serving, in yyyy-MM-dd format. */
  startDate?: string;
  /** List of non-overlapping schedules specifying all time intervals for which the asset may serve. There can be a maximum of 6 schedules per day, 42 in total. */
  adScheduleTargets?: ReadonlyArray<GoogleAdsSearchads360V0Common__AdScheduleInfo>;
  /** Whether to show the sitelink asset in search user's time zone. Applies to Microsoft Ads. */
  useSearcherTimeZone?: boolean;
  /** Last date of when this asset is effective and still serving, in yyyy-MM-dd format. */
  endDate?: string;
  /** ID used for tracking clicks for the sitelink asset. This is a Yahoo! Japan only field. */
  trackingId?: string;
}

export const GoogleAdsSearchads360V0Common__UnifiedSitelinkAsset: Schema.Schema<GoogleAdsSearchads360V0Common__UnifiedSitelinkAsset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    linkText: Schema.optional(Schema.String),
    mobilePreferred: Schema.optional(Schema.Boolean),
    description1: Schema.optional(Schema.String),
    description2: Schema.optional(Schema.String),
    startDate: Schema.optional(Schema.String),
    adScheduleTargets: Schema.optional(
      Schema.Array(GoogleAdsSearchads360V0Common__AdScheduleInfo),
    ),
    useSearcherTimeZone: Schema.optional(Schema.Boolean),
    endDate: Schema.optional(Schema.String),
    trackingId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Common__UnifiedSitelinkAsset",
  });

export interface GoogleAdsSearchads360V0Resources__Asset {
  /** Output only. Type of the asset. */
  type?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "YOUTUBE_VIDEO"
    | "MEDIA_BUNDLE"
    | "IMAGE"
    | "TEXT"
    | "LEAD_FORM"
    | "BOOK_ON_GOOGLE"
    | "PROMOTION"
    | "CALLOUT"
    | "STRUCTURED_SNIPPET"
    | "SITELINK"
    | "PAGE_FEED"
    | "DYNAMIC_EDUCATION"
    | "MOBILE_APP"
    | "HOTEL_CALLOUT"
    | "CALL"
    | "PRICE"
    | "CALL_TO_ACTION"
    | "DYNAMIC_REAL_ESTATE"
    | "DYNAMIC_CUSTOM"
    | "DYNAMIC_HOTELS_AND_RENTALS"
    | "DYNAMIC_FLIGHTS"
    | "DISCOVERY_CAROUSEL_CARD"
    | "DYNAMIC_TRAVEL"
    | "DYNAMIC_LOCAL"
    | "DYNAMIC_JOBS"
    | "LOCATION"
    | "HOTEL_PROPERTY"
    | (string & {});
  /** Output only. The timestamp when this asset was created. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format. */
  creationTime?: string;
  /** URL template for constructing a tracking URL. */
  trackingUrlTemplate?: string;
  /** Output only. A text asset. */
  textAsset?: GoogleAdsSearchads360V0Common__TextAsset;
  /** A list of mappings to be used for substituting URL custom parameter tags in the tracking_url_template, final_urls, and/or final_mobile_urls. */
  urlCustomParameters?: ReadonlyArray<GoogleAdsSearchads360V0Common__CustomParameter>;
  /** Output only. A unified page feed asset. */
  pageFeedAsset?: GoogleAdsSearchads360V0Common__UnifiedPageFeedAsset;
  /** URL template for appending params to landing page URLs served with parallel tracking. */
  finalUrlSuffix?: string;
  /** A list of possible final mobile URLs after all cross domain redirects. */
  finalMobileUrls?: ReadonlyArray<string>;
  /** Output only. A unified location asset. */
  locationAsset?: GoogleAdsSearchads360V0Common__UnifiedLocationAsset;
  /** A mobile app asset. */
  mobileAppAsset?: GoogleAdsSearchads360V0Common__MobileAppAsset;
  /** Output only. The datetime when this asset was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format. */
  lastModifiedTime?: string;
  /** Immutable. The resource name of the asset. Asset resource names have the form: `customers/{customer_id}/assets/{asset_id}` */
  resourceName?: string;
  /** Output only. The Engine Status for an asset. */
  engineStatus?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "SERVING"
    | "SERVING_LIMITED"
    | "DISAPPROVED"
    | "DISABLED"
    | "REMOVED"
    | (string & {});
  /** Output only. An image asset. */
  imageAsset?: GoogleAdsSearchads360V0Common__ImageAsset;
  /** Immutable. A YouTube video asset. */
  youtubeVideoAsset?: GoogleAdsSearchads360V0Common__YoutubeVideoAsset;
  /** Output only. The ID of the asset. */
  id?: string;
  /** Optional name of the asset. */
  name?: string;
  /** A list of possible final URLs after all cross domain redirects. */
  finalUrls?: ReadonlyArray<string>;
  /** Output only. A unified call asset. */
  callAsset?: GoogleAdsSearchads360V0Common__UnifiedCallAsset;
  /** Immutable. A call to action asset. */
  callToActionAsset?: GoogleAdsSearchads360V0Common__CallToActionAsset;
  /** Output only. A unified callout asset. */
  calloutAsset?: GoogleAdsSearchads360V0Common__UnifiedCalloutAsset;
  /** Output only. The status of the asset. */
  status?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ENABLED"
    | "REMOVED"
    | "ARCHIVED"
    | "PENDING_SYSTEM_GENERATED"
    | (string & {});
  /** Output only. A unified sitelink asset. */
  sitelinkAsset?: GoogleAdsSearchads360V0Common__UnifiedSitelinkAsset;
}

export const GoogleAdsSearchads360V0Resources__Asset: Schema.Schema<GoogleAdsSearchads360V0Resources__Asset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    creationTime: Schema.optional(Schema.String),
    trackingUrlTemplate: Schema.optional(Schema.String),
    textAsset: Schema.optional(GoogleAdsSearchads360V0Common__TextAsset),
    urlCustomParameters: Schema.optional(
      Schema.Array(GoogleAdsSearchads360V0Common__CustomParameter),
    ),
    pageFeedAsset: Schema.optional(
      GoogleAdsSearchads360V0Common__UnifiedPageFeedAsset,
    ),
    finalUrlSuffix: Schema.optional(Schema.String),
    finalMobileUrls: Schema.optional(Schema.Array(Schema.String)),
    locationAsset: Schema.optional(
      GoogleAdsSearchads360V0Common__UnifiedLocationAsset,
    ),
    mobileAppAsset: Schema.optional(
      GoogleAdsSearchads360V0Common__MobileAppAsset,
    ),
    lastModifiedTime: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    engineStatus: Schema.optional(Schema.String),
    imageAsset: Schema.optional(GoogleAdsSearchads360V0Common__ImageAsset),
    youtubeVideoAsset: Schema.optional(
      GoogleAdsSearchads360V0Common__YoutubeVideoAsset,
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    finalUrls: Schema.optional(Schema.Array(Schema.String)),
    callAsset: Schema.optional(GoogleAdsSearchads360V0Common__UnifiedCallAsset),
    callToActionAsset: Schema.optional(
      GoogleAdsSearchads360V0Common__CallToActionAsset,
    ),
    calloutAsset: Schema.optional(
      GoogleAdsSearchads360V0Common__UnifiedCalloutAsset,
    ),
    status: Schema.optional(Schema.String),
    sitelinkAsset: Schema.optional(
      GoogleAdsSearchads360V0Common__UnifiedSitelinkAsset,
    ),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Resources__Asset" });

export interface GoogleAdsSearchads360V0Common__ManualCpm {}

export const GoogleAdsSearchads360V0Common__ManualCpm: Schema.Schema<GoogleAdsSearchads360V0Common__ManualCpm> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleAdsSearchads360V0Common__ManualCpm",
  });

export interface GoogleAdsSearchads360V0Common__FrequencyCapEntry {}

export const GoogleAdsSearchads360V0Common__FrequencyCapEntry: Schema.Schema<GoogleAdsSearchads360V0Common__FrequencyCapEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleAdsSearchads360V0Common__FrequencyCapEntry",
  });

export interface GoogleAdsSearchads360V23Errors__QuotaErrorDetails {
  /** The rate scope of the quota limit. */
  rateScope?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ACCOUNT"
    | "DEVELOPER"
    | (string & {});
  /** The high level description of the quota bucket. Examples are "Get requests for standard access" or "Requests per account". */
  rateName?: string;
  /** Backoff period that customers should wait before sending next request. */
  retryDelay?: string;
}

export const GoogleAdsSearchads360V23Errors__QuotaErrorDetails: Schema.Schema<GoogleAdsSearchads360V23Errors__QuotaErrorDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rateScope: Schema.optional(Schema.String),
    rateName: Schema.optional(Schema.String),
    retryDelay: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V23Errors__QuotaErrorDetails",
  });

export interface GoogleAdsSearchads360V0Resources__GeoTargetConstant {
  /** Output only. The fully qualified English name, consisting of the target's name and that of its parent and country. */
  canonicalName?: string;
  /** Output only. The ID of the geo target constant. */
  id?: string;
  /** Output only. Geo target constant English name. */
  name?: string;
  /** Output only. The ISO-3166-1 alpha-2 country code that is associated with the target. */
  countryCode?: string;
  /** Output only. The resource name of the geo target constant. Geo target constant resource names have the form: `geoTargetConstants/{geo_target_constant_id}` */
  resourceName?: string;
  /** Output only. The resource name of the parent geo target constant. Geo target constant resource names have the form: `geoTargetConstants/{parent_geo_target_constant_id}` */
  parentGeoTarget?: string;
  /** Output only. Geo target constant target type. */
  targetType?: string;
  /** Output only. Geo target constant status. */
  status?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ENABLED"
    | "REMOVAL_PLANNED"
    | (string & {});
}

export const GoogleAdsSearchads360V0Resources__GeoTargetConstant: Schema.Schema<GoogleAdsSearchads360V0Resources__GeoTargetConstant> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    canonicalName: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    countryCode: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    parentGeoTarget: Schema.optional(Schema.String),
    targetType: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__GeoTargetConstant",
  });

export interface GoogleAdsSearchads360V0Resources__Visit {
  /** Output only. The ID of the product clicked on. */
  productId?: string;
  /** Output only. The sales channel of the product that was clicked on: Online or Local. */
  productChannel?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ONLINE"
    | "LOCAL"
    | (string & {});
  /** Output only. Asset field type of the visit event. */
  assetFieldType?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "HEADLINE"
    | "DESCRIPTION"
    | "MANDATORY_AD_TEXT"
    | "MARKETING_IMAGE"
    | "MEDIA_BUNDLE"
    | "YOUTUBE_VIDEO"
    | "BOOK_ON_GOOGLE"
    | "LEAD_FORM"
    | "PROMOTION"
    | "CALLOUT"
    | "STRUCTURED_SNIPPET"
    | "SITELINK"
    | "MOBILE_APP"
    | "HOTEL_CALLOUT"
    | "CALL"
    | "PRICE"
    | "LONG_HEADLINE"
    | "BUSINESS_NAME"
    | "SQUARE_MARKETING_IMAGE"
    | "PORTRAIT_MARKETING_IMAGE"
    | "LOGO"
    | "LANDSCAPE_LOGO"
    | "VIDEO"
    | "CALL_TO_ACTION_SELECTION"
    | "AD_IMAGE"
    | "BUSINESS_LOGO"
    | "HOTEL_PROPERTY"
    | "DISCOVERY_CAROUSEL_CARD"
    | "LONG_DESCRIPTION"
    | "CALL_TO_ACTION"
    | (string & {});
  /** Output only. A unique string for each visit that is passed to the landing page as the click id URL parameter. */
  clickId?: string;
  /** Output only. The resource name of the visit. Visit resource names have the form: `customers/{customer_id}/visits/{ad_group_id}~{criterion_id}~{ds_visit_id}` */
  resourceName?: string;
  /** Output only. Search Ads 360 keyword ID. A value of 0 indicates that the keyword is unattributed. */
  criterionId?: string;
  /** Output only. The country (ISO-3166 format) registered for the inventory feed that contains the product clicked on. */
  productCountryCode?: string;
  /** Output only. ID of the asset which was interacted with during the visit event. */
  assetId?: string;
  /** Output only. The ID of the visit. */
  id?: string;
  /** Output only. Ad ID. A value of 0 indicates that the ad is unattributed. */
  adId?: string;
  /** Output only. The Search Ads 360 inventory account ID containing the product that was clicked on. Search Ads 360 generates this ID when you link an inventory account in Search Ads 360. */
  merchantId?: string;
  /** Output only. The store in the Local Inventory Ad that was clicked on. This should match the store IDs used in your local products feed. */
  productStoreId?: string;
  /** Output only. The language (ISO-639-1) that has been set for the Merchant Center feed containing data about the product. */
  productLanguageCode?: string;
  /** Output only. The timestamp of the visit event. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format. */
  visitDateTime?: string;
}

export const GoogleAdsSearchads360V0Resources__Visit: Schema.Schema<GoogleAdsSearchads360V0Resources__Visit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productId: Schema.optional(Schema.String),
    productChannel: Schema.optional(Schema.String),
    assetFieldType: Schema.optional(Schema.String),
    clickId: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    criterionId: Schema.optional(Schema.String),
    productCountryCode: Schema.optional(Schema.String),
    assetId: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    adId: Schema.optional(Schema.String),
    merchantId: Schema.optional(Schema.String),
    productStoreId: Schema.optional(Schema.String),
    productLanguageCode: Schema.optional(Schema.String),
    visitDateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Resources__Visit" });

export interface GoogleAdsSearchads360V0Common__AgeRangeInfo {
  /** Type of the age range. */
  type?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "AGE_RANGE_18_24"
    | "AGE_RANGE_25_34"
    | "AGE_RANGE_35_44"
    | "AGE_RANGE_45_54"
    | "AGE_RANGE_55_64"
    | "AGE_RANGE_65_UP"
    | "AGE_RANGE_UNDETERMINED"
    | (string & {});
}

export const GoogleAdsSearchads360V0Common__AgeRangeInfo: Schema.Schema<GoogleAdsSearchads360V0Common__AgeRangeInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Common__AgeRangeInfo" });

export interface GoogleAdsSearchads360V0Common__LanguageInfo {
  /** The language constant resource name. */
  languageConstant?: string;
}

export const GoogleAdsSearchads360V0Common__LanguageInfo: Schema.Schema<GoogleAdsSearchads360V0Common__LanguageInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageConstant: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Common__LanguageInfo" });

export interface GoogleAdsSearchads360V0Resources_ConversionAction_FloodlightSettings {
  /** Output only. String used to identify a Floodlight activity when reporting conversions. */
  activityTag?: string;
  /** Output only. String used to identify a Floodlight activity group when reporting conversions. */
  activityGroupTag?: string;
  /** Output only. ID of the Floodlight activity in DoubleClick Campaign Manager (DCM). */
  activityId?: string;
}

export const GoogleAdsSearchads360V0Resources_ConversionAction_FloodlightSettings: Schema.Schema<GoogleAdsSearchads360V0Resources_ConversionAction_FloodlightSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    activityTag: Schema.optional(Schema.String),
    activityGroupTag: Schema.optional(Schema.String),
    activityId: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Resources_ConversionAction_FloodlightSettings",
  });

export interface GoogleAdsSearchads360V23Common_PolicyTopicConstraint_CountryConstraint {
  /** Geo target constant resource name of the country in which serving is constrained. */
  countryCriterion?: string;
}

export const GoogleAdsSearchads360V23Common_PolicyTopicConstraint_CountryConstraint: Schema.Schema<GoogleAdsSearchads360V23Common_PolicyTopicConstraint_CountryConstraint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    countryCriterion: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V23Common_PolicyTopicConstraint_CountryConstraint",
  });

export interface GoogleAdsSearchads360V23Common_PolicyTopicConstraint_CountryConstraintList {
  /** Countries in which serving is restricted. */
  countries?: ReadonlyArray<GoogleAdsSearchads360V23Common_PolicyTopicConstraint_CountryConstraint>;
  /** Total number of countries targeted by the resource. */
  totalTargetedCountries?: number;
}

export const GoogleAdsSearchads360V23Common_PolicyTopicConstraint_CountryConstraintList: Schema.Schema<GoogleAdsSearchads360V23Common_PolicyTopicConstraint_CountryConstraintList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    countries: Schema.optional(
      Schema.Array(
        GoogleAdsSearchads360V23Common_PolicyTopicConstraint_CountryConstraint,
      ),
    ),
    totalTargetedCountries: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V23Common_PolicyTopicConstraint_CountryConstraintList",
  });

export interface GoogleAdsSearchads360V0Resources__DoubleClickCampaignManagerSetting {
  /** Output only. ID of the Campaign Manager advertiser associated with this customer. */
  advertiserId?: string;
  /** Output only. ID of the Campaign Manager network associated with this customer. */
  networkId?: string;
  /** Output only. Time zone of the Campaign Manager network associated with this customer in IANA Time Zone Database format, such as America/New_York. */
  timeZone?: string;
}

export const GoogleAdsSearchads360V0Resources__DoubleClickCampaignManagerSetting: Schema.Schema<GoogleAdsSearchads360V0Resources__DoubleClickCampaignManagerSetting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    advertiserId: Schema.optional(Schema.String),
    networkId: Schema.optional(Schema.String),
    timeZone: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Resources__DoubleClickCampaignManagerSetting",
  });

export interface GoogleAdsSearchads360V0Common__Value {
  /** A boolean. */
  booleanValue?: boolean;
  /** A float. */
  floatValue?: number;
  /** A string. */
  stringValue?: string;
  /** An int64. */
  int64Value?: string;
  /** A double. */
  doubleValue?: number;
}

export const GoogleAdsSearchads360V0Common__Value: Schema.Schema<GoogleAdsSearchads360V0Common__Value> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    booleanValue: Schema.optional(Schema.Boolean),
    floatValue: Schema.optional(Schema.Number),
    stringValue: Schema.optional(Schema.String),
    int64Value: Schema.optional(Schema.String),
    doubleValue: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Common__Value" });

export interface GoogleAdsSearchads360V0Resources__CustomerManagerLink {
  /** Output only. ID of the customer-manager link. This field is read only. */
  managerLinkId?: string;
  /** Status of the link between the customer and the manager. */
  status?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ACTIVE"
    | "INACTIVE"
    | "PENDING"
    | "REFUSED"
    | "CANCELED"
    | (string & {});
  /** Immutable. Name of the resource. CustomerManagerLink resource names have the form: `customers/{customer_id}/customerManagerLinks/{manager_customer_id}~{manager_link_id}` */
  resourceName?: string;
  /** Output only. The timestamp when the CustomerManagerLink was created. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format. */
  startTime?: string;
  /** Output only. The manager customer linked to the customer. */
  managerCustomer?: string;
}

export const GoogleAdsSearchads360V0Resources__CustomerManagerLink: Schema.Schema<GoogleAdsSearchads360V0Resources__CustomerManagerLink> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    managerLinkId: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    managerCustomer: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__CustomerManagerLink",
  });

export interface GoogleAdsSearchads360V0Resources__AdGroupAdLabel {
  /** Output only. The ID of the Customer which owns the label. */
  ownerCustomerId?: string;
  /** Immutable. The resource name of the ad group ad label. Ad group ad label resource names have the form: `customers/{owner_customer_id}/adGroupAdLabels/{ad_group_id}~{ad_id}~{label_id}` */
  resourceName?: string;
  /** Immutable. The label assigned to the ad group ad. */
  label?: string;
  /** Immutable. The ad group ad to which the label is attached. */
  adGroupAd?: string;
}

export const GoogleAdsSearchads360V0Resources__AdGroupAdLabel: Schema.Schema<GoogleAdsSearchads360V0Resources__AdGroupAdLabel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ownerCustomerId: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    label: Schema.optional(Schema.String),
    adGroupAd: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__AdGroupAdLabel",
  });

export interface GoogleAdsSearchads360V0Errors_ErrorLocation_FieldPathElement {
  /** The name of a field or a oneof */
  fieldName?: string;
  /** If field_name is a repeated field, this is the element that failed */
  index?: number;
}

export const GoogleAdsSearchads360V0Errors_ErrorLocation_FieldPathElement: Schema.Schema<GoogleAdsSearchads360V0Errors_ErrorLocation_FieldPathElement> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldName: Schema.optional(Schema.String),
    index: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Errors_ErrorLocation_FieldPathElement",
  });

export interface GoogleAdsSearchads360V0Errors__ErrorLocation {
  /** A field path that indicates which field was invalid in the request. */
  fieldPathElements?: ReadonlyArray<GoogleAdsSearchads360V0Errors_ErrorLocation_FieldPathElement>;
}

export const GoogleAdsSearchads360V0Errors__ErrorLocation: Schema.Schema<GoogleAdsSearchads360V0Errors__ErrorLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldPathElements: Schema.optional(
      Schema.Array(
        GoogleAdsSearchads360V0Errors_ErrorLocation_FieldPathElement,
      ),
    ),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Errors__ErrorLocation" });

export interface GoogleAdsSearchads360V0Errors__ErrorCode {
  /** An unexpected server-side error. */
  internalError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INTERNAL_ERROR"
    | "ERROR_CODE_NOT_PUBLISHED"
    | "TRANSIENT_ERROR"
    | "DEADLINE_EXCEEDED"
    | (string & {});
  /** The reasons for invalid parameter errors. */
  invalidParameterError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INVALID_CURRENCY_CODE"
    | (string & {});
  /** An error with the query */
  queryError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "QUERY_ERROR"
    | "BAD_ENUM_CONSTANT"
    | "BAD_ESCAPE_SEQUENCE"
    | "BAD_FIELD_NAME"
    | "BAD_LIMIT_VALUE"
    | "BAD_NUMBER"
    | "BAD_OPERATOR"
    | "BAD_PARAMETER_NAME"
    | "BAD_PARAMETER_VALUE"
    | "BAD_RESOURCE_TYPE_IN_FROM_CLAUSE"
    | "BAD_SYMBOL"
    | "BAD_VALUE"
    | "DATE_RANGE_TOO_WIDE"
    | "DATE_RANGE_TOO_NARROW"
    | "EXPECTED_AND"
    | "EXPECTED_BY"
    | "EXPECTED_DIMENSION_FIELD_IN_SELECT_CLAUSE"
    | "EXPECTED_FILTERS_ON_DATE_RANGE"
    | "EXPECTED_FROM"
    | "EXPECTED_LIST"
    | "EXPECTED_REFERENCED_FIELD_IN_SELECT_CLAUSE"
    | "EXPECTED_SELECT"
    | "EXPECTED_SINGLE_VALUE"
    | "EXPECTED_VALUE_WITH_BETWEEN_OPERATOR"
    | "INVALID_DATE_FORMAT"
    | "MISALIGNED_DATE_FOR_FILTER"
    | "INVALID_STRING_VALUE"
    | "INVALID_VALUE_WITH_BETWEEN_OPERATOR"
    | "INVALID_VALUE_WITH_DURING_OPERATOR"
    | "INVALID_VALUE_WITH_LIKE_OPERATOR"
    | "OPERATOR_FIELD_MISMATCH"
    | "PROHIBITED_EMPTY_LIST_IN_CONDITION"
    | "PROHIBITED_ENUM_CONSTANT"
    | "PROHIBITED_FIELD_COMBINATION_IN_SELECT_CLAUSE"
    | "PROHIBITED_FIELD_IN_ORDER_BY_CLAUSE"
    | "PROHIBITED_FIELD_IN_SELECT_CLAUSE"
    | "PROHIBITED_FIELD_IN_WHERE_CLAUSE"
    | "PROHIBITED_RESOURCE_TYPE_IN_FROM_CLAUSE"
    | "PROHIBITED_RESOURCE_TYPE_IN_SELECT_CLAUSE"
    | "PROHIBITED_RESOURCE_TYPE_IN_WHERE_CLAUSE"
    | "PROHIBITED_METRIC_IN_SELECT_OR_WHERE_CLAUSE"
    | "PROHIBITED_SEGMENT_IN_SELECT_OR_WHERE_CLAUSE"
    | "PROHIBITED_SEGMENT_WITH_METRIC_IN_SELECT_OR_WHERE_CLAUSE"
    | "LIMIT_VALUE_TOO_LOW"
    | "PROHIBITED_NEWLINE_IN_STRING"
    | "PROHIBITED_VALUE_COMBINATION_IN_LIST"
    | "PROHIBITED_VALUE_COMBINATION_WITH_BETWEEN_OPERATOR"
    | "STRING_NOT_TERMINATED"
    | "TOO_MANY_SEGMENTS"
    | "UNEXPECTED_END_OF_QUERY"
    | "UNEXPECTED_FROM_CLAUSE"
    | "UNRECOGNIZED_FIELD"
    | "UNEXPECTED_INPUT"
    | "REQUESTED_METRICS_FOR_MANAGER"
    | "FILTER_HAS_TOO_MANY_VALUES"
    | "REQUIRED_SEGMENT_FIELD_MISSING"
    | (string & {});
  /** An error encountered when trying to authorize a user. */
  authorizationError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "USER_PERMISSION_DENIED"
    | "PROJECT_DISABLED"
    | "AUTHORIZATION_ERROR"
    | "ACTION_NOT_PERMITTED"
    | "INCOMPLETE_SIGNUP"
    | "CUSTOMER_NOT_ENABLED"
    | "MISSING_TOS"
    | "INVALID_LOGIN_CUSTOMER_ID_SERVING_CUSTOMER_ID_COMBINATION"
    | "SERVICE_ACCESS_DENIED"
    | "ACCESS_DENIED_FOR_ACCOUNT_TYPE"
    | "METRIC_ACCESS_DENIED"
    | (string & {});
  /** The reasons for the date range error */
  dateRangeError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INVALID_DATE"
    | "START_DATE_AFTER_END_DATE"
    | "CANNOT_SET_DATE_TO_PAST"
    | "AFTER_MAXIMUM_ALLOWABLE_DATE"
    | "CANNOT_MODIFY_START_DATE_IF_ALREADY_STARTED"
    | (string & {});
  /** The reasons for the distinct error */
  distinctError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "DUPLICATE_ELEMENT"
    | "DUPLICATE_TYPE"
    | (string & {});
  /** The reasons for the conversion custom variable error */
  conversionCustomVariableError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "DUPLICATE_NAME"
    | "DUPLICATE_TAG"
    | "RESERVED_TAG"
    | "NOT_FOUND"
    | "NOT_AVAILABLE"
    | "INCOMPATIBLE_TYPE"
    | "INVALID_METRIC"
    | "EXCEEDS_CARDINALITY_LIMIT"
    | "INVALID_DIMENSION"
    | "INCOMPATIBLE_WITH_SELECTED_RESOURCE"
    | (string & {});
  /** An error with the amount of quota remaining. */
  quotaError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "RESOURCE_EXHAUSTED"
    | "RESOURCE_TEMPORARILY_EXHAUSTED"
    | (string & {});
  /** The reasons for the size limit error */
  sizeLimitError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "REQUEST_SIZE_LIMIT_EXCEEDED"
    | "RESPONSE_SIZE_LIMIT_EXCEEDED"
    | (string & {});
  /** Indicates failure to properly authenticate user. */
  authenticationError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "AUTHENTICATION_ERROR"
    | "CLIENT_CUSTOMER_ID_INVALID"
    | "CUSTOMER_NOT_FOUND"
    | "GOOGLE_ACCOUNT_DELETED"
    | "GOOGLE_ACCOUNT_COOKIE_INVALID"
    | "GOOGLE_ACCOUNT_AUTHENTICATION_FAILED"
    | "GOOGLE_ACCOUNT_USER_AND_ADS_USER_MISMATCH"
    | "LOGIN_COOKIE_REQUIRED"
    | "NOT_ADS_USER"
    | "OAUTH_TOKEN_INVALID"
    | "OAUTH_TOKEN_EXPIRED"
    | "OAUTH_TOKEN_DISABLED"
    | "OAUTH_TOKEN_REVOKED"
    | "OAUTH_TOKEN_HEADER_INVALID"
    | "LOGIN_COOKIE_INVALID"
    | "USER_ID_INVALID"
    | "TWO_STEP_VERIFICATION_NOT_ENROLLED"
    | "ADVANCED_PROTECTION_NOT_ENROLLED"
    | (string & {});
  /** An error caused by the request */
  requestError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "RESOURCE_NAME_MISSING"
    | "RESOURCE_NAME_MALFORMED"
    | "BAD_RESOURCE_ID"
    | "INVALID_PRODUCT_NAME"
    | "INVALID_CUSTOMER_ID"
    | "OPERATION_REQUIRED"
    | "RESOURCE_NOT_FOUND"
    | "INVALID_PAGE_TOKEN"
    | "EXPIRED_PAGE_TOKEN"
    | "INVALID_PAGE_SIZE"
    | "REQUIRED_FIELD_MISSING"
    | "IMMUTABLE_FIELD"
    | "TOO_MANY_MUTATE_OPERATIONS"
    | "CANNOT_BE_EXECUTED_BY_MANAGER_ACCOUNT"
    | "CANNOT_MODIFY_FOREIGN_FIELD"
    | "INVALID_ENUM_VALUE"
    | "LOGIN_CUSTOMER_ID_PARAMETER_MISSING"
    | "LOGIN_OR_LINKED_CUSTOMER_ID_PARAMETER_REQUIRED"
    | "VALIDATE_ONLY_REQUEST_HAS_PAGE_TOKEN"
    | "CANNOT_RETURN_SUMMARY_ROW_FOR_REQUEST_WITHOUT_METRICS"
    | "CANNOT_RETURN_SUMMARY_ROW_FOR_VALIDATE_ONLY_REQUESTS"
    | "INCONSISTENT_RETURN_SUMMARY_ROW_VALUE"
    | "TOTAL_RESULTS_COUNT_NOT_ORIGINALLY_REQUESTED"
    | "RPC_DEADLINE_TOO_SHORT"
    | "PRODUCT_NOT_SUPPORTED"
    | (string & {});
  /** The reasons for the date error */
  dateError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INVALID_FIELD_VALUES_IN_DATE"
    | "INVALID_FIELD_VALUES_IN_DATE_TIME"
    | "INVALID_STRING_DATE"
    | "INVALID_STRING_DATE_TIME_MICROS"
    | "INVALID_STRING_DATE_TIME_SECONDS"
    | "INVALID_STRING_DATE_TIME_SECONDS_WITH_OFFSET"
    | "EARLIER_THAN_MINIMUM_DATE"
    | "LATER_THAN_MAXIMUM_DATE"
    | "DATE_RANGE_MINIMUM_DATE_LATER_THAN_MAXIMUM_DATE"
    | "DATE_RANGE_MINIMUM_AND_MAXIMUM_DATES_BOTH_NULL"
    | (string & {});
  /** The reasons for the header error. */
  headerError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INVALID_USER_SELECTED_CUSTOMER_ID"
    | "INVALID_LOGIN_CUSTOMER_ID"
    | (string & {});
  /** The reasons for the custom column error */
  customColumnError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CUSTOM_COLUMN_NOT_FOUND"
    | "CUSTOM_COLUMN_NOT_AVAILABLE"
    | (string & {});
}

export const GoogleAdsSearchads360V0Errors__ErrorCode: Schema.Schema<GoogleAdsSearchads360V0Errors__ErrorCode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    internalError: Schema.optional(Schema.String),
    invalidParameterError: Schema.optional(Schema.String),
    queryError: Schema.optional(Schema.String),
    authorizationError: Schema.optional(Schema.String),
    dateRangeError: Schema.optional(Schema.String),
    distinctError: Schema.optional(Schema.String),
    conversionCustomVariableError: Schema.optional(Schema.String),
    quotaError: Schema.optional(Schema.String),
    sizeLimitError: Schema.optional(Schema.String),
    authenticationError: Schema.optional(Schema.String),
    requestError: Schema.optional(Schema.String),
    dateError: Schema.optional(Schema.String),
    headerError: Schema.optional(Schema.String),
    customColumnError: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Errors__ErrorCode" });

export interface GoogleAdsSearchads360V0Errors__QuotaErrorDetails {
  /** The rate scope of the quota limit. */
  rateScope?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ACCOUNT"
    | "DEVELOPER"
    | (string & {});
  /** The high level description of the quota bucket. Examples are "Get requests for standard access" or "Requests per account". */
  rateName?: string;
  /** Backoff period that customers should wait before sending next request. */
  retryDelay?: string;
}

export const GoogleAdsSearchads360V0Errors__QuotaErrorDetails: Schema.Schema<GoogleAdsSearchads360V0Errors__QuotaErrorDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rateScope: Schema.optional(Schema.String),
    rateName: Schema.optional(Schema.String),
    retryDelay: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Errors__QuotaErrorDetails",
  });

export interface GoogleAdsSearchads360V0Errors__ErrorDetails {
  /** Details on the quota error, including the scope (account or developer), the rate bucket name and the retry delay. */
  quotaErrorDetails?: GoogleAdsSearchads360V0Errors__QuotaErrorDetails;
  /** The error code that should have been returned, but wasn't. This is used when the error code is not published in the client specified version. */
  unpublishedErrorCode?: string;
}

export const GoogleAdsSearchads360V0Errors__ErrorDetails: Schema.Schema<GoogleAdsSearchads360V0Errors__ErrorDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    quotaErrorDetails: Schema.optional(
      GoogleAdsSearchads360V0Errors__QuotaErrorDetails,
    ),
    unpublishedErrorCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Errors__ErrorDetails" });

export interface GoogleAdsSearchads360V0Errors__SearchAds360Error {
  /** Describes the part of the request proto that caused the error. */
  location?: GoogleAdsSearchads360V0Errors__ErrorLocation;
  /** The value that triggered the error. */
  trigger?: GoogleAdsSearchads360V0Common__Value;
  /** An enum value that indicates which error occurred. */
  errorCode?: GoogleAdsSearchads360V0Errors__ErrorCode;
  /** A human-readable description of the error. */
  message?: string;
  /** Additional error details, which are returned by certain error codes. Most error codes do not include details. */
  details?: GoogleAdsSearchads360V0Errors__ErrorDetails;
}

export const GoogleAdsSearchads360V0Errors__SearchAds360Error: Schema.Schema<GoogleAdsSearchads360V0Errors__SearchAds360Error> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(GoogleAdsSearchads360V0Errors__ErrorLocation),
    trigger: Schema.optional(GoogleAdsSearchads360V0Common__Value),
    errorCode: Schema.optional(GoogleAdsSearchads360V0Errors__ErrorCode),
    message: Schema.optional(Schema.String),
    details: Schema.optional(GoogleAdsSearchads360V0Errors__ErrorDetails),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Errors__SearchAds360Error",
  });

export interface GoogleAdsSearchads360V23Errors__BudgetPerDayMinimumErrorDetails {
  /** The minimum value for the budget's amount field required by the campaign, in micros of the advertiser currency. Only set if this error is caused by the amount field value. */
  minimumBudgetAmountMicros?: string;
  /** The advertiser's currency, represented as a three-letter ISO 4217 currency code (such as "USD"). */
  currencyCode?: string;
  /** The budget total_amount value that was rejected as too low, in micros of the advertiser currency. Only set if this error is caused by the total_amount field value. */
  failedBudgetTotalAmountMicros?: string;
  /** The minimum value for the budget's total_amount field required by the campaign given its configured start and end time, in micros of the advertiser currency. Only set if this error is caused by the total_amount field value. */
  minimumBudgetTotalAmountMicros?: string;
  /** The minimum budget required by the campaign per day, in micros of the advertiser currency. Applies to both daily and custom budgets. */
  budgetPerDayMinimumMicros?: string;
  /** The budget amount value that was rejected as too low, in micros of the advertiser currency. Only set if this error is caused by the amount field value. */
  failedBudgetAmountMicros?: string;
}

export const GoogleAdsSearchads360V23Errors__BudgetPerDayMinimumErrorDetails: Schema.Schema<GoogleAdsSearchads360V23Errors__BudgetPerDayMinimumErrorDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minimumBudgetAmountMicros: Schema.optional(Schema.String),
    currencyCode: Schema.optional(Schema.String),
    failedBudgetTotalAmountMicros: Schema.optional(Schema.String),
    minimumBudgetTotalAmountMicros: Schema.optional(Schema.String),
    budgetPerDayMinimumMicros: Schema.optional(Schema.String),
    failedBudgetAmountMicros: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V23Errors__BudgetPerDayMinimumErrorDetails",
  });

export interface GoogleAdsSearchads360V23Common_PolicyTopicConstraint_ResellerConstraint {}

export const GoogleAdsSearchads360V23Common_PolicyTopicConstraint_ResellerConstraint: Schema.Schema<GoogleAdsSearchads360V23Common_PolicyTopicConstraint_ResellerConstraint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleAdsSearchads360V23Common_PolicyTopicConstraint_ResellerConstraint",
  });

export interface GoogleAdsSearchads360V23Common__PolicyTopicConstraint {
  /** Countries where a certificate is required for serving. */
  certificateMissingInCountryList?: GoogleAdsSearchads360V23Common_PolicyTopicConstraint_CountryConstraintList;
  /** Countries where the resource's domain is not covered by the certificates associated with it. */
  certificateDomainMismatchInCountryList?: GoogleAdsSearchads360V23Common_PolicyTopicConstraint_CountryConstraintList;
  /** Reseller constraint. */
  resellerConstraint?: GoogleAdsSearchads360V23Common_PolicyTopicConstraint_ResellerConstraint;
  /** Countries where the resource cannot serve. */
  countryConstraintList?: GoogleAdsSearchads360V23Common_PolicyTopicConstraint_CountryConstraintList;
}

export const GoogleAdsSearchads360V23Common__PolicyTopicConstraint: Schema.Schema<GoogleAdsSearchads360V23Common__PolicyTopicConstraint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificateMissingInCountryList: Schema.optional(
      GoogleAdsSearchads360V23Common_PolicyTopicConstraint_CountryConstraintList,
    ),
    certificateDomainMismatchInCountryList: Schema.optional(
      GoogleAdsSearchads360V23Common_PolicyTopicConstraint_CountryConstraintList,
    ),
    resellerConstraint: Schema.optional(
      GoogleAdsSearchads360V23Common_PolicyTopicConstraint_ResellerConstraint,
    ),
    countryConstraintList: Schema.optional(
      GoogleAdsSearchads360V23Common_PolicyTopicConstraint_CountryConstraintList,
    ),
  }).annotate({
    identifier: "GoogleAdsSearchads360V23Common__PolicyTopicConstraint",
  });

export interface GoogleAdsSearchads360V23Common__PolicyTopicEntry {
  /** Describes the negative or positive effect this policy will have on serving. */
  type?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "PROHIBITED"
    | "LIMITED"
    | "FULLY_LIMITED"
    | "DESCRIPTIVE"
    | "BROADENING"
    | "AREA_OF_INTEREST_ONLY"
    | (string & {});
  /** Indicates how serving of this resource may be affected (for example, not serving in a country). */
  constraints?: ReadonlyArray<GoogleAdsSearchads360V23Common__PolicyTopicConstraint>;
  /** Policy topic this finding refers to. For example, "ALCOHOL", "TRADEMARKS_IN_AD_TEXT", or "DESTINATION_NOT_WORKING". The set of possible policy topics is not fixed for a particular API version and may change at any time. */
  topic?: string;
  /** Additional information that explains policy finding (for example, the brand name for a trademark finding). */
  evidences?: ReadonlyArray<GoogleAdsSearchads360V23Common__PolicyTopicEvidence>;
}

export const GoogleAdsSearchads360V23Common__PolicyTopicEntry: Schema.Schema<GoogleAdsSearchads360V23Common__PolicyTopicEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    constraints: Schema.optional(
      Schema.Array(GoogleAdsSearchads360V23Common__PolicyTopicConstraint),
    ),
    topic: Schema.optional(Schema.String),
    evidences: Schema.optional(
      Schema.Array(GoogleAdsSearchads360V23Common__PolicyTopicEvidence),
    ),
  }).annotate({
    identifier: "GoogleAdsSearchads360V23Common__PolicyTopicEntry",
  });

export interface GoogleAdsSearchads360V23Errors__PolicyFindingDetails {
  /** The list of policy topics for the resource. Contains the PROHIBITED or FULLY_LIMITED policy topic entries that prevented the resource from being saved (among any other entries the resource may also have). */
  policyTopicEntries?: ReadonlyArray<GoogleAdsSearchads360V23Common__PolicyTopicEntry>;
}

export const GoogleAdsSearchads360V23Errors__PolicyFindingDetails: Schema.Schema<GoogleAdsSearchads360V23Errors__PolicyFindingDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policyTopicEntries: Schema.optional(
      Schema.Array(GoogleAdsSearchads360V23Common__PolicyTopicEntry),
    ),
  }).annotate({
    identifier: "GoogleAdsSearchads360V23Errors__PolicyFindingDetails",
  });

export interface GoogleAdsSearchads360V23Common__PolicyViolationKey {
  /** Unique ID of the violated policy. */
  policyName?: string;
  /** The text that violates the policy if specified. Otherwise, refers to the policy in general (for example, when requesting to be exempt from the whole policy). If not specified for criterion exemptions, the whole policy is implied. Must be specified for ad exemptions. */
  violatingText?: string;
}

export const GoogleAdsSearchads360V23Common__PolicyViolationKey: Schema.Schema<GoogleAdsSearchads360V23Common__PolicyViolationKey> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policyName: Schema.optional(Schema.String),
    violatingText: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V23Common__PolicyViolationKey",
  });

export interface GoogleAdsSearchads360V23Errors__PolicyViolationDetails {
  /** Human readable name of the policy. */
  externalPolicyName?: string;
  /** Human readable description of policy violation. */
  externalPolicyDescription?: string;
  /** Unique identifier for this violation. If policy is exemptible, this key may be used to request exemption. */
  key?: GoogleAdsSearchads360V23Common__PolicyViolationKey;
  /** Whether user can file an exemption request for this violation. */
  isExemptible?: boolean;
}

export const GoogleAdsSearchads360V23Errors__PolicyViolationDetails: Schema.Schema<GoogleAdsSearchads360V23Errors__PolicyViolationDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    externalPolicyName: Schema.optional(Schema.String),
    externalPolicyDescription: Schema.optional(Schema.String),
    key: Schema.optional(GoogleAdsSearchads360V23Common__PolicyViolationKey),
    isExemptible: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleAdsSearchads360V23Errors__PolicyViolationDetails",
  });

export interface GoogleAdsSearchads360V23Errors__ResourceCountDetails {
  /** The count of existing entities. */
  existingCount?: number;
  /** The ID of the resource whose limit was exceeded. External customer ID if the limit is for a customer. */
  enclosingId?: string;
  /** The name of the resource ( etc.) whose limit was exceeded. */
  enclosingResource?: string;
  /** The limit which was exceeded. */
  limit?: number;
  /** The resource limit type which was exceeded. */
  limitType?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CAMPAIGNS_PER_CUSTOMER"
    | "BASE_CAMPAIGNS_PER_CUSTOMER"
    | "EXPERIMENT_CAMPAIGNS_PER_CUSTOMER"
    | "HOTEL_CAMPAIGNS_PER_CUSTOMER"
    | "SMART_SHOPPING_CAMPAIGNS_PER_CUSTOMER"
    | "AD_GROUPS_PER_CAMPAIGN"
    | "AD_GROUPS_PER_SHOPPING_CAMPAIGN"
    | "AD_GROUPS_PER_HOTEL_CAMPAIGN"
    | "REPORTING_AD_GROUPS_PER_LOCAL_CAMPAIGN"
    | "REPORTING_AD_GROUPS_PER_APP_CAMPAIGN"
    | "MANAGED_AD_GROUPS_PER_SMART_CAMPAIGN"
    | "AD_GROUP_CRITERIA_PER_CUSTOMER"
    | "BASE_AD_GROUP_CRITERIA_PER_CUSTOMER"
    | "EXPERIMENT_AD_GROUP_CRITERIA_PER_CUSTOMER"
    | "AD_GROUP_CRITERIA_PER_CAMPAIGN"
    | "CAMPAIGN_CRITERIA_PER_CUSTOMER"
    | "BASE_CAMPAIGN_CRITERIA_PER_CUSTOMER"
    | "EXPERIMENT_CAMPAIGN_CRITERIA_PER_CUSTOMER"
    | "WEBPAGE_CRITERIA_PER_CUSTOMER"
    | "BASE_WEBPAGE_CRITERIA_PER_CUSTOMER"
    | "EXPERIMENT_WEBPAGE_CRITERIA_PER_CUSTOMER"
    | "COMBINED_AUDIENCE_CRITERIA_PER_AD_GROUP"
    | "CUSTOMER_NEGATIVE_PLACEMENT_CRITERIA_PER_CUSTOMER"
    | "CUSTOMER_NEGATIVE_YOUTUBE_CHANNEL_CRITERIA_PER_CUSTOMER"
    | "CRITERIA_PER_AD_GROUP"
    | "LISTING_GROUPS_PER_AD_GROUP"
    | "EXPLICITLY_SHARED_BUDGETS_PER_CUSTOMER"
    | "IMPLICITLY_SHARED_BUDGETS_PER_CUSTOMER"
    | "COMBINED_AUDIENCE_CRITERIA_PER_CAMPAIGN"
    | "NEGATIVE_KEYWORDS_PER_CAMPAIGN"
    | "NEGATIVE_PLACEMENTS_PER_CAMPAIGN"
    | "GEO_TARGETS_PER_CAMPAIGN"
    | "NEGATIVE_IP_BLOCKS_PER_CAMPAIGN"
    | "PROXIMITIES_PER_CAMPAIGN"
    | "LISTING_SCOPES_PER_SHOPPING_CAMPAIGN"
    | "LISTING_SCOPES_PER_NON_SHOPPING_CAMPAIGN"
    | "NEGATIVE_KEYWORDS_PER_SHARED_SET"
    | "NEGATIVE_PLACEMENTS_PER_SHARED_SET"
    | "SHARED_SETS_PER_CUSTOMER_FOR_TYPE_DEFAULT"
    | "SHARED_SETS_PER_CUSTOMER_FOR_NEGATIVE_PLACEMENT_LIST_LOWER"
    | "HOTEL_ADVANCE_BOOKING_WINDOW_BID_MODIFIERS_PER_AD_GROUP"
    | "BIDDING_STRATEGIES_PER_CUSTOMER"
    | "BASIC_USER_LISTS_PER_CUSTOMER"
    | "LOGICAL_USER_LISTS_PER_CUSTOMER"
    | "RULE_BASED_USER_LISTS_PER_CUSTOMER"
    | "BASE_AD_GROUP_ADS_PER_CUSTOMER"
    | "EXPERIMENT_AD_GROUP_ADS_PER_CUSTOMER"
    | "AD_GROUP_ADS_PER_CAMPAIGN"
    | "TEXT_AND_OTHER_ADS_PER_AD_GROUP"
    | "IMAGE_ADS_PER_AD_GROUP"
    | "SHOPPING_SMART_ADS_PER_AD_GROUP"
    | "RESPONSIVE_SEARCH_ADS_PER_AD_GROUP"
    | "APP_ADS_PER_AD_GROUP"
    | "APP_ENGAGEMENT_ADS_PER_AD_GROUP"
    | "LOCAL_ADS_PER_AD_GROUP"
    | "VIDEO_ADS_PER_AD_GROUP"
    | "LEAD_FORM_CAMPAIGN_ASSETS_PER_CAMPAIGN"
    | "PROMOTION_CUSTOMER_ASSETS_PER_CUSTOMER"
    | "PROMOTION_CAMPAIGN_ASSETS_PER_CAMPAIGN"
    | "PROMOTION_AD_GROUP_ASSETS_PER_AD_GROUP"
    | "CALLOUT_CUSTOMER_ASSETS_PER_CUSTOMER"
    | "CALLOUT_CAMPAIGN_ASSETS_PER_CAMPAIGN"
    | "CALLOUT_AD_GROUP_ASSETS_PER_AD_GROUP"
    | "SITELINK_CUSTOMER_ASSETS_PER_CUSTOMER"
    | "SITELINK_CAMPAIGN_ASSETS_PER_CAMPAIGN"
    | "SITELINK_AD_GROUP_ASSETS_PER_AD_GROUP"
    | "STRUCTURED_SNIPPET_CUSTOMER_ASSETS_PER_CUSTOMER"
    | "STRUCTURED_SNIPPET_CAMPAIGN_ASSETS_PER_CAMPAIGN"
    | "STRUCTURED_SNIPPET_AD_GROUP_ASSETS_PER_AD_GROUP"
    | "MOBILE_APP_CUSTOMER_ASSETS_PER_CUSTOMER"
    | "MOBILE_APP_CAMPAIGN_ASSETS_PER_CAMPAIGN"
    | "MOBILE_APP_AD_GROUP_ASSETS_PER_AD_GROUP"
    | "HOTEL_CALLOUT_CUSTOMER_ASSETS_PER_CUSTOMER"
    | "HOTEL_CALLOUT_CAMPAIGN_ASSETS_PER_CAMPAIGN"
    | "HOTEL_CALLOUT_AD_GROUP_ASSETS_PER_AD_GROUP"
    | "CALL_CUSTOMER_ASSETS_PER_CUSTOMER"
    | "CALL_CAMPAIGN_ASSETS_PER_CAMPAIGN"
    | "CALL_AD_GROUP_ASSETS_PER_AD_GROUP"
    | "PRICE_CUSTOMER_ASSETS_PER_CUSTOMER"
    | "PRICE_CAMPAIGN_ASSETS_PER_CAMPAIGN"
    | "PRICE_AD_GROUP_ASSETS_PER_AD_GROUP"
    | "AD_IMAGE_CAMPAIGN_ASSETS_PER_CAMPAIGN"
    | "AD_IMAGE_AD_GROUP_ASSETS_PER_AD_GROUP"
    | "PAGE_FEED_ASSET_SETS_PER_CUSTOMER"
    | "DYNAMIC_EDUCATION_FEED_ASSET_SETS_PER_CUSTOMER"
    | "ASSETS_PER_PAGE_FEED_ASSET_SET"
    | "ASSETS_PER_DYNAMIC_EDUCATION_FEED_ASSET_SET"
    | "DYNAMIC_REAL_ESTATE_ASSET_SETS_PER_CUSTOMER"
    | "ASSETS_PER_DYNAMIC_REAL_ESTATE_ASSET_SET"
    | "DYNAMIC_CUSTOM_ASSET_SETS_PER_CUSTOMER"
    | "ASSETS_PER_DYNAMIC_CUSTOM_ASSET_SET"
    | "DYNAMIC_HOTELS_AND_RENTALS_ASSET_SETS_PER_CUSTOMER"
    | "ASSETS_PER_DYNAMIC_HOTELS_AND_RENTALS_ASSET_SET"
    | "DYNAMIC_LOCAL_ASSET_SETS_PER_CUSTOMER"
    | "ASSETS_PER_DYNAMIC_LOCAL_ASSET_SET"
    | "DYNAMIC_FLIGHTS_ASSET_SETS_PER_CUSTOMER"
    | "ASSETS_PER_DYNAMIC_FLIGHTS_ASSET_SET"
    | "DYNAMIC_TRAVEL_ASSET_SETS_PER_CUSTOMER"
    | "ASSETS_PER_DYNAMIC_TRAVEL_ASSET_SET"
    | "DYNAMIC_JOBS_ASSET_SETS_PER_CUSTOMER"
    | "ASSETS_PER_DYNAMIC_JOBS_ASSET_SET"
    | "BUSINESS_NAME_CAMPAIGN_ASSETS_PER_CAMPAIGN"
    | "BUSINESS_LOGO_CAMPAIGN_ASSETS_PER_CAMPAIGN"
    | "VERSIONS_PER_AD"
    | "USER_FEEDS_PER_CUSTOMER"
    | "SYSTEM_FEEDS_PER_CUSTOMER"
    | "FEED_ATTRIBUTES_PER_FEED"
    | "FEED_ITEMS_PER_CUSTOMER"
    | "CAMPAIGN_FEEDS_PER_CUSTOMER"
    | "BASE_CAMPAIGN_FEEDS_PER_CUSTOMER"
    | "EXPERIMENT_CAMPAIGN_FEEDS_PER_CUSTOMER"
    | "AD_GROUP_FEEDS_PER_CUSTOMER"
    | "BASE_AD_GROUP_FEEDS_PER_CUSTOMER"
    | "EXPERIMENT_AD_GROUP_FEEDS_PER_CUSTOMER"
    | "AD_GROUP_FEEDS_PER_CAMPAIGN"
    | "FEED_ITEM_SETS_PER_CUSTOMER"
    | "FEED_ITEMS_PER_FEED_ITEM_SET"
    | "CAMPAIGN_EXPERIMENTS_PER_CUSTOMER"
    | "EXPERIMENT_ARMS_PER_VIDEO_EXPERIMENT"
    | "OWNED_LABELS_PER_CUSTOMER"
    | "LABELS_PER_CAMPAIGN"
    | "LABELS_PER_AD_GROUP"
    | "LABELS_PER_AD_GROUP_AD"
    | "LABELS_PER_AD_GROUP_CRITERION"
    | "TARGET_CUSTOMERS_PER_LABEL"
    | "KEYWORD_PLANS_PER_USER_PER_CUSTOMER"
    | "KEYWORD_PLAN_AD_GROUP_KEYWORDS_PER_KEYWORD_PLAN"
    | "KEYWORD_PLAN_AD_GROUPS_PER_KEYWORD_PLAN"
    | "KEYWORD_PLAN_NEGATIVE_KEYWORDS_PER_KEYWORD_PLAN"
    | "KEYWORD_PLAN_CAMPAIGNS_PER_KEYWORD_PLAN"
    | "CONVERSION_ACTIONS_PER_CUSTOMER"
    | "BATCH_JOB_OPERATIONS_PER_JOB"
    | "BATCH_JOBS_PER_CUSTOMER"
    | "HOTEL_CHECK_IN_DATE_RANGE_BID_MODIFIERS_PER_AD_GROUP"
    | "SHARED_SETS_PER_ACCOUNT_FOR_ACCOUNT_LEVEL_NEGATIVE_KEYWORDS"
    | "ACCOUNT_LEVEL_NEGATIVE_KEYWORDS_PER_SHARED_SET"
    | "ENABLED_ASSET_PER_HOTEL_PROPERTY_ASSET_SET"
    | "ENABLED_HOTEL_PROPERTY_ASSET_LINKS_PER_ASSET_GROUP"
    | "BRANDS_PER_SHARED_SET"
    | "ENABLED_BRAND_LIST_CRITERIA_PER_CAMPAIGN"
    | "SHARED_SETS_PER_ACCOUNT_FOR_BRAND"
    | "LOOKALIKE_USER_LISTS_PER_CUSTOMER"
    | "LOGO_CAMPAIGN_ASSETS_PER_CAMPAIGN"
    | "BUSINESS_MESSAGE_ASSET_LINKS_PER_CUSTOMER"
    | "WHATSAPP_BUSINESS_MESSAGE_ASSET_LINKS_PER_CAMPAIGN"
    | "WHATSAPP_BUSINESS_MESSAGE_ASSET_LINKS_PER_AD_GROUP"
    | "BRAND_LIST_CRITERIA_PER_AD_GROUP"
    | (string & {});
}

export const GoogleAdsSearchads360V23Errors__ResourceCountDetails: Schema.Schema<GoogleAdsSearchads360V23Errors__ResourceCountDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    existingCount: Schema.optional(Schema.Number),
    enclosingId: Schema.optional(Schema.String),
    enclosingResource: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    limitType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V23Errors__ResourceCountDetails",
  });

export interface GoogleAdsSearchads360V23Errors__ErrorDetails {
  /** Details on the quota error, including the scope (account or developer), the rate bucket name and the retry delay. */
  quotaErrorDetails?: GoogleAdsSearchads360V23Errors__QuotaErrorDetails;
  /** The error code that should have been returned, but wasn't. This is used when the error code is not published in the client specified version. */
  unpublishedErrorCode?: string;
  /** Details for a budget below per-day minimum error. */
  budgetPerDayMinimumErrorDetails?: GoogleAdsSearchads360V23Errors__BudgetPerDayMinimumErrorDetails;
  /** Describes policy violation findings. */
  policyFindingDetails?: GoogleAdsSearchads360V23Errors__PolicyFindingDetails;
  /** Describes an ad policy violation. */
  policyViolationDetails?: GoogleAdsSearchads360V23Errors__PolicyViolationDetails;
  /** Details for a resource count limit exceeded error. */
  resourceCountDetails?: GoogleAdsSearchads360V23Errors__ResourceCountDetails;
}

export const GoogleAdsSearchads360V23Errors__ErrorDetails: Schema.Schema<GoogleAdsSearchads360V23Errors__ErrorDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    quotaErrorDetails: Schema.optional(
      GoogleAdsSearchads360V23Errors__QuotaErrorDetails,
    ),
    unpublishedErrorCode: Schema.optional(Schema.String),
    budgetPerDayMinimumErrorDetails: Schema.optional(
      GoogleAdsSearchads360V23Errors__BudgetPerDayMinimumErrorDetails,
    ),
    policyFindingDetails: Schema.optional(
      GoogleAdsSearchads360V23Errors__PolicyFindingDetails,
    ),
    policyViolationDetails: Schema.optional(
      GoogleAdsSearchads360V23Errors__PolicyViolationDetails,
    ),
    resourceCountDetails: Schema.optional(
      GoogleAdsSearchads360V23Errors__ResourceCountDetails,
    ),
  }).annotate({ identifier: "GoogleAdsSearchads360V23Errors__ErrorDetails" });

export interface GoogleAdsSearchads360V23Errors__ErrorCode {
  /** The reasons for the adx error */
  adxError?: "UNSPECIFIED" | "UNKNOWN" | "UNSUPPORTED_FEATURE" | (string & {});
  /** The reasons for the customer user access mutate error */
  customerUserAccessError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INVALID_USER_ID"
    | "REMOVAL_DISALLOWED"
    | "DISALLOWED_ACCESS_ROLE"
    | "LAST_ADMIN_USER_OF_SERVING_CUSTOMER"
    | "LAST_ADMIN_USER_OF_MANAGER"
    | (string & {});
  /** The reason for enum error. */
  enumError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ENUM_VALUE_NOT_PERMITTED"
    | (string & {});
  /** The reasons for the asset link error */
  assetLinkError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "PINNING_UNSUPPORTED"
    | "UNSUPPORTED_FIELD_TYPE"
    | "FIELD_TYPE_INCOMPATIBLE_WITH_ASSET_TYPE"
    | "FIELD_TYPE_INCOMPATIBLE_WITH_CAMPAIGN_TYPE"
    | "INCOMPATIBLE_ADVERTISING_CHANNEL_TYPE"
    | "IMAGE_NOT_WITHIN_SPECIFIED_DIMENSION_RANGE"
    | "INVALID_PINNED_FIELD"
    | "MEDIA_BUNDLE_ASSET_FILE_SIZE_TOO_LARGE"
    | "NOT_ENOUGH_AVAILABLE_ASSET_LINKS_FOR_VALID_COMBINATION"
    | "NOT_ENOUGH_AVAILABLE_ASSET_LINKS_WITH_FALLBACK"
    | "NOT_ENOUGH_AVAILABLE_ASSET_LINKS_WITH_FALLBACK_FOR_VALID_COMBINATION"
    | "YOUTUBE_VIDEO_REMOVED"
    | "YOUTUBE_VIDEO_TOO_LONG"
    | "YOUTUBE_VIDEO_TOO_SHORT"
    | "EXCLUDED_PARENT_FIELD_TYPE"
    | "INVALID_STATUS"
    | "YOUTUBE_VIDEO_DURATION_NOT_DEFINED"
    | "CANNOT_CREATE_AUTOMATICALLY_CREATED_LINKS"
    | "CANNOT_LINK_TO_AUTOMATICALLY_CREATED_ASSET"
    | "CANNOT_MODIFY_ASSET_LINK_SOURCE"
    | "CANNOT_LINK_LOCATION_LEAD_FORM_WITHOUT_LOCATION_ASSET"
    | "CUSTOMER_NOT_VERIFIED"
    | "UNSUPPORTED_CALL_TO_ACTION"
    | "BRAND_ASSETS_NOT_LINKED_AT_ASSET_GROUP_LEVEL"
    | "BRAND_ASSETS_NOT_LINKED_AT_CAMPAIGN_LEVEL"
    | (string & {});
  /** The reasons for the campaign lifecycle goal error */
  campaignLifecycleGoalError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CAMPAIGN_MISSING"
    | "INVALID_CAMPAIGN"
    | "CUSTOMER_ACQUISITION_INVALID_OPTIMIZATION_MODE"
    | "INCOMPATIBLE_BIDDING_STRATEGY"
    | "MISSING_PURCHASE_GOAL"
    | "CUSTOMER_ACQUISITION_INVALID_HIGH_LIFETIME_VALUE"
    | "CUSTOMER_ACQUISITION_UNSUPPORTED_CAMPAIGN_TYPE"
    | "CUSTOMER_ACQUISITION_INVALID_VALUE"
    | "CUSTOMER_ACQUISITION_VALUE_MISSING"
    | "CUSTOMER_ACQUISITION_MISSING_EXISTING_CUSTOMER_DEFINITION"
    | "CUSTOMER_ACQUISITION_MISSING_HIGH_VALUE_CUSTOMER_DEFINITION"
    | (string & {});
  /** The reasons for the user data error. */
  userDataError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "OPERATIONS_FOR_CUSTOMER_MATCH_NOT_ALLOWED"
    | "TOO_MANY_USER_IDENTIFIERS"
    | "USER_LIST_NOT_APPLICABLE"
    | (string & {});
  /** The reasons for the campaign customizer error. */
  campaignCustomizerError?: "UNSPECIFIED" | "UNKNOWN" | (string & {});
  /** The reason for keyword plan error. */
  keywordPlanError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "BID_MULTIPLIER_OUT_OF_RANGE"
    | "BID_TOO_HIGH"
    | "BID_TOO_LOW"
    | "BID_TOO_MANY_FRACTIONAL_DIGITS"
    | "DAILY_BUDGET_TOO_LOW"
    | "DAILY_BUDGET_TOO_MANY_FRACTIONAL_DIGITS"
    | "INVALID_VALUE"
    | "KEYWORD_PLAN_HAS_NO_KEYWORDS"
    | "KEYWORD_PLAN_NOT_ENABLED"
    | "KEYWORD_PLAN_NOT_FOUND"
    | "MISSING_BID"
    | "MISSING_FORECAST_PERIOD"
    | "INVALID_FORECAST_DATE_RANGE"
    | "INVALID_NAME"
    | (string & {});
  /** The reasons for the customer SK Ad network conversion value schema error */
  customerSkAdNetworkConversionValueSchemaError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INVALID_LINK_ID"
    | "INVALID_APP_ID"
    | "INVALID_SCHEMA"
    | "LINK_CODE_NOT_FOUND"
    | "INVALID_EVENT_COUNTER"
    | "INVALID_EVENT_NAME"
    | (string & {});
  /** The reasons for the goal error. */
  goalError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "RETENTION_GOAL_ALREADY_EXISTS"
    | "HIGH_LIFETIME_VALUE_PRESENT_BUT_VALUE_ABSENT"
    | "HIGH_LIFETIME_VALUE_LESS_THAN_OR_EQUAL_TO_VALUE"
    | "CUSTOMER_LIFECYCLE_OPTIMIZATION_ACCOUNT_TYPE_NOT_ALLOWED"
    | (string & {});
  /** The reasons for the setting error */
  settingError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "SETTING_TYPE_IS_NOT_AVAILABLE"
    | "SETTING_TYPE_IS_NOT_COMPATIBLE_WITH_CAMPAIGN"
    | "TARGETING_SETTING_CONTAINS_INVALID_CRITERION_TYPE_GROUP"
    | "TARGETING_SETTING_DEMOGRAPHIC_CRITERION_TYPE_GROUPS_MUST_BE_SET_TO_TARGET_ALL"
    | "TARGETING_SETTING_CANNOT_CHANGE_TARGET_ALL_TO_FALSE_FOR_DEMOGRAPHIC_CRITERION_TYPE_GROUP"
    | "DYNAMIC_SEARCH_ADS_SETTING_AT_LEAST_ONE_FEED_ID_MUST_BE_PRESENT"
    | "DYNAMIC_SEARCH_ADS_SETTING_CONTAINS_INVALID_DOMAIN_NAME"
    | "DYNAMIC_SEARCH_ADS_SETTING_CONTAINS_SUBDOMAIN_NAME"
    | "DYNAMIC_SEARCH_ADS_SETTING_CONTAINS_INVALID_LANGUAGE_CODE"
    | "TARGET_ALL_IS_NOT_ALLOWED_FOR_PLACEMENT_IN_SEARCH_CAMPAIGN"
    | "SETTING_VALUE_NOT_COMPATIBLE_WITH_CAMPAIGN"
    | "BID_ONLY_IS_NOT_ALLOWED_TO_BE_MODIFIED_WITH_CUSTOMER_MATCH_TARGETING"
    | (string & {});
  /** An error with a Bidding Strategy mutate. */
  biddingStrategyError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "DUPLICATE_NAME"
    | "CANNOT_CHANGE_BIDDING_STRATEGY_TYPE"
    | "CANNOT_REMOVE_ASSOCIATED_STRATEGY"
    | "BIDDING_STRATEGY_NOT_SUPPORTED"
    | "INCOMPATIBLE_BIDDING_STRATEGY_AND_BIDDING_STRATEGY_GOAL_TYPE"
    | (string & {});
  /** An error with the amount of quota remaining. */
  quotaError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "RESOURCE_EXHAUSTED"
    | "ACCESS_PROHIBITED"
    | "RESOURCE_TEMPORARILY_EXHAUSTED"
    | "EXCESSIVE_SHORT_TERM_QUERY_RESOURCE_CONSUMPTION"
    | "EXCESSIVE_LONG_TERM_QUERY_RESOURCE_CONSUMPTION"
    | "PAYMENTS_PROFILE_ACTIVATION_RATE_LIMIT_EXCEEDED"
    | (string & {});
  /** The reasons for the policy violation error */
  policyViolationError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "POLICY_ERROR"
    | (string & {});
  /** The reasons for the criterion error */
  criterionError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CONCRETE_TYPE_REQUIRED"
    | "INVALID_EXCLUDED_CATEGORY"
    | "INVALID_KEYWORD_TEXT"
    | "KEYWORD_TEXT_TOO_LONG"
    | "KEYWORD_HAS_TOO_MANY_WORDS"
    | "KEYWORD_HAS_INVALID_CHARS"
    | "INVALID_PLACEMENT_URL"
    | "INVALID_USER_LIST"
    | "INVALID_USER_INTEREST"
    | "INVALID_FORMAT_FOR_PLACEMENT_URL"
    | "PLACEMENT_URL_IS_TOO_LONG"
    | "PLACEMENT_URL_HAS_ILLEGAL_CHAR"
    | "PLACEMENT_URL_HAS_MULTIPLE_SITES_IN_LINE"
    | "PLACEMENT_IS_NOT_AVAILABLE_FOR_TARGETING_OR_EXCLUSION"
    | "INVALID_TOPIC_PATH"
    | "INVALID_YOUTUBE_CHANNEL_ID"
    | "INVALID_YOUTUBE_VIDEO_ID"
    | "YOUTUBE_VERTICAL_CHANNEL_DEPRECATED"
    | "YOUTUBE_DEMOGRAPHIC_CHANNEL_DEPRECATED"
    | "YOUTUBE_URL_UNSUPPORTED"
    | "CANNOT_EXCLUDE_CRITERIA_TYPE"
    | "CANNOT_ADD_CRITERIA_TYPE"
    | "CANNOT_EXCLUDE_SIMILAR_USER_LIST"
    | "CANNOT_ADD_CLOSED_USER_LIST"
    | "CANNOT_ADD_DISPLAY_ONLY_LISTS_TO_SEARCH_ONLY_CAMPAIGNS"
    | "CANNOT_ADD_DISPLAY_ONLY_LISTS_TO_SEARCH_CAMPAIGNS"
    | "CANNOT_ADD_DISPLAY_ONLY_LISTS_TO_SHOPPING_CAMPAIGNS"
    | "CANNOT_ADD_USER_INTERESTS_TO_SEARCH_CAMPAIGNS"
    | "CANNOT_SET_BIDS_ON_CRITERION_TYPE_IN_SEARCH_CAMPAIGNS"
    | "CANNOT_ADD_URLS_TO_CRITERION_TYPE_FOR_CAMPAIGN_TYPE"
    | "INVALID_COMBINED_AUDIENCE"
    | "INVALID_CUSTOM_AFFINITY"
    | "INVALID_CUSTOM_INTENT"
    | "INVALID_CUSTOM_AUDIENCE"
    | "INVALID_IP_ADDRESS"
    | "INVALID_IP_FORMAT"
    | "INVALID_MOBILE_APP"
    | "INVALID_MOBILE_APP_CATEGORY"
    | "INVALID_CRITERION_ID"
    | "CANNOT_TARGET_CRITERION"
    | "CANNOT_TARGET_OBSOLETE_CRITERION"
    | "CRITERION_ID_AND_TYPE_MISMATCH"
    | "INVALID_PROXIMITY_RADIUS"
    | "INVALID_PROXIMITY_RADIUS_UNITS"
    | "INVALID_STREETADDRESS_LENGTH"
    | "INVALID_CITYNAME_LENGTH"
    | "INVALID_REGIONCODE_LENGTH"
    | "INVALID_REGIONNAME_LENGTH"
    | "INVALID_POSTALCODE_LENGTH"
    | "INVALID_COUNTRY_CODE"
    | "INVALID_LATITUDE"
    | "INVALID_LONGITUDE"
    | "PROXIMITY_GEOPOINT_AND_ADDRESS_BOTH_CANNOT_BE_NULL"
    | "INVALID_PROXIMITY_ADDRESS"
    | "INVALID_USER_DOMAIN_NAME"
    | "CRITERION_PARAMETER_TOO_LONG"
    | "AD_SCHEDULE_TIME_INTERVALS_OVERLAP"
    | "AD_SCHEDULE_INTERVAL_CANNOT_SPAN_MULTIPLE_DAYS"
    | "AD_SCHEDULE_INVALID_TIME_INTERVAL"
    | "AD_SCHEDULE_EXCEEDED_INTERVALS_PER_DAY_LIMIT"
    | "AD_SCHEDULE_CRITERION_ID_MISMATCHING_FIELDS"
    | "CANNOT_BID_MODIFY_CRITERION_TYPE"
    | "CANNOT_BID_MODIFY_CRITERION_CAMPAIGN_OPTED_OUT"
    | "CANNOT_BID_MODIFY_NEGATIVE_CRITERION"
    | "BID_MODIFIER_ALREADY_EXISTS"
    | "FEED_ID_NOT_ALLOWED"
    | "ACCOUNT_INELIGIBLE_FOR_CRITERIA_TYPE"
    | "CRITERIA_TYPE_INVALID_FOR_BIDDING_STRATEGY"
    | "CANNOT_EXCLUDE_CRITERION"
    | "CANNOT_REMOVE_CRITERION"
    | "INVALID_PRODUCT_BIDDING_CATEGORY"
    | "MISSING_SHOPPING_SETTING"
    | "INVALID_MATCHING_FUNCTION"
    | "LOCATION_FILTER_NOT_ALLOWED"
    | "INVALID_FEED_FOR_LOCATION_FILTER"
    | "LOCATION_FILTER_INVALID"
    | "CANNOT_SET_GEO_TARGET_CONSTANTS_WITH_FEED_ITEM_SETS"
    | "CANNOT_SET_BOTH_ASSET_SET_AND_FEED"
    | "CANNOT_SET_FEED_OR_FEED_ITEM_SETS_FOR_CUSTOMER"
    | "CANNOT_SET_ASSET_SET_FIELD_FOR_CUSTOMER"
    | "CANNOT_SET_GEO_TARGET_CONSTANTS_WITH_ASSET_SETS"
    | "CANNOT_SET_ASSET_SETS_WITH_FEED_ITEM_SETS"
    | "INVALID_LOCATION_GROUP_ASSET_SET"
    | "INVALID_LOCATION_GROUP_RADIUS"
    | "INVALID_LOCATION_GROUP_RADIUS_UNIT"
    | "CANNOT_ATTACH_CRITERIA_AT_CAMPAIGN_AND_ADGROUP"
    | "HOTEL_LENGTH_OF_STAY_OVERLAPS_WITH_EXISTING_CRITERION"
    | "HOTEL_ADVANCE_BOOKING_WINDOW_OVERLAPS_WITH_EXISTING_CRITERION"
    | "FIELD_INCOMPATIBLE_WITH_NEGATIVE_TARGETING"
    | "INVALID_WEBPAGE_CONDITION"
    | "INVALID_WEBPAGE_CONDITION_URL"
    | "WEBPAGE_CONDITION_URL_CANNOT_BE_EMPTY"
    | "WEBPAGE_CONDITION_URL_UNSUPPORTED_PROTOCOL"
    | "WEBPAGE_CONDITION_URL_CANNOT_BE_IP_ADDRESS"
    | "WEBPAGE_CONDITION_URL_DOMAIN_NOT_CONSISTENT_WITH_CAMPAIGN_SETTING"
    | "WEBPAGE_CONDITION_URL_CANNOT_BE_PUBLIC_SUFFIX"
    | "WEBPAGE_CONDITION_URL_INVALID_PUBLIC_SUFFIX"
    | "WEBPAGE_CONDITION_URL_VALUE_TRACK_VALUE_NOT_SUPPORTED"
    | "WEBPAGE_CRITERION_URL_EQUALS_CAN_HAVE_ONLY_ONE_CONDITION"
    | "WEBPAGE_CRITERION_NOT_SUPPORTED_ON_NON_DSA_AD_GROUP"
    | "CANNOT_TARGET_USER_LIST_FOR_SMART_DISPLAY_CAMPAIGNS"
    | "CANNOT_TARGET_PLACEMENTS_FOR_SEARCH_CAMPAIGNS"
    | "LISTING_SCOPE_TOO_MANY_DIMENSION_TYPES"
    | "LISTING_SCOPE_TOO_MANY_IN_OPERATORS"
    | "LISTING_SCOPE_IN_OPERATOR_NOT_SUPPORTED"
    | "DUPLICATE_LISTING_DIMENSION_TYPE"
    | "DUPLICATE_LISTING_DIMENSION_VALUE"
    | "CANNOT_SET_BIDS_ON_LISTING_GROUP_SUBDIVISION"
    | "LISTING_GROUP_ERROR_IN_ANOTHER_OPERATION"
    | "INVALID_LISTING_GROUP_HIERARCHY"
    | "LISTING_GROUP_TREE_WAS_INVALID_BEFORE_MUTATION"
    | "LISTING_GROUP_UNIT_CANNOT_HAVE_CHILDREN"
    | "LISTING_GROUP_SUBDIVISION_REQUIRES_OTHERS_CASE"
    | "LISTING_GROUP_REQUIRES_SAME_DIMENSION_TYPE_AS_SIBLINGS"
    | "LISTING_GROUP_ALREADY_EXISTS"
    | "LISTING_GROUP_DOES_NOT_EXIST"
    | "LISTING_GROUP_CANNOT_BE_REMOVED"
    | "INVALID_LISTING_GROUP_TYPE"
    | "LISTING_GROUP_ADD_MAY_ONLY_USE_TEMP_ID"
    | "LISTING_SCOPE_TOO_LONG"
    | "LISTING_SCOPE_TOO_MANY_DIMENSIONS"
    | "LISTING_GROUP_TOO_LONG"
    | "LISTING_GROUP_TREE_TOO_DEEP"
    | "INVALID_LISTING_DIMENSION"
    | "INVALID_LISTING_DIMENSION_TYPE"
    | "ADVERTISER_NOT_ON_ALLOWLIST_FOR_COMBINED_AUDIENCE_ON_DISPLAY"
    | "CANNOT_TARGET_REMOVED_COMBINED_AUDIENCE"
    | "INVALID_COMBINED_AUDIENCE_ID"
    | "CANNOT_TARGET_REMOVED_CUSTOM_AUDIENCE"
    | "HOTEL_CHECK_IN_DATE_RANGE_OVERLAPS_WITH_EXISTING_CRITERION"
    | "HOTEL_CHECK_IN_DATE_RANGE_START_DATE_TOO_EARLY"
    | "HOTEL_CHECK_IN_DATE_RANGE_END_DATE_TOO_LATE"
    | "HOTEL_CHECK_IN_DATE_RANGE_REVERSED"
    | "BROAD_MATCH_MODIFIER_KEYWORD_NOT_ALLOWED"
    | "ONE_AUDIENCE_ALLOWED_PER_ASSET_GROUP"
    | "AUDIENCE_NOT_ELIGIBLE_FOR_CAMPAIGN_TYPE"
    | "AUDIENCE_NOT_ALLOWED_TO_ATTACH_WHEN_AUDIENCE_GROUPED_SET_TO_FALSE"
    | "CANNOT_TARGET_CUSTOMER_MATCH_USER_LIST"
    | "NEGATIVE_KEYWORD_SHARED_SET_DOES_NOT_EXIST"
    | "CANNOT_ADD_REMOVED_NEGATIVE_KEYWORD_SHARED_SET"
    | "CANNOT_HAVE_MULTIPLE_NEGATIVE_KEYWORD_LIST_PER_ACCOUNT"
    | "CUSTOMER_CANNOT_ADD_CRITERION_OF_THIS_TYPE"
    | "CANNOT_TARGET_SIMILAR_USER_LIST"
    | "CANNOT_ADD_AUDIENCE_SEGMENT_CRITERION_WHEN_AUDIENCE_GROUPED_IS_SET"
    | "ONE_AUDIENCE_ALLOWED_PER_AD_GROUP"
    | "INVALID_DETAILED_DEMOGRAPHIC"
    | "CANNOT_RECOGNIZE_BRAND"
    | "BRAND_SHARED_SET_DOES_NOT_EXIST"
    | "CANNOT_ADD_REMOVED_BRAND_SHARED_SET"
    | "ONLY_EXCLUSION_BRAND_LIST_ALLOWED_FOR_CAMPAIGN_TYPE"
    | "LOCATION_TARGETING_NOT_ELIGIBLE_FOR_RESTRICTED_CAMPAIGN"
    | "ONLY_INCLUSION_BRAND_LIST_ALLOWED_FOR_AD_GROUPS"
    | "CANNOT_ADD_REMOVED_PLACEMENT_LIST_SHARED_SET"
    | "PLACEMENT_LIST_SHARED_SET_DOES_NOT_EXIST"
    | "AI_MAX_MUST_BE_ENABLED"
    | "NOT_AVAILABLE_FOR_AI_MAX_CAMPAIGNS"
    | "MISSING_EU_POLITICAL_ADVERTISING_SELF_DECLARATION"
    | "INVALID_CAMPAIGN_TYPE_FOR_THIRD_PARTY_PARTNER_DATA_LIST"
    | "CANNOT_ADD_USER_LIST_PENDING_PRIVACY_REVIEW"
    | "VERTICAL_ADS_ITEM_GROUP_RULE_LIST_DOES_NOT_EXIST"
    | "CANNOT_ADD_REMOVED_VERTICAL_ADS_ITEM_GROUP_RULE_LIST_SHARED_SET"
    | "VERTICAL_ADS_ITEM_GROUP_RULE_LIST_NOT_SUPPORTED_FOR_CAMPAIGNS_WITHOUT_ENABLED_TRAVEL_FEED"
    | "VERTICAL_ADS_ITEM_GROUP_RULE_LIST_NOT_SUPPORTED_FOR_CAMPAIGNS_WITHOUT_AI_MAX"
    | "VERTICAL_ADS_ITEM_GROUP_RULE_NOT_SUPPORTED_FOR_THE_VERTICAL_TYPE"
    | (string & {});
  /** The reasons for the ad group bid modifier error */
  adGroupBidModifierError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CRITERION_ID_NOT_SUPPORTED"
    | "CANNOT_OVERRIDE_OPTED_OUT_CAMPAIGN_CRITERION_BID_MODIFIER"
    | (string & {});
  /** The reason for keyword plan ad group error. */
  keywordPlanAdGroupError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INVALID_NAME"
    | "DUPLICATE_NAME"
    | (string & {});
  /** The reasons for the ad customizer error */
  adCustomizerError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "COUNTDOWN_INVALID_DATE_FORMAT"
    | "COUNTDOWN_DATE_IN_PAST"
    | "COUNTDOWN_INVALID_LOCALE"
    | "COUNTDOWN_INVALID_START_DAYS_BEFORE"
    | "UNKNOWN_USER_LIST"
    | (string & {});
  /** The reasons for the asset group listing group filter error */
  assetGroupListingGroupFilterError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "TREE_TOO_DEEP"
    | "UNIT_CANNOT_HAVE_CHILDREN"
    | "SUBDIVISION_MUST_HAVE_EVERYTHING_ELSE_CHILD"
    | "DIFFERENT_DIMENSION_TYPE_BETWEEN_SIBLINGS"
    | "SAME_DIMENSION_VALUE_BETWEEN_SIBLINGS"
    | "SAME_DIMENSION_TYPE_BETWEEN_ANCESTORS"
    | "MULTIPLE_ROOTS"
    | "INVALID_DIMENSION_VALUE"
    | "MUST_REFINE_HIERARCHICAL_PARENT_TYPE"
    | "INVALID_PRODUCT_BIDDING_CATEGORY"
    | "CHANGING_CASE_VALUE_WITH_CHILDREN"
    | "SUBDIVISION_HAS_CHILDREN"
    | "CANNOT_REFINE_HIERARCHICAL_EVERYTHING_ELSE"
    | "DIMENSION_TYPE_NOT_ALLOWED"
    | "DUPLICATE_WEBPAGE_FILTER_UNDER_ASSET_GROUP"
    | "LISTING_SOURCE_NOT_ALLOWED"
    | "FILTER_EXCLUSION_NOT_ALLOWED"
    | "MULTIPLE_LISTING_SOURCES"
    | "MULTIPLE_WEBPAGE_CONDITION_TYPES_NOT_ALLOWED"
    | "MULTIPLE_WEBPAGE_TYPES_PER_ASSET_GROUP"
    | "PAGE_FEED_FILTER_HAS_PARENT"
    | "MULTIPLE_OPERATIONS_ON_ONE_NODE"
    | "TREE_WAS_INVALID_BEFORE_MUTATION"
    | (string & {});
  /** The reasons for the experiment error */
  experimentError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CANNOT_SET_START_DATE_IN_PAST"
    | "END_DATE_BEFORE_START_DATE"
    | "START_DATE_TOO_FAR_IN_FUTURE"
    | "DUPLICATE_EXPERIMENT_NAME"
    | "CANNOT_MODIFY_REMOVED_EXPERIMENT"
    | "START_DATE_ALREADY_PASSED"
    | "CANNOT_SET_END_DATE_IN_PAST"
    | "CANNOT_SET_STATUS_TO_REMOVED"
    | "CANNOT_MODIFY_PAST_END_DATE"
    | "INVALID_STATUS"
    | "INVALID_CAMPAIGN_CHANNEL_TYPE"
    | "OVERLAPPING_MEMBERS_AND_DATE_RANGE"
    | "INVALID_TRIAL_ARM_TRAFFIC_SPLIT"
    | "TRAFFIC_SPLIT_OVERLAPPING"
    | "SUM_TRIAL_ARM_TRAFFIC_UNEQUALS_TO_TRIAL_TRAFFIC_SPLIT_DENOMINATOR"
    | "CANNOT_MODIFY_TRAFFIC_SPLIT_AFTER_START"
    | "EXPERIMENT_NOT_FOUND"
    | "EXPERIMENT_NOT_YET_STARTED"
    | "CANNOT_HAVE_MULTIPLE_CONTROL_ARMS"
    | "IN_DESIGN_CAMPAIGNS_NOT_SET"
    | "CANNOT_SET_STATUS_TO_GRADUATED"
    | "CANNOT_CREATE_EXPERIMENT_CAMPAIGN_WITH_SHARED_BUDGET"
    | "CANNOT_CREATE_EXPERIMENT_CAMPAIGN_WITH_CUSTOM_BUDGET"
    | "STATUS_TRANSITION_INVALID"
    | "DUPLICATE_EXPERIMENT_CAMPAIGN_NAME"
    | "CANNOT_REMOVE_IN_CREATION_EXPERIMENT"
    | "CANNOT_ADD_CAMPAIGN_WITH_DEPRECATED_AD_TYPES"
    | "CANNOT_ENABLE_SYNC_FOR_UNSUPPORTED_EXPERIMENT_TYPE"
    | "INVALID_DURATION_FOR_AN_EXPERIMENT"
    | "MISSING_EU_POLITICAL_ADVERTISING_SELF_DECLARATION"
    | (string & {});
  /** The reasons for the change status error */
  changeStatusError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "START_DATE_TOO_OLD"
    | "CHANGE_DATE_RANGE_INFINITE"
    | "CHANGE_DATE_RANGE_NEGATIVE"
    | "LIMIT_NOT_SPECIFIED"
    | "INVALID_LIMIT_CLAUSE"
    | (string & {});
  /** The reasons for the ad group ad error */
  adGroupAdError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "AD_GROUP_AD_LABEL_DOES_NOT_EXIST"
    | "AD_GROUP_AD_LABEL_ALREADY_EXISTS"
    | "AD_NOT_UNDER_ADGROUP"
    | "CANNOT_OPERATE_ON_REMOVED_ADGROUPAD"
    | "CANNOT_CREATE_DEPRECATED_ADS"
    | "CANNOT_CREATE_TEXT_ADS"
    | "EMPTY_FIELD"
    | "RESOURCE_REFERENCED_IN_MULTIPLE_OPS"
    | "AD_TYPE_CANNOT_BE_PAUSED"
    | "AD_TYPE_CANNOT_BE_REMOVED"
    | "CANNOT_UPDATE_DEPRECATED_ADS"
    | "AD_SHARING_NOT_ALLOWED"
    | (string & {});
  /** An error with a field mask */
  fieldMaskError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "FIELD_MASK_MISSING"
    | "FIELD_MASK_NOT_ALLOWED"
    | "FIELD_NOT_FOUND"
    | "FIELD_HAS_SUBFIELDS"
    | (string & {});
  /** The reasons for the Search term insight error */
  searchTermInsightError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "FILTERING_NOT_ALLOWED_WITH_SEGMENTS"
    | "LIMIT_NOT_ALLOWED_WITH_SEGMENTS"
    | "MISSING_FIELD_IN_SELECT_CLAUSE"
    | "REQUIRES_FILTER_BY_SINGLE_RESOURCE"
    | "SORTING_NOT_ALLOWED_WITH_SEGMENTS"
    | "SUMMARY_ROW_NOT_ALLOWED_WITH_SEGMENTS"
    | (string & {});
  /** The reasons for the extension feed item error */
  extensionFeedItemError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "VALUE_OUT_OF_RANGE"
    | "URL_LIST_TOO_LONG"
    | "CANNOT_HAVE_RESTRICTION_ON_EMPTY_GEO_TARGETING"
    | "CANNOT_SET_WITH_FINAL_URLS"
    | "CANNOT_SET_WITHOUT_FINAL_URLS"
    | "INVALID_PHONE_NUMBER"
    | "PHONE_NUMBER_NOT_SUPPORTED_FOR_COUNTRY"
    | "CARRIER_SPECIFIC_SHORT_NUMBER_NOT_ALLOWED"
    | "PREMIUM_RATE_NUMBER_NOT_ALLOWED"
    | "DISALLOWED_NUMBER_TYPE"
    | "INVALID_DOMESTIC_PHONE_NUMBER_FORMAT"
    | "VANITY_PHONE_NUMBER_NOT_ALLOWED"
    | "INVALID_CALL_CONVERSION_ACTION"
    | "CUSTOMER_NOT_ON_ALLOWLIST_FOR_CALLTRACKING"
    | "CALLTRACKING_NOT_SUPPORTED_FOR_COUNTRY"
    | "CUSTOMER_CONSENT_FOR_CALL_RECORDING_REQUIRED"
    | "INVALID_APP_ID"
    | "QUOTES_IN_REVIEW_EXTENSION_SNIPPET"
    | "HYPHENS_IN_REVIEW_EXTENSION_SNIPPET"
    | "REVIEW_EXTENSION_SOURCE_INELIGIBLE"
    | "SOURCE_NAME_IN_REVIEW_EXTENSION_TEXT"
    | "INCONSISTENT_CURRENCY_CODES"
    | "PRICE_EXTENSION_HAS_DUPLICATED_HEADERS"
    | "PRICE_ITEM_HAS_DUPLICATED_HEADER_AND_DESCRIPTION"
    | "PRICE_EXTENSION_HAS_TOO_FEW_ITEMS"
    | "PRICE_EXTENSION_HAS_TOO_MANY_ITEMS"
    | "UNSUPPORTED_VALUE"
    | "UNSUPPORTED_VALUE_IN_SELECTED_LANGUAGE"
    | "INVALID_DEVICE_PREFERENCE"
    | "INVALID_SCHEDULE_END"
    | "DATE_TIME_MUST_BE_IN_ACCOUNT_TIME_ZONE"
    | "INVALID_SNIPPETS_HEADER"
    | "CANNOT_OPERATE_ON_REMOVED_FEED_ITEM"
    | "PHONE_NUMBER_NOT_SUPPORTED_WITH_CALLTRACKING_FOR_COUNTRY"
    | "CONFLICTING_CALL_CONVERSION_SETTINGS"
    | "EXTENSION_TYPE_MISMATCH"
    | "EXTENSION_SUBTYPE_REQUIRED"
    | "EXTENSION_TYPE_UNSUPPORTED"
    | "CANNOT_OPERATE_ON_FEED_WITH_MULTIPLE_MAPPINGS"
    | "CANNOT_OPERATE_ON_FEED_WITH_KEY_ATTRIBUTES"
    | "INVALID_PRICE_FORMAT"
    | "PROMOTION_INVALID_TIME"
    | "TOO_MANY_DECIMAL_PLACES_SPECIFIED"
    | "CONCRETE_EXTENSION_TYPE_REQUIRED"
    | "SCHEDULE_END_NOT_AFTER_START"
    | (string & {});
  /** The reasons for the policy finding error. */
  policyFindingError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "POLICY_FINDING"
    | "POLICY_TOPIC_NOT_FOUND"
    | (string & {});
  /** The reasons for the campaign draft error */
  campaignDraftError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "DUPLICATE_DRAFT_NAME"
    | "INVALID_STATUS_TRANSITION_FROM_REMOVED"
    | "INVALID_STATUS_TRANSITION_FROM_PROMOTED"
    | "INVALID_STATUS_TRANSITION_FROM_PROMOTE_FAILED"
    | "CUSTOMER_CANNOT_CREATE_DRAFT"
    | "CAMPAIGN_CANNOT_CREATE_DRAFT"
    | "INVALID_DRAFT_CHANGE"
    | "INVALID_STATUS_TRANSITION"
    | "MAX_NUMBER_OF_DRAFTS_PER_CAMPAIGN_REACHED"
    | "LIST_ERRORS_FOR_PROMOTED_DRAFT_ONLY"
    | (string & {});
  /** The reasons for the feed item validation error */
  feedItemValidationError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "STRING_TOO_SHORT"
    | "STRING_TOO_LONG"
    | "VALUE_NOT_SPECIFIED"
    | "INVALID_DOMESTIC_PHONE_NUMBER_FORMAT"
    | "INVALID_PHONE_NUMBER"
    | "PHONE_NUMBER_NOT_SUPPORTED_FOR_COUNTRY"
    | "PREMIUM_RATE_NUMBER_NOT_ALLOWED"
    | "DISALLOWED_NUMBER_TYPE"
    | "VALUE_OUT_OF_RANGE"
    | "CALLTRACKING_NOT_SUPPORTED_FOR_COUNTRY"
    | "CUSTOMER_NOT_IN_ALLOWLIST_FOR_CALLTRACKING"
    | "INVALID_COUNTRY_CODE"
    | "INVALID_APP_ID"
    | "MISSING_ATTRIBUTES_FOR_FIELDS"
    | "INVALID_TYPE_ID"
    | "INVALID_EMAIL_ADDRESS"
    | "INVALID_HTTPS_URL"
    | "MISSING_DELIVERY_ADDRESS"
    | "START_DATE_AFTER_END_DATE"
    | "MISSING_FEED_ITEM_START_TIME"
    | "MISSING_FEED_ITEM_END_TIME"
    | "MISSING_FEED_ITEM_ID"
    | "VANITY_PHONE_NUMBER_NOT_ALLOWED"
    | "INVALID_REVIEW_EXTENSION_SNIPPET"
    | "INVALID_NUMBER_FORMAT"
    | "INVALID_DATE_FORMAT"
    | "INVALID_PRICE_FORMAT"
    | "UNKNOWN_PLACEHOLDER_FIELD"
    | "MISSING_ENHANCED_SITELINK_DESCRIPTION_LINE"
    | "REVIEW_EXTENSION_SOURCE_INELIGIBLE"
    | "HYPHENS_IN_REVIEW_EXTENSION_SNIPPET"
    | "DOUBLE_QUOTES_IN_REVIEW_EXTENSION_SNIPPET"
    | "QUOTES_IN_REVIEW_EXTENSION_SNIPPET"
    | "INVALID_FORM_ENCODED_PARAMS"
    | "INVALID_URL_PARAMETER_NAME"
    | "NO_GEOCODING_RESULT"
    | "SOURCE_NAME_IN_REVIEW_EXTENSION_TEXT"
    | "CARRIER_SPECIFIC_SHORT_NUMBER_NOT_ALLOWED"
    | "INVALID_PLACEHOLDER_FIELD_ID"
    | "INVALID_URL_TAG"
    | "LIST_TOO_LONG"
    | "INVALID_ATTRIBUTES_COMBINATION"
    | "DUPLICATE_VALUES"
    | "INVALID_CALL_CONVERSION_ACTION_ID"
    | "CANNOT_SET_WITHOUT_FINAL_URLS"
    | "APP_ID_DOESNT_EXIST_IN_APP_STORE"
    | "INVALID_FINAL_URL"
    | "INVALID_TRACKING_URL"
    | "INVALID_FINAL_URL_FOR_APP_DOWNLOAD_URL"
    | "LIST_TOO_SHORT"
    | "INVALID_USER_ACTION"
    | "INVALID_TYPE_NAME"
    | "INVALID_EVENT_CHANGE_STATUS"
    | "INVALID_SNIPPETS_HEADER"
    | "INVALID_ANDROID_APP_LINK"
    | "NUMBER_TYPE_WITH_CALLTRACKING_NOT_SUPPORTED_FOR_COUNTRY"
    | "RESERVED_KEYWORD_OTHER"
    | "DUPLICATE_OPTION_LABELS"
    | "DUPLICATE_OPTION_PREFILLS"
    | "UNEQUAL_LIST_LENGTHS"
    | "INCONSISTENT_CURRENCY_CODES"
    | "PRICE_EXTENSION_HAS_DUPLICATED_HEADERS"
    | "ITEM_HAS_DUPLICATED_HEADER_AND_DESCRIPTION"
    | "PRICE_EXTENSION_HAS_TOO_FEW_ITEMS"
    | "UNSUPPORTED_VALUE"
    | "INVALID_FINAL_MOBILE_URL"
    | "INVALID_KEYWORDLESS_AD_RULE_LABEL"
    | "VALUE_TRACK_PARAMETER_NOT_SUPPORTED"
    | "UNSUPPORTED_VALUE_IN_SELECTED_LANGUAGE"
    | "INVALID_IOS_APP_LINK"
    | "MISSING_IOS_APP_LINK_OR_IOS_APP_STORE_ID"
    | "PROMOTION_INVALID_TIME"
    | "PROMOTION_CANNOT_SET_PERCENT_OFF_AND_MONEY_AMOUNT_OFF"
    | "PROMOTION_CANNOT_SET_PROMOTION_CODE_AND_ORDERS_OVER_AMOUNT"
    | "TOO_MANY_DECIMAL_PLACES_SPECIFIED"
    | "AD_CUSTOMIZERS_NOT_ALLOWED"
    | "INVALID_LANGUAGE_CODE"
    | "UNSUPPORTED_LANGUAGE"
    | "IF_FUNCTION_NOT_ALLOWED"
    | "INVALID_FINAL_URL_SUFFIX"
    | "INVALID_TAG_IN_FINAL_URL_SUFFIX"
    | "INVALID_FINAL_URL_SUFFIX_FORMAT"
    | "CUSTOMER_CONSENT_FOR_CALL_RECORDING_REQUIRED"
    | "ONLY_ONE_DELIVERY_OPTION_IS_ALLOWED"
    | "NO_DELIVERY_OPTION_IS_SET"
    | "INVALID_CONVERSION_REPORTING_STATE"
    | "IMAGE_SIZE_WRONG"
    | "EMAIL_DELIVERY_NOT_AVAILABLE_IN_COUNTRY"
    | "AUTO_REPLY_NOT_AVAILABLE_IN_COUNTRY"
    | "INVALID_LATITUDE_VALUE"
    | "INVALID_LONGITUDE_VALUE"
    | "TOO_MANY_LABELS"
    | "INVALID_IMAGE_URL"
    | "MISSING_LATITUDE_VALUE"
    | "MISSING_LONGITUDE_VALUE"
    | "ADDRESS_NOT_FOUND"
    | "ADDRESS_NOT_TARGETABLE"
    | "INVALID_ASSET_ID"
    | "INCOMPATIBLE_ASSET_TYPE"
    | "IMAGE_ERROR_UNEXPECTED_SIZE"
    | "IMAGE_ERROR_ASPECT_RATIO_NOT_ALLOWED"
    | "IMAGE_ERROR_FILE_TOO_LARGE"
    | "IMAGE_ERROR_FORMAT_NOT_ALLOWED"
    | "IMAGE_ERROR_CONSTRAINTS_VIOLATED"
    | "IMAGE_ERROR_SERVER_ERROR"
    | (string & {});
  /** The reasons for invalid parameter errors. */
  invalidParameterError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INVALID_CURRENCY_CODE"
    | (string & {});
  /** The reasons for the feed mapping error */
  feedMappingError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INVALID_PLACEHOLDER_FIELD"
    | "INVALID_CRITERION_FIELD"
    | "INVALID_PLACEHOLDER_TYPE"
    | "INVALID_CRITERION_TYPE"
    | "NO_ATTRIBUTE_FIELD_MAPPINGS"
    | "FEED_ATTRIBUTE_TYPE_MISMATCH"
    | "CANNOT_OPERATE_ON_MAPPINGS_FOR_SYSTEM_GENERATED_FEED"
    | "MULTIPLE_MAPPINGS_FOR_PLACEHOLDER_TYPE"
    | "MULTIPLE_MAPPINGS_FOR_CRITERION_TYPE"
    | "MULTIPLE_MAPPINGS_FOR_PLACEHOLDER_FIELD"
    | "MULTIPLE_MAPPINGS_FOR_CRITERION_FIELD"
    | "UNEXPECTED_ATTRIBUTE_FIELD_MAPPINGS"
    | "LOCATION_PLACEHOLDER_ONLY_FOR_PLACES_FEEDS"
    | "CANNOT_MODIFY_MAPPINGS_FOR_TYPED_FEED"
    | "INVALID_PLACEHOLDER_TYPE_FOR_NON_SYSTEM_GENERATED_FEED"
    | "INVALID_PLACEHOLDER_TYPE_FOR_SYSTEM_GENERATED_FEED_TYPE"
    | "ATTRIBUTE_FIELD_MAPPING_MISSING_FIELD"
    | "LEGACY_FEED_TYPE_READ_ONLY"
    | (string & {});
  /** The reasons for the not allowlisted error */
  notAllowlistedError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CUSTOMER_NOT_ALLOWLISTED_FOR_THIS_FEATURE"
    | (string & {});
  /** The reasons for error in querying shopping product. */
  shoppingProductError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "MISSING_CAMPAIGN_FILTER"
    | "MISSING_AD_GROUP_FILTER"
    | "UNSUPPORTED_DATE_SEGMENTATION"
    | (string & {});
  /** The reason for the label error. */
  labelError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CANNOT_APPLY_INACTIVE_LABEL"
    | "CANNOT_APPLY_LABEL_TO_DISABLED_AD_GROUP_CRITERION"
    | "CANNOT_APPLY_LABEL_TO_NEGATIVE_AD_GROUP_CRITERION"
    | "EXCEEDED_LABEL_LIMIT_PER_TYPE"
    | "INVALID_RESOURCE_FOR_MANAGER_LABEL"
    | "DUPLICATE_NAME"
    | "INVALID_LABEL_NAME"
    | "CANNOT_ATTACH_LABEL_TO_DRAFT"
    | "CANNOT_ATTACH_NON_MANAGER_LABEL_TO_CUSTOMER"
    | (string & {});
  /** The reasons for the offline user data job error. */
  offlineUserDataJobError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INVALID_USER_LIST_ID"
    | "INVALID_USER_LIST_TYPE"
    | "NOT_ON_ALLOWLIST_FOR_USER_ID"
    | "INCOMPATIBLE_UPLOAD_KEY_TYPE"
    | "MISSING_USER_IDENTIFIER"
    | "INVALID_MOBILE_ID_FORMAT"
    | "TOO_MANY_USER_IDENTIFIERS"
    | "NOT_ON_ALLOWLIST_FOR_STORE_SALES_DIRECT"
    | "NOT_ON_ALLOWLIST_FOR_UNIFIED_STORE_SALES"
    | "INVALID_PARTNER_ID"
    | "INVALID_ENCODING"
    | "INVALID_COUNTRY_CODE"
    | "INCOMPATIBLE_USER_IDENTIFIER"
    | "FUTURE_TRANSACTION_TIME"
    | "INVALID_CONVERSION_ACTION"
    | "MOBILE_ID_NOT_SUPPORTED"
    | "INVALID_OPERATION_ORDER"
    | "CONFLICTING_OPERATION"
    | "EXTERNAL_UPDATE_ID_ALREADY_EXISTS"
    | "JOB_ALREADY_STARTED"
    | "REMOVE_NOT_SUPPORTED"
    | "REMOVE_ALL_NOT_SUPPORTED"
    | "INVALID_SHA256_FORMAT"
    | "CUSTOM_KEY_DISABLED"
    | "CUSTOM_KEY_NOT_PREDEFINED"
    | "CUSTOM_KEY_NOT_SET"
    | "CUSTOMER_NOT_ACCEPTED_CUSTOMER_DATA_TERMS"
    | "ATTRIBUTES_NOT_APPLICABLE_FOR_CUSTOMER_MATCH_USER_LIST"
    | "LIFETIME_VALUE_BUCKET_NOT_IN_RANGE"
    | "INCOMPATIBLE_USER_IDENTIFIER_FOR_ATTRIBUTES"
    | "FUTURE_TIME_NOT_ALLOWED"
    | "LAST_PURCHASE_TIME_LESS_THAN_ACQUISITION_TIME"
    | "CUSTOMER_IDENTIFIER_NOT_ALLOWED"
    | "INVALID_ITEM_ID"
    | "FIRST_PURCHASE_TIME_GREATER_THAN_LAST_PURCHASE_TIME"
    | "INVALID_LIFECYCLE_STAGE"
    | "INVALID_EVENT_VALUE"
    | "EVENT_ATTRIBUTE_ALL_FIELDS_ARE_REQUIRED"
    | "OPERATION_LEVEL_CONSENT_PROVIDED"
    | (string & {});
  /** The reasons for the time zone error */
  timeZoneError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INVALID_TIME_ZONE"
    | (string & {});
  /** The reasons for the region code error */
  regionCodeError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INVALID_REGION_CODE"
    | (string & {});
  /** The reasons for the range error */
  rangeError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "TOO_LOW"
    | "TOO_HIGH"
    | (string & {});
  /** The reason for keyword idea error. */
  keywordPlanIdeaError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "URL_CRAWL_ERROR"
    | "INVALID_VALUE"
    | (string & {});
  /** The reasons for the batch job error */
  batchJobError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CANNOT_MODIFY_JOB_AFTER_JOB_STARTS_RUNNING"
    | "EMPTY_OPERATIONS"
    | "INVALID_SEQUENCE_TOKEN"
    | "RESULTS_NOT_READY"
    | "INVALID_PAGE_SIZE"
    | "CAN_ONLY_REMOVE_PENDING_JOB"
    | "CANNOT_LIST_RESULTS"
    | "ASSET_GROUP_AND_ASSET_GROUP_ASSET_TRANSACTION_FAILURE"
    | "ASSET_GROUP_LISTING_GROUP_FILTER_TRANSACTION_FAILURE"
    | "REQUEST_TOO_LARGE"
    | "CAMPAIGN_AND_CAMPAIGN_ASSET_TRANSACTION_FAILURE"
    | (string & {});
  /** The reasons for the bidding errors */
  biddingError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "BIDDING_STRATEGY_TRANSITION_NOT_ALLOWED"
    | "CANNOT_ATTACH_BIDDING_STRATEGY_TO_CAMPAIGN"
    | "INVALID_ANONYMOUS_BIDDING_STRATEGY_TYPE"
    | "INVALID_BIDDING_STRATEGY_TYPE"
    | "INVALID_BID"
    | "BIDDING_STRATEGY_NOT_AVAILABLE_FOR_ACCOUNT_TYPE"
    | "CANNOT_CREATE_CAMPAIGN_WITH_BIDDING_STRATEGY"
    | "CANNOT_TARGET_CONTENT_NETWORK_ONLY_WITH_CAMPAIGN_LEVEL_POP_BIDDING_STRATEGY"
    | "BIDDING_STRATEGY_NOT_SUPPORTED_WITH_AD_SCHEDULE"
    | "PAY_PER_CONVERSION_NOT_AVAILABLE_FOR_CUSTOMER"
    | "PAY_PER_CONVERSION_NOT_ALLOWED_WITH_TARGET_CPA"
    | "BIDDING_STRATEGY_NOT_ALLOWED_FOR_SEARCH_ONLY_CAMPAIGNS"
    | "BIDDING_STRATEGY_NOT_SUPPORTED_IN_DRAFTS_OR_EXPERIMENTS"
    | "BIDDING_STRATEGY_TYPE_DOES_NOT_SUPPORT_PRODUCT_TYPE_ADGROUP_CRITERION"
    | "BID_TOO_SMALL"
    | "BID_TOO_BIG"
    | "BID_TOO_MANY_FRACTIONAL_DIGITS"
    | "INVALID_DOMAIN_NAME"
    | "NOT_COMPATIBLE_WITH_PAYMENT_MODE"
    | "BIDDING_STRATEGY_TYPE_INCOMPATIBLE_WITH_SHARED_BUDGET"
    | "BIDDING_STRATEGY_AND_BUDGET_MUST_BE_ALIGNED"
    | "BIDDING_STRATEGY_AND_BUDGET_MUST_BE_ATTACHED_TO_THE_SAME_CAMPAIGNS_TO_ALIGN"
    | "BIDDING_STRATEGY_AND_BUDGET_MUST_BE_REMOVED_TOGETHER"
    | "CPC_BID_FLOOR_MICROS_GREATER_THAN_CPC_BID_CEILING_MICROS"
    | "TARGET_ROAS_TOLERANCE_PERCENT_MILLIS_MUST_BE_INTEGER"
    | (string & {});
  /** The reasons for the campaign experiment error */
  campaignExperimentError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "DUPLICATE_NAME"
    | "INVALID_TRANSITION"
    | "CANNOT_CREATE_EXPERIMENT_WITH_SHARED_BUDGET"
    | "CANNOT_CREATE_EXPERIMENT_FOR_REMOVED_BASE_CAMPAIGN"
    | "CANNOT_CREATE_EXPERIMENT_FOR_NON_PROPOSED_DRAFT"
    | "CUSTOMER_CANNOT_CREATE_EXPERIMENT"
    | "CAMPAIGN_CANNOT_CREATE_EXPERIMENT"
    | "EXPERIMENT_DURATIONS_MUST_NOT_OVERLAP"
    | "EXPERIMENT_DURATION_MUST_BE_WITHIN_CAMPAIGN_DURATION"
    | "CANNOT_MUTATE_EXPERIMENT_DUE_TO_STATUS"
    | (string & {});
  /** The reasons for the currency code error */
  currencyCodeError?: "UNSPECIFIED" | "UNKNOWN" | "UNSUPPORTED" | (string & {});
  /** An error with a Campaign mutate. */
  campaignError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CANNOT_TARGET_CONTENT_NETWORK"
    | "CANNOT_TARGET_SEARCH_NETWORK"
    | "CANNOT_TARGET_SEARCH_NETWORK_WITHOUT_GOOGLE_SEARCH"
    | "CANNOT_TARGET_GOOGLE_SEARCH_FOR_CPM_CAMPAIGN"
    | "CAMPAIGN_MUST_TARGET_AT_LEAST_ONE_NETWORK"
    | "CANNOT_TARGET_PARTNER_SEARCH_NETWORK"
    | "CANNOT_TARGET_CONTENT_NETWORK_ONLY_WITH_CRITERIA_LEVEL_BIDDING_STRATEGY"
    | "CAMPAIGN_DURATION_MUST_CONTAIN_ALL_RUNNABLE_TRIALS"
    | "CANNOT_MODIFY_FOR_TRIAL_CAMPAIGN"
    | "DUPLICATE_CAMPAIGN_NAME"
    | "INCOMPATIBLE_CAMPAIGN_FIELD"
    | "INVALID_CAMPAIGN_NAME"
    | "INVALID_AD_SERVING_OPTIMIZATION_STATUS"
    | "INVALID_TRACKING_URL"
    | "CANNOT_SET_BOTH_TRACKING_URL_TEMPLATE_AND_TRACKING_SETTING"
    | "MAX_IMPRESSIONS_NOT_IN_RANGE"
    | "TIME_UNIT_NOT_SUPPORTED"
    | "INVALID_OPERATION_IF_SERVING_STATUS_HAS_ENDED"
    | "BUDGET_CANNOT_BE_SHARED"
    | "CAMPAIGN_CANNOT_USE_SHARED_BUDGET"
    | "CANNOT_CHANGE_BUDGET_ON_CAMPAIGN_WITH_TRIALS"
    | "CAMPAIGN_LABEL_DOES_NOT_EXIST"
    | "CAMPAIGN_LABEL_ALREADY_EXISTS"
    | "MISSING_SHOPPING_SETTING"
    | "INVALID_SHOPPING_SALES_COUNTRY"
    | "ADVERTISING_CHANNEL_TYPE_NOT_AVAILABLE_FOR_ACCOUNT_TYPE"
    | "INVALID_ADVERTISING_CHANNEL_SUB_TYPE"
    | "AT_LEAST_ONE_CONVERSION_MUST_BE_SELECTED"
    | "CANNOT_SET_AD_ROTATION_MODE"
    | "CANNOT_MODIFY_START_DATE_IF_ALREADY_STARTED"
    | "CANNOT_SET_DATE_TO_PAST"
    | "MISSING_HOTEL_CUSTOMER_LINK"
    | "INVALID_HOTEL_CUSTOMER_LINK"
    | "MISSING_HOTEL_SETTING"
    | "CANNOT_USE_SHARED_CAMPAIGN_BUDGET_WHILE_PART_OF_CAMPAIGN_GROUP"
    | "APP_NOT_FOUND"
    | "SHOPPING_ENABLE_LOCAL_NOT_SUPPORTED_FOR_CAMPAIGN_TYPE"
    | "MERCHANT_NOT_ALLOWED_FOR_COMPARISON_LISTING_ADS"
    | "INSUFFICIENT_APP_INSTALLS_COUNT"
    | "SENSITIVE_CATEGORY_APP"
    | "HEC_AGREEMENT_REQUIRED"
    | "NOT_COMPATIBLE_WITH_VIEW_THROUGH_CONVERSION_OPTIMIZATION"
    | "INVALID_EXCLUDED_PARENT_ASSET_FIELD_TYPE"
    | "CANNOT_CREATE_APP_PRE_REGISTRATION_FOR_NON_ANDROID_APP"
    | "APP_NOT_AVAILABLE_TO_CREATE_APP_PRE_REGISTRATION_CAMPAIGN"
    | "INCOMPATIBLE_BUDGET_TYPE"
    | "LOCAL_SERVICES_DUPLICATE_CATEGORY_BID"
    | "LOCAL_SERVICES_INVALID_CATEGORY_BID"
    | "LOCAL_SERVICES_MISSING_CATEGORY_BID"
    | "INVALID_STATUS_CHANGE"
    | "MISSING_TRAVEL_CUSTOMER_LINK"
    | "INVALID_TRAVEL_CUSTOMER_LINK"
    | "INVALID_EXCLUDED_PARENT_ASSET_SET_TYPE"
    | "ASSET_SET_NOT_A_HOTEL_PROPERTY_ASSET_SET"
    | "HOTEL_PROPERTY_ASSET_SET_ONLY_FOR_PERFORMANCE_MAX_FOR_TRAVEL_GOALS"
    | "AVERAGE_DAILY_SPEND_TOO_HIGH"
    | "CANNOT_ATTACH_TO_REMOVED_CAMPAIGN_GROUP"
    | "CANNOT_ATTACH_TO_BIDDING_STRATEGY"
    | "CANNOT_CHANGE_BUDGET_PERIOD"
    | "NOT_ENOUGH_CONVERSIONS"
    | "CANNOT_SET_MORE_THAN_ONE_CONVERSION_ACTION"
    | "NOT_COMPATIBLE_WITH_BUDGET_TYPE"
    | "NOT_COMPATIBLE_WITH_UPLOAD_CLICKS_CONVERSION"
    | "APP_ID_MUST_MATCH_CONVERSION_ACTION_APP_ID"
    | "CONVERSION_ACTION_WITH_DOWNLOAD_CATEGORY_NOT_ALLOWED"
    | "CONVERSION_ACTION_WITH_DOWNLOAD_CATEGORY_REQUIRED"
    | "CONVERSION_TRACKING_NOT_ENABLED"
    | "NOT_COMPATIBLE_WITH_BIDDING_STRATEGY_TYPE"
    | "NOT_COMPATIBLE_WITH_GOOGLE_ATTRIBUTION_CONVERSIONS"
    | "CONVERSION_LAG_TOO_HIGH"
    | "NOT_LINKED_ADVERTISING_PARTNER"
    | "INVALID_NUMBER_OF_ADVERTISING_PARTNER_IDS"
    | "CANNOT_TARGET_DISPLAY_NETWORK_WITHOUT_YOUTUBE"
    | "CANNOT_LINK_TO_COMPARISON_SHOPPING_SERVICE_ACCOUNT"
    | "CANNOT_TARGET_NETWORK_FOR_COMPARISON_SHOPPING_SERVICE_LINKED_ACCOUNTS"
    | "CANNOT_MODIFY_TEXT_ASSET_AUTOMATION_WITH_ENABLED_TRIAL"
    | "DYNAMIC_TEXT_ASSET_CANNOT_OPT_OUT_WITH_FINAL_URL_EXPANSION_OPT_IN"
    | "CANNOT_SET_CAMPAIGN_KEYWORD_MATCH_TYPE"
    | "CANNOT_DISABLE_BROAD_MATCH_WHEN_KEYWORD_CONVERSION_IN_PROCESS"
    | "CANNOT_DISABLE_BROAD_MATCH_WHEN_TARGETING_BRANDS"
    | "CANNOT_ENABLE_BROAD_MATCH_FOR_BASE_CAMPAIGN_WITH_PROMOTING_TRIAL"
    | "CANNOT_ENABLE_BROAD_MATCH_FOR_PROMOTING_TRIAL_CAMPAIGN"
    | "REQUIRED_BUSINESS_NAME_ASSET_NOT_LINKED"
    | "REQUIRED_LOGO_ASSET_NOT_LINKED"
    | "BRAND_TARGETING_OVERRIDES_NOT_SUPPORTED"
    | "BRAND_GUIDELINES_NOT_ENABLED_FOR_CAMPAIGN"
    | "BRAND_GUIDELINES_MAIN_AND_ACCENT_COLORS_REQUIRED"
    | "BRAND_GUIDELINES_COLOR_INVALID_FORMAT"
    | "BRAND_GUIDELINES_UNSUPPORTED_FONT_FAMILY"
    | "BRAND_GUIDELINES_UNSUPPORTED_CHANNEL"
    | "CANNOT_ENABLE_BRAND_GUIDELINES_FOR_TRAVEL_GOALS"
    | "CUSTOMER_NOT_ALLOWLISTED_FOR_BRAND_GUIDELINES"
    | "THIRD_PARTY_INTEGRATION_PARTNER_NOT_ALLOWED"
    | "THIRD_PARTY_INTEGRATION_PARTNER_SHARE_COST_NOT_ALLOWED"
    | "DUPLICATE_INTERACTION_TYPE"
    | "INVALID_INTERACTION_TYPE"
    | "VIDEO_SEQUENCE_ERROR_SEQUENCE_DEFINITION_REQUIRED"
    | "AI_MAX_MUST_BE_ENABLED"
    | "DURATION_TOO_LONG_FOR_TOTAL_BUDGET"
    | "END_DATE_TIME_REQUIRED_FOR_TOTAL_BUDGET"
    | (string & {});
  /** The reasons for the geo target constant suggestion error. */
  geoTargetConstantSuggestionError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "LOCATION_NAME_SIZE_LIMIT"
    | "LOCATION_NAME_LIMIT"
    | "INVALID_COUNTRY_CODE"
    | "REQUEST_PARAMETERS_UNSET"
    | (string & {});
  /** The reasons for the country code error */
  countryCodeError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INVALID_COUNTRY_CODE"
    | (string & {});
  /** The reason for keyword plan campaign keyword error. */
  keywordPlanCampaignKeywordError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CAMPAIGN_KEYWORD_IS_POSITIVE"
    | (string & {});
  /** The reasons for the asset set link error */
  assetSetLinkError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INCOMPATIBLE_ADVERTISING_CHANNEL_TYPE"
    | "DUPLICATE_FEED_LINK"
    | "INCOMPATIBLE_ASSET_SET_TYPE_WITH_CAMPAIGN_TYPE"
    | "DUPLICATE_ASSET_SET_LINK"
    | "ASSET_SET_LINK_CANNOT_BE_REMOVED"
    | (string & {});
  /** The reasons for the product link error */
  productLinkError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INVALID_OPERATION"
    | "CREATION_NOT_PERMITTED"
    | "INVITATION_EXISTS"
    | "LINK_EXISTS"
    | (string & {});
  /** The reasons for the multiplier error */
  multiplierError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "MULTIPLIER_TOO_HIGH"
    | "MULTIPLIER_TOO_LOW"
    | "TOO_MANY_FRACTIONAL_DIGITS"
    | "MULTIPLIER_NOT_ALLOWED_FOR_BIDDING_STRATEGY"
    | "MULTIPLIER_NOT_ALLOWED_WHEN_BASE_BID_IS_MISSING"
    | "NO_MULTIPLIER_SPECIFIED"
    | "MULTIPLIER_CAUSES_BID_TO_EXCEED_DAILY_BUDGET"
    | "MULTIPLIER_CAUSES_BID_TO_EXCEED_MONTHLY_BUDGET"
    | "MULTIPLIER_CAUSES_BID_TO_EXCEED_CUSTOM_BUDGET"
    | "MULTIPLIER_CAUSES_BID_TO_EXCEED_MAX_ALLOWED_BID"
    | "BID_LESS_THAN_MIN_ALLOWED_BID_WITH_MULTIPLIER"
    | "MULTIPLIER_AND_BIDDING_STRATEGY_TYPE_MISMATCH"
    | (string & {});
  /** The reasons for the string format error */
  stringFormatError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ILLEGAL_CHARS"
    | "INVALID_FORMAT"
    | (string & {});
  /** The reasons for the ad group customizer error. */
  adGroupCustomizerError?: "UNSPECIFIED" | "UNKNOWN" | (string & {});
  /** The reasons for the custom interest error */
  customInterestError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "NAME_ALREADY_USED"
    | "CUSTOM_INTEREST_MEMBER_ID_AND_TYPE_PARAMETER_NOT_PRESENT_IN_REMOVE"
    | "TYPE_AND_PARAMETER_NOT_FOUND"
    | "TYPE_AND_PARAMETER_ALREADY_EXISTED"
    | "INVALID_CUSTOM_INTEREST_MEMBER_TYPE"
    | "CANNOT_REMOVE_WHILE_IN_USE"
    | "CANNOT_CHANGE_TYPE"
    | (string & {});
  /** The reasons for the account link status change error */
  accountLinkError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INVALID_STATUS"
    | "PERMISSION_DENIED"
    | (string & {});
  /** The reasons for the billing setup error */
  billingSetupError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CANNOT_USE_EXISTING_AND_NEW_ACCOUNT"
    | "CANNOT_REMOVE_STARTED_BILLING_SETUP"
    | "CANNOT_CHANGE_BILLING_TO_SAME_PAYMENTS_ACCOUNT"
    | "BILLING_SETUP_NOT_PERMITTED_FOR_CUSTOMER_STATUS"
    | "INVALID_PAYMENTS_ACCOUNT"
    | "BILLING_SETUP_NOT_PERMITTED_FOR_CUSTOMER_CATEGORY"
    | "INVALID_START_TIME_TYPE"
    | "THIRD_PARTY_ALREADY_HAS_BILLING"
    | "BILLING_SETUP_IN_PROGRESS"
    | "NO_SIGNUP_PERMISSION"
    | "CHANGE_OF_BILL_TO_IN_PROGRESS"
    | "PAYMENTS_PROFILE_NOT_FOUND"
    | "PAYMENTS_ACCOUNT_NOT_FOUND"
    | "PAYMENTS_PROFILE_INELIGIBLE"
    | "PAYMENTS_ACCOUNT_INELIGIBLE"
    | "CUSTOMER_NEEDS_INTERNAL_APPROVAL"
    | "PAYMENTS_PROFILE_NEEDS_SERVICE_AGREEMENT_ACCEPTANCE"
    | "PAYMENTS_ACCOUNT_INELIGIBLE_CURRENCY_CODE_MISMATCH"
    | "FUTURE_START_TIME_PROHIBITED"
    | "TOO_MANY_BILLING_SETUPS_FOR_PAYMENTS_ACCOUNT"
    | (string & {});
  /** The reasons for the string length error */
  stringLengthError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "EMPTY"
    | "TOO_SHORT"
    | "TOO_LONG"
    | (string & {});
  /** The reasons for the conversion action error */
  conversionActionError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "DUPLICATE_NAME"
    | "DUPLICATE_APP_ID"
    | "TWO_CONVERSION_ACTIONS_BIDDING_ON_SAME_APP_DOWNLOAD"
    | "BIDDING_ON_SAME_APP_DOWNLOAD_AS_GLOBAL_ACTION"
    | "DATA_DRIVEN_MODEL_WAS_NEVER_GENERATED"
    | "DATA_DRIVEN_MODEL_EXPIRED"
    | "DATA_DRIVEN_MODEL_STALE"
    | "DATA_DRIVEN_MODEL_UNKNOWN"
    | "CREATION_NOT_SUPPORTED"
    | "UPDATE_NOT_SUPPORTED"
    | "CANNOT_SET_RULE_BASED_ATTRIBUTION_MODELS"
    | (string & {});
  /** The reasons for the Smart campaign error */
  smartCampaignError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INVALID_BUSINESS_LOCATION_ID"
    | "INVALID_CAMPAIGN"
    | "BUSINESS_NAME_OR_BUSINESS_LOCATION_ID_MISSING"
    | "REQUIRED_SUGGESTION_FIELD_MISSING"
    | "GEO_TARGETS_REQUIRED"
    | "CANNOT_DETERMINE_SUGGESTION_LOCALE"
    | "FINAL_URL_NOT_CRAWLABLE"
    | (string & {});
  /** The reasons for the ad group criterion customizer error. */
  adGroupCriterionCustomizerError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CRITERION_IS_NOT_KEYWORD"
    | (string & {});
  /** The reasons for the conversion upload error */
  conversionUploadError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "TOO_MANY_CONVERSIONS_IN_REQUEST"
    | "UNPARSEABLE_GCLID"
    | "CONVERSION_PRECEDES_EVENT"
    | "EXPIRED_EVENT"
    | "TOO_RECENT_EVENT"
    | "EVENT_NOT_FOUND"
    | "UNAUTHORIZED_CUSTOMER"
    | "TOO_RECENT_CONVERSION_ACTION"
    | "CONVERSION_TRACKING_NOT_ENABLED_AT_IMPRESSION_TIME"
    | "EXTERNAL_ATTRIBUTION_DATA_SET_FOR_NON_EXTERNALLY_ATTRIBUTED_CONVERSION_ACTION"
    | "EXTERNAL_ATTRIBUTION_DATA_NOT_SET_FOR_EXTERNALLY_ATTRIBUTED_CONVERSION_ACTION"
    | "ORDER_ID_NOT_PERMITTED_FOR_EXTERNALLY_ATTRIBUTED_CONVERSION_ACTION"
    | "ORDER_ID_ALREADY_IN_USE"
    | "DUPLICATE_ORDER_ID"
    | "TOO_RECENT_CALL"
    | "EXPIRED_CALL"
    | "CALL_NOT_FOUND"
    | "CONVERSION_PRECEDES_CALL"
    | "CONVERSION_TRACKING_NOT_ENABLED_AT_CALL_TIME"
    | "UNPARSEABLE_CALLERS_PHONE_NUMBER"
    | "CLICK_CONVERSION_ALREADY_EXISTS"
    | "CALL_CONVERSION_ALREADY_EXISTS"
    | "DUPLICATE_CLICK_CONVERSION_IN_REQUEST"
    | "DUPLICATE_CALL_CONVERSION_IN_REQUEST"
    | "CUSTOM_VARIABLE_NOT_ENABLED"
    | "CUSTOM_VARIABLE_VALUE_CONTAINS_PII"
    | "INVALID_CUSTOMER_FOR_CLICK"
    | "INVALID_CUSTOMER_FOR_CALL"
    | "CONVERSION_NOT_COMPLIANT_WITH_ATT_POLICY"
    | "CLICK_NOT_FOUND"
    | "INVALID_USER_IDENTIFIER"
    | "EXTERNALLY_ATTRIBUTED_CONVERSION_ACTION_NOT_PERMITTED_WITH_USER_IDENTIFIER"
    | "UNSUPPORTED_USER_IDENTIFIER"
    | "GBRAID_WBRAID_BOTH_SET"
    | "UNPARSEABLE_WBRAID"
    | "UNPARSEABLE_GBRAID"
    | "ONE_PER_CLICK_CONVERSION_ACTION_NOT_PERMITTED_WITH_BRAID"
    | "CUSTOMER_DATA_POLICY_PROHIBITS_ENHANCED_CONVERSIONS"
    | "CUSTOMER_NOT_ACCEPTED_CUSTOMER_DATA_TERMS"
    | "ORDER_ID_CONTAINS_PII"
    | "CUSTOMER_NOT_ENABLED_ENHANCED_CONVERSIONS_FOR_LEADS"
    | "INVALID_JOB_ID"
    | "NO_CONVERSION_ACTION_FOUND"
    | "INVALID_CONVERSION_ACTION_TYPE"
    | (string & {});
  /** The reasons for the campaign conversion goal error */
  campaignConversionGoalError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CANNOT_USE_CAMPAIGN_GOAL_FOR_SEARCH_ADS_360_MANAGED_CAMPAIGN"
    | "CANNOT_USE_STORE_SALE_GOAL_FOR_PERFORMANCE_MAX_CAMPAIGN"
    | (string & {});
  /** The reasons for the change event error */
  changeEventError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "START_DATE_TOO_OLD"
    | "CHANGE_DATE_RANGE_INFINITE"
    | "CHANGE_DATE_RANGE_NEGATIVE"
    | "LIMIT_NOT_SPECIFIED"
    | "INVALID_LIMIT_CLAUSE"
    | (string & {});
  /** The reasons for the conversion adjustment upload error */
  conversionAdjustmentUploadError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "TOO_RECENT_CONVERSION_ACTION"
    | "CONVERSION_ALREADY_RETRACTED"
    | "CONVERSION_NOT_FOUND"
    | "CONVERSION_EXPIRED"
    | "ADJUSTMENT_PRECEDES_CONVERSION"
    | "MORE_RECENT_RESTATEMENT_FOUND"
    | "TOO_RECENT_CONVERSION"
    | "CANNOT_RESTATE_CONVERSION_ACTION_THAT_ALWAYS_USES_DEFAULT_CONVERSION_VALUE"
    | "TOO_MANY_ADJUSTMENTS_IN_REQUEST"
    | "TOO_MANY_ADJUSTMENTS"
    | "RESTATEMENT_ALREADY_EXISTS"
    | "DUPLICATE_ADJUSTMENT_IN_REQUEST"
    | "CUSTOMER_NOT_ACCEPTED_CUSTOMER_DATA_TERMS"
    | "CONVERSION_ACTION_NOT_ELIGIBLE_FOR_ENHANCEMENT"
    | "INVALID_USER_IDENTIFIER"
    | "UNSUPPORTED_USER_IDENTIFIER"
    | "GCLID_DATE_TIME_PAIR_AND_ORDER_ID_BOTH_SET"
    | "CONVERSION_ALREADY_ENHANCED"
    | "DUPLICATE_ENHANCEMENT_IN_REQUEST"
    | "CUSTOMER_DATA_POLICY_PROHIBITS_ENHANCEMENT"
    | "MISSING_ORDER_ID_FOR_WEBPAGE"
    | "ORDER_ID_CONTAINS_PII"
    | "INVALID_JOB_ID"
    | "NO_CONVERSION_ACTION_FOUND"
    | "INVALID_CONVERSION_ACTION_TYPE"
    | (string & {});
  /** An error with a Video Campaign mutate. */
  videoCampaignError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "MUTATE_REQUIRES_RESERVATION"
    | (string & {});
  /** The reasons for the operation access denied error */
  operationAccessDeniedError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ACTION_NOT_PERMITTED"
    | "CREATE_OPERATION_NOT_PERMITTED"
    | "REMOVE_OPERATION_NOT_PERMITTED"
    | "UPDATE_OPERATION_NOT_PERMITTED"
    | "MUTATE_ACTION_NOT_PERMITTED_FOR_CLIENT"
    | "OPERATION_NOT_PERMITTED_FOR_CAMPAIGN_TYPE"
    | "CREATE_AS_REMOVED_NOT_PERMITTED"
    | "OPERATION_NOT_PERMITTED_FOR_REMOVED_RESOURCE"
    | "OPERATION_NOT_PERMITTED_FOR_AD_GROUP_TYPE"
    | "MUTATE_NOT_PERMITTED_FOR_CUSTOMER"
    | (string & {});
  /** The reasons for the new resource creation error */
  newResourceCreationError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CANNOT_SET_ID_FOR_CREATE"
    | "DUPLICATE_TEMP_IDS"
    | "TEMP_ID_RESOURCE_HAD_ERRORS"
    | (string & {});
  /** The reasons for YouTube video registration errors. */
  youtubeVideoRegistrationError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "VIDEO_NOT_FOUND"
    | "VIDEO_NOT_ACCESSIBLE"
    | "VIDEO_NOT_ELIGIBLE"
    | (string & {});
  /** The reasons for the header error. */
  headerError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INVALID_LOGIN_CUSTOMER_ID"
    | "INVALID_LINKED_CUSTOMER_ID"
    | (string & {});
  /** The reasons for the shared set error */
  sharedSetError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CUSTOMER_CANNOT_CREATE_SHARED_SET_OF_THIS_TYPE"
    | "DUPLICATE_NAME"
    | "SHARED_SET_REMOVED"
    | "SHARED_SET_IN_USE"
    | (string & {});
  /** The reasons for the campaign criterion error */
  campaignCriterionError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CONCRETE_TYPE_REQUIRED"
    | "INVALID_PLACEMENT_URL"
    | "CANNOT_EXCLUDE_CRITERIA_TYPE"
    | "CANNOT_SET_STATUS_FOR_CRITERIA_TYPE"
    | "CANNOT_SET_STATUS_FOR_EXCLUDED_CRITERIA"
    | "CANNOT_TARGET_AND_EXCLUDE"
    | "TOO_MANY_OPERATIONS"
    | "OPERATOR_NOT_SUPPORTED_FOR_CRITERION_TYPE"
    | "SHOPPING_CAMPAIGN_SALES_COUNTRY_NOT_SUPPORTED_FOR_SALES_CHANNEL"
    | "CANNOT_ADD_EXISTING_FIELD"
    | "CANNOT_UPDATE_NEGATIVE_CRITERION"
    | "CANNOT_SET_NEGATIVE_KEYWORD_THEME_CONSTANT_CRITERION"
    | "INVALID_KEYWORD_THEME_CONSTANT"
    | "MISSING_KEYWORD_THEME_CONSTANT_OR_FREE_FORM_KEYWORD_THEME"
    | "CANNOT_TARGET_BOTH_PROXIMITY_AND_LOCATION_CRITERIA_FOR_SMART_CAMPAIGN"
    | "CANNOT_TARGET_MULTIPLE_PROXIMITY_CRITERIA_FOR_SMART_CAMPAIGN"
    | "LOCATION_NOT_LAUNCHED_FOR_LOCAL_SERVICES_CAMPAIGN"
    | "LOCATION_INVALID_FOR_LOCAL_SERVICES_CAMPAIGN"
    | "CANNOT_TARGET_COUNTRY_FOR_LOCAL_SERVICES_CAMPAIGN"
    | "LOCATION_NOT_IN_HOME_COUNTRY_FOR_LOCAL_SERVICES_CAMPAIGN"
    | "CANNOT_ADD_OR_REMOVE_LOCATION_FOR_LOCAL_SERVICES_CAMPAIGN"
    | "AT_LEAST_ONE_POSITIVE_LOCATION_REQUIRED_FOR_LOCAL_SERVICES_CAMPAIGN"
    | "AT_LEAST_ONE_LOCAL_SERVICE_ID_CRITERION_REQUIRED_FOR_LOCAL_SERVICES_CAMPAIGN"
    | "LOCAL_SERVICE_ID_NOT_FOUND_FOR_CATEGORY"
    | "CANNOT_ATTACH_BRAND_LIST_TO_NON_QUALIFIED_SEARCH_CAMPAIGN"
    | "CANNOT_REMOVE_ALL_LOCATIONS_DUE_TO_TOO_MANY_COUNTRY_EXCLUSIONS"
    | "INVALID_VIDEO_LINEUP_ID"
    | (string & {});
  /** The reasons for the shared criterion error */
  sharedCriterionError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CRITERION_TYPE_NOT_ALLOWED_FOR_SHARED_SET_TYPE"
    | (string & {});
  /** The reasons for the mutate job error */
  partialFailureError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "PARTIAL_FAILURE_MODE_REQUIRED"
    | (string & {});
  /** The reasons for the campaign goal config error. */
  campaignGoalConfigError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "GOAL_NOT_FOUND"
    | "CAMPAIGN_NOT_FOUND"
    | "HIGH_LIFETIME_VALUE_PRESENT_BUT_VALUE_ABSENT"
    | "HIGH_LIFETIME_VALUE_LESS_THAN_OR_EQUAL_TO_VALUE"
    | "CUSTOMER_LIFECYCLE_OPTIMIZATION_CAMPAIGN_TYPE_NOT_SUPPORTED"
    | "CUSTOMER_NOT_ALLOWLISTED_FOR_RETENTION_ONLY"
    | (string & {});
  /** The reasons for the feed item set error */
  feedItemSetError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "FEED_ITEM_SET_REMOVED"
    | "CANNOT_CLEAR_DYNAMIC_FILTER"
    | "CANNOT_CREATE_DYNAMIC_FILTER"
    | "INVALID_FEED_TYPE"
    | "DUPLICATE_NAME"
    | "WRONG_DYNAMIC_FILTER_FOR_FEED_TYPE"
    | "DYNAMIC_FILTER_INVALID_CHAIN_IDS"
    | (string & {});
  /** An error with the query */
  queryError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "QUERY_ERROR"
    | "BAD_ENUM_CONSTANT"
    | "BAD_ESCAPE_SEQUENCE"
    | "BAD_FIELD_NAME"
    | "BAD_LIMIT_VALUE"
    | "BAD_NUMBER"
    | "BAD_OPERATOR"
    | "BAD_PARAMETER_NAME"
    | "BAD_PARAMETER_VALUE"
    | "BAD_RESOURCE_TYPE_IN_FROM_CLAUSE"
    | "BAD_SYMBOL"
    | "BAD_VALUE"
    | "DATE_RANGE_TOO_WIDE"
    | "DATE_RANGE_TOO_NARROW"
    | "EXPECTED_AND"
    | "EXPECTED_BY"
    | "EXPECTED_DIMENSION_FIELD_IN_SELECT_CLAUSE"
    | "EXPECTED_FILTERS_ON_DATE_RANGE"
    | "EXPECTED_FROM"
    | "EXPECTED_LIST"
    | "EXPECTED_REFERENCED_FIELD_IN_SELECT_CLAUSE"
    | "EXPECTED_SELECT"
    | "EXPECTED_SINGLE_VALUE"
    | "EXPECTED_VALUE_WITH_BETWEEN_OPERATOR"
    | "INVALID_DATE_FORMAT"
    | "MISALIGNED_DATE_FOR_FILTER"
    | "INVALID_STRING_VALUE"
    | "INVALID_VALUE_WITH_BETWEEN_OPERATOR"
    | "INVALID_VALUE_WITH_DURING_OPERATOR"
    | "INVALID_VALUE_WITH_LIKE_OPERATOR"
    | "OPERATOR_FIELD_MISMATCH"
    | "PROHIBITED_EMPTY_LIST_IN_CONDITION"
    | "PROHIBITED_ENUM_CONSTANT"
    | "PROHIBITED_FIELD_COMBINATION_IN_SELECT_CLAUSE"
    | "PROHIBITED_FIELD_IN_ORDER_BY_CLAUSE"
    | "PROHIBITED_FIELD_IN_SELECT_CLAUSE"
    | "PROHIBITED_FIELD_IN_WHERE_CLAUSE"
    | "PROHIBITED_RESOURCE_TYPE_IN_FROM_CLAUSE"
    | "PROHIBITED_RESOURCE_TYPE_IN_SELECT_CLAUSE"
    | "PROHIBITED_RESOURCE_TYPE_IN_WHERE_CLAUSE"
    | "PROHIBITED_METRIC_IN_SELECT_OR_WHERE_CLAUSE"
    | "PROHIBITED_SEGMENT_IN_SELECT_OR_WHERE_CLAUSE"
    | "PROHIBITED_SEGMENT_WITH_METRIC_IN_SELECT_OR_WHERE_CLAUSE"
    | "PROHIBITED_FIELD_OR_SEGMENT_WITH_METRIC"
    | "LIMIT_VALUE_TOO_LOW"
    | "PROHIBITED_NEWLINE_IN_STRING"
    | "PROHIBITED_VALUE_COMBINATION_IN_LIST"
    | "PROHIBITED_VALUE_COMBINATION_WITH_BETWEEN_OPERATOR"
    | "STRING_NOT_TERMINATED"
    | "TOO_MANY_SEGMENTS"
    | "UNEXPECTED_END_OF_QUERY"
    | "UNEXPECTED_FROM_CLAUSE"
    | "UNRECOGNIZED_FIELD"
    | "UNEXPECTED_INPUT"
    | "REQUESTED_METRICS_FOR_MANAGER"
    | "FILTER_HAS_TOO_MANY_VALUES"
    | "REQUIRED_SEGMENT_FIELD_MISSING"
    | (string & {});
  /** The reasons for the image error */
  imageError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INVALID_IMAGE"
    | "STORAGE_ERROR"
    | "BAD_REQUEST"
    | "UNEXPECTED_SIZE"
    | "ANIMATED_NOT_ALLOWED"
    | "ANIMATION_TOO_LONG"
    | "SERVER_ERROR"
    | "CMYK_JPEG_NOT_ALLOWED"
    | "FLASH_NOT_ALLOWED"
    | "FLASH_WITHOUT_CLICKTAG"
    | "FLASH_ERROR_AFTER_FIXING_CLICK_TAG"
    | "ANIMATED_VISUAL_EFFECT"
    | "FLASH_ERROR"
    | "LAYOUT_PROBLEM"
    | "PROBLEM_READING_IMAGE_FILE"
    | "ERROR_STORING_IMAGE"
    | "ASPECT_RATIO_NOT_ALLOWED"
    | "FLASH_HAS_NETWORK_OBJECTS"
    | "FLASH_HAS_NETWORK_METHODS"
    | "FLASH_HAS_URL"
    | "FLASH_HAS_MOUSE_TRACKING"
    | "FLASH_HAS_RANDOM_NUM"
    | "FLASH_SELF_TARGETS"
    | "FLASH_BAD_GETURL_TARGET"
    | "FLASH_VERSION_NOT_SUPPORTED"
    | "FLASH_WITHOUT_HARD_CODED_CLICK_URL"
    | "INVALID_FLASH_FILE"
    | "FAILED_TO_FIX_CLICK_TAG_IN_FLASH"
    | "FLASH_ACCESSES_NETWORK_RESOURCES"
    | "FLASH_EXTERNAL_JS_CALL"
    | "FLASH_EXTERNAL_FS_CALL"
    | "FILE_TOO_LARGE"
    | "IMAGE_DATA_TOO_LARGE"
    | "IMAGE_PROCESSING_ERROR"
    | "IMAGE_TOO_SMALL"
    | "INVALID_INPUT"
    | "PROBLEM_READING_FILE"
    | "IMAGE_CONSTRAINTS_VIOLATED"
    | "FORMAT_NOT_ALLOWED"
    | (string & {});
  /** The reasons for the feed item set link error */
  feedItemSetLinkError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "FEED_ID_MISMATCH"
    | "NO_MUTATE_ALLOWED_FOR_DYNAMIC_SET"
    | (string & {});
  /** The reasons for the id error */
  idError?: "UNSPECIFIED" | "UNKNOWN" | "NOT_FOUND" | (string & {});
  /** An error encountered when trying to authorize a user. */
  authorizationError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "USER_PERMISSION_DENIED"
    | "DEVELOPER_TOKEN_NOT_ON_ALLOWLIST"
    | "DEVELOPER_TOKEN_PROHIBITED"
    | "PROJECT_DISABLED"
    | "AUTHORIZATION_ERROR"
    | "ACTION_NOT_PERMITTED"
    | "INCOMPLETE_SIGNUP"
    | "CUSTOMER_NOT_ENABLED"
    | "MISSING_TOS"
    | "DEVELOPER_TOKEN_NOT_APPROVED"
    | "INVALID_LOGIN_CUSTOMER_ID_SERVING_CUSTOMER_ID_COMBINATION"
    | "SERVICE_ACCESS_DENIED"
    | "ACCESS_DENIED_FOR_ACCOUNT_TYPE"
    | "METRIC_ACCESS_DENIED"
    | "CLOUD_PROJECT_NOT_UNDER_ORGANIZATION"
    | "ACTION_NOT_PERMITTED_FOR_SUSPENDED_ACCOUNT"
    | (string & {});
  /** The reasons for the asset set asset error */
  assetSetAssetError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INVALID_ASSET_TYPE"
    | "INVALID_ASSET_SET_TYPE"
    | "DUPLICATE_EXTERNAL_KEY"
    | "PARENT_LINKAGE_DOES_NOT_EXIST"
    | (string & {});
  /** Indicates failure to properly authenticate user. */
  adGroupCriterionError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "AD_GROUP_CRITERION_LABEL_DOES_NOT_EXIST"
    | "AD_GROUP_CRITERION_LABEL_ALREADY_EXISTS"
    | "CANNOT_ADD_LABEL_TO_NEGATIVE_CRITERION"
    | "TOO_MANY_OPERATIONS"
    | "CANT_UPDATE_NEGATIVE"
    | "CONCRETE_TYPE_REQUIRED"
    | "BID_INCOMPATIBLE_WITH_ADGROUP"
    | "CANNOT_TARGET_AND_EXCLUDE"
    | "ILLEGAL_URL"
    | "INVALID_KEYWORD_TEXT"
    | "INVALID_DESTINATION_URL"
    | "MISSING_DESTINATION_URL_TAG"
    | "KEYWORD_LEVEL_BID_NOT_SUPPORTED_FOR_MANUALCPM"
    | "INVALID_USER_STATUS"
    | "CANNOT_ADD_CRITERIA_TYPE"
    | "CANNOT_EXCLUDE_CRITERIA_TYPE"
    | "CAMPAIGN_TYPE_NOT_COMPATIBLE_WITH_PARTIAL_FAILURE"
    | "OPERATIONS_FOR_TOO_MANY_SHOPPING_ADGROUPS"
    | "CANNOT_MODIFY_URL_FIELDS_WITH_DUPLICATE_ELEMENTS"
    | "CANNOT_SET_WITHOUT_FINAL_URLS"
    | "CANNOT_CLEAR_FINAL_URLS_IF_FINAL_MOBILE_URLS_EXIST"
    | "CANNOT_CLEAR_FINAL_URLS_IF_FINAL_APP_URLS_EXIST"
    | "CANNOT_CLEAR_FINAL_URLS_IF_TRACKING_URL_TEMPLATE_EXISTS"
    | "CANNOT_CLEAR_FINAL_URLS_IF_URL_CUSTOM_PARAMETERS_EXIST"
    | "CANNOT_SET_BOTH_DESTINATION_URL_AND_FINAL_URLS"
    | "CANNOT_SET_BOTH_DESTINATION_URL_AND_TRACKING_URL_TEMPLATE"
    | "FINAL_URLS_NOT_SUPPORTED_FOR_CRITERION_TYPE"
    | "FINAL_MOBILE_URLS_NOT_SUPPORTED_FOR_CRITERION_TYPE"
    | (string & {});
  /** The reason for keyword plan campaign error. */
  keywordPlanCampaignError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INVALID_NAME"
    | "INVALID_LANGUAGES"
    | "INVALID_GEOS"
    | "DUPLICATE_NAME"
    | "MAX_GEOS_EXCEEDED"
    | "MAX_LANGUAGES_EXCEEDED"
    | (string & {});
  /** The reasons for the feed item target error */
  feedItemTargetError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "MUST_SET_TARGET_ONEOF_ON_CREATE"
    | "FEED_ITEM_TARGET_ALREADY_EXISTS"
    | "FEED_ITEM_SCHEDULES_CANNOT_OVERLAP"
    | "TARGET_LIMIT_EXCEEDED_FOR_GIVEN_TYPE"
    | "TOO_MANY_SCHEDULES_PER_DAY"
    | "CANNOT_HAVE_ENABLED_CAMPAIGN_AND_ENABLED_AD_GROUP_TARGETS"
    | "DUPLICATE_AD_SCHEDULE"
    | "DUPLICATE_KEYWORD"
    | (string & {});
  /** The reasons for the asset group asset error */
  assetGroupAssetError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "DUPLICATE_RESOURCE"
    | "EXPANDABLE_TAGS_NOT_ALLOWED_IN_DESCRIPTION"
    | "AD_CUSTOMIZER_NOT_SUPPORTED"
    | "HOTEL_PROPERTY_ASSET_NOT_LINKED_TO_CAMPAIGN"
    | (string & {});
  /** The reasons for an identity verification error. */
  identityVerificationError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "NO_EFFECTIVE_BILLING"
    | "BILLING_NOT_ON_MONTHLY_INVOICING"
    | "VERIFICATION_ALREADY_STARTED"
    | (string & {});
  /** The reasons for the customer error */
  customerError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "STATUS_CHANGE_DISALLOWED"
    | "ACCOUNT_NOT_SET_UP"
    | "CREATION_DENIED_FOR_POLICY_VIOLATION"
    | "CREATION_DENIED_INELIGIBLE_MCC"
    | (string & {});
  /** The reasons for the function parsing error */
  functionParsingError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "NO_MORE_INPUT"
    | "EXPECTED_CHARACTER"
    | "UNEXPECTED_SEPARATOR"
    | "UNMATCHED_LEFT_BRACKET"
    | "UNMATCHED_RIGHT_BRACKET"
    | "TOO_MANY_NESTED_FUNCTIONS"
    | "MISSING_RIGHT_HAND_OPERAND"
    | "INVALID_OPERATOR_NAME"
    | "FEED_ATTRIBUTE_OPERAND_ARGUMENT_NOT_INTEGER"
    | "NO_OPERANDS"
    | "TOO_MANY_OPERANDS"
    | (string & {});
  /** The reasons for media uploading errors. */
  mediaUploadError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "FILE_TOO_BIG"
    | "UNPARSEABLE_IMAGE"
    | "ANIMATED_IMAGE_NOT_ALLOWED"
    | "FORMAT_NOT_ALLOWED"
    | "EXTERNAL_URL_NOT_ALLOWED"
    | "INVALID_URL_REFERENCE"
    | "MISSING_PRIMARY_MEDIA_BUNDLE_ENTRY"
    | "ANIMATED_VISUAL_EFFECT"
    | "ANIMATION_TOO_LONG"
    | "ASPECT_RATIO_NOT_ALLOWED"
    | "AUDIO_NOT_ALLOWED_IN_MEDIA_BUNDLE"
    | "CMYK_JPEG_NOT_ALLOWED"
    | "FLASH_NOT_ALLOWED"
    | "FRAME_RATE_TOO_HIGH"
    | "GOOGLE_WEB_DESIGNER_ZIP_FILE_NOT_PUBLISHED"
    | "IMAGE_CONSTRAINTS_VIOLATED"
    | "INVALID_MEDIA_BUNDLE"
    | "INVALID_MEDIA_BUNDLE_ENTRY"
    | "INVALID_MIME_TYPE"
    | "INVALID_PATH"
    | "LAYOUT_PROBLEM"
    | "MALFORMED_URL"
    | "MEDIA_BUNDLE_NOT_ALLOWED"
    | "MEDIA_BUNDLE_NOT_COMPATIBLE_TO_PRODUCT_TYPE"
    | "MEDIA_BUNDLE_REJECTED_BY_MULTIPLE_ASSET_SPECS"
    | "TOO_MANY_FILES_IN_MEDIA_BUNDLE"
    | "UNSUPPORTED_GOOGLE_WEB_DESIGNER_ENVIRONMENT"
    | "UNSUPPORTED_HTML5_FEATURE"
    | "URL_IN_MEDIA_BUNDLE_NOT_SSL_COMPLIANT"
    | "VIDEO_FILE_NAME_TOO_LONG"
    | "VIDEO_MULTIPLE_FILES_WITH_SAME_NAME"
    | "VIDEO_NOT_ALLOWED_IN_MEDIA_BUNDLE"
    | "CANNOT_UPLOAD_MEDIA_TYPE_THROUGH_API"
    | "DIMENSIONS_NOT_ALLOWED"
    | (string & {});
  /** The reasons for the conversion value rule set error */
  conversionValueRuleSetError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CONFLICTING_VALUE_RULE_CONDITIONS"
    | "INVALID_VALUE_RULE"
    | "DIMENSIONS_UPDATE_ONLY_ALLOW_APPEND"
    | "CONDITION_TYPE_NOT_ALLOWED"
    | "DUPLICATE_DIMENSIONS"
    | "INVALID_CAMPAIGN_ID"
    | "CANNOT_PAUSE_UNLESS_ALL_VALUE_RULES_ARE_PAUSED"
    | "SHOULD_PAUSE_WHEN_ALL_VALUE_RULES_ARE_PAUSED"
    | "VALUE_RULES_NOT_SUPPORTED_FOR_CAMPAIGN_TYPE"
    | "INELIGIBLE_CONVERSION_ACTION_CATEGORIES"
    | "DIMENSION_NO_CONDITION_USED_WITH_OTHER_DIMENSIONS"
    | "DIMENSION_NO_CONDITION_NOT_ALLOWED"
    | "UNSUPPORTED_CONVERSION_ACTION_CATEGORIES"
    | "DIMENSION_NOT_SUPPORTED_FOR_CAMPAIGN_TYPE"
    | (string & {});
  /** The reasons for the customer manager link error */
  customerManagerLinkError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "NO_PENDING_INVITE"
    | "SAME_CLIENT_MORE_THAN_ONCE_PER_CALL"
    | "MANAGER_HAS_MAX_NUMBER_OF_LINKED_ACCOUNTS"
    | "CANNOT_UNLINK_ACCOUNT_WITHOUT_ACTIVE_USER"
    | "CANNOT_REMOVE_LAST_CLIENT_ACCOUNT_OWNER"
    | "CANNOT_CHANGE_ROLE_BY_NON_ACCOUNT_OWNER"
    | "CANNOT_CHANGE_ROLE_FOR_NON_ACTIVE_LINK_ACCOUNT"
    | "DUPLICATE_CHILD_FOUND"
    | "TEST_ACCOUNT_LINKS_TOO_MANY_CHILD_ACCOUNTS"
    | (string & {});
  /** Container for enum describing possible merchant center errors. */
  merchantCenterError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "MERCHANT_ID_CANNOT_BE_ACCESSED"
    | "CUSTOMER_NOT_ALLOWED_FOR_SHOPPING_PERFORMANCE_MAX"
    | (string & {});
  /** The reasons for error in automatically created asset removal action. */
  automaticallyCreatedAssetRemovalError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "AD_DOES_NOT_EXIST"
    | "INVALID_AD_TYPE"
    | "ASSET_DOES_NOT_EXIST"
    | "ASSET_FIELD_TYPE_DOES_NOT_MATCH"
    | "NOT_AN_AUTOMATICALLY_CREATED_ASSET"
    | (string & {});
  /** The reasons for the brand guidelines migration error. */
  brandGuidelinesMigrationError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "BRAND_GUIDELINES_ALREADY_ENABLED"
    | "CANNOT_ENABLE_BRAND_GUIDELINES_FOR_REMOVED_CAMPAIGN"
    | "BRAND_GUIDELINES_LOGO_LIMIT_EXCEEDED"
    | "CANNOT_AUTO_POPULATE_BRAND_ASSETS_WHEN_BRAND_ASSETS_PROVIDED"
    | "AUTO_POPULATE_BRAND_ASSETS_REQUIRED_WHEN_BRAND_ASSETS_OMITTED"
    | "TOO_MANY_ENABLE_OPERATIONS"
    | (string & {});
  /** The reasons for the customer client link error */
  customerClientLinkError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CLIENT_ALREADY_INVITED_BY_THIS_MANAGER"
    | "CLIENT_ALREADY_MANAGED_IN_HIERARCHY"
    | "CYCLIC_LINK_NOT_ALLOWED"
    | "CUSTOMER_HAS_TOO_MANY_ACCOUNTS"
    | "CLIENT_HAS_TOO_MANY_INVITATIONS"
    | "CANNOT_HIDE_OR_UNHIDE_MANAGER_ACCOUNTS"
    | "CUSTOMER_HAS_TOO_MANY_ACCOUNTS_AT_MANAGER"
    | "CLIENT_HAS_TOO_MANY_MANAGERS"
    | (string & {});
  /** The reasons for the Audience Insights error */
  audienceInsightsError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "DIMENSION_INCOMPATIBLE_WITH_TOPIC_AUDIENCE_COMBINATIONS"
    | (string & {});
  /** The reasons for the campaign feed error */
  campaignFeedError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "FEED_ALREADY_EXISTS_FOR_PLACEHOLDER_TYPE"
    | "CANNOT_CREATE_FOR_REMOVED_FEED"
    | "CANNOT_CREATE_ALREADY_EXISTING_CAMPAIGN_FEED"
    | "CANNOT_MODIFY_REMOVED_CAMPAIGN_FEED"
    | "INVALID_PLACEHOLDER_TYPE"
    | "MISSING_FEEDMAPPING_FOR_PLACEHOLDER_TYPE"
    | "NO_EXISTING_LOCATION_CUSTOMER_FEED"
    | "LEGACY_FEED_TYPE_READ_ONLY"
    | (string & {});
  /** The reasons for the policy validation parameter error */
  policyValidationParameterError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "UNSUPPORTED_AD_TYPE_FOR_IGNORABLE_POLICY_TOPICS"
    | "UNSUPPORTED_AD_TYPE_FOR_EXEMPT_POLICY_VIOLATION_KEYS"
    | "CANNOT_SET_BOTH_IGNORABLE_POLICY_TOPICS_AND_EXEMPT_POLICY_VIOLATION_KEYS"
    | (string & {});
  /** The reasons for the incentive error */
  incentiveError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INVALID_INCENTIVE_ID"
    | (string & {});
  /** The reasons for the function error */
  functionError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INVALID_FUNCTION_FORMAT"
    | "DATA_TYPE_MISMATCH"
    | "INVALID_CONJUNCTION_OPERANDS"
    | "INVALID_NUMBER_OF_OPERANDS"
    | "INVALID_OPERAND_TYPE"
    | "INVALID_OPERATOR"
    | "INVALID_REQUEST_CONTEXT_TYPE"
    | "INVALID_FUNCTION_FOR_CALL_PLACEHOLDER"
    | "INVALID_FUNCTION_FOR_PLACEHOLDER"
    | "INVALID_OPERAND"
    | "MISSING_CONSTANT_OPERAND_VALUE"
    | "INVALID_CONSTANT_OPERAND_VALUE"
    | "INVALID_NESTING"
    | "MULTIPLE_FEED_IDS_NOT_SUPPORTED"
    | "INVALID_FUNCTION_FOR_FEED_WITH_FIXED_SCHEMA"
    | "INVALID_ATTRIBUTE_NAME"
    | (string & {});
  /** The reasons for the resource access denied error */
  resourceAccessDeniedError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "WRITE_ACCESS_DENIED"
    | (string & {});
  /** The reasons for the audience error */
  audienceError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "NAME_ALREADY_IN_USE"
    | "DIMENSION_INVALID"
    | "AUDIENCE_SEGMENT_NOT_FOUND"
    | "AUDIENCE_SEGMENT_TYPE_NOT_SUPPORTED"
    | "DUPLICATE_AUDIENCE_SEGMENT"
    | "TOO_MANY_SEGMENTS"
    | "TOO_MANY_DIMENSIONS_OF_SAME_TYPE"
    | "IN_USE"
    | "MISSING_ASSET_GROUP_ID"
    | "CANNOT_CHANGE_FROM_CUSTOMER_TO_ASSET_GROUP_SCOPE"
    | (string & {});
  /** The reasons for the shareable preview error. */
  shareablePreviewError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "TOO_MANY_ASSET_GROUPS_IN_REQUEST"
    | "ASSET_GROUP_DOES_NOT_EXIST_UNDER_THIS_CUSTOMER"
    | (string & {});
  /** The reasons for the data link error */
  dataLinkError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "YOUTUBE_CHANNEL_ID_INVALID"
    | "YOUTUBE_VIDEO_ID_INVALID"
    | "YOUTUBE_VIDEO_FROM_DIFFERENT_CHANNEL"
    | "PERMISSION_DENIED"
    | "INVALID_STATUS"
    | "INVALID_UPDATE_STATUS"
    | "INVALID_RESOURCE_NAME"
    | (string & {});
  /** The reasons for the customer lifecycle goal error */
  customerLifecycleGoalError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CUSTOMER_ACQUISITION_VALUE_MISSING"
    | "CUSTOMER_ACQUISITION_INVALID_VALUE"
    | "CUSTOMER_ACQUISITION_INVALID_HIGH_LIFETIME_VALUE"
    | "CUSTOMER_ACQUISITION_VALUE_CANNOT_BE_CLEARED"
    | "CUSTOMER_ACQUISITION_HIGH_LIFETIME_VALUE_CANNOT_BE_CLEARED"
    | "INVALID_EXISTING_USER_LIST"
    | "INVALID_HIGH_LIFETIME_VALUE_USER_LIST"
    | (string & {});
  /** Indicates failure to properly authenticate user. */
  authenticationError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "AUTHENTICATION_ERROR"
    | "CLIENT_CUSTOMER_ID_INVALID"
    | "CUSTOMER_NOT_FOUND"
    | "GOOGLE_ACCOUNT_DELETED"
    | "GOOGLE_ACCOUNT_COOKIE_INVALID"
    | "GOOGLE_ACCOUNT_AUTHENTICATION_FAILED"
    | "GOOGLE_ACCOUNT_USER_AND_ADS_USER_MISMATCH"
    | "LOGIN_COOKIE_REQUIRED"
    | "NOT_ADS_USER"
    | "OAUTH_TOKEN_INVALID"
    | "OAUTH_TOKEN_EXPIRED"
    | "OAUTH_TOKEN_DISABLED"
    | "OAUTH_TOKEN_REVOKED"
    | "OAUTH_TOKEN_HEADER_INVALID"
    | "LOGIN_COOKIE_INVALID"
    | "INVALID_EMAIL_ADDRESS"
    | "USER_ID_INVALID"
    | "TWO_STEP_VERIFICATION_NOT_ENROLLED"
    | "ADVANCED_PROTECTION_NOT_ENROLLED"
    | "ORGANIZATION_NOT_RECOGNIZED"
    | "ORGANIZATION_NOT_APPROVED"
    | "ORGANIZATION_NOT_ASSOCIATED_WITH_DEVELOPER_TOKEN"
    | "DEVELOPER_TOKEN_INVALID"
    | (string & {});
  /** The reasons for the customizer attribute error. */
  customizerAttributeError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "DUPLICATE_CUSTOMIZER_ATTRIBUTE_NAME"
    | (string & {});
  /** An error with an Ad Group Ad mutate. */
  adError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "AD_CUSTOMIZERS_NOT_SUPPORTED_FOR_AD_TYPE"
    | "APPROXIMATELY_TOO_LONG"
    | "APPROXIMATELY_TOO_SHORT"
    | "BAD_SNIPPET"
    | "CANNOT_MODIFY_AD"
    | "CANNOT_SET_BUSINESS_NAME_IF_URL_SET"
    | "CANNOT_SET_FIELD"
    | "CANNOT_SET_FIELD_WITH_ORIGIN_AD_ID_SET"
    | "CANNOT_SET_FIELD_WITH_AD_ID_SET_FOR_SHARING"
    | "CANNOT_SET_ALLOW_FLEXIBLE_COLOR_FALSE"
    | "CANNOT_SET_COLOR_CONTROL_WHEN_NATIVE_FORMAT_SETTING"
    | "CANNOT_SET_URL"
    | "CANNOT_SET_WITHOUT_FINAL_URLS"
    | "CANNOT_SET_WITH_FINAL_URLS"
    | "CANNOT_SET_WITH_URL_DATA"
    | "CANNOT_USE_AD_SUBCLASS_FOR_OPERATOR"
    | "CUSTOMER_NOT_APPROVED_MOBILEADS"
    | "CUSTOMER_NOT_APPROVED_THIRDPARTY_ADS"
    | "CUSTOMER_NOT_APPROVED_THIRDPARTY_REDIRECT_ADS"
    | "CUSTOMER_NOT_ELIGIBLE"
    | "CUSTOMER_NOT_ELIGIBLE_FOR_UPDATING_BEACON_URL"
    | "DIMENSION_ALREADY_IN_UNION"
    | "DIMENSION_MUST_BE_SET"
    | "DIMENSION_NOT_IN_UNION"
    | "DISPLAY_URL_CANNOT_BE_SPECIFIED"
    | "DOMESTIC_PHONE_NUMBER_FORMAT"
    | "EMERGENCY_PHONE_NUMBER"
    | "EMPTY_FIELD"
    | "FEED_ATTRIBUTE_MUST_HAVE_MAPPING_FOR_TYPE_ID"
    | "FEED_ATTRIBUTE_MAPPING_TYPE_MISMATCH"
    | "ILLEGAL_AD_CUSTOMIZER_TAG_USE"
    | "ILLEGAL_TAG_USE"
    | "INCONSISTENT_DIMENSIONS"
    | "INCONSISTENT_STATUS_IN_TEMPLATE_UNION"
    | "INCORRECT_LENGTH"
    | "INELIGIBLE_FOR_UPGRADE"
    | "INVALID_AD_ADDRESS_CAMPAIGN_TARGET"
    | "INVALID_AD_TYPE"
    | "INVALID_ATTRIBUTES_FOR_MOBILE_IMAGE"
    | "INVALID_ATTRIBUTES_FOR_MOBILE_TEXT"
    | "INVALID_CALL_TO_ACTION_TEXT"
    | "INVALID_CHARACTER_FOR_URL"
    | "INVALID_COUNTRY_CODE"
    | "INVALID_EXPANDED_DYNAMIC_SEARCH_AD_TAG"
    | "INVALID_INPUT"
    | "INVALID_MARKUP_LANGUAGE"
    | "INVALID_MOBILE_CARRIER"
    | "INVALID_MOBILE_CARRIER_TARGET"
    | "INVALID_NUMBER_OF_ELEMENTS"
    | "INVALID_PHONE_NUMBER_FORMAT"
    | "INVALID_RICH_MEDIA_CERTIFIED_VENDOR_FORMAT_ID"
    | "INVALID_TEMPLATE_DATA"
    | "INVALID_TEMPLATE_ELEMENT_FIELD_TYPE"
    | "INVALID_TEMPLATE_ID"
    | "LINE_TOO_WIDE"
    | "MISSING_AD_CUSTOMIZER_MAPPING"
    | "MISSING_ADDRESS_COMPONENT"
    | "MISSING_ADVERTISEMENT_NAME"
    | "MISSING_BUSINESS_NAME"
    | "MISSING_DESCRIPTION1"
    | "MISSING_DESCRIPTION2"
    | "MISSING_DESTINATION_URL_TAG"
    | "MISSING_LANDING_PAGE_URL_TAG"
    | "MISSING_DIMENSION"
    | "MISSING_DISPLAY_URL"
    | "MISSING_HEADLINE"
    | "MISSING_HEIGHT"
    | "MISSING_IMAGE"
    | "MISSING_MARKETING_IMAGE_OR_PRODUCT_VIDEOS"
    | "MISSING_MARKUP_LANGUAGES"
    | "MISSING_MOBILE_CARRIER"
    | "MISSING_PHONE"
    | "MISSING_REQUIRED_TEMPLATE_FIELDS"
    | "MISSING_TEMPLATE_FIELD_VALUE"
    | "MISSING_TEXT"
    | "MISSING_VISIBLE_URL"
    | "MISSING_WIDTH"
    | "MULTIPLE_DISTINCT_FEEDS_UNSUPPORTED"
    | "MUST_USE_TEMP_AD_UNION_ID_ON_ADD"
    | "TOO_LONG"
    | "TOO_SHORT"
    | "UNION_DIMENSIONS_CANNOT_CHANGE"
    | "UNKNOWN_ADDRESS_COMPONENT"
    | "UNKNOWN_FIELD_NAME"
    | "UNKNOWN_UNIQUE_NAME"
    | "UNSUPPORTED_DIMENSIONS"
    | "URL_INVALID_SCHEME"
    | "URL_INVALID_TOP_LEVEL_DOMAIN"
    | "URL_MALFORMED"
    | "URL_NO_HOST"
    | "URL_NOT_EQUIVALENT"
    | "URL_HOST_NAME_TOO_LONG"
    | "URL_NO_SCHEME"
    | "URL_NO_TOP_LEVEL_DOMAIN"
    | "URL_PATH_NOT_ALLOWED"
    | "URL_PORT_NOT_ALLOWED"
    | "URL_QUERY_NOT_ALLOWED"
    | "URL_SCHEME_BEFORE_EXPANDED_DYNAMIC_SEARCH_AD_TAG"
    | "USER_DOES_NOT_HAVE_ACCESS_TO_TEMPLATE"
    | "INCONSISTENT_EXPANDABLE_SETTINGS"
    | "INVALID_FORMAT"
    | "INVALID_FIELD_TEXT"
    | "ELEMENT_NOT_PRESENT"
    | "IMAGE_ERROR"
    | "VALUE_NOT_IN_RANGE"
    | "FIELD_NOT_PRESENT"
    | "ADDRESS_NOT_COMPLETE"
    | "ADDRESS_INVALID"
    | "VIDEO_RETRIEVAL_ERROR"
    | "AUDIO_ERROR"
    | "INVALID_YOUTUBE_DISPLAY_URL"
    | "TOO_MANY_PRODUCT_IMAGES"
    | "TOO_MANY_PRODUCT_VIDEOS"
    | "INCOMPATIBLE_AD_TYPE_AND_DEVICE_PREFERENCE"
    | "CALLTRACKING_NOT_SUPPORTED_FOR_COUNTRY"
    | "CARRIER_SPECIFIC_SHORT_NUMBER_NOT_ALLOWED"
    | "DISALLOWED_NUMBER_TYPE"
    | "PHONE_NUMBER_NOT_SUPPORTED_FOR_COUNTRY"
    | "PHONE_NUMBER_NOT_SUPPORTED_WITH_CALLTRACKING_FOR_COUNTRY"
    | "PREMIUM_RATE_NUMBER_NOT_ALLOWED"
    | "VANITY_PHONE_NUMBER_NOT_ALLOWED"
    | "INVALID_CALL_CONVERSION_TYPE_ID"
    | "CANNOT_DISABLE_CALL_CONVERSION_AND_SET_CONVERSION_TYPE_ID"
    | "CANNOT_SET_PATH2_WITHOUT_PATH1"
    | "MISSING_DYNAMIC_SEARCH_ADS_SETTING_DOMAIN_NAME"
    | "INCOMPATIBLE_WITH_RESTRICTION_TYPE"
    | "CUSTOMER_CONSENT_FOR_CALL_RECORDING_REQUIRED"
    | "MISSING_IMAGE_OR_MEDIA_BUNDLE"
    | "PRODUCT_TYPE_NOT_SUPPORTED_IN_THIS_CAMPAIGN"
    | "PLACEHOLDER_CANNOT_HAVE_EMPTY_DEFAULT_VALUE"
    | "PLACEHOLDER_COUNTDOWN_FUNCTION_CANNOT_HAVE_DEFAULT_VALUE"
    | "PLACEHOLDER_DEFAULT_VALUE_MISSING"
    | "UNEXPECTED_PLACEHOLDER_DEFAULT_VALUE"
    | "AD_CUSTOMIZERS_MAY_NOT_BE_ADJACENT"
    | "UPDATING_AD_WITH_NO_ENABLED_ASSOCIATION"
    | "CALL_AD_VERIFICATION_URL_FINAL_URL_DOES_NOT_HAVE_SAME_DOMAIN"
    | "CALL_AD_FINAL_URL_AND_VERIFICATION_URL_CANNOT_BOTH_BE_EMPTY"
    | "TOO_MANY_AD_CUSTOMIZERS"
    | "INVALID_AD_CUSTOMIZER_FORMAT"
    | "NESTED_AD_CUSTOMIZER_SYNTAX"
    | "UNSUPPORTED_AD_CUSTOMIZER_SYNTAX"
    | "UNPAIRED_BRACE_IN_AD_CUSTOMIZER_TAG"
    | "MORE_THAN_ONE_COUNTDOWN_TAG_TYPE_EXISTS"
    | "DATE_TIME_IN_COUNTDOWN_TAG_IS_INVALID"
    | "DATE_TIME_IN_COUNTDOWN_TAG_IS_PAST"
    | "UNRECOGNIZED_AD_CUSTOMIZER_TAG_FOUND"
    | "CUSTOMIZER_TYPE_FORBIDDEN_FOR_FIELD"
    | "INVALID_CUSTOMIZER_ATTRIBUTE_NAME"
    | "STORE_MISMATCH"
    | "MISSING_REQUIRED_IMAGE_ASPECT_RATIO"
    | "MISMATCHED_ASPECT_RATIOS"
    | "DUPLICATE_IMAGE_ACROSS_CAROUSEL_CARDS"
    | "INVALID_YOUTUBE_VIDEO_ASSET_ID_FOR_VIDEO_ADS_SEQUENCING"
    | (string & {});
  /** An error with a URL field mutate. */
  urlFieldError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INVALID_TRACKING_URL_TEMPLATE"
    | "INVALID_TAG_IN_TRACKING_URL_TEMPLATE"
    | "MISSING_TRACKING_URL_TEMPLATE_TAG"
    | "MISSING_PROTOCOL_IN_TRACKING_URL_TEMPLATE"
    | "INVALID_PROTOCOL_IN_TRACKING_URL_TEMPLATE"
    | "MALFORMED_TRACKING_URL_TEMPLATE"
    | "MISSING_HOST_IN_TRACKING_URL_TEMPLATE"
    | "INVALID_TLD_IN_TRACKING_URL_TEMPLATE"
    | "REDUNDANT_NESTED_TRACKING_URL_TEMPLATE_TAG"
    | "INVALID_FINAL_URL"
    | "INVALID_TAG_IN_FINAL_URL"
    | "REDUNDANT_NESTED_FINAL_URL_TAG"
    | "MISSING_PROTOCOL_IN_FINAL_URL"
    | "INVALID_PROTOCOL_IN_FINAL_URL"
    | "MALFORMED_FINAL_URL"
    | "MISSING_HOST_IN_FINAL_URL"
    | "INVALID_TLD_IN_FINAL_URL"
    | "INVALID_FINAL_MOBILE_URL"
    | "INVALID_TAG_IN_FINAL_MOBILE_URL"
    | "REDUNDANT_NESTED_FINAL_MOBILE_URL_TAG"
    | "MISSING_PROTOCOL_IN_FINAL_MOBILE_URL"
    | "INVALID_PROTOCOL_IN_FINAL_MOBILE_URL"
    | "MALFORMED_FINAL_MOBILE_URL"
    | "MISSING_HOST_IN_FINAL_MOBILE_URL"
    | "INVALID_TLD_IN_FINAL_MOBILE_URL"
    | "INVALID_FINAL_APP_URL"
    | "INVALID_TAG_IN_FINAL_APP_URL"
    | "REDUNDANT_NESTED_FINAL_APP_URL_TAG"
    | "MULTIPLE_APP_URLS_FOR_OSTYPE"
    | "INVALID_OSTYPE"
    | "INVALID_PROTOCOL_FOR_APP_URL"
    | "INVALID_PACKAGE_ID_FOR_APP_URL"
    | "URL_CUSTOM_PARAMETERS_COUNT_EXCEEDS_LIMIT"
    | "INVALID_CHARACTERS_IN_URL_CUSTOM_PARAMETER_KEY"
    | "INVALID_CHARACTERS_IN_URL_CUSTOM_PARAMETER_VALUE"
    | "INVALID_TAG_IN_URL_CUSTOM_PARAMETER_VALUE"
    | "REDUNDANT_NESTED_URL_CUSTOM_PARAMETER_TAG"
    | "MISSING_PROTOCOL"
    | "INVALID_PROTOCOL"
    | "INVALID_URL"
    | "DESTINATION_URL_DEPRECATED"
    | "INVALID_TAG_IN_URL"
    | "MISSING_URL_TAG"
    | "DUPLICATE_URL_ID"
    | "INVALID_URL_ID"
    | "FINAL_URL_SUFFIX_MALFORMED"
    | "INVALID_TAG_IN_FINAL_URL_SUFFIX"
    | "INVALID_TOP_LEVEL_DOMAIN"
    | "MALFORMED_TOP_LEVEL_DOMAIN"
    | "MALFORMED_URL"
    | "MISSING_HOST"
    | "NULL_CUSTOM_PARAMETER_VALUE"
    | "VALUE_TRACK_PARAMETER_NOT_SUPPORTED"
    | "UNSUPPORTED_APP_STORE"
    | (string & {});
  /** The reasons for the custom audience error */
  customAudienceError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "NAME_ALREADY_USED"
    | "CANNOT_REMOVE_WHILE_IN_USE"
    | "RESOURCE_ALREADY_REMOVED"
    | "MEMBER_TYPE_AND_PARAMETER_ALREADY_EXISTED"
    | "INVALID_MEMBER_TYPE"
    | "MEMBER_TYPE_AND_VALUE_DOES_NOT_MATCH"
    | "POLICY_VIOLATION"
    | "INVALID_TYPE_CHANGE"
    | (string & {});
  /** The reasons for the language code error */
  languageCodeError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "LANGUAGE_CODE_NOT_FOUND"
    | "INVALID_LANGUAGE_CODE"
    | (string & {});
  /** The reasons for the media file error */
  mediaFileError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CANNOT_CREATE_STANDARD_ICON"
    | "CANNOT_SELECT_STANDARD_ICON_WITH_OTHER_TYPES"
    | "CANNOT_SPECIFY_MEDIA_FILE_ID_AND_DATA"
    | "DUPLICATE_MEDIA"
    | "EMPTY_FIELD"
    | "RESOURCE_REFERENCED_IN_MULTIPLE_OPS"
    | "FIELD_NOT_SUPPORTED_FOR_MEDIA_SUB_TYPE"
    | "INVALID_MEDIA_FILE_ID"
    | "INVALID_MEDIA_SUB_TYPE"
    | "INVALID_MEDIA_FILE_TYPE"
    | "INVALID_MIME_TYPE"
    | "INVALID_REFERENCE_ID"
    | "INVALID_YOU_TUBE_ID"
    | "MEDIA_FILE_FAILED_TRANSCODING"
    | "MEDIA_NOT_TRANSCODED"
    | "MEDIA_TYPE_DOES_NOT_MATCH_MEDIA_FILE_TYPE"
    | "NO_FIELDS_SPECIFIED"
    | "NULL_REFERENCE_ID_AND_MEDIA_ID"
    | "TOO_LONG"
    | "UNSUPPORTED_TYPE"
    | "YOU_TUBE_SERVICE_UNAVAILABLE"
    | "YOU_TUBE_VIDEO_HAS_NON_POSITIVE_DURATION"
    | "YOU_TUBE_VIDEO_NOT_FOUND"
    | (string & {});
  /** The reasons for the ad sharing error */
  adSharingError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "AD_GROUP_ALREADY_CONTAINS_AD"
    | "INCOMPATIBLE_AD_UNDER_AD_GROUP"
    | "CANNOT_SHARE_INACTIVE_AD"
    | (string & {});
  /** The reasons for the size limit error */
  sizeLimitError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "REQUEST_SIZE_LIMIT_EXCEEDED"
    | "RESPONSE_SIZE_LIMIT_EXCEEDED"
    | (string & {});
  /** The reasons for the campaign shared set error */
  campaignSharedSetError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "SHARED_SET_ACCESS_DENIED"
    | (string & {});
  /** An error caused by the request */
  requestError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "RESOURCE_NAME_MISSING"
    | "RESOURCE_NAME_MALFORMED"
    | "BAD_RESOURCE_ID"
    | "INVALID_CUSTOMER_ID"
    | "OPERATION_REQUIRED"
    | "RESOURCE_NOT_FOUND"
    | "INVALID_PAGE_TOKEN"
    | "EXPIRED_PAGE_TOKEN"
    | "INVALID_PAGE_SIZE"
    | "PAGE_SIZE_NOT_SUPPORTED"
    | "REQUIRED_FIELD_MISSING"
    | "IMMUTABLE_FIELD"
    | "TOO_MANY_MUTATE_OPERATIONS"
    | "CANNOT_BE_EXECUTED_BY_MANAGER_ACCOUNT"
    | "CANNOT_MODIFY_FOREIGN_FIELD"
    | "INVALID_ENUM_VALUE"
    | "DEVELOPER_TOKEN_PARAMETER_MISSING"
    | "LOGIN_CUSTOMER_ID_PARAMETER_MISSING"
    | "VALIDATE_ONLY_REQUEST_HAS_PAGE_TOKEN"
    | "CANNOT_RETURN_SUMMARY_ROW_FOR_REQUEST_WITHOUT_METRICS"
    | "CANNOT_RETURN_SUMMARY_ROW_FOR_VALIDATE_ONLY_REQUESTS"
    | "INCONSISTENT_RETURN_SUMMARY_ROW_VALUE"
    | "TOTAL_RESULTS_COUNT_NOT_ORIGINALLY_REQUESTED"
    | "RPC_DEADLINE_TOO_SHORT"
    | "UNSUPPORTED_VERSION"
    | "CLOUD_PROJECT_NOT_FOUND"
    | (string & {});
  /** The reasons for the feed item error */
  feedItemError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CANNOT_CONVERT_ATTRIBUTE_VALUE_FROM_STRING"
    | "CANNOT_OPERATE_ON_REMOVED_FEED_ITEM"
    | "DATE_TIME_MUST_BE_IN_ACCOUNT_TIME_ZONE"
    | "KEY_ATTRIBUTES_NOT_FOUND"
    | "INVALID_URL"
    | "MISSING_KEY_ATTRIBUTES"
    | "KEY_ATTRIBUTES_NOT_UNIQUE"
    | "CANNOT_MODIFY_KEY_ATTRIBUTE_VALUE"
    | "SIZE_TOO_LARGE_FOR_MULTI_VALUE_ATTRIBUTE"
    | "LEGACY_FEED_TYPE_READ_ONLY"
    | (string & {});
  /** The reasons for the access invitation error */
  accessInvitationError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INVALID_EMAIL_ADDRESS"
    | "EMAIL_ADDRESS_ALREADY_HAS_ACCESS"
    | "INVALID_INVITATION_STATUS"
    | "GOOGLE_CONSUMER_ACCOUNT_NOT_ALLOWED"
    | "INVALID_INVITATION_ID"
    | "EMAIL_ADDRESS_ALREADY_HAS_PENDING_INVITATION"
    | "PENDING_INVITATIONS_LIMIT_EXCEEDED"
    | "EMAIL_DOMAIN_POLICY_VIOLATED"
    | (string & {});
  /** The reasons for the currency errors. */
  currencyError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "VALUE_NOT_MULTIPLE_OF_BILLABLE_UNIT"
    | (string & {});
  /** The reasons for the final url expansion asset view error */
  finalUrlExpansionAssetViewError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "MISSING_REQUIRED_FILTER"
    | "REQUIRES_ADVERTISING_CHANNEL_TYPE_FILTER"
    | "INVALID_ADVERTISING_CHANNEL_TYPE_IN_FILTER"
    | "CANNOT_SELECT_ASSET_GROUP"
    | "CANNOT_SELECT_AD_GROUP"
    | "REQUIRES_FILTER_BY_SINGLE_RESOURCE"
    | "CANNOT_SELECT_BOTH_AD_GROUP_AND_ASSET_GROUP"
    | "CANNOT_FILTER_BY_BOTH_AD_GROUP_AND_ASSET_GROUP"
    | (string & {});
  /** The reasons for the reach plan error */
  reachPlanError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "NOT_FORECASTABLE_MISSING_RATE"
    | "NOT_FORECASTABLE_NOT_ENOUGH_INVENTORY"
    | "NOT_FORECASTABLE_ACCOUNT_NOT_ENABLED"
    | (string & {});
  /** An error with an Ad Group mutate. */
  adGroupError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "DUPLICATE_ADGROUP_NAME"
    | "INVALID_ADGROUP_NAME"
    | "ADVERTISER_NOT_ON_CONTENT_NETWORK"
    | "BID_TOO_BIG"
    | "BID_TYPE_AND_BIDDING_STRATEGY_MISMATCH"
    | "MISSING_ADGROUP_NAME"
    | "ADGROUP_LABEL_DOES_NOT_EXIST"
    | "ADGROUP_LABEL_ALREADY_EXISTS"
    | "INVALID_CONTENT_BID_CRITERION_TYPE_GROUP"
    | "AD_GROUP_TYPE_NOT_VALID_FOR_ADVERTISING_CHANNEL_TYPE"
    | "ADGROUP_TYPE_NOT_SUPPORTED_FOR_CAMPAIGN_SALES_COUNTRY"
    | "CANNOT_ADD_ADGROUP_OF_TYPE_DSA_TO_CAMPAIGN_WITHOUT_DSA_SETTING"
    | "PROMOTED_HOTEL_AD_GROUPS_NOT_AVAILABLE_FOR_CUSTOMER"
    | "INVALID_EXCLUDED_PARENT_ASSET_FIELD_TYPE"
    | "INVALID_EXCLUDED_PARENT_ASSET_SET_TYPE"
    | "CANNOT_ADD_AD_GROUP_FOR_CAMPAIGN_TYPE"
    | "INVALID_STATUS"
    | "INVALID_STEP_ID_FOR_VIDEO_ADS_SEQUENCING"
    | "INVALID_AD_GROUP_TYPE_FOR_VIDEO_ADS_SEQUENCING"
    | "DUPLICATE_STEP_ID"
    | "INVALID_VERTICAL_ADS_FORMAT_SETTING"
    | "VERTICAL_ADS_FORMAT_SETTING_NOT_SUPPORTED_FOR_CAMPAIGNS_WITHOUT_AI_MAX"
    | "VERTICAL_ADS_FORMAT_SETTING_NOT_SUPPORTED_FOR_CAMPAIGNS_WITHOUT_ENABLED_TRAVEL_FEED"
    | (string & {});
  /** The reasons for the invoice error */
  invoiceError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "YEAR_MONTH_TOO_OLD"
    | "NOT_INVOICED_CUSTOMER"
    | "BILLING_SETUP_NOT_APPROVED"
    | "BILLING_SETUP_NOT_ON_MONTHLY_INVOICING"
    | "NON_SERVING_CUSTOMER"
    | (string & {});
  /** The reasons for the date error */
  dateError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INVALID_FIELD_VALUES_IN_DATE"
    | "INVALID_FIELD_VALUES_IN_DATE_TIME"
    | "INVALID_STRING_DATE"
    | "INVALID_STRING_DATE_TIME_MICROS"
    | "INVALID_STRING_DATE_TIME_SECONDS"
    | "INVALID_STRING_DATE_TIME_SECONDS_WITH_OFFSET"
    | "EARLIER_THAN_MINIMUM_DATE"
    | "LATER_THAN_MAXIMUM_DATE"
    | "DATE_RANGE_MINIMUM_DATE_LATER_THAN_MAXIMUM_DATE"
    | "DATE_RANGE_MINIMUM_AND_MAXIMUM_DATES_BOTH_NULL"
    | "DATE_RANGE_ERROR_START_TIME_MUST_BE_THE_START_OF_A_DAY"
    | "DATE_RANGE_ERROR_END_TIME_MUST_BE_THE_END_OF_A_DAY"
    | (string & {});
  /** The reasons for the conversion value rule error */
  conversionValueRuleError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INVALID_GEO_TARGET_CONSTANT"
    | "CONFLICTING_INCLUDED_AND_EXCLUDED_GEO_TARGET"
    | "CONFLICTING_CONDITIONS"
    | "CANNOT_REMOVE_IF_INCLUDED_IN_VALUE_RULE_SET"
    | "CONDITION_NOT_ALLOWED"
    | "FIELD_MUST_BE_UNSET"
    | "CANNOT_PAUSE_UNLESS_VALUE_RULE_SET_IS_PAUSED"
    | "UNTARGETABLE_GEO_TARGET"
    | "INVALID_AUDIENCE_USER_LIST"
    | "INACCESSIBLE_USER_LIST"
    | "INVALID_AUDIENCE_USER_INTEREST"
    | "CANNOT_ADD_RULE_WITH_STATUS_REMOVED"
    | "NO_DAY_OF_WEEK_SELECTED"
    | (string & {});
  /** The reasons for the collection size error */
  collectionSizeError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "TOO_FEW"
    | "TOO_MANY"
    | (string & {});
  /** The reasons for the recommendation subscription error. */
  recommendationSubscriptionError?: "UNSPECIFIED" | "UNKNOWN" | (string & {});
  /** The reasons for the third party app analytics link mutate error */
  thirdPartyAppAnalyticsLinkError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INVALID_ANALYTICS_PROVIDER_ID"
    | "INVALID_MOBILE_APP_ID"
    | "MOBILE_APP_IS_NOT_ENABLED"
    | "CANNOT_REGENERATE_SHAREABLE_LINK_ID_FOR_REMOVED_LINK"
    | (string & {});
  /** The reasons for the operator error */
  operatorError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "OPERATOR_NOT_SUPPORTED"
    | (string & {});
  /** The reasons for the click view error */
  clickViewError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "EXPECTED_FILTER_ON_A_SINGLE_DAY"
    | "DATE_TOO_OLD"
    | (string & {});
  /** The reasons for the not empty error */
  notEmptyError?: "UNSPECIFIED" | "UNKNOWN" | "EMPTY_LIST" | (string & {});
  /** The reasons for a user list customer type error. */
  userListCustomerTypeError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CONFLICTING_CUSTOMER_TYPES"
    | "NO_ACCESS_TO_USER_LIST"
    | "USERLIST_NOT_ELIGIBLE"
    | "CONVERSION_TRACKING_NOT_ENABLED_OR_NOT_MCC_MANAGER_ACCOUNT"
    | "TOO_MANY_USER_LISTS_FOR_THE_CUSTOMER_TYPE"
    | (string & {});
  /** The reasons for the customer customizer error. */
  customerCustomizerError?: "UNSPECIFIED" | "UNKNOWN" | (string & {});
  /** The reasons for the media bundle error */
  mediaBundleError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "BAD_REQUEST"
    | "DOUBLECLICK_BUNDLE_NOT_ALLOWED"
    | "EXTERNAL_URL_NOT_ALLOWED"
    | "FILE_TOO_LARGE"
    | "GOOGLE_WEB_DESIGNER_ZIP_FILE_NOT_PUBLISHED"
    | "INVALID_INPUT"
    | "INVALID_MEDIA_BUNDLE"
    | "INVALID_MEDIA_BUNDLE_ENTRY"
    | "INVALID_MIME_TYPE"
    | "INVALID_PATH"
    | "INVALID_URL_REFERENCE"
    | "MEDIA_DATA_TOO_LARGE"
    | "MISSING_PRIMARY_MEDIA_BUNDLE_ENTRY"
    | "SERVER_ERROR"
    | "STORAGE_ERROR"
    | "SWIFFY_BUNDLE_NOT_ALLOWED"
    | "TOO_MANY_FILES"
    | "UNEXPECTED_SIZE"
    | "UNSUPPORTED_GOOGLE_WEB_DESIGNER_ENVIRONMENT"
    | "UNSUPPORTED_HTML5_FEATURE"
    | "URL_IN_MEDIA_BUNDLE_NOT_SSL_COMPLIANT"
    | "CUSTOM_EXIT_NOT_ALLOWED"
    | (string & {});
  /** The reasons for the conversion custom variable error */
  conversionCustomVariableError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "DUPLICATE_NAME"
    | "DUPLICATE_TAG"
    | "RESERVED_TAG"
    | (string & {});
  /** The reasons for the asset set error */
  assetSetError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "DUPLICATE_ASSET_SET_NAME"
    | "INVALID_PARENT_ASSET_SET_TYPE"
    | "ASSET_SET_SOURCE_INCOMPATIBLE_WITH_PARENT_ASSET_SET"
    | "ASSET_SET_TYPE_CANNOT_BE_LINKED_TO_CUSTOMER"
    | "INVALID_CHAIN_IDS"
    | "LOCATION_SYNC_ASSET_SET_DOES_NOT_SUPPORT_RELATIONSHIP_TYPE"
    | "NOT_UNIQUE_ENABLED_LOCATION_SYNC_TYPED_ASSET_SET"
    | "INVALID_PLACE_IDS"
    | "OAUTH_INFO_INVALID"
    | "OAUTH_INFO_MISSING"
    | "CANNOT_DELETE_AS_ENABLED_LINKAGES_EXIST"
    | (string & {});
  /** The reasons for the feed error */
  feedError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ATTRIBUTE_NAMES_NOT_UNIQUE"
    | "ATTRIBUTES_DO_NOT_MATCH_EXISTING_ATTRIBUTES"
    | "CANNOT_SPECIFY_USER_ORIGIN_FOR_SYSTEM_FEED"
    | "CANNOT_SPECIFY_GOOGLE_ORIGIN_FOR_NON_SYSTEM_FEED"
    | "CANNOT_SPECIFY_FEED_ATTRIBUTES_FOR_SYSTEM_FEED"
    | "CANNOT_UPDATE_FEED_ATTRIBUTES_WITH_ORIGIN_GOOGLE"
    | "FEED_REMOVED"
    | "INVALID_ORIGIN_VALUE"
    | "FEED_ORIGIN_IS_NOT_USER"
    | "INVALID_AUTH_TOKEN_FOR_EMAIL"
    | "INVALID_EMAIL"
    | "DUPLICATE_FEED_NAME"
    | "INVALID_FEED_NAME"
    | "MISSING_OAUTH_INFO"
    | "NEW_ATTRIBUTE_CANNOT_BE_PART_OF_UNIQUE_KEY"
    | "TOO_MANY_ATTRIBUTES"
    | "INVALID_BUSINESS_ACCOUNT"
    | "BUSINESS_ACCOUNT_CANNOT_ACCESS_LOCATION_ACCOUNT"
    | "INVALID_AFFILIATE_CHAIN_ID"
    | "DUPLICATE_SYSTEM_FEED"
    | "GMB_ACCESS_ERROR"
    | "CANNOT_HAVE_LOCATION_AND_AFFILIATE_LOCATION_FEEDS"
    | "LEGACY_EXTENSION_TYPE_READ_ONLY"
    | (string & {});
  /** The reasons for the null error */
  nullError?: "UNSPECIFIED" | "UNKNOWN" | "NULL_CONTENT" | (string & {});
  /** An error with a Campaign Budget mutate. */
  campaignBudgetError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CAMPAIGN_BUDGET_CANNOT_BE_SHARED"
    | "CAMPAIGN_BUDGET_REMOVED"
    | "CAMPAIGN_BUDGET_IN_USE"
    | "CAMPAIGN_BUDGET_PERIOD_NOT_AVAILABLE"
    | "CANNOT_MODIFY_FIELD_OF_IMPLICITLY_SHARED_CAMPAIGN_BUDGET"
    | "CANNOT_UPDATE_CAMPAIGN_BUDGET_TO_IMPLICITLY_SHARED"
    | "CANNOT_UPDATE_CAMPAIGN_BUDGET_TO_EXPLICITLY_SHARED_WITHOUT_NAME"
    | "CANNOT_UPDATE_CAMPAIGN_BUDGET_TO_EXPLICITLY_SHARED"
    | "CANNOT_USE_IMPLICITLY_SHARED_CAMPAIGN_BUDGET_WITH_MULTIPLE_CAMPAIGNS"
    | "DUPLICATE_NAME"
    | "MONEY_AMOUNT_IN_WRONG_CURRENCY"
    | "MONEY_AMOUNT_LESS_THAN_CURRENCY_MINIMUM_CPC"
    | "MONEY_AMOUNT_TOO_LARGE"
    | "NEGATIVE_MONEY_AMOUNT"
    | "NON_MULTIPLE_OF_MINIMUM_CURRENCY_UNIT"
    | "TOTAL_BUDGET_AMOUNT_MUST_BE_UNSET_FOR_BUDGET_PERIOD_DAILY"
    | "INVALID_PERIOD"
    | "CANNOT_USE_ACCELERATED_DELIVERY_MODE"
    | "BUDGET_AMOUNT_MUST_BE_UNSET_FOR_CUSTOM_BUDGET_PERIOD"
    | "BUDGET_BELOW_PER_DAY_MINIMUM"
    | (string & {});
  /** The reasons for the resource count limit exceeded error */
  resourceCountLimitExceededError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ACCOUNT_LIMIT"
    | "CAMPAIGN_LIMIT"
    | "ADGROUP_LIMIT"
    | "AD_GROUP_AD_LIMIT"
    | "AD_GROUP_CRITERION_LIMIT"
    | "SHARED_SET_LIMIT"
    | "MATCHING_FUNCTION_LIMIT"
    | "RESPONSE_ROW_LIMIT_EXCEEDED"
    | "RESOURCE_LIMIT"
    | (string & {});
  /** The reasons for the ad group feed error */
  adGroupFeedError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "FEED_ALREADY_EXISTS_FOR_PLACEHOLDER_TYPE"
    | "CANNOT_CREATE_FOR_REMOVED_FEED"
    | "ADGROUP_FEED_ALREADY_EXISTS"
    | "CANNOT_OPERATE_ON_REMOVED_ADGROUP_FEED"
    | "INVALID_PLACEHOLDER_TYPE"
    | "MISSING_FEEDMAPPING_FOR_PLACEHOLDER_TYPE"
    | "NO_EXISTING_LOCATION_CUSTOMER_FEED"
    | (string & {});
  /** The reasons for the asset error */
  assetError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CUSTOMER_NOT_ON_ALLOWLIST_FOR_ASSET_TYPE"
    | "DUPLICATE_ASSET"
    | "DUPLICATE_ASSET_NAME"
    | "ASSET_DATA_IS_MISSING"
    | "CANNOT_MODIFY_ASSET_NAME"
    | "FIELD_INCOMPATIBLE_WITH_ASSET_TYPE"
    | "INVALID_CALL_TO_ACTION_TEXT"
    | "LEAD_FORM_INVALID_FIELDS_COMBINATION"
    | "LEAD_FORM_MISSING_AGREEMENT"
    | "INVALID_ASSET_STATUS"
    | "FIELD_CANNOT_BE_MODIFIED_FOR_ASSET_TYPE"
    | "SCHEDULES_CANNOT_OVERLAP"
    | "PROMOTION_CANNOT_SET_PERCENT_OFF_AND_MONEY_AMOUNT_OFF"
    | "PROMOTION_CANNOT_SET_PROMOTION_CODE_AND_ORDERS_OVER_AMOUNT"
    | "TOO_MANY_DECIMAL_PLACES_SPECIFIED"
    | "DUPLICATE_ASSETS_WITH_DIFFERENT_FIELD_VALUE"
    | "CALL_CARRIER_SPECIFIC_SHORT_NUMBER_NOT_ALLOWED"
    | "CALL_CUSTOMER_CONSENT_FOR_CALL_RECORDING_REQUIRED"
    | "CALL_DISALLOWED_NUMBER_TYPE"
    | "CALL_INVALID_CONVERSION_ACTION"
    | "CALL_INVALID_COUNTRY_CODE"
    | "CALL_INVALID_DOMESTIC_PHONE_NUMBER_FORMAT"
    | "CALL_INVALID_PHONE_NUMBER"
    | "CALL_PHONE_NUMBER_NOT_SUPPORTED_FOR_COUNTRY"
    | "CALL_PREMIUM_RATE_NUMBER_NOT_ALLOWED"
    | "CALL_VANITY_PHONE_NUMBER_NOT_ALLOWED"
    | "PRICE_HEADER_SAME_AS_DESCRIPTION"
    | "MOBILE_APP_INVALID_APP_ID"
    | "MOBILE_APP_INVALID_FINAL_URL_FOR_APP_DOWNLOAD_URL"
    | "NAME_REQUIRED_FOR_ASSET_TYPE"
    | "LEAD_FORM_LEGACY_QUALIFYING_QUESTIONS_DISALLOWED"
    | "NAME_CONFLICT_FOR_ASSET_TYPE"
    | "CANNOT_MODIFY_ASSET_SOURCE"
    | "CANNOT_MODIFY_AUTOMATICALLY_CREATED_ASSET"
    | "LEAD_FORM_LOCATION_ANSWER_TYPE_DISALLOWED"
    | "PAGE_FEED_INVALID_LABEL_TEXT"
    | "CUSTOMER_NOT_ON_ALLOWLIST_FOR_WHATSAPP_MESSAGE_ASSETS"
    | "CUSTOMER_NOT_ON_ALLOWLIST_FOR_APP_DEEP_LINK_ASSETS"
    | "PROMOTION_BARCODE_CANNOT_CONTAIN_LINKS"
    | "PROMOTION_BARCODE_INVALID_FORMAT"
    | "UNSUPPORTED_BARCODE_TYPE"
    | "PROMOTION_QR_CODE_CANNOT_CONTAIN_LINKS"
    | "PROMOTION_QR_CODE_INVALID_FORMAT"
    | "CUSTOMER_NOT_ON_ALLOWLIST_FOR_MESSAGE_ASSETS"
    | (string & {});
  /** An error with a mutate */
  mutateError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "RESOURCE_NOT_FOUND"
    | "ID_EXISTS_IN_MULTIPLE_MUTATES"
    | "INCONSISTENT_FIELD_VALUES"
    | "MUTATE_NOT_ALLOWED"
    | "RESOURCE_NOT_IN_GOOGLE_ADS"
    | "RESOURCE_ALREADY_EXISTS"
    | "RESOURCE_DOES_NOT_SUPPORT_VALIDATE_ONLY"
    | "OPERATION_DOES_NOT_SUPPORT_PARTIAL_FAILURE"
    | "RESOURCE_READ_ONLY"
    | "EU_POLITICAL_ADVERTISING_DECLARATION_REQUIRED"
    | (string & {});
  /** The reasons for the custom column error */
  customColumnError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CUSTOM_COLUMN_NOT_FOUND"
    | "CUSTOM_COLUMN_NOT_AVAILABLE"
    | (string & {});
  /** An unexpected server-side error. */
  internalError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INTERNAL_ERROR"
    | "ERROR_CODE_NOT_PUBLISHED"
    | "TRANSIENT_ERROR"
    | "DEADLINE_EXCEEDED"
    | (string & {});
  /** The reason for keyword plan ad group keyword error. */
  keywordPlanAdGroupKeywordError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INVALID_KEYWORD_MATCH_TYPE"
    | "DUPLICATE_KEYWORD"
    | "KEYWORD_TEXT_TOO_LONG"
    | "KEYWORD_HAS_INVALID_CHARS"
    | "KEYWORD_HAS_TOO_MANY_WORDS"
    | "INVALID_KEYWORD_TEXT"
    | "NEGATIVE_KEYWORD_HAS_CPC_BID"
    | "NEW_BMM_KEYWORDS_NOT_ALLOWED"
    | (string & {});
  /** The reasons for the asset group error */
  assetGroupError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "DUPLICATE_NAME"
    | "CANNOT_ADD_ASSET_GROUP_FOR_CAMPAIGN_TYPE"
    | "NOT_ENOUGH_HEADLINE_ASSET"
    | "NOT_ENOUGH_LONG_HEADLINE_ASSET"
    | "NOT_ENOUGH_DESCRIPTION_ASSET"
    | "NOT_ENOUGH_BUSINESS_NAME_ASSET"
    | "NOT_ENOUGH_MARKETING_IMAGE_ASSET"
    | "NOT_ENOUGH_SQUARE_MARKETING_IMAGE_ASSET"
    | "NOT_ENOUGH_LOGO_ASSET"
    | "FINAL_URL_SHOPPING_MERCHANT_HOME_PAGE_URL_DOMAINS_DIFFER"
    | "PATH1_REQUIRED_WHEN_PATH2_IS_SET"
    | "SHORT_DESCRIPTION_REQUIRED"
    | "FINAL_URL_REQUIRED"
    | "FINAL_URL_CONTAINS_INVALID_DOMAIN_NAME"
    | "AD_CUSTOMIZER_NOT_SUPPORTED"
    | "CANNOT_MUTATE_ASSET_GROUP_FOR_REMOVED_CAMPAIGN"
    | (string & {});
  /** The reasons for the customer feed error */
  customerFeedError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "FEED_ALREADY_EXISTS_FOR_PLACEHOLDER_TYPE"
    | "CANNOT_CREATE_FOR_REMOVED_FEED"
    | "CANNOT_CREATE_ALREADY_EXISTING_CUSTOMER_FEED"
    | "CANNOT_MODIFY_REMOVED_CUSTOMER_FEED"
    | "INVALID_PLACEHOLDER_TYPE"
    | "MISSING_FEEDMAPPING_FOR_PLACEHOLDER_TYPE"
    | "PLACEHOLDER_TYPE_NOT_ALLOWED_ON_CUSTOMER_FEED"
    | (string & {});
  /** An error with a list operation. */
  listOperationError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "REQUIRED_FIELD_MISSING"
    | "DUPLICATE_VALUES"
    | (string & {});
  /** The reasons for errors in payments accounts service */
  paymentsAccountError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "NOT_SUPPORTED_FOR_MANAGER_CUSTOMER"
    | (string & {});
  /** The reasons for the custom conversion goal error */
  customConversionGoalError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INVALID_CONVERSION_ACTION"
    | "CONVERSION_ACTION_NOT_ENABLED"
    | "CANNOT_REMOVE_LINKED_CUSTOM_CONVERSION_GOAL"
    | "CUSTOM_GOAL_DUPLICATE_NAME"
    | "DUPLICATE_CONVERSION_ACTION_LIST"
    | "NON_BIDDABLE_CONVERSION_ACTION_NOT_ELIGIBLE_FOR_CUSTOM_GOAL"
    | (string & {});
  /** The reasons for the experiment arm error */
  experimentArmError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "EXPERIMENT_ARM_COUNT_LIMIT_EXCEEDED"
    | "INVALID_CAMPAIGN_STATUS"
    | "DUPLICATE_EXPERIMENT_ARM_NAME"
    | "CANNOT_SET_TREATMENT_ARM_CAMPAIGN"
    | "CANNOT_MODIFY_CAMPAIGN_IDS"
    | "CANNOT_MODIFY_CAMPAIGN_WITHOUT_SUFFIX_SET"
    | "CANNOT_MUTATE_TRAFFIC_SPLIT_AFTER_START"
    | "CANNOT_ADD_CAMPAIGN_WITH_SHARED_BUDGET"
    | "CANNOT_ADD_CAMPAIGN_WITH_CUSTOM_BUDGET"
    | "CANNOT_ADD_CAMPAIGNS_WITH_DYNAMIC_ASSETS_ENABLED"
    | "UNSUPPORTED_CAMPAIGN_ADVERTISING_CHANNEL_SUB_TYPE"
    | "CANNOT_ADD_BASE_CAMPAIGN_WITH_DATE_RANGE"
    | "BIDDING_STRATEGY_NOT_SUPPORTED_IN_EXPERIMENTS"
    | "TRAFFIC_SPLIT_NOT_SUPPORTED_FOR_CHANNEL_TYPE"
    | (string & {});
  /** The reasons for the asset group hint error */
  assetGroupSignalError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "TOO_MANY_WORDS"
    | "SEARCH_THEME_POLICY_VIOLATION"
    | "AUDIENCE_WITH_WRONG_ASSET_GROUP_ID"
    | (string & {});
  /** The reasons for the database error. */
  databaseError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CONCURRENT_MODIFICATION"
    | "DATA_CONSTRAINT_VIOLATION"
    | "REQUEST_TOO_LARGE"
    | (string & {});
  /** The reasons for the date range error */
  dateRangeError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INVALID_DATE"
    | "START_DATE_AFTER_END_DATE"
    | "CANNOT_SET_DATE_TO_PAST"
    | "AFTER_MAXIMUM_ALLOWABLE_DATE"
    | "CANNOT_MODIFY_START_DATE_IF_ALREADY_STARTED"
    | (string & {});
  /** The reasons for the ad parameter error */
  adParameterError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "AD_GROUP_CRITERION_MUST_BE_KEYWORD"
    | "INVALID_INSERTION_TEXT_FORMAT"
    | (string & {});
  /** The reasons for the user list error */
  userListError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "EXTERNAL_REMARKETING_USER_LIST_MUTATE_NOT_SUPPORTED"
    | "CONCRETE_TYPE_REQUIRED"
    | "CONVERSION_TYPE_ID_REQUIRED"
    | "DUPLICATE_CONVERSION_TYPES"
    | "INVALID_CONVERSION_TYPE"
    | "INVALID_DESCRIPTION"
    | "INVALID_NAME"
    | "INVALID_TYPE"
    | "CAN_NOT_ADD_LOGICAL_LIST_AS_LOGICAL_LIST_OPERAND"
    | "INVALID_USER_LIST_LOGICAL_RULE_OPERAND"
    | "NAME_ALREADY_USED"
    | "NEW_CONVERSION_TYPE_NAME_REQUIRED"
    | "CONVERSION_TYPE_NAME_ALREADY_USED"
    | "OWNERSHIP_REQUIRED_FOR_SET"
    | "USER_LIST_MUTATE_NOT_SUPPORTED"
    | "INVALID_RULE"
    | "INVALID_DATE_RANGE"
    | "CAN_NOT_MUTATE_SENSITIVE_USERLIST"
    | "MAX_NUM_RULEBASED_USERLISTS"
    | "CANNOT_MODIFY_BILLABLE_RECORD_COUNT"
    | "APP_ID_NOT_SET"
    | "USERLIST_NAME_IS_RESERVED_FOR_SYSTEM_LIST"
    | "ADVERTISER_NOT_ON_ALLOWLIST_FOR_USING_UPLOADED_DATA"
    | "RULE_TYPE_IS_NOT_SUPPORTED"
    | "CAN_NOT_ADD_A_SIMILAR_USERLIST_AS_LOGICAL_LIST_OPERAND"
    | "CAN_NOT_MIX_CRM_BASED_IN_LOGICAL_LIST_WITH_OTHER_LISTS"
    | "APP_ID_NOT_ALLOWED"
    | "CANNOT_MUTATE_SYSTEM_LIST"
    | "MOBILE_APP_IS_SENSITIVE"
    | "SEED_LIST_DOES_NOT_EXIST"
    | "INVALID_SEED_LIST_ACCESS_REASON"
    | "INVALID_SEED_LIST_TYPE"
    | "INVALID_COUNTRY_CODES"
    | "PARTNER_AUDIENCE_SOURCE_NOT_SUPPORTED_FOR_USER_LIST_TYPE"
    | "COMMERCE_PARTNER_NOT_ALLOWED"
    | "PARTNER_AUDIENCE_INFO_NOT_SUPPORTED_FOR_USER_LIST_TYPE"
    | "PARTNER_MANAGER_ACCOUNT_DISALLOWED"
    | "PARTNER_NOT_ALLOWLISTED_FOR_THIRD_PARTY_PARTNER_DATA"
    | "ADVERTISER_TOS_NOT_ACCEPTED"
    | "ADVERTISER_PARTNER_LINK_MISSING"
    | "ADVERTISER_NOT_ALLOWLISTED_FOR_THIRD_PARTY_PARTNER_DATA"
    | "ACCOUNT_SETTING_TYPE_NOT_ALLOWED"
    | (string & {});
  /** The reasons for the Benchmarks error. */
  benchmarksError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "MAX_QUERY_COMPLEXITY_EXCEEDED"
    | (string & {});
  /** The reasons for account budget proposal errors. */
  accountBudgetProposalError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "FIELD_MASK_NOT_ALLOWED"
    | "IMMUTABLE_FIELD"
    | "REQUIRED_FIELD_MISSING"
    | "CANNOT_CANCEL_APPROVED_PROPOSAL"
    | "CANNOT_REMOVE_UNAPPROVED_BUDGET"
    | "CANNOT_REMOVE_RUNNING_BUDGET"
    | "CANNOT_END_UNAPPROVED_BUDGET"
    | "CANNOT_END_INACTIVE_BUDGET"
    | "BUDGET_NAME_REQUIRED"
    | "CANNOT_UPDATE_OLD_BUDGET"
    | "CANNOT_END_IN_PAST"
    | "CANNOT_EXTEND_END_TIME"
    | "PURCHASE_ORDER_NUMBER_REQUIRED"
    | "PENDING_UPDATE_PROPOSAL_EXISTS"
    | "MULTIPLE_BUDGETS_NOT_ALLOWED_FOR_UNAPPROVED_BILLING_SETUP"
    | "CANNOT_UPDATE_START_TIME_FOR_STARTED_BUDGET"
    | "SPENDING_LIMIT_LOWER_THAN_ACCRUED_COST_NOT_ALLOWED"
    | "UPDATE_IS_NO_OP"
    | "END_TIME_MUST_FOLLOW_START_TIME"
    | "BUDGET_DATE_RANGE_INCOMPATIBLE_WITH_BILLING_SETUP"
    | "NOT_AUTHORIZED"
    | "INVALID_BILLING_SETUP"
    | "OVERLAPS_EXISTING_BUDGET"
    | "CANNOT_CREATE_BUDGET_THROUGH_API"
    | "INVALID_MASTER_SERVICE_AGREEMENT"
    | "CANCELED_BILLING_SETUP"
    | (string & {});
  /** The reasons for the distinct error */
  distinctError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "DUPLICATE_ELEMENT"
    | "DUPLICATE_TYPE"
    | (string & {});
  /** The reasons for error in applying a recommendation */
  recommendationError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "BUDGET_AMOUNT_TOO_SMALL"
    | "BUDGET_AMOUNT_TOO_LARGE"
    | "INVALID_BUDGET_AMOUNT"
    | "POLICY_ERROR"
    | "INVALID_BID_AMOUNT"
    | "ADGROUP_KEYWORD_LIMIT"
    | "RECOMMENDATION_ALREADY_APPLIED"
    | "RECOMMENDATION_INVALIDATED"
    | "TOO_MANY_OPERATIONS"
    | "NO_OPERATIONS"
    | "DIFFERENT_TYPES_NOT_SUPPORTED"
    | "DUPLICATE_RESOURCE_NAME"
    | "RECOMMENDATION_ALREADY_DISMISSED"
    | "INVALID_APPLY_REQUEST"
    | "RECOMMENDATION_TYPE_APPLY_NOT_SUPPORTED"
    | "INVALID_MULTIPLIER"
    | "ADVERTISING_CHANNEL_TYPE_GENERATE_NOT_SUPPORTED"
    | "RECOMMENDATION_TYPE_GENERATE_NOT_SUPPORTED"
    | "RECOMMENDATION_TYPES_CANNOT_BE_EMPTY"
    | "CAMPAIGN_BUDGET_RECOMMENDATION_TYPE_REQUIRES_BIDDING_INFO"
    | "CAMPAIGN_BUDGET_RECOMMENDATION_TYPE_REQUIRES_BIDDING_STRATEGY_TYPE"
    | "CAMPAIGN_BUDGET_RECOMMENDATION_TYPE_REQUIRES_ASSET_GROUP_INFO"
    | "CAMPAIGN_BUDGET_RECOMMENDATION_TYPE_REQUIRES_ASSET_GROUP_INFO_WITH_FINAL_URL"
    | "CAMPAIGN_BUDGET_RECOMMENDATION_TYPE_REQUIRES_COUNTRY_CODES_FOR_SEARCH_CHANNEL"
    | "CAMPAIGN_BUDGET_RECOMMENDATION_TYPE_INVALID_COUNTRY_CODE_FOR_SEARCH_CHANNEL"
    | "CAMPAIGN_BUDGET_RECOMMENDATION_TYPE_REQUIRES_LANGUAGE_CODES_FOR_SEARCH_CHANNEL"
    | "CAMPAIGN_BUDGET_RECOMMENDATION_TYPE_REQUIRES_EITHER_POSITIVE_OR_NEGATIVE_LOCATION_IDS_FOR_SEARCH_CHANNEL"
    | "CAMPAIGN_BUDGET_RECOMMENDATION_TYPE_REQUIRES_AD_GROUP_INFO_FOR_SEARCH_CHANNEL"
    | "CAMPAIGN_BUDGET_RECOMMENDATION_TYPE_REQUIRES_KEYWORDS_FOR_SEARCH_CHANNEL"
    | "CAMPAIGN_BUDGET_RECOMMENDATION_TYPE_WITH_CHANNEL_TYPE_SEARCH_AND_BIDDING_STRATEGY_TYPE_TARGET_IMPRESSION_SHARE_REQUIRES_LOCATION"
    | "CAMPAIGN_BUDGET_RECOMMENDATION_TYPE_WITH_CHANNEL_TYPE_SEARCH_AND_BIDDING_STRATEGY_TYPE_TARGET_IMPRESSION_SHARE_REQUIRES_TARGET_IMPRESSION_SHARE_MICROS"
    | "CAMPAIGN_BUDGET_RECOMMENDATION_TYPE_TARGET_IMPRESSION_SHARE_MICROS_BETWEEN_1_AND_1000000"
    | "CAMPAIGN_BUDGET_RECOMMENDATION_TYPE_WITH_CHANNEL_TYPE_SEARCH_AND_BIDDING_STRATEGY_TYPE_TARGET_IMPRESSION_SHARE_REQUIRES_TARGET_IMPRESSION_SHARE_INFO"
    | "MERCHANT_CENTER_ACCOUNT_ID_NOT_SUPPORTED_ADVERTISING_CHANNEL_TYPE"
    | (string & {});
  /** The reasons for the field error */
  fieldError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "REQUIRED"
    | "IMMUTABLE_FIELD"
    | "INVALID_VALUE"
    | "VALUE_MUST_BE_UNSET"
    | "REQUIRED_NONEMPTY_LIST"
    | "FIELD_CANNOT_BE_CLEARED"
    | "BLOCKED_VALUE"
    | "FIELD_CAN_ONLY_BE_CLEARED"
    | (string & {});
  /** The reasons for the manager link error */
  managerLinkError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ACCOUNTS_NOT_COMPATIBLE_FOR_LINKING"
    | "TOO_MANY_MANAGERS"
    | "TOO_MANY_INVITES"
    | "ALREADY_INVITED_BY_THIS_MANAGER"
    | "ALREADY_MANAGED_BY_THIS_MANAGER"
    | "ALREADY_MANAGED_IN_HIERARCHY"
    | "DUPLICATE_CHILD_FOUND"
    | "CLIENT_HAS_NO_ADMIN_USER"
    | "MAX_DEPTH_EXCEEDED"
    | "CYCLE_NOT_ALLOWED"
    | "TOO_MANY_ACCOUNTS"
    | "TOO_MANY_ACCOUNTS_AT_MANAGER"
    | "NON_OWNER_USER_CANNOT_MODIFY_LINK"
    | "SUSPENDED_ACCOUNT_CANNOT_ADD_CLIENTS"
    | "CLIENT_OUTSIDE_TREE"
    | "INVALID_STATUS_CHANGE"
    | "INVALID_CHANGE"
    | "CUSTOMER_CANNOT_MANAGE_SELF"
    | "CREATING_ENABLED_LINK_NOT_ALLOWED"
    | (string & {});
  /** The reasons for the feed attribute reference error */
  feedAttributeReferenceError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CANNOT_REFERENCE_REMOVED_FEED"
    | "INVALID_FEED_NAME"
    | "INVALID_FEED_ATTRIBUTE_NAME"
    | (string & {});
  /** The reasons for the context error */
  contextError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "OPERATION_NOT_PERMITTED_FOR_CONTEXT"
    | "OPERATION_NOT_PERMITTED_FOR_REMOVED_RESOURCE"
    | (string & {});
  /** The reasons for the GenAI asset generation error. */
  assetGenerationError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "NO_ASSETS_GENERATED"
    | "FINAL_URL_REQUIRED"
    | "GENERATION_CONTEXT_MISSING_FINAL_URL"
    | "FINAL_URL_SENSITIVE"
    | "FINAL_URL_UNSUPPORTED_LANGUAGE"
    | "FINAL_URL_UNAVAILABLE"
    | "CAMPAIGN_TYPE_REQUIRED"
    | "UNSUPPORTED_CAMPAIGN_TYPE"
    | "UNSUPPORTED_FIELD_TYPE"
    | "UNSUPPORTED_FIELD_TYPE_FOR_CAMPAIGN_TYPE"
    | "FREEFORM_PROMPT_UNSUPPORTED_LANGUAGE"
    | "FREEFORM_PROMPT_SENSITIVE"
    | "INPUT_IMAGE_FILE_SIZE_TOO_LARGE"
    | "INPUT_IMAGE_EMPTY"
    | "GENERATION_TYPE_REQUIRED"
    | "TOO_MANY_KEYWORDS"
    | "KEYWORD_INVALID_LENGTH"
    | "NO_VALID_KEYWORDS"
    | "FREEFORM_PROMPT_INVALID_LENGTH"
    | "FREEFORM_PROMPT_REFERENCES_CHILDREN"
    | "FREEFORM_PROMPT_REFERENCES_SPECIFIC_PEOPLE"
    | "FREEFORM_PROMPT_VIOLATES_ADS_POLICY"
    | "FREEFORM_PROMPT_BRAND_CONTENT"
    | "INPUT_IMAGE_DEPICTS_CHILDREN"
    | "INPUT_IMAGE_CONTAINS_BRAND_CONTENT"
    | "INPUT_IMAGE_SENSITIVE"
    | "INPUT_IMAGE_VIOLATES_POLICY"
    | "ALL_OUTPUT_IMAGES_FILTERED_OUT_CHILDREN_DEPICTION"
    | "ALL_OUTPUT_IMAGES_FILTERED_OUT_SPECIFIC_PEOPLE"
    | "ALL_OUTPUT_IMAGES_FILTERED_OUT"
    | "INPUT_IMAGE_REQUIRED"
    | "INPUT_IMAGE_UNSUPPORTED_IMAGE_TYPE"
    | "CONTEXT_ASSET_GROUP_NOT_FOUND"
    | "CONTEXT_AD_GROUP_AD_NOT_FOUND"
    | "CONTEXT_CAMPAIGN_NOT_FOUND"
    | (string & {});
  /** The reasons for the conversion goal campaign config error */
  conversionGoalCampaignConfigError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CANNOT_USE_CAMPAIGN_GOAL_FOR_SEARCH_ADS_360_MANAGED_CAMPAIGN"
    | "CUSTOM_GOAL_DOES_NOT_BELONG_TO_GOOGLE_ADS_CONVERSION_CUSTOMER"
    | "CAMPAIGN_CANNOT_USE_UNIFIED_GOALS"
    | "EMPTY_CONVERSION_GOALS"
    | "STORE_SALE_STORE_VISIT_CANNOT_BE_BOTH_INCLUDED"
    | "PERFORMANCE_MAX_CAMPAIGN_CANNOT_USE_CUSTOM_GOAL_WITH_STORE_SALES"
    | (string & {});
  /** The reasons for the extension setting error */
  extensionSettingError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "EXTENSIONS_REQUIRED"
    | "FEED_TYPE_EXTENSION_TYPE_MISMATCH"
    | "INVALID_FEED_TYPE"
    | "INVALID_FEED_TYPE_FOR_CUSTOMER_EXTENSION_SETTING"
    | "CANNOT_CHANGE_FEED_ITEM_ON_CREATE"
    | "CANNOT_UPDATE_NEWLY_CREATED_EXTENSION"
    | "NO_EXISTING_AD_GROUP_EXTENSION_SETTING_FOR_TYPE"
    | "NO_EXISTING_CAMPAIGN_EXTENSION_SETTING_FOR_TYPE"
    | "NO_EXISTING_CUSTOMER_EXTENSION_SETTING_FOR_TYPE"
    | "AD_GROUP_EXTENSION_SETTING_ALREADY_EXISTS"
    | "CAMPAIGN_EXTENSION_SETTING_ALREADY_EXISTS"
    | "CUSTOMER_EXTENSION_SETTING_ALREADY_EXISTS"
    | "AD_GROUP_FEED_ALREADY_EXISTS_FOR_PLACEHOLDER_TYPE"
    | "CAMPAIGN_FEED_ALREADY_EXISTS_FOR_PLACEHOLDER_TYPE"
    | "CUSTOMER_FEED_ALREADY_EXISTS_FOR_PLACEHOLDER_TYPE"
    | "VALUE_OUT_OF_RANGE"
    | "CANNOT_SET_FIELD_WITH_FINAL_URLS"
    | "FINAL_URLS_NOT_SET"
    | "INVALID_PHONE_NUMBER"
    | "PHONE_NUMBER_NOT_SUPPORTED_FOR_COUNTRY"
    | "CARRIER_SPECIFIC_SHORT_NUMBER_NOT_ALLOWED"
    | "PREMIUM_RATE_NUMBER_NOT_ALLOWED"
    | "DISALLOWED_NUMBER_TYPE"
    | "INVALID_DOMESTIC_PHONE_NUMBER_FORMAT"
    | "VANITY_PHONE_NUMBER_NOT_ALLOWED"
    | "INVALID_COUNTRY_CODE"
    | "INVALID_CALL_CONVERSION_TYPE_ID"
    | "CUSTOMER_NOT_IN_ALLOWLIST_FOR_CALLTRACKING"
    | "CALLTRACKING_NOT_SUPPORTED_FOR_COUNTRY"
    | "INVALID_APP_ID"
    | "QUOTES_IN_REVIEW_EXTENSION_SNIPPET"
    | "HYPHENS_IN_REVIEW_EXTENSION_SNIPPET"
    | "REVIEW_EXTENSION_SOURCE_NOT_ELIGIBLE"
    | "SOURCE_NAME_IN_REVIEW_EXTENSION_TEXT"
    | "MISSING_FIELD"
    | "INCONSISTENT_CURRENCY_CODES"
    | "PRICE_EXTENSION_HAS_DUPLICATED_HEADERS"
    | "PRICE_ITEM_HAS_DUPLICATED_HEADER_AND_DESCRIPTION"
    | "PRICE_EXTENSION_HAS_TOO_FEW_ITEMS"
    | "PRICE_EXTENSION_HAS_TOO_MANY_ITEMS"
    | "UNSUPPORTED_VALUE"
    | "INVALID_DEVICE_PREFERENCE"
    | "INVALID_SCHEDULE_END"
    | "DATE_TIME_MUST_BE_IN_ACCOUNT_TIME_ZONE"
    | "OVERLAPPING_SCHEDULES_NOT_ALLOWED"
    | "SCHEDULE_END_NOT_AFTER_START"
    | "TOO_MANY_SCHEDULES_PER_DAY"
    | "DUPLICATE_EXTENSION_FEED_ITEM_EDIT"
    | "INVALID_SNIPPETS_HEADER"
    | "PHONE_NUMBER_NOT_SUPPORTED_WITH_CALLTRACKING_FOR_COUNTRY"
    | "CAMPAIGN_TARGETING_MISMATCH"
    | "CANNOT_OPERATE_ON_REMOVED_FEED"
    | "EXTENSION_TYPE_REQUIRED"
    | "INCOMPATIBLE_UNDERLYING_MATCHING_FUNCTION"
    | "START_DATE_AFTER_END_DATE"
    | "INVALID_PRICE_FORMAT"
    | "PROMOTION_INVALID_TIME"
    | "PROMOTION_CANNOT_SET_PERCENT_DISCOUNT_AND_MONEY_DISCOUNT"
    | "PROMOTION_CANNOT_SET_PROMOTION_CODE_AND_ORDERS_OVER_AMOUNT"
    | "TOO_MANY_DECIMAL_PLACES_SPECIFIED"
    | "INVALID_LANGUAGE_CODE"
    | "UNSUPPORTED_LANGUAGE"
    | "CUSTOMER_CONSENT_FOR_CALL_RECORDING_REQUIRED"
    | "EXTENSION_SETTING_UPDATE_IS_A_NOOP"
    | "DISALLOWED_TEXT"
    | (string & {});
  /** The reasons for the product link invitation error */
  productLinkInvitationError?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INVALID_STATUS"
    | "PERMISSION_DENIED"
    | "NO_INVITATION_REQUIRED"
    | "CUSTOMER_NOT_PERMITTED_TO_CREATE_INVITATION"
    | (string & {});
}

export const GoogleAdsSearchads360V23Errors__ErrorCode: Schema.Schema<GoogleAdsSearchads360V23Errors__ErrorCode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adxError: Schema.optional(Schema.String),
    customerUserAccessError: Schema.optional(Schema.String),
    enumError: Schema.optional(Schema.String),
    assetLinkError: Schema.optional(Schema.String),
    campaignLifecycleGoalError: Schema.optional(Schema.String),
    userDataError: Schema.optional(Schema.String),
    campaignCustomizerError: Schema.optional(Schema.String),
    keywordPlanError: Schema.optional(Schema.String),
    customerSkAdNetworkConversionValueSchemaError: Schema.optional(
      Schema.String,
    ),
    goalError: Schema.optional(Schema.String),
    settingError: Schema.optional(Schema.String),
    biddingStrategyError: Schema.optional(Schema.String),
    quotaError: Schema.optional(Schema.String),
    policyViolationError: Schema.optional(Schema.String),
    criterionError: Schema.optional(Schema.String),
    adGroupBidModifierError: Schema.optional(Schema.String),
    keywordPlanAdGroupError: Schema.optional(Schema.String),
    adCustomizerError: Schema.optional(Schema.String),
    assetGroupListingGroupFilterError: Schema.optional(Schema.String),
    experimentError: Schema.optional(Schema.String),
    changeStatusError: Schema.optional(Schema.String),
    adGroupAdError: Schema.optional(Schema.String),
    fieldMaskError: Schema.optional(Schema.String),
    searchTermInsightError: Schema.optional(Schema.String),
    extensionFeedItemError: Schema.optional(Schema.String),
    policyFindingError: Schema.optional(Schema.String),
    campaignDraftError: Schema.optional(Schema.String),
    feedItemValidationError: Schema.optional(Schema.String),
    invalidParameterError: Schema.optional(Schema.String),
    feedMappingError: Schema.optional(Schema.String),
    notAllowlistedError: Schema.optional(Schema.String),
    shoppingProductError: Schema.optional(Schema.String),
    labelError: Schema.optional(Schema.String),
    offlineUserDataJobError: Schema.optional(Schema.String),
    timeZoneError: Schema.optional(Schema.String),
    regionCodeError: Schema.optional(Schema.String),
    rangeError: Schema.optional(Schema.String),
    keywordPlanIdeaError: Schema.optional(Schema.String),
    batchJobError: Schema.optional(Schema.String),
    biddingError: Schema.optional(Schema.String),
    campaignExperimentError: Schema.optional(Schema.String),
    currencyCodeError: Schema.optional(Schema.String),
    campaignError: Schema.optional(Schema.String),
    geoTargetConstantSuggestionError: Schema.optional(Schema.String),
    countryCodeError: Schema.optional(Schema.String),
    keywordPlanCampaignKeywordError: Schema.optional(Schema.String),
    assetSetLinkError: Schema.optional(Schema.String),
    productLinkError: Schema.optional(Schema.String),
    multiplierError: Schema.optional(Schema.String),
    stringFormatError: Schema.optional(Schema.String),
    adGroupCustomizerError: Schema.optional(Schema.String),
    customInterestError: Schema.optional(Schema.String),
    accountLinkError: Schema.optional(Schema.String),
    billingSetupError: Schema.optional(Schema.String),
    stringLengthError: Schema.optional(Schema.String),
    conversionActionError: Schema.optional(Schema.String),
    smartCampaignError: Schema.optional(Schema.String),
    adGroupCriterionCustomizerError: Schema.optional(Schema.String),
    conversionUploadError: Schema.optional(Schema.String),
    campaignConversionGoalError: Schema.optional(Schema.String),
    changeEventError: Schema.optional(Schema.String),
    conversionAdjustmentUploadError: Schema.optional(Schema.String),
    videoCampaignError: Schema.optional(Schema.String),
    operationAccessDeniedError: Schema.optional(Schema.String),
    newResourceCreationError: Schema.optional(Schema.String),
    youtubeVideoRegistrationError: Schema.optional(Schema.String),
    headerError: Schema.optional(Schema.String),
    sharedSetError: Schema.optional(Schema.String),
    campaignCriterionError: Schema.optional(Schema.String),
    sharedCriterionError: Schema.optional(Schema.String),
    partialFailureError: Schema.optional(Schema.String),
    campaignGoalConfigError: Schema.optional(Schema.String),
    feedItemSetError: Schema.optional(Schema.String),
    queryError: Schema.optional(Schema.String),
    imageError: Schema.optional(Schema.String),
    feedItemSetLinkError: Schema.optional(Schema.String),
    idError: Schema.optional(Schema.String),
    authorizationError: Schema.optional(Schema.String),
    assetSetAssetError: Schema.optional(Schema.String),
    adGroupCriterionError: Schema.optional(Schema.String),
    keywordPlanCampaignError: Schema.optional(Schema.String),
    feedItemTargetError: Schema.optional(Schema.String),
    assetGroupAssetError: Schema.optional(Schema.String),
    identityVerificationError: Schema.optional(Schema.String),
    customerError: Schema.optional(Schema.String),
    functionParsingError: Schema.optional(Schema.String),
    mediaUploadError: Schema.optional(Schema.String),
    conversionValueRuleSetError: Schema.optional(Schema.String),
    customerManagerLinkError: Schema.optional(Schema.String),
    merchantCenterError: Schema.optional(Schema.String),
    automaticallyCreatedAssetRemovalError: Schema.optional(Schema.String),
    brandGuidelinesMigrationError: Schema.optional(Schema.String),
    customerClientLinkError: Schema.optional(Schema.String),
    audienceInsightsError: Schema.optional(Schema.String),
    campaignFeedError: Schema.optional(Schema.String),
    policyValidationParameterError: Schema.optional(Schema.String),
    incentiveError: Schema.optional(Schema.String),
    functionError: Schema.optional(Schema.String),
    resourceAccessDeniedError: Schema.optional(Schema.String),
    audienceError: Schema.optional(Schema.String),
    shareablePreviewError: Schema.optional(Schema.String),
    dataLinkError: Schema.optional(Schema.String),
    customerLifecycleGoalError: Schema.optional(Schema.String),
    authenticationError: Schema.optional(Schema.String),
    customizerAttributeError: Schema.optional(Schema.String),
    adError: Schema.optional(Schema.String),
    urlFieldError: Schema.optional(Schema.String),
    customAudienceError: Schema.optional(Schema.String),
    languageCodeError: Schema.optional(Schema.String),
    mediaFileError: Schema.optional(Schema.String),
    adSharingError: Schema.optional(Schema.String),
    sizeLimitError: Schema.optional(Schema.String),
    campaignSharedSetError: Schema.optional(Schema.String),
    requestError: Schema.optional(Schema.String),
    feedItemError: Schema.optional(Schema.String),
    accessInvitationError: Schema.optional(Schema.String),
    currencyError: Schema.optional(Schema.String),
    finalUrlExpansionAssetViewError: Schema.optional(Schema.String),
    reachPlanError: Schema.optional(Schema.String),
    adGroupError: Schema.optional(Schema.String),
    invoiceError: Schema.optional(Schema.String),
    dateError: Schema.optional(Schema.String),
    conversionValueRuleError: Schema.optional(Schema.String),
    collectionSizeError: Schema.optional(Schema.String),
    recommendationSubscriptionError: Schema.optional(Schema.String),
    thirdPartyAppAnalyticsLinkError: Schema.optional(Schema.String),
    operatorError: Schema.optional(Schema.String),
    clickViewError: Schema.optional(Schema.String),
    notEmptyError: Schema.optional(Schema.String),
    userListCustomerTypeError: Schema.optional(Schema.String),
    customerCustomizerError: Schema.optional(Schema.String),
    mediaBundleError: Schema.optional(Schema.String),
    conversionCustomVariableError: Schema.optional(Schema.String),
    assetSetError: Schema.optional(Schema.String),
    feedError: Schema.optional(Schema.String),
    nullError: Schema.optional(Schema.String),
    campaignBudgetError: Schema.optional(Schema.String),
    resourceCountLimitExceededError: Schema.optional(Schema.String),
    adGroupFeedError: Schema.optional(Schema.String),
    assetError: Schema.optional(Schema.String),
    mutateError: Schema.optional(Schema.String),
    customColumnError: Schema.optional(Schema.String),
    internalError: Schema.optional(Schema.String),
    keywordPlanAdGroupKeywordError: Schema.optional(Schema.String),
    assetGroupError: Schema.optional(Schema.String),
    customerFeedError: Schema.optional(Schema.String),
    listOperationError: Schema.optional(Schema.String),
    paymentsAccountError: Schema.optional(Schema.String),
    customConversionGoalError: Schema.optional(Schema.String),
    experimentArmError: Schema.optional(Schema.String),
    assetGroupSignalError: Schema.optional(Schema.String),
    databaseError: Schema.optional(Schema.String),
    dateRangeError: Schema.optional(Schema.String),
    adParameterError: Schema.optional(Schema.String),
    userListError: Schema.optional(Schema.String),
    benchmarksError: Schema.optional(Schema.String),
    accountBudgetProposalError: Schema.optional(Schema.String),
    distinctError: Schema.optional(Schema.String),
    recommendationError: Schema.optional(Schema.String),
    fieldError: Schema.optional(Schema.String),
    managerLinkError: Schema.optional(Schema.String),
    feedAttributeReferenceError: Schema.optional(Schema.String),
    contextError: Schema.optional(Schema.String),
    assetGenerationError: Schema.optional(Schema.String),
    conversionGoalCampaignConfigError: Schema.optional(Schema.String),
    extensionSettingError: Schema.optional(Schema.String),
    productLinkInvitationError: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V23Errors__ErrorCode" });

export interface GoogleAdsSearchads360V23Common__Value {
  /** An int64. */
  int64Value?: string;
  /** A double. */
  doubleValue?: number;
  /** A string. */
  stringValue?: string;
  /** A float. */
  floatValue?: number;
  /** A boolean. */
  booleanValue?: boolean;
}

export const GoogleAdsSearchads360V23Common__Value: Schema.Schema<GoogleAdsSearchads360V23Common__Value> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    int64Value: Schema.optional(Schema.String),
    doubleValue: Schema.optional(Schema.Number),
    stringValue: Schema.optional(Schema.String),
    floatValue: Schema.optional(Schema.Number),
    booleanValue: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleAdsSearchads360V23Common__Value" });

export interface GoogleAdsSearchads360V23Errors_ErrorLocation_FieldPathElement {
  /** The name of a field or a oneof */
  fieldName?: string;
  /** If field_name is a repeated field, this is the element that failed */
  index?: number;
}

export const GoogleAdsSearchads360V23Errors_ErrorLocation_FieldPathElement: Schema.Schema<GoogleAdsSearchads360V23Errors_ErrorLocation_FieldPathElement> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldName: Schema.optional(Schema.String),
    index: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleAdsSearchads360V23Errors_ErrorLocation_FieldPathElement",
  });

export interface GoogleAdsSearchads360V23Errors__ErrorLocation {
  /** A field path that indicates which field was invalid in the request. */
  fieldPathElements?: ReadonlyArray<GoogleAdsSearchads360V23Errors_ErrorLocation_FieldPathElement>;
}

export const GoogleAdsSearchads360V23Errors__ErrorLocation: Schema.Schema<GoogleAdsSearchads360V23Errors__ErrorLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldPathElements: Schema.optional(
      Schema.Array(
        GoogleAdsSearchads360V23Errors_ErrorLocation_FieldPathElement,
      ),
    ),
  }).annotate({ identifier: "GoogleAdsSearchads360V23Errors__ErrorLocation" });

export interface GoogleAdsSearchads360V23Errors__SearchAds360Error {
  /** Additional error details, which are returned by certain error codes. Most error codes do not include details. */
  details?: GoogleAdsSearchads360V23Errors__ErrorDetails;
  /** A human-readable description of the error. */
  message?: string;
  /** An enum value that indicates which error occurred. */
  errorCode?: GoogleAdsSearchads360V23Errors__ErrorCode;
  /** The value that triggered the error. */
  trigger?: GoogleAdsSearchads360V23Common__Value;
  /** Describes the part of the request proto that caused the error. */
  location?: GoogleAdsSearchads360V23Errors__ErrorLocation;
}

export const GoogleAdsSearchads360V23Errors__SearchAds360Error: Schema.Schema<GoogleAdsSearchads360V23Errors__SearchAds360Error> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    details: Schema.optional(GoogleAdsSearchads360V23Errors__ErrorDetails),
    message: Schema.optional(Schema.String),
    errorCode: Schema.optional(GoogleAdsSearchads360V23Errors__ErrorCode),
    trigger: Schema.optional(GoogleAdsSearchads360V23Common__Value),
    location: Schema.optional(GoogleAdsSearchads360V23Errors__ErrorLocation),
  }).annotate({
    identifier: "GoogleAdsSearchads360V23Errors__SearchAds360Error",
  });

export interface GoogleAdsSearchads360V0Resources__WebpageView {
  /** Output only. The resource name of the webpage view. Webpage view resource names have the form: `customers/{customer_id}/webpageViews/{ad_group_id}~{criterion_id}` */
  resourceName?: string;
}

export const GoogleAdsSearchads360V0Resources__WebpageView: Schema.Schema<GoogleAdsSearchads360V0Resources__WebpageView> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Resources__WebpageView" });

export interface GoogleAdsSearchads360V0Common__LocationGroupInfo {
  /** Distance in units specifying the radius around targeted locations. This is required and must be set in CREATE operations. */
  radius?: string;
  /** Unit of the radius. Miles and meters are supported for geo target constants. Milli miles and meters are supported for feed item sets. This is required and must be set in CREATE operations. */
  radiusUnits?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "METERS"
    | "MILES"
    | "MILLI_MILES"
    | (string & {});
  /** FeedItemSets whose FeedItems are targeted. If multiple IDs are specified, then all items that appear in at least one set are targeted. This field cannot be used with geo_target_constants. This is optional and can only be set in CREATE operations. */
  feedItemSets?: ReadonlyArray<string>;
  /** Geo target constant(s) restricting the scope of the geographic area within the feed. Currently only one geo target constant is allowed. */
  geoTargetConstants?: ReadonlyArray<string>;
}

export const GoogleAdsSearchads360V0Common__LocationGroupInfo: Schema.Schema<GoogleAdsSearchads360V0Common__LocationGroupInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    radius: Schema.optional(Schema.String),
    radiusUnits: Schema.optional(Schema.String),
    feedItemSets: Schema.optional(Schema.Array(Schema.String)),
    geoTargetConstants: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Common__LocationGroupInfo",
  });

export interface GoogleAdsSearchads360V0Common__WebpageConditionInfo {
  /** Operator of webpage targeting condition. */
  operator?: "UNSPECIFIED" | "UNKNOWN" | "EQUALS" | "CONTAINS" | (string & {});
  /** Operand of webpage targeting condition. */
  operand?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "URL"
    | "CATEGORY"
    | "PAGE_TITLE"
    | "PAGE_CONTENT"
    | "CUSTOM_LABEL"
    | (string & {});
  /** Argument of webpage targeting condition. */
  argument?: string;
}

export const GoogleAdsSearchads360V0Common__WebpageConditionInfo: Schema.Schema<GoogleAdsSearchads360V0Common__WebpageConditionInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operator: Schema.optional(Schema.String),
    operand: Schema.optional(Schema.String),
    argument: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Common__WebpageConditionInfo",
  });

export interface GoogleAdsSearchads360V0Common__WebpageInfo {
  /** Conditions, or logical expressions, for webpage targeting. The list of webpage targeting conditions are and-ed together when evaluated for targeting. An empty list of conditions indicates all pages of the campaign's website are targeted. This field is required for CREATE operations and is prohibited on UPDATE operations. */
  conditions?: ReadonlyArray<GoogleAdsSearchads360V0Common__WebpageConditionInfo>;
  /** The name of the criterion that is defined by this parameter. The name value will be used for identifying, sorting and filtering criteria with this type of parameters. This field is required for CREATE operations and is prohibited on UPDATE operations. */
  criterionName?: string;
  /** Website criteria coverage percentage. This is the computed percentage of website coverage based on the website target, negative website target and negative keywords in the ad group and campaign. For instance, when coverage returns as 1, it indicates it has 100% coverage. This field is read-only. */
  coveragePercentage?: number;
}

export const GoogleAdsSearchads360V0Common__WebpageInfo: Schema.Schema<GoogleAdsSearchads360V0Common__WebpageInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditions: Schema.optional(
      Schema.Array(GoogleAdsSearchads360V0Common__WebpageConditionInfo),
    ),
    criterionName: Schema.optional(Schema.String),
    coveragePercentage: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Common__WebpageInfo" });

export interface GoogleAdsSearchads360V0Resources__CampaignAsset {
  /** Immutable. The asset which is linked to the campaign. */
  asset?: string;
  /** Immutable. The campaign to which the asset is linked. */
  campaign?: string;
  /** Immutable. The resource name of the campaign asset. CampaignAsset resource names have the form: `customers/{customer_id}/campaignAssets/{campaign_id}~{asset_id}~{field_type}` */
  resourceName?: string;
  /** Output only. Status of the campaign asset. */
  status?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ENABLED"
    | "REMOVED"
    | "PAUSED"
    | (string & {});
}

export const GoogleAdsSearchads360V0Resources__CampaignAsset: Schema.Schema<GoogleAdsSearchads360V0Resources__CampaignAsset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    asset: Schema.optional(Schema.String),
    campaign: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__CampaignAsset",
  });

export interface GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_TargetRoas {
  /** Output only. The chosen revenue (based on conversion data) per unit of spend. */
  targetRoas?: number;
}

export const GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_TargetRoas: Schema.Schema<GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_TargetRoas> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetRoas: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_TargetRoas",
  });

export interface GoogleAdsSearchads360V0Resources__Audience {
  /** Output only. ID of the audience. */
  id?: string;
  /** Required. Name of the audience. It should be unique across all audiences. It must have a minimum length of 1 and maximum length of 255. */
  name?: string;
  /** Description of this audience. */
  description?: string;
  /** Immutable. The resource name of the audience. Audience names have the form: `customers/{customer_id}/audiences/{audience_id}` */
  resourceName?: string;
}

export const GoogleAdsSearchads360V0Resources__Audience: Schema.Schema<GoogleAdsSearchads360V0Resources__Audience> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Resources__Audience" });

export interface GoogleAdsSearchads360V23Errors__SearchAds360Failure {
  /** The list of errors that occurred. */
  errors?: ReadonlyArray<GoogleAdsSearchads360V23Errors__SearchAds360Error>;
  /** The unique ID of the request that is used for debugging purposes. */
  requestId?: string;
}

export const GoogleAdsSearchads360V23Errors__SearchAds360Failure: Schema.Schema<GoogleAdsSearchads360V23Errors__SearchAds360Failure> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(
      Schema.Array(GoogleAdsSearchads360V23Errors__SearchAds360Error),
    ),
    requestId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V23Errors__SearchAds360Failure",
  });

export interface GoogleAdsSearchads360V0Common__TargetRestriction {
  /** The targeting dimension that these settings apply to. */
  targetingDimension?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "KEYWORD"
    | "AUDIENCE"
    | "TOPIC"
    | "GENDER"
    | "AGE_RANGE"
    | "PLACEMENT"
    | "PARENTAL_STATUS"
    | "INCOME_RANGE"
    | (string & {});
  /** Indicates whether to restrict your ads to show only for the criteria you have selected for this targeting_dimension, or to target all values for this targeting_dimension and show ads based on your targeting in other TargetingDimensions. A value of `true` means that these criteria will only apply bid modifiers, and not affect targeting. A value of `false` means that these criteria will restrict targeting as well as applying bid modifiers. */
  bidOnly?: boolean;
}

export const GoogleAdsSearchads360V0Common__TargetRestriction: Schema.Schema<GoogleAdsSearchads360V0Common__TargetRestriction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetingDimension: Schema.optional(Schema.String),
    bidOnly: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Common__TargetRestriction",
  });

export interface GoogleAdsSearchads360V0Common__SearchAds360ProductAdInfo {}

export const GoogleAdsSearchads360V0Common__SearchAds360ProductAdInfo: Schema.Schema<GoogleAdsSearchads360V0Common__SearchAds360ProductAdInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleAdsSearchads360V0Common__SearchAds360ProductAdInfo",
  });

export interface GoogleAdsSearchads360V0Common__SearchAds360TextAdInfo {
  /** The headline of the ad. */
  headline?: string;
  /** The displayed mobile URL of the ad. */
  displayMobileUrl?: string;
  /** The tracking id of the ad. */
  adTrackingId?: string;
  /** The first line of the ad's description. */
  description1?: string;
  /** The second line of the ad's description. */
  description2?: string;
  /** The displayed URL of the ad. */
  displayUrl?: string;
}

export const GoogleAdsSearchads360V0Common__SearchAds360TextAdInfo: Schema.Schema<GoogleAdsSearchads360V0Common__SearchAds360TextAdInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    headline: Schema.optional(Schema.String),
    displayMobileUrl: Schema.optional(Schema.String),
    adTrackingId: Schema.optional(Schema.String),
    description1: Schema.optional(Schema.String),
    description2: Schema.optional(Schema.String),
    displayUrl: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Common__SearchAds360TextAdInfo",
  });

export interface GoogleAdsSearchads360V0Resources__ProductBiddingCategoryConstant {
  /** Output only. ID of the product bidding category. This ID is equivalent to the google_product_category ID as described in this article: https://support.google.com/merchants/answer/6324436. */
  id?: string;
  /** Output only. Display value of the product bidding category localized according to language_code. */
  localizedName?: string;
  /** Output only. Resource name of the parent product bidding category. */
  productBiddingCategoryConstantParent?: string;
  /** Output only. Two-letter upper-case country code of the product bidding category. */
  countryCode?: string;
  /** Output only. The resource name of the product bidding category. Product bidding category resource names have the form: `productBiddingCategoryConstants/{country_code}~{level}~{id}` */
  resourceName?: string;
  /** Output only. Language code of the product bidding category. */
  languageCode?: string;
  /** Output only. Level of the product bidding category. */
  level?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "LEVEL1"
    | "LEVEL2"
    | "LEVEL3"
    | "LEVEL4"
    | "LEVEL5"
    | (string & {});
  /** Output only. Status of the product bidding category. */
  status?: "UNSPECIFIED" | "UNKNOWN" | "ACTIVE" | "OBSOLETE" | (string & {});
}

export const GoogleAdsSearchads360V0Resources__ProductBiddingCategoryConstant: Schema.Schema<GoogleAdsSearchads360V0Resources__ProductBiddingCategoryConstant> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    localizedName: Schema.optional(Schema.String),
    productBiddingCategoryConstantParent: Schema.optional(Schema.String),
    countryCode: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    level: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Resources__ProductBiddingCategoryConstant",
  });

export interface GoogleAdsSearchads360V0Common__TargetSpend {
  /** Deprecated: The spend target under which to maximize clicks. A TargetSpend bidder will attempt to spend the smaller of this value or the natural throttling spend amount. If not specified, the budget is used as the spend target. This field is deprecated and should no longer be used. See https://ads-developers.googleblog.com/2020/05/reminder-about-sunset-creation-of.html for details. */
  targetSpendMicros?: string;
  /** Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. */
  cpcBidCeilingMicros?: string;
}

export const GoogleAdsSearchads360V0Common__TargetSpend: Schema.Schema<GoogleAdsSearchads360V0Common__TargetSpend> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetSpendMicros: Schema.optional(Schema.String),
    cpcBidCeilingMicros: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Common__TargetSpend" });

export interface GoogleAdsSearchads360V0Services__SearchSearchAds360Request {
  /** Token of the page to retrieve. If not specified, the first page of results will be returned. Use the value obtained from `next_page_token` in the previous response in order to request the next page of results. */
  pageToken?: string;
  /** If true, the total number of results that match the query ignoring the LIMIT clause will be included in the response. Default is false. */
  returnTotalResultsCount?: boolean;
  /** If true, the request is validated but not executed. */
  validateOnly?: boolean;
  /** Determines whether a summary row will be returned. By default, summary row is not returned. If requested, the summary row will be sent in a response by itself after all other query results are returned. */
  summaryRowSetting?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "NO_SUMMARY_ROW"
    | "SUMMARY_ROW_WITH_RESULTS"
    | "SUMMARY_ROW_ONLY"
    | (string & {});
  /** Required. The query string. */
  query?: string;
  /** Number of elements to retrieve in a single page. When too large a page is requested, the server may decide to further limit the number of returned resources. */
  pageSize?: number;
}

export const GoogleAdsSearchads360V0Services__SearchSearchAds360Request: Schema.Schema<GoogleAdsSearchads360V0Services__SearchSearchAds360Request> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String),
    returnTotalResultsCount: Schema.optional(Schema.Boolean),
    validateOnly: Schema.optional(Schema.Boolean),
    summaryRowSetting: Schema.optional(Schema.String),
    query: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Services__SearchSearchAds360Request",
  });

export interface GoogleAdsSearchads360V0Resources__CampaignAssetSet {
  /** Immutable. The asset set which is linked to the campaign. */
  assetSet?: string;
  /** Immutable. The campaign to which this asset set is linked. */
  campaign?: string;
  /** Immutable. The resource name of the campaign asset set. Asset set asset resource names have the form: `customers/{customer_id}/campaignAssetSets/{campaign_id}~{asset_set_id}` */
  resourceName?: string;
  /** Output only. The status of the campaign asset set asset. Read-only. */
  status?: "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVED" | (string & {});
}

export const GoogleAdsSearchads360V0Resources__CampaignAssetSet: Schema.Schema<GoogleAdsSearchads360V0Resources__CampaignAssetSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assetSet: Schema.optional(Schema.String),
    campaign: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__CampaignAssetSet",
  });

export interface GoogleAdsSearchads360V0Common__KeywordInfo {
  /** The text of the keyword (at most 80 characters and 10 words). */
  text?: string;
  /** The match type of the keyword. */
  matchType?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "EXACT"
    | "PHRASE"
    | "BROAD"
    | (string & {});
}

export const GoogleAdsSearchads360V0Common__KeywordInfo: Schema.Schema<GoogleAdsSearchads360V0Common__KeywordInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    matchType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Common__KeywordInfo" });

export interface GoogleAdsSearchads360V0Common__DeviceInfo {
  /** Type of the device. */
  type?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "MOBILE"
    | "TABLET"
    | "DESKTOP"
    | "CONNECTED_TV"
    | "OTHER"
    | (string & {});
}

export const GoogleAdsSearchads360V0Common__DeviceInfo: Schema.Schema<GoogleAdsSearchads360V0Common__DeviceInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Common__DeviceInfo" });

export interface GoogleAdsSearchads360V0Common__GenderInfo {
  /** Type of the gender. */
  type?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "MALE"
    | "FEMALE"
    | "UNDETERMINED"
    | (string & {});
}

export const GoogleAdsSearchads360V0Common__GenderInfo: Schema.Schema<GoogleAdsSearchads360V0Common__GenderInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Common__GenderInfo" });

export interface GoogleAdsSearchads360V0Common__UserListInfo {
  /** The User List resource name. */
  userList?: string;
}

export const GoogleAdsSearchads360V0Common__UserListInfo: Schema.Schema<GoogleAdsSearchads360V0Common__UserListInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userList: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Common__UserListInfo" });

export interface GoogleAdsSearchads360V0Common__LocationInfo {
  /** The geo target constant resource name. */
  geoTargetConstant?: string;
}

export const GoogleAdsSearchads360V0Common__LocationInfo: Schema.Schema<GoogleAdsSearchads360V0Common__LocationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    geoTargetConstant: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Common__LocationInfo" });

export interface GoogleAdsSearchads360V0Resources__CampaignCriterion {
  /** Immutable. Location Group */
  locationGroup?: GoogleAdsSearchads360V0Common__LocationGroupInfo;
  /** Immutable. The resource name of the campaign criterion. Campaign criterion resource names have the form: `customers/{customer_id}/campaignCriteria/{campaign_id}~{criterion_id}` */
  resourceName?: string;
  /** Output only. The ID of the criterion. This field is ignored during mutate. */
  criterionId?: string;
  /** The modifier for the bids when the criterion matches. The modifier must be in the range: 0.1 - 10.0. Most targetable criteria types support modifiers. Use 0 to opt out of a Device type. */
  bidModifier?: number;
  /** Output only. The datetime when this campaign criterion was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format. */
  lastModifiedTime?: string;
  /** Immutable. Keyword. */
  keyword?: GoogleAdsSearchads360V0Common__KeywordInfo;
  /** Immutable. Webpage. */
  webpage?: GoogleAdsSearchads360V0Common__WebpageInfo;
  /** Immutable. Whether to target (`false`) or exclude (`true`) the criterion. */
  negative?: boolean;
  /** The status of the criterion. */
  status?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ENABLED"
    | "PAUSED"
    | "REMOVED"
    | (string & {});
  /** Immutable. Device. */
  device?: GoogleAdsSearchads360V0Common__DeviceInfo;
  /** Output only. The type of the criterion. */
  type?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "KEYWORD"
    | "PLACEMENT"
    | "MOBILE_APP_CATEGORY"
    | "MOBILE_APPLICATION"
    | "DEVICE"
    | "LOCATION"
    | "LISTING_GROUP"
    | "AD_SCHEDULE"
    | "AGE_RANGE"
    | "GENDER"
    | "INCOME_RANGE"
    | "PARENTAL_STATUS"
    | "YOUTUBE_VIDEO"
    | "YOUTUBE_CHANNEL"
    | "USER_LIST"
    | "PROXIMITY"
    | "TOPIC"
    | "LISTING_SCOPE"
    | "LANGUAGE"
    | "IP_BLOCK"
    | "CONTENT_LABEL"
    | "CARRIER"
    | "USER_INTEREST"
    | "WEBPAGE"
    | "OPERATING_SYSTEM_VERSION"
    | "APP_PAYMENT_MODEL"
    | "MOBILE_DEVICE"
    | "CUSTOM_AFFINITY"
    | "CUSTOM_INTENT"
    | "LOCATION_GROUP"
    | "CUSTOM_AUDIENCE"
    | "COMBINED_AUDIENCE"
    | "KEYWORD_THEME"
    | "AUDIENCE"
    | "LOCAL_SERVICE_ID"
    | "BRAND"
    | "BRAND_LIST"
    | "LIFE_EVENT"
    | (string & {});
  /** Output only. The display name of the criterion. This field is ignored for mutates. */
  displayName?: string;
  /** Immutable. Language. */
  language?: GoogleAdsSearchads360V0Common__LanguageInfo;
  /** Immutable. Age range. */
  ageRange?: GoogleAdsSearchads360V0Common__AgeRangeInfo;
  /** Immutable. Gender. */
  gender?: GoogleAdsSearchads360V0Common__GenderInfo;
  /** Immutable. User List. */
  userList?: GoogleAdsSearchads360V0Common__UserListInfo;
  /** Immutable. Location. */
  location?: GoogleAdsSearchads360V0Common__LocationInfo;
}

export const GoogleAdsSearchads360V0Resources__CampaignCriterion: Schema.Schema<GoogleAdsSearchads360V0Resources__CampaignCriterion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationGroup: Schema.optional(
      GoogleAdsSearchads360V0Common__LocationGroupInfo,
    ),
    resourceName: Schema.optional(Schema.String),
    criterionId: Schema.optional(Schema.String),
    bidModifier: Schema.optional(Schema.Number),
    lastModifiedTime: Schema.optional(Schema.String),
    keyword: Schema.optional(GoogleAdsSearchads360V0Common__KeywordInfo),
    webpage: Schema.optional(GoogleAdsSearchads360V0Common__WebpageInfo),
    negative: Schema.optional(Schema.Boolean),
    status: Schema.optional(Schema.String),
    device: Schema.optional(GoogleAdsSearchads360V0Common__DeviceInfo),
    type: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    language: Schema.optional(GoogleAdsSearchads360V0Common__LanguageInfo),
    ageRange: Schema.optional(GoogleAdsSearchads360V0Common__AgeRangeInfo),
    gender: Schema.optional(GoogleAdsSearchads360V0Common__GenderInfo),
    userList: Schema.optional(GoogleAdsSearchads360V0Common__UserListInfo),
    location: Schema.optional(GoogleAdsSearchads360V0Common__LocationInfo),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__CampaignCriterion",
  });

export interface GoogleAdsSearchads360V0Services__ListAccessibleCustomersResponse {
  /** Resource name of customers directly accessible by the user authenticating the call. */
  resourceNames?: ReadonlyArray<string>;
}

export const GoogleAdsSearchads360V0Services__ListAccessibleCustomersResponse: Schema.Schema<GoogleAdsSearchads360V0Services__ListAccessibleCustomersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Services__ListAccessibleCustomersResponse",
  });

export interface GoogleAdsSearchads360V0Resources__AdGroupLabel {
  /** Immutable. The resource name of the ad group label. Ad group label resource names have the form: `customers/{owner_customer_id}/adGroupLabels/{ad_group_id}~{label_id}` */
  resourceName?: string;
  /** Immutable. The label assigned to the ad group. */
  label?: string;
  /** Immutable. The ad group to which the label is attached. */
  adGroup?: string;
  /** Output only. The ID of the Customer which owns the label. */
  ownerCustomerId?: string;
}

export const GoogleAdsSearchads360V0Resources__AdGroupLabel: Schema.Schema<GoogleAdsSearchads360V0Resources__AdGroupLabel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceName: Schema.optional(Schema.String),
    label: Schema.optional(Schema.String),
    adGroup: Schema.optional(Schema.String),
    ownerCustomerId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Resources__AdGroupLabel" });

export interface GoogleAdsSearchads360V0Resources__AdGroupAsset {
  /** Required. Immutable. The ad group to which the asset is linked. */
  adGroup?: string;
  /** Required. Immutable. The asset which is linked to the ad group. */
  asset?: string;
  /** Status of the ad group asset. */
  status?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ENABLED"
    | "REMOVED"
    | "PAUSED"
    | (string & {});
  /** Immutable. The resource name of the ad group asset. AdGroupAsset resource names have the form: `customers/{customer_id}/adGroupAssets/{ad_group_id}~{asset_id}~{field_type}` */
  resourceName?: string;
}

export const GoogleAdsSearchads360V0Resources__AdGroupAsset: Schema.Schema<GoogleAdsSearchads360V0Resources__AdGroupAsset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adGroup: Schema.optional(Schema.String),
    asset: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Resources__AdGroupAsset" });

export interface GoogleAdsSearchads360V0Services__CustomColumnHeader {
  /** The custom column ID. */
  id?: string;
  /** The user defined name of the custom column. */
  name?: string;
  /** True when the custom column references metrics. */
  referencesMetrics?: boolean;
}

export const GoogleAdsSearchads360V0Services__CustomColumnHeader: Schema.Schema<GoogleAdsSearchads360V0Services__CustomColumnHeader> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    referencesMetrics: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Services__CustomColumnHeader",
  });

export interface GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_TargetSpend {
  /** Output only. The spend target under which to maximize clicks. A TargetSpend bidder will attempt to spend the smaller of this value or the natural throttling spend amount. If not specified, the budget is used as the spend target. This field is deprecated and should no longer be used. See https://ads-developers.googleblog.com/2020/05/reminder-about-sunset-creation-of.html for details. */
  targetSpendMicros?: string;
  /** Output only. Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. */
  cpcBidCeilingMicros?: string;
}

export const GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_TargetSpend: Schema.Schema<GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_TargetSpend> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetSpendMicros: Schema.optional(Schema.String),
    cpcBidCeilingMicros: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_TargetSpend",
  });

export interface GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_MaximizeConversionValue {
  /** Output only. The target return on ad spend (ROAS) option. If set, the bid strategy will maximize revenue while averaging the target return on ad spend. If the target ROAS is high, the bid strategy may not be able to spend the full budget. If the target ROAS is not set, the bid strategy will aim to achieve the highest possible ROAS for the budget. */
  targetRoas?: number;
}

export const GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_MaximizeConversionValue: Schema.Schema<GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_MaximizeConversionValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetRoas: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_MaximizeConversionValue",
  });

export interface GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_MaximizeConversions {
  /** Output only. The target cost per acquisition (CPA) option. This is the average amount that you would like to spend per acquisition. */
  targetCpaMicros?: string;
  /** Output only. The target cost per acquisition (CPA) option. This is the average amount that you would like to spend per acquisition. */
  targetCpa?: string;
}

export const GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_MaximizeConversions: Schema.Schema<GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_MaximizeConversions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetCpaMicros: Schema.optional(Schema.String),
    targetCpa: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_MaximizeConversions",
  });

export interface GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_TargetCpa {
  /** Output only. Average CPA target. This target should be greater than or equal to minimum billable unit based on the currency for the account. */
  targetCpaMicros?: string;
}

export const GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_TargetCpa: Schema.Schema<GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_TargetCpa> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetCpaMicros: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_TargetCpa",
  });

export interface GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_TargetImpressionShare {
  /** Output only. The highest CPC bid the automated bidding system is permitted to specify. This is a required field entered by the advertiser that sets the ceiling and specified in local micros. */
  cpcBidCeilingMicros?: string;
  /** Output only. The targeted location on the search results page. */
  location?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ANYWHERE_ON_PAGE"
    | "TOP_OF_PAGE"
    | "ABSOLUTE_TOP_OF_PAGE"
    | (string & {});
  /** The chosen fraction of ads to be shown in the targeted location in micros. For example, 1% equals 10,000. */
  locationFractionMicros?: string;
}

export const GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_TargetImpressionShare: Schema.Schema<GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_TargetImpressionShare> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cpcBidCeilingMicros: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    locationFractionMicros: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_TargetImpressionShare",
  });

export interface GoogleAdsSearchads360V0Resources__AccessibleBiddingStrategy {
  /** Output only. A bidding strategy that helps you maximize revenue while averaging a specific target Return On Ad Spend (ROAS). */
  targetRoas?: GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_TargetRoas;
  /** Output only. A bid strategy that sets your bids to help get as many clicks as possible within your budget. */
  targetSpend?: GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_TargetSpend;
  /** Output only. The ID of the bidding strategy. */
  id?: string;
  /** Output only. The name of the bidding strategy. */
  name?: string;
  /** Output only. An automated bidding strategy to help get the most conversion value for your campaigns while spending your budget. */
  maximizeConversionValue?: GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_MaximizeConversionValue;
  /** Output only. An automated bidding strategy to help get the most conversions for your campaigns while spending your budget. */
  maximizeConversions?: GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_MaximizeConversions;
  /** Output only. descriptive_name of the Customer which owns the bidding strategy. */
  ownerDescriptiveName?: string;
  /** Output only. A bidding strategy that sets bids to help get as many conversions as possible at the target cost-per-acquisition (CPA) you set. */
  targetCpa?: GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_TargetCpa;
  /** Output only. A bidding strategy that automatically optimizes towards a chosen percentage of impressions. */
  targetImpressionShare?: GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_TargetImpressionShare;
  /** Output only. The ID of the Customer which owns the bidding strategy. */
  ownerCustomerId?: string;
  /** Output only. The resource name of the accessible bidding strategy. AccessibleBiddingStrategy resource names have the form: `customers/{customer_id}/accessibleBiddingStrategies/{bidding_strategy_id}` */
  resourceName?: string;
  /** Output only. The type of the bidding strategy. */
  type?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "COMMISSION"
    | "ENHANCED_CPC"
    | "INVALID"
    | "MANUAL_CPA"
    | "MANUAL_CPC"
    | "MANUAL_CPM"
    | "MANUAL_CPV"
    | "MAXIMIZE_CONVERSIONS"
    | "MAXIMIZE_CONVERSION_VALUE"
    | "PAGE_ONE_PROMOTED"
    | "PERCENT_CPC"
    | "TARGET_CPA"
    | "TARGET_CPM"
    | "TARGET_IMPRESSION_SHARE"
    | "TARGET_OUTRANK_SHARE"
    | "TARGET_ROAS"
    | "TARGET_SPEND"
    | (string & {});
}

export const GoogleAdsSearchads360V0Resources__AccessibleBiddingStrategy: Schema.Schema<GoogleAdsSearchads360V0Resources__AccessibleBiddingStrategy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetRoas: Schema.optional(
      GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_TargetRoas,
    ),
    targetSpend: Schema.optional(
      GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_TargetSpend,
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    maximizeConversionValue: Schema.optional(
      GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_MaximizeConversionValue,
    ),
    maximizeConversions: Schema.optional(
      GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_MaximizeConversions,
    ),
    ownerDescriptiveName: Schema.optional(Schema.String),
    targetCpa: Schema.optional(
      GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_TargetCpa,
    ),
    targetImpressionShare: Schema.optional(
      GoogleAdsSearchads360V0Resources_AccessibleBiddingStrategy_TargetImpressionShare,
    ),
    ownerCustomerId: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__AccessibleBiddingStrategy",
  });

export interface GoogleAdsSearchads360V0Resources_Campaign_ShoppingSetting {
  /** Sales country of products to include in the campaign. */
  salesCountry?: string;
  /** Priority of the campaign. Campaigns with numerically higher priorities take precedence over those with lower priorities. This field is required for Shopping campaigns, with values between 0 and 2, inclusive. This field is optional for Smart Shopping campaigns, but must be equal to 3 if set. */
  campaignPriority?: number;
  /** Feed label of products to include in the campaign. Valid feed labels may contain a maximum of 20 characters including uppercase letters, numbers, hyphens, and underscores. If you previously used the deprecated `sales_country` in the two-letter country code (`XX`) format, the `feed_label` field should be used instead. For more information see the [feed label](//support.google.com/merchants/answer/12453549) support article. */
  feedLabel?: string;
  /** Immutable. ID of the Merchant Center account. This field is required for create operations. This field is immutable for Shopping campaigns. */
  merchantId?: string;
  /** Whether to include local products. */
  enableLocal?: boolean;
  /** Immutable. Whether to target Vehicle Listing inventory. */
  useVehicleInventory?: boolean;
}

export const GoogleAdsSearchads360V0Resources_Campaign_ShoppingSetting: Schema.Schema<GoogleAdsSearchads360V0Resources_Campaign_ShoppingSetting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    salesCountry: Schema.optional(Schema.String),
    campaignPriority: Schema.optional(Schema.Number),
    feedLabel: Schema.optional(Schema.String),
    merchantId: Schema.optional(Schema.String),
    enableLocal: Schema.optional(Schema.Boolean),
    useVehicleInventory: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources_Campaign_ShoppingSetting",
  });

export interface GoogleAdsSearchads360V0Resources_Campaign_TrackingSetting {
  /** Output only. The url used for dynamic tracking. */
  trackingUrl?: string;
}

export const GoogleAdsSearchads360V0Resources_Campaign_TrackingSetting: Schema.Schema<GoogleAdsSearchads360V0Resources_Campaign_TrackingSetting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trackingUrl: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources_Campaign_TrackingSetting",
  });

export interface GoogleAdsSearchads360V0Common__PercentCpc {
  /** Maximum bid limit that can be set by the bid strategy. This is an optional field entered by the advertiser and specified in local micros. Note: A zero value is interpreted in the same way as having bid_ceiling undefined. */
  cpcBidCeilingMicros?: string;
  /** Adjusts the bid for each auction upward or downward, depending on the likelihood of a conversion. Individual bids may exceed cpc_bid_ceiling_micros, but the average bid amount for a campaign should not. */
  enhancedCpcEnabled?: boolean;
}

export const GoogleAdsSearchads360V0Common__PercentCpc: Schema.Schema<GoogleAdsSearchads360V0Common__PercentCpc> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cpcBidCeilingMicros: Schema.optional(Schema.String),
    enhancedCpcEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Common__PercentCpc" });

export interface GoogleAdsSearchads360V0Common__AudienceInfo {
  /** The Audience resource name. */
  audience?: string;
}

export const GoogleAdsSearchads360V0Common__AudienceInfo: Schema.Schema<GoogleAdsSearchads360V0Common__AudienceInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audience: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Common__AudienceInfo" });

export interface GoogleAdsSearchads360V0Resources__AssetGroupSignal {
  /** Immutable. The audience signal to be used by the performance max campaign. */
  audience?: GoogleAdsSearchads360V0Common__AudienceInfo;
  /** Immutable. The asset group which this asset group signal belongs to. */
  assetGroup?: string;
  /** Immutable. The resource name of the asset group signal. Asset group signal resource name have the form: `customers/{customer_id}/assetGroupSignals/{asset_group_id}~{signal_id}` */
  resourceName?: string;
}

export const GoogleAdsSearchads360V0Resources__AssetGroupSignal: Schema.Schema<GoogleAdsSearchads360V0Resources__AssetGroupSignal> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audience: Schema.optional(GoogleAdsSearchads360V0Common__AudienceInfo),
    assetGroup: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__AssetGroupSignal",
  });

export interface GoogleAdsSearchads360V0Common__AssetUsage {
  /** Resource name of the asset. */
  asset?: string;
  /** The served field type of the asset. */
  servedAssetFieldType?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "HEADLINE_1"
    | "HEADLINE_2"
    | "HEADLINE_3"
    | "DESCRIPTION_1"
    | "DESCRIPTION_2"
    | "HEADLINE"
    | "HEADLINE_IN_PORTRAIT"
    | "LONG_HEADLINE"
    | "DESCRIPTION"
    | "DESCRIPTION_IN_PORTRAIT"
    | "BUSINESS_NAME_IN_PORTRAIT"
    | "BUSINESS_NAME"
    | "MARKETING_IMAGE"
    | "MARKETING_IMAGE_IN_PORTRAIT"
    | "SQUARE_MARKETING_IMAGE"
    | "PORTRAIT_MARKETING_IMAGE"
    | "LOGO"
    | "LANDSCAPE_LOGO"
    | "CALL_TO_ACTION"
    | "YOU_TUBE_VIDEO"
    | "SITELINK"
    | "CALL"
    | "MOBILE_APP"
    | "CALLOUT"
    | "STRUCTURED_SNIPPET"
    | "PRICE"
    | "PROMOTION"
    | "AD_IMAGE"
    | "LEAD_FORM"
    | "BUSINESS_LOGO"
    | "DESCRIPTION_PREFIX"
    | "HEADLINE_AS_SITELINK_POSITION_ONE"
    | "HEADLINE_AS_SITELINK_POSITION_TWO"
    | "DESCRIPTION_LINE_HEADLINE_AS_SITELINK_POSITION_ONE"
    | "DESCRIPTION_LINE_HEADLINE_AS_SITELINK_POSITION_TWO"
    | (string & {});
}

export const GoogleAdsSearchads360V0Common__AssetUsage: Schema.Schema<GoogleAdsSearchads360V0Common__AssetUsage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    asset: Schema.optional(Schema.String),
    servedAssetFieldType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Common__AssetUsage" });

export interface GoogleAdsSearchads360V0Resources__AssetGroupAssetCombinationData {
  /** Output only. Served assets. */
  assetCombinationServedAssets?: ReadonlyArray<GoogleAdsSearchads360V0Common__AssetUsage>;
}

export const GoogleAdsSearchads360V0Resources__AssetGroupAssetCombinationData: Schema.Schema<GoogleAdsSearchads360V0Resources__AssetGroupAssetCombinationData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assetCombinationServedAssets: Schema.optional(
      Schema.Array(GoogleAdsSearchads360V0Common__AssetUsage),
    ),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Resources__AssetGroupAssetCombinationData",
  });

export interface GoogleAdsSearchads360V0Resources_ConversionAction_AttributionModelSettings {
  /** The attribution model type of this conversion action. */
  attributionModel?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "EXTERNAL"
    | "GOOGLE_ADS_LAST_CLICK"
    | "GOOGLE_SEARCH_ATTRIBUTION_FIRST_CLICK"
    | "GOOGLE_SEARCH_ATTRIBUTION_LINEAR"
    | "GOOGLE_SEARCH_ATTRIBUTION_TIME_DECAY"
    | "GOOGLE_SEARCH_ATTRIBUTION_POSITION_BASED"
    | "GOOGLE_SEARCH_ATTRIBUTION_DATA_DRIVEN"
    | (string & {});
  /** Output only. The status of the data-driven attribution model for the conversion action. */
  dataDrivenModelStatus?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "AVAILABLE"
    | "STALE"
    | "EXPIRED"
    | "NEVER_GENERATED"
    | (string & {});
}

export const GoogleAdsSearchads360V0Resources_ConversionAction_AttributionModelSettings: Schema.Schema<GoogleAdsSearchads360V0Resources_ConversionAction_AttributionModelSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attributionModel: Schema.optional(Schema.String),
    dataDrivenModelStatus: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Resources_ConversionAction_AttributionModelSettings",
  });

export interface GoogleAdsSearchads360V0Resources__CustomerAsset {
  /** Required. Immutable. The asset which is linked to the customer. */
  asset?: string;
  /** Status of the customer asset. */
  status?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ENABLED"
    | "REMOVED"
    | "PAUSED"
    | (string & {});
  /** Immutable. The resource name of the customer asset. CustomerAsset resource names have the form: `customers/{customer_id}/customerAssets/{asset_id}~{field_type}` */
  resourceName?: string;
}

export const GoogleAdsSearchads360V0Resources__CustomerAsset: Schema.Schema<GoogleAdsSearchads360V0Resources__CustomerAsset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    asset: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__CustomerAsset",
  });

export interface GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductCondition {
  /** Value of the condition. */
  condition?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "NEW"
    | "REFURBISHED"
    | "USED"
    | (string & {});
}

export const GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductCondition: Schema.Schema<GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    condition: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductCondition",
  });

export interface GoogleAdsSearchads360V0Resources__CustomColumn {
  /** Output only. ID of the custom column. */
  id?: string;
  /** Output only. User-defined name of the custom column. */
  name?: string;
  /** Output only. The type of the result value of the custom column. */
  valueType?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "STRING"
    | "INT64"
    | "DOUBLE"
    | "BOOLEAN"
    | "DATE"
    | (string & {});
  /** Output only. True when the custom column is referring to one or more attributes. */
  referencesAttributes?: boolean;
  /** Output only. True when the custom column is available to be used in the query of SearchAds360Service.Search and SearchAds360Service.SearchStream. */
  queryable?: boolean;
  /** Output only. True when the custom column is referring to one or more metrics. */
  referencesMetrics?: boolean;
  /** Output only. The list of the referenced system columns of this custom column. For example, A custom column "sum of impressions and clicks" has referenced system columns of {"metrics.clicks", "metrics.impressions"}. */
  referencedSystemColumns?: ReadonlyArray<string>;
  /** Output only. How the result value of the custom column should be interpreted. */
  renderType?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "NUMBER"
    | "PERCENT"
    | "MONEY"
    | "STRING"
    | "BOOLEAN"
    | "DATE"
    | (string & {});
  /** Output only. User-defined description of the custom column. */
  description?: string;
  /** Immutable. The resource name of the custom column. Custom column resource names have the form: `customers/{customer_id}/customColumns/{custom_column_id}` */
  resourceName?: string;
}

export const GoogleAdsSearchads360V0Resources__CustomColumn: Schema.Schema<GoogleAdsSearchads360V0Resources__CustomColumn> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    valueType: Schema.optional(Schema.String),
    referencesAttributes: Schema.optional(Schema.Boolean),
    queryable: Schema.optional(Schema.Boolean),
    referencesMetrics: Schema.optional(Schema.Boolean),
    referencedSystemColumns: Schema.optional(Schema.Array(Schema.String)),
    renderType: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Resources__CustomColumn" });

export interface GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsRequest {
  /** Token of the page to retrieve. If not specified, the first page of results will be returned. Use the value obtained from `next_page_token` in the previous response in order to request the next page of results. */
  pageToken?: string;
  /** Required. The query string. */
  query?: string;
  /** Number of elements to retrieve in a single page. When too large a page is requested, the server may decide to further limit the number of returned resources. */
  pageSize?: number;
}

export const GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsRequest: Schema.Schema<GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String),
    query: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsRequest",
  });

export interface GoogleAdsSearchads360V0Errors__SearchAds360Failure {
  /** The list of errors that occurred. */
  errors?: ReadonlyArray<GoogleAdsSearchads360V0Errors__SearchAds360Error>;
  /** The unique ID of the request that is used for debugging purposes. */
  requestId?: string;
}

export const GoogleAdsSearchads360V0Errors__SearchAds360Failure: Schema.Schema<GoogleAdsSearchads360V0Errors__SearchAds360Failure> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(
      Schema.Array(GoogleAdsSearchads360V0Errors__SearchAds360Error),
    ),
    requestId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Errors__SearchAds360Failure",
  });

export interface GoogleAdsSearchads360V0Common__ManualCpc {
  /** Whether bids are to be enhanced based on conversion optimizer data. */
  enhancedCpcEnabled?: boolean;
}

export const GoogleAdsSearchads360V0Common__ManualCpc: Schema.Schema<GoogleAdsSearchads360V0Common__ManualCpc> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enhancedCpcEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Common__ManualCpc" });

export interface GoogleAdsSearchads360V0Resources__Conversion {
  /** Output only. The timestamp of the visit that the conversion is attributed to. */
  conversionVisitDateTime?: string;
  /** Output only. The adjusted revenue in micros for the conversion event. This will always be in the currency of the serving account. */
  conversionRevenueMicros?: string;
  /** Output only. The quantity of items recorded by the conversion, as determined by the qty url parameter. The advertiser is responsible for dynamically populating the parameter (such as number of items sold in the conversion), otherwise it defaults to 1. */
  conversionQuantity?: string;
  /** Output only. The original, unchanged revenue associated with the Floodlight event (in the currency of the current report), before Floodlight currency instruction modifications. */
  floodlightOriginalRevenue?: string;
  /** Output only. The store in the Local Inventory Ad that was clicked on. This should match the store IDs used in your local products feed. */
  productStoreId?: string;
  /** Output only. The Search Ads 360 visit ID that the conversion is attributed to. */
  visitId?: string;
  /** Output only. The language (ISO-639-1) that has been set for the Merchant Center feed containing data about the product. */
  productLanguageCode?: string;
  /** Output only. For offline conversions, this is an ID provided by advertisers. If an advertiser doesn't specify such an ID, Search Ads 360 generates one. For online conversions, this is equal to the id column or the floodlight_order_id column depending on the advertiser's Floodlight instructions. */
  advertiserConversionId?: string;
  /** Output only. The Floodlight order ID provided by the advertiser for the conversion. */
  floodlightOrderId?: string;
  /** Output only. The ID of the conversion */
  id?: string;
  /** Output only. Ad ID. A value of 0 indicates that the ad is unattributed. */
  adId?: string;
  /** Output only. ID of the asset which was interacted with during the conversion event. */
  assetId?: string;
  /** Output only. The Search Ads 360 inventory account ID containing the product that was clicked on. Search Ads 360 generates this ID when you link an inventory account in Search Ads 360. */
  merchantId?: string;
  /** Output only. The status of the conversion, either ENABLED or REMOVED.. */
  status?: "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVED" | (string & {});
  /** Output only. The timestamp of the conversion event. */
  conversionDateTime?: string;
  /** Output only. Asset field type of the conversion event. */
  assetFieldType?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "HEADLINE"
    | "DESCRIPTION"
    | "MANDATORY_AD_TEXT"
    | "MARKETING_IMAGE"
    | "MEDIA_BUNDLE"
    | "YOUTUBE_VIDEO"
    | "BOOK_ON_GOOGLE"
    | "LEAD_FORM"
    | "PROMOTION"
    | "CALLOUT"
    | "STRUCTURED_SNIPPET"
    | "SITELINK"
    | "MOBILE_APP"
    | "HOTEL_CALLOUT"
    | "CALL"
    | "PRICE"
    | "LONG_HEADLINE"
    | "BUSINESS_NAME"
    | "SQUARE_MARKETING_IMAGE"
    | "PORTRAIT_MARKETING_IMAGE"
    | "LOGO"
    | "LANDSCAPE_LOGO"
    | "VIDEO"
    | "CALL_TO_ACTION_SELECTION"
    | "AD_IMAGE"
    | "BUSINESS_LOGO"
    | "HOTEL_PROPERTY"
    | "DISCOVERY_CAROUSEL_CARD"
    | "LONG_DESCRIPTION"
    | "CALL_TO_ACTION"
    | (string & {});
  /** Output only. The ID of the product clicked on. */
  productId?: string;
  /** Output only. What the conversion is attributed to: Visit or Keyword+Ad. */
  attributionType?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "VISIT"
    | "CRITERION_AD"
    | (string & {});
  /** Output only. The sales channel of the product that was clicked on: Online or Local. */
  productChannel?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ONLINE"
    | "LOCAL"
    | (string & {});
  /** Output only. The timestamp of the last time the conversion was modified. */
  conversionLastModifiedDateTime?: string;
  /** Output only. The country (ISO-3166-format) registered for the inventory feed that contains the product clicked on. */
  productCountryCode?: string;
  /** Output only. A unique string, for the visit that the conversion is attributed to, that is passed to the landing page as the click id URL parameter. */
  clickId?: string;
  /** Output only. The resource name of the conversion. Conversion resource names have the form: `customers/{customer_id}/conversions/{ad_group_id}~{criterion_id}~{ds_conversion_id}` */
  resourceName?: string;
  /** Output only. Search Ads 360 criterion ID. A value of 0 indicates that the criterion is unattributed. */
  criterionId?: string;
}

export const GoogleAdsSearchads360V0Resources__Conversion: Schema.Schema<GoogleAdsSearchads360V0Resources__Conversion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversionVisitDateTime: Schema.optional(Schema.String),
    conversionRevenueMicros: Schema.optional(Schema.String),
    conversionQuantity: Schema.optional(Schema.String),
    floodlightOriginalRevenue: Schema.optional(Schema.String),
    productStoreId: Schema.optional(Schema.String),
    visitId: Schema.optional(Schema.String),
    productLanguageCode: Schema.optional(Schema.String),
    advertiserConversionId: Schema.optional(Schema.String),
    floodlightOrderId: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    adId: Schema.optional(Schema.String),
    assetId: Schema.optional(Schema.String),
    merchantId: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    conversionDateTime: Schema.optional(Schema.String),
    assetFieldType: Schema.optional(Schema.String),
    productId: Schema.optional(Schema.String),
    attributionType: Schema.optional(Schema.String),
    productChannel: Schema.optional(Schema.String),
    conversionLastModifiedDateTime: Schema.optional(Schema.String),
    productCountryCode: Schema.optional(Schema.String),
    clickId: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    criterionId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Resources__Conversion" });

export interface GoogleAdsSearchads360V23Services__PromoteExperimentMetadata {
  /** Required. The promoted experiment. */
  experiment?: string;
}

export const GoogleAdsSearchads360V23Services__PromoteExperimentMetadata: Schema.Schema<GoogleAdsSearchads360V23Services__PromoteExperimentMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    experiment: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V23Services__PromoteExperimentMetadata",
  });

export interface GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductType {
  /** Value of the type. */
  value?: string;
  /** Level of the type. */
  level?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "LEVEL1"
    | "LEVEL2"
    | "LEVEL3"
    | "LEVEL4"
    | "LEVEL5"
    | (string & {});
}

export const GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductType: Schema.Schema<GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    level: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductType",
  });

export interface GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductItemId {
  /** Value of the id. */
  value?: string;
}

export const GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductItemId: Schema.Schema<GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductItemId> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductItemId",
  });

export interface GoogleAdsSearchads360V0Resources__AdGroupAudienceView {
  /** Output only. The resource name of the ad group audience view. Ad group audience view resource names have the form: `customers/{customer_id}/adGroupAudienceViews/{ad_group_id}~{criterion_id}` */
  resourceName?: string;
}

export const GoogleAdsSearchads360V0Resources__AdGroupAudienceView: Schema.Schema<GoogleAdsSearchads360V0Resources__AdGroupAudienceView> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__AdGroupAudienceView",
  });

export interface GoogleAdsSearchads360V0Resources__AgeRangeView {
  /** Output only. The resource name of the age range view. Age range view resource names have the form: `customers/{customer_id}/ageRangeViews/{ad_group_id}~{criterion_id}` */
  resourceName?: string;
}

export const GoogleAdsSearchads360V0Resources__AgeRangeView: Schema.Schema<GoogleAdsSearchads360V0Resources__AgeRangeView> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Resources__AgeRangeView" });

export interface GoogleAdsSearchads360V0Common__SearchAds360ExpandedTextAdInfo {
  /** The third headline of the ad. */
  headline3?: string;
  /** The headline of the ad. */
  headline?: string;
  /** The tracking id of the ad. */
  adTrackingId?: string;
  /** The second headline of the ad. */
  headline2?: string;
  /** The first line of the ad's description. */
  description1?: string;
  /** The second line of the ad's description. */
  description2?: string;
  /** Text appended to the auto-generated visible URL with a delimiter. */
  path1?: string;
  /** Text appended to path1 with a delimiter. */
  path2?: string;
}

export const GoogleAdsSearchads360V0Common__SearchAds360ExpandedTextAdInfo: Schema.Schema<GoogleAdsSearchads360V0Common__SearchAds360ExpandedTextAdInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    headline3: Schema.optional(Schema.String),
    headline: Schema.optional(Schema.String),
    adTrackingId: Schema.optional(Schema.String),
    headline2: Schema.optional(Schema.String),
    description1: Schema.optional(Schema.String),
    description2: Schema.optional(Schema.String),
    path1: Schema.optional(Schema.String),
    path2: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Common__SearchAds360ExpandedTextAdInfo",
  });

export interface GoogleAdsSearchads360V0Resources__AssetGroupAsset {
  /** The description of the placement of the asset within the asset group. For example: HEADLINE, YOUTUBE_VIDEO etc */
  fieldType?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "HEADLINE"
    | "DESCRIPTION"
    | "MANDATORY_AD_TEXT"
    | "MARKETING_IMAGE"
    | "MEDIA_BUNDLE"
    | "YOUTUBE_VIDEO"
    | "BOOK_ON_GOOGLE"
    | "LEAD_FORM"
    | "PROMOTION"
    | "CALLOUT"
    | "STRUCTURED_SNIPPET"
    | "SITELINK"
    | "MOBILE_APP"
    | "HOTEL_CALLOUT"
    | "CALL"
    | "PRICE"
    | "LONG_HEADLINE"
    | "BUSINESS_NAME"
    | "SQUARE_MARKETING_IMAGE"
    | "PORTRAIT_MARKETING_IMAGE"
    | "LOGO"
    | "LANDSCAPE_LOGO"
    | "VIDEO"
    | "CALL_TO_ACTION_SELECTION"
    | "AD_IMAGE"
    | "BUSINESS_LOGO"
    | "HOTEL_PROPERTY"
    | "DISCOVERY_CAROUSEL_CARD"
    | "LONG_DESCRIPTION"
    | "CALL_TO_ACTION"
    | (string & {});
  /** The status of the link between an asset and asset group. */
  status?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ENABLED"
    | "REMOVED"
    | "PAUSED"
    | (string & {});
  /** Immutable. The resource name of the asset group asset. Asset group asset resource name have the form: `customers/{customer_id}/assetGroupAssets/{asset_group_id}~{asset_id}~{field_type}` */
  resourceName?: string;
  /** Immutable. The asset group which this asset group asset is linking. */
  assetGroup?: string;
  /** Immutable. The asset which this asset group asset is linking. */
  asset?: string;
}

export const GoogleAdsSearchads360V0Resources__AssetGroupAsset: Schema.Schema<GoogleAdsSearchads360V0Resources__AssetGroupAsset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldType: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    assetGroup: Schema.optional(Schema.String),
    asset: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__AssetGroupAsset",
  });

export interface GoogleAdsSearchads360V0Resources_AdGroupCriterion_PositionEstimates {
  /** Output only. The estimate of the CPC bid required for ad to be displayed at the top of the first page of search results. */
  topOfPageCpcMicros?: string;
}

export const GoogleAdsSearchads360V0Resources_AdGroupCriterion_PositionEstimates: Schema.Schema<GoogleAdsSearchads360V0Resources_AdGroupCriterion_PositionEstimates> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    topOfPageCpcMicros: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Resources_AdGroupCriterion_PositionEstimates",
  });

export interface GoogleAdsSearchads360V0Common__EnhancedCpc {}

export const GoogleAdsSearchads360V0Common__EnhancedCpc: Schema.Schema<GoogleAdsSearchads360V0Common__EnhancedCpc> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleAdsSearchads360V0Common__EnhancedCpc",
  });

export interface GoogleAdsSearchads360V0Common__ManualCpa {}

export const GoogleAdsSearchads360V0Common__ManualCpa: Schema.Schema<GoogleAdsSearchads360V0Common__ManualCpa> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleAdsSearchads360V0Common__ManualCpa",
  });

export interface GoogleAdsSearchads360V0Resources__CartDataSalesView {
  /** Output only. The resource name of the Cart data sales view. Cart data sales view resource names have the form: `customers/{customer_id}/cartDataSalesView` */
  resourceName?: string;
}

export const GoogleAdsSearchads360V0Resources__CartDataSalesView: Schema.Schema<GoogleAdsSearchads360V0Resources__CartDataSalesView> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__CartDataSalesView",
  });

export interface GoogleAdsSearchads360V0Services__RawEventConversionMetricHeader {
  /** The conversion custom variable ID. */
  id?: string;
  /** The user defined name of the raw event metric. */
  name?: string;
}

export const GoogleAdsSearchads360V0Services__RawEventConversionMetricHeader: Schema.Schema<GoogleAdsSearchads360V0Services__RawEventConversionMetricHeader> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Services__RawEventConversionMetricHeader",
  });

export interface GoogleAdsSearchads360V0Common__TargetImpressionShare {
  /** The chosen fraction of ads to be shown in the targeted location in micros. For example, 1% equals 10,000. */
  locationFractionMicros?: string;
  /** The targeted location on the search results page. */
  location?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ANYWHERE_ON_PAGE"
    | "TOP_OF_PAGE"
    | "ABSOLUTE_TOP_OF_PAGE"
    | (string & {});
  /** The highest CPC bid the automated bidding system is permitted to specify. This is a required field entered by the advertiser that sets the ceiling and specified in local micros. */
  cpcBidCeilingMicros?: string;
}

export const GoogleAdsSearchads360V0Common__TargetImpressionShare: Schema.Schema<GoogleAdsSearchads360V0Common__TargetImpressionShare> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationFractionMicros: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    cpcBidCeilingMicros: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Common__TargetImpressionShare",
  });

export interface GoogleAdsSearchads360V0Resources__AdGroupCriterionEffectiveLabel {
  /** Immutable. The resource name of the ad group criterion effective label. Ad group criterion effective label resource names have the form: `customers/{owner_customer_id}/adGroupCriterionEffectiveLabels/{ad_group_id}~{criterion_id}~{label_id}` */
  resourceName?: string;
  /** Immutable. The effective label assigned to the ad group criterion. */
  label?: string;
  /** Immutable. The ad group criterion to which the effective label is attached. */
  adGroupCriterion?: string;
  /** Output only. The ID of the Customer which owns the effective label. */
  ownerCustomerId?: string;
}

export const GoogleAdsSearchads360V0Resources__AdGroupCriterionEffectiveLabel: Schema.Schema<GoogleAdsSearchads360V0Resources__AdGroupCriterionEffectiveLabel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceName: Schema.optional(Schema.String),
    label: Schema.optional(Schema.String),
    adGroupCriterion: Schema.optional(Schema.String),
    ownerCustomerId: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Resources__AdGroupCriterionEffectiveLabel",
  });

export interface GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductCustomAttribute {
  /** String value of the product custom attribute. */
  value?: string;
  /** Indicates the index of the custom attribute. */
  index?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "INDEX0"
    | "INDEX1"
    | "INDEX2"
    | "INDEX3"
    | "INDEX4"
    | (string & {});
}

export const GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductCustomAttribute: Schema.Schema<GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductCustomAttribute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    index: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductCustomAttribute",
  });

export interface GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductChannel {
  /** Value of the locality. */
  channel?: "UNSPECIFIED" | "UNKNOWN" | "ONLINE" | "LOCAL" | (string & {});
}

export const GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductChannel: Schema.Schema<GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductChannel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channel: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductChannel",
  });

export interface GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBiddingCategory {
  /** ID of the product bidding category. This ID is equivalent to the google_product_category ID as described in this article: https://support.google.com/merchants/answer/6324436 */
  id?: string;
  /** Indicates the level of the category in the taxonomy. */
  level?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "LEVEL1"
    | "LEVEL2"
    | "LEVEL3"
    | "LEVEL4"
    | "LEVEL5"
    | (string & {});
}

export const GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBiddingCategory: Schema.Schema<GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBiddingCategory> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    level: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBiddingCategory",
  });

export interface GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBrand {
  /** String value of the product brand. */
  value?: string;
}

export const GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBrand: Schema.Schema<GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBrand> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBrand",
  });

export interface GoogleAdsSearchads360V0Resources__ListingGroupFilterDimension {
  /** Custom attribute of a product offer. */
  productCustomAttribute?: GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductCustomAttribute;
  /** Item id of a product offer. */
  productItemId?: GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductItemId;
  /** Locality of a product offer. */
  productChannel?: GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductChannel;
  /** Condition of a product offer. */
  productCondition?: GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductCondition;
  /** Bidding category of a product offer. */
  productBiddingCategory?: GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBiddingCategory;
  /** Brand of a product offer. */
  productBrand?: GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBrand;
  /** Type of a product offer. */
  productType?: GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductType;
}

export const GoogleAdsSearchads360V0Resources__ListingGroupFilterDimension: Schema.Schema<GoogleAdsSearchads360V0Resources__ListingGroupFilterDimension> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productCustomAttribute: Schema.optional(
      GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductCustomAttribute,
    ),
    productItemId: Schema.optional(
      GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductItemId,
    ),
    productChannel: Schema.optional(
      GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductChannel,
    ),
    productCondition: Schema.optional(
      GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductCondition,
    ),
    productBiddingCategory: Schema.optional(
      GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBiddingCategory,
    ),
    productBrand: Schema.optional(
      GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBrand,
    ),
    productType: Schema.optional(
      GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductType,
    ),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__ListingGroupFilterDimension",
  });

export interface GoogleAdsSearchads360V0Resources__ListingGroupFilterDimensionPath {
  /** Output only. The complete path of dimensions through the listing group filter hierarchy (excluding the root node) to this listing group filter. */
  dimensions?: ReadonlyArray<GoogleAdsSearchads360V0Resources__ListingGroupFilterDimension>;
}

export const GoogleAdsSearchads360V0Resources__ListingGroupFilterDimensionPath: Schema.Schema<GoogleAdsSearchads360V0Resources__ListingGroupFilterDimensionPath> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dimensions: Schema.optional(
      Schema.Array(
        GoogleAdsSearchads360V0Resources__ListingGroupFilterDimension,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Resources__ListingGroupFilterDimensionPath",
  });

export interface GoogleAdsSearchads360V0Resources__AssetGroupListingGroupFilter {
  /** Immutable. The resource name of the asset group listing group filter. Asset group listing group filter resource name have the form: `customers/{customer_id}/assetGroupListingGroupFilters/{asset_group_id}~{listing_group_filter_id}` */
  resourceName?: string;
  /** Dimension value with which this listing group is refining its parent. Undefined for the root group. */
  caseValue?: GoogleAdsSearchads360V0Resources__ListingGroupFilterDimension;
  /** Immutable. The asset group which this asset group listing group filter is part of. */
  assetGroup?: string;
  /** Immutable. Resource name of the parent listing group subdivision. Null for the root listing group filter node. */
  parentListingGroupFilter?: string;
  /** Immutable. Type of a listing group filter node. */
  type?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "SUBDIVISION"
    | "UNIT_INCLUDED"
    | "UNIT_EXCLUDED"
    | (string & {});
  /** Output only. The ID of the ListingGroupFilter. */
  id?: string;
  /** Output only. The path of dimensions defining this listing group filter. */
  path?: GoogleAdsSearchads360V0Resources__ListingGroupFilterDimensionPath;
  /** Immutable. The vertical the current node tree represents. All nodes in the same tree must belong to the same vertical. */
  vertical?: "UNSPECIFIED" | "UNKNOWN" | "SHOPPING" | (string & {});
}

export const GoogleAdsSearchads360V0Resources__AssetGroupListingGroupFilter: Schema.Schema<GoogleAdsSearchads360V0Resources__AssetGroupListingGroupFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceName: Schema.optional(Schema.String),
    caseValue: Schema.optional(
      GoogleAdsSearchads360V0Resources__ListingGroupFilterDimension,
    ),
    assetGroup: Schema.optional(Schema.String),
    parentListingGroupFilter: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    path: Schema.optional(
      GoogleAdsSearchads360V0Resources__ListingGroupFilterDimensionPath,
    ),
    vertical: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Resources__AssetGroupListingGroupFilter",
  });

export interface GoogleAdsSearchads360V0Services__ConversionCustomMetricHeader {
  /** The conversion custom metric ID. */
  id?: string;
  /** The user defined name of the conversion custom metric. */
  name?: string;
}

export const GoogleAdsSearchads360V0Services__ConversionCustomMetricHeader: Schema.Schema<GoogleAdsSearchads360V0Services__ConversionCustomMetricHeader> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Services__ConversionCustomMetricHeader",
  });

export interface GoogleAdsSearchads360V0Resources__AdGroupCriterionLabel {
  /** Output only. The ID of the Customer which owns the label. */
  ownerCustomerId?: string;
  /** Immutable. The ad group criterion to which the label is attached. */
  adGroupCriterion?: string;
  /** Immutable. The resource name of the ad group criterion label. Ad group criterion label resource names have the form: `customers/{owner_customer_id}/adGroupCriterionLabels/{ad_group_id}~{criterion_id}~{label_id}` */
  resourceName?: string;
  /** Immutable. The label assigned to the ad group criterion. */
  label?: string;
}

export const GoogleAdsSearchads360V0Resources__AdGroupCriterionLabel: Schema.Schema<GoogleAdsSearchads360V0Resources__AdGroupCriterionLabel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ownerCustomerId: Schema.optional(Schema.String),
    adGroupCriterion: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    label: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__AdGroupCriterionLabel",
  });

export interface GoogleAdsSearchads360V0Resources__AdGroupEffectiveLabel {
  /** Immutable. The ad group to which the effective label is attached. */
  adGroup?: string;
  /** Output only. The ID of the Customer which owns the effective label. */
  ownerCustomerId?: string;
  /** Immutable. The resource name of the ad group effective label. Ad group effective label resource names have the form: `customers/{owner_customer_id}/adGroupEffectiveLabels/{ad_group_id}~{label_id}` */
  resourceName?: string;
  /** Immutable. The effective label assigned to the ad group. */
  label?: string;
}

export const GoogleAdsSearchads360V0Resources__AdGroupEffectiveLabel: Schema.Schema<GoogleAdsSearchads360V0Resources__AdGroupEffectiveLabel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adGroup: Schema.optional(Schema.String),
    ownerCustomerId: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    label: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__AdGroupEffectiveLabel",
  });

export interface GoogleAdsSearchads360V0Common__SearchAds360ExpandedDynamicSearchAdInfo {
  /** The tracking id of the ad. */
  adTrackingId?: string;
  /** The first line of the ad's description. */
  description1?: string;
  /** The second line of the ad's description. */
  description2?: string;
}

export const GoogleAdsSearchads360V0Common__SearchAds360ExpandedDynamicSearchAdInfo: Schema.Schema<GoogleAdsSearchads360V0Common__SearchAds360ExpandedDynamicSearchAdInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adTrackingId: Schema.optional(Schema.String),
    description1: Schema.optional(Schema.String),
    description2: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Common__SearchAds360ExpandedDynamicSearchAdInfo",
  });

export interface GoogleAdsSearchads360V0Common__AdTextAsset {
  /** Asset text. */
  text?: string;
}

export const GoogleAdsSearchads360V0Common__AdTextAsset: Schema.Schema<GoogleAdsSearchads360V0Common__AdTextAsset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Common__AdTextAsset" });

export interface GoogleAdsSearchads360V0Common__SearchAds360ResponsiveSearchAdInfo {
  /** Text appended to the auto-generated visible URL with a delimiter. */
  path1?: string;
  /** The tracking id of the ad. */
  adTrackingId?: string;
  /** List of text assets for descriptions. When the ad serves the descriptions will be selected from this list. */
  descriptions?: ReadonlyArray<GoogleAdsSearchads360V0Common__AdTextAsset>;
  /** List of text assets for headlines. When the ad serves the headlines will be selected from this list. */
  headlines?: ReadonlyArray<GoogleAdsSearchads360V0Common__AdTextAsset>;
  /** Text appended to path1 with a delimiter. */
  path2?: string;
}

export const GoogleAdsSearchads360V0Common__SearchAds360ResponsiveSearchAdInfo: Schema.Schema<GoogleAdsSearchads360V0Common__SearchAds360ResponsiveSearchAdInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path1: Schema.optional(Schema.String),
    adTrackingId: Schema.optional(Schema.String),
    descriptions: Schema.optional(
      Schema.Array(GoogleAdsSearchads360V0Common__AdTextAsset),
    ),
    headlines: Schema.optional(
      Schema.Array(GoogleAdsSearchads360V0Common__AdTextAsset),
    ),
    path2: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Common__SearchAds360ResponsiveSearchAdInfo",
  });

export interface GoogleAdsSearchads360V0Common__FinalAppUrl {
  /** The operating system targeted by this URL. Required. */
  osType?: "UNSPECIFIED" | "UNKNOWN" | "IOS" | "ANDROID" | (string & {});
  /** The app deep link URL. Deep links specify a location in an app that corresponds to the content you'd like to show, and should be of the form {scheme}://{host_path} The scheme identifies which app to open. For your app, you can use a custom scheme that starts with the app's name. The host and path specify the unique location in the app where your content exists. Example: "exampleapp://productid_1234". Required. */
  url?: string;
}

export const GoogleAdsSearchads360V0Common__FinalAppUrl: Schema.Schema<GoogleAdsSearchads360V0Common__FinalAppUrl> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    osType: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Common__FinalAppUrl" });

export interface GoogleAdsSearchads360V0Resources__Ad {
  /** Immutable. Details pertaining to an expanded dynamic search ad. */
  expandedDynamicSearchAd?: GoogleAdsSearchads360V0Common__SearchAds360ExpandedDynamicSearchAdInfo;
  /** The URL template for constructing a tracking URL. */
  trackingUrlTemplate?: string;
  /** Output only. The type of ad. */
  type?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "TEXT_AD"
    | "EXPANDED_TEXT_AD"
    | "CALL_ONLY_AD"
    | "EXPANDED_DYNAMIC_SEARCH_AD"
    | "HOTEL_AD"
    | "SHOPPING_SMART_AD"
    | "SHOPPING_PRODUCT_AD"
    | "VIDEO_AD"
    | "GMAIL_AD"
    | "IMAGE_AD"
    | "RESPONSIVE_SEARCH_AD"
    | "LEGACY_RESPONSIVE_DISPLAY_AD"
    | "APP_AD"
    | "LEGACY_APP_INSTALL_AD"
    | "RESPONSIVE_DISPLAY_AD"
    | "LOCAL_AD"
    | "HTML5_UPLOAD_AD"
    | "DYNAMIC_HTML5_AD"
    | "APP_ENGAGEMENT_AD"
    | "SHOPPING_COMPARISON_LISTING_AD"
    | "VIDEO_BUMPER_AD"
    | "VIDEO_NON_SKIPPABLE_IN_STREAM_AD"
    | "VIDEO_OUTSTREAM_AD"
    | "VIDEO_TRUEVIEW_DISCOVERY_AD"
    | "VIDEO_TRUEVIEW_IN_STREAM_AD"
    | "VIDEO_RESPONSIVE_AD"
    | "SMART_CAMPAIGN_AD"
    | "APP_PRE_REGISTRATION_AD"
    | "TRAVEL_AD"
    | "MULTIMEDIA_AD"
    | (string & {});
  /** The suffix to use when constructing a final URL. */
  finalUrlSuffix?: string;
  /** Immutable. The resource name of the ad. Ad resource names have the form: `customers/{customer_id}/ads/{ad_id}` */
  resourceName?: string;
  /** Immutable. Details pertaining to a responsive search ad. */
  responsiveSearchAd?: GoogleAdsSearchads360V0Common__SearchAds360ResponsiveSearchAdInfo;
  /** Immutable. Details pertaining to a text ad. */
  textAd?: GoogleAdsSearchads360V0Common__SearchAds360TextAdInfo;
  /** The list of possible final mobile URLs after all cross-domain redirects for the ad. */
  finalMobileUrls?: ReadonlyArray<string>;
  /** Immutable. Details pertaining to an expanded text ad. */
  expandedTextAd?: GoogleAdsSearchads360V0Common__SearchAds360ExpandedTextAdInfo;
  /** A list of final app URLs that will be used on mobile if the user has the specific app installed. */
  finalAppUrls?: ReadonlyArray<GoogleAdsSearchads360V0Common__FinalAppUrl>;
  /** The URL that appears in the ad description for some ad formats. */
  displayUrl?: string;
  /** Output only. The ID of the ad. */
  id?: string;
  /** The list of possible final URLs after all cross-domain redirects for the ad. */
  finalUrls?: ReadonlyArray<string>;
  /** Immutable. The name of the ad. This is only used to be able to identify the ad. It does not need to be unique and does not affect the served ad. */
  name?: string;
  /** Immutable. Details pertaining to a product ad. */
  productAd?: GoogleAdsSearchads360V0Common__SearchAds360ProductAdInfo;
}

export const GoogleAdsSearchads360V0Resources__Ad: Schema.Schema<GoogleAdsSearchads360V0Resources__Ad> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expandedDynamicSearchAd: Schema.optional(
      GoogleAdsSearchads360V0Common__SearchAds360ExpandedDynamicSearchAdInfo,
    ),
    trackingUrlTemplate: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    finalUrlSuffix: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    responsiveSearchAd: Schema.optional(
      GoogleAdsSearchads360V0Common__SearchAds360ResponsiveSearchAdInfo,
    ),
    textAd: Schema.optional(
      GoogleAdsSearchads360V0Common__SearchAds360TextAdInfo,
    ),
    finalMobileUrls: Schema.optional(Schema.Array(Schema.String)),
    expandedTextAd: Schema.optional(
      GoogleAdsSearchads360V0Common__SearchAds360ExpandedTextAdInfo,
    ),
    finalAppUrls: Schema.optional(
      Schema.Array(GoogleAdsSearchads360V0Common__FinalAppUrl),
    ),
    displayUrl: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    finalUrls: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    productAd: Schema.optional(
      GoogleAdsSearchads360V0Common__SearchAds360ProductAdInfo,
    ),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Resources__Ad" });

export interface GoogleAdsSearchads360V0Services__ConversionCustomDimensionHeader {
  /** The conversion custom dimension ID. */
  id?: string;
  /** The user defined name of the conversion custom dimension. */
  name?: string;
}

export const GoogleAdsSearchads360V0Services__ConversionCustomDimensionHeader: Schema.Schema<GoogleAdsSearchads360V0Services__ConversionCustomDimensionHeader> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Services__ConversionCustomDimensionHeader",
  });

export interface GoogleAdsSearchads360V0Resources__AdGroupBidModifier {
  /** Immutable. A device criterion. */
  device?: GoogleAdsSearchads360V0Common__DeviceInfo;
  /** Immutable. The resource name of the ad group bid modifier. Ad group bid modifier resource names have the form: `customers/{customer_id}/adGroupBidModifiers/{ad_group_id}~{criterion_id}` */
  resourceName?: string;
  /** The modifier for the bid when the criterion matches. The modifier must be in the range: 0.1 - 10.0. Use 0 to opt out of a Device type. */
  bidModifier?: number;
}

export const GoogleAdsSearchads360V0Resources__AdGroupBidModifier: Schema.Schema<GoogleAdsSearchads360V0Resources__AdGroupBidModifier> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    device: Schema.optional(GoogleAdsSearchads360V0Common__DeviceInfo),
    resourceName: Schema.optional(Schema.String),
    bidModifier: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__AdGroupBidModifier",
  });

export interface GoogleAdsSearchads360V0Common__MaximizeConversionValue {
  /** The target return on ad spend (ROAS) option. If set, the bid strategy will maximize revenue while averaging the target return on ad spend. If the target ROAS is high, the bid strategy may not be able to spend the full budget. If the target ROAS is not set, the bid strategy will aim to achieve the highest possible ROAS for the budget. */
  targetRoas?: number;
  /** Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. Mutable for portfolio bidding strategies only. */
  cpcBidCeilingMicros?: string;
  /** Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. Mutable for portfolio bidding strategies only. */
  cpcBidFloorMicros?: string;
}

export const GoogleAdsSearchads360V0Common__MaximizeConversionValue: Schema.Schema<GoogleAdsSearchads360V0Common__MaximizeConversionValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetRoas: Schema.optional(Schema.Number),
    cpcBidCeilingMicros: Schema.optional(Schema.String),
    cpcBidFloorMicros: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Common__MaximizeConversionValue",
  });

export interface GoogleAdsSearchads360V0Resources_AdGroupCriterion_QualityInfo {
  /** Output only. The quality score. This field may not be populated if Google does not have enough information to determine a value. */
  qualityScore?: number;
}

export const GoogleAdsSearchads360V0Resources_AdGroupCriterion_QualityInfo: Schema.Schema<GoogleAdsSearchads360V0Resources_AdGroupCriterion_QualityInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    qualityScore: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources_AdGroupCriterion_QualityInfo",
  });

export interface GoogleAdsSearchads360V0Common__ListingGroupInfo {
  /** Type of the listing group. */
  type?: "UNSPECIFIED" | "UNKNOWN" | "SUBDIVISION" | "UNIT" | (string & {});
}

export const GoogleAdsSearchads360V0Common__ListingGroupInfo: Schema.Schema<GoogleAdsSearchads360V0Common__ListingGroupInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Common__ListingGroupInfo",
  });

export interface GoogleAdsSearchads360V0Resources__AdGroupCriterion {
  /** Immutable. Gender. */
  gender?: GoogleAdsSearchads360V0Common__GenderInfo;
  /** Output only. Information regarding the quality of the criterion. */
  qualityInfo?: GoogleAdsSearchads360V0Resources_AdGroupCriterion_QualityInfo;
  /** Output only. The timestamp when this ad group criterion was created. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format. */
  creationTime?: string;
  /** Output only. The type of the criterion. */
  type?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "KEYWORD"
    | "PLACEMENT"
    | "MOBILE_APP_CATEGORY"
    | "MOBILE_APPLICATION"
    | "DEVICE"
    | "LOCATION"
    | "LISTING_GROUP"
    | "AD_SCHEDULE"
    | "AGE_RANGE"
    | "GENDER"
    | "INCOME_RANGE"
    | "PARENTAL_STATUS"
    | "YOUTUBE_VIDEO"
    | "YOUTUBE_CHANNEL"
    | "USER_LIST"
    | "PROXIMITY"
    | "TOPIC"
    | "LISTING_SCOPE"
    | "LANGUAGE"
    | "IP_BLOCK"
    | "CONTENT_LABEL"
    | "CARRIER"
    | "USER_INTEREST"
    | "WEBPAGE"
    | "OPERATING_SYSTEM_VERSION"
    | "APP_PAYMENT_MODEL"
    | "MOBILE_DEVICE"
    | "CUSTOM_AFFINITY"
    | "CUSTOM_INTENT"
    | "LOCATION_GROUP"
    | "CUSTOM_AUDIENCE"
    | "COMBINED_AUDIENCE"
    | "KEYWORD_THEME"
    | "AUDIENCE"
    | "LOCAL_SERVICE_ID"
    | "BRAND"
    | "BRAND_LIST"
    | "LIFE_EVENT"
    | (string & {});
  /** The CPC (cost-per-click) bid. */
  cpcBidMicros?: string;
  /** The modifier for the bid when the criterion matches. The modifier must be in the range: 0.1 - 10.0. Most targetable criteria types support modifiers. */
  bidModifier?: number;
  /** Output only. The datetime when this ad group criterion was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format. */
  lastModifiedTime?: string;
  /** Immutable. Keyword. */
  keyword?: GoogleAdsSearchads360V0Common__KeywordInfo;
  /** Output only. The Engine Status for ad group criterion. */
  engineStatus?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "AD_GROUP_CRITERION_ELIGIBLE"
    | "AD_GROUP_CRITERION_INAPPROPRIATE_FOR_CAMPAIGN"
    | "AD_GROUP_CRITERION_INVALID_MOBILE_SEARCH"
    | "AD_GROUP_CRITERION_INVALID_PC_SEARCH"
    | "AD_GROUP_CRITERION_INVALID_SEARCH"
    | "AD_GROUP_CRITERION_LOW_SEARCH_VOLUME"
    | "AD_GROUP_CRITERION_MOBILE_URL_UNDER_REVIEW"
    | "AD_GROUP_CRITERION_PARTIALLY_INVALID"
    | "AD_GROUP_CRITERION_TO_BE_ACTIVATED"
    | "AD_GROUP_CRITERION_UNDER_REVIEW"
    | "AD_GROUP_CRITERION_NOT_REVIEWED"
    | "AD_GROUP_CRITERION_ON_HOLD"
    | "AD_GROUP_CRITERION_PENDING_REVIEW"
    | "AD_GROUP_CRITERION_PAUSED"
    | "AD_GROUP_CRITERION_REMOVED"
    | "AD_GROUP_CRITERION_APPROVED"
    | "AD_GROUP_CRITERION_DISAPPROVED"
    | "AD_GROUP_CRITERION_SERVING"
    | "AD_GROUP_CRITERION_ACCOUNT_PAUSED"
    | (string & {});
  /** Immutable. The ad group to which the criterion belongs. */
  adGroup?: string;
  /** Output only. The resource names of labels attached to this ad group criterion. */
  labels?: ReadonlyArray<string>;
  /** Immutable. Whether to target (`false`) or exclude (`true`) the criterion. This field is immutable. To switch a criterion from positive to negative, remove then re-add it. */
  negative?: boolean;
  /** Immutable. Webpage */
  webpage?: GoogleAdsSearchads360V0Common__WebpageInfo;
  /** The URL template for constructing a tracking URL. */
  trackingUrlTemplate?: string;
  /** Immutable. Listing group. */
  listingGroup?: GoogleAdsSearchads360V0Common__ListingGroupInfo;
  /** Immutable. Age range. */
  ageRange?: GoogleAdsSearchads360V0Common__AgeRangeInfo;
  /** The list of mappings used to substitute custom parameter tags in a `tracking_url_template`, `final_urls`, or `mobile_final_urls`. */
  urlCustomParameters?: ReadonlyArray<GoogleAdsSearchads360V0Common__CustomParameter>;
  /** Output only. The effective CPC (cost-per-click) bid. */
  effectiveCpcBidMicros?: string;
  /** Immutable. Location. */
  location?: GoogleAdsSearchads360V0Common__LocationInfo;
  /** URL template for appending params to final URL. */
  finalUrlSuffix?: string;
  /** Immutable. User List. */
  userList?: GoogleAdsSearchads360V0Common__UserListInfo;
  /** Immutable. The resource name of the ad group criterion. Ad group criterion resource names have the form: `customers/{customer_id}/adGroupCriteria/{ad_group_id}~{criterion_id}` */
  resourceName?: string;
  /** Output only. The ID of the criterion. */
  criterionId?: string;
  /** Output only. Estimates for criterion bids at various positions. */
  positionEstimates?: GoogleAdsSearchads360V0Resources_AdGroupCriterion_PositionEstimates;
  /** The list of possible final mobile URLs after all cross-domain redirects. */
  finalMobileUrls?: ReadonlyArray<string>;
  /** The status of the criterion. This is the status of the ad group criterion entity, set by the client. Note: UI reports may incorporate additional information that affects whether a criterion is eligible to run. In some cases a criterion that's REMOVED in the API can still show as enabled in the UI. For example, campaigns by default show to users of all age ranges unless excluded. The UI will show each age range as "enabled", since they're eligible to see the ads; but AdGroupCriterion.status will show "removed", since no positive criterion was added. */
  status?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ENABLED"
    | "PAUSED"
    | "REMOVED"
    | (string & {});
  /** The list of possible final URLs after all cross-domain redirects for the ad. */
  finalUrls?: ReadonlyArray<string>;
  /** Output only. The resource names of effective labels attached to this ad group criterion. An effective label is a label inherited or directly assigned to this ad group criterion. */
  effectiveLabels?: ReadonlyArray<string>;
  /** Output only. ID of the ad group criterion in the external engine account. This field is for non-Google Ads account only, for example, Yahoo Japan, Microsoft, Baidu etc. For Google Ads entity, use "ad_group_criterion.criterion_id" instead. */
  engineId?: string;
}

export const GoogleAdsSearchads360V0Resources__AdGroupCriterion: Schema.Schema<GoogleAdsSearchads360V0Resources__AdGroupCriterion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gender: Schema.optional(GoogleAdsSearchads360V0Common__GenderInfo),
    qualityInfo: Schema.optional(
      GoogleAdsSearchads360V0Resources_AdGroupCriterion_QualityInfo,
    ),
    creationTime: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    cpcBidMicros: Schema.optional(Schema.String),
    bidModifier: Schema.optional(Schema.Number),
    lastModifiedTime: Schema.optional(Schema.String),
    keyword: Schema.optional(GoogleAdsSearchads360V0Common__KeywordInfo),
    engineStatus: Schema.optional(Schema.String),
    adGroup: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Array(Schema.String)),
    negative: Schema.optional(Schema.Boolean),
    webpage: Schema.optional(GoogleAdsSearchads360V0Common__WebpageInfo),
    trackingUrlTemplate: Schema.optional(Schema.String),
    listingGroup: Schema.optional(
      GoogleAdsSearchads360V0Common__ListingGroupInfo,
    ),
    ageRange: Schema.optional(GoogleAdsSearchads360V0Common__AgeRangeInfo),
    urlCustomParameters: Schema.optional(
      Schema.Array(GoogleAdsSearchads360V0Common__CustomParameter),
    ),
    effectiveCpcBidMicros: Schema.optional(Schema.String),
    location: Schema.optional(GoogleAdsSearchads360V0Common__LocationInfo),
    finalUrlSuffix: Schema.optional(Schema.String),
    userList: Schema.optional(GoogleAdsSearchads360V0Common__UserListInfo),
    resourceName: Schema.optional(Schema.String),
    criterionId: Schema.optional(Schema.String),
    positionEstimates: Schema.optional(
      GoogleAdsSearchads360V0Resources_AdGroupCriterion_PositionEstimates,
    ),
    finalMobileUrls: Schema.optional(Schema.Array(Schema.String)),
    status: Schema.optional(Schema.String),
    finalUrls: Schema.optional(Schema.Array(Schema.String)),
    effectiveLabels: Schema.optional(Schema.Array(Schema.String)),
    engineId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__AdGroupCriterion",
  });

export interface GoogleAdsSearchads360V0Resources__KeywordView {
  /** Output only. The resource name of the keyword view. Keyword view resource names have the form: `customers/{customer_id}/keywordViews/{ad_group_id}~{criterion_id}` */
  resourceName?: string;
}

export const GoogleAdsSearchads360V0Resources__KeywordView: Schema.Schema<GoogleAdsSearchads360V0Resources__KeywordView> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Resources__KeywordView" });

export interface GoogleAdsSearchads360V0Resources__AssetSetAsset {
  /** Output only. The status of the asset set asset. Read-only. */
  status?: "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVED" | (string & {});
  /** Immutable. The resource name of the asset set asset. Asset set asset resource names have the form: `customers/{customer_id}/assetSetAssets/{asset_set_id}~{asset_id}` */
  resourceName?: string;
  /** Immutable. The asset set which this asset set asset is linking to. */
  assetSet?: string;
  /** Immutable. The asset which this asset set asset is linking to. */
  asset?: string;
}

export const GoogleAdsSearchads360V0Resources__AssetSetAsset: Schema.Schema<GoogleAdsSearchads360V0Resources__AssetSetAsset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    assetSet: Schema.optional(Schema.String),
    asset: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__AssetSetAsset",
  });

export interface GoogleAdsSearchads360V0Common__MaximizeConversions {
  /** Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. Mutable for portfolio bidding strategies only. */
  cpcBidFloorMicros?: string;
  /** The target cost-per-action (CPA) option. This is the average amount that you would like to spend per conversion action specified in micro units of the bidding strategy's currency. If set, the bid strategy will get as many conversions as possible at or below the target cost-per-action. If the target CPA is not set, the bid strategy will aim to achieve the lowest possible CPA given the budget. */
  targetCpaMicros?: string;
  /** Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. Mutable for portfolio bidding strategies only. */
  cpcBidCeilingMicros?: string;
}

export const GoogleAdsSearchads360V0Common__MaximizeConversions: Schema.Schema<GoogleAdsSearchads360V0Common__MaximizeConversions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cpcBidFloorMicros: Schema.optional(Schema.String),
    targetCpaMicros: Schema.optional(Schema.String),
    cpcBidCeilingMicros: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Common__MaximizeConversions",
  });

export interface GoogleAdsSearchads360V0Common__TargetCpa {
  /** Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. This should only be set for portfolio bid strategies. */
  cpcBidFloorMicros?: string;
  /** Average CPA target. This target should be greater than or equal to minimum billable unit based on the currency for the account. */
  targetCpaMicros?: string;
  /** Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. This should only be set for portfolio bid strategies. */
  cpcBidCeilingMicros?: string;
}

export const GoogleAdsSearchads360V0Common__TargetCpa: Schema.Schema<GoogleAdsSearchads360V0Common__TargetCpa> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cpcBidFloorMicros: Schema.optional(Schema.String),
    targetCpaMicros: Schema.optional(Schema.String),
    cpcBidCeilingMicros: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Common__TargetCpa" });

export interface GoogleAdsSearchads360V0Common__TargetCpm {}

export const GoogleAdsSearchads360V0Common__TargetCpm: Schema.Schema<GoogleAdsSearchads360V0Common__TargetCpm> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleAdsSearchads360V0Common__TargetCpm",
  });

export interface GoogleAdsSearchads360V0Resources_Campaign_DynamicSearchAdsSetting {
  /** Required. The Internet domain name that this setting represents, for example, "google.com" or "www.google.com". */
  domainName?: string;
  /** Required. The language code specifying the language of the domain, for example, "en". */
  languageCode?: string;
  /** Whether the campaign uses advertiser supplied URLs exclusively. */
  useSuppliedUrlsOnly?: boolean;
}

export const GoogleAdsSearchads360V0Resources_Campaign_DynamicSearchAdsSetting: Schema.Schema<GoogleAdsSearchads360V0Resources_Campaign_DynamicSearchAdsSetting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domainName: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    useSuppliedUrlsOnly: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Resources_Campaign_DynamicSearchAdsSetting",
  });

export interface GoogleAdsSearchads360V0Resources_Campaign_GeoTargetTypeSetting {
  /** The setting used for positive geotargeting in this particular campaign. */
  positiveGeoTargetType?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "PRESENCE_OR_INTEREST"
    | "SEARCH_INTEREST"
    | "PRESENCE"
    | (string & {});
  /** The setting used for negative geotargeting in this particular campaign. */
  negativeGeoTargetType?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "PRESENCE_OR_INTEREST"
    | "PRESENCE"
    | (string & {});
}

export const GoogleAdsSearchads360V0Resources_Campaign_GeoTargetTypeSetting: Schema.Schema<GoogleAdsSearchads360V0Resources_Campaign_GeoTargetTypeSetting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    positiveGeoTargetType: Schema.optional(Schema.String),
    negativeGeoTargetType: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Resources_Campaign_GeoTargetTypeSetting",
  });

export interface GoogleAdsSearchads360V0Common__TargetRoas {
  /** Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. This should only be set for portfolio bid strategies. */
  cpcBidFloorMicros?: string;
  /** Required. The chosen revenue (based on conversion data) per unit of spend. Value must be between 0.01 and 1000.0, inclusive. */
  targetRoas?: number;
  /** Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. This should only be set for portfolio bid strategies. */
  cpcBidCeilingMicros?: string;
}

export const GoogleAdsSearchads360V0Common__TargetRoas: Schema.Schema<GoogleAdsSearchads360V0Common__TargetRoas> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cpcBidFloorMicros: Schema.optional(Schema.String),
    targetRoas: Schema.optional(Schema.Number),
    cpcBidCeilingMicros: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Common__TargetRoas" });

export interface GoogleAdsSearchads360V0Common__RealTimeBiddingSetting {
  /** Whether the campaign is opted in to real-time bidding. */
  optIn?: boolean;
}

export const GoogleAdsSearchads360V0Common__RealTimeBiddingSetting: Schema.Schema<GoogleAdsSearchads360V0Common__RealTimeBiddingSetting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    optIn: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Common__RealTimeBiddingSetting",
  });

export interface GoogleAdsSearchads360V0Resources_Campaign_OptimizationGoalSetting {
  /** The list of optimization goal types. */
  optimizationGoalTypes?: ReadonlyArray<
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CALL_CLICKS"
    | "DRIVING_DIRECTIONS"
    | "APP_PRE_REGISTRATION"
    | (string & {})
  >;
}

export const GoogleAdsSearchads360V0Resources_Campaign_OptimizationGoalSetting: Schema.Schema<GoogleAdsSearchads360V0Resources_Campaign_OptimizationGoalSetting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    optimizationGoalTypes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Resources_Campaign_OptimizationGoalSetting",
  });

export interface GoogleAdsSearchads360V0Resources_Campaign_SelectiveOptimization {
  /** The selected set of resource names for conversion actions for optimizing this campaign. */
  conversionActions?: ReadonlyArray<string>;
}

export const GoogleAdsSearchads360V0Resources_Campaign_SelectiveOptimization: Schema.Schema<GoogleAdsSearchads360V0Resources_Campaign_SelectiveOptimization> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversionActions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Resources_Campaign_SelectiveOptimization",
  });

export interface GoogleAdsSearchads360V0Resources_Campaign_NetworkSettings {
  /** Whether ads will be served with google.com search results. */
  targetGoogleSearch?: boolean;
  /** Whether ads will be served on sites in the Google Search Partners Network (requires `target_google_search` to also be `true`). */
  targetSearchNetwork?: boolean;
  /** Whether ads will be served on specified placements in the Google Display Network. Placements are specified using the Placement criterion. */
  targetContentNetwork?: boolean;
  /** Whether ads will be served on the partner network. This is available only to some select partner accounts. Unless you have been instructed to use this field, it likely does not apply to your account. This does not control whether ads will be served on Google Search Partners Network; use `target_search_network` for that instead. */
  targetPartnerSearchNetwork?: boolean;
}

export const GoogleAdsSearchads360V0Resources_Campaign_NetworkSettings: Schema.Schema<GoogleAdsSearchads360V0Resources_Campaign_NetworkSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetGoogleSearch: Schema.optional(Schema.Boolean),
    targetSearchNetwork: Schema.optional(Schema.Boolean),
    targetContentNetwork: Schema.optional(Schema.Boolean),
    targetPartnerSearchNetwork: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources_Campaign_NetworkSettings",
  });

export interface GoogleAdsSearchads360V0Resources__Campaign {
  /** Standard Manual CPM bidding strategy. Manual impression-based bidding where user pays per thousand impressions. */
  manualCpm?: GoogleAdsSearchads360V0Common__ManualCpm;
  /** The status of the campaign. When a new campaign is added, the status defaults to ENABLED. */
  status?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ENABLED"
    | "PAUSED"
    | "REMOVED"
    | (string & {});
  /** The setting for controlling Shopping campaigns. */
  shoppingSetting?: GoogleAdsSearchads360V0Resources_Campaign_ShoppingSetting;
  /** Output only. Types of feeds that are attached directly to this campaign. */
  feedTypes?: ReadonlyArray<
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "PAGE_FEED"
    | "DYNAMIC_EDUCATION"
    | "MERCHANT_CENTER_FEED"
    | "DYNAMIC_REAL_ESTATE"
    | "DYNAMIC_CUSTOM"
    | "DYNAMIC_HOTELS_AND_RENTALS"
    | "DYNAMIC_FLIGHTS"
    | "DYNAMIC_TRAVEL"
    | "DYNAMIC_LOCAL"
    | "DYNAMIC_JOBS"
    | "LOCATION_SYNC"
    | "BUSINESS_PROFILE_DYNAMIC_LOCATION_GROUP"
    | "CHAIN_DYNAMIC_LOCATION_GROUP"
    | "STATIC_LOCATION_GROUP"
    | "HOTEL_PROPERTY"
    | "TRAVEL_FEED"
    | (string & {})
  >;
  /** The name of the campaign. This field is required and should not be empty when creating new campaigns. It must not contain any null (code point 0x0), NL line feed (code point 0xA) or carriage return (code point 0xD) characters. */
  name?: string;
  /** Standard Maximize Conversions bidding strategy that automatically maximizes number of conversions while spending your budget. */
  maximizeConversions?: GoogleAdsSearchads360V0Common__MaximizeConversions;
  /** Output only. The resource names of effective labels attached to this campaign. An effective label is a label inherited or directly assigned to this campaign. */
  effectiveLabels?: ReadonlyArray<string>;
  /** Output only. ID of the campaign in the external engine account. This field is for non-Google Ads account only, for example, Yahoo Japan, Microsoft, Baidu etc. For Google Ads entity, use "campaign.id" instead. */
  engineId?: string;
  /** Standard Target CPA bidding strategy that automatically sets bids to help get as many conversions as possible at the target cost-per-acquisition (CPA) you set. */
  targetCpa?: GoogleAdsSearchads360V0Common__TargetCpa;
  /** Immutable. The resource name of the campaign. Campaign resource names have the form: `customers/{customer_id}/campaigns/{campaign_id}` */
  resourceName?: string;
  /** Output only. The system status of the campaign's bidding strategy. */
  biddingStrategySystemStatus?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ENABLED"
    | "LEARNING_NEW"
    | "LEARNING_SETTING_CHANGE"
    | "LEARNING_BUDGET_CHANGE"
    | "LEARNING_COMPOSITION_CHANGE"
    | "LEARNING_CONVERSION_TYPE_CHANGE"
    | "LEARNING_CONVERSION_SETTING_CHANGE"
    | "LIMITED_BY_CPC_BID_CEILING"
    | "LIMITED_BY_CPC_BID_FLOOR"
    | "LIMITED_BY_DATA"
    | "LIMITED_BY_BUDGET"
    | "LIMITED_BY_LOW_PRIORITY_SPEND"
    | "LIMITED_BY_LOW_QUALITY"
    | "LIMITED_BY_INVENTORY"
    | "MISCONFIGURED_ZERO_ELIGIBILITY"
    | "MISCONFIGURED_CONVERSION_TYPES"
    | "MISCONFIGURED_CONVERSION_SETTINGS"
    | "MISCONFIGURED_SHARED_BUDGET"
    | "MISCONFIGURED_STRATEGY_TYPE"
    | "PAUSED"
    | "UNAVAILABLE"
    | "MULTIPLE_LEARNING"
    | "MULTIPLE_LIMITED"
    | "MULTIPLE_MISCONFIGURED"
    | "MULTIPLE"
    | (string & {});
  /** A bidding strategy that automatically optimizes cost per thousand impressions. */
  targetCpm?: GoogleAdsSearchads360V0Common__TargetCpm;
  /** The setting for controlling Dynamic Search Ads (DSA). */
  dynamicSearchAdsSetting?: GoogleAdsSearchads360V0Resources_Campaign_DynamicSearchAdsSetting;
  /** The setting for ads geotargeting. */
  geoTargetTypeSetting?: GoogleAdsSearchads360V0Resources_Campaign_GeoTargetTypeSetting;
  /** Represents opting out of URL expansion to more targeted URLs. If opted out (true), only the final URLs in the asset group or URLs specified in the advertiser's Google Merchant Center or business data feeds are targeted. If opted in (false), the entire domain will be targeted. This field can only be set for Performance Max campaigns, where the default value is false. */
  urlExpansionOptOut?: boolean;
  /** The resource name of the campaign budget of the campaign. */
  campaignBudget?: string;
  /** Standard Manual CPC bidding strategy. Manual click-based bidding where user pays per click. */
  manualCpc?: GoogleAdsSearchads360V0Common__ManualCpc;
  /** Standard Target ROAS bidding strategy that automatically maximizes revenue while averaging a specific target return on ad spend (ROAS). */
  targetRoas?: GoogleAdsSearchads360V0Common__TargetRoas;
  /** Suffix used to append query parameters to landing pages that are served with parallel tracking. */
  finalUrlSuffix?: string;
  /** Standard Manual CPA bidding strategy. Manual bidding strategy that allows advertiser to set the bid per advertiser-specified action. Supported only for Local Services campaigns. */
  manualCpa?: GoogleAdsSearchads360V0Common__ManualCpa;
  /** Output only. Campaign-level settings for tracking information. */
  trackingSetting?: GoogleAdsSearchads360V0Resources_Campaign_TrackingSetting;
  /** The URL template for constructing a tracking URL. */
  trackingUrlTemplate?: string;
  /** The list of mappings used to substitute custom parameter tags in a `tracking_url_template`, `final_urls`, or `mobile_final_urls`. */
  urlCustomParameters?: ReadonlyArray<GoogleAdsSearchads360V0Common__CustomParameter>;
  /** Immutable. The primary serving target for ads within the campaign. The targeting options can be refined in `network_settings`. This field is required and should not be empty when creating new campaigns. Can be set only when creating campaigns. After the campaign is created, the field can not be changed. */
  advertisingChannelType?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "SEARCH"
    | "DISPLAY"
    | "SHOPPING"
    | "HOTEL"
    | "VIDEO"
    | "MULTI_CHANNEL"
    | "LOCAL"
    | "SMART"
    | "PERFORMANCE_MAX"
    | "LOCAL_SERVICES"
    | "DISCOVERY"
    | "TRAVEL"
    | "SOCIAL"
    | (string & {});
  /** Output only. The ad serving status of the campaign. */
  servingStatus?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "SERVING"
    | "NONE"
    | "ENDED"
    | "PENDING"
    | "SUSPENDED"
    | (string & {});
  /** Output only. The resource names of labels attached to this campaign. */
  labels?: ReadonlyArray<string>;
  /** Output only. The type of bidding strategy. A bidding strategy can be created by setting either the bidding scheme to create a standard bidding strategy or the `bidding_strategy` field to create a portfolio bidding strategy. This field is read-only. */
  biddingStrategyType?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "COMMISSION"
    | "ENHANCED_CPC"
    | "INVALID"
    | "MANUAL_CPA"
    | "MANUAL_CPC"
    | "MANUAL_CPM"
    | "MANUAL_CPV"
    | "MAXIMIZE_CONVERSIONS"
    | "MAXIMIZE_CONVERSION_VALUE"
    | "PAGE_ONE_PROMOTED"
    | "PERCENT_CPC"
    | "TARGET_CPA"
    | "TARGET_CPM"
    | "TARGET_IMPRESSION_SHARE"
    | "TARGET_OUTRANK_SHARE"
    | "TARGET_ROAS"
    | "TARGET_SPEND"
    | (string & {});
  /** Standard Target Spend bidding strategy that automatically sets your bids to help get as many clicks as possible within your budget. */
  targetSpend?: GoogleAdsSearchads360V0Common__TargetSpend;
  /** Output only. The ID of the campaign. */
  id?: string;
  /** Immutable. Optional refinement to `advertising_channel_type`. Must be a valid sub-type of the parent channel type. Can be set only when creating campaigns. After campaign is created, the field can not be changed. */
  advertisingChannelSubType?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "SEARCH_MOBILE_APP"
    | "DISPLAY_MOBILE_APP"
    | "SEARCH_EXPRESS"
    | "DISPLAY_EXPRESS"
    | "SHOPPING_SMART_ADS"
    | "DISPLAY_GMAIL_AD"
    | "DISPLAY_SMART_CAMPAIGN"
    | "VIDEO_OUTSTREAM"
    | "VIDEO_ACTION"
    | "VIDEO_NON_SKIPPABLE"
    | "APP_CAMPAIGN"
    | "APP_CAMPAIGN_FOR_ENGAGEMENT"
    | "LOCAL_CAMPAIGN"
    | "SHOPPING_COMPARISON_LISTING_ADS"
    | "SMART_CAMPAIGN"
    | "VIDEO_SEQUENCE"
    | "APP_CAMPAIGN_FOR_PRE_REGISTRATION"
    | "VIDEO_REACH_TARGET_FREQUENCY"
    | "TRAVEL_ACTIVITIES"
    | "SOCIAL_FACEBOOK_TRACKING_ONLY"
    | (string & {});
  /** The asset field types that should be excluded from this campaign. Asset links with these field types will not be inherited by this campaign from the upper level. */
  excludedParentAssetFieldTypes?: ReadonlyArray<
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "HEADLINE"
    | "DESCRIPTION"
    | "MANDATORY_AD_TEXT"
    | "MARKETING_IMAGE"
    | "MEDIA_BUNDLE"
    | "YOUTUBE_VIDEO"
    | "BOOK_ON_GOOGLE"
    | "LEAD_FORM"
    | "PROMOTION"
    | "CALLOUT"
    | "STRUCTURED_SNIPPET"
    | "SITELINK"
    | "MOBILE_APP"
    | "HOTEL_CALLOUT"
    | "CALL"
    | "PRICE"
    | "LONG_HEADLINE"
    | "BUSINESS_NAME"
    | "SQUARE_MARKETING_IMAGE"
    | "PORTRAIT_MARKETING_IMAGE"
    | "LOGO"
    | "LANDSCAPE_LOGO"
    | "VIDEO"
    | "CALL_TO_ACTION_SELECTION"
    | "AD_IMAGE"
    | "BUSINESS_LOGO"
    | "HOTEL_PROPERTY"
    | "DISCOVERY_CAROUSEL_CARD"
    | "LONG_DESCRIPTION"
    | "CALL_TO_ACTION"
    | (string & {})
  >;
  /** Output only. The datetime when this campaign was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format. */
  lastModifiedTime?: string;
  /** Target Impression Share bidding strategy. An automated bidding strategy that sets bids to achieve a chosen percentage of impressions. */
  targetImpressionShare?: GoogleAdsSearchads360V0Common__TargetImpressionShare;
  /** The ad serving optimization status of the campaign. */
  adServingOptimizationStatus?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "OPTIMIZE"
    | "CONVERSION_OPTIMIZE"
    | "ROTATE"
    | "ROTATE_INDEFINITELY"
    | "UNAVAILABLE"
    | (string & {});
  /** The date when campaign started in serving customer's timezone in YYYY-MM-DD format. */
  startDate?: string;
  /** The last day of the campaign in serving customer's timezone in YYYY-MM-DD format. On create, defaults to 2037-12-30, which means the campaign will run indefinitely. To set an existing campaign to run indefinitely, set this field to 2037-12-30. */
  endDate?: string;
  /** Settings for Real-Time Bidding, a feature only available for campaigns targeting the Ad Exchange network. */
  realTimeBiddingSetting?: GoogleAdsSearchads360V0Common__RealTimeBiddingSetting;
  /** Optimization goal setting for this campaign, which includes a set of optimization goal types. */
  optimizationGoalSetting?: GoogleAdsSearchads360V0Resources_Campaign_OptimizationGoalSetting;
  /** The resource name of the portfolio bidding strategy used by the campaign. */
  biddingStrategy?: string;
  /** Selective optimization setting for this campaign, which includes a set of conversion actions to optimize this campaign towards. This feature only applies to app campaigns that use MULTI_CHANNEL as AdvertisingChannelType and APP_CAMPAIGN or APP_CAMPAIGN_FOR_ENGAGEMENT as AdvertisingChannelSubType. */
  selectiveOptimization?: GoogleAdsSearchads360V0Resources_Campaign_SelectiveOptimization;
  /** Standard Maximize Conversion Value bidding strategy that automatically sets bids to maximize revenue while spending your budget. */
  maximizeConversionValue?: GoogleAdsSearchads360V0Common__MaximizeConversionValue;
  /** The network settings for the campaign. */
  networkSettings?: GoogleAdsSearchads360V0Resources_Campaign_NetworkSettings;
  /** Output only. The timestamp when this campaign was created. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format. create_time will be deprecated in v1. Use creation_time instead. */
  createTime?: string;
  /** Output only. Resource name of AccessibleBiddingStrategy, a read-only view of the unrestricted attributes of the attached portfolio bidding strategy identified by 'bidding_strategy'. Empty, if the campaign does not use a portfolio strategy. Unrestricted strategy attributes are available to all customers with whom the strategy is shared and are read from the AccessibleBiddingStrategy resource. In contrast, restricted attributes are only available to the owner customer of the strategy and their managers. Restricted attributes can only be read from the BiddingStrategy resource. */
  accessibleBiddingStrategy?: string;
  /** A list that limits how often each user will see this campaign's ads. */
  frequencyCaps?: ReadonlyArray<GoogleAdsSearchads360V0Common__FrequencyCapEntry>;
  /** Output only. The timestamp when this campaign was created. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format. */
  creationTime?: string;
  /** Standard Percent Cpc bidding strategy where bids are a fraction of the advertised price for some good or service. */
  percentCpc?: GoogleAdsSearchads360V0Common__PercentCpc;
}

export const GoogleAdsSearchads360V0Resources__Campaign: Schema.Schema<GoogleAdsSearchads360V0Resources__Campaign> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    manualCpm: Schema.optional(GoogleAdsSearchads360V0Common__ManualCpm),
    status: Schema.optional(Schema.String),
    shoppingSetting: Schema.optional(
      GoogleAdsSearchads360V0Resources_Campaign_ShoppingSetting,
    ),
    feedTypes: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    maximizeConversions: Schema.optional(
      GoogleAdsSearchads360V0Common__MaximizeConversions,
    ),
    effectiveLabels: Schema.optional(Schema.Array(Schema.String)),
    engineId: Schema.optional(Schema.String),
    targetCpa: Schema.optional(GoogleAdsSearchads360V0Common__TargetCpa),
    resourceName: Schema.optional(Schema.String),
    biddingStrategySystemStatus: Schema.optional(Schema.String),
    targetCpm: Schema.optional(GoogleAdsSearchads360V0Common__TargetCpm),
    dynamicSearchAdsSetting: Schema.optional(
      GoogleAdsSearchads360V0Resources_Campaign_DynamicSearchAdsSetting,
    ),
    geoTargetTypeSetting: Schema.optional(
      GoogleAdsSearchads360V0Resources_Campaign_GeoTargetTypeSetting,
    ),
    urlExpansionOptOut: Schema.optional(Schema.Boolean),
    campaignBudget: Schema.optional(Schema.String),
    manualCpc: Schema.optional(GoogleAdsSearchads360V0Common__ManualCpc),
    targetRoas: Schema.optional(GoogleAdsSearchads360V0Common__TargetRoas),
    finalUrlSuffix: Schema.optional(Schema.String),
    manualCpa: Schema.optional(GoogleAdsSearchads360V0Common__ManualCpa),
    trackingSetting: Schema.optional(
      GoogleAdsSearchads360V0Resources_Campaign_TrackingSetting,
    ),
    trackingUrlTemplate: Schema.optional(Schema.String),
    urlCustomParameters: Schema.optional(
      Schema.Array(GoogleAdsSearchads360V0Common__CustomParameter),
    ),
    advertisingChannelType: Schema.optional(Schema.String),
    servingStatus: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Array(Schema.String)),
    biddingStrategyType: Schema.optional(Schema.String),
    targetSpend: Schema.optional(GoogleAdsSearchads360V0Common__TargetSpend),
    id: Schema.optional(Schema.String),
    advertisingChannelSubType: Schema.optional(Schema.String),
    excludedParentAssetFieldTypes: Schema.optional(Schema.Array(Schema.String)),
    lastModifiedTime: Schema.optional(Schema.String),
    targetImpressionShare: Schema.optional(
      GoogleAdsSearchads360V0Common__TargetImpressionShare,
    ),
    adServingOptimizationStatus: Schema.optional(Schema.String),
    startDate: Schema.optional(Schema.String),
    endDate: Schema.optional(Schema.String),
    realTimeBiddingSetting: Schema.optional(
      GoogleAdsSearchads360V0Common__RealTimeBiddingSetting,
    ),
    optimizationGoalSetting: Schema.optional(
      GoogleAdsSearchads360V0Resources_Campaign_OptimizationGoalSetting,
    ),
    biddingStrategy: Schema.optional(Schema.String),
    selectiveOptimization: Schema.optional(
      GoogleAdsSearchads360V0Resources_Campaign_SelectiveOptimization,
    ),
    maximizeConversionValue: Schema.optional(
      GoogleAdsSearchads360V0Common__MaximizeConversionValue,
    ),
    networkSettings: Schema.optional(
      GoogleAdsSearchads360V0Resources_Campaign_NetworkSettings,
    ),
    createTime: Schema.optional(Schema.String),
    accessibleBiddingStrategy: Schema.optional(Schema.String),
    frequencyCaps: Schema.optional(
      Schema.Array(GoogleAdsSearchads360V0Common__FrequencyCapEntry),
    ),
    creationTime: Schema.optional(Schema.String),
    percentCpc: Schema.optional(GoogleAdsSearchads360V0Common__PercentCpc),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Resources__Campaign" });

export interface GoogleAdsSearchads360V0Resources__DynamicSearchAdsSearchTermView {
  /** Output only. The resource name of the dynamic search ads search term view. Dynamic search ads search term view resource names have the form: `customers/{customer_id}/dynamicSearchAdsSearchTermViews/{ad_group_id}~{search_term_fingerprint}~{headline_fingerprint}~{landing_page_fingerprint}~{page_url_fingerprint}` */
  resourceName?: string;
  /** Output only. The dynamically selected landing page URL of the impression. This field is read-only. */
  landingPage?: string;
}

export const GoogleAdsSearchads360V0Resources__DynamicSearchAdsSearchTermView: Schema.Schema<GoogleAdsSearchads360V0Resources__DynamicSearchAdsSearchTermView> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceName: Schema.optional(Schema.String),
    landingPage: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Resources__DynamicSearchAdsSearchTermView",
  });

export interface GoogleAdsSearchads360V0Resources__CampaignBudget {
  /** The average daily amount to be spent by the campaign. This field is used when the CampaignBudget `period` is set to `DAILY`, which is the default. Amount is specified in micros in the account's local currency. One million micros is equivalent to one currency unit. The effective monthly spend is capped at 30.4 times this daily amount. This field is mutually exclusive with 'total_amount_micros'. Only one of 'amount_micros' or 'total_amount_micros' should be set. */
  amountMicros?: string;
  /** Immutable. Period over which to spend the budget. Defaults to DAILY if not specified. */
  period?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "DAILY"
    | "FIXED_DAILY"
    | "CUSTOM_PERIOD"
    | (string & {});
  /** The delivery method that determines the rate at which the campaign budget is spent. Defaults to STANDARD if unspecified in a create operation. */
  deliveryMethod?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "STANDARD"
    | "ACCELERATED"
    | (string & {});
  /** Immutable. The resource name of the campaign budget. Campaign budget resource names have the form: `customers/{customer_id}/campaignBudgets/{campaign_budget_id}` */
  resourceName?: string;
}

export const GoogleAdsSearchads360V0Resources__CampaignBudget: Schema.Schema<GoogleAdsSearchads360V0Resources__CampaignBudget> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amountMicros: Schema.optional(Schema.String),
    period: Schema.optional(Schema.String),
    deliveryMethod: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__CampaignBudget",
  });

export interface GoogleAdsSearchads360V0Resources__GenderView {
  /** Output only. The resource name of the gender view. Gender view resource names have the form: `customers/{customer_id}/genderViews/{ad_group_id}~{criterion_id}` */
  resourceName?: string;
}

export const GoogleAdsSearchads360V0Resources__GenderView: Schema.Schema<GoogleAdsSearchads360V0Resources__GenderView> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Resources__GenderView" });

export interface GoogleAdsSearchads360V0Common__Keyword {
  /** The AdGroupCriterion resource name. */
  adGroupCriterion?: string;
  /** Keyword info. */
  info?: GoogleAdsSearchads360V0Common__KeywordInfo;
}

export const GoogleAdsSearchads360V0Common__Keyword: Schema.Schema<GoogleAdsSearchads360V0Common__Keyword> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adGroupCriterion: Schema.optional(Schema.String),
    info: Schema.optional(GoogleAdsSearchads360V0Common__KeywordInfo),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Common__Keyword" });

export interface GoogleAdsSearchads360V0Common__Segments {
  /** Date to which metrics apply. yyyy-MM-dd format, for example, 2018-04-17. */
  date?: string;
  /** The conversion custom dimensions. */
  conversionCustomDimensions?: ReadonlyArray<GoogleAdsSearchads360V0Common__Value>;
  /** The city where the vertical ads listing is located. */
  verticalAdsListingCity?: string;
  /** Custom attribute 4 of the product. */
  productCustomAttribute4?: string;
  /** Ad network type. */
  adNetworkType?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "SEARCH"
    | "SEARCH_PARTNERS"
    | "CONTENT"
    | "YOUTUBE_SEARCH"
    | "YOUTUBE_WATCH"
    | "MIXED"
    | (string & {});
  /** Bidding category (level 5) of the product sold. */
  productSoldBiddingCategoryLevel5?: string;
  /** Bidding category (level 1) of the product. */
  productBiddingCategoryLevel1?: string;
  /** Resource name of the geo target constant that represents a region. */
  geoTargetRegion?: string;
  /** Brand of the product. */
  productBrand?: string;
  /** Bidding category (level 2) of the product sold. */
  productSoldBiddingCategoryLevel2?: string;
  /** Bidding category (level 4) of the product sold. */
  productSoldBiddingCategoryLevel4?: string;
  /** Type (level 2) of the product sold. */
  productSoldTypeL2?: string;
  /** The country where the vertical ads listing is located. */
  verticalAdsListingCountry?: string;
  /** Resource name of the geo target constant that represents a country. */
  geoTargetCountry?: string;
  /** Custom attribute 1 of the product sold. */
  productSoldCustomAttribute1?: string;
  /** Channel exclusivity of the product. */
  productChannelExclusivity?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "SINGLE_CHANNEL"
    | "MULTI_CHANNEL"
    | (string & {});
  /** Type (level 1) of the product. */
  productTypeL1?: string;
  /** The brand associated with a specific listing within a Vertical Ads context, for example, the brand of a car rental, a vacation home, or an event. */
  verticalAdsListingBrand?: string;
  /** Condition of the product. */
  productCondition?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "OLD"
    | "NEW"
    | "REFURBISHED"
    | "USED"
    | (string & {});
  /** Bidding category (level 3) of the product sold. */
  productSoldBiddingCategoryLevel3?: string;
  /** Bidding category (level 5) of the product. */
  productBiddingCategoryLevel5?: string;
  /** Custom attribute 0 of the product. */
  productCustomAttribute0?: string;
  /** Type (level 1) of the product sold. */
  productSoldTypeL1?: string;
  /** Title of the product sold. */
  productSoldTitle?: string;
  /** Type (level 4) of the product sold. */
  productSoldTypeL4?: string;
  /** Store ID of the product. */
  productStoreId?: string;
  /** Type (level 5) of the product. */
  productTypeL5?: string;
  /** The raw event conversion dimensions. */
  rawEventConversionDimensions?: ReadonlyArray<GoogleAdsSearchads360V0Common__Value>;
  /** Custom attribute 3 of the product. */
  productCustomAttribute3?: string;
  /** Resource name of the conversion action. */
  conversionAction?: string;
  /** Custom attribute 3 of the product sold. */
  productSoldCustomAttribute3?: string;
  /** Title of the product. */
  productTitle?: string;
  /** Week as defined as Monday through Sunday, and represented by the date of Monday. Formatted as yyyy-MM-dd. */
  week?: string;
  /** A specific partner account within a Partner Center (for example, Hotel Center) that supplies inventory feed data for Vertical Ads. */
  verticalAdsPartnerAccount?: string;
  /** Only used with CustomerAsset, CampaignAsset and AdGroupAsset metrics. Indicates whether the interaction metrics occurred on the asset itself or a different asset or ad unit. Interactions (for example, clicks) are counted across all the parts of the served ad (for example, Ad itself and other components like Sitelinks) when they are served together. When interaction_on_this_asset is true, it means the interactions are on this specific asset and when interaction_on_this_asset is false, it means the interactions is not on this specific asset but on other parts of the served ad this asset is served with. */
  assetInteractionTarget?: GoogleAdsSearchads360V0Common__AssetInteractionTarget;
  /** Conversion action name. */
  conversionActionName?: string;
  /** Hour of day as a number between 0 and 23, inclusive. */
  hour?: number;
  /** The display names of participants in an event listing, like performers, speakers, or teams. */
  verticalAdsEventParticipantDisplayNames?: string;
  /** Type (level 3) of the product sold. */
  productSoldTypeL3?: string;
  /** Resource name of the language constant for the language of the product. */
  productLanguage?: string;
  /** Quarter as represented by the date of the first day of a quarter. Uses the calendar year for quarters, for example, the second quarter of 2018 starts on 2018-04-01. Formatted as yyyy-MM-dd. */
  quarter?: string;
  /** Brand of the product sold. */
  productSoldBrand?: string;
  /** Item ID of the product sold. */
  productSoldItemId?: string;
  /** Bidding category (level 2) of the product. */
  productBiddingCategoryLevel2?: string;
  /** Custom attribute 0 of the product sold. */
  productSoldCustomAttribute0?: string;
  /** Resource name of the geo target constant that represents a metro. */
  geoTargetMetro?: string;
  /** Bidding category (level 4) of the product. */
  productBiddingCategoryLevel4?: string;
  /** Resource name of the geo target constant for the country of sale of the product. */
  productCountry?: string;
  /** Device to which metrics apply. */
  device?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "MOBILE"
    | "TABLET"
    | "DESKTOP"
    | "CONNECTED_TV"
    | "OTHER"
    | (string & {});
  /** Condition of the product sold. */
  productSoldCondition?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "OLD"
    | "NEW"
    | "REFURBISHED"
    | "USED"
    | (string & {});
  /** Custom attribute 4 of the product sold. */
  productSoldCustomAttribute4?: string;
  /** Bidding category (level 3) of the product. */
  productBiddingCategoryLevel3?: string;
  /** Item ID of the product. */
  productItemId?: string;
  /** The region where the vertical ads listing is located. */
  verticalAdsListingRegion?: string;
  /** Channel of the product. */
  productChannel?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ONLINE"
    | "LOCAL"
    | (string & {});
  /** Keyword criterion. */
  keyword?: GoogleAdsSearchads360V0Common__Keyword;
  /** Conversion action category. */
  conversionActionCategory?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "DEFAULT"
    | "PAGE_VIEW"
    | "PURCHASE"
    | "SIGNUP"
    | "LEAD"
    | "DOWNLOAD"
    | "ADD_TO_CART"
    | "BEGIN_CHECKOUT"
    | "SUBSCRIBE_PAID"
    | "PHONE_CALL_LEAD"
    | "IMPORTED_LEAD"
    | "SUBMIT_LEAD_FORM"
    | "BOOK_APPOINTMENT"
    | "REQUEST_QUOTE"
    | "GET_DIRECTIONS"
    | "OUTBOUND_CLICK"
    | "CONTACT"
    | "ENGAGEMENT"
    | "STORE_VISIT"
    | "STORE_SALE"
    | "QUALIFIED_LEAD"
    | "CONVERTED_LEAD"
    | (string & {});
  /** Custom attribute 2 of the product sold. */
  productSoldCustomAttribute2?: string;
  /** Type (level 5) of the product sold. */
  productSoldTypeL5?: string;
  /** Resource name of the geo target constant that represents a city. */
  geoTargetCity?: string;
  /** Month as represented by the date of the first day of a month. Formatted as yyyy-MM-dd. */
  month?: string;
  /** Custom attribute 1 of the product. */
  productCustomAttribute1?: string;
  /** Type of vertical ad, such as Vacation Rentals, Car Rentals, or Events, used to categorize and segment data in the context of Vertical Ads. */
  verticalAdsVertical?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "HOTELS"
    | "VACATION_RENTALS"
    | "RENTAL_CARS"
    | "EVENTS"
    | "THINGS_TO_DO"
    | "FLIGHTS"
    | (string & {});
  /** Year, formatted as yyyy. */
  year?: number;
  /** Day of the week, for example, MONDAY. */
  dayOfWeek?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY"
    | (string & {});
  /** Custom attribute 2 of the product. */
  productCustomAttribute2?: string;
  /** Bidding category (level 1) of the product sold. */
  productSoldBiddingCategoryLevel1?: string;
  /** Type (level 4) of the product. */
  productTypeL4?: string;
  /** The class of the hotel. Generally in the range of 1 to 5 stars, but fully customizable in the hotel feed. */
  verticalAdsHotelClass?: string;
  /** Resource name of the geo target constant that represents a postal code. */
  geoTargetPostalCode?: string;
  /** Type (level 2) of the product. */
  productTypeL2?: string;
  /** The listing associated with a listing impression, click or conversion. */
  verticalAdsListing?: string;
  /** Ad Format type. */
  adFormatType?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "VERTICAL_ADS_PROMOTION"
    | "VERTICAL_ADS_BOOKING_LINK"
    | "TEXT"
    | (string & {});
  /** Type (level 3) of the product. */
  productTypeL3?: string;
}

export const GoogleAdsSearchads360V0Common__Segments: Schema.Schema<GoogleAdsSearchads360V0Common__Segments> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    date: Schema.optional(Schema.String),
    conversionCustomDimensions: Schema.optional(
      Schema.Array(GoogleAdsSearchads360V0Common__Value),
    ),
    verticalAdsListingCity: Schema.optional(Schema.String),
    productCustomAttribute4: Schema.optional(Schema.String),
    adNetworkType: Schema.optional(Schema.String),
    productSoldBiddingCategoryLevel5: Schema.optional(Schema.String),
    productBiddingCategoryLevel1: Schema.optional(Schema.String),
    geoTargetRegion: Schema.optional(Schema.String),
    productBrand: Schema.optional(Schema.String),
    productSoldBiddingCategoryLevel2: Schema.optional(Schema.String),
    productSoldBiddingCategoryLevel4: Schema.optional(Schema.String),
    productSoldTypeL2: Schema.optional(Schema.String),
    verticalAdsListingCountry: Schema.optional(Schema.String),
    geoTargetCountry: Schema.optional(Schema.String),
    productSoldCustomAttribute1: Schema.optional(Schema.String),
    productChannelExclusivity: Schema.optional(Schema.String),
    productTypeL1: Schema.optional(Schema.String),
    verticalAdsListingBrand: Schema.optional(Schema.String),
    productCondition: Schema.optional(Schema.String),
    productSoldBiddingCategoryLevel3: Schema.optional(Schema.String),
    productBiddingCategoryLevel5: Schema.optional(Schema.String),
    productCustomAttribute0: Schema.optional(Schema.String),
    productSoldTypeL1: Schema.optional(Schema.String),
    productSoldTitle: Schema.optional(Schema.String),
    productSoldTypeL4: Schema.optional(Schema.String),
    productStoreId: Schema.optional(Schema.String),
    productTypeL5: Schema.optional(Schema.String),
    rawEventConversionDimensions: Schema.optional(
      Schema.Array(GoogleAdsSearchads360V0Common__Value),
    ),
    productCustomAttribute3: Schema.optional(Schema.String),
    conversionAction: Schema.optional(Schema.String),
    productSoldCustomAttribute3: Schema.optional(Schema.String),
    productTitle: Schema.optional(Schema.String),
    week: Schema.optional(Schema.String),
    verticalAdsPartnerAccount: Schema.optional(Schema.String),
    assetInteractionTarget: Schema.optional(
      GoogleAdsSearchads360V0Common__AssetInteractionTarget,
    ),
    conversionActionName: Schema.optional(Schema.String),
    hour: Schema.optional(Schema.Number),
    verticalAdsEventParticipantDisplayNames: Schema.optional(Schema.String),
    productSoldTypeL3: Schema.optional(Schema.String),
    productLanguage: Schema.optional(Schema.String),
    quarter: Schema.optional(Schema.String),
    productSoldBrand: Schema.optional(Schema.String),
    productSoldItemId: Schema.optional(Schema.String),
    productBiddingCategoryLevel2: Schema.optional(Schema.String),
    productSoldCustomAttribute0: Schema.optional(Schema.String),
    geoTargetMetro: Schema.optional(Schema.String),
    productBiddingCategoryLevel4: Schema.optional(Schema.String),
    productCountry: Schema.optional(Schema.String),
    device: Schema.optional(Schema.String),
    productSoldCondition: Schema.optional(Schema.String),
    productSoldCustomAttribute4: Schema.optional(Schema.String),
    productBiddingCategoryLevel3: Schema.optional(Schema.String),
    productItemId: Schema.optional(Schema.String),
    verticalAdsListingRegion: Schema.optional(Schema.String),
    productChannel: Schema.optional(Schema.String),
    keyword: Schema.optional(GoogleAdsSearchads360V0Common__Keyword),
    conversionActionCategory: Schema.optional(Schema.String),
    productSoldCustomAttribute2: Schema.optional(Schema.String),
    productSoldTypeL5: Schema.optional(Schema.String),
    geoTargetCity: Schema.optional(Schema.String),
    month: Schema.optional(Schema.String),
    productCustomAttribute1: Schema.optional(Schema.String),
    verticalAdsVertical: Schema.optional(Schema.String),
    year: Schema.optional(Schema.Number),
    dayOfWeek: Schema.optional(Schema.String),
    productCustomAttribute2: Schema.optional(Schema.String),
    productSoldBiddingCategoryLevel1: Schema.optional(Schema.String),
    productTypeL4: Schema.optional(Schema.String),
    verticalAdsHotelClass: Schema.optional(Schema.String),
    geoTargetPostalCode: Schema.optional(Schema.String),
    productTypeL2: Schema.optional(Schema.String),
    verticalAdsListing: Schema.optional(Schema.String),
    adFormatType: Schema.optional(Schema.String),
    productTypeL3: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Common__Segments" });

export interface GoogleAdsSearchads360V0Resources__LanguageConstant {
  /** Output only. Whether the language is targetable. */
  targetable?: boolean;
  /** Output only. The resource name of the language constant. Language constant resource names have the form: `languageConstants/{criterion_id}` */
  resourceName?: string;
  /** Output only. The ID of the language constant. */
  id?: string;
  /** Output only. The full name of the language in English, for example, "English (US)", "Spanish", etc. */
  name?: string;
  /** Output only. The language code, for example, "en_US", "en_AU", "es", "fr", etc. */
  code?: string;
}

export const GoogleAdsSearchads360V0Resources__LanguageConstant: Schema.Schema<GoogleAdsSearchads360V0Resources__LanguageConstant> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetable: Schema.optional(Schema.Boolean),
    resourceName: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__LanguageConstant",
  });

export interface GoogleAdsSearchads360V0Resources__ProductGroupView {
  /** Output only. The resource name of the product group view. Product group view resource names have the form: `customers/{customer_id}/productGroupViews/{ad_group_id}~{criterion_id}` */
  resourceName?: string;
}

export const GoogleAdsSearchads360V0Resources__ProductGroupView: Schema.Schema<GoogleAdsSearchads360V0Resources__ProductGroupView> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__ProductGroupView",
  });

export interface GoogleAdsSearchads360V0Resources__AssetGroup {
  /** The status of the asset group. */
  status?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ENABLED"
    | "PAUSED"
    | "REMOVED"
    | (string & {});
  /** Second part of text that may appear appended to the url displayed in the ad. This field can only be set when path1 is set. */
  path2?: string;
  /** Output only. Overall ad strength of this asset group. */
  adStrength?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "PENDING"
    | "NO_ADS"
    | "POOR"
    | "AVERAGE"
    | "GOOD"
    | "EXCELLENT"
    | (string & {});
  /** Output only. The ID of the asset group. */
  id?: string;
  /** Immutable. The campaign with which this asset group is associated. The asset which is linked to the asset group. */
  campaign?: string;
  /** Required. Name of the asset group. Required. It must have a minimum length of 1 and maximum length of 128. It must be unique under a campaign. */
  name?: string;
  /** A list of final URLs after all cross domain redirects. In performance max, by default, the urls are eligible for expansion unless opted out. */
  finalUrls?: ReadonlyArray<string>;
  /** Immutable. The resource name of the asset group. Asset group resource names have the form: `customers/{customer_id}/assetGroups/{asset_group_id}` */
  resourceName?: string;
  /** A list of final mobile URLs after all cross domain redirects. In performance max, by default, the urls are eligible for expansion unless opted out. */
  finalMobileUrls?: ReadonlyArray<string>;
  /** First part of text that may appear appended to the url displayed in the ad. */
  path1?: string;
}

export const GoogleAdsSearchads360V0Resources__AssetGroup: Schema.Schema<GoogleAdsSearchads360V0Resources__AssetGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    path2: Schema.optional(Schema.String),
    adStrength: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    campaign: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    finalUrls: Schema.optional(Schema.Array(Schema.String)),
    resourceName: Schema.optional(Schema.String),
    finalMobileUrls: Schema.optional(Schema.Array(Schema.String)),
    path1: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Resources__AssetGroup" });

export interface GoogleAdsSearchads360V0Common__TargetingSetting {
  /** The per-targeting-dimension setting to restrict the reach of your campaign or ad group. */
  targetRestrictions?: ReadonlyArray<GoogleAdsSearchads360V0Common__TargetRestriction>;
}

export const GoogleAdsSearchads360V0Common__TargetingSetting: Schema.Schema<GoogleAdsSearchads360V0Common__TargetingSetting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetRestrictions: Schema.optional(
      Schema.Array(GoogleAdsSearchads360V0Common__TargetRestriction),
    ),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Common__TargetingSetting",
  });

export interface GoogleAdsSearchads360V0Resources__AdGroup {
  /** The maximum CPC (cost-per-click) bid. This field is used when the ad group's effective bidding strategy is Manual CPC. This field is not applicable and will be ignored if the ad group's campaign is using a portfolio bidding strategy. */
  cpcBidMicros?: string;
  /** Output only. Date when the ad group ends serving ads. By default, the ad group ends on the ad group's end date. If this field is set, then the ad group ends at the end of the specified date in the customer's time zone. This field is only available for Microsoft Advertising and Facebook gateway accounts. Format: YYYY-MM-DD Example: 2019-03-14 */
  endDate?: string;
  /** URL template for appending params to Final URL. */
  finalUrlSuffix?: string;
  /** Output only. The language of the ads and keywords in an ad group. This field is only available for Microsoft Advertising accounts. More details: https://docs.microsoft.com/en-us/advertising/guides/ad-languages?view=bingads-13#adlanguage */
  languageCode?: string;
  /** Immutable. The type of the ad group. */
  type?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "SEARCH_STANDARD"
    | "DISPLAY_STANDARD"
    | "SHOPPING_PRODUCT_ADS"
    | "HOTEL_ADS"
    | "SHOPPING_SMART_ADS"
    | "VIDEO_BUMPER"
    | "VIDEO_TRUE_VIEW_IN_STREAM"
    | "VIDEO_TRUE_VIEW_IN_DISPLAY"
    | "VIDEO_NON_SKIPPABLE_IN_STREAM"
    | "VIDEO_OUTSTREAM"
    | "SEARCH_DYNAMIC_ADS"
    | "SHOPPING_COMPARISON_LISTING_ADS"
    | "PROMOTED_HOTEL_ADS"
    | "VIDEO_RESPONSIVE"
    | "VIDEO_EFFICIENT_REACH"
    | "SMART_CAMPAIGN_ADS"
    | "TRAVEL_ADS"
    | (string & {});
  /** Output only. The timestamp when this ad_group was created. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format. */
  creationTime?: string;
  /** The URL template for constructing a tracking URL. */
  trackingUrlTemplate?: string;
  /** The ad rotation mode of the ad group. */
  adRotationMode?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "OPTIMIZE"
    | "ROTATE_FOREVER"
    | (string & {});
  /** Output only. The ID of the ad group. */
  id?: string;
  /** The name of the ad group. This field is required and should not be empty when creating new ad groups. It must contain fewer than 255 UTF-8 full-width characters. It must not contain any null (code point 0x0), NL line feed (code point 0xA) or carriage return (code point 0xD) characters. */
  name?: string;
  /** Output only. The resource names of effective labels attached to this ad group. An effective label is a label inherited or directly assigned to this ad group. */
  effectiveLabels?: ReadonlyArray<string>;
  /** Output only. ID of the ad group in the external engine account. This field is for non-Google Ads account only, for example, Yahoo Japan, Microsoft, Baidu etc. For Google Ads entity, use "ad_group.id" instead. */
  engineId?: string;
  /** Output only. The resource names of labels attached to this ad group. */
  labels?: ReadonlyArray<string>;
  /** The status of the ad group. */
  status?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ENABLED"
    | "PAUSED"
    | "REMOVED"
    | (string & {});
  /** Setting for targeting related features. */
  targetingSetting?: GoogleAdsSearchads360V0Common__TargetingSetting;
  /** Output only. Date when this ad group starts serving ads. By default, the ad group starts now or the ad group's start date, whichever is later. If this field is set, then the ad group starts at the beginning of the specified date in the customer's time zone. This field is only available for Microsoft Advertising and Facebook gateway accounts. Format: YYYY-MM-DD Example: 2019-03-14 */
  startDate?: string;
  /** Output only. The datetime when this ad group was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format. */
  lastModifiedTime?: string;
  /** Output only. The Engine Status for ad group. */
  engineStatus?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "AD_GROUP_ELIGIBLE"
    | "AD_GROUP_EXPIRED"
    | "AD_GROUP_REMOVED"
    | "AD_GROUP_DRAFT"
    | "AD_GROUP_PAUSED"
    | "AD_GROUP_SERVING"
    | "AD_GROUP_SUBMITTED"
    | "CAMPAIGN_PAUSED"
    | "ACCOUNT_PAUSED"
    | (string & {});
  /** Immutable. The resource name of the ad group. Ad group resource names have the form: `customers/{customer_id}/adGroups/{ad_group_id}` */
  resourceName?: string;
}

export const GoogleAdsSearchads360V0Resources__AdGroup: Schema.Schema<GoogleAdsSearchads360V0Resources__AdGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cpcBidMicros: Schema.optional(Schema.String),
    endDate: Schema.optional(Schema.String),
    finalUrlSuffix: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    creationTime: Schema.optional(Schema.String),
    trackingUrlTemplate: Schema.optional(Schema.String),
    adRotationMode: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    effectiveLabels: Schema.optional(Schema.Array(Schema.String)),
    engineId: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Array(Schema.String)),
    status: Schema.optional(Schema.String),
    targetingSetting: Schema.optional(
      GoogleAdsSearchads360V0Common__TargetingSetting,
    ),
    startDate: Schema.optional(Schema.String),
    lastModifiedTime: Schema.optional(Schema.String),
    engineStatus: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Resources__AdGroup" });

export interface GoogleAdsSearchads360V0Common__TextLabel {
  /** Background color of the label in HEX format. This string must match the regular expression '^\#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$'. Note: The background color may not be visible for manager accounts. */
  backgroundColor?: string;
  /** A short description of the label. The length must be no more than 200 characters. */
  description?: string;
}

export const GoogleAdsSearchads360V0Common__TextLabel: Schema.Schema<GoogleAdsSearchads360V0Common__TextLabel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backgroundColor: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Common__TextLabel" });

export interface GoogleAdsSearchads360V0Resources__Label {
  /** Output only. ID of the label. Read only. */
  id?: string;
  /** The name of the label. This field is required and should not be empty when creating a new label. The length of this string should be between 1 and 80, inclusive. */
  name?: string;
  /** A type of label displaying text on a colored background. */
  textLabel?: GoogleAdsSearchads360V0Common__TextLabel;
  /** Output only. Status of the label. Read only. */
  status?: "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVED" | (string & {});
  /** Immutable. Name of the resource. Label resource names have the form: `customers/{owner_customer_id}/labels/{label_id}` */
  resourceName?: string;
}

export const GoogleAdsSearchads360V0Resources__Label: Schema.Schema<GoogleAdsSearchads360V0Resources__Label> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    textLabel: Schema.optional(GoogleAdsSearchads360V0Common__TextLabel),
    status: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Resources__Label" });

export interface GoogleAdsSearchads360V0Resources__AdGroupAdEffectiveLabel {
  /** Immutable. The ad group ad to which the effective label is attached. */
  adGroupAd?: string;
  /** Immutable. The resource name of the ad group ad effective label. Ad group ad effective label resource names have the form: `customers/{owner_customer_id}/adGroupAdEffectiveLabels/{ad_group_id}~{ad_id}~{label_id}` */
  resourceName?: string;
  /** Immutable. The effective label assigned to the ad group ad. */
  label?: string;
  /** Output only. The ID of the Customer which owns the effective label. */
  ownerCustomerId?: string;
}

export const GoogleAdsSearchads360V0Resources__AdGroupAdEffectiveLabel: Schema.Schema<GoogleAdsSearchads360V0Resources__AdGroupAdEffectiveLabel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adGroupAd: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    label: Schema.optional(Schema.String),
    ownerCustomerId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__AdGroupAdEffectiveLabel",
  });

export interface GoogleAdsSearchads360V0Resources__CustomerAssetSet {
  /** Immutable. The resource name of the customer asset set. Asset set asset resource names have the form: `customers/{customer_id}/customerAssetSets/{asset_set_id}` */
  resourceName?: string;
  /** Immutable. The customer to which this asset set is linked. */
  customer?: string;
  /** Output only. The status of the customer asset set asset. Read-only. */
  status?: "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVED" | (string & {});
  /** Immutable. The asset set which is linked to the customer. */
  assetSet?: string;
}

export const GoogleAdsSearchads360V0Resources__CustomerAssetSet: Schema.Schema<GoogleAdsSearchads360V0Resources__CustomerAssetSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceName: Schema.optional(Schema.String),
    customer: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    assetSet: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__CustomerAssetSet",
  });

export interface GoogleAdsSearchads360V0Common__Metrics {
  /** The sum of conversion values for the conversions included in the "conversions" field. This metric is useful only if you entered a value for your conversion actions. */
  conversionsValue?: number;
  /** The estimated percent of times that your ad was eligible to show on the Display Network but didn't because your budget was too low. Note: Content budget lost impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001. */
  contentBudgetLostImpressionShare?: number;
  /** The number of times people clicked a "Get directions" button to navigate to a business after clicking an ad. This metric applies to feed items only. */
  allConversionsFromDirections?: number;
  /** The number estimating how often your ad didn't show adjacent to the top organic search results due to poor Ad Rank. Note: Search rank lost top impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001. */
  searchRankLostTopImpressionShare?: number;
  /** The cost of ad interactions divided by current model attributed conversions. This only includes conversion actions which include_in_conversions_metric attribute is set to true. If you use conversion-based bidding, your bid strategies will optimize for these conversions. */
  costPerCurrentModelAttributedConversion?: number;
  /** The value of all conversions from interactions divided by the total number of interactions. */
  allConversionsFromInteractionsValuePerInteraction?: number;
  /** The historical quality score. */
  historicalQualityScore?: string;
  /** The percentage of the customer's Shopping or Search ad impressions that are shown in the most prominent Shopping position. See https://support.google.com/sa360/answer/9566729 for details. Any value below 0.1 is reported as 0.0999. */
  searchAbsoluteTopImpressionShare?: number;
  /** Search absolute top impression share is the percentage of your Search ad impressions that are shown in the most prominent Search position. */
  absoluteTopImpressionPercentage?: number;
  /** Revenue is the total amount you made from orders attributed to your ads. How it works: You report conversions with cart data for completed purchases on your website. Revenue is the total value of all the orders you received attributed to your ads, minus any discount. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt in an order from your website. The hat is priced $10 and the shirt is priced $20. The entire order has a $5 discount. The revenue from this order is $25 = ($10 + $20) - $5. This metric is only available if you report conversions with cart data. */
  revenueMicros?: string;
  /** The value of all conversions. When this column is selected with date, the values in date column means the conversion date. Details for the by_conversion_date columns are available at https://support.google.com/sa360/answer/9250611. */
  allConversionsValueByConversionDate?: number;
  /** Clicks that Search Ads 360 has successfully recorded and forwarded to an advertiser's landing page. */
  visits?: number;
  /** The average number of times a unique user saw your ad during the requested time period. This metric cannot be aggregated, and can only be requested for date ranges of 92 days or less. This metric is available for following campaign types - Display, Video, Discovery and App. */
  averageImpressionFrequencyPerUser?: number;
  /** The creative historical quality score. */
  historicalCreativeQualityScore?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "BELOW_AVERAGE"
    | "AVERAGE"
    | "ABOVE_AVERAGE"
    | (string & {});
  /** The total cost of all clicks divided by the total number of clicks received. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
  averageCpc?: number;
  /** Biddable conversions value by conversion date divided by biddable conversions by conversion date. Shows how much, on average, each of the biddable conversions is worth (by conversion date). When this column is selected with date, the values in date column means the conversion date. */
  valuePerConversionsByConversionDate?: number;
  /** Number of clicks Google considers illegitimate and doesn't charge you for. */
  invalidClicks?: string;
  /** The total number of conversions. This includes all conversions regardless of the value of include_in_conversions_metric. */
  allConversions?: number;
  /** The raw event conversion metrics. */
  rawEventConversionMetrics?: ReadonlyArray<GoogleAdsSearchads360V0Common__Value>;
  /** The number of clicks you've received on the Search Network divided by the estimated number of clicks you were eligible to receive. Note: Search click share is reported in the range of 0.1 to 1. Any value below 0.1 is reported as 0.0999. */
  searchClickShare?: number;
  /** The number estimating how often your ad wasn't the very first ad among the top ads in the search results due to a low budget. Note: Search budget lost absolute top impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001. */
  searchBudgetLostAbsoluteTopImpressionShare?: number;
  /** Orders is the total number of purchase conversions you received attributed to your ads. How it works: You report conversions with cart data for completed purchases on your website. If a conversion is attributed to previous interactions with your ads (clicks for text or Shopping ads, views for video ads etc.) it's counted as an order. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt in an order on your website. Even though they bought 2 products, this would count as 1 order. This metric is only available if you report conversions with cart data. */
  orders?: number;
  /** The number of interactions. An interaction is the main user action associated with an ad format-clicks for text and shopping ads, views for video ads, and so on. */
  interactions?: string;
  /** The number of unique users who saw your ad during the requested time period. This metric cannot be aggregated, and can only be requested for date ranges of 92 days or less. This metric is available for following campaign types - Display, Video, Discovery and App. */
  uniqueUsers?: string;
  /** The number of clicks your ad receives (Clicks) divided by the number of times your ad is shown (Impressions). */
  ctr?: number;
  /** Number of general invalid clicks. These are a subset of your invalid clicks that are detected through routine means of filtration (such as known invalid data-center traffic, bots and spiders or other crawlers, irregular patterns, etc.). You're not charged for them, and they don't affect your account statistics. See the help page at https://support.google.com/campaignmanager/answer/6076504 for details. */
  generalInvalidClicks?: string;
  /** Gross profit margin is the percentage gross profit you made from orders attributed to your ads, after taking out the cost of goods sold (COGS). How it works: You report conversions with cart data for completed purchases on your website. Gross profit margin is the gross profit you made divided by your total revenue and multiplied by 100%. Gross profit margin calculations only include products that have a cost of goods sold value in Merchant Center. Example: Someone bought a hat and a shirt in an order on your website. The hat is priced $10 and has a cost of goods sold value of $3. The shirt is priced $20 but has no cost of goods sold value. Gross profit margin for this order will only take into account the hat because it has a cost of goods sold value, so it's 70% = ($10 - $3)/$10 x 100%. This metric is only available if you report conversions with cart data. */
  grossProfitMargin?: number;
  /** Client account lead gross profit is the profit you made from products sold as a result of advertising the same product, minus cost of goods sold (COGS). How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If the advertised and sold products match, then the revenue you made from these sales minus the cost of goods sold is your lead gross profit. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat is priced $10 and has a cost of goods sold value of $3. The lead gross profit of this order is $7 = $10 - $3. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
  clientAccountLeadGrossProfitMicros?: string;
  /** Average cart size is the average number of products in each order attributed to your ads. How it works: You report conversions with cart data for completed purchases on your website. Average cart size is the total number of products sold divided by the total number of orders you received. Example: You received 2 orders, the first included 3 products and the second included 2. The average cart size is 2.5 products = (3+2)/2. This metric is only available if you report conversions with cart data. */
  averageCartSize?: number;
  /** The impressions you've received divided by the estimated number of impressions you were eligible to receive on the Search Network for search terms that matched your keywords exactly (or were close variants of your keyword), regardless of your keyword match types. Note: Search exact match impression share is reported in the range of 0.1 to 1. Any value below 0.1 is reported as 0.0999. */
  searchExactMatchImpressionShare?: number;
  /** The average quality score. */
  averageQualityScore?: number;
  /** Cross-sell gross profit is the profit you made from products sold as a result of advertising a different product, minus cost of goods sold (COGS). How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the purchase is a sold product. If these products don't match then this is considered cross-sell. Cross-sell gross profit is the revenue you made from cross-sell attributed to your ads minus the cost of the goods sold. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The shirt is priced $20 and has a cost of goods sold value of $5. The cross-sell gross profit of this order is $15 = $20 - $5. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
  crossSellGrossProfitMicros?: string;
  /** The number of times people clicked the "Call" button to call a business during or after clicking an ad. This number doesn't include whether or not calls were connected, or the duration of any calls. This metric applies to feed items only. */
  allConversionsFromClickToCall?: number;
  /** The impressions you've received on the Search Network divided by the estimated number of impressions you were eligible to receive. Note: Search impression share is reported in the range of 0.1 to 1. Any value below 0.1 is reported as 0.0999. */
  searchImpressionShare?: number;
  /** Client account lead units sold is the total number of products sold as a result of advertising the same product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If the advertised and sold products match, then the total number of these products sold is shown under lead units sold. Example: Someone clicked on a Shopping ad for a hat then bought the same hat, a shirt and a jacket. The lead units sold in this order is 1. This metric is only available if you report conversions with cart data. */
  clientAccountLeadUnitsSold?: number;
  /** Client account lead revenue is the total amount you made from products sold as a result of advertising the same product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If the advertised and sold products match, then the total value you made from the sales of these products is shown under lead revenue. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat is priced $10 and the shirt is priced $20. The lead revenue of this order is $10. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
  clientAccountLeadRevenueMicros?: string;
  /** The sum of biddable conversions value by conversion date. When this column is selected with date, the values in date column means the conversion date. */
  conversionsValueByConversionDate?: number;
  /** The number of cross-device conversions by conversion date. Details for the by_conversion_date columns are available at https://support.google.com/sa360/answer/9250611. */
  crossDeviceConversionsByConversionDate?: number;
  /** The number of conversions. This only includes conversion actions which include_in_conversions_metric attribute is set to true. If you use conversion-based bidding, your bid strategies will optimize for these conversions. */
  conversions?: number;
  /** The quality of historical landing page experience. */
  historicalLandingPageQualityScore?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "BELOW_AVERAGE"
    | "AVERAGE"
    | "ABOVE_AVERAGE"
    | (string & {});
  /** The types of payable and free interactions. */
  interactionEventTypes?: ReadonlyArray<
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CLICK"
    | "ENGAGEMENT"
    | "VIDEO_VIEW"
    | "NONE"
    | (string & {})
  >;
  /** Average conversion eligible cost per biddable conversion. */
  costPerConversion?: number;
  /** Units sold is the total number of products sold from orders attributed to your ads. How it works: You report conversions with cart data for completed purchases on your website. Units sold is the total number of products sold from all orders attributed to your ads. Example: Someone clicked on a Shopping ad for a hat then bought the same hat, a shirt and a jacket. The units sold in this order is 3. This metric is only available if you report conversions with cart data. */
  unitsSold?: number;
  /** Average cost-per-thousand impressions (CPM). This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
  averageCpm?: number;
  /** Client account cross-sell cost of goods sold (COGS) is the total cost of products sold as a result of advertising a different product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If these products don't match then this is considered cross-sell. Cross-sell cost of goods sold is the total cost of the products sold that weren't advertised. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat has a cost of goods sold value of $3, the shirt has a cost of goods sold value of $5. The cross-sell cost of goods sold for this order is $5. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
  clientAccountCrossSellCostOfGoodsSoldMicros?: string;
  /** The sum of conversions by conversion date for biddable conversion types. Can be fractional due to attribution modeling. When this column is selected with date, the values in date column means the conversion date. */
  conversionsByConversionDate?: number;
  /** The value of client account conversions. This only includes conversion actions which include_in_client_account_conversions_metric attribute is set to true. If you use conversion-based bidding, your bid strategies will optimize for these conversions. */
  clientAccountConversionsValue?: number;
  /** The estimated percentage of impressions on the Display Network that your ads didn't receive due to poor Ad Rank. Note: Content rank lost impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001. */
  contentRankLostImpressionShare?: number;
  /** All conversions from interactions (as oppose to view through conversions) divided by the number of ad interactions. */
  allConversionsFromInteractionsRate?: number;
  /** The number of times that people were taken to a business's URL after clicking an ad. This metric applies to feed items only. */
  allConversionsFromStoreWebsite?: number;
  /** The total number of conversions. This includes all conversions regardless of the value of include_in_conversions_metric. When this column is selected with date, the values in date column means the conversion date. Details for the by_conversion_date columns are available at https://support.google.com/sa360/answer/9250611. */
  allConversionsByConversionDate?: number;
  /** The number of times people placed an order at a business after clicking an ad. This metric applies to feed items only. */
  allConversionsFromOrder?: number;
  /** The value of conversions from interactions divided by the number of ad interactions. This only includes conversion actions which include_in_conversions_metric attribute is set to true. If you use conversion-based bidding, your bid strategies will optimize for these conversions. */
  conversionsFromInteractionsValuePerInteraction?: number;
  /** How often people interact with your ad after it is shown to them. This is the number of interactions divided by the number of times your ad is shown. */
  interactionRate?: number;
  /** The value of biddable conversion divided by the number of biddable conversions. Shows how much, on average, each of the biddable conversions is worth. */
  valuePerConversion?: number;
  /** Count of how often your ad has appeared on a search results page or website on the Google Network. */
  impressions?: string;
  /** Conversions from when a customer clicks on an ad on one device, then converts on a different device or browser. Cross-device conversions are already included in all_conversions. */
  crossDeviceConversions?: number;
  /** Lead revenue is the total amount you made from products sold as a result of advertising the same product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If the advertised and sold products match, then the total value you made from the sales of these products is shown under lead revenue. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat is priced $10 and the shirt is priced $20. The lead revenue of this order is $10. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
  leadRevenueMicros?: string;
  /** The value of all conversions divided by the number of all conversions. When this column is selected with date, the values in date column means the conversion date. Details for the by_conversion_date columns are available at https://support.google.com/sa360/answer/9250611. */
  valuePerAllConversionsByConversionDate?: number;
  /** The number estimating how often your ad didn't show adjacent to the top organic search results due to a low budget. Note: Search budget lost top impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001. */
  searchBudgetLostTopImpressionShare?: number;
  /** The impressions you've received on the Display Network divided by the estimated number of impressions you were eligible to receive. Note: Content impression share is reported in the range of 0.1 to 1. Any value below 0.1 is reported as 0.0999. */
  contentImpressionShare?: number;
  /** The estimated percentage of impressions on the Search Network that your ads didn't receive due to poor Ad Rank. Note: Search rank lost impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001. */
  searchRankLostImpressionShare?: number;
  /** The number of clicks. */
  clicks?: string;
  /** Gross profit is the profit you made from orders attributed to your ads minus the cost of goods sold (COGS). How it works: Gross profit is the revenue you made from sales attributed to your ads minus cost of goods sold. Gross profit calculations only include products that have a cost of goods sold value in Merchant Center. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt in an order from your website. The hat is priced $10 and the shirt is priced $20. The hat has a cost of goods sold value of $3, but the shirt has no cost of goods sold value. Gross profit for this order will only take into account the hat, so it's $7 = $10 - $3. This metric is only available if you report conversions with cart data. */
  grossProfitMicros?: string;
  /** The impressions you've received among the top ads compared to the estimated number of impressions you were eligible to receive among the top ads. Note: Search top impression share is reported in the range of 0.1 to 1. Any value below 0.1 is reported as 0.0999. Top ads are generally above the top organic results, although they may show below the top organic results on certain queries. */
  searchTopImpressionShare?: number;
  /** Lead cost of goods sold (COGS) is the total cost of products sold as a result of advertising the same product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If the advertised and sold products match, then the cost of these goods is counted under lead cost of goods sold. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat has a cost of goods sold value of $3, the shirt has a cost of goods sold value of $5. The lead cost of goods sold for this order is $3. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
  leadCostOfGoodsSoldMicros?: string;
  /** Lead gross profit is the profit you made from products sold as a result of advertising the same product, minus cost of goods sold (COGS). How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If the advertised and sold products match, then the revenue you made from these sales minus the cost of goods sold is your lead gross profit. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat is priced $10 and has a cost of goods sold value of $3. The lead gross profit of this order is $7 = $10 - $3. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
  leadGrossProfitMicros?: string;
  /** Average order value is the average revenue you made per order attributed to your ads. How it works: You report conversions with cart data for completed purchases on your website. Average order value is the total revenue from your orders divided by the total number of orders. Example: You received 3 orders which made $10, $15 and $20 worth of revenue. The average order value is $15 = ($10 + $15 + $20)/3. This metric is only available if you report conversions with cart data. */
  averageOrderValueMicros?: string;
  /** The conversion custom metrics. */
  conversionCustomMetrics?: ReadonlyArray<GoogleAdsSearchads360V0Common__Value>;
  /** The sum of the value of cross-device conversions. */
  crossDeviceConversionsValue?: number;
  /** The number of times people clicked a link to view a business's menu after clicking an ad. This metric applies to feed items only. */
  allConversionsFromMenu?: number;
  /** Lead units sold is the total number of products sold as a result of advertising the same product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If the advertised and sold products match, then the total number of these products sold is shown under lead units sold. Example: Someone clicked on a Shopping ad for a hat then bought the same hat, a shirt and a jacket. The lead units sold in this order is 1. This metric is only available if you report conversions with cart data. */
  leadUnitsSold?: number;
  /** The number estimating how often your ad wasn't the very first ad among the top ads in the search results due to poor Ad Rank. Note: Search rank lost absolute top impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001. */
  searchRankLostAbsoluteTopImpressionShare?: number;
  /** The value of all conversions divided by the total cost of ad interactions (such as clicks for text ads or views for video ads). */
  allConversionsValuePerCost?: number;
  /** The percentage of mobile clicks that go to a mobile-friendly page. */
  mobileFriendlyClicksPercentage?: number;
  /** The estimated percent of times that your ad was eligible to show on the Search Network but didn't because your budget was too low. Note: Search budget lost impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001. */
  searchBudgetLostImpressionShare?: number;
  /** The total number of view-through conversions. These happen when a customer sees an image or rich media ad, then later completes a conversion on your site without interacting with (for example, clicking on) another ad. */
  clientAccountViewThroughConversions?: string;
  /** Client account lead cost of goods sold (COGS) is the total cost of products sold as a result of advertising the same product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If the advertised and sold products match, then the cost of these goods is counted under lead cost of goods sold. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat has a cost of goods sold value of $3, the shirt has a cost of goods sold value of $5. The lead cost of goods sold for this order is $3. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
  clientAccountLeadCostOfGoodsSoldMicros?: string;
  /** The number of client account conversions. This only includes conversion actions which include_in_client_account_conversions_metric attribute is set to true. If you use conversion-based bidding, your bid strategies will optimize for these conversions. */
  clientAccountConversions?: number;
  /** Cross-sell revenue is the total amount you made from products sold as a result of advertising a different product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If these products don't match then this is considered cross-sell. Cross-sell revenue is the total value you made from cross-sell attributed to your ads. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat is priced $10 and the shirt is priced $20. The cross-sell revenue of this order is $20. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
  crossSellRevenueMicros?: string;
  /** Client account cross-sell gross profit is the profit you made from products sold as a result of advertising a different product, minus cost of goods sold (COGS). How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the purchase is a sold product. If these products don't match then this is considered cross-sell. Cross-sell gross profit is the revenue you made from cross-sell attributed to your ads minus the cost of the goods sold. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The shirt is priced $20 and has a cost of goods sold value of $5. The cross-sell gross profit of this order is $15 = $20 - $5. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
  clientAccountCrossSellGrossProfitMicros?: string;
  /** Cost of goods sold (COGS) is the total cost of the products you sold in orders attributed to your ads. How it works: You can add a cost of goods sold value to every product in Merchant Center. If you report conversions with cart data, the products you sold are matched with their cost of goods sold value and this can be used to calculate the gross profit you made on each order. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat has a cost of goods sold value of $3, the shirt has a cost of goods sold value of $5. The cost of goods sold for this order is $8 = $3 + $5. This metric is only available if you report conversions with cart data. */
  costOfGoodsSoldMicros?: string;
  /** Client account cross-sell units sold is the total number of products sold as a result of advertising a different product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If these products don't match then this is considered cross-sell. Cross-sell units sold is the total number of cross-sold products from all orders attributed to your ads. Example: Someone clicked on a Shopping ad for a hat then bought the same hat, a shirt and a jacket. The cross-sell units sold in this order is 2. This metric is only available if you report conversions with cart data. */
  clientAccountCrossSellUnitsSold?: number;
  /** The value of biddable conversion divided by the total cost of conversion eligible interactions. */
  conversionsValuePerCost?: number;
  /** The historical search predicted click through rate (CTR). */
  historicalSearchPredictedCtr?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "BELOW_AVERAGE"
    | "AVERAGE"
    | "ABOVE_AVERAGE"
    | (string & {});
  /** The value of all conversions divided by the number of all conversions. */
  valuePerAllConversions?: number;
  /** The cost of ad interactions divided by all conversions. */
  costPerAllConversions?: number;
  /** Client account cross-sell revenue is the total amount you made from products sold as a result of advertising a different product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If these products don't match then this is considered cross-sell. Cross-sell revenue is the total value you made from cross-sell attributed to your ads. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat is priced $10 and the shirt is priced $20. The cross-sell revenue of this order is $20. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
  clientAccountCrossSellRevenueMicros?: string;
  /** Average biddable conversions (from interaction) per conversion eligible interaction. Shows how often, on average, an ad interaction leads to a biddable conversion. */
  conversionsFromInteractionsRate?: number;
  /** The percent of your ad impressions that are shown adjacent to the top organic search results. */
  topImpressionPercentage?: number;
  /** The percentage of clicks filtered out of your total number of clicks (filtered + non-filtered clicks) during the reporting period. */
  invalidClickRate?: number;
  /** The sum of cross-device conversions value by conversion date. Details for the by_conversion_date columns are available at https://support.google.com/sa360/answer/9250611. */
  crossDeviceConversionsValueByConversionDate?: number;
  /** Cross-sell units sold is the total number of products sold as a result of advertising a different product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If these products don't match then this is considered cross-sell. Cross-sell units sold is the total number of cross-sold products from all orders attributed to your ads. Example: Someone clicked on a Shopping ad for a hat then bought the same hat, a shirt and a jacket. The cross-sell units sold in this order is 2. This metric is only available if you report conversions with cart data. */
  crossSellUnitsSold?: number;
  /** Cross-sell cost of goods sold (COGS) is the total cost of products sold as a result of advertising a different product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If these products don't match then this is considered cross-sell. Cross-sell cost of goods sold is the total cost of the products sold that weren't advertised. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat has a cost of goods sold value of $3, the shirt has a cost of goods sold value of $5. The cross-sell cost of goods sold for this order is $5. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
  crossSellCostOfGoodsSoldMicros?: string;
  /** The value of all conversions. */
  allConversionsValue?: number;
  /** The number of other conversions (for example, posting a review or saving a location for a business) that occurred after people clicked an ad. This metric applies to feed items only. */
  allConversionsFromOtherEngagement?: number;
  /** The percentage of clicks that have been filtered out of your total number of clicks (filtered + non-filtered clicks) due to being general invalid clicks. These are clicks Google considers illegitimate that are detected through routine means of filtration (that is, known invalid data-center traffic, bots and spiders or other crawlers, irregular patterns, etc). You're not charged for them, and they don't affect your account statistics. See the help page at https://support.google.com/campaignmanager/answer/6076504 for details. */
  generalInvalidClickRate?: number;
  /** Estimated number of times people visited a business after clicking an ad. This metric applies to feed items only. */
  allConversionsFromStoreVisit?: number;
  /** The average amount you pay per interaction. This amount is the total cost of your ads divided by the total number of interactions. */
  averageCost?: number;
  /** The sum of your cost-per-click (CPC) and cost-per-thousand impressions (CPM) costs during this period. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
  costMicros?: string;
}

export const GoogleAdsSearchads360V0Common__Metrics: Schema.Schema<GoogleAdsSearchads360V0Common__Metrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversionsValue: Schema.optional(Schema.Number),
    contentBudgetLostImpressionShare: Schema.optional(Schema.Number),
    allConversionsFromDirections: Schema.optional(Schema.Number),
    searchRankLostTopImpressionShare: Schema.optional(Schema.Number),
    costPerCurrentModelAttributedConversion: Schema.optional(Schema.Number),
    allConversionsFromInteractionsValuePerInteraction: Schema.optional(
      Schema.Number,
    ),
    historicalQualityScore: Schema.optional(Schema.String),
    searchAbsoluteTopImpressionShare: Schema.optional(Schema.Number),
    absoluteTopImpressionPercentage: Schema.optional(Schema.Number),
    revenueMicros: Schema.optional(Schema.String),
    allConversionsValueByConversionDate: Schema.optional(Schema.Number),
    visits: Schema.optional(Schema.Number),
    averageImpressionFrequencyPerUser: Schema.optional(Schema.Number),
    historicalCreativeQualityScore: Schema.optional(Schema.String),
    averageCpc: Schema.optional(Schema.Number),
    valuePerConversionsByConversionDate: Schema.optional(Schema.Number),
    invalidClicks: Schema.optional(Schema.String),
    allConversions: Schema.optional(Schema.Number),
    rawEventConversionMetrics: Schema.optional(
      Schema.Array(GoogleAdsSearchads360V0Common__Value),
    ),
    searchClickShare: Schema.optional(Schema.Number),
    searchBudgetLostAbsoluteTopImpressionShare: Schema.optional(Schema.Number),
    orders: Schema.optional(Schema.Number),
    interactions: Schema.optional(Schema.String),
    uniqueUsers: Schema.optional(Schema.String),
    ctr: Schema.optional(Schema.Number),
    generalInvalidClicks: Schema.optional(Schema.String),
    grossProfitMargin: Schema.optional(Schema.Number),
    clientAccountLeadGrossProfitMicros: Schema.optional(Schema.String),
    averageCartSize: Schema.optional(Schema.Number),
    searchExactMatchImpressionShare: Schema.optional(Schema.Number),
    averageQualityScore: Schema.optional(Schema.Number),
    crossSellGrossProfitMicros: Schema.optional(Schema.String),
    allConversionsFromClickToCall: Schema.optional(Schema.Number),
    searchImpressionShare: Schema.optional(Schema.Number),
    clientAccountLeadUnitsSold: Schema.optional(Schema.Number),
    clientAccountLeadRevenueMicros: Schema.optional(Schema.String),
    conversionsValueByConversionDate: Schema.optional(Schema.Number),
    crossDeviceConversionsByConversionDate: Schema.optional(Schema.Number),
    conversions: Schema.optional(Schema.Number),
    historicalLandingPageQualityScore: Schema.optional(Schema.String),
    interactionEventTypes: Schema.optional(Schema.Array(Schema.String)),
    costPerConversion: Schema.optional(Schema.Number),
    unitsSold: Schema.optional(Schema.Number),
    averageCpm: Schema.optional(Schema.Number),
    clientAccountCrossSellCostOfGoodsSoldMicros: Schema.optional(Schema.String),
    conversionsByConversionDate: Schema.optional(Schema.Number),
    clientAccountConversionsValue: Schema.optional(Schema.Number),
    contentRankLostImpressionShare: Schema.optional(Schema.Number),
    allConversionsFromInteractionsRate: Schema.optional(Schema.Number),
    allConversionsFromStoreWebsite: Schema.optional(Schema.Number),
    allConversionsByConversionDate: Schema.optional(Schema.Number),
    allConversionsFromOrder: Schema.optional(Schema.Number),
    conversionsFromInteractionsValuePerInteraction: Schema.optional(
      Schema.Number,
    ),
    interactionRate: Schema.optional(Schema.Number),
    valuePerConversion: Schema.optional(Schema.Number),
    impressions: Schema.optional(Schema.String),
    crossDeviceConversions: Schema.optional(Schema.Number),
    leadRevenueMicros: Schema.optional(Schema.String),
    valuePerAllConversionsByConversionDate: Schema.optional(Schema.Number),
    searchBudgetLostTopImpressionShare: Schema.optional(Schema.Number),
    contentImpressionShare: Schema.optional(Schema.Number),
    searchRankLostImpressionShare: Schema.optional(Schema.Number),
    clicks: Schema.optional(Schema.String),
    grossProfitMicros: Schema.optional(Schema.String),
    searchTopImpressionShare: Schema.optional(Schema.Number),
    leadCostOfGoodsSoldMicros: Schema.optional(Schema.String),
    leadGrossProfitMicros: Schema.optional(Schema.String),
    averageOrderValueMicros: Schema.optional(Schema.String),
    conversionCustomMetrics: Schema.optional(
      Schema.Array(GoogleAdsSearchads360V0Common__Value),
    ),
    crossDeviceConversionsValue: Schema.optional(Schema.Number),
    allConversionsFromMenu: Schema.optional(Schema.Number),
    leadUnitsSold: Schema.optional(Schema.Number),
    searchRankLostAbsoluteTopImpressionShare: Schema.optional(Schema.Number),
    allConversionsValuePerCost: Schema.optional(Schema.Number),
    mobileFriendlyClicksPercentage: Schema.optional(Schema.Number),
    searchBudgetLostImpressionShare: Schema.optional(Schema.Number),
    clientAccountViewThroughConversions: Schema.optional(Schema.String),
    clientAccountLeadCostOfGoodsSoldMicros: Schema.optional(Schema.String),
    clientAccountConversions: Schema.optional(Schema.Number),
    crossSellRevenueMicros: Schema.optional(Schema.String),
    clientAccountCrossSellGrossProfitMicros: Schema.optional(Schema.String),
    costOfGoodsSoldMicros: Schema.optional(Schema.String),
    clientAccountCrossSellUnitsSold: Schema.optional(Schema.Number),
    conversionsValuePerCost: Schema.optional(Schema.Number),
    historicalSearchPredictedCtr: Schema.optional(Schema.String),
    valuePerAllConversions: Schema.optional(Schema.Number),
    costPerAllConversions: Schema.optional(Schema.Number),
    clientAccountCrossSellRevenueMicros: Schema.optional(Schema.String),
    conversionsFromInteractionsRate: Schema.optional(Schema.Number),
    topImpressionPercentage: Schema.optional(Schema.Number),
    invalidClickRate: Schema.optional(Schema.Number),
    crossDeviceConversionsValueByConversionDate: Schema.optional(Schema.Number),
    crossSellUnitsSold: Schema.optional(Schema.Number),
    crossSellCostOfGoodsSoldMicros: Schema.optional(Schema.String),
    allConversionsValue: Schema.optional(Schema.Number),
    allConversionsFromOtherEngagement: Schema.optional(Schema.Number),
    generalInvalidClickRate: Schema.optional(Schema.Number),
    allConversionsFromStoreVisit: Schema.optional(Schema.Number),
    averageCost: Schema.optional(Schema.Number),
    costMicros: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Common__Metrics" });

export interface GoogleAdsSearchads360V0Resources_ConversionCustomVariable_FloodlightConversionCustomVariableInfo {
  /** Output only. Floodlight variable type defined in Search Ads 360. */
  floodlightVariableType?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "DIMENSION"
    | "METRIC"
    | "UNSET"
    | (string & {});
  /** Output only. Floodlight variable data type defined in Search Ads 360. */
  floodlightVariableDataType?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "NUMBER"
    | "STRING"
    | (string & {});
}

export const GoogleAdsSearchads360V0Resources_ConversionCustomVariable_FloodlightConversionCustomVariableInfo: Schema.Schema<GoogleAdsSearchads360V0Resources_ConversionCustomVariable_FloodlightConversionCustomVariableInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    floodlightVariableType: Schema.optional(Schema.String),
    floodlightVariableDataType: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Resources_ConversionCustomVariable_FloodlightConversionCustomVariableInfo",
  });

export interface GoogleAdsSearchads360V0Resources__ConversionCustomVariable {
  /** Output only. Family of the conversion custom variable. */
  family?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "STANDARD"
    | "FLOODLIGHT"
    | (string & {});
  /** Output only. The IDs of custom columns that use this conversion custom variable. */
  customColumnIds?: ReadonlyArray<string>;
  /** Immutable. The resource name of the conversion custom variable. Conversion custom variable resource names have the form: `customers/{customer_id}/conversionCustomVariables/{conversion_custom_variable_id}` */
  resourceName?: string;
  /** Required. Immutable. The tag of the conversion custom variable. Tag should be unique and consist of a "u" character directly followed with a number less than ormequal to 100. For example: "u4". */
  tag?: string;
  /** Output only. Cardinality of the conversion custom variable. */
  cardinality?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "BELOW_ALL_LIMITS"
    | "EXCEEDS_SEGMENTATION_LIMIT_BUT_NOT_STATS_LIMIT"
    | "APPROACHES_STATS_LIMIT"
    | "EXCEEDS_STATS_LIMIT"
    | (string & {});
  /** Output only. The ID of the conversion custom variable. */
  id?: string;
  /** Required. The name of the conversion custom variable. Name should be unique. The maximum length of name is 100 characters. There should not be any extra spaces before and after. */
  name?: string;
  /** The status of the conversion custom variable for conversion event accrual. */
  status?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ACTIVATION_NEEDED"
    | "ENABLED"
    | "PAUSED"
    | (string & {});
  /** Output only. Fields for Search Ads 360 floodlight conversion custom variables. */
  floodlightConversionCustomVariableInfo?: GoogleAdsSearchads360V0Resources_ConversionCustomVariable_FloodlightConversionCustomVariableInfo;
  /** Output only. The resource name of the customer that owns the conversion custom variable. */
  ownerCustomer?: string;
}

export const GoogleAdsSearchads360V0Resources__ConversionCustomVariable: Schema.Schema<GoogleAdsSearchads360V0Resources__ConversionCustomVariable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    family: Schema.optional(Schema.String),
    customColumnIds: Schema.optional(Schema.Array(Schema.String)),
    resourceName: Schema.optional(Schema.String),
    tag: Schema.optional(Schema.String),
    cardinality: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    floodlightConversionCustomVariableInfo: Schema.optional(
      GoogleAdsSearchads360V0Resources_ConversionCustomVariable_FloodlightConversionCustomVariableInfo,
    ),
    ownerCustomer: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__ConversionCustomVariable",
  });

export interface GoogleAdsSearchads360V0Resources__UserList {
  /** Output only. Id of the user list. */
  id?: string;
  /** Name of this user list. Unique per user list, except in some cases where a user list of the same name has `access_reason` set to `SHARED`. */
  name?: string;
  /** Immutable. The resource name of the user list. User list resource names have the form: `customers/{customer_id}/userLists/{user_list_id}` */
  resourceName?: string;
  /** Output only. Type of this list. This field is read-only. */
  type?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "REMARKETING"
    | "LOGICAL"
    | "EXTERNAL_REMARKETING"
    | "RULE_BASED"
    | "SIMILAR"
    | "CRM_BASED"
    | (string & {});
}

export const GoogleAdsSearchads360V0Resources__UserList: Schema.Schema<GoogleAdsSearchads360V0Resources__UserList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Resources__UserList" });

export interface GoogleAdsSearchads360V0Resources__ConversionTrackingSetting {
  /** Output only. The conversion tracking id used for this account. This id doesn't indicate whether the customer uses conversion tracking (conversion_tracking_status does). This field is read-only. */
  conversionTrackingId?: string;
  /** Output only. Conversion tracking status. It indicates whether the customer is using conversion tracking, and who is the conversion tracking owner of this customer. If this customer is using cross-account conversion tracking, the value returned will differ based on the `login-customer-id` of the request. */
  conversionTrackingStatus?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "NOT_CONVERSION_TRACKED"
    | "CONVERSION_TRACKING_MANAGED_BY_SELF"
    | "CONVERSION_TRACKING_MANAGED_BY_THIS_MANAGER"
    | "CONVERSION_TRACKING_MANAGED_BY_ANOTHER_MANAGER"
    | (string & {});
  /** Output only. Whether the customer is opted-in for enhanced conversions for leads. If using cross-account conversion tracking, this value is inherited from the manager. This field is read-only. */
  enhancedConversionsForLeadsEnabled?: boolean;
  /** Output only. The conversion tracking id of the customer's manager. This is set when the customer is opted into conversion tracking, and it overrides conversion_tracking_id. This field can only be managed through the Google Ads UI. This field is read-only. */
  googleAdsCrossAccountConversionTrackingId?: string;
  /** Output only. The resource name of the customer where conversions are created and managed. This field is read-only. */
  googleAdsConversionCustomer?: string;
  /** Output only. The conversion tracking id of the customer's manager. This is set when the customer is opted into cross-account conversion tracking, and it overrides conversion_tracking_id. */
  crossAccountConversionTrackingId?: string;
  /** Output only. Whether the customer has accepted customer data terms. If using cross-account conversion tracking, this value is inherited from the manager. This field is read-only. For more information, see https://support.google.com/adspolicy/answer/7475709. */
  acceptedCustomerDataTerms?: boolean;
}

export const GoogleAdsSearchads360V0Resources__ConversionTrackingSetting: Schema.Schema<GoogleAdsSearchads360V0Resources__ConversionTrackingSetting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversionTrackingId: Schema.optional(Schema.String),
    conversionTrackingStatus: Schema.optional(Schema.String),
    enhancedConversionsForLeadsEnabled: Schema.optional(Schema.Boolean),
    googleAdsCrossAccountConversionTrackingId: Schema.optional(Schema.String),
    googleAdsConversionCustomer: Schema.optional(Schema.String),
    crossAccountConversionTrackingId: Schema.optional(Schema.String),
    acceptedCustomerDataTerms: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__ConversionTrackingSetting",
  });

export interface GoogleAdsSearchads360V0Resources__Customer {
  /** Immutable. The resource name of the customer. Customer resource names have the form: `customers/{customer_id}` */
  resourceName?: string;
  /** Output only. Account status, for example, Enabled, Paused, Removed, etc. */
  accountStatus?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ENABLED"
    | "PAUSED"
    | "SUSPENDED"
    | "REMOVED"
    | "DRAFT"
    | (string & {});
  /** Output only. The account level of the customer: Manager, Sub-manager, Associate manager, Service account. */
  accountLevel?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "CLIENT_ACCOUNT_FACEBOOK"
    | "CLIENT_ACCOUNT_GOOGLE_ADS"
    | "CLIENT_ACCOUNT_MICROSOFT"
    | "CLIENT_ACCOUNT_YAHOO_JAPAN"
    | "CLIENT_ACCOUNT_ENGINE_TRACK"
    | "MANAGER"
    | "SUB_MANAGER"
    | "ASSOCIATE_MANAGER"
    | (string & {});
  /** Whether auto-tagging is enabled for the customer. */
  autoTaggingEnabled?: boolean;
  /** Output only. The datetime when this customer was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format. */
  lastModifiedTime?: string;
  /** Output only. The descriptive name of the manager. */
  managerDescriptiveName?: string;
  /** Output only. Engine account type, for example, Google Ads, Microsoft Advertising, Yahoo Japan, Baidu, Facebook, Engine Track, etc. */
  accountType?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "BAIDU"
    | "ENGINE_TRACK"
    | "FACEBOOK"
    | "FACEBOOK_GATEWAY"
    | "GOOGLE_ADS"
    | "MICROSOFT"
    | "SEARCH_ADS_360"
    | "YAHOO_JAPAN"
    | (string & {});
  /** Optional, non-unique descriptive name of the customer. */
  descriptiveName?: string;
  /** Output only. The status of the customer. */
  status?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ENABLED"
    | "CANCELED"
    | "SUSPENDED"
    | "CLOSED"
    | (string & {});
  /** Output only. ID of the account in the external engine account. */
  engineId?: string;
  /** Output only. The descriptive name of the sub manager. */
  subManagerDescriptiveName?: string;
  /** Output only. The descriptive name of the associate manager. */
  associateManagerDescriptiveName?: string;
  /** Output only. The ID of the customer. */
  id?: string;
  /** Output only. Whether the customer is a manager. */
  manager?: boolean;
  /** The URL template for constructing a tracking URL out of parameters. */
  trackingUrlTemplate?: string;
  /** Output only. The timestamp when this customer was created. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format. */
  creationTime?: string;
  /** Immutable. The local timezone ID of the customer. */
  timeZone?: string;
  /** The URL template for appending params to the final URL. */
  finalUrlSuffix?: string;
  /** Output only. The customer ID of the sub manager. A 0 value indicates that the customer has no sub SA360 manager. */
  subManagerId?: string;
  /** Immutable. The currency in which the account operates. A subset of the currency codes from the ISO 4217 standard is supported. */
  currencyCode?: string;
  /** Output only. Conversion tracking setting for a customer. */
  conversionTrackingSetting?: GoogleAdsSearchads360V0Resources__ConversionTrackingSetting;
  /** Output only. DoubleClick Campaign Manager (DCM) setting for a manager customer. */
  doubleClickCampaignManagerSetting?: GoogleAdsSearchads360V0Resources__DoubleClickCampaignManagerSetting;
  /** Output only. The customer ID of the associate manager. A 0 value indicates that the customer has no SA360 associate manager. */
  associateManagerId?: string;
  /** Output only. The customer ID of the manager. A 0 value indicates that the customer has no SA360 manager. */
  managerId?: string;
}

export const GoogleAdsSearchads360V0Resources__Customer: Schema.Schema<GoogleAdsSearchads360V0Resources__Customer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceName: Schema.optional(Schema.String),
    accountStatus: Schema.optional(Schema.String),
    accountLevel: Schema.optional(Schema.String),
    autoTaggingEnabled: Schema.optional(Schema.Boolean),
    lastModifiedTime: Schema.optional(Schema.String),
    managerDescriptiveName: Schema.optional(Schema.String),
    accountType: Schema.optional(Schema.String),
    descriptiveName: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    engineId: Schema.optional(Schema.String),
    subManagerDescriptiveName: Schema.optional(Schema.String),
    associateManagerDescriptiveName: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    manager: Schema.optional(Schema.Boolean),
    trackingUrlTemplate: Schema.optional(Schema.String),
    creationTime: Schema.optional(Schema.String),
    timeZone: Schema.optional(Schema.String),
    finalUrlSuffix: Schema.optional(Schema.String),
    subManagerId: Schema.optional(Schema.String),
    currencyCode: Schema.optional(Schema.String),
    conversionTrackingSetting: Schema.optional(
      GoogleAdsSearchads360V0Resources__ConversionTrackingSetting,
    ),
    doubleClickCampaignManagerSetting: Schema.optional(
      GoogleAdsSearchads360V0Resources__DoubleClickCampaignManagerSetting,
    ),
    associateManagerId: Schema.optional(Schema.String),
    managerId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Resources__Customer" });

export interface GoogleAdsSearchads360V0Resources__AssetSet {
  /** Output only. The ID of the asset set. */
  id?: string;
  /** Immutable. The resource name of the asset set. Asset set resource names have the form: `customers/{customer_id}/assetSets/{asset_set_id}` */
  resourceName?: string;
}

export const GoogleAdsSearchads360V0Resources__AssetSet: Schema.Schema<GoogleAdsSearchads360V0Resources__AssetSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Resources__AssetSet" });

export interface GoogleAdsSearchads360V0Resources__UserLocationView {
  /** Output only. The resource name of the user location view. UserLocation view resource names have the form: `customers/{customer_id}/userLocationViews/{country_criterion_id}~{targeting_location}` */
  resourceName?: string;
  /** Output only. Indicates whether location was targeted or not. */
  targetingLocation?: boolean;
  /** Output only. Criterion Id for the country. */
  countryCriterionId?: string;
}

export const GoogleAdsSearchads360V0Resources__UserLocationView: Schema.Schema<GoogleAdsSearchads360V0Resources__UserLocationView> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceName: Schema.optional(Schema.String),
    targetingLocation: Schema.optional(Schema.Boolean),
    countryCriterionId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__UserLocationView",
  });

export interface GoogleAdsSearchads360V0Resources__AssetGroupTopCombinationView {
  /** Output only. The resource name of the asset group top combination view. AssetGroup Top Combination view resource names have the form: `"customers/{customer_id}/assetGroupTopCombinationViews/{asset_group_id}~{asset_combination_category}" */
  resourceName?: string;
  /** Output only. The top combinations of assets that served together. */
  assetGroupTopCombinations?: ReadonlyArray<GoogleAdsSearchads360V0Resources__AssetGroupAssetCombinationData>;
}

export const GoogleAdsSearchads360V0Resources__AssetGroupTopCombinationView: Schema.Schema<GoogleAdsSearchads360V0Resources__AssetGroupTopCombinationView> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceName: Schema.optional(Schema.String),
    assetGroupTopCombinations: Schema.optional(
      Schema.Array(
        GoogleAdsSearchads360V0Resources__AssetGroupAssetCombinationData,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Resources__AssetGroupTopCombinationView",
  });

export interface GoogleAdsSearchads360V0Resources__CampaignEffectiveLabel {
  /** Immutable. Name of the resource. CampaignEffectivelabel resource names have the form: `customers/{owner_customer_id}/campaignEffectiveLabels/{campaign_id}~{label_id}` */
  resourceName?: string;
  /** Immutable. The effective label assigned to the campaign. */
  label?: string;
  /** Output only. The ID of the Customer which owns the effective label. */
  ownerCustomerId?: string;
  /** Immutable. The campaign to which the effective label is attached. */
  campaign?: string;
}

export const GoogleAdsSearchads360V0Resources__CampaignEffectiveLabel: Schema.Schema<GoogleAdsSearchads360V0Resources__CampaignEffectiveLabel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceName: Schema.optional(Schema.String),
    label: Schema.optional(Schema.String),
    ownerCustomerId: Schema.optional(Schema.String),
    campaign: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__CampaignEffectiveLabel",
  });

export interface GoogleAdsSearchads360V0Resources_ConversionAction_ValueSettings {
  /** Controls whether the default value and default currency code are used in place of the value and currency code specified in conversion events for this conversion action. */
  alwaysUseDefaultValue?: boolean;
  /** The value to use when conversion events for this conversion action are sent with an invalid, disallowed or missing value, or when this conversion action is configured to always use the default value. */
  defaultValue?: number;
  /** The currency code to use when conversion events for this conversion action are sent with an invalid or missing currency code, or when this conversion action is configured to always use the default value. */
  defaultCurrencyCode?: string;
}

export const GoogleAdsSearchads360V0Resources_ConversionAction_ValueSettings: Schema.Schema<GoogleAdsSearchads360V0Resources_ConversionAction_ValueSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    alwaysUseDefaultValue: Schema.optional(Schema.Boolean),
    defaultValue: Schema.optional(Schema.Number),
    defaultCurrencyCode: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Resources_ConversionAction_ValueSettings",
  });

export interface GoogleAdsSearchads360V0Resources__ConversionAction {
  /** Output only. Timestamp of the Floodlight activity's creation, formatted in ISO 8601. */
  creationTime?: string;
  /** Immutable. The type of this conversion action. */
  type?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "AD_CALL"
    | "CLICK_TO_CALL"
    | "GOOGLE_PLAY_DOWNLOAD"
    | "GOOGLE_PLAY_IN_APP_PURCHASE"
    | "UPLOAD_CALLS"
    | "UPLOAD_CLICKS"
    | "WEBPAGE"
    | "WEBSITE_CALL"
    | "STORE_SALES_DIRECT_UPLOAD"
    | "STORE_SALES"
    | "FIREBASE_ANDROID_FIRST_OPEN"
    | "FIREBASE_ANDROID_IN_APP_PURCHASE"
    | "FIREBASE_ANDROID_CUSTOM"
    | "FIREBASE_IOS_FIRST_OPEN"
    | "FIREBASE_IOS_IN_APP_PURCHASE"
    | "FIREBASE_IOS_CUSTOM"
    | "THIRD_PARTY_APP_ANALYTICS_ANDROID_FIRST_OPEN"
    | "THIRD_PARTY_APP_ANALYTICS_ANDROID_IN_APP_PURCHASE"
    | "THIRD_PARTY_APP_ANALYTICS_ANDROID_CUSTOM"
    | "THIRD_PARTY_APP_ANALYTICS_IOS_FIRST_OPEN"
    | "THIRD_PARTY_APP_ANALYTICS_IOS_IN_APP_PURCHASE"
    | "THIRD_PARTY_APP_ANALYTICS_IOS_CUSTOM"
    | "ANDROID_APP_PRE_REGISTRATION"
    | "ANDROID_INSTALLS_ALL_OTHER_APPS"
    | "FLOODLIGHT_ACTION"
    | "FLOODLIGHT_TRANSACTION"
    | "GOOGLE_HOSTED"
    | "LEAD_FORM_SUBMIT"
    | "SALESFORCE"
    | "SEARCH_ADS_360"
    | "SMART_CAMPAIGN_AD_CLICKS_TO_CALL"
    | "SMART_CAMPAIGN_MAP_CLICKS_TO_CALL"
    | "SMART_CAMPAIGN_MAP_DIRECTIONS"
    | "SMART_CAMPAIGN_TRACKED_CALLS"
    | "STORE_VISITS"
    | "WEBPAGE_CODELESS"
    | "UNIVERSAL_ANALYTICS_GOAL"
    | "UNIVERSAL_ANALYTICS_TRANSACTION"
    | "GOOGLE_ANALYTICS_4_CUSTOM"
    | "GOOGLE_ANALYTICS_4_PURCHASE"
    | (string & {});
  /** If a conversion action's primary_for_goal bit is false, the conversion action is non-biddable for all campaigns regardless of their customer conversion goal or campaign conversion goal. However, custom conversion goals do not respect primary_for_goal, so if a campaign has a custom conversion goal configured with a primary_for_goal = false conversion action, that conversion action is still biddable. By default, primary_for_goal will be true if not set. In V9, primary_for_goal can only be set to false after creation through an 'update' operation because it's not declared as optional. */
  primaryForGoal?: boolean;
  /** Whether this conversion action should be included in the "client_account_conversions" metric. */
  includeInClientAccountConversionsMetric?: boolean;
  /** The maximum number of days that may elapse between an interaction (for example, a click) and a conversion event. */
  clickThroughLookbackWindowDays?: string;
  /** Output only. The ID of the conversion action. */
  id?: string;
  /** The name of the conversion action. This field is required and should not be empty when creating new conversion actions. */
  name?: string;
  /** The status of this conversion action for conversion event accrual. */
  status?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ENABLED"
    | "REMOVED"
    | "HIDDEN"
    | (string & {});
  /** Settings related to the value for conversion events associated with this conversion action. */
  valueSettings?: GoogleAdsSearchads360V0Resources_ConversionAction_ValueSettings;
  /** Output only. The resource name of the conversion action owner customer, or null if this is a system-defined conversion action. */
  ownerCustomer?: string;
  /** Output only. Whether this conversion action should be included in the "conversions" metric. */
  includeInConversionsMetric?: boolean;
  /** Settings related to this conversion action's attribution model. */
  attributionModelSettings?: GoogleAdsSearchads360V0Resources_ConversionAction_AttributionModelSettings;
  /** App ID for an app conversion action. */
  appId?: string;
  /** The category of conversions reported for this conversion action. */
  category?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "DEFAULT"
    | "PAGE_VIEW"
    | "PURCHASE"
    | "SIGNUP"
    | "LEAD"
    | "DOWNLOAD"
    | "ADD_TO_CART"
    | "BEGIN_CHECKOUT"
    | "SUBSCRIBE_PAID"
    | "PHONE_CALL_LEAD"
    | "IMPORTED_LEAD"
    | "SUBMIT_LEAD_FORM"
    | "BOOK_APPOINTMENT"
    | "REQUEST_QUOTE"
    | "GET_DIRECTIONS"
    | "OUTBOUND_CLICK"
    | "CONTACT"
    | "ENGAGEMENT"
    | "STORE_VISIT"
    | "STORE_SALE"
    | "QUALIFIED_LEAD"
    | "CONVERTED_LEAD"
    | (string & {});
  /** Immutable. The resource name of the conversion action. Conversion action resource names have the form: `customers/{customer_id}/conversionActions/{conversion_action_id}` */
  resourceName?: string;
  /** Output only. Floodlight settings for Floodlight conversion types. */
  floodlightSettings?: GoogleAdsSearchads360V0Resources_ConversionAction_FloodlightSettings;
}

export const GoogleAdsSearchads360V0Resources__ConversionAction: Schema.Schema<GoogleAdsSearchads360V0Resources__ConversionAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    creationTime: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    primaryForGoal: Schema.optional(Schema.Boolean),
    includeInClientAccountConversionsMetric: Schema.optional(Schema.Boolean),
    clickThroughLookbackWindowDays: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    valueSettings: Schema.optional(
      GoogleAdsSearchads360V0Resources_ConversionAction_ValueSettings,
    ),
    ownerCustomer: Schema.optional(Schema.String),
    includeInConversionsMetric: Schema.optional(Schema.Boolean),
    attributionModelSettings: Schema.optional(
      GoogleAdsSearchads360V0Resources_ConversionAction_AttributionModelSettings,
    ),
    appId: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    floodlightSettings: Schema.optional(
      GoogleAdsSearchads360V0Resources_ConversionAction_FloodlightSettings,
    ),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__ConversionAction",
  });

export interface GoogleAdsSearchads360V0Resources__CampaignLabel {
  /** Output only. The ID of the Customer which owns the label. */
  ownerCustomerId?: string;
  /** Immutable. The campaign to which the label is attached. */
  campaign?: string;
  /** Immutable. Name of the resource. Campaign label resource names have the form: `customers/{owner_customer_id}/campaignLabels/{campaign_id}~{label_id}` */
  resourceName?: string;
  /** Immutable. The label assigned to the campaign. */
  label?: string;
}

export const GoogleAdsSearchads360V0Resources__CampaignLabel: Schema.Schema<GoogleAdsSearchads360V0Resources__CampaignLabel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ownerCustomerId: Schema.optional(Schema.String),
    campaign: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    label: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__CampaignLabel",
  });

export interface GoogleAdsSearchads360V0Resources__ShoppingPerformanceView {
  /** Output only. The resource name of the Shopping performance view. Shopping performance view resource names have the form: `customers/{customer_id}/shoppingPerformanceView` */
  resourceName?: string;
}

export const GoogleAdsSearchads360V0Resources__ShoppingPerformanceView: Schema.Schema<GoogleAdsSearchads360V0Resources__ShoppingPerformanceView> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__ShoppingPerformanceView",
  });

export interface GoogleAdsSearchads360V0Resources__LocationView {
  /** Output only. The resource name of the location view. Location view resource names have the form: `customers/{customer_id}/locationViews/{campaign_id}~{criterion_id}` */
  resourceName?: string;
}

export const GoogleAdsSearchads360V0Resources__LocationView: Schema.Schema<GoogleAdsSearchads360V0Resources__LocationView> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Resources__LocationView" });

export interface GoogleAdsSearchads360V0Resources__AdGroupAd {
  /** Output only. The datetime when this ad group ad was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format. */
  lastModifiedTime?: string;
  /** Immutable. The ad. */
  ad?: GoogleAdsSearchads360V0Resources__Ad;
  /** Output only. Additional status of the ad in the external engine account. Possible statuses (depending on the type of external account) include active, eligible, pending review, etc. */
  engineStatus?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "AD_GROUP_AD_ELIGIBLE"
    | "AD_GROUP_AD_INAPPROPRIATE_FOR_CAMPAIGN"
    | "AD_GROUP_AD_MOBILE_URL_UNDER_REVIEW"
    | "AD_GROUP_AD_PARTIALLY_INVALID"
    | "AD_GROUP_AD_TO_BE_ACTIVATED"
    | "AD_GROUP_AD_NOT_REVIEWED"
    | "AD_GROUP_AD_ON_HOLD"
    | "AD_GROUP_AD_PAUSED"
    | "AD_GROUP_AD_REMOVED"
    | "AD_GROUP_AD_PENDING_REVIEW"
    | "AD_GROUP_AD_UNDER_REVIEW"
    | "AD_GROUP_AD_APPROVED"
    | "AD_GROUP_AD_DISAPPROVED"
    | "AD_GROUP_AD_SERVING"
    | "AD_GROUP_AD_ACCOUNT_PAUSED"
    | "AD_GROUP_AD_CAMPAIGN_PAUSED"
    | "AD_GROUP_AD_AD_GROUP_PAUSED"
    | (string & {});
  /** Immutable. The resource name of the ad. Ad group ad resource names have the form: `customers/{customer_id}/adGroupAds/{ad_group_id}~{ad_id}` */
  resourceName?: string;
  /** Output only. The timestamp when this ad_group_ad was created. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format. */
  creationTime?: string;
  /** Output only. The resource names of labels attached to this ad group ad. */
  labels?: ReadonlyArray<string>;
  /** The status of the ad. */
  status?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ENABLED"
    | "PAUSED"
    | "REMOVED"
    | (string & {});
  /** Output only. The resource names of effective labels attached to this ad. An effective label is a label inherited or directly assigned to this ad. */
  effectiveLabels?: ReadonlyArray<string>;
  /** Output only. ID of the ad in the external engine account. This field is for Search Ads 360 account only, for example, Yahoo Japan, Microsoft, Baidu etc. For non-Search Ads 360 entity, use "ad_group_ad.ad.id" instead. */
  engineId?: string;
}

export const GoogleAdsSearchads360V0Resources__AdGroupAd: Schema.Schema<GoogleAdsSearchads360V0Resources__AdGroupAd> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastModifiedTime: Schema.optional(Schema.String),
    ad: Schema.optional(GoogleAdsSearchads360V0Resources__Ad),
    engineStatus: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    creationTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Array(Schema.String)),
    status: Schema.optional(Schema.String),
    effectiveLabels: Schema.optional(Schema.Array(Schema.String)),
    engineId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsSearchads360V0Resources__AdGroupAd" });

export interface GoogleAdsSearchads360V0Resources__CampaignAudienceView {
  /** Output only. The resource name of the campaign audience view. Campaign audience view resource names have the form: `customers/{customer_id}/campaignAudienceViews/{campaign_id}~{criterion_id}` */
  resourceName?: string;
}

export const GoogleAdsSearchads360V0Resources__CampaignAudienceView: Schema.Schema<GoogleAdsSearchads360V0Resources__CampaignAudienceView> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__CampaignAudienceView",
  });

export interface GoogleAdsSearchads360V0Common__TargetOutrankShare {
  /** Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. */
  cpcBidCeilingMicros?: string;
}

export const GoogleAdsSearchads360V0Common__TargetOutrankShare: Schema.Schema<GoogleAdsSearchads360V0Common__TargetOutrankShare> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cpcBidCeilingMicros: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Common__TargetOutrankShare",
  });

export interface GoogleAdsSearchads360V0Resources__BiddingStrategy {
  /** An automated bidding strategy to help get the most conversion value for your campaigns while spending your budget. */
  maximizeConversionValue?: GoogleAdsSearchads360V0Common__MaximizeConversionValue;
  /** Output only. The number of non-removed campaigns attached to this bidding strategy. This field is read-only. */
  nonRemovedCampaignCount?: string;
  /** A bidding strategy that raises bids for clicks that seem more likely to lead to a conversion and lowers them for clicks where they seem less likely. */
  enhancedCpc?: GoogleAdsSearchads360V0Common__EnhancedCpc;
  /** Immutable. The currency used by the bidding strategy (ISO 4217 three-letter code). For bidding strategies in manager customers, this currency can be set on creation and defaults to the manager customer's currency. For serving customers, this field cannot be set; all strategies in a serving customer implicitly use the serving customer's currency. In all cases the effective_currency_code field returns the currency used by the strategy. */
  currencyCode?: string;
  /** A bidding strategy that helps you maximize revenue while averaging a specific target Return On Ad Spend (ROAS). */
  targetRoas?: GoogleAdsSearchads360V0Common__TargetRoas;
  /** Output only. The currency used by the bidding strategy (ISO 4217 three-letter code). For bidding strategies in manager customers, this is the currency set by the advertiser when creating the strategy. For serving customers, this is the customer's currency_code. Bidding strategy metrics are reported in this currency. This field is read-only. */
  effectiveCurrencyCode?: string;
  /** Output only. The type of the bidding strategy. Create a bidding strategy by setting the bidding scheme. This field is read-only. */
  type?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "COMMISSION"
    | "ENHANCED_CPC"
    | "INVALID"
    | "MANUAL_CPA"
    | "MANUAL_CPC"
    | "MANUAL_CPM"
    | "MANUAL_CPV"
    | "MAXIMIZE_CONVERSIONS"
    | "MAXIMIZE_CONVERSION_VALUE"
    | "PAGE_ONE_PROMOTED"
    | "PERCENT_CPC"
    | "TARGET_CPA"
    | "TARGET_CPM"
    | "TARGET_IMPRESSION_SHARE"
    | "TARGET_OUTRANK_SHARE"
    | "TARGET_ROAS"
    | "TARGET_SPEND"
    | (string & {});
  /** A bidding strategy that sets bids to help get as many conversions as possible at the target cost-per-acquisition (CPA) you set. */
  targetCpa?: GoogleAdsSearchads360V0Common__TargetCpa;
  /** A bidding strategy that sets bids based on the target fraction of auctions where the advertiser should outrank a specific competitor. This field is deprecated. Creating a new bidding strategy with this field or attaching bidding strategies with this field to a campaign will fail. Mutates to strategies that already have this scheme populated are allowed. */
  targetOutrankShare?: GoogleAdsSearchads360V0Common__TargetOutrankShare;
  /** Output only. The ID of the bidding strategy. */
  id?: string;
  /** The name of the bidding strategy. All bidding strategies within an account must be named distinctly. The length of this string should be between 1 and 255, inclusive, in UTF-8 bytes, (trimmed). */
  name?: string;
  /** An automated bidding strategy to help get the most conversions for your campaigns while spending your budget. */
  maximizeConversions?: GoogleAdsSearchads360V0Common__MaximizeConversions;
  /** Output only. The status of the bidding strategy. This field is read-only. */
  status?: "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVED" | (string & {});
  /** A bid strategy that sets your bids to help get as many clicks as possible within your budget. */
  targetSpend?: GoogleAdsSearchads360V0Common__TargetSpend;
  /** Output only. The number of campaigns attached to this bidding strategy. This field is read-only. */
  campaignCount?: string;
  /** Immutable. The resource name of the bidding strategy. Bidding strategy resource names have the form: `customers/{customer_id}/biddingStrategies/{bidding_strategy_id}` */
  resourceName?: string;
  /** A bidding strategy that automatically optimizes towards a chosen percentage of impressions. */
  targetImpressionShare?: GoogleAdsSearchads360V0Common__TargetImpressionShare;
}

export const GoogleAdsSearchads360V0Resources__BiddingStrategy: Schema.Schema<GoogleAdsSearchads360V0Resources__BiddingStrategy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maximizeConversionValue: Schema.optional(
      GoogleAdsSearchads360V0Common__MaximizeConversionValue,
    ),
    nonRemovedCampaignCount: Schema.optional(Schema.String),
    enhancedCpc: Schema.optional(GoogleAdsSearchads360V0Common__EnhancedCpc),
    currencyCode: Schema.optional(Schema.String),
    targetRoas: Schema.optional(GoogleAdsSearchads360V0Common__TargetRoas),
    effectiveCurrencyCode: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    targetCpa: Schema.optional(GoogleAdsSearchads360V0Common__TargetCpa),
    targetOutrankShare: Schema.optional(
      GoogleAdsSearchads360V0Common__TargetOutrankShare,
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    maximizeConversions: Schema.optional(
      GoogleAdsSearchads360V0Common__MaximizeConversions,
    ),
    status: Schema.optional(Schema.String),
    targetSpend: Schema.optional(GoogleAdsSearchads360V0Common__TargetSpend),
    campaignCount: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    targetImpressionShare: Schema.optional(
      GoogleAdsSearchads360V0Common__TargetImpressionShare,
    ),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__BiddingStrategy",
  });

export interface GoogleAdsSearchads360V0Resources__CustomerClient {
  /** Output only. Identifies if the client is a manager. Read only. */
  manager?: boolean;
  /** Output only. The ID of the client customer. Read only. */
  id?: string;
  /** Output only. The resource names of the labels owned by the requesting customer that are applied to the client customer. Label resource names have the form: `customers/{customer_id}/labels/{label_id}` */
  appliedLabels?: ReadonlyArray<string>;
  /** Output only. Descriptive name for the client. Read only. */
  descriptiveName?: string;
  /** Output only. The status of the client customer. Read only. */
  status?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "ENABLED"
    | "CANCELED"
    | "SUSPENDED"
    | "CLOSED"
    | (string & {});
  /** Output only. The resource name of the client-customer which is linked to the given customer. Read only. */
  clientCustomer?: string;
  /** Output only. Currency code (for example, 'USD', 'EUR') for the client. Read only. */
  currencyCode?: string;
  /** Output only. Common Locale Data Repository (CLDR) string representation of the time zone of the client, for example, America/Los_Angeles. Read only. */
  timeZone?: string;
  /** Output only. Identifies if the client is a test account. Read only. */
  testAccount?: boolean;
  /** Output only. Specifies whether this is a hidden account. Read only. */
  hidden?: boolean;
  /** Output only. Distance between given customer and client. For self link, the level value will be 0. Read only. */
  level?: string;
  /** Output only. The resource name of the customer client. CustomerClient resource names have the form: `customers/{customer_id}/customerClients/{client_customer_id}` */
  resourceName?: string;
}

export const GoogleAdsSearchads360V0Resources__CustomerClient: Schema.Schema<GoogleAdsSearchads360V0Resources__CustomerClient> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    manager: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.String),
    appliedLabels: Schema.optional(Schema.Array(Schema.String)),
    descriptiveName: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    clientCustomer: Schema.optional(Schema.String),
    currencyCode: Schema.optional(Schema.String),
    timeZone: Schema.optional(Schema.String),
    testAccount: Schema.optional(Schema.Boolean),
    hidden: Schema.optional(Schema.Boolean),
    level: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__CustomerClient",
  });

export interface GoogleAdsSearchads360V0Resources__AdGroupAssetSet {
  /** Immutable. The resource name of the ad group asset set. Ad group asset set resource names have the form: `customers/{customer_id}/adGroupAssetSets/{ad_group_id}~{asset_set_id}` */
  resourceName?: string;
  /** Output only. The status of the ad group asset set. Read-only. */
  status?: "UNSPECIFIED" | "UNKNOWN" | "ENABLED" | "REMOVED" | (string & {});
  /** Immutable. The ad group to which this asset set is linked. */
  adGroup?: string;
  /** Immutable. The asset set which is linked to the ad group. */
  assetSet?: string;
}

export const GoogleAdsSearchads360V0Resources__AdGroupAssetSet: Schema.Schema<GoogleAdsSearchads360V0Resources__AdGroupAssetSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceName: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    adGroup: Schema.optional(Schema.String),
    assetSet: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__AdGroupAssetSet",
  });

export interface GoogleAdsSearchads360V0Services__SearchAds360Row {
  /** The ad group effective label referenced in the query. */
  adGroupEffectiveLabel?: GoogleAdsSearchads360V0Resources__AdGroupEffectiveLabel;
  /** The keyword view referenced in the query. */
  keywordView?: GoogleAdsSearchads360V0Resources__KeywordView;
  /** The asset set asset referenced in the query. */
  assetSetAsset?: GoogleAdsSearchads360V0Resources__AssetSetAsset;
  /** The campaign referenced in the query. */
  campaign?: GoogleAdsSearchads360V0Resources__Campaign;
  /** The custom columns. */
  customColumns?: ReadonlyArray<GoogleAdsSearchads360V0Common__Value>;
  /** The dynamic search ads search term view referenced in the query. */
  dynamicSearchAdsSearchTermView?: GoogleAdsSearchads360V0Resources__DynamicSearchAdsSearchTermView;
  /** The campaign budget referenced in the query. */
  campaignBudget?: GoogleAdsSearchads360V0Resources__CampaignBudget;
  /** The webpage view referenced in the query. */
  webpageView?: GoogleAdsSearchads360V0Resources__WebpageView;
  /** The gender view referenced in the query. */
  genderView?: GoogleAdsSearchads360V0Resources__GenderView;
  /** The segments. */
  segments?: GoogleAdsSearchads360V0Common__Segments;
  /** The asset group signal referenced in the query. */
  assetGroupSignal?: GoogleAdsSearchads360V0Resources__AssetGroupSignal;
  /** The language constant referenced in the query. */
  languageConstant?: GoogleAdsSearchads360V0Resources__LanguageConstant;
  /** The ad group criterion label referenced in the query. */
  adGroupCriterionLabel?: GoogleAdsSearchads360V0Resources__AdGroupCriterionLabel;
  /** The Product Bidding Category referenced in the query. */
  productBiddingCategoryConstant?: GoogleAdsSearchads360V0Resources__ProductBiddingCategoryConstant;
  /** The product group view referenced in the query. */
  productGroupView?: GoogleAdsSearchads360V0Resources__ProductGroupView;
  /** The age range view referenced in the query. */
  ageRangeView?: GoogleAdsSearchads360V0Resources__AgeRangeView;
  /** The asset group referenced in the query. */
  assetGroup?: GoogleAdsSearchads360V0Resources__AssetGroup;
  /** The ad group referenced in the query. */
  adGroup?: GoogleAdsSearchads360V0Resources__AdGroup;
  /** The asset group asset referenced in the query. */
  assetGroupAsset?: GoogleAdsSearchads360V0Resources__AssetGroupAsset;
  /** The label referenced in the query. */
  label?: GoogleAdsSearchads360V0Resources__Label;
  /** The ad group ad effective label referenced in the query. */
  adGroupAdEffectiveLabel?: GoogleAdsSearchads360V0Resources__AdGroupAdEffectiveLabel;
  /** The customer asset set referenced in the query. */
  customerAssetSet?: GoogleAdsSearchads360V0Resources__CustomerAssetSet;
  /** The campaign criterion referenced in the query. */
  campaignCriterion?: GoogleAdsSearchads360V0Resources__CampaignCriterion;
  /** The geo target constant referenced in the query. */
  geoTargetConstant?: GoogleAdsSearchads360V0Resources__GeoTargetConstant;
  /** The CustomerManagerLink referenced in the query. */
  customerManagerLink?: GoogleAdsSearchads360V0Resources__CustomerManagerLink;
  /** The ad group label referenced in the query. */
  adGroupLabel?: GoogleAdsSearchads360V0Resources__AdGroupLabel;
  /** The metrics. */
  metrics?: GoogleAdsSearchads360V0Common__Metrics;
  /** The conversion custom variable referenced in the query. */
  conversionCustomVariable?: GoogleAdsSearchads360V0Resources__ConversionCustomVariable;
  /** The event level visit referenced in the query. */
  visit?: GoogleAdsSearchads360V0Resources__Visit;
  /** The asset group listing group filter referenced in the query. */
  assetGroupListingGroupFilter?: GoogleAdsSearchads360V0Resources__AssetGroupListingGroupFilter;
  /** The user list referenced in the query. */
  userList?: GoogleAdsSearchads360V0Resources__UserList;
  /** The ad group audience view referenced in the query. */
  adGroupAudienceView?: GoogleAdsSearchads360V0Resources__AdGroupAudienceView;
  /** The asset referenced in the query. */
  asset?: GoogleAdsSearchads360V0Resources__Asset;
  /** The criterion referenced in the query. */
  adGroupCriterion?: GoogleAdsSearchads360V0Resources__AdGroupCriterion;
  /** The campaign asset set referenced in the query. */
  campaignAssetSet?: GoogleAdsSearchads360V0Resources__CampaignAssetSet;
  /** The ad group asset referenced in the query. */
  adGroupAsset?: GoogleAdsSearchads360V0Resources__AdGroupAsset;
  /** The bid modifier referenced in the query. */
  adGroupBidModifier?: GoogleAdsSearchads360V0Resources__AdGroupBidModifier;
  /** The customer referenced in the query. */
  customer?: GoogleAdsSearchads360V0Resources__Customer;
  /** The Audience referenced in the query. */
  audience?: GoogleAdsSearchads360V0Resources__Audience;
  /** The asset set referenced in the query. */
  assetSet?: GoogleAdsSearchads360V0Resources__AssetSet;
  /** The cart data sales view referenced in the query. */
  cartDataSalesView?: GoogleAdsSearchads360V0Resources__CartDataSalesView;
  /** The user location view referenced in the query. */
  userLocationView?: GoogleAdsSearchads360V0Resources__UserLocationView;
  /** The asset group top combination view referenced in the query. */
  assetGroupTopCombinationView?: GoogleAdsSearchads360V0Resources__AssetGroupTopCombinationView;
  /** The campaign effective label referenced in the query. */
  campaignEffectiveLabel?: GoogleAdsSearchads360V0Resources__CampaignEffectiveLabel;
  /** The ad group criterion effective label referenced in the query. */
  adGroupCriterionEffectiveLabel?: GoogleAdsSearchads360V0Resources__AdGroupCriterionEffectiveLabel;
  /** The campaign asset referenced in the query. */
  campaignAsset?: GoogleAdsSearchads360V0Resources__CampaignAsset;
  /** The conversion action referenced in the query. */
  conversionAction?: GoogleAdsSearchads360V0Resources__ConversionAction;
  /** The campaign label referenced in the query. */
  campaignLabel?: GoogleAdsSearchads360V0Resources__CampaignLabel;
  /** The customer asset referenced in the query. */
  customerAsset?: GoogleAdsSearchads360V0Resources__CustomerAsset;
  /** The shopping performance view referenced in the query. */
  shoppingPerformanceView?: GoogleAdsSearchads360V0Resources__ShoppingPerformanceView;
  /** The event level conversion referenced in the query. */
  conversion?: GoogleAdsSearchads360V0Resources__Conversion;
  /** The accessible bidding strategy referenced in the query. */
  accessibleBiddingStrategy?: GoogleAdsSearchads360V0Resources__AccessibleBiddingStrategy;
  /** The location view referenced in the query. */
  locationView?: GoogleAdsSearchads360V0Resources__LocationView;
  /** The ad group ad label referenced in the query. */
  adGroupAdLabel?: GoogleAdsSearchads360V0Resources__AdGroupAdLabel;
  /** The ad referenced in the query. */
  adGroupAd?: GoogleAdsSearchads360V0Resources__AdGroupAd;
  /** The campaign audience view referenced in the query. */
  campaignAudienceView?: GoogleAdsSearchads360V0Resources__CampaignAudienceView;
  /** The bidding strategy referenced in the query. */
  biddingStrategy?: GoogleAdsSearchads360V0Resources__BiddingStrategy;
  /** The CustomerClient referenced in the query. */
  customerClient?: GoogleAdsSearchads360V0Resources__CustomerClient;
  /** The ad group asset set referenced in the query. */
  adGroupAssetSet?: GoogleAdsSearchads360V0Resources__AdGroupAssetSet;
}

export const GoogleAdsSearchads360V0Services__SearchAds360Row: Schema.Schema<GoogleAdsSearchads360V0Services__SearchAds360Row> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adGroupEffectiveLabel: Schema.optional(
      GoogleAdsSearchads360V0Resources__AdGroupEffectiveLabel,
    ),
    keywordView: Schema.optional(GoogleAdsSearchads360V0Resources__KeywordView),
    assetSetAsset: Schema.optional(
      GoogleAdsSearchads360V0Resources__AssetSetAsset,
    ),
    campaign: Schema.optional(GoogleAdsSearchads360V0Resources__Campaign),
    customColumns: Schema.optional(
      Schema.Array(GoogleAdsSearchads360V0Common__Value),
    ),
    dynamicSearchAdsSearchTermView: Schema.optional(
      GoogleAdsSearchads360V0Resources__DynamicSearchAdsSearchTermView,
    ),
    campaignBudget: Schema.optional(
      GoogleAdsSearchads360V0Resources__CampaignBudget,
    ),
    webpageView: Schema.optional(GoogleAdsSearchads360V0Resources__WebpageView),
    genderView: Schema.optional(GoogleAdsSearchads360V0Resources__GenderView),
    segments: Schema.optional(GoogleAdsSearchads360V0Common__Segments),
    assetGroupSignal: Schema.optional(
      GoogleAdsSearchads360V0Resources__AssetGroupSignal,
    ),
    languageConstant: Schema.optional(
      GoogleAdsSearchads360V0Resources__LanguageConstant,
    ),
    adGroupCriterionLabel: Schema.optional(
      GoogleAdsSearchads360V0Resources__AdGroupCriterionLabel,
    ),
    productBiddingCategoryConstant: Schema.optional(
      GoogleAdsSearchads360V0Resources__ProductBiddingCategoryConstant,
    ),
    productGroupView: Schema.optional(
      GoogleAdsSearchads360V0Resources__ProductGroupView,
    ),
    ageRangeView: Schema.optional(
      GoogleAdsSearchads360V0Resources__AgeRangeView,
    ),
    assetGroup: Schema.optional(GoogleAdsSearchads360V0Resources__AssetGroup),
    adGroup: Schema.optional(GoogleAdsSearchads360V0Resources__AdGroup),
    assetGroupAsset: Schema.optional(
      GoogleAdsSearchads360V0Resources__AssetGroupAsset,
    ),
    label: Schema.optional(GoogleAdsSearchads360V0Resources__Label),
    adGroupAdEffectiveLabel: Schema.optional(
      GoogleAdsSearchads360V0Resources__AdGroupAdEffectiveLabel,
    ),
    customerAssetSet: Schema.optional(
      GoogleAdsSearchads360V0Resources__CustomerAssetSet,
    ),
    campaignCriterion: Schema.optional(
      GoogleAdsSearchads360V0Resources__CampaignCriterion,
    ),
    geoTargetConstant: Schema.optional(
      GoogleAdsSearchads360V0Resources__GeoTargetConstant,
    ),
    customerManagerLink: Schema.optional(
      GoogleAdsSearchads360V0Resources__CustomerManagerLink,
    ),
    adGroupLabel: Schema.optional(
      GoogleAdsSearchads360V0Resources__AdGroupLabel,
    ),
    metrics: Schema.optional(GoogleAdsSearchads360V0Common__Metrics),
    conversionCustomVariable: Schema.optional(
      GoogleAdsSearchads360V0Resources__ConversionCustomVariable,
    ),
    visit: Schema.optional(GoogleAdsSearchads360V0Resources__Visit),
    assetGroupListingGroupFilter: Schema.optional(
      GoogleAdsSearchads360V0Resources__AssetGroupListingGroupFilter,
    ),
    userList: Schema.optional(GoogleAdsSearchads360V0Resources__UserList),
    adGroupAudienceView: Schema.optional(
      GoogleAdsSearchads360V0Resources__AdGroupAudienceView,
    ),
    asset: Schema.optional(GoogleAdsSearchads360V0Resources__Asset),
    adGroupCriterion: Schema.optional(
      GoogleAdsSearchads360V0Resources__AdGroupCriterion,
    ),
    campaignAssetSet: Schema.optional(
      GoogleAdsSearchads360V0Resources__CampaignAssetSet,
    ),
    adGroupAsset: Schema.optional(
      GoogleAdsSearchads360V0Resources__AdGroupAsset,
    ),
    adGroupBidModifier: Schema.optional(
      GoogleAdsSearchads360V0Resources__AdGroupBidModifier,
    ),
    customer: Schema.optional(GoogleAdsSearchads360V0Resources__Customer),
    audience: Schema.optional(GoogleAdsSearchads360V0Resources__Audience),
    assetSet: Schema.optional(GoogleAdsSearchads360V0Resources__AssetSet),
    cartDataSalesView: Schema.optional(
      GoogleAdsSearchads360V0Resources__CartDataSalesView,
    ),
    userLocationView: Schema.optional(
      GoogleAdsSearchads360V0Resources__UserLocationView,
    ),
    assetGroupTopCombinationView: Schema.optional(
      GoogleAdsSearchads360V0Resources__AssetGroupTopCombinationView,
    ),
    campaignEffectiveLabel: Schema.optional(
      GoogleAdsSearchads360V0Resources__CampaignEffectiveLabel,
    ),
    adGroupCriterionEffectiveLabel: Schema.optional(
      GoogleAdsSearchads360V0Resources__AdGroupCriterionEffectiveLabel,
    ),
    campaignAsset: Schema.optional(
      GoogleAdsSearchads360V0Resources__CampaignAsset,
    ),
    conversionAction: Schema.optional(
      GoogleAdsSearchads360V0Resources__ConversionAction,
    ),
    campaignLabel: Schema.optional(
      GoogleAdsSearchads360V0Resources__CampaignLabel,
    ),
    customerAsset: Schema.optional(
      GoogleAdsSearchads360V0Resources__CustomerAsset,
    ),
    shoppingPerformanceView: Schema.optional(
      GoogleAdsSearchads360V0Resources__ShoppingPerformanceView,
    ),
    conversion: Schema.optional(GoogleAdsSearchads360V0Resources__Conversion),
    accessibleBiddingStrategy: Schema.optional(
      GoogleAdsSearchads360V0Resources__AccessibleBiddingStrategy,
    ),
    locationView: Schema.optional(
      GoogleAdsSearchads360V0Resources__LocationView,
    ),
    adGroupAdLabel: Schema.optional(
      GoogleAdsSearchads360V0Resources__AdGroupAdLabel,
    ),
    adGroupAd: Schema.optional(GoogleAdsSearchads360V0Resources__AdGroupAd),
    campaignAudienceView: Schema.optional(
      GoogleAdsSearchads360V0Resources__CampaignAudienceView,
    ),
    biddingStrategy: Schema.optional(
      GoogleAdsSearchads360V0Resources__BiddingStrategy,
    ),
    customerClient: Schema.optional(
      GoogleAdsSearchads360V0Resources__CustomerClient,
    ),
    adGroupAssetSet: Schema.optional(
      GoogleAdsSearchads360V0Resources__AdGroupAssetSet,
    ),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Services__SearchAds360Row",
  });

export interface GoogleAdsSearchads360V0Services__RawEventConversionDimensionHeader {
  /** The conversion custom variable ID. */
  id?: string;
  /** The user defined name of the raw event dimension. */
  name?: string;
}

export const GoogleAdsSearchads360V0Services__RawEventConversionDimensionHeader: Schema.Schema<GoogleAdsSearchads360V0Services__RawEventConversionDimensionHeader> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Services__RawEventConversionDimensionHeader",
  });

export interface GoogleAdsSearchads360V0Services__SearchSearchAds360Response {
  /** The headers of the custom columns in the results. */
  customColumnHeaders?: ReadonlyArray<GoogleAdsSearchads360V0Services__CustomColumnHeader>;
  /** FieldMask that represents what fields were requested by the user. */
  fieldMask?: string;
  /** Summary row that contains summary of metrics in results. Summary of metrics means aggregation of metrics across all results, here aggregation could be sum, average, rate, etc. */
  summaryRow?: GoogleAdsSearchads360V0Services__SearchAds360Row;
  /** The list of rows that matched the query. */
  results?: ReadonlyArray<GoogleAdsSearchads360V0Services__SearchAds360Row>;
  /** Total number of results that match the query ignoring the LIMIT clause. */
  totalResultsCount?: string;
  /** The headers of the raw event conversion dimensions in the results. */
  rawEventConversionDimensionHeaders?: ReadonlyArray<GoogleAdsSearchads360V0Services__RawEventConversionDimensionHeader>;
  /** The headers of the conversion custom metrics in the results. */
  conversionCustomMetricHeaders?: ReadonlyArray<GoogleAdsSearchads360V0Services__ConversionCustomMetricHeader>;
  /** The headers of the raw event conversion metrics in the results. */
  rawEventConversionMetricHeaders?: ReadonlyArray<GoogleAdsSearchads360V0Services__RawEventConversionMetricHeader>;
  /** The headers of the conversion custom dimensions in the results. */
  conversionCustomDimensionHeaders?: ReadonlyArray<GoogleAdsSearchads360V0Services__ConversionCustomDimensionHeader>;
  /** Pagination token used to retrieve the next page of results. Pass the content of this string as the `page_token` attribute of the next request. `next_page_token` is not returned for the last page. */
  nextPageToken?: string;
}

export const GoogleAdsSearchads360V0Services__SearchSearchAds360Response: Schema.Schema<GoogleAdsSearchads360V0Services__SearchSearchAds360Response> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customColumnHeaders: Schema.optional(
      Schema.Array(GoogleAdsSearchads360V0Services__CustomColumnHeader),
    ),
    fieldMask: Schema.optional(Schema.String),
    summaryRow: Schema.optional(
      GoogleAdsSearchads360V0Services__SearchAds360Row,
    ),
    results: Schema.optional(
      Schema.Array(GoogleAdsSearchads360V0Services__SearchAds360Row),
    ),
    totalResultsCount: Schema.optional(Schema.String),
    rawEventConversionDimensionHeaders: Schema.optional(
      Schema.Array(
        GoogleAdsSearchads360V0Services__RawEventConversionDimensionHeader,
      ),
    ),
    conversionCustomMetricHeaders: Schema.optional(
      Schema.Array(
        GoogleAdsSearchads360V0Services__ConversionCustomMetricHeader,
      ),
    ),
    rawEventConversionMetricHeaders: Schema.optional(
      Schema.Array(
        GoogleAdsSearchads360V0Services__RawEventConversionMetricHeader,
      ),
    ),
    conversionCustomDimensionHeaders: Schema.optional(
      Schema.Array(
        GoogleAdsSearchads360V0Services__ConversionCustomDimensionHeader,
      ),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Services__SearchSearchAds360Response",
  });

export interface GoogleAdsSearchads360V23Resources__OfflineUserDataJobMetadata {
  /** Output only. Match rate of the Customer Match user list upload. Describes the estimated match rate when the status of the job is "RUNNING" and final match rate when the final match rate is available after the status of the job is "SUCCESS/FAILED". */
  matchRateRange?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "MATCH_RANGE_LESS_THAN_20"
    | "MATCH_RANGE_20_TO_30"
    | "MATCH_RANGE_31_TO_40"
    | "MATCH_RANGE_41_TO_50"
    | "MATCH_RANGE_51_TO_60"
    | "MATCH_RANGE_61_TO_70"
    | "MATCH_RANGE_71_TO_80"
    | "MATCH_RANGE_81_TO_90"
    | "MATCH_RANGE_91_TO_100"
    | (string & {});
}

export const GoogleAdsSearchads360V23Resources__OfflineUserDataJobMetadata: Schema.Schema<GoogleAdsSearchads360V23Resources__OfflineUserDataJobMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matchRateRange: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V23Resources__OfflineUserDataJobMetadata",
  });

export interface GoogleAdsSearchads360V0Services__ListCustomColumnsResponse {
  /** The CustomColumns owned by the provided customer. */
  customColumns?: ReadonlyArray<GoogleAdsSearchads360V0Resources__CustomColumn>;
}

export const GoogleAdsSearchads360V0Services__ListCustomColumnsResponse: Schema.Schema<GoogleAdsSearchads360V0Services__ListCustomColumnsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customColumns: Schema.optional(
      Schema.Array(GoogleAdsSearchads360V0Resources__CustomColumn),
    ),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Services__ListCustomColumnsResponse",
  });

export interface GoogleAdsSearchads360V0Resources__SearchAds360Field {
  /** Output only. Whether the artifact can be used in a ORDER BY clause in search queries. */
  sortable?: boolean;
  /** Output only. The names of all resources that are selectable with the described artifact. Fields from these resources do not segment metrics when included in search queries. This field is only set for artifacts whose category is RESOURCE. */
  attributeResources?: ReadonlyArray<string>;
  /** Output only. The URL of proto describing the artifact's data type. */
  typeUrl?: string;
  /** Output only. This field determines the operators that can be used with the artifact in WHERE clauses. */
  dataType?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "BOOLEAN"
    | "DATE"
    | "DOUBLE"
    | "ENUM"
    | "FLOAT"
    | "INT32"
    | "INT64"
    | "MESSAGE"
    | "RESOURCE_NAME"
    | "STRING"
    | "UINT64"
    | (string & {});
  /** Output only. The names of all resources, segments, and metrics that are selectable with the described artifact. */
  selectableWith?: ReadonlyArray<string>;
  /** Output only. Whether the artifact can be used in a WHERE clause in search queries. */
  filterable?: boolean;
  /** Output only. Values the artifact can assume if it is a field of type ENUM. This field is only set for artifacts of category SEGMENT or ATTRIBUTE. */
  enumValues?: ReadonlyArray<string>;
  /** Output only. The resource name of the artifact. Artifact resource names have the form: `SearchAds360Fields/{name}` */
  resourceName?: string;
  /** Output only. The category of the artifact. */
  category?:
    | "UNSPECIFIED"
    | "UNKNOWN"
    | "RESOURCE"
    | "ATTRIBUTE"
    | "SEGMENT"
    | "METRIC"
    | (string & {});
  /** Output only. This field lists the names of all artifacts, whether a segment or another resource, that segment metrics when included in search queries and when the described artifact is used in the FROM clause. It is only set for artifacts whose category is RESOURCE. */
  segments?: ReadonlyArray<string>;
  /** Output only. Whether the field artifact is repeated. */
  isRepeated?: boolean;
  /** Output only. Whether the artifact can be used in a SELECT clause in search queries. */
  selectable?: boolean;
  /** Output only. This field lists the names of all metrics that are selectable with the described artifact when it is used in the FROM clause. It is only set for artifacts whose category is RESOURCE. */
  metrics?: ReadonlyArray<string>;
  /** Output only. The name of the artifact. */
  name?: string;
}

export const GoogleAdsSearchads360V0Resources__SearchAds360Field: Schema.Schema<GoogleAdsSearchads360V0Resources__SearchAds360Field> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sortable: Schema.optional(Schema.Boolean),
    attributeResources: Schema.optional(Schema.Array(Schema.String)),
    typeUrl: Schema.optional(Schema.String),
    dataType: Schema.optional(Schema.String),
    selectableWith: Schema.optional(Schema.Array(Schema.String)),
    filterable: Schema.optional(Schema.Boolean),
    enumValues: Schema.optional(Schema.Array(Schema.String)),
    resourceName: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
    segments: Schema.optional(Schema.Array(Schema.String)),
    isRepeated: Schema.optional(Schema.Boolean),
    selectable: Schema.optional(Schema.Boolean),
    metrics: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V0Resources__SearchAds360Field",
  });

export interface GoogleAdsSearchads360V23Services__ScheduleExperimentMetadata {
  /** Required. The scheduled experiment. */
  experiment?: string;
}

export const GoogleAdsSearchads360V23Services__ScheduleExperimentMetadata: Schema.Schema<GoogleAdsSearchads360V23Services__ScheduleExperimentMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    experiment: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V23Services__ScheduleExperimentMetadata",
  });

export interface GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsResponse {
  /** The list of fields that matched the query. */
  results?: ReadonlyArray<GoogleAdsSearchads360V0Resources__SearchAds360Field>;
  /** Total number of results that match the query ignoring the LIMIT clause. */
  totalResultsCount?: string;
  /** Pagination token used to retrieve the next page of results. Pass the content of this string as the `page_token` attribute of the next request. `next_page_token` is not returned for the last page. */
  nextPageToken?: string;
}

export const GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsResponse: Schema.Schema<GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(
      Schema.Array(GoogleAdsSearchads360V0Resources__SearchAds360Field),
    ),
    totalResultsCount: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsResponse",
  });

export interface GoogleAdsSearchads360V23Resources_BatchJob_BatchJobMetadata {
  /** Output only. The fraction (between 0.0 and 1.0) of mutates that have been processed. This is empty if the job hasn't started running yet. */
  estimatedCompletionRatio?: number;
  /** Immutable. The approximate upper bound for how long a batch job can be executed, in seconds. If the job runs more than the given upper bound, the job will be canceled. */
  executionLimitSeconds?: number;
  /** Output only. The number of mutate operations executed by the batch job. Present only if the job has started running. */
  executedOperationCount?: string;
  /** Output only. The time when this batch job was created. Formatted as yyyy-mm-dd hh:mm:ss. Example: "2018-03-05 09:15:00" */
  creationDateTime?: string;
  /** Output only. The number of mutate operations in the batch job. */
  operationCount?: string;
  /** Output only. The time when this batch job started running. Formatted as yyyy-mm-dd hh:mm:ss. Example: "2018-03-05 09:15:30" */
  startDateTime?: string;
  /** Output only. The time when this batch job was completed. Formatted as yyyy-MM-dd HH:mm:ss. Example: "2018-03-05 09:16:00" */
  completionDateTime?: string;
}

export const GoogleAdsSearchads360V23Resources_BatchJob_BatchJobMetadata: Schema.Schema<GoogleAdsSearchads360V23Resources_BatchJob_BatchJobMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    estimatedCompletionRatio: Schema.optional(Schema.Number),
    executionLimitSeconds: Schema.optional(Schema.Number),
    executedOperationCount: Schema.optional(Schema.String),
    creationDateTime: Schema.optional(Schema.String),
    operationCount: Schema.optional(Schema.String),
    startDateTime: Schema.optional(Schema.String),
    completionDateTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsSearchads360V23Resources_BatchJob_BatchJobMetadata",
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

export interface ListAccessibleCustomersCustomersRequest {}

export const ListAccessibleCustomersCustomersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "v0/customers:listAccessibleCustomers" }),
    svc,
  ) as unknown as Schema.Schema<ListAccessibleCustomersCustomersRequest>;

export type ListAccessibleCustomersCustomersResponse =
  GoogleAdsSearchads360V0Services__ListAccessibleCustomersResponse;
export const ListAccessibleCustomersCustomersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAdsSearchads360V0Services__ListAccessibleCustomersResponse;

export type ListAccessibleCustomersCustomersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns resource names of customers directly accessible by the user authenticating the call. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]() */
export const listAccessibleCustomersCustomers: API.OperationMethod<
  ListAccessibleCustomersCustomersRequest,
  ListAccessibleCustomersCustomersResponse,
  ListAccessibleCustomersCustomersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListAccessibleCustomersCustomersRequest,
  output: ListAccessibleCustomersCustomersResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListCustomersCustomColumnsRequest {
  /** Required. The ID of the customer to apply the CustomColumn list operation to. */
  customerId: string;
}

export const ListCustomersCustomColumnsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customerId: Schema.String.pipe(T.HttpPath("customerId")),
  }).pipe(
    T.Http({ method: "GET", path: "v0/customers/{+customerId}/customColumns" }),
    svc,
  ) as unknown as Schema.Schema<ListCustomersCustomColumnsRequest>;

export type ListCustomersCustomColumnsResponse =
  GoogleAdsSearchads360V0Services__ListCustomColumnsResponse;
export const ListCustomersCustomColumnsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAdsSearchads360V0Services__ListCustomColumnsResponse;

export type ListCustomersCustomColumnsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns all the custom columns associated with the customer in full detail. */
export const listCustomersCustomColumns: API.OperationMethod<
  ListCustomersCustomColumnsRequest,
  ListCustomersCustomColumnsResponse,
  ListCustomersCustomColumnsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListCustomersCustomColumnsRequest,
  output: ListCustomersCustomColumnsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetCustomersCustomColumnsRequest {
  /** Required. The resource name of the custom column to fetch. */
  resourceName: string;
}

export const GetCustomersCustomColumnsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceName: Schema.String.pipe(T.HttpPath("resourceName")),
  }).pipe(
    T.Http({ method: "GET", path: "v0/{+resourceName}" }),
    svc,
  ) as unknown as Schema.Schema<GetCustomersCustomColumnsRequest>;

export type GetCustomersCustomColumnsResponse =
  GoogleAdsSearchads360V0Resources__CustomColumn;
export const GetCustomersCustomColumnsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAdsSearchads360V0Resources__CustomColumn;

export type GetCustomersCustomColumnsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the requested custom column in full detail. */
export const getCustomersCustomColumns: API.OperationMethod<
  GetCustomersCustomColumnsRequest,
  GetCustomersCustomColumnsResponse,
  GetCustomersCustomColumnsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCustomersCustomColumnsRequest,
  output: GetCustomersCustomColumnsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SearchCustomersSearchAds360Request {
  /** Required. The ID of the customer being queried. */
  customerId: string;
  /** Request body */
  body?: GoogleAdsSearchads360V0Services__SearchSearchAds360Request;
}

export const SearchCustomersSearchAds360Request =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customerId: Schema.String.pipe(T.HttpPath("customerId")),
    body: Schema.optional(
      GoogleAdsSearchads360V0Services__SearchSearchAds360Request,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v0/customers/{+customerId}/searchAds360:search",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SearchCustomersSearchAds360Request>;

export type SearchCustomersSearchAds360Response =
  GoogleAdsSearchads360V0Services__SearchSearchAds360Response;
export const SearchCustomersSearchAds360Response =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAdsSearchads360V0Services__SearchSearchAds360Response;

export type SearchCustomersSearchAds360Error =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns all rows that match the search query. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [ChangeEventError]() [ChangeStatusError]() [ClickViewError]() [HeaderError]() [InternalError]() [QueryError]() [QuotaError]() [RequestError]() */
export const searchCustomersSearchAds360: API.OperationMethod<
  SearchCustomersSearchAds360Request,
  SearchCustomersSearchAds360Response,
  SearchCustomersSearchAds360Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchCustomersSearchAds360Request,
  output: SearchCustomersSearchAds360Response,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetSearchAds360FieldsRequest {
  /** Required. The resource name of the field to get. */
  resourceName: string;
}

export const GetSearchAds360FieldsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceName: Schema.String.pipe(T.HttpPath("resourceName")),
  }).pipe(
    T.Http({ method: "GET", path: "v0/{+resourceName}" }),
    svc,
  ) as unknown as Schema.Schema<GetSearchAds360FieldsRequest>;

export type GetSearchAds360FieldsResponse =
  GoogleAdsSearchads360V0Resources__SearchAds360Field;
export const GetSearchAds360FieldsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAdsSearchads360V0Resources__SearchAds360Field;

export type GetSearchAds360FieldsError = DefaultErrors | NotFound | Forbidden;

/** Returns just the requested field. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]() */
export const getSearchAds360Fields: API.OperationMethod<
  GetSearchAds360FieldsRequest,
  GetSearchAds360FieldsResponse,
  GetSearchAds360FieldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSearchAds360FieldsRequest,
  output: GetSearchAds360FieldsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SearchSearchAds360FieldsRequest {
  /** Request body */
  body?: GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsRequest;
}

export const SearchSearchAds360FieldsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(
      GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v0/searchAds360Fields:search",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SearchSearchAds360FieldsRequest>;

export type SearchSearchAds360FieldsResponse =
  GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsResponse;
export const SearchSearchAds360FieldsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsResponse;

export type SearchSearchAds360FieldsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns all fields that match the search [query](/search-ads/reporting/concepts/field-service#use_a_query_to_get_field_details). List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QueryError]() [QuotaError]() [RequestError]() */
export const searchSearchAds360Fields: API.OperationMethod<
  SearchSearchAds360FieldsRequest,
  SearchSearchAds360FieldsResponse,
  SearchSearchAds360FieldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchSearchAds360FieldsRequest,
  output: SearchSearchAds360FieldsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
