// ==========================================================================
// Authorized Buyers Marketplace API (authorizedbuyersmarketplace v1alpha)
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
  name: "authorizedbuyersmarketplace",
  version: "v1alpha",
  rootUrl: "https://authorizedbuyersmarketplace.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Money {
  /** The three-letter currency code defined in ISO 4217. */
  currencyCode?: string;
  /** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
  units?: string;
  /** Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000. */
  nanos?: number;
}

export const Money = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  currencyCode: Schema.optional(Schema.String),
  units: Schema.optional(Schema.String),
  nanos: Schema.optional(Schema.Number),
}).annotate({ identifier: "Money" });

export interface AccessControlSettings {
  /** Required. Immutable. The list of media planners that are explicitly granted access to the curated package. Eligible media planners can be found in the mediaPlanners.list method. Only a single media planner may be allowlisted at this time. Format: `mediaPlanners/{mediaPlannerAccountId}` */
  allowlistedMediaPlanners?: ReadonlyArray<string>;
}

export const AccessControlSettings = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  allowlistedMediaPlanners: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "AccessControlSettings" });

export interface StringTargetingDimension {
  /** Required. The values specified. */
  values?: ReadonlyArray<string>;
  /** Required. How the items in this list should be targeted. */
  selectionType?:
    | "SELECTION_TYPE_UNSPECIFIED"
    | "SELECTION_TYPE_INCLUDE"
    | "SELECTION_TYPE_EXCLUDE"
    | (string & {});
}

export const StringTargetingDimension =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Schema.String)),
    selectionType: Schema.optional(Schema.String),
  }).annotate({ identifier: "StringTargetingDimension" });

export interface AdSize {
  /** The width of the ad slot in pixels. This field will be present only when size type is `PIXEL`. */
  width?: string;
  /** The height of the ad slot in pixels. This field will be present only when size type is `PIXEL`. */
  height?: string;
  /** The type of the ad slot size. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "PIXEL"
    | "INTERSTITIAL"
    | "NATIVE"
    | "FLUID"
    | (string & {});
}

export const AdSize = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  width: Schema.optional(Schema.String),
  height: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}).annotate({ identifier: "AdSize" });

export interface VideoPlayerSizeTargeting {
  /** Required. The minimum height of the video player in pixels. */
  minimumHeight?: string;
  /** Required. The minimum width of the video player in pixels. */
  minimumWidth?: string;
}

export const VideoPlayerSizeTargeting =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minimumHeight: Schema.optional(Schema.String),
    minimumWidth: Schema.optional(Schema.String),
  }).annotate({ identifier: "VideoPlayerSizeTargeting" });

export interface VideoPlcmtTargeting {
  /** Required. The selection type for the list of video plcmts. */
  selectionType?:
    | "SELECTION_TYPE_UNSPECIFIED"
    | "SELECTION_TYPE_INCLUDE"
    | "SELECTION_TYPE_EXCLUDE"
    | (string & {});
  /** Required. The list of targeted video plcmts types. If empty, inventory will be targeted regardless of video plcmt type. */
  videoPlcmtTypes?: ReadonlyArray<
    | "VIDEO_PLCMT_TYPE_UNSPECIFIED"
    | "INSTREAM"
    | "ACCOMPANYING_CONTENT"
    | "INTERSTITIAL"
    | "NO_CONTENT"
    | (string & {})
  >;
}

export const VideoPlcmtTargeting = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  selectionType: Schema.optional(Schema.String),
  videoPlcmtTypes: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "VideoPlcmtTargeting" });

export interface PackageVideoTargeting {
  /** Optional. The targeted video ad position types. If empty, inventory will be targeted regardless of video ad position type. */
  includedPositionTypes?: ReadonlyArray<
    | "POSITION_TYPE_UNSPECIFIED"
    | "POSITION_TYPE_MIDROLL"
    | "POSITION_TYPE_POSTROLL"
    | "POSITION_TYPE_PREROLL"
    | (string & {})
  >;
  /** Optional. The targeted video player size. If unset, inventory will be targeted regardless of video player size. */
  includedPlayerSizeTargeting?: VideoPlayerSizeTargeting;
  /** Optional. The targeted video delivery method. If unset, inventory will be targeted regardless of video delivery method. */
  includedContentDeliveryMethod?:
    | "CONTENT_DELIVERY_METHOD_UNSPECIFIED"
    | "CONTENT_DELIVERY_METHOD_STREAMING"
    | "CONTENT_DELIVERY_METHOD_PROGRESSIVE"
    | (string & {});
  /** Optional. The targeted video plcmt types. If unset, inventory will be targeted regardless of video plcmt type. */
  plcmtTargeting?: VideoPlcmtTargeting;
  /** Optional. The targeted maximum video ad duration. If unset, inventory will be targeted regardless of maximum video ad duration. */
  includedMaximumAdDurationTargeting?:
    | "MAXIMUM_VIDEO_AD_DURATION_UNSPECIFIED"
    | "MAXIMUM_VIDEO_AD_DURATION_FIFTEEN_SECONDS"
    | "MAXIMUM_VIDEO_AD_DURATION_TWENTY_SECONDS"
    | "MAXIMUM_VIDEO_AD_DURATION_THIRTY_SECONDS"
    | "MAXIMUM_VIDEO_AD_DURATION_SIXTY_SECONDS"
    | "MAXIMUM_VIDEO_AD_DURATION_NINETY_SECONDS"
    | "MAXIMUM_VIDEO_AD_DURATION_ONE_HUNDRED_TWENTY_SECONDS"
    | (string & {});
  /** Optional. The list of targeted video playback methods. If empty, inventory will be targeted regardless of video playback method. */
  includedPlaybackMethods?: ReadonlyArray<
    | "PLAYBACK_METHOD_UNSPECIFIED"
    | "PLAYBACK_METHOD_AUTO_PLAY_SOUND_ON"
    | "PLAYBACK_METHOD_AUTO_PLAY_SOUND_OFF"
    | "PLAYBACK_METHOD_CLICK_TO_PLAY"
    | (string & {})
  >;
  /** Optional. The list of targeted video mime types using the IANA published MIME type strings (https://www.iana.org/assignments/media-types/media-types.xhtml). If empty, inventory will be targeted regardless of video mime type. */
  includedMimeTypes?: ReadonlyArray<
    | "VIDEO_MIME_TYPE_UNSPECIFIED"
    | "VIDEO_MIME_TYPE_THREEGPP"
    | "VIDEO_MIME_TYPE_APPLICATION_MPEGURL"
    | "VIDEO_MIME_TYPE_MP4"
    | "VIDEO_MIME_TYPE_APPLICATION_MPEGDASH"
    | "VIDEO_MIME_TYPE_APPLICATION_JAVASCRIPT"
    | "VIDEO_MIME_TYPE_WEBM"
    | (string & {})
  >;
  /** Optional. The targeted minimum predicted completion rate percentage. This value must be a multiple of 10 between 10 and 90 (inclusive). For example, 10 is valid, but 0, 15, and 100 are not. A value of 10 means that the configuration will only match adslots for which we predict at least 10% completion rate. An unset value indicates inventory will be targeted regardless of predicted completion rate. */
  minimumPredictedCompletionRatePercentage?: string;
}

export const PackageVideoTargeting = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  includedPositionTypes: Schema.optional(Schema.Array(Schema.String)),
  includedPlayerSizeTargeting: Schema.optional(VideoPlayerSizeTargeting),
  includedContentDeliveryMethod: Schema.optional(Schema.String),
  plcmtTargeting: Schema.optional(VideoPlcmtTargeting),
  includedMaximumAdDurationTargeting: Schema.optional(Schema.String),
  includedPlaybackMethods: Schema.optional(Schema.Array(Schema.String)),
  includedMimeTypes: Schema.optional(Schema.Array(Schema.String)),
  minimumPredictedCompletionRatePercentage: Schema.optional(Schema.String),
}).annotate({ identifier: "PackageVideoTargeting" });

export interface CriteriaTargeting {
  /** A list of numeric IDs to be included. */
  targetedCriteriaIds?: ReadonlyArray<string>;
  /** A list of numeric IDs to be excluded. */
  excludedCriteriaIds?: ReadonlyArray<string>;
}

export const CriteriaTargeting = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  targetedCriteriaIds: Schema.optional(Schema.Array(Schema.String)),
  excludedCriteriaIds: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "CriteriaTargeting" });

export interface PackagePlacementTargeting {
  /** Optional. The list of targeted or excluded mobile application IDs that publishers own. Currently, only Android and Apple apps are supported. Android App ID, for example, com.google.android.apps.maps, can be found in Google Play Store URL. iOS App ID (which is a number) can be found at the end of iTunes store URL. First party mobile applications is either included or excluded. */
  mobileAppTargeting?: StringTargetingDimension;
  /** Optional. The list of targeted mobile app categories. */
  includedMobileAppCategoryTargeting?: ReadonlyArray<string>;
  /** Optional. The list of targeted or excluded URLs. The domains should have the http/https stripped (for example, google.com), and can contain a max of 5 paths per url. */
  uriTargeting?: StringTargetingDimension;
}

export const PackagePlacementTargeting =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mobileAppTargeting: Schema.optional(StringTargetingDimension),
    includedMobileAppCategoryTargeting: Schema.optional(
      Schema.Array(Schema.String),
    ),
    uriTargeting: Schema.optional(StringTargetingDimension),
  }).annotate({ identifier: "PackagePlacementTargeting" });

export interface TaxonomyTargeting {
  /** Optional. The list of targeted content taxonomy IDs. */
  targetedTaxonomyIds?: ReadonlyArray<string>;
  /** Optional. The list of excluded content taxonomy IDs. */
  excludedTaxonomyIds?: ReadonlyArray<string>;
}

export const TaxonomyTargeting = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  targetedTaxonomyIds: Schema.optional(Schema.Array(Schema.String)),
  excludedTaxonomyIds: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "TaxonomyTargeting" });

export interface PackagePublisherProvidedSignalsTargeting {
  /** Optional. The list of targeted or excluded audience IDs. Based off of IAB Audience Taxonomy version 1.1 (https://github.com/InteractiveAdvertisingBureau/Taxonomies/blob/main/Audience%20Taxonomies/Audience%20Taxonomy%201.1.tsv) */
  audienceTargeting?: TaxonomyTargeting;
  /** Optional. The list of targeted or excluded content IDs. Based off of IAB Content Taxonomy version 2.2 (https://github.com/InteractiveAdvertisingBureau/Taxonomies/blob/main/Content%20Taxonomies/Content%20Taxonomy%202.2.tsv) */
  contentTargeting?: TaxonomyTargeting;
  /** Optional. The list of targeted and excluded video and audio signals IDs. These are additional signals supported by publisher provided signals. */
  videoAndAudioSignalsTargeting?: StringTargetingDimension;
}

export const PackagePublisherProvidedSignalsTargeting =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audienceTargeting: Schema.optional(TaxonomyTargeting),
    contentTargeting: Schema.optional(TaxonomyTargeting),
    videoAndAudioSignalsTargeting: Schema.optional(StringTargetingDimension),
  }).annotate({ identifier: "PackagePublisherProvidedSignalsTargeting" });

export interface PackageTargeting {
  /** Optional. The languages to target. If unset, inventory will be targeted regardless of language. See https://developers.google.com/google-ads/api/data/codes-formats#languages for the list of supported language codes. */
  languageTargeting?: StringTargetingDimension;
  /** Optional. The list of ad sizes to target. If unset, inventory will be targeted regardless of ad size. Curated packages supports `PIXEL` and `INTERSTITIAL` ad sizes. */
  includedAdSizes?: ReadonlyArray<AdSize>;
  /** Optional. The targeted publishers. If unset, inventory will be targeted regardless of publisher. Publishers are identified by their publisher ID from ads.txt / app-ads.txt. See https://iabtechlab.com/ads-txt/ and https://iabtechlab.com/app-ads-txt/ for more details. */
  publisherTargeting?: StringTargetingDimension;
  /** Optional. The list of targeted restricted categories. If empty, inventory will be targeted regardless of restricted categories. */
  includedRestrictedCategories?: ReadonlyArray<
    | "RESTRICTED_CATEGORY_UNSPECIFIED"
    | "RESTRICTED_CATEGORY_ALCOHOL"
    | "RESTRICTED_CATEGORY_GAMBLING"
    | (string & {})
  >;
  /** Optional. The included list of targeted authorized seller statuses. If empty, inventory will be targeted regardless of seller status. */
  includedAuthorizedSellerStatuses?: ReadonlyArray<
    | "AUTHORIZED_SELLER_STATUS_UNSPECIFIED"
    | "AUTHORIZED_SELLER_STATUS_DIRECT"
    | "AUTHORIZED_SELLER_STATUS_RESELLER"
    | (string & {})
  >;
  /** Optional. The creative format to target. If unset, all creative markup types are targeted. */
  includedCreativeFormat?:
    | "CREATIVE_FORMAT_UNSPECIFIED"
    | "CREATIVE_FORMAT_DISPLAY"
    | "CREATIVE_FORMAT_VIDEO"
    | "CREATIVE_FORMAT_AUDIO"
    | (string & {});
  /** Optional. Video specific targeting criteria. */
  videoTargeting?: PackageVideoTargeting;
  /** Optional. The active data segments to be targeted. If unset, inventory will be targeted regardless of data segments. Format: `curators/{account_id}/dataSegments/{data_segment_id}` */
  includedDataSegments?: ReadonlyArray<string>;
  /** Optional. The list of included device types to target. If empty, all device types are targeted. */
  includedDeviceTypes?: ReadonlyArray<
    | "DEVICE_TYPE_UNSPECIFIED"
    | "DEVICE_TYPE_PERSONAL_COMPUTER"
    | "DEVICE_TYPE_CONNECTED_TV"
    | "DEVICE_TYPE_PHONE"
    | "DEVICE_TYPE_TABLET"
    | (string & {})
  >;
  /** Optional. The verticals included or excluded as defined in https://developers.google.com/authorized-buyers/rtb/downloads/publisher-verticals. If unset, inventory will be targeted regardless of vertical. */
  verticalTargeting?: CriteriaTargeting;
  /** Optional. The targeted minimum predicted viewability percentage. This value must be a multiple of 10 between 10 and 90 (inclusive). For example, 10 is valid, but 0, 15, and 100 are not. A value of 10 means that the configuration will only match adslots for which we predict at least 10% viewability. An unset value indicates inventory will be targeted regardless of predicted viewability. */
  minimumPredictedViewabilityPercentage?: string;
  /** Optional. The targeted minimum predicted click through rate, ranging in values [10, 10000] (0.01% - 10%). A value of 50 means that the configuration will only match adslots for which we predict at least 0.05% click through rate. An unset value indicates inventory will be targeted regardless of predicted click through rate. */
  minimumPredictedClickThroughRatePercentageMillis?: string;
  /** Optional. The targeted accelerated mobile page type. If unset, inventory will be targeted regardless of AMP status. */
  includedAcceleratedMobilePageType?:
    | "ACCELERATED_MOBILE_PAGE_TYPE_UNSPECIFIED"
    | "ACCELERATED_MOBILE_PAGE_TYPE_NON_AMP"
    | "ACCELERATED_MOBILE_PAGE_TYPE_AMP"
    | "ACCELERATED_MOBILE_PAGE_TYPE_AMP_STORY"
    | (string & {});
  /** Optional. The targeted native inventory types. If empty, inventory will be targeted regardless of native inventory type. */
  includedNativeInventoryTypes?: ReadonlyArray<
    | "NATIVE_INVENTORY_TYPE_UNSPECIFIED"
    | "NATIVE_INVENTORY_TYPE_NATIVE_ONLY"
    | "NATIVE_INVENTORY_TYPE_NATIVE_OR_BANNER"
    | (string & {})
  >;
  /** Optional. Placement targeting information, for example, URL, mobile applications. */
  placementTargeting?: PackagePlacementTargeting;
  /** Optional. The list of targeted open measurement types. If empty, inventory will be targeted regardless of Open Measurement support. */
  includedOpenMeasurementTypes?: ReadonlyArray<
    | "OPEN_MEASUREMENT_TYPE_UNSPECIFIED"
    | "OPEN_MEASUREMENT_TYPE_OMID_V1"
    | (string & {})
  >;
  /** Optional. The geo criteria IDs to be included or excluded as defined in https://storage.googleapis.com/adx-rtb-dictionaries/geo-table.csv. If unset, inventory will be targeted regardless of geo. */
  geoTargeting?: CriteriaTargeting;
  /** Optional. The environment to target. If unspecified, all environments are targeted. */
  includedEnvironment?:
    | "ENVIRONMENT_UNSPECIFIED"
    | "ENVIRONMENT_SITE"
    | "ENVIRONMENT_APP"
    | (string & {});
  /** Optional. The targeted rewarded type. If unset, inventory will be targeted regardless of rewarded type. */
  includedRewardedType?:
    | "REWARDED_TYPE_UNSPECIFIED"
    | "REWARDED_TYPE_NON_REWARDED"
    | "REWARDED_TYPE_REWARDED"
    | (string & {});
  /** Optional. The publisher provided signals to target. If unset, inventory will be targeted regardless of publisher provided signals. */
  publisherProvidedSignalsTargeting?: PackagePublisherProvidedSignalsTargeting;
}

