// ==========================================================================
// Merchant API (merchantapi reviews_v1beta)
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
  name: "merchantapi",
  version: "reviews_v1beta",
  rootUrl: "https://merchantapi.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface CustomAttribute {
  /** Subattributes within this attribute group. If `group_values` is not empty, `value` must be empty. */
  groupValues?: ReadonlyArray<CustomAttribute>;
  /** The value of the attribute. If `value` is not empty, `group_values` must be empty. */
  value?: string;
  /** The name of the attribute. */
  name?: string;
}

export const CustomAttribute: Schema.Schema<CustomAttribute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      groupValues: Schema.optional(Schema.Array(CustomAttribute)),
      value: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "CustomAttribute",
  }) as any as Schema.Schema<CustomAttribute>;

export interface MerchantReviewAttributes {
  /** Required. The timestamp indicating when the review was written. */
  reviewTime?: string;
  /** Optional. Human-readable display name for the merchant. */
  merchantDisplayName?: string;
  /** Optional. The country where the reviewer made the order defined by ISO 3166-1 Alpha-2 Country Code. */
  reviewCountry?: string;
  /** Optional. The maximum possible number for the rating. The value of the max rating must be greater than the value of the min rating. */
  maxRating?: string;
  /** Required. Must be unique and stable across all requests. In other words, if a request today and another 90 days ago refer to the same merchant, they must have the same id. */
  merchantId?: string;
  /** Optional. Set to true if the reviewer should remain anonymous. */
  isAnonymous?: boolean;
  /** Optional. The method used to collect the review. */
  collectionMethod?:
    | "COLLECTION_METHOD_UNSPECIFIED"
    | "MERCHANT_UNSOLICITED"
    | "POINT_OF_SALE"
    | "AFTER_FULFILLMENT"
    | (string & {});
  /** Optional. URL to the merchant's main website. Do not use a redirect URL for this value. In other words, the value should point directly to the merchant's site. */
  merchantLink?: string;
  /** Required. This should be any freeform text provided by the user and should not be truncated. If multiple responses to different questions are provided, all responses should be included, with the minimal context for the responses to make sense. Context should not be provided if questions were left unanswered. */
  content?: string;
  /** Optional. A permanent, unique identifier for the author of the review in the publisher's system. */
  reviewerId?: string;
  /** Optional. The reviewer's overall rating of the merchant. */
  rating?: number;
  /** Optional. The language of the review defined by BCP-47 language code. */
  reviewLanguage?: string;
  /** Optional. URL to the landing page that hosts the reviews for this merchant. Do not use a redirect URL. */
  merchantRatingLink?: string;
  /** Optional. The minimum possible number for the rating. This should be the worst possible rating and should not be a value for no rating. */
  minRating?: string;
  /** Optional. The title of the review. */
  title?: string;
  /** Optional. Display name of the review author. */
  reviewerUsername?: string;
}

export const MerchantReviewAttributes: Schema.Schema<MerchantReviewAttributes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reviewTime: Schema.optional(Schema.String),
    merchantDisplayName: Schema.optional(Schema.String),
    reviewCountry: Schema.optional(Schema.String),
    maxRating: Schema.optional(Schema.String),
    merchantId: Schema.optional(Schema.String),
    isAnonymous: Schema.optional(Schema.Boolean),
    collectionMethod: Schema.optional(Schema.String),
    merchantLink: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    reviewerId: Schema.optional(Schema.String),
    rating: Schema.optional(Schema.Number),
    reviewLanguage: Schema.optional(Schema.String),
    merchantRatingLink: Schema.optional(Schema.String),
    minRating: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    reviewerUsername: Schema.optional(Schema.String),
  }).annotate({ identifier: "MerchantReviewAttributes" });

