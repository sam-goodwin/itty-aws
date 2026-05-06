// ==========================================================================
// Real-time Bidding API (realtimebidding v1)
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
  name: "realtimebidding",
  version: "v1",
  rootUrl: "https://realtimebidding.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface StringTargetingDimension {
  /** How the items in this list should be targeted. */
  targetingMode?:
    | "TARGETING_MODE_UNSPECIFIED"
    | "INCLUSIVE"
    | "EXCLUSIVE"
    | (string & {});
  /** The values specified. */
  values?: ReadonlyArray<string>;
}

export const StringTargetingDimension =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetingMode: Schema.optional(Schema.String),
    values: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "StringTargetingDimension" });

export interface NumericTargetingDimension {
  /** The IDs included in a config. */
  includedIds?: ReadonlyArray<string>;
  /** The IDs excluded in a config. */
  excludedIds?: ReadonlyArray<string>;
}

export const NumericTargetingDimension =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includedIds: Schema.optional(Schema.Array(Schema.String)),
    excludedIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "NumericTargetingDimension" });

export interface AppTargeting {
  /** Targeted app IDs. App IDs can refer to those found in an app store or ones that are not published in an app store. A maximum of 30,000 app IDs can be targeted. */
  mobileAppTargeting?: StringTargetingDimension;
  /** Lists of included and excluded mobile app categories as defined in https://developers.google.com/adwords/api/docs/appendix/mobileappcategories.csv. */
  mobileAppCategoryTargeting?: NumericTargetingDimension;
}

export const AppTargeting = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mobileAppTargeting: Schema.optional(StringTargetingDimension),
  mobileAppCategoryTargeting: Schema.optional(NumericTargetingDimension),
}).annotate({ identifier: "AppTargeting" });

export interface Realtimebidding_Date {
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  year?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  day?: number;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  month?: number;
}

export const Realtimebidding_Date = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  year: Schema.optional(Schema.Number),
  day: Schema.optional(Schema.Number),
  month: Schema.optional(Schema.Number),
}).annotate({ identifier: "Realtimebidding_Date" });

export interface UrlRestriction {
  /** The restriction type for the specified URL. */
  restrictionType?:
    | "RESTRICTION_TYPE_UNSPECIFIED"
    | "CONTAINS"
    | "EQUALS"
    | "STARTS_WITH"
    | "ENDS_WITH"
    | "DOES_NOT_EQUAL"
    | "DOES_NOT_CONTAIN"
    | "DOES_NOT_START_WITH"
    | "DOES_NOT_END_WITH"
    | (string & {});
  /** Required. The URL to use for applying the restriction on the user list. */
  url?: string;
  /** Start date (if specified) of the URL restriction. */
  startDate?: Realtimebidding_Date;
  /** End date (if specified) of the URL restriction. End date should be later than the start date for the date range to be valid. */
  endDate?: Realtimebidding_Date;
}

export const UrlRestriction = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  restrictionType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
  startDate: Schema.optional(Realtimebidding_Date),
  endDate: Schema.optional(Realtimebidding_Date),
}).annotate({ identifier: "UrlRestriction" });

export interface BatchApprovePublisherConnectionsRequest {
  /** Required. The names of the publishers with which connections will be approved. In the pattern `bidders/{bidder}/publisherConnections/{publisher}` where `{bidder}` is the account ID of the bidder, and `{publisher}` is the ads.txt/app-ads.txt publisher ID. */
  names?: ReadonlyArray<string>;
}

export const BatchApprovePublisherConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BatchApprovePublisherConnectionsRequest" });

export interface DestinationNotWorkingEvidence {
  /** HTTP redirect chain error. */
  redirectionError?:
    | "REDIRECTION_ERROR_UNSPECIFIED"
    | "TOO_MANY_REDIRECTS"
    | "INVALID_REDIRECT"
    | "EMPTY_REDIRECT"
    | "REDIRECT_ERROR_UNKNOWN"
    | (string & {});
  /** DNS lookup errors. */
  dnsError?:
    | "DNS_ERROR_UNSPECIFIED"
    | "ERROR_DNS"
    | "GOOGLE_CRAWLER_DNS_ISSUE"
    | (string & {});
  /** HTTP error code (for example, 404 or 5xx) */
  httpError?: number;
  /** Approximate time when the ad destination was last checked. */
  lastCheckTime?: string;
  /** Page was crawled successfully, but was detected as either a page with no content or an error page. */
  invalidPage?:
    | "INVALID_PAGE_UNSPECIFIED"
    | "EMPTY_OR_ERROR_PAGE"
    | (string & {});
  /** Rejected because of malformed URLs or invalid requests. */
  urlRejected?:
    | "URL_REJECTED_UNSPECIFIED"
    | "BAD_REQUEST"
    | "MALFORMED_URL"
    | "URL_REJECTED_UNKNOWN"
    | (string & {});
  /** The full non-working URL. */
  expandedUrl?: string;
  /** Platform of the non-working URL. */
  platform?:
    | "PLATFORM_UNSPECIFIED"
    | "PERSONAL_COMPUTER"
    | "ANDROID"
    | "IOS"
    | (string & {});
}

export const DestinationNotWorkingEvidence =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    redirectionError: Schema.optional(Schema.String),
    dnsError: Schema.optional(Schema.String),
    httpError: Schema.optional(Schema.Number),
    lastCheckTime: Schema.optional(Schema.String),
    invalidPage: Schema.optional(Schema.String),
    urlRejected: Schema.optional(Schema.String),
    expandedUrl: Schema.optional(Schema.String),
    platform: Schema.optional(Schema.String),
  }).annotate({ identifier: "DestinationNotWorkingEvidence" });

export interface RemoveTargetedPublishersRequest {
  /** A list of publisher IDs to stop targeting in the pretargeting configuration. These values will be removed from the list of targeted publisher IDs in PretargetingConfig.publisherTargeting.values. Publishers are identified by their publisher ID from ads.txt / app-ads.txt. See https://iabtechlab.com/ads-txt/ and https://iabtechlab.com/app-ads-txt/ for more details. */
  publisherIds?: ReadonlyArray<string>;
}

export const RemoveTargetedPublishersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    publisherIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "RemoveTargetedPublishersRequest" });

export interface Bidder {
  /** Output only. The buyer's network ID used for cookie matching. This ID corresponds to the `google_nid` parameter in the URL used in cookie match requests. Refer to https://developers.google.com/authorized-buyers/rtb/cookie-guide for further information. */
  cookieMatchingNetworkId?: string;
  /** Output only. Name of the bidder resource that must follow the pattern `bidders/{bidderAccountId}`, where `{bidderAccountId}` is the account ID of the bidder whose information is to be received. One can get their account ID on the Authorized Buyers or Open Bidding UI, or by contacting their Google account manager. */
  name?: string;
  /** Output only. The base URL used in cookie match requests. Refer to https://developers.google.com/authorized-buyers/rtb/cookie-guide for further information. */
  cookieMatchingUrl?: string;
  /** Output only. An option to bypass pretargeting for private auctions and preferred deals. When true, bid requests from these nonguaranteed deals will always be sent. When false, bid requests will be subject to regular pretargeting configurations. Programmatic Guaranteed deals will always be sent to the bidder, regardless of the value for this option. Auction packages are not impacted by this value and are subject to the regular pretargeting configurations. */
  bypassNonguaranteedDealsPretargeting?: boolean;
  /** Output only. The billing ID for the deals pretargeting config. This billing ID is sent on the bid request for guaranteed and nonguaranteed deals matched in pretargeting. */
  dealsBillingId?: string;
}

export const Bidder = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cookieMatchingNetworkId: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  cookieMatchingUrl: Schema.optional(Schema.String),
  bypassNonguaranteedDealsPretargeting: Schema.optional(Schema.Boolean),
  dealsBillingId: Schema.optional(Schema.String),
}).annotate({ identifier: "Bidder" });

export interface ListBiddersResponse {
  /** List of bidders. */
  bidders?: ReadonlyArray<Bidder>;
  /** A token which can be passed to a subsequent call to the `ListBidders` method to retrieve the next page of results in ListBiddersRequest.pageToken. */
  nextPageToken?: string;
}

export const ListBiddersResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bidders: Schema.optional(Schema.Array(Bidder)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListBiddersResponse" });

export interface ActivatePretargetingConfigRequest {}

export const ActivatePretargetingConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ActivatePretargetingConfigRequest",
  });

export interface Image {
  /** The URL of the image. */
  url?: string;
  /** Image width in pixels. */
  width?: number;
  /** Image height in pixels. */
  height?: number;
}

export const Image = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  url: Schema.optional(Schema.String),
  width: Schema.optional(Schema.Number),
  height: Schema.optional(Schema.Number),
}).annotate({ identifier: "Image" });

export interface NativeContent {
  /** A large image. */
  image?: Image;
  /** The URL that the browser/SDK will load when the user clicks the ad. */
  clickLinkUrl?: string;
  /** The price of the promoted app including currency info. */
  priceDisplayText?: string;
  /** The URL to use for click tracking. */
  clickTrackingUrl?: string;
  /** A long description of the ad. */
  body?: string;
  /** A smaller image, for the advertiser's logo. */
  logo?: Image;
  /** A short title for the ad. */
  headline?: string;
  /** A label for the button that the user is supposed to click. */
  callToAction?: string;
  /** The URL to fetch a native video ad. */
  videoUrl?: string;
  /** The app rating in the app store. Must be in the range [0-5]. */
  starRating?: number;
  /** The name of the advertiser or sponsor, to be displayed in the ad creative. */
  advertiserName?: string;
  /** The app icon, for app download ads. */
  appIcon?: Image;
  /** The contents of a VAST document for a native video ad. */
  videoVastXml?: string;
}

export const NativeContent = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  image: Schema.optional(Image),
  clickLinkUrl: Schema.optional(Schema.String),
  priceDisplayText: Schema.optional(Schema.String),
  clickTrackingUrl: Schema.optional(Schema.String),
  body: Schema.optional(Schema.String),
  logo: Schema.optional(Image),
  headline: Schema.optional(Schema.String),
  callToAction: Schema.optional(Schema.String),
  videoUrl: Schema.optional(Schema.String),
  starRating: Schema.optional(Schema.Number),
  advertiserName: Schema.optional(Schema.String),
  appIcon: Schema.optional(Image),
  videoVastXml: Schema.optional(Schema.String),
}).annotate({ identifier: "NativeContent" });

export interface HtmlContent {
  /** The HTML snippet that displays the ad when inserted in the web page. */
  snippet?: string;
  /** The width of the HTML snippet in pixels. Can be used to filter the response of the creatives.list method. */
  width?: number;
  /** The height of the HTML snippet in pixels. Can be used to filter the response of the creatives.list method. */
  height?: number;
}

export const HtmlContent = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  snippet: Schema.optional(Schema.String),
  width: Schema.optional(Schema.Number),
  height: Schema.optional(Schema.Number),
}).annotate({ identifier: "HtmlContent" });

export interface AdTechnologyProviders {
  /** Domains of detected unidentified ad technology providers (if any). You must ensure that the creatives used in bids placed for inventory that will serve to EEA or UK users does not contain unidentified ad technology providers. Google reserves the right to filter non-compliant bids. */
  unidentifiedProviderDomains?: ReadonlyArray<string>;
  /** The detected [Google Ad Tech Providers (ATP)](https://support.google.com/admanager/answer/9012903) for this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/providers.csv for mapping of provider ID to provided name, a privacy policy URL, and a list of domains which can be attributed to the provider. */
  detectedProviderIds?: ReadonlyArray<string>;
  /** The detected IAB Global Vendor List (GVL) IDs for this creative. See the IAB Global Vendor List at https://vendor-list.consensu.org/v2/vendor-list.json for details about the vendors. */
  detectedGvlIds?: ReadonlyArray<string>;
}

export const AdTechnologyProviders = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  unidentifiedProviderDomains: Schema.optional(Schema.Array(Schema.String)),
  detectedProviderIds: Schema.optional(Schema.Array(Schema.String)),
  detectedGvlIds: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "AdTechnologyProviders" });

export interface DestinationUrlEvidence {
  /** The full landing page URL of the destination. */
  destinationUrl?: string;
}

export const DestinationUrlEvidence = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    destinationUrl: Schema.optional(Schema.String),
  },
).annotate({ identifier: "DestinationUrlEvidence" });

export interface UrlDownloadSize {
  /** The normalized URL with query parameters and fragment removed. */
  normalizedUrl?: string;
  /** Download size of the URL in kilobytes. */
  downloadSizeKb?: number;
}

export const UrlDownloadSize = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  normalizedUrl: Schema.optional(Schema.String),
  downloadSizeKb: Schema.optional(Schema.Number),
}).annotate({ identifier: "UrlDownloadSize" });

export interface DownloadSizeEvidence {
  /** Download size broken down by URLs with the top download size. */
  topUrlDownloadSizeBreakdowns?: ReadonlyArray<UrlDownloadSize>;
  /** Total download size (in kilobytes) for all the resources in the creative. */
  totalDownloadSizeKb?: number;
}

export const DownloadSizeEvidence = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  topUrlDownloadSizeBreakdowns: Schema.optional(Schema.Array(UrlDownloadSize)),
  totalDownloadSizeKb: Schema.optional(Schema.Number),
}).annotate({ identifier: "DownloadSizeEvidence" });

export interface HttpCallEvidence {
  /** URLs of HTTP calls made by the creative. */
  urls?: ReadonlyArray<string>;
}