export const PackageTargeting = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  languageTargeting: Schema.optional(StringTargetingDimension),
  includedAdSizes: Schema.optional(Schema.Array(AdSize)),
  publisherTargeting: Schema.optional(StringTargetingDimension),
  includedRestrictedCategories: Schema.optional(Schema.Array(Schema.String)),
  includedAuthorizedSellerStatuses: Schema.optional(
    Schema.Array(Schema.String),
  ),
  includedCreativeFormat: Schema.optional(Schema.String),
  videoTargeting: Schema.optional(PackageVideoTargeting),
  includedDataSegments: Schema.optional(Schema.Array(Schema.String)),
  includedDeviceTypes: Schema.optional(Schema.Array(Schema.String)),
  verticalTargeting: Schema.optional(CriteriaTargeting),
  minimumPredictedViewabilityPercentage: Schema.optional(Schema.String),
  minimumPredictedClickThroughRatePercentageMillis: Schema.optional(
    Schema.String,
  ),
  includedAcceleratedMobilePageType: Schema.optional(Schema.String),
  includedNativeInventoryTypes: Schema.optional(Schema.Array(Schema.String)),
  placementTargeting: Schema.optional(PackagePlacementTargeting),
  includedOpenMeasurementTypes: Schema.optional(Schema.Array(Schema.String)),
  geoTargeting: Schema.optional(CriteriaTargeting),
  includedEnvironment: Schema.optional(Schema.String),
  includedRewardedType: Schema.optional(Schema.String),
  publisherProvidedSignalsTargeting: Schema.optional(
    PackagePublisherProvidedSignalsTargeting,
  ),
}).annotate({ identifier: "PackageTargeting" });

export interface CuratedPackage {
  /** Output only. The timestamp when the curated package was created. Can be used to filter the response of the curatedPackages.list method. */
  createTime?: string;
  /** Output only. The timestamp when the curated package was last updated. Can be used to filter the response of the curatedPackages.list method. */
  updateTime?: string;
  /** Optional. A description of the curated package, provided by the curator. */
  description?: string;
  /** Identifier. The unique resource name for the curated package. Format: `curators/{accountId}/curatedPackages/{curatedPackageId}` */
  name?: string;
  /** Required. The display name assigned to the curated package by the curator. Can be used to filter the response of the curatedPackages.list method. */
  displayName?: string;
  /** Optional. The CPM fee charged by the curator to buyers using this curated package. Can be used to filter the response of the curatedPackages.list method. */
  feeCpm?: Money;
  /** Required. Settings for controlling access to the curated package. Access to this curated package is limited to the allowlisted media planners and the creator. Buyers and bidders can not be allowlisted for or have direct access to this resource. */
  accessSettings?: AccessControlSettings;
  /** Output only. The state of the curated package. Can be used to filter the response of the curatedPackages.list method. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
  /** Optional. The minimum CPM a buyer has to bid to participate in auctions for inventory in this curated package. Can be used to filter the response of the curatedPackages.list method. */
  floorPriceCpm?: Money;
  /** Optional. Targeting criteria for the curated package. */
  targeting?: PackageTargeting;
}

export const CuratedPackage = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createTime: Schema.optional(Schema.String),
  updateTime: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  feeCpm: Schema.optional(Money),
  accessSettings: Schema.optional(AccessControlSettings),
  state: Schema.optional(Schema.String),
  floorPriceCpm: Schema.optional(Money),
  targeting: Schema.optional(PackageTargeting),
}).annotate({ identifier: "CuratedPackage" });

export interface ListCuratedPackagesResponse {
  /** The list of curated packages. */
  curatedPackages?: ReadonlyArray<CuratedPackage>;
  /** A token to retrieve the next page of results. Pass this value in the ListCuratedPackagesRequest.pageToken field in the subsequent call to `ListCuratedPackages` method to retrieve the next page of results. If empty, then there are no more results. */
  nextPageToken?: string;
}

export const ListCuratedPackagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    curatedPackages: Schema.optional(Schema.Array(CuratedPackage)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListCuratedPackagesResponse" });

export interface DeactivateCuratedPackageRequest {}

export const DeactivateCuratedPackageRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DeactivateCuratedPackageRequest",
  });

export interface VideoTargeting {
  /** A list of video positions to be included. When this field is populated, the excluded_position_types field must be empty. */
  targetedPositionTypes?: ReadonlyArray<
    | "POSITION_TYPE_UNSPECIFIED"
    | "PREROLL"
    | "MIDROLL"
    | "POSTROLL"
    | (string & {})
  >;
  /** A list of video positions to be excluded. When this field is populated, the targeted_position_types field must be empty. */
  excludedPositionTypes?: ReadonlyArray<
    | "POSITION_TYPE_UNSPECIFIED"
    | "PREROLL"
    | "MIDROLL"
    | "POSTROLL"
    | (string & {})
  >;
}

export const VideoTargeting = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  targetedPositionTypes: Schema.optional(Schema.Array(Schema.String)),
  excludedPositionTypes: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "VideoTargeting" });

export interface SubscribeAuctionPackageRequest {}

export const SubscribeAuctionPackageRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SubscribeAuctionPackageRequest",
  });

export interface UriTargeting {
  /** A list of URLs to be included. */
  targetedUris?: ReadonlyArray<string>;
  /** A list of URLs to be excluded. */
  excludedUris?: ReadonlyArray<string>;
}

export const UriTargeting = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  targetedUris: Schema.optional(Schema.Array(Schema.String)),
  excludedUris: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "UriTargeting" });

export interface FirstPartyMobileApplicationTargeting {
  /** A list of application IDs to be included. */
  targetedAppIds?: ReadonlyArray<string>;
  /** A list of application IDs to be excluded. */
  excludedAppIds?: ReadonlyArray<string>;
}

export const FirstPartyMobileApplicationTargeting =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetedAppIds: Schema.optional(Schema.Array(Schema.String)),
    excludedAppIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "FirstPartyMobileApplicationTargeting" });

export interface FrequencyCap {
  /** The amount of time, in the units specified by time_unit_type. Defines the amount of time over which impressions per user are counted and capped. */
  timeUnitsCount?: number;
  /** The maximum number of impressions that can be served to a user within the specified time period. */
  maxImpressions?: number;
  /** The time unit. Along with num_time_units defines the amount of time over which impressions per user are counted and capped. */
  timeUnitType?:
    | "TIME_UNIT_TYPE_UNSPECIFIED"
    | "MINUTE"
    | "HOUR"
    | "DAY"
    | "WEEK"
    | "MONTH"
    | "LIFETIME"
    | "POD"
    | "STREAM"
    | (string & {});
}

export const FrequencyCap = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  timeUnitsCount: Schema.optional(Schema.Number),
  maxImpressions: Schema.optional(Schema.Number),
  timeUnitType: Schema.optional(Schema.String),
}).annotate({ identifier: "FrequencyCap" });

export interface DeliveryControl {
  /** Output only. Specifies the roadblocking type in display creatives. */
  roadblockingType?:
    | "ROADBLOCKING_TYPE_UNSPECIFIED"
    | "ONLY_ONE"
    | "ONE_OR_MORE"
    | "AS_MANY_AS_POSSIBLE"
    | "ALL_ROADBLOCK"
    | "CREATIVE_SET"
    | (string & {});
  /** Output only. Specifies roadblocking in a main companion lineitem. */
  companionDeliveryType?:
    | "COMPANION_DELIVERY_TYPE_UNSPECIFIED"
    | "DELIVERY_OPTIONAL"
    | "DELIVERY_AT_LEAST_ONE"
    | "DELIVERY_ALL"
    | (string & {});
  /** Output only. Specifies any frequency caps. Cannot be filtered within ListDealsRequest. */
  frequencyCap?: ReadonlyArray<FrequencyCap>;
  /** Output only. Specifies how the impression delivery will be paced. */
  deliveryRateType?:
    | "DELIVERY_RATE_TYPE_UNSPECIFIED"
    | "EVENLY"
    | "FRONT_LOADED"
    | "AS_FAST_AS_POSSIBLE"
    | (string & {});
  /** Output only. Specifies strategy to use for selecting a creative when multiple creatives of the same size are available. */
  creativeRotationType?:
    | "CREATIVE_ROTATION_TYPE_UNSPECIFIED"
    | "ROTATION_EVEN"
    | "ROTATION_OPTIMIZED"
    | "ROTATION_MANUAL"
    | "ROTATION_SEQUENTIAL"
    | (string & {});
}

export const DeliveryControl = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  roadblockingType: Schema.optional(Schema.String),
  companionDeliveryType: Schema.optional(Schema.String),
  frequencyCap: Schema.optional(Schema.Array(FrequencyCap)),
  deliveryRateType: Schema.optional(Schema.String),
  creativeRotationType: Schema.optional(Schema.String),
}).annotate({ identifier: "DeliveryControl" });

export interface DealPausingInfo {
  /** The party that first paused the deal; unspecified for active deals. */
  pauseRole?:
    | "BUYER_SELLER_ROLE_UNSPECIFIED"
    | "BUYER"
    | "SELLER"
    | (string & {});
  /** Whether pausing is consented between buyer and seller for the deal. */
  pausingConsented?: boolean;
  /** The reason for the pausing of the deal; empty for active deals. */
  pauseReason?: string;
}

export const DealPausingInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pauseRole: Schema.optional(Schema.String),
  pausingConsented: Schema.optional(Schema.Boolean),
  pauseReason: Schema.optional(Schema.String),
}).annotate({ identifier: "DealPausingInfo" });

export interface RtbMetrics {
  /** Bids in last 7 days. */
  bids7Days?: string;
  /** Ad impressions in last 7 days. */
  adImpressions7Days?: string;
  /** Filtered bid rate in last 7 days, calculated by (filtered bids / bids). */
  filteredBidRate7Days?: number;
  /** Must bid rate for current month. */
  mustBidRateCurrentMonth?: number;
  /** Bid requests in last 7 days. */
  bidRequests7Days?: string;
  /** Bid rate in last 7 days, calculated by (bids / bid requests). */
  bidRate7Days?: number;
}

export const RtbMetrics = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bids7Days: Schema.optional(Schema.String),
  adImpressions7Days: Schema.optional(Schema.String),
  filteredBidRate7Days: Schema.optional(Schema.Number),
  mustBidRateCurrentMonth: Schema.optional(Schema.Number),
  bidRequests7Days: Schema.optional(Schema.String),
  bidRate7Days: Schema.optional(Schema.Number),
}).annotate({ identifier: "RtbMetrics" });

export interface Price {
  /** The pricing type for the deal. */
  type?: "TYPE_UNSPECIFIED" | "CPM" | "CPD" | (string & {});
  /** The actual price with currency specified. */
  amount?: Money;
}

export const Price = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  amount: Schema.optional(Money),
}).annotate({ identifier: "Price" });

export interface ProgrammaticGuaranteedTerms {
  /** Count of guaranteed looks. For CPD deals, buyer changes to guaranteed_looks will be ignored. */
  guaranteedLooks?: string;
  /** Fixed price for the deal. */
  fixedPrice?: Price;
  /** The lifetime impression cap for CPM Sponsorship deals. Deal will stop serving when cap is reached. */
  impressionCap?: string;
  /** Daily minimum looks for CPD deal types. For CPD deals, buyer should negotiate on this field instead of guaranteed_looks. */
  minimumDailyLooks?: string;
  /** The reservation type for a Programmatic Guaranteed deal. This indicates whether the number of impressions is fixed, or a percent of available impressions. If not specified, the default reservation type is STANDARD. */
  reservationType?:
    | "RESERVATION_TYPE_UNSPECIFIED"
    | "STANDARD"
    | "SPONSORSHIP"
    | (string & {});
  /** For sponsorship deals, this is the percentage of the seller's eligible impressions that the deal will serve until the cap is reached. Valid value is within range 0~100. */
  percentShareOfVoice?: string;
}

export const ProgrammaticGuaranteedTerms =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guaranteedLooks: Schema.optional(Schema.String),
    fixedPrice: Schema.optional(Price),
    impressionCap: Schema.optional(Schema.String),
    minimumDailyLooks: Schema.optional(Schema.String),
    reservationType: Schema.optional(Schema.String),
    percentShareOfVoice: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProgrammaticGuaranteedTerms" });

export interface MediaPlanner {
  /** Output only. Account ID of the media planner. */
  accountId?: string;
  /** Output only. The display name of the media planner. Can be used to filter the response of the mediaPlanners.list method. */
  displayName?: string;
  /** Output only. The ancestor names of the media planner. Format: `mediaPlanners/{mediaPlannerAccountId}` Can be used to filter the response of the mediaPlanners.list method. */
  ancestorNames?: ReadonlyArray<string>;
  /** Identifier. The unique resource name of the media planner. Format: `mediaPlanners/{mediaPlannerAccountId}` Can be used to filter the response of the mediaPlanners.list method. */
  name?: string;
}

export const MediaPlanner = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  ancestorNames: Schema.optional(Schema.Array(Schema.String)),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "MediaPlanner" });

export interface PreferredDealTerms {
  /** Fixed price for the deal. */
  fixedPrice?: Price;
}

export const PreferredDealTerms = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fixedPrice: Schema.optional(Price),
}).annotate({ identifier: "PreferredDealTerms" });

export interface TimeZone {
  /** IANA Time Zone Database time zone. For example "America/New_York". */
  id?: string;
  /** Optional. IANA Time Zone Database version number. For example "2019a". */
  version?: string;
}

export const TimeZone = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  version: Schema.optional(Schema.String),
}).annotate({ identifier: "TimeZone" });

export interface InventoryTypeTargeting {
  /** The list of targeted inventory types for the bid request. */
  inventoryTypes?: ReadonlyArray<
    | "INVENTORY_TYPE_UNSPECIFIED"
    | "BROWSER"
    | "MOBILE_APP"
    | "VIDEO_PLAYER"
    | (string & {})
  >;
}

export const InventoryTypeTargeting = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    inventoryTypes: Schema.optional(Schema.Array(Schema.String)),
  },
).annotate({ identifier: "InventoryTypeTargeting" });

export interface InventorySizeTargeting {
  /** A list of inventory sizes to be included. */
  targetedInventorySizes?: ReadonlyArray<AdSize>;
  /** A list of inventory sizes to be excluded. */
  excludedInventorySizes?: ReadonlyArray<AdSize>;
}

export const InventorySizeTargeting = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    targetedInventorySizes: Schema.optional(Schema.Array(AdSize)),
    excludedInventorySizes: Schema.optional(Schema.Array(AdSize)),
  },
).annotate({ identifier: "InventorySizeTargeting" });

export interface OperatingSystemTargeting {
  /** IDs of operating systems to be included/excluded. */
  operatingSystemCriteria?: CriteriaTargeting;
  /** IDs of operating system versions to be included/excluded. */
  operatingSystemVersionCriteria?: CriteriaTargeting;
}

export const OperatingSystemTargeting =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operatingSystemCriteria: Schema.optional(CriteriaTargeting),
    operatingSystemVersionCriteria: Schema.optional(CriteriaTargeting),
  }).annotate({ identifier: "OperatingSystemTargeting" });

export interface TechnologyTargeting {
  /** Operating system related targeting information. */
  operatingSystemTargeting?: OperatingSystemTargeting;
  /** IDs of device categories to be included/excluded. */
  deviceCategoryTargeting?: CriteriaTargeting;
  /** IDs of device capabilities to be included/excluded. */
  deviceCapabilityTargeting?: CriteriaTargeting;
}

export const TechnologyTargeting = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  operatingSystemTargeting: Schema.optional(OperatingSystemTargeting),
  deviceCategoryTargeting: Schema.optional(CriteriaTargeting),
  deviceCapabilityTargeting: Schema.optional(CriteriaTargeting),
}).annotate({ identifier: "TechnologyTargeting" });

export interface TimeOfDay {
  /** Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
  hours?: number;
  /** Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. */
  minutes?: number;
  /** Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. */
  nanos?: number;
  /** Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds. */
  seconds?: number;
}

export const TimeOfDay = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  hours: Schema.optional(Schema.Number),
  minutes: Schema.optional(Schema.Number),
  nanos: Schema.optional(Schema.Number),
  seconds: Schema.optional(Schema.Number),
}).annotate({ identifier: "TimeOfDay" });