export interface MerchantReviewDestinationStatus {
  /** Output only. The name of the reporting context. */
  reportingContext?:
    | "REPORTING_CONTEXT_ENUM_UNSPECIFIED"
    | "SHOPPING_ADS"
    | "DISCOVERY_ADS"
    | "DEMAND_GEN_ADS"
    | "DEMAND_GEN_ADS_DISCOVER_SURFACE"
    | "VIDEO_ADS"
    | "DISPLAY_ADS"
    | "LOCAL_INVENTORY_ADS"
    | "VEHICLE_INVENTORY_ADS"
    | "FREE_LISTINGS"
    | "FREE_LISTINGS_UCP_CHECKOUT"
    | "FREE_LOCAL_LISTINGS"
    | "FREE_LOCAL_VEHICLE_LISTINGS"
    | "YOUTUBE_AFFILIATE"
    | "YOUTUBE_SHOPPING"
    | "CLOUD_RETAIL"
    | "LOCAL_CLOUD_RETAIL"
    | "PRODUCT_REVIEWS"
    | "MERCHANT_REVIEWS"
    | "YOUTUBE_CHECKOUT"
    | (string & {});
}

export const MerchantReviewDestinationStatus: Schema.Schema<MerchantReviewDestinationStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reportingContext: Schema.optional(Schema.String),
  }).annotate({ identifier: "MerchantReviewDestinationStatus" });

export interface MerchantReviewItemLevelIssue {
  /** Output only. The reporting context the issue applies to. */
  reportingContext?:
    | "REPORTING_CONTEXT_ENUM_UNSPECIFIED"
    | "SHOPPING_ADS"
    | "DISCOVERY_ADS"
    | "DEMAND_GEN_ADS"
    | "DEMAND_GEN_ADS_DISCOVER_SURFACE"
    | "VIDEO_ADS"
    | "DISPLAY_ADS"
    | "LOCAL_INVENTORY_ADS"
    | "VEHICLE_INVENTORY_ADS"
    | "FREE_LISTINGS"
    | "FREE_LISTINGS_UCP_CHECKOUT"
    | "FREE_LOCAL_LISTINGS"
    | "FREE_LOCAL_VEHICLE_LISTINGS"
    | "YOUTUBE_AFFILIATE"
    | "YOUTUBE_SHOPPING"
    | "CLOUD_RETAIL"
    | "LOCAL_CLOUD_RETAIL"
    | "PRODUCT_REVIEWS"
    | "MERCHANT_REVIEWS"
    | "YOUTUBE_CHECKOUT"
    | (string & {});
  /** Output only. A detailed issue description in English. */
  detail?: string;
  /** Output only. A short issue description in English. */
  description?: string;
  /** Output only. Whether the issue can be resolved by the merchant. */
  resolution?: string;
  /** Output only. The error code of the issue. */
  code?: string;
  /** Output only. The URL of a web page to help with resolving this issue. */
  documentation?: string;
  /** Output only. How this issue affects serving of the merchant review. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "NOT_IMPACTED"
    | "DISAPPROVED"
    | (string & {});
  /** Output only. The attribute's name, if the issue is caused by a single attribute. */
  attribute?: string;
}

export const MerchantReviewItemLevelIssue: Schema.Schema<MerchantReviewItemLevelIssue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reportingContext: Schema.optional(Schema.String),
    detail: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    resolution: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
    documentation: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    attribute: Schema.optional(Schema.String),
  }).annotate({ identifier: "MerchantReviewItemLevelIssue" });

export interface MerchantReviewStatus {
  /** Output only. Date on which the item has been last updated, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format. */
  lastUpdateTime?: string;
  /** Output only. Date on which the item has been created, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format. */
  createTime?: string;
  /** Output only. The intended destinations for the merchant review. */
  destinationStatuses?: ReadonlyArray<MerchantReviewDestinationStatus>;
  /** Output only. A list of all issues associated with the merchant review. */
  itemLevelIssues?: ReadonlyArray<MerchantReviewItemLevelIssue>;
}

export const MerchantReviewStatus: Schema.Schema<MerchantReviewStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastUpdateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    destinationStatuses: Schema.optional(
      Schema.Array(MerchantReviewDestinationStatus),
    ),
    itemLevelIssues: Schema.optional(
      Schema.Array(MerchantReviewItemLevelIssue),
    ),
  }).annotate({ identifier: "MerchantReviewStatus" });