export const HttpCallEvidence = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  urls: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "HttpCallEvidence" });

export interface DestinationNotCrawlableEvidence {
  /** Reason of destination not crawlable. */
  reason?:
    | "REASON_UNSPECIFIED"
    | "UNREACHABLE_ROBOTS"
    | "TIMEOUT_ROBOTS"
    | "ROBOTED_DENIED"
    | "UNKNOWN"
    | (string & {});
  /** Approximate time of the crawl. */
  crawlTime?: string;
  /** Destination URL that was attempted to be crawled. */
  crawledUrl?: string;
}

export const DestinationNotCrawlableEvidence =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reason: Schema.optional(Schema.String),
    crawlTime: Schema.optional(Schema.String),
    crawledUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "DestinationNotCrawlableEvidence" });

export interface DomainCalls {
  /** Number of HTTP calls made to the domain. */
  httpCallCount?: number;
  /** The domain name. */
  domain?: string;
}

export const DomainCalls = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  httpCallCount: Schema.optional(Schema.Number),
  domain: Schema.optional(Schema.String),
}).annotate({ identifier: "DomainCalls" });

export interface DomainCallEvidence {
  /** Breakdown of the most frequent domains called through HTTP by the creative. */
  topHttpCallDomains?: ReadonlyArray<DomainCalls>;
  /** The total number of HTTP calls made by the creative, including but not limited to the number of calls in the top_http_call_domains. */
  totalHttpCallCount?: number;
}

export const DomainCallEvidence = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  topHttpCallDomains: Schema.optional(Schema.Array(DomainCalls)),
  totalHttpCallCount: Schema.optional(Schema.Number),
}).annotate({ identifier: "DomainCallEvidence" });

export interface HttpCookieEvidence {
  /** Names of cookies that violate Google policies. For TOO_MANY_COOKIES policy, this will be the cookie names of top domains with the largest number of cookies. For other policies, this will be all the cookie names that violate the policy. */
  cookieNames?: ReadonlyArray<string>;
  /** The largest number of cookies set by a creative. If this field is set, cookie_names above will be set to the cookie names of top domains with the largest number of cookies. This field will only be set for TOO_MANY_COOKIES policy. */
  maxCookieCount?: number;
}

export const HttpCookieEvidence = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cookieNames: Schema.optional(Schema.Array(Schema.String)),
  maxCookieCount: Schema.optional(Schema.Number),
}).annotate({ identifier: "HttpCookieEvidence" });

export interface PolicyTopicEvidence {
  /** The creative's destination URL did not function properly or was incorrectly set up. */
  destinationNotWorking?: DestinationNotWorkingEvidence;
  /** URL of the actual landing page. */
  destinationUrl?: DestinationUrlEvidence;
  /** Total download size and URL-level download size breakdown for resources in a creative. */
  downloadSize?: DownloadSizeEvidence;
  /** HTTP calls made by the creative that resulted in policy violations. */
  httpCall?: HttpCallEvidence;
  /** The creative's destination URL was not crawlable by Google. */
  destinationNotCrawlable?: DestinationNotCrawlableEvidence;
  /** Number of HTTP calls made by the creative, broken down by domain. */
  domainCall?: DomainCallEvidence;
  /** Evidence for HTTP cookie-related policy violations. */
  httpCookie?: HttpCookieEvidence;
}

export const PolicyTopicEvidence = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  destinationNotWorking: Schema.optional(DestinationNotWorkingEvidence),
  destinationUrl: Schema.optional(DestinationUrlEvidence),
  downloadSize: Schema.optional(DownloadSizeEvidence),
  httpCall: Schema.optional(HttpCallEvidence),
  destinationNotCrawlable: Schema.optional(DestinationNotCrawlableEvidence),
  domainCall: Schema.optional(DomainCallEvidence),
  httpCookie: Schema.optional(HttpCookieEvidence),
}).annotate({ identifier: "PolicyTopicEvidence" });

export interface PolicyTopicEntry {
  /** Pieces of evidence associated with this policy topic entry. */
  evidences?: ReadonlyArray<PolicyTopicEvidence>;
  /** URL of the help center article describing this policy topic. */
  helpCenterUrl?: string;
  /** Policy topic this entry refers to. For example, "ALCOHOL", "TRADEMARKS_IN_AD_TEXT", or "DESTINATION_NOT_WORKING". The set of possible policy topics is not fixed for a particular API version and may change at any time. Can be used to filter the response of the creatives.list method */
  policyTopic?: string;
  /** Whether or not the policy topic is missing a certificate. Some policy topics require a certificate to unblock serving in some regions. For more information about creative certification, refer to: https://support.google.com/authorizedbuyers/answer/7450776 */
  missingCertificate?: boolean;
}

export const PolicyTopicEntry = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  evidences: Schema.optional(Schema.Array(PolicyTopicEvidence)),
  helpCenterUrl: Schema.optional(Schema.String),
  policyTopic: Schema.optional(Schema.String),
  missingCertificate: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "PolicyTopicEntry" });

export interface PolicyCompliance {
  /** Serving status for the given transaction type (for example, open auction, deals) or region (for example, China, Russia). Can be used to filter the response of the creatives.list method. */
  status?:
    | "STATUS_UNSPECIFIED"
    | "PENDING_REVIEW"
    | "DISAPPROVED"
    | "APPROVED"
    | "CERTIFICATE_REQUIRED"
    | (string & {});
  /** Topics related to the policy compliance for this transaction type (for example, open auction, deals) or region (for example, China, Russia). Topics may be present only if status is DISAPPROVED. */
  topics?: ReadonlyArray<PolicyTopicEntry>;
}

export const PolicyCompliance = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(Schema.String),
  topics: Schema.optional(Schema.Array(PolicyTopicEntry)),
}).annotate({ identifier: "PolicyCompliance" });

export interface AdvertiserAndBrand {
  /** See https://storage.googleapis.com/adx-rtb-dictionaries/advertisers.txt for the list of possible values. Can be used to filter the response of the creatives.list method. */
  advertiserId?: string;
  /** Detected brand ID or zero if no brand has been detected. See https://storage.googleapis.com/adx-rtb-dictionaries/brands.txt for the list of possible values. Can be used to filter the response of the creatives.list method. */
  brandId?: string;
  /** Advertiser name. Can be used to filter the response of the creatives.list method. */
  advertiserName?: string;
  /** Brand name. Can be used to filter the response of the creatives.list method. */
  brandName?: string;
}

export const AdvertiserAndBrand = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  advertiserId: Schema.optional(Schema.String),
  brandId: Schema.optional(Schema.String),
  advertiserName: Schema.optional(Schema.String),
  brandName: Schema.optional(Schema.String),
}).annotate({ identifier: "AdvertiserAndBrand" });

export interface CreativeServingDecision {
  /** The detected ad technology providers. */
  adTechnologyProviders?: AdTechnologyProviders;
  /** IDs of the ad technology vendors that were detected to be used by this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/vendors.txt for possible values. Can be used to filter the response of the creatives.list method. If the `allowed_vendor_type` field of a [bid request](https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto) does not contain one of the vendor type IDs that were declared or detected for a given creative, and a bid is submitted with that creative, the bid will be filtered before the auction. */
  detectedVendorIds?: ReadonlyArray<number>;
  /** Policy compliance of this creative when bidding on Programmatic Guaranteed and Preferred Deals (outside of Russia and China). */
  dealsPolicyCompliance?: PolicyCompliance;
  /** Output only. IDs of the detected categories. The taxonomy in which the categories are expressed is specified by the detected_categories_taxonomy field. Use this in conjunction with BidRequest.bcat to avoid bidding on impressions where a given ad category is blocked, or to troubleshoot filtered bids. Can be used to filter the response of the creatives.list method. */
  detectedCategories?: ReadonlyArray<string>;
  /** The detected languages for this creative. The order is arbitrary. The codes are 2 or 5 characters and are documented at https://developers.google.com/adwords/api/docs/appendix/languagecodes. Can be used to filter the response of the creatives.list method. */
  detectedLanguages?: ReadonlyArray<string>;
  /** Detected advertisers and brands. */
  detectedAdvertisers?: ReadonlyArray<AdvertiserAndBrand>;
  /** Policy compliance of this creative when bidding in Open Bidding (outside of Russia and China). For the list of platform policies, see: https://support.google.com/platformspolicy/answer/3013851. */
  platformPolicyCompliance?: PolicyCompliance;
  /** The detected domains for this creative. */
  detectedDomains?: ReadonlyArray<string>;
  /** The policy compliance of this creative in Russia. When approved or disapproved, this applies to both deals and open auction in Russia. When pending review, this creative is allowed to serve for deals but not for open auction. */
  russiaPolicyCompliance?: PolicyCompliance;
  /** Detected sensitive categories, if any. Can be used to filter the response of the creatives.list method. See the ad-sensitive-categories.txt file in the technical documentation for a list of IDs. You should use these IDs along with the excluded-sensitive-category field in the bid request to filter your bids. */
  detectedSensitiveCategories?: ReadonlyArray<number>;
  /** The set of detected destination URLs for the creative. Can be used to filter the response of the creatives.list method. */
  detectedClickThroughUrls?: ReadonlyArray<string>;
  /** Policy compliance of this creative when bidding in open auction, private auction, or auction packages (outside of Russia and China). */
  networkPolicyCompliance?: PolicyCompliance;
  /** Output only. The taxonomy in which the detected_categories field is expressed. */
  detectedCategoriesTaxonomy?:
    | "AD_CATEGORY_TAXONOMY_UNSPECIFIED"
    | "GOOGLE_AD_CATEGORY_TAXONOMY"
    | "IAB_CONTENT_1_0"
    | (string & {});
  /** The policy compliance of this creative in China. When approved or disapproved, this applies to both deals and open auction in China. When pending review, this creative is allowed to serve for deals but not for open auction. */
  chinaPolicyCompliance?: PolicyCompliance;
  /** Detected product categories, if any. See the ad-product-categories.txt file in the technical documentation for a list of IDs. Can be used to filter the response of the creatives.list method. */
  detectedProductCategories?: ReadonlyArray<number>;
  /** Publisher-excludable attributes that were detected for this creative. Can be used to filter the response of the creatives.list method. If the `excluded_attribute` field of a [bid request](https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto) contains one of the attributes that were declared or detected for a given creative, and a bid is submitted with that creative, the bid will be filtered before the auction. */
  detectedAttributes?: ReadonlyArray<
    | "ATTRIBUTE_UNSPECIFIED"
    | "IMAGE_RICH_MEDIA"
    | "ADOBE_FLASH_FLV"
    | "IS_TAGGED"
    | "IS_COOKIE_TARGETED"
    | "IS_USER_INTEREST_TARGETED"
    | "EXPANDING_DIRECTION_NONE"
    | "EXPANDING_DIRECTION_UP"
    | "EXPANDING_DIRECTION_DOWN"
    | "EXPANDING_DIRECTION_LEFT"
    | "EXPANDING_DIRECTION_RIGHT"
    | "EXPANDING_DIRECTION_UP_LEFT"
    | "EXPANDING_DIRECTION_UP_RIGHT"
    | "EXPANDING_DIRECTION_DOWN_LEFT"
    | "EXPANDING_DIRECTION_DOWN_RIGHT"
    | "CREATIVE_TYPE_HTML"
    | "CREATIVE_TYPE_VAST_VIDEO"
    | "EXPANDING_DIRECTION_UP_OR_DOWN"
    | "EXPANDING_DIRECTION_LEFT_OR_RIGHT"
    | "EXPANDING_DIRECTION_ANY_DIAGONAL"
    | "EXPANDING_ACTION_ROLLOVER_TO_EXPAND"
    | "INSTREAM_VAST_VIDEO_TYPE_VPAID_FLASH"
    | "RICH_MEDIA_CAPABILITY_TYPE_MRAID"
    | "RICH_MEDIA_CAPABILITY_TYPE_FLASH"
    | "RICH_MEDIA_CAPABILITY_TYPE_HTML5"
    | "SKIPPABLE_INSTREAM_VIDEO"
    | "RICH_MEDIA_CAPABILITY_TYPE_SSL"
    | "RICH_MEDIA_CAPABILITY_TYPE_NON_SSL"
    | "RICH_MEDIA_CAPABILITY_TYPE_INTERSTITIAL"
    | "NON_SKIPPABLE_INSTREAM_VIDEO"
    | "NATIVE_ELIGIBILITY_ELIGIBLE"
    | "NON_VPAID"
    | "NATIVE_ELIGIBILITY_NOT_ELIGIBLE"
    | "ANY_INTERSTITIAL"
    | "NON_INTERSTITIAL"
    | "IN_BANNER_VIDEO"
    | "RENDERING_SIZELESS_ADX"
    | "OMSDK_1_0"
    | "RENDERING_PLAYABLE"
    | (string & {})
  >;
  /** The last time the creative status was updated. Can be used to filter the response of the creatives.list method. */
  lastStatusUpdate?: string;
}

