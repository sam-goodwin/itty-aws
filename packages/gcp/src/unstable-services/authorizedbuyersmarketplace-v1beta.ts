// ==========================================================================
// Authorized Buyers Marketplace API (authorizedbuyersmarketplace v1beta)
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
  version: "v1beta",
  rootUrl: "https://authorizedbuyersmarketplace.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Money {
  /** The three-letter currency code defined in ISO 4217. */
  currencyCode?: string;
  /** Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000. */
  nanos?: number;
  /** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
  units?: string;
}

export const Money: Schema.Schema<Money> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currencyCode: Schema.optional(Schema.String),
    nanos: Schema.optional(Schema.Number),
    units: Schema.optional(Schema.String),
  }).annotate({ identifier: "Money" });

export interface AccessControlSettings {
  /** Required. Immutable. The list of media planners that are explicitly granted access to the curated package. Eligible media planners can be found in the mediaPlanners.list method. Only a single media planner may be allowlisted at this time. Format: `mediaPlanners/{mediaPlannerAccountId}` */
  allowlistedMediaPlanners?: ReadonlyArray<string>;
}

export const AccessControlSettings: Schema.Schema<AccessControlSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowlistedMediaPlanners: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AccessControlSettings" });

export interface VideoPlayerSizeTargeting {
  /** Required. The minimum height of the video player in pixels. */
  minimumHeight?: string;
  /** Required. The minimum width of the video player in pixels. */
  minimumWidth?: string;
}

export const VideoPlayerSizeTargeting: Schema.Schema<VideoPlayerSizeTargeting> =
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

export const VideoPlcmtTargeting: Schema.Schema<VideoPlcmtTargeting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    selectionType: Schema.optional(Schema.String),
    videoPlcmtTypes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "VideoPlcmtTargeting" });

export interface PackageVideoTargeting {
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
  /** Optional. The targeted video delivery method. If unset, inventory will be targeted regardless of video delivery method. */
  includedContentDeliveryMethod?:
    | "CONTENT_DELIVERY_METHOD_UNSPECIFIED"
    | "CONTENT_DELIVERY_METHOD_STREAMING"
    | "CONTENT_DELIVERY_METHOD_PROGRESSIVE"
    | (string & {});
  /** Optional. The targeted video player size. If unset, inventory will be targeted regardless of video player size. */
  includedPlayerSizeTargeting?: VideoPlayerSizeTargeting;
  /** Optional. The targeted video ad position types. If empty, inventory will be targeted regardless of video ad position type. */
  includedPositionTypes?: ReadonlyArray<
    | "POSITION_TYPE_UNSPECIFIED"
    | "POSITION_TYPE_MIDROLL"
    | "POSITION_TYPE_POSTROLL"
    | "POSITION_TYPE_PREROLL"
    | (string & {})
  >;
  /** Optional. The targeted minimum predicted completion rate percentage. This value must be a multiple of 10 between 10 and 90 (inclusive). For example, 10 is valid, but 0, 15, and 100 are not. A value of 10 means that the configuration will only match adslots for which we predict at least 10% completion rate. An unset value indicates inventory will be targeted regardless of predicted completion rate. */
  minimumPredictedCompletionRatePercentage?: string;
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
  /** Optional. The targeted video plcmt types. If unset, inventory will be targeted regardless of video plcmt type. */
  plcmtTargeting?: VideoPlcmtTargeting;
  /** Optional. The list of targeted video playback methods. If empty, inventory will be targeted regardless of video playback method. */
  includedPlaybackMethods?: ReadonlyArray<
    | "PLAYBACK_METHOD_UNSPECIFIED"
    | "PLAYBACK_METHOD_AUTO_PLAY_SOUND_ON"
    | "PLAYBACK_METHOD_AUTO_PLAY_SOUND_OFF"
    | "PLAYBACK_METHOD_CLICK_TO_PLAY"
    | (string & {})
  >;
}