export interface MerchantReview {
  /** Required. The user provided merchant review ID to uniquely identify the merchant review. */
  merchantReviewId?: string;
  /** Optional. A list of merchant review attributes. */
  merchantReviewAttributes?: MerchantReviewAttributes;
  /** Identifier. The name of the merchant review. Format: `"{merchantreview.name=accounts/{account}/merchantReviews/{merchantReview}}"` */
  name?: string;
  /** Optional. A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the data specification in its generic form (for example, `{ "name": "size type", "value": "regular" }`). This is useful for submitting attributes not explicitly exposed by the API, such as experimental attributes. Maximum allowed number of characters for each custom attribute is 10240 (represents sum of characters for name and value). Maximum 2500 custom attributes can be set per product, with total size of 102.4kB. Underscores in custom attribute names are replaced by spaces upon insertion. */
  customAttributes?: ReadonlyArray<CustomAttribute>;
  /** Output only. The status of a merchant review, data validation issues, that is, information about a merchant review computed asynchronously. */
  merchantReviewStatus?: MerchantReviewStatus;
  /** Output only. The primary data source of the merchant review. */
  dataSource?: string;
}

export const MerchantReview: Schema.Schema<MerchantReview> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantReviewId: Schema.optional(Schema.String),
    merchantReviewAttributes: Schema.optional(MerchantReviewAttributes),
    name: Schema.optional(Schema.String),
    customAttributes: Schema.optional(Schema.Array(CustomAttribute)),
    merchantReviewStatus: Schema.optional(MerchantReviewStatus),
    dataSource: Schema.optional(Schema.String),
  }).annotate({ identifier: "MerchantReview" });

export interface ListMerchantReviewsResponse {
  /** The token to retrieve the next page of results. */
  nextPageToken?: string;
  /** The merchant review. */
  merchantReviews?: ReadonlyArray<MerchantReview>;
}

export const ListMerchantReviewsResponse: Schema.Schema<ListMerchantReviewsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    merchantReviews: Schema.optional(Schema.Array(MerchantReview)),
  }).annotate({ identifier: "ListMerchantReviewsResponse" });

export interface ProductReviewDestinationStatus {
  /** Output only. The name of the reporting context. */
  reportingContext?:
    | "REPORTING_CONTEXT_ENUM_UNSPECIFIED"
    | "SHOPPING_ADS"
    | "DISCOVERY_ADS"
    | "DEMAND_GEN_ADS"
    | "DEMAND_GEN_ADS_DISCOVER_SURFACE"
    | "VIDEO_ADS"
    | "DISPLAY_ADS"
    | "LOCAL_INVENTORY_ADS"
    | "VEHICLE_INVENTORY_ADS"
    | "FREE_LISTINGS"
    | "FREE_LISTINGS_UCP_CHECKOUT"
    | "FREE_LOCAL_LISTINGS"
    | "FREE_LOCAL_VEHICLE_LISTINGS"
    | "YOUTUBE_AFFILIATE"
    | "YOUTUBE_SHOPPING"
    | "CLOUD_RETAIL"
    | "LOCAL_CLOUD_RETAIL"
    | "PRODUCT_REVIEWS"
    | "MERCHANT_REVIEWS"
    | "YOUTUBE_CHECKOUT"
    | (string & {});
}

export const ProductReviewDestinationStatus: Schema.Schema<ProductReviewDestinationStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reportingContext: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductReviewDestinationStatus" });

export interface ProductReviewItemLevelIssue {
  /** Output only. How this issue affects serving of the product review. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "NOT_IMPACTED"
    | "DISAPPROVED"
    | (string & {});
  /** Output only. The attribute's name, if the issue is caused by a single attribute. */
  attribute?: string;
  /** Output only. The error code of the issue. */
  code?: string;
  /** Output only. The URL of a web page to help with resolving this issue. */
  documentation?: string;
  /** Output only. A short issue description in English. */
  description?: string;
  /** Output only. Whether the issue can be resolved by the merchant. */
  resolution?: string;
  /** Output only. The reporting context the issue applies to. */
  reportingContext?:
    | "REPORTING_CONTEXT_ENUM_UNSPECIFIED"
    | "SHOPPING_ADS"
    | "DISCOVERY_ADS"
    | "DEMAND_GEN_ADS"
    | "DEMAND_GEN_ADS_DISCOVER_SURFACE"
    | "VIDEO_ADS"
    | "DISPLAY_ADS"
    | "LOCAL_INVENTORY_ADS"
    | "VEHICLE_INVENTORY_ADS"
    | "FREE_LISTINGS"
    | "FREE_LISTINGS_UCP_CHECKOUT"
    | "FREE_LOCAL_LISTINGS"
    | "FREE_LOCAL_VEHICLE_LISTINGS"
    | "YOUTUBE_AFFILIATE"
    | "YOUTUBE_SHOPPING"
    | "CLOUD_RETAIL"
    | "LOCAL_CLOUD_RETAIL"
    | "PRODUCT_REVIEWS"
    | "MERCHANT_REVIEWS"
    | "YOUTUBE_CHECKOUT"
    | (string & {});
  /** Output only. A detailed issue description in English. */
  detail?: string;
}