export const CreativeServingDecision =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adTechnologyProviders: Schema.optional(AdTechnologyProviders),
    detectedVendorIds: Schema.optional(Schema.Array(Schema.Number)),
    dealsPolicyCompliance: Schema.optional(PolicyCompliance),
    detectedCategories: Schema.optional(Schema.Array(Schema.String)),
    detectedLanguages: Schema.optional(Schema.Array(Schema.String)),
    detectedAdvertisers: Schema.optional(Schema.Array(AdvertiserAndBrand)),
    platformPolicyCompliance: Schema.optional(PolicyCompliance),
    detectedDomains: Schema.optional(Schema.Array(Schema.String)),
    russiaPolicyCompliance: Schema.optional(PolicyCompliance),
    detectedSensitiveCategories: Schema.optional(Schema.Array(Schema.Number)),
    detectedClickThroughUrls: Schema.optional(Schema.Array(Schema.String)),
    networkPolicyCompliance: Schema.optional(PolicyCompliance),
    detectedCategoriesTaxonomy: Schema.optional(Schema.String),
    chinaPolicyCompliance: Schema.optional(PolicyCompliance),
    detectedProductCategories: Schema.optional(Schema.Array(Schema.Number)),
    detectedAttributes: Schema.optional(Schema.Array(Schema.String)),
    lastStatusUpdate: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreativeServingDecision" });

export interface MediaFile {
  /** Bitrate of the video file, in Kbps. Can be used to filter the response of the creatives.list method. */
  bitrate?: string;
  /** The MIME type of this media file. Can be used to filter the response of the creatives.list method. */
  mimeType?:
    | "VIDEO_MIME_TYPE_UNSPECIFIED"
    | "MIME_VIDEO_XFLV"
    | "MIME_VIDEO_WEBM"
    | "MIME_VIDEO_MP4"
    | "MIME_VIDEO_OGG"
    | "MIME_VIDEO_YT_HOSTED"
    | "MIME_VIDEO_X_MS_WMV"
    | "MIME_VIDEO_3GPP"
    | "MIME_VIDEO_MOV"
    | "MIME_APPLICATION_SWF"
    | "MIME_APPLICATION_SURVEY"
    | "MIME_APPLICATION_JAVASCRIPT"
    | "MIME_APPLICATION_SILVERLIGHT"
    | "MIME_APPLICATION_MPEGURL"
    | "MIME_APPLICATION_MPEGDASH"
    | "MIME_AUDIO_MP4A"
    | "MIME_AUDIO_MP3"
    | "MIME_AUDIO_OGG"
    | (string & {});
}

export const MediaFile = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bitrate: Schema.optional(Schema.String),
  mimeType: Schema.optional(Schema.String),
}).annotate({ identifier: "MediaFile" });

export interface VideoMetadata {
  /** Is this a VPAID ad? Can be used to filter the response of the creatives.list method. */
  isVpaid?: boolean;
  /** The list of all media files declared in the VAST. If there are multiple VASTs in a wrapper chain, this includes the media files from the deepest one in the chain. */
  mediaFiles?: ReadonlyArray<MediaFile>;
  /** The minimum duration that the user has to watch before being able to skip this ad. If the field is not set, the ad is not skippable. If the field is set, the ad is skippable. Can be used to filter the response of the creatives.list method. */
  skipOffset?: string;
  /** The duration of the ad. Can be used to filter the response of the creatives.list method. */
  duration?: string;
  /** Is this a valid VAST ad? Can be used to filter the response of the creatives.list method. */
  isValidVast?: boolean;
  /** The maximum VAST version across all wrapped VAST documents. Can be used to filter the response of the creatives.list method. */
  vastVersion?:
    | "VAST_VERSION_UNSPECIFIED"
    | "VAST_VERSION_1_0"
    | "VAST_VERSION_2_0"
    | "VAST_VERSION_3_0"
    | "VAST_VERSION_4_0"
    | (string & {});
}

export const VideoMetadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  isVpaid: Schema.optional(Schema.Boolean),
  mediaFiles: Schema.optional(Schema.Array(MediaFile)),
  skipOffset: Schema.optional(Schema.String),
  duration: Schema.optional(Schema.String),
  isValidVast: Schema.optional(Schema.Boolean),
  vastVersion: Schema.optional(Schema.String),
}).annotate({ identifier: "VideoMetadata" });

export interface VideoContent {
  /** The URL to fetch a video ad. The URL should return an XML response that conforms to the VAST 2.0, 3.0 or 4.x standard. */
  videoUrl?: string;
  /** Output only. Video metadata. */
  videoMetadata?: VideoMetadata;
  /** The contents of a VAST document for a video ad. This document should conform to the VAST 2.0, 3.0, or 4.x standard. */
  videoVastXml?: string;
}

export const VideoContent = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  videoUrl: Schema.optional(Schema.String),
  videoMetadata: Schema.optional(VideoMetadata),
  videoVastXml: Schema.optional(Schema.String),
}).annotate({ identifier: "VideoContent" });

export interface Creative {
  /** All declared restricted categories for the ads that may be shown from this creative. Can be used to filter the response of the creatives.list method. */
  declaredRestrictedCategories?: ReadonlyArray<
    "RESTRICTED_CATEGORY_UNSPECIFIED" | "ALCOHOL" | (string & {})
  >;
  /** A native creative. */
  native?: NativeContent;
  /** The link to AdChoices destination page. This is only supported for native ads. */
  adChoicesDestinationUrl?: string;
  /** Output only. The last update timestamp of the creative through the API. */
  apiUpdateTime?: string;
  /** Output only. IDs of all of the deals with which this creative has been used in bidding. Can be used to filter the response of the creatives.list method. */
  dealIds?: ReadonlyArray<string>;
  /** The name of the company being advertised in the creative. Can be used to filter the response of the creatives.list method. */
  advertiserName?: string;
  /** Output only. ID of the buyer account that this creative is owned by. Can be used to filter the response of the creatives.list method with equality and inequality check. */
  accountId?: string;
  /** Buyer-specific creative ID that references this creative in bid responses. This field is Ignored in update operations. Can be used to filter the response of the creatives.list method. The maximum length of the creative ID is 128 bytes. */
  creativeId?: string;
  /** All restricted categories for the ads that may be shown from this creative. */
  restrictedCategories?: ReadonlyArray<
    "RESTRICTED_CATEGORY_UNSPECIFIED" | "ALCOHOL" | (string & {})
  >;
  /** The agency ID for this creative. */
  agencyId?: string;
  /** Output only. The format of this creative. Can be used to filter the response of the creatives.list method. */
  creativeFormat?:
    | "CREATIVE_FORMAT_UNSPECIFIED"
    | "HTML"
    | "VIDEO"
    | "NATIVE"
    | (string & {});
  /** Output only. Name of the creative. Follows the pattern `buyers/{buyer}/creatives/{creative}`, where `{buyer}` represents the account ID of the buyer who owns the creative, and `{creative}` is the buyer-specific creative ID that references this creative in the bid response. */
  name?: string;
  /** The set of URLs to be called to record an impression. */
  impressionTrackingUrls?: ReadonlyArray<string>;
  /** All declared attributes for the ads that may be shown from this creative. Can be used to filter the response of the creatives.list method. If the `excluded_attribute` field of a [bid request](https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto") contains one of the attributes that were declared or detected for a given creative, and a bid is submitted with that creative, the bid will be filtered before the auction. */
  declaredAttributes?: ReadonlyArray<
    | "ATTRIBUTE_UNSPECIFIED"
    | "IMAGE_RICH_MEDIA"
    | "ADOBE_FLASH_FLV"
    | "IS_TAGGED"
    | "IS_COOKIE_TARGETED"
    | "IS_USER_INTEREST_TARGETED"
    | "EXPANDING_DIRECTION_NONE"
    | "EXPANDING_DIRECTION_UP"
    | "EXPANDING_DIRECTION_DOWN"
    | "EXPANDING_DIRECTION_LEFT"
    | "EXPANDING_DIRECTION_RIGHT"
    | "EXPANDING_DIRECTION_UP_LEFT"
    | "EXPANDING_DIRECTION_UP_RIGHT"
    | "EXPANDING_DIRECTION_DOWN_LEFT"
    | "EXPANDING_DIRECTION_DOWN_RIGHT"
    | "CREATIVE_TYPE_HTML"
    | "CREATIVE_TYPE_VAST_VIDEO"
    | "EXPANDING_DIRECTION_UP_OR_DOWN"
    | "EXPANDING_DIRECTION_LEFT_OR_RIGHT"
    | "EXPANDING_DIRECTION_ANY_DIAGONAL"
    | "EXPANDING_ACTION_ROLLOVER_TO_EXPAND"
    | "INSTREAM_VAST_VIDEO_TYPE_VPAID_FLASH"
    | "RICH_MEDIA_CAPABILITY_TYPE_MRAID"
    | "RICH_MEDIA_CAPABILITY_TYPE_FLASH"
    | "RICH_MEDIA_CAPABILITY_TYPE_HTML5"
    | "SKIPPABLE_INSTREAM_VIDEO"
    | "RICH_MEDIA_CAPABILITY_TYPE_SSL"
    | "RICH_MEDIA_CAPABILITY_TYPE_NON_SSL"
    | "RICH_MEDIA_CAPABILITY_TYPE_INTERSTITIAL"
    | "NON_SKIPPABLE_INSTREAM_VIDEO"
    | "NATIVE_ELIGIBILITY_ELIGIBLE"
    | "NON_VPAID"
    | "NATIVE_ELIGIBILITY_NOT_ELIGIBLE"
    | "ANY_INTERSTITIAL"
    | "NON_INTERSTITIAL"
    | "IN_BANNER_VIDEO"
    | "RENDERING_SIZELESS_ADX"
    | "OMSDK_1_0"
    | "RENDERING_PLAYABLE"
    | (string & {})
  >;
  /** An HTML creative. */
  html?: HtmlContent;
  /** The set of declared destination URLs for the creative. Can be used to filter the response of the creatives.list method. */
  declaredClickThroughUrls?: ReadonlyArray<string>;
  /** Experimental field that can be used during the [FLEDGE Origin Trial](/authorized-buyers/rtb/fledge-origin-trial). The URL to fetch an interest group ad used in [TURTLEDOVE on-device auction](https://github.com/WICG/turtledove/blob/main/FLEDGE.md#1-browsers-record-interest-groups"). This should be unique among all creatives for a given `accountId`. This URL should be the same as the URL returned by [generateBid()](https://github.com/WICG/turtledove/blob/main/FLEDGE.md#32-on-device-bidding). */
  renderUrl?: string;
  /** Output only. The version of the creative. Version for a new creative is 1 and it increments during subsequent creative updates. */
  version?: number;
  /** Output only. Top level status and detected attributes of a creative (for example domain, language, advertiser, product category, etc.) that affect whether (status) and where (context) a creative will be allowed to serve. */
  creativeServingDecision?: CreativeServingDecision;
  /** A video creative. */
  video?: VideoContent;
  /** IDs for the declared ad technology vendors that may be used by this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/vendors.txt for possible values. Can be used to filter the response of the creatives.list method. */
  declaredVendorIds?: ReadonlyArray<number>;
}

export const Creative = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  declaredRestrictedCategories: Schema.optional(Schema.Array(Schema.String)),
  native: Schema.optional(NativeContent),
  adChoicesDestinationUrl: Schema.optional(Schema.String),
  apiUpdateTime: Schema.optional(Schema.String),
  dealIds: Schema.optional(Schema.Array(Schema.String)),
  advertiserName: Schema.optional(Schema.String),
  accountId: Schema.optional(Schema.String),
  creativeId: Schema.optional(Schema.String),
  restrictedCategories: Schema.optional(Schema.Array(Schema.String)),
  agencyId: Schema.optional(Schema.String),
  creativeFormat: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  impressionTrackingUrls: Schema.optional(Schema.Array(Schema.String)),
  declaredAttributes: Schema.optional(Schema.Array(Schema.String)),
  html: Schema.optional(HtmlContent),
  declaredClickThroughUrls: Schema.optional(Schema.Array(Schema.String)),
  renderUrl: Schema.optional(Schema.String),
  version: Schema.optional(Schema.Number),
  creativeServingDecision: Schema.optional(CreativeServingDecision),
  video: Schema.optional(VideoContent),
  declaredVendorIds: Schema.optional(Schema.Array(Schema.Number)),
}).annotate({ identifier: "Creative" });

export interface ListCreativesResponse {
  /** The list of creatives. */
  creatives?: ReadonlyArray<Creative>;
  /** A token to retrieve the next page of results. Pass this value in the ListCreativesRequest.pageToken field in the subsequent call to the `ListCreatives` method to retrieve the next page of results. */
  nextPageToken?: string;
}

export const ListCreativesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  creatives: Schema.optional(Schema.Array(Creative)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListCreativesResponse" });

export interface GetRemarketingTagResponse {
  /** An HTML tag that can be placed on the advertiser's page to add users to a user list. For more information and code samples on using snippets on your website, refer to [Tag your site for remarketing](https://support.google.com/google-ads/answer/2476688). */
  snippet?: string;
}

export const GetRemarketingTagResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    snippet: Schema.optional(Schema.String),
  }).annotate({ identifier: "GetRemarketingTagResponse" });

export interface Empty {}

export const Empty = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
  identifier: "Empty",
});

export interface PublisherConnection {
  /** Output only. Whether the publisher is an Ad Manager or AdMob publisher. */
  publisherPlatform?:
    | "PUBLISHER_PLATFORM_UNSPECIFIED"
    | "GOOGLE_AD_MANAGER"
    | "ADMOB"
    | (string & {});
  /** Output only. The time at which the publisher initiated a connection with the bidder (irrespective of if or when the bidder approves it). This is subsequently updated if the publisher revokes and re-initiates the connection. */
  createTime?: string;
  /** Output only. Publisher display name. */
  displayName?: string;
  /** Whether the publisher has been approved by the bidder. */
  biddingState?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "REJECTED"
    | "APPROVED"
    | (string & {});
  /** Output only. Name of the publisher connection. This follows the pattern `bidders/{bidder}/publisherConnections/{publisher}`, where `{bidder}` represents the account ID of the bidder, and `{publisher}` is the ads.txt/app-ads.txt publisher ID. */
  name?: string;
}