export const PackageVideoTargeting: Schema.Schema<PackageVideoTargeting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includedMaximumAdDurationTargeting: Schema.optional(Schema.String),
    includedContentDeliveryMethod: Schema.optional(Schema.String),
    includedPlayerSizeTargeting: Schema.optional(VideoPlayerSizeTargeting),
    includedPositionTypes: Schema.optional(Schema.Array(Schema.String)),
    minimumPredictedCompletionRatePercentage: Schema.optional(Schema.String),
    includedMimeTypes: Schema.optional(Schema.Array(Schema.String)),
    plcmtTargeting: Schema.optional(VideoPlcmtTargeting),
    includedPlaybackMethods: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "PackageVideoTargeting" });

export interface TaxonomyTargeting {
  /** Optional. The list of targeted content taxonomy IDs. */
  targetedTaxonomyIds?: ReadonlyArray<string>;
  /** Optional. The list of excluded content taxonomy IDs. */
  excludedTaxonomyIds?: ReadonlyArray<string>;
}

export const TaxonomyTargeting: Schema.Schema<TaxonomyTargeting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetedTaxonomyIds: Schema.optional(Schema.Array(Schema.String)),
    excludedTaxonomyIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TaxonomyTargeting" });

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

export const StringTargetingDimension: Schema.Schema<StringTargetingDimension> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Schema.String)),
    selectionType: Schema.optional(Schema.String),
  }).annotate({ identifier: "StringTargetingDimension" });

export interface PackagePublisherProvidedSignalsTargeting {
  /** Optional. The list of targeted or excluded audience IDs. Based off of IAB Audience Taxonomy version 1.1 (https://github.com/InteractiveAdvertisingBureau/Taxonomies/blob/main/Audience%20Taxonomies/Audience%20Taxonomy%201.1.tsv) */
  audienceTargeting?: TaxonomyTargeting;
  /** Optional. The list of targeted or excluded content IDs. Based off of IAB Content Taxonomy version 2.2 (https://github.com/InteractiveAdvertisingBureau/Taxonomies/blob/main/Content%20Taxonomies/Content%20Taxonomy%202.2.tsv) */
  contentTargeting?: TaxonomyTargeting;
  /** Optional. The list of targeted and excluded video and audio signals IDs. These are additional signals supported by publisher provided signals. */
  videoAndAudioSignalsTargeting?: StringTargetingDimension;
}

export const PackagePublisherProvidedSignalsTargeting: Schema.Schema<PackagePublisherProvidedSignalsTargeting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audienceTargeting: Schema.optional(TaxonomyTargeting),
    contentTargeting: Schema.optional(TaxonomyTargeting),
    videoAndAudioSignalsTargeting: Schema.optional(StringTargetingDimension),
  }).annotate({ identifier: "PackagePublisherProvidedSignalsTargeting" });

export interface PackagePlacementTargeting {
  /** Optional. The list of targeted or excluded mobile application IDs that publishers own. Currently, only Android and Apple apps are supported. Android App ID, for example, com.google.android.apps.maps, can be found in Google Play Store URL. iOS App ID (which is a number) can be found at the end of iTunes store URL. First party mobile applications is either included or excluded. */
  mobileAppTargeting?: StringTargetingDimension;
  /** Optional. The list of targeted mobile app categories. */
  includedMobileAppCategoryTargeting?: ReadonlyArray<string>;
  /** Optional. The list of targeted or excluded URLs. The domains should have the http/https stripped (for example, google.com), and can contain a max of 5 paths per url. */
  uriTargeting?: StringTargetingDimension;
}

export const PackagePlacementTargeting: Schema.Schema<PackagePlacementTargeting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mobileAppTargeting: Schema.optional(StringTargetingDimension),
    includedMobileAppCategoryTargeting: Schema.optional(
      Schema.Array(Schema.String),
    ),
    uriTargeting: Schema.optional(StringTargetingDimension),
  }).annotate({ identifier: "PackagePlacementTargeting" });