export interface DayPart {
  /** Hours in 24 hour time between 0 and 24, inclusive. Note: 24 is logically equivalent to 0, but is supported since in some cases there may need to be differentiation made between midnight on one day and midnight on the next day. Accepted values for minutes are [0, 15, 30, 45]. 0 is the only acceptable minute value for hour 24. Seconds and nanos are ignored. */
  startTime?: TimeOfDay;
  /** Day of week for the period. */
  dayOfWeek?:
    | "DAY_OF_WEEK_UNSPECIFIED"
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY"
    | (string & {});
  /** Hours in 24 hour time between 0 and 24, inclusive. Note: 24 is logically equivalent to 0, but is supported since in some cases there may need to be differentiation made between midnight on one day and midnight on the next day. Accepted values for minutes are [0, 15, 30, 45]. 0 is the only acceptable minute value for hour 24. Seconds and nanos are ignored. */
  endTime?: TimeOfDay;
}

export const DayPart = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startTime: Schema.optional(TimeOfDay),
  dayOfWeek: Schema.optional(Schema.String),
  endTime: Schema.optional(TimeOfDay),
}).annotate({ identifier: "DayPart" });

export interface DayPartTargeting {
  /** The time zone type of the day parts */
  timeZoneType?:
    | "TIME_ZONE_TYPE_UNSPECIFIED"
    | "SELLER"
    | "USER"
    | (string & {});
  /** The targeted weekdays and times */
  dayParts?: ReadonlyArray<DayPart>;
}

export const DayPartTargeting = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  timeZoneType: Schema.optional(Schema.String),
  dayParts: Schema.optional(Schema.Array(DayPart)),
}).annotate({ identifier: "DayPartTargeting" });

export interface MobileApplicationTargeting {
  /** Publisher owned apps to be targeted or excluded by the publisher to display the ads in. */
  firstPartyTargeting?: FirstPartyMobileApplicationTargeting;
}

export const MobileApplicationTargeting =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firstPartyTargeting: Schema.optional(FirstPartyMobileApplicationTargeting),
  }).annotate({ identifier: "MobileApplicationTargeting" });

export interface PlacementTargeting {
  /** URLs to be included/excluded. */
  uriTargeting?: UriTargeting;
  /** Mobile application targeting information in a deal. This doesn't apply to Auction Packages. */
  mobileApplicationTargeting?: MobileApplicationTargeting;
}

export const PlacementTargeting = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uriTargeting: Schema.optional(UriTargeting),
  mobileApplicationTargeting: Schema.optional(MobileApplicationTargeting),
}).annotate({ identifier: "PlacementTargeting" });

export interface MarketplaceTargeting {
  /** Output only. Video targeting information. */
  videoTargeting?: VideoTargeting;
  /** Output only. Geo criteria IDs to be included/excluded. */
  geoTargeting?: CriteriaTargeting;
  /** Output only. Inventory type targeting information. */
  inventoryTypeTargeting?: InventoryTypeTargeting;
  /** Output only. Inventory sizes to be included/excluded. */
  inventorySizeTargeting?: InventorySizeTargeting;
  /** Output only. The sensitive content category label IDs excluded. Refer to this file https://storage.googleapis.com/adx-rtb-dictionaries/content-labels.txt for category IDs. */
  excludedSensitiveCategoryIds?: ReadonlyArray<string>;
  /** Output only. The verticals included or excluded as defined in https://developers.google.com/authorized-buyers/rtb/downloads/publisher-verticals */
  verticalTargeting?: CriteriaTargeting;
  /** Output only. Technology targeting information, for example, operating system, device category. */
  technologyTargeting?: TechnologyTargeting;
  /** Buyer user list targeting information. User lists can be uploaded using https://developers.google.com/authorized-buyers/rtb/bulk-uploader. */
  userListTargeting?: CriteriaTargeting;
  /** Daypart targeting information. */
  daypartTargeting?: DayPartTargeting;
  /** Output only. Placement targeting information, for example, URL, mobile applications. */
  placementTargeting?: PlacementTargeting;
}

export const MarketplaceTargeting = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  videoTargeting: Schema.optional(VideoTargeting),
  geoTargeting: Schema.optional(CriteriaTargeting),
  inventoryTypeTargeting: Schema.optional(InventoryTypeTargeting),
  inventorySizeTargeting: Schema.optional(InventorySizeTargeting),
  excludedSensitiveCategoryIds: Schema.optional(Schema.Array(Schema.String)),
  verticalTargeting: Schema.optional(CriteriaTargeting),
  technologyTargeting: Schema.optional(TechnologyTargeting),
  userListTargeting: Schema.optional(CriteriaTargeting),
  daypartTargeting: Schema.optional(DayPartTargeting),
  placementTargeting: Schema.optional(PlacementTargeting),
}).annotate({ identifier: "MarketplaceTargeting" });

export interface PrivateAuctionTerms {
  /** The minimum price buyer has to bid to compete in the private auction. */
  floorPrice?: Price;
  /** Output only. True if open auction buyers are allowed to compete with invited buyers in this private auction. */
  openAuctionAllowed?: boolean;
}

export const PrivateAuctionTerms = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  floorPrice: Schema.optional(Price),
  openAuctionAllowed: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "PrivateAuctionTerms" });

export interface CreativeRequirements {
  /** Output only. The max duration of the video creative in milliseconds. only applicable for deals with video creatives. */
  maxAdDurationMs?: string;
  /** Output only. Skippable video ads allow viewers to skip ads after 5 seconds. Only applicable for deals with video creatives. */
  skippableAdType?:
    | "SKIPPABLE_AD_TYPE_UNSPECIFIED"
    | "SKIPPABLE"
    | "INSTREAM_SELECT"
    | "NOT_SKIPPABLE"
    | "ANY"
    | (string & {});
  /** Output only. Specifies the creative pre-approval policy. */
  creativePreApprovalPolicy?:
    | "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED"
    | "SELLER_PRE_APPROVAL_REQUIRED"
    | "SELLER_PRE_APPROVAL_NOT_REQUIRED"
    | (string & {});
  /** Output only. Specifies whether the creative is safeFrame compatible. */
  creativeSafeFrameCompatibility?:
    | "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED"
    | "COMPATIBLE"
    | "INCOMPATIBLE"
    | (string & {});
  /** Output only. Specifies the creative source for programmatic deals. PUBLISHER means creative is provided by seller and ADVERTISER means creative is provided by the buyer. */
  programmaticCreativeSource?:
    | "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED"
    | "ADVERTISER"
    | "PUBLISHER"
    | (string & {});
  /** Output only. The format of the creative, only applicable for programmatic guaranteed and preferred deals. */
  creativeFormat?:
    | "CREATIVE_FORMAT_UNSPECIFIED"
    | "DISPLAY"
    | "VIDEO"
    | "AUDIO"
    | (string & {});
}

export const CreativeRequirements = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  maxAdDurationMs: Schema.optional(Schema.String),
  skippableAdType: Schema.optional(Schema.String),
  creativePreApprovalPolicy: Schema.optional(Schema.String),
  creativeSafeFrameCompatibility: Schema.optional(Schema.String),
  programmaticCreativeSource: Schema.optional(Schema.String),
  creativeFormat: Schema.optional(Schema.String),
}).annotate({ identifier: "CreativeRequirements" });

export interface Deal {
  /** The terms for programmatic guaranteed deals. */
  programmaticGuaranteedTerms?: ProgrammaticGuaranteedTerms;
  /** Output only. The revision number for the proposal and is the same value as proposal.proposal_revision. Each update to deal causes the proposal revision number to auto-increment. The buyer keeps track of the last revision number they know of and pass it in when making an update. If the head revision number on the server has since incremented, then an ABORTED error is returned during the update operation to let the buyer know that a subsequent update was made. */
  proposalRevision?: string;
  /** Output only. When the client field is populated, this field refers to the buyer who creates and manages the client buyer and gets billed on behalf of the client buyer; when the buyer field is populated, this field is the same value as buyer; when the deal belongs to a media planner account, this field will be empty. Format : `buyers/{buyerAccountId}` */
  billedBuyer?: string;
  /** Output only. Refers to a buyer in Real-time Bidding API's Buyer resource. Format: `buyers/{buyerAccountId}` */
  buyer?: string;
  /** Output only. Refers to a buyer in Real-time Bidding API's Buyer resource. This field represents a media planner (For example, agency or big advertiser). */
  mediaPlanner?: MediaPlanner;
  /** Output only. The time when the deal was last updated. */
  updateTime?: string;
  /** Proposed flight start time of the deal. This will generally be stored in the granularity of one second since deal serving starts at seconds boundary. Any time specified with more granularity (for example, in milliseconds) will be truncated towards the start of time in seconds. */
  flightStartTime?: string;
  /** The terms for preferred deals. */
  preferredDealTerms?: PreferredDealTerms;
  /** Output only. If set, this field contains the list of DSP specific seat ids set by media planners that are eligible to transact on this deal. The seat ID is in the calling DSP's namespace. */
  eligibleSeatIds?: ReadonlyArray<string>;
  /** Output only. The name of the deal. Maximum length of 255 unicode characters is allowed. Control characters are not allowed. Buyers cannot update this field. Note: Not to be confused with name, which is a unique identifier of the deal. */
  displayName?: string;
  /** Output only. Time zone of the seller used to mark the boundaries of a day for daypart targeting and CPD billing. */
  sellerTimeZone?: TimeZone;
  /** Output only. Refers to a Client. Format: `buyers/{buyerAccountId}/clients/{clientAccountid}` */
  client?: string;
  /** Output only. Specifies the pacing set by the publisher. */
  deliveryControl?: DeliveryControl;
  /** Output only. The buyer permission type of the deal. */
  buyerPermissionType?:
    | "BUYER_PERMISSION_TYPE_UNSPECIFIED"
    | "NEGOTIATOR_ONLY"
    | "BIDDER"
    | (string & {});
  /** Specifies the subset of inventory targeted by the deal. Can be updated by the buyer before the deal is finalized. */
  targeting?: MarketplaceTargeting;
  /** Immutable. Reference to the seller on the deal. Format: `buyers/{buyerAccountId}/publisherProfiles/{publisherProfileId}` */
  publisherProfile?: string;
  /** Output only. Type of deal. */
  dealType?:
    | "DEAL_TYPE_UNSPECIFIED"
    | "PREFERRED_DEAL"
    | "PRIVATE_AUCTION"
    | "PROGRAMMATIC_GUARANTEED"
    | (string & {});
  /** The terms for private auction deals. */
  privateAuctionTerms?: PrivateAuctionTerms;
  /** Output only. Free text description for the deal terms. */
  description?: string;
  /** Output only. The time of the deal creation. */
  createTime?: string;
  /** Specified by buyers in request for proposal (RFP) to notify publisher the total estimated spend for the proposal. Publishers will receive this information and send back proposed deals accordingly. */
  estimatedGrossSpend?: Money;
  /** Immutable. The unique identifier of the deal. Auto-generated by the server when a deal is created. Format: buyers/{accountId}/proposals/{proposalId}/deals/{dealId} */
  name?: string;
  /** Proposed flight end time of the deal. This will generally be stored in a granularity of a second. A value is not necessary for Private Auction deals. */
  flightEndTime?: string;
  /** Output only. Metadata about the creatives of this deal. */
  creativeRequirements?: CreativeRequirements;
}

export const Deal = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  programmaticGuaranteedTerms: Schema.optional(ProgrammaticGuaranteedTerms),
  proposalRevision: Schema.optional(Schema.String),
  billedBuyer: Schema.optional(Schema.String),
  buyer: Schema.optional(Schema.String),
  mediaPlanner: Schema.optional(MediaPlanner),
  updateTime: Schema.optional(Schema.String),
  flightStartTime: Schema.optional(Schema.String),
  preferredDealTerms: Schema.optional(PreferredDealTerms),
  eligibleSeatIds: Schema.optional(Schema.Array(Schema.String)),
  displayName: Schema.optional(Schema.String),
  sellerTimeZone: Schema.optional(TimeZone),
  client: Schema.optional(Schema.String),
  deliveryControl: Schema.optional(DeliveryControl),
  buyerPermissionType: Schema.optional(Schema.String),
  targeting: Schema.optional(MarketplaceTargeting),
  publisherProfile: Schema.optional(Schema.String),
  dealType: Schema.optional(Schema.String),
  privateAuctionTerms: Schema.optional(PrivateAuctionTerms),
  description: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  estimatedGrossSpend: Schema.optional(Money),
  name: Schema.optional(Schema.String),
  flightEndTime: Schema.optional(Schema.String),
  creativeRequirements: Schema.optional(CreativeRequirements),
}).annotate({ identifier: "Deal" });

export interface FinalizedDeal {
  /** Information related to deal pausing for the deal. */
  dealPausingInfo?: DealPausingInfo;
  /** Real-time bidding metrics for this deal. */
  rtbMetrics?: RtbMetrics;
  /** A copy of the Deal made upon finalization. During renegotiation, this will reflect the last finalized deal before renegotiation was initiated. */
  deal?: Deal;
  /** Serving status of the deal. */
  dealServingStatus?:
    | "DEAL_SERVING_STATUS_UNSPECIFIED"
    | "ACTIVE"
    | "ENDED"
    | "PAUSED_BY_BUYER"
    | "PAUSED_BY_SELLER"
    | (string & {});
  /** Whether the Programmatic Guaranteed deal is ready for serving. */
  readyToServe?: boolean;
  /** The resource name of the finalized deal. Format: `buyers/{accountId}/finalizedDeals/{finalizedDealId}` */
  name?: string;
}

export const FinalizedDeal = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dealPausingInfo: Schema.optional(DealPausingInfo),
  rtbMetrics: Schema.optional(RtbMetrics),
  deal: Schema.optional(Deal),
  dealServingStatus: Schema.optional(Schema.String),
  readyToServe: Schema.optional(Schema.Boolean),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "FinalizedDeal" });

export interface PrivateData {
  /** A buyer specified reference ID. This can be queried in the list operations (max-length: 1024 unicode code units). */
  referenceId?: string;
}

export const PrivateData = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  referenceId: Schema.optional(Schema.String),
}).annotate({ identifier: "PrivateData" });

export interface Contact {
  /** Email address for the contact. */
  email?: string;
  /** The display_name of the contact. */
  displayName?: string;
}

export const Contact = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  email: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
}).annotate({ identifier: "Contact" });

export interface Note {
  /** Output only. The role who created the note. */
  creatorRole?:
    | "BUYER_SELLER_ROLE_UNSPECIFIED"
    | "BUYER"
    | "SELLER"
    | (string & {});
  /** Output only. When this note was created. */
  createTime?: string;
  /** The text of the note. Maximum length is 1024 characters. */
  note?: string;
}

export const Note = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  creatorRole: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  note: Schema.optional(Schema.String),
}).annotate({ identifier: "Note" });

export interface Proposal {
  /** Output only. Type of deal the proposal contains. */
  dealType?:
    | "DEAL_TYPE_UNSPECIFIED"
    | "PREFERRED_DEAL"
    | "PRIVATE_AUCTION"
    | "PROGRAMMATIC_GUARANTEED"
    | (string & {});
  /** Buyer private data (hidden from seller). */
  buyerPrivateData?: PrivateData;
  /** Immutable. Reference to the seller on the proposal. Format: `buyers/{buyerAccountId}/publisherProfiles/{publisherProfileId}` Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error. */
  publisherProfile?: string;
  /** Output only. Indicates the state of the proposal. */
  state?:
    | "STATE_UNSPECIFIED"
    | "BUYER_REVIEW_REQUESTED"
    | "SELLER_REVIEW_REQUESTED"
    | "BUYER_ACCEPTANCE_REQUESTED"
    | "FINALIZED"
    | "TERMINATED"
    | (string & {});
  /** Whether pausing is allowed for the proposal. This is a negotiable term between buyers and publishers. */
  pausingConsented?: boolean;
  /** Output only. Indicates whether the buyer/seller created the proposal. */
  originatorRole?:
    | "BUYER_SELLER_ROLE_UNSPECIFIED"
    | "BUYER"
    | "SELLER"
    | (string & {});
  /** Immutable. The name of the proposal serving as a unique identifier. Format: buyers/{accountId}/proposals/{proposalId} */
  name?: string;
  /** Contact information for the buyer. */
  buyerContacts?: ReadonlyArray<Contact>;
  /** Output only. When the client field is populated, this field refers to the buyer who creates and manages the client buyer and gets billed on behalf of the client buyer; when the buyer field is populated, this field is the same value as buyer. Format : `buyers/{buyerAccountId}` */
  billedBuyer?: string;
  /** Output only. Contact information for the seller. */
  sellerContacts?: ReadonlyArray<Contact>;
  /** Output only. The revision number for the proposal. Each update to the proposal or deal causes the proposal revision number to auto-increment. The buyer keeps track of the last revision number they know of and pass it in when making an update. If the head revision number on the server has since incremented, then an ABORTED error is returned during the update operation to let the buyer know that a subsequent update was made. */
  proposalRevision?: string;
  /** Output only. The descriptive name for the proposal. Maximum length of 255 unicode characters is allowed. Control characters are not allowed. Buyers cannot update this field. Note: Not to be confused with name, which is a unique identifier of the proposal. */
  displayName?: string;
  /** A list of notes from the buyer and the seller attached to this proposal. */
  notes?: ReadonlyArray<Note>;
  /** Output only. Refers to a Client. Format: `buyers/{buyerAccountId}/clients/{clientAccountid}` */
  client?: string;
  /** Output only. The time when the proposal was last revised. */
  updateTime?: string;
  /** Output only. The role of the last user that either updated the proposal or left a comment. */
  lastUpdaterOrCommentorRole?:
    | "BUYER_SELLER_ROLE_UNSPECIFIED"
    | "BUYER"
    | "SELLER"
    | (string & {});
  /** Output only. Refers to a buyer in The Realtime-bidding API. Format: `buyers/{buyerAccountId}` */
  buyer?: string;
  /** Output only. True if the proposal was previously finalized and is now being renegotiated. */
  isRenegotiating?: boolean;
  /** Output only. The terms and conditions associated with this proposal. Accepting a proposal implies acceptance of this field. This is created by the seller, the buyer can only view it. */
  termsAndConditions?: string;
}