export const ProductReviewItemLevelIssue: Schema.Schema<ProductReviewItemLevelIssue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    severity: Schema.optional(Schema.String),
    attribute: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
    documentation: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    resolution: Schema.optional(Schema.String),
    reportingContext: Schema.optional(Schema.String),
    detail: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductReviewItemLevelIssue" });

export interface ProductReviewStatus {
  /** Output only. Date on which the item has been created, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format. */
  createTime?: string;
  /** Output only. The intended destinations for the product review. */
  destinationStatuses?: ReadonlyArray<ProductReviewDestinationStatus>;
  /** Output only. A list of all issues associated with the product review. */
  itemLevelIssues?: ReadonlyArray<ProductReviewItemLevelIssue>;
  /** Output only. Date on which the item has been last updated, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format. */
  lastUpdateTime?: string;
}

export const ProductReviewStatus: Schema.Schema<ProductReviewStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    destinationStatuses: Schema.optional(
      Schema.Array(ProductReviewDestinationStatus),
    ),
    itemLevelIssues: Schema.optional(Schema.Array(ProductReviewItemLevelIssue)),
    lastUpdateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductReviewStatus" });

export interface ReviewLink {
  /** Optional. Type of the review URI. */
  type?: "TYPE_UNSPECIFIED" | "SINGLETON" | "GROUP" | (string & {});
  /** Optional. The URI of the review landing page. For example: `http://www.example.com/review_5.html`. */
  link?: string;
}

export const ReviewLink: Schema.Schema<ReviewLink> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    link: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReviewLink" });