export const PublisherConnection = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  publisherPlatform: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  biddingState: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "PublisherConnection" });

export interface BatchApprovePublisherConnectionsResponse {
  /** The publisher connections that have been approved. */
  publisherConnections?: ReadonlyArray<PublisherConnection>;
}

export const BatchApprovePublisherConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    publisherConnections: Schema.optional(Schema.Array(PublisherConnection)),
  }).annotate({ identifier: "BatchApprovePublisherConnectionsResponse" });

export interface Buyer {
  /** Output only. The number of creatives that this buyer submitted through the API or bid with in the last 30 days. This is counted against the maximum number of active creatives. */
  activeCreativeCount?: string;
  /** Output only. A list of billing IDs associated with this account. These IDs appear on: 1. A bid request, to signal which buyers are eligible to bid on a given opportunity, and which pretargeting configurations were matched for each eligible buyer. 2. The bid response, to attribute a winning impression to a specific account for billing, reporting, policy and publisher block enforcement. */
  billingIds?: ReadonlyArray<string>;
  /** Output only. The maximum number of active creatives that this buyer can have. */
  maximumActiveCreativeCount?: string;
  /** Output only. Name of the buyer resource that must follow the pattern `buyers/{buyerAccountId}`, where `{buyerAccountId}` is the account ID of the buyer account whose information is to be received. One can get their account ID on the Authorized Buyers or Open Bidding UI, or by contacting their Google account manager. */
  name?: string;
  /** Output only. The name of the bidder resource that is responsible for receiving bidding traffic for this account. The bidder name must follow the pattern `bidders/{bidderAccountId}`, where `{bidderAccountId}` is the account ID of the bidder receiving traffic for this buyer. */
  bidder?: string;
  /** Output only. The diplay name associated with this buyer account, as visible to sellers. */
  displayName?: string;
}

export const Buyer = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  activeCreativeCount: Schema.optional(Schema.String),
  billingIds: Schema.optional(Schema.Array(Schema.String)),
  maximumActiveCreativeCount: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  bidder: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
}).annotate({ identifier: "Buyer" });

export interface ListBuyersResponse {
  /** List of buyers. */
  buyers?: ReadonlyArray<Buyer>;
  /** A token which can be passed to a subsequent call to the `ListBuyers` method to retrieve the next page of results in ListBuyersRequest.pageToken. */
  nextPageToken?: string;
}

export const ListBuyersResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  buyers: Schema.optional(Schema.Array(Buyer)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListBuyersResponse" });

export interface RemoveTargetedAppsRequest {
  /** A list of app IDs to stop targeting in the pretargeting configuration. These values will be removed from the list of targeted app IDs in PretargetingConfig.appTargeting.mobileAppTargeting.values. */
  appIds?: ReadonlyArray<string>;
}

export const RemoveTargetedAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "RemoveTargetedAppsRequest" });

export interface SuspendPretargetingConfigRequest {}

export const SuspendPretargetingConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SuspendPretargetingConfigRequest",
  });

export interface AddTargetedPublishersRequest {
  /** A list of publisher IDs to target in the pretargeting configuration. These values will be added to the list of targeted publisher IDs in PretargetingConfig.publisherTargeting.values. Publishers are identified by their publisher ID from ads.txt / app-ads.txt. See https://iabtechlab.com/ads-txt/ and https://iabtechlab.com/app-ads-txt/ for more details. */
  publisherIds?: ReadonlyArray<string>;
  /** Required. The targeting mode that should be applied to the list of publisher IDs. If are existing publisher IDs, must be equal to the existing PretargetingConfig.publisherTargeting.targetingMode or a 400 bad request error will be returned. */
  targetingMode?:
    | "TARGETING_MODE_UNSPECIFIED"
    | "INCLUSIVE"
    | "EXCLUSIVE"
    | (string & {});
}

export const AddTargetedPublishersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    publisherIds: Schema.optional(Schema.Array(Schema.String)),
    targetingMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "AddTargetedPublishersRequest" });

export interface WatchCreativesRequest {}

export const WatchCreativesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "WatchCreativesRequest" });

export interface AddTargetedSitesRequest {
  /** Required. The targeting mode that should be applied to the list of site URLs. If there are existing targeted sites, must be equal to the existing PretargetingConfig.webTargeting.targetingMode or a 400 bad request error will be returned. */
  targetingMode?:
    | "TARGETING_MODE_UNSPECIFIED"
    | "INCLUSIVE"
    | "EXCLUSIVE"
    | (string & {});
  /** A list of site URLs to target in the pretargeting configuration. These values will be added to the list of targeted URLs in PretargetingConfig.webTargeting.values. */
  sites?: ReadonlyArray<string>;
}

export const AddTargetedSitesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetingMode: Schema.optional(Schema.String),
    sites: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AddTargetedSitesRequest" });

export interface ListPublisherConnectionsResponse {
  /** The list of publisher connections. */
  publisherConnections?: ReadonlyArray<PublisherConnection>;
  /** A token to retrieve the next page of results. Pass this value in the ListPublisherConnectionsRequest.pageToken field in the subsequent call to the `ListPublisherConnections` method to retrieve the next page of results. */
  nextPageToken?: string;
}

export const ListPublisherConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    publisherConnections: Schema.optional(Schema.Array(PublisherConnection)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListPublisherConnectionsResponse" });

export interface OpenUserListRequest {}

export const OpenUserListRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "OpenUserListRequest" });

export interface UserList {
  /** Output only. The status of the user list. A new user list starts out as open. */
  status?: "STATUS_UNSPECIFIED" | "OPEN" | "CLOSED" | (string & {});
  /** Required. Deprecated. This will be removed in October 2023. For more information, see the release notes: https://developers.google.com/authorized-buyers/apis/relnotes#real-time-bidding-api The URL restriction for the user list. */
  urlRestriction?: UrlRestriction;
  /** The description for the user list. */
  description?: string;
  /** Output only. Name of the user list that must follow the pattern `buyers/{buyer}/userLists/{user_list}`, where `{buyer}` represents the account ID of the buyer who owns the user list. For a bidder accessing user lists on behalf of a child seat buyer, `{buyer}` represents the account ID of the child seat buyer. `{user_list}` is an int64 identifier assigned by Google to uniquely identify a user list. */
  name?: string;
  /** Required. The number of days a user's cookie stays on the user list. The field must be between 0 and 540 inclusive. */
  membershipDurationDays?: string;
  /** Required. Display name of the user list. This must be unique across all user lists for a given account. */
  displayName?: string;
}

export const UserList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(Schema.String),
  urlRestriction: Schema.optional(UrlRestriction),
  description: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  membershipDurationDays: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
}).annotate({ identifier: "UserList" });

export interface WatchCreativesResponse {
  /** The Pub/Sub topic that will be used to publish creative serving status notifications. This would be of the format `projects/{project_id}/topics/{topic_id}`. */
  topic?: string;
  /** The Pub/Sub subscription that can be used to pull creative status notifications. This would be of the format `projects/{project_id}/subscriptions/{subscription_id}`. Subscription is created with pull delivery. All service accounts belonging to the bidder will have read access to this subscription. Subscriptions that are inactive for more than 90 days will be disabled. Use watchCreatives to re-enable the subscription. */
  subscription?: string;
}

export const WatchCreativesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    topic: Schema.optional(Schema.String),
    subscription: Schema.optional(Schema.String),
  },
).annotate({ identifier: "WatchCreativesResponse" });

export interface CreativeDimensions {
  /** The width of the creative in pixels. */
  width?: string;
  /** The height of the creative in pixels. */
  height?: string;
}

export const CreativeDimensions = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  width: Schema.optional(Schema.String),
  height: Schema.optional(Schema.String),
}).annotate({ identifier: "CreativeDimensions" });

export interface BatchRejectPublisherConnectionsRequest {
  /** Required. The names of the publishers with whom connection will be rejected. In the pattern `bidders/{bidder}/publisherConnections/{publisher}` where `{bidder}` is the account ID of the bidder, and `{publisher}` is the ads.txt/app-ads.txt publisher ID. */
  names?: ReadonlyArray<string>;
}

export const BatchRejectPublisherConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BatchRejectPublisherConnectionsRequest" });

export interface RemoveTargetedSitesRequest {
  /** A list of site URLs to stop targeting in the pretargeting configuration. These values will be removed from the list of targeted URLs in PretargetingConfig.webTargeting.values. */
  sites?: ReadonlyArray<string>;
}

export const RemoveTargetedSitesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sites: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "RemoveTargetedSitesRequest" });

export interface CloseUserListRequest {}

export const CloseUserListRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "CloseUserListRequest" });

export interface PretargetingConfig {
  /** The verticals included or excluded in this config as defined in https://developers.google.com/authorized-buyers/rtb/downloads/publisher-verticals */
  verticalTargeting?: NumericTargetingDimension;
  /** The platforms included by this config. Bid requests for devices with the specified platform types will be sent. An unset value allows all bid requests to be sent, regardless of platform. */
  includedPlatforms?: ReadonlyArray<
    | "PLATFORM_UNSPECIFIED"
    | "PERSONAL_COMPUTER"
    | "PHONE"
    | "TABLET"
    | "CONNECTED_TV"
    | (string & {})
  >;
  /** Targeting on a subset of app inventory. If APP is listed in targeted_environments, the specified targeting is applied. A maximum of 30,000 app IDs can be targeted. An unset value for targeting allows all app-based bid requests to be sent. Apps can either be targeting positively (bid requests will be sent only if the destination app is listed in the targeting dimension) or negatively (bid requests will be sent only if the destination app is not listed in the targeting dimension). */
  appTargeting?: AppTargeting;
  /** Output only. The state of this pretargeting config. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "SUSPENDED" | (string & {});
  /** Output only. Existing included or excluded geos that are invalid. Previously targeted geos may become invalid due to privacy restrictions. */
  invalidGeoIds?: ReadonlyArray<string>;
  /** Targeting modes included by this config. A bid request must allow all the specified targeting modes. An unset value allows all bid requests to be sent, regardless of which targeting modes they allow. */
  allowedUserTargetingModes?: ReadonlyArray<
    | "USER_TARGETING_MODE_UNSPECIFIED"
    | "REMARKETING_ADS"
    | "INTEREST_BASED_TARGETING"
    | (string & {})
  >;
  /** The languages included in this config, represented by their language code. See https://developers.google.com/adwords/api/docs/appendix/languagecodes. */
  includedLanguages?: ReadonlyArray<string>;
  /** Targeting on a subset of site inventory. If WEB is listed in included_environments, the specified targeting is applied. A maximum of 50,000 site URLs can be targeted. An unset value for targeting allows all web-based bid requests to be sent. Sites can either be targeting positively (bid requests will be sent only if the destination site is listed in the targeting dimension) or negatively (bid requests will be sent only if the destination site is not listed in the pretargeting config). */
  webTargeting?: StringTargetingDimension;
  /** The interstitial targeting specified for this config. The unset value will allow bid requests to be sent regardless of whether they are for interstitials or not. */
  interstitialTargeting?:
    | "INTERSTITIAL_TARGETING_UNSPECIFIED"
    | "ONLY_INTERSTITIAL_REQUESTS"
    | "ONLY_NON_INTERSTITIAL_REQUESTS"
    | (string & {});
  /** Creative dimensions included by this config. Only bid requests eligible for at least one of the specified creative dimensions will be sent. An unset value allows all bid requests to be sent, regardless of creative dimension. */
  includedCreativeDimensions?: ReadonlyArray<CreativeDimensions>;
  /** Output only. Name of the pretargeting config that must follow the pattern `bidders/{bidder_account_id}/pretargetingConfigs/{config_id}` */
  name?: string;
  /** The remarketing lists included or excluded in this config as defined in UserList. */
  userListTargeting?: NumericTargetingDimension;
  /** Targeting on a subset of publisher inventory. Publishers can either be targeted positively (bid requests will be sent only if the publisher is listed in the targeting dimension) or negatively (bid requests will be sent only if the publisher is not listed in the targeting dimension). A maximum of 10,000 publisher IDs can be targeted. Publisher IDs are found in [ads.txt](https://iabtechlab.com/ads-txt/) / [app-ads.txt](https://iabtechlab.com/app-ads-txt/) and in bid requests in the `BidRequest.publisher_id` field on the [Google RTB protocol](https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto) or the `BidRequest.site.publisher.id` / `BidRequest.app.publisher.id` field on the [OpenRTB protocol](https://developers.google.com/authorized-buyers/rtb/downloads/openrtb-adx-proto). Publisher IDs will be returned in the order that they were entered. */
  publisherTargeting?: StringTargetingDimension;
  /** The sensitive content category label IDs excluded in this config. Bid requests for inventory with any of the specified content label IDs will not be sent. Refer to this file https://storage.googleapis.com/adx-rtb-dictionaries/content-labels.txt for category IDs. */
  excludedContentLabelIds?: ReadonlyArray<string>;
  /** The mobile operating systems included in this config as defined in https://storage.googleapis.com/adx-rtb-dictionaries/mobile-os.csv */
  includedMobileOperatingSystemIds?: ReadonlyArray<string>;
  /** The targeted minimum viewability decile, ranging in values [0, 10]. A value of 5 means that the config will only match adslots for which we predict at least 50% viewability. Values > 10 will be rounded down to 10. An unset value or a value of 0 indicates that bid requests will be sent regardless of viewability. */
  minimumViewabilityDecile?: number;
  /** The maximum QPS threshold for this config. The bidder should receive no more than this number of bid requests matching this config per second across all their bidding endpoints among all trading locations. Further information available at https://developers.google.com/authorized-buyers/rtb/peer-guide */
  maximumQps?: string;
  /** User identifier types included in this config. At least one of the user identifier types specified in this list must be available for the bid request to be sent. */
  includedUserIdTypes?: ReadonlyArray<
    | "USER_ID_TYPE_UNSPECIFIED"
    | "HOSTED_MATCH_DATA"
    | "GOOGLE_COOKIE"
    | "DEVICE_ID"
    | "PUBLISHER_PROVIDED_ID"
    | "PUBLISHER_FIRST_PARTY_ID"
    | (string & {})
  >;
  /** The geos included or excluded in this config defined in https://storage.googleapis.com/adx-rtb-dictionaries/geo-table.csv */
  geoTargeting?: NumericTargetingDimension;
  /** Environments that are being included. Bid requests will not be sent for a given environment if it is not included. Further restrictions can be applied to included environments to target only a subset of its inventory. An unset value includes all environments. */
  includedEnvironments?: ReadonlyArray<
    "ENVIRONMENT_UNSPECIFIED" | "APP" | "WEB" | (string & {})
  >;
  /** Creative formats included by this config. Only bid requests eligible for at least one of the specified creative formats will be sent. An unset value will allow all bid requests to be sent, regardless of format. */
  includedFormats?: ReadonlyArray<
    "CREATIVE_FORMAT_UNSPECIFIED" | "HTML" | "VAST" | "NATIVE" | (string & {})
  >;
  /** Output only. The identifier that corresponds to this pretargeting config that helps buyers track and attribute their spend across their own arbitrary divisions. If a bid request matches more than one config, the buyer chooses which billing_id to attribute each of their bids. */
  billingId?: string;
  /** The diplay name associated with this config. This name must be unique among all the pretargeting configs a bidder has. */
  displayName?: string;
}

