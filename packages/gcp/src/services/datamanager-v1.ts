// ==========================================================================
// Data Manager API (datamanager v1)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "@distilled.cloud/core/schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "datamanager",
  version: "v1",
  rootUrl: "https://datamanager.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface IngestEventsResponse {
  /** The auto-generated ID of the request. */
  requestId?: string;
}

export const IngestEventsResponse: Schema.Codec<IngestEventsResponse> =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "IngestEventsResponse" });

export interface DataTypeCount {
  /** The type of data. */
  type?:
    | "DATA_TYPE_UNSPECIFIED"
    | "EMAIL"
    | "PHONE_NUMBER"
    | "ADDRESS"
    | "IP_ADDRESS"
    | (string & {});
  /** The count for this data type. */
  count?: string;
}

export const DataTypeCount: Schema.Codec<DataTypeCount> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataTypeCount" });

export interface RemoveCompositeDataStatus {
  /** The total count of data types sent in the removal request, broken down by data type. Includes all data types in the request, regardless of whether they were successfully removed or not. */
  dataTypeCounts?: ReadonlyArray<DataTypeCount>;
  /** The total count of audience members sent in the removal request. Includes all audience members in the request, regardless of whether they were successfully removed or not. */
  recordCount?: string;
}

export const RemoveCompositeDataStatus: Schema.Codec<RemoveCompositeDataStatus> =
  /*@__PURE__*/ Schema.Struct({
    dataTypeCounts: Schema.optional(Schema.Array(DataTypeCount)),
    recordCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "RemoveCompositeDataStatus" });

export interface Empty {}

export const Empty: Schema.Codec<Empty> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface UserListLicensePricing {
  /** Optional. End time of the pricing. */
  endTime?: string;
  /** Output only. The buyer approval state of this pricing. This field is read-only. */
  buyerApprovalState?:
    | "USER_LIST_PRICING_BUYER_APPROVAL_STATE_UNSPECIFIED"
    | "PENDING"
    | "APPROVED"
    | "REJECTED"
    | (string & {});
  /** Optional. The currency in which cost and max_cost is specified. Must be a three-letter currency code defined in ISO 4217. */
  currencyCode?: string;
  /** Output only. Start time of the pricing. */
  startTime?: string;
  /** Optional. The maximum CPM a commerce audience can be charged when the MEDIA_SHARE cost type is used. The value is in micro units (10^-6) and in the currency specified by the currency_code field. For example, 2000000 means $2 if `currency_code` is `USD`. This is only relevant when cost_type is MEDIA_SHARE. When cost_type is not MEDIA_SHARE, and this field is set, a MAX_COST_NOT_ALLOWED error will be returned. If not set or set to`0`, there is no cap. */
  maxCostMicros?: string;
  /** Output only. The ID of this pricing. */
  pricingId?: string;
  /** Optional. The cost associated with the model, in micro units (10^-6), in the currency specified by the currency_code field. For example, 2000000 means $2 if `currency_code` is `USD`. */
  costMicros?: string;
  /** Immutable. The cost type of this pricing. Can be set only in the `create` operation. Can't be updated for an existing license. */
  costType?:
    | "USER_LIST_PRICING_COST_TYPE_UNSPECIFIED"
    | "CPC"
    | "CPM"
    | "MEDIA_SHARE"
    | (string & {});
  /** Output only. Whether this pricing is active. */
  pricingActive?: boolean;
}

export const UserListLicensePricing: Schema.Codec<UserListLicensePricing> =
  /*@__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    buyerApprovalState: Schema.optional(Schema.String),
    currencyCode: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    maxCostMicros: Schema.optional(Schema.String),
    pricingId: Schema.optional(Schema.String),
    costMicros: Schema.optional(Schema.String),
    costType: Schema.optional(Schema.String),
    pricingActive: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "UserListLicensePricing" });

export interface PartnerAudienceInfo {
  /** Required. Immutable. The source of the partner audience. */
  partnerAudienceSource?:
    | "PARTNER_AUDIENCE_SOURCE_UNSPECIFIED"
    | "COMMERCE_AUDIENCE"
    | "LINEAR_TV_AUDIENCE"
    | "AGENCY_PROVIDER_AUDIENCE"
    | (string & {});
  /** Optional. The commerce partner name. Only allowed if `partner_audience_source` is `COMMERCE_AUDIENCE`. */
  commercePartner?: string;
}

export const PartnerAudienceInfo: Schema.Codec<PartnerAudienceInfo> =
  /*@__PURE__*/ Schema.Struct({
    partnerAudienceSource: Schema.optional(Schema.String),
    commercePartner: Schema.optional(Schema.String),
  }).annotate({ identifier: "PartnerAudienceInfo" });

export interface GcpWrappedKeyInfo {
  /** Required. The type of algorithm used to encrypt the data. */
  keyType?: "KEY_TYPE_UNSPECIFIED" | "XCHACHA20_POLY1305" | (string & {});
  /** Required. The [Workload Identity](//cloud.google.com/iam/docs/workload-identity-federation) pool provider required to use KEK. */
  wipProvider?: string;
  /** Required. The base64 encoded encrypted data encryption key. */
  encryptedDek?: string;
  /** Required. Google Cloud Platform [Cloud Key Management Service resource ID](//cloud.google.com/kms/docs/getting-resource-ids). Should be in the format of `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{key}` or `gcp-kms://projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{key}` */
  kekUri?: string;
}