export interface AdSize {
  /** The width of the ad slot in pixels. This field will be present only when size type is `PIXEL`. */
  width?: string;
  /** The type of the ad slot size. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "PIXEL"
    | "INTERSTITIAL"
    | "NATIVE"
    | "FLUID"
    | (string & {});
  /** The height of the ad slot in pixels. This field will be present only when size type is `PIXEL`. */
  height?: string;
}

export const AdSize: Schema.Schema<AdSize> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    width: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    height: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdSize" });

export interface CriteriaTargeting {
  /** A list of numeric IDs to be included. */
  targetedCriteriaIds?: ReadonlyArray<string>;
  /** A list of numeric IDs to be excluded. */
  excludedCriteriaIds?: ReadonlyArray<string>;
}

export const CriteriaTargeting: Schema.Schema<CriteriaTargeting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetedCriteriaIds: Schema.optional(Schema.Array(Schema.String)),
    excludedCriteriaIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CriteriaTargeting" });

export interface PackageTargeting {
  /** Optional. The targeted minimum predicted viewability percentage. This value must be a multiple of 10 between 10 and 90 (inclusive). For example, 10 is valid, but 0, 15, and 100 are not. A value of 10 means that the configuration will only match adslots for which we predict at least 10% viewability. An unset value indicates inventory will be targeted regardless of predicted viewability. */
  minimumPredictedViewabilityPercentage?: string;
  /** Optional. The environment to target. If unspecified, all environments are targeted. */
  includedEnvironment?:
    | "ENVIRONMENT_UNSPECIFIED"
    | "ENVIRONMENT_SITE"
    | "ENVIRONMENT_APP"
    | (string & {});
  /** Optional. Video specific targeting criteria. */
  videoTargeting?: PackageVideoTargeting;
  /** Optional. The publisher provided signals to target. If unset, inventory will be targeted regardless of publisher provided signals. */
  publisherProvidedSignalsTargeting?: PackagePublisherProvidedSignalsTargeting;
  /** Optional. Placement targeting information, for example, URL, mobile applications. */
  placementTargeting?: PackagePlacementTargeting;
  /** Optional. The included list of targeted authorized seller statuses. If empty, inventory will be targeted regardless of seller status. */
  includedAuthorizedSellerStatuses?: ReadonlyArray<
    | "AUTHORIZED_SELLER_STATUS_UNSPECIFIED"
    | "AUTHORIZED_SELLER_STATUS_DIRECT"
    | "AUTHORIZED_SELLER_STATUS_RESELLER"
    | (string & {})
  >;
  /** Optional. The targeted accelerated mobile page type. If unset, inventory will be targeted regardless of AMP status. */
  includedAcceleratedMobilePageType?:
    | "ACCELERATED_MOBILE_PAGE_TYPE_UNSPECIFIED"
    | "ACCELERATED_MOBILE_PAGE_TYPE_NON_AMP"
    | "ACCELERATED_MOBILE_PAGE_TYPE_AMP"
    | "ACCELERATED_MOBILE_PAGE_TYPE_AMP_STORY"
    | (string & {});
  /** Optional. The list of targeted restricted categories. If empty, inventory will be targeted regardless of restricted categories. */
  includedRestrictedCategories?: ReadonlyArray<
    | "RESTRICTED_CATEGORY_UNSPECIFIED"
    | "RESTRICTED_CATEGORY_ALCOHOL"
    | "RESTRICTED_CATEGORY_GAMBLING"
    | (string & {})
  >;
  /** Optional. The targeted rewarded type. If unset, inventory will be targeted regardless of rewarded type. */
  includedRewardedType?:
    | "REWARDED_TYPE_UNSPECIFIED"
    | "REWARDED_TYPE_NON_REWARDED"
    | "REWARDED_TYPE_REWARDED"
    | (string & {});
  /** Optional. The list of included device types to target. If empty, all device types are targeted. */
  includedDeviceTypes?: ReadonlyArray<
    | "DEVICE_TYPE_UNSPECIFIED"
    | "DEVICE_TYPE_PERSONAL_COMPUTER"
    | "DEVICE_TYPE_CONNECTED_TV"
    | "DEVICE_TYPE_PHONE"
    | "DEVICE_TYPE_TABLET"
    | (string & {})
  >;
  /** Optional. The list of ad sizes to target. If unset, inventory will be targeted regardless of ad size. Curated packages supports `PIXEL` and `INTERSTITIAL` ad sizes. */
  includedAdSizes?: ReadonlyArray<AdSize>;
  /** Optional. The targeted minimum predicted click through rate, ranging in values [10, 10000] (0.01% - 10%). A value of 50 means that the configuration will only match adslots for which we predict at least 0.05% click through rate. An unset value indicates inventory will be targeted regardless of predicted click through rate. */
  minimumPredictedClickThroughRatePercentageMillis?: string;
  /** Optional. The verticals included or excluded as defined in https://developers.google.com/authorized-buyers/rtb/downloads/publisher-verticals. If unset, inventory will be targeted regardless of vertical. */
  verticalTargeting?: CriteriaTargeting;
  /** Optional. The targeted publishers. If unset, inventory will be targeted regardless of publisher. Publishers are identified by their publisher ID from ads.txt / app-ads.txt. See https://iabtechlab.com/ads-txt/ and https://iabtechlab.com/app-ads-txt/ for more details. */
  publisherTargeting?: StringTargetingDimension;
  /** Optional. The targeted native inventory types. If empty, inventory will be targeted regardless of native inventory type. */
  includedNativeInventoryTypes?: ReadonlyArray<
    | "NATIVE_INVENTORY_TYPE_UNSPECIFIED"
    | "NATIVE_INVENTORY_TYPE_NATIVE_ONLY"
    | "NATIVE_INVENTORY_TYPE_NATIVE_OR_BANNER"
    | (string & {})
  >;
  /** Optional. The list of targeted open measurement types. If empty, inventory will be targeted regardless of Open Measurement support. */
  includedOpenMeasurementTypes?: ReadonlyArray<
    | "OPEN_MEASUREMENT_TYPE_UNSPECIFIED"
    | "OPEN_MEASUREMENT_TYPE_OMID_V1"
    | (string & {})
  >;
  /** Optional. The creative format to target. If unset, all creative markup types are targeted. */
  includedCreativeFormat?:
    | "CREATIVE_FORMAT_UNSPECIFIED"
    | "CREATIVE_FORMAT_DISPLAY"
    | "CREATIVE_FORMAT_VIDEO"
    | "CREATIVE_FORMAT_AUDIO"
    | (string & {});
  /** Optional. The languages to target. If unset, inventory will be targeted regardless of language. See https://developers.google.com/google-ads/api/data/codes-formats#languages for the list of supported language codes. */
  languageTargeting?: StringTargetingDimension;
  /** Optional. The geo criteria IDs to be included or excluded as defined in https://storage.googleapis.com/adx-rtb-dictionaries/geo-table.csv. If unset, inventory will be targeted regardless of geo. */
  geoTargeting?: CriteriaTargeting;
  /** Optional. The active data segments to be targeted. If unset, inventory will be targeted regardless of data segments. Format: `curators/{account_id}/dataSegments/{data_segment_id}` */
  includedDataSegments?: ReadonlyArray<string>;
}