export const PretargetingConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  verticalTargeting: Schema.optional(NumericTargetingDimension),
  includedPlatforms: Schema.optional(Schema.Array(Schema.String)),
  appTargeting: Schema.optional(AppTargeting),
  state: Schema.optional(Schema.String),
  invalidGeoIds: Schema.optional(Schema.Array(Schema.String)),
  allowedUserTargetingModes: Schema.optional(Schema.Array(Schema.String)),
  includedLanguages: Schema.optional(Schema.Array(Schema.String)),
  webTargeting: Schema.optional(StringTargetingDimension),
  interstitialTargeting: Schema.optional(Schema.String),
  includedCreativeDimensions: Schema.optional(Schema.Array(CreativeDimensions)),
  name: Schema.optional(Schema.String),
  userListTargeting: Schema.optional(NumericTargetingDimension),
  publisherTargeting: Schema.optional(StringTargetingDimension),
  excludedContentLabelIds: Schema.optional(Schema.Array(Schema.String)),
  includedMobileOperatingSystemIds: Schema.optional(
    Schema.Array(Schema.String),
  ),
  minimumViewabilityDecile: Schema.optional(Schema.Number),
  maximumQps: Schema.optional(Schema.String),
  includedUserIdTypes: Schema.optional(Schema.Array(Schema.String)),
  geoTargeting: Schema.optional(NumericTargetingDimension),
  includedEnvironments: Schema.optional(Schema.Array(Schema.String)),
  includedFormats: Schema.optional(Schema.Array(Schema.String)),
  billingId: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
}).annotate({ identifier: "PretargetingConfig" });

export interface ListPretargetingConfigsResponse {
  /** List of pretargeting configurations. */
  pretargetingConfigs?: ReadonlyArray<PretargetingConfig>;
  /** A token which can be passed to a subsequent call to the `ListPretargetingConfigs` method to retrieve the next page of results in ListPretargetingConfigsRequest.pageToken. */
  nextPageToken?: string;
}

export const ListPretargetingConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pretargetingConfigs: Schema.optional(Schema.Array(PretargetingConfig)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListPretargetingConfigsResponse" });

export interface BatchRejectPublisherConnectionsResponse {
  /** The publisher connections that have been rejected. */
  publisherConnections?: ReadonlyArray<PublisherConnection>;
}

export const BatchRejectPublisherConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    publisherConnections: Schema.optional(Schema.Array(PublisherConnection)),
  }).annotate({ identifier: "BatchRejectPublisherConnectionsResponse" });

export interface ListUserListsResponse {
  /** List of user lists from the search. */
  userLists?: ReadonlyArray<UserList>;
  /** The continuation page token to send back to the server in a subsequent request. Due to a currently known issue, it is recommended that the caller keep invoking the list method until the time a next page token is not returned, even if the result set is empty. */
  nextPageToken?: string;
}

export const ListUserListsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userLists: Schema.optional(Schema.Array(UserList)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListUserListsResponse" });

export interface Endpoint {
  /** Output only. The URL that bid requests should be sent to. */
  url?: string;
  /** The maximum number of queries per second allowed to be sent to this server. */
  maximumQps?: string;
  /** The protocol that the bidder endpoint is using. */
  bidProtocol?:
    | "BID_PROTOCOL_UNSPECIFIED"
    | "GOOGLE_RTB"
    | "OPENRTB_JSON"
    | "OPENRTB_PROTOBUF"
    | (string & {});
  /** Output only. Name of the endpoint resource that must follow the pattern `bidders/{bidderAccountId}/endpoints/{endpointId}`, where {bidderAccountId} is the account ID of the bidder who operates this endpoint, and {endpointId} is a unique ID assigned by the server. */
  name?: string;
  /** The trading location that bid requests should be sent from. See https://developers.google.com/authorized-buyers/rtb/peer-guide#trading-locations for further information. */
  tradingLocation?:
    | "TRADING_LOCATION_UNSPECIFIED"
    | "US_WEST"
    | "US_EAST"
    | "EUROPE"
    | "ASIA"
    | (string & {});
}

export const Endpoint = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  url: Schema.optional(Schema.String),
  maximumQps: Schema.optional(Schema.String),
  bidProtocol: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  tradingLocation: Schema.optional(Schema.String),
}).annotate({ identifier: "Endpoint" });

export interface ListEndpointsResponse {
  /** List of bidder endpoints. */
  endpoints?: ReadonlyArray<Endpoint>;
  /** A token which can be passed to a subsequent call to the `ListEndpoints` method to retrieve the next page of results in ListEndpointsRequest.pageToken. */
  nextPageToken?: string;
}

export const ListEndpointsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  endpoints: Schema.optional(Schema.Array(Endpoint)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListEndpointsResponse" });

export interface AddTargetedAppsRequest {
  /** A list of app IDs to target in the pretargeting configuration. These values will be added to the list of targeted app IDs in PretargetingConfig.appTargeting.mobileAppTargeting.values. */
  appIds?: ReadonlyArray<string>;
  /** Required. The targeting mode that should be applied to the list of app IDs. If there are existing targeted app IDs, must be equal to the existing PretargetingConfig.appTargeting.mobileAppTargeting.targetingMode or a 400 bad request error will be returned. */
  targetingMode?:
    | "TARGETING_MODE_UNSPECIFIED"
    | "INCLUSIVE"
    | "EXCLUSIVE"
    | (string & {});
}

export const AddTargetedAppsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    appIds: Schema.optional(Schema.Array(Schema.String)),
    targetingMode: Schema.optional(Schema.String),
  },
).annotate({ identifier: "AddTargetedAppsRequest" });

// ==========================================================================
// Operations
// ==========================================================================

export interface GetBiddersRequest {
  /** Required. Name of the bidder to get. Format: `bidders/{bidderAccountId}` */
  name: string;
}

export const GetBiddersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "GET", path: "v1/{name}" }),
  svc,
) as unknown as Schema.Schema<GetBiddersRequest>;

export type GetBiddersResponse = Bidder;
export const GetBiddersResponse = /*@__PURE__*/ /*#__PURE__*/ Bidder;

export type GetBiddersError = DefaultErrors;

/** Gets a bidder account by its name. */
export const getBidders: API.OperationMethod<
  GetBiddersRequest,
  GetBiddersResponse,
  GetBiddersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBiddersRequest,
  output: GetBiddersResponse,
  errors: [],
}));

export interface ListBiddersRequest {
  /** The maximum number of bidders to return. If unspecified, at most 100 bidders will be returned. The maximum value is 500; values above 500 will be coerced to 500. */
  pageSize?: number;
  /** A token identifying a page of results the server should return. This value is received from a previous `ListBidders` call in ListBiddersResponse.nextPageToken. */
  pageToken?: string;
}

export const ListBiddersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
}).pipe(
  T.Http({ method: "GET", path: "v1/bidders" }),
  svc,
) as unknown as Schema.Schema<ListBiddersRequest>;

export type ListBiddersResponse_Op = ListBiddersResponse;
export const ListBiddersResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ ListBiddersResponse;

export type ListBiddersError = DefaultErrors;

/** Lists all the bidder accounts that belong to the caller. */
export const listBidders: API.PaginatedOperationMethod<
  ListBiddersRequest,
  ListBiddersResponse_Op,
  ListBiddersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListBiddersRequest,
  output: ListBiddersResponse_Op,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchBiddersEndpointsRequest {
  /** Field mask to use for partial in-place updates. */
  updateMask?: string;
  /** Output only. Name of the endpoint resource that must follow the pattern `bidders/{bidderAccountId}/endpoints/{endpointId}`, where {bidderAccountId} is the account ID of the bidder who operates this endpoint, and {endpointId} is a unique ID assigned by the server. */
  name: string;
  /** Request body */
  body?: Endpoint;
}

export const PatchBiddersEndpointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Endpoint).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchBiddersEndpointsRequest>;

export type PatchBiddersEndpointsResponse = Endpoint;
export const PatchBiddersEndpointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Endpoint;

export type PatchBiddersEndpointsError = DefaultErrors;

/** Updates a bidder's endpoint. */
export const patchBiddersEndpoints: API.OperationMethod<
  PatchBiddersEndpointsRequest,
  PatchBiddersEndpointsResponse,
  PatchBiddersEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchBiddersEndpointsRequest,
  output: PatchBiddersEndpointsResponse,
  errors: [],
}));

export interface GetBiddersEndpointsRequest {
  /** Required. Name of the bidder endpoint to get. Format: `bidders/{bidderAccountId}/endpoints/{endpointId}` */
  name: string;
}

export const GetBiddersEndpointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetBiddersEndpointsRequest>;

export type GetBiddersEndpointsResponse = Endpoint;
export const GetBiddersEndpointsResponse = /*@__PURE__*/ /*#__PURE__*/ Endpoint;

export type GetBiddersEndpointsError = DefaultErrors;

/** Gets a bidder endpoint by its name. */
export const getBiddersEndpoints: API.OperationMethod<
  GetBiddersEndpointsRequest,
  GetBiddersEndpointsResponse,
  GetBiddersEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBiddersEndpointsRequest,
  output: GetBiddersEndpointsResponse,
  errors: [],
}));

export interface ListBiddersEndpointsRequest {
  /** Required. Name of the bidder whose endpoints will be listed. Format: `bidders/{bidderAccountId}` */
  parent: string;
  /** The maximum number of endpoints to return. If unspecified, at most 100 endpoints will be returned. The maximum value is 500; values above 500 will be coerced to 500. */
  pageSize?: number;
  /** A token identifying a page of results the server should return. This value is received from a previous `ListEndpoints` call in ListEndpointsResponse.nextPageToken. */
  pageToken?: string;
}

export const ListBiddersEndpointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/endpoints" }),
    svc,
  ) as unknown as Schema.Schema<ListBiddersEndpointsRequest>;

export type ListBiddersEndpointsResponse = ListEndpointsResponse;
export const ListBiddersEndpointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListEndpointsResponse;

export type ListBiddersEndpointsError = DefaultErrors;

/** Lists all the bidder's endpoints. */
export const listBiddersEndpoints: API.PaginatedOperationMethod<
  ListBiddersEndpointsRequest,
  ListBiddersEndpointsResponse,
  ListBiddersEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListBiddersEndpointsRequest,
  output: ListBiddersEndpointsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface WatchBiddersCreativesRequest {
  /** Required. To watch all creatives pertaining to the bidder and all its child seat accounts, the bidder must follow the pattern `bidders/{bidderAccountId}`. */
  parent: string;
  /** Request body */
  body?: WatchCreativesRequest;
}

export const WatchBiddersCreativesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(WatchCreativesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{parent}/creatives:watch",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<WatchBiddersCreativesRequest>;

export type WatchBiddersCreativesResponse = WatchCreativesResponse;
export const WatchBiddersCreativesResponse =
  /*@__PURE__*/ /*#__PURE__*/ WatchCreativesResponse;

export type WatchBiddersCreativesError = DefaultErrors;

/** Watches all creatives pertaining to a bidder. It is sufficient to invoke this endpoint once per bidder. A Pub/Sub topic will be created and notifications will be pushed to the topic when any of the bidder's creatives change status. All of the bidder's service accounts will have access to read from the topic. Subsequent invocations of this method will return the existing Pub/Sub configuration. */
export const watchBiddersCreatives: API.OperationMethod<
  WatchBiddersCreativesRequest,
  WatchBiddersCreativesResponse,
  WatchBiddersCreativesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: WatchBiddersCreativesRequest,
  output: WatchBiddersCreativesResponse,
  errors: [],
}));