export const Proposal = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dealType: Schema.optional(Schema.String),
  buyerPrivateData: Schema.optional(PrivateData),
  publisherProfile: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  pausingConsented: Schema.optional(Schema.Boolean),
  originatorRole: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  buyerContacts: Schema.optional(Schema.Array(Contact)),
  billedBuyer: Schema.optional(Schema.String),
  sellerContacts: Schema.optional(Schema.Array(Contact)),
  proposalRevision: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  notes: Schema.optional(Schema.Array(Note)),
  client: Schema.optional(Schema.String),
  updateTime: Schema.optional(Schema.String),
  lastUpdaterOrCommentorRole: Schema.optional(Schema.String),
  buyer: Schema.optional(Schema.String),
  isRenegotiating: Schema.optional(Schema.Boolean),
  termsAndConditions: Schema.optional(Schema.String),
}).annotate({ identifier: "Proposal" });

export interface ListProposalsResponse {
  /** The list of proposals. */
  proposals?: ReadonlyArray<Proposal>;
  /** Continuation token for fetching the next page of results. */
  nextPageToken?: string;
}

export const ListProposalsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  proposals: Schema.optional(Schema.Array(Proposal)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListProposalsResponse" });

export interface PublisherProfileMobileApplication {
  /** The name of the app. */
  name?: string;
  /** The external ID for the app from its app store. Can be used to filter the response of the publisherProfiles.list method. */
  externalAppId?: string;
  /** The app store the app belongs to. Can be used to filter the response of the publisherProfiles.list method. */
  appStore?:
    | "APP_STORE_TYPE_UNSPECIFIED"
    | "APPLE_ITUNES"
    | "GOOGLE_PLAY"
    | "ROKU"
    | "AMAZON_FIRE_TV"
    | "PLAYSTATION"
    | "XBOX"
    | "SAMSUNG_TV"
    | "AMAZON"
    | "OPPO"
    | "SAMSUNG"
    | "VIVO"
    | "XIAOMI"
    | "LG_TV"
    | (string & {});
}

export const PublisherProfileMobileApplication =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    externalAppId: Schema.optional(Schema.String),
    appStore: Schema.optional(Schema.String),
  }).annotate({ identifier: "PublisherProfileMobileApplication" });

export interface Client {
  /** Output only. The resource name of the client. Format: `buyers/{accountId}/clients/{clientAccountId}` */
  name?: string;
  /** Required. The role assigned to the client. Each role implies a set of permissions granted to the client. */
  role?:
    | "CLIENT_ROLE_UNSPECIFIED"
    | "CLIENT_DEAL_VIEWER"
    | "CLIENT_DEAL_NEGOTIATOR"
    | "CLIENT_DEAL_APPROVER"
    | (string & {});
  /** Required. Display name shown to publishers. Must be unique for clients without partnerClientId specified. Maximum length of 255 characters is allowed. */
  displayName?: string;
  /** Whether the client will be visible to sellers. */
  sellerVisible?: boolean;
  /** Output only. The state of the client. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
  /** Arbitrary unique identifier provided by the buyer. This field can be used to associate a client with an identifier in the namespace of the buyer, lookup clients by that identifier and verify whether an Authorized Buyers account of the client already exists. If present, must be unique across all the clients. */
  partnerClientId?: string;
}

export const Client = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  role: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  sellerVisible: Schema.optional(Schema.Boolean),
  state: Schema.optional(Schema.String),
  partnerClientId: Schema.optional(Schema.String),
}).annotate({ identifier: "Client" });

export interface ListClientsResponse {
  /** A token to retrieve the next page of results. Pass this value in the ListClientsRequest.pageToken field in the subsequent call to the list method to retrieve the next page of results. */
  nextPageToken?: string;
  /** The returned list of clients. */
  clients?: ReadonlyArray<Client>;
}

export const ListClientsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextPageToken: Schema.optional(Schema.String),
  clients: Schema.optional(Schema.Array(Client)),
}).annotate({ identifier: "ListClientsResponse" });

export interface PauseFinalizedDealRequest {
  /** The reason to pause the finalized deal, will be displayed to the seller. Maximum length is 1000 characters. */
  reason?: string;
}

export const PauseFinalizedDealRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reason: Schema.optional(Schema.String),
  }).annotate({ identifier: "PauseFinalizedDealRequest" });

export interface SetReadyToServeRequest {}

export const SetReadyToServeRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "SetReadyToServeRequest" });

export interface DeactivateClientRequest {}

export const DeactivateClientRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DeactivateClientRequest",
  });

export interface PublisherProfile {
  /** Statement explaining what's unique about publisher's business, and why buyers should partner with the publisher. */
  pitchStatement?: string;
  /** Display name of the publisher profile. Can be used to filter the response of the publisherProfiles.list method. */
  displayName?: string;
  /** URL to additional marketing and sales materials. */
  mediaKitUrl?: string;
  /** A unique identifying code for the seller. This value is the same for all of the seller's parent and child publisher profiles. Can be used to filter the response of the publisherProfiles.list method. */
  publisherCode?: string;
  /** Overview of the publisher. */
  overview?: string;
  /** Description on the publisher's audience. */
  audienceDescription?: string;
  /** A Google public URL to the logo for this publisher profile. The logo is stored as a PNG, JPG, or GIF image. */
  logoUrl?: string;
  /** URL to a sample content page. */
  samplePageUrl?: string;
  /** Indicates if this profile is the parent profile of the seller. A parent profile represents all the inventory from the seller, as opposed to child profile that is created to brand a portion of inventory. One seller has only one parent publisher profile, and can have multiple child profiles. See https://support.google.com/admanager/answer/6035806 for details. Can be used to filter the response of the publisherProfiles.list method by setting the filter to "is_parent: true". */
  isParent?: boolean;
  /** The list of domains represented in this publisher profile. Empty if this is a parent profile. These are top private domains, meaning that these will not contain a string like "photos.google.co.uk/123", but will instead contain "google.co.uk". Can be used to filter the response of the publisherProfiles.list method. */
  domains?: ReadonlyArray<string>;
  /** Contact information for programmatic deals. This is free text entered by the publisher and may include information like names, phone numbers and email addresses. */
  programmaticDealsContact?: string;
  /** The list of apps represented in this publisher profile. Empty if this is a parent profile. */
  mobileApps?: ReadonlyArray<PublisherProfileMobileApplication>;
  /** Name of the publisher profile. Format: `buyers/{buyer}/publisherProfiles/{publisher_profile}` */
  name?: string;
  /** Contact information for direct reservation deals. This is free text entered by the publisher and may include information like names, phone numbers and email addresses. */
  directDealsContact?: string;
  /** Up to three key metrics and rankings. For example, "#1 Mobile News Site for 20 Straight Months". */
  topHeadlines?: ReadonlyArray<string>;
}

export const PublisherProfile = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pitchStatement: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  mediaKitUrl: Schema.optional(Schema.String),
  publisherCode: Schema.optional(Schema.String),
  overview: Schema.optional(Schema.String),
  audienceDescription: Schema.optional(Schema.String),
  logoUrl: Schema.optional(Schema.String),
  samplePageUrl: Schema.optional(Schema.String),
  isParent: Schema.optional(Schema.Boolean),
  domains: Schema.optional(Schema.Array(Schema.String)),
  programmaticDealsContact: Schema.optional(Schema.String),
  mobileApps: Schema.optional(Schema.Array(PublisherProfileMobileApplication)),
  name: Schema.optional(Schema.String),
  directDealsContact: Schema.optional(Schema.String),
  topHeadlines: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "PublisherProfile" });

export interface ListPublisherProfilesResponse {
  /** The list of matching publisher profiles. */
  publisherProfiles?: ReadonlyArray<PublisherProfile>;
  /** Token to fetch the next page of results. */
  nextPageToken?: string;
}

export const ListPublisherProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    publisherProfiles: Schema.optional(Schema.Array(PublisherProfile)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListPublisherProfilesResponse" });

export interface UpdateDealRequest {
  /** Required. The deal to update. The deal's `name` field is used to identify the deal to be updated. Note: proposal_revision will have to be provided within the resource or else an error will be thrown. Format: buyers/{accountId}/proposals/{proposalId}/deals/{dealId} */
  deal?: Deal;
  /** List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask. */
  updateMask?: string;
}

export const UpdateDealRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  deal: Schema.optional(Deal),
  updateMask: Schema.optional(Schema.String),
}).annotate({ identifier: "UpdateDealRequest" });

export interface DataSegment {
  /** Output only. Time the data segment was created. */
  createTime?: string;
  /** Output only. Time the data segment was last updated. */
  updateTime?: string;
  /** Output only. The state of the data segment. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
  /** Optional. A fixed fee charged per thousand impressions. Once set, the currency code cannot be changed. */
  cpmFee?: Money;
  /** Immutable. Identifier. The unique identifier for the data segment. Account ID corresponds to the account ID that created the segment. v1alpha format: `buyers/{accountId}/dataSegments/{curatorDataSegmentId}` v1beta format: `curators/{curatorAccountId}/dataSegments/{curatorDataSegmentId}` */
  name?: string;
}

export const DataSegment = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createTime: Schema.optional(Schema.String),
  updateTime: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  cpmFee: Schema.optional(Money),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "DataSegment" });

export interface CancelNegotiationRequest {}

export const CancelNegotiationRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelNegotiationRequest",
  });

export interface DeactivateClientUserRequest {}

export const DeactivateClientUserRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DeactivateClientUserRequest",
  });

export interface SendRfpRequest {
  /** Required. The display name of the proposal being created by this RFP. */
  displayName?: string;
  /** A message that is sent to the publisher. Maximum length is 1024 characters. */
  note?: string;
  /** Required. Proposed flight end time of the RFP. A timestamp in RFC3339 UTC "Zulu" format. Note that the specified value will be truncated to a granularity of one second. */
  flightEndTime?: string;
  /** If the current buyer is sending the RFP on behalf of its client, use this field to specify the name of the client in the format: `buyers/{accountId}/clients/{clientAccountid}`. */
  client?: string;
  /** Required. Proposed flight start time of the RFP. A timestamp in RFC3339 UTC "Zulu" format. Note that the specified value will be truncated to a granularity of one second. */
  flightStartTime?: string;
  /** The terms for preferred deals. */
  preferredDealTerms?: PreferredDealTerms;
  /** Contact information for the buyer. */
  buyerContacts?: ReadonlyArray<Contact>;
  /** Specified by buyers in request for proposal (RFP) to notify publisher the total estimated spend for the proposal. Publishers will receive this information and send back proposed deals accordingly. */
  estimatedGrossSpend?: Money;
  /** Inventory sizes to be targeted. Only PIXEL inventory size type is supported. */
  inventorySizeTargeting?: InventorySizeTargeting;
  /** Required. The profile of the publisher who will receive this RFP in the format: `buyers/{accountId}/publisherProfiles/{publisherProfileId}`. */
  publisherProfile?: string;
  /** Geo criteria IDs to be targeted. Refer to Geo tables. */
  geoTargeting?: CriteriaTargeting;
  /** The terms for programmatic guaranteed deals. */
  programmaticGuaranteedTerms?: ProgrammaticGuaranteedTerms;
}

export const SendRfpRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  displayName: Schema.optional(Schema.String),
  note: Schema.optional(Schema.String),
  flightEndTime: Schema.optional(Schema.String),
  client: Schema.optional(Schema.String),
  flightStartTime: Schema.optional(Schema.String),
  preferredDealTerms: Schema.optional(PreferredDealTerms),
  buyerContacts: Schema.optional(Schema.Array(Contact)),
  estimatedGrossSpend: Schema.optional(Money),
  inventorySizeTargeting: Schema.optional(InventorySizeTargeting),
  publisherProfile: Schema.optional(Schema.String),
  geoTargeting: Schema.optional(CriteriaTargeting),
  programmaticGuaranteedTerms: Schema.optional(ProgrammaticGuaranteedTerms),
}).annotate({ identifier: "SendRfpRequest" });

export interface ActivateCuratedPackageRequest {}

export const ActivateCuratedPackageRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ActivateCuratedPackageRequest",
  });

export interface ListDealsResponse {
  /** The list of deals. */
  deals?: ReadonlyArray<Deal>;
  /** Token to fetch the next page of results. */
  nextPageToken?: string;
}

export const ListDealsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  deals: Schema.optional(Schema.Array(Deal)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListDealsResponse" });

export interface ListMediaPlannersResponse {
  /** List of media planners. */
  mediaPlanners?: ReadonlyArray<MediaPlanner>;
  /** A token which can be passed to a subsequent call to the `ListMediaPlanners` method to retrieve the next page of results in ListMediaPlannersRequest.pageToken. */
  nextPageToken?: string;
}

export const ListMediaPlannersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mediaPlanners: Schema.optional(Schema.Array(MediaPlanner)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListMediaPlannersResponse" });

export interface DeactivateDataSegmentRequest {}

export const DeactivateDataSegmentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DeactivateDataSegmentRequest",
  });

export interface ResumeFinalizedDealRequest {}

export const ResumeFinalizedDealRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ResumeFinalizedDealRequest",
  });

export interface ActivateClientRequest {}

export const ActivateClientRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "ActivateClientRequest" });

export interface ClientUser {
  /** Required. The client user's email address that has to be unique across all users for the same client. */
  email?: string;
  /** Output only. The resource name of the client user. Format: `buyers/{accountId}/clients/{clientAccountId}/users/{userId}` */
  name?: string;
  /** Output only. The state of the client user. */
  state?:
    | "STATE_UNSPECIFIED"
    | "INVITED"
    | "ACTIVE"
    | "INACTIVE"
    | (string & {});
}

export const ClientUser = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  email: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
}).annotate({ identifier: "ClientUser" });

export interface ListClientUsersResponse {
  /** The returned list of client users. */
  clientUsers?: ReadonlyArray<ClientUser>;
  /** A token to retrieve the next page of results. Pass this value in the ListClientUsersRequest.pageToken field in the subsequent call to the list method to retrieve the next page of results. */
  nextPageToken?: string;
}

export const ListClientUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientUsers: Schema.optional(Schema.Array(ClientUser)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListClientUsersResponse" });

export interface SubscribeClientsRequest {
  /** Optional. A list of client buyers to subscribe to the auction package, with client buyer in the format `buyers/{accountId}/clients/{clientAccountId}`. The current buyer will be subscribed to the auction package regardless of the list contents if not already. */
  clients?: ReadonlyArray<string>;
}

export const SubscribeClientsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clients: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "SubscribeClientsRequest" });

export interface ListFinalizedDealsResponse {
  /** Token to fetch the next page of results. */
  nextPageToken?: string;
  /** The list of finalized deals. */
  finalizedDeals?: ReadonlyArray<FinalizedDeal>;
}

export const ListFinalizedDealsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    finalizedDeals: Schema.optional(Schema.Array(FinalizedDeal)),
  }).annotate({ identifier: "ListFinalizedDealsResponse" });

export interface ActivateClientUserRequest {}

export const ActivateClientUserRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ActivateClientUserRequest",
  });