export const PackageTargeting: Schema.Schema<PackageTargeting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minimumPredictedViewabilityPercentage: Schema.optional(Schema.String),
    includedEnvironment: Schema.optional(Schema.String),
    videoTargeting: Schema.optional(PackageVideoTargeting),
    publisherProvidedSignalsTargeting: Schema.optional(
      PackagePublisherProvidedSignalsTargeting,
    ),
    placementTargeting: Schema.optional(PackagePlacementTargeting),
    includedAuthorizedSellerStatuses: Schema.optional(
      Schema.Array(Schema.String),
    ),
    includedAcceleratedMobilePageType: Schema.optional(Schema.String),
    includedRestrictedCategories: Schema.optional(Schema.Array(Schema.String)),
    includedRewardedType: Schema.optional(Schema.String),
    includedDeviceTypes: Schema.optional(Schema.Array(Schema.String)),
    includedAdSizes: Schema.optional(Schema.Array(AdSize)),
    minimumPredictedClickThroughRatePercentageMillis: Schema.optional(
      Schema.String,
    ),
    verticalTargeting: Schema.optional(CriteriaTargeting),
    publisherTargeting: Schema.optional(StringTargetingDimension),
    includedNativeInventoryTypes: Schema.optional(Schema.Array(Schema.String)),
    includedOpenMeasurementTypes: Schema.optional(Schema.Array(Schema.String)),
    includedCreativeFormat: Schema.optional(Schema.String),
    languageTargeting: Schema.optional(StringTargetingDimension),
    geoTargeting: Schema.optional(CriteriaTargeting),
    includedDataSegments: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "PackageTargeting" });