export interface ListBiddersCreativesRequest {
  /** A token identifying a page of results the server should return. Typically, this is the value of ListCreativesResponse.nextPageToken returned from the previous call to the 'ListCreatives' method. Page tokens for continued pages are valid for up to five hours, counting from the call to 'ListCreatives' for the first page. */
  pageToken?: string;
  /** Required. Name of the parent buyer that owns the creatives. The pattern for this resource is either `buyers/{buyerAccountId}` or `bidders/{bidderAccountId}`. For `buyers/{buyerAccountId}`, the `buyerAccountId` can be one of the following: 1. The ID of the buyer that is accessing their own creatives. 2. The ID of the child seat buyer under a bidder account. So for listing creatives pertaining to the child seat buyer (`456`) under bidder account (`123`), you would use the pattern: `buyers/456`. 3. The ID of the bidder itself. So for listing creatives pertaining to bidder (`123`), you would use `buyers/123`. If you want to access all creatives pertaining to both the bidder and all of its child seat accounts, you would use `bidders/{bidderAccountId}`, for example, for all creatives pertaining to bidder (`123`), use `bidders/123`. */
  parent: string;
  /** Requested page size. The server may return fewer creatives than requested (due to timeout constraint) even if more are available through another call. If unspecified, server will pick an appropriate default. Acceptable values are 1 to 1000, inclusive. */
  pageSize?: number;
  /** Query string to filter creatives. If no filter is specified, all active creatives will be returned. Example: 'accountId=12345 AND (dealsStatus:DISAPPROVED AND disapprovalReason:UNACCEPTABLE_CONTENT) OR declaredAttributes:IS_COOKIE_TARGETED' */
  filter?: string;
  /** Controls the amount of information included in the response. By default only creativeServingDecision is included. To retrieve the entire creative resource (including the declared fields and the creative content) specify the view as "FULL". */
  view?:
    | "CREATIVE_VIEW_UNSPECIFIED"
    | "SERVING_DECISION_ONLY"
    | "FULL"
    | (string & {});
}

export const ListBiddersCreativesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/creatives" }),
    svc,
  ) as unknown as Schema.Schema<ListBiddersCreativesRequest>;

export type ListBiddersCreativesResponse = ListCreativesResponse;
export const ListBiddersCreativesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListCreativesResponse;

export type ListBiddersCreativesError = DefaultErrors;

/** Lists creatives as they are at the time of the initial request. This call may take multiple hours to complete. For large, paginated requests, this method returns a snapshot of creatives at the time of request for the first page. `lastStatusUpdate` and `creativeServingDecision` may be outdated for creatives on sequential pages. We recommend [Google Cloud Pub/Sub](//cloud.google.com/pubsub/docs/overview) to view the latest status. */
export const listBiddersCreatives: API.PaginatedOperationMethod<
  ListBiddersCreativesRequest,
  ListBiddersCreativesResponse,
  ListBiddersCreativesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListBiddersCreativesRequest,
  output: ListBiddersCreativesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ActivateBiddersPretargetingConfigsRequest {
  /** Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId} */
  name: string;
  /** Request body */
  body?: ActivatePretargetingConfigRequest;
}

export const ActivateBiddersPretargetingConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ActivatePretargetingConfigRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:activate", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ActivateBiddersPretargetingConfigsRequest>;

export type ActivateBiddersPretargetingConfigsResponse = PretargetingConfig;
export const ActivateBiddersPretargetingConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PretargetingConfig;

export type ActivateBiddersPretargetingConfigsError = DefaultErrors;

/** Activates a pretargeting configuration. */
export const activateBiddersPretargetingConfigs: API.OperationMethod<
  ActivateBiddersPretargetingConfigsRequest,
  ActivateBiddersPretargetingConfigsResponse,
  ActivateBiddersPretargetingConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ActivateBiddersPretargetingConfigsRequest,
  output: ActivateBiddersPretargetingConfigsResponse,
  errors: [],
}));

export interface CreateBiddersPretargetingConfigsRequest {
  /** Required. Name of the bidder to create the pretargeting configuration for. Format: bidders/{bidderAccountId} */
  parent: string;
  /** Request body */
  body?: PretargetingConfig;
}

export const CreateBiddersPretargetingConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(PretargetingConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{parent}/pretargetingConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateBiddersPretargetingConfigsRequest>;

export type CreateBiddersPretargetingConfigsResponse = PretargetingConfig;
export const CreateBiddersPretargetingConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PretargetingConfig;

export type CreateBiddersPretargetingConfigsError = DefaultErrors;

/** Creates a pretargeting configuration. A pretargeting configuration's state (PretargetingConfig.state) is active upon creation, and it will start to affect traffic shortly after. A bidder may create a maximum of 10 pretargeting configurations. Attempts to exceed this maximum results in a 400 bad request error. */
export const createBiddersPretargetingConfigs: API.OperationMethod<
  CreateBiddersPretargetingConfigsRequest,
  CreateBiddersPretargetingConfigsResponse,
  CreateBiddersPretargetingConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateBiddersPretargetingConfigsRequest,
  output: CreateBiddersPretargetingConfigsResponse,
  errors: [],
}));

export interface RemoveTargetedPublishersBiddersPretargetingConfigsRequest {
  /** Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId} */
  pretargetingConfig: string;
  /** Request body */
  body?: RemoveTargetedPublishersRequest;
}

export const RemoveTargetedPublishersBiddersPretargetingConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pretargetingConfig: Schema.String.pipe(T.HttpPath("pretargetingConfig")),
    body: Schema.optional(RemoveTargetedPublishersRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{pretargetingConfig}:removeTargetedPublishers",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RemoveTargetedPublishersBiddersPretargetingConfigsRequest>;

export type RemoveTargetedPublishersBiddersPretargetingConfigsResponse =
  PretargetingConfig;
export const RemoveTargetedPublishersBiddersPretargetingConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PretargetingConfig;

export type RemoveTargetedPublishersBiddersPretargetingConfigsError =
  DefaultErrors;

/** Removes targeted publishers from the pretargeting config. */
export const removeTargetedPublishersBiddersPretargetingConfigs: API.OperationMethod<
  RemoveTargetedPublishersBiddersPretargetingConfigsRequest,
  RemoveTargetedPublishersBiddersPretargetingConfigsResponse,
  RemoveTargetedPublishersBiddersPretargetingConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RemoveTargetedPublishersBiddersPretargetingConfigsRequest,
  output: RemoveTargetedPublishersBiddersPretargetingConfigsResponse,
  errors: [],
}));

export interface AddTargetedPublishersBiddersPretargetingConfigsRequest {
  /** Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId} */
  pretargetingConfig: string;
  /** Request body */
  body?: AddTargetedPublishersRequest;
}

export const AddTargetedPublishersBiddersPretargetingConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pretargetingConfig: Schema.String.pipe(T.HttpPath("pretargetingConfig")),
    body: Schema.optional(AddTargetedPublishersRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{pretargetingConfig}:addTargetedPublishers",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddTargetedPublishersBiddersPretargetingConfigsRequest>;

export type AddTargetedPublishersBiddersPretargetingConfigsResponse =
  PretargetingConfig;
export const AddTargetedPublishersBiddersPretargetingConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PretargetingConfig;

export type AddTargetedPublishersBiddersPretargetingConfigsError =
  DefaultErrors;

/** Adds targeted publishers to the pretargeting config. */
export const addTargetedPublishersBiddersPretargetingConfigs: API.OperationMethod<
  AddTargetedPublishersBiddersPretargetingConfigsRequest,
  AddTargetedPublishersBiddersPretargetingConfigsResponse,
  AddTargetedPublishersBiddersPretargetingConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddTargetedPublishersBiddersPretargetingConfigsRequest,
  output: AddTargetedPublishersBiddersPretargetingConfigsResponse,
  errors: [],
}));

export interface DeleteBiddersPretargetingConfigsRequest {
  /** Required. The name of the pretargeting configuration to delete. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId} */
  name: string;
}

export const DeleteBiddersPretargetingConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteBiddersPretargetingConfigsRequest>;

export type DeleteBiddersPretargetingConfigsResponse = Empty;
export const DeleteBiddersPretargetingConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteBiddersPretargetingConfigsError = DefaultErrors;

/** Deletes a pretargeting configuration. */
export const deleteBiddersPretargetingConfigs: API.OperationMethod<
  DeleteBiddersPretargetingConfigsRequest,
  DeleteBiddersPretargetingConfigsResponse,
  DeleteBiddersPretargetingConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteBiddersPretargetingConfigsRequest,
  output: DeleteBiddersPretargetingConfigsResponse,
  errors: [],
}));

export interface ListBiddersPretargetingConfigsRequest {
  /** A token identifying a page of results the server should return. This value is received from a previous `ListPretargetingConfigs` call in ListPretargetingConfigsResponse.nextPageToken. */
  pageToken?: string;
  /** Required. Name of the bidder whose pretargeting configurations will be listed. Format: bidders/{bidderAccountId} */
  parent: string;
  /** The maximum number of pretargeting configurations to return. If unspecified, at most 10 pretargeting configurations will be returned. The maximum value is 100; values above 100 will be coerced to 100. */
  pageSize?: number;
}

export const ListBiddersPretargetingConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/pretargetingConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListBiddersPretargetingConfigsRequest>;

export type ListBiddersPretargetingConfigsResponse =
  ListPretargetingConfigsResponse;
export const ListBiddersPretargetingConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListPretargetingConfigsResponse;

export type ListBiddersPretargetingConfigsError = DefaultErrors;

/** Lists all pretargeting configurations for a single bidder. */
export const listBiddersPretargetingConfigs: API.PaginatedOperationMethod<
  ListBiddersPretargetingConfigsRequest,
  ListBiddersPretargetingConfigsResponse,
  ListBiddersPretargetingConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListBiddersPretargetingConfigsRequest,
  output: ListBiddersPretargetingConfigsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface RemoveTargetedSitesBiddersPretargetingConfigsRequest {
  /** Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId} */
  pretargetingConfig: string;
  /** Request body */
  body?: RemoveTargetedSitesRequest;
}

export const RemoveTargetedSitesBiddersPretargetingConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pretargetingConfig: Schema.String.pipe(T.HttpPath("pretargetingConfig")),
    body: Schema.optional(RemoveTargetedSitesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{pretargetingConfig}:removeTargetedSites",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RemoveTargetedSitesBiddersPretargetingConfigsRequest>;

export type RemoveTargetedSitesBiddersPretargetingConfigsResponse =
  PretargetingConfig;
export const RemoveTargetedSitesBiddersPretargetingConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PretargetingConfig;

export type RemoveTargetedSitesBiddersPretargetingConfigsError = DefaultErrors;

/** Removes targeted sites from the pretargeting configuration. */
export const removeTargetedSitesBiddersPretargetingConfigs: API.OperationMethod<
  RemoveTargetedSitesBiddersPretargetingConfigsRequest,
  RemoveTargetedSitesBiddersPretargetingConfigsResponse,
  RemoveTargetedSitesBiddersPretargetingConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RemoveTargetedSitesBiddersPretargetingConfigsRequest,
  output: RemoveTargetedSitesBiddersPretargetingConfigsResponse,
  errors: [],
}));

export interface PatchBiddersPretargetingConfigsRequest {
  /** Output only. Name of the pretargeting config that must follow the pattern `bidders/{bidder_account_id}/pretargetingConfigs/{config_id}` */
  name: string;
  /** Field mask to use for partial in-place updates. */
  updateMask?: string;
  /** Request body */
  body?: PretargetingConfig;
}

export const PatchBiddersPretargetingConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(PretargetingConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchBiddersPretargetingConfigsRequest>;

export type PatchBiddersPretargetingConfigsResponse = PretargetingConfig;
export const PatchBiddersPretargetingConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PretargetingConfig;

export type PatchBiddersPretargetingConfigsError = DefaultErrors;

/** Updates a pretargeting configuration. */
export const patchBiddersPretargetingConfigs: API.OperationMethod<
  PatchBiddersPretargetingConfigsRequest,
  PatchBiddersPretargetingConfigsResponse,
  PatchBiddersPretargetingConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchBiddersPretargetingConfigsRequest,
  output: PatchBiddersPretargetingConfigsResponse,
  errors: [],
}));

export interface RemoveTargetedAppsBiddersPretargetingConfigsRequest {
  /** Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId} */
  pretargetingConfig: string;
  /** Request body */
  body?: RemoveTargetedAppsRequest;
}