export interface AddCreativeRequest {
  /** Name of the creative to add to the finalized deal, in the format `buyers/{buyerAccountId}/creatives/{creativeId}`. See creative.name. */
  creative?: string;
}

export const AddCreativeRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  creative: Schema.optional(Schema.String),
}).annotate({ identifier: "AddCreativeRequest" });

export interface ActivateDataSegmentRequest {}

export const ActivateDataSegmentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ActivateDataSegmentRequest",
  });

export interface AuctionPackage {
  /** Output only. A description of the auction package. */
  description?: string;
  /** Output only. The buyer that created this auction package. Format: `buyers/{buyerAccountId}` */
  creator?: string;
  /** Output only. Time the auction package was created. */
  createTime?: string;
  /** Output only. Time the auction package was last updated. This value is only increased when this auction package is updated but never when a buyer subscribed. */
  updateTime?: string;
  /** Output only. When calling as a buyer, the list of clients of the current buyer that are subscribed to the AuctionPackage. When calling as a bidder, the list of clients that are subscribed to the AuctionPackage owned by the bidder or its buyers. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}` */
  subscribedClients?: ReadonlyArray<string>;
  /** Output only. If set, this field identifies a seat that the media planner selected as the owner of this auction package. This is a seat ID in the DSP's namespace that was provided to the media planner. */
  eligibleSeatIds?: ReadonlyArray<string>;
  /** The display_name assigned to the auction package. */
  displayName?: string;
  /** Immutable. The unique identifier for the auction package. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}` The auction_package_id part of name is sent in the BidRequest to all RTB bidders and is returned as deal_id by the bidder in the BidResponse. */
  name?: string;
  /** Output only. If set, this field contains the DSP specific seat id set by the media planner account that is considered the owner of this deal. The seat ID is in the calling DSP's namespace. */
  dealOwnerSeatId?: string;
  /** Output only. The list of media planners that are subscribed to the AuctionPackage. This field is only populated when calling as a bidder. */
  subscribedMediaPlanners?: ReadonlyArray<MediaPlanner>;
  /** Output only. The list of buyers that are subscribed to the AuctionPackage. This field is only populated when calling as a bidder. Format: `buyers/{buyerAccountId}` */
  subscribedBuyers?: ReadonlyArray<string>;
  /** Output only. The minimum price a buyer has to bid to compete in this auction package. If this is field is not populated, there is no floor price. */
  floorPriceCpm?: Money;
}

export const AuctionPackage = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  description: Schema.optional(Schema.String),
  creator: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  updateTime: Schema.optional(Schema.String),
  subscribedClients: Schema.optional(Schema.Array(Schema.String)),
  eligibleSeatIds: Schema.optional(Schema.Array(Schema.String)),
  displayName: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  dealOwnerSeatId: Schema.optional(Schema.String),
  subscribedMediaPlanners: Schema.optional(Schema.Array(MediaPlanner)),
  subscribedBuyers: Schema.optional(Schema.Array(Schema.String)),
  floorPriceCpm: Schema.optional(Money),
}).annotate({ identifier: "AuctionPackage" });

export interface AcceptProposalRequest {
  /** The last known client revision number of the proposal. */
  proposalRevision?: string;
}

export const AcceptProposalRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  proposalRevision: Schema.optional(Schema.String),
}).annotate({ identifier: "AcceptProposalRequest" });

export interface AddNoteRequest {
  /** The note to add. */
  note?: Note;
}

export const AddNoteRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  note: Schema.optional(Note),
}).annotate({ identifier: "AddNoteRequest" });

export interface BatchUpdateDealsResponse {
  /** Deals updated. */
  deals?: ReadonlyArray<Deal>;
}

export const BatchUpdateDealsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deals: Schema.optional(Schema.Array(Deal)),
  }).annotate({ identifier: "BatchUpdateDealsResponse" });

export interface ListDataSegmentsResponse {
  /** The list of data segments. */
  dataSegments?: ReadonlyArray<DataSegment>;
  /** Continuation token for fetching the next page of results. Pass this value in the ListDataSegmentsRequest.pageToken field in the subsequent call to the `ListDataSegments` method to retrieve the next page of results. */
  nextPageToken?: string;
}

export const ListDataSegmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataSegments: Schema.optional(Schema.Array(DataSegment)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDataSegmentsResponse" });

export interface Empty {}

export const Empty = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
  identifier: "Empty",
});

export interface UnsubscribeClientsRequest {
  /** Optional. A list of client buyers to unsubscribe from the auction package, with client buyer in the format `buyers/{accountId}/clients/{clientAccountId}`. */
  clients?: ReadonlyArray<string>;
}

export const UnsubscribeClientsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clients: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "UnsubscribeClientsRequest" });

export interface ListAuctionPackagesResponse {
  /** The list of auction packages. */
  auctionPackages?: ReadonlyArray<AuctionPackage>;
  /** Continuation token for fetching the next page of results. Pass this value in the ListAuctionPackagesRequest.pageToken field in the subsequent call to the `ListAuctionPackages` method to retrieve the next page of results. */
  nextPageToken?: string;
}

export const ListAuctionPackagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    auctionPackages: Schema.optional(Schema.Array(AuctionPackage)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAuctionPackagesResponse" });

export interface UnsubscribeAuctionPackageRequest {}

export const UnsubscribeAuctionPackageRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "UnsubscribeAuctionPackageRequest",
  });

export interface BatchUpdateDealsRequest {
  /** Required. List of request messages to update deals. */
  requests?: ReadonlyArray<UpdateDealRequest>;
}

export const BatchUpdateDealsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requests: Schema.optional(Schema.Array(UpdateDealRequest)),
  }).annotate({ identifier: "BatchUpdateDealsRequest" });

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

export interface CreateBuyersDataSegmentsRequest {
  /** Required. The parent resource where this data segment will be created. v1alpha format: `buyers/{accountId}` v1beta format: `curators/{accountId}` */
  parent: string;
  /** Request body */
  body?: DataSegment;
}

export const CreateBuyersDataSegmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(DataSegment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{parent}/dataSegments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateBuyersDataSegmentsRequest>;

export type CreateBuyersDataSegmentsResponse = DataSegment;
export const CreateBuyersDataSegmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DataSegment;

export type CreateBuyersDataSegmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a data segment owned by the listed curator. The data segment will be created in the `ACTIVE` state, meaning it will be immediately available for buyers to use in preferred deals, private auction deals, and auction packages. */
export const createBuyersDataSegments: API.OperationMethod<
  CreateBuyersDataSegmentsRequest,
  CreateBuyersDataSegmentsResponse,
  CreateBuyersDataSegmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateBuyersDataSegmentsRequest,
  output: CreateBuyersDataSegmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetBuyersDataSegmentsRequest {
  /** Required. Name of data segment to get. v1alpha format: `buyers/{accountId}/dataSegments/{curatorDataSegmentId}` v1beta format: `curators/{accountId}/dataSegments/{curatorDataSegmentId}` */
  name: string;
}

export const GetBuyersDataSegmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetBuyersDataSegmentsRequest>;

export type GetBuyersDataSegmentsResponse = DataSegment;
export const GetBuyersDataSegmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DataSegment;

export type GetBuyersDataSegmentsError = DefaultErrors | NotFound | Forbidden;

/** Gets a data segment given its name. */
export const getBuyersDataSegments: API.OperationMethod<
  GetBuyersDataSegmentsRequest,
  GetBuyersDataSegmentsResponse,
  GetBuyersDataSegmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBuyersDataSegmentsRequest,
  output: GetBuyersDataSegmentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchBuyersDataSegmentsRequest {
  /** Immutable. Identifier. The unique identifier for the data segment. Account ID corresponds to the account ID that created the segment. v1alpha format: `buyers/{accountId}/dataSegments/{curatorDataSegmentId}` v1beta format: `curators/{curatorAccountId}/dataSegments/{curatorDataSegmentId}` */
  name: string;
  /** Optional. List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask. */
  updateMask?: string;
  /** Request body */
  body?: DataSegment;
}

export const PatchBuyersDataSegmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(DataSegment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchBuyersDataSegmentsRequest>;

export type PatchBuyersDataSegmentsResponse = DataSegment;
export const PatchBuyersDataSegmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DataSegment;

export type PatchBuyersDataSegmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a data segment. */
export const patchBuyersDataSegments: API.OperationMethod<
  PatchBuyersDataSegmentsRequest,
  PatchBuyersDataSegmentsResponse,
  PatchBuyersDataSegmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchBuyersDataSegmentsRequest,
  output: PatchBuyersDataSegmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListBuyersDataSegmentsRequest {
  /** Required. Name of the parent curator that can access the data segment. v1alpha format: `buyers/{accountId}` v1beta format: `curators/{accountId}` */
  parent: string;
  /** Optional. Requested page size. The server may return fewer results than requested. Max allowed page size is 500. If unspecified, the server will default to 500. */
  pageSize?: number;
  /** Optional. The page token as returned. ListDataSegmentsResponse.nextPageToken */
  pageToken?: string;
}

export const ListBuyersDataSegmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{parent}/dataSegments" }),
    svc,
  ) as unknown as Schema.Schema<ListBuyersDataSegmentsRequest>;

export type ListBuyersDataSegmentsResponse = ListDataSegmentsResponse;
export const ListBuyersDataSegmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDataSegmentsResponse;

export type ListBuyersDataSegmentsError = DefaultErrors | NotFound | Forbidden;

/** List the data segments owned by a curator. */
export const listBuyersDataSegments: API.PaginatedOperationMethod<
  ListBuyersDataSegmentsRequest,
  ListBuyersDataSegmentsResponse,
  ListBuyersDataSegmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListBuyersDataSegmentsRequest,
  output: ListBuyersDataSegmentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ActivateBuyersDataSegmentsRequest {
  /** Required. Name of data segment to activate. v1alpha format: `buyers/{accountId}/dataSegments/{curatorDataSegmentId}` v1beta format: `curators/{accountId}/dataSegments/{curatorDataSegmentId}` */
  name: string;
  /** Request body */
  body?: ActivateDataSegmentRequest;
}

export const ActivateBuyersDataSegmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ActivateDataSegmentRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha/{name}:activate", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ActivateBuyersDataSegmentsRequest>;

export type ActivateBuyersDataSegmentsResponse = DataSegment;
export const ActivateBuyersDataSegmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DataSegment;

export type ActivateBuyersDataSegmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Activates a data segment. */
export const activateBuyersDataSegments: API.OperationMethod<
  ActivateBuyersDataSegmentsRequest,
  ActivateBuyersDataSegmentsResponse,
  ActivateBuyersDataSegmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ActivateBuyersDataSegmentsRequest,
  output: ActivateBuyersDataSegmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeactivateBuyersDataSegmentsRequest {
  /** Required. Name of data segment to deactivate. v1alpha format: `buyers/{accountId}/dataSegments/{curatorDataSegmentId}` v1beta format: `curators/{accountId}/dataSegments/{curatorDataSegmentId}` */
  name: string;
  /** Request body */
  body?: DeactivateDataSegmentRequest;
}

export const DeactivateBuyersDataSegmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(DeactivateDataSegmentRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{name}:deactivate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DeactivateBuyersDataSegmentsRequest>;

export type DeactivateBuyersDataSegmentsResponse = DataSegment;
export const DeactivateBuyersDataSegmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DataSegment;

export type DeactivateBuyersDataSegmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deactivates a data segment. */
export const deactivateBuyersDataSegments: API.OperationMethod<
  DeactivateBuyersDataSegmentsRequest,
  DeactivateBuyersDataSegmentsResponse,
  DeactivateBuyersDataSegmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeactivateBuyersDataSegmentsRequest,
  output: DeactivateBuyersDataSegmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetBuyersProposalsRequest {
  /** Required. Name of the proposal. Format: `buyers/{accountId}/proposals/{proposalId}` */
  name: string;
}

export const GetBuyersProposalsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetBuyersProposalsRequest>;

export type GetBuyersProposalsResponse = Proposal;
export const GetBuyersProposalsResponse = /*@__PURE__*/ /*#__PURE__*/ Proposal;

export type GetBuyersProposalsError = DefaultErrors | NotFound | Forbidden;

/** Gets a proposal using its resource name. The proposal is returned at the latest revision. */
export const getBuyersProposals: API.OperationMethod<
  GetBuyersProposalsRequest,
  GetBuyersProposalsResponse,
  GetBuyersProposalsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBuyersProposalsRequest,
  output: GetBuyersProposalsResponse,
  errors: [NotFound, Forbidden],
}));

export interface AddNoteBuyersProposalsRequest {
  /** Name of the proposal. Format: `buyers/{accountId}/proposals/{proposalId}` */
  proposal: string;
  /** Request body */
  body?: AddNoteRequest;
}

export const AddNoteBuyersProposalsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    proposal: Schema.String.pipe(T.HttpPath("proposal")),
    body: Schema.optional(AddNoteRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{proposal}:addNote",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddNoteBuyersProposalsRequest>;

export type AddNoteBuyersProposalsResponse = Proposal;
export const AddNoteBuyersProposalsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Proposal;

export type AddNoteBuyersProposalsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a note for this proposal and sends to the seller. This method is not supported for proposals with DealType set to 'PRIVATE_AUCTION'. */
export const addNoteBuyersProposals: API.OperationMethod<
  AddNoteBuyersProposalsRequest,
  AddNoteBuyersProposalsResponse,
  AddNoteBuyersProposalsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddNoteBuyersProposalsRequest,
  output: AddNoteBuyersProposalsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SendRfpBuyersProposalsRequest {
  /** Required. The current buyer who is sending the RFP in the format: `buyers/{accountId}`. */
  buyer: string;
  /** Request body */
  body?: SendRfpRequest;
}

export const SendRfpBuyersProposalsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    buyer: Schema.String.pipe(T.HttpPath("buyer")),
    body: Schema.optional(SendRfpRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{buyer}/proposals:sendRfp",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SendRfpBuyersProposalsRequest>;

export type SendRfpBuyersProposalsResponse = Proposal;
export const SendRfpBuyersProposalsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Proposal;

export type SendRfpBuyersProposalsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sends a request for proposal (RFP) to a publisher to initiate the negotiation regarding certain inventory. In the RFP, buyers can specify the deal type, deal terms, start and end dates, targeting, and a message to the publisher. Once the RFP is sent, a proposal in `SELLER_REVIEW_REQUESTED` state will be created and returned in the response. The publisher may review your request and respond with detailed deals in the proposal. */
export const sendRfpBuyersProposals: API.OperationMethod<
  SendRfpBuyersProposalsRequest,
  SendRfpBuyersProposalsResponse,
  SendRfpBuyersProposalsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SendRfpBuyersProposalsRequest,
  output: SendRfpBuyersProposalsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchBuyersProposalsRequest {
  /** Immutable. The name of the proposal serving as a unique identifier. Format: buyers/{accountId}/proposals/{proposalId} */
  name: string;
  /** List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask. */
  updateMask?: string;
  /** Request body */
  body?: Proposal;
}

export const PatchBuyersProposalsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Proposal).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchBuyersProposalsRequest>;

export type PatchBuyersProposalsResponse = Proposal;
export const PatchBuyersProposalsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Proposal;

export type PatchBuyersProposalsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the proposal at the given revision number. If the revision number in the request is behind the latest one kept in the server, an error message will be returned. See FieldMask for how to use FieldMask. Only fields specified in the UpdateProposalRequest.update_mask will be updated; Fields noted as 'Immutable' or 'Output only' yet specified in the UpdateProposalRequest.update_mask will be ignored and left unchanged. Updating a private auction proposal is only allowed for buyer private data, all other fields are immutable. */
export const patchBuyersProposals: API.OperationMethod<
  PatchBuyersProposalsRequest,
  PatchBuyersProposalsResponse,
  PatchBuyersProposalsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchBuyersProposalsRequest,
  output: PatchBuyersProposalsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AcceptBuyersProposalsRequest {
  /** Name of the proposal. Format: `buyers/{accountId}/proposals/{proposalId}` */
  name: string;
  /** Request body */
  body?: AcceptProposalRequest;
}

export const AcceptBuyersProposalsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(AcceptProposalRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha/{name}:accept", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<AcceptBuyersProposalsRequest>;

export type AcceptBuyersProposalsResponse = Proposal;
export const AcceptBuyersProposalsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Proposal;

export type AcceptBuyersProposalsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Accepts the proposal at the given revision number. If the revision number in the request is behind the latest from the server, an error message will be returned. This call updates the Proposal.state from `BUYER_ACCEPTANCE_REQUESTED` to `FINALIZED`; it has no side effect if the Proposal.state is already `FINALIZED` and throws exception if the Proposal.state is not either `BUYER_ACCEPTANCE_REQUESTED` or `FINALIZED`. Accepting a proposal means the buyer understands and accepts the Proposal.terms_and_conditions proposed by the seller. */
export const acceptBuyersProposals: API.OperationMethod<
  AcceptBuyersProposalsRequest,
  AcceptBuyersProposalsResponse,
  AcceptBuyersProposalsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AcceptBuyersProposalsRequest,
  output: AcceptBuyersProposalsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CancelNegotiationBuyersProposalsRequest {
  /** Name of the proposal. Format: `buyers/{accountId}/proposals/{proposalId}` */
  proposal: string;
  /** Request body */
  body?: CancelNegotiationRequest;
}

export const CancelNegotiationBuyersProposalsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    proposal: Schema.String.pipe(T.HttpPath("proposal")),
    body: Schema.optional(CancelNegotiationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{proposal}:cancelNegotiation",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CancelNegotiationBuyersProposalsRequest>;

export type CancelNegotiationBuyersProposalsResponse = Proposal;
export const CancelNegotiationBuyersProposalsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Proposal;

export type CancelNegotiationBuyersProposalsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Cancels an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized. If the proposal has not been finalized before, calling this method will set the Proposal.state to `TERMINATED` and increment the Proposal.proposal_revision. If the proposal has been finalized before and is under renegotiation now, calling this method will reset the Proposal.state to `FINALIZED` and increment the Proposal.proposal_revision. This method does not support private auction proposals whose Proposal.deal_type is 'PRIVATE_AUCTION'. */
export const cancelNegotiationBuyersProposals: API.OperationMethod<
  CancelNegotiationBuyersProposalsRequest,
  CancelNegotiationBuyersProposalsResponse,
  CancelNegotiationBuyersProposalsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelNegotiationBuyersProposalsRequest,
  output: CancelNegotiationBuyersProposalsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListBuyersProposalsRequest {
  /** Required. Parent that owns the collection of proposals Format: `buyers/{accountId}` */
  parent: string;
  /** Requested page size. The server may return fewer results than requested. If unspecified, the server will put a size of 500. */
  pageSize?: number;
  /** The page token as returned from ListProposalsResponse. */
  pageToken?: string;
  /** Optional query string using the [Cloud API list filtering syntax](https://developers.google.com/authorized-buyers/apis/guides/list-filters) Supported columns for filtering are: * displayName * dealType * updateTime * state */
  filter?: string;
}

export const ListBuyersProposalsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{parent}/proposals" }),
    svc,
  ) as unknown as Schema.Schema<ListBuyersProposalsRequest>;

export type ListBuyersProposalsResponse = ListProposalsResponse;
export const ListBuyersProposalsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListProposalsResponse;

export type ListBuyersProposalsError = DefaultErrors | NotFound | Forbidden;

/** Lists proposals. A filter expression using [Cloud API list filtering syntax](https://developers.google.com/authorized-buyers/apis/guides/list-filters) may be specified to filter the results. */
export const listBuyersProposals: API.PaginatedOperationMethod<
  ListBuyersProposalsRequest,
  ListBuyersProposalsResponse,
  ListBuyersProposalsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListBuyersProposalsRequest,
  output: ListBuyersProposalsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchBuyersProposalsDealsRequest {
  /** Immutable. The unique identifier of the deal. Auto-generated by the server when a deal is created. Format: buyers/{accountId}/proposals/{proposalId}/deals/{dealId} */
  name: string;
  /** List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask. */
  updateMask?: string;
  /** Request body */
  body?: Deal;
}

export const PatchBuyersProposalsDealsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Deal).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchBuyersProposalsDealsRequest>;

export type PatchBuyersProposalsDealsResponse = Deal;
export const PatchBuyersProposalsDealsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Deal;

export type PatchBuyersProposalsDealsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the given deal at the buyer known revision number. If the server revision has advanced since the passed-in proposal.proposal_revision an ABORTED error message will be returned. The revision number is incremented by the server whenever the proposal or its constituent deals are updated. Note: The revision number is kept at a proposal level. The buyer of the API is expected to keep track of the revision number after the last update operation and send it in as part of the next update request. This way, if there are further changes on the server (for example, seller making new updates), then the server can detect conflicts and reject the proposed changes. */
export const patchBuyersProposalsDeals: API.OperationMethod<
  PatchBuyersProposalsDealsRequest,
  PatchBuyersProposalsDealsResponse,
  PatchBuyersProposalsDealsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchBuyersProposalsDealsRequest,
  output: PatchBuyersProposalsDealsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetBuyersProposalsDealsRequest {
  /** Required. Format: buyers/{accountId}/proposals/{proposalId}/deals/{dealId} */
  name: string;
}

export const GetBuyersProposalsDealsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetBuyersProposalsDealsRequest>;

export type GetBuyersProposalsDealsResponse = Deal;
export const GetBuyersProposalsDealsResponse = /*@__PURE__*/ /*#__PURE__*/ Deal;

export type GetBuyersProposalsDealsError = DefaultErrors | NotFound | Forbidden;

/** Gets a deal given its name. The deal is returned at its head revision. */
export const getBuyersProposalsDeals: API.OperationMethod<
  GetBuyersProposalsDealsRequest,
  GetBuyersProposalsDealsResponse,
  GetBuyersProposalsDealsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBuyersProposalsDealsRequest,
  output: GetBuyersProposalsDealsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListBuyersProposalsDealsRequest {
  /** The page token as returned from ListDealsResponse. */
  pageToken?: string;
  /** Required. The name of the proposal containing the deals to retrieve. Format: buyers/{accountId}/proposals/{proposalId} */
  parent: string;
  /** Requested page size. The server may return fewer results than requested. If requested more than 500, the server will return 500 results per page. If unspecified, the server will pick a default page size of 100. */
  pageSize?: number;
}

export const ListBuyersProposalsDealsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{parent}/deals" }),
    svc,
  ) as unknown as Schema.Schema<ListBuyersProposalsDealsRequest>;

export type ListBuyersProposalsDealsResponse = ListDealsResponse;
export const ListBuyersProposalsDealsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDealsResponse;

export type ListBuyersProposalsDealsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all deals in a proposal. To retrieve only the finalized revision deals regardless if a deal is being renegotiated, see the FinalizedDeals resource. */
export const listBuyersProposalsDeals: API.PaginatedOperationMethod<
  ListBuyersProposalsDealsRequest,
  ListBuyersProposalsDealsResponse,
  ListBuyersProposalsDealsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListBuyersProposalsDealsRequest,
  output: ListBuyersProposalsDealsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface BatchUpdateBuyersProposalsDealsRequest {
  /** Required. The name of the proposal containing the deals to batch update. Format: buyers/{accountId}/proposals/{proposalId} */
  parent: string;
  /** Request body */
  body?: BatchUpdateDealsRequest;
}

export const BatchUpdateBuyersProposalsDealsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BatchUpdateDealsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{parent}/deals:batchUpdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchUpdateBuyersProposalsDealsRequest>;

export type BatchUpdateBuyersProposalsDealsResponse = BatchUpdateDealsResponse;
export const BatchUpdateBuyersProposalsDealsResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchUpdateDealsResponse;

export type BatchUpdateBuyersProposalsDealsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Batch updates multiple deals in the same proposal. */
export const batchUpdateBuyersProposalsDeals: API.OperationMethod<
  BatchUpdateBuyersProposalsDealsRequest,
  BatchUpdateBuyersProposalsDealsResponse,
  BatchUpdateBuyersProposalsDealsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchUpdateBuyersProposalsDealsRequest,
  output: BatchUpdateBuyersProposalsDealsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchBuyersClientsRequest {
  /** List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask. */
  updateMask?: string;
  /** Output only. The resource name of the client. Format: `buyers/{accountId}/clients/{clientAccountId}` */
  name: string;
  /** Request body */
  body?: Client;
}

export const PatchBuyersClientsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Client).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchBuyersClientsRequest>;

export type PatchBuyersClientsResponse = Client;
export const PatchBuyersClientsResponse = /*@__PURE__*/ /*#__PURE__*/ Client;

export type PatchBuyersClientsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing client. */
export const patchBuyersClients: API.OperationMethod<
  PatchBuyersClientsRequest,
  PatchBuyersClientsResponse,
  PatchBuyersClientsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchBuyersClientsRequest,
  output: PatchBuyersClientsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetBuyersClientsRequest {
  /** Required. Format: `buyers/{accountId}/clients/{clientAccountId}` */
  name: string;
}

export const GetBuyersClientsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetBuyersClientsRequest>;

export type GetBuyersClientsResponse = Client;
export const GetBuyersClientsResponse = /*@__PURE__*/ /*#__PURE__*/ Client;

export type GetBuyersClientsError = DefaultErrors | NotFound | Forbidden;

/** Gets a client with a given resource name. */
export const getBuyersClients: API.OperationMethod<
  GetBuyersClientsRequest,
  GetBuyersClientsResponse,
  GetBuyersClientsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBuyersClientsRequest,
  output: GetBuyersClientsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateBuyersClientsRequest {
  /** Required. The name of the buyer. Format: `buyers/{accountId}` */
  parent: string;
  /** Request body */
  body?: Client;
}

export const CreateBuyersClientsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Client).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha/{parent}/clients", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateBuyersClientsRequest>;

export type CreateBuyersClientsResponse = Client;
export const CreateBuyersClientsResponse = /*@__PURE__*/ /*#__PURE__*/ Client;

export type CreateBuyersClientsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new client. */
export const createBuyersClients: API.OperationMethod<
  CreateBuyersClientsRequest,
  CreateBuyersClientsResponse,
  CreateBuyersClientsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateBuyersClientsRequest,
  output: CreateBuyersClientsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeactivateBuyersClientsRequest {
  /** Required. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}` */
  name: string;
  /** Request body */
  body?: DeactivateClientRequest;
}

export const DeactivateBuyersClientsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(DeactivateClientRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{name}:deactivate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DeactivateBuyersClientsRequest>;

export type DeactivateBuyersClientsResponse = Client;
export const DeactivateBuyersClientsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Client;

export type DeactivateBuyersClientsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deactivates an existing client. The state of the client will be updated to "INACTIVE". This method has no effect if the client is already in "INACTIVE" state. */
export const deactivateBuyersClients: API.OperationMethod<
  DeactivateBuyersClientsRequest,
  DeactivateBuyersClientsResponse,
  DeactivateBuyersClientsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeactivateBuyersClientsRequest,
  output: DeactivateBuyersClientsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ActivateBuyersClientsRequest {
  /** Required. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}` */
  name: string;
  /** Request body */
  body?: ActivateClientRequest;
}

export const ActivateBuyersClientsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ActivateClientRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha/{name}:activate", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ActivateBuyersClientsRequest>;

export type ActivateBuyersClientsResponse = Client;
export const ActivateBuyersClientsResponse = /*@__PURE__*/ /*#__PURE__*/ Client;

export type ActivateBuyersClientsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Activates an existing client. The state of the client will be updated to "ACTIVE". This method has no effect if the client is already in "ACTIVE" state. */
export const activateBuyersClients: API.OperationMethod<
  ActivateBuyersClientsRequest,
  ActivateBuyersClientsResponse,
  ActivateBuyersClientsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ActivateBuyersClientsRequest,
  output: ActivateBuyersClientsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListBuyersClientsRequest {
  /** A token identifying a page of results the server should return. Typically, this is the value of ListClientsResponse.nextPageToken returned from the previous call to the list method. */
  pageToken?: string;
  /** Required. The name of the buyer. Format: `buyers/{accountId}` */
  parent: string;
  /** Requested page size. If left blank, a default page size of 500 will be applied. */
  pageSize?: number;
  /** Query string using the [Filtering Syntax](https://developers.google.com/authorized-buyers/apis/guides/list-filters) Supported fields for filtering are: * partnerClientId Use this field to filter the clients by the partnerClientId. For example, if the partnerClientId of the client is "1234", the value of this field should be `partnerClientId = "1234"`, in order to get only the client whose partnerClientId is "1234" in the response. */
  filter?: string;
}

export const ListBuyersClientsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{parent}/clients" }),
    svc,
  ) as unknown as Schema.Schema<ListBuyersClientsRequest>;

export type ListBuyersClientsResponse = ListClientsResponse;
export const ListBuyersClientsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListClientsResponse;

export type ListBuyersClientsError = DefaultErrors | NotFound | Forbidden;

/** Lists all the clients for the current buyer. */
export const listBuyersClients: API.PaginatedOperationMethod<
  ListBuyersClientsRequest,
  ListBuyersClientsResponse,
  ListBuyersClientsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListBuyersClientsRequest,
  output: ListBuyersClientsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateBuyersClientsUsersRequest {
  /** Required. The name of the client. Format: `buyers/{accountId}/clients/{clientAccountId}` */
  parent: string;
  /** Request body */
  body?: ClientUser;
}

export const CreateBuyersClientsUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ClientUser).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha/{parent}/users", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateBuyersClientsUsersRequest>;

export type CreateBuyersClientsUsersResponse = ClientUser;
export const CreateBuyersClientsUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ClientUser;

export type CreateBuyersClientsUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new client user in "INVITED" state. An email invitation will be sent to the new user, once accepted the user will become active. */
export const createBuyersClientsUsers: API.OperationMethod<
  CreateBuyersClientsUsersRequest,
  CreateBuyersClientsUsersResponse,
  CreateBuyersClientsUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateBuyersClientsUsersRequest,
  output: CreateBuyersClientsUsersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetBuyersClientsUsersRequest {
  /** Required. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}/clientUsers/{userId}` */
  name: string;
}

export const GetBuyersClientsUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetBuyersClientsUsersRequest>;

export type GetBuyersClientsUsersResponse = ClientUser;
export const GetBuyersClientsUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ClientUser;

export type GetBuyersClientsUsersError = DefaultErrors | NotFound | Forbidden;

/** Retrieves an existing client user. */
export const getBuyersClientsUsers: API.OperationMethod<
  GetBuyersClientsUsersRequest,
  GetBuyersClientsUsersResponse,
  GetBuyersClientsUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBuyersClientsUsersRequest,
  output: GetBuyersClientsUsersResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListBuyersClientsUsersRequest {
  /** A token identifying a page of results the server should return. Typically, this is the value of ListClientUsersResponse.nextPageToken returned from the previous call to the list method. */
  pageToken?: string;
  /** Required. The name of the client. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}` */
  parent: string;
  /** Requested page size. If left blank, a default page size of 500 will be applied. */
  pageSize?: number;
}

export const ListBuyersClientsUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{parent}/users" }),
    svc,
  ) as unknown as Schema.Schema<ListBuyersClientsUsersRequest>;

export type ListBuyersClientsUsersResponse = ListClientUsersResponse;
export const ListBuyersClientsUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListClientUsersResponse;

export type ListBuyersClientsUsersError = DefaultErrors | NotFound | Forbidden;

/** Lists all client users for a specified client. */
export const listBuyersClientsUsers: API.PaginatedOperationMethod<
  ListBuyersClientsUsersRequest,
  ListBuyersClientsUsersResponse,
  ListBuyersClientsUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListBuyersClientsUsersRequest,
  output: ListBuyersClientsUsersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ActivateBuyersClientsUsersRequest {
  /** Required. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}/clientUsers/{userId}` */
  name: string;
  /** Request body */
  body?: ActivateClientUserRequest;
}

export const ActivateBuyersClientsUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ActivateClientUserRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha/{name}:activate", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ActivateBuyersClientsUsersRequest>;

export type ActivateBuyersClientsUsersResponse = ClientUser;
export const ActivateBuyersClientsUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ClientUser;

export type ActivateBuyersClientsUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Activates an existing client user. The state of the client user will be updated from "INACTIVE" to "ACTIVE". This method has no effect if the client user is already in "ACTIVE" state. An error will be returned if the client user to activate is still in "INVITED" state. */
export const activateBuyersClientsUsers: API.OperationMethod<
  ActivateBuyersClientsUsersRequest,
  ActivateBuyersClientsUsersResponse,
  ActivateBuyersClientsUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ActivateBuyersClientsUsersRequest,
  output: ActivateBuyersClientsUsersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteBuyersClientsUsersRequest {
  /** Required. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}/clientUsers/{userId}` */
  name: string;
}

export const DeleteBuyersClientsUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteBuyersClientsUsersRequest>;

export type DeleteBuyersClientsUsersResponse = Empty;
export const DeleteBuyersClientsUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteBuyersClientsUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an existing client user. The client user will lose access to the Authorized Buyers UI. Note that if a client user is deleted, the user's access to the UI can't be restored unless a new client user is created and activated. */
export const deleteBuyersClientsUsers: API.OperationMethod<
  DeleteBuyersClientsUsersRequest,
  DeleteBuyersClientsUsersResponse,
  DeleteBuyersClientsUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteBuyersClientsUsersRequest,
  output: DeleteBuyersClientsUsersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeactivateBuyersClientsUsersRequest {
  /** Required. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}/clientUsers/{userId}` */
  name: string;
  /** Request body */
  body?: DeactivateClientUserRequest;
}

export const DeactivateBuyersClientsUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(DeactivateClientUserRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{name}:deactivate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DeactivateBuyersClientsUsersRequest>;

export type DeactivateBuyersClientsUsersResponse = ClientUser;
export const DeactivateBuyersClientsUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ClientUser;

export type DeactivateBuyersClientsUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deactivates an existing client user. The state of the client user will be updated from "ACTIVE" to "INACTIVE". This method has no effect if the client user is already in "INACTIVE" state. An error will be returned if the client user to deactivate is still in "INVITED" state. */
export const deactivateBuyersClientsUsers: API.OperationMethod<
  DeactivateBuyersClientsUsersRequest,
  DeactivateBuyersClientsUsersResponse,
  DeactivateBuyersClientsUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeactivateBuyersClientsUsersRequest,
  output: DeactivateBuyersClientsUsersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PauseBuyersFinalizedDealsRequest {
  /** Required. Format: `buyers/{accountId}/finalizedDeals/{dealId}` */
  name: string;
  /** Request body */
  body?: PauseFinalizedDealRequest;
}

export const PauseBuyersFinalizedDealsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(PauseFinalizedDealRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha/{name}:pause", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PauseBuyersFinalizedDealsRequest>;

export type PauseBuyersFinalizedDealsResponse = FinalizedDeal;
export const PauseBuyersFinalizedDealsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FinalizedDeal;

export type PauseBuyersFinalizedDealsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Pauses serving of the given finalized deal. This call only pauses the serving status, and does not affect other fields of the finalized deal. Calling this method for an already paused deal has no effect. This method only applies to programmatic guaranteed deals and preferred deals. */
export const pauseBuyersFinalizedDeals: API.OperationMethod<
  PauseBuyersFinalizedDealsRequest,
  PauseBuyersFinalizedDealsResponse,
  PauseBuyersFinalizedDealsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PauseBuyersFinalizedDealsRequest,
  output: PauseBuyersFinalizedDealsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetBuyersFinalizedDealsRequest {
  /** Required. Format: `buyers/{accountId}/finalizedDeals/{dealId}` */
  name: string;
}

export const GetBuyersFinalizedDealsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetBuyersFinalizedDealsRequest>;

export type GetBuyersFinalizedDealsResponse = FinalizedDeal;
export const GetBuyersFinalizedDealsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FinalizedDeal;

export type GetBuyersFinalizedDealsError = DefaultErrors | NotFound | Forbidden;

/** Gets a finalized deal given its name. */
export const getBuyersFinalizedDeals: API.OperationMethod<
  GetBuyersFinalizedDealsRequest,
  GetBuyersFinalizedDealsResponse,
  GetBuyersFinalizedDealsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBuyersFinalizedDealsRequest,
  output: GetBuyersFinalizedDealsResponse,
  errors: [NotFound, Forbidden],
}));

export interface AddCreativeBuyersFinalizedDealsRequest {
  /** Required. Name of the finalized deal in the format of: `buyers/{accountId}/finalizedDeals/{dealId}` */
  deal: string;
  /** Request body */
  body?: AddCreativeRequest;
}

export const AddCreativeBuyersFinalizedDealsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deal: Schema.String.pipe(T.HttpPath("deal")),
    body: Schema.optional(AddCreativeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{deal}:addCreative",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddCreativeBuyersFinalizedDealsRequest>;

export type AddCreativeBuyersFinalizedDealsResponse = FinalizedDeal;
export const AddCreativeBuyersFinalizedDealsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FinalizedDeal;

export type AddCreativeBuyersFinalizedDealsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Add creative to be used in the bidding process for a finalized deal. For programmatic guaranteed deals, it's recommended that you associate at least one approved creative with the deal before calling SetReadyToServe, to help reduce the number of bid responses filtered because they don't contain approved creatives. Creatives successfully added to a deal can be found in the Realtime-bidding Creatives API creative.deal_ids. This method only applies to programmatic guaranteed deals. Maximum number of 1000 creatives can be added to a finalized deal. */
export const addCreativeBuyersFinalizedDeals: API.OperationMethod<
  AddCreativeBuyersFinalizedDealsRequest,
  AddCreativeBuyersFinalizedDealsResponse,
  AddCreativeBuyersFinalizedDealsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddCreativeBuyersFinalizedDealsRequest,
  output: AddCreativeBuyersFinalizedDealsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetReadyToServeBuyersFinalizedDealsRequest {
  /** Required. Format: `buyers/{accountId}/finalizedDeals/{dealId}` or `bidders/{accountId}/finalizedDeals/{dealId}` */
  deal: string;
  /** Request body */
  body?: SetReadyToServeRequest;
}

export const SetReadyToServeBuyersFinalizedDealsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deal: Schema.String.pipe(T.HttpPath("deal")),
    body: Schema.optional(SetReadyToServeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{deal}:setReadyToServe",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetReadyToServeBuyersFinalizedDealsRequest>;

export type SetReadyToServeBuyersFinalizedDealsResponse = FinalizedDeal;
export const SetReadyToServeBuyersFinalizedDealsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FinalizedDeal;

export type SetReadyToServeBuyersFinalizedDealsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the given finalized deal as ready to serve. By default, deals are set as ready to serve as soon as they're finalized. If you want to opt out of the default behavior, and manually indicate that deals are ready to serve, ask your Technical Account Manager to add you to the allowlist. If you choose to use this method, finalized deals belonging to the bidder and its child seats don't start serving until after you call `setReadyToServe`, and after the deals become active. For example, you can use this method to delay receiving bid requests until your creative is ready. In addition, bidders can use the URL path "/v1alpha/bidders/{accountId}/finalizedDeals/{dealId}" to set ready to serve for the finalized deals belong to itself, its child seats and all their clients. This method only applies to programmatic guaranteed deals. */
export const setReadyToServeBuyersFinalizedDeals: API.OperationMethod<
  SetReadyToServeBuyersFinalizedDealsRequest,
  SetReadyToServeBuyersFinalizedDealsResponse,
  SetReadyToServeBuyersFinalizedDealsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetReadyToServeBuyersFinalizedDealsRequest,
  output: SetReadyToServeBuyersFinalizedDealsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListBuyersFinalizedDealsRequest {
  /** The page token as returned from ListFinalizedDealsResponse. */
  pageToken?: string;
  /** Required. The buyer to list the finalized deals for, in the format: `buyers/{accountId}`. When used to list finalized deals for a bidder, its buyers and clients, in the format `bidders/{accountId}`. */
  parent: string;
  /** Requested page size. The server may return fewer results than requested. If requested more than 500, the server will return 500 results per page. If unspecified, the server will pick a default page size of 100. */
  pageSize?: number;
  /** Optional query string using the [Cloud API list filtering syntax](https://developers.google.com/authorized-buyers/apis/guides/list-filters) Supported columns for filtering are: * deal.displayName * deal.dealType * deal.createTime * deal.updateTime * deal.flightStartTime * deal.flightEndTime * deal.eligibleSeatIds * dealServingStatus * readyToServe */
  filter?: string;
  /** An optional query string to sort finalized deals using the [Cloud API sorting syntax](https://cloud.google.com/apis/design/design_patterns#sorting_order). If no sort order is specified, results will be returned in an arbitrary order. Supported columns for sorting are: * deal.displayName * deal.createTime * deal.updateTime * deal.flightStartTime * deal.flightEndTime * rtbMetrics.bidRequests7Days * rtbMetrics.bids7Days * rtbMetrics.adImpressions7Days * rtbMetrics.bidRate7Days * rtbMetrics.filteredBidRate7Days * rtbMetrics.mustBidRateCurrentMonth */
  orderBy?: string;
}

export const ListBuyersFinalizedDealsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{parent}/finalizedDeals" }),
    svc,
  ) as unknown as Schema.Schema<ListBuyersFinalizedDealsRequest>;

export type ListBuyersFinalizedDealsResponse = ListFinalizedDealsResponse;
export const ListBuyersFinalizedDealsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListFinalizedDealsResponse;

export type ListBuyersFinalizedDealsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists finalized deals. Use the URL path "/v1alpha/buyers/{accountId}/finalizedDeals" to list finalized deals for the current buyer and its clients. Bidders can use the URL path "/v1alpha/bidders/{accountId}/finalizedDeals" to list finalized deals for the bidder, its buyers and all their clients. */
export const listBuyersFinalizedDeals: API.PaginatedOperationMethod<
  ListBuyersFinalizedDealsRequest,
  ListBuyersFinalizedDealsResponse,
  ListBuyersFinalizedDealsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListBuyersFinalizedDealsRequest,
  output: ListBuyersFinalizedDealsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ResumeBuyersFinalizedDealsRequest {
  /** Required. Format: `buyers/{accountId}/finalizedDeals/{dealId}` */
  name: string;
  /** Request body */
  body?: ResumeFinalizedDealRequest;
}

export const ResumeBuyersFinalizedDealsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ResumeFinalizedDealRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha/{name}:resume", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ResumeBuyersFinalizedDealsRequest>;

export type ResumeBuyersFinalizedDealsResponse = FinalizedDeal;
export const ResumeBuyersFinalizedDealsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FinalizedDeal;

export type ResumeBuyersFinalizedDealsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Resumes serving of the given finalized deal. Calling this method for an running deal has no effect. If a deal is initially paused by the seller, calling this method will not resume serving of the deal until the seller also resumes the deal. This method only applies to programmatic guaranteed deals and preferred deals. */
export const resumeBuyersFinalizedDeals: API.OperationMethod<
  ResumeBuyersFinalizedDealsRequest,
  ResumeBuyersFinalizedDealsResponse,
  ResumeBuyersFinalizedDealsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResumeBuyersFinalizedDealsRequest,
  output: ResumeBuyersFinalizedDealsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListBuyersPublisherProfilesRequest {
  /** Required. Parent that owns the collection of publisher profiles Format: `buyers/{buyerId}` */
  parent: string;
  /** Requested page size. The server may return fewer results than requested. If requested more than 500, the server will return 500 results per page. If unspecified, the server will pick a default page size of 100. */
  pageSize?: number;
  /** The page token as returned from a previous ListPublisherProfilesResponse. */
  pageToken?: string;
  /** Optional query string using the [Cloud API list filtering] (https://developers.google.com/authorized-buyers/apis/guides/list-filters) syntax. */
  filter?: string;
}

export const ListBuyersPublisherProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{parent}/publisherProfiles" }),
    svc,
  ) as unknown as Schema.Schema<ListBuyersPublisherProfilesRequest>;

export type ListBuyersPublisherProfilesResponse = ListPublisherProfilesResponse;
export const ListBuyersPublisherProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListPublisherProfilesResponse;

export type ListBuyersPublisherProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists publisher profiles. The returned publisher profiles aren't in any defined order. The order of the results might change. A new publisher profile can appear in any place in the list of returned results. */
export const listBuyersPublisherProfiles: API.PaginatedOperationMethod<
  ListBuyersPublisherProfilesRequest,
  ListBuyersPublisherProfilesResponse,
  ListBuyersPublisherProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListBuyersPublisherProfilesRequest,
  output: ListBuyersPublisherProfilesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetBuyersPublisherProfilesRequest {
  /** Required. Name of the publisher profile. Format: `buyers/{buyerId}/publisherProfiles/{publisherProfileId}` */
  name: string;
}

export const GetBuyersPublisherProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetBuyersPublisherProfilesRequest>;

export type GetBuyersPublisherProfilesResponse = PublisherProfile;
export const GetBuyersPublisherProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ PublisherProfile;

export type GetBuyersPublisherProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the requested publisher profile by name. */
export const getBuyersPublisherProfiles: API.OperationMethod<
  GetBuyersPublisherProfilesRequest,
  GetBuyersPublisherProfilesResponse,
  GetBuyersPublisherProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBuyersPublisherProfilesRequest,
  output: GetBuyersPublisherProfilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetBuyersAuctionPackagesRequest {
  /** Required. Name of auction package to get. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}` */
  name: string;
}

export const GetBuyersAuctionPackagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetBuyersAuctionPackagesRequest>;

export type GetBuyersAuctionPackagesResponse = AuctionPackage;
export const GetBuyersAuctionPackagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AuctionPackage;

export type GetBuyersAuctionPackagesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an auction package given its name. */
export const getBuyersAuctionPackages: API.OperationMethod<
  GetBuyersAuctionPackagesRequest,
  GetBuyersAuctionPackagesResponse,
  GetBuyersAuctionPackagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBuyersAuctionPackagesRequest,
  output: GetBuyersAuctionPackagesResponse,
  errors: [NotFound, Forbidden],
}));

export interface SubscribeBuyersAuctionPackagesRequest {
  /** Required. Name of the auction package. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}` */
  name: string;
  /** Request body */
  body?: SubscribeAuctionPackageRequest;
}

export const SubscribeBuyersAuctionPackagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SubscribeAuctionPackageRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha/{name}:subscribe", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SubscribeBuyersAuctionPackagesRequest>;

export type SubscribeBuyersAuctionPackagesResponse = AuctionPackage;
export const SubscribeBuyersAuctionPackagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AuctionPackage;

export type SubscribeBuyersAuctionPackagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Subscribe to the auction package for the specified buyer. Once subscribed, the bidder will receive a call out for inventory matching the auction package targeting criteria with the auction package deal ID and the specified buyer. */
export const subscribeBuyersAuctionPackages: API.OperationMethod<
  SubscribeBuyersAuctionPackagesRequest,
  SubscribeBuyersAuctionPackagesResponse,
  SubscribeBuyersAuctionPackagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SubscribeBuyersAuctionPackagesRequest,
  output: SubscribeBuyersAuctionPackagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SubscribeClientsBuyersAuctionPackagesRequest {
  /** Required. Name of the auction package. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}` */
  auctionPackage: string;
  /** Request body */
  body?: SubscribeClientsRequest;
}

export const SubscribeClientsBuyersAuctionPackagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    auctionPackage: Schema.String.pipe(T.HttpPath("auctionPackage")),
    body: Schema.optional(SubscribeClientsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{auctionPackage}:subscribeClients",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SubscribeClientsBuyersAuctionPackagesRequest>;

export type SubscribeClientsBuyersAuctionPackagesResponse = AuctionPackage;
export const SubscribeClientsBuyersAuctionPackagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AuctionPackage;

export type SubscribeClientsBuyersAuctionPackagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Subscribe the specified clients of the buyer to the auction package. If a client in the list does not belong to the buyer, an error response will be returned, and all of the following clients in the list will not be subscribed. Subscribing an already subscribed client will have no effect. */
export const subscribeClientsBuyersAuctionPackages: API.OperationMethod<
  SubscribeClientsBuyersAuctionPackagesRequest,
  SubscribeClientsBuyersAuctionPackagesResponse,
  SubscribeClientsBuyersAuctionPackagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SubscribeClientsBuyersAuctionPackagesRequest,
  output: SubscribeClientsBuyersAuctionPackagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListBuyersAuctionPackagesRequest {
  /** Optional. Optional query string using the [Cloud API list filtering syntax](/authorized-buyers/apis/guides/list-filters). Only supported when parent is bidder. Supported columns for filtering are: * displayName * createTime * updateTime * eligibleSeatIds */
  filter?: string;
  /** Optional. An optional query string to sort auction packages using the [Cloud API sorting syntax](https://cloud.google.com/apis/design/design_patterns#sorting_order). If no sort order is specified, results will be returned in an arbitrary order. Only supported when parent is bidder. Supported columns for sorting are: * displayName * createTime * updateTime */
  orderBy?: string;
  /** Required. Name of the parent buyer that can access the auction package. Format: `buyers/{accountId}`. When used with a bidder account, the auction packages that the bidder, its media planners, its buyers and clients are subscribed to will be listed, in the format `bidders/{accountId}`. */
  parent: string;
  /** Requested page size. The server may return fewer results than requested. Max allowed page size is 500. */
  pageSize?: number;
  /** The page token as returned. ListAuctionPackagesResponse.nextPageToken */
  pageToken?: string;
}

export const ListBuyersAuctionPackagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{parent}/auctionPackages" }),
    svc,
  ) as unknown as Schema.Schema<ListBuyersAuctionPackagesRequest>;

export type ListBuyersAuctionPackagesResponse = ListAuctionPackagesResponse;
export const ListBuyersAuctionPackagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAuctionPackagesResponse;

export type ListBuyersAuctionPackagesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List the auction packages. Buyers can use the URL path "/v1alpha/buyers/{accountId}/auctionPackages" to list auction packages for the current buyer and its clients. Bidders can use the URL path "/v1alpha/bidders/{accountId}/auctionPackages" to list auction packages for the bidder, its media planners, its buyers, and all their clients. */
export const listBuyersAuctionPackages: API.PaginatedOperationMethod<
  ListBuyersAuctionPackagesRequest,
  ListBuyersAuctionPackagesResponse,
  ListBuyersAuctionPackagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListBuyersAuctionPackagesRequest,
  output: ListBuyersAuctionPackagesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UnsubscribeBuyersAuctionPackagesRequest {
  /** Required. Name of the auction package. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}` */
  name: string;
  /** Request body */
  body?: UnsubscribeAuctionPackageRequest;
}

export const UnsubscribeBuyersAuctionPackagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UnsubscribeAuctionPackageRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{name}:unsubscribe",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UnsubscribeBuyersAuctionPackagesRequest>;

export type UnsubscribeBuyersAuctionPackagesResponse = AuctionPackage;
export const UnsubscribeBuyersAuctionPackagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AuctionPackage;

export type UnsubscribeBuyersAuctionPackagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Unsubscribe from the auction package for the specified buyer. Once unsubscribed, the bidder will no longer receive a call out for the auction package deal ID and the specified buyer. */
export const unsubscribeBuyersAuctionPackages: API.OperationMethod<
  UnsubscribeBuyersAuctionPackagesRequest,
  UnsubscribeBuyersAuctionPackagesResponse,
  UnsubscribeBuyersAuctionPackagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UnsubscribeBuyersAuctionPackagesRequest,
  output: UnsubscribeBuyersAuctionPackagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UnsubscribeClientsBuyersAuctionPackagesRequest {
  /** Required. Name of the auction package. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}` */
  auctionPackage: string;
  /** Request body */
  body?: UnsubscribeClientsRequest;
}

export const UnsubscribeClientsBuyersAuctionPackagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    auctionPackage: Schema.String.pipe(T.HttpPath("auctionPackage")),
    body: Schema.optional(UnsubscribeClientsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{auctionPackage}:unsubscribeClients",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UnsubscribeClientsBuyersAuctionPackagesRequest>;

export type UnsubscribeClientsBuyersAuctionPackagesResponse = AuctionPackage;
export const UnsubscribeClientsBuyersAuctionPackagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AuctionPackage;

export type UnsubscribeClientsBuyersAuctionPackagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Unsubscribe from the auction package for the specified clients of the buyer. Unsubscribing a client that is not subscribed will have no effect. */
export const unsubscribeClientsBuyersAuctionPackages: API.OperationMethod<
  UnsubscribeClientsBuyersAuctionPackagesRequest,
  UnsubscribeClientsBuyersAuctionPackagesResponse,
  UnsubscribeClientsBuyersAuctionPackagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UnsubscribeClientsBuyersAuctionPackagesRequest,
  output: UnsubscribeClientsBuyersAuctionPackagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListCuratorsCuratedPackagesRequest {
  /** Optional. Optional query string using the [Cloud API list filtering syntax](/authorized-buyers/apis/guides/list-filters). Supported columns for filtering are: * displayName * createTime * updateTime * state * feeCpm.currencyCode * feeCpm.units * feeCpm.nanos * floorPriceCpm.currencyCode * floorPriceCpm.units * floorPriceCpm.nanos */
  filter?: string;
  /** Optional. A page token, received from a previous `ListCuratedPackages` call. Provide this to retrieve the subsequent page. */
  pageToken?: string;
  /** Required. The parent curator account which owns this collection of curated packages. Format: `curators/{accountId}` */
  parent: string;
  /** Optional. Requested page size. The server may return fewer results than requested. Max allowed page size is 500. If unspecified, the server will default to 500. */
  pageSize?: number;
}

export const ListCuratorsCuratedPackagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{parent}/curatedPackages" }),
    svc,
  ) as unknown as Schema.Schema<ListCuratorsCuratedPackagesRequest>;

export type ListCuratorsCuratedPackagesResponse = ListCuratedPackagesResponse;
export const ListCuratorsCuratedPackagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListCuratedPackagesResponse;

export type ListCuratorsCuratedPackagesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists curated packages owned by the specified curator. */
export const listCuratorsCuratedPackages: API.PaginatedOperationMethod<
  ListCuratorsCuratedPackagesRequest,
  ListCuratorsCuratedPackagesResponse,
  ListCuratorsCuratedPackagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCuratorsCuratedPackagesRequest,
  output: ListCuratorsCuratedPackagesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeactivateCuratorsCuratedPackagesRequest {
  /** Required. The name of the curated package to deactivate. Format: `curators/{accountId}/curatedPackages/{curatedPackageId}` */
  name: string;
  /** Request body */
  body?: DeactivateCuratedPackageRequest;
}

export const DeactivateCuratorsCuratedPackagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(DeactivateCuratedPackageRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{name}:deactivate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DeactivateCuratorsCuratedPackagesRequest>;

export type DeactivateCuratorsCuratedPackagesResponse = CuratedPackage;
export const DeactivateCuratorsCuratedPackagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CuratedPackage;

export type DeactivateCuratorsCuratedPackagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deactivates an existing curated package. */
export const deactivateCuratorsCuratedPackages: API.OperationMethod<
  DeactivateCuratorsCuratedPackagesRequest,
  DeactivateCuratorsCuratedPackagesResponse,
  DeactivateCuratorsCuratedPackagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeactivateCuratorsCuratedPackagesRequest,
  output: DeactivateCuratorsCuratedPackagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ActivateCuratorsCuratedPackagesRequest {
  /** Required. The name of the curated package to activate. Format: `curators/{accountId}/curatedPackages/{curatedPackageId}` */
  name: string;
  /** Request body */
  body?: ActivateCuratedPackageRequest;
}

export const ActivateCuratorsCuratedPackagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ActivateCuratedPackageRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha/{name}:activate", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ActivateCuratorsCuratedPackagesRequest>;

export type ActivateCuratorsCuratedPackagesResponse = CuratedPackage;
export const ActivateCuratorsCuratedPackagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CuratedPackage;

export type ActivateCuratorsCuratedPackagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Activates an existing curated package. */
export const activateCuratorsCuratedPackages: API.OperationMethod<
  ActivateCuratorsCuratedPackagesRequest,
  ActivateCuratorsCuratedPackagesResponse,
  ActivateCuratorsCuratedPackagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ActivateCuratorsCuratedPackagesRequest,
  output: ActivateCuratorsCuratedPackagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateCuratorsCuratedPackagesRequest {
  /** Required. The parent curator account where this curated package will be created. Format: `curators/{accountId}` */
  parent: string;
  /** Request body */
  body?: CuratedPackage;
}

export const CreateCuratorsCuratedPackagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(CuratedPackage).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{parent}/curatedPackages",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateCuratorsCuratedPackagesRequest>;

export type CreateCuratorsCuratedPackagesResponse = CuratedPackage;
export const CreateCuratorsCuratedPackagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CuratedPackage;

export type CreateCuratorsCuratedPackagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new curated package. */
export const createCuratorsCuratedPackages: API.OperationMethod<
  CreateCuratorsCuratedPackagesRequest,
  CreateCuratorsCuratedPackagesResponse,
  CreateCuratorsCuratedPackagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateCuratorsCuratedPackagesRequest,
  output: CreateCuratorsCuratedPackagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchCuratorsCuratedPackagesRequest {
  /** Identifier. The unique resource name for the curated package. Format: `curators/{accountId}/curatedPackages/{curatedPackageId}` */
  name: string;
  /** Optional. List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement (the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask. */
  updateMask?: string;
  /** Request body */
  body?: CuratedPackage;
}

export const PatchCuratorsCuratedPackagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(CuratedPackage).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchCuratorsCuratedPackagesRequest>;

export type PatchCuratorsCuratedPackagesResponse = CuratedPackage;
export const PatchCuratorsCuratedPackagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CuratedPackage;

export type PatchCuratorsCuratedPackagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing curated package. */
export const patchCuratorsCuratedPackages: API.OperationMethod<
  PatchCuratorsCuratedPackagesRequest,
  PatchCuratorsCuratedPackagesResponse,
  PatchCuratorsCuratedPackagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchCuratorsCuratedPackagesRequest,
  output: PatchCuratorsCuratedPackagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetCuratorsCuratedPackagesRequest {
  /** Required. The name of the curated package to retrieve. Format: `curators/{accountId}/curatedPackages/{curatedPackageId}` */
  name: string;
}

export const GetCuratorsCuratedPackagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetCuratorsCuratedPackagesRequest>;

export type GetCuratorsCuratedPackagesResponse = CuratedPackage;
export const GetCuratorsCuratedPackagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CuratedPackage;

export type GetCuratorsCuratedPackagesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a curated package given its resource name. */
export const getCuratorsCuratedPackages: API.OperationMethod<
  GetCuratorsCuratedPackagesRequest,
  GetCuratorsCuratedPackagesResponse,
  GetCuratorsCuratedPackagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCuratorsCuratedPackagesRequest,
  output: GetCuratorsCuratedPackagesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListBiddersAuctionPackagesRequest {
  /** Optional. Optional query string using the [Cloud API list filtering syntax](/authorized-buyers/apis/guides/list-filters). Only supported when parent is bidder. Supported columns for filtering are: * displayName * createTime * updateTime * eligibleSeatIds */
  filter?: string;
  /** Optional. An optional query string to sort auction packages using the [Cloud API sorting syntax](https://cloud.google.com/apis/design/design_patterns#sorting_order). If no sort order is specified, results will be returned in an arbitrary order. Only supported when parent is bidder. Supported columns for sorting are: * displayName * createTime * updateTime */
  orderBy?: string;
  /** The page token as returned. ListAuctionPackagesResponse.nextPageToken */
  pageToken?: string;
  /** Required. Name of the parent buyer that can access the auction package. Format: `buyers/{accountId}`. When used with a bidder account, the auction packages that the bidder, its media planners, its buyers and clients are subscribed to will be listed, in the format `bidders/{accountId}`. */
  parent: string;
  /** Requested page size. The server may return fewer results than requested. Max allowed page size is 500. */
  pageSize?: number;
}

export const ListBiddersAuctionPackagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{parent}/auctionPackages" }),
    svc,
  ) as unknown as Schema.Schema<ListBiddersAuctionPackagesRequest>;

export type ListBiddersAuctionPackagesResponse = ListAuctionPackagesResponse;
export const ListBiddersAuctionPackagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAuctionPackagesResponse;

export type ListBiddersAuctionPackagesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List the auction packages. Buyers can use the URL path "/v1alpha/buyers/{accountId}/auctionPackages" to list auction packages for the current buyer and its clients. Bidders can use the URL path "/v1alpha/bidders/{accountId}/auctionPackages" to list auction packages for the bidder, its media planners, its buyers, and all their clients. */
export const listBiddersAuctionPackages: API.PaginatedOperationMethod<
  ListBiddersAuctionPackagesRequest,
  ListBiddersAuctionPackagesResponse,
  ListBiddersAuctionPackagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListBiddersAuctionPackagesRequest,
  output: ListBiddersAuctionPackagesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SetReadyToServeBiddersFinalizedDealsRequest {
  /** Required. Format: `buyers/{accountId}/finalizedDeals/{dealId}` or `bidders/{accountId}/finalizedDeals/{dealId}` */
  deal: string;
  /** Request body */
  body?: SetReadyToServeRequest;
}

export const SetReadyToServeBiddersFinalizedDealsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deal: Schema.String.pipe(T.HttpPath("deal")),
    body: Schema.optional(SetReadyToServeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{deal}:setReadyToServe",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetReadyToServeBiddersFinalizedDealsRequest>;

export type SetReadyToServeBiddersFinalizedDealsResponse = FinalizedDeal;
export const SetReadyToServeBiddersFinalizedDealsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FinalizedDeal;

export type SetReadyToServeBiddersFinalizedDealsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the given finalized deal as ready to serve. By default, deals are set as ready to serve as soon as they're finalized. If you want to opt out of the default behavior, and manually indicate that deals are ready to serve, ask your Technical Account Manager to add you to the allowlist. If you choose to use this method, finalized deals belonging to the bidder and its child seats don't start serving until after you call `setReadyToServe`, and after the deals become active. For example, you can use this method to delay receiving bid requests until your creative is ready. In addition, bidders can use the URL path "/v1alpha/bidders/{accountId}/finalizedDeals/{dealId}" to set ready to serve for the finalized deals belong to itself, its child seats and all their clients. This method only applies to programmatic guaranteed deals. */
export const setReadyToServeBiddersFinalizedDeals: API.OperationMethod<
  SetReadyToServeBiddersFinalizedDealsRequest,
  SetReadyToServeBiddersFinalizedDealsResponse,
  SetReadyToServeBiddersFinalizedDealsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetReadyToServeBiddersFinalizedDealsRequest,
  output: SetReadyToServeBiddersFinalizedDealsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListBiddersFinalizedDealsRequest {
  /** The page token as returned from ListFinalizedDealsResponse. */
  pageToken?: string;
  /** Required. The buyer to list the finalized deals for, in the format: `buyers/{accountId}`. When used to list finalized deals for a bidder, its buyers and clients, in the format `bidders/{accountId}`. */
  parent: string;
  /** Requested page size. The server may return fewer results than requested. If requested more than 500, the server will return 500 results per page. If unspecified, the server will pick a default page size of 100. */
  pageSize?: number;
  /** Optional query string using the [Cloud API list filtering syntax](https://developers.google.com/authorized-buyers/apis/guides/list-filters) Supported columns for filtering are: * deal.displayName * deal.dealType * deal.createTime * deal.updateTime * deal.flightStartTime * deal.flightEndTime * deal.eligibleSeatIds * dealServingStatus * readyToServe */
  filter?: string;
  /** An optional query string to sort finalized deals using the [Cloud API sorting syntax](https://cloud.google.com/apis/design/design_patterns#sorting_order). If no sort order is specified, results will be returned in an arbitrary order. Supported columns for sorting are: * deal.displayName * deal.createTime * deal.updateTime * deal.flightStartTime * deal.flightEndTime * rtbMetrics.bidRequests7Days * rtbMetrics.bids7Days * rtbMetrics.adImpressions7Days * rtbMetrics.bidRate7Days * rtbMetrics.filteredBidRate7Days * rtbMetrics.mustBidRateCurrentMonth */
  orderBy?: string;
}

export const ListBiddersFinalizedDealsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{parent}/finalizedDeals" }),
    svc,
  ) as unknown as Schema.Schema<ListBiddersFinalizedDealsRequest>;

export type ListBiddersFinalizedDealsResponse = ListFinalizedDealsResponse;
export const ListBiddersFinalizedDealsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListFinalizedDealsResponse;

export type ListBiddersFinalizedDealsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists finalized deals. Use the URL path "/v1alpha/buyers/{accountId}/finalizedDeals" to list finalized deals for the current buyer and its clients. Bidders can use the URL path "/v1alpha/bidders/{accountId}/finalizedDeals" to list finalized deals for the bidder, its buyers and all their clients. */
export const listBiddersFinalizedDeals: API.PaginatedOperationMethod<
  ListBiddersFinalizedDealsRequest,
  ListBiddersFinalizedDealsResponse,
  ListBiddersFinalizedDealsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListBiddersFinalizedDealsRequest,
  output: ListBiddersFinalizedDealsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListMediaPlannersRequest {
  /** Optional query string using the [Cloud API list filtering syntax](/authorized-buyers/apis/guides/list-filters). Supported columns for filtering are: * `name` * `displayName` * `ancestorNames` */
  filter?: string;
  /** A token identifying a page of results the server should return. This value is received from a previous `ListMediaPlanners` call in ListMediaPlannersResponse.nextPageToken. */
  pageToken?: string;
  /** The maximum number of media planners to return. If unspecified, at most 100 media planners will be returned. The maximum value is 500; values above 500 will be coerced to 500. */
  pageSize?: number;
}

export const ListMediaPlannersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/mediaPlanners" }),
    svc,
  ) as unknown as Schema.Schema<ListMediaPlannersRequest>;

export type ListMediaPlannersResponse_Op = ListMediaPlannersResponse;
export const ListMediaPlannersResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ ListMediaPlannersResponse;

export type ListMediaPlannersError = DefaultErrors | NotFound | Forbidden;

/** Lists all media planner accounts that the caller has access to. For curators, this will return all media planners that have accepted curator terms. For other accounts, attempting to list media planners will return an error. */
export const listMediaPlanners: API.PaginatedOperationMethod<
  ListMediaPlannersRequest,
  ListMediaPlannersResponse_Op,
  ListMediaPlannersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListMediaPlannersRequest,
  output: ListMediaPlannersResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