export interface ProductReviewAttributes {
  /** Optional. Contains MPNs (manufacturer part numbers) associated with a product. */
  mpns?: ReadonlyArray<string>;
  /** Optional. The title of the review. */
  title?: string;
  /** Optional. The URI of the product. This URI can have the same value as the `review_link` element, if the review URI and the product URI are the same. */
  productLinks?: ReadonlyArray<string>;
  /** Optional. Contains SKUs (stock keeping units) associated with a product. Often this matches the product Offer Id in the product feed. */
  skus?: ReadonlyArray<string>;
  /** Optional. A permanent, unique identifier for the transaction associated with the review in the publisher's system. This ID can be used to indicate that multiple reviews are associated with the same transaction. */
  transactionId?: string;
  /** Optional. The name of the publisher of the product reviews. The information about the publisher, which may be a retailer, manufacturer, reviews service company, or any entity that publishes product reviews. */
  publisherName?: string;
  /** Optional. Contains the ratings associated with the review. The minimum possible number for the rating. This should be the worst possible rating and should not be a value for no rating. */
  minRating?: string;
  /** Optional. The name of the subclient of the product reviews. The subclient is an identifier of the product review source. It should be equivalent to the directory provided in the file data source path. */
  subclientName?: string;
  /** Optional. A link to the company favicon of the publisher. The image dimensions should be favicon size: 16x16 pixels. The image format should be GIF, JPG or PNG. */
  publisherFavicon?: string;
  /** Optional. The author of the product review. A permanent, unique identifier for the author of the review in the publisher's system. */
  reviewerId?: string;
  /** Optional. Descriptive name of a product. */
  productNames?: ReadonlyArray<string>;
  /** Optional. The URI of the review landing page. */
  reviewLink?: ReviewLink;
  /** Optional. Indicates whether the review is incentivized. */
  isIncentivizedReview?: boolean;
  /** Optional. Contains brand names associated with a product. */
  brands?: ReadonlyArray<string>;
  /** Optional. The name of the aggregator of the product reviews. A publisher may use a reviews aggregator to manage reviews and provide the feeds. This element indicates the use of an aggregator and contains information about the aggregator. */
  aggregatorName?: string;
  /** Optional. Contains GTINs (global trade item numbers) associated with a product. Sub-types of GTINs (e.g. UPC, EAN, ISBN, JAN) are supported. */
  gtins?: ReadonlyArray<string>;
  /** Optional. Indicates whether the reviewer's purchase is verified. */
  isVerifiedPurchase?: boolean;
  /** Optional. Set to true if the reviewer should remain anonymous. */
  reviewerIsAnonymous?: boolean;
  /** Optional. The name of the reviewer of the product review. */
  reviewerUsername?: string;
  /** Optional. Contains ASINs (Amazon Standard Identification Numbers) associated with a product. */
  asins?: ReadonlyArray<string>;
  /** Optional. The language of the review defined by BCP-47 language code. */
  reviewLanguage?: string;
  /** Optional. Contains the advantages based on the opinion of the reviewer. Omit boilerplate text like "pro:" unless it was written by the reviewer. */
  pros?: ReadonlyArray<string>;
  /** Optional. The reviewer's overall rating of the product. */
  rating?: number;
  /** Optional. The content of the review. If empty, the content might still get populated from pros and cons. */
  content?: string;
  /** Optional. Indicates whether the review is marked as spam in the publisher's system. */
  isSpam?: boolean;
  /** Optional. The method used to collect the review. */
  collectionMethod?:
    | "COLLECTION_METHOD_UNSPECIFIED"
    | "UNSOLICITED"
    | "POST_FULFILLMENT"
    | (string & {});
  /** Optional. The maximum possible number for the rating. The value of the max rating must be greater than the value of the min attribute. */
  maxRating?: string;
  /** Optional. The country of the review defined by ISO 3166-1 Alpha-2 Country Code. */
  reviewCountry?: string;
  /** Required. The timestamp indicating when the review was written. */
  reviewTime?: string;
  /** Optional. Contains the disadvantages based on the opinion of the reviewer. Omit boilerplate text like "con:" unless it was written by the reviewer. */
  cons?: ReadonlyArray<string>;
  /** Optional. A URI to an image of the reviewed product created by the review author. The URI does not have to end with an image file extension. */
  reviewerImageLinks?: ReadonlyArray<string>;
}

export const ProductReviewAttributes: Schema.Schema<ProductReviewAttributes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mpns: Schema.optional(Schema.Array(Schema.String)),
    title: Schema.optional(Schema.String),
    productLinks: Schema.optional(Schema.Array(Schema.String)),
    skus: Schema.optional(Schema.Array(Schema.String)),
    transactionId: Schema.optional(Schema.String),
    publisherName: Schema.optional(Schema.String),
    minRating: Schema.optional(Schema.String),
    subclientName: Schema.optional(Schema.String),
    publisherFavicon: Schema.optional(Schema.String),
    reviewerId: Schema.optional(Schema.String),
    productNames: Schema.optional(Schema.Array(Schema.String)),
    reviewLink: Schema.optional(ReviewLink),
    isIncentivizedReview: Schema.optional(Schema.Boolean),
    brands: Schema.optional(Schema.Array(Schema.String)),
    aggregatorName: Schema.optional(Schema.String),
    gtins: Schema.optional(Schema.Array(Schema.String)),
    isVerifiedPurchase: Schema.optional(Schema.Boolean),
    reviewerIsAnonymous: Schema.optional(Schema.Boolean),
    reviewerUsername: Schema.optional(Schema.String),
    asins: Schema.optional(Schema.Array(Schema.String)),
    reviewLanguage: Schema.optional(Schema.String),
    pros: Schema.optional(Schema.Array(Schema.String)),
    rating: Schema.optional(Schema.Number),
    content: Schema.optional(Schema.String),
    isSpam: Schema.optional(Schema.Boolean),
    collectionMethod: Schema.optional(Schema.String),
    maxRating: Schema.optional(Schema.String),
    reviewCountry: Schema.optional(Schema.String),
    reviewTime: Schema.optional(Schema.String),
    cons: Schema.optional(Schema.Array(Schema.String)),
    reviewerImageLinks: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ProductReviewAttributes" });