export interface CuratedPackage {
  /** Identifier. The unique resource name for the curated package. Format: `curators/{accountId}/curatedPackages/{curatedPackageId}` */
  name?: string;
  /** Optional. A description of the curated package, provided by the curator. */
  description?: string;
  /** Output only. The timestamp when the curated package was created. Can be used to filter the response of the curatedPackages.list method. */
  createTime?: string;
  /** Optional. The minimum CPM a buyer has to bid to participate in auctions for inventory in this curated package. Can be used to filter the response of the curatedPackages.list method. */
  floorPriceCpm?: Money;
  /** Optional. The CPM fee charged by the curator to buyers using this curated package. Can be used to filter the response of the curatedPackages.list method. */
  feeCpm?: Money;
  /** Output only. The timestamp when the curated package was last updated. Can be used to filter the response of the curatedPackages.list method. */
  updateTime?: string;
  /** Required. Settings for controlling access to the curated package. Access to this curated package is limited to the allowlisted media planners and the creator. Buyers and bidders can not be allowlisted for or have direct access to this resource. */
  accessSettings?: AccessControlSettings;
  /** Optional. Targeting criteria for the curated package. */
  targeting?: PackageTargeting;
  /** Output only. The state of the curated package. Can be used to filter the response of the curatedPackages.list method. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
  /** Required. The display name assigned to the curated package by the curator. Can be used to filter the response of the curatedPackages.list method. */
  displayName?: string;
}

export const CuratedPackage: Schema.Schema<CuratedPackage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    floorPriceCpm: Schema.optional(Money),
    feeCpm: Schema.optional(Money),
    updateTime: Schema.optional(Schema.String),
    accessSettings: Schema.optional(AccessControlSettings),
    targeting: Schema.optional(PackageTargeting),
    state: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "CuratedPackage" });

export interface DeactivateDataSegmentRequest {}

export const DeactivateDataSegmentRequest: Schema.Schema<DeactivateDataSegmentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DeactivateDataSegmentRequest",
  });

export interface ListCuratedPackagesResponse {
  /** The list of curated packages. */
  curatedPackages?: ReadonlyArray<CuratedPackage>;
  /** A token to retrieve the next page of results. Pass this value in the ListCuratedPackagesRequest.pageToken field in the subsequent call to `ListCuratedPackages` method to retrieve the next page of results. If empty, then there are no more results. */
  nextPageToken?: string;
}