export const GcpWrappedKeyInfo: Schema.Codec<GcpWrappedKeyInfo> =
  /*@__PURE__*/ Schema.Struct({
    keyType: Schema.optional(Schema.String),
    wipProvider: Schema.optional(Schema.String),
    encryptedDek: Schema.optional(Schema.String),
    kekUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GcpWrappedKeyInfo" });

export interface AwsWrappedKeyInfo {
  /** Required. The URI of the AWS KMS key used to decrypt the DEK. Should be in the format of `arn:{partition}:kms:{region}:{account_id}:key/{key_id}` or `aws-kms://arn:{partition}:kms:{region}:{account_id}:key/{key_id}` */
  kekUri?: string;
  /** Required. The type of algorithm used to encrypt the data. */
  keyType?: "KEY_TYPE_UNSPECIFIED" | "XCHACHA20_POLY1305" | (string & {});
  /** Required. The Amazon Resource Name of the IAM Role to assume for KMS decryption access. Should be in the format of `arn:{partition}:iam::{account_id}:role/{role_name}` */
  roleArn?: string;
  /** Required. The base64 encoded encrypted data encryption key. */
  encryptedDek?: string;
}

export const AwsWrappedKeyInfo: Schema.Codec<AwsWrappedKeyInfo> =
  /*@__PURE__*/ Schema.Struct({
    kekUri: Schema.optional(Schema.String),
    keyType: Schema.optional(Schema.String),
    roleArn: Schema.optional(Schema.String),
    encryptedDek: Schema.optional(Schema.String),
  }).annotate({ identifier: "AwsWrappedKeyInfo" });

export interface CoordinatorKeyInfo {
  /** Required. The ID of the chosen coordinator key. */
  keyId?: string;
}

export const CoordinatorKeyInfo: Schema.Codec<CoordinatorKeyInfo> =
  /*@__PURE__*/ Schema.Struct({
    keyId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CoordinatorKeyInfo" });

export interface EncryptionInfo {
  /** Google Cloud Platform wrapped key information. */
  gcpWrappedKeyInfo?: GcpWrappedKeyInfo;
  /** Amazon Web Services wrapped key information. */
  awsWrappedKeyInfo?: AwsWrappedKeyInfo;
  /** Key information for the chosen coordinator key. This is not supported for the IngestEvents, IngestAudienceMembers, and RemoveAudienceMembers methods. */
  coordinatorKeyInfo?: CoordinatorKeyInfo;
}

export const EncryptionInfo: Schema.Codec<EncryptionInfo> =
  /*@__PURE__*/ Schema.Struct({
    gcpWrappedKeyInfo: Schema.optional(GcpWrappedKeyInfo),
    awsWrappedKeyInfo: Schema.optional(AwsWrappedKeyInfo),
    coordinatorKeyInfo: Schema.optional(CoordinatorKeyInfo),
  }).annotate({ identifier: "EncryptionInfo" });

export interface DeviceInfo {
  /** Optional. The version of the operating system or platform. */
  operatingSystemVersion?: string;
  /** Optional. The version of the browser. */
  browserVersion?: string;
  /** Optional. The width of the screen in pixels. */
  screenWidth?: number;
  /** Optional. The category of device. For example, “desktop”, “tablet”, “mobile”, “smart TV”. */
  category?: string;
  /** Optional. The user-agent string of the device for the given context. */
  userAgent?: string;
  /** Optional. The height of the screen in pixels. */
  screenHeight?: number;
  /** Optional. The operating system or platform of the device. */
  operatingSystem?: string;
  /** Optional. The brand of the device. */
  brand?: string;
  /** Optional. The IP address of the device for the given context. **Note:** Google Ads does not support IP address matching for end users in the European Economic Area (EEA), United Kingdom (UK), or Switzerland (CH). Add logic to conditionally exclude sharing IP addresses from users from these regions and ensure that you provide users with clear and comprehensive information about the data you collect on your sites, apps, and other properties and get consent where required by law or any applicable Google policies. See the [About offline conversion imports](https://support.google.com/google-ads/answer/2998031) page for more details. */
  ipAddress?: string;
  /** Optional. The model of the device. */
  model?: string;
  /** Optional. The brand or type of the browser. */
  browser?: string;
  /** Optional. The language the device uses in ISO 639-1 format. */
  languageCode?: string;
}

export const DeviceInfo: Schema.Codec<DeviceInfo> =
  /*@__PURE__*/ Schema.Struct({
    operatingSystemVersion: Schema.optional(Schema.String),
    browserVersion: Schema.optional(Schema.String),
    screenWidth: Schema.optional(Schema.Number),
    category: Schema.optional(Schema.String),
    userAgent: Schema.optional(Schema.String),
    screenHeight: Schema.optional(Schema.Number),
    operatingSystem: Schema.optional(Schema.String),
    brand: Schema.optional(Schema.String),
    ipAddress: Schema.optional(Schema.String),
    model: Schema.optional(Schema.String),
    browser: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeviceInfo" });

export interface AddressInfo {
  /** Required. Given (first) name of the user, all lowercase, with no punctuation, no leading or trailing whitespace, and hashed as SHA-256. */
  givenName?: string;
  /** Required. The 2-letter region code in ISO-3166-1 alpha-2 of the user's address. */
  regionCode?: string;
  /** Required. Family (last) name of the user, all lowercase, with no punctuation, no leading or trailing whitespace, and hashed as SHA-256. */
  familyName?: string;
  /** Required. The postal code of the user's address. */
  postalCode?: string;
}

export const AddressInfo: Schema.Codec<AddressInfo> =
  /*@__PURE__*/ Schema.Struct({
    givenName: Schema.optional(Schema.String),
    regionCode: Schema.optional(Schema.String),
    familyName: Schema.optional(Schema.String),
    postalCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "AddressInfo" });

export interface UserIdentifier {
  /** Hashed email address using SHA-256 hash function after normalization. */
  emailAddress?: string;
  /** Hashed phone number using SHA-256 hash function after normalization (E164 standard). */
  phoneNumber?: string;
  /** The known components of a user's address. Holds a grouping of identifiers that are matched all at once. */
  address?: AddressInfo;
}

export const UserIdentifier: Schema.Codec<UserIdentifier> =
  /*@__PURE__*/ Schema.Struct({
    emailAddress: Schema.optional(Schema.String),
    phoneNumber: Schema.optional(Schema.String),
    address: Schema.optional(AddressInfo),
  }).annotate({ identifier: "UserIdentifier" });

export interface UserData {
  /** Required. The identifiers for the user. It's possible to provide multiple instances of the same type of data (for example, multiple email addresses). To increase the likelihood of a match, provide as many identifiers as possible. At most 10 `userIdentifiers` can be provided in a single AudienceMember or Event. */
  userIdentifiers?: ReadonlyArray<UserIdentifier>;
}

export const UserData: Schema.Codec<UserData> =
  /*@__PURE__*/ Schema.Struct({
    userIdentifiers: Schema.optional(Schema.Array(UserIdentifier)),
  }).annotate({ identifier: "UserData" });

export interface ViewabilityInfo {
  /** Required. The type of the event. */
  viewType?:
    | "VIEW_TYPE_UNSPECIFIED"
    | "VIEW_TYPE_MRC_VIEWED"
    | "VIEW_TYPE_MRC_RENDERED"
    | (string & {});
  /** Optional. The amount of the media that was played as discrete quartiles. */
  mediaQuartile?:
    | "MEDIA_QUARTILE_UNSPECIFIED"
    | "MEDIA_QUARTILE_START"
    | "MEDIA_QUARTILE_FIRST_QUARTILE"
    | "MEDIA_QUARTILE_MIDPOINT"
    | "MEDIA_QUARTILE_THIRD_QUARTILE"
    | "MEDIA_QUARTILE_COMPLETE"
    | (string & {});
  /** Optional. The duration of the ad media. */
  mediaDuration?: string;
  /** Optional. The duration of playback of the ad media, regardless of whether it was viewable or not. */
  playbackDuration?: string;
  /** Optional. Whether the ad media was skippable or not. */
  mediaSkippable?: boolean;
  /** Optional. The numerical percent (0-100) of the pixels that were viewable. */
  viewablePercent?: number;
  /** Optional. The amount of time the ad was viewable for. */
  viewableDuration?: string;
  /** Optional. The numerical percent (0-100) of the volume of the media playback. */
  mediaVolumePercent?: number;
}

export const ViewabilityInfo: Schema.Codec<ViewabilityInfo> =
  /*@__PURE__*/ Schema.Struct({
    viewType: Schema.optional(Schema.String),
    mediaQuartile: Schema.optional(Schema.String),
    mediaDuration: Schema.optional(Schema.String),
    playbackDuration: Schema.optional(Schema.String),
    mediaSkippable: Schema.optional(Schema.Boolean),
    viewablePercent: Schema.optional(Schema.Number),
    viewableDuration: Schema.optional(Schema.String),
    mediaVolumePercent: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ViewabilityInfo" });

export interface AdEvent {
  /** Required. The name of the associated campaign. */
  campaignName?: string;
  /** Enum value for ad format. */
  adFormat?:
    | "AD_FORMAT_UNSPECIFIED"
    | "AD_FORMAT_AR"
    | "AD_FORMAT_AUDIO"
    | "AD_FORMAT_BANNER"
    | "AD_FORMAT_BUMPER"
    | "AD_FORMAT_CAROUSEL"
    | "AD_FORMAT_COLLECTION"
    | "AD_FORMAT_IMAGE"
    | "AD_FORMAT_INTERACTIVE"
    | "AD_FORMAT_INTERSTITIAL"
    | "AD_FORMAT_IN_FEED"
    | "AD_FORMAT_IN_STREAM"
    | "AD_FORMAT_IN_STREAM_SKIPPABLE"
    | "AD_FORMAT_IN_STREAM_NON_SKIPPABLE"
    | "AD_FORMAT_NATIVE"
    | "AD_FORMAT_SHORTS"
    | "AD_FORMAT_STORY"
    | "AD_FORMAT_SPONSORED"
    | "AD_FORMAT_VIDEO"
    | (string & {});
  /** Required. The platform source of the ad, akin to the Google Analytics source. */
  source?: string;
  /** Optional. Represents if the row is allowed to be used for measurement purposes, as governed by applicable privacy laws within regional jurisdiction. */
  measurementAllowed?: boolean;
  /** Required. The ID of the advertiser for the ad event. This must match the ID sent in the linking flow. */
  advertiserId?: string;
  /** Optional. The ID of the associated ad group. */
  adGroupId?: string;
  /** Enum value for platform. */
  platform?:
    | "PLATFORM_UNSPECIFIED"
    | "PLATFORM_IOS"
    | "PLATFORM_ANDROID"
    | "PLATFORM_WEB"
    | (string & {});
  /** Enum value for ad type. */
  adType?:
    | "AD_TYPE_UNSPECIFIED"
    | "AD_TYPE_DISPLAY"
    | "AD_TYPE_TEXT"
    | "AD_TYPE_IMAGE"
    | "AD_TYPE_RICH_MEDIA"
    | "AD_TYPE_HTML"
    | "AD_TYPE_AUDIO"
    | "AD_TYPE_VIDEO"
    | (string & {});
  /** String value for platform. */
  platformString?: string;
  /** Optional. The partner-assumed attribution status for this ad event. This acts only as a signal for how the partner assumed attribution played out, and does not force an end result in final reports. */
  attributionHint?:
    | "ATTRIBUTION_HINT_UNSPECIFIED"
    | "ATTRIBUTION_HINT_CONVERTED"
    | "ATTRIBUTION_HINT_NOT_CONVERTED"
    | (string & {});
  /** Optional. The ID of the associated ad within the group. */
  adId?: string;
  /** String value for ad placement. */
  adPlacementString?: string;
  /** String value for platform type. */
  platformTypeString?: string;
  /** Required. The type of the event. */
  eventType?:
    | "EVENT_TYPE_UNSPECIFIED"
    | "EVENT_TYPE_VIEW"
    | "EVENT_TYPE_CLICK"
    | (string & {});
  /** Enum value for platform type. */
  platformType?:
    | "PLATFORM_TYPE_UNSPECIFIED"
    | "PLATFORM_TYPE_MOBILE"
    | "PLATFORM_TYPE_DESKTOP"
    | "PLATFORM_TYPE_CTV"
    | "PLATFORM_TYPE_PHONE"
    | "PLATFORM_TYPE_TABLET"
    | (string & {});
  /** String value for ad type. */
  adTypeString?: string;
  /** String value for ad format. */
  adFormatString?: string;
  /** Required. The medium of the ad, akin to the Google Analytics medium. */
  medium?: string;
  /** Required. The ISO 3166-2 country plus subdivision. */
  regionCode?: string;
  /** Optional. An ID created and managed by the caller that uniquely identifies this event. Required if you want to deduplicate ad events that are included in multiple requests. Otherwise, this field is optional. */
  eventId?: string;
  /** Optional. The height of the ad in pixels. */
  adHeight?: number;
  /** String value for targeting type. */
  targetingTypeString?: string;
  /** Enum value for event subtype. */
  eventSubtype?:
    | "EVENT_SUBTYPE_UNSPECIFIED"
    | "EVENT_SUBTYPE_IMPRESSION"
    | "EVENT_SUBTYPE_ENGAGED_VIEW"
    | "EVENT_SUBTYPE_ONSITE_CLICK"
    | "EVENT_SUBTYPE_OUTBOUND_CLICK"
    | (string & {});
  /** Enum value for ad placement. */
  adPlacement?:
    | "AD_PLACEMENT_UNSPECIFIED"
    | "AD_PLACEMENT_DISCOVER"
    | "AD_PLACEMENT_FEED"
    | "AD_PLACEMENT_FOOTER"
    | "AD_PLACEMENT_HEADER"
    | "AD_PLACEMENT_HOME"
    | "AD_PLACEMENT_IN_CONTENT"
    | "AD_PLACEMENT_PROMOTED"
    | "AD_PLACEMENT_SEARCH"
    | "AD_PLACEMENT_STORY"
    | (string & {});
  /** Required. The ID of the associated campaign. */
  campaignId?: string;
  /** Enum value for targeting type. */
  targetingType?:
    | "TARGETING_TYPE_UNSPECIFIED"
    | "TARGETING_TYPE_AUDIENCE"
    | "TARGETING_TYPE_CONTEXTUAL"
    | "TARGETING_TYPE_DEMOGRAPHIC"
    | "TARGETING_TYPE_DEVICE"
    | "TARGETING_TYPE_GEO"
    | "TARGETING_TYPE_INTEREST"
    | "TARGETING_TYPE_PURCHASE_INTENT"
    | "TARGETING_TYPE_REMARKETING"
    | (string & {});
  /** Optional. The width of the ad in pixels. */
  adWidth?: number;
  /** Required. The time the event occurred. */
  timestamp?: string;
  /** String value for event subtype. */
  eventSubtypeString?: string;
  /** Optional. Information gathered about the device being used when the ad event happened. */
  deviceInfo?: DeviceInfo;
  /** Optional. Multiple pieces of user-provided data, representing the user the event is associated with. It is possible to provide multiple instances of the same type of data (e.g. email address). The more data provided, the more likely a match will be found. */
  userData?: UserData;
  /** Required. Details of the viewability of the ad served. */
  viewabilityInfo?: ViewabilityInfo;
  /** Optional. The device ID of the device that the ad was served to. */
  mobileDeviceId?: string;
}

export const AdEvent: Schema.Codec<AdEvent> =
  /*@__PURE__*/ Schema.Struct({
    campaignName: Schema.optional(Schema.String),
    adFormat: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    measurementAllowed: Schema.optional(Schema.Boolean),
    advertiserId: Schema.optional(Schema.String),
    adGroupId: Schema.optional(Schema.String),
    platform: Schema.optional(Schema.String),
    adType: Schema.optional(Schema.String),
    platformString: Schema.optional(Schema.String),
    attributionHint: Schema.optional(Schema.String),
    adId: Schema.optional(Schema.String),
    adPlacementString: Schema.optional(Schema.String),
    platformTypeString: Schema.optional(Schema.String),
    eventType: Schema.optional(Schema.String),
    platformType: Schema.optional(Schema.String),
    adTypeString: Schema.optional(Schema.String),
    adFormatString: Schema.optional(Schema.String),
    medium: Schema.optional(Schema.String),
    regionCode: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
    adHeight: Schema.optional(Schema.Number),
    targetingTypeString: Schema.optional(Schema.String),
    eventSubtype: Schema.optional(Schema.String),
    adPlacement: Schema.optional(Schema.String),
    campaignId: Schema.optional(Schema.String),
    targetingType: Schema.optional(Schema.String),
    adWidth: Schema.optional(Schema.Number),
    timestamp: Schema.optional(Schema.String),
    eventSubtypeString: Schema.optional(Schema.String),
    deviceInfo: Schema.optional(DeviceInfo),
    userData: Schema.optional(UserData),
    viewabilityInfo: Schema.optional(ViewabilityInfo),
    mobileDeviceId: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdEvent" });

export interface IngestAdEventsRequest {
  /** Optional. If true, the request is validated, but not executed. */
  validateOnly?: boolean;
  /** Optional. Information about encryption keys which are used to encrypt the data. */
  encryptionInfo?: EncryptionInfo;
  /** Required. Required (at least 1). A list of ad events. */
  adEvents?: ReadonlyArray<AdEvent>;
}

export const IngestAdEventsRequest: Schema.Codec<IngestAdEventsRequest> =
  /*@__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean),
    encryptionInfo: Schema.optional(EncryptionInfo),
    adEvents: Schema.optional(Schema.Array(AdEvent)),
  }).annotate({ identifier: "IngestAdEventsRequest" });

export interface MarketingDataInsightsAttribute {
  /** Measure of lift that the audience has for the attribute value as compared to the baseline. Range [0-1]. */
  lift?: number;
  /** Age range of the audience for which the lift is provided. */
  ageRange?:
    | "AGE_RANGE_UNSPECIFIED"
    | "AGE_RANGE_UNKNOWN"
    | "AGE_RANGE_18_24"
    | "AGE_RANGE_25_34"
    | "AGE_RANGE_35_44"
    | "AGE_RANGE_45_54"
    | "AGE_RANGE_55_64"
    | "AGE_RANGE_65_UP"
    | (string & {});
  /** Gender of the audience for which the lift is provided. */
  gender?:
    | "GENDER_UNSPECIFIED"
    | "GENDER_UNKNOWN"
    | "GENDER_MALE"
    | "GENDER_FEMALE"
    | (string & {});
  /** The user interest ID. */
  userInterestId?: string;
}

export const MarketingDataInsightsAttribute: Schema.Codec<MarketingDataInsightsAttribute> =
  /*@__PURE__*/ Schema.Struct({
    lift: Schema.optional(Schema.Number),
    ageRange: Schema.optional(Schema.String),
    gender: Schema.optional(Schema.String),
    userInterestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "MarketingDataInsightsAttribute" });

export interface MarketingDataInsight {
  /** The dimension to which the insight belongs. */
  dimension?:
    | "AUDIENCE_INSIGHTS_DIMENSION_UNSPECIFIED"
    | "AUDIENCE_INSIGHTS_DIMENSION_UNKNOWN"
    | "AFFINITY_USER_INTEREST"
    | "IN_MARKET_USER_INTEREST"
    | "AGE_RANGE"
    | "GENDER"
    | (string & {});
  /** Insights for values of a given dimension. */
  attributes?: ReadonlyArray<MarketingDataInsightsAttribute>;
}

export const MarketingDataInsight: Schema.Codec<MarketingDataInsight> =
  /*@__PURE__*/ Schema.Struct({
    dimension: Schema.optional(Schema.String),
    attributes: Schema.optional(Schema.Array(MarketingDataInsightsAttribute)),
  }).annotate({ identifier: "MarketingDataInsight" });

export interface WarningCount {
  /** The count of records that have a warning. */
  recordCount?: string;
  /** The warning reason. */
  reason?:
    | "PROCESSING_WARNING_REASON_UNSPECIFIED"
    | "PROCESSING_WARNING_REASON_KEK_PERMISSION_DENIED"
    | "PROCESSING_WARNING_REASON_DEK_DECRYPTION_ERROR"
    | "PROCESSING_WARNING_REASON_DECRYPTION_ERROR"
    | "PROCESSING_WARNING_REASON_WIP_AUTH_FAILED"
    | "PROCESSING_WARNING_REASON_INVALID_WIP"
    | "PROCESSING_WARNING_REASON_INVALID_KEK"
    | "PROCESSING_WARNING_REASON_USER_IDENTIFIER_DECRYPTION_ERROR"
    | "PROCESSING_WARNING_REASON_INTERNAL_ERROR"
    | "PROCESSING_WARNING_REASON_AWS_AUTH_FAILED"
    | (string & {});
}

export const WarningCount: Schema.Codec<WarningCount> =
  /*@__PURE__*/ Schema.Struct({
    recordCount: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
  }).annotate({ identifier: "WarningCount" });

export interface IngestUserIdDataStatus {
  /** The total count of user ids sent in the upload request for the destination. Includes all user ids in the request, regardless of whether they were successfully ingested or not. */
  userIdCount?: string;
  /** The total count of audience members sent in the upload request for the destination. Includes all audience members in the request, regardless of whether they were successfully ingested or not. */
  recordCount?: string;
}

export const IngestUserIdDataStatus: Schema.Codec<IngestUserIdDataStatus> =
  /*@__PURE__*/ Schema.Struct({
    userIdCount: Schema.optional(Schema.String),
    recordCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "IngestUserIdDataStatus" });

export interface MobileIdInfo {
  /** Required. Immutable. The key space of mobile IDs. */
  keySpace?: "KEY_SPACE_UNSPECIFIED" | "IOS" | "ANDROID" | (string & {});
  /** Required. Immutable. A string that uniquely identifies a mobile application from which the data was collected. */
  appId?: string;
  /** Optional. Immutable. Source of the upload data. */
  dataSourceType?:
    | "DATA_SOURCE_TYPE_UNSPECIFIED"
    | "DATA_SOURCE_TYPE_FIRST_PARTY"
    | "DATA_SOURCE_TYPE_THIRD_PARTY_CREDIT_BUREAU"
    | "DATA_SOURCE_TYPE_THIRD_PARTY_VOTER_FILE"
    | "DATA_SOURCE_TYPE_THIRD_PARTY_PARTNER_DATA"
    | (string & {});
}

export const MobileIdInfo: Schema.Codec<MobileIdInfo> =
  /*@__PURE__*/ Schema.Struct({
    keySpace: Schema.optional(Schema.String),
    appId: Schema.optional(Schema.String),
    dataSourceType: Schema.optional(Schema.String),
  }).annotate({ identifier: "MobileIdInfo" });

export interface EventLocation {
  /** Optional. The ISO 3166-2 subdivision code where the event occurred. */
  subdivisionCode?: string;
  /** Optional. Required for Store Sales. The identifier to represent a physical store where the event happened. */
  storeId?: string;
  /** Optional. The name of the city where the event occurred. */
  city?: string;
  /** Optional. The 2-letter CLDR region code of the user's address. */
  regionCode?: string;
  /** Optional. The subcontinent code in UN M49 format where the event occurred. */
  subcontinentCode?: string;
  /** Optional. The continent code in UN M49 format where the event occurred. */
  continentCode?: string;
}

export const EventLocation: Schema.Codec<EventLocation> =
  /*@__PURE__*/ Schema.Struct({
    subdivisionCode: Schema.optional(Schema.String),
    storeId: Schema.optional(Schema.String),
    city: Schema.optional(Schema.String),
    regionCode: Schema.optional(Schema.String),
    subcontinentCode: Schema.optional(Schema.String),
    continentCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "EventLocation" });

export interface PairIdInfo {
  /** Required. Immutable. Identifies the publisher that the Publisher Advertiser Identity Reconciliation user list is reconciled with. This field is provided by the cleanroom provider and is only unique in the scope of that cleanroom. This cannot be used as a global identifier across multiple cleanrooms. */
  publisherId?: string;
  /** Required. This field denotes the percentage of membership match of this user list with the corresponding publisher's first party data. Must be between 0 and 100 inclusive. */
  matchRatePercentage?: number;
  /** Required. Descriptive name of the publisher to be displayed in the UI for a better targeting experience. */
  publisherName?: string;
  /** Optional. The count of the advertiser's first party data records that have been uploaded to a clean room provider. This does not signify the size of a PAIR user list. */
  advertiserIdentifierCount?: string;
  /** Required. Immutable. Identifies a unique advertiser to publisher relationship with one clean room provider or across multiple clean room providers. */
  cleanRoomIdentifier?: string;
}

export const PairIdInfo: Schema.Codec<PairIdInfo> =
  /*@__PURE__*/ Schema.Struct({
    publisherId: Schema.optional(Schema.String),
    matchRatePercentage: Schema.optional(Schema.Number),
    publisherName: Schema.optional(Schema.String),
    advertiserIdentifierCount: Schema.optional(Schema.String),
    cleanRoomIdentifier: Schema.optional(Schema.String),
  }).annotate({ identifier: "PairIdInfo" });

export interface PseudonymousIdInfo {
  /** Output only. Sync status of the user list. */
  syncStatus?:
    | "SYNC_STATUS_UNSPECIFIED"
    | "CREATED"
    | "READY_FOR_USE"
    | "FAILED"
    | (string & {});
  /** Optional. Immutable. The number of billable records (e.g. uploaded or matched). */
  billableRecordCount?: string;
}

export const PseudonymousIdInfo: Schema.Codec<PseudonymousIdInfo> =
  /*@__PURE__*/ Schema.Struct({
    syncStatus: Schema.optional(Schema.String),
    billableRecordCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "PseudonymousIdInfo" });

export interface ContactIdInfo {
  /** Optional. Immutable. Source of the upload data */
  dataSourceType?:
    | "DATA_SOURCE_TYPE_UNSPECIFIED"
    | "DATA_SOURCE_TYPE_FIRST_PARTY"
    | "DATA_SOURCE_TYPE_THIRD_PARTY_CREDIT_BUREAU"
    | "DATA_SOURCE_TYPE_THIRD_PARTY_VOTER_FILE"
    | "DATA_SOURCE_TYPE_THIRD_PARTY_PARTNER_DATA"
    | (string & {});
  /** Output only. Match rate for customer match user lists. */
  matchRatePercentage?: number;
}

export const ContactIdInfo: Schema.Codec<ContactIdInfo> =
  /*@__PURE__*/ Schema.Struct({
    dataSourceType: Schema.optional(Schema.String),
    matchRatePercentage: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ContactIdInfo" });

export interface UserIdInfo {
  /** Optional. Immutable. Source of the upload data. */
  dataSourceType?:
    | "DATA_SOURCE_TYPE_UNSPECIFIED"
    | "DATA_SOURCE_TYPE_FIRST_PARTY"
    | "DATA_SOURCE_TYPE_THIRD_PARTY_CREDIT_BUREAU"
    | "DATA_SOURCE_TYPE_THIRD_PARTY_VOTER_FILE"
    | "DATA_SOURCE_TYPE_THIRD_PARTY_PARTNER_DATA"
    | (string & {});
}

export const UserIdInfo: Schema.Codec<UserIdInfo> =
  /*@__PURE__*/ Schema.Struct({
    dataSourceType: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserIdInfo" });

export interface IngestedUserListInfo {
  /** Required. Immutable. Upload key types of this user list. */
  uploadKeyTypes?: ReadonlyArray<
    | "UPLOAD_KEY_TYPE_UNSPECIFIED"
    | "CONTACT_ID"
    | "MOBILE_ID"
    | "USER_ID"
    | "PAIR_ID"
    | "PSEUDONYMOUS_ID"
    | (string & {})
  >;
  /** Optional. Additional information for partner audiences. This feature is only available to data partners. */
  partnerAudienceInfo?: PartnerAudienceInfo;
  /** Optional. Additional information when `MOBILE_ID` is one of the `upload_key_types`. */
  mobileIdInfo?: MobileIdInfo;
  /** Optional. Additional information when `PAIR_ID` is one of the `upload_key_types`. This feature is only available to data partners. */
  pairIdInfo?: PairIdInfo;
  /** Optional. Additional information for `PSEUDONYMOUS_ID` is one of the `upload_key_types`. */
  pseudonymousIdInfo?: PseudonymousIdInfo;
  /** Optional. Additional information when `CONTACT_ID` is one of the `upload_key_types`. */
  contactIdInfo?: ContactIdInfo;
  /** Optional. Additional information when `USER_ID` is one of the `upload_key_types`. */
  userIdInfo?: UserIdInfo;
}

export const IngestedUserListInfo: Schema.Codec<IngestedUserListInfo> =
  /*@__PURE__*/ Schema.Struct({
    uploadKeyTypes: Schema.optional(Schema.Array(Schema.String)),
    partnerAudienceInfo: Schema.optional(PartnerAudienceInfo),
    mobileIdInfo: Schema.optional(MobileIdInfo),
    pairIdInfo: Schema.optional(PairIdInfo),
    pseudonymousIdInfo: Schema.optional(PseudonymousIdInfo),
    contactIdInfo: Schema.optional(ContactIdInfo),
    userIdInfo: Schema.optional(UserIdInfo),
  }).annotate({ identifier: "IngestedUserListInfo" });

export interface PartnerCustomerAccount {
  /** Required. The identifier of the customer account in the partner's ID space. */
  accountId?: string;
  /** Optional. The name of the account. */
  accountName?: string;
  /** Optional. The type of the account. Can be used to distinguish between advertiser accounts and business level accounts, for example. */
  accountType?: string;
}

export const PartnerCustomerAccount: Schema.Codec<PartnerCustomerAccount> =
  /*@__PURE__*/ Schema.Struct({
    accountId: Schema.optional(Schema.String),
    accountName: Schema.optional(Schema.String),
    accountType: Schema.optional(Schema.String),
  }).annotate({ identifier: "PartnerCustomerAccount" });

export interface ProductAccount {
  /** Required. The type of the account. For example, `GOOGLE_ADS`. Either `account_type` or the deprecated `product` is required. If both are set, the values must match. */
  accountType?:
    | "ACCOUNT_TYPE_UNSPECIFIED"
    | "GOOGLE_ADS"
    | "DISPLAY_VIDEO_PARTNER"
    | "DISPLAY_VIDEO_ADVERTISER"
    | "DATA_PARTNER"
    | "GOOGLE_ANALYTICS_PROPERTY"
    | "GOOGLE_AD_MANAGER_AUDIENCE_LINK"
    | "FLOODLIGHT_CONFIG"
    | (string & {});
  /** Required. The ID of the account. For example, your Google Ads account ID. */
  accountId?: string;
  /** Deprecated. Use `account_type` instead. */
  product?:
    | "PRODUCT_UNSPECIFIED"
    | "GOOGLE_ADS"
    | "DISPLAY_VIDEO_PARTNER"
    | "DISPLAY_VIDEO_ADVERTISER"
    | "DATA_PARTNER"
    | (string & {});
}

export const ProductAccount: Schema.Codec<ProductAccount> =
  /*@__PURE__*/ Schema.Struct({
    accountType: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    product: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductAccount" });

export interface PartnerLinkMetadata {
  /** Optional. The list of implicit accounts. */
  implicitAccounts?: ReadonlyArray<PartnerCustomerAccount>;
}

export const PartnerLinkMetadata: Schema.Codec<PartnerLinkMetadata> =
  /*@__PURE__*/ Schema.Struct({
    implicitAccounts: Schema.optional(Schema.Array(PartnerCustomerAccount)),
  }).annotate({ identifier: "PartnerLinkMetadata" });

export interface PartnerLink {
  /** Optional. The customer account in the partner system. This is required for partner links with the FEATURE_SET_AD_EVENT_MANAGEMENT feature set. */
  partnerCustomerAccount?: PartnerCustomerAccount;
  /** Required. The partner account granted access by the owning account. */
  partnerAccount?: ProductAccount;
  /** Identifier. The name of the partner link. Format: accountTypes/{account_type}/accounts/{account}/partnerLinks/{partner_link} */
  name?: string;
  /** Output only. The partner link ID. */
  partnerLinkId?: string;
  /** Required. The owning account granting access to the partner account. */
  owningAccount?: ProductAccount;
  /** Optional. Immutable. The set of features supported for the partner link. If not specified, the system behavior defaults to FEATURE_SET_AUDIENCE_AND_EVENT_MANAGEMENT. */
  featureSet?:
    | "FEATURE_SET_UNSPECIFIED"
    | "FEATURE_SET_AUDIENCE_AND_EVENT_MANAGEMENT"
    | "FEATURE_SET_AD_EVENT_MANAGEMENT"
    | (string & {});
  /** Optional. Metadata associated with the partner link. This is optional and only accepted for partner links with the FEATURE_SET_AD_EVENT_MANAGEMENT. */
  partnerLinkMetadata?: PartnerLinkMetadata;
}

export const PartnerLink: Schema.Codec<PartnerLink> =
  /*@__PURE__*/ Schema.Struct({
    partnerCustomerAccount: Schema.optional(PartnerCustomerAccount),
    partnerAccount: Schema.optional(ProductAccount),
    name: Schema.optional(Schema.String),
    partnerLinkId: Schema.optional(Schema.String),
    owningAccount: Schema.optional(ProductAccount),
    featureSet: Schema.optional(Schema.String),
    partnerLinkMetadata: Schema.optional(PartnerLinkMetadata),
  }).annotate({ identifier: "PartnerLink" });

export interface SearchPartnerLinksResponse {
  /** The partner links for the given account. */
  partnerLinks?: ReadonlyArray<PartnerLink>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const SearchPartnerLinksResponse: Schema.Codec<SearchPartnerLinksResponse> =
  /*@__PURE__*/ Schema.Struct({
    partnerLinks: Schema.optional(Schema.Array(PartnerLink)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchPartnerLinksResponse" });

export interface IngestAudienceMembersResponse {
  /** The auto-generated ID of the request. */
  requestId?: string;
}

export const IngestAudienceMembersResponse: Schema.Codec<IngestAudienceMembersResponse> =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "IngestAudienceMembersResponse" });

export interface RemoveUserDataStatus {
  /** The total count of user identifiers sent in the removal request. Includes all user identifiers in the request, regardless of whether they were successfully removed or not. */
  userIdentifierCount?: string;
  /** The total count of audience members sent in the removal request. Includes all audience members in the request, regardless of whether they were successfully removed or not. */
  recordCount?: string;
}

export const RemoveUserDataStatus: Schema.Codec<RemoveUserDataStatus> =
  /*@__PURE__*/ Schema.Struct({
    userIdentifierCount: Schema.optional(Schema.String),
    recordCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "RemoveUserDataStatus" });

export interface Location {
  /** List of ISO 3166-1 alpha-2 region codes. */
  regionCodes?: ReadonlyArray<string>;
}

export const Location: Schema.Codec<Location> =
  /*@__PURE__*/ Schema.Struct({
    regionCodes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Location" });

export interface Baseline {
  /** The baseline location of the request. Baseline location is an OR-list of the requested regions. */
  baselineLocation?: Location;
  /** If set to true, the service will try to automatically detect the baseline location for insights. */
  locationAutoDetectionEnabled?: boolean;
}

export const Baseline: Schema.Codec<Baseline> =
  /*@__PURE__*/ Schema.Struct({
    baselineLocation: Schema.optional(Location),
    locationAutoDetectionEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Baseline" });

export interface RetrieveInsightsRequest {
  /** Required. The user list ID for which insights are requested. */
  userListId?: string;
  /** Required. Baseline for the insights requested. */
  baseline?: Baseline;
}

export const RetrieveInsightsRequest: Schema.Codec<RetrieveInsightsRequest> =
  /*@__PURE__*/ Schema.Struct({
    userListId: Schema.optional(Schema.String),
    baseline: Schema.optional(Baseline),
  }).annotate({ identifier: "RetrieveInsightsRequest" });

export interface UserListLicenseMetrics {
  /** Output only. The number of clicks for the user list license. */
  clickCount?: string;
  /** Output only. The revenue for the user list license in USD micros. */
  revenueUsdMicros?: string;
  /** Output only. The number of impressions for the user list license. */
  impressionCount?: string;
  /** Output only. The end date (inclusive) of the metrics in the format YYYYMMDD. For example, 20260102 represents January 2, 2026. If `start_date` is used in the filter, `end_date` is also required. If neither `start_date` nor `end_date` are included in the filter, the UserListLicenseMetrics fields will not be populated in the response. */
  endDate?: string;
  /** Output only. The start date (inclusive) of the metrics in the format YYYYMMDD. For example, 20260102 represents January 2, 2026. If `end_date` is used in the filter, `start_date` is also required. If neither `start_date` nor `end_date` are included in the filter, the UserListLicenseMetrics fields will not be populated in the response. */
  startDate?: string;
}

export const UserListLicenseMetrics: Schema.Codec<UserListLicenseMetrics> =
  /*@__PURE__*/ Schema.Struct({
    clickCount: Schema.optional(Schema.String),
    revenueUsdMicros: Schema.optional(Schema.String),
    impressionCount: Schema.optional(Schema.String),
    endDate: Schema.optional(Schema.String),
    startDate: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserListLicenseMetrics" });

export interface UserListGlobalLicense {
  /** Output only. Name of the user list being licensed. This field is read-only. */
  userListDisplayName?: string;
  /** Output only. Metrics related to this license This field is read-only and only populated if the start and end dates are set in the ListUserListGlobalLicenses call */
  metrics?: UserListLicenseMetrics;
  /** Identifier. The resource name of the user list global license. */
  name?: string;
  /** Immutable. Product type of client customer which the user list is being licensed to. */
  licenseType?:
    | "USER_LIST_GLOBAL_LICENSE_TYPE_UNSPECIFIED"
    | "USER_LIST_GLOBAL_LICENSE_TYPE_RESELLER"
    | "USER_LIST_GLOBAL_LICENSE_TYPE_DATA_MART_SELL_SIDE"
    | "USER_LIST_GLOBAL_LICENSE_TYPE_DATA_MART_BUY_SIDE"
    | (string & {});
  /** Optional. Status of UserListGlobalLicense - ENABLED or DISABLED. */
  status?:
    | "USER_LIST_LICENSE_STATUS_UNSPECIFIED"
    | "USER_LIST_LICENSE_STATUS_ENABLED"
    | "USER_LIST_LICENSE_STATUS_DISABLED"
    | (string & {});
  /** Output only. Pricing history of this user list license. This field is read-only. */
  historicalPricings?: ReadonlyArray<UserListLicensePricing>;
  /** Immutable. ID of the user list being licensed. */
  userListId?: string;
  /** Optional. UserListGlobalLicense pricing. */
  pricing?: UserListLicensePricing;
}

export const UserListGlobalLicense: Schema.Codec<UserListGlobalLicense> =
  /*@__PURE__*/ Schema.Struct({
    userListDisplayName: Schema.optional(Schema.String),
    metrics: Schema.optional(UserListLicenseMetrics),
    name: Schema.optional(Schema.String),
    licenseType: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    historicalPricings: Schema.optional(Schema.Array(UserListLicensePricing)),
    userListId: Schema.optional(Schema.String),
    pricing: Schema.optional(UserListLicensePricing),
  }).annotate({ identifier: "UserListGlobalLicense" });

export interface ErrorCount {
  /** The count of records that failed to upload for a given reason. */
  recordCount?: string;
  /** The error reason of the failed records. */
  reason?:
    | "PROCESSING_ERROR_REASON_UNSPECIFIED"
    | "PROCESSING_ERROR_REASON_INVALID_CUSTOM_VARIABLE"
    | "PROCESSING_ERROR_REASON_CUSTOM_VARIABLE_NOT_ENABLED"
    | "PROCESSING_ERROR_REASON_EVENT_TOO_OLD"
    | "PROCESSING_ERROR_REASON_DENIED_CONSENT"
    | "PROCESSING_ERROR_REASON_NO_CONSENT"
    | "PROCESSING_ERROR_REASON_UNKNOWN_CONSENT"
    | "PROCESSING_ERROR_REASON_DUPLICATE_GCLID"
    | "PROCESSING_ERROR_REASON_DUPLICATE_TRANSACTION_ID"
    | "PROCESSING_ERROR_REASON_INVALID_GBRAID"
    | "PROCESSING_ERROR_REASON_INVALID_GCLID"
    | "PROCESSING_ERROR_REASON_INVALID_MERCHANT_ID"
    | "PROCESSING_ERROR_REASON_INVALID_WBRAID"
    | "PROCESSING_ERROR_REASON_INTERNAL_ERROR"
    | "PROCESSING_ERROR_REASON_DESTINATION_ACCOUNT_ENHANCED_CONVERSIONS_TERMS_NOT_SIGNED"
    | "PROCESSING_ERROR_REASON_INVALID_EVENT"
    | "PROCESSING_ERROR_REASON_INSUFFICIENT_MATCHED_TRANSACTIONS"
    | "PROCESSING_ERROR_REASON_INSUFFICIENT_TRANSACTIONS"
    | "PROCESSING_ERROR_REASON_INVALID_FORMAT"
    | "PROCESSING_ERROR_REASON_DECRYPTION_ERROR"
    | "PROCESSING_ERROR_REASON_DEK_DECRYPTION_ERROR"
    | "PROCESSING_ERROR_REASON_INVALID_WIP"
    | "PROCESSING_ERROR_REASON_INVALID_KEK"
    | "PROCESSING_ERROR_REASON_WIP_AUTH_FAILED"
    | "PROCESSING_ERROR_REASON_KEK_PERMISSION_DENIED"
    | "PROCESSING_ERROR_REASON_AWS_AUTH_FAILED"
    | "PROCESSING_ERROR_REASON_USER_IDENTIFIER_DECRYPTION_ERROR"
    | "PROCESSING_ERROR_OPERATING_ACCOUNT_MISMATCH_FOR_AD_IDENTIFIER"
    | "PROCESSING_ERROR_REASON_ONE_PER_CLICK_CONVERSION_ACTION_NOT_PERMITTED_WITH_BRAID"
    | "PROCESSING_ERROR_REASON_MATCH_ID_NOT_FOUND"
    | "PROCESSING_ERROR_REASON_USER_ID_NOT_FOUND_FOR_MATCH_ID"
    | "PROCESSING_ERROR_REASON_USER_ID_NOT_FOUND_FOR_GCLID"
    | "PROCESSING_ERROR_REASON_USER_ID_NOT_FOUND_FOR_DCLID"
    | "PROCESSING_ERROR_REASON_INVALID_AD_IDENTIFIERS"
    | "PROCESSING_ERROR_REASON_INVALID_MOBILE_ID_FORMAT"
    | "PROCESSING_ERROR_REASON_ORIGINAL_CONVERSIONS_NOT_FOUND"
    | "PROCESSING_ERROR_REASON_EVENT_ID_DECODE_ERROR"
    | "PROCESSING_ERROR_REASON_USER_ID_NOT_FOUND_FOR_IMPRESSION_ID"
    | "PROCESSING_ERROR_REASON_USER_ID_NOT_FOUND"
    | "PROCESSING_ERROR_REASON_CONVERSION_PRECEDES_CLICK"
    | "PROCESSING_ERROR_REASON_TOO_RECENT_CLICK"
    | "PROCESSING_ERROR_REASON_INVALID_CLICK"
    | "PROCESSING_ERROR_REASON_INVALID_OPERATING_ACCOUNT_FOR_CLICK"
    | "PROCESSING_ERROR_REASON_CLICK_NOT_FOUND"
    | (string & {});
}

export const ErrorCount: Schema.Codec<ErrorCount> =
  /*@__PURE__*/ Schema.Struct({
    recordCount: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
  }).annotate({ identifier: "ErrorCount" });

export interface ErrorInfo {
  /** A list of errors and counts per error reason. May not be populated in all cases. */
  errorCounts?: ReadonlyArray<ErrorCount>;
}

export const ErrorInfo: Schema.Codec<ErrorInfo> =
  /*@__PURE__*/ Schema.Struct({
    errorCounts: Schema.optional(Schema.Array(ErrorCount)),
  }).annotate({ identifier: "ErrorInfo" });

export interface IngestEventsStatus {
  /** The total count of events sent in the upload request. Includes all events in the request, regardless of whether they were successfully ingested or not. */
  recordCount?: string;
}

export const IngestEventsStatus: Schema.Codec<IngestEventsStatus> =
  /*@__PURE__*/ Schema.Struct({
    recordCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "IngestEventsStatus" });

export interface PpidData {
  /** Required. The list of publisher provided identifiers for a user. */
  ppids?: ReadonlyArray<string>;
}

export const PpidData: Schema.Codec<PpidData> =
  /*@__PURE__*/ Schema.Struct({
    ppids: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "PpidData" });

export interface ItemCustomVariable {
  /** Optional. The value to store for the custom variable. */
  value?: string;
  /** Optional. Reference string used to determine which of the Event.destination_references the custom variable should be sent to. If empty, the Event.destination_references will be used. */
  destinationReferences?: ReadonlyArray<string>;
  /** Optional. The name of the custom variable to set. If the variable is not found for the given destination, it will be ignored. */
  variable?: string;
}

export const ItemCustomVariable: Schema.Codec<ItemCustomVariable> =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    destinationReferences: Schema.optional(Schema.Array(Schema.String)),
    variable: Schema.optional(Schema.String),
  }).annotate({ identifier: "ItemCustomVariable" });

export interface ItemParameter {
  /** Required. The name of the parameter to use. */
  parameterName?: string;
  /** Required. The string representation of the value of the parameter to set. */
  value?: string;
}

export const ItemParameter: Schema.Codec<ItemParameter> =
  /*@__PURE__*/ Schema.Struct({
    parameterName: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "ItemParameter" });

export interface Item {
  /** Optional. The unit price excluding tax, shipping, and any transaction level discounts. */
  unitPrice?: number;
  /** Optional. The feed label of the Merchant Center feed. If countries are still being used, the 2-letter country code in ISO-3166-1 alpha-2 can be used instead. For Store Sales events this will override the value set at the cart level. This field is ignored for other events. */
  merchantFeedLabel?: string;
  /** Optional. The Merchant Center ID associated with the item. For Store Sales events this will override the value set at the cart level. This field is ignored for other events. */
  merchantId?: string;
  /** Optional. Additional key/value pair information to send to the conversion containers (conversion action or Floodlight activity), when tracking per-item conversions. */
  customVariables?: ReadonlyArray<ItemCustomVariable>;
  /** Optional. The conversion value associated with this item within the event, for cases where the conversion value is different for each item. */
  conversionValue?: number;
  /** Optional. A unique identifier to reference the item. */
  itemId?: string;
  /** Optional. The product ID within the Merchant Center account. */
  merchantProductId?: string;
  /** Optional. The number of this item associated with the event. */
  quantity?: string;
  /** Optional. A bucket of any [event parameters related to an item](https://developers.google.com/analytics/devguides/collection/protocol/ga4/reference/events) to be included within the event that were not already specified using other structured fields. */
  additionalItemParameters?: ReadonlyArray<ItemParameter>;
  /** Optional. The language code in ISO 639-1 associated with the Merchant Center feed where your items are uploaded. */
  merchantFeedLanguageCode?: string;
}

export const Item: Schema.Codec<Item> =
  /*@__PURE__*/ Schema.Struct({
    unitPrice: Schema.optional(Schema.Number),
    merchantFeedLabel: Schema.optional(Schema.String),
    merchantId: Schema.optional(Schema.String),
    customVariables: Schema.optional(Schema.Array(ItemCustomVariable)),
    conversionValue: Schema.optional(Schema.Number),
    itemId: Schema.optional(Schema.String),
    merchantProductId: Schema.optional(Schema.String),
    quantity: Schema.optional(Schema.String),
    additionalItemParameters: Schema.optional(Schema.Array(ItemParameter)),
    merchantFeedLanguageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "Item" });

export interface ListUserListGlobalLicensesResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** The licenses for the given user list in the request. */
  userListGlobalLicenses?: ReadonlyArray<UserListGlobalLicense>;
}

export const ListUserListGlobalLicensesResponse: Schema.Codec<ListUserListGlobalLicensesResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    userListGlobalLicenses: Schema.optional(
      Schema.Array(UserListGlobalLicense),
    ),
  }).annotate({ identifier: "ListUserListGlobalLicensesResponse" });

export interface SizeInfo {
  /** Output only. Estimated number of members in this user list in the google.com domain. These are the members available for targeting in Search campaigns. */
  searchNetworkMembersCount?: string;
  /** Output only. Estimated number of members in this user list, on the Google Display Network. */
  displayNetworkMembersCount?: string;
  /** Output only. Estimated number of members in this user list on YouTube. */
  youtubeMembersCount?: string;
  /** Output only. Estimated number of members in this user list on Gmail. */
  gmailMembersCount?: string;
}

export const SizeInfo: Schema.Codec<SizeInfo> =
  /*@__PURE__*/ Schema.Struct({
    searchNetworkMembersCount: Schema.optional(Schema.String),
    displayNetworkMembersCount: Schema.optional(Schema.String),
    youtubeMembersCount: Schema.optional(Schema.String),
    gmailMembersCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "SizeInfo" });

export interface CartData {
  /** Optional. The list of items associated with the event. */
  items?: ReadonlyArray<Item>;
  /** Optional. The Merchant Center feed label associated with the feed of the items. */
  merchantFeedLabel?: string;
  /** Optional. The sum of all discounts associated with the transaction. */
  transactionDiscount?: number;
  /** Optional. The language code in ISO 639-1 associated with the Merchant Center feed of the items.where your items are uploaded. */
  merchantFeedLanguageCode?: string;
  /** Optional. The Merchant Center ID associated with the items. */
  merchantId?: string;
  /** Optional. The list of coupon codes that were applied to the cart. Cart-level and item-level coupon codes are independent. If the event is for a Google Analytics destination, only provide a single coupon code. Google Analytics ignores additional coupon codes. */
  couponCodes?: ReadonlyArray<string>;
}

export const CartData: Schema.Codec<CartData> =
  /*@__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(Item)),
    merchantFeedLabel: Schema.optional(Schema.String),
    transactionDiscount: Schema.optional(Schema.Number),
    merchantFeedLanguageCode: Schema.optional(Schema.String),
    merchantId: Schema.optional(Schema.String),
    couponCodes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CartData" });

export interface IngestPairDataStatus {
  /** The total count of audience members sent in the upload request for the destination. Includes all audience members in the request, regardless of whether they were successfully ingested or not. */
  recordCount?: string;
  /** The total count of pair ids sent in the upload request for the destination. Includes all pair ids in the request, regardless of whether they were successfully ingested or not. */
  pairIdCount?: string;
}

export const IngestPairDataStatus: Schema.Codec<IngestPairDataStatus> =
  /*@__PURE__*/ Schema.Struct({
    recordCount: Schema.optional(Schema.String),
    pairIdCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "IngestPairDataStatus" });

export interface EncryptedUserId {
  /** Required. The encryption entity ID. This should match the encryption configuration for ad serving or Data Transfer. */
  entityId?: string;
  /** Required. Describes whether the encrypted cookie was received from ad serving (the %m macro) or from Data Transfer. */
  source?:
    | "ENCRYPTION_SOURCE_UNSPECIFIED"
    | "AD_SERVING"
    | "DATA_TRANSFER"
    | (string & {});
  /** Required. The alphanumeric encrypted id. */
  encryptedId?: string;
  /** Required. The encryption entity type. This should match the encryption configuration for ad serving or Data Transfer. */
  entityType?:
    | "ENCRYPTION_ENTITY_TYPE_UNSPECIFIED"
    | "CAMPAIGN_MANAGER_ACCOUNT"
    | "CAMPAIGN_MANAGER_ADVERTISER"
    | "DISPLAY_VIDEO_PARTNER"
    | "DISPLAY_VIDEO_ADVERTISER"
    | "GOOGLE_ADS_CUSTOMER"
    | "GOOGLE_AD_MANAGER_NETWORK_CODE"
    | (string & {});
}

export const EncryptedUserId: Schema.Codec<EncryptedUserId> =
  /*@__PURE__*/ Schema.Struct({
    entityId: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    encryptedId: Schema.optional(Schema.String),
    entityType: Schema.optional(Schema.String),
  }).annotate({ identifier: "EncryptedUserId" });

export interface AdIdentifiers {
  /** Optional. Session attributes for event attribution and modeling. */
  sessionAttributes?: string;
  /** Optional. Information gathered about the device being used (if any) at the time of landing onto the advertiser’s site after interacting with the ad. */
  landingPageDeviceInfo?: DeviceInfo;
  /** Optional. The display click ID associated with this event. */
  dclid?: string;
  /** Optional. The mobile identifier for advertisers. This would be IDFA on iOS, AdID on Android, or other platforms’ identifiers for advertisers. */
  mobileDeviceId?: string;
  /** Optional. The impression ID associated with this event. */
  impressionId?: string;
  /** Optional. The match ID field used to join this event with a previous event. */
  matchId?: string;
  /** Optional. The click identifier for clicks associated with app events and originating from iOS devices starting with iOS14. */
  gbraid?: string;
  /** Optional. Any number of encrypted user IDs. */
  encryptedUserIds?: ReadonlyArray<EncryptedUserId>;
  /** Optional. The Google click ID (gclid) associated with this event. */
  gclid?: string;
  /** Optional. The click identifier for clicks associated with web events and originating from iOS devices starting with iOS14. */
  wbraid?: string;
}

export const AdIdentifiers: Schema.Codec<AdIdentifiers> =
  /*@__PURE__*/ Schema.Struct({
    sessionAttributes: Schema.optional(Schema.String),
    landingPageDeviceInfo: Schema.optional(DeviceInfo),
    dclid: Schema.optional(Schema.String),
    mobileDeviceId: Schema.optional(Schema.String),
    impressionId: Schema.optional(Schema.String),
    matchId: Schema.optional(Schema.String),
    gbraid: Schema.optional(Schema.String),
    encryptedUserIds: Schema.optional(Schema.Array(EncryptedUserId)),
    gclid: Schema.optional(Schema.String),
    wbraid: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdIdentifiers" });

export interface Destination {
  /** Optional. ID for this `Destination` resource, unique within the request. Use to reference this `Destination` in the IngestEventsRequest and IngestAudienceMembersRequest. */
  reference?: string;
  /** Required. The account to send the data to or remove the data from. */
  operatingAccount?: ProductAccount;
  /** Optional. An account that the calling user's `login_account` has access to, through an established account link. For example, a data partner's `login_account` might have access to a client's `linked_account`. The partner might use this field to send data from the `linked_account` to another `operating_account`. */
  linkedAccount?: ProductAccount;
  /** Optional. The account used to make this API call. To add or remove data from the `operating_account`, this `login_account` must have write access to the `operating_account`. For example, a manager account of the `operating_account`, or an account with an established link to the `operating_account`. */
  loginAccount?: ProductAccount;
  /** Required. The object within the product account to ingest into. For example, a Google Ads audience ID, a Display & Video 360 audience ID or a Google Ads conversion action ID. */
  productDestinationId?: string;
}

export const Destination: Schema.Codec<Destination> =
  /*@__PURE__*/ Schema.Struct({
    reference: Schema.optional(Schema.String),
    operatingAccount: Schema.optional(ProductAccount),
    linkedAccount: Schema.optional(ProductAccount),
    loginAccount: Schema.optional(ProductAccount),
    productDestinationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Destination" });

export interface IpData {
  /** Optional. Last recorded interaction time from this IP address in a session. */
  observeEndTime?: string;
  /** Required. IP address captured at the time of customer interaction. Accepts standard string formats for both IPv4 and IPv6. */
  ipAddress?: string;
  /** Optional. First recorded interaction time from this IP address in a session. */
  observeStartTime?: string;
}

export const IpData: Schema.Codec<IpData> =
  /*@__PURE__*/ Schema.Struct({
    observeEndTime: Schema.optional(Schema.String),
    ipAddress: Schema.optional(Schema.String),
    observeStartTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "IpData" });

export interface CompositeData {
  /** Optional. User-provided data that identifies the user. */
  userData?: UserData;
  /** Optional. IP address data representing customer interaction used to build the audience. */
  ipData?: ReadonlyArray<IpData>;
}

export const CompositeData: Schema.Codec<CompositeData> =
  /*@__PURE__*/ Schema.Struct({
    userData: Schema.optional(UserData),
    ipData: Schema.optional(Schema.Array(IpData)),
  }).annotate({ identifier: "CompositeData" });

export interface PairData {
  /** Required. Cleanroom-provided PII data, hashed with SHA256, and encrypted with an EC commutative cipher using publisher key for the [PAIR]((//support.google.com/admanager/answer/15067908)) user list. At most 10 `pairIds` can be provided in a single AudienceMember. */
  pairIds?: ReadonlyArray<string>;
}

export const PairData: Schema.Codec<PairData> =
  /*@__PURE__*/ Schema.Struct({
    pairIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "PairData" });

export interface UserIdData {
  /** Required. A unique identifier for a user, as defined by the advertiser. */
  userId?: string;
}

export const UserIdData: Schema.Codec<UserIdData> =
  /*@__PURE__*/ Schema.Struct({
    userId: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserIdData" });

export interface Consent {
  /** Optional. Represents if the user consents to ad user data. */
  adUserData?:
    | "CONSENT_STATUS_UNSPECIFIED"
    | "CONSENT_GRANTED"
    | "CONSENT_DENIED"
    | (string & {});
  /** Optional. Represents if the user consents to ad personalization. */
  adPersonalization?:
    | "CONSENT_STATUS_UNSPECIFIED"
    | "CONSENT_GRANTED"
    | "CONSENT_DENIED"
    | (string & {});
}

export const Consent: Schema.Codec<Consent> =
  /*@__PURE__*/ Schema.Struct({
    adUserData: Schema.optional(Schema.String),
    adPersonalization: Schema.optional(Schema.String),
  }).annotate({ identifier: "Consent" });

export interface MobileData {
  /** Required. The list of mobile device IDs (advertising ID/IDFA). At most 10 `mobileIds` can be provided in a single AudienceMember. */
  mobileIds?: ReadonlyArray<string>;
}

export const MobileData: Schema.Codec<MobileData> =
  /*@__PURE__*/ Schema.Struct({
    mobileIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "MobileData" });

export interface AudienceMember {
  /** Data related to publisher provided identifiers. This feature is only available to data partners. */
  ppidData?: PpidData;
  /** Group of multiple identifier types. */
  compositeData?: CompositeData;
  /** User-provided data that identifies the user. */
  userData?: UserData;
  /** Optional. Defines which Destination to send the audience member to. */
  destinationReferences?: ReadonlyArray<string>;
  /** [Publisher Advertiser Identity Reconciliation (PAIR) IDs](//support.google.com/admanager/answer/15067908). This feature is only available to data partners. */
  pairData?: PairData;
  /** Data related to unique identifiers for a user, as defined by the advertiser. */
  userIdData?: UserIdData;
  /** Optional. The consent setting for the user. */
  consent?: Consent;
  /** Data identifying the user's mobile devices. */
  mobileData?: MobileData;
}

export const AudienceMember: Schema.Codec<AudienceMember> =
  /*@__PURE__*/ Schema.Struct({
    ppidData: Schema.optional(PpidData),
    compositeData: Schema.optional(CompositeData),
    userData: Schema.optional(UserData),
    destinationReferences: Schema.optional(Schema.Array(Schema.String)),
    pairData: Schema.optional(PairData),
    userIdData: Schema.optional(UserIdData),
    consent: Schema.optional(Consent),
    mobileData: Schema.optional(MobileData),
  }).annotate({ identifier: "AudienceMember" });

export interface RemoveAudienceMembersRequest {
  /** Required. The list of destinations to remove the users from. */
  destinations?: ReadonlyArray<Destination>;
  /** Required. The list of users to remove. */
  audienceMembers?: ReadonlyArray<AudienceMember>;
  /** Optional. Encryption information for UserData uploads. If not set, it's assumed that uploaded identifying information is hashed but not encrypted. For non `UserData` uploads, this field is ignored. */
  encryptionInfo?: EncryptionInfo;
  /** Optional. For testing purposes. If `true`, the request is validated but not executed. Only errors are returned, not results. */
  validateOnly?: boolean;
  /** Optional. Required for UserData uploads. The encoding type of the user identifiers. Applies to only the outer encoding for encrypted user identifiers. For non `UserData` uploads, this field is ignored. */
  encoding?: "ENCODING_UNSPECIFIED" | "HEX" | "BASE64" | (string & {});
}

export const RemoveAudienceMembersRequest: Schema.Codec<RemoveAudienceMembersRequest> =
  /*@__PURE__*/ Schema.Struct({
    destinations: Schema.optional(Schema.Array(Destination)),
    audienceMembers: Schema.optional(Schema.Array(AudienceMember)),
    encryptionInfo: Schema.optional(EncryptionInfo),
    validateOnly: Schema.optional(Schema.Boolean),
    encoding: Schema.optional(Schema.String),
  }).annotate({ identifier: "RemoveAudienceMembersRequest" });

export interface WarningInfo {
  /** A list of warnings and counts per warning reason. */
  warningCounts?: ReadonlyArray<WarningCount>;
}

export const WarningInfo: Schema.Codec<WarningInfo> =
  /*@__PURE__*/ Schema.Struct({
    warningCounts: Schema.optional(Schema.Array(WarningCount)),
  }).annotate({ identifier: "WarningInfo" });

export interface ExperimentalField {
  /** Optional. The name of the field to use. */
  field?: string;
  /** Optional. The value the field to set. */
  value?: string;
}

export const ExperimentalField: Schema.Codec<ExperimentalField> =
  /*@__PURE__*/ Schema.Struct({
    field: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExperimentalField" });

export interface RemovePpidDataStatus {
  /** The total count of audience members sent in the removal request. Includes all audience members in the request, regardless of whether they were successfully removed or not. */
  recordCount?: string;
  /** The total count of ppids sent in the removal request. Includes all ppids in the request, regardless of whether they were successfully removed or not. */
  ppidCount?: string;
}

export const RemovePpidDataStatus: Schema.Codec<RemovePpidDataStatus> =
  /*@__PURE__*/ Schema.Struct({
    recordCount: Schema.optional(Schema.String),
    ppidCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "RemovePpidDataStatus" });

export interface Status {
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
}

export const Status: Schema.Codec<Status> =
  /*@__PURE__*/ Schema.Struct({
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "Status" });

export interface CustomVariable {
  /** Optional. The name of the custom variable to set. If the variable is not found for the given destination, it will be ignored. */
  variable?: string;
  /** Optional. The value to store for the custom variable. */
  value?: string;
  /** Optional. Reference string used to determine which of the Event.destination_references the custom variable should be sent to. If empty, the Event.destination_references will be used. */
  destinationReferences?: ReadonlyArray<string>;
}

export const CustomVariable: Schema.Codec<CustomVariable> =
  /*@__PURE__*/ Schema.Struct({
    variable: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    destinationReferences: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CustomVariable" });

export interface UserProperty {
  /** Required. The name of the user property to use. */
  propertyName?: string;
  /** Required. The string representation of the value of the user property to use. */
  value?: string;
}

export const UserProperty: Schema.Codec<UserProperty> =
  /*@__PURE__*/ Schema.Struct({
    propertyName: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserProperty" });

export interface UserProperties {
  /** Optional. Type of the customer associated with the event. */
  customerType?:
    | "CUSTOMER_TYPE_UNSPECIFIED"
    | "NEW"
    | "RETURNING"
    | "REENGAGED"
    | (string & {});
  /** Optional. The advertiser-assessed value of the customer. */
  customerValueBucket?:
    | "CUSTOMER_VALUE_BUCKET_UNSPECIFIED"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | (string & {});
  /** Optional. A bucket of any additional [user properties](https://developers.google.com/analytics/devguides/collection/protocol/ga4/user-properties) for the user associated with this event. */
  additionalUserProperties?: ReadonlyArray<UserProperty>;
}

export const UserProperties: Schema.Codec<UserProperties> =
  /*@__PURE__*/ Schema.Struct({
    customerType: Schema.optional(Schema.String),
    customerValueBucket: Schema.optional(Schema.String),
    additionalUserProperties: Schema.optional(Schema.Array(UserProperty)),
  }).annotate({ identifier: "UserProperties" });

export interface EventParameter {
  /** Required. The string representation of the value of the parameter to set. */
  value?: string;
  /** Required. The name of the parameter to use. */
  parameterName?: string;
}

export const EventParameter: Schema.Codec<EventParameter> =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    parameterName: Schema.optional(Schema.String),
  }).annotate({ identifier: "EventParameter" });

export interface Event {
  /** Optional. Information gathered about the device being used (if any) when the event happened. */
  eventDeviceInfo?: DeviceInfo;
  /** Optional. A list of key/value pairs for experimental fields that may eventually be promoted to be part of the API. */
  experimentalFields?: ReadonlyArray<ExperimentalField>;
  /** Optional. The last time the event was updated. */
  lastUpdatedTimestamp?: string;
  /** Optional. Pieces of user provided data, representing the user the event is associated with. */
  userData?: UserData;
  /** Optional. The conversion value associated with the event, for value-based conversions. */
  conversionValue?: number;
  /** Optional. Additional key/value pair information to send to the conversion containers (conversion action or FL activity). */
  customVariables?: ReadonlyArray<CustomVariable>;
  /** Optional. The unique identifier for this event. Required for events sent as an additional data source for tag conversions. */
  transactionId?: string;
  /** Optional. Information about the transaction and items associated with the event. */
  cartData?: CartData;
  /** Optional. The same type of data provided in user_data, but explicitly flagged as being provided as owned by a third-party and not first-party advertiser data. */
  thirdPartyUserData?: UserData;
  /** Optional. Reference string used to determine the destination. If empty, the event will be sent to all destinations in the request. */
  destinationReferences?: ReadonlyArray<string>;
  /** Optional. A unique identifier for a user, as defined by the advertiser. */
  userId?: string;
  /** Optional. A unique identifier for the user instance of an app client for this GA4 app stream. */
  appInstanceId?: string;
  /** Optional. Information about whether the associated user has provided different types of consent. */
  consent?: Consent;
  /** Optional. The conversion quantity associated with the event, for counting-based conversions. */
  conversionCount?: number;
  /** Optional. A unique identifier for the user instance of a web client for this GA4 web stream. */
  clientId?: string;
  /** Required. The time the event occurred. */
  eventTimestamp?: string;
  /** Optional. Signal for where the event happened (web, app, in-store, etc.). */
  eventSource?:
    | "EVENT_SOURCE_UNSPECIFIED"
    | "WEB"
    | "APP"
    | "IN_STORE"
    | "PHONE"
    | "MESSAGE"
    | "OTHER"
    | (string & {});
  /** Optional. The currency code associated with all monetary values within this event. */
  currency?: string;
  /** Optional. Advertiser-assessed information about the user at the time that the event happened. */
  userProperties?: UserProperties;
  /** Optional. Identifiers and other information used to match the conversion event with other online activity (such as ad clicks). */
  adIdentifiers?: AdIdentifiers;
  /** Optional. Information gathered about the location of the user when this event occurred. */
  eventLocation?: EventLocation;
  /** Optional. The name of the event. Required for GA4 events. */
  eventName?: string;
  /** Optional. A bucket of any [event parameters](https://developers.google.com/analytics/devguides/collection/protocol/ga4/reference/events) to be included within the event that were not already specified using other structured fields. */
  additionalEventParameters?: ReadonlyArray<EventParameter>;
}

export const Event: Schema.Codec<Event> =
  /*@__PURE__*/ Schema.Struct({
    eventDeviceInfo: Schema.optional(DeviceInfo),
    experimentalFields: Schema.optional(Schema.Array(ExperimentalField)),
    lastUpdatedTimestamp: Schema.optional(Schema.String),
    userData: Schema.optional(UserData),
    conversionValue: Schema.optional(Schema.Number),
    customVariables: Schema.optional(Schema.Array(CustomVariable)),
    transactionId: Schema.optional(Schema.String),
    cartData: Schema.optional(CartData),
    thirdPartyUserData: Schema.optional(UserData),
    destinationReferences: Schema.optional(Schema.Array(Schema.String)),
    userId: Schema.optional(Schema.String),
    appInstanceId: Schema.optional(Schema.String),
    consent: Schema.optional(Consent),
    conversionCount: Schema.optional(Schema.Number),
    clientId: Schema.optional(Schema.String),
    eventTimestamp: Schema.optional(Schema.String),
    eventSource: Schema.optional(Schema.String),
    currency: Schema.optional(Schema.String),
    userProperties: Schema.optional(UserProperties),
    adIdentifiers: Schema.optional(AdIdentifiers),
    eventLocation: Schema.optional(EventLocation),
    eventName: Schema.optional(Schema.String),
    additionalEventParameters: Schema.optional(Schema.Array(EventParameter)),
  }).annotate({ identifier: "Event" });

export interface IngestEventsRequest {
  /** Optional. For testing purposes. If `true`, the request is validated but not executed. Only errors are returned, not results. */
  validateOnly?: boolean;
  /** Required. The list of destinations to send the events to. */
  destinations?: ReadonlyArray<Destination>;
  /** Optional. Encryption information for UserData uploads. If not set, it's assumed that uploaded identifying information is hashed but not encrypted. For non `UserData` uploads, this field is ignored. */
  encryptionInfo?: EncryptionInfo;
  /** Optional. Request-level consent to apply to all users in the request. User-level consent overrides request-level consent, and can be specified in each Event. */
  consent?: Consent;
  /** Required. The list of events to send to the specified destinations. At most 2000 Event resources can be sent in a single request. */
  events?: ReadonlyArray<Event>;
  /** Optional. Required for UserData uploads. The encoding type of the user identifiers. For hashed user identifiers, this is the encoding type of the hashed string. For encrypted hashed user identifiers, this is the encoding type of the outer encrypted string, but not necessarily the inner hashed string, meaning the inner hashed string could be encoded in a different way than the outer encrypted string. For non `UserData` uploads, this field is ignored. */
  encoding?: "ENCODING_UNSPECIFIED" | "HEX" | "BASE64" | (string & {});
}

export const IngestEventsRequest: Schema.Codec<IngestEventsRequest> =
  /*@__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean),
    destinations: Schema.optional(Schema.Array(Destination)),
    encryptionInfo: Schema.optional(EncryptionInfo),
    consent: Schema.optional(Consent),
    events: Schema.optional(Schema.Array(Event)),
    encoding: Schema.optional(Schema.String),
  }).annotate({ identifier: "IngestEventsRequest" });

export interface UserListDirectLicense {
  /** Immutable. Account type of client customer which the user list is being licensed to. */
  clientAccountType?:
    | "USER_LIST_LICENSE_CLIENT_ACCOUNT_TYPE_UNKNOWN"
    | "USER_LIST_LICENSE_CLIENT_ACCOUNT_TYPE_GOOGLE_ADS"
    | "USER_LIST_LICENSE_CLIENT_ACCOUNT_TYPE_DISPLAY_VIDEO_PARTNER"
    | "USER_LIST_LICENSE_CLIENT_ACCOUNT_TYPE_DISPLAY_VIDEO_ADVERTISER"
    | "USER_LIST_LICENSE_CLIENT_ACCOUNT_TYPE_GOOGLE_AD_MANAGER_AUDIENCE_LINK"
    | (string & {});
  /** Optional. Status of UserListDirectLicense - ENABLED or DISABLED. */
  status?:
    | "USER_LIST_LICENSE_STATUS_UNSPECIFIED"
    | "USER_LIST_LICENSE_STATUS_ENABLED"
    | "USER_LIST_LICENSE_STATUS_DISABLED"
    | (string & {});
  /** Output only. Name of the user list being licensed. This field is read-only. */
  userListDisplayName?: string;
  /** Output only. Metrics related to this license This field is read-only and only populated if the start and end dates are set in the ListUserListDirectLicenses call */
  metrics?: UserListLicenseMetrics;
  /** Immutable. ID of the user list being licensed. */
  userListId?: string;
  /** Optional. UserListDirectLicense pricing. */
  pricing?: UserListLicensePricing;
  /** Output only. Pricing history of this user list license. This field is read-only. */
  historicalPricings?: ReadonlyArray<UserListLicensePricing>;
  /** Immutable. ID of client customer which the user list is being licensed to. */
  clientAccountId?: string;
  /** Identifier. The resource name of the user list direct license. */
  name?: string;
  /** Output only. Name of client customer which the user list is being licensed to. This field is read-only. */
  clientAccountDisplayName?: string;
}

export const UserListDirectLicense: Schema.Codec<UserListDirectLicense> =
  /*@__PURE__*/ Schema.Struct({
    clientAccountType: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    userListDisplayName: Schema.optional(Schema.String),
    metrics: Schema.optional(UserListLicenseMetrics),
    userListId: Schema.optional(Schema.String),
    pricing: Schema.optional(UserListLicensePricing),
    historicalPricings: Schema.optional(Schema.Array(UserListLicensePricing)),
    clientAccountId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    clientAccountDisplayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserListDirectLicense" });

export interface ListUserListDirectLicensesResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** The licenses for the given user list in the request. */
  userListDirectLicenses?: ReadonlyArray<UserListDirectLicense>;
}

export const ListUserListDirectLicensesResponse: Schema.Codec<ListUserListDirectLicensesResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    userListDirectLicenses: Schema.optional(
      Schema.Array(UserListDirectLicense),
    ),
  }).annotate({ identifier: "ListUserListDirectLicensesResponse" });

export interface TargetNetworkInfo {
  /** Output only. Indicates this user list is eligible for Google Display Network. */
  eligibleForDisplay?: boolean;
  /** Optional. Indicates if this user list is eligible for Google Search Network. */
  eligibleForSearch?: boolean;
}

export const TargetNetworkInfo: Schema.Codec<TargetNetworkInfo> =
  /*@__PURE__*/ Schema.Struct({
    eligibleForDisplay: Schema.optional(Schema.Boolean),
    eligibleForSearch: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "TargetNetworkInfo" });

export interface UserList {
  /** Optional. Membership status of this user list. */
  membershipStatus?:
    | "MEMBERSHIP_STATUS_UNSPECIFIED"
    | "OPEN"
    | "CLOSED"
    | (string & {});
  /** Output only. The reason why this user list membership status is closed. */
  closingReason?: "CLOSING_REASON_UNSPECIFIED" | "UNUSED" | (string & {});
  /** Optional. The duration a user remains in the user list. Valid durations are exact multiples of 24 hours (86400 seconds). Providing a value that is not an exact multiple of 24 hours will result in an INVALID_ARGUMENT error. */
  membershipDuration?: string;
  /** Output only. The reason this account has been granted access to the list. */
  accessReason?:
    | "ACCESS_REASON_UNSPECIFIED"
    | "OWNED"
    | "SHARED"
    | "LICENSED"
    | "SUBSCRIBED"
    | "AFFILIATED"
    | (string & {});
  /** Optional. Indicates if this share is still enabled. When a user list is shared with the account this field is set to `ENABLED`. Later the user list owner can decide to revoke the share and make it `DISABLED`. */
  accountAccessStatus?:
    | "ACCESS_STATUS_UNSPECIFIED"
    | "ENABLED"
    | "DISABLED"
    | (string & {});
  /** Output only. An option that indicates if a user may edit a list. */
  readOnly?: boolean;
  /** Output only. Estimated number of members in this user list in different target networks. */
  sizeInfo?: SizeInfo;
  /** Optional. Eligibility information for different target networks. */
  targetNetworkInfo?: TargetNetworkInfo;
  /** Optional. A description of the user list. */
  description?: string;
  /** Optional. An ID from external system. It is used by user list sellers to correlate IDs on their systems. */
  integrationCode?: string;
  /** Optional. Represents a user list that is populated by user ingested data. */
  ingestedUserListInfo?: IngestedUserListInfo;
  /** Required. The display name of the user list. */
  displayName?: string;
  /** Output only. The unique ID of the user list. */
  id?: string;
  /** Identifier. The resource name of the user list. Format: accountTypes/{account_type}/accounts/{account}/userLists/{user_list} */
  name?: string;
}

export const UserList: Schema.Codec<UserList> =
  /*@__PURE__*/ Schema.Struct({
    membershipStatus: Schema.optional(Schema.String),
    closingReason: Schema.optional(Schema.String),
    membershipDuration: Schema.optional(Schema.String),
    accessReason: Schema.optional(Schema.String),
    accountAccessStatus: Schema.optional(Schema.String),
    readOnly: Schema.optional(Schema.Boolean),
    sizeInfo: Schema.optional(SizeInfo),
    targetNetworkInfo: Schema.optional(TargetNetworkInfo),
    description: Schema.optional(Schema.String),
    integrationCode: Schema.optional(Schema.String),
    ingestedUserListInfo: Schema.optional(IngestedUserListInfo),
    displayName: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserList" });

export interface TermsOfService {
  /** Optional. The Customer Match terms of service: https://support.google.com/adspolicy/answer/6299717. This must be accepted when ingesting UserData or MobileData. This field is not required for Partner Match User list. */
  customerMatchTermsOfServiceStatus?:
    | "TERMS_OF_SERVICE_STATUS_UNSPECIFIED"
    | "ACCEPTED"
    | "REJECTED"
    | (string & {});
}

export const TermsOfService: Schema.Codec<TermsOfService> =
  /*@__PURE__*/ Schema.Struct({
    customerMatchTermsOfServiceStatus: Schema.optional(Schema.String),
  }).annotate({ identifier: "TermsOfService" });

export interface RemoveMobileDataStatus {
  /** The total count of audience members sent in the removal request. Includes all audience members in the request, regardless of whether they were successfully removed or not. */
  recordCount?: string;
  /** The total count of mobile Ids sent in the removal request. Includes all mobile ids in the request, regardless of whether they were successfully removed or not. */
  mobileIdCount?: string;
}

export const RemoveMobileDataStatus: Schema.Codec<RemoveMobileDataStatus> =
  /*@__PURE__*/ Schema.Struct({
    recordCount: Schema.optional(Schema.String),
    mobileIdCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "RemoveMobileDataStatus" });

export interface ListUserListsResponse {
  /** The user lists from the specified account. */
  userLists?: ReadonlyArray<UserList>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListUserListsResponse: Schema.Codec<ListUserListsResponse> =
  /*@__PURE__*/ Schema.Struct({
    userLists: Schema.optional(Schema.Array(UserList)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListUserListsResponse" });

export interface IngestMobileDataStatus {
  /** The total count of audience members sent in the upload request for the destination. Includes all audience members in the request, regardless of whether they were successfully ingested or not. */
  recordCount?: string;
  /** The total count of mobile ids sent in the upload request for the destination. Includes all mobile ids in the request, regardless of whether they were successfully ingested or not. */
  mobileIdCount?: string;
}

export const IngestMobileDataStatus: Schema.Codec<IngestMobileDataStatus> =
  /*@__PURE__*/ Schema.Struct({
    recordCount: Schema.optional(Schema.String),
    mobileIdCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "IngestMobileDataStatus" });

export interface IngestCompositeDataStatus {
  /** The total count of audience members sent in the upload request for the destination. Includes all audience members in the request, regardless of whether they were successfully ingested or not. */
  recordCount?: string;
  /** The total count of data types sent in the upload request for the destination, broken down by data type. Includes all data types in the request, regardless of whether they were successfully ingested or not. */
  dataTypeCounts?: ReadonlyArray<DataTypeCount>;
  /** The match rate range of the upload. */
  uploadMatchRateRange?:
    | "MATCH_RATE_RANGE_UNKNOWN"
    | "MATCH_RATE_RANGE_NOT_ELIGIBLE"
    | "MATCH_RATE_RANGE_LESS_THAN_20"
    | "MATCH_RATE_RANGE_20_TO_30"
    | "MATCH_RATE_RANGE_31_TO_40"
    | "MATCH_RATE_RANGE_41_TO_50"
    | "MATCH_RATE_RANGE_51_TO_60"
    | "MATCH_RATE_RANGE_61_TO_70"
    | "MATCH_RATE_RANGE_71_TO_80"
    | "MATCH_RATE_RANGE_81_TO_90"
    | "MATCH_RATE_RANGE_91_TO_100"
    | (string & {});
}

export const IngestCompositeDataStatus: Schema.Codec<IngestCompositeDataStatus> =
  /*@__PURE__*/ Schema.Struct({
    recordCount: Schema.optional(Schema.String),
    dataTypeCounts: Schema.optional(Schema.Array(DataTypeCount)),
    uploadMatchRateRange: Schema.optional(Schema.String),
  }).annotate({ identifier: "IngestCompositeDataStatus" });

export interface IngestUserDataStatus {
  /** The total count of audience members sent in the upload request for the destination. Includes all audience members in the request, regardless of whether they were successfully ingested or not. */
  recordCount?: string;
  /** The total count of user identifiers sent in the upload request for the destination. Includes all user identifiers in the request, regardless of whether they were successfully ingested or not. */
  userIdentifierCount?: string;
  /** The match rate range of the upload. */
  uploadMatchRateRange?:
    | "MATCH_RATE_RANGE_UNKNOWN"
    | "MATCH_RATE_RANGE_NOT_ELIGIBLE"
    | "MATCH_RATE_RANGE_LESS_THAN_20"
    | "MATCH_RATE_RANGE_20_TO_30"
    | "MATCH_RATE_RANGE_31_TO_40"
    | "MATCH_RATE_RANGE_41_TO_50"
    | "MATCH_RATE_RANGE_51_TO_60"
    | "MATCH_RATE_RANGE_61_TO_70"
    | "MATCH_RATE_RANGE_71_TO_80"
    | "MATCH_RATE_RANGE_81_TO_90"
    | "MATCH_RATE_RANGE_91_TO_100"
    | (string & {});
}

export const IngestUserDataStatus: Schema.Codec<IngestUserDataStatus> =
  /*@__PURE__*/ Schema.Struct({
    recordCount: Schema.optional(Schema.String),
    userIdentifierCount: Schema.optional(Schema.String),
    uploadMatchRateRange: Schema.optional(Schema.String),
  }).annotate({ identifier: "IngestUserDataStatus" });

export interface IngestPpidDataStatus {
  /** The total count of audience members sent in the upload request for the destination. Includes all audience members in the request, regardless of whether they were successfully ingested or not. */
  recordCount?: string;
  /** The total count of ppids sent in the upload request for the destination. Includes all ppids in the request, regardless of whether they were successfully ingested or not. */
  ppidCount?: string;
}

export const IngestPpidDataStatus: Schema.Codec<IngestPpidDataStatus> =
  /*@__PURE__*/ Schema.Struct({
    recordCount: Schema.optional(Schema.String),
    ppidCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "IngestPpidDataStatus" });

export interface IngestAudienceMembersStatus {
  /** The status of the mobile data ingestion to the destination. */
  mobileDataIngestionStatus?: IngestMobileDataStatus;
  /** The status of the composite data ingestion to the destination. */
  compositeDataIngestionStatus?: IngestCompositeDataStatus;
  /** The status of the pair data ingestion to the destination. */
  pairDataIngestionStatus?: IngestPairDataStatus;
  /** The status of the user data ingestion to the destination. */
  userDataIngestionStatus?: IngestUserDataStatus;
  /** The status of the user id data ingestion to the destination. */
  userIdDataIngestionStatus?: IngestUserIdDataStatus;
  /** The status of the ppid data ingestion to the destination. */
  ppidDataIngestionStatus?: IngestPpidDataStatus;
}

export const IngestAudienceMembersStatus: Schema.Codec<IngestAudienceMembersStatus> =
  /*@__PURE__*/ Schema.Struct({
    mobileDataIngestionStatus: Schema.optional(IngestMobileDataStatus),
    compositeDataIngestionStatus: Schema.optional(IngestCompositeDataStatus),
    pairDataIngestionStatus: Schema.optional(IngestPairDataStatus),
    userDataIngestionStatus: Schema.optional(IngestUserDataStatus),
    userIdDataIngestionStatus: Schema.optional(IngestUserIdDataStatus),
    ppidDataIngestionStatus: Schema.optional(IngestPpidDataStatus),
  }).annotate({ identifier: "IngestAudienceMembersStatus" });

export interface RemovePairDataStatus {
  /** The total count of audience members sent in the removal request. Includes all audience members in the request, regardless of whether they were successfully removed or not. */
  recordCount?: string;
  /** The total count of pair ids sent in the removal request. Includes all pair ids in the request, regardless of whether they were successfully removed or not. */
  pairIdCount?: string;
}

export const RemovePairDataStatus: Schema.Codec<RemovePairDataStatus> =
  /*@__PURE__*/ Schema.Struct({
    recordCount: Schema.optional(Schema.String),
    pairIdCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "RemovePairDataStatus" });

export interface RemoveUserIdDataStatus {
  /** The total count of audience members sent in the removal request. Includes all audience members in the request, regardless of whether they were successfully removed or not. */
  recordCount?: string;
  /** The total count of user ids sent in the removal request. Includes all user ids in the request, regardless of whether they were successfully removed or not. */
  userIdCount?: string;
}

export const RemoveUserIdDataStatus: Schema.Codec<RemoveUserIdDataStatus> =
  /*@__PURE__*/ Schema.Struct({
    recordCount: Schema.optional(Schema.String),
    userIdCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "RemoveUserIdDataStatus" });

export interface RemoveAudienceMembersStatus {
  /** The status of the mobile data removal from the destination. */
  mobileDataRemovalStatus?: RemoveMobileDataStatus;
  /** The status of the pair data removal from the destination. */
  pairDataRemovalStatus?: RemovePairDataStatus;
  /** The status of the user data removal from the destination. */
  userDataRemovalStatus?: RemoveUserDataStatus;
  /** The status of the user id data removal from the destination. */
  userIdDataRemovalStatus?: RemoveUserIdDataStatus;
  /** The status of the ppid data removal from the destination. */
  ppidDataRemovalStatus?: RemovePpidDataStatus;
  /** The status of the composite data removal from the destination. */
  compositeDataRemovalStatus?: RemoveCompositeDataStatus;
}

export const RemoveAudienceMembersStatus: Schema.Codec<RemoveAudienceMembersStatus> =
  /*@__PURE__*/ Schema.Struct({
    mobileDataRemovalStatus: Schema.optional(RemoveMobileDataStatus),
    pairDataRemovalStatus: Schema.optional(RemovePairDataStatus),
    userDataRemovalStatus: Schema.optional(RemoveUserDataStatus),
    userIdDataRemovalStatus: Schema.optional(RemoveUserIdDataStatus),
    ppidDataRemovalStatus: Schema.optional(RemovePpidDataStatus),
    compositeDataRemovalStatus: Schema.optional(RemoveCompositeDataStatus),
  }).annotate({ identifier: "RemoveAudienceMembersStatus" });

export interface RequestStatusPerDestination {
  /** The status of the ingest audience members request. */
  audienceMembersIngestionStatus?: IngestAudienceMembersStatus;
  /** The status of the remove audience members request. */
  audienceMembersRemovalStatus?: RemoveAudienceMembersStatus;
  /** A destination within a DM API request. */
  destination?: Destination;
  /** An error info error containing the error reason and error counts related to the upload. Only populated if the `request_status` is `FAILED` or `PARTIAL_SUCCESS`. This field isn't populated while the request has `request_status` of `PROCESSING`. */
  errorInfo?: ErrorInfo;
  /** A warning info containing the warning reason and warning counts related to the upload. This field isn't populated while the request has `request_status` of `PROCESSING`. */
  warningInfo?: WarningInfo;
  /** The status of the ingest events request. */
  eventsIngestionStatus?: IngestEventsStatus;
  /** The request status of the destination. */
  requestStatus?:
    | "REQUEST_STATUS_UNKNOWN"
    | "SUCCESS"
    | "PROCESSING"
    | "FAILED"
    | "PARTIAL_SUCCESS"
    | (string & {});
}

export const RequestStatusPerDestination: Schema.Codec<RequestStatusPerDestination> =
  /*@__PURE__*/ Schema.Struct({
    audienceMembersIngestionStatus: Schema.optional(
      IngestAudienceMembersStatus,
    ),
    audienceMembersRemovalStatus: Schema.optional(RemoveAudienceMembersStatus),
    destination: Schema.optional(Destination),
    errorInfo: Schema.optional(ErrorInfo),
    warningInfo: Schema.optional(WarningInfo),
    eventsIngestionStatus: Schema.optional(IngestEventsStatus),
    requestStatus: Schema.optional(Schema.String),
  }).annotate({ identifier: "RequestStatusPerDestination" });

export interface RetrieveInsightsResponse {
  /** Contains the insights for the marketing data. */
  marketingDataInsights?: ReadonlyArray<MarketingDataInsight>;
}

export const RetrieveInsightsResponse: Schema.Codec<RetrieveInsightsResponse> =
  /*@__PURE__*/ Schema.Struct({
    marketingDataInsights: Schema.optional(Schema.Array(MarketingDataInsight)),
  }).annotate({ identifier: "RetrieveInsightsResponse" });

export interface UserListGlobalLicenseCustomerInfo {
  /** Identifier. The resource name of the user list global license customer. */
  name?: string;
  /** Output only. Product type of client customer which the user list is being licensed to. */
  licenseType?:
    | "USER_LIST_GLOBAL_LICENSE_TYPE_UNSPECIFIED"
    | "USER_LIST_GLOBAL_LICENSE_TYPE_RESELLER"
    | "USER_LIST_GLOBAL_LICENSE_TYPE_DATA_MART_SELL_SIDE"
    | "USER_LIST_GLOBAL_LICENSE_TYPE_DATA_MART_BUY_SIDE"
    | (string & {});
  /** Output only. Name of client customer which the user list is being licensed to. */
  clientAccountDisplayName?: string;
  /** Output only. ID of the user list being licensed. */
  userListId?: string;
  /** Output only. UserListDirectLicense pricing. */
  pricing?: UserListLicensePricing;
  /** Output only. Pricing history of this user list license. */
  historicalPricings?: ReadonlyArray<UserListLicensePricing>;
  /** Output only. ID of client customer which the user list is being licensed to. */
  clientAccountId?: string;
  /** Output only. Status of UserListDirectLicense - ENABLED or DISABLED. */
  status?:
    | "USER_LIST_LICENSE_STATUS_UNSPECIFIED"
    | "USER_LIST_LICENSE_STATUS_ENABLED"
    | "USER_LIST_LICENSE_STATUS_DISABLED"
    | (string & {});
  /** Output only. Product type of client customer which the user list is being licensed to. */
  clientAccountType?:
    | "USER_LIST_LICENSE_CLIENT_ACCOUNT_TYPE_UNKNOWN"
    | "USER_LIST_LICENSE_CLIENT_ACCOUNT_TYPE_GOOGLE_ADS"
    | "USER_LIST_LICENSE_CLIENT_ACCOUNT_TYPE_DISPLAY_VIDEO_PARTNER"
    | "USER_LIST_LICENSE_CLIENT_ACCOUNT_TYPE_DISPLAY_VIDEO_ADVERTISER"
    | "USER_LIST_LICENSE_CLIENT_ACCOUNT_TYPE_GOOGLE_AD_MANAGER_AUDIENCE_LINK"
    | (string & {});
  /** Output only. Name of the user list being licensed. */
  userListDisplayName?: string;
  /** Output only. Metrics related to this license This field is only populated if the start and end dates are set in the ListUserListGlobalLicenseCustomerInfos call. */
  metrics?: UserListLicenseMetrics;
}

export const UserListGlobalLicenseCustomerInfo: Schema.Codec<UserListGlobalLicenseCustomerInfo> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    licenseType: Schema.optional(Schema.String),
    clientAccountDisplayName: Schema.optional(Schema.String),
    userListId: Schema.optional(Schema.String),
    pricing: Schema.optional(UserListLicensePricing),
    historicalPricings: Schema.optional(Schema.Array(UserListLicensePricing)),
    clientAccountId: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    clientAccountType: Schema.optional(Schema.String),
    userListDisplayName: Schema.optional(Schema.String),
    metrics: Schema.optional(UserListLicenseMetrics),
  }).annotate({ identifier: "UserListGlobalLicenseCustomerInfo" });

export interface IngestAdEventsResponse {}

export const IngestAdEventsResponse: Schema.Codec<IngestAdEventsResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "IngestAdEventsResponse",
  });

export interface RemoveAudienceMembersResponse {
  /** The auto-generated ID of the request. */
  requestId?: string;
}

export const RemoveAudienceMembersResponse: Schema.Codec<RemoveAudienceMembersResponse> =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "RemoveAudienceMembersResponse" });

export interface ListUserListGlobalLicenseCustomerInfosResponse {
  /** The customer information for the given license in the request. */
  userListGlobalLicenseCustomerInfos?: ReadonlyArray<UserListGlobalLicenseCustomerInfo>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListUserListGlobalLicenseCustomerInfosResponse: Schema.Codec<ListUserListGlobalLicenseCustomerInfosResponse> =
  /*@__PURE__*/ Schema.Struct({
    userListGlobalLicenseCustomerInfos: Schema.optional(
      Schema.Array(UserListGlobalLicenseCustomerInfo),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListUserListGlobalLicenseCustomerInfosResponse" });

export interface IngestAudienceMembersRequest {
  /** Required. The list of destinations to send the audience members to. */
  destinations?: ReadonlyArray<Destination>;
  /** Required. The list of users to send to the specified destinations. At most 10000 AudienceMember resources can be sent in a single request. */
  audienceMembers?: ReadonlyArray<AudienceMember>;
  /** Optional. Encryption information for UserData uploads. If not set, it's assumed that uploaded identifying information is hashed but not encrypted. For non `UserData` uploads, this field is ignored. */
  encryptionInfo?: EncryptionInfo;
  /** Optional. The terms of service that the user has accepted/rejected. */
  termsOfService?: TermsOfService;
  /** Optional. For testing purposes. If `true`, the request is validated but not executed. Only errors are returned, not results. */
  validateOnly?: boolean;
  /** Optional. Required for UserData uploads. The encoding type of the user identifiers. For hashed user identifiers, this is the encoding type of the hashed string. For encrypted hashed user identifiers, this is the encoding type of the outer encrypted string, but not necessarily the inner hashed string, meaning the inner hashed string could be encoded in a different way than the outer encrypted string. For non `UserData` uploads, this field is ignored. */
  encoding?: "ENCODING_UNSPECIFIED" | "HEX" | "BASE64" | (string & {});
  /** Optional. Request-level consent to apply to all users in the request. User-level consent overrides request-level consent, and can be specified in each AudienceMember. */
  consent?: Consent;
}

export const IngestAudienceMembersRequest: Schema.Codec<IngestAudienceMembersRequest> =
  /*@__PURE__*/ Schema.Struct({
    destinations: Schema.optional(Schema.Array(Destination)),
    audienceMembers: Schema.optional(Schema.Array(AudienceMember)),
    encryptionInfo: Schema.optional(EncryptionInfo),
    termsOfService: Schema.optional(TermsOfService),
    validateOnly: Schema.optional(Schema.Boolean),
    encoding: Schema.optional(Schema.String),
    consent: Schema.optional(Consent),
  }).annotate({ identifier: "IngestAudienceMembersRequest" });

export interface RetrieveRequestStatusResponse {
  /** A list of request statuses per destination. The order of the statuses matches the order of the destinations in the original request. */
  requestStatusPerDestination?: ReadonlyArray<RequestStatusPerDestination>;
}

export const RetrieveRequestStatusResponse: Schema.Codec<RetrieveRequestStatusResponse> =
  /*@__PURE__*/ Schema.Struct({
    requestStatusPerDestination: Schema.optional(
      Schema.Array(RequestStatusPerDestination),
    ),
  }).annotate({ identifier: "RetrieveRequestStatusResponse" });

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

export interface IngestEventsRequest_Op {
  /** Request body */
  body?: IngestEventsRequest;
}

export const IngestEventsRequest_Op = /*@__PURE__*/ Schema.Struct({
  body: Schema.optional(IngestEventsRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v1/events:ingest", hasBody: true }),
  svc,
) as unknown as Schema.Codec<IngestEventsRequest_Op>;

export type IngestEventsResponse_Op = IngestEventsResponse;
export const IngestEventsResponse_Op = /*@__PURE__*/ IngestEventsResponse;

export type IngestEventsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Uploads a list of Event resources from the provided Destination. */
export const ingestEvents: API.OperationMethod<
  IngestEventsRequest_Op,
  IngestEventsResponse_Op,
  IngestEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: IngestEventsRequest_Op,
  output: IngestEventsResponse_Op,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateAccountTypesAccountsPartnerLinksRequest {
  /** Required. The parent, which owns this collection of partner links. Format: accountTypes/{account_type}/accounts/{account} */
  parent: string;
  /** Request body */
  body?: PartnerLink;
}

export const CreateAccountTypesAccountsPartnerLinksRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(PartnerLink).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/partnerLinks",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateAccountTypesAccountsPartnerLinksRequest>;

export type CreateAccountTypesAccountsPartnerLinksResponse = PartnerLink;
export const CreateAccountTypesAccountsPartnerLinksResponse =
  /*@__PURE__*/ PartnerLink;

export type CreateAccountTypesAccountsPartnerLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a partner link for the given account. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request: * `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType}/accounts/{loginAccountId}` */
export const createAccountTypesAccountsPartnerLinks: API.OperationMethod<
  CreateAccountTypesAccountsPartnerLinksRequest,
  CreateAccountTypesAccountsPartnerLinksResponse,
  CreateAccountTypesAccountsPartnerLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAccountTypesAccountsPartnerLinksRequest,
  output: CreateAccountTypesAccountsPartnerLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteAccountTypesAccountsPartnerLinksRequest {
  /** Required. The resource name of the partner link to delete. Format: accountTypes/{account_type}/accounts/{account}/partnerLinks/{partner_link} */
  name: string;
}

export const DeleteAccountTypesAccountsPartnerLinksRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteAccountTypesAccountsPartnerLinksRequest>;

export type DeleteAccountTypesAccountsPartnerLinksResponse = Empty;
export const DeleteAccountTypesAccountsPartnerLinksResponse =
  /*@__PURE__*/ Empty;

export type DeleteAccountTypesAccountsPartnerLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a partner link for the given account. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request: * `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType}/accounts/{loginAccountId}` */
export const deleteAccountTypesAccountsPartnerLinks: API.OperationMethod<
  DeleteAccountTypesAccountsPartnerLinksRequest,
  DeleteAccountTypesAccountsPartnerLinksResponse,
  DeleteAccountTypesAccountsPartnerLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAccountTypesAccountsPartnerLinksRequest,
  output: DeleteAccountTypesAccountsPartnerLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SearchAccountTypesAccountsPartnerLinksRequest {
  /** The maximum number of partner links to return. The service may return fewer than this value. If unspecified, at most 10 partner links will be returned. The maximum value is 100; values above 100 will be coerced to 100. */
  pageSize?: number;
  /** A page token, received from a previous `SearchPartnerLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchPartnerLinks` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. Account to search for partner links. If no `filter` is specified, all partner links where this account is either the `owning_account` or `partner_account` are returned. Format: `accountTypes/{account_type}/accounts/{account}` */
  parent: string;
  /** Optional. A [filter string](https://google.aip.dev/160). All fields need to be on the left hand side of each condition (for example: `partner_link_id = 123456789`). Fields must be specified using either all [camel case](https://en.wikipedia.org/wiki/Camel_case) or all [snake case](https://en.wikipedia.org/wiki/Snake_case). Don't use a combination of camel case and snake case. Supported operations: - `AND` - `=` - `!=` Supported fields: - `partner_link_id` - `owning_account.account_type` - `owning_account.account_id` - `partner_account.account_type` - `partner_account.account_id` Example: `owning_account.account_type = "GOOGLE_ADS" AND partner_account.account_id = 987654321` */
  filter?: string;
}

export const SearchAccountTypesAccountsPartnerLinksRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/partnerLinks:search" }),
    svc,
  ) as unknown as Schema.Codec<SearchAccountTypesAccountsPartnerLinksRequest>;

export type SearchAccountTypesAccountsPartnerLinksResponse =
  SearchPartnerLinksResponse;
export const SearchAccountTypesAccountsPartnerLinksResponse =
  /*@__PURE__*/ SearchPartnerLinksResponse;

export type SearchAccountTypesAccountsPartnerLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Searches for all partner links to and from a given account. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request: * `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType}/accounts/{loginAccountId}` */
export const searchAccountTypesAccountsPartnerLinks: API.PaginatedOperationMethod<
  SearchAccountTypesAccountsPartnerLinksRequest,
  SearchAccountTypesAccountsPartnerLinksResponse,
  SearchAccountTypesAccountsPartnerLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: SearchAccountTypesAccountsPartnerLinksRequest,
  output: SearchAccountTypesAccountsPartnerLinksResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateAccountTypesAccountsUserListDirectLicensesRequest {
  /** Required. The account that owns the user list being licensed. Should be in the format accountTypes/{ACCOUNT_TYPE}/accounts/{ACCOUNT_ID} */
  parent: string;
  /** Request body */
  body?: UserListDirectLicense;
}

export const CreateAccountTypesAccountsUserListDirectLicensesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(UserListDirectLicense).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/userListDirectLicenses",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateAccountTypesAccountsUserListDirectLicensesRequest>;

export type CreateAccountTypesAccountsUserListDirectLicensesResponse =
  UserListDirectLicense;
export const CreateAccountTypesAccountsUserListDirectLicensesResponse =
  /*@__PURE__*/ UserListDirectLicense;

export type CreateAccountTypesAccountsUserListDirectLicensesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a user list direct license. This feature is only available to data partners. */
export const createAccountTypesAccountsUserListDirectLicenses: API.OperationMethod<
  CreateAccountTypesAccountsUserListDirectLicensesRequest,
  CreateAccountTypesAccountsUserListDirectLicensesResponse,
  CreateAccountTypesAccountsUserListDirectLicensesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAccountTypesAccountsUserListDirectLicensesRequest,
  output: CreateAccountTypesAccountsUserListDirectLicensesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetAccountTypesAccountsUserListDirectLicensesRequest {
  /** Required. The resource name of the user list direct license. */
  name: string;
}

export const GetAccountTypesAccountsUserListDirectLicensesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetAccountTypesAccountsUserListDirectLicensesRequest>;

export type GetAccountTypesAccountsUserListDirectLicensesResponse =
  UserListDirectLicense;
export const GetAccountTypesAccountsUserListDirectLicensesResponse =
  /*@__PURE__*/ UserListDirectLicense;

export type GetAccountTypesAccountsUserListDirectLicensesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves a user list direct license. This feature is only available to data partners. */
export const getAccountTypesAccountsUserListDirectLicenses: API.OperationMethod<
  GetAccountTypesAccountsUserListDirectLicensesRequest,
  GetAccountTypesAccountsUserListDirectLicensesResponse,
  GetAccountTypesAccountsUserListDirectLicensesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccountTypesAccountsUserListDirectLicensesRequest,
  output: GetAccountTypesAccountsUserListDirectLicensesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchAccountTypesAccountsUserListDirectLicensesRequest {
  /** Identifier. The resource name of the user list direct license. */
  name: string;
  /** Optional. The list of fields to update. The special character `*` is not supported and an `INVALID_UPDATE_MASK` error will be thrown if used. */
  updateMask?: string;
  /** Request body */
  body?: UserListDirectLicense;
}

export const PatchAccountTypesAccountsUserListDirectLicensesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(UserListDirectLicense).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchAccountTypesAccountsUserListDirectLicensesRequest>;

export type PatchAccountTypesAccountsUserListDirectLicensesResponse =
  UserListDirectLicense;
export const PatchAccountTypesAccountsUserListDirectLicensesResponse =
  /*@__PURE__*/ UserListDirectLicense;

export type PatchAccountTypesAccountsUserListDirectLicensesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a user list direct license. This feature is only available to data partners. */
export const patchAccountTypesAccountsUserListDirectLicenses: API.OperationMethod<
  PatchAccountTypesAccountsUserListDirectLicensesRequest,
  PatchAccountTypesAccountsUserListDirectLicensesResponse,
  PatchAccountTypesAccountsUserListDirectLicensesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchAccountTypesAccountsUserListDirectLicensesRequest,
  output: PatchAccountTypesAccountsUserListDirectLicensesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAccountTypesAccountsUserListDirectLicensesRequest {
  /** Optional. The maximum number of licenses to return per page. The service may return fewer than this value. If unspecified, at most 50 licenses will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListUserListDirectLicense` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserListDirectLicense` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The account whose licenses are being queried. Should be in the format accountTypes/{ACCOUNT_TYPE}/accounts/{ACCOUNT_ID} */
  parent: string;
  /** Optional. A [filter string](https://google.aip.dev/160) to apply to the list request. All fields need to be on the left hand side of each condition (for example: `user_list_id = 123`). Fields must be specified using either all [camel case](https://en.wikipedia.org/wiki/Camel_case) or all [snake case](https://en.wikipedia.org/wiki/Snake_case). Don't use a combination of camel case and snake case. **Supported Operations:** - `AND` - `=` - `!=` - `>` - `>=` - `<` - `<=` **Unsupported Fields:** - `name` (use get method instead) - `historical_pricings` and all its subfields - `pricing.start_time` - `pricing.end_time` */
  filter?: string;
}

export const ListAccountTypesAccountsUserListDirectLicensesRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/userListDirectLicenses" }),
    svc,
  ) as unknown as Schema.Codec<ListAccountTypesAccountsUserListDirectLicensesRequest>;

export type ListAccountTypesAccountsUserListDirectLicensesResponse =
  ListUserListDirectLicensesResponse;
export const ListAccountTypesAccountsUserListDirectLicensesResponse =
  /*@__PURE__*/ ListUserListDirectLicensesResponse;

export type ListAccountTypesAccountsUserListDirectLicensesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all user list direct licenses owned by the parent account. This feature is only available to data partners. */
export const listAccountTypesAccountsUserListDirectLicenses: API.PaginatedOperationMethod<
  ListAccountTypesAccountsUserListDirectLicensesRequest,
  ListAccountTypesAccountsUserListDirectLicensesResponse,
  ListAccountTypesAccountsUserListDirectLicensesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAccountTypesAccountsUserListDirectLicensesRequest,
  output: ListAccountTypesAccountsUserListDirectLicensesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateAccountTypesAccountsUserListGlobalLicensesRequest {
  /** Required. The account that owns the user list being licensed. Should be in the format accountTypes/{ACCOUNT_TYPE}/accounts/{ACCOUNT_ID} */
  parent: string;
  /** Request body */
  body?: UserListGlobalLicense;
}

export const CreateAccountTypesAccountsUserListGlobalLicensesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(UserListGlobalLicense).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/userListGlobalLicenses",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateAccountTypesAccountsUserListGlobalLicensesRequest>;

export type CreateAccountTypesAccountsUserListGlobalLicensesResponse =
  UserListGlobalLicense;
export const CreateAccountTypesAccountsUserListGlobalLicensesResponse =
  /*@__PURE__*/ UserListGlobalLicense;

export type CreateAccountTypesAccountsUserListGlobalLicensesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a user list global license. This feature is only available to data partners. */
export const createAccountTypesAccountsUserListGlobalLicenses: API.OperationMethod<
  CreateAccountTypesAccountsUserListGlobalLicensesRequest,
  CreateAccountTypesAccountsUserListGlobalLicensesResponse,
  CreateAccountTypesAccountsUserListGlobalLicensesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAccountTypesAccountsUserListGlobalLicensesRequest,
  output: CreateAccountTypesAccountsUserListGlobalLicensesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAccountTypesAccountsUserListGlobalLicensesRequest {
  /** Required. The account whose licenses are being queried. Should be in the format accountTypes/{ACCOUNT_TYPE}/accounts/{ACCOUNT_ID} */
  parent: string;
  /** Optional. A [filter string](https://google.aip.dev/160) to apply to the list request. All fields need to be on the left hand side of each condition (for example: `user_list_id = 123`). Fields must be specified using either all [camel case](https://en.wikipedia.org/wiki/Camel_case) or all [snake case](https://en.wikipedia.org/wiki/Snake_case). Don't use a combination of camel case and snake case. **Supported Operations:** - `AND` - `=` - `!=` - `>` - `>=` - `<` - `<=` **Unsupported Fields:** - `name` (use get method instead) - `historical_pricings` and all its subfields - `pricing.start_time` - `pricing.end_time` */
  filter?: string;
  /** Optional. The maximum number of licenses to return. The service may return fewer than this value. If unspecified, at most 50 licenses will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListUserListGlobalLicense` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserListDirectLicense` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListAccountTypesAccountsUserListGlobalLicensesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/userListGlobalLicenses" }),
    svc,
  ) as unknown as Schema.Codec<ListAccountTypesAccountsUserListGlobalLicensesRequest>;

export type ListAccountTypesAccountsUserListGlobalLicensesResponse =
  ListUserListGlobalLicensesResponse;
export const ListAccountTypesAccountsUserListGlobalLicensesResponse =
  /*@__PURE__*/ ListUserListGlobalLicensesResponse;

export type ListAccountTypesAccountsUserListGlobalLicensesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all user list global licenses owned by the parent account. This feature is only available to data partners. */
export const listAccountTypesAccountsUserListGlobalLicenses: API.PaginatedOperationMethod<
  ListAccountTypesAccountsUserListGlobalLicensesRequest,
  ListAccountTypesAccountsUserListGlobalLicensesResponse,
  ListAccountTypesAccountsUserListGlobalLicensesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAccountTypesAccountsUserListGlobalLicensesRequest,
  output: ListAccountTypesAccountsUserListGlobalLicensesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchAccountTypesAccountsUserListGlobalLicensesRequest {
  /** Identifier. The resource name of the user list global license. */
  name: string;
  /** Optional. The list of fields to update. The special character `*` is not supported and an `INVALID_UPDATE_MASK` error will be thrown if used. */
  updateMask?: string;
  /** Request body */
  body?: UserListGlobalLicense;
}

export const PatchAccountTypesAccountsUserListGlobalLicensesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(UserListGlobalLicense).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchAccountTypesAccountsUserListGlobalLicensesRequest>;

export type PatchAccountTypesAccountsUserListGlobalLicensesResponse =
  UserListGlobalLicense;
export const PatchAccountTypesAccountsUserListGlobalLicensesResponse =
  /*@__PURE__*/ UserListGlobalLicense;

export type PatchAccountTypesAccountsUserListGlobalLicensesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a user list global license. This feature is only available to data partners. */
export const patchAccountTypesAccountsUserListGlobalLicenses: API.OperationMethod<
  PatchAccountTypesAccountsUserListGlobalLicensesRequest,
  PatchAccountTypesAccountsUserListGlobalLicensesResponse,
  PatchAccountTypesAccountsUserListGlobalLicensesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchAccountTypesAccountsUserListGlobalLicensesRequest,
  output: PatchAccountTypesAccountsUserListGlobalLicensesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetAccountTypesAccountsUserListGlobalLicensesRequest {
  /** Required. The resource name of the user list global license. */
  name: string;
}

export const GetAccountTypesAccountsUserListGlobalLicensesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetAccountTypesAccountsUserListGlobalLicensesRequest>;

export type GetAccountTypesAccountsUserListGlobalLicensesResponse =
  UserListGlobalLicense;
export const GetAccountTypesAccountsUserListGlobalLicensesResponse =
  /*@__PURE__*/ UserListGlobalLicense;

export type GetAccountTypesAccountsUserListGlobalLicensesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves a user list global license. This feature is only available to data partners. */
export const getAccountTypesAccountsUserListGlobalLicenses: API.OperationMethod<
  GetAccountTypesAccountsUserListGlobalLicensesRequest,
  GetAccountTypesAccountsUserListGlobalLicensesResponse,
  GetAccountTypesAccountsUserListGlobalLicensesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccountTypesAccountsUserListGlobalLicensesRequest,
  output: GetAccountTypesAccountsUserListGlobalLicensesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListAccountTypesAccountsUserListGlobalLicensesUserListGlobalLicenseCustomerInfosRequest {
  /** Optional. A page token, received from a previous `ListUserListDirectLicense` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserListDirectLicense` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The maximum number of licenses to return. The service may return fewer than this value. If unspecified, at most 50 licenses will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The global license whose customer info are being queried. Should be in the format `accountTypes/{ACCOUNT_TYPE}/accounts/{ACCOUNT_ID}/userListGlobalLicenses/{USER_LIST_GLOBAL_LICENSE_ID}`. To list all global license customer info under an account, replace the user list global license id with a '-' (for example, `accountTypes/DATA_PARTNER/accounts/123/userListGlobalLicenses/-`) */
  parent: string;
  /** Optional. A [filter string](https://google.aip.dev/160) to apply to the list request. All fields need to be on the left hand side of each condition (for example: `user_list_id = 123`). Fields must be specified using either all [camel case](https://en.wikipedia.org/wiki/Camel_case) or all [snake case](https://en.wikipedia.org/wiki/Snake_case). Don't use a combination of camel case and snake case. **Supported Operations:** - `AND` - `=` - `!=` - `>` - `>=` - `<` - `<=` **Unsupported Fields:** - `name` (use get method instead) - `historical_pricings` and all its subfields - `pricing.start_time` - `pricing.end_time` */
  filter?: string;
}

export const ListAccountTypesAccountsUserListGlobalLicensesUserListGlobalLicenseCustomerInfosRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/userListGlobalLicenseCustomerInfos",
    }),
    svc,
  ) as unknown as Schema.Codec<ListAccountTypesAccountsUserListGlobalLicensesUserListGlobalLicenseCustomerInfosRequest>;

export type ListAccountTypesAccountsUserListGlobalLicensesUserListGlobalLicenseCustomerInfosResponse =
  ListUserListGlobalLicenseCustomerInfosResponse;
export const ListAccountTypesAccountsUserListGlobalLicensesUserListGlobalLicenseCustomerInfosResponse =
  /*@__PURE__*/ ListUserListGlobalLicenseCustomerInfosResponse;

export type ListAccountTypesAccountsUserListGlobalLicensesUserListGlobalLicenseCustomerInfosError =
  DefaultErrors | NotFound | Forbidden;

/** Lists all customer info for a user list global license. This feature is only available to data partners. */
export const listAccountTypesAccountsUserListGlobalLicensesUserListGlobalLicenseCustomerInfos: API.PaginatedOperationMethod<
  ListAccountTypesAccountsUserListGlobalLicensesUserListGlobalLicenseCustomerInfosRequest,
  ListAccountTypesAccountsUserListGlobalLicensesUserListGlobalLicenseCustomerInfosResponse,
  ListAccountTypesAccountsUserListGlobalLicensesUserListGlobalLicenseCustomerInfosError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input:
    ListAccountTypesAccountsUserListGlobalLicensesUserListGlobalLicenseCustomerInfosRequest,
  output:
    ListAccountTypesAccountsUserListGlobalLicensesUserListGlobalLicenseCustomerInfosResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface RetrieveAccountTypesAccountsInsightsRequest {
  /** Required. The parent account that owns the user list. Format: `accountTypes/{account_type}/accounts/{account}` */
  parent: string;
  /** Request body */
  body?: RetrieveInsightsRequest;
}

export const RetrieveAccountTypesAccountsInsightsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(RetrieveInsightsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/insights:retrieve",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<RetrieveAccountTypesAccountsInsightsRequest>;

export type RetrieveAccountTypesAccountsInsightsResponse =
  RetrieveInsightsResponse;
export const RetrieveAccountTypesAccountsInsightsResponse =
  /*@__PURE__*/ RetrieveInsightsResponse;

export type RetrieveAccountTypesAccountsInsightsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Retrieves marketing data insights for a given user list. This feature is only available to data partners. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request: * `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType}/accounts/{loginAccountId}` * `linked-account`: (Optional) The resource name of the account with an established product link to the `login-account`. Format: `accountTypes/{linkedAccountType}/accounts/{linkedAccountId}` */
export const retrieveAccountTypesAccountsInsights: API.OperationMethod<
  RetrieveAccountTypesAccountsInsightsRequest,
  RetrieveAccountTypesAccountsInsightsResponse,
  RetrieveAccountTypesAccountsInsightsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RetrieveAccountTypesAccountsInsightsRequest,
  output: RetrieveAccountTypesAccountsInsightsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetAccountTypesAccountsUserListsRequest {
  /** Required. The resource name of the UserList to retrieve. Format: accountTypes/{account_type}/accounts/{account}/userLists/{user_list} */
  name: string;
}

export const GetAccountTypesAccountsUserListsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetAccountTypesAccountsUserListsRequest>;

export type GetAccountTypesAccountsUserListsResponse = UserList;
export const GetAccountTypesAccountsUserListsResponse = /*@__PURE__*/ UserList;

export type GetAccountTypesAccountsUserListsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a UserList. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request: * `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType}/accounts/{loginAccountId}` * `linked-account`: (Optional) The resource name of the account with an established product link to the `login-account`. Format: `accountTypes/{linkedAccountType}/accounts/{linkedAccountId}` */
export const getAccountTypesAccountsUserLists: API.OperationMethod<
  GetAccountTypesAccountsUserListsRequest,
  GetAccountTypesAccountsUserListsResponse,
  GetAccountTypesAccountsUserListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccountTypesAccountsUserListsRequest,
  output: GetAccountTypesAccountsUserListsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteAccountTypesAccountsUserListsRequest {
  /** Required. The name of the user list to delete. Format: accountTypes/{account_type}/accounts/{account}/userLists/{user_list} */
  name: string;
  /** Optional. If true, the request is validated but not executed. */
  validateOnly?: boolean;
}

export const DeleteAccountTypesAccountsUserListsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteAccountTypesAccountsUserListsRequest>;

export type DeleteAccountTypesAccountsUserListsResponse = Empty;
export const DeleteAccountTypesAccountsUserListsResponse = /*@__PURE__*/ Empty;

export type DeleteAccountTypesAccountsUserListsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a UserList. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request: * `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType}/accounts/{loginAccountId}` * `linked-account`: (Optional) The resource name of the account with an established product link to the `login-account`. Format: `accountTypes/{linkedAccountType}/accounts/{linkedAccountId}` */
export const deleteAccountTypesAccountsUserLists: API.OperationMethod<
  DeleteAccountTypesAccountsUserListsRequest,
  DeleteAccountTypesAccountsUserListsResponse,
  DeleteAccountTypesAccountsUserListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAccountTypesAccountsUserListsRequest,
  output: DeleteAccountTypesAccountsUserListsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAccountTypesAccountsUserListsRequest {
  /** Optional. A page token, received from a previous `ListUserLists` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserLists` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The maximum number of user lists to return. The service may return fewer than this value. If unspecified, at most 50 user lists will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent account which owns this collection of user lists. Format: accountTypes/{account_type}/accounts/{account} */
  parent: string;
  /** Optional. A [filter string](https://google.aip.dev/160). All fields need to be on the left hand side of each condition (for example: `display_name = "list 1"`). Fields must be specified using either all [camel case](https://en.wikipedia.org/wiki/Camel_case) or all [snake case](https://en.wikipedia.org/wiki/Snake_case). Don't use a combination of camel case and snake case. Supported operations: - `AND` - `=` - `!=` - `>` - `>=` - `<` - `<=` - `:` (has) Supported fields: - `id` - `display_name` - `description` - `membership_status` - `integration_code` - `access_reason` - `ingested_user_list_info.upload_key_types` */
  filter?: string;
}

export const ListAccountTypesAccountsUserListsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/userLists" }),
    svc,
  ) as unknown as Schema.Codec<ListAccountTypesAccountsUserListsRequest>;

export type ListAccountTypesAccountsUserListsResponse = ListUserListsResponse;
export const ListAccountTypesAccountsUserListsResponse =
  /*@__PURE__*/ ListUserListsResponse;

export type ListAccountTypesAccountsUserListsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists UserLists. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request: * `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType}/accounts/{loginAccountId}` * `linked-account`: (Optional) The resource name of the account with an established product link to the `login-account`. Format: `accountTypes/{linkedAccountType}/accounts/{linkedAccountId}` */
export const listAccountTypesAccountsUserLists: API.PaginatedOperationMethod<
  ListAccountTypesAccountsUserListsRequest,
  ListAccountTypesAccountsUserListsResponse,
  ListAccountTypesAccountsUserListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAccountTypesAccountsUserListsRequest,
  output: ListAccountTypesAccountsUserListsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchAccountTypesAccountsUserListsRequest {
  /** Identifier. The resource name of the user list. Format: accountTypes/{account_type}/accounts/{account}/userLists/{user_list} */
  name: string;
  /** Optional. The list of fields to update. */
  updateMask?: string;
  /** Optional. If true, the request is validated but not executed. */
  validateOnly?: boolean;
  /** Request body */
  body?: UserList;
}

export const PatchAccountTypesAccountsUserListsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(UserList).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchAccountTypesAccountsUserListsRequest>;

export type PatchAccountTypesAccountsUserListsResponse = UserList;
export const PatchAccountTypesAccountsUserListsResponse =
  /*@__PURE__*/ UserList;

export type PatchAccountTypesAccountsUserListsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a UserList. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request: * `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType}/accounts/{loginAccountId}` * `linked-account`: (Optional) The resource name of the account with an established product link to the `login-account`. Format: `accountTypes/{linkedAccountType}/accounts/{linkedAccountId}` */
export const patchAccountTypesAccountsUserLists: API.OperationMethod<
  PatchAccountTypesAccountsUserListsRequest,
  PatchAccountTypesAccountsUserListsResponse,
  PatchAccountTypesAccountsUserListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchAccountTypesAccountsUserListsRequest,
  output: PatchAccountTypesAccountsUserListsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateAccountTypesAccountsUserListsRequest {
  /** Optional. If true, the request is validated but not executed. */
  validateOnly?: boolean;
  /** Required. The parent account where this user list will be created. Format: accountTypes/{account_type}/accounts/{account} */
  parent: string;
  /** Request body */
  body?: UserList;
}

export const CreateAccountTypesAccountsUserListsRequest =
  /*@__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(UserList).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/userLists", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateAccountTypesAccountsUserListsRequest>;

export type CreateAccountTypesAccountsUserListsResponse = UserList;
export const CreateAccountTypesAccountsUserListsResponse =
  /*@__PURE__*/ UserList;

export type CreateAccountTypesAccountsUserListsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a UserList. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request: * `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType}/accounts/{loginAccountId}` * `linked-account`: (Optional) The resource name of the account with an established product link to the `login-account`. Format: `accountTypes/{linkedAccountType}/accounts/{linkedAccountId}` */
export const createAccountTypesAccountsUserLists: API.OperationMethod<
  CreateAccountTypesAccountsUserListsRequest,
  CreateAccountTypesAccountsUserListsResponse,
  CreateAccountTypesAccountsUserListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAccountTypesAccountsUserListsRequest,
  output: CreateAccountTypesAccountsUserListsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RetrieveRequestStatusRequest {
  /** Required. Required. The request ID of the Data Manager API request. */
  requestId?: string;
}

export const RetrieveRequestStatusRequest =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/requestStatus:retrieve" }),
    svc,
  ) as unknown as Schema.Codec<RetrieveRequestStatusRequest>;

export type RetrieveRequestStatusResponse_Op = RetrieveRequestStatusResponse;
export const RetrieveRequestStatusResponse_Op =
  /*@__PURE__*/ RetrieveRequestStatusResponse;

export type RetrieveRequestStatusError = DefaultErrors | NotFound | Forbidden;

/** Gets the status of a request given request id. */
export const retrieveRequestStatus: API.OperationMethod<
  RetrieveRequestStatusRequest,
  RetrieveRequestStatusResponse_Op,
  RetrieveRequestStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RetrieveRequestStatusRequest,
  output: RetrieveRequestStatusResponse_Op,
  errors: [NotFound, Forbidden],
}));

export interface RemoveAudienceMembersRequest_Op {
  /** Request body */
  body?: RemoveAudienceMembersRequest;
}

export const RemoveAudienceMembersRequest_Op =
  /*@__PURE__*/ Schema.Struct({
    body: Schema.optional(RemoveAudienceMembersRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/audienceMembers:remove",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<RemoveAudienceMembersRequest_Op>;

export type RemoveAudienceMembersResponse_Op = RemoveAudienceMembersResponse;
export const RemoveAudienceMembersResponse_Op =
  /*@__PURE__*/ RemoveAudienceMembersResponse;

export type RemoveAudienceMembersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes a list of AudienceMember resources from the provided Destination. */
export const removeAudienceMembers: API.OperationMethod<
  RemoveAudienceMembersRequest_Op,
  RemoveAudienceMembersResponse_Op,
  RemoveAudienceMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RemoveAudienceMembersRequest_Op,
  output: RemoveAudienceMembersResponse_Op,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface IngestAudienceMembersRequest_Op {
  /** Request body */
  body?: IngestAudienceMembersRequest;
}

export const IngestAudienceMembersRequest_Op =
  /*@__PURE__*/ Schema.Struct({
    body: Schema.optional(IngestAudienceMembersRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/audienceMembers:ingest",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<IngestAudienceMembersRequest_Op>;

export type IngestAudienceMembersResponse_Op = IngestAudienceMembersResponse;
export const IngestAudienceMembersResponse_Op =
  /*@__PURE__*/ IngestAudienceMembersResponse;

export type IngestAudienceMembersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Uploads a list of AudienceMember resources to the provided Destination. */
export const ingestAudienceMembers: API.OperationMethod<
  IngestAudienceMembersRequest_Op,
  IngestAudienceMembersResponse_Op,
  IngestAudienceMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: IngestAudienceMembersRequest_Op,
  output: IngestAudienceMembersResponse_Op,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface IngestAdEventsRequest_Op {
  /** Request body */
  body?: IngestAdEventsRequest;
}

export const IngestAdEventsRequest_Op =
  /*@__PURE__*/ Schema.Struct({
    body: Schema.optional(IngestAdEventsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/adEvents:ingest", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<IngestAdEventsRequest_Op>;

export type IngestAdEventsResponse_Op = IngestAdEventsResponse;
export const IngestAdEventsResponse_Op = /*@__PURE__*/ IngestAdEventsResponse;

export type IngestAdEventsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Uploads a list of AdEvent resources to Google Analytics. This feature is only available to accounts on an allowlist. */
export const ingestAdEvents: API.OperationMethod<
  IngestAdEventsRequest_Op,
  IngestAdEventsResponse_Op,
  IngestAdEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: IngestAdEventsRequest_Op,
  output: IngestAdEventsResponse_Op,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