export interface ProductReview {
  /** Output only. The status of a product review, data validation issues, that is, information about a product review computed asynchronously. */
  productReviewStatus?: ProductReviewStatus;
  /** Required. The permanent, unique identifier for the product review in the publisher’s system. */
  productReviewId?: string;
  /** Output only. The primary data source of the product review. */
  dataSource?: string;
  /** Identifier. The name of the product review. Format: `"{productreview.name=accounts/{account}/productReviews/{productReview}}"` */
  name?: string;
  /** Optional. A list of product review attributes. */
  productReviewAttributes?: ProductReviewAttributes;
  /** Optional. A list of custom (merchant-provided) attributes. */
  customAttributes?: ReadonlyArray<CustomAttribute>;
}

export const ProductReview: Schema.Schema<ProductReview> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productReviewStatus: Schema.optional(ProductReviewStatus),
    productReviewId: Schema.optional(Schema.String),
    dataSource: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    productReviewAttributes: Schema.optional(ProductReviewAttributes),
    customAttributes: Schema.optional(Schema.Array(CustomAttribute)),
  }).annotate({ identifier: "ProductReview" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface ProductChange {
  /** Countries that have the change (if applicable). Represented in the ISO 3166 format. */
  regionCode?: string;
  /** The old value of the changed resource or attribute. If empty, it means that the product was created. Will have one of these values : (`approved`, `pending`, `disapproved`, ``) */
  oldValue?: string;
  /** The new value of the changed resource or attribute. If empty, it means that the product was deleted. Will have one of these values : (`approved`, `pending`, `disapproved`, ``) */
  newValue?: string;
  /** Reporting contexts that have the change (if applicable). Currently this field supports only (`SHOPPING_ADS`, `LOCAL_INVENTORY_ADS`, `YOUTUBE_SHOPPING`, `YOUTUBE_CHECKOUT`, `YOUTUBE_AFFILIATE`) from the enum value [ReportingContextEnum](/merchant/api/reference/rest/Shared.Types/ReportingContextEnum) */
  reportingContext?:
    | "REPORTING_CONTEXT_ENUM_UNSPECIFIED"
    | "SHOPPING_ADS"
    | "DISCOVERY_ADS"
    | "DEMAND_GEN_ADS"
    | "DEMAND_GEN_ADS_DISCOVER_SURFACE"
    | "VIDEO_ADS"
    | "DISPLAY_ADS"
    | "LOCAL_INVENTORY_ADS"
    | "VEHICLE_INVENTORY_ADS"
    | "FREE_LISTINGS"
    | "FREE_LISTINGS_UCP_CHECKOUT"
    | "FREE_LOCAL_LISTINGS"
    | "FREE_LOCAL_VEHICLE_LISTINGS"
    | "YOUTUBE_AFFILIATE"
    | "YOUTUBE_SHOPPING"
    | "CLOUD_RETAIL"
    | "LOCAL_CLOUD_RETAIL"
    | "PRODUCT_REVIEWS"
    | "MERCHANT_REVIEWS"
    | "YOUTUBE_CHECKOUT"
    | (string & {});
}

export const ProductChange: Schema.Schema<ProductChange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regionCode: Schema.optional(Schema.String),
    oldValue: Schema.optional(Schema.String),
    newValue: Schema.optional(Schema.String),
    reportingContext: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductChange" });

export interface ListProductReviewsResponse {
  /** The product review. */
  productReviews?: ReadonlyArray<ProductReview>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListProductReviewsResponse: Schema.Schema<ListProductReviewsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productReviews: Schema.optional(Schema.Array(ProductReview)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListProductReviewsResponse" });

export interface ProductStatusChangeMessage {
  /** A message to describe the change that happened to the product */
  changes?: ReadonlyArray<ProductChange>;
  /** The target account that owns the entity that changed. Format : `accounts/{merchant_id}` */
  account?: string;
  /** The product name. Format: `accounts/{account}/products/{product}` */
  resource?: string;
  /** The resource that changed, in this case it will always be `Product`. */
  resourceType?: "RESOURCE_UNSPECIFIED" | "PRODUCT" | (string & {});
  /** The attribute in the resource that changed, in this case it will be always `Status`. */
  attribute?: "ATTRIBUTE_UNSPECIFIED" | "STATUS" | (string & {});
  /** The account that manages the merchant's account. can be the same as merchant id if it is standalone account. Format : `accounts/{service_provider_id}` */
  managingAccount?: string;
  /** The product id. */
  resourceId?: string;
  /** Optional. The product expiration time. This field will not be set if the notification is sent for a product deletion event. */
  expirationTime?: string;
  /** The time at which the event was generated. If you want to order the notification messages you receive you should rely on this field not on the order of receiving the notifications. */
  eventTime?: string;
}

export const ProductStatusChangeMessage: Schema.Schema<ProductStatusChangeMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    changes: Schema.optional(Schema.Array(ProductChange)),
    account: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
    attribute: Schema.optional(Schema.String),
    managingAccount: Schema.optional(Schema.String),
    resourceId: Schema.optional(Schema.String),
    expirationTime: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductStatusChangeMessage" });

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

export interface GetAccountsMerchantReviewsRequest {
  /** Required. The ID of the merchant review. Format: accounts/{account}/merchantReviews/{merchantReview} */
  name: string;
}

export const GetAccountsMerchantReviewsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "reviews/v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetAccountsMerchantReviewsRequest>;

export type GetAccountsMerchantReviewsResponse = MerchantReview;
export const GetAccountsMerchantReviewsResponse =
  /*@__PURE__*/ /*#__PURE__*/ MerchantReview;

export type GetAccountsMerchantReviewsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a merchant review. */
export const getAccountsMerchantReviews: API.OperationMethod<
  GetAccountsMerchantReviewsRequest,
  GetAccountsMerchantReviewsResponse,
  GetAccountsMerchantReviewsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsMerchantReviewsRequest,
  output: GetAccountsMerchantReviewsResponse,
  errors: [NotFound, Forbidden],
}));

export interface InsertAccountsMerchantReviewsRequest {
  /** Required. The data source of the [merchantreview](https://support.google.com/merchants/answer/7045996?sjid=5253581244217581976-EU) Format: `accounts/{account}/dataSources/{datasource}`. */
  dataSource?: string;
  /** Required. The account where the merchant review will be inserted. Format: accounts/{account} */
  parent: string;
  /** Request body */
  body?: MerchantReview;
}

export const InsertAccountsMerchantReviewsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataSource: Schema.optional(Schema.String).pipe(T.HttpQuery("dataSource")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(MerchantReview).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "reviews/v1beta/{+parent}/merchantReviews:insert",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertAccountsMerchantReviewsRequest>;

export type InsertAccountsMerchantReviewsResponse = MerchantReview;
export const InsertAccountsMerchantReviewsResponse =
  /*@__PURE__*/ /*#__PURE__*/ MerchantReview;

export type InsertAccountsMerchantReviewsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a review for your Merchant Center account. If the review already exists, then the review is replaced with the new instance. */
export const insertAccountsMerchantReviews: API.OperationMethod<
  InsertAccountsMerchantReviewsRequest,
  InsertAccountsMerchantReviewsResponse,
  InsertAccountsMerchantReviewsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertAccountsMerchantReviewsRequest,
  output: InsertAccountsMerchantReviewsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteAccountsMerchantReviewsRequest {
  /** Required. The ID of the merchant review. Format: accounts/{account}/merchantReviews/{merchantReview} */
  name: string;
}

export const DeleteAccountsMerchantReviewsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "reviews/v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteAccountsMerchantReviewsRequest>;

export type DeleteAccountsMerchantReviewsResponse = Empty;
export const DeleteAccountsMerchantReviewsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteAccountsMerchantReviewsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes merchant review. */
export const deleteAccountsMerchantReviews: API.OperationMethod<
  DeleteAccountsMerchantReviewsRequest,
  DeleteAccountsMerchantReviewsResponse,
  DeleteAccountsMerchantReviewsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccountsMerchantReviewsRequest,
  output: DeleteAccountsMerchantReviewsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAccountsMerchantReviewsRequest {
  /** Optional. A page token, received from a previous `ListMerchantReviews` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMerchantReviews` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The account to list merchant reviews for. Format: accounts/{account} */
  parent: string;
  /** Optional. The maximum number of merchant reviews to return. The service can return fewer than this value. The maximum value is 1000; values above 1000 are coerced to 1000. If unspecified, the maximum number of reviews is returned. */
  pageSize?: number;
}

export const ListAccountsMerchantReviewsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "reviews/v1beta/{+parent}/merchantReviews" }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsMerchantReviewsRequest>;

export type ListAccountsMerchantReviewsResponse = ListMerchantReviewsResponse;
export const ListAccountsMerchantReviewsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListMerchantReviewsResponse;

export type ListAccountsMerchantReviewsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists merchant reviews. */
export const listAccountsMerchantReviews: API.PaginatedOperationMethod<
  ListAccountsMerchantReviewsRequest,
  ListAccountsMerchantReviewsResponse,
  ListAccountsMerchantReviewsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsMerchantReviewsRequest,
  output: ListAccountsMerchantReviewsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListAccountsProductReviewsRequest {
  /** Optional. The maximum number of products to return. The service may return fewer than this value. */
  pageSize?: number;
  /** Required. The account to list product reviews for. Format: accounts/{account} */
  parent: string;
  /** Optional. A page token, received from a previous `ListProductReviews` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProductReviews` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListAccountsProductReviewsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "reviews/v1beta/{+parent}/productReviews" }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsProductReviewsRequest>;

export type ListAccountsProductReviewsResponse = ListProductReviewsResponse;
export const ListAccountsProductReviewsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListProductReviewsResponse;

export type ListAccountsProductReviewsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists product reviews. */
export const listAccountsProductReviews: API.PaginatedOperationMethod<
  ListAccountsProductReviewsRequest,
  ListAccountsProductReviewsResponse,
  ListAccountsProductReviewsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsProductReviewsRequest,
  output: ListAccountsProductReviewsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface InsertAccountsProductReviewsRequest {
  /** Required. The account where the product review will be inserted. Format: accounts/{account} */
  parent: string;
  /** Required. Format: `accounts/{account}/dataSources/{datasource}`. */
  dataSource?: string;
  /** Request body */
  body?: ProductReview;
}

export const InsertAccountsProductReviewsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    dataSource: Schema.optional(Schema.String).pipe(T.HttpQuery("dataSource")),
    body: Schema.optional(ProductReview).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "reviews/v1beta/{+parent}/productReviews:insert",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertAccountsProductReviewsRequest>;

export type InsertAccountsProductReviewsResponse = ProductReview;
export const InsertAccountsProductReviewsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProductReview;

export type InsertAccountsProductReviewsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a product review. */
export const insertAccountsProductReviews: API.OperationMethod<
  InsertAccountsProductReviewsRequest,
  InsertAccountsProductReviewsResponse,
  InsertAccountsProductReviewsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertAccountsProductReviewsRequest,
  output: InsertAccountsProductReviewsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteAccountsProductReviewsRequest {
  /** Required. The ID of the Product review. Format: accounts/{account}/productReviews/{productReview} */
  name: string;
}

export const DeleteAccountsProductReviewsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "reviews/v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteAccountsProductReviewsRequest>;

export type DeleteAccountsProductReviewsResponse = Empty;
export const DeleteAccountsProductReviewsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteAccountsProductReviewsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a product review. */
export const deleteAccountsProductReviews: API.OperationMethod<
  DeleteAccountsProductReviewsRequest,
  DeleteAccountsProductReviewsResponse,
  DeleteAccountsProductReviewsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccountsProductReviewsRequest,
  output: DeleteAccountsProductReviewsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetAccountsProductReviewsRequest {
  /** Required. The ID of the merchant review. Format: accounts/{account}/productReviews/{productReview} */
  name: string;
}

export const GetAccountsProductReviewsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "reviews/v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetAccountsProductReviewsRequest>;

export type GetAccountsProductReviewsResponse = ProductReview;
export const GetAccountsProductReviewsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProductReview;

export type GetAccountsProductReviewsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a product review. */
export const getAccountsProductReviews: API.OperationMethod<
  GetAccountsProductReviewsRequest,
  GetAccountsProductReviewsResponse,
  GetAccountsProductReviewsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsProductReviewsRequest,
  output: GetAccountsProductReviewsResponse,
  errors: [NotFound, Forbidden],
}));