export const ListCuratedPackagesResponse: Schema.Schema<ListCuratedPackagesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    curatedPackages: Schema.optional(Schema.Array(CuratedPackage)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListCuratedPackagesResponse" });

export interface DataSegment {
  /** Immutable. Identifier. The unique identifier for the data segment. Account ID corresponds to the account ID that created the segment. v1alpha format: `buyers/{accountId}/dataSegments/{curatorDataSegmentId}` v1beta format: `curators/{curatorAccountId}/dataSegments/{curatorDataSegmentId}` */
  name?: string;
  /** Output only. Time the data segment was last updated. */
  updateTime?: string;
  /** Output only. Time the data segment was created. */
  createTime?: string;
  /** Output only. The state of the data segment. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
  /** Optional. A fixed fee charged per thousand impressions. Once set, the currency code cannot be changed. */
  cpmFee?: Money;
}

export const DataSegment: Schema.Schema<DataSegment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    cpmFee: Schema.optional(Money),
  }).annotate({ identifier: "DataSegment" });

export interface ListDataSegmentsResponse {
  /** The list of data segments. */
  dataSegments?: ReadonlyArray<DataSegment>;
  /** Continuation token for fetching the next page of results. Pass this value in the ListDataSegmentsRequest.pageToken field in the subsequent call to the `ListDataSegments` method to retrieve the next page of results. */
  nextPageToken?: string;
}

export const ListDataSegmentsResponse: Schema.Schema<ListDataSegmentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataSegments: Schema.optional(Schema.Array(DataSegment)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDataSegmentsResponse" });

export interface DeactivateCuratedPackageRequest {}

export const DeactivateCuratedPackageRequest: Schema.Schema<DeactivateCuratedPackageRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DeactivateCuratedPackageRequest",
  });

export interface ActivateCuratedPackageRequest {}

export const ActivateCuratedPackageRequest: Schema.Schema<ActivateCuratedPackageRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ActivateCuratedPackageRequest",
  });

export interface MediaPlanner {
  /** Output only. Account ID of the media planner. */
  accountId?: string;
  /** Identifier. The unique resource name of the media planner. Format: `mediaPlanners/{mediaPlannerAccountId}` Can be used to filter the response of the mediaPlanners.list method. */
  name?: string;
  /** Output only. The ancestor names of the media planner. Format: `mediaPlanners/{mediaPlannerAccountId}` Can be used to filter the response of the mediaPlanners.list method. */
  ancestorNames?: ReadonlyArray<string>;
  /** Output only. The display name of the media planner. Can be used to filter the response of the mediaPlanners.list method. */
  displayName?: string;
}

export const MediaPlanner: Schema.Schema<MediaPlanner> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    ancestorNames: Schema.optional(Schema.Array(Schema.String)),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "MediaPlanner" });

export interface ListMediaPlannersResponse {
  /** List of media planners. */
  mediaPlanners?: ReadonlyArray<MediaPlanner>;
  /** A token which can be passed to a subsequent call to the `ListMediaPlanners` method to retrieve the next page of results in ListMediaPlannersRequest.pageToken. */
  nextPageToken?: string;
}

export const ListMediaPlannersResponse: Schema.Schema<ListMediaPlannersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mediaPlanners: Schema.optional(Schema.Array(MediaPlanner)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListMediaPlannersResponse" });

export interface ActivateDataSegmentRequest {}

export const ActivateDataSegmentRequest: Schema.Schema<ActivateDataSegmentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ActivateDataSegmentRequest",
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
      path: "v1beta/{+parent}/curatedPackages",
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

export interface ListCuratorsCuratedPackagesRequest {
  /** Optional. A page token, received from a previous `ListCuratedPackages` call. Provide this to retrieve the subsequent page. */
  pageToken?: string;
  /** Required. The parent curator account which owns this collection of curated packages. Format: `curators/{accountId}` */
  parent: string;
  /** Optional. Requested page size. The server may return fewer results than requested. Max allowed page size is 500. If unspecified, the server will default to 500. */
  pageSize?: number;
  /** Optional. Optional query string using the [Cloud API list filtering syntax](/authorized-buyers/apis/guides/list-filters). Supported columns for filtering are: * displayName * createTime * updateTime * state * feeCpm.currencyCode * feeCpm.units * feeCpm.nanos * floorPriceCpm.currencyCode * floorPriceCpm.units * floorPriceCpm.nanos */
  filter?: string;
}

export const ListCuratorsCuratedPackagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/curatedPackages" }),
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

export interface PatchCuratorsCuratedPackagesRequest {
  /** Optional. List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement (the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask. */
  updateMask?: string;
  /** Identifier. The unique resource name for the curated package. Format: `curators/{accountId}/curatedPackages/{curatedPackageId}` */
  name: string;
  /** Request body */
  body?: CuratedPackage;
}

export const PatchCuratorsCuratedPackagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CuratedPackage).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{+name}", hasBody: true }),
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
      path: "v1beta/{+name}:deactivate",
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
    T.Http({ method: "POST", path: "v1beta/{+name}:activate", hasBody: true }),
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