export const RemoveTargetedAppsBiddersPretargetingConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pretargetingConfig: Schema.String.pipe(T.HttpPath("pretargetingConfig")),
    body: Schema.optional(RemoveTargetedAppsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{pretargetingConfig}:removeTargetedApps",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RemoveTargetedAppsBiddersPretargetingConfigsRequest>;

export type RemoveTargetedAppsBiddersPretargetingConfigsResponse =
  PretargetingConfig;
export const RemoveTargetedAppsBiddersPretargetingConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PretargetingConfig;

export type RemoveTargetedAppsBiddersPretargetingConfigsError = DefaultErrors;

/** Removes targeted apps from the pretargeting configuration. */
export const removeTargetedAppsBiddersPretargetingConfigs: API.OperationMethod<
  RemoveTargetedAppsBiddersPretargetingConfigsRequest,
  RemoveTargetedAppsBiddersPretargetingConfigsResponse,
  RemoveTargetedAppsBiddersPretargetingConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RemoveTargetedAppsBiddersPretargetingConfigsRequest,
  output: RemoveTargetedAppsBiddersPretargetingConfigsResponse,
  errors: [],
}));

export interface GetBiddersPretargetingConfigsRequest {
  /** Required. Name of the pretargeting configuration to get. Format: bidders/{bidderAccountId}/pretargetingConfigs/{configId} */
  name: string;
}

export const GetBiddersPretargetingConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetBiddersPretargetingConfigsRequest>;

export type GetBiddersPretargetingConfigsResponse = PretargetingConfig;
export const GetBiddersPretargetingConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PretargetingConfig;

export type GetBiddersPretargetingConfigsError = DefaultErrors;

/** Gets a pretargeting configuration. */
export const getBiddersPretargetingConfigs: API.OperationMethod<
  GetBiddersPretargetingConfigsRequest,
  GetBiddersPretargetingConfigsResponse,
  GetBiddersPretargetingConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBiddersPretargetingConfigsRequest,
  output: GetBiddersPretargetingConfigsResponse,
  errors: [],
}));

export interface SuspendBiddersPretargetingConfigsRequest {
  /** Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId} */
  name: string;
  /** Request body */
  body?: SuspendPretargetingConfigRequest;
}

export const SuspendBiddersPretargetingConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SuspendPretargetingConfigRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:suspend", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SuspendBiddersPretargetingConfigsRequest>;

export type SuspendBiddersPretargetingConfigsResponse = PretargetingConfig;
export const SuspendBiddersPretargetingConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PretargetingConfig;

export type SuspendBiddersPretargetingConfigsError = DefaultErrors;

/** Suspends a pretargeting configuration. */
export const suspendBiddersPretargetingConfigs: API.OperationMethod<
  SuspendBiddersPretargetingConfigsRequest,
  SuspendBiddersPretargetingConfigsResponse,
  SuspendBiddersPretargetingConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SuspendBiddersPretargetingConfigsRequest,
  output: SuspendBiddersPretargetingConfigsResponse,
  errors: [],
}));

export interface AddTargetedSitesBiddersPretargetingConfigsRequest {
  /** Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId} */
  pretargetingConfig: string;
  /** Request body */
  body?: AddTargetedSitesRequest;
}

export const AddTargetedSitesBiddersPretargetingConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pretargetingConfig: Schema.String.pipe(T.HttpPath("pretargetingConfig")),
    body: Schema.optional(AddTargetedSitesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{pretargetingConfig}:addTargetedSites",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddTargetedSitesBiddersPretargetingConfigsRequest>;

export type AddTargetedSitesBiddersPretargetingConfigsResponse =
  PretargetingConfig;
export const AddTargetedSitesBiddersPretargetingConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PretargetingConfig;

export type AddTargetedSitesBiddersPretargetingConfigsError = DefaultErrors;

/** Adds targeted sites to the pretargeting configuration. */
export const addTargetedSitesBiddersPretargetingConfigs: API.OperationMethod<
  AddTargetedSitesBiddersPretargetingConfigsRequest,
  AddTargetedSitesBiddersPretargetingConfigsResponse,
  AddTargetedSitesBiddersPretargetingConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddTargetedSitesBiddersPretargetingConfigsRequest,
  output: AddTargetedSitesBiddersPretargetingConfigsResponse,
  errors: [],
}));

export interface AddTargetedAppsBiddersPretargetingConfigsRequest {
  /** Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId} */
  pretargetingConfig: string;
  /** Request body */
  body?: AddTargetedAppsRequest;
}

export const AddTargetedAppsBiddersPretargetingConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pretargetingConfig: Schema.String.pipe(T.HttpPath("pretargetingConfig")),
    body: Schema.optional(AddTargetedAppsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{pretargetingConfig}:addTargetedApps",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddTargetedAppsBiddersPretargetingConfigsRequest>;

export type AddTargetedAppsBiddersPretargetingConfigsResponse =
  PretargetingConfig;
export const AddTargetedAppsBiddersPretargetingConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PretargetingConfig;

export type AddTargetedAppsBiddersPretargetingConfigsError = DefaultErrors;

/** Adds targeted apps to the pretargeting configuration. */
export const addTargetedAppsBiddersPretargetingConfigs: API.OperationMethod<
  AddTargetedAppsBiddersPretargetingConfigsRequest,
  AddTargetedAppsBiddersPretargetingConfigsResponse,
  AddTargetedAppsBiddersPretargetingConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddTargetedAppsBiddersPretargetingConfigsRequest,
  output: AddTargetedAppsBiddersPretargetingConfigsResponse,
  errors: [],
}));

export interface BatchApproveBiddersPublisherConnectionsRequest {
  /** Required. The bidder for whom publisher connections will be approved. Format: `bidders/{bidder}` where `{bidder}` is the account ID of the bidder. */
  parent: string;
  /** Request body */
  body?: BatchApprovePublisherConnectionsRequest;
}

export const BatchApproveBiddersPublisherConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BatchApprovePublisherConnectionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{parent}/publisherConnections:batchApprove",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchApproveBiddersPublisherConnectionsRequest>;

export type BatchApproveBiddersPublisherConnectionsResponse =
  BatchApprovePublisherConnectionsResponse;
export const BatchApproveBiddersPublisherConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchApprovePublisherConnectionsResponse;

export type BatchApproveBiddersPublisherConnectionsError = DefaultErrors;

/** Batch approves multiple publisher connections. */
export const batchApproveBiddersPublisherConnections: API.OperationMethod<
  BatchApproveBiddersPublisherConnectionsRequest,
  BatchApproveBiddersPublisherConnectionsResponse,
  BatchApproveBiddersPublisherConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchApproveBiddersPublisherConnectionsRequest,
  output: BatchApproveBiddersPublisherConnectionsResponse,
  errors: [],
}));

export interface GetBiddersPublisherConnectionsRequest {
  /** Required. Name of the publisher whose connection information is to be retrieved. In the pattern `bidders/{bidder}/publisherConnections/{publisher}` where `{bidder}` is the account ID of the bidder, and `{publisher}` is the ads.txt/app-ads.txt publisher ID. See publisherConnection.name. */
  name: string;
}

export const GetBiddersPublisherConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetBiddersPublisherConnectionsRequest>;

export type GetBiddersPublisherConnectionsResponse = PublisherConnection;
export const GetBiddersPublisherConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PublisherConnection;

export type GetBiddersPublisherConnectionsError = DefaultErrors;

/** Gets a publisher connection. */
export const getBiddersPublisherConnections: API.OperationMethod<
  GetBiddersPublisherConnectionsRequest,
  GetBiddersPublisherConnectionsResponse,
  GetBiddersPublisherConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBiddersPublisherConnectionsRequest,
  output: GetBiddersPublisherConnectionsResponse,
  errors: [],
}));

export interface ListBiddersPublisherConnectionsRequest {
  /** A token identifying a page of results the server should return. Typically, this is the value of ListPublisherConnectionsResponse.nextPageToken returned from the previous call to the 'ListPublisherConnections' method. */
  pageToken?: string;
  /** Required. Name of the bidder for which publishers have initiated connections. The pattern for this resource is `bidders/{bidder}` where `{bidder}` represents the account ID of the bidder. */
  parent: string;
  /** Requested page size. The server may return fewer results than requested (due to timeout constraint) even if more are available through another call. If unspecified, the server will pick an appropriate default. Acceptable values are 1 to 5000, inclusive. */
  pageSize?: number;
  /** Order specification by which results should be sorted. If no sort order is specified, the results will be returned in alphabetic order based on the publisher's publisher code. Results can be sorted by `createTime`. Example: 'createTime DESC'. */
  orderBy?: string;
  /** Query string to filter publisher connections. Connections can be filtered by `displayName`, `publisherPlatform`, and `biddingState`. If no filter is specified, all publisher connections will be returned. Example: 'displayName="Great Publisher*" AND publisherPlatform=ADMOB AND biddingState != PENDING' See https://google.aip.dev/160 for more information about filtering syntax. */
  filter?: string;
}

export const ListBiddersPublisherConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/publisherConnections" }),
    svc,
  ) as unknown as Schema.Schema<ListBiddersPublisherConnectionsRequest>;

export type ListBiddersPublisherConnectionsResponse =
  ListPublisherConnectionsResponse;
export const ListBiddersPublisherConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListPublisherConnectionsResponse;

export type ListBiddersPublisherConnectionsError = DefaultErrors;

/** Lists publisher connections for a given bidder. */
export const listBiddersPublisherConnections: API.PaginatedOperationMethod<
  ListBiddersPublisherConnectionsRequest,
  ListBiddersPublisherConnectionsResponse,
  ListBiddersPublisherConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListBiddersPublisherConnectionsRequest,
  output: ListBiddersPublisherConnectionsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface BatchRejectBiddersPublisherConnectionsRequest {
  /** Required. The bidder for whom publisher connections will be rejected. Format: `bidders/{bidder}` where `{bidder}` is the account ID of the bidder. */
  parent: string;
  /** Request body */
  body?: BatchRejectPublisherConnectionsRequest;
}

export const BatchRejectBiddersPublisherConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BatchRejectPublisherConnectionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{parent}/publisherConnections:batchReject",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchRejectBiddersPublisherConnectionsRequest>;

export type BatchRejectBiddersPublisherConnectionsResponse =
  BatchRejectPublisherConnectionsResponse;
export const BatchRejectBiddersPublisherConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchRejectPublisherConnectionsResponse;

export type BatchRejectBiddersPublisherConnectionsError = DefaultErrors;

/** Batch rejects multiple publisher connections. */
export const batchRejectBiddersPublisherConnections: API.OperationMethod<
  BatchRejectBiddersPublisherConnectionsRequest,
  BatchRejectBiddersPublisherConnectionsResponse,
  BatchRejectBiddersPublisherConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchRejectBiddersPublisherConnectionsRequest,
  output: BatchRejectBiddersPublisherConnectionsResponse,
  errors: [],
}));

export interface GetBuyersRequest {
  /** Required. Name of the buyer to get. Format: `buyers/{buyerId}` */
  name: string;
}

export const GetBuyersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "GET", path: "v1/{name}" }),
  svc,
) as unknown as Schema.Schema<GetBuyersRequest>;

export type GetBuyersResponse = Buyer;
export const GetBuyersResponse = /*@__PURE__*/ /*#__PURE__*/ Buyer;

export type GetBuyersError = DefaultErrors;

/** Gets a buyer account by its name. */
export const getBuyers: API.OperationMethod<
  GetBuyersRequest,
  GetBuyersResponse,
  GetBuyersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBuyersRequest,
  output: GetBuyersResponse,
  errors: [],
}));

export interface ListBuyersRequest {
  /** The maximum number of buyers to return. If unspecified, at most 100 buyers will be returned. The maximum value is 500; values above 500 will be coerced to 500. */
  pageSize?: number;
  /** A token identifying a page of results the server should return. This value is received from a previous `ListBuyers` call in ListBuyersResponse.nextPageToken. */
  pageToken?: string;
}

export const ListBuyersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
}).pipe(
  T.Http({ method: "GET", path: "v1/buyers" }),
  svc,
) as unknown as Schema.Schema<ListBuyersRequest>;

export type ListBuyersResponse_Op = ListBuyersResponse;
export const ListBuyersResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ ListBuyersResponse;

export type ListBuyersError = DefaultErrors;

/** Lists all buyer account information the calling buyer user or service account is permissioned to manage. */
export const listBuyers: API.PaginatedOperationMethod<
  ListBuyersRequest,
  ListBuyersResponse_Op,
  ListBuyersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListBuyersRequest,
  output: ListBuyersResponse_Op,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetRemarketingTagBuyersRequest {
  /** Required. To fetch the remarketing tag for an account, the name must follow the pattern `buyers/{accountId}`, where `{accountId}` represents the ID of the buyer that owns the remarketing tag. For a bidder accessing the remarketing tag on behalf of a child seat buyer, `{accountId}` should represent the ID of the child seat buyer. To fetch the remarketing tag for a specific user list, the name must follow the pattern `buyers/{accountId}/userLists/{userListId}`. See UserList.name. */
  name: string;
}

export const GetRemarketingTagBuyersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}:getRemarketingTag" }),
    svc,
  ) as unknown as Schema.Schema<GetRemarketingTagBuyersRequest>;

export type GetRemarketingTagBuyersResponse = GetRemarketingTagResponse;
export const GetRemarketingTagBuyersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GetRemarketingTagResponse;

export type GetRemarketingTagBuyersError = DefaultErrors;

/** This has been sunset as of October 2023, and will return an error response if called. For more information, see the release notes: https://developers.google.com/authorized-buyers/apis/relnotes#real-time-bidding-api Gets remarketing tag for a buyer. A remarketing tag is a piece of JavaScript code that can be placed on a web page. When a user visits a page containing a remarketing tag, Google adds the user to a user list. */
export const getRemarketingTagBuyers: API.OperationMethod<
  GetRemarketingTagBuyersRequest,
  GetRemarketingTagBuyersResponse,
  GetRemarketingTagBuyersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRemarketingTagBuyersRequest,
  output: GetRemarketingTagBuyersResponse,
  errors: [],
}));