export interface GetCuratorsCuratedPackagesRequest {
  /** Required. The name of the curated package to retrieve. Format: `curators/{accountId}/curatedPackages/{curatedPackageId}` */
  name: string;
}

export const GetCuratorsCuratedPackagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
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

export interface GetCuratorsDataSegmentsRequest {
  /** Required. Name of data segment to get. v1alpha format: `buyers/{accountId}/dataSegments/{curatorDataSegmentId}` v1beta format: `curators/{accountId}/dataSegments/{curatorDataSegmentId}` */
  name: string;
}

export const GetCuratorsDataSegmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetCuratorsDataSegmentsRequest>;

export type GetCuratorsDataSegmentsResponse = DataSegment;
export const GetCuratorsDataSegmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DataSegment;

export type GetCuratorsDataSegmentsError = DefaultErrors | NotFound | Forbidden;

/** Gets a data segment given its name. */
export const getCuratorsDataSegments: API.OperationMethod<
  GetCuratorsDataSegmentsRequest,
  GetCuratorsDataSegmentsResponse,
  GetCuratorsDataSegmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCuratorsDataSegmentsRequest,
  output: GetCuratorsDataSegmentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ActivateCuratorsDataSegmentsRequest {
  /** Required. Name of data segment to activate. v1alpha format: `buyers/{accountId}/dataSegments/{curatorDataSegmentId}` v1beta format: `curators/{accountId}/dataSegments/{curatorDataSegmentId}` */
  name: string;
  /** Request body */
  body?: ActivateDataSegmentRequest;
}

export const ActivateCuratorsDataSegmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ActivateDataSegmentRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta/{+name}:activate", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ActivateCuratorsDataSegmentsRequest>;

export type ActivateCuratorsDataSegmentsResponse = DataSegment;
export const ActivateCuratorsDataSegmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DataSegment;

export type ActivateCuratorsDataSegmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Activates a data segment. */
export const activateCuratorsDataSegments: API.OperationMethod<
  ActivateCuratorsDataSegmentsRequest,
  ActivateCuratorsDataSegmentsResponse,
  ActivateCuratorsDataSegmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ActivateCuratorsDataSegmentsRequest,
  output: ActivateCuratorsDataSegmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchCuratorsDataSegmentsRequest {
  /** Immutable. Identifier. The unique identifier for the data segment. Account ID corresponds to the account ID that created the segment. v1alpha format: `buyers/{accountId}/dataSegments/{curatorDataSegmentId}` v1beta format: `curators/{curatorAccountId}/dataSegments/{curatorDataSegmentId}` */
  name: string;
  /** Optional. List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask. */
  updateMask?: string;
  /** Request body */
  body?: DataSegment;
}

export const PatchCuratorsDataSegmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(DataSegment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchCuratorsDataSegmentsRequest>;

export type PatchCuratorsDataSegmentsResponse = DataSegment;
export const PatchCuratorsDataSegmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DataSegment;

export type PatchCuratorsDataSegmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a data segment. */
export const patchCuratorsDataSegments: API.OperationMethod<
  PatchCuratorsDataSegmentsRequest,
  PatchCuratorsDataSegmentsResponse,
  PatchCuratorsDataSegmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchCuratorsDataSegmentsRequest,
  output: PatchCuratorsDataSegmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeactivateCuratorsDataSegmentsRequest {
  /** Required. Name of data segment to deactivate. v1alpha format: `buyers/{accountId}/dataSegments/{curatorDataSegmentId}` v1beta format: `curators/{accountId}/dataSegments/{curatorDataSegmentId}` */
  name: string;
  /** Request body */
  body?: DeactivateDataSegmentRequest;
}

export const DeactivateCuratorsDataSegmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(DeactivateDataSegmentRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+name}:deactivate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DeactivateCuratorsDataSegmentsRequest>;

export type DeactivateCuratorsDataSegmentsResponse = DataSegment;
export const DeactivateCuratorsDataSegmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DataSegment;

export type DeactivateCuratorsDataSegmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deactivates a data segment. */
export const deactivateCuratorsDataSegments: API.OperationMethod<
  DeactivateCuratorsDataSegmentsRequest,
  DeactivateCuratorsDataSegmentsResponse,
  DeactivateCuratorsDataSegmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeactivateCuratorsDataSegmentsRequest,
  output: DeactivateCuratorsDataSegmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListCuratorsDataSegmentsRequest {
  /** Required. Name of the parent curator that can access the data segment. v1alpha format: `buyers/{accountId}` v1beta format: `curators/{accountId}` */
  parent: string;
  /** Optional. Requested page size. The server may return fewer results than requested. Max allowed page size is 500. If unspecified, the server will default to 500. */
  pageSize?: number;
  /** Optional. The page token as returned. ListDataSegmentsResponse.nextPageToken */
  pageToken?: string;
}

export const ListCuratorsDataSegmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/dataSegments" }),
    svc,
  ) as unknown as Schema.Schema<ListCuratorsDataSegmentsRequest>;

export type ListCuratorsDataSegmentsResponse = ListDataSegmentsResponse;
export const ListCuratorsDataSegmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDataSegmentsResponse;

export type ListCuratorsDataSegmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List the data segments owned by a curator. */
export const listCuratorsDataSegments: API.PaginatedOperationMethod<
  ListCuratorsDataSegmentsRequest,
  ListCuratorsDataSegmentsResponse,
  ListCuratorsDataSegmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCuratorsDataSegmentsRequest,
  output: ListCuratorsDataSegmentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateCuratorsDataSegmentsRequest {
  /** Required. The parent resource where this data segment will be created. v1alpha format: `buyers/{accountId}` v1beta format: `curators/{accountId}` */
  parent: string;
  /** Request body */
  body?: DataSegment;
}

export const CreateCuratorsDataSegmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(DataSegment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}/dataSegments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateCuratorsDataSegmentsRequest>;

export type CreateCuratorsDataSegmentsResponse = DataSegment;
export const CreateCuratorsDataSegmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DataSegment;

export type CreateCuratorsDataSegmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a data segment owned by the listed curator. The data segment will be created in the `ACTIVE` state, meaning it will be immediately available for buyers to use in preferred deals, private auction deals, and auction packages. */
export const createCuratorsDataSegments: API.OperationMethod<
  CreateCuratorsDataSegmentsRequest,
  CreateCuratorsDataSegmentsResponse,
  CreateCuratorsDataSegmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateCuratorsDataSegmentsRequest,
  output: CreateCuratorsDataSegmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListMediaPlannersRequest {
  /** The maximum number of media planners to return. If unspecified, at most 100 media planners will be returned. The maximum value is 500; values above 500 will be coerced to 500. */
  pageSize?: number;
  /** Optional query string using the [Cloud API list filtering syntax](/authorized-buyers/apis/guides/list-filters). Supported columns for filtering are: * `name` * `displayName` * `ancestorNames` */
  filter?: string;
  /** A token identifying a page of results the server should return. This value is received from a previous `ListMediaPlanners` call in ListMediaPlannersResponse.nextPageToken. */
  pageToken?: string;
}

export const ListMediaPlannersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/mediaPlanners" }),
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