export interface PatchBuyersCreativesRequest {
  /** Field mask to use for partial in-place updates. */
  updateMask?: string;
  /** Output only. Name of the creative. Follows the pattern `buyers/{buyer}/creatives/{creative}`, where `{buyer}` represents the account ID of the buyer who owns the creative, and `{creative}` is the buyer-specific creative ID that references this creative in the bid response. */
  name: string;
  /** Request body */
  body?: Creative;
}

export const PatchBuyersCreativesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Creative).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchBuyersCreativesRequest>;

export type PatchBuyersCreativesResponse = Creative;
export const PatchBuyersCreativesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Creative;

export type PatchBuyersCreativesError = DefaultErrors;

/** Updates a creative. */
export const patchBuyersCreatives: API.OperationMethod<
  PatchBuyersCreativesRequest,
  PatchBuyersCreativesResponse,
  PatchBuyersCreativesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchBuyersCreativesRequest,
  output: PatchBuyersCreativesResponse,
  errors: [],
}));

export interface GetBuyersCreativesRequest {
  /** Controls the amount of information included in the response. By default only creativeServingDecision is included. To retrieve the entire creative resource (including the declared fields and the creative content) specify the view as "FULL". */
  view?:
    | "CREATIVE_VIEW_UNSPECIFIED"
    | "SERVING_DECISION_ONLY"
    | "FULL"
    | (string & {});
  /** Required. Name of the creative to retrieve. See creative.name. */
  name: string;
}

export const GetBuyersCreativesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetBuyersCreativesRequest>;

export type GetBuyersCreativesResponse = Creative;
export const GetBuyersCreativesResponse = /*@__PURE__*/ /*#__PURE__*/ Creative;

export type GetBuyersCreativesError = DefaultErrors;

/** Gets a creative. */
export const getBuyersCreatives: API.OperationMethod<
  GetBuyersCreativesRequest,
  GetBuyersCreativesResponse,
  GetBuyersCreativesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBuyersCreativesRequest,
  output: GetBuyersCreativesResponse,
  errors: [],
}));

export interface ListBuyersCreativesRequest {
  /** A token identifying a page of results the server should return. Typically, this is the value of ListCreativesResponse.nextPageToken returned from the previous call to the 'ListCreatives' method. Page tokens for continued pages are valid for up to five hours, counting from the call to 'ListCreatives' for the first page. */
  pageToken?: string;
  /** Required. Name of the parent buyer that owns the creatives. The pattern for this resource is either `buyers/{buyerAccountId}` or `bidders/{bidderAccountId}`. For `buyers/{buyerAccountId}`, the `buyerAccountId` can be one of the following: 1. The ID of the buyer that is accessing their own creatives. 2. The ID of the child seat buyer under a bidder account. So for listing creatives pertaining to the child seat buyer (`456`) under bidder account (`123`), you would use the pattern: `buyers/456`. 3. The ID of the bidder itself. So for listing creatives pertaining to bidder (`123`), you would use `buyers/123`. If you want to access all creatives pertaining to both the bidder and all of its child seat accounts, you would use `bidders/{bidderAccountId}`, for example, for all creatives pertaining to bidder (`123`), use `bidders/123`. */
  parent: string;
  /** Requested page size. The server may return fewer creatives than requested (due to timeout constraint) even if more are available through another call. If unspecified, server will pick an appropriate default. Acceptable values are 1 to 1000, inclusive. */
  pageSize?: number;
  /** Controls the amount of information included in the response. By default only creativeServingDecision is included. To retrieve the entire creative resource (including the declared fields and the creative content) specify the view as "FULL". */
  view?:
    | "CREATIVE_VIEW_UNSPECIFIED"
    | "SERVING_DECISION_ONLY"
    | "FULL"
    | (string & {});
  /** Query string to filter creatives. If no filter is specified, all active creatives will be returned. Example: 'accountId=12345 AND (dealsStatus:DISAPPROVED AND disapprovalReason:UNACCEPTABLE_CONTENT) OR declaredAttributes:IS_COOKIE_TARGETED' */
  filter?: string;
}

export const ListBuyersCreativesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/creatives" }),
    svc,
  ) as unknown as Schema.Schema<ListBuyersCreativesRequest>;

export type ListBuyersCreativesResponse = ListCreativesResponse;
export const ListBuyersCreativesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListCreativesResponse;

export type ListBuyersCreativesError = DefaultErrors;

/** Lists creatives as they are at the time of the initial request. This call may take multiple hours to complete. For large, paginated requests, this method returns a snapshot of creatives at the time of request for the first page. `lastStatusUpdate` and `creativeServingDecision` may be outdated for creatives on sequential pages. We recommend [Google Cloud Pub/Sub](//cloud.google.com/pubsub/docs/overview) to view the latest status. */
export const listBuyersCreatives: API.PaginatedOperationMethod<
  ListBuyersCreativesRequest,
  ListBuyersCreativesResponse,
  ListBuyersCreativesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListBuyersCreativesRequest,
  output: ListBuyersCreativesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateBuyersCreativesRequest {
  /** Required. The name of the parent buyer that the new creative belongs to that must follow the pattern `buyers/{buyerAccountId}`, where `{buyerAccountId}` represents the account ID of the buyer who owns a creative. For a bidder accessing creatives on behalf of a child seat buyer, `{buyerAccountId}` should represent the account ID of the child seat buyer. */
  parent: string;
  /** Request body */
  body?: Creative;
}

export const CreateBuyersCreativesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Creative).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{parent}/creatives", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateBuyersCreativesRequest>;

export type CreateBuyersCreativesResponse = Creative;
export const CreateBuyersCreativesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Creative;

export type CreateBuyersCreativesError = DefaultErrors;

/** Creates a creative. */
export const createBuyersCreatives: API.OperationMethod<
  CreateBuyersCreativesRequest,
  CreateBuyersCreativesResponse,
  CreateBuyersCreativesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateBuyersCreativesRequest,
  output: CreateBuyersCreativesResponse,
  errors: [],
}));

export interface GetBuyersUserListsRequest {
  /** Required. The name of the user list to be retrieved. See UserList.name. */
  name: string;
}

export const GetBuyersUserListsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetBuyersUserListsRequest>;

export type GetBuyersUserListsResponse = UserList;
export const GetBuyersUserListsResponse = /*@__PURE__*/ /*#__PURE__*/ UserList;

export type GetBuyersUserListsError = DefaultErrors;

/** Gets a user list by its name. */
export const getBuyersUserLists: API.OperationMethod<
  GetBuyersUserListsRequest,
  GetBuyersUserListsResponse,
  GetBuyersUserListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBuyersUserListsRequest,
  output: GetBuyersUserListsResponse,
  errors: [],
}));

export interface UpdateBuyersUserListsRequest {
  /** Output only. Name of the user list that must follow the pattern `buyers/{buyer}/userLists/{user_list}`, where `{buyer}` represents the account ID of the buyer who owns the user list. For a bidder accessing user lists on behalf of a child seat buyer, `{buyer}` represents the account ID of the child seat buyer. `{user_list}` is an int64 identifier assigned by Google to uniquely identify a user list. */
  name: string;
  /** Request body */
  body?: UserList;
}

export const UpdateBuyersUserListsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UserList).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateBuyersUserListsRequest>;

export type UpdateBuyersUserListsResponse = UserList;
export const UpdateBuyersUserListsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UserList;

export type UpdateBuyersUserListsError = DefaultErrors;

/** Updates the given user list. Only user lists with URLRestrictions can be updated. */
export const updateBuyersUserLists: API.OperationMethod<
  UpdateBuyersUserListsRequest,
  UpdateBuyersUserListsResponse,
  UpdateBuyersUserListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateBuyersUserListsRequest,
  output: UpdateBuyersUserListsResponse,
  errors: [],
}));

export interface CreateBuyersUserListsRequest {
  /** Required. The name of the parent buyer of the user list to be retrieved, which must follow the pattern `buyers/{buyerAccountId}`, where `{buyerAccountId}` represents the account ID of the buyer who owns the user list. For a bidder accessing user lists on behalf of a child seat buyer, `{buyerAccountId}` should represent the account ID of the child seat buyer. */
  parent: string;
  /** Request body */
  body?: UserList;
}

export const CreateBuyersUserListsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(UserList).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{parent}/userLists", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateBuyersUserListsRequest>;

export type CreateBuyersUserListsResponse = UserList;
export const CreateBuyersUserListsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UserList;

export type CreateBuyersUserListsError = DefaultErrors;

/** Creates a new user list. */
export const createBuyersUserLists: API.OperationMethod<
  CreateBuyersUserListsRequest,
  CreateBuyersUserListsResponse,
  CreateBuyersUserListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateBuyersUserListsRequest,
  output: CreateBuyersUserListsResponse,
  errors: [],
}));

export interface CloseBuyersUserListsRequest {
  /** Required. The name of the user list to close. See UserList.name */
  name: string;
  /** Request body */
  body?: CloseUserListRequest;
}

export const CloseBuyersUserListsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CloseUserListRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:close", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CloseBuyersUserListsRequest>;

export type CloseBuyersUserListsResponse = UserList;
export const CloseBuyersUserListsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UserList;

export type CloseBuyersUserListsError = DefaultErrors;

/** Changes the status of a user list to CLOSED. This prevents new users from being added to the user list. */
export const closeBuyersUserLists: API.OperationMethod<
  CloseBuyersUserListsRequest,
  CloseBuyersUserListsResponse,
  CloseBuyersUserListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CloseBuyersUserListsRequest,
  output: CloseBuyersUserListsResponse,
  errors: [],
}));

export interface OpenBuyersUserListsRequest {
  /** Required. The name of the user list to open. See UserList.name */
  name: string;
  /** Request body */
  body?: OpenUserListRequest;
}

export const OpenBuyersUserListsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(OpenUserListRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:open", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<OpenBuyersUserListsRequest>;

export type OpenBuyersUserListsResponse = UserList;
export const OpenBuyersUserListsResponse = /*@__PURE__*/ /*#__PURE__*/ UserList;

export type OpenBuyersUserListsError = DefaultErrors;

/** Changes the status of a user list to OPEN. This allows new users to be added to the user list. */
export const openBuyersUserLists: API.OperationMethod<
  OpenBuyersUserListsRequest,
  OpenBuyersUserListsResponse,
  OpenBuyersUserListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: OpenBuyersUserListsRequest,
  output: OpenBuyersUserListsResponse,
  errors: [],
}));

export interface GetRemarketingTagBuyersUserListsRequest {
  /** Required. To fetch the remarketing tag for an account, the name must follow the pattern `buyers/{accountId}`, where `{accountId}` represents the ID of the buyer that owns the remarketing tag. For a bidder accessing the remarketing tag on behalf of a child seat buyer, `{accountId}` should represent the ID of the child seat buyer. To fetch the remarketing tag for a specific user list, the name must follow the pattern `buyers/{accountId}/userLists/{userListId}`. See UserList.name. */
  name: string;
}

export const GetRemarketingTagBuyersUserListsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}:getRemarketingTag" }),
    svc,
  ) as unknown as Schema.Schema<GetRemarketingTagBuyersUserListsRequest>;

export type GetRemarketingTagBuyersUserListsResponse =
  GetRemarketingTagResponse;
export const GetRemarketingTagBuyersUserListsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GetRemarketingTagResponse;

export type GetRemarketingTagBuyersUserListsError = DefaultErrors;

/** This has been sunset as of October 2023, and will return an error response if called. For more information, see the release notes: https://developers.google.com/authorized-buyers/apis/relnotes#real-time-bidding-api Gets remarketing tag for a buyer. A remarketing tag is a piece of JavaScript code that can be placed on a web page. When a user visits a page containing a remarketing tag, Google adds the user to a user list. */
export const getRemarketingTagBuyersUserLists: API.OperationMethod<
  GetRemarketingTagBuyersUserListsRequest,
  GetRemarketingTagBuyersUserListsResponse,
  GetRemarketingTagBuyersUserListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRemarketingTagBuyersUserListsRequest,
  output: GetRemarketingTagBuyersUserListsResponse,
  errors: [],
}));

export interface ListBuyersUserListsRequest {
  /** Continuation page token as received from a previous response. */
  pageToken?: string;
  /** Required. The name of the parent buyer for the user lists to be returned that must follow the pattern `buyers/{buyerAccountId}`, where `{buyerAccountId}` represents the account ID of the buyer who owns user lists. For a bidder accessing user lists on behalf of a child seat buyer , `{buyerAccountId}` should represent the account ID of the child seat buyer. */
  parent: string;
  /** The number of results to return per page. */
  pageSize?: number;
}

export const ListBuyersUserListsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/userLists" }),
    svc,
  ) as unknown as Schema.Schema<ListBuyersUserListsRequest>;

export type ListBuyersUserListsResponse = ListUserListsResponse;
export const ListBuyersUserListsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListUserListsResponse;

export type ListBuyersUserListsError = DefaultErrors;

/** Lists the user lists visible to the current user. */
export const listBuyersUserLists: API.PaginatedOperationMethod<
  ListBuyersUserListsRequest,
  ListBuyersUserListsResponse,
  ListBuyersUserListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListBuyersUserListsRequest,
  output: ListBuyersUserListsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
